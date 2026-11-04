# r11 — third-party assets used in the MisterGlass 3D renders

All 3D devices (MacBook Pro 14", iPhone 17 Pro, iPad Pro 13" + Apple Pencil Pro, Studio Display) are modelled
procedurally in `scenes/lib/r3d.py` (no third-party device models, no Apple logos). Screen content = own
Playwright captures of misterglass.nl (client site built by M7).

| Asset | Type | Source URL | License | Used in |
|---|---|---|---|---|
| studio_small_09 | HDRI (2k) | https://polyhaven.com/a/studio_small_09 | CC0 | s02, s03 (+video B), s05, s07 |
| white_home_studio | HDRI (2k) | https://polyhaven.com/a/white_home_studio | CC0 | s01 (+video A), s08, s10 |
| studio_kontrast_03 | HDRI (2k) | https://polyhaven.com/a/studio_kontrast_03 | CC0 | s06, s09 |
| oak_veneer_01 | PBR texture (2k) | https://polyhaven.com/a/oak_veneer_01 | CC0 | s01 desk, s08 desk |
| concrete_floor_01 | PBR texture (2k) | https://polyhaven.com/a/concrete_floor_01 | CC0 | s06 dark terrazzo (darkened), s10 light terrazzo |
| potted_plant_04 | glTF model (2k) | https://polyhaven.com/a/potted_plant_04 | CC0 | s01 succulent |
| potted_plant_02 | glTF model (2k) | https://polyhaven.com/a/potted_plant_02 | CC0 | s01 out-of-focus foreground leaves |
| pachira_aquatica_01 | glTF model (2k) | https://polyhaven.com/a/pachira_aquatica_01 | CC0 | s01 out-of-frame gobo (leaf shadows) |

Downloaded but not used in the final set: white_studio_03, photo_studio_loft_hall (HDRI), oak_veneer_03,
slate_floor_02, fabric_leather_02 (textures; the s06 leather mat is procedural), ceramic_vase_03 (model). `scenes/fetch_assets.py` re-downloads everything.

Fonts used inside textures (status bar, browser toolbar, keyboard legends): Inter (SIL OFL 1.1), DejaVu Sans
(arrow / ⌘ glyphs, free license). Software: Blender 5.2 (bpy, GPL — output is not covered), OpenColorIO, OIDN.

## Templates (round 12, all projects)

| Asset | Type | Source URL | License | Used in |
|---|---|---|---|---|
| concrete_wall_006 | PBR texture (2k) | https://polyhaven.com/a/concrete_wall_006 | CC0 | T3 plinth, T4 pedestal, T5 surface, animation B |
| smooth_concrete_floor | PBR texture (2k) | https://polyhaven.com/a/smooth_concrete_floor | CC0 | downloaded, not used |
| white_plaster_02 | PBR texture (2k, diffuse only) | https://polyhaven.com/a/white_plaster_02 | CC0 | backdrops grey-plaster / anthracite-plaster (desaturated, high-passed, ±3.5 %) |
| rough_linen | PBR texture (2k, diffuse only) | https://polyhaven.com/a/rough_linen | CC0 | backdrop white-linen (desaturated, high-passed, ±2 %) |
| pachira_aquatica_01 + potted_plant_02 | glTF models (already in r11) | https://polyhaven.com/a/pachira_aquatica_01 , https://polyhaven.com/a/potted_plant_02 | CC0 | leaf-shadow gobo for the white-leaves backdrop (scenes/gobo_leaves.py -> bgtex/leaves.png) |

The templates use no HDRI (area lights + flat world colour). OpenCV (Apache 2.0) samples the screen textures.

Backdrops (round 12b): the dune bands and the navy nebula are procedural (numpy fBm), no assets.

## Round 13 (template library: 33 scenes, 81 compositions)

| Asset | Type | Source URL | License | Used in |
|---|---|---|---|---|
| concrete_wall_006 | PBR texture (2k) | https://polyhaven.com/a/concrete_wall_006 | CC0 | recolourable floors / walls / blocks (d02, d05, d07, d09, d12–d14, d16, d17, b01, b05, b10) |
| concrete_floor_01 | PBR texture (2k) | https://polyhaven.com/a/concrete_floor_01 | CC0 | stone slabs and floors (d07, b11 …) |
| white_plaster_02 | PBR texture (2k) | https://polyhaven.com/a/white_plaster_02 | CC0 | plaster floors (d03, d08, d19, b02, b09) |
| rough_linen | PBR texture (2k) | https://polyhaven.com/a/rough_linen | CC0 | linen surface (d06) |
| oak_veneer_01 | PBR texture (2k) | https://polyhaven.com/a/oak_veneer_01 | CC0 | desks / bench (d01, b03, b12) |
| oak_veneer_03 | PBR texture (2k) | https://polyhaven.com/a/oak_veneer_03 | CC0 | walnut desk (d15) — was downloaded in r11, now used |
| potted_plant_04 | glTF model (2k) | https://polyhaven.com/a/potted_plant_04 | CC0 | succulent on the bench (b03) |
| pachira_aquatica_01 | glTF model (2k) | https://polyhaven.com/a/pachira_aquatica_01 | CC0 | out-of-frame leaf-shadow gobo (d01, d06, b02, b03 via scenekit.leaf_gobo) |

Recolourable surfaces are rendered neutral (albedo 0.8, texture desaturated around it) and coloured per project in the
compositor. Print designs (business cards, letterhead, envelope, posters, flags, A-frame, brochure, sticker, blind
emboss, raised wall logo, social grid) are drawn in PIL from the client's real logo (BRAND kit, SCRATCH/r13/brand →
public/media/cases/<slug>/logo*.svg|png), the brand colour and the URL only; the photo poster uses a photo from the
client's own site (BRAND kit imagery) or the site capture. Text in prints: Inter (SIL OFL 1.1). No new HDRIs.
