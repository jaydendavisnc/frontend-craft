# Your direction (seed 1038)

Reads as **agency**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Magram, a silver agency page)

1. Navigation: `nav.top-bar/ruled-cell-bar`
2. Hero: `hero.type-only/centred-statement`
3. Logo wall: `section.logo-wall/logos-inside-another-block`
4. Stats: `section.stats/rule-bound-numerals`
5. Steps process: `section.steps-process/rail-across-columns`
6. Case study: `section.case-study/work-grid`
7. Testimonial: `section.testimonial/quiet-interlude-quote`
8. Comparison table: `section.comparison-table/tinted-featured-column`
9. Pricing table: `section.pricing-table/standard-vs-custom-pair`
10. Faq: `section.faq/split-title-rows`
11. Closing section: `section.cta-band/seam-overlap-close`
12. Footer: `section.footer/contact-first-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Xanh Mono** with **Akt**. A didone-flavoured mono italic as a headline is rare; a warm grotesque stops it reading as code.
- Display: 64px, phone 38px, weight 400, tracking -0.02em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Akt 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Xanh+Mono:ital,wght@0,400;1,400&display=swap https://fonts.googleapis.com/css2?family=Akt:wght@100..900&display=swap

## Palette

From Concertgebouw: bg #f4f4f2, surface #ffffff, text #3f2c30, muted #726a6b, accent #a6192e. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **brand line: a compressed belief, only with a strong image**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `staged-fade-stair`, **Scroll** `horizontal-scrub-rail`, **Hover** `accent-flip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Magram** (agency, silver) https://www.magram.fr/
- Doing: A custom-software studio sold like a law firm: navy ink, square buttons, numbers and blunt French copy instead of decoration.
- Why it feels made: A strict 1104px column, one navy, one cream and 1px rules everywhere make long sales content feel orderly. Square CTAs give a plain Albert Sans page some backbone.
- If imitated badly: Bordered boxes in every section drift towards a template, and the form's r10 inputs already disagree with the square buttons.

**Stripe Billing** (finance, gold) https://stripe.com/billing
- Doing: An enterprise product page that earns trust through restraint: small light type, hairline structure and one vivid gradient behind exact product UI.
- Why it feels made: Every section hangs off the same two rails and a 4-6px radius system, and the UI mocks are complete enough to read at 9px. The single gradient gives life without touching the type.
- If imitated badly: 32px light headlines only work with exact rules, spacing and real UI; with placeholder mocks the page looks timid and empty.

**Cal.com** (saas, gold) https://cal.com
- Doing: A scheduling product sold by showing real UI fragments in one grey-on-white tile system, warmed by dithered documentary photos.
- Why it feels made: One tile recipe of hairline shell, 8px inset and #f3f4f8 well repeats for every feature, and what sits inside is real component UI. Halftoned photography gives an ownable texture that carries through to the footer wordmark.
- If imitated badly: Headline chips and double-rim cards turn cheap fast when the chips are decorative or the radii do not nest.

## System choices

- Frames: `media.illustration/single-thread-line`
- Headline: `type.display-headline/swapping-word`
- Section headings: `type.section-heading/indexed-cell-heading`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.panel/tonal-feature-panel`
- Surface ladder: `atmosphere.light-surface-ladder/warm-tone-only-ladder`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/knockout-badge-tiles`
- Page rhythm: `layout.grid-system/edge-to-edge-ledger`
- Load: `motion.load-sequence/staged-fade-stair`
- Scroll: `motion.scroll-pin-or-scrub/horizontal-scrub-rail`
- Hover: `motion.hover-state/accent-flip`
- Phone menu: `nav.mobile-menu/rich-entry-sheet`
- Showpiece: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Atmosphere: `atmosphere.grid-or-lines/survey-rays-and-diagonals`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: ruled-cell-bar (seen on New Exhibitions, Better Auth, Telkom-OT)

*Feeling: a table or a ledger.*

The nav is built from cells with 1px rules between them. New Exhibitions gives the logo a 250px cell, then five equal 238px cells under a 34px utility strip, about 112px in all. Better Auth runs document tabs in 150px cells with a solid black end cap for sign in. Telkom numbers its cells in mono. Use it for archives, institutions and technical brands with a grid already in the page. Avoid it if the page has no matching grid, because the rules then point at nothing.

Run the verticals the full height of the bar, and let them continue into the page's own rules if you can. Radius 0 to 4.

### Hero: centred-statement (seen on Linear Method, Wispr Flow, ECI)

- **Feels:** Editorial and serious, when the type is good.
- **Use when:** The headline is short, the voice is distinct, and something rises at the fold.
- **Not when:** You are about to add a gradient to one word to make it interesting.
- **Recipe:** An optional 11 to 14px label, a two-line 72 to 128px headline at 1.0 leading, a 13 to 20px sub, a CTA. Linear's method page sets 128 on near-black with a 13/20 paragraph about 340px wide and two faint arcs at the base. Wispr Flow runs 96/1 with a speech ribbon crossing the lower right corner, carrying real words. ECI floats four small claims at uneven positions around a 102px title. Instrument sets 64 on black with a white pill.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Stats: rule-bound-numerals (seen on Stripe, Increase, Modern Treasury)

*Feeling: a page from an annual report.*

Each column or the whole row hangs from a hairline, which gives figures something to stand on without a box. Modern Treasury uses three 368px columns, 48px gaps, each topped by its own grey rule, with a light figure at about 47px. Increase sets mono numerals centred between full-bleed hairlines with 120px padding. Stripe's home page sets four stats between two hairlines with one dark and the rest grey, and a short blue segment rides the rule above the active one. Magram uses cream 96px percentages on navy, which is the variant to take when your numbers describe the problem and not you. Note the mix of words and digits on Modern Treasury's third column.

```css
.band{background:var(--ink);color:var(--bg);padding:48px 0 112px}          /* or any deep ground */
.r{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;max-width:1104px;margin-inline:auto}
.c{border-top:1px solid color-mix(in srgb,currentColor 20%,transparent);padding-top:20px}
.c b{display:block;font:600 96px/1 var(--font-display);letter-spacing:-.03em;font-variant-numeric:lining-nums}
.c p{margin-top:18px;font-size:18px;line-height:26px;opacity:.7}
.c cite{display:block;margin-top:10px;font-style:normal;font-size:13px;line-height:18px;opacity:.6}  /* always a source */
@media(max-width:860px){.r{grid-template-columns:1fr;gap:32px}.c b{font-size:64px}}
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

### Case study: work-grid (seen on Instrument Work, Pentagram Work, Wolff Olins Work)

*Feeling: a portfolio with confidence.*

The agency index. Images carry everything, and chrome is close to zero. Pentagram runs three columns with 16px gutters and no radius, with a 13px title and a grey line under each. Instrument runs four at radius 24, with small `#BRAND` tags and pill filters above. Wolff Olins offsets paired images of different heights on black. MetaLab sets large filter pills under an 88px headline. Vary tile types, photo and flat colour, and leave the captions small. Alternating left and right rows are the weak form of this, because they read as a template, so use them only for fewer than four projects.

### Testimonial: quiet-interlude-quote (seen on Cursor Blog, Canary, Dub Pricing)

*Feeling: a voice in the room between two rooms.*

A short quote between feature blocks, with no card. It lowers the temperature of a page and gives a reader somewhere to breathe. Use it to break up long feature runs. Avoid it as your main proof, because it is designed to be secondary.

Centre 20 to 28px text on a 580 to 820px measure, then a 32 to 48px avatar, 14px name and role, and an optional customer logo after a 1px divider. Keep it under your headings in visual weight, as Tally does by setting it in mid grey. Emphasis comes from ink rather than size: Mercury sets the first sentence in full ink and the rest muted, Dub lifts one phrase to weight 500, and Canary underlines one phrase with a 3px accent rule. Choose one.

### Comparison table: tinted-featured-column (seen on Forma24, Neon Pricing, Hotjar)

*Feeling: follow this line.*

One column carries a tone from header to foot. Neon tints it near-black with side borders on a darker page. Hotjar gives it a deep header cell and a pale pink body, with zebra rows on the other columns and small multiplier pills beside numbers. Forma24 lights its own column on a dark photo. It is the simplest way to say "we win" without a slab.

### Pricing table: standard-vs-custom-pair (seen on Stripe Pricing, Parsley Health, Orbit Design)

*Feeling: pay as you go, or talk to us.*

Stripe's pair is the clean answer to usage pricing: a white card with the rate in a tinted panel inset 4px, and a navy card with four stacked chips listing what custom covers. The inset panels repeat the same gap, which ties two different cards together.

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

### Closing section: seam-overlap-close (seen on Loops, Buildkite, Vite)

*Feeling: the page is one physical object.*

The close joins the footer as a material fact. Loops ends its light plate in a 50px corner to reveal a deep colour beneath. My first version ran the plate full width and looked like a rounded band. The real plate is also inset about 52px from the left over a stack of brand stripes, and that second edge is what makes it read as a lifted sheet. Buildkite's card straddles a page colour change, with a real window breaking 32px above it. Universally Speaking's chamfered card straddles the footer seam, and Vite's footer overlaps a grain band.

```css
body{background:linear-gradient(90deg,var(--accent) 0 14px,color-mix(in srgb,var(--accent) 80%,var(--ink)) 14px)}
/* inset on the left as well as rounded: two free edges make it a sheet */
.plate{margin-left:52px;background:var(--bg);border-radius:0 0 0 56px;padding:96px 24px 120px}
.close{width:min(1100px,calc(100% - 48px));margin-inline:auto;padding-block:112px 72px;display:flex;align-items:center;justify-content:space-between;gap:40px;color:var(--bg);
  border-bottom:1px solid color-mix(in srgb,var(--bg) 18%,transparent)}
.close h2{font:400 44px/1.1 var(--font-display);letter-spacing:-.015em}
.close p{font-size:17px;line-height:1.4;margin-top:10px;color:color-mix(in srgb,var(--bg) 72%,transparent)}
.pair{flex:none;margin-top:0;gap:10px}
.close .b{background:var(--bg);color:var(--accent)}
.close .b.s{background:none;color:var(--bg);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--bg) 55%,transparent)}
@media(max-width:760px){.plate{margin-left:20px;border-radius:0 0 0 32px}.close{flex-direction:column;align-items:flex-start;padding-block:72px 48px}}
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

### Frames: single-thread-line (seen on Elyx, Trasti, White Label IQ)

*Feeling: playful and continuous. The page is one gesture.*

**Use:** Agencies and services, or a literal metaphor for tangled work. Tall pages that need something connecting sections. **Avoid:** Short pages, or more than one thread. It also needs care on phones, where a 1,300px drawing has nowhere to go.

Use one constant stroke of 1 to 1.5px, or a heavier 6px hand line, with no fills. The line runs down the page, knots into spot drawings at key moments, and crosses section joins. Flip its colour on dark bands. A single wide drawing of about 1280px with varying line weight can take white callout tiles at scattered positions. Threading a hairline through type works when text indents to clear it. Draw it with `stroke-dashoffset` tied to scroll only if it stays quiet.

### Headline: swapping-word (seen on Codecademy, Calvyn, Fora)

Live and specific. One sentence addressing several audiences. Seen on 6 sites.

**Use it for:** Platforms serving several verticals, and products with a clear list of jobs.

**Avoid it for:** Any page where the moving word is the only idea. Must stop for reduced motion.

**Recipe:** Fixed opening words with one slot at the end cycling 3-5 nouns, masked to the line height and moved vertically over 400-600ms, or typed with a cursor. Reserve the widest word's width, or centre so the whole line re-centres. Hold each word 2-3 seconds. Stop for reduced motion.

<a id="statement-as-hero"></a>

### Section headings: indexed-cell-heading (seen on Polar, Telkom-OT, CSDG)

A drawing sheet or a filing system. Seen on 4 sites.

**Use it for:** Technical, architectural and industrial products, and pages with a real numbered sequence.

**Avoid it for:** Fake numbering on three unordered features.

**Recipe:** Heading sits in a ruled grid cell with a small index: a 16-30px number in muted ink or accent mono beside or above it, matching nav numbering if any. Title 30-80px weight 400, cell padding 24-40px. A folder-style slug can replace the number on developer pages.

<a id="italic-turn-heading"></a>

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: tonal-feature-panel (seen on Apple Intelligence, Notion Calendar, Factory)

*Feeling: a clean room with one thing in it.*

The workhorse. One tone step, no border, no shadow. Either a single centred statement, as on Apple at 1260x622, radius 28, about 120px padding, or left copy with product UI running off an edge, as on Notion. Use it to host your most important feature. Inset it 24px from the viewport on wide layouts, or use container width.

```css
.panel{position:relative;overflow:hidden;max-width:1024px;height:640px;margin:0 auto;
  background:var(--surface);border-radius:12px;padding:32px 34px}
.panel h3{font:700 18px/1.3 var(--font-display);margin-bottom:6px}
.panel p{max-width:500px;font-size:16px;line-height:24px}
/* Product runs off the left and bottom edges; only its free corner is rounded. */
.shot{position:absolute;left:0;right:56px;top:210px;bottom:-60px;border-radius:0 28px 0 0;overflow:hidden}
@media(max-width:760px){.panel{height:560px;padding:24px}.shot{right:0;top:230px}}
```

### Surface ladder: warm-tone-only-ladder (seen on Anthropic News, Cursor Pricing, Zed Blog)

*Feeling: considered and slightly bookish. The current look of serious AI and tools companies.*

**Use it for:** Tools and editorial product pages that want warmth without cream. **Avoid:** It is popular, so it is the first thing to swap if the page reads as a clone of the category.

Page #f7f7f4, panels #f2f1ed, controls #e6e5e0, ink #26251e, secondary text ink at 60%, hairlines ink at 10%. In oklch: L .975, .958, .921, C .004 to .007, hue 95 to 105. No shadows and no pure white.

Set secondary text as the ink at reduced strength in oklab, not as a grey, so it stays warm on every step of the ladder.

```html
<style>
/* tone only. no shadow, no white, and text is the ink at reduced strength so it picks up the ground */
:root{--bg:#f7f7f4;--surface:#f2f1ed;--surface-2:#e6e5e0;--ink:#26251e;
  --ink-2:color-mix(in oklab,var(--ink) 60%,transparent);--ink-3:color-mix(in oklab,var(--ink) 40%,transparent);
  --line:color-mix(in oklab,var(--ink) 10%,transparent)}
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:40px}
.tile{background:var(--surface);border-radius:8px;padding:18px 16px;height:320px;color:var(--ink-2);font-size:13px;
  box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--ink) 2.5%,transparent)}
.tile h3{color:var(--ink);font-weight:500}
.tile a{display:flex;height:36px;align-items:center;justify-content:center;border-radius:99px;background:var(--surface-2);color:var(--ink);margin-top:14px}
.tile a.on{background:var(--ink);color:var(--bg)}
.tile hr{border:0;border-top:1px solid var(--line);margin:16px 0}
</style>
<div class="tiles">
  <div class="tile"><h3>Free</h3><a>Get started</a><hr>Two lanes</div>
  <div class="tile"><h3>Team</h3><a>Get Team</a><hr>Unlimited lanes</div>
  <div class="tile"><h3>Scale</h3><a class="on">Get Scale</a><hr>Rules and routing</div>
  <div class="tile"><h3>Network</h3><a>Talk to us</a><hr>Single sign-on</div>
</div>
```

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

### Page rhythm: edge-to-edge-ledger (seen on Vite, CSDG Development Group, Driftime Impact Report 2022)

**Feel.** A table the size of the screen. Blunt and confident.
**Use when** content falls naturally into facts, numbers and links. **Avoid** with few items, because empty cells then look unfinished.
**Recipe.** No side margin. 1px rules run viewport edge to edge, and the page splits at 720, then 360. Each cell holds one thing: a number, a claim or a link. Radius 0. Images span 2x2 cells with about 29px inset, or bleed to the rules. On Driftime the rules take the room's ink colour and start and stop with their section, like a newspaper grid.

### Load: staged-fade-stair (seen on Linear, Brilliant, Paco Coursey)

*Feeling: calm, composed, nothing unusual.*

The nav is solid from frame one. Then the headline comes up from almost nothing, softly blurred, line by line, then the subhead, then the product window, with a small detail last. On Linear the headline is about 25 percent and still blurred at 1.1s, full by 1.9s, and the window is complete by 3s. Use it for premium product pages with a dark or quiet ground. The order is the design. Do not add travel, and do not skip the blur, because blur is what removes the sharp edge of an opacity fade.

```css
@keyframes stair{from{opacity:.02;filter:blur(8px)}to{opacity:1;filter:none}}
.s{animation:stair 1.3s var(--ease-ui) both}
.s1{animation-delay:.3s}    /* headline, line one */
.s2{animation-delay:.48s}   /* headline, line two lags by a beat */
.s3{animation-delay:.72s}   /* subhead */
.s4{animation-delay:1.25s;animation-duration:1.1s} /* product */
```

Split the headline into lines by hand, in markup, so they cannot rewrap on a font swap. Rendered on `--ease-sheet` at 0.9s, the same stair looked finished at 0.3s. The slow gentle curve above is what matches.

### Scroll: horizontal-scrub-rail (seen on Decagon, Roy Jad, Oliver Dupuy)

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

### Hover: accent-flip (seen on Stripe Pricing, Warp Pricing, Stripe Climate)

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

### Phone menu: rich-entry-sheet (seen on Notion About, AuthKit, Notion Calendar)

*Feeling: a small landing page in the menu.*

Rows carry more than names. Notion stacks three 106px pastel cards with a title, a line and its own drawing, then Resources and Pricing in plain 22px type, then two buttons in a pinned tray. Supabase uses a select to switch sections, with icon tiles on an 80px pitch. Hugging Face groups chips under gradient-tinted headings. Rewiring America uses chip tabs on a yellow band with described rows below. Use it when names alone do not sell the product, and you have real drawings. Avoid card lists with generic icons.

### Showpiece: pinned-step-swap (seen on LiveKit, Prototype, mymind)

*Feeling: turning pages beside a fixed picture.*

The classic product pin. The panel holds while a list advances and a visual changes to match. LiveKit frames the section in one hairline panel, with steps on the left, and isometric planes on the right, where the active plane goes bright white with a label while the others hold at about 10 to 25 percent. Use it for processes of three to five steps. Each step gets about one screen. It must collapse to a plain stacked list on a phone. See `scroll.md` Sticky text swap beside a pinned visual.

```css
.track{height:320vh;position:relative}
.stage{position:sticky;top:0;height:100vh;display:grid;place-items:center}
.step{color:var(--ink-2);transition:color .25s var(--ease-ui)}.step.on{color:var(--ink)}
.plane{opacity:.55;border:1px solid var(--line);transition:border-color .35s var(--ease-ui),transform .6s var(--ease-settle)}
.plane.on{opacity:1;border-color:var(--ink);background:var(--surface)}
@media (max-width:760px){.track{height:auto}.stage{position:static;height:auto;display:block}}
```
```js
const set=n=>{steps.forEach((e,i)=>e.classList.toggle('on',i===n));planes.forEach((e,i)=>e.classList.toggle('on',i===n))};
const tick=()=>{const r=track.getBoundingClientRect(),p=Math.min(.999,Math.max(0,-r.top/(r.height-innerHeight)));set(Math.floor(p*steps.length))};
addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});tick();
```

Keep the inactive planes visible. In my first build they sank to nothing and one lonely rectangle floated in the dark. Depth comes from what recedes. Empty planes also looked cheap until the active one held a real object, and a hairline frame around the section turned loose shapes into a diagram.

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

### Atmosphere: survey-rays-and-diagonals (seen on Greylock, Universally Speaking, Dogstudio)

*Feeling: empty space with a drawn reason to be there.*

**Use it for:** Investors, finance and agencies with generous padding. **Avoid:** Lines under text. They live in the gaps.

Three to five 1px rays fan from a rail corner across an empty band and land on the next section rule, or a few accent diagonals kink behind panels. Spacing becomes a drawn thing. Margins only.

Greylock fans three to five 1px rays from a rail corner across an empty band and lands them on the next section rule, so padding becomes a drawn thing. Lines stay in margins and never run under text.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.