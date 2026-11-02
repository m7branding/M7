"""Build the overview page (artifact) of the social package: plan, reels, stories, swipes, LinkedIn."""
import base64
import html
import io
import json
import os
import sys
from pathlib import Path

from PIL import Image

R = Path("/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18")
ART = R / "art"
OUT = R / "out"


def thumb(path, w=200, q=62):
    im = Image.open(path).convert("RGB")
    im = im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)
    b = io.BytesIO()
    im.save(b, "WEBP", quality=q, method=6)
    return "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()


def main(videos):
    data = json.load(open(ART / "thumbs.json"))
    plan = json.load(open(ART / "posting-plan.json"))
    covers = {}
    for f in sorted((ART / "covers").glob("*/*.jpg")):
        covers[f"{f.parent.name}/{f.stem}"] = thumb(f, 180)
    copy = {}
    for f in sorted((R / "copy").glob("projects-*.json")):
        for e in json.load(open(f)):
            copy[e["slug"]] = e
    # thumbnails per plan row
    story_idx = {s["name"]: s["src"] for s in data["stories"]}
    proj_idx = {p["name"]: p["src"] for p in data["projects"]}
    for r in plan:
        b = r["bestand"]
        t = None
        if b.startswith("stories/"):
            t = story_idx.get(Path(b).stem)
        elif b.startswith("carousels/projects/"):
            t = proj_idx.get(b.split("/")[2])
        elif b.startswith("carousels/themes/"):
            th = data["themes"].get(b.split("/")[2])
            t = th[0] if th else None
        elif b.startswith("reels/"):
            parts = b.split("/")
            t = covers.get(f"{parts[1]}/{Path(parts[2]).stem}")
        elif b.startswith("linkedin/projects/"):
            t = proj_idx.get(b.split("/")[2])
        elif b.startswith("linkedin/themes/"):
            th = data["themes"].get(b.split("/")[2])
            t = th[0] if th else None
        r["t"] = t
    counts = {
        "reels": sum(1 for _ in covers),
        "stories": len(data["stories"]) + 10,
        "swipes": len(data["projects"]) + len(data["themes"]),
        "linkedin": len(data["projects"]) + len(data["themes"]),
        "weeks": max(r["week"] for r in plan),
    }
    reels_by = {}
    for k, v in covers.items():
        reels_by.setdefault(k.split("/")[0], []).append((k.split("/")[1], v))
    li_examples = []
    for s in ["monvy", "privacy-company", "bernheze-makelaars-rebranding"]:
        if s in copy:
            li_examples.append((copy[s]["client"], copy[s]["linkedin"], copy[s]["ig_caption"]))
    page = TEMPLATE
    payload = {"plan": plan, "stories": data["stories"], "themes": data["themes"], "projects": data["projects"], "reels": reels_by, "videos": videos, "counts": counts,
               "li": li_examples}
    page = page.replace("/*DATA*/", "const DATA = " + json.dumps(payload) + ";")
    (ART / "m7-social.html").write_text(page)
    print("page", os.path.getsize(ART / "m7-social.html") // 1024, "KB")


TEMPLATE = r"""<title>M7 Social Pakket</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* Layout: M7's own house style (dark-first, single theme on purpose): black field, gradient words,
   glass chips, cards with a coloured top bar. Plan first, then the creatives by type. */
:root {
  --bg: #030304; --surface: #111115; --surface-2: #18181d; --line: rgba(255,255,255,.09); --line-2: rgba(255,255,255,.16);
  --text: #f6f6f8; --muted: #a7a7b0; --faint: #6c6c76; --teal: #3affff; --green: #18ff59; --yellow: #ffd23a; --purple: #a35bff;
  --g-pixels: linear-gradient(95deg, #3affff 0%, #22ffb4 45%, #18ff59 100%);
  --g-stars: linear-gradient(95deg, #ffe53a 0%, #ffbb1f 50%, #ff7a1a 100%);
  --g-shop: linear-gradient(95deg, #a35bff 0%, #d652ff 50%, #ff4fd8 100%);
  --font: "Montserrat", system-ui, -apple-system, "Segoe UI", sans-serif;
  color-scheme: dark;
}
* { box-sizing: border-box }
html { background: var(--bg) }
body { margin: 0; background: var(--bg); color: var(--text); font: 500 15px/1.55 var(--font); -webkit-font-smoothing: antialiased }
.wrap { max-width: 1240px; margin: 0 auto; padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)) }
.g { -webkit-background-clip: text; background-clip: text; color: transparent; background-image: var(--g-pixels) }
.g2 { -webkit-background-clip: text; background-clip: text; color: transparent; background-image: var(--g-stars) }
.kick { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 12px; letter-spacing: .3em; text-transform: uppercase; color: var(--text) }
.kick::before { content: ""; width: 40px; border-top: 2px dashed var(--teal) }
header.hero { padding-block: 56px 28px; position: relative; overflow: hidden }
header.hero::after { content: ""; position: absolute; inset: -40% -10% auto auto; width: 620px; height: 620px; border-radius: 50%; background: radial-gradient(closest-side, rgba(58,255,255,.14), transparent); pointer-events: none }
h1 { font-weight: 800; font-size: clamp(40px, 7vw, 86px); letter-spacing: -.04em; line-height: .98; margin: 18px 0 18px; text-wrap: balance }
.lead { max-width: 62ch; color: var(--muted); font-size: 17px; margin: 0 }
.pillars { margin-top: 20px; font-weight: 700; font-size: 17px; letter-spacing: -.01em }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-top: 30px }
.stat { background: var(--surface); border: 1px solid var(--line); border-radius: 18px; padding: 16px 18px; position: relative; overflow: hidden }
.stat::before { content: ""; position: absolute; left: 18px; right: 18px; top: 0; height: 4px; border-radius: 0 0 4px 4px; background: var(--g-pixels) }
.stat b { display: block; font-size: 30px; font-weight: 800; letter-spacing: -.03em; font-variant-numeric: tabular-nums }
.stat span { color: var(--muted); font-size: 13px }
.dl { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 26px }
.btn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 18px; border-radius: 999px; font-weight: 700; text-decoration: none; color: #031; background: var(--g-pixels) }
.btn.ghost { color: var(--text); background: rgba(255,255,255,.06); border: 1px solid var(--line-2) }
.btn:focus-visible, .chip:focus-visible, button:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px }
nav.tabs { position: sticky; top: env(safe-area-inset-top, 0px); z-index: 5; background: rgba(3,3,4,.86); backdrop-filter: blur(14px); border-bottom: 1px solid var(--line) }
body::before { content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 10; background: var(--bg) }
nav.tabs .wrap { display: flex; gap: 6px; overflow-x: auto; padding-block: 10px }
nav.tabs a { flex: none; padding: 8px 14px; border-radius: 999px; color: var(--muted); text-decoration: none; font-weight: 600; font-size: 14px }
nav.tabs a:hover { color: var(--text); background: rgba(255,255,255,.05) }
section { padding-block: 44px 12px }
h2 { font-weight: 800; font-size: clamp(28px, 4vw, 44px); letter-spacing: -.035em; line-height: 1.05; margin: 10px 0 8px; text-wrap: balance }
.note { color: var(--muted); max-width: 70ch; margin: 0 0 18px }
.chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 16px 0 18px }
.chip { cursor: pointer; border: 1px solid var(--line-2); background: rgba(255,255,255,.04); color: var(--muted); border-radius: 999px; padding: 7px 12px; font: 600 13px var(--font) }
.chip[aria-pressed="true"] { color: #031; background: var(--g-pixels); border-color: transparent }
.phase { font-weight: 700; font-size: 18px; margin: 0 0 12px }
.rows { display: grid; gap: 8px }
.row { display: grid; grid-template-columns: 52px 64px 1fr auto; gap: 14px; align-items: center; background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 10px 14px 10px 10px }
.row img { width: 64px; height: 80px; object-fit: cover; border-radius: 10px; background: var(--surface-2) }
.row .ph { width: 64px; height: 80px; border-radius: 10px; background: var(--surface-2); display: grid; place-items: center; color: var(--faint); font-size: 11px; text-align: center }
.row .day { font-weight: 800; font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--teal) }
.row .t { min-width: 0 }
.row .t b { display: block; font-weight: 700; overflow-wrap: anywhere }
.row .t code { display: block; font: 500 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--faint); overflow-wrap: anywhere }
.badge { font-weight: 700; font-size: 12px; padding: 5px 10px; border-radius: 999px; border: 1px solid var(--line-2); white-space: nowrap }
.badge.ig { color: var(--teal) } .badge.li { color: #8ab4ff }
.grid { display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)) }
.grid img { width: 100%; border-radius: 12px; display: block; background: var(--surface-2) }
.grid figure { margin: 0 } .grid figcaption { font-size: 11px; color: var(--faint); margin-top: 4px; overflow-wrap: anywhere }
.strip { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px }
.strip img { width: 150px; flex: none; border-radius: 10px }
h3 { font-weight: 800; font-size: 20px; letter-spacing: -.02em; margin: 26px 0 10px }
.videos { display: grid; gap: 14px; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) }
.videos figure { margin: 0; background: var(--surface); border: 1px solid var(--line); border-radius: 18px; padding: 10px }
.videos video { width: 100%; aspect-ratio: 9/16; border-radius: 12px; background: #000; display: block }
.videos figcaption { font-weight: 700; font-size: 14px; margin-top: 8px }
.li { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) }
.post { background: var(--surface); border: 1px solid var(--line); border-radius: 18px; padding: 18px; white-space: pre-wrap; font-size: 14px; color: var(--text); min-width: 0 }
.post h4 { margin: 0 0 10px; font-size: 13px; letter-spacing: .2em; text-transform: uppercase; color: var(--teal) }
.tov { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) }
.tov div { background: var(--surface); border: 1px solid var(--line); border-radius: 18px; padding: 18px }
.tov b { display: block; font-size: 17px; margin-bottom: 6px }
footer { padding-block: 50px 70px; color: var(--faint); font-size: 13px }
.row > * { min-width: 0 }
@media (max-width: 560px) { .row { grid-template-columns: 64px minmax(0, 1fr); } .row img, .row .ph { grid-row: span 3 } .row .day { grid-column: 2; order: -1 } .row .badge { grid-column: 2; justify-self: start; white-space: normal; max-width: 100%; display: inline-block; overflow-wrap: anywhere } }
@media (prefers-reduced-motion: reduce) { * { scroll-behavior: auto !important } }
</style>

<header class="hero"><div class="wrap">
  <div class="kick">M7 social pakket</div>
  <h1>Welcome to our <span class="g">world.</span></h1>
  <p class="lead">Reels, stories, swipes en LinkedIn-posts van al onze projecten, in de stijl van de nieuwe website. Nuchter, kort, met een touch of magic. Plus een plan, week voor week.</p>
  <div class="pillars">Branding. Websites. Apps. Hosting. Marketing. AI. <span class="g">We got you.</span></div>
  <div class="stats" id="stats"></div>
  <div class="dl">
    <a class="btn" href="https://github.com/m7branding/m7-assets-inbox/archive/refs/heads/social-pack.zip" target="_blank" rel="noopener">Download het hele pakket (zip)</a>
    <a class="btn ghost" href="https://github.com/m7branding/m7-assets-inbox/tree/social-pack/social" target="_blank" rel="noopener">Bekijk de map op GitHub</a>
  </div>
</div></header>

<nav class="tabs" aria-label="Onderdelen"><div class="wrap">
  <a href="#plan">Posting plan</a><a href="#reels">Reels</a><a href="#stories">Stories</a><a href="#swipes">Swipes</a><a href="#linkedin">LinkedIn</a><a href="#tov">Tone of voice</a>
</div></nav>

<main>
<section id="plan"><div class="wrap">
  <div class="kick">Posting plan</div>
  <h2>Meenemen in wat we <span class="g">kunnen.</span></h2>
  <p class="note">Week 1 is de launch van de nieuwe site. Daarna één dienst per week, dan masterpieces en achter de schermen, en vanaf week 13 een vaste rotatie tot elk project geweest is. Instagram rond 12:00 of 19:30, LinkedIn di en do rond 8:00, stories 's ochtends.</p>
  <div class="chips" id="weeks" role="group" aria-label="Kies een week"></div>
  <p class="phase" id="phase"></p>
  <div class="rows" id="rows"></div>
</div></section>

<section id="reels"><div class="wrap">
  <div class="kick">Reels</div>
  <h2>Clean, dynamisch, <span class="g2">rustig.</span></h2>
  <p class="note">1080×1920, 30 fps, met eigen gesynthetiseerde muziek (rechtenvrij) op Instagram-volume. Elke reel eindigt met de M7-outro.</p>
  <div class="videos" id="videos"></div>
  <div id="reelgrids"></div>
</div></section>

<section id="stories"><div class="wrap">
  <div class="kick">Stories</div>
  <h2>50 stories. Plus 10 <span class="g">geanimeerd.</span></h2>
  <p class="note">Cases, diensten, cijfers, reviews, manifest, poll, quiz, vraag en kantoor. Laat het lege vlak vrij voor link-, poll- of quiz-stickers.</p>
  <div class="grid" id="storygrid"></div>
</div></section>

<section id="swipes"><div class="wrap">
  <div class="kick">Swipes</div>
  <h2>Per project een <span class="g">swipe.</span></h2>
  <p class="note">7 slides van 1080×1350: cover, de vraag, drie keer beeld, wat we deden, outro. Plus 10 thema's.</p>
  <div id="themes"></div>
  <h3>Projecten</h3>
  <div class="grid" id="projgrid"></div>
</div></section>

<section id="linkedin"><div class="wrap">
  <div class="kick">LinkedIn</div>
  <h2>Zelfde verhaal, iets <span class="g">zakelijker.</span></h2>
  <p class="note">Per project en per thema een post-tekst en de swipe als PDF voor een document-post. Drie voorbeelden:</p>
  <div class="li" id="li"></div>
</div></section>

<section id="tov"><div class="wrap">
  <div class="kick">Tone of voice</div>
  <h2>Nuchter. Kort. Met een touch of <span class="g">magic.</span></h2>
  <div class="tov">
    <div><b>Brabants nuchter</b>Geen poespas, geen buzzwords. Zeg het zoals aan tafel: eerlijk, warm, een tikje droog.</div>
    <div><b>Kort en to the point</b>Korte zinnen, veel punten. Eén idee per regel. Laten zien, niet teveel lullen.</div>
    <div><b>Engels als kruiding</b>Smooth, next level, done, live, clean, on brand. Een paar per post, geen hele Engelse zinnen.</div>
    <div><b>Nooit verzinnen</b>Alleen feiten uit de cases. M7-cijfers: 250+ klanten, 75+ WordPress, 50+ Webflow, 275+ domeinen, 3000+ storingen opgelost.</div>
  </div>
</div></section>
</main>
<footer><div class="wrap">M7 Branding &amp; Design · Nistelrode · m7branding.com. Alles staat in de branch <b>social-pack</b> van de privé-repo m7-assets-inbox, in de map <b>social/</b>, met README, posting-plan.csv en alle captions.</div></footer>

<script>
/*DATA*/
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const PH = { 1: "Launch: Welcome to our world + de nieuwe website", 2: "Branding-week", 3: "Websites-week", 4: "Apps-week", 5: "Hosting-week", 6: "Marketing-week", 7: "AI-week", 8: "Logo's & brandbooks", 9: "Masterpieces", 10: "Achter de schermen", 11: "From pixels to stars", 12: "From pixels to stars (2)" };
const c = DATA.counts;
$("#stats").innerHTML = [[c.reels, "reels"], [c.stories, "stories"], [c.swipes, "swipes"], [c.linkedin, "LinkedIn-posts"], [c.weeks, "weken gepland"]].map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");
const weeks = [...new Set(DATA.plan.map((r) => r.week))];
const shown = weeks.filter((w) => w <= 12);
let cur = 1;
function drawWeek(w) {
  cur = w;
  document.querySelectorAll("#weeks .chip").forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.w === w || (b.dataset.w === "ever" && w > 12))));
  const rows = w === "ever" ? DATA.plan.filter((r) => r.week > 12) : DATA.plan.filter((r) => r.week === w);
  $("#phase").textContent = w === "ever" ? `Week 13 t/m ${c.weeks}: evergreen-rotatie (${rows.length} posts)` : `Week ${w}: ${PH[w] || ""}`;
  $("#rows").innerHTML = rows.slice(0, w === "ever" ? 60 : 99).map((r) => `<div class="row"><span class="day">${w === "ever" ? "w" + r.week + " " : ""}${esc(r.dag)}</span>${r.t ? `<img src="${r.t}" alt="" loading="lazy">` : `<span class="ph">${esc(r.format)}</span>`}<span class="t"><b>${esc(r.titel)}</b><code>${esc(r.bestand)}</code></span><span class="badge ${r.kanaal === "LinkedIn" ? "li" : "ig"}">${esc(r.kanaal)} · ${esc(r.format)}</span></div>`).join("") + (w === "ever" && rows.length > 60 ? `<p class="note">… en nog ${rows.length - 60} posts, zie posting-plan.csv.</p>` : "");
}
$("#weeks").innerHTML = shown.map((w) => `<button class="chip" data-w="${w}">Week ${w}</button>`).join("") + `<button class="chip" data-w="ever">Week 13+</button>`;
$("#weeks").addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) drawWeek(b.dataset.w === "ever" ? "ever" : +b.dataset.w); });
drawWeek(1);
$("#videos").innerHTML = DATA.videos.map((v) => `<figure><video src="${v.src}" controls playsinline preload="metadata" muted poster="${v.poster || ""}"></video><figcaption>${esc(v.title)}</figcaption></figure>`).join("");
const RT = { "01-project-clean": "Clean per project", "02-project-dynamic": "Dynamisch: masterpieces", "03-dienst-dynamic": "Per dienst", "04-calm": "Calm", "05-m7": "M7 zelf" };
$("#reelgrids").innerHTML = Object.keys(RT).filter((k) => DATA.reels[k]).map((k) => `<h3>${RT[k]} <span style="color:var(--faint);font-weight:600">(${DATA.reels[k].length})</span></h3><div class="grid">${DATA.reels[k].map(([n, s]) => `<figure><img src="${s}" alt="${esc(n)}" loading="lazy"><figcaption>${esc(n)}</figcaption></figure>`).join("")}</div>`).join("");
$("#storygrid").innerHTML = DATA.stories.map((s) => `<figure><img src="${s.src}" alt="${esc(s.name)}" loading="lazy"><figcaption>${esc(s.name)}</figcaption></figure>`).join("");
$("#themes").innerHTML = Object.entries(DATA.themes).map(([k, v]) => `<h3>${esc(k.replace(/^\d+-/, "").replace(/-/g, " "))}</h3><div class="strip">${v.map((s) => `<img src="${s}" alt="" loading="lazy">`).join("")}</div>`).join("");
$("#projgrid").innerHTML = DATA.projects.map((p) => `<figure><img src="${p.src}" alt="${esc(p.name)}" loading="lazy"><figcaption>${esc(p.name.replace(/^\d+-/, ""))}</figcaption></figure>`).join("");
$("#li").innerHTML = DATA.li.map(([n, li]) => `<div class="post"><h4>${esc(n)}</h4>${esc(li)}</div>`).join("");
</script>
"""

if __name__ == "__main__":
    vids = json.loads(sys.argv[1]) if len(sys.argv) > 1 else []
    main(vids)
