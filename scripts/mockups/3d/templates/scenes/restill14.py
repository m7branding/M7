"""Re-render installed stills / covers of given templates in place (same file names), e.g. after a scene fix.
  python restill14.py d06_phone_linen,b05_emboss"""
import sys, os, json, io
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
from PIL import Image
import proj as P
import batch13 as B13

if __name__ == '__main__':
    scenes = tuple(sys.argv[1].split(','))
    pl = json.load(open(os.path.join(B13.R13, 'plan_installed14.json')))
    cs = B13.cases(); PR = P.projects(); n = 0
    for s, v in pl.items():
        jobs = [st for st in v['stills'] if st['t'].startswith(scenes)]
        cov = v.get('cover') if (v.get('cover') or '').startswith(scenes) else None
        if not jobs and not cov: continue
        p = PR.get(s); caps = P.captures(p) if p else {}
        brand = B13.brand_for(s, cs[s], caps); dc, disp = {}, {}
        for st in jobs:
            img = B13.render_still(s, cs[s], st, caps, brand, dc, disp)
            data = B13._enc(img, B13.STILL_W, 83)
            for base in (B13.OUT, B13.SITE):
                open(os.path.join(base, s, st['file']), 'wb').write(data)
            n += 1; print('still', s, st['file'], len(data) // 1024, 'KB', flush=True)
        if cov:
            st = next((x for x in v['stills'] if x['t'] == cov), dict(t=cov, fam='light', tint='#E3E4E6'))
            img = B13.render_still(s, cs[s], st, caps, brand, dc, disp)
            w, h = img.size; ch = round(w * 1500 / 2400); y0 = max(0, (h - ch) // 2)
            data = B13._enc(img.crop((0, y0, w, y0 + ch)).resize((2400, 1500), Image.LANCZOS), B13.COVER_W, 86)
            for base in (B13.OUT, B13.SITE):
                open(os.path.join(base, s, 'r-cover.webp'), 'wb').write(data)
            n += 1; print('cover', s, cov, len(data) // 1024, 'KB', flush=True)
    print('re-rendered', n)
