import type { SuppliedSet } from "../supplied-media";
import type { Case } from "../types";
import { inboxA } from "./a";
import { inboxB } from "./b";

/* ============================================================
   Materiaal uit M7's map "FigmaAssets" (screenshots, brandbooks,
   video's, mockups), in twee groepen zodat ze los van elkaar
   bijgewerkt kunnen worden. Nieuwe projecten komen bij de cases,
   het beeld bij de aangeleverde media (case-media.ts, withSupplied):
   met `lead: true` gaat het vóór wat er al stond.
   ============================================================ */

const groups = [inboxA, inboxB];

export const inboxCases: Case[] = groups.flatMap((g) => g.cases);

export const inboxMedia: Record<string, SuppliedSet> = {};
for (const g of groups) {
  for (const [slug, set] of Object.entries(g.media)) {
    const prev = inboxMedia[slug];
    inboxMedia[slug] = prev
      ? { ...prev, ...set, images: [...prev.images, ...set.images], films: [...prev.films, ...set.films] }
      : set;
  }
}
