// Scroll-opname van een pagina van de M7-site als jpg-reeks (voor de 'nieuwe website'-reels).
// node capture_site.cjs <url> <outdir> <frames> <w> <h> [startY] [endY]
const { chromium } = require("playwright");
const fs = require("node:fs");
(async () => {
  const [url, out, nf, w, h, y0a, y1a] = process.argv.slice(2);
  const W = +w, Hh = +h, cssW = 390, dpr = W / cssW, cssH = Math.round(Hh / dpr);
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: cssW, height: cssH }, deviceScaleFactor: dpr, reducedMotion: "reduce", isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await p.addInitScript(() => { try { sessionStorage.setItem("m7-intro", "1"); localStorage.setItem("m7-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false })); } catch {} });
  await p.goto(url, { waitUntil: "networkidle", timeout: 180000 }).catch(() => {});
  await p.waitForTimeout(2500);
  // eerst doorscrollen zodat alles geladen en onthuld is
  const total = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  for (let y = 0; y <= total; y += 500) { await p.evaluate((y) => window.scrollTo(0, y), y); await p.waitForTimeout(140); }
  await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(1200);
  // cookiebanner / dock weg voor een schoon beeld
  await p.addStyleTag({ content: "[class*=cookie],[class*=consent],.dock,.fdock,[class*=support-]{display:none!important}" });
  const y0 = +(y0a || 0), y1 = Math.min(+(y1a || total), total);
  const n = +nf;
  for (let i = 0; i < n; i++) {
    const k = i / (n - 1);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; // ease in-out
    await p.evaluate((y) => window.scrollTo(0, y), Math.round(y0 + (y1 - y0) * e));
    await p.waitForTimeout(30);
    await p.screenshot({ path: `${out}/${String(i + 1).padStart(5, "0")}.jpg`, type: "jpeg", quality: 90 });
  }
  console.log("captured", n, "total", total);
  await b.close();
})();
