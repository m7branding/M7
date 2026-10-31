/* ============================================================
   World of M7: wat er op de pagina staat, server-side samengesteld
   uit de echte content. Alle getallen worden hier geteld (cases,
   sectoren, diensten, landen op de klantenkaart); niets is verzonnen.
   ============================================================ */

import { allClientPlaces } from "@/content/client-locations";
import type { Case, Locale } from "@/content/types";
import { DISCIPLINES, disciplineCases, disciplineReels, inDiscipline, introReels, type DisciplineKey, type Reel } from "@/components/showreel/reels";
import { allCases, allSectors, allServices, getService } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";

export interface WorldTile {
  slug: string;
  client: string;
  title: string;
  sector: string;
  href: string;
  image: string;
  video?: { src: string; srcMobile?: string; poster?: string };
  color: string;
}

export interface WorldChapter {
  key: DisciplineKey;
  title: string;
  count: number;
  color: string;
  reel: Reel | null;
  /** Een paar cases uit de discipline (de projecten in de reel eerst). */
  cases: { client: string; href: string }[];
  /** De hoofddienst van de discipline (link "Meer over …"). */
  service: { title: string; href: string };
}

const sectorTitle = (c: Case, locale: Locale) => {
  const s = allSectors().find((x) => x.slug === c.sector);
  return s ? tr(s.title, locale) : "";
};

const tileOf = (c: Case, locale: Locale): WorldTile => ({
  slug: c.slug,
  client: c.client,
  title: tr(c.title, locale),
  sector: sectorTitle(c, locale),
  href: paths.case(c),
  image: c.cover || c.heroVideo?.poster || "",
  video: c.heroVideo ? { src: c.heroVideo.src, srcMobile: c.heroVideo.srcMobile, poster: c.heroVideo.poster } : undefined,
  color: c.color,
});

/** Om en om uit elke sector, zodat een rij projecten zo gevarieerd mogelijk is. */
function spread(list: Case[], n: number): Case[] {
  const by = new Map<string, Case[]>();
  for (const c of list) by.set(c.sector, [...(by.get(c.sector) ?? []), c]);
  const groups = Array.from(by.values());
  const out: Case[] = [];
  for (let i = 0; out.length < n && groups.some((g) => g.length > i); i++) {
    for (const g of groups) if (g[i] && out.length < n) out.push(g[i]);
  }
  return out;
}

export function worldData(locale: Locale) {
  const cases = allCases();
  const sectors = allSectors().filter((s) => cases.some((c) => c.sector === s.slug));
  const countries = new Set(allClientPlaces.map((p) => p.country)).size;

  const intro = introReels(locale);
  const introSlugs = new Set(intro.flatMap((r) => r.cases.map((c) => c.slug)));

  /* ---------- reel strip: projecten met een clip, verspreid over de sectoren ---------- */
  const withClip = cases.filter((c) => c.heroVideo?.src && c.cover);
  const strip = spread(
    withClip.filter((c) => !introSlugs.has(c.slug)),
    12,
  ).map((c) => tileOf(c, locale));
  const stripSlugs = new Set(strip.map((t) => t.slug));

  /* ---------- hoofdstukken per discipline ---------- */
  const reels = disciplineReels(locale);
  const chapters: WorldChapter[] = DISCIPLINES.map((d) => {
    const reel = reels[d.key];
    const svc = getService(d.services[0])!;
    const inReel = reel?.cases ?? [];
    const more = disciplineCases(d.key, cases.filter((c) => c.cover))
      .filter((c) => !inReel.some((r) => r.slug === c.slug))
      .map((c) => ({ client: c.client, href: paths.case(c) }));
    return {
      key: d.key,
      title: tr(d.title, locale),
      count: cases.filter((c) => inDiscipline(c, d.key)).length,
      color: svc.color,
      reel,
      cases: [...inReel.map((c) => ({ client: c.client, href: c.href })), ...more].slice(0, 6),
      service: { title: tr(svc.title, locale), href: paths.service(svc) },
    };
  });

  /* ---------- projectwand: één project in het midden, de rest eromheen ---------- */
  const chapterSlugs = new Set(chapters.flatMap((ch) => ch.reel?.cases.map((c) => c.slug) ?? []));
  const centerCase =
    withClip.find((c) => !introSlugs.has(c.slug) && !stripSlugs.has(c.slug) && !chapterSlugs.has(c.slug)) ?? withClip[0];
  const wallPool = cases.filter((c) => c.cover && c.slug !== centerCase?.slug && !stripSlugs.has(c.slug));
  const wall = spread(wallPool, 12).map((c) => tileOf(c, locale));

  return {
    intro,
    strip,
    chapters,
    center: centerCase ? tileOf(centerCase, locale) : null,
    wall,
    stats: {
      cases: cases.length,
      sectors: sectors.length,
      services: allServices().length,
      disciplines: DISCIPLINES.length,
      countries,
    },
    /** Alle cases die op de pagina staan (voor de JSON-LD). */
    shown: (() => {
      const seen = new Set<string>();
      const out: { name: string; path: string }[] = [];
      const add = (slug: string) => {
        const c = cases.find((x) => x.slug === slug);
        if (!c || seen.has(slug)) return;
        seen.add(slug);
        out.push({ name: `${c.client}: ${tr(c.title, locale)}`, path: paths.case(c) });
      };
      intro.forEach((r) => r.cases.forEach((c) => add(c.slug)));
      strip.forEach((t) => add(t.slug));
      chapters.forEach((ch) => {
        ch.reel?.cases.forEach((c) => add(c.slug));
        ch.cases.forEach((x) => {
          const c = cases.find((y) => paths.case(y) === x.href);
          if (c) add(c.slug);
        });
      });
      if (centerCase) add(centerCase.slug);
      wall.forEach((t) => add(t.slug));
      return out;
    })(),
  };
}

export type WorldData = ReturnType<typeof worldData>;
