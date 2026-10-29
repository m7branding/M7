"use client";

import { useEffect, useRef } from "react";
import type { Case } from "@/content/types";
import "./devices.css";
import "./DeviceHero.css";

/* ============================================================
   Bewegende device-hero voor de casepagina: een MacBook Pro met een
   iPhone ervoor (zelfde look als de statische mockups, maar live), waarin
   de lange screenshots van de site rustig doorscrollen.
   - Beweegt alleen in beeld (IntersectionObserver), anders staat alles stil.
   - prefers-reduced-motion: stilstaand beeld (bovenkant van de site).
   - De statusbalk van de iPhone en de band naast de notch nemen de kleur
     van de bovenkant van de site over (gemeten na het laden).
   ============================================================ */

type Screens = NonNullable<Case["screens"]>;

/** Scrollsnelheid in schermbreedtes per seconde (desktop iets rustiger dan mobiel). */
const SPEED = { mac: 0.05, phone: 0.085 };
/** Verhouding (hoogte / breedte) van het scherm waarin de screenshot scrolt. */
const SCREEN_RATIO = { mac: 58.18 / 93.09, phone: (197.07 - 12.49) / 90.92 };

const ICONS = (
  <svg className="dx-phone__icons" viewBox="0 0 74 12" aria-hidden="true">
    <rect x="0" y="7.6" width="3.1" height="3.9" rx="0.9" />
    <rect x="4.7" y="5.3" width="3.1" height="6.2" rx="0.9" />
    <rect x="9.4" y="2.9" width="3.1" height="8.6" rx="0.9" />
    <rect x="14.1" y="0.5" width="3.1" height="11" rx="0.9" />
    <g transform="translate(30.6 11.2)" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round">
      <path d="M-7.3 -7.1A10.2 10.2 0 0 1 7.3 -7.1" />
      <path d="M-4.4 -4.2A6.1 6.1 0 0 1 4.4 -4.2" />
    </g>
    <path d="M30.6 11.4l-2.1-2.4a2.9 2.9 0 0 1 4.2 0z" />
    <rect x="46.6" y="0.6" width="23.4" height="10.8" rx="3.3" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1" />
    <rect x="48.6" y="2.6" width="19.4" height="6.8" rx="1.7" />
    <path d="M71.4 4.1v3.8a2.1 2.1 0 0 0 0-3.8z" fillOpacity=".45" />
  </svg>
);

function Long({ src, kind, priority }: { src: string; kind: "mac" | "phone"; priority?: boolean }) {
  return <img className="dh-long" data-kind={kind} src={src} alt="" decoding="async" fetchPriority={priority ? "high" : "low"} draggable={false} />;
}

function Mac({ src }: { src: string }) {
  return (
    <div className="dx dx-mac dh-mac">
      <div className="dx-mac__lid">
        <div className="dx-mac__screen">
          <div className="dx-scr">
            <Long src={src} kind="mac" priority />
          </div>
          <i className="dx-mac__notch">
            <i className="dx-mac__cam" />
          </i>
          <i className="dx-sheen" />
        </div>
      </div>
      <div className="dx-mac__hinge" />
      <div className="dx-mac__base">
        <i className="dx-mac__deck" />
        <i className="dx-mac__front" />
        <i className="dx-mac__scoop" />
      </div>
      <i className="dx-floor" />
    </div>
  );
}

function Phone({ src }: { src: string }) {
  return (
    <div className="dx dx-phone dh-phone">
      <i className="dx-phone__btn is-l is-action" />
      <i className="dx-phone__btn is-l is-up" />
      <i className="dx-phone__btn is-l is-down" />
      <i className="dx-phone__btn is-r is-power" />
      <div className="dx-phone__body">
        <div className="dx-phone__screen">
          <div className="dx-phone__status">
            <span className="dx-phone__time">9:41</span>
            {ICONS}
          </div>
          <div className="dx-scr">
            <Long src={src} kind="phone" />
          </div>
          <i className="dx-phone__island" />
          <i className="dx-phone__home" />
          <i className="dx-sheen" />
        </div>
      </div>
      <i className="dx-floor" />
    </div>
  );
}

/** Gemiddelde kleur van de bovenste pixelrijen (statusbalk / notch-band) en van de onderkant (home-balk). */
function sample(img: HTMLImageElement) {
  try {
    const w = 24;
    const h = Math.max(2, Math.round((img.naturalHeight / img.naturalWidth) * w));
    const c = document.createElement("canvas");
    c.width = w;
    c.height = Math.min(h, 64);
    const g = c.getContext("2d", { willReadFrequently: true });
    if (!g) return null;
    g.drawImage(img, 0, 0, img.naturalWidth, Math.round((img.naturalWidth / w) * c.height), 0, 0, w, c.height);
    const avg = (y0: number, y1: number) => {
      const d = g.getImageData(0, y0, w, y1 - y0).data;
      const s = [0, 0, 0];
      for (let i = 0; i < d.length; i += 4) for (let k = 0; k < 3; k++) s[k] += d[i + k];
      return s.map((v) => Math.round(v / (d.length / 4)));
    };
    const top = avg(0, 1);
    const lum = (rgb: number[]) => (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
    return { top, light: lum(top) > 0.6, bottom: lum(avg(c.height - 4, c.height)) };
  } catch {
    return null;
  }
}

export function DeviceHero({ screens, color, label }: { screens: Screens; color?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // scrollduur per screenshot: afstand / vaste snelheid, zodat lange en korte pagina's even rustig gaan
    const setup = (img: HTMLImageElement) => {
      const kind = img.dataset.kind as "mac" | "phone";
      const travel = img.naturalHeight / img.naturalWidth - SCREEN_RATIO[kind];
      if (travel > 0.08) {
        img.style.setProperty("--dh-dur", `${Math.min(110, Math.max(16, travel / SPEED[kind])).toFixed(1)}s`);
        img.classList.add("is-long");
      }
      // iPhone: statusbalk in de kleur van de bovenkant van de site (zoals Safari doet).
      // MacBook: de band naast de notch blijft zwart (schermvullend), want de pagina scrolt eronder door.
      const s = kind === "phone" ? sample(img) : null;
      const scr = img.closest<HTMLElement>(".dx-phone__screen");
      if (s && scr) {
        scr.style.setProperty("--dx-top", `rgb(${s.top.join(",")})`);
        scr.style.setProperty("--dx-top-fg", s.light ? "#000" : "#fff");
        scr.style.setProperty("--dx-home", s.bottom > 0.55 ? "rgba(0,0,0,.78)" : "rgba(255,255,255,.86)");
      }
    };
    const imgs = [...el.querySelectorAll<HTMLImageElement>("img.dh-long")];
    const off: (() => void)[] = [];
    for (const img of imgs) {
      if (img.complete && img.naturalWidth) setup(img);
      else {
        const f = () => setup(img);
        img.addEventListener("load", f, { once: true });
        off.push(() => img.removeEventListener("load", f));
      }
    }
    // alleen bewegen zolang de hero in beeld is
    const io = new IntersectionObserver(([e]) => el.toggleAttribute("data-live", e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => {
      io.disconnect();
      off.forEach((f) => f());
    };
  }, []);

  const both = !!(screens.desktop && screens.mobile);
  return (
    <div
      ref={ref}
      className={`dh${both ? "" : screens.desktop ? " dh--mac" : " dh--phone"}`}
      style={color ? ({ "--cc": color } as React.CSSProperties) : undefined}
      role="img"
      aria-label={label}
    >
      <div className="dh-glow" aria-hidden="true" />
      <div className="dh-stage" aria-hidden="true">
        {screens.desktop ? <Mac src={screens.desktop} /> : null}
        {screens.mobile ? <Phone src={screens.mobile} /> : null}
      </div>
    </div>
  );
}
