import type { Metadata } from "next";
import { office } from "@/content/office";
import { site } from "@/content/site";
import { support } from "@/content/support";
import { people, team } from "@/content/team";
import type { FAQ, Locale } from "@/content/types";
import { allServices } from "./content";
import { localize, tr } from "./i18n";
import { stripRefs } from "./inline";
import { paths } from "./paths";

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
/** Vaste @id per teamlid, zodat Organization (founder/employee) en de over-ons-pagina naar dezelfde Person wijzen. */
export const personId = (slug: string) => `${site.url}/over-m7#${slug}`;

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`)}`;

/** Werkgebied: de regio rond het kantoor, Nederland en België, en de landen waar we klanten hebben. */
const AREA = {
  cities: ["Nistelrode", "Oss", "Uden", "Heesch", "Veghel", "Schijndel", "'s-Hertogenbosch", "Eindhoven", "Nijmegen", "Tilburg"],
  regions: ["Noord-Brabant", "Gelderland"],
  countries: ["Netherlands", "Belgium", "Germany", "United Kingdom", "France", "Spain", "Portugal", "Austria", "Denmark", "Poland", "United States", "Canada", "Brazil", "United Arab Emirates", "Saudi Arabia"],
};

export function organizationLd(locale: Locale) {
  const nl = locale === "nl";
  const sameAs = [...Object.values(site.socials), site.partner.url].filter(Boolean);
  const founder = team.find((m) => m.founder);
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: site.legalName,
    alternateName: ["M7", "M7 Branding", "M7 Branding & Design"],
    legalName: site.legalName,
    url: site.url,
    logo: { "@type": "ImageObject", url: `${site.url}/brand/m7-badge.svg` },
    image: [abs("/media/office/kantoor-buitenkant.webp"), abs("/media/office/kantoor-werkplekken.webp")],
    email: site.email,
    ...(site.phone ? { telephone: site.phone } : {}),
    foundingDate: String(site.foundingYear),
    slogan: "From pixels to stars.",
    description: nl
      ? "Full-service branding- en designbureau uit Nistelrode (Noord-Brabant, regio Eindhoven en Den Bosch): branding, websites, webshops, web-apps, automation & funnels, SEO/AEO/GEO, content & ads, foto en video, grafisch ontwerp, configurators en AI. Webflow Professional Partner met een eigen kantoor in het buitengebied van Nistelrode."
      : "Full-service branding & design agency from Nistelrode (North Brabant, Eindhoven and Den Bosch region): branding, websites, web shops, web apps, automation & funnels, SEO/AEO/GEO, content & ads, photo and video, graphic design, configurators and AI. Webflow Professional Partner with its own office in the countryside of Nistelrode.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
    hasMap: mapsUrl,
    areaServed: [
      ...AREA.cities.map((name) => ({ "@type": "City", name })),
      ...AREA.regions.map((name) => ({ "@type": "AdministrativeArea", name })),
      ...AREA.countries.map((name) => ({ "@type": "Country", name })),
    ],
    knowsLanguage: ["nl", "en"],
    knowsAbout: [
      ...allServices().map((s) => tr(s.title, locale)),
      "Webflow",
      "WordPress",
      "Shopify",
      "WooCommerce",
      "Marketing automation",
      "Generative Engine Optimization",
      "Answer Engine Optimization",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: nl ? "Diensten van M7" : "M7 services",
      itemListElement: allServices().map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: tr(s.title, locale), url: abs(localize(paths.service(s), locale)) },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        ...(site.phone ? { telephone: site.phone } : {}),
        availableLanguage: ["Dutch", "English"],
        areaServed: AREA.countries,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: support.email,
        availableLanguage: ["Dutch", "English"],
      },
    ],
    ...(founder ? { founder: { "@type": "Person", "@id": personId(founder.slug), name: founder.name } } : {}),
    numberOfEmployees: { "@type": "QuantitativeValue", value: people.length },
    amenityFeature: office.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: tr(a, locale), value: true })),
    memberOf: { "@type": "ProgramMembership", programName: `${site.partner.platform} ${site.partner.label}`, url: site.partner.url },
    sameAs,
    ...(site.kvk ? { identifier: { "@type": "PropertyValue", propertyID: "KvK", value: site.kvk } } : {}),
  };
}

/** Teamleden als Person (Millie niet: zij is wel Chief Happiness Officer, maar geen Person). */
export function teamLd(locale: Locale) {
  return people.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(m.slug),
    name: m.name,
    givenName: m.first,
    jobTitle: tr(m.role, locale),
    image: abs(m.photo),
    worksFor: { "@id": orgId },
    workLocation: { "@type": "Place", name: `${site.legalName}, ${site.address.city}`, address: `${site.address.street}, ${site.address.postalCode} ${site.address.city}` },
    ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
  }));
}

/** Over-ons-pagina: AboutPage over de organisatie, met het team als onderdeel. */
export function aboutPageLd(locale: Locale, { title, description }: { title: string; description: string }) {
  const url = abs(localize(paths.about, locale));
  return [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: locale === "nl" ? "nl-NL" : "en-US",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": orgId },
      mainEntity: { "@id": orgId },
      primaryImageOfPage: { "@type": "ImageObject", url: abs("/media/office/kantoor-buitenkant.webp") },
      mentions: people.map((m) => ({ "@id": personId(m.slug) })),
    },
    ...teamLd(locale),
  ];
}

/** Contactpagina: ContactPage met de organisatie (adres, contactpunten) als onderwerp. */
export function contactPageLd(locale: Locale) {
  const url = abs(localize(paths.contact, locale));
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    url,
    inLanguage: locale === "nl" ? "nl-NL" : "en-US",
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": orgId },
    mainEntity: { "@id": orgId },
  };
}

export function websiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "M7",
    alternateName: site.legalName,
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
    areaServed: [
      { "@type": "AdministrativeArea", name: "Noord-Brabant" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Belgium" },
    ],
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
  year?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: abs(localize(path, locale)),
    ...(image ? { image: abs(image) } : {}),
    ...(year ? { dateCreated: String(year) } : {}),
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
