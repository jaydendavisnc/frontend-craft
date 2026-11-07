# Your direction (seed 1051)

Reads as **finance**, surface **app**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.dashboard-layout/status-page-column`
2. Data table: `app.data-table/two-line-entity-list`
3. Charts: `product.data-viz/node-state-diagram`
4. Controls: `app.form-control/joined-segments`
5. Overlays: `app.command-palette/cmdk-dialog`
6. Empty state: `app.empty-state/skeleton-loading`
7. Numerals: `type.numerals/ruled-ledger-stat`
8. Surfaces: `surface.card/grain-paper-tile`
9. Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
10. Hover: `motion.hover-state/dim-and-reveal-arrow`

## Type system

**Instrument Sans** with **Instrument Sans**. Close overlap with Untitled Sans; 500 and hard tracking give that compact developer-brand headline.
- Display: 56px, phone 36px, weight 500, tracking -0.026em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.55. UI: Instrument Sans 14px 500. Label: 500, sentence case
- Load: https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..500&display=swap

## Palette

From Baseten: bg #ffffff, surface #f1f5f0, text #000000, muted #707670, accent #1ae770. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Better Auth** (devtool, gold) https://www.better-auth.com
- Doing: The landing page behaves like a repository: a fixed title panel on the left and a scrolling README on the right.
- Why it feels made: One conceit decides everything: tabbed nav, numbered features, mono labels and table cells all follow the README idea. Colour appears only inside tiny product chips, so a greyscale page feels alive.
- If imitated badly: At 11-13px across dense cells this is only legible with perfect spacing; loosen the alignment and it becomes a cluttered spec sheet.

**Levels** (health, gold) https://levels.com
- Doing: A health product landing that mixes light and near-black bands with data-led UI cards in a restrained green-grey palette.
- Why it feels made: Tight Hoves display, consistent 10px-radius bordered cards, real product UI and pale green tints make the data feel credible and calm.
- If imitated badly: Black stat cards and green tints turn clinical and generic if spacing and hairlines are loosened.

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

### Data table: two-line-entity-list (seen on OpenRouter models, HF models, shadcn item)

*Feeling: a feed you can work through.*

When items are titles with metadata rather than cells, drop the columns. GitHub's issue list, OpenRouter's model list and Hugging Face's hub all do this. Title at 15 to 16/500 with labels inline, a 12px meta line, trailing counts aligned right. Either rules inside one bordered box, or separate hairline cards. OpenRouter's cards are about 143 tall with 8px gaps at real size, and offer a list and table toggle for people who do want columns.

**Recipe.** List rows instead of columns: 16 to 40px leading icon or thumbnail, 15 to 16/500 title with inline 12px pills, 12px muted meta line, trailing counts. 64 to 96px tall, rules inside one 6 to 8px box, or separate hairline cards 8 to 20px apart.

```css
.list{border-radius:8px;box-shadow:inset 0 0 0 1px var(--line)}
.r{display:grid;grid-template-columns:16px minmax(0,1fr) auto;gap:12px;padding:12px 16px;border-top:1px solid var(--line)}
.r:first-child{border:0}.r:hover{background:var(--fill-hover)}
.r b{font-weight:500;font-size:15px;line-height:22px}
.r p{font-size:12px;line-height:18px;color:var(--ink-2)}
.m{display:flex;gap:16px;color:var(--ink-2);font-size:12px}
```

### Charts: node-state-diagram (seen on Asana, Increase, Stripe)

*The system, drawn exactly as it behaves.* Quality 5/5, 6 sites.

**Use:** State machines, data models, integrations. **Not:** Vague marketing hubs with logos around a centre.

**Recipe:** Dot field 16px pitch. Nodes radius 12, 1px border, mono 15px real identifiers, 8px square status dots. 1px grey arrows with tiny heads. Use actual state names. Ghost unused nodes as outlines fading into the grid.

### Controls: joined-segments (seen on Anthropic News, shadcn button group, shadcn toggle)

*Feeling: a set of keys on one bar.*

Attached items with square inner corners. Use it for filters, split buttons and icon toolbars, where items belong to one action group. Anthropic's news filter fills the active segment with solid ink, and inactive ones with a warm grey. A gap of 1px in the page colour acts as the divider.

**Recipe.** Attached items sharing one seam: 32 to 36 tall, 8 to 10px outer radius, square inner corners, 1px divider, active solid ink or 7% fill. Covers filter bars, split buttons and toolbars. Fit 2 to 5 items; icons 16px in 32px squares.

```css
.join{display:inline-flex}
.join button{height:36px;padding:0 16px;border:0;margin-left:1px;background:var(--fill-active);font:500 14px var(--font-text);color:var(--ink-2)}
.join button:first-child{border-radius:10px 0 0 10px;margin:0}
.join button:last-child{border-radius:0 10px 10px 0}
.join button[aria-checked=true]{background:var(--ink);color:var(--bg)}
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

### Empty state: skeleton-loading (seen on OpenRouter models, Geist skeleton, shadcn skeleton)

*Feeling: the page is already here.*

Skeletons promise a layout. So they must match it: keep real table headers, use the real row height, vary the widths like real text. Flat 7% ink blocks with a slow pulse are enough. Do not use a moving shimmer gradient, which draws the eye and looks busy. Show skeletons only after about 300ms, or fast loads flash.

**Recipe.** Placeholders that match the final layout cell for cell: flat 7% ink blocks, 6px radius, widths varied 40 to 80%, real headers kept, pulse to 50% over 1.6s, none under reduced motion. Layout must not shift when data lands.

```css
.sk{display:block;border-radius:6px;background:var(--fill-active)}
@media(prefers-reduced-motion:no-preference){.sk{animation:p 1.6s ease-in-out infinite}@keyframes p{50%{opacity:.5}}}
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

### Surfaces: grain-paper-tile (seen on Comet, ElevenLabs Pricing, Otter)

*Feeling: a physical sample of something.*

A warm off-white tile with fine noise, which reads as paper rather than as a div. Use it for pricing, feature tiles and warm AI brands. Avoid it on dense layouts, where noise turns to dirt.

Set a name top-left, a price or prompt bottom-left, and leave the middle empty. Two different grains are in play. Paper is a soft, low-contrast mottle you almost cannot see. A colour mesh takes a coarse, high-contrast monochrome speckle, and that speckle is what stops it reading as a stock gradient. One tile in the row may swap paper for mesh to mark the pick.

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

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Hover: dim-and-reveal-arrow (seen on Stripe Blog, Roy Jad, Stripe Atlas)

*Feeling: a chevron grows into an arrow.*

Stripe's signature. The label dims to 0.6 and a hidden stem fades in behind the chevron, which nudges forward, so the chevron extends into an arrow. It takes 0.15s on `.215,.61,.355,1`. The fill does not change. Use it for text links and small CTAs. It needs an inline SVG with two separate paths.

```html
<a class="go">View all posts
  <svg viewBox="0 0 12 12"><path class="stem" d="M2 6h8"/><path class="chev" d="M5.5 2 9.5 6l-4 4"/></svg></a>
```
```css
.go{transition:opacity .15s cubic-bezier(.215,.61,.355,1)}
.go svg{width:12px;height:12px;overflow:visible;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.go .stem{opacity:0;transition:opacity .15s}.go .chev{transition:transform .15s}
.go:hover{opacity:.6}.go:hover .stem{opacity:1}.go:hover .chev{transform:translateX(3px)}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.