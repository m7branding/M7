"use client";

import { useEffect, useRef } from "react";

/**
 * Korte loop die pas laadt als hij in de buurt komt en alleen speelt als hij echt
 * in beeld is (IntersectionObserver); daarbuiten pauzeert hij. Het stilstaande beeld
 * is een gewone <img loading="lazy"> eronder (een poster-attribuut laadt altijd meteen):
 * de video vloeit er pas overheen als hij speelt (data-on, zie world.css).
 * Zonder beweging (reduced motion) of bij databesparing blijft het beeld staan.
 * De src wordt buiten React gezet, zodat er niets opnieuw rendert.
 *
 * `step`: de video hoort bij stap `step` van een vastgepinde scène met stappen
 * (ScrollStage `steps`, die data-step op de sectie zet). Dan laadt hij pas als zijn stap
 * of een buurstap actief is en speelt hij alleen in zijn eigen stap; alle panelen liggen
 * daar op elkaar en zijn dus tegelijk "in beeld". Zonder data-step (mobiel, reduced motion)
 * gewoon op zicht.
 */
export function LazyVideo({
  src,
  srcMobile,
  className,
  play = 0.4,
  step,
}: {
  src: string;
  srcMobile?: string;
  className?: string;
  /** Welk deel in beeld moet zijn voor hij speelt (0–1). */
  play?: number;
  step?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (reduce || save) return;
    const small = window.matchMedia("(max-width: 760px)").matches;
    const host = step === undefined ? null : v.closest<HTMLElement>("[data-steps]");
    /** Afstand tot de actieve stap (0 = deze); zonder stappen altijd 0. */
    const dist = () => {
      const s = host?.dataset.step;
      return s === undefined || step === undefined ? 0 : Math.abs(Number(s) - step);
    };
    const on = () => (v.dataset.on = "1");
    v.addEventListener("playing", on);
    let near = false;
    let armed = false;
    let seen = false;
    const arm = () => {
      if (armed || !near || dist() > 1) return;
      armed = true;
      v.src = small && srcMobile ? srcMobile : src;
      v.preload = "auto";
    };
    const tryPlay = () => {
      arm();
      if (armed && seen && !document.hidden && dist() === 0) v.play().catch(() => {});
      else v.pause();
    };
    const nearIo = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        near = true;
        nearIo.disconnect();
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
    // andere stap actief: opnieuw kijken (alleen het attribuut data-step van de scène)
    const mo = host ? new MutationObserver(tryPlay) : null;
    if (host && mo) mo.observe(host, { attributes: true, attributeFilter: ["data-step"] });
    nearIo.observe(v);
    vis.observe(v);
    document.addEventListener("visibilitychange", tryPlay);
    return () => {
      nearIo.disconnect();
      vis.disconnect();
      mo?.disconnect();
      document.removeEventListener("visibilitychange", tryPlay);
      v.removeEventListener("playing", on);
      v.pause();
    };
  }, [src, srcMobile, play, step]);

  return <video ref={ref} className={className} muted playsInline loop preload="none" aria-hidden="true" tabIndex={-1} disablePictureInPicture />;
}
