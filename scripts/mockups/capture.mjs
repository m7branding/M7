/* ============================================================
   Testcaptures in het formaat van de mockup-pipeline.
   (De echte captures voor alle klanten komen uit een aparte stap;
   dit script is voor testen of om één site opnieuw te schieten.)

   node scripts/mockups/capture.mjs --out <dir> <slug>=<url> [<slug>=<url> …] [--page name=/pad]

   Schrijft per slug in <dir>/<slug>/:
     hero-desktop.png  2880×1800  (1440×900 @2x)
     full-desktop.png  1440×≤7000 (@1x, hele pagina)
     hero-mobile.png   1170×2532  (390×844 @3x)
     full-mobile.png   780×≤12000 (390 breed @2x)
     hero-tablet.png   2360×1640  (1180×820 @2x)
     page-<naam>-desktop.png / page-<naam>-mobile.png (optioneel, via --page)
   ============================================================ */

import { chromium } from "./pw.mjs";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const opt = (k) => {
  const i = args.indexOf(k);
  return i >= 0 ? args.splice(i, 2)[1] : undefined;
};
const outDir = opt("--out") ?? "captures";
const pages = [];
for (let p; (p = opt("--page")); ) pages.push(p.split("="));
const sites = args.map((a) => a.split("=")).filter((x) => x.length === 2);
if (!sites.length) {
  console.log("gebruik: node scripts/mockups/capture.mjs --out <dir> slug=https://site.nl [--page over=/over-ons]");
  process.exit(1);
}

/* cookiebanners: eerst netjes accepteren, anders verbergen */
const ACCEPT = /^(accept(eer|eren)?( all| alle)?( cookies)?|alles? (accepteren|toestaan)|akkoord|allow all|allow( all)? cookies|i agree|agree|ok(é|e)?|alle cookies accepteren|accepteer alle cookies|got it|toestaan)$/i;
const HIDE = [
  "#CybotCookiebotDialog",
  "#cookiebanner",
  ".cky-consent-container",
  ".cky-overlay",
  "#onetrust-banner-sdk",
  "#onetrust-consent-sdk",
  ".fs-cc-banner_component",
  "[class*='cookie-banner']",
  "[class*='cookie_banner']",
  "[id*='cookie-banner']",
  "[class*='consent-banner']",
  ".cmplz-cookiebanner",
  "#usercentrics-root",
  "#axeptio_overlay",
  ".termly-styles-root",
];

async function settle(page) {
  await page.waitForTimeout(1800);
  try {
    const btns = await page.$$("button, a[role=button], [role=button], a");
    for (const b of btns.slice(0, 400)) {
      const t = ((await b.innerText().catch(() => "")) || "").trim();
      if (t && t.length < 40 && ACCEPT.test(t) && (await b.isVisible().catch(() => false))) {
        await b.click({ timeout: 1500 }).catch(() => {});
        await page.waitForTimeout(600);
        break;
      }
    }
  } catch {}
  await page.addStyleTag({ content: `${HIDE.join(",")}{display:none!important}` }).catch(() => {});
  // chat-widgets weg (ze horen niet in een mockup)
  await page
    .addStyleTag({ content: `iframe[src*="intercom"],iframe[id*="hubspot"],#hubspot-messages-iframe-container,.intercom-lightweight-app,#crisp-chatbox,[class*="tawk"],#tidio-chat{display:none!important}` })
    .catch(() => {});
}

/* één keer rustig door de pagina, zodat lazy beelden en scroll-animaties hun eindstand hebben */
async function warm(page, maxH) {
  await page.evaluate(async (maxH) => {
    const step = Math.round(window.innerHeight * 0.6);
    const H = Math.min(document.documentElement.scrollHeight, maxH);
    for (let y = 0; y < H; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
  }, maxH);
  await page.waitForTimeout(1500);
}

async function shoot(browser, url, file, { w, h, dpr, mobile = false, full = 0 }) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: dpr,
    isMobile: mobile,
    hasTouch: mobile,
    userAgent: mobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1"
      : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
    locale: "nl-NL",
  });
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch (e) {
    console.log("  goto:", e.message.split("\n")[0]);
  }
  await settle(page);
  if (full) {
    await warm(page, full);
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    await page.screenshot({ path: file, fullPage: true, clip: { x: 0, y: 0, width: w, height: Math.min(H, full) } });
  } else {
    await warm(page, h * 3);
    await page.screenshot({ path: file });
  }
  await ctx.close();
}

const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
for (const [slug, url] of sites) {
  const dir = path.join(outDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  console.log(slug, url);
  await shoot(browser, url, path.join(dir, "hero-desktop.png"), { w: 1440, h: 900, dpr: 2 });
  await shoot(browser, url, path.join(dir, "full-desktop.png"), { w: 1440, h: 900, dpr: 1, full: 7000 });
  await shoot(browser, url, path.join(dir, "hero-mobile.png"), { w: 390, h: 844, dpr: 3, mobile: true });
  await shoot(browser, url, path.join(dir, "full-mobile.png"), { w: 390, h: 844, dpr: 2, mobile: true, full: 6000 });
  await shoot(browser, url, path.join(dir, "hero-tablet.png"), { w: 1180, h: 820, dpr: 2 });
  for (const [name, p] of pages) {
    const u = new URL(p, url).href;
    await shoot(browser, u, path.join(dir, `page-${name}-desktop.png`), { w: 1440, h: 900, dpr: 2 });
    await shoot(browser, u, path.join(dir, `page-${name}-mobile.png`), { w: 390, h: 844, dpr: 3, mobile: true });
  }
}
await browser.close();
