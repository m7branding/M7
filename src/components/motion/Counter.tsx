"use client";

import { useEffect, useRef } from "react";

/** Telt op van 0 naar `value` zodra het in beeld komt. */
export function Counter({ value, suffix = "", locale = "nl" }: { value: number; suffix?: string; locale?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const fmt = new Intl.NumberFormat(locale === "nl" ? "nl-NL" : "en-US");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = fmt.format(value) + suffix;
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const dur = 1800 + Math.min(1200, value / 3);
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt.format(Math.round(value * eased)) + suffix;
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, suffix, locale]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {value.toLocaleString(locale === "nl" ? "nl-NL" : "en-US")}
      {suffix}
    </span>
  );
}
