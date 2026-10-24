import type { Application, Case, Sector, Service } from "@/content/types";

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
  case: (c: Pick<Case, "slug"> | string) => `/cases/${typeof c === "string" ? c : c.slug}`,
  about: "/over-m7",
  contact: "/contact",
  privacy: "/privacybeleid",
  terms: "/algemene-voorwaarden",
  cookies: "/cookies",
};
