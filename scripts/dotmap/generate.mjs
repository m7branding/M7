#!/usr/bin/env node
/**
 * Genereert de gestippelde kaarten voor de klantenkaart op /over-m7.
 *
 *   node scripts/dotmap/generate.mjs
 *
 * Bron: Natural Earth via npm `world-atlas` (land 50m voor de wereld, landen 10m voor de
 * close-up), ingelezen met `topojson-client`, geprojecteerd met `d3-geo`. Dat zijn alleen
 * devDependencies: de site zelf laadt geen geodata, alleen de uitkomst van dit script:
 *
 *   public/media/map/world-dots.svg   wereld (Natural Earth 1, zonder Antarctica)
 *   public/media/map/nl-dots.svg      close-up Nederland (Mercator), buurlanden gedimd
 *   src/content/generated/dotmap.ts   afmetingen + projectieparameters, zodat de component
 *                                     klantlocaties (lat/lon) zelf op de kaart kan zetten
 *
 * De klantlocaties staan los hiervan in src/content/client-locations.ts: die lijst aanpassen
 * vraagt GEEN nieuwe run. Alleen opnieuw draaien als je raster, uitsnede of stijl wijzigt.
 *
 * Elke stip is een subpad "m dx 0 h0" met een ronde lijnkap: duizenden stippen in één
 * <path>, een paar tientallen kB, scherp op elk formaat.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { geoMercator, geoNaturalEarth1 } from "d3-geo";
import { feature } from "topojson-client";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const OUT_SVG = path.join(ROOT, "public/media/map");
const OUT_TS = path.join(ROOT, "src/content/generated/dotmap.ts");

/* ------------------------------------------------------------------ instellingen */
const WORLD = {
  width: 1000,
  spacing: 5, // afstand tussen stippen (viewBox-eenheden)
  dot: 2.3, // diameter
  north: 83.7, // net boven Groenland
  south: -56, // Kaap Hoorn; Antarctica valt weg
  coverage: 0.3, // aandeel land in een rastercel (3×3 monsters) voor een stip
};
const NL = {
  width: 440,
  spacing: 5,
  dot: 2.4,
  west: 3.2,
  east: 7.35,
  south: 50.66,
  north: 53.62,
  coverage: 0.45,
  dim: 0.24, // dekking van stippen in buurlanden t.o.v. Nederland
  dimDot: 1.8, // en iets kleiner, zodat de vorm van NL eruit springt
};

/** IJsselmeer en Markermeer (in Natural Earth 'admin 0' gewoon land): met de hand uitgespaard. */
const LAKES = [
  // IJsselmeer
  [
    [5.035, 52.94], [5.17, 53.0], [5.3, 53.06], [5.39, 53.09], [5.41, 53.03], [5.42, 52.97], [5.38, 52.93],
    [5.36, 52.88], [5.47, 52.85], [5.6, 52.85], [5.7, 52.84], [5.64, 52.78], [5.6, 52.72], [5.6, 52.66],
    [5.66, 52.62], [5.74, 52.6], [5.62, 52.575], [5.5, 52.56], [5.44, 52.545], [5.36, 52.62], [5.29, 52.7],
    [5.25, 52.745], [5.16, 52.77], [5.11, 52.775], [5.07, 52.83], [5.05, 52.89],
  ],
  // Markermeer + IJmeer
  [
    [5.29, 52.7], [5.36, 52.62], [5.44, 52.545], [5.43, 52.5], [5.35, 52.45], [5.25, 52.4], [5.17, 52.37],
    [5.08, 52.34], [5.02, 52.37], [5.04, 52.42], [5.09, 52.46], [5.06, 52.51], [5.06, 52.58], [5.07, 52.64],
    [5.18, 52.67],
  ],
];

/* ------------------------------------------------------------------ geometrie */
const atlas = (file) => require(`world-atlas/${file}`);

/**
 * Ring 'uitvouwen' over de datumgrens: topojson plakt Eurazië (Tsjoekotka) en Fiji over ±180°
 * aan elkaar, dus lengtegraden mogen hier buiten [-180, 180] lopen zodat de ring vlak blijft.
 */
function unwrap(ring, near) {
  let off = 0;
  let prev = null;
  const out = ring.map(([x, y]) => {
    if (prev !== null) {
      const d = x + off - prev;
      if (d > 180) off -= 360;
      else if (d < -180) off += 360;
    }
    prev = x + off;
    return [x + off, y];
  });
  // gaten naar dezelfde 'wikkeling' als de buitenring schuiven
  if (near !== undefined) {
    const shift = Math.round((near - out[0][0]) / 360) * 360;
    if (shift) for (const p of out) p[0] += shift;
  }
  return out;
}

/** Polygonen (ringen in lon/lat) met bounding box, voor snelle punt-in-polygoon tests. */
function polygonsOf(geometry, keep = () => true) {
  const polys = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.type === "MultiPolygon" ? geometry.coordinates : [];
  return polys
    .filter(keep)
    .map((input) => {
      const outer = unwrap(input[0]);
      const rings = [outer, ...input.slice(1).map((h) => unwrap(h, outer[0][0]))];
      let w = Infinity, e = -Infinity, s = Infinity, n = -Infinity;
      for (const [x, y] of outer) {
        if (x < w) w = x;
        if (x > e) e = x;
        if (y < s) s = y;
        if (y > n) n = y;
      }
      return { rings, w, e, s, n };
    })
    .filter((p) => p.s > -60); // Antarctica (rond de pool) doet niet mee
}

/** Even-odd over alle ringen (gaten tellen vanzelf mee); ook ±360° proberen i.v.m. uitvouwen. */
function contains(polys, lon, lat) {
  for (const p of polys) {
    if (lat < p.s || lat > p.n) continue;
    for (const L of [lon, lon + 360, lon - 360]) {
      if (L < p.w || L > p.e) continue;
      let inside = false;
      for (const ring of p.rings) {
        for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
          const [xi, yi] = ring[i];
          const [xj, yj] = ring[j];
          if (yi > lat !== yj > lat && L < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
        }
      }
      if (inside) return true;
    }
  }
  return false;
}

const ringContains = (ring, lon, lat) => contains([{ rings: [ring], w: -180, e: 180, s: -90, n: 90 }], lon, lat);

/** Aandeel van een 3×3 monsterraster binnen de cel dat `test` haalt. */
function coverage(proj, x, y, step, test) {
  let hit = 0;
  for (const oy of [-1, 0, 1])
    for (const ox of [-1, 0, 1]) {
      const ll = proj.invert([x + (ox * step) / 3, y + (oy * step) / 3]);
      if (ll && Number.isFinite(ll[0]) && Math.abs(ll[0]) <= 180 && test(ll[0], ll[1])) hit++;
    }
  return hit / 9;
}

/** Rijen stippen → compact SVG-pad. */
function dotsPath(rows, spacing) {
  const fmt = (v) => String(Math.round(v * 100) / 100);
  let d = "";
  for (const [y, xs] of rows) {
    if (!xs.length) continue;
    d += `M${fmt(xs[0])} ${fmt(y)}h0`;
    for (let i = 1; i < xs.length; i++) {
      const dx = xs[i] - xs[i - 1];
      d += dx === spacing ? `m${fmt(spacing)} 0h0` : `m${fmt(dx)} 0h0`;
    }
  }
  return d;
}

const svg = (w, h, paths) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">` +
  paths.map(({ d, width, opacity = 1 }) => `<path d="${d}" fill="none" stroke="#fff" stroke-opacity="${opacity}" stroke-width="${width}" stroke-linecap="round"/>`).join("") +
  `</svg>\n`;

const hash = (s) => crypto.createHash("sha1").update(s).digest("hex").slice(0, 8);
const r4 = (v) => Math.round(v * 1e4) / 1e4;

/* ------------------------------------------------------------------ wereld */
function world() {
  const topo = atlas("land-50m.json");
  const land = feature(topo, topo.objects.land);
  const polys = land.features.flatMap((f) => polygonsOf(f.geometry));

  const { width: W, spacing: S } = WORLD;
  const k = W / (2 * Math.PI * 0.8707); // breedte op de evenaar = W
  const p0 = geoNaturalEarth1().scale(k).translate([W / 2, 0]);
  const top = p0([0, WORLD.north])[1];
  const bottom = p0([0, WORLD.south])[1];
  const ty = -top;
  const H = Math.round(bottom - top);
  const proj = geoNaturalEarth1().scale(k).translate([W / 2, ty]);

  const rows = [];
  let count = 0;
  for (let y = S / 2; y < H; y += S) {
    const xs = [];
    for (let x = S / 2; x < W; x += S) {
      if (coverage(proj, x, y, S, (lon, lat) => contains(polys, lon, lat)) >= WORLD.coverage) xs.push(x);
    }
    count += xs.length;
    rows.push([y, xs]);
  }
  const body = svg(W, H, [{ d: dotsPath(rows, S), width: WORLD.dot }]);
  fs.writeFileSync(path.join(OUT_SVG, "world-dots.svg"), body);
  return { file: "world-dots.svg", v: hash(body), w: W, h: H, spacing: S, dot: WORLD.dot, dots: count, projection: { type: "naturalEarth1", k: r4(k), tx: r4(W / 2), ty: r4(ty) }, check: proj };
}

/* ------------------------------------------------------------------ Nederland */
function netherlands() {
  const topo = atlas("countries-10m.json");
  const fc = feature(topo, topo.objects.countries);
  const byId = (id) => fc.features.find((f) => f.id === id);
  // Alleen het Europese deel van NL (niet de Caribische eilanden)
  const nl = polygonsOf(byId("528").geometry, (rings) => rings[0].every(([x]) => x > 0));
  const near = ["056", "276", "442", "250"].flatMap((id) => polygonsOf(byId(id).geometry));

  const { width: W, spacing: S } = NL;
  const rad = Math.PI / 180;
  const k = W / ((NL.east - NL.west) * rad);
  const p0 = geoMercator().scale(k).translate([0, 0]);
  const [x0, yTop] = p0([NL.west, NL.north]);
  const [, yBottom] = p0([NL.east, NL.south]);
  const tx = -x0;
  const ty = -yTop;
  const H = Math.round(yBottom - yTop);
  const proj = geoMercator().scale(k).translate([tx, ty]);

  const isNL = (lon, lat) => contains(nl, lon, lat) && !LAKES.some((ring) => ringContains(ring, lon, lat));
  const isNear = (lon, lat) => contains(near, lon, lat);

  const rowsNL = [];
  const rowsNear = [];
  let count = 0;
  for (let y = S / 2; y < H; y += S) {
    const a = [];
    const b = [];
    for (let x = S / 2; x < W; x += S) {
      if (coverage(proj, x, y, S, isNL) >= NL.coverage) a.push(x);
      else if (coverage(proj, x, y, S, isNear) >= 0.5) b.push(x);
    }
    count += a.length;
    rowsNL.push([y, a]);
    rowsNear.push([y, b]);
  }
  const body = svg(W, H, [
    { d: dotsPath(rowsNear, S), width: NL.dimDot, opacity: NL.dim },
    { d: dotsPath(rowsNL, S), width: NL.dot },
  ]);
  fs.writeFileSync(path.join(OUT_SVG, "nl-dots.svg"), body);
  return {
    file: "nl-dots.svg",
    v: hash(body),
    w: W,
    h: H,
    spacing: S,
    dot: NL.dot,
    dots: count,
    projection: { type: "mercator", k: r4(k), tx: r4(tx), ty: r4(ty) },
    bounds: { west: NL.west, east: NL.east, south: NL.south, north: NL.north },
    check: proj,
  };
}

/* ------------------------------------------------------------------ run */
fs.mkdirSync(OUT_SVG, { recursive: true });
fs.mkdirSync(path.dirname(OUT_TS), { recursive: true });

const t0 = Date.now();
const maps = { WORLD_MAP: world(), NL_MAP: netherlands() };

// Zelfcontrole: dezelfde formules als src/components/about/clientMapGeo.ts
const raw = {
  naturalEarth1: (l, p) => {
    const p2 = p * p, p4 = p2 * p2;
    return [l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))), p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4)))];
  },
  mercator: (l, p) => [l, Math.log(Math.tan((Math.PI / 2 + p) / 2))],
};
for (const [name, m] of Object.entries(maps)) {
  const pt = [5.5519, 51.7048];
  const [rx, ry] = raw[m.projection.type](pt[0] * (Math.PI / 180), pt[1] * (Math.PI / 180));
  const mine = [m.projection.tx + m.projection.k * rx, m.projection.ty - m.projection.k * ry];
  const ref = m.check(pt);
  const err = Math.hypot(mine[0] - ref[0], mine[1] - ref[1]);
  if (err > 0.05) throw new Error(`${name}: projectie wijkt af (${err})`);
  delete m.check;
}

const ts = `/* Gegenereerd door scripts/dotmap/generate.mjs: niet met de hand aanpassen. */
/* Bron: Natural Earth (world-atlas). Klantlocaties staan in src/content/client-locations.ts. */

${Object.entries(maps)
  .map(([name, { file, v, ...m }]) => `export const ${name} = ${JSON.stringify({ src: `/media/map/${file}?v=${v}`, ...m }, null, 2)} as const;`)
  .join("\n\n")}

export type DotMapMeta = typeof WORLD_MAP | typeof NL_MAP;
`;
fs.writeFileSync(OUT_TS, ts);

for (const [name, m] of Object.entries(maps)) {
  const size = fs.statSync(path.join(OUT_SVG, m.file)).size;
  console.log(`${name}: ${m.w}×${m.h}, ${m.dots} stippen, ${(size / 1024).toFixed(1)} kB`);
}
console.log(`klaar in ${((Date.now() - t0) / 1000).toFixed(1)} s`);
