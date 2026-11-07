# Product

Product surfaces are app windows, UI fragments, code, terminals, devices, annotated shots, data and demos: anything that shows the thing being sold. This is the most important chapter in the atlas. The commonest failure our analysts recorded across 650 strong sites was a well-framed page with thin fake UI inside the frames. A good layout around three grey bars collapses straight into a template, and no amount of type or colour rescues it.

This chapter comes from 347 analyst rows, clustered into 115 canonical variants. The top variants were checked against real frames, by eye and by pixel scan where it mattered, and 23 were rebuilt and compared side by side with the sites that inspired them. The mistakes list closing each element records the real differences those comparisons exposed, including what went wrong in our own first attempts. Those lists are the most useful lines here.

Read [Foundations](#foundations) before any element. It holds the kit every recipe depends on, and the laws that separate believable from cheap. Then jump to the element you are building.

**Contents.** [How to choose](#how-to-choose) · [Foundations](#foundations)

- **[App windows](#app-windows)**, 17 variants. Built and compared: `fold-peek-rebuilt-window`, `inset-sheet-window`, `window-on-colour-plate`
- **[UI fragments](#ui-fragments)**, 21 variants. Built and compared: `card-on-photo`, `workflow-node-graph`, `data-table-crop`, `masked-dissolve-crop`
- **[Code blocks](#code-blocks)**, 14 variants. Built and compared: `light-editor-card`, `diff-panel`, `line-state-gutter`
- **[Terminals](#terminals)**, 8 variants. Built and compared: `status-run-log`, `install-command-cta`
- **[Device mockups](#device-mockups)**, 12 variants. Built and compared: `phone-overlapping-window`, `soft-rim-phone`
- **[Annotated shots](#annotated-shots)**, 11 variants. Built and compared: `numbered-architecture-diagram`, `margin-notes-on-code`, `spotlight-dim-and-callout`
- **[Data viz](#data-viz)**, 17 variants. Built and compared: `race-bars`, `kpi-strip-drives-chart`, `margin-between-two-lines`
- **[Animated demos](#animated-demos)**, 15 variants. Built and compared: `typing-composer`, `self-playing-window`, `live-status-matrix`

## How to choose

Decide what the surface has to prove, then pick the element. Spend effort on the content inside the frame first, the crop second and the frame last.

| The job | Use | Wrong when |
|---|---|---|
| The product is a multi-pane app and it is the argument | App window, `fold-peek-rebuilt-window` or `inset-sheet-window` | You cannot fill it with 40 specific strings |
| Colour must come from somewhere, UI stays neutral | App window on a plate, `window-on-colour-plate` | The UI is already colourful |
| A feature grid with no images | UI fragment, `mini-ui-in-wells` | Only one or two features |
| Rows are the product (finance, CRM, ops) | UI fragment, `data-table-crop` | Fewer than six real rows |
| Agents or automation | `agent-chat-panel`, `workflow-node-graph`, `fading-live-feed` | A three-step line dressed up as a graph |
| A human or consumer brand | `card-on-photo`, `float-card-on-wash`, `handled-object` | No good photograph or specific human content |
| Developers must trust it fast | `install-command-cta`, then `code-with-rendered-result` | No real one-line install |
| Mobile is the product | `soft-rim-phone`, `dissolving-rim-phone`, `phone-with-breakout-cards` | Web-only product |
| A claim needs proof | `race-bars`, `single-claim-line`, `side-by-side-proof` | The numbers are close or invented |
| A system needs explaining | `numbered-architecture-diagram`, `node-state-diagram` | A hub of logos with no logic |
| Attention must go to one detail | `frozen-interaction`, `spotlight-dim-and-callout`, `one-bright-line` | Nothing on the screen deserves it |
| The product is best seen moving | `self-playing-window`, `typing-composer` | No pause control, or an empty first frame |

Two rules stop pages converging. Use **one framing treatment per page**, applied exactly each time: a page of inset sheets is a system, while a page with one inset sheet, one plate, one tilted phone and one glow is a sample book. And **vary the framing between sites, not the quality**. Every recipe here holds at the same level, so pick by the register and the product, not by the first entry in a list.

## Foundations

### What separates great from cheap

Eight laws, checked against real frames. Break one and the surface reads as a mock-up, however good the frame.

1. **True scale.** Rows are 13-14px on 28-36px. Sidebars, tables and editors keep the size they have in the real app. Most weak mocks are a real-sized layout scaled down until the text turns to mush, or a toy UI drawn big with 18px rows.
2. **Four inks, not one grey.** Primary rows at 82-90% ink, secondary at 55-60%, tertiary at 35-40%, disabled at 25%. Our first attempts set sidebars at 55% and looked dead beside the real thing. Real software is mostly bright text with dim metadata, never the reverse.
3. **Nested surfaces, not dividers.** The main pane is a raised sheet inset 8px on the sidebar's ground, with its own 1px line and a radius 4px smaller than the frame's. On Linear the page is near L4, the sidebar ground near L8, the pane near L10 and the hairline near L16. One flat box split by a line is the cheap version.
4. **Specific, irregular data.** Real identifiers, timestamps, currency, surnames, truncated titles. Row lengths differ, cards differ in height, one cell is empty. Cloned rows and identical card heights are the fastest giveaway.
5. **One thing in progress.** A selected row, a running chip, a Thinking line, a cursor, a focus ring. A static screen is a picture, while one live state makes it software.
6. **Cropped, never whole.** At least one edge runs out of view, nearly always the base, and often a second: the fold, a plate, a mask, a section change. Showing a window's bottom edge kills the illusion instantly, because it admits the screen is a drawing with a known size.
7. **Colour only as status.** The UI is neutral. The accent appears on one active element and small status marks: dots, chips, a 2px bar. Colour belongs to the plate behind the window, not to the app.
8. **Quiet frame.** 1px at ink-8%, radius 8-20, and no shadow on dark. Shadows only on light, and layered. No reflections, perspective tilts or coloured glows behind windows. Fewer than half of strong windows carry any chrome: about 17 of 40.

### The density kit

Every recipe assumes this block. It defines nothing but what is dealt, plus steps derived from it, so any palette or type system drops in. Add `--font-mono` if the type system has one, otherwise the stack here is fine.

```css
:root{--font-mono:ui-monospace,SFMono-Regular,Menlo,monospace;
  --ink-4:color-mix(in srgb,var(--ink) 26%,var(--bg));          /* disabled, line numbers */
  --tint:color-mix(in srgb,var(--ink) 5%,transparent);          /* hover, quiet fills */
  --tint-2:color-mix(in srgb,var(--ink) 9%,transparent);        /* selected row */
  --ok:color-mix(in oklab,#2fa86f 82%,var(--ink));              /* status only */
  --warn:color-mix(in oklab,#d9962b 85%,var(--ink));
  --bad:color-mix(in oklab,#d9524a 85%,var(--ink));
  --shadow:0 1px 1px rgba(16,18,27,.04),0 4px 8px rgba(16,18,27,.05),0 16px 32px rgba(16,18,27,.07),0 40px 80px rgba(16,18,27,.08)}
.mono{font-family:var(--font-mono)}
.num{font-variant-numeric:tabular-nums}
.ic{width:15px;height:15px;flex:none;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.av{width:20px;height:20px;border-radius:50%;flex:none;display:grid;place-items:center;font-size:10px;font-weight:600;color:#fff;background:hsl(var(--h,210) 32% 46%)}
.chip{display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 7px;border-radius:6px;font-size:12px;font-weight:500;white-space:nowrap;color:var(--ink-2);box-shadow:inset 0 0 0 1px var(--line)}
.dot{width:7px;height:7px;border-radius:50%;background:currentColor;flex:none}
.kbd{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 4px;border-radius:4px;font-size:11px;color:var(--ink-3);box-shadow:inset 0 0 0 1px var(--line)}
.trunc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
/* fades are masks, never overlay gradients, so they work on any background */
.fade-b{mask-image:linear-gradient(#000 62%,transparent)}
.fade-r{mask-image:linear-gradient(90deg,#000 62%,transparent)}
.fade-br{mask-image:linear-gradient(#000 58%,transparent),linear-gradient(90deg,#000 62%,transparent);mask-composite:intersect}
```

Icons make or break density. Use a real stroke set at 1.5px, 14-16px, from whatever icon library the project has, inlined as SVG. Never use emoji, letters or empty squares as stand-ins. Avatars: real photos when you have them. Without photos keep them small, 16-24px, and low in chroma. In one attempt, 36px saturated initial tiles were the single cheapest thing on the screen.

### Writing the data

Write the content before the layout. A window takes about 40 strings, a table at least eight rows. Decide what the product does for one specific customer, then fill it from that world.

- **Identifiers** look machine-made: `SHP-4418`, `MSKU 482917-3`, `9c04e7b`, `v30492`.
- **Numbers** are uneven and tabular: $182,400, $64,200, 1,284, 0.21s. Avoid 12,345, 100%, 99.9% and $1,000. Right-align them. Follow a bold figure with a grey secondary one, as real finance tables do.
- **Names** are specific and varied in origin, with surnames. Never John Doe. Never Acme unless the frame is literally a sample.
- **Time** mixes forms: 11 min ago, 2:09 PM, Oct 14.
- **Status** is 80% boring. Of ten rows, eight are fine, one is amber and one is selected.
- **Length** varies. Let one title truncate with an ellipsis, leave one cell at a dash, give one card a third line.
- **Charts** get real rhythm: weekday drops, a slow trend, one spike. A smooth wave exposes itself at once. Seed a small random generator so the same shape renders each time.
- **Never** lorem ipsum, and never skeleton bars unless the point is the channel, not the content.

### Crop, fade and scale

**Crop** with the container, not the content. Give the frame `overflow:hidden` and let content run past it, so rows are cut mid-row. A clean cut between rows looks arranged. Always crop the base, and a second edge when you can. Let the next section, the fold or a plate do the cutting.

**Fade** with masks. An overlay gradient assumes one background colour and breaks on texture. Fade the side that has more to imply, and keep it short. Our first table began fading at 62% and looked washed out, where the real one is simply cut by its cell. Fading suits dark pages and feeds. On light tables, crop instead.

**Scale** in exactly one of three modes, never between.

| Mode | Text | Use |
|---|---|---|
| True | 13-15px | Anything meant to be read: heroes, wells, tables |
| Texture | 10-12px | Layered panels and feature cards. Still real labels, read as detail |
| Enlarged | 1.5-2x | One control or menu, cropped by its tile |

To shrink a rebuilt UI, re-specify sizes or use CSS `zoom`, which reflows text crisply. `transform:scale()` softens text on a composited layer, and it leaves the old layout box behind. A shrunken PNG is the worst of all, because it goes soft on every high-density screen. If you must use a capture, export at 2x and show it at true size.

### Surfaces

| Layer | Dark page | Light page |
|---|---|---|
| Page | `--bg` | `--bg` |
| Window ground, sidebar | 60% `--surface` over `--bg` | half a step of `--surface`, or ink-5% as shell |
| Pane, sheet | `--surface` | `--bg`, pure |
| Raised card | ink-5% over `--surface` | `--bg` with `--shadow` |
| Hairline | `--line`, around ink-8% | `--line`, around ink-8% |
| Depth | lighter fill, no shadow | layered shadow, hue-tinted if the ground has colour |

On dark, a window fill that is too light turns it into a grey box. Stay close to the page. Linear's frame sits only a few lightness points above it. The site-wide median border alpha is .08, with dark sites running .05 to .18.

Chrome is optional. If used, keep the title bar at 32-48px and dots at 9-12px. Grey dots with a breadcrumb read more current than coloured ones. Ghost a browser bar to about 10% contrast. A traffic-light bar on a screenshot of nothing is the cliché, and it is the content that redeems it.

### Range

Two sites built from this chapter must not look alike, so vary the framing, not just the palette. Choose one value on each axis below and write them in the spec.

| Axis | Values |
|---|---|
| Frame | none, hairline, inset shell, plate, photograph, device |
| Crop | fold, mask, section cut, side bleed, tile edge |
| Scale | true, texture, enlarged |
| Depth | flat, overlap, shadow, wash |
| Live state | selected row, running chip, cursor, typing, feed |

The registers lean differently. These are the variants each one actually used most, so start here, and use the second column to avoid a clash.

| Register | Reach for | Avoid |
|---|---|---|
| dark-precision | `fold-peek-rebuilt-window`, `masked-dissolve-crop`, `diff-panel`, `margin-between-two-lines`, `analyst-grade-dark-panel` | `float-card-on-wash`, `layered-panels-on-gradient` |
| light-precision | `mini-ui-in-wells`, `data-table-crop`, `window-on-photo-plate`, `light-editor-card`, `tabbed-cli-switcher` | `glow-bezel-window`, `dissolving-rim-phone` |
| gradient-light | `layered-panels-on-gradient`, `soft-rim-phone`, `admin-panel-fragment`, `recorded-loop-with-pause` | `masked-dissolve-crop`, frameless code |
| warm-neutral | `inset-sheet-window`, `embedded-working-product`, `single-claim-line`, `typing-composer`, `api-call-card` | coloured glows, neon status |
| bold-colour | `frozen-interaction`, `window-on-colour-plate`, `dark-card-on-colour-band`, `brand-redrawn-ui` | `light-editor-card`, grey wells |
| photo-led | `card-on-photo`, `dissolving-rim-phone`, `hand-held-device`, `inked-map` | any window with chrome |
| mono-technical | `line-state-gutter`, `install-command-cta`, `numbered-architecture-diagram`, `dot-globe-with-chips` | `float-card-on-wash`, tilts |
| illustrated, render-3d | `labelled-layer-stack`, `handled-object`, `leader-line-callouts`, `selection-handle-marks` | raw screenshots |

### On a phone

Measured on real phone captures, from best to worst:

1. **Reflow at true scale.** The window becomes a single column at real text size. Polar does this and it is the only option that stays legible.
2. **Rebuild a phone view.** A different, simpler screen inside the same frame, as Attio does.
3. **Crop at true scale.** Keep the desktop width, pin it left, let the right side bleed off. Set `width:760px`, not `100%`.
4. **Shrink as texture.** Scaled to about half, cropped, not meant to be read. Linear and Inngest do this, and it only works on dark pages with strong copy above it.
5. **Shrink to fit.** The whole window at 40% with unreadable 6px text. Never do this.

Hide floating panels and inspectors first. Stack side-by-side code and result. Tabs become a horizontal scroller. Keep code at 12.5-13px and let the block scroll or truncate with a fade; never wrap it.

### Motion

Motion on product surfaces belongs in `references/motion`. Three rules apply here. Everything moving must have a designed still frame, because that is what shows on load, under reduced motion and in a screenshot. Anything looping for more than about five seconds needs a visible pause. Prefer real DOM over video, since DOM stays crisp and takes your tokens.

## App windows

An app window shows the whole product at once. Its job is to make a visitor believe that real software exists, at a glance, before reading a word. What separates great from cheap is almost never the frame. It is whether the inside survives a second look: true-scale rows, four inks, specific strings, a live state and a confident crop. Great windows are mostly rebuilt in HTML rather than pasted, which keeps them crisp at any density, lets them use the page's tokens and lets them animate.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Hero window width | 1080 / 1248 / 1320px | pixel-checked on 9 frames |
| Width beside copy | 750-900px |  |
| Radius | 8 / 16 / 20 | n=15; Linear scans at 14 |
| Border | 1px, alpha .05-.18 | median .08 site-wide |
| Sidebar | 200-314px, usually 240-250 | rows 13-14px on 28-32px, in hero windows; real app rails run 256-288, see `app.md` |
| Title bar | 32-48px | when present |
| Chrome present | about 17 of 40 | most strong windows have none |
| Top edge in hero | 54-62% of viewport | Linear y=527 of 900 |
| Inset, sheet in shell | 8px | Attio, Loops, Linear |

<!-- v:product.app-window/fold-peek-rebuilt-window -->
### `fold-peek-rebuilt-window`

*The product is already open and waiting just under the headline.* Quality 5/5, 7 sites.

**Use:** A hero on a product-led page, where a multi-pane app is the argument. **Not:** Thin products with a single form, or anything you cannot fill with 40 real strings.

**Recipe:** Rebuild the app in DOM at true scale, 1200-1320px wide, with its top edge at 58% of the viewport and its base cut by the fold. 1px ink-8% border, radius 12-14, no shadow. 240px sidebar with 13/28 rows; main pane a raised sheet inset 8px. One live state. Measured on Linear: frame 60px from each viewport edge, top at y=527, radius 14, 240px sidebar, pane inset 8px with a 10px radius. Set the H1 on the same left line as the window content, not its frame. Spline dims the whole window to about 50% and brightens it on scroll, which suits a page that opens on a large statement.

**Seen on:** Linear (gold), Spline (gold), Framer (gold), Haikei, Obsidian, VS Code. **Suits:** dark-precision, light-precision, warm-neutral; saas, devtool, ai.

```html
<style>
.hero{height:100vh;min-height:900px;overflow:hidden;padding-top:226px} /* the page cuts the window */
.win{position:relative;width:min(1320px,100% - 48px);height:560px;margin:96px auto 0;display:grid;grid-template-columns:240px 1fr;padding:8px 8px 0 0;
 border:1px solid var(--line);border-bottom:0;border-radius:14px 14px 0 0;
 background:color-mix(in srgb,var(--surface) 62%,var(--bg));box-shadow:inset 0 1px 0 color-mix(in srgb,var(--ink) 6%,transparent)}
.pane{min-width:0;overflow:hidden;border:1px solid var(--line);border-bottom:0;border-radius:10px 10px 0 0;background:var(--surface)} /* raised sheet, not a split */
.side{padding:6px 8px;font:500 13px var(--font-text);color:color-mix(in srgb,var(--ink) 82%,var(--bg))}
.row{display:flex;align-items:center;gap:9px;height:28px;padding:0 6px;border-radius:6px;white-space:nowrap}
.row.on{background:var(--tint-2);color:var(--ink)}.row .ic{color:var(--ink-2)}.row .n{margin-left:auto;font-size:12px;color:var(--ink-3)}
.bar{display:flex;align-items:center;gap:10px;height:44px;padding:0 14px;font:500 13px var(--font-text);color:var(--ink-2)}
.agent{position:absolute;right:20px;top:176px;bottom:0;width:396px;padding:12px 14px;font-size:13px;border:1px solid color-mix(in srgb,var(--ink) 13%,transparent);border-bottom:0;border-radius:12px 12px 0 0;background:color-mix(in srgb,var(--ink) 6%,var(--surface))}
@media(max-width:760px){.hero{padding-top:110px}.win{width:760px;margin-left:24px;grid-template-columns:200px 1fr;height:420px}.agent{left:400px;right:auto;width:340px}}
</style>
<section class="hero"><!-- H1 here, on the window's content line -->
 <div class="win">
  <aside class="side">
   <div class="row"><svg class=ic></svg>Inbox<span class="n num">12</span></div>
   <div class="row"><svg class=ic></svg>Exceptions<span class="n num">3</span></div>
   <div class="row on"><span class="dot" style="color:var(--warn)"></span>Reefer hold, Delta</div>
   <!-- 10-12 rows in two or three labelled groups -->
  </aside>
  <main class="pane">
   <div class="bar"><span class="mono" style="font-size:12px">SHP-4418</span><b style="font-weight:500;color:var(--ink)">Reefer hold, Rotterdam Delta</b></div>
   <!-- title, body, activity list, properties column -->
  </main>
  <div class="agent"><!-- header, user message, context chip, shimmering status --></div>
 </div>
</section>
```

<!-- v:product.app-window/inset-sheet-window -->
### `inset-sheet-window`

*A well-made Mac app sitting on a table: soft, tactile, unhurried.* Quality 5/5, 4 sites.

**Use:** Light or warm SaaS, and products with sparse screens where the frame has to add weight. **Not:** Dark pages, where the two surfaces merge. Also inside a card grid, where a third nested edge appears.

**Recipe:** Outer shell 1080-1248px, tinted ink-5%, radius 16, 1px line. 32-34px title bar with dots or a breadcrumb. App sheet inset 8px on three sides, radius 8-10, its own 1px line. 250px sidebar on a half-step tint, 14/28 rows. Never show the bottom edge. The inner radius must equal the outer radius minus the inset, or the corners look broken. Attio uses coloured window dots; Loops greys them out and adds a breadcrumb, which is the more modern choice because it stops the chrome competing with the app. Reflect does the same trick as glass on a dark page: two 1px rims, outer radius 32 and inner 24, an 8px gap, and a glow bleeding through.

**Seen on:** Attio (gold), Loops (gold), Sweeply, Reflect. **Suits:** light-precision, render-3d, gradient-light, warm-neutral; saas.

```html
<style>
.hero{height:100vh;min-height:900px;overflow:hidden;display:flex;flex-direction:column;align-items:center;padding:118px 24px 0}
.shell{flex:none;width:min(1080px,100%);height:700px;margin-top:64px;padding:0 8px;border-radius:16px 16px 0 0;
 background:color-mix(in srgb,var(--ink) 5%,var(--bg));box-shadow:0 0 0 1px var(--line),0 24px 60px rgba(30,40,80,.07)}
.tl{display:flex;gap:7px;align-items:center;height:32px;padding-left:6px}.tl i{width:11px;height:11px;border-radius:50%;background:var(--ink-4)}
.sheet{display:grid;grid-template-columns:250px 1fr;height:calc(100% - 32px);border-radius:8px 8px 0 0;background:var(--bg);box-shadow:0 0 0 1px var(--line);overflow:hidden} /* 16 outer minus 8 inset */
.side{padding:10px;border-right:1px solid var(--line);font:500 14px var(--font-text);background:color-mix(in srgb,var(--surface) 45%,var(--bg))}
.row{display:flex;align-items:center;gap:8px;height:28px;padding:0 6px;margin-top:1px;border-radius:7px;color:color-mix(in srgb,var(--ink) 86%,var(--bg))}
.row .ic{color:var(--ink-2)}.row.on{background:var(--tint-2);color:var(--ink)}
.top{display:flex;align-items:center;gap:8px;height:44px;padding:0 16px;border-bottom:1px solid var(--line);font-weight:500}
@media(max-width:760px){.shell{width:720px;height:430px;align-self:flex-start}.sheet{grid-template-columns:190px 1fr}}
</style>
<section class="hero"><!-- H1 and sub -->
 <div class="shell"><div class="tl"><i></i><i></i><i></i></div>
  <div class="sheet"><aside class="side"><div class="row on"><svg class=ic></svg>Contracts</div><!-- more rows --></aside>
   <div><div class="top">Vantor MSA, v4<span class="chip" style="margin-left:auto"><span class="dot" style="color:var(--warn)"></span>3 deviations</span></div><!-- document, suggestions --></div>
  </div></div>
</section>
```

<!-- v:product.app-window/dissolving-window -->
### `dissolving-window`

*The software fades into the page, so nothing has to end.* Quality 5/5, 3 sites.

**Use:** Dark sites, and any section with a complex product that should not take over. **Not:** When the fade would cut the one thing you need people to read.

**Recipe:** Window or shell with 1px line and radius 16-24 dissolves into the page: mask the lower third, or the right and bottom edges, to page colour. Text stays real and dims with distance. No hard base, no shadow halo, no fake window edge. Framer masks a 13-14px CMS rebuild so rows dim with distance. Better Auth dissolves a greyscale dashboard into white. Sierra draws the whole console pale on a dot grid, with one green chart and one blue button left in colour.

**Seen on:** Framer (gold), Better Auth (gold), Sierra. **Suits:** photo-led, dark-precision, light-precision; ai, saas, devtool.

<!-- v:product.app-window/window-on-colour-plate -->
### `window-on-colour-plate`

*The product as a framed print: the plate holds the colour, the UI stays calm.* Quality 5/5, 3 sites.

**Use:** Any neutral UI that needs brand colour without tinting the app itself. **Not:** A busy, colourful UI. It fights the plate, so use a neutral stage instead.

**Recipe:** Column-wide plate 480-640px tall, painted image or tinted panel, radius 0 or 48. Window inset 24-35px at the sides and 50px at the top, cropped by the plate base. Radius 12, 1px edge, soft 18/50 shadow. All colour lives on the plate; the UI stays neutral. Kiro runs this loud on a lilac panel with a 48px radius and a second terminal window overlapping lower right. A pure CSS gradient is the weak point: it reads as generated. Use a real image, or build non-repeating detail with low-frequency turbulence as in the code below.

**Seen on:** Devin Desktop (codeium.com redirect) (gold), Kiro, Orion Icon Library. **Suits:** light-precision, bold-colour; ai, other.

```html
<style>
.plate{position:relative;height:640px;padding:50px 35px 0;overflow:hidden;background:linear-gradient(175deg,color-mix(in oklab,var(--accent) 30%,#a9bfc7),#d9dcd6 62%,#e6dccd)}
/* a gradient alone looks generated. Low-frequency noise adds non-repeating, painted detail */
.plate::before{content:"";position:absolute;inset:-40px;background:#fff;opacity:.62;filter:url(#cloud) blur(10px)}
.win{position:relative;height:560px;display:grid;grid-template-columns:290px 1fr;border-radius:12px 12px 0 0;background:var(--bg);box-shadow:0 0 0 1px rgba(0,0,0,.06),0 18px 50px rgba(30,40,50,.18);overflow:hidden}
.board{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:16px}
.card{padding:11px 12px;margin-bottom:8px;border-radius:9px;box-shadow:0 0 0 1px var(--line);font-size:13px} /* never a fixed height */
@media(max-width:760px){.plate{height:420px;padding:24px 0 0 18px}.win{width:880px;height:460px;grid-template-columns:200px 1fr}}
</style>
<svg width="0" height="0" style="position:absolute"><filter id="cloud"><feTurbulence type="fractalNoise" baseFrequency=".0035 .009" numOctaves="4" seed="8"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 .96 0 0 0 0 .92 1.9 0 0 0 -.85"/></filter></svg>
<div class="plate"><div class="win"><aside><!-- sidebar --></aside>
 <div class="board"><div><div class="card"><b>Hannah Lindqvist</b></div><div class="card"><small>New patient</small><br><b>Intake form still missing page two</b></div></div><!-- 3 columns, 2-4 cards, mixed heights --></div>
</div></div>
```

<!-- v:product.app-window/window-on-photo-plate -->
### `window-on-photo-plate`

*Physical light on software: a window that exists in a room.* Quality 5/5, 3 sites.

**Use:** Premium SaaS and AI tools that want warmth or materiality with no illustration. **Not:** When you have no good photograph. A stock office makes it worse than a flat plate.

**Recipe:** Panel 660-1390px, radius 8-12, real texture or interior photograph with fine grain. App window centred or inset 48-90px, soft shadow, radius 8-12. Optional faux 11px menu bar across the top. Texture stays low contrast, so the window keeps the eye. Factory uses tiled shower-wall texture; Customer.io uses a sunlit office with the app inset 80px and cropped by the logo band below it; Vapi blurs the ground and sets a translucent dark dashboard on it. Choose texture over scene when in doubt: texture cannot clash with the UI.

**Seen on:** Customer.io (gold), Factory (gold), Vapi. **Suits:** light-precision; ai, saas.

<!-- v:product.app-window/section-edge-cut-dashboard -->
### `section-edge-cut-dashboard`

*Scale: the dashboard is too large for the section that holds it.* Quality 5/5, 2 sites.

**Use:** Finance and data products with a real dashboard, placed mid-page. **Not:** Anywhere the next section cannot take the overlap, such as on full-bleed photography.

**Recipe:** Dashboard 1080-1200px with no chrome, radius 8-12, layered shadow, real nav, chart and table. It straddles a section change: the next section's angled edge or colour break hides its base. It must never simply end inside one section. Stripe's next section cuts it with a white edge at about -5 degrees and keeps its purple only inside the mock. Insomnia straddles a white-to-dark break with a 2px pale rim and a thin spectrum line along the bottom.

**Seen on:** Stripe Connect (gold), Insomnia. **Suits:** light-precision; devtool, finance.

<!-- v:product.app-window/window-plus-floating-panel -->
### `window-plus-floating-panel`

*Context behind, the feature in front.* Quality 5/5, 2 sites.

**Use:** A product with one new capability, such as an agent, a payment form or a side panel. **Not:** When both layers need reading. The back layer must be able to fail as texture.

**Recipe:** Main window 800-1100px wide plus one smaller panel 296-436px overlapping an edge by 40-120px. Panel has its own fill, radius 12-16 and a soft shadow, or on dark a lighter fill and no shadow. Window shows context, panel shows the feature. Tana places a dark call window on a pastel plate with a 436px agent panel overlapping right. Stripe overlaps an order card on a data table, with a striped line pattern behind.

**Seen on:** Tana (gold), Stripe (gold). **Suits:** light-precision, gradient-light; saas, finance.

<!-- v:product.app-window/chromeless-product-canvas -->
### `chromeless-product-canvas`

*No software at all, just your things.* Quality 5/5, 1 site.

**Use:** Consumer tools where the content is the product: saved items, photos, notes. **Not:** B2B tools, where it can read as an empty promise.

**Recipe:** No window. A tinted panel about 845px wide is the app: oversized search line in display type, a hairline, then 4 masonry columns of 170px with a 16px gap mixing photos, quotes, highlighted notes and price tags. It works on content variety alone, so every tile must be a different kind of thing.

**Seen on:** mymind (gold). **Suits:** gradient-light; saas.

<!-- v:product.app-window/dimmed-app-spotlit-modal -->
### `dimmed-app-spotlit-modal`

*One thing on a noisy screen matters.* Quality 5/5, 1 site.

**Use:** Showing a review, approval or setup step inside a large product. **Not:** Any screen that has no single moment worth isolating.

**Recipe:** 1080px browser frame, app dimmed by a dark gradient that fades to page colour at the base. Centred 500px white modal, 1px accent border, soft matching glow, 56px rows split by hairlines. Supporting logos overlap its lower edge.

**Seen on:** Chromatic. **Suits:** dark-precision; devtool.

<!-- v:product.app-window/split-tool-window -->
### `split-tool-window`

*Input and output in one glance. The product explains itself.* Quality 5/5, 1 site.

**Use:** Developer tools where code produces a visible result. **Not:** Products whose output is another table.

**Recipe:** Window about 1230px, radius 24, 1px ink-14% border, dots left, view toggles right. Three panes: 200px file list, mono code centre, rendered output right on a soft radial glow. Selecting a file tints it and changes code and output together. Pair with the code-block variant `code-with-rendered-result` when the window chrome is not needed.

**Seen on:** Resend (gold). **Suits:** dark-precision; devtool.

<!-- v:product.app-window/stage-cropped-window -->
### `stage-cropped-window`

*A close look at a tool on a dark bench.* Quality 5/5, 1 site.

**Use:** Consumer utilities and creative tools with a few big controls worth reading. **Not:** Long lists or tables, which lose their sense when cropped from two sides.

**Recipe:** Black stage about 1190x550, radius 20, one dim colour glow in a corner. Real editor window offset right and down, clipped by the right and bottom edges, 1px light border, radius 20. Sliders and toggles stay legible at true scale. The glow is dim and off-axis. Centred glows behind windows are the common AI tell.

**Seen on:** CleanShot X (gold). **Suits:** gradient-light; saas.

<!-- v:product.app-window/tabbed-frame-window -->
### `tabbed-frame-window`

*A serious product tour you can drive yourself.* Quality 5/5, 1 site.

**Use:** Platforms with three or four distinct surfaces. **Not:** One-screen products. Empty tabs read as padding.

**Recipe:** Row of 3-4 equal tabs, 48px tall with 1px dividers, docked to the frame top and sharing its border. Active tab tinted with a 2px accent top line, label 16/600. Screenshot inset 40px inside the frame with its own 1px border. Tabs swap the whole view. Verified on Amplitude: 1132px frame, 283px tabs, radius about 4. The screenshot carries real pills, tables and chat at about 12px.

**Seen on:** Amplitude (gold). **Suits:** light-precision; saas.

<!-- v:product.app-window/side-bleed-capture -->
### `side-bleed-capture`

*Evidence beside an argument, not a stage.* Quality 4/5, 4 sites.

**Use:** Feature rows that alternate copy and product down a long page. **Not:** The hero. It has too little presence there.

**Recipe:** Product 750-900px wide, flush to the right gutter or bleeding off the viewport. Small 11-13px UI left unretouched, 1px border, radius 10. Copy large on the left. No shadow on dark pages; light chrome bar optional on light ones. Inngest dims inactive captures with their row. Storybook adds a slate browser bar with a localhost pill, a small true detail that sells it to developers.

**Seen on:** Buildkite (gold), Inngest (gold), Paddle, Storybook. **Suits:** dark-precision, light-precision, warm-neutral; devtool, finance.

<!-- v:product.app-window/glow-bezel-window -->
### `glow-bezel-window`

*A screen in a dark room.* Quality 4/5, 2 sites.

**Use:** Game-like, education or crypto products with a deep dark UI. **Not:** Precision SaaS. A coloured glow is the first thing that cheapens a light or serious page.

**Recipe:** Dark screen 800-880px wide, 3-4px bezel in a pale accent, soft outer glow, radius 20, no window chrome. One small notch or hardware hint at most. It reads as a device without drawing one.

**Seen on:** Synthesis, DeepNode AI. **Suits:** bold-colour, render-3d; education, ai.

<!-- v:product.app-window/recorded-loop-with-pause -->
### `recorded-loop-with-pause`

*Real footage, with the visitor still in charge.* Quality 4/5, 2 sites.

**Use:** Editors and canvases too complex to rebuild in DOM. **Not:** Anything you could rebuild. Recordings go soft at scale and cannot follow your palette.

**Recipe:** Recorded product video 1000-1200px wide with UI text readable at 11-12px, radius 12-24, cropped or fully framed. A 36-40px circular pause button sits in a corner. Use a different recording per section; never one clip reused. Penpot rearranges the project per feature, which is why it does not feel like one screenshot on repeat.

**Seen on:** Penpot, Calvyn. **Suits:** gradient-light; saas.

<!-- v:product.app-window/tilted-backplates -->
### `tilted-backplates`

*Friendly and slightly hand-placed, a docs-site warmth.* Quality 4/5, 1 site.

**Use:** Small screenshots down a long developer page. **Not:** Heroes, and premium brands. It reads as approachable, not expensive.

**Recipe:** Screenshot about 400x300, radius 12, soft shadow. Behind it two flat plates rotated -3 and +3 degrees, one dark and one accent, each showing a single corner. Repeat the identical stack on every feature row.

**Seen on:** Electron. **Suits:** light-precision; devtool.

<!-- v:product.app-window/mini-window-grid -->
### `mini-window-grid`

*Many channels, none of them read.* Quality 3/5, 2 sites.

**Use:** Showing where a product reaches: mail, chat, CRM. **Not:** Any time the content could be real. Skeleton bars in a marketing page read as unfinished.

**Recipe:** Two-up small windows 8-12 radius, 1px border, true chrome colours per channel, around 11px type. Use skeleton bars only when the point is the channel rather than the content. Prefer one real window over this.

**Seen on:** Noxus, Drop Highlight. **Suits:** gradient-light, expressive; ai, saas.

### Mistakes that cheapen app windows

- Showing the frame's bottom edge. Our inset sheet ended at the fold line with its base visible and immediately read as a drawing. Make the window taller than the space and let the page cut it.
- Setting all sidebar text in one mid-grey. Primary rows belong at 82-86% ink with icons a step dimmer.
- A window fill that is too light on a dark page. Our first version looked like a grey box until the ground dropped to within a few lightness points of the page.
- One flat box split by a divider. Raise the main pane as a sheet with its own hairline and radius.
- Cloned content. Our first kanban used identical card heights and looked generated at once. Vary line counts and let the last card crop.
- An H1 aligned to the frame instead of the window's content, so the left edge steps by 20px for no reason.
- Plain CSS gradient plates. They read as generated, so add real image or low-frequency noise.
- Coloured glow or a mesh gradient centred behind the window. It is the most recognisable AI-template move.
- Perspective tilts on a window. They read as stock. No app-window row in this corpus tilts a full window.
- A shadow on dark. It does nothing there. Use a lighter fill and a hairline.

## UI fragments

A fragment is one slice of the product, taken out of its window and set to work inside a section. This is the most used element in the family, and it is what replaces icon cards. It must prove one specific thing, so choose the single moment that carries the claim: the row that got flagged, the node that is running, the menu item under the cursor. Great fragments are real components at real size in a quiet well. Cheap ones are generic rounded cards holding a heading, two grey lines and a chart that means nothing.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Width | 280 / 372 / 515px | n=53 |
| Radius | 8 / 12 / 16 | n=23 |
| Text | 12 / 14 / 16px | n=109 |
| Table rows | 36-38px dense, 51-60 relaxed |  |
| Node size | 160-216 by 52-74px |  |
| Well padding | 16-48px |  |
| Cropped or faded | 31 of 112 by spec text | the real share is higher |
| Cursor shown | 15 rows across the family | a large cursor marks the moment |

<!-- v:product.ui-fragment/mini-ui-in-wells -->
### `mini-ui-in-wells`

*Honest components, shown at their real size.* Quality 5/5, 10 sites.

**Use:** Feature grids with no images. The strongest cure for three-icon cards. **Not:** When you only have one or two features. One well looks like a placeholder.

**Recipe:** Grey well or hairline tile, radius 14-20. One real component centred at true 13-15px: white card, 1px border, radius 12-14. No scale, tilt or window chrome. Give each well one state, such as a tooltip or a checked row. Most-used variant here. AuthKit nests white 12-radius panels in a 20-radius tray. Vercel uses radius-0 hairline tiles fading to white, with live-typed UI inside. Better Auth runs 24px miniature proof chips in 10px mono as a hero strip.

**Seen on:** 099 (gold), AuthKit (gold), Better Auth (gold), Brilliant (gold), Cal.com (gold), Loops (gold). **Suits:** light-precision, warm-neutral, photo-led; devtool, ai, saas, education, other.

<!-- v:product.ui-fragment/brand-redrawn-ui -->
### `brand-redrawn-ui`

*The interface, spoken in the brand's own accent.* Quality 5/5, 7 sites.

**Use:** Brands with a strong shape language, where a raw screenshot would look foreign. **Not:** Brands with no geometry of their own.

**Recipe:** Redraw product UI in brand geometry: deep brand fill, 2px white outline and one accent chip; or a notched card with an inverted corner; or 1.5px ink-stroked widgets. Shape and colour come from the brand, the data stays real. Hotjar's notched card has a pointer bump tied to the step tabs above it. Perplexity abstracts surrounding UI to 14px grey bars and keeps one real image, which points the eye to the prompt.

**Seen on:** Comet (gold), Factory (gold), Astral (gold), Hotjar, Twilio, Auth0. **Suits:** dark-precision, light-precision, warm-neutral, bold-colour, illustrated; devtool, ai, saas, health.

<!-- v:product.ui-fragment/card-on-photo -->
### `card-on-photo`

*A person's life with software lightly on top.* Quality 5/5, 7 sites.

**Use:** Human or consumer products. It keeps warmth on a product page. **Not:** When the photo has its subject under the card.

**Recipe:** Portrait or textured photo, radius 6-20. One sharp card pinned low, inset 20px, radius 16, 60px rows of 14px type. Or 270px frosted cards at 85% white. Photo stays at real scale, card carries all the detail, and one row fades to imply life. Cal.com halftones its photo, which turns a casual snapshot into a graphic. Revolut uses no card at all: a 1px 40% white outline with text and soft shadow. Polar puts a near-black window on grainy sand with no colour anywhere, so the plate and UI contrast by texture.

**Seen on:** Cal.com (gold), Polar (gold), Revolut (gold), Soundsensing (gold), Decagon (gold), Warp Pricing (gold). **Suits:** photo-led, light-precision, dark-precision, soft-pastel; saas, devtool, finance, ai.

```html
<style>
.plate{position:relative;width:min(600px,100%);height:730px;border-radius:20px;overflow:hidden}
.plate img{width:100%;height:100%;object-fit:cover;display:block}
.plate::after{content:"";position:absolute;inset:0;mix-blend-mode:multiply;background:radial-gradient(circle,#000 0 34%,#fff 42%) 0 0/4px 4px} /* optional halftone */
.card{position:absolute;z-index:1;left:20px;right:20px;bottom:20px;border-radius:16px;background:var(--bg);box-shadow:0 12px 40px rgba(0,0,0,.28)}
.r{display:grid;grid-template-columns:32px 1fr auto;gap:1px 12px;align-content:center;align-items:center;height:60px;padding:0 16px;border-bottom:1px solid var(--line);font-size:13px;line-height:17px}
.r .av{grid-row:1/3;width:32px;height:32px;font-size:12px}.r time{color:var(--ink-3)}.r .p{grid-column:2/3}.r .p span{color:var(--ink-2)}
.r.old{opacity:.32}
</style>
<div class="plate"><img src="photo.jpg" alt="">
 <div class="card">
  <div class="r old"><span class="av">IB</span><b>Ilse Brandt</b><time>08:05</time><div class="p trunc">Shift swap <span>Moving the Lido date</span></div></div>
  <div class="r"><span class="av">TR</span><b>Tomas Reyes</b><time>16:22</time><div class="p trunc">Saturday load-in <span>Can the van arrive by three?</span></div></div>
 </div></div>
```

<!-- v:product.ui-fragment/frozen-interaction -->
### `frozen-interaction`

*The exact moment of use, paused.* Quality 5/5, 7 sites.

**Use:** Editors, calendars and design tools, wherever a command is the point. **Not:** Products with no signature action.

**Recipe:** One menu or dialog at 1-2x over its app faded to 30%: 392px white menu, radius 12, soft shadow, selected row filled with a 2px accent bar, shortcut chips. A large cursor rests on the row. Keycaps may overlap the edge. Notion uses one dark menu on a light page, so it is the only dark object present. Figma doubles the menu scale and shrinks the board to texture. Spline adds 1px selection boxes with 6px handles and coloured named cursors. Penpot lets a dialog break 30px out of the frame.

**Seen on:** Notion Calendar (gold), Spline (gold), Kiro, Penpot, FigJam, Canva. **Suits:** bold-colour, light-precision, dark-precision, gradient-light; saas, ai, other.

<!-- v:product.ui-fragment/workflow-node-graph -->
### `workflow-node-graph`

*The product thinking in public.* Quality 5/5, 7 sites.

**Use:** Automation, agents, pipelines, deploys. **Not:** Linear flows of three steps, which are a list pretending to be a graph.

**Recipe:** White nodes 160-216 by 52-74px, radius 6-12, 1px line, active 1px accent. Rounded elbow connectors, 7px ports. Status chips above nodes: green completed, accent running. Unfired paths grey. 16-28px dot grid on a tint. Bleed off one edge. Draw connectors in SVG with 8-16px rounded elbows. Straight diagonal lines are the giveaway of a fake graph. Render.com puts service cards on a pastel plate with a live deploy log beside them.

**Seen on:** Attio (gold), Buildkite (gold), Loops (gold), Render (gold), Trigger.dev, Lonvital. **Suits:** light-precision, dark-precision, warm-neutral; devtool, saas, health.

```html
<style>
.canvas{position:relative;height:520px;overflow:hidden;background:radial-gradient(circle,color-mix(in srgb,var(--ink) 14%,transparent) 1px,transparent 1.2px) 0 0/16px 16px,color-mix(in srgb,var(--accent) 5%,var(--surface))}
.canvas svg.w{position:absolute;inset:0;width:1040px;height:520px;fill:none;stroke:var(--accent);stroke-width:1.5}
.n{position:absolute;width:216px;height:74px;padding:10px 12px;border-radius:12px;background:var(--bg);box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 12%,transparent);font-size:14px;font-weight:500}
.n.a{box-shadow:0 0 0 1px var(--accent)}.n small{display:block;margin-top:5px;font-size:12px;font-weight:400;color:var(--ink-2)}
.st{position:absolute;top:-22px;right:8px;font-size:12px;color:var(--ok)}
.pt{position:absolute;right:-4px;top:50%;width:7px;height:7px;margin-top:-3.5px;border-radius:50%;background:var(--bg);box-shadow:0 0 0 1.5px var(--accent)}
</style>
<div class="canvas">
 <svg class="w" viewBox="0 0 1040 520"><path d="M276 90H420"/><path d="M636 90H720q16 0 16 16v42q0 16-16 16H76q-16 0-16 16v62q0 16 16 16h24"/></svg><!-- elbows, 16px radius, never diagonal -->
 <div class="n" style="left:60px;top:53px"><span class="st">Triggered</span>Refund requested<small>New ticket in Billing</small><span class="pt"></span></div>
 <div class="n a" style="left:420px;top:53px"><span class="st">Completed</span>Check the order<small>Pull charges and delivery scans</small><span class="pt"></span></div>
 <div class="n a" style="left:100px;top:231px"><span class="st">Completed</span>Policy agent<small>Score against refund rules</small><span class="pt"></span></div>
</div>
```

<!-- v:product.ui-fragment/agent-chat-panel -->
### `agent-chat-panel`

*The assistant has already started.* Quality 5/5, 6 sites.

**Use:** AI features. The current default for any agent product. **Not:** Generic products with a bolted-on chat. It says nothing specific.

**Recipe:** Panel 292-538px, radius 12-16, 1px line. Dark or tinted user bubble, plain 13-14/18-20 reply with bold findings, a Thinking line, a Changes box with Undo, composer with model picker and 24px icons. No avatars on messages. Show the agent's work, not its chat: file chips, an item count, a diff, a Done state. Bild tints extracted phrases in the transcript, which proves understanding without a word of claim.

**Seen on:** Framer (gold), Ramp (gold), Amplitude (gold), Loops (gold), Vercel AI SDK (gold), BILD. **Suits:** light-precision, dark-precision, warm-neutral, render-3d; saas, devtool, finance.

<!-- v:product.ui-fragment/data-table-crop -->
### `data-table-crop`

*Real work at real density. The most trusted fragment in fintech and CRM.* Quality 5/5, 6 sites.

**Use:** B2B, finance, CRM, ops. Anything where rows are the product. **Not:** Consumer brands. Also tables with fewer than about six rows, which look like a mock.

**Recipe:** Table bleeding off a tinted cell's right and bottom edges. 13-14px, rows 36-38px or 60 relaxed, hairlines, tabular right-aligned numbers, 12px grey headers, 16px logos, tinted score chips. Invent specific entities. One row selected. Crop it; do not fade early. Increase sets bold amounts then grey secondary numbers in the same row, which is what real finance tables do. Attio ghosts an email composer over the right third, so the table is mid-action. Public shows static rows on top and inline selects lower down, implying an editable sheet.

**Seen on:** Attio (gold), Increase (gold), Public (gold), Ramp (gold), ReadMe, Noxus. **Suits:** light-precision, gradient-light, mono-technical; finance, ai, saas, devtool.

```html
<style>
.well{position:relative;height:600px;padding:44px 0 0 44px;overflow:hidden;background:color-mix(in srgb,var(--accent) 5%,var(--surface))}
.t{width:1040px;border-radius:12px 0 0 0;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 8px 30px rgba(20,30,60,.06);font-size:13px}
.t table{border-collapse:collapse;width:100%}
.t th,.t td{height:36px;padding:0 10px;text-align:left;white-space:nowrap;border-bottom:1px solid var(--line)}
.t th{height:32px;font-weight:500;color:var(--ink-2)}.t th+th,.t td+td{border-left:1px solid var(--line)}
.sc{display:inline-grid;place-items:center;width:30px;height:20px;border-radius:5px;font-size:12px;font-weight:600;color:var(--ok);background:color-mix(in srgb,var(--ok) 13%,transparent)}
.n{text-align:right;font-variant-numeric:tabular-nums}
/* ghost composer: the data stays readable under it. A solid panel would hide the evidence */
.over{position:absolute;right:0;top:100px;bottom:0;width:420px;padding:18px 18px 18px 26px;font-size:13px;color:var(--ink-3);background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--bg) 88%,transparent) 22%)}
@media(max-width:760px){.well{height:480px;padding:20px 0 0 16px}.t{width:760px}.over{display:none}}
</style>
<div class="well"><div class="t"><table>
 <tr><th>Account</th><th>Health</th><th>Owner</th><th>Signal</th><th class="n">ARR</th></tr>
 <tr><td><u>Tessel Foods</u></td><td><span class="sc">96</span></td><td>Jonas Okoye</td><td>Added 34 seats in September</td><td class="n">$182,400</td></tr>
 <tr style="background:color-mix(in srgb,var(--accent) 4%,transparent)"><td><u>Mistral Couriers</u></td><td><span class="sc" style="color:var(--warn);background:color-mix(in srgb,var(--warn) 14%,transparent)">71</span></td><td>Jonas Okoye</td><td>Usage down 18% since August</td><td class="n">$64,200</td></tr>
 <!-- 10 or more rows, so the cell cuts them mid-row -->
</table></div><aside class="over"><!-- drafted reply, dim, mid-action --></aside></div>
```

<!-- v:product.ui-fragment/embedded-working-product -->
### `embedded-working-product`

*Not a picture of the product. The product.* Quality 5/5, 6 sites.

**Use:** Search, libraries, pickers, editors with light data. **Not:** Anything that needs an account to be real.

**Recipe:** Real working UI inline with no frame: a 1136px search with four selects, a count and a pager; or 52x76 date chips with masked ends; or a typed block with a caret. Full size, keyboard reachable, and it must work on a phone. Struck embeds its whole document library. Zed's inline key chips are the small end of this idea, at 13px on a pale fill with radius 3.

**Seen on:** Function Health (gold), Struck, DOT Audio Recorder, Tally, Zed Docs, Shopify Polaris. **Suits:** warm-neutral, light-precision, mono-technical, dark-precision, illustrated; devtool, saas, health, ai.

<!-- v:product.ui-fragment/fading-live-feed -->
### `fading-live-feed`

*Work is happening right now, and it will not stop.* Quality 5/5, 6 sites.

**Use:** Infrastructure, webhooks, agents, deploys, logs. **Not:** Anything with few events. A feed of three is not a feed.

**Recipe:** Stack of 51-60px rows or sentence-rows with status chips, each row dimmer than the last: 100, 70, 40, 15%. 12px mono names, 9-12px status chips, timestamps. Mask or blur the base. A new row can arrive at the top. Resend writes events as sentences with bordered value chips joined by a vertical line, which reads far more human than a table. Airpost dims rows progressively and marks the active one with a blue hairline.

**Seen on:** Cloudflare Workers (gold), Resend (gold), Airpost: The Frontier Marketing OS for Frontier Companies, Hugging Face, Svix, PostHog. **Suits:** light-precision, dark-precision, expressive; devtool, ai, saas.

<!-- v:product.ui-fragment/layered-panels-on-gradient -->
### `layered-panels-on-gradient`

*Precision floating on colour, the classic finance look.* Quality 5/5, 5 sites.

**Use:** Payments and billing, or any product with a rich brand gradient. **Not:** Unbranded gradients. On a default purple blend it collapses into the AI template.

**Recipe:** Two or three white panels with 10-13px type, radius 6-14, overlapping at two depths on a rich gradient that leaks around them, soft tinted shadow, cropped by the card edge. Real labels, segmented controls, plans and prices. Bauhaus Clock shows a settings sheet at full size on watercolour, which is the same idea with a far quieter ground. Mixpanel adds a 4px translucent white rim to the chart card.

**Seen on:** Bauhaus Clock (gold), Devin Desktop (codeium.com redirect) (gold), Stripe (gold), Mixpanel, Orbit Design. **Suits:** light-precision, gradient-light; finance, saas, ai, agency.

<!-- v:product.ui-fragment/admin-panel-fragment -->
### `admin-panel-fragment`

*A believable boring screen, which is exactly why it convinces.* Quality 5/5, 4 sites.

**Use:** Finance, compliance, ops. Anything sold on control. **Not:** Lifestyle brands.

**Recipe:** Panel 540-1080px, radius 8, 1px dividers, real settings: sliders, count pills, ticks or ring progress, accordion rows. True 13-15px text. Right half may tint one step. Around 60px soft shadow. Ghost the chrome to 10% contrast, if used. Stripe's address bar sits at about 10% contrast so content leads. Obsidian's single white panel on a dark page takes the eye with no glow at all.

**Seen on:** Stripe Atlas (gold), Buildkite (gold), Obsidian, Supabase Pricing. **Suits:** light-precision, gradient-light, dark-precision; saas, finance, devtool.

<!-- v:product.ui-fragment/handled-object -->
### `handled-object`

*Software you could pick up.* Quality 5/5, 4 sites.

**Use:** Note, reading and tablet products with a physical point of view. **Not:** Enterprise pages, where a tilt looks unserious.

**Recipe:** UI drawn as a physical thing: a 384px note with a perforated edge, cards rotated 5 degrees, tags rotated 10 hanging off a sheet, soft 20/40 shadow. Specific human content. A slight break of the grid gives flat UI a handled quality. The content has to be human. Tilted cards with lorem or marketing text are a template.

**Seen on:** mymind (gold), reMarkable (gold), Bear, Readwise. **Suits:** gradient-light, warm-neutral, illustrated; saas, brand.

<!-- v:product.ui-fragment/masked-dissolve-crop -->
### `masked-dissolve-crop`

*A piece of the product surfacing out of the dark.* Quality 5/5, 4 sites.

**Use:** Dark-precision sections and changelogs. Any time a full window would be too heavy. **Not:** Light pages with coloured grounds, where a mask to white looks like a printing error.

**Recipe:** Product panel 400-480px wide with no frame on page colour. Mask right and bottom into the page. Text 11-13px, dim except one focal row at full ink. Optional raised card in front with a lighter fill, no glow. 60px air above and below. Use a CSS mask, never a gradient overlay: it survives any background. Linear keeps a 480px thread card raised at radius 16 in front of a kanban that dissolves behind it. The back layer must physically run under the front card, or there is no depth. Better Stack blurs the whole card to about 30% and keeps one sharp panel forward.

**Seen on:** Expo (gold), Linear (gold), Resend Changelog (gold), Better Stack. **Suits:** dark-precision, light-precision; devtool, saas.

```html
<style>
.stage{position:relative;height:430px;overflow:hidden}
.board{position:absolute;left:150px;right:-40px;top:32px;bottom:0;display:grid;grid-template-columns:repeat(4,312px);gap:12px;
 mask-image:linear-gradient(#000 45%,transparent 96%),linear-gradient(90deg,#000 55%,transparent 92%);mask-composite:intersect}
.c{padding:12px;margin-bottom:10px;border-radius:9px;background:var(--surface);box-shadow:0 0 0 1px var(--line);font-size:13px}
.thread{position:absolute;left:0;top:0;bottom:-40px;width:480px;padding:18px;border-radius:16px 16px 0 0;
 background:color-mix(in srgb,var(--ink) 5%,var(--surface));box-shadow:0 0 0 1px var(--line),0 0 0 8px var(--bg)} /* 8px page-colour ring separates it from the board */
.m{display:grid;grid-template-columns:28px 1fr;gap:12px;margin-bottom:18px;font-size:14px}
.m .av{width:28px;height:28px;border-radius:6px;font-size:11px;background:hsl(var(--h) 10% 30%)}
</style>
<div class="stage">
 <div class="board"><div><div class="c"><span class="mono">OPS-926</span><br>Pallet scans drop offline at Dock 4</div></div><!-- the first column must run under the card --></div>
 <aside class="thread"><div class="m"><span class="av" style="--h:80">EL</span><div><b>Elias</b> 2:09 PM<br>Anyone else seeing the scanners go dark after shift change?</div></div></aside>
</div>
```

<!-- v:product.ui-fragment/single-control-enlarged -->
### `single-control-enlarged`

*One detail, held up to the light.* Quality 5/5, 4 sites.

**Use:** Utilities and design systems with a beautiful control. **Not:** Dense platforms, where one control undersells the depth.

**Recipe:** One real control scaled 1.5-2x inside a tile and cropped by its edge: a pill, keycap or field with a click ring and cursor. Frosted white fields, radius 14, or about 100px of air each side if uncropped. No window. Scale with CSS `zoom` or by re-specifying sizes, never with `transform: scale` on rasterised text.

**Seen on:** CleanShot X (gold), Apple Intelligence (gold), Material 3, Rabbit. **Suits:** gradient-light, light-precision, soft-pastel, bold-colour; saas, ai, devtool, brand.

<!-- v:product.ui-fragment/traced-flow-of-cards -->
### `traced-flow-of-cards`

*Follow the money, or the message, across real objects.* Quality 5/5, 3 sites.

**Use:** Fintech and platforms where something moves between parties. **Not:** When the cards have nothing specific to say.

**Recipe:** Real UI cards joined by 1px dashed or thin accent connectors. Greyed source pills feed a 240px status card with a 44px icon tile and four 11px mono states on a dot-line. White cards, soft shadow, pale panel, radius 4-16.

**Seen on:** Modern Treasury (gold), Speakeasy (gold), Lemon Squeezy. **Suits:** light-precision, bold-colour; finance, saas, devtool.

<!-- v:product.ui-fragment/vertical-step-timeline -->
### `vertical-step-timeline`

*A feature explained with no sentence.* Quality 5/5, 3 sites.

**Use:** Rules, retries, approvals, automations. **Not:** More than about five steps.

**Recipe:** Vertical list on a 1px connector with 32px icon tiles, then either token chips forming a sentence at 16-18px, or Failed, Retry and Paid steps with dates at the right. One step boxed in 1px accent, radius 8. Ramp adds an oversized black cursor with a role tag mid-action, which turns a static rule into someone working.

**Seen on:** Ramp (gold), GoCardless, Weekstack. **Suits:** light-precision, warm-neutral; finance, saas.

<!-- v:product.ui-fragment/side-by-side-proof -->
### `side-by-side-proof`

*Same input, better result. The claim proves itself.* Quality 5/5, 2 sites.

**Use:** Agents, search and developer tools with a measurable difference. **Not:** When the difference is too subtle to see in one glance.

**Recipe:** Tray 692x406, radius 16, 1px border, holding two equal 322px white windows with one prompt and two outcomes. Or a 1078px container split 50/50, pale column and dark column. A single accent marks the better result.

**Seen on:** Sourcegraph (gold), Docker. **Suits:** dark-precision, light-precision; devtool.

<!-- v:product.ui-fragment/float-card-on-wash -->
### `float-card-on-wash`

*A single friendly object on a soft ground.* Quality 4/5, 5 sites.

**Use:** Consumer finance, wellness, education. **Not:** Dense B2B. It reads as a lifestyle app.

**Recipe:** Single white card 340-440px, radius 24-32, hue-tinted 24px shadow, on a pale wash. 40px icon tile, 16px name, 14px muted detail, right-aligned amount. One object, no frame. Add a faded card behind for depth.

**Seen on:** Copilot, Sparkle — Stars to Habits, Weekstack, Rippling, Pomegranate Health. **Suits:** gradient-light, warm-neutral, bold-colour, illustrated; saas, finance, education, health.

<!-- v:product.ui-fragment/persistent-overlay -->
### `persistent-overlay`

*A piece of the product that travels with you.* Quality 4/5, 4 sites.

**Use:** Products that live in an overlay or a dock. **Not:** As decoration. It must be the product's real overlay.

**Recipe:** The product's own overlay as a page constant: about 110px round camera over a shot with a control pill, or a 366x60 dock of 40px icons, idle at 40% with an active dot, or a 296px widget 24px from the corner.

**Seen on:** Claude (gold), Asana (gold), Loom, N26. **Suits:** warm-neutral, bold-colour, photo-led, light-precision; saas, ai, finance.

<!-- v:product.ui-fragment/metric-card-cluster -->
### `metric-card-cluster`

*A dashboard reduced to its three best numbers.* Quality 4/5, 3 sites.

**Use:** Reliability and performance claims. **Not:** Invented vanity numbers with no unit or time window.

**Recipe:** Two or three cards, radius 20-24, the middle one wider and overlapping: status chips, 40px metric in accent, bar spark with 1hr, 30m, Now labels, shadow 0 8 24. Or dark tiles that overlap and bleed off every edge.

**Seen on:** Lithic (gold), Central, LaunchDarkly. **Suits:** bold-colour, light-precision, dark-precision; devtool, finance, saas.

<!-- v:product.ui-fragment/prompt-and-tone-controls -->
### `prompt-and-tone-controls`

*Press one thing, see one thing change.* Quality 4/5, 3 sites.

**Use:** Writing, voice and generation tools. **Not:** Controls that change nothing visible.

**Recipe:** 400px tinted card, radius 16. Three 52px chips, radius 12, active one solid. A white result bubble below at 16/600 changes per chip. Or a prompt box with template chips and theme swatches. One control, one visible change.

**Seen on:** Wispr Flow (gold), Plumeform, Substack. **Suits:** gradient-light, warm-neutral, dark-precision; saas.

### Mistakes that cheapen ui fragments

- An overlay that hides what it sits on. Our composer was a solid panel covering the table. On Attio it is a ghost: the data stays readable beneath and the sheet dissolves. Depth needs both layers visible.
- Fading a table early. Rows need to stay crisp to the cut. Fade feeds, crop tables.
- Back layers that do not run behind the front card. An empty first column left a gap in our kanban, so the overlap read as two unrelated things.
- Big saturated initial avatars. At 36px they were the cheapest object on screen. Use 20-28px at low chroma, or real photos.
- Straight diagonal connectors in a graph. Use rounded orthogonal elbows.
- A halftone or texture so strong it fights the card. Keep the plate graphic and low in detail where the card sits.
- Every fragment in a grid given the same layout. Vary what each well shows while keeping its recipe exact.
- Fake precision with no unit or time window, such as 98% next to nothing.

## Code blocks

A code block has to be real code from the actual product, short enough to read, doing something a developer wants. Developers read it, so one invented method name costs more trust than any layout gains. Great blocks show consequence: the output, the diff, the running state. Cheap ones show a dark box, three coloured dots, a rainbow of tokens and a `hello world`. Light code is now nearly as common as dark on strong sites, so choose by page register rather than habit.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Mono size | 13 / 14 / 14px | n=32 |
| Line height | 20-24px |  |
| Radius | 8 / 12 / 16 | n=13 |
| Width | 380 / 555 / 880px | n=22 |
| Line numbers | ink at 25-30% |  |
| Header | 30-52px |  |
| Token colours | 2-3 plus ink |  |
| Light vs dark | about 45% light | of 40 rows |

<!-- v:product.code-block/code-with-rendered-result -->
### `code-with-rendered-result`

*Input and output side by side, so the claim needs no words.* Quality 5/5, 6 sites.

**Use:** Any API or SDK whose result can be seen: UI, email, audio, a flow. **Not:** Code with no visible output. Use a tabbed sample instead.

**Recipe:** Code beside its live output, split 50/50 or 40/60. Window about 1150px, radius 18, 1px line, filename bar, mono 13-14/20-24. Output is real: rendered email, running visualiser, flow diagram on a dotted pane. Change one and the other responds. Stripe pairs an 810x376 frame of 50px circular nodes on a dotted pane with a deep navy code pane. React.dev tucks a 610px white code card over the left of a pastel frame holding the result. Biome uses three panes split by hairlines: code, output, metrics.

**Seen on:** LiveKit (gold), Spline (gold), Stripe Connect (gold), Biome, React, React Email. **Suits:** dark-precision, light-precision; devtool, finance, saas.

<!-- v:product.code-block/editor-with-rail -->
### `editor-with-rail`

*It reads like an app, not a snippet.* Quality 5/5, 4 sites.

**Use:** Multi-topic SDKs and frameworks: config, database, auth, routes. **Not:** One sample. The rail would have nothing to do.

**Recipe:** Code pane about 555x340 beside a 225-258px rail of topics or files: 11-12px mono caps rows with hairlines, or 16px items, active row tinted with a 2px bar. A note pinned to the rail base. Fade the code at the bottom.

**Seen on:** Better Auth (gold), Upstash, Nuxt, Remix. **Suits:** gradient-light, render-3d, dark-precision, light-precision; devtool.

<!-- v:product.code-block/light-editor-card -->
### `light-editor-card`

*Calm, readable code that does not need a dark mode to look serious.* Quality 5/5, 4 sites.

**Use:** Light-precision sites. Code stays inside the page instead of punching a hole in it. **Not:** A dark page. Also long snippets, since white gets glaring past about 20 lines.

**Recipe:** White card, 1px hairline, radius 8-12, 48px header with dots, 13px mono filename and a real control at right, such as a run-target select. Mono 13/20 with three token colours. Clip mid-line at the cell bottom, or pair with a chat column. The header control is what makes it a tool rather than a quote. Cloudflare seats the card in a cell of faint isometric hatching, which gives code a surface without going dark.

**Seen on:** Vercel AI SDK (gold), Cloudflare Workers (gold), Render (gold), Radix UI. **Suits:** light-precision, soft-pastel; devtool.

```html
<style>
.ed{border-radius:10px;box-shadow:0 0 0 1px var(--line);background:var(--bg);overflow:hidden}
.ed header{display:flex;align-items:center;gap:8px;height:48px;padding:0 12px 0 14px;border-bottom:1px solid var(--line);font:13px var(--font-mono);color:var(--ink-2)}
.sel{margin-left:auto;display:flex;align-items:center;gap:6px;height:32px;padding:0 10px;border-radius:7px;box-shadow:0 0 0 1px var(--line);font:500 13px var(--font-text);color:var(--ink)}
.code{padding:18px 16px 20px;font:13px/20px var(--font-mono);white-space:pre;overflow:hidden}
.k{color:var(--accent)}.s{color:color-mix(in oklab,var(--accent) 55%,var(--ok))}.c{color:var(--ink-3)}.p{color:var(--ink-2)}
</style>
<div class="ed"><header>summarise-claim.ts<span class="sel">Claims API</span></header>
<div class="code"><span class="k">const</span> claim <span class="p">=</span> <span class="k">await</span> extract<span class="p">({</span>
  file<span class="p">:</span> <span class="s">'./inbound/CL-20418.pdf'</span><span class="p">,</span>
  confidence<span class="p">:</span> 0.92<span class="p">,</span>
<span class="p">});</span>
<span class="c">// anything under the floor goes to an adjuster</span></div></div>
```

<!-- v:product.code-block/tabbed-sample-panel -->
### `tabbed-sample-panel`

*Whatever you build with, we already speak it.* Quality 5/5, 4 sites.

**Use:** Multi-language SDKs, usually mid-page. **Not:** One-language products. A single tab looks abandoned.

**Recipe:** Panel 544-1024px, radius 12-24, 1px line. Language or framework tabs: 60x56 icon tiles or 90px tabs split by hairlines, active brightened, copy icon right. Mono 13-14/20-22, line numbers at 30% ink, one accent for strings. Resend gives the tile row its own row above the panel with a second framework row inside it. Anthropic's docs keep code light and fade the last tab, which signals more without a scrollbar.

**Seen on:** Resend (gold), Stripe Payments (gold), Anthropic Docs, Supabase. **Suits:** gradient-light, light-precision, warm-neutral, dark-precision; devtool, finance, ai.

<!-- v:product.code-block/dark-card-on-colour-band -->
### `dark-card-on-colour-band`

*A dark object on a loud ground.* Quality 5/5, 3 sites.

**Use:** Bold-colour and photo-led pages that need one developer moment. **Not:** Precision sites, where saturated bands feel out of register.

**Recipe:** Full-bleed saturated band. Copy left, H2 at 32px. Right, a near-black card about 600x326, radius 8, language header over hairline, mono 12, soft shadow. The endpoint string changes over time. Or pair two unequal windows, top-aligned at different heights.

**Seen on:** Ideogram, UploadThing, Anime.js. **Suits:** photo-led, dark-precision, bold-colour; devtool, ai.

<!-- v:product.code-block/api-call-card -->
### `api-call-card`

*One call, one colour, nothing to learn.* Quality 5/5, 2 sites.

**Use:** Simple APIs and warm brands. **Not:** Complex multi-step SDKs.

**Recipe:** POST pill, mono URL, hairline, 14-16px mono JSON with a single warm string colour, hairline, footer with install command, tiny sparkline and language circles. Or a deep tinted pane with one call, dim line numbers 1-10 and a block caret. One token colour replacing the syntax rainbow is the whole idea. It ties code to the brand palette.

**Seen on:** Loops (gold), Increase (gold). **Suits:** light-precision, warm-neutral; finance, saas.

<!-- v:product.code-block/code-over-product-stack -->
### `code-over-product-stack`

*From call to result, three layers deep.* Quality 5/5, 2 sites.

**Use:** Platforms with both an API and a dashboard. **Not:** When the layers do not tell one story.

**Recipe:** Dark code panel about 500px, radius 4-12, with run and copy icons, laid over a light dashboard or brand card. Three depths: terminal, object, dashboard bleeding off the right. One tinted panel behind holds them together.

**Seen on:** Lithic (gold), Together AI. **Suits:** light-precision, gradient-light; finance, ai.

<!-- v:product.code-block/diff-panel -->
### `diff-panel`

*Reviewing real work, in the product's own tool.* Quality 5/5, 2 sites.

**Use:** Dev tools, code review, anything that changes code. **Not:** Non-developer audiences.

**Recipe:** Panel about 880px, radius 12, mono 14/24, line numbers at 30% ink. Changed rows get a tinted band plus a coloured gutter number, and the exact token a 30% tint. Keep syntax colour on. Right column fades out, overlapping a real list at 85%. Do not colour the text of a changed line. Tint the row and the token. Nx does the reverse trick: untouched rows fade to 30% and changed rows stay full white with a +1 badge.

**Seen on:** Linear (gold), Nx. **Suits:** dark-precision; saas, devtool.

```html
<style>
.pan{border-radius:12px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 0 0 7px var(--bg);overflow:hidden}
.sp{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
.col{padding:14px 0;overflow:hidden;border-right:1px solid var(--line)}
.col+.col{border:0;color:var(--ink-2);mask-image:linear-gradient(90deg,#000 20%,transparent 88%)}
.l{display:flex;font:15px/24px var(--font-mono);white-space:pre;padding-right:12px}
.l i{flex:none;width:44px;padding-right:14px;text-align:right;font-style:normal;color:var(--ink-4)}
.l.del{background:color-mix(in srgb,var(--bad) 17%,transparent);box-shadow:inset 2px 0 0 var(--bad)}.l.del i{color:var(--bad)}
.l.add{background:color-mix(in srgb,var(--ok) 15%,transparent);box-shadow:inset 2px 0 0 var(--ok)}.l.add i{color:var(--ok)}
mark{color:inherit;border-radius:2px;background:color-mix(in srgb,var(--bad) 30%,transparent)}.add mark{background:color-mix(in srgb,var(--ok) 30%,transparent)}
.y{color:var(--warn)}.b{color:var(--accent)}
</style>
<div class="pan"><div class="sp">
 <div class="col"><div class="l"><i>05</i><span class="y">def</span> <span class="b">board</span>(terminal):</div>
  <div class="l del"><i>07</i>    rows = <mark>poll_gates</mark>(terminal, <mark>every=30</mark>)</div></div>
 <div class="col"><div class="l"><i>05</i>def board(terminal):</div>
  <div class="l add"><i>07</i>    rows, state = <mark>gate_stream</mark>(terminal)</div></div>
</div></div>
```

<!-- v:product.code-block/double-framed-panel -->
### `double-framed-panel`

*Documentation with a little craft.* Quality 5/5, 2 sites.

**Use:** Docs and reference pages with many blocks. **Not:** A hero, where it reads as small.

**Recipe:** Near-black outer radius 12 with 30px header of filename and copy icon. Inner lighter panel inset 4px, radius 8, mono 14/20. Highlighted lines get a 2px accent bar and tinted row. Works repeated, as every block in a doc.

**Seen on:** Tailwind Docs, lemon.markets. **Suits:** light-precision, illustrated; devtool, finance.

<!-- v:product.code-block/line-state-gutter -->
### `line-state-gutter`

*The code is running while you read it.* Quality 5/5, 2 sites.

**Use:** Durable execution, workflows, CI, anything with steps. **Not:** Static libraries, where code has no run state.

**Recipe:** Frameless grey mono 14/20 on page grain, or a black pane at 16/24. Each step gets a 2px rounded left bracket: green done, red with 10% tint running. Status pills such as COMPLETED | 1.2S hang in the left margin. State is the only colour. Temporal uses navy row fill and a 2px green bar on the running statement with tabs along the foot. Frameless needs grain or texture under it. On flat black it looks unfinished.

**Seen on:** Inngest (gold), Temporal. **Suits:** mono-technical, dark-precision; devtool.

```html
<style>
.src{position:relative;margin-left:150px;font:14px/20px var(--font-mono);color:var(--ink-2);white-space:pre}
.st{position:relative;padding:6px 12px;margin:8px 0 8px -12px;border-radius:6px;--c:var(--ok)}
.st::before{content:"";position:absolute;left:0;top:0;bottom:0;width:7px;border:2px solid var(--c);border-right:0;border-radius:7px 0 0 7px}
.st.run{--c:var(--bad);background:color-mix(in srgb,var(--c) 11%,transparent)}
.tag{position:absolute;right:calc(100% + 14px);top:50%;translate:0 -50%;height:22px;padding:0 9px;display:flex;align-items:center;border-radius:11px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--c);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c) 45%,transparent);background:color-mix(in srgb,var(--c) 12%,var(--bg))}
.src b{font-weight:600;color:var(--c,var(--ink))}
</style><!-- needs page grain or a textured surface under it -->
<div class="src">  async run({ step }) {
<div class="st"><span class="tag">Done | 1.2s</span>    const batch = await step.<b>run</b>(
      "collect-payouts", () =&gt; settle.pending(),
    );</div><div class="st run"><span class="tag">Retrying</span>    const receipt = await step.<b>run</b>(
      "send-to-bank", () =&gt; settle.submit(batch),
    );</div>  }</div>
```

<!-- v:product.code-block/one-bright-line -->
### `one-bright-line`

*A code panel used as a cover image.* Quality 5/5, 1 site.

**Use:** Changelog covers and small feature cards. **Not:** Where people need to read the code.

**Recipe:** Code panel cropped by the card edge on the left 43%, top-right radius 20, 1px top highlight. 11px language tabs. Every line at 25% ink except the single method line at full ink. Serves as texture with one readable point.

**Seen on:** Resend Changelog (gold). **Suits:** dark-precision; devtool.

<!-- v:product.code-block/request-response-split -->
### `request-response-split`

*An honest API: this goes in, that comes out.* Quality 5/5, 1 site.

**Use:** Fintech and platform APIs. **Not:** Consumer developer tools, where a one-liner is the pitch.

**Recipe:** Panel about 1200px, 1px line, radius 4. 44px tinted header: mono POST, path, two payload toggles. Request on white, 201 response on a pale success tint, 13/22 mono, one live value highlighted. Toggles swap the payload.

**Seen on:** Modern Treasury (gold). **Suits:** light-precision; finance.

<!-- v:product.code-block/one-line-command-box -->
### `one-line-command-box`

*One value, one action.* Quality 4/5, 5 sites.

**Use:** Docs, install steps, a single path or URL. **Not:** Multi-line code.

**Recipe:** Box 680x48-60, 1px line, radius 0-4, mono 14, copy icon in its own divided cell at right. No window dots, prompt symbol or syntax colour. Paper-like sites can add a hard 3px offset shadow with no blur. See `install-command-cta` under Terminal when the command is the page's main action.

**Seen on:** Neon Docs (gold), Cloudflare Docs, Fly.io Docs, Payload, Zed Docs. **Suits:** light-precision, illustrated, mono-technical, dark-precision; devtool.

<!-- v:product.code-block/inline-command-chip -->
### `inline-command-chip`

*The command belongs to the sentence.* Quality 4/5, 2 sites.

**Use:** Body copy that mentions a command or file. **Not:** Anything over about 40 characters.

**Recipe:** Inside body copy: mono 13-16px in a 26px chip, radius 4-6, 1px line, faint fill, optional copy icon at right. It sits within the line height, so the paragraph keeps its rhythm.

**Seen on:** AuthKit (gold), Postman. **Suits:** dark-precision, light-precision; devtool.

### Mistakes that cheapen code blocks

- Flat white text in a diff. We removed syntax colour to look clean and it looked dead. Keep syntax on, tint the row, and tint the exact token harder.
- Dimming the context too far. Our list behind the diff sat at 55% and stopped being evidence. The real one holds near 85%.
- A rainbow theme pasted from an editor. Three colours at most, built from ink and the accent.
- A column of code stretched by a grid row beside a shorter neighbour, leaving a dead gap. Align to start, and let both crop.
- Frameless code on flat black. Without grain or texture it looks unfinished.
- Wrapping lines. Code truncates or scrolls, it never wraps. Fade the right edge.
- Pure #000 behind code on a light page. It punches a hole. Use a light editor or a tinted deep surface.
- Fake API names, or an example that would not run. Use the real SDK, or invent consistently from the brief and keep it plausible.

## Terminals

A terminal says that this is real and that it runs. It takes two forms. The install command is an action, so it is designed like a button, with the same care. The run log is a window into a machine, so it needs a job header, a host, and a state. What separates great from cheap is whether anything is really happening. A black rectangle with three dots and `npm install` says nothing, while one with `eu-west-1`, a cpu bar and a tree of steps tells a story.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Install block height | 35 / 52 / 60px | bar, pill, block |
| Install mono | 13-16px |  |
| Log mono | 12 / 13 / 14px | n=14 |
| Log line height | 19-23px |  |
| Radius | 6 / 6 / 12 | n=5 |
| Log width | 410-720px |  |
| Black | warm or tinted near-black | never pure #000 |

<!-- v:product.terminal/status-run-log -->
### `status-run-log`

*A real machine doing a real job.* Quality 5/5, 4 sites.

**Use:** Infrastructure, agents, background jobs, payments events. **Not:** Pages for non-technical buyers, without a plain-language caption.

**Recipe:** Warm-black panel, radius 12, mono 12/19. Header: host, region, outlined status pill with dot. Subheader: cron plus cpu and mem bars. Log: grey comments, accent prompt, green bullets, tree connectors, block cursor. The last step is in progress. Render puts the current line on a lighter band with a 2px accent bar and adds six thin progress segments with pause and skip. Increase prints events with a mint live dot and arrows ending in ok. Never pure #000.

**Seen on:** Increase (gold), Render (gold), Speakeasy (gold), Maximize. **Suits:** light-precision, bold-colour; devtool, finance, agency.

```html
<style>
.term{--t:color-mix(in srgb,var(--ink) 90%,#000);width:min(560px,100%);border-radius:12px;background:#1b1a17;color:rgba(255,255,255,.58);font:12px/19px var(--font-mono);box-shadow:0 0 0 1px rgba(0,0,0,.2),0 24px 48px rgba(30,20,10,.18);overflow:hidden}
.h1{display:flex;align-items:center;gap:10px;height:40px;padding:0 14px;color:rgba(255,255,255,.92);border-bottom:1px solid rgba(255,255,255,.08)}
.h1 span{color:rgba(255,255,255,.34)}.run{margin-left:auto;display:flex;align-items:center;gap:6px;height:22px;padding:0 8px;border-radius:11px;color:#7fd4a1;box-shadow:inset 0 0 0 1px rgba(127,212,161,.35)}
.out{padding:12px 14px 14px}.cm{color:rgba(255,255,255,.34)}.w{color:rgba(255,255,255,.92)}.ok{color:#7fd4a1}.tr{padding-left:12px;color:rgba(255,255,255,.34)}
.cur{display:inline-block;width:7px;height:13px;margin-top:6px;background:#fff;animation:b 1.1s steps(2) infinite}@keyframes b{50%{opacity:0}}
@media(prefers-reduced-motion:reduce){.cur{animation:none}}
</style>
<div class="term"><div class="h1">job-runner-3<span>fra1 · 4 vCPU</span><span class="run"><span class="dot"></span>Running</span></div>
 <div class="out"><div class="cm"># unattended, triggered by the 02:30 window</div>
  <div><span class="ok">●</span> <span class="w">bank.fetch_statements</span></div><div class="tr">└ 3 statements, 1,917 lines</div>
  <div><span class="ok">✓</span> <span class="w">6 lines queued for review</span></div><span class="cur"></span></div></div>
```

<!-- v:product.terminal/install-command-cta -->
### `install-command-cta`

*The first thing you can do here is run it.* Quality 5/5, 3 sites.

**Use:** Developer tools with a real one-line install. **Not:** Products needing signup first. A fake command is worse than a button.

**Recipe:** The command is the hero action. 52px pill, hairline plus soft shadow, muted $, mono 14, 16px copy icon. Or 60px ink block, mono 16, accent $, copy in a separate clipped-corner cell, OS toggle below. Or a quiet 35px bar under the CTAs. Three weights for three jobs: pill replaces the button, block competes with it, bar defers to it. Vercel sets a small text toggle above the pill for two audiences.

**Seen on:** Bun (gold), Vercel AI SDK (gold), Factory (gold). **Suits:** light-precision, mono-technical; devtool, ai.

```html
<style>
/* pill: replaces the hero button */
.pill{display:inline-flex;align-items:center;gap:12px;height:52px;padding:0 18px;border-radius:26px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 2px 6px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.04);font:14px var(--font-mono)}
.pill s,.bar s{text-decoration:none;color:var(--ink-3)}
/* block: sits beside the hero button with equal weight */
.cmd{display:flex;align-items:stretch;max-width:520px;height:60px;background:var(--ink);color:var(--bg);font:16px var(--font-mono)}
.cmd code{flex:1;display:flex;align-items:center;gap:12px;padding:0 20px;white-space:nowrap;overflow:hidden;font:inherit;mask-image:linear-gradient(90deg,#000 90%,transparent)}
.cmd s{text-decoration:none;color:var(--accent)}
.cmd .cp{width:60px;display:grid;place-items:center;background:color-mix(in srgb,var(--bg) 14%,var(--ink));clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)}
/* bar: a quiet second path under the buttons */
.bar{display:inline-flex;align-items:center;gap:10px;width:420px;max-width:100%;height:35px;padding:0 10px;border-radius:2px;background:color-mix(in srgb,var(--ink) 6%,var(--bg));font:13px var(--font-mono)}
</style>
<div class="pill"><s>$</s>npm install tideline<svg class=ic></svg></div>
<div class="cmd"><code><s>$</s>curl -fsSL https://get.tideline.dev/install | bash</code><span class="cp"><svg class=ic></svg></span></div>
<div class="bar"><s>&gt;</s>curl -fsSL https://get.tideline.dev | sh</div>
```

<!-- v:product.terminal/tabbed-cli-switcher -->
### `tabbed-cli-switcher`

*We know you have a preference.* Quality 5/5, 3 sites.

**Use:** Docs and install sections with several package managers. **Not:** A hero with one obvious path.

**Recipe:** Box about 720px with 13px mono tabs for npm, pnpm and friends, active one boxed or underlined, hairline, one coloured command line, copy tile bottom right. Optional dashed frame offset 5px outside a solid one.

**Seen on:** Cloudflare Workers (gold), Biome, Electron. **Suits:** light-precision; devtool.

<!-- v:product.terminal/agent-setup-console -->
### `agent-setup-console`

*The setup is the hero.* Quality 5/5, 1 site.

**Use:** Agent-era developer tools. **Not:** Non-developer products.

**Recipe:** Module about 745px, radius 14, 2px near-black frame. Mono caps labels, a grey prompt pill with three agent icons and copy button, then two 1px command boxes with one syntax colour. Repeat it verbatim at the closing CTA.

**Seen on:** Convex. **Suits:** bold-colour; devtool.

<!-- v:product.terminal/character-framed-command -->
### `character-framed-command`

*A technical moment with a sense of humour.* Quality 5/5, 1 site.

**Use:** Brands with an illustration system. **Not:** Everyone else. Do not improvise a mascot.

**Recipe:** Framework dropdown, a one-line 16px sentence, then a dark code block about 950x120 with copy icon. Two brand characters lean in from both sides. The joke is on the block, not beside it.

**Seen on:** Sentry. **Suits:** illustrated; devtool.

<!-- v:product.terminal/terminal-overlapped-by-result -->
### `terminal-overlapped-by-result`

*A command becoming a product.* Quality 5/5, 1 site.

**Use:** CLIs and agents that produce UI. **Not:** Commands with no visible result.

**Recipe:** Dark terminal, radius 6, three dots, mono 12, green diamonds on steps, later lines fading out. Overlapped by the resulting UI, as a skeleton card in a tray. Spinner and a short caption below. Depth comes from overlap.

**Seen on:** AuthKit (gold). **Suits:** light-precision; devtool.

<!-- v:product.terminal/terminal-cropped-in-card -->
### `terminal-cropped-in-card`

*A small true window into the tool.* Quality 4/5, 2 sites.

**Use:** Bento cells and feature cards. **Not:** Heroes.

**Recipe:** Window about 410px, radius 8-12, dots, mono 13/23, credible output, rising from the card base on a pale fade or grain panel and cropped by the edge. A separate chip such as a ready line can float above.

**Seen on:** Vite (gold), Docker. **Suits:** light-precision, dark-precision; devtool.

<!-- v:product.terminal/typed-install -->
### `typed-install`

*Watch it happen.* Quality 4/5, 2 sites.

**Use:** Long developer pages needing a moment of motion. **Not:** Above the fold if it starts empty. An empty panel for two seconds reads as broken.

**Recipe:** Panel 720-1120px, radius 4, mono 14-16 typing one command with a caret, then output. Prompt chips with line number, truncated text and Copy sit below. Start half-typed so the panel is never blank.

**Seen on:** Auth0, Twilio. **Suits:** dark-precision; devtool.

### Mistakes that cheapen terminals

- Pure black. Terminals look best a shade warm or tinted, so they feel like a surface.
- No job header. Without host, region and status it is a code block in a costume.
- An empty panel while typing starts. Begin half-typed.
- A copy icon that does nothing. Wire it up, with a 1.5s check state. Developers will click it.
- Coloured traffic lights as the only detail. Grey them or drop them, and spend the detail on output.
- A fake command. If the product has no one-line install, use a button.

## Device mockups

A device mockup should vanish. The strongest ones are a rim of light or a thin line, and all the realism goes on the screen. Modern frames have moved away from photoreal hardware: no notch detail, no glass reflections, no floating angled iPhones. Great device shots are cropped and overlapped and have one specific screen with real content. Cheap ones are a stock mock-up floating on a gradient with a blurred screenshot inside.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Phone width | 218 / 300 / 440px | CSS phones and crops |
| Phone ratio | about 1:2 |  |
| Radius | 32 / 40 / 44 |  |
| Rim | 1-4px |  |
| UI text on screen | 12-14px |  |
| Overlap with window | 60-120px |  |
| Breakout cards | 120-196px wide | radius 8-24 |

<!-- v:product.device-mockup/dissolving-rim-phone -->
### `dissolving-rim-phone`

*The phone disappears and only the product is left.* Quality 5/5, 3 sites.

**Use:** Consumer finance and apps on black or shader grounds. **Not:** Light pages, where a rim has nothing to dissolve into.

**Recipe:** Phone drawn as a thin steel rim on black, about 440px wide, cropped by the section base. Black screen, one 48px number with small decimals, grey round actions. Or a 1px white-40% outline with no bezel over a shader. One huge number is the screen. Do not fill it with a whole dashboard.

**Seen on:** Revolut (gold), BeReal, Meridian. **Suits:** photo-led, bold-colour; finance, saas, other.

<!-- v:product.device-mockup/phone-overlapping-window -->
### `phone-overlapping-window`

*One product across two screens.* Quality 5/5, 3 sites.

**Use:** Apps with real desktop and mobile versions. **Not:** Web-only products, which it misrepresents.

**Recipe:** Window at the fold, phone 200-220px wide overlapping its lower right by 60px, 2px rim, radius 40, real content at about 14px. Depth comes from overlap alone. On light pages add a soft shadow and floating action pills between them. Perplexity sets an 810px browser with glowing page edges, a 200px phone and 50px frosted pills between them. Notion crops a laptop and phone inside a grey stage so no device base ever shows.

**Seen on:** Comet (gold), Notion Calendar (gold), Obsidian. **Suits:** warm-neutral, dark-precision, light-precision; saas, ai.

```html
<style>
.stage{position:relative;height:640px;overflow:hidden}
.win{height:640px;border-radius:8px 8px 0 0;background:var(--surface);box-shadow:0 0 0 1px var(--line)}
/* 2px rim, no shadow. On dark, overlap is all the depth you need */
.ph{position:absolute;right:-40px;top:300px;width:218px;height:480px;padding:16px 18px;border-radius:40px;background:#000;color:var(--ink-2);font-size:14px;line-height:1.4;box-shadow:0 0 0 2px color-mix(in srgb,var(--ink) 24%,#000)}
</style>
<div class="stage" style="padding:0 60px"><div class="win"><!-- real window --></div>
 <div class="ph" style="right:20px"><h4 style="margin:0 0 6px;color:var(--ink)">Sounding log</h4>Low water 05:42, 0.9 m. Wind backing south-west by noon.</div></div>
```

<!-- v:product.device-mockup/hand-held-device -->
### `hand-held-device`

*Someone is really using it, somewhere real.* Quality 5/5, 2 sites.

**Use:** Field and physical work, consumer finance. **Not:** Without a real photograph. Generated hands fail on sight.

**Recipe:** Real hands hold a tablet or phone tilted about 8 degrees, rising from the section bottom, cropped. Legible UI on screen, cool rim light. Centred two-tone 40px heading above: white, then 50% white.

**Seen on:** Soundsensing (gold), Affirm (gold). **Suits:** dark-precision, photo-led; finance, saas.

<!-- v:product.device-mockup/phone-with-breakout-cards -->
### `phone-with-breakout-cards`

*The important part jumps out of the screen.* Quality 5/5, 2 sites.

**Use:** Consumer apps with one strong widget. **Not:** Screens with no focal widget.

**Recipe:** Phone frame on a pale ground, screen faded to 30%. White cards 120x168, radius 24, overlap both phone edges with 76px progress rings and short labels. Or chips 196x66, radius 8, soft shadow, at staggered heights over a bezel.

**Seen on:** Copilot, Nurx. **Suits:** gradient-light, photo-led; finance, health.

<!-- v:product.device-mockup/gradient-stroke-phone-cluster -->
### `gradient-stroke-phone-cluster`

*Soft, clinical care with one bright thread.* Quality 5/5, 1 site.

**Use:** Health and wellness products with video. **Not:** Technical products.

**Recipe:** Video phone about 270x555, radius 32, white bezel, 3px gradient stroke drawn along only part of the edge. Landscape tablet tucked behind, joined by a thin line. Overlays such as a pose skeleton and 9/10 score sit on the video.

**Seen on:** Sword Health. **Suits:** soft-pastel; health.

<!-- v:product.device-mockup/soft-rim-phone -->
### `soft-rim-phone`

*A device in a sketch of light, with a real form inside.* Quality 5/5, 1 site.

**Use:** Payments and checkout on light gradient pages. **Not:** When the screen content is not real.

**Recipe:** Phone with no hardware detail, about 300x590, radius 44, 4px pale rim, wide soft shadow. Real checkout at 12-14px: wallet button, stacked 1px inputs, Pay button. A receipt card behind and a toast crossing both. Right edge sits on the page guide. All the realism goes on the screen. The rim is a line. Notches and buttons add nothing at this size and date fast.

**Seen on:** Stripe Climate (gold). **Suits:** light-precision, gradient-light; finance.

```html
<style>
.ph{width:300px;height:590px;padding:14px;border-radius:44px;background:var(--bg);font-size:13px;
 box-shadow:0 0 0 4px color-mix(in srgb,var(--ink) 7%,var(--bg)),0 30px 60px -12px rgba(30,40,80,.25),0 18px 36px -18px rgba(0,0,0,.2)}
.pay{height:36px;border-radius:5px;background:var(--ink);color:var(--bg);display:grid;place-items:center;font-weight:600}
.ph label{display:block;margin:10px 0 4px;font-size:12px;font-weight:500;color:var(--ink-2)}
.in{height:32px;padding:0 9px;display:flex;align-items:center;color:var(--ink-3);box-shadow:inset 0 0 0 1px var(--line)}
.in.t{border-radius:5px 5px 0 0}.in.b{border-radius:0 0 5px 5px;margin-top:-1px}
</style>
<div class="ph"><div style="text-align:center;font-weight:600">Stoneware mug, oat</div><div class="num" style="text-align:center;color:var(--ink-2);margin:2px 0 12px">$38.00</div>
 <div class="pay">Pay with wallet</div>
 <label>Card information</label><div class="in t">1234 1234 1234 1234</div><div class="in b">MM / YY</div>
 <div class="pay" style="margin-top:14px">Pay $38.00</div></div>
```

<!-- v:product.device-mockup/phone-group -->
### `phone-group`

*A whole app, not a single screen.* Quality 4/5, 4 sites.

**Use:** Consumer apps with distinct screens. **Not:** As a first choice. Three identical phones in a row is the oldest template.

**Recipe:** Three phones. Either fanned, centre forward at 400px, side phones 120-200px lower, clipped, bottoms fading to the ground; or stacked three-quarter renders on the centre axis with elliptical floor shadows. UI redrawn in brand style.

**Seen on:** Block (gold), Levels (gold), Solidcore, Pomegranate Health. **Suits:** light-precision, bold-colour, illustrated; health, local-business, finance.

<!-- v:product.device-mockup/tilted-device -->
### `tilted-device`

*Hardware with some attitude.* Quality 4/5, 3 sites.

**Use:** Voice and device-led products, agency case studies. **Not:** Precision SaaS, where 3D tilts read as stock. Also anything needing legible UI.

**Recipe:** Skew or rotate 8 degrees, black face, 1px bright rim highlight on one corner, a second offset outline behind, cropped by the card base. Or a macro 3D render at a steep angle filling the frame. Never a gentle floating tilt. A tilt must be committed. Either steep, cropped and physical, or none at all. The middle case, a 15-degree CSS perspective card, is the template look.

**Seen on:** LiveKit (gold), International Magic (gold), Roy Jad (gold). **Suits:** light-precision, dark-precision; devtool, portfolio, agency.

<!-- v:product.device-mockup/phone-flanked-by-notes -->
### `phone-flanked-by-notes`

*A guided tour around one screen.* Quality 4/5, 2 sites.

**Use:** Consumer finance and apps with 4-6 features. **Not:** More than six notes.

**Recipe:** Phone centred under the heading, cropped by scroll or by a 466px tile, radius 20. Feature notes flank left and right in staggered rows, active note on a pale card, each with a 56px icon square. Offset the tops.

**Seen on:** InkTree, Monzo. **Suits:** bold-colour, illustrated; finance, ai.

<!-- v:product.device-mockup/multi-surface-rail -->
### `multi-surface-rail`

*The same session, everywhere you work.* Quality 4/5, 1 site.

**Use:** Dev tools across editor, phone and CLI. **Not:** One-surface products.

**Recipe:** Horizontal rail of editor window, phone and CLI, all dark, top aligned, 240-520px wide, 14px captions beneath, clipped at the right to hint at more. The same session content appears on each surface.

**Seen on:** VS Code. **Suits:** light-precision; devtool.

<!-- v:product.device-mockup/same-phone-state-chapters -->
### `same-phone-state-chapters`

*One object, many moments.* Quality 4/5, 1 site.

**Use:** Mobile flows told on scroll. **Not:** Short pages.

**Recipe:** The same phone, about 245px, holds its position across chapters while the screen swaps: product, payment sheet, coupon, dashboard. Oversized props tied to each message sit around it. Copy scrolls past.

**Seen on:** Razorpay Magic Checkout. **Suits:** render-3d; finance.

<!-- v:product.device-mockup/bezel-crop-across-seam -->
### `bezel-crop-across-seam`

*Devices running off the page.* Quality 3/5, 1 site.

**Use:** Bold-colour consumer pages. **Not:** Precision sites. Heavy bezels date fast.

**Recipe:** Black-bezel tablets, radius 32, cropped by section edges across a two-colour split, holding real charts and order lists. Devices run off screen and are never shown whole.

**Seen on:** Lemon Squeezy. **Suits:** bold-colour; saas.

### Mistakes that cheapen device mockups

- Empty space inside a receipt or second surface. Our first receipt had one row and a blank half. Back layers need real content too.
- Random dots in a graph or map. Ours clustered and looked broken. Use a jittered grid so density stays even.
- A full dashboard squeezed onto a phone. Show one number, or one form.
- Notches, buttons and glass. They add nothing at this size and date the page.
- A gentle 15-degree tilt. Commit to steep and cropped, or stay flat.
- Three identical phones in a row, the oldest template here.
- Showing the device's base. Crop it with the section or fade it.

## Annotated shots

An annotated shot adds a voice to a picture: it says which part matters and why. Use it when a surface is too complex to speak for itself. The annotation must add what the image cannot say. A label reading "Dashboard" on a dashboard is noise, while "this line would have failed in production" is the point. Great annotations belong to a world, such as a technical drawing, a code review or a design tool's selection handles. Cheap ones are numbered circles on a screenshot.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Label size | 12 / 15 / 16px | n=13 |
| Leader lines | 1px, 300px or so |  |
| End dot | 3px |  |
| Callout width | 270-390px |  |
| Tilt, for notes | 3-4deg |  |
| Number discs | 20px | mono 10px |

<!-- v:product.annotated-shot/floating-tag-pills -->
### `floating-tag-pills`

*The software noticed what you noticed.* Quality 5/5, 3 sites.

**Use:** AI tagging, search, and image or document understanding. **Not:** As decoration with no product truth.

**Recipe:** Square photo about 615px with white pills floating over and past its edges, soft shadow: words, swatch plus word. Height varies 22-50px to imply depth, and grows on scroll. Annotation without leader lines. Onfly overlaps four 270px dark cards on a full-body render at staggered heights. Public flanks a white card with clipped status pills, so neighbours imply a larger surface.

**Seen on:** mymind (gold), Public (gold), Visora. **Suits:** light-precision, render-3d, gradient-light; finance, ai, saas.

<!-- v:product.annotated-shot/leader-line-callouts -->
### `leader-line-callouts`

*Precision engineering, labelled like a technical drawing.* Quality 5/5, 3 sites.

**Use:** Hardware and physical products, renders, exploded views. **Not:** Plain UI screenshots, where the labels just repeat the interface.

**Recipe:** Exploded render about 560px centred, with six callouts outside it: 12px mono caps, grey [+] prefix, on a 1px rule about 300px long ending in a 3px dot on the part. Uneven heights, both sides. Or run dotted lines up to outlined SKU pills.

**Seen on:** Prägen Hätlen (gold), Seed, David Heckhoff. **Suits:** render-3d, photo-led; health, portfolio, brand.

<!-- v:product.annotated-shot/selection-handle-marks -->
### `selection-handle-marks`

*A design tool caught mid-decision.* Quality 5/5, 3 sites.

**Use:** Design systems, checkout logic, architecture portfolios. **Not:** Non-design audiences who will not read the idiom.

**Recipe:** Key UI rows lift out as wider white bands, bracketed by 1px frames with 6px corner handles. Or corner reticles with a centred cross and 10px labels. Or layer a tinted redline box labelled with a mono width.

**Seen on:** Primer, Deebak Tamilmani Portfolio, Razorpay Magic Checkout. **Suits:** render-3d, light-precision; finance, devtool, architecture.

<!-- v:product.annotated-shot/labelled-layer-stack -->
### `labelled-layer-stack`

*Your place in the stack, at a glance.* Quality 5/5, 2 sites.

**Use:** Platforms and data tools with layers. **Not:** Flat products.

**Recipe:** Isometric slabs stacked, with 16px labels and short dash leaders at left. Fill steps through one hue from white to full accent, so the diagram is the explanation. One slab in the accent marks the new layer. Works at 390px.

**Seen on:** lemon.markets, MotherDuck. **Suits:** illustrated; devtool, finance.

<!-- v:product.annotated-shot/numbered-architecture-diagram -->
### `numbered-architecture-diagram`

*An engineer's whiteboard, made neat.* Quality 5/5, 2 sites.

**Use:** Security, infrastructure, anything crossing a trust boundary. **Not:** Simple products with one box.

**Recipe:** Native diagram: mono boxes radius 4-6, 1px lines with small nodes, pale numbered discs 01-03 along the path, dashed trust boundary, one accent VERIFIED tag, tracked 11px mono captions. Pin beside scrolling copy. Temporal draws nested 2px mint boxes on dark green with a dashed environment boundary. Keep the diagram in the page's type, never as an image.

**Seen on:** Postman, Temporal. **Suits:** mono-technical, dark-precision; devtool.

```html
<style>
.fr{position:relative;width:900px;max-width:100%;height:440px;overflow:hidden;border-radius:12px;box-shadow:inset 0 0 0 1px var(--line)}
.fr svg.w{position:absolute;inset:0;width:900px;height:440px;fill:none;stroke:color-mix(in srgb,var(--ink) 30%,transparent)}
.b{position:absolute;display:flex;align-items:center;gap:10px;height:52px;padding:0 16px;border-radius:6px;font:14px var(--font-mono);background:color-mix(in srgb,var(--ink) 5%,var(--bg));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 16%,transparent)}
.dash{position:absolute;left:440px;top:90px;width:300px;height:220px;border-radius:6px;border:1px dashed color-mix(in srgb,var(--ink) 34%,transparent)}
.lab{position:absolute;font:11px var(--font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ink-2)}
.n{position:absolute;width:20px;height:20px;margin:-10px 0 0 -10px;display:grid;place-items:center;border-radius:50%;background:var(--ink);color:var(--bg);font:600 10px var(--font-mono)}
</style>
<div class="fr"><svg class="w" viewBox="0 0 900 440"><path d="M206 186H452M728 186h32"/></svg><!-- SVG and boxes share one px coordinate system. Never scale one without the other -->
 <div class="b" style="left:100px;top:160px">Driver app</div>
 <div class="dash"></div><div class="lab" style="left:454px;top:102px">In your VPC</div>
 <div class="b" style="left:452px;top:160px;width:276px">Edge gateway</div>
 <div class="b" style="left:760px;top:160px">Dispatch</div>
 <span class="n" style="left:330px;top:186px">01</span></div>
```

<!-- v:product.annotated-shot/magnifier-lens -->
### `magnifier-lens`

*Zoom in. This is where the problem is.* Quality 5/5, 1 site.

**Use:** Debugging and monitoring products. **Not:** Anywhere without a dramatic, dim base shot.

**Recipe:** Dim dark UI shot with a circular lens about 300px, 4px gradient ring, showing the key lines enlarged at full brightness. The lens says which detail matters without a caption.

**Seen on:** Sentry. **Suits:** illustrated; devtool.

<!-- v:product.annotated-shot/margin-notes-on-code -->
### `margin-notes-on-code`

*A senior colleague scribbling on your code.* Quality 5/5, 1 site.

**Use:** Languages and developer tools. Explaining an error. **Not:** Polished enterprise pages, where the hand-drawn arrows feel off.

**Recipe:** Snippet about 480px with only a 1px left and bottom rule, a pale red error row with a red bar. Accent mono notes at 14-16px rotated 3-4 degrees sit in the margins, linked by hand-drawn black arrows. Draw arrows as gently curved SVG paths with open heads. Straight lines kill it.

**Seen on:** TypeScript. **Suits:** bold-colour; devtool.

```html
<style>
.w{position:relative;width:min(860px,100%);height:340px;margin-left:24px}
.s{position:absolute;left:190px;top:0;width:480px;padding:12px 0 18px 14px;border-left:1px solid var(--accent);border-bottom:1px solid var(--accent);font:15px/22px var(--font-mono);white-space:pre}
.e{margin:6px 0 6px -14px;padding:5px 14px;background:color-mix(in srgb,var(--bad) 11%,var(--bg));box-shadow:inset 2px 0 0 var(--bad)}
.note{position:absolute;width:172px;font:15px/20px var(--font-mono);color:var(--accent)}
.w svg{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--ink);stroke-width:1.2;stroke-linecap:round;overflow:visible}
</style>
<div class="w"><svg viewBox="0 0 860 340"><path d="M134 70c20-16 38-24 54-24"/><path d="m178 39 10 7-10 6"/></svg>
<div class="s">function totalKg(load) {
  return load.sum(p =&gt; p.kg)
<div class="e">'sum' is not a method on Parcel[].</div>}</div>
<div class="note" style="left:-6px;top:78px;rotate:-3deg">Types sit in a comment. Nothing to compile.</div></div>
```

<!-- v:product.annotated-shot/spotlight-dim-and-callout -->
### `spotlight-dim-and-callout`

*A guided look at one pane.* Quality 5/5, 1 site.

**Use:** Learning products and complex IDEs. **Not:** Simple UIs that need no guide.

**Recipe:** Rebuilt IDE about 975px. Inactive panes under a tinted wash, active pane pure. White 390px callout, radius 4, glowing accent edge, 26px mono title, 16px copy. A cursor arrow travels between stops as scroll advances. Dim with a coloured wash, not opacity. Opacity makes text unreadable mud, a wash keeps the structure.

**Seen on:** Codecademy. **Suits:** mono-technical; education.

```html
<style>
.ide{position:relative;display:grid;grid-template-columns:320px 1fr 330px;height:620px;background:var(--surface);box-shadow:0 0 0 1px var(--line);font-size:14px}
.pane{padding:18px;min-width:0;overflow:hidden}
/* a desaturated wash keeps the structure. Opacity, or a saturated wash, turns it to mud */
.dim{position:relative}.dim::after{content:"";position:absolute;inset:0;background:rgba(126,132,170,.38)}
.call{position:absolute;right:-18px;bottom:32px;width:390px;padding:18px 20px;border-radius:4px;background:#fff;color:#14161d;box-shadow:0 0 0 2px var(--accent),0 0 26px 6px color-mix(in srgb,var(--accent) 60%,transparent)}
.call h5{margin:0 0 8px;font:500 24px var(--font-mono);color:var(--accent)}
</style>
<div class="ide"><div class="pane dim">Instructions</div><div class="pane mono">const crew = [ ... ]</div><div class="pane dim">Preview</div>
 <div class="call"><h5>A real code editor</h5>Write and run your code here, with no setup.</div></div>
```

<!-- v:product.annotated-shot/verb-stack-beside-player -->
### `verb-stack-beside-player`

*Three words, one decision.* Quality 5/5, 1 site.

**Use:** Review and approval products. **Not:** Anything with no clear verbs.

**Recipe:** Three columns: 20px paragraph, three verbs stacked at 56px with the active word white and others 25%, then a 280px dark device showing the matching controls. Scroll advances the verb.

**Seen on:** Airpost: The Frontier Marketing OS for Frontier Companies. **Suits:** dark-precision; ai.

<!-- v:product.annotated-shot/hotspot-rings -->
### `hotspot-rings`

*Things you can point at.* Quality 4/5, 2 sites.

**Use:** Physical products, rooms, and form or motion analysis. **Not:** Dense UI.

**Recipe:** Room render or photo about 800px, radius 14-20. Rings 30px translucent with 14px white centres on each part, matched by a card alongside. Or green skeleton dots with a counter overlaid on a person.

**Seen on:** Hinge Health, UNITO. **Suits:** warm-neutral; ecommerce, health.

<!-- v:product.annotated-shot/layered-screens-in-frame -->
### `layered-screens-in-frame`

*Two states in one object.* Quality 4/5, 2 sites.

**Use:** Developer tools with light and dark modes. **Not:** As a plain image with a caption. Then it is not annotated at all.

**Recipe:** Frame about 576x464 with deep fill, 2px rim, radius 24, hairline spectrum top and bottom. Two overlapping screens inside, light over dark, real data. A simple variant sets a small grey label left and a large photo right, alternating.

**Seen on:** Aarretuote, Insomnia. **Suits:** light-precision, photo-led; devtool, ecommerce.

### Mistakes that cheapen annotated shots

- A wash that kills the text. Our navy dim made inactive panes unreadable. A desaturated grey-lilac at about 38% keeps the structure visible.
- A callout clipped by its own frame. Let it overhang the edge by 15-20px, so it feels added on top.
- Arrows crossing the note text. Route around it and curve gently.
- A global SVG rule that catches your icons. Our diagram's icons flew to the corner because `svg{position:absolute}` applied to them. Scope it to a class.
- Boxes spread too far apart. Real diagrams stay tight, with the air outside the diagram.
- Numbered circles on a screenshot with a legend beneath, which makes people read twice.

## Data viz

Marketing data viz makes one claim, and the chart is the proof. The eye should get the answer before reading a label. Great charts are honest: a shared scale, stated conditions, real rhythm in the data, with a single accent that picks the winner. Cheap charts are smooth curves with no units, heavy gradient fills and legends for things nobody asked. Read `dataviz`, if that skill is available, for chart mechanics; this section covers how charts behave as page objects.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Line weight | 1.5-2px | a secondary line at 1px, dotted |
| Bar thickness | 8 / 18 / 28px |  |
| Label mono | 12 / 12 / 15px | n=10 |
| Radius | 8 / 8 / 12 | n=12 |
| KPI cell | 181px wide | label 11-12, value 18-20 |
| Row pitch | 37-44px | rankings |
| Grid | hairline, ink-6%, or none |  |
| Colours | one accent plus ink | rivals in grey |

<!-- v:product.data-viz/node-state-diagram -->
### `node-state-diagram`

*The system, drawn exactly as it behaves.* Quality 5/5, 6 sites.

**Use:** State machines, data models, integrations. **Not:** Vague marketing hubs with logos around a centre.

**Recipe:** Dot field 16px pitch. Nodes radius 12, 1px border, mono 15px real identifiers, 8px square status dots. 1px grey arrows with tiny heads. Use actual state names. Ghost unused nodes as outlines fading into the grid.

**Seen on:** Asana (gold), Increase (gold), Stripe (gold), Cloudinary, Zapier, Hellgate. **Suits:** light-precision, dark-precision, bold-colour, warm-neutral, gradient-light; finance, saas, devtool.

<!-- v:product.data-viz/dot-globe-with-chips -->
### `dot-globe-with-chips`

*Global, told by dots, and specific.* Quality 5/5, 5 sites.

**Use:** Global payments and infrastructure. **Not:** Local businesses. Also decorative globes that show no data.

**Recipe:** Sphere of 2-4px dots with continents in a dot matrix. Small chips with mono 10px city, department and local-currency amount pin to dots, or 10px accent squares mark regions with a scrolling mono country list beside it. The chips are the point. Without specific places and amounts, a dot globe is wallpaper. Daily uses a plain 250px wire sphere as a quiet section accent.

**Seen on:** LiveKit (gold), Ramp (gold), Stripe (gold), Daily, Paradigm. **Suits:** mono-technical, dark-precision, light-precision, gradient-light; finance, devtool.

<!-- v:product.data-viz/race-bars -->
### `race-bars`

*A race, and it is not close.* Quality 5/5, 5 sites.

**Use:** Performance claims with real measured numbers. **Not:** Numbers that are close. A narrow win looks like a loss.

**Recipe:** 1px ink box, 46px tab row with active tab solid. Rows 44px: name plus mono version, 28px tinted track, solid bar on one shared scale, right-aligned mono time. Winner in accent. Axis below, then one line of test conditions and a reproduce link. Astral uses 8px bars with a 2px lime tick for the winner and 30px mono times. Rspack gives each tool three 8px tracks at 826px wide. The shared scale is the argument; never rescale per row. Always state the conditions.

**Seen on:** Astral (gold), Bun (gold), Hugging Face Pricing, Rspack, Biome. **Suits:** light-precision, gradient-light, bold-colour, mono-technical; devtool, ai.

```html
<style>
.bx{width:min(560px,100%);box-shadow:inset 0 0 0 1px var(--ink)}
.tabs{display:grid;grid-template-columns:repeat(4,1fr);height:46px;font-size:13px;font-weight:600}.tabs span{display:grid;place-items:center;box-shadow:-1px 0 0 var(--ink),0 1px 0 var(--ink)}.tabs .on{background:var(--ink);color:var(--bg)}
.in{padding:22px 24px 20px}
.r{display:grid;grid-template-columns:96px 1fr 72px;align-items:center;gap:12px;height:44px;font-size:14px;font-weight:600}.r small{display:block;font:11px var(--font-mono);color:var(--ink-2)}
.tr{height:28px;background:color-mix(in srgb,var(--ink) 5%,transparent)}.tr i{display:block;height:100%;width:var(--w);background:var(--ink);transform-origin:0;animation:g .9s cubic-bezier(.2,.8,.2,1) both}
.r.win .tr i{background:var(--accent)}
.tm{text-align:right;font:14px var(--font-mono);font-variant-numeric:tabular-nums;color:var(--ink-2)}
@keyframes g{from{transform:scaleX(0)}}@media(prefers-reduced-motion:reduce){.tr i{animation:none}}
</style>
<div class="bx"><div class="tabs"><span class="on">Cold start</span><span>Query</span><span>Join</span><span>Bulk load</span></div>
 <div class="in"><!-- one shared scale: --w is value / max -->
  <div class="r win"><div>Kestrel<small>v3.1</small></div><div class="tr"><i style="--w:7%"></i></div><div class="tm">0.34s</div></div>
  <div class="r"><div>Osprey<small>v12.4</small></div><div class="tr"><i style="--w:33%"></i></div><div class="tm">1.58s</div></div>
  <div class="r"><div>Merlin<small>v8.1</small></div><div class="tr"><i style="--w:100%"></i></div><div class="tm">4.81s</div></div>
  <p style="margin:16px 0 0;font-size:13px;color:var(--ink-2)">40 GB TPC-H, cold page cache, 8 vCPU, medians of 5 runs.</p></div></div>
```

<!-- v:product.data-viz/analyst-grade-dark-panel -->
### `analyst-grade-dark-panel`

*Someone serious built this.* Quality 5/5, 4 sites.

**Use:** Technical buyers on dark pages. **Not:** General audiences.

**Recipe:** Dark panel, radius 8-12, a real chart type: beeswarm of 5px dots with dim stepped percentiles, box-and-whisker with mono medians, heatmap of square cells. Footer legend explains it. Another panel fades behind at 50%.

**Seen on:** Linear (gold), Postman, CockroachDB, PostHog. **Suits:** expressive, dark-precision; saas, devtool.

<!-- v:product.data-viz/single-claim-line -->
### `single-claim-line`

*One claim, one line.* Quality 5/5, 4 sites.

**Use:** A proof point with one strong trend. **Not:** A flat trend.

**Recipe:** One line 1.5-2px, optional fill fading to near-white, four ring markers or a live end dot, hairline grid, 12px axis labels, caption half accent, half ink. Width up to 1130px. Or a word set large over the line. Noom sets a teal fill under a falling curve with a 64px figure top right. Loops overlaps a 44px word with a 2px line. Inngest stops the line partway across as if still drawing.

**Seen on:** Amplitude (gold), Loops (gold), Inngest (gold), Noom. **Suits:** warm-neutral, light-precision, dark-precision; saas, health, devtool.

<!-- v:product.data-viz/compact-leaderboard -->
### `compact-leaderboard`

*A table that is also a chart.* Quality 5/5, 3 sites.

**Use:** Rankings, model evals, regulated disclosures. **Not:** When you are not near the top.

**Recipe:** Box about 700px, 1px border at ink-6%, no radius. 37px rows: grey rank, 9px hue square, 13px name, 11px grey qualifier, right-aligned 110px bar in the same hue, 13px percent. 1px row rules. Openrouter turns this into live 410px cards with weekly trend percentages. Monzo redraws a regulator table in brand coral on a mint panel.

**Seen on:** Cognition (gold), Monzo, OpenRouter. **Suits:** type-led, light-precision, bold-colour; ai, devtool, finance.

<!-- v:product.data-viz/hairline-radial-map -->
### `hairline-radial-map`

*Everything that can grow from one centre.* Quality 5/5, 3 sites.

**Use:** Replacing a long capability list. **Not:** Short lists, which look sparse.

**Recipe:** Logo at centre with 1px spokes to 22px branches, each spraying finer spokes to 14px leaves. Labels fade from ink to 30% with depth and drift in on scroll. Or three concentric arcs, solid, dashed and dotted, carrying 24px logo chips.

**Seen on:** Claude (gold), Stripe (gold), Vercel AI. **Suits:** light-precision, warm-neutral, gradient-light; ai, finance.

<!-- v:product.data-viz/kpi-strip-drives-chart -->
### `kpi-strip-drives-chart`

*A real analyst's view.* Quality 5/5, 3 sites.

**Use:** Analytics, billing, any dashboard product. **Not:** Fewer than four honest metrics.

**Recipe:** Six equal cells split by 1px rules: 11-12px uppercase label, 18-20/700 value, 12px delta with coloured arrow. Selected cell tinted, radius 6-8, drives the chart below: 1.5px line, 10% fill, faint grid. Data has weekly rhythm. Generate data with a real rhythm: weekday and weekend drop, slow trend, one spike. A smooth sine wave is the fastest way to expose a fake chart.

**Seen on:** Linear Changelog (gold), Stripe Payments (gold), Plausible. **Suits:** light-precision, gradient-light, dark-precision; saas, finance.

```html
<style>
.k{display:grid;grid-template-columns:repeat(6,1fr);margin:6px 0 18px}
.c{padding:10px 14px;border-radius:8px;box-shadow:-1px 0 0 var(--line)}.c:first-child,.c.on,.c.on+.c{box-shadow:none}.c.on{background:color-mix(in srgb,var(--ink) 5%,transparent)}
.c small{display:block;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.c b{font-size:19px;font-weight:700;font-variant-numeric:tabular-nums}.c em{margin-left:6px;font-size:12px;font-style:normal;color:var(--ok)}
#c{width:100%;height:300px;display:block;overflow:visible} /* add hairline grid and 12px axis labels */
@media(max-width:760px){.k{grid-template-columns:repeat(3,1fr)}}
</style>
<div class="k"><div class="c on"><small>Unique visitors</small><b>148k</b><em>↗ 6%</em></div><div class="c"><small>Total visits</small><b>231k</b><em>↗ 11%</em></div><!-- six cells --></div>
<svg id="c" viewBox="0 0 1040 300" preserveAspectRatio="none"></svg>
<script>
// seeded, so it renders the same each time. Weekday plateau, weekend drop, slow trend, one spike.
let r=11;const R=()=>(r=(r*9301+49297)%233280)/233280,d=[];
for(let i=0;i<91;i++){const w=(i+2)%7,k=w==5?.42:w==6?.3:w==0?.86:1;d.push((6900+R()*520)*k*(1+i/91*.34)+(i==66?2600:0))}
const W=1040,H=270,L=34,x=i=>L+i*(W-L)/90,y=v=>H-v/12000*(H-10),P=d.map((v,i)=>[x(i),y(v)]);
const l=P.map(([a,b],i)=>i?`C${(P[i-1][0]*2+a)/3} ${P[i-1][1]} ${(P[i-1][0]+a*2)/3} ${b} ${a} ${b}`:`M${a} ${b}`).join('');
document.getElementById('c').innerHTML=`<path d="${l}L${W},${H}L${L},${H}Z" fill="var(--accent)" fill-opacity=".1"/><path d="${l}" fill="none" stroke="var(--accent)" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`;
</script>
```

<!-- v:product.data-viz/micro-instrument -->
### `micro-instrument`

*A small true readout of the world.* Quality 5/5, 3 sites.

**Use:** Footers, cards, and spots where a whole chart is too much. **Not:** As fake decoration. It must be live or accurate.

**Recipe:** A tiny widget with real data: 46px dial with one needle under 14px mono readout, or 197x35 sparkline with a 2.5px line and tinted fill and no axes, or four mono label-value rows at 21px pitch.

**Seen on:** Drizzle, Three Zero Five Studio, Language Explorer. **Suits:** light-precision, expressive, render-3d; devtool, culture, other.

<!-- v:product.data-viz/one-filled-shape -->
### `one-filled-shape`

*Only one thing here is solid.* Quality 5/5, 3 sites.

**Use:** A single winner: lowest rate, the new layer. **Not:** Charts that must be read precisely.

**Recipe:** Descending isometric bars in 1px dotted outline on black, no axes, with only the winner solid and labelled in accent. Or a greyscale diagram with one dark outline, or a 230px outline pie with one accent slice.

**Seen on:** Public (gold), Vercel Pricing (gold), Yuriy Vitrenko's Library. **Suits:** light-precision, type-led; finance, culture, devtool.

<!-- v:product.data-viz/unit-block-diagram -->
### `unit-block-diagram`

*The idea, counted in blocks.* Quality 5/5, 3 sites.

**Use:** Architecture arguments: density, columnar, isolation. **Not:** Numbers that need a precise value.

**Recipe:** Two 544px outlined panels of small rounded cells. One lights scattered rows, the other whole columns. Or dashed tiles with accent-tint fills and accent mono captions. No numbers: the arrangement argues.

**Seen on:** Cloudflare Workers (gold), ClickHouse, Paradigm. **Suits:** mono-technical, bold-colour, light-precision; devtool, finance.

<!-- v:product.data-viz/annotated-scenario-chart -->
### `annotated-scenario-chart`

*A chart that tells you what to look at.* Quality 5/5, 2 sites.

**Use:** Forecasts, pricing logic, explainers. **Not:** Decorative use. The annotation must carry a claim.

**Recipe:** Card up to 1080px, radius 8. Pill toggle switches scenarios. Solid history, dashed path, pale projection, soft filled areas. One 1px accent callout box with a vertical leader to a dot explains the key region. Trigger.dev reduces this to one small chart: hatched run bar, thin line while waiting, tooltip, dashed now-line.

**Seen on:** Stripe Climate (gold), Trigger.dev. **Suits:** dark-precision, gradient-light; devtool, finance.

<!-- v:product.data-viz/margin-between-two-lines -->
### `margin-between-two-lines`

*The gap is the product.* Quality 5/5, 2 sites.

**Use:** Margin, cost, savings: any story that is a difference. **Not:** Stories about a single value.

**Recipe:** 2px line with end dot over a dotted 1px line, fine vertical hatching filling only the gap between them. 12px legend at the base, one baseline rule, no axes or gridlines. No colour needed. Clip the hatch to the area between the series, so the hatch itself becomes the data. Build it with an SVG pattern fill on a closed path.

**Seen on:** Polar (gold), Framer (gold). **Suits:** dark-precision; saas.

```html
<svg id="m" viewBox="0 0 440 214" style="width:100%;max-width:490px;display:block;overflow:visible"></svg>
<script>
let r=5;const R=()=>(r=(r*9301+49297)%233280)/233280,n=60,up=[],lo=[];let a=186,b=194;
for(let i=0;i<n;i++){a-=2.75+(R()-.5)*5.5;b-=.92+(R()-.5)*1.8;up.push(a);lo.push(b)}
const x=i=>2+i*436/(n-1),P=A=>A.map((v,i)=>`${x(i).toFixed(1)},${v.toFixed(1)}`).join('L');
const gap=`M${P(up)}L${lo.slice().reverse().map((v,i)=>`${x(n-1-i).toFixed(1)},${v.toFixed(1)}`).join('L')}Z`;
document.getElementById('m').innerHTML=`<defs><pattern id="h" width="4" height="4" patternUnits="userSpaceOnUse"><path d="M1 0v4" stroke="var(--ink-3)" stroke-width=".8"/></pattern></defs>
<path d="${gap}" fill="url(#h)" opacity=".55"/><path d="M${P(lo)}" fill="none" stroke="var(--ink-2)" stroke-dasharray="1.5 3"/>
<path d="M${P(up)}" fill="none" stroke="var(--ink)" stroke-width="2"/><circle cx="${x(n-1)}" cy="${up[n-1]}" r="3.5" fill="var(--ink)"/>`;
</script>
```

<!-- v:product.data-viz/uptime-barcode -->
### `uptime-barcode`

*Reliability you can see at a distance.* Quality 5/5, 2 sites.

**Use:** Trust and security sections. **Not:** Without a real figure next to it.

**Recipe:** Strip about 890x80 of 100 thin vertical bars, white with a soft tint midway. 54px/400 figure to its right with a 14px grey caption. Three 14px links with external icons below.

**Seen on:** AuthKit (gold), GoCardless. **Suits:** light-precision; finance, devtool.

<!-- v:product.data-viz/brand-grouped-bars -->
### `brand-grouped-bars`

*Colour alone says who wins.* Quality 5/5, 1 site.

**Use:** Benchmarks across several test sets. **Not:** One test set. Use race bars.

**Recipe:** Grouped bars 44px wide with 4px gaps: yours in the accent, rivals in a warm grey. Rival logos sit inside bar tops. 12px bold mono values above, hairline gridlines, underlined group labels below.

**Seen on:** Exa (gold). **Suits:** light-precision; ai.

<!-- v:product.data-viz/personal-range-chart -->
### `personal-range-chart`

*This is your number, in context.* Quality 5/5, 1 site.

**Use:** Health and personal data. **Not:** Population data.

**Recipe:** Pale surface card 328x248, radius 16, 1.5px border. Range capsules at left, 9px mono labels, pale in-range zone, one dot joined by a 1px line to a later dot, date ticks below. Add a pause control if it animates.

**Seen on:** Function Health (gold). **Suits:** warm-neutral; health.

<!-- v:product.data-viz/inked-map -->
### `inked-map`

*Here, specifically.* Quality 4/5, 3 sites.

**Use:** Nonprofits, regional finance. **Not:** When the geography is not the story.

**Recipe:** Regions in 2px ink outline on a pale blob, one highlighted with 8% fill, white card with region name and price. Or a dark map with numbered clusters and a search overlay, radius 12.

**Seen on:** Trasti Ubezpieczenia. Simply fair!, charity: water, GiveDirectly. **Suits:** photo-led, light-precision; nonprofit, finance.

### Mistakes that cheapen data viz

- Smooth invented data. Seed it with weekly rhythm and one spike.
- Rescaling per row, which hides the very thing the bars exist to show.
- Gradient fills over 15% opacity, which turn the chart into decoration.
- A chart on a card on a card. Set it directly in the section, or in one well.
- Bars without conditions. State the test, the machine and the sample. It costs one line and buys all the trust.
- Rainbow series. One accent, the rest grey.
- Decorative globes with no places. Add chips with cities and amounts, or remove the globe.

## Animated demos

A demo proves the product works by letting it work. It should start from a finished frame, play one short believable story and stop when asked. Great demos are real DOM with a cursor that moves like a hand, text that types at a human rhythm and state that changes in the right order. Cheap demos are a video of a blurry screen, or a fade-through of three screenshots. The first frame carries most of the weight, because many visitors will only see that one.

**Measured.** Values are p25 / median / p75 where three numbers appear. Analyst estimates were checked against frames.

| Measure | Value | Note |
|---|---|---|
| Step length | 2-4s |  |
| Cursor travel | 0.9s, eased | cubic-bezier(.45,.05,.2,1) |
| Crossfade | 220ms |  |
| Typing | 24-58ms a character | with a longer pause at spaces |
| Pause control | 36-44px | circular |
| Tile tick | about 400ms | one tile at a time |

<!-- v:product.animated-demo/flow-with-travelling-token -->
### `flow-with-travelling-token`

*Watch the money, or the message, travel.* Quality 5/5, 5 sites.

**Use:** Payments, routing, event-driven systems. **Not:** Static relationships.

**Recipe:** CSS phone or nodes with concentric 1px rings, labelled pills attached by 1px lines with end dots. A small amount chip travels along the line, then rows update in sequence. Dashed variants work on saturated plates, in page type.

**Seen on:** Stripe Connect (gold), Revena, Zapier, Nx, Prisma. **Suits:** gradient-light, warm-neutral, bold-colour, light-precision, dark-precision; devtool, saas, finance.

<!-- v:product.animated-demo/typing-composer -->
### `typing-composer`

*Someone is asking it something right now.* Quality 5/5, 5 sites.

**Use:** AI products. The strongest small motion for a prompt-led tool. **Not:** Non-prompt products.

**Recipe:** Composer types real prompts at 24-58ms a character with a slower pause on spaces, then send arrow fills, a shimmering Thinking line, then the answer. Panel tint changes per task. Modify and Replay buttons below. Start from a partial line. Anthropic uses a 320px white composer on a 690x420 sage panel with faint contours. Perplexity runs it huge: 858px composer, 32px type. Cal turns it into a 40px sentence with dashed-underlined tokens that resolve.

**Seen on:** Attio (gold), Claude (gold), Comet (gold), Cal.com (gold), Plvs Ultra. **Suits:** light-precision, warm-neutral, mono-technical; ai, saas.

```html
<style>
.cv{position:relative;height:420px;display:grid;place-items:center;overflow:hidden;border-radius:6px;background:var(--surface)}
.box{width:320px;padding:12px 12px 10px;border-radius:9px;background:var(--bg);box-shadow:0 1px 2px rgba(0,0,0,.05),0 12px 30px rgba(20,40,30,.1);font-size:14px;line-height:20px}
#t{min-height:40px}#t i{display:inline-block;width:1.5px;height:15px;margin-left:1px;vertical-align:-2px;background:var(--ink);animation:bl 1s steps(2) infinite}@keyframes bl{50%{opacity:0}}
#s{margin:8px 0 0 auto;width:24px;height:24px;display:grid;place-items:center;border-radius:6px;background:color-mix(in srgb,var(--accent) 16%,var(--bg));color:var(--accent);transition:background .2s,color .2s}#s.on{background:var(--accent);color:#fff}
#o{margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-2)}
.shim{background:linear-gradient(90deg,var(--ink-3) 30%,var(--ink) 50%,var(--ink-3) 70%) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:s 1.6s linear infinite}@keyframes s{to{background-position:-200% 0}}
</style>
<div class="cv"><div class="box"><div id="t"></div><div id="s">↑</div><div id="o"></div></div></div>
<script>
const Q=[['Why did freight costs jump 14% in October?','Two carriers moved to peak surcharges on 3 Oct. 61% of the jump sits on the Gulf lanes.']],
 t=document.getElementById('t'),s=document.getElementById('s'),o=document.getElementById('o'),w=m=>new Promise(r=>setTimeout(r,m));
async function play(){for(let n=0;;n++){const[q,a]=Q[n%Q.length];o.textContent='';o.className='';s.classList.remove('on');
 for(let i=0;i<=q.length;i++){t.innerHTML=q.slice(0,i)+'<i></i>';await w(24+Math.random()*34+(' ,'.includes(q[i-1])?40:0))} // human rhythm
 s.classList.add('on');await w(420);o.textContent='Reading the ledger…';o.className='shim';await w(1300);o.className='';o.textContent=a;await w(3200)}}
if(matchMedia('(prefers-reduced-motion:reduce)').matches){t.textContent=Q[0][0];s.classList.add('on');o.textContent=Q[0][1]}else play();
</script>
```

<!-- v:product.animated-demo/self-playing-window -->
### `self-playing-window`

*The product demos itself while you read.* Quality 5/5, 4 sites.

**Use:** Heroes of products with a clear flow. **Not:** Without a pause control. It must stop on request and under reduced motion.

**Recipe:** Real DOM app window plays itself: a cursor moves on a 0.9s eased path, clicks, selection moves, inspector swaps with a 220ms crossfade, breadcrumb updates. Loop every 3-4s per step. 36-44px circular pause control. Rest on a designed frame. The first frame must be a finished, believable state. VS Code offers pause, previous, next as three 44px circles. Slack puts a round play control outside the window.

**Seen on:** Loops (gold), Ramp (gold), Slack, VS Code. **Suits:** light-precision, warm-neutral; saas, finance, devtool.

```html
<style>
.demo{position:relative;height:520px;overflow:hidden;background:var(--surface)}
.st{position:absolute;left:120px;width:160px;padding:8px 10px;border-radius:7px;background:var(--bg);box-shadow:0 0 0 1px var(--line);font-size:13px;font-weight:500;color:var(--ink-2);transition:box-shadow .25s,color .25s}
.st.on{color:var(--ink);box-shadow:0 0 0 1.5px var(--ink)}
.cur{position:absolute;left:0;top:0;width:20px;height:20px;z-index:5;transition:transform .9s cubic-bezier(.45,.05,.2,1)}
.cur svg{width:100%;height:100%;fill:var(--ink);stroke:var(--bg);transition:transform .12s}.cur.dn svg{transform:scale(.86)}
.ins{position:absolute;left:340px;top:26px;width:280px;transition:opacity .22s,translate .22s}.ins.out{opacity:0;translate:0 6px}
.ctl{position:absolute;right:16px;bottom:16px;width:36px;height:36px;border:0;border-radius:50%;background:var(--ink);color:var(--bg)}
</style>
<div class="demo" id="w">
 <div class="st" style="top:26px">Check the label</div><div class="st on" style="top:88px">Tell the warehouse</div><div class="st" style="top:150px">Wait for scan</div>
 <div class="ins" id="p"><b>Tell the warehouse</b><p>Posts the order, the SKU and the expected bay.</p></div>
 <div class="cur" id="c"><svg viewBox="0 0 16 16"><path d="m3 2 10 4.5-4.3 1.3L7 12.5 3 2Z"/></svg></div>
 <button class="ctl" id="b" aria-label="Pause">II</button></div>
<script>
const st=[...document.querySelectorAll('.st')],T=['Runs on returns sent with a prepaid label.','Posts the order, the SKU and the expected bay.','Holds the refund until a bay scanner sees the parcel.'],
 p=document.getElementById('p'),c=document.getElementById('c'),w=document.getElementById('w');let i=2,run=true,tm;
const go=()=>{if(!run)return;const k=i%3,e=st[k],a=e.getBoundingClientRect(),b=w.getBoundingClientRect();
 c.style.transform=`translate(${a.left-b.left+a.width*.62}px,${a.top-b.top+a.height*.55}px)`;      // 1 cursor travels
 tm=setTimeout(()=>{c.classList.add('dn');setTimeout(()=>c.classList.remove('dn'),140);             // 2 press
  st.forEach(x=>x.classList.toggle('on',x===e));p.classList.add('out');                             // 3 selection, then panel
  setTimeout(()=>{p.innerHTML=`<b>${e.textContent}</b><p>${T[k]}</p>`;p.classList.remove('out')},220);
  i++;tm=setTimeout(go,2100)},950)};
if(matchMedia('(prefers-reduced-motion:reduce)').matches){run=false;c.hidden=true}else go();
document.getElementById('b').onclick=()=>{run=!run;clearTimeout(tm);if(run)go()};
</script>
```

<!-- v:product.animated-demo/stepper-synced-simulator -->
### `stepper-synced-simulator`

*A guided run you can control.* Quality 5/5, 4 sites.

**Use:** Products with a clear sequence: failure and recovery, capture to publish. **Not:** Short flows.

**Recipe:** Shell about 1000-1170px, 1px border. Top: dropdown, 3-step stepper, Pause, Start Over. Left code plus console, right event timeline drawing bars over gridlines. Or a right stepper with a 1px rail, dots and 19px labels. Plays automatically.

**Seen on:** Are.na, Auth0, Calvyn, Temporal. **Suits:** mono-technical, gradient-light, type-led, dark-precision; devtool, saas, culture.

<!-- v:product.animated-demo/live-canvas-hero -->
### `live-canvas-hero`

*A room with people already in it.* Quality 5/5, 3 sites.

**Use:** Collaborative and creative tools. **Not:** Single-player tools.

**Recipe:** Board panel about 1320px, 60px gutters, soft shadow, dotted grid. Stickies, stamps, named cursors, a running timer and a spinning widget animate as rebuilt UI. It crosses the fold to invite scrolling.

**Seen on:** Framer (gold), FigJam, Fantasy. **Suits:** dark-precision, bold-colour, render-3d; saas, agency.

<!-- v:product.animated-demo/live-status-matrix -->
### `live-status-matrix`

*Hundreds of things running in parallel.* Quality 5/5, 3 sites.

**Use:** CI, agents, ad variants, anything with fleets. **Not:** Small fleets of under about 20.

**Recipe:** Grid of 34-40px tiles with green checks and amber-outlined running jobs with counters, fading at the base. A floating white count card overlaps top right. Tiles change state one at a time, every 400ms. Status sits in the edge and icon. Colour fills across 60 tiles look like a game board. Airpost uses filled tiles but dims them and adds a scripted cursor and popover.

**Seen on:** Buildkite (gold), Airpost: The Frontier Marketing OS for Frontier Companies, Trigger.dev. **Suits:** dark-precision, light-precision; devtool, ai.

```html
<style>
.mx{height:230px;overflow:hidden;mask-image:linear-gradient(#000 70%,transparent)}
.g{display:grid;grid-template-columns:repeat(10,1fr);gap:6px}
.j{display:flex;align-items:center;gap:6px;height:34px;padding:0 6px;border-radius:6px;font-size:12px;font-variant-numeric:tabular-nums;color:var(--ink-2)}
.j::before{content:"✓";color:var(--ok)}
.j.r{box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--warn) 55%,transparent);background:color-mix(in srgb,var(--warn) 8%,transparent)}.j.r::before{content:"‹›";color:var(--warn)}
</style>
<div class="mx"><div class="g" id="g"></div></div>
<script>
const g=document.getElementById('g');for(let i=1;i<=59;i++)g.insertAdjacentHTML('beforeend',`<div class="j${i%2||i<4?'':' r'}">${i}</div>`);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(()=>{const r=[...g.querySelectorAll('.r')];if(r.length)r[Math.random()*r.length|0].classList.remove('r');else g.querySelectorAll('.j:nth-child(even)').forEach(e=>e.classList.add('r'))},420);
</script>
```

<!-- v:product.animated-demo/video-stage-with-controls -->
### `video-stage-with-controls`

*A short film inside the page.* Quality 5/5, 3 sites.

**Use:** Hardware and consumer launches. **Not:** When a real interactive demo is possible.

**Recipe:** Black card up to 1260px, radius 28, centred 28px line and footage. Floating grey pill with a progress dash, five dots and a separate play or pause circle, docked in the card, parked below it on scroll.

**Seen on:** Apple Intelligence (gold), Ueno, LaunchDarkly. **Suits:** bold-colour, light-precision, type-led; devtool, ai, agency.

<!-- v:product.animated-demo/ambient-signal-rings -->
### `ambient-signal-rings`

*The system is watching, quietly.* Quality 5/5, 2 sites.

**Use:** Security, detection and signals. **Not:** As a generic background.

**Recipe:** 110px disc inside two 1px concentric rings at about 200 and 296px, pastel chips sitting on the rings. Or arcs clipped by the cell bottom with a soft wedge sweeping round and one pill with a pulsing dot.

**Seen on:** Attio (gold), AuthKit (gold). **Suits:** light-precision; saas, devtool.

<!-- v:product.animated-demo/conveyor-transform -->
### `conveyor-transform`

*Rough goes in, finished comes out.* Quality 5/5, 2 sites.

**Use:** Testing, generation, build pipelines. **Not:** Anything without a clear before and after.

**Recipe:** Full-bleed 320px band. 180px white cards, radius 4, slide left through a 4px vertical scan line: dashed wireframes before, finished UI with 32px check badges after. Loop seamlessly.

**Seen on:** Chromatic, React Email. **Suits:** dark-precision; devtool.

<!-- v:product.animated-demo/parameter-drives-preview -->
### `parameter-drives-preview`

*Change it and see it change.* Quality 5/5, 2 sites.

**Use:** APIs with visible results, localised payments. **Not:** Parameters that change nothing visible.

**Recipe:** Pills above a real preview: active filled, content changes per value. Or a 664x404 panel, radius 24, with an image at left and five white mono pills at right, active tinted, each pill a real parameter name.

**Seen on:** Stripe Payments (gold), Cloudinary. **Suits:** gradient-light, bold-colour; finance, devtool.

<!-- v:product.animated-demo/before-after-slider -->
### `before-after-slider`

*Drag and feel the difference.* Quality 5/5, 1 site.

**Use:** Replacing something tangible. **Not:** Touch-only contexts, unless the handle is 44px.

**Recipe:** Frame 912x456, 2px white border, radius 0. Left panel grey boxes, right panel accent with white mono code. 1px divider, 32-44px white round handle with bracket glyph, mono caps corner labels. Auto-nudge once on enter.

**Seen on:** Inngest (gold). **Suits:** dark-precision; devtool.

<!-- v:product.animated-demo/feedback-loop-sample-app -->
### `feedback-loop-sample-app`

*Use this little app and watch your data appear.* Quality 5/5, 1 site.

**Use:** Analytics and event tools. **Not:** Anything needing setup.

**Recipe:** Small working sample app beside a mono event table. New rows arrive tinted as the app is used, and a chart panel overlaps. Windows overlap with real shadows. The visitor generates the data.

**Seen on:** PostHog. **Suits:** expressive; saas.

<!-- v:product.animated-demo/focus-pull-on-code -->
### `focus-pull-on-code`

*Look here, not there.* Quality 5/5, 1 site.

**Use:** One API or type worth noticing. **Not:** Long reads.

**Recipe:** Black code window, every line blurred except one, with that token highlighted and a floating type hover card in 14px mono with a hairline. The blur moves line to line, like a focus pull.

**Seen on:** Vite (gold). **Suits:** dark-precision; devtool.

<!-- v:product.animated-demo/scrubbable-slow-motion -->
### `scrubbable-slow-motion`

*Slowed down so you can see it think.* Quality 4/5, 1 site.

**Use:** Research labs and technical explainers. **Not:** Marketing pages for general buyers.

**Recipe:** A sentence appears word by word on a rule with per-token numbers under it, a candidates list beside it, and a scrubber labelled 30x slowed down, from Detailed to Realtime.

**Seen on:** Paradigm. **Suits:** mono-technical; finance.

<!-- v:product.animated-demo/spotlight-filter-row -->
### `spotlight-filter-row`

*One item steps forward from the group.* Quality 4/5, 1 site.

**Use:** Collections and filters in consumer tools. **Not:** Dense data.

**Recipe:** Solid colour band. Five 197x268 tiles washed by the ground, centre tile 272x305 in full colour, raised with a shadow, 16px caption beneath. The wash cycles along the row.

**Seen on:** mymind (gold). **Suits:** gradient-light; saas.

### Mistakes that cheapen animated demos

- An empty first frame. Render a real state before any script runs.
- No pause. Our demos all carry one, and they stop under `prefers-reduced-motion`.
- Even typing. Fixed intervals feel robotic. Add jitter and slow on spaces and punctuation.
- A cursor that teleports or moves linearly. Use one eased path and a slight press on click.
- Changing everything at once. Cursor arrives, press, then selection, then panel. Order sells it.
- Filling every tile in a status matrix with colour. Status lives in the edge and icon, so sixty tiles can sit quietly.
- Running timers while off-screen. Pause with IntersectionObserver.
