"""Round 24: minimal social posts in the style of m7branding.com.

Owner feedback on round 23 (Dutch, summarised): the alignment is not nice yet; no project labels above the screenshot;
let the mockups run off the bottom and/or the right instead of only the right; use our logo with the gradient outline
circle (public/brand/m7-badge.svg); optionally a very light, subtle glow in the background. And more: step-by-step
story series to post one after another, and swipe carousels for the Instagram feed, about a specific application or a
development in our market.

One system for all of it:
- the dark site background (#030304) with one soft, slowly breathing teal glow behind the visual;
- the M7 badge (emblem in the gradient ring) top left, on the same left edge as the text and the visual (x = 88);
- Montserrat, a bold title, one or two lines of muted body copy (the site's --muted), copy taken from the website's own
  content (src/content/services/*.ts, cases); never invented numbers, claims or results;
- one real visual (a crop of a real capture, a phone, a brandbook photo, the AI answer) on the same left edge, running
  off the bottom and/or the right;
- no eyebrows, no project labels, no numbered markers except in real step sequences, no outro animation;
- the site's pill CTA (diagonal arrow in the cyan dot) where a post asks for action.

Formats: stories 1080x1920 (mp4, 8 s, 60 fps, calm music bed + png), carousel slides 1080x1350 (png).

  python social24.py posts|series|carousels|all [stills]     render (stills = layout check into the work folder)
"""
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, str(Path(__file__).resolve().parent))
import audio  # noqa: E402
import stories22 as s22  # noqa: E402

S = s22.S
WORK = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r24w")
OUT = S / "r24" / "deliver"
CAP = S / "r21" / "cap"
REPO = s22.REPO
MEDIA = s22.MEDIA
FONT = S / "r13" / "brand" / "_fonts" / "Montserrat" / "Montserrat-500.ttf"
FPS, DUR = 60, 8.0
KX = 88
MUTED = "#a7a7b0"

# ---------------------------------------------------------------- extra layers on top of the round-22 extension
BADGE_SVG = (REPO / "public" / "brand" / "m7-badge.svg").read_text()

EXTRA_JS = r"""
  /* round 24: one soft teal glow that breathes very slowly (the site's aurora, toned down) */
  X.xglow = (o, S, host) => {
    const d = el("div", "x-abs x-glow", host);
    const r = o.r || 900;
    Object.assign(d.style, { left: o.cx - r + "px", top: o.cy - r + "px", width: 2 * r + "px", height: 2 * r + "px",
      background: `radial-gradient(closest-side, rgba(58,255,255,${o.a}) 0%, rgba(34,255,180,${(o.a * 0.45).toFixed(3)}) 38%, rgba(3,3,4,0) 100%)` });
    return {
      update(t) {
        const a = P(t, o.t0 || 0, 2.2, "inOutSine");
        const b = Math.sin((t / 7) * Math.PI * 2);
        d.style.opacity = (a * (0.88 + 0.12 * b)).toFixed(3);
        d.style.transform = `scale(${(1 + 0.035 * b).toFixed(4)})`;
      },
    };
  };

  /* round 24: the M7 badge (public/brand/m7-badge.svg): fades in with a slight settle */
  X.xbadge = (o, S, host) => {
    const id = "bg" + uid++;
    const d = el("div", "x-abs", host, (o.svg || "").replace(/paint0_linear_8099_62703/g, id).replace('width="147" height="147"', `width="${o.size}" height="${o.size}"`));
    Object.assign(d.style, { left: o.x + "px", top: o.y + "px", width: o.size + "px", height: o.size + "px" });
    return {
      update(t) {
        const a = P(t, o.t0 || 0, 1.1, "outQuart");
        d.style.opacity = a.toFixed(3);
        d.style.transform = `scale(${lerp(0.94, 1, a).toFixed(4)})`;
        d.style.filter = a < 0.995 ? `blur(${((1 - a) * 5).toFixed(2)}px)` : "none";
      },
    };
  };

  /* round 24: the site's pill CTA (.btn): label, the cyan dot with the diagonal arrow, the faint gradient edge */
  X.xpill = (o, S, host) => {
    const d = el("div", "x-abs p-btn", host, `<span>${esc(o.text)}</span><span class="p-dot"><svg width="${o.icon || 30}" height="${o.icon || 30}" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span>`);
    Object.assign(d.style, { left: o.x + "px", top: o.y + "px", fontSize: (o.size || 30) + "px" });
    return {
      update(t) {
        const a = P(t, o.t0 || 0, 1.0, "outQuart");
        d.style.opacity = a.toFixed(3);
        d.style.transform = `translate3d(0, ${((1 - a) * 16).toFixed(2)}px, 0)`;
        d.style.filter = a < 0.995 ? `blur(${((1 - a) * 4).toFixed(2)}px)` : "none";
      },
    };
  };

  /* round 24: rows with a hairline under each (a short list, no numbers) */
  X.xrows = (o, S, host) => {
    const box = el("div", "x-abs", host);
    Object.assign(box.style, { left: o.x + "px", top: o.y + "px", width: o.w + "px" });
    const rows = o.items.map((it, i) => {
      const r = el("div", "p-row", box);
      Object.assign(r.style, { height: o.rowH + "px", fontSize: (o.size || 40) + "px" });
      const w = el("span", "x-w", r); const wi = el("span", "x-wi", w, esc(it));
      const hl = el("span", "x-hair", r);
      return { wi, hl };
    });
    return {
      update(t) {
        rows.forEach((r, i) => {
          const t0 = (o.t0 || 0) + i * (o.st ?? 0.18);
          const p = P(t, t0, 1.0, "outQuart"), h = P(t, t0 - 0.1, 1.2, "inOutCubic");
          r.wi.style.transform = `translate3d(0, ${((1 - p) * 104).toFixed(2)}%, 0)`;
          r.wi.style.opacity = (0.35 + 0.65 * p).toFixed(3);
          r.wi.style.filter = p < 0.995 ? `blur(${((1 - p) * 4).toFixed(2)}px)` : "none";
          r.hl.style.transform = `scaleX(${h.toFixed(4)})`;
        });
      },
    };
  };
"""

EXTRA_CSS = """
.x-glow { border-radius: 50%; pointer-events: none; }
.p-btn { display: inline-flex; align-items: center; gap: 1.0em; padding: 0.4em 0.4em 0.4em 1.45em; min-height: 3.05em; border-radius: 999px;
  font-weight: 700; letter-spacing: 0.005em; color: #f6f6f8; white-space: nowrap; background: linear-gradient(180deg, #26262a, #18181b);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.09), 0 16px 44px -14px rgba(58,255,255,0.22), 0 0 0 1px rgba(255,255,255,0.07); }
.p-btn::before { content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1.5px;
  background: linear-gradient(100deg, rgba(58,255,255,0.55), rgba(255,255,255,0.05) 40%, rgba(58,255,255,0.35));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
.p-dot { display: grid; place-items: center; width: 2.15em; height: 2.15em; border-radius: 50%; background: #34f5f0; flex: none; }
.p-row { position: relative; display: flex; align-items: center; font-weight: 700; letter-spacing: -0.02em; color: #f6f6f8; white-space: nowrap; }
"""


def install():
    """Own work folder (round 22's page and renderer stay untouched) with the round-24 layers added."""
    s22.WORK = WORK
    if "X.xglow" not in s22.X_JS:
        s22.X_JS = s22.X_JS.replace("  window.M7 = {", EXTRA_JS + "\n  window.M7 = {")
        s22.X_CSS = s22.X_CSS + EXTRA_CSS
    s22.setup()


# ---------------------------------------------------------------- material (frames and stills from real captures)
def ff(*args):
    subprocess.run(["ffmpeg", "-nostdin", "-y", "-loglevel", "error", *map(str, args)], check=True)


def frames(name, src, t0, dur, vf):
    d = WORK / "frames" / name
    if not (d.exists() and any(d.glob("*.jpg"))):
        d.mkdir(parents=True, exist_ok=True)
        ff("-ss", f"{t0:.2f}", "-t", f"{dur:.2f}", "-i", src, "-filter_complex", vf, "-q:v", "2", d / "%05d.jpg")
    return d


def still(name, src, t, vf):
    p = WORK / "stills-src" / f"{name}.jpg"
    if not p.exists():
        p.parent.mkdir(parents=True, exist_ok=True)
        ff("-ss", f"{t:.2f}", "-i", src, "-frames:v", "1", "-vf", vf, "-q:v", "2", p)
    return p


def crop_vf(box, w):
    x, y, cw, ch = box
    return f"crop={cw}:{ch}:{x}:{y},scale={w}:-2:flags=lanczos"


def phone_overlay(screen_w, sh, bezel=18):
    ow, oh = screen_w + 2 * bezel, sh + 2 * bezel
    p = WORK / f"phone-{ow}x{oh}.png"
    if not p.exists():
        k = 4
        m = Image.new("L", (ow * k, oh * k), 255)
        dr = ImageDraw.Draw(m)
        dr.rounded_rectangle((bezel * k, bezel * k, (bezel + screen_w) * k, (bezel + sh) * k), radius=round(screen_w * 0.105) * k, fill=0)
        iw, ih, iy = round(screen_w * 0.2), round(screen_w * 0.057), bezel + round(screen_w * 0.022)
        dr.rounded_rectangle(((ow - iw) / 2 * k, iy * k, (ow + iw) / 2 * k, (iy + ih) * k), radius=ih / 2 * k, fill=255)
        m = m.resize((ow, oh), Image.LANCZOS)
        over = Image.new("RGBA", (ow, oh), (11, 11, 13, 255))
        over.putalpha(m)
        ImageDraw.Draw(over).rounded_rectangle(((ow - iw) / 2, iy, (ow + iw) / 2, iy + ih), radius=ih / 2, fill=(0, 0, 0, 255))
        p.parent.mkdir(parents=True, exist_ok=True)
        over.save(p)
    return p, (ow, oh)


def phone_vf(screen_w, bezel=18):
    sh = round(screen_w * 1688 / 780 / 2) * 2
    p, (ow, oh) = phone_overlay(screen_w, sh, bezel)
    return f"[0:v]scale={screen_w}:{sh}:flags=lanczos,pad={ow}:{oh}:{bezel}:{bezel}:color=0x0b0b0d[v];movie={p}[o];[v][o]overlay=0:0", (ow, oh)


def browser_bar(w, url, h=50):
    p = WORK / f"bar-{w}-{url.replace('/', '_')}.png"
    if not p.exists():
        im = Image.new("RGB", (w, h), "#1c1c21")
        dr = ImageDraw.Draw(im)
        for i in range(3):
            cx = 26 + i * 20
            dr.ellipse((cx - 6, h / 2 - 6, cx + 6, h / 2 + 6), fill="#3a3a41")
        font = ImageFont.truetype(str(FONT), 17)
        tw = dr.textlength(url, font=font)
        x0, y0 = 104, (h - 30) / 2
        dr.rounded_rectangle((x0, y0, x0 + tw + 36, y0 + 30), radius=15, fill="#2a2a30")
        dr.text((x0 + 18, h / 2), url, font=font, fill="#a6a6ae", anchor="lm")
        dr.line((0, h - 1, w, h - 1), fill="#2c2c32")
        p.parent.mkdir(parents=True, exist_ok=True)
        im.save(p)
    return p


def browser_vf(w, url, box=None):
    crop = f"crop={box[2]}:{box[3]}:{box[0]}:{box[1]}," if box else ""
    return f"[0:v]{crop}scale={w}:-2:flags=lanczos,pad={w}:ih+50:0:50:color=0x1c1c21[v];movie={browser_bar(w, url)}[b];[v][b]overlay=0:0"


# sources
STED = CAP / "steddion-tools" / "flow-1-intake-desktop.mp4"           # 2880x1800, 12.3 s
PLENTY = CAP / "plenty-planet" / "flow-32-subsidiecheck-desktop.mp4"   # 2880x1800, 20 s
REPAIR = CAP / "repairlab" / "flow-33-afspraak-mobile.mp4"             # 780x1688, 6 s
SANDT = CAP / "the-sandt" / "flow-33-landing-faq-desktop.mp4"          # 2880x1800, 12 s
AI = MEDIA / "showcase" / "thesandt" / "ai-answer.webp"                # 1420x668
BOOK = S / "r20" / "src" / "book-bernheze-makelaars-rebranding" / "still.jpg"   # 3000x2000

STED_BOX = (700, 120, 1720, 1680)     # every modal of the intake (the largest is "Jouw situatie") with the page running on to
                                      # the right; starts under the tool's header bar so no header text is cut
PLENTY_BOX = (470, 0, 2309, 1800)     # the subsidiecheck pop-up (questions 1-4, the e-mail step) and the page to its right:
                                      # at 1180 px wide from x 88 the whole pop-up stays in view, the page runs off the edge


# ---------------------------------------------------------------- layout helpers
def badge(x=KX, y=250, size=104, t0=0.05):
    return dict(type="xbadge", svg=BADGE_SVG, x=x, y=y, size=size, t0=t0)


def glow(cx, cy, r=900, a=0.10):
    return dict(type="xglow", cx=cx, cy=cy, r=r, a=a, t0=0.0)


def text_block(title, body, bottom, tsize=72, bsize=38, gap=26, t0=0.3, x=KX, w=None, tcolor="#f6f6f8"):
    """Title and body as one block whose last line ends at `bottom` (so it sits a fixed distance above the visual)."""
    th = len(title) * tsize * 1.08
    bh = len(body) * bsize * 1.42 if body else 0
    y0 = bottom - th - (gap + bh if body else 0)
    out = [dict(type="xtext", lines=[{"t": s} for s in title], t0=t0, t1=1e9, x=x, y=round(y0), w=w or 1080 - 2 * KX, size=tsize, weight=800,
                color=tcolor, ls=-0.03, lh=1.08, st=0.05, d=1.1, blur=5)]
    if body:
        out.append(dict(type="xtext", lines=[{"t": s} for s in body], t0=t0 + 0.5, t1=1e9, x=x, y=round(y0 + th + gap), w=w or 1080 - 2 * KX,
                        size=bsize, weight=500, color=MUTED, ls=-0.005, lh=1.42, st=0.025, d=1.1, blur=4))
    return out, round(y0)


def top_block(title, body, y, tsize=72, bsize=38, gap=26, t0=0.3, x=KX, w=None):
    th = len(title) * tsize * 1.08
    blocks, _ = text_block(title, body, y + th + (gap + len(body) * bsize * 1.42 if body else 0), tsize, bsize, gap, t0, x, w)
    return blocks


def visual(rect, seq=None, src=None, rate=1.0, radius=24, kb=None, bg="#0b0b0e", t0=0.9, shadow=None, fit="cover", pos="50% 0%"):
    m = {"type": "media", "t0": t0, "t1": DUR + 1, "rect": rect, "frame": "card", "radius": radius, "float": 0, "fit": fit, "pos": pos,
         "enter": {"type": "focus", "d": 1.4, "ease": "inOutSine", "blur": 14, "s0": 1.0, "fade": 1.7}, "exit": {"type": "none"},
         "kb": kb or {"s0": 1.0, "s1": 1.0},
         "shadow": shadow or "0 50px 110px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.08)", "bg": bg}
    if seq is not None:
        m["seq"] = s22.seq_dir(seq, FPS) | {"rate": rate}
    else:
        m["src"] = s22.furl(src)
    return m


def pill(text, x, y, size=30, t0=1.2):
    return dict(type="xpill", text=text, x=x, y=y, size=size, t0=t0)


def url_line(x, y, size=28, t0=1.4):
    return dict(type="xtext", lines=[{"t": "m7branding.com"}], t0=t0, t1=1e9, x=x, y=y, w=700, size=size, weight=600, color="#8d8d96",
                ls=0.02, lh=1.2, st=0.0, d=1.0, blur=3)


# ---------------------------------------------------------------- 1. single story posts (v2 of round 23)
def posts():
    P = {}
    # a. Productconfigurator: Steddion's intake as a large card around the modal, off the bottom and the right
    d = frames("p-steddion", STED, 1.6, 9.6, f"[0:v]{crop_vf(STED_BOX, 1180)}")
    vis = {"x": KX, "y": 860, "w": 1180, "h": 1152}
    t, _ = text_block(["Productconfigurator"], ["Klanten stellen zelf hun product samen", "en zien direct resultaat en prijs."], vis["y"] - 76)
    P["01-productconfigurator"] = dict(seed=5, still=7.6, layers=[glow(820, 1520), badge(), *t, visual(vis, seq=d, rate=1.35, bg="#5d5670")])

    # b. Check-tools & quickscans: Plenty Planet's subsidiecheck pop-up, off the bottom and the right
    d = frames("p-plenty", PLENTY, 4.4, 9.4, f"[0:v]{crop_vf(PLENTY_BOX, 1180)}")
    vis = {"x": KX, "y": 1060, "w": 1180, "h": 920}
    t, _ = text_block(["Check-tools &", "quickscans"], ["Je bezoeker beantwoordt een paar vragen", "en krijgt direct inzicht."], vis["y"] - 76)
    P["02-check-tools"] = dict(seed=17, still=7.4, layers=[glow(820, 1520), badge(), *t, visual(vis, seq=d, rate=1.3, radius=24, bg="#0f2a33")])

    # c. Boekings- & afsprakenwidget: Repairlab on a large phone, off the bottom
    vf, (pw, ph) = phone_vf(660)
    d = frames("p-repairlab", REPAIR, 0.0, 6.0, vf)
    vis = {"x": KX, "y": 830, "w": pw, "h": ph}
    t, _ = text_block(["Boekings- &", "afsprakenwidget"], ["Klanten plannen zelf een afspraak in,", "direct gekoppeld aan je agenda."], vis["y"] - 76)
    P["03-boekingswidget"] = dict(seed=29, still=7.4, layers=[glow(560, 1560, r=820), badge(), *t, visual(vis, seq=d, rate=0.88, radius=86, bg="#0b0b0d")])

    # d. Brandbook: the real Bernheze Makelaars brandbook photo, off the bottom and the right, drifting slowly left
    vis = {"x": KX, "y": 900, "w": 1560, "h": 1040}
    t, _ = text_block(["Brandbook &", "merkrichtlijnen"], ["Alle merkregels helder vastgelegd,", "zodat iedereen on-brand werkt."], vis["y"] - 76)
    P["04-brandbook"] = dict(seed=41, still=6.5, layers=[glow(820, 1500), badge(), *t,
                                                        visual(vis, src=BOOK, kb={"s0": 1.0, "s1": 1.0, "x0": 0, "x1": -9, "ease": "inOutSine"}, bg="#e6e6e6", pos="0% 50%")])

    # e. GEO: The Sandt's FAQ page (the cited source) in a browser off the bottom and the right, the AI answer that cites
    #    it on top; the cited source outlined once
    d = frames("p-sandt", SANDT, 4.6, 7.4, browser_vf(1420, "thesandt.nl"))
    k = 1060 / 1420
    ai = {"x": KX, "y": 930, "w": 1060, "h": round(668 * k)}
    t, _ = text_block(["Generative Engine", "Optimization"], ["Genoemd en geciteerd worden door", "ChatGPT, Perplexity, Gemini en", "Google AI Overviews."], ai["y"] - 76)
    P["05-geo"] = dict(seed=53, still=6.6, layers=[
        glow(820, 1500), badge(), *t,
        visual({"x": 300, "y": 1260, "w": 1420, "h": 938}, seq=d, rate=1.0, radius=24, bg="#ffffff", t0=1.5),
        visual(ai, src=AI, radius=22, bg="#202124", t0=0.9, shadow="0 50px 120px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.12)"),
        dict(type="xring", x=ai["x"] + round(648 * k), y=ai["y"] + round(174 * k), w=round(350 * k), h=round(41 * k), r=round(20 * k), sw=3, t0=3.0, d=1.3, t1=1e9),
    ])
    return P


# ---------------------------------------------------------------- 2. story series (post one after another)
def series():
    P = {}
    # A. Een configurator in stappen (Steddion). One card position for the whole series; every step plays its real
    #    interaction once and holds on the result.
    vis = {"x": KX, "y": 900, "w": 1180, "h": 1152}

    def sted(name, t0, dur, title, body, rate=1.0, still_t=7.4):
        d = frames(f"s-sted-{name}", STED, t0, dur, f"[0:v]{crop_vf(STED_BOX, 1180)}")
        t, _ = text_block(title, body, vis["y"] - 76)
        return dict(seed=60 + len(P), still=still_t, layers=[glow(820, 1540), badge(), *t, visual(vis, seq=d, rate=rate, bg="#5d5670")])

    P["a1-configurator-intro"] = sted("intro", 0.0, 1.1, ["Zo werkt een", "productconfigurator"],
                                      ["In vier stappen, met de Energy Property", "Configurator die we voor Steddion bouwden."], rate=0.5)
    P["a2-configurator-stap-1"] = sted("type", 1.5, 2.9, ["1. Kies je type pand"], ["Distributiecentrum, productielocatie,", "koel- of vrieslocatie of multi-tenant."])
    P["a3-configurator-stap-2"] = sted("profiel", 5.0, 1.9, ["2. Kies het profiel", "dat past"], ["Oppervlak, aansluiting en verbruik", "staan meteen voor je klaar."])
    P["a4-configurator-stap-3"] = sted("situatie", 7.0, 2.3, ["3. Vul je situatie aan"], ["Teruglevering en extra capaciteit,", "in een paar klikken."])
    P["a5-configurator-stap-4"] = sted("resultaat", 9.5, 1.8, ["4. Zie direct je", "verbruiksprofiel"], ["Piekvraag, jaarverbruik en teruglevering,", "direct op een rij."])
    t, y = text_block(["Ook een configurator", "voor jouw product?"], ["We ontwerpen en bouwen hem,", "gekoppeld aan je CRM."], 1180)
    P["a6-configurator-cta"] = dict(seed=66, still=6.0, layers=[glow(540, 1100, r=980, a=0.12), badge(), *t,
                                                                pill("Plan een kennismaking", KX, 1260), url_line(KX, 1440)])

    # B. Een afspraak in drie stappen (Repairlab), the same large phone in every frame
    vf, (pw, ph) = phone_vf(660)
    pvis = {"x": KX, "y": 860, "w": pw, "h": ph}

    def rep(name, t0, dur, title, body, rate=1.0, still_t=7.0):
        d = frames(f"s-rep-{name}", REPAIR, t0, dur, vf)
        t, _ = text_block(title, body, pvis["y"] - 76)
        return dict(seed=70 + len(P), still=still_t, layers=[glow(560, 1580, r=820), badge(), *t, visual(pvis, seq=d, rate=rate, radius=86, bg="#0b0b0d")])

    P["b1-afspraak-intro"] = rep("intro", 0.0, 0.6, ["Een afspraak maken", "in drie stappen"], ["Zo plannen klanten van Repairlab", "zelf hun reparatie in."], rate=0.3)
    P["b2-afspraak-stap-1"] = rep("reparatie", 0.6, 1.0, ["1. Kies je reparatie"], ["Model en reparatietype,", "met de prijs er direct bij."], rate=0.6)
    P["b3-afspraak-stap-2"] = rep("hulp", 1.8, 0.65, ["2. Kies hoe je", "geholpen wilt worden"], ["Een afspraak in de winkel,", "of eerst een prijsindicatie."], rate=0.4)
    P["b4-afspraak-stap-3"] = rep("datum", 2.6, 3.4, ["3. Kies een datum", "en een tijdslot"], ["Direct gekoppeld aan de agenda,", "zonder heen en weer mailen."], rate=0.75)
    t, y = text_block(["Ook online", "afspraken laten maken?"], ["Een boekingswidget op je eigen site,", "in je eigen stijl."], 1180)
    P["b5-afspraak-cta"] = dict(seed=75, still=6.0, layers=[glow(540, 1100, r=980, a=0.12), badge(), *t,
                                                            pill("Plan een kennismaking", KX, 1260), url_line(KX, 1440)])
    return P


# ---------------------------------------------------------------- 3. carousels (1080x1350, swipe)
CW, CH = 1080, 1350


def slide(layers, glow_at=(780, 1150), a=0.09):
    return [glow(*glow_at, r=820, a=a), badge(x=KX, y=88, size=84, t0=0.0), *layers]


def c_title(lines, y=260, size=76):
    return dict(type="xtext", lines=[{"t": s} for s in lines], t0=0.0, t1=1e9, x=KX, y=y, w=CW - 2 * KX, size=size, weight=800, color="#f6f6f8",
                ls=-0.032, lh=1.07, st=0.0, d=0.6, blur=0)


def c_body(lines, y, size=36, color=MUTED, weight=500):
    """Body lines; an empty string leaves a half-line gap before the next line."""
    out, gap = [], 0
    for s in lines:
        if not s:
            gap = round(size * 0.7)
            continue
        out.append({"t": s, "mt": gap} if gap else {"t": s})
        gap = 0
    return dict(type="xtext", lines=out, t0=0.0, t1=1e9, x=KX, y=y, w=CW - 2 * KX, size=size, weight=weight, color=color,
                ls=-0.005, lh=1.42, st=0.0, d=0.6, blur=0)


def c_rows(items, y, size=44, rowH=104):
    return dict(type="xrows", items=items, x=KX, y=y, w=CW - 2 * KX, size=size, rowH=rowH, t0=0.0, st=0.0)


def c_img(src, rect, radius=24, bg="#0b0b0e", pos="50% 0%", fit="cover", shadow=None):
    m = visual(rect, src=src, radius=radius, bg=bg, t0=0.0, pos=pos, fit=fit, shadow=shadow)
    m["enter"] = {"type": "none"}
    return m


def carousels():
    C = {}
    ai_k = 1240 / 1420
    plenty = lambda n, t: still(f"plenty-{n}", PLENTY, t, crop_vf(PLENTY_BOX, 1180))
    sandt_faq = still("sandt-faq", SANDT, 9.0, "scale=1500:-2:flags=lanczos")

    # A. GEO: a development in our market (copy: seo-aeo-geo.ts)
    C["geo"] = [
        slide([c_title(["Gevonden worden", "in *AI-antwoorden*"]), c_body(["Wat GEO is, en wat je eraan kunt doen."], 470),
               c_img(AI, {"x": KX, "y": 690, "w": 1240, "h": round(668 * ai_k)}, radius=22, bg="#202124")]),
        slide([c_title(["Je klant vraagt het", "ook aan AI"], size=68),
               c_body(["Je klant typt nog steeds in Google, maar", "stelt zijn vraag net zo makkelijk aan", "ChatGPT, Perplexity of Gemini, en krijgt",
                       "in Google steeds vaker een AI-samenvatting", "als eerste antwoord."], 450)]),
        slide([c_title(["Wat is GEO?"], size=68),
               c_body(["Generative Engine Optimization: je website,", "content en online aanwezigheid zo inrichten", "dat AI-zoekmachines je merk begrijpen,",
                       "noemen en als bron citeren."], 380)]),
        slide([c_title(["AI noemt merken die", "het helder kan plaatsen"], size=60),
               c_rows(["Entity SEO", "Consistente merkinformatie", "Structured data", "Een llms.txt-bestand", "Een answer hub"], 470)]),
        slide([c_title(["Afdwingen kan niet"], size=68),
               c_body(["Organische vermeldingen in AI-antwoorden", "kun je niet kopen of afdwingen.", "",
                       "Wat je wel kunt doen, is het AI-systemen", "zo makkelijk mogelijk maken om je", "te begrijpen en te vertrouwen."], 380)]),
        slide([c_title(["Zo ziet dat eruit"], size=68), c_body(["The Sandt, als bron genoemd in een AI-antwoord", "dat hun eigen FAQ citeert."], 380),
               c_img(sandt_faq, {"x": 300, "y": 760, "w": 1500, "h": 938}, bg="#ffffff"),
               c_img(AI, {"x": KX, "y": 600, "w": 1000, "h": round(668 * 1000 / 1420)}, radius=20, bg="#202124",
                     shadow="0 50px 120px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.12)")]),
        slide([c_title(["Hoe ziet AI", "jouw merk?"], size=76),
               c_body(["We toetsen hoe je merk naar voren komt in", "ChatGPT, Perplexity en Google AI Overviews."], 470),
               pill("Plan een kennismaking", KX, 700, t0=0.0), url_line(KX, 870, t0=0.0)], glow_at=(540, 900), a=0.12),
    ]

    # B. European Accessibility Act: a development in our market (copy: websites-webshops.ts, toegankelijkheid)
    C["toegankelijkheid"] = [
        slide([c_title(["European", "*Accessibility Act*"], size=84), c_body(["Sinds 28 juni 2025.", "Wat betekent het voor je website?"], 500)],
              glow_at=(780, 1050), a=0.11),
        slide([c_title(["Voor wie?"], size=68),
               c_body(["De European Accessibility Act geldt voor", "een groot deel van de digitale producten en", "diensten voor consumenten, zoals webshops",
                       "en online boekingen.", "", "Voor de kleinste ondernemingen gelden", "uitzonderingen."], 380)]),
        slide([c_title(["De norm: WCAG"], size=68), c_body(["Opgebouwd rond vier principes."], 380),
               c_rows(["Waarneembaar", "Bedienbaar", "Begrijpelijk", "Robuust"], 520, size=52, rowH=118)]),
        slide([c_title(["Wat we meenemen"], size=68),
               c_rows(["Voldoende kleurcontrast", "Leesbare letters", "Duidelijke focus-states", "Knoppen die groot genoeg zijn", "Heldere formulieren"], 400)]),
        slide([c_title(["Toegankelijk is niet", "grijs en kaal"], size=64),
               c_body(["Het gaat om contrast, structuur en", "bediening, niet om het weglaten van", "mooi design of animaties."], 470)]),
        slide([c_title(["Ook slim als het", "niet verplicht is"], size=68),
               c_body(["Je bereikt meer mensen en je site wordt", "er voor iedereen prettiger van."], 470),
               c_body(["Voor juridische vragen schakel je een jurist in;", "wij regelen het ontwerp en de techniek."], 1120, size=26, color="#77777f")]),
        slide([c_title(["Klopt jouw website", "al?"], size=76),
               c_body(["Een WCAG-audit laat zien waar je website", "struikelt, met een helder verbeterplan."], 470),
               pill("Plan een kennismaking", KX, 700, t0=0.0), url_line(KX, 870, t0=0.0)], glow_at=(540, 900), a=0.12),
    ]

    # C. Check-tools, with the real Plenty Planet subsidiecheck (copy: configurators-lead-tools-widgets.ts, the case)
    C["check-tools"] = [
        slide([c_title(["Eerst waarde geven,", "dan pas *vragen*"], size=72), c_body(["Waarom een check-tool beter werkt", "dan een contactformulier."], 470),
               c_img(plenty("q1", 6.2), {"x": KX, "y": 640, "w": 1180, "h": 920}, bg="#0f2a33")]),
        slide([c_title(["Een paar vragen,", "direct inzicht"], size=68),
               c_body(["Kom ik in aanmerking voor subsidie, hoe", "scoort mijn bedrijf, wat levert dit op?"], 450),
               c_img(plenty("q2", 9.2), {"x": KX, "y": 600, "w": 1180, "h": 920}, bg="#0f2a33")]),
        slide([c_title(["Een concreet resultaat"], size=64),
               c_body(["In ruil voor contactgegevens. Dat is een stuk", "logischer dan een standaard contactformulier."], 380),
               c_img(plenty("q4", 16.0), {"x": KX, "y": 560, "w": 1180, "h": 920}, bg="#0f2a33")]),
        slide([c_title(["Je weet vooraf of", "een lead bij je past"], size=64),
               c_body(["De lead komt met alle antwoorden en de", "score in je CRM terecht, zodat je salesteam", "weet waar het gesprek over moet gaan."], 470)]),
        slide([c_title(["Voorbeeld:", "Plenty Planet"], size=68),
               c_body(["Een subsidiecheck van vier vragen in een", "pop-up, met de uitslag per e-mail, voor de", "Noord-Hollandse regeling voor zonnepanelen",
                       "boven parkeerterreinen."], 450),
               c_img(plenty("mail", 18.6), {"x": KX, "y": 720, "w": 1180, "h": 920}, bg="#0f2a33")]),
        slide([c_title(["Een check-tool", "voor jouw vakgebied?"], size=72),
               c_body(["We bouwen de scorelogica op basis", "van jouw expertise en criteria."], 470),
               pill("Plan een kennismaking", KX, 700, t0=0.0), url_line(KX, 870, t0=0.0)], glow_at=(540, 900), a=0.12),
    ]
    return C


# ---------------------------------------------------------------- render
def story_spec(p):
    return {"w": 1080, "h": 1920, "fps": FPS, "duration": DUR, "crf": 17, "layers": [{"type": "plain", "color": "#030304"}] + p["layers"]}


def render_story(group, name, p, stills_only=False):
    spec = story_spec(p)
    if stills_only:
        return s22.render(spec, WORK / "stills" / group / f"{name}.jpg", still=[p["still"]])
    out = OUT / group
    out.mkdir(parents=True, exist_ok=True)
    wav = WORK / f"{name}.wav"
    audio.write(wav, audio.song(DUR, "calm", cuts=[], outro=None, hits=[], seed=p["seed"]), lufs=-17)
    tmp = WORK / f"{name}.mp4"
    s22.render(spec, tmp, wav=wav)
    shutil.move(str(tmp), out / f"m7-{name}.mp4")
    s22.render(spec, out / f"m7-{name}.png", still=p["still"])
    wav.unlink(missing_ok=True)
    return out / f"m7-{name}.mp4"


def render_carousel(name, slides, stills_only=False):
    out = (WORK / "stills" / "carousels" / name) if stills_only else (OUT / "carousels" / name)
    out.mkdir(parents=True, exist_ok=True)
    for i, layers in enumerate(slides, 1):
        # a still well after every entrance has settled (the glow breathes; at 5 s it sits just under its mean)
        spec = {"w": CW, "h": CH, "fps": FPS, "duration": 6.0, "crf": 17, "layers": [{"type": "plain", "color": "#030304"}] + layers}
        s22.render(spec, out / f"m7-{name}-{i:02d}.png", still=[5.0])
    return out


if __name__ == "__main__":
    install()
    args = sys.argv[1:]
    what = args[0] if args else "all"
    stills_only = "stills" in args
    only = [a for a in args[1:] if a != "stills"]
    if what in ("posts", "all"):
        for n, p in posts().items():
            if not only or n in only:
                print("post", n, "->", render_story("story-posts-v2", n, p, stills_only), flush=True)
    if what in ("series", "all"):
        for n, p in series().items():
            if not only or n in only:
                print("series", n, "->", render_story("story-series", n, p, stills_only), flush=True)
    if what in ("carousels", "all"):
        for n, c in carousels().items():
            if not only or n in only:
                print("carousel", n, "->", render_carousel(n, c, stills_only), flush=True)
