"use client";

import { useId, useState, type FormEvent } from "react";
import { contactFormSchema, FIELD_LIMITS } from "@/lib/validation";
import { TurnstileWidget } from "./TurnstileWidget";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formId = useId();
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
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      preferredContactMethod: String(formData.get("preferredContactMethod") ?? "phone"),
      turnstileToken,
      company: String(formData.get("company") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(
        Object.fromEntries(
          Object.entries(parsed.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0] ?? ""])
        )
      );
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
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
      setServerMessage("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-border bg-surface p-8 text-center">
        <p className="font-display text-2xl">Message sent.</p>
        <p className="mt-2 text-muted">
          Thank you for reaching out — our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field, hidden off-screen rather than display:none */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id={`${formId}-fullName`} label="Full Name" required error={errors.fullName}>
        <input
          id={`${formId}-fullName`}
          name="fullName"
          type="text"
          required
          maxLength={FIELD_LIMITS.name}
          className={inputClass(!!errors.fullName)}
          aria-invalid={!!errors.fullName}
        />
      </Field>

      <Field id={`${formId}-phone`} label="Phone Number" required error={errors.phone}>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          maxLength={FIELD_LIMITS.phone}
          className={inputClass(!!errors.phone)}
          aria-invalid={!!errors.phone}
        />
      </Field>

      <Field id={`${formId}-email`} label="Email" error={errors.email}>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          maxLength={FIELD_LIMITS.email}
          className={inputClass(!!errors.email)}
          aria-invalid={!!errors.email}
        />
      </Field>

      <Field id={`${formId}-subject`} label="Subject" error={errors.subject}>
        <input
          id={`${formId}-subject`}
          name="subject"
          type="text"
          maxLength={FIELD_LIMITS.subject}
          className={inputClass(!!errors.subject)}
        />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium mb-2">Preferred Contact Method</legend>
        <div className="flex gap-4">
          {["phone", "whatsapp", "email"].map((method) => (
            <label key={method} className="flex items-center gap-2 text-sm capitalize">
              <input type="radio" name="preferredContactMethod" value={method} defaultChecked={method === "phone"} />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id={`${formId}-message`} label="Message" required error={errors.message}>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          maxLength={FIELD_LIMITS.message}
          className={inputClass(!!errors.message)}
          aria-invalid={!!errors.message}
        />
      </Field>

      <TurnstileWidget onToken={setTurnstileToken} />

      {serverMessage && (
        <p role="alert" className="text-sm text-brand-red">
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto bg-brand-red text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-red-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
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
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-brand-red">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full border bg-surface px-4 py-3 text-sm min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red",
    hasError ? "border-brand-red" : "border-border"
  );
}
