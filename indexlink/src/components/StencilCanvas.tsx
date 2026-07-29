"use client";

import { useEffect, useRef } from "react";

type Traveler = {
  axis: "h" | "v";
  line: number; // grid line index
  pos: number; // px along the line
  speed: number; // px per second (can be negative)
  hue: "signal" | "ink";
  size: number;
  trail: number; // trail length in px
};

/**
 * The IndexLink stencil canvas: a fine square grid ("stencil") with
 * small data points travelling along its lines — the brand motif of
 * knowledge moving through a structured system. Pure canvas, respects
 * prefers-reduced-motion, pauses when offscreen.
 */
export function StencilCanvas({
  density = 1,
  grid = 32,
  showGrid = true,
  dark = false,
  className,
}: {
  density?: number; // traveler multiplier
  grid?: number;
  showGrid?: boolean;
  dark?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const el = canvas;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let travelers: Traveler[] = [];
    let raf = 0;
    let last = performance.now();
    let visible = true;

    const gridColor = dark ? "rgba(255,255,255,0.06)" : "rgba(9,18,37,0.055)";
    const inkColor = dark ? "255,255,255" : "9,18,37";

    function resize() {
      const rect = el.parentElement?.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      height = Math.max(1, Math.floor(rect?.height ?? 480));
      el.width = width * dpr;
      el.height = height * dpr;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      seed();
    }

    function seed() {
      const hLines = Math.floor(height / grid);
      const vLines = Math.floor(width / grid);
      const count = Math.round(((width * height) / 90000) * density) + 4;
      travelers = Array.from({ length: count }, () => {
        const axis = Math.random() > 0.5 ? "h" : "v";
        return {
          axis,
          line: Math.floor(Math.random() * (axis === "h" ? hLines : vLines)) + 1,
          pos: Math.random() * (axis === "h" ? width : height),
          speed: (18 + Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1),
          hue: Math.random() > 0.35 ? "signal" : "ink",
          size: 1.6 + Math.random() * 1.6,
          trail: 26 + Math.random() * 44,
        } as Traveler;
      });
    }

    function drawGrid() {
      if (!showGrid) return;
      ctx!.strokeStyle = gridColor;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      for (let y = grid; y < height; y += grid) {
        ctx!.moveTo(0, y + 0.5);
        ctx!.lineTo(width, y + 0.5);
      }
      for (let x = grid; x < width; x += grid) {
        ctx!.moveTo(x + 0.5, 0);
        ctx!.lineTo(x + 0.5, height);
      }
      ctx!.stroke();
    }

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, width, height);
      drawGrid();

      for (const t of travelers) {
        const max = t.axis === "h" ? width : height;
        t.pos += t.speed * dt;
        if (t.pos < -t.trail) t.pos = max + t.trail;
        if (t.pos > max + t.trail) t.pos = -t.trail;

        const fixed = t.line * grid + 0.5;
        const rgb = t.hue === "signal" ? "73,166,247" : inkColor;
        const dir = Math.sign(t.speed);

        // trail
        const gx1 = t.axis === "h" ? t.pos - dir * t.trail : fixed;
        const gy1 = t.axis === "h" ? fixed : t.pos - dir * t.trail;
        const gx2 = t.axis === "h" ? t.pos : fixed;
        const gy2 = t.axis === "h" ? fixed : t.pos;
        const gradient = ctx!.createLinearGradient(gx1, gy1, gx2, gy2);
        gradient.addColorStop(0, `rgba(${rgb},0)`);
        gradient.addColorStop(1, `rgba(${rgb},${t.hue === "signal" ? 0.5 : 0.28})`);
        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.moveTo(gx1, gy1);
        ctx!.lineTo(gx2, gy2);
        ctx!.stroke();

        // head dot
        ctx!.fillStyle = `rgba(${rgb},${t.hue === "signal" ? 0.85 : 0.5})`;
        ctx!.beginPath();
        ctx!.arc(gx2, gy2, t.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (visible && !reduced) raf = requestAnimationFrame(frame);
    }

    function drawStatic() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, width, height);
      drawGrid();
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduced) {
        last = performance.now();
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    });
    observer.observe(el);

    resize();
    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    if (el.parentElement) ro.observe(el.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      ro.disconnect();
    };
  }, [density, grid, showGrid, dark]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
