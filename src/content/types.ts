/* ============================================================
   M7 content model — types.
   Alle content is getypeerd en cross-referenced via slugs.
   Een typefout in een slug (bv. een dienst die niet bestaat)
   breekt de build, zodat links nooit dood lopen.
   ============================================================ */

import type {
  ApplicationSlug,
  SectorSlug,
  ServiceSlug,
} from "./registry";
import type { ToolSlug } from "./tools";
import type { IconKey } from "@/components/ui/Icon";
import type { MockupKey } from "@/components/mockups/keys";

export type Locale = "nl" | "en";
export const LOCALES: Locale[] = ["nl", "en"];

/** Vertaalde tekst. NL is leidend, EN is de vertaling. */
export type T = { nl: string; en: string };
/** Vertaalde lijst. */
export type TList = { nl: string[]; en: string[] };

export interface FAQ {
  q: T;
  /** Antwoord. Alinea's scheiden met een lege regel (\n\n). */
  a: T;
}

export interface TextSection {
  h: T;
  /** Alinea's scheiden met \n\n. Regels die met "- " beginnen worden een lijst. */
  body: T;
}

/**
 * Rustige content-sectie tussen de blokken door (extra SEO in de nuchtere
 * Brabantse M7-toon). In `body` kun je een dienst of toepassing als
 * klikbaar label met icoon opnemen: [[websites-webshops]] of
 * [[webflow-website|eigen label]].
 */
export interface Chapter {
  /** Korte Engelse kicker / mini-quote boven de kop (optioneel), bv. "No nonsense.". */
  kicker?: T;
  h: T;
  /** Alinea's (\n\n), lijsten ("- ") en inline labels ([[slug]]). */
  body: T;
  /** Optionele pull-quote die groot naast de tekst komt. */
  quote?: T;
}

export interface Step {
  title: T;
  text: T;
}

export interface Highlight {
  value: string;
  label: T;
}

export interface Benefit {
  title: T;
  text: T;
}

/* ---------- Dienst (peiler / kapstok) ---------- */
export interface Service {
  slug: ServiceSlug;
  /** Volgorde in menu's en overzichten. */
  order: number;
  /** H1 / volledige naam, bv. "Branding & Rebranding". */
  title: T;
  /** Korte label voor menu's en folders, bv. "Branding". */
  short: T;
  /** Accentkleur van de peiler (folder-tab, glows, mockup). */
  color: string;
  icon: IconKey;
  /** Welke unieke geanimeerde mockup bij deze peiler hoort. */
  mockup: MockupKey;
  /** Korte Engelse quote / payoff (groot getoond). */
  tagline: T;
  /** Lead: 1-2 zinnen. */
  intro: T;
  /** Uitgebreidere omschrijving (1-2 alinea's). */
  description: T;
  highlights: Highlight[];
  /** Relevante termen / keywords als chips, bv. "Webflow", "Hosting". */
  terms: string[];
  /** Tools die we gebruiken (met iconen). */
  tools: ToolSlug[];
  /** Werkwijze voor deze dienst. */
  process: Step[];
  /** Extra content-secties die tussen de blokken van de dienstpagina komen. */
  chapters?: Chapter[];
  /** SEO-tekst onderaan de pagina. */
  seo: { title: T; sections: TextSection[] };
  /** Uitgebreide FAQ (GEO / AEO). */
  faqs: FAQ[];
  metaTitle: T;
  metaDescription: T;
  /** Gerelateerde diensten (cross-sell). */
  related: ServiceSlug[];
  /** Categorie-id's in de letsgo-configurator. */
  configurator?: string[];
  /** Optioneel pad op answers.m7branding.com voor deze dienst. */
  answersPath?: string;
  /** Eigen media die de geanimeerde mockup vervangt (Lottie JSON, video of afbeelding). */
  media?: Media;
}

/* ---------- Toepassing (gekoppeld onder een dienst) ---------- */
export interface Application {
  slug: ApplicationSlug;
  service: ServiceSlug;
  title: T;
  /** One-liner voor kaarten en sliders. */
  summary: T;
  intro: T;
  body: TextSection[];
  deliverables: TList;
  benefits: Benefit[];
  tools: ToolSlug[];
  /** Gerelateerde toepassingen (mag over diensten heen). */
  related: ApplicationSlug[];
  faqs: FAQ[];
  metaTitle?: T;
  metaDescription: T;
  media?: Media;
}

/* ---------- Sector ---------- */
export interface Sector {
  slug: SectorSlug;
  title: T;
  short: T;
  icon: IconKey;
  /** Breed beeld (bij voorkeur eigen werk uit deze sector) dat bij het scrollen openschuift. */
  image?: string;
  /** object-position van het beeld, bv. "50% 30%". */
  imagePosition?: string;
  /** Korte (Engelse) quote die over het beeld verschijnt. */
  quote?: T;
  intro: T;
  description: T;
  challenges: Benefit[];
  services: ServiceSlug[];
  applications: ApplicationSlug[];
  faqs: FAQ[];
  metaTitle: T;
  metaDescription: T;
}

/* ---------- Case-verhaal (vrij op te bouwen blokken) ---------- */
export interface StoryImage {
  src: string;
  alt?: T;
  caption?: T;
}

export type StoryBlock =
  /** Introductie of statement over het project, groot in beeld. */
  | { type: "intro"; kicker?: T; text: T }
  /** Tekstsectie: kop links, tekst rechts. Inline dienst-labels mogen: [[slug]]. */
  | { type: "text"; kicker?: T; h: T; body: T; quote?: T }
  /** Schermvullende masonry-galerij (beelden in hun eigen verhouding). */
  | { type: "masonry"; images: StoryImage[] }
  /** Eén breed beeld of video dat bij het scrollen openvouwt, optioneel met quote erop. */
  | { type: "media"; image?: string; video?: string; poster?: string; position?: string; quote?: T }
  /** Grote quote, bv. van de klant. */
  | { type: "quote"; text: T; cite?: string; role?: T; avatar?: string }
  /** Beeld naast tekst. */
  | { type: "split"; image: string; kicker?: T; h: T; body: T; reverse?: boolean }
  /** Mijlpalen (met datum/fase) of een checklist van wat we opleverden. */
  | { type: "timeline"; title?: T; style?: "timeline" | "checklist"; items: { label: T; text?: T; date?: string }[] }
  /** De resultaten (`results`) als grote cijfers. */
  | { type: "results" };

/* ---------- Case / project ---------- */
export interface Case {
  slug: string;
  client: string;
  title: T;
  summary: T;
  year: number;
  sector: SectorSlug;
  services: ServiceSlug[];
  applications: ApplicationSlug[];
  tools: ToolSlug[];
  /** Hoofdbeeld. Zonder beeld genereert de site een cover in `color`. */
  cover?: string;
  gallery?: string[];
  color: string;
  challenge: T;
  approach: T;
  result: T;
  results?: Highlight[];
  url?: string;
  /** Uitgelicht (home, menu, grote tegel in masonry). */
  featured?: boolean;
  /** Vorm in de masonry-grid. */
  shape?: "tall" | "wide" | "square";
  review?: string;
  /** Concepttekst: nog verifiëren / aanvullen met echte projectinfo. */
  concept?: boolean;
  /** Schermvullende hero-achtergrond (beeld of video, met donkere overlay). Zonder hero: de cover. */
  hero?: { image?: string; video?: string; poster?: string; position?: string };
  /** Optionele video (of beeld) die na de hero omhoog schuift en meegroeit bij het scrollen. */
  reveal?: { video?: string; image?: string; poster?: string; position?: string };
  /**
   * Het verhaal van het project: tekst, masonry-galerijen, quotes, beeld en
   * een tijdlijn, in vrije volgorde. Zonder story bouwt de pagina er zelf
   * een op uit challenge, approach, result, beelden en review.
   */
  story?: StoryBlock[];
}

/* ---------- Review ---------- */
export interface Review {
  id: string;
  author: string;
  role: T;
  company: string;
  avatar?: string;
  quote: T;
  services: ServiceSlug[];
  case?: string;
  rating?: number;
  /** Concept-review: alleen zichtbaar in development of met NEXT_PUBLIC_SHOW_DRAFTS=1. */
  draft?: boolean;
}

/* ---------- Team ---------- */
export interface TeamMember {
  name: string;
  role: T;
  photo: string;
  /** Leuk detail voor de hover-kaart. */
  fun?: T;
  linkedin?: string;
}

/* ---------- Media (eigen assets) ---------- */
export type Media =
  /** Scroll-gestuurde frame-reeks (zie scripts/sequence.mjs), bv. de Lotties van /home-2. */
  | { type: "sequence"; src: string }
  | { type: "lottie"; src: string; poster?: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string; alt?: T };
