"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TLink } from "@/components/motion/TLink";
import type { Reel } from "./reels";

export type ShowreelLabels = {
  /** Toegankelijke naam van het beeld, bv. "Showreel met werk van M7". */
  media: string;
  pause: string;
  play: string;
  /** "Toon showreel" (+ titel), voor de knoppen van de wisselaar. */
  show: string;
  /** "Nu in beeld" / "Met werk voor". */
  now: string;
  featuring: string;
};

type Slot = 0 | 1;
/** Hoe lang de overvloeier duurt (ms); gelijk aan de transition in showreel.css. */
const FADE = 900;

/**
 * Showreel-speler: muted, inline en in een lus, met eerst de poster.
 * Twee <video>-elementen wisselen elkaar af (double buffering): terwijl de ene speelt,
 * laadt de andere alvast de volgende clip, zodat de overgang een zachte overvloeier is
 * zonder zwart beeld. Werkt voor één lange film per reel én voor een reeks korte clips
 * (terugval met hero-clips van cases): alles staat in één doorlopende rij.
 *
 * - Speelt alleen in beeld (IntersectionObserver) en bij een zichtbaar tabblad.
 * - Reduced motion of databesparing: alleen de poster; met de playknop start hij alsnog.
 * - Mobiel (≤ 760px): `srcMobile` als die er is.
 * - `ui="full"`: wisselaar met voortgangslijnen per reel, pauzeknop en bijschrift.
 *   `ui="none"`: kale achtergrond (World of M7), met `ui="mini"` alleen een pauzeknop.
 * De voortgang loopt via één rAF die alleen een CSS-variabele (--p) zet.
 */
export function ShowreelPlayer({
  reels,
  labels,
  ui = "full",
  className,
  priority = false,
  rootMargin = "0px",
  children,
}: {
  reels: Reel[];
  labels: ShowreelLabels;
  ui?: "full" | "mini" | "none";
  className?: string;
  /** Boven de vouw: de eerste poster als <img> met voorrang (LCP), al vóór de hydratatie zichtbaar. */
  priority?: boolean;
  /** Marge voor 'in beeld' (bv. "20% 0px" om iets eerder te starten). */
  rootMargin?: string;
  children?: React.ReactNode;
}) {
  // alle clips van alle reels op een rij; ri/ci = positie in de reel
  const seq = useMemo(
    () => reels.flatMap((r, ri) => r.clips.map((c, ci) => ({ ...c, ri, ci, n: r.clips.length }))),
    [reels],
  );
  const N = seq.length;
  const starts = useMemo(() => {
    let k = 0;
    return reels.map((r) => {
      const s = k;
      k += r.clips.length;
      return s;
    });
  }, [reels]);

  const [slot, setSlot] = useState<[number, number]>([0, -1]);
  const [front, setFront] = useState<Slot>(0);
  const [fading, setFading] = useState(false);
  /**
   * Pas na de mount én in de buurt van de viewport krijgen de video's een src (eerst de poster;
   * mobiel kiest zijn eigen bestand). Bij reduced motion of databesparing pas na een klik op play.
   */
  const [near, setNear] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [started, setStarted] = useState(false);
  const srcOn = near && (!blocked || started);
  const [small, setSmall] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [inView, setInView] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [ready, setReady] = useState(false);

  const root = useRef<HTMLDivElement>(null);
  const vids = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const fills = useRef<(HTMLSpanElement | null)[]>([]);
  const frontRef = useRef<Slot>(0);
  const slotRef = useRef<[number, number]>([0, -1]);
  frontRef.current = front;
  slotRef.current = slot;

  const cur = Math.max(0, slot[front]);
  const clip = seq[cur];
  const curReel = clip ? clip.ri : 0;
  const playing = srcOn && inView && !hidden && !userPaused;

  // omgeving: reduced motion, databesparing, breedte, zichtbaarheid
  useEffect(() => {
    const mqR = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqS = window.matchMedia("(max-width: 760px)");
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    const r = mqR.matches;
    setReduce(r);
    setSmall(mqS.matches);
    // zonder beweging of bij databesparing: alleen de poster tot iemand op play drukt
    if (r || save) {
      setBlocked(true);
      setUserPaused(true);
    }
    setReady(true);
    const vis = () => setHidden(document.hidden);
    vis();
    document.addEventListener("visibilitychange", vis);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin, threshold: 0.12 });
    // ruim op tijd (een scherm vooruit) beginnen met laden, daarna blijft de src staan
    const pre = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setNear(true);
        pre.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    if (root.current) {
      io.observe(root.current);
      pre.observe(root.current);
    }
    return () => {
      document.removeEventListener("visibilitychange", vis);
      io.disconnect();
      pre.disconnect();
    };
  }, [rootMargin]);

  const srcOf = useCallback((k: number) => (small && seq[k]?.srcMobile ? seq[k].srcMobile! : seq[k]?.src), [seq, small]);

  /** Naar clip j (in de doorlopende rij): via de achterste video, met een overvloeier. */
  const go = useCallback(
    (j: number) => {
      if (N < 2) return;
      const k = ((j % N) + N) % N;
      const f = frontRef.current;
      const s = slotRef.current;
      if (s[f] === k) {
        const v = vids.current[f];
        if (v) {
          try {
            v.currentTime = 0;
          } catch {}
        }
        return;
      }
      const b = (1 - f) as Slot;
      const next: [number, number] = [s[0], s[1]];
      next[b] = k;
      setSlot(next);
      setFront(b);
      setFading(true);
    },
    [N],
  );

  // na de overvloeier: de vorige video verbergen en er de volgende clip in klaarzetten
  useEffect(() => {
    if (!fading) return;
    const t = window.setTimeout(() => setFading(false), FADE + 60);
    return () => window.clearTimeout(t);
  }, [fading, front]);

  useEffect(() => {
    if (fading || N < 2 || !srcOn) return;
    // even wachten, zodat de clip die nu speelt eerst de bandbreedte krijgt
    const t = window.setTimeout(
      () => {
        const f = frontRef.current;
        const b = (1 - f) as Slot;
        const want = (slotRef.current[f] + 1) % N;
        if (slotRef.current[b] !== want) {
          setSlot((s) => {
            const n: [number, number] = [s[0], s[1]];
            n[b] = want;
            return n;
          });
        }
      },
      slot[front] === 0 && slot[1 - front] < 0 ? 1800 : 400,
    );
    return () => window.clearTimeout(t);
  }, [fading, front, slot, N, srcOn]);

  // afspelen: alleen de voorste video; de vorige mag tijdens de overvloeier doorlopen
  useEffect(() => {
    vids.current.forEach((v, i) => {
      if (!v) return;
      if (i === front) {
        if (playing) {
          const p = v.play();
          if (p) p.catch(() => {});
        } else v.pause();
      } else if (!fading) {
        v.pause();
      }
    });
  }, [front, slot, playing, fading]);

  // voortgang van de huidige reel (één CSS-variabele, alleen terwijl er iets speelt)
  useEffect(() => {
    if (ui !== "full") return;
    const set = (p: number) => {
      const el = fills.current[seq[slotRef.current[frontRef.current]]?.ri ?? 0];
      if (el) el.style.setProperty("--p", p.toFixed(4));
    };
    const at = () => {
      const f = frontRef.current;
      const v = vids.current[f];
      const c = seq[slotRef.current[f]];
      if (!v || !c) return 0;
      const d = v.duration;
      const t = Number.isFinite(d) && d > 0 ? Math.min(1, v.currentTime / d) : 0;
      return (c.ci + t) / c.n;
    };
    set(at());
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      set(at());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, front, slot, seq, ui]);

  const onEnded = (i: number) => {
    if (i !== frontRef.current) return;
    if (N > 1) go(slotRef.current[i] + 1);
  };

  const toggle = () => {
    if (userPaused) {
      setStarted(true);
      setNear(true);
      setUserPaused(false);
    } else setUserPaused(true);
  };

  const reel = reels[curReel];
  const caption = clip?.client
    ? { kind: "now" as const, text: clip.client, href: clip.href }
    : reel?.cases.length
      ? { kind: "featuring" as const, text: reel.cases.map((c) => c.client).join(" · ") }
      : null;

  return (
    <div
      ref={root}
      className={`srp${className ? " " + className : ""}`}
      data-playing={playing ? "1" : "0"}
      data-ready={ready ? "1" : undefined}
      data-reduce={reduce ? "1" : undefined}
    >
      <div className="srp__media" role="img" aria-label={reel ? `${labels.media}: ${reel.title}` : labels.media}>
        {priority && seq[0]?.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="srp__poster" src={seq[0].poster} alt="" fetchPriority="high" decoding="async" />
        ) : null}
        {([0, 1] as Slot[]).map((i) => {
          const k = slot[i];
          const c = k >= 0 ? seq[k] : undefined;
          const state = i === front ? "on" : fading ? "off" : "idle";
          return (
            <video
              key={i}
              ref={(el) => {
                vids.current[i] = el;
              }}
              className="srp__v"
              data-state={state}
              src={srcOn && c ? srcOf(k) : undefined}
              // een poster-attribuut laadt altijd meteen: pas zetten als de speler in de buurt is
              poster={near || priority ? c?.poster : undefined}
              muted
              playsInline
              loop={N === 1}
              preload={srcOn && c ? "auto" : "none"}
              aria-hidden="true"
              tabIndex={-1}
              disablePictureInPicture
              onEnded={() => onEnded(i)}
              onError={() => i === frontRef.current && N > 1 && go(slotRef.current[i] + 1)}
            />
          );
        })}
      </div>
      <div className="srp__shade" aria-hidden="true" />
      <div className="srp__inner">
        {children}
        {ui !== "none" ? (
          <div className="srp__bar">
            {ui === "full" && caption ? (
              <p className="srp__cap" aria-live="off">
                <span className="srp__cap-k">{caption.kind === "now" ? labels.now : labels.featuring}</span>
                {caption.kind === "now" && caption.href ? (
                  // vaste link (alleen href en tekst wisselen), zodat de focus niet wegvalt
                  <TLink href={caption.href} className="srp__cap-link">
                    <span key={cur}>{caption.text}</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                      <path d="M2.5 7.5 7.5 2.5M3.5 2.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </TLink>
                ) : (
                  <span className="srp__cap-txt" key={curReel}>
                    {caption.text}
                  </span>
                )}
              </p>
            ) : null}
            <div className="srp__ctrl">
              <button
                type="button"
                className="srp__pause"
                aria-label={userPaused ? labels.play : labels.pause}
                aria-pressed={userPaused}
                onClick={toggle}
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
              {ui === "full" && reels.length > 1 ? (
                <ol className="srp__reels">
                  {reels.map((r, ri) => (
                    <li key={r.slug}>
                      <button
                        type="button"
                        className="srp__reel"
                        data-state={ri === curReel ? "on" : ri < curReel ? "done" : "todo"}
                        aria-current={ri === curReel ? "true" : undefined}
                        aria-label={`${labels.show}: ${r.title}`}
                        onClick={() => go(starts[ri])}
                      >
                        <span className="srp__reel-label" aria-hidden="true">
                          <span className="srp__reel-num">{String(ri + 1).padStart(2, "0")}</span>
                          <span className="srp__reel-title">{r.title}</span>
                        </span>
                        <span className="srp__line" aria-hidden="true">
                          <span
                            className="srp__fill"
                            ref={(el) => {
                              fills.current[ri] = el;
                            }}
                          />
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
