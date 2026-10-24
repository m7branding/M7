"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { M7Emblem } from "@/components/brand/M7Logo";

type Phase = "idle" | "cover" | "covered" | "reveal";

const COVER_MS = 720;
const REVEAL_MS = 900;

export const ready = () => {
  document.documentElement.dataset.loading = "0";
  window.dispatchEvent(new Event("m7:ready"));
};

/**
 * Vloeiende page transitions: een gelaagd paneel veegt omhoog over de
 * pagina, de nieuwe route wordt (voorgeladen) gerenderd en het paneel
 * veegt verder weg. Werkt automatisch voor elke interne <a>.
 */
export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pending = useRef<string | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !a.href) return;
      if ((a.target && a.target !== "_self") || a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;
      // Menu-items met een submenu klappen op mobiel open i.p.v. te navigeren
      if (a.dataset.toggleSub !== undefined && window.matchMedia("(max-width: 900px)").matches) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) {
        if (url.hash) return;
        e.preventDefault();
        const l = (window as unknown as { __lenis?: { scrollTo: (n: number) => void } }).__lenis;
        l ? l.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      e.preventDefault();
      if (busy.current) return;
      const href = url.pathname + url.search + url.hash;
      const hardNav = url.pathname.startsWith("/letsgo") || url.pathname.startsWith("/api");
      window.dispatchEvent(new Event("m7:navigate"));

      if (reduce) {
        hardNav ? (location.href = href) : router.push(href);
        return;
      }
      busy.current = true;
      pending.current = url.pathname;
      document.documentElement.dataset.loading = "1";
      setPhase("cover");
      window.setTimeout(() => {
        setPhase("covered");
        if (hardNav) {
          location.href = href;
          return;
        }
        router.push(href, { scroll: false });
      }, COVER_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // Nieuwe route gerenderd → naar boven en wegvegen
  useEffect(() => {
    if (!pending.current) return;
    pending.current = null;
    const l = (window as unknown as { __lenis?: { scrollTo: (n: number, o?: object) => void } }).__lenis;
    l ? l.scrollTo(0, { immediate: true, force: true }) : window.scrollTo(0, 0);
    const t1 = window.setTimeout(() => {
      setPhase("reveal");
      ready();
    }, 90);
    const t2 = window.setTimeout(() => {
      setPhase("idle");
      busy.current = false;
    }, 90 + REVEAL_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <div className="pt" data-phase={phase} aria-hidden="true">
      <div className="pt__layer pt__layer--accent" />
      <div className="pt__layer pt__layer--main">
        <div className="pt__mark">
          <M7Emblem className="pt__logo" />
          <span className="pt__loader" />
        </div>
      </div>
    </div>
  );
}
