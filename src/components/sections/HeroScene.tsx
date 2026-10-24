"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/**
 * Hero-visual: blijft iets achter bij het scrollen (parallax), zodat de
 * scroll-animatie langer in beeld is, en kantelt subtiel mee met de muis.
 */
export function HeroScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });

  useScroll((y) => {
    const el = ref.current;
    if (!el) return;
    const p = Math.min(1, Math.max(0, y / window.innerHeight));
    el.style.setProperty("--hp", p.toFixed(4));
  });

  useEffect(() => {
    const el = ref.current!;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const loop = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.05;
      cur.current.y += (target.current.y - cur.current.y) * 0.05;
      el.style.setProperty("--mx", cur.current.x.toFixed(4));
      el.style.setProperty("--my", cur.current.y.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX / window.innerWidth - 0.5;
      target.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="hero__scene">
      {children}
    </div>
  );
}
