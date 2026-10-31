import type { Locale, StoryImage } from "@/content/types";
import { tr } from "@/lib/i18n";
import { imageSize } from "./imageSize";

/* ============================================================
   Masonry op de casepagina, als redactionele compositie i.p.v. een
   uniform raster. Per sectie een eigen ritme uit vier rijsoorten:
   - solo:  één beeld over de volle breedte (portret: gecentreerd)
   - pair / trio: twee of drie beelden even hoog, breedte naar verhouding
     (gelijke verhoudingen krijgen bewust een scheve verdeling)
   - stack: één groot beeld naast twee gestapelde (links of rechts)
   De verhoudingen komen uit de bestanden zelf (imageSize), dus geen
   layout shift en geen zware uitsnedes. Klik = lightbox (CaseLightbox).
   ============================================================ */

type Pic = { src: string; alt: string; caption?: string; w: number; h: number; ar: number };
type Kind = "solo" | "pair" | "trio" | "stack";
type Row = { kind: Kind; items: Pic[]; cols?: string; flip?: boolean };

const SIZE: Record<Kind, number> = { solo: 1, pair: 2, trio: 3, stack: 3 };
/** Volgorde van rijsoorten per sectie (seed = welke masonry op de pagina): zo opent elke sectie anders. */
const PLANS: Kind[][] = [
  ["stack", "pair", "trio", "solo"],
  ["solo", "trio", "pair", "stack"],
  ["pair", "stack", "solo", "trio"],
  ["trio", "solo", "stack", "pair"],
];
/** Nominale breedte en tussenruimte om de kolommen van een stack uit te rekenen. */
const W = 1376;
const GAP = 16;

function plan(n: number, seed: number): Kind[] {
  const order = PLANS[seed % PLANS.length];
  const out: Kind[] = [];
  let rem = n;
  let t = 0;
  let solo = false;
  while (rem > 0) {
    let k = order[t++ % order.length];
    if (k === "solo" && solo) k = order[t++ % order.length];
    let take = SIZE[k];
    if (take > rem) {
      k = rem === 1 ? "solo" : "pair";
      take = rem;
    } else if (rem - take === 1 && solo) {
      // geen los beeld achterlaten als er al een solo is geweest
      if (take === 3) k = "pair";
      else if (take === 2) k = "trio";
      take = SIZE[k];
    }
    if (k === "solo") solo = true;
    out.push(k);
    rem -= take;
  }
  return out;
}

/** Breedtes ∝ verhouding (dan zijn alle beelden even hoog); gelijke verhoudingen iets scheef verdeeld. */
function justify(items: Pic[], flip: boolean): number[] {
  const ars = items.map((p) => p.ar);
  const similar = Math.max(...ars) / Math.min(...ars) < 1.25;
  if (!similar) return ars;
  const skew = items.length === 2 ? [1.22, 0.82] : [1.28, 0.86, 0.86];
  const s = flip ? [...skew].reverse() : skew;
  return ars.map((a, i) => a * s[i]);
}

function layout(pics: Pic[], seed: number): Row[] {
  const rows: Row[] = [];
  let o = 0;
  plan(pics.length, seed).forEach((kind, r) => {
    const items = pics.slice(o, o + SIZE[kind]);
    o += items.length;
    const flip = (r + seed) % 2 === 1;
    if (kind === "stack") {
      // groot beeld: een staand beeld als dat er is, anders het eerste
      const big = items.findIndex((p) => p.ar < 1);
      if (big > 0) items.unshift(...items.splice(big, 1));
      const [b, s1, s2] = items;
      const w2 = (W - GAP - b.ar * GAP) / (1 + b.ar * (1 / s1.ar + 1 / s2.ar));
      const w1 = W - GAP - w2;
      rows.push({ kind, items, flip, cols: flip ? `${w2.toFixed(1)}fr ${w1.toFixed(1)}fr` : `${w1.toFixed(1)}fr ${w2.toFixed(1)}fr` });
    } else if (kind === "pair" || kind === "trio") {
      const ars = justify(items, flip);
      items.forEach((p, i) => (p.ar = ars[i]));
      rows.push({ kind, items, cols: ars.map((a) => `${a.toFixed(3)}fr`).join(" ") });
    } else {
      rows.push({ kind, items });
    }
  });
  return rows;
}

export function CaseGallery({
  images,
  client,
  locale,
  seed = 0,
  start = 0,
}: {
  images: StoryImage[];
  client: string;
  locale: Locale;
  /** Welke masonry op de pagina (bepaalt het ritme). */
  seed?: number;
  /** Nummer van het eerste beeld over alle secties heen (voor de alt-tekst). */
  start?: number;
}) {
  const word = locale === "nl" ? "beeld" : "image";
  const zoom = locale === "nl" ? "Vergroot" : "Enlarge";
  const pics: Pic[] = images.map((img, k) => {
    const z = imageSize(img.src) ?? { w: 1600, h: 1000 };
    return {
      src: img.src,
      alt: img.alt ? tr(img.alt, locale) : `${client}, ${word} ${start + k + 1}`,
      caption: img.caption ? tr(img.caption, locale) : undefined,
      w: z.w,
      h: z.h,
      ar: z.w / z.h,
    };
  });
  const rows = layout(pics, seed);

  return (
    <section className="cx-gallery" aria-label={`${client}: ${locale === "nl" ? "beelden" : "images"}`}>
      {rows.map((row, r) => (
        <div
          key={r}
          className={`cx-g cx-g--${row.kind}${row.flip ? " is-flip" : ""}`}
          style={row.cols ? { gridTemplateColumns: row.cols } : undefined}
        >
          {row.items.map((p, i) => (
            <figure
              key={p.src}
              className="cx-g__item"
              data-reveal="cx"
              style={{ ["--ar" as string]: p.ar.toFixed(4), ["--d" as string]: `${(i * 0.09).toFixed(2)}s` }}
            >
              <a href={p.src} className="cx-g__link" data-lb="" data-no-transition="" data-cursor={zoom} aria-label={`${zoom}: ${p.alt}`}>
                <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
              </a>
              {p.caption ? <figcaption>{p.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      ))}
    </section>
  );
}
