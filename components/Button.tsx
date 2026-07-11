import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark border border-brand-red",
  secondary:
    "bg-transparent text-foreground border border-foreground/30 hover:border-foreground",
  ghost:
    "bg-transparent text-white border border-white/50 hover:border-white",
  dark: "bg-charcoal text-white border border-charcoal hover:bg-charcoal-light",
};

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 min-h-11 whitespace-nowrap";

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: BaseProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = cn(BASE_STYLES, VARIANT_STYLES[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
