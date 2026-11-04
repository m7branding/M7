import { NextResponse, type NextRequest } from "next/server";
import { SEGMENTS_EN, SEGMENTS_NL } from "@/lib/i18n";

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
    "/((?!_next|api|letsgo|lab|og|brand|media|favicon|icon|apple-icon|sitemap.xml|robots.txt|llms.txt|llms-full.txt|manifest.webmanifest|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
