# Your direction (seed 1029)

Reads as **brand**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**Digital accessibility audit team for Welsh local authorities and health boards, testing bilingual council services against WCAG 2.2 from Aberystwyth.**

- Naming: Welsh place or plain Welsh trade word, a short name that reads easily in both languages
- Facts to build on: Every audit runs on both the English and Welsh versions of the service; 6 of 11 testers use a screen reader or switch access daily; Fixed price of GBP 4,200 for up to 12 templates; Reports name the exact Welsh Language Standard alongside each WCAG failure
- Their vocabulary: WCAG 2.2 AA, accessibility statement, screen reader, focus order, Welsh Language Standards, lang attribute, parity, template, severity, retest, switch access, VPAT

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Issue log.** Dense table: ID, page template, WCAG criterion, severity, Welsh parity flag, assistive tech used, state. Rows are colour-coded by severity with a filter at the top Data: A-0147, Bin collection form, 1.3.1 Info and Relationships, Critical, Welsh parity failed, screen reader, retest due Behaviour: Rows sort by severity with a slide, a retest flips Open to Closed with a short strike
- **Bilingual parity diff.** Two columns, English left and Welsh right, showing the same page outline as nodes. Missing Welsh headings, untagged lang attributes and machine-translated strings are marked per line Data: EN 'Report a missed bin' H2 present. CY H2 missing, lang=en on 'Rhoi gwybod' link Behaviour: Lines scan down in sequence, each marked pass or fail, a parity score settles at the end
- **Council retest slope.** A slope chart with audit round on the x axis, 22 authorities as lines, showing critical issues falling or rising, one line highlighted per selection Data: Ceredigion critical issues: 34 in round 1, 11 in round 2, 3 in round 3 Behaviour: Lines draw in together, selecting one dims the others and labels each point

## The page, in order (structure from Prägen Hätlen, a gold brand page)

1. Navigation: `nav.top-bar/solid-brand-bar`
2. Hero: `hero.full-bleed-media/card-docked-in-image`
3. Annotated shot: `product.annotated-shot/hotspot-rings`
4. Feature sticky scroll: `section.feature-sticky-scroll/pinned-chapter-stage`
5. Stats: `section.stats/one-giant-number`
6. Gallery portfolio: `section.gallery-portfolio/peek-rail`
7. Product detail: `commerce.product-detail/colourway-stage`
8. Location hours: `section.location-hours/hours-card-beside-map`
9. Faq: `section.faq/category-grouped-faq`
10. Closing section: `section.cta-band/photo-sign-off`
11. Footer: `section.footer/full-width-directory`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Trocchi** with **Hanken Grotesk**. Bookman warmth with swooping terminals at headline size; a neutral sans keeps it from going Grandma.
- Display: 64px, phone 38px, weight 400, tracking -0.012em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hanken Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Trocchi&display=swap https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Aman: bg #f3eee8, surface #fdfcfb, text #291e21, muted #6b6366, accent #313131. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **loud**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `hero-media-cycle`, **Scroll** `pinned-photo-dissolve`, **Hover** `label-roll`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Prägen Hätlen** (brand, gold) https://www.pragenhatlen.com
- Doing: A Swiss watch sold to crypto collectors as a scroll-driven teardown, where one render is pinned, exploded and inspected chapter by chapter.
- Why it feels made: One navy ladder, one periwinkle CTA and one bracketed mono label system hold 16,000px of scroll together. Renders are engineered down to the waffle dial while the interface stays tiny and 2px-radius around them.
- If imitated badly: Without renders of this grade the scrub is just a slow page, and its unbacked fixed nav already collides with scrolled copy.

**reMarkable** (brand, gold) https://remarkable.com
- Doing: Sells a tablet as calm stationery: paper tones, a light serif and offset editorial photo spreads instead of tech tropes.
- Why it feels made: Corners stay at 2px, one saturated blue sits on a paper-and-forest palette, and photography is graded to the page. Product UI is redrawn over handwriting so the interface feels printed rather than pasted.
- If imitated badly: Without art-directed photography and a real display serif, square corners and big offsets look like an unfinished blog theme.

**Cursor Pricing** (ai, gold) https://cursor.com/pricing
- Doing: A pricing page that removes everything except warm paper, one typeface and one dark button pointing at the recommended plan.
- Why it feels made: Only two radii, one weight and one saturated colour used once, with every section sharing the same 1300px edges. Restraint this complete only works because type and spacing are exact.
- If imitated badly: Warm neutrals with default fonts read as beige and unfinished; the discipline only pays off with a distinctive typeface and exact spacing.

## System choices

- Frames: `media.photography/macro-material-crop`
- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/neutral-chip`
- Surfaces: `surface.panel/cut-silhouette-panel`
- Surface ladder: `atmosphere.light-surface-ladder/cream-section-bands`
- Logo: `media.logo-mark/cut-letterform`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.section-rhythm/rounded-colour-sheets`
- Load: `motion.load-sequence/hero-media-cycle`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/label-roll`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`
- Showpiece: `section.feature-sticky-scroll/split-pinned-half`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: solid-brand-bar (seen on Gjelina New York Menus, Rabbit, Eicher Honig)

*Feeling: the top edge is the brand.*

The whole bar is one flat brand colour with no border. Rabbit uses a saturated orange at 65px with black lowercase links. Counter Culture uses royal blue. Gjelina uses a thick rust band with square-cornered reservation button. Use it for consumer, food and local brands with an ownable colour, and when the next section is neutral. Avoid it directly above a coloured hero, where the two fight.

Set 48 to 72px, one ink at 14 to 16px, one contrasting action. Check 4.5:1 for the links, since mid-tone brand colours often fail with both black and white. Repeat the colour lower on the page, or it reads as a stray strip.

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

### Annotated shot: hotspot-rings (seen on Hinge Health, UNITO)

*Things you can point at.* Quality 4/5, 2 sites.

**Use:** Physical products, rooms, and form or motion analysis. **Not:** Dense UI.

**Recipe:** Room render or photo about 800px, radius 14-20. Rings 30px translucent with 14px white centres on each part, matched by a card alongside. Or green skeleton dots with a counter overlaid on a person.

### Feature sticky scroll: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

### Stats: one-giant-number (seen on Leo Cussen Centre for Law, Royal College of Art, Birdie)

*Feeling: this one figure is the whole point.*

If you have one number that would stop someone, let it have a section. Checkout.com sets a figure at about 200px in a mono bold inside an outlined rounded card, with a 14px caption. Leo Cussen uses serif counters at 96px that roll like odometers on a yellow section. The Royal College of Art sets 130px white figures on full-bleed studio photographs, changing with scroll. DeepNode dims the next stat until it scrolls into place. Avoid four of these in a row.

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

### Product detail: colourway-stage (seen on Prägen Hätlen, LEA WINERY, sen knife by Takahashikusu)

*Feeling: the product is in a spotlight.*

The product is the whole first screen. Prägen Hätlen shows a watch at about 430px, with its neighbours at 330px as faint outlines in which only the dial keeps colour, and a large hairline circle behind, on a gradient from paper to navy, with `PREVIOUS` and `NEXT` in 12px mono at the edges. The sen knife page sets a 90px name around a diagonal blade, and the whole ground changes per colour. Use it for one hero object with a few versions, usually at the top of a brand page. Below it you still need a normal way to buy. Avoid it for a range of more than about seven.

### Location hours: hours-card-beside-map (seen on Lil Italy, Zahnarzt Wernitz, KAWARA MUSEUM - LIBRARY)

*Feeling: the sign in the window.*

A solid brand card with seven day rows, beside a map tile of equal height. Lil Italy sets an oxblood card at radius 24 with a heavy caps title, bold uppercase days on 36px rows, dashed leaders running to the time, and a pale card and a real map alongside. Zahnarzt Wernitz uses a navy block with a wavy top, grouping Monday and Tuesday and writing the lunch closure on two lines. KAWARA Museum gives each of its two venues an orange dot with phone, fax and hours, beside a 700 by 510 map. Rivian pairs a photo with a dark panel. Use it for restaurants, clinics and shops, where this is the one loud object in the section. Use a real map, or none. Avoid it for institutions with many schedules, which need the plain list.

```css
.g{max-width:1344px;margin:0 auto;padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:32px}
.c{border-radius:24px;padding:48px 48px 40px;background:var(--surface);min-height:450px;display:flex;flex-direction:column}
.c h2{font:800 28px/1 var(--font-display);text-transform:uppercase;letter-spacing:.01em;color:var(--accent)}
.hours{background:var(--accent);color:var(--bg)}.hours h2{color:inherit}
.hours dl{margin-top:auto}
.hours div{display:flex;align-items:center;gap:12px;font:700 15px/36px var(--font-text);letter-spacing:.02em;font-variant-numeric:lining-nums tabular-nums}
.hours dt{width:max-content}
.hours i{flex:1;height:1px;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--bg) 60%,transparent) 0 7px,transparent 7px 11px)}
.hours dd{margin:0}
.contact{justify-content:space-between}
.contact a{display:block;color:var(--accent);font-size:15px;font-weight:600;line-height:34px}
.map{position:relative;border-radius:24px;overflow:hidden;min-height:450px}
.map img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.addr{position:absolute;left:24px;bottom:24px;background:var(--bg);border-radius:16px;padding:14px 18px;font-size:14px;line-height:21px;color:var(--ink)}
.addr b{display:block;color:var(--accent)}
@media(max-width:760px){.g{grid-template-columns:1fr;padding:16px;gap:12px}.c{min-height:0;padding:28px 24px;gap:28px;border-radius:20px}.map{min-height:280px;border-radius:20px}}
```

### Faq: category-grouped-faq (seen on Claude Pricing, Prägen Hätlen, Webflow Pricing)

*Feeling: sorted before you arrive.*

For long lists, group first. Webflow runs a 24px category in a 440px rail beside rows, repeating down the page. Claude Pricing uses tray tabs over a 640px column. 360Rides splits by audience with two coloured column heads. Prägen Hätlen nests categories in full-width mono rows that reveal a right column of questions. Use it past 12 questions or for two audiences.

### Closing section: photo-sign-off (seen on Wispr Flow, Comet, Nuro)

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

### Footer: full-width-directory (seen on Cursor Pricing, Acne Studios, Vercel AI SDK)

*Feeling: a well-kept index.*

Four to seven equal columns across the whole container, with no logo column. It is the most common footer in the corpus and the safest, so it lives or dies on its details. Use it when there are many links and no reason to be clever. Render runs six 232px columns with 18px heads and 16/36 links, then a rule, a small mark, a live status line, copyright and a two-state theme toggle. Vercel runs two tiers of 14px links on 28px rows with small grey `New` chips. Avoid it when the list is short, since six columns of three links is a table of nothing.

```css
.foot{max-width:1376px;margin:0 auto;padding:0 32px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;padding-bottom:40px}
.cols section{display:flex;flex-direction:column}
.cols b{font:500 18px/24px var(--font-text);margin-bottom:14px}
.cols section b:not(:first-child){margin-top:30px}
.cols a{font-size:16px;line-height:36px;color:var(--ink-2);transition:color .15s}
.cols a:hover{color:var(--ink)}
.base{display:flex;align-items:center;gap:16px;height:64px;border-top:1px solid var(--line);font-size:13px;color:var(--ink-2)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);margin-right:-8px}
.glyph{width:16px;height:16px;background:var(--ink);border-radius:4px 4px 4px 0}
.right{margin-left:auto}
@media(max-width:760px){.foot{padding:0 16px}.cols{grid-template-columns:1fr 1fr;gap:32px 16px}.cols a{line-height:44px}.base{flex-wrap:wrap;height:auto;padding:16px 0}.right{margin-left:0;width:100%}}
```

### Frames: macro-material-crop (seen on Fidèle, X8 Eyewear, TAYA)

*Feeling: tactile and close. You can feel the material.*

**Use:** Craft, skincare, eyewear, food origin, print, and anything whose quality lives in texture. **Avoid:** When the viewer needs to see the whole product before anything else. Pair the macro with one full view.

Crop tighter than feels safe: a hinge, thread on a cone, skin with pores, a press roller. Let the object run off the frame on at least two sides. Use square corners or a single small radius of 12 to 20px across the whole set. Keep texture visible, so no smoothing and no heavy sharpening. Alternate with frontal portraits or one wide frame so the page has a scale to measure against. Large crops of 705 by 880px on near-black or ivory hold a whole half-screen.

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

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: neutral-chip (seen on Tana, Attio, Exa)

*Feeling: a good tool, sure of itself.*

A near-black rectangle on light, or near-white on dark, with no colour at all. It works in any palette, it never fights an image, and it reads as product. Use it for SaaS, developer tools, docs and app UI. Avoid it when a consumer brand needs warmth, where a pill or a colour does more.

Set 32 to 40px, radius 6 to 10, 14/500, 12 to 16px padding, no shadow. Attio adds a 1px border one step lighter than the fill, about L\* 37 on L\* 13, which reads as a faint rim. Analysts recorded that rim as darker, and the measured value corrected it. Vercel uses a flat #171717 at radius 6 and nothing else. The chip shares its radius with the page's inputs and small cards.

```css
.b-chip{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid color-mix(in oklab,var(--ink) 76%,var(--bg));
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),scale .1s cubic-bezier(.4,0,.2,1)}
.b-chip:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-chip:active{scale:.98}
.b-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: cut-silhouette-panel (seen on Baseten, Ai2, Talkspace)

*Feeling: considered, slightly architectural.*

The outline carries the idea. Baseten cuts white blocks into its hero art on 12px gaps, so the art's edge steps around the content rather than sitting behind it. Allen AI cuts a 36px step from one corner. Talkspace steps a panel in twice, with 4px rounded joins. Round every join, even when the outer corner is sharp, because a raw 90-degree notch looks like a clipping error. Keep every other surface plain, and repeat the cut on at least one more object.

### Surface ladder: cream-section-bands (seen on reMarkable, Function Health, Brilliant)

*Feeling: soft and domestic. Sections shift the way light shifts across a room.*

**Use it for:** Health, wellness, consumer devices, ecommerce, food. **Avoid:** Developer tools. Cream reads as lifestyle.

Full-bleed bands step #fcfbf8, #f9f6f1, #f3efe7, about 1.5 to 2.5 L* apart, oklch C under .012, no rules, no shadows, 100 to 140px padding. The colour change is the divider. End on a warm near-black footer.

Stronger creams measured on cream-led brands: #fffcf5, #f7f3e9, #f0e9db and #fef9ef, #f5eee1. Only a brand that means cream should go that yellow.

```html
<style>
/* each band is one step. the colour change is the divider, so there is no rule and no shadow */
:root{--s1:#fcfbf8;--s2:#f9f6f1;--s3:#f3efe7;--ink:#252525;--ink-2:rgba(37,37,37,.72)}
.band{padding:120px 40px;color:var(--ink)}
.band p{color:var(--ink-2)}
</style>
<section class="band" style="background:var(--s1)"><h2>A quieter queue</h2><p>Step one.</p></section>
<section class="band" style="background:var(--s2)"><h2>Three ways to plan</h2><p>Step two, about 1.5 L* down.</p></section>
<section class="band" style="background:var(--s3)"><h2>It holds the thread</h2><p>Step three, about 2.5 L* further.</p></section>
```

### Logo: cut-letterform (seen on Bakstad Construction, Concrete, Arkansas Museum of Fine Arts)

*Feeling: industrial or architectural, with a quiet edge.*

**Use:** Construction, museums, property, events. Brands where one expressive element sits inside neutral type. **Avoid:** Light typefaces. A cut needs heavy strokes to read.

Take a heavy display weight and make one clean cut. A thin horizontal slice through the upper letter band, at about 34% of cap height. Stencil gaps in every bowl of a heavy lowercase serif, shown at about 380px in the intro and about 160px on phone, with a single letter on a rail. A hairline diagonal slash taller than the letters, splitting two colours. Everything else on the page stays neutral.

**In the lab:** Worked at all sizes once the cut was at least 1px. The slice left a stray dash where it crossed the apex of an A, so choose the height by looking.

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: rounded-colour-sheets (seen on Wispr Flow, Canary, David Heckhoff)

**Feel.** Soft, tactile, friendly. Each colour is a sheet of paper sliding over the last.
**Use when** a consumer product wants warmth. **Avoid** in precision registers, and on pages with many short sections, because the radius stops reading as a sheet.
**Recipe.** Corner radius 40 to 80px. Each section's bottom corners round over the next. There is no straight edge wherever colour changes.

**Built.** The radius worked at once, but my first version alternated image-left and image-right inside the sheets and looked like a template. Change the interior from sheet to sheet: a text-and-image split, then a centred portrait that rises into the curve, then a text-only close.

```css
.sheet{--r:80px;position:relative;padding-block:128px;border-radius:0 0 var(--r) var(--r);
  background:var(--g,var(--bg));color:var(--c,var(--ink))}
.sheet+.sheet{margin-top:calc(var(--r)*-1);padding-top:calc(128px + var(--r))}
.sheet:nth-child(1){z-index:4}.sheet:nth-child(2){z-index:3}.sheet:nth-child(3){z-index:2}.sheet:nth-child(4){z-index:1}
.sheet.deep{--g:var(--deep);--c:var(--bg);--ink:var(--bg);--ink-2:color-mix(in srgb,var(--bg) 74%,transparent)}
@media(max-width:760px){.sheet{--r:32px;padding-block:72px}.sheet+.sheet{padding-top:calc(72px + var(--r))}}
```

### Load: hero-media-cycle (seen on Nicole Heim Studio, TR Studio, Ideogram)

*Feeling: the page is alive from frame one.*

The hero is running when you arrive. Nicole Heim swaps each half of a split hero on its own beat, one side at a time. TR Studio holds an interior for about 5s, then crossfades over 1.5s, measured. The rule is that nothing else moves and type stays locked. Use it for studios, fashion, architecture, and any brand with deep photography. Independent beats on each panel are what make it feel edited rather than like a carousel. A pause control is required on anything that runs past 5s.

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

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

### Showpiece: split-pinned-half (seen on X8 Eyewear, Arya Bhangy Builders, Lyra)

*3 sites, quality 5.* A fashion spread. One half holds and the other scrolls. Use for a single product or person with several images.

Recipe: 50/50 split. X8 pins a panel with copy at its foot while macro, model and detail shots scroll in the other half, inside a 15px black frame, and the panel fill steps from white to a light grey. Lyra pins a heading and a 578 by 450 photo while rows scroll past, and the photo swaps with each row. Arya Bhangy swaps a full-height photo per year beside a stack of boxed years.

Seen on X8 Eyewear, Lyra, Arya Bhangy. Suits photo-led and warm neutral.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.