import { heroShowcase } from "@/components/cases/heroShowcase";
import { imageSize } from "@/components/case/imageSize";
import type { ServiceSlug } from "@/content/registry";
import type { Case, Review, StoryBlock, T } from "@/content/types";
import { getReview, publishedReviews } from "./content";
import { getDict } from "./dict";

/** Blok op de casepagina: een StoryBlock, de geanimeerde showcase (uit de hero gehaald) of de video van het project. */
export type CaseBlock = StoryBlock | { type: "showcase"; slug: ServiceSlug } | { type: "youtube"; id: string; poster?: string };

/** YouTube-id uit de projectlink (youtu.be/… of youtube.com/watch?v=…), anders undefined. */
const youtubeId = (url?: string) => url?.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{11})/)?.[1];

/** Wat de hero schermvullend toont: een eigen beeld/video, de gerenderde hero-video, de cover of de gegenereerde cover. */
export type HeroMedia =
  | { kind: "video"; src: string; poster?: string; srcMobile?: string; posterMobile?: string; position?: string }
  | { kind: "image"; src: string; position?: string }
  | { kind: "gen" };

export function heroOf(c: Case): HeroMedia {
  if (c.hero?.video) return { kind: "video", src: c.hero.video, poster: c.hero.poster, position: c.hero.position };
  if (c.hero?.image) return { kind: "image", src: c.hero.image, position: c.hero.position };
  if (c.heroVideo) return { kind: "video", ...c.heroVideo };
  if (c.cover) return { kind: "image", src: c.cover };
  return { kind: "gen" };
}

/** Hoeveel masonry-secties bij zoveel beelden: nooit een muur, hooguit vier blokken. */
const sections = (n: number) => (n === 0 ? 0 : n <= 4 ? 1 : n <= 8 ? 2 : n <= 13 ? 3 : 4);

/** Verdeelt de beelden over k secties, de eerste krijgt de extra beelden. */
function chunk<X>(list: X[], k: number): X[][] {
  const out: X[][] = [];
  let o = 0;
  for (let i = 0; i < k; i++) {
    const size = Math.floor(list.length / k) + (i < list.length % k ? 1 : 0);
    out.push(list.slice(o, o + size));
    o += size;
  }
  return out.filter((x) => x.length);
}

/** a1, b1, a2, b2 …, daarna wat over is. */
function interleave<X>(a: X[], b: X[]): X[] {
  const out: X[] = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) out.push(a[i]);
    if (b[i]) out.push(b[i]);
  }
  return out;
}

const join = (paras: T[]): T => ({ nl: paras.map((p) => p.nl).join("\n\n"), en: paras.map((p) => p.en).join("\n\n") });

/**
 * Het verhaal van een case. Heeft de case een eigen `story`, dan die (met de showcase na de intro);
 * anders een opbouw uit het projectverhaal (`narrative`) en de basisvelden:
 * intro → [showcase] → masonry → hoofdstuk → quote/statement → masonry → hoofdstuk → beeld → masonry …
 * De beelden worden over 1–4 masonry-secties verdeeld, met de tekst ertussen.
 */
export function storyFor(c: Case): CaseBlock[] {
  const show = heroShowcase(c.slug);
  const yt = youtubeId(c.url);
  // poster lokaal (public/media/cases/<slug>/yt.webp), zodat er vóór de klik niets van YouTube laadt
  const ytPoster = `/media/cases/${c.slug}/yt.webp`;
  const showBlock: CaseBlock[] = [
    ...(show ? [{ type: "showcase" as const, slug: show }] : []),
    ...(yt ? [{ type: "youtube" as const, id: yt, poster: imageSize(ytPoster) ? ytPoster : undefined }] : []),
  ];
  if (c.story?.length) {
    const [first, ...rest] = c.story;
    return first.type === "intro" ? [first, ...showBlock, ...rest] : [...showBlock, ...c.story];
  }

  const nl = getDict("nl").cases;
  const en = getDict("en").cases;
  const hero = heroOf(c);
  const heroSrc = hero.kind === "gen" ? undefined : hero.src;

  // eerst wat M7 zelf aanlevert (s-*) en de portfolio-mockups (v-*), dan de gerenderde 3D-beelden (r-*.webp uit de Blender-pipeline),
  // dan de cover en de rest
  const gallery = c.gallery ?? [];
  const supplied = gallery.filter((g) => /\/[sv]-[^/]+$/.test(g));
  const renders = gallery.filter((g) => /\/r-[^/]+$/.test(g));
  // een gerenderde cover (r-cover) is een uitsnede van een van de renders: niet nog eens in de galerij
  const cover = c.cover && /\/r-cover\.webp$/.test(c.cover) ? undefined : c.cover;
  let imgs = Array.from(new Set([...supplied, ...renders, cover, ...gallery])).filter((x): x is string => !!x && x !== heroSrc);

  // schermvullende beelden die meegroeien: de eigen reveal, de hero-video als de hero iets anders toont,
  // anders liggende renders (bij voorkeur de close-up) die dan niet ook in de masonry staan
  const wide = (s: string) => {
    const z = imageSize(s);
    return !!z && z.w / z.h >= 1.3;
  };
  const takeWide = (prefer?: RegExp) => {
    if (imgs.length < 4) return undefined;
    const pick = (prefer && imgs.find((s) => prefer.test(s) && wide(s))) || imgs.find((s, i) => i > 0 && wide(s));
    if (pick) imgs = imgs.filter((s) => s !== pick);
    return pick ? ({ type: "media", image: pick } as StoryBlock) : undefined;
  };
  let media: StoryBlock | undefined;
  if (c.reveal) {
    media = { type: "media", video: c.reveal.video, image: c.reveal.image, poster: c.reveal.poster, position: c.reveal.position };
  } else if (c.heroVideo && heroSrc !== c.heroVideo.src) {
    media = { type: "media", video: c.heroVideo.src, poster: c.heroVideo.poster };
  } else {
    media = takeWide(/\/r-0\d-closeup\./);
  }

  const chapters: StoryBlock[] = c.narrative?.chapters?.length
    ? c.narrative.chapters.map((ch) => ({ type: "text", h: ch.title, body: join(ch.body) }))
    : [
        { type: "text", h: { nl: nl.approach, en: en.approach }, body: c.approach },
        { type: "text", h: { nl: nl.result, en: en.result }, body: c.result },
      ];

  // quotes: eerst een echte review van de klant (met naam), dan de statements van M7 zelf (zonder naam).
  // Geen van beide? Dan geen verzonnen of algemene quote, maar nog een schermvullend beeld (als er genoeg zijn).
  const review = getReview(c.review) ?? publishedReviews().find((r) => r.case === c.slug && !r.draft);
  const quotes: StoryBlock[] = [
    ...(review ? [{ type: "quote" as const, text: review.quote, cite: review.author, role: reviewRole(review), avatar: review.avatar }] : []),
    ...(c.narrative?.statements ?? []).map((text) => ({ type: "quote" as const, text })),
  ];
  const first = quotes[0] ?? (imgs.length >= 7 ? takeWide(/\/r-0\d-gravity\./) : undefined);
  // aangeleverde films: in hun eigen verhouding (liggend) of op een podium (staand), om en om met de rest
  const films: StoryBlock[] = (c.films ?? []).map((f) => ({
    type: "media",
    video: f.src,
    poster: f.poster,
    fit: f.h > f.w ? "stage" : "native",
    ratio: f.w / f.h,
    alt: f.title,
  }));
  const rest = [media, ...quotes.slice(1)].filter((x): x is StoryBlock => !!x);
  const extras = [first, ...interleave(films, rest)].filter((x): x is StoryBlock => !!x);

  // zoveel masonry-secties dat de films en quotes ertussen passen (met minstens twee beelden per sectie)
  const k = Math.min(Math.max(sections(imgs.length), extras.length), Math.floor(imgs.length / 2) || sections(imgs.length));
  const galleries: StoryBlock[] = chunk(imgs, k).map((list) => ({ type: "masonry", images: list.map((src) => ({ src })) }));

  const out: CaseBlock[] = [{ type: "intro", text: c.narrative?.intro ?? c.challenge }, ...showBlock];
  const rounds = Math.max(galleries.length, chapters.length);
  for (let i = 0; i < rounds; i++) {
    if (galleries[i]) out.push(galleries[i]);
    if (chapters[i]) {
      out.push(chapters[i]);
      // de cijfers direct na het laatste hoofdstuk
      if (i === chapters.length - 1 && c.results?.length) out.push({ type: "results" });
    }
    if (extras[i]) out.push(extras[i]);
  }
  out.push(...extras.slice(rounds));
  return out;
}

/** "CEO, TeamTV", alleen het bedrijf, of niets (Google-reviews hebben geen functie). */
function reviewRole(r: Review): T | undefined {
  const part = (role?: string) => [role, r.company].filter(Boolean).join(", ");
  const nl = part(r.role?.nl);
  return nl ? { nl, en: part(r.role?.en) } : undefined;
}
