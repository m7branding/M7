import type { SuppliedSet } from "../supplied-media";
import type { Case } from "../types";

/* ============================================================
   FigmaAssets (M7's eigen map met screenshots, brandbooks, video's
   en mockups), groep A. Nieuwe projecten in `cases`, aangeleverd
   beeld en films per case in `media` (bestanden:
   public/media/cases/<slug>/s-*.{webp,mp4}). Zie inbox/index.ts.
   ============================================================ */

export const inboxA: { cases: Case[]; media: Record<string, SuppliedSet> } = {
  cases: [],
  media: {},
};
