"""Round 22: ten Instagram stories for M7 itself (the agency), not client cases.

Minimal and clean: the dark M7 stage (#030304), lots of space, Montserrat, white type, the teal->green gradient on one
word or one thin line. Words rise out of a mask with a slight blur-to-sharp, visuals arrive with a calm focus pull
(blur easing off), no spring and no overshoot. Only real M7 material: office and team photos, the office clip, the
approved round-21 reel renders (Buitenstate, Steddion), the real Bernheze Makelaars brandbook and the AI answer that
the website's own SEO showcase uses. All copy comes from the website's content (see COPY_SOURCES).

Every story: 1080x1920, 60 fps, 9.95 s, a soft synthesised music bed (audio.song "calm"), and a compact (~1.95 s) M7 end frame
(the emblem drawing itself in the gradient ring, m7branding.com). Plus a PNG cover still.

The shared studio engine is used as is. The few things it lacks (word reveal with blur, the services list, the
process steps, the dot map, the CTA button) are layers defined in this module (X_JS) on top of studio/engine.js; they
are mounted through the engine's own html layer, so the paint order of all layers stays the spec order. This module
writes its own small page + renderer into its work folder; no shared file is touched.

  python stories22.py all            render all ten (mp4 + png) into the delivery folder
  python stories22.py 3 7            render stories 3 and 7
  python stories22.py stills 3 7     only the stills (layout check) into the work folder
  python stories22.py at 4 1.5,5.9   stills of one story at given times
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import audio  # noqa: E402

S = Path("/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad")
WORK = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r22w")
DELIVER = S / "r22" / "deliver" / "stories-v3"
HERE = Path(__file__).resolve().parent
STUDIO = HERE / "studio"
REPO = Path("/home/user/M7")
MEDIA = REPO / "public" / "media"
SHOTS21 = S / "r21" / "shots"
BOOK = S / "r20" / "src" / "book-bernheze-makelaars-rebranding" / "still.jpg"
W, H, FPS = 1080, 1920, 60
KX = 80                     # left margin
KY, TY = 300, 344           # kicker / title top
TS = 88                     # title size


def furl(p):
    return "file://" + str(p)


# ---------------------------------------------------------------- the extension layers (JS) and the page
X_JS = r"""
(() => {
  const base = window.M7;
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const E = {
    linear: (t) => t,
    outCubic: (t) => 1 - Math.pow(1 - t, 3),
    outQuart: (t) => 1 - Math.pow(1 - t, 4),
    outQuint: (t) => 1 - Math.pow(1 - t, 5),
    inCubic: (t) => t * t * t,
    inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  };
  const P = (t, t0, d, e = "outQuart") => E[e](clamp((t - t0) / Math.max(1e-6, d)));
  const el = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const M7P = [
    "M58.168 49.8125L75.7011 11.1482H62.3291L58.2315 0H88.6286L88.5968 10.7616L70.3649 49.8125H58.168Z",
    "M75.7 11.1482H62.328L58.2305 0H64.2673L75.7 11.1482Z",
    "M88.5972 10.7615L70.3653 49.8126L75.7014 11.1482L69.8398 0H88.629L88.5972 10.7615Z",
    "M70.3649 49.8109H58.168L75.7011 11.1465L70.3649 49.8109Z",
    "M0 0.119141H16.4012L27.729 32.6887H27.8682L39.2655 0.119141H55.5972V50.0311H44.7557V11.7512H44.6168L31.6905 50.0311H23.4202L10.9805 11.7512H10.8415V50.0311H0V0.119141Z",
  ];
  let uid = 0;
  // the M7 emblem in the brand gradient, as in the site's "Welcome to the world of M7." (M7DrawTitle)
  const emblem = () => { const id = "xg" + uid++; return `<svg class="m7i" viewBox="0 0 89 51" aria-hidden="true"><defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="89" y2="7.8"><stop offset="0" stop-color="#3affff"/><stop offset="0.45" stop-color="#22ffb4"/><stop offset="1" stop-color="#18ff59"/></linearGradient></defs><g fill="url(#${id})">${M7P.map((d) => `<path d="${d}"/>`).join("")}</g></svg>`; };
  // tokens: *gradient words*, [M7] (emblem, optional gradient dot), plain words
  const tokens = (s) => {
    const out = [], re = /(\*[^*]+\*[.,?!]?|\[M7\]\.?|\S+)/g; let m;
    while ((m = re.exec(s))) {
      const w = m[1];
      if (w.startsWith("[M7]")) out.push({ html: emblem() + (w.endsWith(".") ? '<span class="g-pixels m7dot">.</span>' : "") });
      else if (w.startsWith("*")) { const k = w.lastIndexOf("*"); const inner = w.slice(1, k), tail = w.slice(k + 1); const ps = inner.split(" "); ps.forEach((p, i) => out.push({ html: esc(p) + (i === ps.length - 1 ? esc(tail) : ""), g: true })); }
      else out.push({ html: esc(w) });
    }
    return out;
  };
  const X = {};

  /* Lines of text; every word rises out of its mask, from soft blur to sharp. Leaves with a soft blur-out. */
  X.xtext = (o, S, host) => {
    const box = el("div", "x-abs", host);
    Object.assign(box.style, { left: (o.x ?? 80) + "px", top: (o.y ?? 0) + "px", width: (o.w ?? S.W - 160) + "px", textAlign: o.align || "left" });
    const words = [];
    let n = 0;
    (o.lines || []).forEach((ln, li) => {
      const row = el("div", "x-ln", box);
      Object.assign(row.style, { fontSize: (ln.size || o.size || 88) + "px", fontWeight: ln.weight || o.weight || 800, color: ln.color || o.color || "#fff",
        letterSpacing: (ln.ls ?? o.ls ?? -0.035) + "em", lineHeight: ln.lh || o.lh || 1.06, marginTop: (ln.mt || 0) + "px" });
      const tk = tokens(ln.t);
      tk.forEach((t, i) => {
        const w = el("span", "x-w", row);
        const wi = el("span", "x-wi" + (t.g ? " g-pixels" : ""), w, t.html);
        words.push({ wi, at: (ln.at != null ? ln.at + i * (o.st ?? 0.07) : n * (o.st ?? 0.07)) });
        n++;
        if (i < tk.length - 1) row.appendChild(document.createTextNode(" "));
      });
    });
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        const d = o.d ?? 1.15, blur = o.blur ?? 7;
        for (const w of words) {
          const p = P(t, o.t0 + w.at, d, o.ease || "outQuart");
          w.wi.style.transform = `translate3d(0, ${((1 - p) * 104).toFixed(2)}%, 0)`;
          w.wi.style.filter = p < 0.995 ? `blur(${((1 - p) * blur).toFixed(2)}px)` : "none";
          w.wi.style.opacity = (0.35 + 0.65 * p).toFixed(3);
        }
        const q = o.t1 != null ? P(t, o.t1 - (o.outD ?? 0.6), o.outD ?? 0.6, "inOutSine") : 0;
        box.style.opacity = (1 - q).toFixed(3);
        box.style.filter = q > 0.005 ? `blur(${(q * 9).toFixed(2)}px)` : "none";
        box.style.transform = `translate3d(0, ${(-q * 14).toFixed(2)}px, 0)`;
      },
    };
  };

  /* Kicker: one thin gradient line that draws, then the label (uppercase, spaced). */
  X.xkicker = (o, S, host) => {
    const k = el("div", "x-abs x-kick", host, `${o.line === false ? "" : '<span class="x-kl"></span>'}<span class="x-kt">${esc(o.text)}</span>`);
    Object.assign(k.style, { left: (o.x ?? 80) + "px", top: (o.y ?? 300) + "px" });
    if (o.center) { k.style.left = "0px"; k.style.width = S.W + "px"; k.style.justifyContent = "center"; }
    const line = k.querySelector(".x-kl"), txt = k.querySelector(".x-kt");
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        k.style.display = vis ? "flex" : "none";
        if (!vis) return;
        const a = P(t, o.t0, 1.1, "inOutCubic"), b = P(t, o.t0 + 0.25, 1.0, "outQuart");
        if (line) line.style.transform = `scaleX(${a.toFixed(4)})`;
        txt.style.opacity = b.toFixed(3);
        txt.style.transform = `translate3d(${((1 - b) * -14).toFixed(2)}px, 0, 0)`;
        txt.style.filter = b < 0.995 ? `blur(${((1 - b) * 5).toFixed(2)}px)` : "none";
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        k.style.opacity = (1 - q).toFixed(3);
        k.style.filter = q > 0.005 ? `blur(${(q * 6).toFixed(2)}px)` : "none";
      },
    };
  };

  /* A calm list (the ten services): number, name, a hairline that draws under each row. */
  X.xlist = (o, S, host) => {
    const box = el("div", "x-abs", host);
    Object.assign(box.style, { left: (o.x ?? 80) + "px", top: o.y + "px", width: (o.w ?? S.W - 160) + "px" });
    const rows = o.items.map((it, i) => {
      const r = el("div", "x-row", box);
      Object.assign(r.style, { top: i * o.rowH + "px", height: o.rowH + "px", width: "100%" });
      const num = el("span", "x-num", r, String(i + 1).padStart(2, "0"));
      const w = el("span", "x-w x-name", r);
      w.style.fontSize = (o.size || 40) + "px";
      const wi = el("span", "x-wi", w, esc(it));
      const hl = el("span", "x-hair", r);
      return { num, wi, hl };
    });
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        rows.forEach((r, i) => {
          const t0 = o.t0 + i * o.st;
          const p = P(t, t0, 1.1, "outQuart"), h = P(t, t0 - 0.1, 1.3, "inOutCubic"), nb = P(t, t0 + 0.1, 0.9, "outCubic");
          r.wi.style.transform = `translate3d(0, ${((1 - p) * 104).toFixed(2)}%, 0)`;
          r.wi.style.filter = p < 0.995 ? `blur(${((1 - p) * 6).toFixed(2)}px)` : "none";
          r.wi.style.opacity = (0.35 + 0.65 * p).toFixed(3);
          r.num.style.opacity = nb.toFixed(3);
          r.hl.style.transform = `scaleX(${h.toFixed(4)})`;
        });
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        box.style.opacity = (1 - q).toFixed(3);
        box.style.filter = q > 0.005 ? `blur(${(q * 9).toFixed(2)}px)` : "none";
      },
    };
  };

  /* The process steps: a thin vertical line that grows from step to step, a node per step, the step name. */
  X.xsteps = (o, S, host) => {
    const box = el("div", "x-abs", host);
    Object.assign(box.style, { left: (o.x ?? 80) + "px", top: o.y + "px", width: (o.w ?? S.W - 160) + "px", height: o.items.length * o.rowH + "px" });
    const n = o.items.length, nx = 14, c0 = o.rowH / 2;
    const track = el("span", "x-track", box);
    Object.assign(track.style, { left: nx - 1 + "px", top: c0 + "px", height: (n - 1) * o.rowH + "px" });
    const fill = el("span", "x-trackfill", box);
    Object.assign(fill.style, { left: nx - 1 + "px", top: c0 + "px", height: (n - 1) * o.rowH + "px" });
    const rows = o.items.map((it, i) => {
      const node = el("span", "x-node", box);
      Object.assign(node.style, { left: nx - 9 + "px", top: c0 + i * o.rowH - 9 + "px" });
      const num = el("span", "x-snum", box, String(i + 1).padStart(2, "0"));
      Object.assign(num.style, { left: "64px", top: c0 + i * o.rowH - 44 + "px" });
      const w = el("span", "x-w x-sname", box);
      Object.assign(w.style, { left: "64px", top: c0 + i * o.rowH - 10 + "px", fontSize: (o.size || 62) + "px" });
      const wi = el("span", "x-wi", w, esc(it));
      return { node, num, wi };
    });
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        const tr = P(t, o.t0 - 0.2, 0.9, "inOutCubic");
        track.style.transform = `scaleY(${tr.toFixed(4)})`;
        const g = clamp((t - o.t0) / (o.st * (n - 1) + 0.0001));
        fill.style.transform = `scaleY(${E.inOutSine(clamp(g)).toFixed(4)})`;
        rows.forEach((r, i) => {
          const t0 = o.t0 + i * o.st;
          const p = P(t, t0, 1.15, "outQuart"), a = P(t, t0 - 0.05, 0.6, "inOutCubic");
          r.wi.style.transform = `translate3d(0, ${((1 - p) * 104).toFixed(2)}%, 0)`;
          r.wi.style.filter = p < 0.995 ? `blur(${((1 - p) * 7).toFixed(2)}px)` : "none";
          r.wi.style.opacity = (0.35 + 0.65 * p).toFixed(3);
          r.num.style.opacity = P(t, t0 + 0.15, 0.9, "outCubic").toFixed(3);
          r.node.style.opacity = (0.25 + 0.75 * a).toFixed(3);
          r.node.classList.toggle("on", a > 0.5);
        });
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        box.style.opacity = (1 - q).toFixed(3);
        box.style.filter = q > 0.005 ? `blur(${(q * 9).toFixed(2)}px)` : "none";
      },
    };
  };

  /* The site's dot map of the Netherlands (public/media/map/nl-dots.svg), revealed from Nistelrode outwards,
     with a calm pin (a slow ring, no bounce) and its label. */
  X.xmap = (o, S, host) => {
    const box = el("div", "x-abs", host);
    const sc = o.w / 440, h = 512 * sc;
    Object.assign(box.style, { left: o.x + "px", top: o.y + "px", width: o.w + "px", height: h + "px" });
    const map = el("div", "x-map", box, o.svg);
    const px = o.pin[0] * sc, py = o.pin[1] * sc;
    const ring = el("span", "x-pinring", box), dot = el("span", "x-pin", box);
    Object.assign(ring.style, { left: px - 60 + "px", top: py - 60 + "px" });
    Object.assign(dot.style, { left: px - 11 + "px", top: py - 11 + "px" });
    const lab = el("span", "x-pinlab", box, esc(o.label));
    Object.assign(lab.style, { left: px + 30 + "px", top: py - 19 + "px" });
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        const r = P(t, o.t0, 1.9, "inOutSine") * Math.hypot(o.w, h) * 1.05;
        const m = `radial-gradient(circle ${Math.max(1, r).toFixed(1)}px at ${px}px ${py}px, #000 72%, transparent 100%)`;
        map.style.maskImage = m; map.style.webkitMaskImage = m;
        const a = P(t, o.t0 + 0.15, 0.9, "outCubic");
        dot.style.opacity = a.toFixed(3);
        dot.style.transform = `scale(${lerp(0.6, 1, a).toFixed(4)})`;
        const u = ((t - o.t0 - 0.5) % 2.4 + 2.4) % 2.4 / 2.4;
        ring.style.opacity = t > o.t0 + 0.5 ? (0.55 * (1 - u)).toFixed(3) : 0;
        ring.style.transform = `scale(${lerp(0.2, 1, E.outCubic(u)).toFixed(4)})`;
        const b = P(t, o.t0 + 0.6, 1.0, "outQuart");
        lab.style.opacity = b.toFixed(3);
        lab.style.transform = `translate3d(${((1 - b) * -10).toFixed(2)}px, 0, 0)`;
        lab.style.filter = b < 0.995 ? `blur(${((1 - b) * 5).toFixed(2)}px)` : "none";
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        box.style.opacity = (1 - q).toFixed(3);
        box.style.filter = q > 0.005 ? `blur(${(q * 9).toFixed(2)}px)` : "none";
      },
    };
  };

  /* A thin gradient outline that draws around a rectangle (the cited source in the AI answer). */
  X.xring = (o, S, host) => {
    const box = el("div", "x-abs", host);
    const pad = 10;
    Object.assign(box.style, { left: o.x - pad + "px", top: o.y - pad + "px", width: o.w + 2 * pad + "px", height: o.h + 2 * pad + "px" });
    const id = "xr" + uid++;
    box.innerHTML = `<svg width="${o.w + 2 * pad}" height="${o.h + 2 * pad}" style="overflow:visible"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3affff"/><stop offset="0.45" stop-color="#22ffb4"/><stop offset="1" stop-color="#18ff59"/></linearGradient></defs>
      <rect x="${pad}" y="${pad}" width="${o.w}" height="${o.h}" rx="${o.r ?? o.h / 2}" fill="none" stroke="url(#${id})" stroke-width="${o.sw ?? 3}" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1"/></svg>`;
    const rect = box.querySelector("rect");
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        const a = P(t, o.t0, o.d ?? 1.2, "inOutCubic");
        rect.setAttribute("stroke-dashoffset", (1 - a).toFixed(4));
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        box.style.opacity = (1 - q).toFixed(3);
        box.style.filter = `drop-shadow(0 0 ${(6 + 6 * a).toFixed(1)}px rgba(58,255,255,${(0.35 * a).toFixed(3)}))`;
      },
    };
  };

  /* A small caption with a gradient dot (address, source), soft blur-in. */
  X.xcap = (o, S, host) => {
    const c = el("div", "x-abs x-cap", host, `<span class="x-cdot"></span><span>${esc(o.text)}</span>`);
    Object.assign(c.style, { left: (o.x ?? 80) + "px", top: o.y + "px", fontSize: (o.size || 28) + "px" });
    if (o.center) { c.style.left = "0px"; c.style.width = S.W + "px"; c.style.justifyContent = "center"; }
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        c.style.display = vis ? "flex" : "none";
        if (!vis) return;
        const b = P(t, o.t0, 1.0, "outQuart");
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        c.style.opacity = (b * (1 - q)).toFixed(3);
        c.style.transform = `translate3d(0, ${((1 - b) * 14).toFixed(2)}px, 0)`;
        const bl = (1 - b) * 6 + q * 6;
        c.style.filter = bl > 0.03 ? `blur(${bl.toFixed(2)}px)` : "none";
      },
    };
  };

  /* The site's primary button (base.css .btn): dark pill, white label, the cyan dot with the arrow. */
  X.xbtn = (o, S, host) => {
    const b = el("div", "x-abs x-btn", host, `<span>${esc(o.text)}</span><span class="x-bdot"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>`);
    b.style.top = o.y + "px";
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        b.style.display = vis ? "inline-flex" : "none";
        if (!vis) return;
        b.style.left = (S.W - b.offsetWidth) / 2 + "px";
        const a = P(t, o.t0, 1.1, "outQuart");
        b.style.opacity = a.toFixed(3);
        b.style.transform = `translate3d(0, ${((1 - a) * 22).toFixed(2)}px, 0)`;
        b.style.filter = a < 0.995 ? `blur(${((1 - a) * 6).toFixed(2)}px)` : "none";
      },
    };
  };

  /* A soft scrim (full / top / bottom) to keep type readable on a photo; fades in and out. */
  X.xscrim = (o, S, host) => {
    const d = el("div", "x-abs", host);
    const bg = o.mode === "bottom" ? `linear-gradient(180deg, rgba(3,3,4,0) ${o.from ?? 40}%, rgba(3,3,4,${o.a ?? 0.85}) 100%)`
      : o.mode === "top" ? `linear-gradient(0deg, rgba(3,3,4,0) ${o.from ?? 60}%, rgba(3,3,4,${o.a ?? 0.8}) 100%)` : `rgba(3,3,4,${o.a ?? 0.5})`;
    Object.assign(d.style, { width: S.W + "px", height: S.H + "px", background: bg });
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        d.style.display = vis ? "block" : "none";
        if (!vis) return;
        const a = o.fade === 0 ? 1 : P(t, o.t0, o.fade ?? 1.0, "inOutSine");
        const q = o.t1 != null ? P(t, o.t1 - 0.6, 0.6, "inOutSine") : 0;
        d.style.opacity = (lerp(o.o0 ?? 0, 1, a) * (1 - q)).toFixed(3);
      },
    };
  };

  /* The compact M7 end frame (round 22b): the approved outro's look (the emblem draws its lines, fills, the gradient
     ring closes, a sheen; m7branding.com under it) in about 1.9 s instead of 3.3 s. Optional: the site's button. */
  X.xend = (o, S, host) => {
    const root = el("div", "x-abs", host);
    Object.assign(root.style, { width: S.W + "px", height: S.H + "px",
      background: `radial-gradient(70% 45% at 50% ${((o.cy / S.H) * 100).toFixed(1)}%, rgba(58,255,255,0.16), transparent 70%), #030304` });
    const size = o.size || 300, cx = S.W / 2, cy = o.cy;
    const id = "xe" + uid++;
    const svg = el("div", "x-abs", root);
    svg.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 147 147" style="position:absolute;left:${cx - size / 2}px;top:${cy - size / 2}px;overflow:visible">
      <defs>
        <linearGradient id="${id}g" x1="73.4" y1="0" x2="73.4" y2="147" gradientUnits="userSpaceOnUse"><stop stop-color="#3AFFFF"/><stop offset="1" stop-color="#00FF19"/></linearGradient>
        <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.5" stop-color="#fff" stop-opacity="0.95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
        <clipPath id="${id}c"><g transform="translate(30.69 51.25)">${M7P.map((d) => `<path d="${d}"/>`).join("")}</g></clipPath>
        <filter id="${id}f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <circle class="disc" cx="73.415" cy="73.415" r="66.4" fill="#000"/>
      <circle class="glow" cx="73.415" cy="73.415" r="69.9" fill="none" stroke="url(#${id}g)" stroke-width="7" pathLength="1" stroke-dasharray="1 1" filter="url(#${id}f)" opacity="0.8" transform="rotate(-90 73.415 73.415)"/>
      <circle class="ring" cx="73.415" cy="73.415" r="69.9" fill="none" stroke="url(#${id}g)" stroke-width="7" pathLength="1" stroke-dasharray="1 1" stroke-linecap="round" transform="rotate(-90 73.415 73.415)"/>
      <g transform="translate(30.69 51.25)">
        <g class="lined" fill="none" stroke="#fff" stroke-width="1.1" stroke-linejoin="round">${M7P.map((d) => `<path d="${d}" pathLength="1" stroke-dasharray="1 1"/>`).join("")}</g>
        <g class="fill" fill="#fff">${M7P.map((d) => `<path d="${d}"/>`).join("")}</g>
      </g>
      <g clip-path="url(#${id}c)"><rect class="sh" x="-60" y="40" width="50" height="70" fill="url(#${id}s)"/></g>
    </svg>`;
    const q = (k) => svg.querySelector(k);
    const ring = q(".ring"), glow = q(".glow"), lined = [...svg.querySelectorAll(".lined path")], linedG = q(".lined"), fill = q(".fill"), sh = q(".sh"), disc = q(".disc"), grad = q(`#${id}g`);
    const url = o.url ? el("div", "x-abs x-url", root, esc(o.url)) : null;
    if (url) Object.assign(url.style, { top: o.urlY + "px", width: S.W + "px" });
    let btn = null;
    if (o.button) {
      btn = el("div", "x-abs x-btn", root, `<span>${esc(o.button)}</span><span class="x-bdot"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>`);
      btn.style.top = o.btnY + "px";
    }
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001;
        root.style.display = vis ? "block" : "none";
        if (!vis) return;
        const u = t - o.t0;
        root.style.opacity = P(u, 0, 0.4, "inOutSine").toFixed(3);
        lined.forEach((p, i) => p.setAttribute("stroke-dashoffset", (1 - P(u, 0.12 + i * 0.04, 0.55, "inOutCubic")).toFixed(4)));
        fill.style.opacity = P(u, 0.6, 0.35, "outCubic").toFixed(3);
        linedG.style.opacity = (1 - P(u, 0.8, 0.3, "outQuart")).toFixed(3);
        const rp = P(u, 0.5, 0.75, "inOutCubic");
        ring.setAttribute("stroke-dashoffset", (1 - rp).toFixed(4));
        glow.setAttribute("stroke-dashoffset", (1 - rp).toFixed(4));
        glow.setAttribute("opacity", (0.35 + 0.45 * Math.sin(u * 2.6) ** 2).toFixed(3));
        grad.setAttribute("gradientTransform", `rotate(${(u * 70) % 360} 73.4 73.4)`);
        disc.setAttribute("opacity", P(u, 0.15, 0.4, "outQuart").toFixed(3));
        sh.setAttribute("x", lerp(-60, 160, P(u, 1.15, 0.6, "inOutCubic")).toFixed(1));
        const pop = P(u, 0.05, 1.3, "outQuint");
        svg.style.transform = `translate3d(0, ${((1 - pop) * 24).toFixed(2)}px, 0) scale(${lerp(0.92, 1, pop).toFixed(4)})`;
        svg.style.transformOrigin = `${cx}px ${cy}px`;
        if (btn) {
          btn.style.left = (S.W - btn.offsetWidth) / 2 + "px";
          const a = P(u, 0.7, 0.7, "outQuart");
          btn.style.opacity = a.toFixed(3);
          btn.style.transform = `translate3d(0, ${((1 - a) * 18).toFixed(2)}px, 0)`;
          btn.style.filter = a < 0.995 ? `blur(${((1 - a) * 5).toFixed(2)}px)` : "none";
        }
        if (url) {
          const a = P(u, o.button ? 0.9 : 0.75, 0.55, "outQuart");
          url.style.opacity = a.toFixed(3);
          url.style.transform = `translate3d(0, ${((1 - a) * 16).toFixed(2)}px, 0)`;
        }
      },
    };
  };

  window.M7 = {
    async init(spec) {
      const custom = [];
      const layers = spec.layers.map((l, i) => {
        if (!X[l.type]) return l;
        custom.push({ i, l });
        return { type: "html", x: 0, y: 0, w: spec.w || 1080, t0: -100, t1: 1e9, html: `<div class="xhost" data-x="${i}"></div>` };
      });
      await base.init({ ...spec, layers });
      const S = base.S;
      this.custom = custom.map(({ i, l }) => X[l.type](l, S, document.querySelector(`.xhost[data-x="${i}"]`)));
      await document.fonts.load('700 40px "Montserrat"');
      await document.fonts.load('500 40px "Montserrat"');
      await document.fonts.ready;
      return true;
    },
    async render(t) {
      await base.render(t);
      for (const c of this.custom) c.update(t);
      return true;
    },
  };
})();
"""

X_CSS = """
.xhost { position: absolute; left: 0; top: 0; width: 1080px; }
.x-abs { position: absolute; }
.x-ln { display: block; white-space: nowrap; }
.x-w { display: inline-block; overflow: hidden; vertical-align: top; padding: 0.08em 0.06em 0.24em; margin: -0.08em -0.06em -0.24em; }
.x-wi { display: inline-block; will-change: transform, filter, opacity; }
.m7i { display: inline-block; height: 0.7em; width: calc(0.7em * 89 / 51); vertical-align: baseline; margin-left: 0.02em; }
.m7dot { margin-left: 0.04em; }
.x-kick { display: flex; align-items: center; gap: 20px; font-weight: 700; font-size: 23px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(246, 246, 248, 0.8); white-space: nowrap; }
.x-kl { display: inline-block; width: 56px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, #3affff, #22ffb4 45%, #18ff59); transform-origin: 0 50%; }
.x-kt { display: inline-block; }
.x-row { position: absolute; left: 0; display: flex; align-items: center; }
.x-num { width: 74px; flex: none; font-weight: 600; font-size: 22px; letter-spacing: 0.12em; color: #6c6c76; font-variant-numeric: tabular-nums; }
.x-name { font-weight: 700; letter-spacing: -0.02em; color: #f6f6f8; line-height: 1.1; white-space: nowrap; }
.x-hair { position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: rgba(255, 255, 255, 0.10); transform-origin: 0 50%; }
.x-track { position: absolute; width: 2px; background: rgba(255, 255, 255, 0.12); transform-origin: 50% 0; }
.x-trackfill { position: absolute; width: 2px; background: linear-gradient(180deg, #3affff, #18ff59); transform-origin: 50% 0; }
.x-node { position: absolute; width: 18px; height: 18px; border-radius: 50%; background: #030304; box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.35); }
.x-node.on { background: linear-gradient(180deg, #3affff, #18ff59); box-shadow: 0 0 0 6px rgba(3, 3, 4, 1), 0 0 18px rgba(58, 255, 255, 0.45); }
.x-snum { position: absolute; font-weight: 600; font-size: 22px; letter-spacing: 0.14em; color: #6c6c76; font-variant-numeric: tabular-nums; }
.x-sname { position: absolute; font-weight: 800; letter-spacing: -0.035em; color: #fff; line-height: 1.0; white-space: nowrap; }
.x-map { position: absolute; inset: 0; }
.x-map svg { width: 100%; height: 100%; display: block; }
.x-pin { position: absolute; width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(180deg, #3affff, #18ff59); box-shadow: 0 0 0 5px rgba(3, 3, 4, 0.9), 0 0 26px rgba(58, 255, 255, 0.6); }
.x-pinring { position: absolute; width: 120px; height: 120px; border-radius: 50%; border: 2px solid rgba(58, 255, 255, 0.8); }
.x-pinlab { position: absolute; font-weight: 700; font-size: 30px; letter-spacing: -0.01em; color: #fff; white-space: nowrap; text-shadow: 0 2px 14px rgba(3, 3, 4, 0.9); }
.x-cap { display: flex; align-items: center; gap: 14px; font-weight: 600; letter-spacing: 0.01em; color: rgba(246, 246, 248, 0.82); white-space: nowrap; }
.x-cdot { width: 10px; height: 10px; border-radius: 50%; flex: none; background: linear-gradient(180deg, #3affff, #18ff59); }
.x-btn { display: inline-flex; align-items: center; gap: 26px; padding: 13px 13px 13px 44px; min-height: 88px; border-radius: 999px; font-weight: 700; font-size: 30px; letter-spacing: 0.005em;
  color: #f6f6f8; white-space: nowrap; background: linear-gradient(180deg, #26262a, #18181b);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.09), 0 16px 44px -14px rgba(58, 255, 255, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.1); }
.x-url { left: 0; text-align: center; font-weight: 600; font-size: 30px; letter-spacing: 0.24em; color: #a7a7b0; text-transform: uppercase; }
.x-bdot { display: grid; place-items: center; width: 62px; height: 62px; border-radius: 50%; background: #34f5f0; flex: none; }
"""

PAGE = """<!doctype html>
<html lang="nl"><head><meta charset="utf-8" />
<link rel="stylesheet" href="{css}" />
<style>{xcss}</style>
<script src="{engine}"></script>
<script src="x22.js"></script>
</head><body><div id="stage"></div></body></html>
"""

# The renderer: render.cjs with this module's page (same capture, same ffmpeg encode).
RENDER_JS = r"""
const { chromium } = require("playwright");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
(async () => {
const [specPath, out, ...rest] = process.argv.slice(2);
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
const stillIdx = rest.indexOf("--still");
const stills = stillIdx >= 0 ? rest[stillIdx + 1].split(",").map(Number) : null;
const audio = rest.find((a) => a.endsWith(".wav"));
const W = spec.w || 1080, H = spec.h || 1920, fps = spec.fps || 60;
const browser = await chromium.launch({ args: ["--force-color-profile=srgb", "--disable-lcd-text", "--font-render-hinting=none", "--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
page.on("pageerror", (e) => console.error("PAGEERROR", e.message));
page.on("console", (m) => { if (m.type() === "error") console.error("CONSOLE", m.text()); });
await page.goto("file://" + path.join(__dirname, "story22.html"));
await page.evaluate((s) => window.M7.init(s), spec);
const cdp = await page.context().newCDPSession(page);
const shot = async (q) => Buffer.from((await cdp.send("Page.captureScreenshot", { format: "jpeg", quality: q, optimizeForSpeed: true })).data, "base64");
if (stills) {
  for (let k = 0; k < stills.length; k++) {
    await page.evaluate((t) => window.M7.render(t), stills[k]);
    const f = stills.length > 1 ? out.replace(/(\.\w+)$/, `-${k}$1`) : out;
    if (f.endsWith(".png")) await page.screenshot({ path: f, type: "png" });
    else fs.writeFileSync(f, await shot(94));
  }
  await browser.close();
  return;
}
const n = Math.round(spec.duration * fps);
const args = ["-y", "-loglevel", "error", "-f", "image2pipe", "-c:v", "mjpeg", "-framerate", String(fps), "-i", "-"];
if (audio) args.push("-i", audio);
args.push("-c:v", "libx264", "-preset", "medium", "-crf", String(spec.crf ?? 17), "-pix_fmt", "yuv420p", "-profile:v", "high", "-r", String(fps), "-threads", "3");
if (audio) args.push("-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-shortest");
args.push("-movflags", "+faststart", out);
const ff = spawn("ffmpeg", args, { stdio: ["pipe", "inherit", "inherit"] });
const t0 = Date.now();
const put = async (buf) => { if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r)); };
for (let i = 0; i < n; i++) {
  await page.evaluate((tt) => window.M7.render(tt), i / fps);
  await put(await shot(93));
}
ff.stdin.end();
await new Promise((r) => ff.on("close", r));
await browser.close();
console.log(`rendered ${out} ${n} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
})();
"""


def setup():
    WORK.mkdir(parents=True, exist_ok=True)
    (WORK / "x22.js").write_text(X_JS)
    (WORK / "story22.html").write_text(PAGE.format(css=furl(STUDIO / "studio.css"), engine=furl(STUDIO / "engine.js"), xcss=X_CSS))
    (WORK / "render22.cjs").write_text(RENDER_JS)


def render(spec, out, wav=None, still=None):
    out = Path(out)
    out.parent.mkdir(parents=True, exist_ok=True)
    sp = WORK / "specs" / (out.stem + ".json")
    sp.parent.mkdir(parents=True, exist_ok=True)
    sp.write_text(json.dumps(spec))
    cmd = ["nice", "-n", "5", "node", str(WORK / "render22.cjs"), str(sp), str(out)]
    if wav:
        cmd.append(str(wav))
    if still is not None:
        cmd += ["--still", ",".join(str(s) for s in (still if isinstance(still, (list, tuple)) else [still]))]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0 or "PAGEERROR" in r.stderr or "CONSOLE" in r.stderr:
        raise RuntimeError(f"render failed {out}: {r.stderr[-2000:]}")
    return out


# ---------------------------------------------------------------- material
def seq_dir(d, fps, start=0, n=None):
    d = Path(d)
    return {"dir": furl(d), "n": n or len(list(d.glob("*.jpg"))), "fps": fps, "start": start}


def clip_frames(src, name, t0=0.0, dur=None):
    """A real clip as a jpg sequence at its native frame rate (for a card)."""
    d = WORK / "frames" / name
    if not (d.exists() and any(d.iterdir())):
        d.mkdir(parents=True, exist_ok=True)
        cmd = ["ffmpeg", "-y", "-loglevel", "error", "-ss", f"{t0:.2f}", "-i", str(src)]
        if dur:
            cmd += ["-t", f"{dur:.2f}"]
        subprocess.run(cmd + ["-q:v", "2", str(d / "%05d.jpg")], check=True)
    return d


def nl_svg():
    """The site's dot map of the Netherlands, toned down: neighbours very faint, the Netherlands soft white."""
    s = (MEDIA / "map" / "nl-dots.svg").read_text()
    s = s.replace('stroke-opacity="0.24"', 'stroke-opacity="0.06"').replace('stroke-opacity="1"', 'stroke-opacity="0.58"')
    s = s.replace('width="440" height="512"', 'width="100%" height="100%" preserveAspectRatio="xMidYMid meet"')
    return s


def nl_project(lat, lon):
    """Same projection as src/content/generated/dotmap.ts (NL_MAP, mercator)."""
    import math
    k, tx, ty = 6074.7332, -339.2771, 6760.8432
    x = math.radians(lon)
    y = math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
    return [round(tx + k * x, 2), round(ty - k * y, 2)]


# ---------------------------------------------------------------- building blocks
def kicker(text, t0, t1, y=KY, **kw):
    return dict(type="xkicker", text=text, t0=t0, t1=t1, x=KX, y=y, **kw)


def title(lines, t0, t1, y=TY, size=TS, **kw):
    return dict(type="xtext", lines=[{"t": s} for s in lines], t0=t0, t1=t1, x=KX, y=y, size=size, st=0.075, **kw)


def sub(lines, t0, t1, y, size=38, color="#c4c4cc", weight=500, **kw):
    return dict(type="xtext", lines=[{"t": s} for s in lines], t0=t0, t1=t1, x=KX, y=y, size=size, weight=weight, color=color,
                ls=-0.005, lh=1.36, st=0.03, d=1.1, blur=5, **kw)


def card(src_or_seq, t0, t1, rect, radius=28, fit="cover", pos="50% 50%", kb=None, enter=None, exit_=None, shadow=None, bg="#0b0b0e"):
    m = {"type": "media", "t0": t0, "t1": t1, "rect": rect, "frame": "card", "radius": radius, "float": 0, "fit": fit, "pos": pos,
         "enter": enter or {"type": "focus", "d": 1.3, "ease": "inOutSine", "blur": 18, "s0": 1.035, "fade": 1.8},
         "exit": exit_ or {"type": "fade", "d": 0.6, "ease": "inOutSine"},
         "kb": kb or {"s0": 1.05, "s1": 1.0, "ease": "inOutSine"},
         "shadow": shadow or "0 30px 80px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06)", "bg": bg}
    if isinstance(src_or_seq, dict):
        m["seq"] = src_or_seq
    else:
        m["src"] = src_or_seq
    return m


def full(src, t0, t1, enter, kb, pos="50% 50%", exit_=None):
    return {"type": "media", "src": src, "t0": t0, "t1": t1, "rect": {"x": 0, "y": 0, "w": W, "h": H}, "frame": "full", "radius": 0,
            "float": 0, "fit": "cover", "pos": pos, "enter": enter, "exit": exit_ or {"type": "none"}, "kb": kb}


def endframe(t, cy=880, size=300, url="m7branding.com", button=None):
    """The compact M7 end frame (xend): dark fade with a soft teal glow, the emblem drawing itself in the gradient
    ring, m7branding.com underneath; about 1.95 s in total. Returns (layers, the time the ring closes)."""
    L = {"type": "xend", "t0": t, "cy": cy, "size": size, "url": url, "urlY": cy + size / 2 + 96}
    if button:
        L.update(button=button, btnY=cy + size / 2 + 70, urlY=cy + size / 2 + 222)
    return [L], t + 1.25


def shift(layers, dy):
    """Move a story's content block down by dy (vertical balance between y 300 and 1530); full-bleed media stays."""
    out = []
    for l in layers:
        l = dict(l)
        if "rect" in l and l.get("frame") != "full":
            l["rect"] = dict(l["rect"], y=l["rect"]["y"] + dy)
        elif l["type"] in ("xtext", "xkicker", "xlist", "xsteps", "xmap", "xcap", "xring"):
            l["y"] = l["y"] + dy
        out.append(l)
    return out


def book_pan(x0, x1, cy, z, still=(3000, 2000), box=(920, 860)):
    """kb for a slow pan over the open brandbook still inside a card (fit contain): the window centre moves from source
    x0 to x1 at height cy, z screen px per source px. Translate in % of the card box, the scale around its centre."""
    b = min(box[0] / still[0], box[1] / still[1])
    top = (box[1] - still[1] * b) / 2
    isc = z / b
    tx = lambda cx: -isc * (cx * b - box[0] / 2) / box[0] * 100
    ty = -isc * (top + cy * b - box[1] / 2) / box[1] * 100
    return {"s0": round(isc, 4), "s1": round(isc, 4), "x0": round(tx(x0), 3), "x1": round(tx(x1), 3), "y0": round(ty, 3), "y1": round(ty, 3), "ease": "inOutSine"}


CARD = {"x": 80, "y": 604, "w": 920, "h": 860}      # the main visual of a card story: title above, card below (ends at 1464)
END = 1.95                                            # the end frame (xend): from the fade to the last frame
CAP_Y = 1494                                          # its caption (client name) under the card


# ---------------------------------------------------------------- the ten stories
def stories():
    team = MEDIA / "team"
    off = MEDIA / "office"
    st = {}
    e = 8.0            # content ends here; the end frame (END = 1.95 s) follows, so every story runs 9.95 s

    def story(topic, seed, still, layers, dy=0, end=None):
        ex, ring = end or endframe(e)
        return dict(topic=topic, seed=seed, still=still, dur=e + END, outro=ring - 0.95, layers=shift(layers, dy) + ex)

    # 01. Welcome to the world of M7: the building at sunset, its blur easing off while the small white M7 technical
    #     lines draw (the approved reel intro) and resolve onto the real M7 sign; then the site's H1 with the gradient emblem.
    st[1] = story("welkom", 11, 6.0, [
        full(furl(off / "kantoor-buitenkant.webp"), 0, e + 0.8, {"type": "focus", "d": 3.0, "ease": "inOutSine", "blur": 40, "s0": 1.06, "fade": 5},
             {"s0": 1.12, "s1": 1.0, "ease": "inOutSine"}, pos="82% 38%"),
        dict(type="xscrim", mode="full", a=0.5, o0=1, t0=0, fade=0, t1=3.7),
        dict(type="xscrim", mode="bottom", a=0.95, **{"from": 22}, t0=2.4, fade=1.4, t1=1e9),
        {"type": "m7lines", "t0": 0.25, "dur": 2.75, "size": 260, "cy": H * 0.335, "frost": False, "scrim": 0.0, "ink": "#FFFFFF"},
        dict(type="xtext", lines=[{"t": "Welcome to the"}, {"t": "world of [M7]."}], t0=3.05, t1=e + 0.1, x=KX, y=1126, size=98, st=0.09),
        sub(["Welkom in onze wereld van", "branding, websites en apps."], 4.2, e + 0.1, 1388, size=40),
    ])

    # 02. What we do: the ten services in the site's order, rising one by one under "Jouw one-stop-shop".
    services = ["Branding & Rebranding", "Websites & Webshops", "Web-apps, Portalen & Apps", "Automation & Funnels", "SEO, AEO & GEO",
                "Content Marketing & Online Ads", "Foto, Video, 3D & Animatie", "Grafisch Ontwerp & Print Design",
                "Configurators, Lead Tools & Widgets", "AI & Consultancy"]
    st[2] = story("diensten", 23, 6.6, [
        kicker("Onze kapstok", 0.3, e + 0.1),
        title(["Jouw", "*one-stop-shop*"], 0.45, e + 0.1, size=100),
        dict(type="xlist", items=services, x=KX, y=628, w=W - 2 * KX, rowH=84, size=38, t0=1.5, st=0.36, t1=e + 0.1),
    ], dy=30)

    # 03. One team: the real team portraits (order of the about page), strategy to code at one table.
    people = ["team-1", "team-3", "team-5", "team-6", "team-7", "team-8", "team-4"]
    cw, chh, gap = 214, 268, 20
    cards = []
    for i, p in enumerate(people):
        row, col = divmod(i, 4)
        n_row = 4 if row == 0 else 3
        x0 = KX + (W - 2 * KX - (n_row * cw + (n_row - 1) * gap)) / 2
        r = {"x": round(x0 + col * (cw + gap)), "y": 630 + row * (chh + gap), "w": cw, "h": chh}
        cards.append(card(furl(team / f"{p}.webp"), 1.45 + i * 0.18, e + 0.1, r, radius=20, pos="50% 30%",
                          enter={"type": "focus", "d": 1.3, "ease": "inOutSine", "blur": 14, "s0": 1.04, "fade": 1.8}))
    st[3] = story("team", 37, 5.6, [
        kicker("Het team", 0.3, e + 0.1),
        title(["The people behind", "the *pixels*"], 0.45, e + 0.1),
        *cards,
        sub(["Strategen, designers, developers", "en marketeers aan één tafel."], 3.0, e + 0.1, 1258, size=40, color="#e4e4ea", weight=600),
    ], dy=80)

    # 04. Our office in Nistelrode: the real office clip (only the drone over the office among the fields; no cut inside the
    #     card, the facade with the M7 sign opens story 1), then the site's dot map with Nistelrode: clients across the
    #     Netherlands, Belgium and beyond.
    kclip = clip_frames(MEDIA / "about" / "clips" / "kantoor.mp4", "kantoor")
    pin = nl_project(51.7048, 5.5519)
    m = 4.3            # the cut between the two beats
    st[4] = story("kantoor", 41, 3.5, [
        kicker("Ons kantoor", 0.3, m),
        title(["Ruimte voor", "grote *ideeën.*"], 0.45, m),
        card(seq_dir(kclip, 30, n=80) | {"rate": 0.78}, 0.95, m + 0.05, {"x": KX, "y": 636, "w": 920, "h": 690}, radius=26, pos="38% 50%",
             kb={"s0": 1.04, "s1": 1.0}, exit_={"type": "focus", "d": 0.7, "ease": "inOutSine", "blur": 14}),
        dict(type="xcap", text="Loosbroekseweg 45, Nistelrode", x=KX, y=1372, size=30, t0=1.9, t1=m),
        kicker("Klanten wereldwijd", m, e + 0.1),
        title(["Vanuit Nistelrode", "de wereld *over.*"], m + 0.1, e + 0.1),
        dict(type="xmap", svg=nl_svg(), pin=pin, label="Nistelrode", x=138, y=592, w=600, t0=m + 0.35, t1=e + 0.1),
        sub(["Voor klanten in heel Nederland,", "België en daarbuiten."], m + 0.95, e + 0.1, 1336, size=40, color="#e4e4ea", weight=600),
    ], dy=58)

    # 05. The process: the five beats every service shares (werkproces page), on one growing line.
    st[5] = story("werkproces", 53, 6.2, [
        kicker("Altijd hetzelfde ritme", 0.3, e + 0.1),
        title(["Ons", "*werkproces*"], 0.45, e + 0.1, size=100),
        dict(type="xsteps", items=["Luisteren", "Plannen", "Maken", "Lanceren", "Doorgroeien"], x=KX, y=630, w=W - 2 * KX, rowH=148, size=62,
             t0=1.45, st=0.55, t1=e + 0.1),
        sub(["Eerst luisteren, dan pas maken."], 4.4, e + 0.1, 1414, size=40, color="#e4e4ea", weight=600),
    ], dy=30)

    # 06. Websites & Webshops: a real snippet of the approved Buitenstate reel (the site on a laptop, scroll + hover).
    bs = SHOTS21 / "buitenstate-top3" / "05-scene"
    st[6] = story("websites", 61, 5.6, [
        kicker("Websites & Webshops", 0.3, e + 0.1),
        title(["Websites that work", "as *hard* as you do."], 0.45, e + 0.1, size=84),
        card(seq_dir(bs, 60) | {"rate": 0.75}, 1.0, e + 0.05, CARD, pos="50% 46%", kb={"s0": 1.0, "s1": 1.0}),
        dict(type="xcap", text="Buitenstate", x=KX, y=CAP_Y, size=30, t0=2.2, t1=e + 0.1),
    ])

    # 07. Branding: the real Bernheze Makelaars brandbook, open on the table (round 20 book still), a slow pan from the
    #     logo page to the colour page and the round logo.
    st[7] = story("branding", 71, 3.4, [
        kicker("Branding & Rebranding", 0.3, e + 0.1),
        title(["Brands that people", "*remember.*"], 0.45, e + 0.1),
        card(furl(BOOK), 1.0, e + 0.05, CARD, pos="50% 50%", fit="contain", kb=book_pan(1000, 2230, 1300, 0.8), bg="#e9e9e9"),
        dict(type="xcap", text="Bernheze Makelaars · Brandbook", x=KX, y=CAP_Y, size=30, t0=2.2, t1=e + 0.1),
    ])

    # 08. Configurators & tools: a real snippet of the approved Steddion reel (the Energy Property Configurator: building
    #     type, Volgende, the profiles, a profile picked, the next step).
    sd = SHOTS21 / "steddion-top2" / "01-scene"
    st[8] = story("tools", 83, 6.2, [
        kicker("Configurators", 0.3, e + 0.1),
        title(["Click. Configure.", "*Convert.*"], 0.45, e + 0.1),
        card(seq_dir(sd, 60, start=12), 1.0, e + 0.05, CARD, pos="50% 42%", kb={"s0": 1.0, "s1": 1.0}),
        dict(type="xcap", text="Steddion · Energy Property Configurator", x=KX, y=CAP_Y, size=30, t0=2.2, t1=e + 0.1),
    ])

    # 09. SEO, AEO & GEO: the AI answer that cites The Sandt (the site's own SEO showcase image), the cited source
    #     outlined in the gradient.
    ai = MEDIA / "showcase" / "thesandt" / "ai-answer.webp"
    k = 920 / 1420
    st[9] = story("seo", 97, 6.0, [
        kicker("SEO, AEO & GEO", 0.3, e + 0.1),
        title(["Found on Google.", "Quoted by *AI.*"], 0.45, e + 0.1),
        card(furl(ai), 1.15, e + 0.05, {"x": KX, "y": 664, "w": 920, "h": round(668 * k)}, radius=24, kb={"s0": 1.0, "s1": 1.0}, bg="#202124",
             shadow="0 30px 80px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.10)"),
        dict(type="xring", x=KX + round(648 * k), y=664 + round(174 * k), w=round(350 * k), h=round(41 * k), r=round(20 * k), sw=3, t0=2.6, d=1.3, t1=e + 0.1),
        dict(type="xcap", text="Bron: The Sandt", x=KX, y=1150, size=30, t0=3.2, t1=e + 0.1),
        sub(["Zichtbaar worden in ChatGPT,", "Perplexity en AI Overviews"], 3.7, e + 0.1, 1262, size=40, color="#e4e4ea", weight=600),
    ], dy=78)

    # 10. The call to action: a meeting room at the office, "Liever eerst even kennismaken?", then the end frame with
    #     the site's primary button "Plan een kennismaking".
    st[10] = story("kennismaking", 101, 6.0, [
        kicker("Kom langs", 0.3, e + 0.1),
        title(["Liever eerst even", "*kennismaken?*"], 0.45, e + 0.1),
        card(furl(off / "meetingroom.webp"), 1.0, e + 0.05, {"x": KX, "y": 628, "w": 920, "h": 690}, radius=26, pos="50% 55%"),
        sub(["Dat kan hier aan tafel,", "of gewoon online."], 2.3, e + 0.1, 1360, size=40, color="#e4e4ea", weight=600),
    ], dy=30, end=endframe(e, cy=820, size=280, button="Plan een kennismaking"))
    return st


def spec_of(s):
    return {"w": W, "h": H, "fps": FPS, "duration": round(s["dur"], 2), "crf": 17,
            "layers": [{"type": "plain", "color": "#030304"}] + s["layers"]}


def build(n, s, stills_only=False):
    spec = spec_of(s)
    name = f"m7-story-{n:02d}-{s['topic']}"
    if stills_only:
        ts = stills_only if isinstance(stills_only, list) else [s["still"], s["dur"] - 0.05]
        return render(spec, WORK / "stills" / f"{name}.jpg", still=ts)
    wav = WORK / f"{name}.wav"
    x = audio.song(spec["duration"], "calm", cuts=[], outro=s["outro"], hits=[], seed=s["seed"])
    audio.write(wav, x, lufs=-16)
    out = DELIVER / f"{name}.mp4"
    tmp = WORK / f"{name}.mp4"
    render(spec, tmp, wav=wav)
    shutil.move(str(tmp), out)
    render(spec, DELIVER / f"{name}.png", still=s["still"])
    wav.unlink(missing_ok=True)
    return out


if __name__ == "__main__":
    setup()
    args = sys.argv[1:]
    only_stills = bool(args) and args[0] in ("stills", "at")
    if only_stills and args[0] == "at":        # python stories22.py at 1 0.5,1.4,2.6
        only_stills = [float(x) for x in args[2].split(",")]
        args = [args[1]]
    elif only_stills:
        args = args[1:]
    allst = stories()
    ids = sorted(allst) if (not args or args == ["all"]) else [int(a) for a in args]
    DELIVER.mkdir(parents=True, exist_ok=True)
    for i in ids:
        print("story", i, allst[i]["topic"], flush=True)
        print(" ->", build(i, allst[i], stills_only=only_stills), flush=True)
