/* ============================================================
   Showreels (±30 s) met werk van verschillende projecten, voor de
   cases-hero en de World of M7-pagina. De lijst zelf wordt gegenereerd
   door scripts/mockups (generated/showreels.ts).
   ============================================================ */

import { showreels as rendered } from "./generated/showreels";
import type { T } from "./types";

export interface Showreel {
  slug: string;
  /** Korte naam, bv. "Websites & platforms". */
  title: T;
  /** Liggend, 1920×1080 (H.264, faststart). */
  src: string;
  /** Lichtere liggende versie voor mobiel (1280×720). */
  srcMobile?: string;
  /** Staande versie (720×1280) voor een staand kader op mobiel, per shot opnieuw kadreerd. */
  srcPortrait?: string;
  poster: string;
  /** Poster bij de staande versie. */
  posterPortrait?: string;
  /** Duur in seconden. */
  duration: number;
  /** Cases die erin voorkomen, in volgorde van verschijnen. */
  cases: string[];
}


/** Reels die M7 zelf aanlevert (artifact "M7 Case Mockups"). */
const supplied: Showreel[] = [
  {
    slug: "m7-selected-work",
    title: { nl: "M7 — geselecteerd werk", en: "M7 — selected work" },
    src: "/media/showreels/s-projects-12-m7-reel.mp4",
    poster: "/media/showreels/s-projects-12-m7-reel.webp",
    duration: 10,
    cases: ["teamtv", "repairlab", "jurgh-detailing", "mindyourpass", "kippenkar"],
  },
];

export const showreels: Showreel[] = [...rendered, ...supplied];
