# Your direction (seed 1047)

Reads as **saas**, surface **app**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.dashboard-layout/kpi-tab-strip`
2. Data table: `app.data-table/feature-matrix`
3. Charts: `product.data-viz/node-state-diagram`
4. Controls: `app.form-control/parameter-grid-form`
5. Overlays: `app.modal-sheet/side-sheet`
6. Empty state: `app.empty-state/centered-icon-stack`
7. Numerals: `type.numerals/price-large-unit-small`
8. Surfaces: `surface.card/shell-and-well-card`
9. Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
10. Hover: `motion.hover-state/instant-snap`

## Type system

**Gruppo** with **Sorts Mill Goudy**. Mid-century airline glamour on a dark ground, answered by a warm Goudy text face set a size up.
- Display: 64px, phone 38px, weight 400, tracking 0.02em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Sorts Mill Goudy 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Gruppo&display=swap https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital@0;1&display=swap

## Palette

From Trasti Ubezpieczenia. Simply fair!: bg #ffffff, surface #f5f6f9, text #0c1638, muted #4b5368, accent #f20316. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion

Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Amplitude** (saas, gold) https://amplitude.com
- Doing: An analytics platform reframed as an AI product, led by real app states on a white page paced by hairlines, with no decorative gradients.
- Why it feels made: One geometric typeface at a few tight sizes, black pills and inset hairlines do all the structural work, while auto-advancing product tabs and a single-series chart carry the proof. The full-width footer wordmark gives a calm page one loud ending.
- If imitated badly: White-and-hairline pages go blank without high-fidelity product states, and the emoji chat widget here shows how fast a third-party bubble undercuts the restraint.

**Vercel AI SDK** (devtool, gold) https://sdk.vercel.ai
- Doing: An SDK page that lets code, install commands and copy buttons act as both the content and the decoration.
- Why it feels made: Every block is a usable tool, not an illustration of one, and a single 24px-gutter grid runs from logo to footer. Weight 450 with -6% tracking gives it an engineered voice.
- If imitated badly: Without real product substance this monochrome hairline formula becomes an empty wireframe that looks like every Geist clone.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: kpi-tab-strip (seen on Plausible Live Dashboard)

*Feeling: every number is a door.*

Make the KPIs the chart's tabs. Six cells sit inside the chart card, and the active one drives the plot below. This removes a separate metric picker and ties number to line. The active cell gets a 3% fill and the dividers beside it hide, a detail that keeps the row from looking chopped. Labels are 12/500 caps, values 18 to 20/600. Use real buttons with `aria-pressed`.

**Recipe.** KPIs as the chart's tab bar: 6 equal cells inside the card, 12/500 caps label, 18 to 20/600 value, 12px delta with arrow, 1px dividers, active cell 3% fill at radius 8. Clicking swaps the series below.

```css
.kpis{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding:8px}
.kpi{position:relative;display:block;text-align:left;background:none;border:0;padding:8px;border-radius:8px;color:var(--ink);font-family:var(--font-text)}
.kpi+.kpi::before{content:"";position:absolute;left:-1px;top:8px;bottom:8px;width:1px;background:var(--line)}
.kpi[aria-pressed=true]{background:var(--fill-hover)}
.kpi[aria-pressed=true]+.kpi::before{display:none}
.kpi span{display:block;font-size:12px;line-height:16px;font-weight:500;color:var(--ink-2);letter-spacing:.02em;text-transform:uppercase}
.kpi[aria-pressed=true] span{color:var(--ink)}
.kpi strong{font:600 18px/24px var(--font-text);font-variant-numeric:tabular-nums;margin-right:8px}
.kpi em{font-style:normal;font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}
@media(max-width:800px){.kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.kpi::before{display:none}}
```

### Data table: feature-matrix (seen on Claude Pricing, Warp Pricing, Attio Pricing)

*Feeling: a fair comparison, easy to trust.*

The pricing comparison table. Attio keeps 60 rows scannable with two row sizes: parents at 57 tall and children at 45, smaller, greyer and indented. Claude and Warp show that the marks matter most. A yes is a small filled disc, a no is a thin grey x, and the weight difference alone lets you scan a column without colour.

My first render used full-ink discs at 15px and 15px labels in full ink, and it looked heavier than Attio. The real table sets everything one ink step down, with discs in a slate at about 74% ink and a highlight column at only 2%, so the recommended plan glows rather than shouts. Also watch specificity: a `th{text-align:center}` on the table will centre your first column.

**Recipe.** Comparison table: first column 240 wide, parent rows 57 tall at 15px, child rows 45 tall at 13px, muted and indented 16px. Yes is a 14px filled disc with white tick, no a 10px thin x. Recommended column holds a 2% tint.

```css
.m{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed}
.m th,.m td{text-align:center;border-bottom:1px solid var(--line);padding:0 12px}
.m tbody{color:color-mix(in srgb,var(--ink) 82%,var(--bg))}
.m tbody th{font-weight:400;text-align:left}
.m .p th,.m .p td{height:57px;font-size:15px}.m .p th{color:var(--ink-2);font-weight:500}
.m .s th{height:45px;padding-left:28px;font-size:13px;color:var(--ink-2)}.m .s td{height:45px}
.m tbody td:nth-child(4){background:color-mix(in srgb,var(--ink) 2%,transparent)}
.yes{display:inline-grid;place-items:center;width:14px;height:14px;border-radius:50%;background:color-mix(in srgb,var(--ink) 74%,var(--bg));color:var(--bg)}
.no{color:var(--ink-3);width:11px;height:11px;display:inline-block}
```

### Charts: node-state-diagram (seen on Asana, Increase, Stripe)

*The system, drawn exactly as it behaves.* Quality 5/5, 6 sites.

**Use:** State machines, data models, integrations. **Not:** Vague marketing hubs with logos around a centre.

**Recipe:** Dot field 16px pitch. Nodes radius 12, 1px border, mono 15px real identifiers, 8px square status dots. 1px grey arrows with tiny heads. Use actual state names. Ghost unused nodes as outlines fading into the grid.

### Controls: parameter-grid-form (seen on Replicate model, Grafana explore)

*Feeling: a control surface for experts.*

Replicate's playground labels each field with its mono parameter name and type, shows the default underneath, and pairs sliders with number boxes. Grafana joins a tinted label cell to a 32px input in a two-up grid, which packs ten parameters into a small area. Use these only for technical tools, where the names are the vocabulary.

**Recipe.** Dense tool form: mono parameter name plus type tag, 12px default hint below, or a 12/600 label cell on a one-step fill joined to a 32px input, 4px radius, two-up grid. Sliders pair with a number box showing min and max.

```css
.pg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 8px}
.pf{display:grid;grid-template-columns:120px minmax(0,1fr);gap:4px}
.pf span{display:flex;align-items:center;height:32px;padding:0 8px;border-radius:4px;background:var(--fill-hover);font-size:12px;font-weight:600}
.pf input{height:32px;padding:0 8px;border:0;border-radius:4px;box-shadow:inset 0 0 0 1px var(--line-strong);font:13px var(--font-mono,ui-monospace,monospace);background:none;color:var(--ink);min-width:0}
```

### Overlays: side-sheet (seen on Fromourplace cart, primer dialog, shadcn sheet)

*Feeling: detail, with your place kept.*

A panel from the right. Use it to open a row without losing the list, for carts, or for filters. Our Place's cart is 422 wide with a 48px header, scrolling body, and a sticky bordered button in the footer. The scrim takes a warm tint from the page's ink rather than black. Primer's dialog offers a side sheet position and turns into a bottom sheet on narrow viewports. Geist advises keeping an always-visible close. Do not use it for a short confirmation, which is a dialog.

**Recipe.** Right panel 400 to 480 wide, full height, scrim 30 to 40%, 48px header with title and x, scrolling body, sticky footer action, slides in 240ms ease-out. Keeps list context. For record detail, carts and filters.

```css
.sheet{position:fixed;inset:0 0 0 auto;width:min(422px,100%);display:grid;grid-template-rows:auto 1fr auto;background:var(--bg);box-shadow:-24px 0 48px -24px rgba(0,0,0,.25)}
.sheet>header{display:flex;justify-content:space-between;align-items:center;height:48px;padding:0 24px;border-bottom:1px solid var(--line)}
.sheet .body{padding:32px 24px;overflow:auto}
.sheet>footer{padding:16px;border-top:1px solid var(--line)}
```

### Empty state: centered-icon-stack (seen on geist empty, primer blankslate, atlassian empty)

*Feeling: calm, helpful, unfussy.*

The default for product areas. Geist uses a 54px hairline tile holding a grey glyph, a 16px title, a muted line and one action, with a text link beneath. Primer uses a 32px glyph, a 20px title and a green primary. Use one action, and make it the primary only if it is the screen's main next step. With no fill and no illustration it fits any palette.

**Recipe.** Centred stack in a bordered 8 to 12 radius box, 48 to 64px padding: 54px hairline icon tile or 24 to 32px glyph, 16 to 20/500 title, 14px muted copy at 40ch, one action, optional link. No illustration, no fill.

```css
.box{display:grid;justify-items:center;align-content:center;text-align:center;min-height:348px;padding:48px 24px;border-radius:12px;box-shadow:inset 0 0 0 1px var(--line)}
.tile{width:54px;height:54px;display:grid;place-items:center;border-radius:10px;box-shadow:inset 0 0 0 1px var(--line);margin-bottom:24px;color:var(--ink-2)}
.box h3{font:500 16px/24px var(--font-display);margin-bottom:8px}
.box p{color:var(--ink-2);max-width:40ch;text-wrap:balance}
.acts{display:flex;gap:8px;margin-top:20px}
.lnk{display:inline-flex;gap:4px;align-items:center;margin-top:12px;color:var(--ink-2);text-decoration:none}
```

### Numerals: price-large-unit-small (seen on Raycast Pricing, Warp Pricing, Vercel Pricing)

The standard for good pricing. Seen on 6 sites.

**Use it for:** Any plan card.

**Avoid it for:** Metered pricing with several rates: use quiet-rate-stack.

**Recipe:** Price 36-64px in the display sans, weight 500-700, tracking -0.02 to -0.05em; unit 14-16px on the same baseline in grey or mono, 4-10px gap. The word Custom takes the same size so columns align. Reserve a fixed line above for billing notes so all prices sit level.

**Why it works:** The reserved note line is what most clones miss. A plan with no billing note jumps up by a line and the row of prices stops aligning.

```css
.price { font: 500 56px/1.1 var(--font-display); letter-spacing: -.03em; }
.price small { font: 400 14px/1 var(--font-mono); letter-spacing: 0; color: var(--ink-3); margin-left: 6px; }
.note { min-height: 20px; } /* reserved on every card, so prices stay level */
```

<a id="quiet-rate-stack"></a>

### Surfaces: shell-and-well-card (seen on Loops, Lindy, Material 3)

*Feeling: a tray holding the proof.*

Two nested layers. An outer card holds the claim, and an inset tinted well holds the evidence: seals, a tick list, a live component. Use it when a card needs to carry something more complex than text without a second border weight. Outer radius 16 to 24 with a hairline, well inset 8px at outer minus 8. Material's variant inverts the idea, with a stage on top in its own colour, its own bottom radius and the caption beneath. Loops repeats one shell for every feature and only swaps the body, which is the strongest version: the shell becomes the page's single system.

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Hover: instant-snap (seen on Notion About, Cognition, A24)

*Feeling: a switch being thrown.*

Zero transition, deliberately. A24 swaps fills in a hard cut, Cognition snaps a row link to electric blue, Acne Studios and Bun cut instantly. Reads as fast, printed and sure, and it is the cheapest language to build. Use it for type-led, editorial and brutalist sites. It needs a real value change: on a 3 percent tone step, no easing looks like a bug. Notion mixes the two, with an instant button and a 0.15s nav tint.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.