# Your direction (seed 1044)

Reads as **food-drink**, surface **store**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Flavor Dady, a silver food-drink page)

1. Navigation: `nav.top-bar/mono-instrument-bar`
2. Hero: `hero.full-bleed-media/side-column-on-calm-side`
3. Feature grid: `section.feature-grid/photo-overlay-cards`
4. Product card: `commerce.product-card/bookable-listing-card`
5. Menu or catalog: `section.menu-or-catalog/service-price-panels`
6. Feature alternating: `section.feature-alternating/shifting-ratio-tiles`
7. Contact form: `section.contact-form/stepped-form`
8. Closing section: `section.cta-band/pattern-edged-panel`
9. Footer: `section.footer/offset-sitemap`

Build every section with real content. Top store pages run about 4,300 to 8,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Stardom** with **Commissioner**. Fat stems against hairlines for one masthead, with a quiet humanist sans doing the rest.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Commissioner 14px 500. Label: sentence case
- Load: https://api.fontshare.com/v2/css?f[]=stardom@400&display=swap https://fonts.googleapis.com/css2?family=Commissioner:slnt,wght,FLAR,VOLM@-12..0,100..900,0..100,0..100&display=swap

## Palette

From Lil Italy: bg #ffffff, surface #fff2ea, text #663c2e, muted #8c6a58, accent #7e1a0f. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **host**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-then-media`, **Scroll** `section-theme-shift`, **Hover** `label-roll`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Flavor Dady** (food-drink, silver) https://www.flavordady.com/
- Doing: A friendly drinks brand site using a maroon and cream palette, rounded type and a character mascot to sell a range of bottles.
- Why it feels made: Tight palette discipline (maroon, cream, product colours) and consistent rounded radii keep a playful brand coherent.
- If imitated badly: Rounded fonts plus cartoon illustration go childish if the product photography is weak.

**Boudin Bakery** (food-drink, silver) https://boudinbakery.com
- Doing: Heritage bakery uses a seasonal hero carousel, warm brown and cream bands, and red uppercase buttons.
- Why it feels made: The photography is excellent and consistent, with a clear red-and-brown brand system and practical order paths.
- If imitated badly: Faint line-art watermarks and stacked red buttons look dated if the photography is not this strong.

**TR Studio** (architecture, gold) https://trstudio.co.uk/
- Doing: An architecture studio's site where the monogram stays pinned to the viewport corners and projects drift through a bone-coloured frame like rooms seen through a doorway.
- Why it feels made: Four fixed corners, two rotated labels and one centre axis hold the page, so photographs can vary freely, and colour steps from bone to oxblood to periwinkle with no radii, shadows or rules.
- If imitated badly: Without top-tier interior photography and a properly drawn monogram, the empty frame looks unfinished and the centred axis looks like a wedding template.

## System choices

- Frames: `media.photography/uncropped-native-plate`
- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/eyebrow-title-lede-stack`
- Primary button: `button.primary/neutral-pill`
- Surfaces: `surface.card/edge-signature-card`
- Surface ladder: `atmosphere.light-surface-ladder/cream-section-bands`
- Logo: `media.logo-mark/cut-letterform`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/colour-plate-then-media`
- Scroll: `motion.scroll-pin-or-scrub/section-theme-shift`
- Hover: `motion.hover-state/label-roll`
- Phone menu: `nav.mobile-menu/colour-room-takeover`
- Product detail: `commerce.product-detail/set-includes-bundle`
- Filters: `commerce.filters/accordion-rail`
- Cart: `commerce.cart/drawer-guided-rows`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Atmosphere: `atmosphere.pattern/shaped-section-edge`

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

### Hero: side-column-on-calm-side (seen on Framework, Stone Island, Levels)

- **Feels:** Direct, commercial, clear about what it sells.
- **Use when:** The image has a subject on one side and quiet on the other, for hardware, health and retail.
- **Not when:** You have to darken half the image to create the calm. That is `colour-wash-from-one-side`, done badly.
- **Recipe:** Subject in the right 55%. Copy column at the left, vertically centred, at a 56 to 140px gutter: 48 to 68px headline, 16 to 18px sub, a pill or link. Framework colours part of its headline with the accent against a black macro. Betterment measures 68/68 at weight 500, three lines, 550px wide, with three check bullets in the accent. Stone Island drops the copy low left in small type and hangs its one link beside the figure, on the title's baseline.

### Feature grid: photo-overlay-cards (seen on Dishoom, Kinfolk, Wealthfront)

*9 sites, quality 4.* Warm and human. Use it for people, places and goods when text can live on the image: wealth stories, hotels, gyms, restaurants. Skip it for products that need explaining.

Recipe: two to five cards with 16 to 24px gaps, about 421 by 500px, radius 8 to 16 or 0 for luxury. A small translucent pill top left, 11px tracked caps. A 24 to 28px title and one line at the foot, with a bold lead that continues into regular weight. A 40px white circle arrow bottom right. Dishoom's form replaces all of this with an inset double-rule label box, which suits hospitality.

Seen on Wealthfront, Dishoom, Kinfolk, Huel, Isola Bella, Lucid. Suits photo-led, warm neutral, bold colour.

```css
.c { position: relative; display: block; aspect-ratio: 421/500; border-radius: 16px; overflow: hidden; color: #fff; text-decoration: none; isolation: isolate; }
.c img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; transition: transform .6s cubic-bezier(.2,.7,.2,1); }
.c:hover img { transform: scale(1.03); }
/* darkens only where the type sits; the top half of the photo stays untouched */
.c::after { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.5) 24%, transparent 50%); }
.tag { position: absolute; left: 16px; top: 16px; padding: 7px 10px; border-radius: 99px; background: rgba(0,0,0,.4); backdrop-filter: blur(8px); font: 600 11px/1 var(--font-text); letter-spacing: .05em; text-transform: uppercase; }
.txt { position: absolute; left: 24px; right: 80px; bottom: 24px; }
.txt h3 { font: 600 26px/1.15 var(--font-text); letter-spacing: -.015em; }
.go { position: absolute; right: 20px; bottom: 24px; width: 40px; height: 40px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; }
```

### Product card: bookable-listing-card (seen on Sonder, Almeida Theatre, Airbnb)

*Feeling: you could be there on Friday.*

For stays, classes, tickets and homes, where a place and a time matter more than an object. The anatomy changes by what is being booked. Airbnb uses square photos at radius 20, a frosted guest favourite pill, a heart, then two lines with the rate and rating. Sonder sets a 4:3 photo, a rating chip and `US $995 /night` opposite a 32px navy button. Outschool closes with three small stat tiles for grades, group size and price per class. Almeida uses a duotone poster and two 51px buttons, one to read and one to book. Key overlays type on the photo with a notched gold ribbon.

Always give the unit with the rate. Keep the picture true to the room. Local businesses should reach for this card first, since a dentist's appointment or a yoga class is bought the same way. Avoid it for goods that ship, where a place and a date mean nothing.

### Menu or catalog: service-price-panels (seen on Sam Hoult Beauty, Origin Wellness Spa, Crescent Dental)

*Feeling: a clear price list from someone who cares.*

For salons, clinics, gyms and trades, the menu is a price list. Sam Hoult sets tinted panels in two columns at radius 24 with a pale double frame, a 30px light category title, and 16px rows on a 34px pitch with right-aligned prices, 13px notes under a row, and a rule above conditions such as a patch test. No leaders are needed, because the panel is narrow. Origin Wellness alternates treatments with big rounded photos, ticks and a small Book pill. Crescent Dental uses tall portrait cards. Prices shown up front are what make a local business feel honest, so show them, or at least a `from` figure. Avoid it if every job is quoted individually, where one `from` price and a contact route serve better.

```css
.g{max-width:1200px;margin:0 auto;padding:32px;columns:2;column-gap:20px}
.p{break-inside:avoid;background:var(--surface);border-radius:24px;padding:48px 48px 44px;margin-bottom:20px;
 box-shadow:0 0 0 6px var(--surface),0 0 0 7px color-mix(in srgb,var(--accent) 28%,transparent);margin:8px 8px 28px}
.p h2{font:300 30px/1.2 var(--font-display);color:var(--accent);margin-bottom:24px}
.p h2:not(:first-child){margin-top:32px}
.r{display:grid;grid-template-columns:1fr auto;font-size:16px;line-height:34px;font-variant-numeric:lining-nums tabular-nums}
.r small{grid-column:1/-1;font-size:13px;line-height:17px;color:var(--ink-2);margin:-4px 0 10px}
.fine{margin-top:18px;padding-top:16px;border-top:1px solid color-mix(in srgb,var(--accent) 35%,transparent);font-size:13px;color:var(--accent)}
@media(max-width:760px){.g{columns:1;padding:16px 8px}.p{padding:28px 24px;border-radius:20px}}
```

### Feature alternating: shifting-ratio-tiles (seen on VanMoof, Apptronik, UNITO)

*5 sites, quality 4.* A zigzag with the stiffness removed. Use with big images and short copy, in hardware, retail and interiors.

Recipe: pairs of tiles 16px apart, radius about 15. Row one 778 and 582px, row two 545 and 817. The text tile is a flat one-step grey, with 25px padding and a 32px heading plus 17/29 body, weighted to the bottom. Unito overlaps its rows by about 180px, so the next image starts before the last one ends.

Seen on Apptronik, Unito, xtrackr, VanMoof, Vrdnt Work. Suits light precision, photo-led, warm neutral.

### Contact form: stepped-form (seen on Stripe Contact Sales, Intercom Contact, Golden Assisted)

*Feeling: this will be quick.*

Split a long form into steps so that the first looks easy. Intercom's first step asks only for email and company size, beside a sky panel carrying logos, with a mono step count. Stripe sets a 608px card with three tab markers over its ribbon and labels at the left of each field. Figma centres a 540px form of filled fields with labels inside, a "Step 1 of 2" caption and a black Next. The analyst read these fields as 46px tall, and they are about 58px, which leaves room for the label inside. Magram numbers its tabs 01 to 03. Golden uses large option rows rather than inputs, so a question takes one tap.

```css
.wrap{width:min(540px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.step{display:flex;justify-content:space-between;font-size:13px;color:var(--ink-2);margin-bottom:10px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.f{position:relative;margin-bottom:8px}
/* the label sits inside the filled box, so the box is the only surface and nothing needs a border */
.f label{position:absolute;left:10px;top:8px;font:400 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.02em;text-transform:uppercase;color:var(--ink-2);pointer-events:none}
.f input,.f select{width:100%;height:58px;padding:22px 10px 6px;border:0;border-radius:8px;background:var(--surface);font-size:16px;outline:0;box-shadow:inset 0 0 0 1px transparent;transition:box-shadow .12s;appearance:none}
.f input:focus,.f select:focus{box-shadow:inset 0 0 0 2px var(--ink)}
.f svg{position:absolute;right:12px;top:22px;width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.5;pointer-events:none}
form button{width:100%;height:46px;margin-top:8px;border:0;border-radius:8px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
```

### Closing section: pattern-edged-panel (seen on Jasper, Lithic, Canopy)

*Feeling: decorated with restraint.*

A pale panel with a field of pattern and the middle cleared. This is the cheapest way to get a designed close with no art budget. Lithic's panel is 282px tall with an inset of 24 and radius 24, and thin rings radiate from around the button, so the pattern points at the action. Jasper builds pixel blocks in brand colours at both sides. Canopy lays contour rings in a tone-on-tone navy. My rings came out close at once, using one repeating gradient. The real ones add a thick accent crescent at the far edge, so vary the weight if you can draw it.

```css
.panel{position:relative;overflow:hidden;isolation:isolate;height:282px;border-radius:24px;background:var(--surface);display:flex;align-items:center;justify-content:center;gap:28px;padding:0 48px}
/* centred on the button, not the panel, so the pattern points at the action */
.panel::before{content:"";position:absolute;z-index:-1;inset:0;opacity:.42;
  background:repeating-radial-gradient(circle at var(--cx,72%) 50%,transparent 0 54px,var(--accent) 54px 55px);
  -webkit-mask-image:linear-gradient(90deg,transparent 18%,#000 62%);mask-image:linear-gradient(90deg,transparent 18%,#000 62%)}
.panel h2{font:700 32px/1.15 var(--font-display);letter-spacing:-.02em;text-wrap:balance}
.b{flex:none;gap:6px;height:40px;padding:0 16px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:600}
.b svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.7;transition:transform .15s}
.b:hover svg{transform:translateX(2px)}
@media(max-width:760px){.panel{height:auto;flex-direction:column;align-items:flex-start;gap:20px;padding:40px 24px;--cx:64%}
  .panel::before{-webkit-mask-image:linear-gradient(180deg,transparent 30%,#000);mask-image:linear-gradient(180deg,transparent 30%,#000)}}
```

### Footer: offset-sitemap (seen on Attio Pricing, Customer.io, 1X)

*Feeling: nothing to prove.*

The logo sits alone at top left, and the columns begin about a third of the way across, leaving the left third empty on purpose. That empty space is the whole design, because it says the company does not need to fill anything. Use it for product companies with 20 to 60 links on a dark or plain ground. Avoid it with fewer than three columns, where the page goes lopsided.

On Linear the columns sit on a 224px pitch from x=304, with 14px heads, 14px links on 30px rows, about 48px between a head and its first link, and legal about 100px below the last link. Attio starts at x=488, stacks several groups per column, tags items with small blue `New` chips, and marks external links with a tiny arrow.

```css
.foot{border-top:1px solid var(--line);padding:56px clamp(24px,5.5vw,80px) 48px}
.foot-in{display:grid;grid-template-columns:repeat(6,minmax(0,224px));max-width:1280px;margin:0 auto}
.mark{width:20px;height:20px;border-radius:50%;background:var(--ink)}
.col b{display:block;font:500 14px/20px var(--font-text);color:var(--ink);margin-bottom:24px}
.col a{display:block;font-size:14px;line-height:30px;color:var(--ink-2);transition:color .15s}
.col a:hover{color:var(--ink)}
.legal{grid-column:2/-1;margin-top:64px;display:flex;gap:24px;font-size:12px;color:var(--ink-2)}
@media(max-width:760px){.foot{padding:40px 16px}.foot-in{grid-template-columns:1fr 1fr;gap:32px 16px}.col a{line-height:44px}.legal a{line-height:44px}.mark-cell,.legal{grid-column:1/-1}.legal{margin-top:0}}
```

### Frames: uncropped-native-plate (seen on BIG, Alessandro Stella, White Cube)

*Feeling: curatorial. The work is left alone.*

**Use:** Portfolios, galleries, architecture, museums, anything where the image is the product and cropping would be an insult. **Avoid:** Thin libraries, or commerce grids that need equal cells to compare items.

Show each image at its native ratio with no radius, shadow, tint or caption inside. Pick one fixed dimension. Fixed height of up to 720px suits a one-at-a-time sequence: Alessandro Stella uses about 576 by 720 for portrait and about 1280 by 720 for landscape. A fixed column of 330 to 420px suits a dense index, with heights left unequal so tall images become rhythm breaks. Keep the interface in one or two neutrals, so all colour comes from the work. Set scans raw and let each object's own edge be the frame.

```css
.plates { display: flex; gap: 64px; align-items: center; justify-content: center; }
.plate img { height: min(62vh, 720px); width: auto; display: block; }   /* height is fixed, width stays native */
.plate figcaption { margin-top: 14px; text-align: center; font-size: 13px; line-height: 1.3; }
.plate figcaption em { color: var(--ink-2); }
```

**In the lab:** Rendered with a square and a 3:2 frame at equal height, and it matched the Alessandro Stella frames. Fix the height, not the width.

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

### Section headings: eyebrow-title-lede-stack (seen on Apple Intelligence, Stripe Atlas, AuthKit)

Orderly and document-like. Safe when applied exactly. Seen on 13 sites.

**Use it for:** Long product pages and docs where consistency matters more than voice.

**Avoid it for:** Used loosely it is the template stack. Gaps must be identical on every section.

**Recipe:** Left or centred stack repeated identically on every section: label at 12-20px, H2 at 36-52px weight 500-600, lede at 18-21px line-height 1.4-1.55 in the second ink, capped at 640-840px. Gaps 8-24px. Keep the three steps in one family, or two at most.

**Why it works:** Stripe-style pages make the eyebrow the same size as body copy, so it reads as the first line of the heading and the whole stack looks like one document.

```css
.eb { font: 500 18px/1.3 var(--font-text); color: var(--accent); }
h2  { font: 500 38px/1.26 var(--font-display); letter-spacing: -.005em; margin-top: 24px; }
p   { font: 400 18px/28px var(--font-text); margin-top: 24px; max-width: 680px; color: var(--ink-2); }
```

<a id="bare-statement"></a>

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

### Surfaces: edge-signature-card (seen on Stripe Connect, Universally Speaking, Queen's University Library)

*Feeling: an owned shape.*

An ordinary card with one owned edge: a chamfer, a corner bitten by a circle that holds an arrow, a folded corner, a coded top bar. Stripe Connect uses an 8px top bar, and Queen's University a 66px white circle holding a 46px arrow disc. This is one of the cheapest ways to get a signature, because the card can stay plain. Apply the same edge to every card and at least one other object, or it reads as a one-off. Avoid it if the page already has a signature.

### Surface ladder: cream-section-bands (seen on reMarkable, Function Health, Brilliant)

*Feeling: soft and domestic. Sections shift the way light shifts across a room.*

**Use it for:** Health, wellness, consumer devices, ecommerce, food. **Avoid:** Developer tools. Cream reads as lifestyle.

Full-bleed bands step #fcfbf8, #f9f6f1, #f3efe7, about 1.5 to 2.5 L* apart, oklch C under .012, no rules, no shadows, 100 to 140px padding. The colour change is the divider. End on a warm near-black footer.

Stronger creams measured on cream-led brands: #fffcf5, #f7f3e9, #f0e9db and #fef9ef, #f5eee1. Only a brand that means cream should go that yellow.

```html
<style>
/* each band is one step. the colour change is the divider, so there is no rule and no shadow */
:root{--s1:#fcfbf8;--s2:#f9f6f1;--s3:#f3efe7;--ink:#252525;--ink-2:rgba(37,37,37,.72)}
.band{padding:120px 40px;color:var(--ink)}
.band p{color:var(--ink-2)}
</style>
<section class="band" style="background:var(--s1)"><h2>A quieter queue</h2><p>Step one.</p></section>
<section class="band" style="background:var(--s2)"><h2>Three ways to plan</h2><p>Step two, about 1.5 L* down.</p></section>
<section class="band" style="background:var(--s3)"><h2>It holds the thread</h2><p>Step three, about 2.5 L* further.</p></section>
```

### Logo: cut-letterform (seen on Bakstad Construction, Concrete, Arkansas Museum of Fine Arts)

*Feeling: industrial or architectural, with a quiet edge.*

**Use:** Construction, museums, property, events. Brands where one expressive element sits inside neutral type. **Avoid:** Light typefaces. A cut needs heavy strokes to read.

Take a heavy display weight and make one clean cut. A thin horizontal slice through the upper letter band, at about 34% of cap height. Stencil gaps in every bowl of a heavy lowercase serif, shown at about 380px in the intro and about 160px on phone, with a single letter on a rail. A hairline diagonal slash taller than the letters, splitting two colours. Everything else on the page stays neutral.

**In the lab:** Worked at all sizes once the cut was at least 1px. The slice left a stray dash where it crossed the apex of an A, so choose the height by looking.

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

### Load: colour-plate-then-media (seen on ECI, Prägen Hätlen, Scale AI)

*Feeling: designed before it has even loaded.*

A flat plate in the footage's own colour holds the hero, with type already on it. ECI's plate is a deep green exactly the size of the video, and at 1.9s it still reads as a finished poster. The footage arrives near 3s and nothing moves. The analyst's estimate of 1.5s was optimistic. That is the point of the pattern: it does not matter when the video lands. Sample the plate from the first frame of the media, because a mismatched plate flashes. Use it for any full-bleed film or photo. For repeat variants, a blurred thumbnail of the first frame works as the plate.

```html
<div class="stage" style="background:var(--plate)"><!-- --plate is sampled from the media's first frame -->
  <video muted playsinline autoplay loop oncanplay="this.parentNode.classList.add('ready')"></video>
  <h1>Headline stays put</h1>
</div>
```
```css
.stage{position:relative;overflow:hidden}
.stage video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.2s var(--ease-soft)}
.stage.ready video{opacity:1}
.stage h1{position:relative;color:#fff}
```

Start the fade from the media's own ready event. A fixed delay flashes on a fast connection and arrives late on a slow one.

### Scroll: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Hover: label-roll (seen on Wildbran, Ideogram, Lazy Eight)

*Feeling: a departures board.*

Two stacked labels in one line box, one rolling out as the other rolls in. Ideogram translates 13px with a fade over 0.32s, and Lazy Eight rolls 15px over 0.46s, both on `.22,1,.36,1`. Fills never change, so the motion is the whole response. Use it on agency, fashion and brand CTAs. It is too much for tools with many buttons. See `interaction.md` Label roll.

```html
<a class="roll"><em><span data-t="Book a table">Book a table</span></em></a>
```
```css
.roll{--lh:20px}
.roll em{display:block;overflow:hidden;height:var(--lh);font-style:normal}
.roll span{display:block;line-height:var(--lh);transition:transform .4s var(--ease-settle)}
.roll span::after{content:attr(data-t);display:block}
.roll:hover span{transform:translateY(calc(var(--lh)*-1))}
```

Clip the line box, not the button. My first version set `overflow:hidden` on the 40px button, and the second label showed under the first at rest. Pseudo-element text is ignored by most screen readers, which is what you want here.

### Phone menu: colour-room-takeover (seen on Joby, Lightspeed, Locomotive)

*Feeling: you walked through a door into the brand.*

The menu is a flat room of brand colour. Lightspeed uses blush pink with 44px type and 01 superscripts, the page blurring behind as the sheet arrives over about 900ms. Joby uses a saturated blue reached through stacked bands of peach, orange and navy. Locomotive uses electric blue and serif type at the bottom left. Wildbran uses terracotta. Use it for brands with a real colour, on sites where the rest of the page is restrained. It is one of the cheapest ways to look expensive. Check contrast, and use the colour only here.

### Product detail: set-includes-bundle (seen on Brightland product)

*Feeling: nothing has been left out.*

Brightland's buy box turns the contents into the pitch. Two 656px columns, a 40px title, stars and a link, a 24/700 price, a bold one-line lead, then a rule, a tracked label, and five rows of 70px thumbnails at a 76px pitch, each with a name and a line. A 55px full-width button holding the price closes it. Use it for gifts, kits and any set where value comes from the sum. Use real thumbnails of each part, since a list of words misses the point. Avoid it for a set of two, where one sentence is enough.

```css
.items{list-style:none;padding:0;margin-top:14px;display:grid;gap:6px}
.items li{display:grid;grid-template-columns:70px 1fr;gap:16px;align-items:center}
.items img{width:70px;height:70px;padding:8px;object-fit:contain;outline:1px solid var(--line);outline-offset:-1px}
.items b{display:block;font-weight:400;font-size:16px;line-height:22px}
.items span{display:block;font-size:14px;line-height:20px;color:var(--ink-2)}
.atc{display:block;width:100%;height:56px;margin-top:24px;background:var(--ink);color:var(--bg);font:500 18px/1 var(--font-text);font-variant-numeric:tabular-nums}
```

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

### Cart: drawer-guided-rows (seen on Fromourplace cart, Allbirds cart)

*Feeling: a helpful assistant at the door.*

An empty drawer that sends you somewhere. Our Place uses a 422px drawer on warm off-white, a 48px header, a 24/36 two-line message, a small caps label, and five outlined rows at 374 by 66, radius 4, with a tight 48px product cut-out and a 14px label, at 16px gaps. A pinned `Shop all products` closes it. Allbirds uses a stack of black pills. Use it for any store with clear departments. Rows should name real best sellers or departments, in the store's own words. Avoid it for a store of fewer than about five products, where a direct link is simpler.

```css
.b{flex:1;padding:32px 24px;overflow:auto}
.b h2{font:400 24px/36px var(--font-display)}
.lb{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2);margin:24px 0 16px}
.r{display:flex;align-items:center;gap:16px;height:66px;padding:0 16px;margin-bottom:16px;box-shadow:inset 0 0 0 1px var(--ink);border-radius:4px;font-size:14px;transition:background .15s}
.r:hover{background:var(--surface)}
.r img{width:46px;height:46px;object-fit:contain}
.f{padding:16px 8px;border-top:1px solid var(--line)}
.f a{display:grid;place-items:center;height:48px;box-shadow:inset 0 0 0 2px var(--ink);border-radius:4px;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
```

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

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Atmosphere: shaped-section-edge (seen on Xin Cheng Foods, Josh Comeau)

*Feeling: friendly, biscuit-cut.*

**Use it for:** Food, kids and friendly brands. **Avoid:** Serious software. The wave divider dates a page instantly.

A section top cut in a repeating 100px scallop or a long wave, always matching the colour above. Use at both entries. Flat colour only.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.