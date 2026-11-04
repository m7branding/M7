import type { ServiceSlug } from "./registry";
import type { TileVisual } from "./types";

/* ============================================================
   Standaard-mockup per dienst in de dienstentegels op de
   sectorpagina's (ServiceBento). Altijd eigen werk.
   Volgorde van gebruik: sector.visuals → een case in die
   sector met deze dienst en een cover → deze standaard.
   Platte screenshots staan in /public/media/sector-tiles.
   ============================================================ */

const T = "/media/sector-tiles";
const SC = "/media/showcase";

export const DEFAULT_VISUALS: Record<ServiceSlug, TileVisual> = {
  /* Brandbook dat openligt: logo-concept en kleurenpalet */
  "branding-rebranding": {
    kind: "book",
    left: `${SC}/designershouse/brandbook-05.webp`,
    right: `${SC}/designershouse/brandbook-17.webp`,
    label: "DesignersHouse",
  },
  /* Volledige homepage die rustig op en neer scrollt */
  "websites-webshops": {
    kind: "browser",
    src: `${T}/plenty-planet-site.webp`,
    url: "plentyplanet.com",
    scroll: true,
    label: "Plenty Planet",
  },
  "web-apps-portals-apps": { kind: "tablet", src: `${T}/monvy-dashboard.webp`, label: "Monvy" },
  /* Zoekersmatch-widget (lead-funnel richting CRM en e-mail) */
  "automation-funnels": { kind: "tablet", src: `${T}/buitenstate-zoekers.webp`, label: "Buitenstate" },
  "seo-aeo-geo": { kind: "browser", src: `${T}/sandt-chatgpt.webp`, url: "chatgpt.com", label: "The Sandt" },
  "content-marketing-online-ads": { kind: "phone", src: `${SC}/alpacafarm/profile-head.webp`, label: "Alpacafarm Vorstenbosch" },
  "foto-video-3d-animatie": { kind: "video", src: `${SC}/plentyplanet/greenecocorridor.webp`, label: "Plenty Planet" },
  /* Investment Memorandum: Locatie & Ligging / Bereikbaarheid */
  "grafisch-ontwerp-print": {
    kind: "book",
    left: `${SC}/bernheze/im-p08.webp`,
    right: `${SC}/bernheze/im-p09.webp`,
    label: "Bernheze Makelaars",
  },
  "configurators-lead-tools-widgets": {
    kind: "browser",
    src: `${T}/steddion-configurator.webp`,
    url: "tools.steddion.com/configurator",
    label: "Steddion",
  },
  /* Interne tool: geen publieke url in de adresbalk */
  "ai-consultancy": { kind: "browser", src: `${T}/bctn-control-tower.webp`, label: "BCTN" },
};
