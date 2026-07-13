import Image from "next/image";
import Link from "next/link";
import { r2ImageUrl, HERO_SIZES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <Image
        src={r2ImageUrl("home/hero.jpeg")}
        alt="A sunlit villa terrace overlooking the hills near Lonavala"
        fill
        priority
        sizes={HERO_SIZES}
        className="object-cover motion-safe:animate-[heroZoom_18s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/10" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 md:pb-28">
        <p className="text-white/80 text-xs font-semibold uppercase tracking-[0.25em] mb-6">
          Mumbai · Lonavala · Pawna
        </p>
        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl text-balance">
          Exceptional Stays. Thoughtfully Curated.
        </h1>
        <p className="mt-6 text-white/85 text-bold md:text-lg max-w-xl leading-relaxed">
          Discover premium villas and city apartments designed for
          unforgettable escapes.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/villas"
            className="bg-brand-red text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-red-dark transition-colors"
          >
            Explore Villas
          </Link>
          <Link
            href="/apartments"
            className="border border-white/60 text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide hover:border-white transition-colors"
          >
            View Apartments
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
