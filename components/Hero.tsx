"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { r2ImageUrl, HERO_SIZES } from "@/lib/images";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
      <div className="grain absolute inset-0" />

      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="text-white/80 text-xs font-semibold uppercase tracking-[0.25em] mb-6"
        >
          Mumbai · Lonavala · Pawna
        </motion.p>

        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl text-balance">
          {["Exceptional Stays.", "Thoughtfully Curated."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="mt-6 text-white/85 text-bold md:text-lg max-w-xl leading-relaxed"
        >
          Discover premium villas and city apartments designed for
          unforgettable escapes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          className="mt-9 flex flex-wrap gap-4"
        >
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
        </motion.div>
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
