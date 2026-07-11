"use client";

import { useState } from "react";
import Image from "next/image";
import type { PropertyImage } from "@/types/property";
import { r2ImageUrl } from "@/lib/images";
import { GalleryLightbox } from "./GalleryLightbox";

export function PropertyGallery({
  hero,
  images,
}: {
  hero: PropertyImage;
  images: PropertyImage[];
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allImages = [hero, ...images];
  const secondary = allImages.slice(1, 3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:h-[560px]">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="relative h-72 md:h-full overflow-hidden"
        >
          <Image
            src={r2ImageUrl(hero.key)}
            alt={hero.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </button>

        <div className="hidden md:grid grid-rows-2 gap-2">
          {secondary.map((img, i) => (
            <button
              key={img.key}
              type="button"
              onClick={() => setLightboxIndex(i + 1)}
              className="relative overflow-hidden"
            >
              <Image
                src={r2ImageUrl(img.key)}
                alt={img.alt}
                fill
                sizes="50vw"
                className="object-cover"
              />
              {i === secondary.length - 1 && allImages.length > 3 && (
                <span className="absolute inset-0 bg-charcoal/50 flex items-center justify-center text-white text-sm font-semibold">
                  View all photos
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between md:justify-end">
        <span className="md:hidden text-xs text-muted">1 / {allImages.length} photos</span>
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="text-sm font-semibold underline-hover"
        >
          View all photos ({allImages.length})
        </button>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={allImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
