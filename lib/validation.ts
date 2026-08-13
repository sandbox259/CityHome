import { z } from "zod";

/** Shared field limits, enforced identically on client and server. */
export const FIELD_LIMITS = {
  name: 80,
  phone: 20,
  email: 120,
  subject: 120,
  message: 2000,
  requirements: 1000,
} as const;

export const preferredContactMethods = ["phone", "whatsapp", "email"] as const;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(FIELD_LIMITS.name),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(FIELD_LIMITS.phone)
    .regex(/^[0-9+()\-\s]+$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(FIELD_LIMITS.email).optional().or(z.literal("")),
  subject: z.string().trim().max(FIELD_LIMITS.subject).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more").max(FIELD_LIMITS.message),
  preferredContactMethod: z.enum(preferredContactMethods).default("phone"),
  //turnstileToken: z.string().min(1, "Verification failed, please retry"),
  turnstileToken: z.string().optional().or(z.literal("")),
  // Honeypot field — must stay empty. Bots that autofill every field trip this.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const enquiryFormSchema = z
  .object({
    propertyId: z.string().min(1),
    propertySlug: z.string().min(1),
    propertyName: z.string().min(1),
    fullName: z.string().trim().min(2, "Enter your full name").max(FIELD_LIMITS.name),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a valid phone number")
      .max(FIELD_LIMITS.phone)
      .regex(/^[0-9+()\-\s]+$/, "Enter a valid phone number"),
    email: z.string().trim().email("Enter a valid email").max(FIELD_LIMITS.email).optional().or(z.literal("")),
    checkIn: z.string().optional().or(z.literal("")),
    checkOut: z.string().optional().or(z.literal("")),
    guests: z.coerce.number().int().positive("Enter at least 1 guest").max(50).optional(),
    specialRequirements: z.string().trim().max(FIELD_LIMITS.requirements).optional().or(z.literal("")),
    consent: z.literal(true, {
      message: "Please confirm you agree to be contacted",
    }),
    pageUrl: z.string().url().optional().or(z.literal("")),
    utmSource: z.string().max(100).optional().or(z.literal("")),
    utmMedium: z.string().max(100).optional().or(z.literal("")),
    utmCampaign: z.string().max(100).optional().or(z.literal("")),
    turnstileToken: z.string().min(1, "Verification failed, please retry"),
    company: z.string().max(0).optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (!data.checkIn || !data.checkOut) return true;
      return new Date(data.checkOut) > new Date(data.checkIn);
    },
    { message: "Check-out must be after check-in", path: ["checkOut"] }
  );

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;
