# Your direction (seed 1057)

Reads as **saas**, surface **pricing**, register **gradient-light** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this pricing surface

1. Navigation: `nav.top-bar/transparent-to-solid`
2. Pricing table: `section.pricing-table/price-list-rows`
3. Comparison: `section.comparison-table/before-after-pair`
4. FAQ: `section.faq/tile-row-stack`
5. Numerals: `type.numerals/live-counter`
6. Headline: `type.display-headline/same-size-two-voices`
7. Primary button: `button.primary/neutral-pill`
8. Surface ladder: `atmosphere.light-surface-ladder/warm-tone-only-ladder`
9. Closing section: `section.cta-band/tone-panel-close`
10. Footer: `section.footer/masked-wordmark`
11. Hover: `motion.hover-state/instant-snap`

Build every section with real content. Top pricing pages run about 6,200 to 10,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Momo Trust Display** with **Literata**. A heavy grotesque with soft joins has volume without aggression; a reading serif gives it brains.
- Display: 64px, phone 38px, weight 400, tracking -0.02em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Literata 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Momo+Trust+Display:wght@400&display=swap https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap

## Palette

From CleanShot X: bg #FFFFFF, surface #F3F3F6, text #161618, muted #6A6A6B, accent #0D44E8. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion

Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**mymind** (saas, gold) https://www.mymind.com
- Doing: Sells a calm private memory tool through oversized bookish serif type, a soft sunset glow and interface props that behave like physical objects.
- Why it feels made: Each demo is art-directed with specific human content rather than lorem or fake dashboards, and the tag pill recurs from sentence to nav to AI labels. Colour stays in soft fields and one orange, so the page feels warm instead of busy.
- If imitated badly: Blurred rainbow glows plus a big serif turn into generic wellness-app styling without the art direction and object-quality demos.

**Stripe Sessions** (brand, gold) https://stripe.com/sessions
- Doing: A conference page holds one extraordinary colour ribbon against an almost silent system of ultralight type, plum ink and hairlines.
- Why it feels made: Sub-1.0 leading on an ultralight grotesk, a strict one-third offset grid and plum in place of black. All colour is rationed to the ribbon, with only trace echoes in hover hairlines and day flags.
- If imitated badly: Tight ultralight type fails on lesser fonts, and the page collapses without a render of this quality at its centre.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: transparent-to-solid (seen on Function Health, CleanShot X, Greylock)

*Feeling: it steps aside for the hero, then gets to work.*

The bar starts clear over hero media and becomes solid once you scroll past. It protects a full-bleed photograph or film while keeping navigation available. Use it with a true image hero. Without one, it is a transition for nothing. Function Health shows the richest version: an inset glass bar over the hero that resolves into a full-width cream bar with terracotta type.

Set 64 to 96px, shrinking to 64 to 72px. CleanShot goes from 96 to 72. Past about 40px of scroll, change background and colour over 200 to 300ms, and add the rule or soft shadow only in the solid state. Swap logo and CTA colour in step, and test the moment halfway through, where white links can pass over a pale fill.

### Pricing table: price-list-rows (seen on Stripe Atlas, Guggenheim Visit, Are.na)

*Feeling: a printed list at the door.*

Prices as rows of text in the column. Are.na's three rows hold a chevron, a small glyph, a bold plan and a caption at left and a price at right, closed by a row that links to details, and it looks more confident than any card. Guggenheim and SFMOMA list admission as label and price with no rules or light ones. Stripe Atlas adds a tinted fee cell with a 1px accent left rule. Use it for museums, services, small products and fee schedules.

### Comparison: before-after-pair (seen on Soundsensing, Prisma, Magram)

*Feeling: the old way, crossed out.*

Two columns with no grid. Soundsensing strikes through every "before" line at half white on a blurred photo, with the "after" lines at full white. Magram uses the same device as a qualifier: a white panel of who the service is for, and a tan panel of who it is not for, every line struck through. Prisma puts a muted card beside one with a gradient keyline. Strikethrough does what a whole table would do, so keep the lines short.

### FAQ: tile-row-stack (seen on Soundsensing, Cal.com, Comet)

*Feeling: soft, tappable.*

Each row is a tone tile, and rules vanish. Tiles suit soft product pages and phones, since the whole row is visibly a button. Cal.com runs radius 22, 76px rows, 20px/700 questions and a 36px white disc with a chevron, and lets long questions break into two balanced lines. Its last row asks anything else, with an arrow, and turns the FAQ into a way in. Soundsensing uses 68px rows at radius 8 and a 10px gap. Comet floats page-coloured rows with a soft shadow over faint orbit lines. Hold the gap under the row's padding so the stack reads as one object.

```css
.split2{width:min(1260px,calc(100% - 48px));margin-inline:auto;padding-block:112px;display:grid;grid-template-columns:minmax(0,1fr) 678px;gap:64px;align-items:start}
.split2 h2{font:800 52px/1.05 var(--font-display);letter-spacing:-.03em;max-width:9em}
.stack{display:grid;gap:8px}
.stack details,.ask{background:var(--surface);border:0;border-radius:22px;transition:background .15s}
.stack details:hover,.ask:hover{background:color-mix(in srgb,var(--ink) 7%,var(--bg))}
.stack summary,.ask{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px;padding:16px 20px 16px 24px;font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.01em}
.d{flex:none;width:36px;height:36px;border-radius:50%;background:var(--bg);display:grid;place-items:center;transition:transform .2s}
.d svg{width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.8}
.stack details[open] .d{transform:rotate(180deg)}
.ask{color:var(--ink-2);font-weight:600}
.ask .i{display:flex;align-items:center;gap:12px}
.ask svg.s{width:20px;height:20px;fill:none;stroke:var(--ink-2);stroke-width:1.5}
.stack .a{padding:0 76px 24px 24px;font-size:16px;line-height:1.55;color:var(--ink-2)}
@media(max-width:1020px){.split2{grid-template-columns:1fr;gap:32px;padding-block:72px}.split2 h2{font-size:40px}.stack summary,.ask{font-size:17px;padding-left:20px}.stack .a{padding:0 20px 20px}}
```

### Numerals: live-counter (seen on X8 Eyewear, Copilot, Monet 100)

Time passing on the page. Seen on 4 sites.

**Use it for:** Load percentages, scroll progress and live statistics.

**Avoid it for:** Numbers that count up from zero for no reason.

**Recipe:** Digits roll vertically in a mask of one line height, stopping one by one, tabular-nums, at 14-140px. Trigger on entry, or tie to scroll or load. Render the real final value in the HTML so it survives no script and reduced motion.

<a id="folio-numerals"></a>

### Headline: same-size-two-voices (seen on Polar, Increase, Kinfolk)

Precise and self-assured. Hierarchy with almost nothing. Seen on 16 sites.

**Use it for:** The best small-difference move in the corpus. Use for precise SaaS, finance and any headline that needs to name a thing and then claim something.

**Avoid it for:** When both halves are long. The grey half must still read, so never drop below about 45% ink on the ground it sits on.

**Recipe:** One size, 32-64px, weight 400-600, line-height 1.0-1.25, tracking 0 to -0.03em. Two clauses split by tone: first at full ink, second at 45-60% ink, on a second line or running on. Alternatives: drop weight two steps, or change case. This block replaces the subhead.

**Why it works:** The heading and sub become one object, so the top of the page has one thing to read rather than two. It also deletes a layout decision: there is no gap to judge and no size step to choose.

```css
h1      { font: 600 56px/1.05 var(--font-display); letter-spacing: -.02em; max-width: 860px; text-wrap: pretty; }
h1 span { font-weight: 300; color: var(--ink-3); }
```

<a id="flat-accent-phrase"></a>

### Primary button: neutral-pill (seen on Linear, Polar, Affirm)

*Feeling: calm, expensive, one thing to press.*

A full pill in the strongest neutral the page allows, often the only filled object in the viewport. Linear uses #e5e5e6 rather than white on #08090a, then steps to pure white on hover, so the button has somewhere to go. Polar, Affirm and Revolut do the same on their dark sections, and the value flips with the ground while the shape stays. On light pages, deep brand tones such as a plum or a forest green behave as ink and belong here too.

Set 40 to 48px, 14 to 16px at 500, 20 to 24px padding, no shadow, press .97. Use it for dark product pages, finance, robotics and brands with strong imagery. Do not put two on one row with equal weight. Hold pure white in reserve, because white on black at rest is harsher than it needs to be.

```css
.b-pill{display:inline-flex;align-items:center;height:44px;padding:0 20px;border:0;border-radius:999px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 92%,var(--bg));color:var(--bg);
  font:500 16px/1 var(--font-text);letter-spacing:-.011em;cursor:pointer;
  transition:background-color .16s cubic-bezier(.25,.46,.45,.94),scale .1s}
.b-pill:hover{background:var(--ink)}
.b-pill:active{scale:.97}
.b-pill:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

### Surface ladder: warm-tone-only-ladder (seen on Anthropic News, Cursor Pricing, Zed Blog)

*Feeling: considered and slightly bookish. The current look of serious AI and tools companies.*

**Use it for:** Tools and editorial product pages that want warmth without cream. **Avoid:** It is popular, so it is the first thing to swap if the page reads as a clone of the category.

Page #f7f7f4, panels #f2f1ed, controls #e6e5e0, ink #26251e, secondary text ink at 60%, hairlines ink at 10%. In oklch: L .975, .958, .921, C .004 to .007, hue 95 to 105. No shadows and no pure white.

Set secondary text as the ink at reduced strength in oklab, not as a grey, so it stays warm on every step of the ladder.

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

### Closing section: tone-panel-close (seen on Tana, Meta AI, Boston Dynamics)

*Feeling: a quiet room at the end.*

An inset panel one tone off the page. OpenAI's API pricing is the flattest: 1376 by 422, radius 6, centred, with a grey pill and a bare link. Tana places a two-line heading at left and one soft bloom on the right half. Meta fades a 1024px panel from white into pale blue with an app icon. My bloom took three tries. First it was a small oval that showed banding. Then I enlarged it, and it was twice too strong. The real one is pale, wide, runs off the panel's right edge, and pairs a warm core with cool flanks. Turn it down until you doubt it is there.

```css
.panel{position:relative;overflow:hidden;isolation:isolate;min-height:420px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:72px;background:var(--surface);border-radius:32px}
/* --warm and --cool: two pale tints from your palette */
.panel::after{content:"";position:absolute;z-index:-1;left:44%;right:-12%;top:-30%;bottom:-30%;opacity:.62;filter:blur(40px);
  background:radial-gradient(38% 42% at 56% 52%,var(--warm),transparent),radial-gradient(34% 62% at 26% 50%,var(--cool),transparent),radial-gradient(30% 60% at 92% 46%,var(--cool),transparent)}
.panel h2{font:400 52px/1.08 var(--font-display);letter-spacing:-.02em;max-width:11em}
@media(max-width:760px){.panel{padding:40px 24px;border-radius:24px;min-height:0}.panel h2{font-size:36px}.panel::after{left:-10%;right:-30%;top:50%;bottom:-40%}}
```

### Footer: masked-wordmark (seen on Cal.com, Webflow Pricing, Airpost: The Frontier Marketing OS for Frontier Companies)

*Feeling: a window cut in the shape of the name.*

The letters are an aperture. Cal.com shows a halftoned photograph through them, dark overall with one or two bright passages. Webflow masks cycling customer sites through its W. Leeroy fills a 920px wordmark with moving video. Airpost and Visora take the other route, with letters as a 1 to 1.5px outline and no fill. Use it when you have a single strong image or real customer work. Use one huge close-up, because a busy scene turns each letter into a separate collage. The letters must survive at a glance, so hold the image back with a veil.

```css
.wm{margin:0 40px;height:340px;overflow:hidden;container-type:inline-size;position:relative}
.wm b{display:block;width:max-content;white-space:nowrap;font:600 calc(100cqw/var(--k,2.9))/.8 var(--font-display);letter-spacing:-.04em;padding-top:.06em;color:transparent;
 -webkit-background-clip:text;background-clip:text;background-image:radial-gradient(circle,transparent 0 58%,var(--bg) 62%),url(photo.jpg);background-size:5px 5px,cover;background-position:0 0,center 35%}
.wm::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,color-mix(in srgb,var(--bg) 62%,transparent),transparent 45%,color-mix(in srgb,var(--bg) 45%,transparent));pointer-events:none}
@media(max-width:760px){body{padding-top:120px}.wm{margin:0 16px;height:110px}}
```

### Hover: instant-snap (seen on Notion About, Cognition, A24)

*Feeling: a switch being thrown.*

Zero transition, deliberately. A24 swaps fills in a hard cut, Cognition snaps a row link to electric blue, Acne Studios and Bun cut instantly. Reads as fast, printed and sure, and it is the cheapest language to build. Use it for type-led, editorial and brutalist sites. It needs a real value change: on a 3 percent tone step, no easing looks like a bug. Notion mixes the two, with an instant button and a 0.15s nav tint.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.