# Your direction (seed 1014)

Reads as **finance**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Stripe Billing, a gold finance page)

1. Navigation: `nav.top-bar/section-adaptive-bar`
2. Hero: `hero.centered-with-product/poster-over-product`
3. Logo wall: `section.logo-wall/one-lit-logo`
4. Feature alternating: `section.feature-alternating/shifting-ratio-tiles`
5. Ui fragment: `product.ui-fragment/card-on-photo`
6. Feature tabs: `section.feature-tabs/typographic-index`
7. Stats: `section.stats/one-giant-number`
8. Case study: `section.case-study/full-bleed-project`
9. Feature grid: `section.feature-grid/rule-topped-columns`
10. Faq: `section.faq/big-type-rows`
11. Closing section: `section.cta-band/glow-field-close`
12. Footer: `section.footer/one-line-colophon`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Ysabeau** with **Ysabeau**. Garamond bones without serifs: weight 200 at display, 400 in text, and the SC cut for labels.
- Display: 64px, phone 38px, weight 200, tracking -0.01em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Ysabeau 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Ysabeau:ital,wght@0,1..1000;1,1..1000&display=swap https://fonts.googleapis.com/css2?family=Ysabeau:ital,wght@0,1..1000;1,1..1000&display=swap

## Palette

From Hibachi Guru: bg #ffffff, surface #fef6df, text #000000, muted #555555, accent #ee1824. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `horizontal-scrub-rail`, **Hover** `alpha-tint-chip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Stripe Billing** (finance, gold) https://stripe.com/billing
- Doing: An enterprise product page that earns trust through restraint: small light type, hairline structure and one vivid gradient behind exact product UI.
- Why it feels made: Every section hangs off the same two rails and a 4-6px radius system, and the UI mocks are complete enough to read at 9px. The single gradient gives life without touching the type.
- If imitated badly: 32px light headlines only work with exact rules, spacing and real UI; with placeholder mocks the page looks timid and empty.

**North Hub Partners** (finance, silver) https://northhubpartner.com/
- Doing: A Brazilian corporate finance boutique is presented through vast aerial photography and calm scroll pacing on icy blue.
- Why it feels made: One inset nav, one photo frame and one pale ground make stock-grade images feel curated. Scroll staging gives it a pace most pages at this level lack.
- If imitated badly: Imagery here is stock or AI-grade, and large serif words over busy photos lose legibility without a scrim.

**Nicole Heim Studio** (agency, gold) https://www.nicoleheim.studio/
- Doing: A fashion brand studio that behaves like a lookbook: split-screen editorial photography interrupted by oversized serif statements, with almost no interface.
- Why it feels made: One 32px margin and three type sizes govern the whole page, and the serif is a true display cut set tight. Art-directed photography does all the colour work, so the UI never needs an accent.
- If imitated badly: Without real art direction and a licensed optical serif, the emptiness collapses into a stock portfolio template.

## System choices

- Headline: `type.display-headline/medium-tight-grotesk`
- Section headings: `type.section-heading/scroll-held-heading`
- Primary button: `button.primary/saturated-rect`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
- Logo: `media.logo-mark/wordmark-with-device`
- Icons: `media.icon-set/pixel-grid-icons`
- Page rhythm: `layout.grid-system/construction-lines`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-pin-or-scrub/horizontal-scrub-rail`
- Hover: `motion.hover-state/alpha-tint-chip`
- Phone menu: `mobile.phone-nav/scrolling-row-under-bar`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Showpiece: `type.type-as-image/chapter-numeral-or-word`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: section-adaptive-bar (seen on Public, Hims, Attio)

*Feeling: the bar belongs to the room you are in.*

One bar shape with its skin swapped as sections pass. There are two ways to do this. Hims matches each section's colour, so a 48px bar melts into brown, blue, peach and black rooms in turn, with only a wordmark and a white Log in pill staying constant. Attio and Public invert on dark chapters and keep their geometry. Use it when the page has big colour changes that would otherwise collide with a fixed white bar. Avoid it on a page with one ground, where it does nothing.

Transition fill, ink and rule together over about 200ms. On Attio the primary button goes to a mid grey on dark rather than flipping fully to white, so it does not jump out. Citadel swaps its logo and button at the boundary with the same timing.

### Hero: poster-over-product (seen on Apple, Kinfolk, Eboca Empresas)

- **Feels:** A launch. Keynote stage.
- **Use when:** One product, one moment, and an image that glows.
- **Not when:** There is no hero product shot.
- **Recipe:** Solid tile about 690px tall directly under a slim nav. Tight centred stack beginning 60px down: 56/60 name, 28px subtitle, 19px grey date, 16px gap, button pair. The product sits at the tile's base, cropped by it, and its screen is the only light source. Kinfolk's version is a 313 by 405 cover centred on white under a caps title.

### Logo wall: one-lit-logo (seen on Monark Markets, Sierra)

*Feeling: the wall is awake.*

A grey wall where exactly one mark is in full colour, moving on a timer or as it passes centre. It costs almost nothing and removes the deadness of a static band. Sierra's 5 by 6 grid sits at about 35 percent grey, with one logo cycling to full colour. Monark's marquee brightens the logo nearest centre to full white. Keep the change slow, about 1.5 seconds, and let the set finish before it repeats.

### Feature alternating: shifting-ratio-tiles (seen on VanMoof, Apptronik, UNITO)

*5 sites, quality 4.* A zigzag with the stiffness removed. Use with big images and short copy, in hardware, retail and interiors.

Recipe: pairs of tiles 16px apart, radius about 15. Row one 778 and 582px, row two 545 and 817. The text tile is a flat one-step grey, with 25px padding and a 32px heading plus 17/29 body, weighted to the bottom. Unito overlaps its rows by about 180px, so the next image starts before the last one ends.

Seen on Apptronik, Unito, xtrackr, VanMoof, Vrdnt Work. Suits light precision, photo-led, warm neutral.

### Ui fragment: card-on-photo (seen on Cal.com, Polar, Revolut)

*A person's life with software lightly on top.* Quality 5/5, 7 sites.

**Use:** Human or consumer products. It keeps warmth on a product page. **Not:** When the photo has its subject under the card.

**Recipe:** Portrait or textured photo, radius 6-20. One sharp card pinned low, inset 20px, radius 16, 60px rows of 14px type. Or 270px frosted cards at 85% white. Photo stays at real scale, card carries all the detail, and one row fades to imply life. Cal.com halftones its photo, which turns a casual snapshot into a graphic. Revolut uses no card at all: a 1px 40% white outline with text and soft shadow. Polar puts a near-black window on grainy sand with no colour anywhere, so the plate and UI contrast by texture.

```html
<style>
.plate{position:relative;width:min(600px,100%);height:730px;border-radius:20px;overflow:hidden}
.plate img{width:100%;height:100%;object-fit:cover;display:block}
.plate::after{content:"";position:absolute;inset:0;mix-blend-mode:multiply;background:radial-gradient(circle,#000 0 34%,#fff 42%) 0 0/4px 4px} /* optional halftone */
.card{position:absolute;z-index:1;left:20px;right:20px;bottom:20px;border-radius:16px;background:var(--bg);box-shadow:0 12px 40px rgba(0,0,0,.28)}
.r{display:grid;grid-template-columns:32px 1fr auto;gap:1px 12px;align-content:center;align-items:center;height:60px;padding:0 16px;border-bottom:1px solid var(--line);font-size:13px;line-height:17px}
.r .av{grid-row:1/3;width:32px;height:32px;font-size:12px}.r time{color:var(--ink-3)}.r .p{grid-column:2/3}.r .p span{color:var(--ink-2)}
.r.old{opacity:.32}
</style>
<div class="plate"><img src="photo.jpg" alt="">
 <div class="card">
  <div class="r old"><span class="av">IB</span><b>Ilse Brandt</b><time>08:05</time><div class="p trunc">Shift swap <span>Moving the Lido date</span></div></div>
  <div class="r"><span class="av">TR</span><b>Tomas Reyes</b><time>16:22</time><div class="p trunc">Saturday load-in <span>Can the van arrive by three?</span></div></div>
 </div></div>
```

### Feature tabs: typographic-index (seen on Baseten, Decagon, North Hub Partners)

*9 sites, quality 4.* The list is the design. Dramatic and confident. Use for services, channels and products where the names are good. Fits agencies and bold brands.

Recipe: a stack of very large names, 28 to 100px, on 1px rules or on none. Active full ink, others about 25 to 55%. A small preview photo or card swaps beside the list. Decagon stacks 60px channels with a photo that swaps under a rising tint. North Hub uses 36px serif rows at 146px pitch, and a progress line fills the rule. Nurx uses 16px mono caps on 51px rows in a tinted panel. Athletics scatters chips over 100px names.

Seen on Decagon, Baseten, North Hub, Nurx, Studio Unlmtd, Athletics, Figma FigJam. Suits photo-led, type-led, bold colour.

### Stats: one-giant-number (seen on Leo Cussen Centre for Law, Royal College of Art, Birdie)

*Feeling: this one figure is the whole point.*

If you have one number that would stop someone, let it have a section. Checkout.com sets a figure at about 200px in a mono bold inside an outlined rounded card, with a 14px caption. Leo Cussen uses serif counters at 96px that roll like odometers on a yellow section. The Royal College of Art sets 130px white figures on full-bleed studio photographs, changing with scroll. DeepNode dims the next stat until it scrolls into place. Avoid four of these in a row.

### Case study: full-bleed-project (seen on Greylock, Nicole Heim Studio, Stripe)

*Feeling: the work speaks.*

One image, edge to edge, with almost no text. Use it for studios, film and anything with strong visuals. Nicole Heim breaks its own 32px margins with a 740px photo, a white 15/500 name over a mono line at the bottom left, no scrim or button. Greylock runs a candid founder photo rail to rail, its bottom third fading into the page grey, with a logo tile, a statement and founders' names on the fade. Stripe sets a 1232 by 530 aerial film under a logo tile and one-line claim, with fact columns beneath. Fantasy wipes each project up under the last.

### Feature grid: rule-topped-columns (seen on Public, Tana, Claude)

*8 sites, quality 4.* Open and calm. Use it for three to six short claims when you want air and have no art. It is the plainest fix for a three-card row: delete the box and keep one line. Skip it for long lists.

Recipe: columns with a 24 to 32px gutter. Each opens with a 1px rule on its top edge, or its left edge with about 32px of inset, then 28px of space, a small icon or number, a 20 to 24px title at weight 400, and 16 to 17px copy at 1.6. Fix the rule weight and colour across every column. A dark variant uses a roughly 15% white rule at the top of each cell.

Seen on Tana, Public, Claude, Customer.io, Neon, Boom. Suits light precision, warm neutral, dark precision and photo-led.

### Faq: big-type-rows (seen on Rabbit, Telkom-OT, Lyra)

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

### Closing section: glow-field-close (seen on CleanShot X, mymind, Liquid AI)

*Feeling: stage lighting.*

Colour pooled at the edges of a field, with type on clean ground. CleanShot runs a dark field with magenta and blue high behind a centred app icon. The analyst called these glows dim, and my first version took that at its word and looked dead beside the real thing, where the magenta is plainly visible at the top. Liquid raises two lilac blurs from the bottom corners of a white cell over a faint grid. Lyra pools blue and peach in the corners of a white panel. Substack sets one huge peach blur behind the headline. Keep the brightest point away from the text.

```css
.close{position:relative;overflow:hidden;isolation:isolate;background:var(--bg);text-align:center;padding:128px 24px 136px}
/* --g1 and --g2: two deep hues from your palette. High, wide and visible. Behind the icon, never the text */
.close::before{content:"";position:absolute;z-index:-1;left:0;right:0;top:-24%;height:92%;filter:blur(48px);
  background:radial-gradient(26% 72% at 42% 44%,var(--g1),transparent),radial-gradient(26% 80% at 66% 30%,var(--g2),transparent)}
.icon{width:80px;height:80px;border-radius:18px;margin:0 auto 32px;display:grid;place-items:center;background:var(--accent);color:var(--bg);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--ink) 35%,transparent),0 12px 32px -8px rgba(0,0,0,.6)}
.icon svg{width:44px;height:44px;fill:none;stroke:currentColor;stroke-width:3}
.close h2{font:700 40px/48px var(--font-display);letter-spacing:-.022em;max-width:15em;margin-inline:auto;text-wrap:balance}
.close p{font-size:18px;color:var(--ink-2);margin:12px auto 0;max-width:36em}
.b{margin-top:32px;padding:0 22px;border-radius:14px;background:var(--ink);color:var(--bg);font-weight:600}
@media(max-width:700px){.close{padding:96px 20px}.close h2{font-size:32px;line-height:38px}}
```

### Footer: one-line-colophon (seen on Block, Elyx, Babylonstoren)

*Feeling: honest about its size.*

For a page with few destinations, one row. Elyx sets a single centred line with dot separators directly on its background art. UploadThing runs copyright, three links, a green status dot and three icons under a hairline. Daily uses mono slash-prefixed links in about 100px. Teenage Engineering sets seven thin lowercase links in a 96px black strip. Block pins six links to the bottom of the viewport so they mirror the top row. Svelte uses one centred sentence, because the real footer lives in the docs. A short footer shows confidence, and padding one with columns you do not need is exactly what cheapens it.

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

### Section headings: scroll-held-heading (seen on Apple Vision Pro, Affirm, i-D RED)

Cinematic. The heading is part of the sequence. Seen on 3 sites.

**Use it for:** Long pinned sequences and film-led product pages.

**Avoid it for:** Short pages. It must read at every scroll position.

**Recipe:** The heading is tied to scroll: pinned about 90px below the nav at 48px weight 300 while content moves beneath it, or rising into place over footage as a clip settles, at about 80/84 weight 700. One short phrase, legible at every scroll position.

<a id="two-voice-heading-system"></a>

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

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Logo: wordmark-with-device (seen on ECI, Seed, Telkom-OT)

*Feeling: modest and smart. Type first, one small idea.*

**Use:** The safest strong choice when inventing a brand. Technical and scientific brands, and any site with a good type system. **Avoid:** When the device is a generic flourish, such as a dot on any word.

Set the name in the dealt type at nav size, then add one device with a reason. A solid dot of .42em that repeats large on every package. Short bars of .075em on selected letters. A version number at 13px in a 1px chip with a 4px radius, on an open-source project. Letters redrawn as 1px construction lines at footer scale. Tight tracking of -.02 to -.03em on the word. The device must survive at nav size and pay off at large size.

**In the lab:** Held at every size down to 14px type, with no special master. It is the most forgiving variant here.

### Icons: pixel-grid-icons (seen on Shopify Polaris)

*Feeling: playful and technical. A wink inside serious documentation.*

**Use:** Developer docs and neutral reference pages that need personality without a redesign. **Avoid:** Mixing with smooth icons in the same context.

Draw at 16 by 16 and display at exactly 3x, about 48px, with `image-rendering: pixelated` or `shape-rendering: crispEdges`. Use a dark one-pixel outline, two or three flat fills per icon, and stepped edges with no anti-aliasing. Keep it the only illustrative colour on the page.

### Page rhythm: construction-lines (seen on Aniket, Cognition, Prototype)

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: horizontal-scrub-rail (seen on Decagon, Roy Jad, Oliver Dupuy)

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

### Hover: alpha-tint-chip (seen on ElevenLabs Pricing, Devin Desktop, Expo)

*Feeling: a quiet place to land.*

Nav items and rows gain a pill of ink at low alpha. Modern Treasury uses 5 percent, ElevenLabs 5, Devin 6, Linear white at 8. The alpha makes it work on any ground, and the pill gives the eye a target. Use it for navs, menus, filter rows and sidebars. Give the pill a horizontal padding of 10 to 12px, set negative margin if the text must keep its alignment, and do not chip a link inside a sentence. Over photography, use white at 8 to 20 percent.

### Phone menu: scrolling-row-under-bar (seen on Apple Intelligence, Stripe Connect, Stripe Climate)

*Feeling: everything is one flick from the top.*

A row under the header that scrolls sideways and clips at the screen edge, so the cut item says there is more. Stripe pins a section name at left and scrolls the rest beneath the top bar on every product page. Apple Intelligence adds a back chevron and pins the active chip. Bonobos runs 60px round category photos with 12px labels, with the fifth cut by the edge, so categories come before the hero. Monocle clips a row of section tabs split by pipes. Ritual splits a 50px row into two shop cells. Use it for product families, shops and sections with five to eight peers. The cut through the last visible item is the affordance, so never fit the row exactly.

Fade only the right end. My first version faded both ends, and at rest the mask ate the first letter of the first link.

```css
.sub{position:sticky;top:0;z-index:4;display:flex;align-items:center;height:44px;background:var(--bg);font-size:14px;font-weight:500}
.sub b{flex:none;padding:0 16px;color:var(--accent)}
.sub div{display:flex;gap:20px;min-width:0;padding-right:32px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;
  -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent);
  mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent)}
.sub div::-webkit-scrollbar{display:none}
```

For a shop, the same row carries round photos:

```css
.rail{display:flex;gap:12px;padding:8px 16px 12px;overflow-x:auto;scroll-snap-type:x proximity;scroll-padding-left:16px;scrollbar-width:none}
.rail a{flex:none;width:68px;scroll-snap-align:start;text-align:center;font-size:12px;line-height:16px}
.rail img{width:60px;height:60px;border-radius:50%;object-fit:cover;margin:0 auto 6px}
```

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

### Showpiece: chapter-numeral-or-word (seen on Theatre Memory, Driftime, Special Production Agency)

A held breath between eras. Seen on 4 sites.

**Use it for:** Long storytelling pages and reports.

**Avoid it for:** Short marketing pages.

**Recipe:** A chapter opener with a single year, word or set of initials at 300-920px wide, alone on a plain ground with only the nav remaining. Use between long sections. It may recolour per chapter.

<a id="scroll-resolved-text"></a>

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.