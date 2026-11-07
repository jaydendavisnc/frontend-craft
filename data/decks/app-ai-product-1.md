# Your direction (seed 1053)

Reads as **ai**, surface **app**, register **dark-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.dashboard-layout/query-split-panes`
2. Data table: `app.data-table/ledger-rows`
3. Charts: `product.data-viz/single-claim-line`
4. Controls: `app.form-control/raised-segmented-track`
5. Overlays: `app.command-palette/cmdk-dialog`
6. Empty state: `app.empty-state/inline-placeholder`
7. Numerals: `type.numerals/price-large-unit-small`
8. Surfaces: `surface.card/tonal-card`
9. Surface ladder: `atmosphere.dark-surface-ladder/warm-charcoal-ladder`
10. Hover: `motion.hover-state/opacity-dim`

## Type system

**Zalando Sans Expanded** with **Zalando Sans**. Regular weight at large size looks like a fashion label, and the standard width below shares its drawing.
- Display: 64px, phone 38px, weight 400, tracking -0.025em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Zalando Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap

## Palette

From Central: bg #121212, surface #1d1c1a, text #e8dfcf, muted #8d8780, accent #e50000. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **dry**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Polar** (saas, gold) https://polar.sh
- Doing: A billing product presented as a strict monochrome ledger: two-tone type, hairline rules and black product windows on grainy sand plates.
- Why it feels made: Colour is removed entirely, so spacing, a four-step neutral ladder and a single nested-window component carry every section. The one photographic texture is reused rather than varied, which reads as system, not decoration.
- If imitated badly: Remove the sand plate and real tabular content and it becomes another empty black page with grey text.

**LiveKit** (devtool, gold) https://livekit.io
- Doing: Realtime voice infrastructure drawn as a technical blueprint: thin type, wire diagrams and one electric cyan on near-black.
- Why it feels made: Radii stop at 8px, depth comes from two blacks and 1px hairlines, and the diagrams explain the product through scroll. Cyan is confined to one flat button and glowing keywords.
- If imitated badly: Glowing words become cheap neon if the weight rises or they appear in more than a few places per heading.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: query-split-panes (seen on Grafana explore, Replicate model)

*Feeling: ask, then see.*

Input and result as two stacked panes in one rounded panel, with a small sub-nav. Grafana Explore stacks query over graph. Replicate puts input left and output right, with Preview and JSON tabs and a Form, JSON, code tab strip on the input side. Use it for any tool where a person configures something and looks at the result. Keep the run control in one fixed place, and the result in view while editing.

**Recipe.** Query above and result below, or input left and output right, inside a 12px-radius panel: 150px sub-nav, ghost toolbar for split, add, time range and refresh, stacked panes with their own titles. Preview and JSON tabs on output. Stack on phone.

### Data table: ledger-rows (seen on Cursor Blog, Anthropic News, MetaLab Work)

*Feeling: a well-set index, editorial and exact.*

A list that uses table discipline without looking like software. Anthropic's news archive and Cursor's blog keep every row on a shared column grid, with 1px rules and no box. Use it for archives, changelogs, press and any list where people browse rather than operate. Cursor sets it at 53px and 16px inside a warm panel; analysts read 36 and 13, so trust the larger figures.

Two details make it. Long text fades on a mask rather than ending in an ellipsis, and the hover band outdents 16px beyond the rules, so the row seems to lift out of the grid. I matched the real frame almost pixel for pixel using only these two moves.

**Recipe.** Editorial list on a shared column grid: 53px rows, 1px rules, 11px mono caps headers or none, 13 to 14px cells, bold title, long text fading on a 40px mask rather than an ellipsis. Hover draws an 8px-radius band outdented 16px past the rules.

```css
.led{--cols:minmax(0,2.3fr) minmax(0,2fr) minmax(0,1.6fr) 120px 40px;display:grid}
.row{position:relative;display:grid;grid-template-columns:var(--cols);gap:24px;align-items:center;height:53px;color:inherit;text-decoration:none;border-bottom:1px solid var(--line)}
.row.head{height:48px;font:500 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}
.row:not(.head)::before{content:"";position:absolute;inset:-1px -16px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);background:var(--fill-hover);opacity:0;transition:opacity .15s}
.row:not(.head):hover::before{opacity:1}
.row>*{position:relative;min-width:0}
.clip{white-space:nowrap;overflow:hidden;mask-image:linear-gradient(90deg,#000 calc(100% - 40px),transparent)}
@media(max-width:760px){.led{--cols:1fr 96px}.row>:nth-child(2),.row>:nth-child(3),.row>:nth-child(5){display:none}}
```

### Charts: single-claim-line (seen on Amplitude, Loops, Inngest)

*One claim, one line.* Quality 5/5, 4 sites.

**Use:** A proof point with one strong trend. **Not:** A flat trend.

**Recipe:** One line 1.5-2px, optional fill fading to near-white, four ring markers or a live end dot, hairline grid, 12px axis labels, caption half accent, half ink. Width up to 1130px. Or a word set large over the line. Noom sets a teal fill under a falling curve with a 64px figure top right. Loops overlaps a 44px word with a 2px line. Inngest stops the line partway across as if still drawing.

### Controls: raised-segmented-track (seen on Attio Pricing, Claude Pricing, Exa)

*Feeling: a physical switch, satisfying and clear.*

The most used control in the set, with 16 analyst rows. A tinted track, a white chip that sits proud. Use it to switch a view or a billing period among two to five options. The chip gets a hairline and a 1px shadow on neutral tracks. Claude's soft tray drops the edge entirely on a warm track, at 48 tall with 14px radius and a 4px inset.

Size every segment to the longest label, so that the chip does not change width as it moves. Slide the chip between positions at 150 to 200ms. Exa carries a 10px mono hint under each label, and pricing pages put the saving in the label, both of which remove a line of explanation. Use `role=radiogroup`.

**Recipe.** Track 32 to 48 tall, 6 to 14px radius, 4 to 7% ink fill, 3 to 4px inset; active chip in surface colour with hairline and 1px shadow, inactive second ink, no dividers. Equal widths to the longest label. Labels may carry a small saving chip.

```css
.seg{display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;padding:4px;border-radius:12px;background:var(--fill-active)}
.seg button{height:32px;padding:0 16px;border:0;border-radius:8px;background:none;font:500 14px var(--font-text);color:var(--ink-2);transition:color .15s}
.seg button[aria-checked=true]{background:var(--bg);color:var(--ink);box-shadow:0 0 0 1px var(--line),0 1px 2px rgba(0,0,0,.06)}
.seg.tray{border-radius:14px;background:color-mix(in srgb,var(--ink) 5%,var(--bg))}
.seg.tray button{height:40px;font-size:13px;border-radius:10px}
.seg.tray button[aria-checked=true]{box-shadow:none}
```

### Overlays: cmdk-dialog (seen on geist menu, geist cmd, shadcn command)

*Feeling: everything is one keystroke away.*

Centre it at about 18vh, not the true middle, so that the list has room to grow downward and the input does not move as results change. Fix the width at 640. Rows are 40 tall, with the highlight moved by arrow keys and hover alike. Name commands with verbs and records with nouns. The footer shows the result count and what Enter will do, which removes fear. Items are verbs in Title Case or sentence case, placeholders name the scope.

Wrap each label in a single span. My first build put text and `<mark>` straight into a flex row with a gap, and every highlighted word split apart.

**Recipe.** Modal 640 wide at 18vh, 12px radius, hairline plus deep shadow, light scrim. Input 52 tall with 16px text, 12px group labels, 40px rows with 16px icon and right keycaps, 8px radius active fill, footer with result count and Enter action.

```css
.scrim{position:fixed;inset:0;background:color-mix(in srgb,var(--ink) 24%,transparent)}
.pal{position:fixed;left:50%;top:18vh;translate:-50% 0;width:min(640px,calc(100vw - 32px));max-height:60vh;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:var(--bg);border-radius:12px;overflow:hidden;box-shadow:0 0 0 1px var(--line),0 2px 4px rgba(0,0,0,.04),0 24px 64px -16px rgba(0,0,0,.28)}
.q{display:flex;align-items:center;gap:10px;height:52px;padding:0 16px;border-bottom:1px solid var(--line)}
.q input{flex:1;min-width:0;border:0;outline:0;background:none;font:400 16px var(--font-text);color:var(--ink)}
.list{overflow:auto;padding:8px;scrollbar-width:none}
.g{font:500 12px/16px var(--font-text);color:var(--ink-2);padding:8px 8px 4px}
.o{display:flex;align-items:center;gap:10px;height:40px;padding:0 8px;border-radius:8px}
.o .k{margin-left:auto;display:flex;gap:3px}
.o[aria-selected=true]{background:var(--fill-active)}
.o mark{background:none;color:inherit;font-weight:600}
.foot{display:flex;align-items:center;gap:16px;height:40px;padding:0 16px;border-top:1px solid var(--line);font-size:12px;color:var(--ink-2)}
```

```html
<div class=o role=option aria-selected=true><svg/><span>Create <mark>inv</mark>oice</span><span class=k><kbd>⌘</kbd><kbd>N</kbd></span></div>
```

### Empty state: inline-placeholder (seen on atlassian dynamic table, Perplexity, carbon empty states)

*Feeling: nothing to see, and that is fine.*

Small containers get small messages. Perplexity's rail shows a half-alpha line under each group. A filtered table keeps its header row, so people see that the structure still exists, and offers a clear-filters link in the sentence. Never drop a full illustration into a table.

**Recipe.** Keep the structure and fill one line: a table keeps its header and shows a centred 14/500 title with one 14px line and text link; rail groups show a half-alpha empty line. No icon, no card.

```css
.none{padding:56px 16px;text-align:center}
.none b{font-weight:500;display:block}
.none p{margin:4px auto 0;color:var(--ink-2)}
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

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: warm-charcoal-ladder (seen on Lithic, Anthropic News, Anime.js)

*Feeling: calm and bookish. Dark with the warmth of paper left in it.*

**Use it for:** Warm-neutral light pages that need a dark band or footer that belongs to them. **Avoid:** Pages with a cool accent. Warm dark under blue reads as a mistake.

Warm dark steps sharing a faint yellow-brown cast: ground #141413, band #1f1e1d, raised #262624, borders #3d3d3a. Text #faf9f5, #b0aea5, #87867f. Steps of 5 L*. Cards may sit on #000 instead, as warm charcoal on black.

Anthropic steps 11 levels between its band and footer, enough for a soft visible edge, and inverts tiles to #141413 on #1f1e1d. Lithic sets warm charcoal cards on a pure black panel instead, which suits a page with one warm metal accent.

### Hover: opacity-dim (seen on Polar, AuthKit, Levels)

*Feeling: the control recedes.*

The control gets quieter. Polar drops its white CTA to 0.85 in 0.1s, Nuxt takes green to 75 percent alpha, and AuthKit takes rows to 0.7. One rule works on any colour, so it suits a page with many brand fills. It reads as restraint on dark and weakly on light. Avoid a low-contrast ground, because a dimmed button can drop below readable contrast.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.