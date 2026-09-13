"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import type { PropertyImage } from "@/types/property";
import {
  r2ImageUrl,
  r2VariantUrl,
  type ImageVariant,
} from "@/lib/images";

const EASE: [number, number, number, number] = [
  0.2,
  0.65,
  0.3,
  0.9,
];

/**
 * Number of images around the current image that we preload.
 *
 * Current:
 *   immediate
 *
 * ±1:
 *   high priority
 *
 * ±2:
 *   lower priority
 */
const PRELOAD_WINDOW = 2;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
  }),

  center: {
    opacity: 1,
    x: 0,
  },

  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
  }),
};

/**
 * Keep preloaded image promises at module level so they can survive
 * closing and reopening the lightbox during the same page session.
 *
 * The browser itself also caches these URLs, but this prevents us from
 * creating multiple Image() objects for the same URL.
 */
const preloadCache = new Map<string, Promise<void>>();

/**
 * Preload one image and deduplicate requests.
 */
function preloadImage(url: string): Promise<void> {
  const cached = preloadCache.get(url);

  if (cached) {
    return cached;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const image = new window.Image();

    image.onload = () => resolve();

    image.onerror = () => {
      /**
       * Remove failed requests from the cache so a future attempt
       * can retry the image.
       */
      preloadCache.delete(url);
      reject(new Error(`Failed to preload image: ${url}`));
    };

    image.src = url;
  });

  preloadCache.set(url, promise);

  return promise;
}

/**
 * Determine the gallery image size.
 *
 * We don't need a 1920px resource on a small phone screen.
 *
 * 1200px is still more than enough for most mobile lightboxes,
 * while desktop gets the 1920px variant.
 */
function getGalleryWidth(): ImageVariant {
  if (typeof window === "undefined") {
    return 1920;
  }

  return window.innerWidth < 768 ? 1200 : 1920;
}

export function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: PropertyImage[];
  startIndex: number;
  onClose: () => void;
}) {
  /**
   * Don't render anything if the gallery has no images.
   */
  if (images.length === 0) {
    return null;
  }

  /**
   * Clamp the initial index so a bad startIndex doesn't crash
   * the gallery.
   */
  const safeStartIndex = Math.min(
    Math.max(startIndex, 0),
    images.length - 1
  );

  const [index, setIndex] = useState(safeStartIndex);
  const [direction, setDirection] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const thumbRefs =
    useRef<(HTMLButtonElement | null)[]>([]);

  /**
   * Track the current index in a ref as well.
   *
   * This lets keyboard handlers use the latest value without
   * repeatedly registering event listeners.
   */
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  /**
   * Current image.
   */
  const current = images[index];

  /**
   * Build the URL only once per render.
   */
  const galleryWidth = getGalleryWidth();

  const currentUrl = r2VariantUrl(
    current.key,
    galleryWidth
  );

  /**
   * Reset loading state whenever the visible image changes.
   */
  useEffect(() => {
    setImageLoaded(false);
  }, [index]);

  /**
   * Preload current image and nearby images.
   *
   * Order matters:
   *
   *   1. current
   *   2. next
   *   3. previous
   *   4. next + 2
   *   5. previous - 2
   *
   * We deliberately do NOT preload the entire gallery.
   */
  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const width = getGalleryWidth();

    const currentIndex = index;

    const next1 =
      (currentIndex + 1) % images.length;

    const prev1 =
      (currentIndex - 1 + images.length) %
      images.length;

    const next2 =
      (currentIndex + 2) % images.length;

    const prev2 =
      (currentIndex - 2 + images.length) %
      images.length;

    const priorityIndices = [
      currentIndex,
      next1,
      prev1,
      next2,
      prev2,
    ];

    /**
     * Start the requests.
     *
     * We don't await these because preloading is intentionally
     * independent from rendering.
     */
    for (const imageIndex of priorityIndices) {
      const image = images[imageIndex];

      if (!image) {
        continue;
      }

      preloadImage(
        r2VariantUrl(image.key, width)
      ).catch(() => {
        /**
         * The visible <img> handles actual errors.
         * Preload failures are intentionally ignored here.
         */
      });
    }
  }, [index, images]);

  /**
   * Lock body scrolling while the lightbox is open.
   */
  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  /**
   * Focus the close button when the lightbox opens.
   */
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  /**
   * Navigate to an arbitrary image.
   */
  const goTo = useCallback(
    (nextIndex: number) => {
      const currentIndex = indexRef.current;

      if (nextIndex === currentIndex) {
        return;
      }

      const wrappedForward =
        currentIndex === images.length - 1 &&
        nextIndex === 0;

      const wrappedBackward =
        currentIndex === 0 &&
        nextIndex === images.length - 1;

      let nextDirection: number;

      if (wrappedForward) {
        nextDirection = 1;
      } else if (wrappedBackward) {
        nextDirection = -1;
      } else {
        nextDirection =
          nextIndex > currentIndex ? 1 : -1;
      }

      setDirection(nextDirection);
      setIndex(nextIndex);
    },
    [images.length]
  );

  /**
   * Navigate forward.
   */
  const goNext = useCallback(() => {
    const currentIndex = indexRef.current;

    goTo(
      (currentIndex + 1) % images.length
    );
  }, [goTo, images.length]);

  /**
   * Navigate backward.
   */
  const goPrev = useCallback(() => {
    const currentIndex = indexRef.current;

    goTo(
      (currentIndex - 1 + images.length) %
        images.length
    );
  }, [goTo, images.length]);

  /**
   * Keyboard navigation.
   */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          onClose();
          break;

        case "ArrowRight":
          event.preventDefault();
          goNext();
          break;

        case "ArrowLeft":
          event.preventDefault();
          goPrev();
          break;
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
    };
  }, [goNext, goPrev, onClose]);

  /**
   * Keep the active thumbnail centered.
   */
  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [index]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[200] flex flex-col bg-charcoal/95"
    >
      {/* ---------------------------------------------------------- */}
      {/* Header                                                      */}
      {/* ---------------------------------------------------------- */}

      <div className="flex shrink-0 items-center justify-between p-4 text-white">
        <span
          className="text-sm"
          aria-live="polite"
        >
          {index + 1} / {images.length}
        </span>

        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className="rounded-full p-2 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X
            size={24}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Main image                                                   */}
      {/* ---------------------------------------------------------- */}

      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4">
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous photo"
          onClick={goPrev}
          disabled={images.length <= 1}
          className="absolute left-2 z-20 rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-brand-red disabled:pointer-events-none disabled:opacity-30 md:left-6"
        >
          <ChevronLeft
            size={32}
            aria-hidden="true"
          />
        </button>

        {/* Image viewport */}
        <div className="relative h-full w-full max-w-5xl">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="popLayout"
          >
            <motion.div
              key={current.key}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: EASE,
              }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentUrl}
                alt={current.alt}
                draggable={false}
                onLoad={() => {
                  setImageLoaded(true);
                }}
                onError={() => {
                  setImageLoaded(false);
                }}
                className={`h-full w-full select-none object-contain transition-opacity duration-200 ${
                  imageLoaded
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Loading indicator */}
          <AnimatePresence>
            {!imageLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white"
                  aria-label="Loading image"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          type="button"
          aria-label="Next photo"
          onClick={goNext}
          disabled={images.length <= 1}
          className="absolute right-2 z-20 rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-brand-red disabled:pointer-events-none disabled:opacity-30 md:right-6"
        >
          <ChevronRight
            size={32}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* Thumbnail strip                                             */}
      {/* ---------------------------------------------------------- */}

      <div className="shrink-0 px-4 pb-5 pt-4">
        <div className="overflow-x-auto overflow-y-visible scrollbar-none">
          <div className="mx-auto flex w-fit gap-3 py-2">
            {images.map((image, imageIndex) => {
              const active =
                imageIndex === index;

              return (
                <motion.button
                  key={image.key}
                  ref={(element) => {
                    thumbRefs.current[imageIndex] =
                      element;
                  }}
                  type="button"
                  onClick={() =>
                    goTo(imageIndex)
                  }
                  aria-label={`View photo ${
                    imageIndex + 1
                  }`}
                  aria-current={
                    active ? "true" : undefined
                  }
                  animate={{
                    scale: active ? 1.12 : 1,
                    y: active ? -2 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                  }}
                  className={`relative h-16 w-16 shrink-0 overflow-visible focus:outline-none focus:ring-2 focus:ring-white md:h-20 md:w-20 ${
                    active
                      ? "z-10"
                      : "opacity-55 transition-opacity hover:opacity-85"
                  }`}
                >
                  {/* Thumbnail image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={r2ImageUrl(
                        image.key,
                        480
                      )}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Active frame */}
                  {active && (
                    <motion.div
                      layoutId="active-thumb-frame"
                      className="pointer-events-none absolute -inset-1.5"
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      style={{
                        filter:
                          "drop-shadow(0 0 6px rgba(220,13,13,0.55))",
                      }}
                    >
                      <span className="absolute left-0 top-0 h-3.5 w-3.5 border-l-2 border-t-2 border-brand-red" />

                      <span className="absolute right-0 top-0 h-3.5 w-3.5 border-r-2 border-t-2 border-brand-red" />

                      <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-brand-red" />

                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-brand-red" />
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