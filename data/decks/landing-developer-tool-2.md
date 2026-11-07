# Your direction (seed 1006)

Reads as **devtool**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Exa, a gold ai page)

1. Navigation: `nav.floating-pill/section-subnav-pill`
2. Hero: `hero.input-first/prompt-composer`
3. Logo wall: `section.logo-wall/masked-grey-marquee`
4. Data viz: `product.data-viz/race-bars`
5. Feature tabs: `section.feature-tabs/accordion-beside-stage`
6. Feature grid: `section.feature-grid/ui-fragment-cards`
7. Testimonial: `section.testimonial/quote-with-outcome-metrics`
8. Full bleed break: `layout.full-bleed-break/dark-interlude-room`
9. Stats: `section.stats/open-numeral-columns`
10. Case study: `section.case-study/paged-story-carousel`
11. Closing section: `section.cta-band/tone-panel-close`
12. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Archivo** with **Archivo**. A harder American grotesque for tools and infrastructure; more grit than Inter at the same size.
- Display: 56px, phone 36px, weight 500, tracking -0.016em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.55. UI: Archivo 14px 500. Label: 600, uppercase, 0.05em
- Load: https://fonts.googleapis.com/css2?family=Archivo:wght@400..600&display=swap

## Palette

From Stripe Pricing: bg #f7f8fc, surface #ffffff, text #0a2540, muted #425466, accent #635bff. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `window-opens-to-full`, **Hover** `row-fill`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

## Every section is its own project

Award-winning sites feel made because each part had its own idea. Do not fill sections. Design them.

Before any code, write `.frontend-craft/ideas.md`. For every section, write three lines that begin `Wouldn't it be cool if`, and make at least one of them involve no text at all: something that moves, responds, can be dragged or tried, or is drawn or built. Pick the one that best makes a visitor understand or want this, even if it is harder to build, and mark it. `shoot.mjs` checks this file.

**This is a website, not a slide deck.** A page of heading, paragraph, picture, repeated, exhausts people. Keep the headline, then let things carry the meaning. If a sentence explains something the page could show, build the thing and delete the sentence. As a guide: under 25 words of copy around the hero headline, and under 35 words of prose in a section. Text inside real content such as a product view, a table or a menu does not count. No two adjacent sections should share a skeleton.

**Do not stop at correct.** Right structure and motion can still look boring. Give the ground light and depth, give type real presence, use one confident colour, and make every component look custom-built, with edges, states and detail. The first screen should be a lit, composed scene with one hook and one striking object, not a heading and two buttons on a flat panel.

**Showpieces.** The two Showpiece recipes are the moments someone would send to a colleague. Give them real scale and real effort, and let the page be quieter around them.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Exa** (ai, gold) https://exa.ai
- Doing: A search API presented with the gravity of a research institute: warm serif headlines, hard-edged panels, and data in cobalt.
- Why it feels made: The serif is unexpected for AI infrastructure and every other element is squared off and technical, so the contrast feels authored. Cobalt appears only on data and the final footer, which makes both hit hard.
- If imitated badly: The hard-cornered grid and stipple only work with real data behind them; with placeholder content they look like a bank template.

**Better Auth** (devtool, gold) https://www.better-auth.com
- Doing: The landing page behaves like a repository: a fixed title panel on the left and a scrolling README on the right.
- Why it feels made: One conceit decides everything: tabbed nav, numbered features, mono labels and table cells all follow the README idea. Colour appears only inside tiny product chips, so a greyscale page feels alive.
- If imitated badly: At 11-13px across dense cells this is only legible with perfect spacing; loosen the alignment and it becomes a cluttered spec sheet.

**Cal.com** (saas, gold) https://cal.com
- Doing: A scheduling product sold by showing real UI fragments in one grey-on-white tile system, warmed by dithered documentary photos.
- Why it feels made: One tile recipe of hairline shell, 8px inset and #f3f4f8 well repeats for every feature, and what sits inside is real component UI. Halftoned photography gives an ownable texture that carries through to the footer wordmark.
- If imitated badly: Headline chips and double-rim cards turn cheap fast when the chips are decorative or the radii do not nest.

## System choices

- Headline: `type.display-headline/swapping-word`
- Section headings: `type.section-heading/marked-phrase`
- Primary button: `button.primary/information-bearing-button`
- Surfaces: `surface.panel/ruled-cell-panel`
- Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/pixel-grid-icons`
- Page rhythm: `layout.section-rhythm/collapsed-chapters`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `motion.hover-state/row-fill`
- Phone menu: `nav.mobile-menu/rich-entry-sheet`
- Showpiece: `motion.product-demo-loop/autoplay-tabs-with-timer`
- Showpiece: `motion.product-demo-loop/typed-input-loop`
- Atmosphere: `atmosphere.grid-or-lines/fading-square-grid`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: section-subnav-pill (seen on Apple Intelligence, Stripe Billing, Stripe Pricing)

*Feeling: a local table of contents that travels with you.*

A floating element for the parts of one page. Apple Intelligence sets a centred row of 36px pills at radius 18, translucent with hairlines, 18px gaps, and the current one solid black with a faint multicolour glow, in a 58px frosted band. Stripe Billing turns its subnav into a 1266x64 white card 8px from the top, with a soft blue shadow and a new 40px button, once the global bar leaves. Stripe's pricing page straddles a colour ribbon with a 348x50 pill of three anchors. Use it on long product pages. Avoid it with more than about seven anchors.

### Hero: prompt-composer (seen on Exa, Spline, Perplexity)

- **Feels:** The product is already open, waiting for you.
- **Use when:** AI products where a typed request is the product.
- **Not when:** Your AI is one feature among many.
- **Recipe:** A centred stack, then a 640 to 700px composer, 116 to 172px tall, radius 12 to 16, with a caret and a real example in the placeholder, and a footer row with attach, mode select and send. Under it, three or four suggestion pills at 36px with small icons. Spline adds a selection box round one word of a two-tone headline, and a dark app peeking at the fold. Exa sets a 700px search card over a config panel. Perplexity drops the marketing altogether, with a mark, a 26px question and a composer inside its real app shell.

```css
.hero{position:relative;height:836px;overflow:hidden;display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:84px}
h1{font:500 50px/1.1 var(--font-display);letter-spacing:-.03em;margin-top:18px}
h1 span{color:var(--ink-3)}
.composer{width:680px;height:116px;margin-top:30px;padding:14px 14px 10px 16px;border-radius:12px;text-align:left;
  display:flex;flex-direction:column;background:var(--surface);color:var(--ink-2);font-size:15px;
  box-shadow:inset 0 0 0 1px rgb(255 255 255/.07),0 24px 60px -24px #000}
.composer footer{margin-top:auto;display:flex;align-items:center;gap:8px;font-size:12.5px}
.send{margin-left:auto;width:30px;height:30px;border-radius:8px;background:var(--ink);color:var(--bg);display:grid;place-items:center}
.chips{display:flex;gap:8px;margin-top:14px}
.chips a{height:36px;padding:0 13px;border-radius:99px;box-shadow:inset 0 0 0 1px var(--line);display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-2)}
/* the real app, dimmed, entering at the fold */
.app{position:absolute;left:32px;right:32px;bottom:-250px;height:470px;border-radius:12px 12px 0 0;overflow:hidden;
  background:var(--surface);box-shadow:inset 0 0 0 1px var(--line)}
.app::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent,var(--bg) 62%)}
```

Write a real example in the placeholder, with real dimensions and real nouns. The suggestion pills should be specific enough to show range. An empty dark box is what most of these look like when generated.

### Logo wall: masked-grey-marquee (seen on Better Auth, CleanShot X, Devin Desktop)

*Feeling: a quiet stream of companies.*

The default moving wall. One row of marks, flattened to one grey, drifting inside a window whose ends fade. It shows many names in little height. Use it when you have over ten logos and want a light touch. Avoid it with five logos, which will visibly repeat within a screen, and on serious finance or health pages where drift can feel flippant.

Set marks 24 to 32px tall with 56 to 100px gaps, in a 960 to 1320px window, not full bleed, so that the fade happens inside the page. CleanShot's 1192px strip uses a 15px caption, 30px marks in flat mid grey and about 100px gaps. Better Auth takes only 60px of height with an 11px mono label right-aligned on a hairline. Inngest adds a 6px coral dot to most logos, which lifts it from a stock strip. GitHub adds a 32px pause circle.

```css
.mq{width:min(1192px,100% - 48px);margin-inline:auto;overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.track{display:flex;width:max-content;animation:drift 42s linear infinite}   /* two identical .set blocks */
.set{display:flex;align-items:center;gap:96px;padding-right:96px;color:var(--ink-3)}
.mq:hover .track{animation-play-state:paused}
@keyframes drift{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.track{animation:none}}
@media(max-width:700px){.mq{width:100%}.set{gap:56px;padding-right:56px}}
```

Grey at `--ink-3` fails contrast checks and that is acceptable for logos, provided each has an accessible name.

### Data viz: race-bars (seen on Astral, Bun, Hugging Face Pricing)

*A race, and it is not close.* Quality 5/5, 5 sites.

**Use:** Performance claims with real measured numbers. **Not:** Numbers that are close. A narrow win looks like a loss.

**Recipe:** 1px ink box, 46px tab row with active tab solid. Rows 44px: name plus mono version, 28px tinted track, solid bar on one shared scale, right-aligned mono time. Winner in accent. Axis below, then one line of test conditions and a reproduce link. Astral uses 8px bars with a 2px lime tick for the winner and 30px mono times. Rspack gives each tool three 8px tracks at 826px wide. The shared scale is the argument; never rescale per row. Always state the conditions.

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

### Feature tabs: accordion-beside-stage (seen on Asana, Cloudflare Workers, Stripe Billing)

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

### Feature grid: ui-fragment-cards (seen on Public, Stripe, Comet)

*10 sites, quality 5.* Proof in every cell. Use for products with distinctive small moments of UI. Needs one bespoke fragment per item.

Recipe: a borderless tray in a tint 2 to 4% off the page, radius 12 to 16, copy on top and a fragment rising from the base and either cropped or faded into the tray. Vary the fragment and hold the frame. Brex runs five 246px trays with 24px/600 titles, each ending in different anchored UI. Public mixes one full-width tray with two half-width ones and centres the copy. Stripe's card is a 26px light title top left, with a 38px expand tile in the corner that turns accent on hover.

Seen on Public, Stripe, Brex, Copilot, Remote, Hugging Face, Revena. Suits light precision, gradient light, bold colour, for finance and SaaS.

### Testimonial: quote-with-outcome-metrics (seen on Increase, Airpost, Hawl Design)

*Feeling: an opinion, then the receipts.*

A quote that brings its own numbers. This is the strongest single-customer form, because feeling and figure back each other up. Use it when one customer has real results. Avoid it if the numbers are rounded marketing, since a bad number next to a good quote poisons both.

Airpost sets a 60px quote across 1140px, then a 64px avatar, name, logo and a case study button, and below that three columns under top hairlines with figures at 40px. Note that it mixes words with digits, which reads more honestly. Increase puts a 20/30 quote in a faintly tinted panel, with name left and a two-line mono proof point right-aligned at the base. Hawl runs a long paragraph at 18/28 and two small green uplifts at the right, and keeps the reviewer's lowercase. Sweeply and Remote put a 44 to 48px metric at the foot of each rail card.

### Full bleed break: dark-interlude-room (seen on Exa, Copilot)

**Feel.** The lights go down, and the page gets serious.
**Use when** trust, privacy or security deserve their own moment on a light page. **Avoid** as a generic dark stripe for variety.
**Recipe.** One full-bleed deep section with two soft blurred colour glows at the edges. 48px heading, tinted lede, a 640px panel with 24px radius and a 1px tinted border, small caps group labels. Exa's version steps through white, warm off-white, ink and a saturated band, all full width with hard edges and a 1280px container, replacing every divider with a change of colour.

### Stats: open-numeral-columns (seen on Vercel AI SDK, Amplitude, Linear Customers)

*Feeling: stated, not sold.*

Numbers on the page grid with nothing around them. If your type and spacing are good, this is enough. Vercel AI SDK sets four left-aligned columns on the same 354px pitch as its feature row, numerals 48/56 at 450 with about -6 percent tracking, a 14px label 12px below, and about 200px of clear space above. Brex reverses the stack, with a 24px label over a 48px numeral, so each stat reads as a claim. Stripe Connect hangs a blue tick on the page's guide beside each figure. Amplitude sets them as chart footnotes. Reach for an accent only if the numerals are few.

### Case study: paged-story-carousel (seen on Anthropic News, Vercel Customers, CITADEL Construction Group)

*Feeling: one article at a time, with a page number.*

A carousel that admits what it is. Counted controls are better than dots, because a reader knows how far it goes. Anthropic's news module uses a 416px copy column, with a label on a 1px rule, title, body and a tint button, around mono `01 / 05` between 28px arrow squares, opposite an 848 by 477 image. Copy crossfades rather than slides. Basic Agency uses a draggable rail at 434px pitch with `00 / 05` on a rule above. Lyra centres a 578 by 325 slide with cropped neighbours.

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

### Footer: grid-locked-footer (seen on Zed Pricing, Zed Blog, La Table de Joakim)

*Feeling: the page was drawn in one go.*

The footer keeps the page's own grid. Stripe runs its dashed column guides straight through. Zed keeps the rails of the page, changes only the ground to a blue field, splits the columns with 15 percent white verticals, and sets 14px mono links that are always underlined on a 32px pitch. Paddle fills the top of the footer with three ruled cells of copy, and Oatly goes furthest, making the footer a literal table of 52px cells with every link centred in a box.

Use it when the page already has visible structure: rails, a dotted ground, a ruled grid. It is a poor choice on a page with no lines, where it arrives from nowhere. The line must continue from above and reach both edges, because a stopped line reads as a mistake.

```css
.foot{--rail:color-mix(in srgb,var(--bg) 15%,transparent);--tint:color-mix(in srgb,var(--bg) 72%,var(--accent))}
.foot{background:var(--accent);color:var(--bg);position:relative}
.frame{max-width:1120px;margin:0 auto;border-left:1px solid var(--rail);border-right:1px solid var(--rail);display:grid;grid-template-columns:1.6fr repeat(4,1fr)}
.cell{padding:28px 16px 48px;border-left:1px solid var(--rail)}
.cell:first-child{border-left:0}
.cell b{display:block;font:400 16px/24px var(--font-display);margin-bottom:14px}
.cell a{display:block;font:400 14px/32px var(--font-mono);text-decoration:underline;text-decoration-color:var(--rail);text-underline-offset:3px;width:max-content;color:var(--bg)}
.cell a:hover{text-decoration-color:var(--bg)}
.side small{display:block;font:400 11px/22px var(--font-mono);color:var(--tint);margin-top:28px}
.hatch{max-width:1120px;margin:0 auto;height:240px;border:1px solid var(--rail);border-bottom:0;overflow:hidden;position:relative;
 background:repeating-linear-gradient(135deg,transparent 0 6px,color-mix(in srgb,var(--bg) 7%,transparent) 6px 7px)}
.hatch svg{position:absolute;left:0;right:0;top:40px;width:100%}
.hatch text{font:700 300px/1 var(--font-text);fill:none;stroke:color-mix(in srgb,var(--bg) 20%,transparent);stroke-width:1.5}
@media(max-width:760px){.frame{grid-template-columns:1fr 1fr}.cell:first-child{grid-column:1/-1;border-bottom:1px solid var(--rail)}.cell:nth-child(even){border-left:0}.hatch{height:110px}}
```

The table version, with cells that invert on hover:

```css
body{background:var(--well);padding:300px 20px 24px}
.tbl{display:grid;grid-template-columns:repeat(24,1fr);border:2px solid var(--ink);background:var(--bg);max-width:1400px;margin:0 auto}
.tbl>a{grid-column:span 6;height:52px;display:grid;place-items:center;font:600 13px/1 var(--font-mono);letter-spacing:.04em;text-transform:uppercase;border-right:2px solid var(--ink);border-bottom:2px solid var(--ink);transition:background .15s,color .15s}
.tbl>a:hover{background:var(--ink);color:var(--bg)}
.tbl .h{grid-column:span 12}.tbl .u{grid-column:span 1}.tbl .h2{grid-column:span 11}
.tbl .end{border-right:0}
.icons{grid-column:1/-1;display:flex;justify-content:center}
.icons a{width:52px;height:52px;display:grid;place-items:center;border-left:2px solid var(--ink);font:700 15px/1 var(--font-mono)}
.icons a:last-child{border-right:2px solid var(--ink)}
@media(max-width:760px){body{padding-top:120px}.tbl>a,.tbl .h,.tbl .h2{grid-column:span 12}.tbl .u{grid-column:span 24}}
```

### Headline: swapping-word (seen on Codecademy, Calvyn, Fora)

Live and specific. One sentence addressing several audiences. Seen on 6 sites.

**Use it for:** Platforms serving several verticals, and products with a clear list of jobs.

**Avoid it for:** Any page where the moving word is the only idea. Must stop for reduced motion.

**Recipe:** Fixed opening words with one slot at the end cycling 3-5 nouns, masked to the line height and moved vertically over 400-600ms, or typed with a cursor. Reserve the widest word's width, or centre so the whole line re-centres. Hold each word 2-3 seconds. Stop for reduced motion.

<a id="statement-as-hero"></a>

### Section headings: marked-phrase (seen on Elyx, Expo, Readwise)

The product's own tools turned on its own headlines. Seen on 9 sites.

**Use it for:** Design tools, note-taking apps, developer products. Choose the device the product really uses.

**Avoid it for:** Marks with no link to the product, which become decoration.

**Recipe:** One phrase in a 32-64px heading sits on a device: flat highlighter block, selection rectangle of radius 4-6px, bounding box with corner handles, inline code chip, or hand stroke. Choose the device the product itself uses. Same device on every section; the tint may change.

**Why it works:** A highlight means something in a reading app, a selection box means something in a design tool, and a code chip means something in a terminal product. The device is borrowed from the product, which is why it does not feel like decoration.

<a id="poster-caps-opener"></a>

### Primary button: information-bearing-button (seen on 1X, Bauhaus Clock, Analogue)

*Feeling: a shop assistant who answers before you ask.*

The control carries a fact as well as a verb. 1X sets a 14px price 16px to the left of a dark pill, so the price reads as part of the control. Bauhaus Clock writes the price into the label on every button. Analogue keeps one 41px pill through Buy Now, Available Now and Sold Out, with a 15px note 16px beneath about shipping. Definitiv Digital replaces a demo button with a 64px portrait of the founder and two lines of text, and a person is harder to ignore than a verb.

Use it for commerce, single-product pages and services sold by a person. Keep the shape fixed across states, and set price in tabular figures.

### Surfaces: ruled-cell-panel (seen on Public, Attio, Raycast Pricing)

*Feeling: one instrument with several dials.*

A single bordered panel split into cells by shared rules, with no gaps. Public runs 1280x512, 1px, radius 8, three cells at 40px padding, each with a 16px title, 14px copy, a link, a visual that fills the rest, and an outlined pill at the foot. Use it to hold two to four related claims as one object. The visual may break out of the padding toward the rules, which is what stops it feeling boxed.

```css
/* Grid gap on a line-coloured background gives shared, undoubled rules. Cells must be opaque. */
.panel{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-strong);
  border:1px solid var(--line-strong);border-radius:8px;overflow:hidden}
.cell{background:var(--bg);height:512px;padding:40px;display:flex;flex-direction:column}
.cell h3{font:500 16px/1.3 var(--font-text);letter-spacing:-.01em;margin-bottom:8px}
.cell p{font-size:14px;line-height:19.5px}
.viz{flex:1;margin:0 -18px;display:flex;align-items:center;justify-content:center;min-height:0}
@media(max-width:760px){.panel{grid-template-columns:1fr}.cell{height:auto;padding:28px}}
```

If `--line` is translucent, `--bg` on the cells keeps it correct, because the lines are the gaps.

### Surface ladder: neutral-page-white-card (seen on Warp Pricing, Vercel Pricing, Cal.com Pricing)

*Feeling: printed and exact. Feels like a well-set specification sheet.*

**Use it for:** Developer platforms and precise SaaS. The default for a light product page. **Avoid:** Warm consumer brands, where pure neutrals feel like a hospital.

Page #fafafa, raised sheet #fff, hover #f2f2f2, hairline #e6e6e6 or black 8%. Text #171717 and #4d4d4d. No tint, one accent at most, no shadow at rest. Separation is 2% lightness plus a line, so it feels printed.

Tiny hue shifts are allowed and can be an identity: #fbfdfd with a faint mint cast, or #f9f9fb and #f0f0f3 with a faint lilac one.

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

### Logo: constructed-geometric-mark (seen on Block, BCR Law LLP, ADCC Awards)

*Feeling: inevitable. It looks like it could not have been drawn any other way.*

**Use:** Finance, platforms, institutions, awards. Any brand that benefits from a simple, stated rule. **Avoid:** When the rule is arbitrary. The geometry should echo the name or the idea.

State the mark in numbers. Block lets the mark be the hero: 44px, centred above one line, with almost nothing else on the screen. A 3 by 3 of solid squares at 13px with about 3px gaps and about 2px corners gives a 44px mark. A black 94px square quartered by a thin white cross holds four letters made only of straight strokes, and it inverts in the footer at 80px. An outlined box of 80 by 88 with a 2px stroke and one sheared corner holds three rows of tracked capitals, and the same skeleton swaps letters and colour for each company in a group. Showing construction drawings as content can turn the derivation into a section.

```js
// Constructed mark. Unit 13, gap 3.25 (a quarter), corner 1.6 (an eighth). Draw a second master for 16px.
function grid(size) {
  const px = size <= 20;                                 // pixel-fitted: 4px squares on a 5px pitch
  const [u, g, r, box, off] = px ? [4, 1, .6, 16, .5] : [13, 3.25, 1.6, 45.5, 0];
  let o = '';
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
    o += `<rect x="${off + i * (u + g)}" y="${off + j * (u + g)}" width="${u}" height="${u}" rx="${r}"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${box} ${box}" fill="currentColor" aria-hidden="true">${o}</svg>`;
}
```

**In the lab:** The grid held from 200px to 32px and failed at 16 until it had its own master. The sheared box was the best-looking mark in the test: below 40px it drops to one letter.

### Icons: pixel-grid-icons (seen on Shopify Polaris)

*Feeling: playful and technical. A wink inside serious documentation.*

**Use:** Developer docs and neutral reference pages that need personality without a redesign. **Avoid:** Mixing with smooth icons in the same context.

Draw at 16 by 16 and display at exactly 3x, about 48px, with `image-rendering: pixelated` or `shape-rendering: crispEdges`. Use a dark one-pixel outline, two or three flat fills per icon, and stepped edges with no anti-aliasing. Keep it the only illustrative colour on the page.

### Page rhythm: collapsed-chapters (seen on Webflow Pricing)

**Feel.** Efficient. Respects a reader who only wants one thing.
**Use when** a pricing or catalogue page would otherwise run very long. **Avoid** hiding the primary offer.
**Recipe.** Secondary families collapse to 56px headings with a plus, about 266px tall between full-bleed hairlines. Heading takes the accent on hover.

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: window-opens-to-full (seen on Factory, Resend, LEA WINERY)

*Feeling: stepping into the product.*

A contained window scales with scroll until it fills the frame. Factory starts about 750px wide and grows about 2x until it crops and the UI reads huge. Resend zooms its editor under a heading until a white sheet is the one bright rectangle on the page, then releases. Use it to move from a pitch into the product. It works natively.

```css
.track{height:260vh;view-timeline:--t block}
.stage{position:sticky;top:0;height:100vh;overflow:hidden;display:grid;place-items:center}
.win{width:760px;transform-origin:50% 22%}
@supports (animation-timeline:view()){
  .win{animation:open linear both;animation-timeline:--t;animation-range:contain 0% contain 76%}
  @keyframes open{to{transform:scale(2.05);border-radius:4px}}
}
```

Choose the origin on the focal point. My first used about the centre, and the content you cared about scrolled out of frame at full scale. Stop the range at about 76 percent, so the end state holds before release. Do not add `will-change:transform`: it keeps the layer rastered at its small size, and text blurs as it grows.

### Hover: row-fill (seen on Work & Co, Vercel Pricing, Olivier Larose)

*Feeling: the whole line is the target.*

The row takes a fill edge to edge. Olivier Larose inverts to black in 0.2s. Make Town fills a hairline row solid black and adds an arrow. Work & Co only changes the text to the accent over 0.25s, leaving rules and position alone. Use it for indexes and lists where each row is one link.

### Phone menu: rich-entry-sheet (seen on Notion About, AuthKit, Notion Calendar)

*Feeling: a small landing page in the menu.*

Rows carry more than names. Notion stacks three 106px pastel cards with a title, a line and its own drawing, then Resources and Pricing in plain 22px type, then two buttons in a pinned tray. Supabase uses a select to switch sections, with icon tiles on an 80px pitch. Hugging Face groups chips under gradient-tinted headings. Rewiring America uses chip tabs on a yellow band with described rows below. Use it when names alone do not sell the product, and you have real drawings. Avoid card lists with generic icons.

### Showpiece: autoplay-tabs-with-timer (seen on Amplitude, Vercel AI SDK, Lithic)

*Feeling: the change is on purpose.*

Tabs advance themselves and show when. Amplitude grows a 2px line along the active tab's top edge. Lithic fills a ring. Energen fills 3px tab bars, changes every metric in the frame and adds a pause. Mixpanel fills the active tab and recolours the hero slats with it. Use it when you have three to five product areas to show in one slot. The timer turns surprise into expectation. See `interaction.md` Tabs.

```css
.tab{position:relative}
.tab::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left}
.tab[aria-selected=true]::before{animation:fill var(--dwell,6s) linear both}
.paused .tab::before{animation-play-state:paused}
.manual .tab[aria-selected=true]::before{animation:none;transform:scaleX(1)}
@keyframes fill{to{transform:scaleX(1)}}
```
```js
const arm=ms=>{clearTimeout(timer);start=performance.now();left=ms;timer=setTimeout(()=>{show((i+1)%n);arm(DWELL)},ms)};
box.addEventListener('pointerenter',()=>{clearTimeout(timer);left-=performance.now()-start;box.classList.add('paused')});
box.addEventListener('pointerleave',()=>{box.classList.remove('paused');arm(left)});
tabs.addEventListener('click',e=>{clearTimeout(timer);box.classList.add('manual');show(index(e))});// a click ends autoplay for good
```

Pause the timer and the bar together, and resume from what was left rather than restarting. A click stops the cycle for good, because the person has taken over. Keep the panel swap to about 0.28s.

### Showpiece: typed-input-loop (seen on Exa, Bun, Tally)

*Feeling: the claim, happening.*

A real input fills itself. Tally types a form title letter by letter, then opens a slash menu. Docker types on the left while log rows arrive on the right, with older rows dimming to about 40 percent, and the count in the subhead steps up. Exa fills its console over about 2s in place of a hero entrance. Bun walks real output through five steps with a progress line, hover pause, and replay and next controls. Use it for tools with an input. Show real commands.

```js
async function type(t){for(const ch of t){c.textContent+=ch;
  await wait(ch===' '?150+Math.random()*90:38+Math.random()*46)}}// bursts, not a metronome
```
```css
.cur{display:inline-block;width:.6em;height:1.1em;vertical-align:-.18em;background:currentColor}
.cur.idle{animation:blink 1.06s steps(1) infinite}@keyframes blink{50%{opacity:0}}
.log div{opacity:0;transform:translateY(3px);transition:opacity .25s var(--ease-ui),transform .25s var(--ease-ui)}
.log div.in{opacity:1;transform:none}.log div.old{opacity:.42}
```

Blink the caret only while idle, never during typing. Reserve the output area's height so the page does not grow as rows arrive.

### Atmosphere: fading-square-grid (seen on LiveKit, Modern Treasury, Render)

*Feeling: graph paper on a dark desk, or a soft technical bed behind a hero.*

**Use it for:** Dark devtool sections and pale hero corners. **Avoid:** Grid under body text, and full-page grid with no fade. That is the generated default.

Square grid 16 to 70px, 1px, about 16% white on dark or 6% on light, in one zone only and masked to nothing toward the copy. One solid object may break it. Cells can hold real stats.

The analysts guessed 10% on the strongest example. Pixels measure about 17%. A mask eats more than you expect, so keep the line honest and let the mask quiet it.

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

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.