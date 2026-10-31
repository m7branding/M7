"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/** Klaar als de volgende kaart de helft van deze kaart bedekt (na de tussenruimte). */
const COVER = 0.5;
/** Waar het "volledige" beeld staat: de kaart is net vastgezet (ook de stand bij reduced motion). */
export const SHOW_KEY = 0.74;
/** Naijlen van de scroll (ms): grote, snelle scrollbewegingen worden rustig uitgespeeld. */
const LAG = 160;
/** Hero (dienstpagina): het beeld bouwt bij het laden rustig op tot SHOW_KEY, daarna loopt het verder op de scroll. */
const INTRO_DELAY = 450;
const INTRO_MS = 2800;

/**
 * Podium voor een showcase-mockup in een peilerkaart.
 * --sp loopt van 0 → 1 over het hele leven van de kaart in beeld: vanaf het moment dat hij
 * onderin binnenkomt, via vastzetten bovenin en de lucht tot de volgende kaart (± SHOW_KEY),
 * tot de volgende kaart hem half bedekt. Zo blijft de animatie doorlopen zolang je de kaart ziet. --spe is dezelfde waarde,
 * ge-eased. De waarde ijlt licht na (LAG), dus ook een snelle scroll voelt kalm.
 * Mockups bouwen hun scroll-animatie op met calc(... var(--sp) ...); kleine "levende"
 * details lopen als CSS-loop en pauzeren buiten beeld. `sp` vastzetten kan voor screenshots (lab).
 */
export function ShowcaseStage({
  children,
  flip = false,
  sp,
  label,
  hero = false,
}: {
  children: React.ReactNode;
  flip?: boolean;
  sp?: number;
  label?: string;
  /** In de hero van een dienstpagina: intro bij het laden + doorlopen op de scroll. */
  hero?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const intro = useRef(0);
  const playing = useRef(false);
  const geo = useRef({ sticky: false, pin: 0, flow: 0 });
  const cur = useRef(-1);
  const target = useRef(0);
  const raf = useRef(0);
  const last = useRef(0);

  const set = useCallback((p: number) => {
    const el = ref.current;
    if (!el) return;
    const e = 1 - Math.pow(1 - p, 3);
    el.style.setProperty("--sp", p.toFixed(4));
    el.style.setProperty("--spe", e.toFixed(4));
    el.classList.toggle("is-on", p > 0.55);
  }, []);

  // video's in een mockup (zonder autoPlay, preload="none") spelen alleen zolang de kaart echt in beeld is
  const video = useCallback((on: boolean) => {
    const el = ref.current;
    if (!el || playing.current === on) return;
    playing.current = on;
    el.querySelectorAll("video").forEach((v) => {
      if (on) v.play().catch(() => {});
      else v.pause();
    });
  }, []);

  const tick = useCallback(
    (t: number) => {
      const dt = Math.min(64, t - (last.current || t));
      last.current = t;
      const d = target.current - cur.current;
      if (Math.abs(d) < 0.0004) {
        cur.current = target.current;
        set(cur.current);
        raf.current = 0;
        return;
      }
      cur.current += d * (1 - Math.exp(-dt / LAG));
      set(cur.current);
      raf.current = requestAnimationFrame(tick);
    },
    [set],
  );

  const measureGeo = useCallback(() => {
    const pillar = ref.current?.closest<HTMLElement>(".pillar");
    const cs = pillar ? getComputedStyle(pillar) : null;
    geo.current = { sticky: cs?.position === "sticky", pin: cs ? parseFloat(cs.top) || 0 : 0, flow: pillar?.offsetHeight || 0 };
  }, []);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || sp !== undefined) return;
    const r = el.getBoundingClientRect();
    const h = el.offsetHeight; // zonder de krimp-transform van de kaart
    const vh = window.innerHeight;
    const next = el.closest(".pillar")?.nextElementSibling;
    const nextTop = next?.classList.contains("pillar") ? next.getBoundingClientRect().top : Infinity;

    let p: number;
    if (hero) {
      // eerst de intro (tijd) tot SHOW_KEY, daarna de rest van het verhaal terwijl je de hero uit scrollt
      const box = el.closest<HTMLElement>(".svc-hero") ?? el;
      const frac = Math.min(1, Math.max(0, -box.getBoundingClientRect().top / (box.offsetHeight * 0.85)));
      p = intro.current * SHOW_KEY + frac * (1 - SHOW_KEY);
    } else if (geo.current.sticky) {
      // binnenkomen (vh → vastzetpunt) + de lucht tussen de kaarten + bedekt worden door de volgende kaart;
      // flow = kaart + tussenruimte, zodat de animatie ook tijdens die tussenruimte gewoon doorloopt
      const flow = geo.current.flow || h;
      const moved = Math.max(0, r.top + flow - nextTop);
      p = (vh - r.top + moved) / (vh - geo.current.pin + (flow - h) + COVER * h);
    } else {
      // mobiel: geen stapeling, de mockup scrollt gewoon door het beeld
      p = (vh - r.top) / (vh + 0.3 * h);
    }
    p = Math.min(1, Math.max(0, p));
    target.current = p;
    if (cur.current < 0) {
      cur.current = p;
      set(p);
    } else if (!raf.current) {
      last.current = 0;
      raf.current = requestAnimationFrame(tick);
    }

    // is er van deze kaart nog maar een smal randje zichtbaar onder de volgende, dan hoeft hij niet meer te animeren of te tekenen
    const covered = nextTop - r.top < 64;
    el.classList.toggle("is-covered", covered);
    video(!covered && r.top < vh && r.bottom > 0);
  }, [set, sp, tick, video, hero]);

  useScroll(update);
  // intro van de hero: tijdgestuurd, smoothstep, met de gewone naijl-demping erachter
  useEffect(() => {
    if (!hero || sp !== undefined || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cur.current = 0;
    set(0);
    let id = 0;
    const t0 = performance.now() + INTRO_DELAY;
    const step = (t: number) => {
      const k = Math.min(1, Math.max(0, (t - t0) / INTRO_MS));
      intro.current = k * k * (3 - 2 * k);
      update();
      if (k < 1) id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [hero, sp, set, update]);
  useEffect(() => {
    if (sp !== undefined) return set(sp);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return set(SHOW_KEY);
    const resize = () => {
      measureGeo();
      update();
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf.current);
      raf.current = 0;
    };
  }, [sp, set, update, measureGeo]);

  return (
    <div ref={ref} className={`show${flip ? " show--flip" : ""}`} data-play="" role="img" aria-label={label}>
      {children}
    </div>
  );
}
