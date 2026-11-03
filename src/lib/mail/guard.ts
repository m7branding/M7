/* ============================================================
   Bescherming voor de formulieren die mail versturen:
   - eenvoudige rate limit per IP en per ontvanger (per serverinstantie),
   - ondertekende links voor de double opt-in van de nieuwsbrief,
   - het juiste basisadres voor links en afbeeldingen in de mail.
   ============================================================ */

import { createHmac, timingSafeEqual } from "crypto";
import { site } from "@/content/site";

const hits = new Map<string, number[]>();

/** true = te vaak; de aanvraag wordt dan niet gemaild. */
export function limited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  const over = arr.length >= max;
  if (!over) arr.push(now);
  hits.set(key, arr);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < windowMs)) hits.delete(k);
  return over;
}

export function clientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  return (xf ? xf.split(",")[0] : req.headers.get("x-real-ip") || "local").trim();
}

/**
 * Basis-URL voor links en afbeeldingen. Alleen de eigen domeinen tellen (productie, de
 * Vercel-URL's van deze deployment en lokaal), nooit een willekeurige Origin-header.
 */
export function baseUrl(req: Request): string {
  const origin = (req.headers.get("origin") || new URL(req.url).origin).replace(/\/$/, "");
  const own = [
    site.url,
    process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`,
    process.env.VERCEL_BRANCH_URL && `https://${process.env.VERCEL_BRANCH_URL}`,
    process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    process.env.NODE_ENV !== "production" && "http://localhost:3000",
  ].filter(Boolean) as string[];
  return own.includes(origin) ? origin : site.url;
}

/* ---------- double opt-in */

const secret = () => process.env.NEWSLETTER_SECRET || process.env.RESEND_API_KEY || "";
const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64url");
const unb64 = (s: string) => Buffer.from(s, "base64url").toString("utf8");
const mac = (payload: string) => createHmac("sha256", secret()).update(`m7-newsletter|${payload}`).digest("base64url").slice(0, 32);

/** Link-parameters voor de bevestiging: e (adres), l (taal), t (tijd), s (handtekening). */
export function optinParams(email: string, locale: string): URLSearchParams {
  const t = String(Date.now());
  const e = b64(email.toLowerCase());
  return new URLSearchParams({ e, l: locale, t, s: mac(`${e}|${locale}|${t}`) });
}

const MAX_AGE = 14 * 24 * 3600 * 1000;

export function readOptin(q: URLSearchParams): { email: string; locale: "nl" | "en" } | null {
  const e = q.get("e") || "", l = q.get("l") || "nl", t = q.get("t") || "", s = q.get("s") || "";
  if (!e || !t || !s || !secret()) return null;
  const want = Buffer.from(mac(`${e}|${l}|${t}`));
  const got = Buffer.from(s);
  if (want.length !== got.length || !timingSafeEqual(want, got)) return null;
  if (!(Date.now() - Number(t) < MAX_AGE)) return null;
  const email = unb64(e);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) return null;
  return { email, locale: l === "en" ? "en" : "nl" };
}
