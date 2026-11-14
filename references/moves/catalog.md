# Let them browse

40 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `columns-take-turns` (loud)

Four to six tall pictures side by side at full height, each a sliver with a name running up its edge. The one you hover or tap swells to take most of the row and its caption slides in.

- Build: `composition.md` 7.
- For an ordinary business: People, branches, products or chapters.

## `image-follows-the-list`

A list set huge, 5 to 7vw, on a plain ground. Hover a row and a photograph opens beside the cursor and trails it with a little lag while other rows fade back. Plain words at rest, a gallery under the hand.

- Build: `composition.md` 6.
- For an ordinary business: Services, past jobs, news, products. Give phones a small picture in each row.

## `catalogue-as-a-3d-stack` (loud)

The home page is a full-viewport three.js canvas (r151) on a dark brown ground: each title is a 3D mesh with its printed jacket wrapped on spine and edges, and the books form one tower about 50% of the width. At 1.5s the tower is seen small with 13 spines tapering away; by 3s the view has closed in until four books fill the screen, 96 to 135px thick with 33 to 57px gaps. Scrolling descends the tower for about 3,500px with the spines seen in perspective. Hovering grew the book under the pointer by about 2%, and clicking a spine opens that book. The titles are readable only as printing on the objects.

- Build: Fixed canvas 100vw by 100vh, WebGL. BoxGeometry per book with six textures: spine, covers, page block. Camera x 0, y from scroll with damping 0.1, slight downward tilt. Book spacing 1.4 times thickness. On hover raycast and scale to 1.02. Spacer element 4000px tall to give the scroll. Keep an HTML list of titles for screen readers. Ground #231B1A.
- For an ordinary business: A bakery stacks its loaves or cake tins, a bank stacks its passbooks through the decades, an archive its boxes. Works with any small set of objects.
- Depends on: Scans of real products, WebGL, and an accessible fallback list.

## `items-orbit-and-the-price-answers` (loud)

A hand holds a phone rising from the lower centre of a dark hero, and five frosted tiles about 270px square, each with a cut-out product, ride a glowing violet arc that spans the full width. The tile at centre passes in front of the phone, larger and with a white label, while side tiles tilt up to about 25 degrees with faint tags. As each one arrives, the payment plan on the phone changes to suit that item; I read six different amounts across my frames. I checked the clock: it is a looping 9.17s video that keeps running at its own pace and does not follow scroll. The whole picture simply rises as you scroll on.

- Build: Pre-rendered loop, 9s, 1440x810, placed at top 60vh with a fade at its foot. HTML alternative: tiles on a circle of radius 120vw, centre below the fold, rotate 72 degrees per step, 1.8s each. On step, update the phone's plan text with a rolling-digit change. Tile 270px, radius 40px, background rgba(255,255,255,.12), backdrop-filter: blur(16px). Label pill white on the active tile only. Arc: a 2px stroke with a 60px blurred copy in violet.
- For an ordinary business: A bakery's cakes pass a counter display whose price changes; a dentist's treatments pass a monthly-cost card; a bank's goods pass a repayment figure.
- Depends on: Cut-out product images and either motion software or a careful JS sequence.

## `name-rail-repaints-the-whole-screen` (loud)

The home page is one screen that does not scroll. A rail of ten small glass pills sits at the left, vertically centred, 38px apart in 16px type. Hovering a pill replaces the entire viewport within about a second with that client's own composition: one a huge olive arch with a phone card at lower right, one a figure made of paint with a monitor at upper right, one a full-bleed skin photograph with a phone card at left, one two colour fields split by a giant curve with an oversized smile mark. Each has a name in an 88px light serif and short lines in a different position, and the rail and header stay fixed. Leaving the rail returns to the default screen, and clicking opens the case study.

- Build: Stage fixed inset:0. Rail: position:absolute; left:24px; top:50%; translateY(-50%); flex column; gap 6px; pills with padding 4px 16px, background rgba(255,255,255,.14), backdrop-filter blur(10px), border-radius 999px. One section per item, absolutely stacked, opacity 0, each with its own hand-placed children. On pill hover or focus: active panel opacity 1 over 450ms, children translateY(16px to 0) staggered by 50ms. Preload panel images on first pointer movement. Pills are real links. On touch, stack the panels as a normal scrolling list.
- For an ordinary business: A bakery's rail of cakes, breads and pastries, each repainting the screen in its own colour and photo; a small practice's five services, each with its own poster. Fewer items make it easier.
- Depends on: Bespoke layout and images per entry, about 6 to 10 of them. Lenis and 3 videos on the site, no canvas; PP Eiko at weight 240 and Basis Grotesque.

## `objects-in-the-picture-are-the-menu` (loud)

Pointing at the tall wall of shelves in the room fills that whole area with a fine diagonal hatch and a thin outline, following the perspective of the wall, and a small 13px label in square brackets appears at the cursor offering to go to the work section. The image takes the full viewport below a thin 36px nav. Nothing in the picture looks like a button until you move over it. The ordinary nav stays at the top, so this is a second, playful route rather than the only one.

- Build: Full-bleed img with an absolutely positioned SVG overlay in the same viewBox. One polygon per zone, traced by hand on the perspective of each object, fill transparent, wrapped in an a element. On hover or focus: fill url(#hatch) where the pattern is a 6x6 tile rotated 45deg with a 1px line at 35% white, stroke white at 1px, transition 150ms. Label: 13px mono in brackets, position:fixed, following the pointer with an 8px offset; show it at the zone centre on keyboard focus. Keep every link in a real nav as well, and give each polygon an aria-label. On touch, show the hatch briefly on load so people learn it is tappable.
- For an ordinary business: A photo of a bakery counter where the bread shelf, the till and the oven each lead somewhere; a dentist's reception where the desk means booking and the door means treatments.
- Depends on: One photo with several distinct objects. No 3D needed; hand-traced polygons only.

## `title-fitted-per-item` (loud)

Each film in the hero gets a title measured to its own length so the longest line nearly fills the 1440px viewport: 225px for a four-word title on two lines, 400px for a two-word title, 344px for the third. Line-height is 0.8 and tracking -0.05em, so the lines almost touch. On two-line titles the first line is flush left and the second flush right. Awkward letter pairs are kerned by hand in the markup, with -0.124em after a Y and -0.05em after a T. The white type fills the lower third of the still and runs across shoulders and jackets, in front of the people in the shot.

- Build: Render each title at 100px in a hidden span, measure width w, then --fs = 100*(innerWidth-40)/w, clamped 120 to 400px. h2{font-size:var(--fs);line-height:.8;letter-spacing:-.05em;font-weight:485} with a variable font. Long titles split into two balanced lines, .line:nth-child(2){text-align:right}. Kerning map {Y:-.124,T:-.05}: wrap the following letters in <span style='display:inline-block;margin-inline-start:-.124em'>. Measure after document.fonts.ready and again from a ResizeObserver.
- For an ordinary business: A bakery's daily special fills the screen width whatever its length: one short word enormous, a long name smaller. The width stays constant and the size carries the surprise.
- Depends on: A heavy-enough grotesque, ideally variable, and stills with calm lower thirds. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `archive-as-objects-on-a-shelf`

The page does not scroll and has no headline. On a pale grey wall, two white shelves about 80% of viewport width each hold five square sleeves about 13.5% wide, leaning slightly back and casting long soft shadows downward. Each sleeve carries its own art, so ten releases read as a physical collection on sight. The only other text is a 14px two-line note at top left and, along the bottom edge, a ruled index of ten small columns giving year, season and name. The whole product history fits in one glance.

- Build: Without WebGL: stage 100vh, background linear-gradient on grey, perspective 1400px. Two grid rows of five, each item aspect-ratio 1, transform rotateX(4deg) with transform-origin bottom. Shelf: 8px white bar below each row with box-shadow 0 40px 60px -20px rgba(0,0,0,.25). Item shadow: a blurred dark skewed pseudo-element below the shelf. Foot index: flex row with 12px text, three lines each, each a link to the same item, and hovering it lifts the matching sleeve. Stack to two per row on phones and let it scroll.
- For an ordinary business: A bakery's seasonal menus as printed cards on a rail, a building society's annual reports on a shelf, a clinic's patient guides in a leaflet rack.
- Depends on: A set of 6 to 12 items with real cover art. The site uses one full-viewport canvas (WebGL inferred) and Inter; no GSAP or Lenis found.

## `catalogue-card-flips-to-object-in-use`

A black wall of about 20 small cards in four columns, each about 23% of the width with a thin grey outline and one chamfered corner, staggered so neighbouring columns sit half a card out of step. Each holds a cut-out helmet at rest with a tiny name and year. Hovering replaces the cut-out with a full-colour photo of that same object in use, edge to edge in the card, and the outline turns neon. In one frame the hovered card also grows beyond its column, overlapping its neighbour and the edge of the wall. The grid is calm and monochrome at rest, so the single coloured card stands out.

- Build: Grid repeat(4,1fr), gap 16px; nth-child(even) margin-top:9vh for the stagger. Card: aspect-ratio 4/5, border 1px solid #2c2c2c, clip-path polygon with one 24px cut corner, position:relative. Two children: .specimen (cut-out, object-fit:contain, padding 12%) and .scene (object-fit:cover, inset 0, opacity 0, transform scale(1.08)). On hover or focus-visible: .scene opacity 1 and scale 1 over 380ms cubic-bezier(.2,.8,.2,1), .specimen opacity 0, border-colour accent, and on wide screens z-index 2 with transform scale(1.12) with transform-origin toward the grid centre. Keep the caption in the same place. On touch, first tap shows the scene.
- For an ordinary business: A bakery's cakes as clean cut-outs that flip to the birthday table; a dentist's treatment list where each item flips to a real smile; a bank's account cards that flip to the thing that account paid for.
- Depends on: A specimen shot plus an in-use shot for each item.

## `chosen-item-steps-out-and-the-room-blurs`

Hovering a sleeve lifts it off the shelf by about 4% of viewport height, swells it slightly and shows two small pills on its lower edge, while neighbours stay put. Clicking sends it to the centre of the screen at about 28% of viewport width and 46% of its height, and everything else on the wall goes soft with a strong blur. A 24px title and a one-sentence line appear at far left, level with the shelf, and one black pill sits under the sleeve. The sleeve also tilts a little toward the pointer. The URL stayed the same, and the shelf is still there behind it, so you never feel you have left.

- Build: Measure the item with getBoundingClientRect and use a FLIP transform to fly it to centre over 600ms cubic-bezier(.2,.8,.2,1), or use the View Transitions API with one view-transition-name. Background layer: filter blur(10px) over 400ms, scale 1.02 so edges do not show. Pointer tilt: rotateY((x-.5)*10deg) rotateX((.5-y)*8deg) with a lerp of .1. Close on Esc or a click outside, restoring focus to the item. Replace blur with an opacity drop under prefers-reduced-motion.
- For an ordinary business: Any list of things: a cake from a shop's range, a mortgage product, a treatment. The item comes forward and the rest of the shop stays visible behind it.
- Depends on: Items with good cover images; a blurred ground that stays recognisable.

## `list-row-grows-its-own-thumbnail`

The work index is a stack of centred names in a 110px condensed serif, each in a 150px row between thin black rules running the whole content width. With the pointer on a row, a small image about 167x114px appears inline straight after the name, at the same height as the letters, and the name shifts left to keep the pair centred. It works on the row under a still pointer while scrolling too, so names light up as they pass under it. There is no floating preview chasing the cursor and no card, just a picture joining the sentence.

- Build: Each row: a link, display:flex; justify-content:center; align-items:center; border-bottom:1px solid currentColor; height 150px; font-size clamp(44px,7.6vw,110px). Thumb: inline img with width 0, height .95em, object-fit:cover, margin-left 0; on hover or focus width 1.5em, margin-left .15em, transition 380ms cubic-bezier(.2,.8,.2,1). Animating width makes the centred name slide by itself. Lazy-load thumbs. Touch: show the thumb on the row nearest the centre of the screen.
- For an ordinary business: A dentist's treatment list, a cafe's menu or a bank's branch list set big with a tiny photo joining each name. It turns a plain list into the main feature for almost no work.
- Depends on: One small image per row and short names. A big condensed face keeps long names on one line.

## `name-and-price-on-one-horizon`

Three soft-knit figures stand shoulder to shoulder across the middle 60% of the frame. On one horizontal at 50% of the viewport, the product name sits at the far left in 44px from x=33 to x=363, crossing the neck of the left figure by about 130px. At the far right on the same line sit a 14px deposit price and a dark pill button. Nothing else is on screen except the nav, so the words form a horizon running through the group.

- Build: .hero{position:relative;height:100vh} .horizon{position:absolute;left:32px;right:32px;top:50%;transform:translateY(-50%);display:flex;justify-content:space-between;align-items:center}. Left: h1 as a two-tone line, 44px. Right: 14px price and a 36px tall pill. Centre the subject group so its neck or waist line meets that horizon.
- For an ordinary business: A bakery shows a shelf of three loaves with the name left and price and order button right, on one line through the middle of the loaves.
- Depends on: A group of subjects with a clear horizontal band at mid-height, and very few words.

## `private-glyph-per-entry`

Every project in the index has a 38px black square holding a tiny white pictogram drawn for that one building, its silhouette or plan reduced to a mark. The square sits above a right-aligned caption in the left gutter, with the project name in about 13px and the location in about 11px grey capitals. There were 263 of these icons in the DOM at load. They work like a private alphabet, and the column of black squares gives the long page its beat.

- Build: For each item, a 52x52 SVG, white on black, shown at 38x38. Caption block: text-align:right, name 13px, place 11px uppercase #888, sitting in the gutter 11px left of the image. Generate glyphs by tracing each subject's silhouette or plan to a single shape inside the square.
- For an ordinary business: A bakery draws one tiny stamp per loaf from its slash pattern and uses it on the bag too. A dentist draws one per treatment.
- Depends on: A list of real things, and an afternoon per dozen to draw them. Engine seen: Lenis smooth scroll. No global GSAP, no WebGL, no video.

## `product-list-set-as-a-paragraph`

Where a template would place a grid of product cards, 17 product names run as one centred paragraph of 48px light serif, five lines deep, spanning about 82% of the width on white at 86px line spacing. Small square blue-grey points about 6px wide separate the names, with wide gaps either side. Three names carry a tiny black tag, 26px tall, set immediately after the word and holding the current rate or offer in 12px white sans. The block has no icons, no boxes and no headline of its own; the catalogue is the display type.

- Build: <p> with text-align: center; font: 300 48px/86px serif; max-width 1200px; tight negative tracking (about -0.02em, estimated). Names as inline links. Separator ::after inline-block 6x6px #A9B4C2, margin 0 22px, vertical-align: middle. Tag inline-block, vertical-align: .2em, margin-left 8px, padding 7px 8px, radius 6px, background #000, colour #fff, 12px/12px sans. Keep rates in the tags so the paragraph stays a list of words.
- For an ordinary business: A bakery sets all of today's bakes as one big paragraph with prices as tiny tags; a dentist lists treatments with 'from' prices; a bank lists accounts with rates, replacing the ruled rate table.
- Depends on: A serif with real presence at light weight, and a catalogue of short names.

## `scattered-tiles-with-held-space`

Under a 48px question at top left, three product tiles sit off any shared column line: 589x589 at x=8, 589x441 at x=843 starting 144px higher, and one 350px wide at x=724 starting 162px above the first tile's bottom edge. Each tile is a soft grey gradient that fades into the page at its top, with no shadow or border and a small radius. Large cells stay open between them, including 246px between the first two. Each tile has only a 14px mono label under its bottom left corner, so the eye zigzags as it would across items laid on a table.

- Build: On a 24-column grid at 1440 (60px per column, 8px page padding): tile A grid-column:1/11, margin-top:145px; tile B grid-column:15/25; tile C grid-column:13/19, margin-top:-162px. Tile background: linear-gradient(#f4f4f4,#cfd2d5), radius 8px, no shadow. Caption: mono 14px, underlined. Below 900px fall back to two columns and keep one offset of 80px.
- For an ordinary business: A bakery lays out three loaves at three sizes, one big, one tall, one small, under one plain question, like goods on a counter.
- Depends on: Three to five single-subject shots on matching backdrops, and a client willing to leave cells empty.

## `product-stage-chapters` (loud)

No grid at all. Each product gets one viewport on its own ground, black or grey or a colour per line, product centred, a tiny 9-12px mono label bottom-left, two buttons at most. Scroll steps between stages, with a small index to jump. For catalogues under about 12 products.

- Build: Read `references/elements/commerce.md` lines 795 to 802.

## `running-text-index` (loud)

A catalogue as text: all items as a list of 14-56px names, some with a year in brackets, the current item's caption beneath, one image at a time beside it. Or huge condensed service names on a 54px pitch with arrows pinned far right. Reads as an inventory.

- Build: Read `references/elements/section-info.md` lines 1348 to 1355.

## `scene-per-product` (loud)

Each product gets a whole viewport: full-bleed colour or illustrated scene, about 620px art, a 72px title, a 12px caps two-liner, one button, an index badge and a small pager. For ranges of four to eight with real character. Always show a plain list view as well.

- Build: Read `references/elements/section-info.md` lines 1357 to 1364.

## `typographic-index` (loud)

The list is the design: names 28 to 100px on 1px rules or none, active full ink, others 25 to 55%, a small preview swapping beside the list. A progress line can fill the active rule. For services and channels with good names, in agency and bold brand pages.

- Build: Read `references/elements/section-features.md` lines 736 to 743.

## `bare-product-no-card`

No tile or box. A cut-out with a soft contact shadow stands directly on the page ground, about 300px tall, four columns. Centred 14px spec and 16px bold name below. One sticker or a slight rotation carries personality. Needs a clean render and a tinted or cream page.

- Build: Read `references/elements/commerce.md` lines 529 to 536.

## `centred-menu-column`

One centred column about 420-700px on warm paper: 16px tracked caps name, 17px italic ingredients beneath, price inline or on its own line, script or caps section heads, a small OR between choices. Reads as the printed card on the table. For fine dining and prix fixe.

- Build: Read `references/elements/section-info.md` lines 1261 to 1282.

## `colourway-stage`

One object as a theatre set. Product centred or diagonal at 430-700px on a ground that changes with each colourway. Neighbours sit either side as low-alpha outlines with only the dial or blade coloured. Selected colour named beside small dots. PREVIOUS and NEXT at the edges in 12px mono. One clear action.

- Build: Read `references/elements/commerce.md` lines 1198 to 1205.

## `column-with-one-side-bleed`

All text and rails start at x=230 on a 980px column. Galleries start on that line and bleed only rightward past the viewport, scrolling sideways, so the left edge stays one line down the page. The next image peeks in to signal scroll.

- Build: Read `references/elements/layout.md` lines 1094 to 1109.

## `contrast-pairing`

Plan images in pairs: neighbours contrast in tone or scale, never subject. Black-and-white grain beside saturated studio colour, macro beside wide, dark tile diagonal to light tile. Butt frames with 0-2px gaps. Photography supplies all page colour. No scrims, no filters.

- Build: Read `references/elements/media.md` lines 294 to 303.

## `designed-cover-system`

No stock photos: every post gets a cover from one system. Dotted field with a logo plate, line sketch with one accent, lettered cartoon or typographic poster. One rule, one palette, generated per post. It turns a feed into a publication, and is the cheapest way to look art-directed.

- Build: Read `references/elements/section-info.md` lines 1012 to 1019.

## `enquiry-spec-block`

No price, no cart. Per piece: 14px description, then a 'Dimensions' label indented about 60px with figures beneath. Set in an index column beside a tall photograph, one enquiry link at the end. Fits antiques, furniture, architecture and made-to-order, where the conversation is the sale.

- Build: Read `references/elements/commerce.md` lines 1207 to 1214.

## `in-place-swap`

The frame never moves. Title and still cross-swap in the same position, so only image and words change. Duration 0.3-0.6s. The quietest transition that still feels authored, because the layout itself is the constant.

- Build: Read `references/elements/motion.md` lines 1835 to 1842.

## `media-plate-then-caption`

Three or four columns, 8 to 32px gaps. A plate 286 to 500px tall holding a real fragment or photo cropped by its edge, then 24px of space, a 20 to 28px/400 title and 16/1.4 copy at 58% ink on the bare page. No card, border or shadow behind the text.

- Build: Read `references/elements/section-features.md` lines 214 to 248.

## `narrowing-filmstrip`

Active tile 818x460, then strips narrowing to about 188, 90, 42 and 8px, all the same height, radius 6, gap 16. Next stories compress at the edge, so depth is shown in one row. 40px arrow tiles top right, a white 40px title on the art. Stack on phones.

- Build: Read `references/elements/section-info.md` lines 994 to 1001.

## `no-caption-tile`

Flat 3:4 tile in #f2f2f2 or one tone off the page, radius 0, no name, price or badge at rest. Cut-outs alternate with tight detail crops. 10-12px gaps, 12px caps label above the rail, partial tiles at both ends. Use only for a campaign rail that leads to real listings.

- Build: Read `references/elements/commerce.md` lines 389 to 396.

## `palette-tied-set`

Shoot on the page palette: ground, wardrobe and props drawn from its neutrals and accent. Grade seamless backgrounds to within 2-4% of the page colour so edges melt. One image per viewport or one-row colour story, flat frontal framing, no text on images, no borders.

- Build: Read `references/elements/media.md` lines 226 to 235.

## `poster-tiles`

Two tiles per row, 8 to 16px gaps, near full bleed, little or no radius. Centred stack in the top third: 40/44 title, one line, pills or chevron links. Product fills the lower 55 to 60%, art-directed per tile, some cropped at the base. Pair a light tile with a dark one.

- Build: Read `references/elements/section-features.md` lines 271 to 278.

## `quiet-text-filter`

Filtering set as plain text. One centred 32px serif sentence of comma-separated categories, or ALL and STYLE at 13px on a rule one tile wide, or 12px header links with the active one underlined. For editorial sites and small catalogues under 30 items. Never for large ranges.

- Build: Read `references/elements/commerce.md` lines 1023 to 1030.

## `row-expands`

Only the hovered row opens: height grows from about 19-177px to 240-460px, pushing later rows down while the others collapse into strips. 0.5s cubic-bezier(.25,1,.5,1). An index becomes a gallery. Needs a stable pointer path, so give a row no neighbour that jumps under the cursor.

- Build: Read `references/elements/motion.md` lines 1322 to 1329.

## `seam-contact-sheet`

Four 3:4 images butted with 1px gaps on 24px page margins, or full bleed with 4px gaps, no card chrome. Model and still-life tiles mix under one studio ground. Captions sit on the page below at 12px, inset 12px. Ends in one small black 'show more'. Reads as a printed contact sheet.

- Build: Read `references/elements/commerce.md` lines 670 to 686.

## `shelf-baseline-row`

Objects of different heights stand on one shelf line. 3-5 columns, 24-40px gutters, no tile, items aligned to the bottom of the image cell with a soft book shadow. Centred caption: 12px tag, 12-25px title, price. A count or 'Show All' outline button closes it. Ideal for books and bottles.

- Build: Read `references/elements/commerce.md` lines 804 to 817.

## `staggered-hung-images`

Images never share a row: two 580px images with tops offset 180px, then widths change to 553, 453 and 933 centred, left edges stepping x=100, 760, 252. Gaps 120-200px, caption under each. Two objects per viewport for commerce, one for a gallery.

- Build: Read `references/elements/layout.md` lines 764 to 785.

## `sticky-visual-configurator`

For considered purchases. Left a sticky 870x560 stage, radius 20, one tone off the page. Right a 330px column of steps, each a 28px heading with dark lead and muted continuation, over option tiles radius 12. Later steps stay dimmed until the earlier ones are chosen. Dot progress on the right edge.

- Build: Read `references/elements/commerce.md` lines 1142 to 1149.

## `studio-seamless-object`

One object on one coloured seamless, single soft key from one side, long soft shadow, shallow focus. Object fills about 50% of tile width, same scale across all tiles. Every tile shares one tone range. Ground colour carries the identity; no props unless they repeat.

- Build: Read `references/elements/media.md` lines 237 to 246.

## `uncropped-native-plate`

Native ratio, no radius, shadow, tint or inner caption. Fix one dimension: height up to 720px for a sequence, or a 330-420px column with unequal heights for an index. Interface stays neutral so all colour comes from the work. Caption below, 13px, centred or left.

- Build: Read `references/elements/media.md` lines 336 to 354.
