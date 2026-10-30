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
