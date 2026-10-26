import type { ServiceSlug } from "@/content/registry";
import { DesignersHouseBook } from "./DesignersHouseBook";
import { PlentyPlanetSite } from "./PlentyPlanetSite";
import { MonvyApp } from "./MonvyApp";
import { BuitenstateFlow } from "./BuitenstateFlow";
import { SandtAnswers } from "./SandtAnswers";
import { SocialAds } from "./SocialAds";
import { EcoCorridorReveal } from "./EcoCorridorReveal";
import { DesignersHousePrint } from "./DesignersHousePrint";
import { SteddionConfigurator } from "./SteddionConfigurator";
import { BctnControlTower } from "./BctnControlTower";
import { ShowcaseStage } from "./Stage";

/**
 * Per peiler een eigen, geanimeerde showcase van echt werk (homepage-kaarten).
 * Elke mockup is een eigen component met CSS-module; scroll-voortgang komt
 * binnen als --sp / --spe via de ShowcaseStage.
 */
const SHOWCASES: Record<ServiceSlug, { C: () => JSX.Element; label: string }> = {
  "branding-rebranding": { C: DesignersHouseBook, label: "DesignersHouse: brandbook dat openslaat" },
  "websites-webshops": { C: PlentyPlanetSite, label: "Plenty Planet: website op een HDR-scherm" },
  "web-apps-portals-apps": { C: MonvyApp, label: "Monvy: web-app op een tablet" },
  "marketing-automatisering-funnels": { C: BuitenstateFlow, label: "Buitenstate: zoekers-widget, flow, CRM en e-mail" },
  "seo-aeo-geo": { C: SandtAnswers, label: "The Sandt: genoemd in AI-antwoorden" },
  "content-marketing-online-ads": { C: SocialAds, label: "Alpacafarm Vorstenbosch, GRID en Major Capital: social & ads" },
  "foto-video-3d-animatie": { C: EcoCorridorReveal, label: "Plenty Planet: Green Eco Corridor in 3D" },
  "grafisch-ontwerp-print": { C: DesignersHousePrint, label: "DesignersHouse: brochure en uitnodigingen" },
  "configurators-lead-tools-widgets": { C: SteddionConfigurator, label: "Steddion: Energy Property Configurator" },
  "ai-consultancy": { C: BctnControlTower, label: "BCTN: AI Customer Service Control Tower" },
};

/** Showcases die af zijn en op de homepage staan; de rest houdt (nog) de oude mockup. */
const READY: ServiceSlug[] = ["branding-rebranding", "web-apps-portals-apps", "grafisch-ontwerp-print"];

export function hasShowcase(slug: string): slug is ServiceSlug {
  return (READY as string[]).includes(slug);
}

/** Alle showcases, ook nog niet vrijgegeven (voor de lab-pagina). */
export function hasAnyShowcase(slug: string): slug is ServiceSlug {
  return slug in SHOWCASES;
}

export function Showcase({ slug, flip, sp }: { slug: ServiceSlug; flip?: boolean; sp?: number }) {
  const { C, label } = SHOWCASES[slug];
  return (
    <ShowcaseStage flip={flip} sp={sp} label={label}>
      <C />
    </ShowcaseStage>
  );
}
