"""Push finished reels (with a cover frame each) to the delivery branch, in batches."""
import subprocess, sys, time
from pathlib import Path
import push_batch
OUT = push_batch.OUT
folder = sys.argv[1]  # e.g. 01-project-clean
done = sorted((OUT / "reels" / folder).glob("*.mp4"))
ok = []
for f in done:
    if time.time() - f.stat().st_mtime < 90:
        continue
    d = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(f)], capture_output=True, text=True).stdout.strip()
    if not d:
        continue
    cov = OUT / "reels" / "covers" / folder / (f.stem + ".jpg")
    cov.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", "1.7", "-i", str(f), "-frames:v", "1", "-q:v", "2", str(cov)], check=True)
    ok.append(f)
if ok:
    rels = [str(f.relative_to(OUT)) for f in ok] + [str((OUT / "reels" / "covers" / folder / (f.stem + ".jpg")).relative_to(OUT)) for f in ok]
    sys.argv = ["push_batch.py"] + rels + ["--msg", f"Add {len(ok)} reels ({folder})"]
    push_batch.main()
