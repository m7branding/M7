"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================
   Schermvullende achtergrondvideo voor de case-hero.
   - Eerst de poster (een gewone <img> met hoge prioriteit: dat is de LCP),
     de video faded er pas overheen als hij echt speelt.
   - Mobiel (≤ 760px): de staande versie (srcMobile/posterMobile) als die er
     is, anders de liggende video met object-position.
   - Gedempt, in een lus, inline; speelt alleen in beeld en niet bij
     prefers-reduced-motion of databesparing (dan blijft de poster staan).
   ============================================================ */

const MOBILE = "(max-width: 760px)";

export function HeroVideo({
  src,
  poster,
  srcMobile,
  posterMobile,
  position,
  label,
}: {
  src: string;
  poster?: string;
  srcMobile?: string;
  posterMobile?: string;
  position?: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia(MOBILE);
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    let inView = true;
    let ready = false;
    let loaded = "";

    const sync = () => {
      if (motion.matches || saveData) {
        v.pause();
        setOn(false);
        return;
      }
      const want = mobile.matches && srcMobile ? srcMobile : src;
      if (loaded !== want) {
        loaded = want;
        setOn(false);
        // React zet `muted` niet als attribuut in de SSR-HTML: zonder dit blokkeert de browser autoplay
        v.muted = true;
        v.src = want;
        v.load();
      }
      if (inView) v.play().catch(() => {});
      else v.pause();
    };
    const playing = () => setOn(true);
    v.addEventListener("playing", playing);

    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (ready) sync();
      },
      { threshold: 0.02 },
    );
    io.observe(v);
    motion.addEventListener("change", sync);
    mobile.addEventListener("change", sync);
    // pas na de eerste paint laden: de poster (LCP) gaat voor
    const t = window.setTimeout(() => {
      ready = true;
      sync();
    }, 120);
    return () => {
      window.clearTimeout(t);
      io.disconnect();
      motion.removeEventListener("change", sync);
      mobile.removeEventListener("change", sync);
      v.removeEventListener("playing", playing);
      v.pause();
    };
  }, [src, srcMobile]);

  return (
    <>
      {poster ? (
        <picture>
          {posterMobile ? <source media={MOBILE} srcSet={posterMobile} /> : null}
          <img src={poster} alt="" fetchPriority="high" decoding="async" style={position ? { objectPosition: position } : undefined} />
        </picture>
      ) : null}
      <video
        ref={ref}
        className={on ? "is-on" : undefined}
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        disablePictureInPicture
        aria-label={label}
        style={position ? { objectPosition: position } : undefined}
      />
    </>
  );
}
