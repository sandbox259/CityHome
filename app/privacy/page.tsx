import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How City Homes by Aashiyaanaa collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="container-editorial max-w-3xl prose-content">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-10">Privacy Policy</h1>

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-foreground">
            <section>
              <h2 className="font-display text-2xl mb-3">Information We Collect</h2>
              <p>
                When you submit a general enquiry or a property enquiry, we
                collect the information you provide directly — including
                your name, phone number, email address, and any details
                about your planned stay. We also automatically record the
                page you submitted the form from and, where available,
                campaign attribution data (UTM parameters).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl mb-3">How We Use It</h2>
              <p>
                We use this information solely to respond to your enquiry,
                coordinate your stay, and improve our services. We do not
                sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl mb-3">Third-Party Services</h2>
              <p>
                We use Cloudflare Turnstile to protect our forms from
                automated abuse, and Resend to deliver enquiry emails.
                These providers process data solely to perform these
                functions on our behalf.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl mb-3">Contact</h2>
              <p>
                For questions about this policy or to request that your
                data be deleted, email us at{" "}
                <a className="underline-hover" href="mailto:cityhomes.net.in@gmail.com">
                  cityhomes.net.in@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
