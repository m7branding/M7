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

## Ronde 13: sjabloonbibliotheek, unieke covers, hero-video's en showreels (`templates/`)

33 scènes (`templates/scenes13/d01_*.py` … `d20_*.py` toestellen, `b01_*.py` … `b13_*.py` branding) met 2–3 camera's
elk = 81 composities (+ de 5 uit ronde 12). Elke camera is een eigen sjabloon `<scène>__<camera>`
(`templates/lib/scenekit.py` → `run()`: één keer bouwen, per camera renderen; `R12_PV=1` geeft een snelle preview,
`R12_CAMS=a,c` beperkt de camera's). Nieuw in de compositor:

- **Herkleurbare oppervlakken** (`tmpl.tint_material`, AOV `tnt`): vloer/wand/sokkel neutraal gerenderd (albedo 0,8 met
  ontkleurde textuur), per project ingekleurd vóór AgX: licht (#ECEBE7 …), donker (#2A2B2F …), navy (#0B1426) of de
  verdiepte merkkleur (`designs.tint_dark`; felgeel/limoen → antraciet i.p.v. olijf).
- **Printvlakken** (`tmpl.print_material`, AOV `prn_uv` = u, v, id): visitekaartjes, briefpapier, envelop, posters, vlaggen,
  A-bord, brochure, sticker, blinddruk (reliëf) en een verhoogd 3D-logo op de wand. De ontwerpen (`templates/lib/designs.py`)
  gebruiken alleen het echte logo, de merkkleur en de URL; de fotoposter gebruikt een foto van de eigen site van de klant.
  Kleuren komen ná de view transform op het papier (kleurecht, zoals een foto van een print); het wandlogo gaat door AgX
  zodat het naadloos in de ingekleurde wand overloopt. `templates/lib/orient.py` kiest per printvlak en camera de
  leesrichting (4 rotaties × spiegeling): logo's en tekst staan altijd rechtop (binnen ±25°) en nooit gespiegeld.
- **Logo's** (`templates/lib/logos.py`): de BRAND-kits (logo-dark als vorm, het origineel in kleur waar dat niet
  wit-op-donker is), anders `public/media/cases/<slug>/logo*.svg|png`. SVG's worden met Chromium gerasterd
  (`templates/scenes13/logo_raster.js`).
- **Regels**: print-/briefpapierscènes alleen bij `branding-rebranding` of `grafisch-ontwerp-print`; logo-op-wand bij elk
  project met een echt logo; social posts alleen bij `content-marketing-online-ads`; schermen tonen alleen echte captures
  (geen lege schermen: een toestel zonder inhoud ligt omgekeerd of is dicht).

```bash
cd scripts/mockups/3d/templates/scenes13
./run_q.sh d01_desk_studio d02_mac_top … b13_social_phone   # finals, ~1,5–4 min per camera op 4 cores
cd ../scenes
../../venv/bin/python batch13.py plan                        # r13/plan.json: 18 stills per project + unieke covers
../../venv/bin/python batch13.py stills all -j2              # composieten + WebP binnen het budget (fit); ~5 GB RAM per worker
../../venv/bin/python batch13.py sheet all && ../../venv/bin/python batch13.py install all
../../venv/bin/python video13.py plan && ../../venv/bin/python video13.py hero all     # ~2 min per project, ~3 GB RAM
../../venv/bin/python reel13.py plan && ../../venv/bin/python reel13.py render && ../../venv/bin/python reel13.py install
node scripts/mockups/write-manifest.mjs                      # vanaf de repo-root
```

- **Stills** (`batch13.py`): per project tot 18 composities (toestel/branding afgewisseld, achtergrondfamilie per still
  gevarieerd), `r-01-…` t/m `r-18-…` (2000×1333) en `r-cover.webp` (1800×1125). De cover is per project een
  compositie die geen ander project als cover heeft (eerst de cases die hun r-cover in het /cases-grid tonen, in
  grid-volgorde). Budget: stills + cover ≤ 2,9 MB per project (`R13_STILLS_MB`). `PRESERVE`: MisterGlass houdt zijn
  eigen set uit ronde 11 en krijgt alleen brandingstills (r-11 …) erbij.
- **Hero-video** (`video13.py`): ~10 s, 3 shots (sterk toestelbeeld · branding of merkkleur · ander toestel), elk een
  trage 2.5D-camerabeweging over de hoge-resolutiecompositie (push, pull, drift, rise, sink), de site scrolt op de
  schermen, crossfades en een naadloze loop. Desktop 1600×900 (`r-hero.mp4` + `r-hero.webp`, onderwerp midden/rechts,
  rustig linksonder voor de titel), mobiel staand 720×1280 (`r-hero-m.mp4` + `r-hero-m.webp`, rond het hoofdtoestel).
  Geen twee projecten met dezelfde combinatie. Alleen het scherm wordt per frame opnieuw gesampled
  (`tcomp.StaticFrame`, ~0,3 s per frame).
- **Showreels** (`reel13.py`): 6 × ~30 s (`highlights`, `web`, `branding`, `apps`, `content`, `brand-colour`), korte
  shots op een ritme (1,2–2,8 s), harde cuts met af en toe een korte dissolve, loopt naadloos; geen tekst.
  1920×1080 (≤ 7,5 MB) + 1280×720 (≤ 3 MB) + WebP-poster in `public/media/showreels/`, lijst in
  `src/content/generated/showreels.ts`.
- `write-manifest.mjs` schrijft daarnaast `heroVideo.srcMobile` / `posterMobile` (`<naam>-m.mp4`) en `logo`
  (logo-white.svg|png, anders logo.svg|png).

Praktisch (ronde 13):
- 81 finals ≈ 1,5–4 min per camera op 4 cores (samen ~4 h); compositen daarna: stills ~1 min per project, hero ~2 min,
  showreel ~4–7 min. Een ontwikkeld sjabloon kost in het geheugen ~1–1,5 GB: `batch13.prepared()` houdt er maar 2 vast;
  meer workers dan het geheugen toelaat → de OOM-killer haalt een worker weg en `Pool` blijft hangen.
- `stills` en `hero` weigeren een sjabloon zonder finale render (geen previews van 480×320 op de site).
- Lage camera's staan op een sweep (`scenekit.cyc`, 20 m breed) of een vloer/wand van 20 m, zodat er nooit een
  horizon of ongekleurde wereld in beeld komt; het wandlogo (b06) ligt 0,3 mm voor de wand (geen zichtbare plaatrand).
- Showreels: slugs `highlights` (opent World of M7), `web`, `branding` (alleen printscènes, max. 2 camera's per scène),
  `apps`, `content`, `brand-colour`; per reel één camera per scène; gemengde reels openen op een sterk toestelbeeld
  (dat is ook de poster). Tussenbestand lossless x264 (geen rauwe dump van ~4,5 GB).
- Logo-only cases zonder site krijgen geen hero-video (hun eigen film/foto blijft de hero).
- Hero-video's en showreels beginnen (frame 0 = poster) midden in het eerste shot, nooit op de naad van de loop of in een
  dissolve; de loop blijft naadloos. Bestaande video's zijn zo geroteerd met `templates/scenes13/rotate_hero.sh` / `rotate_reels.py`
  (her-encode binnen hetzelfde budget, PSNR ~46 dB t.o.v. het origineel).
- Staande showreels `<slug>-p.mp4` + `-p.webp` (720×1280, ≤ 2,5 MB, `reel13.py portrait`): zelfde shots en timing; per shot
  de staande camera van dezelfde scène (`<scène>__p`, 1440×2560, voor b02, b05, b06, b08, d01, d02, d03, d09, d11, d19) of
  anders een uitsnede rond het hoofdonderwerp. In `generated/showreels.ts` als `srcPortrait` / `posterPortrait`.
  De `__p`-camera's doen niet mee in stills, covers of hero's (`batch13.library(portrait=False)`).
- Cases zonder live site maar met eigen schermbeelden in hun galerij (`projects.json`: `bare: true` = app-scherm zonder
  browserbalk, `role_src` = welk beeld op welk scherm, `roles` / `exclude_t` / `max_stills`): debiteurnet (portal),
  infrai (app-schermen), perfect-people (site-screenshot uit de eigen cover). Een sjabloon doet alleen mee als alle
  schermen echte inhoud krijgen (`proj.roles_ok`).
