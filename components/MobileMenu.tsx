"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {mounted &&
        createPortal(
          open && (
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed inset-0 z-[100] bg-background flex flex-col overflow-y-auto"
            >
              <div className="container-editorial flex h-20 shrink-0 items-center justify-between border-b border-border">
                <span className="font-display text-lg sm:text-xl text-foreground">
                  City Homes <em className="not-italic text-brand-red">by Aashiyaanaa</em>
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 -mr-2 text-foreground"
                >
                  <X size={26} aria-hidden="true" />
                </button>
              </div>

              <nav
                aria-label="Mobile"
                className="container-editorial flex-1 flex flex-col justify-start gap-1 pt-10 pb-8"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl sm:text-3xl text-foreground py-3 border-b border-border hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="container-editorial pb-10 shrink-0">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-brand-red text-white px-6 py-4 text-sm font-semibold uppercase tracking-widest"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ),
          document.body
        )}
    </div>
  );
}
