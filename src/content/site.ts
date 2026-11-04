/* ============================================================
   Site-brede instellingen: bedrijfsgegevens, socials,
   integraties (Analytics, Search Console, AnswerLink) en
   home-statistieken. Integratie-ID's komen bij voorkeur uit
   environment variables (zie .env.example).
   ============================================================ */

export const site = {
  name: "M7",
  legalName: "M7 Branding & Design B.V.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://m7branding.com").replace(/\/$/, ""),
  email: "hello@m7branding.com",
  /** Telefoon van Martijn (zelfde nummer als op de vorige site en WhatsApp). Te overschrijven met NEXT_PUBLIC_PHONE. */
  phone: process.env.NEXT_PUBLIC_PHONE || "+31 6 57564847",
  /** WhatsApp van Martijn Roefs (internationaal, zonder +). Te overschrijven met NEXT_PUBLIC_WHATSAPP. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "31657564847",
  address: {
    street: "Loosbroekseweg 45",
    postalCode: "5388 VM",
    city: "Nistelrode",
    region: "Noord-Brabant",
    area: "Regio Eindhoven",
    country: "NL",
    geo: { lat: 51.7048, lng: 5.5519 },
  },
  kvk: process.env.NEXT_PUBLIC_KVK || "",
  /** BTW-identificatienummer (verplicht op de site naast de KvK, art. 3:15d BW), bv. NL123456789B01. */
  vat: process.env.NEXT_PUBLIC_VAT || "",
  foundingYear: 2020,
  partner: {
    label: "Professional Partner",
    platform: "Webflow",
    url: "https://webflow.com/@m7-branding-design",
  },
  /** Gecontroleerd bij de lancering: Instagram, LinkedIn, Facebook en Google werken. YouTube alleen met een
   * geldige kanaal-URL (NEXT_PUBLIC_YOUTUBE_URL); leeg = nergens getoond. */
  socials: {
    instagram: "https://www.instagram.com/m7branding/",
    linkedin: "https://www.linkedin.com/company/m7branding/",
    facebook: "https://www.facebook.com/m7branding/",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    google: "https://g.page/m7branding",
  },
  /** De interactieve configurator (zelfde repo, route /letsgo). */
  letsgo: process.env.NEXT_PUBLIC_LETSGO_URL || "https://letsgo.m7branding.com",
  /** AnswerLink kennisbank / answer hub. */
  answers: {
    url: (process.env.NEXT_PUBLIC_ANSWERS_URL || "https://answers.m7branding.com").replace(/\/$/, ""),
    /** Optioneel: embed-script van AnswerLink (widget / tracking). */
    script: process.env.NEXT_PUBLIC_ANSWERLINK_SCRIPT || "",
  },
  analytics: {
    /** Zelfde GA4-property als de huidige site, bv. G-XXXXXXXXXX */
    ga4: process.env.NEXT_PUBLIC_GA_ID || "G-8P2VX3Z6NE",
    /** Optioneel: Google Tag Manager container, bv. GTM-XXXXXXX */
    gtm: process.env.NEXT_PUBLIC_GTM_ID || "",
    /** Search Console HTML-tag verificatie (alleen de content-waarde). */
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
  /** Webhook (bv. Make / n8n / Odoo) voor het contactformulier en de nieuwsbrief. */
  forms: {
    contactWebhook: process.env.CONTACT_WEBHOOK_URL || "",
    newsletterWebhook: process.env.NEWSLETTER_WEBHOOK_URL || "",
  },
};

/** Cijfers op de home (marquee). Controleer/actualiseer regelmatig. */
export const stats: { value: number; suffix: string; label: { nl: string; en: string } }[] = [
  { value: 75, suffix: "+", label: { nl: "WordPress websites in beheer", en: "WordPress websites managed" } },
  { value: 50, suffix: "+", label: { nl: "Webflow websites in beheer", en: "Webflow websites managed" } },
  { value: 275, suffix: "+", label: { nl: "Webdomeinen in beheer", en: "Web domains managed" } },
  { value: 35, suffix: "+", label: { nl: "Rebrandings doorgevoerd", en: "Rebrands delivered" } },
  { value: 3000, suffix: "+", label: { nl: "Storingen opgelost", en: "Issues resolved" } },
  { value: 250, suffix: "+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
];

/**
 * Klantlogo's voor de logo-marquee (home, over M7, sectoren): de belangrijkste klanten,
 * met hun echte logo in wit. `width` is optisch gelijk getrokken (gelijk oppervlak, hooguit
 * 50 px hoog). `silhouette`: een gekleurd bronbestand dat via CSS wit wordt.
 */
export const clients: { name: string; logo: string; width: number; silhouette?: boolean }[] = [
  { name: "trivago", logo: "/media/clients/trivago.png", width: 135, silhouette: true },
  { name: "Monvy", logo: "/media/cases/monvy/logo-white.svg", width: 138 },
  { name: "Atletiekunie", logo: "/media/clients/atletiekunie.png", width: 115, silhouette: true },
  { name: "TeamTV", logo: "/media/cases/teamtv/logo-white.png", width: 159 },
  { name: "Gemeente Gouda", logo: "/media/cases/gemeente-gouda/logo-white.svg", width: 133 },
  { name: "Repairlab", logo: "/media/cases/repairlab/logo-white.svg", width: 101 },
  { name: "Expociety", logo: "/media/cases/expociety-app/logo-white.svg", width: 150 },
  { name: "Silvr", logo: "/media/cases/silvr/logo-white.png", width: 132 },
  { name: "Steddion", logo: "/media/cases/steddion/logo-white.svg", width: 82 },
  { name: "Bernheze Makelaars", logo: "/media/cases/bernheze-makelaars-rebranding/logo-white.svg", width: 103 },
  { name: "Fairlink", logo: "/media/cases/fairlink/logo-white.svg", width: 140 },
  { name: "The Digital Clinic", logo: "/media/cases/the-digital-clinic/logo-white.svg", width: 112 },
  { name: "Plenty Planet", logo: "/media/cases/plenty-planet/logo-white.svg", width: 157 },
  { name: "Sparta", logo: "/media/cases/sparta-blue-hydrogen/logo-white.svg", width: 190 },
  { name: "Mind Your Pass", logo: "/media/cases/mindyourpass/logo-white.svg", width: 99 },
  { name: "Nexis", logo: "/media/cases/nexis-group/logo-white.png", width: 114 },
  { name: "ATL+", logo: "/media/cases/atl-plus/logo-white.png", width: 103 },
  { name: "Hela", logo: "/media/cases/hela/logo-white.svg", width: 70 },
  { name: "Intrador", logo: "/media/cases/intrador/logo-white.svg", width: 176 },
  { name: "NKTV", logo: "/media/cases/nktv/logo-white.png", width: 115 },
  { name: "Boutique Hotels Gelderland", logo: "/media/cases/boutique-hotels-gelderland/logo-white.svg", width: 128 },
  { name: "Calvin Vlaanderen", logo: "/media/cases/calvin-vlaanderen/logo-white.svg", width: 137 },
  { name: "Pine Street School", logo: "/media/cases/pine-street-school/logo-white.svg", width: 142 },
  { name: "SUBLIME", logo: "/media/cases/sublime-branding/logo-white.svg", width: 178 },
  { name: "Impeco", logo: "/media/cases/impeco/logo-white.svg", width: 148 },
  { name: "Huurfix", logo: "/media/cases/huurfix/logo-white.svg", width: 151 },
  { name: "KDS", logo: "/media/cases/kds-stansvormen/logo-white.svg", width: 125 },
  { name: "Sami", logo: "/media/clients/sami.png", width: 45, silhouette: true },
  { name: "Mister Glass", logo: "/media/cases/misterglass/logo-white.svg", width: 115 },
  { name: "The Sandt", logo: "/media/cases/the-sandt/logo-white.png", width: 109 },
  { name: "PIP", logo: "/media/clients/pip.png", width: 93, silhouette: true },
  { name: "Aigora", logo: "/media/cases/aigora/logo-white.svg", width: 118 },
  { name: "Digital Newsgroup", logo: "/media/cases/digital-newsgroup/logo-white.svg", width: 113 },
  { name: "Foodbars Gelderland", logo: "/media/cases/foodbars-gelderland/logo-white.svg", width: 66 },
  { name: "Solid Layer", logo: "/media/cases/solidlayer/logo-white.svg", width: 103 },
];
