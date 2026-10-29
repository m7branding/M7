"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Koppen met één heel lang woord ("Communicatiestrategie", "toegankelijkheidsverklaring")
 * worden iets kleiner gezet tot dat woord past, zodat het niet hoeft af te breken.
 * Pas als het ook op 64% niet past, breekt CSS het netjes af met een koppelteken
 * (zie .split .w in base.css). Korte koppen blijven ongemoeid.
 */
const MIN_SCALE = 0.64;

export function FitHeadings() {
  const pathname = usePathname();

  useEffect(() => {
    const fit = () => {
      document.querySelectorAll<HTMLElement>("h1.split, h2.split").forEach((h) => {
        h.style.fontSize = "";
        const cs = getComputedStyle(h);
        const fs = parseFloat(cs.fontSize) || 16;
        const lh = cs.lineHeight === "normal" ? fs * 1.2 : parseFloat(cs.lineHeight) || fs * 1.2;
        const avail = h.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        if (avail <= 0) return;
        let widest = 0;
        h.querySelectorAll<HTMLElement>(".w > span").forEach((s) => {
          // afgebroken woord = hoger dan één regel; de natuurlijke breedte is de som van de stukken
          if (s.getBoundingClientRect().height < lh * 1.4) return;
          const r = document.createRange();
          r.selectNodeContents(s);
          const w = [...r.getClientRects()].reduce((n, b) => n + b.width, 0);
          widest = Math.max(widest, w);
        });
        if (!widest) return;
        const scale = Math.max(MIN_SCALE, Math.floor((avail / widest) * 100) / 100 - 0.01);
        h.style.fontSize = `${(fs * scale).toFixed(2)}px`;
      });
    };

    let raf = 0;
    const queue = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(fit);
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
