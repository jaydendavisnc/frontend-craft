# Your direction (seed 1019)

Reads as **food-drink**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Villa Aurelia, a gold hospitality page)

1. Navigation: `nav.top-bar/two-tier-product-subnav`
2. Hero: `hero.full-bleed-media/side-column-on-calm-side`
3. Menu or catalog: `section.menu-or-catalog/service-price-panels`
4. Testimonial: `section.testimonial/display-pull-quote`
5. Gallery portfolio: `section.gallery-portfolio/lead-mosaic`
6. Feature alternating: `section.feature-alternating/bleed-past-the-edge`
7. Contact form: `section.contact-form/stepped-form`
8. Feature grid: `section.feature-grid/rule-topped-columns`
9. Stats: `section.stats/one-giant-number`
10. Closing section: `section.cta-band/pattern-edged-panel`
11. Footer: `section.footer/contact-first-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Frank Ruhl Libre** with **Public Sans**. A light high-contrast roman for travel and architecture, sturdy enough for bright skies.
- Display: 72px, phone 44px, weight 300, tracking -0.02em, leading 1.04. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.5. UI: Public Sans 14px 500. Label: 500, uppercase, 0.06em
- Load: https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&display=swap https://fonts.googleapis.com/css2?family=Public+Sans:wght@400..500&display=swap

## Palette

From Felix Gray: bg #ffffff, surface #f7f9f8, text #2c4041, muted #667472, accent #d7f25b. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **host**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-mark`, **Scroll** `blur-in-on-entry`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Villa Aurelia** (hospitality, gold) https://hotelaurelia.online
- Doing: A Turkish boutique hotel presented as a warm-paper editorial with serif/italic headlines, tilted photo cards and a hairline booking form.
- Why it feels made: Restraint in colour (cream, espresso, one gold dot) and consistent micro-typography give a luxury register; the eyebrow, serif-plus-italic headline, centred muted body rhythm repeats exactly. Real hotel functions (room tabs, restaurant, booking form) are fully designed.
- If imitated badly: The look relies on strong photography and perfect letterspacing; with weaker imagery or heavier fonts it becomes wedding-invitation kitsch.

**Vitsoe** (ecommerce, silver) https://vitsoe.com
- Doing: A furniture maker's home page run like an honest catalogue: Univers, one link colour and photographs of real homes.
- Why it feels made: Extreme restraint in type sizes plus strict column alignment carries the Dieter Rams ethos, and the copy is as calm and specific as the layout.
- If imitated badly: With stock photos or a lesser grotesque the same layout reads as a 2012 corporate CMS.

**Cal.com Pricing** (saas, gold) https://cal.com/pricing
- Doing: A pricing page that behaves like a product surface: one heavy geometric voice, a charcoal-on-white system, and a single inverted card.
- Why it feels made: Radii, button heights and text sizes sit on a tight scale, and the only spectacle is saved for the halftone footer wordmark. Small affordances such as dotted tooltip underlines and per-card switches show real product thinking.
- If imitated badly: Heavy tight display type needs a well-drawn face; set in a generic bold grotesk the page collapses into a default shadcn pricing template.

## System choices

- Frames: `media.photography/cutout-on-flat`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/wide-tracked-caps`
- Surfaces: `surface.card/colour-block-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/colour-plate-mark`
- Scroll: `motion.scroll-reveal/blur-in-on-entry`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `mobile.phone-nav/no-menu-at-all`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Showpiece: `type.type-as-image/full-width-statement`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-tier-product-subnav (seen on Stripe Billing, Apple Vision Pro, Claude)

*Feeling: a company, and then this product within it.*

A global bar with a second row for the product you are reading. On Stripe the global row is 76px and the second row 66px, with the product name in accent colour at left and page anchors at right. On Apple the 44px global bar scrolls away and a sticky 52px bar stays, with the product name at 21/600, 12px links, and a blue Buy pill. Claude's second row is only 44px, with a page label and a dropdown. Use it on any product page within a multi-product company. Avoid it on a one-product site, where the second row has nothing to do.

Keep the second row visually lighter than the first, and let only it stick. Separate with a dashed hairline, as Stripe does, or a blur band. Stripe Atlas shows that colour alone can carry the state: active link in navy, the rest in accent, no pill at all.

### Hero: side-column-on-calm-side (seen on Framework, Stone Island, Levels)

- **Feels:** Direct, commercial, clear about what it sells.
- **Use when:** The image has a subject on one side and quiet on the other, for hardware, health and retail.
- **Not when:** You have to darken half the image to create the calm. That is `colour-wash-from-one-side`, done badly.
- **Recipe:** Subject in the right 55%. Copy column at the left, vertically centred, at a 56 to 140px gutter: 48 to 68px headline, 16 to 18px sub, a pill or link. Framework colours part of its headline with the accent against a black macro. Betterment measures 68/68 at weight 500, three lines, 550px wide, with three check bullets in the accent. Stone Island drops the copy low left in small type and hangs its one link beside the figure, on the title's baseline.

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

### Feature alternating: bleed-past-the-edge (seen on Spline, Aesop, Fairphone)

*8 sites, quality 4.* Bigger than the page. A window or photo leaves the container and runs off the viewport, which says there is more. Use once or twice, for the most important product moment.

Recipe: a 265 to 360px copy column at the page edge, and a window about 830px wide that passes the container and bleeds off the viewport. Spline adds a 12px mono eyebrow, a 56/64 heading and four 70px-pitch icon rows beside it. For photos, Medusa622 and Aesop let the photo run off one side at a 60px page gutter.

Seen on Spline, VS Code, Aesop, Fairphone, Le Saint Georges, Figma FigJam. Suits dark precision and photo-led.

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

### Feature grid: rule-topped-columns (seen on Public, Tana, Claude)

*8 sites, quality 4.* Open and calm. Use it for three to six short claims when you want air and have no art. It is the plainest fix for a three-card row: delete the box and keep one line. Skip it for long lists.

Recipe: columns with a 24 to 32px gutter. Each opens with a 1px rule on its top edge, or its left edge with about 32px of inset, then 28px of space, a small icon or number, a 20 to 24px title at weight 400, and 16 to 17px copy at 1.6. Fix the rule weight and colour across every column. A dark variant uses a roughly 15% white rule at the top of each cell.

Seen on Tana, Public, Claude, Customer.io, Neon, Boom. Suits light precision, warm neutral, dark precision and photo-led.

### Stats: one-giant-number (seen on Leo Cussen Centre for Law, Royal College of Art, Birdie)

*Feeling: this one figure is the whole point.*

If you have one number that would stop someone, let it have a section. Checkout.com sets a figure at about 200px in a mono bold inside an outlined rounded card, with a 14px caption. Leo Cussen uses serif counters at 96px that roll like odometers on a yellow section. The Royal College of Art sets 130px white figures on full-bleed studio photographs, changing with scroll. DeepNode dims the next stat until it scrolls into place. Avoid four of these in a row.

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

### Footer: contact-first-footer (seen on Bakstad Construction, Nicole Heim Studio, Locomotive)

*Feeling: a business card.*

For a studio or a trade there is no sitemap to speak of, and the visitor wants to get in touch. Bakstad Construction runs one 95px ruled strip with text clusters at fixed columns: firm and principal, keyed `E` and `T` lines, address, then Instagram and Get in Touch. Everything is real selectable text at 15/20. Nicole Heim stacks label and value pairs at the left margin and sets nav right-aligned. Locomotive sets its address and phone at 70px, with pictograms inside the line, and it becomes the signature of the site. Loopcraft fills a viewport with a short greeting, a 48px email and a 40px phone number.

Do not use it for a product with a real navigation to index. Do use the keyed `E` and `T` idea anywhere, because it is both compact and handsome.

```css
body{display:grid;grid-template-columns:92px 1fr;min-height:100vh;font-family:var(--font-text)}
.rail{border-right:1px solid var(--ink);position:relative;font-size:15px}
.rail b{position:absolute;left:16px;top:8px;font:700 54px/1 var(--font-display)}
.rail span{position:absolute;left:16px;bottom:30px}
.main{display:grid;grid-template-rows:1fr auto}
.strip{border-top:1px solid var(--ink);min-height:95px;padding:24px 28px;display:grid;grid-template-columns:minmax(0,285px) minmax(0,319px) 1fr auto;gap:0 16px;font:400 15px/20px var(--font-text)}
.strip dl{display:grid;grid-template-columns:28px auto;align-content:start;width:max-content}
.strip dd{margin:0}
.strip nav{display:flex;gap:32px}
@media(max-width:1000px){.strip{grid-template-columns:1fr 1fr;gap:16px}}
@media(max-width:760px){body{grid-template-columns:1fr}.rail{display:none}.strip{padding:20px 16px;grid-template-columns:1fr;gap:12px}.strip a{display:inline-block;line-height:44px}}
```

```html
<footer class="strip">
  <div>MARLOW JOINERY<br>Tessa Marlow, Principal</div>
  <dl><dt>E</dt><dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
      <dt>T</dt><dd><a href="tel:+12065550142">+1 206 555 0142</a></dd></dl>
  <address>4701 Harbor Way #249<br>Seattle, WA 98116</address>
  <nav><a>Instagram</a><a>Get in touch</a></nav>
</footer>
```

### Frames: cutout-on-flat (seen on Apple, Framework, Apple Vision Pro)

*Feeling: clean, confident, retail-grade.*

**Use:** Product ranges, colourways, parts, and a recurring cut-out figure as a small signature. **Avoid:** Soft or hair-edged subjects without a clean mask. A rough cut-out is worse than a rectangle.

Set the object straight on the tile colour with no floor. Group colourways so they overlap: five units across, the group filling about 90% of tile width. Use one soft contact shadow, offset slightly away from the key light. Knolled parts laid in a grid or flat-lay work the same way. For a person, use a transparent cut-out about 80px tall and let it perch on interface edges, changing pose per section. Rotation of -12 to +15 degrees suits snacks and packs with a little parallax. Portraits work the same way: cut people out, stand them on one pale panel, and fix the head height. Thrivent runs five waist-up cut-outs on alternating pale blue and tan panels at radius about 16, with a larger centre panel and heads breaking above the panel tops, which adds life to a strict row. Motusmade sets one on a pale blue panel.

Frame.work was tagged as a 3D render, but the frames show photographed parts, so it is counted here.

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

### Primary button: wide-tracked-caps (seen on Snow Peak, KAWARA MUSEUM - LIBRARY, Magram)

*Feeling: a label on a good box.*

A short word in a wide box. Snow Peak sets 282 by 55px, radius 0, 14px caps at 0.2em, and the width ignores the label. The empty space is what feels like print. KAWARA's espresso pill does the same at 300 by 58. Use it for fashion, hospitality, museums and outdoor goods, where a slow pace suits the product. Use it once per view. On a software page it reads as slow.

### Surfaces: colour-block-card (seen on Framework, Hinge Health, 360Rides)

*Feeling: bright and sure of itself.*

Flat fills with no border or shadow. Each card owns one colour, and text is set in a dark tint of that card's own colour rather than black, which is the detail that makes it look designed. Use it where the brand is colour-led, on a neutral or black ground, three in a row at most. Framework runs whole chapters this way with panels at about 12px radius, one colour per product.

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

### Load: colour-plate-mark (seen on Studio Dado, Villa Aurelia, Fabrica Partners)

*Feeling: a house arriving.*

Now the stage variants, where the page waits. A flat screen in the brand colour with one small mark, then the page. Studio Dado's taupe hold runs about 3s before its monogram even appears, which is too long. Aim for under 1.5s total. Joby draws a logo stroke on full brand colour and lets a photo frame rise over it, which is the better shape: the plate does something and leaves. Use it for hospitality, architecture, professional practices. Set a cookie or session flag so it plays once.

### Scroll: blur-in-on-entry (seen on New Material, Poeza, Clevr Blends)

*Feeling: soft focus, unhurried.*

Copy sharpens from 8 to 12px blur as it reaches the viewport. New Material uses about 8px over about 0.4s on `.22,1,.36,1` with no translate, and the sentence is still soft while the deck settles. Use it for display lines on premium sites. Keep it off small text, where blur reads as a rendering bug, and animate at most a few elements at once, because `filter` is expensive on a large area.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

### Phone menu: no-menu-at-all (seen on International Magic, Work & Co, Per Appelgren)

*Feeling: this site is small, and honest about it.*

If the links fit, show them. International Magic keeps its three-item tray at 16px across 358px, with the wordmark in the centre, so desktop and phone share one object. Per Appelgren keeps corner links at a 16px inset. Readwise keeps its links inline. Alessandro Stella and Poeza show no menu at all. Use it for portfolios, studios and small sites with under five destinations. It saves a tap, and it signals a site with nothing to hide.

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

### Showpiece: full-width-statement (seen on Kinfolk, Oxygen Pictures, Make Town)

A hold-your-breath moment between sections. Seen on 7 sites.

**Use it for:** A section break or a sign-off. Once per page.

**Avoid it for:** More than two lines, or copy that is not worth the space.

**Recipe:** A short line scaled to fill the container: 135-318px, line-height 0.75-0.85, tracking -0.04 to -0.05em, alone in a plain viewport, or two lines force-justified to the margins. Once per page, as a section break or sign-off. Fit the size by measuring.

```css
.line      { margin: 0 16px; }
.line span { display: inline-block; white-space: nowrap; font: 600 100px/.85 var(--font-display);
             letter-spacing: -.05em; margin-left: -.03em; }
/* Add data-fit to .line and use the script under cropped-footer-wordmark. */
```

<a id="title-behind-object"></a>

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.