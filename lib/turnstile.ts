/**
 * Verifies a Cloudflare Turnstile token server-side.
 * Uses fetch (edge-runtime safe) rather than a Node SDK.
 *
 * In local development, if TURNSTILE_SECRET_KEY is unset, verification is
 * skipped so the form flow can be tested without live Cloudflare credentials.
 * This must never be the behavior in a deployed production environment —
 * always set TURNSTILE_SECRET_KEY there.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<{ success: boolean; errorCodes?: string[] }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    if (process.env.NODE_ENV === "production") {
      return { success: false, errorCodes: ["missing-secret-key"] };
    }
    return { success: true };
  }

  try {
    const body = new URLSearchParams();
    body.append("secret", secretKey);
    body.append("response", token);
    if (remoteIp) body.append("remoteip", remoteIp);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body }
    );

    const data = (await response.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    return { success: data.success, errorCodes: data["error-codes"] };
  } catch {
    return { success: false, errorCodes: ["network-error"] };
  }
}
