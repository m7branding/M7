"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Eén observer voor de hele site: elementen met [data-reveal] of
 * [data-stagger] krijgen .is-in zodra ze in beeld komen.
 * [data-play] elementen (mockups) pauzeren hun animaties buiten beeld.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const play = new IntersectionObserver(
      (entries) => {
        for (const e of entries) (e.target as HTMLElement).dataset.play = e.isIntersecting ? "1" : "0";
      },
      { rootMargin: "120px 0px" },
    );

    const scan = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in), [data-stagger]:not(.is-in)").forEach((el) => {
        if (el.hasAttribute("data-stagger")) {
          Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--si", String(i)));
        }
        reveal.observe(el);
      });
      root.querySelectorAll<HTMLElement>("[data-play]").forEach((el) => play.observe(el));
    };

    // Wacht tot de preloader / page-transition klaar is voor de eerste reveal
    const start = () => scan(document);
    const html = document.documentElement;
    if (html.dataset.loading === "1") {
      window.addEventListener("m7:ready", start, { once: true });
    } else {
      requestAnimationFrame(start);
    }

    const mo = new MutationObserver((muts) => {
      for (const m of muts) m.addedNodes.forEach((n) => n instanceof HTMLElement && scan(n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      reveal.disconnect();
      play.disconnect();
      mo.disconnect();
      window.removeEventListener("m7:ready", start);
    };
  }, [pathname]);

  return null;
}
