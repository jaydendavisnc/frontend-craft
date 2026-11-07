# Feature sections

Feature grids, alternating rows, tabs, sticky scroll and steps. These sections carry most of a page's argument, and they are where generated pages look most alike. Read the first two parts below, then the element you are building.

The variants come from 444 rows tagged across 324 strong sites. Counts mean sites. Top variants were checked against captured frames, and those with code were rebuilt from scratch and compared side by side with the real frame. A number with `~` is an analyst's reading of a frame. The rest is measured CSS or was confirmed in the frame. Colours are written as tokens on purpose: use the palette and type system you were dealt.

## Contents

- [Start here: three decisions](#start-here-three-decisions)
- [Measured values](#measured-values)
- [Feature grid](#feature-grid): 20 variants
- [Alternating rows](#alternating-rows): 12 variants
- [Tabs and accordions](#tabs-and-accordions): 14 variants
- [Sticky scroll](#sticky-scroll): 9 variants
- [Steps and process](#steps-and-process): 13 variants
- [Putting a page together](#putting-a-page-together)

## Start here: three decisions

**1. Decide what fills the frames.** The sharpest difference between our first attempts and the real frames was never spacing. It was what sat inside the frames. Write the fragment, the diagram, the list of real names or the photo brief before you pick a layout. If you only have an icon and a sentence, use a variant that survives on type alone, and do not put that sentence in a box.

**2. Decide what the reader is doing.**

| The reader wants to | Use | Not |
|---|---|---|
| Compare peers at a glance | A feature grid | Tabs, which hide the comparison |
| Pick the one that applies to them | Tabs, or routing tiles | A grid of eight equal cards |
| Understand one thing in depth | Alternating rows | Tabs with a sentence each |
| Follow a tour with a single object on screen | Sticky scroll | Five stacked screenshots |
| Know what happens first, next and last | Steps | A grid with numbers pasted on |

**3. Decide what holds the items.** This choice sets the tone more than colour does, and it is the one models get wrong. They reach for a surface by reflex, when top sites usually do not use one.

| Held by | Feeling | Share of gold grids | Share of silver grids | Mean score |
|---|---|---|---|---|
| Nothing or lines (rules, type, bare plates) | Exact, confident, editorial | 66% | 44% | 4.15 |
| Images as tiles | Physical, immediate | 5% | 7% | 4.36 |
| Card surfaces | Contained, app-like | 16% | 31% | 3.82 |
| Other (rails, routing tiles, set pieces) | Varies | 14% | 18% | 3.93 |

The template mark is narrow and worth stating exactly. Three columns are fine: about 75 of 185 grids use them, Linear and Tana among them. What fails is **three equal boxes, each holding an icon, a title and a sentence**. Of the 35 rows built on plain card surfaces, 17 were rows of three. Those averaged 3.47, none scored 5, and only 3 were on gold sites. Keep the three columns and change what holds them or what is inside them. Function Health's three equal cards work because each one contains a different working interface.

## Measured values

Start here, then let the register move you.

| Value | Gold p25 / median / p75 | Note |
|---|---|---|
| Section padding, block | 80 / 96 / 128 px | Photo-led sites run tighter, type-led looser |
| Content width | 719 / 1113 / 1300 px | Dark precision sites sit at a median of 1152 |
| Section heading | 20 / 36 / 50 px, weight 400 to 500 | Bold colour sites median 47 at 600 |
| Item title (h3) | 17 / 20 / 26 px | |
| Item title weight | 400 / 400 / 500 | Across all tiers p75 is 600, in gold it is 500 |
| Item title leading | 1.2 / 1.3 / 1.4 | |
| Item title tracking | -0.02 / -0.01 / 0 em | |
| Running copy | 16 / 16 / 18 px, leading 1.4 to 1.5 | Across 193 sites in this family |
| Large radius | 8 / 12 / 20 px | Tiles in this family: `~`8 / 16 / 32 |
| Border alpha | 0 / 0.08 / 0.16 | |
| Grid gap | `~`16 / 24 / 25 px | Plates can drop to 8, rules to 0 |
| Hover transition | 150 / 200 / 200 ms | Controls. Cards run slower, 200 / 300 / 400 ms |

The single most useful line here is the title weight. Generated cards default to 600 or 700. The gold median is 400. Hierarchy between a title and its copy comes from a shift in ink, 100% to about 60%, and from size. Weight is the third tool, not the first.

---

## Feature grid

A feature grid lets someone compare peers in one look, so its job is to make the differences between items easy to see. That is why the identical three-box row fails: it makes the items look the same and spends its contrast on the boxes. Great grids differ in what sits inside each cell while the cell itself stays still. They sit on the page's rails, align text to a shared baseline however long the copy runs, and carry something a competitor could not paste in.

Choose by what you have. Real interface: plates or fragment cards. A list of precise capabilities: ruled cells. Short claims with no art: rule-topped or text-only columns. Photography: photo cards or poster tiles. A site with many doors: routing tiles.

### Held by lines

<!-- v:section.feature-grid/ruled-table-cells -->
#### ruled-table-cells

*20 sites, quality 5.* Drafted and exact, like a spec sheet. Use it for 4 to 12 peer capabilities in devtool, finance and reference pages, and for local services with real lists. Skip it with fewer than four items, where the frame looks like a form, and for image-led brands.

Recipe: one 1px outline split by shared rules, no gaps, no radius. Cell padding 20 to 32px. An 11px mono index, a 15px/500 title, 14px copy at about 60% ink, then a proof row pinned low. Make the proof a different kind of thing in each cell: logos, a masked key, tags, a status line, a tiny chart. Tiny `+` marks on the junctions read as drafting. Tint or hatch the last cell and let it close the table with a link.

Seen on Better Auth, Bun, Function Health, Speakeasy, Vite, Trigger.dev, Zapier, Customer.io. Suits light precision, dark precision, mono technical and warm neutral, for devtool, SaaS, AI and health.

```html
<div class="table">
  <article class="cell">
    <div class="idx">01</div>
    <h3>Point-in-time recovery</h3>
    <p>Roll any database back to a chosen second, up to 35 days ago.</p>
    <div class="proof"><!-- one tiny real artefact, different in every cell --></div>
  </article>
  <!-- nine cells; the last gets class="cell closer" and a link to the rest -->
</div>
```

```css
/* rules are a 1px gap showing the parent's background, so they can never double up */
.table { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.cell { position: relative; display: flex; flex-direction: column; min-height: 186px; padding: 20px 22px; background: var(--bg); }
.idx { font: 400 11px/1 var(--font-mono, var(--font-text)); color: var(--ink-3); margin-bottom: 10px; }
.cell h3 { font: 500 15px/1.3 var(--font-text); letter-spacing: -.01em; }
.cell p { margin-top: 6px; color: var(--ink-2); font-size: 14px; line-height: 1.45; }
.proof { margin-top: auto; padding-top: 14px; min-height: 40px; display: flex; gap: 6px; align-items: center; font-size: 11px; color: var(--ink-2); }
/* + marks on the junctions */
.cell::after { content: ""; position: absolute; right: -5px; bottom: -5px; width: 9px; height: 9px; z-index: 1;
  background: linear-gradient(var(--ink-3), var(--ink-3)) 50%/9px 1px no-repeat, linear-gradient(var(--ink-3), var(--ink-3)) 50%/1px 9px no-repeat; }
.cell:nth-child(3n)::after, .cell:nth-last-child(-n+3)::after { display: none; }
.cell.closer { background: repeating-linear-gradient(135deg, var(--surface) 0 1px, var(--bg) 1px 6px); }
@media (max-width: 820px) { .table { grid-template-columns: 1fr; } .cell { min-height: 0; } .cell::after { display: none; } }
```

A warmer form suits clinics, restaurants and local services, where the cell holds a real list instead of a proof row. Keep inner rules only, so the table stays open at its outer edge like a printed price list. Set category titles at 34 to 45px in the display face with a deliberate two-line break, a small accent count beneath, then 18px items on a 31px line. Fade the last item of each list, so it reads as "and more". Tint the final cell and put the call to action there.

```css
.t { display: grid; grid-template-columns: repeat(3, 1fr); }
.c { padding: 40px 40px 44px 0; min-height: 372px; display: flex; flex-direction: column; }
.c:not(:nth-child(3n+1)) { padding-left: 40px; border-left: 1px solid var(--line); }
.c:nth-child(n+4) { border-top: 1px solid var(--line); }
.c h3 { font: 400 38px/1.08 var(--font-display); letter-spacing: -.01em; }
.c ul { list-style: none; margin: 24px 0 0; padding: 0; line-height: 31px; }
.c li:last-child { color: var(--ink-3); }
.c.more { background: var(--surface); padding-right: 40px; }
```

<!-- v:section.feature-grid/rule-topped-columns -->
#### rule-topped-columns

*8 sites, quality 4.* Open and calm. Use it for three to six short claims when you want air and have no art. It is the plainest fix for a three-card row: delete the box and keep one line. Skip it for long lists.

Recipe: columns with a 24 to 32px gutter. Each opens with a 1px rule on its top edge, or its left edge with about 32px of inset, then 28px of space, a small icon or number, a 20 to 24px title at weight 400, and 16 to 17px copy at 1.6. Fix the rule weight and colour across every column. A dark variant uses a roughly 15% white rule at the top of each cell.

Seen on Tana, Public, Claude, Customer.io, Neon, Boom. Suits light precision, warm neutral, dark precision and photo-led.

<!-- v:section.feature-grid/gridline-tick-columns -->
#### gridline-tick-columns

*4 sites, all gold, quality 5.* The page's own grid made visible, which reads as engineering. Use it on long pages with a strict column system, and for finance or infrastructure. Do not use it on a single section: see the mistake below.

Recipe: four columns of about 270px with no gutter. Dashed vertical guides run the full height of the page, through band changes. A 1px by 16px accent tick hangs in the gutter beside each title, exactly on a guide, so the text looks pinned to the structure. A 40 to 44px duotone spot icon, a 15px/600 title, 15/24 copy, and inline 500-weight accent links inside the body. Reuse the same tick on figures further down the page.

Seen across Stripe, on Connect, Payments, Pricing and Atlas. Suits gradient light and light precision, for finance and SaaS.

```css
/* one layer draws the guides over every band on the page */
.page { position: relative; }
.page::after { content: ""; position: absolute; inset: 0; left: 50%; width: min(1080px, calc(100% - 48px)); transform: translateX(-50%); pointer-events: none;
  --d: repeating-linear-gradient(var(--line) 0 4px, transparent 4px 8px);
  background: var(--d) 0 0/1px 100% no-repeat, var(--d) 25% 0/1px 100% no-repeat, var(--d) 50% 0/1px 100% no-repeat, var(--d) 75% 0/1px 100% no-repeat, var(--d) 100% 0/1px 100% no-repeat; }
.cols { display: grid; grid-template-columns: repeat(4, 1fr); }
.f { padding: 0 24px 0 16px; }
.f h3 { position: relative; font: 600 15px/24px var(--font-text); }
/* the padding is 16px, so -16px lands exactly on the guide */
.f h3::before { content: ""; position: absolute; left: -16px; top: 4px; width: 1px; height: 16px; background: var(--accent); }
.f p { margin-top: 6px; color: var(--ink-2); font-size: 15px; line-height: 24px; }
.f a { color: var(--accent); font-weight: 500; text-decoration: none; }
@media (max-width: 900px) { .page::after { display: none; } .cols { grid-template-columns: repeat(2, 1fr); row-gap: 40px; } }
```

<!-- v:section.feature-grid/schematic-diagram-cells -->
#### schematic-diagram-cells

*5 sites, quality 5.* Quiet, technical, slightly mythic. Each cell holds one custom line drawing and almost nothing else. Use it when the idea is abstract and a screenshot would be noise. It needs real drawings: without them, choose something else.

Recipe: three columns split by 1px rules at about 8% ink, which start at the label and stop at the copy, with no box around them. An 11px mono figure label at about 30% ink, a drawing around 240 to 320px, a 15px title, 15/24 muted copy. The drawing carries the section, so give it the air. Polar's form is a 5 by 2 grid of 243px squares with corner ticks in place of borders, a mono index and a centred diagram, where the active tile turns white.

Seen on Linear, Polar, Vercel pricing, Plvs Ultra, Browserbase. Suits dark precision, light precision and mono technical.

```css
.tri { display: grid; grid-template-columns: repeat(3, 1fr); }
.col { padding: 0 40px; border-left: 1px solid var(--line); }
.col:first-child { padding-left: 0; border-left: 0; }
.fig { font: 400 11px/1 var(--font-mono, var(--font-text)); letter-spacing: .04em; color: var(--ink-3); }
/* Fill every face with the page colour and paint back to front. Nearer planes then hide farther lines. */
.iso { display: block; width: 320px; height: 320px; max-width: 100%; margin: 28px auto 36px;
  -webkit-mask-image: linear-gradient(#000 45%, rgba(0,0,0,.28)); mask-image: linear-gradient(#000 45%, rgba(0,0,0,.28)); }
.iso polygon { fill: var(--bg); stroke: var(--ink); stroke-opacity: .3; stroke-width: 1; vector-effect: non-scaling-stroke; stroke-linejoin: round; }
.col h3 { font: 500 15px/1.4 var(--font-text); letter-spacing: -.01em; }
.col p { margin-top: 8px; color: var(--ink-2); font-size: 15px; line-height: 1.6; max-width: 23em; }
```

To draw an isometric box, project each corner with `screen.x = ox + (x - y) * 0.866` and `screen.y = oy + (x + y) * 0.5 - z`, then emit left face, right face and top face as `<polygon>`s, far boxes first. Keep the whole form inside the viewBox, because `mask-image` clips anything that overflows it.

### Held by nothing

<!-- v:section.feature-grid/bare-icon-columns -->
#### bare-icon-columns

*21 sites, quality 3.* Light and scannable. This is the honest default for a list of six to twelve small capabilities. It rarely earns attention by itself, so keep it short and let it follow something richer. Skip it as the page's main feature section.

Recipe: three or four columns, no boxes, 200 to 220px row pitch on large type or 60px on dense lists. A 20 to 24px line icon, a 16 to 20px title, 15 to 16px copy. The strongest forms drop the title to a run-in: a bold lead that continues into grey in the same paragraph, which removes a hierarchy level and packs far more into the cell. Tie the left edge to the section heading.

Seen on Resend, Render, Vercel AI SDK, Inngest, Tally, Nuxt, Asana. Suits light and dark precision, illustrated, photo-led. On hover, Inngest draws a 1px border and a faint radial light in the same spot, so the card appears only when it is useful.

<!-- v:section.feature-grid/text-only-columns -->
#### text-only-columns

*10 sites, quality 4.* Assured: the writing is good enough to stand alone. Use it for values, service lists and compliance facts. Needs specific copy, because a vague sentence has nothing to hide behind.

Recipe: no icons at all. Choose one small device and hold it: a pink tracked code like `E/1` over a large heading, a first letter in the accent, a label over a column of links, or chips under each paragraph. Three to five columns. Lemon Squeezy pairs a 12px code with a 36/46 heading and an 18/30 body, and only the hovered cell turns into a surface.

Seen on Lemon Squeezy, Vue, Inngest, Vitsoe, Paco Coursey, Basement. Suits bold colour, type-led, dark precision.

<!-- v:section.feature-grid/spec-checklist-columns -->
#### spec-checklist-columns

*6 sites, quality 4.* Reads like a contract: here is everything, and you can count it. Use for what is included, plans and compliance. Skip it when the audience needs persuading more than reassuring.

Recipe: two to three hairline cells with a 20px/600 column head and five to eight rows at 18/34, each with an 18px check. No icons, no blurbs. Chips are the variant: a two-column grid of 150 by 38 outlined chips beside a statement card.

Seen on AuthKit, Stripe Billing, Convex, LaunchDarkly, Solidcore. Suits light precision and bold colour.

### Held by the image

<!-- v:section.feature-grid/media-plate-then-caption -->
#### media-plate-then-caption

*19 sites, quality 5.* The commonest strong grid: a plate, then text sitting straight on the page with no card. It feels like a catalogue. Use it whenever you have a real visual per item, in any genre. It is the easiest way out of the three-card row and the variant we would reach for first.

Recipe: three or four columns with 8 to 32px gaps. A plate 286 to 500px tall, then 24px of space, a 20 to 28px title at weight 400, and 16px copy at 1.4 and about 56 to 60% ink. No surface behind the text, no border, no shadow. Plate radius follows the system: 0 for technical, 8 to 12 for product, 32 for soft brands. Keep rows 64 to 120px apart. Factory runs 330px square plates with square corners, at 16/1.2 copy, and about 64px between rows.

Seen on Devin (codeium.com), Amplitude, Factory, Nuro, Exa, GoCardless, Aman, Boston Dynamics, Sentry. Suits light precision, photo-led, warm neutral and dark precision, for AI, SaaS, brand and culture.

```html
<article>
  <div class="plate" style="--x:0%">
    <div class="ui"><!-- real fragment, at real size, taller than the plate --></div>
  </div>
  <h3>Invoices that read themselves</h3>
  <p>Photograph the delivery note and every line lands against its supplier.</p>
</article>
```

```css
.row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
/* one wash cut into four plates: each shows a different slice of the same field */
.plate { position: relative; height: 300px; overflow: hidden;
  background: linear-gradient(100deg, var(--wash-1), var(--wash-2) 55%, var(--wash-3)) var(--x) 0 / 410% 100%; }
/* taller than the plate on purpose, so the crop reads as a crop */
.ui { position: absolute; top: 18px; left: 16px; right: 16px; height: 360px; padding: 14px 15px; font-size: 13.5px; line-height: 1.3;
  background: var(--surface); border-radius: 9px; box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 16px 32px -14px rgba(0,0,0,.3); }
.ui.off { left: 20px; right: -40px; }   /* one fragment leaves by the right edge */
article h3 { margin-top: 24px; font: 400 20px/1.2 var(--font-text); letter-spacing: -.01em; }
article p { margin-top: 8px; color: var(--ink-2); max-width: 21em; }
@media (max-width: 980px) { .row { grid-template-columns: repeat(2, 1fr); row-gap: 32px; } }
@media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
```

Set `--wash-1` to `--wash-3` to three tones close to your surface, then add a faint grain so the plate stops looking like a CSS gradient.

<!-- v:section.feature-grid/photo-overlay-cards -->
#### photo-overlay-cards

*9 sites, quality 4.* Warm and human. Use it for people, places and goods when text can live on the image: wealth stories, hotels, gyms, restaurants. Skip it for products that need explaining.

Recipe: two to five cards with 16 to 24px gaps, about 421 by 500px, radius 8 to 16 or 0 for luxury. A small translucent pill top left, 11px tracked caps. A 24 to 28px title and one line at the foot, with a bold lead that continues into regular weight. A 40px white circle arrow bottom right. Dishoom's form replaces all of this with an inset double-rule label box, which suits hospitality.

Seen on Wealthfront, Dishoom, Kinfolk, Huel, Isola Bella, Lucid. Suits photo-led, warm neutral, bold colour.

```css
.c { position: relative; display: block; aspect-ratio: 421/500; border-radius: 16px; overflow: hidden; color: #fff; text-decoration: none; isolation: isolate; }
.c img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; transition: transform .6s cubic-bezier(.2,.7,.2,1); }
.c:hover img { transform: scale(1.03); }
/* darkens only where the type sits; the top half of the photo stays untouched */
.c::after { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.5) 24%, transparent 50%); }
.tag { position: absolute; left: 16px; top: 16px; padding: 7px 10px; border-radius: 99px; background: rgba(0,0,0,.4); backdrop-filter: blur(8px); font: 600 11px/1 var(--font-text); letter-spacing: .05em; text-transform: uppercase; }
.txt { position: absolute; left: 24px; right: 80px; bottom: 24px; }
.txt h3 { font: 600 26px/1.15 var(--font-text); letter-spacing: -.015em; }
.go { position: absolute; right: 20px; bottom: 24px; width: 40px; height: 40px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; }
```

<!-- v:section.feature-grid/poster-tiles -->
#### poster-tiles

*2 sites, both photo-led, quality 5.* A shop window. Use for hardware and physical product with studio imagery. Rare because it needs that imagery.

Recipe: two tiles per row, 8 to 16px gaps, no radius or a small one, running nearly full bleed. A centred stack in the top third: a 40/44 title, a line, pills or chevron links. The product fills the lower 55 to 60%, and each tile is art-directed: one crops at the base, the next floats. Pair a light tile with a dark one.

Seen on Apple and DJI. Suits photo-led and render-3d.

### Held by a surface

Use these when the surface carries something. A surface around one sentence adds weight and no information.

<!-- v:section.feature-grid/ui-fragment-cards -->
#### ui-fragment-cards

*10 sites, quality 5.* Proof in every cell. Use for products with distinctive small moments of UI. Needs one bespoke fragment per item.

Recipe: a borderless tray in a tint 2 to 4% off the page, radius 12 to 16, copy on top and a fragment rising from the base and either cropped or faded into the tray. Vary the fragment and hold the frame. Brex runs five 246px trays with 24px/600 titles, each ending in different anchored UI. Public mixes one full-width tray with two half-width ones and centres the copy. Stripe's card is a 26px light title top left, with a 38px expand tile in the corner that turns accent on hover.

Seen on Public, Stripe, Brex, Copilot, Remote, Hugging Face, Revena. Suits light precision, gradient light, bold colour, for finance and SaaS.

<!-- v:section.feature-grid/media-header-cards -->
#### media-header-cards

*8 sites, quality 3.* The image-title-text card. Friendly and familiar. Use for articles, resources and courses, where a repeated container is correct. Prefer plates for features.

Recipe: 8 to 24px radius, 1px border or a soft fill, the media inset 16 to 20px with a radius a little smaller than the card's, a 20 to 22px title, 15 to 16px copy, a link pinned to the base so rows align. Talkspace mats each photo 8px in a different tint.

Seen on OpenRouter, Apptronik, Signal, Ai2, Talkspace, web.dev.

<!-- v:section.feature-grid/outline-cards -->
#### outline-cards

*14 sites, quality 3.* Neat, useful and easily generic. Use for link indexes, docs hubs and dense integration lists, where boxes signal clickability. Do not use for the main feature story.

Recipe: 8 to 16px radius, 1px border at 8% ink, no shadow, no fill, 16 to 24px gap, 24px padding, 20px thin icon, 16 to 20px title. If you use this, change one thing: Jasper puts a 72px tinted tile top left and pins the title low; Trasti closes the row with a solid accent CTA tile; Hotjar notches the middle card's edges so the three join.

Seen on LiveKit, Levels, Resend docs, Primer, Electron.

<!-- v:section.feature-grid/filled-cards -->
#### filled-cards

*14 sites, quality 3.* Soft and approachable. Use for small claims on a tinted band, or when a warm brand wants weight. Same warning as outline cards.

Recipe: no border, fill one step off the page, 8 to 40px radius, 8 to 16px gap. Scale AI nests a 64px white icon tile in a grey card on a white sheet, with an 8px gap, and pushes the detail low. Loom uses a very large radius with four different pastels. White cards on a flood of saturated colour is the bold form, seen on Outschool.

Seen on Scale AI, Modern Treasury, ClickHouse, Loom, Outschool.

### Not a grid

<!-- v:section.feature-grid/asymmetric-tile-rows -->
#### asymmetric-tile-rows

*3 sites, quality 4.* Crafted and consumer. The rhythm changes while the anatomy holds. Use for four to six features with their own demos, on consumer and soft brands.

Recipe: rows of two tiles in a 2:3 ratio, about 522 and 776px, swapping sides each row. Radius about 20, gap 24, and tops offset about 12px on purpose. A tint per tile, a demo filling the top 60 to 70%, then a 38 to 40px title and 19 to 20px copy.

Seen on mymind, Material 3, Zentry. Suits gradient light, soft pastel and expressive.

```css
.row { display: grid; gap: 24px; margin-bottom: 24px; align-items: start; }
.row.a { grid-template-columns: 2fr 3fr; }
.row.b { grid-template-columns: 3fr 2fr; }
.tile { display: flex; flex-direction: column; min-height: 680px; padding: 40px 48px 44px; border-radius: 20px; background: var(--tint); }
.row .tile:nth-child(2) { margin-top: 12px; }           /* out of line on purpose */
.demo { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 400px; padding-bottom: 32px; }
.tile h3 { font: 600 38px/1.1 var(--font-display); letter-spacing: -.02em; }
.tile p { margin-top: 14px; color: var(--ink-2); max-width: 25em; font-size: 19px; line-height: 28px; }
@media (max-width: 900px) { .row.a, .row.b { grid-template-columns: 1fr; } .row .tile:nth-child(2) { margin-top: 0; } .tile { padding: 28px 24px; min-height: 0; } }
```

<!-- v:section.feature-grid/card-rail -->
#### card-rail

*6 sites, quality 4.* Generous: there is more than fits. Use for eight or more parallel items such as agents, templates or stories. Skip it when every item must be read, because most people will not scroll sideways.

Recipe: cards of 304 to 400px at a 20 to 22px gap, running past the right edge so the last is cut by the viewport. That cut is the scroll cue. 36 to 40px round controls bottom or top right, the disabled one at 50%. Better Stack gives each product its own rail.

Seen on Asana, Apple, CleanShot, Monzo, Better Stack. See `references/motion/scroll.md`, recipe 2, for a pinned form.

<!-- v:section.feature-grid/index-rows -->
#### index-rows

*7 sites, quality 4.* A table of contents. Confident and typographic. Use for agencies, studios, services and portfolios, or anywhere the words are the product. Needs at least five items, and real descriptions.

Recipe: rows about 70px tall on 1px rules, a 44px light name on the left, a one-line description at about 62% across the width, no icons, no cards. The hover moves the row 12px and lifts the copy's ink. Betterment adds a 50px glyph and a tinted hover plate. PostHog gives each row a 6px coloured spine, so guides read as books on a shelf.

Seen on Evenark, Betterment, Daily, Russell & Stellar, Tim Rodenbroeker. Suits type-led, photo-led, mono technical.

```css
.row { display: grid; grid-template-columns: 1.62fr 1fr; align-items: baseline; padding: 10px 0 12px; border-bottom: 1px solid var(--line); color: inherit; text-decoration: none; transition: padding-left .25s cubic-bezier(.2,.7,.2,1); }
.row h3 { font: 300 44px/1.12 var(--font-display); letter-spacing: -.024em; }
.row p { color: var(--ink-2); font-size: 18px; transition: color .2s; }
.row:hover { padding-left: 12px; } .row:hover p { color: var(--ink); }
@media (max-width: 760px) { .row { grid-template-columns: 1fr; gap: 6px; } .row h3 { font-size: 32px; } }
```

<!-- v:section.feature-grid/routing-link-tiles -->
#### routing-link-tiles

*8 sites, quality 4.* A concierge. It sorts visitors by need, not by feature. Use high on a page with several audiences, or for shops and health services with many entry points.

Recipe: short wide tiles, about 434 by 78 or 440 by 91, 8 to 20px gaps. A 24px label left, a small illustration or product cutout and chevron right. Whole tile links. Hover darkens the fill by one step. A single question sits above them. Khan Academy uses 66px outlined pills with a geometric icon per subject; ECI uses large mint tiles with a label at the bottom left and the top two-thirds left empty.

Seen on Headspace, Therabody, Ro, Khan Academy, ECI. Suits photo-led, illustrated, warm neutral.

<!-- v:section.feature-grid/broken-grid-set-piece -->
#### broken-grid-set-piece

*7 sites, quality 4.* One composed moment instead of a list. Use once per page at most, for an idea with a real structure: three overlapping things, or a claim surrounded by proofs.

Recipe: Elyx draws three hairline circles with captions in each lobe and colour only at the triple overlap. Monzo pins a centred heading between four corner cards, which reverses heading-above-grid. Prototype starts its second pair of columns about 216px lower. Sword steps four cards by 32px. The offset must follow the content, or it looks like a mistake.

Seen on Elyx, Monzo, Prototype, Sword Health, Arkansas Museum of Fine Arts.

<!-- v:section.feature-grid/reassurance-icon-band -->
#### reassurance-icon-band

*7 sites, quality 3.* Tidy retail reassurance: shipping, returns, opening hours, amenities. Use on stores and local businesses, low on the page. Keep it small, because it holds no argument.

Recipe: a full-bleed tinted band or panel, four columns, a 36px line icon, a 16px/600 title, 12 to 14px centred text. Apple's spec form swaps the title for one large figure.

Seen on GoPro, Vrdnt Work, Eboca, Flavor Dady, Apple MacBook Pro.

### Mistakes that cheapen a grid

Most of these came from our own first attempts, side by side with the real frame.

- **Stopping the content above the crop.** Our first plates held a panel that ended before the plate did, so the bottom showed blank white. It read as an empty card rather than a slice of a real screen. Make the fragment taller than its plate and fill it to well past the cut.
- **Repeating one fragment shape.** Four white tables in four plates looked like a template even with real data. Use a list, a chart, a control panel and a code block in one row.
- **Four unrelated tints.** Four pastels gave a muddy row. One wash cut across all four plates looked deliberate immediately. If you need separate colours, take them from a real palette, as mymind does.
- **Miniature UI.** At 12.5px our fragments read as thumbnails. Real sites run fragments at 13 to 15px, close to true size, and crop the rest. Crop, do not shrink.
- **Identical proof rows.** Five rows of chips looked mechanical. A different kind of artefact per cell fixed it.
- **Hollow cells.** A `min-height` of 236px left a gap between copy and proof. Keep that gap under about 24px, and drop `min-height` to what the content needs.
- **Reserving title height for titles that do not wrap.** We held two lines for one-line titles and got a dead gap. Either break the titles on purpose or let the row be ragged.
- **Dense line art.** Nine thin plates made a moiré. Five plates and one thick slab looked like a drawing. Use larger forms, fewer lines, and let line brightness fall off downward. Wireframes without filled faces look like old CAD.
- **Guides on one section only.** Stripe's tick depends on guides that run through every band. In one section it is decoration.
- **Clip-art spot icons.** Flat two-tone shapes at 40px looked amateur. Overlap two shapes, add a dark third tone and a gradient on the main shape.
- **A small demo on a big tile.** Our first tile filled 45% with its demo and looked like a sticker. Fill 60 to 70%, and let the type inside the demo be 20px.
- **Flat colour rectangles as stand-ins.** Book covers with no spine shadow or sheen read as placeholders. Add one edge detail, or use a real image.
- **Busy photos under text.** A flat-lay of coffee beans fought the caption. Choose photos with one subject and a calm lower third, and darken the foot to at least 0.8.
- **Weight doing hierarchy's job.** 600 or 700 on every title and 500 on every label flattens a section. Gold titles are 400 to 500.
- **Giving every item an icon because the template has a slot.** If the icon is a generic glyph, take it out. Check marks, numbers, a run-in lead or nothing all read better.
- **Unequal link rows.** Pin the last line of each cell to the bottom, or copy length will scatter them.

---

## Alternating rows

Alternating rows give one idea at a time enough room to land: a claim beside its proof. They are the right tool when each feature deserves a screen. They become a template the moment every row is a centred text block facing a stock screenshot at a 50/50 split, with the sides swapping mechanically.

What separates great from cheap is the stage and the alignment. Great rows put the proof on a tinted stage with a real crop, set copy in a narrow measure of 360 to 440px, and anchor it deliberately: to the base of the plate, or to the top, or inside a shared card. Sides do not have to swap at all. Stripe Billing keeps its copy on the left in every row, because a stack scans down one column.

Measured and read from frames: copy column 265 to 480px, stage 536 to 830px, row gap `~`60 to 130px or a full band of about 590px, heading 26 to 40px at weight 400 to 500, body 16 to 18px at 1.5 and about 60% ink, stage radius 6 to 40px.

<!-- v:section.feature-alternating/copy-beside-tinted-stage -->
#### copy-beside-tinted-stage

*14 sites, quality 4.* The modern default, and a good one. Calm, productised, room to read. Use it for three to five features with real product moments. Skip it if every stage would hold the same app screen.

Recipe: a 440px copy column beside a 555 by 386px stage, radius 20 to 28, with a 1px inset hairline and a tint that changes per row. Inside, layer two or three real fragments, with one entering from a stage edge and small floating notes overlapping it. Brilliant sets each row in a full band of about 590px, alternating page tone with a one-step tint and 100px of padding. Copy at 30/38 and 16/24 at 60% ink, then one text link.

Seen on Brilliant, CleanShot X, Levels, Tana, Brex, Grafana, Readwise, Kiro. Suits gradient light, light precision, soft pastel and warm neutral, for SaaS, health, finance and education.

```html
<section class="band"><div class="in">
  <div class="stage" style="--tint:var(--surface)"><!-- 2 or 3 layered fragments, one cut by the stage edge --></div>
  <div class="copy"><h3>A tutor that hears the difference</h3><p>Two or three specific sentences.</p><a href="#">One link →</a></div>
</div></section>
```

```css
.band { padding-block: 100px; }
.band:nth-child(even) { background: var(--surface); }
.band:nth-child(even) .stage { order: 2; }
.in { width: min(1110px, calc(100% - 48px)); margin-inline: auto; display: grid; grid-template-columns: 555px 440px; justify-content: space-between; align-items: center; }
.stage { position: relative; height: 386px; border-radius: 28px; background: var(--tint); box-shadow: inset 0 0 0 1px var(--line); overflow: hidden; }
.copy h3 { font: 500 30px/38px var(--font-display); letter-spacing: -.02em; }
.copy p { margin-top: 20px; color: var(--ink-2); font-size: 16px; line-height: 24px; }
.copy a { display: inline-block; margin-top: 20px; color: var(--accent); font-weight: 500; text-decoration: none; }
@media (max-width: 1120px) { .in { grid-template-columns: 1fr; gap: 32px; } .band:nth-child(even) .stage { order: 0; } .band { padding-block: 64px; } .stage { height: 340px; } }
```

<!-- v:section.feature-alternating/split-card -->
#### split-card

*8 sites, quality 4.* One object holds both halves, so a long page reads as a stack of labelled drawers. Use for a family of products, and when you want density. It handles five rows without fatigue, which free-standing zigzags do not.

Recipe: a 1232px card, 6 to 18px radius, 1px hairline. Left about 648px on the page colour: a 22px title, 16px body, and a button pinned to the base. Right, a pane one tint off with a 1px divider and layered UI cropped by the card edge. Rows sit 12 to 16px apart. Stripe adds a gradient hairline along the top and bottom edges of the hovered row. Keep the copy on one side.

Seen on Stripe Billing, Prisma, Fundrise, Strapi, Trigger.dev, Philadelphia Orchestra. Suits light precision, gradient light, bold colour.

```css
.row { position: relative; display: grid; grid-template-columns: 1fr 584px; height: 256px; margin-bottom: 12px; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; background: var(--bg); }
/* two hairlines that only appear on the row you are reading */
.row::before, .row::after { content: ""; position: absolute; left: 0; right: 0; height: 1px; opacity: 0; transition: opacity .25s; background: linear-gradient(90deg, transparent 30%, var(--accent) 70%, transparent 92%); }
.row::before { top: -1px; } .row::after { bottom: -1px; }
.row:hover::before, .row:hover::after { opacity: 1; }
.c { display: flex; flex-direction: column; align-items: flex-start; padding: 24px; }
.c h3 { font: 500 22px/30px var(--font-display); letter-spacing: -.012em; }
.c p { margin-top: 6px; color: var(--ink-2); max-width: 37em; }
.btn { margin-top: auto; }
.p { position: relative; background: var(--surface); border-left: 1px solid var(--line); overflow: hidden; }
@media (max-width: 1020px) { .row { grid-template-columns: 1fr; height: auto; } .c { gap: 20px; } .p { height: 240px; border-left: 0; border-top: 1px solid var(--line); } }
```

<!-- v:section.feature-alternating/anchored-copy-rows -->
#### anchored-copy-rows

*4 sites, all gold, quality 5.* Small and expensive. The copy is pinned to the plate's base or top, and the rest of the column stays empty on purpose. Use it when you have strong plates and short copy. It needs a page with visible rails, or the empty column looks unfinished.

Recipe: two equal columns, about 607px each. A plate about 460 to 570px tall, a window cropped by its base. Copy at the bottom of the opposite column: a two-tone line, muted first and full ink second, then 16px at about 56% ink. The next row flips, starting about 120px below. Increase's form splits rows with 10% rules and uses `justify-content: space-between` to push a customer quote to the row's base.

Seen on Devin (codeium.com), Increase, Bakstad Construction, Warp. Suits light precision and photo-led, for AI, finance, architecture.

```css
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 112px; }
.row.flip .plate { order: 2; }
.copy { align-self: end; padding: 0 24px; }          /* sits on the plate's base line */
.copy h3 { font: 400 30px/1.14 var(--font-display); letter-spacing: -.026em; }
.copy h3 span { display: block; color: var(--ink-3); }
.copy p { margin-top: 10px; color: var(--ink-2); max-width: 31em; }
.plate { position: relative; height: 468px; overflow: hidden; background: linear-gradient(160deg, var(--wash-1), var(--wash-2)); }
.win { position: absolute; left: 44px; right: 44px; top: 44px; height: 520px; display: grid; grid-template-rows: 44px 1fr; background: var(--surface); border-radius: 12px; box-shadow: 0 0 0 1px rgba(0,0,0,.07), 0 30px 60px -28px rgba(0,0,0,.45); font-size: 15px; }
.win.off { right: -60px; }   /* every second window leaves by the edge */
@media (max-width: 900px) { .row { grid-template-columns: 1fr; margin-bottom: 64px; } .row.flip .plate { order: 0; } .copy { padding: 8px 0; } .plate { height: 380px; } .win { left: 20px; right: -40px; top: 24px; } }
```

<!-- v:section.feature-alternating/bleed-past-the-edge -->
#### bleed-past-the-edge

*8 sites, quality 4.* Bigger than the page. A window or photo leaves the container and runs off the viewport, which says there is more. Use once or twice, for the most important product moment.

Recipe: a 265 to 360px copy column at the page edge, and a window about 830px wide that passes the container and bleeds off the viewport. Spline adds a 12px mono eyebrow, a 56/64 heading and four 70px-pitch icon rows beside it. For photos, Medusa622 and Aesop let the photo run off one side at a 60px page gutter.

Seen on Spline, VS Code, Aesop, Fairphone, Le Saint Georges, Figma FigJam. Suits dark precision and photo-led.

<!-- v:section.feature-alternating/shifting-ratio-tiles -->
#### shifting-ratio-tiles

*5 sites, quality 4.* A zigzag with the stiffness removed. Use with big images and short copy, in hardware, retail and interiors.

Recipe: pairs of tiles 16px apart, radius about 15. Row one 778 and 582px, row two 545 and 817. The text tile is a flat one-step grey, with 25px padding and a 32px heading plus 17/29 body, weighted to the bottom. Unito overlaps its rows by about 180px, so the next image starts before the last one ends.

Seen on Apptronik, Unito, xtrackr, VanMoof, Vrdnt Work. Suits light precision, photo-led, warm neutral.

<!-- v:section.feature-alternating/full-width-tinted-panels -->
#### full-width-tinted-panels

*4 sites, quality 4.* Each feature gets its own room. Friendly and consumer. Use for four or fewer features, each with its own colour reason.

Recipe: panels of about 1312 by 670px, radius 30 to 40, gap 24 to 40. A two or three stop diagonal pastel wash, a 48px heading with a small tag on one side, and one floating UI card on the other. Dailee floods a single flavour colour per panel. Sweetgreen places a 658px tall photo with a 20px radius on a sage panel.

Seen on Copilot, Dailee, Sweetgreen, EverShee. Suits gradient light, soft pastel, bold colour, for finance, food and health.

<!-- v:section.feature-alternating/half-and-half-colour-split -->
#### half-and-half-colour-split

*9 sites, quality 3.* Print-like. Half photo, half flat colour, butted with no gap. Use for hospitality, architecture, food and institutions, where a sampled colour from the photo can carry the panel.

Recipe: 50/50 full bleed, near viewport tall. Colour half: small caps label, a 26 to 32px title, 15/24 copy, a thin outlined or bare button. Sample the panel colour from the photo, and change it per row. TR Studio uses two near-identical tonal fields for a quieter form.

Seen on TR Studio, Villa Aurelia, Royal College of Art, Heart & Soil, Structure Consulting. Suits warm neutral, photo-led, bold colour.

<!-- v:section.feature-alternating/viewport-chapters -->
#### viewport-chapters

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

<!-- v:section.feature-alternating/plain-zigzag -->
#### plain-zigzag

*9 sites, quality 3.* Dependable. Works when the photography is excellent and the audience wants to read: hotels, food, shops, documentation. It needs no apology, but it gives you nothing back.

Recipe: 56 to 62% image, 320 to 420px text, about 100 to 130px between rows. Babylonstoren's refinement is worth copying: the photo is 767px wide and overlaps its previous column, so it shifts sideways by about 280px rather than swapping fully. A small heading, muted 15/21 body, and an 11px caps link with a 50px underline.

Seen on Babylonstoren, Blue Bottle, Key, Eicher Honig, Electron. Suits photo-led, warm neutral, light precision.

<!-- v:section.feature-alternating/structured-copy-column -->
#### structured-copy-column

*7 sites, quality 3.* The copy side does real work. Use when a row has several facts: a checklist, accordion or spec rows beside one image.

Recipe: Zapier sets a 369px column with a heading, 16/21 copy, three 46px plus-rows on hairlines and stacked buttons, beside an 831px plate. One Medical uses a two-column checklist with 24px filled circles. Pete Sena uses four ruled rows and a full-width pill.

Seen on Zapier, One Medical, Pete Sena, White Label IQ, Crescent Dental.

<!-- v:section.feature-alternating/editorial-scale-play -->
#### editorial-scale-play

*5 sites, quality 3.* Print thinking: size contrast does the work. Use in fashion, hospitality and magazines.

Recipe: Kinfolk puts a 60px centred headline over a 212 by 286px portrait, with about 200px of white after it. The image is far narrower than the type, which inverts the usual proportion. Sen Knife scatters small photos at different sizes beside a 52px headline.

Seen on Kinfolk, 1 Hotels, Taya, La Dolfina, Sen Knife.

<!-- v:section.feature-alternating/interactive-comparison -->
#### interactive-comparison

*2 sites, quality 3.* Lets the reader do the demonstrating. Use a before and after slider for visible transformation, and a swatch row for a colour range. Only worth it when the change is visible at a glance.

Seen on Acme Cups and Orbit Design.

### Mistakes that cheapen alternating rows

- **Stage content that stops short.** Our chart ended above the card edge and left a white strip. The bars must reach the crop.
- **Stretched grid rows inside a fake window.** A window with a fixed height and auto rows pushed its title bar away from its content. Set `grid-template-rows: 44px 1fr`.
- **Waveforms and charts drawn thick.** Our first bars looked like a loading skeleton. Use many thin marks.
- **Headline widows.** One word on a last line appeared in several of our demos. Set `text-wrap: balance` on headings and `pretty` on body copy.
- **Swapping sides by habit.** Swapping is a rhythm device, not a law. With rows closer than 16px, keep copy on one side.
- **Equal halves everywhere.** A 50/50 split with centred copy is the template. Move to 40/60 and anchor the copy to an edge.
- **The same app screen in every row.** Three crops of one dashboard reads as one point made three times. Change the object.
- **More than five free-standing rows.** After that, use split cards or tabs.
- **Bands and tinted stages in the same hue.** Keep the band one step from the page, and let the stage carry the colour.

---

## Tabs and accordions

Tabs let many things share one stage. They suit several parallel stories of equal weight, and they fail when the reader never finds out what is behind the first tab. Nothing behind a tab is seen by default, so put your best material first and make the control look like the answer to a question.

What separates great from cheap: the control is designed as one object with the stage, the stage holds real interface at real size, and the active state is carried by one exact device. Of 75 rows, 19 use pills and 12 use progress or auto-advance. Timed progress tabs had the most gold sites of any tab variant, with 8 of 11, because a filling line shows that something is happening and how long until the next. Auto-advance needs a pause on hover and focus, and must stop under reduced motion.

All tab variants need correct semantics: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, arrow-key movement, and a visible focus ring.

Measured and read from frames: pill height 38 to 56px, gap 8 to 16px, label 14 to 18px at weight 500. Stage 680 to 1376px wide. Hairline tabs: 14 to 24px labels, indicator 1 to 4px. Gap from control to stage `~`16 to 32px.

<!-- v:section.feature-tabs/pill-tabs-over-stage -->
#### pill-tabs-over-stage

*10 sites, quality 5.* Clear, friendly, app-like. The most common strong tab. Use when there are three to six named areas and the labels are short. Skip when labels run past three words.

Recipe: pills 38 to 56px tall, 8 to 16px gap, directly above a window 16 to 28px away. Active state: a solid ink pill with reversed text on pale pages, or a 1px ink outline and ink text on quiet ones. The window runs to the section's bottom rule and is cut by it. Asana and Spline dim and peek the neighbouring panels at about 25% opacity. Slack sets 24px labels with icons, so they read as prompts.

Seen on Supabase, Brilliant, Asana, Spline, Slack, Lyra, Headspace. Suits light precision, gradient light, warm neutral, for SaaS, AI, health and education.

```html
<div class="tabs" role="tablist" aria-label="Product areas">
  <button class="tab" role="tab" id="t1" aria-controls="p1" aria-selected="true">Roast log</button>
  <button class="tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1">Green stock</button>
</div>
<div class="win">
  <div class="dots"><i></i><i></i><i></i></div>
  <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1"><!-- real UI, taller than the window --></div>
  <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden></div>
</div>
```

```css
.sec { padding-top: 72px; border-bottom: 1px solid var(--line); overflow: hidden; }
.tabs { display: flex; gap: 8px; margin-block: 28px; overflow-x: auto; scrollbar-width: none; }
.tab { flex: none; height: 38px; padding: 0 20px; border-radius: 99px; border: 1px solid var(--line); background: none; font: 500 14px/1 var(--font-text); color: var(--ink-2); cursor: pointer; transition: color .15s, border-color .15s; }
.tab:hover { color: var(--ink); }
.tab[aria-selected="true"] { border-color: var(--ink); color: var(--ink); }
.tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
/* taller than the section allows: the section's own rule cuts it */
.win { height: 560px; margin-bottom: -1px; border: 1px solid var(--line); border-bottom: 0; border-radius: 16px 16px 0 0; background: var(--surface); overflow: hidden; }
.dots { height: 40px; display: flex; align-items: center; gap: 6px; padding: 0 16px; }
.dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--line); }
.panel[hidden] { display: none; }
```

```js
const tabs = [...document.querySelectorAll('[role=tab]')];
const pick = t => tabs.forEach(x => {
  const on = x === t;
  x.setAttribute('aria-selected', on);
  x.tabIndex = on ? 0 : -1;
  document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
});
tabs.forEach((t, i) => {
  t.addEventListener('click', () => pick(t));
  t.addEventListener('keydown', e => {
    const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    pick(n); n.focus();
  });
});
```

<!-- v:section.feature-tabs/timed-progress-tabs -->
#### timed-progress-tabs

*11 sites, 8 gold, quality 5.* The page feels alive and paced, and a stage tours itself. Use when a person would otherwise miss the later items. Skip it for content that takes long to read.

Recipe: put the indicator on a 1px rule **above** the label, spanning the tab, and fill it left to right as a timer of 5 to 8 seconds. The label never moves. Active label full ink, others about 40 to 60%. Forms: Lithic has right-aligned 24px labels and a 28px ring timer in the corner. Expo and Calvyn pair stacked steps with a small ring and a pause glyph. Cal.com draws an arc along the top of the active row. Inngest fills a 55px segment. Bun and Customer.io pair a list with a live terminal or typed chat, and the line grows along the active row's rule. Dalco uses eight 145px segments along the foot of a full-bleed slide.

Seen on mymind, Lithic, Cal.com, Expo, Inngest, Bun, Customer.io, Leo Cussen, PostHog, Dalco. Suits light precision, gradient light, mono technical, dark precision.

```html
<div class="tabs" role="tablist" aria-label="Features">
  <button class="tab" role="tab" aria-selected="true" aria-controls="v1"><i></i>Sowing calendar</button>
  <button class="tab" role="tab" aria-selected="false" aria-controls="v2"><i></i>Frost alerts</button>
</div>
```

```css
:root { --dur: 7s; }
.tabs { display: grid; grid-template-columns: 1.25fr 1fr 1fr 1fr; gap: 24px; }
.tab { all: unset; position: relative; padding-top: 14px; border-top: 1px solid var(--line); font: 500 22px/1.2 var(--font-text); letter-spacing: -.015em; color: var(--ink-3); cursor: pointer; transition: color .2s; }
.tab[aria-selected="true"] { color: var(--ink); }
.tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.tab i { position: absolute; left: 0; top: -1px; height: 1px; width: 100%; background: var(--accent); transform: scaleX(0); transform-origin: 0 50%; }
.tab[aria-selected="true"] i { transform: scaleX(1); }
.motion .tab[aria-selected="true"] i { animation: fill var(--dur) linear forwards; }
.paused .tab i { animation-play-state: paused !important; }
@keyframes fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.pane { position: absolute; inset: 0; opacity: 0; transition: opacity .5s; }
.pane.on { opacity: 1; }
@media (max-width: 900px) { .tabs { display: flex; overflow-x: auto; gap: 16px; scrollbar-width: none; } .tab { flex: none; min-width: 150px; font-size: 17px; } }
```

```js
// .motion is set in the head only when reduced motion is off, so with it on the timer never runs
const tabs = [...document.querySelectorAll('[role=tab]')], root = document.documentElement, area = document.querySelector('.tray');
function go(i) { tabs.forEach((t, j) => { t.setAttribute('aria-selected', j === i); document.getElementById(t.getAttribute('aria-controls')).classList.toggle('on', j === i); }); }
tabs.forEach((t, i) => {
  t.addEventListener('click', () => go(i));
  t.querySelector('i').addEventListener('animationend', () => go((i + 1) % tabs.length));
});
// hover and focus pause the timer, so nobody loses the panel they are reading
['pointerenter', 'focusin'].forEach(e => area.addEventListener(e, () => root.classList.add('paused')));
['pointerleave', 'focusout'].forEach(e => area.addEventListener(e, () => root.classList.remove('paused')));
```

<!-- v:section.feature-tabs/accordion-beside-stage -->
#### accordion-beside-stage

*8 sites, quality 5.* Explanatory. Text and proof sit side by side, and each row can hold a real paragraph. Use when each item needs two or three sentences. It is the best tab form for phones, since it collapses naturally.

Recipe: a 628px stage, radius 20, and a 518px accordion. Rows on 1px hairlines, 24px titles, 20/30 body in dark grey, not pale grey, and 24px circular chevrons. A 72px ink segment on the open row's top rule marks it, and can double as a timer. Cloudflare's form puts code in two-thirds and stacked cells in one third, with a 4px accent left bar and a one-step fill on the active cell. Stripe's form opens to a full-width 1232 by 472px gradient stage with three text columns under it.

Seen on Asana, Cloudflare Workers, Vercel AI SDK, Stripe Billing, Algolia, Payload, Hotjar. Suits light precision, dark precision, warm neutral.

```css
.split { display: grid; grid-template-columns: 628px 1fr; gap: 124px; align-items: start; }
.stage { position: relative; height: 560px; border-radius: 20px; background: var(--ink); overflow: hidden; }
.acc { border-top: 1px solid var(--line); }
.item { position: relative; border-bottom: 1px solid var(--line); }
.item::before { content: ""; position: absolute; left: 0; top: -1px; width: 72px; height: 1px; background: var(--ink); opacity: 0; }
.item.open::before { opacity: 1; }
.item button { all: unset; box-sizing: border-box; display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 24px 0; font: 500 24px/1.2 var(--font-display); letter-spacing: -.012em; cursor: pointer; }
.body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .32s cubic-bezier(.2,.7,.2,1); }
.item.open .body { grid-template-rows: 1fr; }     /* animates height without measuring */
.body > div { overflow: hidden; }
.body p { padding-bottom: 28px; color: var(--ink-2); font-size: 20px; line-height: 30px; }
@media (max-width: 1180px) {
  .split { grid-template-columns: 1fr; gap: 32px; }
  .stage { height: auto; aspect-ratio: 628/560; }
  .view { width: 628px; height: 560px; transform: scale(var(--s, .5)); transform-origin: 0 0; }
}
```

```js
// scale fixed-layout art to the stage, rather than letting it reflow
const stage = document.querySelector('.stage');
new ResizeObserver(() => stage.style.setProperty('--s', stage.clientWidth / 628)).observe(stage);
```

<!-- v:section.feature-tabs/typographic-index -->
#### typographic-index

*9 sites, quality 4.* The list is the design. Dramatic and confident. Use for services, channels and products where the names are good. Fits agencies and bold brands.

Recipe: a stack of very large names, 28 to 100px, on 1px rules or on none. Active full ink, others about 25 to 55%. A small preview photo or card swaps beside the list. Decagon stacks 60px channels with a photo that swaps under a rising tint. North Hub uses 36px serif rows at 146px pitch, and a progress line fills the rule. Nurx uses 16px mono caps on 51px rows in a tinted panel. Athletics scatters chips over 100px names.

Seen on Decagon, Baseten, North Hub, Nurx, Studio Unlmtd, Athletics, Figma FigJam. Suits photo-led, type-led, bold colour.

<!-- v:section.feature-tabs/selected-row-list -->
#### selected-row-list

*6 sites, quality 4.* An interface inside the page. Use when rows have a sentence each. Compact and calm.

Recipe: three to four rows on the left; the active row becomes a white 12px card with a 1px border, while others stay on the page with grey text. Live preview on the right. AuthKit flanks a form with toolbars of swatches and corners, so the panel looks configurable. Exa's form is a 500px dark rail with a 2px white bar and blurb beside a chart.

Seen on AuthKit, Exa, Obsidian, Jurafuchs, Cloudinary.

<!-- v:section.feature-tabs/underline-text-tabs -->
#### underline-text-tabs

*7 sites, quality 4.* Plain and correct, like documentation. Use for developer tools, docs, and panels that should feel native. Docks directly on the window it controls.

Recipe: 14 to 18px labels with 24 to 40px gaps on a full-width 1px rule. Active indicator 2 to 4px. Storybook and mymind both place it on top of the rule with the label beneath, which looks more considered than an underline. Haikei uses four 306px two-line tabs on a 4px rule. Scrolls sideways on phones rather than wrapping.

Seen on Storybook, Strapi, Tailwind, Khan Academy, Haikei, Stripe Connect.

<!-- v:section.feature-tabs/segmented-control -->
#### segmented-control

*6 sites, quality 4.* Native and tactile. Use for two to five short options, such as a device or audience switch.

Recipe: a pale track pill about 56px tall, with a solid active pill 6px inside it, 17px labels. LiveKit's form is a 404 by 46 rail with a 1px border and tracked mono caps. Canva pins an 80px capsule with coloured glyphs at the top while tiles scroll under it. Trigger.dev cuts its last tab at the viewport edge to hint at more.

Seen on Apple Intelligence, LiveKit, Canva, Trigger.dev, Weekstack, Struck.

<!-- v:section.feature-tabs/large-card-tabs -->
#### large-card-tabs

*3 sites, quality 4.* Tabs that also explain. Use when a label alone will not do and a one-line description helps.

Recipe: three tabs about 346 to 389px wide and 90 to 113px tall, radius 8 to 16, 1px border, a 40px icon, 14 to 16px label, one description line. Resend's active tab gains a thin accent glow along its bottom edge, and sits 32px above a full dashboard.

Seen on Resend, Chromatic, Zapier.

<!-- v:section.feature-tabs/file-tabs -->
#### file-tabs

*5 sites, quality 4.* Literal and honest for code and documents. Use on developer docs, or where the content really is files.

Recipe: bordered 13 to 14px mono tabs on the top of the frame, active tab white with a 2px accent underline. ReadMe's active tab has 6px square nodes on its corners. Telkom uses flush 226 by 46px cells, the active one filled.

Seen on Cloudflare Docs, ReadMe, MotherDuck, Telkom-OT, D Alexander CPA.

<!-- v:section.feature-tabs/peek-carousel -->
#### peek-carousel

*4 sites, quality 4.* One item at a time, with the next showing. Use for a few rich slides.

Recipe: 504 to 1140px slides with the next one peeking 36 to 40px away. Monzo treats it as media: a transport row with a play ring, dash and dot progress and next ring. Round arrows align to the heading.

Seen on Stripe Payments, Monzo, Otter, Parsley Health.

<!-- v:section.feature-tabs/index-on-media -->
#### index-on-media

*3 sites, quality 4.* The control lives on the image. Use for a full-bleed visual with a few alternatives: products, card types.

Recipe: Revolut sets three 42px pills bottom centre over a full-bleed image, the active one solid white and the rest with a 2px white outline. DJI puts a 14px list bottom left on a 30px rhythm with a small vertical tick. Stone Island uses three 352px columns with a plus and an index, and no bar at all.

Seen on Revolut, DJI, Stone Island.

<!-- v:section.feature-tabs/expanding-column-accordion -->
#### expanding-column-accordion

*1 site, quality 5.* Five tall photo columns, and the open one lifts its label. Use for five or so audiences or products with cohesive photography.

Recipe: five 300 by 400px panels bleeding off the right edge, duotoned to one hue, 1px separators, a 40px circle plus top left, a 20/500 white label at the foot. Duotoning is what lets different photos sit together.

Seen on Customer.io.

<!-- v:section.feature-tabs/diagram-bound-selector -->
#### diagram-bound-selector

*2 sites, quality 4.* The control is part of the idea. Claude writes the heading as a sentence with underlined variables, with lists either side of a stacked card deck, so choosing is reading. lemon.markets runs a hairline from each option toward an illustration, and the matching column in the drawing fills with the accent.

Use once, when the content has a real structure to bind to. Seen on Claude and lemon.markets.

<!-- v:section.feature-tabs/filter-row -->
#### filter-row

*2 sites, quality 3.* Tabs that filter rather than swap: 13 to 18px text or small pills directly above a grid of cards, active in the accent, no underline.

Seen on Stripe Customers and Bellroy. Use for logos, stories and shop categories.

### Mistakes that cheapen tabs

- **A window that ends inside the section.** With the content finishing above the rule, ours looked like a small floating box. Keep real content running past the cut.
- **Fixed-position art on a phone.** Our node graph collapsed at phone width. Scale the whole scene with `transform: scale()`, and do not let it reflow.
- **Pale inactive labels.** Ours were 2.4:1. Keep 3:1 for large labels and 4.5:1 for small ones. Readers need to read what they can switch to.
- **A sparse stage.** Six nodes looked like a diagram stub. The same graph with eleven nodes and brighter edges looked like a product.
- **Tabs with a sentence and an icon each.** If the panel is that small, it is a grid.
- **Auto-advance with no pause.** People lose what they were reading. Pause on hover and focus, and stop under reduced motion.
- **Panels of different heights.** A jumping page reads as a bug. Fix the stage height.
- **Colour as the only active signal.** Add weight, a fill or a bar, so the state survives a colour-blind reader.
- **Pills with long labels.** Past three words, use a list.

---

## Sticky scroll

Sticky scroll holds one thing still while something else moves, which turns a long argument into a guided tour. It costs attention, so it has to earn the pin. Its mean score, 4.63, is the highest of these five elements, and six of its nine variants average 4.5 or more. That is partly selection: few sites attempt it unless they have the product moments to fill it.

What separates great from cheap: real content changes on each step, the reader can always see where they are, and the pin never traps the wheel. Use `position: sticky` in a tall parent, not a JavaScript pin. Let scroll decide which step is active and let time play the change, so text is never caught half faded. `references/motion/scroll.md` has the shell, the reduced-motion gate and pacing: recipes 3 (stacked deck), 4 (sticky swap), 2 (horizontal rail) and 7 (type on scroll). The code below is the lighter, native form. It uses no library, and with JavaScript off every step simply reads in order.

Not everything that looks sticky is. Bun and Customer.io looked like sticky lists to our analysts, but they run on a timer and never pin. They are in `timed-progress-tabs` above. Choose that when the reader should watch rather than scroll.

Measured and read from frames: index column 218 to 348px, list column 400 to 672px, stage 584 to 930px, 3 to 6 steps, 60 to 100 lvh of scroll per step. See the pacing notes in the scroll chapter.

<!-- v:section.feature-sticky-scroll/list-drives-pinned-stage -->
#### list-drives-pinned-stage

*11 sites, quality 5.* The classic tour. Readable, productised, and the best first choice. Use for three to five steps that each change one stage.

Recipe: a list column of about 444 to 672px, a stage of about 584 to 800px sticking near the top, and a step height of about 72vh. Mark the active row with one device: full ink against about 30% for the others, a 2 to 5px bar, a thin rule, an arrow tile. Wispr Flow centres a 400 by 468px video card with steps on the left and a large title low on the right. Payload stacks four 48/64 lines, the current one white, the rest at 25%. Sentry uses a 4px gradient left rule. Fill the stage: this is where it is easiest to leave half a panel blank.

Seen on Wispr Flow, Payload, Sentry, Calvyn, Storybook, Nx, Lindy, Sweeply. Suits dark precision, warm neutral, gradient light, bold colour, for SaaS, devtool and AI.

```html
<section class="tour">
  <div class="steps">
    <article class="step on" data-s="0"><span>01</span><h3>Demand arrives by the hour</h3><p>Two specific sentences.</p></article>
    <article class="step" data-s="1"><span>02</span><h3>Batteries answer first</h3><p>Two specific sentences.</p></article>
  </div>
  <aside class="stage" aria-hidden="true">
    <div class="scene on"><!-- a full panel --></div>
    <div class="scene"><!-- a full panel --></div>
  </aside>
</section>
```

```css
.tour { display: grid; grid-template-columns: 444px 1fr; gap: 72px; align-items: start; }
.step { position: relative; min-height: 72vh; display: flex; flex-direction: column; justify-content: center; padding-left: 28px; border-left: 1px solid var(--line); transition: opacity .3s; }
.js .step { opacity: .34; } .js .step.on { opacity: 1; }   /* the dim state only exists when JS can lift it */
.step::before { content: ""; position: absolute; left: -1px; top: calc(50% - 44px); height: 88px; width: 1px; background: var(--accent); opacity: 0; transition: opacity .3s; }
.js .step.on::before { opacity: 1; }
.step h3 { margin-top: 12px; font: 400 32px/1.14 var(--font-display); letter-spacing: -.018em; }
.step p { margin-top: 12px; color: var(--ink-2); }
.stage { position: sticky; top: 14vh; height: min(72vh, 600px); min-height: 480px; border-radius: 12px; background: var(--surface); box-shadow: inset 0 0 0 1px var(--line); overflow: hidden; }
.scene { position: absolute; inset: 0; opacity: 0; transition: opacity .4s; }
.scene.on { opacity: 1; }
@media (max-width: 980px) {
  .tour { grid-template-columns: 1fr; gap: 24px; }
  .stage { order: -1; top: 12px; height: 42svh; min-height: 320px; z-index: 2; }   /* the stage stays, copy passes under it */
  .step { min-height: 58svh; justify-content: flex-start; padding-top: 28px; }
}
```

```js
document.documentElement.classList.add('js');   // in the head, before paint
const steps = [...document.querySelectorAll('.step')], scenes = [...document.querySelectorAll('.scene')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const i = +e.target.dataset.s;
  steps.forEach((s, j) => s.classList.toggle('on', j === i));
  scenes.forEach((s, j) => s.classList.toggle('on', j === i));
}), { rootMargin: '-45% 0px -45% 0px' });      // a thin line across the middle of the screen
steps.forEach(s => io.observe(s));
```

<!-- v:section.feature-sticky-scroll/pinned-index-scrolling-column -->
#### pinned-index-scrolling-column

*8 sites, quality 5, the highest mean of any variant seen on more than five sites, at 4.88.* A document with a table of contents. It gives a long section a spine, and readers can jump. Use for four to six chapters, each with a real statement and demo. It suits B2B pages that have to explain a lot.

Recipe: a 218 to 348px index stays put and a 1000px column scrolls past. 14 to 18px chapter labels, active near-black, others pale. Attio puts a 2px accent tick on the page rail itself, then gives each chapter a statement with a white-to-grey run-in above a demo cell. Baseten opens its rail with a black mono bar and marks the active row with a small square. Auth0 uses four links on 1px rules about 86px apart. Framer mirrors the idea, pinning a 260px agent transcript on the right while 930px cards scroll on the left. Slack turns the index into a four-tab bar under the nav. Hawl and LaunchDarkly add a counter.

Seen on Attio, Baseten, Framer, Auth0, Slack, ClickHouse, LaunchDarkly. Suits light precision, dark precision, bold colour.

```css
.page { display: grid; grid-template-columns: 348px 1fr; width: min(1392px, calc(100% - 48px)); margin-inline: auto; border-inline: 1px solid var(--line); }
.page > * { min-width: 0; }   /* without this a wide fragment or a nowrap nav widens the track, and overflow-x: clip hides the damage */
.index { position: sticky; top: 0; align-self: start; height: 100svh; display: flex; flex-direction: column; justify-content: center; padding-left: 56px; border-right: 1px solid var(--line); }
.index a { position: relative; display: block; padding: 7px 0; font: 500 18px/1.4 var(--font-text); letter-spacing: -.01em; color: var(--ink-3); text-decoration: none; transition: color .2s; }
.index a.on { color: var(--ink); }
/* -57px is the padding plus the rail, so the tick lands on the page's own line */
.index a::before { content: ""; position: absolute; left: -57px; top: 9px; bottom: 9px; width: 2px; background: var(--accent); opacity: 0; transition: opacity .2s; }
.index a.on::before { opacity: 1; }
.ch { border-bottom: 1px solid var(--line); }
.st { padding: 96px 56px 64px; font: 500 24px/1.22 var(--font-display); letter-spacing: -.016em; max-width: 30em; color: var(--ink-2); }
.st b { font-weight: 500; color: var(--ink); }
.cell { position: relative; height: 620px; background: var(--surface); border-top: 1px solid var(--line); overflow: hidden; }
.ui { position: absolute; left: 56px; top: 56px; right: -60px; bottom: -40px; }   /* same inset in every chapter */
@media (max-width: 980px) {
  .page { grid-template-columns: 1fr; border: 0; width: calc(100% - 32px); }
  .index { top: 0; height: auto; z-index: 3; padding: 10px 0; background: var(--bg); border: 0; border-bottom: 1px solid var(--line); }
  .index ul { display: flex; gap: 18px; overflow-x: auto; scrollbar-width: none; }
  .index a { white-space: nowrap; font-size: 15px; padding: 7px 0; }
  .index a::before { left: 0; right: 0; top: auto; bottom: -10px; height: 2px; width: auto; }
  .st { padding: 56px 0 32px; font-size: 21px; max-width: none; } .cell { height: 440px; }
}
```

```js
const links = [...document.querySelectorAll('.index a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('.ch').forEach(c => io.observe(c));
```

<!-- v:section.feature-sticky-scroll/pinned-chapter-stage -->
#### pinned-chapter-stage

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

<!-- v:section.feature-sticky-scroll/stacked-sheets -->
#### stacked-sheets

*6 sites, quality 4.* Weighty and physical, like cards dealt on a table. Use for three to six peers of equal weight. Skip it for long copy.

Recipe: sheets of about 1248 by 540 to 560px, radius 16, each sticking 14px lower than the last so the edges of earlier sheets peek. A heavy shadow, about `0 30px 40px` at 25 to 30% black, sells the overlap. Left 72px padding, a 48px title, 20/30 copy with underlined keywords, a white 52px button. UI bleeds off the right edge. Put a dark product rail inside the UI, since a white panel on a tinted sheet looks flat. The covered sheet can recede: `references/motion/scroll.md`, recipe 3, has the scrubbed form.

Seen on Paddle, Loopcraft, Forma24, North Hub Partners, LEDUP. Suits warm neutral, dark precision, light precision.

```css
.sheet { position: sticky; top: calc(88px + var(--i) * 14px); display: grid; grid-template-columns: 524px 1fr; min-height: 560px; margin-bottom: 40px; border-radius: 16px; background: var(--surface); box-shadow: 0 30px 40px rgba(0,0,0,.28); overflow: hidden; }
.copy { padding: 64px 0 64px 72px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.copy h3 { font: 400 48px/1.1 var(--font-display); letter-spacing: -.02em; }
.copy p { margin-top: 20px; font-size: 20px; line-height: 30px; }
.ui { position: relative; }
.a { position: absolute; left: 56px; top: 48px; width: 860px; height: 640px; background: var(--bg); border-radius: 8px 0 0 8px; box-shadow: 0 20px 50px -24px rgba(0,0,0,.4); }
@media (max-width: 1020px) { .sheet { grid-template-columns: 1fr; min-height: 0; top: calc(16px + var(--i) * 10px); } .copy { padding: 32px 24px; } .copy h3 { font-size: 34px; } .ui { height: 280px; overflow: hidden; } .a { left: 24px; top: 8px; } }
```

Keep sheets in block flow, with `style="--i:0"`, `--i:1` and so on. A grid or flex parent can trap a sticky child. Leave about 40vh of space after the last sheet so it can settle.

<!-- v:section.feature-sticky-scroll/split-pinned-half -->
#### split-pinned-half

*3 sites, quality 5.* A fashion spread. One half holds and the other scrolls. Use for a single product or person with several images.

Recipe: 50/50 split. X8 pins a panel with copy at its foot while macro, model and detail shots scroll in the other half, inside a 15px black frame, and the panel fill steps from white to a light grey. Lyra pins a heading and a 578 by 450 photo while rows scroll past, and the photo swaps with each row. Arya Bhangy swaps a full-height photo per year beside a stack of boxed years.

Seen on X8 Eyewear, Lyra, Arya Bhangy. Suits photo-led and warm neutral.

<!-- v:section.feature-sticky-scroll/scroll-spine -->
#### scroll-spine

*2 sites, both gold, quality 5.* A single line through the content, and a marker travels down it. Use when the steps really are a sequence.

Recipe: Decagon places a 1px vertical spine at the page centre on a black sheet, with a violet dot tracking scroll, copy left and frosted UI cards right. Inngest puts the line at the page's left, with a roughly 10px node per row that turns into an accent ring when active. Each row carries its own panel and inactive rows dim to 40%. Nothing is pinned, which keeps it light.

Seen on Decagon and Inngest.

<!-- v:section.feature-sticky-scroll/scrubbed-statement -->
#### scrubbed-statement

*2 sites, quality 4.* Type as the event. Use once, at most, for a positioning statement.

Recipe: Sourcegraph pins a pale section where three 64px lines stack, each arriving from about 8px of blur and low opacity, above three 70px step cards. Pete Sena rotates a 3D form inside a ring of about 120 ticks that fills as progress. See `references/motion/scroll.md`, recipe 7.

Seen on Sourcegraph and Pete Sena.

<!-- v:section.feature-sticky-scroll/horizontal-pin -->
#### horizontal-pin

*1 site, quality 4.* Vertical scroll drives panels sideways. Use for parallel items rather than ordered steps. Codecademy holds a mono heading over four 110px segment bars while panels slide in from the right over a dot grid. See `references/motion/scroll.md`, recipe 2.

<!-- v:section.feature-sticky-scroll/scale-to-fill -->
#### scale-to-fill

*1 site, quality 3.* A rounded card grows until it fills the viewport. Birdie uses it for a screenshot. Use one per page, as an entrance to something important. See recipe 6 in the scroll chapter.

### Mistakes that cheapen sticky scroll

- **Half-empty stages.** Our stage looked like a dark box with a table at the top. Size the stage to its content, or add content. `height: min(72vh, 600px)` fixed ours.
- **A silent overflow.** At phone width a wide fragment pushed the text column past the screen. `overflow-x: clip` hid it from the overflow check, and only the phone frames showed it. Fixing the main column was not enough, because the sticky nav's unwrapped row widened the track too. Set `min-width: 0` on every grid child, and look at the frames.
- **A white panel on a tinted sheet.** It read as flat. Paddle's depth comes from a dark rail and a phone mock overlapping the panel. Layer two surfaces.
- **Pale chapter labels.** Attio's inactive labels are very light, and ours measured 1.6:1 when copied. Use at least 3:1, since those labels are the navigation.
- **Pinning two things.** One thing holds, one thing moves.
- **Dimming that hides text without JavaScript.** Put every dim state behind a class that a script adds.
- **More than six steps.** The tour stops feeling like one idea. Cut steps, or use a list.
- **Hijacking the wheel.** Never convert scroll to a stepped animation. Let the page move at the reader's speed.

---

## Steps and process

Steps promise that something complicated is short. Their job is to lower the perceived cost of starting, so they should be few, concrete and honest about what happens. Three to five is the range. The cheap version is the commonest in the study: plain step cards are the lowest-scoring variant in this chapter at a mean of 3.22, with no gold sites.

What separates great from cheap: each step shows the actual thing the person will see, and the connection between steps is drawn or implied. Numbers should be small and exact. A 64px accent numeral in a pastel circle adds no information.

Measured and read from frames: numeral 11 to 16px in a mono or text face, or a 24 to 32px marker, or 56 to 300px when the numeral is the image. Titles 18 to 32px at 400 to 500. Vertical pitch `~`140 to 150px.

<!-- v:section.steps-process/steps-showing-the-real-thing -->
#### steps-showing-the-real-thing

*7 sites, quality 5.* Proof that it is as easy as claimed. Use whenever you can show each step's screen. This is the first thing to try for any product.

Recipe: three columns on wide tracks, a small marker, a title at 32px with tight tracking, 18/29 copy, then real UI at full size with no chrome around it: a picker, a form, a feed. Render uses a 32px solid accent square with a white numeral. Spline puts tiny live diagrams on 298 by 200px cards and the text below the card, not in it. Function Health is the case where three equal cards are right, because each holds different interface. Prisma tints the top of each card, and a ribbon runs across cards two and three as a continuity device.

Seen on Render, Spline, Function Health, Prisma, Daylight, OpenRouter, Browserbase. Suits light precision, gradient light, warm neutral, dark precision.

```html
<div class="steps">
  <article class="step">
    <div class="num">1</div>
    <h3>Add your menu</h3>
    <p>Paste it, photograph it or link your till. We sort it into sections and flag allergens.</p>
    <div class="ui"><!-- the actual screen, full size, no window frame --></div>
  </article>
</div>
```

```css
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 84px; }
.num { display: grid; place-items: center; width: 32px; height: 32px; margin-bottom: 20px; background: var(--accent); color: var(--bg); font: 500 16px/1 var(--font-text); }
.step h3 { font: 500 32px/1.12 var(--font-display); letter-spacing: -.024em; }
.step p { margin-top: 14px; color: var(--ink-2); font-size: 18px; line-height: 1.55; max-width: 21em; min-height: 3.1em; }   /* keeps the three UIs on one line */
.ui { margin-top: 32px; font-size: 15px; line-height: 1.3; }
@media (max-width: 980px) { .steps { grid-template-columns: 1fr; gap: 56px; } .step p { min-height: 0; } }
```

<!-- v:section.steps-process/vertical-numbered-rail -->
#### vertical-numbered-rail

*3 sites, quality 5.* Calm and reassuring. Use for three to six steps with a sentence or two each, especially for services, onboarding and health. Works without any art, which makes it the best choice for local businesses.

Recipe: a centred column of about 720px. 28px solid ink circles with 13px numerals, a 1px line between them, a 24px/400 title indented 56px, 17/27 body, about 150px pitch. A serif or display heading centred above. Livekit puts this in a 1280 by 580px panel: rings joined by a line that draws with scroll, the active step brightens and opens its detail, and isometric art sits on the right.

Seen on Tana, LiveKit, Anthropic Docs. Suits light precision, dark precision, warm neutral.

```html
<ol class="rail">
  <li><h3>Your dentist sends us the X-ray</h3><p>Any practice can refer through our form.</p></li>
  <li><h3>We ring you within two working days</h3><p>Sara books you in with the right specialist.</p></li>
</ol>
```

```css
.rail { list-style: none; margin: 0; padding: 0; counter-reset: s; }
.rail li { position: relative; counter-increment: s; padding: 0 0 56px 56px; }
.rail li:last-child { padding-bottom: 0; }
.rail li::before { content: counter(s); position: absolute; left: 0; top: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--ink); color: var(--bg); display: grid; place-items: center; font: 500 13px/1 var(--font-text); }
/* the line belongs to the item, so it always stops at the last dot */
.rail li:not(:last-child)::after { content: ""; position: absolute; left: 13.5px; top: 36px; bottom: 8px; width: 1px; background: var(--line); }
.rail h3 { font: 400 24px/28px var(--font-text); letter-spacing: -.012em; margin: 0; }
.rail p { margin: 10px 0 0; color: var(--ink-2); font-size: 17px; line-height: 27px; text-wrap: pretty; }
@media (max-width: 640px) { .rail li { padding-left: 44px; } }
```

<!-- v:section.steps-process/rail-across-columns -->
#### rail-across-columns

*6 sites, quality 4.* A timeline in one glance. Use for lifecycle stories with four or so stops, and for APIs and finance. Modern Treasury's rail is really a control: clicking a stop changes a request and response panel below, so it doubles as tabs.

Recipe: columns on a 1px line. 16 to 17px hollow dots, the current one solid or double ringed. An 11px mono index, a 16px/600 title, a 14px caption, all centred. The line runs dot to dot and does not overhang. Hawl fills a 6px rail with a gradient, and aligns its columns left, centre and right under the dots. Symbol Studio raises each tread to form a stair.

Seen on Modern Treasury, Stripe Atlas, Hawl, Symbol Studio, lemon.markets. Suits light precision, gradient light, dark precision.

```css
.rail { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 56px; }
/* 12.5% is half a column: the line runs through the first and last dot centres, and stops */
.rail::before { content: ""; position: absolute; left: 12.5%; right: 12.5%; top: 8px; height: 1px; background: var(--line); }
.stop { all: unset; position: relative; display: block; padding: 0 16px; text-align: center; cursor: pointer; }
.stop:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.dot { display: block; width: 17px; height: 17px; margin: 0 auto 14px; border-radius: 50%; position: relative; z-index: 1; background: var(--bg); box-shadow: inset 0 0 0 1px var(--ink-3); transition: box-shadow .2s; }
.stop[aria-selected="true"] .dot { background: var(--accent); box-shadow: inset 0 0 0 2px var(--accent), inset 0 0 0 5px var(--bg); }
.t { display: block; font: 600 16px/1.3 var(--font-text); color: var(--ink-2); }
.stop[aria-selected="true"] .t { color: var(--ink); }
@media (max-width: 820px) { .rail { grid-template-columns: 1fr 1fr; row-gap: 24px; } .rail::before { display: none; } }
```

Below the rail, use the panel from `tabs` with one request and one response column. Fill the request with enough fields to look like a real call: ours looked thin at five.

<!-- v:section.steps-process/numbered-rule-list -->
#### numbered-rule-list

*4 sites, quality 4.* A numbered list with confidence. Use beside a sticky heading when steps are short and numerous. Factory runs six rows on about 140px pitch: a 14px mono numeral, a 24px title, a 16px line, a small link with a long arrow. Are.na hangs grey numerals in the margin, so the alignment is the only ornament. Talkspace uses 56px serif numerals in 2px bordered rows.

Seen on Factory, Are.na, Talkspace, Nurx.

<!-- v:section.steps-process/ruled-method-columns -->
#### ruled-method-columns

*7 sites, quality 4.* A consultancy's method, stated plainly. Use for agency and B2B process. Three to five columns split or topped by 1px rules, about 28px of inner padding, a 12 to 13px label, a 20 to 24px step name, 16/25 copy. Magram sets one giant letter per column, spelling the method's name. Energen uses 64px outlined numerals. Definitiv turns the logo's slash into a progress meter that fills to 1/3, 2/3 and 3/3.

Seen on Magram, Energen, Definitiv, Mirim, Postman, The Warren.

<!-- v:section.steps-process/active-step-beside-media -->
#### active-step-beside-media

*5 sites, quality 4.* Stepper as interface. Use when a single phone or card can show each stage. Monzo sets a 56px numeral beside a 560px white card, with others collapsed and a coral media tile opposite. Jurafuchs and Ripple use a list beside one floating UI card.

Seen on Monzo, Jurafuchs, Ripple Health, 360Rides.

<!-- v:section.steps-process/drawn-path-or-diagram -->
#### drawn-path-or-diagram

*6 sites, quality 4.* The route becomes the picture. Use when your process has a shape, and you have an illustrator or a strong diagram. The Brand Identity School draws a sine path over illustrated hills that fills as you scroll, with mascots moving along it. Rewiring America seats five role cards on a thick ring. New Material runs light along an open outline. Hims stacks perspective slabs behind an athlete cutout. See `references/motion/scroll.md`, recipe 9.

Seen on New Material, Hims, Brand Identity School, Rewiring America, Cascara Cabinet.

<!-- v:section.steps-process/tilted-paper-cards -->
#### tilted-paper-cards

*2 sites, quality 4.* Human, personal, a little handmade. Use for freelancers, studios and small brands. Three cards about 330 to 390px wide, rotated by plus or minus 3 to 5 degrees, slightly overlapping, with a soft 40px shadow and hand-drawn arrows between them. Number and title at the top, copy pinned low.

Seen on Motusmade Studio and InkTree. It works once on a page and never beside another tilted element.

<!-- v:section.steps-process/code-walkthrough -->
#### code-walkthrough

*2 sites, quality 4.* For developers, the steps are the code. Tailwind pairs a bracketed mono number and 16/28 prose with a 545px code card, aligned at the top. TypeScript shows three 328px panes, where the layout itself explains compilation.

Seen on Tailwind Docs and TypeScript.

<!-- v:section.steps-process/numeral-as-image -->
#### numeral-as-image

*1 site, quality 4.* One step per viewport. Bitnomi sets a numeral of about 300px with a 1px gold stroke behind a 640px phone, with copy low and to the right. Use for a slow premium story of three steps.

<!-- v:section.steps-process/dated-agenda-rows -->
#### dated-agenda-rows

*3 sites, quality 3.* When the steps are days. Rows split by 1px rules: a 24px light date with a small chip, then a bare 16/24 list in a second column. Use for events, courses and launches.

Seen on Stripe Sessions, ADCC Awards, Good Design Week.

<!-- v:section.steps-process/stacking-step-cards -->
#### stacking-step-cards

*1 site, quality 3.* Steps as stacked sheets beside a sticky heading. Swirple uses lilac cards overlapping upward. Use the `stacked-sheets` code.

<!-- v:section.steps-process/plain-step-cards -->
#### plain-step-cards

*9 sites, quality 2.* Three or four equal cards with a number, a title and a line. This is the template. Use it only when the steps are trivial and the section is small, on a local business page. If you do, cut the card and use `vertical-numbered-rail`, which needs no art and looks considered.

Seen on Canopy, Custom Multicades, Dragon Spirit, Crescent Dental.

### Mistakes that cheapen steps

- **Numbers as decoration.** A huge pastel circle with a 1 in it says nothing. Keep markers small, or make one numeral the entire image.
- **A connecting line that overhangs.** It must start and stop at dot centres. Build it into the item, or inset it by half a column.
- **Sparse sample data.** A request with five fields looks fake. Real payloads are long.
- **Steps that describe the company rather than the reader.** Write what the reader does and gets: "Add your menu", not "Onboarding".
- **Unequal copy pushing the proof out of line.** Reserve the copy height at desktop, so the three UIs start on one line.
- **Six or more steps.** Long processes read as hard. Group them.

---

## Putting a page together

These are judgment calls from reading the frames, not measurements.

- **Do not repeat a variant on one page**, and do not put two surface-held sections side by side. Follow a dense ruled grid with an airy stage, and a stage with a text-only row.
- **Use one tour per page.** Tabs, sticky scroll and a timed section are three answers to one question. Pick one for the main story.
- **Carry one device through.** A tick, an index style, a mono label or a plate treatment seen in the grid should reappear in the steps. Stripe's tick and Linear's figure numbers make different sections read as one system.
- **Rails matter more than boxes.** When two sections share left and right edges, the page holds together without any cards at all.
- **On phones**, collapse columns to one, turn indexes into a sticky horizontal row, keep the stage and let copy pass under it, and let rails run off the edge. Check the phone frames by eye: the overflow check missed our clipped column.
- **Keep two sites apart.** Before you build, change at least one of: what holds the items, the marker, the plate treatment, the active-state device. Two pages with the same variant still look different if those four change.

