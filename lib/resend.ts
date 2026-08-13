import { Resend } from "resend";
import type { ContactFormValues } from "./validation";
import type { EnquiryFormValues } from "./validation";

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

const BRAND_HEADER = `
  <div style="font-family:Georgia,serif;padding:24px 0;border-bottom:2px solid #c6262e;margin-bottom:24px;">
    <span style="font-size:20px;letter-spacing:0.02em;color:#171717;">City Homes <em style="color:#c6262e;font-style:normal;">by Aashiyaanaa</em></span>
  </div>
`;

function row(label: string, value?: string | number | null) {
  if (value === undefined || value === null || value === "") return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#8a8178;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#171717;font-size:14px;">${value}</td></tr>`;
}

export async function sendContactNotification(values: ContactFormValues) {
  const resend = getResendClient();
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (!resend || !recipient) return { skipped: true };

  const html = `
    ${BRAND_HEADER}
    <h2 style="font-family:Georgia,serif;font-weight:500;color:#171717;">New general enquiry</h2>
    <table>
      ${row("Name", values.fullName)}
      ${row("Phone", values.phone)}
      ${row("Email", values.email)}
      ${row("Subject", values.subject)}
      ${row("Preferred contact", values.preferredContactMethod)}
    </table>
    <p style="font-size:14px;color:#171717;white-space:pre-wrap;margin-top:16px;">${escapeHtml(values.message)}</p>
  `;

  return resend.emails.send({
    from: "City Homes by Aashiyaanaa <info@enquiry.cityhomes.net.in>",
    to: recipient,
    replyTo: values.email || undefined,
    subject: `New enquiry — ${values.subject || "General"}`,
    html,
  });
}

export async function sendEnquiryNotification(values: EnquiryFormValues) {
  const resend = getResendClient();
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (!resend || !recipient) return { skipped: true };

  const html = `
    ${BRAND_HEADER}
    <h2 style="font-family:Georgia,serif;font-weight:500;color:#171717;">New property enquiry</h2>
    <table>
      ${row("Property", values.propertyName)}
      ${row("Name", values.fullName)}
      ${row("Phone", values.phone)}
      ${row("Email", values.email)}
      ${row("Check-in", values.checkIn)}
      ${row("Check-out", values.checkOut)}
      ${row("Guests", values.guests)}
      ${row("Page URL", values.pageUrl)}
      ${row("UTM Source", values.utmSource)}
      ${row("UTM Medium", values.utmMedium)}
      ${row("UTM Campaign", values.utmCampaign)}
    </table>
    ${values.specialRequirements ? `<p style="font-size:14px;color:#171717;white-space:pre-wrap;margin-top:16px;">${escapeHtml(values.specialRequirements)}</p>` : ""}
  `;

  return resend.emails.send({
    from: "City Homes by Aashiyaanaa <info@enquiry.cityhomes.net.in>",
    to: recipient,
    replyTo: values.email || undefined,
    subject: `New enquiry — ${values.propertyName}`,
    html,
  });
}

export async function sendGuestAcknowledgement(toEmail: string, guestName: string) {
  const resend = getResendClient();
  if (!resend || !toEmail) return { skipped: true };

  const html = `
    ${BRAND_HEADER}
    <p style="font-family:Georgia,serif;font-size:18px;color:#171717;">Thank you, ${escapeHtml(guestName)}.</p>
    <p style="font-size:14px;color:#171717;line-height:1.6;">
      We've received your enquiry and a member of the City Homes by Aashiyaanaa team
      will be in touch shortly. In the meantime, feel free to reach us on WhatsApp
      for a quicker response.
    </p>
  `;

  return resend.emails.send({
    from: "City Homes by Aashiyaanaa <info@enquiry.cityhomes.net.in>",
    to: toEmail,
    subject: "We've received your enquiry — City Homes by Aashiyaanaa",
    html,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
