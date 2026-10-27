"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/**
 * Podium voor een showcase-mockup in een peilerkaart.
 * Zet --sp (0 → 1) terwijl de kaart vanaf de onderkant van het scherm
 * omhoog schuift tot hij bovenin vaststaat, plus --spe (zelfde, ge-eased).
 * Mockups bouwen hun scroll-animatie op met calc(... var(--sp) ...);
 * kleine "levende" details lopen als CSS-loop en pauzeren buiten beeld.
 * `sp` vastzetten kan voor screenshots (lab-pagina).
 */
export function ShowcaseStage({ children, flip = false, sp, label }: { children: React.ReactNode; flip?: boolean; sp?: number; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const playing = useRef(false);

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

  const set = useCallback((p: number) => {
    const el = ref.current;
    if (!el) return;
    const e = 1 - Math.pow(1 - p, 3);
    el.style.setProperty("--sp", p.toFixed(4));
    el.style.setProperty("--spe", e.toFixed(4));
    el.classList.toggle("is-on", p > 0.55);
  }, []);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || sp !== undefined) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    set(Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.78))));
    // is er van deze kaart nog maar een smal randje zichtbaar onder de volgende, dan hoeft hij niet meer te animeren of te tekenen
    const next = el.closest(".pillar")?.nextElementSibling;
    const covered = !!next && next.classList.contains("pillar") && next.getBoundingClientRect().top - r.top < 64;
    el.classList.toggle("is-covered", covered);
    video(!covered && r.top < vh && r.bottom > 0);
  }, [set, sp, video]);

  useScroll(update);
  useEffect(() => {
    if (sp !== undefined) return set(sp);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return set(1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [sp, set, update]);

  return (
    <div ref={ref} className={`show${flip ? " show--flip" : ""}`} data-play="" role="img" aria-label={label}>
      {children}
    </div>
  );
}
