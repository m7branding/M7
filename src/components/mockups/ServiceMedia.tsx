"use client";

import { useEffect, useRef } from "react";
import type { Media } from "@/content/types";

/**
 * Eigen creatieve assets i.p.v. de code-mockup: Lottie (JSON),
 * video (mp4/webm) of afbeelding. Lottie wordt pas geladen als hij
 * in beeld komt; buiten beeld pauzeert hij.
 */
export function ServiceMedia({ media, alt }: { media: Media; alt: string }) {
  if (media.type === "image") return <img src={media.src} alt={alt} className="svc-media" loading="lazy" />;
  if (media.type === "video")
    return <video className="svc-media" src={media.src} poster={media.poster} autoPlay muted loop playsInline aria-label={alt} />;
  return <LottiePlayer src={media.src} poster={media.poster} alt={alt} />;
}

export function LottiePlayer({ src, poster, alt, loop = true }: { src: string; poster?: string; alt: string; loop?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let anim: { play: () => void; pause: () => void; destroy: () => void } | null = null;
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(async ([e]) => {
      if (e.isIntersecting && !anim) {
        const lottie = (await import("lottie-web/build/player/lottie_light")).default;
        if (cancelled) return;
        el.innerHTML = "";
        anim = lottie.loadAnimation({ container: el, renderer: "svg", loop, autoplay: !reduce, path: src });
      } else if (anim) {
        e.isIntersecting && !reduce ? anim.play() : anim.pause();
      }
    });
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      anim?.destroy();
    };
  }, [src, loop]);

  return (
    <div ref={ref} className="svc-media svc-media--lottie" role="img" aria-label={alt}>
      {poster ? <img src={poster} alt="" /> : null}
    </div>
  );
}
