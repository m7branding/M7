"use client";

import { useEffect, useRef } from "react";

/**
 * Het pixel-raster uit het design (vierkantjes in 'heuvels' aan de
 * zijkanten). Ingetogen: in plaats van losse knipperende pixels rollen er
 * rustige golven doorheen (een smalle scan-band vanaf de randen en een trage
 * diagonale deining), en pixels lichten zacht op rond de muis.
 */
export function PixelGrid({
  variant = "sides",
  color = "255,255,255",
  intensity = 1,
  className,
}: {
  variant?: "sides" | "bottom" | "top" | "full";
  color?: string;
  /** Vermenigvuldigt de basis-helderheid van de pixels. */
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0,
      raf = 0,
      visible = true;
    type Px = { x: number; y: number; nx: number; ny: number; d: number; m: number; base: number; glow: number };
    let px: Px[] = [];
    const STEP = 27,
      SIZE = 8;

    const mask = (nx: number, ny: number) => {
      // nx, ny 0..1 → zichtbaarheid 0..1
      if (variant === "full") return 0.55;
      if (variant === "top") return Math.max(0, 1 - ny * 1.6) * (0.4 + 0.6 * Math.abs(nx - 0.5) * 2);
      const edge = Math.abs(nx - 0.5) * 2; // 0 midden → 1 rand
      if (variant === "bottom") {
        const hill = 0.25 + 0.55 * Math.pow(edge, 1.4);
        return ny > 1 - hill ? Math.min(1, (ny - (1 - hill)) / 0.35) : 0;
      }
      // sides: twee heuvels die van de randen naar het midden aflopen
      const top = 0.08 + (1 - Math.pow(edge, 0.85)) * 0.9;
      const vis = ny > top ? Math.min(1, (ny - top) / 0.25) : 0;
      return vis * (edge > 0.22 ? 1 : edge / 0.22);
    };

    const build = () => {
      if (!cv.parentElement) return;
      const r = cv.parentElement.getBoundingClientRect();
      w = r.width;
      h = r.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      px = [];
      for (let y = STEP / 2; y < h; y += STEP) {
        for (let x = STEP / 2; x < w; x += STEP) {
          const m = mask(x / w, y / h);
          if (m <= 0.02 || Math.random() > 0.55 + m * 0.4) continue;
          const nx = x / w,
            ny = y / h;
          px.push({ x, y, nx, ny, d: Math.abs(nx - 0.5) * 2, m, base: m * (0.028 + Math.random() * 0.045) * intensity, glow: 0 });
        }
      }
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(cv.parentElement!);

    let mx = -9999,
      my = -9999;
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const T = t * 0.001;
      for (const p of px) {
        let wave = 0;
        if (!reduce) {
          // smalle scan-band die vanaf de randen naar binnen rolt
          const b1 = Math.max(0, Math.sin(p.d * 9 + T * 0.75 + p.ny * 2.4)) ** 12;
          // trage, brede diagonale deining
          const b2 = Math.max(0, Math.sin(p.nx * 5.5 - p.ny * 3 - T * 0.3 + 1.3)) ** 6;
          wave = (b1 * 0.12 + b2 * 0.06) * p.m * intensity;
        }
        const dist = Math.hypot(p.x - mx, p.y - my);
        const target = dist < 150 ? (1 - dist / 150) * 0.22 : 0;
        p.glow += (target - p.glow) * 0.06;
        const a = Math.min(0.5, p.base + wave + p.glow);
        ctx.fillStyle = `rgba(${color},${a.toFixed(3)})`;
        ctx.fillRect(p.x - SIZE / 2, p.y - SIZE / 2, SIZE, SIZE);
      }
    };
    const loop = (t: number) => {
      draw(t);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    });
    io.observe(cv);
    draw(0);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [variant, color, intensity]);

  return <canvas ref={ref} className={`pixelgrid${className ? " " + className : ""}`} aria-hidden="true" />;
}
