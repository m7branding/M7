/* ============================================================
   Zoeken op soort bedrijf: normaliseren, slugs en een kleine,
   typfout-tolerante scoring. Puur (geen imports), zodat zowel de
   server (index + hash-slugs) als de client (zoekbalk) het delen.
   ============================================================ */

/** Kleine letters, zonder accenten en leestekens: "Kapsalons & Barbiers" → "kapsalons barbiers". */
export const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/['’`´]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** URL-hash-vriendelijke slug: "Dealers & garages" → "dealers-garages". */
export const slugify = (s: string) => norm(s).replace(/\s+/g, "-");

/** Heel grove stam voor NL/EN meervouden: makelaars → makelaar, bedrijven → bedrijv, studios → studio. */
export const stem = (w: string) => {
  if (w.length > 5 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 5 && w.endsWith("en")) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith("s")) return w.slice(0, -1);
  return w;
};

/** Woorden die niets zeggen over het soort bedrijf. */
export const STOP = new Set([
  "en", "van", "voor", "de", "het", "een", "in", "met", "op", "tot", "die", "dat", "of", "bij", "aan", "om", "je", "jouw",
  "and", "the", "for", "with", "that", "who", "from", "to", "your", "a", "an", "on", "at",
  "bedrijf", "bedrijven", "bedrijv", "organisatie", "organisaties", "ondernemer", "ondernemers",
  "company", "companies", "business", "businesses", "organisation", "organisations", "organization", "organizations",
  "firm", "firms", "provider", "providers", "service", "services", "specialist", "specialists", "specialisten",
  "bureau", "bureaus", "kantoor", "kantoren", "office", "offices", "agency", "agencies", "zelfstandige", "independent",
]);

export const words = (s: string) => norm(s).split(" ").filter((w) => w.length > 1);

/** Optimal string alignment (Damerau-Levenshtein light), met vroege exit boven `max`. */
export function osa(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const n = a.length;
  const m = b.length;
  let prev2: number[] = [];
  let prev: number[] = Array.from({ length: m + 1 }, (_, j) => j);
  for (let i = 1; i <= n; i++) {
    const cur: number[] = [i];
    let rowMin = i;
    for (let j = 1; j <= m; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev2 = prev;
    prev = cur;
  }
  return prev[m];
}

/** Hoe goed past één zoekwoord bij één woord uit een label (0 = niet, 1 = exact). */
export function wordScore(t: string, st: string, w: string, sw: string): number {
  if (w === t) return 1;
  if (sw === st) return 0.96;
  if (w.startsWith(t)) return 0.9 - Math.min(0.15, (w.length - t.length) * 0.01);
  if (t.length >= 4 && sw.startsWith(st)) return 0.86;
  // samenstellingen: in het Nederlands zit de kern achteraan ("autodealers", "aankoopmakelaars")
  if (st.length >= 4 && (sw.endsWith(st) || w.endsWith(t))) return 0.86;
  if (st.length >= 4 && w.includes(st)) return 0.72;
  if (t.length >= 4) {
    const k = t.length >= 7 ? 2 : 1;
    if (osa(t, w.slice(0, t.length), k) <= k || osa(t, w.slice(0, t.length + 1), k) <= k) return 0.62;
  }
  return 0;
}

export interface Haystack {
  /** primaire woorden (label in de huidige taal) */
  w: string[];
  ws: string[];
  /** andere taal */
  a: string[];
  as: string[];
  /** extra trefwoorden (bv. uit de intro van een doelgroep) */
  k: string[];
  ks: string[];
  phrase: string;
}

export const haystack = (label: string, alt = "", kw = ""): Haystack => {
  const w = words(label);
  const a = words(alt);
  const k = kw ? kw.split(" ").filter(Boolean) : [];
  return { w, ws: w.map(stem), a, as: a.map(stem), k, ks: k.map(stem), phrase: norm(label) };
};

/** Score 0..~110 voor een (genormaliseerde) zoekopdracht; 0 = geen match. Alle zoekwoorden moeten ergens raken. */
export function scoreQuery(q: string, h: Haystack): number {
  const toks = words(q);
  if (!toks.length) return 0;
  let sum = 0;
  for (const t of toks) {
    const st = stem(t);
    let best = 0;
    for (let i = 0; i < h.w.length && best < 1; i++) best = Math.max(best, wordScore(t, st, h.w[i], h.ws[i]));
    for (let i = 0; i < h.a.length && best < 0.8; i++) best = Math.max(best, 0.8 * wordScore(t, st, h.a[i], h.as[i]));
    if (t.length >= 4) for (let i = 0; i < h.k.length && best < 0.55; i++) best = Math.max(best, 0.58 * wordScore(t, st, h.k[i], h.ks[i]));
    if (!best) return 0;
    sum += best;
  }
  let score = (sum / toks.length) * 100;
  const nq = norm(q);
  if (h.phrase === nq) score += 12;
  else if (h.phrase.startsWith(nq)) score += 8;
  else if (h.phrase.includes(nq)) score += 4;
  return score;
}

/** Zoekt de (eerste) plek van de zoekwoorden in het originele label, voor <mark>. */
export function highlight(label: string, q: string): [number, number][] {
  const toks = words(q).filter((t) => t.length > 1);
  if (!toks.length) return [];
  // genormaliseerde tekst met index-map naar het origineel
  let flat = "";
  const map: number[] = [];
  for (let i = 0; i < label.length; i++) {
    const c = label[i].normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    for (const ch of c) {
      flat += ch;
      map.push(i);
    }
  }
  const out: [number, number][] = [];
  for (const t of toks) {
    const st = stem(t);
    let at = flat.indexOf(t);
    let len = t.length;
    if (at < 0 && st.length >= 3) {
      at = flat.indexOf(st);
      len = st.length;
    }
    if (at >= 0) out.push([map[at], map[at + len - 1] + 1]);
  }
  out.sort((a, b) => a[0] - b[0]);
  // overlap samenvoegen
  const merged: [number, number][] = [];
  for (const r of out) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([...r]);
  }
  return merged;
}
