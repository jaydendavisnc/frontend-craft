# Your direction (seed 1024)

Reads as **brand**, surface **landing**, register **dark-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Custom Multicades, a silver ecommerce page)

1. Navigation: `nav.top-bar/two-row-masthead`
2. Hero: `hero.full-bleed-media/card-docked-in-image`
3. Collection grid: `commerce.collection-grid/model-chooser-row`
4. Gallery portfolio: `section.gallery-portfolio/peek-rail`
5. Steps process: `section.steps-process/rail-across-columns`
6. Contact form: `section.contact-form/underline-field-form`
7. Annotated shot: `product.annotated-shot/hotspot-rings`
8. Menu or catalog: `section.menu-or-catalog/centred-menu-column`
9. Testimonial: `section.testimonial/colour-flood-quote`
10. Closing section: `section.cta-band/plain-centred-close`
11. Footer: `section.footer/masked-wordmark`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Hedvig Letters Serif** with **Hedvig Letters Sans**. Sister faces with the same swelling stroke ends: enough contrast to structure a page, none to argue.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hedvig Letters Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&display=swap https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&display=swap

## Palette

From KTA+ Store: bg #151118, surface #101016, text #fefefe, muted #78859b, accent #112236. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-then-media`, **Scroll** `exploded-teardown`, **Hover** `chevron-flip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Custom Multicades** (ecommerce, silver) https://custommulticades.com/
- Doing: A dark red-glow arcade configurator storefront built in Framer with product renders emerging from a crimson gradient.
- Why it feels made: Consistent glassy cards with 16-24px radii, a floating pill nav and a single red gradient hero tie product renders together. Content is practical: collections, process, quote form, reviews.
- If imitated badly: Generic dark Framer template feel; a chat widget overlays every frame and the heavy type gets loud.

**Apple MacBook Pro** (brand, gold) https://www.apple.com/macbook-pro
- Doing: A two-model comparison on pure black where each column is centred product shot, name, one-liner, price, and two clear actions.
- Why it feels made: Rigid vertical rhythm, one blue accent, real financing numbers set as plain centred text, and generous black space make the buying decision effortless.
- If imitated badly: Copying the black plus pills without Apple's product photography and strict spacing looks bare; legal footnote blocks need hierarchy.

**Linear** (saas, gold) https://linear.app
- Doing: A near-black page where real, recreated product UI does the selling, held together by one half-page split and full-bleed hairlines.
- Why it feels made: Every panel is live DOM UI masked into the dark instead of a screenshot, and the ladder of greys, 510 weight and strict x=80 / x=752 alignment leave nothing loose.
- If imitated badly: Copy the darkness without the believable product content and it collapses into an empty dark template with grey text.

## System choices

- Frames: `media.photography/documentary-in-system-tile`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/scroll-held-heading`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.panel/floating-utility`
- Surface ladder: `atmosphere.dark-surface-ladder/brand-hue-ladder`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/two-up-seam-tiles`
- Load: `motion.load-sequence/colour-plate-then-media`
- Scroll: `motion.scroll-pin-or-scrub/exploded-teardown`
- Hover: `motion.hover-state/chevron-flip`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Showpiece: `motion.scroll-pin-or-scrub/exploded-teardown`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Atmosphere: `atmosphere.glow-or-light/light-inside-the-render`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-row-masthead (seen on Monocle, Le Saint Georges, Omega)

*Feeling: an institution with a front door for everyone.*

Two stacked rows, a brand or utility row over a section row. Monocle runs a 64px row with a centred wordmark and a subscribe button, a 1px black rule, then a 45px centred section row with pipes between items. Retail and universities use the same logic for log in, region and stores. Use it for magazines, institutions and large stores with many audiences. Avoid it as decoration, since two rows cost over 100px of screen.

Set a 24 to 64px upper row at 10 to 13px, and a 44 to 90px lower row at 14 to 18px, with 1px rules between. Keep both rows on the same page rails. Twilio shows the hard-edged version: a 32px pale utility strip over an 80px white bar.

### Hero: card-docked-in-image (seen on Soundsensing, Ritual, Sierra)

- **Feels:** The picture is true, and here is the working proof.
- **Use when:** You have a reading, price, offer or agent line that belongs in the scene. This is the cheapest way to make a photo hero feel like a product.
- **Not when:** The card repeats the headline, or holds a generic stat you could not defend.
- **Recipe:** Copy at the left, bottom or centre. One small working card docked at the lower right, 40px from both edges, radius 8 to 20. Seen: a 318 by 190 frosted card streaming an agent's spoken line, a 416 by 128 offer with price strike and pill, a 285 by 165 live stat with a trend line, a donation widget, two 474 by 260 product cards. Soundsensing floats status cards in the middle, between copy and object. Sierra's card is so quiet that it almost sinks into the blanket, and that restraint is the point.

```css
.foot{margin-top:auto;padding:0 40px 40px;display:flex;justify-content:space-between;align-items:flex-end;gap:48px}
h1{font:400 68px/1.04 var(--font-display);letter-spacing:-.02em;color:#fff;max-width:760px}
/* a working object: a real place, a real value, a real change over time */
.card{flex:none;width:340px;padding:14px 16px 12px;border-radius:14px;color:#fff;font-size:13px;
  background:rgb(0 0 0/.42);box-shadow:inset 0 0 0 1px rgb(255 255 255/.14);
  -webkit-backdrop-filter:blur(22px) saturate(1.25);backdrop-filter:blur(22px) saturate(1.25)}
.val{margin-top:12px;font:500 40px/1 var(--font-text);letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.card svg{width:100%;height:42px;margin-top:10px}   /* one sparkline, 1.5px, no fill, no axis */
```

Use dark glass over a dark region. A white frosted card over a dark photo turns into a grey block, and it steals the first read from the picture.

### Collection grid: model-chooser-row (seen on Apple iPhone Store, reMarkable, Apple MacBook Pro)

*Feeling: a confident small range.*

A few products, each given a tall column so that a buyer can compare them side by side. reMarkable sets three 400 by 880 columns at a warm tint, the newest in a soft gradient, with a large render, a 34px name, a 22px line and a 40px outline button. Apple sets white cards at radius 28 on #f5f5f7, bleeding off the right edge, and repeats the same order of swatch dots, `New` label, name, sub and price in every card, so that the eye drops straight down a column. Polestar splits two cars by a single 1px rule, with no card at all. Use it for hardware, cars and any range under about eight.

Keep the order and baseline identical across columns. Each name gets one line that says who it is for, which helps more than a spec list. Avoid it past about eight models, when columns stop being comparable. Fill the column: reMarkable's tablets take about 80 percent of its width. A thin object at 30 percent leaves a tall empty tint, which is what ours did first, so scale slim goods up or shorten the column. Let the newest column's gradient run at real strength, because ours at 16 percent looked like a stain.

```css
.row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.col{display:flex;flex-direction:column;align-items:center;text-align:center;background:var(--surface);padding:48px 32px 40px}
.col.new{background:linear-gradient(color-mix(in srgb,var(--accent) 46%,var(--surface)),var(--surface))}
.pic{position:relative;width:100%;aspect-ratio:1/1.05}.pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;scale:1.3}
.col h3{font:400 34px/40px var(--font-display);letter-spacing:-.015em;margin-top:24px}
.d{font-size:20px;line-height:28px;margin-top:12px;max-width:13em}
.p{font-size:15px;color:var(--ink-2);margin-top:12px;font-variant-numeric:tabular-nums}
.b{display:inline-flex;align-items:center;height:40px;padding:0 20px;margin-top:20px;box-shadow:inset 0 0 0 1px var(--ink);font-size:14px;font-weight:500}
```

### Gallery portfolio: peek-rail (seen on Apple Vision Pro, Aman, La Table de Joakim)

*Feeling: there is more, just past the edge.*

Left-aligned to the page grid and running off the right edge, with the next tile cut by the viewport. Apple's rail uses 818 by 528 tiles at radius 20, a 20px gap, a 21px caption below and 36px round arrows right-aligned beneath. Aman uses square destination cards with an underlined link. Loopcraft uses 375 by 560 cards at radius 40. The cut tile is the affordance, so never let tiles end flush with the viewport. Use native horizontal scrolling with `scroll-snap`, which gives touch for free, and add arrows only as an extra. On phones the arrows can go.

```css
section{--edge:max(24px,calc((100vw - 1024px)/2));padding:96px 0}
h2{font:600 48px/1.08 var(--font-display);letter-spacing:-.018em;margin:0 var(--edge) 48px}
.rail{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:var(--edge);padding:0 var(--edge);scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.rail figure{flex:0 0 min(818px,86vw);scroll-snap-align:start}
.rail img{display:block;width:100%;height:528px;object-fit:cover;border-radius:20px;background:var(--surface)}
.rail figcaption{font-size:19px;line-height:27px;color:var(--ink-2);padding:20px 24px 0 0;max-width:30em}
.rail b{color:var(--ink);font-weight:600}
.ctl{display:flex;justify-content:flex-end;gap:12px;margin:24px var(--edge) 0}
.ctl button{width:36px;height:36px;border:0;border-radius:50%;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--ink);font-size:15px}
.ctl button:hover{background:color-mix(in srgb,var(--ink) 14%,var(--bg))}
@media(max-width:760px){section{padding:56px 0}h2{font-size:32px;margin-bottom:24px}.rail{gap:12px}.rail img{height:60vw}.rail figcaption{font-size:16px;line-height:23px}.ctl{display:none}}
```

### Steps process: rail-across-columns (seen on Modern Treasury, Stripe Atlas, Hawl Design)

*6 sites, quality 4.* A timeline in one glance. Use for lifecycle stories with four or so stops, and for APIs and finance. Modern Treasury's rail is really a control: clicking a stop changes a request and response panel below, so it doubles as tabs.

Recipe: columns on a 1px line. 16 to 17px hollow dots, the current one solid or double ringed. An 11px mono index, a 16px/600 title, a 14px caption, all centred. The line runs dot to dot and does not overhang. Hawl fills a 6px rail with a gradient, and aligns its columns left, centre and right under the dots. Symbol Studio raises each tread to form a stair.

Seen on Modern Treasury, Stripe Atlas, Hawl, Symbol Studio, lemon.markets. Suits light precision, gradient light, dark precision.

```css
.rail { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 56px; }
/* 12.5% is half a column: the line runs through the first and last dot centres, and stops */
.rail::before { content: ""; position: absolute; left: 12.5%; right: 12.5%; top: 8px; height: 1px; background: var(--line); }
.stop { all: unset; position: relative; display: block; padding: 0 16px; text-align: center; cursor: pointer; }
.stop:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.dot { display: block; width: 17px; height: 17px; margin: 0 auto 14px; border-radius: 50%; position: relative; z-index: 1; background: var(--bg); box-shadow: inset 0 0 0 1px var(--ink-3); transition: box-shadow .2s; }
.stop[aria-selected="true"] .dot { background: var(--accent); box-shadow: inset 0 0 0 2px var(--accent), inset 0 0 0 5px var(--bg); }
.t { display: block; font: 600 16px/1.3 var(--font-text); color: var(--ink-2); }
.stop[aria-selected="true"] .t { color: var(--ink); }
@media (max-width: 820px) { .rail { grid-template-columns: 1fr 1fr; row-gap: 24px; } .rail::before { display: none; } }
```

Below the rail, use the panel from `tabs` with one request and one response column. Fill the request with enough fields to look like a real call: ours looked thin at five.

### Contact form: underline-field-form (seen on Villa Aurelia, Structure Engineers, Alessandro Stella)

*Feeling: a letter, not a ticket.*

Fields are single lines, so the page stays a page. Five of the seven pages are gold. MetaLab sets an 88px display line at left on black, with a 2 by 2 grid of underlined fields at right and a small pill submit. Villa Aurelia uses tracked caps labels in its accent with date and guest fields for a booking. Alessandro Stella makes the form from the same ruled rows as the rest of the page, and Sidekick sets a thick pale underline with bold labels. ON Makelaardij places its team's real shopfront photo beside the form, which does more for trust than any badge. The rule must darken on focus, because there is nothing else to change.

```css
.wrap{width:min(1360px,calc(100% - 48px));margin-inline:auto;padding-block:120px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.wrap h1{font:300 88px/1 var(--font-display);letter-spacing:-.02em}
form{display:grid;grid-template-columns:1fr 1fr;gap:56px 32px;align-content:start;padding-top:12px}
.f{display:grid;gap:6px}.f.w{grid-column:1/-1}
label{font-size:12px;color:var(--ink-2)}
/* a field is only a line. The line turns full ink on focus, and that is the whole focus state */
input,select,textarea{width:100%;border:0;border-bottom:1px solid var(--line);background:none;border-radius:0;outline:0;padding:8px 0 12px;font-size:16px;transition:border-color .15s}
textarea{height:112px;resize:none}
input:focus,select:focus,textarea:focus{border-bottom-color:var(--ink)}
.chk{display:flex;align-items:center;gap:10px;font-size:13px}
.chk input{width:14px;height:14px;padding:0;border:1px solid var(--line);appearance:none;border-radius:2px}
.chk input:checked{background:var(--ink)}
.end{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between}
form button{height:32px;padding:0 16px;border-radius:16px;border:0;background:none;box-shadow:inset 0 0 0 1px var(--line);font-size:13px;cursor:pointer;transition:background .15s,color .15s}
form button:hover{background:var(--ink);color:var(--bg)}
@media(max-width:860px){.wrap{grid-template-columns:1fr;gap:56px;padding-block:72px}.wrap h1{font-size:64px}form{grid-template-columns:1fr;gap:36px}}
```

### Annotated shot: hotspot-rings (seen on Hinge Health, UNITO)

*Things you can point at.* Quality 4/5, 2 sites.

**Use:** Physical products, rooms, and form or motion analysis. **Not:** Dense UI.

**Recipe:** Room render or photo about 800px, radius 14-20. Rings 30px translucent with 14px white centres on each part, matched by a card alongside. Or green skeleton dots with a counter overlaid on a person.

### Menu or catalog: centred-menu-column (seen on Gramercy Tavern Dining Room Menu, Minetta Tavern Menus, Republique Menu)

*Feeling: the card on a white tablecloth.*

One centred column on warm paper. Gramercy Tavern sets 16px condensed tracked caps names and 17px italic ingredients beneath, with a small `OR` between choices and a mottled paper ground. Its Tavern menu uses three such columns, with the price as a bare number on its own line. Minetta sets a burgundy serif name with an inline price, a muted italic line, script section heads, and thin vertical rules framing the column. Republique opens with a very large `MENU` and tracked tabs. It suits fine dining and prix fixe, and it is easy to get right. Keep it to one column on phones and do not reduce the type.

```css
body{text-align:center}
.w{max-width:720px;margin:0 auto;padding:40px 24px}
.c{font:700 18px/24px var(--font-display);font-stretch:condensed;letter-spacing:.14em;text-transform:uppercase;margin:44px 0 20px}
.it{margin-bottom:22px}
.it b{display:block;font:700 16px/22px var(--font-display);font-stretch:condensed;letter-spacing:.07em;text-transform:uppercase}
.it i{display:block;font:italic 400 17px/24px var(--font-text)}
.or{font:700 13px/18px var(--font-text);letter-spacing:.1em;margin:-8px 0 14px}
.dash{width:14px;height:1px;background:var(--ink);margin:30px auto}
.pair{margin-top:56px}
.pair p{font:italic 400 17px/24px var(--font-text)}
.note{margin-top:44px;font:400 16px/23px var(--font-text)}
```

### Testimonial: colour-flood-quote (seen on Linear, Wispr Flow, ClickHouse)

*Feeling: one loud moment on a quiet page.*

Quotes on panels of strong colour. Use it once, on a page that has been restrained up to that point, and the contrast does the rest. Avoid it on a page that is already colourful. Linear runs two panels on near-black, one soft gradient and one acid solid, in unequal widths of 880 and 432, 480 tall, radius 8, 8px gap, and it is the only colour on the page for several screens. The unequal widths matter, since two equal panels read as a pricing table.

Quote 32/36 top left with a hung mark, foot pinned low with a logo, a 1px divider, a 14px name and a muted role. Keep the type dark on the fill and let the middle stay empty. For the ghost shape in the corner, use the customer's real mark, drawn huge and pale, because a plain circle reads as a placeholder. Heart & Soil shows the small-business version: an 800px muted lavender panel, a long 32/50 serif quote, a first name and town, a 428 by 536 framed photo of that wedding, and the next slide peeking as a 72px sliver with a 50px arrow on the seam. That is the best thing a local business can build here.

```css
.row{display:grid;grid-template-columns:880fr 424fr;gap:8px}
.b{position:relative;overflow:hidden;height:480px;border-radius:8px;padding:32px;display:flex;flex-direction:column;justify-content:space-between;color:var(--ink)}
.b blockquote{position:relative;font:500 32px/36px var(--font-display);letter-spacing:-.022em;padding-left:.44em;text-indent:-.44em;max-width:17.5em}
.ghost{position:absolute;right:-90px;top:-70px;width:640px;height:640px;fill:#fff;opacity:.42}   /* the customer's mark */
figcaption{position:relative;display:flex;align-items:center;gap:20px}
figcaption i{width:1px;height:36px;background:color-mix(in srgb,currentColor 14%,transparent)}
@media(max-width:860px){.row{grid-template-columns:1fr}.b{height:auto;min-height:340px;gap:64px}}
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

### Section headings: scroll-held-heading (seen on Apple Vision Pro, Affirm, i-D RED)

Cinematic. The heading is part of the sequence. Seen on 3 sites.

**Use it for:** Long pinned sequences and film-led product pages.

**Avoid it for:** Short pages. It must read at every scroll position.

**Recipe:** The heading is tied to scroll: pinned about 90px below the nav at 48px weight 300 while content moves beneath it, or rising into place over footage as a clip settles, at about 80/84 weight 700. One short phrase, legible at every scroll position.

<a id="two-voice-heading-system"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: floating-utility (seen on International Magic, ACME, Loops)

*Feeling: a small object left on the page.*

A small fixed object that hugs its content. International Magic's caption tray is 56px tall, with width set by the text, so it changes from about 90 to 180px as projects change. Loops replaces the chat bubble with a 160x156 note carrying a calendar icon and a serif title. Anthropic parks a 384x234 news card 24px from the corner. Use one per page. Make it dismissible, and keep it off the content on phones.

### Surface ladder: brand-hue-ladder (seen on Stripe Sessions, Customer.io, Affirm)

*Feeling: owned. The dark belongs to this company and no other.*

**Use it for:** A brand with a real hue that wants a dark section or dark mode without going neutral. **Avoid:** Weak or neon accents: high-chroma greens and yellows make a sickly ground. Pull chroma down.

Take the accent hue. Page oklch(.195 .034 h), panel .245 .042, tile .30 .046, rule .33 .04. Text .98 .005, .81 .03, .64 .035. No neutral grey anywhere, so the dark section stays inside the brand.

Plum, teal, purple and violet versions all measured this way: #00191c, #032125, #0b363b, and #140424, #20033c, and #181622, #242034, and #12121e, #1b1c32, #3e476c. Lightness steps of about .05, and chroma grows slightly with each step because darker colours need less of it to look saturated.

```html
<style>
/* one hue, four lightnesses, taken from the accent. the whole ladder moves when the accent moves */
/* scoped to the section, so a light page can hold one dark chapter. move it to :root for a whole dark page */
.cast{--bg:oklch(from var(--accent) .195 .034 h);--surface:oklch(from var(--accent) .245 .042 h);
  --surface-2:oklch(from var(--accent) .30 .046 h);--line:oklch(from var(--accent) .33 .04 h);
  --ink:oklch(from var(--accent) .98 .005 h);--ink-2:oklch(from var(--accent) .81 .03 h);--ink-3:oklch(from var(--accent) .64 .035 h);
  background:var(--bg);color:var(--ink);padding:88px clamp(16px,3vw,40px)}
.cast .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));border:1px solid var(--line);background:var(--surface)}
.cast .cell{padding:28px;min-height:220px;border-left:1px solid var(--line);color:var(--ink-2)}
.cast .cell:first-child{grid-row:span 2;border-left:0}
.cast .cell+.cell+.cell{border-top:1px solid var(--line)}
.cast .chip{display:inline-block;background:var(--surface-2);padding:4px 10px;border-radius:6px;color:var(--ink)}
</style>
<section class="cast"><div class="grid">
  <div class="cell"><span class="chip">Throughput</span><p>Containers matched to a sailing in the last 24 hours.</p></div>
  <div class="cell"><span class="chip">Security</span><p>Every release and override is signed.</p></div>
  <div class="cell"><span class="chip">Support</span><p>A named port desk through every peak week.</p></div>
</div></section>
```

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

### Page rhythm: two-up-seam-tiles (seen on Apple)

**Feel.** Retail confidence. Big, simple, unmistakable.
**Use when** you have several strong products of equal rank. **Avoid** without strong imagery, since tiles have nothing else.
**Recipe.** Full-width hero, then 2-up tiles about 702x580 with 12px seams and 12px page margins, radius 0, no shadow. Copy centred at each tile's top. Alternate pale and black tiles in a checker so neighbouring images never compete.

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

### Scroll: exploded-teardown (seen on Prägen Hätlen, Scale AI, VanMoof)

*Feeling: understanding by taking it apart.*

One object separates. Prägen Hätlen scrubs a watch through rotation, explosion and component close-ups over about 16,000px, with ground tone stepping between chapters and a persistent CTA. Plvs Ultra separates a chip stack along dotted guides. Scale AI fans panes in perspective. Use it for physical products and layered systems. Prerender frames unless you have a real model. See `scroll.md` Image sequence scrub on canvas.

### Hover: chevron-flip (seen on Calvyn, Chromatic, Hellgate)

*Feeling: the menu state, told by one glyph.*

A menu trigger's chevron rotates 180 degrees. Calvyn takes 0.2s, Docker 0.3s, Tana 0.2s, while the label takes a 5 to 8 percent tint. Dub flips with `scaleY(-1)`. Velora snaps the colour but eases the rotation, and that is the right split: the chevron carries the state, so it must be seen moving. Use it on every nav with panels.

```css
.trigger svg{transition:transform .25s var(--ease-ui)}
.trigger:hover,.trigger[aria-expanded=true]{background:var(--hover-tint)}
.trigger[aria-expanded=true] svg{transform:rotate(180deg)}
```

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

### Showpiece: exploded-teardown (seen on Prägen Hätlen, Scale AI, VanMoof)

*Feeling: understanding by taking it apart.*

One object separates. Prägen Hätlen scrubs a watch through rotation, explosion and component close-ups over about 16,000px, with ground tone stepping between chapters and a persistent CTA. Plvs Ultra separates a chip stack along dotted guides. Scale AI fans panes in perspective. Use it for physical products and layered systems. Prerender frames unless you have a real model. See `scroll.md` Image sequence scrub on canvas.

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

### Atmosphere: light-inside-the-render (seen on Custom Multicades, lorisbukvic.graphics, Deebak Tamilmani Portfolio)

*Feeling: real light from a real scene.*

**Use it for:** 3D heroes, portfolios and brand worlds. **Avoid:** CSS glow laid on top of a render. It separates instantly.

All light belongs to the render: additive streaks, signs, rim fringes, soft shadow edges. No CSS glow over it. Background stays black or a flat floor. Bloom stays inside the image and falls to ground before its edge.

dbydt adds thin translucent lines along each axis of its buildings, blurred lengthwise, so it reads as a long exposure with no halos. Teenage Engineering gets its only gradient from a soft shadow edge on a grained floor.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.