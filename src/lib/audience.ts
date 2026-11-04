/* ============================================================
   Doelgroepen ("voor welk soort bedrijf") als zoekbare, linkbare
   eenheden. Leidt per sector-doelgroep (segment) af:
   - een hash-sleutel (#voor-dealers-garages), uniek over de hele site
   - de soorten bedrijven (types, of anders de passende `audiences`)
   - use cases (expliciet, of afgeleid uit de toepassingen die de FAQ's
     noemen en de toepassingen van de sector)
   en bouwt een compacte index voor de zoekbalk (geen FAQ-teksten).
   ============================================================ */

import { STOP, norm, slugify, stem, words } from "@/components/audience/match";
import type { IconKey } from "@/components/ui/Icon";
import type { ApplicationSlug, ServiceSlug } from "@/content/registry";
import type { FAQ, Locale, Sector, SectorSegment, T } from "@/content/types";
import { allSectors, applicationsFor, getApplication, getService } from "./content";
import { localize, tr } from "./i18n";
import { REF_RE } from "./inline";
import { paths } from "./paths";

export const HASH_PREFIX: Record<Locale, string> = { nl: "voor-", en: "for-" };

export interface UseCaseView {
  title: T;
  text: T;
  service: ServiceSlug;
  application?: ApplicationSlug;
  /** Afgeleid uit de toepassingen van de sector (nog geen eigen use case geschreven). */
  derived?: boolean;
}

export interface AudSegment {
  /** Positie in de globale lijst (= index in de client-index). */
  id: number;
  sector: Sector;
  /** Index binnen sector.segments; -1 = algemeen (sector zonder doelgroepen of losse soorten bedrijven). */
  index: number;
  segment?: SectorSegment;
  key: Record<Locale, string>;
  name: T;
  intro: T;
  /** Soorten bedrijven als chips (expliciete types, anders de passende audiences). */
  types: T[];
  /** Alles wat naar deze doelgroep moet leiden in de zoekbalk. */
  searchTypes: T[];
  useCases: UseCaseView[];
  faqs: FAQ[];
  /** Diensten/toepassingen waar de FAQ's naar verwijzen ([[slug]]). */
  refs: string[];
}

/* ---------- Hulpjes ---------- */

const refsIn = (faqs: FAQ[]) => {
  const out: string[] = [];
  for (const f of faqs)
    for (const m of Array.from(f.a.nl.matchAll(REF_RE))) if (!out.includes(m[1])) out.push(m[1]);
  return out;
};

const appCase = (slug: ApplicationSlug): UseCaseView | null => {
  const a = getApplication(slug);
  return a ? { title: a.title, text: a.summary, service: a.service, application: a.slug, derived: true } : null;
};

const phraseKey = (t: T) => words(t.nl).map(stem).join(" ");

/** Hoe goed past een soort bedrijf (audience) bij een doelgroep, op basis van naam, types en intro. */
function fit(a: T, g: SectorSegment): number {
  let best = 0;
  for (const L of ["nl", "en"] as const) {
    const toks = words(a[L]).filter((w) => !STOP.has(w) && w.length > 2);
    if (!toks.length) continue;
    const hay = words([g.name[L], g.intro[L], ...(g.types ?? []).map((t) => t[L])].join(" ")).filter((w) => !STOP.has(w));
    const hs = hay.map(stem);
    let hit = 0;
    for (const t of toks) {
      const st = stem(t);
      const ok = hay.some(
        (h, i) =>
          h === t ||
          hs[i] === st ||
          (st.length >= 5 && (h.startsWith(st) || hs[i].startsWith(st))) ||
          (st.length >= 6 && h.includes(st)) ||
          // samenstelling: "trouwautoverhuurders" ↔ "trouwautos"
          (hs[i].length >= 6 && st.startsWith(hs[i])),
      );
      if (ok) hit++;
    }
    best = Math.max(best, hit / toks.length);
  }
  return best;
}

/* ---------- Model ---------- */

let cache: AudSegment[] | null = null;

/** Alle doelgroepen van alle sectoren (gememoized). */
export function audienceModel(): AudSegment[] {
  if (cache) return cache;
  const out: AudSegment[] = [];
  const used = { nl: new Set<string>(), en: new Set<string>() };
  const uniq = (L: Locale, base: string, extra: string) => {
    let k = base || extra;
    if (used[L].has(k)) k = `${base}-${extra}`;
    for (let n = 2; used[L].has(k); n++) k = `${base}-${extra}-${n}`;
    used[L].add(k);
    return k;
  };

  for (const s of allSectors()) {
    const segs = s.segments ?? [];
    const audiences = s.audiences ?? [];
    const explicit = new Set(segs.flatMap((g) => (g.types ?? []).map(phraseKey)));
    const assigned: T[][] = segs.map(() => []);
    const loose: T[] = [];
    for (const a of audiences) {
      if (explicit.has(phraseKey(a))) continue;
      let bi = -1;
      let bs = 0;
      segs.forEach((g, i) => {
        const f = fit(a, g);
        if (f > bs) {
          bs = f;
          bi = i;
        }
      });
      if (bi >= 0 && bs >= 0.5) assigned[bi].push(a);
      else loose.push(a);
    }

    segs.forEach((g, i) => {
      const refs = refsIn(g.faqs);
      let useCases: UseCaseView[] = (g.useCases ?? []).map((u) => ({ ...u }));
      if (!useCases.length) {
        const slugs = [
          ...refs.filter((r) => getApplication(r)),
          ...s.applications.filter((a) => !refs.includes(a)),
        ] as ApplicationSlug[];
        useCases = slugs.map(appCase).filter(Boolean).slice(0, 6) as UseCaseView[];
      }
      const types = g.types?.length ? g.types : assigned[i];
      out.push({
        id: out.length,
        sector: s,
        index: i,
        segment: g,
        key: {
          nl: uniq("nl", slugify(g.name.nl), slugify(s.short.nl)),
          en: uniq("en", slugify(g.name.en), slugify(s.short.en)),
        },
        name: g.name,
        intro: g.intro,
        types,
        searchTypes: [...(g.types ?? []), ...assigned[i]],
        useCases,
        faqs: g.faqs,
        refs,
      });
    });

    // algemeen: sector zonder doelgroepen, of soorten bedrijven die nergens in passen
    if (!segs.length || loose.length) {
      const list = segs.length ? loose : audiences;
      out.push({
        id: out.length,
        sector: s,
        index: -1,
        key: { nl: uniq("nl", slugify(s.title.nl), "sector"), en: uniq("en", slugify(s.title.en), "sector") },
        name: s.title,
        intro: s.intro,
        types: list,
        searchTypes: list,
        useCases: s.applications.map(appCase).filter(Boolean).slice(0, 8) as UseCaseView[],
        faqs: segs.length ? [] : s.faqs,
        refs: refsIn(s.faqs),
      });
    }
  }
  cache = out;
  return out;
}

export const audiencesOf = (sector: string) => audienceModel().filter((g) => g.sector.slug === sector);

/** Hash (zonder #) die een soort bedrijf opent; valt terug op de doelgroep. */
export function typeHash(label: T, locale: Locale) {
  return HASH_PREFIX[locale] + slugify(tr(label, locale));
}
export const segHash = (g: AudSegment, locale: Locale) => HASH_PREFIX[locale] + g.key[locale];

/** Zoekt de doelgroep waar een soort bedrijf (audience) onder valt. */
export function segmentForType(sector: string, label: T): AudSegment | undefined {
  const k = phraseKey(label);
  return audiencesOf(sector).find((g) => g.searchTypes.some((t) => phraseKey(t) === k));
}

/** Hash-link voor een soort bedrijf op de sectorpagina (soort → doelgroep), of null. */
export function audienceHash(sector: string, label: T, locale: Locale): string | null {
  const slug = slugify(tr(label, locale));
  const segs = audiencesOf(sector);
  if (segs.some((g) => g.searchTypes.some((t) => slugify(tr(t, locale)) === slug))) return HASH_PREFIX[locale] + slug;
  const g = segmentForType(sector, label);
  return g ? segHash(g, locale) : null;
}

/* ---------- Dienst-context (dienstpagina) ---------- */

const belongsTo = (slug: string, service: ServiceSlug) =>
  slug === service || getApplication(slug)?.service === service;

/** Use cases van één dienst voor een doelgroep, met nette terugval op de toepassingen van die dienst. */
export function serviceUseCases(g: AudSegment, service: ServiceSlug, max = 3): UseCaseView[] {
  const explicit = (g.segment?.useCases ?? []).filter((u) => u.service === service);
  if (explicit.length) return explicit.slice(0, max);
  const slugs: ApplicationSlug[] = [];
  const add = (a: string) => {
    const app = getApplication(a);
    if (app && app.service === service && !slugs.includes(app.slug)) slugs.push(app.slug);
  };
  g.refs.forEach(add);
  g.sector.applications.forEach(add);
  if (!slugs.length) applicationsFor(service).slice(0, 2).forEach((a) => add(a.slug));
  return slugs.map(appCase).filter(Boolean).slice(0, max) as UseCaseView[];
}

/** FAQ's van een doelgroep die naar deze dienst (of een toepassing ervan) verwijzen. */
export function serviceFaqs(g: AudSegment, service: ServiceSlug, max = 2): FAQ[] {
  return g.faqs.filter((f) => Array.from(f.a.nl.matchAll(REF_RE)).some((m) => belongsTo(m[1], service))).slice(0, max);
}

/** Link + label + kleur voor een use case. */
export function useCaseLink(u: UseCaseView, locale: Locale) {
  const svc = getService(u.service)!;
  const app = u.application ? getApplication(u.application) : undefined;
  return {
    href: app ? paths.application(app) : paths.service(svc),
    // afgeleide use case heet al zoals de toepassing: toon dan de dienst
    label: app && !u.derived ? tr(app.title, locale) : tr(svc.short, locale),
    color: svc.color,
    icon: svc.icon as IconKey,
  };
}

/** Stabiele id voor een use case (om dubbelingen weg te filteren). */
export const useCaseId = (u: UseCaseView) => u.application ?? slugify(u.title.nl);

/* ---------- Compacte index voor de zoekbalk ---------- */

export interface AudIndex {
  /** hash-prefix in deze taal en de andere taal */
  p: string;
  ap: string;
  sectors: { slug: string; name: string; alt: string; href: string; icon: IconKey }[];
  /** s = sector-index, i = segment-index (-1 algemeen), k/ak = hash-sleutels, n/an = namen, kw = trefwoorden uit de intro */
  segs: { s: number; i: number; k: string; ak: string; n: string; an: string; kw: string }[];
  /** [label, label in andere taal, segment-index] */
  types: [string, string, number][];
}

export function audienceIndex(locale: Locale): AudIndex {
  const other: Locale = locale === "nl" ? "en" : "nl";
  const sectors = allSectors();
  const model = audienceModel();
  const types: [string, string, number][] = [];
  for (const g of model) {
    const seen = new Set<string>();
    for (const t of g.searchTypes) {
      const k = norm(t[locale]);
      if (seen.has(k)) continue;
      seen.add(k);
      types.push([tr(t, locale), t[other], g.id]);
    }
  }
  return {
    p: HASH_PREFIX[locale],
    ap: HASH_PREFIX[other],
    sectors: sectors.map((s) => ({
      slug: s.slug,
      name: tr(s.title, locale),
      alt: s.title[other],
      href: localize(paths.sector(s), locale),
      icon: s.icon,
    })),
    segs: model.map((g) => ({
      s: sectors.indexOf(g.sector),
      i: g.index,
      k: g.key[locale],
      ak: g.key[other],
      n: tr(g.name, locale),
      an: g.name[other],
      kw: Array.from(new Set(words(tr(g.intro, locale)).filter((w) => w.length >= 5 && !STOP.has(w)))).join(" "),
    })),
    types,
  };
}
