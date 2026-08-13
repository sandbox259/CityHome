import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with City Homes by Aashiyaanaa for enquiries about villas and apartments across Mumbai, Lonavala, Karjat and Pawna Lake.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              We&apos;d love to hear from you.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-md">
              Whether you have a question about a stay or want help choosing
              the right property, send us a message and we&apos;ll get back
              to you shortly.
            </p>

            <div className="mt-10 space-y-4">
              {WHATSAPP_NUMBER && (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium underline-hover w-fit"
                >
                  <FaWhatsapp size={18} className="text-brand-red" aria-hidden="true" /> Chat on WhatsApp
                </a>
              )}
              <a
                href="mailto:cityhomes.net.in@gmail.com"
                className="flex items-center gap-3 text-sm font-medium underline-hover w-fit"
              >
                <Mail size={18} className="text-brand-red" aria-hidden="true" /> cityhomes.net.in@gmail.com
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
