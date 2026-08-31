"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PropertyImage } from "@/types/property";
import { r2ImageUrl, r2VariantUrl } from "@/lib/images";

const EASE: [number, number, number, number] = [0.2, 0.65, 0.3, 0.9];

// How many neighbors on each side of the current photo get preloaded
// immediately. Everything outside this window still gets preloaded, just
// quietly in the background — see the idle-queue effect below.
const PRELOAD_WINDOW = 2;

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -48 : 48 }),
};

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
  const [direction, setDirection] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set());
  const loadedRef = useRef<Set<number>>(new Set());
  const queuedRef = useRef<Set<number>>(new Set());
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function preloadImage(i: number) {
    if (queuedRef.current.has(i)) return;
    queuedRef.current.add(i);

    const el = new window.Image();
    el.onload = () => {
      loadedRef.current.add(i);
      setLoadedIndices(new Set(loadedRef.current));
    };
    el.src = r2VariantUrl(images[i].key);
    if (el.complete) {
      loadedRef.current.add(i);
      setLoadedIndices(new Set(loadedRef.current));
    }
  }

  // Eagerly preload the current photo and its near neighbors every time the
  // visible index changes — this is what keeps next/prev feeling instant
  // for normal browsing.
  useEffect(() => {
    for (let offset = -PRELOAD_WINDOW; offset <= PRELOAD_WINDOW; offset++) {
      const i = (index + offset + images.length) % images.length;
      preloadImage(i);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Quietly preload everything outside that window in the background, one
  // at a time, using idle time so it never competes with the neighbors
  // above or with the rest of the page. By the time someone scrolls the
  // thumbnail strip far away, there's a good chance it's already cached.
  useEffect(() => {
    let cancelled = false;
    let cursor = 0;
    const remaining = images
      .map((_, i) => i)
      .filter((i) => {
        const dist = Math.min(Math.abs(i - index), images.length - Math.abs(i - index));
        return dist > PRELOAD_WINDOW;
      });

    function scheduleNext() {
      if (cancelled || cursor >= remaining.length) return;
      const i = remaining[cursor];
      cursor += 1;
      const run = () => {
        if (cancelled) return;
        preloadImage(i);
        scheduleNext();
      };
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(run, { timeout: 1500 });
      } else {
        setTimeout(run, 300);
      }
    }
    scheduleNext();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function goTo(next: number) {
    const wrappedForward = index === images.length - 1 && next === 0;
    const wrappedBackward = index === 0 && next === images.length - 1;
    setDirection(next > index || wrappedForward ? (wrappedBackward ? -1 : 1) : -1);
    setIndex(next);
  }
  const goNext = () => goTo((index + 1) % images.length);
  const goPrev = () => goTo((index - 1 + images.length) % images.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length, onClose]);

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  const current = images[index];
  const currentIsLoaded = loadedIndices.has(index);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[200] bg-charcoal/95 flex flex-col"
    >
      <div className="flex items-center justify-between p-4 text-white shrink-0">
        <span className="text-sm">
          {index + 1} / {images.length}
        </span>
        <button ref={closeButtonRef} type="button" aria-label="Close gallery" onClick={onClose} className="p-2">
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 overflow-hidden">
        <button
          type="button"
          aria-label="Previous photo"
          onClick={goPrev}
          className="absolute left-2 md:left-6 z-10 p-2 text-white hover:text-brand-red transition-colors"
        >
          <ChevronLeft size={32} aria-hidden="true" />
        </button>

        <div className="relative w-full h-full max-w-5xl">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r2VariantUrl(current.key)}
                alt={current.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {!currentIsLoaded && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-8 w-8 rounded-full border-2 border-white/25 border-t-white animate-spin" />
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label="Next photo"
          onClick={goNext}
          className="absolute right-2 md:right-6 z-10 p-2 text-white hover:text-brand-red transition-colors"
        >
          <ChevronRight size={32} aria-hidden="true" />
        </button>
      </div>

      {/* Thumbnail strip — always the small 480w variant via next/image's
          own lazy loading, so this stays cheap regardless of the preload
          strategy above. */}
      <div className="shrink-0 px-4 pb-5 pt-4">
        <div className="overflow-x-auto overflow-y-visible">
          <div className="flex gap-3 w-fit mx-auto py-1">
            {images.map((img, i) => {
              const active = i === index;
              return (
                <motion.button
                  key={img.key}
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`View photo ${i + 1}`}
                  aria-current={active}
                  animate={{ scale: active ? 1.12 : 1, y: active ? -2 : 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden ${
                    active ? "z-10" : "opacity-55 hover:opacity-85 transition-opacity"
                  }`}
                >
                  <Image src={r2ImageUrl(img.key)} alt="" fill sizes="80px" className="object-cover" />

                  {active && (
                    <motion.div
                      layoutId="active-thumb-frame"
                      className="absolute -inset-1.5 pointer-events-none"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      style={{ filter: "drop-shadow(0 0 6px rgba(220,13,13,0.55))" }}
                    >
                      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-brand-red" />
                      <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-brand-red" />
                      <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-brand-red" />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-brand-red" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
