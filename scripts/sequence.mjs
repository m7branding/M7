#!/usr/bin/env node
/**
 * Zet een animatie om naar een scroll-gestuurde frame-reeks voor de site.
 *
 *   node scripts/sequence.mjs <bron> <naam>
 *
 * <bron>  - een "movie-to-lottie" JSON (zoals de Webflow-Lotties met ingebakken frames), of
 *         - een video (.mp4/.mov/.webm) — vereist ffmpeg in je PATH
 * <naam>  - mapnaam, bv. "hero" → public/media/sequences/hero/{lg,sm}/0000.webp + manifest.json
 *
 * Output: lg (max 1100px breed, alle frames) en sm (max 720px, elk 2e frame) als WebP
 * (via ffmpeg) of JPEG (fallback zonder ffmpeg). Gebruik daarna in content:
 *   media: { type: "sequence", src: "/media/sequences/<naam>" }
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const [src, name] = process.argv.slice(2);
if (!src || !name) {
  console.error("Gebruik: node scripts/sequence.mjs <bron.json|video> <naam>");
  process.exit(1);
}
const out = path.join(process.cwd(), "public/media/sequences", name);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "m7seq-"));
const hasFfmpeg = (() => {
  try {
    execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
})();

let fps = 30;
let frames = [];

if (src.endsWith(".json")) {
  const data = JSON.parse(fs.readFileSync(src, "utf8"));
  fps = data.fr || 30;
  const assets = (data.assets || []).filter((a) => typeof a.p === "string" && a.p.startsWith("data:image"));
  if (!assets.length) throw new Error("Geen ingebakken frames gevonden in deze Lottie (alleen movie-to-lottie wordt ondersteund).");
  assets.forEach((a, i) => {
    const [, b64] = a.p.split(",");
    const ext = a.p.startsWith("data:image/png") ? "png" : "jpg";
    const f = path.join(tmp, `${String(i).padStart(4, "0")}.${ext}`);
    fs.writeFileSync(f, Buffer.from(b64, "base64"));
    frames.push(f);
  });
} else {
  if (!hasFfmpeg) throw new Error("Voor video's is ffmpeg nodig.");
  execFileSync("ffmpeg", ["-loglevel", "error", "-i", src, "-vf", "fps=30", path.join(tmp, "%04d.png")]);
  frames = fs.readdirSync(tmp).sort().map((f) => path.join(tmp, f));
}

const sets = [
  { dir: "lg", width: 1100, step: 1, q: 68 },
  { dir: "sm", width: 720, step: 2, q: 62 },
];
fs.rmSync(out, { recursive: true, force: true });
const manifest = { fps, sets: {} };
for (const s of sets) {
  const dir = path.join(out, s.dir);
  fs.mkdirSync(dir, { recursive: true });
  const pick = frames.filter((_, i) => i % s.step === 0);
  pick.forEach((f, i) => {
    const base = path.join(dir, String(i).padStart(4, "0"));
    if (hasFfmpeg) {
      execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", f, "-vf", `scale='min(${s.width},iw)':-2`, "-c:v", "libwebp", "-quality", String(s.q), `${base}.webp`]);
    } else {
      fs.copyFileSync(f, `${base}.jpg`);
    }
  });
  manifest.sets[s.dir] = { count: pick.length, ext: hasFfmpeg ? "webp" : "jpg" };
}
const probe = path.join(out, "lg", `0000.${manifest.sets.lg.ext}`);
if (hasFfmpeg) {
  const dims = execFileSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0", probe]).toString().trim();
  const [w, h] = dims.split(",").map(Number);
  manifest.width = w;
  manifest.height = h;
}
fs.writeFileSync(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2));
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`✓ ${name}: lg ${manifest.sets.lg.count} / sm ${manifest.sets.sm.count} frames → ${path.relative(process.cwd(), out)}`);
