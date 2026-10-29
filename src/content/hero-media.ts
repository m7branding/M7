/* ============================================================
   Hero-media van de overzichtspagina's (diensten, toepassingen,
   sectoren, cases): de afgeronde beeldsectie bovenaan (MediaHero).
   ============================================================ */

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
}

export type HeroMediaPage = "services" | "applications" | "sectors" | "cases";

/** Hoe lang elke foto in beeld blijft (s) en hoe lang een clip maximaal speelt (s). */
export const heroMediaTiming = { stillSeconds: 6.5, clipMaxSeconds: 10 };

const C = "/media/cases";
const S = "/media/sector-tiles";
const PP = "/media/showcase/plentyplanet";

/** Kantoorfoto uit office.ts (met kleine variant voor mobiel). */
function office(name: string, label: T, pos?: string, posM?: string): HeroStill {
  const p = officePhotos.find((o) => o.name === name);
  if (!p) throw new Error(`hero-media: onbekende kantoorfoto ${name}`);
  return { src: officePhoto(p, "lg"), srcSm: officePhoto(p, "sm"), w: p.w, h: p.h, label, pos, posM };
}

/**
 * Per pagina: `clips` (leeg tot de video's er zijn; zodra er één clip staat, vervangen de clips de foto's)
 * en `stills` (echte projectbeelden en kantoorfoto's die bij de pagina passen).
 */
export const heroMedia: Record<HeroMediaPage, { clips: HeroClip[]; stills: HeroStill[] }> = {
  /* /diensten: van merk tot software, plus de studio waar het gebeurt */
  services: {
    clips: [],
    stills: [
      office("kantoor-werkplekken", { nl: "Onze studio in Nistelrode", en: "Our studio in Nistelrode" }, "50% 45%", "62% 50%"),
      { src: `${C}/teamtv-tablet-dark.webp`, w: 1800, h: 1350, label: { nl: "TeamTV · web-app", en: "TeamTV · web app" }, pos: "50% 45%", posM: "45% 50%" },
      { src: `${PP}/greencorridor3.webp`, w: 1600, h: 893, label: { nl: "Plenty Planet · 3D-visualisatie", en: "Plenty Planet · 3D visualisation" }, pos: "50% 50%", posM: "62% 50%" },
      { src: `${S}/bctn-control-tower.webp`, w: 1600, h: 1075, label: { nl: "BCTN · AI Control Tower (concept)", en: "BCTN · AI Control Tower (concept)" }, pos: "50% 35%", posM: "40% 40%" },
      { src: `${C}/titanium-phone.webp`, w: 1632, h: 2024, label: { nl: "Titanium Exhaust · website", en: "Titanium Exhaust · website" }, pos: "50% 40%", posM: "50% 40%" },
    ],
  },
  /* /toepassingen: concrete tools en schermen */
  applications: {
    clips: [],
    stills: [
      { src: `${S}/steddion-configurator.webp`, w: 1440, h: 900, label: { nl: "Steddion · Energy Property Configurator", en: "Steddion · Energy Property Configurator" }, pos: "60% 40%", posM: "58% 40%", tone: "light" },
      { src: `${C}/teamtv-devices.webp`, w: 2400, h: 1600, label: { nl: "TeamTV · web-app en website", en: "TeamTV · web app and website" }, pos: "50% 45%", posM: "58% 45%" },
      { src: `${S}/monvy-dashboard.webp`, w: 1600, h: 1128, label: { nl: "Monvy · dashboard", en: "Monvy · dashboard" }, pos: "60% 30%", posM: "62% 30%", tone: "light" },
      { src: `${S}/sandt-chatgpt.webp`, w: 1400, h: 913, label: { nl: "The Sandt · genoemd in AI-antwoorden", en: "The Sandt · cited in AI answers" }, pos: "50% 40%", posM: "45% 40%", tone: "light" },
      { src: `${S}/bctn-control-tower.webp`, w: 1600, h: 1075, label: { nl: "BCTN · AI Control Tower (concept)", en: "BCTN · AI Control Tower (concept)" }, pos: "50% 35%", posM: "40% 40%" },
    ],
  },
  /* /sectoren: per beeld een andere branche */
  sectors: {
    clips: [],
    stills: [
      { src: `${C}/jurgh-porsche.webp`, w: 2048, h: 1366, label: { nl: "Automotive · JURGH Detailing", en: "Automotive · JURGH Detailing" }, pos: "50% 45%", posM: "52% 50%" },
      { src: `${PP}/greenecocorridor.webp`, w: 1600, h: 893, label: { nl: "Energie & duurzaamheid · Plenty Planet", en: "Energy & sustainability · Plenty Planet" }, pos: "50% 50%", posM: "60% 50%" },
      { src: `${C}/teamtv-devices.webp`, w: 2400, h: 1600, label: { nl: "Sport & media · TeamTV", en: "Sports & media · TeamTV" }, pos: "50% 45%", posM: "58% 45%" },
      { src: `${C}/debiteurnet-imac.webp`, w: 2400, h: 1800, label: { nl: "Zakelijke dienstverlening · Debiteurnet", en: "Business services · Debiteurnet" }, pos: "50% 40%", posM: "50% 40%", tone: "light" },
      { src: `${C}/sami-devices.webp`, w: 1500, h: 1125, label: { nl: "Tech & SaaS · Sami", en: "Tech & SaaS · Sami" }, pos: "50% 40%", posM: "40% 50%", tone: "light" },
    ],
  },
  /* /cases: de hero-beelden van de cases zelf */
  cases: {
    clips: [],
    stills: [
      { src: `${C}/teamtv-devices.webp`, w: 2400, h: 1600, label: { nl: "TeamTV", en: "TeamTV" }, pos: "50% 45%", posM: "58% 45%" },
      { src: `${C}/jurgh-porsche.webp`, w: 2048, h: 1366, label: { nl: "JURGH Detailing", en: "JURGH Detailing" }, pos: "50% 45%", posM: "52% 50%" },
      { src: `${C}/sami-devices.webp`, w: 1500, h: 1125, label: { nl: "Sami", en: "Sami" }, pos: "50% 40%", posM: "40% 50%", tone: "light" },
      { src: `${C}/titanium-phone.webp`, w: 1632, h: 2024, label: { nl: "Titanium Exhaust", en: "Titanium Exhaust" }, pos: "50% 38%", posM: "50% 40%" },
      { src: `${C}/debiteurnet-imac.webp`, w: 2400, h: 1800, label: { nl: "Debiteurnet", en: "Debiteurnet" }, pos: "50% 40%", posM: "50% 40%", tone: "light" },
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
