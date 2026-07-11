import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Users, BedDouble } from "lucide-react";
import type { Property } from "@/types/property";
import { CARD_SIZES, r2ImageUrl } from "@/lib/images";

export function PropertyCard({ property }: { property: Property }) {
  const href = `/${property.type === "villa" ? "villas" : "apartments"}/${property.slug}`;

  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-border">
        <Image
          src={r2ImageUrl(property.heroImage.key)}
          alt={property.heroImage.alt}
          fill
          sizes={CARD_SIZES}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-charcoal">
          {property.destination}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl leading-snug text-foreground">
            {property.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{property.shortLocation}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} aria-hidden="true" /> {property.maxGuests} guests
            </span>
            {property.type === "villa" && (
              <span className="inline-flex items-center gap-1.5">
                <BedDouble size={14} aria-hidden="true" /> {property.bedrooms} bed
              </span>
            )}
          </div>
        </div>
        <ArrowUpRight
          className="mt-1 shrink-0 text-brand-red transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          size={22}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
