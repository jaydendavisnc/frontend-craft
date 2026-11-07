# Your direction (seed 1050)

Reads as **finance**, surface **app**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.dashboard-layout/status-page-column`
2. Data table: `app.data-table/ledger-rows`
3. Charts: `product.data-viz/unit-block-diagram`
4. Controls: `app.form-control/usage-estimator`
5. Overlays: `app.command-palette/inline-command-list`
6. Empty state: `app.empty-state/semantic-callout`
7. Numerals: `type.numerals/ruled-ledger-stat`
8. Surfaces: `surface.card/photo-overlay-tile`
9. Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
10. Hover: `motion.hover-state/ring-grow`

## Type system

**Host Grotesk** with **Host Grotesk**. A contemporary grotesque with more air than Inter; 500 at display looks expensive because it stays light.
- Display: 64px, phone 38px, weight 500, tracking -0.035em, leading 1.0. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Host Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap

## Palette

From Block: bg #fbfbfb, surface #fafafa, text #000000, muted #727272, accent #000000. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Vercel AI SDK** (devtool, gold) https://sdk.vercel.ai
- Doing: An SDK page that lets code, install commands and copy buttons act as both the content and the decoration.
- Why it feels made: Every block is a usable tool, not an illustration of one, and a single 24px-gutter grid runs from logo to footer. Weight 450 with -6% tracking gives it an engineered voice.
- If imitated badly: Without real product substance this monochrome hairline formula becomes an empty wireframe that looks like every Geist clone.

**Cal.com Pricing** (saas, gold) https://cal.com/pricing
- Doing: A pricing page that behaves like a product surface: one heavy geometric voice, a charcoal-on-white system, and a single inverted card.
- Why it feels made: Radii, button heights and text sizes sit on a tight scale, and the only spectacle is saved for the halftone footer wordmark. Small affordances such as dotted tooltip underlines and per-card switches show real product thinking.
- If imitated badly: Heavy tight display type needs a well-drawn face; set in a generic bold grotesk the page collapses into a default shadcn pricing template.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: status-page-column (seen on OpenAI Status, Vercel Status, GitHub Status)

*Feeling: calm under pressure.*

A narrow column with no navigation, because people arrive here anxious and need one sentence first. OpenAI's is the reference: logo and subscribe, a mint banner with a 1px green border, then one bordered panel of services with 90-day strips. Vercel's uses a solid banner and blue bars. Keep it static and light, since it must load when everything else is on fire.

The banner's tint must stay chromatic. Tint the raw status hue, not a darkened one, or it turns grey. State the words first and let the colour confirm them.

**Recipe.** Single 640 to 720 column: logo and subscribe, tinted banner with a 1px status border stating the state, one bordered panel of services with 90-day strips, then incident history. No nav, no sidebar. Readable during an outage.

```css
.col{max-width:702px;margin:0 auto;padding:32px 16px 64px}
.banner{border:1px solid var(--ok);border-radius:8px;overflow:hidden;margin-bottom:24px}
.banner h2{display:flex;align-items:center;gap:8px;padding:16px;font:500 16px/24px var(--font-text);background:color-mix(in oklab,var(--ok) 16%,var(--bg))}
.banner p{padding:16px}
.panel{border:1px solid var(--line);border-radius:8px}
.svc{padding:14px 16px 16px;border-top:1px solid var(--line)}
```

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

### Charts: unit-block-diagram (seen on Cloudflare Workers, ClickHouse, Paradigm)

*The idea, counted in blocks.* Quality 5/5, 3 sites.

**Use:** Architecture arguments: density, columnar, isolation. **Not:** Numbers that need a precise value.

**Recipe:** Two 544px outlined panels of small rounded cells. One lights scattered rows, the other whole columns. Or dashed tiles with accent-tint fills and accent mono captions. No numbers: the arrangement argues.

### Controls: usage-estimator (seen on ElevenLabs Pricing, Supabase Pricing, Neon Pricing)

*Feeling: the price, worked out with you.*

ElevenLabs replaces a thin slider with a 36px block that fills solid ink up to a thin grab bar, with the value beside the fill. Supabase's estimator uses numbered steps and rows with boxed mono tags and right-aligned totals. Use these on usage-priced products. Update the price live, and keep the total in view.

**Recipe.** Cost calculator: numbered steps, 36px tall radius 8 block slider filled solid ink to a thin grab bar with the value beside it, or a select that changes the price in place, estimate rail at right with boxed mono tags and right-aligned totals.

```css
.block{position:relative;height:36px;border-radius:8px;background:var(--fill-hover);overflow:hidden}
.block i{position:absolute;inset:0 auto 0 0;width:var(--v);background:var(--ink)}
.block i::after{content:"";position:absolute;right:4px;top:10px;bottom:10px;width:2px;background:var(--bg);opacity:.6}
.block span{position:absolute;left:calc(var(--v) + 12px);top:8px;font-variant-numeric:tabular-nums}
```

### Overlays: inline-command-list (seen on shadcn command, primer select panel)

*Feeling: a small search inside a surface.*

The same list embedded in a page or popover. shadcn renders it in a 260 wide hairline card with a grey search field inset 8px. Primer's select panel uses this for choosing from long lists. Use it for pickers such as assignee, label or project. Use the dialog for global commands, and this for choosing from one list.

**Recipe.** Same list embedded: 260 to 400 wide in a hairline 12px card, 32px grey search field inset 8px, 12px group labels, 32px rows with active fill, shortcuts right. For pickers and blank pages.

### Empty state: semantic-callout (seen on geist note, Replicate model, shadcn alert)

*Feeling: a note in the margin.*

An inline message inside the page. Geist's note uses a pale tint with dark same-hue text, never a saturated fill, and an outline form for neutral notes. shadcn's destructive alert colours the text only and leaves the border neutral. Use it for warnings, plan limits and gated actions. Reserve a full-width banner for things that affect the whole app.

**Recipe.** Inline note: 36px minimum, 6 to 8px radius, 16px icon, 14px text in dark same-hue ink on an 8 to 14% tint, never saturated; optional 14/600 title and trailing 28px action. Hairline version for neutral info.

```css
.note{display:flex;align-items:center;gap:8px;min-height:36px;padding:8px 12px;border-radius:8px;background:color-mix(in oklab,var(--warn) 14%,var(--bg));color:color-mix(in oklab,var(--warn) 45%,var(--ink))}
.note.i{background:none;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink-2)}
```

### Numerals: ruled-ledger-stat (seen on Jasper, Modern Treasury, Paddle)

Entries in a ledger. Seen on 3 sites.

**Use it for:** Finance, B2B proof and case studies.

**Avoid it for:** Playful brands.

**Recipe:** Stats as ledger rows: numeral 48-64px at left, 14px mono caps caption on the same baseline at right or below, 1px rule between rows. Serif numerals feel especially right. Reads as entries, not hero numbers.

```css
.row { display: flex; justify-content: space-between; align-items: baseline; padding: 16px 0; border-top: 1px solid var(--line); }
.val { font: 400 48px/1 var(--font-display); letter-spacing: -.02em; }
.cap { font: 400 14px/1 var(--font-mono); letter-spacing: .05em; text-transform: uppercase; color: var(--ink-2); }
```

<a id="mono-metric-cells"></a>

### Surfaces: photo-overlay-tile (seen on Stone Island, reMarkable, Dalco)

*Feeling: a magazine feature.*

A full-bleed photo with text on it. Radius 0 to 12, gaps 12 to 24. Put scrim only where the text sits: a bottom gradient to 50 or 60 percent black, or a side wash. The best version takes its scrim from the image, as DJI does by fading each photo's sky upward into a flat field drawn from that sky, so the text gets a clean ground that looks native. Use it for commerce, culture and anything with real photography. Never lay a uniform dark overlay across a whole photo, since that flattens the picture to protect three words.

### Surface ladder: page-tint-drift (seen on Fabrica Partners, Claude Pricing)

*Feeling: the whole page changes weather as you read.*

**Use it for:** Editorial finance and brand sites with few, clear sections. **Avoid:** Dense tools. A moving ground under UI is a distraction.

Body background cross-fades between near-whites, such as warm grey, peach and pale blue, about .9s ease, as sections enter. Differences of 2 to 3 L* only. Nav tints with the page. No gradients on elements.

Fabrica cross-fades the whole page between warm grey, peach and pale blue over about .9s, with no gradients on any element. Claude Pricing moves its neutrals per section and lets the nav tint with them.

### Hover: ring-grow (seen on Claude, Anthropic News, Speakeasy)

*Feeling: tactile, unhurried.*

The button does not move. Its ring grows. Claude takes `0 0 0 1px` to 2px in 0.1s, and steps its label to full ink. Slack thickens an inset ring from 1px to 2px over 0.42s. Anthropic's news page steps the fill one tone and adds a 1px ring in that same tone. Use it for warm, editorial product sites. `box-shadow` takes no space, so nothing around it shifts, which a real border cannot do. For any pill colour, an inset `0 0 0 999px` shadow at 10 percent black works as a universal darken.

```css
.ring{color:var(--ink-2);box-shadow:0 0 0 1px var(--line);transition:box-shadow .1s ease-in-out,color .1s ease-in-out}
.ring:hover{color:var(--ink);box-shadow:0 0 0 2px var(--line)}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.