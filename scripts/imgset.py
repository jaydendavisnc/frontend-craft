#!/usr/bin/env python3
"""imgset.py: turn chosen pictures into one finished set for the page.

    python3 imgset.py assets/src --to assets/img --grade warm

Every picture gets the same curve and the same fine grain, so photographs from different sessions stop
looking like separate purchases. Writes 960, 1600 and 2400px WebP, keeps PNG alpha for cut-outs, and writes
manifest.json with each picture's size, average colour and a tiny blurred placeholder for use as a CSS
background, so nothing pops in on load. A grade narrows a set. It cannot save a picture that does not belong.

Needs Pillow. Run it once on the originals, never on its own output.
"""
import argparse
import base64
import io
import json
import random
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageOps

WIDTHS = (960, 1600, 2400)
GRADES = {  # lift, gamma, saturation, red, blue. Small numbers on purpose: a visible grade reads as a filter
    "none": (0, 1, 1, 1, 1),
    "neutral": (6, .98, .94, 1, 1),
    "warm": (8, .97, .92, 1.015, .975),
    "cool": (8, .98, .9, .98, 1.02),
    "soft": (16, .94, .86, 1.005, .99),
    "mono": (6, .98, 0, 1, 1),
}


def grade(im, name, seed):
    lift, gamma, sat, red, blue = GRADES[name]
    if name == "none":
        return im
    rgb = im.convert("RGB")
    lut = [min(255, int(lift + (255 - lift) * (i / 255) ** gamma)) for i in range(256)]
    r, g, b = rgb.point(lut * 3).split()
    r, b = r.point(lambda v: min(255, int(v * red))), b.point(lambda v: min(255, int(v * blue)))
    out = ImageEnhance.Color(Image.merge("RGB", (r, g, b))).enhance(sat)
    rng = random.Random(seed)  # fine grain, the same strength on every frame
    w, h = max(1, out.width // 2), max(1, out.height // 2)
    noise = Image.frombytes("L", (w, h), bytes(rng.randint(120, 136) for _ in range(w * h))).resize(out.size)
    out = ImageChops.overlay(out, Image.merge("RGB", (noise, noise, noise)))
    return out


def main():
    ap = argparse.ArgumentParser(description="Grade and size a set of pictures.")
    ap.add_argument("src")
    ap.add_argument("--to", default="assets/img")
    ap.add_argument("--grade", default="neutral", choices=sorted(GRADES))
    ap.add_argument("--quality", type=int, default=82)
    a = ap.parse_args()
    src, to = Path(a.src), Path(a.to)
    to.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for i, f in enumerate(sorted(p for p in src.iterdir() if p.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"))):
        im = ImageOps.exif_transpose(Image.open(f))
        alpha = im.getchannel("A") if im.mode in ("RGBA", "LA") else None
        graded = grade(im, a.grade, 1891 + i)
        files = []
        for w in WIDTHS:
            if w > im.width and w != WIDTHS[0]:
                continue
            h = round(im.height * min(w, im.width) / im.width)
            out = graded.convert("RGB").resize((min(w, im.width), h), Image.LANCZOS)
            if alpha is not None:
                out.putalpha(alpha.resize(out.size, Image.LANCZOS))
            name = f"{f.stem}-{out.width}.webp"
            out.save(to / name, "WEBP", quality=a.quality, method=6)
            files.append({"src": name, "w": out.width, "h": out.height, "kb": (to / name).stat().st_size // 1024})
        small = graded.convert("RGB").resize((16, max(1, round(16 * im.height / im.width))), Image.BILINEAR)
        buf = io.BytesIO()
        small.save(buf, "WEBP", quality=40)
        avg = graded.convert("RGB").resize((1, 1), Image.BOX).getpixel((0, 0))
        manifest[f.stem] = {"w": im.width, "h": im.height, "ratio": round(im.width / im.height, 4), "average": "#%02x%02x%02x" % avg, "blur": "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode(), "files": files, "alpha": alpha is not None}
        note = "" if im.width >= 2400 else f"  only {im.width}px wide: do not show it wider than {im.width // 2}px"
        print(f"{f.name}: {len(files)} sizes, {sum(x['kb'] for x in files)}KB{note}")
    (to / "manifest.json").write_text(json.dumps(manifest, indent=1))
    print(f"Done. Use srcset with these sizes and set each picture's width, height and blur placeholder from {to / 'manifest.json'}.")


if __name__ == "__main__":
    main()
