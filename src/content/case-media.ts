/* ============================================================
   Gegenereerde mockups per case (scripts/mockups → generated/case-media.ts).
   Zo blijven tekst (cases*.ts) en beeld los van elkaar: de pipeline
   schrijft alleen de manifest, de cases hoeven niets te weten.
   ============================================================ */

import { caseNarratives } from "./case-stories";
import { caseMedia } from "./generated/case-media";
import { portfolioV2 } from "./portfolio-v2";
import { inboxMedia } from "./inbox";
import { suppliedMedia, type SuppliedSet } from "./supplied-media";
import type { Case } from "./types";

export interface CaseMediaEntry {
  /** Statische cover (kaarten, wall, menu, og-beeld). */
  cover?: string;
  /** Statische mockups en detailbeelden, in leesvolgorde. */
  gallery?: string[];
  /** Lange screenshots voor de bewegende device-hero op de casepagina. */
  screens?: Case["screens"];
  /** Gerenderde hero-video (r-hero*.mp4 + poster .webp); gaat voor de device-hero. */
  heroVideo?: Case["heroVideo"];
  /** Logo van de klant (public/media/cases/<slug>/logo*.svg|png), voor de hero. */
  logo?: string;
  /** Brede render voor de strook "volgende case" (r-next.webp). */
  next?: string;
  /** Interactiefilms (r-flow-*.mp4 + poster): menu's, tools en flows op een device, als eigen blokken. */
  films?: Case["films"];
  /** true: deze cover vervangt een bestaande cover van de case. */
  replaceCover?: boolean;
}

/**
 * Vult een case aan met beeld: eerst wat M7 zelf aanlevert (supplied-media), dan de
 * portfolio-mockups v2, dan de gegenereerde renders (r-*) en mockups (m-*), daarna de
 * bestaande beelden van de case.
 */
export function withMedia(c0: Case): Case {
  const narrative = c0.narrative ?? caseNarratives[c0.slug];
  return withSupplied(withPortfolio(withGenerated(narrative ? { ...c0, narrative } : c0)));
}

/**
 * Portfolio-mockups v2 vóór de renders; hun films als blokken in het verhaal; hun cover voor de kaarten;
 * hun webclip als hero-video alleen zolang de case nog geen eigen hero-video (r-hero) heeft.
 */
function withPortfolio(c: Case): Case {
  const p = portfolioV2[c.slug];
  if (!p) return c;
  return {
    ...c,
    cover: p.cover ?? c.cover,
    gallery: [...p.images, ...(c.gallery ?? []).filter((g) => !p.images.includes(g))],
    films: [...(c.films ?? []), ...p.films],
    heroVideo: c.heroVideo ?? (p.hero ? { src: p.hero.src, poster: p.hero.poster } : undefined),
  };
}

/** Eerder aangeleverd beeld en dat uit FigmaAssets (inbox) samen; het inbox-deel vooraan als het `lead` is. */
function suppliedFor(slug: string): SuppliedSet | undefined {
  const a = suppliedMedia[slug];
  const b = inboxMedia[slug];
  if (!a || !b) return a ?? b;
  const [first, second] = b.lead ? [b, a] : [a, b];
  return {
    images: [...first.images, ...second.images.filter((i) => !first.images.some((x) => x.src === i.src))],
    films: [...first.films, ...second.films.filter((f) => !first.films.some((x) => x.src === f.src))],
    hero: b.hero ?? a.hero,
    cover: b.cover ?? a.cover,
  };
}

/** Aangeleverde beelden vooraan, films als eigen blokken; één film kan de hero worden en één beeld de cover. */
function withSupplied(c: Case): Case {
  const s = suppliedFor(c.slug);
  if (!s) return c;
  const heroFilm = s.hero ? s.films.find((f) => f.src === s.hero) : undefined;
  // een eigen hero-beeld dat door de film wordt vervangen, blijft in de galerij
  const freed = heroFilm && c.hero?.image ? [c.hero.image] : [];
  const images = s.images.map((i) => i.src);
  const gallery = [...images, ...(c.gallery ?? []).filter((g) => !images.includes(g)), ...freed];
  return {
    ...c,
    cover: s.cover ?? c.cover,
    gallery,
    films: [...s.films.filter((f) => f !== heroFilm), ...(c.films ?? [])],
    hero: heroFilm ? { video: heroFilm.src, poster: heroFilm.poster } : c.hero,
  };
}

function withGenerated(c: Case): Case {
  const m = caseMedia[c.slug];
  if (!m) return c;
  const gallery = [...(m.gallery ?? []), ...(c.gallery ?? []).filter((g) => !m.gallery?.includes(g))];
  return {
    ...c,
    cover: m.cover && (m.replaceCover || !c.cover) ? m.cover : c.cover,
    gallery: gallery.length ? gallery : undefined,
    screens: c.screens ?? m.screens,
    heroVideo: c.heroVideo ?? m.heroVideo,
    logo: c.logo ?? m.logo,
    next: c.next ?? m.next,
    films: m.films?.length ? [...(c.films ?? []), ...m.films] : c.films,
  };
}
