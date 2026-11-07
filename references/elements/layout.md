# Layout

Layout is how a page proves one mind made it. Good type can be set section by section, but only layout has to hold across 10,000px. This chapter tells you how to pick a system, keep it, and still give a long page some variety. It covers six elements: the grid, section rhythm, whitespace, composition shifts, full-bleed breaks and content widths.

The evidence: 196 analyst records across 169 pages, measured Chrome data from 341 sites at 1440x900, and a pixel scan of every scroll stop on those 341 sites. Recipes marked **Built** were reproduced, rendered and compared side by side with the real frame, and the mistakes listed under each element are mostly ones made in those first attempts. Where a number says x=, it means pixels from the left of a 1440px viewport.

The chapter teaches geometry only. Type comes from `references/typography.md`, palettes from the sampler. All code uses `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any system can be dropped in. Deep grounds and tints are derived from those tokens with `color-mix`, never hard-coded.

## Contents

- [1 One system, many shapes](#1-one-system-many-shapes): [what to hold](#what-to-hold-still), [what to vary](#what-to-vary), [page shapes for range](#page-shapes), [the base code](#the-base-code)
- [2 Grid system](#2-grid-system): [drawn](#drawn-grids), [undrawn](#undrawn-column-grids), [asymmetric](#asymmetric-grids), [unusual](#unusual-grids), [mistakes](#grid-mistakes)
- [3 Section rhythm](#3-section-rhythm): [variants](#rhythm-variants), [mistakes](#rhythm-mistakes)
- [4 Whitespace](#4-whitespace): [variants](#whitespace-variants), [mistakes](#whitespace-mistakes)
- [5 Composition shifts](#5-composition-shifts): [variants](#composition-variants), [mistakes](#composition-mistakes)
- [6 Full-bleed breaks](#6-full-bleed-breaks): [variants](#break-variants), [mistakes](#break-mistakes)
- [7 Content widths](#7-content-widths): [variants](#width-variants), [mistakes](#width-mistakes)
- [8 Phones](#8-phones)
- [9 Before you call it done](#9-before-you-call-it-done)

## 1 One system, many shapes

Generated pages fail at layout in two opposite ways. Either one section shape repeats until the reader stops looking, or every section invents its own layout and the page reads as a sample book. Top sites do neither. They fix the vertical beat and the outer edges, then vary what happens horizontally inside them.

The measurements show this directly.

| Per page, median | Gold | Silver |
|---|---|---|
| Distinct section padding values | 2 | 3 |
| Recurring left edges | 5 | 4 |
| Scroll stops sharing the single commonest left edge | 67% | 73% |
| Distinct page grounds | 3 | 2 |
| Pages with at least one hard light-to-dark flip | 41% | 30% |
| Pages that draw their vertical rails | 19% | 12% |

Read the first two rows together. The better sites are stricter about vertical spacing and looser about horizontal placement. They do not get their polish from one rigid left edge. They get it from a handful of left edges that each recur, on a vertical beat that never changes. Aim for three to seven recurring left edges and two section paddings.

Note the last row as well. Drawn rails fill the analyst records because they are easy to notice, but only about one gold page in five uses them. Do not reach for rails by default. Most excellent pages keep their grid invisible.

### What to hold still

Decide these before building any section, write them as variables, and let no section break them.

1. **One rail.** The outer left and right edges of the page. Everything aligns to it or deliberately bleeds past it. The widest container on a measured page is 1200 / 1280 / 1360px (p25, median, p75).
2. **One reading measure.** The narrowest container is 530 / 565 / 640px. The wide width is 2.0 to 2.4 times the narrow one, median 2.2. That ratio is why nested widths feel related instead of arbitrary.
3. **One section padding, two at most.** Gold pages sit at 80 / 96 / 128px, silver at 64 / 80 / 110px. 73% of all measured paddings fall on multiples of 8, and the commonest values are 96, 64, 80, 128 and 112.
4. **One small gap and one large gap.** The small one fuses related things, the large one separates chapters. Lithic uses 24px and 120px, and that contrast does all the grouping.
5. **One divider.** A hairline, a change of ground, or empty space. Pick one as the normal case. A page mixing all three reads as undecided.
6. **One set of grounds.** Two or three, used in a known order.

### What to vary

Between two neighbouring sections, change one or two of these, never all of them.

- Number of columns (one, two, three), which Notion Calendar steps through inside a fixed 1024px column.
- Which column the content starts in, or which margin it hangs from.
- Content width: rail, then measure, then rail.
- Media size and crop.
- Density: a sparse sentence after a dense module.
- Ground, once or twice on the page.

Three real pages show how far this can stretch, reading them whole from top to bottom.

- **Linear** varies only the contents. Across 9,960px it keeps one ground, one recipe (heading at x=80, lede at x=752, plate below) and 128px padding on every section. All the variety comes from what is inside the plates. This works only because the plates are excellent.
- **Stripe** varies the form and keeps the frame. Rails hold at x=88 and x=1352 across 15,485px while sections change from tiles to a stat row to full-bleed art to a dark chapter.
- **Kinfolk** varies width. Full-bleed, inset and centred blocks alternate so no two neighbours share a width across 15,848px, on 170px white rests.

**Budget for a 10 to 14 section page.** One dark or colour interruption, placed 25 to 50% of the way down. One full-bleed image or statement. One section at the reading measure. One sparse beat between two dense ones. Finish on the darkest ground if the page goes dark at all. Of 100 light-first pages that turn dark anywhere, 53 do so only at the very end, usually the footer, 37 have exactly one mid-page dark block, and only 10 have more. That one block usually spans one or two scroll stops. Page length: gold pages run 6,037 / 8,372 / 11,578px, and 23% exceed 12,000px.

### Page shapes

The elements below combine into whole-page shapes. Choose one on purpose, because the shape decides more about how a site feels than any single section. Two sites on different shapes will not look related even with the same palette.

| Shape | Hold | Vary by | Good for |
|---|---|---|---|
| Drawn frame | `page-rails` or `ruled-cell-frame`, one ground | Cell count, one dark chapter | Devtool, finance, AI infrastructure |
| Open grid | `full-width-small-gutter`, `space-only-gaps` | Module shape and density | Devtool, SaaS with strong product UI |
| One recipe | `midline-heading-lede`, one padding | Contents of the plate only | Product with a superb interface |
| Index | `label-left-content-right`, one width | Content type in the right column | Agency, consultancy, studio |
| Plates | `width-step-panels`, radius and gutter | Panel tint, panel count | SaaS, fintech, consumer apps |
| Rooms | `butted-colour-blocks` or `rounded-colour-sheets` | Ground, one idea per room | Consumer brand, food and drink |
| Film | `scene-per-viewport`, single type size | Image and one line | Hardware, automotive, hospitality |
| Gallery | `gallery-wall-void`, one axis | Image width and offset | Architecture, photography, fashion |
| Document | `pinned-panel-scroll-column` or `single-measure-column` | Nothing much, by design | Libraries, personal sites, docs |

Measured defaults differ by register, so start here and move only with a reason.

| Register | Commonest container | Section padding p25 / median / p75 |
|---|---|---|
| dark-precision | 1152 | 76 / 96 / 120 |
| gradient-light | 1200 | 80 / 96 / 122 |
| light-precision | 1110 | 64 / 90 / 112 |
| type-led | 1024 | 64 / 110 / 113 |
| bold-colour | 1000 | 64 / 88 / 100 |
| warm-neutral | 1012 | 56 / 80 / 120 |
| mono-technical | 960 | 64 / 64 / 112 |
| photo-led | 896 | 42 / 80 / 112 |

### The base code

**Built.** This is the whole system for a normal long page, rendered unchanged across three palettes including a dark one. Named grid lines give you rail, full bleed and one-sided bleed from a single declaration, so nothing needs `100vw`, which includes a classic scrollbar and shifts the layout by about 8px on Windows.

```css
:root{
  --rail:1216px; --read:640px; --gut:clamp(20px,5vw,112px);
  --pad:112px; --step:64px; --tight:24px;
  /* Resolved here, so a section can swap --ink and --bg without a cycle */
  --flip-bg:var(--ink); --flip-ink:var(--bg);
  /* A deep ground derived from the palette, not a new colour */
  --deep:color-mix(in srgb,var(--accent) 24%,var(--ink));
}
.page{display:grid;grid-template-columns:
  [full-start] minmax(var(--gut),1fr)
  [rail-start] minmax(0,var(--rail)) [rail-end]
  minmax(var(--gut),1fr) [full-end]}
.page>*{grid-column:rail}
.page>.full{grid-column:full}                 /* edge to edge */
.page>.right{grid-column:rail-start/full-end} /* starts on the rail, bleeds right */
.band{grid-column:full;display:grid;grid-template-columns:subgrid;padding-block:var(--pad)}
.band>*{grid-column:rail}                     /* full-bleed ground, content stays on the rail */
.ruled{border-top:1px solid var(--line)}
.read{max-width:var(--read)}
/* The flip: works on a light page and a dark one, because it swaps whatever the palette is */
.flip{background:var(--flip-bg);color:var(--flip-ink);--bg:var(--flip-bg);--ink:var(--flip-ink);
  --ink-2:color-mix(in srgb,var(--flip-ink) 68%,transparent);
  --ink-3:color-mix(in srgb,var(--flip-ink) 46%,transparent);
  --line:color-mix(in srgb,var(--flip-ink) 14%,transparent);
  --surface:color-mix(in srgb,var(--flip-ink) 8%,var(--flip-bg))}
```

Never write `.flip{--ink:var(--bg);--bg:var(--ink)}` directly. That is a CSS cycle and both values become invalid, which is why `--flip-bg` and `--flip-ink` are resolved on `:root` first.

Use `max-width` for the measure rather than a third pair of grid tracks. Inner tracks with `minmax(0,...)` share free space equally, so at tablet widths the reading column collapses to a third of the page.

Decide in this order: page shape, rail, measure, padding, divider, then the one interruption and where it sits. Only then design sections. The first section you build should use the system without adding to it.

## 2 Grid system

A grid exists so that unlike things line up. Its job is to make a logo row, a table, a photograph and a footer feel like parts of one object. Most generated grids are only columns of equal cards, which is a repeat, not a grid. A real grid shows itself when a heading in one section lands on the same x as a link five sections later.

What separates great from cheap:

- **Cheap grids are columns. Great grids are edges.** Stone Island hangs a hero button and a carousel button on x=961, the third column, in sections where no card sits above them. Nobody sees the grid and everybody feels it.
- **The reading line and the object line are different lines.** Text holds one x; images and cards hold another. Nuro puts cards at x=32 and all text at x=64. Stripe puts rails at x=88 and all text at x=104. Cards with their own padding push text off the line, and that one mistake makes a system feel loose.
- **In a ruled layout, the cell is the frame.** Nothing inside it needs a border, a shadow or a radius.
- **Gaps carry meaning.** A strict grid uses one gutter. Different gutters on one page should mean something.

**Measured.** Page margins at 1440 cluster in three groups: edge-hugging at 12 to 32px (24 commonest), mid at 64 to 140px, and narrow rails at 180 to 230px. Commonest exact container widths are 1280, 1200, 1392, 1376, 1344, 1312, 1080, 1024 and 960. Drawn rules in precision registers sit very close to the ground: 14 to 23 levels away on a light page (out of 255), 5 to 9 at the faintest, and 7 to 11 on dark. Editorial sites go much stronger with far fewer lines. Ruled cells run 0.7 to 1.0 as tall as they are wide: AuthKit 600x604, Attio 520x481, CSDG 360x361.

### Drawn grids

Use these when precision is what you are selling. Drawing the grid is a commitment: every element must then land on it, so a page that fudges alignment should not draw its lines.

<!-- v:layout.grid-system/page-rails -->
#### `page-rails`

**Feel.** Exact, engineered, calm. A ruled ledger at almost no visual weight.
**Use when** the page is long and varied and needs something to hold it together, in finance, infrastructure and AI. **Avoid** on a short page, a warm consumer brand, or anything led by photography.
**Recipe.** Two 1px vertical rules run the full page height at x=88 and x=1352 (Stripe), x=32 and x=1407 (Greylock) or x=140 and x=1300 (Increase). Text insets 16 to 24px from the rail, so the rail is visible as structure and never touches type. Horizontal rules bleed to the viewport at each section change, forming crosses where they meet the rails. Rails continue through tinted and dark bands at lower contrast, and art passes behind them.
**Why it works.** The frame is literally drawn, so a page can change form every section and still read as one thing.
**Seen on** ElevenLabs Pricing, Greylock, Increase, Stripe (gold); GitHub Pricing (silver), and 2 more (7 sites). **Suits** light-precision, warm-neutral, gradient-light, dark-precision; finance, ai, devtool, saas.

**Built.**

```css
.rails{--rail:clamp(16px,6.1vw,88px);--in:16px;position:relative;overflow-x:clip}
.rails::before{content:"";position:absolute;inset:0 var(--rail);z-index:2;pointer-events:none;
  border-inline:1px solid var(--line)}
.band{padding:96px calc(var(--rail) + var(--in));border-top:1px solid var(--line)}
/* Anything wider than text butts the rails, so its own padding cannot move the reading line */
.to-rail{display:block;max-width:none;width:calc(100% + var(--in)*2);margin-inline:calc(var(--in)*-1)}
```

```html
<main class="rails">
  <section class="band">...</section>
  <section class="band" style="background:var(--surface)">
    <img class="to-rail" src="..." alt="">
  </section>
</main>
```

Let hero art run down to the section's bottom rule and crop there. A panel floating in the middle of a band with padding on all sides is what makes the first attempt look like a template.

<!-- v:layout.grid-system/ruled-cell-frame -->
#### `ruled-cell-frame`

**Feel.** A spec sheet. Dense, serious, nothing floating.
**Use when** you have several peer features with real interface fragments, in devtools and SaaS. **Avoid** when you lack enough good fragments, because every cell shows its emptiness.
**Recipe.** A 1200px frame with 1px side rails (or 1184, 1224, 1344). Hairlines split sections into 2-up or 3-up cells that share borders: no gaps, no cards, no shadows, no radius. Cell padding 48px, or 32px in dense variants. Hold cells at 0.7 to 1.0 height-to-width. Separate groups with an empty spacer row about 64px tall; Trigger.dev fills it with a faint dot pattern. Fills may step per cell from `--bg` to `--surface`.
**Why it works.** The rules do the job of a dozen card styles, and shared borders stop the page feeling like loose objects on a table.
**Seen on** Attio, AuthKit, Buildkite (gold); Hugging Face Docs, Liquid AI (silver), and 5 more (10 sites). **Suits** light-precision, expressive, gradient-light, dark-precision; devtool, ai, saas, finance.

**Built.**

```css
.frame{max-width:1200px;margin-inline:auto;border-inline:1px solid var(--line)}
/* gap + background draws one hairline between cells, with no doubled borders */
.row{display:grid;gap:1px;background:var(--line);border-top:1px solid var(--line)}
.row>*{background:var(--bg);padding:48px 48px 0;min-height:560px;overflow:hidden;
  display:flex;flex-direction:column}
.r2{grid-template-columns:1fr 1fr}.r3{grid-template-columns:repeat(3,1fr)}.r13{grid-template-columns:1fr 2fr}
.art{margin-top:auto;padding-top:64px}   /* art sinks to the cell floor and the rule crops it */
.art.flush{margin-right:-48px}           /* or runs off the right rule */
.spacer{height:64px;border-top:1px solid var(--line)}
```

Two things decide this variant. Text-to-art gap must be 64 to 80px, and art must meet the cell's edge. Text-only rows can drop to a natural height, since a short row after two tall ones gives the page its beat.

<!-- v:layout.grid-system/dashed-column-guides -->
#### `dashed-column-guides`

**Feel.** Graph paper for a very careful company. The grid is the decoration.
**Use when** one quiet texture should run behind everything and you can honour every column. **Avoid** with free-floating layouts, and do not stack it with any other texture.
**Recipe.** Four 270px columns in a 1080px frame, giving five vertical 1px lines at x=180, 450, 720, 990 and 1260. Outer two solid, inner three dashed, about 6% ink. They run the whole page behind content and pass through dark bands at low contrast. Text starts 16px inside a line. Cards snap to the outer lines.
**Seen on** Stripe Atlas, Stripe Connect, Stripe Payments, Stripe Pricing (gold) (4 sites). **Suits** gradient-light, light-precision; finance, saas, devtool.

<!-- v:layout.grid-system/construction-lines -->
#### `construction-lines`

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.
**Seen on** Aniket, Cognition, Prototype, Zed Blog (gold) (4 sites). **Suits** light-precision, type-led, photo-led, mono-technical; portfolio, ai, agency, editorial, devtool.

<!-- v:layout.grid-system/edge-to-edge-ledger -->
#### `edge-to-edge-ledger`

**Feel.** A table the size of the screen. Blunt and confident.
**Use when** content falls naturally into facts, numbers and links. **Avoid** with few items, because empty cells then look unfinished.
**Recipe.** No side margin. 1px rules run viewport edge to edge, and the page splits at 720, then 360. Each cell holds one thing: a number, a claim or a link. Radius 0. Images span 2x2 cells with about 29px inset, or bleed to the rules. On Driftime the rules take the room's ink colour and start and stop with their section, like a newspaper grid.
**Seen on** Vite (gold); CSDG Development Group, Driftime Impact Report 2022, Sweetgreen (silver) (4 sites). **Suits** dark-precision, light-precision, type-led, photo-led; devtool, architecture, agency, food-drink, editorial.

<!-- v:layout.grid-system/newspaper-column-rules -->
#### `newspaper-column-rules`

**Feel.** A serious newspaper, without pretending to be one.
**Use when** many stories compete and you need density without cards. **Avoid** for a small number of items.
**Recipe.** Four 300px columns with 32px gutters in 1296px, a 1px ink vertical rule centred in each gutter, lead story spanning two, 1px horizontal rules between stories. Or three 420px columns (x=60, 510, 960) each opened by a small coloured label over a 1px rule, with contents free to differ in scale.
**Seen on** Monocle (silver); Martin Development (expressive) (2 sites). **Suits** type-led; editorial, architecture, culture.

### Undrawn column grids

The commonest case on excellent pages. The grid is strict and invisible.

<!-- v:layout.grid-system/full-width-small-gutter -->
#### `full-width-small-gutter`

**Feel.** Modern, confident, slightly editorial. The page uses the whole screen.
**Use when** you have enough content to fill a wide canvas: product grids, photo work, fashion, devtools. **Avoid** with long text, which then needs its own measure, and with sparse pages.
**Recipe.** No centred max-width. 24px side gutters at 1440 (Vercel), 32px (Nicole Heim), 22px (Stone Island), 15px (X8). Content runs about 1392px. Four-up at 354 pitch and two-up at 712 snap to the same edges as logo and footer, so the left edge is one unbroken line. Item gutters 12 to 24px. Stone Island's detail is worth stealing: 12px gutters, three 457px columns, and buttons in a later section hanging on the third column's x.
**Seen on** Nicole Heim Studio, Stone Island, Vercel AI SDK, Vercel Pricing, 099 (gold), and 1 more (6 sites). **Suits** light-precision, photo-led, mono-technical, dark-precision; fashion, devtool, agency, other, saas.

<!-- v:layout.grid-system/fixed-column-grid -->
#### `fixed-column-grid`

**Feel.** Museum catalogue. Everything has its place.
**Use when** unlike subjects must sit together for a long way: exhibitions, products, listings, editorial. **Avoid** in a short marketing page where the discipline goes unseen.
**Recipe.** Gagosian: x=124 to 1316, three 376px columns with 32px gaps, with sections, nav, footer and carousels all starting from x=124, 532 or 940. Images inside a 376px column are 334px wide, so text stays slightly wider than the image above it. Polestar: 1216px between 112px margins, six 176px columns with 32px gaps (208 pitch), with copy and link cells at x=112, 528, 944. Sequoia: three 1px rules at x=48, 720, 1392 with 640px tiles inset 16px.
**Seen on** Gagosian, Polestar (gold); Sequoia (silver) (3 sites). **Suits** photo-led, warm-neutral, type-led; culture, brand, finance, editorial, hospitality.

<!-- v:layout.grid-system/two-up-seam-tiles -->
#### `two-up-seam-tiles`

**Feel.** Retail confidence. Big, simple, unmistakable.
**Use when** you have several strong products of equal rank. **Avoid** without strong imagery, since tiles have nothing else.
**Recipe.** Full-width hero, then 2-up tiles about 702x580 with 12px seams and 12px page margins, radius 0, no shadow. Copy centred at each tile's top. Alternate pale and black tiles in a checker so neighbouring images never compete.
**Seen on** Apple (gold) (1 site). **Suits** photo-led, dark-precision; brand, ecommerce.

### Asymmetric grids

These are the most useful grids for a page that wants to feel designed and not templated, because empty columns do the pacing.

<!-- v:layout.grid-system/label-left-content-right -->
#### `label-left-content-right`

**Feel.** An annual report from a firm that charges a lot.
**Use when** the company has a point of view and content varies by section: agencies, consultancies, funds. **Avoid** when sections are all the same shape, which makes the left column look wasted.
**Recipe.** Work & Co: a 1060px container (x=190 to 1250), a 360px label column, a 700px content column from x=550. Every section has one short label at 20px/500 and an otherwise blank column. Headline, media, index and form all share that one left edge. Oxygen Pictures: four 330px columns with 24px gutters, labels in column one, content from column three, blank columns kept empty. As a rows variant: 1px rules, 11px small caps label at x=144, content at x=720, rows about 110px tall.
**Why it works.** Repetition of one offset gives the page an obvious logic, and the blank column is constant, so it reads as structure.
**Seen on** Alessandro Stella, Stripe Sessions, Work & Co (gold); Oxygen Pictures (silver); Cascara Cabinet (expressive) (5 sites). **Suits** warm-neutral, gradient-light, light-precision, photo-led, illustrated, type-led; agency, portfolio, brand, food-drink, finance.

**Built.** This recipe transferred almost exactly on the first try, because it is pure geometry. It is the safest way to get a designed feel from limited assets.

```css
.sec{display:grid;grid-template-columns:minmax(0,360px) minmax(0,700px);
  max-width:1060px;margin-inline:auto;padding-block:60px;border-top:1px solid var(--line)}
.sec>.label{font:500 20px/1.3 var(--font-text);letter-spacing:-.01em}
@media(max-width:760px){.sec{grid-template-columns:1fr;gap:24px;padding-inline:20px}}
```

<!-- v:layout.grid-system/heading-rail-content-grid -->
#### `heading-rail-content-grid`

**Feel.** Organised and useful. Reference material that is pleasant to read.
**Use when** every section has a title and a variable block of content: docs homes, model catalogues, product hubs. **Avoid** when the left column would hold long copy.
**Recipe.** Neon Docs: a 296px rail holding a 26/32 heading and 16/24 sub, top-aligned with a 688px content grid, 1px rule between sections, 58px padding either side. Meta AI: 32px gutters, a 320px sticky rail pinned 100px from top, a 1024px column from x=384, reused in every section. See [`references/motion/scroll.md`](../motion/scroll.md) for sticky behaviour.
**Seen on** Meta AI, Neon Docs (gold); three.js (silver) (3 sites). **Suits** light-precision, mono-technical, dark-precision; devtool, ai, saas.

<!-- v:layout.grid-system/midline-heading-lede -->
#### `midline-heading-lede`

**Feel.** Quiet authority. The title and the explanation are given equal standing.
**Use when** product imagery is the star and text should stay out of its way. **Avoid** if your plates are weak, since this page shape has nothing else to hold attention.
**Recipe.** A 1280px rail split in two with a 64px gap gives x=80 and x=752. Heading 48/48 at x=80, lede 24/32 at x=752 in 70% ink, text link 30px beneath, plate about 80px below and outdented 24px from the text. Section padding 128px, full-bleed hairline between sections. Repeat without change.
**Why it works.** Splitting at the midline leaves large areas empty, and the eye reads a two-column heading as far more considered than a centred stack.
**Seen on** Linear, Notion About (gold); Vercel AI (silver) (3 sites). **Suits** light-precision, dark-precision; saas, other, ai, devtool.

**Built.** First attempt looked cheap because the product sat in a bordered panel. The real thing has no outer box at all. A dimmed board recedes, one focal card stays at full brightness in front, and the composition fades into the ground on its right and bottom edges.

```css
.pad{width:min(1280px,100% - 40px);margin-inline:auto}
.sec{padding-block:128px;border-top:1px solid var(--line)}
.head{display:grid;grid-template-columns:1fr 1fr;column-gap:64px}
.head h2{font:500 48px/1 var(--font-display)}
.head p{font:400 24px/32px var(--font-text);color:var(--ink-2)}
/* No box. Depth comes from brightness, and the edges dissolve into the page */
.plate{position:relative;height:520px;margin:80px -24px 0;
  -webkit-mask:linear-gradient(90deg,#000 62%,transparent 98%),linear-gradient(#000 74%,transparent);
  -webkit-mask-composite:source-in;mask-composite:intersect}
.plate .board{position:absolute;inset:0 -40px 0 300px;opacity:.78}
.plate .focal{position:absolute;left:0;top:0;width:476px;background:var(--surface);
  border:1px solid var(--line);border-radius:12px}
```

Dim the board to 75 to 80%. At 58% it became unreadable and looked broken, so keep it legible as real work.

<!-- v:layout.grid-system/hard-midline-panels -->
#### `hard-midline-panels`

**Feel.** Fashion house. Severe, symmetrical, expensive.
**Use when** every section has a strong image or colour to fill a half. **Avoid** with text-led content.
**Recipe.** Acne Studios: the page divides exactly at x=720. Paired 720px panels butt with zero gutter. News column, newsletter band, footer columns and caption starts all land on 720, then 360px sub-lines at x=370 and x=1090. Focus State builds a whole site from 50% columns. Symbol Studio insets a white sheet 16px on a pale ground with a 1px vertical rule at the centre, and hangs text about 32px off the rule.
**Seen on** Acne Studios (gold); Symbol Studio (silver); Design Podcast (Focus State) (expressive) (3 sites). **Suits** photo-led, light-precision, bold-colour; fashion, agency, editorial, ecommerce, brand.

<!-- v:layout.grid-system/text-inset-from-media -->
#### `text-inset-from-media`

**Feel.** Clean with a hidden precision.
**Use when** you use large rounded image cards and want them to feel aligned to the copy. **Avoid** with very small cards.
**Recipe.** Cards and images start at x=32. All text starts at x=64, in every section. Text under a card lines up with text inside the card, not with the card's edge. Result: one invisible reading line through hero, statements and tiles, while images still fill to the 32px margin.
**Seen on** Nuro (gold) (1 site). **Suits** photo-led, light-precision; brand, saas, ai.

<!-- v:layout.grid-system/hanging-outdent -->
#### `hanging-outdent`

**Feel.** A well-set essay. Literate and calm.
**Use when** a page is long-form argument in sections. **Avoid** with dense product content.
**Recipe.** Headings at 64 to 80px, weight 400, at x=158. All body at x=298, running about 985px wide. A 140px hanging outdent, repeated down the page with about 250px plain gaps. It is the only grid gesture, so nothing else should compete.
**Seen on** Elyx (gold) (1 site). **Suits** warm-neutral, type-led, dark-precision; saas, editorial, ai.

<!-- v:layout.grid-system/rule-opened-title-body-split -->
#### `rule-opened-title-body-split`

**Feel.** Considered, institutional, slightly European.
**Use when** a section has a title, a short body and one image. **Avoid** when body copy is long, since it must fit against the column's bottom.
**Recipe.** A 2px ink rule across 32px gutters opens each section. Title 52/52 at top left, body 20/24 pinned to the bottom of the same column, 681px media at the right from x=727 about 35px below the rule. Title and body sit far apart on purpose. The rule and the column hold them together.
**Seen on** ECI (gold) (1 site). **Suits** photo-led, light-precision, type-led; ai, finance, brand.

<!-- v:layout.grid-system/centred-spine-side-captions -->
#### `centred-spine-side-captions`

**Feel.** A drawing set. Rigorous and spare.
**Use when** you are listing projects as equal-sized images. **Avoid** in anything commercial, where the right 500px of nothing would feel like a mistake.
**Recipe.** Images centred on x=720. Captions right-aligned about 33px left of each image. The right 500px stays blank for the whole page. Asymmetry comes only from the captions, which sit against the image edge like labels on a drawing.
**Seen on** BIG (gold) (1 site). **Suits** photo-led, warm-neutral; architecture, portfolio, culture.

<!-- v:layout.grid-system/asymmetric-index-columns -->
#### `asymmetric-index-columns`

**Feel.** A designer's own index page.
**Use when** a site is a list of links and a short bio. **Avoid** when it needs to sell anything.
**Recipe.** Columns start at x=10, 804, 963 and 1201, all hanging from one top line. About 190px separates the bio from the lists, which sit 160 to 240px apart. 10px right margin. Ne Geurra's version uses three zones of about 300px, 580px and the remainder on 16px gutters.
**Seen on** Ne Geurra (gold); George Thomas Hatton (silver) (2 sites). **Suits** type-led; ecommerce, portfolio, culture.

### Unusual grids

Each of these replaces the columns with something else. Use only with a real reason.

<!-- v:layout.grid-system/viewport-as-grid -->
#### `viewport-as-grid`

**Feel.** Composed like a poster, exact to the pixel.
**Use when** the page is a stage for one thing at a time. **Avoid** on long content pages.
**Recipe.** International Magic divides a 900px viewport 16/56/16/724/16/56/16 for nav, media and caption. Media height derives from the chrome, so pinned frames never touch the trays. Use `calc()` against `100dvh`. BCR Law splits the viewport into four 360x900 columns of dark grounds, no gaps. Yamauchi aligns everything to the logo: name flush to its left edge, a bar flush to its right.
**Seen on** International Magic (gold); BCR Law LLP (silver); Yamauchi No.10 Family Office (expressive) (3 sites). **Suits** light-precision, bold-colour, mono-technical; agency, local-business, finance.

<!-- v:layout.grid-system/mosaic-feed -->
#### `mosaic-feed`

**Feel.** A pasted-up zine, or an artist's wall.
**Use when** a brand or archive has a mass of artwork and wants personality. **Avoid** in a professional SaaS register.
**Recipe.** Oatly: about 640px, 305px and double-height tiles on 36px gutters with no row alignment, and empty cells filled with a dot screen so holes look intended. Elisa Breyer: four equal columns on about 2px gutters, heights following the artwork.
**Seen on** Elisa Breyer Archive (gold); Oatly (expressive) (2 sites). **Suits** photo-led, expressive; culture, food-drink, brand.

<!-- v:layout.grid-system/spreadsheet-page -->
#### `spreadsheet-page`

**Feel.** Raw data as the design.
**Use when** a roster or programme really is a table. **Avoid** anywhere a client must feel looked after.
**Recipe.** Visible table on pale grey: 1px mid-grey lines, a 40px number column, a 320px name column, then 80px cells, 19px rows. No margins, cards or sections. Spacer rows separate groups.
**Seen on** Beckmans Examensutstallning 2024 (expressive) (1 site). **Suits** mono-technical; education, culture.

### Grid mistakes

- **Letting a card's padding move the reading line.** My first rails demo set text inside a tile at x=144 while everything else held x=104. The page instantly felt looser. Butt the tile against the rails so its padding lands text back on the line, or take the padding off.
- **Nesting frames.** A bordered card inside a ruled cell is a frame in a frame. My first ruled cells did this and read as a dashboard template. Remove the inner border and let the art hit the rule.
- **Squat cells.** Cells at 330x600 feel like a table row. Real cells run close to square. Add height, and put 64 to 80px between text and art.
- **Floating art.** Art with equal padding on all four sides sits there like a sticker. Crop it with a rule, bleed it off an edge, or sink it to the floor of the cell.
- **`img{max-width:100%}` eating a bleed.** The usual CSS reset silently defeats negative-margin bleeds. My image stopped at x=1320 instead of x=1352 with no error. Set `max-width:none` on anything meant to run wider than its parent.
- **Doubled hairlines.** Two adjacent cells with their own borders draw a 2px line. Use `gap:1px` on a grid with a `--line` background.
- **Rails on a page that does not earn them.** A drawn grid with misaligned content is worse than no grid. Only one gold page in five draws rails.
- **Rails stronger than the register allows.** In precision registers rails stay within about 25 levels of the ground, and beyond that they become the loudest thing on the page. Stronger lines are a different move: Sequoia's three rules sit 76 levels off and Bakstad's single rail is near black. That editorial look works only with very few lines.
- **Decorating a rail.** Vertical text running up a rail reads as a template flourish. It has one analyst record and scored 3.
- **Equal thirds all the way down.** Three equal cards, then three more, is not a grid. Change the column count, or leave one column blank.

## 3 Section rhythm

Rhythm is what the scrollbar would sound like. It tells the reader where one idea ends, and it stops a long page from feeling like one long grey block. Generated pages give every section the same padding, the same centred heading and the same weight, so 8,000px has no beats in it.

What separates great from cheap:

- **The beat is fixed and the phrasing changes.** Gold pages use a median of two section paddings. Hierarchy between sections comes from the small gap and the large gap, not from ten slightly different values.
- **A separator is a choice made once.** Ground change, hairline or empty space. Exa makes colour replace every divider. Cal.com makes space do it. Polar uses a hairline. None of them mixes the three casually.
- **Dark blocks are rooms, not stripes.** A short dark band looks like a banner. Public's black block is about 950px tall and packed with product, so you walk into it.
- **Sections change shape, not just colour.** Tinting every other section is the laziest rhythm there is. Alternating ground without changing what happens inside gives you stripes.

**Measured.** Section padding: gold 80 / 96 / 128px, silver 64 / 80 / 110px. Page tone: 27% of gold pages stay light at every stop, 11% stay dark, 41% contain a hard light-to-dark flip. Pages rarely have more than one dark block before the footer. Tint bands sit very near white: a 2 to 4% step. Gaps on band-free pages run 160 to 240px. Page height: median 8,372px on gold.

### Rhythm variants

<!-- v:layout.section-rhythm/quiet-tint-bands -->
#### `quiet-tint-bands`

**Feel.** Orderly and institutional, almost invisible.
**Use when** a page is long, mostly informational, and should read as a list of chapters. **Avoid** on short pages, where it adds nothing, and never as your only source of variety.
**Recipe.** Full-bleed bands alternate `--bg` and a 2 to 4% tint, with 96 to 120px padding and the same rail inside. Rails and guides stay unbroken across the change. Cards take the opposite tone of their band, so one pair of greys does all the separation. On Stripe Connect some joins are skewed.
**Seen on** Stripe Billing, Stripe Connect (gold); Svix, web.dev, Apple Design (silver) (5 sites). **Suits** light-precision; devtool, finance, saas.

<!-- v:layout.section-rhythm/space-only-gaps -->
#### `space-only-gaps`

**Feel.** Airy and modern. Confident enough not to need dividers.
**Use when** modules are dense and strong on their own, on developer and product pages. **Avoid** with sparse modules, since space around thin content reads as an unfinished page.
**Recipe.** One ground from nav to footer. No dividers, bands or tints. 160 to 240px of empty page between sections. Modules themselves stay tight, with hairline cards. Cal.com runs 14,729px this way on a 1264px rail. Meridian pushes gaps to 240 to 320px and opens each section with a heading left and a sub on the right half of the same row.
**Seen on** Cal.com, Vercel AI SDK (gold); Meridian (expressive) (3 sites). **Suits** light-precision, bold-colour, dark-precision; saas, devtool, ai, finance.

<!-- v:layout.section-rhythm/repeating-unit-cadence -->
#### `repeating-unit-cadence`

**Feel.** Steady, almost hypnotic. A ledger or a long essay.
**Use when** content is truly serial: changelogs, journals, case lists. **Avoid** with five or fewer items, where a repeat cannot establish itself.
**Recipe.** One unit repeats exactly, and replaces section headings. Polar: 1px rule across 1280px, about 100px clear, label, claim, body, full-width plate. Resend's changelog: 400px cover, 20px gap, 36px title, 18px line, 16px gap, 24px author row, 66px gap, across 70,739px. Nicole Heim: photo, 70px gap, 63px paragraph, 15px link, 2px rule, 66px gap, which makes a 7,400px page feel like one essay.
**Seen on** Nicole Heim Studio, Polar, Resend Changelog (gold) (3 sites). **Suits** dark-precision, photo-led, light-precision; agency, saas, devtool, editorial.

<!-- v:layout.section-rhythm/hard-dark-cuts -->
#### `hard-dark-cuts`

**Feel.** Decisive. Contrast replaces decoration.
**Use when** a light page has one important chapter to set apart, such as your developer story, or a pro tier. **Avoid** using it more than twice, because repeated cuts lose their force.
**Recipe.** Long light runs broken by an edge-to-edge dark block of about 950px, at least one full viewport. No gradient at the boundary. The block must be dense with product at real scale, not three small text cells. A fixed nav flips colour exactly at the cut. Place it 25 to 50% down.
**Why it works.** A viewport-filling block changes where you are. A shorter band only changes what you are looking at.
**Seen on** Public, Gagosian, Stone Island, Theatre Memory (gold); Fenriz Gym (silver), and 1 more (6 sites). **Suits** photo-led, type-led, light-precision, mono-technical; culture, finance, fashion, health, agency, saas.

**Built.** My first block was 520px with three text cells and looked like a banner. Making it 960px tall and filling each cell with a table, chart or code block, cropped by the cell floor, brought it level with the real frame.

```css
.cut{min-height:960px;padding-block:120px}  /* plus .flip from the base code */
.cut .cells{display:grid;grid-template-columns:repeat(3,1fr);margin-top:72px;
  border:1px solid var(--line);border-radius:12px;overflow:hidden}
.cut .cells>div{min-height:440px;padding:32px 32px 0;border-left:1px solid var(--line);
  display:flex;flex-direction:column;overflow:hidden}
.cut .cells>div>:last-child{margin-top:auto}  /* product sits on the floor of its cell */
```

```js
// Flip the fixed nav exactly when the block reaches it
new IntersectionObserver(([e])=>nav.dataset.tone=e.isIntersecting?'flip':'',
  {rootMargin:'0px 0px -94% 0px'}).observe(document.querySelector('.cut'));
```

<!-- v:layout.section-rhythm/butted-colour-blocks -->
#### `butted-colour-blocks`

**Feel.** Bold, friendly, poster-like. Colour does the pacing.
**Use when** a consumer brand or culture organisation has a confident palette. **Avoid** in a precision register, and avoid more than one idea per block.
**Recipe.** Full-bleed flat grounds butt directly, with no gutter, gradient or rule. Each block is 500 to 700px and holds one headline, one product, one action. Analogue steps through greys, a diagonal, near-white and black. FigJam alternates three pastels with white across 13,116px. Philadelphia Orchestra lets photo blocks overlap the seams so the bands feel stacked, not stitched. Framework leaves 12 to 16px white gutters between panels.
**Seen on** Analogue, Framework, Leo Cussen Centre for Law (gold); The Philadelphia Orchestra (silver); Convex (expressive), and 1 more (6 sites). **Suits** bold-colour, render-3d, light-precision, warm-neutral; ecommerce, education, culture, devtool, saas, brand, food-drink.

<!-- v:layout.section-rhythm/chapter-colour-rooms -->
#### `chapter-colour-rooms`

**Feel.** A designed report. Each chapter has its own air.
**Use when** a long story has real chapters, as in an impact report or a campaign. **Avoid** on anything transactional.
**Recipe.** The whole page changes ground and ink per chapter, four or five designed colourways, with a scroll crossfade between rooms. Cards stay one constant off-white in every room, which is what keeps it one system.
**Seen on** Driftime Impact Report 2022 (silver) (1 site). **Suits** type-led, expressive, bold-colour; agency, editorial, culture.

<!-- v:layout.section-rhythm/rounded-colour-sheets -->
#### `rounded-colour-sheets`

**Feel.** Soft, tactile, friendly. Each colour is a sheet of paper sliding over the last.
**Use when** a consumer product wants warmth. **Avoid** in precision registers, and on pages with many short sections, because the radius stops reading as a sheet.
**Recipe.** Corner radius 40 to 80px. Each section's bottom corners round over the next. There is no straight edge wherever colour changes.
**Seen on** Wispr Flow (gold); Canary (silver); David Heckhoff (expressive) (3 sites). **Suits** warm-neutral, illustrated, render-3d, soft-pastel; saas, portfolio, brand, food-drink.

**Built.** The radius worked at once, but my first version alternated image-left and image-right inside the sheets and looked like a template. Change the interior from sheet to sheet: a text-and-image split, then a centred portrait that rises into the curve, then a text-only close.

```css
.sheet{--r:80px;position:relative;padding-block:128px;border-radius:0 0 var(--r) var(--r);
  background:var(--g,var(--bg));color:var(--c,var(--ink))}
.sheet+.sheet{margin-top:calc(var(--r)*-1);padding-top:calc(128px + var(--r))}
.sheet:nth-child(1){z-index:4}.sheet:nth-child(2){z-index:3}.sheet:nth-child(3){z-index:2}.sheet:nth-child(4){z-index:1}
.sheet.deep{--g:var(--deep);--c:var(--bg);--ink:var(--bg);--ink-2:color-mix(in srgb,var(--bg) 74%,transparent)}
@media(max-width:760px){.sheet{--r:32px;padding-block:72px}.sheet+.sheet{padding-top:calc(72px + var(--r))}}
```

<!-- v:layout.section-rhythm/width-step-panels -->
#### `width-step-panels`

**Feel.** Well-organised stacked plates, tidy and premium.
**Use when** a SaaS or fintech product has panels of different importance. **Avoid** when every panel is equal.
**Recipe.** Two widths alternate on one axis, 1392px edge panels and 1184px contained blocks (Lithic), radius 12 to 16. About 120px between chapters and only 24px between stacked panels, so related panels fuse. No full-bleed bands. Factory alternates bare content with inset radius-12 blocks on a 24px gutter.
**Seen on** Factory, Kinfolk, Lithic (gold) (3 sites). **Suits** light-precision, photo-led, soft-pastel, warm-neutral; ai, editorial, finance, saas.

**Built.**

```css
.edge{width:min(1392px,100% - 32px);margin-inline:auto}
.inner{width:min(1184px,100% - 32px);margin-inline:auto}
.chapter{margin-top:120px}.stack>*+*{margin-top:24px}
.panel{border-radius:16px;padding:72px 96px;min-height:520px;overflow:hidden;
  display:grid;grid-template-columns:5fr 7fr;gap:64px;align-items:center}
.panel.tint{background:color-mix(in srgb,var(--accent) 12%,var(--bg))}
```

<!-- v:layout.section-rhythm/panel-count-steps -->
#### `panel-count-steps`

**Feel.** Clear and considered. The page has a visible logic.
**Use when** features have a natural hierarchy of one, then two, then several. **Avoid** when forcing items into a count they do not have.
**Recipe.** A 1024px column, 24px gaps. Rows step through one full panel, two 500px panels, then three 325px text panels, each group opened by a centred H2 with about 120px above. Shape changes while fill and radius never do.
**Seen on** Notion Calendar (gold) (1 site). **Suits** light-precision, soft-pastel; saas, ai, devtool.

<!-- v:layout.section-rhythm/scene-per-viewport -->
#### `scene-per-viewport`

**Feel.** A film. Sparse, expensive, one thing at a time.
**Use when** you have superb photography or video and little to say, in hardware, cars and hospitality. **Avoid** without image quality to carry it.
**Recipe.** Each screen is a 100vh full-bleed image with one title and at most one action, on a type system of one or two sizes. 1X's whole site is 3,013px. Polestar butts photo and white type bands with zero gap, holding all vertical space inside the bands. Apple Vision Pro rests on a 270px white band holding only controls, with a break about every 1,800px.
**Seen on** 1X, Apple Vision Pro, Polestar (gold) (3 sites). **Suits** photo-led, render-3d; brand, ecommerce, hospitality.

<!-- v:layout.section-rhythm/interlude-between-modules -->
#### `interlude-between-modules`

**Feel.** An argument taking a breath.
**Use when** a long feature run needs a turn in its reasoning. **Avoid** using more than twice.
**Recipe.** A 112/115 three-line statement, left aligned at x=150, no eyebrow, about 150px above and below. Or a wordless row: Comet sets six spheres of mixed sizes on one centre line in a 320px full-bleed row, restating its motif.
**Seen on** Comet (gold); Airpost (silver) (2 sites). **Suits** warm-neutral, dark-precision, light-precision; ai, saas.

<!-- v:layout.section-rhythm/curved-section-seams -->
#### `curved-section-seams`

**Feel.** Slightly soft, slightly playful.
**Use when** a section change needs a little character and a hairline is too cold. **Avoid** in most cases. It is one of the easiest things to do badly.
**Recipe.** A shallow elliptical arc, about 14px rise across 1000px, one `clip-path` curve reused at each colour change. It must be barely visible. It is the page's only decorative geometry.
**Seen on** UploadThing (silver) (1 site). **Suits** bold-colour; devtool, saas.

<!-- v:layout.section-rhythm/collapsed-chapters -->
#### `collapsed-chapters`

**Feel.** Efficient. Respects a reader who only wants one thing.
**Use when** a pricing or catalogue page would otherwise run very long. **Avoid** hiding the primary offer.
**Recipe.** Secondary families collapse to 56px headings with a plus, about 266px tall between full-bleed hairlines. Heading takes the accent on hover.
**Seen on** Webflow Pricing (silver) (1 site). **Suits** light-precision; saas, devtool, finance.

### Rhythm mistakes

- **A short dark band.** Anything under one viewport reads as a promo strip. Give it the full height or drop it.
- **Stripes.** Alternating ground with the same section inside gives you a striped page, not a rhythm.
- **Left-right-left-right.** The zig-zag of image and text is the template's signature move, and it survived even inside my correct rounded sheets. Vary the shape, not just the side.
- **Ten paddings.** Values like 72, 88, 96, 104 and 120 on one page read as drift. Choose one or two.
- **Mixed separators.** A hairline here, a tint there and a large gap elsewhere, without a rule for which is which.
- **Wave dividers.** Deep curves and SVG waves date a page to a 2016 template. Hard edges or a barely visible arc only.
- **Padding the bottom of a section that ends in cropped art.** Art that is cropped by a rule needs zero bottom padding. Otherwise the crop has nothing to meet.
- **Every section the same height.** Give at least one short beat, even 200px. A page with no short sections has no pulse.

## 4 Whitespace

Whitespace is not what is left over. It is a material with a price, and it is bought with quality elsewhere on the page. An empty page with a beautiful photograph feels confident. The same page with an average photograph feels unfinished. Generated pages use a timid middle amount: enough space to look polite, not enough to feel like a decision.

What separates great from cheap:

- **Empty space needs a job.** X8's text panel keeps its upper two thirds empty so that emptiness matches the photo's area. Work & Co's label column holds one word per section so a third of the page is reliably blank. If you cannot state the job, the space is only absence.
- **Contrast of scale makes space visible.** A 14px line above an 870px image reads as enormous space. The same gap between ordinary elements reads as nothing.
- **Hold the void for the whole scroll.** BIG leaves about 15% left and 35% right empty on every screen. A margin that appears for one section and vanishes in the next is not a margin.
- **Density and void are a pair.** Cal.com earns 240px gaps with tightly packed modules. Space needs something to contrast with.

**Measured.** Gallery pages run 60 to 66% empty per viewport with 120 to 260px between objects. Extreme pages hold about 90% plain ground. Single-measure pages start 100 to 170px down. About one measured page in ten reports a document height of one screen, though some of those scroll an inner panel, and page heights under 3,000px are 11% of gold.

### Whitespace variants

<!-- v:layout.whitespace/single-measure-void -->
#### `single-measure-void`

**Feel.** A quiet person who is very sure of themselves.
**Use when** a personal site or small studio has few words and excellent type. **Avoid** for any page that must persuade a stranger.
**Recipe.** One 580 to 640px column. No nav bar, cards or rules. 100 to 170px above the first line, 55 to 80px between groups. Gaps alone separate identity, statement and record. Type stays around 14 to 16px. Add one small crafted detail, since the whole page rests on it: Paco Coursey sets a single italic phrase, Aniket a ribbon canvas.
**Seen on** Paco Coursey, Aniket (gold); Muda 26 (silver); Cathy Dolle (expressive) (4 sites). **Suits** photo-led, type-led, light-precision; portfolio, culture, agency.

**Built.** Transferred almost exactly on the first try.

```css
.m{width:min(640px,100% - 40px);margin-inline:auto;padding-block:100px 120px;font-size:15px;line-height:1.6}
.m>section+section{margin-top:64px}
.ix{display:grid;grid-template-columns:repeat(3,1fr);column-gap:24px}   /* 224px pitch */
.ix h2{font:400 13px/1.6 var(--font-text);color:var(--ink-3);margin-bottom:12px}
.ix li{margin-bottom:20px}.ix span{display:block;color:var(--ink-2);font-size:14px}
```

<!-- v:layout.whitespace/gallery-wall-void -->
#### `gallery-wall-void`

**Feel.** Prints hung in a white room.
**Use when** the work is architecture, photography or craft, and every image is strong. **Avoid** with weak or inconsistent imagery. Nothing else is there to help.
**Recipe.** Plain ground. One image per viewport, 60 to 66% empty, 120 to 260px between objects. No dividers, tints or shadows. One caption per screen at most. Bakstad offsets each image about 130px from a single near-black rail at x=91. TR Studio holds at least 277px empty on each side. Per Appelgren uses no rule, card, tint or shadow anywhere.
**Seen on** BIG, Bakstad Construction, Oliver Dupuy, TR Studio, Per Appelgren (gold) (5 sites). **Suits** photo-led, warm-neutral; architecture, portfolio, agency, culture.

<!-- v:layout.whitespace/one-screen-page -->
#### `one-screen-page`

**Feel.** So established it need not explain itself.
**Use when** a company is a holding, a fund, or a product with one action. **Avoid** when visitors arrive needing to be convinced.
**Recipe.** Document height equals the viewport. Block: everything on x=720, link rows about 45px from top and 58px from bottom, about 317px clear around the centre group. Ghostty: window, one sentence, two buttons in an 856px column on a flat ground. Accel's version runs slightly longer, at 1,178px, with one card and 40% empty.
**Seen on** Block, Fabrica Partners (gold); Accel, George Thomas Hatton (silver); Ghostty (expressive), and 1 more (6 sites). **Suits** light-precision, type-led, mono-technical; finance, portfolio, devtool.

**Built.** Use `100dvh` so a phone's browser bar does not push the bottom row off-screen, and a `min-height` so short windows do not overlap.

```css
.page{height:100dvh;min-height:560px;display:grid;grid-template-rows:auto 1fr auto;
  text-align:center;padding-block:44px 56px}
.page .mid{align-self:center;justify-self:center;max-width:22em}
.page .row{display:flex;justify-content:center;gap:36px;font-size:11.5px;letter-spacing:.09em;text-transform:uppercase}
```

<!-- v:layout.whitespace/edge-pinned-empty-centre -->
#### `edge-pinned-empty-centre`

**Feel.** An instrument at rest.
**Use when** one live object owns the centre. **Avoid** with static content, which leaves the centre dead.
**Recipe.** All UI pinned to the edges of the field: wordmark top left, timestamp top centre, small square top right, two-line 12px blurb bottom left. The centre holds only the object.
**Seen on** Overtime (expressive) (1 site). **Suits** mono-technical, type-led, photo-led; agency, culture, portfolio.

<!-- v:layout.whitespace/one-object-per-scroll -->
#### `one-object-per-scroll`

**Feel.** A catalogue you turn slowly.
**Use when** each item deserves its own moment. **Avoid** with more than a couple of dozen items.
**Recipe.** One centred element on a plain ground, about 200px vertical gaps, over 60% empty. A central 430px column, with optional anchors at 35px margins. No rules, tints or cards.
**Seen on** Theatre Memory (gold); Typohypergraphic Object (expressive) (2 sites). **Suits** type-led, photo-led; culture, editorial.

<!-- v:layout.whitespace/empty-label-column -->
#### `empty-label-column`

**Feel.** A printed index.
**Use when** you are using `label-left-content-right` and want it to feel deliberate. **Avoid** filling the column later with extras.
**Recipe.** One short 20px/500 label per section in a 360px column, blank otherwise, so about a third of the container stays empty down the page. Its power is that it never changes.
**Seen on** Work & Co (gold) (1 site). **Suits** light-precision, type-led; agency, portfolio, finance.

<!-- v:layout.whitespace/bottom-anchored-empty-panel -->
#### `bottom-anchored-empty-panel`

**Feel.** Fashion editorial. Tension between a heavy base and an empty top.
**Use when** a photograph fills the other half of a split, on product and brand pages. **Avoid** when the copy is long.
**Recipe.** In a tall panel use only the lowest third: 12 to 13px paragraph, heavy 56px headline with the price or number at the far right, a small 204x138 thumbnail, a small action, everything sitting on the bottom edge. The upper two thirds stay plain. Fred's version uses a title at the top of a tall cell, about 140px gap, and images aligned to a shared base.
**Seen on** X8 Eyewear, Fred (gold) (2 sites). **Suits** photo-led, mono-technical; fashion, ecommerce, brand.

**Built.** First render centred the object inside its half, and the split looked like a stock product page. Scale the photo until the subject crops past the frame on at least two sides, and bleed it off the top, right and bottom. Keep a 15px margin only on the panel's outer side.

```css
.split{display:grid;grid-template-columns:1fr 1fr;min-height:100vh;padding-left:15px}
.panel{display:flex;flex-direction:column;padding:16px}
.panel .foot{margin-top:auto}             /* the whole trick: push everything to the floor */
.title{display:flex;justify-content:space-between;align-items:baseline;
  font:600 56px/1 var(--font-display);letter-spacing:-.045em;margin-bottom:16px}
.crop{overflow:hidden}
.crop img{height:100vh;width:100%;object-fit:cover;scale:1.9;transform-origin:50% 62%}
```

<!-- v:layout.whitespace/tiny-type-huge-void -->
#### `tiny-type-huge-void`

**Feel.** Very quiet, very expensive. The opposite of a headline.
**Use when** the imagery is extraordinary and the audience already cares. **Avoid** on anything that needs to explain itself.
**Recipe.** One 14px centred line at about y=270, a 12px grey line 30px below, then about 300px of nothing before 870px imagery. No display headline.
**Seen on** Lazy Eight (silver) (1 site). **Suits** photo-led, mono-technical; agency, portfolio, culture.

<!-- v:layout.whitespace/pause-viewport -->
#### `pause-viewport`

**Feel.** A held breath.
**Use when** a long page needs a marked turn, such as a project boundary or a finale. **Avoid** using more than two or three times.
**Recipe.** One near-empty viewport with a single title or three-line heading and 380 to 600px of space around it. No chrome. Make.town aligns it to x=493, off-centre, which reads as more deliberate than a centred line.
**Seen on** International Magic (gold); Rabbit (silver); Make Town (expressive) (3 sites). **Suits** light-precision, bold-colour, type-led, photo-led; agency, brand, local-business, culture.

<!-- v:layout.whitespace/measured-generosity -->
#### `measured-generosity`

**Feel.** Comfortable and unhurried. The everyday version of whitespace.
**Use when** you need generosity without a statement. This is the default for most pages.
**Recipe.** 96 to 160px between sections, 120px around centred 500px intros, side margins 40 to 133px, no cards or borders, hierarchy from size and hairlines. Attio Pricing stays white from nav to footer on about 160px gaps, bookended by a black strip and a dark footer. Babylonstoren lets images float in a column from x=133 to x=1307 on about 100px rhythm.
**Seen on** Babylonstoren, Aman, Attio Pricing, Linear Method, Villa Aurelia (gold), and 2 more (7 sites). **Suits** photo-led, warm-neutral, light-precision, dark-precision; hospitality, saas, other, brand.

### Whitespace mistakes

- **Timid space.** 80px where the design needed 200px. If you are going for space, commit, or the page merely looks underfilled.
- **Space around weak content.** Whitespace magnifies what is inside it. Thin copy and average images need density, not more air.
- **A void that stops.** Keeping a blank margin for three sections and then filling it breaks the promise. Hold it to the footer.
- **Centring everything.** Centred stacks on empty ground read as a landing template. Empty space is far more interesting when the mass sits off-centre.
- **Filling the void.** Decorative blobs, faint grids and floating badges in empty space tell the reader you were afraid of it.
- **A centred subject in a half.** An object with air around it inside a 50/50 split feels like a stock product shot. Crop it past the frame.
- **One object per viewport on a sales page.** That density suits a gallery. Anything selling needs two objects per viewport.

## 5 Composition shifts

A composition shift is a section that moves the page's weight. Without them a long page is a stack of same-shaped boxes. With too many it is a collage. The skill is moving one axis at a time while the rail, padding and type stay put, so the reader feels a turn and not a new website.

What separates great from cheap:

- **Move one axis.** reMarkable changes image widths and offsets while type and ground stay constant. Ai2 swaps sides but repeats one interlock.
- **Overlap needs a reason and a limit.** One object crossing one seam adds depth. Many overlaps look accidental.
- **What stays on screen must deserve it.** A pinned panel is on view for 3,000px, so it needs something worth seeing for 3,000px.
- **Offsets must be large or absent.** A 180px offset reads as intent. A 30px offset reads as a bug.

**Measured.** Stagger offsets run 120 to 260px. Bleed photos run 42 to 60% of the viewport. Overlaps run 40 to 290px. Pinned splits are 40/60 or 50/50, on a 1px rule or no gutter at all.

### Composition variants

<!-- v:layout.composition-shift/pinned-panel-scroll-column -->
#### `pinned-panel-scroll-column`

**Feel.** A document with its title always in view. Useful and calm.
**Use when** one pitch can stay fixed while proof scrolls past: developer libraries, portfolios, single-product stories. **Avoid** with a long pitch, and below about 1000px wide.
**Recipe.** Viewport splits 40/60 by a 1px rule. The left 575px panel stays fixed with logo, art, headline, actions and footer links. The right 865px column scrolls as a document with sticky tabs. Julia Mohr uses a 50/50 split with a solid colour panel on the left. Deebak's canvas splits 1044x684 with a 348px sheet cut out of the top-right.
**Why it works.** The pitch never leaves the screen, so every scroll down is evidence for a claim still in view.
**Seen on** Better Auth (gold); Julia Loyd Mohr (silver); Deebak Tamilmani Portfolio, Three Zero Five Studio (expressive) (4 sites). **Suits** light-precision, warm-neutral, render-3d, expressive; devtool, portfolio, architecture, culture.

**Built.** My first panel held only a headline and sat idle for the entire scroll. Better Auth keeps a large dithered mark behind its headline, so the panel is a place, not a gap. Give it a resident object.

```css
.split{display:grid;grid-template-columns:40% 60%}
.pin{isolation:isolate;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;
  padding:24px 32px;border-right:1px solid var(--line)}
.pin .mid{margin-block:auto;position:relative}
/* One way to give the panel a resident object from nothing but the wordmark */
.pin .glyph{position:absolute;left:44px;top:-190px;z-index:-1;opacity:.55;
  font:800 400px/1 var(--font-display);color:transparent;
  background:radial-gradient(circle,var(--ink-3) 1.1px,transparent 1.3px) 0 0/6px 6px;
  -webkit-background-clip:text;background-clip:text}
.doc>section{padding:40px 48px;border-top:1px solid var(--line)}
@media(max-width:760px){.split{grid-template-columns:1fr}.pin{position:static;height:auto;min-height:70vh;border-right:0}}
```

<!-- v:layout.composition-shift/staggered-hung-images -->
#### `staggered-hung-images`

**Feel.** A designer laid these out by hand. Unhurried and warm.
**Use when** you have several good photographs telling one story. **Avoid** with screenshots or diagrams, which need alignment.
**Recipe.** No two images share a row or left edge. reMarkable: two 580px images with tops offset about 180px, left edges x=100 and x=760, then widths change to 553, 453 and 933 centred, with gaps of 120 to 200px and a caption beneath each. Bakstad hangs images 643, 397, 429, 536 and 372px wide at x=654, 224, 868, 746 and 224, so no two consecutive projects share an axis. Make.town applies the same idea to a letter's text column, which walks between x=968, 848 and 493.
**Why it works.** A 12-column grid still sits underneath, so the freedom is only apparent. That is why it reads as composed and not random.
**Seen on** Bakstad Construction, reMarkable (gold); i-D and Ray-Ban present RED, Make Town (expressive) (4 sites). **Suits** photo-led, warm-neutral, expressive, type-led; architecture, brand, culture, local-business, ecommerce.

**Built.** Geometry was right immediately. My first pass left one image per viewport and read as a gallery, too sparse for a page selling something. Pull images up with negative margins until two objects are always in view.

```css
.spread{display:grid;grid-template-columns:repeat(12,1fr);column-gap:24px}
.spread figure img{width:100%;object-fit:cover;aspect-ratio:var(--ar,4/3)}
.a{grid-column:1/7}
.b{grid-column:8/13;margin-top:180px;--ar:1/1}
.c{grid-column:2/7;margin-top:-120px}          /* rises beside .b, so the column overlaps in time */
.d{grid-column:8/12;margin-top:96px;--ar:4/5}
.e{grid-column:3/11;margin-top:-40px;--ar:21/9}
figcaption{font-size:14px;color:var(--ink-2);margin-top:14px;max-width:26em}
@media(max-width:760px){.spread{display:block}.spread figure{margin-top:48px}}
```

<!-- v:layout.composition-shift/bleed-side-alternation -->
#### `bleed-side-alternation`

**Feel.** A magazine turning pages.
**Use when** photo-led hospitality, food and local businesses need variety with little content. **Avoid** as a pure 50/50 left-right, which is the template.
**Recipe.** Every section changes which edge the photo bleeds from. Russell & Stellar uses widths of 700, 852 and 816px, with text left edges at x=20, 72, 840 and 884, and about 260px of ground between. Medusa622's photos, about 42% of the viewport, each touch the viewport edge and start partway down the block before, so the page descends as a staircase. MVRDV alternates 50/50 white band and image, flipping order each section.
**Seen on** MVRDV, Medusa622, Russell & Stellar, La Dolfina Jumping (silver) (4 sites). **Suits** photo-led; architecture, local-business, food-drink, fashion, hospitality.

<!-- v:layout.composition-shift/interlocked-panels -->
#### `interlocked-panels`

**Feel.** Blocks fitted together. Solid and original without being loud.
**Use when** each row is a story with a strong image and headline. **Avoid** with weak imagery or more than three or four rows.
**Recipe.** An image of about 706px and a flat panel of about 660px overlap. The panel starts about 65px below the image top and covers its right edge. A small tab steps out of the panel's top corner, so its silhouette is not a plain rectangle. Rows swap sides. Corners stay hard, and there are no shadows. Cacao Bean hangs a 1206x600 image about 290px past offset colour blocks that run off opposite edges.
**Why it works.** The stepped silhouette is doing what a shadow does elsewhere, and swapping sides reads as a system because the step repeats.
**Seen on** Ai2, Cacao Bean Restaurant and Café (silver) (2 sites). **Suits** bold-colour, warm-neutral; ai, food-drink, culture.

**Built.** This matched the real frame very closely on the first attempt.

```css
:root{--deep:color-mix(in srgb,var(--accent) 24%,var(--ink))}
.lock{display:grid;grid-template-columns:repeat(24,1fr);padding-block:64px}
.lock img{grid-column:1/15;grid-row:1;width:100%;height:520px;object-fit:cover}
.lock .p{grid-column:13/25;grid-row:1;margin-top:64px;position:relative;
  background:var(--deep);color:var(--bg);padding:64px 56px 56px}
.lock.flip img{grid-column:11/25}.lock.flip .p{grid-column:1/13}
/* the stepped tab: a piece of the panel rising out of its top corner */
.lock .p::before{content:"";position:absolute;right:0;top:-24px;width:42%;height:25px;background:var(--deep)}
.lock.flip .p::before{right:auto;left:0}
```

<!-- v:layout.composition-shift/seam-straddling-object -->
#### `seam-straddling-object`

**Feel.** The sections belong to each other. Depth without shadow.
**Use when** two neighbouring grounds should feel joined, usually at a product shot. **Avoid** when the object is cropped so it loses its meaning.
**Recipe.** A photo starts on one ground and overlaps about 140px into the next band, offset right of the copy column (Boston Dynamics). On Fly.io the first card row starts about 40px above the hero's bottom edge, crossing dark into light.
**Seen on** Boston Dynamics (silver); Fly.io Blog (expressive) (2 sites). **Suits** photo-led, illustrated; brand, editorial, saas.

<!-- v:layout.composition-shift/angled-section-cut -->
#### `angled-section-cut`

**Feel.** Momentum. Technical and optimistic.
**Use when** you can carry the same angle elsewhere. **Avoid** using as a one-off, and on warm or quiet brands.
**Recipe.** A boundary of about 6 degrees from a tint to white, not a rule. At the right edge flat accent parallelograms ride the cut and overlap, making a third colour where they cross. Build it as `slanted-chapter`, below.
**Seen on** Stripe Climate (gold) (1 site). **Suits** gradient-light; finance, saas.

<!-- v:layout.composition-shift/half-flip-parallax-columns -->
#### `half-flip-parallax-columns`

**Feel.** A sudden gear change.
**Use when** an agency page wants one strong set piece. **Avoid** in pages already rich in motion.
**Recipe.** Section flips to black. Left half: 40px grey caps statement and copy. Right half: two offset columns of radius-8 photos running at different scroll speeds, leaving staggered bottom edges against the white below.
**Seen on** Symbol Studio (silver) (1 site). **Suits** light-precision, photo-led; agency.

<!-- v:layout.composition-shift/opposite-margin-axis -->
#### `opposite-margin-axis`

**Feel.** Cinematic. The subject sits between its title and its action.
**Use when** every screen is a full-bleed image. **Avoid** on a busy image with no clear middle band.
**Recipe.** Headline at the left 32px margin and action at the right 32px margin, on one horizontal axis at about y=450. The subject fills the span between. Repeat exactly on every screen.
**Seen on** 1X (gold) (1 site). **Suits** photo-led; brand.

<!-- v:layout.composition-shift/product-as-page -->
#### `product-as-page`

**Feel.** The site is the product. Memorable and risky.
**Use when** the product has real personality and an audience that enjoys that, or when a feed is itself the pitch. **Avoid** for almost every other case. This is the most likely variant to become a costume.
**Recipe.** PostHog locks the document to the viewport: fixed menubar, icon columns left and right, a 1140x800 window with 24px radius over a wallpaper, and scrolling inside the window. Substack shows one pitch card, then the actual feed for about 4,000px, with the pitch returning mid-feed in a different format.
**Seen on** Substack (silver); PostHog, PostHog Handbook (expressive) (3 sites). **Suits** gradient-light, expressive, illustrated; saas, devtool.

<!-- v:layout.composition-shift/essay-under-collage -->
#### `essay-under-collage`

**Feel.** A thoughtful report with some ambition.
**Use when** a story section needs an opener with data in it. **Avoid** without real data to show.
**Recipe.** Overlapping photos, a 45-degree hatched block and a dark tile with small charts above. Essay column then starts at x=644, off-centre to the right, with 36px heading and 18/27 text.
**Seen on** Fundrise (silver) (1 site). **Suits** warm-neutral; finance, editorial.

<!-- v:layout.composition-shift/noticeboard-cards -->
#### `noticeboard-cards`

**Feel.** A community wall, handmade and warm.
**Use when** a club or local organisation has many small offers. **Avoid** in any corporate setting.
**Recipe.** Cards from about 216x114 to 570x380 on a strong ground, about 20px gaps, ragged left edges at x=140, 259, 377, 495 and 732, like posters on a wall. Every card is a link.
**Seen on** Shinbu Aikido Club (expressive) (1 site). **Suits** illustrated; local-business, culture.

### Composition mistakes

- **An empty pinned panel.** A headline alone on 40% of the screen sits idle through the whole scroll. Give it a resident object.
- **Small offsets.** Under about 80px, a stagger looks like an alignment bug.
- **Shifting everything at once.** New ground, new width, new columns and new type treatment in a single section is a new website.
- **Image-left, image-right as the only idea.** See rhythm mistakes. Change size, crop or count as well.
- **Stagger with screenshots.** Interfaces want alignment. Stagger suits photographs.
- **One image per viewport while selling.** Tighten until two objects are in view, by pulling the next image up with a negative top margin.
- **Overlap without a seam.** Overlap is only readable when it crosses a change of ground or edge. Floating one card over another on a flat ground just looks stacked.

## 6 Full-bleed breaks

A full-bleed break is the one moment a page leaves its rail. It only works because the rail held everywhere else. It is the loudest thing a layout can do, so most pages should do it once or twice. Done well it makes the page feel like it has a structure with a centre of gravity, and done badly it is a coloured stripe.

What separates great from cheap:

- **Scarcity.** Inngest's blue field is the only saturated area on the page, which is why it lands. Two such fields would cancel each other.
- **A break needs somewhere to go.** The section after it must return to the rail immediately and calmly.
- **Never a flat field with centred text.** That is the universal CTA band. The real ones have something else going on: grain, an edge that dissolves, product crossing the boundary, or a shape on the cut.
- **The edge is part of the design.** Hard cut, 6-degree slope, 90-degree steps, a radius. Choose one and reuse it. A shape used once reads as a decoration, and a shape used three times reads as an identity.

**Measured.** Solid statement fields run about one viewport tall with 64px type. Slants measure about 6 degrees, which is a `clip-path` rise of 10.5vw. Dark rooms use a 48px heading and a panel of about 640px. Inset sheets sit on 12px margins with radius 20. Pinned photos hold at 100vh.

### Break variants

<!-- v:layout.full-bleed-break/solid-colour-statement -->
#### `solid-colour-statement`

**Feel.** A single loud sentence in a quiet room.
**Use when** one line deserves the whole page's attention, once. **Avoid** more than once, or with a claim that is not worth the volume.
**Recipe.** Full bleed, about a viewport tall. A 64px two-line sentence sits bottom left, on the rail. Joby's turns the entire viewport one colour between photo sequences. Inngest adds what stops it being a poster: visible grain on the field, the right edge breaking into 14px squares of the page ground, and dark product windows overlapping both its top and bottom edges.
**Why it works.** The overlaps make the field a surface in a stack, not a stripe across the page.
**Seen on** Inngest, Joby (gold) (2 sites). **Suits** dark-precision, photo-led, bold-colour; devtool, brand, saas, ai.

**Built.** Flat `--accent` with type looked like a slide. Grain and the dissolve fixed that immediately, and the window overlap brought it level with the real frame. Leave at least 150px above an overlapping window or it collides with the section before. Text on `--accent` should use `--bg`, and check the pair reaches 4.5:1 for your palette.

```css
.field{position:relative;isolation:isolate;background:var(--accent);color:var(--bg);
  padding-block:300px 96px;margin-block:220px 200px}
.field h2{font-size:64px;line-height:1.08;max-width:15em}
/* grain: a small tiled turbulence, overlaid so it works on any accent */
.field::after{content:"";position:absolute;inset:0;z-index:-1;opacity:.5;mix-blend-mode:overlay;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 1.4 -.2'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E")}
.over{position:absolute;left:50%;translate:-50% 0;width:min(1200px,100% - 40px)}
.over.t{top:-150px}.over.b{bottom:-120px}
```

```js
// Dissolve the right edge into the page ground, denser towards the edge
let h='';for(let y=0;y<50;y++)for(let x=0;x<10;x++){
  const p=(x/9)**2.6*(.55+.45*Math.sin(y*1.7+x*.6)**2);
  h+=`<i style="opacity:${((x*7+y*13)%11)/11<p?1:0}"></i>`}
dissolve.innerHTML=h; // .dissolve{position:absolute;inset:0 0 0 auto;width:140px;display:grid;
                      //  grid-template-columns:repeat(10,14px);grid-auto-rows:14px;overflow:hidden;z-index:-1}
                      // .dissolve i{background:var(--bg)}
```

<!-- v:layout.full-bleed-break/dark-interlude-room -->
#### `dark-interlude-room`

**Feel.** The lights go down, and the page gets serious.
**Use when** trust, privacy or security deserve their own moment on a light page. **Avoid** as a generic dark stripe for variety.
**Recipe.** One full-bleed deep section with two soft blurred colour glows at the edges. 48px heading, tinted lede, a 640px panel with 24px radius and a 1px tinted border, small caps group labels. Exa's version steps through white, warm off-white, ink and a saturated band, all full width with hard edges and a 1280px container, replacing every divider with a change of colour.
**Seen on** Exa (gold); Copilot (silver) (2 sites). **Suits** light-precision, gradient-light; ai, finance, saas, devtool.

<!-- v:layout.full-bleed-break/slanted-chapter -->
#### `slanted-chapter`

**Feel.** Momentum and engineering confidence.
**Use when** a chapter should feel like a change of gear, and you can repeat the angle elsewhere. **Avoid** on warm or quiet brands, and never without the strips.
**Recipe.** The chapter begins on an edge of about 6 degrees: a `clip-path` rise of 10.5vw. Two or three flat strips ride the cut at the right edge, sharing its exact angle and overlapping. The accent switches for this chapter, panels raise one step with a 1px border, and page rails continue through at low contrast.
**Why it works.** The strips turn a slanted edge from a CSS trick into a designed object. They also reuse the page's colours at the moment of change.
**Seen on** Stripe Payments (gold) (1 site). **Suits** gradient-light, light-precision; finance, saas.

**Built.** My first attempt had a 4.6-degree slope and no strips, and looked like a 2014 Bootstrap landing page. Going to 6 degrees and adding strips matched the real frame closely. A strip's top edge must be the cut itself, so compute its height from the same `--slope`.

```css
.cut{--slope:10.5vw;position:relative}
.chapter{clip-path:polygon(0 var(--slope),100% 0,100% 100%,0 100%);
  padding-block:calc(var(--slope) + 96px) 120px;
  background:var(--deep);color:var(--bg)}
.strip{--w:22vw;--t:20px;--o:0px;position:absolute;right:0;top:var(--o);z-index:1;width:var(--w);
  height:calc(var(--slope)*var(--w)/100vw + var(--t));pointer-events:none;background:var(--c);
  clip-path:polygon(0 calc(100% - var(--t)),100% 0,100% var(--t),0 100%)}
.strip.a{--c:var(--accent);--w:24vw;--t:24px;--o:-24px}
.strip.b{--c:color-mix(in srgb,var(--accent) 35%,var(--bg));--w:14vw;--t:14px;--o:-4px}
.strip.c{--c:color-mix(in srgb,var(--accent) 60%,var(--ink));--w:13vw;--t:26px;--o:6px}
```

```html
<div class="cut"><span class="strip a"></span><span class="strip b"></span><span class="strip c"></span>
  <section class="chapter">...</section></div>
```

Strips must sit outside the clipped element, or the `clip-path` removes them.

<!-- v:layout.full-bleed-break/diagonal-split-panel -->
#### `diagonal-split-panel`

**Feel.** Face-off. Two things in tension.
**Use when** you are showing exactly two products of equal rank. **Avoid** for three or more.
**Recipe.** An edge-to-edge panel cut by a diagonal of about 60 degrees: deep colour fading to black at left, white fading to grey at right. Two products overlap the cut. Names at about 47px/500 at opposite sides with underlined actions.
**Seen on** Analogue (gold) (1 site). **Suits** render-3d, photo-led; ecommerce, brand.

<!-- v:layout.full-bleed-break/stepped-section-edge -->
#### `stepped-section-edge`

**Feel.** Architectural. An ownable replacement for a wave.
**Use when** a brand wants a signature edge. Pair it with `interlocked-panels`. **Avoid** using once and never again.
**Recipe.** A full-bleed section whose top is not straight: left third rises about 80px, centre recessed, right third about 20px higher, with hard 90-degree steps at x=326 and x=1070.
**Seen on** Ai2 (silver) (1 site). **Suits** bold-colour, warm-neutral; ai, culture, nonprofit.

<!-- v:layout.full-bleed-break/film-band -->
#### `film-band`

**Feel.** A still from the film the company is making.
**Use when** you have a cinematic image that adds a mood. **Avoid** using a stock photo, which makes the band a pause in nothing.
**Recipe.** An edge-to-edge still between light sections, with text returning in small sizes below. Structure's version sets a white 45px headline at left over a dark photo, with 12px body in a right column and no card. 1X stacks 100vh full-bleed scenes with hard horizontal cuts and no fade, and both images share a ground colour so the seam stays calm.
**Seen on** 1X, Structure Consulting Engineers (gold); The Officin (silver) (3 sites). **Suits** photo-led, render-3d; brand, architecture, other, agency, hospitality.

<!-- v:layout.full-bleed-break/pinned-photo-card-over -->
#### `pinned-photo-card-over`

**Feel.** The place stays. The story moves across it.
**Use when** a photo sets a location: a factory, a kitchen, a landscape. **Avoid** with a busy photo near the card edges.
**Recipe.** A full-bleed photo pinned at 100vh. A flat card about 770px wide scrolls up over it, holding a small white eyebrow above the card, a 32 to 40px heading, a one-line lede, one action, and a second image inset 8px from the card's edges.
**Why it works.** Text never sits on the photo, so there is no scrim and no legibility fight, and the card's motion gives you depth for no cost.
**Seen on** Wildbran (gold) (1 site). **Suits** photo-led, warm-neutral; food-drink, hospitality, local-business.

**Built.** The analyst record said about 420px, and the frame measures about 770px. At 420 this collapses into a small floating tag.

```css
.photo{position:sticky;top:0;height:100vh;width:100%;object-fit:cover;display:block}
.over{position:relative;margin-top:-62vh;padding-bottom:18vh;text-align:center}
.card{width:min(770px,100% - 40px);margin-inline:auto;background:var(--surface);padding:32px 8px 8px}
.card img{width:100%;height:420px;object-fit:cover;margin-top:28px}
```

<!-- v:layout.full-bleed-break/inset-rounded-sheets -->
#### `inset-rounded-sheets`

**Feel.** Calm and premium. Dark chapters become objects, not stripes.
**Use when** a light page alternates with dark chapters and hard seams feel too abrupt. **Avoid** combining with hard full-bleed bands on one page.
**Recipe.** Dark chapters are 1416px sheets, radius 20, on 12px margins on a pale page, with inner panels one step lighter and radius 20. Light and dark overlap as stacked cards with no hard horizontal seam.
**Seen on** Decagon (gold) (1 site). **Suits** soft-pastel, light-precision; ai, saas, devtool.

<!-- v:layout.full-bleed-break/framed-single-screen -->
#### `framed-single-screen`

**Feel.** A framed print.
**Use when** a photographer or studio has one image to show. **Avoid** when the site must also explain anything.
**Recipe.** White page, 15px frame. A header row of about 56px and a footer row of about 60px hold all text. One 1410x780 photo fills the space between. Page height equals the viewport.
**Seen on** Vivien's Creative (gold); Charles Pas (expressive) (2 sites). **Suits** photo-led; agency, portfolio, architecture, fashion.

<!-- v:layout.full-bleed-break/image-over-colour-seam -->
#### `image-over-colour-seam`

**Feel.** Depth without any shadow.
**Use when** a colour band needs to connect to the page after it. **Avoid** with images that need to be read in full.
**Recipe.** A 1360x698 photo with 8px radius centred across the join between a colour band and the white page, the band ending about 40% down the image.
**Seen on** Dalco (silver) (1 site). **Suits** render-3d, photo-led; brand, architecture.

### Break mistakes

- **Flat field, centred heading, one button.** The default CTA band. Move the text to a margin, add a surface texture or an overlap.
- **A slant with nothing on it.** Without strips or a repeat elsewhere, an angled section reads as a 2014 template.
- **Too shallow a slope.** At 3 to 4 degrees it reads as a rendering mistake. About 6 degrees is the measured value.
- **Breaks in a row.** Two loud sections side by side cancel each other. Put at least two calm sections between them.
- **Text on a photo with a dark scrim.** A gradient scrim on a full-bleed image is a tell. Use a photo with real dark space, or put the text on a card.
- **Forgetting the return.** After a break, come straight back to the rail at normal padding.
- **Clipping your own decoration.** `clip-path` on a section removes anything outside it, including overlapping strips and shadows.
- **A saturated field that fails contrast.** A `--bg` label on `--accent` needs checking for each palette. Pale accents need `--ink` instead.

## 7 Content widths

Width decides whether a page feels composed or merely poured into a container. The classic failure is one 1200px box holding everything, so paragraphs run to 140 characters and small things float in the middle of a wide page. The other failure is six widths chosen one section at a time.

What separates great from cheap:

- **Two widths, related by a ratio.** The wide one for objects and the narrow one for reading, at about 2.2 to 1.
- **Width follows reading density.** Warp narrows from 1200px at the pricing table to 944px at the FAQ to 672px at a switch, because each holds less, and all of it sits on one centre axis.
- **Edges that never move are what calm looks like.** Cursor's nav, cards, table, FAQ and footer all land on x=70 and x=1370.
- **A deliberate exception gets its value from the rule.** Stripe Sessions keeps content in a 704px column so that one pass card can break out to x=1424 and become the loudest thing on the page.

**Measured.** The commonest container per page has two peaks, not one: a reading peak at 520 to 720px and a rail peak at 1200 to 1392px. Exact values seen most: 1280 (45 sites), 1200 (32), 1392, 720, 672, 1376, 1344, 1312, then 640, 600, 576, 560, 520, then 1080, 1024, 960, 896. Hero subheads hold 480 / 599 / 739px. Nine in ten gold pages report four or more container widths, but that count includes components. The layout widths a reader actually perceives are two to four, nested on one axis.

### Width variants

<!-- v:layout.content-width/single-measure-column -->
#### `single-measure-column`

**Feel.** A letter. Everything is at reading distance.
**Use when** the content is words, for personal sites, essays and small studios. **Avoid** on pages built around wide tables or product shots.
**Recipe.** One centred 580 to 640px column for everything: bio, rows, media. On 1440 that is x=400 to x=1040. Index rows split it into three at a 224px pitch. Brett Jackson adds 1px dashed rails at both sides on a grey ground, with 48px inner padding. Pages often run under 1,600px.
**Seen on** Paco Coursey, Aniket (gold); Brett Jackson (silver) (3 sites). **Suits** type-led, light-precision; portfolio, agency.

<!-- v:layout.content-width/one-shared-rail -->
#### `one-shared-rail`

**Feel.** Calm and established.
**Use when** you want a page to feel steady, on commerce, docs-adjacent and pricing pages. **Avoid** with a very wide rail and no reading measure.
**Recipe.** One width for all chrome and content: 896px (Daily), 980px (Apple), 1046px (Vitsoe), 1160px boxed (Docker), 1300px (Cursor). Full-bleed bands may change colour, but content edges never move. Docker draws the box with 1px side rails, and Vitsoe runs section rules at the column width, leaving only the header rule and footer band full-bleed.
**Seen on** Cursor Pricing, Apple MacBook Pro (gold); Daily, Docker, Vitsoe (silver) (5 sites). **Suits** light-precision, warm-neutral, dark-precision, mono-technical, photo-led; devtool, ai, brand, ecommerce, saas, finance.

<!-- v:layout.content-width/nested-widths-one-axis -->
#### `nested-widths-one-axis`

**Feel.** Considered without being obvious. Each thing is the right size.
**Use when** a page mixes tables, prose and media. This is the default for pricing and long marketing pages.
**Recipe.** All blocks share one centre axis and step by reading density. Warp: nav 1084, pricing and tables 1200, FAQ 944, switch 672. International Magic: 450, 580, 700 and 1177 on x=720. Office Commun: 515px copy, 650px with labels, 952px grid, so tiles read as a wider tray beneath. Sora uses a left-shared variant: a 1024 frame and a 672 measure with one left edge at x=208.
**Why it works.** One axis keeps it calm, and different widths let each block sit at its natural size.
**Seen on** International Magic, Warp Pricing (gold); Office Commun, Sora (silver) (4 sites). **Suits** light-precision, dark-precision; agency, devtool, ai, saas, finance.

**Built.** Keep the step list in one place, and do not exceed four widths.

```css
.w{--w:1200px;width:min(var(--w),100% - 40px);margin-inline:auto}
.w.chrome{--w:1084px}.w.read{--w:944px}.w.tight{--w:672px}
```

<!-- v:layout.content-width/column-with-one-side-bleed -->
#### `column-with-one-side-bleed`

**Feel.** The page has more to show than it can fit. Generous and modern.
**Use when** a gallery of images or features follows an essay column. **Avoid** with critical content hidden off-screen.
**Recipe.** All text and rails start at x=230 on a 980px column, shared with the sticky bar. Galleries start on that same line and bleed rightward past the viewport, about 800px per item with 20px gaps and radius 16, so the next item peeks in. The left edge stays one line down the page.
**Seen on** Apple Vision Pro (gold) (1 site). **Suits** photo-led, light-precision, warm-neutral; brand, ecommerce, editorial.

**Built.** Using `.right` from the base code you get this with no `100vw`. The padding on the rail is what keeps the last item from sticking to the viewport edge.

```css
.rail{display:flex;gap:20px;overflow-x:auto;scrollbar-width:none;
  padding-right:var(--gut);scroll-snap-type:x mandatory}
.rail figure{flex:0 0 min(800px,80vw);scroll-snap-align:start}
.rail img{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:16px}
```

<!-- v:layout.content-width/full-width-second-axis -->
#### `full-width-second-axis`

**Feel.** Big, assured, and more structured than it first appears.
**Use when** display type is the main event, on agency pages. **Avoid** with long reading text.
**Recipe.** Primary content runs the full viewport inside 16px margins with hairlines margin to margin. Labels and secondary blocks indent to x=134. That second axis gives structure with no container.
**Seen on** Basement Studio (expressive) (1 site). **Suits** dark-precision, type-led, light-precision; agency, portfolio, culture.

<!-- v:layout.content-width/right-weighted-feed -->
#### `right-weighted-feed`

**Feel.** A timeline with a spine.
**Use when** you have dated entries in a changelog or journal. **Avoid** when there is nothing for the left rail to hold.
**Recipe.** A content column from x=469 to x=1232, right of centre, balanced by a date rail in the left third. Title, cover, heading and author share one left edge. Search aligns to the right edge. Nothing breaks the column.
**Seen on** Resend Changelog (gold) (1 site). **Suits** dark-precision, light-precision; devtool, editorial, saas.

<!-- v:layout.content-width/floating-content-sheet -->
#### `floating-content-sheet`

**Feel.** An app, not a website.
**Use when** you are building docs or any shell with a persistent sidebar. **Avoid** on marketing pages.
**Recipe.** A shell in a 2 to 3% tint. The 56px header and 260px sidebar sit directly on the shell. The white content pane has radius 16 and a 1px line, inset 8px from the right and bottom, and scrolls inside. Article measure 672px.
**Why it works.** The sidebar loses its border and its box entirely, so navigation recedes, and only the article feels like an object.
**Seen on** Resend Docs (silver) (1 site). **Suits** light-precision, dark-precision; devtool, saas, ai.

**Built.**

```css
html,body{height:100%}
body{background:var(--surface);overflow:hidden}
.shell{display:grid;height:100vh;grid-template:56px minmax(0,1fr)/260px minmax(0,1fr)}
.top{grid-column:1/3}
.sheet{margin:0 8px 8px 0;background:var(--bg);border-radius:16px;overflow:auto;
  box-shadow:0 0 0 1px var(--line);padding:48px 56px 0 88px}
.doc{max-width:672px}
```

Use `box-shadow` for the line here, because a border would change the pane's box inside a fixed-height shell.

<!-- v:layout.content-width/one-screen-card-stack -->
#### `one-screen-card-stack`

**Feel.** A tidy little personal homepage.
**Use when** a freelancer or tiny shop has about five things to say. **Avoid** with anything longer.
**Recipe.** A 1000px column of flat blocks on 10px gaps: 60px header strip, bio panel, five rows, an action panel, one-line footer, about 950px tall.
**Seen on** Patricia Ordoñez (silver) (1 site). **Suits** soft-pastel, warm-neutral; portfolio, local-business.

<!-- v:layout.content-width/fixed-portal-column -->
#### `fixed-portal-column`

**Feel.** An archive from an earlier web, on purpose.
**Use when** the subject is web culture or history. **Avoid** in every normal case, because it does not scale.
**Recipe.** A fixed 924px column centred on black with 258px gutters at 1440, no fluid scaling, surfaces stepping #000, #0c0c0c, #0e0e0e, #151515.
**Seen on** FWA Wire (expressive) (1 site). **Suits** expressive, dark-precision; editorial, culture.

### Width mistakes

- **Prose at the rail.** Text wider than about 720px is hard to read. Every paragraph needs a measure, even inside a wide section.
- **A new width for each section.** More than four on one page reads as drift.
- **Off-axis nesting.** Nested widths must share a centre or a left edge. Mixing both looks accidental.
- **`100vw` for bleeds.** It includes the classic scrollbar, so bleeds overshoot by about 8px and cause sideways scroll on Windows. Use named grid lines.
- **Small blocks stranded on a wide rail.** A short FAQ at 1200px has absurdly long rows with the answer marker far away. Narrow it.
- **Forgetting ultrawide.** At 2560px a full-width grid becomes absurd. Cap full-bleed text content and let only imagery run to the edges.
- **Hero subheads too wide.** Hold them to 480 to 740px, even inside a centred hero on a wide rail.

## 8 Phones

Every layout here must collapse to one column at about 390px with no sideways scroll. The system survives by keeping its order and its left edge, not its columns.

- **Rails** move in to 16px. Greylock keeps them at x=16 and x=374 and they still work. If your rails sit further in than that on a phone, drop them.
- **Margins** go to 16 to 24px. `--gut:clamp(20px,5vw,112px)` handles this.
- **Section padding** falls to about 64 to 72px, keeping the same ratio to the small gap.
- **Label columns** stack with the label directly above its content. Work & Co keeps the single left edge.
- **Staggers** collapse to one column, optionally with a small inset. reMarkable keeps a slight inset so the photograph still feels placed.
- **Pinned panels** become ordinary sections. A pinned 100vh panel on a phone traps the reader.
- **Cell rules** become simple horizontal rules, and cells take their natural height.
- **One-sided bleeds** stay, because horizontal scrolling on a phone is natural. Show about 80vw per item so the next peeks in.
- **Radii on sheets** step down: 80px at desktop becomes about 32px.
- **Heights** use `dvh`, not `vh`, or the browser bar hides the bottom of the screen.
- **Slants** keep their angle: because the rise is in `vw`, 6 degrees stays 6 degrees.

## 9 Before you call it done

Render the page and read it from top to bottom, using `scripts/shoot.mjs`. Then check each of these. One caution about its report: Chrome returns `color-mix()` as `color(srgb ...)` with values from 0 to 1, which the audit reads as near black. A low-contrast ratio near 1.1 on text coloured that way is a false alarm, so check those by eye.

- [ ] The rail, the measure, the padding and the two gaps are variables, and no section adds another.
- [ ] Between any two neighbouring sections, one or two things change and not everything.
- [ ] Three to seven left edges recur. Text sits on its line even inside cards.
- [ ] Prose is never wider than about 720px.
- [ ] There is one dark or colour interruption at most before the footer, or a clear reason for more, placed 25 to 50% down.
- [ ] Any dark block is at least one viewport tall and dense.
- [ ] Any full-bleed field has more than flat colour and centred text.
- [ ] No frame sits inside a frame, and art meets an edge instead of floating.
- [ ] Empty space has a job you could state in a sentence, and it holds to the footer.
- [ ] A pinned panel has something worth seeing for the whole scroll.
- [ ] Every image bleed reaches its edge: check `max-width` on bleeding images.
- [ ] No overflow at 390px, and no `100vw` in the layout.
- [ ] The page does not use drawn rails only because they looked precise. Would it be better with an invisible grid?
- [ ] Swap in a second palette. A good layout holds, and a layout that needed one colour was relying on that colour.
