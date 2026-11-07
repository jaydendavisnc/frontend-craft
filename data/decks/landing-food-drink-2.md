# Your direction (seed 1018)

Reads as **food-drink**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from La Table de Joakim, a gold food-drink page)

1. Navigation: `nav.top-bar/centred-wordmark-split`
2. Hero: `hero.full-bleed-media/card-docked-in-image`
3. Feature alternating: `section.feature-alternating/viewport-chapters`
4. Menu or catalog: `section.menu-or-catalog/plate-photo-grid`
5. Steps process: `section.steps-process/drawn-path-or-diagram`
6. Blog index: `section.blog-index/flush-story-row`
7. Contact form: `section.contact-form/stepped-form`
8. Gallery portfolio: `section.gallery-portfolio/single-file-spine`
9. Faq: `section.faq/big-type-rows`
10. Closing section: `section.cta-band/photo-sign-off`
11. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Red Rose** with **M PLUS Code Latin**. A wide confident neutral over a narrow code face: the width contrast fits dense terminals beside calm heads.
- Display: 64px, phone 38px, weight 600, tracking -0.025em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: M PLUS Code Latin 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Red+Rose:wght@300..700&display=swap https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wdth,wght@100..125,100..700&display=swap

## Palette

From Polestar: bg #ffffff, surface #eeeeee, text #000000, muted #6e6e6e, accent #000000. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `hero-media-cycle`, **Scroll** `pinned-photo-dissolve`, **Hover** `single-accent-on-hover`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**La Table de Joakim** (food-drink, gold) https://latabledejoakim.fr/
- Doing: A private-chef catering site where full-screen colour fields, one dish photo per screen and mono caps copy make a quiet menu-card rhythm.
- Why it feels made: Each screen is one idea with generous empty space; the tonal fields (mocha, powder blue, cream) are pulled from the food; serif/mono pairing and a handwritten signature feel owned.
- If imitated badly: Mono caps body is hard to read long-form and the pale text on blue is low contrast.

**Isolabella della Croce** (food-drink, silver) https://www.isolabelladellacroce.com/
- Doing: A Piedmont wine estate told in Italian through saturated close-up photography and one quiet book serif on warm paper white.
- Why it feels made: One serif at one weight, sharp rectangular buttons, nothing else: photography holds all the colour. Large crops alternate with deliberately empty paper.
- If imitated badly: With stock photos or rounded buttons the restraint becomes an empty template.

**Soundsensing** (saas, gold) https://www.soundsensing.com/
- Doing: Makes industrial HVAC sensing feel premium by pairing grainy macro photography of real equipment with sparse frosted status UI and a cool sage palette.
- Why it feels made: Real installed hardware replaces stock imagery, and a sage-to-stone colour pair runs through type, cards and buttons. Small 4-8px radii, equal-weight buttons and sentence headings keep it sober.
- If imitated badly: Without the macro photo and film grain, the small radii and muted sage become a plain corporate template.

## System choices

- Frames: `media.photography/cutout-on-flat`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/scroll-held-heading`
- Primary button: `button.primary/information-bearing-button`
- Surfaces: `surface.panel/contrast-flip-panel`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/edge-to-edge-ledger`
- Load: `motion.load-sequence/hero-media-cycle`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/single-accent-on-hover`
- Phone menu: `mobile.phone-nav/bare-logo-and-glyph`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Showpiece: `type.type-as-image/full-width-statement`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: centred-wordmark-split (seen on Villa Aurelia, Dishoom, Fred)

*Feeling: a shop front or a hotel sign.*

The name sits dead centre and links divide to either side. It is the classic for retail, hospitality, restaurants and culture, where the name is the brand and there is no product to demo. Use it when the wordmark is good. Avoid it for software, where it reads as a boutique, and on phones, where you must collapse one side.

Use a `1fr auto 1fr` grid so the wordmark stays centred however long each side runs. Set 56 to 72px tall, 12 to 13px tracked caps or 16px sentence case, 25px gaps. Acne Studios measures 60px, 12px caps at +0.025em, 10px side inset, zero radius, no CTA. Two details make it look printed rather than templated. Acne pins its links to the top of the row and lets the much larger wordmark take the height, instead of centring everything. Dishoom tracks its caps at about +2px and adds a single 34px outlined pill for the one action.

```css
.nav{position:sticky;top:0;z-index:50;height:60px;padding:10px 10px 0;display:grid;grid-template-columns:1fr auto 1fr;
  align-items:start;background:var(--bg);box-shadow:inset 0 -1px 0 var(--line)}
.nav a{font-size:12px;letter-spacing:.025em;text-transform:uppercase;transition:opacity .15s}.nav a:hover{opacity:.55}
.left,.right{display:flex;gap:25px}.right{justify-content:flex-end}
.nav .word{font:600 34px/40px var(--font-display);letter-spacing:-.02em;text-transform:none}
```

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

### Feature alternating: viewport-chapters (seen on La Table de Joakim, SpaceX, Design Museum)

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

### Menu or catalog: plate-photo-grid (seen on Sweetgreen Menu, Dishoom, Sweetgreen)

*Feeling: every bowl under the same light.*

Identical overhead plates in a three-column grid. Sweetgreen sets 437px squares at radius 20 and a 24px gap, above a 24px caps name, an 18px ingredient list, an allergen line and `Order now`. Serif tabs at 48px with a dot under the active one switch the set. The menu page adds four macro columns with a green number over a tiny caps label. Consistent photography is the entire design: same angle, plate, light and background, so the eye compares food rather than pictures. Without that set of photographs, use a text menu. Pin the allergen line and order link to the card base so they align.

```css
.w{max-width:1360px;margin:0 auto;padding:48px 40px}
.tabs{display:flex;justify-content:center;gap:56px;margin-bottom:42px}
.tabs a{position:relative;font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;color:color-mix(in srgb,var(--ink) 40%,var(--bg))}
.tabs a.on{color:var(--ink)}
.tabs a.on::after{content:"";position:absolute;left:50%;bottom:-18px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--ink)}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:40px 24px}
.d{display:flex;flex-direction:column;font-size:18px;line-height:24px;color:var(--ink)}
.d img{display:block;width:100%;aspect-ratio:1;object-fit:cover;border-radius:20px;background:var(--surface);margin-bottom:22px}
.d h3{font:400 24px/30px var(--font-text);letter-spacing:.01em;text-transform:uppercase;margin-bottom:6px}
.d p{color:var(--ink-2);margin-bottom:28px}
.d small{font-size:18px;color:var(--ink-2);margin-top:auto;padding-bottom:18px}
.d a{font-size:18px}
@media(max-width:760px){.w{padding:24px 16px}.tabs{gap:24px;justify-content:flex-start;overflow-x:auto;padding-bottom:24px;margin-bottom:8px}.tabs a{font-size:28px;white-space:nowrap}.g{grid-template-columns:1fr}}
```

### Steps process: drawn-path-or-diagram (seen on New Material, Hims, Brand Identity School)

*6 sites, quality 4.* The route becomes the picture. Use when your process has a shape, and you have an illustrator or a strong diagram. The Brand Identity School draws a sine path over illustrated hills that fills as you scroll, with mascots moving along it. Rewiring America seats five role cards on a thick ring. New Material runs light along an open outline. Hims stacks perspective slabs behind an athlete cutout. See `references/motion/scroll.md`, recipe 9.

Seen on New Material, Hims, Brand Identity School, Rewiring America, Cascara Cabinet.

### Blog index: flush-story-row (seen on Work & Co, Meta AI, Studio Dado)

*Feeling: a small, well-set update.*

No card at all. Work & Co sets a 2×2 of 340 by 191 tiles in a 700px column with square corners, a 20/500 title about 22px below, and one serif sentence ending in a red link. Meta AI runs four items on a 352px pitch, each an 80px thumbnail at radius 20 to the left of a 16/24 title and a 12px caps date, between full-bleed hairlines. Vitsoe sets four 238px columns and lets heights vary. Nuro sets 320px squares at radius 32. Use it as a small news section on a homepage, three or four items, ending in a link to everything. Avoid it as a full archive, because it has no way to hold fifty posts.

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

### Gallery portfolio: single-file-spine (seen on BIG, Ne Geurra, TR Studio)

*Feeling: a very long, very calm list.*

Every project in one column. BIG runs images about 434px wide at natural ratio, 28px apart, for about 119,000px, with no headings at all, and its small name and place column sits to the left of each image. Ne Geurra runs a 580px column of object photographs at 26px gaps on warm white. TR Studio stacks on the centre axis with widths alternating 886 and 536px. The length is the proof. Use it for practices with decades of work, and lazy-load everything. Give a way back up, because after 20 screens people need one.

### Faq: big-type-rows (seen on Rabbit, Telkom-OT, Lyra)

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

### Closing section: photo-sign-off (seen on Wispr Flow, Comet, Nuro)

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

### Footer: grid-locked-footer (seen on Zed Pricing, Zed Blog, La Table de Joakim)

*Feeling: the page was drawn in one go.*

The footer keeps the page's own grid. Stripe runs its dashed column guides straight through. Zed keeps the rails of the page, changes only the ground to a blue field, splits the columns with 15 percent white verticals, and sets 14px mono links that are always underlined on a 32px pitch. Paddle fills the top of the footer with three ruled cells of copy, and Oatly goes furthest, making the footer a literal table of 52px cells with every link centred in a box.

Use it when the page already has visible structure: rails, a dotted ground, a ruled grid. It is a poor choice on a page with no lines, where it arrives from nowhere. The line must continue from above and reach both edges, because a stopped line reads as a mistake.

```css
.foot{--rail:color-mix(in srgb,var(--bg) 15%,transparent);--tint:color-mix(in srgb,var(--bg) 72%,var(--accent))}
.foot{background:var(--accent);color:var(--bg);position:relative}
.frame{max-width:1120px;margin:0 auto;border-left:1px solid var(--rail);border-right:1px solid var(--rail);display:grid;grid-template-columns:1.6fr repeat(4,1fr)}
.cell{padding:28px 16px 48px;border-left:1px solid var(--rail)}
.cell:first-child{border-left:0}
.cell b{display:block;font:400 16px/24px var(--font-display);margin-bottom:14px}
.cell a{display:block;font:400 14px/32px var(--font-mono);text-decoration:underline;text-decoration-color:var(--rail);text-underline-offset:3px;width:max-content;color:var(--bg)}
.cell a:hover{text-decoration-color:var(--bg)}
.side small{display:block;font:400 11px/22px var(--font-mono);color:var(--tint);margin-top:28px}
.hatch{max-width:1120px;margin:0 auto;height:240px;border:1px solid var(--rail);border-bottom:0;overflow:hidden;position:relative;
 background:repeating-linear-gradient(135deg,transparent 0 6px,color-mix(in srgb,var(--bg) 7%,transparent) 6px 7px)}
.hatch svg{position:absolute;left:0;right:0;top:40px;width:100%}
.hatch text{font:700 300px/1 var(--font-text);fill:none;stroke:color-mix(in srgb,var(--bg) 20%,transparent);stroke-width:1.5}
@media(max-width:760px){.frame{grid-template-columns:1fr 1fr}.cell:first-child{grid-column:1/-1;border-bottom:1px solid var(--rail)}.cell:nth-child(even){border-left:0}.hatch{height:110px}}
```

The table version, with cells that invert on hover:

```css
body{background:var(--well);padding:300px 20px 24px}
.tbl{display:grid;grid-template-columns:repeat(24,1fr);border:2px solid var(--ink);background:var(--bg);max-width:1400px;margin:0 auto}
.tbl>a{grid-column:span 6;height:52px;display:grid;place-items:center;font:600 13px/1 var(--font-mono);letter-spacing:.04em;text-transform:uppercase;border-right:2px solid var(--ink);border-bottom:2px solid var(--ink);transition:background .15s,color .15s}
.tbl>a:hover{background:var(--ink);color:var(--bg)}
.tbl .h{grid-column:span 12}.tbl .u{grid-column:span 1}.tbl .h2{grid-column:span 11}
.tbl .end{border-right:0}
.icons{grid-column:1/-1;display:flex;justify-content:center}
.icons a{width:52px;height:52px;display:grid;place-items:center;border-left:2px solid var(--ink);font:700 15px/1 var(--font-mono)}
.icons a:last-child{border-right:2px solid var(--ink)}
@media(max-width:760px){body{padding-top:120px}.tbl>a,.tbl .h,.tbl .h2{grid-column:span 12}.tbl .u{grid-column:span 24}}
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

### Section headings: scroll-held-heading (seen on Apple Vision Pro, Affirm, i-D RED)

Cinematic. The heading is part of the sequence. Seen on 3 sites.

**Use it for:** Long pinned sequences and film-led product pages.

**Avoid it for:** Short pages. It must read at every scroll position.

**Recipe:** The heading is tied to scroll: pinned about 90px below the nav at 48px weight 300 while content moves beneath it, or rising into place over footage as a clip settles, at about 80/84 weight 700. One short phrase, legible at every scroll position.

<a id="two-voice-heading-system"></a>

### Primary button: information-bearing-button (seen on 1X, Bauhaus Clock, Analogue)

*Feeling: a shop assistant who answers before you ask.*

The control carries a fact as well as a verb. 1X sets a 14px price 16px to the left of a dark pill, so the price reads as part of the control. Bauhaus Clock writes the price into the label on every button. Analogue keeps one 41px pill through Buy Now, Available Now and Sold Out, with a 15px note 16px beneath about shipping. Definitiv Digital replaces a demo button with a 64px portrait of the founder and two lines of text, and a person is harder to ignore than a verb.

Use it for commerce, single-product pages and services sold by a person. Keep the shape fixed across states, and set price in tabular figures.

### Surfaces: contrast-flip-panel (seen on Scale AI, Sonder, Nx)

*Feeling: the lights change.*

One panel in the inverse of the page. Nx puts a 1320px white diagram panel on near-black, and it becomes the brightest thing on a long dark page, so that is where the explanation goes. Scale sets a deep green statement panel beside an image tile. Use it once or twice on a long page, at the moment you most want attention. Leave most of the panel empty, because a flip already has all the emphasis it needs.

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

### Page rhythm: edge-to-edge-ledger (seen on Vite, CSDG Development Group, Driftime Impact Report 2022)

**Feel.** A table the size of the screen. Blunt and confident.
**Use when** content falls naturally into facts, numbers and links. **Avoid** with few items, because empty cells then look unfinished.
**Recipe.** No side margin. 1px rules run viewport edge to edge, and the page splits at 720, then 360. Each cell holds one thing: a number, a claim or a link. Radius 0. Images span 2x2 cells with about 29px inset, or bleed to the rules. On Driftime the rules take the room's ink colour and start and stop with their section, like a newspaper grid.

### Load: hero-media-cycle (seen on Nicole Heim Studio, TR Studio, Ideogram)

*Feeling: the page is alive from frame one.*

The hero is running when you arrive. Nicole Heim swaps each half of a split hero on its own beat, one side at a time. TR Studio holds an interior for about 5s, then crossfades over 1.5s, measured. The rule is that nothing else moves and type stays locked. Use it for studios, fashion, architecture, and any brand with deep photography. Independent beats on each panel are what make it feel edited rather than like a carousel. A pause control is required on anything that runs past 5s.

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

### Hover: single-accent-on-hover (seen on Affirm, Cloudflare Workers, LiveKit)

*Feeling: colour appears under the pointer.*

The page rests in neutrals, and every control resolves to one accent. Liquid AI takes links, titles and rows to violet in 0.15s. Affirm fills white pills with lavender. Canopy takes navy to indigo everywhere. Use it to make a quiet page feel branded without spending colour at rest. The accent must clear contrast on the ground at every step of the transition.

### Phone menu: bare-logo-and-glyph (seen on 1X, Bakstad Construction, Theatre Memory)

*Feeling: quiet confidence.*

Nothing but a mark and a thin glyph, often on no bar at all. 1X sets a 28px logo and two 24px hairlines about 8px apart, directly on the hero, with the glyph matching the logo's stroke weight. Bakstad uses a full 160px wordmark with an 18px two-line burger. Polestar sets a thin three-line icon beside a 30px wordmark, with no CTA. Use it for brand, architecture and photography sites, where the first screen should feel like an image. Two lines read lighter than three. If the glyph sits on a picture, make sure it holds contrast at both the light and the dark end of that picture.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

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