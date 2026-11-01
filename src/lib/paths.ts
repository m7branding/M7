import { hostOf } from "@/content/families";
import type { Application, Case, Sector, Service } from "@/content/types";

/** Een case op de pagina van een ander deel van dezelfde klant krijgt de url van die pagina + #slug (zie families.ts). */
const casePath = (slug: string) => {
  const host = hostOf(slug);
  return host === slug ? `/cases/${slug}` : `/cases/${host}#${slug}`;
};

/** Interne (NL) paden. Gebruik altijd <TLink> zodat ze per taal gelokaliseerd worden. */
export const paths = {
  home: "/",
  services: "/diensten",
  service: (s: Pick<Service, "slug"> | string) => `/diensten/${typeof s === "string" ? s : s.slug}`,
  application: (a: Pick<Application, "slug" | "service">) => `/diensten/${a.service}/${a.slug}`,
  applications: "/toepassingen",
  sectors: "/sectoren",
  sector: (s: Pick<Sector, "slug"> | string) => `/sectoren/${typeof s === "string" ? s : s.slug}`,
  cases: "/cases",
  case: (c: Pick<Case, "slug"> | string) => casePath(typeof c === "string" ? c : c.slug),
  /** Scrollende showreel-ervaring; zelfde slug in NL en EN. */
  world: "/world-of-m7",
  about: "/over-m7",
  process: "/werkproces",
  contact: "/contact",
  privacy: "/privacybeleid",
  terms: "/algemene-voorwaarden",
  cookies: "/cookies",
};
