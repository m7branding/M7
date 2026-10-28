/* ============================================================
   Slug-registry — de ruggengraat van het content model.
   Elke dienst, toepassing en sector bestaat hier één keer.
   Alle andere content verwijst via deze (getypeerde) slugs,
   dus een verwijzing naar iets dat niet bestaat = build error.

   Nieuwe toepassing toevoegen?
   1. Voeg de slug toe onder de juiste dienst in APPLICATIONS_BY_SERVICE
   2. Schrijf de content in src/content/services/<dienst>.ts
   ============================================================ */

export const SERVICE_SLUGS = [
  "branding-rebranding",
  "websites-webshops",
  "web-apps-portals-apps",
  "marketing-automatisering-funnels",
  "seo-aeo-geo",
  "content-marketing-online-ads",
  "foto-video-3d-animatie",
  "grafisch-ontwerp-print",
  "configurators-lead-tools-widgets",
  "ai-consultancy",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const APPLICATIONS_BY_SERVICE = {
  "branding-rebranding": [
    "merkstrategie",
    "logo-ontwerp",
    "huisstijl",
    "rebranding",
    "brandbook",
    "naamgeving",
    "tone-of-voice",
    "employer-branding",
  ],
  "websites-webshops": [
    "webflow-website",
    "wordpress-website",
    "webshop",
    "landingspaginas",
    "ux-ui-webdesign",
    "website-migratie",
    "hosting-onderhoud",
    "domeinbeheer",
    "meertalige-website",
  ],
  "web-apps-portals-apps": [
    "klantportaal",
    "saas-platform",
    "mobiele-app",
    "dashboards",
    "ux-ui-app-design",
    "ledenportaal-loyaliteit",
    "api-koppelingen",
    "mvp-ontwikkeling",
  ],
  "marketing-automatisering-funnels": [
    "marketing-automation",
    "e-mailmarketing",
    "salesfunnels",
    "crm-implementatie",
    "workflow-automatisering",
    "lead-nurturing",
    "tracking-analytics",
    "conversie-optimalisatie",
  ],
  "seo-aeo-geo": [
    "seo",
    "technische-seo",
    "aeo",
    "geo",
    "lokale-seo",
    "linkbuilding",
    "seo-content",
    "structured-data",
    "seo-audit",
  ],
  "content-marketing-online-ads": [
    "social-media-marketing",
    "google-ads",
    "meta-ads",
    "linkedin-ads",
    "tiktok-ads",
    "contentstrategie",
    "copywriting-blogs",
  ],
  "foto-video-3d-animatie": [
    "bedrijfsfilm",
    "productfotografie",
    "dronevideo",
    "3d-visualisatie",
    "motion-design",
    "lottie-animaties",
    "social-video",
    "ai-beeld-video",
  ],
  "grafisch-ontwerp-print": [
    "visitekaartjes-drukwerk",
    "brochures-magazines",
    "flyers-posters",
    "verpakkingsontwerp",
    "beurs-signing",
    "presentaties-pitchdecks",
    "illustraties-iconen",
    "infographics",
  ],
  "configurators-lead-tools-widgets": [
    "productconfigurator",
    "offerte-calculator",
    "keuzehulp-quiz",
    "check-tools",
    "boekingswidget",
    "website-widgets",
    "3d-configurator",
  ],
  "ai-consultancy": [
    "ai-chatbots",
    "ai-agents",
    "ai-integraties",
    "ai-strategie",
    "ai-workshops",
    "ai-content",
    "digitale-strategie",
    "it-projectmanagement",
  ],
} as const satisfies Record<ServiceSlug, readonly string[]>;

export type ApplicationSlug =
  (typeof APPLICATIONS_BY_SERVICE)[ServiceSlug][number];

export const APPLICATION_SLUGS = SERVICE_SLUGS.flatMap(
  (s) => APPLICATIONS_BY_SERVICE[s] as readonly ApplicationSlug[],
);

export const SECTOR_SLUGS = [
  "automotive-mobiliteit",
  "transport-logistiek",
  "vastgoed-makelaardij",
  "bouw-architectuur",
  "interieur-architectuur",
  "energie-duurzaamheid",
  "industrie-techniek",
  "agrarisch-natuur",
  "food-retail",
  "fashion-beauty",
  "zorg-welzijn",
  "educatie-scholen",
  "gemeentes-overheden",
  "zakelijke-dienstverlening",
  "finance-fintech",
  "tech-saas-startups",
  "sport-media",
  "travel-leisure",
] as const;
export type SectorSlug = (typeof SECTOR_SLUGS)[number];
