import type { PropertyImage } from "@/types/property";

/**
 * Cloudflare R2 image helper.
 *
 * R2_BASE_URL should point to your public image domain / resizing Worker,
 * for example:
 *
 *   https://images.cityhomesbyaashiyaanaa.com
 *
 * The resizing layer is expected to understand:
 *
 *   ?width=<width>&format=auto
 *
 * and return an appropriately resized WebP/AVIF image.
 */

const R2_BASE_URL =
  process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL?.replace(/\/$/, "") ??
  "/placeholder-images";

export type ImageVariant = 480 | 768 | 1200 | 1920;

const VARIANTS: readonly ImageVariant[] = [480, 768, 1200, 1920];

/**
 * Build a URL for an R2 image.
 *
 * Without width:
 *   /villa/photo.jpg
 *
 * With width:
 *   /villa/photo.jpg?width=1200&format=auto
 */
export function r2ImageUrl(
  key: string,
  width?: ImageVariant
): string {
  const cleanKey = key.replace(/^\/+/, "");

  if (!width) {
    return `${R2_BASE_URL}/${cleanKey}`;
  }

  return `${R2_BASE_URL}/${cleanKey}?width=${width}&format=auto`;
}

/**
 * URL for a specific gallery/image variant.
 *
 * This is intentionally just an alias around r2ImageUrl so that
 * the lightbox can explicitly request the size it needs.
 */
export function r2VariantUrl(
  key: string,
  width: ImageVariant = 1920
): string {
  return r2ImageUrl(key, width);
}

/**
 * Generate a srcSet for responsive <img> elements.
 */
export function r2SrcSet(key: string): string {
  return VARIANTS
    .map((width) => `${r2ImageUrl(key, width)} ${width}w`)
    .join(", ");
}

/**
 * Full-width hero images.
 */
export const HERO_SIZES = "100vw";

/**
 * Three-column property cards.
 */
export const CARD_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

/**
 * Convert a PropertyImage into the basic props expected by Next/Image.
 */
export function toNextImageProps(image: PropertyImage) {
  return {
    src: r2ImageUrl(image.key),
    alt: image.alt,
    width: image.width,
    height: image.height,
  };
}