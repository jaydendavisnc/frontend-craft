# Your direction (seed 1004)

Reads as **saas**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Stripe Atlas, a gold saas page)

1. Navigation: `nav.top-bar/two-row-masthead`
2. Hero: `hero.split-copy-media/edge-bleeding-subject`
3. Feature grid: `section.feature-grid/broken-grid-set-piece`
4. Logo wall: `section.logo-wall/logos-inside-another-block`
5. Steps process: `section.steps-process/numbered-rule-list`
6. Ui fragment: `product.ui-fragment/mini-ui-in-wells`
7. Feature tabs: `section.feature-tabs/typographic-index`
8. Testimonial: `section.testimonial/open-quote-columns`
9. Pricing table: `section.pricing-table/hairline-plan-cards`
10. Closing section: `section.cta-band/hero-reprise-close`
11. Footer: `section.footer/offset-sitemap`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Gloock** with **Switzer**. One sharp hero serif beside the plainest neutral available: all the identity sits in a single line.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.03. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Switzer 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Gloock&display=swap https://api.fontshare.com/v2/css?f[]=switzer@1,2&display=swap

## Palette

From Soundsensing: bg #ffffff, surface #f4f2ed, text #131615, muted #5b766d, accent #9dc4b5. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `word-blur-resolve`, **Scroll** `pinned-photo-dissolve`, **Hover** `fill-wipe`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Stripe Atlas** (saas, gold) https://stripe.com/atlas
- Doing: A legal product sold as calm software, with the incorporation flow itself as hero on a ruled page crossed by one slanted orange band.
- Why it feels made: A visible four-column grid governs every block, type holds a strict scale, and one hue drives links, eyebrows, ticks and the gradient. Dense legal content ends up feeling light.
- If imitated badly: The slanted gradient without real UI and a strict grid is a generic 2018 startup page.

**Revolut** (finance, gold) https://www.revolut.com
- Doing: A bank sold as a lifestyle object: full-bleed photography and machined black-and-steel renders with interface floating on top, no chrome around it.
- Why it feels made: Imagery is art-directed to one studio standard, and the app UI is laid directly on photos as a thin outline instead of a mockup. One pill shape and a hard white, charcoal and black value ladder do the rest.
- If imitated badly: Overlaying UI on photos only works with a clean subject and calm background; on busy stock it becomes clutter.

**Wildbran** (food-drink, gold) https://www.wildbran.pt/
- Doing: A cream editorial snack brand where a full-bleed factory film hero and floating product cutouts carry personality, with one electric-blue pill as the only UI colour.
- Why it feels made: Warm cream ground, high-contrast display serif, real photography of people and production, and a single accent make it feel like a premium food brand, not a shop template.
- If imitated badly: The floating product cutouts and giant footer logo need real assets; with stock snack images it turns kitsch.

## System choices

- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/eyebrow-title-lede-stack`
- Primary button: `button.primary/signature-glyph-button`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/construction-lines`
- Load: `motion.load-sequence/word-blur-resolve`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/fill-wipe`
- Phone menu: `nav.mobile-menu/side-drawer`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Showpiece: `motion.scroll-pin-or-scrub/pinned-step-swap`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-row-masthead (seen on Monocle, Le Saint Georges, Omega)

*Feeling: an institution with a front door for everyone.*

Two stacked rows, a brand or utility row over a section row. Monocle runs a 64px row with a centred wordmark and a subscribe button, a 1px black rule, then a 45px centred section row with pipes between items. Retail and universities use the same logic for log in, region and stores. Use it for magazines, institutions and large stores with many audiences. Avoid it as decoration, since two rows cost over 100px of screen.

Set a 24 to 64px upper row at 10 to 13px, and a 44 to 90px lower row at 14 to 18px, with 1px rules between. Keep both rows on the same page rails. Twilio shows the hard-edged version: a 32px pale utility strip over an 80px white bar.

### Hero: edge-bleeding-subject (seen on Sonder, One Medical, Ability Solutions)

- **Feels:** Human, warm, editorial.
- **Use when:** You have a strong portrait, cut-out or tall photo, for health, hospitality, services.
- **Not when:** The person is stock. Everyone can tell, and it damages trust more than having no image would.
- **Recipe:** Copy at 60 to 120px gutter, 48 to 64px headline. Subject fills the right half and bleeds off top, right and bottom with no frame, no card, no radius except an optional 32px at the inner bottom corner. One Medical runs one 3px arc behind a tightly cut portrait, tying it to a coloured word in the headline. Sonder's last headline line turns copper and leads to a tall sunrise photo.

### Feature grid: broken-grid-set-piece (seen on Elyx, Prototype, Monzo)

*7 sites, quality 4.* One composed moment instead of a list. Use once per page at most, for an idea with a real structure: three overlapping things, or a claim surrounded by proofs.

Recipe: Elyx draws three hairline circles with captions in each lobe and colour only at the triple overlap. Monzo pins a centred heading between four corner cards, which reverses heading-above-grid. Prototype starts its second pair of columns about 216px lower. Sword steps four cards by 32px. The offset must follow the content, or it looks like a mistake.

Seen on Elyx, Monzo, Prototype, Sword Health, Arkansas Museum of Fine Arts.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Steps process: numbered-rule-list (seen on Factory, Are.na, Nurx)

*4 sites, quality 4.* A numbered list with confidence. Use beside a sticky heading when steps are short and numerous. Factory runs six rows on about 140px pitch: a 14px mono numeral, a 24px title, a 16px line, a small link with a long arrow. Are.na hangs grey numerals in the margin, so the alignment is the only ornament. Talkspace uses 56px serif numerals in 2px bordered rows.

Seen on Factory, Are.na, Talkspace, Nurx.

### Ui fragment: mini-ui-in-wells (seen on 099, AuthKit, Better Auth)

*Honest components, shown at their real size.* Quality 5/5, 10 sites.

**Use:** Feature grids with no images. The strongest cure for three-icon cards. **Not:** When you only have one or two features. One well looks like a placeholder.

**Recipe:** Grey well or hairline tile, radius 14-20. One real component centred at true 13-15px: white card, 1px border, radius 12-14. No scale, tilt or window chrome. Give each well one state, such as a tooltip or a checked row. Most-used variant here. AuthKit nests white 12-radius panels in a 20-radius tray. Vercel uses radius-0 hairline tiles fading to white, with live-typed UI inside. Better Auth runs 24px miniature proof chips in 10px mono as a hero strip.

### Feature tabs: typographic-index (seen on Baseten, Decagon, North Hub Partners)

*9 sites, quality 4.* The list is the design. Dramatic and confident. Use for services, channels and products where the names are good. Fits agencies and bold brands.

Recipe: a stack of very large names, 28 to 100px, on 1px rules or on none. Active full ink, others about 25 to 55%. A small preview photo or card swaps beside the list. Decagon stacks 60px channels with a photo that swaps under a rising tint. North Hub uses 36px serif rows at 146px pitch, and a progress line fills the rule. Nurx uses 16px mono caps on 51px rows in a tinted panel. Athletics scatters chips over 100px names.

Seen on Decagon, Baseten, North Hub, Nurx, Studio Unlmtd, Athletics, Figma FigJam. Suits photo-led, type-led, bold colour.

### Testimonial: open-quote-columns (seen on Nicole Heim Studio, Lemon Squeezy, Payload)

*Feeling: a printed page of reviews.*

Quotes on the page in columns, with no cards. Nicole Heim runs three 427px justified serif columns at 20/25, attributions in a small sans after a dash, under a heavy 1.5px rule and about 100px of air. It looks like the back of a book jacket, which is exactly the right company to keep. Plausible's uneven 3 by 2 text wall feels gathered. Lemon Squeezy checkers 411 by 370 cells in two tones with no gaps. Magram's four 540px squares use hairlines alone. Use it for studios and text-led brands. Justify only in a serif with hyphens on, or rivers open up.

### Pricing table: hairline-plan-cards (seen on Zed Pricing, Devin Desktop, Attio Pricing)

*Feeling: plain, clear, a little formal.*

The most common strong answer: separate cards with a 1px line and no shadow. It is the safest choice, and detail decides whether it is quality or template, so spend effort on the content. Use it for three to five plans with long lists.

Set a gap of 16 to 32, radius 4 to 24, padding 24 to 32, name, a 30 to 36px price, fit, full-width button and ticks at 30 to 36px pitch. The range is wide: Zed runs 4px radius, mono text, a display-face price in its accent and pale blue on the pro card only, which analysts missed as a transparent card. Claude runs 24px radius with a small illustrated glyph per plan and no recommended plan at all. Attio sits 20px cards on a faint drafting grid with small crosses at the outer corners. Devin uses five narrow cards with 32px grey names and mono chips.

### Closing section: hero-reprise-close (seen on Expo, Better Auth, Oxygen Pictures)

*Feeling: the page ends where it began.*

Repeat something from the opening at a new scale. Expo blows its app icon up into a 590px faded squircle, with the heading and button inside. Better Auth lets a pale pixel logo bleed off a corner behind the same button pair. React returns to its atom. Readwise brings back the hero panel. It needs no new art and it gives the page a shape.

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

### Primary button: signature-glyph-button (seen on ECI, Symbol Studio, Haikei)

*Feeling: a small mark that belongs to someone.*

A plain control carrying one owned glyph instead of an arrow. ECI places a 12px black dot before the label in a 47px grey pill. Symbol Studio uses a 6px dot on an orange block. axem steps a pixel chevron. Haikei tilts a 30px dice icon by -15 degrees, since dice are the product. The glyph then recurs in lists and links, so one tiny mark does the work of a logo. Choose it from the brand's own object, and use it everywhere or nowhere.

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

### Page rhythm: construction-lines (seen on Aniket, Cognition, Prototype)

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.

### Load: word-blur-resolve (seen on Greylock, Linear Method, Monark Markets)

*Feeling: a thought coming into focus.*

Words resolve left to right from blur and a saturated tint to sharp ink. On Greylock the first words are mid-resolve at 1.1s in a clear pale blue, and the line is done by 1.9s, so the wave runs at about 140ms a word. Use it on one short headline, six or seven words at most. Long headlines take too long at this rate, and speeding it up turns it into a smear. Do not blur body copy. For mechanics, see `load.md` Choreographed hero.

```css
h1 span{display:inline-block;animation:resolve .75s var(--ease-soft) both;animation-delay:calc(.3s + var(--i)*140ms)}
@keyframes resolve{
  from{opacity:.1;filter:blur(10px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  60%{opacity:1;filter:blur(2px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  to{filter:none;color:var(--ink)}}
```

Put `aria-label` on the `h1` and `aria-hidden` on each span, or a screen reader spells out the split. The mid-animation colour is the difference between this and a generic blur. My first pass faded a washed tint at 90ms a word, which read as lag rather than focus.

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

### Hover: fill-wipe (seen on Render, ROEH Law & Tax, PDA Architecture)

*Feeling: a little theatre with a direction.*

A fill layer sweeps in. Render wipes a span from `scaleX(0)` over 0.3s. ROEH slides a hidden layer down over 0.5s. Payload sweeps text colour by `background-position`. Use it on larger outline CTAs where the direction can be seen. Change the origin on leave, so the fill exits the way it was going rather than rewinding. See `interaction.md` Entry-point fill.

```css
.wipe{position:relative;overflow:hidden;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);transition:color .3s var(--ease-ui)}
.wipe::before{content:"";position:absolute;inset:0;background:var(--ink);transform:scaleX(0);transform-origin:right;transition:transform .3s var(--ease-ui)}
.wipe>*{position:relative}
.wipe:hover{color:var(--bg)}.wipe:hover::before{transform:scaleX(1);transform-origin:left}
```

### Phone menu: side-drawer (seen on 1X, Polar, Peloton)

*Feeling: a layer pulled in from the edge.*

A sheet slides from the side with a sliver of page still visible. Betterment comes in over a dimmed page to about 80 percent width. Brex places Close at the top left and pins three buttons. 1X runs full width with a hairline list and legal lines at the base. Use it when you want the sense of a layer. A sliver of 30 to 60px of page says you can go back. Drawers from the right match the burger's position, and drawers from the left suit apps. Keep the motion at 200 to 320ms ease-out, because a slide reads as slow sooner than a fade.

```css
.drawer{position:fixed;inset:0 0 0 auto;z-index:50;width:min(90vw,360px);display:flex;flex-direction:column;background:var(--bg);
  translate:100% 0;visibility:hidden;transition:translate .26s cubic-bezier(.22,1,.36,1),visibility .26s}
.open .drawer{translate:0 0;visibility:visible}
.scrim{position:fixed;inset:0;z-index:40;background:color-mix(in srgb,#000 40%,transparent);opacity:0;pointer-events:none;transition:opacity .26s}
.open .scrim{opacity:1;pointer-events:auto}
```

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

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

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.