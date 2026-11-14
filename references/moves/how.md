# Show how it works

45 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `film-strip` (loud)

A pinned scene where scrolling down walks you sideways past pictures of different widths, 26 to 50vw, each with one short line such as a time of day. It starts with a large title as the first frame. Ordinary steps become a walk past a wall.

- Build: `composition.md` 5.
- For an ordinary business: A day at the business, the journey of an order, the life of a loan.

## `window-that-opens` (loud)

Near-empty ground, a small picture in the centre, one word either side like a sentence with a photograph for a middle word. Scrolling pins it and the window grows until the picture fills the screen and the words slide away. You feel you walked through it.

- Build: `composition.md` 2.
- For an ordinary business: Use the moment the work begins: a door opening, a kitchen before service, a bench at dawn.

## `day-you-scrub`

A 24-hour ruler with a thin playhead you drag. As the hour changes, the sentence below changes, and a picture can change with it.

- Build: A day you scrub in `components.md`.
- For an ordinary business: What happens at the bakery at 4am, the clinic at noon, the depot at dusk.

## `drag-across-two`

A handle dragged across two pictures of the same place, before and after.

- Build: Drag across two pictures in `components.md`.
- For an ordinary business: Before and after a repair, a clean, a renovation, a month of bookkeeping.

## `notes-hung-on-the-picture`

One big photograph with small notes placed right on the things in it, joined by thin lines: a price on the shelf, a sentence beside a tool. The picture becomes a diagram of the business, and notes can arrive one at a time on scroll.

- Build: `composition.md` 8 and Notes on a picture in `components.md`.
- For an ordinary business: Anything with a workplace: a counter, a kitchen, a surgery, a van.

## `odometer-answer`

A huge number that rolls digit by digit like a machine as you drag a slider tied to your own figure. The result is about you, and it changes as fast as you can move.

- Build: Rolling numerals in `components.md`.
- For an ordinary business: Interest earned, time saved, weight of flour, miles covered.

## `sentence-form`

A line of display type with blanks in it. The visitor completes the sentence in place, and it answers them.

- Build: A form that is a sentence in `components.md`.
- For an ordinary business: Any enquiry: I need a table for two on Friday.

## `one-bezel-free-window-for-the-whole-page` (loud)

A rounded rectangle with no device frame starts about 433px wide in the hero, settles at about 326x705px (23% of the width, 78% of the height) and stays pinned at viewport centre through most of the page: to about 1,250px, then again from about 3,400px to 6,800px. A 40px heading to its left and a short paragraph to its right scroll past at page speed at staggered heights, while the page ground flips green, white, black, white, black. Inside the window, screens replace each other by sliding up within the mask: a hand holding a tag, a black panel with a 3D star, a ring chart, a full green number pad. It plays like one film in one window. The page scrolls in a nested 9,744px smooth-scroll container, the window contents are per-chapter mp4 and webm files, and there is no global GSAP, Lenis or THREE.

- Build: Column of chapters, each 150vh, with heading left and paragraph right. Stage position: sticky; top: 50%; transform: translateY(-50%); width: min(23vw, 340px); aspect-ratio: 326/705; radius 50px; overflow: hidden; z-index: 2. No bezel. Each chapter owns one panel inside the stage; translateY from 100% to 0 tied to the last 30% of its chapter. Body background transitions on chapter change, 300ms. Clips all 9:16, same safe area.
- For an ordinary business: A dentist keeps one tall window of the same patient through check-in, clean, X-ray and result; a bakery keeps one window of the same loaf from mixing to shelf.
- Depends on: A set of matching vertical clips or screens, and copy short enough to pass either side.

## `pinned-mess-then-one-calm-panel` (loud)

Under a centred 40px heading, a wide collage fills about 85% of the width: a receipt photo, a stack of green spreadsheets, a policy document, forms, app icons and chat bubbles, all joined by thin curved lines. It holds in place from about 4,200px to 4,950px of scroll. At about 5,000px the heading swaps to its reply and within about 200px of scroll the whole collage fades to a ghost at about 10% opacity, while one white chat panel about 210x290px appears at centre. From 5,250px to 5,650px that panel fills with a request and ticking steps and a second panel appears beside it, over a faint grey wireframe of the same scene. It runs on two dotLottie files, one for the old way and one for the new; frames differ by scroll position but I did not separate scrubbing from timed playback.

- Build: Track calc(100vh + 1700px) with a sticky inner 100vh stage. Heading fixed at top of the stage, two text states crossfaded at 44% progress over 150px. Layer A: the collage, SVG or Lottie. At the same point animate layer A opacity 1 to .1 and filter: grayscale(1). Layer B: one 210px white panel, scale .96 to 1, with lines of text appearing as progress runs from .5 to 1. Keep layer A on screen as a ghost; it is what makes the calm legible.
- For an ordinary business: A dentist piles up forms, reminder cards and phone notes, then fades them behind one booking card; a bank does it with a branch visit's paperwork.
- Depends on: A truthful drawing of the old process with 10 to 15 real artefacts. No WebGL.

## `screen-in-the-picture-becomes-the-page` (loud)

A light section shows a heading and a dark tablet about 30% of viewport width, with a small figure visible inside its screen. Scrolling enlarges the tablet past the viewport: in one frame the rounded bezel corner is still visible at top right, tilted slightly, with the page's pale background showing beyond it and the figure now at about 60% of viewport height. A moment later the screen fills the frame and the whole page is black, so the next chapter is already happening inside the device. There is no cut, wipe or section seam.

- Build: Pinned wrapper 250vh, sticky 100vh. Device is an absolutely positioned box, width 30vw, border-radius 3vw, background black, with the next section's content inside it. Find the scale that makes the screen cover the viewport: S = max(innerWidth/screenW, innerHeight/screenH) * 1.05. Scrub transform scale 1 to S with transform-origin at the screen centre, translate that centre to the viewport centre, add rotateZ(-3deg to 0). Keep inner content counter-scaled until p .7 so it does not look enormous: inner scale = target/outerScale. Fade the surrounding heading out by p .3. On phones, keep the same effect with the device at 70vw.
- For an ordinary business: A dentist's X-ray lightbox, a bank's phone app, a bakery's oven window: scroll up to it and go through it. Any shop window or doorway in a real photo can use the same trick with a clip-path hole instead of a device.
- Depends on: A framed object in the first section (screen, window, door, ring); a dark or flat inner scene so the scale-up stays sharp.

## `scroll-scrubbed-dolly-into-the-product` (loud)

The first screen is a wide photographic valley with a tiny desk and laptop in the lower middle, and over about 1,350px of scroll the camera pushes in without a cut. At 500px the desk fills the width, at 1,000px the laptop screen fills about 75% of the frame and the dashboard is legible, and at about 1,300px the surroundings are gone and only the dark interface remains on a dark ground. The headline, form and legal pill fade out by about 500px while a sticky 1440x900 stage holds under the nav. I read the video clock while scrolling: 0s at 0px, 2.36s at 500px, 4.72s at 1,000px, on a paused 6.4s clip, so it is a true scrub. Page height then drops from 13,033px to 11,683px and scrollY jumps back, so the track appears to be removed after one pass and the move does not replay (removal inferred).

- Build: Outer track height calc(100vh + 1350px). Inside it position: sticky; top: 0; height: 100vh; overflow: hidden. Muted video with object-fit: cover, preload auto, encoded all-keyframe (ffmpeg -g 1) or seeking stutters. In requestAnimationFrame set video.currentTime = progress * duration, about 0.0047s per px of scroll, easing toward the target by 0.15 per frame. Overlay text opacity = 1 - progress / 0.37. Mask the top of the video with a linear-gradient from transparent at 10% to opaque so it sinks into the page ground. End the clip on a frame colour-matched to the next section. Under prefers-reduced-motion show a poster and skip the track.
- For an ordinary business: A dentist films one gimbal walk from the street door to the chair; a bakery pushes in from the shop window to the crumb of one loaf. One real unbroken 6-second move, shot on a phone, is enough.
- Depends on: One continuous clip from wide shot to screen (3D render, AI video, or a drone plus macro shot), all-keyframe encoding, native sticky. No global GSAP, Lenis or THREE on the page; the scrub drives a plain video element.

## `sentence-parts-so-the-subject-falls-through` (loud)

On a black pinned screen a figure stands centred at about 70% of viewport height, and three centred lines of uppercase text at about 88px (measured from a 98px line pitch) sit across it. Scrolling turns the figure around and it starts to fall away from the camera while the words move apart horizontally: first the gaps widen until the lines run past both viewport edges with a figure-width gap in the middle, cropping the outer words. The type then scales up hard, until one word is about 45% of viewport width and others are sliding off the top, as if the camera were passing through the sentence. The figure ends at about 8% of viewport height, alone in the dark, and the next scene opens around it.

- Build: Pinned section 400vh, sticky stage 100vh, perspective:800px, overflow:hidden. Wrap each word in an inline-block span with --dx set from its offset from the line centre (word centre minus stage centre, in px). Scrub p 0 to 1. Phase 1, p 0 to .5: each word translateX(calc(var(--dx) * var(--spread))) with --spread 0 to 1.2, keeping one central word on axis. Phase 2, p .5 to .85: translate3d the whole block with translateZ 0 to 700px so the words grow and pass the camera, opacity to 0 between .75 and .85. Subject is a transparent image or video behind the text with scale 1 to .12 over p .15 to .9 and transform-origin centre. Use font-size clamp(44px,6.1vw,88px), line-height 1.1. Under prefers-reduced-motion, show the sentence still.
- For an ordinary business: No 3D needed. A bakery's line about one loaf can part around a cut-out loaf as it drops toward the table; a bank's sentence can open around a single key. Keep it to one use per page.
- Depends on: One isolated subject on a plain ground and one short sentence, at most about 10 words.

## `figures-lifted-off-a-fading-document`

A 496x330px pale tile holds a grey bill 308px wide, washed out to low contrast and dissolving into grain toward the tile's foot. Three white pills 44px tall, each with a small sparkle icon, float across the paper's edges carrying one value pulled from it: a name, a code, an amount. They are the only sharp, full-contrast things in the tile, and they overhang the sheet by 23 to 50px. The neighbouring tile uses the same contrast logic in depth, with one sharp dark card over two blurred cards stacked behind it.

- Build: Tile position: relative; aspect 3/2; background #ECEBE6. Document at 62% width, opacity .35, mask-image: linear-gradient(#000 45%, transparent 95%), plus an SVG feTurbulence noise layer at .25 with mix-blend-mode: multiply. Pills absolute, height 44px, radius 999px, white, box-shadow 0 8px 24px rgba(0,0,0,.08), 16px text, overhanging the sheet edge by 25 to 50px. Depth version: back cards filter: blur(8px), opacity .5, each 16px higher and 6% narrower. Motion on this tile was not observed; a 120ms stagger with an 8px rise is my suggestion.
- For an ordinary business: A dentist fades an invoice and lifts out date, cost and what is covered; an accountant does it with a tax letter; a bank does it with a statement.
- Depends on: A real-looking document and short plausible field values. No imagery budget needed.

## `hand-drawing-among-the-photos`

After a run of photographs the page switches register to a hand-inked axonometric drawing of the development. Neighbouring houses are left as bare outlines while the new buildings and trees carry blue, grey and green washes. It runs about 85% of the viewport width on the same paper ground with no frame, so it sits like a plan on a drafting table. The only words are a 13px caption near its top left. It shows how the plots connect, which no photograph could.

- Build: Transparent PNG or SVG. img{display:block;width:85vw;margin:0 auto} on a warm paper ground, with mix-blend-mode:multiply if the scan has a white ground. Caption absolute at top left, 13px. Colour only the subject and leave the surroundings as line.
- For an ordinary business: A bakery draws a cutaway of its oven. A dentist draws a plan of the practice showing the step-free route. Colour only what matters.
- Depends on: One real drawing. A pen and a scan are enough; the hand is the point.

## `interface-on-its-real-mount`

The app section is one grey panel 1200px wide on a white page. The interface is not in a floating phone: a dark phone 820px wide is clamped to real handlebars that run out of both sides of the panel, cut by its edges, with a stem dropping out of its bottom edge. The screen shows a speed dial, ride stats and a dark map. Above it sit an 80px title, a small button and four one-line icon features.

- Build: Panel: max-width:1200px;margin:auto;background:#f0f0f0;overflow:hidden. Image: transparent render or photo with the mount wider than the panel, so it runs out of the crop on both sides; img{width:100%;display:block}. Device about 68% of panel width, real interface on screen.
- For an ordinary business: A bakery shows its order page on the tablet on the real counter next to the till. A dentist shows booking on the reception screen.
- Depends on: A real or rendered view of the interface where it is actually used.

## `money-chips-at-hand-height`

On the right half of a rounded panel, a woman at a crossing holds a phone out at waist height and looks over her shoulder. Three stacked white chips, a 238x140px value card with a small line chart and two 70px-tall holdings pills, sit on her torso level with the phone, so the phone seems to be emitting them. Her face and the upper half of the frame stay clear. In a sister chapter two 194x66px pills sit exactly in the gap between a hand drawing a card from a bag and a hand holding a phone.

- Build: Image panel position: relative. Chip stack absolute, left 28%, top 42%, width 240px, gap 5px. Value card radius 28px; pills radius 36px; white at 95%; box-shadow 0 12px 40px rgba(0,0,0,.18). Align the top of the stack to the hand. Never cover a face. Let the phone emerge from behind the stack by no more than 20px.
- For an ordinary business: A dentist sets a next-visit chip beside a patient's hand; a bakery sets today's bake beside the baker's hands. Place the slip where the person is already looking or reaching.
- Depends on: Photography of a person holding the phone or card, face turned away from the lens, with calm clothing at mid-body.

## `money-written-straight-onto-the-people`

In a 571x571px rounded tile, a 7.5s video of two friends at a picnic writes a budget directly onto the scene. A white word appears beside the man, its amount appears across from it near the woman, then a second row and a third row arrive below it. No card, pill or panel sits behind the numbers; plain white text lies on clothes and grass. I sampled it at 0.9s intervals and saw one pair, then two, then three.

- Build: Square tile, outer corners 48px. Muted clip or photo as ground, linear-gradient(180deg, transparent 40%, rgba(0,0,0,.25)) over it. Three absolute rows at top 36%, 50%, 64%; labels left 12%, amounts right 12%; 26px/1 weight 500 white with font-variant-numeric: tabular-nums and text-shadow 0 1px 12px rgba(0,0,0,.35). Reveal rows 900ms apart, each 400ms opacity with an 8px rise. Bake it into the video if you need it robust. Row positions are estimates from small frames.
- For an ordinary business: A bakery writes three ingredients and their farms over a photo of the baker; a dentist writes three treatment prices over a relaxed patient. Put the numbers on the picture with no card.
- Depends on: A warm real-feeling photo with calm mid-tones, and three short values. Here it is a webm in the tile.

## `named-speech-box-replaces-the-explainer`

After a hand-drawn envelope loader on white, the scene opens on a full-bleed illustrated roadside with a character standing centred, about 80% of viewport height, looking at the reader. Over her lower body sits a white speech panel about 50% of viewport width, slightly skewed so no edge is quite straight, with a blue tilted name tab attached to its top-left corner and small hand-lettered capitals inside. A blue square arrow button sits at the panel's bottom-right, which presumably advances it (inferred, not tested). The opening line of the piece is delivered this way, by someone, with no nav bar on screen. I saw only this first line, not what follows.

- Build: Fixed panel: left 50%, bottom 6vh, translateX(-50%), width min(52vw,720px), padding 28px 36px, background white, border 2px solid ink, clip-path polygon with corners nudged 1 to 2% so it looks cut by hand. Name tab: absolute, top -22px, left 12px, rotate(-2deg), accent ground, 15px caps. Text types on at 28ms per character; arrow button is keyboard focusable and Enter or Space advances. Clicking mid-type completes the line. Provide a skip control and render all lines in the DOM for screen readers.
- For an ordinary business: A dentist's receptionist photographed once and given a name tab can walk a nervous patient through a first visit, one short line at a time, instead of a wall of FAQ text.
- Depends on: A named character or real person with a distinct voice, and copy written as speech.

## `product-moment-dissolves-into-the-page`

Product shots are not screenshots in frames. A dark interface sits straight on the near-black page, and its far side and lower rows simply fade into the background, with no window edge. In the clearest example, a bright thread panel about 33% of viewport width sits forward at left, overlapping a kanban board that dims to almost nothing by the right edge, so the eye reads one exchange in the product and only senses the rest. The type inside is real-looking and legible, and a message is shown part-way through being typed. It looks like one specific moment of use, not a tour of the interface.

- Build: Build the UI crop in HTML or use a real capture at 2x. Wrapper position:relative; overflow:hidden. Apply mask-image: linear-gradient(90deg,#000 45%,transparent 95%), linear-gradient(180deg,#000 60%,transparent); mask-composite:intersect. Foreground panel: absolutely placed, overlapping by 12% of its width, background slightly lighter than the page, 1px border at 8% white, box-shadow 0 30px 60px rgba(0,0,0,.5). Write realistic content that tells one small story. Whole thing width 100% of the content column, bleeding past the fold.
- For an ordinary business: A bank shows one notification and the balance it changed, with the app fading out. A clinic shows one booking confirmation. One real moment beats a full-screen mock-up.
- Depends on: Software or a form worth showing, a dark or plain ground matching the UI. No canvas, GSAP or Lenis found; Inter Variable and Berkeley Mono.

## `ribbon-threads-between-the-layers`

A thick glossy tube, about 30px wide on a 1440 screen, enters from the page edge and travels with scrolling. In the intro section it arcs in a deep blue curve behind the 144px heading and wraps around a small image card, passing behind the card and showing again beneath it. In a later section it is cyan, running behind a three-line heading and down past a paragraph. It always sits between the page ground and the content, so it gives the flat layout physical depth, and it joins sections that would otherwise be unrelated.

- Build: Absolutely positioned SVG, full section width and height, z-index 0, with text and cards at z-index 1. One path hand-drawn over a screenshot of the finished layout, stroke-width 30, stroke-linecap round, fill none, pathLength=1. Scrub stroke-dashoffset 1 to 0 with the section's scroll, using animation-timeline:view() or a rAF scroll listener. To pass in front of one element, add a second clipped copy of the path at z-index 2 with a clip-path covering only that crossing. Depth comes from a subtle gradient across the stroke. Set vector-effect:non-scaling-stroke and redraw for phones, because the route will not match.
- For an ordinary business: A dentist's patient journey or a bank's mortgage steps can follow one line through the page; a bakery can use a piped icing line or a ribbon of dough.
- Depends on: A settled layout, since the path is hand-routed around it; one accent colour per section. The site's version is WebGL (inferred from full-page canvases), but flat SVG keeps the idea.

## `unseen-hand-edits-the-curve`

Behind a heading, the whole viewport is filled by a single thick grey vector outline, about 12px wide on near-black, far too large to see its full shape. A blue anchor point with two handles on thin blue lines sits on the curve, and a large arrow cursor that is not the visitor's is dragging it. With no input from me the curve changed across frames 1.2 seconds apart, with the anchor and cursor in new places each time. It looks exactly like a designer working live in a drawing tool, at a huge scale. The heading sat blurred at lower left while this ran.

- Build: One SVG path sized to 140vw so it overflows, stroke 12px at #3c4650, fill none. Define 6 keyed paths with the same number of points, and interpolate point arrays over 1.6s with ease-in-out, holding .8s on each. On top: circle r 10 fill blue stroke white at the active anchor, two circles r 7 at its control points, 1.5px blue lines between. Fake cursor: an SVG arrow 56px tall pinned to the active anchor, offset 8px. Pause when off-screen and under prefers-reduced-motion, showing one static frame.
- For an ordinary business: A sign painter's letterform, a bakery's logo being adjusted, a budget line a bank's cursor drags upward, a dentist's smile line being redrawn on a plan. Show the work happening.
- Depends on: A meaningful outline, such as a logo or letter. SVG only.

## `before-after-collapse` (loud)

The section argues by scrub: pinned, a scattered collage of the old way (receipts, forms, emails with dashed links) fades to pale wireframe as the heading swaps and one clean window remains. Or a scene flips to wireframe for a data chapter. Motion carries the claim itself.

- Build: Read `references/elements/motion.md` lines 875 to 882.

## `camera-move-demo` (loud)

The camera does the storytelling: the demo opens zoomed hard into a prompt at about 100px type, then pulls back to the whole builder, or a full window pushes in 3x until one button fills the panel. Attention lands exactly where the claim is. Use for one hero only.

- Build: Read `references/elements/motion.md` lines 1632 to 1639.

## `dimensioned-technical-drawing` (loud)

1px grey wireframe at about 330px with centre lines, arrowed extension lines and rotated 12px mono dimensions, then cross-fade to the real object at identical position and scale. Or a large axonometric with neighbours pale and only the project tinted. Real dimensions only.

- Build: Read `references/elements/media.md` lines 655 to 664.

## `exploded-teardown` (loud)

One pinned 3D subject or layered diagram is scrubbed apart: lid, board and base separate about 250px along dotted guides, or panes fan in perspective. Ground steps tone between chapters, and only copy and the object change. Prerender frames or use a real model. Worth it only for a physical product.

- Build: Read `references/elements/motion.md` lines 884 to 891.

## `pinned-photo-card-over` (loud)

Full-bleed photo pinned at 100vh while a 770px flat card scrolls up over it, holding small eyebrow, 40px heading, lede, action and a second image. Text never sits on the photo. Hold for one or two viewports.

- Build: Read `references/elements/layout.md` lines 994 to 1010.

## `window-opens-to-full` (loud)

A contained window pins and scales with scroll, about 750px wide to 2x, until it crops at the panel edge and UI text reads huge. Set transform-origin on the focal point, stop the scrub about a quarter early so the end holds, and avoid will-change, which blurs text.

- Build: Read `references/elements/motion.md` lines 809 to 828.

## `wireframe-to-solid` (loud)

A 3D part rotates, then flips to line art at exactly the same position, scale and angle as the section ground changes. One moment per page. Use an edge pass or two registered images.

- Build: Read `references/elements/media.md` lines 1516 to 1525.

## `bleed-side-alternation`

Each section changes which edge the photo bleeds from: widths 700, 852, 816, or 42% of the viewport, with the text's left edge jumping to match and 260px of ground between. Photos start partway down the previous block, so the page descends as a staircase.

- Build: Read `references/elements/layout.md` lines 787 to 793.

## `companion-object`

One object stays on screen across several sections and changes as you scroll: a mark rotates 20 then 45 degrees, a phone swaps its screen, a model re-skins per project. Copy passes beside it. One object carries the story, so sections stop restarting.

- Build: Read `references/elements/motion.md` lines 902 to 909.

## `exploded-part-view`

Parts separated along one axis with equal gaps, lit from above, one soft shadow under the last part. Small numbered black dots on near-white, with the numbered specification in small caps below. Or silver plates with one accent plate, about 280px, reused as one object family.

- Build: Read `references/elements/media.md` lines 1529 to 1538.

## `focus-pull-on-code`

Black code window, every line blurred except one, with that token highlighted and a floating type hover card in 14px mono with a hairline. The blur moves line to line, like a focus pull.

- Build: Read `references/elements/product.md` lines 2022 to 2031.

## `frozen-interaction`

One menu or dialog at 1-2x over its app faded to 30%: 392px white menu, radius 12, soft shadow, selected row filled with a 2px accent bar, shortcut chips. A large cursor rests on the row. Keycaps may overlap the edge.

- Build: Read `references/elements/product.md` lines 524 to 533.

## `hand-inked-line`

Strict structure, slight tremor: 1.25-2px near-black line, 60-100px, pale filled nodes or patches as the only tone, at most one flat colour. Let the drawing encode meaning, such as branches multiplying per tier. Keep to margins, tiles and emblems, never behind text.

- Build: Read `references/elements/media.md` lines 757 to 779.

## `interlocked-panels`

706px image and 660px flat panel overlap: panel starts 65px below the image top and covers its right edge, with a stepped tab on one top corner. Rows swap sides. Hard corners, no shadow. Or photos hanging 290px past offset colour blocks.

- Build: Read `references/elements/layout.md` lines 795 to 816.

## `list-drives-pinned-stage`

A 444 to 672px list beside a sticky 584 to 800px stage, three to five steps at about 72vh each. Scroll sets the active step, time plays the change. Active full ink, others 30%, plus one bar or rule. Stage must stay full. Plain flow without JavaScript.

- Build: Read `references/elements/section-features.md` lines 855 to 905.

## `macro-material-crop`

Crop tighter than feels safe: object cut by the frame on two sides, texture left unretouched. Natural side light, square corners or one 12-20px radius across the set. Alternate macro with one frontal or wide frame for scale. No overlay, no caption inside the image.

- Build: Read `references/elements/media.md` lines 261 to 270.

## `one-bright-line`

Code panel cropped by the card edge on the left 43%, top-right radius 20, 1px top highlight. 11px language tabs. Every line at 25% ink except the single method line at full ink. Serves as texture with one readable point.

- Build: Read `references/elements/product.md` lines 969 to 978.

## `pinned-chapter-stage`

A pinned screen with a fixed skeleton where only contents change across three to seven chapters: a 100vh film with a foot caption on the emptier side, a shared rule, a time rail of ticks, or a stage flooded per product beside an 88px icon rail.

- Build: Read `references/elements/section-features.md` lines 948 to 955.

## `pinned-panel-scroll-column`

Viewport splits 40/60 on a 1px rule. Left panel stays fixed with logo, headline, actions and footer links; right column scrolls as a document. Panel needs a resident object. Also 50/50 colour panel with scrolling plates, or 1044px canvas with 348px side sheet.

- Build: Read `references/elements/layout.md` lines 739 to 762.

## `schematic-traffic`

The product is drawn as a diagram that runs: packets pass through a band, cards change state at a scan line, or speech flows along a ribbon into a capsule and leaves polished. Confined to one band under the nav, so it never competes with the headline.

- Build: Read `references/elements/motion.md` lines 1650 to 1657.

## `scrubbable-slow-motion`

A sentence appears word by word on a rule with per-token numbers under it, a candidates list beside it, and a scrubber labelled 30x slowed down, from Detailed to Realtime.

- Build: Read `references/elements/product.md` lines 2033 to 2042.

## `stacked-sheets`

Sheets about 1248 by 560px, radius 16, sticky at a top offset growing 14px per sheet so edges peek, shadow 0 30px 40px at 28% black. 72px left padding, 48px title, 20/30 copy, UI with a dark rail bleeding off the right. Three to six peers, block flow.

- Build: Read `references/elements/section-features.md` lines 957 to 976.

## `steps-showing-the-real-thing`

Three or four columns, each a small marker, a 32px tight title, 18/29 copy, then the real screen at full size with no window chrome: a picker, a form, a feed. Reserve copy height so the proofs start level. The first thing to try for any product.

- Build: Read `references/elements/section-features.md` lines 1036 to 1063.

## `sticky-visual-configurator`

For considered purchases. Left a sticky 870x560 stage, radius 20, one tone off the page. Right a 330px column of steps, each a 28px heading with dark lead and muted continuation, over option tiles radius 12. Later steps stay dimmed until the earlier ones are chosen. Dot progress on the right edge.

- Build: Read `references/elements/commerce.md` lines 1142 to 1149.
