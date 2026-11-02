# M7 social studio

Renders the M7 social package in the website's house style:
- reels: per project (clean and dynamic), per service, calm and M7's own;
- stories;
- carousels (projects and themes);
- LinkedIn documents.

It also writes the captions and the posting plan.

## How it works
- **`studio/`**: one HTML page plus `engine.js`, a deterministic timeline where `render(t)` is a pure function of time. It uses the same visual language as the site:
  - breathing pixels, aurora and a blurred ambient glow from the project's own footage;
  - glass cards and pills;
  - gradient words: `*pixels*`, `_stars_`, `~shop~`;
  - kinetic type;
  - transitions: ring reveal, pixel wipe and light sweep;
  - the M7 badge outro, where the logo draws itself, fills, and the gradient ring closes.
- **`render.cjs`** captures frames with Playwright and pipes them to ffmpeg: H.264, 1080×1920, 30 fps, AAC at -14 LUFS. **`batch.cjs`** renders many stills in one browser session.
- **`audio.py`** is an original synthesiser (numpy/scipy, no samples or licences). Its styles are `clean`, `dynamic` (124 BPM) and `calm`. It places whooshes on the cuts, chimes on the punchlines and an M7 stinger (riser, boom, bell chord and shimmer) on the moment the ring closes.
- **Builders:**
  - `reels.py`: clean project reels;
  - `reels2.py`: dynamic project, service and calm reels;
  - `m7reels.py`: M7's own reels;
  - `posts.py`: carousels and stories;
  - `themes.py`: theme carousels;
  - `texts.py`: captions and LinkedIn posts for M7's own content.
- **Data:** `media.py` picks the strongest media per project (premium 3D first) from the site's own content export, and the project copy comes from `r18/copy/*.json`.
- **Pipeline:** `run.py` runs the batch jobs. `launch.sh` restarts them after a container restart and skips anything already finished or pushed. `package.py` writes the captions, LinkedIn PDFs, covers and posting plan. `push_batch.py` and `push_reels.py` deliver to the private repo (branch `social-pack`).
