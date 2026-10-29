import { Showcase } from "@/components/showcase";
import type { ServiceSlug } from "@/content/registry";
import "./DeviceHero.css";

/**
 * Case-hero met de bestaande geanimeerde showcase (zie heroShowcase.ts). Zelfde opbouw als de
 * device-hero: tekst links, beeld rechts (tot in de rand van het kader); mobiel eronder.
 * De showcase bouwt bij het laden op en loopt verder op de scroll (ShowcaseStage `hero`).
 */
export function ShowcaseHero({ slug }: { slug: ServiceSlug }) {
  return (
    <div className="dh dh--show">
      <div className="dh-glow" aria-hidden="true" />
      <Showcase slug={slug} hero />
    </div>
  );
}
