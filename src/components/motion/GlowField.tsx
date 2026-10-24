"use client";

import { useEffect, useRef } from "react";

export interface Blob {
  x: string;
  y: string;
  c: string;
  s?: string;
  o?: number;
  dur?: number;
  delay?: number;
  dx?: string;
  dy?: string;
}

/**
 * Langzaam ademende radial gradients + een spotlight die zacht
 * (met vertraging) de muis volgt. Puur CSS-animatie; JS zet alleen
 * de spotlight-positie.
 */
export function GlowField({
  blobs,
  spot = "rgba(58,255,255,0.07)",
  className,
}: {
  blobs: Blob[];
  spot?: string | false;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spot) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const el = ref.current!;
    let x = 50,
      y = 40,
      tx = 50,
      ty = 40,
      raf = 0,
      active = false;
    const loop = () => {
      x += (tx - x) * 0.05;
      y += (ty - y) * 0.05;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
      if (Math.abs(tx - x) > 0.05 || Math.abs(ty - y) > 0.05) raf = requestAnimationFrame(loop);
      else active = false;
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (e.clientY < r.top - 200 || e.clientY > r.bottom + 200) return;
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
      if (!active) {
        active = true;
        raf = requestAnimationFrame(loop);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [spot]);

  return (
    <div ref={ref} className={`glowfield${className ? " " + className : ""}`} aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="glowfield__blob"
          style={
            {
              "--x": b.x,
              "--y": b.y,
              "--c": b.c,
              "--s": b.s,
              "--o": b.o,
              "--dur": b.dur ? `${b.dur}s` : undefined,
              "--delay": b.delay ? `${b.delay}s` : undefined,
              "--dx": b.dx,
              "--dy": b.dy,
            } as React.CSSProperties
          }
        />
      ))}
      {spot ? <span className="glowfield__spot" style={{ ["--spot" as string]: spot }} /> : null}
    </div>
  );
}
