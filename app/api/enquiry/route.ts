import { NextRequest, NextResponse } from "next/server";
import { enquiryFormSchema } from "@/lib/validation";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendEnquiryNotification, sendGuestAcknowledgement } from "@/lib/resend";
import { getPropertyBySlug } from "@/data/properties";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed request body." },
      { status: 400 }
    );
  }

  const parsed = enquiryFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  // Never trust client-supplied property identity alone — re-validate
  // server-side against the canonical data source.
  const property = getPropertyBySlug(parsed.data.propertySlug);
  if (!property || property.id !== parsed.data.propertyId) {
    return NextResponse.json(
      { ok: false, error: "This property could not be found." },
      { status: 422 }
    );
  }

  const turnstileResult = await verifyTurnstileToken(
    parsed.data.turnstileToken,
    request.headers.get("cf-connecting-ip") ?? undefined
  );

  if (!turnstileResult.success) {
    return NextResponse.json(
      { ok: false, error: "We couldn't verify your submission. Please retry." },
      { status: 403 }
    );
  }

  try {
    await sendEnquiryNotification({ ...parsed.data, propertyName: property.name });
    if (parsed.data.email) {
      await sendGuestAcknowledgement(parsed.data.email, parsed.data.fullName);
    }
  } catch (error) {
    console.error("enquiry:send-failed", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your enquiry. Please try WhatsApp instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
