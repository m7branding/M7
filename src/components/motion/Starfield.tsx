"use client";

import { useEffect, useRef } from "react";

/**
 * Twinkelende sterren en '+'-sparkles (zoals in het design) die heel
 * langzaam drijven en licht meebewegen met de muis (parallax).
 */
export function Starfield({ density = 1, sparkles = 14, className }: { density?: number; sparkles?: number; className?: string }) {
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
    type Star = { x: number; y: number; r: number; a: number; tw: number; ph: number; z: number; plus: boolean };
    let stars: Star[] = [];

    const build = () => {
      if (!cv.parentElement) return;
      const r = cv.parentElement.getBoundingClientRect();
      w = r.width;
      h = r.height;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(((w * h) / 9000) * density);
      stars = Array.from({ length: count + sparkles }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: i < count ? Math.random() * 0.9 + 0.2 : Math.random() * 3 + 3,
        a: i < count ? Math.random() * 0.5 + 0.15 : Math.random() * 0.35 + 0.35,
        tw: Math.random() * 0.8 + 0.2,
        ph: Math.random() * Math.PI * 2,
        z: Math.random() * 0.8 + 0.2,
        plus: i >= count,
      }));
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(cv.parentElement!);

    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    const onMove = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const draw = (t: number) => {
      mx += (tmx - mx) * 0.03;
      my += (tmy - my) * 0.03;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const tw = reduce ? 1 : 0.55 + 0.45 * Math.sin(t * 0.001 * s.tw + s.ph);
        const x = (s.x + mx * 14 * s.z + (reduce ? 0 : t * 0.002 * s.z)) % w;
        const y = s.y + my * 10 * s.z;
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = "#fff";
        if (s.plus) {
          const L = s.r;
          ctx.fillRect(x - L, y - 0.5, L * 2, 1);
          ctx.fillRect(x - 0.5, y - L, 1, L * 2);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
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
  }, [density, sparkles]);

  return <canvas ref={ref} className={`starfield${className ? " " + className : ""}`} aria-hidden="true" />;
}
