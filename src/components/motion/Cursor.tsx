"use client";

import { useEffect, useRef } from "react";

/**
 * Kleine, subtiele cursor (sterretje) die bij links uitgroeit tot een
 * lichtblauwe ring, met label (bv. "Bekijk") op [data-cursor]. Alleen op desktop.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current!;
    let x = -100,
      y = -100,
      tx = -100,
      ty = -100,
      raf = 0;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as Element | null;
      const labelled = t?.closest?.("[data-cursor]") as HTMLElement | null;
      const link = t?.closest?.("a, button, [role=button], input, textarea, select, label");
      el.classList.toggle("has-label", !!labelled);
      el.classList.toggle("is-link", !!link && !labelled);
      if (labelled && labelRef.current) labelRef.current.textContent = labelled.dataset.cursor || "";
    };
    const onLeave = () => el.classList.add("is-hidden");
    const onEnter = () => el.classList.remove("is-hidden");
    const onDown = () => el.classList.add("is-down");
    const onUp = () => el.classList.remove("is-down");
    const onNav = () => el.classList.remove("has-label", "is-link");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    window.addEventListener("m7:navigate", onNav);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("m7:navigate", onNav);
    };
  }, []);

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <span className="cursor__star" />
      <div className="cursor__ring">
        <span className="cursor__label" ref={labelRef} />
      </div>
    </div>
  );
}
