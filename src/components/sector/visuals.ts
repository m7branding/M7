import type { ServiceSlug } from "@/content/registry";
import type { Sector, TileVisual } from "@/content/types";
import { DEFAULT_VISUALS } from "@/content/visuals";
import { casesForSector } from "@/lib/content";

/**
 * Mockup per dienst voor de dienstentegels van een sector, in deze volgorde:
 *  a. `sector.visuals[dienst]` (handmatig ingesteld);
 *  b. een case in deze sector met deze dienst en een cover (de cover is al een device-mockup);
 *  c. de standaard per dienst (`DEFAULT_VISUALS`, eigen werk).
 * Bij (b) krijgt elke case hoogstens één tegel, bij de dienst waar hij het meest over gaat
 * (vooraan in `case.services`); zo staat dezelfde cover nooit twee keer in één raster.
 */
export function resolveVisuals(sector: Sector, services: readonly ServiceSlug[] = sector.services): Map<ServiceSlug, TileVisual> {
  const out = new Map<ServiceSlug, TileVisual>();
  const used = new Set<string>();

  for (const s of services) {
    const v = sector.visuals?.[s];
    if (v) {
      out.set(s, v);
      for (const src of sourcesOf(v)) used.add(src);
    }
  }

  // (case, dienst)-paren, meest relevante eerst; daarna in de volgorde van de sector
  const open = services.filter((s) => !out.has(s));
  const pairs = casesForSector(sector.slug)
    .filter((c) => c.cover)
    .flatMap((c) => open.filter((s) => c.services.includes(s)).map((s) => ({ c, s, rank: c.services.indexOf(s) })))
    .sort((a, b) => a.rank - b.rank || open.indexOf(a.s) - open.indexOf(b.s));
  const taken = new Set<string>();
  for (const { c, s } of pairs) {
    if (out.has(s) || taken.has(c.slug) || used.has(c.cover!)) continue;
    out.set(s, { kind: "photo", src: c.cover!, label: c.client });
    taken.add(c.slug);
    used.add(c.cover!);
  }

  for (const s of services) if (!out.has(s)) out.set(s, DEFAULT_VISUALS[s]);
  return out;
}

function sourcesOf(v: TileVisual): string[] {
  switch (v.kind) {
    case "book":
      return [v.left, v.right];
    case "print":
      return [v.front, v.back, v.card, v.cardBack].filter(Boolean) as string[];
    default:
      return [v.src];
  }
}
