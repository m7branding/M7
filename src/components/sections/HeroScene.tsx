"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/** Laat de hero-telefoons in 3D meebewegen met muis en scroll. */
export function HeroScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });

  useScroll((y) => {
    const el = ref.current;
    if (!el) return;
    const p = Math.min(1, Math.max(0, y / (window.innerHeight * 0.9)));
    el.style.setProperty("--hp", p.toFixed(4));
  });

  useEffect(() => {
    const el = ref.current!;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const loop = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.06;
      cur.current.y += (target.current.y - cur.current.y) * 0.06;
      const { x, y } = cur.current;
      el.style.setProperty("--ry-a", `${18 + x * 10}deg`);
      el.style.setProperty("--ry-b", `${-16 + x * 10}deg`);
      el.style.setProperty("--rx", `${6 - y * 8}deg`);
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
