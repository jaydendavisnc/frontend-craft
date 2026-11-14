# Show who is behind it

22 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `colour-field-cutout` (loud)

A full-screen flat field of the brand colour with one cut-out person or object on it, large and bleeding off the bottom edge, with type set against the empty side. An ordinary photograph suddenly looks like a campaign.

- Build: `composition.md` 11.
- For an ordinary business: One person or product from the set, cut out with scripts/cutout.swift.

## `columns-take-turns` (loud)

Four to six tall pictures side by side at full height, each a sliver with a name running up its edge. The one you hover or tap swells to take most of the row and its caption slides in.

- Build: `composition.md` 7.
- For an ordinary business: People, branches, products or chapters.

## `film-strip` (loud)

A pinned scene where scrolling down walks you sideways past pictures of different widths, 26 to 50vw, each with one short line such as a time of day. It starts with a large title as the first frame. Ordinary steps become a walk past a wall.

- Build: `composition.md` 5.
- For an ordinary business: A day at the business, the journey of an order, the life of a loan.

## `word-behind-subject` (loud)

A photograph fills the screen and one huge word, 18 to 26vw, runs behind the person or object in it, so the letters pass behind a shoulder and come out the other side. It reads like a magazine cover. Three layers: the picture, the word, the same picture's subject cut out on top, each moving at its own speed on scroll.

- Build: `composition.md` 1. Make the top layer with scripts/cutout.swift, or render on a transparent ground.
- For an ordinary business: Any business with one person or object worth looking at. A baker behind the word Bread, a van in front of a town's name.

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

## `hero-shrinks-into-a-card-and-gets-signed` (loud)

As you scroll the first 840px, the full-viewport portrait contracts on its own centre: at 360px scrolled it is about 78% of the viewport each way, at 600px about 48%, and at 840px a 480x310px card (33% wide, 34% high) that has also lost colour to an olive-grey tint. The page around it has already gone from off-white to dark olive. Two lines of 106 to 110px type, one high-contrast serif in muted neon and one bold grotesque in off-white, run in opposite directions behind the card at its vertical middle, so the card cuts both lines. A neon handwritten stroke then draws itself over everything, starting as one slash at 600px and complete at about 1000px, spreading to 55% of viewport width and well past the card edges.

- Build: Section height 240vh, inner sticky 100vh, grid centred. Scrub progress p from section scroll. Image: animate width 100vw to 33vw and height 100vh to 34vh between p 0 and .45, object-fit:cover, and filter grayscale(0) to grayscale(1) plus an overlay multiply. Page background: interpolate on body from light to dark between p .05 and .25. Two marquee rows absolutely centred with z-index below the image, font-size clamp(64px,7.6vw,110px), line-height .9, translateX bound to scroll in opposite directions (row 1 -0.35px, row 2 +0.35px per scrolled px). Signature: inline SVG path with pathLength=1, stroke-width 16 at 1440, stroke-linecap round, stroke-dasharray 1, stroke-dashoffset 1 to 0 between p .3 and .7, z-index above image, width 55vw. Use CSS scroll-driven animation-timeline:view() where supported, with a small rAF fallback.
- For an ordinary business: A founder's real signature, a head baker's handwritten note or a practice owner's name written across a small photo reads as a personal promise, and it costs one traced SVG. The shrink turns a big banner into a framed picture on the wall.
- Depends on: A portrait or object that survives being small, one real hand-drawn SVG path, one saturated accent.

## `name-rail-repaints-the-whole-screen` (loud)

The home page is one screen that does not scroll. A rail of ten small glass pills sits at the left, vertically centred, 38px apart in 16px type. Hovering a pill replaces the entire viewport within about a second with that client's own composition: one a huge olive arch with a phone card at lower right, one a figure made of paint with a monitor at upper right, one a full-bleed skin photograph with a phone card at left, one two colour fields split by a giant curve with an oversized smile mark. Each has a name in an 88px light serif and short lines in a different position, and the rail and header stay fixed. Leaving the rail returns to the default screen, and clicking opens the case study.

- Build: Stage fixed inset:0. Rail: position:absolute; left:24px; top:50%; translateY(-50%); flex column; gap 6px; pills with padding 4px 16px, background rgba(255,255,255,.14), backdrop-filter blur(10px), border-radius 999px. One section per item, absolutely stacked, opacity 0, each with its own hand-placed children. On pill hover or focus: active panel opacity 1 over 450ms, children translateY(16px to 0) staggered by 50ms. Preload panel images on first pointer movement. Pills are real links. On touch, stack the panels as a normal scrolling list.
- For an ordinary business: A bakery's rail of cakes, breads and pastries, each repainting the screen in its own colour and photo; a small practice's five services, each with its own poster. Fewer items make it easier.
- Depends on: Bespoke layout and images per entry, about 6 to 10 of them. Lenis and 3 videos on the site, no canvas; PP Eiko at weight 240 and Basis Grotesque.

## `walk-down-a-tall-portrait` (loud)

One dark section 2970px tall (3.3 viewports at 900px) holds a single portrait 3008x3300px, more than twice the viewport width, so the page only ever shows head, neck and shoulders. A 110px white headline and five lines of body sit centred on the empty blue backdrop above the head, in the top 60% of the first screen. The ear cup and then the face pass through the frame with no text on them for about 1.5 viewports (y=3480 to 4560). The model's dark pleated shirt then fills the frame edge to edge and becomes the ground for three small white paragraphs, in a 590px column starting 29% from the left. The picture moves at plain scroll speed, so the whole effect comes from the size of the photo and where the copy is placed on it.

- Build: section{position:relative;height:330vh;overflow:hidden;background:linear-gradient(#59798e 0%,#6b8da8 70%,#000 100%)} .portrait{position:absolute;top:0;left:50%;transform:translateX(-50%);width:209vw;height:auto;max-width:none}. Sample the gradient stops from the photo's own top and bottom so no section edge shows. Place text with absolute top values in vh read off the photo: headline at about 12vh on the empty backdrop, nothing from 110vh to 210vh, small paragraphs from 225vh on the dark area, colour #f5f5f7, 17px/1.4, width 590px. No scroll code at all.
- For an ordinary business: A bakery shoots one tall photo of a baker in a dark apron, sets the headline on the plain wall above the head and the opening hours on the apron. A dentist can do the same with a dark scrub top and one phone photo.
- Depends on: A vertically composed portrait with generous empty backdrop above and a large dark garment below, at least 3000px wide. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `caption-broken-around-the-picture`

A small black image card about 31% of viewport width sits on a white page, off-centre, and its 15px caption is broken into three pieces placed around it: the first words sit above its left edge, the next ones to the left of it at mid-height, and a date range to the right. Another card further down has a two-line caption whose second line is indented by about 8% of the width. The small text is scattered deliberately, so the image seems to hold the words in orbit. On a very restrained black and white page, that is enough to feel designed.

- Build: Grid 12 columns. Image spans columns 5 to 8. Caption pieces are separate spans placed in the grid: piece 1 at column 4 to 5, aligned to the image's top with translateY(-1.4em); piece 2 at column 3 to 4, align-self:center, text-align:right; piece 3 at column 9, align-self:center. Size 15px, line-height 1.3. On phones, gather them into one line under the image. Read aloud order must still make sense in the DOM.
- For an ordinary business: 'Baked / since / 1962' around one photo of the first shop; 'Open / until / six' around a door. No new assets, only a decision about where words go.
- Depends on: A phrase that can be split, and generous white space.

## `subject-dissolves-into-ground`

The figures' torsos are never cut by the section edge. Over the lower 35% of the photo they fade into the pale paper colour, so they seem to rise out of mist. The panel then ends in a hard horizontal cut against the next full-bleed photo, a blue backdrop that starts at a man's hair with no gap. One soft edge and one hard edge meet on the same line. Whether the fade is baked or masked could not be determined.

- Build: .figure{-webkit-mask-image:linear-gradient(#000 62%,transparent 100%);mask-image:linear-gradient(#000 62%,transparent 100%)} over a background equal to the page ground, or bake the fade into the file. Set the next section with margin:0 so it butts directly against it.
- For an ordinary business: A bank's team portrait fades at the waist into the page colour, so a phone crop never cuts people awkwardly.
- Depends on: Subjects that can fade at waist height and a flat ground colour.

## `statement-with-annotation` (loud)

One sentence, 48-92px, on paper colour, with a single hand-drawn stroke on one or two words: wobbly underline, ring, 3px accent. Stroke is an SVG path, not a CSS underline. ~160px of clear space above and below. Real tiles or line art rise at the fold.

- Build: Read `references/elements/hero.md` lines 1121 to 1144.

## `texture-first-loop` (loud)

Make footage nearly abstract: heavy horizontal motion blur, faces never sharp, or slow macro in near black with one edge light. One saturated note at most. Radius 16 in a panel or full 100vh. Type or a translucent UI card sits directly on it, no scrim.

- Build: Read `references/elements/media.md` lines 1635 to 1646.

## `authored-portraits`

Portraits in one commissioned hand: black-line busts on a 1px rule with skin as the only fill, hatched circles on a dotted bus line, or depth-of-field overlap with the focused face sharp. The treatment is the signature.

- Build: Read `references/elements/section-proof.md` lines 1360 to 1367.

## `founder-bio-split`

One named person as the pitch. 50/50: a 676 by 1000 greyscale portrait cropped to the waist beside a bio in the page's display serif at 63/68, link pinned to the photo's base. Or a 56px greeting on ink beside an offset-framed portrait.

- Build: Read `references/elements/section-proof.md` lines 1320 to 1338.

## `hanging-quote-on-grid`

No card. Two columns on the page grid, 32/40 quote at weight 500, tracking -2%, opening mark hung left of the text edge so the text stays on the grid. Name and role pinned to the base at 14px, customer logo right-aligned on that line. Pair one long quote with one four-word quote.

- Build: Read `references/elements/section-proof.md` lines 177 to 197.

## `letter-or-interview`

One person at length. A 766px square paper card with 48px avatar, ruled heading, 16/28 candid bullets and a signature. Or a full-screen question and answer split by 1px rules, one exchange per viewport. Use when you have a real voice and no logos.

- Build: Read `references/elements/section-proof.md` lines 463 to 470.

## `one-backdrop-portraits`

Different people cut onto one ground: 170 to 320px portraits, radius 0 to 24, a single warm or neutral backdrop, 14 to 18px name, muted credentials. Separate headshots read as one shoot, even when taken years apart.

- Build: Read `references/elements/section-proof.md` lines 1255 to 1262.

## `one-light-one-grade`

Fix one time of day, one light direction, one colour bias across every subject, so warm-cool spread stays under 10 even if brightness swings. Crop to two ratios at most. Lift blacks 7-9%, hold highlights under 96%, saturation about 70%. Dusk amber for drama, matte daylight for calm.

- Build: Read `references/elements/media.md` lines 196 to 224.

## `quiet-paragraph`

No headline size at all. A 19px paragraph or lettered list starting at y~270 under a 40px avatar and 14px name, or 12-16px text top-left at a 10-18px inset. Confidence by refusal. Portfolios, labs and archives only. Line length and tone carry everything.

- Build: Read `references/elements/hero.md` lines 1244 to 1252.

## `single-measure-column`

One centred 580-640px column for everything: bio, rows, media. On 1440 that is x=400-1040. Index rows split it into three columns at 224 pitch. Optional 1px dashed side rules and 48px inner padding. Pages often under 1600px tall.

- Build: Read `references/elements/layout.md` lines 1062 to 1068.
