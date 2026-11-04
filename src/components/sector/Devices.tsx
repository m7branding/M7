import type { TileVisual } from "@/content/types";
import { Mockup } from "./Frames";
import { aspectOf } from "./imageSize";

/* ============================================================
   Strakke device- en drukwerkframes voor de dienstentegels
   (stijl: src/styles/tiles.css). Puur CSS, geen client-JS.
   De frames zelf staan in Frames.tsx (ook bruikbaar in de client,
   bv. het megamenu); hier krijgen ze op de server de exacte
   verhouding uit het beeld zelf (imageSize.ts).
   ============================================================ */

/** De mockup voor één tegel. */
export function TileMockup({ visual }: { visual: TileVisual }) {
  return <Mockup visual={visual} aspect={aspectOf} />;
}
