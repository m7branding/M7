import type { ApplicationSlug, ServiceSlug } from "./registry";

/* ============================================================
   Beeld in de hero van elke toepassingspagina (diensten/<dienst>/<toepassing>).
   Altijd echt werk, nooit een kale code-mockup:
   - { show }  de geanimeerde showcase van home (per dienst), waar die over
               deze toepassing gaat of er het dichtst bij ligt (ook van een
               andere dienst, bv. API-koppelingen → de Buitenstate-flow);
   - { case, video: true }  de hero-video (3D-render) van een case;
   - { case, src }          een beeld uit de cover of galerij van een case.
   Een case moet aan deze toepassing gekoppeld zijn (case.applications) en `src`
   moet uit de media van die case komen; anders valt de pagina terug op de
   showcase van de dienst (zie lib/application-visual.ts).
   Elke toepassing staat hier (het type dwingt dat af).
   ============================================================ */

export type AppVisualRef =
  | { show: ServiceSlug }
  | { case: string; video: true }
  | { case: string; src: string; position?: string };

const C = "/media/cases";

export const APP_VISUALS: Record<ApplicationSlug, AppVisualRef> = {
  /* ---------- Branding & Rebranding ---------- */
  merkstrategie: { show: "branding-rebranding" }, // DesignersHouse-brandbook (gekoppelde case)
  "logo-ontwerp": { case: "silvr", src: `${C}/silvr/r-12-b06-wall-logo-b.webp` },
  huisstijl: { case: "repairlab", src: `${C}/repairlab/s-projects-04-repairlab-identity.webp` },
  rebranding: { case: "bernheze-makelaars-rebranding", src: `${C}/bernheze-makelaars-rebranding/r-64-brandbook-open.webp` },
  brandbook: { show: "branding-rebranding" },
  naamgeving: { case: "designers-house", src: `${C}/designers-house/s-fa-logo-opbouw.webp` },
  "tone-of-voice": { case: "laserlux", src: `${C}/laserlux/s-fa-brandbook-02.webp` }, // brandbook, pagina tone of voice
  "employer-branding": { show: "branding-rebranding" },
  merkonderzoek: { show: "branding-rebranding" },
  concurrentieanalyse: { show: "branding-rebranding" },

  /* ---------- Websites & Webshops ---------- */
  "webflow-website": { show: "websites-webshops" }, // Plenty Planet (gekoppelde case)
  "wordpress-website": { case: "digital-newsgroup", video: true },
  webshop: { case: "misterglass", video: true },
  landingspaginas: { case: "onderbouwd-investeren", video: true },
  "ux-ui-webdesign": { case: "electriffy", video: true },
  "website-migratie": { show: "websites-webshops" },
  "hosting-onderhoud": { case: "atl-plus", src: `${C}/atl-plus/v-10-browser-components.webp` },
  domeinbeheer: { show: "websites-webshops" },
  "meertalige-website": { case: "kippenkar", video: true }, // kaart van Europa, meerdere talen
  toegankelijkheid: { show: "websites-webshops" },
  "wcag-audit": { show: "websites-webshops" },
  "pagespeed-optimalisatie": { show: "websites-webshops" },
  "cookie-compliance": { show: "websites-webshops" },

  /* ---------- Web-apps, Portalen & Apps ---------- */
  klantportaal: { case: "jurgh-detailing", src: `${C}/jurgh-detailing/s-portal-1.webp`, position: "50% 0%" },
  "saas-platform": { show: "web-apps-portals-apps" }, // Monvy (gekoppelde case)
  "mobiele-app": { case: "expociety-app", video: true },
  dashboards: { case: "citex-ai", src: `${C}/citex-ai/s-infra-citex-08-citex-studio-display.webp` },
  "ux-ui-app-design": { case: "infrai", video: true },
  "ledenportaal-loyaliteit": { case: "trt-tv", src: `${C}/trt-tv/cover.webp` },
  "api-koppelingen": { show: "automation-funnels" }, // Buitenstate: widget → flow → CRM → e-mail (gekoppelde case)
  "mvp-ontwikkeling": { show: "web-apps-portals-apps" },
  "ux-research": { case: "atl-plus", video: true },
  "user-testing": { show: "web-apps-portals-apps" },
  "user-stories": { show: "web-apps-portals-apps" },
  devops: { show: "web-apps-portals-apps" },

  /* ---------- Automation & Funnels ---------- */
  "marketing-automation": { show: "automation-funnels" }, // Buitenstate (gekoppelde case)
  "e-mailmarketing": { show: "automation-funnels" }, // Buitenstate: de flow eindigt in een e-mail
  salesfunnels: { case: "impeco", video: true },
  "crm-implementatie": { show: "automation-funnels" }, // de flow landt in het CRM
  "workflow-automatisering": { case: "bctn-qhse", src: `${C}/bctn-qhse/s-fa-checklist-rapport.webp` },
  "lead-nurturing": { case: "buitenstate-tools", video: true },
  "tracking-analytics": { case: "the-digital-clinic", video: true },
  "conversie-optimalisatie": { case: "onderbouwd-investeren", src: `${C}/onderbouwd-investeren/v-01-display-and-phone.webp` },
  "analytics-audit": { show: "automation-funnels" },

  /* ---------- SEO, AEO & GEO ---------- */
  seo: { case: "foodbars-gelderland", video: true },
  "technische-seo": { show: "seo-aeo-geo" },
  aeo: { show: "seo-aeo-geo" }, // The Sandt in AI-antwoorden (gekoppelde case)
  geo: { show: "seo-aeo-geo" },
  "lokale-seo": { case: "alpacafarm-vorstenbosch", src: `${C}/alpacafarm-vorstenbosch/r-14-d13-macro-mac-a.webp` },
  linkbuilding: { show: "seo-aeo-geo" },
  "seo-content": { case: "alpacafarm-vorstenbosch", src: `${C}/alpacafarm-vorstenbosch/m-detail.webp` },
  "structured-data": { show: "seo-aeo-geo" }, // The Sandt (gekoppelde case)
  "seo-audit": { show: "seo-aeo-geo" },
  contentstructuur: { case: "pine-street-school", video: true },

  /* ---------- Content Marketing & Online Ads ---------- */
  "social-media-marketing": { show: "content-marketing-online-ads" }, // Alpacafarm (gekoppelde case)
  "google-ads": { case: "the-sandt", video: true },
  "meta-ads": { show: "content-marketing-online-ads" }, // GRID-advertentie (gekoppelde case)
  "linkedin-ads": { case: "mindyourpass", video: true },
  "tiktok-ads": { show: "content-marketing-online-ads" },
  contentstrategie: { case: "bus-whisky", video: true },
  "copywriting-blogs": { case: "buitenstate", video: true },
  communicatiestrategie: { show: "content-marketing-online-ads" },
  doelgroeponderzoek: { show: "content-marketing-online-ads" },

  /* ---------- Foto, Video, 3D & Animatie ---------- */
  bedrijfsfilm: { case: "tristo", src: `${C}/tristo/s-fa-still-02.webp` },
  productfotografie: { case: "hela", src: `${C}/hela/s-fa-design-01.webp` },
  dronevideo: { case: "gemeente-gouda", src: `${C}/gemeente-gouda/s-fa-gouda-drone.webp` },
  "3d-visualisatie": { show: "foto-video-3d-animatie" }, // Green Eco Corridor (gekoppelde case)
  "motion-design": { case: "designers-house", video: true },
  "lottie-animaties": { case: "hela", video: true },
  "social-video": { case: "sublime-video", src: `${C}/sublime-video/cover.webp` },
  "ai-beeld-video": { case: "maarschall", video: true },

  /* ---------- Grafisch Ontwerp & Print ---------- */
  "visitekaartjes-drukwerk": { case: "jurgh-detailing", src: `${C}/jurgh-detailing/s-business-cards.webp` },
  "brochures-magazines": { show: "grafisch-ontwerp-print" }, // Bernheze (gekoppelde case)
  "flyers-posters": { case: "misterglass", src: `${C}/misterglass/s-fa-posters.webp` },
  verpakkingsontwerp: { case: "sublime-branding", src: `${C}/sublime-branding/06.webp` },
  "beurs-signing": { case: "wrap-720s", src: `${C}/wrap-720s/s-fa-wrap-views.webp` },
  "presentaties-pitchdecks": { case: "samdesk", src: `${C}/samdesk/r-65-device-1.webp` },
  "illustraties-iconen": { case: "taylor", src: `${C}/taylor/01.webp` },
  infographics: { show: "grafisch-ontwerp-print" }, // kaart in het Investment Memorandum (gekoppelde case)

  /* ---------- Configurators, Lead Tools & Widgets ---------- */
  productconfigurator: { show: "configurators-lead-tools-widgets" }, // Steddion (gekoppelde case)
  "offerte-calculator": { case: "silvr", video: true }, // calculator in vijf stappen
  "keuzehulp-quiz": { case: "nexis-group", video: true }, // aanvraag in vier stappen
  "check-tools": { case: "huurfix", video: true }, // "Kan je huur omlaag?"
  boekingswidget: { case: "alpacafarm-vorstenbosch", video: true }, // boekingskalender
  "website-widgets": { case: "teamtv-pricing-table", src: `${C}/teamtv-pricing-table/s-pricing-table.webp` },
  "3d-configurator": { show: "configurators-lead-tools-widgets" },

  /* ---------- AI & Consultancy ---------- */
  "ai-chatbots": { show: "ai-consultancy" }, // AI-assistent die klantvragen beantwoordt (BCTN)
  "ai-agents": { show: "ai-consultancy" },
  "ai-integraties": { case: "buitenstate-tools", src: `${C}/buitenstate-tools/r-cover.webp` },
  "ai-strategie": { show: "ai-consultancy" },
  "ai-workshops": { show: "ai-consultancy" },
  "ai-content": { show: "ai-consultancy" },
  "digitale-strategie": { show: "ai-consultancy" }, // BCTN (gekoppelde case)
  "it-projectmanagement": { case: "the-digital-clinic", src: `${C}/the-digital-clinic/v-06-tablet.webp` },
  "agile-werken": { show: "ai-consultancy" },
  verandertrajecten: { show: "ai-consultancy" },
  "roadmap-strategie": { case: "munjz-connect", src: `${C}/munjz-connect/s-fa-design-02.webp` },
  "roadmap-management": { show: "ai-consultancy" },
  "design-sprint": { show: "ai-consultancy" },
};
