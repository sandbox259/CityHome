import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-editorial py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          {/* <span className="font-display text-2xl">
            City Homes <em className="not-italic text-brand-red">by Aashiyaanaa</em>
          </span> */}
          <Link href="/" className="flex items-center">
            <img
              src="/aashiyaana_logo.png"
              alt="City Homes by Aashiyaanaa"
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
            Premium villas and city apartments across Mumbai, Lonavala, Karjat and
            Pawna Lake, thoughtfully curated for every kind of stay.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link className="underline-hover" href="/stays">Stays</Link></li>
            <li><Link className="underline-hover" href="/villas">Villas</Link></li>
            <li><Link className="underline-hover" href="/apartments">Apartments</Link></li>
            <li><Link className="underline-hover" href="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link className="underline-hover" href="/contact">Contact</Link></li>
            <li><Link className="underline-hover" href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
            Connect
          </h3>
          <ul className="space-y-3 text-sm">
            {WHATSAPP_NUMBER && (
              <li>
                <a
                  className="underline-hover inline-flex items-center gap-2"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} aria-hidden="true" /> WhatsApp
                </a>
              </li>
            )}
            <li>
              <a
                className="underline-hover inline-flex items-center gap-2"
                href="https://instagram.com/cityhomesbyaashiyaanaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
            </li>
            <li>
              <a
                className="underline-hover inline-flex items-center gap-2"
                href="mailto:hello@cityhomesbyaashiyaanaa.com"
              >
                <Mail size={16} aria-hidden="true" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} City Homes by Aashiyaanaa. All rights reserved.</p>
          <p>Mumbai · Lonavala · Pawna · Karjat</p>
        </div>
      </div>
    </footer>
  );
}
