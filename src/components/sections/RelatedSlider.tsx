"use client";

import { Children, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import st from "./RelatedServices.module.css";

/** Per slide: mag de (zware) showcase erin? */
const NearCtx = createContext(true);

/** Monteert de showcase pas als de kaart in de buurt van het beeld komt; daarna blijft hij staan. */
export function LazyStage({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) {
  const near = useContext(NearCtx);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (near) setOn(true);
  }, [near]);
  // eigen wrapper: zo ziet de RevealObserver de nieuwe .show[data-play] en pauzeert hij de loops buiten beeld
  return on ? <div className={st.lazy}>{children}</div> : <>{fallback}</>;
}

/**
 * Horizontale slider (native scroll + snap) met slepen (muis), vorige/volgende,
 * voortgangsbalk en pijltjestoetsen. Volledig breed: de eerste kaart lijnt uit
 * met de container, rechts loopt de rij door tot de rand van het scherm.
 */
export function RelatedSlider({
  children,
  head,
  label,
  labels,
}: {
  children: React.ReactNode;
  head: React.ReactNode;
  label: string;
  labels: { prev: string; next: string; of: string };
}) {
  const slides = Children.toArray(children);
  const n = slides.length;
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLSpanElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [near, setNear] = useState<boolean[]>(() => Array(n).fill(false));
  const sectionNear = useRef(false);
  const inX = useRef<boolean[]>(Array(n).fill(false));

  /* ---------- lazy mount: sectie in de buurt (verticaal) én kaart in de buurt (horizontaal) ---------- */
  const sync = useCallback(() => {
    if (!sectionNear.current) return;
    setNear((prev) => {
      if (prev.every((p, i) => p || !inX.current[i])) return prev;
      return prev.map((p, i) => p || inX.current[i]);
    });
  }, []);

  useEffect(() => {
    const el = scroller.current;
    const box = root.current;
    if (!el || !box) return;
    const v = new IntersectionObserver(
      ([e]) => {
        sectionNear.current = e.isIntersecting;
        sync();
      },
      { rootMargin: "60% 0px" },
    );
    v.observe(box);
    const h = new IntersectionObserver(
      (entries) => {
        for (const e of entries) inX.current[Number((e.target as HTMLElement).dataset.i)] = e.isIntersecting;
        sync();
      },
      { root: el, rootMargin: "0px 45% 0px 45%" },
    );
    el.querySelectorAll<HTMLElement>("[data-i]").forEach((s) => h.observe(s));
    return () => {
      v.disconnect();
      h.disconnect();
    };
  }, [sync]);

  /* ---------- voortgang + knoppen ---------- */
  const step = useCallback(() => {
    const el = scroller.current;
    const first = el?.querySelector<HTMLElement>("[data-i]");
    if (!el || !first) return 1;
    const gap = parseFloat(getComputedStyle(el.firstElementChild as HTMLElement).columnGap) || 0;
    return first.offsetWidth + gap;
  }, []);

  const measure = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    const vis = el.scrollWidth ? Math.min(1, el.clientWidth / el.scrollWidth) : 1;
    if (thumb.current) {
      thumb.current.style.setProperty("--w", vis.toFixed(4));
      thumb.current.style.setProperty("--p", p.toFixed(4));
    }
    setEdge({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 });
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let raf = 0;
    const on = () => {
      if (!raf) raf = requestAnimationFrame(() => ((raf = 0), measure()));
    };
    measure();
    el.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [measure]);

  const go = useCallback(
    (dir: number) => {
      const el = scroller.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollBy({ left: dir * step(), behavior: reduce ? "auto" : "smooth" });
    },
    [step],
  );

  const onKey = (e: React.KeyboardEvent) => {
    if (e.target !== e.currentTarget) return;
    const el = scroller.current;
    if (!el) return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(e.key === "ArrowRight" ? 1 : -1);
    } else if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      el.scrollTo({ left: e.key === "Home" ? 0 : el.scrollWidth, behavior: "smooth" });
    }
  };

  /* ---------- slepen met de muis (touch en trackpad scrollen native) ---------- */
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let drag: { x: number; left: number; moved: boolean } | null = null;
    const block = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 5) {
        drag.moved = true;
        el.classList.add(st.dragging);
      }
      if (drag.moved) el.scrollLeft = drag.left - dx;
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      if (!drag) return;
      const moved = drag.moved;
      drag = null;
      if (!moved) return;
      // de klik na het slepen mag geen link openen (vóór de page-transition, die op document luistert)
      window.addEventListener("click", block, { capture: true, once: true });
      window.setTimeout(() => window.removeEventListener("click", block, { capture: true }), 60);
      // netjes uitlijnen op de dichtstbijzijnde kaart
      const s = step();
      const left = el.scrollLeft;
      el.classList.remove(st.dragging);
      el.scrollLeft = left;
      el.scrollTo({ left: Math.round(left / s) * s, behavior: "smooth" });
    };
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      drag = { x: e.clientX, left: el.scrollLeft, moved: false };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
    };
    const noNativeDrag = (e: DragEvent) => e.preventDefault();
    el.addEventListener("pointerdown", down);
    el.addEventListener("dragstart", noNativeDrag);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("dragstart", noNativeDrag);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [step]);

  return (
    <div ref={root} className={st.root}>
      <div className="container">
        <div className={st.head}>
          {head}
          <div className={st.controls} data-reveal="fade">
            <span className={st.progress} aria-hidden="true">
              <span ref={thumb} className={st.thumb} />
            </span>
            <button type="button" className={st.btn} onClick={() => go(-1)} disabled={edge.start} aria-label={labels.prev}>
              <Icon name="arrowLeft" size={18} stroke={2} />
            </button>
            <button type="button" className={st.btn} onClick={() => go(1)} disabled={edge.end} aria-label={labels.next}>
              <Icon name="arrowRight" size={18} stroke={2} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className={st.scroller}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={onKey}
        data-lenis-prevent-horizontal=""
      >
        <ul className={st.track} data-stagger="">
          {slides.map((child, i) => (
            <li key={i} className={st.slide} data-i={i} aria-roledescription="slide" aria-label={`${i + 1} ${labels.of} ${n}`}>
              <NearCtx.Provider value={near[i]}>{child}</NearCtx.Provider>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
