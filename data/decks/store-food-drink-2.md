# Your direction (seed 1045)

Reads as **food-drink**, surface **store**, register **type-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Aesop, a silver ecommerce page)

1. Navigation: `nav.floating-pill/detached-corner-controls`
2. Hero: `hero.full-bleed-media/centred-lockup`
3. Feature alternating: `section.feature-alternating/bleed-past-the-edge`
4. Collection grid: `commerce.collection-grid/place-and-date-grid`
5. Product card: `commerce.product-card/stacked-caption-tile`
6. Blog index: `section.blog-index/flush-story-row`
7. Location hours: `section.location-hours/three-column-info-band`
8. Closing section: `section.cta-band/tone-panel-close`
9. Footer: `section.footer/masked-wordmark`

Build every section with real content. Top store pages run about 4,300 to 8,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Funnel Display** with **Fragment Mono**. A fresher headline neutral with a lively ampersand; the mono keeps it precise.
- Display: 64px, phone 38px, weight 500, tracking -0.03em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Fragment Mono 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap https://fonts.googleapis.com/css2?family=Fragment+Mono:ital,wght@0,400;1,400&display=swap

## Palette

From Voice Tag Gods: bg #efefef, surface #e2e2e2, text #1a1a1a, muted #72686a, accent #ff6a1a. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **brand line: a compressed belief, only with a strong image**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `sticky-card-deck`, **Hover** `instant-snap`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Aesop** (ecommerce, silver) https://aesop.com
- Doing: Cream paper store where product bottles, editorial photography and a quiet single typeface let the products carry the page.
- Why it feels made: Restrained tonal palette, small type, abundant whitespace, and photography consistently framed give a boutique feel.
- If imitated badly: Tiny type with no visual hierarchy fails if product photography is weak.

**ACME** (ecommerce, gold) https://acmecups.nz/
- Doing: A tableware shop built as a Swiss spec sheet: a 148px wordmark, hairline table grids and a single orange panel.
- Why it feels made: Everything is Helvetica on a visible hairline grid, with product data presented like a catalogue table, and only one accent colour ever appears. The restraint reads as confident and expensive.
- If imitated badly: Without exact grid alignment and real product photography the grey monochrome turns into an unfinished wireframe.

**Locomotive** (agency, gold) https://www.locomotive.ca
- Doing: An agency site as a typeset document: hairline-ruled lists of serif names on white with black cut-out video figures.
- Why it feels made: Consistent 1px rules, one custom serif and tiny grotesk labels give a gallery-catalogue precision; surprise comes from cut-out 3D people and inline pictograms.
- If imitated badly: Without a custom typeface and the hairline grid, centered serif lists look like a Word document.

## System choices

- Frames: `media.photography/documentary-in-system-tile`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/split-heading-and-note`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.card/media-over-tinted-body`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Hover: `motion.hover-state/instant-snap`
- Phone menu: `mobile.phone-nav/word-for-the-menu`
- Product detail: `commerce.product-detail/option-tiles-with-price`
- Filters: `commerce.filters/accordion-rail`
- Cart: `commerce.cart/drawer-progress-upsell`
- Showpiece: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Showpiece: `motion.marquee/giant-type-marquee`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: detached-corner-controls (seen on 099, Comet, Elyx)

*Feeling: there is no bar, only two buttons.*

The bar dissolves into separate objects. On Perplexity's Comet page the wordmark collapses into a 52px white circle on the left, with a teal pill and a 48px circle on the right. Discord shows its full links at the top, then leaves only a logo pill and a Log In pill. 099 keeps three boxed mono buttons over content. Elyx has one pill and nothing else. Use it for immersive pages, launches and long reads. Avoid it where people need routes, and check that content cannot sit behind the corners at their most awkward moment.

Set 12 to 40px from the edges, soft shadow, 40 to 52px tall. Corners collide with content more often than bars do, so test against your busiest section.

### Hero: centred-lockup (seen on Fred, La Table de Joakim, TR Studio)

- **Feels:** Hospitable, calm, a little ceremonial.
- **Use when:** Hospitality, food and interiors, where the image has no central subject: a pattern, a landscape, a room.
- **Not when:** A face or dish sits at the centre. The type lands on it.
- **Recipe:** A mid-tone image, a flat 20 to 35% overlay or none. Centred headline 40 to 85px, one line of 12 to 17px, a small CTA or text link. This is where generated heroes go wrong, so add an edge. TR Studio breaks its name into the corners at about 90px, with small rotated labels on the sides. La Table de Joakim hangs two small mono captions either side of a 53px title, with its logo top centre and links in the corners. Fred sets one italic word inside a two-line headline. Gagosian stacks four type sizes in a tight block. None of them is just a headline on a photo.

```css
.hero{position:relative;height:100vh;min-height:680px;color:#fff;display:grid;place-items:center;text-align:center;isolation:isolate}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:rgb(0 0 0/.26)}
/* the name goes into the corners, so the frame has an edge before the eye reaches the middle */
.corner{position:absolute;font:400 92px/1 var(--font-display)}
.corner.tl{left:28px;top:18px}.corner.tr{right:28px;top:18px}
.corner.br{right:28px;bottom:18px}.corner.bl{left:28px;bottom:18px}
.side{position:absolute;right:30px;top:50%;font:400 12px var(--font-mono,monospace);
  letter-spacing:.08em;text-transform:uppercase;writing-mode:vertical-rl}
.mid{display:grid;grid-template-columns:230px 660px 230px;align-items:center;gap:36px}
h1{font:400 52px/1.06 var(--font-display);text-transform:uppercase;letter-spacing:.01em;color:#fff}
.note{font:400 12px/1.55 var(--font-mono,monospace);letter-spacing:.04em;text-transform:uppercase;text-align:left}
```

Corners and side labels cost nothing and solve the hero's real problem, which is that a centred stack on a photograph has no edges. Keep them small and true: a place, a date, a year. The corner letters only work if the name has as many letters as you have corners, so otherwise use one short word per corner.

### Feature alternating: bleed-past-the-edge (seen on Spline, Aesop, Fairphone)

*8 sites, quality 4.* Bigger than the page. A window or photo leaves the container and runs off the viewport, which says there is more. Use once or twice, for the most important product moment.

Recipe: a 265 to 360px copy column at the page edge, and a window about 830px wide that passes the container and bleeds off the viewport. Spline adds a 12px mono eyebrow, a 56/64 heading and four 70px-pitch icon rows beside it. For photos, Medusa622 and Aesop let the photo run off one side at a 60px page gutter.

Seen on Spline, VS Code, Aesop, Fairphone, Le Saint Georges, Figma FigJam. Suits dark precision and photo-led.

### Collection grid: place-and-date-grid (seen on Sonder, New Exhibitions, Away Stores)

*Feeling: where to go next.*

For physical locations and events. Away shows three 4:3 store photos at 16px gutters with a 14px city and neighbourhood line and an 11px details arrow. Sonder puts city pills above a four-column grid at 16px gutters. New Exhibitions uses a caption triple of title, venue and date, and hover colours only the title. Use it for shops, branches, hotels and programmes. Every location needs hours and a way to get there on the next click. Hold one crop across the grid, because a photo wall of mixed storefronts falls apart faster than products do.

### Product card: stacked-caption-tile (seen on Therabody, Reformation, Marine Layer)

*Feeling: calm and familiar.*

Name, then price, then at most one muted line. This is what most good stores use when names run long or a description helps. Therabody runs six across at 210px on cream, with the name at 14/500 and a small generation tag beside it. Reformation runs four at 347px on a studio ground, and a heart appears only on hover. Use it for wellness, apparel and any catalogue with longer names. Avoid a three-line description at four across, where it fills the row with grey.

Reserve the height of the longest description, so that every price in the row sits on one baseline. Left-align for most brands. Centre only on small, ceremonial rows.

### Blog index: flush-story-row (seen on Work & Co, Meta AI, Studio Dado)

*Feeling: a small, well-set update.*

No card at all. Work & Co sets a 2×2 of 340 by 191 tiles in a 700px column with square corners, a 20/500 title about 22px below, and one serif sentence ending in a red link. Meta AI runs four items on a 352px pitch, each an 80px thumbnail at radius 20 to the left of a 16/24 title and a 12px caps date, between full-bleed hairlines. Vitsoe sets four 238px columns and lets heights vary. Nuro sets 320px squares at radius 32. Use it as a small news section on a homepage, three or four items, ending in a link to everything. Avoid it as a full archive, because it has no way to hold fifty posts.

### Location hours: three-column-info-band (seen on Almeida Theatre, Fidèle, Eicher Honig)

*Feeling: everything you need, at the bottom of the page.*

A plain band: Hours, Address, Contact or Order in three columns. Republique uses a beige band with 11px caps heads, 12px text and blue-grey pills. Bestia sets four columns in its footer. Almeida lists box office phone and address. Fidèle writes it all as plain 14px blue lines. Deadstock sets a café name and one line of hours in two columns. It is the cheapest entry here and one of the most useful, so nearly every local site should have it. Set the type larger than these examples, at 14 to 16px, since it is often what the visitor came for.

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

### Frames: documentary-in-system-tile (seen on Nuro, VanMoof, ECI)

*Feeling: honest and specific. These people and places exist.*

**Use:** Real teams, events, field work, schools, infrastructure. The default for service businesses that have real photographs of mixed quality. **Avoid:** When the frames are weak and few. Two honest photographs beat six poor ones.

Shoot or select real moments: hands at work, people mid-gesture, equipment in use, wide places with small figures. Do not grade toward a brand tone if the realness is the point. Place every frame in one tile recipe: one radius from 8 to 24px, one or two ratios such as 16:10, and a caption below in 12 to 14px, or one line at bottom-left in white on a calm area. Vary the shot distance from tile to tile, so a fleet gets a night pan, a top-down, a studio cut-out and a close sensor crop.

### Headline: name-as-headline (seen on Apple, Analogue, ACME)

The object needs no selling. Seen on 6 sites.

**Use it for:** Physical products, launches and iconic brands where the name already means something.

**Avoid it for:** Unknown products: if the name says nothing, the visitor learns nothing.

**Recipe:** The product or brand name alone is the headline, 56-80px, weight 500-600, tight tracking, centred, no verb. Beneath it a five or six word promise at 21-28px weight 400, roughly 2:1 with the name. A short status word can replace the promise. Let the object fill the frame.

<a id="poster-anchored"></a>

### Section headings: split-heading-and-note (seen on Polestar, Greylock, Tally)

Considered and wide. Uses the whole row. Seen on 9 sites.

**Use it for:** Wide containers where a centred block would leave dead margins.

**Avoid it for:** Narrow containers, where the note collapses under the heading anyway.

**Recipe:** Split the row: heading 40-88px on the left, a 16-22px note on the right, top or bottom aligned to the heading, starting just right of centre at about 55% of the container, 420-560px wide. A rail-to-rail rule about 60px below may close the row.

<a id="heading-row-with-action"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: media-over-tinted-body (seen on Stripe Climate, Nurx, Therabody)

*Feeling: a printed postcard.*

Image or colour band on top, tinted body beneath, in a colour taken from the brand or the image. Radius 12 to 24, gap 20. Use it for health, consumer and education carousels, and let the row bleed off the edge with the next card peeking. Stripe's Climate version clips the photo's bottom edge at about -6 degrees, which carries the hero's diagonal down the page.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

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

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

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

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: sticky-card-deck (seen on Affirm, Theatre Memory, Per Appelgren)

*Feeling: cards dealt onto a table.*

Each card pins under a heading, and the next slides over it. On Affirm each one sits about 50px lower than the last and widens (1138, 1260, 1320), which gives depth with no shadow, and the top edge of each covered card stays visible with its tag. Use it for three to five parallel ideas: plans, personas, industries. Do not use it for a sequence with an order, which belongs in a step swap. Make's narrower card peeks below the active one, a variation. Plain sticky, no scroll listeners.

```css
.deck{position:relative;padding-bottom:30vh}
.head{position:sticky;top:0;z-index:9;height:128px;background:var(--bg);display:grid;place-items:center}
.card{position:sticky;top:calc(128px + var(--i)*50px);
  width:min(calc(1040px + var(--i)*90px),calc(100% - 32px));margin:0 auto 12vh;height:560px;padding:40px;
  border:1px solid var(--line);border-radius:20px;
  background:color-mix(in srgb,var(--surface) 84%,transparent);backdrop-filter:blur(22px)}
```

The analyst read a blur on the covered card's copy. The blur belongs to the incoming card: a translucent fill with `backdrop-filter`, so covered text softens exactly where it passes under, with no script at all. My first build toggled a blur class on scroll, and it was both more code and less convincing. Any ancestor with `overflow:hidden` silently kills sticky, so check that first if a card will not pin. On a phone, cut the offset to about 24px.

### Hover: instant-snap (seen on Notion About, Cognition, A24)

*Feeling: a switch being thrown.*

Zero transition, deliberately. A24 swaps fills in a hard cut, Cognition snaps a row link to electric blue, Acne Studios and Bun cut instantly. Reads as fast, printed and sure, and it is the cheapest language to build. Use it for type-led, editorial and brutalist sites. It needs a real value change: on a 3 percent tone step, no easing looks like a bug. Notion mixes the two, with an instant button and a 0.15s nav tint.

### Phone menu: word-for-the-menu (seen on Prototype, Structure Consulting Engineers, Cognition)

*Feeling: written, not iconographic.*

No icon at all. Prototype sets an italic 20px Menu with a 1px underline, reusing its own link style. Cognition sets a plain 15px word, in keeping with its refusal of chrome. Studio Dado and Locomotive use a quiet text link top right. Prägen Hätlen sets a mono `[+] MENU`. Use it for studios, editorial and type-led sites. It tells a first-time reader exactly what it does, and it reads as part of the page's voice. Pad it to a 44px target with padding and negative margin, so the text stays small.

```css
.mn{font:italic 400 20px/1 var(--font-display);text-decoration:underline;text-decoration-thickness:1px;
  text-underline-offset:4px;padding:14px 4px;margin:-14px -4px}
```

### Product detail: option-tiles-with-price (seen on Harney product, Money in Check)

*Feeling: the choice is laid out for you.*

When options differ in format or price, put the difference in the control. Harney's three 170 by 108 tiles each carry a tiny merit label in crop-mark corners, such as most popular or best value, with the option name below, and the selected tile takes a 2px line and a pale fill. A book site can run a small table of formats and prices beside one buy button. Use it for up to four options. Past four, go to chips and a separate price line. Avoid it when options differ only in name, where chips are lighter.

### Filters: accordion-rail (seen on OpenRouter models, IKEA Sofas Filters, Rishi-Tea filters)

*Feeling: a proper instrument for a big catalogue.*

A left rail with no card around it. IKEA gives 240px, 48px rows between hairlines, 14/700 labels, and chevrons, with most facets collapsed and binary ones shown inline with a count and a checkbox. OpenRouter does the same at 220px for models. Rishi uses 180px with caps group labels and groups open. Use it past eight facets and for spec-led buying. Avoid it for fewer than about 40 products, because a tall rail next to a short grid looks empty. It also costs a column, so a 1440 screen gets three across rather than four.

Make the rail sticky, or let it scroll on its own. Show a small count on a collapsed group that holds a selection. Apply on change, with no Apply button on desktop, and keep the scroll position.

```css
.shell{display:grid;grid-template-columns:240px 1fr;gap:32px;align-items:start}
.rail{position:sticky;top:16px;border-top:1px solid var(--line)}
.rail details{border-bottom:1px solid var(--line)}
.rail summary{list-style:none;display:flex;align-items:center;justify-content:space-between;height:48px;font-size:14px;font-weight:600;cursor:pointer}
.rail summary::-webkit-details-marker{display:none}
.rail summary em{font:400 13px/1 var(--font-text);color:var(--accent);margin-left:auto;margin-right:10px}
.rail label{display:flex;align-items:center;gap:10px;height:32px;font-size:14px}
.rail label i{font-style:normal;margin-left:auto;font-size:13px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.rail input{appearance:none;width:18px;height:18px;margin:0;border-radius:3px;box-shadow:inset 0 0 0 1px var(--line-strong);display:grid;place-items:center}
.rail input:checked{background:var(--ink);box-shadow:none}
.rail input:checked::after{content:"";width:10px;height:5px;border:solid var(--bg);border-width:0 0 1.6px 1.6px;rotate:-45deg;translate:0 -1px}
```

Native `<details>` gives you a keyboard-ready accordion with no script.

### Cart: drawer-progress-upsell (seen on Drinkolipop cart)

*Feeling: nearly there, and here is what would help.*

Built for low-priced goods sold by the case. Olipop gives a 480px cream drawer a centred display title and, right below it, one line with a progress bar stating the free shipping threshold. Empty, it centres a big headline, a line of copy and a 48px pill. A rail pinned to the base holds 304 by 98 cards with a can, name, price and a 32px outlined plus, plus arrows. The rail stays while the lines scroll, so that adding one more can never loses the shopper's place. Use it for food and drink, and anything where a basket is built from small items. Avoid it for high-ticket goods, where a free shipping bar feels petty.

### Showpiece: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Showpiece: giant-type-marquee (seen on Motto, Motionstrand, Arkansas Museum of Fine Arts)

*Feeling: one last loud moment.*

One huge line runs edge to edge, cropped by both sides. LaunchDarkly runs about 110px of bold type with star separators across a lime footer head. Motto repeats a word at about 120px with an asterisk, second row offset. Spring/Summer rotates one glyph in 3D as the line drifts. Use it once, usually just before the footer. Keep the words readable, since it moves slowly enough to be read a phrase at a time. See `scroll.md` Type that grows or tracks with scroll.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.