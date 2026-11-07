# Your direction (seed 1021)

Reads as **brand**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Stripe Sessions, a gold brand page)

1. Navigation: `nav.top-bar/centred-wordmark-split`
2. Hero: `hero.object-3d/spotlit-object-on-dark`
3. Feature grid: `section.feature-grid/rule-topped-columns`
4. Steps process: `section.steps-process/drawn-path-or-diagram`
5. Pricing table: `section.pricing-table/single-offer-split-card`
6. Logo wall: `section.logo-wall/few-logos-big-room`
7. Contact form: `section.contact-form/underline-field-form`
8. Faq: `section.faq/big-type-rows`
9. Gallery portfolio: `section.gallery-portfolio/scattered-collage`
10. Closing section: `section.cta-band/tone-panel-close`
11. Footer: `section.footer/masked-wordmark`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Gravitas One** with **Libre Franklin**. A wide fat face with razor hairlines reads as a masthead; the plain gothic body gives it something to push against.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Libre Franklin 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Marine Layer: bg #f8f2e2, surface #ffffff, text #292328, muted #66645f, accent #623133. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `focus-pull`, **Scroll** `horizontal-scrub-rail`, **Hover** `ink-swap`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Stripe Sessions** (brand, gold) https://stripe.com/sessions
- Doing: A conference page holds one extraordinary colour ribbon against an almost silent system of ultralight type, plum ink and hairlines.
- Why it feels made: Sub-1.0 leading on an ultralight grotesk, a strict one-third offset grid and plum in place of black. All colour is rationed to the ribbon, with only trace echoes in hover hairlines and day flags.
- If imitated badly: Tight ultralight type fails on lesser fonts, and the page collapses without a render of this quality at its centre.

**Joby** (brand, gold) https://www.joby.aero
- Doing: A cinematic scroll film where full-bleed warm photography sits inside a single saturated blue frame, so the brand colour acts as the stage rather than decoration.
- Why it feels made: One accent blue, one cream, one near-black; every photograph is graded to the same amber-dusk palette and the huge rounded-corner frame ties hero, blue statement and cream sections together. Type is sparse and tightly tracked.
- If imitated badly: Without equally graded, art-directed photography and one disciplined blue, the oversized radius and giant type just look like a heavy template.

**Elisa Breyer Archive** (culture, gold) https://www.elisabreyerarchive.com/
- Doing: An artist's painting archive reduced to a dense edge-to-edge grid of colourful works with 14px text only.
- Why it feels made: The work is the entire interface: uniform 2-4px gutters, one typeface size, a tiny pill toggle for sort; colour comes entirely from the paintings.
- If imitated badly: A dense image wall collapses without genuinely strong, consistently cropped artwork.

## System choices

- Frames: `media.photography/studio-seamless-object`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/cool-ground-white-tile`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/rule-opened-title-body-split`
- Load: `motion.load-sequence/focus-pull`
- Scroll: `motion.scroll-pin-or-scrub/horizontal-scrub-rail`
- Hover: `button.hover-response/ink-swap`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Atmosphere: `atmosphere.gradient-field/grain-section-band`

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

### Hero: spotlit-object-on-dark (seen on Plvs Ultra, Teenage Engineering, Garuda 2026)

- **Feels:** A stage. One thing matters.
- **Use when:** A device with presence, and a real render.
- **Not when:** The render is ordinary. Darkness makes it more obvious.
- **Recipe:** Pure black, the device rising from the bottom centre at about 510px, back-lit, floor glow in the lower corners falling to black, one saturated element as the only colour. Teenage Engineering has no headline, and its nav is a row of line-art tiles. Plvs Ultra sets 90/1 weight 700 at -0.067em over a line-drawn chip with a red beam rising behind the text.

### Feature grid: rule-topped-columns (seen on Public, Tana, Claude)

*8 sites, quality 4.* Open and calm. Use it for three to six short claims when you want air and have no art. It is the plainest fix for a three-card row: delete the box and keep one line. Skip it for long lists.

Recipe: columns with a 24 to 32px gutter. Each opens with a 1px rule on its top edge, or its left edge with about 32px of inset, then 28px of space, a small icon or number, a 20 to 24px title at weight 400, and 16 to 17px copy at 1.6. Fix the rule weight and colour across every column. A dark variant uses a roughly 15% white rule at the top of each cell.

Seen on Tana, Public, Claude, Customer.io, Neon, Boom. Suits light precision, warm neutral, dark precision and photo-led.

### Steps process: drawn-path-or-diagram (seen on New Material, Hims, Brand Identity School)

*6 sites, quality 4.* The route becomes the picture. Use when your process has a shape, and you have an illustrator or a strong diagram. The Brand Identity School draws a sine path over illustrated hills that fills as you scroll, with mascots moving along it. Rewiring America seats five role cards on a thick ring. New Material runs light along an open outline. Hims stacks perspective slabs behind an athlete cutout. See `references/motion/scroll.md`, recipe 9.

Seen on New Material, Hims, Brand Identity School, Rewiring America, Cascara Cabinet.

### Pricing table: single-offer-split-card (seen on Stripe Sessions, Function Health, Jurafuchs)

*Feeling: one honest offer.*

One product, one price, one card. This is the only place a large price belongs. Function Health sets a 1088 by 426 cream card with a label, a 40px name, an 80px price with a 24px unit, a muted billing line, a 50px pill, a vertical rule, then nine ticks at 36px pitch. Stripe Sessions carries a ticket the same way, with a tinted inset panel holding the price and a struck original. Use it for memberships, tickets and courses. My first version had seven ticks and felt thin next to nine, so fill the right column to match the left.

```css
.card{display:grid;grid-template-columns:1fr 1px 1fr;gap:56px;padding:56px;background:var(--surface);border-radius:24px;border:1px solid var(--line);
  box-shadow:0 30px 60px -36px color-mix(in srgb,var(--accent) 34%,transparent)}
.rule{background:var(--line)}
.card h2{font:400 40px/1.1 var(--font-display);letter-spacing:-.015em}
.price{font:400 80px/1 var(--font-display);letter-spacing:-.03em;margin-top:44px}
.price small{font:400 24px/1 var(--font-text);letter-spacing:0;color:var(--ink-2);margin-left:4px}
.note{font-size:14px;color:var(--ink-2);margin-top:8px}
.go{display:flex;align-items:center;justify-content:center;height:50px;border-radius:25px;margin-top:32px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:600}
.list{align-self:center}
.list li{display:flex;align-items:center;gap:10px;min-height:36px;font-size:15px}
.list svg{flex:none;width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:1.2}
.flag{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--accent)}
.flag svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.5}
@media(max-width:860px){.card{grid-template-columns:1fr;gap:32px;padding:28px}.rule{height:1px}.price{font-size:64px}}
```

### Logo wall: few-logos-big-room (seen on Nuro, Apptronik, Athletics)

*Feeling: a short list of serious partners.*

Three to five marks with an enormous amount of space. Scarcity reads as selection, and this is the right wall for a small client list. Nuro centres five black marks on a 230px pitch in a 420px tall panel at radius 32, and the empty padding gives each partner its weight. Apptronik sets five grey-white marks in a 300px black tile. One Medical shows three 150px marks in brand green. Paddle sets 40px black wordmarks on a flat 217px sand band, cut by the viewport with no fade. Athletics recolours nine logos to one ink on lime.

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

### Faq: big-type-rows (seen on Rabbit, Telkom-OT, Lyra)

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

### Gallery portfolio: scattered-collage (seen on Joby, Prägen Hätlen, Aarretuote)

*Feeling: a table covered in things you made.*

Mixed sizes placed by hand, with a lot of empty page. Sutéra scatters nine cut-outs and rounded images, each with a small mono number at its corner, then maps the numbers to names in one three-line legend. Joby staggers portraits at 120px offsets on cream. Prägen Hätlen places three daylight macro shots to relieve its dark CG chapters. It needs real variety in the pictures, some cut out, because scattered rectangles of similar stock photos look accidental. Place each one on the grid, then offset it. At phone width, fall back to two loose columns.

### Closing section: tone-panel-close (seen on Tana, Meta AI, Boston Dynamics)

*Feeling: a quiet room at the end.*

An inset panel one tone off the page. OpenAI's API pricing is the flattest: 1376 by 422, radius 6, centred, with a grey pill and a bare link. Tana places a two-line heading at left and one soft bloom on the right half. Meta fades a 1024px panel from white into pale blue with an app icon. My bloom took three tries. First it was a small oval that showed banding. Then I enlarged it, and it was twice too strong. The real one is pale, wide, runs off the panel's right edge, and pairs a warm core with cool flanks. Turn it down until you doubt it is there.

```css
.panel{position:relative;overflow:hidden;isolation:isolate;min-height:420px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:72px;background:var(--surface);border-radius:32px}
/* --warm and --cool: two pale tints from your palette */
.panel::after{content:"";position:absolute;z-index:-1;left:44%;right:-12%;top:-30%;bottom:-30%;opacity:.62;filter:blur(40px);
  background:radial-gradient(38% 42% at 56% 52%,var(--warm),transparent),radial-gradient(34% 62% at 26% 50%,var(--cool),transparent),radial-gradient(30% 60% at 92% 46%,var(--cool),transparent)}
.panel h2{font:400 52px/1.08 var(--font-display);letter-spacing:-.02em;max-width:11em}
@media(max-width:760px){.panel{padding:40px 24px;border-radius:24px;min-height:0}.panel h2{font-size:36px}.panel::after{left:-10%;right:-30%;top:50%;bottom:-40%}}
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

### Frames: studio-seamless-object (seen on Boston Dynamics, Sakara, Apptronik)

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

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

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: cool-ground-white-tile (seen on Apple Vision Pro, Bauhaus Clock, VS Code)

*Feeling: lit, like a product on a showroom table.*

**Use it for:** Hardware, consumer tech, and tiles holding one strong object or photo. **Avoid:** Text-heavy tiles. A white tile with a paragraph on grey is the default admin look.

Cool ground #eef0f2 or #f5f5f7, pure white tiles, no border, one soft shadow or none. Text #1d1d1f, secondary #86868b. White reads as lit because the ground leans blue-grey, so put real product in the tiles.

Bauhaus Clock pairs an #eef0f2 ground with white tiles and uses soft shadows rather than borders, and saturated colour appears only inside product tiles. White reads as lit because the ground sits a little cool and a little darker.

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

### Page rhythm: rule-opened-title-body-split (seen on ECI)

**Feel.** Considered, institutional, slightly European.
**Use when** a section has a title, a short body and one image. **Avoid** when body copy is long, since it must fit against the column's bottom.
**Recipe.** A 2px ink rule across 32px gutters opens each section. Title 52/52 at top left, body 20/24 pinned to the bottom of the same column, 681px media at the right from x=727 about 35px below the rule. Title and body sit far apart on purpose. The rule and the column hold them together.

### Load: focus-pull (seen on Oliver Dupuy, Fora, Language Explorer)

*Feeling: a lens racking.*

A hero image sharpens from heavy blur over a colour sampled from it. The Candy Vault starts at about 40px over lilac, for about 2s. Google's Language Explorer starts with a camera almost touching the surface and pulls back until the globe is sharp. Use it when the image is the page, and treat it as the placeholder strategy too. Blur a tiny inline thumbnail and the sharp version can replace it without a flash. See `load.md` Image opening.

### Scroll: horizontal-scrub-rail (seen on Decagon, Roy Jad, Oliver Dupuy)

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

### Hover: ink-swap (seen on ACME, Apple Vision Pro, New Exhibitions)

*Feeling: a stamp turned over.*

Ink and paper trade places: fill, text and border swap in one move of 150 to 300ms, with no movement or shadow. New Exhibitions flips white to black in 250ms. Ritual fills a navy outline. Monocle turns yellow to black and adds an underline. Apple's Vision Pro does a hard 0s cut. Use it on square, printed and editorial buttons. Keep the label readable through the middle of the fade, or use an instant cut. Use an inset ring so nothing shifts.

```css
.h-swap{background:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);transition:background-color .25s ease,color .25s ease}
.h-swap:hover{background:var(--ink);color:var(--bg)}
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

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Atmosphere: grain-section-band (seen on Render, Revena, Liquid AI)

*Feeling: airbrushed. Colour with a physical surface.*

**Use it for:** Logo walls, section stages and CTA bands on a white precise page. **Avoid:** As a full page background. It works because it is a band with two hard edges.

Full-bleed band 325 to 425px, hard top and bottom edges, ramp from page colour to an accent tint, low-frequency mottle of 3 to 4 levels, film grain sigma 4 to 5 levels masked to follow the colour. A stage, never page background.

The measured ramp is not monotonic: it wobbles by a few levels as it goes. That cloudiness matters as much as the grain.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
/* light grounds only. on dark, the soft-light mottle turns into smoke */
.band2{position:relative;height:325px;overflow:hidden;isolation:isolate;
  --t:oklch(from var(--accent) .72 calc(c * .55) h);
  background:linear-gradient(90deg,var(--surface) 0%,color-mix(in oklab,var(--t) 8%,var(--surface)) 24%,color-mix(in oklab,var(--t) 22%,var(--surface)) 44%,color-mix(in oklab,var(--t) 42%,var(--surface)) 68%,var(--t) 100%)}
/* mottle: a linear ramp plus fine grain still reads as CSS. the real thing clouds by a few levels */
.band2::before{content:"";position:absolute;inset:0;mix-blend-mode:soft-light;opacity:.55;background-size:100% 100%;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='325' preserveAspectRatio='none'%3E%3Cfilter id='c' x='0' y='0' width='100%25' height='100%25' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.006 .012' numOctaves='3' seed='11'/%3E%3CfeColorMatrix values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='1440' height='325' filter='url(%23c)'/%3E%3C/svg%3E")}
/* grain follows the colour: where the band is still white, grain would read as dirt */
.band2::after{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.07;
  -webkit-mask:linear-gradient(90deg,transparent 8%,#000 62%);mask:linear-gradient(90deg,transparent 8%,#000 62%)}
.band2 h2{position:relative;z-index:2;padding:110px 32px;margin:0}
</style>
<div style="height:100px"></div><div class="band2"><h2>Every carrier feed, one queue</h2></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.