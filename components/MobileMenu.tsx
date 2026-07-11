"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

export function MobileMenu({
  links,
  isTransparent,
}: {
  links: NavLink[];
  isTransparent: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          "a, button"
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          "p-2 -mr-2",
          isTransparent ? "text-white" : "text-foreground"
        )}
      >
        <Menu size={26} aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[100] bg-charcoal flex flex-col"
        >
          <div className="container-editorial flex h-20 items-center justify-between">
            <span className="font-display text-xl text-white">
              City Homes <em className="not-italic text-brand-red">by Aashiyaanaa</em>
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-white"
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="container-editorial flex-1 flex flex-col justify-center gap-2"
          >
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl xs:text-5xl text-white py-3 border-b border-white/10 hover:text-brand-red transition-colors"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="container-editorial pb-10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-brand-red text-white px-6 py-4 text-sm font-semibold uppercase tracking-widest"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
