"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Zet zware onderdelen (WebGL-achtergrond) pas neer als ze in de buurt van de
 * viewport komen; tot dan staat `fallback` (bv. het stilstaande beeld) er.
 */
export function WhenNear({ children, fallback = null, margin = "60% 0px", className }: { children: React.ReactNode; fallback?: React.ReactNode; margin?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setOn(true);
        io.disconnect();
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return (
    <div ref={ref} className={className}>
      {on ? children : fallback}
    </div>
  );
}
