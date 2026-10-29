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
  /** Vul aan met het juiste nummer (wordt dan ook in JSON-LD gebruikt). */
  phone: process.env.NEXT_PUBLIC_PHONE || "",
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
  foundingYear: 2020,
  partner: {
    label: "Professional Partner",
    platform: "Webflow",
    url: "https://webflow.com/@m7-branding-design",
  },
  /** Instagram is geverifieerd; controleer de overige URL's. */
  socials: {
    instagram: "https://www.instagram.com/m7branding/",
    linkedin: "https://www.linkedin.com/company/m7branding/",
    facebook: "https://www.facebook.com/m7branding/",
    youtube: "https://www.youtube.com/@m7branding",
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
    ga4: process.env.NEXT_PUBLIC_GA_ID || "",
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

/** Klantlogo's voor de logo-marquee. Zonder `logo` tonen we een woordmerk. */
export const clients: { name: string; logo?: string; width?: number }[] = [
  { name: "Sami", logo: "/media/clients/sami.png", width: 40 },
  { name: "trivago", logo: "/media/clients/trivago.png", width: 142 },
  { name: "PIP", logo: "/media/clients/pip.png", width: 66 },
  { name: "Atletiekunie", logo: "/media/clients/atletiekunie.png", width: 104 },
  { name: "Intrador", logo: "/media/clients/intrador.png", width: 134 },
  { name: "NKTV", logo: "/media/clients/nktv.png", width: 100 },
  { name: "JURGH Detailing" },
  { name: "TeamTV" },
  { name: "Repairlab" },
  { name: "Debiteurnet" },
];
