# Your direction (seed 1017)

Reads as **food-drink**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Isolabella della Croce, a silver food-drink page)

1. Navigation: `nav.top-bar/centred-links-bar`
2. Hero: `hero.full-bleed-media/inset-rounded-panel`
3. Testimonial: `section.testimonial/display-pull-quote`
4. Collection grid: `commerce.collection-grid/photo-beside-shop`
5. Blog index: `section.blog-index/flush-story-row`
6. Full bleed break: `layout.full-bleed-break/pinned-photo-card-over`
7. Feature grid: `section.feature-grid/photo-overlay-cards`
8. Location hours: `section.location-hours/hours-card-beside-map`
9. Newsletter: `section.newsletter/footer-row-signup`
10. Closing section: `section.cta-band/split-plain-close`
11. Footer: `section.footer/fine-print-directory`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Libertinus Serif Display** with **Libertinus Sans**. A university-press pair: an even book headline over a flared sans with true book manners.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Libertinus Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Libertinus+Serif+Display&display=swap https://fonts.googleapis.com/css2?family=Libertinus+Sans:ital,wght@0,400;0,700;1,400&display=swap

## Palette

From Velora: bg #efeae4, surface #f1ece3, text #34291f, muted #756453, accent #533628. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-then-media`, **Scroll** `pinned-photo-dissolve`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Isolabella della Croce** (food-drink, silver) https://www.isolabelladellacroce.com/
- Doing: A Piedmont wine estate told in Italian through saturated close-up photography and one quiet book serif on warm paper white.
- Why it feels made: One serif at one weight, sharp rectangular buttons, nothing else: photography holds all the colour. Large crops alternate with deliberately empty paper.
- If imitated badly: With stock photos or rounded buttons the restraint becomes an empty template.

**Sweetgreen** (food-drink, silver) https://www.sweetgreen.com
- Doing: Lets one appetite-driven photo do the selling, then organises the page with oatmeal and sage panels split by hairlines.
- Why it feels made: Food photography is consistently lit and shot, and the custom wide type sets a strong voice. Acid lime is reserved for the top action, against deep green and oatmeal.
- If imitated badly: The tight stacking of subheads under headlines and large empty tinted panels read as unfinished if the photography is not this strong.

**1X** (brand, gold) https://www.1x.tech
- Doing: A robotics company presented as a quiet fashion campaign: three soft-knit robots on warm grey, then full-screen scenes carrying one line each.
- Why it feels made: Every screen holds one two-tone 44px line, one action and nothing else, pinned to the same margins across hero, careers and film. The tiny tracked caps nav and the render dissolving into the ground feel expensive.
- If imitated badly: This only works with a bespoke image; on stock renders one small line reads as an unfinished page, and the dark nav already vanishes over the dusk photos.

## System choices

- Frames: `media.photography/uncropped-native-plate`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/neutral-pill`
- Surfaces: `surface.border-treatment/line-style-as-meaning`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/colour-plate-then-media`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `mobile.phone-nav/word-for-the-menu`
- Showpiece: `section.feature-sticky-scroll/split-pinned-half`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Atmosphere: `atmosphere.texture/paper-colour-fills`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: centred-links-bar (seen on Speakeasy, Exa, Cursor Pricing)

*Feeling: balanced and considered, a little more designed than the default.*

Logo left, actions right, links truly centred on the page. Use it when the bar should feel composed, and when the hero is centred too, because the links then sit on the same axis as the headline. It suits short link sets of three to six. Avoid it when one side is much heavier than the other, unless you use a grid, because flex with space-between centres the links in the leftover gap and they sit visibly off-axis.

Use `grid-template-columns:1fr auto 1fr`. Set 52 to 72px tall, 14 to 16px links, 24 to 40px gaps. Cursor is the purest case: 52px, the same colour as the page with no border, 14px at 400, 32px apart, 28px pills on the right. Exa and Customer.io add tiny 8 to 10px chevrons. Dub puts the current page in a grey chip at radius 8.

```css
.nav{height:56px;padding:0 var(--rail);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:var(--bg)}
.links{display:flex;gap:32px;font-size:14px}
.links a{color:var(--ink-2);transition:color .15s ease}.links a:hover{color:var(--ink)}
.actions{justify-self:end;display:flex;align-items:center;gap:12px}
```

### Hero: inset-rounded-panel (seen on Decagon, ECI, Nuro)

- **Feels:** Current, composed, a product brand with taste. The page colour acts as a mat.
- **Use when:** You want the photo-led feeling with the precision of a product site. It is the modern default for AI, health and hardware brands.
- **Not when:** The site is about raw scale or immersion. An inset says object, not world.
- **Recipe:** Panel inset 8 to 32px from the viewport, radius 16 to 32, reaching the fold. Decagon keeps its nav inside the panel, with a slim white announcement bar on the page above it, and a 56px round arrow straddling the base. Nuro stops the panel near y 690 and lets a large line of the next section begin at the fold. Scale keeps a white 88px header and insets the video on three sides. Copy sits 56 to 124px inside: 48 to 108px headline, 20px sub, capsule or pill.

```css
body{padding:12px 12px 0;background:var(--bg)}
.panel{position:relative;height:calc(100vh - 82px);min-height:640px;border-radius:20px;isolation:isolate;color:#fff}
/* the image clips, the panel does not, so the arrow can straddle the base */
.clip{position:absolute;inset:0;border-radius:20px;overflow:hidden;z-index:-1}
.clip img{position:absolute;left:0;top:0;width:100%;height:172%;object-fit:cover;object-position:50% 0} /* horizon in the lower fifth */
.copy{padding:64px 124px}
h1{font:500 72px/1.04 var(--font-display);letter-spacing:-.03em;color:#fff;max-width:760px}
.down{position:absolute;left:50%;bottom:-28px;margin-left:-28px;width:56px;height:56px;border-radius:50%;
  background:var(--bg);display:grid;place-items:center}
```

Set the radius on an inner clipping layer, not on the panel, or `overflow:hidden` eats the straddling arrow. Our first crop left the horizon behind the headline and the type crossed two colours. Move the image, not the text.

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

### Collection grid: photo-beside-shop (seen on White Cube, Isolabella della Croce, Royal College of Art)

*Feeling: a gallery with a small bookshop by the door.*

For sites that sell a few things alongside something else. White Cube sets a pale 50 percent panel with one book at half its width beside a label, a 22px title, a price and a text link. Isolabella pairs a 670 by 570 macro leaf with three columns of 256px bottle cut-outs, with no prices shown. Olipop runs two big lifestyle photos with stickers. Use it for culture, wine, restaurants and local shops. It is often the best answer for a small business, because it does not pretend to be a warehouse.

### Blog index: flush-story-row (seen on Work & Co, Meta AI, Studio Dado)

*Feeling: a small, well-set update.*

No card at all. Work & Co sets a 2×2 of 340 by 191 tiles in a 700px column with square corners, a 20/500 title about 22px below, and one serif sentence ending in a red link. Meta AI runs four items on a 352px pitch, each an 80px thumbnail at radius 20 to the left of a 16/24 title and a 12px caps date, between full-bleed hairlines. Vitsoe sets four 238px columns and lets heights vary. Nuro sets 320px squares at radius 32. Use it as a small news section on a homepage, three or four items, ending in a link to everything. Avoid it as a full archive, because it has no way to hold fifty posts.

### Full bleed break: pinned-photo-card-over (seen on Wildbran)

**Feel.** The place stays. The story moves across it.
**Use when** a photo sets a location: a factory, a kitchen, a landscape. **Avoid** with a busy photo near the card edges.
**Recipe.** A full-bleed photo pinned at 100vh. A flat card about 770px wide scrolls up over it, holding a small white eyebrow above the card, a 32 to 40px heading, a one-line lede, one action, and a second image inset 8px from the card's edges.
**Why it works.** Text never sits on the photo, so there is no scrim and no legibility fight, and the card's motion gives you depth for no cost.

**Built.** The analyst record said about 420px, and the frame measures about 770px. At 420 this collapses into a small floating tag.

```css
.photo{position:sticky;top:0;height:100vh;width:100%;object-fit:cover;display:block}
.over{position:relative;margin-top:-62vh;padding-bottom:18vh;text-align:center}
.card{width:min(770px,100% - 40px);margin-inline:auto;background:var(--surface);padding:32px 8px 8px}
.card img{width:100%;height:420px;object-fit:cover;margin-top:28px}
```

### Feature grid: photo-overlay-cards (seen on Dishoom, Kinfolk, Wealthfront)

*9 sites, quality 4.* Warm and human. Use it for people, places and goods when text can live on the image: wealth stories, hotels, gyms, restaurants. Skip it for products that need explaining.

Recipe: two to five cards with 16 to 24px gaps, about 421 by 500px, radius 8 to 16 or 0 for luxury. A small translucent pill top left, 11px tracked caps. A 24 to 28px title and one line at the foot, with a bold lead that continues into regular weight. A 40px white circle arrow bottom right. Dishoom's form replaces all of this with an inset double-rule label box, which suits hospitality.

Seen on Wealthfront, Dishoom, Kinfolk, Huel, Isola Bella, Lucid. Suits photo-led, warm neutral, bold colour.

```css
.c { position: relative; display: block; aspect-ratio: 421/500; border-radius: 16px; overflow: hidden; color: #fff; text-decoration: none; isolation: isolate; }
.c img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -2; transition: transform .6s cubic-bezier(.2,.7,.2,1); }
.c:hover img { transform: scale(1.03); }
/* darkens only where the type sits; the top half of the photo stays untouched */
.c::after { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.5) 24%, transparent 50%); }
.tag { position: absolute; left: 16px; top: 16px; padding: 7px 10px; border-radius: 99px; background: rgba(0,0,0,.4); backdrop-filter: blur(8px); font: 600 11px/1 var(--font-text); letter-spacing: .05em; text-transform: uppercase; }
.txt { position: absolute; left: 24px; right: 80px; bottom: 24px; }
.txt h3 { font: 600 26px/1.15 var(--font-text); letter-spacing: -.015em; }
.go { position: absolute; right: 20px; bottom: 24px; width: 40px; height: 40px; border-radius: 50%; background: #fff; color: #000; display: grid; place-items: center; }
```

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

### Closing section: split-plain-close (seen on Vercel Pricing, Stripe Billing, Amplitude)

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

### Footer: fine-print-directory (seen on Apple, Apple MacBook Pro, Apple Bag)

*Feeling: the small print of a very large company.*

Apple sets a 980px column of 12px text on a pale grey band: bold group heads, about 26px pitch, five columns of stacked groups, hairlines above and below, numbered footnotes above and a pipe-divided legal row beneath. It is the densest element on an airy page, and the contrast is what makes the page above feel spacious. Use it only with truly hundreds of destinations, for commerce, banks and large platforms. Collapse it on phones to ruled accordion rows with chevrons, as Apple Bag does. Zapier and Svix add a tier of SEO links under the main columns, kept apart by a rule.

### Frames: uncropped-native-plate (seen on BIG, Alessandro Stella, White Cube)

*Feeling: curatorial. The work is left alone.*

**Use:** Portfolios, galleries, architecture, museums, anything where the image is the product and cropping would be an insult. **Avoid:** Thin libraries, or commerce grids that need equal cells to compare items.

Show each image at its native ratio with no radius, shadow, tint or caption inside. Pick one fixed dimension. Fixed height of up to 720px suits a one-at-a-time sequence: Alessandro Stella uses about 576 by 720 for portrait and about 1280 by 720 for landscape. A fixed column of 330 to 420px suits a dense index, with heights left unequal so tall images become rhythm breaks. Keep the interface in one or two neutrals, so all colour comes from the work. Set scans raw and let each object's own edge be the frame.

```css
.plates { display: flex; gap: 64px; align-items: center; justify-content: center; }
.plate img { height: min(62vh, 720px); width: auto; display: block; }   /* height is fixed, width stays native */
.plate figcaption { margin-top: 14px; text-align: center; font-size: 13px; line-height: 1.3; }
.plate figcaption em { color: var(--ink-2); }
```

**In the lab:** Rendered with a square and a 3:2 frame at equal height, and it matched the Alessandro Stella frames. Fix the height, not the width.

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

### Primary button: neutral-pill (seen on Linear, Polar, Affirm)

*Feeling: calm, expensive, one thing to press.*

A full pill in the strongest neutral the page allows, often the only filled object in the viewport. Linear uses #e5e5e6 rather than white on #08090a, then steps to pure white on hover, so the button has somewhere to go. Polar, Affirm and Revolut do the same on their dark sections, and the value flips with the ground while the shape stays. On light pages, deep brand tones such as a plum or a forest green behave as ink and belong here too.

Set 40 to 48px, 14 to 16px at 500, 20 to 24px padding, no shadow, press .97. Use it for dark product pages, finance, robotics and brands with strong imagery. Do not put two on one row with equal weight. Hold pure white in reserve, because white on black at rest is harsher than it needs to be.

```css
.b-pill{display:inline-flex;align-items:center;height:44px;padding:0 20px;border:0;border-radius:999px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 92%,var(--bg));color:var(--bg);
  font:500 16px/1 var(--font-text);letter-spacing:-.011em;cursor:pointer;
  transition:background-color .16s cubic-bezier(.25,.46,.45,.94),scale .1s}
.b-pill:hover{background:var(--ink)}
.b-pill:active{scale:.97}
.b-pill:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

### Surfaces: line-style-as-meaning (seen on Better Auth, Neon Docs, Claude Pricing)

*Feeling: a code you pick up without being told.*

Line style carries data. Better Auth uses solid hairlines for the open-source core and 1px dashed cells for the paid product, so the line separates tiers. Neon uses green for capability paths and grey for utilities. Limit to two styles, at the same weight and alpha.

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

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

### Phone menu: word-for-the-menu (seen on Prototype, Structure Consulting Engineers, Cognition)

*Feeling: written, not iconographic.*

No icon at all. Prototype sets an italic 20px Menu with a 1px underline, reusing its own link style. Cognition sets a plain 15px word, in keeping with its refusal of chrome. Studio Dado and Locomotive use a quiet text link top right. Prägen Hätlen sets a mono `[+] MENU`. Use it for studios, editorial and type-led sites. It tells a first-time reader exactly what it does, and it reads as part of the page's voice. Pad it to a 44px target with padding and negative margin, so the text stays small.

```css
.mn{font:italic 400 20px/1 var(--font-display);text-decoration:underline;text-decoration-thickness:1px;
  text-underline-offset:4px;padding:14px 4px;margin:-14px -4px}
```

### Showpiece: split-pinned-half (seen on X8 Eyewear, Arya Bhangy Builders, Lyra)

*3 sites, quality 5.* A fashion spread. One half holds and the other scrolls. Use for a single product or person with several images.

Recipe: 50/50 split. X8 pins a panel with copy at its foot while macro, model and detail shots scroll in the other half, inside a 15px black frame, and the panel fill steps from white to a light grey. Lyra pins a heading and a 578 by 450 photo while rows scroll past, and the photo swaps with each row. Arya Bhangy swaps a full-height photo per year beside a stack of boxed years.

Seen on X8 Eyewear, Lyra, Arya Bhangy. Suits photo-led and warm neutral.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Atmosphere: paper-colour-fills (seen on Acne Studios, Bauhaus Clock, Heart & Soil)

*Feeling: colour blocks read as card stock.*

**Use it for:** Local, craft and fashion brands, and product tiles. **Avoid:** A visible repeat. Use a large image or a seamless tile.

Colour blocks share a low-contrast mottled paper or leather-grain image, about 3% contrast, so fills read as card stock. Use on tiles or panels, alternating with full-bleed photography.

Heart & Soil runs cream, taupe, lavender and moss through one mottled paper image, so colour blocks read as card stock. Bauhaus Clock uses an embossed grain at about 3 percent contrast, like a dial face. Acne Studios keeps fibre paper to one panel, which alternates with full-bleed campaign photographs.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.