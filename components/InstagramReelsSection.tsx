"use client";

import { FaInstagram } from "react-icons/fa";
import { Play } from "lucide-react";
import { r2ImageUrl } from "@/lib/images";
import { SectionHeading } from "@/components/SectionHeading";

const reels = [
  {
    id: "reel-1",
    key: "instagram/reel-1.jpg",
    url: "https://www.instagram.com/reel/DYVWJNesDpJ/",
  },
  {
    id: "reel-2",
    key: "instagram/reel-2.jpg",
    url: "https://www.instagram.com/reel/DMoF98mgvmS/",
  },
  {
    id: "reel-3",
    key: "instagram/reel-3.jpg",
    url: "https://www.instagram.com/reel/DSiqrl7DJY5/",
  },
];

export function InstagramReelsSection() {
  return (
    <div>
      {/* Section Heading */}
      <SectionHeading
        eyebrow="Follow Our Journey"
        title="Life at City Homes"
        description="Take a glimpse inside our homes, experiences, and the moments that make every stay special."
        align="center"
        className="mx-auto mb-12"
      />

      {/* Instagram Reels */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {reels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch this Reel on Instagram"
            className="
              group relative block
              aspect-[3/4]
              overflow-hidden rounded-xl
              bg-muted
            "
          >
            {/* Reel Cover */}
            <img
              src={r2ImageUrl(reel.key)}
              alt="City Homes Instagram Reel"
              loading="lazy"
              className="
                absolute inset-0
                h-full w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/5
                transition-all duration-500
                group-hover:bg-black/30
              "
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  bg-white/90
                  text-charcoal
                  shadow-lg
                  backdrop-blur-sm
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-white
                "
              >
                <Play
                  size={21}
                  fill="currentColor"
                  strokeWidth={0}
                  className="ml-1"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Instagram Badge */}
            <div
              className="
                absolute right-4 top-4
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-black/35
                text-white
                backdrop-blur-md
              "
            >
              <FaInstagram
                size={17}
                aria-hidden="true"
              />
            </div>

            {/* Bottom Gradient */}
            <div
              className="
                pointer-events-none
                absolute inset-x-0 bottom-0 h-24
                bg-gradient-to-t
                from-black/60
                to-transparent
              "
            />

            {/* Bottom Label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white">
                Watch Reel
              </span>

              <FaInstagram
                size={15}
                className="text-white"
                aria-hidden="true"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Instagram CTA */}
      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/YOUR_USERNAME/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            border-b border-foreground/30
            pb-1
            text-sm font-medium
            text-foreground
            transition-colors
            hover:border-brand-red
            hover:text-brand-red
          "
        >
          <FaInstagram
            size={16}
            aria-hidden="true"
          />

          Follow us on Instagram
        </a>
      </div>
    </div>
  );
}
