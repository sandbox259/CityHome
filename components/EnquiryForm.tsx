"use client";

import { useId, useState, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { enquiryFormSchema, FIELD_LIMITS } from "@/lib/validation";
import { TurnstileWidget } from "./TurnstileWidget";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/property";

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({ property }: { property: Property }) {
  return (
    <Suspense fallback={<EnquiryFormFallback />}>
      <EnquiryFormInner property={property} />
    </Suspense>
  );
}

function EnquiryFormFallback() {
  return <div className="h-64 animate-pulse bg-border/40" aria-hidden="true" />;
}

function EnquiryFormInner({ property }: { property: Property }) {
  const formId = useId();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setServerMessage(null);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const values = {
      propertyId: property.id,
      propertySlug: property.slug,
      propertyName: property.name,
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      checkIn: String(formData.get("checkIn") ?? ""),
      checkOut: String(formData.get("checkOut") ?? ""),
      guests: formData.get("guests") ? Number(formData.get("guests")) : undefined,
      specialRequirements: String(formData.get("specialRequirements") ?? ""),
      consent: formData.get("consent") === "on",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      utmSource: searchParams.get("utm_source") ?? "",
      utmMedium: searchParams.get("utm_medium") ?? "",
      utmCampaign: searchParams.get("utm_campaign") ?? "",
      turnstileToken,
      company: String(formData.get("company") ?? ""),
    };

    const parsed = enquiryFormSchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(flat).map(([k, v]) => [k, v?.[0] ?? ""])));
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setServerMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setServerMessage("We couldn't reach the server. Please check your connection or use WhatsApp instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-border bg-surface p-6 text-center">
        <p className="font-display text-xl">Enquiry sent.</p>
        <p className="mt-2 text-sm text-muted">We&apos;ll be in touch shortly about {property.name}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor={`${formId}-propertyName`} className="block text-xs font-medium text-muted mb-1">
          Property
        </label>
        <input
          id={`${formId}-propertyName`}
          value={property.name}
          readOnly
          className="w-full border border-border bg-background px-4 py-2.5 text-sm text-muted"
        />
      </div>

      <Field id={`${formId}-fullName`} label="Full Name" required error={errors.fullName}>
        <input id={`${formId}-fullName`} name="fullName" required maxLength={FIELD_LIMITS.name} className={inputClass(!!errors.fullName)} />
      </Field>

      <Field id={`${formId}-phone`} label="Phone / WhatsApp" required error={errors.phone}>
        <input id={`${formId}-phone`} name="phone" type="tel" required maxLength={FIELD_LIMITS.phone} className={inputClass(!!errors.phone)} />
      </Field>

      <Field id={`${formId}-email`} label="Email" error={errors.email}>
        <input id={`${formId}-email`} name="email" type="email" maxLength={FIELD_LIMITS.email} className={inputClass(!!errors.email)} />
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field id={`${formId}-checkIn`} label="Check-in" error={errors.checkIn}>
          <input id={`${formId}-checkIn`} name="checkIn" type="date" className={inputClass(!!errors.checkIn)} />
        </Field>
        <Field id={`${formId}-checkOut`} label="Check-out" error={errors.checkOut}>
          <input id={`${formId}-checkOut`} name="checkOut" type="date" className={inputClass(!!errors.checkOut)} />
        </Field>
      </div>

      <Field id={`${formId}-guests`} label="Number of Guests" error={errors.guests}>
        <input
          id={`${formId}-guests`}
          name="guests"
          type="number"
          min={1}
          max={property.maxGuests}
          className={inputClass(!!errors.guests)}
        />
      </Field>

      <Field id={`${formId}-specialRequirements`} label="Special Requirements" error={errors.specialRequirements}>
        <textarea
          id={`${formId}-specialRequirements`}
          name="specialRequirements"
          rows={3}
          maxLength={FIELD_LIMITS.requirements}
          className={inputClass(!!errors.specialRequirements)}
        />
      </Field>

      <label className="flex items-start gap-2.5 text-xs text-muted">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        <span>
          I agree to be contacted by City Homes by Aashiyaanaa regarding this enquiry. *
        </span>
      </label>
      {errors.consent && (
        <p role="alert" className="text-xs text-brand-red">{errors.consent}</p>
      )}

      <TurnstileWidget onToken={setTurnstileToken} />

      {serverMessage && (
        <p role="alert" className="text-sm text-brand-red">{serverMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-red text-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-red-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Enquire"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-muted mb-1">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs text-brand-red">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full border bg-surface px-4 py-2.5 text-sm min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red",
    hasError ? "border-brand-red" : "border-border"
  );
}
