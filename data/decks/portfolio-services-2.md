# Your direction (seed 1067)

Reads as **saas**, surface **portfolio**, register **gradient-light** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**Rostering and plan-budget tracking for small NDIS disability support providers in Melbourne's outer east.**

- Naming: A warm but unglamorous word for a shift, a roster or a suburb
- Facts to build on: Claims per line item in the NDIS price guide, with Saturday and active overnight rates; Service agreement and participant goals attached per client; Enforces the 2-hour minimum for a support worker callout; Fits teams of 8 to 60 workers, $9 per client per month
- Their vocabulary: SIL, SDA, core supports, capacity building, progress notes, service agreement, WWCC, participant, plan manager, support coordinator, ratio 1:2

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Support roster.** Workers as rows, 7 days as columns, shifts as blocks labelled by participant and ratio; unfilled shifts as dashed blocks; check marks for WWCC valid Data: Tue 14:00 to 20:00, Priya, client L.T., 1:1 community access, weekday day rate Behaviour: Dragging an unfilled block onto a worker updates hours and warns about expiry
- **Plan budget burn.** Stacked area of spend by category across a 12-month plan with a straight-line ideal; projected run-out date marker Data: Core 62 percent used at month 7 of 12; run-out est 14 Jan Behaviour: Area grows to today; a dotted projection extends to the run-out marker
- **Claim check.** Checklist before a claim: right price line, travel not over 30 km, progress note written, agreement active, ratio split correctly; each item shows pass or fail and rule Data: 01_011 at 67.56, 12 km travel, note missing: claim held Behaviour: Items tick through in order; a failure halts and the claim chip goes to Held

## The page, in order (structure from Oliver Dupuy, a gold architecture page)

1. Navigation: `nav.top-bar/two-tier-product-subnav`
2. Hero: `hero.full-bleed-media/bottom-left-lockup`
3. Gallery portfolio: `section.gallery-portfolio/on-image-title-tiles`
4. Closing section: `section.cta-band/tone-panel-close`
5. Footer: `section.footer/inset-card-footer`

## Type system

**Figtree** with **Figtree**. Open and friendly, close to Circular in the eye; an easy fit for consumer finance and health.
- Display: 64px, phone 38px, weight 450, tracking -0.024em, leading 1.06. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Figtree 14px 500. Label: 500, sentence case
- Load: https://fonts.googleapis.com/css2?family=Figtree:wght@400..500&display=swap

## Palette

From Together AI: bg #ffffff, surface #f5f4f8, text #000000, muted #737373, accent #bdbbff. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `product-story-assembles`, **Scroll** `margin-drift`, **Hover** `accent-flip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Oliver Dupuy** (architecture, gold) https://www.oliverdupuy.com/
- Doing: Architecture portfolio as a white spread: a tall photograph slides across a blank page with project name left and place/year right.
- Why it feels made: Total restraint: one 14px letterspaced serif, a white field and large editorial interior photography with warm, consistent grading. Nothing competes with the images.
- If imitated badly: Without exceptional, uniformly graded photography and exact centring, this much emptiness reads as an unfinished page.

**CleanShot X** (saas, gold) https://cleanshot.com
- Doing: A Mac utility sold by showing its own controls at poster scale inside a disciplined gradient bento.
- Why it feels made: Every tile holds a real control rather than a screenshot, and all gradients come from one peach-periwinkle-indigo family on a strict 20/14 radius system. Spacing never drifts from the 1192px frame.
- If imitated badly: Gradient tiles without real UI fragments, or with hues from outside one family, collapse into generic AI-startup bento.

**Stripe Sessions** (brand, gold) https://stripe.com/sessions
- Doing: A conference page holds one extraordinary colour ribbon against an almost silent system of ultralight type, plum ink and hairlines.
- Why it feels made: Sub-1.0 leading on an ultralight grotesk, a strict one-third offset grid and plum in place of black. All colour is rationed to the ribbon, with only trace echoes in hover hairlines and day flags.
- If imitated badly: Tight ultralight type fails on lesser fonts, and the page collapses without a render of this quality at its centre.

## System choices

- Headline: `type.display-headline/light-large-sans`
- Section headings: `type.section-heading/marked-phrase`
- Primary button: `button.primary/saturated-rect`
- Surfaces: `surface.panel/tonal-feature-panel`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/product-story-assembles`
- Scroll: `motion.scroll-reveal/margin-drift`
- Hover: `motion.hover-state/accent-flip`
- Phone menu: `nav.mobile-menu/display-type-takeover`
- Showpiece: `section.feature-sticky-scroll/list-drives-pinned-stage`
- Showpiece: `product.animated-demo/flow-with-travelling-token`
- Atmosphere: `atmosphere.texture/stippled-stage`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-tier-product-subnav (seen on Stripe Billing, Apple Vision Pro, Claude)

*Feeling: a company, and then this product within it.*

A global bar with a second row for the product you are reading. On Stripe the global row is 76px and the second row 66px, with the product name in accent colour at left and page anchors at right. On Apple the 44px global bar scrolls away and a sticky 52px bar stays, with the product name at 21/600, 12px links, and a blue Buy pill. Claude's second row is only 44px, with a page label and a dropdown. Use it on any product page within a multi-product company. Avoid it on a one-product site, where the second row has nothing to do.

Keep the second row visually lighter than the first, and let only it stick. Separate with a dashed hairline, as Stripe does, or a blur band. Stripe Atlas shows that colour alone can carry the state: active link in navy, the rest in accent, no pill at all.

### Hero: bottom-left-lockup (seen on Function Health, Prototype, Structure)

- **Feels:** Cinematic, picture first, words second.
- **Use when:** The image is strong and its lower third is calm or dark. This is the safest good choice for photo-led brands.
- **Not when:** The subject's face or the product sits in that corner.
- **Recipe:** Image fills the viewport under an overlaid nav. Lockup anchored at 40 to 96px from the left and 44 to 75px from the bottom: an optional 30px tag, a 56 to 80px white headline at 1.0 leading, a 16 to 18px sub 520px wide, a 46 to 50px pill. Put something on the same bottom line at the right: three proof columns with 1px dividers (Function Health), a next-slide link, a project index, or a tiny pause control. Structure runs a strip of its latest work along the bottom edge. Almeida needs only one heavy word on a stage photo, with a pause button opposite.

```css
.hero{position:relative;height:100vh;min-height:680px;display:flex;flex-direction:column;color:#fff}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 60%;z-index:-2}
/* two veils. One for the nav, one for the lockup. Neither reaches the middle of the picture */
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:
  linear-gradient(180deg,rgb(0 0 0/.42) 0,transparent 20%),
  linear-gradient(0deg,rgb(0 0 0/.72) 0,rgb(0 0 0/.42) 30%,transparent 56%)}
.foot{margin-top:auto;padding:0 56px 44px;display:grid;grid-template-columns:1fr auto;align-items:end;gap:64px}
h1{font:400 76px/1.02 var(--font-display);letter-spacing:-.02em;color:#fff;text-wrap:balance}
.sub{margin-top:14px;max-width:520px;font:400 18px/1.45 var(--font-text);color:rgb(255 255 255/.8)}
.stats{display:flex}
.stats div{min-width:150px;padding:0 24px;border-left:1px solid rgb(255 255 255/.22)}
.stats div:first-child{border:0}
.stats b{display:block;font:500 17px var(--font-text)}
.stats span{font-size:13px;color:rgb(255 255 255/.6)}
```

Our first veil stopped at 50% and at .62 strength, and the sub dissolved into the picture. The reference is darker and reaches higher than it looks. Always check the sub, not the headline: the headline is big enough to survive, and the 16px line is what fails.

### Gallery portfolio: on-image-title-tiles (seen on Fujifilm X, Foster + Partners, Stability AI)

*Feeling: a wall of posters.*

The title sits inside the image, bottom left, inset 16 to 26px. Foster + Partners uses 427 by 335 tiles, 24px gaps, no radius, and a 21/500 white caption on an 80px black gradient. Sidekick uses two 692px squares with a dark gradient rising from the base. Stability AI butts three videos with no gaps in a block at radius 16, so they read as one cinematic strip. Use it when pictures are strong, and when the foot of each image can take text. Limit the scrim to the base of the image. A flat dark layer across a whole photograph protects three words and ruins the picture. Avoid it for pale or busy images, where no small scrim will hold the text.

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

### Footer: inset-card-footer (seen on Function Health, Factory, Mixpanel)

*Feeling: a closing plate, mounted on the page.*

The footer is one card, inset from the viewport on all sides so the page ground survives around it. Factory sets 1392 by 430 at radius 12, 24px from each edge, with columns packed to the far right, the wordmark bottom left and the left two-thirds left empty. Function Health uses a warm card at radius 24 with a 56px pad and a serif signup line. UNITO saves its one loud colour for a 265px card. Use it when the page already uses inset panels or a framed layout, since the card then reads as the last in a series. Keep at least 16px of ground visible. Put legal outside the card if the card is the brand moment, as Remote does. Avoid it on full-bleed photographic pages, where a floating card looks pasted on.

```css
.card{height:430px;background:var(--ink);color:var(--bg);border-radius:12px;padding:32px 40px;display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr auto}
.cols{grid-column:2;display:grid;grid-template-columns:repeat(3,auto);gap:0 64px;font-size:13px}
.cols b{display:block;font-weight:500;line-height:20px;margin-bottom:10px}
.cols a{display:block;line-height:24px;color:color-mix(in srgb,var(--bg) 55%,transparent)}
.cols a:hover{color:var(--bg)}
.mark{grid-column:1;grid-row:2;align-self:end;font:600 24px/1 var(--font-display);letter-spacing:.12em}
.legal{grid-column:2;grid-row:2;align-self:end;font-size:13px;line-height:22px;color:color-mix(in srgb,var(--bg) 60%,transparent)}
@media(max-width:760px){.cols a{line-height:44px}body{padding:120px 12px 12px}.card{height:auto;gap:40px;grid-template-columns:1fr;padding:24px}.cols,.mark,.legal{grid-column:1;grid-row:auto}.cols{grid-template-columns:1fr 1fr;gap:24px}}
```

### Headline: light-large-sans (seen on Stripe Sessions, LiveKit, Affirm)

Elegant, a little fashion. Air around every stroke. Seen on 9 sites.

**Use it for:** Consumer finance, events and brand launches, on dark grounds or plain light ones. One line sets it best.

**Avoid it for:** Busy photographs, thin faces under 48px, and low-contrast greys, which remove strokes altogether.

**Recipe:** Headline in a weight 200-300 sans, at least 64px on light and 48px on dark, tracking -0.02 to -0.04em, line-height 0.85-1.1, one or two lines, on a plain ground. Keep controls at weight 500 so the thin type reads as a decision, not a font-loading fallback.

**Why it works:** Thin strokes survive only through size. Light on dark also looks heavier than the same weight on white, because bright strokes bloom, which is why dark sites can go lighter at smaller sizes.

<a id="heavy-tight-sentence"></a>

### Section headings: marked-phrase (seen on Elyx, Expo, Readwise)

The product's own tools turned on its own headlines. Seen on 9 sites.

**Use it for:** Design tools, note-taking apps, developer products. Choose the device the product really uses.

**Avoid it for:** Marks with no link to the product, which become decoration.

**Recipe:** One phrase in a 32-64px heading sits on a device: flat highlighter block, selection rectangle of radius 4-6px, bounding box with corner handles, inline code chip, or hand stroke. Choose the device the product itself uses. Same device on every section; the tint may change.

**Why it works:** A highlight means something in a reading app, a selection box means something in a design tool, and a code chip means something in a terminal product. The device is borrowed from the product, which is why it does not feel like decoration.

<a id="poster-caps-opener"></a>

### Primary button: saturated-rect (seen on Stripe Billing, Ramp, Stripe)

*Feeling: institutional, precise, confident about colour.*

One saturated fill on a near-square shape. Stripe's recipe is the reference: 48px with 16px at weight 400 in the hero, 40px with 14px in the nav, radius 4, 24 and 20px padding, a small chevron and nothing else. The square corner keeps a bright colour from feeling friendly, so it reads as finance rather than as consumer. Ramp's lime at radius 6, reMarkable's blue at radius 2 and LiveKit's flat cyan at radius 4 all work the same way: the colour appears on buttons and almost nowhere else.

Use it for finance, infrastructure and enterprise. Choose text colour by contrast, and do not assume white. Lime and cyan take near-black, so set `--on-accent` to your ink. Keep the gap to the chevron at 6px with a 2px stroke, or it detaches.

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

### Surfaces: tonal-feature-panel (seen on Apple Intelligence, Notion Calendar, Factory)

*Feeling: a clean room with one thing in it.*

The workhorse. One tone step, no border, no shadow. Either a single centred statement, as on Apple at 1260x622, radius 28, about 120px padding, or left copy with product UI running off an edge, as on Notion. Use it to host your most important feature. Inset it 24px from the viewport on wide layouts, or use container width.

```css
.panel{position:relative;overflow:hidden;max-width:1024px;height:640px;margin:0 auto;
  background:var(--surface);border-radius:12px;padding:32px 34px}
.panel h3{font:700 18px/1.3 var(--font-display);margin-bottom:6px}
.panel p{max-width:500px;font-size:16px;line-height:24px}
/* Product runs off the left and bottom edges; only its free corner is rounded. */
.shot{position:absolute;left:0;right:56px;top:210px;bottom:-60px;border-radius:0 28px 0 0;overflow:hidden}
@media(max-width:760px){.panel{height:560px;padding:24px}.shot{right:0;top:230px}}
```

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Logo: mark-as-image-system (seen on Soundsensing, Stone Island, Russell & Stellar)

*Feeling: a brand with real depth. The mark is everywhere and never tiresome.*

**Use:** Fashion, architecture, hospitality, hardware. Whenever you need decoration, use the mark before anything else. **Avoid:** A weak mark. Enlarging a poor logo only makes the problem bigger.

Redraw the mark for each scale. A 58px seal in the nav, 40px in the footer, and a 560px version with heavy concentric arcs in flat mid-grey as a whole band. A glyph that serves as divider, placeholder and overlay on portraits, then sits above a 630px wordmark in the footer. A 190px asterisk turning slowly, returning at 120px. A 51px tile that also appears etched on the product.

```html
<!-- Three masters of one idea. Parts fall away as size falls, and the big one gains detail the small one could not hold. -->
<symbol id="m16" viewBox="0 0 16 16"><path d="M3 10a5 5 0 0 1 10 0z" fill="currentColor"/><path d="M1 12.75h14" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="m44" viewBox="0 0 44 44"><g fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 31a17 17 0 0 1 34 0"/><path d="M12 31a10 10 0 0 1 20 0"/></g>
  <path d="M19 31a3 3 0 0 1 6 0z" fill="currentColor"/><path d="M1 35h42" stroke="currentColor" stroke-width="2"/></symbol>
<!-- m600: four arcs in 30, 24, 18 and 14px strokes, each broken by stroke-dasharray, set in flat mid grey on a near-black band. -->
```

**In the lab:** Three masters of one idea, with detail added at the top and removed at the bottom. My first small version, arcs over a dot, collapsed into the Wi-Fi icon at 16px. I replaced it with a half disc on a line. Always test a mark against the system icons it might be mistaken for.

### Icons: duotone-solid-glyphs (seen on Stripe Atlas, Stripe Connect, Stripe Payments)

*Feeling: polished and engineered. A family drawn for this product.*

**Use:** Feature grids on fintech and platform pages, at about 40px, where icons head short text columns. **Avoid:** Small sizes under 24px, where the overlap turns to mud. Do not fake it by recolouring a line icon.

Build each icon from two or three overlapping solid shapes in one colour family, with no strokes. A light tint, the accent, and a deep shade. Let shapes overlap, so the overlap itself draws the form. Set at 40px with no tile, aligned to the column's left edge, 12px above a 14px bold title. Draw the family from the hero's colours, so the page holds one ramp.

```html
<!-- Overlapping tones from one ramp, no stroke. Three tones is the ceiling. -->
<svg class="duo" viewBox="0 0 40 40" aria-hidden="true">
  <rect x="4" y="16" width="9" height="20" rx="1.5" fill="var(--a)"/>
  <rect x="16" y="10" width="9" height="26" rx="1.5" fill="var(--b)"/>
  <rect x="28" y="4" width="9" height="32" rx="1.5" fill="var(--c)"/>
</svg>
```
```css
.duo { --a: color-mix(in srgb, var(--accent) 45%, #fff); --b: var(--accent);
       --c: color-mix(in srgb, var(--accent) 45%, #000); width: 40px; height: 40px; }
```

**In the lab:** Eight glyphs on one ramp read as the Stripe family at a glance. In an A/B, a 1.5px outline turned them to clip art, and a separate hue per icon broke the family.

### Page rhythm: label-left-content-right (seen on Alessandro Stella, Stripe Sessions, Work & Co)

**Feel.** An annual report from a firm that charges a lot.
**Use when** the company has a point of view and content varies by section: agencies, consultancies, funds. **Avoid** when sections are all the same shape, which makes the left column look wasted.
**Recipe.** Work & Co: a 1060px container (x=190 to 1250), a 360px label column, a 700px content column from x=550. Every section has one short label at 20px/500 and an otherwise blank column. Headline, media, index and form all share that one left edge. Oxygen Pictures: four 330px columns with 24px gutters, labels in column one, content from column three, blank columns kept empty. As a rows variant: 1px rules, 11px small caps label at x=144, content at x=720, rows about 110px tall.
**Why it works.** Repetition of one offset gives the page an obvious logic, and the blank column is constant, so it reads as structure.

**Built.** This recipe transferred almost exactly on the first try, because it is pure geometry. It is the safest way to get a designed feel from limited assets.

```css
.sec{display:grid;grid-template-columns:minmax(0,360px) minmax(0,700px);
  max-width:1060px;margin-inline:auto;padding-block:60px;border-top:1px solid var(--line)}
.sec>.label{font:500 20px/1.3 var(--font-text);letter-spacing:-.01em}
@media(max-width:760px){.sec{grid-template-columns:1fr;gap:24px;padding-inline:20px}}
```

### Load: product-story-assembles (seen on Stripe Climate, Apple Intelligence, Soundsensing)

*Feeling: the load is the demo.*

The load plays what the product does. On Stripe Climate a colour band slides down to rest as a receipt fades in and a phone rises 8px through it, with a banner last. On Soundsensing a status card shows three green dots and one turns amber as an alert appears. Tana starts with empty frames, then adds video, then the speaker ring and a live caption, so it reads as a running call. Use it when your product has a sequence worth showing, and limit it to five beats. Each beat must be a separate object. Static copy on the left keeps it readable.

### Scroll: margin-drift (seen on Notion Calendar, BIG, Stripe Blog)

*Feeling: something alive at the edge.*

Only small marginal objects move. Notion Calendar's stickers fade in near their heading and drift at a different rate from the text, some still at about 30 percent on arrival, on measured CSS scroll timelines. Panels and type stay still. BIG breathes a column's width between about 394 and 434px as you scroll. Use it to add life to a calm page, 20 to 80px of travel at most. Parallax on anything larger is where this starts to feel like an effect. See `scroll.md` Parallax depth layers.

### Hover: accent-flip (seen on Stripe Pricing, Warp Pricing, Stripe Climate)

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

### Phone menu: display-type-takeover (seen on mymind, Fidèle, Greylock)

*Feeling: the menu is a poster.*

The links are the headline. A24 sets six words at 64px with very tight tracking on a 66px pitch, and a hairline and two lines of small links at the base. mymind sets 48px serif words with a coloured dot beside each. Greylock and Cursor run 40 to 52px. Use it for culture, fashion, agencies and any brand with a strong typeface and few links. It is a free page of brand expression, and this is where your display type gets to perform. It fails with long labels, so keep six short words or fewer.

Reveal it fast. Set `clip-path:inset(0 0 100% 0)` to `inset(0)` over about 340ms on a strong ease. On hover devices, dim the other links to 40 percent.

```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;padding:72px 18px 22px;background:var(--bg);overflow:auto;
  visibility:hidden;clip-path:inset(0 0 100% 0);transition:clip-path .34s cubic-bezier(.76,0,.24,1),visibility .34s}
.open .sheet{visibility:visible;clip-path:inset(0)}
.big a{display:block;font:500 64px/66px var(--font-display);letter-spacing:-.045em;transition:opacity .15s}
.big:hover a{opacity:.4}.big a:hover{opacity:1}
.foot{margin-top:auto}
.foot div{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0;border-top:1px solid var(--ink)}
.foot a{font:400 22px/1 var(--font-display);letter-spacing:-.02em}
```

### Showpiece: list-drives-pinned-stage (seen on Wispr Flow, Payload, Sweeply)

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

### Showpiece: flow-with-travelling-token (seen on Stripe Connect, Revena, Zapier)

*Watch the money, or the message, travel.* Quality 5/5, 5 sites.

**Use:** Payments, routing, event-driven systems. **Not:** Static relationships.

**Recipe:** CSS phone or nodes with concentric 1px rings, labelled pills attached by 1px lines with end dots. A small amount chip travels along the line, then rows update in sequence. Dashed variants work on saturated plates, in page type.

### Atmosphere: stippled-stage (seen on Customer.io, Calvyn, Salterra Resort & Spa)

*Feeling: product shots look lit by a soft studio light.*

**Use it for:** SaaS sections showing white app windows. **Avoid:** Covering the stage with the window. If little of it shows, nothing is gained.

Product stage, radius 24px, bleeding off one edge, pale to mid tint gradient under per-pixel stipple, sigma 9 on the pale side rising to 15 on the deep side. Show 30 to 40% of the stage around a white window, so it looks lit like a photo set.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.stage3{position:relative;height:640px;margin-left:clamp(16px,7vw,96px);border-radius:24px 0 0 0;overflow:hidden;isolation:isolate;
  --deep:oklch(from var(--accent) .8 .085 h);--pale:oklch(from var(--accent) .94 .018 h);
  background:radial-gradient(95% 130% at 100% 90%,var(--deep),color-mix(in oklab,var(--deep) 55%,var(--pale)) 45%,var(--pale) 85%)}
/* stipple is raw per-pixel noise that grows with the colour: sigma 9 on the pale side, 15 on the deep side */
.stage3::before{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.2;-webkit-mask:linear-gradient(100deg,rgba(0,0,0,.65),#000 75%);mask:linear-gradient(100deg,rgba(0,0,0,.65),#000 75%)}
.stage3 .win{position:absolute;left:clamp(16px,3.5vw,48px);top:56px;width:min(880px,88%);height:640px;background:var(--surface);border-radius:12px;box-shadow:0 30px 80px -20px rgba(40,50,110,.3),0 0 0 1px rgba(30,40,90,.06)}
</style>
<div style="height:120px"></div><div class="stage3"><div class="win"></div></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.