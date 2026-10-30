"use client";

import { useEffect, useRef } from "react";
import "./DeviceHero.css";

/* ============================================================
   Video-hero voor de casepagina: een gerenderde, realistische 3D-mockup
   (rustige camerabeweging, naadloze ping-pong-loop) in een afgerond kader
   rechts van de tekst; op tablet en mobiel eronder (zelfde opbouw als de
   device-hero).
   - Speelt alleen in beeld (IntersectionObserver), daarbuiten gepauzeerd.
   - prefers-reduced-motion: alleen de poster, de video start niet.
   - Geen autoplay-attribuut: JavaScript start de (gedempte, inline) video
     pas als beweging mag en de hero in beeld is; zonder JS blijft de poster.
   ============================================================ */

export function VideoHero({ src, poster, color, label }: { src: string; poster?: string; color?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const sync = () => {
      if (inView && !mq.matches) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    };
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    mq.addEventListener("change", sync);
    return () => {
      io.disconnect();
      mq.removeEventListener("change", sync);
      v.pause();
    };
  }, []);

  return (
    <div className="dh dh--video" style={color ? ({ "--cc": color } as React.CSSProperties) : undefined}>
      <div className="dh-glow" aria-hidden="true" />
      <div className="dh-video">
        <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-label={label} disablePictureInPicture />
      </div>
    </div>
  );
}
