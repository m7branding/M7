import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { allApplications, allCases, allSectors, allServices } from "@/lib/content";
import { localize } from "@/lib/i18n";
import { paths } from "@/lib/paths";

/** Sitemap met NL + EN en hreflang-alternates voor elke pagina. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: paths.services, priority: 0.9, freq: "monthly" },
    { path: paths.applications, priority: 0.7, freq: "monthly" },
    { path: paths.sectors, priority: 0.7, freq: "monthly" },
    { path: paths.cases, priority: 0.8, freq: "weekly" },
    { path: paths.world, priority: 0.7, freq: "monthly" },
    { path: paths.about, priority: 0.6, freq: "monthly" },
    { path: paths.process, priority: 0.7, freq: "monthly" },
    { path: paths.contact, priority: 0.6, freq: "yearly" },
    ...allServices().map((s) => ({ path: paths.service(s), priority: 0.9, freq: "monthly" as const })),
    ...allApplications().map((a) => ({ path: paths.application(a), priority: 0.7, freq: "monthly" as const })),
    ...allSectors().map((s) => ({ path: paths.sector(s), priority: 0.6, freq: "monthly" as const })),
    ...allCases().map((c) => ({ path: paths.case(c), priority: 0.6, freq: "yearly" as const })),
  ];
  return entries.flatMap((e) =>
    (["nl", "en"] as const).map((l) => ({
      url: `${site.url}${localize(e.path, l) === "/" ? "" : localize(e.path, l)}`,
      lastModified: now,
      changeFrequency: e.freq,
      priority: l === "nl" ? e.priority : Math.max(0.1, e.priority - 0.1),
      alternates: {
        languages: {
          nl: `${site.url}${localize(e.path, "nl") === "/" ? "" : localize(e.path, "nl")}`,
          en: `${site.url}${localize(e.path, "en")}`,
        },
      },
    })),
  );
}
