"use client";

import { useCallback, useEffect, useRef } from "react";
import { useScroll } from "./SmoothScroll";

/**
 * Breed beeld of video dat bij het scrollen omhoog schuift, openvouwt
 * (afgeronde, ingesprongen rand → bijna schermvullend) en rustig uitzoomt.
 * Daarna verschijnt de (optionele) quote eroverheen.
 * Voortgang gaat via de CSS-variabele --p (0 → 1).
 */
export function ScrollShowcase({
  image,
  video,
  poster,
  position,
  alt = "",
  quote,
  cite,
  className,
}: {
  image?: string;
  video?: string;
  poster?: string;
  position?: string;
  alt?: string;
  quote?: string;
  cite?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)));
    el.style.setProperty("--p", p.toFixed(4));
    if (p > 0.7) el.classList.add("is-quote");
    else if (p < 0.4) el.classList.remove("is-quote");
  }, []);

  useScroll(update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const words = quote ? quote.split(" ") : [];

  return (
    <div ref={ref} className={`showcase${className ? " " + className : ""}`}>
      <div className="showcase__frame">
        {video ? (
          <video className="showcase__media" src={video} poster={poster} autoPlay muted loop playsInline preload="metadata" style={{ objectPosition: position }} />
        ) : image ? (
          <img className="showcase__media" src={image} alt={alt} loading="lazy" style={{ objectPosition: position }} />
        ) : null}
        {quote ? (
          <figure className="showcase__quote">
            <blockquote>
              <p>
                {words.map((w, i) => (
                  <span key={i} className="showcase__w">
                    <span style={{ ["--i" as string]: i }}>{w}</span>
                  </span>
                ))}
              </p>
            </blockquote>
            {cite ? <figcaption>{cite}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </div>
  );
}
