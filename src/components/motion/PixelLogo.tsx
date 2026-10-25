"use client";

import { useEffect, useRef } from "react";
import { M7_PATHS } from "@/components/brand/M7Logo";

/**
 * Het M7-emblem opgebouwd uit kleine pixels en sterretjes. Bij `active`
 * komen ze rustig binnen (van links naar rechts, licht verspreid), daarna
 * rolt er af en toe een zachte golf doorheen. Ingetogen, als achtergrond.
 */
export function PixelLogo({ active, className }: { active: boolean; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    if (!active) {
      ctx.clearRect(0, 0, cv.width, cv.height);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; nx: number; delay: number; star: boolean; tw: number };
    let pts: P[] = [];
    let w = 0,
      h = 0,
      step = 8,
      raf = 0;

    const build = () => {
      const r = cv.getBoundingClientRect();
      w = r.width;
      h = r.height;
      if (!w || !h) return;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // logo in een offscreen canvas tekenen en op een raster bemonsteren
      const off = document.createElement("canvas");
      off.width = Math.ceil(w);
      off.height = Math.ceil(h);
      const o = off.getContext("2d")!;
      const s = Math.min(w / 89, h / 51);
      o.setTransform(s, 0, 0, s, (w - 89 * s) / 2, (h - 51 * s) / 2);
      for (const d of M7_PATHS) o.fill(new Path2D(d));
      const data = o.getImageData(0, 0, off.width, off.height).data;
      step = Math.max(7, Math.round(w / 95));
      pts = [];
      for (let y = step / 2; y < h; y += step) {
        for (let x = step / 2; x < w; x += step) {
          if (data[(Math.floor(y) * off.width + Math.floor(x)) * 4 + 3] < 128) continue;
          pts.push({ x, y, nx: x / w, delay: 0.25 + (x / w) * 1.1 + Math.random() * 0.7, star: Math.random() < 0.07, tw: Math.random() * 10 });
        }
      }
    };
    build();

    const t0 = performance.now();
    const draw = (now: number) => {
      const T = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const sq = step * 0.36;
      for (const p of pts) {
        const k = reduce ? 1 : Math.min(1, Math.max(0, (T - p.delay) / 1.1));
        if (k <= 0) continue;
        const e = 1 - Math.pow(1 - k, 3);
        const wave = reduce ? 0 : Math.max(0, Math.sin(p.nx * 6 - T * 0.5)) ** 14 * 0.12;
        if (p.star) {
          const a = (0.2 + 0.18 * Math.max(0, Math.sin(T * 0.9 + p.tw))) * e + wave;
          const len = step * 0.55;
          ctx.fillStyle = `rgba(160,255,255,${a.toFixed(3)})`;
          ctx.fillRect(p.x - len / 2, p.y - 0.5, len, 1);
          ctx.fillRect(p.x - 0.5, p.y - len / 2, 1, len);
        } else {
          const a = 0.075 * e + wave;
          ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
          ctx.fillRect(p.x - sq / 2, p.y - sq / 2, sq, sq);
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    const ro = new ResizeObserver(build);
    ro.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [active]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
