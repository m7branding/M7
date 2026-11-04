"""Review page for the round-19 style samples (3 directions × reel, story, carousel)."""
import glob, os, shutil, sys
SRC = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r19/out"
DST = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/m7-stijlen"
STY = [
    ("a-pure", "A · Puur", "Zachte crossfades met een fluistering van schaal. Glazen pillen per dienst, midden onderin.", "Monvy", "Repairlab", "Huurfix"),
    ("b-cinematic", "B · Cinematic", "Langere shots, blur-overgangen, fijne filmkorrel en vignet. Eén glazen balk met de diensten.", "Hela", "Plenty Planet", "Bernheze Makelaars"),
    ("c-precision", "C · Precisie", "Kortere shots, een strakke haarlijn-wipe. Kleine glazen chips links onderin.", "The Digital Clinic", "Fairlink", "Expociety"),
]
files = {}
os.makedirs(DST, exist_ok=True)
cols = []
for key, title, note, rc, sc, cc in STY:
    reel = glob.glob(f"{SRC}/reels/reel-{key}-*.mp4")
    story = glob.glob(f"{SRC}/stories/story-{key}-*.jpg")
    car = sorted(glob.glob(f"{SRC}/carousels/carousel-{key}-*/*.jpg"))
    for f in reel + story + car:
        rel = f"{key}/" + ("/".join(f.split("/")[-2:]) if "/carousels/" in f else os.path.basename(f))
        d = os.path.join(DST, rel)
        os.makedirs(os.path.dirname(d), exist_ok=True)
        shutil.copy2(f, d)
        files[rel] = d
    rrel = f"{key}/{os.path.basename(reel[0])}" if reel else ""
    srel = f"{key}/{os.path.basename(story[0])}" if story else ""
    crels = [f"{key}/" + "/".join(f.split("/")[-2:]) for f in car]
    cols.append(f'''<article class="col"><header><h2>{title}</h2><p>{note}</p></header>
<figure><figcaption>Reel · {rc}</figcaption>{f'<video src="{rrel}" controls playsinline preload="metadata"></video>' if rrel else '<div class="ph">reel volgt</div>'}</figure>
<figure><figcaption>Story · {sc}</figcaption><img src="{srel}" alt="Story {sc}" loading="lazy"></figure>
<figure><figcaption>Carousel · {cc} <span>swipe →</span></figcaption><div class="strip">{"".join(f'<img src="{c}" alt="" loading="lazy">' for c in crels)}</div></figure></article>''')
html = f'''<title>M7 Social Stijlen</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* Layout: three style directions as columns (stacked on phones); the work itself is the hero. Single dark look on purpose (M7). */
:root {{ --bg:#030304; --surface:#101014; --line:rgba(255,255,255,.1); --text:#f6f6f8; --muted:#a7a7b0; --teal:#3affff; --font:"Montserrat",system-ui,-apple-system,"Segoe UI",sans-serif; color-scheme:dark }}
* {{ box-sizing:border-box }} html {{ background:var(--bg) }}
body {{ margin:0; background:var(--bg); color:var(--text); font:500 15px/1.55 var(--font); -webkit-font-smoothing:antialiased }}
.wrap {{ max-width:1320px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:44px 64px }}
.k {{ display:flex; align-items:center; gap:12px; font-weight:700; font-size:12px; letter-spacing:.3em; text-transform:uppercase }} .k::before {{ content:""; width:40px; border-top:2px dashed var(--teal) }}
h1 {{ font-weight:800; font-size:clamp(34px,5.5vw,64px); letter-spacing:-.04em; line-height:1; margin:14px 0 12px; text-wrap:balance }}
h1 span {{ -webkit-background-clip:text; background-clip:text; color:transparent; background-image:linear-gradient(95deg,#3affff,#22ffb4 45%,#18ff59) }}
.lead {{ color:var(--muted); max-width:70ch; margin:0 0 28px }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:18px }}
.col {{ background:var(--surface); border:1px solid var(--line); border-radius:22px; padding:16px; min-width:0; display:grid; gap:16px; align-content:start }}
.col h2 {{ margin:0 0 4px; font-size:22px; font-weight:800; letter-spacing:-.02em }} .col header p {{ margin:0; color:var(--muted); font-size:14px }}
figure {{ margin:0 }} figcaption {{ font-weight:700; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--teal); margin-bottom:8px; display:flex; justify-content:space-between }}
figcaption span {{ color:var(--muted); letter-spacing:.06em; text-transform:none; font-weight:600 }}
video, figure > img {{ width:100%; aspect-ratio:9/16; object-fit:cover; border-radius:14px; background:#000; display:block }}
.strip {{ display:flex; gap:8px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:6px }}
.strip img {{ width:78%; flex:none; aspect-ratio:4/5; object-fit:cover; border-radius:12px; scroll-snap-align:start }}
.ph {{ aspect-ratio:9/16; border-radius:14px; background:#000; display:grid; place-items:center; color:var(--muted) }}
footer {{ color:var(--muted); font-size:13px; margin-top:28px; max-width:75ch }}
video:focus-visible, .strip:focus-visible {{ outline:2px solid var(--teal); outline-offset:2px }}
</style>
<div class="wrap">
<div class="k">M7 social · nieuwe stijlen</div>
<h1>Clean. Full screen. <span>Magic.</span></h1>
<p class="lead">Drie richtingen om te beoordelen. Overal hetzelfde principe: geen pixels of drukke verlopen, de 3D-mockups schermvullend en scherp (staande camera's, echte schermen die scrollen), geen tekst. Alleen kort het M7-logo als technische tekening bij de start, glazen labels met de diensten onderin, en de M7-outro aan het eind.</p>
<div class="grid">{"".join(cols)}</div>
<footer>Kies een richting (of mix: bijvoorbeeld de beelden van A met de labels van C), dan zet ik het hele pakket in die stijl om.</footer>
</div>'''
open(os.path.join(DST, "m7-stijlen.html"), "w").write(html)
import json
json.dump(files, open(os.path.join(DST, "files.json"), "w"))
print(len(files), "files")
