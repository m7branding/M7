// ============================================================
// M7 — Service Catalogus (data + intake + aanbevelingslogica)
// Klanten stellen hier zelf een dienstverlening samen. We starten
// met een korte intake (waar sta je / wat wil je bereiken) en leiden
// ze via een genummerd pad + conditionele cross-sell door de catalogus.
// Alle prijzen zijn INDICATIEVE VANAFPRIJZEN.
// ============================================================

import type { BrandKey } from "@/components/experience/BrandIcon";

export type IconKey =
  | "branding"
  | "print"
  | "websites"
  | "webshop"
  | "webapps"
  | "apps"
  | "video"
  | "organic"
  | "paid"
  | "seo"
  | "tracking"
  | "funnels"
  | "crm"
  | "ai"
  | "hosting"
  | "support";

/** Alle bedragen in deze catalogus zijn exclusief btw. */
export const VAT_NOTE = "Alle prijzen zijn excl. btw";

export type Price = {
  /** Eenmalige (setup) kosten in euro — indicatief vanaf. */
  setup?: number;
  /** Doorlopende kosten per maand in euro. */
  monthly?: number;
  /** true = op aanvraag / maatwerk. */
  custom?: boolean;
  /** "stuk"/"afl." toont een eenheid. */
  suffix?: string;
  /** true = toon een "vanaf"-prijs (projectprijzen die per scope variëren). */
  from?: boolean;
};

export type PkgKind = "plan" | "addon" | "item";

/**
 * Uitgebreide toelichting achter het (i)-icoon op elke kaart: wát we precies
 * doen (commercieel + technisch) en waaróm je dit zou afnemen.
 */
export type PkgDetails = {
  /** Wat doen we precies — 2-4 zinnen. */
  what: string;
  /** Waarom zou je dit doen — 2-3 zinnen, zakelijk resultaatgericht. */
  why: string;
  /** Concreet wat je krijgt / welke werkzaamheden erin zitten. */
  includes?: string[];
  /** Technische details, tooling en randvoorwaarden. */
  tech?: string[];
};

export type Pkg = {
  id: string;
  name: string;
  tagline: string;
  kind: PkgKind;
  price: Price;
  features: string[];
  highlight?: boolean;
  badge?: string;
  recommends?: IconKey[];
  details?: PkgDetails;
  /** Optionele eigen subgroep binnen de categorie (zie Category.groups). */
  group?: string;
};

export type CategoryOption = {
  id: string;
  label: string;
  choices: string[];
  multi?: boolean;
  triggers?: Record<string, IconKey>;
};

export type Category = {
  id: IconKey;
  label: string;
  kicker: string;
  blurb: string;
  note?: string;
  options?: CategoryOption[];
  packages: Pkg[];
  /** Platforms/tools die we in deze categorie inzetten (brand-iconen). */
  tools?: BrandKey[];
  /**
   * Pakket-id's uit ándere categorieën die vrijwel altijd samen met deze
   * categorie worden afgenomen. Worden onderaan de stap als strip getoond.
   */
  crossSell?: string[];
  /**
   * Eigen subgroepen binnen deze categorie, in weergavevolgorde. Pakketten
   * met een `group` die hierop matcht komen in die groep te staan; de rest
   * valt terug op de standaard indeling (plannen / add-ons / losse diensten).
   */
  groups?: { id: string; kicker: string; hint: string }[];
  /** Harde voorwaarde bij deze categorie — als opvallende callout getoond. */
  requires?: string;
};

// ------------------------------------------------------------
// Intake — doelen & startpunt
// ------------------------------------------------------------

export type Goal = {
  id: string;
  label: string;
  emoji: string;
  targets: IconKey[]; // categorieën die bij dit doel horen (in volgorde)
};

export const GOALS: Goal[] = [
  { id: "brand", label: "Sterk merk / identiteit", emoji: "✦", targets: ["branding", "print"] },
  { id: "website", label: "Nieuwe website", emoji: "◈", targets: ["websites", "hosting", "support", "seo"] },
  { id: "shop", label: "Webshop starten", emoji: "◑", targets: ["webshop", "tracking", "hosting", "support"] },
  { id: "leads", label: "Meer leads & funnels", emoji: "⟿", targets: ["funnels", "paid", "tracking"] },
  { id: "findable", label: "Beter vindbaar (SEO/AEO)", emoji: "◎", targets: ["seo", "tracking"] },
  { id: "ads", label: "Betaald adverteren", emoji: "◉", targets: ["paid", "tracking"] },
  { id: "integrations", label: "Integraties met externe software", emoji: "⧉", targets: ["crm", "funnels"] },
  { id: "crmsetup", label: "CRM inrichten", emoji: "▦", targets: ["crm"] },
  { id: "portal", label: "Web-app / portaal", emoji: "▤", targets: ["webapps", "hosting", "support", "crm"] },
  { id: "app", label: "Mobiele app", emoji: "▢", targets: ["apps", "webapps"] },
  { id: "content", label: "Meer content", emoji: "❋", targets: ["organic", "seo"] },
  { id: "video", label: "Video & animatie", emoji: "▷", targets: ["video", "organic", "paid"] },
  { id: "ai", label: "Inzetten van AI", emoji: "✳", targets: ["ai", "organic", "seo"] },
  { id: "advice", label: "Hulp / advies", emoji: "❉", targets: [] },
  { id: "run", label: "Onderhoud & hosting", emoji: "◍", targets: ["hosting", "support"] },
];

export type Stage = {
  id: string;
  label: string;
  desc: string;
  boost: IconKey[]; // extra categorieën die bij dit startpunt logisch zijn
};

export const STAGES: Stage[] = [
  { id: "startup", label: "Nieuw / startup", desc: "We beginnen bij nul.", boost: ["branding", "websites"] },
  { id: "existing", label: "Bestaand bedrijf", desc: "We bouwen voort op wat er is.", boost: [] },
  { id: "rebrand", label: "Rebranding", desc: "Tijd voor een frisse identiteit.", boost: ["branding", "websites"] },
  { id: "migrate", label: "Platform-migratie", desc: "Overstappen zonder ranking-verlies.", boost: ["websites", "seo", "hosting"] },
  { id: "scale", label: "Opschalen", desc: "Meer bereik, meer omzet.", boost: ["paid", "funnels", "tracking"] },
];

// ------------------------------------------------------------
// Kop-teksten per categorie: pakkende (feitelijke) titel + prikkelende
// subtitel. De paragraaf zelf komt uit `blurb`.
// ------------------------------------------------------------
export const HEADINGS: Record<IconKey, { title: string; subtitle: string }> = {
  branding: { title: "Bouw een merk dat blijft plakken", subtitle: "Van eerste indruk tot een complete identiteit." },
  print: { title: "Tastbaar en helemaal on-brand", subtitle: "Drukwerk dat je merk laat vóélen." },
  websites: { title: "Een website die werkt én verkoopt", subtitle: "Next-level design is altijd inbegrepen." },
  webshop: { title: "Verkoop online, zonder gedoe", subtitle: "Conversiegerichte shops die met je meegroeien." },
  webapps: { title: "Jouw eigen platform op maat", subtitle: "Portalen en tools, volledig branded." },
  apps: { title: "Van idee naar app in de store", subtitle: "iOS & Android, doordacht ontworpen." },
  video: { title: "Bewegend beeld dat blijft hangen", subtitle: "Van bedrijfsfilm tot 3D-animatie en ad-creatives." },
  organic: { title: "Content die blijft hangen", subtitle: "Consistent zichtbaar — elke week weer." },
  paid: { title: "Adverteren dat écht rendeert", subtitle: "Per kanaal ingericht, met eigen creatives en funnels." },
  seo: { title: "Gevonden worden — door mens én AI", subtitle: "Organisch groeien en citeerbaar worden." },
  tracking: { title: "Meten, monitoren en écht begrijpen", subtitle: "Search Console, GA4 en Tag Manager — en daarna elke maand inzicht." },
  funnels: { title: "Verander bezoekers in leads", subtitle: "Slimme flows die voor je verkopen." },
  crm: { title: "Alles verbonden, niks meer handmatig", subtitle: "CRM en integraties, op maat ingericht." },
  ai: { title: "AI die écht werk uit handen neemt", subtitle: "Van advies en workshops tot je eigen kennisomgeving." },
  hosting: { title: "Een rotsvast fundament", subtitle: "Hosting, domein en DNS — volledig geregeld." },
  support: { title: "M7 Webplans — altijd onderhouden", subtitle: "Vaste ondersteuning en ontwikkeluren die met je meegroeien." },
};

// ------------------------------------------------------------
// CATALOG — volgorde = natuurlijke journey (identity → build → grow → run)
// ------------------------------------------------------------

export const CATALOG: Category[] = [
  // ========================================================== BRANDING
  {
    id: "branding",
    label: "Branding",
    kicker: "Identiteit & strategie",
    blurb:
      "Van nieuwe startup-brand tot rebranding of co-branding. Een compleet brandbook: naming, positionering, kleur, typografie, iconografie, tone of voice, archetype, patterns en communication guide.",
    note: "Indicatieve vanafprijzen — scope en aantal iteraties bepalen de definitieve offerte.",
    tools: ["figma", "adobe"],
    packages: [
      {
        id: "brand-essentials",
        name: "Brand Essentials",
        tagline: "Een solide basis om mee te starten.",
        kind: "plan",
        price: { setup: 1500 },
        features: ["Logo + varianten", "Kleurenpalet & typografie", "Basis-richtlijnen", "Logo export-package"],
        recommends: ["print", "websites"],
      },
      {
        id: "brand-startup",
        name: "Startup Brand",
        tagline: "Volledig nieuwe merkidentiteit.",
        kind: "plan",
        price: { setup: 3500 },
        highlight: true,
        badge: "Populair",
        features: [
          "Naming & positionering",
          "Logo & visuele identiteit",
          "Kleur, typografie & iconografie",
          "Tone of voice & merk-archetype",
          "Brand patterns & assets",
          "Brandbook + communication guide",
        ],
        recommends: ["print", "websites", "organic"],
      },
      {
        id: "brand-rebrand",
        name: "Rebranding / Co-branding",
        tagline: "Bestaande brand naar next level.",
        kind: "plan",
        price: { setup: 4500 },
        features: [
          "Merk-audit & strategie",
          "Herpositionering",
          "Vernieuwde identiteit",
          "Co-branding mogelijk",
          "Migratiegids voor je team",
          "Volledig brandbook",
        ],
        recommends: ["print", "websites"],
      },
      {
        id: "brand-book-plus",
        name: "Brandbook+",
        tagline: "Strategische verdieping.",
        kind: "addon",
        price: { setup: 950, from: true },
        features: ["Strategische positionering", "Tone of voice", "Merk-archetype", "Mock-ups van uitingen"],
      },
      {
        id: "brand-mockups",
        name: "3D mock-ups",
        tagline: "Gelikte 3D-weergaves.",
        kind: "item",
        price: { setup: 475 },
        features: ["Devices, print & merch", "Fotorealistische render", "Voor presentatie & social"],
      },
      {
        id: "brand-illustration",
        name: "Maatwerk illustraties",
        tagline: "Vector-illustraties op maat.",
        kind: "item",
        price: { setup: 675, suffix: "set" },
        features: ["5 custom vector-illustraties", "Schematische visuals", "Voor web & app"],
      },
      {
        id: "brand-logo-export",
        name: "Logo export-package",
        tagline: "Alle formats, klaar voor gebruik.",
        kind: "addon",
        price: { setup: 275 },
        features: ["SVG / PNG / EPS / PDF", "Kleur, mono & inverse", "Favicon & app-icon"],
      },
      {
        id: "brand-email-sig",
        name: "E-mailhandtekening",
        tagline: "Professioneel tot in de mail.",
        kind: "addon",
        price: { setup: 275 },
        features: ["Aansprekend ontwerp", "HTML-implementatie", "Per teamlid uitrolbaar"],
      },
    ],
  },

  // ========================================================== PRINT
  {
    id: "print",
    label: "Print",
    kicker: "Drukwerk & materiaal",
    blurb:
      "Tastbaar en op-merk: visitekaartjes, flyers, informatiebrochures, uitnodigingen en alles voor je beursstand of buitenlocatie — vlaggen, roll-up banners, spandoeken en gevelreclame, volledig in je brand identity.",
    note: "Prijzen zijn voor ontwerp; drukwerk (productie) rekenen we op basis van oplage na.",
    tools: ["adobe", "figma"],
    packages: [
      {
        id: "print-cards",
        name: "Visitekaartjes",
        tagline: "Eerste indruk in je hand.",
        kind: "item",
        price: { setup: 275 },
        features: ["Ontwerp in je huisstijl", "Dubbelzijdig", "Drukklaar aangeleverd"],
        recommends: ["branding"],
      },
      {
        id: "print-flyer",
        name: "Flyer-ontwerp",
        tagline: "Compacte boodschap, groot effect.",
        kind: "item",
        price: { setup: 275 },
        features: ["Enkel- of dubbelzijdig", "Op-merk vormgeving", "Drukklaar bestand"],
        recommends: ["branding"],
      },
      {
        id: "print-brochure",
        name: "Informatiebrochure",
        tagline: "Je verhaal in stijl.",
        kind: "item",
        price: { setup: 950 },
        features: ["16–20 pagina's", "Diensten, historie & werkproces", "Print-ready opmaak"],
        recommends: ["branding"],
      },
      {
        id: "print-promo",
        name: "Promotioneel materiaal",
        tagline: "Posters & merch.",
        kind: "item",
        price: { setup: 350 },
        features: ["Posters en promotiedrukwerk", "Merchandise-ontwerp", "Consistente merkstijl"],
      },
      {
        id: "print-rollup",
        name: "Roll-up banner",
        tagline: "Je merk staat in één beweging.",
        kind: "item",
        price: { setup: 275 },
        features: ["Ontwerp op 85×200 of 100×200 cm", "Leesbaar vanaf afstand", "Drukklaar met bleed & marges"],
        recommends: ["branding"],
      },
      {
        id: "print-flag",
        name: "Vlaggen & beachflags",
        tagline: "Zichtbaar van ver.",
        kind: "item",
        price: { setup: 295 },
        features: ["Beachflag, mastvlag of gevelvlag", "Ontwerp per vlagvorm aangepast", "Dubbelzijdig mogelijk"],
        recommends: ["branding"],
      },
      {
        id: "print-banner",
        name: "Spandoeken & banners",
        tagline: "Groot formaat, scherp resultaat.",
        kind: "item",
        price: { setup: 325 },
        features: ["Spandoek, bouwhek- of gevelbanner", "Ontwerp op ware grootte", "Zeil-, mesh- of vinylspecificatie"],
        recommends: ["branding"],
      },
      {
        id: "print-standbuild",
        name: "Beursstand & signing",
        tagline: "Een stand die klopt met je merk.",
        kind: "item",
        price: { setup: 950, from: true },
        features: ["Standwanden, balies & displays", "Bewegwijzering en signing", "Aanleverspecificaties per standbouwer"],
        recommends: ["branding"],
      },
      {
        id: "print-vehicle",
        name: "Autobelettering",
        tagline: "Rijdende reclame.",
        kind: "item",
        price: { setup: 450, from: true },
        features: ["Ontwerp op voertuigsjabloon", "Van subtiele signing tot full wrap", "Snijklaar aangeleverd"],
        recommends: ["branding"],
      },
      {
        id: "print-invite",
        name: "Uitnodigingen",
        tagline: "Voor events & lanceringen.",
        kind: "item",
        price: { setup: 250 },
        features: ["Digitaal of print", "Op-merk ontwerp", "Optioneel met RSVP-flow"],
      },
    ],
  },

  // ========================================================== WEBSITES
  {
    id: "websites",
    label: "Websites",
    kicker: "WordPress, Webflow & custom CMS",
    blurb:
      "Next-level design is altijd inbegrepen. Wij werken met WordPress, Webflow én volledig custom CMS — met content-model, custom velden zodat je zelf beheert, basis-SEO, accessibility en een eerste content-draft.",
    note: "Indicatieve vanafprijzen — de scope (pagina's, interacties, content) bepaalt de definitieve offerte.",
    tools: ["webflow", "wordpress", "figma", "lottie", "weglot", "pagespeedinsights"],
    crossSell: ["trk-foundation", "trk-server", "fun-config", "fun-quote"],
    options: [
      {
        id: "web-platform",
        label: "Platform",
        choices: ["WordPress", "Webflow", "Custom CMS", "Weet ik nog niet"],
      },
      {
        id: "web-scope",
        label: "Scope",
        choices: ["Styleframing", "Design", "Design + development"],
        triggers: { Styleframing: "branding" },
      },
    ],
    packages: [
      {
        id: "web-essential",
        name: "Website Essential",
        tagline: "Compacte site, groot effect.",
        kind: "plan",
        price: { setup: 3500, from: true },
        features: [
          "Tot 5 pagina's",
          "Next-level design inbegrepen",
          "CMS met custom velden",
          "Basis-SEO & accessibility",
          "Eerste content-draft",
          "Responsive & razendsnel",
        ],
        recommends: ["hosting", "support", "seo", "branding"],
      },
      {
        id: "web-pro",
        name: "Website Pro",
        tagline: "Volwaardige site met content-model.",
        kind: "plan",
        price: { setup: 6500, from: true },
        highlight: true,
        badge: "Populair",
        features: [
          "Tot 12 pagina's",
          "Content-model & strategie",
          "Sitemap & URL-schema",
          "Scroll / hover / load-interacties",
          "Animated fullscreen menu",
          "CMS-training & go-live support",
        ],
        recommends: ["hosting", "support", "seo", "tracking", "funnels"],
      },
      {
        id: "web-premium",
        name: "Website Premium",
        tagline: "Maatwerk met alles erop.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Onbeperkt schaalbaar",
          "Sector- / doelgroeppagina's (dynamisch)",
          "Lottie & scroll-animaties",
          "AI-infographics & hero-video",
          "Dynamische landingsblokken",
          "Styleframing-fase inbegrepen",
        ],
        recommends: ["hosting", "support", "seo", "tracking", "funnels", "crm"],
      },
      {
        id: "web-styleframing",
        name: "Styleframing-fase (Figma)",
        tagline: "Vergelijk stijlen vóór de build.",
        kind: "addon",
        price: { setup: 950 },
        features: ["Meerdere richtingen in Figma", "Snel schakelen op stijl", "Zekerheid vóór development"],
      },
      {
        id: "web-content",
        name: "Content op alle pagina's",
        tagline: "Wij schrijven de eerste versie.",
        kind: "addon",
        price: { setup: 1250, from: true },
        features: ["Volledige eerste content-draft", "SEO-bewust geschreven", "Klaar ter review"],
        recommends: ["seo"],
      },
      {
        id: "web-animations",
        name: "Next-level animaties & interacties",
        tagline: "Scroll, load, hover & Lottie.",
        kind: "addon",
        price: { setup: 1500 },
        features: ["Scroll/load/hover-interacties", "Lottie-animaties on scroll", "Animated fullscreen menu"],
      },
      {
        id: "web-media",
        name: "Custom infographics & AI-beeld",
        tagline: "Statisch beeld tot hero-video.",
        kind: "addon",
        price: { setup: 950 },
        features: ["Custom infographics", "AI-gegenereerde afbeeldingen", "Hero-video / bewegend beeld"],
        recommends: ["organic"],
      },
      {
        id: "web-landingblocks",
        name: "Dynamische landingsblokken",
        tagline: "Klant bouwt zelf landingspagina's.",
        kind: "addon",
        price: { setup: 850 },
        features: ["Herbruikbare content-blokken", "Zelf pagina's samenstellen", "Consistente styling"],
      },
      {
        id: "web-popups",
        name: "Dynamische pop-ups",
        tagline: "Engagement met een knipoog.",
        kind: "addon",
        price: { setup: 450, from: true },
        features: ["Klant bepaalt inhoud & zichtbaarheid", "Per pagina instelbaar", "Optioneel confetti / animatie"],
        recommends: ["funnels"],
      },
      {
        id: "web-contentmodel",
        name: "Content-model & strategie",
        tagline: "Sitemap → CMS → URL-schema.",
        kind: "addon",
        price: { setup: 795 },
        features: ["Sitemap & informatie-architectuur", "Dynamische content bepalen", "Sector-/doelgroeppagina's"],
        recommends: ["seo"],
      },
      {
        id: "web-migration",
        name: "Migratie & 301-redirects",
        tagline: "Overstappen zonder ranking-verlies.",
        kind: "addon",
        price: { setup: 750 },
        features: ["Analyse bij platform-wissel", "Volledig 301-redirectplan", "Behoud van indexatie"],
        recommends: ["seo", "hosting"],
      },
      {
        id: "web-golive",
        name: "Go-live support & CMS-training",
        tagline: "Zelf verder kunnen na livegang.",
        kind: "addon",
        price: { setup: 450 },
        features: ["Persoonlijke CMS-training", "Go-live begeleiding", "Staging-omgeving indien gewenst"],
        recommends: ["support"],
      },
      {
        id: "web-preloader",
        name: "Custom pre-loader",
        tagline: "De eerste seconde is al merkbeleving.",
        kind: "addon",
        price: { setup: 650 },
        features: [
          "Geanimeerde intro met je logo of merkvorm",
          "Naadloze overgang naar de eerste sectie",
          "Eén keer tonen per sessie (geen irritatie)",
          "Lichtgewicht: SVG, CSS of Lottie",
        ],
        recommends: ["branding"],
      },
      {
        id: "web-multisite",
        name: "Multi-site & afdeling-switcher",
        tagline: "Meerdere labels, één fundament.",
        kind: "addon",
        price: { setup: 1895, from: true },
        features: [
          "Meerdere sites of afdelingen op één basis",
          "Switcher om te wisselen tussen afdeling of vestiging",
          "Gedeelde componenten, eigen kleur en content",
          "Centraal beheer, losse publicatierechten",
        ],
        recommends: ["hosting", "support"],
      },
      {
        id: "web-multilang",
        name: "Meertaligheid via Weglot",
        tagline: "Eén site, meerdere talen.",
        kind: "addon",
        price: { setup: 275 },
        badge: "Weglot",
        features: [
          "Weglot ingesteld en gekoppeld aan je site",
          "Taalwissel met nette URL-structuur",
          "hreflang correct ingericht",
          "Vertalingen te redigeren in het Weglot-dashboard",
          "Doorlopende licentiekosten niet inbegrepen",
        ],
        recommends: ["seo"],
      },
      {
        id: "web-motion",
        name: "Scroll- & Lottie-animaties",
        tagline: "Beweging die het verhaal draagt.",
        kind: "addon",
        price: { setup: 1250, from: true },
        features: [
          "Scroll-gestuurde secties en parallax",
          "Lottie-animaties uit After Effects",
          "Hover- en cursor-interacties",
          "Netjes uitgezet bij reduced motion",
        ],
        recommends: ["video", "branding"],
      },
      {
        id: "web-portal-login",
        name: "Besloten omgeving",
        tagline: "Content achter een login.",
        kind: "addon",
        price: { setup: 1850, from: true },
        features: [
          "Accounts en rollen (Memberstack of eigen CMS)",
          "Afgeschermde pagina's en downloads",
          "Wachtwoord-reset en uitnodigingsflow",
          "Basis voor een klant- of dealerportaal",
        ],
        recommends: ["webapps", "crm"],
      },
      {
        id: "web-jobs",
        name: "Vacature- & werkenbij-module",
        tagline: "Zelf vacatures plaatsen.",
        kind: "addon",
        price: { setup: 950 },
        features: [
          "Vacatures als CMS-collectie",
          "Filters op afdeling, locatie en uren",
          "Sollicitatieformulier met bijlage",
          "JobPosting-schema voor Google for Jobs",
        ],
        recommends: ["seo", "crm"],
      },
      {
        id: "web-locations",
        name: "Vestigingen & storelocator",
        tagline: "Vind de dichtstbijzijnde locatie.",
        kind: "addon",
        price: { setup: 1250, from: true },
        features: [
          "Locaties als CMS-collectie",
          "Kaart met zoeken op postcode",
          "Openingstijden en routelink",
          "LocalBusiness-schema per vestiging",
        ],
        recommends: ["seo"],
      },
      {
        id: "web-accessibility",
        name: "Toegankelijkheid (WCAG)",
        tagline: "Bruikbaar voor iedereen.",
        kind: "addon",
        price: { setup: 1450, from: true },
        features: [
          "Audit op WCAG 2.2 AA",
          "Contrast, focus-states en toetsenbordnavigatie",
          "Correcte semantiek en ARIA-labels",
          "Rapport met bevindingen en fixes",
        ],
      },
      {
        id: "web-speed",
        name: "Performance-optimalisatie",
        tagline: "Sneller laden, beter scoren.",
        kind: "addon",
        price: { setup: 850 },
        badge: "PageSpeed Insights",
        features: [
          "Core Web Vitals gemeten in Google PageSpeed Insights",
          "Beeld- en fontoptimalisatie",
          "Script- en renderblokkades opgeruimd",
          "Voor- en nameting meegeleverd",
        ],
        recommends: ["seo", "hosting"],
      },
      {
        id: "web-designsystem",
        name: "Design system & componenten",
        tagline: "Elke nieuwe pagina in een uur.",
        kind: "addon",
        price: { setup: 1950, from: true },
        features: [
          "Herbruikbare componentenbibliotheek",
          "Design tokens gekoppeld aan je huisstijl",
          "Documentatie voor je eigen team",
          "Consistente uitstraling bij groei",
        ],
        recommends: ["branding"],
      },
    ],
  },

  // ========================================================== WEBSHOP
  {
    id: "webshop",
    label: "Webshops",
    kicker: "WooCommerce & Shopify",
    blurb:
      "Conversiegerichte shops op WooCommerce of Shopify. Van productstructuur, PIM en configurators tot custom checkouts, upsells, B2B-portalen en koppelingen met je betaalprovider, boekhouding en verzendpartner.",
    note: "Indicatieve vanafprijzen — aantal producten, koppelingen en maatwerk bepalen de definitieve offerte.",
    tools: ["woocommerce", "shopify", "stripe", "wordpress", "make", "googleanalytics"],
    options: [
      {
        id: "shop-platform",
        label: "Platform",
        choices: ["WooCommerce", "Shopify"],
      },
      {
        id: "shop-payments-choice",
        label: "Betaalmethodes",
        multi: true,
        choices: ["Mollie", "Stripe", "Adyen", "PayPal", "Klarna / in3", "Op rekening (B2B)"],
      },
      {
        id: "shop-fulfilment",
        label: "Fulfilment",
        choices: ["Zelf verzenden", "Sendcloud / MyParcel", "Externe fulfilment (3PL)", "Dropshipping", "Digitale producten"],
      },
      {
        id: "shop-audience",
        label: "Verkoop je aan",
        choices: ["Consumenten (B2C)", "Zakelijk (B2B)", "Beide"],
      },
    ],
    packages: [
      {
        id: "shop-start",
        name: "Shop Starter",
        tagline: "Snel en conversiegericht live.",
        kind: "plan",
        price: { setup: 4500 },
        features: [
          "Tot 50 producten",
          "Conversiegerichte productpagina's",
          "Slimme categoriestructuur",
          "Betaalmethodes & verzending",
          "Basis-SEO",
        ],
        recommends: ["tracking", "seo", "hosting", "support"],
      },
      {
        id: "shop-pro",
        name: "Shop Pro",
        tagline: "Alles technisch op orde.",
        kind: "plan",
        price: { setup: 8500 },
        highlight: true,
        badge: "Populair",
        features: [
          "Onbeperkt producten",
          "EU-VAT-controle",
          "Geavanceerde custom checkout",
          "Kortingscodes & campagnes",
          "Custom PDF-facturen",
          "Vendor-based pricing",
        ],
        recommends: ["tracking", "seo", "funnels", "hosting", "support"],
      },
      {
        id: "shop-scale",
        name: "Shop Scale",
        tagline: "Marktplaats & internationaal.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Multi-vendor / marktplaats",
          "Headless / performance-build",
          "ERP- / PIM-integraties",
          "Multi-currency & internationaal",
        ],
        recommends: ["tracking", "crm", "hosting", "support"],
      },

      // ---------------------------------------- add-ons: catalogus & structuur
      {
        id: "shop-productstructuur",
        name: "Productstructuur & categorieën",
        tagline: "Eerst ordenen, dan verkopen.",
        kind: "addon",
        price: { setup: 950, from: true },
        features: [
          "Categorie- & filterboom uitgewerkt",
          "Varianten, opties en attributen bepaald",
          "URL- & breadcrumb-structuur",
          "Import-sjabloon voor je productdata",
        ],
        recommends: ["seo"],
      },
      {
        id: "shop-pim",
        name: "PIM & productdata-hub",
        tagline: "Één bron voor al je productinfo.",
        kind: "addon",
        price: { setup: 2400, from: true },
        features: [
          "Centrale productdatabase (PIM of Airtable)",
          "Automatische sync naar de shop",
          "Bulk-verrijking & vertalingen",
          "Leveranciersfeeds inlezen",
        ],
        recommends: ["webapps", "tracking"],
      },
      {
        id: "shop-configurator",
        name: "Product-configurator",
        tagline: "Klant stelt zelf samen.",
        kind: "addon",
        price: { setup: 3200, from: true },
        features: [
          "Stap-voor-stap samenstellen",
          "Live prijsberekening",
          "Visuele preview van de keuze",
          "Configuratie mee in de order",
        ],
        recommends: ["webapps", "funnels"],
      },
      {
        id: "shop-b2b",
        name: "B2B-portaal & staffelprijzen",
        tagline: "Zakelijke klanten, eigen prijzen.",
        kind: "addon",
        price: { setup: 3800, from: true },
        features: [
          "Klantgroepen & prijsafspraken",
          "Staffel- en volumekortingen",
          "Bestellen op rekening & PO-nummer",
          "Snelbestellijst en herhaalorders",
        ],
        recommends: ["crm", "webapps"],
      },
      {
        id: "shop-vendor",
        name: "Vendor- & dealerportaal",
        tagline: "Meerdere partijen, één shop.",
        kind: "addon",
        price: { setup: 4200, from: true },
        features: [
          "Eigen omgeving per vendor of dealer",
          "Zelf producten en voorraad beheren",
          "Commissie- en uitbetalingsoverzicht",
          "Ordersplitsing per leverancier",
        ],
        recommends: ["webapps", "crm"],
      },

      // ---------------------------------------- add-ons: checkout & conversie
      {
        id: "shop-checkout",
        name: "Custom checkout",
        tagline: "Minder stappen, meer orders.",
        kind: "addon",
        price: { setup: 1950, from: true },
        features: [
          "One-page of stapsgewijze checkout",
          "Adres-autocomplete & validatie",
          "Bezorg- en afhaalopties in beeld",
          "Order-bump vlak voor het betalen",
        ],
        recommends: ["tracking", "funnels"],
      },
      {
        id: "shop-upsell",
        name: "Upsells & cross-sells",
        tagline: "Meer waarde per winkelwagen.",
        kind: "addon",
        price: { setup: 850 },
        features: [
          "\"Vaak samen gekocht\"-blokken",
          "Upgrade-suggesties op productpagina",
          "Cross-sells in winkelwagen & checkout",
          "Post-purchase aanbod op de bedankpagina",
        ],
        recommends: ["funnels"],
      },
      {
        id: "shop-bundles",
        name: "Bundels & volumekorting",
        tagline: "Slim combineren loont.",
        kind: "addon",
        price: { setup: 750 },
        features: [
          "Vaste en samen te stellen bundels",
          "Staffelkorting per aantal",
          "Bundelprijs zichtbaar op de pagina",
          "Voorraad per bundelonderdeel",
        ],
      },
      {
        id: "shop-promo",
        name: "Kortings- & actie-engine",
        tagline: "Acties draaien zonder ontwikkelaar.",
        kind: "addon",
        price: { setup: 900 },
        features: [
          "Kortingscodes & automatische acties",
          "Acties per periode, groep of product",
          "Actiebanners en aftelklok",
          "Zelf te beheren vanuit het CMS",
        ],
        recommends: ["paid", "organic"],
      },
      {
        id: "shop-popups",
        name: "Upsell pop-ups & exit-intent",
        tagline: "Vang de twijfelaar op.",
        kind: "addon",
        price: { setup: 650 },
        features: [
          "Exit-intent aanbod of kortingscode",
          "Winkelwagen-drempel (\"nog €X gratis verzending\")",
          "Regels per pagina en per bezoeker",
          "A/B-varianten meetbaar gemaakt",
        ],
        recommends: ["funnels", "tracking"],
      },
      {
        id: "shop-notifications",
        name: "Winkelmeldingen & voorraadalerts",
        tagline: "Urgentie die klopt.",
        kind: "addon",
        price: { setup: 550 },
        features: [
          "Voorraad- en levertijdmeldingen",
          "\"Laat me weten\"-melding bij uitverkocht",
          "Verzendbalk & bezorgbelofte",
          "Site-brede aankondigingsbalk",
        ],
      },
      {
        id: "shop-search",
        name: "Slimme zoek & filters",
        tagline: "Sneller bij het juiste product.",
        kind: "addon",
        price: { setup: 1450, from: true },
        features: [
          "Zoeken met suggesties en typefouten-tolerantie",
          "Facetfilters op eigenschappen",
          "Synoniemen & merchandising-regels",
          "Zoekrapport: waar mensen op zoeken",
        ],
        recommends: ["seo", "tracking"],
      },
      {
        id: "shop-reviews",
        name: "Reviews & UGC op productpagina's",
        tagline: "Bewijs waar het telt.",
        kind: "addon",
        price: { setup: 650 },
        features: [
          "Reviewplatform gekoppeld (Kiyoh, Trustpilot, Google)",
          "Sterren in de zoekresultaten (rich snippets)",
          "Foto's en video's van klanten",
          "Automatische reviewuitnodiging na levering",
        ],
        recommends: ["seo", "organic"],
      },
      {
        id: "shop-loyalty",
        name: "Loyalty & spaarprogramma",
        tagline: "Van eenmalig naar vaste klant.",
        kind: "addon",
        price: { setup: 1650, from: true },
        features: [
          "Punten sparen en inwisselen",
          "Klantniveaus met eigen voordelen",
          "Referral: klanten werven klanten",
          "Saldo zichtbaar in het account",
        ],
        recommends: ["crm"],
      },
      {
        id: "shop-subscriptions",
        name: "Abonnementen & herhaalaankopen",
        tagline: "Voorspelbare omzet.",
        kind: "addon",
        price: { setup: 1850, from: true },
        features: [
          "Abonnementsproducten & bezorgfrequentie",
          "Automatische incasso of herhaalbetaling",
          "Zelf pauzeren, wijzigen of opzeggen",
          "Herinnerings- en mislukte-betalingsflow",
        ],
        recommends: ["crm", "tracking"],
      },
      {
        id: "shop-wishlist",
        name: "Verlanglijst & bewaarde winkelwagens",
        tagline: "Terugkomen wordt makkelijk.",
        kind: "addon",
        price: { setup: 550 },
        features: [
          "Verlanglijst per account",
          "Winkelwagen bewaren en delen",
          "Herinnering bij prijsdaling",
          "Basis voor je verlaten-winkelwagenflow",
        ],
        recommends: ["crm"],
      },

      // ---------------------------------------- losse werkzaamheden & koppelingen
      {
        id: "shop-payments",
        name: "Betaalprovider koppelen",
        tagline: "Mollie, Stripe of Adyen live.",
        kind: "item",
        price: { setup: 450 },
        features: [
          "Account, API-keys & webhooks ingericht",
          "Betaalmethodes per land aangezet",
          "Test- en live-transacties gecontroleerd",
          "Terugbetalingen vanuit de shop",
        ],
      },
      {
        id: "shop-analytics",
        name: "Shop-analytics & e-commerce tracking",
        tagline: "Zien wat er écht verkoopt.",
        kind: "item",
        price: { setup: 750 },
        features: [
          "GA4 e-commerce events volledig ingericht",
          "Winkelwagen-, checkout- en aankooptrechter",
          "Omzet per kanaal, campagne en product",
          "Consent Mode & serverside-klaar",
        ],
        recommends: ["tracking", "paid"],
      },
      {
        id: "shop-feeds",
        name: "Productfeeds & shopping-kanalen",
        tagline: "Je assortiment naar de advertenties.",
        kind: "item",
        price: { setup: 595 },
        features: [
          "Feed voor Google Shopping & Meta",
          "Feedregels, categorie-mapping en filters",
          "Voorraad- en prijssync",
          "Foutmeldingen in Merchant Center opgelost",
        ],
        recommends: ["paid"],
      },
      {
        id: "shop-billing",
        name: "Facturatie & boekhoudkoppeling",
        tagline: "Orders automatisch in de boekhouding.",
        kind: "item",
        price: { setup: 850, from: true },
        features: [
          "Koppeling met Moneybird, Exact of e-Boekhouden",
          "Automatische facturen & creditnota's",
          "Betaalstatus terug in de shop",
          "Custom PDF-factuur in je huisstijl",
        ],
        recommends: ["crm"],
      },
      {
        id: "shop-erp",
        name: "ERP- & voorraadkoppeling",
        tagline: "Eén waarheid over voorraad.",
        kind: "item",
        price: { setup: 1450, from: true },
        features: [
          "Producten, prijzen en voorraad synchroon",
          "Orders automatisch naar je ERP",
          "Foutafhandeling & logging",
          "Realtime of periodieke sync",
        ],
        recommends: ["webapps"],
      },
      {
        id: "shop-shipping",
        name: "Verzend- & bezorglogica",
        tagline: "Van winkelwagen tot voordeur.",
        kind: "item",
        price: { setup: 650 },
        features: [
          "Sendcloud / MyParcel / DHL / PostNL gekoppeld",
          "Verzendregels per gewicht, zone en waarde",
          "Afhaalpunten & bezorgmomenten",
          "Track & trace-mails automatisch",
        ],
      },
      {
        id: "shop-tax",
        name: "BTW-, OSS- & prijsregels",
        tagline: "Fiscaal kloppend verkopen in de EU.",
        kind: "item",
        price: { setup: 550 },
        features: [
          "BTW-tarieven per land en productgroep",
          "OSS-drempels & EU-verkoop ingericht",
          "BTW-nummer-validatie (VIES) voor B2B",
          "In- en exclusief prijzen per klantgroep",
        ],
      },
      {
        id: "shop-mail",
        name: "Transactionele mails & flows",
        tagline: "Elke mail on-brand en op tijd.",
        kind: "item",
        price: { setup: 695 },
        features: [
          "Order-, verzend- en retourmails in huisstijl",
          "Verlaten-winkelwagenflow",
          "Review- en herhaalaankoopmails",
          "Koppeling met Klaviyo, Mailchimp of ActiveCampaign",
        ],
        recommends: ["crm", "organic"],
      },
      {
        id: "shop-compliance",
        name: "Consent, cookies & shopjuridica",
        tagline: "Netjes geregeld voor je live gaat.",
        kind: "item",
        price: { setup: 450 },
        features: [
          "Consent-banner gekoppeld aan tracking",
          "Algemene voorwaarden, retour- & privacypagina",
          "Betaal- en keurmerklogo's netjes geplaatst",
          "Toegankelijkheidscheck op de kernflow",
        ],
        recommends: ["tracking"],
      },
    ],
  },

  // ========================================================== WEB-APPS
  {
    id: "webapps",
    label: "Web-apps & portalen",
    kicker: "Custom branded platforms",
    blurb:
      "Klantportalen, offerte- en orderportalen, reserveringssystemen, kennisbanken, dealerportalen en volwaardige marktplaatsen — volledig custom branded. Met rollen & rechten, gated content, Stripe-checkouts en automations via Make, WhatsApp en e-mail.",
    note: "Automations, meldingen en integraties naar wens — grotendeels maatwerk.",
    tools: ["stripe", "make", "airtable", "memberstack", "wized", "zapier"],
    crossSell: ["trk-foundation", "host-premium"],
    options: [
      {
        id: "wapp-users",
        label: "Wie gebruikt het portaal",
        multi: true,
        choices: ["Klanten", "Medewerkers", "Dealers / leveranciers", "Leden / community", "Externe partners"],
      },
      {
        id: "wapp-auth",
        label: "Inloggen via",
        choices: ["E-mail & wachtwoord", "Microsoft / Google (SSO)", "Magic link", "Weet ik nog niet"],
      },
    ],
    packages: [
      {
        id: "wapp-portal",
        name: "Klantportaal",
        tagline: "Eigen omgeving voor je klanten.",
        kind: "plan",
        price: { setup: 3750, from: true },
        highlight: true,
        badge: "Populair",
        features: [
          "Custom branded portaal",
          "Rollen- & rechtenbeheer",
          "Content-gating (lagen)",
          "Documenten, dossiers & statussen",
          "E-mail / WhatsApp-meldingen",
        ],
        recommends: ["hosting", "support", "crm"],
      },
      {
        id: "wapp-quote",
        name: "Offerte- / orderportaal",
        tagline: "Van aanvraag tot getekende order.",
        kind: "plan",
        price: { setup: 6500, from: true },
        features: [
          "Offerteaanvraag met voorwaardelijke logica",
          "Automatische offerte-PDF & digitale akkoordknop",
          "Orderstatus live te volgen",
          "Herhaalorders en bestelhistorie",
          "Doorzet naar CRM en boekhouding",
        ],
        recommends: ["crm", "funnels", "tracking"],
      },
      {
        id: "wapp-booking",
        name: "Afspraken- / reserveringsportaal",
        tagline: "Agenda's, plekken en tijdsloten.",
        kind: "plan",
        price: { setup: 5900, from: true },
        features: [
          "Beschikbaarheid en tijdsloten in eigen beheer",
          "Boeken met (aan)betaling via Stripe",
          "Herinneringen per e-mail en WhatsApp",
          "Annuleren en verzetten zonder telefoontje",
          "Koppeling met Google / Outlook-agenda",
        ],
        recommends: ["crm", "tracking"],
      },
      {
        id: "wapp-docs",
        name: "Docs- / bedrijfshandboek-portaal",
        tagline: "Alle kennis op één plek.",
        kind: "plan",
        price: { setup: 4500, from: true },
        features: [
          "Handboeken, procedures en werkinstructies",
          "Versiebeheer met wie-wat-wanneer",
          "Zoeken over alle documenten heen",
          "Leesbevestiging per medewerker",
          "Afdelingen met eigen rechten",
        ],
        recommends: ["ai", "support"],
      },
      {
        id: "wapp-configurator",
        name: "Configurator- / simulatieportaal",
        tagline: "Samenstellen, doorrekenen, aanvragen.",
        kind: "plan",
        price: { setup: 7500, from: true },
        features: [
          "Stapsgewijs samenstellen met live prijs",
          "Reken- of simulatiemodel achter de schermen",
          "Visuele preview of 2D/3D-weergave",
          "Configuratie opslaan, delen en heropenen",
          "Uitkomst als offerte of order verder",
        ],
        recommends: ["funnels", "video"],
      },
      {
        id: "wapp-dealer",
        name: "Leveranciers- / dealerportaal",
        tagline: "Je keten in één omgeving.",
        kind: "plan",
        price: { setup: 3950, from: true },
        features: [
          "Eigen omgeving per dealer of leverancier",
          "Eigen prijzen, voorraad en documenten",
          "Bestellen en aanleveren zonder mailwisseling",
          "Marketingmaterialen centraal beschikbaar",
          "Rapportage per partner",
        ],
        recommends: ["crm", "webshop"],
      },
      {
        id: "wapp-marketplace",
        name: "(B2B) marketplace",
        tagline: "Twee kanten, één platform.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Two-sided platform: aanbieders én afnemers",
          "Onboarding en verificatie van aanbieders",
          "Matching, zoeken en filteren",
          "Betalingen met commissie en uitbetalingen",
          "Reviews, disputen en beheerdersdashboard",
        ],
        recommends: ["hosting", "support", "crm"],
      },
      {
        id: "wapp-loyalty",
        name: "Loyaliteits- / CRM-portaal",
        tagline: "Punten sparen & klantbinding.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Punten- & spaarsysteem",
          "CRM-achtige functionaliteit",
          "Segmentatie & automations",
          "Volledig maatwerk",
        ],
        recommends: ["hosting", "support", "crm", "funnels"],
      },

      // ---------------------------------------- meer portaal-ideeën
      {
        id: "wapp-projects",
        name: "Projecten- & voortgangsportaal",
        tagline: "Klanten volgen hun eigen project.",
        kind: "addon",
        price: { setup: 3250, from: true },
        features: [
          "Fases, mijlpalen en planning zichtbaar",
          "Foto's en documenten per fase",
          "Vragen en meerwerk digitaal afgestemd",
          "Automatische statusupdates",
        ],
        recommends: ["crm"],
      },
      {
        id: "wapp-service",
        name: "Service- & ticketportaal",
        tagline: "Meldingen die niet verdwalen.",
        kind: "addon",
        price: { setup: 3450, from: true },
        features: [
          "Meldingen aanmaken met foto en locatie",
          "Statussen, prioriteit en doorlooptijd",
          "SLA-bewaking met notificaties",
          "Historie per klant of object",
        ],
        recommends: ["support", "crm"],
      },
      {
        id: "wapp-academy",
        name: "Academy- / e-learningportaal",
        tagline: "Trainen op je eigen platform.",
        kind: "addon",
        price: { setup: 4250, from: true },
        features: [
          "Modules, lessen en video's",
          "Voortgang en toetsen per deelnemer",
          "Certificaten automatisch uitgegeven",
          "Ook geschikt voor dealers en partners",
        ],
        recommends: ["video"],
      },
      {
        id: "wapp-assets",
        name: "Merk- & assetportaal (DAM)",
        tagline: "Je huisstijl centraal beschikbaar.",
        kind: "addon",
        price: { setup: 2950, from: true },
        features: [
          "Logo's, beeld, video en documenten",
          "Rechten en vervaldatums per asset",
          "Automatische formaten en bijsnijdingen",
          "Downloadlogboek per gebruiker",
        ],
        recommends: ["branding"],
      },
      {
        id: "wapp-member",
        name: "Leden- & communityportaal",
        tagline: "Voor verenigingen en netwerken.",
        kind: "addon",
        price: { setup: 3450, from: true },
        features: [
          "Ledenadministratie met contributie",
          "Besloten kennisbank en agenda",
          "Aanmelden voor events",
          "Ledenlijst met profielen",
        ],
        recommends: ["crm"],
      },
      {
        id: "wapp-intranet",
        name: "Intranet & medewerkersportaal",
        tagline: "Interne communicatie op orde.",
        kind: "addon",
        price: { setup: 3950, from: true },
        features: [
          "Nieuws, roosters en documenten",
          "Verlof- en verzuimaanvragen",
          "Onboarding-checklists voor nieuwe collega's",
          "Smoelenboek en afdelingspagina's",
        ],
        recommends: ["ai"],
      },
      {
        id: "wapp-data",
        name: "Data- & rapportageportaal",
        tagline: "Jouw cijfers, jouw dashboard.",
        kind: "addon",
        price: { setup: 3750, from: true },
        features: [
          "Dashboards per klant, vestiging of rol",
          "Data uit meerdere bronnen samengevoegd",
          "Export naar Excel of PDF",
          "Automatische periodieke rapportmails",
        ],
        recommends: ["tracking"],
      },
      {
        id: "wapp-intake",
        name: "Intake- & aanvraagportaal",
        tagline: "Dossiers digitaal compleet.",
        kind: "addon",
        price: { setup: 2950, from: true },
        features: [
          "Slimme formulieren met voorwaardelijke vragen",
          "Documenten veilig uploaden",
          "Tussentijds opslaan en later afmaken",
          "Beoordelingsflow met statussen",
        ],
        recommends: ["crm", "funnels"],
      },
    ],
  },

  // ========================================================== APPS
  {
    id: "apps",
    label: "Apps",
    kicker: "iOS & Android",
    blurb:
      "Alles rondom mobiele apps: UX-research en UI-design in Figma, prototyping en testing, roadmap- en sprintmanagement met kanban, prijsstrategie-advies en volledige ontwikkeling tot in de stores.",
    note: "Ontwikkeling is maatwerk — scope, roadmap en prijs bepalen we samen met jou.",
    tools: ["apple", "android", "figma"],
    packages: [
      {
        id: "mob-strategy",
        name: "App-strategie & advies",
        tagline: "Van idee naar haalbaar plan.",
        kind: "plan",
        price: { setup: 1500 },
        features: ["Concept & scope", "Technische haalbaarheid", "Prijsstrategie-advies", "Roadmap met klant"],
        recommends: ["webapps"],
      },
      {
        id: "mob-uiux",
        name: "App UI/UX-design",
        tagline: "Doordacht ontwerp dat werkt.",
        kind: "plan",
        price: { setup: 4500 },
        highlight: true,
        badge: "Populair",
        features: [
          "UX-research & user flows",
          "UI-design in Figma",
          "Interactief prototype & testing",
          "Design system",
        ],
        recommends: ["webapps"],
      },
      {
        id: "mob-build",
        name: "App-ontwikkeling",
        tagline: "Van build tot in de store.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "iOS & Android",
          "Kanban-board & sprintmanagement in Figma",
          "Testing & QA",
          "App Store-publicatie",
          "Roadmap- & strategiebeheer",
        ],
        recommends: ["webapps", "support", "crm"],
      },

      // ---------------------------------------- aanvullende diensten
      {
        id: "mob-stories",
        name: "User stories & backlog",
        tagline: "Eerst helder wat de app moet doen.",
        kind: "addon",
        price: { setup: 1250, from: true },
        features: [
          "User stories per rol en scenario",
          "Acceptatiecriteria per story",
          "Prioritering op waarde en complexiteit",
          "Backlog klaar voor de eerste sprint",
        ],
      },
      {
        id: "mob-prototype",
        name: "Low-fi klikbaar prototype",
        tagline: "Testen voor er gebouwd wordt.",
        kind: "addon",
        price: { setup: 1450, from: true },
        features: [
          "Wireframes van de kernschermen",
          "Klikbaar prototype in Figma",
          "Testsessies met echte gebruikers",
          "Bevindingen verwerkt in het ontwerp",
        ],
      },
      {
        id: "mob-qa",
        name: "QA & testing",
        tagline: "Werkt het overal, op elk toestel?",
        kind: "addon",
        price: { setup: 1650, from: true },
        features: [
          "Testplan met testgevallen per story",
          "Handmatig testen op iOS én Android",
          "Regressietest voor elke release",
          "Bevindingen met reproductiestappen",
        ],
      },
      {
        id: "mob-pm",
        name: "Projectmanagement (agile)",
        tagline: "Sprints, demo's en grip op scope.",
        kind: "addon",
        price: { monthly: 950 },
        features: [
          "Vaste sprints met planning en demo",
          "Kanban-board altijd actueel",
          "Wekelijkse voortgang en risico's",
          "Één vast aanspreekpunt",
        ],
        recommends: ["support"],
      },
      {
        id: "mob-store",
        name: "Store-beheer & releases",
        tagline: "Elke update netjes de store door.",
        kind: "addon",
        price: { monthly: 295 },
        features: [
          "Store-listings, screenshots en teksten",
          "Releasebeheer en versienotities",
          "Reviewproces bij Apple en Google",
          "Crash- en gebruiksmonitoring",
        ],
        recommends: ["support", "tracking"],
      },
    ],
  },

  // ========================================================== VIDEO & ANIMATIE
  {
    id: "video",
    label: "Video & Animatie",
    kicker: "Film, motion & 3D",
    blurb:
      "Alles is mogelijk in bewegend beeld. Van bedrijfsvideo's, intro's/outro's en custom animaties tot explainers met échte of AI-gegenereerde personen, exploded-view renders, high-end productanimaties en 3D van vastgoed — desgewenst volledig opgebouwd uit je bouwtekeningen. Ondertiteling zit standaard bij elke oplevering.",
    note: "Indicatieve vanafprijzen — lengte, aantal scènes en de mate van 3D bepalen de definitieve offerte.",
    tools: ["adobe", "lottie", "figma"],
    crossSell: ["ads-video-creatives", "org-social-reels"],
    options: [
      {
        id: "video-style",
        label: "Stijl",
        multi: true,
        choices: ["Live-action film", "Animatie / motion graphics", "3D & renders", "AI-gegenereerd"],
      },
      {
        id: "video-usage",
        label: "Waar ga je hem inzetten",
        multi: true,
        choices: ["Website / hero", "Social media", "Advertenties", "Beurs / presentatie", "Interne communicatie"],
      },
      {
        id: "video-lang",
        label: "Ondertiteling",
        choices: ["Nederlands", "Nederlands + Engels", "Meerdere talen", "Geen"],
      },
    ],
    packages: [
      {
        id: "vid-brandfilm",
        name: "Bedrijfsvideo",
        tagline: "Wie je bent, in twee minuten.",
        kind: "plan",
        price: { setup: 4500, from: true },
        highlight: true,
        badge: "Populair",
        features: [
          "Concept, script & storyboard",
          "Draaidag op locatie met regie",
          "Montage, kleurcorrectie & sounddesign",
          "Ondertiteling inbegrepen",
          "Uitgeleverd in 16:9, 1:1 en 9:16",
        ],
        recommends: ["branding", "organic", "paid"],
      },
      {
        id: "vid-explainer-real",
        name: "Explainer — realistisch",
        tagline: "Echte of AI-gegenereerde personen.",
        kind: "plan",
        price: { setup: 3800, from: true },
        features: [
          "Realistische scènes met echte acteurs",
          "Of volledig AI-gegenereerde personen & omgevingen",
          "Script gericht op één heldere boodschap",
          "Voice-over in de taal die je wilt",
          "Ondertiteling inbegrepen",
        ],
        recommends: ["ai", "funnels"],
      },
      {
        id: "vid-explainer-anim",
        name: "Explainer — animatie",
        tagline: "Je verhaal getekend en bewegend.",
        kind: "plan",
        price: { setup: 2950, from: true },
        features: [
          "Illustratiestijl in je eigen huisstijl",
          "Script, storyboard & styleframes",
          "Motion graphics met voice-over",
          "Muziek & sounddesign",
          "Ondertiteling inbegrepen",
        ],
        recommends: ["branding"],
      },
      {
        id: "vid-3d",
        name: "3D-animatie & renders",
        tagline: "Producten en vastgoed tot leven.",
        kind: "plan",
        price: { setup: 6500, from: true },
        features: [
          "3D-modellering van product of object",
          "Vastgoed & interieur in realistische omgeving",
          "Op basis van bouwtekeningen of CAD-bestanden",
          "Fotorealistische materialen & belichting",
          "Stills én bewegende renders",
        ],
        recommends: ["print", "branding"],
      },

      // ---------------------------------------- add-ons
      {
        id: "vid-intro-outro",
        name: "Intro & outro",
        tagline: "Herkenbare kop en staart.",
        kind: "addon",
        price: { setup: 750 },
        features: [
          "Geanimeerde logo-intro (3–6 sec)",
          "Outro met call-to-action & gegevens",
          "Losse bestanden om zelf te hergebruiken",
          "Met of zonder geluid",
        ],
        recommends: ["branding"],
      },
      {
        id: "vid-custom-anim",
        name: "Custom animaties",
        tagline: "Losse animaties op maat.",
        kind: "addon",
        price: { setup: 950, from: true },
        features: [
          "Geanimeerde iconen, grafieken of infographics",
          "Lottie-bestanden voor je website",
          "Transparante achtergrond mogelijk",
          "Bronbestand meegeleverd",
        ],
        recommends: ["websites"],
      },
      {
        id: "vid-exploded",
        name: "Exploded view",
        tagline: "Laat zien hoe het in elkaar zit.",
        kind: "addon",
        price: { setup: 2400, from: true },
        features: [
          "Onderdelen uit elkaar en weer samen",
          "Callouts met namen en specificaties",
          "Op basis van CAD- of technische tekeningen",
          "Ideaal voor techniek en maakindustrie",
        ],
      },
      {
        id: "vid-product",
        name: "Product-hero",
        tagline: "High-end shot van één product.",
        kind: "addon",
        price: { setup: 1850, from: true },
        features: [
          "Korte, strakke productanimatie (10–20 sec)",
          "Studiobelichting of styling in scène",
          "Loopbaar voor je website-hero",
          "Meerdere kleurvarianten mogelijk",
        ],
        recommends: ["websites"],
      },
      {
        id: "vid-subtitles",
        name: "Ondertiteling & vertaling",
        tagline: "Ook in andere talen.",
        kind: "addon",
        price: { setup: 195, suffix: "stuk" },
        features: [
          "Ingebrande of losse SRT-ondertiteling",
          "Vertaling naar extra talen",
          "Op-merk typografie",
          "Per video af te nemen",
        ],
      },
      {
        id: "vid-snippets",
        name: "Content-snippets",
        tagline: "Uit één shoot, tien posts.",
        kind: "addon",
        price: { setup: 1250, from: true },
        features: [
          "8–12 korte snippets uit bestaand materiaal",
          "Verticaal formaat voor Reels, Shorts & TikTok",
          "Hooks, captions en ondertiteling",
          "Klaar om maandenlang te plaatsen",
        ],
        recommends: ["organic"],
      },
      {
        id: "vid-ads",
        name: "Ad-video's",
        tagline: "Gemaakt om te converteren.",
        kind: "addon",
        price: { setup: 1450, from: true },
        features: [
          "3 varianten met verschillende hooks",
          "Per platform op maat gesneden",
          "Ondertiteling en eindkaart met CTA",
          "Geschikt voor A/B-testen",
        ],
        recommends: ["paid"],
      },

      // ---------------------------------------- losse diensten
      {
        id: "vid-shootday",
        name: "Extra draaidag",
        tagline: "Meer locaties of meer materiaal.",
        kind: "item",
        price: { setup: 1650 },
        features: ["Cameraploeg incl. apparatuur", "Tot 8 uur op locatie", "Ruwe beelden gearchiveerd"],
      },
      {
        id: "vid-drone",
        name: "Drone-opnames",
        tagline: "Je locatie van bovenaf.",
        kind: "item",
        price: { setup: 750 },
        features: ["Gecertificeerde dronepiloot", "4K-luchtbeelden", "Vluchtvergunning geregeld"],
      },
      {
        id: "vid-voiceover",
        name: "Professionele voice-over",
        tagline: "De juiste stem bij je merk.",
        kind: "item",
        price: { setup: 395 },
        features: ["Stemcasting uit meerdere opties", "Studio-opname", "Ook in andere talen"],
      },
      {
        id: "vid-edit",
        name: "Montage van eigen materiaal",
        tagline: "Jij filmt, wij monteren.",
        kind: "item",
        price: { setup: 650, from: true },
        features: ["Montage van je eigen opnames", "Kleurcorrectie & audio-opschoning", "Titels en ondertiteling"],
      },
    ],
  },

  // ========================================================== ORGANISCHE MARKETING
  {
    id: "organic",
    label: "Organisch",
    kicker: "Marketing · content",
    blurb:
      "Short-form content die blijft hangen: statische posts, carrousels, reels en animaties. Plus AI-renders o.b.v. schetsen, AI-animaties en podcast. Grotere producties zoals bedrijfsvideo's en 3D vind je bij Video & Animatie.",
    note: "Kies een doorlopend social-abonnement — wij vullen de content maandelijks voor je in.",
    tools: ["adobe", "figma", "lottie"],
    crossSell: ["vid-snippets", "vid-brandfilm", "ai-image"],
    options: [
      {
        id: "podcast-gear",
        label: "Podcast-gear (indien gewenst)",
        choices: ["Onze studio", "Op locatie (wij nemen gear mee)", "Alleen montage"],
      },
    ],
    packages: [
      {
        id: "org-social-basic",
        name: "Social Basic",
        tagline: "Consistent zichtbaar met sterke posts.",
        kind: "plan",
        price: { monthly: 475, from: true },
        features: [
          "Vanaf 1 statische post / carrousel per week",
          "Volledig in je huisstijl",
          "Content-kalender & inplannen",
          "Maandelijkse aanlevering klaar-om-te-plaatsen",
        ],
        recommends: ["tracking"],
      },
      {
        id: "org-social-reels",
        name: "Social Reels",
        tagline: "Posts én reels voor meer bereik.",
        kind: "plan",
        price: { monthly: 950, from: true },
        highlight: true,
        badge: "Populair",
        features: [
          "1 post + 1 reel per week",
          "Motion & korte video-edits",
          "Ondertiteling & merk-outro",
          "Content-kalender & inplannen",
        ],
        recommends: ["tracking"],
      },
      {
        id: "org-social-pro",
        name: "Social Pro",
        tagline: "Maximale output, elke week.",
        kind: "plan",
        price: { monthly: 1250, from: true },
        features: [
          "3 posts per week, waarvan 1 reel",
          "Mix van statisch, carrousel & motion",
          "Ondertiteling & merk-outro",
          "Content-kalender, inplannen & rapportage",
        ],
        recommends: ["tracking"],
      },
      {
        id: "org-profiles",
        name: "Social profielen upgraden",
        tagline: "Je pagina klopt vóór iemand gaat volgen.",
        kind: "addon",
        price: { setup: 650, from: true },
        features: [
          "Story-highlight covers in je huisstijl",
          "Omslagfoto's en profielfoto per platform",
          "Bio-opmaak met haakje en call-to-action",
          "Linkpagina of link-in-bio ingericht",
          "Naam, zoekwoorden en categorie geoptimaliseerd",
        ],
        recommends: ["branding"],
      },
      {
        id: "org-highlights",
        name: "Informatieve storylines",
        tagline: "Je aanbod uitgelegd in je highlights.",
        kind: "addon",
        price: { setup: 750, from: true },
        features: [
          "Storyreeksen per highlight (diensten, werkwijze, FAQ)",
          "Volledige vormgeving in je huisstijl",
          "Vaste sjablonen om zelf uit te breiden",
          "Inclusief bijpassende highlight-covers",
        ],
        recommends: ["branding"],
      },
      {
        id: "org-airender",
        name: "AI-renders (schets → beeld)",
        tagline: "Van tekening naar fotorealisme.",
        kind: "item",
        price: { setup: 195, suffix: "stuk" },
        features: ["O.b.v. jouw schetsen of tekeningen", "Fotorealistisch of stylized", "Voor niet-bestaande producten"],
      },
      {
        id: "org-aimotion",
        name: "AI-animatie / bewegend beeld",
        tagline: "Stilstaand beeld tot leven.",
        kind: "item",
        price: { setup: 395, suffix: "stuk" },
        features: ["AI-motion op je beelden", "Cinematic bewegend beeld", "Voor hero's & ads"],
      },
      {
        id: "org-podcast",
        name: "Podcast-productie",
        tagline: "Van opname tot aflevering.",
        kind: "item",
        price: { setup: 1350, suffix: "afl." },
        features: ["Opname op locatie of studio", "Montage & audioclean-up", "Social snippets"],
      },
    ],
  },

  // ========================================================== PAID ADS
  {
    id: "paid",
    label: "Paid Ads",
    kicker: "Marketing · betaald",
    blurb:
      "Per kanaal een eigen aanpak, want LinkedIn werkt anders dan Google. Je kiest het kanaal dat bij je doelgroep past; wij richten het account in, maken de creatives en funnels en sturen maandelijks bij op wat écht rendeert.",
    note: "Advertentiebudget (ad-spend) is exclusief en betaal je rechtstreeks aan het platform.",
    requires:
      "Bij afname van Paid Ads is minimaal een Tracking-plan vereist. Zonder correct ingerichte meting kunnen we conversies niet compleet en betrouwbaar meten, campagnes niet gericht optimaliseren en niet eerlijk rapporteren wat je advertentiebudget oplevert.",
    tools: ["googleads", "linkedin", "meta", "tiktok", "reddit"],
    crossSell: ["trk-foundation", "trk-server", "trk-insights"],
    options: [
      {
        id: "platforms",
        label: "Kanalen",
        multi: true,
        choices: ["Google Ads", "LinkedIn", "Meta (IG/FB)", "TikTok", "Reddit", "Overig"],
      },
      {
        id: "ads-goal",
        label: "Doel van de campagne",
        choices: ["Leads genereren", "Verkoop / omzet", "Naamsbekendheid", "Vacatures / recruitment"],
      },
    ],
    packages: [
      {
        id: "ads-google",
        name: "Google Ads",
        tagline: "AI-driven, zoekwoordgestuurd adverteren.",
        kind: "plan",
        price: { monthly: 375, from: true },
        highlight: true,
        badge: "Populair",
        features: [
          "Zoekwoordenonderzoek standaard inbegrepen",
          "AI-driven biedstrategieën (Performance Max & Search)",
          "Account, campagnes & conversies ingericht",
          "Doorlopende zoekwoord- en zoektermenoptimalisatie",
          "Maandelijkse rapportage op kosten per lead",
        ],
        recommends: ["tracking", "seo", "funnels"],
      },
      {
        id: "ads-linkedin",
        name: "LinkedIn Ads",
        tagline: "Zakelijke doelgroepen, scherp afgebakend.",
        kind: "plan",
        price: { monthly: 750, from: true },
        features: [
          "Incl. het maken van creatives en/of funnels",
          "Targeting op functie, bedrijf, sector & bedrijfsgrootte",
          "Lead Gen Forms of eigen landingspagina",
          "A/B-testen van boodschap en beeld",
          "Maandelijkse optimalisatie & rapportage",
        ],
        recommends: ["tracking", "funnels", "branding"],
      },
      {
        id: "ads-meta",
        name: "Meta / Instagram Ads",
        tagline: "Bereik en beweging op Facebook & Instagram.",
        kind: "plan",
        price: { monthly: 750, from: true },
        features: [
          "Incl. het maken van creatives en/of funnels",
          "Business Manager, pixel & Conversions API",
          "Doelgroepen, lookalikes & retargeting",
          "Statische én video-creatives",
          "Maandelijkse optimalisatie & rapportage",
        ],
        recommends: ["tracking", "funnels", "video"],
      },
      {
        id: "ads-other",
        name: "Overige kanalen",
        tagline: "Reddit, TikTok, Pinterest, Spotify & meer.",
        kind: "plan",
        price: { custom: true },
        features: [
          "Reddit, TikTok, Pinterest, YouTube of DOOH",
          "Kanaalkeuze op basis van je doelgroep",
          "Creatives afgestemd op het platform",
          "Prijs op aanvraag — afhankelijk van kanaal en scope",
        ],
        recommends: ["tracking", "video"],
      },

      // ---------------------------------------- onderzoek & extra's
      {
        id: "ads-keywords",
        name: "Zoekwoordenonderzoek",
        tagline: "Actuele zoekvolumes als fundament.",
        kind: "addon",
        price: { setup: 650 },
        badge: "Standaard bij Google Ads",
        features: [
          "Zoekwoorden met actuele volumes & concurrentie",
          "Clustering op zoekintentie en funnel-fase",
          "Uitsluitingslijsten om budget te sparen",
          "Standaard inbegrepen bij het Google Ads-plan",
        ],
        recommends: ["seo"],
      },
      {
        id: "ads-keywords-mnd",
        name: "Doorlopend zoekwoordbeheer",
        tagline: "Elke maand bijsturen op zoektermen.",
        kind: "addon",
        price: { monthly: 195 },
        features: [
          "Maandelijkse zoektermen-analyse",
          "Nieuwe kansen toegevoegd, verspilling uitgesloten",
          "Biedingen per zoekwoordgroep bijgesteld",
          "Ook los af te nemen naast SEO",
        ],
        recommends: ["seo"],
      },
      {
        id: "ads-creatives",
        name: "Creative-pakket",
        tagline: "Elke maand verse advertentiebeelden.",
        kind: "addon",
        price: { monthly: 495 },
        features: [
          "6–10 nieuwe statische creatives p/m",
          "Varianten per doelgroep en funnel-fase",
          "Copy & haakjes meegeleverd",
          "Op basis van wat in de data presteert",
        ],
        recommends: ["branding", "video"],
      },
      {
        id: "ads-video-creatives",
        name: "Video-advertenties",
        tagline: "Bewegend beeld dat scrollen stopt.",
        kind: "addon",
        price: { monthly: 750, from: true },
        features: [
          "2–4 videoadvertenties per maand",
          "Verticaal (9:16) en vierkant (1:1) uitgeleverd",
          "Ondertiteling standaard",
          "Hooks getest op de eerste 3 seconden",
        ],
        recommends: ["video"],
      },
      {
        id: "ads-audit",
        name: "Account-audit",
        tagline: "Wat loopt er weg aan budget?",
        kind: "item",
        price: { setup: 495 },
        features: [
          "Doorlichting van je bestaande advertentieaccount",
          "Structuur, conversiemeting & biedstrategie",
          "Verspilling en gemiste kansen benoemd",
          "Rapport met prioriteiten",
        ],
        recommends: ["tracking"],
      },
    ],
  },

  // ========================================================== SEO / AEO
  {
    id: "seo",
    label: "SEO / AEO",
    kicker: "Vindbaar & citeerbaar",
    blurb:
      "Organisch groeien met content o.b.v. thema's & actualiteiten (incl. webscraping) én zichtbaar worden in AI-antwoorden via slimme FAQ's en gestructureerde data.",
    note: "Drafts worden ter review klaargezet — jij houdt de regie over publicatie.",
    tools: ["googlesearchconsole", "googleanalytics"],
    packages: [
      {
        id: "seo-boost",
        name: "Quick SEO Boost",
        tagline: "Snelle vindbaarheidswinst.",
        kind: "plan",
        price: { setup: 475 },
        features: ["Meta-titels & -beschrijvingen", "Zoekwoordonderzoek", "Mediacompressie", "Technische SEO-scan"],
      },
      {
        id: "seo-growth",
        name: "SEO Growth",
        tagline: "Doorlopende content & optimalisatie.",
        kind: "plan",
        price: { monthly: 395 },
        highlight: true,
        badge: "Populair",
        features: [
          "2 blogs / landingspagina's p/m",
          "O.b.v. thema's & actualiteiten (webscraping)",
          "Drafts klaargezet ter review",
          "Doorlopende paginaoptimalisatie",
          "Interne linkstructuur",
        ],
      },
      {
        id: "seo-authority",
        name: "SEO Authority",
        tagline: "Autoriteit & linkbuilding.",
        kind: "plan",
        price: { monthly: 795 },
        features: [
          "Alles uit Growth",
          "4 contentstukken p/m",
          "Linkbuilding & digital PR",
          "Concurrentie-monitoring",
          "Kwartaal-SEO-strategie",
        ],
      },
      {
        id: "aeo-answers",
        name: "AEO-optimalisatie",
        tagline: "Gevonden worden dóór AI.",
        kind: "addon",
        price: { custom: true },
        badge: "GEO · op aanvraag",
        features: [
          "FAQ-hub (helpdesk & kennisbank)",
          "Cross-referenced slimme vragen",
          "JSON-LD schema's (FAQ, Article, Organization, Product)",
          "robots.txt & llms.txt",
          "GEO- & actualiteitsgericht",
          "Optimalisatie voor ChatGPT, Gemini & Perplexity",
        ],
      },
    ],
  },

  // ========================================================== TRACKING
  {
    id: "tracking",
    label: "Tracking",
    kicker: "Meten, monitoren & inzicht",
    blurb:
      "Eerst de meetbasis eenmalig goed inrichten — Search Console, Google Analytics 4 en Google Tag Manager — en daarna elke maand je websitegebruik bijhouden en monitoren. Dat is cruciaal om op élke plek van je website of web-app te zien wat er gebeurt, en in de hogere plannen kijken we met Microsoft Clarity mee in échte gebruikerssessies en heatmaps.",
    note: "De eenmalige inrichting is de basis; het maandbedrag dekt het bijhouden, monitoren en de rapportage. Een cookiebanner (CMP) zit níét in de plannen — die neem je los af als licentie onderaan deze pagina.",
    tools: ["googlesearchconsole", "googleanalytics", "googletagmanager", "clarity", "meta"],
    packages: [
      {
        id: "trk-foundation",
        name: "Meetbasis",
        tagline: "Search Console, GA4 & Tag Manager ingericht.",
        kind: "plan",
        price: { setup: 195, monthly: 15 },
        features: [
          "Eenmalig: Search Console geverifieerd & sitemap ingediend",
          "Eenmalig: Google Analytics 4 property + datastream",
          "Eenmalig: Google Tag Manager container & basis-events",
          "Meta Pixel en basis-conversies",
          "Consent Mode voorbereid (CMP apart af te nemen)",
          "Maandelijks: meetpunten bewaakt en gecontroleerd",
        ],
        recommends: ["seo"],
      },
      {
        id: "trk-server",
        name: "Monitoring",
        tagline: "Elke maand bijhouden wat er gebeurt.",
        kind: "plan",
        price: { setup: 495, monthly: 45 },
        highlight: true,
        badge: "Populair",
        features: [
          "Alles uit Meetbasis",
          "Maandelijkse monitoring van je websitegebruik",
          "Server-side tracking (sGTM) & Meta Conversions API",
          "Enhanced conversions & custom events",
          "Signaleren van meetfouten en wegvallende data",
          "Beknopt maandoverzicht van de cijfers",
        ],
      },
      {
        id: "trk-insights",
        name: "Insights Pro",
        tagline: "Clarity, heatmaps & een rapport met inzichten.",
        kind: "plan",
        price: { setup: 795, monthly: 175 },
        features: [
          "Alles uit Monitoring",
          "Microsoft Clarity: sessie-opnames & heatmaps",
          "Analyse + klein rapportje met inzichten uit échte sessies",
          "Looker Studio dashboard & attributiemodellen",
          "Funnel- & cohortanalyse",
          "Concrete verbeterpunten per pagina",
        ],
        recommends: ["funnels"],
      },
      {
        id: "trk-partner",
        name: "Insights Partner",
        tagline: "Inclusief maandelijkse meeting.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Alles uit Insights Pro",
          "Maandelijkse meeting — in persoon of online",
          "Onze ideeën, suggesties & tips live doorgenomen",
          "Prioriteitenlijst voor de komende maand",
          "Vaste data-analist als aanspreekpunt",
          "Prijs op aanvraag — afhankelijk van omvang en frequentie",
        ],
        recommends: ["funnels", "seo"],
      },

      // ---------------------------------------- onderzoek & advies
      {
        id: "trk-keywords",
        name: "Zoekwoordenonderzoek",
        tagline: "Actuele zoekvolumes in kaart.",
        kind: "addon",
        price: { setup: 650 },
        features: [
          "Zoekwoorden met actuele volumes & concurrentie",
          "Clustering op zoekintentie",
          "Kansen die je nu laat liggen",
          "Direct bruikbaar voor SEO én ads",
        ],
        recommends: ["seo", "paid"],
      },
      {
        id: "trk-keywords-mnd",
        name: "Zoekwoorden-monitoring",
        tagline: "Doorlopend zicht op je zoekvolumes.",
        kind: "addon",
        price: { monthly: 195 },
        features: [
          "Maandelijkse update van volumes & posities",
          "Nieuwe en opkomende zoektermen",
          "Seizoenspatronen gesignaleerd",
          "Contentkansen aangedragen",
        ],
        recommends: ["seo"],
      },
      {
        id: "trk-competition",
        name: "Concurrentieanalyse",
        tagline: "Web én social naast elkaar gelegd.",
        kind: "addon",
        price: { setup: 950, from: true },
        features: [
          "Analyse van 3–5 concurrenten online",
          "Website, content, zoekwoorden & advertenties",
          "Social media: posting, tone of voice & engagement",
          "Rapport met inzichten en aanbevelingen",
        ],
        recommends: ["organic", "paid", "seo"],
      },
      {
        id: "trk-strategy",
        name: "Periodieke strategiesessie",
        tagline: "Elk kwartaal samen bijsturen.",
        kind: "addon",
        price: { monthly: 275 },
        features: [
          "Kwartaalsessie met strateeg en data-analist",
          "Doorlopende concurrentie- en marktmonitoring",
          "Prioriteiten en roadmap voor het volgende kwartaal",
          "Verslag met besluiten en acties",
        ],
      },
      {
        id: "trk-cookiebanner",
        name: "Cookiebanner (CMP)",
        tagline: "Losse licentie — niet in de plannen inbegrepen.",
        kind: "addon",
        price: { setup: 450, monthly: 15 },
        badge: "Losse licentie",
        features: [
          "Consent Studio (NL) of Usercentrics Cookiebot",
          "Banner in je eigen huisstijl",
          "Automatische cookie-scan & cookieverklaring",
          "Gekoppeld aan Consent Mode v2 in GTM",
          "Consent-logging voor de bewaarplicht",
        ],
      },
    ],
  },

  // ========================================================== FUNNELS
  {
    id: "funnels",
    label: "Funnels",
    kicker: "Conversiemechanismes & lead-flows",
    blurb:
      "Eerst de mechanismes die bezoekers laten converteren — configuratoren, rekenmodules, offerte-flows en opt-ins. Daarna de funnels eromheen die de leads opvolgen: e-mailreeksen, segmentatie en automatische audience-sync.",
    note: "Hostingkosten van externe services (Make / Zapier / Resend) vallen onder dit pakket.",
    tools: ["make", "zapier", "airtable", "activecampaign", "mailchimp", "resend"],
    crossSell: ["trk-foundation"],
    groups: [
      { id: "conversie", kicker: "Conversiemechanismes", hint: "Zet bezoekers actief aan tot een aanvraag" },
      { id: "funnel", kicker: "Funnels & opvolging", hint: "Wat er gebeurt nádat iemand zijn gegevens achterlaat" },
    ],
    packages: [
      // ---------------------------------------- conversiemechanismes
      {
        id: "fun-config",
        name: "Product-configurator",
        tagline: "Laat klanten zelf samenstellen.",
        kind: "item",
        group: "conversie",
        price: { setup: 1750, from: true },
        highlight: true,
        badge: "Populair",
        features: ["Visuele configurator", "Prijslogica & varianten", "Deelbare configuraties", "Uitkomst als aanvraag"],
        recommends: ["crm", "webapps"],
      },
      {
        id: "fun-quote",
        name: "Offerte-aanvraagflow",
        tagline: "Van interesse naar offerte.",
        kind: "item",
        group: "conversie",
        price: { setup: 1250 },
        features: ["Multi-step formulier", "Voorwaardelijke logica", "Automatische offerte-PDF", "CRM-doorzet"],
        recommends: ["crm", "tracking"],
      },
      {
        id: "fun-calc",
        name: "Terugverdientijd-module",
        tagline: "Reken je klant naar 'ja'.",
        kind: "item",
        group: "conversie",
        price: { setup: 950 },
        features: ["Interactieve rekentool", "Custom logica & branding", "Realtime resultaat", "Lead-capture"],
        recommends: ["tracking"],
      },
      {
        id: "fun-quiz",
        name: "Adviesquiz / keuzehulp",
        tagline: "Een paar vragen, het juiste advies.",
        kind: "item",
        group: "conversie",
        price: { setup: 1150 },
        features: ["Vragen met scorelogica", "Persoonlijk advies als uitkomst", "Resultaat per e-mail", "Segmenteert je leads meteen"],
        recommends: ["crm"],
      },
      {
        id: "fun-booking",
        name: "Afspraak- / demoplanner",
        tagline: "Direct in je agenda geboekt.",
        kind: "item",
        group: "conversie",
        price: { setup: 750 },
        features: ["Beschikbaarheid uit je eigen agenda", "Bevestigings- en herinneringsmails", "No-show reminders", "Koppeling met CRM"],
        recommends: ["crm", "webapps"],
      },
      {
        id: "fun-scan",
        name: "Online scan met rapport",
        tagline: "Waarde weggeven, gegevens terugkrijgen.",
        kind: "item",
        group: "conversie",
        price: { setup: 1450, from: true },
        features: ["Vragenlijst met scoreberekening", "Automatisch PDF-rapport", "Benchmark tegen de markt", "Sterke aanleiding voor een gesprek"],
        recommends: ["seo", "tracking"],
      },
      {
        id: "fun-ebook",
        name: "E-book / download opt-in",
        tagline: "Waarde weggeven, leads oogsten.",
        kind: "item",
        group: "conversie",
        price: { setup: 450 },
        features: ["Branded opt-in", "Automatische levering per e-mail", "Dubbele opt-in (AVG)"],
        recommends: ["organic"],
      },
      {
        id: "fun-chat",
        name: "Chat- & WhatsApp-instap",
        tagline: "Laagdrempelig contact zonder formulier.",
        kind: "item",
        group: "conversie",
        price: { setup: 550 },
        features: ["WhatsApp- of chatknop met context", "Vooringevuld startbericht per pagina", "Openingstijden en terugbelverzoek", "Gesprekken meetbaar gemaakt"],
        recommends: ["tracking", "ai"],
      },

      // ---------------------------------------- funnels & opvolging
      {
        id: "fun-email",
        name: "E-mailreeks / nurture",
        tagline: "Blijf top-of-mind.",
        kind: "addon",
        group: "funnel",
        price: { setup: 350, monthly: 45 },
        features: ["Geautomatiseerde reeks", "Branded templates", "Dynamische tags"],
        recommends: ["hosting"],
      },
      {
        id: "fun-audience",
        name: "Audience-sync",
        tagline: "Leads automatisch gesegmenteerd.",
        kind: "addon",
        group: "funnel",
        price: { monthly: 25 },
        features: [
          "Naar Mailchimp / ActiveCampaign / Mailblue / MailerLite",
          "Dynamische tagging & segmentatie",
          "Realtime doorzet",
        ],
      },
      {
        id: "fun-leadscore",
        name: "Leadscoring & routering",
        tagline: "De beste leads eerst.",
        kind: "addon",
        group: "funnel",
        price: { setup: 850, monthly: 45 },
        features: ["Score op gedrag en profiel", "Automatisch toegewezen aan de juiste collega", "Melding bij een hot lead", "Rapportage op leadkwaliteit"],
        recommends: ["crm", "tracking"],
      },
      {
        id: "fun-retarget",
        name: "Retargeting-koppeling",
        tagline: "Blijf zichtbaar na het bezoek.",
        kind: "addon",
        group: "funnel",
        price: { setup: 650, monthly: 35 },
        features: ["Doelgroepen op basis van funnelgedrag", "Uitsluiten wie al klant is", "Sync naar Meta, Google en LinkedIn", "Consent-proof ingericht"],
        recommends: ["paid", "tracking"],
      },
      {
        id: "fun-followup",
        name: "Opvolgflow voor sales",
        tagline: "Geen aanvraag blijft liggen.",
        kind: "addon",
        group: "funnel",
        price: { setup: 950, monthly: 55 },
        features: ["Taken en herinneringen in je CRM", "Automatische opvolgmails bij stilte", "Statusoverzicht per aanvraag", "Rapportage op doorlooptijd"],
        recommends: ["crm"],
      },
      {
        id: "fun-report",
        name: "Funnel-rapportage",
        tagline: "Zien waar leads blijven hangen.",
        kind: "addon",
        group: "funnel",
        price: { monthly: 95 },
        features: ["Conversie per funnelstap", "Bron- en campagne-toewijzing", "Maandelijks overzicht", "Concrete verbeterpunten"],
        recommends: ["tracking"],
      },
    ],
  },

  // ========================================================== CRM & INTEGRATIES
  {
    id: "crm",
    label: "CRM & Integraties",
    kicker: "Maatwerk",
    blurb:
      "Geavanceerde CRM- en projectmanagement-inrichting op Odoo, HubSpot, Pipedrive, Teamleader of Notion — plus custom API-koppelingen. Scope en beheerfee spreken we op maat af.",
    note: "Alles op maat — we bepalen samen de scope en de doorlopende beheerfee.",
    tools: ["odoo", "hubspot", "pipedrive", "teamleader", "notion"],
    packages: [
      {
        id: "crm-setup",
        name: "CRM-inrichting",
        tagline: "Jouw systeem, slim ingericht.",
        kind: "plan",
        price: { custom: true },
        features: [
          "Odoo · HubSpot · Pipedrive · Teamleader · Notion",
          "Pipelines & automations op maat",
          "Data-migratie",
          "Team-onboarding",
        ],
      },
      {
        id: "crm-api",
        name: "Custom API-integratie",
        tagline: "Alles met alles verbonden.",
        kind: "plan",
        price: { custom: true },
        features: ["Koppeling met CRM & externe tools", "Webhooks & datastromen", "Foutafhandeling & logging"],
      },
      {
        id: "crm-manage",
        name: "Beheer & optimalisatie",
        tagline: "Meegroeien met je proces.",
        kind: "plan",
        price: { monthly: 0, custom: true },
        features: ["Doorlopend beheer", "Nieuwe automations", "Beheerfee op maat"],
      },
    ],
  },

  // ========================================================== AI
  {
    id: "ai",
    label: "AI",
    kicker: "Advies, inrichting & automatisering",
    blurb:
      "AI is pas waardevol als het in jóuw processen zit. Wij adviseren waar het echt tijd oplevert, richten je eigen AI-kennisomgeving in met je bedrijfsdocumenten, leren je team goed prompten in ChatGPT en Claude, zetten beeldgeneratie op in je huisstijl en automatiseren bedrijfsprocessen van offerte tot rapportage.",
    note: "Licentiekosten voor AI-tools (ChatGPT, Claude, beeldgeneratie) zijn exclusief en lopen op jouw eigen account.",
    tools: ["openai", "claude", "googlegemini", "perplexity", "make", "airtable"],
    crossSell: ["aeo-answers", "org-airender"],
    options: [
      {
        id: "ai-maturity",
        label: "Waar staan jullie nu",
        choices: ["Nog niets mee gedaan", "Individueel wat geprobeerd", "Team gebruikt het al", "Willen echt automatiseren"],
      },
      {
        id: "ai-focus",
        label: "Waar wil je AI inzetten",
        multi: true,
        choices: ["Marketing & content", "Sales & offertes", "Klantenservice", "Administratie", "Kennis & documentatie", "Beeld & design"],
      },
    ],
    packages: [
      {
        id: "ai-scan",
        name: "AI-scan & advies",
        tagline: "Waar levert AI jou echt tijd op?",
        kind: "plan",
        price: { setup: 1450 },
        features: [
          "Doorlichting van je huidige processen",
          "Kansen gerangschikt op tijdwinst en haalbaarheid",
          "Advies over tooling, kosten en privacy",
          "Rapport met roadmap voor 6–12 maanden",
          "Presentatie aan je team",
        ],
        recommends: ["crm"],
      },
      {
        id: "ai-knowledge",
        name: "Eigen AI-kennisomgeving",
        tagline: "Jouw documenten, jouw antwoorden.",
        kind: "plan",
        price: { setup: 4500, from: true },
        highlight: true,
        badge: "Populair",
        features: [
          "Eigen projecten & knowledge base ingericht",
          "Je handleidingen, offertes en beleid als bron",
          "Antwoorden met bronvermelding uit je eigen documenten",
          "Toegang en rollen per team",
          "Instructie-set zodat de output on-brand blijft",
        ],
        recommends: ["webapps", "support"],
      },
      {
        id: "ai-automation",
        name: "Procesautomatisering met AI",
        tagline: "Werk dat vanzelf doorloopt.",
        kind: "plan",
        price: { setup: 3500, from: true },
        features: [
          "Automatisering van terugkerende processen",
          "AI-stappen in Make, Zapier of eigen code",
          "Van inkomende mail tot offerte of rapportage",
          "Foutafhandeling, logging en een menselijke check",
          "Overdracht en documentatie",
        ],
        recommends: ["crm", "funnels"],
      },

      // ---------------------------------------- add-ons
      {
        id: "ai-workshop",
        name: "Prompting-workshop",
        tagline: "Je team in één dagdeel op niveau.",
        kind: "addon",
        price: { setup: 1250 },
        features: [
          "Dagdeel op locatie of online (tot 12 personen)",
          "Werken met ChatGPT, Claude en Gemini",
          "Prompting-technieken met eigen praktijkcases",
          "Promptbibliotheek voor je team",
          "Afspraken over veilig en verantwoord gebruik",
        ],
      },
      {
        id: "ai-image",
        name: "AI-beeld abonnement",
        tagline: "Elke maand nieuw beeld in je stijl.",
        kind: "addon",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Maandelijks nieuwe AI-beelden in je huisstijl",
          "Eigen stijl-referentie zodat alles consistent blijft",
          "Product-, sfeer- en campagnebeeld",
          "Retouche en upscaling inbegrepen",
          "Prijs op aanvraag — afhankelijk van volume",
        ],
        recommends: ["organic", "paid"],
      },
      {
        id: "ai-policy",
        name: "AI-beleid & governance",
        tagline: "Veilig gebruik, zwart op wit.",
        kind: "addon",
        price: { setup: 950 },
        features: [
          "Gebruiksbeleid voor je organisatie",
          "Wat mag wel en niet met bedrijfsdata",
          "AVG- en AI-Act-aandachtspunten",
          "Toolkeuze met dataverwerkingsafspraken",
        ],
      },
      {
        id: "ai-agent",
        name: "AI-assistent op je site",
        tagline: "24/7 antwoord op je eigen content.",
        kind: "addon",
        price: { setup: 2950, from: true },
        features: [
          "Chat-assistent getraind op je eigen content",
          "Doorverwijzing naar mens bij twijfel",
          "Gesprekken en veelgestelde vragen inzichtelijk",
          "In je eigen huisstijl geïntegreerd",
        ],
        recommends: ["websites", "crm"],
      },
      {
        id: "ai-content",
        name: "AI-contentmotor",
        tagline: "Sneller content, wel jouw stem.",
        kind: "addon",
        price: { monthly: 495 },
        features: [
          "Vaste prompts en sjablonen voor je contentsoorten",
          "Tone-of-voice vastgelegd in instructies",
          "Concepten klaargezet ter review",
          "Menselijke eindredactie blijft de norm",
        ],
        recommends: ["organic", "seo"],
      },

      // ---------------------------------------- losse diensten
      {
        id: "ai-session",
        name: "AI-sparringsessie",
        tagline: "Twee uur, al je vragen.",
        kind: "item",
        price: { setup: 395 },
        features: ["Sessie van 2 uur met een AI-specialist", "Concrete vragen uit je eigen praktijk", "Beknopt verslag met vervolgstappen"],
      },
      {
        id: "ai-prompt-pack",
        name: "Promptbibliotheek",
        tagline: "Kant-en-klare prompts voor je team.",
        kind: "item",
        price: { setup: 650 },
        features: ["25–40 prompts voor jouw functies", "Getest op jouw eigen cases", "Onderhoudbaar document of Notion-pagina"],
      },
    ],
  },

  // ========================================================== HOSTING
  {
    id: "hosting",
    label: "Hosting",
    kicker: "Solide fundament",
    blurb:
      "Van A tot Z geregeld: domein & DNS, back-ups en maximale veiligheid. Op WordPress (evt. WooCommerce) of Webflow — inclusief hosting van je automations.",
    note: "Vanafprijzen — worden op basis van volume/gebruik nagerekend. Uurtarief buiten scope € 95.",
    tools: ["wordpress", "webflow", "woocommerce", "make", "resend"],
    options: [
      {
        id: "platform",
        label: "Platform",
        choices: ["WordPress", "WooCommerce", "Webflow"],
        triggers: { WooCommerce: "tracking" },
      },
      {
        id: "host-domain",
        label: "Domeinnaam",
        choices: ["Heb ik al", "Graag registreren", "Overzetten naar M7"],
      },
    ],
    packages: [
      {
        id: "host-dns-plan",
        name: "M7 Domain, DNS & Redirect",
        tagline: "Registratie en DNS-beheer per domein.",
        kind: "plan",
        price: { monthly: 25, from: true },
        features: [
          "Domeinregistratie of -transfer per domein",
          "Volledig DNS-beheer door M7",
          "Redirects en doorstuurregels",
          "SSL en mailrecords (SPF, DKIM, DMARC)",
          "Wijzigingen op aanvraag doorgevoerd",
        ],
        recommends: ["support"],
      },
      {
        id: "host-domain-dns",
        name: "Domein & DNS in beheer",
        tagline: "Wij regelen je domein en DNS.",
        kind: "addon",
        price: { setup: 75, monthly: 5 },
        features: [
          "Domeinregistratie of -transfer",
          "Volledig DNS-beheer door M7",
          "Records, redirects & SSL geregeld",
        ],
        recommends: ["support"],
      },
      {
        id: "host-mailboxes",
        name: "Zakelijke mailboxen",
        tagline: "Professioneel mailen op je eigen domein.",
        kind: "item",
        price: { monthly: 4, suffix: "stuk" },
        features: [
          "Mailbox op jouw domein (jij@bedrijf.nl)",
          "Anti-spam & mailhygiëne",
          "Setup op al je devices",
        ],
        recommends: ["support"],
      },
      {
        id: "host-basic",
        name: "Basic",
        tagline: "Voor een solide basis.",
        kind: "plan",
        price: { setup: 95, monthly: 19 },
        features: [
          "Domein- & DNS-management",
          "Redirect-management",
          "Dagelijkse back-ups",
          "SSL-certificaat & 99.8% uptime",
          "Support bij storingen",
          "Tot 3 mailaccounts",
        ],
        recommends: ["support"],
      },
      {
        id: "host-premium",
        name: "Premium",
        tagline: "Voor actieve websites.",
        kind: "plan",
        price: { setup: 145, monthly: 39 },
        highlight: true,
        badge: "Populair",
        features: [
          "Alles uit Basic",
          "2 domeinregistraties + 1 subdomein",
          "Tot 5 mailaccounts",
          "Premium support",
          "500 API-operations",
          "Staging-omgeving",
        ],
        recommends: ["support", "tracking"],
      },
      {
        id: "host-taylored",
        name: "Taylored",
        tagline: "Voor digitale raketten.",
        kind: "plan",
        price: { monthly: 95, suffix: "+", custom: true },
        features: [
          "Test- & productieomgeving",
          "5+ domeinen · 10+ mailaccounts",
          "Cloud / VPS-hosting",
          "DDoS-beveiliging & flexibel schalen",
          "1M+ API-operations",
          "Persoonlijke accountmanager",
        ],
        recommends: ["support", "tracking", "funnels"],
      },
      {
        id: "host-app",
        name: "App-hosting",
        tagline: "Voor web-apps, portalen en API's.",
        kind: "plan",
        price: { custom: true },
        badge: "Op aanvraag",
        features: [
          "Hosting voor web-apps, portalen en API's",
          "Database, opslag en achtergrondtaken",
          "Staging- en productieomgeving met deploys",
          "Monitoring, logging en alerting",
          "Schaalt mee met gebruik — prijs op aanvraag",
        ],
        recommends: ["webapps", "support"],
      },
      {
        id: "host-automation",
        name: "Automation-hosting",
        tagline: "Draaiuren voor je scenario's.",
        kind: "addon",
        price: { monthly: 15 },
        features: ["Beheer van Make / Zapier / n8n", "Monitoring van scenario's", "Transactionele e-mail (Resend)"],
        recommends: ["funnels"],
      },
    ],
  },

  // ========================================================== SUPPORT / WEBPLANS
  {
    id: "support",
    label: "M7 Webplans",
    kicker: "Support & onderhoud",
    blurb:
      "Vast technisch onderhoud en ondersteuning over de hele linie. Updates, monitoring, spamfiltering en hulp bij website-, domein- en DNS-configuratie.",
    note: "Support omvat alle bestede uren: advies, aanpassingen en overige ondersteuning. Uurtarief buiten scope € 75.",
    packages: [
      {
        id: "sup-mini",
        name: "Mini",
        tagline: "Enkel het noodzakelijke.",
        kind: "plan",
        price: { monthly: 19 },
        features: [
          "Periodieke updates van plug-ins & thema's",
          "Periodieke check & onderhoud van services",
          "Spamfiltering & mailhygiëne",
          "Basic support (binnen 48u)",
        ],
      },
      {
        id: "sup-solid",
        name: "Solid",
        tagline: "Voor actieve websites.",
        kind: "plan",
        price: { monthly: 79 },
        features: [
          "1 support-uur per maand",
          "Doorlopende monitoring & onderhoud",
          "Uptime- & security-monitoring",
          "Malware-scanning",
          "Support bij domein / DNS-configuratie",
        ],
      },
      {
        id: "sup-build",
        name: "Build",
        tagline: "Voor doorlopende doorontwikkeling.",
        kind: "plan",
        price: { monthly: 199 },
        highlight: true,
        badge: "Populair",
        features: [
          "3 support-uren per maand",
          "Alles uit Solid",
          "Prioriteit support (binnen 24u)",
          "Maandelijkse performance-optimalisatie",
          "Broken-link & SEO-health checks",
          "Maandelijkse rapportage",
        ],
      },
      {
        id: "sup-craft",
        name: "Craft",
        tagline: "Alles uit handen.",
        kind: "plan",
        price: { monthly: 349 },
        features: [
          "5 support-uren per maand",
          "Alles uit Build",
          "Same-day support",
          "Proactief technisch onderhoud",
          "Kwartaal-strategiecall",
        ],
      },
      {
        id: "sup-forge",
        name: "Forge",
        tagline: "Doorontwikkeling in een hoger tempo.",
        kind: "plan",
        price: { monthly: 549 },
        features: [
          "8 support-uren per maand",
          "Alles uit Craft",
          "Doorlopende doorontwikkeling & nieuwe features",
          "Prioriteit binnen 4 uur",
          "Kwartaal-roadmap & planning",
        ],
      },
      {
        id: "sup-scale",
        name: "Scale",
        tagline: "Toegewijde capaciteit om te schalen.",
        kind: "plan",
        price: { monthly: 795 },
        features: [
          "12 support-uren per maand",
          "Alles uit Forge",
          "Vaste developer-capaciteit gereserveerd",
          "Maandelijkse strategie- & performance-call",
          "Same-day prioriteit & rapportage",
        ],
      },
      {
        id: "sup-apex",
        name: "Apex",
        tagline: "Maximale capaciteit, elke maand.",
        kind: "plan",
        price: { monthly: 1050 },
        features: [
          "16 support-uren per maand",
          "Alles uit Scale",
          "Ruime vaste developer-capaciteit",
          "Doorlopende doorontwikkeling & optimalisatie",
          "Same-day prioriteit & maandrapportage",
        ],
      },
      {
        id: "sup-custom",
        name: "Custom",
        tagline: "16+ uur per maand, volledig op maat.",
        kind: "plan",
        price: { monthly: 1295, suffix: "+", custom: true },
        features: [
          "16+ support-uren per maand",
          "Alles uit Apex",
          "Toegewijd team met SLA op maat",
          "Vaste roadmap-cadans & kwartaalstrategie",
          "Uren en scope geheel naar wens",
        ],
      },
    ],
  },
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

export const CATEGORY_BY_ID: Record<IconKey, Category> = Object.fromEntries(
  CATALOG.map((c) => [c.id, c])
) as Record<IconKey, Category>;

export const PKG_BY_ID: Record<string, { pkg: Pkg; cat: Category }> = Object.fromEntries(
  CATALOG.flatMap((cat) => cat.packages.map((pkg) => [pkg.id, { pkg, cat }]))
);

/** Vaste volgorde van categorieën zoals ze in de catalogus staan. */
export const CATEGORY_ORDER: IconKey[] = CATALOG.map((c) => c.id);

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

/**
 * Bouwt op basis van de intake (startpunt + doelen) een geordend,
 * aanbevolen pad door de catalogus. Volgorde volgt CATEGORY_ORDER
 * zodat de klant natuurlijk van boven naar beneden stroomt.
 */
export function journeyFor(stageId: string | null, goalIds: string[]): IconKey[] {
  const set = new Set<IconKey>();
  const stage = STAGES.find((s) => s.id === stageId);
  stage?.boost.forEach((c) => set.add(c));
  for (const gid of goalIds) {
    const goal = GOALS.find((g) => g.id === gid);
    goal?.targets.forEach((c) => set.add(c));
  }
  return CATEGORY_ORDER.filter((c) => set.has(c));
}

/**
 * Conditionele cross-sell: wat gaat er logisch samen met de huidige
 * selectie? Combineert per-pakket `recommends`, optie-triggers én een
 * set slimme globale regels. Categorieën waar al iets uit gekozen is,
 * worden weggelaten.
 */
export function recommendationsFor(
  selectedIds: Set<string>,
  chosenOptions: Record<string, string[]>
): Set<IconKey> {
  const recs = new Set<IconKey>();

  for (const id of selectedIds) {
    PKG_BY_ID[id]?.pkg.recommends?.forEach((r) => recs.add(r));
  }

  for (const cat of CATALOG) {
    for (const opt of cat.options ?? []) {
      for (const val of chosenOptions[opt.id] ?? []) {
        const t = opt.triggers?.[val];
        if (t) recs.add(t);
      }
    }
  }

  const has = (prefix: string) => [...selectedIds].some((id) => id.startsWith(prefix));
  const anySelected = selectedIds.size > 0;

  // Globale flow-regels (conditioneel).
  if (has("brand-")) {
    recs.add("print");
    recs.add("websites");
  }
  if (has("print-")) recs.add("branding");
  if (has("web-") && !has("wapp-")) {
    ["hosting", "support", "seo", "tracking", "funnels"].forEach((c) => recs.add(c as IconKey));
  }
  if (has("shop-")) {
    ["tracking", "seo", "hosting", "support", "funnels"].forEach((c) => recs.add(c as IconKey));
  }
  if (has("wapp-")) {
    ["hosting", "support", "crm", "funnels", "tracking"].forEach((c) => recs.add(c as IconKey));
  }
  if (has("mob-")) {
    ["webapps", "support", "crm"].forEach((c) => recs.add(c as IconKey));
  }
  if (has("org-") || has("ads-")) recs.add("tracking");
  if (has("ads-")) {
    recs.add("seo");
    recs.add("funnels");
  }
  if (has("fun-")) {
    recs.add("crm");
    recs.add("hosting");
  }
  if (anySelected) recs.add("support");

  // Verwijder categorieën waar al iets uit gekozen is.
  for (const id of selectedIds) {
    const entry = PKG_BY_ID[id];
    if (entry) recs.delete(entry.cat.id);
  }

  return recs;
}
