/* ============================================================
   Showreels voor de cases-hero en World of M7, server-side samengesteld.

   - Staan er gerenderde showreels in content/generated/showreels.ts (scripts/mockups),
     dan spelen die: één film per reel, met de cases die erin voorkomen als bijschrift.
   - Is die lijst nog leeg, dan valt alles terug op een reeks hero-clips van cases
     (/media/cases/<slug>/r-hero*.mp4 + poster): per reel een handvol projecten
     uit één discipline, één clip per case, met een link naar de case.
   De overstap gaat vanzelf: zodra `showreels` niet leeg is, wint de echte film.
   ============================================================ */

import type { ServiceSlug } from "@/content/registry";
import { showreels, type Showreel } from "@/content/showreels";
import type { Case, Locale, T } from "@/content/types";
import { allCases, getCase } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";

/** Eén videobestand in een reel. */
export interface ReelClip {
  src: string;
  /** Lichtere versie voor smalle schermen. */
  srcMobile?: string;
  poster?: string;
  /** Terugval-reeks: de case die nu in beeld is (naam + intern NL-pad). */
  client?: string;
  href?: string;
}

/** Een showreel zoals de speler hem krijgt (serialiseerbaar, al vertaald). */
export interface Reel {
  slug: string;
  title: string;
  clips: ReelClip[];
  /** Cases in de reel, in volgorde van verschijnen. */
  cases: { slug: string; client: string; href: string }[];
  /** true: gerenderde showreel (één film); false: reeks hero-clips (terugval). */
  film: boolean;
}

export type DisciplineKey = "branding" | "websites" | "apps" | "content";

/**
 * Disciplines voor de reels en de hoofdstukken op World of M7. Samen dekken ze alle
 * tien diensten; een case hoort bij een discipline als één van de diensten erin valt.
 * `hint` herkent een gerenderde showreel aan zijn slug.
 */
export const DISCIPLINES: { key: DisciplineKey; title: T; services: ServiceSlug[]; hint: RegExp }[] = [
  {
    key: "branding",
    title: { nl: "Branding", en: "Branding" },
    services: ["branding-rebranding", "grafisch-ontwerp-print"],
    hint: /brand|identit|logo|print/i,
  },
  {
    key: "websites",
    title: { nl: "Websites & platforms", en: "Websites & platforms" },
    services: ["websites-webshops", "seo-aeo-geo"],
    hint: /web|site|platform|shop/i,
  },
  {
    key: "apps",
    title: { nl: "Apps & tools", en: "Apps & tools" },
    services: ["web-apps-portals-apps", "configurators-lead-tools-widgets", "automation-funnels", "ai-consultancy"],
    hint: /app|tool|software|config|portal|saas/i,
  },
  {
    key: "content",
    title: { nl: "Content & video", en: "Content & video" },
    services: ["content-marketing-online-ads", "foto-video-3d-animatie"],
    hint: /content|video|film|motion|campaign|ads|3d/i,
  },
];

const HIGHLIGHTS: T = { nl: "Uitgelicht", en: "Highlights" };
/** Clips per terugval-reel: ±6–10 s per clip, samen ongeveer een halve minuut. */
const PER_REEL = 5;

export const hasFilms = () => showreels.length > 0;

/* ---------------- cases ---------------- */

/** Cases met een hero-clip, in de volgorde van het overzicht. */
const withClip = () => allCases().filter((c) => c.heroVideo?.src);

export const inDiscipline = (c: Pick<Case, "services">, key: DisciplineKey) => {
  const d = DISCIPLINES.find((x) => x.key === key)!;
  return c.services.some((s) => d.services.includes(s));
};

/** Hoe centraal de discipline in de case staat: positie van de eerste passende dienst (0 = hoofddienst). */
const rank = (c: Case, key: DisciplineKey) => {
  const d = DISCIPLINES.find((x) => x.key === key)!;
  const i = c.services.findIndex((s) => d.services.includes(s));
  return i < 0 ? 99 : i;
};

const clipOf = (c: Case): ReelClip => ({
  src: c.heroVideo!.src,
  srcMobile: c.heroVideo!.srcMobile,
  poster: c.heroVideo!.poster,
  client: c.client,
  href: paths.case(c),
});

const caseRef = (c: Case) => ({ slug: c.slug, client: c.client, href: paths.case(c) });

/** Terugval-reel: `n` cases met een clip, die nog niet in `used` zitten. */
function sequence(slug: string, title: string, list: Case[], used: Set<string>, n = PER_REEL): Reel | null {
  const pick = list.filter((c) => !used.has(c.slug)).slice(0, n);
  if (!pick.length) return null;
  pick.forEach((c) => used.add(c.slug));
  return { slug, title, clips: pick.map(clipOf), cases: pick.map(caseRef), film: false };
}

/** Cases van een discipline met een clip: hoofddienst eerst, uitgelicht eerst bij gelijke stand. */
export function disciplineCases(key: DisciplineKey, list: Case[] = withClip()) {
  return list
    .filter((c) => inDiscipline(c, key))
    .map((c, i) => ({ c, i }))
    .sort((a, b) => rank(a.c, key) - rank(b.c, key) || Number(!!b.c.featured) - Number(!!a.c.featured) || a.i - b.i)
    .map(({ c }) => c);
}

/* ---------------- gerenderde showreels ---------------- */

function film(s: Showreel, locale: Locale): Reel {
  const cases = s.cases.map((slug) => getCase(slug)).filter((c): c is Case => Boolean(c));
  return {
    slug: s.slug,
    title: tr(s.title, locale),
    clips: [{ src: s.src, srcMobile: s.srcMobile, poster: s.poster }],
    cases: cases.map(caseRef),
    film: true,
  };
}

/** Welk deel van de cases in een showreel bij de discipline hoort (0–1). */
function fit(s: Showreel, key: DisciplineKey) {
  const cs = s.cases.map((slug) => getCase(slug)).filter((c): c is Case => Boolean(c));
  if (!cs.length) return 0;
  return cs.filter((c) => inDiscipline(c, key)).length / cs.length;
}

/** De gerenderde showreel die het best bij een discipline past (slug eerst, dan de cases), of niets. */
function filmFor(key: DisciplineKey, used: Set<string>): Showreel | undefined {
  const d = DISCIPLINES.find((x) => x.key === key)!;
  const free = showreels.filter((s) => !used.has(s.slug));
  const byHint = free.find((s) => d.hint.test(s.slug) || d.hint.test(s.title.en));
  if (byHint) return byHint;
  const best = free.map((s) => ({ s, f: fit(s, key) })).sort((a, b) => b.f - a.f)[0];
  return best && best.f >= 0.6 ? best.s : undefined;
}

/* ---------------- publiek ---------------- */

/**
 * De reels voor de cases-hero: alle gerenderde showreels, of (terugval) een reel met
 * uitgelichte cases plus één per discipline, telkens met andere projecten.
 */
export function casesReels(locale: Locale): Reel[] {
  if (hasFilms()) return showreels.map((s) => film(s, locale));
  const all = withClip();
  const used = new Set<string>();
  const out: Reel[] = [];
  const hl = sequence("highlights", tr(HIGHLIGHTS, locale), all.filter((c) => c.featured), used);
  if (hl) out.push(hl);
  for (const d of DISCIPLINES) {
    const r = sequence(d.key, tr(d.title, locale), disciplineCases(d.key, all), used);
    if (r) out.push(r);
  }
  return out;
}

/** Openingsreel van World of M7: alle showreels achter elkaar, of de uitgelichte cases. */
export function introReels(locale: Locale): Reel[] {
  if (hasFilms()) return showreels.map((s) => film(s, locale));
  const all = withClip();
  const used = new Set<string>();
  const hl = sequence("highlights", tr(HIGHLIGHTS, locale), all.filter((c) => c.featured), used, 6);
  return hl ? [hl] : [];
}

/**
 * Per discipline één reel voor de hoofdstukken op World of M7: de best passende gerenderde
 * showreel, anders een reeks clips uit die discipline (zonder de cases van de openingsreel).
 */
export function disciplineReels(locale: Locale): Record<DisciplineKey, Reel | null> {
  const usedFilms = new Set<string>();
  const used = new Set<string>(hasFilms() ? [] : introReels(locale).flatMap((r) => r.cases.map((c) => c.slug)));
  const all = withClip();
  const out = {} as Record<DisciplineKey, Reel | null>;
  for (const d of DISCIPLINES) {
    const f = hasFilms() ? filmFor(d.key, usedFilms) : undefined;
    if (f) {
      usedFilms.add(f.slug);
      out[d.key] = { ...film(f, locale), title: tr(d.title, locale) };
    } else {
      out[d.key] = sequence(d.key, tr(d.title, locale), disciplineCases(d.key, all), used, 4);
    }
  }
  return out;
}
