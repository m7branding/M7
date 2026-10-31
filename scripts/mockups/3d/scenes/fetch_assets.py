"""Download the CC0 Poly Haven assets used by the r11 scenes (idempotent).
usage: python3 fetch_assets.py"""
import json, os, urllib.request, sys
UA = {'User-Agent': 'Mozilla/5.0 (r11-asset-fetch)'}
def req(u): return urllib.request.Request(u, headers=UA)
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'assets')
API = 'https://api.polyhaven.com/files/'
MODELS = ['potted_plant_02', 'pachira_aquatica_01', 'ceramic_vase_03', 'potted_plant_04']
TEXTURES = {'oak_veneer_03': '2k', 'oak_veneer_01': '2k', 'concrete_floor_01': '2k', 'fabric_leather_02': '2k', 'slate_floor_02': '2k',
            'smooth_concrete_floor': '2k', 'concrete_wall_006': '2k', 'white_plaster_02': '2k', 'rough_linen': '2k'}
HDRIS = {'studio_small_09': '2k', 'white_studio_03': '2k', 'photo_studio_loft_hall': '2k', 'studio_kontrast_03': '2k', 'white_home_studio': '2k'}

def get(url, dst):
    if os.path.exists(dst) and os.path.getsize(dst) > 0: return
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    print('GET', url, flush=True)
    with urllib.request.urlopen(req(url), timeout=120) as r, open(dst + '.part', 'wb') as f:
        f.write(r.read())
    os.replace(dst + '.part', dst)

def files(a):
    with urllib.request.urlopen(req(API + a), timeout=60) as r: return json.load(r)

for m in MODELS:
    g = files(m)['gltf']['2k']['gltf']
    d = os.path.join(ROOT, 'models', m)
    get(g['url'], os.path.join(d, os.path.basename(g['url'])))
    for rel, v in g.get('include', {}).items(): get(v['url'], os.path.join(d, rel))
for t, res in TEXTURES.items():
    f = files(t)
    for mp in ['Diffuse', 'nor_gl', 'Rough', 'Displacement', 'arm']:
        if mp in f and res in f[mp]:
            v = f[mp][res].get('jpg') or f[mp][res].get('png')
            get(v['url'], os.path.join(ROOT, 'textures', t, os.path.basename(v['url'])))
for h, res in HDRIS.items():
    v = files(h)['hdri'][res]['hdr']
    get(v['url'], os.path.join(ROOT, 'hdri', os.path.basename(v['url'])))
print('ok')
