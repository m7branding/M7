/* Verzamelt alle content op één plek. */

import * as branding from "./services/branding-rebranding";
import * as websites from "./services/websites-webshops";
import * as webapps from "./services/web-apps-portals-apps";
import * as marketing from "./services/automation-funnels";
import * as seo from "./services/seo-aeo-geo";
import * as content from "./services/content-marketing-online-ads";
import * as media from "./services/foto-video-3d-animatie";
import * as print from "./services/grafisch-ontwerp-print";
import * as configurators from "./services/configurators-lead-tools-widgets";
import * as ai from "./services/ai-consultancy";
import type { Application, Service } from "./types";

const modules = [branding, websites, webapps, marketing, seo, content, media, print, configurators, ai];

export const services: Service[] = modules.map((m) => m.service).sort((a, b) => a.order - b.order);
export const applications: Application[] = modules.flatMap((m) => m.applications);

import { SECTOR_SLUGS } from "./registry";
import { sectors as baseSectors } from "./sectors";
import { NEW_SECTORS_A } from "./sectors-new-a";
import { NEW_SECTORS_B } from "./sectors-new-b";
import { NEW_SECTORS_C } from "./sectors-new-c";
import { SEGMENTS_A } from "./sector-segments-a";
import { SEGMENTS_B } from "./sector-segments-b";

/** Sectoren inclusief doelgroepen en hun FAQ's (die staan in aparte bestanden), in de volgorde van het register. */
export const sectors = [...baseSectors, ...NEW_SECTORS_A, ...NEW_SECTORS_B, ...NEW_SECTORS_C]
  .map((s) => ({ ...s, ...SEGMENTS_A[s.slug], ...SEGMENTS_B[s.slug] }))
  .sort((a, b) => SECTOR_SLUGS.indexOf(a.slug) - SECTOR_SLUGS.indexOf(b.slug));
import { cases as curatedCases } from "./cases";
import { archiveCases } from "./cases-archive";
import { figmaCases } from "./cases-figma";
import { newCasesA } from "./cases-new-a";
import { newCasesB } from "./cases-new-b";
import { withMedia } from "./case-media";
/**
 * Uitgewerkte cases eerst, dan de nieuwe projecten, dan die van de vorige website; mockups uit de pipeline erbij.
 * Projecten zonder beeld (nog geen mockups of Figma-export) schuiven naar achteren.
 */
const showDrafts = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";
const others = [...newCasesA, ...newCasesB, ...figmaCases, ...archiveCases].map(withMedia);
export const cases = [...curatedCases.map(withMedia), ...others.filter((c) => c.cover), ...others.filter((c) => !c.cover)].filter(
  (c) => showDrafts || !c.draft,
);
export { reviews } from "./reviews";
export { team } from "./team";
export { TOOLS } from "./tools";
export { site, stats, clients } from "./site";
