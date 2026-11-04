"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "./SmoothScroll";

interface Manifest {
  fps: number;
  width?: number;
  height?: number;
  sets: Record<"lg" | "sm", { count: number; ext: string }>;
}

/**
 * Scroll-gestuurde frame-reeks (zoals de Lotties op /home-2, maar ~3× lichter).
 * Frames worden progressief geladen (eerst elk 8e frame, dan steeds fijner)
 * en op een canvas getekend op basis van de scrollpositie.
 *
 * mode "leave":   0 → 1 terwijl de trigger (dichtstbijzijnde <section>) de
 *                 viewport uit scrollt — ideaal voor de hero.
 * mode "through": 0 → 1 terwijl het element van onder naar boven door de
 *                 viewport beweegt — voor secties verderop.
 *
 * Maak nieuwe reeksen met: node scripts/sequence.mjs <lottie.json|video> <naam>
 */
export function ScrollSequence({
  src,
  mode = "through",
  align = "center",
  className,
  alt,
  start = 0,
  end = 1,
  eager = false,
}: {
  /** Map met manifest.json, bv. "/media/sequences/hero" */
  src: string;
  mode?: "leave" | "through";
  align?: "center" | "bottom";
  className?: string;
  alt: string;
  /** Remap van de voortgang: speel af tussen start en end (0..1). */
  start?: number;
  end?: number;
  /** Direct laden (hero) i.p.v. pas vlak voor in beeld. */
  eager?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const state = useRef({
    frames: [] as (HTMLImageElement | null)[],
    count: 0,
    target: 0,
    current: 0,
    drawn: -1,
    raf: 0,
    ready: false,
  });

  const progress = () => {
    const el = wrap.current;
    if (!el) return 0;
    const vh = window.innerHeight;
    let p: number;
    if (mode === "leave") {
      const trigger = (el.closest("section") as HTMLElement) || el;
      const r = trigger.getBoundingClientRect();
      p = -r.top / Math.max(1, r.height * 0.85);
    } else {
      const r = el.getBoundingClientRect();
      p = (vh - r.top) / (vh + r.height);
    }
    p = (p - start) / Math.max(0.001, end - start);
    return Math.min(1, Math.max(0, p));
  };

  const draw = () => {
    const s = state.current;
    const cv = canvas.current;
    if (!cv || !s.count) return;
    const want = Math.round(s.current);
    // dichtstbijzijnde geladen frame
    let idx = -1;
    for (let d = 0; d < s.count; d++) {
      if (s.frames[want - d]) {
        idx = want - d;
        break;
      }
      if (s.frames[want + d]) {
        idx = want + d;
        break;
      }
    }
    if (idx < 0 || idx === s.drawn) return;
    const img = s.frames[idx]!;
    const ctx = cv.getContext("2d")!;
    const cw = cv.width,
      ch = cv.height;
    const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * scale,
      h = img.naturalHeight * scale;
    const x = (cw - w) / 2;
    const y = align === "bottom" ? ch - h : (ch - h) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
    s.drawn = idx;
    if (!s.ready) {
      s.ready = true;
      wrap.current?.classList.add("is-ready");
    }
  };

  const tick = () => {
    const s = state.current;
    s.current += (s.target - s.current) * 0.22;
    if (Math.abs(s.target - s.current) < 0.05) s.current = s.target;
    draw();
    s.raf = s.current !== s.target ? requestAnimationFrame(tick) : 0;
  };

  const update = () => {
    const s = state.current;
    if (!s.count) return;
    s.target = progress() * (s.count - 1);
    if (!s.raf) s.raf = requestAnimationFrame(tick);
  };

  useScroll(update);

  useEffect(() => {
    const el = wrap.current!;
    const cv = canvas.current!;
    const s = state.current;
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const small = window.innerWidth < 900 || conn?.saveData || /2g/.test(conn?.effectiveType || "");

    const resize = () => {
      const r = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.max(2, Math.round(r.width * dpr));
      cv.height = Math.max(2, Math.round(r.height * dpr));
      s.drawn = -1;
      draw();
    };

    const load = async () => {
      const res = await fetch(`${src}/manifest.json`);
      const m: Manifest = await res.json();
      if (cancelled) return;
      const set = small ? "sm" : "lg";
      const { count, ext } = m.sets[set];
      s.count = count;
      s.frames = new Array(count).fill(null);
      resize();
      s.target = s.current = progress() * (count - 1);

      const url = (i: number) => `${src}/${set}/${String(i).padStart(4, "0")}.${ext}`;
      // Volgorde: eerst grof (elk 8e), dan steeds fijner
      const order: number[] = [];
      const seen = new Set<number>();
      const passes = reduce ? [count] : [8, 4, 2, 1];
      for (const step of passes) {
        for (let i = 0; i < count; i += step) {
          if (!seen.has(i)) {
            seen.add(i);
            order.push(i);
          }
        }
      }
      // Begin bij het frame dat nu nodig is
      const first = Math.round(s.target);
      order.sort((a, b) => (a === first ? -1 : b === first ? 1 : 0));

      let next = 0;
      const worker = async () => {
        while (!cancelled && next < order.length) {
          const i = order[next++];
          const img = new Image();
          img.decoding = "async";
          img.src = url(i);
          try {
            await img.decode();
          } catch {
            continue;
          }
          if (cancelled) return;
          s.frames[i] = img;
          if (Math.abs(i - Math.round(s.current)) <= 8 || s.drawn < 0) {
            s.drawn = -1;
            draw();
          }
        }
      };
      await Promise.all(Array.from({ length: 6 }, worker));
    };

    let started = false;
    const begin = () => {
      if (started) return;
      started = true;
      load().catch(() => {});
    };
    let io: IntersectionObserver | null = null;
    if (eager) begin();
    else {
      io = new IntersectionObserver(([e]) => e.isIntersecting && begin(), { rootMargin: "800px 0px" });
      io.observe(el);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => {
      cancelled = true;
      io?.disconnect();
      ro.disconnect();
      cancelAnimationFrame(s.raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div ref={wrap} className={`seq seq--${align}${className ? " " + className : ""}`} role="img" aria-label={alt}>
      <img className="seq__poster" src={`${src}/lg/0000.webp`} alt="" fetchPriority={eager ? "high" : "auto"} loading={eager ? "eager" : "lazy"} />
      <canvas ref={canvas} className="seq__canvas" />
    </div>
  );
}
