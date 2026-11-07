# Your direction (seed 1030)

Reads as **health**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**A commercial driver defence attorney in Joliet, Illinois, for CDL holders fighting tickets that threaten a job.**

- Naming: Surname plus CDL Defense, or Trucker Law
- Facts to build on: Handles Will, Grundy, Kendall and Cook counties; Flat 650 dollars per ticket, paid before court date; Masking of a conviction is banned for CDL holders under federal rules; Clients rarely need to appear in person
- Their vocabulary: CDL, serious violation, disqualification, masking, FMCSA, CSA score, supervision, MVR, DOT inspection, Part 383

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Disqualification ladder.** Stepped rungs from first serious violation through a second within 3 years at 60 days, to a third at 120 days, and major offence at 1 year Data: Second serious in 3 years: 60-day stand-down Behaviour: Picking your violations raises you up the rungs
- **Courthouse cards.** Row of court cards, one per county, with courthouse, courtroom, session day, typical disposition and next date Data: Will County, Joliet, Courtroom 212, Tuesdays 9 am, most resolved at first date Behaviour: Cards slide along a rail with arrows
- **Your ticket explained.** Annotated specimen of an Illinois citation with numbered pins on statute, CMV box, speed over, court date Data: Pin 3: 15 mph over in a CMV is serious Behaviour: Stepping through pins pans and zooms the specimen

## The page, in order (structure from Hims, a gold health page)

1. Navigation: `nav.top-bar/bottom-docked-bar`
2. Hero: `hero.collage/routing-tiles`
3. Product card: `commerce.product-card/quick-add-tile`
4. Steps process: `section.steps-process/drawn-path-or-diagram`
5. Team: `section.team/founder-bio-split`
6. Stats: `section.stats/stat-tiles`
7. Faq: `section.faq/split-title-rows`
8. Testimonial: `section.testimonial/portrait-story-cards`
9. Newsletter: `section.newsletter/footer-row-signup`
10. Closing section: `section.cta-band/photo-sign-off`
11. Footer: `section.footer/contact-first-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Nixie One** with **Charis SIL**. An elegant thin slab for one or two big words, then a plain reader that asks nothing of it.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Charis SIL 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Nixie+One&display=swap https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400;1,700&display=swap

## Palette

From Hims: bg #ffffff, surface #f5f0e8, text #1f1f1f, muted #595959, accent #fec671. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `line-or-word-rise`, **Scroll** `margin-drift`, **Hover** `directional-fill-wipe`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Hims** (health, gold) https://hims.com
- Doing: A telehealth store built as a stack of full-bleed rounded colour rooms, each tinted from its product photography, with the nav recolouring to match.
- Why it feels made: Colour comes out of the photography instead of a fixed brand palette, so each room feels art-directed, while a tiny kit of 24px cards, 48px pills and two-tone headlines holds the variety together.
- If imitated badly: Stock photos or section colours not sampled from the image break it instantly, and tone-on-tone cards turn into muddy brown boxes without real art direction.

**Strava** (health, silver) https://www.strava.com
- Doing: A logged-out home reduced to one job, sign up, framed by outdoor photography on both sides.
- Why it feels made: The three-panel composition gives a plain form real presence, and orange is rationed to the one action and the route line.
- If imitated badly: A form between two photos only works with strong documentary images; stock photos would make it feel like a generic gate page.

**Bakstad Construction** (architecture, gold) https://bakstadconstruction.com/
- Doing: A Seattle builder's site hung like a gallery wall: one stencil monogram, one hairline rail, and finished houses with air around them.
- Why it feels made: Two type sizes, two ink values and deliberately shifting image widths do all the work, while the stencil mark is the single authored flourish. Caption rows align exactly to image edges.
- If imitated badly: Without top-grade architectural photography the empty field reads as an unfinished page.

## System choices

- Frames: `media.photography/documentary-in-system-tile`
- Headline: `type.display-headline/caps-block`
- Section headings: `type.section-heading/scroll-held-heading`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.panel/sheet-stack`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/rule-opened-title-body-split`
- Load: `motion.load-sequence/line-or-word-rise`
- Scroll: `motion.scroll-reveal/margin-drift`
- Hover: `button.hover-response/directional-fill-wipe`
- Phone menu: `nav.mobile-menu/rich-entry-sheet`
- Showpiece: `type.type-as-image/chapter-numeral-or-word`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`
- Atmosphere: `atmosphere.gradient-field/gradient-as-rule`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: bottom-docked-bar (seen on Golden Assisted Transportation, Fishwife, Fora)

*Feeling: everything under your thumb.*

The nav lives on the bottom edge. Fora makes it a 54px white strip that is both nav and footer on a one-screen site. Golden Assisted Transportation runs a navy bottom bar with a gold call button, where the action is the entire reason for the visit. Use it for one-screen sites and local services. Avoid it on long marketing pages, where it reads as a cookie bar.

Set 42 to 54px, 11 to 15px links, and pad with `env(safe-area-inset-bottom)` on phones. Keep the top of the page clear, or the design has two navs.

### Hero: routing-tiles (seen on Hims, Fora, Fellow)

- **Feels:** A front door. Choose your path.
- **Use when:** Several real products or audiences, for health, retail and institutions.
- **Not when:** There is one product. Tiles then invent choices.
- **Recipe:** Headline about 56px, with a second ink on the last words, set high with no sub. Under it a tight mosaic of real destinations: two 678 by 199 photo tiles, then four 337 by 100 rows, radius 24, gaps only 4px. Each tile is a link with a two-tone label, a product image at the right and a chevron at the edge. Then a large promo band rises at the fold. Fora uses a full-viewport 3 by 2 grid of 432, 432 and 576px columns, no gaps, no radius, with logotype, a rotating word, a portrait, news and a still life.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
.big{grid-column:span 2;height:198px;border-radius:24px;position:relative;overflow:hidden;color:#fff;
  padding:18px 20px;background:center/cover}
.big h2{font:500 18px/1.18 var(--font-text)}
.big h2 span{display:block;font-weight:400;opacity:.72}  /* two-tone label */
.row{position:relative;height:100px;border-radius:24px;background:var(--surface);
  display:flex;align-items:center;gap:10px;padding:0 40px 0 18px;font:500 16px var(--font-text)}
.row span{color:var(--ink-2);font-weight:400}
.row svg{margin-left:auto;width:58px;height:70px}        /* product render, not an icon */
.big::after,.row::after{content:"";position:absolute;right:16px;top:50%;width:8px;height:8px;
  border-right:2px solid currentColor;border-top:2px solid currentColor;transform:rotate(45deg) translateY(-50%)}
```

The 4px gap with a 24px radius is the signature, because it makes the tiles read as one mass. At 16px gap, a default, it turns into a card grid. Put a real product in every row. Our placeholder shapes held up only because the two big tiles carried real pictures.

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

### Steps process: drawn-path-or-diagram (seen on New Material, Hims, Brand Identity School)

*6 sites, quality 4.* The route becomes the picture. Use when your process has a shape, and you have an illustrator or a strong diagram. The Brand Identity School draws a sine path over illustrated hills that fills as you scroll, with mascots moving along it. Rewiring America seats five role cards on a thick ring. New Material runs light along an open outline. Hims stacks perspective slabs behind an athlete cutout. See `references/motion/scroll.md`, recipe 9.

Seen on New Material, Hims, Brand Identity School, Rewiring America, Cascara Cabinet.

### Team: founder-bio-split (seen on Nicole Heim Studio, Airz Fitness, D Alexander CPA)

*Feeling: this person will pick up the phone.*

One named person as the pitch. It is the best proof a small business has. Nicole Heim splits the page 50/50: a 676 by 1000 greyscale portrait cropped to the waist, beside a bio at 63/68 in the page's display serif, with a link pinned to the photo's base. Energen Digital sets a portrait with an 8px coloured offset on an ink band and a 56px greeting. motusmade uses a cut-out on flat sky blue. Convex gives two founders an 80px portrait and bios listing what they built before, on dark, which is exactly the right proof for an infrastructure buyer. Airz butts a 680 by 580 photo against a dark text panel with no gap.

Write in the first or close third person, with specifics. Crop to the waist: my first portrait was a tight face at 676 by 1000, and it read like a passport. The original has a hand, a shirt and a wall, so a person in a place.

```css
.lab{display:block;font:500 14px/1 var(--font-text);padding-bottom:12px;border-bottom:1.5px solid var(--ink);margin-bottom:40px}
.s{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.s img{width:100%;height:1000px;object-fit:cover;filter:grayscale(1)}
.t{display:flex;flex-direction:column;justify-content:space-between;font:400 63px/68px var(--font-display);letter-spacing:-.02em}
.t p+p{margin-top:40px}.t a{font:500 14px/1 var(--font-text)}     /* pinned to the photo's base */
@media(max-width:900px){.s{grid-template-columns:1fr}.s img{height:auto;aspect-ratio:4/5}.t{font-size:32px;line-height:37px;gap:32px}}
```

### Stats: stat-tiles (seen on Levels, Soundsensing, Buffer About)

*Feeling: small dashboards.*

Filled tiles, one figure each, when the numbers need more explanation than a caption. Levels gives the model: three near-black tiles about 380 by 285, a 64px numeral in a pale tint, then a 22px subject, then a 13px sentence, and below the row a plain line stating the method and its limits. That three-step ladder of figure, subject and explanation is what lifts it above a stat card. Nx lets one numeral contain a blue arrow, drawing the change. Buffer publishes its real business figures in plain bordered tiles beside a link to a live dashboard, and that openness is the proof. Avoid an icon in a circle above the figure, which is the single most common generated section.

### Faq: split-title-rows (seen on Cursor Pricing, Stripe Sessions, Devin Desktop)

*Feeling: composed, unhurried.*

Heading alone at the left, rows in the right half. The empty column gives a dull section composure, and it keeps the section aligned with the page's grid instead of floating in the middle. This is the strongest default for product pages. Cursor sets it on a full-bleed tone band with rows from the centre line, 57px tall, between 1px rules at top and bottom. Tana adds a small action under the title. Devin pushes rows to x=517 and raises the pitch to 107px. Neon lifts product names to full ink inside muted answers, which makes a long answer skimmable. Stripe Billing uses dashed rules and a 28px tinted plus tile.

```css
.band{background:var(--surface);padding-block:96px}
.split{width:min(1200px,calc(100% - 48px));margin-inline:auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.split h2{font:400 36px/1.15 var(--font-display);letter-spacing:-.02em}
.list{border-top:1px solid var(--line)}
.split summary{min-height:57px;font-size:16px;font-weight:500;transition:color .15s}
.split summary:hover{color:color-mix(in srgb,var(--ink) 65%,transparent)}
.a{padding-bottom:20px;color:var(--ink-2);max-width:34em;text-wrap:pretty}
@media(max-width:860px){.split{grid-template-columns:1fr;gap:24px}.band{padding-block:64px}}
```

### Testimonial: portrait-story-cards (seen on Soundsensing, Tana, Codecademy)

*Feeling: real people, and you can see them.*

The photograph carries the card. Use it for consumer, health, education and nonprofit work, whenever the people are the story. Avoid it with stock photos, because this variant has nowhere to hide them.

Tana darkens the lower half of a 692px photo at radius 32 and sets a 28/36 serif quote at 85 percent white, with a small glass tag naming the language the person spoke. GiveDirectly uses 440px white cards with a 400px photo on top, a headline over a bottom gradient, then a 16/24 quote with the key figure bolded. Soundsensing's cards use site photographs of work actually being done, flush to a warm body, and they are a lesson for any trade: show the job, not the person smiling at the camera. Huel lays a frosted 12px blur panel across a 276 by 484 portrait's lower half. Talkspace steps a pastel block into the photo with 20px notches.

### Newsletter: footer-row-signup (seen on CleanShot X, Ripple Health, Marine Layer)

*Feeling: always there, never in the way.*

A row inside the footer. CleanShot sets it between two faint rules with a title and line at left, and a 48px outlined input with a button at right, disabled until the field has text. Ripple sets a thin headline over a giant ghost wordmark on teal. This is the most sensible home for a sign-up on a product site.

```css
.row{display:grid;grid-template-columns:1fr minmax(0,420px);gap:48px;align-items:start;padding-block:40px;border-block:1px solid var(--line)}
.row h3{font:600 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row form{display:flex;gap:8px}
.row input{flex:1;min-width:0;height:48px;padding:0 16px;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);background:none;outline:0;font-size:16px}
.row input:focus{border-color:color-mix(in srgb,var(--ink) 50%,transparent);box-shadow:0 0 0 3px color-mix(in srgb,var(--ink) 8%,transparent)}
.row button{flex:none;height:48px;padding:0 18px;border:0;border-radius:14px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
.note{font-size:13px;line-height:1.4;color:var(--ink-3);margin-top:12px}
@media(max-width:760px){.row{grid-template-columns:1fr;gap:20px}}
```

### Closing section: photo-sign-off (seen on Wispr Flow, Comet, Nuro)

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

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

### Frames: documentary-in-system-tile (seen on Nuro, VanMoof, ECI)

*Feeling: honest and specific. These people and places exist.*

**Use:** Real teams, events, field work, schools, infrastructure. The default for service businesses that have real photographs of mixed quality. **Avoid:** When the frames are weak and few. Two honest photographs beat six poor ones.

Shoot or select real moments: hands at work, people mid-gesture, equipment in use, wide places with small figures. Do not grade toward a brand tone if the realness is the point. Place every frame in one tile recipe: one radius from 8 to 24px, one or two ratios such as 16:10, and a caption below in 12 to 14px, or one line at bottom-left in white on a calm area. Vary the shot distance from tile to tile, so a fleet gets a night pan, a top-down, a studio cut-out and a close sensor crop.

### Headline: caps-block (seen on Inngest, Bun, Gagosian)

Signage, stencil, poster. Authority by density. Seen on 29 sites.

**Use it for:** Culture, sport, hardware, engineering, developer tools with attitude. Condensed for poster presence at modest width; neo-grotesque for a machine-label feel.

**Avoid it for:** Sentences over about 40 characters, and any page that also uses caps for labels at scale.

**Recipe:** Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

**Why it works:** Only 8.5% of H1s are uppercase, and their median line-height is 1.1. The ones that look designed sit well below that, because caps have no descenders and need far less leading than mixed case.

<a id="wide-heavy-display"></a>

### Section headings: scroll-held-heading (seen on Apple Vision Pro, Affirm, i-D RED)

Cinematic. The heading is part of the sequence. Seen on 3 sites.

**Use it for:** Long pinned sequences and film-led product pages.

**Avoid it for:** Short pages. It must read at every scroll position.

**Recipe:** The heading is tied to scroll: pinned about 90px below the nav at 48px weight 300 while content moves beneath it, or rising into place over footage as a clip settles, at about 80/84 weight 700. One short phrase, legible at every scroll position.

<a id="two-voice-heading-system"></a>

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: sheet-stack (seen on Hims, Loopcraft, Seed)

*Feeling: layers of paper sliding over each other.*

The next section arrives as a sheet with 24 to 40px top corners, sliding over the last, or each section is a colour room with rounded corners on all four sides, separated by 40px of page. Hims gives each room a colour matched to its imagery and steps inner cards down to 24px. This is the best way to change colour between sections, since a colour change becomes a physical event rather than a flat band. It works unchanged on phones.

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

### Page rhythm: rule-opened-title-body-split (seen on ECI)

**Feel.** Considered, institutional, slightly European.
**Use when** a section has a title, a short body and one image. **Avoid** when body copy is long, since it must fit against the column's bottom.
**Recipe.** A 2px ink rule across 32px gutters opens each section. Title 52/52 at top left, body 20/24 pinned to the bottom of the same column, 681px media at the right from x=727 about 35px below the rule. Title and body sit far apart on purpose. The rule and the column hold them together.

### Load: line-or-word-rise (seen on Auth0, 360Rides, North Hub Partners)

*Feeling: quiet confidence.*

The legitimate fade-up. Words or lines rise 6 to 12px with a short stagger, while the controls around them are already in place. Auth0 rises its words about 6px on flat violet, then the gradient blooms once they have landed. Sierra runs three lines about 0.5s apart over a playing film. Use it on headlines you want to feel placed. For a masked rise, take `load.md` Line mask. Stay under 12px, and never apply it to more than the hero.

### Scroll: margin-drift (seen on Notion Calendar, BIG, Stripe Blog)

*Feeling: something alive at the edge.*

Only small marginal objects move. Notion Calendar's stickers fade in near their heading and drift at a different rate from the text, some still at about 30 percent on arrival, on measured CSS scroll timelines. Panels and type stay still. BIG breathes a column's width between about 394 and 434px as you scroll. Use it to add life to a calm page, 20 to 80px of travel at most. Parallax on anything larger is where this starts to feel like an effect. See `scroll.md` Parallax depth layers.

### Hover: directional-fill-wipe (seen on Render, Nuro, Fenriz Gym)

*Feeling: ink poured in from one side.*

The fill enters from an edge instead of fading. Render scales an absolutely placed span from `scaleX(0)` to `scaleX(1)` in 300ms on `cubic-bezier(.4,0,.2,1)`, and the label flips on the same curve. Nuro wipes a text link to violet in 300ms. It works best on outlined buttons. Keep it on a pseudo-element under the label, and let it leave the way it came. For a fill that starts at the pointer, see Entry-point fill in `references/motion/interaction.md`.

```css
.h-wipe{position:relative;isolation:isolate;overflow:hidden;background:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);
  transition:color .3s cubic-bezier(.4,0,.2,1)}
.h-wipe::before{content:"";position:absolute;inset:0;z-index:-1;background:var(--ink);scale:0 1;transform-origin:left;
  transition:scale .3s cubic-bezier(.4,0,.2,1)}
.h-wipe:hover{color:var(--bg)}
.h-wipe:hover::before{scale:1 1}
```

### Phone menu: rich-entry-sheet (seen on Notion About, AuthKit, Notion Calendar)

*Feeling: a small landing page in the menu.*

Rows carry more than names. Notion stacks three 106px pastel cards with a title, a line and its own drawing, then Resources and Pricing in plain 22px type, then two buttons in a pinned tray. Supabase uses a select to switch sections, with icon tiles on an 80px pitch. Hugging Face groups chips under gradient-tinted headings. Rewiring America uses chip tabs on a yellow band with described rows below. Use it when names alone do not sell the product, and you have real drawings. Avoid card lists with generic icons.

### Showpiece: chapter-numeral-or-word (seen on Theatre Memory, Driftime, Special Production Agency)

A held breath between eras. Seen on 4 sites.

**Use it for:** Long storytelling pages and reports.

**Avoid it for:** Short marketing pages.

**Recipe:** A chapter opener with a single year, word or set of initials at 300-920px wide, alone on a plain ground with only the nav remaining. Use between long sections. It may recolour per chapter.

<a id="scroll-resolved-text"></a>

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

### Atmosphere: gradient-as-rule (seen on Fenriz Gym, Universally Speaking, London Short Film Festival)

*Feeling: the brand gradient, used as a line rather than a wash.*

**Use it for:** Photo-led and local brands, and any page where a full wash would fight the imagery. **Avoid:** Pairing it with a full wash on the same screen. Choose one strength per section.

Compress the brand gradient to a 24px hard-edged strip, a rule, or a 60px seam between image and field. Reuse the same stops behind titles at tint strength, so saturation steps down as content gets denser.

Fenriz closes its hero with a 24px hard-edged strip and repeats the same stops behind section titles and the footer logo. London Short Film Festival uses a 60px gradient only to hide the seam between a colour field and a photo.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.