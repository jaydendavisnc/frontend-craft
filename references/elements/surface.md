# Surface

A surface answers one question: where does this thing stop and the next begin. Cards, panels, bento grids, rules, borders, shadows and blur are all answers to that question. Beginners answer with a box. Professionals answer with the least they can get away with, then apply that one answer exactly, all the way down the page. This chapter teaches the ways to separate things, how hairlines and shadow stacks are really built, how radii nest, and what a real bento has that a generated one lacks.

It holds 80 canonical variants, clustered from 353 analyst rows across 267 sites. The strongest variants of each element were checked against real frames and against the measured specs of 341 sites, and 25 were rebuilt and rendered next to the real thing, which is where the corrections and the mistake lists come from. The same variants live in `data/elements/surface.jsonl`, which is what the sampler deals from. Recipes here use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in. Hex values appear only where they are neutral greys or measured facts about a site. Treat those as evidence, not as a palette to copy.

**Contents.** [How to separate things](#how-to-separate-things) · [What we measured](#what-we-measured) · [Derived tokens](#derived-tokens) · [Eight surface systems](#eight-surface-systems)

- **[Card](#card):** [hairline object](#1-hairline-object-card) · [hairline text](#2-hairline-text-card) · [link row](#3-link-row-card) · [mat](#4-mat-card) · [shell and well](#5-shell-and-well-card) · [tonal](#6-tonal-card) · [crop bleed](#7-crop-bleed-card) · [caption outside](#8-caption-outside-tile) · [photo overlay](#9-photo-overlay-tile) · [media over tinted body](#10-media-over-tinted-body) · [grain paper](#11-grain-paper-tile) · [figure led](#12-figure-led-card) · [colour block](#13-colour-block-card) · [edge signature](#14-edge-signature-card) · [soft shadow](#15-soft-shadow-card)
- **[Panel](#panel):** [tonal feature](#1-tonal-feature-panel) · [contrast flip](#2-contrast-flip-panel) · [brand slab](#3-brand-slab) · [sheet stack](#4-sheet-stack) · [inset sheet](#5-inset-sheet) · [nested gutter window](#6-nested-gutter-window) · [ruled cells](#7-ruled-cell-panel) · [product stage](#8-product-stage) · [cut silhouette](#9-cut-silhouette-panel) · [OS window](#10-os-window) · [floating utility](#11-floating-utility) · [crop-mark frame](#12-crop-mark-frame) · [split-tone stage](#13-split-tone-stage) · [editorial module](#14-editorial-module) · [true-ratio placeholder](#15-true-ratio-placeholder)
- **[Bento](#bento):** [what a real bento has](#what-a-real-bento-has) · [tonal squircle](#1-tonal-squircle-bento) · [hairline tile](#2-hairline-tile-bento) · [double rim](#3-double-rim-bento) · [ruled no-gap](#4-ruled-no-gap-bento) · [gradient per tile](#5-gradient-per-tile-bento) · [colour owned](#6-colour-owned-bento) · [mixed media](#7-mixed-media-bento) · [dark tilted device](#8-dark-tilted-device-bento) · [masonry feed](#9-masonry-feed-bento)
- **[Radius system](#radius-system):** [the nesting rule](#the-nesting-rule) · [concentric ladder](#1-concentric-ladder) · [container versus control](#2-container-versus-control) · [role tiers](#3-role-tiers) · [near square](#4-near-square-scale) · [zero](#5-zero-radius) · [oversize](#6-oversize-scale) · [outer corners only](#7-outer-corners-only)
- **[Border treatment](#border-treatment):** [hairline only](#1-hairline-only) · [page rails](#2-page-rails) · [crop marks](#3-crop-marks) · [specular edge](#4-specular-edge) · [recommended keyline](#5-recommended-keyline) · [double frame](#6-double-frame) · [line style as meaning](#7-line-style-as-meaning) · [quiet rim](#8-quiet-rim-nesting) · [interlocking cut](#9-interlocking-cut) · [viewport frame](#10-viewport-frame)
- **[Divider](#divider):** [inset hairline](#1-inset-hairline) · [full-bleed hairline](#2-full-bleed-hairline) · [heavy rule](#3-heavy-rule) · [typed rules](#4-typed-rules) · [leader row](#5-leader-row) · [timeline hairline](#6-timeline-hairline) · [double-rule band](#7-double-rule-band) · [shaped transition](#8-shaped-transition) · [tick marks](#9-tick-marks) · [colour band](#10-colour-band-break)
- **[Elevation](#elevation):** [how a stack is built](#how-a-stack-is-built) · [tinted negative stack](#1-tinted-negative-stack) · [ring, contact, ambient](#2-ring-contact-ambient) · [hard offset](#3-hard-offset) · [wide bloom](#4-wide-bloom) · [moving layers only](#5-shadow-on-moving-layers) · [sheet overlap](#6-sheet-overlap) · [physical paper](#7-physical-paper)
- **[Glass and blur](#glass-and-blur):** [heavy nav smear](#1-heavy-nav-smear) · [theme flip](#2-theme-flip-nav) · [feathered blur](#3-feathered-blur) · [tray tinted by media](#4-media-tinted-tray) · [glass over photo](#5-glass-card-over-photo) · [frosted panel over art](#6-frosted-panel-over-art) · [straddling frost](#7-straddling-frost)
- [Before you call it done](#before-you-call-it-done)

## How to separate things

There are seven ways to separate two things. They differ in what they say and in what they cost. Take the cheapest one that works.

| Device | What it says | Use it for | It fails when |
|---|---|---|---|
| Space | These are different ideas | Sections, groups, the default | Items are too alike to tell apart |
| Alignment | These belong to one column | Features without cards | The grid drifts |
| Tone step | This is a place | A feature region, a product stage | Every item gets one, so the page turns grey |
| Hairline | This is an edge | Dense data, cells, developer tools | Lines do not meet, since each line shows its error |
| Overlap | This sits on that | Sheets, fragments crossing a seam | Nothing else on the page has depth |
| Ring and contact shadow | This is an object | Controls, menus, small floating things | It is used on flat page sections |
| Soft shadow or blur | This is above the page | Things that truly float or move | It sits on everything, and then nothing floats |

Follow three rules, because they account for most of the gap between a real page and a generated one.

**One device per boundary.** A white fill, a border, a shadow and a radius on the same box are four answers to one question. That stack is what a default component library ships, so it reads as default. Pick one. The legal pairing is a tone step with a line one notch darker than the fill, as on Ramp, where the two act as a single edge.

**Spend the strong devices once.** A hairline can repeat a hundred times. A deep shadow, an inverted panel, a hard offset and a glass panel cannot. On Zed's pricing page one card has a blue offset and everything else is flat, and that is why it lifts. Put the same shadow on three cards and none of them lift.

**Move the edge outward when you can.** One tone step behind a whole section beats a tinted box around each item. One rule between two columns beats two outlines. Amplitude's feature row has no cards at all: four media tiles, four titles, aligned to one left edge, and the columns do the separating. Before you draw a box, ask whether the content's own left edge is already drawing it.

To separate without boxing, reach for these first:

- **Caption outside the tile.** The picture stays whole and the text sits on the page ground, as on Apple.
- **Rules between, not boxes around.** Grid gap 1px on a line-coloured background gives you shared edges with no doubled lines.
- **A single tinted region.** Notion's product page runs on one warm grey panel. It holds the copy and the UI, and the page needs nothing else.
- **Two-tone text.** Ramp and Lithic split a title into full ink and muted ink, which gives hierarchy with no second element.
- **A panel with the edge removed.** Let the product run off one side, and the panel stops reading as a card.

## What we measured

Each value is the median, with the middle half in brackets. Shadow share counts any real shadow on any element, including buttons, so it says much less about cards than it looks. Across all 341 measured sites, after removing transparent placeholder layers, about 70 percent have a real shadow somewhere and about 30 percent have none.

| Register | Border alpha | Large radius | Medium radius | Sites with any shadow |
|---|---|---|---|---|
| Gold, all registers | 0.08 (0 to 0.16) | 12 (8 to 20) | 9 (6 to 18) | 76% |
| Light precision | 0.07 (0 to 0.15) | 12 (8 to 16) | 8 (6 to 16) | 82% |
| Dark precision | 0.10 (0.05 to 0.18) | 12 (8 to 20) | 8 (8 to 16) | 95% |
| Gradient light | 0.10 (0.05 to 0.30) | 16 (8 to 24) | 10 (8 to 20) | 92% |
| Warm neutral | 0.10 (0 to 0.16) | 14 (8 to 24) | 12 (8 to 60) | 76% |
| Photo led | 0.08 (0 to 0.23) | 16 (8 to 24) | 10 (4 to 32) | 46% |
| Bold colour | 0.20 (0 to 0.30) | 16 (8 to 24) | 12 (6 to 40) | 73% |
| Mono technical | 0 (0 to 0.20) | 10 (4 to 24) | 5 (4 to 20) | 71% |
| Type led | not enough data | not enough data | 46 (8 to 64) | 14% |

Across every measured shadow value:

| Fact | Value |
|---|---|
| Layers in one shadow | 1 layer 72%, 2 layers 17%, 3 layers 7%, 4 layers 4% |
| Soft layer, y offset | 3px (1 to 10) |
| Soft layer, blur | 10px (3 to 27), about twice the y offset |
| Soft layer, alpha | 0.10 (0.06 to 0.25) |
| Negative spread | 34% of soft layers |
| Sites with a tinted, non-black soft shadow | 18% |
| Sites with a spread-only ring | 20% |
| Sites with an inset ring or highlight | 27% |
| Sites with a hard offset | 7% |
| Border width | 1px on 93% of bordered boxes, 2px on 5% |

Glass is rare. Measured backdrop blur on the nav appears on about 10 percent of gold and silver sites, 22 percent in dark precision, and 6 percent in photo led. The 23 measured values run from 4 to 25px with a median of 12. Glass made up 19 of 353 surface rows, and only 7 of the 89 gold sites in this family used it anywhere. Most of those uses are a sticky bar or a small tray, not a glass card. If you are about to make a frosted card, you are almost certainly reaching for the wrong tool.

Tone steps are smaller than you think. These fills were sampled from real frames.

| Site | Page | Fill | Step |
|---|---|---|---|
| Expo | #ffffff | #f9f9fb | 2% |
| Modern Treasury | #ffffff | #f9f5f4 | 3%, warm |
| Increase | #ffffff | #f5f6fa | 3%, cool |
| Notion | #ffffff | #f6f5f4 | 3.5%, warm |
| Apple | #ffffff | #f5f5f7 | 4% |
| Factory | #f9f9f9 | #ebebeb | 5.5% |
| Framer | #000000 | #111111 | +17 levels |
| Linear | #08090a | #0f1011 | +7 levels |
| Polar | #090909 | #111111 | +8 levels |

So: 2 to 5 percent of ink on light, and +7 to +17 levels on dark. A step you can clearly see on a good monitor is already too big.

## Derived tokens

Add these once at the top of the stylesheet. Everything below uses them, and because they mix from the palette, a warm palette gets warm lines and warm shadows with no further work.

```css
:root{
  --line-strong:color-mix(in srgb,var(--ink) 18%,transparent);
  --well:color-mix(in srgb,var(--ink) 4%,var(--bg));
  --shadow-tint:color-mix(in srgb,var(--accent) 30%,var(--ink));
}
/* If the palette gives no --line, derive it: color-mix(in srgb,var(--ink) 9%,transparent) */
```

Use `--surface` for a tone step, `--line` for structure, `--line-strong` for an edge that has to survive on a tinted ground, and `--well` for a recess inside a card. Never type a grey shadow by hand. Keep `--ink-3` for marks, lines and disabled states, and set small text in `--ink-2`, because a third-level grey rarely clears 4.5:1 at 12px.

## Eight surface systems

Variants only work together as a system. Mixing a hard offset, a glass nav and soft tinted cards is what makes a page read as a sample book. Choose one row, then take every surface on the page from it. Two sites built from different rows will look unrelated, and that is the point, so let the deal or the brief decide rather than a favourite.

| System | Radius | How things separate | Depth | Bento and cards | Reference |
|---|---|---|---|---|---|
| Instrument | Near square, pill controls | Hairlines, page rails | None on the page, only in product | Ruled no-gap, hairline object | Vercel, Zed, Speakeasy |
| Soft product | Concentric 20 to 40 | Tone steps | Ring and contact on small objects | Tonal squircle, double rim | Expo, Cal.com |
| Cool depth | 8 throughout | White on faint tint | Tinted negative stack | Crop bleed, floating fragments | Stripe |
| Warm paper | 12 to 24 | Warm tone, grain | Wide low warm shadows | Grain paper, tonal | Perplexity Comet, ElevenLabs |
| Dark machined | Nested 12 to 16 | Tone steps of +7 to +17, gutters | Top highlights, no glow | Nested gutter, quiet rim | Polar, Framer, Linear |
| Printed | 0, with circles as the only curve | 1px ink rules | Hard offset, one object | Hairline box, colour block | Jasper, Oatly |
| Editorial | 0 | Rules and whitespace | None | Photo overlay, caption outside | Acne Studios, Kinfolk |
| Colour rooms | 32 to 128 | Whole sections of colour | Sheets sliding over sheets | Colour owned, mixed media | Hims, Monzo |

## Card

A card must do one job: hold one idea so that a reader can compare it with its neighbours. It earns its box only when the items are peers. If they are a sequence, use a list. If there is one of them, use a section.

What separates great from cheap is rarely the container. Great cards almost disappear, and the eye lands on what is inside: a real command, a real number, a real screen, cropped with confidence. Their text anchors to corners with an empty middle left on purpose, so the row has rhythm. Their objects sit on a shared baseline across the row. Cheap cards are all container: an icon in a tinted circle, a title, two lines of grey, a border, a shadow, and a hover lift, three times over.

Measured ranges from the cards we checked: radius 2 to 32 with most at 8 to 16, padding 16 to 56 with most at 24 to 32, gaps 12 to 32 with most at 16 to 24, titles 16 to 24px, body 14 to 16px on 20 to 24 leading. Hover transitions have a median of 300ms, with the middle half at 200 to 400.

<!-- v:surface.card/hairline-object-card -->
### 1. Hairline object card

*Feeling: exact, quiet, an engineer's index card.*

A card with no fill and no shadow on a slightly tinted page, carrying one real object pinned to its base. Use it for developer tools, capabilities and anything with a thing to copy or try. Do not use it where there is no object, because a hairline box with only text belongs to the next variant.

Set 1px at `--line`, radius 2 to 8, padding 32. Title 20px at 500, copy 16/24 in `--ink-2`, measure about 15em. Pin the object with `margin-top:auto` so every object in the row shares a baseline. Make the object the only white thing in the row, because the eye goes straight to the single brightest surface.

**Seen on** Vercel AI SDK, React Email, TypeScript, ClickHouse. **Suits** bold-colour, light-precision, dark-precision; devtool.

```css
body{background:var(--well)}
.row{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:24px}
.card{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:3px;padding:32px}
.card h3{font:500 20px/1.3 var(--font-display);letter-spacing:-.012em;margin-bottom:8px}
.card p{font-size:16px;line-height:24px;color:var(--ink-2);max-width:15em;margin-bottom:24px;text-wrap:pretty}
.field{margin-top:auto;display:flex;align-items:center;justify-content:space-between;height:42px;padding:0 12px;
  border:1px solid var(--line);border-radius:6px;background:var(--bg);font-size:13px}
```

<!-- v:surface.card/hairline-text-card -->
### 2. Hairline text card

*Feeling: a well-kept index.*

An outline card with text only, for docs indexes, capability lists and pointers. Use 1px at `--line`, radius 4 to 16, padding 16 to 28, a 12px label, a 16 to 20px title and one muted line. Keep it short, about 160px tall, and drop the icon tile. Numbering it, as in a `01` label set in small caps or mono, gives a row order without decoration. On hover, darken the border and leave the fill alone. Avoid it for marketing features, where the reader needs evidence rather than a label.

**Seen on** Neon Docs, Factory, Meta AI, ECI, Anthropic Docs, 12 sites in all. **Suits** light-precision, photo-led, dark-precision, illustrated; devtool, ai, culture, finance.

<!-- v:surface.card/link-row-card -->
### 3. Link row card

*Feeling: a pointer, not a promotion.*

A horizontal card, full column width, that sends you one place. Use it for related reading, next steps and short resource lists. Avoid it for more than five items, where a plain list with rules is lighter.

Set padding 8, 1px at `--line-strong`, radius 16, thumbnail 96px at radius 8, gap 16 between rows, 16px title top-aligned, 14px accent action bottom-aligned, and a 32px round arrow chip pinned to the bottom right corner. Put a real photograph in the thumbnail.

**Seen on** Stripe Sessions, New Material, Sora, Khan Academy, Resend Docs, 6 sites in all. **Suits** light-precision, gradient-light, illustrated; devtool, brand, agency, ai.

```css
.row{position:relative;display:grid;grid-template-columns:96px 1fr;gap:12px;padding:8px;
  border:1px solid var(--line-strong);border-radius:16px;transition:border-color .15s}
.row:hover{border-color:var(--ink-3)}
.thumb{height:96px;border-radius:8px;overflow:hidden}
.txt{display:flex;flex-direction:column;justify-content:space-between;padding:4px 40px 6px 0}
.txt b{font:500 16px/1.35 var(--font-text)}
.txt span{font-size:14px;font-weight:500;color:var(--accent)}
.go{position:absolute;right:8px;bottom:8px;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;
  background:color-mix(in srgb,var(--ink) 12%,transparent)}
```

<!-- v:surface.card/mat-card -->
### 4. Mat card

*Feeling: a framed print.*

The card works as a picture mat: the image sits inset on all four sides. Use it for blogs, case studies and galleries with strong art. Do not use it with weak images, since the frame draws attention to them.

Set the page one tone off the card, card radius 16, padding 8, image radius 8. Inner radius is outer minus gap, so `calc()` it. Put a hairline leader in the byline row. On hover Fly.io adds a faint tinted shadow and a keyline.

**Seen on** Zed Blog, Sword Health, Fly.io Blog. **Suits** mono-technical, soft-pastel, illustrated; editorial, health.

```css
body{background:var(--well)}
.card{--r:16px;--mat:8px;background:var(--bg);border-radius:var(--r);padding:var(--mat);
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 4%,transparent)}
.pic{aspect-ratio:5/3;border-radius:calc(var(--r) - var(--mat));overflow:hidden}
.body{padding:16px 16px 12px}
.meta{display:flex;align-items:center;gap:12px;font:500 11px/1 var(--font-text);letter-spacing:.04em;
  text-transform:uppercase;color:var(--ink-2);margin-bottom:12px}
.meta i{flex:1;height:1px;background:var(--line)}
.card h3{font:500 21px/1.28 var(--font-display);letter-spacing:-.012em;margin-bottom:8px}
```

<!-- v:surface.card/shell-and-well-card -->
### 5. Shell and well card

*Feeling: a tray holding the proof.*

Two nested layers. An outer card holds the claim, and an inset tinted well holds the evidence: seals, a tick list, a live component. Use it when a card needs to carry something more complex than text without a second border weight. Outer radius 16 to 24 with a hairline, well inset 8px at outer minus 8. Material's variant inverts the idea, with a stage on top in its own colour, its own bottom radius and the caption beneath. Loops repeats one shell for every feature and only swaps the body, which is the strongest version: the shell becomes the page's single system.

**Seen on** Loops, Lindy, Material 3, React, Canary. **Suits** warm-neutral, illustrated, soft-pastel, light-precision; saas, devtool, ai.

<!-- v:surface.card/tonal-card -->
### 6. Tonal card

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

**Seen on** Modern Treasury, Apple Design, Primer, Definitiv Digital, Apple iPhone, 12 sites in all. **Suits** light-precision, dark-precision, type-led, render-3d; finance, ai, devtool, saas.

<!-- v:surface.card/crop-bleed-card -->
### 7. Crop bleed card

*Feeling: you are looking through a window at something much bigger.*

Copy top-left, and a real interface that starts inside the card and runs off two edges. This is the card that most often separates a product company from a template, because a crop implies there is more. Use it for product features. Do not use it without a real interface to show.

Position the window absolutely so that it overshoots, round only the single visible corner, and let the card clip it. Keep the content dense all the way to the crop.

**Seen on** Meta AI, Affirm, Obsidian, Railway Docs, Hawl Design, 6 sites in all. **Suits** dark-precision, light-precision, warm-neutral, bold-colour; finance, ai, saas, agency.

```css
.card{position:relative;overflow:hidden;background:var(--surface);border-radius:12px;
  box-shadow:inset 0 0 0 1px var(--line);padding:24px;height:548px}
.card h3{font:600 24px/1.2 var(--font-display);letter-spacing:-.012em;margin-bottom:8px}
.card p{font-size:20px;line-height:25px;color:var(--ink-2);max-width:25em}
/* Overshoots right and bottom. Only the visible corner is rounded. */
.win{position:absolute;left:48px;top:188px;width:760px;height:560px;background:var(--bg);
  border-radius:12px 0 0 0;box-shadow:inset 0 0 0 1px var(--line);padding:24px 32px}
@media(max-width:760px){.card{height:480px}.card p{font-size:17px;line-height:23px}.win{left:24px;top:190px}}
```

<!-- v:surface.card/caption-outside-tile -->
### 8. Caption outside tile

*Feeling: a gallery wall.*

A pure image tile with its caption outside on the page ground. Apple sets 372px tiles at radius 28, no border, the device clipped by the tile, and the caption inset 15px with a bold lead-in and a muted sentence. Use it when the picture is strong enough to stand alone and you want a carousel. Inset the caption slightly past the tile edge, because a rounded corner makes flush text look misaligned.

**Seen on** Apple Intelligence. **Suits** light-precision; ai.

<!-- v:surface.card/photo-overlay-tile -->
### 9. Photo overlay tile

*Feeling: a magazine feature.*

A full-bleed photo with text on it. Radius 0 to 12, gaps 12 to 24. Put scrim only where the text sits: a bottom gradient to 50 or 60 percent black, or a side wash. The best version takes its scrim from the image, as DJI does by fading each photo's sky upward into a flat field drawn from that sky, so the text gets a clean ground that looks native. Use it for commerce, culture and anything with real photography. Never lay a uniform dark overlay across a whole photo, since that flattens the picture to protect three words.

**Seen on** Stone Island, reMarkable, Dalco, Accel, Fenriz Gym, 12 sites in all. **Suits** warm-neutral, photo-led, mono-technical, render-3d; brand, finance, ecommerce, devtool.

<!-- v:surface.card/media-over-tinted-body -->
### 10. Media over tinted body

*Feeling: a printed postcard.*

Image or colour band on top, tinted body beneath, in a colour taken from the brand or the image. Radius 12 to 24, gap 20. Use it for health, consumer and education carousels, and let the row bleed off the edge with the next card peeking. Stripe's Climate version clips the photo's bottom edge at about -6 degrees, which carries the hero's diagonal down the page.

**Seen on** Stripe Climate, Nurx, Therabody, Anthropic Docs, The Philadelphia Orchestra, 6 sites in all. **Suits** warm-neutral, gradient-light, photo-led, bold-colour; culture, finance, health, ecommerce.

<!-- v:surface.card/grain-paper-tile -->
### 11. Grain paper tile

*Feeling: a physical sample of something.*

A warm off-white tile with fine noise, which reads as paper rather than as a div. Use it for pricing, feature tiles and warm AI brands. Avoid it on dense layouts, where noise turns to dirt.

Set a name top-left, a price or prompt bottom-left, and leave the middle empty. Two different grains are in play. Paper is a soft, low-contrast mottle you almost cannot see. A colour mesh takes a coarse, high-contrast monochrome speckle, and that speckle is what stops it reading as a stock gradient. One tile in the row may swap paper for mesh to mark the pick.

**Seen on** Comet, ElevenLabs Pricing, Otter, Webflow Pricing. **Suits** warm-neutral, light-precision, gradient-light; ai, saas.

```css
:root{
 --paper:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
 --speck:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='3.2' intercept='-1.1'/%3E%3CfeFuncG type='linear' slope='3.2' intercept='-1.1'/%3E%3CfeFuncB type='linear' slope='3.2' intercept='-1.1'/%3E%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.tile{position:relative;isolation:isolate;height:200px;padding:20px;border-radius:16px;overflow:hidden;
  display:flex;flex-direction:column;justify-content:space-between;
  background:color-mix(in srgb,var(--ink) 5%,var(--bg));
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 6%,transparent)}
.tile::after{content:"";position:absolute;inset:0;z-index:-1;background:var(--paper);opacity:.5;mix-blend-mode:soft-light}
.tile.pick::after{background:var(--speck);opacity:.42;mix-blend-mode:overlay}
```

Give the pick tile a mesh made from your own accent colours, built from two or three overlapping `radial-gradient`s.

<!-- v:surface.card/figure-led-card -->
### 12. Figure led card

*Feeling: proof, not promise.*

A card whose subject is a number. For plans, Attio's anatomy is a good template: 24px padding, 20/500 name, 40/600 price, 12px tag at radius 6, 13px billing note, 14/600 audience line, three ticks at 30px pitch, 36px full-width button. For proof, Sourcegraph sets a mono descriptor, a 48px figure and an 18px caption anchored low, with faint glyph noise in one corner. Use tabular figures and align them across the row. Avoid a row of three identical stat cards with an icon each, which is the single most common generated section.

**Seen on** Attio Pricing, Sourcegraph, Stripe Billing, Drizzle, Hugging Face Pricing, 10 sites in all. **Suits** light-precision, dark-precision, warm-neutral, bold-colour; devtool, saas, education, finance.

<!-- v:surface.card/colour-block-card -->
### 13. Colour block card

*Feeling: bright and sure of itself.*

Flat fills with no border or shadow. Each card owns one colour, and text is set in a dark tint of that card's own colour rather than black, which is the detail that makes it look designed. Use it where the brand is colour-led, on a neutral or black ground, three in a row at most. Framework runs whole chapters this way with panels at about 12px radius, one colour per product.

**Seen on** Framework, Hinge Health, 360Rides, CockroachDB, Cafe Vitesse. **Suits** light-precision, soft-pastel, warm-neutral, expressive; ecommerce, other, health, devtool.

<!-- v:surface.card/edge-signature-card -->
### 14. Edge signature card

*Feeling: an owned shape.*

An ordinary card with one owned edge: a chamfer, a corner bitten by a circle that holds an arrow, a folded corner, a coded top bar. Stripe Connect uses an 8px top bar, and Queen's University a 66px white circle holding a 46px arrow disc. This is one of the cheapest ways to get a signature, because the card can stay plain. Apply the same edge to every card and at least one other object, or it reads as a one-off. Avoid it if the page already has a signature.

**Seen on** Stripe Connect, Universally Speaking, Queen's University Library, Xin Cheng Foods, Vercel AI, 10 sites in all. **Suits** light-precision, bold-colour, warm-neutral, dark-precision; finance, health, agency, education.

<!-- v:surface.card/soft-shadow-card -->
### 15. Soft shadow card

*Feeling: friendly and familiar, and also the default.*

White, borderless, on a tinted ground, with a soft tinted shadow. It works, and it is overused. Our analysts scored it lowest of the card variants. Use it for one featured card, for objects that genuinely float, or when the brand wants warmth, and shape the shadow with the stacks in [Elevation](#elevation). Algolia's raised centre card, lifted about 90px and straddling a band change, shows how to earn it: the shadow means something because the card has moved.

**Seen on** Stripe Climate, Stripe Atlas, Tally, Docker, Algolia, 8 sites in all. **Suits** gradient-light, light-precision, illustrated, soft-pastel; saas, devtool, finance, ai.

### Mistakes that cheapen a card

Each of these appeared in my own first attempts or in the analysts' failure notes.

- **Fill, shadow and radius together.** My first hairline card had a white fill, a 1px border, a soft shadow and 12px corners on a grey page. It looked like an admin dashboard. Removing the fill and shadow and dropping to 3px made it match the real thing immediately. Most of the quality here is subtraction.
- **Objects off the baseline.** One extra line of copy pushed one field 24px lower than its neighbours. Pin the object with `margin-top:auto`.
- **Widows.** A one-word last line makes a card look unedited. Add `text-wrap:pretty` and a measure in em.
- **Equal radius on nested parts.** My first mat card had a 16px image in a 16px card, which leaves a fat wedge at each corner. Use outer minus gap.
- **Clip-art images.** Flat geometric SVG scenes read instantly as placeholder art, and CSS gradients in thumbnails read as missing images. If you have no real picture, use a variant that needs none, such as a hairline object card or a crop of real interface.
- **A window that never bleeds.** My first crop card ended exactly at the card edge with its right corner rounded and showing, and its content ran out after four rows. Overshoot the card by at least 40px, round only the visible corner, and keep content going past the crop.
- **Content that stops halfway.** A chart or list that fills only the top half of its frame reads as unfinished. Fill to the crop.
- **Grain you cannot feel, or a mesh with none.** My first grain tile was cold grey, and its mesh was smooth and looked like a stock gradient. Warm the base, and give the mesh a coarse speckle with `overlay`.
- **Icon in a tinted circle.** Every top site that uses an icon sets it plain, or in a square tile matched to the card's radius. A soft circle plus a pastel fill is the fingerprint of a template.
- **Lifting everything on hover.** Darken the border, or nudge the arrow. Save lift for cards that are links to something large.

## Panel

A panel is a section-sized surface. It changes the ground under an idea, and so it is how a long page gets rhythm. A page of white sections with one tone panel and one inverted panel has three beats, and that is usually all it needs.

What separates great from cheap is restraint with the ground and confidence with the contents. Great panels are inset from the viewport by a small exact margin, hold one idea, and let something run off an edge. Cheap panels are centred boxes at container width with a heading, a sentence and a button, stacked one after another in different pastel fills.

Measured ranges: width 1024 to 1400px, inset 12 to 36px from the viewport when not at container width, radius 8 to 40 with most at 12 to 28, padding 34 to 120, height 406 to 640px.

<!-- v:surface.panel/tonal-feature-panel -->
### 1. Tonal feature panel

*Feeling: a clean room with one thing in it.*

The workhorse. One tone step, no border, no shadow. Either a single centred statement, as on Apple at 1260x622, radius 28, about 120px padding, or left copy with product UI running off an edge, as on Notion. Use it to host your most important feature. Inset it 24px from the viewport on wide layouts, or use container width.

**Seen on** Apple Intelligence, Notion Calendar, Factory, Noxus, Patricia Ordoñez, 7 sites in all. **Suits** light-precision, illustrated, gradient-light, soft-pastel; ai, saas, portfolio, food-drink.

```css
.panel{position:relative;overflow:hidden;max-width:1024px;height:640px;margin:0 auto;
  background:var(--surface);border-radius:12px;padding:32px 34px}
.panel h3{font:700 18px/1.3 var(--font-display);margin-bottom:6px}
.panel p{max-width:500px;font-size:16px;line-height:24px}
/* Product runs off the left and bottom edges; only its free corner is rounded. */
.shot{position:absolute;left:0;right:56px;top:210px;bottom:-60px;border-radius:0 28px 0 0;overflow:hidden}
@media(max-width:760px){.panel{height:560px;padding:24px}.shot{right:0;top:230px}}
```

<!-- v:surface.panel/contrast-flip-panel -->
### 2. Contrast flip panel

*Feeling: the lights change.*

One panel in the inverse of the page. Nx puts a 1320px white diagram panel on near-black, and it becomes the brightest thing on a long dark page, so that is where the explanation goes. Scale sets a deep green statement panel beside an image tile. Use it once or twice on a long page, at the moment you most want attention. Leave most of the panel empty, because a flip already has all the emphasis it needs.

**Seen on** Scale AI, Sonder, Nx, Now Code, ON Makelaardij & Financieel Advies, 8 sites in all. **Suits** dark-precision, photo-led, warm-neutral, illustrated; ai, devtool, hospitality, local-business.

<!-- v:surface.panel/brand-slab -->
### 3. Brand slab

*Feeling: a banner with confidence.*

A full-width brand colour slab with small margins and a very large radius. Loom runs 1368px at radius 69 with a 60px white heading. A radius that large needs a width over 1000px, or the shape collapses into a pill. Use one per page, to break a white rhythm. Keep what it holds to two objects.

**Seen on** Loom, Outschool, Apple Design. **Suits** bold-colour, light-precision; saas, education, devtool.

<!-- v:surface.panel/sheet-stack -->
### 4. Sheet stack

*Feeling: layers of paper sliding over each other.*

The next section arrives as a sheet with 24 to 40px top corners, sliding over the last, or each section is a colour room with rounded corners on all four sides, separated by 40px of page. Hims gives each room a colour matched to its imagery and steps inner cards down to 24px. This is the best way to change colour between sections, since a colour change becomes a physical event rather than a flat band. It works unchanged on phones.

**Seen on** Hims, Loopcraft, Seed, Pomegranate Health, LaunchDarkly. **Suits** photo-led, light-precision, bold-colour, illustrated; health, agency, devtool.

<!-- v:surface.panel/inset-sheet -->
### 5. Inset sheet

*Feeling: the page sits on a desk.*

The whole page sits inside a frame. Mymind insets a white sheet about 36px over a full-bleed brand colour, so the colour survives as a thin gutter while tiles scroll. Elyx puts warm paper inside a 30px white frame that shrinks to 12px on phones. Perplexity Comet sets a dark image window inset 16px with up to 120px top corners and a 2 to 3px pale rim, like a porthole in paper. Use it to carry a brand colour without letting it fill the page.

**Seen on** mymind, Comet, Elyx. **Suits** warm-neutral, gradient-light; saas, ai.

<!-- v:surface.panel/nested-gutter-window -->
### 6. Nested gutter window

*Feeling: machined, one piece.*

Panes share a gutter instead of borders. Polar's shell is radius 16 with 4px padding around panes of radius 12: exactly outer minus gap, which is why it looks milled from one block. A 44px title row carries the logo left and a 12px muted note right. Sit it on a grainy plate with a deep negative-spread shadow. Use it on dark product pages. Replace tone with hairlines and it stops working, because the gutter is the design.

**Seen on** Polar, BILD, Discord, Meridian. **Suits** bold-colour, dark-precision, render-3d; saas, other.

```css
.win{--r:16px;--p:4px;background:var(--bg);border-radius:var(--r);padding:var(--p);
  box-shadow:0 16px 40px -12px rgba(0,0,0,.75),0 0 0 1px rgba(255,255,255,.03)}
.bar{height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;font-size:14px}
.bar small{font-size:12px;color:var(--ink-2)}
.panes{display:grid;grid-template-columns:1fr 1fr;gap:var(--p)}
.pane{background:var(--surface);border-radius:calc(var(--r) - var(--p));padding:24px;min-height:288px;
  display:flex;flex-direction:column;font-size:14px}
@media(max-width:760px){.panes{grid-template-columns:1fr}}
```

<!-- v:surface.panel/ruled-cell-panel -->
### 7. Ruled cell panel

*Feeling: one instrument with several dials.*

A single bordered panel split into cells by shared rules, with no gaps. Public runs 1280x512, 1px, radius 8, three cells at 40px padding, each with a 16px title, 14px copy, a link, a visual that fills the rest, and an outlined pill at the foot. Use it to hold two to four related claims as one object. The visual may break out of the padding toward the rules, which is what stops it feeling boxed.

**Seen on** Public, Attio, Raycast Pricing, Neon Pricing, FWA Wire. **Suits** light-precision, dark-precision, expressive; saas, finance, editorial.

```css
/* Grid gap on a line-coloured background gives shared, undoubled rules. Cells must be opaque. */
.panel{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-strong);
  border:1px solid var(--line-strong);border-radius:8px;overflow:hidden}
.cell{background:var(--bg);height:512px;padding:40px;display:flex;flex-direction:column}
.cell h3{font:500 16px/1.3 var(--font-text);letter-spacing:-.01em;margin-bottom:8px}
.cell p{font-size:14px;line-height:19.5px}
.viz{flex:1;margin:0 -18px;display:flex;align-items:center;justify-content:center;min-height:0}
@media(max-width:760px){.panel{grid-template-columns:1fr}.cell{height:auto;padding:28px}}
```

If `--line` is translucent, `--bg` on the cells keeps it correct, because the lines are the gaps.

<!-- v:surface.panel/product-stage -->
### 8. Product stage

*Feeling: a showroom.*

A large neutral panel with an oversized product cropped by its edge. Fairphone uses 1400x580, radius 40, a 20px gutter, and a white info card at the same radius overlapping the render. Nurx dissolves a photo by gradient into a flat colour drawn from itself, so copy sits on the fade with no visible edge. Casper keeps frost only at the panel's corners so that copy has flat ground. Use it for physical products.

**Seen on** White Cube, Fairphone, Casper, Nurx, Foster + Partners. **Suits** photo-led, light-precision, bold-colour; ecommerce, culture, health, architecture.

<!-- v:surface.panel/cut-silhouette-panel -->
### 9. Cut silhouette panel

*Feeling: considered, slightly architectural.*

The outline carries the idea. Baseten cuts white blocks into its hero art on 12px gaps, so the art's edge steps around the content rather than sitting behind it. Allen AI cuts a 36px step from one corner. Talkspace steps a panel in twice, with 4px rounded joins. Round every join, even when the outer corner is sharp, because a raw 90-degree notch looks like a clipping error. Keep every other surface plain, and repeat the cut on at least one more object.

**Seen on** Baseten, Ai2, Talkspace, Xin Cheng Foods, SUTÉRA, 6 sites in all. **Suits** light-precision, bold-colour, soft-pastel, warm-neutral; ai, health, food-drink, portfolio.

<!-- v:surface.panel/os-window -->
### 10. OS window

*Feeling: the site is a piece of software.*

A section presented as an application window. PostHog uses about 1140x800, radius 20, two 14px hairline controls top right, internal scroll, 8px below a 40px global bar. It uses no traffic lights, and that restraint is the skill: enough chrome to sell the idea and no more. Svix's screwed plate is the skeuomorphic extreme. Suits playful developer tools. Never use it on a serious finance or health page.

**Seen on** Svix, PostHog Handbook, PostHog Pricing, PostHog Docs, Desktop.fm, 6 sites in all. **Suits** illustrated, expressive, light-precision, render-3d; devtool, saas, other, portfolio.

<!-- v:surface.panel/floating-utility -->
### 11. Floating utility

*Feeling: a small object left on the page.*

A small fixed object that hugs its content. International Magic's caption tray is 56px tall, with width set by the text, so it changes from about 90 to 180px as projects change. Loops replaces the chat bubble with a 160x156 note carrying a calendar icon and a serif title. Anthropic parks a 384x234 news card 24px from the corner. Use one per page. Make it dismissible, and keep it off the content on phones.

**Seen on** International Magic, ACME, Loops, Claude, Joby, 16 sites in all. **Suits** bold-colour, warm-neutral, light-precision, photo-led; saas, agency, finance, ai.

<!-- v:surface.panel/crop-mark-frame -->
### 12. Crop-mark frame

*Feeling: a drawing sheet.*

No fill and no border, only four 1px L-brackets of 40px around a statement. The page stays open, and the brackets do the work of a card. Good for one manifesto line on a technical page.

**Seen on** Telkom-OT. **Suits** mono-technical; other.

<!-- v:surface.panel/split-tone-stage -->
### 13. Split-tone stage

*Feeling: colour as architecture.*

A full-bleed band split 50/50 into two tints of one hue, with cards and devices straddling the seam and overlapping the section above. Lemon Squeezy repeats it in pink, cyan and green. It works because the seam gives flat colour a place for depth without any shadow.

**Seen on** Lemon Squeezy, BCR Law LLP. **Suits** bold-colour; saas, local-business.

<!-- v:surface.panel/editorial-module -->
### 14. Editorial module

*Feeling: a boxed feature in a magazine.*

A self-contained 300px module within a dense grid: caps title, thumbnail, status, a full-width accent action, a 4px rule to close. Monocle's radio box is the reference. It needs a dense grid around it to look at home.

**Seen on** Monocle. **Suits** type-led; editorial.

<!-- v:surface.panel/true-ratio-placeholder -->
### 15. True-ratio placeholder

*Feeling: nothing, which is the point.*

Unloaded images hold their true aspect in flat grey and then fade in. Nothing shimmers and nothing shifts. Give every image an explicit `aspect-ratio`.

**Seen on** Herzog & de Meuron. **Suits** mono-technical; architecture.

### Mistakes that cheapen a panel

- **Pastel sections in sequence.** Three stacked centred boxes in lilac, mint and peach read as a template gallery. One ground per page, plus one flip.
- **Panels at exactly container width with equal padding all round.** Let something leave the box.
- **Hard bands.** A colour change as a flat full-bleed band with no overlap looks like a slide change. Use a sheet.
- **Empty floats.** My first calendar popover was a fixed 320px tall with content for half of it. A float must hug its content, or it reads as a mock.
- **A device frame with nothing in it.** Fake chrome around a blank or skeleton screen is worse than no chrome.
- **Sticking a window to its padding.** A UI shot sitting at equal inset on all four sides of a panel looks like an image in a box. Anchor it to an edge and crop it.

## Bento

A bento is one surface made of unequal parts. It must show several kinds of proof at once while still reading as a single object. Most generated bentos fail because they are not a bento at all. They are a card grid with one wide card.

### What a real bento has

These ten were checked against their frames.

| Site | First row | Next row | Gap | Radius |
|---|---|---|---|---|
| Ramp | 644 + 644 | 421 + 421 + 421 | 24 | 12 |
| Lithic | 702 + 458 | 380 + 780 | 24 | 24 |
| CleanShot | 584 + 280 + 280 | 280 + 280 + 584 | 24 | 20 |
| Make | 584 + 276 + 276 | 276 + 584 + 276 | 32 | 16 |
| Upstash | 792 + 384 | 588 + 588 | 24 | 35 |
| Expo | 524 + 740 | 362 + 362 under the 740 | 16 | 40 |
| Supabase | 538 + 263 + 263 | 263 × 4 | 12 | 16 |
| Framer | 400 + 800 | 400 + 400 + 400 | 1px rule | 20 |
| Cal.com | 2:1 | 1:2 | 16 | 22 outer, about 16 inner |
| Bauhaus Clock | 1340 | 877 + 413, then 413 + 877 | 50 | 30 |

Seven things recur, and a generated bento usually has none of them.

1. **Seams that do not line up.** Row one splits at 60 percent, and row two splits at 33. Ramp and Lithic share no seam between rows at all. Three-column systems such as CleanShot and Make let one seam carry through and break the other. If every seam continues, you have built a grid of cards.
2. **Different evidence in every tile.** One holds an interface fragment, one a seal, one a number, one a logo row. If you can swap the content of two tiles without noticing, they are not doing different work.
3. **Copy never stands in for evidence.** Lithic has a title and evidence with no paragraphs. Ramp has a two-tone title. CleanShot does run a few lines of body, but every tile still holds a product fragment. A sentence in an otherwise empty tile is a card with a caption.
4. **One fixed text anchor.** Same inset, same title size, same top-left position in every tile, whatever the content does. Variety comes from the evidence, and the anchor holds it together.
5. **Art that leaves.** Fragments anchor to a corner and run off the edge. Contour art comes in from a corner and stays clear of the title. Cal.com is the valid exception: a small object centred with air around it inside a well.
6. **Gap smaller than padding.** Gaps of 8 to 24 against padding of 24 to 40. The tiles read as one object, and the outer page margin is far larger than any gap.
7. **One tile recipe.** Fill, radius, gap and title never change. Colour-owned bentos change only the fill, and they keep it in one family.

Build on a 12-column grid, use 4 to 7 tiles, and vary row heights by 10 to 20 percent. At phone width, go to one column, drop fixed heights, keep the tile order the same as the reading order, and keep interface fragments at desktop width so they crop.

<!-- v:surface.bento/tonal-squircle-bento -->
### 1. Tonal squircle bento

*Feeling: soft, confident, product-first.*

Borderless tiles one tone off the page. This is the default choice for modern product pages. Expo's 40px corners on a 2 percent fill read friendly. Lithic's 24px on warm paper reads trustworthy. Increase nests white interface with its own 1px hairline at radius 12 inside panels of radius 20, and lets it run off the panel.

**Seen on** Expo, Increase, Lithic, Svix, neon Switzerland, 6 sites in all. **Suits** light-precision, bold-colour, gradient-light; finance, devtool.

```css
.bento{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
.tile{position:relative;overflow:hidden;background:var(--surface);border-radius:32px;padding:36px;
  height:320px;display:flex;flex-direction:column}
.a{grid-column:span 7}.b{grid-column:span 5}
.c{grid-column:span 4;height:280px}.d{grid-column:span 8;height:280px}  /* opposing splits */
.tile h3{font:500 24px/1.2 var(--font-display);letter-spacing:-.015em;max-width:15em}
.tile h3 em{font-style:normal;color:var(--ink-2)}                      /* two-tone title */
.foot{margin-top:auto}
/* Interface fragment anchored to one corner, running off two edges */
.ui{position:absolute;left:36px;right:-40px;top:124px;bottom:-40px;background:var(--bg);border-radius:12px;
  box-shadow:0 0 0 1px var(--line),0 12px 32px -12px color-mix(in srgb,var(--ink) 18%,transparent)}
/* Contour art comes in from a corner, well clear of the title */
.art{position:absolute;right:-150px;top:-250px;width:620px;height:620px;color:var(--ink-3);opacity:.6}
@media(max-width:760px){.bento{grid-template-columns:1fr}.a,.b,.c,.d{grid-column:auto;height:auto;min-height:280px}
  .a{min-height:340px}.tile{padding:24px}
  .ui{left:24px;right:auto;width:520px;top:132px}   /* keep desktop width and let the tile crop it */
  .art{right:-340px;top:-300px;opacity:.4}}
```

<!-- v:surface.bento/hairline-tile-bento -->
### 2. Hairline tile bento

*Feeling: precise, and a little more technical.*

Add a 1px line to the tile. Ramp sets a warm fill with a line about 20 points darker, two tiles over three, with a 36px white square arrow button top right. Supabase uses white tiles and a 16px radius on a 12-column 1088px grid, and sets the key phrase of each sentence in full ink with the rest muted, which makes the tile skimmable. Use it for finance and developer tools.

**Seen on** Ramp, Supabase, Huel, HYDROFLOW. **Suits** light-precision, warm-neutral, render-3d; finance, ecommerce, devtool, food-drink.

<!-- v:surface.bento/double-rim-bento -->
### 3. Double rim bento

*Feeling: objects displayed on trays.*

Every tile is a shell and a well, and the interface sits small in the well with air around it. Cal.com's shell is radius 22 with 8 padding, and its well is radius 14 to 16. Titles go in the shell beneath. Use it when your product is made of small, clear components. The discipline is size: keep the object much smaller than the well.

**Seen on** Cal.com, Kiro, SC Program. **Suits** light-precision, bold-colour, dark-precision; saas, ai, education.

```css
.bento{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.span2{grid-column:span 2}
.shell{--r:22px;--p:8px;border-radius:var(--r);padding:var(--p);box-shadow:inset 0 0 0 1px var(--line);
  display:flex;flex-direction:column}
.well{height:248px;border-radius:calc(var(--r) - var(--p));background:var(--well);display:grid;place-items:center;padding:24px;
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 3%,transparent)}
.cap{padding:20px 12px 18px}
.cap h3{font:600 18px/1.3 var(--font-display);letter-spacing:-.01em;margin-bottom:4px}
.cap p{font-size:15px;line-height:22px;color:var(--ink-2)}
.ui{background:var(--bg);border-radius:12px;padding:14px 16px;font-size:14px;
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent),0 1px 2px color-mix(in srgb,var(--ink) 5%,transparent)}
@media(max-width:760px){.bento{grid-template-columns:1fr}.span2{grid-column:auto}}
```

Alternate 2:1 and 1:2 rows.

<!-- v:surface.bento/ruled-no-gap-bento -->
### 4. Ruled no-gap bento

*Feeling: a control panel.*

One frame split by rules, with no gaps and no fills. Framer's cells are black on black with only the rule to separate them. Render frames two columns in light lines with about 100px side padding and clips interface at the cell bottom. Customer.io's hovered cell lifts its fill one step and shows a 40px arrow circle. The technique is a 1px grid gap on a line-coloured background, and a mask that fades the interface to the ground.

**Seen on** Render, Framer, Customer.io, jemmic. **Suits** light-precision, dark-precision; saas, devtool.

```css
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-strong);
  border:1px solid var(--line-strong);border-radius:20px;overflow:hidden}
.c{position:relative;background:var(--bg);height:240px;overflow:hidden}
.tall{height:360px}.w2{grid-column:span 2}
.c a{position:absolute;left:24px;bottom:22px;font:400 18px/1 var(--font-text)}
/* The fragment must reach zero before the label, or text collides */
.fade{position:absolute;inset:0;
  -webkit-mask-image:linear-gradient(to bottom,#000 45%,transparent 86%);
  mask-image:linear-gradient(to bottom,#000 45%,transparent 86%)}
@media(max-width:760px){.grid{grid-template-columns:1fr}.w2{grid-column:auto}}
```

<!-- v:surface.bento/gradient-per-tile-bento -->
### 5. Gradient per tile bento

*Feeling: colourful product marketing.*

Each tile gets one gradient from one family. CleanShot's tiles mix dark plum, pale lilac and blue, with a product fragment cropped by the bottom or right edge and mirrored rows. Affirm places a radial bloom inside dark cards of unequal height. Keep gradients vertical or radial, and keep their hues in one family, or the grid becomes a paint chart.

**Seen on** CleanShot X, Affirm, Sierra, Bitnomi, Make, 6 sites in all. **Suits** gradient-light, dark-precision, photo-led, bold-colour; saas, finance, ai.

<!-- v:surface.bento/colour-owned-bento -->
### 6. Colour owned bento

*Feeling: bold and cheerful.*

Each tile owns one flat fill. Bauhaus Clock runs 50px gaps and 30px corners, with turquoise, a watercolour photo, white and green. Hims runs a tone-on-tone bento, terracotta on a lighter terracotta room. The trap is a rainbow, so hold the fills to one temperature or one hue.

**Seen on** Bauhaus Clock, Hims, Energen Digital, Sparklefilth, Swirple. **Suits** expressive, light-precision, photo-led, bold-colour; saas, health, agency, ecommerce.

<!-- v:surface.bento/mixed-media-bento -->
### 7. Mixed media bento

*Feeling: a report on real-world impact.*

Photo tiles and solid data tiles share one rhythm. Fairphone mixes a mint data tile, a photo with a white figure, and a wide lifestyle photo, all at radius 40 with 16px gaps. Use it for consumer, public and impact pages. The same title anchor across photo and solid tiles is what binds them.

**Seen on** Fairphone, Queen's University Library. **Suits** photo-led, bold-colour; ecommerce, education.

<!-- v:surface.bento/dark-tilted-device-bento -->
### 8. Dark tilted device bento

*Feeling: energetic hardware.*

Charcoal tiles with device and widget crops tilted about 6 degrees and bleeding past the base. Tilt is the only flourish, so the type stays upright.

**Seen on** Weekstack. **Suits** warm-neutral; saas.

<!-- v:surface.bento/masonry-feed-bento -->
### 9. Masonry feed bento

*Feeling: a living community.*

Four masonry columns of note cards whose heights come from real content. Substack is the reference. Because heights are honest, it never looks gridded. Use real posts.

**Seen on** Substack. **Suits** gradient-light; saas.

### Mistakes that cheapen a bento

- **Aligned seams.** My first attempt was two-plus-one over one-plus-one-plus-one, and the seam ran straight through. It read as a table. Oppose the splits.
- **Captions on empty boxes.** Same attempt: a title, a sentence, and nothing else in five tiles. A bento without evidence is the worst version of a card row.
- **Equal row heights.** Use two heights. One height makes the page feel stamped.
- **Art colliding with the title.** My contour rings ran through the headline, and they were centred, so they looked like a radar. Bring art in from a corner, warp it, and keep it out of the text zone.
- **A fade that does not reach zero.** In my ruled version a fading form still showed text behind the label. End the mask well above the label.
- **Gradient circles as avatars.** They read as placeholders instantly. Use real faces or plain initials.
- **Icons as the evidence.** A 48px icon in a big tile is an empty tile with a sticker on it.
- **Reflowing a fragment on phones.** My first phone pass let an interface table shrink to the tile, and its columns collided. Keep the fragment at its desktop width and let the tile crop it. A cropped interface looks deliberate, and a squeezed one looks broken.
- **Too many tiles.** Past seven, it is a directory.

## Radius system

A radius system decides how soft the brand is and what is clickable. What separates great from cheap is that great systems use few values, assign each a job, and nest them correctly. Cheap ones use `rounded-xl` on everything, so that a 12px image sits inside a 12px card inside a 12px panel.

Gold sites put large surfaces at 12 (8 to 20) and medium at 9 (6 to 18). Most sites measure five or fewer non-pill values, and the best use three plus a pill.

### The nesting rule

When one rounded box sits inside another, the two corners should share a centre.

```
inner radius = outer radius − gap
```

These values were fitted from real corners as well as read from the code, and they sit within a pixel or two of the rule. That is why these interfaces feel milled rather than assembled. Designers sometimes go a pixel or two softer than the formula on large gaps, as Cal.com does. Never go harder.

| Site | Outer | Gap | Inner |
|---|---|---|---|
| Polar | 16 | 4 | 12 |
| Framer | 25 | 10 | 15 |
| Bauhaus Clock | 30 | 5 | 25 |
| Meta AI, dark media ring | 42 | 8 | 34 |
| Cal.com | 22 | 8 | about 16, a touch softer than the rule |

When the gap is large against the radius, the formula goes to zero or below. Then floor it at the next step of your scale, usually 4 or 8, and do not pretend it is concentric: at a gap of half the outer radius or more, the corners are too far apart for the eye to compare. Pills stay pills.

```css
.shell{--r:24px;--gap:8px;border-radius:var(--r);padding:var(--gap)}
.tray{--r2:calc(var(--r) - var(--gap));border-radius:var(--r2);padding:12px}     /* 16 */
.item{border-radius:max(calc(var(--r2) - 12px),8px)}                             /* 4 by formula, floored to 8 */
.go{border-radius:999px}                                                         /* controls keep their own rule */
```

<!-- v:surface.radius-system/concentric-ladder -->
### 1. Concentric ladder

*Feeling: precise and soft at once.*

The rule above, applied at every level. Claude's pricing runs 24, 14, 8, 4. CleanShot runs 20 and 14. Bauhaus Clock steps 30 to 25 with a 5px gap. Use it for any interface with cards inside cards.

**Seen on** Cal.com, CleanShot X, Bauhaus Clock, Increase, Nuro, 7 sites in all. **Suits** light-precision, gradient-light, photo-led, warm-neutral; saas, finance, brand, ai.

<!-- v:surface.radius-system/container-vs-control -->
### 2. Container versus control

*Feeling: instantly readable.*

Two radii with two meanings. Containers small, controls a full pill. Cursor's pricing measures only 4px boxes and full pills. Linear sets pills on all buttons and chips, about 12 on windows, about 8 on tiles and about 4 on inline tags, and the two sets never cross. Shape alone says what is clickable, with no colour needed. This is the most useful system to reach for by default. Pair 4 with a pill for a sharp feel, 12 with a pill for a soft one.

**Seen on** Cursor Pricing, Linear, Customer.io, Apple Vision Pro, Analogue, 6 sites in all. **Suits** dark-precision, warm-neutral, light-precision, photo-led; saas, ai, brand, ecommerce.

```css
:root{--r-box:4px;--r-ctl:999px}
.card{border-radius:var(--r-box)}
.btn,.tab,.tag{border-radius:var(--r-ctl)}
```

<!-- v:surface.radius-system/role-tiers -->
### 3. Role tiers

*Feeling: organised.*

Each role gets one value and there is a gap between tiers. Expo measures 40 on section cards, 16 on inner cards, 12 on chips and 9999 on buttons, with nothing between. New Material uses 28 on about 40 elements, 10 on chips, and full round on icon buttons. Radius grows with surface area, roughly doubling per tier. On Anthropic's news page, sharp media beside soft controls separates content from interface.

**Seen on** New Material, Expo, Apple Intelligence, Anthropic News, ECI, 8 sites in all. **Suits** light-precision, warm-neutral, photo-led, gradient-light; ai, devtool, agency, editorial.

<!-- v:surface.radius-system/near-square-scale -->
### 4. Near-square scale

*Feeling: an instrument.*

Two tight steps, nothing over 8. Render measures 2px on about 100 elements, and International Magic uses 3px on all 47 rounded elements. The corner is barely visible, yet it stops frames reading as raw rectangles. It suits finance, infrastructure and developer tools.

**Seen on** Zed Blog, Render, Modern Treasury, International Magic, Soundsensing, 7 sites in all. **Suits** light-precision, mono-technical, photo-led, dark-precision; devtool, editorial, finance, agency.

<!-- v:surface.radius-system/zero-radius -->
### 5. Zero radius

*Feeling: fashion, gallery, investor.*

Nothing is rounded, and at most one round element is left alone, like Polestar's 48px help button. Structure comes from rules, gutters and fill steps. Baseten shows it works in a modern product too, softening with pastel fills and pixel icons. It needs excellent photography or type, since nothing softens the page.

**Seen on** Greylock, Kinfolk, Polestar, Baseten, X8 Eyewear, 7 sites in all. **Suits** photo-led, light-precision, mono-technical; fashion, finance, editorial, brand.

<!-- v:surface.radius-system/oversize-scale -->
### 6. Oversize scale

*Feeling: friendly, confident, consumer.*

Radius doubles with size. Monzo measures 16, 32, 64, 128, and pill buttons. Loom's 69px slabs hold 42px wells. It needs wide elements. Joby uses about 160px on the bottom corners of a hero frame, turning a photo into an object.

**Seen on** Joby, Monzo, Loom. **Suits** bold-colour, photo-led; brand, finance, saas.

<!-- v:surface.radius-system/outer-corners-only -->
### 7. Outer corners only

*Feeling: one object made of many pictures.*

Square tiles in a wrapper clipped at radius 30, with a 4px page-coloured gap acting as a thin cross. Inner corners stay sharp. Good for galleries of equal images.

**Seen on** Lazy Eight. **Suits** photo-led; agency.

### Mistakes that cheapen a radius system

- **One radius poured over every level.** I rendered it next to the correct version: at 16 everywhere, thumbnails turn into blobs and the corners pinch. Use outer minus gap.
- **Rounded card, square button,** or a button radius that sits between a pill and the card. Pick a rule for controls.
- **Inner greater than outer.** It looks like a mistake because it is one.
- **A big radius on a small thing.** A 24px radius on a 60px chip makes a capsule by accident. Radius scales with area.
- **Radius on an element that bleeds.** Round only corners that are visible. A rounded corner at a crop edge shows a sliver of background.
- **Six near-identical values.** 10, 12, 14 and 16 on one page read as drift, not as a system.

## Border treatment

A border draws an edge. Done well, it is the cheapest structure a page can have. What separates great from cheap is the alpha, the tint, and whether the lines meet. Great hairlines are a translucent tint of the page's own ink, so they look like the page rather than like an added grey. They run on a real grid, and they join. Cheap ones are `#e5e7eb` on everything, on a warm page, at 2px, with lines that stop short of each other.

Measured: 1px on 93 percent of bordered boxes. Alpha 0.08 at the median, 0.05 to 0.18 on dark, and up to 0.3 on bold colour. Tint the line with the page's ink: Speakeasy's lines are a warm near-black at 12 percent, not grey, and Resend's are a cool blue-white at 19 percent, which keeps them from looking dirty on pure black.

Use `border` when the box needs to take up space. Use `box-shadow:0 0 0 1px` or an inset ring when lines must not affect layout, or on translucent fills, where a border overlaps the background and shows a doubled edge. Cal.com sets many of its lines as inset rings for that reason.

<!-- v:surface.border-treatment/hairline-only -->
### 1. Hairline only

*Feeling: rigorous.*

All structure is line, and no page element has a shadow. On Codeium, shadow appears only inside the app mock, so depth belongs to the product. Vercel's pricing has 1px containers at about 8 percent, radius 2, and none anywhere. It demands a precise grid, because every misalignment is visible.

**Seen on** 099, Jasper, Devin Desktop (codeium.com redirect), Vercel Pricing, Resend Changelog, 7 sites in all. **Suits** light-precision, bold-colour, dark-precision; ai, devtool, other, health.

<!-- v:surface.border-treatment/page-rails -->
### 2. Page rails

*Feeling: everything is cut from one sheet.*

Two verticals run the whole page at the container edges, and horizontal rules snap onto them. Sourcegraph's rails at x=144 and x=1295 invert from dark grey on black to black on white as sections change. Speakeasy adds a 6px hollow square at each outer corner, with rules overshooting 40px and fading out. Zed adds diamond nodes and a hatched band. This is the strongest quiet signature for a developer tool, and since Speakeasy, Bun, Attio and Zed all use it, make your node shape your own.

**Seen on** Sourcegraph, Bun, Speakeasy, Telkom-OT, GitHub Universe '24. **Suits** mono-technical, dark-precision, light-precision; devtool, other, culture.

```css
.rule{position:relative;height:1px;background:var(--line-strong)}
/* Overshoot: the rule leaves the frame and fades */
.rule::before,.rule::after{content:"";position:absolute;top:0;width:48px;height:1px}
.rule::before{right:100%;background:linear-gradient(to left,var(--line-strong),transparent)}
.rule::after{left:100%;background:linear-gradient(to right,var(--line-strong),transparent)}
/* The node sits on the intersection and is filled with the page colour, so the line appears to pass through it */
.node{position:absolute;top:-3px;width:7px;height:7px;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line-strong)}
.node.l{left:-3px}.node.r{right:-3px}
.cells{display:grid;grid-template-columns:repeat(3,1fr);border-inline:1px solid var(--line)}
.cell{padding:48px 40px;border-left:1px solid var(--line)}.cell:first-child{border-left:0}
@media(max-width:760px){.rule::before,.rule::after{display:none}  /* overshoot would leave the viewport */
  .cells{grid-template-columns:1fr}.cell{border-left:0;border-top:1px solid var(--line);padding:32px 20px}}
```

<!-- v:surface.border-treatment/crop-marks -->
### 3. Crop marks

*Feeling: a drawing sheet.*

The frame is implied by its corners. Struck uses 12px L ticks 3px thick, with colour per section. Cloudflare's docs use 12px outlined squares like selection handles. Sequoia detaches 1px rails 16px off each tile, and they never meet. Apply to section containers only.

**Seen on** Struck, Sequoia, Cloudflare Docs. **Suits** warm-neutral, light-precision; ai, devtool, finance.

<!-- v:surface.border-treatment/specular-edge -->
### 4. Specular edge

*Feeling: a lit object on a dark desk.*

A dark card with a thin line of light along its top. We measured Resend closely. The border is 1px at about 19 percent of a cool white. The highlight is a second 1px line just inside the top edge, spanning about the middle half, peaking near 30 percent, fading both ways, with a faint radial glow below it. React Email uses the same idea. Affirm puts the highlight on a different edge per card, so borders read as moving light. Use on dark pages only, on every card, from one consistent direction.

**Seen on** Resend, Affirm, React Email. **Suits** dark-precision; devtool, finance.

```css
.card{position:relative;overflow:hidden;border-radius:24px;border:1px solid color-mix(in srgb,var(--ink) 19%,transparent);
  padding:32px;background:radial-gradient(70% 150px at 50% 0,color-mix(in srgb,var(--ink) 7%,transparent),transparent 100%)}
.card::before{content:"";position:absolute;left:25%;right:25%;top:0;height:1px;
  background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--ink) 55%,transparent),transparent)}
```

<!-- v:surface.border-treatment/recommended-keyline -->
### 5. Recommended keyline

*Feeling: a quiet nudge.*

Mark the chosen plan with the same card, a thin accent keyline, a faint halo and the only filled button in the row. No ribbon, no scale-up, no fill change. Attio's halo measures `0 0 0 4px` at about 10 percent accent. Warp's outline is 2px and fades from transparent at the top to strongest at the base. Replit shifts all the plan's text toward the outline's hue. It looks expensive because the page trusts you to notice.

**Seen on** Warp Pricing, Attio Pricing, Replit Pricing, Tally. **Suits** light-precision, warm-neutral, illustrated; devtool, saas.

```css
.plan{border-radius:20px;box-shadow:inset 0 0 0 1px var(--line-strong);padding:24px;display:flex;flex-direction:column}
.plan.rec{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 45%,transparent),
  0 0 0 4px color-mix(in srgb,var(--accent) 9%,transparent)}
.btn{margin-top:auto;height:36px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line-strong)}
.rec .btn{background:var(--ink);color:var(--bg);box-shadow:none}
```

<!-- v:surface.border-treatment/double-frame -->
### 6. Double frame

*Feeling: printed matter.*

Two lines around one object. Dishoom uses a 2px outer line, a 4px paper gap and a 1px inner line, which reads as a menu. Cloudflare Workers pairs a solid inner line with a dashed outer offset 5px to mark a selected object. Use on a few chosen objects, in brands with a print history.

**Seen on** Dishoom, Cloudflare Workers, Michelle Kaye - Fine Arts. **Suits** warm-neutral, light-precision; food-drink, devtool, portfolio.

<!-- v:surface.border-treatment/line-style-as-meaning -->
### 7. Line style as meaning

*Feeling: a code you pick up without being told.*

Line style carries data. Better Auth uses solid hairlines for the open-source core and 1px dashed cells for the paid product, so the line separates tiers. Neon uses green for capability paths and grey for utilities. Limit to two styles, at the same weight and alpha.

**Seen on** Better Auth, Neon Docs, Claude Pricing, Concrete. **Suits** light-precision, warm-neutral, photo-led; devtool, ai, local-business.

<!-- v:surface.border-treatment/quiet-rim-nesting -->
### 8. Quiet rim nesting

*Feeling: an object sitting in a recess.*

A barely visible outer rim around a lifted inner panel. Framer's rim is 1px at about 6 percent, radius 25, 10px padding, inner fill one step up at radius 15. The rim hardly registers, and the inner panel draws the shape. Meta AI puts a solid 8px pale ring around dark media, 42 outer and 34 inner, and never around light panels, because a dark object on white needs a soft transition.

**Seen on** Framer, Meta AI. **Suits** dark-precision, light-precision; saas, ai.

<!-- v:surface.border-treatment/interlocking-cut -->
### 9. Interlocking cut

*Feeling: engineered.*

Panels fit together like puzzle pieces. Astral bites a stair step from the corners, about 65px rise and 220px run, rounds every join at 12px, and fills the bite with a separate patch, leaving a 12px page-coloured channel. Build it with `clip-path: path()` or layered masks, and repeat one step on small elements.

**Seen on** Astral, ConceptCore. **Suits** bold-colour, expressive; devtool, education.

<!-- v:surface.border-treatment/viewport-frame -->
### 10. Viewport frame

*Feeling: the browser is part of the design.*

The window itself is framed. Oatly fixes a 1px ruled window 22px in, with graph paper outside. Work & Co's only chrome is a 10px strip across the top. These are strong concepts for one expressive brand and need a real reason. Elsewhere they are a costume.

**Seen on** Work & Co, Benzo the Great Developer, Oatly, Spring/Summer. **Suits** light-precision, illustrated, expressive, bold-colour; agency, portfolio, food-drink.

### Mistakes that cheapen a border

- **Stock grey on a tinted page.** Use a translucent ink. A neutral line on warm paper looks like a mistake.
- **Double lines.** Two adjacent bordered boxes give a 2px line. Use grid gap on a coloured ground, or borders on one side only.
- **Lines that stop short.** Rails must meet rules exactly. My first rails were also too strong: at 18 percent ink they took over from the content, and they needed 9 to 12 percent, with only the outer rule stronger.
- **Gradient borders everywhere.** One moving highlight is a signature. A rainbow border on every card is a costume.
- **Dark borders on dark cards.** Use a light translucent line on dark, never a lighter grey hex, or the card goes muddy over images.
- **A border on a card with a shadow.** Choose one.

## Divider

A divider ends one thing and starts another. Most pages need fewer than they have, because space is already a divider. Use a line when two neighbours would otherwise run together, or when the line itself carries a rhythm the page wants. What separates great from cheap is weight and width: a great rule is deliberately quiet or deliberately heavy, and its width is a decision. Cheap rules are a default `<hr>` at full container width, between every section, alongside a background change that already did the job.

Measured: 1px at 6 to 10 percent ink for structure, 64 to 80px clear above and below at section level.

<!-- v:surface.divider/inset-hairline -->
### 1. Inset hairline

*Feeling: calm pacing.*

A rule at content width, never full bleed, with 80px above and below, on one background. Amplitude paces a whole page this way. Work & Co uses 1px across 1060 for sections, repeats it at 700 for index rows, and sets the final rule in black to mark the end of content.

**Seen on** Amplitude, Work & Co. **Suits** light-precision; saas, agency.

```css
.sec+.sec{margin-top:80px;padding-top:80px;border-top:1px solid var(--line)}
```

<!-- v:surface.divider/full-bleed-hairline -->
### 2. Full-bleed hairline

*Feeling: ruled, not boxed.*

Faint rules run edge to edge. Acne Studios uses 1px at about 6 percent with nothing else: no radius, no shadow. Choose it for fashion, research and galleries, where images supply the interest.

**Seen on** Meta AI, Acne Studios, New Exhibitions. **Suits** light-precision, photo-led, type-led; ai, fashion, culture.

<!-- v:surface.divider/heavy-rule -->
### 3. Heavy rule

*Feeling: an editor's decision.*

A 2px ink rule across the full content width, 8px under a small label, as the only divider on the page. Basic Agency runs the first 62 percent solid and the rest at 20 percent, which reads as a timeline marker. It closes a section the way a magazine does.

**Seen on** Nicole Heim Studio, Basic Agency. **Suits** photo-led, type-led; agency.

<!-- v:surface.divider/typed-rules -->
### 4. Typed rules

*Feeling: a table you can read at a glance.*

Two line types with two jobs. ElevenLabs reserves solid 1px for columns and structure, and uses round dots about 6px apart for rows, breaking at gutters. The eye learns which edges matter. Draw the dots, because CSS `dotted` spacing cannot be set. Zed's docs put a solid rule under H2 and a dashed one under H3, so rule style signals heading level.

**Seen on** ElevenLabs Pricing, Zed Docs. **Suits** warm-neutral, mono-technical; ai, devtool.

```css
:root{--dots:radial-gradient(circle,color-mix(in srgb,var(--ink) 34%,transparent) .7px,transparent .9px) 0 0/6px 2px repeat-x}
.row{position:relative}
.row::after{content:"";position:absolute;left:12px;right:12px;bottom:0;height:2px;background:var(--dots)}
.wrap{border-inline:1px solid var(--line)}   /* solid means structure */
```

<!-- v:surface.divider/leader-row -->
### 5. Leader row

*Feeling: a contents page.*

A hairline stretches across the free space between title and meta. Zed's blog list carries the eye about 800px this way. Use it for indexes, changelogs and archives. Darken the leader on hover instead of filling the row.

**Seen on** Zed Blog, Design Podcast (Focus State). **Suits** mono-technical, bold-colour; editorial.

```css
.r{display:flex;align-items:center;gap:12px;height:42px;font-size:15px;color:inherit;text-decoration:none}
.r u{text-underline-offset:3px;text-decoration-thickness:1px;
  text-decoration-color:color-mix(in srgb,var(--ink) 30%,transparent)}
.r .lead{flex:1;height:1px;background:var(--line);transition:background .15s}
.r:hover .lead{background:var(--ink-3)}
.r time{font-size:11.5px;color:var(--ink-2)}
```

<!-- v:surface.divider/timeline-hairline -->
### 6. Timeline hairline

*Feeling: a running record.*

One vertical line runs the feed, with a dot per date. On Linear's changelog the line is about 6 percent white on near-black, dots are about 7px, and the newest dot carries the only colour on the page chrome. Made for changelogs.

**Seen on** Linear Changelog. **Suits** dark-precision; saas.

<!-- v:surface.divider/double-rule-band -->
### 7. Double-rule band

*Feeling: a newspaper section header.*

A label strip between two rules. Anthropic's news page uses a 53px band with a 13px bold label and a muted date, and no large heading. The USPS report uses a two-stripe brand rule exactly once, above the sign-off.

**Seen on** Anthropic News, USPS Delivers, Queen's University Library. **Suits** warm-neutral, light-precision, bold-colour; editorial, education.

<!-- v:surface.divider/shaped-transition -->
### 8. Shaped transition

*Feeling: the page has a form.*

Sections meet along a shape. Stripe Atlas slants a background change about 6 degrees, repeating the hero's angle without its colour. Hugging Face draws a flat ellipse tinted about 2 percent. Noom cuts a 150px corner tab. Hibachi Guru tears one edge. Echo a shape already on the page, then use it once or repeat it exactly.

**Seen on** Stripe Atlas, Hugging Face, KAWARA MUSEUM - LIBRARY, Hibachi Guru, Lacoste Ace Breaker, 6 sites in all. **Suits** warm-neutral, gradient-light, light-precision, photo-led; saas, ai, culture, health.

<!-- v:surface.divider/tick-marks -->
### 9. Tick marks

*Feeling: a measuring instrument.*

Marks instead of rules: Pragen Hatlen's 12px L ticks, Greylock's 44px band of uneven 1px ticks. They are barely visible. One device only.

**Seen on** Prägen Hätlen, Greylock, Bristol Yoga Festival, CSDG Development Group. **Suits** light-precision, render-3d, warm-neutral; brand, finance, architecture, culture.

<!-- v:surface.divider/colour-band-break -->
### 10. Colour band break

*Feeling: an interruption, on purpose.*

One full-bleed deep colour band stops a white shelf to promote a single thing, as on Taschen. It works because everything around it is uniform.

**Seen on** Taschen. **Suits** light-precision; ecommerce.

### Mistakes that cheapen a divider

- **A rule and a colour change together.** Either one is enough.
- **Dividers between every card.** Let space work.
- **Rules full bleed in a boxed layout.** Width should match the content it serves.
- **Dots too dark.** My first dotted rule, at full muted ink, was louder than the text. Dots sum to more ink than you expect, so use about a third of ink.
- **Link underlines at full ink.** On a dense list they compete with the leader. Use 30 percent.
- **Skeleton bars in the frames around your rule.** I dropped grey loading bars into a demo as filler, and the whole section looked like a wireframe however good the rule was. Put real content in, always.

## Elevation

Elevation says what is above what. Used well, it gives a page a physical order. What separates great from cheap is shape. A cheap shadow is one grey layer that spreads evenly around the box, which looks like a sticker with a glow. A real one has a direction, a contact point and a colour, and it is usually two or more layers doing different jobs.

### How a stack is built

Real shadows split into jobs.

| Layer | Job | Typical |
|---|---|---|
| Ring | Draws the edge | `0 0 0 .5px` to `1px` at 8 to 13% |
| Contact | Shows where it touches | `0 1px 1px` at 4 to 7% |
| Near | Small lift | `0 2px 5px` at 4 to 5% |
| Far | Distance | `0 14px 34px -10px` at 12 to 18% |
| Inset highlight | Lit top edge on dark | `inset 0 1px 0` at 4 to 6% white |

Three rules make shadows look real:

- **Blur is about twice y.** The measured median is 2.0.
- **Pull the spread in as y grows.** A negative spread shrinks the shadow before offsetting it, so nothing leaks past the top or sides. With spread equal to minus y, the shadow's bottom edge lines up with the box and only the blur spills beneath it. That is the signature look of Stripe's cards: a shadow under the card, narrower than the card, with nothing at the sides.
- **Tint it.** Mix the shadow from the ink or the ground, leaning toward the accent at most, never pure grey. Shadows on real surfaces take the colour of what they fall on, and a tinted one sits into the page where a grey one floats on it.

The exact scales worth knowing:

```
Stripe, per level, hue layer + black layer
xs   0 2px 5px -1px      + 0 1px 3px -1px
s    0 6px 12px -2px     + 0 3px 7px -3px
m    0 13px 27px -5px    + 0 8px 16px -8px
l    0 30px 60px -12px   + 0 18px 36px -18px
xl   0 50px 100px -20px  + 0 30px 60px -30px
under-only: 0 18px 36px -18px at 10% + 0 30px 45px -30px at 25%

ElevenLabs, small objects   0 0 0 .5px 12.5% + 0 1px 1px 4% + 0 2px 4px 4%
Notion, four-step ramp      0 .175px 1px 1% + 0 .8px 3px 2% + 0 2px 8px 2.7% + 0 4px 18px 4%
Lindy, warm tinted          0 0 0 1px 10% + 0 1px 1px 7% + 0 2px 5px 5% + 0 14px 34px -10px 18%
Linear, button on dark      inset 0 0 0 1px white 3% + inset 0 1px 0 white 4% + 0 0 0 1px black 60% + 0 4px 4px black 10%
```

Pick one scale and use it everywhere. A page with two shadow languages has none.

<!-- v:surface.elevation/tinted-negative-stack -->
### 1. Tinted negative stack

*Feeling: real distance, cool and exact.*

Two layers per level, with a hue layer and a darker layer that pulls in tighter. This is the best recipe for a light page that wants depth. Use the under-only form on content cards and the full form on objects that truly float. Stripe tints from its own ink, and you should too.

**Seen on** Stripe Payments, Stripe Pricing, Stripe Connect, Stripe Billing, Stripe Atlas. **Suits** light-precision, gradient-light; finance, saas.

```css
:root{--t:color-mix(in srgb,var(--shadow-tint) 25%,transparent);
  --e1:0 2px 5px -1px var(--t),0 1px 3px -1px rgba(0,0,0,.3);
  --e2:0 6px 12px -2px var(--t),0 3px 7px -3px rgba(0,0,0,.3);
  --e3:0 13px 27px -5px var(--t),0 8px 16px -8px rgba(0,0,0,.3);
  --e4:0 30px 60px -12px var(--t),0 18px 36px -18px rgba(0,0,0,.3);
  --e5:0 50px 100px -20px var(--t),0 30px 60px -30px rgba(0,0,0,.3);
  --under:0 18px 36px -18px rgba(0,0,0,.1),0 30px 45px -30px var(--t)}
.card{background:var(--bg);border-radius:8px;box-shadow:var(--under)}
.form{box-shadow:var(--e4)}.popover{box-shadow:var(--e5)}.chip{box-shadow:var(--e1)}
```

<!-- v:surface.elevation/ring-contact-ambient -->
### 2. Ring, contact, ambient

*Feeling: crisp, modern, app-like.*

The stack that replaces a border. We found it measured on 22 of 341 sites, including several of the most polished. The ring draws the edge at any zoom, on any ground. Use it for segmented controls, small cards, menus and popovers. A .5px ring is crisp on high-density screens and softens to about 1px on standard ones, so check both.

**Seen on** ElevenLabs Pricing, Attio, CleanShot X, Vercel AI SDK, Lindy, 22 sites in all. **Suits** light-precision, warm-neutral; saas, ai.

```css
:root{
  --ring:0 0 0 .5px color-mix(in srgb,var(--ink) 13%,transparent);
  --r1:var(--ring),0 1px 1px color-mix(in srgb,var(--ink) 4%,transparent),0 2px 4px color-mix(in srgb,var(--ink) 4%,transparent);
  --r2:0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent),0 1px 1px color-mix(in srgb,var(--ink) 7%,transparent),
       0 2px 5px color-mix(in srgb,var(--ink) 5%,transparent),0 14px 34px -10px color-mix(in srgb,var(--ink) 18%,transparent)}
.seg .on,.card{box-shadow:var(--r1)}
.menu{box-shadow:var(--r2)}
/* On dark, the inner ring and top highlight read as the lit edge; the outer black ring cuts it from the page */
.btn-dark{background:var(--surface);box-shadow:inset 0 0 0 1px rgba(255,255,255,.03),inset 0 1px 0 rgba(255,255,255,.06),
  0 0 0 1px rgba(0,0,0,.6),0 4px 4px rgba(0,0,0,.1)}
```

<!-- v:surface.elevation/hard-offset -->
### 3. Hard offset

*Feeling: printed, ownable, a little loud.*

A solid duplicate with no blur. Jasper offsets a navy block 24px on a large panel, measured exactly as `24px 24px 0`. Zed gives one featured card a 5px tinted offset. Speakeasy keeps it to two small mono chips. Oatly gives every media tile a 3px black offset with a 1px outline, which suits its print voice. Keep it to few objects, in a brand with a graphic voice. The hard edge needs flat neighbours, so never mix it with soft shadows on one object.

**Seen on** Jasper, Zed Pricing, Speakeasy, lemon.markets, Energen Digital, 9 sites in all. **Suits** bold-colour, illustrated, mono-technical, light-precision; devtool, finance, ai, agency.

```css
.plate{background:color-mix(in srgb,var(--accent) 18%,var(--bg));box-shadow:24px 24px 0 var(--ink)}
.feat{background:color-mix(in srgb,var(--accent) 5%,var(--bg));
  border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);
  box-shadow:5px 5px 0 color-mix(in srgb,var(--accent) 16%,transparent)}
@media(max-width:760px){.plate{box-shadow:12px 12px 0 var(--ink)}}
```

Scale the offset down on phones, and leave page margin for it, or it clips at the viewport.

<!-- v:surface.elevation/wide-bloom -->
### 4. Wide bloom

*Feeling: a soft presence.*

A huge faint halo. In New Material's frame the halo starts at about 4 percent at the card edge and is gone 70px out, which means a blur of about 120px, over a tight `0 2px 16px` contact layer at 2 percent. An analyst estimated a 200px spread, and the pixels do not support that. Perplexity Comet stacks many near-invisible layers on cream, and adds a white `0 -2px 4px` glow on top that reads as light on paper. Mymind tints the bloom with the ground, pink under bubbles. Use on one hero object on a pale ground.

**Seen on** New Material, Comet, mymind, VS Code. **Suits** light-precision, warm-neutral, gradient-light; agency, ai, saas, devtool.

<!-- v:surface.elevation/shadow-on-moving-layers -->
### 5. Shadow on moving layers

*Feeling: nothing moves unless it means it.*

Only objects in motion or fixed above the page have a shadow. International Magic measures just two. So a shadow means this layer moves, and the rest stays flat. Works well with scroll-driven pages.

**Seen on** International Magic. **Suits** light-precision; agency.

<!-- v:surface.elevation/sheet-overlap -->
### 6. Sheet overlap

*Feeling: pages turning.*

Depth without any shadow. Scale slides a white sheet with 16px top corners over the previous section while that section dims from about #eaeaea to #d1d1d1. Sierra ends a white section in 60px bottom corners with a soft tinted shadow on a pale layer beneath, which reads as a sheet lifting off the page. See `references/motion/scroll.md` for the stacked deck.

**Seen on** Scale AI, Sierra. **Suits** dark-precision, photo-led; ai.

<!-- v:surface.elevation/physical-paper -->
### 7. Physical paper

*Feeling: a hand-placed sheet.*

Sheets tilted about 2 degrees with a second one offset behind, and all text rotating with the sheet. One playful moment on a consumer page. Never tilt a form.

**Seen on** Swirple. **Suits** expressive; other.

### Mistakes that cheapen elevation

- **One grey layer spread evenly.** My first version was `0 10px 30px rgba(0,0,0,.12)` on three cards. It left a halo on all four sides and looked like stickers on a page. The two-layer negative-spread stack fixed it at once, with no other change.
- **Shadow on everything.** Depth is relative. When three cards all float, none do.
- **Black shadows on tinted grounds.** Mix from the ink.
- **Shadow on dark grounds.** It barely shows. On dark, use a lighter fill and a thin top highlight.
- **Long shadows at high alpha.** Keep far layers under 25 percent, and lower on small objects.
- **A hover jump.** Moving from no shadow to a big one in 200ms looks like a pop. Move between neighbouring levels.

## Glass and blur

Glass is rare on strong sites, and when it appears, it does a job: it keeps text legible while content moves underneath. What separates great from cheap is that real glass has something passing behind it. Blur shows only where an edge or detail crosses the surface. Cheap glassmorphism puts a frosted card on a smooth gradient, where blur changes nothing, so all you have made is a slightly lighter rectangle.

Follow four rules before using it:

- Use it only for things that move or stay fixed above moving content.
- Use a strong blur, 12 to 20px for bars, up to 40px for panels. Weak blur shows text through text, which is the worst outcome.
- Keep text in solid ink with a muted second tone, because blur removes the detail that hurts reading.
- Always give a fallback for browsers or modes without `backdrop-filter`.

```css
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){.glass{background:var(--bg)}}
@media (prefers-reduced-transparency:reduce){.glass{background:var(--bg);backdrop-filter:none}}
```

If blur seems to do nothing, look at the parents. A parent with `filter`, `opacity` below 1, `mask`, `clip-path`, `mix-blend-mode` or its own `backdrop-filter` becomes a new backdrop root, and the blur then sees only what is inside that parent. A parent with `overflow:hidden` and a radius is fine.

<!-- v:surface.glass-or-blur/heavy-nav-smear -->
### 1. Heavy nav smear

*Feeling: content slides under a pane of frosted glass.*

Where nearly all real glass lives. Measured values: Linear uses 20px blur on a transparent fill with a 1px line at 8 percent white. Cal.com uses 12px on 72 percent of a light grey. The blur must be strong enough to turn large headings into soft smears, as on Stripe Sessions, or the headings fight the links.

**Seen on** Stripe Sessions, LiveKit, LEA WINERY. **Suits** gradient-light, dark-precision, warm-neutral; brand, devtool, food-drink.

```css
.nav{position:sticky;top:12px;z-index:9;height:60px;margin:12px 16px 0;padding:0 16px;display:flex;align-items:center;gap:28px;
  border-radius:12px;box-shadow:inset 0 0 0 1px var(--line);
  background:color-mix(in srgb,var(--bg) 62%,transparent);
  -webkit-backdrop-filter:blur(20px) saturate(1.4);backdrop-filter:blur(20px) saturate(1.4)}
```

`saturate()` keeps colour alive in the smear, so the bar does not go grey over bright images.

<!-- v:surface.glass-or-blur/theme-flip-nav -->
### 2. Theme flip nav

*Feeling: the bar knows where it is.*

One bar shape, two skins. Over Cal.com's dark footer the bar turns to translucent near-black with a 1px white ring at about 10 percent, white links and a light CTA with a dark label. Detect with an IntersectionObserver on sections marked dark, and swap tokens on the nav.

**Seen on** Cal.com Pricing, Cal.com. **Suits** light-precision; saas.

<!-- v:surface.glass-or-blur/feathered-blur -->
### 3. Feathered blur

*Feeling: no bar at all.*

Public gives each nav group its own blur patch with feathered edges, so content smears only around the logo, links and buttons, and stays sharp between. Readwise blurs the top 76px through a gradient mask, and cards melt out under the nav. Build it with a `backdrop-filter` layer behind each group and a `mask-image` radial or linear gradient.

**Seen on** Public, Readwise. **Suits** light-precision, gradient-light; finance, saas.

```css
.fade-top{position:fixed;inset:0 0 auto;height:76px;pointer-events:none;
  -webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);
  -webkit-mask-image:linear-gradient(to bottom,#000 40%,transparent);mask-image:linear-gradient(to bottom,#000 40%,transparent)}
```

<!-- v:surface.glass-or-blur/media-tinted-tray -->
### 4. Media-tinted tray

*Feeling: a label that belongs to each picture.*

A small tray over changing media. International Magic uses white at about 50 percent with 20px blur, radius 3, width hugging the text. It turns olive over a lime poster with black type, and pale cyan over a cyan render. Pixels confirm the colour comes from the blurred artwork behind it, so the tray belongs to each image without any scripting. Text stays dark, with a 58 percent second line.

**Seen on** International Magic, Fora, CMBLU, UNITO. **Suits** light-precision, bold-colour, dark-precision, warm-neutral; agency, other, ecommerce.

```css
.tray{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);width:max-content;padding:8px 16px;text-align:center;
  border-radius:3px;font-size:15px;line-height:18px;color:#121212;background:rgba(255,255,255,.5);
  -webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:0 4px 24px rgba(0,0,0,.1)}
.tray span{display:block;color:rgba(18,18,18,.58)}
```

<!-- v:surface.glass-or-blur/glass-card-over-photo -->
### 5. Glass card over photo

*Feeling: looking through a window at skin, or sky.*

Cards over a single close photograph, white at 7 to 20 percent with blur, as on Hims at 356px, radius 24. The photograph tints them, so colour comes from the image rather than from CSS. Needs a dark or mid-tone photograph, and light text. Use on one section.

**Seen on** Hims, Zumtobel Group, Visora. **Suits** photo-led, render-3d; health, other, ai.

<!-- v:surface.glass-or-blur/frosted-panel-over-art -->
### 6. Frosted panel over art

*Feeling: one object passing behind another.*

A large panel over one object that crosses its edge. Sweeply's ribbon dissolves under the panel and turns crisp past the border. An analyst estimated the fill at 80 percent, but the measured value is `rgba(239,239,239,.3)`, on a white page, with heavy blur. That matters: the panel looks white over plain page, yet the ribbon glows through it. At 80 percent my render lost the ribbon and the effect with it.

**Seen on** Sweeply, Motionstrand, Remix. **Suits** gradient-light, render-3d; saas, agency, devtool.

```css
.panel{border-radius:24px;box-shadow:inset 0 0 0 1px var(--line);
  background:color-mix(in srgb,var(--surface) 30%,transparent);
  -webkit-backdrop-filter:blur(36px);backdrop-filter:blur(36px)}
/* The art must cross the panel edge, and must itself run off the viewport */
.ribbon{position:absolute;overflow:visible}
```

<!-- v:surface.glass-or-blur/straddling-frost -->
### 7. Straddling frost

*Feeling: a label stuck across a photo's edge.*

A small frosted card half on image, half on page. Betterment sets a 273x198 translucent cream stat card over the left edge of a 602px photo. Globe Limo overlaps a dark 60 percent panel about 210px over a photo's corner. The straddle shows the blur and keeps text legible. Once per page.

**Seen on** Betterment, Globe Limousines. **Suits** bold-colour, photo-led; finance, local-business.

### Mistakes that cheapen glass

- **Frosted card on a smooth gradient.** My first attempt was exactly this, with a purple-to-pink ground, white at 20 percent, a white border. Blur of a gradient is the same gradient, so the surface did nothing. It was also the most generated-looking thing in the whole lab.
- **Light text on light glass.** Dark text on a light tray is what the good ones use.
- **Too much fill or too little blur.** Over-filled, it is a grey box. Under-blurred, text shows through text.
- **Art with a visible boundary.** My first ribbon showed hard edges twice over: the SVG cut it off, and then an SVG filter clipped it, because a filter region is computed from the path's geometry and ignores stroke width. Give filters a region of `x=-30% y=-30% width=160% height=160%`, and run art past the viewport.
- **Glass inside glass.** It muddies. One layer.
- **Glass on every card.** Rare is the point. Measured sites use it on the nav at most.

## Before you call it done

- Name the one device separating each pair of neighbours. If you name two, remove one.
- Count your radii. Three plus a pill. Check that every nested corner is outer minus gap, or floored.
- Check that lines are translucent ink rather than a stock grey, and that they meet.
- Count your shadows. One scale, used on few things, tinted, with no halo at the top.
- Look at every frame and ask what is real in it. Replace any grey bar, gradient thumbnail, gradient avatar or flat vector scene.
- In a bento, cover the text. Do the tiles still show different kinds of proof? Do the seams line up? They should not.
- Remove every surface and see what stops working. Put back only those.
- Resize to phone width. Grids go to one column, fixed heights go, offsets shrink, and nothing clips.
