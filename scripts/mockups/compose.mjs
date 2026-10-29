#!/usr/bin/env node
/* ============================================================
   Mockup-pipeline: screenshots → strakke space-grey device-mockups (WebP).

   node scripts/mockups/compose.mjs --captures <dir> [opties]

     --captures <dir>  map met <slug>/hero-desktop.png … (of env MOCKUP_CAPTURES)
     --sites <file>    sites.json ({slug,url,brandColor,hasDarkHero,…}[]); standaard
                       <captures>/sites.json of <captures>/../sites.json
     --slug a,b        alleen deze slugs (standaard: alles met captures)
     --only cover,ipad alleen deze composities
     --all             alle varianten (anders 4 galerijbeelden per project, afwisselend)
     --force           opnieuw renderen, ook als de uitvoer nieuwer is dan de bronnen
     --no-manifest     src/content/generated/case-media.ts niet herschrijven
     --jobs <n>        projecten tegelijk (standaard 2)

   Per project in public/media/cases/<slug>/:
     m-cover.webp (2400×1500), m-ipad / m-phones / m-phones-angle / m-display / m-mac /
     m-detail.webp (galerij), screen-desktop.webp + screen-mobile.webp (device-hero).
   Daarna schrijft write-manifest.mjs de manifest op basis van wat er op schijf staat.
   ============================================================ */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "./pw.mjs";
import { writeManifest } from "./write-manifest.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");
const TPL = path.join(HERE, "templates");
const OUT = path.join(ROOT, "public/media/cases");
const DEVICE_CSS = path.join(ROOT, "src/components/cases/devices.css");

/* ---------- opties ---------- */
const argv = process.argv.slice(2);
const flag = (k) => argv.includes(k);
const opt = (k, d) => {
  const i = argv.indexOf(k);
  return i >= 0 ? argv[i + 1] : d;
};
const CAPTURES = path.resolve(opt("--captures", process.env.MOCKUP_CAPTURES || ""));
if (!opt("--captures") && !process.env.MOCKUP_CAPTURES) {
  console.error("Geef --captures <dir> (of MOCKUP_CAPTURES).");
  process.exit(1);
}
const ONLY = opt("--only")?.split(",");
const SLUGS = opt("--slug")?.split(",");
const FORCE = flag("--force");
const ALL = flag("--all");
const JOBS = Number(opt("--jobs", 2));
const TMP = path.join(os.tmpdir(), "m7-mockups");
fs.mkdirSync(TMP, { recursive: true });

/* ---------- composities ---------- */
// bg: studio (licht), graphite (donker), tint (merkkleur, licht)
const COMPS = {
  cover: { w: 1200, h: 750, q: 80, needs: ["desk", "mob"], bg: (s) => (s.dark ? "studio" : "graphite") },
  ipad: { w: 1200, h: 800, q: 80, needs: ["tab"], bg: () => "graphite" },
  phones: { w: 1200, h: 800, q: 80, needs: ["mob", "mob2", "mob3"], bg: () => "studio" },
  "phones-angle": { w: 1200, h: 800, q: 80, needs: ["mob", "mob2", "mob3"], bg: () => "tint" },
  display: { w: 1200, h: 800, q: 80, needs: ["desk2", "mob2"], bg: () => "studio" },
  mac: { w: 1200, h: 800, q: 82, needs: ["desk"], bg: (s) => (s.dark ? "studio" : "graphite") },
  detail: { w: 1200, h: 860, q: 82, needs: ["detail", "detailMob"], bg: () => "tint" },
};
/* volgorde in de galerij (eerste = sterkste) */
const ORDER = ["ipad", "phones", "detail", "display", "mac", "phones-angle"];

const hash = (s) => parseInt(crypto.createHash("md5").update(s).digest("hex").slice(0, 8), 16);

/* standaard 4 galerijbeelden; per project afwisselend (zelfde slug → zelfde keuze) */
function pickComps(slug, shots) {
  const ok = (c) => COMPS[c].needs.every((n) => shots[n]);
  let list = ALL ? ORDER.filter(ok) : [];
  if (!ALL) {
    const h = hash(slug);
    const phones = h % 2 ? ["phones", "phones-angle"] : ["phones-angle", "phones"];
    const desk = (h >> 3) % 2 ? ["display", "mac"] : ["mac", "display"];
    for (const group of [["ipad"], phones, ["detail"], desk]) {
      const c = group.find(ok);
      if (c) list.push(c);
    }
  }
  if (ok("cover")) list.unshift("cover");
  if (ONLY) list = list.filter((c) => ONLY.includes(c));
  return list;
}

/* ---------- python-hulp ---------- */
function py(cmd, job) {
  const out = execFileSync("python3", [path.join(HERE, "img.py"), cmd], {
    input: JSON.stringify(job),
    maxBuffer: 64 << 20,
  });
  return JSON.parse(out.toString());
}

/* ---------- sites.json ---------- */
function loadSites() {
  const cands = [opt("--sites"), path.join(CAPTURES, "sites.json"), path.join(CAPTURES, "../sites.json")].filter(Boolean);
  for (const f of cands)
    if (fs.existsSync(f)) {
      const j = JSON.parse(fs.readFileSync(f, "utf8"));
      const arr = Array.isArray(j) ? j : j.sites ?? Object.values(j);
      return Object.fromEntries(arr.filter((s) => s && s.slug).map((s) => [s.slug, s]));
    }
  return {};
}

/* ---------- welke beelden gaan in welk scherm ---------- */
const PHONE_WIN = 1584; // 780 × (schermhoogte onder de statusbalk / schermbreedte)
const CARD_WIN = Math.round(780 * (454 / 300));

function planShots(dir, a) {
  const f = a.files;
  const has = (n) => !!f[n];
  const p = (n) => path.join(dir, `${n}.png`);
  const pages = Object.keys(f).filter((n) => n.startsWith("page-"));
  const pageDesk = pages.find((n) => n.endsWith("-desktop"));
  const pageMob = pages.find((n) => n.endsWith("-mobile"));
  const shots = {};
  if (has("hero-desktop")) shots.desk = { src: p("hero-desktop") };
  if (pageDesk) shots.desk2 = { src: p(pageDesk) };
  else if (has("hero-desktop")) shots.desk2 = shots.desk;
  if (has("hero-tablet")) shots.tab = { src: p("hero-tablet") };
  if (has("hero-mobile")) shots.mob = { src: p("hero-mobile") };
  const ys = a.mobileY ?? [];
  const fm = has("full-mobile") ? p("full-mobile") : null;
  if (pageMob) shots.mob2 = { src: p(pageMob) };
  else if (fm && ys[0] != null) shots.mob2 = { src: fm, y: ys[0] };
  const y3 = pageMob ? ys[0] : ys[1];
  if (fm && y3 != null) shots.mob3 = { src: fm, y: y3 };
  if (has("hero-desktop") && a.detail) shots.detail = { src: p("hero-desktop"), region: a.detail };
  const cy = (a.mobileCardY ?? [])[0] ?? ys[0];
  if (fm && cy != null) shots.detailMob = { src: fm, y: cy };
  return shots;
}

/* ---------- versheid (idempotent) ---------- */
const mtime = (f) => (fs.existsSync(f) ? fs.statSync(f).mtimeMs : 0);
const TPL_TIME = Math.max(mtime(DEVICE_CSS), mtime(path.join(HERE, "compose.mjs")), ...fs.readdirSync(TPL).map((f) => mtime(path.join(TPL, f))));
function fresh(out, inputs) {
  if (FORCE || !fs.existsSync(out)) return false;
  const t = mtime(out);
  return t > TPL_TIME && inputs.every((i) => mtime(i) < t);
}

/* ---------- renderen ---------- */
async function render(ctx, slug, comps, shots, site) {
  const conf = { brand: site.brand, dark: site.dark };
  // 1. alle composities laden en de schermen opmeten
  const pages = [];
  for (const name of comps) {
    const C = COMPS[name];
    const page = await ctx.newPage();
    await page.setViewportSize({ width: C.w, height: C.h });
    const M = { bg: C.bg(conf), brand: conf.brand, shots: {}, preview: false };
    await page.addInitScript((m) => (window.M = m), M);
    await page.goto(pathToFileURL(path.join(TPL, `${name}.html`)).href);
    await page.waitForFunction(() => document.documentElement.dataset.ready === "1");
    const boxes = await page.evaluate(() =>
      [...document.querySelectorAll(".dx-scr[data-shot], .card[data-shot]")].map((el, i) => {
        el.dataset.i = String(i);
        return { i, shot: el.dataset.shot, w: el.offsetWidth, h: el.offsetHeight };
      }),
    );
    pages.push({ name, page, boxes });
  }
  // 2. exact voorgesneden beelden (2x), één python-run voor het hele project
  const items = [];
  for (const { name, boxes } of pages)
    for (const b of boxes) {
      const s = shots[b.shot];
      if (!s) continue;
      items.push({ ...s, w: b.w * 2, h: b.h * 2, out: path.join(TMP, slug, `${name}-${b.i}.png`), key: `${name}:${b.i}` });
    }
  const prepped = Object.fromEntries(py("prep", { items }).map((r) => [r.out, r]));
  // 3. beelden erin, statusbalk/notch-band in de kleur van de site, screenshot → WebP
  const results = [];
  for (const { name, page, boxes } of pages) {
    const fill = boxes
      .map((b) => {
        const it = items.find((x) => x.key === `${name}:${b.i}`);
        if (!it) return null;
        const r = prepped[it.out];
        return { i: b.i, url: pathToFileURL(it.out).href, top: r.top, topLum: r.topLum, botLum: r.botLum };
      })
      .filter(Boolean);
    await page.evaluate(async (fill) => {
      await Promise.all(
        fill.map(async (f) => {
          const el = document.querySelector(`[data-i="${f.i}"]`);
          const img = new Image();
          img.src = f.url;
          img.alt = "";
          img.style.objectFit = "fill";
          await img.decode().catch(() => {});
          el.replaceChildren(img);
          const scr = el.parentElement;
          scr.style.setProperty("--dx-top", `rgb(${f.top.join(",")})`);
          scr.style.setProperty("--dx-top-fg", f.topLum > 0.6 ? "#000" : "#fff");
          scr.style.setProperty("--dx-home", f.botLum > 0.55 ? "rgba(0,0,0,.78)" : "rgba(255,255,255,.86)");
          scr.style.setProperty("--dx-scr-bg", `rgb(${f.top.join(",")})`);
        }),
      );
      await document.fonts.ready;
    }, fill);
    await page.waitForTimeout(120);
    const png = path.join(TMP, slug, `${name}.png`);
    await page.screenshot({ path: png });
    await page.close();
    results.push({ name, png });
  }
  return results;
}

async function doSlug(ctx, slug, sites) {
  const dir = path.join(CAPTURES, slug);
  const site = sites[slug] ?? {};
  const a = py("analyze", { dir, mobileWin: PHONE_WIN, cardWin: CARD_WIN });
  const shots = planShots(dir, a);
  const brand = /^#[0-9a-f]{6}$/i.test(site.brandColor ?? "") ? site.brandColor : a.brand ?? "#8a8f98";
  const dark = typeof site.hasDarkHero === "boolean" ? site.hasDarkHero : (a.heroLum ?? 1) < 0.42;
  const outDir = path.join(OUT, slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.join(TMP, slug), { recursive: true });

  const comps = pickComps(slug, shots).filter((c) => {
    const ins = COMPS[c].needs.map((n) => shots[n].src);
    return !fresh(path.join(outDir, `m-${c}.webp`), ins);
  });
  const log = [];
  if (comps.length) {
    const res = await render(ctx, slug, comps, shots, { brand, dark });
    const enc = py("webp", { items: res.map((r) => ({ src: r.png, out: path.join(outDir, `m-${r.name}.webp`), q: COMPS[r.name].q })) });
    for (const e of enc) log.push([path.basename(e.out), e.bytes]);
  }
  // lange screenshots voor de bewegende hero
  const longs = [];
  const fd = path.join(dir, "full-desktop.png");
  const fm = path.join(dir, "full-mobile.png");
  if (a.files["full-desktop"] && !fresh(path.join(outDir, "screen-desktop.webp"), [fd]) && (!ONLY || ONLY.includes("screens")))
    longs.push({ src: fd, out: path.join(outDir, "screen-desktop.webp"), w: 1440, maxh: 6000, q: 72 });
  if (a.files["full-mobile"] && !fresh(path.join(outDir, "screen-mobile.webp"), [fm]) && (!ONLY || ONLY.includes("screens")))
    longs.push({ src: fm, out: path.join(outDir, "screen-mobile.webp"), w: 780, maxh: 5000, q: 72 });
  if (longs.length) for (const e of py("long", { items: longs })) log.push([path.basename(e.out), e.bytes]);
  const kb = (b) => `${Math.round(b / 1024)} KB`;
  console.log(`${slug}  (brand ${brand}, ${dark ? "donker" : "licht"})  ${log.map(([n, b]) => `${n} ${kb(b)}`).join(" · ") || "up-to-date"}`);
}

/* ---------- main ---------- */
const sites = loadSites();
let slugs = fs
  .readdirSync(CAPTURES, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(CAPTURES, d.name, "hero-desktop.png")))
  .map((d) => d.name);
if (SLUGS) slugs = slugs.filter((s) => SLUGS.includes(s));
const skip = new Set(Object.values(sites).filter((s) => s.verified === false || s.skip).map((s) => s.slug));
slugs = slugs.filter((s) => !skip.has(s));
if (!slugs.length) {
  console.error("Geen captures gevonden in", CAPTURES);
  process.exit(1);
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const queue = [...slugs];
const t0 = Date.now();
await Promise.all(
  Array.from({ length: Math.max(1, JOBS) }, async () => {
    for (let s; (s = queue.shift()); ) {
      try {
        await doSlug(ctx, s, sites);
      } catch (e) {
        console.error(`${s}: MISLUKT`, e.message.split("\n")[0]);
      }
    }
  }),
);
await browser.close();
console.log(`klaar: ${slugs.length} project(en) in ${Math.round((Date.now() - t0) / 1000)} s`);

if (!flag("--no-manifest")) writeManifest({ log: true });
