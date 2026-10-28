"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type HeroSlide =
  | { kind: "video"; src: string; poster?: string; label: string }
  | { kind: "still"; src: string; srcSm: string; w: number; h: number; label: string; pos?: string; posM?: string };

/**
 * Achtergrond van de over-ons-hero: korte clips (of, zolang die er niet zijn,
 * kantoorfoto's met een trage Ken Burns-beweging) die met een rustige crossfade rouleren.
 * De voortgangsbalk stuurt het ritme: als de vulling klaar is, volgt het volgende beeld.
 * Zo pauzeert alles vanzelf buiten beeld (section[data-play="0"]), bij een verborgen tab
 * en met de pauzeknop. Reduced motion: stilstaand eerste beeld, handmatig te wisselen.
 */
export function AboutHeroMedia({
  slides,
  seconds,
  maxSeconds,
  labels,
  children,
}: {
  slides: HeroSlide[];
  /** Duur per foto (s). */
  seconds: number;
  /** Maximale duur per clip (s). */
  maxSeconds: number;
  labels: { media: string; pause: string; play: string; show: string; of: string };
  children: React.ReactNode;
}) {
  const n = slides.length;
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [armed, setArmed] = useState<Set<number>>(() => new Set([0]));
  const [userPaused, setUserPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [inView, setInView] = useState(true);
  const [ready, setReady] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const [dur, setDur] = useState<Record<number, number>>({});
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const curRef = useRef(0);
  curRef.current = cur;

  const paused = userPaused || hidden || reduce || !inView;

  const go = useCallback(
    (i: number) => {
      const next = ((i % n) + n) % n;
      if (next === curRef.current) return;
      setArmed((s) => (s.has(next) ? s : new Set(s).add(next)));
      setPrev(curRef.current);
      setCur(next);
    },
    [n],
  );

  // reduced motion + tab zichtbaarheid
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const vis = () => setHidden(document.hidden);
    vis();
    setReady(true);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.05 });
    if (frame.current) io.observe(frame.current);
    document.addEventListener("visibilitychange", vis);
    return () => {
      mq.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", vis);
      io.disconnect();
    };
  }, []);

  // het volgende beeld alvast laden (pas na de eerste paint, zodat het eerste beeld voorrang heeft)
  useEffect(() => {
    if (n < 2) return;
    const t = window.setTimeout(
      () => {
        setArmed((s) => (s.has((cur + 1) % n) && s.has(cur) ? s : new Set(s).add(cur).add((cur + 1) % n)));
      },
      cur === 0 ? 1200 : 200,
    );
    return () => window.clearTimeout(t);
  }, [cur, n]);

  // het vorige beeld na de crossfade opruimen
  useEffect(() => {
    if (prev === null) return;
    const t = window.setTimeout(() => setPrev(null), 2200);
    return () => window.clearTimeout(t);
  }, [prev, cur]);

  // video's: alleen de actieve speelt (de uitgaande mag uitfaden)
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === cur) {
        if (paused) v.pause();
        else v.play().catch(() => {});
      } else if (i !== prev) {
        v.pause();
      }
    });
    const t = window.setTimeout(() => {
      videos.current.forEach((v, i) => {
        if (v && i !== curRef.current) {
          v.pause();
          try {
            v.currentTime = 0;
          } catch {}
        }
      });
    }, 2000);
    return () => window.clearTimeout(t);
  }, [cur, prev, paused]);

  const onFillEnd = () => {
    if (n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    go(cur + 1);
  };

  const slideDur = (i: number) => {
    const s = slides[i];
    if (s.kind === "still") return seconds;
    const d = dur[i];
    return d ? Math.max(3, Math.min(d, maxSeconds) - 0.4) : 0;
  };

  const kb = (i: number) => i % 4;

  return (
    <div className="ah__frame" ref={frame} data-paused={paused ? "1" : "0"} data-ready={ready ? "1" : undefined}>
      <div className="ah__media" role="img" aria-label={labels.media}>
        {slides.map((s, i) => {
          const state = i === cur ? "on" : i === prev ? "off" : "idle";
          const style = {
            ["--kb-dur" as string]: `${(s.kind === "still" ? seconds : maxSeconds) + 2.4}s`,
            ["--pos" as string]: s.kind === "still" ? s.pos || "50% 50%" : "50% 50%",
            ["--pos-m" as string]: s.kind === "still" ? s.posM || s.pos || "50% 50%" : "50% 50%",
          };
          return (
            <div key={i} className={`ah__slide ah__slide--kb${kb(i)}`} data-state={state} style={style}>
              {s.kind === "still" ? (
                armed.has(i) || i === 0 ? (
                  <img
                    src={s.src}
                    srcSet={`${s.srcSm} ${Math.round((720 * s.w) / Math.max(s.w, s.h))}w, ${s.src} ${s.w}w`}
                    sizes="100vw"
                    width={s.w}
                    height={s.h}
                    alt=""
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ) : null
              ) : (
                <video
                  ref={(el) => {
                    videos.current[i] = el;
                  }}
                  src={armed.has(i) || i === 0 ? s.src : undefined}
                  poster={s.poster}
                  muted
                  playsInline
                  autoPlay={i === 0 && !paused}
                  loop={n === 1}
                  preload={i === cur || armed.has(i) ? "auto" : "none"}
                  onLoadedMetadata={(e) => {
                    const d = e.currentTarget.duration;
                    if (Number.isFinite(d) && d > 0) setDur((o) => ({ ...o, [i]: d }));
                  }}
                  onEnded={() => i === curRef.current && n > 1 && go(i + 1)}
                  onError={() => i === curRef.current && n > 1 && go(i + 1)}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="ah__shade" aria-hidden="true" />
      <div className="ah__inner">
        {children}
        {n > 1 ? (
          <div className="ah__bar">
            <div className="ah__ctrl">
              {!reduce ? (
                <button
                  type="button"
                  className="ah__pause"
                  aria-label={userPaused ? labels.play : labels.pause}
                  aria-pressed={userPaused}
                  onClick={() => setUserPaused((p) => !p)}
                >
                  {userPaused ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M3 1.8v8.4L10.2 6 3 1.8Z" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M3 2h2v8H3zM7 2h2v8H7z" fill="currentColor" />
                    </svg>
                  )}
                </button>
              ) : null}
              <ol className="ah__segs">
                {slides.map((s, i) => {
                  const d = slideDur(i);
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        className="ah__seg"
                        data-state={i === cur ? "on" : i < cur ? "done" : "todo"}
                        aria-label={`${labels.show} ${i + 1} ${labels.of} ${n}: ${s.label}`}
                        aria-current={i === cur ? "true" : undefined}
                        onClick={() => go(i)}
                      >
                        <span
                          className="ah__fill"
                          key={i === cur ? `on-${cur}` : "off"}
                          style={{ ["--dur" as string]: `${d}s` }}
                          data-wait={d ? undefined : "1"}
                          onAnimationEnd={i === cur ? onFillEnd : undefined}
                        />
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
            <p className="ah__caption" aria-live="off">
              <span className="ah__num">{String(cur + 1).padStart(2, "0")}</span>
              <span className="ah__label" key={cur}>
                {slides[cur].label}
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
