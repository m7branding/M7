/* ============================================================
   Showreels voor de cases-hero en World of M7, server-side samengesteld.

   - Staan er gerenderde showreels in content/generated/showreels.ts (scripts/mockups),
     dan spelen die: één film per reel, met de cases die erin voorkomen als bijschrift.
   - Is die lijst nog leeg, dan valt alles terug op een reeks hero-clips van cases
     (/media/cases/<slug>/r-hero*.mp4 + poster): per reel een handvol projecten
     uit één discipline, één clip per case, met een link naar de case.
   De overstap gaat vanzelf: zodra `showreels` niet leeg is, wint de echte film.
   Een film telt pas mee als zijn bestand ook echt in public/ staat (onDisk).

   De cases-hero en de opening van World of M7 spelen de reel "masterpieces"
   (M7's top-25, content/masterpieces.ts) zodra die geregistreerd is én de
   bestanden er staan; tot dan de hoogtepunten (cases) of een reeks hero-clips
   van de masterpieces zelf (World of M7).
   ============================================================ */

import { MASTERPIECE_SLUGS } from "@/content/masterpieces";
import type { ServiceSlug } from "@/content/registry";
import { showreels, type Showreel } from "@/content/showreels";
import type { Case, Locale, T } from "@/content/types";
import { allCases, getCase } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { onDisk } from "./onDisk";

/** Eén videobestand in een reel. */
export interface ReelClip {
  src: string;
  /** Lichtere versie voor smalle schermen. */
  srcMobile?: string;
  /** Staande versie, voor een staand kader op een smal scherm. */
  srcPortrait?: string;
  poster?: string;
  posterPortrait?: string;
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

const MASTERPIECES_TITLE: T = { nl: "Masterpieces", en: "Masterpieces" };

/** Gerenderde showreels waarvan het bestand er echt staat (een geregistreerde maar nog niet geleverde film telt niet). */
const films = () => showreels.filter((s) => onDisk(s.src) && onDisk(s.poster));

export const hasFilms = () => films().length > 0;

/* ---------------- cases ---------------- */

/** Cases met een hero-clip, in de volgorde van het overzicht. */
const withClip = () => allCases().filter((c) => c.heroVideo?.src && onDisk(c.heroVideo.src));

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
  // varianten alleen als ze er staan; anders speelt overal de hoofdversie
  const opt = (src?: string) => (onDisk(src) ? src : undefined);
  return {
    slug: s.slug,
    title: tr(s.title, locale),
    clips: [{ src: s.src, srcMobile: opt(s.srcMobile), srcPortrait: opt(s.srcPortrait), poster: s.poster, posterPortrait: opt(s.posterPortrait) }],
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
  const free = films().filter((s) => !used.has(s.slug));
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
  if (hasFilms()) return films().map((s) => film(s, locale));
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

/** Welke gerenderde showreel bij welk hoofdstuk hoort (elke film hooguit één keer). */
function chapterFilms(): Partial<Record<DisciplineKey, Showreel>> {
  const used = new Set<string>();
  const out: Partial<Record<DisciplineKey, Showreel>> = {};
  for (const d of DISCIPLINES) {
    const f = filmFor(d.key, used);
    if (f) {
      used.add(f.slug);
      out[d.key] = f;
    }
  }
  return out;
}

/**
 * Openingsreel van World of M7: de films die geen hoofdstuk hebben (bv. "highlights"),
 * anders de eerste film; zonder films de uitgelichte cases.
 */
export function introReels(locale: Locale): Reel[] {
  if (hasFilms()) {
    const taken = new Set(Object.values(chapterFilms()).map((f) => f!.slug));
    const free = films().filter((s) => !taken.has(s.slug));
    return (free.length ? free : films().slice(0, 1)).map((s) => film(s, locale));
  }
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
  const films = hasFilms() ? chapterFilms() : {};
  const used = new Set<string>(introReels(locale).flatMap((r) => r.cases.map((c) => c.slug)));
  const all = withClip();
  const out = {} as Record<DisciplineKey, Reel | null>;
  for (const d of DISCIPLINES) {
    const f = films[d.key];
    if (f) {
      out[d.key] = { ...film(f, locale), title: tr(d.title, locale) };
    } else {
      out[d.key] = sequence(d.key, tr(d.title, locale), disciplineCases(d.key, all), used, 4);
    }
  }
  return out;
}

/* ---------------- masterpieces ---------------- */

/** De gerenderde masterpieces-reel: alleen als hij in generated/showreels.ts staat én het bestand er is. */
const masterpiecesFilm = () => films().find((s) => s.slug === "masterpieces");

/**
 * Achtergrond van de cases-hero: één reel, zonder hoofdstukken. De masterpieces-reel zodra
 * die er is, tot dan de hoogtepunten; zonder films de eerste terugval-reel.
 */
export function casesHeroReel(locale: Locale): Reel | null {
  const f = masterpiecesFilm() ?? films().find((s) => s.slug === "highlights");
  if (f) return film(f, locale);
  return casesReels(locale)[0] ?? null;
}

/** De overige reels (de "hoofdstukken"), voor de knoppen onder de cases-hero. */
export function chapterReels(locale: Locale, without?: string): Reel[] {
  return casesReels(locale).filter((r) => r.film && r.slug !== without);
}

/**
 * Opening van World of M7: de masterpieces-reel zodra die er is; tot dan een reeks
 * hero-clips van de masterpieces zelf (in M7's volgorde), zodat de pagina alleen topwerk toont.
 */
export function masterpiecesReel(locale: Locale, n = 6): Reel | null {
  const f = masterpiecesFilm();
  if (f) return film(f, locale);
  const list = MASTERPIECE_SLUGS.map((slug) => getCase(slug)).filter((c): c is Case => Boolean(c?.heroVideo?.src && onDisk(c.heroVideo.src) && onDisk(c.heroVideo.poster)));
  return sequence("masterpieces", tr(MASTERPIECES_TITLE, locale), list, new Set(), n);
}
