/* Zet de compositie klaar: maat, achtergrond, merkkleur en de toestellen.
   compose.mjs zet window.M vóór het laden; zonder M (los openen in een browser)
   vallen we terug op ?bg=…&brand=…&shots=<json> zodat je een template kunt bekijken. */
(function () {
  const q = new URLSearchParams(location.search);
  const M = (window.M = window.M || {
    bg: q.get("bg") || "studio",
    brand: q.get("brand") || "#8a8f98",
    shots: q.get("shots") ? JSON.parse(q.get("shots")) : {},
    preview: true,
  });
  const b = document.body;
  b.classList.add(`bg-${M.bg}`);
  b.style.setProperty("--brand", M.brand);
  if (M.vars) for (const k in M.vars) b.style.setProperty(k, M.vars[k]);
  if (M.cls) b.classList.add(...M.cls);
  // ontbrekende beelden: element markeren + body-klasse, zodat een template kan herschikken
  const has = M.has || Object.keys(M.shots || {});
  document.querySelectorAll("[data-shot]").forEach((el) => {
    if (has.includes(el.dataset.shot)) return;
    el.dataset.missing = "1";
    b.classList.add(`no-${el.dataset.shot}`);
  });
  window.DX.expand();
  // los bekijken: ruwe screenshots direct in de schermen
  if (M.preview)
    document.querySelectorAll(".dx-scr[data-shot], .card[data-shot]").forEach((el) => {
      const s = M.shots[el.dataset.shot];
      if (s) el.innerHTML = `<img src="${s.src || s}" alt="">`;
    });
  document.documentElement.dataset.ready = "1";
})();
