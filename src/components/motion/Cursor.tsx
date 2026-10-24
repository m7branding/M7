"use client";

import { useEffect, useRef } from "react";

/**
 * Zachte cursor-ring met label (bv. "Bekijk") op [data-cursor] en
 * magnetische knoppen op [data-magnetic]. Alleen op desktop.
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
    let magnet: HTMLElement | null = null;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const releaseMagnet = () => {
      if (magnet) {
        magnet.style.transform = "";
        magnet = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as Element | null;
      const labelled = t?.closest?.("[data-cursor]") as HTMLElement | null;
      const link = t?.closest?.("a, button, [role=button], input, textarea, select, label");
      el.classList.toggle("has-label", !!labelled);
      el.classList.toggle("is-link", !!link && !labelled);
      if (labelled && labelRef.current) labelRef.current.textContent = labelled.dataset.cursor || "";

      const m = t?.closest?.("[data-magnetic]") as HTMLElement | null;
      if (m !== magnet) releaseMagnet();
      if (m) {
        magnet = m;
        const r = m.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        m.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
        m.style.transform = `translate3d(${dx * 0.18}px, ${dy * 0.3}px, 0)`;
      }
    };
    const onLeave = () => {
      el.classList.add("is-hidden");
      releaseMagnet();
    };
    const onEnter = () => el.classList.remove("is-hidden");
    const onNav = () => {
      el.classList.remove("has-label", "is-link");
      releaseMagnet();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    window.addEventListener("m7:navigate", onNav);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("m7:navigate", onNav);
    };
  }, []);

  return (
    <div className="cursor" ref={ref} aria-hidden="true">
      <div className="cursor__ring">
        <span className="cursor__label" ref={labelRef} />
      </div>
    </div>
  );
}
