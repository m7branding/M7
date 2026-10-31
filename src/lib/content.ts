/* ============================================================
   Query-laag over het content model. Alle cross-references
   (cases per dienst, reviews per dienst, sectoren per toepassing…)
   worden hier afgeleid, zodat je content maar op één plek
   hoeft te koppelen.
   ============================================================ */

import { applications, cases, reviews, sectors, services } from "@/content";
import { APPLICATIONS_BY_SERVICE, type ApplicationSlug, type SectorSlug, type ServiceSlug } from "@/content/registry";
import { TOOLS, type ToolSlug } from "@/content/tools";
import type { Application, Case, Review, Sector, Service } from "@/content/types";

const showDrafts =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";

/* ---------- Diensten ---------- */
export const allServices = (): Service[] => services;
export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/* ---------- Toepassingen ---------- */
export const allApplications = (): Application[] => {
  // In registry-volgorde
  const order = Object.values(APPLICATIONS_BY_SERVICE).flat() as string[];
  return [...applications].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
};
export const getApplication = (slug: string): Application | undefined =>
  applications.find((a) => a.slug === slug);
export const applicationsFor = (service: ServiceSlug): Application[] =>
  allApplications().filter((a) => a.service === service);
export const applicationsBySlugs = (slugs: readonly ApplicationSlug[]): Application[] =>
  slugs.map((s) => getApplication(s)).filter(Boolean) as Application[];

/* ---------- Sectoren ---------- */
export const allSectors = (): Sector[] => sectors;
export const getSector = (slug: string): Sector | undefined => sectors.find((s) => s.slug === slug);
export const sectorsForService = (service: ServiceSlug): Sector[] =>
  sectors.filter((s) => s.services.includes(service));
export const sectorsForApplication = (app: ApplicationSlug): Sector[] =>
  sectors.filter((s) => s.applications.includes(app));

/* ---------- Cases ---------- */
export const allCases = (): Case[] => cases;
export const getCase = (slug: string): Case | undefined => cases.find((c) => c.slug === slug);
export const featuredCases = (): Case[] => cases.filter((c) => c.featured);
export const casesForService = (service: ServiceSlug): Case[] =>
  sortByRelevance(cases.filter((c) => c.services.includes(service)), (c) => c.services.indexOf(service));
export const casesForApplication = (app: ApplicationSlug): Case[] =>
  cases.filter((c) => c.applications.includes(app));
export const casesForSector = (sector: SectorSlug): Case[] => cases.filter((c) => c.sector === sector);
/** Relevante cases voor een toepassing: eerst exacte match, dan de parent-dienst. */
export const casesForApplicationOrService = (app: Application): Case[] => {
  const exact = casesForApplication(app.slug);
  const rest = casesForService(app.service).filter((c) => !exact.includes(c));
  return [...exact, ...rest];
};
export const nextCase = (slug: string): Case => {
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
};

/* ---------- Reviews ---------- */
export const publishedReviews = (): Review[] => reviews.filter((r) => showDrafts || !r.draft);
export const getReview = (id?: string): Review | undefined =>
  id ? publishedReviews().find((r) => r.id === id) : undefined;
/** Reviews over een specifieke dienst; valt terug op alle echte reviews. */
export const reviewsForService = (service: ServiceSlug, fallback = true): Review[] => {
  const list = publishedReviews().filter((r) => r.services.includes(service));
  if (list.length || !fallback) return list;
  return publishedReviews().filter((r) => !r.draft);
};

/* ---------- Tools ---------- */
export const getTools = (slugs: readonly ToolSlug[]) =>
  Array.from(new Set(slugs)).map((slug) => ({ slug, ...TOOLS[slug] }));

/* ---------- Helpers ---------- */
function sortByRelevance<X>(list: X[], score: (x: X) => number): X[] {
  return [...list].sort((a, b) => score(a) - score(b));
}

/** Toepassingen die gerelateerd zijn (expliciet + zelfde dienst), zonder dubbelingen. */
export const relatedApplications = (app: Application, max = 8): Application[] => {
  const explicit = applicationsBySlugs(app.related);
  const siblings = applicationsFor(app.service).filter((a) => a.slug !== app.slug);
  const out: Application[] = [];
  for (const a of [...explicit, ...siblings]) {
    if (a.slug !== app.slug && !out.includes(a)) out.push(a);
  }
  return out.slice(0, max);
};

/** Alle termen/keywords over alle diensten (voor de CTA-marquee). */
export const allApplicationChips = () => allApplications().map((a) => ({ slug: a.slug, service: a.service, title: a.title }));
