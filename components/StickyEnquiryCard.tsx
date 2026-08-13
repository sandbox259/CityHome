import { FaWhatsapp } from "react-icons/fa";
import type { Property } from "@/types/property";
import { EnquiryForm } from "./EnquiryForm";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function StickyEnquiryCard({ property }: { property: Property }) {
  return (
    <div className="hidden lg:block sticky top-28 border border-border bg-surface p-6">
      <p className="font-display text-xl mb-1">{property.name}</p>
      <p className="text-sm text-muted mb-6">{property.shortLocation}</p>

      <EnquiryForm property={property} />

      {WHATSAPP_NUMBER && (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(property.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 border border-border py-3 text-sm font-medium hover:border-charcoal transition-colors"
        >
          <FaWhatsapp size={16} aria-hidden="true" /> Message on WhatsApp
        </a>
      )}
    </div>
  );
}
