# Realistische 3D-mockups (Blender / Cycles)

Fotorealistische stills en hero-video's van echte schermen op procedureel gemodelleerde Apple-toestellen
(MacBook Pro 14", iPhone 17 Pro, iPad Pro 13" + Pencil, Studio Display). Eerste toepassing: MisterGlass
(`public/media/cases/misterglass/r-*.webp`, `r-hero-*.mp4`). Geen modellen van derden, geen Apple-logo's;
omgevingen en materialen zijn CC0 van Poly Haven (zie `ASSETS.md`).

## Opzet (eenmalig)

```bash
cd scripts/mockups/3d
python3.13 -m venv venv && venv/bin/pip install bpy==5.2.3 numpy pillow OpenEXR
venv/bin/python scenes/fetch_assets.py          # HDRI's, texturen, planten -> assets/
```

## Per project

1. **Captures** (Playwright, apparaat-exacte viewports): `node cap/screens.js cap/screens` en
   `node cap/elements.js cap/el` (UI-fragmenten voor de zwevende kaarten). De URL's en selectors staan
   bovenin de scripts en zijn per project aan te passen.
2. **Texturen**: `venv/bin/python scenes/screens.py` en `venv/bin/python scenes/cards.py` -> `tex/`.
3. **Preview** (laag, ~20 s): `venv/bin/python scenes/s01_desk.py` -> `out/r-01-desk_pv.png`.
4. **Final**: `scenes/run_finals.sh s01_desk s02_macbook …` (3,5–11 min per still op 4 CPU-cores),
   video's met `scenes/run_videos.sh` (~30 min per video).
5. **Naar de site**: `venv/bin/python scenes/finalize.py --copy` en daarna
   `node scripts/mockups/write-manifest.mjs` (vanaf de repo-root). `r-*.webp` komt vooraan in de galerij,
   `r-hero*.mp4` wordt de case-hero (keuze per slug in `scripts/mockups/config.json` -> `heroVideo`).

Projectspecifiek zijn: de captures, `screens.py`/`cards.py` (welke uitsneden texturen en kaarten worden),
de textuurnamen in de scènebestanden en de merkkleuren in s04, s05, s09 en s10. `finalize.py` schrijft
nu naar `misterglass`; pas `DST` en `NAMES` aan voor een ander project.

## Sjablonen voor alle projecten (`templates/`)

Elke scène wordt **één keer** gerenderd; daarna worden de schermen van elk project er in numpy in gezet
(seconden per still, ~1–2 min per video). Belichting, reflecties, schaduwen en scherptediepte blijven echt.

- `templates/lib/tmpl.py` (Blender-kant): schermmateriaal = wit, alleen voor camerastralen, in light group
  `screen`, met shader-AOV's `scr_uv` (u, v, scherm-id) en `scr_cov`; wereldlicht in light group `env`.
  Uitvoer per frame: `_rgb` (Combined), `_scr` (wit scherm W), `_env`, `_uv`, `_cov` en bij transparante
  sjablonen `_sc` (Shadow Catcher). `masks.py` maakt de displaymaskers (afgeronde hoeken, Dynamic Island, notch).
- `templates/lib/tcomp.py` (compositor): `prepare()` ontwikkelt het sjabloon (AgX buiten het scherm) en slaat
  per schermpixel de displaycoördinaten + UV-afgeleiden op; `finish()` zet de inhoud erin: mip-mapped,
  anisotroop (OpenCV remap) en kleurexact (sRGB, met 25% van de glasreflectie), en legt transparante sjablonen
  op een neutrale of diepblauwe achtergrond (`templates/lib/backdrops.py`, zie hieronder) met de echte schaduw.
- `templates/lib/proj.py`: per project de schermbeelden (captures + iOS-statusbalk/Safari-pil,
  macOS-menubalk/werkbalk, iPadOS-balk) en welke capture op welk toestel komt (`ROLE_SOURCES`).
- Sjablonen: `t1_gravity` (zwevende, kantelende iPhones + iPad), `t2_closeup`, `t3_plinth` (MacBook op
  betonnen sokkel), `t4_float_ipad`, `t5_ipads_dark`; animaties `v_a_gravity` en `v_b_plinth` (unieke frames,
  ping-pong met cosinus-easing; de site scrolt per uitvoerframe).

```bash
cd scripts/mockups/3d/templates/scenes
../../venv/bin/python ../lib/masks.py                    # eenmalig
./run_tpl.sh t1_gravity t2_closeup t3_plinth t4_float_ipad t5_ipads_dark v_a_gravity v_b_plinth   # ~2,5 h CPU
../../venv/bin/python batch.py prep -j4                  # sjablonen ontwikkelen + cachen
R12_PROJECTS=/pad/naar/projects.json ../../venv/bin/python batch.py stills all -j4
R12_PROJECTS=/pad/naar/projects.json ../../venv/bin/python batch.py video all -j4
../../venv/bin/python batch.py fit all -j4             # WebP-kwaliteit per project zodat alles <= 1,6 MB blijft
../../venv/bin/python batch.py sheets all && ../../venv/bin/python batch.py install all
node ../../../write-manifest.mjs                         # vanaf de repo-root: node scripts/mockups/write-manifest.mjs
```

`projects.json`: `[{slug, client, color, captures, url?}]`; `captures` bevat `hero-desktop.png` (2880×1800),
`full-desktop.png` (1440 breed), `hero-mobile.png` (1170×2532), `full-mobile.png` (780 breed),
`hero-tablet.png` (2360×1640). Een voorbeeld zonder renderen: `scenes/t1_gravity.py` met `R12_PV=1`
(standaard) rendert een kleine preview in een paar seconden. De venv heeft daarnaast
`opencv-python-headless` nodig (`venv/bin/pip install opencv-python-headless`).
Rendertijd sjablonen (4 CPU-cores): stills 4–8 min elk, animatie A 80 frames × ~40 s, B 80 × ~35 s
(samen ~2,5 h). Compositen: ~25 s per project voor alle stills, ~60 s per video.
Per project: `r-01-gravity`, `r-02-closeup`, `r-03-plinth`, `r-04-floating-ipad`, `r-05-ipads` (.webp),
`r-cover.webp` (2400×1500) en `r-hero.mp4` + `r-hero.webp` (animatie A of B, afhankelijk van de merkkleur).

### Achtergronden (`templates/lib/backdrops.py`, ronde 12b)

T1, T2 en animatie A staan niet meer op een merkkleur maar op een klein, vast setje van 14 achtergronden:
licht (white #F2F2F0, light-grey #E3E4E6, mid-grey #CDCFD2, white-leaves, grey-plaster, white-linen, white-dune),
donker (graphite #2A2B2F, anthracite #1D1E21, near-black #0D0E10, anthracite-plaster, graphite-dune) en
diepblauw (navy-glow #070C1A, navy-nebula #060B18).

- Elke achtergrond wordt via de opgeslagen camera (`meta.json` → `camera` / `cameras`, schrijf die zonder te renderen met
  `R12_PV=0 R12_META_ONLY=1 ../../venv/bin/python t1_gravity.py`) op de echte vloer (z = 0) geprojecteerd: lichtpoel,
  texturen en bladschaduw staan in perspectief en krijgen echte parallax in de video.
- Bladschaduw: `scenes/gobo_leaves.py` rendert de gobo (CC0-planten) eenmalig naar `bgtex/leaves.png`.
  Pleister en linnen: Poly Haven `white_plaster_02`, `rough_linen` (CC0, alleen de diffuse kaart, hoogdoorlaat, ±2–3,5 %).
  Duin-banen en nevel: procedureel.
- Donker en blauw: lichtpoel onder de toestellen plus een brede, zwakke halo uit het toestel-silhouet (scheiding van
  space black zonder 'outer glow'). Statische fijne korrel in beeldruimte tegen banding (WebP en H.264).
- In animatie A drijven poel en nevel langzaam mee (naadloze loop).
- Toewijzing (`scenes/assign_bg.py` → `bg-assign.json`): de 40 % donkerste sites (luminantie van hero-desktop + hero-mobile)
  krijgen licht, de rest donker (35 %) of blauw (25 %); varianten per quotum langs de volgorde van het /cases-grid, zodat
  buren verschillen (volgorde: `work/grid_order.txt`, één slug per regel zoals op /cases: uitgelicht, met cover, zonder cover; zonder dat bestand de volgorde van projects.json). `batch.py` → `BG_OVERRIDE`: op T2 wordt near-black anthracite (de rand van de close-up-iPhone verdwijnt
  anders). Achtergronden per sjabloon worden gecachet in `tpl/<sjabloon>/bg/`.
