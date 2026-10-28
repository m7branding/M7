"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

/** Een keuze in de werkproces-kiezer: dienst + (optioneel) de toepassing die je zocht. */
interface Pick {
  service: string;
  app?: string;
  /** Telt op bij elke keuze, zodat dezelfde toepassing opnieuw kiezen ook weer werkt. */
  n: number;
}

interface Ctx {
  active: string;
  pick: Pick;
  select: (service: string, opts?: { app?: string; scroll?: boolean; focus?: boolean }) => void;
}

const ProcessCtx = createContext<Ctx | null>(null);

export function useProcess(): Ctx {
  const c = useContext(ProcessCtx);
  if (!c) throw new Error("useProcess buiten <ProcessProvider>");
  return c;
}

type LenisLike = { scrollTo: (t: Element | number, o?: object) => void };

/** Rustig naar de procesweergave scrollen (Lenis of native; scroll-margin regelt de offset). */
function scrollToView(focusId?: string) {
  const el = document.getElementById("proces-view");
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) lenis.scrollTo(el, { duration: 1.3 });
  else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  if (focusId) {
    // toetsenbordgebruikers landen op de kop van het gekozen proces
    window.setTimeout(() => document.getElementById(focusId)?.focus({ preventScroll: true }), reduce ? 0 : 700);
  }
}

/**
 * Gedeelde staat van de werkprocespagina: welke dienst actief is.
 * De URL-hash (#websites-webshops) is de bron van waarheid voor deeplinks.
 */
export function ProcessProvider({
  slugs,
  colors,
  children,
}: {
  slugs: string[];
  colors: Record<string, string>;
  children: React.ReactNode;
}) {
  const [pick, setPick] = useState<Pick>({ service: slugs[0], n: 0 });
  const n = useRef(0);
  const valid = useCallback((s: string) => slugs.includes(s), [slugs]);

  const select = useCallback<Ctx["select"]>(
    (service, opts = {}) => {
      if (!valid(service)) return;
      n.current += 1;
      setPick({ service, app: opts.app, n: n.current });
      if (location.hash !== `#${service}`) history.replaceState(null, "", `#${service}`);
      if (opts.scroll !== false) requestAnimationFrame(() => scrollToView(opts.focus ? `${service}-title` : undefined));
    },
    [valid],
  );

  // Deeplink bij laden + handmatig gewijzigde hash
  useEffect(() => {
    const fromHash = (scroll: boolean) => {
      const h = decodeURIComponent(location.hash.slice(1));
      if (!valid(h)) return;
      n.current += 1;
      setPick({ service: h, n: n.current });
      // na de page-transition (die eerst naar boven springt) rustig naar het proces
      if (scroll) window.setTimeout(() => scrollToView(), 450);
    };
    fromHash(true);
    const onHash = () => fromHash(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [valid]);

  const value = useMemo(() => ({ active: pick.service, pick, select }), [pick, select]);

  return (
    <ProcessCtx.Provider value={value}>
      <article className="pw-root" style={{ ["--pw-accent" as string]: colors[pick.service] }}>
        {children}
      </article>
    </ProcessCtx.Provider>
  );
}

/** Eén dienst-proces: altijd in de HTML (SEO), alleen de actieve is zichtbaar. */
export function ProcessPanel({ slug, color, children }: { slug: string; color: string; children: React.ReactNode }) {
  const { active } = useProcess();
  const on = active === slug;
  return (
    <section
      id={slug}
      className={`pw-panel${on ? " is-on" : ""}`}
      hidden={!on}
      aria-labelledby={`${slug}-title`}
      style={{ ["--accent" as string]: color }}
    >
      {children}
    </section>
  );
}

/** Link naar het proces van een dienst (anker), opent het direct zonder herladen. */
export function ProcessLink({
  slug,
  className,
  children,
  style,
}: {
  slug: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const { active, select } = useProcess();
  return (
    <a
      href={`#${slug}`}
      className={`${className ?? ""}${active === slug ? " is-on" : ""}`}
      aria-current={active === slug ? "true" : undefined}
      style={style}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        // niet doorgeven aan Lenis' anker-afhandeling: wij scrollen zelf
        e.stopPropagation();
        select(slug, { focus: e.detail === 0 });
      }}
    >
      {children}
    </a>
  );
}
