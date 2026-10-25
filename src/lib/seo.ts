import type { Metadata } from "next";
import { site } from "@/content/site";
import type { FAQ, Locale } from "@/content/types";
import { localize, tr } from "./i18n";
import { stripRefs } from "./inline";

export const abs = (p: string) => (p.startsWith("http") ? p : `${site.url}${p === "/" ? "" : p}`);

/** Metadata met canonical, hreflang (nl/en/x-default), Open Graph en Twitter. */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image,
  noindex,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  const url = abs(localize(path, locale));
  const og = image || `/og?title=${encodeURIComponent(title.split(" | ")[0])}&l=${locale}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "nl-NL": abs(localize(path, "nl")),
        "en-US": abs(localize(path, "en")),
        "x-default": abs(localize(path, "nl")),
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.legalName,
      locale: locale === "nl" ? "nl_NL" : "en_US",
      alternateLocale: locale === "nl" ? ["en_US"] : ["nl_NL"],
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [og] },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

/* ---------------- JSON-LD ---------------- */

export const orgId = `${site.url}/#organization`;

export function organizationLd(locale: Locale) {
  const sameAs = [...Object.values(site.socials), site.partner.url, site.answers.url, site.letsgo].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: site.legalName,
    alternateName: "M7",
    url: site.url,
    logo: `${site.url}/brand/m7-badge.svg`,
    image: `${site.url}/og?title=M7`,
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    foundingDate: String(site.foundingYear),
    slogan: "From pixels to stars.",
    description:
      locale === "nl"
        ? "Full-service branding- en designbureau: branding, websites, webshops, web-apps, marketing, SEO/AEO/GEO, content, video, print, configurators en AI."
        : "Full-service branding & design agency: branding, websites, web shops, web apps, marketing, SEO/AEO/GEO, content, video, print, configurators and AI.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
    areaServed: ["NL", "BE", "DE", "Worldwide"],
    knowsLanguage: ["nl", "en", "de", "fr"],
    sameAs,
    ...(site.kvk ? { identifier: { "@type": "PropertyValue", propertyID: "KvK", value: site.kvk } } : {}),
  };
}

export function websiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "M7",
    inLanguage: locale === "nl" ? "nl-NL" : "en-US",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(localize(it.path, locale)),
    })),
  };
}

export function faqLd(faqs: FAQ[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: tr(f.q, locale),
      acceptedAnswer: { "@type": "Answer", text: stripRefs(tr(f.a, locale), locale) },
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  locale,
  serviceType,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  serviceType?: string;
  offers?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: abs(localize(path, locale)),
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Netherlands" },
    ...(offers?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name,
            itemListElement: offers.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o } })),
          },
        }
      : {}),
  };
}

export function creativeWorkLd({
  name,
  description,
  path,
  image,
  locale,
  client,
  year,
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  locale: Locale;
  client: string;
  year: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: abs(localize(path, locale)),
    ...(image ? { image: abs(image) } : {}),
    dateCreated: String(year),
    creator: { "@id": orgId },
    sourceOrganization: { "@type": "Organization", name: client },
    inLanguage: locale === "nl" ? "nl-NL" : "en-US",
  };
}

export function itemListLd(items: { name: string; path: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(localize(it.path, locale)),
    })),
  };
}
