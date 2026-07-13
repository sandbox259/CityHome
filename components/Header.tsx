"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/stays", label: "Stays" },
  { href: "/villas", label: "Villas" },
  { href: "/apartments", label: "Apartments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const isTransparent = transparentOnTop && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        isTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-sm border-b border-border"
      )}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        {/* <Link
          href="/"
          className={cn(
            "font-display text-xl tracking-wide transition-colors",
            isTransparent ? "text-white" : "text-foreground"
          )}
        >
          City Homes <em className="not-italic text-brand-red">by Aashiyaanaa</em>
        </Link> */}

          <Link href="/" className="flex items-center">
            <img
              src="/aashiyaana_logo.png"
              alt="City Homes by Aashiyaanaa"
              className="h-14 w-auto"
            />
          </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-9"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "underline-hover text-sm font-medium tracking-wide",
                  isTransparent ? "text-white" : "text-foreground",
                  isActive && "text-brand-red"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-brand-red text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-brand-red-dark transition-colors"
          >
            Enquire Now
          </Link>
        </div>

        <MobileMenu links={NAV_LINKS} isTransparent={isTransparent} />
      </div>
    </header>
  );
}
