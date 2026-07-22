"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { r2ImageUrl, CARD_SIZES } from "@/lib/images";

export interface FilmstripImage {
  key: string;
  alt: string;
}

/**
 * A horizontal row of images that drifts sideways as the visitor scrolls
 * past the section vertically — tied to native scroll progress, no
 * scroll-jacking or pinning. This is the homepage's one signature motion
 * moment; everything else on the page should stay quieter than this.
 */
export function Filmstrip({ images }: { images: FilmstripImage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-32%"]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <motion.div
        style={reduceMotion ? undefined : { x }}
        className="flex items-center gap-4 md:gap-5 w-max pl-5 md:pl-0"
      >
        {images.map((img) => (
          <div
            key={img.key}
            className="relative overflow-hidden shrink-0 w-[70vw] sm:w-[42vw] md:w-[26vw] lg:w-[22vw] aspect-[4/5]"
          >
            <Image
              src={r2ImageUrl(img.key)}
              alt={img.alt}
              fill
              sizes={CARD_SIZES}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}