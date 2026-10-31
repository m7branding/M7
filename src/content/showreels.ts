/* ============================================================
   Showreels (±30 s) met werk van verschillende projecten, voor de
   cases-hero en de World of M7-pagina. De lijst zelf wordt gegenereerd
   door scripts/mockups (generated/showreels.ts).
   ============================================================ */

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

export { showreels } from "./generated/showreels";
