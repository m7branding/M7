// Rendert een studio-spec (JSON) frame voor frame naar mp4 (of losse stills).
//   node render.cjs spec.json out.mp4 [audio.wav]
//   node render.cjs spec.json out.jpg --still 1.5     (één frame op t=1.5 s)
const { chromium } = require("playwright");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const here = __dirname;
(async () => {
const [specPath, out, ...rest] = process.argv.slice(2);
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
const stillIdx = rest.indexOf("--still");
const stills = stillIdx >= 0 ? rest[stillIdx + 1].split(",").map(Number) : null;
const audio = rest.find((a) => a.endsWith(".wav") || a.endsWith(".m4a"));
const W = spec.w || 1080, H = spec.h || 1920, fps = spec.fps || 30;

const browser = await chromium.launch({ args: ["--force-color-profile=srgb", "--disable-lcd-text", "--font-render-hinting=none", "--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
page.on("pageerror", (e) => console.error("PAGEERROR", e.message));
await page.goto("file://" + path.join(here, "studio", "studio.html"));
await page.evaluate((s) => window.M7.init(s), spec);
const cdp = await page.context().newCDPSession(page);
const shot = async (q = 92) => Buffer.from((await cdp.send("Page.captureScreenshot", { format: "jpeg", quality: q, optimizeForSpeed: true })).data, "base64");

if (stills) {
  for (let k = 0; k < stills.length; k++) {
    await page.evaluate((t) => window.M7.render(t), stills[k]);
    const f = stills.length > 1 ? out.replace(/(\.\w+)$/, `-${k}$1`) : out;
    if (f.endsWith(".png")) await page.screenshot({ path: f, type: "png" });
    else fs.writeFileSync(f, await shot(95));
  }
  await browser.close();
  return;
}

const n = Math.round(spec.duration * fps);
// motion blur (round 21): mb sub-frames per frame over a 180-degree shutter, averaged by ffmpeg (tmix). Only inside
// mbRanges (the fast moments: cards flying in, transitions); elsewhere one capture is repeated, so it costs nothing.
const MB = Math.max(1, spec.mb || 1), shutter = spec.shutter ?? 0.5;
const ranges = spec.mbRanges || null;
const fast = (t) => MB > 1 && (!ranges || ranges.some(([a, b]) => t >= a - 0.02 && t <= b + 0.02));
const args = ["-y", "-loglevel", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-framerate", String(fps * MB), "-i", "-"];
if (audio) args.push("-i", audio);
if (MB > 1) args.push("-vf", `tmix=frames=${MB},select='eq(mod(n\\,${MB})\\,${MB - 1})',setpts=N/(${fps}*TB)`);
args.push("-c:v", "libx264", "-preset", "faster", "-crf", String(spec.crf ?? 20), "-pix_fmt", "yuv420p", "-profile:v", "high", "-r", String(fps), "-threads", "3");
if (audio) args.push("-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-shortest");
args.push("-movflags", "+faststart", out);
const ff = spawn("ffmpeg", args, { stdio: ["pipe", "inherit", "inherit"] });
const t0 = Date.now();
const put = async (buf) => { if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r)); };
for (let i = 0; i < n; i++) {
  const t = i / fps;
  if (fast(t)) {
    for (let k = 0; k < MB; k++) {
      await page.evaluate((tt) => window.M7.render(tt), t + ((k + 0.5) / MB - 0.5) * shutter / fps);
      await put(await shot(92));
    }
  } else {
    await page.evaluate((tt) => window.M7.render(tt), t);
    const buf = await shot(90);
    for (let k = 0; k < MB; k++) await put(buf);
  }
}
ff.stdin.end();
await new Promise((r) => ff.on("close", r));
await browser.close();
console.log(`rendered ${out} ${n} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);

})();
