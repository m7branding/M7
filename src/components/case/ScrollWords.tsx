"use client";

import { Fragment, useCallback, useEffect, useRef } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";

/**
 * Tekst die woord voor woord oplicht op de scroll: van vaag en wazig naar scherp en wit.
 * De voortgang (--p, 0 → 1) loopt van "tekst komt onderin binnen" tot "laatste regel
 * staat net boven het midden"; per woord rekent de CSS (.cx-words) de stand uit.
 * Zonder JS of met reduced motion staat alles er gewoon.
 */
export function ScrollWords({ text, className, as: Tag = "p" }: { text: string; className?: string; as?: "p" | "h2" }) {
  const ref = useRef<HTMLElement>(null);
  const words = text.trim().split(/\s+/);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.88;
    const end = vh * 0.5;
    const p = Math.min(1, Math.max(0, (start - r.top) / (r.height + start - end)));
    el.style.setProperty("--p", p.toFixed(4));
  }, []);

  useScroll(update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  return (
    <Tag ref={ref as React.RefObject<HTMLParagraphElement>} className={`cx-words${className ? " " + className : ""}`} style={{ ["--n" as string]: words.length }}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="cx-words__w" style={{ ["--i" as string]: i }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
