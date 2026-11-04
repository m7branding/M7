import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { PageViews } from "@/components/analytics/PageViews";
import { site } from "@/content/site";
import { getDict } from "@/lib/dict";
import "@/styles/tokens.css";
import "@/styles/consent.css";
import "./globals.css";

// Lettertype zit in de repo (src/fonts), dus geen download bij het starten of bouwen
const poppins = localFont({
  src: [
    { path: "../../fonts/poppins-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/poppins-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/poppins-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/poppins-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/poppins-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.letsgo),
  title: "M7 — Stel je online experience samen",
  description:
    "Blader door de M7-catalogus en stel real-time je dienstverlening samen: Branding, Websites, Webshops, Apps, Marketing, SEO/AEO, Funnels, Tracking, Hosting en Support — met heldere indicatieve prijzen.",
  alternates: { canonical: site.letsgo },
  icons: { icon: [{ url: "/brand/m7-badge.svg", type: "image/svg+xml" }], apple: "/brand/apple-touch-icon.png" },
  verification: { google: site.analytics.googleVerification || undefined },
};

// Draait op letsgo.m7branding.com (host-rewrite in middleware) en op /letsgo.
// Zelfde GA4-property en consent als de hoofdsite.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={poppins.variable}>
      <body>
        {children}
        <CookieConsent labels={getDict("nl").cookie} enabled={Boolean(site.analytics.ga4 || site.analytics.gtm)} moreHref={`${site.url}/cookies`} />
        <Analytics />
        {site.analytics.ga4 ? (
          <Suspense fallback={null}>
            <PageViews id={site.analytics.ga4} />
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
