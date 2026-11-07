# Atmosphere

Atmosphere answers two questions: what is this page made of, and where is the light coming from. Surface ladders, gradients, glows, grids, patterns, grain and backdrop images are all answers. Beginners treat atmosphere as decoration added at the end, usually a purple gradient and a dot grid. Professionals treat it as material. They decide what the page is made of first, step through it in very small moves, and add light only where something deserves to be looked at. This chapter teaches how dark and light pages really step through their surfaces, how a gradient is made to look crafted rather than like a wash, how much grain is actually there, and how glows, grids and patterns stay out from under the words.

It holds 113 canonical variants, clustered from 368 analyst rows across 312 sites. The strongest variants of each element were checked against real frames and against the measured specs of 325 sites, pixel by pixel where a number mattered, and 34 were rebuilt and rendered next to the real thing, which is where the corrections and the mistake lists come from. The same variants live in `data/elements/atmosphere.jsonl`, which is what the sampler deals from. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in. Hex values appear only where they are neutral greys or measured facts about a site. Treat those as evidence, not as a palette to copy.

**Contents.** [Spend atmosphere once](#spend-atmosphere-once) · [Atmosphere systems](#atmosphere-systems) · [Derived tokens](#derived-tokens)

- **[Dark surface ladder](#dark-surface-ladder):** [near-black hairline ladder](#1-near-black-hairline-ladder) · [brand hue ladder](#2-brand-hue-ladder) · [single dark chapter](#3-single-dark-chapter) · [pure black grey steps](#4-pure-black-grey-steps) · [warm charcoal ladder](#5-warm-charcoal-ladder) · [hue flood sections](#6-hue-flood-sections) · [hard flip alternation](#7-hard-flip-alternation) · [cool navy ladder](#8-cool-navy-ladder) · [darker inward wells](#9-darker-inward-wells) · [flat graphite for imagery](#10-flat-graphite-for-imagery) · [late dark act](#11-late-dark-act) · [tonal chapter steps](#12-tonal-chapter-steps)
- **[Light surface ladder](#light-surface-ladder):** [cream section bands](#1-cream-section-bands) · [neutral page white card](#2-neutral-page-white-card) · [warm tone only ladder](#3-warm-tone-only-ladder) · [flat colour joins](#4-flat-colour-joins) · [tinted tonal surfaces](#5-tinted-tonal-surfaces) · [single paper surface](#6-single-paper-surface) · [graded section fades](#7-graded-section-fades) · [one plane alpha ink](#8-one-plane-alpha-ink) · [cool ground white tile](#9-cool-ground-white-tile) · [page tint drift](#10-page-tint-drift)
- **[Gradient field](#gradient-field):** [skewed ribbon](#1-skewed-ribbon) · [grain section band](#2-grain-section-band) · [horizon from the base](#3-horizon-from-the-base) · [pastel panel behind product](#4-pastel-panel-behind-product) · [sawtooth slats and blinds](#5-sawtooth-slats-and-blinds) · [aura rim](#6-aura-rim) · [page long hue journey](#7-page-long-hue-journey) · [vertical wash into page](#8-vertical-wash-into-page) · [one gradient tile](#9-one-gradient-tile) · [dark diagonal sheen](#10-dark-diagonal-sheen) · [faceted planes](#11-faceted-planes) · [small top wash](#12-small-top-wash) · [flat colour worlds](#13-flat-colour-worlds) · [gradient as rule](#14-gradient-as-rule) · [starfield field](#15-starfield-field)
- **[Glow or light](#glow-or-light):** [lit edge horizon](#1-lit-edge-horizon) · [masked light stripes](#2-masked-light-stripes) · [lens streak](#3-lens-streak) · [subliminal bloom](#4-subliminal-bloom) · [light inside the render](#5-light-inside-the-render) · [warm focal radial](#6-warm-focal-radial) · [colour as horizon light](#7-colour-as-horizon-light) · [corner light](#8-corner-light) · [neon edge on frame](#9-neon-edge-on-frame) · [hard cut inner bloom](#10-hard-cut-inner-bloom) · [light ribbon object](#11-light-ribbon-object) · [underglow behind glass](#12-underglow-behind-glass) · [glow reveals grid](#13-glow-reveals-grid) · [rule bleed](#14-rule-bleed)
- **[Mesh or 3D backdrop](#mesh-or-3d-backdrop):** [point cloud](#1-point-cloud) · [grain shader field](#2-grain-shader-field) · [dot terrain](#3-dot-terrain) · [stippled mark in bars](#4-stippled-mark-in-bars) · [voxel flanks](#5-voxel-flanks) · [smoke field](#6-smoke-field) · [glyph vortex](#7-glyph-vortex) · [lit 3d sky](#8-lit-3d-sky)
- **[Grid or lines](#grid-or-lines):** [blueprint rails with nodes](#1-blueprint-rails-with-nodes) · [fading square grid](#2-fading-square-grid) · [page rails](#3-page-rails) · [perspective room](#4-perspective-room) · [exposed column guides](#5-exposed-column-guides) · [construction geometry](#6-construction-geometry) · [graph paper ground](#7-graph-paper-ground) · [survey rays and diagonals](#8-survey-rays-and-diagonals) · [crosshair sight grid](#9-crosshair-sight-grid) · [ghost linework](#10-ghost-linework) · [textured gutters outside rails](#11-textured-gutters-outside-rails) · [hairlines over media](#12-hairlines-over-media) · [working field](#13-working-field)
- **[Pattern](#pattern):** [pixel dissolve edge](#1-pixel-dissolve-edge) · [stripe rail](#2-stripe-rail) · [glyph halftone figure](#3-glyph-halftone-figure) · [dot gutters](#4-dot-gutters) · [contour moire](#5-contour-moire) · [hatch gutters and seams](#6-hatch-gutters-and-seams) · [type as texture](#7-type-as-texture) · [data point field](#8-data-point-field) · [object grid fill](#9-object-grid-fill) · [enlarged brand geometry](#10-enlarged-brand-geometry) · [organic blob fields](#11-organic-blob-fields) · [poster geometry](#12-poster-geometry) · [shaped section edge](#13-shaped-section-edge) · [sticker scatter](#14-sticker-scatter) · [line illustration break](#15-line-illustration-break)
- **[Texture](#texture):** [stippled stage](#1-stippled-stage) · [grain on dark ground](#2-grain-on-dark-ground) · [paper grain page](#3-paper-grain-page) · [film grain on colour](#4-film-grain-on-colour) · [data as texture](#5-data-as-texture) · [paper colour fills](#6-paper-colour-fills) · [halftone strip](#7-halftone-strip) · [one bit dither](#8-one-bit-dither) · [stipple watermark](#9-stipple-watermark) · [scanned analogue](#10-scanned-analogue) · [wallpaper ground](#11-wallpaper-ground) · [atmospheric mist](#12-atmospheric-mist)
- **[Image backdrop](#image-backdrop):** [ghosted objects](#1-ghosted-objects) · [smeared plate](#2-smeared-plate) · [graduated scrim](#3-graduated-scrim) · [graded scene](#4-graded-scene) · [lit from within on black](#5-lit-from-within-on-black) · [textural photo band](#6-textural-photo-band) · [defocused crushed photo](#7-defocused-crushed-photo) · [flat scrim band](#8-flat-scrim-band) · [photo dissolve seam](#9-photo-dissolve-seam) · [footage with outline card](#10-footage-with-outline-card) · [one side scrim](#11-one-side-scrim) · [world wallpaper](#12-world-wallpaper) · [giant watermark](#13-giant-watermark) · [passe partout](#14-passe-partout)
- [Before you call it done](#before-you-call-it-done)

## Spend atmosphere once

Most strong pages spend almost nothing here. Across about 1,000 strong pages, analysts recorded a gradient, glow, grid, pattern, texture, 3D field or image backdrop on only 241. Of those 241, 215 use exactly one device, which is 89 percent. The main exception is Stripe's family of pages, which pairs a ribbon with visible column guides, and that pairing works because the guides are structure and only the ribbon is mood.

So the default is a very good surface ladder and nothing else. Add one device if the page needs it. A second device needs a reason you could say out loud.

If you were dealt two variants from this chapter, treat them as options rather than a shopping list. Every page still needs a ladder, so if neither variant is a ladder, choose one. If both are devices, use the one that suits the page and leave the other out.

| Device | What it says | Use it for | It fails when |
|---|---|---|---|
| Surface ladder | This page is made of something | Every page, it is not optional | You can name the steps |
| Gradient field | Something happens here | One hero, one band, one tile | It fills the page and has no edge |
| Glow or light | Look here | One edge or object on a dark page | You can see the shape of the blob |
| Grid or lines | This page has structure | Long pages, technical brands | Content ignores the lines |
| Pattern | This is ours | Margins, seams, brand moments | It runs under text |
| Texture | This is a physical thing | Flat colour fields, deep gradients | You notice it before the colour |
| Image backdrop | This is a place | Stages, closers, full-bleed heroes | It needs a flat overlay to be read |
| 3D or mesh field | This is alive | One hero or closing section | It is there because it can be |

Follow five rules, because they account for most of the gap between a real page and a generated one.

**The ladder comes first.** Choose the ground and its rungs before anything else. A gradient on a careless ladder still looks careless, and a good ladder with nothing on it already looks finished.

**One device per page.** Grid plus glow plus grain plus gradient is the generated default, because each one felt safe to add. Choose one, then give it enough room to work.

**Give it a place.** Say which section it lives in. Raycast's slashes stop at 500px. Elyx's aurora appears once, on the last screen. Resend's lid opens one section. Atmosphere that runs everywhere stops being noticed, and whatever you stop noticing is doing nothing.

**Keep it out from under the words.** Grids, dots and glows live in margins, gutters and seams. Cloudflare's dots stop at the rails. Speakeasy's glyph figure stands beside the copy. Sentences sit on flat ground.

**Make it from something you own.** Dalco's arc, Sweeply's ribbon, Mirim's stepped bars and Definitiv's chevron are all taken from the logo. Nobody else can use them, so the page cannot read as a template. Before reaching for a blurred blob, ask what the brand already has that could be made very large and very quiet.

### Where each device lives

Counts are analyst rows. Use the table to check a choice against what strong sites in a register actually do, not to rule anything out.

| Device | Most common in |
|---|---|
| Gradient field | Gradient light 18, light precision 14, bold colour 13, dark precision 6 |
| Pattern | Bold colour 18, light precision 13, warm neutral 7, expressive 6 |
| Grid or lines | Light precision 11, mono technical 7, dark precision 6 |
| Glow or light | Dark precision 9, render 3D 6, light precision 5 |
| Texture | Spread evenly, 4 or 5 rows each across six registers |
| Image backdrop | Photo led 11, then light precision, illustrated and warm neutral at 3 each |
| 3D or mesh field | Render 3D 4, expressive 3, then 2 each in light precision, dark precision and bold colour |

## Atmosphere systems

Devices only work as a system. Choose one row, then take the ground, the device and its place from that row. Two sites built from different rows will look unrelated, and that is the point, so let the deal or the brief decide rather than a favourite.

| System | Ladder | Device | Where it lives | Reference |
|---|---|---|---|---|
| Machined dark | Near-black hairline | None, or one subliminal bloom | Inside the product | Linear, Polar, Raycast |
| Lit stage | Pure black, grey steps | Lit edge or lens streak | One section opener | Resend, Public, Attio |
| Owned dark | Brand hue | Dark floods, one deep gradient | Whole sections | Customer.io, Stripe Sessions, Mixpanel |
| Ledger | White, cool tint | Page rails plus one ribbon | Rails everywhere, ribbon once | Stripe Billing, Stripe Pricing |
| Blueprint | Paper tones or white | Rails with nodes, dots or hatch | Gutters and seams | Zed, Cloudflare Workers, Baseten |
| Warm tone | Warm tone only | None, or paper grain | Nothing, or the whole page | Cursor, Anthropic |
| Soft room | Cream bands | Graded section fades | Section changes | reMarkable, Therabody |
| Studio light | White or fog | Pastel panel or stippled stage | Behind the product | Tana, Calvyn, Render |
| Colour journey | Tinted tonal | Page gradient or flat colour worlds | The whole page, only when the brief asks for loud | Remote, Daylight, Delassus |
| Gallery | Single paper or flat graphite | None, the images do it | Nothing | BIG, Foster and Partners |
| Printed | Flat colour joins | Poster geometry or a stripe rail | Bands and edges | Jasper, Convex, Loops |
| One material | Any | One grained hue used everywhere | Bands, tiles, strokes | Vite, Revena, Axem |

## Derived tokens

Add these once at the top of the stylesheet. The rungs are for when the deal gives you a ground and you need a ladder from it. Mixing 3 percent of ink into the ground moves it about 5 levels on dark and 8 on light, both inside the measured range, and a warm palette gets warm rungs with no further work. For the measured seven-level step on dark, use 4, 8 and 12 percent. On #000 these mixes barely move, because oklab is steep near black, so set the first rung by hand at about 17 levels. Set the grain token as written and tune strength with `opacity`, using the table in [Texture](#texture).

```css
:root{
  /* rungs. on dark, mix toward the ink. on light these go darker, which is what you want */
  --rung-1:color-mix(in oklab,var(--ink) 3%,var(--bg));
  --rung-2:color-mix(in oklab,var(--ink) 6%,var(--bg));
  --rung-3:color-mix(in oklab,var(--ink) 9%,var(--bg));
  --press:color-mix(in srgb,var(--ink) 4%,transparent);
  --line-soft:color-mix(in srgb,var(--ink) 5%,transparent);
  /* 256px tile of monochrome noise. use with mix-blend-mode:hard-light */
  --grain:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n' x='0' y='0' width='100%25' height='100%25' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 0 1'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='4' intercept='-1.5'/%3E%3CfeFuncG type='linear' slope='4' intercept='-1.5'/%3E%3CfeFuncB type='linear' slope='4' intercept='-1.5'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E");
}
/* for a coarser speck, copy --grain as --grain-coarse with baseFrequency .55 */
/* oklch(from ...) needs Chrome 119, Safari 16.4 or Firefox 128. Declare a plain hex first if you must support older */
```

Every effect that moves respects `prefers-reduced-motion`. Pause canvases when they leave the viewport. Atmosphere is the first thing to cut on a slow device, so a static first frame must already look finished.

## Dark surface ladder

A dark ladder has three jobs: show height where shadows no longer work, keep small text legible, and stay quiet enough that one accent can be seen. Black gives a shadow nothing to fall on, so the rule flips: the closer a surface is to you, the lighter it gets. A real dark page is a stack of near-identical darks, told apart by a hairline and by what sits on them.

What separates great from cheap is the size of the step and the honesty of the hue. In a great ladder you cannot name the colours, you can only feel their order. Linear moves from #08090a to #0f1011 to #161718, seven levels a step. Cheap dark has steps you can see from across the room, a stock navy nobody chose, grey text with no relation to its ground, and a purple glow covering for the fact that nothing is on the page. Great dark pages are mostly empty, with one very good product frame.

Measured across the 75 sites whose main surface is dark.

| Fact | Value |
|---|---|
| Floor | #000 on 22 sites, neutral near-black (#06 to #14) on 24, charcoal (#15 and up) on 10, tinted on 19 |
| Hue of tinted floors | 14 of 19 sit in blue to violet, hue 244 to 303. 3 are warm, 1 is green |
| Step between rungs | 7 levels, middle half 4 to 13. The best known ladders hold at +6 to +8 |
| First step off #000 | 17 levels, middle half 10 to 22 |
| First step off near-black | 11 levels, middle half 6 to 17 |
| Rungs per site | 2 to 5, with most at 3 or 4 |
| Sites using a lighter rung, a darker rung | 53 lighter, 20 darker |
| Line as translucent white | 8%, middle half 5 to 14% |
| Line as a solid colour | 23 to 43 levels above the page |
| Second text step | 7.8:1 against the page |
| Third text step | 4.8:1 against the page |
| Top text | Pure white on 32 of 48 sites |

The ladder snippets below set the palette tokens themselves, because on a page like this the ladder is the palette. If the deal gave you a ground, keep the structure and the step sizes and take the hue from your own tokens.

Pure white text is common and fine. The analysts often wrote that good dark pages avoid it, but two thirds of them use it. What matters is that the second step falls well below it, so the page has a clear reading order.

### How a real dark page steps

Build it in this order.

1. **Choose the floor.** Use near-black for product, #000 when images or renders supply the light. Near-black keeps a hair of hue, as in Linear's #08090a where blue sits two levels above red, and that is enough to read as a material on a good screen.
2. **Step about seven levels, two or three times.** That is panels, then raised, then controls. Off pure black, make the first step about 17 levels. Spline goes #000, #101010, #1d1d1d and Framer goes #000, #111111, #171717, #1f1f1f, because the bottom of the display curve is invisible and #080808 on #000 cannot be seen on many screens.
3. **Give each rung a job.** Page is where you are. Panel holds content. Raised floats over a panel, such as a menu or a second window. Control is a fill you can press. Stop at four. A fifth rung is usually a rung with no job.
4. **Draw edges with light.** White at 8% around a panel, 5% for rules inside it. Keep them translucent so one value works on every rung. On a raised surface, add a top highlight, `inset 0 1px 0 rgba(255,255,255,.03)`.
5. **Save shadows for moving things.** A menu or dialog can take a heavy soft shadow. Polar measures `0 16px 40px -12px rgba(0,0,0,.75)`. A static panel needs none, because it would not be seen.
6. **Make hover an overlay.** White at 2 to 5% over whatever rung is underneath, never a new hex. Measured rows that change on hover run a median 200ms, mostly on `ease`, and a third of them change fill.
7. **Step the text separately.** Four steps at most, as in Linear's #f7f8f8, #d0d6e0, #8a8f98, #62666d, which measure 18.7, 13.6, 6.1 and 3.4 to 1. Keep the last one for marks and disabled states, because 3.4:1 fails small text.
8. **Show the steps by overlap.** Three panels side by side read as one black page, because nothing ever sits on anything. Overlap two windows and let them leave the frame, and the rungs appear.
9. **Spend colour last.** On a good dark page, one accent appears on status, the active state and maybe one button. Everything else is grey.

### Measured dark ladders

From computed styles, confirmed against pixels in the frames. Rungs run from the floor upward. The floor is usually the page, though on Obsidian the second rung is the larger area. The two inward ladders at the end start at the page and go darker.

| Site | Floor | Rung 2 | Rung 3 | Rung 4 | Lines | Text |
|---|---|---|---|---|---|---|
| Linear | #08090a | #0f1011 | #161718 | #23252a | white 8%, 5% | #f7f8f8, #d0d6e0, #8a8f98, #62666d |
| Polar | #090909 | #111111 | #181818 | #212121 | #181818, #212121 | #ffffff, #858585 |
| Hawl | #0e0f11 | #15191d | #1c1e21 | #25282d | #25282c, white 7% | not recorded |
| Raycast | #07080a | #0c0d0f | #111214 | #18191b | white 6%, #2f3031 | #9c9c9d body |
| LiveKit | #070707 | #0b0b0b | #131313 | #202020 | #202020, white 6% | #fefefe, #cbcbcb, #b2b2b2, #999999 |
| VS Code | #121314 | #191a1b | #202122 | none | #2a2b2c | not recorded |
| Trigger.dev | #121317 | #16171b | #1a1b1f | #1c1e21 | #272a2e, #3b3e45 | #e8e9ec, #878c99 |
| Obsidian | #171717 | #1f1f1f | #262626 | none | #262626 | #eeeeee, #bcbcbc, #b3b3b3 |
| Nx | #0c0c0d | #19191a | #28282a | none | #2a2a28 | #d5d5d7, #a3a3a8 |
| Framer | #000000 | #111111 | #171717 | #1f1f1f | white 6% | #ffffff, #999999 |
| Spline | #000000 | #101010 | #1d1d1d | none | #2e2e2e, white 5% | #999999, #8a8a8a |
| Sourcegraph | #020202 | #0e0e0e | #202020 | none | #202020 | #eeeceb, #a9a9a9, #909090 |
| Neon Pricing | #000000 | #131415 | #18191b | none | #242628 | not recorded |
| Better Stack | #0f101a | #151622 | #171926 | #1f2433 | blue-grey 10 to 20% | #939db8, #646e87 |
| Definitiv Digital | #070c14 | #0c121c | #11161d | #141d2b | none | not recorded |
| Kiro | #000000 | #19161d | #211d25 | #28242e | #352f3d | not recorded |
| Customer.io | #00191c | #032125 | #0b363b | none | #0b363b | #ffffff, #cde3e5 |
| Anthropic | #141413 | #1f1e1d | #262624 | none | #3d3d3a | #faf9f5, #b0aea5, #87867f |
| Increase | #151e29 | #1d2a36 | #1a2b3b | none | white 10% | #c0c9d1, #8995a1 |
| Stripe band | #0d1738 | #122054 | none | none | white 10% | #a3b5d6, #839bc8 |
| Vite, inward | #16171d | #14121a | #07060c | none | #2e2e32, #3b3440 | #ffffff, #b8b8ba, #867e8e |
| Inngest, inward | #1c1c1c | #000000 | #212121 | none | #333333 | #ffffff, #b3b3b3 |

To derive a ladder rather than copy one, work in OKLCH. For neutral near-black use L .145, .178, .21, .27 with chroma under .006. For a brand ladder, keep the accent hue and use L .195, .245, .30 with chroma .034, .042, .046. Near black the scale is steep, since #000 is L 0 and #090909 is already L .14, so take steps from the floor you chose rather than from zero.

<!-- v:atmosphere.dark-surface-ladder/near-black-hairline-ladder -->
### 1. Near-black hairline ladder

*Feeling: machined and quiet. The page reads as an enclosure, and the product sits inside it.*

**Use it for:** Developer tools and serious software where dense product UI is the hero. **Avoid:** Pages with no real UI to show. Three empty panels on near-black are a template.

Page #08090a, panels #0f1011, raised #161718, controls #23252a, each about oklch L +.035. Borders white 8%, inner rules white 5%, no visible shadows. Text #f7f8f8, #d0d6e0, #8a8f98, #62666d. Overlap two panels and crop them at the frame.

Overlays do a lot of the work here: hover and selected rows are white at 1 to 5%, never a new hex. The lowest text step measures 3.4:1 on the page and 3.3:1 on a panel, which fails WCAG AA at small sizes. Keep it for repeated metadata such as issue numbers, and use the third step for anything a reader must be able to read.

**Seen on** Polar, Linear Changelog, LiveKit, Linear, Raycast Blog, 8 sites in all. **Suits** dark-precision; saas, devtool.

```html
<style>
:root{--bg:#08090a;--surface:#0f1011;--surface-2:#161718;--surface-3:#23252a;
  --ink:#f7f8f8;--ink-2:#d0d6e0;--ink-3:#8a8f98;--ink-4:#62666d;
  --line:rgba(255,255,255,.08);--line-2:rgba(255,255,255,.05)}
/* two panels overlap and both leave the frame: that is what makes the steps visible */
.stack{position:relative;height:520px;overflow:hidden;
  -webkit-mask:linear-gradient(#000 62%,transparent),linear-gradient(90deg,#000 72%,transparent);-webkit-mask-composite:source-in;
  mask:linear-gradient(#000 62%,transparent),linear-gradient(90deg,#000 72%,transparent);mask-composite:intersect}
.panel{position:absolute;border:1px solid var(--line);border-radius:12px;background:var(--surface);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.03),0 2px 32px rgba(0,0,0,.25);overflow:hidden;color:var(--ink-3);font-size:13px}
.panel.raised{background:var(--surface-2);box-shadow:0 2px 32px rgba(0,0,0,.5)}
.panel .row{display:flex;gap:12px;height:42px;align-items:center;padding:0 18px;border-bottom:1px solid var(--line-2);color:var(--ink-2)}
.panel .row.on{background:rgba(255,255,255,.02)}
.panel .row span:first-child{color:var(--ink-4)}
</style>
<div class="stack">
  <div class="panel" style="left:0;top:40px;width:62%;height:560px">
    <div class="row on"><span>EX-2190</span>Reefer held at gate 14</div>
    <div class="row"><span>EX-2188</span>Bill of lading mismatch</div>
    <div class="row"><span>EX-2187</span>Customs flag on HS 8471</div>
    <div class="row"><span>EX-2181</span>Carrier rolled to next sailing</div>
    <div class="row"><span>EX-2179</span>Chassis shortage, Savannah</div>
  </div>
  <div class="panel raised" style="left:50%;top:0;width:640px;height:560px">
    <div class="row">rules/reefer-hold.ts</div>
    <div class="row"><span>01</span>rule reeferHold(shipment) {</div>
    <div class="row"><span>02</span>if (gate.dwell &gt; 10) escalate(lane)</div>
    <div class="row"><span>03</span>return shipment.hold("awaiting release")</div>
  </div>
</div>
```

<!-- v:atmosphere.dark-surface-ladder/brand-hue-ladder -->
### 2. Brand hue ladder

*Feeling: owned. The dark belongs to this company and no other.*

**Use it for:** A brand with a real hue that wants a dark section or dark mode without going neutral. **Avoid:** Weak or neon accents: high-chroma greens and yellows make a sickly ground. Pull chroma down.

Take the accent hue. Page oklch(.195 .034 h), panel .245 .042, tile .30 .046, rule .33 .04. Text .98 .005, .81 .03, .64 .035. No neutral grey anywhere, so the dark section stays inside the brand.

Plum, teal, purple and violet versions all measured this way: #00191c, #032125, #0b363b, and #140424, #20033c, and #181622, #242034, and #12121e, #1b1c32, #3e476c. Lightness steps of about .05, and chroma grows slightly with each step because darker colours need less of it to look saturated.

**Seen on** Stripe Sessions, Customer.io, Affirm, Felix Gray, Railway Changelog, 6 sites in all. **Suits** light-precision, dark-precision, gradient-light, bold-colour; brand, saas, finance, ecommerce.

```html
<style>
/* one hue, four lightnesses, taken from the accent. the whole ladder moves when the accent moves */
/* scoped to the section, so a light page can hold one dark chapter. move it to :root for a whole dark page */
.cast{--bg:oklch(from var(--accent) .195 .034 h);--surface:oklch(from var(--accent) .245 .042 h);
  --surface-2:oklch(from var(--accent) .30 .046 h);--line:oklch(from var(--accent) .33 .04 h);
  --ink:oklch(from var(--accent) .98 .005 h);--ink-2:oklch(from var(--accent) .81 .03 h);--ink-3:oklch(from var(--accent) .64 .035 h);
  background:var(--bg);color:var(--ink);padding:88px clamp(16px,3vw,40px)}
.cast .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border:1px solid var(--line);background:var(--surface)}
.cast .cell{padding:28px;min-height:220px;border-left:1px solid var(--line);color:var(--ink-2)}
.cast .cell:first-child{grid-row:span 2;border-left:0}
.cast .cell+.cell+.cell{border-top:1px solid var(--line)}
.cast .chip{display:inline-block;background:var(--surface-2);padding:4px 10px;border-radius:6px;color:var(--ink)}
</style>
<section class="cast"><div class="grid">
  <div class="cell"><span class="chip">Throughput</span><p>Containers matched to a sailing in the last 24 hours.</p></div>
  <div class="cell"><span class="chip">Security</span><p>Every release and override is signed.</p></div>
  <div class="cell"><span class="chip">Support</span><p>A named port desk through every peak week.</p></div>
</div></section>
```

<!-- v:atmosphere.dark-surface-ladder/single-dark-chapter -->
### 3. Single dark chapter

*Feeling: one deliberate change of key. The page lowers its voice to say something serious.*

**Use it for:** Light product and finance pages, for trust, compliance, uptime or one big number. **Avoid:** More than once per page. Two dark bands become alternation and lose the event.

One full-bleed dark band, #101010 to #181818 or ink navy, mid-page on a light site, hard edges, 1 to 1.5 viewports tall. Rails and cell rules continue at the same x in white 10%. Reserve it for one proof.

**Seen on** Stripe, Attio, AuthKit, Fundrise, Ultrahuman. **Suits** light-precision, gradient-light, warm-neutral; finance, saas, devtool, health.

```html
<style>
/* rails sit on each section so they can change colour, but they never change x */
.sec{position:relative;--rail:clamp(16px,6vw,88px);--rule:var(--line);padding:72px calc(var(--rail) + clamp(16px,3vw,48px))}
.sec::before,.sec::after{content:"";position:absolute;inset-block:0;width:1px;background:var(--rule)}
.sec::before{left:var(--rail)}.sec::after{right:var(--rail)}
.sec.dark{background:#181818;color:#fff;--rule:rgba(255,255,255,.10)}
.sec.dark p{color:#a3a3a3}
</style>
<section class="sec"><h2>Planners stop chasing status</h2></section>
<section class="sec dark"><h2>Open through every peak week</h2><p>Reserve this for one proof: uptime, compliance, a number.</p></section>
<section class="sec"><p>The page comes back to the light ground on a hard edge.</p></section>
```

<!-- v:atmosphere.dark-surface-ladder/pure-black-grey-steps -->
### 4. Pure black grey steps

*Feeling: a stage with the lights off. Surfaces recede and content glows.*

**Use it for:** Sites whose content supplies the colour: 3D renders, media tools, image-heavy products. **Avoid:** Long reading pages and panel-heavy UI. Pure black beside #101010 opens a hole on many screens.

Page #000, panels #101010, raised #1d1d1d, rules #262626 to #2e2e2e, fills white 5%. Text #fff, #a9a9a9, #777. No gradient on any chrome. Colour comes only from rendered content or one small accent on active states.

Spline steps #000, #101010, #1d1d1d, which is +16 then +13, and keeps borders for pills and windows. Resend goes further and leaves its page at exactly #000, with depth coming from the images, whose interiors stay near #070707 to #0e0e0e. Public draws structure with #262626 rules rather than raised cards.

**Seen on** Spline, Public, Resend Changelog, Sourcegraph, Neon Pricing, 6 sites in all. **Suits** dark-precision, light-precision; saas, devtool, finance, agency.

<!-- v:atmosphere.dark-surface-ladder/warm-charcoal-ladder -->
### 5. Warm charcoal ladder

*Feeling: calm and bookish. Dark with the warmth of paper left in it.*

**Use it for:** Warm-neutral light pages that need a dark band or footer that belongs to them. **Avoid:** Pages with a cool accent. Warm dark under blue reads as a mistake.

Warm dark steps sharing a faint yellow-brown cast: ground #141413, band #1f1e1d, raised #262624, borders #3d3d3a. Text #faf9f5, #b0aea5, #87867f. Steps of 5 L*. Cards may sit on #000 instead, as warm charcoal on black.

Anthropic steps 11 levels between its band and footer, enough for a soft visible edge, and inverts tiles to #141413 on #1f1e1d. Lithic sets warm charcoal cards on a pure black panel instead, which suits a page with one warm metal accent.

**Seen on** Lithic, Anthropic News, Anime.js. **Suits** light-precision, warm-neutral, dark-precision; finance, editorial, devtool.

<!-- v:atmosphere.dark-surface-ladder/hue-flood-sections -->
### 6. Hue flood sections

*Feeling: confident and editorial. Colour fields replace dark mode.*

**Use it for:** Light-first brands with long pages that need strong chapters. **Avoid:** Sites with more than two brand hues in play. A third flood turns into a flag.

Full-bleed dark sections in a deep brand hue, oklch L .21 to .29, C .05 to .09, two hues at most. Headings take a light tint of the hue, body a muted tint, hairlines white 10 to 20%. Floods replace neutral dark mode.

Mixpanel measures #33001f and #00332a. Its headings take a light peach or mint tint of the flood and hairlines turn translucent, so the two floods feel like one system rather than two themes.

**Seen on** Scale AI, Mixpanel. **Suits** gradient-light, dark-precision; saas, ai.

<!-- v:atmosphere.dark-surface-ladder/hard-flip-alternation -->
### 7. Hard flip alternation

*Feeling: rhythm by value. Bold and legible at thumbnail size.*

**Use it for:** Consumer finance, agencies, illustrated brands, long pages that need pacing. **Avoid:** Dense product marketing. Every flip costs the reader a re-adaptation.

Sections cut between white or stone and #0d0e12 to #1e1e1e with no gradient and no rule, 100 to 150px padding. Two or three grounds only. One illustration style or accent stays constant across flips, so rhythm comes from value.

Revolut cuts between #ffffff, #1b1c20 and #000 with no gradient, and sets black plan tiles on charcoal with no border, so value alone separates them. Readme keeps its grid lines through each cut and only swaps their colour.

**Seen on** Revolut, ReadMe, lemon.markets, Globe Limousines, White Label IQ, 7 sites in all. **Suits** photo-led, illustrated, mono-technical, type-led; finance, agency, devtool, local-business.

<!-- v:atmosphere.dark-surface-ladder/cool-navy-ladder -->
### 8. Cool navy ladder

*Feeling: institutional, technical, night-shift. Trustworthy rather than edgy.*

**Use it for:** Finance, infrastructure and enterprise tools, and any page with blue product UI. **Avoid:** Warm or photographic brands. A navy page with a neutral grey body text looks unconsidered.

One blue-grey hue at every step, oklch hue 255 to 280. Page L .17 to .23, C .02 to .05. Panels +.045, raised +.05 more. Rules white 8% or one step up. Body text is blue-grey too, never neutral grey.

Measured examples: #0f101a, #171926, #1f2433, and #151e29, #1d2a36, #1a2b3b, and #1a222d, #232b38, #333947. A blue cast stops true-black dead spots on cheap panels and lets one saturated accent stand out.

**Seen on** Increase, Better Stack, Peloton, Twilio, OREO & BTS - Love Letter Site. **Suits** dark-precision, light-precision, render-3d; devtool, finance, saas, food-drink.

<!-- v:atmosphere.dark-surface-ladder/darker-inward-wells -->
### 9. Darker inward wells

*Feeling: carved rather than stacked. Product feels recessed into the page.*

**Use it for:** Developer tools that want to feel like hardware or an instrument panel. **Avoid:** Pages that need cards to feel clickable. Wells read as read-only.

Reverse the ladder: ground is the lightest dark, #16171d to #1c1c1c, and windows go darker, #07060c to #020202, so product reads as cut into the page. No shadows. Rules #2e2e32 to #333. Text #fff, 70%, 45%.

Works best with grain on the ground only, so the flat wells look cut out of it.

**Seen on** Vite, Inngest. **Suits** dark-precision; devtool.

<!-- v:atmosphere.dark-surface-ladder/flat-graphite-for-imagery -->
### 10. Flat graphite for imagery

*Feeling: gallery wall. Nothing competes with the work.*

**Use it for:** Architecture, music, culture, portfolios where images or big type carry each screen. **Avoid:** Anything that needs grouping. With no borders, structure must come from layout alone.

One or two flats only, #161616 to #1a1a1a and #333, with no borders, shadows or radius. Image and type supply everything else.

**Seen on** Foster + Partners, Utopia Orchestra. **Suits** photo-led, type-led; architecture, culture.

<!-- v:atmosphere.dark-surface-ladder/late-dark-act -->
### 11. Late dark act

*Feeling: a long page gets an ending. The change of ground marks a change of audience.*

**Use it for:** Long pages with a distinct final act, such as developers, enterprise or pricing. **Avoid:** Short pages. There is no story to end.

Keep the first two thirds light, then flip page, nav and banner to a dark brand tint, oklch L .2 to .25, C .03 to .05, for the final third. Cards one step lighter, borders white 10%, links a light tint of the accent.

**Seen on** Lemon Squeezy, Make. **Suits** bold-colour, gradient-light; saas.

<!-- v:atmosphere.dark-surface-ladder/tonal-chapter-steps -->
### 12. Tonal chapter steps

*Feeling: slow descent. Each section is a notch deeper or lighter.*

**Use it for:** Luxury objects and long product stories told in chapters. **Avoid:** Busy pages. The 2% steps vanish under any content that competes.

Long dark page steps through four hard horizontal edges, oklch L .15, .18, .22, .27, about 2% each, in one slate hue, no gradients, then flips to warm paper. Measured #0c1114, #0f161c, #141d24, #212c36.

**Seen on** Prägen Hätlen. **Suits** render-3d; brand.

### Mistakes that cheapen a dark ladder

- **Steps you can name.** If you can say "that card is dark grey," the step is too big. Compare the panel to the page: the eye should need a moment.
- **Even steps from black.** #000, #111, #222, #333 looks like a grey chart. Make the first step about 17 levels, then hold the rest near 7.
- **#000 with a #080808 panel.** It looks like a good small step and it is invisible on many screens. Off pure black, start at about +16.
- **Neutral text on a tinted ground.** A navy page with #999 body text looks unconsidered. Tint the text toward the ground.
- **The stock framework navy.** Slate defaults read as a template within a second. If you want a hue, take it from the brand.
- **Solid hex borders across rungs.** They look right on one rung and wrong on the next. White at 8% works on all of them.
- **Lighting a dark page to make up for an empty one.** A glow does not add content. Put a real product frame there first.
- **Three flat panels in a row.** My first attempt did exactly this and the ladder vanished into one black page. The steps only appeared once two panels overlapped and left the frame.
- **Defining a hue ladder on `:root` for one section.** My first version did, and it repainted the whole light page. Scope tokens to the section unless the whole page is dark.
- **Setting sentences in the lowest text step.** It measures about 3.4 to 1, which fails WCAG AA at small sizes. It is for repeated metadata only.

## Light surface ladder

A light ladder must separate regions without drawing boxes, keep photographs and product crisp, and feel like a material rather than a screen at full brightness. It decides whether the page feels printed, lit, warm or clinical before a single word is read.

What separates great from cheap is that a great page picks one logic and holds it. Either the page is white and regions go slightly darker, or the page is off-white and cards rise to white, or there is no white at all and everything is tone. Cheap pages mix all three, then add a stock grey band, a stock grey border and a shadow on every box. Great steps are small: the change from #fbfbfb to #f7f6f3 on Tana is enough to mark a panel, because the temperature moves as well as the value.

Measured across the 218 sites whose main surface is light.

| Fact | Value |
|---|---|
| Page colour | Pure white on 125 sites, neutral off-white on 44, warm on 27, cool on 17 |
| Warm neutral register | 18 of 20 sites avoid pure white as the page |
| White pages with a tinted second rung | 87, sitting a median 8 levels below white, middle half 6 to 11 |
| Hue of that second rung | Neutral 41, cool 22, warm 19, green 5 |
| Off-white pages that keep white for raised surfaces | 47 of 93 |
| Step between rungs | 7 levels, middle half 5 to 11 |
| Warm page colour | Hue 68 to 107, chroma about .01 |
| Line as ink alpha | 12%, middle half 8 to 20% |
| Line as a solid colour | 17 to 40 levels below the page |

The ladder snippets below set the palette tokens themselves, because here the ladder is the palette. If the deal gave you a ground, keep the structure and the step sizes, and take the temperature from your own tokens.

### How a real light page steps

1. **Decide who is brightest.** White page with darker regions, as on Apple, Stripe and Expo. Off-white page with white raised cards, as on Vercel, Warp and Speakeasy. Or tone only with no white at all, as on Cursor, Anthropic and reMarkable. Hold one of these for the whole page.
2. **Step 5 to 11 levels.** A second rung a median 8 levels below white is about 3 percent. If a band looks like a band at a glance, it is too strong.
3. **Choose temperature once.** Neutral feels exact, cool feels technical, warm feels human. Warm rungs share a hue near 90 with chroma around .01. Above about .015 it reads as cream, which is a statement rather than a neutral.
4. **Tint the ink to match.** Set secondary text as the ink at reduced strength, not as a grey. Cursor sets it at 60% in oklab, so it stays warm on every rung. A pure grey on a warm ground looks dirty.
5. **Let colour change be the divider.** Sections on Therabody, Anthropic and reMarkable change with no rule and no shadow. Add a hairline only where you need a real edge, and use ink at 8 to 12%.
6. **Use a shadow only for a lit object.** Light ladders work without shadows far more often than dark ones do. Warp measures zero, and Anthropic measures one.
7. **End on the ink.** Most ladders finish on a near-black footer in the same hue as the text: #201515 on Zapier, #141413 on Anthropic, #211e1c on reMarkable. The ink and the dark surface are one colour, so the page closes in its own material.

Hover on light works like hover on dark. Move one rung, or lay ink at 3 to 5% over what is there, over about 200ms.

### Measured light ladders

From computed styles, confirmed against pixels in the frames. Rungs run in page order, not always lightest first.

| Site | Page | Second | Third | Lines | Ink |
|---|---|---|---|---|---|
| Vercel Pricing | #fafafa | #ffffff | #f2f2f2 | #e6e6e6, black 8% | #171717, #4d4d4d |
| Apple Vision Pro | #f5f5f7 | #ffffff | #f9f9fb frosted | #d2d2d7 | #1d1d1f, #86868b |
| Expo | #ffffff | #f9f9fb | #f0f0f0 | #e0e1e6, #d9d9e0 | #1c2024, #60646c |
| Stripe | #ffffff | #f8fafd | #e5edf5 | #e5edf5 | #50617a, #64748d |
| Speakeasy | #fafafa | #ffffff | #eae9e9 | ink 12%, 24% | #0f0a07, #575251 |
| Warp Pricing | #ffffff | #fbfdfd | #f4f0fc | cool grey at 20 to 40% | not recorded |
| Tana | #fbfbfb | #f7f6f3 | #f3f3f1 | #e4e1db | #0c0805, #3a3a3a |
| Cursor Pricing | #f7f7f4 | #f2f1ed | #e6e5e0 | ink 10% | #26251e, ink 60% |
| Anthropic | #faf9f5 | #f5f4ed | #e8e6dc | #dedcd1 | #141413, #30302e, #5e5d59, #87867f |
| Zed Docs | #f7f7f2 | #f4f2ec | #eff0ee | blue-grey 15 to 20% | #393d45 |
| Paddle | #f9f8f7 | #ebe7df | #fcfcfc | #d9d3c9 | #1c1a15 |
| Zapier | #fffefb | #f8f4f0 | #eceae3 | #dfdcd2 | #201515, #36342e |
| reMarkable | #fcfbf8 | #f9f6f1 | #f3efe7 | none | #211e1c, #584f4b |
| Therabody | #fffcf5 | #f7f3e9 | #f0e9db | #252525 at 10 to 20% | #252525 |
| Function Health | #fef9ef | #f5eee1 | #ddd6ca | #d1c9bf | not recorded |
| Material 3 | #fefbff | #f8f1f6 | #dcdaf5 | none | #1c1b1d, #4d4256 |
| Bauhaus Clock | #eef0f2 | #ffffff | #f0f1f3 | none | #04080d |
| TR Studio | #eae7e1 | #d9d3cc | #f5f3f0 | none | #2e0e12 |

To derive a warm ladder, use OKLCH with L .975, .958, .921, chroma .004 to .007, hue 95 to 105. For a tinted one, take the accent hue at L .99, .965, .948, .90 with chroma .006, .01, .007, .037.

<!-- v:atmosphere.light-surface-ladder/cream-section-bands -->
### 1. Cream section bands

*Feeling: soft and domestic. Sections shift the way light shifts across a room.*

**Use it for:** Health, wellness, consumer devices, ecommerce, food. **Avoid:** Developer tools. Cream reads as lifestyle.

Full-bleed bands step #fcfbf8, #f9f6f1, #f3efe7, about 1.5 to 2.5 L* apart, oklch C under .012, no rules, no shadows, 100 to 140px padding. The colour change is the divider. End on a warm near-black footer.

Stronger creams measured on cream-led brands: #fffcf5, #f7f3e9, #f0e9db and #fef9ef, #f5eee1. Only a brand that means cream should go that yellow.

**Seen on** reMarkable, Function Health, Brilliant, Claude, Sweetgreen Menu, 9 sites in all. **Suits** warm-neutral, bold-colour; ecommerce, saas, brand, health.

```html
<style>
/* each band is one step. the colour change is the divider, so there is no rule and no shadow */
:root{--s1:#fcfbf8;--s2:#f9f6f1;--s3:#f3efe7;--ink:#252525;--ink-2:rgba(37,37,37,.72)}
.band{padding:120px 40px;color:var(--ink)}
.band p{color:var(--ink-2)}
</style>
<section class="band" style="background:var(--s1)"><h2>A quieter queue</h2><p>Step one.</p></section>
<section class="band" style="background:var(--s2)"><h2>Three ways to plan</h2><p>Step two, about 1.5 L* down.</p></section>
<section class="band" style="background:var(--s3)"><h2>It holds the thread</h2><p>Step three, about 2.5 L* further.</p></section>
```

<!-- v:atmosphere.light-surface-ladder/neutral-page-white-card -->
### 2. Neutral page white card

*Feeling: printed and exact. Feels like a well-set specification sheet.*

**Use it for:** Developer platforms and precise SaaS. The default for a light product page. **Avoid:** Warm consumer brands, where pure neutrals feel like a hospital.

Page #fafafa, raised sheet #fff, hover #f2f2f2, hairline #e6e6e6 or black 8%. Text #171717 and #4d4d4d. No tint, one accent at most, no shadow at rest. Separation is 2% lightness plus a line, so it feels printed.

Tiny hue shifts are allowed and can be an identity: #fbfdfd with a faint mint cast, or #f9f9fb and #f0f0f3 with a faint lilac one.

**Seen on** Warp Pricing, Vercel Pricing, Cal.com Pricing, Factory, 099, 8 sites in all. **Suits** light-precision; devtool, saas, ai, other.

```html
<style>
/* grey page, white sheet, one hairline. nothing else, across the whole page */
:root{--bg:#fafafa;--surface:#fff;--hover:#f2f2f2;--line:#e5e5e5;--ink:#171717;--ink-2:#666;--ink-3:#8f8f8f}
.sheet{display:grid;grid-template-columns:repeat(3,1fr);margin:40px;background:var(--surface);border:1px solid var(--line);border-radius:12px}
.sheet>div{padding:28px;border-left:1px solid var(--line);color:var(--ink-2);height:320px}
.sheet>div:first-child{border-left:0}
.sheet h3{color:var(--ink);font-weight:500;font-size:14px}
</style>
<div class="sheet"><div><h3>Starter</h3>For one forwarder.</div><div><h3>Team</h3>For desks across time zones.</div><div><h3>Network</h3>For large forwarders.</div></div>
```

<!-- v:atmosphere.light-surface-ladder/warm-tone-only-ladder -->
### 3. Warm tone only ladder

*Feeling: considered and slightly bookish. The current look of serious AI and tools companies.*

**Use it for:** Tools and editorial product pages that want warmth without cream. **Avoid:** It is popular, so it is the first thing to swap if the page reads as a clone of the category.

Page #f7f7f4, panels #f2f1ed, controls #e6e5e0, ink #26251e, secondary text ink at 60%, hairlines ink at 10%. In oklch: L .975, .958, .921, C .004 to .007, hue 95 to 105. No shadows and no pure white.

Set secondary text as the ink at reduced strength in oklab, not as a grey, so it stays warm on every step of the ladder.

**Seen on** Anthropic News, Cursor Pricing, Zed Blog, Tana, Railway Docs, 6 sites in all. **Suits** warm-neutral, mono-technical, light-precision; editorial, ai, saas, devtool.

```html
<style>
/* tone only. no shadow, no white, and text is the ink at reduced strength so it picks up the ground */
:root{--bg:#f7f7f4;--surface:#f2f1ed;--surface-2:#e6e5e0;--ink:#26251e;
  --ink-2:color-mix(in oklab,var(--ink) 60%,transparent);--ink-3:color-mix(in oklab,var(--ink) 40%,transparent);
  --line:color-mix(in oklab,var(--ink) 10%,transparent)}
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:40px}
.tile{background:var(--surface);border-radius:8px;padding:18px 16px;height:320px;color:var(--ink-2);font-size:13px;
  box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--ink) 2.5%,transparent)}
.tile h3{color:var(--ink);font-weight:500}
.tile a{display:flex;height:36px;align-items:center;justify-content:center;border-radius:99px;background:var(--surface-2);color:var(--ink);margin-top:14px}
.tile a.on{background:var(--ink);color:var(--bg)}
.tile hr{border:0;border-top:1px solid var(--line);margin:16px 0}
</style>
<div class="tiles">
  <div class="tile"><h3>Free</h3><a>Get started</a><hr>Two lanes</div>
  <div class="tile"><h3>Team</h3><a>Get Team</a><hr>Unlimited lanes</div>
  <div class="tile"><h3>Scale</h3><a class="on">Get Scale</a><hr>Rules and routing</div>
  <div class="tile"><h3>Network</h3><a>Talk to us</a><hr>Single sign-on</div>
</div>
```

<!-- v:atmosphere.light-surface-ladder/flat-colour-joins -->
### 4. Flat colour joins

*Feeling: designed and decisive. Close to print.*

**Use it for:** Studios, hospitality, food, culture. **Avoid:** Interfaces and dense product. There is no ladder here to organise UI with.

Bone ground plus two or three flat colours, one pale tint, one saturated mid, one near-black ink, joined at hard edges with zero radii, borders or shadows. Each section is a single flat. The ink doubles as dark panel.

TR Studio measures zero radii, shadows and borders, and joins #eae7e1, #d9d3cc, #f5f3f0 and one pale periwinkle at hard edges, with oxblood as both ink and dark panel. On a real brand the flats come from the palette you were dealt.

**Seen on** TR Studio, Clevr Blends, terrenohotel.com. **Suits** bold-colour, warm-neutral; architecture, hospitality, food-drink.

<!-- v:atmosphere.light-surface-ladder/tinted-tonal-surfaces -->
### 5. Tinted tonal surfaces

*Feeling: friendly and systematic. The whole page is one colour at different strengths.*

**Use it for:** Design systems, pastel consumer tools, finance with a soft accent. **Avoid:** Accents with high chroma at low lightness: they turn grey when tinted this far.

Four tones of the accent hue: oklch(.99 .006 h), (.965 .01 h), (.948 .007 h), (.90 .037 h). No shadow and no border. Depth comes from tone alone. Text uses a dark tint of the same hue.

Material 3 is the clearest example: #fefbff, #f8f1f6, #f2ecee and #dcdaf5 all carry one hue, with one measured shadow and no borders. Zentry runs the same logic on a stronger lavender, with panels 4 percent apart.

**Seen on** Material 3, Mercury Pricing, Zentry. **Suits** soft-pastel, light-precision, expressive; devtool, finance, other.

<!-- v:atmosphere.light-surface-ladder/single-paper-surface -->
### 6. Single paper surface

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

**Seen on** BIG, Nicole Heim Studio, 1X, Ne Geurra, Block, 6 sites in all. **Suits** photo-led, type-led, light-precision; architecture, agency, brand, ecommerce.

<!-- v:atmosphere.light-surface-ladder/graded-section-fades -->
### 7. Graded section fades

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

**Seen on** Apple Intelligence, Soundsensing, Stability AI, React, SILENCIO. **Suits** light-precision, photo-led, type-led; ai, saas, devtool, agency.

<!-- v:atmosphere.light-surface-ladder/one-plane-alpha-ink -->
### 8. One plane alpha ink

*Feeling: flat and severe. Everything is the same sheet marked with one ink.*

**Use it for:** Type-led AI and research brands, and anything that wants to feel printed in one colour. **Avoid:** Interfaces that need clear elevation, such as menus and dialogs.

One plane, off-white or a single warm tint, #f2f3ed to #f7f6f5, and one ink. Everything else is that ink at 2%, 5% or 6% for fills and rules, no elevation, radii near zero. One accent. Flatness is the system, so alignment must be exact.

Cognition uses black overlays at 2, 5 and 6 percent on #f7f6f5, and measures no radii or shadows. Groq adds one orange to a bone page. Gjelina shows the plane need not be neutral: one peach field, one ink and one rust accent.

**Seen on** Cognition, Gjelina New York Menus, Groq, Three Zero Five Studio. **Suits** type-led, bold-colour, expressive; ai, hospitality, culture.

<!-- v:atmosphere.light-surface-ladder/cool-ground-white-tile -->
### 9. Cool ground white tile

*Feeling: lit, like a product on a showroom table.*

**Use it for:** Hardware, consumer tech, and tiles holding one strong object or photo. **Avoid:** Text-heavy tiles. A white tile with a paragraph on grey is the default admin look.

Cool ground #eef0f2 or #f5f5f7, pure white tiles, no border, one soft shadow or none. Text #1d1d1f, secondary #86868b. White reads as lit because the ground leans blue-grey, so put real product in the tiles.

Bauhaus Clock pairs an #eef0f2 ground with white tiles and uses soft shadows rather than borders, and saturated colour appears only inside product tiles. White reads as lit because the ground sits a little cool and a little darker.

**Seen on** Apple Vision Pro, Bauhaus Clock, VS Code. **Suits** light-precision, photo-led; brand, saas, devtool.

<!-- v:atmosphere.light-surface-ladder/page-tint-drift -->
### 10. Page tint drift

*Feeling: the whole page changes weather as you read.*

**Use it for:** Editorial finance and brand sites with few, clear sections. **Avoid:** Dense tools. A moving ground under UI is a distraction.

Body background cross-fades between near-whites, such as warm grey, peach and pale blue, about .9s ease, as sections enter. Differences of 2 to 3 L* only. Nav tints with the page. No gradients on elements.

Fabrica cross-fades the whole page between warm grey, peach and pale blue over about .9s, with no gradients on any element. Claude Pricing moves its neutrals per section and lets the nav tint with them.

**Seen on** Fabrica Partners, Claude Pricing. **Suits** light-precision, warm-neutral; finance, ai.

### Mistakes that cheapen a light ladder

- **Mixing the logics.** White cards on off-white in one section and darker cards on white in the next means two systems. Pick one.
- **The stock grey band.** A framework grey-100 with a grey-200 border is a template signature. Move the temperature, even slightly.
- **Pure grey text on a warm page.** It looks dirty. Use the ink at reduced strength.
- **Cream that is too yellow.** Above chroma .02, a neutral stops being neutral. Only a brand that means cream should go there.
- **A shadow on every white card.** A shadow means something floats. If everything floats, nothing does.
- **Fading both ends of a section.** Soft in and hard out reads as a section. Soft at both ends reads as a smear.
- **Warm page, cold footer.** A neutral #111 footer under a warm ladder looks borrowed. Use the ink.
- **Too many rungs.** Three is plenty. Past four, rungs stop meaning anything and the page just looks patchy.

## Gradient field

A gradient field has one job: to make a single moment feel made rather than filled. It marks a hero, a stage, a chosen plan or an ending. It is the most overused device on the web, so it is also the device where the gap between crafted and cheap is widest.

What separates great from cheap is rarely the colour. The cheap version is a wash: two stops at 135 degrees, purple into pink, filling the whole hero and stopping at the viewport edge with no reason to. Great gradients have a shape. They have an edge, or they vanish completely. They carry some structure, such as grain, slats, lines or mottle, so they read as a material. And they appear once, so the rest of the page can stay quiet and let them count.

Of 66 analyst rows in this element, 39 end on a hard edge, 20 dissolve into the page, and only 7 run the full page. Nothing strong sits in between.

| Fact | Value |
|---|---|
| Ribbon | 250px tall and 12 degrees, measured on Stripe Pricing. Canvas 1440 by 556 |
| Band | 325 to 425px tall, two hard edges |
| Panel | Radius 24 to 32, container width |
| Hero wash | Dissolved by 600 to 900px |
| Top wash | 150 to 320px |
| Stops | 4 to 8 on anything hero sized |
| Grain inside a gradient | Sigma 3 to 5 levels on the page. Ideogram reaches 10 |

### How a gradient is made to look crafted

Work through these in order. Each one removes a piece of the wash.

1. **Give it an edge, or no edge at all.** There are two honest endings. Cut it razor straight, or dissolve it fully into page colour. Soft inside and hard outside is the whole trick of the Stripe ribbon. A gradient that fills the hero and simply stops at the viewport has no reason to end there, and that is what reads as a wash.
2. **Confine it.** Name the one place it lives. Hero, band, tile or panel. It should be gone before the logo wall, so proof sits on flat ground.
3. **Move hue and hold value.** Tana's panel stays near oklch L .84 to .87 across all its hues, so no hot spot appears and dark windows read at full strength. Most muddy or blotchy gradients are value accidents rather than colour accidents.
4. **Route hue through saturated stops.** A straight line between two distant hues passes through grey. Canva walks violet at 60px, blue-violet at 209px, a saturated teal at 358px, sky at 581px and near-white at 880px, so it never dulls. Interpolate in oklab, and add a stop whenever the midpoint looks tired.
5. **Ease the falloff.** Light falls fast near its source and slowly after that. Mymind goes from white to #fc8e89 within 30px at the rim, then takes about 190px to reach #ffe4e7. Two stops give one constant rate, and the eye finds where it ends. Use four to six stops with uneven gaps.
6. **Build from parts.** One radial makes one dome. Separate blurred ellipses at different heights make a horizon. Six long ellipses laid along a skewed band make silk. Elyx's aurora rises in uneven columns, with a near-white core at the very base.
7. **Add structure.** Smoothness is the tell of a CSS gradient. Slats, blinds, barcode strokes, etched hairlines and dot screens give it a physical surface. The strongest form is a sawtooth: a ramp that ends in a hard cut, which reads as light falling across fluted glass.
8. **Mottle it.** A linear ramp plus fine grain still reads as CSS. Render's band is not monotonic and wobbles by a few levels as it goes. That low-frequency cloudiness matters as much as the grain.
9. **Let grain follow the colour.** Use sigma 3 to 5 levels, as measured, and mask it so it thins with the colour. On page white, grain reads as dirt. Grain also stops banding in deep hues.
10. **Treat it as a material.** Revena reuses one green across hero, tiles and footer. ElevenLabs reuses its one coloured tile, enlarged, in the calculator. A repeated treatment reads as a decision, and a one-off reads as an effect.
11. **Take the colours from the brand.** Derive stops from the accent with relative colour, or walk the hues of the logo. Generic purple-to-blue says nothing about anyone.

```css
/* --a and --b are two hues derived from the accent */
/* the wash: grey midpoint, one constant rate, no edge, no surface */
.wash{background:linear-gradient(135deg,var(--a),var(--b))}
/* same two hues, in a better space, with an eased ramp and an honest end */
.field{background:linear-gradient(180deg in oklab,var(--a) 0,var(--b) 28%,color-mix(in oklab,var(--b) 40%,var(--bg)) 62%,var(--bg) 100%)}
```

<!-- v:atmosphere.gradient-field/skewed-ribbon -->
### 1. Skewed ribbon

*Feeling: fluid and premium. A piece of silk passing behind the page.*

**Use it for:** A single hero or pricing moment on a white or very pale page, for finance and platform brands. **Avoid:** As a page background, or twice on one page. Stripe owns the literal form, so change the angle, width or palette enough to be your own.

Full-bleed band 250px tall, skewed -12deg, clipped razor straight, filled with long blurred ellipses laid along it in four or five hues around the accent. Behind hero cards, bleeding off both edges, once. Soft inside, hard outside.

Height measured at exactly 250px and rise at 12 degrees across a 1410px run. Other crops seen: a lower-right wedge, a shear clipped by the page rails, a thick grainy swoosh taken from a logo, and a heavily blurred 80px pale version on a white page. Animate the strands over 20 seconds or more. The folded hero version needs a shader, because its hard inner folds cannot be done with blur.

**Seen on** Stripe Atlas, Stripe Climate, Stripe Billing, Stripe Connect, Stripe Pricing, 11 sites in all. **Suits** gradient-light, light-precision; finance, saas, devtool.

```html
<style>
.ribbon-stage{position:relative;height:720px;overflow:hidden;background:var(--bg)}
/* overflow on the skewed box is the razor edge; blur on its children is the liquid. keep them on different elements */
.ribbon{position:absolute;left:-5%;width:110%;top:230px;height:250px;overflow:hidden;transform:skewY(-12deg);
  --a:var(--accent);--b:oklch(from var(--accent) calc(l + .1) c calc(h + 45));--c:oklch(from var(--accent) .86 .12 calc(h - 50));
  --d:oklch(from var(--accent) .8 .15 calc(h + 60));--e:oklch(from var(--accent) .88 .13 calc(h - 100));background:var(--b)}
/* strands: long ellipses laid ALONG the band, stacked ACROSS it */
.ribbon i{position:absolute;border-radius:50%;filter:blur(26px)}
.ribbon i:nth-child(1){left:-14%;top:42%;width:64%;height:62%;background:var(--e)}
.ribbon i:nth-child(2){left:-10%;top:-34%;width:70%;height:70%;background:var(--a)}
.ribbon i:nth-child(3){left:6%;top:82%;width:62%;height:44%;background:var(--c)}
.ribbon i:nth-child(4){left:38%;top:-30%;width:62%;height:82%;background:var(--d)}
.ribbon i:nth-child(5){left:56%;top:6%;width:62%;height:64%;background:var(--c)}
.ribbon i:nth-child(6){left:70%;top:58%;width:56%;height:70%;background:var(--a)}
.ribbon-cards{position:absolute;left:50%;top:190px;width:min(900px,88%);translate:-50% 0;height:300px;background:var(--surface);border-radius:8px;
  box-shadow:0 30px 60px -12px rgba(50,50,93,.25),0 18px 36px -18px rgba(0,0,0,.3)}
</style>
<div class="ribbon-stage"><div class="ribbon"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="ribbon-cards"></div></div>
```

<!-- v:atmosphere.gradient-field/grain-section-band -->
### 2. Grain section band

*Feeling: airbrushed. Colour with a physical surface.*

**Use it for:** Logo walls, section stages and CTA bands on a white precise page. **Avoid:** As a full page background. It works because it is a band with two hard edges.

Full-bleed band 325 to 425px, hard top and bottom edges, ramp from page colour to an accent tint, low-frequency mottle of 3 to 4 levels, film grain sigma 4 to 5 levels masked to follow the colour. A stage, never page background.

The measured ramp is not monotonic: it wobbles by a few levels as it goes. That cloudiness matters as much as the grain.

**Seen on** Render, Revena, Liquid AI, Boston Dynamics, Dalco. **Suits** light-precision, bold-colour, photo-led, render-3d; brand, devtool, saas, ai.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
/* light grounds only. on dark, the soft-light mottle turns into smoke */
.band2{position:relative;height:325px;overflow:hidden;isolation:isolate;
  --t:oklch(from var(--accent) .72 calc(c * .55) h);
  background:linear-gradient(90deg,var(--surface) 0%,color-mix(in oklab,var(--t) 8%,var(--surface)) 24%,color-mix(in oklab,var(--t) 22%,var(--surface)) 44%,color-mix(in oklab,var(--t) 42%,var(--surface)) 68%,var(--t) 100%)}
/* mottle: a linear ramp plus fine grain still reads as CSS. the real thing clouds by a few levels */
.band2::before{content:"";position:absolute;inset:0;mix-blend-mode:soft-light;opacity:.55;background-size:100% 100%;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='325' preserveAspectRatio='none'%3E%3Cfilter id='c' x='0' y='0' width='100%25' height='100%25' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.006 .012' numOctaves='3' seed='11'/%3E%3CfeColorMatrix values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='1440' height='325' filter='url(%23c)'/%3E%3C/svg%3E")}
/* grain follows the colour: where the band is still white, grain would read as dirt */
.band2::after{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.07;
  -webkit-mask:linear-gradient(90deg,transparent 8%,#000 62%);mask:linear-gradient(90deg,transparent 8%,#000 62%)}
.band2 h2{position:relative;z-index:2;padding:110px 32px;margin:0}
</style>
<div style="height:100px"></div><div class="band2"><h2>Every carrier feed, one queue</h2></div>
```

<!-- v:atmosphere.gradient-field/horizon-from-the-base -->
### 3. Horizon from the base

*Feeling: a horizon at dusk. Gives a dark page somewhere to end.*

**Use it for:** Closing sections, sign-up forms and dark heroes. **Avoid:** Across the whole hero top and bottom at once. One horizon per screen.

Separate blurred ellipses, 44px blur, rise from the bottom edge to different heights, 150 to 540px, in four to six hues, with a near-white core at the very base. Fades to the dark page by mid-height. Grain sigma 3. Once, as payoff.

Measured peak at the bottom edge is close to white, about oklch .98, with colour concentrated in the last 180px. A retint per section works too: a floor glow that moves through four hues as sections pass.

**Seen on** Elyx, Auth0, Postman, Storybook, Leeroy. **Suits** dark-precision, warm-neutral, gradient-light; devtool, saas, agency.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
/* dark grounds only. on a light page these hues mix to mud, so use a vertical wash instead */
.horizon{position:relative;height:900px;overflow:hidden;background:var(--bg);isolation:isolate;color:var(--ink)}
/* one wide base layer keeps it a single horizon. uneven columns rise out of it, each to its own height, overlapping so no gap shows */
.horizon i{position:absolute;border-radius:50%;filter:blur(56px)}
.horizon::after{content:"";position:absolute;inset:auto 0 0;height:420px;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.05;
  -webkit-mask:linear-gradient(0deg,#000 30%,transparent);mask:linear-gradient(0deg,#000 30%,transparent)}
.horizon h2{position:relative;z-index:2;text-align:center;padding-top:280px;margin:0}
</style>
<div class="horizon" style="--h1:oklch(from var(--accent) .5 .19 calc(h - 90));--h2:oklch(from var(--accent) .35 .1 h);--h3:oklch(from var(--accent) .62 .12 calc(h + 10));--h4:oklch(from var(--accent) .8 .12 calc(h + 70));--h5:oklch(from var(--accent) .97 .03 calc(h + 70))">
  <i style="left:-14%;bottom:-220px;width:128%;height:380px;background:var(--h2)"></i>
  <i style="left:-10%;bottom:-190px;width:44%;height:360px;background:var(--h1)"></i>
  <i style="left:8%;bottom:-150px;width:38%;height:340px;background:var(--h2)"></i>
  <i style="left:60%;bottom:-170px;width:50%;height:470px;background:var(--h2)"></i>
  <i style="left:54%;bottom:-180px;width:42%;height:340px;background:var(--h3)"></i>
  <i style="left:26%;bottom:-190px;width:46%;height:320px;background:var(--h4)"></i>
  <i style="left:38%;bottom:-120px;width:26%;height:170px;background:var(--h5);filter:blur(34px)"></i>
  <h2>Request early access</h2>
</div>
```

<!-- v:atmosphere.gradient-field/pastel-panel-behind-product -->
### 4. Pastel panel behind product

*Feeling: a soft studio backdrop. Dark product windows look sharp on it.*

**Use it for:** SaaS with dark product UI on a light page. **Avoid:** Light product UI, which has nothing to contrast with here. Use a mid-tone stage instead.

Rounded panel, radius 24 to 32px, container width, diagonal mesh of three pale hues held at one value, oklch L .84 to .87, C under .05. Dark app windows sit on it, cropped by the panel bottom. No grain, no shapes.

A saturated acid version also exists, lime through pale yellow on a 1416px panel with black outlined cards. It suits bold-colour brands only.

**Seen on** Tana, Birdie, Orbit Design, DeepNode AI, LaunchDarkly. **Suits** light-precision, render-3d, bold-colour; saas, ai, agency, devtool.

```html
<style>
/* hue moves, value holds: every stop sits at oklch .84, so no hot spot appears and dark product reads at full strength */
.pastel{position:relative;margin:40px 32px;height:560px;border-radius:32px;overflow:hidden;
  --a:oklch(from var(--accent) .84 .025 calc(h - 20));--b:oklch(from var(--accent) .85 .05 calc(h + 60));--c:oklch(from var(--accent) .87 .05 calc(h + 95));
  background:radial-gradient(90% 90% at 100% 0,var(--b),transparent 60%),radial-gradient(90% 70% at 70% 110%,var(--c),transparent 62%),var(--a)}
.pastel .win{position:absolute;left:18%;top:124px;width:64%;height:520px;background:#1b1a1c;border-radius:14px;box-shadow:0 30px 70px -20px rgba(40,20,30,.5),0 0 0 1px rgba(0,0,0,.4)}
</style>
<div class="pastel"><div class="win"></div></div>
```

<!-- v:atmosphere.gradient-field/sawtooth-slats-and-blinds -->
### 5. Sawtooth slats and blinds

*Feeling: fluted glass and venetian blinds. Light with a physical structure.*

**Use it for:** Pricing tiles, hero backdrops and CTA cards on precise pages. **Avoid:** Even widths and even strengths. Regular slats read as a bar chart or a barcode.

Repeating ramps that end in a hard cut: 130 to 420px vertical slats, or 10px blinds, or 8px barcode strokes. Amplitude 12 to 25 levels, faded at both ends by a mask. The ramp gives light, the cut gives material.

Measured: blinds at a 10px period, half on and half off, amplitude about 24 levels. Barcode at 8px with 2px strokes and about 12 levels. Vertical slats about 130px on a pale hero, irregular 200 to 450px on a black card with heavy grain.

**Seen on** AuthKit, Attio, Mixpanel, Webflow Pricing. **Suits** light-precision, gradient-light; saas, devtool.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.slats-card{position:relative;height:350px;border-radius:8px;background:#080808;overflow:hidden;isolation:isolate;color:#fff;margin:80px 16px}
/* every slat is a ramp that ends in a hard cut: a sawtooth. uneven widths and strengths, then one soft mask over the lot */
.slats{position:absolute;inset:0;display:flex;
  -webkit-mask:radial-gradient(120% 95% at 42% 52%,#000 45%,rgba(0,0,0,.25) 78%,transparent);mask:radial-gradient(120% 95% at 42% 52%,#000 45%,rgba(0,0,0,.25) 78%,transparent)}
.slats i{height:100%;background:linear-gradient(90deg,transparent,var(--accent))}
.slats-card::after{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.16}
.slats-card p{position:absolute;z-index:2;left:32px;top:120px;margin:0}
</style>
<div class="slats-card"><div class="slats"><i style="width:14%;opacity:.05"></i><i style="width:17%;opacity:.8"></i><i style="width:13%;opacity:.12"></i><i style="width:23%;opacity:.75"></i><i style="width:12%;opacity:.5"></i><i style="width:21%;opacity:.95"></i></div><p>For forwarders that need a managed desk.</p></div>
```

```html
<style>
.dusk{position:relative;height:900px;overflow:hidden;
  --warm:oklch(from var(--accent) .9 .035 calc(h + 130));--cool:oklch(from var(--accent) .76 .065 h);
  background:linear-gradient(180deg,var(--bg) 0 42%,color-mix(in oklab,var(--warm) 30%,var(--bg)) 60%,var(--warm) 72%,var(--cool) 83%,color-mix(in oklab,var(--cool) 80%,var(--bg)) 89%,color-mix(in oklab,var(--cool) 30%,var(--bg)) 94%,var(--bg) 100%)}
/* the blinds: 10px period, half on, half off. the base colour above is the DARK stripe, because the bars lighten it */
.dusk::after{content:"";position:absolute;inset:52% 0 6%;background:repeating-linear-gradient(180deg,rgba(255,255,255,.3) 0 5px,transparent 5px 10px);
  -webkit-mask:linear-gradient(180deg,transparent,#000 40%,#000 75%,transparent);mask:linear-gradient(180deg,transparent,#000 40%,#000 75%,transparent)}
.dusk h1{text-align:center;padding-top:160px;margin:0}
</style>
<div class="dusk"><h1>Sign-in that never holds a shipment</h1></div>
```

<!-- v:atmosphere.gradient-field/aura-rim -->
### 6. Aura rim

*Feeling: a soft eclipse. Warm, human and unusual.*

**Use it for:** Calm consumer software with a big serif or humanist headline. **Avoid:** Pages with small type or dense UI above the fold. The ring needs one big statement in it.

Page-colour disc about 90% of viewport width, hard edge with 18px soft spread. Outside it a conic gradient of three warm hues peaks at the rim and falls to page colour by the corners. Centre the falloff on the disc. Use once.

Colour jumps from page white to a saturated peak within 40px at the rim, then takes 400px to die. Flip it into a rising bowl for one later section if you want a rhyme.

**Seen on** mymind. **Suits** gradient-light; saas.

```html
<style>
/* never scale the disc down. phones keep the radius and slide it lower, so the rim crosses the screen as an arc */
.aura-stage{position:relative;height:900px;overflow:hidden;background:var(--bg);--r:648px;--cy:calc(var(--r) + 164px - 21.5vw)}
.aura-stage .glow{position:absolute;inset:-14%;filter:blur(22px) saturate(1.25);
  background:conic-gradient(from 300deg at 50% 58%,var(--accent),oklch(from var(--accent) calc(l + .05) c calc(h + 25)) 30%,oklch(from var(--accent) calc(l + .1) c calc(h - 30)) 62%,var(--accent))}
/* falloff is centred on the disc, so colour peaks at the rim and dies outward */
.aura-stage .fade{position:absolute;inset:0;background:radial-gradient(circle at 50% var(--cy),transparent calc(var(--r) - 8px),color-mix(in srgb,var(--bg) 42%,transparent) calc(var(--r) + 142px),var(--bg) calc(var(--r) + 440px))}
.aura-stage .disc{position:absolute;left:50%;top:calc(var(--cy) - var(--r));width:calc(var(--r)*2);height:calc(var(--r)*2);margin-left:calc(var(--r)*-1);
  border-radius:50%;background:var(--bg);box-shadow:0 0 18px 6px var(--bg)}
.aura-stage h1{position:relative;text-align:center;margin:0;padding:clamp(150px,14vw,200px) 24px 0}
</style>
<div class="aura-stage"><div class="glow"></div><div class="fade"></div><div class="disc"></div><h1>One calm place for every shipment</h1></div>
```

<!-- v:atmosphere.gradient-field/page-long-hue-journey -->
### 7. Page long hue journey

*Feeling: time passing. Colour marks where you are.*

**Use it for:** Health, education, consumer stories, finance with a strong brand colour. **Avoid:** Dense product pages. Text and UI must survive every stop.

One page-tall vertical gradient, 4 to 8 stops, hue shifting per section. Sections have no edges. Cards sit on it as glass or white. Keep stops in one value range so text colour never flips. Chapters are marked by colour, like time of day.

Daylight runs one yellow family from #faeb96 to #f6c02a across about 600px, all of it light enough that dark text never has to flip. Remote allows a far wider journey and pays for it with white cards on every stop. Decide which you are doing before you pick stops.

**Seen on** Lightspeed, Daylight, Synthesis, Sparkle: Stars to Habits, Ripple Health, 7 sites in all. **Suits** bold-colour, gradient-light, photo-led, warm-neutral; health, education, other, finance.

<!-- v:atmosphere.gradient-field/vertical-wash-into-page -->
### 8. Vertical wash into page

*Feeling: a hero with no bottom edge. It arrives and then leaves.*

**Use it for:** Consumer and design-tool heroes that can carry real colour. **Avoid:** Muddy routes. Going from blue-violet to teal through grey needs saturated stops in between.

Hero-only vertical gradient, saturated at the top, dissolving into page colour by 600 to 900px. Four to six stops, walking the hue. Stop before proof content, which sits on flat ground.

Measured route that stays clean: violet at 60px, blue-violet at 209px, a saturated teal at 358px, then sky at 581px, then near-white at 880px. Dark version: near-black navy at the top holding flat for 214px, then rising to deep violet by 767px, with no glow blob at all.

**Seen on** Buildkite, Betterment, Grafana, Sword Health, Canva. **Suits** bold-colour, light-precision, gradient-light, soft-pastel; devtool, finance, saas, health.

<!-- v:atmosphere.gradient-field/one-gradient-tile -->
### 9. One gradient tile

*Feeling: a single jewel in a neutral page. It tells you which one to pick.*

**Use it for:** Pricing, plan cards, feature tiles and product covers. **Avoid:** Every card a different gradient, unless they share grain, type and radius so they read as a set.

Flat neutral page, with colour reserved for one tile or one family of tiles: a grain mesh of two opposed hues, sigma 5 to 10 levels, white type, radius 16 to 30px. Reuse it once, enlarged. It becomes the only hue on the page.

ElevenLabs measures sigma 5 on its one coloured plan tile and reuses that tile enlarged in the calculator. Ideogram reaches sigma 10 at radius 30. CleanShot extends the idea to a family of peach, periwinkle and indigo tiles, alternating light and dark within a row.

**Seen on** CleanShot X, ElevenLabs Pricing, Ideogram, Primer. **Suits** gradient-light, warm-neutral, photo-led, light-precision; ai, saas, devtool.

<!-- v:atmosphere.gradient-field/dark-diagonal-sheen -->
### 10. Dark diagonal sheen

*Feeling: light through a window at night.*

**Use it for:** Dark heroes for finance and CMS or developer platforms. **Avoid:** Four or more hues. This reads as light only with one or two.

On black or deep violet, soft diagonal bands at 25 to 35 degrees, about 200px wide, heavily blurred, two hues at most, fading to the ground at the edges. Optional 3px dot screen above. Behind hero and first product row only.

Payload adds a fine dot screen over the bands and fades to pure black at the edges, then stops after the first product row. Wealthfront keeps a flat field and lets lighter wedges sit low on the right, returning behind one stat row.

**Seen on** Payload, Wealthfront. **Suits** dark-precision, bold-colour; devtool, finance.

<!-- v:atmosphere.gradient-field/faceted-planes -->
### 11. Faceted planes

*Feeling: soft origami. Geometry instead of blur.*

**Use it for:** Design systems and devtools tired of blobs. **Avoid:** Strong contrast between planes. Keep them within 6 L* or it turns into a logo.

Full-viewport ground of large angled polygons, three or four pale tints within 6 L*, hard straight edges, a soft gradient inside each. Geometry replaces blurred blobs. Light UI cards sit on top.

Radix uses large angled polygons in pale ice, lilac and pink, with hard straight edges and a soft gradient inside each. It reads as designed rather than generated because blur, the usual tool, is absent.

**Seen on** Radix UI. **Suits** soft-pastel; devtool.

<!-- v:atmosphere.gradient-field/small-top-wash -->
### 12. Small top wash

*Feeling: a hint of identity. Adds tint without committing to colour.*

**Use it for:** Docs, devtools and any page where reading matters more than mood. **Avoid:** As the only brand idea on a marketing page. It is too weak to carry one.

A 150 to 320px tint behind header and H1 only, fading to page colour, peak within 8 L* of the ground. Or one 1px accent line with 150px of accent fading below it. Hero only.

Nuxt sets a 1px accent line directly under the nav, then fades from #083622 to its #0a0a0a page by about 200px, and uses no glow anywhere else. Biome uses soft blooms in both top corners, gone by 60 percent of the hero height. Keep the wash above the point where reading begins.

**Seen on** Nuxt, Airpost: The Frontier Marketing OS for Frontier Companies, Kata.ai, Fly.io Docs, Biome, 6 sites in all. **Suits** dark-precision, illustrated, gradient-light, light-precision; devtool, ai, editorial.

<!-- v:atmosphere.gradient-field/flat-colour-worlds -->
### 13. Flat colour worlds

*Feeling: poster colour, sure of itself. A theatre programme, each act in its own room.*

**Use it for:** Food, culture, events, local business, playful brands. **Avoid:** Precision software. Saturated full-bleed fields fight real UI.

Each section is one flat saturated colour, full-bleed, no gradient. Change colour at a hard edge, a wipe or a 1px hairline. Two to five hues per page, all of one saturation class. Type stays one colour or flips once.

Delassus changes a flat full-screen colour per scene with a wipe. Good Design Awards Week switches between white, yellow and green at full width with a 1px black hairline and small left-column labels. Tobacco Theater swaps pink, navy, teal and green block by block, like acts in a programme.

**Seen on** neon Switzerland, Good Design Awards Week, Delassus, Tobacco Theater, Cafe Vitesse. **Suits** bold-colour, illustrated; agency, food-drink, finance, local-business.

<!-- v:atmosphere.gradient-field/gradient-as-rule -->
### 14. Gradient as rule

*Feeling: the brand gradient, used as a line rather than a wash.*

**Use it for:** Photo-led and local brands, and any page where a full wash would fight the imagery. **Avoid:** Pairing it with a full wash on the same screen. Choose one strength per section.

Compress the brand gradient to a 24px hard-edged strip, a rule, or a 60px seam between image and field. Reuse the same stops behind titles at tint strength, so saturation steps down as content gets denser.

Fenriz closes its hero with a 24px hard-edged strip and repeats the same stops behind section titles and the footer logo. London Short Film Festival uses a 60px gradient only to hide the seam between a colour field and a photo.

**Seen on** Fenriz Gym, Universally Speaking, London Short Film Festival. **Suits** photo-led, bold-colour, type-led; health, agency, culture.

<!-- v:atmosphere.gradient-field/starfield-field -->
### 15. Starfield field

*Feeling: night sky. Technical wonder, handled lightly.*

**Use it for:** Developer platforms with a space or network metaphor they already own. **Avoid:** A generic stand-in for ambition. Stars with no reason are stock.

Deep gradient ground with 1 to 2px points or square pixels at 30% opacity, 20 to 40 per 1000px square, optionally a thin perspective grid at 15% white. Hero only, then return later as a flat strip.

**Seen on** Temporal, Discord. **Suits** bold-colour, mono-technical; other, devtool.

### Mistakes that cheapen a gradient

- **The two-stop hero.** Purple into pink at 135 degrees is the most recognisable generated background there is. If you notice you wrote one, delete it and start from an edge.
- **Blurring the clip.** In my first ribbon the blur and the skew sat on one element, so the razor edge went soft and the silk turned into a smear. Clip on the parent and blur the children.
- **Colour centred on the wrong thing.** My first aura centred its falloff on the page, so colour peaked in the corners and the rim looked pale. Centre the falloff on the disc, so colour peaks at the rim and dies outward.
- **One dome, or separate circles.** My first horizon was a single ellipse and looked like clip-art. Uneven columns fixed that, but once the colours came from tokens they split into bokeh with dark gaps. One wide base layer under the columns makes it a single horizon.
- **Linear ramp plus grain.** My first band had grain and still read as CSS. It needed the low-frequency mottle under the grain.
- **Grain on white.** Where a band is still page white, grain looks like a dirty screen. Mask it to follow the colour.
- **Even slats.** Regular widths read as a bar chart or a barcode. Vary width and strength.
- **Blinds on the wrong base.** The lines lighten the ground, so the colour you paint underneath is the dark stripe. I painted the light one first and lost the effect.
- **Shrinking it on phones.** Real sites keep the scale and re-crop. Mymind's disc stays huge and slides down, so its rim crosses the screen as an arc. Raycast's slashes keep their size behind the icons. Shrink an effect and it turns into a sticker.
- **A gradient under body text.** Contrast changes along every line. Put reading text on flat ground.
- **A gradient on every card.** Unless they share grain, type and radius, it reads as a sample book. One tile is a decision.

## Glow or light

Light must have a source and a reason. A glow says look here, so it belongs on one edge or one object on a dark page, and it should make that thing feel lit rather than decorated.

What separates great from cheap is how little light there is. The measured peaks are tiny. Resend's section lid reaches only #121212 on black. React Email's bloom peaks at #090f1d. You feel these before you see them. A cheap glow is a purple blob behind a heading, big enough to have a visible shape, sitting in empty space with nothing casting it. Great light also has direction: it comes from a corner, a rim or an object, and it stops.

| Site | Device | Ground | Peak | Falloff |
|---|---|---|---|---|
| Resend | Lid over a section | #000 | #121212 | #010101 within 90px |
| React Email | Centred bloom | #000 | #090f1d at 500px down | Back to #000 by 700px |
| CleanShot | Radial behind a headline | White | About 10% tint | Gone before the fold |
| Public | Streak on a card top | #000 | White core, 400px wide | Bleeds about 20px |
| Raycast Store | Masked slashes | #07080a | #3f2429 near the nav | Gone by 500px |
| Attio | Planet limb | #111111 | 1px spectrum line | Soft within about 60px |

Keep three rules. Dither anything faint with grain at about .02 opacity, or steps will show on a good monitor. Make long thin light long and thin: a streak near 16 to 1 reads as a lens, and anything rounder reads as a blob. And if you can name the hue of a bloom at a glance, it is too strong.

<!-- v:atmosphere.glow-or-light/lit-edge-horizon -->
### 1. Lit edge horizon

*Feeling: an eclipse seen from orbit, or a door opening on a dark stage.*

**Use it for:** Dark pages, as a section opener or a big statement moment. **Avoid:** A bright, wide glow. The effect is in how little light there is.

One very large curved edge, 1px, lit from behind: a rim running through a spectrum, or a section lid brightening across its central 400px. Soft pool below 8% white, falling off within 100px. On black. Once per page.

The measured lid reaches only #121212 on black at its peak and is back to #020202 within 90px. The limb sits on #111 with a fine 4px vertical line texture across the field, which stops the ground reading as flat.

**Seen on** Attio, Resend, Reflect. **Suits** light-precision, render-3d, dark-precision; saas, devtool.

```html
<style>
/* dark grounds only. a light edge needs darkness to show, so on a light page use a tint pool instead */
.opener{position:relative;max-width:1280px;margin:40px auto;padding:120px 16px 0;text-align:center;overflow:clip;--edge:rgba(214,235,253,.19)}
/* a lid: top rule whose ends curve down and die, lit in the middle */
.opener .lid{position:absolute;inset:0 0 auto;height:120px;border:1px solid var(--edge);border-bottom:0;border-radius:40px 40px 0 0;
  -webkit-mask:linear-gradient(180deg,#000 40%,transparent);mask:linear-gradient(180deg,#000 40%,transparent)}
.opener .core{position:absolute;left:50%;top:0;width:560px;height:1px;margin-left:-280px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)}
/* peak is 7.5% white. on pure black that is #131313, and it is enough */
.opener .pool{position:absolute;left:50%;top:0;width:900px;height:130px;margin-left:-450px;background:radial-gradient(50% 100% at 50% 0,rgba(255,255,255,.075),transparent)}
</style>
<section class="opener"><div class="lid"></div><div class="pool"></div><div class="core"></div><p>Forwarders of every size rely on this desk.</p></section>
```

```html
<style>
.limb{position:relative;height:900px;overflow:hidden;background:#111;color:#fff;text-align:center}
.limb .fine{position:absolute;inset:80px 12px 0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.028) 0 1px,transparent 1px 4px);-webkit-mask:linear-gradient(180deg,transparent,#000 30%);mask:linear-gradient(180deg,transparent,#000 30%)}
.limb .planet{position:absolute;left:50%;top:570px;width:1660px;height:1660px;margin-left:-830px;border-radius:50%;background:#0b0b0b}
/* from -42deg, so the spectrum runs left to right over the top. a mask cuts a 1px ring, a blurred copy throws the glow */
.limb .ring,.limb .halo{position:absolute;inset:0;border-radius:50%;
  background:conic-gradient(from -42deg,oklch(from var(--accent) .62 .22 calc(h - 40)) 0deg,oklch(from var(--accent) .75 .17 calc(h - 15)) 22deg,oklch(.95 .06 90) 42deg,var(--accent) 58deg,oklch(from var(--accent) .6 .2 calc(h + 40)) 84deg,transparent 92deg,transparent 350deg,oklch(from var(--accent) .62 .22 calc(h - 40)) 360deg)}
.limb .ring{-webkit-mask:radial-gradient(closest-side,transparent calc(100% - 1.6px),#000 calc(100% - .8px));mask:radial-gradient(closest-side,transparent calc(100% - 1.6px),#000 calc(100% - .8px))}
.limb .halo{inset:-10px;filter:blur(14px);opacity:.5;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - 26px),#000 calc(100% - 12px));mask:radial-gradient(closest-side,transparent calc(100% - 26px),#000 calc(100% - 12px))}
.limb h1{position:relative;padding-top:280px;margin:0}
</style>
<div class="limb"><div class="fine"></div><div class="planet"><div class="halo"></div><div class="ring"></div></div><h1>One record per shipment</h1></div>
```

<!-- v:atmosphere.glow-or-light/masked-light-stripes -->
### 2. Masked light stripes

*Feeling: a logo or brand motif turned into light.*

**Use it for:** Dark product pages where brand colour appears only at the top. **Avoid:** Repeating it in lower sections. The neutral page below is what makes it strong.

Parallel diagonal bars in the accent, each a 100px ramp ending in a hard cut, blur 7px, masked by a radial into the dark page, in the top 500px only. The only saturated colour on the page.

Canvas versions measure the same idea at lower contrast: soft streaks at about 30 degrees with a vignette, gone before the lower page.

**Seen on** Raycast Pricing, Raycast Store, Monark Markets. **Suits** dark-precision; devtool, finance, saas.

```html
<style>
.slash{position:relative;height:900px;overflow:hidden;background:#07080a;color:#fff;text-align:center;--dark:oklch(from var(--accent) .22 .06 h);--alt:oklch(from var(--accent) .6 .1 calc(h + 150))}
/* sawtooth again: long ramp, hard cut. a small blur softens the cut and keeps the direction */
.slash .bars{position:absolute;left:50%;top:0;width:900px;height:520px;margin-left:-450px;filter:blur(7px);
  background:repeating-linear-gradient(120deg,transparent 0 40px,var(--dark) 40px,var(--accent) 138px,#07080a 139px 196px,var(--alt) 240px,#07080a 241px 300px);
  -webkit-mask:radial-gradient(50% 62% at 50% 22%,#000 20%,rgba(0,0,0,.42) 62%,transparent);mask:radial-gradient(50% 62% at 50% 22%,#000 20%,rgba(0,0,0,.42) 62%,transparent)}
.slash h1{position:relative;padding-top:380px;margin:0}
</style>
<div class="slash"><div class="bars"></div><h1>Carrier directory</h1></div>
```

<!-- v:atmosphere.glow-or-light/lens-streak -->
### 3. Lens streak

*Feeling: a studio light catching the top of an object.*

**Use it for:** One premium card on a black band. Concierge, enterprise, top tier. **Avoid:** Every card. Repeat it once, small, on the button and stop.

A white streak on a card top border, 400px wide, 1px core, 24px halo at 60% peak, both fading at the ends, bleeding 12px above. Repeat once as a 1px light on the button rim. Black card, #262626 border.

Measured half-height is about 16px and half-width about 280px, so the streak is roughly 16 to 1. Anything rounder reads as a glow blob.

**Seen on** Public. **Suits** light-precision; finance.

```html
<style>
.lit-card{position:relative;max-width:480px;margin:120px auto;width:calc(100% - 32px);padding:46px 40px;border:1px solid #262626;border-radius:6px;text-align:center}
/* 1px core on the border, 24px halo around it. both die at the ends. horizontal length is 16 times the height */
.lit-card::before{content:"";position:absolute;left:50%;top:-1px;width:min(400px,84%);translate:-50% 0;height:1px;background:linear-gradient(90deg,transparent,#fff 50%,transparent)}
.lit-card::after{content:"";position:absolute;left:50%;top:-12px;width:min(440px,92%);translate:-50% 0;height:24px;background:radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,.62),rgba(255,255,255,.14) 45%,transparent)}
.lit-card a{position:relative;display:inline-flex;height:44px;align-items:center;padding:0 28px;border-radius:99px;border:1px solid #333;overflow:hidden}
.lit-card a::before{content:"";position:absolute;left:18%;right:18%;top:0;height:1px;background:linear-gradient(90deg,transparent,#fff,transparent)}
</style>
<div class="lit-card"><p>A named planner, day and night.</p><a>Apply now</a></div>
```

<!-- v:atmosphere.glow-or-light/subliminal-bloom -->
### 4. Subliminal bloom

*Feeling: the content feels lit, and nobody can say why.*

**Use it for:** Centred sections on black or white that feel too flat, and long pages of white cards that need separation without borders. **Avoid:** A visible colour. If you can name the hue at a glance, it is too strong.

One radial, 800 to 1400px wide, peak 9 levels above the ground on dark or a 6 to 10% tint on light, no visible edge, dithered with grain at .02 opacity. Gone by the fold, or by the next chapter on long pages.

Measured peak on black is about #090f1d, at 500px down, back to #000 by 700px. On white, a peak near #deecfb fading to #fbfcfe before the fold. On a #f5f5f5 page, accent ellipses at 8% alpha reach only 4 to 14 levels from the ground, one behind each chapter, and fade out before the next. A blurred orb is the same idea with a stronger peak, and it should sit behind panels rather than in empty space.

**Seen on** CleanShot X, Penpot, React Email, Motionstrand, Upstash. **Suits** gradient-light, dark-precision; saas, devtool, agency.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.lit{position:relative;height:900px;overflow:hidden;text-align:center;padding-top:300px;background:#000;color:#f1f7fe;isolation:isolate;
  --peak:oklch(from var(--accent) .17 .03 h)}
/* peak is about L .17: nine levels above black. dither it, or the steps show on any good monitor */
.lit::before,.lit::after{content:"";position:absolute;left:50%;top:150px;width:1000px;height:600px;margin-left:-500px}
.lit::before{background:radial-gradient(50% 50% at 50% 50%,var(--peak),color-mix(in srgb,var(--peak) 72%,transparent) 38%,color-mix(in srgb,var(--peak) 24%,transparent) 68%,transparent)}
.lit::after{background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.022;-webkit-mask:radial-gradient(50% 50% at 50% 50%,#000,transparent);mask:radial-gradient(50% 50% at 50% 50%,#000,transparent)}
.lit h2{position:relative;z-index:2;margin:0}
</style>
<section class="lit"><h2>Connect a new carrier</h2></section>
```

<!-- v:atmosphere.glow-or-light/light-inside-the-render -->
### 5. Light inside the render

*Feeling: real light from a real scene.*

**Use it for:** 3D heroes, portfolios and brand worlds. **Avoid:** CSS glow laid on top of a render. It separates instantly.

All light belongs to the render: additive streaks, signs, rim fringes, soft shadow edges. No CSS glow over it. Background stays black or a flat floor. Bloom stays inside the image and falls to ground before its edge.

dbydt adds thin translucent lines along each axis of its buildings, blurred lengthwise, so it reads as a long exposure with no halos. Teenage Engineering gets its only gradient from a soft shadow edge on a grained floor.

**Seen on** Custom Multicades, lorisbukvic.graphics, Deebak Tamilmani Portfolio, OREO & BTS - Love Letter Site, Teenage Engineering. **Suits** render-3d, dark-precision; portfolio, architecture, food-drink, brand.

<!-- v:atmosphere.glow-or-light/warm-focal-radial -->
### 6. Warm focal radial

*Feeling: a patch of sun on a white wall.*

**Use it for:** A centred CTA on a light health or consumer page. **Avoid:** A dark or busy ground. The effect needs clear white around it.

Elliptical radial about 780 by 400px of a warm tint fading to page colour with no edge, behind a centred CTA block on a light page. A focal point, not a wash. Keep the peak light enough for dark text.

Ritual sets a 780 by 400px ellipse of pale yellow behind a centred CTA and lets it reach white with no edge. It works as sunlight because the ground around it stays pure and empty.

**Seen on** Ritual. **Suits** photo-led; health.

<!-- v:atmosphere.glow-or-light/colour-as-horizon-light -->
### 7. Colour as horizon light

*Feeling: brand colour as stage lighting.*

**Use it for:** Object and luxury heroes, watches, devices. **Avoid:** Every section. Use it around a few shots only.

Accent gradient rises from the bottom of a black frame behind the object and fades to black by 40% of the height. Used in a few shots only. Brand colour becomes light rather than UI.

**Seen on** Orion Icon Library, YLEM. **Suits** render-3d, light-precision; fashion, other.

<!-- v:atmosphere.glow-or-light/corner-light -->
### 8. Corner light

*Feeling: a lamp just out of frame.*

**Use it for:** Dark cards, and dark heroes that need copy to stay on black. **Avoid:** All four corners. Light has a source, so pick one side.

Accent radial rises from one corner of a card, or from both top corners of a hero, gone by 40% of height, centre stays dark. Card: 1px tinted border, radius 12px. Hero: arched so copy stays on black.

**Seen on** Bitnomi, SC Program. **Suits** dark-precision; education, finance.

<!-- v:atmosphere.glow-or-light/neon-edge-on-frame -->
### 9. Neon edge on frame

*Feeling: a live thing inside a dark tool. Suggests selection.*

**Use it for:** Canvas and builder products, where the outline means something real. **Avoid:** As decoration on a generic card. On UI that is not selected, it is a neon sign.

A 2px accent outline around one product frame, 20 to 40px blurred outer glow of the same hue, deep tinted fill falling inward. One instance only, on a black page. It is the single saturated moment.

**Seen on** Framer, Plumeform. **Suits** dark-precision; saas.

<!-- v:atmosphere.glow-or-light/hard-cut-inner-bloom -->
### 10. Hard cut inner bloom

*Feeling: a shape cut from black and lit from behind.*

**Use it for:** Expressive devtools with a strong logo silhouette. **Avoid:** Soft outer edges. The hard silhouette is what makes the bloom read as light.

A large black shape with a hard silhouette masks an accent fill. Inside the shape, the accent blooms about 120px into the black. Hard outer edge plus soft inner light reads as a cut-out lit from behind.

**Seen on** CockroachDB. **Suits** expressive; devtool.

<!-- v:atmosphere.glow-or-light/light-ribbon-object -->
### 11. Light ribbon object

*Feeling: a small iridescent object on a quiet page.*

**Use it for:** Personal and portfolio sites that are otherwise monochrome. **Avoid:** Scaling it up. At hero size this is just another gradient.

A small 580 by 112px canvas between bio and work: a soft spectral ribbon that morphs, blurred at the edges, fading into the page at both ends. The only colour field on the page.

**Seen on** Aniket. **Suits** light-precision; portfolio.

<!-- v:atmosphere.glow-or-light/underglow-behind-glass -->
### 12. Underglow behind glass

*Feeling: uI casting light onto the page.*

**Use it for:** Dark AI and analytics pages with floating frosted cards. **Avoid:** Blooms in empty space. Light belongs under something.

A 400px radial blur in the accent directly under frosted cards on #0a0a0a. Cards 60 to 80% opaque with white 1px edges. Light appears only where UI sits, never on empty page.

**Seen on** Decagon. **Suits** soft-pastel; ai.

<!-- v:atmosphere.glow-or-light/glow-reveals-grid -->
### 13. Glow reveals grid

*Feeling: a flashlight on a blueprint.*

**Use it for:** Dark developer heroes. **Avoid:** A grid that extends past the glow. That is just a grid with a blob on it.

A 700px soft radial in a dark accent tint behind the media, revealing a 48px square grid only inside the glow. The grid is masked by the same radial and is gone before the viewport edge, so the copy side stays clean.

**Seen on** UploadThing. **Suits** bold-colour; devtool.

<!-- v:atmosphere.glow-or-light/rule-bleed -->
### 14. Rule bleed

*Feeling: a tidy join.*

**Use it for:** Dark hero meeting a light page on a docs or tool site. **Avoid:** Expecting it to be a feature. It is a detail.

Where a dark hero meets a light page, a 6px solid tint line, then 30px fading to the page. A cheap, tidy join with no curve or image.

**Seen on** Electron. **Suits** light-precision; devtool.

### Mistakes that cheapen light

- **The blob behind the headline.** A big blurred circle in the accent is the generated default. If the shape is visible, the glow has failed.
- **Light with no source.** Bloom in empty space looks pasted on. Put it under, behind or on the edge of something.
- **Too bright.** Most good glows stay under 8% white. Try half of what you think you need.
- **No dither.** A faint radial on black bands on any good monitor. Add grain at .02.
- **A rounded streak.** My first lens streak was too tall and read as a soft oval. The measured ratio is about 16 to 1.
- **A spectrum running the wrong way.** My first limb started the conic in the wrong place, so the colours crawled up one side. Start at about -42 degrees so the spectrum spans the top of the arc.
- **Glow on every card.** Light means this one. On three cards it means nothing.
- **CSS glow over a render.** It separates instantly. Light belongs inside the image.

## Mesh or 3D backdrop

A live field has to give a page depth that flat design cannot, without becoming the thing you are looking at instead of the content. It is rare: only 13 rows in this family, and only 2 from gold sites. Most strong commercial pages never need one.

What separates great from cheap is whether the field has a subject. Inngest's particle sheet is a calm texture that keeps the end of a page alive. Peloton's dot dome reads as terrain and seismic data, which is the business. Better Auth's stippled mark is the logo. Cheap versions are a generic network wave or a floating sphere with no link to anything, moving too fast. Great fields move like breathing, sit behind low-content sections, and look finished as a still frame.

Keep movement slow, with one cycle of six seconds or longer. Cap the frame rate at about 30 for background canvases, match the canvas to its display size, pause it off screen, and honour `prefers-reduced-motion`. Ship a good still first, because a canvas that has not loaded must not leave a hole.

<!-- v:atmosphere.mesh-or-3d-backdrop/point-cloud -->
### 1. Point cloud

*Feeling: a field of data with weight and depth. Alive without being loud.*

**Use it for:** Closing sections and dark devtool heroes, over a grained ground. **Avoid:** Behind reading text. Points and letters interfere at any contrast.

Canvas or WebGL point sheet, 8,000 to 100,000 points, 1 to 2px, grey or one hue, shaped as a soft tilted cloud or a real form. Density falls off, brightness does not. Slow drift. Behind low-content sections, over grain.

Two ranges: a flat 1100 by 300px sheet that keeps the end of a page alive, or a full-viewport fixed world, such as a road, a board or a globe with depth of field, that panels scroll over.

**Seen on** Inngest, Remix, Language Explorer. **Suits** render-3d, dark-precision; devtool, other.

```html
<canvas id="sheet" width="1440" height="900" style="width:100%;display:block;background:var(--bg)"></canvas>
<script>
// a soft tilted ellipse, never a line. dots stay 1 to 1.6px; only density falls off
const s=document.getElementById('sheet').getContext('2d'),gauss=R=>(R()+R()+R()+R()-2)/2;
function sheet(t){s.clearRect(0,0,1440,900);let q=11;const R=()=>(q=q*16807%2147483647)/2147483647;
  for(let i=0;i<9000;i++){const u=gauss(R)*1.5,v=gauss(R)*1.5,x=880+u*520,y=600-u*150+v*150+Math.sin(u*3+t*.4)*18+Math.sin(u*7-v*4+t*.25)*7;
    const fall=Math.exp(-(u*u*1.1+v*v*1.5)),a=(.16+R()*.7)*Math.min(1,fall*2.2),z=R()>.82?1.6:1;
    s.fillStyle=`rgba(226,226,226,${a})`;s.fillRect(x,y,z,z)}}
// draw once so a still is ready, then only move while on screen
let seen=true;new IntersectionObserver(e=>seen=e[0].isIntersecting).observe(s.canvas);
sheet(0);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)(function f(n){if(seen)sheet(n/1000);setTimeout(()=>requestAnimationFrame(f),80)})(0);
</script>
```

<!-- v:atmosphere.mesh-or-3d-backdrop/grain-shader-field -->
### 2. Grain shader field

*Feeling: warm, slow and analogue, in a way CSS cannot get.*

**Use it for:** Heroes for calm software, and any brand that needs a custom material. **Avoid:** Fast movement. Anything quicker than a slow breath looks like a screensaver.

WebGL panel with slow two-colour noise, per-pixel grain at .045, optional 1px arcs at 30% alpha with small bursts where they cross. Inset radius 12px or full viewport. Body hue range under 40 degrees.

On a dark ground the same shader becomes a liquid swirl: thin contours at about 10% visibility over near-black, dark enough for white type.

**Seen on** Meridian, Swirple. **Suits** bold-colour, expressive; saas, other.

```html
<canvas id="field" style="display:block;width:100%;height:868px;background:var(--accent)"></canvas>
<script>
const c=document.getElementById('field'),g=c.getContext('webgl',{antialias:false,preserveDrawingBuffer:true});
// read the accent from your tokens. the second colour is a small hue step from it, so the body stays in one family
const p=document.createElement('canvas').getContext('2d',{willReadFrequently:true});p.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();p.fillRect(0,0,1,1);
const px=p.getImageData(0,0,1,1).data,accent=[px[0]/255,px[1]/255,px[2]/255],warm=[Math.min(1,accent[0]*1.04),Math.min(1,accent[1]*1.22),accent[2]*.94];
const FS=`precision highp float;uniform vec2 r;uniform float t;uniform vec3 A,B;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,v=0.;for(int i=0;i<4;i++){v+=a*n(p);p*=2.02;a*=.5;}return v;}
float ring(vec2 p,vec2 c,float r){return abs(length(p-c)-r);}
void main(){vec2 u=gl_FragCoord.xy/r.y;vec2 q=vec2(fbm(u*.9+t*.02),fbm(u*.9+4.+t*.015));float f=fbm(u*.8+q*.6);
vec3 col=mix(B,A,smoothstep(.15,.95,u.x/(r.x/r.y)*.75+f*.5));
float a=ring(u,vec2(.42,.62),.62),b=ring(u,vec2(1.05,.3),.74),c=ring(u,vec2(1.3,.86),.52);
float m=min(a,min(b,c)),line=smoothstep(1.4/r.y,.2/r.y,m),j=exp(-(a+b)*90.)+exp(-(b+c)*90.)+exp(-(a+c)*90.);
col=mix(col,vec3(1.,.9,.72),line*.3+clamp(j,0.,1.)*.75);
col+=(h(gl_FragCoord.xy+fract(t))-.5)*.045;gl_FragColor=vec4(col,1.);}`;
const sh=(ty,s)=>{const o=g.createShader(ty);g.shaderSource(o,s);g.compileShader(o);return o},P=g.createProgram();
g.attachShader(P,sh(g.VERTEX_SHADER,'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'));g.attachShader(P,sh(g.FRAGMENT_SHADER,FS));g.linkProgram(P);g.useProgram(P);
g.bindBuffer(g.ARRAY_BUFFER,g.createBuffer());g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),g.STATIC_DRAW);g.enableVertexAttribArray(0);g.vertexAttribPointer(0,2,g.FLOAT,false,0,0);
const U=k=>g.getUniformLocation(P,k);g.uniform3fv(U('A'),accent);g.uniform3fv(U('B'),warm);
const size=()=>{c.width=c.clientWidth;c.height=c.clientHeight;g.viewport(0,0,c.width,c.height);g.uniform2f(U('r'),c.width,c.height)};size();addEventListener('resize',size);
const draw=n=>{g.uniform1f(U('t'),n/1000);g.drawArrays(g.TRIANGLES,0,3)};draw(0);
let seen=true;new IntersectionObserver(e=>seen=e[0].isIntersecting).observe(c);
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)(function f(n){if(seen)draw(n);setTimeout(()=>requestAnimationFrame(f),33)})(0);
</script>
```

<!-- v:atmosphere.mesh-or-3d-backdrop/dot-terrain -->
### 3. Dot terrain

*Feeling: instrumented ground. Reads as seismic or terrain data.*

**Use it for:** Industrial, energy, logistics and infrastructure heroes. **Avoid:** A generic network wave with no link to the business. The internet is full of those.

Canvas grid of 30 rows of square dots forming a low dome across the hero base. Near rows 4px, pitch 15px, far rows 1px, pitch 5px. Alpha .16 to .62, fading at crest and sides. A few accent points.

**Seen on** Peloton, David Heckhoff. **Suits** render-3d, dark-precision; portfolio, saas.

```html
<canvas id="dome" width="1440" height="300" style="width:100%;display:block;background:var(--bg)"></canvas>
<script>
const d=document.getElementById('dome').getContext('2d'),tone=getComputedStyle(document.documentElement).getPropertyValue('--ink-3').trim()||'#aab';
// a low dome. near rows are large and wide apart, far rows small and tight. both sides and the crest fade out
function dome(t){d.clearRect(0,0,1440,300);d.fillStyle=tone;const rows=30;
  for(let r=0;r<rows;r++){const k=r/(rows-1),near=k**1.5,pitch=5+near*10,sz=1+near*3.2;
    for(let x=-20;x<1460;x+=pitch){const c=(x-720)/760,h=Math.exp(-c*c*1.6),y=118+k*170-h*(1-k)*104+Math.sin(x*.006+r*.5+t*.5)*5*(1-k*.6);
      d.globalAlpha=Math.max(0,(.16+.46*near)*Math.min(1,(1-Math.abs(c)*.92)*2.2)*Math.min(1,k*3+.12));d.fillRect(x,y,sz,sz)}}}
let seen=true;new IntersectionObserver(e=>seen=e[0].isIntersecting).observe(d.canvas);
dome(0);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)(function f(n){if(seen)dome(n/1000);setTimeout(()=>requestAnimationFrame(f),60)})(0);
</script>
```

<!-- v:atmosphere.mesh-or-3d-backdrop/stippled-mark-in-bars -->
### 4. Stippled mark in bars

*Feeling: a logo printed in a field of static.*

**Use it for:** Developer libraries that want a graphic hero without colour. **Avoid:** Marks with fine detail, which stipple destroys.

Extruded logo mark about 240px in pale stipple behind the headline, inside a field of 1px vertical bars at varied spacing, 10% grey, dissolving outward. Bars redraw on scroll.

Better Auth uses a mark about 240px wide with a field of bars at about 10 percent grey that dissolves outward. The bars redraw on scroll, so a colourless hero still has motion.

**Seen on** Better Auth. **Suits** light-precision; devtool.

<!-- v:atmosphere.mesh-or-3d-backdrop/voxel-flanks -->
### 5. Voxel flanks

*Feeling: toy blocks at giant scale. Playful and exact.*

**Use it for:** Bold SaaS and builder tools whose product is made of units. **Avoid:** Shading or textures on the blocks. Flat two-tone plus lines is what keeps it graphic.

Huge isometric blocks, flat shaded, two tones plus thin grid lines, rise from both bottom corners and crop off-screen, leaving the centre clear. The same units rebuild later as letters.

**Seen on** Relume. **Suits** bold-colour; saas.

<!-- v:atmosphere.mesh-or-3d-backdrop/smoke-field -->
### 6. Smoke field

*Feeling: fog on a stage. Mood first.*

**Use it for:** Portfolios and expressive brands. **Avoid:** Product pages. It says nothing about the product.

Full-viewport WebGL or video smoke, low contrast, one hue or grey, radial vignette to near-black, lighter centre, movement over six seconds or more. Content sits directly on it with no cards.

**Seen on** Adrien Quéchon 2026 Website, Enigma. **Suits** expressive; portfolio, ecommerce.

<!-- v:atmosphere.mesh-or-3d-backdrop/glyph-vortex -->
### 7. Glyph vortex

*Feeling: machine text in motion.*

**Use it for:** Developer brands with a short, strong name. **Avoid:** Long names. It needs a tight alphabet to feel deliberate.

Canvas of grey letters from the brand name plus slashes, 8 to 24px, size implying depth, spiralling around the centre on a dark ground, thinning behind the heading. Slow rotation.

**Seen on** Docker. **Suits** light-precision; devtool.

<!-- v:atmosphere.mesh-or-3d-backdrop/lit-3d-sky -->
### 8. Lit 3D sky

*Feeling: a place, not a page.*

**Use it for:** Games and interactive experiences. **Avoid:** Any commercial site with a job to do.

Real-time 3D sky with a deep-to-bright gradient, volumetric shafts and one glowing cloud mass in the foreground.

**Seen on** The Aviator. **Suits** render-3d; other.

### Mistakes that cheapen a live field

- **No subject.** If it could sit on any company's site, it is stock. Tie it to the product, the data or the logo.
- **Too fast.** Anything quicker than slow breathing looks like a screensaver.
- **Points behind reading text.** Dots and letters interfere at any contrast. Keep text clear of the field.
- **Dots that shrink as they fade.** Density should fall off and dot size should hold, or the cloud looks like a bad blur. My first sheet faded by size and looked soft.
- **A line of points.** A sheet needs a soft tilted ellipse. My first version was a strip and read as a progress bar.
- **Hue drift in a shader.** Keep the body of a noise field within about 40 degrees of hue, or it reads as a lava lamp.
- **A blank frame on load.** Render the first frame at once, and set a matching background colour on the canvas.

## Grid or lines

Lines must show that a page has structure, and the structure has to be real. A visible grid is a promise that the content sits on it. Keep the promise and the page reads as engineered. Break it and the lines become wallpaper.

What separates great from cheap is alignment and restraint. Stripe's rails are full-height lines that nav rules, stat cells and footers connect into, with content sitting exactly 16px inside. Cheap versions lay a 40px square grid across the whole hero at low opacity, centre a headline on it, and align nothing to it. That full-page faint grid is one of the most common generated backgrounds.

| Site | Device | Position | Line |
|---|---|---|---|
| Stripe Billing | Page rails | x 88 and 1352 | #e5edf5 |
| Codeium | Page rails | x 80 and 1360 | #e5e5e5 |
| Stripe Climate | Column guides | x 180, 450, 720, 990, 1260 | Dashed #e6ebf1 |
| Payload | Exposed columns | x 64, 392, 720, 1047, 1375 | White 12% |
| Zed Pricing | Rails with nodes | x 160, 1280, dashed at 48, 1392 | Pale, white diamonds |
| LiveKit | Square grid | 70px cells | White about 17% |
| Modern Treasury | Corner grid | 36px cells | Pale, masked by mid-page |
| Render | Pixel wash | 16px cells, 80px major | Barely above white |

Lines measure 1px almost everywhere, at about 6 to 10% ink on light and 8 to 17% white on dark. On a section that changes ground, keep the x position and change the colour, so the grid survives the inversion. Attio and Authkit both carry their rails through a dark band at white 10%. See `layout` for how rails drive the grid itself. This element covers how they read as atmosphere.

<!-- v:atmosphere.grid-or-lines/blueprint-rails-with-nodes -->
### 1. Blueprint rails with nodes

*Feeling: a technical drawing of the page itself.*

**Use it for:** Developer tools, docs, and mono-technical brands. **Avoid:** Nodes at random. A node belongs at a real crossing.

Solid column rails, dashed outer rails 40px out, horizontal rules that bleed past them, and a 6 to 12px white square or diamond node at every real crossing. All pale, 1px. The layout becomes the drawing.

On a dark ground use white 12% rules, plus marks at key intersections and 45 degree hatching in empty cells.

**Seen on** Zed Pricing, Cloudflare Workers, ReadMe, Payload, Framify. **Suits** mono-technical, light-precision, dark-precision; devtool, ecommerce.

```html
<style>
.sheet-wrap{overflow:clip}
.print{position:relative;max-width:1200px;margin:0 clamp(16px,calc(50% - 600px),50%);border-inline:1px solid var(--line);min-height:560px;--dash:color-mix(in oklab,var(--line) 70%,var(--ink) 10%)}
.print::before,.print::after{content:"";position:absolute;inset-block:0;border-left:1px dashed var(--dash)}
.print::before{left:40px}.print::after{right:40px}
/* a horizontal rule that bleeds past the column, with a node at every real crossing */
.print .cross{position:relative;height:0;border-top:1px solid var(--line)}
.print .cross::before{content:"";position:absolute;inset:-1px -120px auto;border-top:1px dashed var(--dash)}
.print .cross i{position:absolute;top:-6px;width:11px;height:11px;background:var(--bg);border:1px solid var(--dash);z-index:2}
.print .cross i:nth-child(1){left:-6px}.print .cross i:nth-child(2){right:-6px}.print .cross i:nth-child(3){left:34px}.print .cross i:nth-child(4){right:34px}
.print .body{padding:64px clamp(24px,5vw,68px)}
</style>
<div class="sheet-wrap"><div class="print"><div class="cross"><i></i><i></i><i></i><i></i></div><div class="body"><h2>What you can route</h2></div>
<div class="cross"><i></i><i></i><i></i><i></i></div><div class="body">Cells, cards and diagrams sit inside the drawn structure.</div></div></div>
```

<!-- v:atmosphere.grid-or-lines/fading-square-grid -->
### 2. Fading square grid

*Feeling: graph paper on a dark desk, or a soft technical bed behind a hero.*

**Use it for:** Dark devtool sections and pale hero corners. **Avoid:** Grid under body text, and full-page grid with no fade. That is the generated default.

Square grid 16 to 70px, 1px, about 16% white on dark or 6% on light, in one zone only and masked to nothing toward the copy. One solid object may break it. Cells can hold real stats.

The analysts guessed 10% on the strongest example. Pixels measure about 17%. A mask eats more than you expect, so keep the line honest and let the mask quiet it.

**Seen on** LiveKit, Modern Treasury, Render. **Suits** light-precision, dark-precision; devtool, finance.

```html
<style>
.field{position:relative;height:640px;overflow:hidden;background:var(--bg)}
/* keep the line honest, about 16% white, and let the mask do the quieting. dim lines plus a mask disappear */
.field .lines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.16) 1px,transparent 1px);background-size:70px 70px;background-position:-1px -1px;
  -webkit-mask:linear-gradient(180deg,#000 55%,transparent);mask:linear-gradient(180deg,#000 55%,transparent)}
/* one solid object breaks the grid, which stops it reading as wallpaper */
.field .disc{position:absolute;left:50%;top:40px;width:min(560px,80%);aspect-ratio:1;translate:-50% 0;border-radius:50%;background:color-mix(in srgb,var(--bg) 92%,#000);box-shadow:0 0 0 1px rgba(255,255,255,.08)}
</style>
<div class="field"><div class="lines"></div><div class="disc"></div></div>
```

<!-- v:atmosphere.grid-or-lines/page-rails -->
### 3. Page rails

*Feeling: a ledger. The page has a structure you can see.*

**Use it for:** Finance, developer platforms, any long page on white. **Avoid:** Rails that stop and start. They must run from nav to footer, or end somewhere deliberate.

Two 1px rails at about x=88 and viewport minus 88 run the whole page through white and tinted bands. Full-bleed rules at section ends meet them, stat cells connect into them, content sits 16px inside. Line colour 6 to 10% ink.

Measured rail colours: #e5edf5, #e5e5e5, #eaeaea. On a blue section the same rails switch to white 10%. Allow them to stop for one CTA band.

**Seen on** Devin Desktop (codeium.com redirect), Stripe Billing, jemmic. **Suits** light-precision; ai, finance, saas.

```html
<style>
/* rails live on the page wrapper, so they pass through white and tinted bands alike */
.railed{position:relative;--rail:clamp(16px,6vw,88px)}
.railed::before,.railed::after{content:"";position:absolute;inset-block:0;width:1px;background:var(--line);z-index:3}
.railed::before{left:var(--rail)}.railed::after{right:var(--rail)}
.railed .in{margin-inline:calc(var(--rail) + 16px)}
.railed .full-rule{border-top:1px solid var(--line)}
.railed .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-inline:-16px;border-block:1px solid var(--line)}
.railed .stats div{padding:32px 16px;border-left:1px solid var(--line)}
.railed .stats div:first-child{border-left:0}
</style>
<div class="railed">
  <div class="in" style="padding-block:96px 64px"><h2>Clear more holds with the same desk.</h2></div>
  <div class="in"><div class="stats"><div>12 min</div><div>41 ports</div><div>2,300</div><div>98%</div></div></div>
  <div style="height:220px"></div>
</div>
```

<!-- v:atmosphere.grid-or-lines/perspective-room -->
### 4. Perspective room

*Feeling: standing inside the product.*

**Use it for:** One dark developer hero. **Avoid:** Neon synthwave colour, which belongs to a game jam.

One-point perspective wireframe drawn from a vanishing point, back wall about a third of the viewport, rays plus frames on a perspective series, 1px #1c1c1c on near-black, small lattice dots, masked to 25% behind the headline.

**Seen on** Sourcegraph, YOLO.EXE. **Suits** dark-precision, expressive; devtool, education.

```html
<svg id="room" viewBox="0 0 1440 900" style="display:block;width:100%;background:var(--bg);-webkit-mask:radial-gradient(46% 34% at 50% 30%,rgba(0,0,0,.25),#000);mask:radial-gradient(46% 34% at 50% 30%,rgba(0,0,0,.25),#000)"></svg>
<script>
// draw it from a vanishing point. rays leave the back wall, frames step out on a perspective series, never even spacing
const vx=720,vy=430,bw=250,bh=150,rays=9,steps=[1,1.18,1.42,1.78,2.35,3.3,5];let p='',dots='';
const ray=(x,y)=>p+=`M${x} ${y}L${vx+(x-vx)*6} ${vy+(y-vy)*6}`;
for(let i=0;i<=rays;i++){const x=vx-bw+i/rays*2*bw;ray(x,vy-bh);ray(x,vy+bh)}
for(let i=1;i<6;i++){const y=vy-bh+i/6*2*bh;ray(vx-bw,y);ray(vx+bw,y)}
for(const k of steps)p+=`M${vx-bw*k} ${vy-bh*k}h${2*bw*k}v${2*bh*k}h${-2*bw*k}z`;
for(const k of steps.slice(1,5))for(let i=0;i<=rays;i++)for(const y of[vy-bh*k,vy+bh*k])dots+=`<rect x="${vx+(-bw+i/rays*2*bw)*k-1}" y="${y-1}" width="2" height="2"/>`;
document.getElementById('room').innerHTML=`<path d="${p}" fill="none" stroke="#1c1c1c" shape-rendering="crispEdges"/><g fill="#444">${dots}</g>`;
</script>
```

<!-- v:atmosphere.grid-or-lines/exposed-column-guides -->
### 5. Exposed column guides

*Feeling: the designer left the guides on, on purpose.*

**Use it for:** Editorial and finance pages with a strict column grid. **Avoid:** Guides that content ignores. If nothing sits on them they are wallpaper.

Four or five 1px vertical guides on a 270px column, inner dashed, outer solid, about 6% ink, running nav to footer behind everything. Content actually aligns to them. Visible only in whitespace.

Stripe sets guides at x 180, 450, 720, 990 and 1260, a 270px column, with solid outer lines and dashed inner ones. Feature columns sit exactly on them, so the decoration is also the proof that the layout is exact.

**Seen on** Stripe Climate, Stripe Pricing, Stripe Blog, Royal College of Art, ConceptCore. **Suits** light-precision, gradient-light, expressive, photo-led; finance, education, editorial.

<!-- v:atmosphere.grid-or-lines/construction-geometry -->
### 6. Construction geometry

*Feeling: the compass marks left on the drawing.*

**Use it for:** Studios and editorial product pages with a lot of white. **Avoid:** Too many shapes. One or two circles and a few lines.

Page-wide SVG underlay: one or two circles 700 to 900px plus a few long diagonals or ellipses, 1px at 8% ink, cropped by the viewport. Fixed or slow. One arc may carry a travelling highlight.

On dark, two overlapping 700px circles at white 8%, with fine hatching in the lens where they cross, make a compact signature.

**Seen on** Comet, Prototype, Linear Method, CMBLU. **Suits** dark-precision, warm-neutral, photo-led; ai, agency, saas, other.

<!-- v:atmosphere.grid-or-lines/graph-paper-ground -->
### 7. Graph paper ground

*Feeling: a maker's worksheet.*

**Use it for:** Ecommerce and brands about making things, with cut-out objects casting soft shadows. **Avoid:** Sites with no making in them. Otherwise it is a costume.

Section ground with a 30 to 60px square grid, 1px, one shade from the ground, full bleed. Objects cast soft shadows on it. Translucent cards let lines continue through.

Bellroy sets a 30px grid on a warm white ground and lets cut-out objects cast soft shadows onto it, so the section reads as a maker's worksheet. Hydroflow uses 36px with translucent cards, so the lines continue through them. Relume puts a 10px grid with 60px major lines behind portraits, tying the page to its product canvas.

**Seen on** Bellroy, Money in Check, Relume, HYDROFLOW. **Suits** photo-led, type-led, bold-colour, render-3d; ecommerce, brand, saas, food-drink.

<!-- v:atmosphere.grid-or-lines/survey-rays-and-diagonals -->
### 8. Survey rays and diagonals

*Feeling: empty space with a drawn reason to be there.*

**Use it for:** Investors, finance and agencies with generous padding. **Avoid:** Lines under text. They live in the gaps.

Three to five 1px rays fan from a rail corner across an empty band and land on the next section rule, or a few accent diagonals kink behind panels. Spacing becomes a drawn thing. Margins only.

Greylock fans three to five 1px rays from a rail corner across an empty band and lands them on the next section rule, so padding becomes a drawn thing. Lines stay in margins and never run under text.

**Seen on** Greylock, Universally Speaking, Dogstudio, Desktop.fm. **Suits** render-3d, light-precision, bold-colour; agency, finance, other.

<!-- v:atmosphere.grid-or-lines/crosshair-sight-grid -->
### 9. Crosshair sight grid

*Feeling: crop marks and registration targets.*

**Use it for:** Mono-technical portfolios and studios. **Avoid:** Dense pages. The marks need air to read.

Fixed sparse 1px lines or 3px plotted dots on a 100 to 400px pitch across the page, with 10px plus marks at intersections. Type overprints it. Reads as crop marks rather than a pattern.

**Seen on** Bohdan Ratiiev: Born From Code, SUTÉRA. **Suits** mono-technical; portfolio.

<!-- v:atmosphere.grid-or-lines/ghost-linework -->
### 10. Ghost linework

*Feeling: an engineering drawing showing through the page.*

**Use it for:** Industrial and hardware brands with real CAD to show. **Avoid:** Fake drawings. Use the real outlines of the real product.

Fixed 1px outlines of a technical drawing, or dashed isometric traces, at 6 to 15% alpha, scaled past the viewport, behind grey and black sections. Routes lead toward the central object. Ruled cells sit on top.

**Seen on** Plvs Ultra, Telkom-OT. **Suits** mono-technical; ai, other.

<!-- v:atmosphere.grid-or-lines/textured-gutters-outside-rails -->
### 11. Textured gutters outside rails

*Feeling: a clean page in a decorated frame.*

**Use it for:** Dark devtools that want texture without touching content. **Avoid:** Letting the texture cross the rail. That single rule is the whole idea.

A 1320px frame of 1px rails. The 60 to 80px gutters outside hold contour line art or a dot grid at low opacity on every section. Interior stays clean, so the margins become the texture.

**Seen on** Postman, Strapi. **Suits** dark-precision, light-precision; devtool.

<!-- v:atmosphere.grid-or-lines/hairlines-over-media -->
### 12. Hairlines over media

*Feeling: a grid laid over the photograph.*

**Use it for:** Architecture and type-led image heroes. **Avoid:** Busy images. The rules must stay readable.

1px white 20% horizontal hairlines at nav base and mid-hero plus column ticks, drawn over full-bleed imagery to structure overlaid text rows.

**Seen on** Studio Dado. **Suits** type-led; architecture.

<!-- v:atmosphere.grid-or-lines/working-field -->
### 13. Working field

*Feeling: the background is doing a job.*

**Use it for:** One expressive studio or campaign page. **Avoid:** Anything with a normal job to do.

The page field is a working instrument: thin accent lines from the centre act as a live clock or gauge, running off-screen, tied to a visible timestamp. One concept, one page.

**Seen on** Overtime. **Suits** mono-technical; agency.

### Mistakes that cheapen lines

- **The full-page faint grid.** With nothing aligned to it, it is wallpaper. Fade it into one zone, or make it the real layout grid.
- **Lines under body text.** Rules through sentences hurt reading. Keep text in clean cells.
- **Lines too dim, then masked.** A mask eats more than you expect. I started the LiveKit grid at the 10% an analyst recorded and it vanished. Pixels measure about 17%. Keep the line honest and let the mask quiet it.
- **Even spacing in perspective.** My first room used equal gaps and looked flat. Frames must step on a perspective series, such as 1, 1.18, 1.42, 1.78, 2.35, 3.3.
- **Nodes at random.** A node belongs on a real crossing. If there is no crossing, there is no node.
- **Rails that stop and start.** Run them nav to footer, or end them somewhere deliberate, such as one CTA band.
- **Lines that shift at a colour change.** The x position is what proves it is one grid.

## Pattern

A pattern says this is ours. Its job is to add identity and rhythm in the places content does not need, which are margins, gutters, seams and blank cells. It is the device most able to give a page an ownable look, and the one most likely to fight the words.

What separates great from cheap is where the pattern goes and where it came from. Cloudflare's dots stop at the rails. Baseten's halftone replaces section dividers entirely, and white blocks bite stepped notches out of it. Lithic's contour lines bleed off one corner and change colour per panel. Those patterns have a place, and they usually come from the brand or the product. A cheap pattern is a dot grid behind a hero headline or a pale blob with no idea behind it.

Measured ranges: dots are 1 to 2px on a 3 to 16px pitch. Hatch is 1px at 45 degrees on about a 5px pitch, at about 9% ink. Stripes are 20 to 36px. Pixel cells are 12 to 24px, and 14px on the sharpest example. Glyph cells are 6 to 7px. Contrast is usually under 6%, except where the pattern is the signature graphic.

Place a pattern in this order of preference: outside the content column, then in a seam between sections, then bleeding off one corner of a panel, then as the signature of one section. Behind reading text is not on the list.

<!-- v:atmosphere.pattern/pixel-dissolve-edge -->
### 1. Pixel dissolve edge

*Feeling: a section boundary turned into the signature graphic.*

**Use it for:** Devtools, and any brand with a bitmap streak. **Avoid:** Big squares. At the 28px the analysts recorded it looked like a game, and the real cell measures 14px.

A block edge breaks into 14px hard squares over 200 to 360px. Odds fall on a curve with a long tail, neighbours raise odds, so mass dissolves. No blur. A section boundary becomes the signature graphic.

A bigger, friendlier version at 12 to 24px works for illustrated brands, dissolving one colour into another across a boundary.

**Seen on** Inngest, Relume, Oatly, MotherDuck. **Suits** dark-precision, bold-colour, expressive, illustrated; devtool, saas, food-drink.

```html
<div style="position:relative;height:644px;background:var(--bg);overflow:hidden;--w:min(340px,45%)"><div style="position:absolute;inset:0 var(--w) 0 0;background:var(--accent)"></div><svg id="px" style="position:absolute;left:calc(100% - var(--w));top:0" width="364" height="644" fill="var(--accent)" shape-rendering="crispEdges"></svg></div>
<script>
// 14px cells. odds fall on a curve with a long tail, and a filled neighbour raises the odds, so mass dissolves instead of confetti
const cell=14,cols=26,rows=46,on={};let r='';
for(let c=0;c<cols;c++){const t=(c+.5)/cols,p=(1-t)**2.1*1.1;for(let y=0;y<rows;y++){const b=(on[c+','+(y-1)]?.12:0)+(on[(c-1)+','+y]?.07:0);
  if(Math.random()<p+b*(1-t)){on[c+','+y]=1;r+=`<rect x="${c*cell}" y="${y*cell}" width="${cell}" height="${cell}"/>`}}}
document.getElementById('px').innerHTML=r;
</script>
```

<!-- v:atmosphere.pattern/stripe-rail -->
### 2. Stripe rail

*Feeling: retro and confident. One line that travels with you.*

**Use it for:** Warm SaaS and devtools with personality. **Avoid:** A ramp with no link to the brand colours, or a route that ignores the layout.

Three or four flat 20 to 36px stripes in a ramped hue family, one continuous route with true concentric corners, passing behind the product and re-emerging. No gradient. A single signature, repeated small.

**Seen on** Loops, Prisma, Sailia, Convex. **Suits** bold-colour, warm-neutral, gradient-light; saas, devtool.

```html
<svg id="rail" viewBox="0 0 1440 900" fill="none" stroke-width="20.5" style="display:block;width:100%;background:var(--bg)"></svg>
<script>
// never translate one path four times: corners go uneven. offset each segment and change each radius by the same amount
function offset(pts,R,d){const seg=pts.slice(0,-1).map((p,i)=>{const q=pts[i+1],L=Math.hypot(q[0]-p[0],q[1]-p[1]),u=[(q[0]-p[0])/L,(q[1]-p[1])/L],n=[u[1],-u[0]];
    return{a:[p[0]+n[0]*d,p[1]+n[1]*d],b:[q[0]+n[0]*d,q[1]+n[1]*d],u}});
  let s=`M${seg[0].a}`;seg.slice(0,-1).forEach((A,i)=>{const B=seg[i+1],cx=Math.abs(A.u[0])>.5?B.a[0]:A.a[0],cy=Math.abs(A.u[0])>.5?A.a[1]:B.a[1],
    cross=A.u[0]*B.u[1]-A.u[1]*B.u[0],r=R[i]+(cross>0?d:-d);
    s+=`L${cx-A.u[0]*r} ${cy-A.u[1]*r}A${r} ${r} 0 0 ${cross>0?1:0} ${cx+B.u[0]*r} ${cy+B.u[1]*r}`});
  return s+`L${seg.at(-1).b}`}
const path=[[1400,-20],[1400,250],[70,250],[70,920]],stripes=[0,1,2,3].map(i=>`oklch(from var(--accent) ${.35+i*.18} .17 calc(h + ${i*14}))`);
document.getElementById('rail').innerHTML=stripes.map((c,i)=>`<path d="${offset(path,[110,110],(i-1.5)*20)}" stroke="${c}"/>`).join('');
</script>
```

<!-- v:atmosphere.pattern/glyph-halftone-figure -->
### 3. Glyph halftone figure

*Feeling: a figure made of data.*

**Use it for:** Security, AI gateways and infrastructure. **Avoid:** Flat silhouettes. A filled logo in dots is an 8-bit sprite. Tone is what makes it a picture.

Monospace glyphs or square dots on a 6 to 7px cell, density modelling a lit form about 550px, bleeding off one edge on a flat ground. Take tone from a render or photo, not a flat silhouette. Reuse small as icons.

**Seen on** Speakeasy, jemmic, CITADEL Construction Group. **Suits** light-precision, bold-colour; devtool, saas, architecture.

```html
<canvas id="gl" width="760" height="640" style="display:block;margin-left:auto;max-width:100%;height:auto;background:var(--bg)"></canvas>
<script>
// tone comes from a lit 3D form, not a flat silhouette. any luminance source works: a photo, a render, this torus
const cell=7,ramp=' .:-^v#',W=760/cell|0,H=640/cell|0,x=document.getElementById('gl').getContext('2d');
x.font='9px ui-monospace,Menlo,monospace';x.fillStyle=getComputedStyle(document.body).color;x.textBaseline='top';
const sdf=(a,b,c)=>{const y=b*.82-c*.57,z=b*.57+c*.82,X=a*.92-z*.39,Z=a*.39+z*.92;return Math.hypot(Math.hypot(X,Z)-1.05,y)-.42},L=[-.5,.72,.48],e=.01;
for(let j=0;j<H;j++)for(let i=0;i<W;i++){const u=(i/W-.56)*2.9,v=-(j/H-.5)*2.45;let t=0,hit=0;
  for(let s=0;s<48;s++){const d=sdf(u,v,-3+t);if(d<.002){hit=1;break}t+=d;if(t>6)break}
  if(!hit)continue;const z=-3+t,n=[sdf(u+e,v,z)-sdf(u-e,v,z),sdf(u,v+e,z)-sdf(u,v-e,z),sdf(u,v,z+e)-sdf(u,v,z-e)],m=Math.hypot(...n),
  lit=Math.max(0,(n[0]*L[0]+n[1]*L[1]+n[2]*L[2])/m),dark=(1-lit)*.62+.04+(Math.random()-.5)*.1,k=Math.max(0,Math.min(6,dark*7|0));
  if(k&&Math.random()>.12)x.fillText(ramp[k],i*cell,j*cell)}
</script>
```

<!-- v:atmosphere.pattern/dot-gutters -->
### 4. Dot gutters

*Feeling: machined and quiet. Pattern as a material, not a decoration.*

**Use it for:** Precise light pages, especially AI and infrastructure. **Avoid:** Dots behind copy. The dot-grid hero is the generated default, and this variant is the opposite of it.

Dot matrix in the page, 1 to 2px dots on a 3 to 16px pitch, pale, only in gutters, seams and bands. White blocks sit on it and bite notches from band edges. Never behind copy. It replaces rules and background changes.

**Seen on** Cloudflare Workers, Baseten, Sanity Pricing, Codecademy, Docker, 9 sites in all. **Suits** light-precision, mono-technical, expressive, dark-precision; devtool, ai, education, finance.

```html
<style>
/* the dots live behind everything. white blocks bite out of them, so copy never sits on dots */
.dotted{padding:12px;min-height:640px;background-image:radial-gradient(color-mix(in oklab,var(--ink) 22%,var(--bg)) .75px,transparent 1px);background-size:3px 3px}
.dotted .block{position:relative;background:var(--bg);padding:56px;text-align:center}
.dotted .block+.block{margin-top:96px}
/* stepped notches on the block edge, so the seam looks machined */
.dotted .bite{position:absolute;background:var(--bg)}
</style>
<div class="dotted"><div class="block"><h2>Logo wall</h2></div>
<div class="block"><i class="bite" style="left:0;top:-14px;width:90px;height:14px"></i><i class="bite" style="left:160px;top:-8px;width:120px;height:8px"></i><i class="bite" style="right:120px;top:-14px;width:70px;height:14px"></i><i class="bite" style="right:320px;top:-8px;width:160px;height:8px"></i><h2>A long statement in one block</h2></div></div>
```

<!-- v:atmosphere.pattern/contour-moire -->
### 5. Contour moire

*Feeling: engineered luxury. Lines that open like a fingerprint.*

**Use it for:** Finance and enterprise tiles, retinted per panel. **Avoid:** Centring the rings. A centred set is an op-art target, and that was my first attempt.

Concentric 1px offsets of one rounded shape, spacing opening quadratically, centre off-canvas, bleeding off one corner, masked to nothing toward the text. Retint per panel at about 30% ink. Moire near the edges is the point.

**Seen on** Lithic, The Warren, Canopy, Essay Gamja. **Suits** warm-neutral, light-precision, bold-colour; finance, agency, food-drink, education.

```html
<div style="position:relative;height:220px;max-width:640px;margin:80px auto;background:var(--surface);border-radius:14px;overflow:hidden;padding:26px 28px;--stroke:color-mix(in oklab,var(--ink) 34%,var(--surface))">
<svg id="ct" viewBox="-320 -230 640 460" fill="none" stroke="var(--stroke)" style="position:absolute;right:-400px;top:-210px;width:640px;height:460px;-webkit-mask:linear-gradient(100deg,transparent 22%,#000 58%);mask:linear-gradient(100deg,transparent 22%,#000 58%)"></svg>
<h3 style="position:relative;margin:0">Direct to carriers</h3></div>
<script>
// centre off canvas, rings open up quadratically, one corner only. centred rings are an op-art target
const sq=(r,n=3.4)=>{let p=[];for(let i=0;i<160;i++){const t=i/160*6.2832,c=Math.cos(t),s=Math.sin(t);p.push((r*Math.sign(c)*Math.abs(c)**(2/n)).toFixed(1)+' '+(r*.82*Math.sign(s)*Math.abs(s)**(2/n)).toFixed(1))}return'M'+p.join('L')+'Z'};
document.getElementById('ct').innerHTML=`<g transform="rotate(-28)">${Array.from({length:30},(_,i)=>`<path d="${sq(40+i*9+i*i*.9)}"/>`).join('')}</g>`;
</script>
```

<!-- v:atmosphere.pattern/hatch-gutters-and-seams -->
### 6. Hatch gutters and seams

*Feeling: drafting margins.*

**Use it for:** Docs, devtools and mono-technical brands. **Avoid:** Hatch at full ink. At 14% it looked heavy in testing, and 9% looked right.

1px 45 degree hatch, 5px pitch, about 9% ink, filling 12px seams between double rules or 40px columns flanking content. Fine barcode lines at 6px pitch also work. Never under running text.

Tailwind docs fill 40px columns beside the text and bound them with 1px rules, so they read as drafting margins down into the footer. Zed uses 12px strips between sections. Axem uses 62px spacers of 1px vertical lines at 6px pitch in white 8%, which feels rack-mounted. Astral ramps slash density across a patch, and keeps it away from text entirely.

**Seen on** Zed Blog, Astral, Tailwind Docs, Shopify Supply | Performance Pack, axem. **Suits** bold-colour, mono-technical, light-precision, expressive; devtool, editorial, ecommerce, ai.

<!-- v:atmosphere.pattern/type-as-texture -->
### 7. Type as texture

*Feeling: content explains itself through texture.*

**Use it for:** Privacy, security and model launches. **Avoid:** Set too large or too dark. It must not ask to be read.

Rows of tracked 12 to 16px mono words or cipher text in faded tints at mixed opacity, dissolving at one side or masked into a ring, or letters set along spokes around a centre.

Reflect masks rows of cipher text into a ring around a lock, so the section explains itself. Meta AI fades tracked mono words to nothing at one side. Polar sets its name along curved spokes with each letter turned to the tangent.

**Seen on** Meta AI, Polar, Hugging Face Pricing, Reflect. **Suits** light-precision, render-3d, dark-precision; saas, ai.

<!-- v:atmosphere.pattern/data-point-field -->
### 8. Data point field

*Feeling: data as image.*

**Use it for:** Search, indexes, finance, AI. **Avoid:** Points in the text column.

Canvas of 2 to 4px squares or dots, one hue, dense at edges and thinning into space, with small mono tags naming clusters. Keep it out of the text column and let it rearrange on scroll.

Exa uses 2 to 4px squares, dense at the edges, with small mono tags naming clusters. Ramp scales one 2px dot language from a hero field to tiles and a globe. Groq keeps orange chips in the margins and rearranges them on scroll, mostly out of the text column.

**Seen on** Exa, Ramp, Groq. **Suits** light-precision, type-led; ai, finance.

<!-- v:atmosphere.pattern/object-grid-fill -->
### 9. Object grid fill

*Feeling: the layout borrows the product.*

**Use it for:** Ecommerce with a grid-like physical product. **Avoid:** Products without that structure.

Empty grid cells hold 4px tinted rails with small star nodes at crossings, echoing the physical product grid. Fills gaps between images without adding content.

Unito fills empty grid cells with 4px pale rails and small star nodes, echoing the physical wall grid it sells. Blank cells become product language instead of gaps.

**Seen on** UNITO. **Suits** warm-neutral; ecommerce.

<!-- v:atmosphere.pattern/enlarged-brand-geometry -->
### 10. Enlarged brand geometry

*Feeling: ownable. Nobody else has this shape.*

**Use it for:** Dark pages and CTA bands that would otherwise reach for a gradient. **Avoid:** A logo with no strong geometry, and any contrast over 5 L*.

Logo geometry enlarged to 200 to 800px, drawn one tone from its ground, 3 to 5 L* apart, sweeping behind sections with its own corners. Replaces a generic gradient on dark pages and CTA bands.

Definitiv Digital draws its logo chevron about 800px wide in #11161d on #070c14, one tone apart. Mirim enlarges its slanted bars across a CTA, slightly darker than the ground. Cockroach Labs repeats its puzzle contour as a 1px outline when its colour is absent.

**Seen on** Mirim, Definitiv Digital, Death to Robots, Noxus, CockroachDB, 6 sites in all. **Suits** warm-neutral, dark-precision, expressive, photo-led; agency, devtool, saas, ai.

<!-- v:atmosphere.pattern/organic-blob-fields -->
### 11. Organic blob fields

*Feeling: soft, human, a little playful.*

**Use it for:** Education, health and consumer brands. **Avoid:** Pale blobs with no idea behind them. Those are the clip art of 2019.

Huge flat blobs, 100 to 400px or larger, hard edges, no gradient, cropped by viewport edges and straddling section breaks, tone on tone or one hue per feature. Riso grain optional. Behind UI, never behind body text.

Bear gives each feature its own huge flat blob and lets them bleed off the page behind the UI. Przebiegły Team keeps it tone on tone, #e2dcd7 on #f8f4f2, hard-cut at section boundaries. Outschool adds a rough printed grain and straddles section breaks, so the shapes stitch colour blocks together.

**Seen on** Outschool, Bear, Zahnarzt Wernitz, Dailee by Daily Fresh Fruits, Przebiegły Team, 6 sites in all. **Suits** bold-colour, expressive, illustrated, soft-pastel; health, saas, education, food-drink.

<!-- v:atmosphere.pattern/poster-geometry -->
### 12. Poster geometry

*Feeling: printed poster colour blocks.*

**Use it for:** Agencies, culture and bold brands. **Avoid:** Precision software, and more than one composition per page.

Flat arches, circles and rectangles, 80 to 240px, in two to seven solid hues, cropped by edges, composed like a printed poster corner or a tile row beside photos. No gradients or shadow.

Jasper cuts a flat pink band about 150px wide across a navy corner, overlapped by large cropped circles. It reads as a printed poster because there are no gradients or shadows at all.

**Seen on** Jasper, Vrdnt Work, Warren & Mahoney, Design Podcast (Focus State), The Bakery. **Suits** bold-colour; ai, editorial, local-business, architecture.

<!-- v:atmosphere.pattern/shaped-section-edge -->
### 13. Shaped section edge

*Feeling: friendly, biscuit-cut.*

**Use it for:** Food, kids and friendly brands. **Avoid:** Serious software. The wave divider dates a page instantly.

A section top cut in a repeating 100px scallop or a long wave, always matching the colour above. Use at both entries. Flat colour only.

**Seen on** Xin Cheng Foods, Josh Comeau. **Suits** warm-neutral, illustrated; food-drink, education.

<!-- v:atmosphere.pattern/sticker-scatter -->
### 14. Sticker scatter

*Feeling: loud and fun.*

**Use it for:** Candy, drinks, kids and campaign sites. **Avoid:** Anything that needs to look trustworthy.

Outlined shapes, real product or paper figures, 40 to 100px, 2 to 3px black stroke, scattered in side margins at varied rotation, moving at different scroll rates. Margins only.

**Seen on** Voice Tag Gods, Ring Pop Candy, Decathlon Yestalgia, Olipop, Delassus. **Suits** bold-colour, expressive, type-led, illustrated; ecommerce, food-drink, brand.

<!-- v:atmosphere.pattern/line-illustration-break -->
### 15. Line illustration break

*Feeling: a pause in the scroll.*

**Use it for:** Food, travel and hospitality. **Avoid:** More than one per page.

A full-section pale line illustration, huge, on white, used as a scroll pause between content sheets.

**Seen on** Lil Italy. **Suits** warm-neutral; food-drink.

### Mistakes that cheapen a pattern

- **Dots behind copy.** The dot-grid hero is the generated default. Move the dots outside the rails.
- **A pattern with no source.** Ask where it came from. The best answers are the logo, the product or the data.
- **Centred rings.** My first contour set was centred and looked like an op-art target. Put the centre off canvas and bleed off one corner.
- **Pixels too big.** An analyst recorded 28px for the Inngest dissolve, and at that size it looked like a game. The real cell is 14px.
- **Uniform dissolve.** Random noise looks like confetti. Odds must fall on a curve, and filled neighbours must raise the odds, so mass breaks apart.
- **A flat silhouette in dots.** A filled logo in dots is an 8-bit sprite. Tone is what makes it a picture, so take it from a render or a photograph.
- **Translated stripes.** Moving one path four times gives uneven corners. Offset each segment and change each radius by the same amount.
- **Hatch at full strength.** At 14% ink it looked heavy in testing, and 9% looked right.
- **Pattern on a pattern.** One per page. Grid plus dots plus blobs is a sample book.

## Texture

Texture must make a flat digital field feel like a physical thing, such as paper, film or card stock. It is also a tool, because grain stops banding in deep gradients. Done well, nobody says the word grain. They just feel that the page is not plastic.

What separates great from cheap is strength. Analysts often wrote "heavy grain," so I measured it. I scanned 51 frames described as grainy. In the 41 that could be resolved, the strongest flat patches have a median sigma of about 4 levels on the page, and the middle half run 3 to 6. The other 10 sit under about 2, too faint to resolve. Grain is far fainter than it looks in memory. The second thing is place: great grain sits on the ground and on colour fields, and flat panels above it stay clean, so they look cut out. Cheap grain sits over everything, text included, at a strength you notice before you notice the colour.

| Tier | Sigma in levels | `--grain` opacity | Seen on |
|---|---|---|---|
| Felt, not seen | 2 to 4 | .03 to .06 | Revena, Boston Dynamics, Basic Agency, Elyx, Prisma |
| Visible at full size | 5 to 7 | .07 to .1 | Render, Inngest, Vayne Entertainment, Zed Pricing, Vite |
| Stipple as a feature | 10 to 16 | .14 to .23 | Ideogram, Calvyn |

The `--grain` token with `mix-blend-mode:hard-light` was calibrated losslessly on six grounds from black to paper, and sigma comes out at about 70 times the opacity on all of them, so opacity .1 gives sigma 7. Hard-light also shifts the ground. At opacity .2 near-black rises about 8 levels and paper falls about 12, so recheck your rung after adding it.

Never judge grain from a compressed screenshot. JPEG removes fine noise first: at quality 66, the level of these captures, a true sigma of 2 reads as .6 and a true 4 reads as 2.4, while 14 survives intact. The readings behind this table were converted through that curve. `shoot.mjs` saves JPEG at quality 72, so grain in your own contact sheet looks weaker than it is. Read a lossless capture, or compare against a reference saved the same way.

```css
.grained{position:relative;isolation:isolate}
.grained::after{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;
  mix-blend-mode:hard-light;opacity:.07;pointer-events:none}
/* on a gradient, mask the grain so it thins with the colour */
```

Use `isolation:isolate` on the parent, or the blend will reach whatever is behind the section. Keep the tile at 256px and let it repeat, since the noise hides the seam. Paint text on a higher layer. Calvyn's stipple grows with the colour, from sigma 9 on the pale side to 15 on the deep side, so strong grain should always be masked to follow its tint.

<!-- v:atmosphere.texture/stippled-stage -->
### 1. Stippled stage

*Feeling: product shots look lit by a soft studio light.*

**Use it for:** SaaS sections showing white app windows. **Avoid:** Covering the stage with the window. If little of it shows, nothing is gained.

Product stage, radius 24px, bleeding off one edge, pale to mid tint gradient under per-pixel stipple, sigma 9 on the pale side rising to 15 on the deep side. Show 30 to 40% of the stage around a white window, so it looks lit like a photo set.

**Seen on** Customer.io, Calvyn, Salterra Resort & Spa, Prisma. **Suits** gradient-light, light-precision, warm-neutral; saas, hospitality, devtool.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.stage3{position:relative;height:640px;margin-left:clamp(16px,7vw,96px);border-radius:24px 0 0 0;overflow:hidden;isolation:isolate;
  --deep:oklch(from var(--accent) .8 .085 h);--pale:oklch(from var(--accent) .94 .018 h);
  background:radial-gradient(95% 130% at 100% 90%,var(--deep),color-mix(in oklab,var(--deep) 55%,var(--pale)) 45%,var(--pale) 85%)}
/* stipple is raw per-pixel noise that grows with the colour: sigma 9 on the pale side, 15 on the deep side */
.stage3::before{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.2;-webkit-mask:linear-gradient(100deg,rgba(0,0,0,.65),#000 75%);mask:linear-gradient(100deg,rgba(0,0,0,.65),#000 75%)}
.stage3 .win{position:absolute;left:clamp(16px,3.5vw,48px);top:56px;width:min(880px,88%);height:640px;background:var(--surface);border-radius:12px;box-shadow:0 30px 80px -20px rgba(40,50,110,.3),0 0 0 1px rgba(30,40,90,.06)}
</style>
<div style="height:120px"></div><div class="stage3"><div class="win"></div></div>
```

<!-- v:atmosphere.texture/grain-on-dark-ground -->
### 2. Grain on dark ground

*Feeling: graphite. The ground has a surface and the panels are cut from it.*

**Use it for:** Dark devtools and stage-like photo sites. **Avoid:** Running text on the grain. Inngest keeps its copy on flat black for a reason.

Near-black ground #1c1c1c, grain sigma 6 levels, slightly lighter at screen edges. Panels above it stay flat #000 or #212121, so they look cut out. Never put running text directly on the grain.

A coloured version: edges near black, an oxblood hot spot in one corner, heavy grain, with the hot spot moving between sections like stage haze.

**Seen on** Inngest, Vayne Entertainment, Monet 100. **Suits** dark-precision, photo-led, type-led; devtool, agency, culture.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
/* grain on the ground only. panels sit above it, flat, so they look cut out of it */
.grained{position:relative;isolation:isolate;background:#1c1c1c;padding:0 18px;min-height:900px}
.grained::before{content:"";position:absolute;inset:0;background:var(--grain-coarse,var(--grain));background-size:256px;mix-blend-mode:hard-light;opacity:.085}
.grained::after{content:"";position:absolute;inset:0;background:radial-gradient(90% 90% at 50% 40%,transparent 55%,rgba(255,255,255,.035))}
.grained .cut{position:relative;z-index:2;background:#020202;min-height:900px;padding:76px 32px;color:#f6f6f6}
.grained .cut .chart{background:#212121;border:1px solid #333;height:340px;margin-top:40px}
</style>
<div class="grained"><div class="cut"><h1>Hold more, chase less</h1><div class="chart"></div></div></div>
```

<!-- v:atmosphere.texture/paper-grain-page -->
### 3. Paper grain page

*Feeling: flat fields feel printed rather than lit.*

**Use it for:** Docs, editorial, culture and type-led sites. **Avoid:** Visible grain at normal zoom. If you notice it on a white page it is too strong.

Fine monochrome noise tiled over the whole page, multiply at .03 on light, hard-light at .04 on dark, barely visible at 100%. Runs under nav, sidebar and content alike.

The demo also carries the hatched seams and gutter graph paper from the pattern section, because they read as one system on one ground.

**Seen on** Zed Pricing, Zed Docs, KAWARA MUSEUM - LIBRARY, Gramercy Tavern Tavern Menu, Basic Agency, 6 sites in all. **Suits** mono-technical, warm-neutral, type-led, illustrated; devtool, agency, local-business, culture.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.paper{position:relative;min-height:760px;background:var(--bg);isolation:isolate}
/* multiply, very faint, whole page */
.paper::before{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:multiply;opacity:.03;pointer-events:none}
/* gutters only: fine graph paper, fading down. the column interior stays plain */
.paper .gut{position:absolute;inset-block:0;width:max(0px,calc(50% - 560px));background-image:linear-gradient(color-mix(in oklab,var(--ink) 5%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in oklab,var(--ink) 5%,transparent) 1px,transparent 1px);background-size:8px 8px;-webkit-mask:linear-gradient(#000,transparent 70%);mask:linear-gradient(#000,transparent 70%)}
.paper .col{position:relative;width:min(1120px,100%);margin:0 auto;border-inline:1px solid var(--line);min-height:760px}
/* section seam: 12px of 45 degree hatch between two rules */
.paper .seam{height:12px;border-block:1px solid var(--line);background:repeating-linear-gradient(135deg,color-mix(in oklab,var(--ink) 9%,transparent) 0 1px,transparent 1px 5px)}
.paper .pad{padding:64px 24px;text-align:center}
</style>
<div class="paper"><div class="gut" style="left:0"></div><div class="gut" style="right:0"></div>
<div class="col"><div class="pad"><h2>Plan the week</h2></div><div class="seam"></div><div class="pad">Logos or a table go here.</div><div class="seam"></div></div></div>
```

<!-- v:atmosphere.texture/film-grain-on-colour -->
### 4. Film grain on colour

*Feeling: printed, tactile, and free of the digital sheen of a CSS gradient.*

**Use it for:** Any saturated gradient, especially deep hues that band. **Avoid:** Grain over everything including text and UI. It belongs to the colour fields.

Monochrome film grain over saturated gradients, sigma 4 to 7 levels, hard-light blend. One treatment across hero, tiles, CTA band and strips, so disparate pieces read as one material. Stops banding in deep hues.

Vite uses one violet ribbon with grain as a single material across its CTA band, demo backdrops, bevels, a button stroke and the announcement strip. The grain, more than the hue, is what makes those pieces read as one thing.

**Seen on** Vite, Maximize, Otter, axem, Sentry. **Suits** dark-precision, expressive, bold-colour, gradient-light; devtool, ai, agency, saas.

<!-- v:atmosphere.texture/data-as-texture -->
### 5. Data as texture

*Feeling: texture that says what the company does.*

**Use it for:** AI, climate, security and data brands. **Avoid:** Readable nonsense. Keep it too small and faint to read.

Tiny dashes, dots, cipher characters or sparse stars, about 10% lighter than the ground, in cloud-like clusters across a large room or card header. Low enough to sit under 42px type.

ECI scatters tiny dashes about 10 percent lighter than a deep green room, which read as wind or sensor data and stay quiet under 42px type. jemmic picks a few real words out of a ciphertext block, brighter than the rest. OpenAI fills a card header with fine pale dots at varied alpha, so a row of models reads as one family.

**Seen on** ECI, OpenAI API Pricing, jemmic. **Suits** light-precision, photo-led; ai, saas.

<!-- v:atmosphere.texture/paper-colour-fills -->
### 6. Paper colour fills

*Feeling: colour blocks read as card stock.*

**Use it for:** Local, craft and fashion brands, and product tiles. **Avoid:** A visible repeat. Use a large image or a seamless tile.

Colour blocks share a low-contrast mottled paper or leather-grain image, about 3% contrast, so fills read as card stock. Use on tiles or panels, alternating with full-bleed photography.

Heart & Soil runs cream, taupe, lavender and moss through one mottled paper image, so colour blocks read as card stock. Bauhaus Clock uses an embossed grain at about 3 percent contrast, like a dial face. Acne Studios keeps fibre paper to one panel, which alternates with full-bleed campaign photographs.

**Seen on** Acne Studios, Bauhaus Clock, Heart & Soil. **Suits** warm-neutral, photo-led, light-precision; local-business, fashion, saas.

<!-- v:atmosphere.texture/halftone-strip -->
### 7. Halftone strip

*Feeling: a print detail at the join.*

**Use it for:** Colour floods meeting white. **Avoid:** Using it as a pattern. It is a seam.

An 80px band of 3px dots in the section hue sits within the frame rails where light meets dark, softening the join and adding a print detail.

Mixpanel sets an 80px band of dots about 3px wide inside the frame rails, in the section hue, where light meets dark. It softens the colour change without becoming a gradient.

**Seen on** Mixpanel. **Suits** gradient-light; saas.

<!-- v:atmosphere.texture/one-bit-dither -->
### 8. One bit dither

*Feeling: low-fi and graphic. Unmistakably one treatment.*

**Use it for:** Launch weeks and developer events. **Avoid:** Faces and fine detail, which dither destroys.

Reduce one photograph to pure black and white dots with no greys, applied to masthead, cards and slices alike. Crop or glitch it on load. One treatment only.

Supabase takes galaxy photography down to pure black and white dots, then uses that single treatment on the masthead, cards and event slices. Load frames shift and glitch the crop. The rule is one treatment everywhere, since it reads as a decision only once it repeats.

**Seen on** Supabase Launch Week. **Suits** mono-technical; devtool.

<!-- v:atmosphere.texture/stipple-watermark -->
### 9. Stipple watermark

*Feeling: a faint map under the content.*

**Use it for:** Investors and advisory firms with a place or a story. **Avoid:** High contrast. Five percent is the top end.

Grainy stipple shapes, such as coastlines or contours, about 5% contrast against a grey ground, right of headings and behind quotes, bleeding off the rail. Visible before type on load.

**Seen on** Greylock. **Suits** light-precision; finance.

<!-- v:atmosphere.texture/scanned-analogue -->
### 10. Scanned analogue

*Feeling: physical media with damage on it.*

**Use it for:** Fashion, culture and expressive portfolios. **Avoid:** Software brands. It reads as borrowed attitude.

Scanned dust, scratches, CRT scanlines or torn paper edges on a flat ground, denser toward the lower half. One era, one artefact. For fashion, culture and expressive briefs only.

**Seen on** Stone Island, The Tie-break, Die PANKOW Zeitmaschine, cagdascecen.com. **Suits** expressive, mono-technical, photo-led; fashion, culture, portfolio.

<!-- v:atmosphere.texture/wallpaper-ground -->
### 11. Wallpaper ground

*Feeling: a real wall behind the content.*

**Use it for:** Illustrated and personal sites. **Avoid:** Corporate work.

A real repeating wallpaper tile or notebook grid, one shade from the ground, with a slight vignette. Blocks sit flat with no shadow.

**Seen on** Patricia Ordoñez, Benzo the Great Developer. **Suits** soft-pastel, illustrated; portfolio.

<!-- v:atmosphere.texture/atmospheric-mist -->
### 12. Atmospheric mist

*Feeling: weather on a flat page.*

**Use it for:** Food and drink, and heritage brands. **Avoid:** Any strong contrast. It must stay under the type.

Soft patches 8% darker than a flat cream ground, along the viewport top, about 200px deep, drifting slowly. The only atmosphere on the page, keeping type clean.

**Seen on** IRONHILL. **Suits** illustrated; food-drink.

### Mistakes that cheapen texture

- **Grain over text.** It belongs to the ground. Inngest keeps copy and panels on flat black for this reason.
- **Trusting the word fine.** I built the Calvyn stage at sigma 4 from the analyst note and it looked flat beside the real thing. Pixels measure 9 to 15. In the other direction, frames described as heavy grain measured 4 or 5. Measure, or start low and compare.
- **Grain you notice on white.** If it shows on a white page, it is too strong.
- **Blurred noise.** Stipple is per-pixel. Soft noise reads as a smudge. Keep the tile sharp and do not scale it up.
- **A visible repeat.** Large paper images must be seamless or very low in contrast.
- **Borrowed attitude.** Scratches, scanlines and torn edges belong to fashion and culture. On software they read as a costume.
- **Measuring noise on a JPEG.** My first survey read a median of 2 levels because compression had already removed half of it. Calibrating lossless output against the same compression moved the median to 4.
- **Grain standing in for design.** It finishes a good surface and does nothing for a bad one.

## Image backdrop

An image behind content must set a place or a mood and still let the words read. The hard part is the join between picture and type, and between picture and page.

What separates great from cheap is grading rather than covering. Cheap work takes a stock photo and lays a flat 50% black overlay across all of it, which kills the image and still leaves weak contrast. Great work chooses or grades the image so the area behind the text is already even: Decagon's sky holds one value, so a black headline needs no scrim. Where a scrim is needed, it is eased and local, covering the lower 30 to 45% and leaving the top of the frame at full luminance. Boom Supersonic and Figure both do this. The other mark of quality is that no rectangle shows. Apple's product glow falls to black before the edge of the image, so it melts into the tile.

Measured ranges: a bottom scrim covers the lower 30 to 45%, a side scrim falls from 60% at the edge to nothing by 35% of the width, a flat scrim sits near 45% on a short band and 20 to 35% on a full-bleed hero, and a ghosted image sits at 8 to 15% contrast. Eased scrim stops of 100, 86, 62, 34, 12 and 0% hide the top of the ramp, where a straight ramp shows a line across the photo.

Replacing a gradient with an image is one of the best moves available. A heavily blurred image, as on Zapier and Codeium, gives you real colour relationships no CSS gradient has, and nobody else has that exact plate.

<!-- v:atmosphere.image-backdrop/ghosted-objects -->
### 1. Ghosted objects

*Feeling: the product itself becomes the texture.*

**Use it for:** CTA panels and hero stages for content products. **Avoid:** Too faint. My first pass disappeared. Ghosts need text at about half strength.

Real product objects tilted about 30 degrees, tinted one step off the ground, text at 50% of a dark tint, dissolving by mask toward the copy. Set in a panel with two soft blooms.

**Seen on** BILD, Readwise. **Suits** render-3d, gradient-light; saas.

```html
<style>
.ghost{position:relative;height:540px;margin:80px 40px;border-radius:24px;overflow:hidden;--hot:var(--accent);--base:oklch(from var(--accent) .9 .05 h);--text:oklch(from var(--accent) .4 .08 h);
  background:radial-gradient(34% 56% at 4% 6%,var(--hot),transparent),radial-gradient(28% 40% at 50% 72%,var(--hot),transparent),var(--base)}
/* real objects from the product, tilted, one step off the ground, dissolved by a mask */
.ghost .drift{position:absolute;left:46%;top:-220px;width:1100px;height:1100px;display:grid;grid-template-columns:repeat(4,250px);gap:18px;transform:rotate(30deg) skewX(-8deg);
  -webkit-mask:radial-gradient(60% 56% at 50% 50%,#000 40%,transparent 88%);mask:radial-gradient(60% 56% at 50% 50%,#000 40%,transparent 88%)}
.ghost .card{height:170px;border-radius:6px;background:rgba(255,255,255,.2);box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 12%,transparent);padding:14px;font-size:12px;line-height:1.5;color:color-mix(in srgb,var(--text) 55%,transparent)}
</style>
<div class="ghost"><div class="drift" id="dr"></div></div>
<script>
const note='Reefer 4471 held at gate 14 for a missing seal. Terminal wants the new number before release.';
for(let i=0;i<20;i++){const c=document.createElement('div');c.className='card';c.textContent=note;document.getElementById('dr').append(c)}
</script>
```

<!-- v:atmosphere.image-backdrop/smeared-plate -->
### 2. Smeared plate

*Feeling: landscape as pure colour. Warmer than any gradient.*

**Use it for:** Product demo stages and logo tiles, as a replacement for gradient plates. **Avoid:** Smearing along the horizon. That gives flat strata, and it took me a round to see why.

Rotate a photo 8 to 14 degrees, directional blur 70px along x and 2 to 3px across, boost saturation, add grain .09. Flat plates behind every demo and logo, radius 8 or square, hue varying per plate.

The streaks come from the source photo, because blur can only drag out detail that is already there. Pick a photograph with small bright details such as grass, water or lights. My best render still reads softer than Zapier because the stand-in image is smooth, and a smooth image gives bands instead of streaks. A painterly version blurs an abstract image evenly, low contrast, in one hue family per plate, so repeats read as one campaign.

**Seen on** Devin Desktop (codeium.com redirect), Zapier. **Suits** light-precision, warm-neutral; ai, saas.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<svg width="0" height="0" style="position:absolute"><filter id="smear" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="70 2.5"/></filter></svg>
<style>
.plate{position:relative;height:520px;margin:80px 40px;border-radius:8px;overflow:hidden;isolation:isolate;background:var(--surface)}
/* rotate before you smear: along the horizon you get flat strata, across it you get streaks. oversize or the edges go clear */
.plate img{position:absolute;inset:-30%;width:160%;height:160%;object-fit:cover;transform:rotate(-11deg);filter:url(#smear) saturate(1.5) contrast(1.25)}
.plate::after{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.09}
</style>
<!-- use a real landscape photograph here -->
<div class="plate"><img src="landscape.jpg" alt=""></div>
```

<!-- v:atmosphere.image-backdrop/graduated-scrim -->
### 3. Graduated scrim

*Feeling: cinema. Type sits in the shadow at the foot of the frame.*

**Use it for:** Any footage or photo that must carry a headline. **Avoid:** A linear ramp, and a full-frame overlay. Both flatten the image.

Eased black gradient over the lower 30 to 45% only, alpha stops 100, 86, 62, 34, 12, 0%. Headline and mono line sit inside the transition. The top of the frame gets no overlay, so the image keeps its luminance.

**Seen on** Figure, Boom, a16z. **Suits** photo-led, expressive; ai, finance, brand.

```html
<style>
/* set --photo:url(your-image.jpg) on .film. the scrim is the point, so it only reads over a real photograph */
.film{position:relative;height:900px;overflow:hidden;background:#000 var(--photo,none) center/cover;color:#fff}
/* eased, not linear: a straight ramp shows its top edge as a line across the photo */
.film::before{content:"";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(to top,#000 0,rgba(0,0,0,.86) 22%,rgba(0,0,0,.62) 44%,rgba(0,0,0,.34) 66%,rgba(0,0,0,.12) 84%,transparent)}
.film h1{position:absolute;inset:auto 0 96px;text-align:center;margin:0}
</style>
<div class="film"><h1>Every box, on time</h1></div>
```

<!-- v:atmosphere.image-backdrop/graded-scene -->
### 4. Graded scene

*Feeling: an image that belongs to the palette.*

**Use it for:** Illustrated, editorial and AI brands with a real art direction. **Avoid:** A stock photo with a colour wash. Grade the image, do not cover it.

One image or drawing graded to the page colour, with uniform value behind the headline. Line art sits one step above the wash, and grain ties it together. Black or white type needs no scrim because the sky is even.

Decagon grades a surreal scene to one periwinkle sky so a black headline holds with no scrim, and keeps one coral door as the hot accent. Fly.io drops line art one step above an indigo wash, so it reads as texture at reading distance.

**Seen on** Decagon, Brand Identity School, Zumtobel Group, Fly.io Blog. **Suits** illustrated, soft-pastel, photo-led; ai, editorial, education, other.

<!-- v:atmosphere.image-backdrop/lit-from-within-on-black -->
### 5. Lit from within on black

*Feeling: the product is the light source.*

**Use it for:** Hardware, and dark product pricing heroes. **Avoid:** A CSS gradient behind the image. It always shows.

Tile is pure #000 with no CSS gradient. All light comes from the image, whose glow falls to black before its edges, so no rectangle shows. Export images on true black.

Apple measures pure #000 with no CSS gradient, and every glow falls to black before the edge of the image. Export the asset on true black and check the edge pixels. A level or two of lift shows as a rectangle.

**Seen on** Apple. **Suits** photo-led; brand.

<!-- v:atmosphere.image-backdrop/textural-photo-band -->
### 6. Textural photo band

*Feeling: material as colour.*

**Use it for:** Hospitality and architecture. **Avoid:** Any photo with a subject. It must be a surface.

A material, sky or aerial photo, such as water, painted concrete or a dawn sky, used as a flat colour band 360px or taller with a title and CTA. Texture without a gradient, and no subject to compete with.

Struck uses a 1200px band of cobalt painted concrete, and Intercom fills half a page with a dawn sky behind a card. Both choose an image with no subject, so the eye reads colour and surface first.

**Seen on** Intercom Contact, Struck, Pier88 Coast. **Suits** warm-neutral, photo-led; saas, ai, food-drink.

<!-- v:atmosphere.image-backdrop/defocused-crushed-photo -->
### 7. Defocused crushed photo

*Feeling: a room you sense but cannot quite see.*

**Use it for:** Industrial product shots and sports brands. **Avoid:** Soft fades into white above and below. Cut hard.

Full-bleed photo heavily blurred and graded to a near-black hue, about 10% visible detail, with grain. Reads as texture until you look. A sharp device or table sits on top with no scrim.

Soundsensing uses canvases about 945px tall of blurred plant-room photos, and white sections above and below cut hard with no fade. Lacoste crushes a court photo to a near-black green with about 10 percent visible detail, so text needs no scrim.

**Seen on** Soundsensing, Lacoste Ace Breaker. **Suits** photo-led, bold-colour; saas, brand.

<!-- v:atmosphere.image-backdrop/flat-scrim-band -->
### 8. Flat scrim band

*Feeling: plain and dependable.*

**Use it for:** Institutions and professional services. **Avoid:** Anywhere the image is meant to be enjoyed.

Photo band about 500px with a flat 45% dark or tinted scrim carrying a white headline and a rectangular CTA.

**Seen on** Royal Ontario Museum, Native Law PLLC. **Suits** photo-led, light-precision; culture, local-business.

<!-- v:atmosphere.image-backdrop/photo-dissolve-seam -->
### 9. Photo dissolve seam

*Feeling: the page ends in air.*

**Use it for:** Closing sections and contact pages. **Avoid:** Any visible image edge. The mask has to be long.

The page dissolves over its last 400px into a low-contrast cloud or fog photo, or a dark page lifts into fog and back, masked so no image edge shows. A panel or CTA floats in the air.

New Material dissolves its white page into a pale cloud photo over the last 400px, so the contact panel floats and the page ends in air rather than a footer band. Forma24 lifts near-black into fog and fades back into the footer.

**Seen on** New Material, Forma24. **Suits** light-precision, dark-precision; agency.

<!-- v:atmosphere.image-backdrop/footage-with-outline-card -->
### 10. Footage with outline card

*Feeling: a letter held up against a film.*

**Use it for:** One founder moment in education or mission brands. **Avoid:** Fast or bright footage. The text must stay readable with no fill.

Film runs full-bleed, darkened to a brand navy. A 725px 1px white-outlined card, radius 20px, with no fill holds a letter. Footage shows through the text area, so it must be slow and dark.

**Seen on** Synthesis. **Suits** bold-colour; education.

<!-- v:atmosphere.image-backdrop/one-side-scrim -->
### 11. One side scrim

*Feeling: sky stays sky.*

**Use it for:** Wide photos with text on one side. **Avoid:** Centred text.

Black linear gradient on the text side only, 60% at the edge to 0 by 35% of the width. Sky colour survives and white copy reads.

**Seen on** SpaceX. **Suits** photo-led; brand.

<!-- v:atmosphere.image-backdrop/world-wallpaper -->
### 12. World wallpaper

*Feeling: a place the product lives in.*

**Use it for:** Brands with a strong illustrated or 3D world. **Avoid:** Brands without one.

A painted or 3D world fixed behind a window UI, visible as an 8 to 150px frame around content. It never competes with the window.

**Seen on** Razorpay Magic Checkout, PostHog Docs. **Suits** render-3d, illustrated; finance, devtool.

<!-- v:atmosphere.image-backdrop/giant-watermark -->
### 13. Giant watermark

*Feeling: a quiet crest.*

**Use it for:** Heritage brands and local firms with a real monogram. **Avoid:** Above 8% alpha, where it starts to fight the text.

A giant 600px monogram or pale map at 8% alpha behind dark sections, cropped by an edge or a curved horizon, always below text.

**Seen on** La Dolfina Jumping, Globe Limousines. **Suits** photo-led; fashion, local-business.

<!-- v:atmosphere.image-backdrop/passe-partout -->
### 14. Passe partout

*Feeling: a mounted print.*

**Use it for:** Fashion and bridal. **Avoid:** Busy images.

An inner photo sits inside an inset frame of the same image, blurred and scaled, with about a 30px matte.

**Seen on** Poeza. **Suits** photo-led; fashion.

### Mistakes that cheapen an image backdrop

- **A flat black overlay.** It dims everything equally and looks like a mistake. Use an eased, local scrim, or grade the image.
- **A linear scrim.** A straight ramp shows its top edge as a line across the photo. Ease it.
- **A visible rectangle.** Dark images on dark pages must fall to the exact ground colour before their edge. Export on true black.
- **A CSS gradient behind a product image.** It always shows. Put the light in the image.
- **Smearing along the horizon.** My first plate blurred a landscape sideways and gave flat strata. Rotate 8 to 14 degrees first, so the blur crosses the bands and makes streaks.
- **A smooth source image.** Blur only stretches detail that exists. A soft landscape gives soft bands, and my stand-in stayed visibly weaker than Zapier for this reason. Start from a photograph with fine bright detail.
- **Soft fades into white.** Defocused sections should cut hard, top and bottom.
- **Ghosts too faint.** My first ghosted cards disappeared. Text needs about half strength, and the blooms under them need real saturation.
- **Stock photography.** A graded generic photo is still a generic photo.

## Before you call it done

- Name your ladder and count its rungs. Three or four, each with a job.
- Compare two neighbouring rungs. If you can name the difference, the step is too big. If you cannot find it on a real screen, it is too small.
- Count the atmosphere devices on the page. One, or two with a reason you can say.
- Point to where each device lives. If the answer is everywhere, cut it back.
- Check what sits under every sentence. It should be flat ground.
- Look at each gradient and find its edge, or check that it truly dissolves into page colour.
- Look for structure in each gradient. If it is perfectly smooth, add mottle or grain, and check for banding on a dark field.
- Look at each glow and ask what is casting it.
- Check that every line, dot and node lines up with something real.
- Ask where the pattern or colour came from. The logo, the product or the data are good answers. Nowhere is not.
- Remove the device. If the page still works, leave it out.
- Resize to phone width. Keep the scale of big effects and re-crop them rather than shrinking them. Rails tighten, gutters may vanish, and nothing may scroll sideways.
- Turn on reduced motion and throttle the network. The first frame must already look finished.
- Check contrast on the worst pixel behind each line of text, not the average.
