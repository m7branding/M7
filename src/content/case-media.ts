/* ============================================================
   Gegenereerde mockups per case (scripts/mockups → generated/case-media.ts).
   Zo blijven tekst (cases*.ts) en beeld los van elkaar: de pipeline
   schrijft alleen de manifest, de cases hoeven niets te weten.
   ============================================================ */

import { caseMedia } from "./generated/case-media";
import type { Case } from "./types";

export interface CaseMediaEntry {
  /** Statische cover (kaarten, wall, menu, og-beeld). */
  cover?: string;
  /** Statische mockups en detailbeelden, in leesvolgorde. */
  gallery?: string[];
  /** Lange screenshots voor de bewegende device-hero op de casepagina. */
  screens?: Case["screens"];
  /** true: deze cover vervangt een bestaande cover van de case. */
  replaceCover?: boolean;
}

/** Vult een case aan met de gegenereerde mockups: mockups vooraan in de galerij, bestaande beelden erachter. */
export function withMedia(c: Case): Case {
  const m = caseMedia[c.slug];
  if (!m) return c;
  const gallery = [...(m.gallery ?? []), ...(c.gallery ?? []).filter((g) => !m.gallery?.includes(g))];
  return {
    ...c,
    cover: m.cover && (m.replaceCover || !c.cover) ? m.cover : c.cover,
    gallery: gallery.length ? gallery : undefined,
    screens: c.screens ?? m.screens,
  };
}
