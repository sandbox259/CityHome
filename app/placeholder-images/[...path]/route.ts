import { NextRequest } from "next/server";

export const runtime = "edge";

/**
 * DEV-ONLY placeholder image generator.
 *
 * This route exists purely so the app renders sensible imagery when
 * NEXT_PUBLIC_R2_IMAGE_BASE_URL is not configured (e.g. local development
 * without R2 credentials). In production, NEXT_PUBLIC_R2_IMAGE_BASE_URL
 * should point at the real Cloudflare R2 bucket and this route is never hit.
 */

const PALETTE = ["#e7e1d6", "#ded5c5", "#d3c8b4", "#c9bda6"];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  const key = path.join("/");
  const width = Number(request.nextUrl.searchParams.get("width")) || 1200;
  const height = Math.round(width * 0.6667);
  const color = PALETTE[hashString(key) % PALETTE.length];
  const label = (key.split("/").pop() || "City Homes")
    .replace(/\.(jpg|jpeg|png)$/i, "")
    .replace(/-/g, " ");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${color}" />
      <text x="50%" y="50%" font-family="Georgia, serif" font-size="${Math.max(width * 0.035, 16)}" fill="#4a4238" text-anchor="middle" dominant-baseline="middle" opacity="0.55">
        ${label}
      </text>
    </svg>
  `.trim();

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
