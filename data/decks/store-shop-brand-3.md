# Your direction (seed 1043)

Reads as **brand**, surface **store**, register **render-3d** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Stone Island, a gold fashion page)

1. Navigation: `nav.top-bar/mono-instrument-bar`
2. Hero: `hero.full-bleed-media/graphic-plate`
3. Location hours: `section.location-hours/map-as-figure`
4. Product card: `commerce.product-card/bookable-listing-card`
5. Collection grid: `commerce.collection-grid/category-cutout-tiles`
6. Feature tabs: `section.feature-tabs/timed-progress-tabs`
7. Newsletter: `section.newsletter/underline-only-field`
8. Closing section: `section.cta-band/plain-centred-close`
9. Footer: `section.footer/statement-closer`

Build every section with real content. Top store pages run about 4,300 to 8,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Zalando Sans** with **Zalando Sans**. Swiss-leaning and tight, with wdth 125 for labels and wdth 75 for dense headlines.
- Display: 64px, phone 38px, weight 600, tracking -0.03em, leading 1.0. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Zalando Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap

## Palette

From Prägen Hätlen: bg #0d1215, surface #161d25, text #eeeae9, muted #8b9096, accent #bdc3d3. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **host**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `light-arrives-last`, **Scroll** `window-opens-to-full`, **Hover** `row-fill`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Stone Island** (fashion, gold) https://www.stoneisland.com
- Doing: A fashion house typed like an equipment spec sheet: one mono at 14px over viewport-tall campaign photographs and hard black and white flips.
- Why it feels made: The restraint is total and measurable: one family, one size, no radii, no shadows, and a 22px margin with 12px gutter grid that CTAs honour across sections. Hierarchy comes only from weight and case, so photographs and the compass mark carry all the scale.
- If imitated badly: Small mono over dimmed photos only holds with art-directed imagery; with stock shots it becomes a dark template with hard-to-read captions.

**Prägen Hätlen** (brand, gold) https://www.pragenhatlen.com
- Doing: A Swiss watch sold to crypto collectors as a scroll-driven teardown, where one render is pinned, exploded and inspected chapter by chapter.
- Why it feels made: One navy ladder, one periwinkle CTA and one bracketed mono label system hold 16,000px of scroll together. Renders are engineered down to the waffle dial while the interface stays tiny and 2px-radius around them.
- If imitated badly: Without renders of this grade the scrub is just a slow page, and its unbacked fixed nav already collides with scrolled copy.

**Analogue** (ecommerce, gold) https://analogue.co
- Doing: Runs a retro-gaming hardware store like a gallery: one render, one sentence and one black pill per full-bleed block.
- Why it feels made: Renders share the page's exact ground, so products sit in the layout instead of on top of it. Nav, footer and base row all reuse one set of column positions, with two radii and zero shadows across the page.
- If imitated badly: With stock or mid-quality renders the formula collapses, because nothing else on the page carries interest.

## System choices

- Frames: `media.render-3d/machined-on-black`
- Headline: `type.display-headline/light-large-sans`
- Section headings: `type.section-heading/split-heading-and-note`
- Primary button: `button.primary/information-bearing-button`
- Surfaces: `surface.card/photo-overlay-tile`
- Surface ladder: `atmosphere.dark-surface-ladder/tonal-chapter-steps`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.section-rhythm/butted-colour-blocks`
- Load: `motion.load-sequence/light-arrives-last`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `motion.hover-state/row-fill`
- Phone menu: `mobile.phone-nav/bottom-tool-bar`
- Product detail: `commerce.product-detail/colourway-stage`
- Filters: `commerce.filters/quiet-text-filter`
- Cart: `commerce.cart/drawer-recommended-pair`
- Showpiece: `motion.scroll-pin-or-scrub/exploded-teardown`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: mono-instrument-bar (seen on Zed Blog, Zed Pricing, Warp Pricing)

*Feeling: a piece of well-labelled equipment.*

Mono links and visible shortcuts, for developers and technical brands. Zed locks a 56px bar to its 1120 column, with 14px mono links and a keycap beside each action, so every control tells you its shortcut. Warp sets 13px semi-mono links and two 32px blocks at radius 4. Daily prefixes each link with a slash, and its slashes rotate on hover. Inngest and Temporal go to caps. Use it when your audience lives in a terminal. Avoid it for consumer brands, where it reads as affectation.

Set 13 to 15px mono, a 56 to 64px bar, a hairline, radius 4. Keycaps are 16 to 20px tall with a 1px edge. Pair mono links with a sans headline, because the contrast between the two is what looks intentional.

```css
.nav{height:56px;max-width:1120px;margin:auto;padding:0 16px;display:flex;align-items:center;gap:24px;
  box-shadow:inset 0 -1px 0 var(--line);font:400 14px/1 var(--font-mono,ui-monospace,monospace)}
.kbd{height:18px;padding:0 4px;display:inline-flex;align-items:center;border-radius:3px;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:11px;color:var(--ink-2)}
.nav .cta{height:32px;padding:0 6px 0 10px;display:inline-flex;align-items:center;gap:8px;border-radius:4px;background:var(--accent);color:var(--bg)}
```

### Hero: graphic-plate (seen on Increase, Trigger.dev, Benzo)

- **Feels:** Made, not sourced. A crafted brand image.
- **Use when:** You have no photography and do not want to fake it. This is the honest answer for infrastructure and finance.
- **Not when:** The graphic is an aurora gradient or an abstract 3D blob. Those are now stock.
- **Recipe:** A full-width crafted image in place of a photo. Increase folds its mark into a ribbon about 1300px wide from flat polygons, lime through mint to azure, no shadows, with a two-tone headline at 40/48 overlapping it. Trigger.dev renders its own trace view huge at about 30 degrees with depth of field, behind 60px centred copy, with a row of feature tags at the fold. Browserbase frames a dithered bitmap mountain between 1px rules. Axem dissolves stippled dunes into black.

### Location hours: map-as-figure (seen on Nuro, Waymo, Le Saint Georges)

*Feeling: an argument, drawn.*

The map is an illustration that makes a point. Nuro sets a pale grey world on a tinted panel at radius 32, with flat purple ellipse pins and 1px dark lines rising to 24px labels at staggered heights, a small `HQ` outline chip, and upcoming cities in grey. Waymo lists service cities beside a white US map. Le Saint Georges numbers nearby places on a drawn map. Use it to say something a Google embed cannot, such as where you operate, or what is within walking distance. Stagger the labels so the lines become the design, and make the same data available as text. Avoid it when someone needs directions, where a plain link to a maps app serves them better.

### Product card: bookable-listing-card (seen on Sonder, Almeida Theatre, Airbnb)

*Feeling: you could be there on Friday.*

For stays, classes, tickets and homes, where a place and a time matter more than an object. The anatomy changes by what is being booked. Airbnb uses square photos at radius 20, a frosted guest favourite pill, a heart, then two lines with the rate and rating. Sonder sets a 4:3 photo, a rating chip and `US $995 /night` opposite a 32px navy button. Outschool closes with three small stat tiles for grades, group size and price per class. Almeida uses a duotone poster and two 51px buttons, one to read and one to book. Key overlays type on the photo with a notched gold ribbon.

Always give the unit with the rate. Keep the picture true to the room. Local businesses should reach for this card first, since a dentist's appointment or a yoga class is bought the same way. Avoid it for goods that ship, where a place and a date mean nothing.

### Collection grid: category-cutout-tiles (seen on Blue Bottle, Dalco, Snow Peak)

*Feeling: the catalogue's table of contents.*

A group of real products stands for a category. Blue Bottle arranges bags and mugs into small still lifes, each with a soft cast shadow, on white, with a tracked caps label and a short line. Snow Peak uses 330 by 288 tiles at #f8f8f8 with a 24px serif label inside the tile. Dalco lets each plate fade to a darker floor, and hover turns the title to its brand red. Use it when your goods are more legible than a lifestyle shot, as with tools and cookware. Keep every arrangement at the same scale and angle. Avoid it for apparel, which goes limp as a cut-out group.

### Feature tabs: timed-progress-tabs (seen on Bun, Cal.com, Customer.io)

*11 sites, 8 gold, quality 5.* The page feels alive and paced, and a stage tours itself. Use when a person would otherwise miss the later items. Skip it for content that takes long to read.

Recipe: put the indicator on a 1px rule **above** the label, spanning the tab, and fill it left to right as a timer of 5 to 8 seconds. The label never moves. Active label full ink, others about 40 to 60%. Forms: Lithic has right-aligned 24px labels and a 28px ring timer in the corner. Expo and Calvyn pair stacked steps with a small ring and a pause glyph. Cal.com draws an arc along the top of the active row. Inngest fills a 55px segment. Bun and Customer.io pair a list with a live terminal or typed chat, and the line grows along the active row's rule. Dalco uses eight 145px segments along the foot of a full-bleed slide.

Seen on mymind, Lithic, Cal.com, Expo, Inngest, Bun, Customer.io, Leo Cussen, PostHog, Dalco. Suits light precision, gradient light, mono technical, dark precision.

```html
<div class="tabs" role="tablist" aria-label="Features">
  <button class="tab" role="tab" aria-selected="true" aria-controls="v1"><i></i>Sowing calendar</button>
  <button class="tab" role="tab" aria-selected="false" aria-controls="v2"><i></i>Frost alerts</button>
</div>
```

```css
:root { --dur: 7s; }
.tabs { display: grid; grid-template-columns: 1.25fr 1fr 1fr 1fr; gap: 24px; }
.tab { all: unset; position: relative; padding-top: 14px; border-top: 1px solid var(--line); font: 500 22px/1.2 var(--font-text); letter-spacing: -.015em; color: var(--ink-3); cursor: pointer; transition: color .2s; }
.tab[aria-selected="true"] { color: var(--ink); }
.tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.tab i { position: absolute; left: 0; top: -1px; height: 1px; width: 100%; background: var(--accent); transform: scaleX(0); transform-origin: 0 50%; }
.tab[aria-selected="true"] i { transform: scaleX(1); }
.motion .tab[aria-selected="true"] i { animation: fill var(--dur) linear forwards; }
.paused .tab i { animation-play-state: paused !important; }
@keyframes fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.pane { position: absolute; inset: 0; opacity: 0; transition: opacity .5s; }
.pane.on { opacity: 1; }
@media (max-width: 900px) { .tabs { display: flex; overflow-x: auto; gap: 16px; scrollbar-width: none; } .tab { flex: none; min-width: 150px; font-size: 17px; } }
```

```js
// .motion is set in the head only when reduced motion is off, so with it on the timer never runs
const tabs = [...document.querySelectorAll('[role=tab]')], root = document.documentElement, area = document.querySelector('.tray');
function go(i) { tabs.forEach((t, j) => { t.setAttribute('aria-selected', j === i); document.getElementById(t.getAttribute('aria-controls')).classList.toggle('on', j === i); }); }
tabs.forEach((t, i) => {
  t.addEventListener('click', () => go(i));
  t.querySelector('i').addEventListener('animationend', () => go((i + 1) % tabs.length));
});
// hover and focus pause the timer, so nobody loses the panel they are reading
['pointerenter', 'focusin'].forEach(e => area.addEventListener(e, () => root.classList.add('paused')));
['pointerleave', 'focusout'].forEach(e => area.addEventListener(e, () => root.classList.remove('paused')));
```

### Newsletter: underline-only-field (seen on 1X, TR Studio, 1 Hotels)

*Feeling: a line on a page.*

The field is one rule, with the action as text on the same line. It sits lightly on photos and dark blocks. 1X runs 360px right-aligned over a film with 12px text and a 1.5px line. TR Studio centres a 528px field in a flat oxblood block with uppercase placeholder and submit at each end of the rule. Reformation abuts a black square button. Keep placeholder contrast high on images, and thicken the rule on focus, since there is no box to change.

```css
.block{background:var(--ink);color:var(--bg);padding:48px 120px 56px;text-align:center}
.block p{font:500 26px/1.25 var(--font-display)}
form{display:flex;align-items:baseline;gap:16px;margin-top:20px;border-bottom:1px solid currentColor;padding-bottom:6px;text-align:left;transition:box-shadow .15s}
form:focus-within{box-shadow:0 1px 0 currentColor}
input{flex:1;min-width:0;border:0;outline:0;background:none;color:inherit;padding:4px 0;font-size:12px;letter-spacing:.04em;text-transform:uppercase}
input::placeholder{color:color-mix(in srgb,currentColor 72%,transparent)}
button{border:0;background:none;color:inherit;padding:0;font-size:12px;font-weight:500;letter-spacing:.06em;cursor:pointer}
@media(max-width:700px){.block{padding:40px 24px}}
```

### Closing section: plain-centred-close (seen on Resend, Linear, Cursor Pricing)

*Feeling: the page has said enough.*

No card, gradient or glow. It costs nothing and is the most confident choice on the list, and it works in any register. Linear runs 72/72 on page black with about 200px above and below, 44px pills, a bright primary and a 5 percent white secondary. Cursor runs one line at 72px. Polar uses two-tone 48/60 lines. Resend returns to the hero's display face for a second and final time, with a soft gradient on the lines. Analogue sets a three-line statement and a single underlined link.

```css
.close{display:flex;flex-direction:column;align-items:center;padding:200px 24px;text-align:center}
.close h2{font:500 72px/1 var(--font-display);letter-spacing:-.03em;max-width:12em;text-wrap:balance}
.pair{margin-top:40px}
.b{height:44px;padding:0 22px;border-radius:22px;font-size:16px}
.b.s{box-shadow:none;background:color-mix(in srgb,var(--ink) 6%,transparent)}
.b.s:hover{background:color-mix(in srgb,var(--ink) 10%,transparent)}
@media(max-width:700px){.close{padding:128px 24px}.close h2{font-size:44px}.pair{flex-direction:column;width:100%;max-width:280px}.b{justify-content:center}}
```

### Footer: statement-closer (seen on Scale AI, Stripe Sessions, ECI)

*Feeling: the last word.*

The largest thing in the footer is a sentence. Scale AI sets a two-line 116px statement under five small mono columns, then socials and a right-aligned mono legal row. Spring/Summer runs a plain question at about 170px, cropped by the left edge, with a clock and a working-hours line beneath. Stripe Sessions repeats the hero heading, so the page closes on the line it opened with. Fantasy cuts from 14,000px of black to a plain white block with a two-tone invitation at 42/46. Reformation closes on a joke at 48px. Say something true and specific. If the line could go on any site, it is a slogan, and you should use a different ending. Avoid it directly under a big closing call to action, since two shouts in a row cancel out.

### Frames: machined-on-black (seen on Revolut, Lithic, Boom)

*Feeling: heavy, costly, engineered. Light finds the object in the dark.*

**Use:** Premium finance, watches, aerospace, audio, hardware. A closing band or a single hero object. **Avoid:** Friendly consumer products, or anything with no real material to show. Dark drama on a form-builder is a costume.

Pure black ground, with no floor and no glow. Light from thin grazing strips, so detail appears only where the light lands. Satin metal at roughness about .38, with small-scale detail: knurled edges, bevels, vent lines, micro-lettering. Long lens. Stage one object or a tight rhythm, such as three coins with the centre one edge-on, about 800px wide, centred under copy and a white pill. Let a single hue live in one element, such as an iridescent card among black ones, or a red second hand.

```js
import * as THREE from 'three';
// The whole look is here: a black room with bright strips and two large dim soft boxes.
function studio(renderer, tint) {
  const s = new THREE.Scene(); s.background = new THREE.Color(0);
  const panel = (w, h, x, y, z, i, col = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(i), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); s.add(m);
  };
  panel(1, 14, -9, 3, 4, 10); panel(.4, 14, 9, 0, 3, 16); panel(14, .5, 0, 9, 3, 7);  // hard strips draw the edges
  panel(9, 12, -4, 2, 11, .55); panel(6, 12, 6, -2, 10, .28);                          // soft boxes fill the faces
  if (tint) panel(9, 1.2, 0, -7, 4, 26, tint);                                         // coloured strip below the object
  const pm = new THREE.PMREMGenerator(renderer), tex = pm.fromScene(s, .012).texture;
  pm.dispose(); return tex;
}
const steel = new THREE.MeshPhysicalMaterial({ color: 0xc3c7ce, metalness: 1, roughness: .38 });
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
scene.environment = studio(renderer);            // no scene lights at all
const cam = new THREE.PerspectiveCamera(22, aspect, .1, 50); cam.position.set(0, 0, 7.6); // long lens
// Coin body: LatheGeometry from a stepped profile. Knurl: 260 thin boxes in an InstancedMesh around the rim.
// Raised mark: ExtrudeGeometry with bevelSize .016 and bevelSegments 4, so the bevel catches the strips.
```

**In the lab:** Close to Revolut at the second attempt. The first was mirror-black glass. Soft boxes and a roughness of .38 turned it to satin. The knurl and bevels did more for realism than any shader setting.

### Headline: light-large-sans (seen on Stripe Sessions, LiveKit, Affirm)

Elegant, a little fashion. Air around every stroke. Seen on 9 sites.

**Use it for:** Consumer finance, events and brand launches, on dark grounds or plain light ones. One line sets it best.

**Avoid it for:** Busy photographs, thin faces under 48px, and low-contrast greys, which remove strokes altogether.

**Recipe:** Headline in a weight 200-300 sans, at least 64px on light and 48px on dark, tracking -0.02 to -0.04em, line-height 0.85-1.1, one or two lines, on a plain ground. Keep controls at weight 500 so the thin type reads as a decision, not a font-loading fallback.

**Why it works:** Thin strokes survive only through size. Light on dark also looks heavier than the same weight on white, because bright strokes bloom, which is why dark sites can go lighter at smaller sizes.

<a id="heavy-tight-sentence"></a>

### Section headings: split-heading-and-note (seen on Polestar, Greylock, Tally)

Considered and wide. Uses the whole row. Seen on 9 sites.

**Use it for:** Wide containers where a centred block would leave dead margins.

**Avoid it for:** Narrow containers, where the note collapses under the heading anyway.

**Recipe:** Split the row: heading 40-88px on the left, a 16-22px note on the right, top or bottom aligned to the heading, starting just right of centre at about 55% of the container, 420-560px wide. A rail-to-rail rule about 60px below may close the row.

<a id="heading-row-with-action"></a>

### Primary button: information-bearing-button (seen on 1X, Bauhaus Clock, Analogue)

*Feeling: a shop assistant who answers before you ask.*

The control carries a fact as well as a verb. 1X sets a 14px price 16px to the left of a dark pill, so the price reads as part of the control. Bauhaus Clock writes the price into the label on every button. Analogue keeps one 41px pill through Buy Now, Available Now and Sold Out, with a 15px note 16px beneath about shipping. Definitiv Digital replaces a demo button with a 64px portrait of the founder and two lines of text, and a person is harder to ignore than a verb.

Use it for commerce, single-product pages and services sold by a person. Keep the shape fixed across states, and set price in tabular figures.

### Surfaces: photo-overlay-tile (seen on Stone Island, reMarkable, Dalco)

*Feeling: a magazine feature.*

A full-bleed photo with text on it. Radius 0 to 12, gaps 12 to 24. Put scrim only where the text sits: a bottom gradient to 50 or 60 percent black, or a side wash. The best version takes its scrim from the image, as DJI does by fading each photo's sky upward into a flat field drawn from that sky, so the text gets a clean ground that looks native. Use it for commerce, culture and anything with real photography. Never lay a uniform dark overlay across a whole photo, since that flattens the picture to protect three words.

### Surface ladder: tonal-chapter-steps (seen on Prägen Hätlen)

*Feeling: slow descent. Each section is a notch deeper or lighter.*

**Use it for:** Luxury objects and long product stories told in chapters. **Avoid:** Busy pages. The 2% steps vanish under any content that competes.

Long dark page steps through four hard horizontal edges, oklch L .15, .18, .22, .27, about 2% each, in one slate hue, no gradients, then flips to warm paper. Measured #0c1114, #0f161c, #141d24, #212c36.

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

### Page rhythm: butted-colour-blocks (seen on Analogue, Framework, Leo Cussen Centre for Law)

**Feel.** Bold, friendly, poster-like. Colour does the pacing.
**Use when** a consumer brand or culture organisation has a confident palette. **Avoid** in a precision register, and avoid more than one idea per block.
**Recipe.** Full-bleed flat grounds butt directly, with no gutter, gradient or rule. Each block is 500 to 700px and holds one headline, one product, one action. Analogue steps through greys, a diagonal, near-white and black. FigJam alternates three pastels with white across 13,116px. Philadelphia Orchestra lets photo blocks overlap the seams so the bands feel stacked, not stitched. Framework leaves 12 to 16px white gutters between panels.

### Load: light-arrives-last (seen on Stripe Sessions, mymind, Bitnomi)

*Feeling: lit rather than loaded.*

Type and layout are final, then only light changes. Stripe Sessions raises its ribbon from a 25 percent pastel ghost to full saturation by 1.1s, with no slide or scale. mymind's headline goes from 40 percent grey to black, then a gradient ring blooms outward over about 2s. SpaceX lets the planet come up after the copy. Use it for one hero render or glow. It is readable before the show begins, and that is the whole point. A ghost state of the image also means the hero never sits empty.

```css
.render{animation:lit 1s var(--ease-soft) .2s both}
@keyframes lit{from{opacity:.25;filter:saturate(.6)}to{opacity:1;filter:none}}
```

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

### Phone menu: bottom-tool-bar (seen on TypeScript, Svelte, Fishwife)

*Feeling: a tool tray for readers.*

The whole nav moves to the foot, and the top of the page is left free. Svelte sets a 60px white bar with its mark at left and four 32px framed buttons at right: search, type, theme and menu. TypeScript stacks a darker search strip above a blue row of three 16px links. Use it for docs and developer sites, where reading controls deserve to be close. It also keeps a promo strip at the top from competing with a nav. Keep the framed squares at 32px visually, and give each a 44px hit area.

```css
.tools{position:fixed;inset:auto 0 0;z-index:10;display:flex;align-items:center;gap:8px;
  height:calc(60px + env(safe-area-inset-bottom));padding:0 16px env(safe-area-inset-bottom);
  background:var(--bg);box-shadow:0 -1px 0 var(--line)}
.tools .m{margin-right:auto}
.tools button{width:44px;height:44px;margin:-6px -2px;display:grid;place-items:center}
.tools button span{width:32px;height:32px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line-strong);display:grid;place-items:center}
```

### Product detail: colourway-stage (seen on Prägen Hätlen, LEA WINERY, sen knife by Takahashikusu)

*Feeling: the product is in a spotlight.*

The product is the whole first screen. Prägen Hätlen shows a watch at about 430px, with its neighbours at 330px as faint outlines in which only the dial keeps colour, and a large hairline circle behind, on a gradient from paper to navy, with `PREVIOUS` and `NEXT` in 12px mono at the edges. The sen knife page sets a 90px name around a diagonal blade, and the whole ground changes per colour. Use it for one hero object with a few versions, usually at the top of a brand page. Below it you still need a normal way to buy. Avoid it for a range of more than about seven.

### Filters: quiet-text-filter (seen on Kinfolk, X8 Eyewear, Elisa Breyer Archive)

*Feeling: a list, not a form.*

Filtering as plain words. Kinfolk writes its categories as one centred 32px serif sentence, separated by commas. X8 has `ALL` at left and `STYLE` with a small caret at right, on a 1px rule exactly one tile wide. Footer Design uses 12px links with the active one underlined. Elisa Breyer's archive offers four ways of ordering, with a soft pink highlight on the active one. Use it for editorial sites, archives and small collections. Avoid it above about 30 items.

### Cart: drawer-recommended-pair (seen on Kith cart)

*Feeling: a small shop inside the bag.*

Kith goes wide at 600px and uses the room to sell. A 20px serif title with a count, an ink rule, plain links to keep shopping or sign in, a rule, then `Recommended For You` and two horizontal product cards with a 100px grey thumb, a bold caps name, a colour line, a price and a 41px dark full-width add button. Use it for fashion and drops with strong product imagery. At 600px it covers a lot of the page, so it should be earning that space. Avoid it when recommendations are generic, because then the width is wasted.

### Showpiece: exploded-teardown (seen on Prägen Hätlen, Scale AI, VanMoof)

*Feeling: understanding by taking it apart.*

One object separates. Prägen Hätlen scrubs a watch through rotation, explosion and component close-ups over about 16,000px, with ground tone stepping between chapters and a persistent CTA. Plvs Ultra separates a chip stack along dotted guides. Scale AI fans panes in perspective. Use it for physical products and layered systems. Prerender frames unless you have a real model. See `scroll.md` Image sequence scrub on canvas.

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.