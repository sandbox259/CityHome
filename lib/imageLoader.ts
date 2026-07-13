import type { ImageLoaderProps } from "next/image";

/**
 * Custom Next.js Image loader.
 *
 * Cloudflare Workers cannot run Next's default Vercel-based image
 * optimization API, so this loader appends `?width=&format=auto` (served
 * as AVIF/WebP automatically based on the request's Accept header) to
 * whatever `src` it's given.
 *
 * IMPORTANT: `src` arrives here already fully resolved — `lib/images.ts`'s
 * `r2ImageUrl()` is what turns a bare object key into a full R2 URL (or the
 * local placeholder-images route in dev). This loader must NOT re-prepend
 * NEXT_PUBLIC_R2_IMAGE_BASE_URL / the placeholder base itself, or the path
 * doubles up (e.g. "/placeholder-images/placeholder-images/...").
 */
export default function r2Loader({ src, width, quality }: ImageLoaderProps): string {
  const [base, existingQuery] = src.split("?");
  const params = new URLSearchParams(existingQuery);
  params.set("width", String(width));
  params.set("format", "auto");
  if (quality) params.set("quality", String(quality));
  return `${base}?${params.toString()}`;
}