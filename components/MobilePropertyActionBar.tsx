"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import type { Property } from "@/types/property";
import { EnquiryForm } from "./EnquiryForm";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function MobilePropertyActionBar({ property }: { property: Property }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-surface border-t border-border p-3 flex gap-3">
        {WHATSAPP_NUMBER && (
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(property.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-border py-3.5 text-sm font-medium min-h-11"
          >
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp
          </a>
        )}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex-1 bg-brand-red text-white py-3.5 text-sm font-semibold uppercase tracking-wide min-h-11"
        >
          Enquire
        </button>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enquire about this property"
          className="lg:hidden fixed inset-0 z-50 bg-charcoal/60 flex items-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-h-[85vh] overflow-y-auto bg-background p-6 rounded-t-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display text-xl">Enquire</p>
              <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="p-2 -mr-2">
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <EnquiryForm property={property} />
          </div>
        </div>
      )}
    </>
  );
}
