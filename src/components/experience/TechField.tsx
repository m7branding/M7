"use client";

import { useEffect, useRef } from "react";

// Subtiele "tech"-laag over het lichte werk-canvas: dunne lijnsegmenten die
// exact ÓVER de vierkante rasterlijnen lopen (horizontaal en verticaal),
// in- en uitfaden met een lichte kop-glow, en soms even oplichten op een
// kruispunt. Bewust heel rustig; respecteert prefers-reduced-motion.

const MINOR = 24; // fijne raster-stap (zelfde als .exp-canvas-bg)
const MAJOR = 120; // grove raster-stap

const PALETTE = [
  [16, 179, 162], // teal
  [16, 179, 162],
  [30, 90, 190], // blauw
  [14, 163, 194], // cyaan
  [109, 77, 255], // violet (zeldzaam, laatste)
];

type Trail = {
  axis: 0 | 1; // 0 = horizontaal, 1 = verticaal
  track: number; // vaste raster-coördinaat (y bij 0, x bij 1)
  pos: number; // kop-positie langs de as
  len: number;
  speed: number; // px/s
  dir: 1 | -1;
  span: number; // lengte van de as
  rgb: number[];
  peak: number; // max alpha
  major: boolean;
  delay: number; // ms wachten voor (her)start
};

export function TechField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let trails: Trail[] = [];

    function make(seeded: boolean): Trail {
      const axis: 0 | 1 = Math.random() < 0.55 ? 0 : 1;
      const span = axis === 0 ? w : h;
      const cross = axis === 0 ? h : w;
      const major = Math.random() < 0.34;
      const step = major ? MAJOR : MINOR;
      // Precies op een rasterlijn (die staat op veelvouden van step, 1px breed).
      const track = Math.round((Math.random() * cross) / step) * step + 0.5;
      const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1;
      const len = (major ? 180 : 110) + Math.random() * (major ? 320 : 220);
      const speed = (major ? 70 : 45) + Math.random() * 110;
      const rgb = PALETTE[Math.floor(Math.random() * (PALETTE.length - (Math.random() < 0.12 ? 0 : 1)))];
      return {
        axis,
        track,
        pos: dir === 1 ? -len : span + len,
        len,
        speed,
        dir,
        span,
        rgb,
        peak: (major ? 0.36 : 0.24) * (0.7 + Math.random() * 0.6),
        major,
        // bij het opbouwen willekeurig verspreid, daarna korte pauzes
        delay: seeded ? Math.random() * 5200 : 400 + Math.random() * 5200,
      };
    }

    function build() {
      const rect = canvas!.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(6, Math.min(18, Math.round((w * h) / 82000)));
      trails = Array.from({ length: count }, () => make(true));
      // een deel al onderweg zetten zodat het scherm niet leeg begint
      for (const t of trails) {
        if (Math.random() < 0.6) {
          t.delay = 0;
          t.pos = t.dir === 1 ? Math.random() * (t.span + t.len) - t.len : t.span + t.len - Math.random() * (t.span + t.len);
        }
      }
    }

    /** 0 aan de randen, 1 in het midden — zachte in/uit-fade. */
    function envelope(p: number) {
      if (p <= 0 || p >= 1) return 0;
      const inn = Math.min(1, p / 0.18);
      const out = Math.min(1, (1 - p) / 0.28);
      const e = Math.min(inn, out);
      return e * e * (3 - 2 * e); // smoothstep
    }

    function paint(t: Trail) {
      const total = t.span + t.len * 2;
      const travelled = t.dir === 1 ? t.pos + t.len : t.span + t.len - t.pos;
      const a = t.peak * envelope(travelled / total);
      if (a <= 0.004) return;

      const tail = t.pos - t.dir * t.len;
      const [r, g, b] = t.rgb;
      const x0 = t.axis === 0 ? tail : t.track;
      const y0 = t.axis === 0 ? t.track : tail;
      const x1 = t.axis === 0 ? t.pos : t.track;
      const y1 = t.axis === 0 ? t.track : t.pos;

      const grad = ctx!.createLinearGradient(x0, y0, x1, y1);
      grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
      grad.addColorStop(0.55, `rgba(${r},${g},${b},${a * 0.5})`);
      grad.addColorStop(0.92, `rgba(${r},${g},${b},${a})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

      ctx!.strokeStyle = grad;
      ctx!.lineWidth = t.major ? 1.6 : 1.1;
      ctx!.lineCap = "round";
      ctx!.beginPath();
      ctx!.moveTo(x0, y0);
      ctx!.lineTo(x1, y1);
      ctx!.stroke();

      // kop-glow op het dichtstbijzijnde kruispunt-gevoel
      const hx = t.axis === 0 ? t.pos - t.dir * 4 : t.track;
      const hy = t.axis === 0 ? t.track : t.pos - t.dir * 4;
      ctx!.beginPath();
      ctx!.arc(hx, hy, t.major ? 2.1 : 1.5, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(${r},${g},${b},${Math.min(0.55, a * 2.2)})`;
      ctx!.fill();
    }

    let last = performance.now();

    function frame(now: number) {
      const dt = Math.min(64, now - last);
      last = now;
      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < trails.length; i++) {
        const t = trails[i];
        if (t.delay > 0) {
          t.delay -= dt;
          continue;
        }
        t.pos += t.dir * t.speed * (dt / 1000);
        const done = t.dir === 1 ? t.pos > t.span + t.len : t.pos < -t.len;
        if (done) {
          trails[i] = make(false);
          continue;
        }
        paint(t);
      }

      raf = requestAnimationFrame(frame);
    }

    build();
    if (reduce) {
      // statische, nauwelijks zichtbare accenten op het raster
      ctx.clearRect(0, 0, w, h);
      for (const t of trails) {
        t.delay = 0;
        t.pos = t.dir === 1 ? (t.span + t.len) * 0.55 : (t.span + t.len) * 0.45;
        paint(t);
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", build);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
    };
  }, []);

  return <canvas ref={ref} className="exp-techfield" aria-hidden />;
}
