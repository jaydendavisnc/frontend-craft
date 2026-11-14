# Say where

28 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `columns-take-turns` (loud)

Four to six tall pictures side by side at full height, each a sliver with a name running up its edge. The one you hover or tap swells to take most of the row and its caption slides in.

- Build: `composition.md` 7.
- For an ordinary business: People, branches, products or chapters.

## `day-you-scrub`

A 24-hour ruler with a thin playhead you drag. As the hour changes, the sentence below changes, and a picture can change with it.

- Build: A day you scrub in `components.md`.
- For an ordinary business: What happens at the bakery at 4am, the clinic at noon, the depot at dusk.

## `speed-aware-marquee`

One line of huge type crossing the screen, slow at rest and faster as you scroll, as though attached to your hand. Named places or trades rather than logos.

- Build: Speed-aware type in `motion/score.md`.
- For an ordinary business: Towns served, trades served, ingredients.

## `address-set-as-a-typographic-composition` (loud)

The footer's contact details fill the bottom third of the screen in three lines of a condensed high-contrast serif at about 90px, justified by eye so the lines run about 70% of viewport width. Between the words sit custom ornaments the same height as the type: a diamond holding a letter, map coordinates stacked in two bold 22px rows between small arrows, a quatrefoil, boxed and ringed letters, a curved double arrow, a phone number built as a ruled fraction-like table, and a long looping swash standing in for the at sign. Every piece of plain data has become a small drawing. A boring address is the best-looking thing on the page.

- Build: Set three lines at font-size clamp(40px,6.2vw,90px), line-height 1.1, in a condensed serif. Inline ornaments as SVGs with height 1em and vertical-align -.12em, or as ligatures in a small custom font. Stacked coordinates: inline-grid of two rows at .24em bold, between tiny arrow glyphs. Phone: inline-grid with 1px borders, area code in one cell and the two number groups stacked in the next. Keep the real text available: wrap the block in an address element, aria-hidden the ornaments, and keep tel: and mailto: links on the real values. Break by hand at each width.
- For an ordinary business: This is the most directly useful move for a local business. A bakery's address, hours and phone number, drawn into one big composition with a wheat ear and a clock, becomes the poster for the shop.
- Depends on: A distinctive display serif; 6 to 8 small drawn ornaments; custom font LocomotiveNew plus Helvetica Now on the site, with Lenis and two small canvases.

## `headline-standing-in-a-rendered-nave` (loud)

A dark CG hall of fluted glass columns recedes to a lit end wall at the frame's centre, filling 100% of the viewport as an 8.2s looping video. A white heavy serif at 114px on 100px leading stands on the same axis in two centred lines about 690px wide, with a sentence of about 20px below it landing just above the glowing wall. The columns rise on both sides and frame the words like a nave, so the wall reads as the room's only light source. Nothing is laid over the type; the image is the room and the heading is the thing standing in it.

- Build: Video full-bleed, 100vh, object-fit: cover, autoplay muted loop. Vanishing point at 50% across, 72% down. Headline centre at 45% height, font-size clamp(56px, 8vw, 114px), line-height .88, weight 700, tracking -0.004em. Edge vignette plus a bottom 20% fade to #000 so the next section begins black. Use tight leading so the two lines lock into one block.
- For an ordinary business: A bank shoots its banking hall dead-centre at dusk, a clinic the corridor to the lit treatment room, a bakery the view down the racks to the lit oven.
- Depends on: A symmetric one-point-perspective image with a lit centre and a heavy serif that survives over it. CG gives control; a real corridor also works.

## `listing-set-on-the-facade` (loud)

A full-bleed photo of a real brick theatre with a red awning fills about 88% of the viewport height. Its lower third carries the whole listing directly on the brickwork: a 96px two-line title at the left, small stacked credits, a synopsis in 14px white, and a solid white ticket button at the far right. The bottom of each block lines up along one band. Because the building is the actual venue, the picture is doing the job of the address.

- Build: section{position:relative;height:88vh} img{width:100%;height:100%;object-fit:cover}. .band{position:absolute;left:22px;right:22px;bottom:20px;display:grid;grid-template-columns:320px 160px 1fr auto;gap:24px;align-items:end;color:#fff}. h2 96px/.87, letter-spacing:-.034em. Credits 11px mono. Synopsis 14px/1.4, max-width 56ch. Darken only the lower third: linear-gradient(transparent 55%,rgba(0,0,0,.45)).
- For an ordinary business: A dentist uses a straight-on photo of the shopfront and sets hours, phone number and a booking button across the pavement in the picture.
- Depends on: A real photo of the actual place with a busy but dark lower third.

## `objects-in-the-picture-are-the-menu` (loud)

Pointing at the tall wall of shelves in the room fills that whole area with a fine diagonal hatch and a thin outline, following the perspective of the wall, and a small 13px label in square brackets appears at the cursor offering to go to the work section. The image takes the full viewport below a thin 36px nav. Nothing in the picture looks like a button until you move over it. The ordinary nav stays at the top, so this is a second, playful route rather than the only one.

- Build: Full-bleed img with an absolutely positioned SVG overlay in the same viewBox. One polygon per zone, traced by hand on the perspective of each object, fill transparent, wrapped in an a element. On hover or focus: fill url(#hatch) where the pattern is a 6x6 tile rotated 45deg with a 1px line at 35% white, stroke white at 1px, transition 150ms. Label: 13px mono in brackets, position:fixed, following the pointer with an 8px offset; show it at the zone centre on keyboard focus. Keep every link in a real nav as well, and give each polygon an aria-label. On touch, show the hatch briefly on load so people learn it is tappable.
- For an ordinary business: A photo of a bakery counter where the bread shelf, the till and the oven each lead somewhere; a dentist's reception where the desk means booking and the door means treatments.
- Depends on: One photo with several distinct objects. No 3D needed; hand-traced polygons only.

## `word-sandwiched-in-the-picture` (loud)

A 360px black-weight navy word sits across a sunny full-bleed house photo, from about x=210 to x=1255 and y=126 to y=486. Sky and cloud are behind the letters while the roofline, the dormer and the branches of a yellow tree pass in front. The first letter is half eaten by the gable and leaves, and the foot of the last letter is cut by the tree on the right. Nothing else is on screen except a 13px scroll hint at top centre. The word becomes part of the landscape, about as tall as the house.

- Build: Two PNGs at 1440x1204: back (full photo) and front (same photo with the sky masked out, roof and foliage kept, leaves feathered by hand). .hero{position:relative;height:100vh;overflow:hidden} back, h1 and front all absolute inset:0, front on top and aria-hidden, both images object-fit:cover. h1{text-align:center;top:14vh;font-weight:900;font-size:25vw;line-height:1}, colour a deep navy sampled from the photo's shadows. Serve a tighter crop on phones.
- For an ordinary business: A bakery sets its name behind a row of loaves on a shelf. A bank sets its town's name behind the real skyline. Free subject cut-out tools make the mask a ten-minute job.
- Depends on: A photo with clean sky and a hard skyline, a short heavy word, and a careful mask. Engine seen: Framer site build. No global GSAP, no Lenis, no WebGL.

## `wordmark-at-building-scale` (loud)

Between the project grid and the drawing, the company name runs as one line of 400px heavy navy type, 3610px long per copy, with three copies in a row, cropped by both edges of the viewport. Only about six letters fit at once, so you read the name over time. It keeps drifting left when idle, at about 74px per second as measured, and moves much faster during scrolling, covering 424px over 200px of scroll on the fastest stretch. The link between scroll speed and drift is inferred from those measurements.

- Build: h2{font-weight:900;font-size:400px;line-height:1;white-space:nowrap;will-change:transform}, three copies in a flex row. rAF loop: x -= dt*.074 + Math.abs(scrollDelta)*2; if x < -copyWidth then x += copyWidth. Use once per page only. Reduced motion: static, single copy.
- For an ordinary business: A bakery's one word at 30vw crosses slowly between two sections. Use it once, as a pause.
- Depends on: A short strong name and a heavy typeface.

## `caption-scale-headlines`

On a page with a 1391px film and 915px photographs, the largest live text anywhere is 31px, a light serif used once. Section titles are 19.6 to 24px and links are 13px, on warm cream. No page text overlaps an image, and every caption sits in the margin under its picture like a museum label. The ratio of picture width to title size is about 45 to 1.

- Build: Cap the scale at 31 / 24 / 19.6 / 14 / 13px. Top size weight 300, normal tracking. Warm cream ground, about #f3eee7. Text always under the image, never on it. Images keep full column width. Hard rule: no live text above about 2.2vw.
- For an ordinary business: A private dentist or a law firm uses large honest photographs of the room and the people with 20px captions, which reads as confidence and not as shouting.
- Depends on: Photography strong enough to carry all the page's attention. With weak photos this reads as empty.

## `corner-clock-walks-through-the-cities`

In the top right corner, a tiny 12px label shows a three-letter place code and that place's local time, and it keeps changing by itself: across my frames it showed codes such as LDN, CDG, TST, YYJ, NYC, SFO and FRA, each with a different time. It sits beside a small round contact icon and is easy to miss. It gives a static single-screen page a faint pulse and quietly says the company works around the world, without a word of marketing copy.

- Build: A list of { code, timeZone } pairs. Every 2500ms take the next pair and format with Intl.DateTimeFormat('en', { hour:'numeric', minute:'2-digit', timeZone }). Swap with a 240ms vertical roll inside an overflow:hidden line, height 1.2em. 12px, tabular-nums. Add aria-hidden and keep a real list of locations elsewhere. Stop the rolling under prefers-reduced-motion and show one value.
- For an ordinary business: 'Ovens on since 4:12', 'Open now, closes 6', 'Next appointment Tuesday 9:30', 'Phone lines staffed'. Real status from the business, in tiny type, says someone is home.
- Depends on: A genuine live fact. Only a few lines of JS.

## `hand-drawing-among-the-photos`

After a run of photographs the page switches register to a hand-inked axonometric drawing of the development. Neighbouring houses are left as bare outlines while the new buildings and trees carry blue, grey and green washes. It runs about 85% of the viewport width on the same paper ground with no frame, so it sits like a plan on a drafting table. The only words are a 13px caption near its top left. It shows how the plots connect, which no photograph could.

- Build: Transparent PNG or SVG. img{display:block;width:85vw;margin:0 auto} on a warm paper ground, with mix-blend-mode:multiply if the scan has a white ground. Caption absolute at top left, 13px. Colour only the subject and leave the surroundings as line.
- For an ordinary business: A bakery draws a cutaway of its oven. A dentist draws a plan of the practice showing the step-free route. Colour only what matters.
- Depends on: One real drawing. A pen and a scan are enough; the hand is the point.

## `list-row-grows-its-own-thumbnail`

The work index is a stack of centred names in a 110px condensed serif, each in a 150px row between thin black rules running the whole content width. With the pointer on a row, a small image about 167x114px appears inline straight after the name, at the same height as the letters, and the name shifts left to keep the pair centred. It works on the row under a still pointer while scrolling too, so names light up as they pass under it. There is no floating preview chasing the cursor and no card, just a picture joining the sentence.

- Build: Each row: a link, display:flex; justify-content:center; align-items:center; border-bottom:1px solid currentColor; height 150px; font-size clamp(44px,7.6vw,110px). Thumb: inline img with width 0, height .95em, object-fit:cover, margin-left 0; on hover or focus width 1.5em, margin-left .15em, transition 380ms cubic-bezier(.2,.8,.2,1). Animating width makes the centred name slide by itself. Lazy-load thumbs. Touch: show the thumb on the row nearest the centre of the screen.
- For an ordinary business: A dentist's treatment list, a cafe's menu or a bank's branch list set big with a tiny photo joining each name. It turns a plain list into the main feature for almost no work.
- Depends on: One small image per row and short names. A big condensed face keeps long names on one line.

## `live-conditions-tile`

At the bottom left of the hero film sits a translucent sage tile 400x220px, flush to the hero's left and bottom edges. Its left half holds a drawn sun, the current temperature at about 34px and a link to watch the garden live. Its right half is a booking menu of six plain links. The number was 14 degrees in one run of mine and 15 in another minutes later, so the hero reports a fact about today and not a slogan.

- Build: .hero{position:relative} .tile{position:absolute;left:0;bottom:0;width:400px;height:220px;display:grid;grid-template-columns:1fr 1fr;background:rgba(108,124,115,.85);color:#fff}. Fetch the value from a free source at load, such as Open-Meteo with no key, and hide the number on failure rather than show a stale one. The link goes to a webcam or a live status page.
- For an ordinary business: A bakery shows 'sourdough out at 7:40, 12 left'. A dentist shows the next free appointment. A bank branch shows the current queue time.
- Depends on: One number that is really true right now, and a fallback for when it is unavailable. Engines seen: none, plain video.

## `logos-as-pebbles-around-a-search-field`

On a soft violet-to-teal panel 1320px wide, about 14 merchant logos appear as white circles from about 50 to 90px, scattered at irregular positions above and below a centred heading and a wide white search field. They look like pebbles around a pool. Sizes and distances vary with no grid. I saw no drift between frames, so it may be still in place.

- Build: Panel position: relative, height 780px, radius 28px. Logos absolute from a hand-placed list of 14 positions; widths 50 to 90px, white circle, box-shadow 0 6px 20px rgba(0,0,0,.2). Heading and a 780x56px pill search field centred. Hand-place them: random scatter looks random.
- For an ordinary business: A bank's accepted partners around a branch finder; a bakery's stockists around a postcode box.
- Depends on: Round marks, and something to search or do at the centre.

## `private-glyph-per-entry`

Every project in the index has a 38px black square holding a tiny white pictogram drawn for that one building, its silhouette or plan reduced to a mark. The square sits above a right-aligned caption in the left gutter, with the project name in about 13px and the location in about 11px grey capitals. There were 263 of these icons in the DOM at load. They work like a private alphabet, and the column of black squares gives the long page its beat.

- Build: For each item, a 52x52 SVG, white on black, shown at 38x38. Caption block: text-align:right, name 13px, place 11px uppercase #888, sitting in the gutter 11px left of the image. Generate glyphs by tracing each subject's silhouette or plan to a single shape inside the square.
- For an ordinary business: A bakery draws one tiny stamp per loaf from its slash pattern and uses it on the bag too. A dentist draws one per treatment.
- Depends on: A list of real things, and an afternoon per dozen to draw them. Engine seen: Lenis smooth scroll. No global GSAP, no WebGL, no video.

## `scene-fogs-out-next-rises-from-it`

Instead of a section boundary, the landscape dissolves into pale fog: the mountains and dome lose contrast, red and cyan fringes appear on their edges, and the frame goes almost flat grey-blue. While the old scene is still faintly visible near the top, the next object rises from the bottom edge inside the same fog. By the next stop only that object remains, floating in empty haze at about 55% of viewport height. Ground colour barely changes throughout, so the two scenes feel like one place.

- Build: Stage sticky 100vh, section 250vh. Layer A photo: filter blur(0 to 16px) and opacity 1 to 0 over p .1 to .55. Fog layer: full-size, background the page ground colour with a soft noise PNG, opacity 0 to .9 over p .05 to .45. Layer B cut-out: translateY(70vh to 0) over p .3 to .8, filter blur(10px to 0), under the fog until p .6 and fog then fades to .2. Chromatic fringe (optional): duplicate layer A twice with mix-blend-mode screen, tinted red and cyan, offset by ±calc(var(--p)*6px).
- For an ordinary business: A bakery can go from the steamy kitchen to a single loaf inside actual steam; a spa or dentist can use a soft white wash to move between rooms without a hard section edge.
- Depends on: Two subjects that share a tonal range; a cut-out for the incoming subject.

## `unequal-diptych-day-and-night`

Two pictures stand side by side at 915x570 and 439x577, a ratio of about 2:1, 37px apart with tops within 4px of each other. The left one is a wide daylight colonnade reflected in a pool, and the right one is a slim night scene of a lit globe on dark water: same family, opposite mood. Under each sits a tiny label, a 19.6px serif title, two lines of 14px copy and a text link. The same split returns lower on the page at y=2791, so it works as the page's rhythm and not a one-off.

- Build: display:grid;grid-template-columns:2.08fr 1fr;gap:37px;padding:0 25px. Both images height:570px;object-fit:cover. Under each: label 10px tracked caps, h3 20px/1.3 serif weight 400, p 14px/1.5, underlined link 13px. Choose the pair by contrast of light: the wide one is day, the narrow one is night or a detail.
- For an ordinary business: A bakery pairs a wide daylight shot of the shop with a narrow shot of the oven glowing at 4am.
- Depends on: Two photos of the same subject matter with opposite light.

## `pinned-photo-dissolve` (loud)

One full-height frame pins while photographs cross-dissolve at the same framing, with a 12px caption block holding bottom-left. Nothing slides. Chapters change by dissolve rather than by page movement, so a long story reads as a slow film. Three to five stills of matching exposure.

- Build: Read `references/elements/motion.md` lines 800 to 807.

## `scrimless-campaign-plate` (loud)

Edge-to-edge or 20-32px radius panel. Subject composed to one side, copy on the open dark area at the page gutter, no scrim. Zone luminance spread under 0.04; white contrast at least 7 for body, 3.5 for 30px-plus display. If the zone fails, change the frame.

- Build: Read `references/elements/media.md` lines 307 to 334.

## `viewport-chapters` (loud)

Consecutive 100vh sections, no dividers. A 430px text block sits in the empty part of each photo at a 100px margin, moving per shot: 48px heading, three lines of 16px, one ghost button. Needs at least three strong images. Flat colour scenes around one object also work.

- Build: Read `references/elements/section-features.md` lines 536 to 543.

## `centred-menu-column`

One centred column about 420-700px on warm paper: 16px tracked caps name, 17px italic ingredients beneath, price inline or on its own line, script or caps section heads, a small OR between choices. Reads as the printed card on the table. For fine dining and prix fixe.

- Build: Read `references/elements/section-info.md` lines 1261 to 1282.

## `final-image-footer`

No separate block. The last photo or film runs to the page bottom and the footer is one row laid inside it: 12px tracked links, a round back-to-top, copyright right. The page ends on a picture. Needs a dark, quiet lower edge in the image, or a scrim drawn from it.

- Build: Read `references/elements/section-info.md` lines 510 to 517.

## `focus-pull`

Hero photo starts at 24-40px blur over a colour sampled from it and sharpens over 1-2s, cubic-bezier(.16,1,.3,1), while copy is already readable or fades in with it. Works like a lens racking, and it makes a slow image load look deliberate.

- Build: Read `references/elements/motion.md` lines 439 to 446.

## `inked-map`

Regions in 2px ink outline on a pale blob, one highlighted with 8% fill, white card with region name and price. Or a dark map with numbered clusters and a search overlay, radius 12.

- Build: Read `references/elements/product.md` lines 1790 to 1799.

## `map-as-figure`

The map is a drawn figure, not an embed: pale land on one tone, radius 32, flat pins, and 1px lines rising to 24px city labels at staggered heights, with 'HQ' as a small outline chip and upcoming sites in grey. Say something a Google embed cannot.

- Build: Read `references/elements/section-info.md` lines 1575 to 1582.

## `one-light-one-grade`

Fix one time of day, one light direction, one colour bias across every subject, so warm-cool spread stays under 10 even if brightness swings. Crop to two ratios at most. Lift blacks 7-9%, hold highlights under 96%, saturation about 70%. Dusk amber for drama, matte daylight for calm.

- Build: Read `references/elements/media.md` lines 196 to 224.

## `stipple-engraving`

One or two inks. Stippled plates about 600px with edges dissolving by grain into the ground, unframed, one per product; or 100px ink heads, colour kept in nearby labels. Same grain and palette across the series. Reuse as crest, avatar or watermark. Use real or public-domain sources.

- Build: Read `references/elements/media.md` lines 794 to 803.
