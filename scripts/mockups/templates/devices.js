/* ============================================================
   Device-markup voor de mockup-templates (browser-kant).
   Vervangt elk <div data-dx="mac|phone|ipad|display" data-shot="…">
   door het volledige toestel; de vormgeving staat in
   src/components/cases/devices.css (gedeeld met DeviceHero.tsx).
   Optioneel: data-depth="<cqw>" geeft het toestel dikte (3D-lagen).
   ============================================================ */
(function () {
  const ICONS =
    '<svg class="dx-phone__icons" viewBox="0 0 74 12" aria-hidden="true">' +
    '<rect x="0" y="7.6" width="3.1" height="3.9" rx="0.9"/><rect x="4.7" y="5.3" width="3.1" height="6.2" rx="0.9"/>' +
    '<rect x="9.4" y="2.9" width="3.1" height="8.6" rx="0.9"/><rect x="14.1" y="0.5" width="3.1" height="11" rx="0.9"/>' +
    '<g transform="translate(30.6 11.2)" fill="none" stroke="currentColor" stroke-width="2.05" stroke-linecap="round">' +
    '<path d="M-7.3 -7.1A10.2 10.2 0 0 1 7.3 -7.1"/><path d="M-4.4 -4.2A6.1 6.1 0 0 1 4.4 -4.2"/></g>' +
    '<path d="M30.6 11.4l-2.1-2.4a2.9 2.9 0 0 1 4.2 0z"/>' +
    '<rect x="46.6" y="0.6" width="23.4" height="10.8" rx="3.3" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="1"/>' +
    '<rect x="48.6" y="2.6" width="19.4" height="6.8" rx="1.7"/>' +
    '<path d="M71.4 4.1v3.8a2.1 2.1 0 0 0 0-3.8z" fill-opacity=".45"/></svg>';

  const scr = (el) => `<div class="dx-scr" data-shot="${el.dataset.shot || ""}"></div>`;

  /* dikte: lagen achter het toestel in de vorm van de behuizing */
  function edges(depth, radius, n, bg) {
    if (!depth) return "";
    let s = "";
    for (let k = n; k >= 1; k--) {
      const z = ((k / n) * depth).toFixed(3);
      // de rand loopt rond: voor en achter iets lichter (afschuining), midden donkerder
      const t = k / n;
      const light = 0.55 + 0.45 * Math.abs(Math.cos(t * Math.PI));
      s += `<i class="dx-edge" style="--z:${z};--dx-edge-r:${radius};--dx-edge-bg:${bg(light)}"></i>`;
    }
    return s;
  }
  const metal = (base) => (l) => {
    const c = base.map((v) => Math.round(v * l + 18 * (1 - l)));
    return `linear-gradient(160deg, rgb(${c.map((v) => Math.min(255, v + 40)).join(",")}), rgb(${c.join(",")}) 18%, rgb(${c.map((v) => v - 14).join(",")}) 60%, rgb(${c.map((v) => Math.min(255, v + 24)).join(",")}))`;
  };

  const DEV = {
    mac: (el) =>
      `<div class="dx-mac__lid"><div class="dx-mac__screen">${scr(el)}<i class="dx-mac__notch"><i class="dx-mac__cam"></i></i><i class="dx-sheen"></i></div></div>` +
      `<div class="dx-mac__hinge"></div><div class="dx-mac__base"><i class="dx-mac__deck"></i><i class="dx-mac__front"></i><i class="dx-mac__scoop"></i></div>` +
      `<i class="dx-floor"></i>`,
    phone: (el) =>
      edges(+el.dataset.depth || 0, "17.4cqw", 22, metal([92, 94, 98])) +
      `<i class="dx-phone__btn is-l is-action"></i><i class="dx-phone__btn is-l is-up"></i><i class="dx-phone__btn is-l is-down"></i><i class="dx-phone__btn is-r is-power"></i>` +
      `<div class="dx-phone__body"><div class="dx-phone__screen"><div class="dx-phone__status"><span class="dx-phone__time">9:41</span>${ICONS}</div>${scr(el)}` +
      `<i class="dx-phone__island"></i><i class="dx-phone__home"></i><i class="dx-sheen"></i></div></div>` +
      (el.dataset.floor === "0" ? "" : `<i class="dx-floor"></i>`),
    ipad: (el) =>
      edges(+el.dataset.depth || 0, "4.9cqw", 12, metal([96, 98, 102])) +
      `<div class="dx-ipad__body"><i class="dx-ipad__cam"></i><div class="dx-ipad__screen">${scr(el)}<i class="dx-sheen"></i></div></div>` +
      (el.dataset.floor === "1" ? `<i class="dx-floor"></i>` : ""),
    display: (el) =>
      `<div class="dx-display__body"><i class="dx-display__cam"></i><div class="dx-display__screen">${scr(el)}<i class="dx-sheen"></i></div></div>` +
      `<div class="dx-display__stand"><i class="dx-display__arm"></i><i class="dx-display__foot"></i></div><i class="dx-floor"></i>`,
  };

  window.DX = {
    expand(root = document) {
      root.querySelectorAll("[data-dx]").forEach((el) => {
        const kind = el.dataset.dx;
        el.classList.add("dx", `dx-${kind}`);
        if (el.dataset.depth) el.classList.add("dx-3d");
        el.innerHTML = DEV[kind](el);
      });
    },
  };
})();
