"use client";

import { useEffect, useRef } from "react";

// Subtiele, licht geanimeerde "tech"-laag voor het lichte werk-canvas:
// zwevende bolletjes die met dunne lijnen verbonden worden en langzaam
// in- en uitfaden. Bewust heel subtiel; respecteert prefers-reduced-motion.

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number; // 0..1 fase voor fade
  ls: number; // fade-snelheid
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
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];

    function build() {
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(60, Math.floor((w * h) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: 1 + Math.random() * 1.6,
        life: Math.random(),
        ls: 0.0015 + Math.random() * 0.0035,
      }));
    }

    const LINK = 150; // afstand waarbinnen lijnen getekend worden

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.life += n.ls;
        if (n.life > 1) n.life -= 1;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      // verbindingslijnen
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const fade = Math.sin(a.life * Math.PI) * Math.sin(b.life * Math.PI);
            const alpha = (1 - d / LINK) * 0.16 * Math.max(0, fade);
            if (alpha <= 0.002) continue;
            ctx!.strokeStyle = `rgba(30, 70, 130, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // bolletjes
      for (const n of nodes) {
        const fade = Math.sin(n.life * Math.PI);
        const alpha = 0.06 + fade * 0.32;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(16, 179, 162, ${alpha * 0.9})`;
        ctx!.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    }

    build();
    draw();
    window.addEventListener("resize", build);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
    };
  }, []);

  return <canvas ref={ref} className="exp-techfield" aria-hidden />;
}
