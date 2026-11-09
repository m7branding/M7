"""Round 25: "next level" project reels from the premium 3D visuals M7 already rendered per project.

Owner (Dutch): "En next level project reels waarbij we premium beelden nemen zoals je eerder ook hebt gemaakt."

The round-24 minimal system (social24.py), stretched over a reel of ~24 s:
- the dark site background, ONE soft breathing teal glow that drifts slowly with the visual, the M7 badge top left on
  the left text edge (x = 88); it stays for the whole reel and at the end glides down into the clean end frame
  (badge + m7branding.com);
- open calm: the project's name and one short line from the case data, then 3-5 premium shots: the r-flow clips
  (3D device scenes with the real UI moving) and the r-stills, as large cards on the left edge running off the right
  and/or the bottom, with slow Ken Burns moves and soft focus transitions; where M7 did the branding, a brand moment
  (logo + the verified palette from src/content/palettes.ts, or M7's own brand renders);
- clips are shown at (or under) their native 1080 px height so they stay sharp; stills (2000x1333) up to ~1.1x.

Every reel: 1080x1920, 60 fps, the calm music bed (audio.song "calm"), plus a PNG cover.

  python reels25.py list                       the reels and their durations
  python reels25.py stills <slug> [t,t,...]    layout check (jpgs into the work folder)
  python reels25.py render <slug> [...]        render mp4 + png into the delivery folder (all when no slug)
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import audio  # noqa: E402
import social24 as s24  # noqa: E402
import stories22 as s22  # noqa: E402

S = s22.S
WORK = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r25w-reels")
OUT = S / "r25" / "deliver"
DELIVER = OUT / "reels-premium"
CAPS = OUT / "captions"
REPO = s22.REPO
CASES = REPO / "public" / "media" / "cases"
FPS = 60
KX = 88
W, H = 1080, 1920
MUTED = s24.MUTED

# ---------------------------------------------------------------- extra layers (this module only)
REEL_JS = r"""
  const keyed = (keys, t, props) => {
    // keys: [{t, d, ...props}]: from key.t the values move to the key's values over key.d seconds (inOutCubic)
    const cur = {}; props.forEach((p) => (cur[p] = keys[0][p]));
    for (let i = 1; i < keys.length; i++) {
      const k = keys[i];
      if (t <= k.t) break;
      const p = E.inOutCubic(clamp((t - k.t) / Math.max(1e-6, k.d || 1)));
      props.forEach((q) => { if (k[q] != null) cur[q] = lerp(cur[q], k[q], p); });
    }
    return cur;
  };

  /* round 25: the M7 badge that stays top left for the whole reel and glides into the end frame */
  X.rbadge = (o, S, host) => {
    const id = "rb" + uid++, base = o.base || 160;
    const d = el("div", "x-abs", host, (o.svg || "").replace(/paint0_linear_8099_62703/g, id).replace('width="147" height="147"', `width="${base}" height="${base}"`));
    Object.assign(d.style, { left: "0px", top: "0px", width: base + "px", height: base + "px", transformOrigin: "0 0" });
    return {
      update(t) {
        const a = P(t, o.t0 || 0, 1.1, "outQuart");
        const k = keyed(o.keys, t, ["x", "y", "s"]);
        const sc = (k.s / base) * lerp(0.94, 1, a);
        d.style.opacity = a.toFixed(3);
        d.style.transform = `translate3d(${k.x.toFixed(2)}px, ${k.y.toFixed(2)}px, 0) scale(${sc.toFixed(4)})`;
        d.style.filter = a < 0.995 ? `blur(${((1 - a) * 5).toFixed(2)}px)` : "none";
      },
    };
  };

  /* round 25: the one soft teal glow, breathing, drifting slowly between key positions */
  X.rglow = (o, S, host) => {
    const d = el("div", "x-abs x-glow", host);
    const R = 1000;
    Object.assign(d.style, { left: "0px", top: "0px", width: 2 * R + "px", height: 2 * R + "px", transformOrigin: "50% 50%",
      background: `radial-gradient(closest-side, rgba(58,255,255,1) 0%, rgba(34,255,180,0.45) 38%, rgba(3,3,4,0) 100%)` });
    return {
      update(t) {
        const k = keyed(o.keys, t, ["cx", "cy", "r", "a"]);
        const a = P(t, 0, 2.2, "inOutSine");
        const b = Math.sin((t / 7) * Math.PI * 2);
        d.style.opacity = (k.a * a * (0.88 + 0.12 * b)).toFixed(4);
        d.style.transform = `translate3d(${(k.cx - R).toFixed(1)}px, ${(k.cy - R).toFixed(1)}px, 0) scale(${((k.r / R) * (1 + 0.035 * b)).toFixed(4)})`;
      },
    };
  };

  /* round 25: palette chips (the verified case palette), each with its hex value; calm stagger, soft exit */
  X.rchips = (o, S, host) => {
    const box = el("div", "x-abs r-chips", host);
    Object.assign(box.style, { left: o.x + "px", top: o.y + "px", gap: (o.gap || 34) + "px" });
    const items = o.colors.map((c) => {
      const it = el("div", "r-chip", box, `<span class="r-dot"></span><span class="r-hex">${esc(c.toUpperCase())}</span>`);
      const dot = it.querySelector(".r-dot");
      Object.assign(dot.style, { width: o.size + "px", height: o.size + "px", background: c });
      return it;
    });
    return {
      update(t) {
        const vis = t >= o.t0 - 0.001 && t <= (o.t1 ?? 1e9) + 0.001;
        box.style.display = vis ? "flex" : "none";
        if (!vis) return;
        items.forEach((it, i) => {
          const p = P(t, o.t0 + i * (o.st ?? 0.16), 1.0, "outQuart");
          it.style.opacity = p.toFixed(3);
          it.style.transform = `translate3d(0, ${((1 - p) * 18).toFixed(2)}px, 0)`;
          it.style.filter = p < 0.995 ? `blur(${((1 - p) * 4).toFixed(2)}px)` : "none";
        });
        const q = o.t1 != null ? P(t, o.t1 - 0.7, 0.7, "inOutSine") : 0;
        box.style.opacity = (1 - q).toFixed(3);
        box.style.filter = q > 0.005 ? `blur(${(q * 8).toFixed(2)}px)` : "none";
      },
    };
  };
"""

REEL_CSS = """
.r-chips { display: flex; align-items: flex-start; }
.r-chip { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; }
.r-dot { display: block; border-radius: 50%; box-shadow: inset 0 0 0 1.5px rgba(255,255,255,0.16), 0 18px 40px -18px rgba(0,0,0,0.9); }
.r-hex { font-weight: 600; font-size: 22px; letter-spacing: 0.06em; color: #8d8d96; font-variant-numeric: tabular-nums; }
"""


def install():
    s24.WORK = WORK
    s24.OUT = OUT
    s24.install()                               # round-24 layers (glow, badge, pill, rows) on the round-22 page
    if "X.rbadge" not in s22.X_JS:
        s22.X_JS = s22.X_JS.replace("  window.M7 = {", REEL_JS + "\n  window.M7 = {")
        s22.X_CSS = s22.X_CSS + REEL_CSS
    s22.WORK = WORK
    s22.setup()


# ---------------------------------------------------------------- material
def case(slug, name):
    p = CASES / slug / name
    if not p.exists():
        raise FileNotFoundError(p)
    return p


def ffprobe_dur(p):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)], capture_output=True, text=True)
    return float(r.stdout.strip())


def clip(slug, name, t0, dur, h=1080, crop=None):
    """A real clip as a 30 fps jpg sequence, scaled to height h (at most native, so it stays sharp)."""
    src = case(slug, name)
    total = ffprobe_dur(src)
    dur = min(dur, total - t0 - 0.02)
    tag = f"{slug}-{Path(name).stem}-{t0:.2f}-{dur:.2f}-{h}" + (f"-c{'x'.join(map(str, crop))}" if crop else "")
    d = WORK / "frames" / tag
    if not (d.exists() and any(d.glob("*.jpg"))):
        d.mkdir(parents=True, exist_ok=True)
        vf = (f"crop={crop[2]}:{crop[3]}:{crop[0]}:{crop[1]}," if crop else "") + f"fps=30,scale=-2:{h}:flags=lanczos"
        s24.ff("-ss", f"{t0:.3f}", "-t", f"{dur:.3f}", "-i", src, "-vf", vf, "-q:v", "3", d / "%05d.jpg")
    return s22.seq_dir(d, 30)


def furl(slug, name):
    return s22.furl(case(slug, name))


# ---------------------------------------------------------------- layout helpers
SHADOW = "0 50px 110px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.08)"


def enter_focus(d=1.5, blur=16, s0=1.0, fade=1.6):
    return {"type": "focus", "d": d, "ease": "inOutSine", "blur": blur, "s0": s0, "fade": fade}


def exit_focus(d=1.1, blur=14):
    return {"type": "focus", "d": d, "ease": "inOutSine", "blur": blur, "fade": 1.0}


def card(rect, t0, t1, src=None, seq=None, rate=1.0, kb=None, pos="50% 50%", fit="cover", radius=26, bg="#0b0b0e",
         enter=None, exit_=None, shadow=None):
    m = {"type": "media", "t0": t0, "t1": t1, "rect": dict(zip("xywh", rect)) if isinstance(rect, (list, tuple)) else rect,
         "frame": "card", "radius": radius, "float": 0, "fit": fit, "pos": pos,
         "enter": enter or enter_focus(), "exit": exit_ or exit_focus(),
         "kb": kb or {"s0": 1.0, "s1": 1.0}, "shadow": shadow or SHADOW, "bg": bg}
    if seq is not None:
        m["seq"] = dict(seq, rate=rate)
    else:
        m["src"] = src
    return m


def kb(s0=1.0, s1=1.05, x0=0, x1=0, y0=0, y1=0, ease="inOutSine"):
    return {"s0": s0, "s1": s1, "x0": x0, "x1": x1, "y0": y0, "y1": y1, "ease": ease}


def text(lines, y, t0, t1=None, size=72, weight=800, color="#f6f6f8", x=KX, lh=1.08, ls=-0.03, st=0.05, blur=5, out=0.7):
    return dict(type="xtext", lines=[{"t": s} for s in lines], t0=t0, t1=t1 if t1 is not None else 1e9, outD=out, x=x, y=round(y),
                w=W - 2 * KX, size=size, weight=weight, color=color, ls=ls, lh=lh, st=st, d=1.1, blur=blur)


def head(title, body, bottom=None, top=None, t0=0.35, t1=None, tsize=72, bsize=38, gap=26):
    """Title + muted body as one block, either ending at `bottom` or starting at `top`."""
    th = len(title) * tsize * 1.08
    bh = len(body) * bsize * 1.42 if body else 0
    y0 = top if top is not None else bottom - th - (gap + bh if body else 0)
    out = [text(title, y0, t0, t1, size=tsize)]
    if body:
        out.append(text(body, y0 + th + gap, t0 + 0.5, t1, size=bsize, weight=500, color=MUTED, lh=1.42, ls=-0.005, st=0.025, blur=4))
    return out


def line(lines, y, t0, t1, size=46, color="#f6f6f8"):
    """A short line of real copy mid-reel (bold, smaller than a title)."""
    return text(lines, y, t0, t1, size=size, weight=700, color=color, lh=1.2, ls=-0.02, st=0.04)


def logo_card(slug, logo, rect, t0, t1, bg, scale=0.42, radius=26):
    """Brand moment: the client's white logo on its verified brand colour."""
    return card(rect, t0, t1, src=furl(slug, logo), fit="contain", bg=bg, radius=radius, kb={"s0": scale, "s1": scale * 1.04},
                enter=enter_focus(d=1.6, blur=18), shadow="0 50px 110px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)")


def chips(colors, y, t0, t1, size=86, x=KX):
    return dict(type="rchips", colors=colors, x=x, y=y, size=size, t0=t0, t1=t1, gap=40)


END_D = 3.4                       # the clean end frame: from the badge's glide to the last frame


def frame(dur, glow_keys, layers):
    """Background, the glow, the content, the badge (top left for the whole reel, gliding into the end frame) and the
    end frame's url."""
    te = dur - END_D
    badge = dict(type="rbadge", svg=s24.BADGE_SVG, base=180, t0=0.05,
                 keys=[{"t": 0, "x": KX, "y": 250, "s": 104}, {"t": te + 0.25, "d": 1.5, "x": KX, "y": 760, "s": 168}])
    url = text(["m7branding.com"], 976, te + 1.15, None, size=40, weight=600, color="#c9c9d0", ls=0.0, st=0.0, blur=4)
    glow = dict(type="rglow", keys=glow_keys + [{"t": te - 0.2, "d": 1.8, "cx": 300, "cy": 880, "r": 880, "a": 0.13}])
    return [{"type": "plain", "color": "#030304"}, glow, *layers, badge, url]


# ---------------------------------------------------------------- the reels
# Geometry used below (1080 x 1920; IG keeps the top ~250 px and the bottom ~340 px for its own UI):
#   badge 88,250 (104 px); text from y ~430 down; visuals on x = 88, running off the right and/or the bottom.
#   A 1920x1080 clip at h <= 1080 (cover) keeps its native sharpness; a 2000x1333 still up to h ~1460.

# Shot grammar (times in s): a shot's visual enters with a focus pull (blur easing off) and leaves with a soft
# focus-out; the next one starts ~0.8 s before the previous one ends. Text leaves with a blur-out before its visual.
TALL_STILL = (KX, 450, 1120, 1470)      # a 2000x1333 still, tall, off the right and the bottom (~1.1x)
TALL_CLIP = (KX, 470, 1240, 1080)       # a 1920x1080 clip at native size, off the right
LOW_CLIP = (KX, 640, 1240, 1080)        # the same under a line of copy, off the right (and the bottom)
OPEN_LOW = (KX, 860, 1300, 1080)        # opening: under the name + line, off the right and the bottom
OPEN_TOP = (KX, 430, 1300, 800)         # opening: above the name + line (O2)
WIDE = (KX, 640, 1400, 788)             # a 16:9 still under a line of copy, off the right
WIDE_HI = (KX, 520, 1400, 933)          # a 3:2 still, off the right
PAGE = (KX, 650, 1000, 563)             # a flat 16:9 page (brand sheet, brandbook page) in full, flush with the right edge
LINE_Y = 440


def ld(t0, t1):
    """A line of copy: in shortly after its visual, out before it."""
    return dict(t0=t0 + 0.6, t1=t1 - 0.5)


def r_atl():
    slug, D = "atl-plus", 27.0
    te = D - END_D
    L = [
        *head(["ATL+"], ["Het nationale e-learningplatform", "voor atletiek, voor de Atletiekunie."], bottom=780, t1=5.9),
        card(OPEN_LOW, 0.9, 6.6, seq=clip(slug, "r-flow-1.mp4", 0.0, 5.8), pos="22% 50%", kb=kb(1.0, 1.04), bg="#d9d9d9"),
        line(["Leerlijnen per onderdeel,", "stap voor stap uitgelegd met video."], LINE_Y, **ld(5.8, 11.8), size=42),
        card(LOW_CLIP, 5.8, 11.8, seq=clip(slug, "r-flow-2.mp4", 0.3, 6.1), pos="12% 50%", kb=kb(1.03, 1.0), bg="#0a2440"),
        card(TALL_STILL, 11.0, 16.6, src=furl(slug, "r-07-d05-phone-lean-b.webp"), kb=kb(1.0, 1.04, 0, -2, 0, -1), bg="#02294a"),
        line(["Een eigen logo en huisstijl,", "in blauw met oranje als accent."], LINE_Y, **ld(15.8, 21.4), size=42),
        logo_card(slug, "logo-white.png", (KX, 640, 1180, 660), 15.8, 21.4, "#02294A", scale=0.24),
        chips(["#02294A", "#FFFFFF"], 1380, 17.0, 20.9),
        card(WIDE_HI, 20.6, te + 0.7, src=furl(slug, "r-15-d10-tablets-iso-c.webp"), pos="0% 50%", kb=kb(1.04, 1.04, 0, -4), bg="#d8d8d8"),
    ]
    glow = [{"t": 0, "cx": 860, "cy": 1400, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=101, cover=4.2, layers=frame(D, glow, L))


def r_teamtv():
    slug, D = "teamtv", 25.0
    te = D - END_D
    L = [
        *head(["TeamTV"], ["Streamen, analyseren en publiceren", "in één schaalbaar platform."], bottom=780, t1=5.7),
        card((KX, 860, 1000, 1080), 0.9, 6.4, src=furl(slug, "r-04-b06-wall-logo-a.webp"), pos="50% 50%", kb=kb(1.0, 1.05), bg="#5650a3"),
        card(TALL_CLIP, 5.6, 11.6, seq=clip(slug, "r-flow-2.mp4", 1.0, 6.1), pos="4% 50%", kb=kb(1.0, 1.03), bg="#e9e9ee"),
        # two cards: the iPads leaning (back, from x 300) and the phone trio with the floating UI (front, on the edge)
        card((300, 480, 1300, 866), 10.8, 16.4, src=furl(slug, "r-01-d17-ipads-lean-b.webp"), pos="30% 50%", kb=kb(1.02, 1.06), bg="#d9d9dc"),
        card((KX, 1010, 600, 960), 11.4, 16.4, src=furl(slug, "r-14-d16-phone-plinth-a.webp"), pos="50% 50%", kb=kb(1.0, 1.04),
             bg="#cfcfcf", shadow="0 50px 120px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.10)"),
        line(["Een schaalbaar designsysteem en", "een nieuwe UI/UX voor de web-app."], LINE_Y, **ld(15.6, te + 0.7), size=42),
        card((KX, 640, 1400, 933), 15.6, te + 0.7, src=furl(slug, "r-61-brand-booklet.webp"), pos="50% 50%", kb=kb(1.0, 1.06, 0, -3), bg="#dcdcdc"),
    ]
    glow = [{"t": 0, "cx": 800, "cy": 1420, "r": 900, "a": 0.10}, {"t": 6, "d": 4, "cx": 640, "cy": 1050, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=102, cover=4.2, layers=frame(D, glow, L))


def r_calvin():
    slug, D = "calvin-vlaanderen", 25.0
    te = D - END_D
    L = [
        card(OPEN_TOP, 0.9, 6.4, src=furl(slug, "r-17-b06-wall-logo-c.webp"), pos="20% 50%", kb=kb(1.0, 1.06, 0, 1.5), bg="#070707"),
        *head(["CV10"], ["Branding en de officiële website van", "motorcrosser Calvin Vlaanderen."], top=1310, t0=0.6, t1=5.7),
        line(["Bij elke wedstrijd zie je", "waar Calvin eindigde."], LINE_Y, **ld(5.6, 11.4), size=42),
        card(LOW_CLIP, 5.6, 11.4, seq=clip(slug, "r-flow-1.mp4", 5.4, 4.3), rate=0.75, pos="0% 50%", kb=kb(1.0, 1.03), bg="#111"),
        card((KX, 470, 1100, 1080), 10.6, 16.2, seq=clip(slug, "r-flow-2.mp4", 0.2, 5.7), pos="50% 50%", kb=kb(1.04, 1.0), bg="#111"),
        line(["Rood, wit en stoer,", "zoals een racer hoort te zijn."], LINE_Y, **ld(15.4, te + 0.7), size=42),
        card(PAGE, 15.4, te + 0.7, src=furl(slug, "r-62-brand-sheet-logos.webp"), kb=kb(1.0, 1.03), bg="#ffffff"),
        chips(["#CF000E", "#070707", "#FFFFFF"], 1300, 16.6, te + 0.2),
    ]
    glow = [{"t": 0, "cx": 760, "cy": 820, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=103, cover=4.6, layers=frame(D, glow, L))


def r_pine():
    slug, D = "pine-street-school", 27.0
    te = D - END_D
    L = [
        *head(["Pine Street School"], ["Branding en website voor een", "meertalige IB World School", "in Lower Manhattan."], bottom=780, t1=5.9),
        card(OPEN_LOW, 0.9, 6.6, seq=clip(slug, "r-flow-2.mp4", 0.0, 5.8), pos="38% 50%", kb=kb(1.0, 1.04), bg="#d9d9d9"),
        card(TALL_STILL, 5.8, 11.6, src=furl(slug, "r-13-d10-tablets-iso-a.webp"), pos="30% 50%", kb=kb(1.0, 1.05, 0, -3), bg="#0a3c20"),
        line(["Een interactief megamenu", "met zoeken en snelle links."], LINE_Y, **ld(10.8, 16.6), size=42),
        card(LOW_CLIP, 10.8, 16.6, seq=clip(slug, "r-flow-1.mp4", 0.0, 5.9), pos="40% 50%", kb=kb(1.0, 1.03), bg="#1b1b1d"),
        line(["Diep groen, een klassieke letter", "en warme foto's uit de klas."], LINE_Y, **ld(15.8, 21.4), size=42),
        card(PAGE, 15.8, 21.4, src=furl(slug, "r-63-brand-sheet-colours.webp"), kb=kb(1.0, 1.03), bg="#ffffff"),
        card(WIDE_HI, 20.6, te + 0.7, src=furl(slug, "r-16-d07-phone-stone-a-ui.webp"), pos="50% 50%", kb=kb(1.0, 1.05), bg="#cfcfcf"),
    ]
    glow = [{"t": 0, "cx": 860, "cy": 1400, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 640, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=104, cover=4.2, layers=frame(D, glow, L))


def r_sparta():
    slug, D = "sparta-blue-hydrogen", 24.0
    te = D - END_D
    L = [
        card((KX, 430, 1300, 760), 0.9, 6.4, src=furl(slug, "r-01-d09-ipad-keyboard-c.webp"), pos="40% 45%", kb=kb(1.0, 1.06), bg="#0b1a3a"),
        *head(["Sparta Blue Hydrogen"], ["Branding en website voor een", "speler in waterstof."], top=1270, t0=0.6, t1=5.7),
        card(TALL_CLIP, 5.6, 11.4, seq=clip(slug, "r-flow-2.mp4", 0.0, 5.9), pos="4% 50%", kb=kb(1.0, 1.03), bg="#111"),
        line(["Wit en blauw, met een kaart", "van Europa als terugkerend beeld."], LINE_Y, **ld(10.6, 16.2), size=42),
        card((KX, 640, 1400, 933), 10.6, 16.2, src=furl(slug, "r-14-t2-closeup.webp"), pos="30% 50%", kb=kb(1.0, 1.05, 0, -2), bg="#e8e8e8"),
        card((KX, 520, 1300, 866), 15.4, te + 0.7, src=furl(slug, "r-60-brand-wall.webp"), pos="50% 50%", kb=kb(1.0, 1.04), bg="#dedede"),
    ]
    glow = [{"t": 0, "cx": 760, "cy": 820, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 680, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=105, cover=4.6, layers=frame(D, glow, L))


def r_kds():
    slug, D = "kds-stansvormen", 27.0
    te = D - END_D
    L = [
        *head(["KDS"], ["Een scherp merk voor de specialist", "in stansvormen uit Weert."], bottom=780, t1=5.9),
        card(OPEN_LOW, 0.9, 6.6, seq=clip(slug, "r-flow-3.mp4", 0.0, 4.86), rate=0.85, pos="40% 50%", kb=kb(1.0, 1.04), bg="#d9d9d9"),
        card(TALL_STILL, 5.8, 11.6, src=furl(slug, "r-02-d14-billboard-c.webp"), pos="45% 50%", kb=kb(1.0, 1.05, 0, -2), bg="#141414"),
        line(["Branding, drukwerk, een website", "en een offerteportaal."], LINE_Y, **ld(10.8, 16.6), size=42),
        card(LOW_CLIP, 10.8, 16.6, seq=clip(slug, "r-flow-2.mp4", 2.0, 5.9), pos="50% 50%", kb=kb(1.06, 1.1), bg="#dcdcdc"),
        # the brandbook's logo page (back) and the van (front, on the edge)
        card((KX, 470, 1000, 563), 15.8, 21.4, src=furl(slug, "s-fa-brandbook-03.webp"), kb=kb(1.0, 1.03), bg="#ffffff"),
        card((KX, 1110, 700, 700), 16.4, 21.4, src=furl(slug, "s-van.webp"), pos="50% 50%", kb=kb(1.0, 1.04), bg="#1a1a1a",
             shadow="0 50px 120px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.10)"),
        card(WIDE_HI, 20.6, te + 0.7, src=furl(slug, "r-04-f04-ipad-float-a.webp"), pos="40% 50%", kb=kb(1.0, 1.05), bg="#161616"),
    ]
    glow = [{"t": 0, "cx": 860, "cy": 1400, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=106, cover=4.2, layers=frame(D, glow, L))


def r_ecos():
    slug, D = "ecos", 27.0
    te = D - END_D
    L = [
        card(OPEN_TOP, 0.9, 6.6, seq=clip(slug, "r-flow-3.mp4", 0.0, 4.9, h=800), rate=0.85, pos="45% 50%", kb=kb(1.0, 1.04), bg="#e7e4dd"),
        *head(["ECOS Collaboratives"], ["Eén merk, veel samenwerkingen,", "voor het instituut van ISSA."], top=1310, t0=0.6, t1=5.9),
        line(["Merkstrategie, een brandbook,", "webdesign en animatievideo's."], LINE_Y, **ld(5.8, 11.6), size=42),
        card(PAGE, 5.8, 11.6, src=furl(slug, "s-fa-brandbook-02.webp"), kb=kb(1.0, 1.03), bg="#f4efe4"),
        chips(["#F8B21E", "#383736", "#F8F8F8"], 1300, 7.0, 11.1),
        card(TALL_CLIP, 10.8, 16.6, seq=clip(slug, "r-flow-1.mp4", 2.0, 5.9), pos="40% 50%", kb=kb(1.0, 1.03), bg="#d9d6d0"),
        line(["De Fatherhood Collaborative,", "als eerste helemaal uitgewerkt."], LINE_Y, **ld(15.8, 21.4), size=42),
        card(PAGE, 15.8, 21.4, src=furl(slug, "s-fa-fatherhood-posts.webp"), kb=kb(1.0, 1.03), bg="#f4efe4"),
        card((KX, 520, 1000, 933), 20.6, te + 0.7, src=furl(slug, "r-06-d04-phone-trio-b-ui.webp"), pos="62% 50%", kb=kb(1.0, 1.04), bg="#1d1d1d"),
    ]
    glow = [{"t": 0, "cx": 760, "cy": 820, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=107, cover=4.6, layers=frame(D, glow, L))


def r_solidlayer():
    slug, D = "solidlayer", 25.0
    te = D - END_D
    L = [
        *head(["SolidLayer"], ["Een complete merkidentiteit", "rond één idee: trust the layer."], bottom=780, t1=5.7),
        card((KX, 860, 1000, 1080), 0.9, 6.4, src=furl(slug, "r-17-b06-wall-logo-b.webp"), pos="50% 50%", kb=kb(1.0, 1.05), bg="#141738"),
        card(TALL_CLIP, 5.6, 11.4, seq=clip(slug, "r-flow-2.mp4", 0.0, 4.9), rate=0.85, pos="45% 50%", kb=kb(1.0, 1.04), bg="#dcdcdc"),
        line(["Diep navy en signaalgroen,", "vastgelegd in een compact brandbook."], LINE_Y, **ld(10.6, 16.2), size=42),
        card(PAGE, 10.6, 16.2, src=furl(slug, "s-fa-brandbook-03.webp"), kb=kb(1.0, 1.03), bg="#ffffff"),
        card(TALL_STILL, 15.4, te + 0.7, src=furl(slug, "r-10-d13-macro-mac-a.webp"), pos="40% 50%", kb=kb(1.0, 1.05, 0, -3), bg="#141738"),
    ]
    glow = [{"t": 0, "cx": 860, "cy": 1400, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=108, cover=4.2, layers=frame(D, glow, L))


def r_kippenkar():
    slug, D = "kippenkar", 27.0
    te = D - END_D
    L = [
        card(OPEN_TOP, 0.9, 6.6, src=furl(slug, "r-11-d13-macro-mac-b.webp"), pos="40% 40%", kb=kb(1.0, 1.06, 0, -1.5), bg="#1c1c1c"),
        *head(["Kippenkar"], ["Branding en een nieuwe website voor", "Wijkamp Farming Solutions."], top=1310, t0=0.6, t1=5.9),
        line(["Elke aanvraag automatisch", "bij de juiste dealer."], LINE_Y, **ld(5.8, 11.6), size=42),
        card(LOW_CLIP, 5.8, 11.6, seq=clip(slug, "r-flow-1.mp4", 0.0, 5.5), rate=0.95, pos="35% 50%", kb=kb(1.0, 1.03), bg="#d9d6d0"),
        card(TALL_CLIP, 10.8, 16.6, seq=clip(slug, "r-flow-2.mp4", 0.0, 5.9), pos="50% 50%", kb=kb(1.04, 1.0), bg="#1c1c1c"),
        line(["Meer dan 50 brochureaanvragen", "op de eerste dag na de lancering."], LINE_Y, **ld(15.8, 21.4), size=42),
        card(WIDE_HI, 15.8, 21.4, src=furl(slug, "r-14-d10-tablets-iso-c.webp"), pos="20% 50%", kb=kb(1.0, 1.04, 0, -3), bg="#1c1c1c"),
        logo_card(slug, "logo-white.png", (KX, 640, 1180, 660), 20.6, te + 0.7, "#34383A", scale=0.36),
        chips(["#34383A", "#F0EEEC"], 1380, 21.4, te + 0.4),
    ]
    glow = [{"t": 0, "cx": 760, "cy": 820, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=109, cover=4.6, layers=frame(D, glow, L))


def r_taylor():
    slug, D = "taylor", 25.0
    te = D - END_D
    L = [
        card(OPEN_TOP, 0.9, 6.4, seq=clip(slug, "r-flow-1.mp4", 0.0, 5.6, h=800), pos="55% 50%", kb=kb(1.0, 1.04), bg="#e6e6e6"),
        *head(["Taylor Technologies"], ["Een nieuwe huisstijl en website voor", "zonne-micro-elektronica."], top=1310, t0=0.6, t1=5.7),
        card(TALL_STILL, 5.6, 11.4, src=furl(slug, "r-12-b06-wall-logo-c.webp"), pos="40% 50%", kb=kb(1.0, 1.05, 0, -2), bg="#141414"),
        line(["Een heldere, minimalistische huisstijl", "in donkerblauw en geel."], LINE_Y, **ld(10.6, 16.2), size=42),
        card(PAGE, 10.6, 16.2, src=furl(slug, "r-62-brand-sheet-logos.webp"), kb=kb(1.0, 1.03), bg="#ffffff"),
        chips(["#042263", "#FAFAFA"], 1300, 11.8, 15.7),
        card(TALL_CLIP, 15.4, te + 0.7, seq=clip(slug, "r-flow-2.mp4", 3.8, 6.9), pos="50% 50%", kb=kb(1.0, 1.04), bg="#161616"),
    ]
    glow = [{"t": 0, "cx": 760, "cy": 820, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=110, cover=4.6, layers=frame(D, glow, L))


def r_infrai():
    slug, D = "infrai", 24.0
    te = D - END_D
    L = [
        *head(["InfrAI"], ["Een inspectie-app waarmee gemeentes", "hun infrastructuur slimmer beheren."], bottom=780, t1=5.7),
        card(OPEN_LOW, 0.9, 6.4, seq=clip(slug, "s-infra-citex-06-infraxpec-phones-float.mp4", 0.0, 5.6), pos="45% 50%", kb=kb(1.0, 1.04),
             bg="#0b0f5a"),
        card(TALL_STILL, 5.6, 11.4, src=furl(slug, "r-02-d07-phone-stone-b.webp"), pos="50% 50%", kb=kb(1.0, 1.05, 0, -2), bg="#060751"),
        line(["Burgers melden wat er mis is,", "medewerkers pakken het op."], LINE_Y, **ld(10.6, 16.2), size=42),
        card(WIDE, 10.6, 16.2, src=furl(slug, "s-infra-citex-03-infraxpec-pavement-crack.webp"), pos="60% 50%", kb=kb(1.16, 1.2, 0, -1),
             bg="#bfeee0"),
        card(TALL_CLIP, 15.4, te + 0.7, seq=clip(slug, "s-infra-citex-07-infraxpec-app-to-suite.mp4", 2.0, 5.9), pos="45% 50%",
             kb=kb(1.0, 1.03), bg="#0b0f5a"),
    ]
    glow = [{"t": 0, "cx": 860, "cy": 1400, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=111, cover=4.2, layers=frame(D, glow, L))


def r_eredivisie():
    slug, D = "eredivisietoppers", 24.0
    te = D - END_D
    L = [
        card(OPEN_TOP, 0.9, 6.4, seq=clip(slug, "s-eredivisie-07-eredivisie-pack-opening.mp4", 0.0, 5.6, h=800, crop=(0, 110, 1920, 970)),
             pos="50% 50%", kb=kb(1.0, 1.03), bg="#0b0e1c"),
        *head(["Eredivisietoppers"], ["Pitchdeck en creatief concept voor", "een spaaractie met voetbalplaatjes."], top=1310, t0=0.6, t1=5.7),
        card(TALL_STILL, 5.6, 11.4, src=furl(slug, "s-eredivisie-03-eredivisie-lineup.webp"), pos="50% 50%", kb=kb(1.0, 1.05), bg="#0b0e1c"),
        line(["Een pakje openen, je opstelling", "kiezen en een duel live volgen."], LINE_Y, **ld(10.6, 16.2), size=42),
        card(LOW_CLIP, 10.6, 16.2, seq=clip(slug, "s-eredivisie-08-eredivisie-phone-orbit.mp4", 0.0, 5.6), pos="50% 50%", kb=kb(1.0, 1.03),
             bg="#0b0e1c"),
        card(TALL_CLIP, 15.4, te + 0.7, seq=clip(slug, "s-pitchdecks-10-eredivisie-ipad-presenting.mp4", 1.5, 5.9), pos="50% 50%",
             kb=kb(1.0, 1.03), bg="#0b0e1c"),
    ]
    glow = [{"t": 0, "cx": 760, "cy": 820, "r": 900, "a": 0.10}, {"t": 5, "d": 4, "cx": 700, "cy": 1100, "r": 950, "a": 0.10}]
    return dict(slug=slug, dur=D, seed=112, cover=4.6, layers=frame(D, glow, L))


REELS = {"atl-plus": r_atl, "teamtv": r_teamtv, "calvin-vlaanderen": r_calvin, "pine-street-school": r_pine,
         "sparta-blue-hydrogen": r_sparta, "kds-stansvormen": r_kds, "ecos": r_ecos, "solidlayer": r_solidlayer,
         "kippenkar": r_kippenkar, "taylor": r_taylor, "infrai": r_infrai, "eredivisietoppers": r_eredivisie}


# ---------------------------------------------------------------- render
def spec_of(r):
    return {"w": W, "h": H, "fps": FPS, "duration": r["dur"], "crf": 17, "layers": r["layers"]}


def stills(slug, ts=None):
    r = REELS[slug]()
    ts = ts or [round(x * 0.5, 2) for x in range(1, int(r["dur"] * 2))]
    out = WORK / "stills" / slug / f"{slug}.jpg"
    s22.render(spec_of(r), out, still=ts)
    return out.parent


def render(slug):
    r = REELS[slug]()
    DELIVER.mkdir(parents=True, exist_ok=True)
    wav = WORK / f"{slug}.wav"
    audio.write(wav, audio.song(r["dur"], "calm", cuts=[], outro=None, hits=[], seed=r["seed"]), lufs=-17)
    tmp = WORK / f"m7-reel-{slug}.mp4"
    s22.render(spec_of(r), tmp, wav=wav)
    shutil.move(str(tmp), DELIVER / f"m7-reel-{slug}.mp4")
    s22.render(spec_of(r), DELIVER / f"m7-reel-{slug}.png", still=r["cover"])
    wav.unlink(missing_ok=True)
    return DELIVER / f"m7-reel-{slug}.mp4"


def clean_frames(slug):
    for d in (WORK / "frames").glob(f"{slug}-*"):
        shutil.rmtree(d, ignore_errors=True)


if __name__ == "__main__":
    install()
    a = sys.argv[1:]
    cmd = a[0] if a else "list"
    if cmd == "list":
        for k, f in REELS.items():
            print(k, f()["dur"])
    elif cmd == "stills":
        ts = [float(x) for x in a[2].split(",")] if len(a) > 2 else None
        print(stills(a[1], ts))
    elif cmd == "render":
        for k in (a[1:] or list(REELS)):
            print("reel", k, "->", render(k), flush=True)
