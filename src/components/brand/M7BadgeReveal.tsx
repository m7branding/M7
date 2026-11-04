"use client";

import { useEffect, useId, useRef } from "react";
import { M7_PATHS } from "./M7Logo";

/**
 * De M7-badge met dezelfde reveal als de preloader: het logo tekent zich
 * (lined) → vult zich (emblem) → de gradient-ring sluit (badge).
 * Speelt opnieuw af elke keer dat de badge in beeld komt.
 */
export function M7BadgeReveal({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const el = ref.current!;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in", "is-static");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.6) el.classList.add("is-in");
        // pas resetten als hij helemaal uit beeld is, dan speelt hij de volgende keer opnieuw
        else if (!e.isIntersecting) el.classList.remove("is-in");
      },
      { threshold: [0, 0.6] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 147 147" className={`m7r${className ? " " + className : ""}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="73.4" y1="0" x2="73.4" y2="147" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3AFFFF" />
          <stop offset="1" stopColor="#00FF19" />
        </linearGradient>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={`${id}-c`}>
          <g transform="translate(30.69 51.25)">
            {M7_PATHS.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </clipPath>
      </defs>
      <circle className="m7r__disc" cx="73.415" cy="73.415" r="66.4" />
      <circle className="m7r__ring" cx="73.415" cy="73.415" r="69.9" pathLength={1} stroke={`url(#${id}-g)`} />
      <g transform="translate(30.69 51.25)">
        <g className="m7r__lined">
          {M7_PATHS.map((d, i) => (
            <path key={i} d={d} pathLength={1} style={{ ["--pi" as string]: i }} />
          ))}
        </g>
        <g className="m7r__fill">
          {M7_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </g>
      <g clipPath={`url(#${id}-c)`}>
        <rect className="m7r__sheen" x="-60" y="40" width="50" height="70" fill={`url(#${id}-s)`} />
      </g>
    </svg>
  );
}
