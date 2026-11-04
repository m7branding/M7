"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/**
 * Vastgepinde scène voor World of M7. De sectie is hoger dan het scherm; de binnenkant
 * plakt (sticky, zie world.css) en de sectie krijgt de voortgang als CSS-variabele
 * --p (0 → 1) terwijl je erdoorheen scrolt. Alle beweging zit daarna in CSS
 * (transform en opacity, berekend uit --p), dus hier geen layout per frame:
 * de positie van de sectie wordt alleen bij het laden en bij een andere maat gemeten,
 * de voortgang daarna uit de scrollpositie (Lenis) berekend.
 *
 * data-end="1" zodra de scène voor 60% doorlopen is (links in het eindbeeld pas dan klikbaar).
 * `track`: selector van een horizontale rij; de overloop (px) komt in --dist,
 * zodat de CSS de sectie precies zo hoog maakt als de rij lang is.
 * `steps`: de scène heeft zoveel panelen na elkaar; data-step (0 … steps-1) staat op de sectie
 * zolang hij vastgepind is (niet op mobiel of bij reduced motion). LazyVideo speelt daarop
 * alleen het actieve paneel; een paneel ([data-i]) dat focus krijgt, scrollt in beeld.
 * `pass`: niet vastgepind; --p loopt van 0 → 1 terwijl de sectie door het beeld schuift
 * (onderkant scherm → bovenkant), voor parallax.
 *
 * Beelden: in een vastgepinde scène staan tegels en kaarten eerst buiten het (geknipte)
 * podium en vliegen ze pas later binnen, dus native loading="lazy" vraagt ze te laat op
 * (je ziet dan lege vlakken). Daarom zet de scène al haar lazy beelden op "eager" zodra
 * ze anderhalf scherm voor de viewport is; tot dan laadt er niets.
 */
export function ScrollStage({
  as: Tag = "section",
  className,
  track,
  steps,
  pass = false,
  style,
  children,
  ...rest
}: {
  as?: "section" | "div";
  className?: string;
  track?: string;
  steps?: number;
  pass?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const geo = useRef({ top: 0, len: 1 });
  const last = useRef(-1);
  /** Stappen actief (vastgepind, breed scherm, met beweging)? */
  const stepping = useRef(false);

  const update = useCallback(
    (y: number) => {
      const el = ref.current;
      if (!el) return;
      const { top, len } = geo.current;
      const p = Math.min(1, Math.max(0, (y - top) / len));
      if (Math.abs(p - last.current) < 0.0004) return;
      const end = p >= 0.6;
      if (end !== last.current >= 0.6 || last.current < 0) el.dataset.end = end ? "1" : "0";
      last.current = p;
      el.style.setProperty("--p", p.toFixed(4));
      if (steps && stepping.current) {
        const s = String(Math.min(steps - 1, Math.floor(p * steps)));
        if (el.dataset.step !== s) el.dataset.step = s;
      }
    },
    [steps],
  );

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (track) {
      const t = el.querySelector<HTMLElement>(track);
      if (t) el.style.setProperty("--dist", String(Math.max(0, Math.round(t.scrollWidth - el.clientWidth))));
    }
    const top = el.getBoundingClientRect().top + window.scrollY;
    geo.current = pass
      ? { top: top - window.innerHeight, len: Math.max(1, el.offsetHeight + window.innerHeight) }
      : { top, len: Math.max(1, el.offsetHeight - window.innerHeight) };
    if (steps) {
      stepping.current = !window.matchMedia("(max-width: 760px), (prefers-reduced-motion: reduce)").matches;
      if (!stepping.current) delete el.dataset.step;
    }
    last.current = -1;
    update(window.scrollY);
  }, [track, update, pass, steps]);

  useScroll((s) => update(s));

  // toetsenbord: een tegel in de horizontale rij krijgt focus → scroll de pagina zo dat hij in beeld schuift
  useEffect(() => {
    const el = ref.current;
    if (!el || !track) return;
    const onFocus = (e: FocusEvent) => {
      const t = el.querySelector<HTMLElement>(track);
      const dist = Number(el.style.getPropertyValue("--dist")) || 0;
      const target = e.target as HTMLElement;
      if (!t || !dist || !t.contains(target) || getComputedStyle(t).transform === "none") return;
      const item = (target.closest("li") as HTMLElement | null) ?? target;
      const want = Math.min(dist, Math.max(0, item.offsetLeft + item.offsetWidth / 2 - window.innerWidth / 2));
      const y = geo.current.top + (want / dist) * geo.current.len;
      const l = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
      if (l) l.scrollTo(y, { immediate: true });
      else window.scrollTo(0, y);
    };
    el.addEventListener("focusin", onFocus);
    return () => el.removeEventListener("focusin", onFocus);
  }, [track]);

  // beelden ruim op tijd laden (zie boven)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => {
          img.loading = "eager";
        });
        io.disconnect();
      },
      { rootMargin: "150% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // toetsenbord in een scène met stappen: het paneel met de focus wordt de actieve stap
  useEffect(() => {
    const el = ref.current;
    if (!el || !steps) return;
    const onFocus = (e: FocusEvent) => {
      if (!stepping.current) return;
      const panel = (e.target as HTMLElement).closest<HTMLElement>("[data-i]");
      if (!panel || !el.contains(panel)) return;
      const i = Number(panel.dataset.i);
      const y = geo.current.top + ((i + 0.5) / steps) * geo.current.len;
      const l = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
      if (l) l.scrollTo(y, { immediate: true });
      else window.scrollTo(0, y);
    };
    el.addEventListener("focusin", onFocus);
    return () => el.removeEventListener("focusin", onFocus);
  }, [steps]);

  useEffect(() => {
    measure();
    // alles erboven kan nog van hoogte veranderen (lazy beelden, fonts): dan opnieuw meten
    let raf = 0;
    const again = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    const ro = new ResizeObserver(again);
    ro.observe(document.body);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", again);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", again);
    };
  }, [measure]);

  return (
    <Tag ref={ref as React.Ref<HTMLElement & HTMLDivElement>} className={className} style={style} data-steps={steps} {...rest}>
      {children}
    </Tag>
  );
}
