"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type ScrollCb = (scroll: number, velocity: number) => void;

interface Ctx {
  lenis: Lenis | null;
  subscribe: (cb: ScrollCb) => () => void;
}

const ScrollCtx = createContext<Ctx>({ lenis: null, subscribe: () => () => {} });

export const useLenis = () => useContext(ScrollCtx).lenis;

/** Abonneer op scroll (Lenis of native). */
export function useScroll(cb: ScrollCb) {
  const { subscribe } = useContext(ScrollCtx);
  const ref = useRef(cb);
  ref.current = cb;
  useEffect(() => subscribe((s, v) => ref.current(s, v)), [subscribe]);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const subs = useRef(new Set<ScrollCb>());

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const emit = (s: number, v: number) => subs.current.forEach((cb) => cb(s, v));

    if (reduce) {
      const onScroll = () => emit(window.scrollY, 0);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const l = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      smoothWheel: true,
      anchors: { offset: -100 },
    });
    l.on("scroll", (e: Lenis) => emit(e.scroll, e.velocity));
    (window as unknown as { __lenis?: Lenis }).__lenis = l;
    setLenis(l);

    let raf = 0;
    const loop = (t: number) => {
      l.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      l.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  const subscribe = useRef((cb: ScrollCb) => {
    subs.current.add(cb);
    return () => {
      subs.current.delete(cb);
    };
  }).current;

  return <ScrollCtx.Provider value={{ lenis, subscribe }}>{children}</ScrollCtx.Provider>;
}
