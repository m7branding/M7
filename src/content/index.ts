/* Verzamelt alle content op één plek. */

import * as branding from "./services/branding-rebranding";
import * as websites from "./services/websites-webshops";
import * as webapps from "./services/web-apps-portals-apps";
import * as marketing from "./services/marketing-automatisering-funnels";
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

export { sectors } from "./sectors";
export { cases } from "./cases";
export { reviews } from "./reviews";
export { team } from "./team";
export { TOOLS } from "./tools";
export { site, stats, clients } from "./site";
