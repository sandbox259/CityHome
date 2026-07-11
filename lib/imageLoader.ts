import type { ImageLoaderProps } from "next/image";

const R2_BASE_URL =
  process.env.NEXT_PUBLIC_R2_IMAGE_BASE_URL?.replace(/\/$/, "") ??
  "/placeholder-images";

/**
 * Custom Next.js Image loader.
 *
 * Cloudflare Workers cannot run Next's default Vercel-based image
 * optimization API, so this loader resolves directly to R2 (or a resizing
 * Worker in front of it) using `?width=&format=auto`, which serves
 * AVIF/WebP automatically based on the request's Accept header.
 */
export default function r2Loader({ src, width, quality }: ImageLoaderProps): string {
  const cleanSrc = src.replace(/^\//, "");
  const isAbsolute = /^https?:\/\//.test(cleanSrc);
  const base = isAbsolute ? cleanSrc.split("?")[0] : `${R2_BASE_URL}/${cleanSrc}`;
  const params = new URLSearchParams({
    width: String(width),
    format: "auto",
  });
  if (quality) params.set("quality", String(quality));
  return `${base}?${params.toString()}`;
}
