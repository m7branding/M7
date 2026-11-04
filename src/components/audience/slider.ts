/* ============================================================
   Horizontale slider voor de use cases in het doelgroep-paneel.
   Bewust vanilla (geen React): het paneel is server-gerenderd en
   wordt op dienstpagina's als losse DOM in de modal geïmporteerd,
   dus Audience.tsx koppelt dit gedrag aan het paneel dat open staat.

   - native scroll-snap (momentum op touch en trackpad blijft van de browser)
   - slepen met de muis (desktop), met een rustige uitloop naar de dichtstbijzijnde kaart
   - vorige/volgende (per 'pagina' zichtbare kaarten), voortgangsbalk
   - pijltjestoetsen springen van kaart naar kaart
   - verticaal scrollen van de modal wordt nooit afgevangen
   ============================================================ */

const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function mountSlider(root: HTMLElement): () => void {
  const track = root.querySelector<HTMLElement>("[data-sl-track]");
  if (!track) return () => {};
  const prev = root.querySelector<HTMLButtonElement>("[data-sl-prev]");
  const next = root.querySelector<HTMLButtonElement>("[data-sl-next]");
  const thumb = root.querySelector<HTMLElement>("[data-sl-thumb]");
  const off: (() => void)[] = [];
  const on = <K extends keyof HTMLElementEventMap>(
    el: HTMLElement | Window,
    type: K | string,
    fn: (e: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions,
  ) => {
    el.addEventListener(type, fn as EventListener, opts);
    off.push(() => el.removeEventListener(type, fn as EventListener, opts));
  };

  const items = () => Array.from(track.children).filter((c) => (c as HTMLElement).offsetParent !== null) as HTMLElement[];
  const padL = () => parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
  /** scrollLeft waarop elke kaart precies op de snap-lijn staat */
  const stops = () => {
    const max = track.scrollWidth - track.clientWidth;
    const pl = padL();
    const left = track.getBoundingClientRect().left - track.scrollLeft;
    return items().map((el) => Math.round(Math.min(max, Math.max(0, el.getBoundingClientRect().left - left - pl))));
  };
  const nearest = (x: number) => {
    const s = stops();
    let bi = 0;
    s.forEach((v, i) => Math.abs(v - x) < Math.abs(s[bi] - x) && (bi = i));
    return bi;
  };
  const scrollToX = (x: number, smooth = true) => track.scrollTo({ left: x, behavior: smooth && !reduce() ? "smooth" : "auto" });

  /* ---------- voortgang + knoppen ---------- */
  let raf = 0;
  const update = () => {
    raf = 0;
    const max = track.scrollWidth - track.clientWidth;
    const x = track.scrollLeft;
    const scrollable = max > 32;
    root.toggleAttribute("data-sl-static", !scrollable);
    if (prev) prev.disabled = !scrollable || x <= 4;
    if (next) next.disabled = !scrollable || x >= max - 4;
    if (thumb) {
      const w = Math.min(1, track.clientWidth / Math.max(1, track.scrollWidth));
      const p = scrollable ? Math.min(1, Math.max(0, x / max)) : 0;
      thumb.style.setProperty("--w", String(w));
      thumb.style.setProperty("--p", String(p));
    }
  };
  const queue = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };
  on(track, "scroll", queue, { passive: true });
  const ro = new ResizeObserver(queue);
  ro.observe(track);
  const mo = new MutationObserver(queue);
  mo.observe(track, { childList: true });
  off.push(() => {
    ro.disconnect();
    mo.disconnect();
  });

  /** Een 'pagina' verder: zoveel kaarten als er volledig in beeld passen (minstens 1). */
  const page = (dir: 1 | -1) => {
    const s = stops();
    const list = items();
    if (!list.length) return;
    const step = list.length > 1 ? list[1].getBoundingClientRect().left - list[0].getBoundingClientRect().left : list[0].offsetWidth;
    const visible = Math.max(1, Math.floor((track.clientWidth - padL() + 8) / Math.max(1, step)));
    const i = nearest(track.scrollLeft);
    const j = Math.min(s.length - 1, Math.max(0, i + dir * visible));
    // laatste kaarten: naar het einde, zodat 'volgende' nooit blijft hangen
    scrollToX(dir > 0 && j === i ? track.scrollWidth : s[j]);
  };
  if (prev) on(prev, "click", () => page(-1));
  if (next) on(next, "click", () => page(1));

  /* ---------- toetsenbord: ← → van kaart naar kaart ---------- */
  on(track, "keydown", (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "Home" && e.key !== "End") return;
    const list = items();
    const cur = list.findIndex((el) => el.contains(document.activeElement));
    if (cur < 0) return;
    e.preventDefault();
    const j =
      e.key === "Home" ? 0 : e.key === "End" ? list.length - 1 : Math.min(list.length - 1, Math.max(0, cur + (e.key === "ArrowRight" ? 1 : -1)));
    const link = list[j].querySelector<HTMLElement>("a, button, [tabindex]");
    link?.focus({ preventScroll: true });
    scrollToX(stops()[j]);
  });

  /* ---------- slepen met de muis ---------- */
  let down = false;
  let dragging = false;
  let x0 = 0;
  let s0 = 0;
  let samples: [number, number][] = [];
  let settle = 0;
  const end = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", up);
  };
  const move = (e: PointerEvent) => {
    if (!down) return;
    const dx = e.clientX - x0;
    if (!dragging) {
      if (Math.abs(dx) < 5) return;
      dragging = true;
      window.clearTimeout(settle);
      root.classList.add("is-drag");
      // tijdens het slepen geen snap, anders trekt de browser terug
      track.style.scrollSnapType = "none";
      track.style.scrollBehavior = "auto";
    }
    track.scrollLeft = s0 - dx;
    const t = performance.now();
    samples.push([t, e.clientX]);
    samples = samples.filter(([ts]) => t - ts < 90);
  };
  const up = () => {
    end();
    if (!down) return;
    down = false;
    if (!dragging) return;
    dragging = false;
    root.classList.remove("is-drag");
    // klik na een sleep niet laten doorgaan (de kaart is een link)
    const swallow = (ev: MouseEvent) => {
      ev.preventDefault();
      ev.stopPropagation();
    };
    window.addEventListener("click", swallow, { capture: true, once: true });
    window.setTimeout(() => window.removeEventListener("click", swallow, { capture: true }), 0);
    // uitloop: projecteer de snelheid en kies de dichtstbijzijnde kaart
    let v = 0;
    if (samples.length > 1) {
      const [ta, xa] = samples[0];
      const [tb, xb] = samples[samples.length - 1];
      v = tb > ta ? (xb - xa) / (tb - ta) : 0;
    }
    samples = [];
    const target = stops()[nearest(track.scrollLeft - v * 280)];
    scrollToX(target);
    const restore = () => {
      track.style.scrollSnapType = "";
      track.style.scrollBehavior = "";
    };
    settle = window.setTimeout(restore, reduce() ? 0 : 650);
  };
  on(track, "pointerdown", (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    down = true;
    dragging = false;
    x0 = e.clientX;
    s0 = track.scrollLeft;
    samples = [[performance.now(), e.clientX]];
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  });
  // links en afbeeldingen niet als 'ghost' meeslepen
  on(track, "dragstart", (e: DragEvent) => e.preventDefault());
  off.push(() => {
    end();
    window.clearTimeout(settle);
    if (raf) cancelAnimationFrame(raf);
    track.style.scrollSnapType = "";
    track.style.scrollBehavior = "";
    root.classList.remove("is-drag");
  });

  root.setAttribute("data-sl-ready", "");
  update();
  return () => {
    off.forEach((f) => f());
    root.removeAttribute("data-sl-ready");
  };
}
