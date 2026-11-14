#!/usr/bin/env python3
"""direction.py: deal a design direction for a brief.

Models collapse onto favourites, and a list of good options just gives them new favourites. So each run
sees only a small slice of the corpus, chosen at random but weighted by what top sites actually do for
this kind of business, and steered away from what recent runs used.

    python3 direction.py "build a landing page for a coffee shop"
    python3 direction.py "<brief>" --seed 7 --register warm-neutral --surface store --json

Needs Python 3.8+ and nothing else.
"""
import argparse
import difflib
import json
import os
import random
import re
import shutil
import time
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
HISTORY = Path(os.environ.get("FRONTEND_CRAFT_HOME", Path.home() / ".frontend-craft")) / "history.json"
MEMORY = 40  # deals to remember

GENRE_WORDS = {
    "food-drink": "coffee cafe recipe recipes restaurant bakery bar brewery wine tea pizza kitchen food roastery bistro deli menu catering",
    "hospitality": "hotel resort lodge hostel inn travel airbnb cabin spa retreat",
    "health": "dentist dental clinic doctor medical health therapy therapist wellness yoga pilates fitness gym physio pharmacy care nutrition sleep",
    "finance": "bank banks banking mortgage mortgages savings credit-union fintech finance payments invoice accounting tax crypto wallet trading invest insurance loan payroll",
    "ai": "ai llm agent assistant copilot gpt model chatbot generative",
    "devtool": "api sdk developer devtool database hosting cli infrastructure deploy observability open-source",
    "saas": "saas software platform tool crm workflow project management productivity b2b analytics hiring recruiting recruitment",
    "ecommerce": "store shop ecommerce e-commerce candles boutique marketplace products merch",
    "fashion": "fashion clothing apparel jewelry jewellery shoes sneakers streetwear",
    "brand": "brand consumer hardware device gadget cosmetics skincare beauty",
    "architecture": "architecture architect interior construction real-estate realtor property homes",
    "agency": "agency studio consultancy marketing creative",
    "portfolio": "portfolio personal resume photographer designer engineer freelancer artist",
    "culture": "museum gallery festival theatre theater music band concert film magazine publisher art event conference chess game games gaming esports podcast newsletter",
    "nonprofit": "nonprofit non-profit charity foundation ngo donate volunteer climate",
    "education": "school university course education learn tutoring academy kids",
    "local-business": "law lawyer attorney plumber detailing salon barber landscaping cleaning repair garage local electrician florist tattoo vet wedding",
}
SURFACE_WORDS = {
    "app": "dashboard admin app ui crm tracker panel console inbox settings",
    "store": "store ecommerce e-commerce marketplace checkout cart online-store",
    "pricing": "pricing",
    "docs": "docs documentation api-reference",
    "portfolio": "portfolio personal resume photographer",
}
# Neighbouring industries share visual language, so a cafe learns from a hotel before it learns from a dev tool.
CLUSTERS = [{"saas", "devtool", "ai", "finance"}, {"food-drink", "hospitality", "local-business", "brand", "fashion", "ecommerce"},
            {"health", "education", "nonprofit", "local-business", "finance"}, {"agency", "portfolio", "architecture", "culture", "editorial"}]
# Date, name and note on hairlines. Real, tidy, and redundant by the second one, so a hand gets one at most.
RULED_ROWS = {"section.feature-grid/index-rows", "section.faq/numbered-index-rows", "section.changelog/dated-history-log", "section.changelog/release-split-rows", "section.menu-or-catalog/whats-on-list",
              "section.steps-process/numbered-rule-list", "section.steps-process/dated-agenda-rows", "section.case-study/story-index-rows", "section.team/no-team-contact-rows", "section.team/compact-people-directory",
              "section.stats/figure-ledger", "section.blog-index/compact-row-ledger", "section.integrations/ruled-directory", "section.integrations/hairline-link-list", "section.gallery-portfolio/ruled-project-rows",
              "section.cta-band/link-rows-close", "section.location-hours/plain-city-directory", "section.pricing-table/price-list-rows"}
SHOWPIECES = ["motion.scroll-pin-or-scrub", "type.type-as-image", "product.animated-demo", "motion.product-demo-loop", "section.feature-sticky-scroll", "motion.marquee"]
PAIRING_REGISTERS = {"light-precision": {"rational", "technical", "quiet", "futurist"}, "dark-precision": {"rational", "technical", "futurist", "quiet"}, "gradient-light": {"rational", "futurist", "warm"},
                     "warm-neutral": {"warm", "editorial", "crafted", "quiet"}, "photo-led": {"editorial", "luxe", "quiet", "cultural"}, "type-led": {"editorial", "cultural", "rational"},
                     "soft-pastel": {"warm", "organic", "quiet"}, "mono-technical": {"technical", "industrial"}, "render-3d": {"technical", "futurist", "rational"}, "illustrated": {"crafted", "organic", "warm"},
                     "bold-colour": {"loud", "retro", "cultural"}, "expressive": {"loud", "retro", "cultural", "crafted"}}
OPEN_GENRES = {"saas": 3, "ai": 3, "devtool": 2, "finance": 2, "brand": 2, "ecommerce": 1, "hospitality": 1, "food-drink": 1, "culture": 1, "education": 1, "health": 1}
FILLER = set("build make create design website site landing page home homepage web a an the for my our me i im it its with and of to in on that clean modern good nice great best high quality looks feels like".split())
# Words about the page or the request. Whatever survives them is what the brief is about.
NOT_SUBJECT = FILLER | set("""
    a about after again all also am an another any are as at be been but by can could did do does doing done dont either else even every everything from get gets getting
    give gives go going got had has have he her here him his how if into is isnt just keep let lets may maybe more most much must need needs no not now of off ok okay once one only or other our out over own
    please pls put really same say see seem seems she should show so some something still such than then there these they thing things this those through too try trying under until up us use used uses using
    very want wanna was we were what when where which while who why will would yes yet you your youre hey hi hello
    code coded codes coding build builds building built make makes making made create creates creating created generate generates generating write writes writing draft mock mockup prototype redesign
    design designs designed designing test tests testing ship shipping
    website websites web webpage webpages site sites page pages landing homepage homepages app apps application store shop startup company companies business businesses brand platform portfolio dashboard product
    stunning beautiful gorgeous pretty elegant sleek slick polished simple minimal minimalist premium professional luxury fancy bold loud dark light black white colourful colorful bright fresh sharp
    awesome amazing insane sick dope cool neat lovely perfect excellent world-class top-tier award award-winning winning production production-grade grade new old simple single one-page full big small
    ui ux layout typography typographic font fonts icon icons component components compoenents animation animations animated motion 3d responsive interactive scroll scrolling hero section sections footer nav
    personal style styled styles look feel vibe aesthetic inspired inspiration similar generic template templatey templates slop natural craft element elements detail details skill review reviews
    """.split())
PAGE_WORD = r"websites?|web site|sites?|landing pages?|landing|homepage|home page|web ?pages?|pages?|apps?|stores?|shops?|startup|company|business|brand|platform|portfolio|dashboard"
TLDS = "com|io|ai|app|co|org|net|dev|gg|tv|so|xyz"
CLAUSE_END = r"\b(?:but|that|which|with|using|use|so|it|have|has|where|and|in the style|inspired|like)\b"
NOT_PORTFOLIO = {"section.team", "section.pricing-table", "section.logo-wall", "section.comparison-table", "section.integrations"}
SOFTWARE_ONLY = {"section.integrations", "section.logo-wall", "section.changelog"}
PLACE = {"food-drink", "hospitality", "local-business"}  # somewhere you can walk into
PHYSICAL = {"food-drink", "hospitality", "local-business", "fashion", "health", "architecture", "culture"}
# Copy range: left alone, each model writes in one voice and one headline shape. Shares from 81 hand-coded heroes.
VOICES = {
    "risk": {"plain inventory": 4, "institutional": 4, "owner, first person": 2, "opinion": 1},
    "product": {"plain inventory": 3, "opinion": 3, "institutional": 2, "dry": 1},
    "place": {"host": 3, "owner, first person": 3, "plain inventory": 3, "opinion": 2, "loud": 1},
    "maker": {"owner, first person": 3, "opinion": 3, "plain inventory": 2, "host": 1, "dry": 1},
}
VOICE_GROUP = {"finance": "risk", "health": "risk", "legal": "risk", "education": "risk", "nonprofit": "risk", "saas": "product", "devtool": "product", "ai": "product",
               "food-drink": "place", "hospitality": "place", "local-business": "place", "fashion": "place", "ecommerce": "place", "brand": "place"}
SHAPES = {"name it: category plus audience or place": 35, "say what you get: verb and concrete result": 17, "what's current: product, season or launch": 16,
          "take a position: says something is wrong": 7, "brand line: a compressed belief, only with a strong image": 4}
NEEDS_IMAGES = {"media.photography", "media.video", "hero.full-bleed-media", "hero.video-loop", "hero.collage", "atmosphere.image-backdrop", "section.gallery-portfolio"}
IMAGE_WORDS = r"photo|film\\b|footage|video|portrait|real source"
RENDER_WORDS = r"render|clay|\\b3d\\b"
SOFTWARE_VARIANTS = {"search-led-bar", "command-bar-nav"}
DARK_REGISTERS = {"dark-precision", "render-3d"}
EXPRESSIVE_WORDS = "experimental bold loud wild brutalist weird avant-garde playful festival art poster crazy unconventional awwwards"

# v1.5: a page is a set of jobs. A section type names a solution, and naming the solution is how a page becomes a template.
JOBS = {
    "stop": ("Stop them", "The first screen. In two seconds a stranger knows what this is and has seen something they want to keep looking at.", "a heading and two buttons beside a picture, or centred over a soft gradient"),
    "what": ("Show what you get", "What someone actually receives, shown as the thing itself rather than described.", "a grid of icon cards, or picture and paragraph taking turns down the page"),
    "how": ("Show how it works", "Let them watch it happen, or better, do it themselves.", "three numbered steps, or tabs around the same screenshot"),
    "proof": ("Let someone else say it", "Evidence from people. The person and the detail matter more than the praise.", "quote cards in a row, or a wall of logos"),
    "scale": ("Show the size of it", "A number that means something, made physical or drawn to scale.", "stat tiles, or a row of big numbers with captions"),
    "people": ("Show who is behind it", "The humans, with something of their own.", "a grid of headshots with names under them"),
    "work": ("Show the work", "The best examples at a size where they can be enjoyed.", "a grid of equal thumbnails"),
    "writing": ("Keep them reading", "What is new, and why someone would come back.", "three article cards, or a ruled list of dated rows"),
    "cost": ("Say what it costs", "The real price, in a form someone can test against their own situation.", "three pricing columns with the middle one highlighted"),
    "worry": ("Answer the worry", "The awkward questions, answered like a person would.", "a stack of grey accordion rows on its own"),
    "place": ("Say where", "Where it is, and what being there is like.", "address cards, or a ruled list of locations"),
    "catalog": ("Let them browse", "Everything on offer, arranged so browsing is a pleasure.", "a grid of equal product cards"),
    "act": ("Ask for the thing", "The one action, at the moment they are most sure.", "a coloured band with a heading and one button"),
    "tool": ("Make the tool feel made", "Someone uses this every day. One part of it should be a pleasure they would point out to a colleague.", "a stock sidebar, a stock table and a row of metric cards"),
}
JOB_OF = {"section.feature-grid": "what", "section.feature-alternating": "what", "section.feature-tabs": "what", "section.feature-sticky-scroll": "what", "product.app-window": "what", "product.ui-fragment": "what",
          "product.device-mockup": "what", "product.annotated-shot": "what", "section.comparison-table": "what", "section.integrations": "what", "section.steps-process": "how", "product.animated-demo": "how",
          "product.code-block": "how", "product.terminal": "how", "section.testimonial": "proof", "section.logo-wall": "proof", "section.case-study": "proof", "section.stats": "scale", "product.data-viz": "scale",
          "section.team": "people", "section.gallery-portfolio": "work", "layout.full-bleed-break": "work", "section.blog-index": "writing", "section.changelog": "writing", "section.pricing-table": "cost",
          "section.faq": "worry", "section.location-hours": "place", "section.menu-or-catalog": "catalog", "commerce.product-card": "catalog", "commerce.collection-grid": "catalog", "commerce.product-detail": "catalog",
          "section.newsletter": "act", "section.contact-form": "act"}
LOUD_SCENES = 3  # moments at full volume. More than this and nothing is loud

# Which elements a page needs a choice for, in build order. A trailing * matches a whole group.
LADDERS = ["atmosphere.dark-surface-ladder", "atmosphere.light-surface-ladder"]
DEVICES = ["atmosphere.gradient-field", "atmosphere.glow-or-light", "atmosphere.grid-or-lines", "atmosphere.image-backdrop", "atmosphere.mesh-or-3d-backdrop", "atmosphere.pattern", "atmosphere.texture"]
MOTION = [("Load", ["motion.load-sequence"]), ("Scroll", ["motion.scroll-reveal", "motion.scroll-pin-or-scrub"]), ("Hover", ["motion.hover-state", "button.hover-response"])]
SYSTEM = [("Headline", ["type.display-headline"]), ("Primary button", ["button.primary"]),
          ("Surfaces", ["surface.card", "surface.panel", "surface.border-treatment"]), ("Surface ladder", LADDERS), ("Logo", ["media.logo-mark"]), ("Icons", ["media.icon-set"]),
          *MOTION, ("Phone menu", ["nav.mobile-menu", "mobile.phone-nav"])]
# Surfaces whose shape is fixed by the job get a fixed list. Landing, store and portfolio pages take their sections from a real page.
FIXED = {
    "app": [("App shell", ["app.dashboard-layout", "app.app-sidebar", "nav.sidebar-nav"]), ("Data table", ["app.data-table"]), ("Charts", ["app.chart", "product.data-viz"]), ("Controls", ["app.form-control"]),
            ("Overlays", ["app.modal-sheet", "app.command-palette"]), ("Empty state", ["app.empty-state"]), ("Numerals", ["type.numerals"]), ("Surfaces", ["surface.card", "surface.panel", "surface.border-treatment"]), ("Surface ladder", LADDERS), ("Hover", ["motion.hover-state"])],
    "pricing": [("Navigation", ["nav.top-bar"]), ("Pricing table", ["section.pricing-table"]), ("Comparison", ["section.comparison-table"]), ("FAQ", ["section.faq"]), ("Numerals", ["type.numerals"]), ("Headline", ["type.display-headline"]),
                ("Primary button", ["button.primary"]), ("Surface ladder", LADDERS), ("Closing section", ["section.cta-band"]), ("Footer", ["section.footer"]), ("Hover", ["motion.hover-state", "button.hover-response"])],
    "docs": [("Docs navigation", ["nav.docs-nav", "nav.sidebar-nav"]), ("Code", ["product.code-block", "product.terminal"]), ("Body", ["type.body-copy"]), ("Surface ladder", LADDERS), ("Footer", ["section.footer"])],
}
STORE_EXTRAS = [("Product card", ["commerce.product-card"]), ("Product detail", ["commerce.product-detail"]), ("Filters", ["commerce.filters"]), ("Cart", ["commerce.cart"])]
TARGET_SECTIONS = {"landing": 8, "store": 6, "portfolio": 5}
HEIGHTS = {"landing": (5500, "about 5,700 to 10,900px"), "store": (4300, "about 4,300 to 8,100px"), "pricing": (4000, "about 6,200 to 10,100px")}
OVERUSED_FONTS = {"poppins", "montserrat", "nunito", "nunito sans", "raleway", "lato", "dm sans", "outfit", "sora", "space grotesk", "syne", "bebas neue", "oswald", "playfair display", "cormorant", "cormorant garamond",
                  "fraunces", "instrument serif", "dm serif display", "crimson pro", "lora", "merriweather", "libre baskerville", "space mono"}


def load(name):
    path = DATA / name
    if not path.exists():
        return []
    return [json.loads(l) for l in path.read_text(encoding="utf8").splitlines() if l.strip()]


def guess(brief, table, default):
    words = set(re.findall(r"[a-z][a-z-]+", brief.lower().replace("non profit", "nonprofit")))
    scored = [(len(words & set(v.split())), k != "saas", k) for k, v in table.items()]  # on a tie, the more specific genre wins
    best = max(scored)
    return best[2] if best[0] else default


def read_history():
    try:
        return json.loads(HISTORY.read_text())
    except (OSError, ValueError):
        return []


def write_history(rows):
    try:
        HISTORY.parent.mkdir(parents=True, exist_ok=True)
        HISTORY.write_text(json.dumps(rows[-MEMORY:]))
    except OSError:
        pass  # sandboxed or read-only: dealing still works, it just can't remember


def pick(rng, items, weight, k=1):
    """Weighted sample without replacement."""
    pool, out = list(items), []
    while pool and len(out) < k:
        weights = [max(weight(x), 1e-6) for x in pool]
        chosen = rng.choices(pool, weights)[0]
        out.append(chosen)
        pool.remove(chosen)
    return out


def closeness(genre, other):
    if genre == other:
        return 8
    return 3 if any(genre in c and other in c for c in CLUSTERS) else 1


def matches(el, pattern):
    return el.startswith(pattern[:-1]) if pattern.endswith("*") else el == pattern


def luminance(colour):
    rgb = [int(colour[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    r, g, b = [c / 12.92 if c <= .03928 else ((c + .055) / 1.055) ** 2.4 for c in rgb]
    return .2126 * r + .7152 * g + .0722 * b


def contrast(a, b):
    if not (a and b and re.fullmatch(r"#[0-9a-fA-F]{6}", a) and re.fullmatch(r"#[0-9a-fA-F]{6}", b)):
        return 21
    high, low = sorted((luminance(a), luminance(b)), reverse=True)
    return (high + .05) / (low + .05)


def legible(muted, text, bg):
    """Real palettes often carry a muted grey that fails on its own ground, so walk it towards the ink until it reads."""
    if not (muted and text and bg) or contrast(muted, bg) >= 4.5 or contrast(text, bg) < 4.5 or not re.fullmatch(r"#[0-9a-fA-F]{6}", muted + "") or not re.fullmatch(r"#[0-9a-fA-F]{6}", text):
        return muted
    a = [int(muted[i:i + 2], 16) for i in (1, 3, 5)]
    b = [int(text[i:i + 2], 16) for i in (1, 3, 5)]
    for step in range(1, 21):
        mixed = "#" + "".join(f"{round(x + (y - x) * step / 20):02x}" for x, y in zip(a, b))
        if contrast(mixed, bg) >= 4.6:
            return mixed
    return text


def model_site(brief, plans):
    """A brief that says 'like Linear' or 'Stripe style' has named its model, so use that real page rather than a random one."""
    text = brief.lower()
    said = re.findall(r"(?:like|inspired by|style of|similar to|feel of|look of|vibe of)\s+(?:like\s+)?(?:a |an |the )?([a-z0-9.-]+)", text) + re.findall(r"([a-z0-9.-]+)[- ](?:like|style|inspired|esque)\b", text)
    names = {p["name"].lower(): p for p in plans if " " not in p["name"] and len(p["name"]) >= 4}
    for word in said:
        close = difflib.get_close_matches(re.sub(rf"\.(?:{TLDS})$", "", word.strip(".-")), list(names), n=1, cutoff=.84)
        if close:
            return names[close[0]]
    return None


# What the person said outranks the hand. These are read out of the brief before anything is dealt.
LOOK_WORDS = [  # (pattern, register it points to or None, how to read it)
    (r"\b(brutalist|brutal|raw|anti-design)\b", "mono-technical", "brutalist: honest structure, visible grid, hard edges, done with craft"),
    (r"\b(editorial|magazine|newspaper|journal)\b", "type-led", "editorial: typography leads, real photography, a visible grid"),
    (r"\b(luxury|luxurious|high-end|upscale|elegant)\b", "photo-led", "premium: restraint, real material, generous scale, slow confident motion"),
    (r"\b(retro|vintage|y2k|80s|90s|nostalgic)\b", "expressive", "retro: the era's real moves, not a costume"),
    (r"\b(colou?rful|vibrant|bright colou?rs?|bold colou?rs?|loud)\b", "bold-colour", "colourful: colour as a building material, chosen as a set"),
    (r"\b(playful|fun|quirky|whimsical|cute)\b", "illustrated", "playful: personality in motion and copy, things that respond"),
    (r"\b(warm|cosy|cozy|homely)\b", "warm-neutral", "warm: real people and light, a human voice"),
    (r"\b(minimal|minimalist)\b", None, "minimal: few elements, each excellent, with strong scale contrast"),
    (r"\b(clean)\b", None, "clean: control, one idea per screen, nothing without a job"),
    (r"\b(premium)\b", None, "premium: restraint, real material, perfect details"),
    (r"\b(modern)\b", None, "modern: current product craft, nothing dated"),
    (r"\b(professional|corporate)\b", None, "professional: trustworthy, clear, finished"),
]
COLOUR_WORDS = r"\b(red|crimson|scarlet|orange|amber|yellow|gold|golden|lime|green|emerald|olive|teal|turquoise|cyan|blue|navy|cobalt|indigo|violet|purple|lilac|lavender|pink|magenta|coral|peach|brown|tan|beige|cream|black|white|grey|gray|silver|neon)\b"
SECTION_WORDS = [(r"\bpric(e|es|ing)\b|\bplans?\b", "pricing"), (r"\btestimonials?\b|\breviews?\b", "reviews"), (r"\bfaqs?\b|\bquestions\b", "FAQ"),
                 (r"\bteam\b|\babout us\b|\bfounders?\b", "team"), (r"\bblog\b|\bnews\b|\barticles\b", "blog"), (r"\bgallery\b|\bportfolio\b|\bcase stud(y|ies)\b", "gallery or work"),
                 (r"\bcontact\b|\bform\b", "contact form"), (r"\bnewsletter\b|\bsign ?up\b|\bwaitlist\b", "sign-up"), (r"\bmap\b|\blocations?\b", "location"),
                 (r"\bbook(ing)?\b|\breservations?\b|\bappointments?\b", "booking"), (r"\bmenu\b", "menu"), (r"\bdemo\b|\bvideo\b", "demo or video"), (r"\bcareers\b|\bjobs\b", "careers")]
EFFECT_WORDS = [(r"\b3d\b|\bthree\.?js\b|\bwebgl\b", "3D that belongs to the subject"), (r"\bscroll(ing)? (animations?|effects?|story|storytelling)\b|\bparallax\b|\bscrollytelling\b", "scroll-driven motion"),
                (r"\banimat(ed|ions?)\b|\bmotion\b", "real motion: a score, not fades"), (r"\binteractive\b", "things the visitor can operate"), (r"\bdark mode\b|\btheme toggle\b", "a dark mode")]


def stated(brief, fonts):
    """Everything explicit in the brief: look, colours, fonts, sections, effects. The hand must not overrule any of it."""
    low, out = brief.lower(), {"look": [], "register": None, "colours": [], "fonts": [], "sections": [], "effects": []}
    for pat, reg, note in LOOK_WORDS:
        if re.search(pat, low):
            out["look"].append(note)
            out["register"] = out["register"] or reg
    out["colours"] = list(dict.fromkeys(re.findall(COLOUR_WORDS, low) + re.findall(r"#[0-9a-f]{3,6}\b", low)))
    out["colours"] = [c for c in out["colours"] if not (c in ("black", "white") and re.search(r"\b(black|white) (and|&) (white|black)\b", low) is None and c in ("black", "white") and re.search(r"\bdark|light\b", low))]
    for name in fonts:
        n = name.lower()
        if len(n) >= 4 and re.search(r"\b" + re.escape(n) + r"\b", low) and (re.search(r"\b" + re.escape(name) + r"\b", brief) or re.search(re.escape(n) + r"\W+(font|typeface|type)\b|\b(font|typeface)\W+" + re.escape(n), low)):
            out["fonts"].append(name)
    out["sections"] = list(dict.fromkeys(label for pat, label in SECTION_WORDS if re.search(pat, low)))
    out["effects"] = list(dict.fromkeys(label for pat, label in EFFECT_WORDS if re.search(pat, low)))
    return out


def known_sites(refs):
    """Names the corpus knows, so 'like framer.com' is treated as a design reference and not as the business."""
    out = set()
    for r in refs:
        out.add(re.sub(r"[^a-z0-9]", "", r["name"].lower().split()[0]))
        host = re.sub(r"^https?://(www\.)?", "", r.get("url", "")).split("/")[0].split(".")[0]
        if host:
            out.add(host.lower())
    return out


def subject_of(brief, known, model=None):
    """What the brief is about, in its own words, or None for a brief that names nothing. Returns (subject, site)."""
    text = re.sub(r"[^a-z0-9&'.\s-]", " ", brief.lower())
    for domain, root in re.findall(rf"\b(([a-z0-9-]+)\.(?:{TLDS}))\b", text):
        if root.replace("-", "") not in known:
            return root.replace("-", " "), domain
    text = text.replace(".", " ")
    drop = NOT_SUBJECT | ({model} if model else set())

    def clean(chunk):
        kept = [w.strip("'-") for w in re.findall(r"[a-z0-9&'-]+", re.split(CLAUSE_END, chunk)[0])]
        kept = [w for w in kept if len(w) > 1 and w not in drop and not (model and difflib.SequenceMatcher(None, w, model).ratio() >= .84)]
        return " ".join(kept)

    found = [clean(m.group(1)) for m in re.finditer(rf"\b(?:{PAGE_WORD})\s+(?:for|about|selling|on)\s+((?:[a-z0-9&'-]+\s*){{1,6}})", text)]
    found += [clean(m.group(1)) for m in re.finditer(r"\b(?:for|tracking)\s+((?:[a-z0-9&'-]+\s*){1,5})", text)]
    found += [clean(m.group(1)) for m in re.finditer(rf"\b((?:[a-z0-9&'-]+\s+){{1,3}})(?:{PAGE_WORD})\b", text)]
    found += [clean(m.group(1)) for m in re.finditer(r"\b(?:a|an)\s+((?:[a-z0-9&'-]+\s+){1,3})(?:like|similar to|inspired by|in the style of)\b", text)]
    found = [f for f in found if f]
    return (max(found, key=len), None) if found else (None, None)


def pairing_systems(pairings, fonts, registers, expressive):
    """The curated pairings, shaped like type systems, so a hand can draw on hundreds of faces and not a couple of dozen."""
    wanted = set().union(*(PAIRING_REGISTERS.get(r, set()) for r in registers))
    plain = {"grotesque", "neo-grotesque", "geometric", "humanist", "transitional", "oldstyle", "didone", "slab", "wide", "mono", "sans", "serif"}
    out = []
    for p in pairings:
        display, text = fonts.get(p.get("display")), fonts.get(p.get("text"))
        if not display or not text or not wanted & set(p.get("registers", [])):
            continue
        if {p["display"].lower(), p["text"].lower()} & OVERUSED_FONTS or display.get("overused") or text.get("overused") or display.get("caps_only") or text.get("caps_only"):
            continue
        if not display.get("css") or not text.get("css"):
            continue
        setting = p.get("settings", {}).get("display", "")
        weight = int((re.search(r"wght (\d+)", setting) or [0, 500])[1])
        tracking = (re.search(r"(-?\d*\.?\d+)em", setting) or [0, "-0.02"])[1]
        leading = (re.search(r"lh ([\d.]+)", setting) or [0, "1.06"])[1]
        if not expressive and (weight > 650 or display.get("class") not in plain):
            continue
        out.append({"id": p["id"], "register": p.get("registers", []), "display": {"family": p["display"], "size_desktop": "64px", "size_phone": "38px", "weight": str(weight), "tracking": f"{tracking}em", "leading": leading},
                    "text": {"family": p["text"], "size": "17px", "leading": "1.55", "weight": "400"}, "ui": {"family": p["text"], "size": "14px", "weight": "500"}, "label": {"note": "sentence case"},
                    "css": [display["css"], text["css"]], "why": p.get("why", "")})
    return out


def human(el):
    return el.split(".", 1)[1].replace("-", " ").capitalize()


def scenes_for(steps, rng, moves, used, images, genre="", surface="landing", recent_kinds=()):
    """Turn one real page's sections into jobs, then deal each job a move from pages that do not look like templates."""
    jobs = ["stop"]
    for step in steps:
        job = "stop" if step.startswith("hero.") else JOB_OF.get(step)
        if job and job not in jobs:
            jobs.append(job)
    for must in ("what", "how", "proof"):
        if must not in jobs:
            jobs.insert(min(len(jobs), 2), must)
    jobs = [j for j in jobs if j != "act"][:7] + ["act"]
    picked, names, last_kind, loud = [], set(), None, 0

    def usable(m, job):
        if job not in m.get("jobs", []) or m["name"] in names:
            return False
        return not (images == "none" and m.get("needs_image"))

    for n, job in enumerate(jobs):
        pool = [m for m in moves if usable(m, job)] or [m for m in moves if m["name"] not in names and not (images == "none" and m.get("needs_image"))]
        if not pool:
            picked.append({"job": job, "move": None})
            continue

        def weight(m):
            w = {"lab": 1.2, "observed": 1.0, "atlas": 0.3}.get(m.get("source"), 1.0)  # moves seen on a live site, or tested here, outrank catalogue recipes
            w *= 0.08 if m["name"] in used else 1
            w *= 3 if surface != "landing" and m.get("surface") == surface else 1
            w *= 0.25 if m.get("kind") == last_kind else 1
            w *= 0.4 if m.get("kind") in recent_kinds else 1
            if n == 0:
                w *= 4 if m.get("kind") == "image-type" and images != "none" else 1
            w *= 0.02 if m.get("loud") and loud >= LOUD_SCENES else 1
            w *= 3 if genre in ("saas", "devtool", "ai") and job in ("what", "how") and not m.get("needs_image") else 1  # the product is the picture here
            return w

        chosen = pick(rng, pool, weight, 1)[0]
        names.add(chosen["name"])
        last_kind = chosen.get("kind")
        loud += 1 if chosen.get("loud") else 0
        picked.append({"job": job, "move": chosen})
    return picked


def deal(brief, seed, surface=None, register=None, explore=False, no_images=False, coach=False, images="photo"):
    rng = random.Random(seed)
    refs, elements, systems, plans = load("refs.jsonl"), load("elements.jsonl"), load("type-systems.jsonl"), load("page-plans.jsonl")
    flags = load_flags()
    try:
        awarded = set(json.loads((DATA / "award-slugs.json").read_text()))  # award winners and Framer's own gallery lead default hands
    except (OSError, ValueError):
        awarded = set()
    if not refs:
        raise SystemExit(f"No data found in {DATA}. Read references/manual-deal.md instead.")
    history = read_history()
    used = {key: {x for row in history for x in row.get(key, [])} for key in ("refs", "types", "variants", "voices", "plans", "angles", "examples", "moves")}
    recent_registers = [row.get("register") for row in history[-3:]]

    genre = guess(brief, GENRE_WORDS, "saas")
    words = set(re.findall(r"[a-z][a-z-]+", brief.lower().replace("non profit", "nonprofit")))
    in_vocab = any(words & set(v.split()) for v in GENRE_WORDS.values())
    modelled = model_site(brief, plans)
    subject, site = subject_of(brief, known_sites(refs), modelled["name"].lower() if modelled else None)
    named = in_vocab or bool(subject)
    if not in_vocab:  # the look comes from the wider corpus, and if nothing was named the business is dealt too: a page about nothing is the weakest page there is
        genre = pick(rng, list(OPEN_GENRES), lambda g: OPEN_GENRES[g])[0]
    surface = surface or guess(brief, SURFACE_WORDS, "landing")
    if surface == "app" and re.search(r"\b(website|web site|site|landing|homepage|home page|marketing)\b", brief.lower()):
        surface = "landing"  # "a website for my app" is a marketing page, not the app itself
    if re.search(r"\bonline (shop|store)\b", brief.lower()):
        surface = "store"
    expressive = explore or bool(set(re.findall(r"[a-z-]+", brief.lower())) & set(EXPRESSIVE_WORDS.split()))
    asked = stated(brief, [f.get("name") or f.get("family") or "" for f in load("fonts.jsonl")])
    if asked["register"] in ("expressive", "bold-colour", "illustrated"):
        expressive = True

    # Register prior: what strong sites in this genre really do, blended with the corpus overall.
    usable = [r for r in refs if r["tier"] in ("gold", "silver") or (expressive and r["tier"] == "expressive")]
    prior = {}
    for r in usable:
        value = 3 if r["tier"] == "gold" else 1
        prior[r["register"]] = prior.get(r["register"], 0) + value * closeness(genre, r["genre"]) ** 2
    if not expressive:  # loud colour is a choice a brief should ask for
        for loud in ("bold-colour", "expressive", "illustrated"):
            prior[loud] = prior.get(loud, 0) * 0.3
    if not no_images:  # pictures are what most generated pages lack. Lean towards them unless the page is a tool
        prior["photo-led"] = prior.get("photo-led", 0) * 2.5
        prior["render-3d"] = prior.get("render-3d", 0) * 1.5
        if genre not in ("saas", "devtool", "ai"):
            prior["light-precision"] = prior.get("light-precision", 0) * 0.4
    if no_images:  # a hand built on photography is no use to a model that cannot get any
        prior["photo-led"] = prior.get("photo-led", 0) * 0.15
        for capable in ("type-led", "warm-neutral", "light-precision", "illustrated"):
            prior[capable] = prior.get(capable, 0) * 1.5
    if modelled and not re.search(r"\b(dark|black|night|white|light mode|light theme)\b", brief.lower()):
        register = register or modelled["register"]
    # A brief that names a look has decided the register. Anything else would be dealing against the user.
    if not register and re.search(r"\b(dark|black|night)\b", brief.lower()):
        register = "dark-precision"
    elif not register and re.search(r"\b(white|light mode|light theme)\b", brief.lower()):
        register = "light-precision"
    if not register and asked["register"] and prior.get(asked["register"], 0) > 0:
        register = asked["register"]  # their look word decides the register
    if not register:
        register = pick(rng, list(prior), lambda x: prior[x] * (0.3 if x in recent_registers else 1))[0]

    # The type system comes first, because other slots have to agree with it.
    def families(s):
        return [s.get(k, {}).get("family", "").strip() for k in ("display", "text")]

    allowed = {register} | ({"warm-neutral", "photo-led", "type-led"} if genre in PHYSICAL else set())
    fits = [s for s in systems if allowed & set(s.get("register", []))] or systems
    fits = [s for s in fits if not {f.lower() for f in families(s)} & OVERUSED_FONTS] or fits
    if not expressive:  # poster sizes are for briefs that ask for a poster: top sites put 88px at the very edge of their range
        fits = [s for s in fits if int(re.sub(r"\D", "", str(s.get("display", {}).get("size_desktop", "64"))) or 64) <= 88] or fits
    fonts = {f["family"]: f for f in load("fonts.jsonl")}
    fits = fits + pairing_systems(load("pairings.jsonl"), fonts, allowed, expressive)
    faces = {}
    for s in fits:
        faces[families(s)[0]] = faces.get(families(s)[0], 0) + 1
    type_system = pick(rng, fits, lambda s: (0.08 if s["id"] in used["types"] else 1) / faces[families(s)[0]], 1)[0]  # face by face, so a family with many systems does not dominate
    serif = next((f.get("structure") == "serif" for f in load("fonts.jsonl") if f["family"] == type_system.get("display", {}).get("family")), False)
    clash = {"medium-tight-grotesk", "light-large-sans", "caps-block", "wide-heavy-display"} if serif else {"quiet-serif-over-sans-ui", "roman-italic-turn", "same-size-two-voices"}
    clash = {f"type.display-headline/{v}" for v in clash}

    # Software for a physical subject, such as a fitness app, is still software: it keeps its product frames.
    grounded = genre in PHYSICAL and not re.search(r"\b(app|saas|software|platform|startup)\b", brief.lower())

    renderer = shutil.which("blender") or Path("/Applications/Blender.app").exists()
    index = load_index()
    chapters = {}

    def has_code(e):
        place = index.get(f'{e["el"]}/{e["variant"]}')
        if not place:
            return False
        lines = chapters.setdefault(place[0], (ROOT / place[0]).read_text().splitlines())
        return any(line.lstrip().startswith("```") for line in lines[place[1] - 1:place[2]])

    def variant(label, patterns, also_avoid=(), avoid_for=("software",), quality=4):
        options = [e for e in elements if any(matches(e["el"], p) for p in patterns) and f'{e["el"]}/{e["variant"]}' not in also_avoid]
        if no_images:
            needs = re.compile(IMAGE_WORDS + ("" if renderer else "|" + RENDER_WORDS), re.I)
            options = [e for e in options if e["el"] not in NEEDS_IMAGES and not needs.search(e["variant"] + " " + e.get("spec", ""))] or options
        if grounded and "software" in avoid_for:
            options = [e for e in options if e["variant"] not in SOFTWARE_VARIANTS] or options
        if label == "Surface ladder":
            ground = "atmosphere.dark-surface-ladder" if register in DARK_REGISTERS else "atmosphere.light-surface-ladder"
            options = [e for e in options if e["el"] == ground]
        if not expressive:  # keep what scored low and what reads as generated out of a default hand
            options = [e for e in options if e.get("quality", 3) >= quality and f'{e["el"]}/{e["variant"]}' not in flags.get("exclude", {})] or options
        near = [e for e in options if any(closeness(genre, g) >= 3 for g in e.get("genres", []))]
        options = [e for e in near if register in e.get("registers", [])] or near or [e for e in options if register in e.get("registers", [])] or options
        if not options:
            return None

        def weight(e):
            w = e.get("quality", 3) ** 2 * (1 + min(e.get("count", 1), 12) / 6)
            w *= 3 if register in e.get("registers", []) else 1
            w *= max(closeness(genre, g) for g in e.get("genres", ["other"]))
            w *= 0.1 if e["variant"] in used["variants"] else 1
            w *= flags.get("downweight", {}).get(f'{e["el"]}/{e["variant"]}', {}).get("weight", 1) if not expressive else 1
            w *= 3 if coach and has_code(e) else 1
            w *= 0.4 if f'{e["el"]}/{e["variant"]}' in RULED_ROWS else 1
            w *= 2 if any(x.get("slug") in awarded for x in e.get("evidence", [])) else 1
            return w

        chosen = pick(rng, options, weight, 1)[0]
        return {"slot": label, "el": chosen["el"], "variant": chosen["variant"], "spec": chosen.get("spec", ""), "evidence": [e["name"] for e in chosen.get("evidence", [])[:3]]}

    # The page: one real page's jobs, in that page's order, so the choices belong together.
    lead, sections, scenes = None, [], []
    if surface in FIXED:
        wanted = FIXED[surface]
        pool = [m for m in load("moves.jsonl") if "tool" in m.get("jobs", []) or m.get("surface") == surface]
        for m in pick(rng, pool, lambda m: 0.1 if m["name"] in used.get("moves", set()) else 1, min(3, len(pool))) if pool else []:
            scenes.append({"job": "tool", "move": m})
    else:
        pool = [p for p in plans if p["surface"] == surface] or [p for p in plans if p["surface"] == "landing"]
        pool = [p for p in pool if closeness(genre, p["genre"]) >= 3] or pool

        def plan_weight(p):
            w = (4 if p["tier"] == "gold" else 1) * closeness(genre, p["genre"]) ** 2 * (2 if p["register"] == register else 1)
            w *= 3 if p["slug"] in awarded else 1
            w *= 0.1 if p["slug"] in used["plans"] else 1
            w *= 0.2 if no_images and p["steps"][0] in NEEDS_IMAGES else 1
            return w

        lead = modelled if modelled and modelled["surface"] == surface else pick(rng, pool, plan_weight, 1)[0]
        steps = list(lead["steps"])
        if steps[0] == "hero.video-loop":  # nobody here can shoot film, and a still in a video slot is a weaker version of a photo hero
            steps[0] = "hero.full-bleed-media"
        if no_images and steps[0] in NEEDS_IMAGES:
            steps[0] = "hero.type-only" if rng.random() < 0.5 else "hero.split-copy-media"
        if no_images:
            steps = [step for step in steps if step not in NEEDS_IMAGES or step.startswith("hero.")]
        if surface == "portfolio":
            steps = [step for step in steps if step not in NOT_PORTFOLIO]
        kept, products = [], 0
        for step in steps:  # a page of nothing but product shots is a gallery, not an argument
            products += step.startswith("product.")
            if grounded and (step.startswith("product.") or step in SOFTWARE_ONLY):
                continue  # plans in a neighbouring genre can carry software furniture that a real place would not have
            if not (step.startswith("product.") and products > 3):
                kept.append(step)
        steps = kept[:9]
        if genre in PLACE and surface == "landing" and not set(steps) & {"section.menu-or-catalog", "section.location-hours"}:
            steps.insert(min(2, len(steps)), "section.location-hours" if genre == "local-business" else rng.choice(["section.menu-or-catalog", "section.location-hours"]))
        # Short analyst records under-count a page. Pad with what pages of this kind really carry, so nothing ships thin.
        common = {}
        for p in pool:
            if closeness(genre, p["genre"]) >= 3:
                for step in p["steps"][1:]:
                    if not (grounded and (step.startswith("product.") or step in SOFTWARE_ONLY)) and not (surface == "portfolio" and step in NOT_PORTFOLIO) and not (no_images and step in NEEDS_IMAGES):
                        common[step] = common.get(step, 0) + 1
        while len(steps) < TARGET_SECTIONS.get(surface, 6) and set(common) - set(steps):
            extra = pick(rng, sorted(set(common) - set(steps)), lambda x: common[x], 1)[0]
            steps.insert(rng.randint(1, len(steps)), extra)
        scenes = scenes_for(steps, rng, load("moves.jsonl"), used.get("moves", set()), "none" if no_images else images, genre, surface)
        wanted = [("Navigation", ["nav.top-bar", "nav.floating-pill"]), ("Footer", ["section.footer"])]

    for label, patterns in wanted:
        taken = {s["el"] for s in sections}
        avoid = {"section.footer/newsletter-led-footer", "section.cta-band/photo-band-signup"} if "section.newsletter" in taken else ()
        if any(f'{x["el"]}/{x["variant"]}' in RULED_ROWS for x in sections):
            avoid = set(avoid) | RULED_ROWS
        dealt = variant(label, patterns, avoid)
        if dealt:
            sections.append(dealt)

    system = []
    if surface not in FIXED:
        extras = STORE_EXTRAS if surface == "store" else []
        frames = ["media.illustration", "media.render-3d"] if no_images else (["media.photography"] if grounded else ["media.photography", "media.illustration", "media.render-3d"])
        for label, patterns in [("Frames", frames)] + SYSTEM + extras:
            if not (label == "Frames" and genre in ("saas", "devtool", "ai", "finance")) and not any(s["el"] in patterns for s in sections):
                dealt = variant(label, patterns, clash)
                if dealt:
                    system.append(dealt)
        showing = set()
        for n in (1, 2):
            dealt = variant("Showpiece", SHOWPIECES, showing, quality=5)
            if dealt:
                system.append(dealt)
                showing.add(f'{dealt["el"]}/{dealt["variant"]}')
        if rng.random() < 0.5:  # plenty of top pages carry no device at all
            dealt = variant("Atmosphere", DEVICES)
            if dealt:
                system.append(dealt)

    chosen = []
    if lead:
        chosen = [r for r in refs if r["slug"] == lead["slug"]]

    def ref_weight(r):
        w = (4 if r["tier"] == "gold" else 1) * closeness(genre, r["genre"]) ** 2
        w *= 3 if r.get("surface") == surface else (0.15 if r.get("surface") in ("pricing", "docs", "changelog") else 1)
        return w * (0.1 if r["slug"] in used["refs"] else 1)

    same = [r for r in usable if r["register"] == register] or usable
    chosen += pick(rng, [r for r in same if r not in chosen], ref_weight, 1)
    # One from another industry: the best ideas in a field usually arrive from outside it.
    outside = [r for r in same if r["genre"] != genre and r not in chosen and r["tier"] == "gold"] or [r for r in usable if r not in chosen and r["tier"] == "gold"]
    chosen += pick(rng, outside, lambda r: 0.1 if r["slug"] in used["refs"] else 1, 1)

    tinted = [r for r in usable if r.get("palette") and r["register"] == register and closeness(genre, r["genre"]) >= 3] or [r for r in same if r.get("palette")] or [r for r in usable if r.get("palette")]
    # A mid-grey ground looks unfinished everywhere outside a loud colour register, so a page starts near white or near black.
    settled = [r for r in tinted if register in ("bold-colour", "expressive") or not re.fullmatch(r"#[0-9a-fA-F]{6}", str(r["palette"].get("bg"))) or luminance(r["palette"]["bg"]) > .72 or luminance(r["palette"]["bg"]) < .04] or tinted
    def bluish(colour):
        if not re.fullmatch(r"#[0-9a-fA-F]{6}", str(colour)):
            return False
        red, green, blue = [int(colour[i:i + 2], 16) for i in (1, 3, 5)]
        return blue > red + 50 and blue > green + 20

    if register in DARK_REGISTERS:  # blue on blue-black is what every generated dark page already looks like
        settled = [r for r in settled if not bluish(r["palette"].get("accent"))] or settled
    readable = [r for r in settled if contrast(r["palette"].get("text"), r["palette"].get("bg")) >= 7]
    source = pick(rng, readable or tinted, lambda r: (3 if r["tier"] == "gold" else 1) * closeness(genre, r["genre"]), 1)[0]
    palette = dict(source["palette"])
    palette["muted"] = legible(palette.get("muted"), palette.get("text"), palette.get("bg"))

    careful = re.search(r"\b(law|lawyer|attorney|legal|accountant|accounting|dentist|dental|doctor|clinic|funeral)\b", brief.lower())
    voices = VOICES["risk" if careful else VOICE_GROUP.get(genre, "maker")]
    voice = pick(rng, list(voices), lambda v: voices[v] * (0.25 if v in used["voices"] else 1))[0]
    shape = pick(rng, list(SHAPES), lambda x: SHAPES[x] * (3 if surface == "store" and x.startswith("what's") else 1))[0]

    angle = None
    angles = load_folder("angles")
    if angles and (coach or not named):
        terms = words - FILLER

        def angle_weight(a):
            text = set(re.findall(r"[a-z-]+", (a.get("business", "") + " " + " ".join(a.get("vocabulary", []))).lower()))
            return (1 + 12 * len(terms & text)) * closeness(genre, a.get("genre", "other")) ** 2 * (0.05 if a.get("business") in used["angles"] else 1)

        angle = dict(pick(rng, angles, angle_weight, 1)[0])
        angle["fits"] = not named or bool(terms & set(re.findall(r"[a-z-]+", angle.get("business", "").lower())))

    examples = []
    if coach:
        library = load_folder("exemplars")

        def example_weight(x):
            w = 1 + 4 * (genre in x.get("genres", [])) + (2 if any(closeness(genre, g) >= 3 for g in x.get("genres", [])) else 0)
            w *= 0.1 if x.get("file") in used["examples"] else 1
            return w

        seen_kinds = set()
        for x in pick(rng, library, example_weight, min(8, len(library))):
            if x.get("kind") not in seen_kinds and len(examples) < 3:
                seen_kinds.add(x.get("kind"))
                examples.append(x)

    record = {"brief": brief[:80], "register": register, "moves": [x["move"]["name"] for x in scenes if x.get("move")], "angles": [angle["business"]] if angle else [], "examples": [x.get("file") for x in examples], "voices": [voice], "plans": [lead["slug"]] if lead else [], "refs": [r["slug"] for r in chosen], "types": [type_system["id"]],
              "variants": [s["variant"] for s in sections + system]}
    floor = HEIGHTS.get(surface)
    clarity = [m for m in load("moves.jsonl") if m.get("kind") == "clarity"]
    clarity_move = pick(rng, clarity, lambda m: 0.1 if m["name"] in used.get("moves", set()) else 1, 1)[0] if clarity else None
    ideas = load("page-ideas.jsonl")
    page_ideas = pick(rng, ideas, lambda i: 1 + closeness(genre, i["genre"]), min(3, len(ideas))) if ideas and scenes else []
    return {"page_ideas": page_ideas, "clarity": clarity_move, "seed": seed, "genre": genre, "surface": surface, "register": register, "lead": lead, "modelled": bool(modelled), "references": chosen, "type_system": type_system, "palette": {"from": source["name"], "palette": palette}, "no_images": no_images, "renderer": bool(renderer),
            "voice": voice, "shape": shape, "sections": sections, "scenes": scenes, "images": "none" if no_images else images, "system": system, "angle": angle, "named": named, "subject": subject, "site": site, "asked": asked, "brief": brief, "coach": coach, "examples": examples, "minHeight": floor[0] if floor else None, "heightRange": floor[1] if floor else None}, record


def load_folder(name):
    rows = []
    for path in sorted((DATA / name).glob("*.jsonl")):
        for line in path.read_text().splitlines():
            if line.strip():
                try:
                    rows.append(json.loads(line))
                except ValueError:
                    pass
    return rows


def load_flags():
    """Variants that are real but read as generated, so default hands avoid them. Explicit requests can still use them."""
    try:
        return json.loads((DATA / "variant-flags.json").read_text())
    except (OSError, ValueError):
        return {}


def load_index():
    try:
        return json.loads((DATA / "variant-index.json").read_text(encoding="utf8"))
    except (OSError, ValueError):
        return {}


def where(index, option):
    hit = index.get(f"{option['el']}/{option['variant']}")
    return f" Read `{hit[0]}` lines {hit[1]} to {hit[2]}." if hit else ""


def recipe(index, slot):
    """The chapter's own text for a dealt variant, printed in the hand so that it is read without being sought out."""
    place = index.get(f'{slot["el"]}/{slot["variant"]}')
    if not place:
        return [slot["spec"]]
    try:
        lines = (ROOT / place[0]).read_text().splitlines()[place[1] - 1:place[2]]
    except OSError:
        return [slot["spec"]]
    body = [line for line in lines if not line.lstrip().startswith("<!-- v:") and not re.match(r"#{1,6}\s", line) and not re.match(r"(- )?\*\*(Seen on|Suits)", line.lstrip())]
    body = [line for n, line in enumerate(body) if line.strip() or (n and body[n - 1].strip())]
    while body and not body[-1].strip():
        body.pop()
    if len(body) > 70:
        body = body[:70] + ["", f"(Cut short. The rest is in `{place[0]}` from line {place[1]}.)"]
    if sum(line.lstrip().startswith("```") for line in body) % 2:
        body.append("```")
    return body


def render(d):
    out = [f"# Your direction (seed {d['seed']})", "",
           f"Reads as **{d['genre']}**, surface **{d['surface']}**, register **{d['register']}** (see `references/registers.md`).", ""]
    a2 = d.get("asked") or {}
    lines = []
    if a2.get("look"):
        lines.append("- **Look:** " + "; ".join(a2["look"]) + ".")
    if a2.get("colours"):
        lines.append("- **Colour:** " + ", ".join(a2["colours"]) + ". Use these as the palette's colours; the dealt palette below supplies only what they leave open, such as the ground and the neutrals.")
    if a2.get("fonts"):
        lines.append("- **Type:** " + ", ".join(a2["fonts"]) + ". Use these; the dealt type system is only a fallback for roles they did not cover.")
    if a2.get("sections"):
        lines.append("- **They asked for:** " + ", ".join(a2["sections"]) + ". Build each one, as the most ambitious version of itself, inside the scenes below.")
    if a2.get("effects"):
        lines.append("- **Effects:** " + "; ".join(a2["effects"]) + ".")
    out += ["## What they asked for", "", f"> {d.get('brief', '')[:400]}", ""]
    out += (lines + [""] if lines else [])
    out += ["Everything the person said outranks this hand. Read `references/intent.md`, write one sentence of the form \"they want X, for Y, that feels like Z\", and keep it in front of you. The hand below fills only what their words leave open. Where it disagrees with them, follow them, and say what you set aside.", ""]
    if d.get("scenes"):
        out += ["**This hand is a push, not a cage.** It names the jobs this page has to do and deals one move for each, drawn from real sites that do not look like templates, to pull you away from your usual page. It exists because a page built from section types such as hero, features, stats, testimonials, FAQ and footer is a template however well it is finished.", "",
                "Keep the register, type system and palette unless the person's words point elsewhere. For each job, build the dealt move or something more ambitious that suits this business better: `references/taste.md` has the idea engine and `references/moves/` the whole library. Never fall back to the template version named beside a move. Say which moves you replaced and why.", "",
                "Take moves, not looks. The result must not be identifiable as a copy of any reference, so change the content, the pictures and the details freely.", ""]
    else:
        out += ["**This hand is a push away from your usual page.** It was drawn from real top-tier pages so that no two projects look alike. Follow it where the person left things open, and do not drift back towards your habits.", "",
                "Swap a slot when it is plainly wrong for this business or for what the person asked, and say which and why. Keep the register, the type system, the palette and the section order unless the person or an existing brand points elsewhere.", ""]
    out += ["When recipes disagree, the type system decides type, the palette decides colour, and the Copy section below decides wording. Add weights to the font URL if you need them.", "",
            "If something needs proof you do not have, such as a quote or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.", ""]
    if d.get("scenes") and d.get("images") != "none":
        route = {"photo": "Real photographs from `scripts/photos.py`. Search for concrete subjects, read the contact sheet at full size, and pick for a calm zone and a clear subject, not for topic.", "render": "A Blender render set: one scene, one light, many cameras. Read Render your own set in `references/imagery.md`.", "supplied": "The pictures the user supplied.", "generated": "Your image generator, art-directed as one set."}.get(d.get("images"), "")
        out += ["## Pictures come first", "", f"Route: {route}", "",
                "Choose pictures before you write copy or layout, because this is what the page will be made of. Plan a set of at least six, in two distances. Cut out at least one subject with `scripts/cutout.swift` so type can sit behind it. Run the set through `scripts/imgset.py` so it is graded as one and sized for 2x. Read `references/imagery.md` and `references/composition.md` now.", ""]
    if d.get("no_images"):
        out += [("You have no image source, so this hand avoids photography. Blender is installed here, which is worth using: read Render your own set in `references/imagery.md`." if d.get("renderer") else "You have no image source, so this hand avoids photography. Build from type, real information, interface, drawing and procedural images, as in `references/imagery.md`."), ""]
    if d.get("coach"):
        guide = ROOT / "references" / "gpt.md"
        if guide.exists():
            out += [re.sub(r"^# Coaching for GPT models\n+", "## Read this first\n\n", guide.read_text()).replace("\n## ", "\n### ").replace("### Read this first", "## Read this first"), ""]
    if d.get("subject"):
        out += ["## The business", ""]
        if d.get("site"):
            out += [f"The brief models this page on {d['site']}, so the business is the same kind of product: **{d['subject']}**. Invent your own brand for it. Take the job, the audience and what works, never its name, logo, colours or copy.", ""]
        else:
            out += [f"The brief names it: **{d['subject']}**. Keep that business, and invent only what it leaves open: a name, a place, a price, a point of view.", ""]
    a = d.get("angle")
    if a:
        if not d.get("named"):
            out += ["## The business", "", "Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.", ""]
        elif a.get("fits"):
            out += ["## The angle", "", "A brief like this needs a narrow position, so use this one unless the user has said otherwise.", ""]
        else:
            out += ["## How a neighbouring business did it", "", "This is not your business. It shows the level of specificity to reach. Work out the equivalent for yours: an equally narrow customer, equally concrete facts, and three components of the same calibre.", ""]
        out += [f"**{a.get('business')}**", ""]
        if a.get("name_style"):
            out.append(f"- Naming: {a['name_style']}")
        if a.get("facts"):
            out.append("- Facts to build on: " + "; ".join(a["facts"]))
        if a.get("vocabulary"):
            out.append("- Their vocabulary: " + ", ".join(a["vocabulary"]))
        out += ["", "### Bespoke components: build these first", "", "These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.", ""]
        for c in a.get("components", []):
            out.append(f"- **{c.get('name')}.** {c.get('shows')} Data: {c.get('data')} Behaviour: {c.get('moves')}")
        out.append("")
    all_slots = d["sections"] + d["system"]
    if d.get("scenes"):
        all_slots = [x for x in all_slots if x["slot"] not in ("Load", "Scroll", "Showpiece")]
        if d.get("lead"):
            out += [f"The order of jobs comes from {d['lead']['name']}, a {d['lead']['tier']} {d['lead']['genre']} page. Take the order, not the page.", ""]
        if d.get("page_ideas"):
            out += ["## Your page needs one organising idea", "", "Before the scenes, decide the one idea the whole page hangs on, in a sentence that could only be about this business. These three real pages each had one. They show the size of idea to look for. Do not reuse them.", ""]
            out += [f"- {i['idea']}" for i in d["page_ideas"]] + [""]
        out += ["## The jobs, and a move for each", ""]
        for n, x in enumerate(d["scenes"], 1):
            label, job, ban = JOBS[x["job"]]
            out.append(f"### Scene {n}: {label}")
            out += ["", f"{job} Not {ban}.", ""]
            mv = x.get("move")
            if mv:
                tags = ", ".join(t for t in (mv.get("kind"), "loud" if mv.get("loud") else "quiet", "needs a cut-out" if mv.get("cutout") else "") if t)
                out += [f"**Move: `{mv['name']}`** ({tags})", "", mv["what_you_see"], ""]
                if mv.get("why"):
                    out.append(f"- Why no template produces this: {mv['why']}")
                out.append(f"- Build: {mv['recipe']}")
                if mv.get("transfer"):
                    out.append(f"- For an ordinary business: {mv['transfer']}")
                if mv.get("depends_on"):
                    out.append(f"- Depends on: {mv['depends_on']}")
                out.append("")
        out += ["A navigation and a footer are also needed. Their recipes are below. Everything else on the page must earn its place in one of these scenes.", ""]
    else:
        heading = "## The page, in order" if d.get("lead") else f"## What to build for this {d['surface']} surface"
        if d.get("modelled"):
            out += [f"The brief names {d['lead']['name']} as its model, so its real page structure leads this hand. Take its qualities, precision and sequence. Do not reproduce its content, branding or artwork.", ""]
        if d.get("lead"):
            heading += f" (structure from {d['lead']['name']}, a {d['lead']['tier']} {d['lead']['genre']} page)"
        out += [heading, ""]
        for n, s in enumerate(d["sections"], 1):
            out.append(f"{n}. {s['slot']}: `{s['el']}/{s['variant']}`")
    if d.get("minHeight"):
        out += ["", f"Top {d['surface']} pages run {d['heightRange']} tall at 1440, so build every scene in full with real content."]
    t = d["type_system"]
    di, te, ui = t.get("display", {}), t.get("text", {}), t.get("ui", {})
    out += ["", "## Type system", "", f"**{di.get('family')}** with **{te.get('family')}**. {t.get('why', '')}",
            f"- Display: {di.get('size_desktop')}, phone {di.get('size_phone')}, weight {di.get('weight')}, tracking {di.get('tracking')}, leading {di.get('leading')}. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.",
            f"- Text: {te.get('size')}/{te.get('leading')}. UI: {ui.get('family')} {ui.get('size')} {ui.get('weight')}. Label: {(t.get('label') or {}).get('note', '')}",
            f"- Load: {' '.join(t.get('css', []))}"]
    p = d["palette"]
    out += ["", "## Palette", "", f"From {p['from']}: " + ", ".join(f"{k} {v}" for k, v in p["palette"].items() if v) + ". Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground."]
    out += ["", "## Copy", "", f"Voice: **{d['voice']}**. Headline shape: **{d['shape']}**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.", "",
            "These decide whether the page reads as written by a person:", "",
            "- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.",
            "- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.",
            "- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.",
            "- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.",
            "- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged."]
    if any(s["el"].startswith("product.") for s in all_slots):
        out += ["", "## Product frames", "", "Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go."]
    motion = {s["slot"]: s["variant"] for s in all_slots if s["slot"] in ("Load", "Scroll", "Hover")}
    if d.get("scenes"):
        out += ["", "## Write the scene cards before any code", "",
                "Write `.frontend-craft/scenes.md`, one card per scene, and hold every scene to it. A card is six lines:", "",
                "- **Job:** which job this scene does, in one sentence about this business",
                "- **On screen:** what a visitor sees, described as a picture, with no mention of headings or sections",
                "- **Picture and type:** which picture, its subject and calm zone, and exactly how the type and the picture share the space",
                "- **Component:** the noun, the verb and the rung from `references/components.md`",
                "- **Motion:** its part in the score from `references/motion/score.md`",
                "- **Volume:** loud or quiet, dark or light, picture-led or type-led, pinned or free", "",
                "Then write the score: the seven parts in `references/motion/score.md`. Read the cards in order and fix these before building: two neighbours with the same volume line, more than three loud scenes, a scene that opens with a heading followed by content twice in a row, a component below rung 2.", "",
                "**One idea per screen.** Read `references/clarity.md` before you build a scene and again before you finish it. At every scroll position a stranger should be able to say what the screen is about in five words. No pills above headings, no labels beside everything, no corner notes, no two buttons side by side, and no small lists in a sidebar. When in doubt, take it out, make one thing bigger, or show it only when someone asks.",
                *([f"**A way to stay calm: `{d['clarity']['name']}`.** {d['clarity']['what_you_see']}", ""] if d.get("clarity") else [""]),
                "**This is a website, not a slide deck.** Under 25 words around the first headline, and under 35 words of prose in a scene. Text inside real content such as a product view or a price list does not count. If a sentence explains something the page could show, build the thing and delete the sentence.", "",
                "**Every part has to be worth stopping for.** Before you move on from a scene, ask whether someone would pause here, and whether they would show it to a friend. If the honest answer is no, the scene is not finished, however correct it is."]
    elif motion.get("Load") and motion.get("Scroll"):
        out += ["", "## Motion is required", "", f"A still page fails, however clean it is. Build all of this, as one language: **Load** `{motion.get('Load')}`, **Scroll** `{motion.get('Scroll')}`, **Hover** `{motion.get('Hover')}`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how."]
    elif motion:
        out += ["", "## Motion", "", "Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work."]
    out += ["", "## Density and edges", "", "Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. "
            "Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.", "",
            "**Plain ruled rows are a default, so treat them as one.** Rows of label and value on hairlines look tidy and read as a template. Rates, prices, branches, dates and news all fall into this by habit, including small lists in a sidebar. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer."]
    out += ["", "## References", "", "Study what each is doing. Open them if you can browse. Do not reproduce them.", ""]
    for r in d["references"]:
        out += [f"**{r['name']}** ({r['genre']}, {r['tier']}) {r['url']}", f"- Doing: {r.get('thesis', '')}", f"- Why it feels made: {r.get('why_made', '')}", f"- If imitated badly: {r.get('watch_out', '')}", ""]
    if d["system"]:
        out += ["## System choices", ""]
        for s in d["system"]:
            out.append(f"- {s['slot']}: `{s['el']}/{s['variant']}`")
        out.append("")
    out += ["## Recipes", "", "Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.", ""]
    index = load_index()
    for s in all_slots:
        seen = f" (seen on {', '.join(s['evidence'])})" if s.get("evidence") else ""
        out += [f"### {s['slot']}: {s['variant']}{seen}", ""] + recipe(index, s) + [""]
    if d.get("examples"):
        out += ["## Worked examples", "", "These are real components from pages that scored level with top-tier sites in blind review. Do not copy their content or look. Study them for density: how many distinct facts they carry, how many states they show, how much is in the units, labels and timestamps, and how quiet the chrome stays. Your components should reach this level.", ""]
        for x in d["examples"]:
            try:
                code = (DATA / "exemplars" / x["file"]).read_text()
            except OSError:
                continue
            out += [f"### {x.get('kind', 'component')}: {x.get('why', '')}", "", "```html", code.rstrip(), "```", ""]
    out += ["After the build, run `shoot.mjs` and `audit.mjs`. The audit measures whether the page has the shape of a template. A copy of this hand is in `.frontend-craft/hand.md`, so reread it while you build."]
    return "\n".join(out)


# Work that is not a web page gets a taste hand, not page sections. Landing-page training applied to a poster is how a poster comes out trashy.
ARTEFACTS = [
    ("poster", r"\b(poster|posters|flyer|flyers|gig poster|placard|billboard)\b"),
    ("cover", r"\b(album cover|album art|cover art|book cover|record sleeve|podcast cover|cover)\b"),
    ("editorial", r"\b(zine|magazine spread|editorial spread|spread|broadsheet)\b"),
    ("generative", r"\b(generative|algorithmic|p5|creative coding|shader art|artwork|art piece|wallpaper|pattern)\b"),
    ("illustration", r"\b(illustration|svg scene|svg drawing|drawing|draw me|draw a|painting)\b"),
    ("identity", r"\b(logo|logotype|wordmark|monogram|brand mark|identity|emblem)\b"),
    ("game interface", r"\b(game ui|hud|game menu|main menu|inventory screen|game interface)\b"),
    ("slides", r"\b(slides|slide deck|deck|presentation|keynote|powerpoint|power point|pptx|google slides)\b"),
    ("document", r"\b(report|annual report|whitepaper|white paper|document|memo|one-pager|one pager|case study pdf|ebook|e-book|brochure|proposal doc|resume|r[ée]sum[ée]|cv)\b"),
    ("email", r"\b(email newsletter|newsletter email|email template|marketing email|welcome email|email campaign|html email|email design|an email)\b"),
    ("social graphic", r"\b(instagram post|instagram story|social post|social media post|social graphic|carousel post|linkedin post|youtube thumbnail|thumbnail|tiktok cover)\b"),
    ("data graphic", r"\b(infographic|data viz|dataviz|visuali[sz]ation|chart)\b"),
    ("motion piece", r"\b(title sequence|motion graphic|motion graphics|intro animation|animated logo)\b"),
    ("print piece", r"\b(invitation|business card|ticket|label|packaging|postcard)\b"),
]
WEB_WORDS = r"\b(website|web site|landing|homepage|home page|web page|webpage|site|dashboard|web app|store|online shop)\b"
FORMAL_IDEAS = ["Type is the image: the words are the picture, at a scale that breaks the edges", "One object, enormous, cropped by two edges",
                "A strict grid, set up and then broken exactly once", "Repetition with one difference", "A diagram that is also a picture",
                "Two images in collision, cut along one hard line", "Negative space as the main shape", "One line that travels through everything",
                "A pattern built from the subject's own shape", "A photograph or render cut through by type", "A 20-to-1 scale contrast between two elements",
                "Everything aligned to one strong diagonal", "One colour field split by one hard edge", "A detail of the subject at macro scale",
                "The system shown: many variations of one mark"]
PALETTE_IDEAS = ["Two inks plus the paper, nothing else", "One saturated colour across most of the surface and a small amount of its opposite",
                 "Near-monochrome, with one pure accent used once", "A complementary pair at equal value, so the edge between them vibrates",
                 "Black, paper and one fluorescent spot colour", "Colours sampled from one real object in the subject, and only those"]
CONSTRAINTS = ["One typeface, in two sizes only", "Nothing centred", "The main element touches at least two edges", "No outlines, shadows or glows anywhere",
               "Three elements at most", "All text sits in one block, smaller than you think", "One element is rotated, everything else is square to the frame",
               "Every colour must also work printed as one-colour black"]


def artefact(brief):
    text = brief.lower()
    for name, pattern in ARTEFACTS:
        if re.search(pattern, text):
            return None if re.search(WEB_WORDS, text) else name  # a page that mentions a pattern or a chart is still a page
    return None


def taste_hand(brief, seed, medium):
    rng = random.Random(seed)
    trad = [json.loads(l) for l in (DATA / "traditions.jsonl").read_text().splitlines() if l.strip()] if (DATA / "traditions.jsonl").exists() else []
    fits = [x for x in trad if medium in x.get("media", [])] or trad
    t = rng.choice(fits) if fits else None
    idea, palette, rule = rng.choice(FORMAL_IDEAS), rng.choice(PALETTE_IDEAS), rng.choice(CONSTRAINTS)
    noun = {"generative": "generative piece", "identity": "identity", "data graphic": "data graphic", "slides": "slide deck"}.get(medium, medium)
    guide = {"slides": "slides-and-decks", "document": "documents-and-reports", "email": "email", "social graphic": "social-graphics", "poster": "posters-flyers-covers",
             "cover": "posters-flyers-covers", "data graphic": "data-graphics", "identity": "identity-and-logos", "game interface": "game-interfaces",
             "motion piece": "motion-and-title-sequences", "print piece": "packaging-and-labels"}.get(medium)
    asked = stated(brief, [f.get("name") or f.get("family") or "" for f in load("fonts.jsonl")])
    noun = ("an " if noun[0] in "aeiou" else "a ") + f"**{noun}**"
    out = [f"# A taste hand (seed {seed})", "", f"This is {noun}, not a web page. " + ("Leave the landing-page habits behind: no hero, no card grids, no web navigation, no web type sizes." if medium in ("slides", "document", "email", "social graphic") else "Leave the page rules behind: no sections, no navigation, no buttons, no cards, no measured web type sizes.")
           + (f" Read `references/beyond-web.md#{guide}` first for this medium's first principles, then" if guide else " Read") + " `references/taste.md`, starting with the idea engine and Outside the browser.", ""]
    said = [f"- **{k}:** " + ", ".join(v) for k, v in (("Look", [x.split(":")[0] for x in asked["look"]]), ("Colour", asked["colours"]), ("Type", asked["fonts"])) if v]
    out += ["## What they asked for", "", f"> {brief[:400]}", ""] + (said + [""] if said else []) + [
        "Their words outrank everything below. Read `references/intent.md` and write \"they want X, for Y, that feels like Z\" before you start. The ancestor and the dealt idea fill only what they left open.", ""]
    if t:
        out += ["## An ancestor", "", f"**{t['name']}.** {t['move']}", "", f"Palette habit: {t['palette']}. Type habit: {t['type']}.", "",
                "Take the move, not the look. Find two more ancestors yourself, from other decades and places, and write one line on each move.", ""]
    out += ["## Dealt", "", f"- **Formal idea:** {idea}.", f"- **Colour:** {palette}.", f"- **Constraint:** {rule}.", "",
            "The idea and constraint are a starting push, not a cage. If the subject plainly wants another idea, say which and why.", "",
            "## Before you build", "", "Write `.frontend-craft/concepts.md`: how the piece is met, three ancestors, and five concepts that differ in formal idea, one line each. Cross out the two that came first. Build the one that makes you slightly nervous.", "",
            "Then build at real size, push one variable to its limit, and keep whichever version is more alive. Run `node <skill-dir>/scripts/slop.mjs <file>` and fix every REMOVE line, then run the Critique questions in `references/taste.md` at full size and at thumbnail size. Real content still matters: a real date, place, name or detail beats any ornament.", ""]
    return "\n".join(out)


def save_hand(d):
    """Leave the hand beside the work so shoot.mjs can hold the page to it."""
    t = d["type_system"]
    fonts = list(dict.fromkeys(f for f in (t.get("display", {}).get("family"), t.get("text", {}).get("family")) if f))
    hand = {"seed": d["seed"], "surface": d["surface"], "register": d["register"], "fonts": fonts, "palette": d["palette"]["palette"], "sections": [JOBS[x["job"]][0] for x in d.get("scenes", [])] or [s["slot"] for s in d["sections"]],
            "minHeight": d["minHeight"], "heightRange": d["heightRange"], "motion": {s["slot"]: s["variant"] for s in d["sections"] + d["system"] if s["slot"] in ("Load", "Scroll", "Hover")}, "coach": bool(d.get("coach")),
            "components": [c.get("name") for c in (d.get("angle") or {}).get("components", [])]}
    try:
        folder = Path.cwd() / ".frontend-craft"
        folder.mkdir(exist_ok=True)
        (folder / "direction.json").write_text(json.dumps(hand, indent=1))
        (folder / "hand.md").write_text(render(d))
    except OSError:
        pass


def main():
    ap = argparse.ArgumentParser(description="Deal a design direction for a brief.")
    ap.add_argument("brief")
    ap.add_argument("--seed", type=int)
    ap.add_argument("--surface", choices=sorted(set(FIXED) | set(TARGET_SECTIONS)))
    ap.add_argument("--register")
    ap.add_argument("--explore", action="store_true", help="include expressive registers")
    ap.add_argument("--coach", action="store_true", help="print coaching and worked examples in the hand; on by default under Codex")
    ap.add_argument("--no-coach", action="store_true", help="leave coaching out")
    ap.add_argument("--images", default="photo", choices=["photo", "render", "supplied", "generated", "none"], help="where the pictures come from. Decide this before dealing: see the Images step in SKILL.md")
    ap.add_argument("--no-images", action="store_true", help="last resort: same as --images none. Only after photos.py and Blender have both failed")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--no-history", action="store_true", help="do not read or record past deals")
    ap.add_argument("--no-save", action="store_true", help="do not leave .frontend-craft/direction.json in this folder")
    a = ap.parse_args()
    if a.no_history:
        global HISTORY
        HISTORY = Path("/nonexistent/history.json")
    seed = a.seed if a.seed is not None else (time.time_ns() ^ zlib.crc32(a.brief.encode())) % 2**31
    coach = (a.coach or any(k.startswith("CODEX") for k in os.environ)) and not a.no_coach
    medium = None if a.surface else artefact(a.brief)
    if medium:
        hand = taste_hand(a.brief, seed, medium)
        if not a.no_save:
            try:
                folder = Path.cwd() / ".frontend-craft"; folder.mkdir(exist_ok=True); (folder / "hand.md").write_text(hand)
            except OSError:
                pass
        print(hand)
        return
    d, record = deal(a.brief, seed, a.surface, a.register, a.explore, a.no_images or a.images == "none", coach, a.images)
    if not a.no_history:
        write_history(read_history() + [record])
    if not a.no_save:
        save_hand(d)
    print(json.dumps(d, indent=1) if a.json else render(d))


if __name__ == "__main__":
    main()
