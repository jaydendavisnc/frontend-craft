# Media

Images tell a reader whether a real business stands behind the words. This chapter covers everything on a page that is neither type nor layout: photography, illustration, icon sets, logo marks, 3D renders and video. The main lesson is that none of these is chosen one at a time. Good images from four sources look like a search result, and plain images from one hand look like a brand. So learn the set first, then the pieces.

It holds 74 canonical variants, clustered from 323 analyst rows across 284 sites. The strongest variants of each element were checked against real frames, and 41 were rebuilt and rendered next to the real thing, which is where the corrections and the mistake lists come from. Page counts were re-measured from 516 gold and silver sites and 516 hover probes. Where a frame disagreed with an analyst, the frame won. The same variants live in `data/elements/media.jsonl`, which is what the sampler deals from. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in. Hex values appear only where they are neutral greys or measured facts about a site. Treat those as evidence, not as a palette to copy.

**Contents.** [How a set becomes one art direction](#how-a-set-becomes-one-art-direction) · [Getting images at all](#getting-images-at-all) · [What we measured](#what-we-measured)

- **[Photography](#photography):** [one light, one grade](#1-one-light-one-grade) · [palette-tied set](#2-palette-tied-set) · [studio seamless object](#3-studio-seamless-object) · [cut-out on flat colour](#4-cut-out-on-flat-colour) · [macro material crop](#5-macro-material-crop) · [documentary in a system tile](#6-documentary-in-a-system-tile) · [same-angle grid](#7-same-angle-grid) · [contrast pairing](#8-contrast-pairing) · [scrimless campaign plate](#9-scrimless-campaign-plate) · [uncropped native plate](#10-uncropped-native-plate) · [die-cut shape mask](#11-die-cut-shape-mask) · [tilted prints](#12-tilted-prints) · [paste-up collage](#13-paste-up-collage) · [annotated photo](#14-annotated-photo) · [halftone or mosaic screen](#15-halftone-or-mosaic-screen) · [gradient-map duotone](#16-gradient-map-duotone)
- **[Illustration](#illustration):** [hairline isometric](#1-hairline-isometric) · [one-weight system diagram](#2-one-weight-system-diagram) · [flat fill kit](#3-flat-fill-kit) · [technical drawing](#4-technical-drawing) · [dither and dot](#5-dither-and-dot) · [cover art system](#6-cover-art-system) · [tonal contour field](#7-tonal-contour-field) · [hand-inked line](#8-hand-inked-line) · [single thread line](#9-single-thread-line) · [stipple and engraving](#10-stipple-and-engraving) · [textured commissioned art](#11-textured-commissioned-art) · [mascot system](#12-mascot-system) · [flat geometric world](#13-flat-geometric-world) · [die-cut sticker](#14-die-cut-sticker) · [paper craft scene](#15-paper-craft-scene)
- **[Icon sets](#icon-sets):** [one-weight line set](#1-one-weight-line-set) · [check and cross system](#2-check-and-cross-system) · [provenance glyphs](#3-provenance-glyphs) · [duotone solid glyphs](#4-duotone-solid-glyphs) · [knockout badge tiles](#5-knockout-badge-tiles) · [product object as icon](#6-product-object-as-icon) · [pattern-drawn marks](#7-pattern-drawn-marks) · [pixel grid icons](#8-pixel-grid-icons) · [clay render icons](#9-clay-render-icons) · [labelled desktop icons](#10-labelled-desktop-icons)
- **[Logo marks](#logo-marks):** [constructed geometric mark](#1-constructed-geometric-mark) · [wordmark with one device](#2-wordmark-with-one-device) · [pixel-cut wordmark](#3-pixel-cut-wordmark) · [cut letterform](#4-cut-letterform) · [seal monogram](#5-seal-monogram) · [logo as block](#6-logo-as-block) · [mark as image system](#7-mark-as-image-system) · [pictogram per item](#8-pictogram-per-item) · [behaving logo](#9-behaving-logo) · [app icon tile](#10-app-icon-tile) · [dimensional mark](#11-dimensional-mark) · [hand-made mark](#12-hand-made-mark)
- **[3D renders](#3d-renders):** [flat-shaded isometric](#1-flat-shaded-isometric) · [glass plate isometric](#2-glass-plate-isometric) · [glossy object tile](#3-glossy-object-tile) · [machined on black](#4-machined-on-black) · [matte clay](#5-matte-clay) · [wireframe to solid](#6-wireframe-to-solid) · [exploded part view](#7-exploded-part-view) · [macro crop render](#8-macro-crop-render) · [material story render](#9-material-story-render) · [grainy abstract form](#10-grainy-abstract-form) · [product CGI on flat](#11-product-cgi-on-flat) · [toy character render](#12-toy-character-render)
- **[Video](#video):** [texture-first loop](#1-texture-first-loop) · [full-bleed loop](#2-full-bleed-loop) · [autoplay thumbnails](#3-autoplay-thumbnails) · [in-scene caption](#4-in-scene-caption) · [poster with designed play](#5-poster-with-designed-play) · [inline clip, quiet controls](#6-inline-clip-quiet-controls) · [portrait tile row](#7-portrait-tile-row) · [hero thumbnail chip](#8-hero-thumbnail-chip) · [product output as footage](#9-product-output-as-footage)
- [Before you call it done](#before-you-call-it-done)

## How a set becomes one art direction

### Write the contract first

Before you choose or make a single image, write six lines. This is the art direction. Everything after it is checking against it, and it works for photographs, renders, illustration and prompts to an image model alike.

| Line | Decide | Example |
|---|---|---|
| Subject | What is always in frame, and what never is | Real hands at work. Nobody looks at the camera. No laptops |
| Light | Time of day, direction, hardness | Low window light from the left, soft edges |
| Distance | Which two distances alternate | Macro, then waist-up, nothing between |
| Colour | Bias and ceiling | Warm shadows. Nothing more saturated than the accent |
| Format | One or two ratios, one edge | 4:5 and 3:2, square corners |
| Page | What the page does to an image | Nothing. No tint, no overlay, captions below |

If you cannot fill a line, the set has no direction yet. If a competitor could use the same six lines unchanged, the subject line is too vague.

### What actually holds a set together

Analysts kept writing "consistent warm grade", so I measured it. These are real sets from gold and silver sites, cropped from frames and compared in CIELAB, next to two control groups of unrelated images. Spread is the gap between the highest and lowest image in the set. L* is brightness, C is colourfulness, and b* runs from cool to warm.

| Set | Images | Brightness spread | Chroma spread | Warm-cool spread | What holds it |
|---|---|---|---|---|---|
| DJI tiles | 4 | 7 | 1 | 1 | Everything |
| Sweetgreen bowls | 3 | 6 | 10 | 6 | Brightness, camera, ground |
| Oliver Dupuy interiors | 7 | 27 | 6 | 8 | Colour bias |
| Joby film | 5 | 64 | 3 | 2 | Colour bias alone |
| HAY row | 3 | 8 | 16 | 19 | Brightness and flat framing |
| Function portraits | 4 | 23 | 10 | 14 | Crop and light |
| Aman tiles | 7 | 55 | 22 | 41 | Format and page only |
| Control: four wallpapers | 4 | 19 | 17 | 20 | Nothing |
| Control: four unrelated sources | 4 | 21 | 25 | 47 | Nothing |
| The same four after my grade | 4 | 19 | 31 | 26 | Not enough |

Four things follow.

**Colour bias does more than brightness.** Joby's frames run from a black cabin to pale sky, wider than any control group, and they read as one film because the colour barely moves. The controls have a smaller brightness spread than Joby and still look unrelated. If you lock one thing, lock the warm-cool bias, and aim for a spread under 10.

**Unity is not one recipe.** A set can lock colour (Joby, Oliver Dupuy), or lock brightness and setup (HAY, Sweetgreen, DJI), or lock format (Aman). Lock at least two of colour bias, brightness, setup and format.

**Aman's "warm grade" does not exist.** Its rust silk, pale watercolour and deep blue ship spread as widely as unrelated sources. One ratio, one caption block and a paper page hold them, along with subjects that cost a great deal to make. Do not lean on format alone unless your subjects are that strong.

**A grade narrows a set. It cannot create one.** My grade cut warm-cool spread from 47 to 26, and chroma spread got worse, from 25 to 31, because a filter hits each image differently. The result is still several times wider than a set shot under one light. If frames were taken in different light, replace the outlier.

These are small samples, so treat the numbers as a diagnostic rather than a law.

```text
Lock two of four
  Colour bias   warm-cool spread under 10, chroma spread under 10
  Brightness    brightness spread under 10
  Setup         one camera, one ground, one object scale
  Format        one or two ratios, one edge, one caption recipe
```

### The order of work

Work in this order, because each step has more effect than the next.

1. **Cull.** Remove anything that breaks the Subject or Light lines. A set of four strong frames beats a set of nine mixed ones.
2. **Crop.** Bring everything to one or two ratios, and match subject scale across the row. This costs nothing and does more than any filter.
3. **Grade.** Apply one curve to all, and check with the audit below.
4. **Place.** Decide what the page does. The usual answer is nothing.

Then squint. Shrink the whole set to a contact sheet at about 120px per image and look for the one that jumps out. That image is your outlier, however good it is alone.

```js
// Same-origin images only. Reads each at thumbnail size and prints the three spreads that matter.
function audit(imgs) {
  const c = new OffscreenCanvas(64, 64), x = c.getContext('2d', { willReadFrequently: true });
  const f = t => t > .008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116, g = v => (v /= 255) <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
  const rows = imgs.map(img => { x.drawImage(img, 0, 0, 64, 64); const d = x.getImageData(0, 0, 64, 64).data;
    let L = 0, C = 0, B = 0; const n = d.length / 4;
    for (let i = 0; i < d.length; i += 4) { const r = g(d[i]), v = g(d[i+1]), b = g(d[i+2]);
      const X = f((.4124*r + .3576*v + .1805*b) / .9505), Y = f(.2126*r + .7152*v + .0722*b), Z = f((.0193*r + .1192*v + .9505*b) / 1.089);
      const a = 500 * (X - Y), bb = 200 * (Y - Z); L += 116 * Y - 16; C += Math.hypot(a, bb); B += bb; }
    return { L: L / n, C: C / n, b: B / n }; });
  const spread = k => { const v = rows.map(r => r[k]); return Math.round(Math.max(...v) - Math.min(...v)); };
  return { rows, brightness: spread('L'), chroma: spread('C'), warmCool: spread('b') };
}
```

### Mixing media

Keep one lead medium per page, and at most one support. A photo-led page with a few hand-inked spots works. A page with photographs, 3D blobs, flat illustration and duotones reads as a sample book. When two media share a page, tie them with one lock: Notion's about page sets black and white archival engravings beside black ink characters, so tone joins them. Anthropic's pages pair saturated paper collage with quiet hand-inked marks, and the neutral interface lets each stay separate. Stripe keeps illustration in one colour family with its gradients.

Put the strongest image where the reader decides, then let the rest step down. Most pages need one image that could not belong to anyone else. The others can be quiet.

## Getting images at all

Work down this list and stop at the first line you can honestly do.

1. **Real assets.** Use anything the client supplies, and treat it as a set using the order of work above. Ask for the logo as SVG.
2. **An image generation tool.** Write the contract as one fixed suffix, use it word for word in every prompt, and change only the subject. Make at least twice what you need and cull with the audit. Do not ask for text or logos inside images. Check hands and faces closely. Reject any frame a competitor could use unchanged. If you have no generator but can fetch and check files, licensed web photos come next, as in `references/imagery.md`.
3. **Code.** This is often better than weak photography, and for software it is usually better than any picture. Everything in the table below can be built well without a single asset.

Never ship a grey box as a final image, an emoji as an icon, or a hotlinked image you have not verified. While a real picture is on its way, hold its true ratio, as in `surface.panel/true-ratio-placeholder`, so nothing shifts when it arrives.

| You need | Build it with | Variants |
|---|---|---|
| A system or mechanism explained | SVG | `hairline-isometric`, `one-weight-system-diagram`, `flat-fill-kit` |
| Warmth without photographs | SVG and a filter | `hand-inked-line` |
| Covers for a blog or report | An HTML template fed by data | `cover-art-system` |
| A surface for an empty panel | Canvas | `tonal-contour-field`, `dither-and-dot` |
| An object with weight | three.js, baked to a still | `machined-on-black`, `glossy-object-tile` |
| A concept with layers | CSS 3D | `glass-plate-isometric`, `flat-shaded-isometric` |
| A brand mark | SVG from one stated rule | `constructed-geometric-mark`, `wordmark-with-device` |
| Mismatched photos you were given | SVG filter or canvas | `gradient-map-duotone`, `halftone-or-mosaic-screen` |

Serve images properly, because a sharp picture that shifts the layout still feels cheap.

```html
<!-- Hero: load first, reserve the space, never lazy. -->
<img src="hero-1600.avif" srcset="hero-800.avif 800w, hero-1600.avif 1600w, hero-2400.avif 2400w" sizes="100vw"
     width="2400" height="1500" alt="Night crew loading the first ferry of the day" fetchpriority="high">
<!-- Everything below the fold. -->
<img src="yard.avif" width="1200" height="1500" alt="Hull on the slip at dawn" loading="lazy" decoding="async">
```

Give every image a real `alt` that says what is in it, and an empty `alt=""` only when it is pure decoration. Reserve space with `width` and `height`, or with `aspect-ratio`. Ship at twice the display size for photographs and in AVIF or WebP. Prefer inline SVG for marks and icons, so they take `currentColor` and flip with the theme.

## What we measured

Each value is the median across pages, with the middle half in brackets where given.

| Measure | Gold | Silver | Expressive |
|---|---|---|---|
| Sites | 147 | 369 | 155 |
| Images per page | 39 (13 to 68) | 34 (12 to 72) | 24 (8 to 57) |
| Inline SVG per page | 36 (10 to 116) | 36 (9 to 72) | 13 (2 to 51) |
| Pages with video | 46% | 39% | 36% |
| Pages with canvas | 31% | 12% | 35% |
| Pages with three.js | 11% | 3% | 21% |
| Pages with Lottie | 7% | 2% | 7% |

By register, across 516 gold and silver sites, using each site's most common register:

| Register | Sites | Images | SVG | With video | With canvas |
|---|---|---|---|---|---|
| Light precision | 123 | 31 | 54 | 26% | 21% |
| Photo led | 117 | 35 | 16 | 53% | 10% |
| Warm neutral | 64 | 31 | 27 | 40% | 6% |
| Dark precision | 56 | 52 | 56 | 48% | 35% |
| Bold colour | 51 | 47 | 35 | 45% | 17% |
| Type led | 29 | 10 | 4 | 41% | 10% |
| Gradient light | 26 | 56 | 64 | 46% | 34% |
| Mono technical | 16 | 52 | 47 | 43% | 12% |

Three things stand out. Precise product pages are drawn: they run on SVG with few photographs. Photo-led pages barely use SVG, because the photograph carries the page. And live 3D is rare even at the top, so a baked still is usually the right call.

Measured hover, across 516 probed sites: 15% of cards change the image itself, zoom is 1.05 at the median, and it runs at 300 to 600ms, about twice as long as a button change.

## Photography

Photography does one job: it proves the business is real. Anyone can write a headline, and nobody else can show this bakery's bench at five in the morning. Cheap pages fail in a specific way. Each image is fine alone, and together they read as a search result, because they were chosen one at a time. Great pages decide the set first, as a written contract, and then every frame obeys it.

The second difference is restraint on the page. Top sites leave good photographs alone. Of 117 rows, 21 say outright that the image has no overlay, tint, scrim, shadow or frame, and only 4 use anything like a scrim. Several of the highest-scoring sites use square corners and let the picture's own edge be the frame. Reach for a treatment only when the source photographs are weak or mixed, or when the treatment is the brand's signature.

Choose an art direction from the first group, then a placement from the second. They combine: `one-light-one-grade` shot for `uncropped-native-plate` is a different page from the same set in `documentary-in-system-tile`.

Portraits need the same discipline as products. Fix the head height, the crop and the ground across the whole row, and shoot or cut everyone against one flat colour. A team of mismatched snapshots turns a good page cheap faster than almost anything else.

### Measured

| Measure | Value | Source |
|---|---|---|
| Images on a page | median 37, middle half 12 to 71 | 516 gold and silver sites |
| Corner radius on photographs | 8 / 16 / 20px (p25, median, p75), most common 16, then 8 | 21 rows that state one |
| Rows with square corners or hard crops | 10 of 117, weighted to gold portfolios and architecture | rows |
| Ratios seen most | 4:5, 3:4 and 2:3 portrait; 3:2 and 16:10 landscape; 16:9 only for film stills | rows, checked on frames |
| Rotation on prints | 1 to 8 degrees, 15 only on a loud list block | 8 rows |
| Hover on images | 15% of 336 probed cards change the image itself | 516 probes |
| Hover zoom | scale 1.05 median, middle half 1.02 to 1.08, over 300 / 400 / 600ms, mostly `ease` | 23 measured |
| Scrimless text zones, white text | contrast 3.6 to 18.6 at the zone's bright end, luminance spread 0.006 to 0.042 | Polestar, Joby, Tana, N26, 1X and ECI frames |

Hover zoom is slower than anything else on the page. Buttons change at a median of 200ms, and images take about twice that, because a big picture moving quickly feels like a jolt. Clip the zoom to the frame, keep it at 1.05 or below, and leave the frame itself still. About a third of image hovers change opacity instead of scale, often a crossfade to a second image, which suits commerce.

### Art direction: how the set is shot

<!-- v:media.photography/one-light-one-grade -->
### 1. One light, one grade

*Feeling: calm and expensive. Everything happened on the same evening.*

**Use:** Any brand with a place or a physical product: hospitality, architecture, mobility, food, fashion. The strongest default for photo-led work. **Avoid:** Software with nothing to photograph, or a documentary brand whose honesty depends on images staying uncorrected.

Fix one time of day, one light direction and one colour bias, and apply them across people, rooms and objects. Joby is the model: its frames run from black cabin to pale sky, a brightness spread of 64 L*, yet colour moves by only 2 to 3, so it reads as one dusk. Soft daylight with a matte finish gives calm: Oliver Dupuy shows no people, keeps saturation for water and plants, and holds every frame at full viewport height, with widths from about 1:1 down to true 2:3 portrait. Crop to one or two ratios only. Lift blacks by 7 to 9% and hold highlights below 96% so nothing clips. Dishoom sets warm food frames inside an inset hairline keyline with a 12px caption below, which makes a photograph feel printed. Do not read Aman as a grade to copy: its rust silk, pale watercolour and deep blue ship share no colour bias at all. It holds together through one tile format, one caption block and a paper page.

**Seen on** Joby, Aman, Oliver Dupuy, Babylonstoren, Dishoom, 14 sites in all. **Suits** photo-led, warm-neutral, type-led, expressive; hospitality, food-drink, architecture, brand.

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="set-grade" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%">
    <feColorMatrix type="saturate" values=".68"/>
    <feComponentTransfer>
      <feFuncR type="table" tableValues=".09 .37 .72 .96"/>
      <feFuncG type="table" tableValues=".07 .32 .65 .92"/>
      <feFuncB type="table" tableValues=".07 .26 .54 .82"/>
    </feComponentTransfer>
  </filter>
</svg>
<style>
  .set img { width: 100%; aspect-ratio: 5 / 4; object-fit: cover; filter: url(#set-grade); }
</style>
```
The table is a four-point tone curve per channel. The first value lifts the blacks, and the last pulls the highlights down, so no frame reaches pure black or white. Red stays highest and blue lowest, which gives every frame the same warm cast. For a cool set, swap the red and blue rows. Bake the result into the files for a real launch, because a filter on every image costs paint time.

**In the lab:** Rendered with four deliberately mismatched sources. Measured in CIELAB, the grade cut warm-cool spread from 47 to 26 and lifted blacks from 0 to 5. Chroma spread got worse, from 25 to 31, and the result sits far outside the 2 to 8 of a truly unified set. The night frame stayed the outlier, which is where the rule about replacing rather than pushing comes from.

<!-- v:media.photography/palette-tied-set -->
### 2. Palette-tied set

*Feeling: the photograph and the page were designed together.*

**Use:** Fashion, furniture, consumer hardware, and any page where the interface is quiet enough to let a photo set the colour. **Avoid:** Mixed user-generated imagery, or a palette that changes per client.

Take the page ground and accent first, then shoot against them. Ivory gowns on greige seamless on an ivory page. Muted greens, rusts and creams repeated across unrelated subjects in one row. Devices draped in white cloth on a grey sweep, graded to the page grey so the photo edge melts away. Single-hue textile folds with raking light. Mid-tone grounds work best: a 2 to 4% difference between photo edge and page gives the melt without a visible join.

**Seen on** Poeza, mymind, Kvadrat, HAY, Rabbit, 9 sites in all. **Suits** photo-led, bold-colour, gradient-light, warm-neutral; brand, ecommerce, fashion, saas.

<!-- v:media.photography/studio-seamless-object -->
### 3. Studio seamless object

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

**Seen on** Boston Dynamics, Sakara, Apptronik, DJI, Globe Limousines, 7 sites in all. **Suits** photo-led, bold-colour, light-precision; brand, ecommerce, agency, food-drink.

<!-- v:media.photography/cutout-on-flat -->
### 4. Cut-out on flat colour

*Feeling: clean, confident, retail-grade.*

**Use:** Product ranges, colourways, parts, and a recurring cut-out figure as a small signature. **Avoid:** Soft or hair-edged subjects without a clean mask. A rough cut-out is worse than a rectangle.

Set the object straight on the tile colour with no floor. Group colourways so they overlap: five units across, the group filling about 90% of tile width. Use one soft contact shadow, offset slightly away from the key light. Knolled parts laid in a grid or flat-lay work the same way. For a person, use a transparent cut-out about 80px tall and let it perch on interface edges, changing pose per section. Rotation of -12 to +15 degrees suits snacks and packs with a little parallax. Portraits work the same way: cut people out, stand them on one pale panel, and fix the head height. Thrivent runs five waist-up cut-outs on alternating pale blue and tan panels at radius about 16, with a larger centre panel and heads breaking above the panel tops, which adds life to a strict row. Motusmade sets one on a pale blue panel.

**Seen on** Apple, Framework, Apple Vision Pro, Wildbran, motusmade studio, 8 sites in all. **Suits** photo-led, light-precision; brand, finance, agency, food-drink.

Frame.work was tagged as a 3D render, but the frames show photographed parts, so it is counted here.

<!-- v:media.photography/macro-material-crop -->
### 5. Macro material crop

*Feeling: tactile and close. You can feel the material.*

**Use:** Craft, skincare, eyewear, food origin, print, and anything whose quality lives in texture. **Avoid:** When the viewer needs to see the whole product before anything else. Pair the macro with one full view.

Crop tighter than feels safe: a hinge, thread on a cone, skin with pores, a press roller. Let the object run off the frame on at least two sides. Use square corners or a single small radius of 12 to 20px across the whole set. Keep texture visible, so no smoothing and no heavy sharpening. Alternate with frontal portraits or one wide frame so the page has a scale to measure against. Large crops of 705 by 880px on near-black or ivory hold a whole half-screen.

**Seen on** Fidèle, X8 Eyewear, TAYA, Curology, Eboca Empresas, 10 sites in all. **Suits** photo-led, warm-neutral, bold-colour, type-led; local-business, health, fashion, culture.

<!-- v:media.photography/documentary-in-system-tile -->
### 6. Documentary in a system tile

*Feeling: honest and specific. These people and places exist.*

**Use:** Real teams, events, field work, schools, infrastructure. The default for service businesses that have real photographs of mixed quality. **Avoid:** When the frames are weak and few. Two honest photographs beat six poor ones.

Shoot or select real moments: hands at work, people mid-gesture, equipment in use, wide places with small figures. Do not grade toward a brand tone if the realness is the point. Place every frame in one tile recipe: one radius from 8 to 24px, one or two ratios such as 16:10, and a caption below in 12 to 14px, or one line at bottom-left in white on a calm area. Vary the shot distance from tile to tile, so a fleet gets a night pan, a top-down, a studio cut-out and a close sensor crop.

**Seen on** Nuro, VanMoof, ECI, SpaceX, Fujifilm X, 19 sites in all. **Suits** photo-led, expressive, light-precision, type-led; brand, ecommerce, education, health.

<!-- v:media.photography/same-angle-grid -->
### 7. Same-angle grid

*Feeling: orderly and appetising. A menu you trust.*

**Use:** Menus, catalogues, fleets, rooms, anything with many items of one kind. **Avoid:** Fewer than three items, or items that differ in shape so much that one crop cannot hold them.

Set one camera position and repeat it exactly. Overhead on one pale textured ground, soft window light, the bowl filling about 85% of a square tile, with one small companion object. Use a rounded tile of 12 to 16px or 4:5 vertical frames with 8px gaps. Rooms or laid tables take three-up 4:5 with tight gaps. Small captions sit under the frame, never on it. The repetition is the design, so a single different angle breaks it.

**Seen on** Sweetgreen, Le Saint Georges, Lil Italy. **Suits** photo-led, warm-neutral; food-drink, hospitality.

<!-- v:media.photography/contrast-pairing -->
### 8. Contrast pairing

*Feeling: curated, like a spread in a good magazine.*

**Use:** Agencies, studios, fashion, portfolios with varied work and strong source material. **Avoid:** A small or uneven image library. Pairing shows up weak frames.

Plan images in pairs, and let neighbours contrast in tone rather than subject. Put black-and-white film grain beside saturated studio colour, macro beside wide, dark tile diagonal to light tile. In a quad, mix macro texture, pack shot, object in hand and abstract detail from one colour story. Butt the images together with no gap or a 2px gap. Keep photography as the only colour on the page. Save colour for a later section by running one block in full black and white first.

**Seen on** Nicole Heim Studio, Lazy Eight, Vayne Entertainment. **Suits** photo-led; agency.

### Placement and treatment: how it sits on the page

<!-- v:media.photography/scrimless-campaign-plate -->
### 9. Scrimless campaign plate

*Feeling: assured. The picture was composed to hold the words.*

**Use:** Hero and closing bands where you control the shoot or can choose frames with real negative space. **Avoid:** When the photograph has no calm dark zone. Do not add a gradient to manufacture one: choose another frame or put the type beside the image.

Run the image edge to edge, or in a panel of radius 20 to 32px. Compose the subject to one side, for example cars stacked right at about 60% of the width, and leave the open ground for copy at the page gutter. White type sits straight on the photograph with no box. Polestar and 1X split the title into full white and a muted second phrase, and Joby adds a short white rule beside its copy, so the block has structure without a panel. Use the `zone()` check below on the exact crop. Keep spread at or under 0.04. Keep contrast at 7 or more for body text, and 3.5 or more only for display type of 30px and up. A head may break the top edge, which adds scale.

**Seen on** 1X, A24, Tana, Polestar, Stone Island, 6 sites in all. **Suits** photo-led, light-precision, mono-technical; brand, culture, saas, fashion.

```js
// Run on the exact crop you ship. Returns white-text contrast at the zone's bright end, and its calmness.
function zone(img, x, y, w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.drawImage(img, -x, -y);
  const d = g.getImageData(0, 0, w, h).data, L = [];
  const f = v => (v /= 255) <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
  for (let i = 0; i < d.length; i += 4) L.push(.2126 * f(d[i]) + .7152 * f(d[i+1]) + .0722 * f(d[i+2]));
  L.sort((a, b) => a - b);
  const m = L.reduce((a, b) => a + b) / L.length;
  const std = Math.sqrt(L.reduce((a, b) => a + (b - m) ** 2, 0) / L.length);
  const p95 = L[L.length * .95 | 0];
  return { contrast: 1.05 / (p95 + .05), std };
}
```

**In the lab:** Rendered twice. Over lit water the block failed at contrast 2.0, spread 0.145. Over a dark sky it passed at 15.6, spread 0.005. Real frames measured Polestar 8.1 and 0.010, Joby 18.6 and 0.006, N26 8.8 and 0.021, Tana 6.7 and 0.029, and for large type only, 1X 3.6 and 0.038, ECI 3.9 and 0.042. Joby also shows the failure: its white caption stays pinned while frames change, and over the pale wing frame it loses most of its contrast. Pinned copy needs every frame to keep that corner dark.

<!-- v:media.photography/uncropped-native-plate -->
### 10. Uncropped native plate

*Feeling: curatorial. The work is left alone.*

**Use:** Portfolios, galleries, architecture, museums, anything where the image is the product and cropping would be an insult. **Avoid:** Thin libraries, or commerce grids that need equal cells to compare items.

Show each image at its native ratio with no radius, shadow, tint or caption inside. Pick one fixed dimension. Fixed height of up to 720px suits a one-at-a-time sequence: Alessandro Stella uses about 576 by 720 for portrait and about 1280 by 720 for landscape. A fixed column of 330 to 420px suits a dense index, with heights left unequal so tall images become rhythm breaks. Keep the interface in one or two neutrals, so all colour comes from the work. Set scans raw and let each object's own edge be the frame.

**Seen on** BIG, Alessandro Stella, White Cube, Theatre Memory, Bakstad Construction, 13 sites in all. **Suits** photo-led, type-led, warm-neutral, light-precision; architecture, culture, portfolio, agency.

```css
.plates { display: flex; gap: 64px; align-items: center; justify-content: center; }
.plate img { height: min(62vh, 720px); width: auto; display: block; }   /* height is fixed, width stays native */
.plate figcaption { margin-top: 14px; text-align: center; font-size: 13px; line-height: 1.3; }
.plate figcaption em { color: var(--ink-2); }
```

**In the lab:** Rendered with a square and a 3:2 frame at equal height, and it matched the Alessandro Stella frames. Fix the height, not the width.

<!-- v:media.photography/die-cut-shape-mask -->
### 11. Die-cut shape mask

*Feeling: crafted and a little theatrical. A window cut in paper.*

**Use:** Fashion, culture and gifting. A shape that encodes something real, such as ellipses of varied width that form a voice waveform. **Avoid:** Team photos in plain circles on a professional site. Circles without a reason are decoration.

For the window, shoot the subject on true black, and mask to a vertical ellipse of about 570 by 760 centred in a 720px panel. Add a 2 to 3px bevel so the edge reads as cut paper, and mirror two per row. For a data shape, set nine ellipses at equal height of about 216px and widths from 56 to 170px, touching edge to edge, alternating photos and fills. For a craft brand, use one irregular polygon with a 1px outline, tilted slightly, with one smaller echo.

**Seen on** Acne Studios, Otter, Kawara Museum, Grafana, Xin Cheng Foods, 6 sites in all. **Suits** gradient-light, warm-neutral, photo-led, bold-colour; fashion, saas, culture, agency.

```css
.window { position: relative; width: 570px; height: 760px; border-radius: 50%; overflow: hidden; background: #000;
  box-shadow: inset 0 2px 3px rgb(0 0 0 / .5),      /* the cut's upper lip */
              0 1px 0 1px rgb(255 255 255 / .9),     /* light catching the lower edge */
              0 -1px 2px 1px rgb(90 80 60 / .28); }  /* soft bevel against the paper */
.window img { position: absolute; inset: 14% 0 auto; width: 100%; height: auto; }
```

**In the lab:** Three tries. A full-bleed photo in the oval read as a picture in a circle. Feathering it to black read as a spotlight. A hard-edged render on true black finally read as a hole in the paper.

<!-- v:media.photography/tilted-prints -->
### 12. Tilted prints

*Feeling: human, messy on purpose, physical.*

**Use:** Agencies, food and drink, small local brands, and event recaps. A strict page that needs one warm counterweight. **Avoid:** As a default for friendliness. In a precise product page it reads as a template trick unless the photographs are truly candid.

Use real objects: on-camera-flash snapshots, slide mounts, parchment, or a pile of event prints. Tilt by 1 to 2 degrees for restraint, 4 to 8 for a scrapbook, and reserve 15 for a stack beside a plain list. Overlap the images, and let them cover the base of the headline by 10 to 20px. Add tape, a 3px white border or a soft 2 to 6px shadow, one per set. Vary the sizes, for example 450 by 300 and 258 by 335. Keep one element dead straight so the tilt reads as a choice.

**Seen on** Aniket, Svelte, Hibachi Guru, Casper, Diego's Authentic Foods, 7 sites in all. **Suits** bold-colour, expressive, illustrated, light-precision; food-drink, agency, portfolio, devtool.

```css
.print { position: absolute; box-shadow: 0 2px 6px rgb(0 0 0 / .28); transform: rotate(-1.2deg); }
.print img { width: 100%; height: 100%; object-fit: cover; }
.tape { position: absolute; top: -16px; left: 34%; width: 150px; height: 38px; transform: rotate(-3deg);
  background: linear-gradient(95deg, rgb(255 255 255 / .5), rgb(255 255 255 / .2) 30%, rgb(255 255 255 / .42) 62%, rgb(255 255 255 / .24));
  box-shadow: inset 0 0 0 .5px rgb(255 255 255 / .35), 0 1px 2px rgb(0 0 0 / .18); }
```

**In the lab:** First placement buried the third line of the headline. Moving the prints to touch only the base of the last line fixed it. The tape needed about 50% white at its bright end before it showed on a saturated ground.

<!-- v:media.photography/paste-up-collage -->
### 13. Paste-up collage

*Feeling: art-directed by hand. Layered and specific.*

**Use:** Editorial thumbnails, campaign archives, and agencies showing work in context. **Avoid:** As a way to hide poor imagery. Collage reveals it faster.

Choose one construction and keep it. Hard rectangles that butt and overlap like a paste-up, no radius, no shadow, in one colour story. Or a base plate of the work in place with a smaller overlay of the flat artefact. Or torn paper, print grain and painted fragments at thumbnail size, with a radius of 4px or less, supplying nearly all the page colour. A device mockup over a documentary photo needs one drawn line to tie them together, such as a hand-drawn route about 5px wide.

**Seen on** Anthropic News, International Magic, Freshly Launched, Velvele. **Suits** warm-neutral, light-precision, photo-led, type-led; agency, editorial.

<!-- v:media.photography/annotated-photo -->
### 14. Annotated photo

*Feeling: evidence. The picture is being read by the product.*

**Use:** AI, data, mapping, inspection and fitness products, where the product's output can be drawn on a real image. **Avoid:** Products that do not look at images. Trackers on a smiling team photo are a costume.

Inside one tile at radius 16, overlay the product's marks. Outline triangles of about 9px and a few 28px rounded squares at radius 7, in 1 to 1.5px white, read as labelling-tool output. Place them on real features found by corner detection, because trackers lock on to edges. Strava runs one hand-drawn route about 5px wide across a documentary photo, ending in a dot, so the phone mockup and the road belong together. Thin corner brackets on building photos are the quiet form and need no data.

**Seen on** Scale AI, Strava. **Suits** dark-precision, photo-led, warm-neutral; ai, health, architecture.

```js
// Trackers belong where a tracker could lock on. Find strong corners, then keep them apart. Shi-Tomasi on a small grey copy.
function corners(img, n = 26, gap = 26, W = 280, H = 310) {
  const c = new OffscreenCanvas(W, H), x = c.getContext('2d', { willReadFrequently: true });
  x.drawImage(img, 0, 0, W, H);
  const d = x.getImageData(0, 0, W, H).data, L = new Float32Array(W * H), R = [];
  for (let i = 0; i < W * H; i++) L[i] = (d[i*4] * .3 + d[i*4+1] * .59 + d[i*4+2] * .11) / 255;
  for (let v = 6; v < H - 6; v++) for (let u = 6; u < W - 6; u++) {
    let a = 0, b = 0, e = 0;
    for (let j = -2; j <= 2; j++) for (let i = -2; i <= 2; i++) {
      const p = u + i + (v + j) * W, gx = L[p+1] - L[p-1], gy = L[p+W] - L[p-W]; a += gx*gx; b += gy*gy; e += gx*gy;
    }
    const t = (a + b) / 2; R.push([t - Math.sqrt(Math.max(0, t*t - (a*b - e*e))), u * 2, v * 2]); // smaller eigenvalue
  }
  R.sort((p, q) => q[0] - p[0]);
  const out = [];
  for (const [, u, v] of R) if (out.every(([a, b]) => (a-u)**2 + (b-v)**2 > gap*gap) && out.push([u, v]) >= n) break;
  return out;   // draw a 9px outline triangle at each, and a 28px radius 7 square on every sixth
}
```

**In the lab:** A/B on one photograph. Twenty-six markers at random positions read as confetti. The same markers placed by a corner detector clustered on the rock and read as tracking at once. It also showed a limit: with one subject, every mark piles onto it, so choose a frame with structure across the image, as Scale does.

<!-- v:media.photography/halftone-or-mosaic-screen -->
### 15. Halftone or mosaic screen

*Feeling: ownable. Ordinary photographs become brand texture.*

**Use:** Software brands with mixed snapshots, and AI or data companies where a machine reading of the image makes sense. **Avoid:** Food, skin close-ups and anything that must look appetising or true.

Cal.com is not a dot screen, whatever it looks like at a glance. At 4x zoom it is a 3px checker of two tints of the local colour, with a slight hue split, always inside a rounded frame. Mosaic uses tiles of about 20px with a 2px gap, a stepped outline, and a gap that is a darker copy of the tile. Apply one treatment everywhere, with no untreated images next to it.

**Seen on** Cal.com, Ai2. **Suits** light-precision, bold-colour; saas, ai.

```js
// Local-colour screen. Canvas size must equal the displayed size in device pixels, or the lattice moires.
function screen(canvas, img, cell = 3) {
  const r = canvas.getBoundingClientRect(), s = devicePixelRatio, W = canvas.width = Math.round(r.width * s),
        H = canvas.height = Math.round(r.height * s), x = canvas.getContext('2d', { willReadFrequently: true }), p = cell * s;
  x.drawImage(img, 0, 0, W, H);
  const d = x.getImageData(0, 0, W, H), D = d.data;
  for (let v = 0; v < H; v++) for (let u = 0; u < W; u++) {
    const q = (u + v * W) * 4, on = ((u / p | 0) + (v / p | 0)) % 2;
    const L = (.3 * D[q] + .59 * D[q+1] + .11 * D[q+2]) / 255;
    const k = 1 + (on ? 1 : -1) * (.05 + .1 * (1 - Math.abs(L - .5) * 2)); // loudest in the midtones
    D[q]   = Math.min(255, D[q]   * k * (on ? 1.03 : .98));
    D[q+1] = Math.min(255, D[q+1] * k);
    D[q+2] = Math.min(255, D[q+2] * k * (on ? .96 : 1.04));
  }
  x.putImageData(d, 0, 0);
}
```

```js
// Mosaic: tile colour on top of a darker copy of itself, so the gap never reads as a white or black net.
const T = 22, G = 2, C = Math.ceil(w / T), R = Math.ceil(h / T), s = document.createElement('canvas');
s.width = C; s.height = R; const sx = s.getContext('2d'); sx.drawImage(img, 0, 0, C, R);
const P = sx.getImageData(0, 0, C, R).data;
const cut = (i, j) => (j < 4 && i < 14) || (j < 8 && i < 9) || (j < 12 && i < 5); // stepped corner, in blocks
for (let j = 0; j < R; j++) for (let i = 0; i < C; i++) {
  if (cut(i, j)) continue;
  const n = (i + j * C) * 4, [r, g, b] = [P[n], P[n+1], P[n+2]];
  ctx.fillStyle = `rgb(${r*.62|0} ${g*.62|0} ${b*.62|0})`; ctx.fillRect(i * T, j * T, T, T);
  ctx.fillStyle = `rgb(${r} ${g} ${b})`;                    ctx.fillRect(i * T, j * T, T - G, T - G);
}
```

**In the lab:** CSS overlay vanished. A scaled canvas produced a screen door. Averaging each cell destroyed detail. High amplitude looked like a transparency grid. The version above matched the real frame at 4x zoom after each of those was fixed. The mosaic needed the stepped outline and darker gap.

<!-- v:media.photography/gradient-map-duotone -->
### 16. Gradient-map duotone

*Feeling: graphic and loud, with a designed palette.*

**Use:** Podcasts, culture, editorial and fund sites that need a mixed archive to read as one thing. Also a single loud chapter on a quiet site. **Avoid:** Product photography, faces that must be recognised at small size, or more than one map on a page.

Convert to luminance, then map shadows and highlights to two palette colours through a third midpoint. Use it at large size with flat circles or blocks in the same inks beside it. Keep faces legible by keeping shadow and highlight far apart in lightness. A pure accent mapped from white, used with a matching bitmap strip, gives a hard technical look. Plain black and white is the quiet version of this: use it with a 12px caption for archive material, or to rest the eye before a colour block.

**Seen on** Notion About, Paradigm, Focus State, Heat Bureau. **Suits** light-precision, mono-technical, bold-colour, expressive; other, finance, editorial, agency.

```html
<filter id="map" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%">
  <feColorMatrix type="matrix" values=".3 .59 .11 0 0  .3 .59 .11 0 0  .3 .59 .11 0 0  0 0 0 1 0"/>
  <feComponentTransfer><!-- shadow, mid, light, one value per stop -->
    <feFuncR type="table" tableValues=".07 .36 .98"/>
    <feFuncG type="table" tableValues=".03 .12 .80"/>
    <feFuncB type="table" tableValues=".31 .72 .62"/>
  </feComponentTransfer>
</filter>
```
Read the three stops off your own palette: darkest ink, accent, lightest ground, each divided by 255. The greyscale step comes first, so any source photo lands in the same two inks.

**In the lab:** Rendered with a portrait, a seascape and a night launch. All three landed in one palette immediately, which is the point of the technique. A dark source under the accent map goes almost entirely flat, so check every image.

### Mistakes that cheapen photography

Most of these appeared in my own first attempts, in a side-by-side test, or in the analysts' failure notes.

- **Choosing frames one by one.** In the lab, four good photographs from four sources looked like four websites. Decide the contract first, then cull and crop before you grade.
- **Expecting a grade to fix a shoot.** Mine halved the warm-cool spread, made chroma spread worse, and the night frame stayed the odd one out, because time of day is structural. Grading narrows a set shot under similar light. It cannot create one, so replace the outlier.
- **Text on a bright or busy zone.** My first scrimless block sat on lit water at contrast 2.0 with a luminance spread of 0.145. The same block on dark sky measured 15.6 and 0.005. Measure the zone, then move the type or change the photograph. A gradient bar across the bottom of every image is the generated fix. Only a handful of rows use a scrim at all, and those keep it small and local to one caption.
- **Dot screens built from a CSS overlay.** A 3px pattern with `mix-blend-mode: soft-light` averaged out to nothing. Screens need per-pixel work on a canvas at display resolution.
- **Scaling a screen.** A 640px canvas shown at 450px turned the lattice into a screen door of dark lines. The canvas must match the displayed size in device pixels.
- **Amplitude.** My first local-colour screen swung about 32% and bright areas looked like the transparency checkerboard in an image editor. Cal.com stays around 5 to 15%.
- **Black dots.** A newspaper halftone throws away the colour you paid for and looks like a filter preset.
- **A photograph filling an oval.** It reads as a picture in a circle. Feathering the edge to black reads as a spotlight vignette. The die-cut only works with a hard-edged subject on true black.
- **Prints that cover the headline.** My first placement hid a whole line of type. Overlap the base of the last line by 10 to 20px and no more.
- **Perforated mosaic edges.** Knocking out random edge tiles looked like a postage stamp. Step the outline in blocks of 3 to 5 tiles.
- **Equal widths for mixed ratios.** Heights jump and the rhythm goes. Fix the height and let width follow, or accept unequal heights on purpose as `big.dk` does.
- **Radius, shadow and overlay together on a photograph.** That is a card, and a good picture does not need one.
- **Stock tells: mid-air laughter, a handshake, a diverse group at a laptop, or a white seamless nobody chose.** If a competitor could use the frame unchanged, it is not art-directed.

## Illustration

Illustration has to do something a photograph cannot: show an idea that has no physical form, or give a technical product a hand and a voice. It earns its place when it explains something or carries a character. It fails when it is decoration added because a section felt empty.

The line between great and cheap is the kit. A great set looks like one person drew it in one sitting: one stroke weight, one fill logic, one angle, one set of terminals, and the same small parts reused. Cheap sets look assembled, with a different weight in each card, stock shapes, and a new colour for each idea. Before drawing, write the kit down in one line: `1px at 22% ink, 30 degree isometric, no fills, dashed hidden edges, mono labels`.

Everything in the first two groups below can be drawn in code, and it is often better than a stock image. The third group needs a real hand or a real generator. Do not fake it with SVG curves.

### Measured

| Measure | Value | Source |
|---|---|---|
| Inline SVG elements per page | median 36, middle half 10 to 77 | 516 gold and silver sites |
| By register | gradient-light 64, soft-pastel 58, dark-precision 56, light-precision 54, photo-led 16, type-led 4 | same |
| Stroke weight, by mentions | 1px 14 times, 1.5px 6, 2px 6, 3 to 4px 8 (mascots and stickers) | 84 rows |
| Hairline contrast on dark | 10 to 30% white in the rows, 13 to 34% in the build that matched | rows, checked on Linear, Vite and Polar frames |
| Size in a feature cell | 60 to 100px for a glyph, about 250 to 300px for a figure | rows, checked on frames |
| Gold rows by register | light-precision 8, warm-neutral 5, dark-precision 4 | 20 gold rows |

### Precise: drawn in code

<!-- v:media.illustration/hairline-isometric -->
### 1. Hairline isometric

*Feeling: engineered and quiet, like a page from a technical manual.*

**Use:** Developer tools, infrastructure, finance platforms, and any abstract system on a dark or warm-neutral page. **Avoid:** Consumer brands that need warmth, or when you have real product UI to show and the drawing would only delay it.

Use a 30 degree isometric projection throughout. Draw rounded plates, cubes and fins at 1px, with strokes at 13 to 34% ink: brightest on the lead plate, dimmest on the far ones. Hidden edges are 2 by 3 dashed at about 10%. Fill with the page colour for occlusion. Add one small mark on the top plate, such as a logo or concentric rings, and let at most one element have mass or colour. Size about 270 to 300px in a three-column row, with a small mono label above and a 14px title below. Labels on planes are skewed to match.

**Seen on** Vite, LiveKit, Linear, ElevenLabs Pricing, Expo, 8 sites in all. **Suits** dark-precision, warm-neutral, mono-technical, illustrated; devtool, ai, saas, finance.

```js
// Isometric kit. Occlusion comes from filling with the page colour, painted back to front.
const C = Math.cos(Math.PI / 6), S = .5;
const iso = (x, y, z, o) => [o[0] + (x - y) * C, o[1] + (x + y) * S - z];
const path = p => 'M' + p.map(q => q.map(v => v.toFixed(2)).join(' ')).join('L') + 'Z';
function rrect(w, d, r, n = 8) {                     // sampled rounded rectangle on the ground plane
  const P = [], c = [[w/2-r, d/2-r, 0], [-w/2+r, d/2-r, 90], [-w/2+r, -d/2+r, 180], [w/2-r, -d/2+r, 270]];
  for (const [cx, cy, a] of c) for (let i = 0; i <= n; i++) {
    const t = (a + i / n * 90) * Math.PI / 180; P.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
  }
  return P;
}
const plate = (w, d, r, z, o) => path(rrect(w, d, r).map(([x, y]) => iso(x, y, z, o)));
// Stack: lowest plate first, so each one hides the one beneath
for (let i = 7; i >= 1; i--) add('path', { d: plate(150, 150, 16, -i * 10, [150, 120]), class: 'hair' });
add('path', { d: plate(150, 150, 16, 0, [150, 120]), class: 'hair lead' });
```
```css
.hair { fill: var(--bg); stroke: var(--ink); stroke-opacity: .22; stroke-width: 1; vector-effect: non-scaling-stroke; }
.hair.lead { stroke-opacity: .34; }
.hidden { fill: none; stroke: var(--ink); stroke-opacity: .1; stroke-dasharray: 2 3; }
```

**In the lab:** Very close to the real frames on the first pass, because this variant is geometry. The bug was paint order on the fin figure. The FIG labels at 1.9:1 failed the contrast check, so keep small labels at 3:1 or more even when the strokes stay faint.

<!-- v:media.illustration/one-weight-system-diagram -->
### 2. One-weight system diagram

*Feeling: clear and systematic. Ideas drawn as parts of one machine.*

**Use:** Feature grids that explain mechanisms: routing, permissions, data flow, billing logic. **Avoid:** Three-card feature rows with nothing to explain. A diagram of nothing is just a pattern.

Draw in plan view, not isometric. Set one 96px box, one 1px stroke at about 34% ink, and square terminals. Polar's grid holds ten ideas in five columns: fan-in curves, step charts, a tree, a switch matrix. Filled 6px squares mark live nodes, dashed lines mark optional parts, and a fainter stroke marks secondary parts. Light one cell to about 78% with accent corner ticks. On a light page, Cloudflare uses 1.5px accent outlines with pale tints and small square ports, and Supabase keeps strokes grey with one colour for live points. Connectors meet shapes at ports.

**Seen on** Polar, Cloudflare Workers, Supabase, Developments, Browserbase. **Suits** light-precision, dark-precision, type-led, expressive; devtool, saas, editorial.

```css
.cell { position: relative; height: 246px; padding: 14px 16px; display: flex; flex-direction: column;
        box-shadow: inset 0 0 0 1px var(--line); }
.cell i { font: 11px/1 var(--font-mono); font-style: normal; color: var(--ink-3); }
.cell svg { width: 96px; height: 96px; margin: 18px auto auto; overflow: visible; fill: none; stroke-width: 1; stroke-linecap: square;
            stroke: color-mix(in srgb, var(--ink) 34%, transparent); }
.cell svg .soft { stroke: color-mix(in srgb, var(--ink) 16%, transparent); }   /* secondary parts */
.cell svg .dash { stroke-dasharray: 2 3; }                                     /* optional parts */
.cell svg .on   { stroke: none; fill: color-mix(in srgb, var(--ink) 62%, transparent); }  /* 6px live nodes */
.cell.live svg  { stroke: color-mix(in srgb, var(--ink) 78%, transparent); }
.cell.live::before, .cell.live::after { content: ""; position: absolute; width: 14px; height: 14px; border: solid var(--accent); }
.cell.live::before { left: 0; top: 0; border-width: 1px 0 0 1px; }
.cell.live::after  { right: 0; bottom: 0; border-width: 0 1px 1px 0; }
```
```html
<!-- One 96 box, one stroke, square terminals. A fan-in, and a filled square where the lines meet. -->
<svg viewBox="0 0 96 96" aria-hidden="true">
  <path d="M10 16C40 16 44 48 70 48M10 30C38 30 44 48 70 48M10 48h60M10 66C38 66 44 48 70 48M10 80C40 80 44 48 70 48M70 48h18"/>
  <rect class="on" x="67" y="45" width="6" height="6"/>
</svg>
```

**In the lab:** Ten glyphs matched the Polar frame on the first pass, because the rule does the work. Each glyph took a few lines of path. This is the highest value build in the chapter: any abstract feature can be drawn this way in minutes.

<!-- v:media.illustration/flat-fill-kit -->
### 3. Flat fill kit

*Feeling: confident and printed. A designed system, not a stock pack.*

**Use:** Enterprise AI, marketing tools, nonprofit explainers, and bold-colour pages that need warmth without characters. **Avoid:** Dark technical pages, where it feels like a children's book.

Draw flat accent fills with a 1.5px ink outline at square corners, plus white-filled shapes, small dots in a second colour, and thin arrows. Set them on pale grid paper with a 20px cell at about 6% ink, in cells of about 300 by 190. Two-thirds of the fill should be one colour. Reuse one signature motif, such as a four-point star for the AI node. Let objects overlap, wire them together, and crop one by the cell edge. Tinted tiles with a 24px radius and isometric objects with hard black edges are the friendlier form.

**Seen on** Jasper, Customer.io, Rewiring America, Lacoste, Sweeply, 7 sites in all. **Suits** bold-colour, light-precision, illustrated, gradient-light; saas, ai, nonprofit, health.

```js
// One kit, four primitives. Every card is drawn from these and nothing else.
const line = { stroke: 'var(--ink)', 'stroke-width': 1.5 };
const box  = (x, y, w, h, fill = 'var(--bg)') => add('rect', { x, y, width: w, height: h, fill, ...line });
const disc = (x, y, r, fill = 'var(--bg)')    => add('circle', { cx: x, cy: y, r, fill, ...line });
const dot  = (x, y, r = 5, fill = 'var(--accent-2, var(--ink))') => add('circle', { cx: x, cy: y, r, fill });
const wire = (d, angle, x, y) => {            // connector with an open chevron head
  add('path', { d, fill: 'none', ...line });
  add('path', { d: 'M-6 -3.6L0 0L-6 3.6', fill: 'none', ...line, transform: `translate(${x} ${y}) rotate(${angle})` });
};
```
```css
.paper { height: 190px; border-bottom: 1px solid var(--ink);
  --g: color-mix(in srgb, var(--ink) 6%, transparent);
  background: linear-gradient(var(--g) 1px, transparent 1px) 0 0 / 20px 20px,
              linear-gradient(90deg, var(--g) 1px, transparent 1px) 0 0 / 20px 20px; }
```

**In the lab:** Matched the real frames after two fixes: the grid dropped from 14% to 6%, and objects were wired and cropped instead of floating.

<!-- v:media.illustration/dimensioned-technical-drawing -->
### 4. Technical drawing

*Feeling: precise and proud of the engineering.*

**Use:** Watches, hardware, architecture, property development. As a reveal that resolves into the real object. **Avoid:** Products without real geometry to dimension. Invented measurements look silly to anyone who checks.

Draw the object at about 330px in 1px grey strokes with centre lines, arrowed extension lines and rotated 12px mono dimensions. Cross-fade it to the photograph or render at identical position and scale. For architecture, draw a hand-inked axonometric of about 1380 by 628, leave neighbouring buildings pale and tint only the project in two or three muted colours, and set it straight on the page with no frame. Stripe's about page uses the quiet form: one fine architectural pencil drawing about 340px wide, in perspective, fading to white, in place of a hero photo.

**Seen on** Prägen Hätlen, Stripe About, Martin Development. **Suits** render-3d, type-led, light-precision; brand, architecture, finance.

<!-- v:media.illustration/dither-and-dot -->
### 5. Dither and dot

*Feeling: technical with a sense of humour. A machine's memory of an object.*

**Use:** Developer tools and AI products. Footers, spot art, and maps drawn in dots. **Avoid:** Serious institutional brands. Use it in one or two places, because a whole page tires the eye.

Build the object at one-third size, dither it, and show it at exactly 3x. Give it a coloured one-pixel outline and three or four light, saturated ramps. Set it transparent on the page so it crosses grid rules. Isometric pixel blocks in one green ramp make a skyline on a 2px baseline. Sprayed grain over hard rectangles gives a print feel. For a dot globe, plot 4px dots with density carrying the continents, no outline, and cut it flat at the base at about 800px wide.

**Seen on** Supabase Launch Week, Temporal, GitHub Docs, Browserbase. **Suits** mono-technical, expressive, light-precision; devtool.

```js
// Ordered dither on material ramps. Each shape stores a material id and a 0 to 1 shade, never a final colour.
const B = [[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]];
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const i = x + y * W, m = id[i]; if (!m) continue;              // transparent outside the object
  const edge = [[1,0],[-1,0],[0,1],[0,-1]].some(([u, v]) => !id[x + u + (y + v) * W]);
  if (edge) { put(i, outline); continue; }                       // one-pixel silhouette in the accent
  const r = ramps[m], t = shade[i] * (r.length - 1) + (B[y % 4][x % 4] / 16 - .5) * .9;
  put(i, r[Math.max(0, Math.min(r.length - 1, Math.round(t)))]); // step along this material's ramp
}
// Show at exactly 3x with image-rendering: pixelated. Non-integer scales ruin the pattern.
```

**In the lab:** First pass was unreadable: nearest-colour quantising gave a black band and scattered noise, with no object. Material ramps and a silhouette outline made it read as a monitor immediately.

<!-- v:media.illustration/cover-art-system -->
### 6. Cover art system

*Feeling: published and consistent. An index that looks edited.*

**Use:** Blogs, changelogs, reports, and any list that needs fifty covers with no illustrator. **Avoid:** When a real photograph or a chart from the article would say more.

Design a template, not fifty images, and generate covers from data so the fiftieth matches the first. Stripe's form: a deep gradient ground, logo top-left, one huge figure with a gradient clipped to the type, a tight 19 to 24px caption, radius 8, one wide soft shadow. Cognition's form: grey technical collage with one flat hue per cover, tiny registration marks in the corners, and covers set about 3px apart in a strip. Notion and Tailscale use a drawn spot on a flat pastel or saturated field, which needs real drawing. Resend uses dark title cards with a large serif title, and they read as a set because nothing else varies.

**Seen on** Stripe Blog, Cognition, Resend Blog, USPS Delivers, Notion Blog, 6 sites in all. **Suits** light-precision, type-led, dark-precision, soft-pastel; editorial, devtool, ai, saas.

```css
.cover { --c1: var(--ink); --c2: var(--accent); --a: var(--bg); --b: var(--surface);
  position: relative; aspect-ratio: 1; display: flex; flex-direction: column; padding: 7.6% 7.6% 8%; border-radius: 8px; overflow: hidden;
  color: #fff; background: linear-gradient(170deg, var(--c1), var(--c2));
  box-shadow: 0 2px 4px color-mix(in srgb, var(--c1) 12%, transparent), 0 26px 54px -18px color-mix(in srgb, var(--c1) 42%, transparent); }
.cover b { font: 700 17px/1 var(--font-display); letter-spacing: -.03em; }
.cover strong { margin-top: auto; margin-left: -.04em; font: 500 118px/.98 var(--font-display); letter-spacing: -.052em;
  background: linear-gradient(115deg, var(--a), var(--b)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.cover p { margin-top: 12px; font: 500 19px/1.16 var(--font-display); letter-spacing: -.022em; text-wrap: balance; }
```
```js
// The template owns everything. A post supplies only a number, a line and a palette index.
const cover = ({ n, t, c1, c2, a, b }) => `<article class="cover" style="--c1:${c1};--c2:${c2};--a:${a};--b:${b}">
  <b>${brand}</b><strong>${n}</strong><p>${t}</p></article>`;
```

**In the lab:** The numeral template matched Stripe on the first pass and took thirty lines. My collage did not. It looked like clip art because every shape sat politely inside the frame. Cropping shapes off the edge, adding three scales, a band of hard dither and a block of tiny type put it beside the real strip. Density and cropping are the craft here, not the shapes.

<!-- v:media.illustration/tonal-contour-field -->
### 7. Tonal contour field

*Feeling: quiet brand texture. A plain square with a little weather in it.*

**Use:** Panels behind a product window, feature tiles, and any empty square on a warm-neutral or pastel page. **Avoid:** Behind running text. It also suggests a map, so avoid it where a real map is content.

Fill the panel with one flat tint and draw five to seven lines one step lighter, 4 to 6px wide, running off the edges. Claude does this in lavender, sage, coral and stone, and the texture makes a placeholder square feel like a surface. Use real isolines of smooth noise, so lines never cross. Rotate and warp the noise domain to hide its grid, and add a directional ramp so that every line has to cross the panel.

**Seen on** Claude. **Suits** warm-neutral; ai.

```js
// Real isolines never cross. The ramp makes every line run edge to edge, so no closed loops appear.
function field(canvas, noise, tint, levels = [-.1, .14, .38, .62, .86, 1.1], tilt = .9) {
  const { width: w, height: h } = canvas.getBoundingClientRect(), d = 2, st = 3, x = canvas.getContext('2d');
  canvas.width = w * d; canvas.height = h * d; x.scale(d, d);
  const C = Math.cos(.61), S = Math.sin(.61);             // rotate off the noise lattice, or lines turn at right angles
  const N = (u, v) => { const a = (u*C - v*S) / 230 + 40, b = (u*S + v*C) / 230 + 40;
    const p = noise(a*2.3, b*2.3) - .5, q = noise(a*2.3 + 7, b*2.3 + 3) - .5;   // warp
    return (u*Math.cos(tilt) + v*Math.sin(tilt)) / w + (noise(a + p*.9, b + q*.9) - .5) * .95; };
  x.strokeStyle = tint; x.lineWidth = 5; x.lineCap = 'round';
  for (const L of levels) { x.beginPath();                 // marching squares
    for (let u = -st; u < w + st; u += st) for (let v = -st; v < h + st; v += st) {
      const a = N(u,v)-L, b = N(u+st,v)-L, c = N(u+st,v+st)-L, e = N(u,v+st)-L, P = [];
      const cut = (p,q,x0,y0,x1,y1) => { if ((p<0) != (q<0)) { const t = p/(p-q); P.push([x0+(x1-x0)*t, y0+(y1-y0)*t]); } };
      cut(a,b,u,v,u+st,v); cut(b,c,u+st,v,u+st,v+st); cut(e,c,u,v+st,u+st,v+st); cut(a,e,u,v,u,v+st);
      if (P.length > 1) { x.moveTo(...P[0]); x.lineTo(...P[1]); }
    } x.stroke(); }
}
// tint: color-mix(in srgb, var(--panel) 76%, #fff), resolved to rgb first. Canvas may not parse color-mix.
```

**In the lab:** Three rounds. Raw value noise turned at boxy right angles, so I rotated and warped the domain. That gave organic lines with small closed loops, which read as a hiking map. Adding a ramp forced every line edge to edge and the loops vanished. The lines measure about 5px at 1x on the real frame.

### Hand-felt: code gets you most of the way

<!-- v:media.illustration/hand-inked-line -->
### 8. Hand-inked line

*Feeling: authored and warm. A person was here.*

**Use:** Pricing tiers, docs, emblems, newsletters. Warm-neutral AI brands, health, editorial and utility pages that risk feeling cold. **Avoid:** As large hero art, unless you have a real illustrator. Small sizes forgive a lot.

Keep the drawing strict and the tremor small. Thin line of 1.25 to 2px in near-black, sizes of 60 to 100px, with a pale fill patch or filled nodes as the only tone. Encode meaning where you can: branches multiply from tier to tier, so the glyph states the plan size. Use one flat colour at most. Thick-thin brush work suits editorial spots, and uneven 3px brush pen suits doodles in gutters. Keep ink out from behind text.

**Seen on** Notion About, Claude Pricing, Monocle, Tally, Anthropic Docs, 9 sites in all. **Suits** warm-neutral, illustrated, light-precision, type-led; ai, health, other, editorial.

```html
<!-- Tremor, not wobble. Apply to a strict drawing at 1.25px. -->
<filter id="ink" x="-15%" y="-15%" width="130%" height="130%">
  <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="7" result="slow"/>
  <feDisplacementMap in="SourceGraphic" in2="slow" scale="1.5" result="a"/>
  <feTurbulence type="fractalNoise" baseFrequency=".5" numOctaves="1" seed="3" result="fast"/>
  <feDisplacementMap in="a" in2="fast" scale=".7"/>
</filter>
<g fill="none" stroke="var(--ink)" stroke-width="1.25" stroke-linecap="round" filter="url(#ink)">…</g>
```

**In the lab:** Took four rounds, and the side-by-side showed why. Filter on geometry looked mechanical. Heavier wobble looked childish. Only a thin 1.25px stroke on a strict grammar with filled nodes reached the real frame.

<!-- v:media.illustration/single-thread-line -->
### 9. Single thread line

*Feeling: playful and continuous. The page is one gesture.*

**Use:** Agencies and services, or a literal metaphor for tangled work. Tall pages that need something connecting sections. **Avoid:** Short pages, or more than one thread. It also needs care on phones, where a 1,300px drawing has nowhere to go.

Use one constant stroke of 1 to 1.5px, or a heavier 6px hand line, with no fills. The line runs down the page, knots into spot drawings at key moments, and crosses section joins. Flip its colour on dark bands. A single wide drawing of about 1280px with varying line weight can take white callout tiles at scattered positions. Threading a hairline through type works when text indents to clear it. Draw it with `stroke-dashoffset` tied to scroll only if it stays quiet.

**Seen on** Elyx, Trasti, White Label IQ, Yuriy Vitrenko's Library. **Suits** warm-neutral, light-precision, illustrated, type-led; saas, finance, agency, culture.

### Needs a real hand or a strong image model

<!-- v:media.illustration/stipple-engraving -->
### 10. Stipple and engraving

*Feeling: old, patient, valuable. Craft you can trust.*

**Use:** Food and drink, health, heritage, publishing, and any brand that wants a sense of age or provenance. **Avoid:** As a fake. Filters do not produce engraving. Use a real source, public-domain plates, or an image model given a strict style reference.

Use one or two inks only. Stippled botanical plates at about 600px dissolve into the ground through grain, unframed, one per product. Black ink heads at about 100px stay monochrome while colour lives in nearby labels. Linocut portraits sit in 110px white roundels with a 1px border. Reuse the same plates as avatars, crests or low-contrast watermarks. Keep grain and palette identical across the series so it reads as a set of plates.

**Seen on** Notion Calendar, InkTree, Brand Identity School, Heart & Soil, Cascara Cabinet, 7 sites in all. **Suits** illustrated, light-precision, warm-neutral, photo-led; food-drink, saas, ai, education.

<!-- v:media.illustration/textured-commissioned-art -->
### 11. Textured commissioned art

*Feeling: rich and human. Somebody paid an artist.*

**Use:** Blogs and docs of developer brands, health, and pages that want personality without a mascot. **Avoid:** Without real art. Generated art with no style control looks like every other generated page.

Hold the medium constant and let subject and colour vary. Ink line with grain and saturated flats in frames of about 416 by 256. Gouache figures with no outlines and no background box at about 150 by 100. Watercolour bleed that merges into white paper. Offset fills about 2px out of register with the ink line, plus grain shading. Let characters lean into layout, peeking round code blocks. Two or three inks with grain on top is the cheapest strong version, and one symbol per section can replace a photograph.

**Seen on** Fly.io Docs, One Medical, Continue, Office Commun, Fly.io Blog, 8 sites in all. **Suits** illustrated, photo-led, light-precision; editorial, devtool, health, ai.

<!-- v:media.illustration/mascot-system -->
### 12. Mascot system

*Feeling: friendly and memorable. The brand has a face.*

**Use:** Developer tools with humour, education, consumer apps. Products that can sustain a voice over years. **Avoid:** Serious finance, health or legal brands, and any first release without someone who can draw it well.

A mascot works through reuse, so plan at least three scales: logo, spot and closing scene. Simple construction wins: one white blob and two ovals, or a geometric body with googly eyes. Use a thick 3px outline with flat fill, and change the pose rather than the detail. Set it to overlap panel edges. Use the brand's accent as its main colour, so the mascot and the button are related. Between sections, a 44px face with a short dry line can act as narrator. Sizes run 230 to 300px for spots and 44 to 80px inline.

**Seen on** Brilliant, Kiro, Canary, Lindy, Bear, 12 sites in all. **Suits** illustrated, bold-colour, warm-neutral, light-precision; devtool, saas, education, ai.

<!-- v:media.illustration/flat-geometric-world -->
### 13. Flat geometric world

*Feeling: warm and simple, a small storybook world.*

**Use:** Education, health, nonprofits and consumer apps, where one friendly world can run from hero to footer. **Avoid:** Developer tools and finance, where it reads as a children's book. Never use stock corporate figures.

Build from flat shapes with no outline and no gradient, about six hues, and let the same objects recur. Khan Academy stacks blocks, a pencil and a pennant with a hexagon mascot in a six-hue set. Headspace ends the page on a giant semicircle sun with a closed-eye smile, rising from flat clouds whose colour merges with the footer, so the page ends as a scene. Signal sets flat objects on pastel panels at radius 16. Grain or a second flat shade adds depth without leaving the style.

**Seen on** Khan Academy, Headspace, Signal, Apétiti, Ponpon Mania. **Suits** illustrated, soft-pastel; education, health, agency, nonprofit.

<!-- v:media.illustration/die-cut-sticker -->
### 14. Die-cut sticker

*Feeling: loud, cheerful, stuck on by hand.*

**Use:** Drinks, snacks, youth brands, merch. **Avoid:** Professional registers. This is a bold-colour or expressive device only.

Draw flat vector objects with an even 5 to 8px white or neon keyline around the shape, so they separate from any ground with no shadow. Rotate slightly and tuck them at section edges, where the next section can clip them. Halftone dots inside a burst add a comic print feel.

**Seen on** Olipop, Sparklefilth. **Suits** bold-colour, expressive; food-drink, ecommerce.

<!-- v:media.illustration/paper-craft-scene -->
### 15. Paper craft scene

*Feeling: physical and charming. Slow work you can see.*

**Use:** Food and drink or heritage brands with one big idea per screen. **Avoid:** Interfaces that need to move fast, or anything where a generated imitation will look plastic.

Photograph or render cut-paper scenes with real soft shadows on a flat saturated field. One subject per screen, centred, about 50% of the height. Keep the paper edges slightly imperfect, and light from one direction across the whole series.

**Seen on** Delassus. **Suits** illustrated; food-drink.

### Mistakes that cheapen illustration

Most of these appeared in my own first attempts, in a side-by-side test, or in the analysts' failure notes.

- **A new kit per card.** Check two cards side by side for stroke, corner, terminal and fill. If any differ, redraw.
- **Treating "no fills" literally.** A true no-fill isometric shows every back edge and turns to wire soup. Fill with the page colour and paint from back to front. My third figure broke because I painted front to back.
- **A grid louder than the drawing.** My first grid paper used 14% ink and the paper won. At 6% it sits behind the drawing, which is where the real one sits.
- **Shapes that sit politely inside their frame.** My first technical collage looked like clip art for exactly this reason. Crop large shapes off the edge, and mix three scales.
- **Value noise used raw.** It turns at right angles along its own grid. Rotate and warp the domain, or use gradient noise.
- **Objects floating apart in a cell.** My first flat-kit cards read as clip art. Wiring them with connectors and letting one object run off the cell edge made them read as a diagram.
- **Ink by filter alone.** A displacement filter over perfect circles reads as a wobbly vector. Then I overcorrected: a 1.7px stroke with a heavy filter read as a child's marker. Real pen work here is thin at about 1.25px, with a strict structure and a tremor of 1.5px or less.
- **Nearest-colour dithering.** It gave a black band and mud. Give each material its own ramp and step along it, and add a one-pixel silhouette.
- **Non-integer pixel scaling.** Show bitmaps at exactly 2x, 3x or 4x.
- **Stock blob people, the purple-and-coral corporate figure with tiny heads and huge limbs.** Nothing marks a page as bought faster.
- **Drawing a character with SVG primitives.** A mascot needs a real drawing. A weak mascot is worse than none, so use a strict one-shape character or skip it.
- **A mascot centred in a slot.** Good mascots overlap a panel edge, peek round a block, or sit on the interface.
- **Decorative sparkles and floating dots with no job.** Each mark in the kit should be a component of the idea.

## Icon sets

An icon has one honest job: speed up scanning. It lets a reader find a row again, or tell one thing from the next, without reading the word. It is not there to fill a card. If the label is clear and the list is short, the strongest move is often no icon at all. Many strong text sections have none.

The difference between great and cheap is not drawing skill. It is sameness. A great set looks like one hand drew it on one grid in one sitting, so the eye stops seeing icons and sees a system. A cheap set mixes two libraries, a 2px stroke beside a 1.5px one, round caps beside square ones, and one filled glyph among outlines. Each icon is fine alone. Together they buzz. The other cheap move is the tinted circle: every feature gets a pale disc with a tiny glyph inside, three across, which is the shape a component library ships.

Choose where the personality lives. Most pages should take a plain one-weight set and leave it alone, because the icons sit beside type and must not compete with it. Spend a distinctive treatment only when icons are a section's main image, and then apply it to every icon in that section.

### The nine locks

An icon set is consistent when all nine of these match. Check two neighbours side by side. If any differ, redraw or replace.

| Lock | Rule |
|---|---|
| Grid | One artboard, usually 16, 20 or 24, with 1 to 2 units of clear margin |
| Keylines | Circle, square, portrait and landscape shapes of equal visual weight. The circle is drawn larger than the square, because a circle of the same width looks smaller |
| Stroke | One weight on screen. Scale the stroke down when the icon scales up, so 16px and 32px both read as 1.5px |
| Terminals | All round or all square, caps and joins together |
| Corners | One outer radius. Inner radius is outer minus stroke, or the corners look pinched |
| Fill logic | All outline, or all solid, or all duotone. Fill may flip for a selected state, and only for that |
| Detail | About the same number of parts. A globe with eight meridians beside a plain square looks like two families |
| Angle | Diagonals at 45 degrees, or one chosen angle. Stray angles shimmer at small sizes |
| Colour | `currentColor` for interface icons. Never a separate colour per icon unless colour is an index |

Do not mix libraries. Two good sets next to each other look worse than one mediocre set. If a library lacks a glyph, draw it on that library's grid with that library's stroke, or change the word.

### Measured

| Measure | Value | Source |
|---|---|---|
| Size beside 14px text | 14 to 16px, gap 8 to 10px, row pitch 29 to 32px | Vercel, Attio, Raycast, PostHog frames |
| Icon to text ratio | about 1.15 times the font size in lists, 1.4 to 2.8 in feature heads | same |
| Feature spot icons | 40px with no tile on Stripe, 56px hexagon on Svix, 72 to 90px as a section image | frames |
| Tiles | 80px at radius about 20, about 140px for spot tiles | React Email, Rewiring America |
| Line weight that matched real frames | 1.5px on screen at 16px and at 32px | lab, compared with Vercel |
| Chip icon in a 90 by 80 tile | about 47px of ink, 1.75px stroke, 10px bar | Notion Calendar, measured at 1:1 |

### Quiet sets that serve the type

<!-- v:media.icon-set/one-weight-line-set -->
### 1. One-weight line set

*Feeling: quiet and exact. It scans, then disappears.*

**Use:** Interface lists, pricing rows, navigation, and anywhere icons sit beside small text. The right default for nearly every site. **Avoid:** As a section's main image. At 48px and up, plain line icons look empty, so choose a treatment from the next group.

Take one good open library or draw on its grid. Lucide, Phosphor, Tabler, Radix and Heroicons are all sound, and which one matters less than using only one. Set near-black at 16px, 10px before a 14px label, 32px row pitch, stroke 1.5 with round caps. Give each row its own glyph, so the list reads as specific capabilities and not as twelve ticks. Match stroke to type: thin 1.25 beside light type, 2 beside heavy type.

**Seen on** Vercel Pricing. **Suits** light-precision; devtool.

```html
<!-- One master grid. Keyline shapes on 16: circle r 6.25, square 12 by 12 at r 2, portrait 10 by 13, landscape 13 by 10. -->
<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.25"/><path d="M8 4.25V8l2.5 1.5"/></svg>
<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2"/></svg>
```
```css
.i { width: 1.15em; height: 1.15em; flex: none; fill: none; stroke: currentColor;
     stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.feature { display: flex; align-items: center; gap: 10px; height: 32px; font-size: 14px; }
.i.lg { width: 32px; height: 32px; stroke-width: .75; }   /* twice the size, half the stroke: still 1.5 on screen */
```

**In the lab:** Rendered 12 icons on one 16 grid in a three-plan price frame and checked it against the Vercel frame. At normal size it sits in the same family, and the keylines did most of the work. At 32px the same paths needed half the stroke.

<!-- v:media.icon-set/check-and-cross-system -->
### 2. Check and cross system

*Feeling: calm and fair. Yes is clear and no recedes.*

**Use:** Comparison tables and plan lists, where hundreds of marks have to scan without shouting. **Avoid:** Lists with no absences. A single tick column does not need a system.

Make yes and no unequal on purpose. Yes is a 14px solid disc with a white tick. No is an 11px thin cross in `--ink-3`, so absences fall back. An info mark is a 14px pale dot beside the label, and it is the quietest thing in the row. In cards, ticks can sit in 18px soft tiles. On dark, use a 16px circle tick in white and a muted plus-circle for an "everything in the plan below" row, and let one scalloped 34px verified badge mark paid plans.

**Seen on** Raycast Pricing, Attio Pricing. **Suits** dark-precision, light-precision; saas.

```html
<svg class="yes" viewBox="0 0 14 14" aria-label="Included"><circle cx="7" cy="7" r="7"/><path d="M4 7.2 6.1 9.2 10 5"/></svg>
<svg class="no"  viewBox="0 0 11 11" aria-label="Not included"><path d="M2 2l7 7M9 2 2 9"/></svg>
```
```css
.yes { width: 14px; height: 14px; }
.yes circle { fill: var(--ink); }
.yes path { fill: none; stroke: var(--bg); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.no { width: 11px; height: 11px; fill: none; stroke: var(--ink-3); stroke-width: 1; }
```

**In the lab:** Close to Attio on the first pass, because the recipe is all proportion. In an A/B, a cross the same size as the tick turned the table into a wall of identical dots.

<!-- v:media.icon-set/provenance-glyphs -->
### 3. Provenance glyphs

*Feeling: informative. The icon tells you where a thing comes from.*

**Use:** Lists that mix sources: model providers, payment methods, integrations, or twenty products in a suite. **Avoid:** When you do not have the real marks. Never invent logos, and only show third-party marks you may use.

Replace uniform bullets with a 14px source mark, and fall back to a plain tick for generic rows. For payment methods, use marks about 24 by 16 with a 2px radius and 8px gaps, wrapping under the row. Full-colour marks are then the only colour in a neutral row. For a suite, give each product a 16px outlined glyph in its own hue in a three-column list at about 29px pitch, so colour works as an index key.

**Seen on** Cursor Pricing, Stripe Pricing, PostHog Docs. **Suits** warm-neutral, light-precision, illustrated; ai, finance, devtool.

### Sets that act as the section image

<!-- v:media.icon-set/duotone-solid-glyphs -->
### 4. Duotone solid glyphs

*Feeling: polished and engineered. A family drawn for this product.*

**Use:** Feature grids on fintech and platform pages, at about 40px, where icons head short text columns. **Avoid:** Small sizes under 24px, where the overlap turns to mud. Do not fake it by recolouring a line icon.

Build each icon from two or three overlapping solid shapes in one colour family, with no strokes. A light tint, the accent, and a deep shade. Let shapes overlap, so the overlap itself draws the form. Set at 40px with no tile, aligned to the column's left edge, 12px above a 14px bold title. Draw the family from the hero's colours, so the page holds one ramp.

**Seen on** Stripe Atlas, Stripe Connect, Stripe Payments. **Suits** gradient-light, light-precision; finance, saas.

```html
<!-- Overlapping tones from one ramp, no stroke. Three tones is the ceiling. -->
<svg class="duo" viewBox="0 0 40 40" aria-hidden="true">
  <rect x="4" y="16" width="9" height="20" rx="1.5" fill="var(--a)"/>
  <rect x="16" y="10" width="9" height="26" rx="1.5" fill="var(--b)"/>
  <rect x="28" y="4" width="9" height="32" rx="1.5" fill="var(--c)"/>
</svg>
```
```css
.duo { --a: color-mix(in srgb, var(--accent) 45%, #fff); --b: var(--accent);
       --c: color-mix(in srgb, var(--accent) 45%, #000); width: 40px; height: 40px; }
```

**In the lab:** Eight glyphs on one ramp read as the Stripe family at a glance. In an A/B, a 1.5px outline turned them to clip art, and a separate hue per icon broke the family.

<!-- v:media.icon-set/knockout-badge-tiles -->
### 5. Knockout badge tiles

*Feeling: stamped hardware. Each feature gets a maker's mark.*

**Use:** Developer tools and infrastructure, where a set of 6 to 12 features needs a strong repeating shape. **Avoid:** Friendly consumer pages, or when the container shape has no link to the brand.

Choose one solid container and one rule. A 56px near-black hexagon with white geometric glyphs knocked out of it: brackets, dots, bars, and no line icons. Or an 80px squircle at radius about 20, dark fill, 1px light border at 10%, a coloured brand glyph centred, 16px label below at 158px pitch. The container shape should echo the logo or product, because that is what makes it more than a tinted circle.

**Seen on** Svix, React Email. **Suits** light-precision, dark-precision; devtool.

```js
// Flat-sided hexagon with softened corners. The glyph is knocked out, so it survives on any ground.
const hex = (s = 56, r = 5) => { const R = s / 2, p = [...Array(6)].map((_, i) => {
    const a = Math.PI / 3 * i - Math.PI / 2; return [R + R * Math.cos(a), R + R * Math.sin(a)]; });
  return `<path d="M${p.map(q => q.map(n => n.toFixed(1)).join(' ')).join('L')}Z" fill="var(--ink)"
    stroke="var(--ink)" stroke-width="${r}" stroke-linejoin="round" transform="translate(${s * .05} ${s * .05}) scale(.9)"/>`; };
// Glyphs inside are white shapes on a 24 box: bars, dots, brackets. No line icons, or the set stops reading as hardware.
```

**In the lab:** Matched Svix closely. I expected corner softness to matter and tested it: sharp and softened hexagons looked nearly the same at 56px, so match your interface radius and move on. What matters is that every glyph is built from the same bars and dots.

<!-- v:media.icon-set/product-object-as-icon -->
### 6. Product object as icon

*Feeling: native. The icons are made of the product.*

**Use:** Any product with a recognisable small component: a calendar chip, a message bubble, a tag, a status pill. **Avoid:** Products without a distinctive component. Forcing this creates a generic sticker.

Take a component from your own interface and use it as the container. Notion Calendar copies its event chip: 90 by 80, radius about 6, a pale tint of one hue, a 10px saturated left bar, and a line icon in that same hue whose ink spans about 47px, 60% of the tile height. Use about six colours. Scatter them in the page margins at staggered heights, and never let one touch text. Because the chip is real interface, decoration and product say the same thing.

**Seen on** Notion Calendar. **Suits** light-precision; saas.

```css
.chip { --c: var(--accent); position: relative; width: 90px; height: 80px; padding-left: 10px; border-radius: 6px; overflow: hidden;
        display: grid; place-items: center; background: color-mix(in srgb, var(--c) 12%, var(--bg)); }
.chip::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 10px; background: var(--c); }
.chip svg { width: 50px; height: 50px; fill: none; stroke: var(--c); stroke-width: 1.75; stroke-linecap: round; stroke-linejoin: round; }
.chip svg * { vector-effect: non-scaling-stroke; }   /* crop the viewBox to the glyph, so the ink spans the box */
```

**In the lab:** My first chips used a 36px icon and looked empty. Measured at 1:1 on the frame, the real icon is about 47px, 60% of the tile height. A 48px box still looked weak, because padding inside the viewBox left only 34px of ink. Measure the ink, not the box. In an A/B, chips spaced evenly round the headline read as a dial. Staggered unevenly in the margins they read as scattered stickers, which is the look.

<!-- v:media.icon-set/pattern-drawn-marks -->
### 7. Pattern-drawn marks

*Feeling: unusually considered. Even compliance logos belong to the page.*

**Use:** Trust and compliance rows, partner marks, or any dull set that would otherwise break the page's look. **Avoid:** Marks that must stay exactly as issued, such as a certification with strict usage rules. Check before altering one.

Redraw the marks in the page's own graphic device. AuthKit renders its compliance marks as horizontal scanlines at about 35% white, echoing the stripes of its hero, each about 72px in a four-cell hairline row on near-black with 14px grey centred labels. Sample a bold silhouette, then draw it as rows of 1px lines on a 3px pitch. The set is held together by the pattern, so the subjects can be anything.

**Seen on** AuthKit. **Suits** light-precision; devtool.

**In the lab:** Rendered with canvas. The shield and ring worked, and the key fell apart. Silhouette strength is everything, and real frames keep the subject simpler than you expect.

### Character sets

<!-- v:media.icon-set/pixel-grid-icons -->
### 8. Pixel grid icons

*Feeling: playful and technical. A wink inside serious documentation.*

**Use:** Developer docs and neutral reference pages that need personality without a redesign. **Avoid:** Mixing with smooth icons in the same context.

Draw at 16 by 16 and display at exactly 3x, about 48px, with `image-rendering: pixelated` or `shape-rendering: crispEdges`. Use a dark one-pixel outline, two or three flat fills per icon, and stepped edges with no anti-aliasing. Keep it the only illustrative colour on the page.

**Seen on** Shopify Polaris. **Suits** light-precision; devtool.

<!-- v:media.icon-set/clay-render-icons -->
### 9. Clay render icons

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

**Seen on** Airbnb. **Suits** photo-led; hospitality.

<!-- v:media.icon-set/labelled-desktop-icons -->
### 10. Labelled desktop icons

*Feeling: funny and familiar. The website is a computer.*

**Use:** A brand with real humour and a site built as an operating system or desktop. **Avoid:** Anything else. Outside that world it is a costume.

Set about 44px pale embossed icons with white 14px labels and a dark text shadow, at 84px vertical pitch down both screen edges, over a wallpaper. Break the set once on purpose, for example with one small video thumbnail, because a real desktop is never tidy.

**Seen on** PostHog Handbook. **Suits** illustrated; devtool.

### Mistakes that cheapen icon sets

Most of these appeared in my own first attempts, in a side-by-side test, or in the analysts' failure notes.

- **Tinted circles behind every glyph.** It adds a shape and no information, and it is the signature of a default feature grid. Drop the circle, or make the container mean something, as the chip and the hexagon do.
- **Mixing libraries.** Test the seam, not the icons. In a list of eight at 16px, stroke differences of 1 to 2px were subtle, but one solid glyph read as a bullet dot and one heavy glyph jumped forward. Fill logic breaks a set first, then weight, then terminals.
- **Scaling without compensating.** A 16-grid icon at 32px with the same stroke value renders at 3px. Halve the stroke in viewBox units, or use `vector-effect: non-scaling-stroke`, and the large row stays in the same family.
- **A duotone with a stroke.** I ran the same four icons with and without a 1.5px outline. With it they turned into cartoon clip art at once. Stripe uses overlap and tone only.
- **A new hue per icon.** In the same test, giving each icon its own colour ramp broke the family more than anything else did. One ramp across all of them is what makes them a set.
- **A cross the same size as the tick.** I tested a solid disc cross against the tick in a six-row table, and the table became a wall of identical black dots. Yes and no shared a silhouette, so I had to read every mark. An 11px thin cross in `--ink-3` beside a 14px solid tick makes the pattern readable before you read anything.
- **Generic tick lists with no information.** Vercel gives every row its own glyph and Cursor shows provenance. If all twelve rows have the same icon, the icon says nothing, so remove it or make it specific.
- **Pattern marks that lose the subject.** My scanline key was the weakest of four, because its thin shaft has too few lines to hold. Pattern-drawn marks only work on bold, simple silhouettes.
- **Emoji as icons.** They render differently on every platform and bring their own colour and weight.
- **Decorative sparkles for AI, arrows on every link, or a rocket for launch.** Those are the first glyphs anyone reaches for, which is why they carry no meaning.
- **Icons that are unreadable without their label, used without their label.** Any icon-only control needs an `aria-label` and a visible tooltip.

## Logo marks

A logo on a website has a small practical job and a larger one. The practical job is to be recognisable in the corner of a nav at 16 to 44px. The larger job is to supply the page's shapes: the best marks turn up again as a loader, a tile, a pattern, a section divider or a closing image, so the identity feels drawn from one idea.

Cheap marks are a font in a colour, or a generic icon next to a font: a hexagon, a spark, a swoosh, an abstract letter in a gradient square. They carry no idea and have no second use. Great marks have one rule you could say aloud: a grid of nine, a dot that returns on the packaging, a stroke cut through a heavy word.

If the business has a logo, use it. Do not redraw it. If you are inventing one for a demo, keep it plain and geometric, make it from one rule, and test it at 16px before anything else. If the brief gives you a type system, a well-set wordmark with one small device beats a clumsy symbol every time.

### Measured

| Measure | Value | Source |
|---|---|---|
| Nav mark height | 20 to 44px | 38 rows, frames |
| Small size test | must hold at 16px on a phone header | Block frames, lab |
| Grid marks | gap about a quarter of the square, corner about an eighth | Block, lab |
| Single-weight line marks | 1.5 to 2px stroke | TR Studio and BCR Law rows |
| App-icon tiles | 100 to 255px, radius about 17 to 24% of the side | React Email, Obsidian, Zed frames |
| Reuse | most gold rows show the mark at three or more scales | 15 gold rows |

### Drawn from a rule, safe to build

<!-- v:media.logo-mark/constructed-geometric-mark -->
### 1. Constructed geometric mark

*Feeling: inevitable. It looks like it could not have been drawn any other way.*

**Use:** Finance, platforms, institutions, awards. Any brand that benefits from a simple, stated rule. **Avoid:** When the rule is arbitrary. The geometry should echo the name or the idea.

State the mark in numbers. Block lets the mark be the hero: 44px, centred above one line, with almost nothing else on the screen. A 3 by 3 of solid squares at 13px with about 3px gaps and about 2px corners gives a 44px mark. A black 94px square quartered by a thin white cross holds four letters made only of straight strokes, and it inverts in the footer at 80px. An outlined box of 80 by 88 with a 2px stroke and one sheared corner holds three rows of tracked capitals, and the same skeleton swaps letters and colour for each company in a group. Showing construction drawings as content can turn the derivation into a section.

**Seen on** Block, BCR Law LLP, ADCC Awards, Martin Development. **Suits** type-led, light-precision, bold-colour; finance, local-business, culture, architecture.

```js
// Constructed mark. Unit 13, gap 3.25 (a quarter), corner 1.6 (an eighth). Draw a second master for 16px.
function grid(size) {
  const px = size <= 20;                                 // pixel-fitted: 4px squares on a 5px pitch
  const [u, g, r, box, off] = px ? [4, 1, .6, 16, .5] : [13, 3.25, 1.6, 45.5, 0];
  let o = '';
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
    o += `<rect x="${off + i * (u + g)}" y="${off + j * (u + g)}" width="${u}" height="${u}" rx="${r}"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${box} ${box}" fill="currentColor" aria-hidden="true">${o}</svg>`;
}
```

**In the lab:** The grid held from 200px to 32px and failed at 16 until it had its own master. The sheared box was the best-looking mark in the test: below 40px it drops to one letter.

<!-- v:media.logo-mark/wordmark-with-device -->
### 2. Wordmark with one device

*Feeling: modest and smart. Type first, one small idea.*

**Use:** The safest strong choice when inventing a brand. Technical and scientific brands, and any site with a good type system. **Avoid:** When the device is a generic flourish, such as a dot on any word.

Set the name in the dealt type at nav size, then add one device with a reason. A solid dot of .42em that repeats large on every package. Short bars of .075em on selected letters. A version number at 13px in a 1px chip with a 4px radius, on an open-source project. Letters redrawn as 1px construction lines at footer scale. Tight tracking of -.02 to -.03em on the word. The device must survive at nav size and pay off at large size.

**Seen on** ECI, Seed, Telkom-OT, three.js. **Suits** mono-technical, photo-led; ai, health, other, devtool.

**In the lab:** Held at every size down to 14px type, with no special master. It is the most forgiving variant here.

<!-- v:media.logo-mark/pixel-cut-wordmark -->
### 3. Pixel-cut wordmark

*Feeling: digital, technical, slightly retro.*

**Use:** Developer tools and culture brands. Also strong as a system with a matching panel notch or dot-matrix hero. **Avoid:** Traditional or luxury brands. At very small widths, use a one-letter tile instead.

Build letters from square modules on a 5 or 7 high grid, with no anti-aliasing, curves or diagonals. Width must be a whole number of modules. At about 15px per module, MUDA-style marks reach 376 by 75. Hollow one counter for character. Use it in the nav at around 154 by 26, large as blog art, stacked in the footer, and reduced to one letter in a 64px radius-12 tile for product icons. A dissolve variant lets one stroke break into stepped pixels.

**Seen on** Astral, LiveKit, Muda 26. **Suits** photo-led, bold-colour, dark-precision; devtool, culture.

```js
// Pixel wordmark: 5 modules tall. Width is always a whole number of modules, so a four-letter word
// (4 x 5 + 3 gaps = 23 modules) ships at 46, 69, 115 or 322px, and never at 44.
const pix = (w, word) => { let o = '', x = 0;
  for (const c of word) { glyphs[c].forEach((row, j) => [...row].forEach((v, i) => {
      if (+v) o += `<rect x="${x + i}" y="${j}" width="1" height="1"/>`; })); x += 6; }
  return `<svg width="${w}" height="${w * 5 / (x - 1)}" viewBox="0 0 ${x - 1} 5" fill="currentColor" shape-rendering="crispEdges">${o}</svg>`; };
```

**In the lab:** Strong at whole-module widths, poor at any other. My first R was also weak, because module letters still need to be drawn. Do not expect a generic grid to produce good letterforms on its own.

<!-- v:media.logo-mark/cut-letterform -->
### 4. Cut letterform

*Feeling: industrial or architectural, with a quiet edge.*

**Use:** Construction, museums, property, events. Brands where one expressive element sits inside neutral type. **Avoid:** Light typefaces. A cut needs heavy strokes to read.

Take a heavy display weight and make one clean cut. A thin horizontal slice through the upper letter band, at about 34% of cap height. Stencil gaps in every bowl of a heavy lowercase serif, shown at about 380px in the intro and about 160px on phone, with a single letter on a rail. A hairline diagonal slash taller than the letters, splitting two colours. Everything else on the page stays neutral.

**Seen on** Bakstad Construction, Concrete, Arkansas Museum of Fine Arts. **Suits** photo-led, warm-neutral; architecture, local-business, culture.

**In the lab:** Worked at all sizes once the cut was at least 1px. The slice left a stray dash where it crossed the apex of an A, so choose the height by looking.

<!-- v:media.logo-mark/seal-monogram -->
### 5. Seal monogram

*Feeling: maker's stamp. Old-world and personal.*

**Use:** Architects, interiors, law, ateliers, food and drink. **Avoid:** Tech products. It also needs enough room: a seal reads as a seal at 65px and above.

Use one stroke weight of 1 to 1.5px throughout. Oval of 65 by 85 fixed at bottom-left, and 105 by 135 centred in the footer. Set tracked caps on a path round the oval and two letters at the centre. It is the one decorative object on the page, so give it clear space. A rotated monoline monogram of about 100 by 200 works for a portfolio. TR Studio's own mark interlaces three letters, which takes real drawing. Text on a path reaches the same feeling in code.

**Seen on** TR Studio, Clarisse Michard, Luis Henrique Bizarro. **Suits** warm-neutral, type-led, expressive, photo-led; portfolio, architecture, fashion.

```html
<!-- Text on a path is geometry you can trust. Keep the stroke at about 1.25px on screen. -->
<svg viewBox="0 0 65 85" width="92" height="120" fill="none">
  <ellipse cx="32.5" cy="42.5" rx="31.5" ry="41.5" stroke="currentColor" stroke-width="1"/>
  <path id="ring" d="M32.5 73.5A22 31 0 1 1 32.5 11.5A22 31 0 1 1 32.5 73.5"/>
  <text font-size="5.6" letter-spacing="1.55" fill="currentColor" style="font-family:var(--font-text)">
    <textPath href="#ring" startOffset="2%">NAME OF THE FIRM · CITY · EST 1987 ·</textPath></text>
  <ellipse cx="32.5" cy="42.5" rx="19.5" ry="28.5" stroke="currentColor" stroke-width="1"/>
  <text x="32.5" y="51" text-anchor="middle" font-size="25" fill="currentColor" style="font-family:var(--font-display)">TR</text>
</svg>
```

**In the lab:** Interlaced loops failed twice. The ring of text on a path worked at once, and stays honest about what code can draw.

<!-- v:media.logo-mark/logo-as-block -->
### 6. Logo as block

*Feeling: loud and certain, with a small footprint.*

**Use:** Agencies, culture and media brands with strong one-colour identity. **Avoid:** Quiet product pages. It is a statement.

Make the logo a solid rectangle pinned to the page corner. An 80 by 50 block with white bold 14px two-line wordmark at a 6px inset, square corners, and a 13px endorsement beside it at a 14px gap. Or a fixed 150 by 225 tab flush to the top-left that overlaps every section as you scroll. It often supplies the only strong colour.

**Seen on** Work & Co, i-D RED. **Suits** expressive, light-precision; culture, agency.

### How the mark behaves on the page

<!-- v:media.logo-mark/mark-as-image-system -->
### 7. Mark as image system

*Feeling: a brand with real depth. The mark is everywhere and never tiresome.*

**Use:** Fashion, architecture, hospitality, hardware. Whenever you need decoration, use the mark before anything else. **Avoid:** A weak mark. Enlarging a poor logo only makes the problem bigger.

Redraw the mark for each scale. A 58px seal in the nav, 40px in the footer, and a 560px version with heavy concentric arcs in flat mid-grey as a whole band. A glyph that serves as divider, placeholder and overlay on portraits, then sits above a 630px wordmark in the footer. A 190px asterisk turning slowly, returning at 120px. A 51px tile that also appears etched on the product.

**Seen on** Soundsensing, Stone Island, Russell & Stellar, Boom, p5.js. **Suits** photo-led, mono-technical, bold-colour; saas, fashion, food-drink, brand.

```html
<!-- Three masters of one idea. Parts fall away as size falls, and the big one gains detail the small one could not hold. -->
<symbol id="m16" viewBox="0 0 16 16"><path d="M3 10a5 5 0 0 1 10 0z" fill="currentColor"/><path d="M1 12.75h14" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="m44" viewBox="0 0 44 44"><g fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 31a17 17 0 0 1 34 0"/><path d="M12 31a10 10 0 0 1 20 0"/></g>
  <path d="M19 31a3 3 0 0 1 6 0z" fill="currentColor"/><path d="M1 35h42" stroke="currentColor" stroke-width="2"/></symbol>
<!-- m600: four arcs in 30, 24, 18 and 14px strokes, each broken by stroke-dasharray, set in flat mid grey on a near-black band. -->
```

**In the lab:** Three masters of one idea, with detail added at the top and removed at the bottom. My first small version, arcs over a dot, collapsed into the Wi-Fi icon at 16px. I replaced it with a half disc on a line. Always test a mark against the system icons it might be mistaken for.

<!-- v:media.logo-mark/pictogram-per-item -->
### 8. Pictogram per item

*Feeling: an index you can read by shape.*

**Use:** Architecture, museums and catalogues where each item is unique and worth a drawing. **Avoid:** Lists under about six items, or items too alike to draw differently.

Give every item its own pictogram inside one fixed container. BIG uses a 38px black square with a white glyph drawn from the building itself, right-aligned above the title, beside the image, across about 790 images. Getty blows the same idea up into square tiles used as map pins, with black and white building sections in a tile that takes the panel colour. Keep one line weight and one square, and let only the drawing change.

**Seen on** BIG, Getty Visit. **Suits** bold-colour, photo-led; culture, architecture.

```css
.row { display: grid; grid-template-columns: 1fr 430px; gap: 14px; align-items: start; }
.row > div { text-align: right; padding-top: 4px; }
.pg { display: inline-block; width: 38px; height: 38px; margin-bottom: 12px; background: var(--ink); }
.pg svg { display: block; width: 38px; height: 38px; fill: var(--bg); stroke: var(--bg); }   /* 1.6px line or one solid shape */
.row b { display: block; font-size: 13px; font-weight: 500; }
.row span { font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-2); }
```

**In the lab:** Three glyphs read as one system at once, against the BIG frame. The container does most of the work, which is why the drawings can stay this simple.

<!-- v:media.logo-mark/behaving-logo -->
### 9. Behaving logo

*Feeling: alive and quiet. A small motion you notice on the second visit.*

**Use:** Culture, agencies and studios that want one motion signature. **Avoid:** Loud loops. The nav should not perform.

Give the logo one state change. A hero wordmark of about 146 by 46, recoloured per slide, that hands off to a bold 20px version in the bar past the hero, with links shifting about 100px to make room. A 50 by 36 mark of three slanted bars that shears through states on scroll. A wordmark and menu icon sharing one box, so the same weight is either logo or menu.

**Seen on** BIG, Gagosian, Symbol Studio. **Suits** photo-led, light-precision; architecture, culture, agency.

<!-- v:media.logo-mark/app-icon-tile -->
### 10. App icon tile

*Feeling: product-native. This is an app you install.*

**Use:** Desktop apps, developer tools, editors. As hero signature or a closing object. **Avoid:** Services with no installable product. A tile for a website is a costume.

Squircle of 100 to 255px, radius about 17 to 24% of the side. One glyph or a gem-like render, inner rim 1 to 2px lighter, light from one direction, and a colour glow from inside. Zed-style closing tiles at about 160px wear an 8px white ring and soft shadow, straddling a band. Below 24px, drop the tile and show the glyph alone.

**Seen on** React Email, Obsidian. **Suits** dark-precision, mono-technical; devtool, saas.

**In the lab:** Fine at 100 and 64px, useless at 16. The inner glow only works if it comes from a consistent direction. The Obsidian tile measures about 255px on the frame.

<!-- v:media.logo-mark/dimensional-mark -->
### 11. Dimensional mark

*Feeling: a moment of richness inside a flat identity.*

**Use:** One large moment: a loader, a reveal line, a closing band. **Avoid:** The nav. A dimensional mark at 32px is a smudge.

Two rounded slanted slabs in soft WebGL bevel at about 200px, gently rotating on scroll. A twisted-ribbon letter at about 176px centred directly above the reveal line. A heavy lowercase word with a hard 6px down-right extrusion, overlapping a sheet edge.

**Seen on** Fabrica Partners, Elyx, Pomegranate Health. **Suits** light-precision, warm-neutral, illustrated; finance, saas, health.

<!-- v:media.logo-mark/hand-made-mark -->
### 12. Hand-made mark

*Feeling: personal and irreverent.*

**Use:** Artists, music, youth health, portfolios. **Avoid:** Any business that must look established.

A hand-signed tag about 145px wide replaces a logotype and repeats on a garment, the loader and the footer in one flat colour. Or several die-cut wordmark stickers with a 16px outline, rotated up to 10 degrees, dropped in margins.

**Seen on** Przebiegły Team, Effepinna Studio. **Suits** expressive, bold-colour; health, portfolio.

### Mistakes that cheapen logo marks

Most of these appeared in my own first attempts, in a side-by-side test, or in the analysts' failure notes.

- **Skipping the 16px test.** At fractional sizes my grid mark smeared. A pixel-fitted master for small sizes fixed it. Every serious mark has one.
- **Colliding with a system icon.** My arcs over a dot read as Wi-Fi at 16px. Check any small mark against the common interface icons.
- **Pixel wordmarks at arbitrary widths.** Mine at 44px turned to mush while 46px stayed crisp. The width has to be a whole number of modules.
- **Faking an interlaced monogram with Bezier curves.** Mine read as a figure 8, then as a plug socket. Interlacing letters is real drawing. Use letters from the dealt display face in a ring of text on a path instead.
- **Keeping every detail at every size.** A seal or box monogram loses its text below 40px. Drop to the ring and one letter.
- **A cut in the wrong place.** My horizontal slice ran through the narrow apex of an A and left a stray dash. Move the cut to where the strokes are widest, and keep it 1px or more at the smallest size.
- **A glow or gradient on a mark at nav size.** It turns to mud. Marks are one flat colour, with dimensional versions reserved for large moments.
- **Rendering a logo only once on the page.** If it never returns, there is no system. Find a second use or keep the mark quiet.
- **Generic symbols.** A spark for AI, a hexagon for developers, a leaf for health, an abstract letter in a gradient square.
- **Logo walls of invented companies presented as customers.** Marks of real companies appear only if they are real customers.
- **Redrawing a real brand's logo.** Use the supplied file, unchanged.

## 3D renders

A render does what a photograph cannot: it shows a thing that does not exist yet, an abstract thing given mass, or a real thing lit perfectly. The reason to use one is material. A good render makes you feel weight, surface and light, and a bad one looks like default plastic in a grey void.

Three things separate them. Lighting comes from an environment with bright strips and soft boxes, not from a point light in a black scene. Material has a believable roughness, with detail at a smaller scale than the eye expects, such as knurling, weave or grain. And composition is photographic: a long lens, a tight crop, and the object running off the frame.

Render with a model that fits the page. Use still images unless the object must turn. Live WebGL is rarer than it looks: three.js is on 11% of gold pages, 3% of silver and 21% of expressive ones. Most top sites show baked stills or video.

### Measured

| Measure | Value | Source |
|---|---|---|
| Canvas on page | 31% of gold, 12% of silver, 35% of expressive | 671 sites |
| Canvas by register | dark-precision 35%, gradient-light 34%, light-precision 21%, photo-led 10%, warm-neutral 6% | 516 gold and silver |
| three.js present | 11% of gold, 3% of silver, 21% of expressive | 671 sites |
| Lens | 22 degree vertical field in the builds that matched; anything over 35 reads as a toy | lab |
| Metal roughness | .26 reads as mirror black, .38 reads as satin steel | lab, compared with Revolut |
| Object in a tile | about 65% of tile width; tile 145px, radius 36 | Resend frames, lab |
| Gold rows by register | light-precision 6, photo-led 4, render-3d 3, dark-precision 2 | 19 gold rows |

### Buildable in code

<!-- v:media.render-3d/flat-shaded-isometric -->
### 1. Flat-shaded isometric

*Feeling: graphic and architectural. A city of ideas, built with a ruler.*

**Use:** Infrastructure, cloud and AI platforms that want colour and solidity without photorealism. **Avoid:** Warm consumer brands. It also needs a meaning: blocks for compute, panes for capacity.

Use three flat tones per block, no gradient and no texture. Give each block exactly one lattice face and leave the other side solid. Bars are thin, about 3% of the face, in the block's own tone. Panes on neighbours are mostly mid grey, with a few dark. On the lead block the bars take the accent and the panes go white, and some panes recess: draw a sill and a wall inside them so they read as depth. Small mono lettering in the accent sits low on the solid black face. Add a faint isometric grid to the floor, with two pale tints. Let blocks run off the stage, at about 280 units in a 1320 by 760 stage.

**Seen on** Baseten, Hugging Face, axem. **Suits** light-precision, expressive; ai, devtool.

```js
// One lattice face per block. The other side stays solid, which is where lettering goes.
const iso = (x, y, z, o) => [o[0] + (x - y) * Math.cos(Math.PI / 6), o[1] + (x + y) * .5 - z];
const poly = (pts, fill) => add('path', { d: 'M' + pts.map(p => p.join(' ')).join('L') + 'Z', fill });   // add() appends to the svg
function block({ o, s, h, top, left, right, side, bar, pane, n = 5 }) {
  const a = iso(0,0,h,o), b = iso(s,0,h,o), c = iso(s,s,h,o), d = iso(0,s,h,o), e = iso(s,s,0,o), f = iso(0,s,0,o), g = iso(s,0,0,o);
  poly([a,b,c,d], top); poly([d,c,e,f], left); poly([c,b,g,e], right);
  poly(side == 'L' ? [d,c,e,f] : [c,b,g,e], bar);          // the bars are the whole face, panes sit on top
  const m = s * .03, w = (s - m * (n + 1)) / n, k = h / s;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const u = m + i * (w + m), v = (m + j * (w + m)) * k, W = w * k;
    const q = side == 'L' ? [iso(u,s,h-v,o), iso(u+w,s,h-v,o), iso(u+w,s,h-v-W,o), iso(u,s,h-v-W,o)]
                          : [iso(s,s-u-w,h-v,o), iso(s,s-u,h-v,o), iso(s,s-u,h-v-W,o), iso(s,s-u-w,h-v-W,o)];
    poly(q, pane(i, j));
    // A dark pane reads as a recess only if you draw its sill and wall: shift the pane one depth along the iso axis
    // ([-cos30, -.5] times depth on the right face), then clip those two quads to the pane.
  }
}
```

**In the lab:** This took five rounds and the draft spec was wrong. I had panes on two faces. Side by side, Baseten has one lattice face per block and a solid face beside it, grey panes, and bars in the block colour. Fixing that closed most of the gap. Recessed panes only appeared once I shifted the pane along the iso axis and clipped the sill to it.

<!-- v:media.render-3d/glass-plate-isometric -->
### 2. Glass plate isometric

*Feeling: clean and explanatory. A concept with a translucent body.*

**Use:** Explaining layers: a plain-language rule over compiled code, a cache hit, a data layer. **Avoid:** As decoration with no content on the plates. An empty glass stack is the generic form.

Set a CSS 3D scene with `rotateX(55deg) rotateZ(-40deg)`. Top plate nearly opaque, carrying real text. Base plate tinted, carrying code in the same words. Two translucent side walls and dashed verticals tie them together. A blurred accent glow sits beneath. Keep the scene near 640px. For a physical object in the same family, use silver plates with subtle chromatic edges and one accent plate, about 280px wide. On a grid of about 40 flat grey tiles with 1px edges, a single 220px glass cube reads as one cached item.

**Seen on** Decagon, Nx, Prisma, DeepNode AI. **Suits** soft-pastel, dark-precision, render-3d, gradient-light; ai, devtool.

```css
.scene { width: 640px; height: 640px; perspective: 2400px; position: relative; }
.glow  { position: absolute; inset: 44% 4% 6% 12%; filter: blur(30px);
  background: radial-gradient(50% 50% at 62% 50%, color-mix(in srgb, var(--accent) 75%, transparent),
              color-mix(in srgb, var(--accent) 30%, transparent) 55%, transparent 74%); }
.iso   { position: absolute; inset: 50% auto auto 50%; width: 400px; height: 400px; margin: -200px;
  transform-style: preserve-3d; transform: rotateX(55deg) rotateZ(-40deg); }
.plate { position: absolute; inset: 0; border-radius: 6px; padding: 28px; }
.top   { transform: translateZ(120px); color: var(--ink); font: 19px/1.5 var(--font-text);
  background: linear-gradient(135deg, rgb(255 255 255 / .96), rgb(240 238 255 / .82));
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / .9), 0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent); }
.base  { color: color-mix(in srgb, var(--accent) 78%, transparent); font-size: 15px;
  background: color-mix(in srgb, var(--accent) 16%, transparent); }
.wall  { position: absolute; left: 0; top: 100%; width: 100%; height: 120px; transform-origin: top; transform: rotateX(-90deg);
  background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 34%, transparent), transparent); }
.wall.b { top: 0; left: 100%; transform-origin: 0 0; transform: rotateZ(90deg) rotateX(-90deg); }
```

**In the lab:** Two sheets of paper at first. Side walls, a stronger glow, and larger type brought it close to Decagon. It stays a little paler and flatter than a true render, because CSS has no refraction.

<!-- v:media.render-3d/glossy-object-tile -->
### 3. Glossy object tile

*Feeling: precise and premium. One lit object per idea.*

**Use:** Section markers on dark developer pages. Changelog and blog covers with no product shot available. **Avoid:** Light pages. It relies on a black surround to make the object glow.

Rounded tile of about 145px, radius about 36, gradient from a lifted dark to the page colour. Inside, one glossy object at about 65% of the tile: sphere, ring, faceted solid. A coloured strip in the environment wraps a rim of colour round the object and a thin glow along the tile base, with one hue per section. Centre it about 30px above each major heading. The cover form is 763 by 400, radius 8, a 1px border at 14% white, soft grey smoke, one chrome-black object at right that is never coloured, and the title at left.

**Seen on** Resend, Resend Changelog. **Suits** dark-precision; devtool.

```js
// One renderer, many stills. Bake once, then the tile is a plain image with no per-frame cost.
for (const [id, geometry, tint] of shots) {
  const s = new THREE.Scene(); s.environment = studio(renderer, tint);
  s.add(new THREE.Mesh(geometry, new THREE.MeshPhysicalMaterial({
    color: 0x16181c, metalness: .65, roughness: .2, clearcoat: 1, clearcoatRoughness: .05 })));
  renderer.render(s, cam);
  document.getElementById(id).src = renderer.domElement.toDataURL('image/png');
}
```
```css
.tile { --glow: var(--accent); position: relative; width: 145px; height: 145px; border-radius: 36px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--ink) 15%, var(--bg)), var(--bg) 60%);
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 14%, transparent),
              inset 0 0 0 1px color-mix(in srgb, var(--ink) 6%, transparent); }
.tile::after { content: ""; position: absolute; left: 18%; right: 18%; bottom: -1px; height: 2px;
  background: var(--glow); box-shadow: 0 0 14px 2px var(--glow); }
```

**In the lab:** The first objects were lost at 45% of the tile with point-light specks. A coloured strip in the environment and a larger object got close to Resend. The bottom glow matched almost at once, because it is plain CSS.

<!-- v:media.render-3d/machined-on-black -->
### 4. Machined on black

*Feeling: heavy, costly, engineered. Light finds the object in the dark.*

**Use:** Premium finance, watches, aerospace, audio, hardware. A closing band or a single hero object. **Avoid:** Friendly consumer products, or anything with no real material to show. Dark drama on a form-builder is a costume.

Pure black ground, with no floor and no glow. Light from thin grazing strips, so detail appears only where the light lands. Satin metal at roughness about .38, with small-scale detail: knurled edges, bevels, vent lines, micro-lettering. Long lens. Stage one object or a tight rhythm, such as three coins with the centre one edge-on, about 800px wide, centred under copy and a white pill. Let a single hue live in one element, such as an iridescent card among black ones, or a red second hand.

**Seen on** Revolut, Lithic, Boom, YLEM, Teenage Engineering, 6 sites in all. **Suits** photo-led, render-3d, light-precision; finance, brand, fashion, food-drink.

```js
import * as THREE from 'three';
// The whole look is here: a black room with bright strips and two large dim soft boxes.
function studio(renderer, tint) {
  const s = new THREE.Scene(); s.background = new THREE.Color(0);
  const panel = (w, h, x, y, z, i, col = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(i), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); s.add(m);
  };
  panel(1, 14, -9, 3, 4, 10); panel(.4, 14, 9, 0, 3, 16); panel(14, .5, 0, 9, 3, 7);  // hard strips draw the edges
  panel(9, 12, -4, 2, 11, .55); panel(6, 12, 6, -2, 10, .28);                          // soft boxes fill the faces
  if (tint) panel(9, 1.2, 0, -7, 4, 26, tint);                                         // coloured strip below the object
  const pm = new THREE.PMREMGenerator(renderer), tex = pm.fromScene(s, .012).texture;
  pm.dispose(); return tex;
}
const steel = new THREE.MeshPhysicalMaterial({ color: 0xc3c7ce, metalness: 1, roughness: .38 });
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
scene.environment = studio(renderer);            // no scene lights at all
const cam = new THREE.PerspectiveCamera(22, aspect, .1, 50); cam.position.set(0, 0, 7.6); // long lens
// Coin body: LatheGeometry from a stepped profile. Knurl: 260 thin boxes in an InstancedMesh around the rim.
// Raised mark: ExtrudeGeometry with bevelSize .016 and bevelSegments 4, so the bevel catches the strips.
```

**In the lab:** Close to Revolut at the second attempt. The first was mirror-black glass. Soft boxes and a roughness of .38 turned it to satin. The knurl and bevels did more for realism than any shader setting.

<!-- v:media.render-3d/matte-clay -->
### 5. Matte clay

*Feeling: sober and sculptural. Form without brand noise.*

**Use:** Engineering and industrial firms, autonomy and spatial products. A concept that should feel like a study model. **Avoid:** When the product's appeal is its colour or finish.

Render everything in one matte tone with soft, even light and real ambient occlusion. A monochrome grey object of about 650px on a bare ground of the same family, with no backdrop box, rotating with scroll. An all-white clay city with faint perception labels and one coral ground gradient can carry black type. Use small coloured labels as the only colour.

**Seen on** Nuro, Telkom-OT, Pete Sena. **Suits** photo-led, mono-technical, bold-colour; brand, other, portfolio.

<!-- v:media.render-3d/wireframe-to-solid -->
### 6. Wireframe to solid

*Feeling: a reveal: drawing becomes object.*

**Use:** Tools and hardware with a technical story, at one moment on the page. **Avoid:** More than once. As a repeated scroll trick it loses meaning.

Turn a dark metallic part in 3D, then swap it for its line-art version as the section ground changes, keeping exact position, scale and rotation. Render the line art with an edge pass, or fade between two registered images.

**Seen on** Anime.js. **Suits** dark-precision; devtool.

### Needs a proper render or shoot

<!-- v:media.render-3d/exploded-part-view -->
### 7. Exploded part view

*Feeling: engineering pride. The object opens for you.*

**Use:** Hardware, keyboards, instruments, and layered systems where separated parts explain the product. **Avoid:** Objects with no interesting inside. Do not explode a shape just to fill a section.

Separate the parts along one axis with equal gaps, lit from above, with one soft shadow under the last part. Teenage Engineering floats six parts of one key on a near-white ground, each with a small numbered black dot, and lists the numbered specification in small caps beneath. Svix stacks hex plates and standoffs in silver with slight chromatic edges and one accent plate, about 280px wide, and reuses them in the hero, a panel and cards as one object family.

**Seen on** Svix, Teenage Engineering EP-133. **Suits** light-precision, expressive; devtool, ecommerce.

<!-- v:media.render-3d/macro-crop-render -->
### 8. Macro crop render

*Feeling: obsessive. The camera is close enough to read the machining.*

**Use:** Watches, instruments, screensavers, and any object whose finish is the argument. **Avoid:** Models without enough detail. Macro reveals every lazy surface.

Crop the object with the tile, at about 1000px wide inside a smaller frame, with no device frame around it. Tilt about 20 degrees and light from upper left, so every small form throws a shadow. Add micro-grain on surfaces and real lettering. Use it as a copy-free chapter with only navigation on top. Teenage Engineering's product page runs a whole sequence of these, with hard studio light and the device cropped on two sides.

**Seen on** Prägen Hätlen, Bauhaus Clock. **Suits** render-3d, light-precision; brand, saas.

<!-- v:media.render-3d/material-story-render -->
### 9. Material story render

*Feeling: surprising and tactile. The material is the idea.*

**Use:** Hardware brands with a distinctive surface, such as knit, matte plastic, or games with real labels. **Avoid:** Without that material. Do not invent a texture to look interesting.

Choose one material truth and light for it. Soft even light with no cast shadow, so ribbed knit in three colourways cuts cleanly onto the ground, and fade the base of the figure into the page. Or matte black hardware on neutral sets where real labels supply all the colour, tumbling 30 to 40 degrees. A glossy floor with a long streak reflection can pick up screen colour, and a pill can sit right on the reflection.

**Seen on** Analogue, 1X, Locomotive. **Suits** render-3d, photo-led, type-led; ecommerce, brand, agency.

<!-- v:media.render-3d/grainy-abstract-form -->
### 10. Grainy abstract form

*Feeling: atmospheric and rich, with print-like depth.*

**Use:** AI and fintech brands with nothing to photograph. A single recurring object across the page. **Avoid:** As a hero with no idea behind it. Purple-blue glowing shapes are the mark of a generated page.

Give the form structure and grain. Spheres of 150 to 400px with hard-edged colour facets, heavy film grain, a dark terminator and a soft warm contact shadow, no two alike, crossing section edges. Or one looping ribbon made of 1 to 2px streak lines, about 1340px wide, grading through several hues, with one edge dissolving to nothing, reprised on a dark footer where it glows. Keep palette tied to the brand.

**Seen on** Stripe Sessions, Comet, Remote. **Suits** gradient-light, warm-neutral, bold-colour, soft-pastel; brand, ai, finance, devtool.

<!-- v:media.render-3d/product-cgi-on-flat -->
### 11. Product CGI on flat

*Feeling: bright and commercial.*

**Use:** Cards, candy, packaged goods, or fictional branded objects for a studio that wants wit. **Avoid:** When a real photograph is available. CGI product on flat colour is often weaker than `cutout-on-flat`.

Rotate the object 15 to 20 degrees with one soft shadow, centred on a flat colour field. Fan a stack of cards at about 15 degrees on black. Etch thin brand lines into a white slab so render and brand colour tie together. Extreme crops on soft grey raise the quality.

**Seen on** Brex, LaCrapule Studio, Ring Pop Candy, Cash App. **Suits** bold-colour, photo-led, light-precision, render-3d; finance, agency, ecommerce, food-drink.

<!-- v:media.render-3d/toy-character-render -->
### 12. Toy character render

*Feeling: playful and glossy, a little Y2K.*

**Use:** Agents, assistants, studios, kids and education. Small sizes reused many times. **Avoid:** Hero-size without real character work. A soft blob at 600px looks like a screensaver.

Soft 3D blobs at about 70px, each with a two-mark face, shared soft shadow, one family. Reuse them inside labels and diagrams, so they read as recurring agents. Vinyl-gloss figures with black rims at 130 to 190px on flat dark work for agencies. A matte robot at about 300px can sit beside a phone with the speech tail pointing at it.

**Seen on** Asana, BILD, Sparkle, Hawl Design, Area Technology. **Suits** render-3d, light-precision, gradient-light, dark-precision; saas, agency, education.

### Mistakes that cheapen 3D renders

Most of these appeared in my own first attempts, in a side-by-side test, or in the analysts' failure notes.

- **Trusting your memory of a render.** My block had panes on both faces, and only a side-by-side showed that the real one has one. Put your render next to the frame before polishing it.
- **Lights without an environment.** With only strips in a black room, my metal went mirror-black and looked like glass. Two big dim soft boxes turned the faces to satin grey. Reflective materials show their surroundings, so the surroundings are the lighting design.
- **Roughness too low.** At .26 the coin read as polished obsidian. At .38 it read as machined steel.
- **A point light for colour.** It gave tiny specular dots. Put the coloured strip in the environment, so the object reflects it along its whole curve.
- **A small object in a big tile.** My first glossy object sat at about 45% of the tile and the tile won. Fill about 65%.
- **Two sheets of glass with nothing between them.** My plate explainer read as two pieces of paper until it gained translucent side walls and a stronger glow. Depth needs a volume.
- **Text that shrinks under perspective.** Set type on 3D planes at 15 to 19px or larger, so it stays readable after foreshortening. Real words, never squiggles.
- **Default setups.** Three-point lighting, a grey floor and a sphere look like a modelling tool opening its first scene.
- **Wide lenses.** A short focal length makes any object look like a toy. Stay at a 20 to 25 degree vertical field.
- **Perfect edges.** Real objects have small bevels, and those bevels catch the light. A zero-bevel extrusion looks like a screen capture from a modelling tool.
- **Generic glass blobs and iridescent chrome as hero art.** These were striking in 2021 and now mark a template. Use them only if the material is about the product.
- **Real-time for its own sake.** If the object does not need to turn with input, bake it. Each tile with a live context costs memory and start-up time.
- **Rebuilding the environment map per object on slow machines.** Share one where you can, or tint a shared one. In my lab, four PMREM passes pushed render time from seconds to minutes under load.

## Video

Video earns its weight in two ways. It can show something that a still cannot: a process, a mechanism, a person speaking, a product moving. Or it can give a page a slow living surface that holds attention while the words do the work. Decide which job you have before anything else, because they need opposite treatment. A film someone will watch needs a clear poster, a real control and sound. A loop nobody will consciously watch needs no controls beyond pause, no sound, and no reason to look at it directly.

Cheap video gets both wrong. It autoplays a stock montage with a scrim and a big headline over it, and puts a default YouTube embed in the middle of a designed page. Great video feels like it was part of the layout from the start: one radius, a play control drawn from the page's own surface, and a loop calm enough that type can sit on it without help. Top sites often make the footage nearly abstract, using heavy blur, macro, or extreme slowness, so that it reads first as texture and second as film.

Everything here depends on footage you have. If you have none, do not fake it with a stock clip. Use a still, or a code-drawn loop, which is often better. A slow push on a still works only if the source is sharp at display size.

### Measured

| Measure | Value | Source |
|---|---|---|
| Pages with a video element | 41% of gold and silver | 516 sites |
| By register | photo-led 53%, dark-precision 48%, gradient-light 46%, bold-colour 45%, warm-neutral 40%, light-precision 26%, illustrated 20% | same |
| Frame radius | 4 to 42px, most at 8 to 20 | 13 rows, frames |
| Play control | 64 to 90px: 7 to 13% of frame width on landscape posters, 20 to 28% on portrait tiles | Greylock, Anthropic, Function, Bellroy frames |
| Pause control on a loop | 32 to 36px circle, 20px inset | Apple, Meta frames |
| Full-bleed height | about 830 to 840px at 1440 wide, or 100vh | Apple, Kinfolk, 1X frames |
| Caption inside the frame | 16 to 24px, white, bottom-left or low centre | rows, frames |

### Loops: nobody watches these on purpose

<!-- v:media.video/texture-first-loop -->
### 1. Texture-first loop

*Feeling: felt rather than watched. The page is alive, and nothing asks for attention.*

**Use:** Hero stages and feature panels that need warmth or material, on pages that have real footage of a real thing. **Avoid:** When the viewer must see what is on screen. Blur hides the product on purpose.

Make the footage nearly abstract, then let type or interface sit on it. Heavy horizontal motion blur with faces never sharp, a desaturated ground with one saturated object. Or slow extreme close-ups in near black with one coloured edge light, dark enough to carry 1px outlined type with no scrim. Or one object changing material through a long loop, in a single palette, so the loop has events without looking like several clips. Radius about 16 in a panel, or none at 100vh. A translucent message card and a small dark waveform capsule can sit on top, because the blur keeps attention on them.

**Seen on** 1X, Wispr Flow, PURHO, MetaLab. **Suits** photo-led, warm-neutral, render-3d, type-led; brand, saas, agency.

**In the lab:** Rendered a blurred loop in a 400 by 470 panel with a translucent card and a waveform capsule. It is close to Wispr Flow in structure. The real one has warmer footage, and warmth is what sells it.

<!-- v:media.video/full-bleed-loop -->
### 2. Full-bleed loop

*Feeling: cinematic and confident. The page stops for a moment.*

**Use:** A single chapter on brand or product pages, usually mid-page, once the reader has some context. **Avoid:** As the hero on a page that needs to explain itself. A film at the top delays the point.

Run the video edge to edge at about 830px tall on a 1440 viewport, or 100vh, under a sticky bar, with hard crops at top and bottom. Add one 36px circular pause control at top right, 20px in. No captions until a closing headline. Or use a set built so that its palette guarantees contrast, such as painted objects on a coloured wall, and let white type sit straight on it. Warm amber archive footage with vignette and heavy grain suits a music or history piece.

**Seen on** Apple Vision Pro, Kinfolk, Pankow. **Suits** photo-led, expressive; brand, editorial, culture.

```html
<video class="loop" autoplay muted loop playsinline preload="metadata" poster="loop.jpg" width="1920" height="1080">
  <source src="loop.webm" type="video/webm"><source src="loop.mp4" type="video/mp4">
</video>
<button class="ring" aria-label="Pause film"><svg viewBox="0 0 12 12"><path d="M3 2h2v8H3zM7 2h2v8H7z"/></svg></button>
```
```css
.loop { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.ring { position: absolute; top: 20px; right: 20px; width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center;
        border: 1.5px solid rgb(255 255 255 / .85); background: rgb(0 0 0 / .18); backdrop-filter: blur(6px); }
.ring svg { width: 12px; height: 12px; fill: #fff; }
```
```js
// Loops are decoration, so they must be stoppable, and they must not run when nobody can see them.
const v = document.querySelector('.loop'), still = matchMedia('(prefers-reduced-motion: reduce)');
if (still.matches) { v.removeAttribute('autoplay'); v.pause(); }
new IntersectionObserver(([e]) => { if (still.matches) return; e.isIntersecting ? v.play() : v.pause(); }).observe(v);
document.querySelector('.ring').onclick = e => { v.paused ? v.play() : v.pause();
  e.currentTarget.setAttribute('aria-label', v.paused ? 'Play film' : 'Pause film'); };
```

**In the lab:** The chrome matched Apple closely and the footage did not. A push on a small still fell apart at full width, which is the lesson: this element is mostly its source.

<!-- v:media.video/autoplay-thumbnails -->
### 3. Autoplay thumbnails

*Feeling: a busy reel. The studio has a lot of work and it moves.*

**Use:** Agency and studio indexes, where each project already has film. **Avoid:** Product grids, or more than a screen of tiles on slow connections.

Replace stills with small muted loops of 2 to 6 seconds at 16:9, all in the same frame recipe with no player interface. Let the palettes differ from tile to tile, because that contrast is the page's rhythm. Play only tiles in view. Laptop and phone clips can run screen recordings inside renders. Caption under the frame, 12 to 14px.

**Seen on** Patrick Heintzmann, Noise Studio. **Suits** mono-technical, dark-precision, light-precision; agency, portfolio.

<!-- v:media.video/in-scene-caption -->
### 4. In-scene caption

*Feeling: the product is speaking inside the footage.*

**Use:** Assistants and consumer AI, where the promise is that the product is present in daily life. **Avoid:** When the footage has no calm area, or when the line is generic.

Autoplay lifestyle footage in a frame with a large radius of about 42px. Put a two-line 24px white caption with a 28px app icon chip into a quiet part of the scene, as if the product said it. Set 32px round controls at bottom right on a soft dark blur. The caption changes with the scene, so write one line per shot.

**Seen on** Meta AI. **Suits** light-precision; ai.

**In the lab:** My first caption sat over the cup, the busiest part of the frame, and read as a sticker. Moved to the calm dark corner it joined the scene. A soft text shadow helps, and the zone test from photography applies unchanged.

### Films: somebody chooses to press play

<!-- v:media.video/poster-with-designed-play -->
### 5. Poster with designed play

*Feeling: considered. Even the play button belongs to the brand.*

**Use:** Any film someone must choose to watch: a launch film, a founder talk, a case study. **Avoid:** As a stand-in for a loop. If nobody will press it, do not offer it.

Set a strong still, cropped like a photograph, with no scrim. Draw the control from your own system. A square 84px at radius 12 in the page surface colour, with a thin outline triangle, overlapping the poster title without apology. A solid 90px accent circle, dead centre, with a white triangle. A frosted 72px glass orb. Keep the poster at the frame radius and in a 1px outline if it sits on the same tone. A macro film that shows the brand's own idea makes the best poster.

**Seen on** Anthropic News, Greylock, Ideogram. **Suits** light-precision, warm-neutral, photo-led, type-led; editorial, finance, ai, agency.

```css
/* Square, from the page's own surface. The triangle is an outline, not a solid. */
.play-sq { position: absolute; left: 50%; top: 50%; width: 84px; height: 84px; margin: -42px; border-radius: 12px;
           display: grid; place-items: center; background: var(--surface);
           box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 6%, transparent); }
.play-sq svg { width: 30px; height: 30px; fill: none; stroke: var(--ink); stroke-width: 1.5; stroke-linejoin: round; }
/* Round, solid accent. A triangle's weight sits left of its box, so push it right. */
.play-rd { position: absolute; left: 50%; top: 50%; width: 90px; height: 90px; margin: -45px; border-radius: 50%;
           display: grid; place-items: center; background: var(--accent); }
.play-rd svg { width: 28px; height: 28px; margin-left: 4px; fill: var(--bg); }
```

**In the lab:** Both controls matched Anthropic and Greylock, because they are plain geometry. The square one looks more distinctive, because nearly everyone else uses a circle.

<!-- v:media.video/inline-clip-quiet-controls -->
### 6. Inline clip, quiet controls

*Feeling: documentation with a pulse. A clip explaining one thing.*

**Use:** Changelogs, docs and feature details, where a short clip shows a real interaction. **Avoid:** Marketing heroes. It is too small and quiet to carry a page.

Set a column-width video, about 624px, radius 8, with a 1px border at about 6%. Keep controls inside the frame: play, volume, 13px tabular time, a 3px scrubber, remaining time, fullscreen, white with no panel behind. For live-action clips, burn in a centred 18px caption and put thin pause and mute icons at bottom right with an expand chip at bottom left. Drone footage can take a large centred line at the base with no scrim, if the image is calm.

**Seen on** Stripe Sessions, Linear Changelog, ECI. **Suits** gradient-light, dark-precision, photo-led; brand, saas, ai.

```css
.clip { position: relative; border-radius: 8px; overflow: hidden;
        box-shadow: 0 0 0 1px color-mix(in srgb, var(--ink) 6%, transparent); }
.clip video { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
.bar { position: absolute; left: 12px; right: 12px; bottom: 10px; display: flex; align-items: center; gap: 12px;
       color: #fff; font: 500 13px/1 var(--font-text); font-variant-numeric: tabular-nums; }
.bar svg { width: 16px; height: 16px; flex: none; fill: currentColor; }
.track { flex: 1; height: 3px; border-radius: 2px; background: rgb(255 255 255 / .28); }
.track i { display: block; height: 100%; width: 34%; border-radius: 2px; background: #fff; }
/* Only for footage with a bright base. Local to the strip, never over the whole frame. */
.clip.bright::after { content: ""; position: absolute; inset: auto 0 0; height: 64px;
  background: linear-gradient(transparent, rgb(0 0 0 / .55)); pointer-events: none; }
```

**In the lab:** Matched Linear. My clip has bright water at its base, so it needed a 64px gradient local to the strip. Linear does not, because its clips are dark.

<!-- v:media.video/portrait-tile-row -->
### 7. Portrait tile row

*Feeling: human and scrollable. Real people, one tap away.*

**Use:** Member stories, testimonials, short social clips, and commerce pages with short demos. **Avoid:** Landscape footage cropped to portrait, and tiles without a real person or product.

Set four tiles about 288 by 440 to 480 at radius 12, warm-lit and framed the same way. An 80px translucent grey play disc sits centred at about 36% of the height, so it clears faces. A bottom scrim holds a 16px semibold name and a one-line outcome in white. Bellroy uses 322 by 570 at radius 7, a 64px black circle, a 21px caption below the tile, and a small coloured shop link.

**Seen on** Function Health, Bellroy. **Suits** warm-neutral, photo-led; health, ecommerce.

```css
.stories { display: grid; grid-template-columns: repeat(4, minmax(0, 288px)); gap: 32px; justify-content: center; }
.story { position: relative; height: 440px; border-radius: 12px; overflow: hidden; color: #fff; }
.story img { width: 100%; height: 100%; object-fit: cover; }
.story::after { content: ""; position: absolute; inset: 52% 0 0; background: linear-gradient(transparent, rgb(12 10 8 / .78)); }
.disc { position: absolute; z-index: 1; left: 50%; top: 36%; width: 80px; height: 80px; margin: -40px; border-radius: 50%;
        display: grid; place-items: center; background: rgb(120 120 120 / .42); backdrop-filter: blur(12px) saturate(1.3); }
.disc svg { width: 30px; height: 30px; margin-left: 3px; fill: #fff; }
.story div { position: absolute; z-index: 1; left: 20px; right: 20px; bottom: 18px; font-size: 16px; line-height: 1.3; }
.story b { display: block; font-weight: 600; }
```

**In the lab:** Close to Function Health in structure, using mismatched stills. With four unrelated images the row fell apart, which shows how much it relies on one lighting setup and one crop.

<!-- v:media.video/hero-thumbnail-chip -->
### 8. Hero thumbnail chip

*Feeling: a second story, offered quietly.*

**Use:** Hero stages with one main message and one film worth seeing, in place of a second button. **Avoid:** Heroes that already have two calls to action, or a phone width without a plan for the chip.

Inset a dark translucent card of about 202 by 240, radius 20, at the hero's bottom right, 32px in. Inside it, a thumbnail about 186 by 124 at radius 12, which is the outer radius minus the 8px padding. A 24px outlined play circle sits at its corner, then a 16px tight caption, then a 10px mono duration. On phones, place it under the copy.

**Seen on** Nuro. **Suits** photo-led; brand.

```css
.chip { position: absolute; right: 32px; bottom: 32px; width: 202px; height: 240px; padding: 8px; border-radius: 20px; color: #fff;
        background: rgb(26 22 20 / .78); backdrop-filter: blur(14px); }
.chip .thumb { position: relative; display: block; height: 124px; border-radius: 12px; overflow: hidden; }
.chip .thumb svg { position: absolute; left: 8px; bottom: 8px; width: 24px; height: 24px; }
.chip p { padding: 10px 6px 0; font: 400 16px/1.1 var(--font-text); letter-spacing: -.01em; }
.chip small { position: absolute; left: 14px; bottom: 12px; font: 10px/1 var(--font-mono); opacity: .75; }
```

**In the lab:** Read as the Nuro hero immediately. It only works because the nested radii follow the rule of outer minus padding.

### Footage as evidence

<!-- v:media.video/product-output-as-footage -->
### 9. Product output as footage

*Feeling: proof. The film shows what the machine sees.*

**Use:** AI, data and computer-vision products, and fintech pitches delivered as film. **Avoid:** Decorative HUDs on products that do not see anything. Detection boxes on a film of nothing are a costume.

Dim real footage to about 55% and desaturate it slightly, then overlay the product's real output. One blue filled box on the lead object, thin orange outlines on the rest, small labels on 15px tabs. A headline can cross the boxes, because they are thin. Or run black-and-white footage with slight chromatic fringing and white captions that appear word by word at frame centre, so the film delivers the pitch without voice.

**Seen on** Scale AI, Monark Markets. **Suits** dark-precision; ai, finance.

```css
.det { position: relative; border-radius: 12px; overflow: hidden; background: #000; color: #fff; }
.det video { width: 100%; filter: brightness(.56) saturate(.8); }
.bx { position: absolute; border: 1px solid var(--box, var(--accent)); }
.bx.lead { --box: var(--accent); background: color-mix(in srgb, var(--accent) 28%, transparent); }
.bx em { position: absolute; left: -1px; top: -15px; height: 15px; padding: 0 4px; font: 500 10px/15px var(--font-text);
         font-style: normal; background: var(--box, var(--accent)); color: #111; }
```

**In the lab:** Close to Scale at a glance. It depends on the boxes tracking the real objects: boxes that sit near a thing rather than on it give the trick away.

### Mistakes that cheapen video

Most of these appeared in my own first attempts, in a side-by-side test, or in the analysts' failure notes.

- **The default embed.** A YouTube frame brings a red button, a title bar and a suggested-video wall into a designed page. Use a designed poster and load the player only on click.
- **A scrim over the whole frame to rescue a headline.** Only 4 of the 117 photography rows use anything like it. Choose calmer footage, or put the words beside it.
- **Trusting automatic contrast checks.** My page runner reported white text on video at 1.1:1 because it cannot see the footage, and it would pass real failures just as easily. Check the actual frame, including the brightest moment of the loop. Sample several frames, because a loop that is dark at 0s can be bright at 4s.
- **Text pinned over a moving image without checking every frame.** Joby pins one white caption over a sequence of frames, and on the bright wing frame that caption loses most of its contrast. If copy stays while footage changes, every frame has to keep that corner dark.
- **Upscaling.** My full-bleed push came from a smaller still, and at 1440px the water broke into visible blocks. The film has to be sharp at display size, or it has to be blurred on purpose.
- **Blur that looks like an error.** Uniform blur can read as a loading state. Directional smear, and faces that are never quite sharp, read as motion.
- **A short loop with a visible jump.** Loop on a held shot, or crossfade the seam. A 6 second loop that jumps is worse than a still.
- **A solid triangle dead centre in a circle.** Its visual weight sits left of the box, so nudge it right by 5 to 8% of the disc.
- **Autoplay with no pause.** Anything that moves for more than five seconds needs a way to stop it, and `prefers-reduced-motion` must show the poster.
- **A heavy file above the fold.** Set `preload="metadata"`, give a poster, and keep a hero loop to about 2 to 4MB. Serve a phone-sized file on phones.
- **Every tile playing at once with no rhythm.** Thumbnail loops work when the palette varies from tile to tile and each one stays small. Play only those in view.

## Before you call it done

- Write out the six-line contract. Can you show which line each image obeys?
- Shrink every image on the page to a contact sheet. Which one jumps out? Replace it or justify it.
- Does the set lock at least two of colour bias, brightness, setup and format? Run the audit if you have the files.
- Could a competitor use any image unchanged? Make it specific.
- Is there an overlay, tint, shadow or radius on a photograph that the photograph does not need? Remove it.
- If text sits on an image, did you measure the exact crop, including the brightest frame of any video?
- Are all icons from one set, with one stroke on screen at every size? Are any icons there only to fill a card?
- Does the logo hold at 16px, and does it return somewhere other than the nav?
- Would a render pass next to a real studio photograph at thumbnail size? If not, use something else.
- Do all loops have a pause, a poster and a reduced-motion state?
- Does every image have real `alt` text and reserved space?
- Is there one image that could not belong to anyone else?
