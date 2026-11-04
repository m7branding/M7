"""Small embedded thumbnails of stories and carousels for the overview page."""
import base64, glob, io, json, os
from PIL import Image
R = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18"


def thumb(path, w):
    im = Image.open(path).convert("RGB")
    im = im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)
    b = io.BytesIO()
    im.save(b, "WEBP", quality=62, method=6)
    return "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()


data = {"stories": [], "themes": {}, "projects": []}
for f in sorted(glob.glob(R + "/out/stories/*.jpg")):
    data["stories"].append({"name": os.path.basename(f)[:-4], "src": thumb(f, 200)})
for d in sorted(glob.glob(R + "/out/carousels/themes/*/")):
    data["themes"][os.path.basename(d.rstrip("/"))] = [thumb(f, 200) for f in sorted(glob.glob(d + "*.jpg"))]
for d in sorted(glob.glob(R + "/out/carousels/projects/*/")):
    fs = sorted(glob.glob(d + "*.jpg"))
    if fs:
        data["projects"].append({"name": os.path.basename(d.rstrip("/")), "src": thumb(fs[0], 200)})
os.makedirs(R + "/art", exist_ok=True)
json.dump(data, open(R + "/art/thumbs.json", "w"))
print("thumbs", len(data["stories"]), len(data["themes"]), len(data["projects"]))
