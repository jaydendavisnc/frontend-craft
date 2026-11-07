# Your direction (seed 1042)

Reads as **brand**, surface **store**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Massugu Hungary, a silver ecommerce page)

1. Navigation: `nav.top-bar/chromeless-type-row`
2. Hero: `hero.type-only/type-over-one-field`
3. Collection grid: `commerce.collection-grid/ruled-column-grid`
4. Product card: `commerce.product-card/quick-add-tile`
5. Pricing table: `section.pricing-table/single-offer-split-card`
6. Stats: `section.stats/stat-tiles`
7. Location hours: `section.location-hours/location-card-grid`
8. Closing section: `section.cta-band/tone-panel-close`
9. Footer: `section.footer/offset-sitemap`

Build every section with real content. Top store pages run about 4,300 to 8,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Yeseva One** with **Hedvig Letters Sans**. Heavy high-contrast serif with soft round joins, over a sans whose stroke ends swell the same way.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hedvig Letters Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&display=swap

## Palette

From DJI: bg #ffffff, surface #f6f6f8, text #262527, muted #76757a, accent #0070d5. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `type-first-media-fills`, **Scroll** `pinned-photo-dissolve`, **Hover** `label-roll`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Massugu Hungary** (ecommerce, silver) https://massugu.hu/
- Doing: Premium hairdressing-scissor brand in white and grey with a single red, using a monochrome gradient hero and wide-tracked caps.
- Why it feels made: Letterspaced Raleway caps and product photography on white feel precise like the tools sold; red is limited to logo and buttons.
- If imitated badly: Wide tracking at 20px only works with very short words; on body copy or long headings it collapses legibility.

**La Table de Joakim** (food-drink, gold) https://latabledejoakim.fr/
- Doing: A private-chef catering site where full-screen colour fields, one dish photo per screen and mono caps copy make a quiet menu-card rhythm.
- Why it feels made: Each screen is one idea with generous empty space; the tonal fields (mocha, powder blue, cream) are pulled from the food; serif/mono pairing and a handwritten signature feel owned.
- If imitated badly: Mono caps body is hard to read long-form and the pale text on blue is low contrast.

**Per Appelgren** (portfolio, gold) https://perappelgren.de/
- Doing: A photographer's portfolio staged as a moving white gallery wall: a scatter of prints collapses into a deck, then into one pinned image at a time named by a giant client title.
- Why it feels made: The interface shrinks to three corner words and one disc arrow, leaving each motion beat (stack, scatter, deck, pin) room to land. One grotesk at two extremes gives scale contrast without any colour UI.
- If imitated badly: Skewed cards and huge clipped type turn to noise if photos are uneven or the motion timing is loose.

## System choices

- Frames: `media.photography/one-light-one-grade`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/information-bearing-button`
- Surfaces: `surface.card/media-over-tinted-body`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/type-first-media-fills`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/label-roll`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Product detail: `commerce.product-detail/narrow-info-wide-gallery`
- Filters: `commerce.filters/quiet-text-filter`
- Cart: `commerce.cart/filled-drawer-lines`
- Showpiece: `motion.marquee/ticker-band-divider`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: chromeless-type-row (seen on Block, Gagosian, 1X)

*Feeling: the header is just a line of type.*

No bar at all, only text sitting on the page. Block sets ten centred uppercase links with no logo, no button, no border. 1X runs six muted caps links at 11px and +0.08em. Gagosian uses serif text in light grey with the wordmark in black. Evenark takes it to display scale, a 44px light comma-separated sentence that is both headline and nav. Use it for fashion, culture and confident brands. Avoid it when the first screen needs a conversion, or when the page is a busy image with no scrim.

Set 11 to 14px, caps tracked about .08em or plain sentence case, 35 to 56px gaps. On photographs, lay a 90px top gradient behind it, from black at 25 percent to nothing, as Figure does. The display version needs nothing else on the row.

### Hero: type-over-one-field (seen on Astral, mymind, DOT Audio Recorder)

- **Feels:** Graphic, printed, sure of itself.
- **Use when:** You own one strong shape or one strong colour moment.
- **Not when:** The shape is a generic blob with a gradient.
- **Recipe:** One large shape behind centred type, with the type overprinting it, no knockout, no shadow. Astral draws a 660px lime stepped outline of its glyph behind a 100/110 uppercase headline, with two 53px buttons under it. mymind crosses a 1050px white disc set in a blurred colour field with 140/.9 two-line type at -0.06em, then a sentence with outlined coloured word pills, then the app window at the fold. Leeroy has only a floor glow.

```css
.hero{position:relative;height:828px;overflow:hidden;isolation:isolate;
  display:flex;flex-direction:column;align-items:center;padding-top:238px}
/* one brand shape, huge, drawn as a band, printed under the type. No knockout, no glow */
.glyph{position:absolute;left:50%;top:24px;height:660px;width:auto;transform:translateX(-50%);z-index:-1;
  fill:none;stroke:var(--accent);stroke-width:1.05;overflow:visible}
h1{font:500 100px/1.08 var(--font-display);letter-spacing:-.01em;text-transform:uppercase;text-align:center;max-width:1100px}
.cta{display:flex;gap:10px;margin-top:30px}
.cta a{height:52px;padding:0 24px;border-radius:3px;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line)}
```

Our first glyph was a filled silhouette, and it read as a heavy blob competing with the headline. The real one is a thick outline, so the type still sits mostly on page colour. Add small mono facts in the two bottom corners to give the screen a floor.

### Collection grid: ruled-column-grid (seen on Fred, ACME, 099)

*Feeling: a catalogue page set by a typographer.*

The columns are drawn with lines instead of being spaced. Fred runs four columns of 1px rules with a large serif name at the top of each cell and the image anchored at the base, so that text and picture pull apart. ACME lays hairlines at every 25 percent. 099 numbers its cells with a code. Blu Dot's listing looks unruled at a glance, but its cells are divided by 1px dashed rules, with a small caps label at top left, swatches above the name, and photos inset inside the cell. The dashes keep a dense sale page feeling light. Use it for design, furniture and makers. Avoid it with a warm or playful brand.

Run the rules to the page edge rather than stopping at the container, because a full-bleed rule looks structural while an inset one looks like a table.

```css
.ruled{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}
.ruled article{padding:20px 32px 28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
.ruled article:nth-child(3n){border-right:0}
.lab{font-size:11px;line-height:14px;letter-spacing:.06em;text-transform:uppercase;min-height:14px}
.pic{position:relative;aspect-ratio:1/.86;margin:12px 0}.pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.ship{display:inline-flex;align-items:center;height:24px;padding:0 8px;margin-top:10px;font-size:12px;background:var(--tile)}
```

### Product card: quick-add-tile (seen on Ritual, Taschen, Omega Aqua Terra 150M)

*Feeling: this shop respects your time.*

The add control lives on the image, so a shopper can buy without opening anything. Ritual puts a white 64 by 40 pill 12px from the corner of a pale yellow tile, always visible. Taschen reveals a 30px dark button on hover, and Omega a small outlined one. Use it for repeat purchases, consumables and single-variant goods. Avoid it where size is a real decision, or open a small quick view instead, as Blu Dot does.

The rules: it adds the default variant, it shows a tick for about 1.5 seconds, it does not navigate, and it stays visible on touch because hover does not exist there. The tile tint has to belong to the product. Ritual's warm yellow sits behind warm capsules. Ours used a tint of a blue accent behind a sage mug, and it looked like a wireframe until we changed it.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.tile{position:relative;aspect-ratio:1/1.2;background:color-mix(in srgb,var(--accent) 13%,var(--bg));overflow:hidden}
.tile>img{position:absolute;inset:8%;width:84%;height:84%;object-fit:contain}
.tag{position:absolute;left:12px;top:12px;height:22px;padding:0 8px;display:flex;align-items:center;background:var(--bg);border-radius:4px;font-size:11px;font-weight:500}
.add{position:absolute;right:12px;bottom:12px;height:40px;min-width:64px;padding:0 16px;border-radius:999px;background:var(--bg);
  font-size:14px;font-weight:500;display:grid;place-items:center;transition:background .15s,color .15s,scale .15s}
.add:hover{background:var(--ink);color:var(--bg)}.add:active{scale:.96}
.add[data-s=done]{background:var(--ink);color:var(--bg)}
```

### Pricing table: single-offer-split-card (seen on Stripe Sessions, Function Health, Jurafuchs)

*Feeling: one honest offer.*

One product, one price, one card. This is the only place a large price belongs. Function Health sets a 1088 by 426 cream card with a label, a 40px name, an 80px price with a 24px unit, a muted billing line, a 50px pill, a vertical rule, then nine ticks at 36px pitch. Stripe Sessions carries a ticket the same way, with a tinted inset panel holding the price and a struck original. Use it for memberships, tickets and courses. My first version had seven ticks and felt thin next to nine, so fill the right column to match the left.

```css
.card{display:grid;grid-template-columns:1fr 1px 1fr;gap:56px;padding:56px;background:var(--surface);border-radius:24px;border:1px solid var(--line);
  box-shadow:0 30px 60px -36px color-mix(in srgb,var(--accent) 34%,transparent)}
.rule{background:var(--line)}
.card h2{font:400 40px/1.1 var(--font-display);letter-spacing:-.015em}
.price{font:400 80px/1 var(--font-display);letter-spacing:-.03em;margin-top:44px}
.price small{font:400 24px/1 var(--font-text);letter-spacing:0;color:var(--ink-2);margin-left:4px}
.note{font-size:14px;color:var(--ink-2);margin-top:8px}
.go{display:flex;align-items:center;justify-content:center;height:50px;border-radius:25px;margin-top:32px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:600}
.list{align-self:center}
.list li{display:flex;align-items:center;gap:10px;min-height:36px;font-size:15px}
.list svg{flex:none;width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:1.2}
.flag{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--accent)}
.flag svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.5}
@media(max-width:860px){.card{grid-template-columns:1fr;gap:32px;padding:28px}.rule{height:1px}.price{font-size:64px}}
```

### Stats: stat-tiles (seen on Levels, Soundsensing, Buffer About)

*Feeling: small dashboards.*

Filled tiles, one figure each, when the numbers need more explanation than a caption. Levels gives the model: three near-black tiles about 380 by 285, a 64px numeral in a pale tint, then a 22px subject, then a 13px sentence, and below the row a plain line stating the method and its limits. That three-step ladder of figure, subject and explanation is what lifts it above a stat card. Nx lets one numeral contain a blue arrow, drawing the change. Buffer publishes its real business figures in plain bordered tiles beside a link to a live dashboard, and that openness is the proof. Avoid an icon in a circle above the figure, which is the single most common generated section.

### Location hours: location-card-grid (seen on Sweetgreen Locations, Apple Retail, Boudin Bakery)

*Feeling: every branch accounted for.*

For chains, three columns of quiet cards. Sweetgreen sets a white 8px-radius card on a tinted page: 16/600 name with a pin icon, a 14px two-line address, a clock icon with two-line hours, and a pair of 40px pills for View and Order pinned to the base. The page groups by state with a count and a `Jump to state` select. The important part is how it handles exceptions: Coming soon replaces the sub-line and the button becomes `Get updates`, and Temporary Hours for one date sit in the same slot as ordinary hours. Apple Retail uses a 16:9 storefront photo and a single `Open until` line. Pin the buttons with `margin-top:auto`, so they align however long the address runs. Avoid it under about six locations, where each place deserves a richer row.

```css
body{background:var(--surface)}
.w{max-width:1120px;margin:0 auto;padding:32px 24px}
.top{display:flex;justify-content:space-between;align-items:center;padding-bottom:18px;border-bottom:1px solid var(--line);margin-bottom:24px}
.top h1{font:400 24px/1.2 var(--font-display);letter-spacing:-.01em}
.top label{font-size:13px;color:var(--ink-2);display:flex;gap:16px;align-items:center}
.top select{height:40px;width:360px;padding:0 12px;border:1px solid var(--line-strong);border-radius:8px;background:var(--bg);font:inherit;font-size:15px;color:var(--ink)}
h2{font:600 22px/1 var(--font-text);padding-bottom:12px;border-bottom:1px solid var(--line);margin-bottom:20px}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.c{background:var(--bg);border-radius:8px;border:1px solid var(--line);padding:24px 24px 20px;display:flex;flex-direction:column;font-size:14px;line-height:19px;color:var(--ink-2)}
.c h3{font:600 16px/22px var(--font-text);color:var(--ink);margin-bottom:6px}
.c h3 small{display:block;font:400 14px/19px var(--font-text);color:var(--ink-2)}
.ln{display:grid;grid-template-columns:30px 1fr;margin-bottom:10px}
.ln svg{width:18px;height:18px;margin-top:-1px;stroke:var(--ink);fill:none}
.ln em{font-style:normal;display:block;margin-top:10px}
.act{margin-top:auto;padding-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.act a{height:40px;line-height:38px;text-align:center;border-radius:20px;font-size:14px;font-weight:500;border:1px solid var(--ink);color:var(--ink);transition:background .15s,color .15s}
.act a.p{background:var(--accent);border-color:var(--accent);color:var(--bg)}
.act a:hover{background:var(--ink);border-color:var(--ink);color:var(--bg)}
@media(max-width:760px){.w{padding:20px 16px}.top{flex-direction:column;align-items:flex-start;gap:12px}.top label{width:100%}.top select{flex:1;width:auto}.g{grid-template-columns:1fr;gap:12px}}
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

### Frames: one-light-one-grade (seen on Joby, Aman, Oliver Dupuy)

*Feeling: calm and expensive. Everything happened on the same evening.*

**Use:** Any brand with a place or a physical product: hospitality, architecture, mobility, food, fashion. The strongest default for photo-led work. **Avoid:** Software with nothing to photograph, or a documentary brand whose honesty depends on images staying uncorrected.

Fix one time of day, one light direction and one colour bias, and apply them across people, rooms and objects. Joby is the model: its frames run from black cabin to pale sky, a brightness spread of 64 L*, yet colour moves by only 2 to 3, so it reads as one dusk. Soft daylight with a matte finish gives calm: Oliver Dupuy shows no people, keeps saturation for water and plants, and holds every frame at full viewport height, with widths from about 1:1 down to true 2:3 portrait. Crop to one or two ratios only. Lift blacks by 7 to 9% and hold highlights below 96% so nothing clips. Dishoom sets warm food frames inside an inset hairline keyline with a 12px caption below, which makes a photograph feel printed. Do not read Aman as a grade to copy: its rust silk, pale watercolour and deep blue ship share no colour bias at all. It holds together through one tile format, one caption block and a paper page.

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="set-grade" color-interpolation-filters="sRGB" x="0" y="0" width="100%" height="100%">
    <feColorMatrix type="saturate" values=".68"/>
    <feComponentTransfer>
      <feFuncR type="table" tableValues=".09 .37 .72 .96"/>
      <feFuncG type="table" tableValues=".07 .32 .65 .92"/>
      <feFuncB type="table" tableValues=".07 .26 .54 .82"/>
    </feComponentTransfer>
  </filter>
</svg>
<style>
  .set img { width: 100%; aspect-ratio: 5 / 4; object-fit: cover; filter: url(#set-grade); }
</style>
```
The table is a four-point tone curve per channel. The first value lifts the blacks, and the last pulls the highlights down, so no frame reaches pure black or white. Red stays highest and blue lowest, which gives every frame the same warm cast. For a cool set, swap the red and blue rows. Bake the result into the files for a real launch, because a filter on every image costs paint time.

**In the lab:** Rendered with four deliberately mismatched sources. Measured in CIELAB, the grade cut warm-cool spread from 47 to 26 and lifted blacks from 0 to 5. Chroma spread got worse, from 25 to 31, and the result sits far outside the 2 to 8 of a truly unified set. The night frame stayed the outlier, which is where the rule about replacing rather than pushing comes from.

### Headline: name-as-headline (seen on Apple, Analogue, ACME)

The object needs no selling. Seen on 6 sites.

**Use it for:** Physical products, launches and iconic brands where the name already means something.

**Avoid it for:** Unknown products: if the name says nothing, the visitor learns nothing.

**Recipe:** The product or brand name alone is the headline, 56-80px, weight 500-600, tight tracking, centred, no verb. Beneath it a five or six word promise at 21-28px weight 400, roughly 2:1 with the name. A short status word can replace the promise. Let the object fill the frame.

<a id="poster-anchored"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: information-bearing-button (seen on 1X, Bauhaus Clock, Analogue)

*Feeling: a shop assistant who answers before you ask.*

The control carries a fact as well as a verb. 1X sets a 14px price 16px to the left of a dark pill, so the price reads as part of the control. Bauhaus Clock writes the price into the label on every button. Analogue keeps one 41px pill through Buy Now, Available Now and Sold Out, with a 15px note 16px beneath about shipping. Definitiv Digital replaces a demo button with a 64px portrait of the founder and two lines of text, and a person is harder to ignore than a verb.

Use it for commerce, single-product pages and services sold by a person. Keep the shape fixed across states, and set price in tabular figures.

### Surfaces: media-over-tinted-body (seen on Stripe Climate, Nurx, Therabody)

*Feeling: a printed postcard.*

Image or colour band on top, tinted body beneath, in a colour taken from the brand or the image. Radius 12 to 24, gap 20. Use it for health, consumer and education carousels, and let the row bleed off the edge with the next card peeking. Stripe's Climate version clips the photo's bottom edge at about -6 degrees, which carries the hero's diagonal down the page.

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

### Load: type-first-media-fills (seen on Public, Analogue, Cal.com)

*Feeling: the page is already here.*

The most useful load on the web, and the default for product pages. Nav, headline and buttons paint at once with the media slot reserved, and the media fades in when ready. Public's film card arrives about 1.1s in, already playing. Cal.com holds pale slots inside its headline and fills them, so nothing shifts. Analogue fades a render over 0.3s on `cubic-bezier(0,0,.2,1)`. Use it wherever copy can be server rendered. Keep the fade under 0.4s, and let the media start playing before it fades in, so the first frame seen is already alive.

```css
.slot{aspect-ratio:16/9;background:var(--surface);border-radius:12px;overflow:hidden}
.slot :is(img,video){width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s cubic-bezier(0,0,.2,1)}
.slot.ready :is(img,video){opacity:1}
```

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

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

### Product detail: narrow-info-wide-gallery (seen on Glossier product)

*Feeling: a magazine spread with a till in the margin.*

The info column comes first, 400px at the left, and two tall images fill the rest at 459 by 569 with a 15px gap. Glossier joins three 34px chips in one strip, sets purchase modes between two ink rules, and uses a 40px add button with the price inside and a hard line at its right and bottom edge. Use it for beauty, fragrance and fashion, where two photographs at reading size do more than one. Avoid it for technical goods, where a 400px column is too tight for many options.

Make the left column sticky so it stays while images scroll.

```css
.pdp{display:grid;grid-template-columns:400px minmax(0,1fr);gap:76px;padding:16px;max-width:1440px;margin:auto;align-items:start}
.info{position:sticky;top:16px}
.seg{display:flex;margin-top:22px}.seg input{position:absolute;opacity:0}
.seg span{display:grid;place-items:center;height:34px;padding:0 24px;background:var(--tile);font-size:14px;font-style:italic}
.seg input:checked+span{background:var(--bg);box-shadow:inset 0 0 0 1px var(--ink)}
.mode{margin-top:28px;border-block:1px solid var(--ink)}
.mode label{display:flex;align-items:center;gap:16px;height:42px;font-size:15px}
.atc{display:flex;gap:16px;align-items:center;height:40px;padding:0 20px 0 16px;background:var(--tile);box-shadow:1px 1px 0 var(--ink);font-variant-numeric:tabular-nums}
.pics{display:grid;grid-template-columns:1fr 1fr;gap:15px}
.pics figure{position:relative;aspect-ratio:1/1.24;margin:0;background:var(--tile);overflow:hidden}
@media(max-width:900px){.pdp{grid-template-columns:1fr;gap:20px;padding:0 0 24px}.info{position:static;padding:0 16px;order:2}
  .pics{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:2px}.pics figure{flex:0 0 86%;scroll-snap-align:start}}
```

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

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.