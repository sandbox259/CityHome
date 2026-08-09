"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { r2ImageUrl, HERO_SIZES } from "@/lib/images";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] overflow-hidden">
      {/* Hero Image */}
      <Image
        src={r2ImageUrl("home/hero.jpeg")}
        alt="A sunlit villa terrace overlooking the hills near Lonavala"
        fill
        priority
        sizes={HERO_SIZES}
        className="object-cover motion-safe:animate-[heroZoom_18s_ease-out_forwards]"
      />

      {/* Main cinematic overlay
          Darker on the left where the content sits,
          gradually becoming transparent toward the image. */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/65
          via-black/35
          to-transparent
        "
      />

      {/* Subtle bottom gradient for additional text separation */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/45
          via-transparent
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-16 sm:pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: EASE,
          }}
          className="
            text-white/90
            text-[10px]
            sm:text-xs
            font-semibold
            uppercase
            tracking-[0.22em]
            sm:tracking-[0.25em]
            mb-5
            sm:mb-6
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
          "
        >
          Mumbai · Lonavala · Pawna
        </motion.p>

        <h1
          className="
            font-display
            text-white
            text-4xl
            xs:text-5xl
            sm:text-6xl
            md:text-7xl
            leading-[1.05]
            max-w-3xl
            text-balance
            drop-shadow-[0_4px_18px_rgba(0,0,0,0.4)]
          "
        >
          {["Exceptional Stays.", "Thoughtfully Curated."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + i * 0.12,
                  ease: EASE,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.75,
            ease: EASE,
          }}
          className="
            mt-5
            sm:mt-6
            text-white/90
            font-medium
            text-sm
            sm:text-base
            md:text-lg
            max-w-xl
            leading-relaxed
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]
          "
        >
          Discover premium villas and city apartments designed for
          unforgettable escapes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.9,
            ease: EASE,
          }}
          className="
            mt-7
            sm:mt-9
            flex
            flex-wrap
            gap-3
            sm:gap-4
          "
        >
          <Link
            href="/villas"
            className="
              bg-brand-red
              text-white
              px-6
              sm:px-7
              py-3
              sm:py-3.5
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-wide
              shadow-[0_8px_30px_rgba(0,0,0,0.2)]
              hover:bg-brand-red-dark
              transition-colors
            "
          >
            Explore Villas
          </Link>

          <Link
            href="/apartments"
            className="
              border
              border-white/60
              bg-black/10
              text-white
              px-6
              sm:px-7
              py-3
              sm:py-3.5
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-wide
              backdrop-blur-[2px]
              hover:border-white
              hover:bg-black/20
              transition-all
            "
          >
            View Apartments
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}