// Screenshots of pages on the dev server at 1440 and 390 wide. usage: node page_check.js outdir path1 path2 ...
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const [out, ...paths] = process.argv.slice(2);
  const b = await chromium.launch();
  for (const [w, h, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await ctx.addInitScript(() => { try { sessionStorage.setItem('m7-intro', '1'); localStorage.setItem('m7-consent', JSON.stringify({ necessary: true })); } catch (e) {} });
    const p = await ctx.newPage();
    for (const path of paths) {
      try {
        await p.goto('http://localhost:3000' + path, { waitUntil: 'networkidle', timeout: 120000 });
      } catch (e) { console.log('timeout', path); }
      await p.waitForTimeout(4000);
      const name = path.replace(/^\//, '').replace(/\//g, '_') || 'home';
      await p.screenshot({ path: `${out}/${name}-${tag}.jpg`, quality: 70, type: 'jpeg' });
      const vids = await p.evaluate(() => [...document.querySelectorAll('video')].map(v => ({ src: v.currentSrc, w: v.videoWidth, h: v.videoHeight, paused: v.paused })));
      console.log(tag, path, JSON.stringify(vids).slice(0, 400));
    }
    await ctx.close();
  }
  await b.close();
})();
