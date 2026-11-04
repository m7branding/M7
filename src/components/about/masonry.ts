/**
 * Masonry-volgorde: zet foto's in een volgorde waarbij de kolommen zo gelijk
 * mogelijk eindigen. De grid plaatst elk item in de kortste kolom
 * (grid-auto-flow: dense, zie .agal in about.css); hier simuleren we dat voor
 * meerdere kolomaantallen en zoeken (deterministisch) de best sluitende volgorde.
 */

/** Rijhoogte-eenheden per item: 100 = kolombreedte; `gap` = ruimte eronder. */
export const masonrySpan = (w: number, h: number, gap: number) => Math.round((h / w) * 100) + gap;

export function masonryOrder<T>(
  items: T[],
  span: (t: T) => number,
  /** Zoveel items vooraan blijven op hun plek (bv. de buitenkant van het pand eerst). */
  pin = 0,
  cols: { n: number; weight: number }[] = [
    { n: 4, weight: 1 },
    { n: 3, weight: 0.6 },
    { n: 2, weight: 1 },
  ],
): T[] {
  const n = items.length;
  if (n < 3) return items;
  const spans = items.map(span);

  const score = (ord: number[]) => {
    let s = 0;
    for (const { n: k, weight } of cols) {
      const top = new Array(k).fill(0);
      for (const j of ord) {
        let c = 0;
        for (let x = 1; x < k; x++) if (top[x] < top[c]) c = x;
        top[c] += spans[j];
      }
      s += (Math.max(...top) - Math.min(...top)) * weight;
    }
    return s;
  };

  // kleine, vaste PRNG zodat de volgorde bij elke build gelijk is
  let seed = 0x9e3779b9;
  const rnd = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const climb = (ord: number[]) => {
    let cur = score(ord);
    let better = true;
    while (better) {
      better = false;
      for (let a = pin; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
          [ord[a], ord[b]] = [ord[b], ord[a]];
          const s = score(ord);
          if (s < cur - 1e-9) {
            cur = s;
            better = true;
          } else {
            [ord[a], ord[b]] = [ord[b], ord[a]];
          }
        }
      }
    }
    return { ord, s: cur };
  };

  let best = climb(items.map((_, i) => i));
  for (let r = 0; r < 24 && best.s > 0; r++) {
    const ord = items.map((_, i) => i);
    for (let i = n - 1; i > pin; i--) {
      const j = pin + Math.floor(rnd() * (i + 1 - pin));
      [ord[i], ord[j]] = [ord[j], ord[i]];
    }
    const res = climb(ord);
    if (res.s < best.s - 1e-9) best = res;
  }
  return best.ord.map((i) => items[i]);
}

/**
 * Vaste masonry-indeling voor `k` kolommen: elk item naar de kortste kolom,
 * daarna worden de hoogtes per kolom licht bijgeschaald (object-fit: cover) zodat
 * alle kolommen precies even lang eindigen. Geeft per item kolom (1-based) + span.
 */
export function masonryLayout(spans: number[], k: number, gap: number): { col: number; span: number }[] {
  const top = new Array(k).fill(0);
  const cols = spans.map((s) => {
    let c = 0;
    for (let x = 1; x < k; x++) if (top[x] < top[c]) c = x;
    top[c] += s;
    return c;
  });
  const used = top.filter((t) => t > 0);
  const target = Math.round(used.reduce((a, b) => a + b, 0) / used.length);
  const out = spans.map((s, i) => ({ col: cols[i] + 1, span: s }));
  for (let c = 0; c < k; c++) {
    const idx = cols.map((cc, i) => (cc === c ? i : -1)).filter((i) => i >= 0);
    if (!idx.length) continue;
    const img = idx.reduce((a, i) => a + spans[i] - gap, 0);
    const want = target - gap * idx.length;
    let left = want;
    idx.forEach((i, n) => {
      const h = n === idx.length - 1 ? left : Math.round(((spans[i] - gap) * want) / img);
      left -= h;
      out[i].span = Math.max(20, h) + gap;
    });
  }
  return out;
}
