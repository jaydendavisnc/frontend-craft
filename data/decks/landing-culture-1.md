# Your direction (seed 1033)

Reads as **culture**, surface **landing**, register **bold-colour** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Royal Ontario Museum, a gold culture page)

1. Navigation: `nav.top-bar/centred-wordmark-split`
2. Hero: `hero.full-bleed-media/centred-lockup`
3. Testimonial: `section.testimonial/open-quote-columns`
4. Newsletter: `section.newsletter/link-not-field`
5. Gallery portfolio: `section.gallery-portfolio/peek-rail`
6. Collection grid: `commerce.collection-grid/peek-rail`
7. Feature grid: `section.feature-grid/photo-overlay-cards`
8. Location hours: `section.location-hours/open-today-strip`
9. Blog index: `section.blog-index/front-page-lead`
10. Closing section: `section.cta-band/composer-close`
11. Footer: `section.footer/large-link-index`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Baskervville** with **Public Sans**. A swash-Q Baskerville kept large, over a civic grotesque that makes it look deliberate and not antique.
- Display: 64px, phone 38px, weight 500, tracking -0.015em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Public Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Baskervville:ital,wght@0,400..700;1,400..700&display=swap https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Almeida Theatre: bg #000000, surface #ffffff, text #ffffff, muted #bc8f6b, accent #ff5a5f. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `tiles-assemble`, **Scroll** `pinned-step-swap`, **Hover** `spring-overshoot`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Royal Ontario Museum** (culture, gold) https://www.rom.on.ca
- Doing: A museum site where the building and objects fill the screen, a huge condensed ROM mark anchors every section and practical visit info stays a tidy 3-up.
- Why it feels made: Full-bleed documentary photography alternates with disciplined white sections; condensed display type is used at a few fixed scales and everything else is quiet 16px grotesk.
- If imitated badly: The condensed wordmark overlapping photos only works with darkened, calm image areas; on busy photos it turns illegible.

**New York Phil** (culture, silver) https://www.nyphil.org
- Doing: A concert hall brand run as a bold colour system: condensed caps on yellow, magenta, cyan and teal blocks, with documentary photography in black and white.
- Why it feels made: A consistent system of colour blocks, huge condensed type and monochrome photography gives a strong identity for a content-heavy site. Cards are uniform and event metadata is tidy.
- If imitated badly: Four saturated blocks plus black on one page is chaotic unless one block system and one type voice are held strictly.

**Jasper** (ai, gold) https://www.jasper.ai
- Doing: An enterprise AI platform dressed as a confident print identity: tight serif, square boxes and flat geometric colour instead of the usual gradient tech look.
- Why it feels made: One rule runs everywhere: 1px navy boxes with zero radius, flat fills only, and grid-paper and circle motifs that recur from hero to FAQ. Five flat colours each have a fixed job.
- If imitated badly: Hairline square boxes read as a wireframe unless the serif is this tight and the colour blocks this confident.

## System choices

- Frames: `media.photography/studio-seamless-object`
- Headline: `type.display-headline/statement-as-hero`
- Section headings: `type.section-heading/heading-row-with-action`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.panel/sheet-stack`
- Surface ladder: `atmosphere.light-surface-ladder/one-plane-alpha-ink`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/hard-midline-panels`
- Load: `motion.load-sequence/tiles-assemble`
- Scroll: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Hover: `motion.hover-state/spring-overshoot`
- Phone menu: `nav.mobile-menu/display-type-takeover`
- Showpiece: `product.animated-demo/live-canvas-hero`
- Showpiece: `motion.scroll-pin-or-scrub/pinned-step-swap`

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

### Hero: centred-lockup (seen on Fred, La Table de Joakim, TR Studio)

- **Feels:** Hospitable, calm, a little ceremonial.
- **Use when:** Hospitality, food and interiors, where the image has no central subject: a pattern, a landscape, a room.
- **Not when:** A face or dish sits at the centre. The type lands on it.
- **Recipe:** A mid-tone image, a flat 20 to 35% overlay or none. Centred headline 40 to 85px, one line of 12 to 17px, a small CTA or text link. This is where generated heroes go wrong, so add an edge. TR Studio breaks its name into the corners at about 90px, with small rotated labels on the sides. La Table de Joakim hangs two small mono captions either side of a 53px title, with its logo top centre and links in the corners. Fred sets one italic word inside a two-line headline. Gagosian stacks four type sizes in a tight block. None of them is just a headline on a photo.

```css
.hero{position:relative;height:100vh;min-height:680px;color:#fff;display:grid;place-items:center;text-align:center;isolation:isolate}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:rgb(0 0 0/.26)}
/* the name goes into the corners, so the frame has an edge before the eye reaches the middle */
.corner{position:absolute;font:400 92px/1 var(--font-display)}
.corner.tl{left:28px;top:18px}.corner.tr{right:28px;top:18px}
.corner.br{right:28px;bottom:18px}.corner.bl{left:28px;bottom:18px}
.side{position:absolute;right:30px;top:50%;font:400 12px var(--font-mono,monospace);
  letter-spacing:.08em;text-transform:uppercase;writing-mode:vertical-rl}
.mid{display:grid;grid-template-columns:230px 660px 230px;align-items:center;gap:36px}
h1{font:400 52px/1.06 var(--font-display);text-transform:uppercase;letter-spacing:.01em;color:#fff}
.note{font:400 12px/1.55 var(--font-mono,monospace);letter-spacing:.04em;text-transform:uppercase;text-align:left}
```

Corners and side labels cost nothing and solve the hero's real problem, which is that a centred stack on a photograph has no edges. Keep them small and true: a place, a date, a year. The corner letters only work if the name has as many letters as you have corners, so otherwise use one short word per corner.

### Testimonial: open-quote-columns (seen on Nicole Heim Studio, Lemon Squeezy, Payload)

*Feeling: a printed page of reviews.*

Quotes on the page in columns, with no cards. Nicole Heim runs three 427px justified serif columns at 20/25, attributions in a small sans after a dash, under a heavy 1.5px rule and about 100px of air. It looks like the back of a book jacket, which is exactly the right company to keep. Plausible's uneven 3 by 2 text wall feels gathered. Lemon Squeezy checkers 411 by 370 cells in two tones with no gaps. Magram's four 540px squares use hairlines alone. Use it for studios and text-led brands. Justify only in a serif with hyphens on, or rivers open up.

### Newsletter: link-not-field (seen on Work & Co, Nicole Heim Studio, Poeza)

*Feeling: this page is not for collecting emails.*

No field on the page. Work & Co gives it one row of the page grid: a label at left, a sentence and a Subscribe pill at right, about 120px tall. Nicole Heim lists it as one of three label and value pairs. Poeza makes the whole thing a stacked 80px link. It is the choice gold pages make most, because it keeps the page in its own voice.

```css
.row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,3fr);gap:24px;padding-block:32px;border-bottom:1px solid var(--line)}
.lab{font:500 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row p{font-size:20px;line-height:1.35}
.b{display:inline-flex;align-items:center;height:40px;margin-top:20px;padding:0 20px;border-radius:20px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500}
@media(max-width:700px){.row{grid-template-columns:1fr;gap:8px}}
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

### Collection grid: peek-rail (seen on Fidèle, Spotify, Bonobos)

*Feeling: there is more where this came from.*

One row running past the page edge. Fidèle shows five and a half tiles with 1px gaps. Spotify fades the sixth under the panel edge and keeps `Show all` at right. Casper puts a 350px text column with arrows beside portrait tiles, and the third one peeks. UNITO clips unit tiles at both ends of a rounded stage. Use it on a home page or a product page for 6 to 12 items. Never use it as the main way to reach products, because almost nobody swipes to the ninth tile.

Peek at least 40px, so that the cut clearly reads as more. Use scroll snap, and on phones a dash pager at about 28 by 3px.

```css
.rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin-inline:-16px;padding-inline:16px}
.rail>*{flex:0 0 min(72%,320px);scroll-snap-align:start}
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

### Location hours: open-today-strip (seen on Royal Ontario Museum, New Exhibitions, Arkansas Museum of Fine Arts)

*Feeling: the door is open.*

Only what matters today, near the top. The Arkansas Museum of Fine Arts runs three items along the foot of its hero: a bold 12px `OPEN TODAY` over the hours, the address, and a terracotta action with an arrow, split by 1px slanted rules that echo the slash in its logo. Tate reduces hours to one status line under each gallery photo. The Rijksmuseum puts prices and hours in a small translucent panel. It is the single most useful thing a venue can add to a homepage. Compute it, using the snippet above, so that it can never be wrong, and link it to the full table.

```css
.hero{display:grid;grid-template-columns:44% 1fr;height:100vh}
.l{padding:0 56px 44px 72px;display:flex;flex-direction:column}
.l h1{font:600 60px/1.04 var(--font-display);letter-spacing:-.03em;color:var(--ink);margin-top:280px}
.l p{font-size:16px;line-height:24px;color:var(--ink-2);margin:32px 0 0 56px;max-width:21em}
.strip{margin-top:auto;display:flex;align-items:center;gap:20px;font-size:12px;line-height:16px}
.strip b{display:block;font-size:12px;font-weight:700;letter-spacing:.02em}
.strip i{width:12px;height:34px;background:linear-gradient(to top right,transparent calc(50% - .6px),var(--ink-3) calc(50% - .6px),var(--ink-3) calc(50% + .6px),transparent calc(50% + .6px))}
.strip a{font-weight:700;font-size:13px;letter-spacing:.02em;color:var(--accent);text-transform:uppercase}
.r{background:url(photo.jpg) center/cover;clip-path:polygon(4.5% 0,100% 0,100% 100%,0 100%)}
@media(max-width:760px){.hero{grid-template-columns:1fr;grid-template-rows:auto 40vh;height:auto}.l{padding:0 16px 24px}.l h1{font-size:40px;margin-top:56px}.l p{margin:20px 0 32px}.strip{flex-wrap:wrap;gap:12px}.r{clip-path:none}}
```

### Blog index: front-page-lead (seen on Anthropic News, Amplitude, Decagon)

*Feeling: this is a publication.*

Anthropic's news page is built like a newspaper: columns of 308, 632 and 308px at 16px gaps in a 1280px frame, under a thin rule with a label left and today's date right. The centre holds a 632 by 356 lead with a 32.5/37 bold title, and the sides stack 21.4/26.7 stories split by 1px rules, with four-line clamps on the body. Philadelphia Orchestra and Amplitude use two-column cousins. Use it when at least five real stories exist at once, and when one of them truly leads. On phones the lead moves to the top. Avoid it for a personal or small-team blog, where the side columns turn into padding.

```css
.w{max-width:1280px;margin:0 auto;padding:40px 0}
.hd{display:flex;justify-content:space-between;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:18px 0;font-size:13px}
.hd b{font-weight:600}.hd span{color:var(--ink-2)}
.g{display:grid;grid-template-columns:308px 632px 308px;gap:16px;padding-top:20px}
.meta{display:flex;gap:14px;font-size:12px;line-height:16px;color:var(--ink-2);margin-bottom:12px}
.s{padding-bottom:30px}
.s+.s{border-top:1px solid var(--line);padding-top:18px}
.s img{display:block;width:100%;aspect-ratio:308/172;object-fit:cover;margin-bottom:14px}
.s h3{font:700 21.4px/26.7px var(--font-display);letter-spacing:-.01em;margin-bottom:12px}
.s p{font-size:14px;line-height:21px;color:var(--ink-2);display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.lead img{display:block;width:100%;height:356px;object-fit:cover;margin-bottom:18px}
.lead h2{font:700 32.5px/37px var(--font-display);letter-spacing:-.015em;margin-bottom:12px}
.lead p{font-size:17px;line-height:25px;color:var(--ink-2);max-width:36em}
@media(max-width:1300px){.w{padding:24px 16px}.g{grid-template-columns:1fr 2fr 1fr}}
@media(max-width:760px){.g{grid-template-columns:1fr}.lead{order:-1}}
```

### Closing section: composer-close (seen on Claude, Ramp, Algolia)

*Feeling: start now, right here.*

The last call to action is the product. Claude ends on a real prompt field with its action inside. Ramp's blurred panel holds a 766px URL composer, and its final band restates the slogan over the hero's email field. Algolia draws a dashed dropzone with limits written beneath. New York Phil's preset donation amounts belong here too: a form with the first decision already made. A field beats a button whenever the first step can happen on the page. My heading at 48/400 looked limp beside the original, so set it heavier than you think.

```css
.close{padding:140px 24px;text-align:center}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}   /* keep a real label, visually hidden */
.close h2{font:600 52px/1.08 var(--font-display);letter-spacing:-.015em}
.close>p{font-size:22px;line-height:1.3;color:var(--ink-2);margin:16px auto 0;max-width:30em}
form{display:flex;align-items:center;width:min(560px,100%);height:54px;margin:40px auto 0;padding:7px 7px 7px 18px;background:var(--surface);border-radius:14px;box-shadow:0 0 0 1px var(--line);transition:box-shadow .15s}
form:focus-within{box-shadow:0 0 0 1px var(--ink-2),0 0 0 4px color-mix(in srgb,var(--accent) 16%,transparent)}
form input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:16px}
form button{flex:none;display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 14px;border:0;border-radius:8px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:500}
```

### Footer: large-link-index (seen on Nuro, Figure, Prototype)

*Feeling: a table of contents you could read across a room.*

Few links, set large. Nuro runs 20px links on a 37px pitch in two columns at the left, with almost nothing else. Figure numbers six items from 01 to 06 at about 40px with hairlines between. Prototype stacks three words at 120px, right-aligned, beside a looping reel tile. Basement pushes a 38px list to the bottom of a full viewport, keeping small superscript counts. Athletics sets two 22px lists with no headings and nothing else but three corners of small print. Use it when the site has six to ten destinations and the type is good. It fails with long labels and with anything over about ten items.

### Frames: studio-seamless-object (seen on Boston Dynamics, Sakara, Apptronik)

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

### Headline: statement-as-hero (seen on Nicole Heim Studio, Fidèle, Locomotive)

Thoughtful, unhurried, a little literary. Seen on 9 sites.

**Use it for:** Studios, publishers, architecture and culture, where a good sentence is the best thing you have.

**Avoid it for:** Weak copy. A long sentence with no idea in it just looks like a wall.

**Recipe:** A full sentence or list takes the headline job, 35-80px, weight 400-500, line-height 1.1-1.2, with no size or weight change inside it, running 60-100% of the container. Break lines by hand. Allow at most one inline object or underlined link. No subhead follows.

### Section headings: heading-row-with-action (seen on CleanShot X, Framer, Stone Island)

Practical. The action lives with the title. Seen on 7 sites.

**Use it for:** Rails, galleries, catalogues and resource lists.

**Avoid it for:** Hero-like sections with a single message.

**Recipe:** Two-line heading at 32-56px on the left; on the same bottom baseline at the far right one small control: a 32-48px button, text link, arrow pair or count. 40-64px down to content. Put the section action here rather than under the grid.

<a id="ruled-opener"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: sheet-stack (seen on Hims, Loopcraft, Seed)

*Feeling: layers of paper sliding over each other.*

The next section arrives as a sheet with 24 to 40px top corners, sliding over the last, or each section is a colour room with rounded corners on all four sides, separated by 40px of page. Hims gives each room a colour matched to its imagery and steps inner cards down to 24px. This is the best way to change colour between sections, since a colour change becomes a physical event rather than a flat band. It works unchanged on phones.

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

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: hard-midline-panels (seen on Acne Studios, Symbol Studio, Design Podcast (Focus State))

**Feel.** Fashion house. Severe, symmetrical, expensive.
**Use when** every section has a strong image or colour to fill a half. **Avoid** with text-led content.
**Recipe.** Acne Studios: the page divides exactly at x=720. Paired 720px panels butt with zero gutter. News column, newsletter band, footer columns and caption starts all land on 720, then 360px sub-lines at x=370 and x=1090. Focus State builds a whole site from 50% columns. Symbol Studio insets a white sheet 16px on a pale ground with a 1px vertical rule at the centre, and hangs text about 32px off the rule.

### Load: tiles-assemble (seen on Claude, Per Appelgren, New Material)

*Feeling: a collection being laid out by hand.*

Claude's hero starts with tiles smaller, denser and rotated about 3 degrees, spreading and straightening over about 3s as headline words rise. Per Appelgren flies a tilted stack in and fans it out. Elisa Breyer stretches thin slivers to full height across the grid. Use it where the product is a collection of objects and the layout has a natural looseness. It takes up to 6s on some sites, so keep the headline independent and readable by 2s. End on a real layout, not a pile.

### Scroll: pinned-step-swap (seen on LiveKit, Prototype, mymind)

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

### Hover: spring-overshoot (seen on STUDIO UNLMTD, Sparkle, React Email)

*Feeling: playful, alive.*

An overshoot curve on something small. STUDIO UNLMTD scales a label dot from 0 over 0.55s on `.34,1.6,.64,1`. Sparkle tilts a logo -8 degrees on a 0.5s overshoot. DixonBaxi's hovered card grows as neighbours shrink, on `.34,1.25,.64,1`. Use it for playful brands and small elements. See `foundations.md` Springs and interruption. On a large card, overshoot reads as a wobble.

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

### Showpiece: live-canvas-hero (seen on Framer, FigJam, Fantasy)

*A room with people already in it.* Quality 5/5, 3 sites.

**Use:** Collaborative and creative tools. **Not:** Single-player tools.

**Recipe:** Board panel about 1320px, 60px gutters, soft shadow, dotted grid. Stickies, stamps, named cursors, a running timer and a spinning widget animate as rebuilt UI. It crosses the fold to invite scrolling.

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