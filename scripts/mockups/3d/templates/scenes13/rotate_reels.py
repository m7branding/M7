"""Rotate the installed showreels so frame 0 (and the poster) sits in the middle of shot 1, clear of any cut or
dissolve; re-encode within the same budgets (desktop 7.5 MB, -m 3 MB, -p 2.5 MB)."""
import json, os, subprocess, shutil
import sys; S = os.environ.get('R13_SCR') or os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = S + '/r13/reels'
plan = json.load(open(S + '/r13/reel_plan.json'))
B = {'': (25, 7.5), '-m': (26, 3.0), '-p': (28, 2.5)}
for slug, R in plan.items():
    k = int(round(R['shots'][0]['dur'] / 2 * 24))
    for suf, (crf0, mb) in B.items():
        f = f'{OUT}/{slug}{suf}.mp4'
        if not os.path.exists(f): continue
        orig = f'{OUT}/.{slug}{suf}.orig.mp4'
        if not os.path.exists(orig): shutil.copy2(f, orig)
        flt = f'[0:v]split[a][b];[a]trim=start_frame={k},setpts=PTS-STARTPTS[a1];[b]trim=end_frame={k},setpts=PTS-STARTPTS[b1];[a1][b1]concat=n=2:v=1[out]'
        for crf in range(crf0, crf0 + 8):
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', orig, '-filter_complex', flt, '-map', '[out]', '-c:v', 'libx264',
                            '-preset', 'slow', '-crf', str(crf), '-g', '96', '-bf', '3', '-x264-params', 'aq-mode=3', '-pix_fmt', 'yuv420p',
                            '-movflags', '+faststart', '-an', f + '.new.mp4'], check=True)
            if os.path.getsize(f + '.new.mp4') <= mb * 1048576: break
        os.replace(f + '.new.mp4', f)
        poster = f'{OUT}/{slug}{"-p" if suf == "-p" else ""}.webp'
        if suf in ('', '-p'):
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', orig, '-vf', f'select=eq(n\\,{k})', '-frames:v', '1', poster + '.png'], check=True)
            from PIL import Image
            Image.open(poster + '.png').convert('RGB').save(poster, quality=80, method=6); os.remove(poster + '.png')
        print(slug, suf or 'd', 'k', k, 'crf', crf, round(os.path.getsize(f) / 1048576, 2), 'MB', flush=True)
