import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { PageViews } from "@/components/analytics/PageViews";
import { Footer } from "@/components/chrome/Footer";
import { SiteChrome } from "@/components/chrome/SiteChrome";
import type { NavData } from "@/components/chrome/types";
import { Cursor } from "@/components/motion/Cursor";
import { LocaleProvider } from "@/components/motion/LocaleProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { Preloader } from "@/components/motion/Preloader";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { team } from "@/content/team";
import type { Locale } from "@/content/types";
import { LOCALES } from "@/content/types";
import { allCases, allSectors, allServices, applicationsFor } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { isLocale, tr } from "@/lib/i18n";
import { organizationLd, websiteLd } from "@/lib/seo";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/motion.css";
import "@/styles/chrome.css";
import "@/styles/consent.css";
import "@/styles/sections.css";
import "@/styles/mockups.css";
import "@/styles/pages.css";

// Lettertype zit in de repo (src/fonts), dus geen download bij het starten of bouwen
const montserrat = localFont({
  src: "../../fonts/montserrat-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
});

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#030304",
  colorScheme: "dark",
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const locale = (isLocale(params.lang) ? params.lang : "nl") as Locale;
  return {
    metadataBase: new URL(site.url),
    title: {
      default:
        locale === "nl"
          ? "M7 | Branding, websites, apps & marketing bureau"
          : "M7 | Branding, websites, apps & marketing agency",
      template: "%s",
    },
    applicationName: "M7",
    authors: [{ name: site.legalName, url: site.url }],
    creator: site.legalName,
    publisher: site.legalName,
    formatDetection: { telephone: false },
    icons: { icon: [{ url: "/brand/m7-badge.svg", type: "image/svg+xml" }], apple: "/brand/apple-touch-icon.png" },
    verification: {
      google: site.analytics.googleVerification || undefined,
      other: site.analytics.bingVerification ? { "msvalidate.01": site.analytics.bingVerification } : undefined,
    },
    other: { "llms.txt": `${site.url}/llms.txt` },
  };
}

/** Zet vóór de eerste paint de juiste state (geen flits van de preloader). */
const BOOT = `(function(){var d=document.documentElement;d.classList.add('js');d.dataset.loading='1';try{if(sessionStorage.getItem('m7-intro'))d.dataset.intro='seen';}catch(e){}})();`;

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang;
  const dict = getDict(locale);

  const cases = allCases();
  const nav: NavData = {
    services: allServices().map((s) => ({
      slug: s.slug,
      title: tr(s.title, locale),
      short: tr(s.short, locale),
      intro: tr(s.intro, locale),
      color: s.color,
      icon: s.icon,
      apps: applicationsFor(s.slug).map((a) => ({ slug: a.slug, title: tr(a.title, locale) })),
    })),
    sectors: allSectors().map((s) => ({ slug: s.slug, title: tr(s.title, locale), icon: s.icon })),
    cases: cases
      .filter((c) => c.featured)
      .map((c) => ({ slug: c.slug, client: c.client, title: tr(c.title, locale), cover: c.cover, color: c.color })),
    caseCount: cases.length,
    team: team.map((m) => ({ photo: m.photo, name: m.name })),
    contact: {
      email: site.email,
      phone: site.phone,
      address: `${site.legalName}\n${site.address.street}\n${site.address.postalCode} ${site.address.city}\n${site.address.area}`,
      letsgo: site.letsgo,
      answers: site.answers.url,
    },
    socials: Object.entries(site.socials).map(([key, url]) => ({ key, url })),
  };

  return (
    <html lang={locale === "nl" ? "nl-NL" : "en-US"} className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <noscript>
          <style>{`.pl{display:none!important}`}</style>
        </noscript>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <SmoothScroll>
            <Preloader a={dict.preloader.a} b={dict.preloader.b} />
            <SiteChrome nav={nav} dict={dict} />
            <div className="page-shell">
              <main id="main">{children}</main>
              <Footer locale={locale} />
            </div>
            <PageTransition />
            <RevealObserver />
            <Cursor />
            <CookieConsent labels={dict.cookie} enabled={Boolean(site.analytics.ga4 || site.analytics.gtm)} />
          </SmoothScroll>
        </LocaleProvider>
        <JsonLd data={[organizationLd(locale), websiteLd(locale)]} />
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
