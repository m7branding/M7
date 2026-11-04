"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/**
 * Schermvullende sectie die bij het scrollen meegroeit: van een ingesprongen, afgeronde kaart
 * tot full-bleed. Voortgang via --g (0 → 1) op het element; de vorm zit in de CSS (.cx-grow).
 * Video's erin spelen alleen in beeld (en niet bij reduced motion).
 */
export function GrowFrame({ className, style, children }: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const live = useRef<boolean | null>(null);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 als de bovenrand onderin binnenkomt, 1 als hij bijna bovenin staat
    const g = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.82)));
    el.style.setProperty("--g", g.toFixed(4));
    const on = r.top < vh && r.bottom > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (on !== live.current) {
      live.current = on;
      el.querySelectorAll<HTMLVideoElement>("video[data-src]").forEach((v) => {
        if (on) {
          v.muted = true;
          if (!v.src && v.dataset.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else v.pause();
      });
    }
  }, []);

  useScroll(update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return (
    <div ref={ref} className={`cx-grow${className ? " " + className : ""}`} style={style}>
      <div className="cx-grow__frame">{children}</div>
    </div>
  );
}
