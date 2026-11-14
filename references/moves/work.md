# Show the work

36 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `film-strip` (loud)

A pinned scene where scrolling down walks you sideways past pictures of different widths, 26 to 50vw, each with one short line such as a time of day. It starts with a large title as the first frame. Ordinary steps become a walk past a wall.

- Build: `composition.md` 5.
- For an ordinary business: A day at the business, the journey of an order, the life of a loan.

## `window-that-opens` (loud)

Near-empty ground, a small picture in the centre, one word either side like a sentence with a photograph for a middle word. Scrolling pins it and the window grows until the picture fills the screen and the words slide away. You feel you walked through it.

- Build: `composition.md` 2.
- For an ordinary business: Use the moment the work begins: a door opening, a kitchen before service, a bench at dawn.

## `image-follows-the-list`

A list set huge, 5 to 7vw, on a plain ground. Hover a row and a photograph opens beside the cursor and trails it with a little lag while other rows fade back. Plain words at rest, a gallery under the hand.

- Build: `composition.md` 6.
- For an ordinary business: Services, past jobs, news, products. Give phones a small picture in each row.

## `overlapping-prints`

Two or three pictures of different sizes laid over each other and over the heading, like prints on a table, drifting at different speeds. Nothing sits in a neat cell.

- Build: `composition.md` 10.
- For an ordinary business: Any set of three good photographs.

## `sheets-slide-over`

Full-height scenes stack like sheets. Each slides over the last, which sinks back and dims as it is covered.

- Build: Handoff: sheets in `motion/score.md`.
- For an ordinary business: Three chapters of a story, each with its own ground.

## `crooked-window-opens-around-a-still-image` (loud)

On a pale lilac page sits a dark four-sided window about 29% of viewport width and 72% of its height, in which no two sides are parallel: its top edge slopes down to the right and its right side leans outward. It looks like a card tilted in space, and an orb and the fingertips of a raised hand are cropped by it. As you scroll, the corners travel outward and the sides straighten: 55% wide, then 75%, then 85% with nearly vertical sides. The orb and hand inside hold their position and size, revealing more of the picture, so the window opens rather than the image zooming.

- Build: Pinned section 300vh; image sticky at 100vh, full-bleed, object-fit:cover, never transformed. Scrub clip-path between two four-point polygons with the same point order: start polygon(36% 8%, 60% 17%, 65% 73%, 36.5% 80%), end polygon(0 0, 100% 0, 100% 100%, 0 100%). CSS animates this directly with animation-timeline:scroll(), or use a rAF lerp. Hold the start shape for the first 15% of the pin. Caption sits under the shape in 14 to 16px, fading out by p .3. For the 8px soft corners, use an SVG clipPath with rounded joins or the CSS shape() function.
- For an ordinary business: A bakery's oven door shape opening onto the whole kitchen; a door ajar in a bank's branch photo opening to the full room. One image, no video needed.
- Depends on: A full-bleed image that still works as a narrow crop in the middle. The site has ScrollTrigger and Lenis loaded, plus two 1440x900 canvases.

## `film-recedes-into-a-wall-of-work` (loud)

A black card holding a product film rises under a short statement and reaches about 92% of viewport width, then keeps shrinking as you scroll: about 75% at the next stop, then 58%, then 38%. As it shrinks it turns out to be one tile of a larger wall: neighbouring dark tiles slide in around it with 16px gaps and 8px corners, each holding a different product on black. Scrolling on, the wall moves while the sentence holds its place. No section seam occurs anywhere in this run; one film becomes the whole portfolio.

- Build: Pinned section 300vh, sticky 100vh, overflow:hidden. Build the wall as a CSS grid 3 columns wide, sized at 270vw so the centre tile fills the viewport at scale 1. Scrub transform scale 1 to .37 on the grid about the centre tile between p .1 and .6, so neighbours arrive naturally without separate animation. Then translateY each column by a different amount (-10vh, -24vh, -6vh) between p .6 and 1. Use muted, inline, looping video in each tile, poster images, and pause tiles out of view with IntersectionObserver.
- For an ordinary business: A wedding baker's one cake film pulling back into a wall of twelve cakes; a builder's one kitchen becoming the full set of projects.
- Depends on: Six to nine pieces of matching tone on the same ground colour. The site does this with Lenis and 22 video elements, no canvas, so no WebGL is required.

## `line-drawing-resolves-into-the-room` (loud)

At first paint the whole viewport is a white wireframe on black: a two-storey interior with stairs and a mezzanine, drawn in 1px lines, with small clusters of pixel blocks drifting in the air. Shortly after, the same camera view is a fully lit, dark 3D room with warm shelf lighting, a figure on the stairs, a dog, an arcade cabinet, a neon sign and a stack of old monitors. Line drawing and render share exact perspective, so the room seems to be built in front of you rather than loaded. I saw the two states about two seconds apart and cannot say whether a timer or the pointer triggers the change.

- Build: Without WebGL: trace the hero photo into an SVG line drawing in the same viewBox. Stack svg above img in one box. Show the SVG first with stroke-dashoffset drawing on over 900ms, then on img.decode() reveal the photo: mask-image linear-gradient sweep over 800ms or a simple opacity 0 to 1, with the lines fading to 0 after. The photo must not move or rescale when it appears. With a 3D scene, render wire material first and swap materials when textures finish.
- For an ordinary business: An architect's or kitchen fitter's real plan drawing resolving into the finished photo; a bakery's pencil sketch of its shop front becoming the photograph.
- Depends on: One strong interior or object image and a traced line version in identical perspective. The site uses three 1440x900 canvases, Geist and Geist Mono; no global GSAP or Lenis found.

## `pinned-title-over-a-passing-photo` (loud)

A 1440x1865px photo shows green wooden cubes and painted balls hanging above blue cloth that meets an ochre floor. A serif capitals headline, effectively 126px and fitted to 1372px of the 1440px width, holds still near the bottom of the viewport while the photograph slides up behind it for at least 960px of scroll. A small caption holds still at the top. The objects seem to fall past the words, the ochre floor rises behind the letters, then the title is released and leaves with the picture's bottom edge. White type stays legible on both the blue and the ochre.

- Build: section{position:relative;height:226vh} img{position:absolute;top:0;left:0;width:100%;height:auto}. .title{position:sticky;top:calc(100vh - 190px);padding:0 34px}. Fit to width: set font-size:20px, measure the span, then transform:scale(containerWidth/spanWidth);transform-origin:left, which is how the site does it with a measured scale of 6.32. Serif capitals, weight 400, white. The site's pin is script driven under smooth scroll (inferred, no sticky in the title's chain); sticky gives the same result.
- For an ordinary business: A bakery shoots one tall photo of flour falling onto a bench, and three plain words stay still while it passes behind them.
- Depends on: A tall photo of at least two viewports with a colour change or an eye path running down it. Engine seen: Lenis smooth scroll, two videos elsewhere, no global GSAP, no WebGL.

## `sticky-stack-wipes-the-title` (loud)

Three full-width film stills are stacked. Each slide is 836px tall in a 900px viewport and sticks at top:0, so the top 64px of the next film always shows at the bottom under a 6px white rule. As you scroll, the next slide rises over the current one, and frames at 360px steps show that rule cutting horizontally through the giant title, leaving the tops of its letters above the line. The title neither fades nor moves: it is simply wiped by the next picture. The stack's container is 2524px tall, so three slides pass in about 1.8 viewports of scroll.

- Build: .slide{position:sticky;top:0;height:calc(100vh - 64px);border-top:6px solid #fff;overflow:hidden} with DOM order giving each later slide the upper layer. Title absolute at bottom:54px. Last slide position:relative so it scrolls away. No JavaScript at all.
- For an ordinary business: A dentist's three treatments stack as full-height photos, each with one big word, and each scroll wipes the last word away.
- Depends on: Stills with faces in the upper half, so the title never covers them. CSS sticky only.

## `title-fitted-per-item` (loud)

Each film in the hero gets a title measured to its own length so the longest line nearly fills the 1440px viewport: 225px for a four-word title on two lines, 400px for a two-word title, 344px for the third. Line-height is 0.8 and tracking -0.05em, so the lines almost touch. On two-line titles the first line is flush left and the second flush right. Awkward letter pairs are kerned by hand in the markup, with -0.124em after a Y and -0.05em after a T. The white type fills the lower third of the still and runs across shoulders and jackets, in front of the people in the shot.

- Build: Render each title at 100px in a hidden span, measure width w, then --fs = 100*(innerWidth-40)/w, clamped 120 to 400px. h2{font-size:var(--fs);line-height:.8;letter-spacing:-.05em;font-weight:485} with a variable font. Long titles split into two balanced lines, .line:nth-child(2){text-align:right}. Kerning map {Y:-.124,T:-.05}: wrap the following letters in <span style='display:inline-block;margin-inline-start:-.124em'>. Measure after document.fonts.ready and again from a ResizeObserver.
- For an ordinary business: A bakery's daily special fills the screen width whatever its length: one short word enormous, a long name smaller. The width stays constant and the size carries the surprise.
- Depends on: A heavy-enough grotesque, ideally variable, and stills with calm lower thirds. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `caption-scale-headlines`

On a page with a 1391px film and 915px photographs, the largest live text anywhere is 31px, a light serif used once. Section titles are 19.6 to 24px and links are 13px, on warm cream. No page text overlaps an image, and every caption sits in the margin under its picture like a museum label. The ratio of picture width to title size is about 45 to 1.

- Build: Cap the scale at 31 / 24 / 19.6 / 14 / 13px. Top size weight 300, normal tracking. Warm cream ground, about #f3eee7. Text always under the image, never on it. Images keep full column width. Hard rule: no live text above about 2.2vw.
- For an ordinary business: A private dentist or a law firm uses large honest photographs of the room and the people with 20px captions, which reads as confidence and not as shouting.
- Depends on: Photography strong enough to carry all the page's attention. With weak photos this reads as empty.

## `media-card-bends-in-transit`

A video card about 90% of the viewport width and 72% of its height sits between light sections. In one frame during scrolling the card stopped being a rectangle: the bottom edge bows upward and the lower-left corner is pulled about 25px inward, so the whole thing looks like a sheet of film under tension. In a repeat at the same scroll distance, at rest, it was a true rectangle with 20px corners, and it stayed flat for the next eight seconds. So the bend is transient; that it is driven by scroll speed is inferred, not measured. The content keeps playing throughout.

- Build: Read scroll velocity v each frame and smooth it with lerp .1, then clamp to -1 to 1 by dividing by 60px per frame. CSS-only version: wrapper perspective:1200px and inner transform rotateX(calc(var(--v)*5deg)) skewY(calc(var(--v)*.6deg)) with transform-origin centre top, spring back naturally as v decays. True edge bend: a WebGL plane with vertex y += sin(uv.x*PI)*v*.06*height, or an SVG feDisplacementMap with a horizontal gradient map and scale set to v*30. Limit to one element per viewport. Zero it under prefers-reduced-motion.
- For an ordinary business: One large photo on any plain site (the shop front, the team) gains a little physical weight for about twenty lines of script, and nothing changes for anyone who is not scrolling.
- Depends on: A smooth-scroll or velocity reading; the true curve needs WebGL or an SVG filter, the skew version needs nothing.

## `scattered-tiles-with-held-space`

Under a 48px question at top left, three product tiles sit off any shared column line: 589x589 at x=8, 589x441 at x=843 starting 144px higher, and one 350px wide at x=724 starting 162px above the first tile's bottom edge. Each tile is a soft grey gradient that fades into the page at its top, with no shadow or border and a small radius. Large cells stay open between them, including 246px between the first two. Each tile has only a 14px mono label under its bottom left corner, so the eye zigzags as it would across items laid on a table.

- Build: On a 24-column grid at 1440 (60px per column, 8px page padding): tile A grid-column:1/11, margin-top:145px; tile B grid-column:15/25; tile C grid-column:13/19, margin-top:-162px. Tile background: linear-gradient(#f4f4f4,#cfd2d5), radius 8px, no shadow. Caption: mono 14px, underlined. Below 900px fall back to two columns and keep one offset of 80px.
- For an ordinary business: A bakery lays out three loaves at three sizes, one big, one tall, one small, under one plain question, like goods on a counter.
- Depends on: Three to five single-subject shots on matching backdrops, and a client willing to leave cells empty.

## `unequal-diptych-day-and-night`

Two pictures stand side by side at 915x570 and 439x577, a ratio of about 2:1, 37px apart with tops within 4px of each other. The left one is a wide daylight colonnade reflected in a pool, and the right one is a slim night scene of a lit globe on dark water: same family, opposite mood. Under each sits a tiny label, a 19.6px serif title, two lines of 14px copy and a text link. The same split returns lower on the page at y=2791, so it works as the page's rhythm and not a one-off.

- Build: display:grid;grid-template-columns:2.08fr 1fr;gap:37px;padding:0 25px. Both images height:570px;object-fit:cover. Under each: label 10px tracked caps, h3 20px/1.3 serif weight 400, p 14px/1.5, underlined link 13px. Choose the pair by contrast of light: the wide one is day, the narrow one is night or a detail.
- For an ordinary business: A bakery pairs a wide daylight shot of the shop with a narrow shot of the oven glowing at 4am.
- Depends on: Two photos of the same subject matter with opposite light.

## `dense-image-wall` (loud)

Edge to edge, 0-10px gaps, no captions, four to nine columns, and the page is simply the work. Fills the viewport so scale itself is the statement. Works for archives, community output and templates. Add a fade at the base if the wall is truncated, with one button on it.

- Build: Read `references/elements/section-info.md` lines 682 to 689.

## `framed-single-screen` (loud)

White page, 15px frame, 56px header row and 60px footer row hold all text; one 1410x780 photo fills between. Page height equals the viewport, so nothing scrolls away.

- Build: Read `references/elements/layout.md` lines 1020 to 1026.

## `full-bleed-project` (loud)

One image edge to edge, 740px or viewport tall, no radius, breaking the page margins. White caption bottom left at 32px inset: 15/500 name over 15px mono type. No scrim. Or fade the bottom third into the page and set logo and statement on the fade.

- Build: Read `references/elements/section-proof.md` lines 1148 to 1155.

## `pinned-photo-dissolve` (loud)

One full-height frame pins while photographs cross-dissolve at the same framing, with a 12px caption block holding bottom-left. Nothing slides. Chapters change by dissolve rather than by page movement, so a long story reads as a slow film. Three to five stills of matching exposure.

- Build: Read `references/elements/motion.md` lines 800 to 807.

## `pinned-project-stage` (loud)

One viewport holds one project; scroll swaps it in place. A centred 500-1170px frame stays pinned while neighbours enter from the edges, or a smaller clip rises over a large frame. Keep the swap under one screen of scroll, and give phones a plain stacked version.

- Build: Read `references/elements/section-info.md` lines 780 to 787.

## `single-image-stage` (loud)

One 576x720 image centred on off-white, ~90px from the top, name above, two-line caption below, six 3px progress dots. Reads as a gallery wall with one thing on it. For portfolios and curated sites whose next image is the interaction.

- Build: Read `references/elements/hero.md` lines 1425 to 1433.

## `column-with-one-side-bleed`

All text and rails start at x=230 on a 980px column. Galleries start on that line and bleed only rightward past the viewport, scrolling sideways, so the left edge stays one line down the page. The next image peeks in to signal scroll.

- Build: Read `references/elements/layout.md` lines 1094 to 1109.

## `contrast-pairing`

Plan images in pairs: neighbours contrast in tone or scale, never subject. Black-and-white grain beside saturated studio colour, macro beside wide, dark tile diagonal to light tile. Butt frames with 0-2px gaps. Photography supplies all page colour. No scrims, no filters.

- Build: Read `references/elements/media.md` lines 294 to 303.

## `designed-cover-system`

No stock photos: every post gets a cover from one system. Dotted field with a logo plate, line sketch with one accent, lettered cartoon or typographic poster. One rule, one palette, generated per post. It turns a feed into a publication, and is the cheapest way to look art-directed.

- Build: Read `references/elements/section-info.md` lines 1012 to 1019.

## `fixed-height-filmstrip`

A horizontal band where every image has one fixed height and its own native width: 620px tall, widths 300-900, 100px gaps, white above and below. Driven by wheel or drag. Height is the only constant, so mixed work sits together without a crop.

- Build: Read `references/elements/section-info.md` lines 724 to 731.

## `in-place-swap`

The frame never moves. Title and still cross-swap in the same position, so only image and words change. Duration 0.3-0.6s. The quietest transition that still feels authored, because the layout itself is the constant.

- Build: Read `references/elements/motion.md` lines 1835 to 1842.

## `narrowing-filmstrip`

Active tile 818x460, then strips narrowing to about 188, 90, 42 and 8px, all the same height, radius 6, gap 16. Next stories compress at the edge, so depth is shown in one row. 40px arrow tiles top right, a white 40px title on the art. Stack on phones.

- Build: Read `references/elements/section-info.md` lines 994 to 1001.

## `one-light-one-grade`

Fix one time of day, one light direction, one colour bias across every subject, so warm-cool spread stays under 10 even if brightness swings. Crop to two ratios at most. Lift blacks 7-9%, hold highlights under 96%, saturation about 70%. Dusk amber for drama, matte daylight for calm.

- Build: Read `references/elements/media.md` lines 196 to 224.

## `rhythm-rows`

Rows change count on purpose: one full tile, then two, then three, all locked to the same gutters. Square corners, 20-50px gaps, 55px page margin or less. No hover chrome. The change of beat replaces any need for cards, and it looks curated rather than generated.

- Build: Read `references/elements/section-info.md` lines 622 to 629.

## `row-expands`

Only the hovered row opens: height grows from about 19-177px to 240-460px, pushing later rows down while the others collapse into strips. 0.5s cubic-bezier(.25,1,.5,1). An index becomes a gallery. Needs a stable pointer path, so give a row no neighbour that jumps under the cursor.

- Build: Read `references/elements/motion.md` lines 1322 to 1329.

## `scattered-prints`

~10 unrotated portrait prints 150x205, no borders, scattered with wide gaps round a centred 30px wordmark, bottom row bleeding off, rising at different scroll rates. Or 3-4 crops ~325px wide staggered with two caps phrases. Photos are the only colour. Spacing must feel placed.

- Build: Read `references/elements/hero.md` lines 1375 to 1383.

## `single-file-spine`

Every project in one narrow column on the centre axis or a rail, images at natural ratio about 434-580px wide, 26-120px apart, no sections or headings. Name and place in a small column beside each. The length of the list is the proof.

- Build: Read `references/elements/section-info.md` lines 789 to 796.

## `split-pinned-half`

A 50/50 split: one half pins a panel or photo with copy at its foot while the other scrolls macro, model and detail shots, or rows on 1px rules that swap the pinned photo. Fill can step lighter per image. For one product or person with several images.

- Build: Read `references/elements/section-features.md` lines 978 to 985.

## `staggered-hung-images`

Images never share a row: two 580px images with tops offset 180px, then widths change to 553, 453 and 933 centred, left edges stepping x=100, 760, 252. Gaps 120-200px, caption under each. Two objects per viewport for commerce, one for a gallery.

- Build: Read `references/elements/layout.md` lines 764 to 785.

## `true-ratio-gallery`

Each work keeps its own proportions, uncropped. Set a max width per column, align the images to the bottom of the row so tops stagger and titles share one baseline, or centre them on the row midline. For art, architecture and anything where a crop would be a lie.

- Build: Read `references/elements/section-info.md` lines 664 to 680.

## `uncropped-native-plate`

Native ratio, no radius, shadow, tint or inner caption. Fix one dimension: height up to 720px for a sequence, or a 330-420px column with unequal heights for an index. Interface stays neutral so all colour comes from the work. Caption below, 13px, centred or left.

- Build: Read `references/elements/media.md` lines 336 to 354.
