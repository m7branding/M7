// Rasterise SVG logos to transparent PNGs (2400 px on the long side). usage: node logo_raster.js in.svg out.png [in2 out2 ...]
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const a = process.argv.slice(2);
  for (let i = 0; i < a.length; i += 2) {
    const svg = fs.readFileSync(a[i], 'utf8');
    const dims = await p.evaluate((svg) => {
      const d = new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement;
      const vb = (d.getAttribute('viewBox') || '').split(/[ ,]+/).map(Number);
      let w = parseFloat(d.getAttribute('width')) || vb[2] || 1000, h = parseFloat(d.getAttribute('height')) || vb[3] || 400;
      if (vb.length === 4 && vb[2] > 0) { h = w * vb[3] / vb[2]; }
      return [w, h];
    }, svg);
    const s = 2400 / Math.max(dims[0], dims[1]);
    const W = Math.round(dims[0] * s), H = Math.round(dims[1] * s);
    await p.setViewportSize({ width: Math.max(16, W), height: Math.max(16, H) });
    const url = 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
    await p.setContent(`<html><body style="margin:0;background:transparent"><img src="${url}" style="width:${W}px;height:${H}px;display:block"></body></html>`);
    await p.waitForTimeout(300);
    await p.screenshot({ path: a[i + 1], omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
    console.log('ok', a[i + 1], W, H);
  }
  await b.close();
})();
