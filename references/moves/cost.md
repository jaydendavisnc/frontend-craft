# Say what it costs

22 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `bleeding-headline` (loud)

A heading so big it runs off the screen, cropped on purpose, with a picture butted hard against it. Scroll slides it sideways so the rest arrives. The page feels larger than the window.

- Build: `composition.md` 9.
- For an ordinary business: Works on a type-led page too. The word must still read.

## `numeral-made-of-picture` (loud)

One number as large as the window, 30 to 40vw, with a photograph showing through the digits. The number stops being data and becomes an object.

- Build: `composition.md` 4.
- For an ordinary business: A price, a founding year, a count of customers. Choose a dark or saturated picture.

## `odometer-answer`

A huge number that rolls digit by digit like a machine as you drag a slider tied to your own figure. The result is about you, and it changes as fast as you can move.

- Build: Rolling numerals in `components.md`.
- For an ordinary business: Interest earned, time saved, weight of flour, miles covered.

## `sentence-form`

A line of display type with blanks in it. The visitor completes the sentence in place, and it answers them.

- Build: A form that is a sentence in `components.md`.
- For an ordinary business: Any enquiry: I need a table for two on Friday.

## `items-orbit-and-the-price-answers` (loud)

A hand holds a phone rising from the lower centre of a dark hero, and five frosted tiles about 270px square, each with a cut-out product, ride a glowing violet arc that spans the full width. The tile at centre passes in front of the phone, larger and with a white label, while side tiles tilt up to about 25 degrees with faint tags. As each one arrives, the payment plan on the phone changes to suit that item; I read six different amounts across my frames. I checked the clock: it is a looping 9.17s video that keeps running at its own pace and does not follow scroll. The whole picture simply rises as you scroll on.

- Build: Pre-rendered loop, 9s, 1440x810, placed at top 60vh with a fade at its foot. HTML alternative: tiles on a circle of radius 120vw, centre below the fold, rotate 72 degrees per step, 1.8s each. On step, update the phone's plan text with a rolling-digit change. Tile 270px, radius 40px, background rgba(255,255,255,.12), backdrop-filter: blur(16px). Label pill white on the active tile only. Arc: a 2px stroke with a 60px blurred copy in violet.
- For an ordinary business: A bakery's cakes pass a counter display whose price changes; a dentist's treatments pass a monthly-cost card; a bank's goods pass a repayment figure.
- Depends on: Cut-out product images and either motion software or a careful JS sequence.

## `product-part-as-punctuation` (loud)

A macro of a black bike frame fills an inset plate, with tubes cutting diagonally across a white-to-black gradient. The two-character model name is 280px white grotesque at normal weight, from x=127 to x=455, and immediately after its last digit comes the bike's glowing red tail-light, between y=395 and y=500. The light reads as a third glyph, like a full stop. The first letter crosses the spokes and the digit's foot rests on the top tube, so the word feels set into the machine. The phone frame keeps the same pairing, so this was composed for both crops.

- Build: Crop the photo so one bright feature falls about 37% across and 49% down. h1{position:absolute;left:8.8vw;top:<feature top minus 4vw>;font-size:19.4vw;line-height:1;font-weight:400;color:#fff}. Keep a gap of about 3vw between the last glyph and the feature. Size type and image in vw and fix object-position so the two stay locked. Serve a separate portrait crop on phones that keeps the pair intact.
- For an ordinary business: A bank sets a large 0% with a coin as the next character. A bakery sets a price with a round bun as the full stop.
- Depends on: A product with one saturated or bright feature and quiet space to its left. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `chosen-item-steps-out-and-the-room-blurs`

Hovering a sleeve lifts it off the shelf by about 4% of viewport height, swells it slightly and shows two small pills on its lower edge, while neighbours stay put. Clicking sends it to the centre of the screen at about 28% of viewport width and 46% of its height, and everything else on the wall goes soft with a strong blur. A 24px title and a one-sentence line appear at far left, level with the shelf, and one black pill sits under the sleeve. The sleeve also tilts a little toward the pointer. The URL stayed the same, and the shelf is still there behind it, so you never feel you have left.

- Build: Measure the item with getBoundingClientRect and use a FLIP transform to fly it to centre over 600ms cubic-bezier(.2,.8,.2,1), or use the View Transitions API with one view-transition-name. Background layer: filter blur(10px) over 400ms, scale 1.02 so edges do not show. Pointer tilt: rotateY((x-.5)*10deg) rotateX((.5-y)*8deg) with a lerp of .1. Close on Esc or a click outside, restoring focus to the item. Replace blur with an opacity drop under prefers-reduced-motion.
- For an ordinary business: Any list of things: a cake from a shop's range, a mortgage product, a treatment. The item comes forward and the rest of the shop stays visible behind it.
- Depends on: Items with good cover images; a blurred ground that stays recognisable.

## `copy-in-the-cast-shadow`

The buy block is set in the darkest part of the shadow, at about y=1240 to y=1370, centred, in 40px white capitals of a rounded techno face: a slogan, a price and an outlined button. No panel or scrim is needed because the shadow gives full contrast. Its soft edges frame the 315px wide block against the bright floor on both sides, about 95px clear either side. The block looks lit by the same scene, because the dark behind it is real.

- Build: Absolute at left:50%;transform:translateX(-50%);top:<y in image>. font-size:2.755vw (39.7px at 1440);line-height:1.11;text-transform:uppercase;color:#fff. Button border:1px solid #fff;border-radius:4px;padding:0 40px. Use vw for type so the block stays inside the shadow when the image scales.
- For an ordinary business: A bakery sets a price in the shadow of a rolling pin. A bank sets a rate in the shadow of a doorway.
- Depends on: A shot with a dense, wide shadow. Low window light on a phone photo can give this.

## `drag-the-cover-over-to-read-the-back`

Dragging the centred sleeve turns it over like a record. The back carries the same art with noise dissolved through it, a left-aligned list of about nine contents lines in 18px, a small edition mark at lower left and a QR code at lower right, like real packaging. A small white pill reading Flip follows the pointer around the sleeve. Text and art are slightly tilted with the object, so the list reads as printed on it and not as an overlay.

- Build: Card: position:relative, transform-style:preserve-3d, transition none during drag. Faces: position:absolute, inset:0, backface-visibility:hidden; back has rotateY(180deg). Pointer drag: angle = start + dx*.5. On release, snap to the nearest multiple of 180 with a spring (cubic-bezier(.3,1.4,.5,1), 500ms). Plain click and Enter also flip. Label pill: position:fixed, follows pointer with lerp .2, hidden on touch. Make both faces real text, and aria-hidden the face that is turned away.
- For an ordinary business: The back of the packet is where honest detail goes: a loaf's ingredients and allergens, an account's fees, a treatment's steps and price. Front sells, back informs.
- Depends on: A square or card-shaped object with something real to print on its back.

## `four-tiles-four-media`

Four 335x388px tiles with radii around 64px sit in a row, each 10px higher than the last, tops at 234, 224, 214 and 203px, like a gentle rising line; the stair may be scroll-driven. Each uses a different medium: a huge white number pill on flat green, a triple glyph built from black flip-dot blocks on white, a photographed still life, and a blurred green texture with a single notification card. The number showed three values across my frames, so the tile is a counting video, and each tile has a 20px pause button. Captions at 20px sit below and follow the stair.

- Build: Flex, gap 20px; tile aspect 335/388, radius 64px, overflow hidden; apply margin-top: calc(var(--i) * -10px) or a small per-tile parallax. Tile 1: flat accent with a white pill at 80% width, 80px numerals. Tile 2: glyph on a 12px block grid, CSS grid or SVG. Tile 3: studio still life, cover. Tile 4: a heavily blurred photo with one crisp card. Caption 20px/1.25 below. Add a visible pause for any motion over 5s.
- For an ordinary business: A bakery: a big price, a stitched pattern, a photo of the box, a text from the shop saying it is ready.
- Depends on: Four small assets in truly different media.

## `name-and-price-on-one-horizon`

Three soft-knit figures stand shoulder to shoulder across the middle 60% of the frame. On one horizontal at 50% of the viewport, the product name sits at the far left in 44px from x=33 to x=363, crossing the neck of the left figure by about 130px. At the far right on the same line sit a 14px deposit price and a dark pill button. Nothing else is on screen except the nav, so the words form a horizon running through the group.

- Build: .hero{position:relative;height:100vh} .horizon{position:absolute;left:32px;right:32px;top:50%;transform:translateY(-50%);display:flex;justify-content:space-between;align-items:center}. Left: h1 as a two-tone line, 44px. Right: 14px price and a 36px tall pill. Centre the subject group so its neck or waist line meets that horizon.
- For an ordinary business: A bakery shows a shelf of three loaves with the name left and price and order button right, on one line through the middle of the loaves.
- Depends on: A group of subjects with a clear horizontal band at mid-height, and very few words.

## `offer-printed-on-a-real-prop`

One tile is a studio photo of a green tote bag on a yellow-green stool against a concrete wall, with pineapple leaves sticking out of the top. The offer's words are printed on the bag in white, slightly uneven with the fabric, and the domain appears on a small patch. There is no overlay type at all; the message exists as a physical object in the set. The bag's green matches the brand ground of the neighbouring tile.

- Build: Keep the image 1:1.15, cover, no overlay. Shoot on a neutral wall with one hard side light, prop in the accent colour, and one odd natural element for scale and wit. Text on the prop only, about 6% of the frame height.
- For an ordinary business: A bakery prints the offer on a paper bag, a dentist on a toothbrush sleeve, a bank on a deposit envelope, and shoots it on a kitchen table.
- Depends on: A physical prop and an hour with a camera. AI mock-ups risk looking fake here.

## `product-list-set-as-a-paragraph`

Where a template would place a grid of product cards, 17 product names run as one centred paragraph of 48px light serif, five lines deep, spanning about 82% of the width on white at 86px line spacing. Small square blue-grey points about 6px wide separate the names, with wide gaps either side. Three names carry a tiny black tag, 26px tall, set immediately after the word and holding the current rate or offer in 12px white sans. The block has no icons, no boxes and no headline of its own; the catalogue is the display type.

- Build: <p> with text-align: center; font: 300 48px/86px serif; max-width 1200px; tight negative tracking (about -0.02em, estimated). Names as inline links. Separator ::after inline-block 6x6px #A9B4C2, margin 0 22px, vertical-align: middle. Tag inline-block, vertical-align: .2em, margin-left 8px, padding 7px 8px, radius 6px, background #000, colour #fff, 12px/12px sans. Keep rates in the tags so the paragraph stays a list of words.
- For an ordinary business: A bakery sets all of today's bakes as one big paragraph with prices as tiny tags; a dentist lists treatments with 'from' prices; a bank lists accounts with rates, replacing the ruled rate table.
- Depends on: A serif with real presence at light weight, and a catalogue of short names.

## `solid-bar-wipes-off-each-line`

Every heading and paragraph arrives under solid bars. Each line is covered by a rectangle of exactly that line's height and text width, and the rectangle's left edge travels right, uncovering finished letters behind it. In the frame caught mid-reveal, a 93px heading has an 85px block left on its last word, ending exactly at the end of the word, while the paragraph below has three bars of 112, 366 and 205px, each stopping at its line's end. The bar colour follows the section: neon on olive and black, dark grey on off-white. Lines run at once but slightly offset, so a paragraph reads for a moment as a stack of bars of different lengths.

- Build: Split text into lines with a small splitter; each line display:block; width:fit-content; position:relative. Line ::after: position:absolute; inset:0; background:var(--accent); transform-origin:right; transform:scaleX(1). Add .in via IntersectionObserver at threshold .6 and transition transform to scaleX(0) over 640ms cubic-bezier(.65,0,.35,1). Stagger lines by 70ms. The bar's right end stays fixed on the line end while its left edge moves, which is what makes it read as a wipe. Set --accent per section. Re-split on resize, and show text plainly under prefers-reduced-motion or if JS fails.
- For an ordinary business: A credit union or a clinic can use it in one brand colour on headings only, and it reads as someone highlighting the important line with a marker.
- Depends on: Nothing more than a strong accent; must be reserved so it does not delay reading (under 700ms).

## `specimen-tagged-with-leader-lines`

A single rough crystal about 40% of viewport height floats at centre in empty grey haze, with something frozen inside it. Around it sit three small groups of 14px white mono text, a title top left, a reading top right and a date plus call to action bottom right, each joined to the object by a 1px line that ends on the crystal itself. Faint dotted grid points cover the whole frame. As you scroll, the object rises and turns and the labels travel with it, staying attached.

- Build: Stage relative, object centred. Labels absolutely positioned at offsets from the object box; SVG overlay with polyline elements from label underline to anchor points on the object, stroke white, 1px. Store anchors as percentages of the image box. On scroll, move object and labels with one shared transform so they stay together. Mono type 13 to 14px, uppercase, line-height 1.2. Lines draw on with stroke-dashoffset over 500ms, then the label text resolves. Group labels as a dl for screen readers.
- For an ordinary business: A loaf labelled with hydration, proof time and crust temperature; a crown labelled with material and lifespan; a debit card labelled with its real fee numbers. Honest specifics become the decoration.
- Depends on: One object with a strong silhouette on a clean ground, and real facts worth labelling.

## `switch-the-whole-site-to-plain-text`

A small black pill fixed at bottom centre holds two mono words, the active one in orange. Clicking the second word swaps the entire page for a 640px centred column of orange monospace text on black, topped by a logo built from pixel blocks, a row of slash-prefixed links and key-value rows joined by dot leaders. The page describes itself as a plain-text mirror for agents, crawlers and people who prefer it raw. The pill stays in the same place with the colours swapped, so getting back is obvious. The switch turns a 3D showpiece into a text file in one click.

- Build: Fixed pill: bottom 24px, left 50%, translateX(-50%), padding 8px 14px, 13px mono, two buttons with aria-pressed. Render the plain view as server HTML at its own URL so it works with no JS, and swap on click with a 200ms crossfade. Column max-width 640px, mono 14px, line-height 1.4. Rows: display:grid; grid-template-columns:14ch 1fr with dots written as characters. Remember the choice in try/catch-wrapped localStorage. Do not make people choose; the rich view is the default.
- For an ordinary business: This suits plain businesses better than studios: a bank's 'just the rates', a bakery's 'just the menu and prices', a clinic's text view for screen readers, older patients and AI assistants.
- Depends on: Content written so it stands alone as text, and a mono face.

## `the-object-wears-the-rate`

A glossy 3D pig in magenta and orange, about 290px wide, floats on black at the right of the section. The savings rate sits on its flank as a dark glass pill 160x90px with 40px text, overlapping its rear by about a third and hanging off it. The left column repeats the figure in a 64px heading. The rate is attached to an object in space rather than listed in a table.

- Build: Grid 1.2fr 1fr on a black ground. Cut-out render 290px wide with a soft colour bloom behind it (filter: blur(60px), opacity .35). Pill absolute, right -30px, bottom 18%; 160x90px; radius 999px; background linear-gradient(135deg, rgba(40,40,44,.9), rgba(14,70,60,.9)); 1px border rgba(255,255,255,.16); 40px/1 weight 600.
- For an ordinary business: A bakery pins the price on the loaf, a dentist pins a monthly plan on a toothbrush. One number, one object.
- Depends on: A simple cut-out object, either a 3D render or a clean product photo on transparency.

## `cost-bars`

Cost difference shown as length: rival a full-width bar with its price, yours a 12px dot or a short bar. 12 to 32px bar height, 22px tabular prices right-aligned, a row of shared assumptions above and small-print method below. Use only with honest, sourced numbers.

- Build: Read `references/elements/section-conversion.md` lines 601 to 621.

## `enquiry-spec-block`

No price, no cart. Per piece: 14px description, then a 'Dimensions' label indented about 60px with figures beneath. Set in an index column beside a tall photograph, one enquiry link at the end. Fits antiques, furniture, architecture and made-to-order, where the conversation is the sale.

- Build: Read `references/elements/commerce.md` lines 1207 to 1214.

## `material-story-render`

One material truth, lit for it: ribbed knit under soft even light with no cast shadow, base fading into the page; or matte black hardware where labels supply all colour, tumbling 30-40 degrees; or a glossy floor with a long reflection. UI may sit on the reflection.

- Build: Read `references/elements/media.md` lines 1551 to 1560.

## `single-plan-leaders`

One plan as a 416px card under a Yearly/Monthly pill: 16px item left, dotted leader, right-aligned 13px mono caps status, either included or a dated promise. Full-width 48px button below. Reads like a receipt, so the honest 'coming soon' line builds trust.

- Build: Read `references/elements/section-conversion.md` lines 318 to 325.

## `usage-calculator`

Price set by the reader: slider with 1M, 10M and 50M ticks or an inline select per plan, boxed value, per-unit rate, and a bar reading 'Estimated total' with a button. Prices update live with no layout shift. For metered products where a flat tier table would mislead.

- Build: Read `references/elements/section-conversion.md` lines 363 to 370.
