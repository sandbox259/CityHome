import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendContactNotification, sendGuestAcknowledgement } from "@/lib/resend";

// Edge runtime keeps this route compatible with the OpenNext Cloudflare
// adapter — no Node-only APIs (fs, Buffer-heavy work, etc.) are used here.
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

  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot: a filled hidden field means a bot filled every input.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
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
    await sendContactNotification(parsed.data);
    if (parsed.data.email) {
      await sendGuestAcknowledgement(parsed.data.email, parsed.data.fullName);
    }
  } catch (error) {
    console.error("contact:send-failed", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your message. Please try WhatsApp instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
