# Your direction (seed 1037)

Reads as **agency**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Orbit Design, a silver agency page)

1. Navigation: `nav.top-bar/two-row-masthead`
2. Hero: `hero.type-only/statement-above-rising-media`
3. Logo wall: `section.logo-wall/logos-inside-another-block`
4. Ui fragment: `product.ui-fragment/layered-panels-on-gradient`
5. Product card: `commerce.product-card/stacked-caption-tile`
6. Gallery portfolio: `section.gallery-portfolio/peek-rail`
7. Newsletter: `section.newsletter/link-not-field`
8. Pricing table: `section.pricing-table/standard-vs-custom-pair`
9. Faq: `section.faq/strong-control-rows`
10. Closing section: `section.cta-band/seam-overlap-close`
11. Footer: `section.footer/one-line-colophon`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Stack Sans Headline** with **Inclusive Sans**. Built very tight with a closed ampersand; a slashed zero and single-storey a make the body distinct.
- Display: 64px, phone 38px, weight 500, tracking -0.02em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Inclusive Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap https://fonts.googleapis.com/css2?family=Inclusive+Sans:ital,wght@0,300..700;1,300..700&display=swap

## Palette

From New Material: bg #ffffff, surface #f9f8f5, text #2a292e, muted #747378, accent #fa500f. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-mark`, **Scroll** `line-ink-resolve`, **Hover** `accent-flip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Orbit Design** (agency, silver) https://www.orbitdesign.io/
- Doing: A subscription design agency page that sells with product screenshots on pale grey, then one gradient burst with a mascot.
- Why it feels made: Single family, large clean white space and real UI shots make it credible; the gradient section is a confident single moment.
- If imitated badly: Without strong portfolio imagery the pale-grey wash reads empty, and the gradient needs the mascot to avoid looking like a template.

**New Material** (agency, gold) https://newmaterial.ai/
- Doing: A studio site that replaces headlines with a shuffled deck of work, where each project recolours the small interface around it.
- Why it feels made: Type stays at one size in two inks, so hierarchy comes from grey vs dark and soft bloom elevation. Small objects such as the speech bubble, one-question form and focus-pulled portraits each have a specific idea.
- If imitated badly: Blur, bloom and grey-on-white go limp and illegible without strong media in the cards.

**Levels** (health, gold) https://levels.com
- Doing: A health product landing that mixes light and near-black bands with data-led UI cards in a restrained green-grey palette.
- Why it feels made: Tight Hoves display, consistent 10px-radius bordered cards, real product UI and pale green tints make the data feel credible and calm.
- If imitated badly: Black stat cards and green tints turn clinical and generic if spacing and hairlines are loosened.

## System choices

- Frames: `media.photography/cutout-on-flat`
- Headline: `type.display-headline/medium-tight-grotesk`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/wide-tracked-caps`
- Surfaces: `surface.panel/floating-utility`
- Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
- Logo: `media.logo-mark/behaving-logo`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/hard-midline-panels`
- Load: `motion.load-sequence/colour-plate-mark`
- Scroll: `motion.scroll-reveal/line-ink-resolve`
- Hover: `motion.hover-state/accent-flip`
- Phone menu: `nav.mobile-menu/rich-entry-sheet`
- Showpiece: `motion.product-demo-loop/autoplay-tabs-with-timer`
- Showpiece: `type.type-as-image/list-as-display`
- Atmosphere: `atmosphere.pattern/hatch-gutters-and-seams`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-row-masthead (seen on Monocle, Le Saint Georges, Omega)

*Feeling: an institution with a front door for everyone.*

Two stacked rows, a brand or utility row over a section row. Monocle runs a 64px row with a centred wordmark and a subscribe button, a 1px black rule, then a 45px centred section row with pipes between items. Retail and universities use the same logic for log in, region and stores. Use it for magazines, institutions and large stores with many audiences. Avoid it as decoration, since two rows cost over 100px of screen.

Set a 24 to 64px upper row at 10 to 13px, and a 44 to 90px lower row at 14 to 18px, with 1px rules between. Keep both rows on the same page rails. Twilio shows the hard-edged version: a 32px pale utility strip over an 80px white bar.

### Hero: statement-above-rising-media (seen on Bakstad Construction, Greylock)

- **Feels:** Patient. The screen waits for you.
- **Use when:** Investors, architects and studios, with one strong image.
- **Not when:** The image is merely adequate.
- **Recipe:** Words at one third of the height, then deliberate emptiness, then a real image entering at y 720 to 840, cut by the fold. Bakstad sets a small 30px sentence off-axis at x 224 and a 15px link pair, then about 300px of bare page, then a photo at x 654 cropped by the fold. Greylock sets 88/88 weight 300 with a 32px line beneath and a one-point perspective grid of pale lines fading out between the words and a media card.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Ui fragment: layered-panels-on-gradient (seen on Bauhaus Clock, Devin Desktop (codeium.com redirect), Stripe)

*Precision floating on colour, the classic finance look.* Quality 5/5, 5 sites.

**Use:** Payments and billing, or any product with a rich brand gradient. **Not:** Unbranded gradients. On a default purple blend it collapses into the AI template.

**Recipe:** Two or three white panels with 10-13px type, radius 6-14, overlapping at two depths on a rich gradient that leaks around them, soft tinted shadow, cropped by the card edge. Real labels, segmented controls, plans and prices. Bauhaus Clock shows a settings sheet at full size on watercolour, which is the same idea with a far quieter ground. Mixpanel adds a 4px translucent white rim to the chart card.

### Product card: stacked-caption-tile (seen on Therabody, Reformation, Marine Layer)

*Feeling: calm and familiar.*

Name, then price, then at most one muted line. This is what most good stores use when names run long or a description helps. Therabody runs six across at 210px on cream, with the name at 14/500 and a small generation tag beside it. Reformation runs four at 347px on a studio ground, and a heart appears only on hover. Use it for wellness, apparel and any catalogue with longer names. Avoid a three-line description at four across, where it fills the row with grey.

Reserve the height of the longest description, so that every price in the row sits on one baseline. Left-align for most brands. Centre only on small, ceremonial rows.

### Gallery portfolio: peek-rail (seen on Apple Vision Pro, Aman, La Table de Joakim)

*Feeling: there is more, just past the edge.*

Left-aligned to the page grid and running off the right edge, with the next tile cut by the viewport. Apple's rail uses 818 by 528 tiles at radius 20, a 20px gap, a 21px caption below and 36px round arrows right-aligned beneath. Aman uses square destination cards with an underlined link. Loopcraft uses 375 by 560 cards at radius 40. The cut tile is the affordance, so never let tiles end flush with the viewport. Use native horizontal scrolling with `scroll-snap`, which gives touch for free, and add arrows only as an extra. On phones the arrows can go.

```css
section{--edge:max(24px,calc((100vw - 1024px)/2));padding:96px 0}
h2{font:600 48px/1.08 var(--font-display);letter-spacing:-.018em;margin:0 var(--edge) 48px}
.rail{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:var(--edge);padding:0 var(--edge);scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.rail figure{flex:0 0 min(818px,86vw);scroll-snap-align:start}
.rail img{display:block;width:100%;height:528px;object-fit:cover;border-radius:20px;background:var(--surface)}
.rail figcaption{font-size:19px;line-height:27px;color:var(--ink-2);padding:20px 24px 0 0;max-width:30em}
.rail b{color:var(--ink);font-weight:600}
.ctl{display:flex;justify-content:flex-end;gap:12px;margin:24px var(--edge) 0}
.ctl button{width:36px;height:36px;border:0;border-radius:50%;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--ink);font-size:15px}
.ctl button:hover{background:color-mix(in srgb,var(--ink) 14%,var(--bg))}
@media(max-width:760px){section{padding:56px 0}h2{font-size:32px;margin-bottom:24px}.rail{gap:12px}.rail img{height:60vw}.rail figcaption{font-size:16px;line-height:23px}.ctl{display:none}}
```

### Newsletter: link-not-field (seen on Work & Co, Nicole Heim Studio, Poeza)

*Feeling: this page is not for collecting emails.*

No field on the page. Work & Co gives it one row of the page grid: a label at left, a sentence and a Subscribe pill at right, about 120px tall. Nicole Heim lists it as one of three label and value pairs. Poeza makes the whole thing a stacked 80px link. It is the choice gold pages make most, because it keeps the page in its own voice.

```css
.row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,3fr);gap:24px;padding-block:32px;border-bottom:1px solid var(--line)}
.lab{font:500 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row p{font-size:20px;line-height:1.35}
.b{display:inline-flex;align-items:center;height:40px;margin-top:20px;padding:0 20px;border-radius:20px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500}
@media(max-width:700px){.row{grid-template-columns:1fr;gap:8px}}
```

### Pricing table: standard-vs-custom-pair (seen on Stripe Pricing, Parsley Health, Orbit Design)

*Feeling: pay as you go, or talk to us.*

Stripe's pair is the clean answer to usage pricing: a white card with the rate in a tinted panel inset 4px, and a navy card with four stacked chips listing what custom covers. The inset panels repeat the same gap, which ties two different cards together.

### Faq: strong-control-rows (seen on Nurx, Symbol Studio)

*Feeling: a firm ending to a soft page.*

Nurx sets 40px solid discs with a thin white plus at the end of each 88px row, and the control is the only heavy object. Symbol Studio keeps questions grey until hover and uses a 40px disc with an accent plus. A strong control reassures on health and consumer pages where the rest of the design is gentle.

### Closing section: seam-overlap-close (seen on Loops, Buildkite, Vite)

*Feeling: the page is one physical object.*

The close joins the footer as a material fact. Loops ends its light plate in a 50px corner to reveal a deep colour beneath. My first version ran the plate full width and looked like a rounded band. The real plate is also inset about 52px from the left over a stack of brand stripes, and that second edge is what makes it read as a lifted sheet. Buildkite's card straddles a page colour change, with a real window breaking 32px above it. Universally Speaking's chamfered card straddles the footer seam, and Vite's footer overlaps a grain band.

```css
body{background:linear-gradient(90deg,var(--accent) 0 14px,color-mix(in srgb,var(--accent) 80%,var(--ink)) 14px)}
/* inset on the left as well as rounded: two free edges make it a sheet */
.plate{margin-left:52px;background:var(--bg);border-radius:0 0 0 56px;padding:96px 24px 120px}
.close{width:min(1100px,calc(100% - 48px));margin-inline:auto;padding-block:112px 72px;display:flex;align-items:center;justify-content:space-between;gap:40px;color:var(--bg);
  border-bottom:1px solid color-mix(in srgb,var(--bg) 18%,transparent)}
.close h2{font:400 44px/1.1 var(--font-display);letter-spacing:-.015em}
.close p{font-size:17px;line-height:1.4;margin-top:10px;color:color-mix(in srgb,var(--bg) 72%,transparent)}
.pair{flex:none;margin-top:0;gap:10px}
.close .b{background:var(--bg);color:var(--accent)}
.close .b.s{background:none;color:var(--bg);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--bg) 55%,transparent)}
@media(max-width:760px){.plate{margin-left:20px;border-radius:0 0 0 32px}.close{flex-direction:column;align-items:flex-start;padding-block:72px 48px}}
```

### Footer: one-line-colophon (seen on Block, Elyx, Babylonstoren)

*Feeling: honest about its size.*

For a page with few destinations, one row. Elyx sets a single centred line with dot separators directly on its background art. UploadThing runs copyright, three links, a green status dot and three icons under a hairline. Daily uses mono slash-prefixed links in about 100px. Teenage Engineering sets seven thin lowercase links in a 96px black strip. Block pins six links to the bottom of the viewport so they mirror the top row. Svelte uses one centred sentence, because the real footer lives in the docs. A short footer shows confidence, and padding one with columns you do not need is exactly what cheapens it.

### Frames: cutout-on-flat (seen on Apple, Framework, Apple Vision Pro)

*Feeling: clean, confident, retail-grade.*

**Use:** Product ranges, colourways, parts, and a recurring cut-out figure as a small signature. **Avoid:** Soft or hair-edged subjects without a clean mask. A rough cut-out is worse than a rectangle.

Set the object straight on the tile colour with no floor. Group colourways so they overlap: five units across, the group filling about 90% of tile width. Use one soft contact shadow, offset slightly away from the key light. Knolled parts laid in a grid or flat-lay work the same way. For a person, use a transparent cut-out about 80px tall and let it perch on interface edges, changing pose per section. Rotation of -12 to +15 degrees suits snacks and packs with a little parallax. Portraits work the same way: cut people out, stand them on one pale panel, and fix the head height. Thrivent runs five waist-up cut-outs on alternating pale blue and tan panels at radius about 16, with a larger centre panel and heads breaking above the panel tops, which adds life to a strict row. Motusmade sets one on a pale blue panel.

Frame.work was tagged as a 3D render, but the frames show photographed parts, so it is counted here.

### Headline: medium-tight-grotesk (seen on Attio, Apple Intelligence, Work & Co)

Engineered and calm. Says the product is the interesting thing, not the sentence. Seen on 18 sites.

**Use it for:** Product, SaaS, developer tools and fintech, when a real interface or artwork sits directly below. The strongest default when the brief gives no other direction.

**Avoid it for:** When nothing below it is specific. This is the most common look in the corpus, so on an empty page it reads as a template.

**Recipe:** Headline in a neo-grotesque or geometric sans, weight 450-600, 48-72px, line-height 1.0-1.1, tracking -0.02 to -0.03em, one near-black or near-white ink, two lines broken by hand at a phrase, 24-44 characters. Sub at 16-20px, one ink step down, 16-32px below.

**Why it works:** Medium holds its colour at display size without the slab of bold, and tight setting makes a stock face look fitted. If the font offers 510 or 550, use it: those in-between weights exist because 500 can read thin at display size and 600 starts to shout.

```css
.hero h1 { font: 510 64px/1 var(--font-display); letter-spacing: -.022em; max-width: 15em; color: var(--ink); }
.hero p  { margin-top: 24px; font: 400 16px/1.5 var(--font-text); color: var(--ink-2); }
/* Put a real product frame 56px below. The type depends on it. */
```

<a id="crushed-tracking"></a>

### Section headings: ink-then-grey-run-in (seen on Public, Attio, Increase)

The signature of current precision work. One thought, read at two speeds. Seen on 13 sites.

**Use it for:** Any product page. It deletes the eyebrow, title and subhead stack, which is the main cause of template feel.

**Avoid it for:** When the second sentence is filler. The grey half gets read, so it has to say something.

**Recipe:** One paragraph at 32-48px, weight 300-500, line-height 1.0-1.2, left aligned, 780-1150px wide. First sentence in full ink, the rest runs on in the same line at about 6:1 contrast. No eyebrow, no subhead. Repeat for nearly every section. Use text-wrap: pretty, never balance.

**Why it works:** Nine gold sites use it and it has the highest mean score of any common section-heading variant. Balance breaks it, because the tonal change is meant to fall mid-line: pretty keeps the run-on and only protects the last line.

```css
h2      { font: 510 48px/1.04 var(--font-display); letter-spacing: -.022em; max-width: 1150px; text-wrap: pretty; }
h2 span { color: var(--ink-2); }
```

<a id="grey-lead-ink-payoff"></a>

### Primary button: wide-tracked-caps (seen on Snow Peak, KAWARA MUSEUM - LIBRARY, Magram)

*Feeling: a label on a good box.*

A short word in a wide box. Snow Peak sets 282 by 55px, radius 0, 14px caps at 0.2em, and the width ignores the label. The empty space is what feels like print. KAWARA's espresso pill does the same at 300 by 58. Use it for fashion, hospitality, museums and outdoor goods, where a slow pace suits the product. Use it once per view. On a software page it reads as slow.

### Surfaces: floating-utility (seen on International Magic, ACME, Loops)

*Feeling: a small object left on the page.*

A small fixed object that hugs its content. International Magic's caption tray is 56px tall, with width set by the text, so it changes from about 90 to 180px as projects change. Loops replaces the chat bubble with a 160x156 note carrying a calendar icon and a serif title. Anthropic parks a 384x234 news card 24px from the corner. Use one per page. Make it dismissible, and keep it off the content on phones.

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

### Logo: behaving-logo (seen on BIG, Gagosian, Symbol Studio)

*Feeling: alive and quiet. A small motion you notice on the second visit.*

**Use:** Culture, agencies and studios that want one motion signature. **Avoid:** Loud loops. The nav should not perform.

Give the logo one state change. A hero wordmark of about 146 by 46, recoloured per slide, that hands off to a bold 20px version in the bar past the hero, with links shifting about 100px to make room. A 50 by 36 mark of three slanted bars that shears through states on scroll. A wordmark and menu icon sharing one box, so the same weight is either logo or menu.

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

### Page rhythm: hard-midline-panels (seen on Acne Studios, Symbol Studio, Design Podcast (Focus State))

**Feel.** Fashion house. Severe, symmetrical, expensive.
**Use when** every section has a strong image or colour to fill a half. **Avoid** with text-led content.
**Recipe.** Acne Studios: the page divides exactly at x=720. Paired 720px panels butt with zero gutter. News column, newsletter band, footer columns and caption starts all land on 720, then 360px sub-lines at x=370 and x=1090. Focus State builds a whole site from 50% columns. Symbol Studio insets a white sheet 16px on a pale ground with a 1px vertical rule at the centre, and hangs text about 32px off the rule.

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

### Hover: accent-flip (seen on Stripe Pricing, Warp Pricing, Stripe Climate)

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

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

### Showpiece: list-as-display (seen on Public, Leeroy)

The index is the design. Seen on 2 sites.

**Use it for:** Product suites, client lists and services, replacing a grid.

**Avoid it for:** Lists under about eight terms, which look thin.

**Recipe:** A list at 52-64px replaces a grid: centred terms split by 5px squares, or client names stacked, about 86px row pitch. Hover fills a 4px-radius block behind a term. Inline badges can carry live data.

<a id="constructed-letters"></a>

### Atmosphere: hatch-gutters-and-seams (seen on Zed Blog, Astral, Tailwind Docs)

*Feeling: drafting margins.*

**Use it for:** Docs, devtools and mono-technical brands. **Avoid:** Hatch at full ink. At 14% it looked heavy in testing, and 9% looked right.

1px 45 degree hatch, 5px pitch, about 9% ink, filling 12px seams between double rules or 40px columns flanking content. Fine barcode lines at 6px pitch also work. Never under running text.

Tailwind docs fill 40px columns beside the text and bound them with 1px rules, so they read as drafting margins down into the footer. Zed uses 12px strips between sections. Axem uses 62px spacers of 1px vertical lines at 6px pitch in white 8%, which feels rack-mounted. Astral ramps slash density across a patch, and keeps it away from text entirely.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.