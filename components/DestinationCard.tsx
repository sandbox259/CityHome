import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DestinationInfo } from "@/data/destinations";
import { r2ImageUrl, CARD_SIZES } from "@/lib/images";

export function DestinationCard({ destination }: { destination: DestinationInfo }) {
  return (
    <Link href={`/stays?destination=${destination.slug}`} className="group block relative">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={r2ImageUrl(destination.heroImageKey)}
          alt={`${destination.name} destination`}
          fill
          sizes={CARD_SIZES}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl text-white flex items-center gap-2">
            {destination.name}
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </h3>
          <p className="mt-2 text-sm text-white/75 leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
