"use client";

import { useEffect, useState } from "react";
import { Emblem } from "./Logo";

/**
 * Brand preloader: the emblem weaves itself together segment by
 * segment, then the overlay lifts away. Shown once per full page load.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"weaving" | "lifting" | "done">("weaving");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("done");
      return;
    }
    const lift = setTimeout(() => setPhase("lifting"), 1350);
    const done = setTimeout(() => setPhase("done"), 1950);
    return () => {
      clearTimeout(lift);
      clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "lifting" ? "preloader-lift" : ""}`}>
      <div className="preloader-mark">
        <Emblem size={72} color="var(--ink)" animated />
        <div className="preloader-word">
          index<span>Link</span>
        </div>
      </div>
    </div>
  );
}
