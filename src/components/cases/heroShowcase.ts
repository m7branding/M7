import type { ServiceSlug } from "@/content/registry";

/**
 * Cases die als hero de bestaande geanimeerde showcase krijgen (dezelfde als op home en de
 * dienstpagina) in plaats van de device-hero. Sleutel: case-slug → showcase (per dienst).
 * Alleen waar de showcase écht over deze case gaat en minstens zo goed oogt als de device-hero.
 * De statische mockups uit de pipeline blijven gewoon in de galerij.
 */
export const HERO_SHOWCASE: Partial<Record<string, ServiceSlug>> = {
  monvy: "web-apps-portals-apps", // MonvyApp
  "plenty-planet": "websites-webshops", // PlentyPlanetSite
  buitenstate: "automation-funnels", // BuitenstateFlow
  "buitenstate-tools": "automation-funnels",
  steddion: "configurators-lead-tools-widgets", // SteddionConfigurator
  "steddion-tools": "configurators-lead-tools-widgets",
  "the-sandt": "seo-aeo-geo", // SandtAnswers
  "bernheze-makelaars-rebranding": "grafisch-ontwerp-print", // BernhezePrint
  "designers-house": "branding-rebranding", // DesignersHouseBook (uit hun eigen brandbook)
  // niet: alpacafarm-vorstenbosch (SocialAds zet een GRID-advertentie vooraan, dat is een andere klant)
  // en bctn-qhse (BctnControlTower is de AI-klantenservice-toren, geen QHSE-verhaal); die houden de device-hero
};

export function heroShowcase(slug: string): ServiceSlug | undefined {
  return HERO_SHOWCASE[slug];
}
