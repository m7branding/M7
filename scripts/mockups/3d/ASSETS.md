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
