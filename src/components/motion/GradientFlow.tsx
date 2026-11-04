"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Laat één verloop door een heel gradient-segment van SplitText lopen.
 * Elk woord is een eigen span (voor de reveal), dus we geven elk woord de
 * totale breedte van het segment als achtergrondbreedte en schuiven die op
 * met de afstand tot het eerste woord. Server-side staat er al een schatting
 * (--gbs/--gbp in %); hier meten we het exact, ook na resize en fonts.
 */
export function GradientFlow() {
  const pathname = usePathname();

  useEffect(() => {
    const measure = () => {
      document.querySelectorAll<HTMLElement>(".split").forEach((split) => {
        const groups = new Map<string, HTMLElement[]>();
        split.querySelectorAll<HTMLElement>("[data-g]").forEach((el) => {
          const k = el.dataset.g!;
          groups.set(k, [...(groups.get(k) ?? []), el]);
        });
        groups.forEach((words) => {
          // de .w-maskers bewegen niet mee met de reveal-transform: die meten we
          const boxes = words.map((w) => (w.parentElement ?? w).getBoundingClientRect());
          const em = parseFloat(getComputedStyle(words[0]!).fontSize) || 16;
          let space = em * 0.27;
          const offsets: number[] = [];
          let x = 0;
          boxes.forEach((b, i) => {
            if (i > 0) {
              const prev = boxes[i - 1]!;
              // zelfde regel: echte spatiebreedte meten; nieuwe regel: laatst gemeten spatie
              if (Math.abs(b.top - prev.top) < em * 0.5) space = Math.max(0, b.left - prev.right);
              x += space;
            }
            offsets.push(x);
            x += b.width;
          });
          words.forEach((w, i) => {
            w.style.setProperty("--gbs", `${x.toFixed(1)}px`);
            w.style.setProperty("--gbp", `${(-offsets[i]!).toFixed(1)}px`);
          });
        });
      });
    };

    let raf = 0;
    const queue = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    queue();
    document.fonts?.ready.then(queue).catch(() => {});
    window.addEventListener("resize", queue);
    window.addEventListener("m7:ready", queue);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", queue);
      window.removeEventListener("m7:ready", queue);
    };
  }, [pathname]);

  return null;
}
