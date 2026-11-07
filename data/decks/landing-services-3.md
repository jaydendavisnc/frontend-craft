# Your direction (seed 1031)

Reads as **ecommerce**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The business

Your brief names no business, so this is the business. A page about nothing in particular is the weakest page there is. Commit to this fully, name it well, and say in your closing note that you chose it.

**A deadstock fabric broker selling end-of-roll Italian mill surplus to small fashion labels, from Prato, Tuscany.**

- Naming: Surname plus Tessuti, or a place name plus Stock
- Facts to build on: Sells rolls from 20m, with no reorders; Grades every roll for faults per 50m; Ships across the EU in 3 days; Mill names stay private under contract
- Their vocabulary: deadstock, end of roll, selvedge, fault, hand, drape, composition, jersey, GSM, offcut

### Bespoke components: build these first

These make the page belong to this business and no other. Build each one in full, with real data, before you lay out the rest of the page. Put each inside a dealt section, or give it a section of its own.

- **Roll stock table.** Table with roll number, composition, GSM, width, metres, faults per 50m, price per metre and a tiny colour chip. Sold rolls strike through and sink to the foot. Data: R-2241, wool twill, 280 GSM, 150cm, 34m, 1 fault, 14 EUR/m. Behaviour: A sold roll strikes through and slides down.
- **Fabric hand plot.** Scatter of weight on x and drape on y, with each roll a dot, quadrants labelled shirting, suiting, outerwear, jersey. Fibre pills filter. Data: Wool twill: 280 GSM, drape 62, in suiting. Behaviour: Filtering fades unrelated dots to 15 percent.
- **Garment yield bars.** For a chosen roll, bars of how many units each garment type cuts in a selected size range, with leftover metres. Data: 34m: 21 trousers or 12 coats or 29 shirts, 1.4m over. Behaviour: Bars animate on style change.

## The page, in order (structure from Key, a silver hospitality page)

1. Navigation: `nav.top-bar/corner-anchored`
2. Hero: `hero.input-first/multi-field-booking-bar`
3. Faq: `section.faq/big-type-rows`
4. Product card: `commerce.product-card/bookable-listing-card`
5. Logo wall: `section.logo-wall/opposing-double-marquee`
6. Feature tabs: `section.feature-tabs/index-on-media`
7. Team: `section.team/mono-portrait-grid`
8. Gallery portfolio: `section.gallery-portfolio/peek-rail`
9. Feature alternating: `section.feature-alternating/shifting-ratio-tiles`
10. Closing section: `section.cta-band/plain-centred-close`
11. Footer: `section.footer/contact-first-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Hedvig Letters Serif** with **Host Grotesk**. A modern brand serif with human swell, and a clean grotesque that keeps it in the present.
- Display: 64px, phone 38px, weight 400, tracking -0.02em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Host Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&display=swap https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap

## Palette

From Pedestal: bg #f7f7f7, surface #24201f, text #24201f, muted #676d64, accent #e8e6ce. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `hero-media-cycle`, **Scroll** `logo-docks-on-scroll`, **Hover** `underline-language`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Key** (hospitality, silver) https://key.co
- Doing: A vacation rental brand that sells hosted moments through lifestyle video and Caslon, and keeps its booking form always in reach.
- Why it feels made: The search form travels from hero to sticky bar without changing, and the gold rule and Caslon hold a consistent brochure rhythm.
- If imitated badly: Magenta on square boxes feels dated beside the Caslon and gold, and the interrupting modal undoes the calm.

**Nuro** (brand, gold) https://www.nuro.ai
- Doing: An autonomy company presented through large rounded media stages and calm, regular-weight sentences, letting vehicles and footage do the persuading.
- Why it feels made: Every page block shares one card anatomy, one 32px radius and one text inset, so wildly different imagery feels like one system. Exceptional photography and rendering stay uncluttered by type at a fixed 48px.
- If imitated badly: Rounded image cards with average stock photography read as a template; the system needs art-directed media and strict text insets.

**ECI** (ai, gold) https://www.eci.io/
- Doing: A climate-AI endowment that pairs a tightly tracked deck serif with rounded frames of Earth footage and a numbered, almost archival nav.
- Why it feels made: Serif, grotesk and mono each have one job, greens come from a tight three-step ramp, and every section repeats the same 32px gutters, 20px frames and black rule.
- If imitated badly: The tracked-in serif turns fussy below ~50px, and stock nature imagery without this restraint falls straight into greenwashing cliché.

## System choices

- Frames: `media.photography/uncropped-native-plate`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/tracked-caps-heading`
- Primary button: `button.primary/wide-tracked-caps`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/cut-letterform`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/hard-midline-panels`
- Load: `motion.load-sequence/hero-media-cycle`
- Scroll: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Hover: `motion.hover-state/underline-language`
- Phone menu: `nav.mobile-menu/curtain-reveal-list`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Showpiece: `motion.marquee/ticker-band-divider`
- Atmosphere: `atmosphere.image-backdrop/defocused-crushed-photo`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: corner-anchored (seen on Ne Geurra, Theatre Memory, La Table de Joakim)

*Feeling: labels on the corners of a poster.*

No bar. Items are pinned to the corners of the viewport and the page scrolls freely beneath. It turns the browser window into a frame. Per Appelgren sets two 12/600 caps words at 16px inset. MetaLab floats a 32px glass Menu pill, a centred wordmark and a live clock over video. Sutera sets a mono wordmark, a boxed line and local time. Use it for portfolios, studios and art. Avoid it on content-heavy pages, because text will run under the corners and collide.

Use 16 to 32px insets and 11 to 16px type. Check every corner against every section, since nothing protects contrast. Blend modes or a section-aware flip usually solve it.

### Hero: multi-field-booking-bar (seen on Airbnb, Hopper, Key)

- **Feels:** Practical and ready. You came here to book.
- **Use when:** Hotels, rentals, restaurants, clinics and any local finder. This is the strongest hero for hospitality that takes bookings.
- **Not when:** The visitor needs persuading first.
- **Recipe:** Key sets three 42px white selects at 224, 192 and 128px wide, 8px gaps, square corners, then a 90 by 42 accent search button, under a 72/1.3 weight 400 headline and a 14px tracked caps line, all on a dimmed dinner-table film. Airbnb uses an 848 by 64 white pill with three zones split by 1px dividers, a 12px bold label over a 14px grey value, and a 48px accent circle inset 8px. Thrivent uses one ZIP field with a red button. Real prefilled values beat placeholders.

```css
.hero{position:relative;height:100vh;min-height:680px;color:#fff;display:flex;flex-direction:column;align-items:center;text-align:center;isolation:isolate}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:rgb(0 0 0/.34)}
h1{margin-top:176px;font:400 72px/1.2 var(--font-display);letter-spacing:-.02em;color:#fff;max-width:760px}
.kicker{margin-top:14px;font:500 13px var(--font-text);letter-spacing:.16em;text-transform:uppercase}
/* the task is the hero: three real fields in one row, no second action */
form{display:flex;gap:8px;margin-top:32px}
label{height:44px;padding:0 12px;background:#fff;color:#222;display:flex;align-items:center;justify-content:space-between;font-size:15px}
button{height:44px;width:104px;border:0;background:var(--accent);color:#fff;font:600 13px var(--font-text);letter-spacing:.1em;text-transform:uppercase}
.terms{margin-top:16px;font-size:14px;color:rgb(255 255 255/.84)}
```

Under the bar, state the price and the cancellation terms in one line. Add a row of three plain facts at the base for a floor: the rating, how far it is, one honest quirk. Our smooth landscape left the lower half empty, whereas a busy real photo carries that area for free, so a picture of people at a table is worth more here than any layout decision.

### Faq: big-type-rows (seen on Rabbit, Telkom-OT, Lyra)

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

### Product card: bookable-listing-card (seen on Sonder, Almeida Theatre, Airbnb)

*Feeling: you could be there on Friday.*

For stays, classes, tickets and homes, where a place and a time matter more than an object. The anatomy changes by what is being booked. Airbnb uses square photos at radius 20, a frosted guest favourite pill, a heart, then two lines with the rate and rating. Sonder sets a 4:3 photo, a rating chip and `US $995 /night` opposite a 32px navy button. Outschool closes with three small stat tiles for grades, group size and price per class. Almeida uses a duotone poster and two 51px buttons, one to read and one to book. Key overlays type on the photo with a notched gold ribbon.

Always give the unit with the rate. Keep the picture true to the room. Local businesses should reach for this card first, since a dentist's appointment or a yoga class is bought the same way. Avoid it for goods that ship, where a place and a date mean nothing.

### Logo wall: opposing-double-marquee (seen on Customer.io, Lightspeed, Soundsensing)

*Feeling: a busy exchange.*

Two rows moving opposite ways, which turns a list into texture. Use it when the list is long and you want it to feel like a section. Customer.io runs two rows of 290 by 77 ruled white cells in a 1256px frame, with a 36px pale strip between them carrying the count, and some cells wear a small `case study +` chip. Soundsensing lets raw black logos sit 150px apart with no boxes, and fades them inside the container. Vayne keeps logos at 70px tall so that the client list becomes spectacle. Struck frames each row in nested brackets, tagged by a peach chip.

### Feature tabs: index-on-media (seen on Revolut, Stone Island, DJI)

*3 sites, quality 4.* The control lives on the image. Use for a full-bleed visual with a few alternatives: products, card types.

Recipe: Revolut sets three 42px pills bottom centre over a full-bleed image, the active one solid white and the rest with a 2px white outline. DJI puts a 14px list bottom left on a 30px rhythm with a small vertical tick. Stone Island uses three 352px columns with a plus and an index, and no bar at all.

Seen on Revolut, DJI, Stone Island.

### Team: mono-portrait-grid (seen on Linear About, Pentagram About, Snohetta People)

*Feeling: a serious firm, in one sitting.*

Greyscale portraits on a strict grid. Greyscale hides mismatched lighting, so this is the safe way to make a set out of different shoots. Linear uses four portraits about 269 by 320 at radius 4, with a 337px pitch, 15/500 name and 14px grey role. Pentagram sets 4:5 images with 8px gaps on stark black backdrops, a name and a city. Snohetta's six-column grid carries name, role, city, email and phone in small text, which is proof in itself. Russell & Stellar fills an empty seat with its brand mark on texture.

```css
.g{display:grid;grid-template-columns:repeat(4,1fr);gap:56px 68px}
.p img{width:100%;aspect-ratio:269/320;object-fit:cover;object-position:50% 30%;border-radius:4px;filter:grayscale(1) contrast(1.02) brightness(.86)}
.p b{display:block;margin-top:18px;font:500 15px/20px var(--font-text)}.p span{font-size:14px;line-height:20px;color:var(--ink-2)}
@media(max-width:860px){.g{grid-template-columns:1fr 1fr;gap:32px 16px}}
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

### Feature alternating: shifting-ratio-tiles (seen on VanMoof, Apptronik, UNITO)

*5 sites, quality 4.* A zigzag with the stiffness removed. Use with big images and short copy, in hardware, retail and interiors.

Recipe: pairs of tiles 16px apart, radius about 15. Row one 778 and 582px, row two 545 and 817. The text tile is a flat one-step grey, with 25px padding and a 32px heading plus 17/29 body, weighted to the bottom. Unito overlaps its rows by about 180px, so the next image starts before the last one ends.

Seen on Apptronik, Unito, xtrackr, VanMoof, Vrdnt Work. Suits light precision, photo-led, warm neutral.

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

### Section headings: tracked-caps-heading (seen on 1 Hotels, HAY, Xin Cheng Foods)

Engraved, hotel-like, quietly formal. Seen on 6 sites.

**Use it for:** Hospitality, retail, heritage and galleries.

**Avoid it for:** Long titles, and lowercase. Positive tracking belongs to capitals only.

**Recipe:** Modest heading in caps at 20-40px, tracking +0.04 to +0.1em, weight 400-600, in ink or a deep brand colour, left or centred. Reads as engraved, not shouted. Pair with a text link on the same baseline. Keep it under 30 characters.

<a id="emblem-opener"></a>

### Primary button: wide-tracked-caps (seen on Snow Peak, KAWARA MUSEUM - LIBRARY, Magram)

*Feeling: a label on a good box.*

A short word in a wide box. Snow Peak sets 282 by 55px, radius 0, 14px caps at 0.2em, and the width ignores the label. The empty space is what feels like print. KAWARA's espresso pill does the same at 300 by 58. Use it for fashion, hospitality, museums and outdoor goods, where a slow pace suits the product. Use it once per view. On a software page it reads as slow.

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Logo: cut-letterform (seen on Bakstad Construction, Concrete, Arkansas Museum of Fine Arts)

*Feeling: industrial or architectural, with a quiet edge.*

**Use:** Construction, museums, property, events. Brands where one expressive element sits inside neutral type. **Avoid:** Light typefaces. A cut needs heavy strokes to read.

Take a heavy display weight and make one clean cut. A thin horizontal slice through the upper letter band, at about 34% of cap height. Stencil gaps in every bowl of a heavy lowercase serif, shown at about 380px in the intro and about 160px on phone, with a single letter on a rail. A hairline diagonal slash taller than the letters, splitting two colours. Everything else on the page stays neutral.

**In the lab:** Worked at all sizes once the cut was at least 1px. The slice left a stray dash where it crossed the apex of an A, so choose the height by looking.

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: hard-midline-panels (seen on Acne Studios, Symbol Studio, Design Podcast (Focus State))

**Feel.** Fashion house. Severe, symmetrical, expensive.
**Use when** every section has a strong image or colour to fill a half. **Avoid** with text-led content.
**Recipe.** Acne Studios: the page divides exactly at x=720. Paired 720px panels butt with zero gutter. News column, newsletter band, footer columns and caption starts all land on 720, then 360px sub-lines at x=370 and x=1090. Focus State builds a whole site from 50% columns. Symbol Studio insets a white sheet 16px on a pale ground with a 1px vertical rule at the centre, and hangs text about 32px off the rule.

### Load: hero-media-cycle (seen on Nicole Heim Studio, TR Studio, Ideogram)

*Feeling: the page is alive from frame one.*

The hero is running when you arrive. Nicole Heim swaps each half of a split hero on its own beat, one side at a time. TR Studio holds an interior for about 5s, then crossfades over 1.5s, measured. The rule is that nothing else moves and type stays locked. Use it for studios, fashion, architecture, and any brand with deep photography. Independent beats on each panel are what make it feel edited rather than like a carousel. A pause control is required on anything that runs past 5s.

### Scroll: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Hover: underline-language (seen on Buildkite, Fidèle, Strava)

*Feeling: the oldest signal on the web.*

Links answer with an underline. HAY, Monocle and GitHub Docs do little else. Accel draws one with `scaleX(0)` to 1 in 0.3s. Use it for reading pages and for any link in running text, where colour alone fails people who cannot see the difference. The drawn version enters from the left and leaves to the right, and that directional exit is what makes it feel made.

```css
.link{position:relative}
.link::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:1px;background:currentColor;
  transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(0,0,.2,1)}
.link:hover::after{transform:scaleX(1);transform-origin:left}
```

### Phone menu: curtain-reveal-list (seen on Clevr Blends, JOBS)

*Feeling: a curtain drawn back.*

A curved edge sweeps down the screen, and the list fades in behind it. Clevr uses a cream sheet with a curved base, then 38px serif rows with circled arrows on an 80px pitch and one full-width button. JOBS uses a dark sheet, 44px serif links, a small red label and a red CTA. Use it for consumer and cultural brands with a warm voice. Build it with `clip-path: ellipse()` animating from above the screen, and swap to a plain fade under reduced motion.

```css
.sheet{position:fixed;inset:0;z-index:50;background:var(--bg);clip-path:ellipse(120% 0 at 50% 0);
  transition:clip-path .42s cubic-bezier(.76,0,.24,1)}
.open .sheet{clip-path:ellipse(160% 130% at 50% 0)}
@media(prefers-reduced-motion:reduce){.sheet{clip-path:none;opacity:0;transition:opacity .15s}.open .sheet{opacity:1}}
```

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Showpiece: ticker-band-divider (seen on Analogue, Headspace, Hibachi Guru)

*Feeling: a bold seam.*

A full-bleed band that doubles as a section break. Analogue uses a thin black strip for a release notice. Hibachi Guru cuts dark video from white page with an orange band. Headspace is the best of the set, a yellow strip whose paired googly eyes aim differently in each instance, so the separator carries the joke. Use it on bold, playful or local brands, at most twice on a page. The separator glyph is where the personality lives, so make one instead of using a dot.

### Atmosphere: defocused-crushed-photo (seen on Soundsensing, Lacoste Ace Breaker)

*Feeling: a room you sense but cannot quite see.*

**Use it for:** Industrial product shots and sports brands. **Avoid:** Soft fades into white above and below. Cut hard.

Full-bleed photo heavily blurred and graded to a near-black hue, about 10% visible detail, with grain. Reads as texture until you look. A sharp device or table sits on top with no scrim.

Soundsensing uses canvases about 945px tall of blurred plant-room photos, and white sections above and below cut hard with no fade. Lacoste crushes a court photo to a near-black green with about 10 percent visible detail, so text needs no scrim.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.