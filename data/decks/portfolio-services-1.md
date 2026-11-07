# Your direction (seed 1066)

Reads as **culture**, surface **portfolio**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**Touring marionette company based in Brno bringing shows to Czech and Slovak primary schools, carrying its own bridge and lighting in one van.**

- Naming: Founder's surname or a plain Czech noun with Divadlo, as family puppet companies have been named for generations
- Facts to build on: 186 school performances a year, in gyms and classrooms; Get-in takes 75 minutes with 2 people; Capacity capped at 120 children so strings can be seen; CZK 14,500 per performance plus CZK 12 per km
- Their vocabulary: marionette, bridge, get-in, strike, control bar, limewood head, backdrop, gym hall, blackout, operator, rig, school visit

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Get-in diagram.** A side section through the portable bridge with operator height, stage opening, floor space and blackout rig, and a list of what the school must provide, including one 16 A socket Data: Bridge 2.4 m, stage opening 3.6 x 2.4 m, needs 7 x 5 m clear, ceiling at least 3.2 m Behaviour: Parts assemble in order while a clock adds up to 75 minutes
- **Tour week route.** A simple SVG map of Moravia and western Slovakia with numbered school stops, a van line, drive times and show count at each stop, plus overnight stops Data: Tue, Zlin, ZS Slovanska, 2 shows, 94 km from Brno, 1 h 10 Behaviour: The line draws stop by stop, and the day list highlights in step
- **Show and year group grid.** Shows as rows, school years 1 to 9 as columns. Filled cells show suitability, with running time, and a curriculum note in the row end Data: The Water Goblin, years 3 to 5, 45 min, folk tales unit Behaviour: Choosing a year lights its column and dims the rest

## The page, in order (structure from Mirim, a silver agency page)

1. Navigation: `nav.top-bar/corner-anchored`
2. Hero: `hero.type-only/centred-statement`
3. Testimonial: `section.testimonial/quote-beside-interaction`
4. Steps process: `section.steps-process/drawn-path-or-diagram`
5. Gallery portfolio: `section.gallery-portfolio/single-file-spine`
6. Contact form: `section.contact-form/underline-field-form`
7. Closing section: `section.cta-band/hero-reprise-close`
8. Footer: `section.footer/local-hours-footer`

## Type system

**IM Fell French Canon** with **Courier Prime**. Rough 17th-century printing beside a screenplay typewriter, three centuries of ink in one column.
- Display: 64px, phone 38px, weight 400, tracking -0.005em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Courier Prime 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon:ital,wght@0,400;1,400&display=swap https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap

## Palette

From Structure Consulting Engineers: bg #f5f5f5, surface #ffffff, text #111111, muted #6f6c5e, accent #b8b26a. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **brand line: a compressed belief, only with a strong image**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `wordmark-docks-to-nav`, **Scroll** `sticky-card-deck`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Mirim** (agency, silver) https://mirim-agency.fr/projects/l-officielle/
- Doing: A studio case study told as a guided read, with a sticky contents rail and a logo-derived column motif carrying plum, cream and orange throughout.
- Why it feels made: The stepped columns from the logo recur as hero watermark, blue panel shapes and orange CTA field, and Chivo Mono labels give each section the same dry voice. The pinned process timeline shows real choreography.
- If imitated badly: Tight body leading and a large AI assistant panel crowding the first screen show how quickly a dense case study turns cluttered.

**Globe Limousines** (local-business, silver) https://www.globe.limo/
- Doing: A Geneva limousine firm presented through aerial city video and a strict charcoal palette with a single champagne accent.
- Why it feels made: Consistent concrete-studio car shots and small disciplined uppercase Söhne feel corporate-luxe rather than flashy, and frosted overlapping panels add depth to a neutral ladder.
- If imitated badly: With no large type and long centred copy it turns monotonous, and gold on charcoal becomes limo cliché if photography slips.

**Apple** (brand, gold) https://www.apple.com
- Doing: A front page built as a wall of posters: each tile is one product, one line, two buttons and one extraordinary image.
- Why it feels made: A single tile template repeats without variation, with one blue and a 12px white seam, so image quality does the remaining work. That discipline lets a lease offer and a flagship laptop share one grid.
- If imitated badly: The formula depends on museum-grade product imagery; with ordinary pictures it becomes a stack of empty banners.

## System choices

- Frames: `media.photography/macro-material-crop`
- Headline: `type.display-headline/under-scaled-title`
- Section headings: `type.section-heading/scroll-held-heading`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.card/hairline-text-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/behaving-logo`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/construction-lines`
- Load: `motion.load-sequence/wordmark-docks-to-nav`
- Scroll: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `nav.mobile-menu/display-type-takeover`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`
- Showpiece: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Atmosphere: `atmosphere.image-backdrop/flat-scrim-band`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: corner-anchored (seen on Ne Geurra, Theatre Memory, La Table de Joakim)

*Feeling: labels on the corners of a poster.*

No bar. Items are pinned to the corners of the viewport and the page scrolls freely beneath. It turns the browser window into a frame. Per Appelgren sets two 12/600 caps words at 16px inset. MetaLab floats a 32px glass Menu pill, a centred wordmark and a live clock over video. Sutera sets a mono wordmark, a boxed line and local time. Use it for portfolios, studios and art. Avoid it on content-heavy pages, because text will run under the corners and collide.

Use 16 to 32px insets and 11 to 16px type. Check every corner against every section, since nothing protects contrast. Blend modes or a section-aware flip usually solve it.

### Hero: centred-statement (seen on Linear Method, Wispr Flow, ECI)

- **Feels:** Editorial and serious, when the type is good.
- **Use when:** The headline is short, the voice is distinct, and something rises at the fold.
- **Not when:** You are about to add a gradient to one word to make it interesting.
- **Recipe:** An optional 11 to 14px label, a two-line 72 to 128px headline at 1.0 leading, a 13 to 20px sub, a CTA. Linear's method page sets 128 on near-black with a 13/20 paragraph about 340px wide and two faint arcs at the base. Wispr Flow runs 96/1 with a speech ribbon crossing the lower right corner, carrying real words. ECI floats four small claims at uneven positions around a 102px title. Instrument sets 64 on black with a white pill.

### Testimonial: quote-beside-interaction (seen on Hims, Idea Bakery)

*Feeling: others like you went this way.*

A review shares a row with something the reader can do. Hims pairs two 546 by 600 cards at radius 24: one a large question with stacked pill answers, the other a star row, a 44/48 quote and a member chip with a first name and age. Proof is one tap from the decision. Idea Bakery sets a quote beside a slowly turning object on a bright set. Keep any legal disclosure visible under the pair, as Hims does.

### Steps process: drawn-path-or-diagram (seen on New Material, Hims, Brand Identity School)

*6 sites, quality 4.* The route becomes the picture. Use when your process has a shape, and you have an illustrator or a strong diagram. The Brand Identity School draws a sine path over illustrated hills that fills as you scroll, with mascots moving along it. Rewiring America seats five role cards on a thick ring. New Material runs light along an open outline. Hims stacks perspective slabs behind an athlete cutout. See `references/motion/scroll.md`, recipe 9.

Seen on New Material, Hims, Brand Identity School, Rewiring America, Cascara Cabinet.

### Gallery portfolio: single-file-spine (seen on BIG, Ne Geurra, TR Studio)

*Feeling: a very long, very calm list.*

Every project in one column. BIG runs images about 434px wide at natural ratio, 28px apart, for about 119,000px, with no headings at all, and its small name and place column sits to the left of each image. Ne Geurra runs a 580px column of object photographs at 26px gaps on warm white. TR Studio stacks on the centre axis with widths alternating 886 and 536px. The length is the proof. Use it for practices with decades of work, and lazy-load everything. Give a way back up, because after 20 screens people need one.

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

### Closing section: hero-reprise-close (seen on Expo, Better Auth, Oxygen Pictures)

*Feeling: the page ends where it began.*

Repeat something from the opening at a new scale. Expo blows its app icon up into a 590px faded squircle, with the heading and button inside. Better Auth lets a pale pixel logo bleed off a corner behind the same button pair. React returns to its atom. Readwise brings back the hero panel. It needs no new art and it gives the page a shape.

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

### Frames: macro-material-crop (seen on Fidèle, X8 Eyewear, TAYA)

*Feeling: tactile and close. You can feel the material.*

**Use:** Craft, skincare, eyewear, food origin, print, and anything whose quality lives in texture. **Avoid:** When the viewer needs to see the whole product before anything else. Pair the macro with one full view.

Crop tighter than feels safe: a hinge, thread on a cone, skin with pores, a press roller. Let the object run off the frame on at least two sides. Use square corners or a single small radius of 12 to 20px across the whole set. Keep texture visible, so no smoothing and no heavy sharpening. Alternate with frontal portraits or one wide frame so the page has a scale to measure against. Large crops of 705 by 880px on near-black or ivory hold a whole half-screen.

### Headline: under-scaled-title (seen on Cognition, Claude Pricing, Block)

Confident restraint. The page does not need to shout. Seen on 17 sites.

**Use it for:** Devtools, portfolios, editorial and any page where content or imagery is the star. On pricing, changelog and docs pages it is the correct default, because the job is getting to the content.

**Avoid it for:** A homepage with nothing strong below it. Small type with no content just looks unfinished.

**Recipe:** H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

**Why it works:** A quarter of gold sites sit at or below 36px. Thirty pixels reads as large if nothing outranks it, since scale is relative to the page and not to the viewport.

<a id="name-as-headline"></a>

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

### Surfaces: hairline-text-card (seen on Neon Docs, Factory, Meta AI)

*Feeling: a well-kept index.*

An outline card with text only, for docs indexes, capability lists and pointers. Use 1px at `--line`, radius 4 to 16, padding 16 to 28, a 12px label, a 16 to 20px title and one muted line. Keep it short, about 160px tall, and drop the icon tile. Numbering it, as in a `01` label set in small caps or mono, gives a row order without decoration. On hover, darken the border and leave the fill alone. Avoid it for marketing features, where the reader needs evidence rather than a label.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Logo: behaving-logo (seen on BIG, Gagosian, Symbol Studio)

*Feeling: alive and quiet. A small motion you notice on the second visit.*

**Use:** Culture, agencies and studios that want one motion signature. **Avoid:** Loud loops. The nav should not perform.

Give the logo one state change. A hero wordmark of about 146 by 46, recoloured per slide, that hands off to a bold 20px version in the bar past the hero, with links shifting about 100px to make room. A 50 by 36 mark of three slanted bars that shears through states on scroll. A wordmark and menu icon sharing one box, so the same weight is either logo or menu.

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: construction-lines (seen on Aniket, Cognition, Prototype)

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.

### Load: wordmark-docks-to-nav (seen on BIG, Royal Ontario Museum, LEDUP)

*Feeling: an introduction, then it steps aside.*

One object makes the whole trip. BIG holds a wordmark on black, then the panel rises as a shrinking band while the mark travels up-left into its nav slot, with the list already in place underneath. Royal Ontario Museum resizes its wordmark into a bottom-left lockup by about 4s. Use FLIP so a single element travels, and put the real logo in the nav so it is ready to land on. See `load.md` Logo to nav. The match between the end of this move and the resting nav is what sells it, so check the frame where they meet.

### Scroll: sticky-card-deck (seen on Affirm, Theatre Memory, Per Appelgren)

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

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

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

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

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

### Atmosphere: flat-scrim-band (seen on Royal Ontario Museum, Native Law PLLC)

*Feeling: plain and dependable.*

**Use it for:** Institutions and professional services. **Avoid:** Anywhere the image is meant to be enjoyed.

Photo band about 500px with a flat 45% dark or tinted scrim carrying a white headline and a rectangular CTA.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.