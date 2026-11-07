# Your direction (seed 1041)

Reads as **brand**, surface **store**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Snow Peak, a silver ecommerce page)

1. Navigation: `nav.top-bar/two-row-masthead`
2. Hero: `hero.full-bleed-media/side-column-on-calm-side`
3. Collection grid: `commerce.collection-grid/place-and-date-grid`
4. Newsletter: `section.newsletter/stacked-fields-panel`
5. Stats: `section.stats/stat-tiles`
6. Gallery portfolio: `section.gallery-portfolio/on-image-title-tiles`
7. Feature grid: `section.feature-grid/media-plate-then-caption`
8. Closing section: `section.cta-band/plain-centred-close`
9. Footer: `section.footer/statement-closer`

Build every section with real content. Top store pages run about 4,300 to 8,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Monomakh** with **Commissioner**. A dark Slavonic-heritage face, with a neutral humanist sans that lets it stay the only historic voice.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Commissioner 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Monomakh&display=swap https://fonts.googleapis.com/css2?family=Commissioner:slnt,wght,FLAR,VOLM@-12..0,100..900,0..100,0..100&display=swap

## Palette

From Acne Studios: bg #ffffff, surface #f3f0e9, text #000000, muted #6e6e6e, accent #15158a. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **host**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `iris-or-sheet-reveal`, **Scroll** `pinned-photo-dissolve`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Snow Peak** (ecommerce, silver) https://snowpeak.com
- Doing: A heritage camping brand sold through dusk photography, old-style serif headlines and hard-edged rectangles.
- Why it feels made: Radius 0 everywhere, one serif and one sans, and photography good enough to need no decoration. Wide fixed-width buttons give it a print-ad cadence.
- If imitated badly: Without photography this good, a serif on a darkened hero photo turns into a generic lifestyle Shopify theme.

**Polestar** (brand, gold) https://www.polestar.com
- Doing: A car brand presented as a Swiss catalogue: one grotesque, four sizes, square outlines and large quiet photography doing the selling.
- Why it feels made: Four type sizes, one weight, zero button radii and a 6-column grid make heavy promotional and legal content feel composed. Even footnotes are set on the grid.
- If imitated badly: Tight 16/18 body and -4.5% display tracking need a tuned grotesque; in a default sans it looks cramped rather than confident.

**Soundsensing** (saas, gold) https://www.soundsensing.com/
- Doing: Makes industrial HVAC sensing feel premium by pairing grainy macro photography of real equipment with sparse frosted status UI and a cool sage palette.
- Why it feels made: Real installed hardware replaces stock imagery, and a sage-to-stone colour pair runs through type, cards and buttons. Small 4-8px radii, equal-weight buttons and sentence headings keep it sober.
- If imitated badly: Without the macro photo and film grain, the small radii and muted sage become a plain corporate template.

## System choices

- Frames: `media.photography/documentary-in-system-tile`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/hard-midline-panels`
- Load: `motion.load-sequence/iris-or-sheet-reveal`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `nav.mobile-menu/colour-room-takeover`
- Product card: `commerce.product-card/visible-add-card`
- Product detail: `commerce.product-detail/purchase-mode-radios`
- Filters: `commerce.filters/quiet-text-filter`
- Cart: `commerce.cart/cart-page-summary`
- Showpiece: `motion.marquee/ticker-band-divider`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Atmosphere: `atmosphere.image-backdrop/graduated-scrim`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-row-masthead (seen on Monocle, Le Saint Georges, Omega)

*Feeling: an institution with a front door for everyone.*

Two stacked rows, a brand or utility row over a section row. Monocle runs a 64px row with a centred wordmark and a subscribe button, a 1px black rule, then a 45px centred section row with pipes between items. Retail and universities use the same logic for log in, region and stores. Use it for magazines, institutions and large stores with many audiences. Avoid it as decoration, since two rows cost over 100px of screen.

Set a 24 to 64px upper row at 10 to 13px, and a 44 to 90px lower row at 14 to 18px, with 1px rules between. Keep both rows on the same page rails. Twilio shows the hard-edged version: a 32px pale utility strip over an 80px white bar.

### Hero: side-column-on-calm-side (seen on Framework, Stone Island, Levels)

- **Feels:** Direct, commercial, clear about what it sells.
- **Use when:** The image has a subject on one side and quiet on the other, for hardware, health and retail.
- **Not when:** You have to darken half the image to create the calm. That is `colour-wash-from-one-side`, done badly.
- **Recipe:** Subject in the right 55%. Copy column at the left, vertically centred, at a 56 to 140px gutter: 48 to 68px headline, 16 to 18px sub, a pill or link. Framework colours part of its headline with the accent against a black macro. Betterment measures 68/68 at weight 500, three lines, 550px wide, with three check bullets in the accent. Stone Island drops the copy low left in small type and hangs its one link beside the figure, on the title's baseline.

### Collection grid: place-and-date-grid (seen on Sonder, New Exhibitions, Away Stores)

*Feeling: where to go next.*

For physical locations and events. Away shows three 4:3 store photos at 16px gutters with a 14px city and neighbourhood line and an 11px details arrow. Sonder puts city pills above a four-column grid at 16px gutters. New Exhibitions uses a caption triple of title, venue and date, and hover colours only the title. Use it for shops, branches, hotels and programmes. Every location needs hours and a way to get there on the next click. Hold one crop across the grid, because a photo wall of mixed storefronts falls apart faster than products do.

### Newsletter: stacked-fields-panel (seen on Elyx, Lucid, Rivian)

*Feeling: a private invitation.*

Elyx wraps two fields in one 460px container at radius 24 with a 2px spectral stroke, a hairline between fields and a full-width 52px white pill. Lucid uses a dark panel and champagne button. Use it for waitlists and betas, where asking for a second field is justified.

### Stats: stat-tiles (seen on Levels, Soundsensing, Buffer About)

*Feeling: small dashboards.*

Filled tiles, one figure each, when the numbers need more explanation than a caption. Levels gives the model: three near-black tiles about 380 by 285, a 64px numeral in a pale tint, then a 22px subject, then a 13px sentence, and below the row a plain line stating the method and its limits. That three-step ladder of figure, subject and explanation is what lifts it above a stat card. Nx lets one numeral contain a blue arrow, drawing the change. Buffer publishes its real business figures in plain bordered tiles beside a link to a live dashboard, and that openness is the proof. Avoid an icon in a circle above the figure, which is the single most common generated section.

### Gallery portfolio: on-image-title-tiles (seen on Fujifilm X, Foster + Partners, Stability AI)

*Feeling: a wall of posters.*

The title sits inside the image, bottom left, inset 16 to 26px. Foster + Partners uses 427 by 335 tiles, 24px gaps, no radius, and a 21/500 white caption on an 80px black gradient. Sidekick uses two 692px squares with a dark gradient rising from the base. Stability AI butts three videos with no gaps in a block at radius 16, so they read as one cinematic strip. Use it when pictures are strong, and when the foot of each image can take text. Limit the scrim to the base of the image. A flat dark layer across a whole photograph protects three words and ruins the picture. Avoid it for pale or busy images, where no small scrim will hold the text.

### Feature grid: media-plate-then-caption (seen on Aman, Amplitude, Devin Desktop (codeium.com redirect))

*19 sites, quality 5.* The commonest strong grid: a plate, then text sitting straight on the page with no card. It feels like a catalogue. Use it whenever you have a real visual per item, in any genre. It is the easiest way out of the three-card row and the variant we would reach for first.

Recipe: three or four columns with 8 to 32px gaps. A plate 286 to 500px tall, then 24px of space, a 20 to 28px title at weight 400, and 16px copy at 1.4 and about 56 to 60% ink. No surface behind the text, no border, no shadow. Plate radius follows the system: 0 for technical, 8 to 12 for product, 32 for soft brands. Keep rows 64 to 120px apart. Factory runs 330px square plates with square corners, at 16/1.2 copy, and about 64px between rows.

Seen on Devin (codeium.com), Amplitude, Factory, Nuro, Exa, GoCardless, Aman, Boston Dynamics, Sentry. Suits light precision, photo-led, warm neutral and dark precision, for AI, SaaS, brand and culture.

```html
<article>
  <div class="plate" style="--x:0%">
    <div class="ui"><!-- real fragment, at real size, taller than the plate --></div>
  </div>
  <h3>Invoices that read themselves</h3>
  <p>Photograph the delivery note and every line lands against its supplier.</p>
</article>
```

```css
.row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
/* one wash cut into four plates: each shows a different slice of the same field */
.plate { position: relative; height: 300px; overflow: hidden;
  background: linear-gradient(100deg, var(--wash-1), var(--wash-2) 55%, var(--wash-3)) var(--x) 0 / 410% 100%; }
/* taller than the plate on purpose, so the crop reads as a crop */
.ui { position: absolute; top: 18px; left: 16px; right: 16px; height: 360px; padding: 14px 15px; font-size: 13.5px; line-height: 1.3;
  background: var(--surface); border-radius: 9px; box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 16px 32px -14px rgba(0,0,0,.3); }
.ui.off { left: 20px; right: -40px; }   /* one fragment leaves by the right edge */
article h3 { margin-top: 24px; font: 400 20px/1.2 var(--font-text); letter-spacing: -.01em; }
article p { margin-top: 8px; color: var(--ink-2); max-width: 21em; }
@media (max-width: 980px) { .row { grid-template-columns: repeat(2, 1fr); row-gap: 32px; } }
@media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
```

Set `--wash-1` to `--wash-3` to three tones close to your surface, then add a faint grain so the plate stops looking like a CSS gradient.

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

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

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

### Page rhythm: hard-midline-panels (seen on Acne Studios, Symbol Studio, Design Podcast (Focus State))

**Feel.** Fashion house. Severe, symmetrical, expensive.
**Use when** every section has a strong image or colour to fill a half. **Avoid** with text-led content.
**Recipe.** Acne Studios: the page divides exactly at x=720. Paired 720px panels butt with zero gutter. News column, newsletter band, footer columns and caption starts all land on 720, then 360px sub-lines at x=370 and x=1090. Focus State builds a whole site from 50% columns. Symbol Studio insets a white sheet 16px on a pale ground with a 1px vertical rule at the centre, and hangs text about 32px off the rule.

### Load: iris-or-sheet-reveal (seen on Leo Cussen Centre for Law, Symbol Studio, Apptronik)

*Feeling: a shape opens the page.*

A shape from the brand opens into the site. Meridian parts a pale ring like a dividing cell, and it is all done within 2s. Symbol Studio grows a white stadium from the centre until it becomes the page sheet. N26 expands a small framed image to full-bleed from a flat teal. MetaLab grows a central video tile to full screen and flips the page dark. Animate `clip-path` or use FLIP, not width and height. The shape must come from the logo or product, or it is a stock wipe. See `load.md` Curtain and shutter.

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

### Phone menu: colour-room-takeover (seen on Joby, Lightspeed, Locomotive)

*Feeling: you walked through a door into the brand.*

The menu is a flat room of brand colour. Lightspeed uses blush pink with 44px type and 01 superscripts, the page blurring behind as the sheet arrives over about 900ms. Joby uses a saturated blue reached through stacked bands of peach, orange and navy. Locomotive uses electric blue and serif type at the bottom left. Wildbran uses terracotta. Use it for brands with a real colour, on sites where the rest of the page is restrained. It is one of the cheapest ways to look expensive. Check contrast, and use the colour only here.

### Product card: visible-add-card (seen on Gagosian, Aesop, Sakara)

*Feeling: a shop counter, plain and open.*

A button on every card, always showing. Aesop sets a 40px dark full-width button under a short description. Sakara uses an outlined full-width `ADD TO CART` on phones, where hover is not an option. Gagosian uses a 34px outlined `Shop` under a book on a white tile on a grey band, which looks like a museum till. Ro pairs a black pill with an outlined one and a required safety link. Use it for home page rows, single-size goods, and phone layouts. Avoid it on a long listing, where forty identical buttons become noise.

Reserve caption lines, so that all buttons share a baseline. Take the button from the store's system, usually the same radius and height as the main add button, scaled down one step.

### Product detail: purchase-mode-radios (seen on Harney product, Rishi-Tea product, Glossier product)

*Feeling: clear about what you are signing up for.*

One-time or subscribe, as rows rather than tabs. Rishi sets 50px rows at radius 25. The chosen row takes the accent line, and the subscribe row expands to list four benefits, ending with the promise that you can skip or cancel. Glossier uses two plain rows between rules. Harney adds a small save tag to the corner. Use it for consumables. The total in the button must change with the choice, and skipping or cancelling must be stated, because a subscription the shopper thinks is a trap will lose the sale. Avoid it for one-off goods, where a subscribe row only confuses.

```css
.modes{display:grid;gap:10px}
.modes label{display:block;padding:13px 22px;border-radius:25px;box-shadow:inset 0 0 0 1px var(--line-strong);cursor:pointer;transition:box-shadow .15s}
.modes label:has(input:checked){box-shadow:inset 0 0 0 1px var(--accent)}
.mh{display:flex;align-items:center;gap:12px;font-size:16px}
.mh input{appearance:none;width:18px;height:18px;margin:0;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ink)}
.mh input:checked{background:var(--accent);box-shadow:inset 0 0 0 1.5px var(--accent),inset 0 0 0 4px var(--bg)}
.modes ul{display:none;margin:8px 0 0;padding-left:46px;font-size:15px;line-height:23px;color:var(--ink-2)}
.modes label:has(input:checked) ul{display:block}
```

### Filters: quiet-text-filter (seen on Kinfolk, X8 Eyewear, Elisa Breyer Archive)

*Feeling: a list, not a form.*

Filtering as plain words. Kinfolk writes its categories as one centred 32px serif sentence, separated by commas. X8 has `ALL` at left and `STYLE` with a small caret at right, on a 1px rule exactly one tile wide. Footer Design uses 12px links with the active one underlined. Elisa Breyer's archive offers four ways of ordering, with a soft pink highlight on the active one. Use it for editorial sites, archives and small collections. Avoid it above about 30 items.

### Cart: cart-page-summary (seen on Apple Bag, Parachutehome cart)

*Feeling: the desk where you check the bill.*

The full page, for direct visits and for larger baskets. Lines on the left between hairlines at 120px thumbs, with a sticky 380px summary on the right holding subtotal, shipping, tax and a total at 18/500. Promo codes sit behind a quiet link, because an open coupon box sends people off to search for one. Delivery date and returns sit under the button. On phones, the summary follows the lines and Checkout pins to the bottom edge. Use it alongside the drawer, and avoid a page-only cart, which sends the shopper away on every add. Like the drawer, this was tested in our own render, on the page structure of Apple's and Parachute's cart pages.

```css
.w{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:64px;max-width:1200px;margin:auto;padding:48px 32px;align-items:start}
.sum{position:sticky;top:24px;background:var(--tile);padding:24px}
.s{display:flex;justify-content:space-between;font-size:14px;line-height:28px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.s.t{color:var(--ink);font-size:18px;font-weight:500;line-height:26px;border-top:1px solid var(--line-strong);margin-top:10px;padding-top:12px}
.co{display:grid;place-items:center;width:100%;height:52px;margin-top:16px;background:var(--ink);color:var(--bg);font-weight:500}
summary{cursor:pointer;color:var(--ink-2);list-style:none;text-decoration:underline;text-underline-offset:3px}
@media(max-width:900px){.w{grid-template-columns:1fr;gap:24px;padding:24px 16px 96px}.sum{position:static;padding:16px}
  .co{position:fixed;left:12px;right:12px;bottom:12px;width:auto;z-index:5}}
```

### Showpiece: ticker-band-divider (seen on Analogue, Headspace, Hibachi Guru)

*Feeling: a bold seam.*

A full-bleed band that doubles as a section break. Analogue uses a thin black strip for a release notice. Hibachi Guru cuts dark video from white page with an orange band. Headspace is the best of the set, a yellow strip whose paired googly eyes aim differently in each instance, so the separator carries the joke. Use it on bold, playful or local brands, at most twice on a page. The separator glyph is where the personality lives, so make one instead of using a dot.

### Showpiece: sticky-card-deck (seen on Affirm, Theatre Memory, Per Appelgren)

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