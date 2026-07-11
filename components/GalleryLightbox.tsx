"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PropertyImage } from "@/types/property";
import { r2ImageUrl } from "@/lib/images";

export function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: PropertyImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, onClose]);

  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[200] bg-charcoal/95 flex flex-col"
    >
      <div className="flex items-center justify-between p-4 text-white">
        <span className="text-sm">
          {index + 1} / {images.length}
        </span>
        <button ref={closeButtonRef} type="button" aria-label="Close gallery" onClick={onClose} className="p-2">
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 pb-4">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-2 md:left-6 p-2 text-white hover:text-brand-red transition-colors"
        >
          <ChevronLeft size={32} aria-hidden="true" />
        </button>

        <div className="relative w-full h-full max-w-5xl">
          <Image
            src={r2ImageUrl(current.key)}
            alt={current.alt}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          aria-label="Next photo"
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          className="absolute right-2 md:right-6 p-2 text-white hover:text-brand-red transition-colors"
        >
          <ChevronRight size={32} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
