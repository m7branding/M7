import { NextResponse, type NextRequest } from "next/server";
import families from "@/content/case-families.json";
import legacy from "@/content/legacy-redirects.json";
import rules from "@/content/redirect-rules.json";
import { SEGMENTS_EN, SEGMENTS_NL } from "@/lib/i18n";

/* Redirects (oude Webflow-URL's, delen van een klantverhaal, hernoemde/verwijderde routes). Ze staan ook in
   next.config.js, maar Netlify voert deze middleware uit vóór de redirects van Next; zonder deze kopie zou de
   middleware zo'n pad al naar de 404 sturen. */
const EXACT = new Map<string, string>(legacy as [string, string][]);
for (const [host, ...parts] of families as string[][])
  for (const p of parts) {
    EXACT.set(`/cases/${p}`, `/cases/${host}#${p}`);
    EXACT.set(`/en/cases/${p}`, `/en/cases/${host}#${p}`);
  }
for (const [from, to] of rules.mergedCases) {
  EXACT.set(`/cases/${from}`, `/cases/${to}`);
  EXACT.set(`/en/cases/${from}`, `/en/cases/${to}`);
}
for (const slug of rules.removedCases) {
  EXACT.set(`/cases/${slug}`, "/cases");
  EXACT.set(`/en/cases/${slug}`, "/en/cases");
}
for (const [from, to] of rules.movedSectors) {
  EXACT.set(`/sectoren/${from}`, `/sectoren/${to}`);
  EXACT.set(`/en/sectors/${from}`, `/en/sectors/${to}`);
}
const PREFIX = rules.renamedServices.flatMap(([from, to]) => [
  [`/diensten/${from}`, `/diensten/${to}`],
  [`/en/services/${from}`, `/en/services/${to}`],
]);

function redirectFor(pathname: string): string | undefined {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const hit = EXACT.get(p) ?? EXACT.get(p.toLowerCase());
  if (hit) return hit;
  for (const [from, to] of PREFIX) if (p === from || p.startsWith(from + "/")) return to + p.slice(from.length);
  return undefined;
}

/**
 * - letsgo.m7branding.com  → serveert de configurator (/letsgo) op de root
 * - /en/services/...       → intern /en/diensten/...
 * - /diensten/...          → intern /nl/diensten/...  (NL zonder prefix)
 * - /nl/...                → 308 naar de URL zonder /nl
 */
// Losse pagina's op het eerste niveau. Een onbekend eerste segment sturen we naar een dieper pad, zodat de
// catch-all ([doc]/[...rest]) de M7-404 in de layout toont; anders geeft Next zijn kale standaard-404.
// NL-only landingspagina's (zie NL_ONLY in lib/i18n) staan alleen in TOP_NL: onder /en tonen ze de 404.
const TOP_NL = new Set([
  ...Object.keys(SEGMENTS_EN),
  "world-of-m7",
  "hosting-webplans",
  "website-laten-bouwen",
  "branding-voor-je-bedrijf",
]);
const TOP_EN = new Set([...Object.values(SEGMENTS_EN), "world-of-m7", "hosting-webplans"]);

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;
  const host = req.headers.get("host") || "";

  const to = host.startsWith("letsgo.") ? undefined : redirectFor(pathname);
  if (to) {
    const u = url.clone();
    const [path, hash] = to.split("#");
    u.pathname = path;
    u.hash = hash ? `#${hash}` : "";
    return NextResponse.redirect(u, 308);
  }

  if (host.startsWith("letsgo.")) {
    if (pathname.startsWith("/letsgo")) return NextResponse.next();
    const u = url.clone();
    u.pathname = "/letsgo" + (pathname === "/" ? "" : pathname);
    return NextResponse.rewrite(u);
  }

  const parts = pathname.split("/").filter(Boolean);

  if (parts[0] === "nl") {
    const u = url.clone();
    u.pathname = "/" + parts.slice(1).join("/");
    return NextResponse.redirect(u, 308);
  }

  if (parts[0] === "en") {
    const seg = parts[1];
    // Canonical: NL-segment onder /en → redirect naar het Engelse segment
    if (seg && SEGMENTS_EN[seg] && SEGMENTS_EN[seg] !== seg) {
      const u = url.clone();
      u.pathname = "/en/" + [SEGMENTS_EN[seg], ...parts.slice(2)].join("/");
      return NextResponse.redirect(u, 308);
    }
    if (seg && SEGMENTS_NL[seg]) {
      const u = url.clone();
      u.pathname = "/en/" + [SEGMENTS_NL[seg], ...parts.slice(2)].join("/");
      return NextResponse.rewrite(u);
    }
    if (parts.length === 2 && !TOP_EN.has(seg)) {
      const u = url.clone();
      u.pathname = `/en/${seg}/404`;
      return NextResponse.rewrite(u);
    }
    return NextResponse.next();
  }

  const u = url.clone();
  u.pathname = "/nl" + (pathname === "/" ? "" : pathname) + (parts.length === 1 && !TOP_NL.has(parts[0]) ? "/404" : "");
  return NextResponse.rewrite(u);
}

export const config = {
  matcher: [
    "/((?!_next|api|letsgo|lab|og/|og$|brand/|media/|favicon|icon|apple-icon|sitemap.xml|robots.txt|llms.txt|llms-full.txt|manifest.webmanifest|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
