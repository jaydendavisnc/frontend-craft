# Button

A button is a promise, then a receipt. At rest it says what will happen. On hover it agrees. On press it confirms that something did. Most of what reads as quality in a button is decided by a few small numbers that a beginner never looks at: the ratio of padding to height, the weight of the label, one light line on the top edge, and how far the fill moves on hover. This chapter teaches those numbers, then the ways real sites spend them.

It holds 93 canonical variants, clustered from 473 analyst rows across 381 pages. Sizes come from 2,875 measured buttons on 285 sites and hover from 516 sites. Press, focus and disabled were never captured in the corpus, so they were probed for this chapter on 219 live sites and 11 design systems. The strongest variants were checked against real frames. 66 were rebuilt and rendered, 50 of them side by side with the real thing, which is where the corrections and mistake lists come from. The same variants live in `data/elements/button.jsonl`, which is what the sampler deals from. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, plus `--font-mono` and `--on-accent`, which both have fallbacks, so any palette and type system drops in. Set `--on-accent` to your ink when the accent is pale. Hex values appear only where they are neutral greys or measured facts about a site. Treat those as evidence, not as a palette to copy.

**Contents.** [What gives a button its feel](#what-gives-a-button-its-feel) · [What we measured](#what-we-measured) · [The four states](#the-four-states) · [Nine button systems](#nine-button-systems)

- **[Primary](#primary):** [neutral chip](#1-neutral-chip) · [neutral pill](#2-neutral-pill) · [saturated rectangle](#3-saturated-rectangle) · [saturated pill](#4-saturated-pill) · [compact chevron pill](#5-compact-chevron-pill) · [square block](#6-square-block) · [mono caps block](#7-mono-caps-block) · [wide tracked caps](#8-wide-tracked-caps) · [top-lit chip](#9-top-lit-chip) · [bevelled light key](#10-bevelled-light-key) · [lit colour](#11-lit-colour-button) · [lower lip key](#12-lower-lip-key) · [hard offset shelf](#13-hard-offset-shelf) · [ink outlined fill](#14-ink-outlined-fill) · [ringed halo pill](#15-ringed-halo-pill) · [spectral edge](#16-spectral-edge-pill) · [nested arrow chip](#17-nested-arrow-chip) · [signature glyph](#18-signature-glyph-button) · [cut silhouette](#19-cut-silhouette-block) · [information bearing](#20-information-bearing-button) · [recommended fill](#21-recommended-fill-in-a-row) · [keycap hint](#22-keycap-hint-button) · [split choice](#23-split-choice-button) · [display scale](#24-display-scale-button) · [docked](#25-docked-persistent-action) · [dark page quiet](#26-dark-page-quiet-button)
- **[Secondary](#secondary):** [pale hairline chip](#1-pale-hairline-chip) · [ink outline square](#2-ink-outline-square) · [serif label outline](#3-serif-label-outline) · [outline pill](#4-outline-pill) · [tonal fill](#5-tonal-fill) · [ghost on media](#6-ghost-on-media) · [dark raised chip](#7-dark-raised-chip) · [white raised key](#8-white-raised-key) · [gradient keyline](#9-gradient-keyline) · [second solid colour](#10-second-solid-colour) · [quiet chip row](#11-quiet-chip-row) · [drawn shape](#12-drawn-shape-outline) · [menu button](#13-menu-button) · [closing bar](#14-closing-bar)
- **[Text link](#text-link):** [hairline underline](#1-hairline-underline) · [dotted term](#2-dotted-term-underline) · [accent chevron](#3-accent-chevron-link) · [ink arrow](#4-ink-arrow-link) · [underline, detached arrow](#5-underline-with-detached-arrow) · [ring arrow](#6-ring-arrow-link) · [mono caps underline](#7-mono-caps-underline) · [serif voice](#8-serif-voice-link) · [ruled cell](#9-ruled-cell-link) · [marker block](#10-marker-block-link) · [glyph mark](#11-glyph-mark-link) · [section exit](#12-section-exit-links) · [bare label](#13-bare-label-link)
- **[Icon button](#icon-button):** [ghost toolbar](#1-ghost-toolbar-icon) · [carousel pair](#2-carousel-arrow-pair) · [media control](#3-media-control-chip) · [tick pager](#4-tick-pager) · [floating assistant](#5-floating-assistant) · [scroll capsule](#6-scroll-capsule) · [arrow disc on media](#7-arrow-disc-on-media) · [seam disc](#8-seam-straddling-disc) · [square tile](#9-square-icon-tile) · [social circles](#10-social-circle-row) · [desktop icons](#11-desktop-icon-nav)
- **[CTA pair](#cta-pair):** [fill and outline pills](#1-filled-plus-outline-pills) · [fill and outline rectangles](#2-filled-plus-outline-rectangles) · [solid plus tonal](#3-solid-plus-tonal) · [solid plus bare link](#4-solid-plus-bare-link) · [top-lit twin](#5-top-lit-twin) · [neutral pair on dark](#6-neutral-pair-on-dark) · [equal twin](#7-equal-twin-block) · [arrow tile](#8-arrow-tile-pair) · [install command](#9-install-command-pair) · [agent prompt](#10-agent-prompt-pair) · [keycap lip](#11-keycap-lip-pair) · [sampled tint](#12-sampled-tint-pair) · [crop mark ghost](#13-crop-mark-ghost-pair) · [store badges](#14-store-badge-pair) · [captioned routes](#15-captioned-route-pair) · [mono caps](#16-mono-caps-pair) · [joined](#17-joined-pair)
- **[Hover response](#hover-response):** [tone step](#1-tone-step) · [alpha dim](#2-alpha-dim) · [ink swap](#3-ink-swap) · [directional wipe](#4-directional-fill-wipe) · [arrow travel](#5-arrow-travel) · [label roll](#6-label-roll) · [hard offset lift](#7-hard-offset-lift) · [light moves inside](#8-light-moves-inside) · [press in, flatten](#9-press-in-flatten) · [edge brightens](#10-edge-brightens) · [spring lift](#11-spring-lift) · [soft glow](#12-soft-glow)
- [Before you call it done](#before-you-call-it-done)

## What gives a button its feel

Eight dials set the feel of a button. Set them once for the whole site, then leave them alone. Colour is not on this list on purpose: a black button and a violet button with the same eight settings feel alike, and two black buttons with different settings do not.

**Height is voice.** It tells the reader what kind of object this is. Keep to the ladder and pick one step per context.

| Height | Reads as | Label | Side padding | Use |
|---|---|---|---|---|
| 28 to 32 | A tool control | 13px | 10 to 12 | Inline in rows, compact nav, app toolbars |
| 34 to 36 | A product control | 14px | 12 to 14 | Most nav buttons, pricing cards, app UI |
| 40 | The middle of the web | 14 to 15px | 16 | The default button, used 24 percent of the time |
| 44 to 48 | Marketing | 16px | 20 to 24 | Hero and closing calls to action |
| 50 to 56 | Consumer | 16 to 18px | 24 to 32 | Health, food, retail, education |
| 60 and up | A statement | 20 to 53px | 24 to 40 | One per screen, launches and brand pages |

Small is confident. Framer's hero button is 34px and Stripe's product pill is 33px, under large headlines. A generated page reaches for 52px with 18px bold because a large button feels safe, and the page reads as a template. Go up a step only when the audience is consumer or the button is the only thing on screen.

**Side padding is 0.4 of the height.** Measured median 0.40 on rectangles and 0.48 on pills, because a full curve eats the corners. Set it with `calc()`, so a size change keeps the ratio. Padding of 0.6 or more reads as a bootstrapped default, and 0.3 or less reads as a tag. When an icon sits on the trailing side, take 2 to 4px off that side, since a small glyph has less optical mass than a letter.

**The label is small, and rarely bold.** 14px up to a height of 40, then 16px. Weight 400 on 43 percent of buttons, 500 on 32 percent, 600 on 11 percent and 700 on 7 percent. Variable faces use the gaps, and 425, 450, 510 and 550 are all measured favourites. Weight numbers do not travel between faces: a 400 in a sturdy grotesque matches 450 to 500 in a lighter neo-grotesque, so judge stem thickness against the body text, not the number. Tighten by -0.006 to -0.011em at 14 to 16px, and open by 0.05 to 0.1em for caps. Labels run a median of two words and 11 characters, and 88 percent are three words or fewer.

**Radius sets the personality, and it must match the rest of the page.** Pills are 38 percent of all buttons and 41 percent of gold ones, and everything else splits across near-square shapes. Do not treat 8px as the neutral choice. It is what every component library ships, so on its own it says nothing. Pick with intent: 0 to 4 reads as print, finance or engineering, a full pill reads as consumer or calm product, and 6 to 12 works when it matches your cards exactly. Pair a soft radius with a chevron and a square one with a long thin arrow.

**The edge is usually a shadow.** Use `box-shadow:inset 0 0 0 1px` rather than `border`. It adds no size, so a filled button and an outlined button share a height with no adjustment, and it can sit in a stack with a highlight. Half of measured buttons declare a border, but many are the same colour as the fill. A real keyline on a light page sits at 10 to 16 percent ink. On dark, 5 to 14 percent white.

**Light is what separates flat from made.** Only about 8 percent of buttons have any visible shadow, and 3 percent have an inset one, on 29 of 285 sites. So a highlight is an uncommon move and a strong one. One line does it: `inset 0 1px 0` in white at 12 to 16 percent, on dark or saturated fills only. Light always comes from above. A highlight on a white button does nothing, and a drop shadow on a flat page dates it.

**Response is a step, not an effect.** Hover moves the fill by a small measured amount in about 200ms. Press confirms in under 100ms. The numbers are in [The four states](#the-four-states). If a button lifts, glows and changes colour at once, it is a demo rather than a control.

**Sameness is the real signature.** The same button in nav, hero, sections and footer, at two sizes at most. Linear has 32px and 44px, Stripe has 40px and 48px, Ramp 34px and 52px. Sizes differ, and the object does not. A site with five button treatments reads as a sample book, however good each one is.

Four small things separate a finished button from a default one:

- **`white-space:nowrap`.** My first render of every demo wrapped a two-word label onto three lines inside a narrow flex parent. Set it in the base, then design the phone layout so buttons stack instead of squeezing.
- **`line-height:1` and flex centring.** The label is centred by the box, not by padding-top. Use `text-box:trim-both cap alphabetic` where supported, since some faces sit visibly high in a button.
- **Icon scale.** 16px icon beside a 14px label, 20px beside 16px, gap 6 to 8px, stroke matched to the letter stem: 1.5px at 14/500, and 2px on a 10px chevron. A thin icon beside a medium label reads as a stray glyph.
- **The right element.** `<a>` goes somewhere and `<button>` does something. A compact 32 to 36px button still needs a 44px target on touch, so extend it with a transparent `::after` at `inset:-6px`.

## What we measured

Each value is the median, with the middle half in brackets. Pill share counts any radius of at least half the height.

| Group | Height | Side padding | Label px | Weight | Pill share | Radius when not a pill |
|---|---|---|---|---|---|---|
| All 285 sites | 40 (36 to 48) | 16 (12 to 21) | 14 (14 to 16) | 500 (400 to 500) | 38% | 4 (2 to 8) |
| Gold | 40 (34 to 44) | 16 (12 to 20) | 15 (14 to 16) | 425 (400 to 500) | 41% | 6 (2 to 8) |
| Light precision | 40 (35 to 45) | 16 (12 to 20) | 14 (14 to 16) | 500 (400 to 500) | 39% | 6 (4 to 9) |
| Dark precision | 40 (35 to 44) | 16 (12 to 20) | 14 (13 to 16) | 450 (400 to 500) | 39% | 6 (4 to 8) |
| Gradient light | 40 (36 to 48) | 16 (14 to 20) | 15 (14 to 16) | 425 (400 to 550) | 30% | 8 (4 to 10) |
| Warm neutral | 42 (36 to 49) | 16 (13 to 24) | 14 (12 to 16) | 500 (400 to 500) | 36% | 6 (0 to 9) |
| Photo led | 40 (36 to 48) | 16 (10 to 21) | 14 (13 to 16) | 400 (400 to 600) | 38% | 0 (0 to 4) |
| Bold colour | 44 (40 to 48) | 16 (14 to 24) | 16 (14 to 16) | 500 (400 to 500) | 50% | 4 (0 to 4) |
| Mono technical | 42 (36 to 56) | 12 (8 to 19) | 16 (14 to 16) | 400 (400 to 500) | 18% | 4 (0 to 4) |
| Type led | 36 (34 to 44) | 16 (12 to 20) | 14 (14 to 16) | 400 (400 to 700) | 16% | 0 (0 to 3) |
| Illustrated | 48 (36 to 55) | 24 (12 to 32) | 14 (12 to 18) | 400 (400 to 700) | 49% | 5 (4 to 7) |

A summary elsewhere in this corpus gives pills as 22 percent. That figure counted only radii of 100px or more, and misread values written as `3.35544e+07px`. A 48px button with a 24px radius is a pill, and these are the corrected numbers. Shadow figures below are floors, because long shadow strings were cut at capture.

| Fact | Value |
|---|---|
| Radius family | Pill 38%, 5 to 8px 19%, 1 to 4px 17%, 0 15%, 9 to 12px 8%, 13px or more 4% |
| Height share | 28 to 35: 22%, 36 to 39: 16%, 40 to 43: 24%, 44 to 47: 11%, 48 to 55: 19%, 56 or more: 9% |
| Main call to action, fill | Brand colour 35%, near-white 24%, near-black 19%, outline or ghost 11%, translucent 4%, other 7% |
| Any visible shadow | About 8% of buttons, on 24% of sites |
| Inset highlight or lip | About 3% of buttons, on 10% of sites |
| Transition length | None 29%, 150ms 22%, 200ms 18%, 300ms 14%, 100ms 4%, 250ms 4% |
| Easing | `ease` 51%, `cubic-bezier(.4,0,.2,1)` 19%, `ease-in-out` 7% |
| Label length | 1 word 24%, 2 words 41%, 3 words 23%, 4 or more 12% |
| Gap inside a pair | 16px most often, then 12, 8 and 10; median 15 |

Two of those deserve a pause. A main button is a neutral at least as often as it is a colour, so a brand colour is not required for a button to feel like the action. And 29 percent of buttons declare no transition at all, including Apple's. An instant cut is a legitimate choice, and it feels fast.

## The four states

Design these in order of importance: press, focus, hover, disabled. Hover does not exist on a phone, and focus is the only feedback a keyboard user gets. For choreography beyond a colour step, see `references/motion/interaction.md`.

### Hover

Across 516 sites, 78 percent of main buttons and 77 percent of secondaries change on hover, and 22 percent do nothing. What changes is the fill on 77 percent of responding main buttons, a transform on 17 percent, text colour on 17 percent, a shadow on 11 percent and opacity on 11 percent. Duration runs 150, 200 and 300ms at the quartiles.

The direction rule is the most useful finding here, because generated pages often get it backwards.

| Rest fill | Measured move | Examples | Recipe |
|---|---|---|---|
| Near-black or charcoal | Lightens on 90% of sites, by 11 L\* (6 to 14) | #000 to #1c2024 on Expo, #0c0d0d to #303236 on Neon | `color-mix(in oklab,var(--ink) 88%,var(--bg))` |
| White on a light page | Darkens by 4 L\* | #fff to #f2f2f2 on Vercel, #fff to #ececec on Rivian | `color-mix(in oklab,#fff 95%,var(--ink))` |
| Off-white on a dark page | Steps up to pure white | #e5e5e6 to #fff on Linear, #e6e6e6 to #fff on Raycast | Rest below white, so there is room to rise |
| Saturated colour | Darkens on 70% of sites, by 8 L\* (-13 to +1) | Blue #146ef5 to #0055d4 on Webflow | `color-mix(in oklab,var(--accent) 88%,#000)` |
| Ghost or glass | Alpha rises | Fill .08 to .14, border .14 to .24 on Nx | Move fill and border together |
| Outline | Inverts, or the border darkens | Navy stroke to solid navy on Ritual | One step only, either way |

About a quarter of solid fills invert outright instead, moving more than 25 L\*. That is the [ink swap](#3-ink-swap), and it belongs to square, print-like buttons. When a button moves, it moves very little: main buttons translate a median of -2px, and scale is rare. Prefer moving a part, such as an arrow, over moving the whole.

### Press

This is the least built state on the web. Of 396 controls probed with a forced `:active` on 172 sites, only 19 percent do anything beyond their hover. That makes a press response an easy way to out-finish most of the corpus.

| Response | Values measured | Seen on |
|---|---|---|
| Scale | .97 to .99, most often .98 | Linear .97; Expo, Cloudflare Workers, Brilliant, ElevenLabs .98; Zed, LiveKit .99 |
| Travel | Down 1 to 2px | Cloudflare Workers and Zed 1px; CleanShot 2px |
| Fill step past hover | One further step in the same direction | Apple #272729 to #18181a; reMarkable #1142d4 to #003bb2; Attio's light button to L\* 96 |
| Highlight inverts | The top light turns into a top shadow | Cal.com, white at 16% to black at 8% |
| Shadow collapses | The drop shadow fades to nothing | CleanShot, 0 2px 6px to none |

Use scale .98 on ordinary buttons, a fill step on large ones, and real travel only on keys. Set press at 50 to 100ms, and let release run at the normal hover length, so the press feels mechanical and the return feels soft. Never move a whole button by more than 2px, because a press on its bottom edge can slide it out from under the pointer and cancel the click. iOS needs a `touchstart` listener, or `pointerdown`, before it applies `:active` reliably.

### Focus

Of those 396 controls, 46 percent define an outline, 6 percent a box-shadow ring, 43 percent fall through to the browser default, and 4 percent show nothing, which is a bug. Where a width is set, 63 percent use 2px. In stylesheets across 74 sites, `outline-offset` is 2px on 43, 4px on 17, 3px on 12, and an inset -2px on 14.

Use `outline`, not `box-shadow`, because it follows the radius in current browsers, needs no layout, survives forced colours and does not fight your shadow stack.

```css
:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.on-accent:focus-visible{outline-color:var(--ink)}     /* an accent ring vanishes on an accent ground */
.dark :focus-visible{outline-color:var(--ink)}         /* on dark, a light ring reads best */
```

Use `:focus-visible`, not `:focus`, so a mouse click leaves no ring. Never ship `outline:none` without a replacement: at least 31 sites in the probe zero the outline on a button-like selector, and some have nothing behind it. A `clip-path` cuts the outline off, so a [cut corner](#19-cut-silhouette-block) needs an inset ring with `outline-offset:-4px`. Keep focus visually separate from hover, so that a keyboard user can tell them apart at a glance.

### Disabled

Rendered disabled buttons fall into two schools. Neutralising keeps the shape and removes the colour: Vercel's Geist sets #f2f2f2 fill with #8f8f8f text, Radix sets a 6 percent ink fill with 27 percent ink text, Mantine #e9ecef with #adb5bd, Ramp a stone fill with 60 percent ink. Dimming keeps the colour and lowers opacity: 65 stylesheets set it, at .5 on 30 of them, .3 on 14, .4 on 8 and .6 on 6.

Neutralise primaries. A dimmed black button is a grey button that still looks like the main action, and a dimmed colour sits muddy on the page. Dim only secondaries, icons and carousel arrows, where 40 percent is the working value. Text at about 48 percent ink on a 6 percent fill gives near 3:1, which is exempt from contrast rules yet still readable, and a disabled label that cannot be read cannot explain itself.

Set `cursor:not-allowed` or `default`, and remove the highlight, lip and shadow, because a raised object looks pressable. Of 92 stylesheets that set a cursor, 22 leave it as `pointer`, which promises something that will not happen. Prefer `aria-disabled="true"` over the `disabled` attribute when a person can reach the button by keyboard and needs a tooltip to learn why it is off. Better still, leave the button active and explain the problem when it is pressed.

### Loading

Keep the width. Swap the label for a 14 to 16px spinner, or keep the label and put the spinner in the leading slot, as Geist does, and take the disabled look without the disabled cursor. If the width changes, the row jumps and the pointer ends up over something else. Under 300ms, show nothing.

### The base recipe

```css
.btn{--h:40px;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  height:var(--h);padding:0 calc(var(--h)*.4);border:0;border-radius:8px;
  background:var(--ink);color:var(--bg);font:500 14px/1 var(--font-text);letter-spacing:-.006em;
  white-space:nowrap;text-decoration:none;cursor:pointer;touch-action:manipulation;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),color .15s,box-shadow .15s,scale .1s}
@media(hover:hover){.btn:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}}
.btn:active{scale:.98}
.btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.btn:disabled,.btn[aria-disabled=true]{background:color-mix(in srgb,var(--ink) 6%,var(--bg));
  color:color-mix(in srgb,var(--ink) 48%,var(--bg));box-shadow:none;cursor:not-allowed;scale:1}
@media(prefers-reduced-motion:reduce){.btn{transition-property:background-color,color}}
```

Gate hover behind `@media(hover:hover)`, because on touch a tapped button keeps its hover style until the next tap elsewhere. Reduced motion removes travel, but a small press stays, since the person caused it. The recipes below show `:hover` directly to stay short.

## Nine button systems

Variants only work together. A keycap primary beside a glass secondary and a serif link is a sample book. Choose one row, then take every button on the site from it. Two sites built from different rows will look unrelated, and that is the point, so let the deal or the brief decide rather than a favourite.

| System | Shape and size | Primary | Secondary | Third action | Response | Reference |
|---|---|---|---|---|---|---|
| Instrument | Radius 6 to 10, 32 to 36px, 14/500 | Neutral chip | Pale hairline chip | Ink arrow link | Tone step, 150ms | Vercel, Attio, Notion Calendar |
| Cool product | Radius 4, 40 and 48px, weight 400 | Saturated rectangle | Pale accent keyline | Accent chevron link | Chevron grows a stem, 300ms | Stripe |
| Calm pill | Full pill, 40 to 48px | Neutral pill | Tonal pill or outline pill | Hairline underline | Tone step, press .97 to .98 | Linear, Expo, Apple |
| Lit object | Radius 8 to 14, 36 to 48px | Top-lit chip, light key or lit colour | White raised key or dark raised chip | Chevron link | Highlight changes on press | Raycast, Cal.com, CleanShot |
| Tactile | Radius 6 to 16, 44 to 50px, bold | Lower lip key | Same key in white with a grey lip | Bold plain link | Cap drops 3 to 4px | PostHog, Canary, Brilliant |
| Terminal | Radius 0 to 4, mono, 36 to 41px | Mono caps block | Install command or mono outline | Mono caps underline | Tone step or instant | Warp, Speakeasy, Inngest, Factory |
| Print | Radius 0 to 2, 40 to 48px | Square block | Ink outline square | Ruled cell link | Ink swap | Polestar, Jasper, Cognition |
| Soft consumer | Full pill, 48 to 56px, colours from the page | Saturated pill or sampled tint | Glass or tonal pill | Underlined link | Tone step | Hims, One Medical, Rivian |
| No buttons | No containers at all | Underline with detached arrow, or mono caps underline | Same link, muted | Same link, smaller | Underline or colour shift | Medusa622, Prototype, Stone Island |

## Primary

A primary button has one job: to be the single thing on the screen that says what happens next. Everything else on the page should make that easier to find. It repeats, unchanged, wherever the action is on offer.

What separates great from cheap is rarely the fill. Great primaries are small, exact and few. They are the same object everywhere, sized to the context, with one considered detail: a highlight, a chevron that grows a stem, a lip. Cheap ones are large and generic: 52px, 18px bold, radius 8, an arrow emoji, a drop shadow and a hover lift, in two different colours on one page. The second mark of a cheap primary is a button that competes with something else in the same colour. A primary gets its authority from being the only instance of its kind, so a neutral black button beside a neutral page beats a bright button beside a bright illustration.

Measured: 34 to 44px at gold, median 40. Text 14 to 16px, weight 400 to 500. Pills on 41 percent of gold buttons, otherwise radius 2 to 8. Hover 150 to 300ms, tone step of 11 L\* up on dark fills, 4 down on white, 8 down on colour. Press scale .98 in under 100ms. Focus 2px outline at 2px offset. Disabled neutral, not dimmed. Strong sites keep to two sizes.

<!-- v:button.primary/neutral-chip -->
### 1. Neutral chip

*Feeling: a good tool, sure of itself.*

A near-black rectangle on light, or near-white on dark, with no colour at all. It works in any palette, it never fights an image, and it reads as product. Use it for SaaS, developer tools, docs and app UI. Avoid it when a consumer brand needs warmth, where a pill or a colour does more.

Set 32 to 40px, radius 6 to 10, 14/500, 12 to 16px padding, no shadow. Attio adds a 1px border one step lighter than the fill, about L\* 37 on L\* 13, which reads as a faint rim. Analysts recorded that rim as darker, and the measured value corrected it. Vercel uses a flat #171717 at radius 6 and nothing else. The chip shares its radius with the page's inputs and small cards.

**Seen on** Tana, Attio, Exa, Scale AI, Geist note, 14 sites in all. **Suits** light-precision, photo-led, dark-precision, warm-neutral; devtool, saas, ai, ecommerce.

```css
.b-chip{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid color-mix(in oklab,var(--ink) 76%,var(--bg));
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),scale .1s cubic-bezier(.4,0,.2,1)}
.b-chip:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-chip:active{scale:.98}
.b-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.primary/neutral-pill -->
### 2. Neutral pill

*Feeling: calm, expensive, one thing to press.*

A full pill in the strongest neutral the page allows, often the only filled object in the viewport. Linear uses #e5e5e6 rather than white on #08090a, then steps to pure white on hover, so the button has somewhere to go. Polar, Affirm and Revolut do the same on their dark sections, and the value flips with the ground while the shape stays. On light pages, deep brand tones such as a plum or a forest green behave as ink and belong here too.

Set 40 to 48px, 14 to 16px at 500, 20 to 24px padding, no shadow, press .97. Use it for dark product pages, finance, robotics and brands with strong imagery. Do not put two on one row with equal weight. Hold pure white in reserve, because white on black at rest is harsher than it needs to be.

**Seen on** Linear, Polar, Affirm, Neon Docs, Revolut, 19 sites in all. **Suits** photo-led, dark-precision, light-precision, warm-neutral; finance, saas, brand, agency.

```css
.b-pill{display:inline-flex;align-items:center;height:44px;padding:0 20px;border:0;border-radius:999px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 92%,var(--bg));color:var(--bg);
  font:500 16px/1 var(--font-text);letter-spacing:-.011em;cursor:pointer;
  transition:background-color .16s cubic-bezier(.25,.46,.45,.94),scale .1s}
.b-pill:hover{background:var(--ink)}
.b-pill:active{scale:.97}
.b-pill:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

<!-- v:button.primary/saturated-rect -->
### 3. Saturated rectangle

*Feeling: institutional, precise, confident about colour.*

One saturated fill on a near-square shape. Stripe's recipe is the reference: 48px with 16px at weight 400 in the hero, 40px with 14px in the nav, radius 4, 24 and 20px padding, a small chevron and nothing else. The square corner keeps a bright colour from feeling friendly, so it reads as finance rather than as consumer. Ramp's lime at radius 6, reMarkable's blue at radius 2 and LiveKit's flat cyan at radius 4 all work the same way: the colour appears on buttons and almost nowhere else.

Use it for finance, infrastructure and enterprise. Choose text colour by contrast, and do not assume white. Lime and cyan take near-black, so set `--on-accent` to your ink. Keep the gap to the chevron at 6px with a 2px stroke, or it detaches.

**Seen on** Stripe Billing, Ramp, Stripe, Stripe Contact Sales, LiveKit, 19 sites in all. **Suits** bold-colour, dark-precision, light-precision, gradient-light; finance, devtool, saas, brand.

```html
<button class="b-rect">Get started
  <svg class="b-arr" viewBox="0 0 10 10"><path class="stem" d="M0 5h7"/><path d="M3.5 1.5 7 5 3.5 8.5"/></svg></button>
```

```css
.b-rect{display:inline-flex;align-items:center;gap:6px;height:48px;padding:0 20px 0 24px;border:0;border-radius:4px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,#fff);font:400 16px/1 var(--font-text);cursor:pointer;
  transition:background-color .3s cubic-bezier(.25,1,.5,1),scale .1s}
.b-rect:hover{background:color-mix(in oklab,var(--accent) 86%,#000)}
.b-rect:active{scale:.98}
.b-rect:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.b-arr{width:10px;height:10px;overflow:visible;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;
  transition:translate .3s cubic-bezier(.25,1,.5,1)}
.b-arr .stem{opacity:0;transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.25,1,.5,1),opacity .15s}
.b-rect:hover .b-arr{translate:3px 0}
.b-rect:hover .stem{opacity:1;transform:none}
```

<!-- v:button.primary/saturated-pill -->
### 4. Saturated pill

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

**Seen on** Apple, Sweetgreen, Concertgebouw, Ripple Health, Orion Icon Library, 14 sites in all. **Suits** bold-colour, photo-led, light-precision, warm-neutral; agency, culture, health, finance.

<!-- v:button.primary/compact-chevron-pill -->
### 5. Compact chevron pill

*Feeling: product-sized, polite, repeatable.*

Stripe's small pill: 33px tall, radius 16.5, 15px at weight 425, 16px padding, a 10px chevron, 300ms transitions. The height is the point. It can repeat on every card and sit under a table of rates without shouting, and it keeps a colourful page feeling like software. Use it when one action recurs many times down a page. It is too small for a consumer hero, where 44px or more reads better on phones.

**Seen on** Stripe Climate, Stripe Connect, Stripe Atlas, Stripe Pricing, Mixpanel. **Suits** gradient-light, light-precision; finance, saas.

<!-- v:button.primary/square-block -->
### 6. Square block

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

**Seen on** Gagosian, ACME, Royal Ontario Museum, Oxygen Pictures, Wild, 18 sites in all. **Suits** photo-led, type-led, bold-colour, expressive; ecommerce, agency, culture, editorial.

<!-- v:button.primary/mono-caps-block -->
### 7. Mono caps block

*Feeling: a machine that respects you.*

A charcoal block with uppercase monospace in light grey. Speakeasy's is the most refined: 41px, radius 8, 14px at weight 300, 0.1em tracking, #242428 fill, text in about #c9c9cc rather than white, and an ASCII `>` in place of an arrow. Analysts had its radius as 6, and measurement gives 8. Warp goes full width and square inside pricing cards, and keeps radius 4 in the nav, so the sharp corner marks commitment.

Use it for infrastructure, AI tooling and developer products. The grey label is the key, because white mono caps at weight 500 shout. Do not use it for consumer products, or with a label over about three words.

**Seen on** Warp Pricing, Speakeasy, Factory, Inngest, Together AI, 6 sites in all. **Suits** light-precision, dark-precision, gradient-light, mono-technical; devtool, ai, other.

```css
.b-mono{display:inline-flex;align-items:center;gap:10px;height:41px;padding:0 24px;border:0;border-radius:8px;white-space:nowrap;
  background:var(--ink);color:color-mix(in srgb,var(--bg) 78%,var(--ink));cursor:pointer;
  font:300 14px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.1em;text-transform:uppercase;
  box-shadow:inset 0 2px 1px rgba(255,255,255,.16);transition:background-color .15s,color .15s}
.b-mono:hover{background:color-mix(in oklab,var(--ink) 90%,var(--bg));color:var(--bg)}
.b-mono:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.primary/wide-tracked-caps -->
### 8. Wide tracked caps

*Feeling: a label on a good box.*

A short word in a wide box. Snow Peak sets 282 by 55px, radius 0, 14px caps at 0.2em, and the width ignores the label. The empty space is what feels like print. KAWARA's espresso pill does the same at 300 by 58. Use it for fashion, hospitality, museums and outdoor goods, where a slow pace suits the product. Use it once per view. On a software page it reads as slow.

**Seen on** Snow Peak, KAWARA MUSEUM - LIBRARY, Magram, Daylight. **Suits** photo-led, warm-neutral, light-precision, gradient-light; ecommerce, culture, agency, health.

<!-- v:button.primary/top-lit-chip -->
### 9. Top-lit chip

*Feeling: barely there, felt at once.*

A dark chip with one inner line of light on its top edge. Cal.com's is the model: 36px, radius 12, 14/500, 14px padding, fill #242424. The trick is a 1px border in the fill's own colour, which pushes `inset 0 1px 0` one pixel in from the edge. The highlight then sits inside a dark rim rather than touching the outside, which keeps the top from looking blown out. My first attempt had no border and looked soft.

On press Cal.com inverts the light, turning white at 16 percent into black at 8 percent, so the button seems to fall in. Pair it with a white twin at 1px line, as in [top-lit twin](#5-top-lit-twin). Use it for SaaS on light pages. Attio's Pricing version adds a radial top glow.

**Seen on** Cal.com Pricing, Speakeasy, Attio Pricing, Cal.com, Reflect. **Suits** light-precision, render-3d; saas, devtool.

```css
.b-lit{display:inline-flex;align-items:center;gap:4px;height:36px;padding:0 14px;border-radius:12px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid var(--ink);cursor:pointer;
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 1px 2px rgba(0,0,0,.05);
  transition:background-color .15s cubic-bezier(0,0,.2,1),box-shadow .15s cubic-bezier(0,0,.2,1)}
.b-lit:hover{background:color-mix(in oklab,var(--ink) 90%,var(--bg))}
.b-lit:active{box-shadow:inset 0 1px 0 rgba(0,0,0,.08)}
.b-lit:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.primary/bevelled-light-key -->
### 10. Bevelled light key

*Feeling: a physical keycap in a dark room.*

Raycast's button is a study in shadow. A flat #e6e6e6 fill carries four shadows: a 2px black ring at 50 percent that seats it in the page, a 14px white glow at 19 percent that lifts it, an inset -1px black line at 20 percent along the base, and an inset 1px white line along the top, both blurred by only .4px. The ring is the part people miss. Without it, the key floats rather than sits.

Set 36 to 38px, radius 8, 14/500 with 0.2px tracking, a 16px leading icon, 12px padding. Hover steps to pure white in 200ms. Use it as the only light object in a dark card, for tools and native apps. One per view, because two lit keys cancel out. Its dark sibling is [dark raised chip](#7-dark-raised-chip).

**Seen on** Raycast Pricing, Raycast Store. **Suits** dark-precision; saas, devtool.

```css
.b-key{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:36px;padding:0 12px;border:0;border-radius:8px;white-space:nowrap;
  background:#e6e6e6;color:#202124;font:500 14px/1 var(--font-text);letter-spacing:.2px;cursor:pointer;
  box-shadow:0 0 0 2px rgba(0,0,0,.5),0 0 14px rgba(255,255,255,.19),inset 0 -1px .4px rgba(0,0,0,.2),inset 0 1px .4px #fff;
  transition:background-color .2s ease,box-shadow .2s ease}
.b-key:hover{background:#fff}
.b-key:active{background:#d9d9d9;box-shadow:0 0 0 2px rgba(0,0,0,.5),inset 0 1px 1px rgba(0,0,0,.2)}
.b-key:focus-visible{outline:2px solid #fff;outline-offset:3px}
```

<!-- v:button.primary/lit-colour-button -->
### 11. Lit colour button

*Feeling: enamel, glass, a Mac app.*

A saturated fill lit from inside. CleanShot's is not a gradient at all: flat #0d44e8 with `inset 0 6px 14px` of a paler blue at 48 percent and a small tinted drop shadow, `0 2px 6px -1px`. Set 48px, radius 14, 15/550. Buildkite uses a true vertical gradient from about #8422ff to #4d06a7 with a 1px border in the middle tone. Better Stack uses a 1px lighter top edge. All three depend on tint: the shadow and glow belong to the fill's own hue, never grey.

Use it for native apps and consumer SaaS on gradient-light or dark pages. Keep it to one lit object per screen. On press, drop the shadow and travel 2px. My first version had a heavy drop shadow, and it read as a 2014 bootstrap theme. Halving the alpha fixed it.

**Seen on** AuthKit, CleanShot X, Buildkite, Comet, Nx, 8 sites in all. **Suits** light-precision, gradient-light, dark-precision, warm-neutral; devtool, saas, ai, finance.

```css
.b-glow{--lift:color-mix(in oklab,var(--accent) 60%,#fff);display:inline-flex;align-items:center;height:48px;padding:0 20px;border:0;border-radius:14px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,#fff);font:550 15px/1 var(--font-text);cursor:pointer;
  box-shadow:0 2px 6px -1px color-mix(in srgb,var(--accent) 30%,#000 30%),inset 0 6px 14px color-mix(in srgb,var(--lift) 48%,transparent);
  transition:background-color .15s ease,box-shadow .15s ease,translate .1s}
.b-glow:hover{background:color-mix(in oklab,var(--accent) 92%,#fff)}
.b-glow:active{translate:0 2px;box-shadow:inset 0 6px 14px color-mix(in srgb,var(--lift) 48%,transparent)}
.b-glow:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.primary/lower-lip-key -->
### 12. Lower lip key

*Feeling: you want to press it.*

A physical key with a hard darker lip. PostHog's sets an amber face over a 3 to 4px lip at radius 6 to 8, and it repeats the same object at 32px in the nav and 46px in the hero. Canary goes softer at radius 16. Brilliant uses full pills. Hard edge and no blur is what makes it a key rather than a shadow.

Use warm saturated faces, with a label in dark ink. Suits developer tools with humour, education and illustrated brands. It is wrong for formal, luxury and finance work.

Two things make it real. Run the lip colour around the whole face as a 1px rim, because a lip only at the bottom reads as two stacked rectangles. Build the base as a separate layer offset down, and move only the cap. My first version made the button itself the base, so a pressed face exposed a band of lip colour along its top. See `references/motion/interaction.md` for the timing, which is 70ms down and a slower release.

**Seen on** Brilliant, Zed Pricing, Canary, PostHog Pricing, PostHog, 7 sites in all. **Suits** illustrated, expressive, warm-neutral, mono-technical; devtool, saas, education.

```html
<button class="b-lip"><span>Get started</span></button>
```

```css
.b-lip{--edge:color-mix(in oklab,var(--accent) 78%,#3a1d00);--d:4px;position:relative;display:inline-block;padding:0 0 var(--d);
  border:0;border-radius:8px;background:none;cursor:pointer}
.b-lip::before{content:"";position:absolute;inset:var(--d) 0 0;border-radius:8px;background:var(--edge)}
.b-lip>span{position:relative;display:flex;align-items:center;height:44px;padding:0 18px;border-radius:8px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,var(--ink));font:650 15px/1 var(--font-text);letter-spacing:-.01em;
  box-shadow:inset 0 0 0 1px var(--edge),inset 0 2px 0 rgba(255,255,255,.22);
  transition:transform .4s cubic-bezier(.2,1.4,.4,1),background-color .15s}
.b-lip:hover>span{background:color-mix(in oklab,var(--accent) 92%,#fff)}
.b-lip:active>span{transform:translateY(var(--d));transition:transform 70ms cubic-bezier(.4,0,1,1)}
.b-lip:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

<!-- v:button.primary/hard-offset-shelf -->
### 13. Hard offset shelf

*Feeling: a sticker, a printed card game.*

A solid shelf with no blur, in the darkest tone of the fill. Pomegranate sets a 62px pill with a 1.5px plum stroke, an 8px shelf and bold, widely tracked caps. Jasper shows the idea as a hover, sliding the button -4px,-4px and revealing a 4px shelf. Use a shelf at 4 to 8px, and one shadow colour for the whole page. It suits illustrated, health and consumer education brands, and it works only when the rest of the page is flat and graphic, since any soft shadow nearby breaks the print.

**Seen on** Pomegranate Health, YOLO.EXE. **Suits** illustrated, expressive; health, education.

<!-- v:button.primary/ink-outlined-fill -->
### 14. Ink outlined fill

*Feeling: a comic panel with good manners.*

A pale brand fill inside a heavy ink stroke. Wispr Flow's lilac at 48 to 52px, radius 8, 2px near-black border and 16/600 repeats in nav, hero and closing band, so lilac comes to mean action. MotherDuck does it with a sky blue and radius 2. Keep the fill light and let the stroke be the darkest thing in view. It works on warm and illustrated pages. Avoid it next to thin hairline UI, where 2px looks clumsy.

**Seen on** Wispr Flow, MotherDuck, Diego's Authentic Foods, Shinbu Aikido Club. **Suits** illustrated, warm-neutral, expressive; saas, devtool, food-drink, local-business.

<!-- v:button.primary/ringed-halo-pill -->
### 15. Ringed halo pill

*Feeling: one bright thread around a dark object.*

A dark pill wrapped by a detached ring. Customer.io's is 48px, 16/600, 28px padding, deep teal fill, with `0 0 0 4px` in a pale mint. Analysts estimated 3px and measurement gives 4. The ring is the only bright colour above the fold and marks every primary action, while its secondary keeps the same shape with a near-invisible grey ring, so the two line up. Perplexity Comet scales the idea to a 66px pill with a 50px white disc and two faint concentric rings at 16 and 32px.

The ring works because it uses no space and adds a brand colour without touching the fill. Use it on light pages with a deep fill. Do not confuse it with focus: give focus a separate outline further out.

**Seen on** Customer.io, Comet, Sam Hoult Beauty. **Suits** warm-neutral, light-precision; saas, ai, local-business.

```css
.b-ring{display:inline-flex;align-items:center;height:48px;padding:0 28px;border:0;border-radius:999px;white-space:nowrap;
  background:var(--ink);color:var(--bg);font:600 16px/1 var(--font-text);cursor:pointer;
  box-shadow:0 0 0 4px color-mix(in srgb,var(--accent) 45%,var(--bg));transition:background-color .2s cubic-bezier(0,0,.35,1),scale .1s}
.b-ring:hover{background:color-mix(in oklab,var(--ink) 80%,#000)}
.b-ring:active{scale:.98}
.b-ring:focus-visible{outline:2px solid var(--ink);outline-offset:6px}
```

<!-- v:button.primary/spectral-edge-pill -->
### 16. Spectral edge pill

*Feeling: a thread of the artwork, caught in the edge.*

A neutral pill with a thin multi-hue stroke. Elyx sets 56px, 18/600, a 2px stroke running blue, violet, pink and peach, and a wide 38px shadow at 8 percent. Decagon uses 1.5px from orange to violet on a near-black gradient fill, the same in nav, hero and close. Vite sends a light segment around a purple stroke on a dark button. The colours must come from the page's own art, or this becomes the rainbow border of a thousand AI landing pages.

Build it with two backgrounds, so the stroke follows the radius and focus still works. Keep saturation in the stroke only.

**Seen on** Decagon, Elyx, Vite, Hugging Face Pricing, Prisma. **Suits** soft-pastel, warm-neutral, dark-precision, light-precision; ai, devtool, saas.

```css
.b-spec{display:inline-flex;align-items:center;height:56px;padding:0 32px;border:2px solid transparent;border-radius:999px;white-space:nowrap;
  color:var(--ink);font:600 18px/1 var(--font-text);letter-spacing:-.01em;cursor:pointer;
  background:linear-gradient(var(--bg),var(--bg)) padding-box,
    linear-gradient(100deg,var(--accent),color-mix(in oklch,var(--accent),#f3b37a) 70%) border-box;
  box-shadow:0 4px 38px rgba(0,0,0,.08)}
.b-spec:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
```

<!-- v:button.primary/nested-arrow-chip -->
### 17. Nested arrow chip

*Feeling: two parts that fit together.*

The label and the arrow are separate shapes. Scale nests a 32px white tile with radius 6 inside a 40px black button at radius 8, with a 4px inset all round. Ai2 sets a pink pill with a detached 40px disc touching its end. Freshly Launched puts a 36px white disc inside a butter pill. Hover moves only the chip, which gives the plain pill its one moment of life.

This is one of the cheapest ways to give an ordinary pill an identity. Use one form, and let the chip recur in text links. Start from outer radius minus inset, and round it up slightly at small sizes, as Scale does, so the tile does not look sharper than its parent. Avoid it on buttons under 36px, where the chip has no room.

**Seen on** Scale AI, Wildbran, Ai2, Freshly Launched, Origin Wellness Spa, 10 sites in all. **Suits** photo-led, bold-colour, dark-precision, warm-neutral; health, ai, ecommerce, food-drink.

```html
<button class="b-nest">Book a demo <i><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2l4 4-4 4"/></svg></i></button>
```

```css
.b-nest{--r:8px;--in:4px;display:inline-flex;align-items:center;gap:12px;height:40px;padding:0 var(--in) 0 16px;border:0;border-radius:var(--r);white-space:nowrap;
  background:var(--ink);color:var(--bg);font:400 15px/1 var(--font-text);cursor:pointer}
.b-nest i{display:grid;place-items:center;width:32px;height:32px;border-radius:calc(var(--r) - var(--in)*.5);background:var(--bg);color:var(--ink);transition:translate .2s}
.b-nest:hover i{translate:2px 0}
.b-nest:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.primary/signature-glyph-button -->
### 18. Signature glyph button

*Feeling: a small mark that belongs to someone.*

A plain control carrying one owned glyph instead of an arrow. ECI places a 12px black dot before the label in a 47px grey pill. Symbol Studio uses a 6px dot on an orange block. axem steps a pixel chevron. Haikei tilts a 30px dice icon by -15 degrees, since dice are the product. The glyph then recurs in lists and links, so one tiny mark does the work of a logo. Choose it from the brand's own object, and use it everywhere or nowhere.

**Seen on** ECI, Symbol Studio, Haikei, Gustavo H, axem. **Suits** expressive, photo-led, light-precision, dark-precision; ai, agency, saas, portfolio.

<!-- v:button.primary/cut-silhouette-block -->
### 19. Cut silhouette block

*Feeling: stamped from sheet metal.*

A square block with one cut corner. Bun clips 8px at top right of a 41px black block with 14 to 15/600 and a thin arrow, and it cuts its code blocks with the same notch, so the shape reads as a brand mark. One pink instance per group marks the sponsor. ConceptCore slices a whole edge by about 15 degrees for a louder, condensed version.

`clip-path` removes the outline, so give it an inset focus ring. It also clips any shadow, so this button stays flat. Use it only when the cut appears on at least one other object.

**Seen on** Bun, ConceptCore. **Suits** mono-technical, expressive; devtool, education.

```css
.b-cut{--c:8px;display:inline-flex;align-items:center;gap:12px;height:41px;padding:0 16px;border:0;white-space:nowrap;
  background:var(--ink);color:var(--bg);font:600 14px/1 var(--font-text);cursor:pointer;
  clip-path:polygon(0 0,calc(100% - var(--c)) 0,100% var(--c),100% 100%,0 100%);transition:background-color .15s}
.b-cut:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-cut:focus-visible{outline:2px solid var(--bg);outline-offset:-4px}
```

<!-- v:button.primary/information-bearing-button -->
### 20. Information bearing button

*Feeling: a shop assistant who answers before you ask.*

The control carries a fact as well as a verb. 1X sets a 14px price 16px to the left of a dark pill, so the price reads as part of the control. Bauhaus Clock writes the price into the label on every button. Analogue keeps one 41px pill through Buy Now, Available Now and Sold Out, with a 15px note 16px beneath about shipping. Definitiv Digital replaces a demo button with a 64px portrait of the founder and two lines of text, and a person is harder to ignore than a verb.

Use it for commerce, single-product pages and services sold by a person. Keep the shape fixed across states, and set price in tabular figures.

**Seen on** 1X, Bauhaus Clock, Analogue, Definitiv Digital, SC Program. **Suits** dark-precision, photo-led, light-precision, render-3d; saas, brand, ecommerce, education.

<!-- v:button.primary/recommended-fill-in-row -->
### 21. Recommended fill in a row

*Feeling: a quiet nudge, no badge needed.*

In a pricing row, one filled button steers the choice. Vercel sets 36px pills at 14/500, white with 1px line on Hobby and Enterprise, solid #171717 on Pro. Analysts estimated 40px, and the measured value is 36. Cursor gives every plan a stone #e6e5e0 pill and only the pick a #26251e fill. Mercury uses accent against a pale accent tint. Buttons run full column width at 36 to 44px. ElevenLabs does the opposite, with all black buttons and tile colour marking the pick, which is worth stealing when tiles carry the colour already.

Do not add a Most Popular badge as well. One signal is enough.

**Seen on** Cursor Pricing, Vercel Pricing, ElevenLabs Pricing, Attio Pricing, Dub Pricing, 6 sites in all. **Suits** light-precision, warm-neutral; ai, saas, devtool, finance.

```css
.b-plans{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:8px}
.b-plan{height:44px;border:0;border-radius:999px;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--ink);
  font:400 16px/1 var(--font-text);cursor:pointer;transition:background-color .15s}
.b-plan:hover{background:color-mix(in srgb,var(--ink) 13%,var(--bg))}
.b-plan.pick{background:var(--ink);color:var(--bg)}
.b-plan:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.primary/keycap-hint-button -->
### 22. Keycap hint button

*Feeling: this product assumes you are good at it.*

A button that teaches its shortcut. Zed sets 36px, radius 4, 14px mono, a 2px inset lower lip, then a 20px inset keycap with a lighter 1px outline holding D. LiveKit puts a 20px T before the label. The shortcut must really work. On a tool used daily, this tells the reader more about the product than a sentence could.

Hide the keycap on touch. Add `aria-keyshortcuts` to the button.

**Seen on** Zed Blog, Zed Pricing, LiveKit. **Suits** mono-technical, dark-precision; devtool, editorial.

```html
<button class="b-cap" aria-keyshortcuts="d">Download now <kbd>D</kbd></button>
```

```css
.b-cap{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 8px 0 12px;border:0;border-radius:4px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,#fff);font:400 14px/1 var(--font-mono,ui-monospace,monospace);cursor:pointer;
  box-shadow:inset 0 -2px 0 color-mix(in oklab,var(--accent) 62%,#000),0 1px 3px color-mix(in srgb,var(--accent) 12%,transparent)}
.b-cap:hover{background:color-mix(in oklab,var(--accent) 86%,#000);box-shadow:none}
.b-cap:active{scale:.99;translate:0 1px}
.b-cap:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.b-cap kbd{display:grid;place-items:center;width:20px;height:20px;border-radius:3px;font:500 11px/1 var(--font-mono,ui-monospace,monospace);
  background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}
@media(hover:none){.b-cap kbd{display:none}}
```

<!-- v:button.primary/split-choice-button -->
### 23. Split choice button

*Feeling: a real decision, made easy.*

The main action plus a separate chevron cell. Factory sets a mono caps label at radius 3 with a 1px seam in the page colour, then a chevron box for platform choice. TypeScript uses a 61px white rectangle with a 3px black divider. Use it when one verb has real alternatives, such as an OS download or an install method. Clicking the label runs the default, so that default has to be a good guess. Detect the platform. Round only the outer corners, and give the chevron cell its own hover and an accessible name.

**Seen on** Factory, Upstash, Noxus, TypeScript. **Suits** gradient-light, light-precision, bold-colour; ai, devtool.

<!-- v:button.primary/display-scale-button -->
### 24. Display scale button

*Feeling: a second headline.*

The button is sized to the headline rather than to the interface. Rabbit sets a 72px pill with a 53px label at weight 200 and a thin arrow. Lacoste's game page uses a 96px pill with 47px caps. Material sets an 80px pill at 24/475 under a 96px headline, and it holds that size on phones. Obsidian uses a plain 60px button with a 20px label. Use one per screen, on launches, games and single-product pages. Light weights work at this size, since the shape already carries the weight. It needs a page with room around it, and it fails inside a normal nav and section rhythm.

**Seen on** Rabbit, Lacoste Ace Breaker, Material 3, Obsidian, Teenage Engineering, 6 sites in all. **Suits** bold-colour, soft-pastel, dark-precision, render-3d; brand, devtool, saas, portfolio.

<!-- v:button.primary/docked-persistent-cta -->
### 25. Docked persistent action

*Feeling: the door stays open while you look around.*

An action fixed to the viewport for the whole scroll. Prägen Hätlen sets a 279 by 34px bar, centred 24px above the bottom edge, in small caps, and inverts it on paper sections. i-D fixes a 252 by 176 red-keylined box in a corner, with art cycling over the word. Przebiegły pins a 48px lime booking button top right. Use it on long stories and one-goal sites. Fade it out when the page's own closing action is in view, keep it out of the way of cookie banners, and give it safe-area padding on phones.

**Seen on** Prägen Hätlen, three.js, i-D and Ray-Ban present RED, Przebiegły Team, David Heckhoff, 6 sites in all. **Suits** render-3d, expressive, mono-technical, bold-colour; culture, brand, devtool, health.

<!-- v:button.primary/dark-page-quiet-button -->
### 26. Dark page quiet button

*Feeling: the room stays dark.*

No bright button at all. Resend's hero has a 48px control, radius 16, a white fill of about 5 to 8 percent, and a 1px line of about 14 percent, then a bare grey link. It reads as lit glass, and the darkness of the page stays unbroken. Sourcegraph makes its hero button deliberately quieter than the headline. Ghostty uses transparent buttons where the accent appears only as a 1px stroke.

Use it when the page's picture is doing the attention work, and the visitor already knows what they came for. It is wrong when conversion matters more than mood. Fill and border must rise together on hover.

**Seen on** Resend Changelog, Sourcegraph, Resend, Ghostty. **Suits** dark-precision, mono-technical; devtool.

```css
.b-quiet{display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:16px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 6%,transparent);color:var(--ink);font:500 16px/1 var(--font-text);cursor:pointer;
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent);transition:background-color .2s,box-shadow .2s}
.b-quiet:hover{background:color-mix(in srgb,var(--ink) 10%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 24%,transparent)}
.b-quiet:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

### Mistakes that cheapen a primary

Each of these appeared in my own first attempts or in the analysts' failure notes.

- **A label that wraps.** Every demo broke at narrow widths until `white-space:nowrap` went into the base. Design the phone stack instead.
- **A thin, distant chevron.** My first Stripe chevron had a 1.5px stroke and an 8px gap, and it read as a stray character. A 10px chevron needs a 2px stroke and a 6px gap, and a 12px one 1.5px.
- **Copying a weight number.** A 400 in Inter looked thinner than Stripe's 400, because their face has sturdier stems. Compare stem to stem, and raise by 50 to 100 if needed.
- **A lip without a rim.** A darker band under a flat rectangle is two boxes. Run the lip colour around the face and add a faint top light.
- **A base that moves with the cap.** Pressed, my first key showed lip colour above the face. Keep the base still.
- **A highlight touching the edge.** Top-lit chips need a border in the fill colour, so the light sits one pixel inside.
- **Grey shadows on colour.** A black drop shadow on a blue button goes muddy. Tint it with the fill.
- **Heavy shadow.** Measured alpha on tinted shadows is under .30. Mine started higher and dated the button by ten years.
- **Pure white on pure black at rest.** Keep a step in reserve for hover.
- **Inverted hover.** A black button that darkens has nowhere to go, so it looks broken. Dark fills lighten.
- **Two filled primaries in one view.** If both are filled, neither is primary.
- **A coloured glow behind the button.** Glow is not a material. Use it only where the page is already lit.
- **Icon in every button.** An arrow on everything means nothing. Put one on the button that goes somewhere, and leave the rest plain.
- **Radius that ignores the page.** A 999px pill among 2px tiles can be a signature, as on Neon's docs. A 12px button among 4px inputs is just a mismatch.
- **Forgetting the disabled and focus states.** Render them. In the probe, 43 percent of controls fall back on the browser ring.

## Secondary

A secondary button offers the other thing a person might want, and must not win. It sits beside the primary, or stands alone under a section. Its job is to be visibly a control while staying visibly second, so the eye reads the rank in one glance.

What separates great from cheap is how little it takes to rank. The best secondaries change one property: same height, same radius, same padding, and only the fill drops away. Cheap ones vary everything, with a different radius, a different size and a thick coloured outline that shouts as loudly as the primary. A 2px saturated outline often competes with the primary, while a tint or a pale hairline does not. The other failure is a secondary so faint that it reads as disabled, as when a neutral grey fill sits beside a warm page.

Measured: same height as the primary. On light pages the keyline runs 10 to 16 percent ink, or a tint of 4 to 8 percent ink. On dark, the fill runs white at 5 to 14 percent, with a line of white at 3 to 14 percent. Hover raises fill by 4 percent or inverts. Measured hover: fill on 73 percent of responding secondaries, text colour on 33 percent, border on 11 percent, 150 to 300ms. Press as for primary, scale .98 or a fill step. Focus 2px outline at 2px offset. Disabled: border to 8 percent ink, text to 48 percent, no fill.

<!-- v:button.secondary/pale-hairline-chip -->
### 1. Pale hairline chip

*Feeling: present, polite, out of the way.*

A standing control with a pale edge, the default on product sites. Attio's is 36px, radius 10, white with a 1px line of about #d9dbde. New Material uses 34px at 14/450. Supabase scales it down to 26px with a 12px NE arrow, so long pages never stack big buttons. Use it for Log in, See more and any action under a section heading. Vercel builds the edge as a ring, `0 0 0 1px` in #ebebeb, rather than a border, which keeps it the same size as a filled neighbour.

**Seen on** New Material, Attio, Stripe Billing, Notion Calendar, Supabase Pricing, 7 sites in all. **Suits** light-precision, gradient-light; saas, agency, finance, devtool.

```css
.s-hair{display:inline-flex;align-items:center;height:36px;padding:0 12px;border:0;border-radius:10px;white-space:nowrap;
  background:var(--bg);color:var(--ink);font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 15%,transparent);transition:background-color .15s,box-shadow .15s}
.s-hair:hover{background:color-mix(in srgb,var(--ink) 4%,var(--bg));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 25%,transparent)}
.s-hair:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.secondary/ink-outline-square -->
### 2. Ink outline square

*Feeling: a car brochure.*

A 1px full-ink stroke, radius 0 to 2, no fill. Polestar's is 48px with a 16px label inset 16px, a 14px arrow 8px after it, and a width that hugs the text. It inverts to white on photography, and it is the same at every level of the site. reMarkable keeps radius 2 and drops the arrow on 40px card buttons. Blue Bottle runs it 350px wide, full column, on every secondary action.

Use it for automotive, furniture, fashion and coffee. Tight label tracking helps, around -0.02em at this size, and my first attempt looked loose beside Polestar until I tightened it. Hover with an [ink swap](#3-ink-swap). A pale grey stroke would turn this into a form field, so keep it full ink.

**Seen on** Polestar, reMarkable, Fred, Blue Bottle, Stone Island, 10 sites in all. **Suits** photo-led, warm-neutral, mono-technical, type-led; ecommerce, brand, food-drink, fashion.

```css
.s-box{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 16px;border:0;border-radius:0;white-space:nowrap;
  background:none;color:var(--ink);font:400 16px/1 var(--font-text);letter-spacing:-.02em;cursor:pointer;
  box-shadow:inset 0 0 0 1px var(--ink);transition:background-color .2s,color .2s}
.s-box:hover{background:var(--ink);color:var(--bg)}
.s-box:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.secondary/serif-label-outline -->
### 3. Serif label outline

*Feeling: a wine list.*

An outline with a serif label. Gagosian sets 34px, radius 0, 1px black, 18 to 19px serif, and only 9px of side padding, so it hugs the word like a printed tag. Russell & Stellar uses 40px at about 20 percent navy. Dishoom uses a 34px pill with 1.5px stroke and bold 15px serif. Border and text inherit the section: white on a photo, green on cream. Use it for food, galleries and hospitality, where a sans label would bring in a software tone. The label must match the page's text face, or the button looks borrowed.

**Seen on** Gagosian, Dishoom, Russell & Stellar, Michelle Kaye - Fine Arts, LEA WINERY, 6 sites in all. **Suits** warm-neutral, photo-led; food-drink, culture, portfolio, hospitality.

<!-- v:button.secondary/outline-pill -->
### 4. Outline pill

*Feeling: the primary's quieter twin.*

A pill outline the same size as its primary. Customer.io uses 48px with a 2px dark stroke and the same 16px label, so weight alone ranks the two. Decagon runs a 46px pill with a 1px accent stroke, turning white on dark sheets at 48px. Basic Agency keeps it tiny at 32px caps against huge type, where the small size is the wit. For most uses set 1px at 25 to 100 percent ink. Reserve 2px for a page that also has 2px elsewhere, and hover by filling.

**Seen on** Customer.io, Decagon, Asana, web.dev, p5.js, 10 sites in all. **Suits** light-precision, soft-pastel, type-led, bold-colour; agency, saas, ai, devtool.

<!-- v:button.secondary/tonal-fill -->
### 5. Tonal fill

*Feeling: part of the page, not on top of it.*

No border, just a faint fill. OpenAI's API pricing runs 36 to 40px pills at ink 4 percent, 14/500, with an optional 10px NE arrow, and uses this for every action except one black button. Exa sets a warm #eeebe8 at radius 4 with a long thin arrow and mid-grey text, and the warmth keeps it from reading as disabled. Anthropic uses a warm tint with a 1px darker border at 28px.

This is the calmest secondary and the one least used by generated pages. It needs no second line in the composition, which is why it sits so well beside a dark primary. Use `--ink-2` for the label on warm tints. Hover to about 8 to 12 percent.

**Seen on** Exa, International Magic, Expo, Claude, Anthropic News, 6 sites in all. **Suits** light-precision, warm-neutral; ai, agency, devtool, editorial.

```css
.s-tone{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border:0;border-radius:999px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 4%,transparent);color:var(--ink);font:500 14px/1 var(--font-text);cursor:pointer;
  transition:background-color .15s}
.s-tone:hover{background:color-mix(in srgb,var(--ink) 8%,transparent)}
.s-tone:active{background:color-mix(in srgb,var(--ink) 12%,transparent)}
.s-tone:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.secondary/ghost-on-media -->
### 6. Ghost on media

*Feeling: floating over the picture, not printed on it.*

A control over photo or video. Figure sets 46px, a 1px white border at 60 percent, radius 12 and a translucent blurred fill. SpaceX uses black at 50 percent with a 50 percent white border and 12px caps. Monark Markets sets a deep glass pill and raises fill from .48 to .72 and border from .14 to .30 on hover. DJI goes small, 32px pills with a white border at 70 percent.

The test is the brightest frame. My first ghost was white at 10 percent, which matched Hims on a dark photo and vanished over a pale sky. On unknown or bright media, use black at 30 to 50 percent, not white. VanMoof's version is a 32px outlined box with a diagonal arrow beside a plain label, which is the quietest form that still reads.

**Seen on** Hims, Figure, VanMoof, Villa Aurelia, SpaceX, 7 sites in all. **Suits** photo-led, warm-neutral, dark-precision; brand, health, ai, ecommerce.

```css
.s-glass{display:inline-flex;align-items:center;height:50px;padding:0 22px;border:0;border-radius:999px;white-space:nowrap;color:#fff;
  font:500 16px/1 var(--font-text);cursor:pointer;background:rgba(0,0,0,.32);backdrop-filter:blur(12px);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.3);transition:background-color .3s,box-shadow .3s}
.s-glass:hover{background:rgba(0,0,0,.48);box-shadow:inset 0 0 0 1px rgba(255,255,255,.5)}
.s-glass:focus-visible{outline:2px solid #fff;outline-offset:2px}
```

<!-- v:button.secondary/dark-raised-chip -->
### 7. Dark raised chip

*Feeling: one step above the ground.*

The secondary on a dark page. Raycast sets 38px, radius 8, a vertical gradient from #26272b to #17181b, and a 1px white line at 14 percent. Linear uses white at 5 percent with an inset ring at 3 percent and a 1px lower light at 4 percent. Framer uses a flat #1b1b1b. Keep the step small, +12 levels at most over the ground, and let the light primary do the work. On hover move the line, not the fill.

**Seen on** Framer, Raycast Pricing. **Suits** dark-precision; saas.

```css
.s-dark{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:38px;padding:0 16px;border:0;border-radius:8px;white-space:nowrap;
  color:var(--ink);font:500 14px/1 var(--font-text);cursor:pointer;
  background:linear-gradient(color-mix(in srgb,var(--ink) 12%,var(--bg)),color-mix(in srgb,var(--ink) 5%,var(--bg)));
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent);transition:box-shadow .2s}
.s-dark:hover{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 24%,transparent)}
.s-dark:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

<!-- v:button.secondary/white-raised-key -->
### 8. White raised key

*Feeling: a white ceramic button.*

White, on a light page, raised by a ring and a soft small shadow. CleanShot uses no border at all: `0 0 0 1px` at 16 percent and `0 2px 6px -1px` at 20 percent, on the same 48px and radius 14 as its lit primary. Buildkite sets 40px, radius 8, with a #e4e2ee border and a slight gradient to #f2f2f2. It is tactile on flat ruled pages. It is a light-page object, and it only works on a slightly tinted ground, since white on white loses the top edge. Press drops the shadow and moves 2px down, matching the primary.

**Seen on** CleanShot X, Cal.com Pricing, Buildkite. **Suits** light-precision, gradient-light; saas, devtool.

```css
.s-raise{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 20px;border:0;border-radius:14px;white-space:nowrap;
  background:#fff;color:#161618;font:550 15px/1 var(--font-text);cursor:pointer;
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 16%,transparent),0 2px 6px -1px color-mix(in srgb,var(--ink) 20%,transparent);
  transition:box-shadow .15s,translate .1s}
.s-raise:hover{box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 24%,transparent),0 2px 6px -1px color-mix(in srgb,var(--ink) 24%,transparent)}
.s-raise:active{translate:0 2px;box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 16%,transparent)}
.s-raise:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.secondary/gradient-keyline -->
### 9. Gradient keyline

*Feeling: the page's one colour, kept in a thin line.*

A ghost button whose border repeats the page's own rail. Speakeasy sets 36px, radius 6, a 2px stroke running red to orange to blue from top left to bottom right, with mid-grey mono caps. Analysts said 1.5px, and side by side it needed 2px and more saturation than I first gave it. It may be the only colour in the nav. Use it only if that gradient already exists on the page, because a gradient border with no source reads as decoration.

**Seen on** Speakeasy. **Suits** light-precision; devtool.

```css
.s-key{display:inline-flex;align-items:center;height:36px;padding:0 18px;border:2px solid transparent;border-radius:6px;white-space:nowrap;
  color:var(--ink-2);font:300 13px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.1em;text-transform:uppercase;cursor:pointer;
  background:linear-gradient(var(--bg),var(--bg)) padding-box,linear-gradient(135deg,var(--accent),var(--ink-3)) border-box}
.s-key:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.secondary/second-solid-colour -->
### 10. Second solid colour

*Feeling: a clear code: this colour buys, that colour moves.*

Two solids instead of solid plus outline. Webflow's pricing page says blue means buy and black means navigate, at 51px and radius 4, so no outlines appear anywhere. Przebiegły inverts its primary, a dark block with a lime label beside a lime block with a dark label, so the brand colour appears in both. Use it on pages crowded with outlines, or where a second action truly leads somewhere. Keep the metrics identical.

**Seen on** Figma Release Notes, Webflow Pricing, Sakara, Design Museum, Przebiegły Team. **Suits** light-precision, photo-led, expressive; saas, ecommerce, culture, health.

<!-- v:button.secondary/quiet-chip-row -->
### 11. Quiet chip row

*Feeling: a shelf of options, nothing pushed.*

A row of equal quiet chips rather than one secondary. mymind sets three 50px pills in #f6f6f8 with real 24px platform icons, and those logos supply the only saturation in view. Hugging Face runs 36px outlined community chips. Prägen Hätlen stacks three 34px cells 4px apart over a white action, forming one control block. Use real logos where you have them. Left align, with 8 to 12px gaps. Keep it to five or six chips, and wrap by whole rows.

**Seen on** mymind, Prägen Hätlen, Structure Consulting Engineers, Hugging Face Docs, Universally Speaking, 7 sites in all. **Suits** photo-led, gradient-light, render-3d, light-precision; agency, saas, brand, architecture.

<!-- v:button.secondary/drawn-shape-outline -->
### 12. Drawn shape outline

*Feeling: someone marked this by hand.*

An outline that is not a rectangle. Vitrenko Library sets a 220 by 66px oval in 1px coral, rotated about -3 degrees, around a horizontal label, like a pen circling a word. lorisbukvic uses four rounded corner brackets with no sides. A plaque can stand for a button on an illustrated site. Rotate the shape, not the label, so the text stays level. Use one such form sitewide, and only where the brand already draws.

**Seen on** Better Auth, Yuriy Vitrenko's Library, lorisbukvic.graphics, Benzo the Great Developer. **Suits** light-precision, type-led, render-3d, illustrated; portfolio, devtool, culture.

```css
.s-oval{position:relative;display:inline-grid;place-items:center;width:220px;height:66px;border:0;background:none;color:var(--ink);cursor:pointer;
  font:500 15px/1 var(--font-text);letter-spacing:.06em;text-transform:uppercase}
.s-oval::before{content:"";position:absolute;inset:0;border:1px solid var(--accent);border-radius:50%;rotate:-3deg;transition:rotate .3s}
.s-oval:hover::before{rotate:1deg}
.s-oval:focus-visible{outline:2px solid var(--accent);outline-offset:4px}
```

<!-- v:button.secondary/menu-button -->
### 13. Menu button

*Feeling: everything you need, right here.*

A secondary that opens choices in place. Docker's 44px outlined button opens a 340px popover, radius 8, with a caret and five 56px rows of real OS logos, overlapping the screenshot below. It spares a whole downloads page. Add `aria-expanded` and a chevron that rotates, close on Escape and outside click, and return focus to the button.

**Seen on** Docker. **Suits** light-precision; devtool.

<!-- v:button.secondary/closing-bar -->
### 14. Closing bar

*Feeling: the page's last word.*

A plain link scaled into the object that ends an index. Athletics sets a 1044 by 92px pill in pale lavender with a 22px label on near-black. Wolff Olins uses a 64px full-width outline pill reading as a sentence. Use it after a long grid, for View all or Load more. It works because it is the only large control on the page.

**Seen on** Wolff Olins Work, Athletics. **Suits** type-led; agency.

### Mistakes that cheapen a secondary

- **A different height from the primary.** Side by side, a 2px mismatch reads as a bug. Use an inset ring, not a border, so outlined and filled buttons match by default.
- **A saturated 2px outline.** It competes with the primary. Use 1px, or a tint.
- **Neutral grey on a warm page.** It reads as disabled. Warm the tint, as Exa does.
- **A white ghost on bright media.** Mine vanished over sky. Test on the brightest frame, and use a dark translucent fill when unsure.
- **Loose tracking in an outline.** With no fill to hold the label, letter-spacing shows. Tighten it.
- **Grey text on a hairline.** A pale edge plus a pale label reads as off. Keep the label at full ink, or `--ink-2` at the lightest.
- **An outline on hover with a fill at rest, or the reverse, with a layout shift.** Reserve the edge with an inset ring.
- **White raised key on white.** The top edge disappears. Use a tinted ground.
- **Three styles of secondary.** One per site.

## Text link

A text link is the third action, or on many strong sites the only one. It has to read as interactive without any box, and it must not break the paragraph or row it sits in.

What separates great from cheap is that a great link is designed once and carries meaning. Its underline has a set offset and thickness and is quieter than its word, or its arrow has the weight of the letters. Direction means something, and the same treatment holds sitewide. Cheap links are browser default blue with the default underline crashing through descenders, or bold coloured text with a giant arrow, in three styles on one page. The strongest move in this family is removing buttons altogether, as Medusa622, Stone Island and Nicole Heim do.

Measured: on 410 probed links, 51 percent change on hover. Of those, text colour moves on 61 percent, underline on 18 percent, a fill on 17 percent, transform on 12 percent. Duration runs 150 to 300ms, on `ease` most often. Underline 1px, offset 3 to 6px. Focus 2px outline at 3px offset, since a link has no box of its own. Disabled links should not exist: remove the `href` and render plain text, or use a button. Press can drop the label to `--ink-2`.

<!-- v:button.text-link/hairline-underline -->
### 1. Hairline underline

*Feeling: the page's own handwriting.*

Same size as the surrounding text, a 1px underline offset 3 to 4px, with no arrow and no colour. Paco Coursey uses the text colour. Fabrica Partners drops the underline to about 30 percent grey, so dense lists stay readable, which is the better default. Red Blob Games sets red text with a grey line for the same reason. Office Commun turns a client list into a sentence of quiet links. Use it for prose, lists, footers and portfolios. On hover take the line to full ink, and never change the weight, which shifts text.

**Seen on** Fabrica Partners, Paco Coursey, Motto, Aman, Ritual, 7 sites in all. **Suits** light-precision, type-led, warm-neutral, photo-led; agency, finance, portfolio, hospitality.

```css
.l-u{color:var(--ink);text-decoration:underline 1px;text-underline-offset:3px;
  text-decoration-color:color-mix(in srgb,var(--ink) 30%,transparent);transition:text-decoration-color .15s}
.l-u:hover{text-decoration-color:currentColor}
.l-u:active{color:var(--ink-2)}
.l-u:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:2px}
```

<!-- v:button.text-link/dotted-term-underline -->
### 2. Dotted term underline

*Feeling: a footnote with manners.*

Two grades of link that say different things. Cognition uses dotted for a single term and solid for a key sentence, both in black. Warp uses a 1px dotted line offset 3px on feature names in pricing bullets to mark a hover definition, and terms with no tooltip stay plain, so the underline carries meaning. Neon sets 16px grey labels with a dotted line about 6px below as a quiet stand-in for secondary buttons. Use it in pricing, docs and technical copy. Give dotted terms a real tooltip, reachable by keyboard.

**Seen on** Warp Pricing, Neon Docs, Cognition. **Suits** light-precision, type-led; devtool, ai.

```css
.l-dot{color:var(--ink-2);text-decoration:underline dotted 1px;text-underline-offset:6px;
  text-decoration-color:color-mix(in srgb,var(--ink) 40%,transparent);transition:color .15s}
.l-dot:hover{color:var(--ink)}
.l-dot:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/accent-chevron-link -->
### 3. Accent chevron link

*Feeling: the page's helpful pointer.*

Accent text with a small chevron and no underline. Stripe's sets 16px accent text with a 10px chevron that grows a stem into an arrow on hover and nudges right. It sits at the foot of a card, aligned across the row. Apple uses 17px with a small arrow glyph, the only blue on a neutral panel. Vitsoe sets 17px bold blue with a thin 18px arrow, and BCR Law pins theirs 56px from the card bottom so four line up however long the copy runs. It works only when accent is the interface's single interactive colour.

Weight has to match the words: my first version at weight 400 looked thin beside Stripe's. Use a 9 to 10px chevron with a 1.8 to 2px stroke and a 5 to 6px gap.

**Seen on** Stripe Billing, Stripe Blog, Apple Intelligence, Brilliant, Vitsoe, 9 sites in all. **Suits** light-precision, warm-neutral, bold-colour, render-3d; editorial, devtool, finance, ai.

```html
<a class="l-ch" href="#">Read more <svg class="l-arr" viewBox="0 0 10 10"><path class="stem" d="M0 5h7"/><path d="M3.5 1.5 7 5 3.5 8.5"/></svg></a>
```

```css
.l-ch{display:inline-flex;align-items:center;gap:5px;color:var(--accent);font:500 15px/1.3 var(--font-text);text-decoration:none}
.l-arr{width:9px;height:9px;overflow:visible;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;
  transition:translate .24s cubic-bezier(.25,1,.5,1)}
.l-arr .stem{opacity:0;transform:scaleX(0);transform-origin:left;transition:transform .24s cubic-bezier(.25,1,.5,1),opacity .12s}
.l-ch:hover .l-arr{translate:3px 0}
.l-ch:hover .stem{opacity:1;transform:none}
.l-ch:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/ink-arrow-link -->
### 4. Ink arrow link

*Feeling: a plain sign, pointing.*

An ink label with an arrow and no underline. Polestar sets 16px, an 8px gap and a 14px arrow directly under offer text. White Cube leads with a 16px arrow, 14/500 label and 12px gap. Bakstad gives direction meaning: a down arrow scrolls, a right arrow changes page, and a diagonal one leaves the site. Aniket marks external links with only a small pink NE arrow after the name. Use the direction rule anywhere. Keep the arrow thin and centred on the x-height, not the line box.

**Seen on** White Cube, Polestar, Bakstad Construction, Aniket, The Future Label, 6 sites in all. **Suits** photo-led, light-precision, type-led; portfolio, culture, brand, architecture.

<!-- v:button.text-link/underline-detached-arrow -->
### 5. Underline with detached arrow

*Feeling: considered, slightly formal.*

A label underlined, and an arrow standing past the line. Medusa622 sets 16px in a deep plum, a pale 1px underline under the label only and the arrow outside it, and this replaces every button on the page, nav booking included. Seed does the same at 16px in white on photography beside a pill. Set the underline paler than the text. Mine started at full colour and looked heavier than the real one. Suits beauty, hospitality, local business and premium consumer.

**Seen on** Medusa622, Seed, Revena. **Suits** photo-led, bold-colour; local-business, health, saas.

```html
<a class="l-da" href="#"><span>See the menu</span> <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M1 7h12M8 2l5 5-5 5"/></svg></a>
```

```css
.l-da{display:inline-flex;align-items:center;gap:6px;color:var(--accent);font:400 16px/1.3 var(--font-text);text-decoration:none}
.l-da span{text-decoration:underline 1px;text-underline-offset:4px;text-decoration-color:color-mix(in srgb,currentColor 35%,transparent);transition:text-decoration-color .2s}
.l-da svg{transition:translate .2s}
.l-da:hover span{text-decoration-color:currentColor}
.l-da:hover svg{translate:3px 0}
.l-da:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/ring-arrow-link -->
### 6. Ring arrow link

*Feeling: a small round handle on the sentence.*

A label beside a circled arrow. Meta AI sets a 32px ring with a 1px grey border, a 12px blue chevron, an 8px gap and a 14px bold label, and on dark cards the ring goes to white at 30 percent. Polar uses a 40px #181818 disc with a 16px gap for customer stories. Boston Dynamics places a 48px circle behind the first letters of the label, with timing that suggests it grows on hover. Fora sets a 24px circle one tone darker than its cell. It sits between link and button. Use it for one kind of destination, and let the chip recur.

**Seen on** Meta AI, Polar, Boston Dynamics, Fora. **Suits** light-precision, dark-precision, photo-led, bold-colour; ai, saas, brand, agency.

```css
.l-ring{display:inline-flex;align-items:center;gap:8px;color:var(--accent);font:700 14px/1 var(--font-text);text-decoration:none}
.l-ring i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 25%,transparent);transition:background-color .15s,color .15s,box-shadow .15s}
.l-ring:hover i{background:var(--accent);color:var(--on-accent,#fff);box-shadow:none}
.l-ring:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/mono-caps-underline -->
### 7. Mono caps underline

*Feeling: a label on a technical drawing.*

Uppercase mono, tracked, with a rule at exact text width. Stone Island uses 14px caps with a 1px rule about 3px below, as its main call to action, white on photos and black on paper. Speakeasy sets the same at 0.1em tracking at the right end of a heading row. X8 Eyewear makes a 13px QUICK ADD the quietest item in the panel, and the only purchase action. Use it for fashion and technical sites. Keep labels under four words.

**Seen on** Speakeasy, Stone Island, La Table de Joakim, X8 Eyewear, Patrick Heintzmann. **Suits** mono-technical, photo-led, light-precision; fashion, devtool, food-drink, portfolio.

```css
.l-mc{color:var(--ink);font:400 13px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.1em;text-transform:uppercase;
  text-decoration:underline 1px;text-underline-offset:4px;transition:color .2s}
.l-mc:hover{color:var(--accent)}
.l-mc:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/serif-voice-link -->
### 8. Serif voice link

*Feeling: the editor speaking.*

The link is set in the page's editorial voice. Prototype uses a 5px solid triangle, an 8px gap and a 20px italic with a 1px rule under both glyph and text, and no button shape exists anywhere on the site. Work & Co closes sentences with a red 20px serif underlined 3px below the baseline, and varies the verb by content. Gagosian closes sections with a bare 24px bold condensed serif line. TR Studio leaves about 170px of empty ground around a 24px line, so isolation alone marks it. Use it for agencies, galleries and culture, where strong type carries the page.

**Seen on** Prototype, Work & Co, Gagosian, TR Studio, Heart & Soil, 6 sites in all. **Suits** photo-led, warm-neutral, light-precision, bold-colour; agency, culture, architecture, local-business.

```css
.l-sv{display:inline-flex;align-items:center;gap:8px;padding-bottom:2px;border-bottom:1px solid currentColor;color:var(--ink);
  font:italic 400 20px/1.2 var(--font-display);text-decoration:none}
.l-sv::before{content:"";border-left:6px solid currentColor;border-block:4px solid transparent;transition:translate .2s}
.l-sv:hover::before{translate:3px 0}
.l-sv:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/ruled-cell-link -->
### 9. Ruled cell link

*Feeling: a timetable.*

A link that owns a full cell. Polestar sets three equal 384px cells with a 30px label left, a 24px arrow flush right and a 1px rule beneath, replacing a card row for secondary destinations. Payload makes a button fill its 328 by 70px grid cell, with hairlines above and below and a small NE arrow far right. Daily replaces body pills with a small square bullet and a thin arrow pushed across a 320px row. Tight tracking matters at 30px, around -0.03em. Suits brands with strong photography and blueprint-like developer sites. Hover moves only the arrow.

**Seen on** Polestar, Payload, CSDG Development Group, Daily, Dogstudio. **Suits** photo-led, dark-precision, light-precision, mono-technical; devtool, brand, architecture, agency.

```css
.l-cells{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:32px}
.l-cell{display:flex;align-items:flex-end;justify-content:space-between;height:72px;padding-bottom:16px;border-bottom:1px solid var(--ink);
  color:var(--ink);font:400 24px/1 var(--font-text);letter-spacing:-.03em;text-decoration:none}
.l-cell svg{transition:translate .2s}
.l-cell:hover svg{translate:4px 0}
.l-cell:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/marker-block-link -->
### 10. Marker block link

*Feeling: a stroke of highlighter.*

The label sits on a solid rectangle exactly the text height, with no radius. Patricia Ordoñez sets 16px tracked caps on peach, and repeats the peach in 28px square icon chips. Utopia Orchestra inverts it to black on white in 12px. Set `line-height:1` and 0 to 2px side padding so that it hugs. It suits portfolios and culture sites, and one per view is plenty.

**Seen on** Patricia Ordoñez, Utopia Orchestra. **Suits** soft-pastel, type-led; portfolio, culture.

```css
.l-mk{padding:0 2px;background:color-mix(in srgb,var(--accent) 28%,var(--bg));color:var(--ink);
  font:500 16px/1 var(--font-text);letter-spacing:.08em;text-transform:uppercase;text-decoration:none}
.l-mk:hover{background:var(--accent);color:var(--bg)}
.l-mk:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.text-link/glyph-mark-link -->
### 11. Glyph mark link

*Feeling: a tiny habit that becomes a signature.*

A plain word with one owned mark. 2819 Church sets 12px caps inside red parentheses. Studio Unlmtd ends every link in a solid dot, 9px after a 16px label and 14px after a 26px one, in nav, footer and sections. Pick one mark and hold it everywhere. Use real text, so a screen reader hears the word.

**Seen on** STUDIO UNLMTD, 2819 Church. **Suits** type-led; agency, nonprofit.

<!-- v:button.text-link/section-exit-links -->
### 12. Section exit links

*Feeling: every room has the same door.*

A consistent way out of each section. Loops closes each demo with a grey Learn label, a row of 32px hairline pills in 14px grey, then More with an arrow. Linear closes each panel with a grey Features label at the left rail, then two columns of 15px links, each ending in a small plus, with a hairline between. The value is in the repetition: it gives depth a place to live without adding a section. Hold the same position every time.

**Seen on** Loops, Linear. **Suits** warm-neutral, dark-precision; saas.

```html
<nav class="l-ex">Learn <a href="#">Webhooks</a><a href="#">Imports</a><a href="#">Exports</a><a class="more" href="#">More →</a></nav>
```

```css
.l-ex{display:flex;flex-wrap:wrap;align-items:center;gap:6px;color:var(--ink-3);font:400 14px/1 var(--font-text)}
.l-ex a{display:inline-flex;align-items:center;height:32px;padding:0 12px;border-radius:999px;color:var(--ink-2);text-decoration:none;
  box-shadow:inset 0 0 0 1px var(--line);transition:color .15s,box-shadow .15s}
.l-ex a:hover{color:var(--ink);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 25%,transparent)}
.l-ex a.more{box-shadow:none;padding:0 0 0 6px}
.l-ex a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.text-link/bare-label-link -->
### 13. Bare label link

*Feeling: confident to the point of risk.*

Text alone, with no underline, arrow or colour. Nicole Heim sets 15/500 at the left margin under each statement, as the site's only call to action. It works only with strong hierarchy around it, since nothing signals interactivity, so most uses should take a hairline underline instead. Add a hover change and a focus ring, and keep it out of paragraphs, where nobody will find it.

**Seen on** Nicole Heim Studio, Yves Tumor - Safe In The Hands of Love, YLEM. **Suits** photo-led, expressive, render-3d; agency, culture, fashion.

### Mistakes that cheapen a text link

- **The default underline.** At the browser's offset, the line cuts through descenders. Always set `text-underline-offset` and `text-decoration-thickness`.
- **Underline as loud as the word.** Mine read heavier than the real one until I dropped the line to about 35 percent. The word leads and the line follows.
- **Colour alone.** A link in a paragraph that differs only by hue fails anyone who cannot see that hue. Keep an underline in body copy.
- **Arrow too heavy or too large.** Match the stroke to the stem. A bold arrow on a regular label is a different object.
- **Weight change on hover.** It reflows the line. Change colour or the underline instead.
- **Three link styles.** One for the site, with one quieter grade at most.
- **No hover at all.** About half of probed links do nothing. A link in a list needs at least a colour step.
- **`text-decoration:none` with no replacement.** Then it is just text.
- **Links that look like buttons in a row of real buttons,** or the reverse. A link goes somewhere and a button does something.

## Icon button

An icon button is a control with no words, so its first job is to be understood, and its second is not to be noticed until needed. It holds toolbars, carousels and media, and it floats over pages as helpers.

What separates great from cheap is optical care and restraint. In great icon buttons, the icon is one consistent set at one stroke, sized to about 0.55 of the box, and centred optically: a play triangle sits a pixel right of centre, and an arrow sits slightly forward. The container often does not appear until hover. Cheap ones are tinted circles around mixed icon sets, or a stock chat bubble in the corner that covers the content. Cheap also means unlabelled: an icon button with no accessible name is invisible to a screen reader.

Measured on 479 icon-only controls across 83 sites: height 32 (26 to 36), most often 32, 28, 36 or 24. Icon 16px, then 20, 14 and 24, about 0.57 of the height. 67 percent have no fill at rest and 78 percent no border. Circles 29 percent, near-square 33 percent. Transition none 36 percent, 150ms 22 percent, 200ms 16 percent, 100ms 11 percent. 80 percent carry an `aria-label`. Give every one a name, a 44px touch target, a hover fill of about 6 percent ink, a press at about 10 percent, a 2px focus ring at 1 to 2px offset, and dim to 30 to 40 percent when disabled.

<!-- v:button.icon-button/ghost-toolbar-icon -->
### 1. Ghost toolbar icon

*Feeling: tools on a bench, ready when reached for.*

The icon button of app UI and the most common in the probe. A square, 28 to 36px, radius 6 to 8, nothing at rest. Hover adds a 6 percent fill and takes the icon from `--ink-2` to full ink. A selected state holds the fill at about 9 percent, with `aria-pressed`. Linear, Attio, Spline and Vercel's Geist all work this way. Group them in a bar with a hairline, separated by a 16px vertical rule, and set 100 to 150ms transitions, or none, because these are pressed all day.

**Seen on** Linear, Attio, Spline, Cal.com, Vercel Pricing, 10 sites in all. **Suits** light-precision, dark-precision; saas, devtool.

```css
.i-ib{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:6px;background:none;color:var(--ink-2);cursor:pointer;
  transition:background-color .1s,color .1s}
.i-ib:hover{background:color-mix(in srgb,var(--ink) 6%,transparent);color:var(--ink)}
.i-ib:active{background:color-mix(in srgb,var(--ink) 10%,transparent)}
.i-ib[aria-pressed=true]{background:color-mix(in srgb,var(--ink) 9%,transparent);color:var(--ink)}
.i-ib:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.i-ib:disabled{color:color-mix(in srgb,var(--ink) 30%,var(--bg));background:none;cursor:not-allowed}
```

<!-- v:button.icon-button/carousel-arrow-pair -->
### 2. Carousel arrow pair

*Feeling: pagination in a printed book.*

Previous and next on the heading row. The Philadelphia Orchestra sets 48px circles with a 2px stroke, next in black and a disabled previous at 40 percent, and the same circled arrow returns at 24px in text links. Michelle Kaye sets two 42px hairline circles with a 01 / 03 counter between them. Ro puts a 72 by 32 grey pill holding a 4px progress bar before two 32px arrows. Keep the arrow's stroke equal to the ring's, which is what my first attempt lacked.

**Seen on** The Philadelphia Orchestra, Ro, Michelle Kaye - Fine Arts, MVRDV, LaCrapule Studio. **Suits** photo-led, bold-colour, warm-neutral; culture, health, portfolio, architecture.

```css
.i-car{display:flex;gap:8px}
.i-cb{display:grid;place-items:center;width:48px;height:48px;border:0;border-radius:50%;background:none;color:var(--ink);cursor:pointer;
  box-shadow:inset 0 0 0 2px currentColor;transition:background-color .15s,color .15s,box-shadow .15s}
.i-cb svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.i-cb:hover{background:var(--ink);color:var(--bg);box-shadow:inset 0 0 0 2px var(--ink)}
.i-cb:disabled{opacity:.4;background:none;color:var(--ink);box-shadow:inset 0 0 0 2px currentColor;cursor:default}
.i-cb:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.icon-button/media-control-chip -->
### 3. Media control chip

*Feeling: the film knows you are there.*

A control on looping media. Apple's is a 36px circle in translucent grey, two white bars, and a 2px ring drawing playback progress around the edge, on every clip. Monark sets a 40px pill inset 24px at bottom left, with a 28px white play disc, 14px label and grey runtime, so autoplay stays silent and the chip offers sound. Every autoplaying clip needs a pause, which is an accessibility requirement as well as a courtesy. Use translucent dark, never white, so it survives any frame.

**Seen on** Apple Vision Pro, Monark Markets, Sam Peitz, Delassus. **Suits** photo-led, dark-precision, mono-technical, illustrated; brand, finance, portfolio, food-drink.

```html
<button class="i-mc" aria-label="Pause"><svg viewBox="0 0 36 36" fill="none" stroke="#fff" stroke-width="2"><circle cx="18" cy="18" r="17" pathLength="100" stroke-dasharray="100" stroke-dashoffset="28"/></svg><b></b></button>
```

```css
.i-mc{position:relative;display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:50%;
  background:rgba(66,66,69,.72);color:#fff;cursor:pointer;backdrop-filter:blur(8px)}
.i-mc svg{position:absolute;inset:0;rotate:-90deg}
.i-mc b{width:10px;height:12px;border-inline:3px solid currentColor}
.i-mc:focus-visible{outline:2px solid #fff;outline-offset:2px}
```

<!-- v:button.icon-button/tick-pager -->
### 4. Tick pager

*Feeling: a surveyor's scale.*

Greylock uses six 8px dark squares at 32px pitch, bottom right of the slide. The active tick stretches to a 30px bar filling with accent over a pale track as autoplay progress. It replaces the usual dots with something the site owns, and shows time as well as place. Give each tick a 24px hit area and `aria-current`, and pause on hover.

**Seen on** Greylock. **Suits** light-precision; finance.

```css
.i-ticks{display:flex;align-items:center;gap:24px}
.i-ticks button{position:relative;width:8px;height:8px;padding:0;border:0;background:var(--ink);cursor:pointer}
.i-ticks button::after{content:"";position:absolute;inset:-8px}
.i-ticks button[aria-current]{width:30px;background:color-mix(in srgb,var(--ink) 18%,var(--bg))}
.i-ticks button[aria-current]::before{content:"";position:absolute;inset:0;background:var(--accent);transform-origin:left;
  animation:i-tick 6s linear}
@keyframes i-tick{from{transform:scaleX(0)}}
```

<!-- v:button.icon-button/floating-assistant -->
### 5. Floating assistant

*Feeling: a colleague at the end of the room.*

A persistent helper, shaped as the product. ElevenLabs uses a white 156 by 56 pill with a 36px glossy orb and a 16px Voice chat label, which offers the demo instead of a support bubble. Kata.ai does the same at 126 by 44. CockroachDB docks a 72 by 80 brand tile with a logomark over Ask AI. Accel sets a 72px search disc as its only persistent control. Definitiv Digital uses a 56px portrait of the founder with a 4px white ring. Avoid the stock round chat bubble. Keep a ring on dark bands so it never disappears, and move it clear of cookie banners and phone toolbars.

**Seen on** ElevenLabs Pricing, Kata.ai, Accel, Queen's University Library, Definitiv Digital, 8 sites in all. **Suits** warm-neutral, gradient-light, light-precision, bold-colour; ai, finance, education, saas.

```css
.i-fa{position:fixed;right:24px;bottom:24px;display:inline-flex;align-items:center;gap:8px;height:56px;padding:0 20px 0 10px;border:0;border-radius:999px;
  background:var(--bg);color:var(--ink);font:500 16px/1 var(--font-text);cursor:pointer;
  box-shadow:0 0 0 1px var(--line),0 8px 24px color-mix(in srgb,var(--ink) 8%,transparent)}
.i-fa i{width:36px;height:36px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0 6%,var(--accent) 45%,color-mix(in oklab,var(--accent) 60%,#000))}
.i-fa:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.icon-button/scroll-capsule -->
### 6. Scroll capsule

*Feeling: an instrument on the hull.*

A tall thin cue. Foster + Partners sets a 40 by 80 translucent capsule at the right edge, mid-height, with a long thin down arrow. Boom uses a 32 by 46 outlined capsule whose arrow draws downward in a loop, 80px under the subline. The tall ratio keeps it from reading as a badge. Stop the loop under reduced motion, and make it a real link to the next section.

**Seen on** Foster + Partners, Boom. **Suits** photo-led; architecture, brand.

<!-- v:button.icon-button/arrow-disc-on-media -->
### 7. Arrow disc on media

*Feeling: one exact mark on a large picture.*

One solid shape on an image as its only control. Per Appelgren places a 64px white disc with a thin 16px NE arrow dead centre of the active picture. Concrete sets a 60px cream tile with each corner stepped in about 10px, which makes a plus silhouette, and a thin arrow, beside a city name with a dashed underline. The picture stays uncropped by any label. Scale the icon on hover, not the shape, and use the same stepped form for the site's mark if you can.

**Seen on** Per Appelgren, Concrete, La Dolfina Jumping, Driftime Impact Report 2022. **Suits** photo-led, type-led; portfolio, local-business, fashion, agency.

```css
.i-not{--s:10px;display:grid;place-items:center;width:60px;height:60px;border:0;background:var(--bg);color:var(--ink);cursor:pointer;
  clip-path:polygon(var(--s) 0,calc(100% - var(--s)) 0,calc(100% - var(--s)) var(--s),100% var(--s),100% calc(100% - var(--s)),calc(100% - var(--s)) calc(100% - var(--s)),calc(100% - var(--s)) 100%,var(--s) 100%,var(--s) calc(100% - var(--s)),0 calc(100% - var(--s)),0 var(--s),var(--s) var(--s))}
.i-not svg{width:20px;height:20px;transition:translate .2s}
.i-not:hover svg{translate:2px 0}
.i-not:focus-visible{outline:2px solid var(--ink);outline-offset:-6px}
```

<!-- v:button.icon-button/seam-straddling-disc -->
### 8. Seam straddling disc

*Feeling: a hinge between two rooms.*

Fujifilm sets a 64px black circle with a thin up chevron exactly on the seam between the last photo and the footer. It marks the end of the content and gives the footer a clear hinge. Use one per page, for back to top or the next chapter.

**Seen on** Fujifilm X. **Suits** photo-led; brand.

<!-- v:button.icon-button/square-icon-tile -->
### 9. Square icon tile

*Feeling: a keycap set into the page.*

A small square with a custom icon. Spring/Summer sets a 27px cream square at radius 3 with a hand-drawn 14px icon, paired with a 12px mono label, in place of all standard buttons. IRONHILL fixes a 48px khaki tile with two short lines as its menu. Aniket sets a 16px black X inline after a label, reading as a keycap rather than a social icon. Draw the icons yourself where you can, because this variant depends on them being yours.

**Seen on** Aniket, Mirim, IRONHILL, Spring/Summer. **Suits** light-precision, warm-neutral, illustrated, bold-colour; agency, portfolio, food-drink.

<!-- v:button.icon-button/social-circle-row -->
### 10. Social circle row

*Feeling: present, not promoted.*

a16z runs six 40px circles of a warm dark tone at about 80 percent, with white 14px glyphs and 8px gaps. They stay readable on any frame without competing with film behind them. Give each a real name, and do not exceed six.

**Seen on** a16z. **Suits** expressive; finance.

<!-- v:button.icon-button/desktop-icon-nav -->
### 11. Desktop icon nav

*Feeling: this site is a computer.*

Area Technology replaces the nav with 70px flat icons of a folder and a circled i at bottom right, with 11px caps labels. It suits spatial studios where the interface is the idea. It is a costume everywhere else, and you still need a real nav for keyboards and phones.

**Seen on** Area Technology. **Suits** render-3d; agency.

### Mistakes that cheapen an icon button

- **No accessible name.** One in five probed icon buttons has no `aria-label`. An icon alone is silent to a screen reader.
- **Tinted circle at rest.** A soft circle in a pastel fill is the fingerprint of a template. Keep the container off until hover.
- **Mixed icon sets.** Different stroke weights side by side look assembled. One set, one stroke.
- **Thin arrows in a thick ring.** My first carousel arrow was 1.5px in a 2px ring. Match them.
- **Mathematically centred glyphs.** A play triangle looks left-heavy when centred by its box. Nudge it 1px towards its point.
- **A 24px target on a phone.** Extend the hit area with a pseudo-element to 44px, without changing the look.
- **Stock chat bubble.** It says nothing about you and it covers content. Shape it as the product, or leave it out.
- **Clip-path and shadow together.** Clipped shapes lose shadow and outline, so plan an inset focus ring.
- **White media controls.** They vanish on bright frames. Use translucent dark.

## CTA pair

A pair offers two routes and has to rank them in one glance. The first is the commitment and the second is for people who are not ready, usually to learn more or to talk to someone.

What separates great from cheap is that a great pair is one object. Both buttons share a height, a radius, a type size and a baseline, so only the fill differs. Their gap is exact, usually 8 to 16px. Their labels are short, and the second route is honestly different from the first. Cheap pairs have mismatched heights from a border, a vivid outline competing with the fill, two near-identical offers, or arrows on both. The freshest pattern in the data is a pair whose second action is not a link at all, such as a command to copy.

Measured: gap 16px most often, then 12, 8 and 10, median 15. Heights 32 to 56. Pairs often repeat at a smaller size in the nav, at 26 to 36px where the hero is 38 to 50. Hover, press and focus follow each button's own recipe, and hover should never move one button relative to the other. On phones, stack full width with the primary on top, or keep the pair inline if both fit at 16px.

<!-- v:button.cta-pair/filled-plus-outline-pill -->
### 1. Filled plus outline pills

*Feeling: familiar, balanced, trustworthy.*

The most common pair. Apple's Vision Pro page sets two 44px pills at 17/400, radius 980, outline first and fill second, 12px apart, and repeats them at about 24px in a sticky bar. Devin Desktop sets 42px with a #ddd outline. Spline uses no accent at all, #eee fill and a white ghost at 25 percent. Use an inset ring so both match, 8 to 16px gap, labels of two words. It is safe, so it needs either a strong page or one owned detail elsewhere.

**Seen on** Devin Desktop, Apple Vision Pro, Framework, Apple, Meta AI, 21 sites in all. **Suits** light-precision, photo-led, warm-neutral, dark-precision; devtool, ai, saas, brand.

```css
.p-op{display:flex;flex-wrap:wrap;gap:12px}
.p-op a{display:inline-flex;align-items:center;height:44px;padding:0 21px;border-radius:999px;white-space:nowrap;
  font:400 17px/1 var(--font-text);text-decoration:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);transition:background-color .15s,color .15s}
.p-op a:first-child{background:var(--ink);color:var(--bg);box-shadow:none}
.p-op a:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg));color:var(--bg)}
.p-op a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.cta-pair/filled-plus-outline-rect -->
### 2. Filled plus outline rectangles

*Feeling: a serious product.*

Rectangular, radius 2 to 8, solid plus line. Notion Calendar sets 36px, radius 8, 16 to 18px at 500, 12px gap, #e3e2e0 line, with no shadow. Modern Treasury uses 40px at radius 2, a full-ink line, and an arrow on both. Jasper goes to radius 0 at 48px and 18/500. Keep the line pale on product pages and full ink on print-like ones. The main failure is a 1px CSS border adding 2px of height, so use an inset ring.

**Seen on** Modern Treasury, Notion Calendar, Jasper, Cognition, Render, 19 sites in all. **Suits** light-precision, gradient-light, bold-colour, warm-neutral; saas, finance, devtool, ai.

```css
.p-or{display:flex;flex-wrap:wrap;gap:12px}
.p-or a{display:inline-flex;align-items:center;height:36px;padding:0 14px;border-radius:8px;white-space:nowrap;
  background:var(--bg);color:var(--ink);font:500 16px/1 var(--font-text);text-decoration:none;
  box-shadow:inset 0 0 0 1px var(--line);transition:background-color .15s}
.p-or a:first-child{background:var(--ink);color:var(--bg);box-shadow:none}
.p-or a:hover{background:color-mix(in srgb,var(--ink) 4%,var(--bg))}
.p-or a:first-child:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.p-or a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.cta-pair/solid-plus-tonal -->
### 3. Solid plus tonal

*Feeling: calm, considered, no second line in the composition.*

The primary is solid, and the secondary is a pale tint with no border. Expo sets 40px pills, #000 and #f0f0f3, 14/600, an 8px gap and a 20px arrow on the primary only. Anthropic's Claude page uses #141412 beside a stone #e7e7dd. Loom pairs its blue with a lighter step of the same hue. Casper replaces the outline with a mid-tone of the same navy. This is the most underused good pair, because a tint adds no new edge. It suits almost any register. Use a warm tint on warm pages.

**Seen on** Expo, Claude, Lithic, Rivian, Loom, 10 sites in all. **Suits** light-precision, bold-colour, warm-neutral, photo-led; devtool, culture, ai, finance.

```css
.p-st{display:flex;flex-wrap:wrap;gap:8px}
.p-st a{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:999px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 6%,var(--bg));color:var(--ink);font:600 14px/1 var(--font-text);text-decoration:none;transition:background-color .15s}
.p-st a:first-child{background:var(--ink);color:var(--bg)}
.p-st a:hover{background:color-mix(in srgb,var(--ink) 10%,var(--bg))}
.p-st a:first-child:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.p-st a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.cta-pair/solid-plus-bare-link -->
### 4. Solid plus bare link

*Feeling: one clear thing, and a quiet alternative.*

One container only. Apple's MacBook page stacks a 44px pill over a same-size 17px blue link with a chevron. Stripe Climate sets a 33px green pill beside bare green text with the same chevron, 16px apart. Analogue stacks a 41px black pill over bare 17.6px text, 16px below. Resend sets a dark 48px control beside grey text with about 36px of space. Keep the link the same size and weight as the button label, which is what makes them read as one unit.

This is the most restrained pair and the safest default on brand pages. One filled shape per screen gives the eye one target.

**Seen on** Apple MacBook Pro, Stripe Climate, Stripe Connect, Analogue, Resend, 9 sites in all. **Suits** light-precision, dark-precision, gradient-light, render-3d; finance, brand, ecommerce, devtool.

```css
.p-sl{display:flex;flex-wrap:wrap;align-items:center;gap:16px 28px}
.p-sl .a{display:inline-flex;align-items:center;height:44px;padding:0 21px;border-radius:999px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,#fff);font:400 17px/1 var(--font-text);text-decoration:none;transition:background-color .15s}
.p-sl .a:hover{background:color-mix(in oklab,var(--accent) 88%,#000)}
.p-sl .l{display:inline-flex;align-items:center;gap:6px;color:var(--accent);font:400 17px/1 var(--font-text);text-decoration:none}
.p-sl .l:hover{text-decoration:underline 1px;text-underline-offset:4px}
.p-sl a:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
```

<!-- v:button.cta-pair/top-lit-twin -->
### 5. Top-lit twin

*Feeling: two pieces from one mould.*

A lit primary beside a white raised twin with identical metrics. CleanShot sets 48px, radius 14, 15/550, a blue lit fill and a white key with a 1px ring and `0 2px 6px -1px` shadow, 16px apart, plus a large outlined play icon. Cal.com uses 36px, radius 12, and an 8px gap. Make sits at 47px with a 1px lighter edge. This pair lives on exact matching, so share every value except fill. Take the recipes from [lit colour](#11-lit-colour-button) or [top-lit chip](#9-top-lit-chip) and [white raised key](#8-white-raised-key). Use a slightly tinted ground, so the white has an edge.

**Seen on** Cal.com Pricing, CleanShot X, Make. **Suits** gradient-light, light-precision; saas.

<!-- v:button.cta-pair/neutral-pair-on-dark -->
### 6. Neutral pair on dark

*Feeling: no colour needed.*

On near-black, a light fill plus a charcoal fill one step above the ground. Framer sets 34px, radius 8, 14/500, white then #1b1b1b with a download icon, 10px gap, with a third action far right as plain text and an arrow. Linear does it in 44px pills with its off-white and a 5 percent white ghost. Sentry and Discord keep a bright partner. The charcoal must stay a real step, +12 to +27 levels on near-black, or it reads as disabled.

**Seen on** Framer, Discord, Sentry. **Suits** dark-precision, bold-colour, illustrated; saas, other, devtool.

```css
.p-nd{display:flex;flex-wrap:wrap;gap:10px}
.p-nd a{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:8px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 11%,var(--bg));color:var(--ink);font:500 14px/1 var(--font-text);text-decoration:none;transition:background-color .15s}
.p-nd a:first-child{background:var(--ink);color:var(--bg)}
.p-nd a:hover{background:color-mix(in srgb,var(--ink) 16%,var(--bg))}
.p-nd a:first-child:hover{background:color-mix(in srgb,var(--ink) 88%,var(--bg))}
.p-nd a:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

<!-- v:button.cta-pair/equal-twin-block -->
### 7. Equal twin block

*Feeling: a fair choice.*

Two buttons of exactly equal width and weight, for routes that are true peers. Cal.com sets two 312 by 64px sign-in buttons, ink and white, with a line of plain text beneath for the third way in. Soundsensing puts 52px white and near-black rectangles over a photo. Radix aligns two 238px buttons to the code card above. Only use it when the choice is real. If you want one route taken, rank them.

**Seen on** Soundsensing, Cal.com, Radix UI, Kata.ai. **Suits** photo-led, light-precision, soft-pastel, gradient-light; saas, devtool, ai.

<!-- v:button.cta-pair/arrow-tile-pair -->
### 8. Arrow tile pair

*Feeling: an arrow becomes a brand object.*

An arrow shape takes the second action. Lyra sets a 50px blue button at radius 20, then a plain label beside a 50px white tile at radius 16 holding an arrow, and the tile recurs across the site as a link device. Baseten sets two 212 by 36 rectangles, radius 0, 12px apart, each with a label left and a 6px solid triangle pinned far right. 360Rides uses a pale coral pill with a 20px solid coral arrow disc. This builds a signature cheaply. Keep the arrow form consistent across every link.

**Seen on** Baseten, Lyra, 360Rides, Noxus. **Suits** light-precision, photo-led, soft-pastel, gradient-light; ai, health, other.

```css
.p-at{display:flex;flex-wrap:wrap;gap:12px}
.p-at a{display:flex;align-items:center;justify-content:space-between;width:212px;height:36px;padding:0 12px;
  background:var(--bg);color:var(--ink);font:400 14px/1 var(--font-text);text-decoration:none;box-shadow:inset 0 0 0 1px var(--line);transition:background-color .4s cubic-bezier(.75,0,.1,.99),color .4s cubic-bezier(.75,0,.1,.99)}
.p-at a:first-child{background:var(--ink);color:var(--bg);box-shadow:none}
.p-at a::after{content:"";border-left:6px solid currentColor;border-block:4px solid transparent;transition:translate .4s cubic-bezier(.75,0,.1,.99)}
.p-at a:hover::after{translate:4px 0}
.p-at a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.cta-pair/install-command-pair -->
### 9. Install command pair

*Feeling: start now, right here.*

For developer tools, a real install command beside the button at the same height. React Email sets a 44px white button at radius 12 beside a dark chip with a 15 percent white line, 13px mono and a clipboard icon, 16px apart. Nx adds a $ sign. Inngest leads with the command in a 2px white outline, with the coral button second. Kiro merges a dark code well into the button itself, inset 4px. The command is a true second action and often the better one. Clicking copies, and the icon changes to a tick for about 1.5 seconds. It must work if pasted.

**Seen on** Inngest, Nx, React Email, Kiro, Storybook, 6 sites in all. **Suits** dark-precision, bold-colour; devtool, ai.

```html
<div class="p-cmd"><a class="a" href="#">Get started</a>
<button class="c">npm create thing@latest <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="2.5" width="9" height="11" rx="1.5"/><path d="M5.5 2.5v-1h4v1"/></svg></button></div>
```

```css
.p-cmd{display:flex;flex-wrap:wrap;gap:16px}
.p-cmd .a{display:inline-flex;align-items:center;height:44px;padding:0 16px;border-radius:12px;white-space:nowrap;
  background:var(--ink);color:var(--bg);font:500 16px/1 var(--font-text);text-decoration:none}
.p-cmd .c{display:inline-flex;align-items:center;gap:12px;height:44px;padding:0 14px;border:0;border-radius:12px;white-space:nowrap;cursor:copy;
  background:color-mix(in srgb,var(--ink) 3%,transparent);color:var(--ink-2);font:400 13px/1 var(--font-mono,ui-monospace,monospace);
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 15%,transparent);transition:color .15s,box-shadow .15s}
.p-cmd .c:hover{color:var(--ink);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 28%,transparent)}
.p-cmd :focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.cta-pair/agent-prompt-pair -->
### 10. Agent prompt pair

*Feeling: the reader's coding agent is part of the audience.*

The second action copies a prompt for a coding agent. Upstash sets a 44px outlined split button with three overlapped 28px tool icons, a 16/500 label, a pale divider and a chevron. Speakeasy uses a 42px white chip with overlapping 24px logos in grey text. Cloudflare's docs put four overlapped icons and Copy prompt in an outlined pill. Trigger.dev uses a sparkle and a copy glyph. It is a very current developer pattern, so use it only for tools an agent can really use, with a prompt that works. Keep the divider at about 30 percent of the outline, because mine at full strength cut the button in half.

**Seen on** Speakeasy, Upstash, Trigger.dev, Cloudflare Docs. **Suits** light-precision, gradient-light, dark-precision; devtool.

```css
.p-ag{display:inline-flex;align-items:stretch;height:44px;border-radius:12px;color:var(--accent);font:500 16px/1 var(--font-text);
  box-shadow:inset 0 0 0 1px var(--accent);background:color-mix(in srgb,var(--accent) 6%,transparent)}
.p-ag button{display:flex;align-items:center;gap:10px;border:0;background:none;color:inherit;font:inherit;padding:0 14px 0 10px;cursor:pointer}
.p-ag button+button{width:40px;justify-content:center;padding:0;border-left:1px solid color-mix(in srgb,var(--accent) 30%,transparent)}
.p-ag button:focus-visible{outline:2px solid var(--accent);outline-offset:-3px;border-radius:10px}
.p-ag .tools{display:flex}
.p-ag .tools img{width:28px;height:28px;border-radius:50%;background:var(--bg);box-shadow:0 0 0 1px var(--line);margin-left:-8px}
.p-ag .tools img:first-child{margin-left:0}
```

<!-- v:button.cta-pair/keycap-lip-pair -->
### 11. Keycap lip pair

*Feeling: a keyboard you could press.*

Both buttons are keys. Zed sets 36px, radius 4, with a blue fill and darker 2px inset lip, a mono label, a leading icon and a tinted keycap, beside a white twin with a grey lip. Brilliant sets 218 by 50 pills 12px apart, a green key with a 4px darker bottom edge, and a white key with muted text and a grey edge. Take the single key from [lower lip key](#12-lower-lip-key). Press must drop both the same distance.

**Seen on** Zed Pricing, Brilliant. **Suits** mono-technical, warm-neutral; devtool, education.

<!-- v:button.cta-pair/sampled-tint-pair -->
### 12. Sampled tint pair

*Feeling: the buttons grew out of the photograph.*

The colours are taken from the section. Hims sets 48 to 52px pills, the primary in the dark tone of the photo with its label tinted to the headline accent, and the secondary white at 10 percent with a 30 percent white line. Each section's buttons differ, so they never feel imported. Sample the dark from the image, and test both on the image's brightest area. If you cannot sample per section, use a [neutral pill](#2-neutral-pill).

**Seen on** Hims, OREO & BTS - Love Letter Site. **Suits** photo-led, render-3d; health, food-drink.

<!-- v:button.cta-pair/crop-mark-ghost-pair -->
### 13. Crop mark ghost pair

*Feeling: a proof sheet.*

A square solid beside a ghost framed by printer's marks. Better Auth sets 36px, radius 0, a near-black primary, and a secondary with hairlines overshooting each corner by about 8px and a tiny plus at lower right. Analysts recorded 44px, which is the nav size, and the hero button measures 36. It fits ruled, blueprint pages where lines already run through the layout. Elsewhere it looks like an unfinished render.

**Seen on** Better Auth. **Suits** light-precision; devtool.

```css
.p-crop{position:relative;display:inline-flex;align-items:center;height:36px;padding:0 20px;color:var(--ink-2);font:500 14px/1 var(--font-text);text-decoration:none}
.p-crop::before{content:"";position:absolute;inset:-8px;pointer-events:none;background:
  linear-gradient(var(--line),var(--line)) 0 8px/100% 1px no-repeat,
  linear-gradient(var(--line),var(--line)) 0 calc(100% - 8px)/100% 1px no-repeat,
  linear-gradient(var(--line),var(--line)) 8px 0/1px 100% no-repeat,
  linear-gradient(var(--line),var(--line)) calc(100% - 8px) 0/1px 100% no-repeat}
.p-crop:hover{color:var(--ink)}
.p-crop:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:button.cta-pair/store-badge-pair -->
### 14. Store badge pair

*Feeling: it is a real app.*

The stores are the pair. BILD sets a 56px App Store badge in ink and a white Google Play badge with a hairline, both radius 8, 16px apart, and matched height and radius make them feel designed. xtrackr leads with a 64px labelled tile for one store and shrinks the second to a 64px square icon, so one action leads. Detect the platform where possible, and lead with it.

**Seen on** BILD, xtrackr. **Suits** render-3d, dark-precision; saas, finance.

<!-- v:button.cta-pair/captioned-route-pair -->
### 15. Captioned route pair

*Feeling: a good receptionist.*

Each route is explained before the click. Grafana sets two columns, each an 18/600 caption over its own 48px button. ON Makelaardij offers three 58px intent tiles with solid icons, and a fourth dark chip with team faces and a response time. Sanity runs a tonal ladder of grey, orange and black across three pricing columns. Use it when audiences differ and a label cannot carry the difference.

**Seen on** Sanity Pricing, Grafana, ON Makelaardij & Financieel Advies. **Suits** light-precision, gradient-light, photo-led; devtool, local-business.

<!-- v:button.cta-pair/mono-caps-pair -->
### 16. Mono caps pair

*Feeling: a colourful page, still engineered.*

Both labels in mono or tracked caps with identical metrics. Astral sets 53px, radius 6, 16px tracked caps, solid plus 1px outline, and on dark panels flips to solid white plus a near-invisible outline. CockroachDB keeps mono labels on soft 48px pills, which stops them feeling like stock SaaS. jemmic sets 40px, radius 0, 12px caps with 16px icons. Use it to keep a loud page technical.

**Seen on** Astral, jemmic, Slack, Meridian, CockroachDB. **Suits** bold-colour, light-precision, expressive; saas, devtool.

<!-- v:button.cta-pair/joined-pair -->
### 17. Joined pair

*Feeling: two modes of one action.*

Two controls that read as one. Ideogram sets 40px pills only 4px apart, and repeats them at 34px in the nav. The Aviator uses adjoining segments under its title, one per game mode. Use it for two modes rather than a ranked pair. Fill the active side.

**Seen on** Ideogram, The Aviator. **Suits** photo-led, render-3d; ai, other.

### Mistakes that cheapen a pair

- **A height mismatch from a border.** A 1px `border` adds 2px. Use an inset ring so the outlined twin matches.
- **Two arrows.** One on the primary at most, unless the system puts the same arrow on everything.
- **A vivid outline beside a vivid fill.** Two loud things are a tie. Drop the outline to a tint.
- **Reversed rank by accident.** If the secondary has the wider label, it can look heavier. Check the weight of the pair at a glance.
- **A gap that belongs to nothing.** Use the page's gap scale: 8, 12 or 16.
- **A divider as strong as the edge.** Mine cut a split button in half. Use 30 percent of the outline.
- **Identical offers.** Get started and Sign up are one offer twice. The second route should be honestly different.
- **Different radii.** A pill beside a rectangle reads as two systems.
- **Not stacking on phones.** Two buttons squeezed to 150px wrap their labels. Stack full width with the primary on top.
- **A pair repeated in every section.** One well-placed action beats nine identical ones.

## Hover response

Hover answers the question of whether this thing is live. It should do so in the least dramatic way the brand can bear, in 150 to 300ms, and it must never change the size of anything. Choose one response for the site, and let press and focus follow from it.

What separates great from cheap is that a great hover changes one thing. Stripe darkens slightly and lets the arrow travel. Linear steps to white. Cheap hover changes four things at once, with a lift, a glow, a colour change and a scale, on an `all` transition that also animates things nobody meant to animate. Name the properties in `transition`, and never use `all`.

Measured on 516 sites: 78 percent of main buttons respond. Fill 77 percent of those, transform 17, text colour 17, shadow 11, opacity 11. Duration 150, 200 and 300ms at the quartiles. `ease` leads, then `cubic-bezier(.4,0,.2,1)`. Moves are small: median -2px. Gate it behind `@media(hover:hover)`, and give `:focus-visible` the same reveal. For richer choreography, such as entry-point fills and letter rolls, see `references/motion/interaction.md`.

<!-- v:button.hover-response/tone-step -->
### 1. Tone step

*Feeling: nothing happened, and yet you know it is live.*

One small move of the fill. The default for almost every button. Dark lightens by 11 L\*, white darkens by 4, colour darkens by 8. Stay within those, because a move of 20 L\* or more reads as a different button. Use 150ms on `ease` or `cubic-bezier(.4,0,.2,1)`, or an instant cut. Trasti and Bitnomi use a cut, and it feels fast rather than crude.

**Seen on** Neon Docs, New Material, Bitnomi, Cloudflare Docs, Fundrise, 14 sites in all. **Suits** light-precision, dark-precision, warm-neutral, photo-led; devtool, finance, architecture, agency.

```css
.h-step{transition:background-color .15s cubic-bezier(.4,0,.2,1)}
.h-step:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}   /* dark fill: toward the ground */
.h-step.colour:hover{background:color-mix(in oklab,var(--accent) 88%,#000)}  /* colour: toward black */
```

<!-- v:button.hover-response/alpha-dim -->
### 2. Alpha dim

*Feeling: the button takes half a step back.*

Fade to 85 or 88 percent in 100 to 150ms. Polar drops its white pill to .85 in 100ms, the fastest response in the set, and OpenRouter's fill drops to .88. It works on any ground, including photos and gradients, which is its only advantage. A fade reads as receding rather than as responding, so a tone step is better wherever you know the ground. Together.ai's .7 over 450ms is too slow for a control.

**Seen on** Polar, OpenRouter, Nuxt, Together AI. **Suits** dark-precision, light-precision, gradient-light; devtool, saas, ai.

<!-- v:button.hover-response/ink-swap -->
### 3. Ink swap

*Feeling: a stamp turned over.*

Ink and paper trade places: fill, text and border swap in one move of 150 to 300ms, with no movement or shadow. New Exhibitions flips white to black in 250ms. Ritual fills a navy outline. Monocle turns yellow to black and adds an underline. Apple's Vision Pro does a hard 0s cut. Use it on square, printed and editorial buttons. Keep the label readable through the middle of the fade, or use an instant cut. Use an inset ring so nothing shifts.

**Seen on** ACME, Apple Vision Pro, New Exhibitions, Monocle, New York Phil, 12 sites in all. **Suits** type-led, photo-led, bold-colour, dark-precision; culture, agency, ecommerce, brand.

```css
.h-swap{background:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);transition:background-color .25s ease,color .25s ease}
.h-swap:hover{background:var(--ink);color:var(--bg)}
```

<!-- v:button.hover-response/directional-fill-wipe -->
### 4. Directional fill wipe

*Feeling: ink poured in from one side.*

The fill enters from an edge instead of fading. Render scales an absolutely placed span from `scaleX(0)` to `scaleX(1)` in 300ms on `cubic-bezier(.4,0,.2,1)`, and the label flips on the same curve. Nuro wipes a text link to violet in 300ms. It works best on outlined buttons. Keep it on a pseudo-element under the label, and let it leave the way it came. For a fill that starts at the pointer, see Entry-point fill in `references/motion/interaction.md`.

**Seen on** Render, Nuro, Fenriz Gym. **Suits** photo-led, light-precision; devtool, brand, health.

```css
.h-wipe{position:relative;isolation:isolate;overflow:hidden;background:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);
  transition:color .3s cubic-bezier(.4,0,.2,1)}
.h-wipe::before{content:"";position:absolute;inset:0;z-index:-1;background:var(--ink);scale:0 1;transform-origin:left;
  transition:scale .3s cubic-bezier(.4,0,.2,1)}
.h-wipe:hover{color:var(--bg)}
.h-wipe:hover::before{scale:1 1}
```

<!-- v:button.hover-response/arrow-travel -->
### 5. Arrow travel

*Feeling: the button leans towards where it goes.*

Only the arrow moves. Stripe's chevron grows a stem and travels 3 to 6px in 300ms on `cubic-bezier(.25,1,.5,1)`, while the fill darkens. Baseten moves a diagonal arrow 5px up and right in 400ms on `cubic-bezier(.75,0,.1,.99)`. The button stays put, so the target never shifts. This is the best hover for a marketing button, as it adds meaning, not just a state. The code is under [saturated rectangle](#3-saturated-rectangle).

**Seen on** Stripe, Baseten. **Suits** gradient-light, light-precision; finance, ai.

<!-- v:button.hover-response/label-roll -->
### 6. Label roll

*Feeling: a departure board, one tick.*

Two stacked copies of the label: one rolls out and the other rolls in, clipped by the button. Customer.io crossfades a duplicate as its fill deepens, in 200ms. Hotjar rolls by 40px in 200ms while the fill darkens over 300ms. Lively and contained. The duplicate needs `aria-hidden`, and it should run on one kind of button only, or it becomes a tic.

**Seen on** Customer.io, Hotjar. **Suits** light-precision; saas.

```html
<button class="h-roll"><span><i>Get started</i><i aria-hidden="true">Get started</i></span></button>
```

```css
.h-roll{--h:44px;height:var(--h);overflow:hidden}
.h-roll>span{display:grid}
.h-roll i{grid-area:1/1;font-style:normal;transition:translate .3s cubic-bezier(.4,0,.2,1)}
.h-roll i+i{translate:0 var(--h)}
.h-roll:hover i{translate:0 calc(var(--h)*-1)}
.h-roll:hover i+i{translate:0 0}
```

<!-- v:button.hover-response/hard-offset-lift -->
### 7. Hard offset lift

*Feeling: a paper tile lifting off the desk.*

The button moves -4px,-4px while a solid shadow appears. Jasper uses 200ms with a blue shadow on its navy button and a navy one on its outline. Counter Culture Coffee uses -4px 4px in 150ms linear. Lemon Squeezy shifts an inner layer by -8px to reveal a yellow plate. No blur. Printed and playful, on flat graphic pages. Use one shadow colour.

**Seen on** Jasper, Lemon Squeezy, Counter Culture Coffee. **Suits** bold-colour; ai, saas, ecommerce.

```css
.h-off{transition:translate .2s ease,box-shadow .2s ease}
.h-off:hover{translate:-4px -4px;box-shadow:4px 4px 0 var(--ink)}
.h-off:active{translate:0 0;box-shadow:0 0 0 var(--ink)}
```

<!-- v:button.hover-response/light-moves-inside -->
### 8. Light moves inside

*Feeling: a material catching the light.*

The light changes rather than the colour. Attio animates a custom property so a radial top glow brightens, in 300ms on `cubic-bezier(.2,0,0,1)`. Raycast swaps a white glow for inset highlights in 200ms. Trigger.dev fades in a sheen layer. Motionstrand shifts a radial highlight across the fill. Rare and subtle, and it reads as a real material. Register the property with `@property`, or the gradient will not interpolate.

**Seen on** Attio Pricing, Raycast Pricing, Trigger.dev, Raycast Store, Motionstrand. **Suits** dark-precision, light-precision, gradient-light; saas, devtool, agency.

```css
@property --glow{syntax:"<percentage>";inherits:false;initial-value:0%}
.h-light{background:radial-gradient(120% 120% at 50% -10%,color-mix(in oklab,var(--ink),var(--bg) var(--glow)),var(--ink) 70%);
  transition:--glow .3s cubic-bezier(.2,0,0,1)}
.h-light:hover{--glow:22%}
```

<!-- v:button.hover-response/press-in-flatten -->
### 9. Press in, flatten

*Feeling: it is already going down.*

Depth drops away on hover. Zed removes the inset lip and outer glow and darkens the fill, with no transition, so the button sinks before you click. Now Code removes its ring and shadow the same way. It fits any button with a lip or an inset ring. Pair it with 1px of travel on press.

**Seen on** Zed Pricing. **Suits** mono-technical; devtool.

<!-- v:button.hover-response/edge-brightens -->
### 10. Edge brightens

*Feeling: lit from the rim.*

For ghost and glass buttons. Nx lifts fill from .08 to .14 and border from .14 to .24 in 160ms. LiveKit moves both from 6 to 10 percent, with the border tracking the fill so the edge never pops. Monark does it slowly over video. Monocle adds an inset 2px ring, with no layout shift. Motionless, and right for secondaries on dark.

**Seen on** LiveKit, Monark Markets, Nx, Monocle, Fishwife, 6 sites in all. **Suits** dark-precision, type-led, photo-led; devtool, finance, editorial, hospitality.

```css
.h-edge{background:color-mix(in srgb,var(--ink) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent);
  transition:background-color .16s cubic-bezier(.2,0,0,1),box-shadow .16s cubic-bezier(.2,0,0,1)}
.h-edge:hover{background:color-mix(in srgb,var(--ink) 14%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 24%,transparent)}
```

<!-- v:button.hover-response/spring-lift -->
### 11. Spring lift

*Feeling: a deliberate little theatre.*

Elyx lifts 4px with a shadow growing to `0 30px 50px -10px` at 14 percent, over 450ms on `cubic-bezier(.34,1.56,.64,1)`. The overshoot is warm, and it suits one big call to action on a page. On a row of buttons it is exhausting, and on anything used twice it feels slow.

**Seen on** Elyx. **Suits** warm-neutral; saas.

<!-- v:button.hover-response/soft-glow -->
### 12. Soft glow

*Feeling: a developer page from a few years ago.*

A wide glow appears, as in `0 0 32px` white at 50 percent on Auth0. This is common on dark developer pages and almost always cheapens them, because glow is not a material, and it brings no information. Prefer a [tone step](#1-tone-step) or [edge brightens](#10-edge-brightens). Keep it only for a page already lit by neon art.

**Seen on** Auth0. **Suits** dark-precision; devtool.

### Mistakes that cheapen a hover

- **`transition:all`.** It animates things you did not mean, including layout. Name the properties.
- **Lift on everything.** Save movement for one element. Rows of buttons that jump feel nervous.
- **Moving the whole button more than 2px on hover.** The target slides out from under the pointer at the edge, and hover flickers.
- **The wrong direction.** Darkening a black button is the classic error.
- **Slow.** Over 300ms a control feels laggy. Reserve longer curves for arrows and fills, never for the fill step itself.
- **Hover with no focus equivalent.** Whatever hover reveals, keyboard focus must reveal too.
- **Sticky hover on touch.** Gate it behind `@media(hover:hover)`.
- **Changing weight or letter-spacing.** The label reflows and the row shifts.

## Before you call it done

- Pick one system from the table, and take every button from it. Count your button styles: two sizes of one primary, one secondary, one link.
- Render rest, hover, press, focus and disabled side by side, on every ground the button sits on, and look at them at 2x. The state matrix is what caught my lip, my clipped focus ring and my wrapped labels.
- Check the ratios: side padding is 0.4 of height, or 0.48 on a pill. Label 14px to a height of 40, 16px above.
- Check that outlined and filled neighbours are exactly the same height.
- Check the hover direction: dark lightens, white darkens, colour darkens, ghost brightens.
- Press answers in under 100ms, with scale .98 or a fill step.
- Tab through the page. Every control shows a 2px ring, and no ring appears on mouse click.
- Disabled buttons look off: neutral fill, no highlight, not `cursor:pointer`.
- At 375px, labels do not wrap, pairs stack, and every target is at least 44px.
- Every icon button has a name. Every autoplaying clip has a pause.
- Compare the label to the surrounding copy. If the button text is heavier than your headline, it is too loud.
- Hide the colour and look again. If you can still find the primary, the hierarchy is right.
