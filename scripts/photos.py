#!/usr/bin/env python3
"""photos.py: find real photographs, look at them, and only then choose.

Most weak image work comes from taking the first plausible picture. This searches several libraries that
allow reuse and allow automated access, draws one numbered contact sheet, and records the licence of what
you keep. Unsplash and Pexels block automated clients, so they are not used, and no script should try to
get past that.

    python3 photos.py "chef plating at the pass" "steam over a stock pot" --out .frontend-craft/photos
    (open the sheet, read it at full size, then)
    python3 photos.py --get 3,7,12 --out .frontend-craft/photos --to assets/src

Needs Python 3.8+ and Pillow for the sheet. Sources: Burst, Openverse, Wikimedia Commons quality images.
"""
import argparse
import html
import json
import re
import sys
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

UA = {"User-Agent": "frontend-craft/1.5"}
MIN_WIDTH = 2000


def fetch(url, timeout=20):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout).read()


def text(url):
    return fetch(url).decode("utf-8", "ignore")


def burst(q, n):
    """Curated commercial photography, usually the best of the free sources."""
    page = text("https://www.burst.shopify.com/photos/search?q=" + urllib.parse.quote(q))
    seen, out = set(), []
    for m in re.finditer(r'data-photo-title="([^"]+)"[^>]*?src="https://burst\.shopifycdn\.com/photos/([a-z0-9-]+)\.jpg', page):
        title, slug = html.unescape(m.group(1)), m.group(2)
        if slug in seen:
            continue
        seen.add(slug)
        out.append({"source": "burst", "title": title, "w": 3960, "h": 0,
                    "thumb": f"https://burst.shopifycdn.com/photos/{slug}.jpg?width=640&format=pjpg&exif=0&iptc=0",
                    "full": f"https://burst.shopifycdn.com/photos/{slug}.jpg?width=4000&format=pjpg&exif=0&iptc=0",
                    "page": f"https://www.burst.shopify.com/photos/{slug}", "licence": "Burst licence, read it on the photo page"})
    return out[:n]


def openverse(q, n, sources="stocksnap,rawpixel,nappy,flickr,wikimedia"):
    q2 = urllib.parse.urlencode({"q": q, "license_type": "commercial", "page_size": min(n, 20), "size": "large", "source": sources, "mature": "false"})
    data = json.loads(text("https://api.openverse.org/v1/images/?" + q2))
    out = []
    for r in data.get("results", []):
        if (r.get("width") or 0) < MIN_WIDTH:
            continue
        out.append({"source": "openverse/" + r.get("source", "?"), "title": re.sub(r"<[^>]+>", "", r.get("title") or "")[:60], "w": r.get("width"), "h": r.get("height"),
                    "thumb": r.get("thumbnail") or r.get("url"), "full": r.get("url"), "page": r.get("foreign_landing_url"),
                    "licence": f'{r.get("license", "").upper()} {r.get("license_version") or ""}'.strip(), "credit": r.get("attribution") or r.get("creator")})
    return out


def commons(q, n):
    """Commons' own quality category has been through community review for sharpness and exposure."""
    query = {"action": "query", "format": "json", "generator": "search", "gsrsearch": f'{q} incategory:"Quality_images"', "gsrnamespace": 6, "gsrlimit": n,
             "prop": "imageinfo", "iiprop": "url|size|extmetadata", "iiurlwidth": 640}
    data = json.loads(text("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(query)))
    out = []
    for p in data.get("query", {}).get("pages", {}).values():
        i = p["imageinfo"][0]
        meta = i.get("extmetadata", {})
        if i.get("width", 0) < MIN_WIDTH:
            continue
        out.append({"source": "commons", "title": p["title"][5:65], "w": i["width"], "h": i["height"], "thumb": i.get("thumburl"), "full": i["url"], "page": i.get("descriptionurl"),
                    "licence": meta.get("LicenseShortName", {}).get("value", "see page"), "credit": re.sub(r"<[^>]+>", "", meta.get("Artist", {}).get("value", ""))[:80]})
    return out


def sheet(items, path):
    from PIL import Image, ImageDraw, ImageFont, ImageOps
    from io import BytesIO
    cols, tw, th = 6, 320, 214
    rows = (len(items) + cols - 1) // cols
    canvas = Image.new("RGB", (cols * (tw + 8) + 8, rows * (th + 34) + 8), "#141416")
    draw = ImageDraw.Draw(canvas)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 15)
    except OSError:
        font = ImageFont.load_default()

    def load(it):
        try:
            return Image.open(BytesIO(fetch(it["thumb"]))).convert("RGB")
        except Exception:
            return None

    with ThreadPoolExecutor(10) as pool:
        thumbs = list(pool.map(load, items))
    kept = [(it, im) for it, im in zip(items, thumbs) if im]  # a blank tile is a picture nobody can judge, so it is not offered
    items[:] = [it for it, _ in kept]
    for i, (it, im) in enumerate(kept):
        x, y = 8 + (i % cols) * (tw + 8), 8 + (i // cols) * (th + 34)
        if im:
            canvas.paste(ImageOps.fit(im, (tw, th)), (x, y))
        draw.text((x + 2, y + th + 6), f'{i + 1}  {it["source"].split("/")[-1]}  {it["w"] or ""}', fill="#ffffff", font=font)
    canvas.save(path, quality=88)


def main():
    ap = argparse.ArgumentParser(description="Search reusable photography and choose by eye.")
    ap.add_argument("queries", nargs="*", help="concrete subjects from the business's own world, such as 'nurse adjusting a drip line', not moods")
    ap.add_argument("--out", default=".frontend-craft/photos")
    ap.add_argument("--n", type=int, default=12, help="candidates per source and query")
    ap.add_argument("--get", help="comma separated numbers from the sheet to download")
    ap.add_argument("--to", default="assets/src")
    a = ap.parse_args()
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    catalogue = out / "candidates.json"

    if a.get:
        items = json.loads(catalogue.read_text())
        to = Path(a.to)
        to.mkdir(parents=True, exist_ok=True)
        credits = to / "CREDITS.md"
        lines = credits.read_text().splitlines() if credits.exists() else ["# Image credits", ""]
        for n in [int(x) for x in a.get.split(",")]:
            it = items[n - 1]
            slug = re.sub(r"[^a-z0-9]+", "-", it["title"].lower()).strip("-")[:48] or f"photo-{n}"
            name = f"{slug}{Path(urllib.parse.urlparse(it['full']).path).suffix or '.jpg'}"
            licence = it["licence"]
            if it["source"] == "burst":
                m = re.search(r'"license":"([^"]+)"', text(it["page"]))
                licence = m.group(1) if m else licence
            (to / name).write_bytes(fetch(it["full"], 60))
            lines.append(f"- {name}: {it['title']}. {it['source']}. {licence}. {it.get('credit') or ''} {it['page']}")
            print("saved", to / name, "|", licence)
        credits.write_text("\n".join(lines) + "\n")
        return

    if not a.queries:
        sys.exit("Give at least one concrete query, or --get.")
    items, seen = [], set()
    for q in a.queries:
        for name, fn in (("burst", burst), ("openverse", openverse), ("commons", commons)):
            try:
                found = fn(q, a.n)
            except Exception as e:
                print(f"{name} failed for '{q}': {e}", file=sys.stderr)
                continue
            for it in found:
                if it["full"] not in seen:
                    seen.add(it["full"])
                    items.append(it)
    try:
        sheet(items, out / "sheet.jpg")
        catalogue.write_text(json.dumps(items, indent=1))
        print(f"{len(items)} candidates. Open {out / 'sheet.jpg'} and read it at full size. Then: photos.py --get 3,7 --out {out} --to assets/src")
    except ImportError:
        catalogue.write_text(json.dumps(items, indent=1))
        print(f"{len(items)} candidates in {catalogue}. Install Pillow for a contact sheet.")


if __name__ == "__main__":
    main()
