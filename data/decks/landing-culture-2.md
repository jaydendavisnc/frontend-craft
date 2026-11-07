# Your direction (seed 1034)

Reads as **culture**, surface **landing**, register **type-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Motto, a gold agency page)

1. Navigation: `nav.top-bar/ruled-cell-bar`
2. Hero: `hero.type-only/typographic-construction`
3. Collection grid: `commerce.collection-grid/place-and-date-grid`
4. Feature alternating: `section.feature-alternating/viewport-chapters`
5. Newsletter: `section.newsletter/underline-only-field`
6. Faq: `section.faq/tile-row-stack`
7. Case study: `section.case-study/work-grid`
8. Testimonial: `section.testimonial/open-quote-columns`
9. Team: `section.team/authored-portraits`
10. Closing section: `section.cta-band/giant-type-sign-off`
11. Footer: `section.footer/local-hours-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Hanken Grotesk** with **Hanken Grotesk**. The first neutral to try when Inter is off the table: 700 tight above, 400 open below.
- Display: 64px, phone 38px, weight 500, tracking -0.035em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hanken Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From New Exhibitions: bg #ffffff, surface #ffffff, text #000000, muted #747474, accent #51abe9. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `wordmark-docks-to-nav`, **Scroll** `layers-cross`, **Hover** `arrow-nudge`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Motto** (agency, gold) https://www.wearemotto.com
- Doing: A pale grey grid of hairlines holding enormous justified uppercase statements, tiny rectangular photos and a few crafted details.
- Why it feels made: Everything sits on one 1px rule grid and one grotesk, so scale does the work; the justified headline spread across two ruled rows is a memorable signature.
- If imitated badly: Needs real photography, strict rules and generous space; with weak images it is just big text on grey.

**Theatre Memory** (culture, gold) https://pamiecteatru.pl/en
- Doing: A national archive of theatre photography told as one sliding stack of prints, with huge grotesque type and years pinned to the corners of a white wall.
- Why it feels made: Four type sizes, four fixed anchor positions and pure black and white let the sepia objects provide all the colour and texture. Every screen has the composure of a museum wall label.
- If imitated badly: A headline split by images only works when the word survives; with lesser pictures the pinned timeline becomes a long slideshow with hijacked scroll.

**Studio Dado** (architecture, gold) https://studiodado.com
- Doing: A hospitality interior studio lets a full-bleed room render and a giant uppercase serif do all the work, with tiny grotesk metadata on a thin hairline grid.
- Why it feels made: Scale contrast is extreme (211px serif versus 13px labels) and everything snaps to a 4-column hairline grid. Photography is dark, warm and consistent, and the taupe preloader and footer tie it to the imagery.
- If imitated badly: Without a tight column grid and real architectural renders, oversized serif caps and tiny labels look unfinished.

## System choices

- Frames: `media.photography/one-light-one-grade`
- Headline: `type.display-headline/ruled-lines`
- Section headings: `type.section-heading/two-voice-heading-system`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/one-plane-alpha-ink`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/check-and-cross-system`
- Page rhythm: `layout.grid-system/newspaper-column-rules`
- Load: `motion.load-sequence/wordmark-docks-to-nav`
- Scroll: `motion.scroll-pin-or-scrub/layers-cross`
- Hover: `motion.hover-state/arrow-nudge`
- Phone menu: `nav.mobile-menu/display-type-takeover`
- Showpiece: `motion.marquee/live-data-ticker`
- Showpiece: `type.type-as-image/full-width-statement`
- Atmosphere: `atmosphere.grid-or-lines/hairlines-over-media`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: ruled-cell-bar (seen on New Exhibitions, Better Auth, Telkom-OT)

*Feeling: a table or a ledger.*

The nav is built from cells with 1px rules between them. New Exhibitions gives the logo a 250px cell, then five equal 238px cells under a 34px utility strip, about 112px in all. Better Auth runs document tabs in 150px cells with a solid black end cap for sign in. Telkom numbers its cells in mono. Use it for archives, institutions and technical brands with a grid already in the page. Avoid it if the page has no matching grid, because the rules then point at nothing.

Run the verticals the full height of the bar, and let them continue into the page's own rules if you can. Radius 0 to 4.

### Hero: typographic-construction (seen on Motto, ADCC Awards, Yuriy Vitrenko's Library)

- **Feels:** Designed by someone who loves type.
- **Use when:** Culture, studios and libraries, with words that can take being built with.
- **Not when:** Reading speed matters.
- **Recipe:** Type becomes structure. Motto justifies two 154px caps lines between 1px rules, words pushed apart, a small flag in the first gap, with a thumbnail, a 15px paragraph and an underlined link below on a strict grid. ADCC breaks words into a stepped three-column pyramid at about 130px pitch. Make Town leaves 60% blank, then a 14px letter, then a 318px word rising from the fold. The small text is what shows the scale.

### Collection grid: place-and-date-grid (seen on Sonder, New Exhibitions, Away Stores)

*Feeling: where to go next.*

For physical locations and events. Away shows three 4:3 store photos at 16px gutters with a 14px city and neighbourhood line and an 11px details arrow. Sonder puts city pills above a four-column grid at 16px gutters. New Exhibitions uses a caption triple of title, venue and date, and hover colours only the title. Use it for shops, branches, hotels and programmes. Every location needs hours and a way to get there on the next click. Hold one crop across the grid, because a photo wall of mixed storefronts falls apart faster than products do.

### Feature alternating: viewport-chapters (seen on La Table de Joakim, SpaceX, Design Museum)

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

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

### Faq: tile-row-stack (seen on Soundsensing, Cal.com, Comet)

*Feeling: soft, tappable.*

Each row is a tone tile, and rules vanish. Tiles suit soft product pages and phones, since the whole row is visibly a button. Cal.com runs radius 22, 76px rows, 20px/700 questions and a 36px white disc with a chevron, and lets long questions break into two balanced lines. Its last row asks anything else, with an arrow, and turns the FAQ into a way in. Soundsensing uses 68px rows at radius 8 and a 10px gap. Comet floats page-coloured rows with a soft shadow over faint orbit lines. Hold the gap under the row's padding so the stack reads as one object.

```css
.split2{width:min(1260px,calc(100% - 48px));margin-inline:auto;padding-block:112px;display:grid;grid-template-columns:minmax(0,1fr) 678px;gap:64px;align-items:start}
.split2 h2{font:800 52px/1.05 var(--font-display);letter-spacing:-.03em;max-width:9em}
.stack{display:grid;gap:8px}
.stack details,.ask{background:var(--surface);border:0;border-radius:22px;transition:background .15s}
.stack details:hover,.ask:hover{background:color-mix(in srgb,var(--ink) 7%,var(--bg))}
.stack summary,.ask{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px;padding:16px 20px 16px 24px;font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.01em}
.d{flex:none;width:36px;height:36px;border-radius:50%;background:var(--bg);display:grid;place-items:center;transition:transform .2s}
.d svg{width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.8}
.stack details[open] .d{transform:rotate(180deg)}
.ask{color:var(--ink-2);font-weight:600}
.ask .i{display:flex;align-items:center;gap:12px}
.ask svg.s{width:20px;height:20px;fill:none;stroke:var(--ink-2);stroke-width:1.5}
.stack .a{padding:0 76px 24px 24px;font-size:16px;line-height:1.55;color:var(--ink-2)}
@media(max-width:1020px){.split2{grid-template-columns:1fr;gap:32px;padding-block:72px}.split2 h2{font-size:40px}.stack summary,.ask{font-size:17px;padding-left:20px}.stack .a{padding:0 20px 20px}}
```

### Case study: work-grid (seen on Instrument Work, Pentagram Work, Wolff Olins Work)

*Feeling: a portfolio with confidence.*

The agency index. Images carry everything, and chrome is close to zero. Pentagram runs three columns with 16px gutters and no radius, with a 13px title and a grey line under each. Instrument runs four at radius 24, with small `#BRAND` tags and pill filters above. Wolff Olins offsets paired images of different heights on black. MetaLab sets large filter pills under an 88px headline. Vary tile types, photo and flat colour, and leave the captions small. Alternating left and right rows are the weak form of this, because they read as a template, so use them only for fewer than four projects.

### Testimonial: open-quote-columns (seen on Nicole Heim Studio, Lemon Squeezy, Payload)

*Feeling: a printed page of reviews.*

Quotes on the page in columns, with no cards. Nicole Heim runs three 427px justified serif columns at 20/25, attributions in a small sans after a dash, under a heavy 1.5px rule and about 100px of air. It looks like the back of a book jacket, which is exactly the right company to keep. Plausible's uneven 3 by 2 text wall feels gathered. Lemon Squeezy checkers 411 by 370 cells in two tones with no gaps. Magram's four 540px squares use hairlines alone. Use it for studios and text-led brands. Justify only in a serif with hyphens on, or rivers open up.

### Team: authored-portraits (seen on New Material, Instrument About, Monocle)

*Feeling: drawn by someone with a point of view.*

Portraits in one commissioned hand. Monocle's black-line busts with skin as the only fill stand on a 1px rule, with vertical rules between columns, a serif name and a grey role, and they have become a signature. Plvs Ultra uses hatched circles on a dotted bus line, with initials on leaders. New Material overlaps three round portraits with depth of field, one sharp and the rest blurred. Instrument scatters small thumbnails on leader lines, as a map of the team. Make one treatment and never mix it.

### Closing section: giant-type-sign-off (seen on Bun, Huge Contact, Temporal)

*Feeling: a poster.*

Display type carries it. Bun sets 117px heavy lines with the last words in accent, on a black band, beside a small install block. Huge ends on a 249px phrase with a tiny email field. Temporal runs 128px light type on a full gradient. Bohdan Ratiiev underlines one line with an 8px rule and sits mono columns just above it. The small thing next to the big thing is what makes it land.

### Footer: local-hours-footer (seen on Dishoom, Guggenheim Visit, Villa Aurelia)

*Feeling: the sign on the door.*

For anywhere people visit, the footer is where they check whether you are open. Sam Hoult sets a script logo at 80px left and hours as three plain lines right, on a deep espresso ground, then one row of links and round outlined socials, a faint rule, and a credit line. Isolabella della Croce gives hours per service: cellar, pool, check-in, reception. Fenriz Gym right-aligns the day labels to bold times, so the eye runs down a single gutter. Guggenheim opens its footer with Hours, Address and Tickets as three columns. Always include the street address, a working phone link and the real hours, in text. Local footers should feel like the place, so a crest, a pattern band or a drawn border is welcome here. Skip it for online-only businesses, where hours mean nothing.

```css
.foot{max-width:1312px;margin:0 auto;padding:0 64px 56px}
.top{display:grid;grid-template-columns:1fr auto;align-items:start;gap:40px;padding-bottom:64px}
.logo{font:italic 400 80px/1 var(--font-display);color:var(--accent)}
.logo small{display:block;font:400 13px/1 var(--font-text);letter-spacing:.42em;color:var(--ink-2);margin-top:10px}
.hours{display:grid;grid-template-columns:auto auto;gap:10px 32px;font-size:16px;line-height:24px}
.hours dt{color:var(--ink-2)}.hours dd{margin:0;text-align:right;font-variant-numeric:tabular-nums}
.hours .head{grid-column:1/-1;color:var(--ink);font-weight:500}
.row{display:flex;justify-content:space-between;align-items:center;padding-bottom:32px;border-bottom:1px solid var(--line)}
.row nav{display:flex;gap:40px;font-size:16px;font-weight:500}
.row address{font-style:normal;font-size:16px;color:var(--ink-2)}
.row address a{color:var(--ink);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--ink-3)}
.base{display:flex;justify-content:space-between;padding-top:24px;font-size:14px;color:var(--ink-3)}
@media(max-width:760px){.foot{padding:0 16px 32px}.top{grid-template-columns:1fr}.logo{font-size:48px}.row{flex-direction:column;align-items:flex-start;gap:16px}.row nav{flex-wrap:wrap;gap:12px 24px}.base{flex-direction:column;gap:8px}}
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

### Headline: ruled-lines (seen on Accel, Vitrenko Library, Telkom-OT)

Ruled paper, ledgers, a document of record. Seen on 3 sites.

**Use it for:** Finance, archives, libraries and engineering. Very good when the page has a table or grid to rhyme with.

**Avoid it for:** Three-line-plus headlines with very uneven lengths when rules are cut to line width. Dark rules, which turn into stripes.

**Recipe:** Each headline line rests on its own 1px rule in the pale line colour, either cut to that line's width for a stepped edge or full-bleed like ledger paper. 72-125px, weight 300-400, rule 8-14px under the baseline. Keep rules very quiet.

**Why it works:** Rare, but all three examples scored top marks. It takes one line of CSS per line of text and gives a standard headline a structure no template has.

<a id="swapping-word"></a>

### Section headings: two-voice-heading-system (seen on Brilliant, Zapier, Fly.io Blog)

A teacher and a textbook. Levels you can hear. Seen on 3 sites.

**Use it for:** Long pages with two real levels of hierarchy, such as chapters and features.

**Avoid it for:** Short pages, where a second voice is just noise.

**Recipe:** Two heading voices with fixed jobs: serif at 40-48px for chapters, sans at 30-38px flush left for features inside them, or the reverse. The reader learns the level from the voice alone. Never mix the two voices on one level.

<a id="anaphora-list"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: one-plane-alpha-ink (seen on Cognition, Gjelina New York Menus, Groq)

*Feeling: flat and severe. Everything is the same sheet marked with one ink.*

**Use it for:** Type-led AI and research brands, and anything that wants to feel printed in one colour. **Avoid:** Interfaces that need clear elevation, such as menus and dialogs.

One plane, off-white or a single warm tint, #f2f3ed to #f7f6f5, and one ink. Everything else is that ink at 2%, 5% or 6% for fills and rules, no elevation, radii near zero. One accent. Flatness is the system, so alignment must be exact.

Cognition uses black overlays at 2, 5 and 6 percent on #f7f6f5, and measures no radii or shadows. Groq adds one orange to a bone page. Gjelina shows the plane need not be neutral: one peach field, one ink and one rust accent.

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

### Icons: check-and-cross-system (seen on Raycast Pricing, Attio Pricing)

*Feeling: calm and fair. Yes is clear and no recedes.*

**Use:** Comparison tables and plan lists, where hundreds of marks have to scan without shouting. **Avoid:** Lists with no absences. A single tick column does not need a system.

Make yes and no unequal on purpose. Yes is a 14px solid disc with a white tick. No is an 11px thin cross in `--ink-3`, so absences fall back. An info mark is a 14px pale dot beside the label, and it is the quietest thing in the row. In cards, ticks can sit in 18px soft tiles. On dark, use a 16px circle tick in white and a muted plus-circle for an "everything in the plan below" row, and let one scalloped 34px verified badge mark paid plans.

```html
<svg class="yes" viewBox="0 0 14 14" aria-label="Included"><circle cx="7" cy="7" r="7"/><path d="M4 7.2 6.1 9.2 10 5"/></svg>
<svg class="no"  viewBox="0 0 11 11" aria-label="Not included"><path d="M2 2l7 7M9 2 2 9"/></svg>
```
```css
.yes { width: 14px; height: 14px; }
.yes circle { fill: var(--ink); }
.yes path { fill: none; stroke: var(--bg); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.no { width: 11px; height: 11px; fill: none; stroke: var(--ink-3); stroke-width: 1; }
```

**In the lab:** Close to Attio on the first pass, because the recipe is all proportion. In an A/B, a cross the same size as the tick turned the table into a wall of identical dots.

### Page rhythm: newspaper-column-rules (seen on Monocle, Martin Development)

**Feel.** A serious newspaper, without pretending to be one.
**Use when** many stories compete and you need density without cards. **Avoid** for a small number of items.
**Recipe.** Four 300px columns with 32px gutters in 1296px, a 1px ink vertical rule centred in each gutter, lead story spanning two, 1px horizontal rules between stories. Or three 420px columns (x=60, 510, 960) each opened by a small coloured label over a 1px rule, with contents free to differ in scale.

### Load: wordmark-docks-to-nav (seen on BIG, Royal Ontario Museum, LEDUP)

*Feeling: an introduction, then it steps aside.*

One object makes the whole trip. BIG holds a wordmark on black, then the panel rises as a shrinking band while the mark travels up-left into its nav slot, with the list already in place underneath. Royal Ontario Museum resizes its wordmark into a bottom-left lockup by about 4s. Use FLIP so a single element travels, and put the real logo in the nav so it is ready to land on. See `load.md` Logo to nav. The match between the end of this move and the resting nav is what sells it, so check the frame where they meet.

### Scroll: layers-cross (seen on International Magic, Wispr Flow, Driftime Impact Report 2022)

*Feeling: a real stack of paper.*

One layer passes over another, and the overlap links two sections with no fade. On Wispr Flow a large heading holds still while a 400px video card scrolls across it. On International Magic a 580px clip rises over a pinned frame, lifted by one wide shadow near `0 24px 60px` at 20 percent. Use it to connect a statement and a demo. If light images pass under white type, add a scrim or blend mode, since Hibachi Guru's white heading vanishes over bright photos.

### Hover: arrow-nudge (seen on Stripe, Baseten, Studio Dado)

*Feeling: going somewhere, without leaving.*

Only the arrow moves. Stripe nudges 6px on `.25,1,.5,1`, Primer 2 to 4px, Ro 3px, Vue 2px. Baseten moves an inner span diagonally by `(5px,-5px)` on `.75,0,.1,.99`, and that long symmetric curve gives it weight. Use it on any link with an arrow. Most nudges are 2 to 4px. Move the arrow only, so the button box and label stay put.

```css
.go .chev{transition:transform .3s var(--ease-quart)}
.go:hover .chev{transform:translateX(3px)}
.diag i{display:block;transition:transform .4s cubic-bezier(.75,0,.1,.99)}
.diag:hover i{transform:translate(5px,-5px)}
```

### Phone menu: display-type-takeover (seen on mymind, Fidèle, Greylock)

*Feeling: the menu is a poster.*

The links are the headline. A24 sets six words at 64px with very tight tracking on a 66px pitch, and a hairline and two lines of small links at the base. mymind sets 48px serif words with a coloured dot beside each. Greylock and Cursor run 40 to 52px. Use it for culture, fashion, agencies and any brand with a strong typeface and few links. It is a free page of brand expression, and this is where your display type gets to perform. It fails with long labels, so keep six short words or fewer.

Reveal it fast. Set `clip-path:inset(0 0 100% 0)` to `inset(0)` over about 340ms on a strong ease. On hover devices, dim the other links to 40 percent.

```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;padding:72px 18px 22px;background:var(--bg);overflow:auto;
  visibility:hidden;clip-path:inset(0 0 100% 0);transition:clip-path .34s cubic-bezier(.76,0,.24,1),visibility .34s}
.open .sheet{visibility:visible;clip-path:inset(0)}
.big a{display:block;font:500 64px/66px var(--font-display);letter-spacing:-.045em;transition:opacity .15s}
.big:hover a{opacity:.4}.big a:hover{opacity:1}
.foot{margin-top:auto}
.foot div{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0;border-top:1px solid var(--ink)}
.foot a{font:400 22px/1 var(--font-display);letter-spacing:-.02em}
```

### Showpiece: live-data-ticker (seen on Ramp, Liquid AI, Utopia Orchestra)

*Feeling: the business is running right now.*

The strongest marquee here, because it is evidence. Ramp runs a one-line ticker at the hero base: a fixed label, then scrolling labels with tabular values in chips, split by 1px ticks, with values rising live. Liquid AI runs facts in a thin strip above the nav. Use it when you have real numbers, or plainly labelled sample figures. Tabular numerals are required, or digits wobble as values tick.

```css
.tick{display:flex;align-items:center;gap:18px;height:44px;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.tick b{font-weight:500;color:var(--ink);white-space:nowrap}
.tick .mq{flex:1;mask:linear-gradient(90deg,#000 85%,transparent)}
.it{display:flex;gap:8px;align-items:center;padding-right:18px;margin-right:18px;border-right:1px solid var(--line);white-space:nowrap}
.it i{font-style:normal;font-variant-numeric:tabular-nums;color:var(--ink);padding:2px 6px;border-radius:4px;background:var(--surface)}
```

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

### Atmosphere: hairlines-over-media (seen on Studio Dado)

*Feeling: a grid laid over the photograph.*

**Use it for:** Architecture and type-led image heroes. **Avoid:** Busy images. The rules must stay readable.

1px white 20% horizontal hairlines at nav base and mid-hero plus column ticks, drawn over full-bleed imagery to structure overlaid text rows.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.