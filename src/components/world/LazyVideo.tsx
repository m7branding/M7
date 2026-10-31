"use client";

import { useEffect, useRef } from "react";

/**
 * Korte loop die pas laadt als hij in de buurt komt en alleen speelt als hij echt
 * in beeld is (IntersectionObserver); daarbuiten pauzeert hij. Het stilstaande beeld
 * is een gewone <img loading="lazy"> eronder (een poster-attribuut laadt altijd meteen):
 * de video vloeit er pas overheen als hij speelt (data-on, zie world.css).
 * Zonder beweging (reduced motion) of bij databesparing blijft het beeld staan.
 * De src wordt buiten React gezet, zodat er niets opnieuw rendert.
 */
export function LazyVideo({
  src,
  srcMobile,
  className,
  play = 0.4,
}: {
  src: string;
  srcMobile?: string;
  className?: string;
  /** Welk deel in beeld moet zijn voor hij speelt (0–1). */
  play?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (reduce || save) return;
    const small = window.matchMedia("(max-width: 760px)").matches;
    const on = () => (v.dataset.on = "1");
    v.addEventListener("playing", on);
    let armed = false;
    let seen = false;
    const tryPlay = () => {
      if (armed && seen && !document.hidden) v.play().catch(() => {});
      else v.pause();
    };
    const near = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        armed = true;
        v.src = small && srcMobile ? srcMobile : src;
        v.preload = "auto";
        near.disconnect();
        tryPlay();
      },
      { rootMargin: "50% 50%" },
    );
    const vis = new IntersectionObserver(
      ([e]) => {
        seen = e.isIntersecting;
        tryPlay();
      },
      { threshold: play },
    );
    near.observe(v);
    vis.observe(v);
    document.addEventListener("visibilitychange", tryPlay);
    return () => {
      near.disconnect();
      vis.disconnect();
      document.removeEventListener("visibilitychange", tryPlay);
      v.removeEventListener("playing", on);
      v.pause();
    };
  }, [src, srcMobile, play]);

  return <video ref={ref} className={className} muted playsInline loop preload="none" aria-hidden="true" tabIndex={-1} disablePictureInPicture />;
}
