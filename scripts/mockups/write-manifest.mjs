#!/usr/bin/env node
/* ============================================================
   Schrijft src/content/generated/case-media.ts op basis van wat er
   in public/media/cases/<slug>/ staat (m-*.webp, screen-*.webp).
   Los te draaien (node scripts/mockups/write-manifest.mjs) of via compose.mjs.
   Instellingen per slug: scripts/mockups/config.json
     replaceCover: slugs waarvan de mockup-cover de bestaande cover vervangt
     noScreens:    slugs zonder bewegende device-hero (bv. eigen showcase)
     exclude:      slugs die niet in de manifest mogen
   ============================================================ */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");
const MEDIA = path.join(ROOT, "public/media/cases");
const OUT = path.join(ROOT, "src/content/generated/case-media.ts");

/** Volgorde in de galerij: sterkste beeld eerst. */
export const GALLERY_ORDER = ["ipad", "phones", "detail", "display", "mac", "phones-angle"];

export function writeManifest({ log = false } = {}) {
  const conf = fs.existsSync(path.join(HERE, "config.json")) ? JSON.parse(fs.readFileSync(path.join(HERE, "config.json"), "utf8")) : {};
  const replace = new Set(conf.replaceCover ?? []);
  const noScreens = new Set(conf.noScreens ?? []);
  const exclude = new Set(conf.exclude ?? []);
  const entries = {};
  let bytes = 0;
  for (const slug of fs.readdirSync(MEDIA).sort()) {
    const dir = path.join(MEDIA, slug);
    if (!fs.statSync(dir).isDirectory() || exclude.has(slug)) continue;
    const files = fs.readdirSync(dir).filter((f) => /^(m-.+|screen-(desktop|mobile|tablet))\.webp$/.test(f));
    if (!files.length) continue;
    for (const f of files) bytes += fs.statSync(path.join(dir, f)).size;
    const url = (f) => `/media/cases/${slug}/${f}`;
    const e = {};
    if (files.includes("m-cover.webp")) e.cover = url("m-cover.webp");
    const gallery = GALLERY_ORDER.map((g) => `m-${g}.webp`).filter((f) => files.includes(f));
    if (gallery.length) e.gallery = gallery.map(url);
    if (!noScreens.has(slug)) {
      const scr = {};
      for (const k of ["desktop", "mobile", "tablet"]) if (files.includes(`screen-${k}.webp`)) scr[k] = url(`screen-${k}.webp`);
      if (scr.desktop || scr.mobile) e.screens = scr;
    }
    if (e.cover && replace.has(slug)) e.replaceCover = true;
    entries[slug] = e;
  }
  const body = Object.entries(entries)
    .map(([slug, e]) => {
      const lines = [];
      if (e.cover) lines.push(`    cover: ${JSON.stringify(e.cover)},`);
      if (e.gallery) lines.push(`    gallery: [\n${e.gallery.map((g) => `      ${JSON.stringify(g)},`).join("\n")}\n    ],`);
      if (e.screens)
        lines.push(
          `    screens: { ${Object.entries(e.screens)
            .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
            .join(", ")} },`,
        );
      if (e.replaceCover) lines.push(`    replaceCover: true,`);
      return `  ${JSON.stringify(slug)}: {\n${lines.join("\n")}\n  },`;
    })
    .join("\n");
  const ts = `/* Gegenereerd door scripts/mockups — niet met de hand bewerken. */
import type { CaseMediaEntry } from "../case-media";

export const caseMedia: Record<string, CaseMediaEntry> = {${body ? `\n${body}\n` : ""}};
`;
  fs.writeFileSync(OUT, ts);
  if (log) console.log(`manifest: ${Object.keys(entries).length} project(en), ${(bytes / 1048576).toFixed(1)} MB aan mockups → ${path.relative(ROOT, OUT)}`);
  return entries;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) writeManifest({ log: true });
