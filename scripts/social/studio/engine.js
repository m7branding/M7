/* M7 social studio: a deterministic timeline. render(t) is a pure function of time, so every
   frame is reproducible and the runner (render.mjs) can capture frame by frame. The house style
   matches the website: black, breathing pixels, aurora, glass, gradient words and the badge ring. */
(() => {
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const E = {
    linear: (t) => t,
    outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    inExpo: (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
    inOutExpo: (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2),
    outCubic: (t) => 1 - Math.pow(1 - t, 3),
    inCubic: (t) => t * t * t,
    inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    outQuint: (t) => 1 - Math.pow(1 - t, 5),
    inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
    outBack: (t) => { const c1 = 1.4, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  };
  const P = (t, t0, d, e = "outExpo") => E[e](clamp((t - t0) / Math.max(1e-6, d)));
  // seeded random
  const rng = (seed) => { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); };
  const el = (tag, cls, parent, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const M7_PATHS = [
    "M58.168 49.8125L75.7011 11.1482H62.3291L58.2315 0H88.6286L88.5968 10.7616L70.3649 49.8125H58.168Z",
    "M75.7 11.1482H62.328L58.2305 0H64.2673L75.7 11.1482Z",
    "M88.5972 10.7615L70.3653 49.8126L75.7014 11.1482L69.8398 0H88.629L88.5972 10.7615Z",
    "M70.3649 49.8109H58.168L75.7011 11.1465L70.3649 49.8109Z",
    "M0 0.119141H16.4012L27.729 32.6887H27.8682L39.2655 0.119141H55.5972V50.0311H44.7557V11.7512H44.6168L31.6905 50.0311H23.4202L10.9805 11.7512H10.8415V50.0311H0V0.119141Z",
  ];

  /* ---------- tekst met markup: *pixels* _stars_ ~shop~ ^brand^, | = nieuwe regel ---------- */
  function markup(s) {
    const lines = String(s).split("|");
    return lines.map((line) => {
      const words = [];
      const re = /(\*[^*]+\*|_[^_]+_|~[^~]+~|\^[^^]+\^|\S+)/g;
      let m;
      while ((m = re.exec(line))) {
        let w = m[1], cls = "";
        if (/^\*.*\*$/.test(w)) { cls = "g-pixels"; w = w.slice(1, -1); }
        else if (/^_.*_$/.test(w)) { cls = "g-stars"; w = w.slice(1, -1); }
        else if (/^~.*~$/.test(w)) { cls = "g-shop"; w = w.slice(1, -1); }
        else if (/^\^.*\^$/.test(w)) { cls = "g-brand"; w = w.slice(1, -1); }
        // gradient-groep met spaties: één span per woord, zelfde klasse
        for (const part of w.split(" ")) words.push({ w: part, cls });
      }
      return words;
    });
  }

  /* ---------- lagen ---------- */
  const LAYERS = {};

  /* Achtergrond: zwart, ademende pixels aan de zijkanten, zachte aurora en (optioneel) een
     wazige ambient van het beeld dat speelt. */
  LAYERS.bg = (o, S) => {
    const root = el("div", "L", S.stage);
    root.style.width = S.W + "px"; root.style.height = S.H + "px";
    const amb = [];
    for (const a of o.ambient || []) {
      const d = el("div", "bg-ambient", root);
      d.style.backgroundImage = `url("${a.src}")`;
      d.style.opacity = 0;
      amb.push({ d, ...a });
    }
    const aur = el("div", "bg-aurora", root);
    const cols = o.aurora || ["58,255,255", "0,255,25", "139,61,255"];
    const blobs = cols.map((c, i) => {
      const b = el("div", "bg-blob", aur);
      const size = [1300, 1100, 1000][i % 3];
      b.style.width = size + "px"; b.style.height = size + "px";
      b.style.background = `radial-gradient(closest-side, rgba(${c},${o.auroraStrength ?? 0.16}), rgba(${c},0))`;
      return b;
    });
    const cv = el("canvas", "px", root);
    cv.width = S.W; cv.height = S.H;
    const ctx = cv.getContext("2d");
    const R = rng(o.seed || 7);
    const STEP = 40, SIZE = 12, pts = [];
    const variant = o.pixels || "sides";
    const mask = (nx, ny) => {
      if (variant === "none") return 0;
      if (variant === "full") return 0.5;
      const edge = Math.abs(nx - 0.5) * 2;
      if (variant === "bottom") { const hill = 0.18 + 0.4 * Math.pow(edge, 1.4); return ny > 1 - hill ? Math.min(1, (ny - (1 - hill)) / 0.3) : 0; }
      const top = 0.1 + (1 - Math.pow(edge, 0.8)) * 0.85;
      const vis = ny > top ? Math.min(1, (ny - top) / 0.22) : 0;
      return vis * (edge > 0.3 ? 1 : edge / 0.3);
    };
    for (let y = STEP / 2; y < S.H; y += STEP) for (let x = STEP / 2; x < S.W; x += STEP) {
      const m = mask(x / S.W, y / S.H);
      if (m <= 0.02 || R() > 0.55 + m * 0.4) continue;
      pts.push({ x, y, nx: x / S.W, ny: y / S.H, d: Math.abs(x / S.W - 0.5) * 2, m, base: m * (0.03 + R() * 0.05) * (o.pixelIntensity ?? 1), ph: R() * 6.28 });
    }
    const vig = el("div", "bg-vignette", root);
    return {
      update(t) {
        // ambient (wazig beeld van de shot die speelt)
        for (const a of amb) {
          const on = P(t, a.t0, a.fade ?? 0.8, "inOutSine") * (1 - P(t, a.t1 - (a.fade ?? 0.8), a.fade ?? 0.8, "inOutSine"));
          a.d.style.opacity = (on * (a.opacity ?? 0.55)).toFixed(3);
          const k = (t - a.t0) / Math.max(1, a.t1 - a.t0);
          a.d.style.transform = `scale(${1.15 + 0.06 * k}) translate3d(${Math.sin(t * 0.21) * 18}px, ${Math.cos(t * 0.17) * 22}px, 0)`;
        }
        blobs.forEach((b, i) => {
          const x = S.W * (0.5 + 0.42 * Math.sin(t * (0.11 + i * 0.03) + i * 2.1)) - 600;
          const y = S.H * (0.45 + 0.38 * Math.cos(t * (0.09 + i * 0.025) + i * 1.3)) - 600;
          b.style.opacity = (0.75 + 0.25 * Math.sin(t * 0.5 + i)).toFixed(3);
          b.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${1 + 0.12 * Math.sin(t * 0.3 + i)})`;
        });
        ctx.clearRect(0, 0, S.W, S.H);
        const T = t;
        for (const p of pts) {
          const b1 = Math.pow(Math.max(0, Math.sin(p.d * 9 + T * 0.75 + p.ny * 2.4)), 12);
          const b2 = Math.pow(Math.max(0, Math.sin(p.nx * 5.5 - p.ny * 3 - T * 0.3 + 1.3)), 6);
          const breathe = 0.5 + 0.5 * Math.sin(T * 0.8 + p.ph);
          const a = Math.min(0.55, p.base * (0.7 + 0.6 * breathe) + (b1 * 0.16 + b2 * 0.08) * p.m);
          ctx.fillStyle = `rgba(${o.pixelColor || "255,255,255"},${a.toFixed(3)})`;
          ctx.fillRect(p.x - SIZE / 2, p.y - SIZE / 2, SIZE, SIZE);
        }
        vig.style.opacity = o.vignette ?? 1;
      },
    };
  };

  /* Beeld: een stil beeld of een beeldreeks (jpg per frame), als kaart of schermvullend.
     enter/exit: rise | scale | fade | tilt | ring | wipeUp | none. kb: trage push/pan. */
  LAYERS.media = (o, S) => {
    const card = el("div", "card L" + (o.frame === "full" ? " card--full" : ""), S.stage);
    const r = o.rect || { x: 0, y: 0, w: S.W, h: S.H };
    Object.assign(card.style, { left: r.x + "px", top: r.y + "px", width: r.w + "px", height: r.h + "px" });
    if (o.radius != null) card.style.borderRadius = o.radius + "px";
    const img = el("img", null, card);
    if (o.fit) img.style.objectFit = o.fit;
    if (o.pos) img.style.objectPosition = o.pos;
    const sheen = o.sheen ? el("div", "sheen", card) : null;
    let ring = null;
    if ((o.enter && o.enter.type === "ring") || (o.exit && o.exit.type === "ring")) {
      ring = el("div", "L", S.stage);
      ring.innerHTML = `<svg width="${S.W}" height="${S.H}" viewBox="0 0 ${S.W} ${S.H}"><defs><linearGradient id="rg${S.uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3AFFFF"/><stop offset="1" stop-color="#00FF19"/></linearGradient></defs><circle cx="${S.W / 2}" cy="${S.H / 2}" r="10" fill="none" stroke="url(#rg${S.uid})" stroke-width="10"/></svg>`;
      S.uid++;
    }
    let cur = "";
    const seq = o.seq;
    const srcAt = (t) => {
      if (!seq) return o.src;
      const local = Math.max(0, t - o.t0) * (seq.rate ?? 1);
      let i = Math.floor(local * seq.fps) + (seq.start || 0);
      if (seq.loop) i = (seq.start || 0) + (i - (seq.start || 0)) % seq.n; else i = Math.min(seq.n - 1, i);
      return `${seq.dir}/${String(i + 1).padStart(5, "0")}.jpg`;
    };
    return {
      async update(t) {
        const vis = t >= o.t0 - 0.001 && t <= o.t1 + 0.001;
        card.style.display = vis ? "block" : "none";
        if (ring) ring.style.display = "none";
        if (!vis) return;
        const s = srcAt(t);
        if (s !== cur) { cur = s; img.src = s; try { await img.decode(); } catch (e) {} }
        const en = o.enter || { type: "fade", d: 0.6 }, ex = o.exit || { type: "fade", d: 0.6 };
        const pi = en.type === "none" ? 1 : P(t, o.t0, en.d ?? 0.8, en.ease || "outExpo");
        const po = ex.type === "none" ? 0 : P(t, o.t1 - (ex.d ?? 0.6), ex.d ?? 0.6, ex.ease || "inOutCubic");
        let op = 1, tx = 0, ty = 0, sc = 1, rx = 0, ry = 0, clip = "none";
        const apply = (type, p, dir) => { // p 0→1 = zichtbaar
          if (type === "fade") op *= p;
          else if (type === "rise") { ty += (1 - p) * 220 * dir; op *= clamp(p * 1.6); }
          else if (type === "scale") { sc *= lerp(dir > 0 ? 0.86 : 1.08, 1, p); op *= clamp(p * 1.4); }
          else if (type === "zoom") { sc *= lerp(1.25, 1, p); op *= clamp(p * 2); }
          else if (type === "tilt") { rx += (1 - p) * 26 * dir; ty += (1 - p) * 160 * dir; sc *= lerp(0.9, 1, p); op *= clamp(p * 1.5); }
          else if (type === "slideL") { tx += (1 - p) * -S.W * dir; }
          else if (type === "slideR") { tx += (1 - p) * S.W * dir; }
          else if (type === "wipeUp") { clip = `inset(${(1 - p) * 100}% 0 0 0 round ${o.radius ?? 34}px)`; }
          else if (type === "ring") {
            const R = Math.hypot(S.W, S.H) / 2 * p * 1.02;
            const cx = S.W / 2 - r.x, cy = S.H / 2 - r.y;
            clip = `circle(${R}px at ${cx}px ${cy}px)`;
            if (ring && p < 1) { ring.style.display = "block"; const c = ring.querySelector("circle"); c.setAttribute("r", Math.max(1, R)); c.setAttribute("stroke-width", 6 + 14 * (1 - p)); ring.style.opacity = (Math.sin(p * Math.PI)).toFixed(3); }
          }
        };
        apply(en.type, pi, 1);
        if (po > 0) apply(ex.type, 1 - po, -1);
        // trage push / pan (kb) over de hele duur
        const kb = o.kb || {};
        const k = E[kb.ease || "inOutSine"](clamp((t - o.t0) / Math.max(0.01, o.t1 - o.t0)));
        const isc = lerp(kb.s0 ?? 1.06, kb.s1 ?? 1.0, k);
        const ix = lerp(kb.x0 ?? 0, kb.x1 ?? 0, k), iy = lerp(kb.y0 ?? 0, kb.y1 ?? 0, k);
        if (o.scroll) {
          const sp = E[o.scroll.ease || "inOutSine"](clamp((t - o.t0 - (o.scroll.delay ?? 0.6)) / Math.max(0.1, (o.t1 - o.t0) - (o.scroll.delay ?? 0.6) - (o.scroll.hold ?? 0.6))));
          const ih = img.naturalHeight * (r.w / Math.max(1, img.naturalWidth));
          const y = -Math.max(0, ih - r.h) * lerp(o.scroll.from ?? 0, o.scroll.to ?? 1, sp);
          img.style.height = ih + "px"; img.style.objectFit = "fill";
          img.style.transform = `translate3d(0, ${y}px, 0)`;
        } else img.style.transform = `translate3d(${ix}%, ${iy}%, 0) scale(${isc})`;
        // zweven van de kaart
        const fl = o.float ?? (o.frame === "full" ? 0 : 1);
        ty += Math.sin((t - o.t0) * 0.9) * 8 * fl;
        card.style.opacity = op.toFixed(3);
        card.style.transform = `perspective(1800px) translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg) scale(${sc})`;
        card.style.clipPath = clip;
        if (sheen) { const sp = P(t, o.t0 + (o.sheenAt ?? 0.5), 1.3, "inOutCubic"); sheen.style.transform = `translate3d(${lerp(-70, 70, sp)}%, 0, 0)`; sheen.style.opacity = sp > 0 && sp < 1 ? 1 : 0; }
      },
    };
  };

  /* Tekst: kicker, titel (woord voor woord uit een masker) en subregel. */
  LAYERS.text = (o, S) => {
    const box = el("div", "txt L", S.stage);
    Object.assign(box.style, { left: (o.x ?? 80) + "px", top: (o.y ?? 0) + "px", width: (o.w ?? S.W - 160) + "px", textAlign: o.align || "left" });
    let kick = null, title = null, sub = null;
    if (o.kicker) {
      kick = el("div", "kicker", box, `${o.align === "center" ? "" : '<span class="dash"></span>'}${o.n ? `<span class="n">${esc(o.n)}</span>` : ""}<span>${esc(o.kicker)}</span>${o.align === "center" ? "" : ""}`);
      if (o.align === "center") kick.style.justifyContent = "center";
      kick.style.marginBottom = (o.kgap ?? 34) + "px";
    }
    const words = [];
    if (o.title) {
      title = el("div", "title", box);
      title.style.fontSize = (o.size || 120) + "px";
      if (o.lh) title.style.lineHeight = o.lh;
      if (o.weight) title.style.fontWeight = o.weight;
      if (o.ls != null) title.style.letterSpacing = o.ls + "em";
      for (const line of markup(o.title)) {
        const ln = el("span", "ln", title);
        line.forEach((wd, i) => {
          const w = el("span", "w", ln);
          const wi = el("span", "wi " + wd.cls, w, esc(wd.w));
          words.push(wi);
          if (i < line.length - 1) ln.appendChild(document.createTextNode(" "));
        });
      }
    }
    if (o.sub) {
      sub = el("div", "sub", box, esc(o.sub));
      sub.style.fontSize = (o.subSize || 38) + "px";
      sub.style.marginTop = (o.sgap ?? 30) + "px";
      if (o.subColor) sub.style.color = o.subColor;
    }
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= o.t1 + 0.001;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        const st = o.stagger ?? 0.075, d = o.d ?? 0.9;
        const out = P(t, o.t1 - (o.outD ?? 0.45), o.outD ?? 0.45, "inCubic");
        if (kick) { const p = P(t, o.t0, 0.8); kick.style.opacity = (p * (1 - out)).toFixed(3); kick.style.transform = `translate3d(${(1 - p) * -40}px,0,0)`; }
        words.forEach((wi, i) => {
          const p = P(t, o.t0 + (kick ? 0.12 : 0) + i * st, d, o.ease || "outExpo");
          const y = (1 - p) * 112 - out * 112;
          wi.style.transform = `translate3d(0, ${y}%, 0) rotate(${(1 - p) * 4}deg)`;
          wi.style.opacity = o.fadeWords ? p.toFixed(3) : 1;
        });
        if (sub) { const p = P(t, o.t0 + 0.25 + words.length * st, 1.0); sub.style.opacity = (p * (1 - out)).toFixed(3); sub.style.transform = `translate3d(0, ${(1 - p) * 30}px, 0)`; sub.style.filter = `blur(${((1 - p) * 8).toFixed(1)}px)`; }
        if (o.drift) box.style.transform = `translate3d(0, ${-(t - o.t0) * o.drift}px, 0)`;
      },
    };
  };

  /* Groot, gecentreerd woord per tel (kinetische typografie). words: [{w, t, cls}] */
  LAYERS.punch = (o, S) => {
    const box = el("div", "txt L", S.stage);
    Object.assign(box.style, { left: "60px", width: S.W - 120 + "px", top: (o.y ?? S.H / 2 - 120) + "px", textAlign: "center" });
    const t1 = el("div", "title", box);
    t1.style.fontSize = (o.size || 150) + "px";
    t1.style.lineHeight = "1.0";
    const items = o.items.map((it) => {
      const lineBox = el("div", null, t1);
      lineBox.style.position = "absolute"; lineBox.style.left = 0; lineBox.style.right = 0; lineBox.style.top = 0;
      const ws = [];
      for (const line of markup(it.text)) {
        const ln = el("span", "ln", lineBox);
        line.forEach((wd, i) => { const w = el("span", "w", ln); ws.push(el("span", "wi " + wd.cls, w, esc(wd.w))); if (i < line.length - 1) ln.appendChild(document.createTextNode(" ")); });
      }
      return { ...it, lineBox, ws };
    });
    return {
      update(t) {
        let any = false;
        for (const it of items) {
          const vis = t >= it.t0 && t <= it.t1;
          it.lineBox.style.display = vis ? "block" : "none";
          if (!vis) continue;
          any = true;
          const out = P(t, it.t1 - 0.22, 0.22, "inCubic");
          it.ws.forEach((wi, i) => {
            if (o.mode === "slam") {
              const p = P(t, it.t0 + i * 0.05, 0.42, "outExpo");
              wi.style.transform = `scale(${lerp(1.5, 1, p)}) translate3d(0, ${-out * 110}%, 0)`;
              wi.style.opacity = clamp(p * 2.2).toFixed(3);
              wi.style.filter = `blur(${((1 - p) * 14).toFixed(1)}px)`;
            } else {
              const p = P(t, it.t0 + i * 0.06, 0.55, "outExpo");
              wi.style.transform = `translate3d(0, ${(1 - p) * 110 - out * 110}%, 0)`;
            }
          });
          const z = P(t, it.t0, it.t1 - it.t0, "linear");
          it.lineBox.style.transform = `scale(${1 + z * (it.zoom ?? 0.06)})`;
        }
        box.style.display = any ? "block" : "none";
      },
    };
  };

  /* Glas-pil met punt en labels. */
  LAYERS.pill = (o, S) => {
    const p = el("div", "pill L", S.stage, `<span class="dot"></span>${o.items.map(esc).join('<span class="sep">·</span>')}`);
    p.style.left = (o.x ?? 80) + "px"; p.style.top = (o.y ?? 0) + "px";
    if (o.size) p.style.fontSize = o.size + "px";
    if (o.center) { p.style.left = "50%"; }
    return {
      update(t) {
        const vis = t >= o.t0 && t <= o.t1;
        p.style.display = vis ? "inline-flex" : "none";
        if (!vis) return;
        const a = P(t, o.t0, 0.9), b = P(t, o.t1 - 0.4, 0.4, "inCubic");
        p.style.opacity = (a * (1 - b)).toFixed(3);
        p.style.transform = `${o.center ? "translateX(-50%) " : ""}translate3d(0, ${(1 - a) * 40}px, 0) scale(${lerp(0.94, 1, a)})`;
      },
    };
  };

  /* Ticker: woorden die rustig doorlopen. */
  LAYERS.ticker = (o, S) => {
    const tk = el("div", "ticker L", S.stage);
    tk.style.top = (o.y ?? 1600) + "px";
    tk.style.fontSize = (o.size || 64) + "px";
    tk.style.color = o.color || "rgba(255,255,255,.9)";
    const unit = o.words.map((w) => `<span>${esc(w)}</span><span class="star">✦</span>`).join("");
    tk.innerHTML = unit.repeat(8);
    let uw = 0;
    return {
      update(t) {
        const vis = t >= o.t0 && t <= o.t1;
        tk.style.display = vis ? "block" : "none";
        if (!vis) return;
        if (!uw) uw = tk.scrollWidth / 8;
        const x = -(((t - o.t0) * (o.speed ?? 160)) % uw) - (o.offset ?? 0);
        const a = P(t, o.t0, 0.8), b = P(t, o.t1 - 0.5, 0.5, "inCubic");
        tk.style.opacity = (a * (1 - b) * (o.opacity ?? 1)).toFixed(3);
        tk.style.transform = `translate3d(${o.reverse ? -uw - x : x}px, 0, 0)`;
      },
    };
  };

  /* Teller (01 / 05). */
  LAYERS.counter = (o, S) => {
    const c = el("div", "counter L", S.stage);
    c.style.left = (o.x ?? 80) + "px"; c.style.top = (o.y ?? 260) + "px";
    return {
      update(t) {
        const items = o.items; let cur = null;
        for (const it of items) if (t >= it.t0 && t <= it.t1) cur = it;
        c.style.display = cur ? "block" : "none";
        if (!cur) return;
        c.innerHTML = `<b>${esc(cur.n)}</b> / ${esc(o.total)}`;
        const a = P(t, cur.t0, 0.5);
        c.style.opacity = a.toFixed(3);
      },
    };
  };

  /* Logo van de klant (wit). */
  LAYERS.logo = (o, S) => {
    const im = el("img", "logo L", S.stage);
    im.src = o.src;
    Object.assign(im.style, { left: (o.x ?? 80) + "px", top: (o.y ?? 0) + "px", width: (o.w ?? 300) + "px", height: (o.h ?? 90) + "px" });
    if (o.align === "left") im.style.objectPosition = "left center";
    return {
      update(t) {
        const vis = t >= o.t0 && t <= o.t1;
        im.style.display = vis ? "block" : "none";
        if (!vis) return;
        const a = P(t, o.t0, 1.0), b = P(t, o.t1 - 0.4, 0.4, "inCubic");
        im.style.opacity = (a * (1 - b) * (o.opacity ?? 1)).toFixed(3);
        im.style.transform = `translate3d(0, ${(1 - a) * 24}px, 0)`;
        im.style.filter = `blur(${((1 - a) * 10).toFixed(1)}px)`;
      },
    };
  };

  /* Glaskaart met gekleurde bovenrand en tekst (diensten, cijfers). */
  LAYERS.gcard = (o, S) => {
    const g = el("div", "gcard L", S.stage, `<div class="bar" style="background:${o.bar || "var(--g-brand)"}"></div><div class="gc-k">${esc(o.kicker || "")}</div><div class="gc-t">${o.titleHtml || esc(o.title || "")}</div>`);
    const r = o.rect;
    Object.assign(g.style, { left: r.x + "px", top: r.y + "px", width: r.w + "px", height: r.h + "px" });
    if (o.titleSize) g.querySelector(".gc-t").style.fontSize = o.titleSize + "px";
    return {
      update(t) {
        const vis = t >= o.t0 && t <= o.t1;
        g.style.display = vis ? "block" : "none";
        if (!vis) return;
        const a = P(t, o.t0, 0.9, "outExpo"), b = P(t, o.t1 - 0.45, 0.45, "inCubic");
        g.style.opacity = (a * (1 - b)).toFixed(3);
        g.style.transform = `perspective(1600px) translate3d(0, ${(1 - a) * 140 + Math.sin((t - o.t0) * 1.1 + (o.phase || 0)) * 6}px, 0) rotateX(${(1 - a) * 18}deg) scale(${lerp(0.92, 1, a)})`;
      },
    };
  };

  /* Pixel-overgang: vierkantjes in de merkkleuren dekken het beeld af en lossen weer op. */
  LAYERS.pixelwipe = (o, S) => {
    const cv = el("canvas", "px L", S.stage);
    cv.width = S.W; cv.height = S.H;
    const ctx = cv.getContext("2d");
    const SZ = o.size || 60, cols = Math.ceil(S.W / SZ), rows = Math.ceil(S.H / SZ);
    const R = rng(o.seed || 11);
    const cells = [];
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const diag = (x / cols * 0.45 + (1 - y / rows) * 0.55);
      cells.push({ x, y, d: diag * 0.6 + R() * 0.4, hue: R() });
    }
    return {
      update(t) {
        const d = o.d ?? 0.7;
        const vis = t >= o.t - d / 2 && t <= o.t + d / 2;
        cv.style.display = vis ? "block" : "none";
        if (!vis) return;
        ctx.clearRect(0, 0, S.W, S.H);
        const u = (t - (o.t - d / 2)) / d; // 0..1
        for (const c of cells) {
          const cover = clamp((u * 2 - c.d * 0.8) / 0.25);
          const reveal = clamp(((u - 0.5) * 2 - c.d * 0.8) / 0.25);
          const s = cover * (1 - reveal);
          if (s <= 0.01) continue;
          const sz = SZ * (0.25 + 0.75 * s);
          // merkverloop van boven (teal) naar onder (groen), donker in de kern zodat de cut verborgen blijft
          const gy = c.y / rows;
          const r1 = Math.round(58 * (1 - gy)), g1 = 255, b1 = Math.round(255 * (1 - gy) + 25 * gy);
          const core = s > 0.92 && c.hue > 0.35;
          ctx.fillStyle = core ? `rgba(3,3,4,1)` : `rgba(${r1},${g1},${b1},${(0.25 + 0.7 * s).toFixed(3)})`;
          ctx.fillRect(c.x * SZ + (SZ - sz) / 2, c.y * SZ + (SZ - sz) / 2, sz, sz);
        }
      },
    };
  };

  /* Lichtflits / sweep over het hele beeld (glas). */
  LAYERS.flash = (o, S) => {
    const f = el("div", "L", S.stage);
    Object.assign(f.style, { width: S.W + "px", height: S.H + "px", background: o.color || "#fff", mixBlendMode: "screen" });
    return { update(t) { const a = Math.max(0, 1 - Math.abs(t - o.t) / (o.d ?? 0.18)); f.style.display = a > 0 ? "block" : "none"; f.style.opacity = (a * (o.max ?? 0.35)).toFixed(3); } };
  };

  /* De gradient-ring (cirkel waarin het verloop rondloopt), los te gebruiken als accent. */
  LAYERS.ring = (o, S) => {
    const d = el("div", "L", S.stage);
    const R = o.r || 300, sw = o.sw || 6;
    d.innerHTML = `<svg width="${S.W}" height="${S.H}"><defs><linearGradient id="rr${S.uid}" gradientUnits="userSpaceOnUse" x1="${o.cx - R}" y1="${o.cy - R}" x2="${o.cx + R}" y2="${o.cy + R}"><stop offset="0" stop-color="#3AFFFF"/><stop offset="0.5" stop-color="#00FF19"/><stop offset="1" stop-color="#3AFFFF" stop-opacity="0.1"/></linearGradient></defs><circle cx="${o.cx}" cy="${o.cy}" r="${R}" fill="none" stroke="url(#rr${S.uid})" stroke-width="${sw}" stroke-linecap="round" pathLength="1" stroke-dasharray="1 1"/></svg>`;
    S.uid++;
    const c = d.querySelector("circle"), g = d.querySelector("linearGradient");
    return {
      update(t) {
        const vis = t >= o.t0 && t <= o.t1;
        d.style.display = vis ? "block" : "none";
        if (!vis) return;
        const a = P(t, o.t0, o.draw ?? 1.4, "inOutCubic"), b = P(t, o.t1 - 0.5, 0.5, "inCubic");
        c.setAttribute("stroke-dashoffset", (1 - a).toFixed(4));
        g.setAttribute("gradientTransform", `rotate(${(t * (o.spin ?? 90)) % 360} ${o.cx} ${o.cy})`);
        d.style.opacity = (1 - b).toFixed(3);
        c.setAttribute("transform", `rotate(-90 ${o.cx} ${o.cy})`);
      },
    };
  };

  /* M7-outro: het logo tekent zich, vult zich, de gradient-ring sluit, een glans; daaronder de payoff. */
  LAYERS.outro = (o, S) => {
    const root = el("div", "outro L", S.stage);
    root.style.width = S.W + "px"; root.style.height = S.H + "px";
    const dim = el("div", "L", root);
    Object.assign(dim.style, { width: S.W + "px", height: S.H + "px", background: "#030304" });
    const size = o.size || 420;
    const cx = S.W / 2, cy = o.cy || S.H * 0.43;
    const svg = el("div", "L", root);
    const id = "ob" + S.uid++;
    svg.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 147 147" style="position:absolute;left:${cx - size / 2}px;top:${cy - size / 2}px;overflow:visible">
      <defs>
        <linearGradient id="${id}g" x1="73.4" y1="0" x2="73.4" y2="147" gradientUnits="userSpaceOnUse"><stop stop-color="#3AFFFF"/><stop offset="1" stop-color="#00FF19"/></linearGradient>
        <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.5" stop-color="#fff" stop-opacity="0.95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
        <clipPath id="${id}c"><g transform="translate(30.69 51.25)">${M7_PATHS.map((d) => `<path d="${d}"/>`).join("")}</g></clipPath>
        <filter id="${id}f" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <circle class="disc" cx="73.415" cy="73.415" r="66.4" fill="#000"/>
      <circle class="glow" cx="73.415" cy="73.415" r="69.9" fill="none" stroke="url(#${id}g)" stroke-width="7" pathLength="1" stroke-dasharray="1 1" filter="url(#${id}f)" opacity="0.8" transform="rotate(-90 73.415 73.415)"/>
      <circle class="ring" cx="73.415" cy="73.415" r="69.9" fill="none" stroke="url(#${id}g)" stroke-width="7" pathLength="1" stroke-dasharray="1 1" stroke-linecap="round" transform="rotate(-90 73.415 73.415)"/>
      <g transform="translate(30.69 51.25)">
        <g class="lined" fill="none" stroke="#fff" stroke-width="1.1" stroke-linejoin="round">${M7_PATHS.map((d) => `<path d="${d}" pathLength="1" stroke-dasharray="1 1"/>`).join("")}</g>
        <g class="fill" fill="#fff">${M7_PATHS.map((d) => `<path d="${d}"/>`).join("")}</g>
      </g>
      <g clip-path="url(#${id}c)"><rect class="sh" x="-60" y="40" width="50" height="70" fill="url(#${id}s)"/></g>
    </svg>`;
    const q = (s) => svg.querySelector(s);
    const ring = q(".ring"), glow = q(".glow"), lined = [...svg.querySelectorAll(".lined path")], fill = q(".fill"), sh = q(".sh"), disc = q(".disc"), grad = q(`#${id}g`);
    const pay = el("div", "payoff L", root);
    pay.style.top = cy + size / 2 + 90 + "px"; pay.style.width = S.W + "px";
    pay.style.fontSize = (o.paySize || 76) + "px";
    const payWords = [];
    for (const line of markup(o.payoff || "Welcome to our *world.*")) {
      const ln = el("span", "ln", pay);
      line.forEach((wd, i) => { const w = el("span", "w", ln); payWords.push(el("span", "wi " + wd.cls, w, esc(wd.w))); if (i < line.length - 1) ln.appendChild(document.createTextNode(" ")); });
    }
    const url = el("div", "url L", root, esc(o.url || "m7branding.com"));
    url.style.top = cy + size / 2 + 90 + (o.paySize || 76) * 1.25 * (o.payoff || "").split("|").length + 46 + "px"; url.style.width = S.W + "px";
    return {
      update(t) {
        const t0 = o.t0, vis = t >= t0;
        root.style.display = vis ? "block" : "none";
        if (!vis) return;
        const u = t - t0;
        dim.style.opacity = (o.dim === false ? 0 : P(u, 0, 0.5, "inOutCubic") * (o.dimMax ?? 0.0)).toFixed(3);
        // 1) lijnen tekenen (0.0–1.0), 2) vullen (0.8–1.3), 3) ring sluit (0.9–1.8), 4) glans (1.7–2.4)
        lined.forEach((p, i) => { const a = P(u, 0.05 + i * 0.07, 0.9, "inOutCubic"); p.setAttribute("stroke-dashoffset", (1 - a).toFixed(4)); });
        const lf = P(u, 0.85, 0.5, "outCubic");
        svg.querySelector(".lined").style.opacity = (1 - P(u, 1.1, 0.4)).toFixed(3);
        fill.style.opacity = lf.toFixed(3);
        const rp = P(u, 0.75, 1.1, "inOutCubic");
        ring.setAttribute("stroke-dashoffset", (1 - rp).toFixed(4));
        glow.setAttribute("stroke-dashoffset", (1 - rp).toFixed(4));
        glow.setAttribute("opacity", (0.35 + 0.45 * Math.sin(u * 2.2) ** 2).toFixed(3));
        grad.setAttribute("gradientTransform", `rotate(${(u * 70) % 360} 73.4 73.4)`);
        disc.setAttribute("opacity", P(u, 0.2, 0.6).toFixed(3));
        const sp = P(u, 1.75, 0.8, "inOutCubic");
        sh.setAttribute("x", lerp(-60, 160, sp).toFixed(1));
        const pop = P(u, 0.0, 1.9, "outExpo");
        svg.style.transform = `translate3d(0, ${(1 - pop) * 30}px, 0) scale(${lerp(0.9, 1, pop)})`;
        payWords.forEach((wi, i) => { const p = P(u, 1.35 + i * 0.09, 0.9); wi.style.transform = `translate3d(0, ${(1 - p) * 112}%, 0)`; });
        const pu = P(u, 1.9, 0.9);
        url.style.opacity = pu.toFixed(3);
        url.style.transform = `translate3d(0, ${(1 - pu) * 20}px, 0)`;
      },
    };
  };

  /* Groot cijfer dat optelt (cijfers van M7). */
  LAYERS.stat = (o, S) => {
    const box = el("div", "txt L", S.stage);
    Object.assign(box.style, { left: (o.x ?? 80) + "px", top: (o.y ?? 600) + "px", width: (o.w ?? S.W - 160) + "px", textAlign: o.align || "left" });
    const num = el("div", "title " + (o.cls || "g-pixels"), box);
    num.style.fontSize = (o.size || 260) + "px"; num.style.lineHeight = "0.95";
    const lab = el("div", "sub", box, esc(o.label || ""));
    lab.style.fontSize = (o.labelSize || 46) + "px"; lab.style.color = "#fff"; lab.style.fontWeight = 700; lab.style.marginTop = "18px";
    return {
      update(t) {
        const vis = t >= o.t0 && t <= o.t1;
        box.style.display = vis ? "block" : "none";
        if (!vis) return;
        const p = P(t, o.t0, o.count ?? 1.3, "outExpo"), out = P(t, o.t1 - 0.35, 0.35, "inCubic");
        num.textContent = Math.round(o.value * p).toLocaleString("nl-NL") + (o.suffix || "");
        const a = P(t, o.t0, 0.5);
        box.style.opacity = (a * (1 - out)).toFixed(3);
        box.style.transform = `translate3d(0, ${(1 - a) * 60 - out * 60}px, 0)`;
        const lp = P(t, o.t0 + 0.35, 0.7);
        lab.style.opacity = lp.toFixed(3); lab.style.transform = `translate3d(0, ${(1 - lp) * 24}px, 0)`;
      },
    };
  };

  /* Logo-reeks: wit logo knalt in beeld, heel even in het eigen merkvlak. */
  LAYERS.logoseq = (o, S) => {
    const root = el("div", "L", S.stage);
    const items = o.items.map((it) => {
      const tile = el("div", "L", root);
      Object.assign(tile.style, { width: S.W + "px", height: S.H + "px", background: it.bg || "#000", backgroundImage: it.tile ? `url("${it.tile}")` : "none", backgroundSize: "cover", backgroundPosition: "center" });
      const im = el("img", "logo L", root);
      im.src = it.src;
      const lw = o.w || 640, lh = o.h || 300;
      Object.assign(im.style, { left: (S.W - lw) / 2 + "px", top: (o.cy || S.H / 2) - lh / 2 + "px", width: lw + "px", height: lh + "px" });
      return { ...it, tile, im };
    });
    return {
      update(t) {
        for (const it of items) {
          const vis = t >= it.t0 && t < it.t1;
          it.tile.style.display = it.im.style.display = vis ? "block" : "none";
          if (!vis) continue;
          const p = P(t, it.t0, 0.32, "outExpo");
          const mid = (it.t0 + it.t1) / 2;
          const showTile = it.tile && t > mid;
          it.tile.style.opacity = showTile ? (o.tileOpacity ?? 1) : 0;
          it.im.style.opacity = showTile ? 0 : 1;
          it.im.style.transform = `scale(${lerp(1.25, 1, p)})`;
          it.im.style.filter = `blur(${((1 - p) * 10).toFixed(1)}px)`;
        }
      },
    };
  };

  /* Statische M7-badge (emblem in de gradient-ring). */
  LAYERS.badge = (o, S) => {
    const d = el("div", "L", S.stage);
    const id = "bd" + S.uid++;
    const sz = o.size || 120;
    d.innerHTML = `<svg width="${sz}" height="${sz}" viewBox="0 0 147 147" style="position:absolute;left:${o.x}px;top:${o.y}px"><defs><linearGradient id="${id}" x1="73.4" y1="0" x2="73.4" y2="147" gradientUnits="userSpaceOnUse"><stop stop-color="#3AFFFF"/><stop offset="1" stop-color="#00FF19"/></linearGradient></defs><circle cx="73.415" cy="73.415" r="66.4" fill="#000"/><circle cx="73.415" cy="73.415" r="69.9" fill="none" stroke="url(#${id})" stroke-width="7"/><g transform="translate(30.69 51.25)" fill="#fff">${M7_PATHS.map((p) => `<path d="${p}"/>`).join("")}</g></svg>`;
    return { update(t) { const vis = t >= (o.t0 ?? 0) && t <= (o.t1 ?? 1e9); d.style.display = vis ? "block" : "none"; if (vis && o.t0 != null) { const a = P(t, o.t0, 0.8); d.style.opacity = a.toFixed(3); d.style.transform = `scale(${lerp(0.85, 1, a)})`; } } };
  };

  /* Vrije HTML-tekst (sterren, swipe-hint, quote), statisch of met een zachte fade. */
  LAYERS.html = (o, S) => {
    const d = el("div", "txt L", S.stage, o.html);
    Object.assign(d.style, { left: (o.x ?? 80) + "px", top: (o.y ?? 0) + "px", width: (o.w ?? S.W - 160) + "px" }, o.style || {});
    return { update(t) { const vis = t >= (o.t0 ?? 0) && t <= (o.t1 ?? 1e9); d.style.display = vis ? "block" : "none"; if (vis) { const a = P(t, o.t0 ?? 0, 0.9); d.style.opacity = a.toFixed(3); d.style.transform = `translate3d(0, ${(1 - a) * 24}px, 0)`; } } };
  };

  /* ---------- engine ---------- */
  const M7 = {
    async init(spec) {
      const S = { W: spec.w || 1080, H: spec.h || 1920, uid: 1 };
      S.stage = document.getElementById("stage");
      S.stage.style.width = S.W + "px"; S.stage.style.height = S.H + "px";
      M7.S = S; M7.spec = spec;
      M7.layers = spec.layers.map((l) => LAYERS[l.type](l, S));
      await document.fonts.ready;
      await document.fonts.load('800 100px "Montserrat"');
      await document.fonts.load('600 100px "Montserrat"');
      // preload stills
      const stills = spec.layers.filter((l) => l.type === "media" && l.src).map((l) => l.src);
      await Promise.all(stills.map((s) => new Promise((res) => { const i = new Image(); i.onload = i.onerror = res; i.src = s; })));
      return true;
    },
    async render(t) {
      await Promise.all(M7.layers.map((l) => l.update(t)));
      return true;
    },
  };
  window.M7 = M7;
})();
