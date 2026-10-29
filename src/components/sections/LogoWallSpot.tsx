"use client";

import { useEffect, useRef } from "react";

/**
 * Laat af en toe één logo in de wand rustig inkleuren naar zijn eigen merkvlak
 * (klasse .is-lit op een .lwall__cell). Alleen als de wand in beeld is, het
 * tabblad zichtbaar is en niemand er met de muis boven hangt; niet bij
 * prefers-reduced-motion.
 */
export function LogoWallSpot({ className, label, children }: { className?: string; label?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cells = Array.from(root.querySelectorAll<HTMLElement>(".lwall__cell"));
    if (cells.length < 2) return;

    let visible = false;
    let timer = 0;
    let last = -1;

    const clear = () => cells.forEach((c) => c.classList.remove("is-lit"));
    const tick = () => {
      clear();
      if (!visible || document.hidden || root.matches(":hover")) return;
      let i = Math.floor(Math.random() * cells.length);
      if (i === last) i = (i + 1 + Math.floor(Math.random() * (cells.length - 1))) % cells.length;
      last = i;
      cells[i].classList.add("is-lit");
    };
    const start = () => {
      if (!timer) timer = window.setInterval(tick, 2800);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = 0;
      clear();
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.25 },
    );
    io.observe(root);
    const onLeave = () => clear();
    root.addEventListener("pointerenter", onLeave);
    return () => {
      io.disconnect();
      stop();
      root.removeEventListener("pointerenter", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={className} role="group" aria-label={label}>
      {children}
    </div>
  );
}
