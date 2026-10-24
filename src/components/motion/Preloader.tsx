"use client";

import { useEffect, useRef, useState } from "react";
import { M7_PATHS } from "@/components/brand/M7Logo";
import { ready } from "./PageTransition";

const MIN_MS = 3100;
const MAX_MS = 5200;

/**
 * Preloader: "Welcome to the world of brands and digital solutions."
 * Het M7-logo tekent zichzelf (lined) → vult zich (emblem) → de
 * gradient-ring sluit zich (badge). Daarna veegt het doek omhoog.
 * De animatie zelf is pure CSS (start bij de eerste paint);
 * JS regelt alleen de teller en het moment van wegvegen.
 * Eén keer per sessie; daarna direct door.
 */
export function Preloader({ a, b }: { a: string; b: string }) {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro === "seen") {
      setGone(true);
      ready();
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    let loaded = document.readyState === "complete";
    const onLoad = () => (loaded = true);
    window.addEventListener("load", onLoad);

    const tick = () => {
      const el = performance.now() - t0;
      const p = Math.min(1, el / (MIN_MS - 300));
      const eased = 1 - Math.pow(1 - p, 3);
      if (countRef.current) countRef.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if ((el >= MIN_MS && loaded) || el >= MAX_MS) {
        setDone(true);
        try {
          sessionStorage.setItem("m7-intro", "1");
        } catch {}
        window.setTimeout(ready, 650);
        window.setTimeout(() => setGone(true), 1700);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (gone) return null;

  const wordsA = a.split(" ");
  const wordsB = b.split(" ");

  return (
    <div className={`pl${done ? " is-done" : ""}`} aria-hidden="true">
      <div className="pl__sweep" />
      <div className="pl__panel">
        <div className="pl__stars" />
        <div className="pl__glow" />
        <div className="pl__center">
          <div className="pl__logo">
            <svg viewBox="0 0 147 147" className="pl__svg">
              <defs>
                <linearGradient id="pl-g" x1="73.4" y1="0" x2="73.4" y2="147" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3AFFFF" />
                  <stop offset="1" stopColor="#00FF19" />
                </linearGradient>
                <linearGradient id="pl-sheen" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#fff" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#fff" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <clipPath id="pl-clip">
                  <g transform="translate(30.69 51.25)">
                    {M7_PATHS.map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </g>
                </clipPath>
              </defs>
              <circle className="pl__disc" cx="73.415" cy="73.415" r="66.4" />
              <circle className="pl__ring" cx="73.415" cy="73.415" r="69.9" pathLength={1} stroke="url(#pl-g)" />
              <g transform="translate(30.69 51.25)">
                <g className="pl__lined">
                  {M7_PATHS.map((d, i) => (
                    <path key={i} d={d} pathLength={1} style={{ ["--pi" as string]: i }} />
                  ))}
                </g>
                <g className="pl__fill">
                  {M7_PATHS.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>
              </g>
              <g clipPath="url(#pl-clip)">
                <rect className="pl__sheen" x="-60" y="40" width="50" height="70" fill="url(#pl-sheen)" />
              </g>
            </svg>
          </div>
          <p className="pl__text">
            <span className="pl__line">
              {wordsA.map((w, i) => (
                <span className="pl__w" key={i}>
                  <span style={{ ["--i" as string]: i }}>{w}</span>
                </span>
              ))}
            </span>
            <span className="pl__line pl__line--b">
              {wordsB.map((w, i) => (
                <span className="pl__w" key={i}>
                  <span style={{ ["--i" as string]: i + wordsA.length }}>{w}</span>
                </span>
              ))}
            </span>
          </p>
        </div>
        <div className="pl__foot">
          <span className="pl__brand">M7 Branding &amp; Design</span>
          <span className="pl__bar">
            <span />
          </span>
          <span className="pl__count" ref={countRef}>
            000
          </span>
        </div>
      </div>
    </div>
  );
}
