# Your direction (seed 1046)

Reads as **food-drink**, surface **store**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Blue Bottle, a gold ecommerce page)

1. Navigation: `nav.top-bar/centred-wordmark-split`
2. Hero: `hero.full-bleed-media/side-column-on-calm-side`
3. Product card: `commerce.product-card/justified-caption-tile`
4. Feature tabs: `section.feature-tabs/index-on-media`
5. Collection grid: `commerce.collection-grid/shelf-baseline-row`
6. Feature alternating: `section.feature-alternating/viewport-chapters`
7. Testimonial: `section.testimonial/display-pull-quote`
8. Closing section: `section.cta-band/split-plain-close`
9. Footer: `section.footer/ghost-wordmark-crop`

Build every section with real content. Top store pages run about 4,300 to 8,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Padyakke Expanded One** with **Geologica**. An odd mix of retro and sci-fi, extremely wide and thin; a single word fills the screen, so give it air.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Geologica 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Padyakke+Expanded+One&display=swap https://fonts.googleapis.com/css2?family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100&display=swap

## Palette

From HAY: bg #f2f2f2, surface #f3efe6, text #0a0a0a, muted #6e6963, accent #d1dee7. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `horizontal-scrub-rail`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Blue Bottle** (ecommerce, gold) https://bluebottlecoffee.com
- Doing: A calm gift-season storefront where dark, moody product photography on moss-green and kraft backdrops carries all the brand, and the UI stays almost invisible.
- Why it feels made: One restrained type system, hairline outlined buttons, alternating white and #f6f6f4 bands and fully consistent product photography make a dense commerce page feel curated rather than busy.
- If imitated badly: Without art-directed cut-out product photography on matched backdrops, the flat white grid and outline buttons would look unfinished.

**X8 Eyewear** (fashion, gold) https://x8.adencys.com/
- Doing: An eyewear store that behaves like a lookbook, using black gutters, pinned spec panels and macro photography so the frames carry every screen.
- Why it feels made: Zero radii, zero shadows and two type sizes leave only image crop, gutter width and panel fill to do the work, and those are exact. Huge empty panels with copy pinned at the bottom give the products gallery-level room.
- If imitated badly: The empty panels and tiny narrow caps only hold with studio-grade product photography; with ordinary images they read as an unfinished page.

**Kinfolk** (editorial, gold) https://www.kinfolk.com
- Doing: A magazine rebuilt as a slow-paced print object, where commissioned photography and one serif do all the work on square white pages.
- Why it feels made: Every block has a different width and scale yet all share 34px gutters, one type voice and zero radius or shadow. Generous white gaps and exact image crops give the expensive pacing of a real issue.
- If imitated badly: Without commissioned photography and a proprietary-feeling serif this is simply a white page with centred text.

## System choices

- Frames: `media.photography/studio-seamless-object`
- Headline: `type.display-headline/caps-block`
- Section headings: `type.section-heading/tracked-caps-heading`
- Primary button: `button.primary/saturated-rect`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/edge-to-edge-ledger`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-pin-or-scrub/horizontal-scrub-rail`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `nav.mobile-menu/colour-room-takeover`
- Product detail: `commerce.product-detail/enquiry-spec-block`
- Filters: `commerce.filters/quiet-text-filter`
- Cart: `commerce.cart/filled-drawer-lines`
- Showpiece: `motion.marquee/ticker-band-divider`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Atmosphere: `atmosphere.image-backdrop/graduated-scrim`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: centred-wordmark-split (seen on Villa Aurelia, Dishoom, Fred)

*Feeling: a shop front or a hotel sign.*

The name sits dead centre and links divide to either side. It is the classic for retail, hospitality, restaurants and culture, where the name is the brand and there is no product to demo. Use it when the wordmark is good. Avoid it for software, where it reads as a boutique, and on phones, where you must collapse one side.

Use a `1fr auto 1fr` grid so the wordmark stays centred however long each side runs. Set 56 to 72px tall, 12 to 13px tracked caps or 16px sentence case, 25px gaps. Acne Studios measures 60px, 12px caps at +0.025em, 10px side inset, zero radius, no CTA. Two details make it look printed rather than templated. Acne pins its links to the top of the row and lets the much larger wordmark take the height, instead of centring everything. Dishoom tracks its caps at about +2px and adds a single 34px outlined pill for the one action.

```css
.nav{position:sticky;top:0;z-index:50;height:60px;padding:10px 10px 0;display:grid;grid-template-columns:1fr auto 1fr;
  align-items:start;background:var(--bg);box-shadow:inset 0 -1px 0 var(--line)}
.nav a{font-size:12px;letter-spacing:.025em;text-transform:uppercase;transition:opacity .15s}.nav a:hover{opacity:.55}
.left,.right{display:flex;gap:25px}.right{justify-content:flex-end}
.nav .word{font:600 34px/40px var(--font-display);letter-spacing:-.02em;text-transform:none}
```

### Hero: side-column-on-calm-side (seen on Framework, Stone Island, Levels)

- **Feels:** Direct, commercial, clear about what it sells.
- **Use when:** The image has a subject on one side and quiet on the other, for hardware, health and retail.
- **Not when:** You have to darken half the image to create the calm. That is `colour-wash-from-one-side`, done badly.
- **Recipe:** Subject in the right 55%. Copy column at the left, vertically centred, at a 56 to 140px gutter: 48 to 68px headline, 16 to 18px sub, a pill or link. Framework colours part of its headline with the accent against a black macro. Betterment measures 68/68 at weight 500, three lines, 550px wide, with three check bullets in the accent. Stone Island drops the copy low left in small type and hangs its one link beside the figure, on the title's baseline.

### Product card: justified-caption-tile (seen on Fidèle, Blue Bottle, X8 Eyewear)

*Feeling: a price list in a good shop window.*

A pale tile and one line under it, with name flush left and price flush right, both aligned to the tile's edges. Repeated across a row, the prices form a column you can read at a glance. It is the most confident default in the corpus. Use it for design goods, books, coffee, and anything with strong packaging. Avoid it for long names, because the line has to hold on one row at 300px. Fidèle sets name and author in two small lines against one price, which handles longer titles.

Tile fill 3 to 5 percent off the page, object at 60 percent of width. Name 12 to 14px, sentence case or tracked caps at .06em. Price matches the name exactly in size. Optional 11 to 12px line in `--ink-2`. Blue Bottle cuts a page-coloured notch into the tile's top right corner to hold its tag, so the label sits on the page and the tile stays clean. That detail costs nothing and makes a badge look built in.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px 24px}
.tile{position:relative;aspect-ratio:1;background:var(--tile);overflow:hidden}
.tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:transform .6s ease}
.card:hover .tile img{transform:scale(1.04)}
.tag{position:absolute;top:0;right:0;padding:6px 8px 6px 10px;background:var(--bg);font-size:11px;line-height:1}
.cap{display:flex;justify-content:space-between;gap:12px;margin-top:12px;font-size:13px;line-height:18px}
.cap h3{font:500 13px/18px var(--font-text);letter-spacing:.06em;text-transform:uppercase}
.cap span{flex:none;font-variant-numeric:tabular-nums}
.sub{font-size:12px;line-height:17px;color:var(--ink-2);margin-top:2px}
@media(max-width:760px){.grid{grid-template-columns:repeat(2,1fr);gap:28px 8px}}
```

### Feature tabs: index-on-media (seen on Revolut, Stone Island, DJI)

*3 sites, quality 4.* The control lives on the image. Use for a full-bleed visual with a few alternatives: products, card types.

Recipe: Revolut sets three 42px pills bottom centre over a full-bleed image, the active one solid white and the rest with a 2px white outline. DJI puts a 14px list bottom left on a 30px rhythm with a small vertical tick. Stone Island uses three 352px columns with a plus and an index, and no bar at all.

Seen on Revolut, DJI, Stone Island.

### Collection grid: shelf-baseline-row (seen on Kinfolk, Taschen, Omega Aqua Terra 150M)

*Feeling: books on a shelf.*

Objects of different heights align to a shared bottom edge, as they would on a real shelf. Taschen runs five columns of covers on white with a soft book shadow, and a small centred caption. Kinfolk shows three issues at 233 by 302, a 13px spaced label, a 25px title and a 20px price, with a lot of air. Use it for books, bottles, records and magazines. In CSS, make the image cell a fixed height and align the image to its end. Reserve the tag line under the shelf, so that prices stay level too. Taschen's book shadow falls short and to the lower right, about 4px, like a real flat lay. A centred soft shadow makes a book look like a web card. Do not force these goods into a square tile, which erases the charm of their differing proportions.

```css
.shelf{display:grid;grid-template-columns:repeat(5,1fr);gap:40px 28px;align-items:end}
.cover{height:300px;display:flex;align-items:flex-end;justify-content:center}
.cover img{max-height:100%;width:auto;box-shadow:3px 4px 6px -1px color-mix(in srgb,var(--ink) 38%,transparent)}
```

### Feature alternating: viewport-chapters (seen on La Table de Joakim, SpaceX, Design Museum)

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

### Testimonial: display-pull-quote (seen on Attio, Greylock, Speakeasy)

*Feeling: the page stops and listens.*

One quote at headline scale, often the only place on the page the second typeface appears. Reserving a serif for this moment is what makes it land: Attio, Convex and Brex all keep a serif for a single quote. Use it once, for your single best sentence. Avoid it if the quote needs more than about 30 words.

Set 48 to 64px on 1.05 leading, tracking -2 to -3 percent, weight 300 to 400, on a measure of 700 to 1220px. Speakeasy runs it between hairlines with a small accent mark in the left rail and the text indented 112px, then a 56px square greyscale portrait, 18px name, mono role, a rule and a grey logo. Attio centres it in a tall cell on a fine dot grid. Greylock colours two phrases in the accent over a stippled map. Keep the mark small and solid, because a big pale one turns the sentence into a poster. For a scroll treatment, Figma fades each word from grey to full ink as you read.

```css
.band{border-block:1px solid var(--line);padding:72px 0 88px}
.in{display:grid;grid-template-columns:112px 1fr;max-width:1392px;margin-inline:auto}
.m{font:600 96px/.74 ui-serif,serif;color:var(--accent);margin-top:8px}      /* set heavier than the quote */
blockquote{font:300 64px/68px var(--font-display);letter-spacing:-.032em;max-width:1216px;text-wrap:pretty}
.by{display:flex;align-items:center;gap:24px;margin-top:40px}
.by img{width:56px;height:56px;object-fit:cover;filter:grayscale(1)}
.by i{width:1px;height:56px;background:var(--line)}
@media(max-width:760px){.in{grid-template-columns:1fr}blockquote{font-size:36px;line-height:40px}.by{flex-wrap:wrap;gap:16px}.by i{display:none}}
```

### Closing section: split-plain-close (seen on Vercel Pricing, Stripe Billing, Amplitude)

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

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

### Frames: studio-seamless-object (seen on Boston Dynamics, Sakara, Apptronik)

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

### Headline: caps-block (seen on Inngest, Bun, Gagosian)

Signage, stencil, poster. Authority by density. Seen on 29 sites.

**Use it for:** Culture, sport, hardware, engineering, developer tools with attitude. Condensed for poster presence at modest width; neo-grotesque for a machine-label feel.

**Avoid it for:** Sentences over about 40 characters, and any page that also uses caps for labels at scale.

**Recipe:** Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

**Why it works:** Only 8.5% of H1s are uppercase, and their median line-height is 1.1. The ones that look designed sit well below that, because caps have no descenders and need far less leading than mixed case.

<a id="wide-heavy-display"></a>

### Section headings: tracked-caps-heading (seen on 1 Hotels, HAY, Xin Cheng Foods)

Engraved, hotel-like, quietly formal. Seen on 6 sites.

**Use it for:** Hospitality, retail, heritage and galleries.

**Avoid it for:** Long titles, and lowercase. Positive tracking belongs to capitals only.

**Recipe:** Modest heading in caps at 20-40px, tracking +0.04 to +0.1em, weight 400-600, in ink or a deep brand colour, left or centred. Reads as engraved, not shouted. Pair with a text link on the same baseline. Keep it under 30 characters.

<a id="emblem-opener"></a>

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

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

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

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: edge-to-edge-ledger (seen on Vite, CSDG Development Group, Driftime Impact Report 2022)

**Feel.** A table the size of the screen. Blunt and confident.
**Use when** content falls naturally into facts, numbers and links. **Avoid** with few items, because empty cells then look unfinished.
**Recipe.** No side margin. 1px rules run viewport edge to edge, and the page splits at 720, then 360. Each cell holds one thing: a number, a claim or a link. Radius 0. Images span 2x2 cells with about 29px inset, or bleed to the rules. On Driftime the rules take the room's ink colour and start and stop with their section, like a newspaper grid.

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: horizontal-scrub-rail (seen on Decagon, Roy Jad, Oliver Dupuy)

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

### Phone menu: colour-room-takeover (seen on Joby, Lightspeed, Locomotive)

*Feeling: you walked through a door into the brand.*

The menu is a flat room of brand colour. Lightspeed uses blush pink with 44px type and 01 superscripts, the page blurring behind as the sheet arrives over about 900ms. Joby uses a saturated blue reached through stacked bands of peach, orange and navy. Locomotive uses electric blue and serif type at the bottom left. Wildbran uses terracotta. Use it for brands with a real colour, on sites where the rest of the page is restrained. It is one of the cheapest ways to look expensive. Check contrast, and use the colour only here.

### Product detail: enquiry-spec-block (seen on Ne Geurra, Aarretuote)

*Feeling: you have to ask, and that is the point.*

For things that are not bought with a click. Ne Geurra lists pieces in a 300px index column beside a 580px photograph, with a 14px grey description and a small `Dimensions` label indented about 60px, and no price or cart. Use it for antiques, furniture, architecture and made-to-order. A local builder or a framer may find this far closer to the truth than a cart. Give the enquiry a clear route: one link, a named person, and a stated reply time.

### Filters: quiet-text-filter (seen on Kinfolk, X8 Eyewear, Elisa Breyer Archive)

*Feeling: a list, not a form.*

Filtering as plain words. Kinfolk writes its categories as one centred 32px serif sentence, separated by commas. X8 has `ALL` at left and `STYLE` with a small caret at right, on a 1px rule exactly one tile wide. Footer Design uses 12px links with the active one underlined. Elisa Breyer's archive offers four ways of ordering, with a soft pink highlight on the active one. Use it for editorial sites, archives and small collections. Avoid it above about 30 items.

### Cart: filled-drawer-lines (seen on Kith cart, Glossier cart, Drinkolipop cart)

*Feeling: your order, clearly.*

The default cart. Fixed header with the count, a progress band, scrolling lines, a fixed footer. Use it for every store. The numbers here come from our own tested render, built on the proportions of the real drawers, because the corpus holds no filled cart.

Lines use an 88px tight-cropped thumb on the tile colour, a 14/500 name, a 13px variant line with the unit price when quantity exceeds one, the line total at the right, a 32px stepper, and a text `Remove`. The footer has subtotal, a note, a delivery date and a 52px Checkout. Name the date in the footer, because it is the last reassurance before payment. Avoid a drawer only for very long baskets, such as groceries, which need a full page.

```css
.prog{padding:12px 20px 14px;font-size:13px;line-height:18px;background:var(--tile)}.prog b{font-weight:500}
.track{height:3px;margin-top:8px;background:color-mix(in srgb,var(--ink) 12%,transparent)}
.track i{display:block;height:100%;width:var(--w);background:var(--ink);transition:width .4s cubic-bezier(.2,.8,.2,1)}
.ln{display:grid;grid-template-columns:88px 1fr auto;gap:0 14px;padding:16px 0;border-bottom:1px solid var(--line)}
.ln img{grid-row:1/4;width:88px;height:88px;padding:8px;object-fit:contain;background:var(--tile)}
.ln h3{font:500 14px/20px var(--font-text)}
.ln .p{font-size:14px;line-height:20px;text-align:right;font-variant-numeric:tabular-nums}
.ln .v{grid-column:2/4;font-size:13px;line-height:18px;color:var(--ink-2)}
.ctl{grid-column:2/4;display:flex;align-items:center;justify-content:space-between;align-self:end}
.qty{display:grid;grid-template-columns:32px 28px 32px;height:32px;align-items:center;text-align:center;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:14px;font-variant-numeric:tabular-nums}
.rm{font-size:13px;color:var(--ink-2);text-decoration:underline;text-underline-offset:3px}
.df{padding:14px 20px calc(16px + env(safe-area-inset-bottom));border-top:1px solid var(--line)}
.sum{display:flex;justify-content:space-between;font-weight:500;font-variant-numeric:tabular-nums}
.df p{font-size:13px;line-height:18px;color:var(--ink-2);margin-top:2px}
.co{display:flex;justify-content:center;align-items:center;width:100%;height:52px;margin-top:12px;background:var(--ink);color:var(--bg);font-weight:500}
```

### Showpiece: ticker-band-divider (seen on Analogue, Headspace, Hibachi Guru)

*Feeling: a bold seam.*

A full-bleed band that doubles as a section break. Analogue uses a thin black strip for a release notice. Hibachi Guru cuts dark video from white page with an orange band. Headspace is the best of the set, a yellow strip whose paired googly eyes aim differently in each instance, so the separator carries the joke. Use it on bold, playful or local brands, at most twice on a page. The separator glyph is where the personality lives, so make one instead of using a dot.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Atmosphere: graduated-scrim (seen on Figure, Boom, a16z)

*Feeling: cinema. Type sits in the shadow at the foot of the frame.*

**Use it for:** Any footage or photo that must carry a headline. **Avoid:** A linear ramp, and a full-frame overlay. Both flatten the image.

Eased black gradient over the lower 30 to 45% only, alpha stops 100, 86, 62, 34, 12, 0%. Headline and mono line sit inside the transition. The top of the frame gets no overlay, so the image keeps its luminance.

```html
<style>
/* set --photo:url(your-image.jpg) on .film. the scrim is the point, so it only reads over a real photograph */
.film{position:relative;height:900px;overflow:hidden;background:#000 var(--photo,none) center/cover;color:#fff}
/* eased, not linear: a straight ramp shows its top edge as a line across the photo */
.film::before{content:"";position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(to top,#000 0,rgba(0,0,0,.86) 22%,rgba(0,0,0,.62) 44%,rgba(0,0,0,.34) 66%,rgba(0,0,0,.12) 84%,transparent)}
.film h1{position:absolute;inset:auto 0 96px;text-align:center;margin:0}
</style>
<div class="film"><h1>Every box, on time</h1></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.