/* ============================================================
   Hero-media van de overzichtspagina's (diensten, toepassingen,
   sectoren, cases): de afgeronde beeldsectie bovenaan (MediaHero).
   ============================================================ */

import { paths } from "@/lib/paths";
import { officePhoto, officePhotos } from "./office";
import type { T } from "./types";

/**
 * Een korte videoloop met echte beelden.
 * Zet de bestanden in /public/media/hero/<pagina>/ en vul ze hieronder in bij `clips`, bv.
 *   { src: "/media/hero/diensten/studio.mp4", poster: "/media/hero/diensten/studio.webp", label: { nl: "In de studio", en: "In the studio" } }
 * Tip: 6 tot 12 seconden per clip, zonder geluid, 1920px breed, H.264 (mp4) of VP9 (webm), liefst < 4 MB.
 * De clips spelen één voor één (gemuted, inline) en vloeien over op het einde of na `clipMaxSeconds`.
 * Een poster (eerste frame als webp/jpg) zorgt dat er meteen beeld staat terwijl de clip laadt.
 */
export interface HeroClip {
  src: string;
  poster?: string;
  label?: T;
  /** Optioneel: het bijschrift linkt hierheen (intern NL-pad). */
  href?: string;
}

/**
 * Een foto als terugval zolang er geen clips zijn: rouleert met een trage Ken Burns-beweging.
 * `pos` = object-position op brede schermen, `posM` op mobiel (staand).
 * `tone: "light"` voor lichte screenshots: die worden iets extra gedimd.
 */
export interface HeroStill {
  src: string;
  srcSm?: string;
  w: number;
  h: number;
  label: T;
  pos?: string;
  posM?: string;
  tone?: "light";
  /** Optioneel: het bijschrift linkt hierheen (intern NL-pad, bv. de case of sector). */
  href?: string;
}

export type HeroMediaPage = "services" | "applications" | "sectors" | "cases";

/** Hoe lang elke foto in beeld blijft (s) en hoe lang een clip maximaal speelt (s). */
export const heroMediaTiming = { stillSeconds: 6.5, clipMaxSeconds: 10 };

const C = "/media/cases";
const S = "/media/sector-tiles";
const PP = "/media/showcase/plentyplanet";
/** Uitsneden voor de hero (zonder de kop- en voetregels van de brandbookpagina's). */
const H = "/media/hero";

/** Kantoorfoto uit office.ts (met kleine variant voor mobiel). */
function office(name: string, label: T, pos?: string, posM?: string, href?: string): HeroStill {
  const p = officePhotos.find((o) => o.name === name);
  if (!p) throw new Error(`hero-media: onbekende kantoorfoto ${name}`);
  return { src: officePhoto(p, "lg"), srcSm: officePhoto(p, "sm"), w: p.w, h: p.h, label, pos, posM, href };
}

/**
 * Per pagina: `clips` (leeg tot de video's er zijn; zodra er één clip staat, vervangen de clips de foto's)
 * en `stills` (echte projectbeelden en kantoorfoto's die bij de pagina passen).
 */
export const heroMedia: Record<HeroMediaPage, { clips: HeroClip[]; stills: HeroStill[] }> = {
  /* /diensten: van merk tot software, plus de studio waar het gebeurt */
  services: {
    clips: [
      { src: "/media/hero/clips/code-ui.mp4", poster: "/media/hero/clips/code-ui.webp", label: { nl: "Code en interfaces", en: "Code and interfaces" } },
      { src: "/media/hero/clips/schets-motion.mp4", poster: "/media/hero/clips/schets-motion.webp", label: { nl: "Schetsen en motion design", en: "Sketching and motion design" } },
      { src: "/media/hero/clips/foto-web.mp4", poster: "/media/hero/clips/foto-web.webp", label: { nl: "Fotografie en webdesign", en: "Photography and web design" } },
      { src: "/media/hero/clips/studio.mp4", poster: "/media/hero/clips/studio.webp", label: { nl: "In de studio", en: "In the studio" } },
    ],
    stills: [
      office("kantoor-werkplekken", { nl: "Onze studio in Nistelrode", en: "Our studio in Nistelrode" }, "50% 45%", "62% 50%", paths.about),
      { src: `${C}/teamtv-tablet-dark.webp`, w: 1800, h: 1350, label: { nl: "TeamTV · web-app", en: "TeamTV · web app" }, pos: "50% 45%", posM: "45% 50%", href: paths.case("teamtv") },
      { src: `${PP}/greencorridor3.webp`, w: 1600, h: 893, label: { nl: "Plenty Planet · 3D-visualisatie", en: "Plenty Planet · 3D visualisation" }, pos: "50% 50%", posM: "62% 50%", href: paths.service("foto-video-3d-animatie") },
      { src: `${S}/bctn-control-tower.webp`, w: 1600, h: 1075, label: { nl: "BCTN · AI Control Tower (concept)", en: "BCTN · AI Control Tower (concept)" }, pos: "50% 35%", posM: "40% 40%", href: paths.service("ai-consultancy") },
      { src: `${C}/jurgh-tablet.webp`, w: 1600, h: 1067, label: { nl: "JURGH Detailing · website", en: "JURGH Detailing · website" }, pos: "50% 45%", posM: "55% 50%", href: paths.case("jurgh-detailing") },
    ],
  },
  /* /toepassingen: concrete tools en schermen */
  applications: {
    clips: [
      { src: "/media/hero/clips/wireframe.mp4", poster: "/media/hero/clips/wireframe.webp", label: { nl: "Van schets tot website", en: "From sketch to website" } },
      { src: "/media/hero/clips/code-ui.mp4", poster: "/media/hero/clips/code-ui.webp", label: { nl: "Code en interfaces", en: "Code and interfaces" } },
      { src: "/media/hero/clips/foto-web.mp4", poster: "/media/hero/clips/foto-web.webp", label: { nl: "Fotografie en webdesign", en: "Photography and web design" } },
    ],
    stills: [
      { src: `${S}/bctn-control-tower.webp`, w: 1600, h: 1075, label: { nl: "BCTN · AI Control Tower (concept)", en: "BCTN · AI Control Tower (concept)" }, pos: "50% 35%", posM: "40% 40%", href: paths.service("ai-consultancy") },
      { src: `${S}/steddion-configurator.webp`, w: 1440, h: 900, label: { nl: "Steddion · Energy Property Configurator", en: "Steddion · Energy Property Configurator" }, pos: "60% 40%", posM: "58% 40%", tone: "light", href: paths.service("configurators-lead-tools-widgets") },
      { src: `${C}/teamtv-devices.webp`, w: 2400, h: 1600, label: { nl: "TeamTV · web-app en website", en: "TeamTV · web app and website" }, pos: "50% 45%", posM: "58% 45%", href: paths.case("teamtv") },
      { src: `${C}/debiteurnet-imac.webp`, w: 2400, h: 1800, label: { nl: "Debiteurnet · klantportaal", en: "Debiteurnet · client portal" }, pos: "50% 40%", posM: "50% 40%", tone: "light", href: paths.case("debiteurnet") },
      { src: `${C}/sami-devices.webp`, w: 1500, h: 1125, label: { nl: "Sami · SaaS-platform", en: "Sami · SaaS platform" }, pos: "50% 40%", posM: "40% 50%", tone: "light", href: paths.case("sami") },
    ],
  },
  /* /sectoren: per beeld een andere branche */
  sectors: {
    clips: [
      { src: "/media/hero/clips/studio.mp4", poster: "/media/hero/clips/studio.webp", label: { nl: "In de studio", en: "In the studio" } },
      { src: "/media/hero/clips/foto-web.mp4", poster: "/media/hero/clips/foto-web.webp", label: { nl: "Fotografie en webdesign", en: "Photography and web design" } },
      { src: "/media/hero/clips/wireframe.mp4", poster: "/media/hero/clips/wireframe.webp", label: { nl: "Van schets tot website", en: "From sketch to website" } },
    ],
    stills: [
      { src: `${C}/jurgh-porsche.webp`, w: 2048, h: 1366, label: { nl: "Automotive · JURGH Detailing", en: "Automotive · JURGH Detailing" }, pos: "50% 45%", posM: "52% 50%", href: paths.sector("automotive-mobiliteit") },
      { src: `${PP}/greenecocorridor.webp`, w: 1600, h: 893, label: { nl: "Energie & duurzaamheid · Plenty Planet", en: "Energy & sustainability · Plenty Planet" }, pos: "50% 50%", posM: "60% 50%", href: paths.sector("energie-duurzaamheid") },
      { src: `${C}/teamtv-devices.webp`, w: 2400, h: 1600, label: { nl: "Sport & media · TeamTV", en: "Sports & media · TeamTV" }, pos: "50% 45%", posM: "58% 45%", href: paths.sector("sport-media") },
      { src: `${H}/designershouse-interieur.webp`, w: 1034, h: 469, label: { nl: "Interieur & architectuur · DesignersHouse", en: "Interiors & architecture · DesignersHouse" }, pos: "50% 55%", posM: "45% 55%", href: paths.sector("interieur-architectuur") },
      { src: `${C}/debiteurnet-imac.webp`, w: 2400, h: 1800, label: { nl: "Zakelijke dienstverlening · Debiteurnet", en: "Business services · Debiteurnet" }, pos: "50% 40%", posM: "50% 40%", tone: "light", href: paths.sector("zakelijke-dienstverlening") },
      { src: `${C}/sami-devices.webp`, w: 1500, h: 1125, label: { nl: "Tech & SaaS · Sami", en: "Tech & SaaS · Sami" }, pos: "50% 40%", posM: "40% 50%", tone: "light", href: paths.sector("tech-saas-startups") },
      { src: `${S}/bctn-control-tower.webp`, w: 1600, h: 1075, label: { nl: "Transport & logistiek · BCTN (concept)", en: "Transport & logistics · BCTN (concept)" }, pos: "50% 35%", posM: "40% 40%", href: paths.sector("transport-logistiek") },
    ],
  },
  /* /cases: de hero-beelden van de cases zelf */
  cases: {
    clips: [
      { src: "/media/hero/clips/foto-web.mp4", poster: "/media/hero/clips/foto-web.webp", label: { nl: "Fotografie en webdesign", en: "Photography and web design" } },
      { src: "/media/hero/clips/wireframe.mp4", poster: "/media/hero/clips/wireframe.webp", label: { nl: "Van schets tot website", en: "From sketch to website" } },
      { src: "/media/hero/clips/schets-motion.mp4", poster: "/media/hero/clips/schets-motion.webp", label: { nl: "Schetsen en motion design", en: "Sketching and motion design" } },
    ],
    stills: [
      { src: `${C}/teamtv-devices.webp`, w: 2400, h: 1600, label: { nl: "TeamTV", en: "TeamTV" }, pos: "50% 45%", posM: "58% 45%", href: paths.case("teamtv") },
      { src: `${C}/jurgh-porsche.webp`, w: 2048, h: 1366, label: { nl: "JURGH Detailing", en: "JURGH Detailing" }, pos: "50% 45%", posM: "52% 50%", href: paths.case("jurgh-detailing") },
      { src: `${C}/sami-devices.webp`, w: 1500, h: 1125, label: { nl: "Sami", en: "Sami" }, pos: "50% 40%", posM: "40% 50%", tone: "light", href: paths.case("sami") },
      { src: `${H}/designershouse-showroom.webp`, w: 1034, h: 469, label: { nl: "DesignersHouse", en: "DesignersHouse" }, pos: "50% 55%", posM: "50% 55%", href: paths.sector("interieur-architectuur") },
      { src: `${C}/debiteurnet-imac.webp`, w: 2400, h: 1800, label: { nl: "Debiteurnet", en: "Debiteurnet" }, pos: "50% 40%", posM: "50% 40%", tone: "light", href: paths.case("debiteurnet") },
    ],
  },
};

/** Teksten van de mediabediening (schermlezers) en het beeld zelf. */
export const heroMediaCopy = {
  media: {
    services: { nl: "Sfeerbeelden van projecten en de studio van M7", en: "Impressions of M7 projects and the studio" },
    applications: { nl: "Schermen en tools die M7 bouwde", en: "Screens and tools built by M7" },
    sectors: { nl: "Projecten van M7 in verschillende branches", en: "M7 projects in different industries" },
    cases: { nl: "Beelden uit cases van M7", en: "Images from M7 cases" },
  } as Record<HeroMediaPage, T>,
  pause: { nl: "Pauzeer de beelden", en: "Pause the images" } as T,
  play: { nl: "Speel de beelden af", en: "Play the images" } as T,
  show: { nl: "Toon beeld", en: "Show image" } as T,
  of: { nl: "van", en: "of" } as T,
};
