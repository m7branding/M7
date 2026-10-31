"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/**
 * Vastgepinde scène voor World of M7. De sectie is hoger dan het scherm; de binnenkant
 * plakt (sticky, zie world.css) en de sectie krijgt de voortgang als CSS-variabele
 * --p (0 → 1) terwijl je erdoorheen scrolt. Alle beweging zit daarna in CSS
 * (transform en opacity, berekend uit --p), dus hier geen layout per frame:
 * de positie van de sectie wordt alleen bij het laden en bij een andere maat gemeten,
 * de voortgang daarna uit de scrollpositie (Lenis) berekend.
 *
 * data-end="1" zodra de scène voor 60% doorlopen is (links in het eindbeeld pas dan klikbaar).
 * `track`: selector van een horizontale rij; de overloop (px) komt in --dist,
 * zodat de CSS de sectie precies zo hoog maakt als de rij lang is.
 */
export function ScrollStage({
  as: Tag = "section",
  className,
  track,
  children,
  ...rest
}: {
  as?: "section" | "div";
  className?: string;
  track?: string;
  children: React.ReactNode;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const geo = useRef({ top: 0, len: 1 });
  const last = useRef(-1);

  const update = useCallback((y: number) => {
    const el = ref.current;
    if (!el) return;
    const { top, len } = geo.current;
    const p = Math.min(1, Math.max(0, (y - top) / len));
    if (Math.abs(p - last.current) < 0.0004) return;
    const end = p >= 0.6;
    if (end !== last.current >= 0.6 || last.current < 0) el.dataset.end = end ? "1" : "0";
    last.current = p;
    el.style.setProperty("--p", p.toFixed(4));
  }, []);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (track) {
      const t = el.querySelector<HTMLElement>(track);
      if (t) el.style.setProperty("--dist", String(Math.max(0, Math.round(t.scrollWidth - el.clientWidth))));
    }
    const top = el.getBoundingClientRect().top + window.scrollY;
    geo.current = { top, len: Math.max(1, el.offsetHeight - window.innerHeight) };
    last.current = -1;
    update(window.scrollY);
  }, [track, update]);

  useScroll((s) => update(s));

  useEffect(() => {
    measure();
    // alles erboven kan nog van hoogte veranderen (lazy beelden, fonts): dan opnieuw meten
    let raf = 0;
    const again = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    const ro = new ResizeObserver(again);
    ro.observe(document.body);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", again);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", again);
    };
  }, [measure]);

  return (
    <Tag ref={ref as React.Ref<HTMLElement & HTMLDivElement>} className={className} {...rest}>
      {children}
    </Tag>
  );
}
