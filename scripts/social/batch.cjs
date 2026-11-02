// Many stills in one browser session: node batch.cjs jobs.json
// jobs: [{spec, out, t}] — out .jpg (q95) or .png
const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");
(async () => {
  const jobs = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
  const browser = await chromium.launch({ args: ["--force-color-profile=srgb", "--disable-lcd-text", "--font-render-hinting=none", "--allow-file-access-from-files"] });
  let page = null, cur = "";
  let done = 0;
  for (const j of jobs) {
    const W = j.spec.w || 1080, H = j.spec.h || 1920, k = W + "x" + H;
    if (!page || k !== cur) {
      if (page) await page.close();
      page = await browser.newPage({ viewport: { width: W, height: H } });
      page.on("pageerror", (e) => console.error("PAGEERROR", j.out, e.message));
      cur = k;
    }
    await page.goto("file://" + path.join(__dirname, "studio", "studio.html"));
    await page.evaluate((s) => window.M7.init(s), j.spec);
    await page.evaluate((t) => window.M7.render(t), j.t ?? 6);
    fs.mkdirSync(path.dirname(j.out), { recursive: true });
    if (j.out.endsWith(".png")) await page.screenshot({ path: j.out, type: "png" });
    else await page.screenshot({ path: j.out, type: "jpeg", quality: 94 });
    done++;
  }
  await browser.close();
  console.log("stills", done);
})();
