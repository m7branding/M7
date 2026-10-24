import type { Locale, T } from "@/content/types";

export const DEFAULT_LOCALE: Locale = "nl";

/**
 * Interne routes gebruiken Nederlandse segmenten (/diensten/...).
 * Engelse URL's krijgen vertaalde segmenten (/en/services/...).
 * De middleware vertaalt inkomende EN-URL's terug naar de interne route.
 */
export const SEGMENTS_EN: Record<string, string> = {
  diensten: "services",
  toepassingen: "applications",
  sectoren: "sectors",
  cases: "cases",
  "over-m7": "about",
  contact: "contact",
  privacybeleid: "privacy-policy",
  "algemene-voorwaarden": "terms-and-conditions",
  cookies: "cookies",
};

export const SEGMENTS_NL: Record<string, string> = Object.fromEntries(
  Object.entries(SEGMENTS_EN).map(([nl, en]) => [en, nl]),
);

/** Intern NL-pad ("/diensten/x") → publieke URL voor de locale. */
export function localize(path: string, locale: Locale): string {
  if (!path.startsWith("/")) return path;
  const [pathname, hash = ""] = path.split("#");
  if (locale === "nl") return pathname + (hash ? `#${hash}` : "");
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && SEGMENTS_EN[parts[0]]) parts[0] = SEGMENTS_EN[parts[0]];
  const out = "/en" + (parts.length ? "/" + parts.join("/") : "");
  return out + (hash ? `#${hash}` : "");
}

/** Publiek pad → { locale, intern NL-pad } */
export function parsePublicPath(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en") {
    parts.shift();
    if (parts.length && SEGMENTS_NL[parts[0]]) parts[0] = SEGMENTS_NL[parts[0]];
    return { locale: "en", path: "/" + parts.join("/") };
  }
  if (parts[0] === "nl") parts.shift();
  return { locale: "nl", path: "/" + parts.join("/") };
}

/** Vertaal een T-veld naar de juiste taal, met NL als fallback. */
export function tr(v: T | undefined, locale: Locale): string {
  if (!v) return "";
  return v[locale] || v.nl;
}

export function isLocale(v: string): v is Locale {
  return v === "nl" || v === "en";
}
