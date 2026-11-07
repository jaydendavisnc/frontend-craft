# Your direction (seed 1032)

Reads as **devtool**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**Mortgage file stacking and condition checks for credit unions in Michigan and Wisconsin.**

- Naming: A plain lending-file noun, or a credit-union style neighbourly word
- Facts to build on: Splits a scanned package into 240 document types; Puts each file in investor stacking order; Reads income conditions and flags missing items; $11 per closed loan
- Their vocabulary: stacking order, 1003, DU findings, conditions, W-2, VOE, DTI, LTV, clear to close, title commitment

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Stacked file.** Ribbon of page thumbnails grouped into labelled doc types, ordered, missing doc gaps, with a page count per group, a progress meter and loose pages waiting at the left Data: 1003, 3 pages; W-2 2025, 1 page; VOE missing; Title commitment, 12 pages; 212 of 246 pages stacked; 2 unknown pages for a person Behaviour: Pages shuffle from loose pile into order
- **Conditions board.** Prior-to-closing conditions with state, source doc, satisfied by, due, grouped by prior-to-docs, prior-to-funding, and at closing Data: PTC 14: Gift letter, received, underwriter review; PTC 15 VOE within 10 days, ordered; PTF 3 flood cert, satisfied by L. Maki, due Nov 14 Behaviour: Items tick as documents arrive; progress to clear to close fills
- **Income worksheet.** Base, overtime, two-year averages drawn from W-2 lines, DTI calc, and traced sources, each line carrying its W-2 box or paystub reference Data: 2-yr avg OT $812/mo, DTI 38.2 percent; Base $5,240/mo from paystub 10/31; 2025 W-2 box 1 $71,410; total $6,052/mo Behaviour: Clicking a figure opens the source crop

## The page, in order (structure from Buildkite, a gold devtool page)

1. Navigation: `nav.top-bar/section-adaptive-bar`
2. Hero: `hero.centered-with-product/cards-instead-of-window`
3. Ui fragment: `product.ui-fragment/mini-ui-in-wells`
4. Logo wall: `section.logo-wall/full-colour-on-rails`
5. Animated demo: `product.animated-demo/flow-with-travelling-token`
6. Integrations: `section.integrations/logo-tile-grid`
7. Testimonial: `section.testimonial/quiet-interlude-quote`
8. Feature alternating: `section.feature-alternating/split-card`
9. App window: `product.app-window/inset-sheet-window`
10. Closing section: `section.cta-band/ruled-break-close`
11. Footer: `section.footer/ghost-wordmark-crop`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Bigshot One** with **Brygada 1918**. A fat Scotch with sturdy hairlines holds down smaller than most fat faces, and sets a dignified head.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Brygada 1918 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@0,400..700;1,400..700&display=swap

## Palette

From ElevenLabs Pricing: bg #fcfcfc, surface #f5f3f1, text #000000, muted #777169, accent #2b7fff. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-mark`, **Scroll** `line-ink-resolve`, **Hover** `alpha-tint-chip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Buildkite** (devtool, gold) https://buildkite.com
- Doing: CI presented as an engineering document: a ruled matrix of small live diagrams beneath a purple-night customer-proof hero.
- Why it feels made: Each grid cell holds a bespoke miniature UI built for that one claim rather than a screenshot. Violet, kite green and the mono eyebrow come straight from the product.
- If imitated badly: The hero's logos, phone and glass panels turn to noise without strict z-order and one customer story at a time.

**Elyx** (saas, gold) https://elyx.design/
- Doing: A product launch written as an essay: warm paper with hand-drawn marks argues the problem, then the page goes dark and the product is named.
- Why it feels made: Everything is typography and a few hand-made marks, with the brand's spectral gradient rationed to a hairline, a word or the final horizon. The pacing is what feels expensive.
- If imitated badly: Scribbles look childish if they are vector-perfect or everywhere, and this page needs genuinely good writing because there is no product UI to lean on.

**Loops** (saas, gold) https://www.loops.so
- Doing: An email SaaS page in warm paper tones, where four retro stripes run around the whole page like a record sleeve and real product demos do the selling.
- Why it feels made: A single ownable device, the stripe rail, starts at the hero, bends around the product and wraps the footer. Everything inside stays quiet: one card shell, one heading pattern, one 'Learn' row, repeated exactly.
- If imitated badly: The stripes only work if they travel with real curves; pasted as a static border they turn into a 70s pastiche.

## System choices

- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/tracked-caps-heading`
- Primary button: `button.primary/neutral-chip`
- Surfaces: `surface.card/hairline-text-card`
- Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/knockout-badge-tiles`
- Page rhythm: `layout.section-rhythm/interlude-between-modules`
- Load: `motion.load-sequence/colour-plate-mark`
- Scroll: `motion.scroll-reveal/line-ink-resolve`
- Hover: `motion.hover-state/alpha-tint-chip`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Showpiece: `motion.product-demo-loop/generative-glyph-loop`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Atmosphere: `atmosphere.pattern/contour-moire`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: section-adaptive-bar (seen on Public, Hims, Attio)

*Feeling: the bar belongs to the room you are in.*

One bar shape with its skin swapped as sections pass. There are two ways to do this. Hims matches each section's colour, so a 48px bar melts into brown, blue, peach and black rooms in turn, with only a wordmark and a white Log in pill staying constant. Attio and Public invert on dark chapters and keep their geometry. Use it when the page has big colour changes that would otherwise collide with a fixed white bar. Avoid it on a page with one ground, where it does nothing.

Transition fill, ink and rule together over about 200ms. On Attio the primary button goes to a mid grey on dark rather than flipping fully to white, so it does not jump out. Citadel swaps its logo and button at the boundary with the same timing.

### Hero: cards-instead-of-window (seen on AuthKit, Brilliant, Headspace)

- **Feels:** Thoughtful, product-specific, nothing like a template.
- **Use when:** Your product's real unit is not a window: a lesson, a sign-in form, a course, an entry point.
- **Not when:** The cards are feature summaries, which turns this into the three-card row.
- **Recipe:** Brilliant fans seven 170 by 220 white cards, radius about 28, skewed in perspective, stepping up from y 600 to y 520 at 160px pitch, each holding one true problem diagram, fading into the page at the base with no shadow. AuthKit shows a 400px sign-in card in focus over two ghosts tilted about 2 degrees at 50% opacity. Headspace and Primer offer two wide entry cards, so the visitor self-sorts.

### Ui fragment: mini-ui-in-wells (seen on 099, AuthKit, Better Auth)

*Honest components, shown at their real size.* Quality 5/5, 10 sites.

**Use:** Feature grids with no images. The strongest cure for three-icon cards. **Not:** When you only have one or two features. One well looks like a placeholder.

**Recipe:** Grey well or hairline tile, radius 14-20. One real component centred at true 13-15px: white card, 1px border, radius 12-14. No scale, tilt or window chrome. Give each well one state, such as a tooltip or a checked row. Most-used variant here. AuthKit nests white 12-radius panels in a 20-radius tray. Vercel uses radius-0 hairline tiles fading to white, with live-typed UI inside. Better Auth runs 24px miniature proof chips in 10px mono as a hero strip.

### Logo wall: full-colour-on-rails (seen on Loops, Stripe, Stripe Atlas)

*Feeling: real companies, in their own colours.*

Marks keep their brand colours and sit precisely on the page's lines. Colour reads as real, since a faker greys everything. It takes a grid to hold it, or it turns to confetti. Stripe's seven logos sit about 22px high at 172px centres in a 72px band between hairlines, aligned to the page rails. Its product pages place 4 by 2 marks exactly in the drawn column lines, about 100px apart. Loops runs eleven 22px colour logos in one row with a small `More` link and no caption. Keep them under 40px, and use it on a page light enough to absorb the colour.

### Animated demo: flow-with-travelling-token (seen on Stripe Connect, Revena, Zapier)

*Watch the money, or the message, travel.* Quality 5/5, 5 sites.

**Use:** Payments, routing, event-driven systems. **Not:** Static relationships.

**Recipe:** CSS phone or nodes with concentric 1px rings, labelled pills attached by 1px lines with end dots. A small amount chip travels along the line, then rows update in sequence. Dashed variants work on saturated plates, in page type.

### Integrations: logo-tile-grid (seen on Amplitude, Definitiv Digital, Railway Docs)

*Feeling: pick yours.*

A grid of equal tiles, each a choice. Use it for 8 to 16 tools. Amplitude's six-column grid of 183 by 124 pale tiles at 8px gaps sets a 44px logo above a 16/600 label, under a black pill toggle, and ends with an ellipsis tile for any tool, then a link. Railway's 241 by 126 tiles use a hairline. Storybook offsets a wall of app tiles beside two small stats. Readwise keeps a soft inner shadow on its tinted tiles. Leave the row incomplete rather than inventing tiles, because a gap reads as honest.

```css
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.t{height:124px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font:600 15px/1 var(--font-text);transition:background .15s}
a.t:hover{background:color-mix(in srgb,var(--ink) 7%,var(--surface))}
.t svg{width:40px;height:40px;fill:currentColor}
.t.more{color:var(--ink-2)}                                    /* the last tile: any tool */
@media(max-width:860px){.g{grid-template-columns:repeat(3,1fr)}.t{height:108px}}
@media(max-width:480px){.g{grid-template-columns:repeat(2,1fr)}}
```

### Testimonial: quiet-interlude-quote (seen on Cursor Blog, Canary, Dub Pricing)

*Feeling: a voice in the room between two rooms.*

A short quote between feature blocks, with no card. It lowers the temperature of a page and gives a reader somewhere to breathe. Use it to break up long feature runs. Avoid it as your main proof, because it is designed to be secondary.

Centre 20 to 28px text on a 580 to 820px measure, then a 32 to 48px avatar, 14px name and role, and an optional customer logo after a 1px divider. Keep it under your headings in visual weight, as Tally does by setting it in mid grey. Emphasis comes from ink rather than size: Mercury sets the first sentence in full ink and the rest muted, Dub lifts one phrase to weight 500, and Canary underlines one phrase with a 3px accent rule. Choose one.

### Feature alternating: split-card (seen on Stripe Billing, Prisma, Brandrunnrs)

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

### App window: inset-sheet-window (seen on Attio, Loops, Sweeply)

*A well-made Mac app sitting on a table: soft, tactile, unhurried.* Quality 5/5, 4 sites.

**Use:** Light or warm SaaS, and products with sparse screens where the frame has to add weight. **Not:** Dark pages, where the two surfaces merge. Also inside a card grid, where a third nested edge appears.

**Recipe:** Outer shell 1080-1248px, tinted ink-5%, radius 16, 1px line. 32-34px title bar with dots or a breadcrumb. App sheet inset 8px on three sides, radius 8-10, its own 1px line. 250px sidebar on a half-step tint, 14/28 rows. Never show the bottom edge. The inner radius must equal the outer radius minus the inset, or the corners look broken. Attio uses coloured window dots; Loops greys them out and adds a breadcrumb, which is the more modern choice because it stops the chrome competing with the app. Reflect does the same trick as glass on a dark page: two 1px rims, outer radius 32 and inner 24, an 8px gap, and a glow bleeding through.

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

### Closing section: ruled-break-close (seen on Devin Desktop, Zed Pricing, ElevenLabs Pricing)

*Feeling: the grid opens for a moment.*

The close is framed by rules the page already has. Devin runs a 415px band where the side rails stop. ElevenLabs sets a 190px row between hairlines, with the line at left and two pills at right. Zed fills its row with a faint dot matrix. Customer.io uses a ruled box with a dot grid and a check list. Prototype runs two condensed lines and a triangle link with nothing else. It needs a visible rule system, or it reads as empty. My first version set the line at weight 300, and it looked thin against ElevenLabs' regular weight, whatever the analysts wrote. Use 400.

```css
.rails{width:min(1180px,calc(100% - 48px));margin-inline:auto;border-inline:1px solid var(--line)}
.close{display:flex;align-items:center;justify-content:space-between;gap:32px;min-height:190px;padding:0 48px;border-block:1px solid var(--line)}
.close h2{font:400 34px/1.15 var(--font-display);letter-spacing:-.02em}
.pair{flex:none;gap:8px;margin-top:0}
.b{height:44px;border-radius:22px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 1px 2px color-mix(in srgb,var(--ink) 6%,transparent)}
.b.p{background:var(--ink);color:var(--bg);box-shadow:none}
@media(max-width:760px){.close{flex-direction:column;align-items:flex-start;padding:48px 24px}.pair{width:100%}.b{flex:1;justify-content:center}}
```

### Footer: ghost-wordmark-crop (seen on Bauhaus Clock, Resend, Medusa622: Luxury Skin & Nails in Knightsbridge)

*Feeling: a watermark in good paper.*

The same huge word, set barely off the ground. Bauhaus Clock puts it on the page tone at about 11 percent ink, with a single row beneath in 20px type. Resend sets `#111` on black, cropped by a full-width hairline with a soft glow under it. Substack fades it into white and Otter crops it at the page edge. It gives a footer weight without volume, so it suits calm pages and light products. Links stay in full contrast above it. The tone must be visible on an ordinary laptop screen, so test it on a dim display, and if you crop, cut about a third so it reads as deliberate.

```css
.foot{padding:0 50px 28px}
.fit{container-type:inline-size}
.mark{display:block;width:max-content;white-space:nowrap;font:500 calc(100cqw/var(--k,6.2))/1.05 var(--font-display);letter-spacing:-.015em;color:color-mix(in srgb,var(--ink) 11%,var(--bg))}
.row{display:flex;justify-content:space-between;font-size:20px;line-height:24px;color:var(--ink-2);margin-top:6px}
.row a:hover{color:var(--ink)}
@media(max-width:760px){.foot{padding:0 16px 20px}.row{flex-direction:column;gap:4px}}
```

### Headline: quiet-serif-over-sans-ui (seen on Public, Exa, Linear Method)

Written rather than marketed. Warmth on a technical subject. Seen on 23 sites.

**Use it for:** AI, finance, docs and any technical product that wants to sound human. The serif is the only warm thing on the page, so it carries all of the voice.

**Avoid it for:** Pages where the serif also appears in nav, buttons or body, which turns voice into costume. Bold cuts also lose the effect.

**Recipe:** One serif used only for H1 and H2, weight 300-500, 44-80px (up to 128px on dark manifesto pages), line-height 1.0-1.1, tracking 0 to -0.03em, single ink, never bold. All UI, labels and body stay sans or mono, so the serif alone carries the voice.

**Why it works:** The contrast is the point: a serif headline over grotesque interface looks like an editor wrote it and an engineer built it. The largest bucket of gold serif sites use it this way, with 11 gold sites.

```css
h1 { font: 400 64px/1.1 var(--font-display); letter-spacing: -.02em; }
p  { margin: 20px auto 0; font: 400 18px/1.5 var(--font-text); max-width: 34em; color: var(--ink-2); }
```

<a id="roman-italic-turn"></a>

### Section headings: tracked-caps-heading (seen on 1 Hotels, HAY, Xin Cheng Foods)

Engraved, hotel-like, quietly formal. Seen on 6 sites.

**Use it for:** Hospitality, retail, heritage and galleries.

**Avoid it for:** Long titles, and lowercase. Positive tracking belongs to capitals only.

**Recipe:** Modest heading in caps at 20-40px, tracking +0.04 to +0.1em, weight 400-600, in ink or a deep brand colour, left or centred. Reads as engraved, not shouted. Pair with a text link on the same baseline. Keep it under 30 characters.

<a id="emblem-opener"></a>

### Primary button: neutral-chip (seen on Tana, Attio, Exa)

*Feeling: a good tool, sure of itself.*

A near-black rectangle on light, or near-white on dark, with no colour at all. It works in any palette, it never fights an image, and it reads as product. Use it for SaaS, developer tools, docs and app UI. Avoid it when a consumer brand needs warmth, where a pill or a colour does more.

Set 32 to 40px, radius 6 to 10, 14/500, 12 to 16px padding, no shadow. Attio adds a 1px border one step lighter than the fill, about L\* 37 on L\* 13, which reads as a faint rim. Analysts recorded that rim as darker, and the measured value corrected it. Vercel uses a flat #171717 at radius 6 and nothing else. The chip shares its radius with the page's inputs and small cards.

```css
.b-chip{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid color-mix(in oklab,var(--ink) 76%,var(--bg));
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),scale .1s cubic-bezier(.4,0,.2,1)}
.b-chip:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-chip:active{scale:.98}
.b-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: hairline-text-card (seen on Neon Docs, Factory, Meta AI)

*Feeling: a well-kept index.*

An outline card with text only, for docs indexes, capability lists and pointers. Use 1px at `--line`, radius 4 to 16, padding 16 to 28, a 12px label, a 16 to 20px title and one muted line. Keep it short, about 160px tall, and drop the icon tile. Numbering it, as in a `01` label set in small caps or mono, gives a row order without decoration. On hover, darken the border and leave the fill alone. Avoid it for marketing features, where the reader needs evidence rather than a label.

### Surface ladder: page-tint-drift (seen on Fabrica Partners, Claude Pricing)

*Feeling: the whole page changes weather as you read.*

**Use it for:** Editorial finance and brand sites with few, clear sections. **Avoid:** Dense tools. A moving ground under UI is a distraction.

Body background cross-fades between near-whites, such as warm grey, peach and pale blue, about .9s ease, as sections enter. Differences of 2 to 3 L* only. Nav tints with the page. No gradients on elements.

Fabrica cross-fades the whole page between warm grey, peach and pale blue over about .9s, with no gradients on any element. Claude Pricing moves its neutrals per section and lets the nav tint with them.

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

### Icons: knockout-badge-tiles (seen on Svix, React Email)

*Feeling: stamped hardware. Each feature gets a maker's mark.*

**Use:** Developer tools and infrastructure, where a set of 6 to 12 features needs a strong repeating shape. **Avoid:** Friendly consumer pages, or when the container shape has no link to the brand.

Choose one solid container and one rule. A 56px near-black hexagon with white geometric glyphs knocked out of it: brackets, dots, bars, and no line icons. Or an 80px squircle at radius about 20, dark fill, 1px light border at 10%, a coloured brand glyph centred, 16px label below at 158px pitch. The container shape should echo the logo or product, because that is what makes it more than a tinted circle.

```js
// Flat-sided hexagon with softened corners. The glyph is knocked out, so it survives on any ground.
const hex = (s = 56, r = 5) => { const R = s / 2, p = [...Array(6)].map((_, i) => {
    const a = Math.PI / 3 * i - Math.PI / 2; return [R + R * Math.cos(a), R + R * Math.sin(a)]; });
  return `<path d="M${p.map(q => q.map(n => n.toFixed(1)).join(' ')).join('L')}Z" fill="var(--ink)"
    stroke="var(--ink)" stroke-width="${r}" stroke-linejoin="round" transform="translate(${s * .05} ${s * .05}) scale(.9)"/>`; };
// Glyphs inside are white shapes on a 24 box: bars, dots, brackets. No line icons, or the set stops reading as hardware.
```

**In the lab:** Matched Svix closely. I expected corner softness to matter and tested it: sharp and softened hexagons looked nearly the same at 56px, so match your interface radius and move on. What matters is that every glyph is built from the same bars and dots.

### Page rhythm: interlude-between-modules (seen on Comet, Airpost)

**Feel.** An argument taking a breath.
**Use when** a long feature run needs a turn in its reasoning. **Avoid** using more than twice.
**Recipe.** A 112/115 three-line statement, left aligned at x=150, no eyebrow, about 150px above and below. Or a wordless row: Comet sets six spheres of mixed sizes on one centre line in a 320px full-bleed row, restating its motif.

### Load: colour-plate-mark (seen on Studio Dado, Villa Aurelia, Fabrica Partners)

*Feeling: a house arriving.*

Now the stage variants, where the page waits. A flat screen in the brand colour with one small mark, then the page. Studio Dado's taupe hold runs about 3s before its monogram even appears, which is too long. Aim for under 1.5s total. Joby draws a logo stroke on full brand colour and lets a photo frame rise over it, which is the better shape: the plate does something and leaves. Use it for hospitality, architecture, professional practices. Set a cookie or session flag so it plays once.

### Scroll: line-ink-resolve (seen on Nicole Heim Studio, Revolut, International Magic)

*Feeling: weighted and calm.*

The same idea at line or paragraph level, and much cheaper. Expo holds stat lines at about 15 percent until each one enters. Revolut brings a heading from about 70 percent to full white as it settles. Nicole Heim darkens paragraphs from 60 percent with no split at all. Use it for stat stacks and short statements. It needs no text splitting, so it survives any language and any font.

```css
@supports (animation-timeline:view()){
  .line{animation:ink linear both;animation-timeline:view();animation-range:entry 20% cover 42%}
  @keyframes ink{from{opacity:.15}to{opacity:1}}
}
```

### Hover: alpha-tint-chip (seen on ElevenLabs Pricing, Devin Desktop, Expo)

*Feeling: a quiet place to land.*

Nav items and rows gain a pill of ink at low alpha. Modern Treasury uses 5 percent, ElevenLabs 5, Devin 6, Linear white at 8. The alpha makes it work on any ground, and the pill gives the eye a target. Use it for navs, menus, filter rows and sidebars. Give the pill a horizontal padding of 10 to 12px, set negative margin if the text must keep its alignment, and do not chip a link inside a sentence. Over photography, use white at 8 to 20 percent.

### Phone menu: accordion-sheet-pinned-cta (seen on Claude, Claude Pricing, Stripe)

*Feeling: everything in its place, and the next step under your thumb.*

The standard for products, and it earns that. A full-height sheet with rows, a disclosure on groups, plain rows for leaf pages, and actions pinned at the base. Claude sets five 18px rows on a 76px pitch with hairlines and thin plus marks, and rows fade in top-down. Stripe sets 18/600 on 52px with dotted rules, accent chevrons, and a small bordered card of help links. Cal.com drops the hairlines, and pins a tinted tray with three stacked buttons. Use it for any product with grouped pages. Avoid it with under four rows, because a sheet of accordions then has nothing to fold.

Use a plus for expanding in place and a chevron pointing right for a drill-down, and do not mix the two. Animate height through `grid-template-rows` from `0fr` to `1fr`, which needs no measuring. Rotate the plus 45 degrees.

```css
.sheet{position:fixed;inset:72px 0 0;z-index:50;display:flex;flex-direction:column;padding:12px 24px calc(16px + env(safe-area-inset-bottom));
  background:var(--bg);overflow:auto;visibility:hidden;opacity:0;transition:opacity .16s ease-out,visibility .16s}
.open .sheet{visibility:visible;opacity:1}
.row{border-bottom:1px solid var(--line);opacity:0;translate:0 6px}
.open .row{animation:rise .32s cubic-bezier(.22,1,.36,1) forwards;animation-delay:calc(var(--i)*45ms + 40ms)}
@keyframes rise{to{opacity:1;translate:0 0}}
.row>button,.row>a{width:100%;height:76px;display:flex;align-items:center;justify-content:space-between;
  font-size:18px;letter-spacing:-.005em;text-align:left;color:color-mix(in srgb,var(--ink) 86%,var(--bg))}
.plus{position:relative;width:16px;height:16px;color:var(--ink-2);transition:transform .22s ease}
.plus::before,.plus::after{content:"";position:absolute;left:0;right:0;top:7.5px;height:1px;background:currentColor}
.plus::after{rotate:90deg}
[aria-expanded=true] .plus{transform:rotate(45deg)}
.sub{display:grid;grid-template-rows:0fr;transition:grid-template-rows .24s cubic-bezier(.4,0,.2,1)}
[aria-expanded=true]+.sub{grid-template-rows:1fr}
.sub>div{overflow:hidden}
.sub a{display:block;padding:7px 0;font-size:16px;color:var(--ink-2)}
.foot{margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:16px}
.foot a{height:44px;display:grid;place-items:center;border-radius:8px;font-size:16px;font-weight:500}
.foot .o{box-shadow:inset 0 0 0 1px var(--line-strong)}.foot .s{background:var(--ink);color:var(--bg)}
@media(prefers-reduced-motion:reduce){.open .row{animation:none;opacity:1;translate:0 0}}
```

### Showpiece: generative-glyph-loop (seen on Sequoia, Evenark, Ghostty)

*Feeling: drawn, not filmed.*

A tiny loop drawn from characters. Ghostty flips an ASCII ghost like a flipbook, with no canvas or video. Yamauchi swaps coloured squares on the logo's own grid. Sequoia draws portfolio marks in jittery chalk on a canvas. Evenark shows a ring of dots orbiting a disc, client work actually running. Use it for technical or craft brands. Stepped timing at 6 to 12 frames a second is what keeps it feeling hand-made. See `webgl.md` Dither and halftone.

### Showpiece: window-opens-to-full (seen on Factory, Resend, LEA WINERY)

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

### Atmosphere: contour-moire (seen on Lithic, The Warren, Canopy)

*Feeling: engineered luxury. Lines that open like a fingerprint.*

**Use it for:** Finance and enterprise tiles, retinted per panel. **Avoid:** Centring the rings. A centred set is an op-art target, and that was my first attempt.

Concentric 1px offsets of one rounded shape, spacing opening quadratically, centre off-canvas, bleeding off one corner, masked to nothing toward the text. Retint per panel at about 30% ink. Moire near the edges is the point.

```html
<div style="position:relative;height:220px;max-width:640px;margin:80px auto;background:var(--surface);border-radius:14px;overflow:hidden;padding:26px 28px;--stroke:color-mix(in oklab,var(--ink) 34%,var(--surface))">
<svg id="ct" viewBox="-320 -230 640 460" fill="none" stroke="var(--stroke)" style="position:absolute;right:-400px;top:-210px;width:640px;height:460px;-webkit-mask:linear-gradient(100deg,transparent 22%,#000 58%);mask:linear-gradient(100deg,transparent 22%,#000 58%)"></svg>
<h3 style="position:relative;margin:0">Direct to carriers</h3></div>
<script>
// centre off canvas, rings open up quadratically, one corner only. centred rings are an op-art target
const sq=(r,n=3.4)=>{let p=[];for(let i=0;i<160;i++){const t=i/160*6.2832,c=Math.cos(t),s=Math.sin(t);p.push((r*Math.sign(c)*Math.abs(c)**(2/n)).toFixed(1)+' '+(r*.82*Math.sign(s)*Math.abs(s)**(2/n)).toFixed(1))}return'M'+p.join('L')+'Z'};
document.getElementById('ct').innerHTML=`<g transform="rotate(-28)">${Array.from({length:30},(_,i)=>`<path d="${sq(40+i*9+i*i*.9)}"/>`).join('')}</g>`;
</script>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.