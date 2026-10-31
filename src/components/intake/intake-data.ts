/* ============================================================
   Korte intake: de vragen, keuzes en de logica die van doel en
   uitdaging naar 1–3 passende M7-diensten leidt.
   Teksten { nl, en }. Dienst-slugs komen uit de registry.
   ============================================================ */

import type { IconKey } from "@/components/ui/Icon";
import type { ServiceSlug } from "@/content/registry";
import type { T } from "@/content/types";

export type GoalId = "leads" | "brand" | "web" | "automate" | "found" | "app" | "other";

export interface Opt {
  id: string;
  t: T;
}

export const GOALS: { id: GoalId; icon: IconKey; t: T; d: T }[] = [
  {
    id: "leads",
    icon: "target",
    t: { nl: "Meer aanvragen en leads", en: "More enquiries and leads" },
    d: { nl: "Meer mensen die contact opnemen of kopen.", en: "More people who get in touch or buy." },
  },
  {
    id: "brand",
    icon: "sparkle",
    t: { nl: "Een sterker merk", en: "A stronger brand" },
    d: { nl: "Herkenbaar, consistent en onderscheidend.", en: "Recognisable, consistent and distinctive." },
  },
  {
    id: "web",
    icon: "browser",
    t: { nl: "Nieuwe of betere website of webshop", en: "A new or better website or web shop" },
    d: { nl: "Snel, mooi en makkelijk zelf te beheren.", en: "Fast, good-looking and easy to manage." },
  },
  {
    id: "automate",
    icon: "flow",
    t: { nl: "Processen slimmer maken", en: "Smarter processes" },
    d: { nl: "Minder handwerk met automatisering en AI.", en: "Less manual work with automation and AI." },
  },
  {
    id: "found",
    icon: "search",
    t: { nl: "Beter gevonden worden", en: "Get found more easily" },
    d: { nl: "In Google én in AI-antwoorden.", en: "In Google and in AI answers." },
  },
  {
    id: "app",
    icon: "apps",
    t: { nl: "Een app, portaal of tool", en: "An app, portal or tool" },
    d: { nl: "Software die een concreet probleem oplost.", en: "Software that solves a real problem." },
  },
  {
    id: "other",
    icon: "dots",
    t: { nl: "Iets anders", en: "Something else" },
    d: { nl: "Vertel het ons gewoon.", en: "Just tell us." },
  },
];

/** Uitdagingen per doel, elk met de diensten die we dan aanraden (beste match eerst). */
export const CHALLENGES: Record<Exclude<GoalId, "other">, (Opt & { services: ServiceSlug[] })[]> = {
  leads: [
    {
      id: "traffic",
      t: { nl: "Te weinig bezoekers op de site", en: "Too few visitors to the site" },
      services: ["content-marketing-online-ads", "seo-aeo-geo"],
    },
    {
      id: "convert",
      t: { nl: "Wel bezoekers, maar weinig aanvragen", en: "Visitors, but few enquiries" },
      services: ["configurators-lead-tools-widgets", "websites-webshops", "automation-funnels"],
    },
    {
      id: "quality",
      t: { nl: "Aanvragen zijn niet de juiste", en: "Enquiries aren't the right ones" },
      services: ["automation-funnels", "configurators-lead-tools-widgets"],
    },
    {
      id: "followup",
      t: { nl: "Opvolging gaat handmatig of schiet erbij in", en: "Follow-up is manual or slips through" },
      services: ["automation-funnels", "ai-consultancy"],
    },
    {
      id: "nodata",
      t: { nl: "Geen idee wat werkt (geen data)", en: "No idea what works (no data)" },
      services: ["automation-funnels", "content-marketing-online-ads"],
    },
  ],
  brand: [
    { id: "new", t: { nl: "We beginnen net, er is nog geen merk", en: "We're just starting, no brand yet" }, services: ["branding-rebranding", "websites-webshops"] },
    { id: "dated", t: { nl: "Ons merk voelt verouderd", en: "Our brand feels dated" }, services: ["branding-rebranding", "websites-webshops"] },
    {
      id: "inconsistent",
      t: { nl: "Iedereen doet maar wat, geen eenheid", en: "Everyone does their own thing" },
      services: ["branding-rebranding", "grafisch-ontwerp-print"],
    },
    {
      id: "pivot",
      t: { nl: "We zijn gegroeid of van koers veranderd", en: "We've grown or changed course" },
      services: ["branding-rebranding", "content-marketing-online-ads"],
    },
    {
      id: "visual",
      t: { nl: "We missen goede beelden en content", en: "We lack good visuals and content" },
      services: ["foto-video-3d-animatie", "content-marketing-online-ads"],
    },
  ],
  web: [
    { id: "none", t: { nl: "Ik heb nog geen website", en: "I don't have a website yet" }, services: ["websites-webshops", "branding-rebranding"] },
    { id: "old", t: { nl: "Mijn site is verouderd", en: "My site is outdated" }, services: ["websites-webshops", "seo-aeo-geo"] },
    { id: "sell", t: { nl: "Ik wil online verkopen", en: "I want to sell online" }, services: ["websites-webshops", "content-marketing-online-ads"] },
    { id: "cms", t: { nl: "Zelf aanpassen is lastig", en: "Editing it myself is a hassle" }, services: ["websites-webshops"] },
    {
      id: "slow",
      t: { nl: "Site is traag of geeft problemen", en: "Site is slow or causing trouble" },
      services: ["websites-webshops", "seo-aeo-geo"],
    },
  ],
  automate: [
    {
      id: "manual",
      t: { nl: "Veel handwerk en dubbel invoeren", en: "Lots of manual work and double entry" },
      services: ["automation-funnels", "ai-consultancy"],
    },
    {
      id: "systems",
      t: { nl: "Systemen praten niet met elkaar", en: "Systems don't talk to each other" },
      services: ["web-apps-portals-apps", "automation-funnels"],
    },
    {
      id: "quotes",
      t: { nl: "Offertes en aanvragen kosten veel tijd", en: "Quotes and requests take too long" },
      services: ["configurators-lead-tools-widgets", "automation-funnels"],
    },
    { id: "ai", t: { nl: "Benieuwd wat AI voor ons kan doen", en: "Curious what AI can do for us" }, services: ["ai-consultancy"] },
    { id: "insight", t: { nl: "Geen overzicht in onze data", en: "No overview of our data" }, services: ["web-apps-portals-apps", "ai-consultancy"] },
  ],
  found: [
    { id: "google", t: { nl: "We zijn onvindbaar in Google", en: "We're invisible in Google" }, services: ["seo-aeo-geo", "content-marketing-online-ads"] },
    { id: "competitor", t: { nl: "De concurrent staat boven ons", en: "Competitors rank above us" }, services: ["seo-aeo-geo", "content-marketing-online-ads"] },
    {
      id: "ai",
      t: { nl: "We komen niet voor in AI-antwoorden", en: "We don't show up in AI answers" },
      services: ["seo-aeo-geo", "ai-consultancy"],
    },
    { id: "local", t: { nl: "Lokaal beter gevonden worden", en: "Get found locally" }, services: ["seo-aeo-geo"] },
    {
      id: "drop",
      t: { nl: "Ons verkeer is ingezakt", en: "Our traffic has dropped" },
      services: ["seo-aeo-geo", "websites-webshops"],
    },
  ],
  app: [
    {
      id: "portal",
      t: { nl: "Klanten willen zelf dingen regelen", en: "Customers want self-service" },
      services: ["web-apps-portals-apps"],
    },
    { id: "internal", t: { nl: "We hebben een interne tool of dashboard nodig", en: "We need an internal tool or dashboard" }, services: ["web-apps-portals-apps", "ai-consultancy"] },
    { id: "idea", t: { nl: "Ik heb een idee voor een app of SaaS", en: "I have an idea for an app or SaaS" }, services: ["web-apps-portals-apps", "branding-rebranding"] },
    {
      id: "configurator",
      t: { nl: "Een configurator of calculator voor klanten", en: "A configurator or calculator for customers" },
      services: ["configurators-lead-tools-widgets", "websites-webshops"],
    },
    {
      id: "integrations",
      t: { nl: "Koppelingen tussen systemen", en: "Integrations between systems" },
      services: ["web-apps-portals-apps", "automation-funnels"],
    },
  ],
};

/** Waarom deze dienst past (één regel op de aanbevelingskaart). */
export const SERVICE_PITCH: Record<ServiceSlug, T> = {
  "branding-rebranding": { nl: "Een merk met een helder verhaal en een strakke huisstijl.", en: "A brand with a clear story and a sharp identity." },
  "websites-webshops": { nl: "Een snelle site of webshop die je zelf beheert.", en: "A fast site or shop you can manage yourself." },
  "web-apps-portals-apps": { nl: "Portalen, apps en tools die werk uit handen nemen.", en: "Portals, apps and tools that take work off your hands." },
  "automation-funnels": { nl: "Funnels, CRM en e-mail die vanzelf opvolgen.", en: "Funnels, CRM and email that follow up on their own." },
  "seo-aeo-geo": { nl: "Gevonden worden in Google én in AI-antwoorden.", en: "Get found in Google and in AI answers." },
  "content-marketing-online-ads": { nl: "Content en campagnes die de juiste mensen bereiken.", en: "Content and campaigns that reach the right people." },
  "foto-video-3d-animatie": { nl: "Beeld dat blijft hangen: foto, film, 3D en motion.", en: "Visuals that stick: photo, film, 3D and motion." },
  "grafisch-ontwerp-print": { nl: "Drukwerk en ontwerp dat klopt tot in de puntjes.", en: "Print and design that's right down to the detail." },
  "configurators-lead-tools-widgets": { nl: "Configurators en calculators die bezoekers omzetten in aanvragen.", en: "Configurators and calculators that turn visitors into leads." },
  "ai-consultancy": { nl: "AI die echt werk scheelt, nuchter ingezet.", en: "AI that actually saves work, applied with common sense." },
};

export interface SpecQ {
  id: string;
  q: T;
  multi?: boolean;
  options: Opt[];
}

const DONT_KNOW: Opt = { id: "unknown", t: { nl: "Geen idee", en: "Not sure" } };

/** 2–3 snelle vervolgvragen per dienst. Alles optioneel. */
export const SPECIFICS: Record<ServiceSlug, SpecQ[]> = {
  "websites-webshops": [
    {
      id: "kind",
      q: { nl: "Wat wordt het?", en: "What will it be?" },
      options: [
        { id: "new", t: { nl: "Nieuwe website", en: "New website" } },
        { id: "redo", t: { nl: "Website vernieuwen", en: "Rebuild my website" } },
        { id: "shop", t: { nl: "Webshop", en: "Web shop" } },
        { id: "both", t: { nl: "Website + webshop", en: "Website + web shop" } },
      ],
    },
    {
      id: "pages",
      q: { nl: "Hoeveel pagina's ongeveer?", en: "Roughly how many pages?" },
      options: [
        { id: "1-5", t: { nl: "1 tot 5", en: "1 to 5" } },
        { id: "5-15", t: { nl: "5 tot 15", en: "5 to 15" } },
        { id: "15-40", t: { nl: "15 tot 40", en: "15 to 40" } },
        { id: "40+", t: { nl: "Meer dan 40", en: "More than 40" } },
        DONT_KNOW,
      ],
    },
    {
      id: "cms",
      q: { nl: "Voorkeur voor een platform?", en: "Platform preference?" },
      options: [
        { id: "webflow", t: { nl: "Webflow", en: "Webflow" } },
        { id: "wordpress", t: { nl: "WordPress", en: "WordPress" } },
        { id: "shopify", t: { nl: "Shopify", en: "Shopify" } },
        { id: "unknown", t: { nl: "Geen idee, adviseer me", en: "No idea, advise me" } },
      ],
    },
  ],
  "branding-rebranding": [
    {
      id: "kind",
      q: { nl: "Waar sta je?", en: "Where are you now?" },
      options: [
        { id: "new", t: { nl: "Nieuw merk", en: "New brand" } },
        { id: "rebrand", t: { nl: "Rebrand", en: "Rebrand" } },
        { id: "refresh", t: { nl: "Opfrissen", en: "Refresh" } },
      ],
    },
    {
      id: "parts",
      q: { nl: "Welke onderdelen heb je nodig?", en: "Which parts do you need?" },
      multi: true,
      options: [
        { id: "strategy", t: { nl: "Merkstrategie", en: "Brand strategy" } },
        { id: "name", t: { nl: "Naam", en: "Name" } },
        { id: "logo", t: { nl: "Logo", en: "Logo" } },
        { id: "identity", t: { nl: "Huisstijl", en: "Visual identity" } },
        { id: "tov", t: { nl: "Tone of voice", en: "Tone of voice" } },
        { id: "brandbook", t: { nl: "Brandbook", en: "Brand book" } },
      ],
    },
  ],
  "web-apps-portals-apps": [
    {
      id: "kind",
      q: { nl: "Wat voor oplossing?", en: "What kind of solution?" },
      options: [
        { id: "portal", t: { nl: "Klantportaal", en: "Customer portal" } },
        { id: "internal", t: { nl: "Interne tool of dashboard", en: "Internal tool or dashboard" } },
        { id: "mobile", t: { nl: "Mobiele app", en: "Mobile app" } },
        { id: "saas", t: { nl: "SaaS-platform", en: "SaaS platform" } },
        { id: "mvp", t: { nl: "Eerst een MVP", en: "An MVP first" } },
      ],
    },
    {
      id: "users",
      q: { nl: "Wie gaat het gebruiken?", en: "Who will use it?" },
      options: [
        { id: "customers", t: { nl: "Klanten", en: "Customers" } },
        { id: "staff", t: { nl: "Medewerkers", en: "Staff" } },
        { id: "both", t: { nl: "Allebei", en: "Both" } },
      ],
    },
    {
      id: "integrations",
      q: { nl: "Moet het koppelen met andere systemen?", en: "Does it need to connect to other systems?" },
      options: [
        { id: "yes", t: { nl: "Ja", en: "Yes" } },
        { id: "no", t: { nl: "Nee", en: "No" } },
        { id: "unknown", t: { nl: "Weet ik nog niet", en: "Not sure yet" } },
      ],
    },
  ],
  "automation-funnels": [
    {
      id: "focus",
      q: { nl: "Waar wil je mee aan de slag?", en: "What do you want to work on?" },
      multi: true,
      options: [
        { id: "email", t: { nl: "E-mailmarketing", en: "Email marketing" } },
        { id: "funnels", t: { nl: "Funnels en landingspagina's", en: "Funnels and landing pages" } },
        { id: "crm", t: { nl: "CRM", en: "CRM" } },
        { id: "workflows", t: { nl: "Workflows automatiseren", en: "Automating workflows" } },
        { id: "tracking", t: { nl: "Tracking en analytics", en: "Tracking and analytics" } },
      ],
    },
    {
      id: "crm",
      q: { nl: "Gebruik je al een CRM?", en: "Do you already use a CRM?" },
      options: [
        { id: "yes", t: { nl: "Ja", en: "Yes" } },
        { id: "no", t: { nl: "Nee", en: "No" } },
        { id: "spreadsheet", t: { nl: "Een Excel-lijstje telt ook", en: "A spreadsheet, does that count?" } },
      ],
    },
  ],
  "seo-aeo-geo": [
    {
      id: "focus",
      q: { nl: "Waar wil je gevonden worden?", en: "Where do you want to be found?" },
      multi: true,
      options: [
        { id: "google", t: { nl: "Google", en: "Google" } },
        { id: "ai", t: { nl: "AI-antwoorden (ChatGPT e.d.)", en: "AI answers (ChatGPT etc.)" } },
        { id: "local", t: { nl: "Lokaal / Google Maps", en: "Local / Google Maps" } },
        { id: "international", t: { nl: "Internationaal", en: "Internationally" } },
      ],
    },
    {
      id: "start",
      q: { nl: "Wat is het startpunt?", en: "What's the starting point?" },
      options: [
        { id: "existing", t: { nl: "Bestaande site", en: "Existing site" } },
        { id: "new", t: { nl: "Nieuwe site in de maak", en: "New site in progress" } },
        { id: "migration", t: { nl: "Na of voor een migratie", en: "Around a migration" } },
      ],
    },
  ],
  "content-marketing-online-ads": [
    {
      id: "channels",
      q: { nl: "Welke kanalen?", en: "Which channels?" },
      multi: true,
      options: [
        { id: "google", t: { nl: "Google Ads", en: "Google Ads" } },
        { id: "meta", t: { nl: "Meta (Facebook, Instagram)", en: "Meta (Facebook, Instagram)" } },
        { id: "linkedin", t: { nl: "LinkedIn", en: "LinkedIn" } },
        { id: "tiktok", t: { nl: "TikTok", en: "TikTok" } },
        { id: "organic", t: { nl: "Social organisch", en: "Organic social" } },
        { id: "blog", t: { nl: "Blogs en content", en: "Blogs and content" } },
      ],
    },
    {
      id: "help",
      q: { nl: "Wat mogen wij doen?", en: "What should we do?" },
      options: [
        { id: "strategy", t: { nl: "Strategie bepalen", en: "Set the strategy" } },
        { id: "create", t: { nl: "Content maken", en: "Create content" } },
        { id: "manage", t: { nl: "Campagnes beheren", en: "Manage campaigns" } },
        { id: "all", t: { nl: "Het hele pakket", en: "The whole lot" } },
      ],
    },
  ],
  "foto-video-3d-animatie": [
    {
      id: "what",
      q: { nl: "Wat heb je nodig?", en: "What do you need?" },
      multi: true,
      options: [
        { id: "film", t: { nl: "Bedrijfsfilm", en: "Company film" } },
        { id: "product", t: { nl: "Productfoto's", en: "Product photos" } },
        { id: "social", t: { nl: "Social video's", en: "Social videos" } },
        { id: "3d", t: { nl: "3D of animatie", en: "3D or animation" } },
        { id: "drone", t: { nl: "Drone", en: "Drone" } },
      ],
    },
    {
      id: "use",
      q: { nl: "Waar ga je het inzetten?", en: "Where will you use it?" },
      multi: true,
      options: [
        { id: "web", t: { nl: "Website", en: "Website" } },
        { id: "social", t: { nl: "Social", en: "Social" } },
        { id: "ads", t: { nl: "Advertenties", en: "Ads" } },
        { id: "internal", t: { nl: "Intern of op beurzen", en: "Internal or at trade fairs" } },
      ],
    },
  ],
  "grafisch-ontwerp-print": [
    {
      id: "what",
      q: { nl: "Wat mogen we ontwerpen?", en: "What should we design?" },
      multi: true,
      options: [
        { id: "stationery", t: { nl: "Visitekaartjes en drukwerk", en: "Business cards and stationery" } },
        { id: "brochure", t: { nl: "Brochure of magazine", en: "Brochure or magazine" } },
        { id: "packaging", t: { nl: "Verpakking", en: "Packaging" } },
        { id: "signing", t: { nl: "Beurs en signing", en: "Trade fair and signage" } },
        { id: "deck", t: { nl: "Presentatie of pitchdeck", en: "Presentation or pitch deck" } },
      ],
    },
    {
      id: "print",
      q: { nl: "Zullen wij het drukwerk regelen?", en: "Shall we arrange the printing?" },
      options: [
        { id: "yes", t: { nl: "Ja graag", en: "Yes please" } },
        { id: "no", t: { nl: "Nee, alleen ontwerp", en: "No, design only" } },
      ],
    },
  ],
  "configurators-lead-tools-widgets": [
    {
      id: "kind",
      q: { nl: "Welk type tool?", en: "What type of tool?" },
      options: [
        { id: "product", t: { nl: "Productconfigurator", en: "Product configurator" } },
        { id: "quote", t: { nl: "Offerte- of prijscalculator", en: "Quote or price calculator" } },
        { id: "quiz", t: { nl: "Keuzehulp of quiz", en: "Product finder or quiz" } },
        { id: "booking", t: { nl: "Boekings- of afsprakentool", en: "Booking tool" } },
        { id: "3d", t: { nl: "3D-configurator", en: "3D configurator" } },
      ],
    },
    {
      id: "connect",
      q: { nl: "Waar moet het mee praten?", en: "What should it connect to?" },
      multi: true,
      options: [
        { id: "shop", t: { nl: "Webshop", en: "Web shop" } },
        { id: "crm", t: { nl: "CRM", en: "CRM" } },
        { id: "quotes", t: { nl: "Offertesysteem", en: "Quoting system" } },
        { id: "none", t: { nl: "Nog niets", en: "Nothing yet" } },
      ],
    },
  ],
  "ai-consultancy": [
    {
      id: "processes",
      q: { nl: "Welke processen wil je slimmer maken?", en: "Which processes should get smarter?" },
      multi: true,
      options: [
        { id: "service", t: { nl: "Klantenservice en chat", en: "Customer service and chat" } },
        { id: "docs", t: { nl: "Offertes en documenten", en: "Quotes and documents" } },
        { id: "content", t: { nl: "Content maken", en: "Content creation" } },
        { id: "data", t: { nl: "Data en rapportages", en: "Data and reporting" } },
        { id: "knowledge", t: { nl: "Interne kennis", en: "Internal knowledge" } },
      ],
    },
    {
      id: "stage",
      q: { nl: "Hoe ver ben je al met AI?", en: "How far along are you with AI?" },
      options: [
        { id: "none", t: { nl: "Nog niet begonnen", en: "Not started yet" } },
        { id: "trying", t: { nl: "We experimenteren", en: "We're experimenting" } },
        { id: "scale", t: { nl: "We willen opschalen", en: "We want to scale up" } },
      ],
    },
  ],
};

export const TIMING: Opt[] = [
  { id: "asap", t: { nl: "Zo snel mogelijk", en: "As soon as possible" } },
  { id: "1-3m", t: { nl: "Binnen 1 tot 3 maanden", en: "Within 1 to 3 months" } },
  { id: "3-6m", t: { nl: "Over 3 tot 6 maanden", en: "In 3 to 6 months" } },
  { id: "unknown", t: { nl: "Nog geen idee", en: "No idea yet" } },
];

export const BUDGET: Opt[] = [
  { id: "<2.5k", t: { nl: "Tot € 2.500", en: "Up to € 2,500" } },
  { id: "2.5-7.5k", t: { nl: "€ 2.500 tot € 7.500", en: "€ 2,500 to € 7,500" } },
  { id: "7.5-15k", t: { nl: "€ 7.500 tot € 15.000", en: "€ 7,500 to € 15,000" } },
  { id: "15-30k", t: { nl: "€ 15.000 tot € 30.000", en: "€ 15,000 to € 30,000" } },
  { id: ">30k", t: { nl: "Meer dan € 30.000", en: "More than € 30,000" } },
  { id: "unknown", t: { nl: "Nog geen idee", en: "No idea yet" } },
];

export const MOMENTS: Opt[] = [
  { id: "morning", t: { nl: "Ochtend", en: "Morning" } },
  { id: "afternoon", t: { nl: "Middag", en: "Afternoon" } },
  { id: "late", t: { nl: "Eind van de dag", en: "End of the day" } },
  { id: "any", t: { nl: "Maakt niet uit", en: "Any time" } },
];

/** Aanbevolen diensten voor doel + uitdaging (max. 3, beste match eerst). */
export function recommend(goal: GoalId | "", challenge: string): ServiceSlug[] {
  if (!goal || goal === "other") return [];
  const c = CHALLENGES[goal].find((x) => x.id === challenge);
  return (c?.services ?? []).slice(0, 3);
}
