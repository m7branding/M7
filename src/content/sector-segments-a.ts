import type { SectorSlug } from "./registry";
import type { SectorSegment, T } from "./types";

/* ============================================================
   Doelgroepen per sector (deel A): tabs met eigen FAQ's onder
   "Veelgestelde vragen" en het raster met soorten bedrijven.
   Wordt in content/index.ts samengevoegd met sectors.ts.
   ============================================================ */

export const SEGMENTS_A: Partial<Record<SectorSlug, { segments: SectorSegment[]; audiences: T[] }>> = {};
