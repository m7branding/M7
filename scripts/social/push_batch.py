"""Move finished creatives into the private delivery branch (m7-assets-inbox: social-pack) and push.
Uses a shallow, blobless, sparse clone so earlier batches never have to be downloaded again,
then deletes the clone: the local copies are gone after a successful push (disk stays free).

python push_batch.py <relative paths under OUT, files or dirs> [--msg "..."]
"""
import os
import shutil
import subprocess
import sys
from pathlib import Path

OUT = Path(os.environ.get("SOCIAL_OUT", "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18/out"))
R18 = OUT.parent
CLONE = Path("/home/user/m7-social")
URL = "https://github.com/m7branding/m7-assets-inbox"
BRANCH = "social-pack"
FOOTER = "\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01LWpQqsz2LsbqaoFYXVXiVp"


def sh(*a, cwd=None, check=True):
    r = subprocess.run(a, cwd=cwd, capture_output=True, text=True)
    if check and r.returncode != 0:
        raise RuntimeError(f"{' '.join(a)}\n{r.stdout}\n{r.stderr}")
    return r.stdout


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    msg = sys.argv[sys.argv.index("--msg") + 1] if "--msg" in sys.argv else "Add social creatives"
    if "--msg" in sys.argv:
        args.remove(msg)
    files = []
    for a in args:
        p = OUT / a
        if p.is_dir():
            files += [f for f in p.rglob("*") if f.is_file()]
        elif p.is_file():
            files.append(p)
    if not files:
        print("nothing to push")
        return
    shutil.rmtree(CLONE, ignore_errors=True)
    sh("git", "clone", "-q", "--depth", "1", "--filter=blob:none", "--no-checkout", "-b", BRANCH, URL, str(CLONE))
    sh("git", "sparse-checkout", "set", "--no-cone", "/README.md", cwd=CLONE)
    sh("git", "checkout", "-q", BRANCH, cwd=CLONE)
    moved = []
    for f in files:
        rel = f.relative_to(OUT)
        dst = CLONE / "social" / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(f, dst)
        moved.append((f, rel))
    # sparse-checkout only shows README; add the new paths explicitly
    sh("git", "sparse-checkout", "add", *sorted({"/social/" + str(r.parent) + "/" for _, r in moved}), cwd=CLONE, check=False)
    sh("git", "add", "-A", "--sparse", "social", cwd=CLONE)
    st = sh("git", "status", "--porcelain", cwd=CLONE)
    if not st.strip():
        print("no changes")
    else:
        sh("git", "-c", "user.name=M7 Branding", "-c", "user.email=hello@m7branding.com", "commit", "-q", "-m", msg + FOOTER, cwd=CLONE)
        for i in range(4):
            r = subprocess.run(["git", "push", "-q", "origin", BRANCH], cwd=CLONE, capture_output=True, text=True)
            if r.returncode == 0:
                break
            print("push retry", i, r.stderr[-300:])
        else:
            raise RuntimeError("push failed")
    with open(R18 / "pushed.txt", "a") as log:
        for f, rel in moved:
            log.write(f"{rel}\t{f.stat().st_size}\n")
            f.unlink()
    shutil.rmtree(CLONE, ignore_errors=True)
    print("pushed", len(moved), "files")


if __name__ == "__main__":
    main()
