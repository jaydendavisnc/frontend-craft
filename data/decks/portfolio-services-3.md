# Your direction (seed 1068)

Reads as **devtool**, surface **portfolio**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**Certificate inventory for water and power utilities whose OT networks run HMIs and historians with self-signed certificates.**

- Naming: A field-instrument or utility tag word
- Facts to build on: Discovers certs passively from SPAN ports, no agents on PLCs; Maps to NERC CIP or IEC 62443 zones; Warns 180 days before expiry since outage windows are annual; Per site licensing, $1,600 a month
- Their vocabulary: OT, HMI, historian, Purdue level, SPAN port, self-signed, CIP-007, IEC 62443, outage window, jump host, chain of trust

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Purdue zone map.** Horizontal bands Level 0 to 4 with devices as boxes, cert links between, firewall conduits, expired links red Data: Level 3 historian to Level 2 HMI, TLS 1.0, self-signed, expires in 47 days Behaviour: Selecting a conduit traces it through the bands
- **Expiry runway.** X axis months ahead, tiles stacked by month of expiry per zone, annual outage windows shaded Data: 14 certs expire Feb 2027, outage window is Oct: 4 months too late Behaviour: Tiles drop into months; those that miss outage go amber
- **Trust chain card.** Three stacked certificate cards root, intermediate, leaf with fingerprint, key size, algo, valid dates; weak links flagged Data: Leaf CN=HMI-04 RSA 1024, SHA-1, 2018 to 2027: weak Behaviour: Cards unstack on hover and show the signing link

## The page, in order (structure from Alessandro Stella, Art Direction & Design Consultancy, a gold portfolio page)

1. Navigation: `nav.floating-pill/inset-rounded-bar`
2. Hero: `hero.collage/ring-around-headline`
3. Gallery portfolio: `section.gallery-portfolio/lead-mosaic`
4. Contact form: `section.contact-form/routing-list`
5. Closing section: `section.cta-band/half-width-card-close`
6. Footer: `section.footer/large-link-index`

## Type system

**Nixie One** with **Charis SIL**. An elegant thin slab for one or two big words, then a plain reader that asks nothing of it.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Charis SIL 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Nixie+One&display=swap https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400;1,700&display=swap

## Palette

From GitHub Pricing: bg #ffffff, surface #f2f5f3, text #000000, muted #58635b, accent #08872b. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

A still page fails, however clean it is. Build all of this, as one language: **Load** `product-rises-last`, **Scroll** `horizontal-scrub-rail`, **Hover** `instant-snap`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Alessandro Stella, Art Direction & Design Consultancy** (portfolio, gold) https://alestella.com/
- Doing: A portfolio reduced to one centered image at a time and two lines of caption, letting the work carry everything.
- Why it feels made: The restraint is absolute: single typeface, single size, hairline rules, off-white ground and generous margins, so the art direction work is the only decoration. Every spacing is consistent and nothing is boxed.
- If imitated badly: Without world-class imagery and exact centering this becomes an empty, slow template.

**AuthKit** (devtool, gold) https://www.authkit.com/
- Doing: An auth product page that shows the sign-in box itself as the hero, then proves depth with tiny exact UI inside a ruled page frame.
- Why it feels made: The hairline frame, nested tray-and-panel UI and scanline motif recur from hero to compliance badges. Colour is rationed to one indigo button and a dusk gradient.
- If imitated badly: Tight -3px tracking and skeleton UI read as a template if the mini UIs are not real product states.

**White Cube** (culture, gold) https://whitecube.com
- Doing: A white-box gallery site: monochrome type, huge installation photographs and generous gutters so the artworks are the only colour.
- Why it feels made: Strict hierarchy of tiny uppercase labels, italic artwork titles and a single narrow text column; images use true gallery photographs with no overlays, and layout alternates asymmetric text/image pairs with consistent 68px outer margins.
- If imitated badly: Without excellent installation photography and exacting alignment, this restraint reads as an empty template.

## System choices

- Headline: `type.display-headline/crushed-tracking`
- Section headings: `type.section-heading/marked-phrase`
- Primary button: `button.primary/neutral-chip`
- Surfaces: `surface.card/shell-and-well-card`
- Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/knockout-badge-tiles`
- Page rhythm: `layout.grid-system/rule-opened-title-body-split`
- Load: `motion.load-sequence/product-rises-last`
- Scroll: `motion.scroll-pin-or-scrub/horizontal-scrub-rail`
- Hover: `motion.hover-state/instant-snap`
- Phone menu: `nav.mobile-menu/search-first-sheet`
- Showpiece: `motion.product-demo-loop/schematic-traffic`
- Showpiece: `product.animated-demo/typing-composer`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: inset-rounded-bar (seen on ECI, Decagon, Affirm)

*Feeling: a toolbar resting on the page.*

The strongest floating pattern: a full-width bar pulled in from the edges, with a medium radius. It keeps a normal bar's capacity for links and actions, and it reads as modern without looking like a toy. Use it for products with five or more links. Avoid it on image heroes, where a plain transparent row shows more of the picture.

Cal.com measures 8px from the top, 60px at the sides, 64px tall, radius 18, on `rgba(244,244,244,.72)` with blur. Raycast uses 16px from the top, 76px tall, radius 20, a 1px ring of white at 8 percent, near-black at about 80 percent. Svix goes opaque with no shadow at 1216x64. Affirm adds a 1px stroke that is brightest at the top left and fades away, which is a small, expensive detail. Decagon lets the bar sample the colour beneath it, including its footer's gradient.

```css
.nav{position:fixed;z-index:50;top:8px;left:60px;right:60px;height:64px;padding:0 12px 0 28px;display:flex;align-items:center;gap:32px;
  border-radius:18px;background:color-mix(in srgb,var(--ink) 4%,color-mix(in srgb,var(--bg) 72%,transparent));
  -webkit-backdrop-filter:blur(20px) saturate(1.4);backdrop-filter:blur(20px) saturate(1.4)}
.links{display:flex;gap:2px;margin-right:auto}
.links a{display:flex;align-items:center;gap:5px;height:36px;padding:0 12px;border-radius:9px;font-size:15px;transition:background .15s}
.links a:hover{background:var(--hover)}
.cta{height:36px;padding:0 15px;display:inline-flex;align-items:center;border-radius:12px;font-size:15px;font-weight:500;
  background:var(--solid);color:var(--bg);box-shadow:var(--solid-edge)}
@media(max-width:860px){.nav{left:8px;right:8px;padding-left:16px;justify-content:space-between}.links{display:none}}
```

### Hero: ring-around-headline (seen on Claude, Scale AI, Kenzie Fraker)

- **Feels:** A busy, varied world around one clear idea.
- **Use when:** You have many real, good images or tasks.
- **Not when:** The images have different finishes. The ring exposes it.
- **Recipe:** A centred headline with 12 to 30 small tiles around it, 104 to 140px, radius 8, leaving a clear column for the copy. Claude's page alternates photos with pale squares, each with a 13px task caption, fading out toward the bottom. Kenzie Fraker uses about 16 small tilted work cards on a true circle. Tiles shrink with distance, from about 140 to 40px, to imply depth. Scale's version sits mid-page rather than in the hero.

### Gallery portfolio: lead-mosaic (seen on Sonder, Studio Dado, Framer)

*Feeling: an edited front page of images.*

One large tile beside a stack of smaller ones, so the eye gets a hierarchy that a uniform grid cannot give. Oxygen Pictures uses four columns where row one spans 2+1+1 and row two 1+2+1, with tiles of 216 or 404px height, 16px gaps, greyscale film, and deliberate holes in the grid. Studio Dado sets one large landscape beside a 2×2 at 8px gaps under a huge caps title. Sonder runs one tall photo plus six city tiles. Framer sets two rows of live site tiles at radius 15 and 10px gaps, as the first colour after a long black run. The holes matter, because a mosaic with every cell filled turns into a bento. Hold them to the grid. Avoid it with fewer than about six pieces, or when no image is strong enough to lead.

```css
.m{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:216px;gap:16px;padding:24px}
.t{position:relative;overflow:hidden;background:var(--surface);color:#fff}
.t img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter .3s ease}
.t:hover img{filter:none}
.t::after{content:"";position:absolute;inset:auto 0 0;height:96px;background:linear-gradient(transparent,rgba(0,0,0,.72))}
.t div{position:absolute;left:12px;bottom:10px;z-index:1;font-size:15px;line-height:20px}
.t small{display:block;font-size:15px;color:rgba(255,255,255,.55)}
.gap::after{display:none}
.big{grid-column:span 2;grid-row:span 2}
.gap{background:none}
@media(max-width:760px){.m{grid-template-columns:1fr 1fr;grid-auto-rows:44vw;gap:8px;padding:16px}.gap::after{display:none}
.big{grid-column:span 2;grid-row:span 1}.gap{display:none}}
```

### Contact form: routing-list (seen on Sanity Contact, Sora, Fantasy Contact)

*Feeling: the right desk, first time.*

Sanity offers four routes with no field in sight. My first version looked timid, because I took the analyst's 18px titles and pale rules. The real titles are about 22px, the rules are nearly ink, and the descriptions are in ink rather than grey. A list this plain needs that contrast. Sora offers two boxed options with a circular icon each. Fantasy uses a small segmented control above one huge email address.

```css
.wrap{width:min(1120px,calc(100% - 48px));margin-inline:auto;padding-block:120px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.wrap h1{font:400 48px/1.05 var(--font-display);letter-spacing:-.035em}
.more{margin-top:48px;display:grid;gap:12px;font:400 10px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}
.routes a{display:block;padding:16px 0 24px;border-top:1px solid color-mix(in srgb,var(--ink) 62%,transparent);transition:border-color .15s}
.routes a:hover{border-top-color:var(--ink)}
.routes b{display:flex;align-items:center;gap:8px;font:400 22px/1.3 var(--font-display);letter-spacing:-.01em}
.routes svg{width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.4;transition:transform .15s}
.routes a:hover svg{transform:translateX(3px)}
.routes span{display:block;margin-top:8px;font-size:14px;line-height:1.45;max-width:32em}
@media(max-width:760px){.wrap{grid-template-columns:1fr;padding-block:72px}.more{margin-top:24px}}
```

### Closing section: half-width-card-close (seen on Factory)

*Feeling: placed, not stretched.*

Factory's close is a 540px left-aligned card of dark grain lit from one side, with a small mark, a 36/39 heading and a small white mono button, and the right half of the row stays empty. Refusing the full width turns a band into an object. It works above a dark footer of the same family.

### Footer: large-link-index (seen on Nuro, Figure, Prototype)

*Feeling: a table of contents you could read across a room.*

Few links, set large. Nuro runs 20px links on a 37px pitch in two columns at the left, with almost nothing else. Figure numbers six items from 01 to 06 at about 40px with hairlines between. Prototype stacks three words at 120px, right-aligned, beside a looping reel tile. Basement pushes a 38px list to the bottom of a full viewport, keeping small superscript counts. Athletics sets two 22px lists with no headings and nothing else but three corners of small print. Use it when the site has six to ten destinations and the type is good. It fails with long labels and with anything over about ten items.

### Headline: crushed-tracking (seen on Jasper, Vercel AI SDK, Expo)

Dense and deliberate. A sentence that behaves like a logotype. Seen on 14 sites.

**Use it for:** Developer tools, AI and design-led products that need one signature without adding colour. Works on sans at weight 400-600 and on high-contrast serifs.

**Avoid it for:** Faces with a tight default fit, which collapse at these values. Also long lines, and anything under 40px.

**Recipe:** Headline at 56-108px in a sans of weight 400-600 or a high-contrast serif, tracking -0.045 to -0.07em, line-height 0.95-1.1, under 50 characters. Stop while every letter pair still shows a sliver of ground; faces with a tight display cut stop near -0.045em. Relax as size falls: -0.06em at 64px, -0.04em at 48px, -0.015em at 32px.

**Why it works:** The crush is the whole signature, so it has to be visibly chosen. It only reads as a choice while letters stay separate. Measured ladders show tracking is proportional to size: one site goes from -0.047em at 64px to -0.016em at 32px, because a value that looks crisp at 64px clots at 32px. The number is not portable: my first attempt copied -0.06em from a reference onto a face with an optically tightened display cut, and letters fused. The same em value looked fine on a loose-fit grotesque. Judge the gap, not the figure.

```css
h1 { font: 450 64px/1 var(--font-display); letter-spacing: -.045em; max-width: 11em; }
/* Start here and move toward -.06em only on faces with a loose default fit. */
```

<a id="regular-weight-quiet"></a>

### Section headings: marked-phrase (seen on Elyx, Expo, Readwise)

The product's own tools turned on its own headlines. Seen on 9 sites.

**Use it for:** Design tools, note-taking apps, developer products. Choose the device the product really uses.

**Avoid it for:** Marks with no link to the product, which become decoration.

**Recipe:** One phrase in a 32-64px heading sits on a device: flat highlighter block, selection rectangle of radius 4-6px, bounding box with corner handles, inline code chip, or hand stroke. Choose the device the product itself uses. Same device on every section; the tint may change.

**Why it works:** A highlight means something in a reading app, a selection box means something in a design tool, and a code chip means something in a terminal product. The device is borrowed from the product, which is why it does not feel like decoration.

<a id="poster-caps-opener"></a>

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

### Surfaces: shell-and-well-card (seen on Loops, Lindy, Material 3)

*Feeling: a tray holding the proof.*

Two nested layers. An outer card holds the claim, and an inset tinted well holds the evidence: seals, a tick list, a live component. Use it when a card needs to carry something more complex than text without a second border weight. Outer radius 16 to 24 with a hairline, well inset 8px at outer minus 8. Material's variant inverts the idea, with a stage on top in its own colour, its own bottom radius and the caption beneath. Loops repeats one shell for every feature and only swaps the body, which is the strongest version: the shell becomes the page's single system.

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

### Page rhythm: rule-opened-title-body-split (seen on ECI)

**Feel.** Considered, institutional, slightly European.
**Use when** a section has a title, a short body and one image. **Avoid** when body copy is long, since it must fit against the column's bottom.
**Recipe.** A 2px ink rule across 32px gutters opens each section. Title 52/52 at top left, body 20/24 pinned to the bottom of the same column, 681px media at the right from x=727 about 35px below the rule. Title and body sit far apart on purpose. The rule and the column hold them together.

### Load: product-rises-last (seen on Buildkite, Factory, Stripe Billing)

*Feeling: the page is ready, here is the thing.*

Copy and backdrop first, product last. Factory fades its CTAs up from about 12px, then the app window rises from below the panel edge. Stripe Billing lets a browser sheet rise over the ribbon, then populates panels in steps with a chat prompt last. Buildkite then starts its counters ticking. Use it on product marketing heroes. Crop the product at the fold so it has somewhere to rise from. Never delay the CTA, because conversion UI is present from the start on every strong example.

### Scroll: horizontal-scrub-rail (seen on Decagon, Roy Jad, Oliver Dupuy)

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

### Hover: instant-snap (seen on Notion About, Cognition, A24)

*Feeling: a switch being thrown.*

Zero transition, deliberately. A24 swaps fills in a hard cut, Cognition snaps a row link to electric blue, Acne Studios and Bun cut instantly. Reads as fast, printed and sure, and it is the cheapest language to build. Use it for type-led, editorial and brutalist sites. It needs a real value change: on a 3 percent tone step, no easing looks like a bug. Notion mixes the two, with an instant button and a 0.15s nav tint.

### Phone menu: search-first-sheet (seen on Apple Vision Pro, Bun, Affirm)

*Feeling: tell me what you want.*

Search leads the sheet. Apple opens a large field with Quick Links and arrows, fading the page out behind it. Bun drops a white panel with an input and mono tabs for docs, guides and reference, and dims the page to about half. Affirm opens a glass panel with store logos drifting behind it. Use it for stores, docs and large catalogues. Autofocus the field only when the user opened search on purpose, because the phone keyboard covers half of the screen.

### Showpiece: schematic-traffic (seen on Wispr Flow, Cloudflare Workers, Chromatic)

*Feeling: seeing the invisible.*

Draw what the product does and run it. Cloudflare animates packets in a band under the nav, while everything else holds. Chromatic moves a belt of component cards through a scan line, and they change state and pick up a tick. Wispr Flow pulls faded words along a curve into a waveform capsule and sends polished words out on a dark ribbon, which explains the product without a screenshot. Use it for infrastructure and invisible products. Confine it to a band so it never competes with the headline.

### Showpiece: typing-composer (seen on Attio, Claude, Comet)

*Someone is asking it something right now.* Quality 5/5, 5 sites.

**Use:** AI products. The strongest small motion for a prompt-led tool. **Not:** Non-prompt products.

**Recipe:** Composer types real prompts at 24-58ms a character with a slower pause on spaces, then send arrow fills, a shimmering Thinking line, then the answer. Panel tint changes per task. Modify and Replay buttons below. Start from a partial line. Anthropic uses a 320px white composer on a 690x420 sage panel with faint contours. Perplexity runs it huge: 858px composer, 32px type. Cal turns it into a 40px sentence with dashed-underlined tokens that resolve.

```html
<style>
.cv{position:relative;height:420px;display:grid;place-items:center;overflow:hidden;border-radius:6px;background:var(--surface)}
.box{width:320px;padding:12px 12px 10px;border-radius:9px;background:var(--bg);box-shadow:0 1px 2px rgba(0,0,0,.05),0 12px 30px rgba(20,40,30,.1);font-size:14px;line-height:20px}
#t{min-height:40px}#t i{display:inline-block;width:1.5px;height:15px;margin-left:1px;vertical-align:-2px;background:var(--ink);animation:bl 1s steps(2) infinite}@keyframes bl{50%{opacity:0}}
#s{margin:8px 0 0 auto;width:24px;height:24px;display:grid;place-items:center;border-radius:6px;background:color-mix(in srgb,var(--accent) 16%,var(--bg));color:var(--accent);transition:background .2s,color .2s}#s.on{background:var(--accent);color:#fff}
#o{margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-2)}
.shim{background:linear-gradient(90deg,var(--ink-3) 30%,var(--ink) 50%,var(--ink-3) 70%) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:s 1.6s linear infinite}@keyframes s{to{background-position:-200% 0}}
</style>
<div class="cv"><div class="box"><div id="t"></div><div id="s">↑</div><div id="o"></div></div></div>
<script>
const Q=[['Why did freight costs jump 14% in October?','Two carriers moved to peak surcharges on 3 Oct. 61% of the jump sits on the Gulf lanes.']],
 t=document.getElementById('t'),s=document.getElementById('s'),o=document.getElementById('o'),w=m=>new Promise(r=>setTimeout(r,m));
async function play(){for(let n=0;;n++){const[q,a]=Q[n%Q.length];o.textContent='';o.className='';s.classList.remove('on');
 for(let i=0;i<=q.length;i++){t.innerHTML=q.slice(0,i)+'<i></i>';await w(24+Math.random()*34+(' ,'.includes(q[i-1])?40:0))} // human rhythm
 s.classList.add('on');await w(420);o.textContent='Reading the ledger…';o.className='shim';await w(1300);o.className='';o.textContent=a;await w(3200)}}
if(matchMedia('(prefers-reduced-motion:reduce)').matches){t.textContent=Q[0][0];s.classList.add('on');o.textContent=Q[0][1]}else play();
</script>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.