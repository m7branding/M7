"""Review page for round 20: a few clean reels to play, a poster strip for every reel (grouped per client) and the
new clean stories. The full-quality files live in the private delivery repo (m7-assets-inbox, social-pack).

  python review20.py <sample reel paths...>
"""
import glob
import html
import json
import os
import shutil
import sys

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
R = f"{S}/r20"
DST = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/m7-reels-v2"
KIND = {"web": "Website / app", "brand": "Brandbook", "design": "Design", "story": "Het hele verhaal"}

os.makedirs(DST, exist_ok=True)
hosts = {h["slug"]: h for h in json.load(open(f"{S}/r18/projects.json"))}
samples = sys.argv[1:]
files = {}


def put(src, rel):
    d = os.path.join(DST, rel)
    os.makedirs(os.path.dirname(d), exist_ok=True)
    if not os.path.exists(d) or os.path.getmtime(d) < os.path.getmtime(src):
        shutil.copy2(src, d)
    files[rel] = d
    return rel


# playable samples
vids = []
for p in samples:
    host = os.path.basename(os.path.dirname(p))
    name = os.path.basename(p)[:-4]
    kind = name.rsplit("-", 1)[-1]
    rel = f"v/{name}.mp4"            # a light 720p preview; the full-quality file is in the private repo
    d = os.path.join(DST, rel)
    os.makedirs(os.path.dirname(d), exist_ok=True)
    if not os.path.exists(d):
        os.system(f'ffmpeg -v error -y -i "{p}" -vf scale=720:1280 -c:v libx264 -preset slow -crf 26 -c:a aac -b:a 128k -movflags +faststart "{d}"')
    files[rel] = d
    client = hosts.get(host, {}).get("client", host)
    vids.append(f'<figure><figcaption>{html.escape(client)} <span>{KIND.get(kind, kind)}</span></figcaption><video src="{rel}" controls playsinline preload="metadata"></video></figure>')

# poster strips per client
groups = {}
for f in sorted(glob.glob(f"{R}/posters/*/*.jpg")):
    host = os.path.basename(os.path.dirname(f))
    groups.setdefault(host, []).append(f)
order = sorted(groups, key=lambda h: (hosts.get(h, {}).get("rank") if hosts.get(h, {}).get("rank") is not None else 999, h))
cards, n = [], 0
for hst in order:
    rows = []
    for f in groups[hst]:
        name = os.path.basename(f)[:-4]
        kind = name.rsplit("-", 1)[-1]
        rel = put(f, f"p/{hst}/{os.path.basename(f)}")
        rows.append(f'<div class="row"><span class="tag">{KIND.get(kind, kind)}</span><img src="{rel}" alt="{html.escape(name)}" loading="lazy"><code>{html.escape(name)}.mp4</code></div>')
        n += 1
    client = hosts.get(hst, {}).get("client", hst)
    cards.append(f'<article class="card"><h3>{html.escape(client)}</h3>{"".join(rows)}</article>')

# stories
st = sorted(glob.glob(f"{R}/out/stories-v2/*.jpg"))
thumbs = []
for f in st:
    rel = f"s/{os.path.basename(f)}"   # 540x960 preview of the 1080x1920 story
    d = os.path.join(DST, rel)
    os.makedirs(os.path.dirname(d), exist_ok=True)
    from PIL import Image
    Image.open(f).convert("RGB").resize((540, 960), Image.LANCZOS).save(d, quality=84)
    files[rel] = d
    thumbs.append(f'<a href="{rel}" target="_blank" rel="noopener"><img src="{rel}" alt="{html.escape(os.path.basename(f))}" loading="lazy"></a>')

page = f'''<title>M7 Clean Reels</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* Layout: playable samples first, then every reel as a 4-frame strip grouped per client, then the stories grid.
   One dark look on purpose (M7's own world). */
:root {{ --bg:#030304; --surface:#101014; --line:rgba(255,255,255,.1); --text:#f6f6f8; --muted:#a7a7b0; --teal:#3affff; --font:"Montserrat",system-ui,-apple-system,"Segoe UI",sans-serif; color-scheme:dark }}
* {{ box-sizing:border-box }} html {{ background:var(--bg) }}
body {{ margin:0; background:var(--bg); color:var(--text); font:500 15px/1.55 var(--font); -webkit-font-smoothing:antialiased }}
.wrap {{ max-width:1320px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:44px 64px }}
.k {{ display:flex; align-items:center; gap:12px; font-weight:700; font-size:12px; letter-spacing:.3em; text-transform:uppercase }} .k::before {{ content:""; width:40px; border-top:2px dashed var(--teal) }}
h1 {{ font-weight:800; font-size:clamp(34px,5.5vw,64px); letter-spacing:-.04em; line-height:1; margin:14px 0 12px; text-wrap:balance }}
h1 span {{ -webkit-background-clip:text; background-clip:text; color:transparent; background-image:linear-gradient(95deg,#3affff,#22ffb4 45%,#18ff59) }}
h2 {{ font-size:24px; font-weight:800; letter-spacing:-.02em; margin:44px 0 6px }}
.lead {{ color:var(--muted); max-width:72ch; margin:0 0 22px }}
.vids {{ display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px }}
figure {{ margin:0 }} figcaption {{ font-weight:700; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--teal); margin-bottom:8px; display:flex; justify-content:space-between; gap:8px }}
figcaption span {{ color:var(--muted); letter-spacing:.04em; text-transform:none; font-weight:600 }}
video {{ width:100%; aspect-ratio:9/16; object-fit:cover; border-radius:14px; background:#000; display:block }}
.cards {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 380px), 1fr)); gap:14px }}
.card {{ background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:14px; min-width:0 }}
.card h3 {{ margin:0 0 10px; font-size:17px; font-weight:800 }}
.row {{ display:grid; gap:6px; margin-bottom:12px }} .row:last-child {{ margin-bottom:0 }}
.row img {{ width:100%; border-radius:10px; display:block; background:#000 }}
.tag {{ font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--teal) }}
code {{ color:var(--muted); font-size:12px; overflow-wrap:anywhere }}
.stories {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:10px }}
.stories img {{ width:100%; aspect-ratio:9/16; object-fit:cover; border-radius:10px; display:block }}
a:focus-visible, video:focus-visible {{ outline:2px solid var(--teal); outline-offset:2px }}
footer {{ color:var(--muted); font-size:13px; margin-top:36px; max-width:78ch }}
</style>
<div class="wrap">
<div class="k">M7 social · reels v2</div>
<h1>Clean reels, <span>per project.</span></h1>
<p class="lead">Elke reel: kort de M7-tekening die uitloopt in het gevulde emblem, daarna schermvullende mockups met het echte werk, glazen labels met de diensten en de M7-outro. Per project en per onderdeel: de website of app, het design, het brandbook (logo's strak op papier, met de kleuren erbij, geen schaduw), en per klant één reel die het hele verhaal laat zien.</p>
<h2>Om af te spelen</h2>
<div class="vids">{"".join(vids)}</div>
<h2>Alle reels ({n})</h2>
<p class="lead">Per klant, vier beelden per reel. De mp4's staan in de private repo onder <code>social/reels-v2/&lt;klant&gt;/</code>.</p>
<div class="cards">{"".join(cards)}</div>
<h2>Stories ({len(thumbs)})</h2>
<p class="lead">Zelfde stijl, statisch: één schermvullend beeld, klein M7-teken bovenin, glazen labels onderin. In de repo onder <code>social/stories-v2/</code>.</p>
<div class="stories">{"".join(thumbs)}</div>
<footer>Alleen echt werk: echte schermen, echte ontwerpen en echte brandbooks. Waar een klant geen brandbook van ons heeft maar wel branding, staat het echte logo met het geverifieerde kleurenpalet op M7's eigen brand sheets.</footer>
</div>'''
open(os.path.join(DST, "index.html"), "w").write(page)
json.dump(files, open(os.path.join(DST, "files.json"), "w"))
print(DST, len(files), "files", n, "reels", len(thumbs), "stories")
