import type { Locale, Sector } from "@/content/types";

/** Dienstentegels op een sectorpagina (masonry), elk met een strakke mockup van echt werk. */
export function ServiceBento({ sector, locale }: { sector: Sector; locale: Locale }) {
  void locale;
  return <div className="sbento" data-sector={sector.slug} />;
}
