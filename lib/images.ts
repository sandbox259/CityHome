import type { PropertyImage } from "@/types/property";

/**
 * Cloudflare R2 image helper.
 *
 * Images are NOT stored in the Git repository. In production this resolves
 * to a public R2 bucket (or a custom domain fronting it, e.g.
 * https://images.cityhomesbyaashiyaanaa.com) so that Next's Vercel-only
 * image optimization API is never required on Cloudflare Workers.
 *
 * Set NEXT_PUBLIC_R2_IMAGE_BASE_URL in the environment. Falls back to a
 * local placeholder path in development so the app runs without R2 configured.
 */
const R2_BASE_URL =
  process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL?.replace(/\/$/, "") ??
  "/placeholder-images";

export type ImageVariant = 480 | 768 | 1200 | 1920;

const VARIANTS: ImageVariant[] = [480, 768, 1200, 1920];

/**
 * Builds a responsive-variant URL for an R2 object key.
 * Assumes an R2 + Cloudflare Images (or a resizing Worker) convention of
 * `<key>?width=<w>&format=auto`, which serves AVIF/WebP automatically based
 * on the request's Accept header.
 */
export function r2ImageUrl(key: string, width?: ImageVariant): string {
  const cleanKey = key.replace(/^\//, "");
  if (!width) return `${R2_BASE_URL}/${cleanKey}`;
  return `${R2_BASE_URL}/${cleanKey}?width=${width}&format=auto`;
}

/** Builds a `srcSet`-style string across all supported responsive variants. */
export function r2SrcSet(key: string): string {
  return VARIANTS.map((w) => `${r2ImageUrl(key, w)} ${w}w`).join(", ");
}

/**
 * Direct, predictable URL for a specific pre-generated variant — for
 * contexts that render a plain <img> and manage loading themselves (e.g.
 * the gallery lightbox, which preloads every photo up front).
 *
 * TEMPORARY: falls back to the original full-size file for now, because
 * the `<key-without-ext>-<width>.webp` variants that scripts/optimize-
 * images.mjs generates haven't been uploaded to R2 yet. Once that upload
 * happens, swap the body of this function back to the filename-suffix
 * version (kept below, commented out) to actually serve the smaller
 * pre-generated file instead of the full original on every request.
 */
export function r2VariantUrl(key: string, width: ImageVariant = 1920): string {
  void width; // unused while the fallback below is active — see note above
  return r2ImageUrl(key);

  // --- Re-enable once -480/-768/-1200/-1920.webp variants exist in R2 ---
  // const cleanKey = key.replace(/^\//, "");
  // if (!process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL) {
  //   return `${R2_BASE_URL}/${cleanKey}?width=${width}&format=auto`;
  // }
  // const lastDot = cleanKey.lastIndexOf(".");
  // const base = lastDot === -1 ? cleanKey : cleanKey.slice(0, lastDot);
  // return `${R2_BASE_URL}/${base}-${width}.webp`;
}

/**
 * Default `sizes` attribute for a full-bleed hero image.
 */
export const HERO_SIZES = "100vw";

/** Default `sizes` attribute for a 3-column property grid. */
export const CARD_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

export function toNextImageProps(image: PropertyImage) {
  return {
    src: r2ImageUrl(image.key),
    alt: image.alt,
    width: image.width,
    height: image.height,
  };
}