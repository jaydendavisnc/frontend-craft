# Show what you get

112 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `bleeding-headline` (loud)

A heading so big it runs off the screen, cropped on purpose, with a picture butted hard against it. Scroll slides it sideways so the rest arrives. The page feels larger than the window.

- Build: `composition.md` 9.
- For an ordinary business: Works on a type-led page too. The word must still read.

## `colour-field-cutout` (loud)

A full-screen flat field of the brand colour with one cut-out person or object on it, large and bleeding off the bottom edge, with type set against the empty side. An ordinary photograph suddenly looks like a campaign.

- Build: `composition.md` 11.
- For an ordinary business: One person or product from the set, cut out with scripts/cutout.swift.

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

## `ground-takes-over`

The whole page changes colour as a scene arrives, with no edge between them, going dark for one scene and back.

- Build: Handoff: the ground changes in `motion/score.md`.
- For an ordinary business: One dark chapter past the middle of the page.

## `notes-hung-on-the-picture`

One big photograph with small notes placed right on the things in it, joined by thin lines: a price on the shelf, a sentence beside a tool. The picture becomes a diagram of the business, and notes can arrive one at a time on scroll.

- Build: `composition.md` 8 and Notes on a picture in `components.md`.
- For an ordinary business: Anything with a workplace: a counter, a kitchen, a surgery, a van.

## `pictures-inside-the-sentence`

A headline at 6 to 8vw where small photographs sit in the line at cap height, between the words, growing open as it enters. The eye keeps stopping to look and the sentence feels made for this business.

- Build: `composition.md` 3.
- For an ordinary business: Macro crops of what the business touches: oak, flour, thread, a stamp.

## `sheets-slide-over`

Full-height scenes stack like sheets. Each slides over the last, which sinks back and dims as it is covered.

- Build: Handoff: sheets in `motion/score.md`.
- For an ordinary business: Three chapters of a story, each with its own ground.

## `speed-aware-marquee`

One line of huge type crossing the screen, slow at rest and faster as you scroll, as though attached to your hand. Named places or trades rather than logos.

- Build: Speed-aware type in `motion/score.md`.
- For an ordinary business: Towns served, trades served, ingredients.

## `words-light-as-you-read`

A long sentence set at 4 to 6vw, almost invisible, each word coming up as it passes the reading line. A paragraph becomes a scene.

- Build: Words light up in `motion/score.md`.
- For an ordinary business: The one sentence that says what the business believes.

## `abstract-benefit-as-a-lit-scene` (loud)

Security is explained by one night photograph with no icons. A bike stands in a dark field under a single cone of blue light falling from above, a patch of lit green grass at its wheels and dim animal shapes around it. The frame is picked out by rim light. A 48px headline and two lines of small copy sit in the left 35% on the dark, level with the bike. The plate is 1424x801px, about 90% of the frame, with no overlays or boxes.

- Build: Plan the shot around one light source. Plate radius 8px, image object-fit:cover, text absolute at left:8.8vw;top:52%, h2 48px/1.1 white, p 16px/1.4. The dark ground gives contrast so no scrim is needed. Without a shoot, dim a normal photo with filter:brightness(.35) and add radial-gradient(ellipse at 50% 0,rgba(140,190,255,.5),transparent 60%) with mix-blend-mode:screen.
- For an ordinary business: A bank explains fraud protection with one photo of a front door at night under a porch lamp, in place of a shield icon.
- Depends on: One staged photograph with a single light source. Engines seen: none.

## `cursor-paints-the-other-self` (loud)

The first screen has no headline at all: a cut-out head and shoulders stands dead centre on off-white, about 92% of viewport height and 55% of its width, with faint contour lines behind it and only a logo, a shop button and a 100px-wide info card in the corners. Moving the cursor across the face opens a liquid, irregular blob about 10 to 20% of viewport width that shows the same head, in the same position and scale, wearing the helmet. The blob trails the pointer and leaves soft contour-shaped smears on the background as well as on the subject. Text only arrives after the first scroll, so the first thing a visitor does is play with the subject.

- Build: Stack two same-size, same-registration images in a position:relative box. Draw the top one into a canvas: each frame, on an offscreen mask canvas, fade with fillStyle rgba(0,0,0,.06) under destination-out, then stamp a soft radial gradient of radius 110px at the eased pointer (lerp .14 per frame) plus two smaller stamps offset by a slow sine for an uneven edge. Then on the visible canvas drawImage(topImage), set globalCompositeOperation='destination-in', drawImage(mask). Result is the alternate image only where the cursor has been, healing over about 1.2s. On touch, run the stamp along a slow Lissajous path for 3s after load. Under prefers-reduced-motion, show a plain two-state toggle.
- For an ordinary business: Two matched photos tell a story a sentence cannot: a dentist's smile before and after from a locked-off camera, a bakery's raw dough and baked loaf on the same board, a high street bank's branch in 1960 and today from the same pavement spot.
- Depends on: Two images with identical framing and registration (a cut-out helps); canvas 2D is enough, the site uses a WebGL canvas (inferred from a full-viewport 1440x900 canvas).

## `cut-outs-face-off-across-the-headline` (loud)

Two cut-outs bleed off opposite edges and face each other: on the left a helmet cropped by the viewport edge at about 23% of the width, on the right a head in profile at about 23%, each roughly 50 to 90% of viewport height. The gap between them, about 45% of the width, is the only place for type, which sits in two columns of two lines at 93 to 98px, line-height .82, serif above grotesque. The objects literally look at the words, and a neon scribble is hand-drawn across one word. Scrolling on, a full-bleed photo rises from the bottom with a hard straight edge and covers it all, and that photo holds both subjects together in one room.

- Build: Section 100vh, position:relative, overflow:hidden, background flat. Two absolutely positioned transparent PNG or WebP cut-outs: left:-6vw, width 30vw and right:-4vw, width 30vw, bottom aligned to the section. Text: centred block max-width 44vw, grid 1fr 1fr with gap 3vw, font-size clamp(56px,6.6vw,98px), line-height .82. Next section is a 100vw photo with margin-top:-100vh and sticky stacking so it slides over the pinned section: position:sticky; top:0 on the cut-out section, z-index 1 on the photo. Translate the photo inner image up by 12% over the rise for parallax.
- For an ordinary business: Any pairing works: a loaf facing a bag of flour, a retainer facing a smile, a pair of keys facing a front door. Put the sentence in the gap and then cut to the real scene showing them together.
- Depends on: Two clean cut-outs whose subjects point inward, and a follow-up photo that pays off the pairing.

## `hero-collapses-into-the-sentence` (loud)

On scroll the hero stays pinned while its frame shrinks towards the centre and the photo inside it keeps zooming in. At 360px of scroll the frame is about 60% wide and shows a dormer close-up, and at 720px it is about 21% wide. By then a centred statement is visible behind it, a label above, two lines of 18px text broken by the small picture covering their middle, and a link below. By about 960px the picture is a point inside the sentence and the line reads whole. Measured: outer clip scales 1 to 0 and inner image 1 to 4, both linear over 900px of scroll.

- Build: <section style='height:200vh'><div class='pin'><p class='statement'>...</p><div class='frame'><div class='inner'><img></div></div></div></section>. .pin{position:sticky;top:0;height:100vh;display:grid;place-items:center} .frame{position:absolute;inset:0;overflow:hidden}. On scroll: p=clamp(scrollY/innerHeight,0,1); frame.style.transform='scale('+(1-p)+')'; inner.style.transform='scale('+(1+3*p)+')'; hide the frame at p=1. The product of the two scales rises to about 1.33 near p=.4 before falling, which gives the push-in. The text never moves. Under reduced motion drop the pin.
- For an ordinary business: A bakery's full-screen oven door closes down to a small picture inside one plain sentence about bread. One image and a few lines of script.
- Depends on: A hero photo that still reads at 4x, and a short statement. Eight lines of JS or a scroll-linked animation.

## `line-drawing-resolves-into-the-room` (loud)

At first paint the whole viewport is a white wireframe on black: a two-storey interior with stairs and a mezzanine, drawn in 1px lines, with small clusters of pixel blocks drifting in the air. Shortly after, the same camera view is a fully lit, dark 3D room with warm shelf lighting, a figure on the stairs, a dog, an arcade cabinet, a neon sign and a stack of old monitors. Line drawing and render share exact perspective, so the room seems to be built in front of you rather than loaded. I saw the two states about two seconds apart and cannot say whether a timer or the pointer triggers the change.

- Build: Without WebGL: trace the hero photo into an SVG line drawing in the same viewBox. Stack svg above img in one box. Show the SVG first with stroke-dashoffset drawing on over 900ms, then on img.decode() reveal the photo: mask-image linear-gradient sweep over 800ms or a simple opacity 0 to 1, with the lines fading to 0 after. The photo must not move or rescale when it appears. With a 3D scene, render wire material first and swap materials when textures finish.
- For an ordinary business: An architect's or kitchen fitter's real plan drawing resolving into the finished photo; a bakery's pencil sketch of its shop front becoming the photograph.
- Depends on: One strong interior or object image and a traced line version in identical perspective. The site uses three 1440x900 canvases, Geist and Geist Mono; no global GSAP or Lenis found.

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

## `pinned-title-over-a-passing-photo` (loud)

A 1440x1865px photo shows green wooden cubes and painted balls hanging above blue cloth that meets an ochre floor. A serif capitals headline, effectively 126px and fitted to 1372px of the 1440px width, holds still near the bottom of the viewport while the photograph slides up behind it for at least 960px of scroll. A small caption holds still at the top. The objects seem to fall past the words, the ochre floor rises behind the letters, then the title is released and leaves with the picture's bottom edge. White type stays legible on both the blue and the ochre.

- Build: section{position:relative;height:226vh} img{position:absolute;top:0;left:0;width:100%;height:auto}. .title{position:sticky;top:calc(100vh - 190px);padding:0 34px}. Fit to width: set font-size:20px, measure the span, then transform:scale(containerWidth/spanWidth);transform-origin:left, which is how the site does it with a measured scale of 6.32. Serif capitals, weight 400, white. The site's pin is script driven under smooth scroll (inferred, no sticky in the title's chain); sticky gives the same result.
- For an ordinary business: A bakery shoots one tall photo of flour falling onto a bench, and three plain words stay still while it passes behind them.
- Depends on: A tall photo of at least two viewports with a colour change or an eye path running down it. Engine seen: Lenis smooth scroll, two videos elsewhere, no global GSAP, no WebGL.

## `screen-in-the-picture-becomes-the-page` (loud)

A light section shows a heading and a dark tablet about 30% of viewport width, with a small figure visible inside its screen. Scrolling enlarges the tablet past the viewport: in one frame the rounded bezel corner is still visible at top right, tilted slightly, with the page's pale background showing beyond it and the figure now at about 60% of viewport height. A moment later the screen fills the frame and the whole page is black, so the next chapter is already happening inside the device. There is no cut, wipe or section seam.

- Build: Pinned wrapper 250vh, sticky 100vh. Device is an absolutely positioned box, width 30vw, border-radius 3vw, background black, with the next section's content inside it. Find the scale that makes the screen cover the viewport: S = max(innerWidth/screenW, innerHeight/screenH) * 1.05. Scrub transform scale 1 to S with transform-origin at the screen centre, translate that centre to the viewport centre, add rotateZ(-3deg to 0). Keep inner content counter-scaled until p .7 so it does not look enormous: inner scale = target/outerScale. Fade the surrounding heading out by p .3. On phones, keep the same effect with the device at 70vw.
- For an ordinary business: A dentist's X-ray lightbox, a bank's phone app, a bakery's oven window: scroll up to it and go through it. Any shop window or doorway in a real photo can use the same trick with a clip-path hole instead of a device.
- Depends on: A framed object in the first section (screen, window, door, ring); a dark or flat inner scene so the scale-up stays sharp.

## `sentence-parts-so-the-subject-falls-through` (loud)

On a black pinned screen a figure stands centred at about 70% of viewport height, and three centred lines of uppercase text at about 88px (measured from a 98px line pitch) sit across it. Scrolling turns the figure around and it starts to fall away from the camera while the words move apart horizontally: first the gaps widen until the lines run past both viewport edges with a figure-width gap in the middle, cropping the outer words. The type then scales up hard, until one word is about 45% of viewport width and others are sliding off the top, as if the camera were passing through the sentence. The figure ends at about 8% of viewport height, alone in the dark, and the next scene opens around it.

- Build: Pinned section 400vh, sticky stage 100vh, perspective:800px, overflow:hidden. Wrap each word in an inline-block span with --dx set from its offset from the line centre (word centre minus stage centre, in px). Scrub p 0 to 1. Phase 1, p 0 to .5: each word translateX(calc(var(--dx) * var(--spread))) with --spread 0 to 1.2, keeping one central word on axis. Phase 2, p .5 to .85: translate3d the whole block with translateZ 0 to 700px so the words grow and pass the camera, opacity to 0 between .75 and .85. Subject is a transparent image or video behind the text with scale 1 to .12 over p .15 to .9 and transform-origin centre. Use font-size clamp(44px,6.1vw,88px), line-height 1.1. Under prefers-reduced-motion, show the sentence still.
- For an ordinary business: No 3D needed. A bakery's line about one loaf can part around a cut-out loaf as it drops toward the table; a bank's sentence can open around a single key. Keep it to one use per page.
- Depends on: One isolated subject on a plain ground and one short sentence, at most about 10 words.

## `sticky-stack-wipes-the-title` (loud)

Three full-width film stills are stacked. Each slide is 836px tall in a 900px viewport and sticks at top:0, so the top 64px of the next film always shows at the bottom under a 6px white rule. As you scroll, the next slide rises over the current one, and frames at 360px steps show that rule cutting horizontally through the giant title, leaving the tops of its letters above the line. The title neither fades nor moves: it is simply wiped by the next picture. The stack's container is 2524px tall, so three slides pass in about 1.8 viewports of scroll.

- Build: .slide{position:sticky;top:0;height:calc(100vh - 64px);border-top:6px solid #fff;overflow:hidden} with DOM order giving each later slide the upper layer. Title absolute at bottom:54px. Last slide position:relative so it scrolls away. No JavaScript at all.
- For an ordinary business: A dentist's three treatments stack as full-height photos, each with one big word, and each scroll wipes the last word away.
- Depends on: Stills with faces in the upper half, so the title never covers them. CSS sticky only.

## `walk-down-a-tall-portrait` (loud)

One dark section 2970px tall (3.3 viewports at 900px) holds a single portrait 3008x3300px, more than twice the viewport width, so the page only ever shows head, neck and shoulders. A 110px white headline and five lines of body sit centred on the empty blue backdrop above the head, in the top 60% of the first screen. The ear cup and then the face pass through the frame with no text on them for about 1.5 viewports (y=3480 to 4560). The model's dark pleated shirt then fills the frame edge to edge and becomes the ground for three small white paragraphs, in a 590px column starting 29% from the left. The picture moves at plain scroll speed, so the whole effect comes from the size of the photo and where the copy is placed on it.

- Build: section{position:relative;height:330vh;overflow:hidden;background:linear-gradient(#59798e 0%,#6b8da8 70%,#000 100%)} .portrait{position:absolute;top:0;left:50%;transform:translateX(-50%);width:209vw;height:auto;max-width:none}. Sample the gradient stops from the photo's own top and bottom so no section edge shows. Place text with absolute top values in vh read off the photo: headline at about 12vh on the empty backdrop, nothing from 110vh to 210vh, small paragraphs from 225vh on the dark area, colour #f5f5f7, 17px/1.4, width 590px. No scroll code at all.
- For an ordinary business: A bakery shoots one tall photo of a baker in a dark apron, sets the headline on the plain wall above the head and the opening hours on the apron. A dentist can do the same with a dark scrub top and one phone photo.
- Depends on: A vertically composed portrait with generous empty backdrop above and a large dark garment below, at least 3000px wide. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `window-rolls-up-and-the-card-drops-out` (loud)

At about 1,100px the window starts losing height from the bottom. By 1,400px it is a strip about 190px tall at the top of the frame, and by 1,550px it is a 225x50px pill, while the ground has gone black. A portrait card rises from the bottom edge as the window closes, and by 1,550px it has turned to landscape, tilted about 20 degrees, on a fan of five coloured cards with its heading alongside. The phone appears to close up like a blind and hand you the physical object.

- Build: Stage height scrubbed from 100% to 8% across 450px with transform-origin: top. Card starts translateY(100vh) rotate(90deg), ends at 0 with rotate(-20deg) over the same scroll range, delayed by 100px. Fan: 5 cards absolute, rotate from -30 to 10 degrees, scale in from .9 with 40ms stagger. Background to #000 at the midpoint.
- For an ordinary business: A clinic's screen closes and a printed appointment card fans out; a bakery's order screen rolls up and the box comes forward.
- Depends on: A physical object that can be shot or rendered, plus the pinned stage above.

## `benefits-as-numbered-figure-plates`

Where a template would put three icon cards, there are three tall columns split only by faint hairlines, with no card backgrounds. Each carries a tiny mono label at the top like a figure number in a technical manual, then a 1px isometric line drawing about 20% of viewport width, then a short title and two lines of grey text at the very bottom. The drawings are abstract, stacked plates, blocks and steps, all in the same line weight and angle. Above them runs a single 44px or so sentence, white for its first phrase and grey for the rest. Hovering the drawings did nothing in my test.

- Build: Grid repeat(3,1fr), each column border-left 1px solid rgba(255,255,255,.07), padding 24px, min-height 56vh, flex column with justify-content:space-between. Label: 11px mono uppercase at 35% white. Drawing: SVG, 1px stroke at 45% white, one isometric angle throughout, 30 degrees. Sentence above: font-size clamp(28px,3vw,44px), line-height 1.1, letter-spacing -.02em; second span colour at 55% white.
- For an ordinary business: A solicitor or dentist can number their three promises as Fig. 1 to 3 with simple line drawings of a key, a tooth and a clock, and instantly look more careful than an icon set.
- Depends on: Three simple line drawings made to one rule; a mono face for labels.

## `catalogue-card-flips-to-object-in-use`

A black wall of about 20 small cards in four columns, each about 23% of the width with a thin grey outline and one chamfered corner, staggered so neighbouring columns sit half a card out of step. Each holds a cut-out helmet at rest with a tiny name and year. Hovering replaces the cut-out with a full-colour photo of that same object in use, edge to edge in the card, and the outline turns neon. In one frame the hovered card also grows beyond its column, overlapping its neighbour and the edge of the wall. The grid is calm and monochrome at rest, so the single coloured card stands out.

- Build: Grid repeat(4,1fr), gap 16px; nth-child(even) margin-top:9vh for the stagger. Card: aspect-ratio 4/5, border 1px solid #2c2c2c, clip-path polygon with one 24px cut corner, position:relative. Two children: .specimen (cut-out, object-fit:contain, padding 12%) and .scene (object-fit:cover, inset 0, opacity 0, transform scale(1.08)). On hover or focus-visible: .scene opacity 1 and scale 1 over 380ms cubic-bezier(.2,.8,.2,1), .specimen opacity 0, border-colour accent, and on wide screens z-index 2 with transform scale(1.12) with transform-origin toward the grid centre. Keep the caption in the same place. On touch, first tap shows the scene.
- For an ordinary business: A bakery's cakes as clean cut-outs that flip to the birthday table; a dentist's treatment list where each item flips to a real smile; a bank's account cards that flip to the thing that account paid for.
- Depends on: A specimen shot plus an in-use shot for each item.

## `cropped-product-film-off-the-page-edge`

In a dark full-height section the left 38% holds a 22px statement and a four-row accordion with a dot on the open row. The right side holds a 1440x900 video placed at x=551, so about 550px of it runs off the viewport, and its edges are masked into the ground. The film shows a real pointer working through the app: opening a view, scrolling a list, hovering a row. The other rows' films wait paused at x=1991 in the same horizontal track, so changing row presumably slides the next one in (inferred from the layout; I did not click a row). The active clip started on arrival and read 1.01s, 2.42s, 3.93s while the others stayed at 0.

- Build: Sticky section 100vh, overflow: hidden, left column 551px. Flex track of videos, each 100vw by 100vh, object-fit: cover, translateX(551px) then minus 100vw per index, 600ms cubic-bezier(.2,.8,.2,1). Each video masked with a 10% top and bottom fade and linear-gradient(90deg, transparent, #000 15%). Play only the active clip via IntersectionObserver at .5; on ended, advance. Record at 1440x900 at 2x, cursor visible, 8 to 11 seconds per topic, starting mid-task.
- For an ordinary business: A bank records its real booking flow, a dentist the patient portal, a bakery the pre-order screen; crop so the film falls off the page edge.
- Depends on: A real product or demo account and tidy screen captures.

## `drag-the-cover-over-to-read-the-back`

Dragging the centred sleeve turns it over like a record. The back carries the same art with noise dissolved through it, a left-aligned list of about nine contents lines in 18px, a small edition mark at lower left and a QR code at lower right, like real packaging. A small white pill reading Flip follows the pointer around the sleeve. Text and art are slightly tilted with the object, so the list reads as printed on it and not as an overlay.

- Build: Card: position:relative, transform-style:preserve-3d, transition none during drag. Faces: position:absolute, inset:0, backface-visibility:hidden; back has rotateY(180deg). Pointer drag: angle = start + dx*.5. On release, snap to the nearest multiple of 180 with a spring (cubic-bezier(.3,1.4,.5,1), 500ms). Plain click and Enter also flip. Label pill: position:fixed, follows pointer with lerp .2, hidden on touch. Make both faces real text, and aria-hidden the face that is turned away.
- For an ordinary business: The back of the packet is where honest detail goes: a loaf's ingredients and allergens, an account's fees, a treatment's steps and price. Front sells, back informs.
- Depends on: A square or card-shaped object with something real to print on its back.

## `figures-lifted-off-a-fading-document`

A 496x330px pale tile holds a grey bill 308px wide, washed out to low contrast and dissolving into grain toward the tile's foot. Three white pills 44px tall, each with a small sparkle icon, float across the paper's edges carrying one value pulled from it: a name, a code, an amount. They are the only sharp, full-contrast things in the tile, and they overhang the sheet by 23 to 50px. The neighbouring tile uses the same contrast logic in depth, with one sharp dark card over two blurred cards stacked behind it.

- Build: Tile position: relative; aspect 3/2; background #ECEBE6. Document at 62% width, opacity .35, mask-image: linear-gradient(#000 45%, transparent 95%), plus an SVG feTurbulence noise layer at .25 with mix-blend-mode: multiply. Pills absolute, height 44px, radius 999px, white, box-shadow 0 8px 24px rgba(0,0,0,.08), 16px text, overhanging the sheet edge by 25 to 50px. Depth version: back cards filter: blur(8px), opacity .5, each 16px higher and 6% narrower. Motion on this tile was not observed; a 120ms stagger with an 8px rise is my suggestion.
- For an ordinary business: A dentist fades an invoice and lifts out date, cost and what is covered; an accountant does it with a tax letter; a bank does it with a statement.
- Depends on: A real-looking document and short plausible field values. No imagery budget needed.

## `four-tiles-four-media`

Four 335x388px tiles with radii around 64px sit in a row, each 10px higher than the last, tops at 234, 224, 214 and 203px, like a gentle rising line; the stair may be scroll-driven. Each uses a different medium: a huge white number pill on flat green, a triple glyph built from black flip-dot blocks on white, a photographed still life, and a blurred green texture with a single notification card. The number showed three values across my frames, so the tile is a counting video, and each tile has a 20px pause button. Captions at 20px sit below and follow the stair.

- Build: Flex, gap 20px; tile aspect 335/388, radius 64px, overflow hidden; apply margin-top: calc(var(--i) * -10px) or a small per-tile parallax. Tile 1: flat accent with a white pill at 80% width, 80px numerals. Tile 2: glyph on a 12px block grid, CSS grid or SVG. Tile 3: studio still life, cover. Tile 4: a heavily blurred photo with one crisp card. Caption 20px/1.25 below. Add a visible pause for any motion over 5s.
- For an ordinary business: A bakery: a big price, a stitched pattern, a photo of the box, a text from the shop saying it is ready.
- Depends on: Four small assets in truly different media.

## `frameless-macro-on-page-ground`

The ear cup is shown so close that it exceeds the screen: it enters from the right edge, spans about 55% of the viewport width and is cropped by the viewport itself. It has no card or tile, because the cut-out sits directly on the page's own pale grey, so the object appears to rest on the page. Its metal stem drops about two-thirds of a viewport and stops on a 180px hairline, like a post standing on a shelf. The copy keeps to the left 40% in a narrow 320px column.

- Build: Cut the subject out to transparent WebP, or shoot on the exact page colour. section{position:relative;overflow:clip;background:#f5f5f7} img{position:absolute;right:-12vw;width:78vw;max-width:none}. The image edge must match the ground exactly. Copy: left 40%, max-width 320px. Stand any vertical part of the subject on a 1px rule 180px wide.
- For an ordinary business: A bakery shows one loaf huge and cropped by the side of the screen on a page the same cream as the paper it was shot on. A window and a sheet of paper are enough.
- Depends on: A sharp, high-resolution cut-out at about 2000px wide, and a page ground that matches it.

## `hand-drawing-among-the-photos`

After a run of photographs the page switches register to a hand-inked axonometric drawing of the development. Neighbouring houses are left as bare outlines while the new buildings and trees carry blue, grey and green washes. It runs about 85% of the viewport width on the same paper ground with no frame, so it sits like a plan on a drafting table. The only words are a 13px caption near its top left. It shows how the plots connect, which no photograph could.

- Build: Transparent PNG or SVG. img{display:block;width:85vw;margin:0 auto} on a warm paper ground, with mix-blend-mode:multiply if the scan has a white ground. Caption absolute at top left, 13px. Colour only the subject and leave the surroundings as line.
- For an ordinary business: A bakery draws a cutaway of its oven. A dentist draws a plan of the practice showing the step-free route. Colour only what matters.
- Depends on: One real drawing. A pen and a scan are enough; the hand is the point.

## `heading-holds-while-cards-deal-and-shrink`

A one-line heading stays pinned 110px from the top under the nav while three 1320x600px panels scroll up and stick at 243px and 293px. As the next panel slides over, the one beneath shrinks: the first read scale .89 and then .86, the second .94. Their top edges remain visible above the newest card, as in a deck of cards. Each panel splits into copy at left and an image or interface at right.

- Build: Heading position: sticky; top: 110px. Cards position: sticky; top: 243px and 293px alternating; width 1320px; height 600px; radius 28px; transform-origin: top center. Scale = 1 - 0.14 * overlapProgress for the first, 1 - 0.06 for the second, driven by the next card's top relative to the viewport. No opacity change.
- For an ordinary business: A bank's three accounts, a clinic's three plans or a bakery's three order sizes.
- Depends on: Three items of equal weight and sticky positioning.

## `interface-breaks-apart-and-rebuilds`

The hero is flat brand green with the window showing a balance. Stepping the real scroll position, by 100px the window has swapped to a card screen in pale tint, and by 300px the window and copy have dissolved into the green, leaving one white interface card low in the frame. White cards then stack back up, two at 400px, three at 500px, more at 600px, with the balance back at 700px and the screen's header at 800px. From 600px the green ground itself narrows from both sides as white comes in, until by about 900px only the window is left. So the interface is taken apart and reassembled while the brand colour collapses into the phone.

- Build: Build the screen as 5 to 6 absolutely placed cards in one stage on a full-bleed accent layer. Scrub 0 to 900px. 0 to 33%: stage opacity 1 to .1 except one card. 33 to 80%: cards return from translateY(24px), 100px of scroll apart, ending with the header. 66 to 100%: accent layer clip-path: inset(0 var(--c)) with --c from 0 to the width outside the window, so white arrives from both sides. Keep each card's final position identical to its first so they read as the same objects.
- For an ordinary business: A clinic's appointment card or a bakery's order slip breaks into date, item and price, then rebuilds as the next message.
- Depends on: A UI made of clear separate cards.

## `interface-on-its-real-mount`

The app section is one grey panel 1200px wide on a white page. The interface is not in a floating phone: a dark phone 820px wide is clamped to real handlebars that run out of both sides of the panel, cut by its edges, with a stem dropping out of its bottom edge. The screen shows a speed dial, ride stats and a dark map. Above it sit an 80px title, a small button and four one-line icon features.

- Build: Panel: max-width:1200px;margin:auto;background:#f0f0f0;overflow:hidden. Image: transparent render or photo with the mount wider than the panel, so it runs out of the crop on both sides; img{width:100%;display:block}. Device about 68% of panel width, real interface on screen.
- For an ordinary business: A bakery shows its order page on the tablet on the real counter next to the till. A dentist shows booking on the reception screen.
- Depends on: A real or rendered view of the interface where it is actually used.

## `leader-line-draws-to-the-feature`

A macro of the ear cup fills the right 65% of the frame and a copy block sits at the left margin. A 1px grey line starts at the left margin above that copy and runs right across the empty ground onto the product, ending in a tiny dot inside the physical button the copy describes. In 40px wheel steps the line is absent at y=7040, about 345px long at y=7080 and full length, about 885px, at y=7120. It then darkens from pale grey over the next two steps. The trigger point is when the line reaches about 77% of viewport height.

- Build: Wrapper position:relative holding copy and image. .line{position:absolute;left:0;top:<y>;height:1px;width:<x of feature as % of wrapper>;background:#86868b;transform:scaleX(0);transform-origin:left;opacity:.4;transition:transform .6s cubic-bezier(.2,.7,.2,1),opacity .6s .3s} .line::after{content:'';position:absolute;right:0;top:-2px;width:5px;height:5px;border-radius:50%;background:inherit}. IntersectionObserver with rootMargin '0px 0px -23% 0px' adds .in, which sets scaleX(1) and opacity 1. Duration is inferred: it finished within one 400ms step, so it runs on a trigger and is not scrubbed. Under reduced motion show it drawn.
- For an ordinary business: A dentist labels one spot on an X-ray, or a bank labels one field on a statement, with a single line running from the sentence to the exact place on the picture.
- Depends on: A photo with a clear small feature and clear space between it and the text. Express the end point as a percentage of the image so it survives resizing.

## `media-card-bends-in-transit`

A video card about 90% of the viewport width and 72% of its height sits between light sections. In one frame during scrolling the card stopped being a rectangle: the bottom edge bows upward and the lower-left corner is pulled about 25px inward, so the whole thing looks like a sheet of film under tension. In a repeat at the same scroll distance, at rest, it was a true rectangle with 20px corners, and it stayed flat for the next eight seconds. So the bend is transient; that it is driven by scroll speed is inferred, not measured. The content keeps playing throughout.

- Build: Read scroll velocity v each frame and smooth it with lerp .1, then clamp to -1 to 1 by dividing by 60px per frame. CSS-only version: wrapper perspective:1200px and inner transform rotateX(calc(var(--v)*5deg)) skewY(calc(var(--v)*.6deg)) with transform-origin centre top, spring back naturally as v decays. True edge bend: a WebGL plane with vertex y += sin(uv.x*PI)*v*.06*height, or an SVG feDisplacementMap with a horizontal gradient map and scale set to v*30. Limit to one element per viewport. Zero it under prefers-reduced-motion.
- For an ordinary business: One large photo on any plain site (the shop front, the team) gains a little physical weight for about twenty lines of script, and nothing changes for anyone who is not scrolling.
- Depends on: A smooth-scroll or velocity reading; the true curve needs WebGL or an SVG filter, the skew version needs nothing.

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

## `one-live-fragment-per-tile`

Six pale tiles with 20px corners each hold exactly one piece of real interface, oversized and cropped. A dark action menu falls off the tile's right edge, a green status pill sits inside two soft concentric rings, a status timeline is cut by the top and right edges, a fee row fades out at left, and an emoji avatar rail is cut by both sides with its centre avatar larger. Short 16px titles and two grey lines of copy sit below. The fragment in each tile says one thing and nothing else. I saw these only as stills, so any motion in them is unverified.

- Build: Grid gap 34px; tile padding 0 for media, 24px for text, background #FAF9F7, radius 20px, overflow hidden. Media zone 200px tall. Render the real component at 1.4 times size. Deliberately let it exceed the zone on one or two sides; use mask-image at the fade side. Pill rings: box-shadow 0 0 0 8px and 0 0 0 16px in the accent at 15 and 8%.
- For an ordinary business: A clinic shows a single appointment chip, a single reminder and a single price in separate tiles, cropped big.
- Depends on: Real UI components you can render at larger scale.

## `picture-bursts-out-of-the-headline`

A seven-line centred headline in 90px heavy condensed capitals, about 45% of viewport width, has tiny dark squares set in word gaps on three lines, each about the size of a full stop made huge. With the pointer in the middle of the headline, a colourful picture about 18% of viewport width and 23% of its height appears on top of the type, covering parts of two lines. Moving on, the headline is clean again. I saw the image appear with the pointer over the headline, but could not establish whether the squares themselves trigger it.

- Build: Headline: text-align center, font-size clamp(44px,6.3vw,90px), line-height .86. Insert inline-block tokens .35em square, background ink, vertical-align .15em, between chosen words. Each token owns a hidden img: position:absolute, width 18vw, aspect-ratio 5/4, transform scale(.1), opacity 0, transform-origin at the token. On token hover or focus: scale 1, opacity 1 over 240ms with cubic-bezier(.2,1.4,.4,1). Give tokens tabindex=0 and an aria-label. On touch, open each once as the line reaches the middle of the screen.
- For an ordinary business: A bakery's sentence about sourdough, rye and seeded loaves where a dot after each word pops open a photo of it. It works in any text-only section with no layout change.
- Depends on: A statement with several concrete nouns worth illustrating.

## `product-flipbook-loop`

A book lies open on a pale grey panel, 944x673px, shot from above with its real page edges and a soft shadow. It does not stay still: the spread changes by hard cut on its own, including one frame of the closed cover. With the page parked at y=3240, eight screenshots gave six different frames, and the scroll position and image source did not change. It is one animated WebP file with no video or canvas, so it runs on time and not on scroll. Hovering a nearby record sleeve produced no change, so the interest here is only the loop.

- Build: Shoot 8 to 12 spreads from a fixed overhead camera with the same light. Export as animated WebP at about 700ms per frame, quality 80, about 1000px wide: img2webp -d 700 -q 80 *.jpg -o flip.webp. <picture><source media='(prefers-reduced-motion: reduce)' srcset='still.jpg'><img src='flip.webp' width='944' height='673' loading='lazy'></picture>. No JavaScript.
- For an ordinary business: A bakery flips through its recipe booklet. A dentist flips through a patient guide. A bank flips through a welcome pack. Ten phone photos.
- Depends on: A physical product with an inside: a book, a menu, a box, a folder. A phone on a tripod is enough. Frame interval inferred from the samples.

## `product-list-set-as-a-paragraph`

Where a template would place a grid of product cards, 17 product names run as one centred paragraph of 48px light serif, five lines deep, spanning about 82% of the width on white at 86px line spacing. Small square blue-grey points about 6px wide separate the names, with wide gaps either side. Three names carry a tiny black tag, 26px tall, set immediately after the word and holding the current rate or offer in 12px white sans. The block has no icons, no boxes and no headline of its own; the catalogue is the display type.

- Build: <p> with text-align: center; font: 300 48px/86px serif; max-width 1200px; tight negative tracking (about -0.02em, estimated). Names as inline links. Separator ::after inline-block 6x6px #A9B4C2, margin 0 22px, vertical-align: middle. Tag inline-block, vertical-align: .2em, margin-left 8px, padding 7px 8px, radius 6px, background #000, colour #fff, 12px/12px sans. Keep rates in the tags so the paragraph stays a list of words.
- For an ordinary business: A bakery sets all of today's bakes as one big paragraph with prices as tiny tags; a dentist lists treatments with 'from' prices; a bank lists accounts with rates, replacing the ruled rate table.
- Depends on: A serif with real presence at light weight, and a catalogue of short names.

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

## `scattered-tiles-with-held-space`

Under a 48px question at top left, three product tiles sit off any shared column line: 589x589 at x=8, 589x441 at x=843 starting 144px higher, and one 350px wide at x=724 starting 162px above the first tile's bottom edge. Each tile is a soft grey gradient that fades into the page at its top, with no shadow or border and a small radius. Large cells stay open between them, including 246px between the first two. Each tile has only a 14px mono label under its bottom left corner, so the eye zigzags as it would across items laid on a table.

- Build: On a 24-column grid at 1440 (60px per column, 8px page padding): tile A grid-column:1/11, margin-top:145px; tile B grid-column:15/25; tile C grid-column:13/19, margin-top:-162px. Tile background: linear-gradient(#f4f4f4,#cfd2d5), radius 8px, no shadow. Caption: mono 14px, underlined. Below 900px fall back to two columns and keep one offset of 80px.
- For an ordinary business: A bakery lays out three loaves at three sizes, one big, one tall, one small, under one plain question, like goods on a counter.
- Depends on: Three to five single-subject shots on matching backdrops, and a client willing to leave cells empty.

## `scene-fogs-out-next-rises-from-it`

Instead of a section boundary, the landscape dissolves into pale fog: the mountains and dome lose contrast, red and cyan fringes appear on their edges, and the frame goes almost flat grey-blue. While the old scene is still faintly visible near the top, the next object rises from the bottom edge inside the same fog. By the next stop only that object remains, floating in empty haze at about 55% of viewport height. Ground colour barely changes throughout, so the two scenes feel like one place.

- Build: Stage sticky 100vh, section 250vh. Layer A photo: filter blur(0 to 16px) and opacity 1 to 0 over p .1 to .55. Fog layer: full-size, background the page ground colour with a soft noise PNG, opacity 0 to .9 over p .05 to .45. Layer B cut-out: translateY(70vh to 0) over p .3 to .8, filter blur(10px to 0), under the fog until p .6 and fog then fades to .2. Chromatic fringe (optional): duplicate layer A twice with mix-blend-mode screen, tinted red and cyan, offset by ±calc(var(--p)*6px).
- For an ordinary business: A bakery can go from the steamy kitchen to a single loaf inside actual steam; a spa or dentist can use a soft white wash to move between rooms without a hard section edge.
- Depends on: Two subjects that share a tonal range; a cut-out for the incoming subject.

## `section-edge-bows-then-flattens`

A black section gives way to an off-white one, and the seam is not a straight line: the black section's lower edge bows downward across the full width, about 32px (roughly 4% of viewport height) deeper in the middle than at the left edge. Scrolling on, the bow relaxes and it is dead straight by the time the seam reaches the top of the screen, following scroll position, since all three frames were taken at rest. A tall photo straddles the seam, its top 20px above the curve, so the picture sits on both sections and hides the deepest part of the bow. Contour lines on the lighter section continue under it.

- Build: Upper section: position:relative; z-index:2; background black. Give it a pseudo-element at bottom: position:absolute; top:100%; left:0; width:100%; height:var(--bow); background:inherit; border-radius:0 0 50% 50% / 0 0 100% 100%. Scrub --bow from 40px to 0 as the seam travels from 100% to 0% of viewport height. The pseudo-element overlaps the next section, so no margin is needed. Put one tall image on the next section with margin-top:-20px and z-index:3 so it crosses the seam.
- For an ordinary business: Works anywhere two sections change background: a bakery moving from a dark oven photo band to a cream menu section gets a soft, doughy seam for about ten lines of code.
- Depends on: Two sections with very different grounds so the seam is visible.

## `shot-on-white-needs-no-cutout`

Directly under the hero, two hens stand on nothing: a 572x365px photo shot on pure white and placed on a pure white page, so the picture has no visible edge. A soft floor shadow holds them down. They sit left of a short intro, at the size another site would give an icon row or stats. Further down a flat lay of plates and linen on white does the same thing and runs off the right edge of the page. The file is an ordinary photo with no transparency, so the cut-out effect comes from the shoot.

- Build: Shoot the subject on white paper or a white wall. Push the background to exactly #fff in any editor and export as WebP or JPG with no alpha. Place on background:#fff with no border or radius, width about 40vw, text alongside and vertically centred. Check the join with an eyedropper. Keep the soft shadow.
- For an ordinary business: A bakery shoots one bun on white paper by a window. A dentist shoots a toothbrush. A bank shoots a rubber-banded stack of statements. It costs a phone and a sheet of paper.
- Depends on: A subject that can be shot on white and a page ground of the same white.

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

## `statement-laid-across-a-blank-screen`

In the centre tile stands a phone 270px wide and 580px high with a completely black screen, and a three-line white 42px centred sentence runs straight across it. The text is about 450px wide, so it overhangs the phone on both sides by about 90px, and the phone's bright edges pass behind the words. The blank screen gives the sentence a quiet ground while the surrounding tiles keep showing colourful product. The device looks momentarily switched off so it can say something.

- Build: Tile position:relative; display:grid; place-items:center. Device image centred at height 64vh with a pure black screen. Text absolutely centred over it: width 31vw, font-size clamp(26px,2.9vw,42px), line-height 1.1, letter-spacing -.02em, text-align center, z-index 2. Text must overhang the device by at least 15% each side, or it reads as a screen UI instead of a statement.
- For an ordinary business: A blank shop chalkboard, an empty window or a dark oven door photographed once becomes the place the headline sits, slightly wider than the object itself.
- Depends on: A device, sign or frame shot with a blank dark area.

## `story-first-blank-device-no-screenshots`

For the first 2,000px there is no product: after the hero come a small tracked label and about 1.5 viewports of 70px serif text alone on black (size read from frames), whose words step from dim grey to white as they cross roughly 50 to 70% of the viewport height. When a phone finally rises out of the black at about 2,100px its screen is plain dark grey with one small logo and no interface. Balances, rates and charts do not appear; the first real product shots arrive in a tile rail at about 5,000px. Nearly every section is a heavy serif heading on pure black beside a single object. The effect is of a page that withholds, which suits a members-only pitch.

- Build: Order: hero, two viewports of text on #000, then one object with no interface on it. Word reveal: split words into spans, set opacity from .15 to 1 as each word's top crosses 60vh. Device: 320x640px rounded rectangle, #141414, 1px rgba(255,255,255,.12) rim, 56px centred logo, no screen content. Headline follows 120px after the object.
- For an ordinary business: A private bank or an old family bakery tells the story first, shows one unlabelled object (a key, a loaf), and leaves rates and prices for later on the page.
- Depends on: A real story that earns the reading, and a brand able to delay its proof.

## `subject-dissolves-into-ground`

The figures' torsos are never cut by the section edge. Over the lower 35% of the photo they fade into the pale paper colour, so they seem to rise out of mist. The panel then ends in a hard horizontal cut against the next full-bleed photo, a blue backdrop that starts at a man's hair with no gap. One soft edge and one hard edge meet on the same line. Whether the fade is baked or masked could not be determined.

- Build: .figure{-webkit-mask-image:linear-gradient(#000 62%,transparent 100%);mask-image:linear-gradient(#000 62%,transparent 100%)} over a background equal to the page ground, or bake the fade into the file. Set the next section with margin:0 so it butts directly against it.
- For an ordinary business: A bank's team portrait fades at the waist into the page colour, so a phone crop never cuts people awkwardly.
- Depends on: Subjects that can fade at waist height and a flat ground colour.

## `unboxed-macro-behind-the-column-rules`

On a black band, a very dark macro of a tilted device edge with two glass orbs occupies the upper right 45% with no frame. Its top is cut hard by a full-width hairline at the section edge, and its lower corner runs down to touch the 1px rules of three text columns. The heading sits left at half height, clear of the image. Below, three ruled columns of plain regulatory facts carry small dim regulator badges. Only tiny specular highlights are lit, so it feels like a serious object seen at low light rather than an illustration of security.

- Build: Section #000, padding 160px 80px 80px, position: relative, overflow: hidden. Image absolute, top 0, right 0, width 46vw, mix-blend-mode: screen so its blacks vanish, with a soft mask on the left edge. Three-column grid, gap 24px, each column border-top 1px rgba(255,255,255,.14), padding-top 28px. Regulator marks 28px tall at 70% opacity.
- For an ordinary business: A safe's hinge, a dental mirror or a baker's blade shot on black, screen-blended so no box shows, above three plain columns of facts.
- Depends on: A dark-ground macro photo or render with only specular highlights.

## `unequal-diptych-day-and-night`

Two pictures stand side by side at 915x570 and 439x577, a ratio of about 2:1, 37px apart with tops within 4px of each other. The left one is a wide daylight colonnade reflected in a pool, and the right one is a slim night scene of a lit globe on dark water: same family, opposite mood. Under each sits a tiny label, a 19.6px serif title, two lines of 14px copy and a text link. The same split returns lower on the page at y=2791, so it works as the page's rhythm and not a one-off.

- Build: display:grid;grid-template-columns:2.08fr 1fr;gap:37px;padding:0 25px. Both images height:570px;object-fit:cover. Under each: label 10px tracked caps, h3 20px/1.3 serif weight 400, p 14px/1.5, underlined link 13px. Choose the pair by contrast of light: the wide one is day, the narrow one is night or a detail.
- For an ordinary business: A bakery pairs a wide daylight shot of the shop with a narrow shot of the oven glowing at 4am.
- Depends on: Two photos of the same subject matter with opposite light.

## `bleed-past-the-edge` (loud)

A 265 to 360px copy column beside an 830px window or photo that passes the container and runs off the viewport edge, saying there is more. Add four 70px-pitch icon rows for spec detail. Use once or twice for the most important product moment.

- Build: Read `references/elements/section-features.md` lines 500 to 507.

## `camera-move-demo` (loud)

The camera does the storytelling: the demo opens zoomed hard into a prompt at about 100px type, then pulls back to the whole builder, or a full window pushes in 3x until one button fills the panel. Attention lands exactly where the claim is. Use for one hero only.

- Build: Read `references/elements/motion.md` lines 1632 to 1639.

## `dimensioned-technical-drawing` (loud)

1px grey wireframe at about 330px with centre lines, arrowed extension lines and rotated 12px mono dimensions, then cross-fade to the real object at identical position and scale. Or a large axonometric with neighbours pale and only the project tinted. Real dimensions only.

- Build: Read `references/elements/media.md` lines 655 to 664.

## `exploded-teardown` (loud)

One pinned 3D subject or layered diagram is scrubbed apart: lid, board and base separate about 250px along dotted guides, or panes fan in perspective. Ground steps tone between chapters, and only copy and the object change. Prerender frames or use a real model. Worth it only for a physical product.

- Build: Read `references/elements/motion.md` lines 884 to 891.

## `headline-with-inline-objects` (loud)

Two-line 72-80px centred headline with small real objects set inside the line at x-height: a photo chip, a clock, a calendar slot, a selection box round one word. Objects are 56-64px tall, radius 12-16, and carry product truth. One or two per headline, no more.

- Build: Read `references/elements/hero.md` lines 363 to 373.

## `hero-reprise-close` (loud)

The end rhymes with the start: repeat the hero mark, panel, icon shape or slogan at a new scale. A 590px faded squircle echoing the app icon, a ghost logo bleeding off a corner, or the hero stack again. Quiet, and needs no new art.

- Build: Read `references/elements/section-conversion.md` lines 1019 to 1026.

## `inline-objects-in-sentence` (loud)

Headline at 45-80px with real objects in the line: photo chips, clock tiles, product cards, pills, about 1em tall, each a different shape, holding real content, radius 10-14px, 1px border, at most two per line. Raise line-height to 1.15-1.25 to clear them. The words alone must still be a sentence.

- Build: Read `references/elements/type.md` lines 1655 to 1676.

## `light-inside-the-render` (loud)

All light belongs to the render: additive streaks, signs, rim fringes, soft shadow edges. No CSS glow over it. Background stays black or a flat floor. Bloom stays inside the image and falls to ground before its edge.

- Build: Read `references/elements/atmosphere.md` lines 1159 to 1170.

## `machined-on-black` (loud)

Pure black ground, no floor, no glow. Thin grazing strip lights plus dim soft boxes, satin metal at roughness about .38, knurling, bevels and micro-lettering. Long lens, 22-degree field. One object or a tight rhythm about 800px wide. One hue on one element only.

- Build: Read `references/elements/media.md` lines 1467 to 1503.

## `object-interleaved-with-type` (loud)

Object sits between layers of type: ~275x520 can with one word passing behind and one in front, 800px server over a 260px ghost marquee, chrome figure overlapping bio text. Requires real depth ordering. Expressive and brand launches.

- Build: Read `references/elements/hero.md` lines 1569 to 1577.

## `page-long-hue-journey` (loud)

One page-tall vertical gradient, 4 to 8 stops, hue shifting per section. Sections have no edges. Cards sit on it as glass or white. Keep stops in one value range so text colour never flips. Chapters are marked by colour, like time of day.

- Build: Read `references/elements/atmosphere.md` lines 893 to 904.

## `panel-diptych` (loud)

Two full-height panels edge to edge at exactly 720px each, or a 480px central photo column with text in the side thirds. Zero gutter. One word or wordmark sits exactly on the seam. Panels can act as a chooser, one link per panel. No headline needed.

- Build: Read `references/elements/hero.md` lines 805 to 813.

## `paragraph-headline` (loud)

Headline as a sentence-long paragraph: 48px weight 300 at 1.15-1.2 leading, 4 lines, first sentence ink, the rest ~60% ink, crossing a ribbon so type takes its hue. 14px live counter above, 44-48px CTA pair below, logo row between hairlines at the fold.

- Build: Read `references/elements/hero.md` lines 1073 to 1096.

## `pinned-photo-card-over` (loud)

Full-bleed photo pinned at 100vh while a 770px flat card scrolls up over it, holding small eyebrow, 40px heading, lede, action and a second image. Text never sits on the photo. Hold for one or two viewports.

- Build: Read `references/elements/layout.md` lines 994 to 1010.

## `product-stage-chapters` (loud)

No grid at all. Each product gets one viewport on its own ground, black or grey or a colour per line, product centred, a tiny 9-12px mono label bottom-left, two buttons at most. Scroll steps between stages, with a small index to jump. For catalogues under about 12 products.

- Build: Read `references/elements/commerce.md` lines 795 to 802.

## `scene-per-product` (loud)

Each product gets a whole viewport: full-bleed colour or illustrated scene, about 620px art, a 72px title, a 12px caps two-liner, one button, an index badge and a small pager. For ranges of four to eight with real character. Always show a plain list view as well.

- Build: Read `references/elements/section-info.md` lines 1357 to 1364.

## `scrubbed-statement` (loud)

Type as the event, once per page: a pinned pale section where three 64px lines arrive from 8px blur and low opacity above three 70px step cards, or a 3D form inside a ring of 120 ticks filling with progress. For a positioning statement.

- Build: Read `references/elements/section-features.md` lines 996 to 1003.

## `solid-colour-statement` (loud)

The page's only saturated field: full bleed, one viewport tall, 64px two-line sentence bottom left, nothing else. Add grain or a dissolving edge and let dark product shots overlap its top and bottom edges, or it reads as a flat poster.

- Build: Read `references/elements/layout.md` lines 899 to 929.

## `spotlit-object-on-dark` (loud)

Pure black, device rising from bottom centre ~510px wide, back-lit, floor glow in the lower corners falling to black, one saturated element as the only colour. No headline, or a 90px line above. Lighting is the entire design. Needs a genuinely good render.

- Build: Read `references/elements/hero.md` lines 1549 to 1557.

## `typographic-index` (loud)

The list is the design: names 28 to 100px on 1px rules or none, active full ink, others 25 to 55%, a small preview swapping beside the list. A progress line can fill the active rule. For services and channels with good names, in agency and bold brand pages.

- Build: Read `references/elements/section-features.md` lines 736 to 743.

## `viewport-chapters` (loud)

Consecutive 100vh sections, no dividers. A 430px text block sits in the empty part of each photo at a 100px margin, moving per shot: 48px heading, three lines of 16px, one ghost button. Needs at least three strong images. Flat colour scenes around one object also work.

- Build: Read `references/elements/section-features.md` lines 536 to 543.

## `window-opens-to-full` (loud)

A contained window pins and scales with scroll, about 750px wide to 2x, until it crops at the panel edge and UI text reads huge. Set transform-origin on the focal point, stop the scrub about a quarter early so the end holds, and avoid will-change, which blurs text.

- Build: Read `references/elements/motion.md` lines 809 to 828.

## `wireframe-to-solid` (loud)

A 3D part rotates, then flips to line art at exactly the same position, scale and angle as the section ground changes. One moment per page. Use an edge pass or two registered images.

- Build: Read `references/elements/media.md` lines 1516 to 1525.

## `bare-product-no-card`

No tile or box. A cut-out with a soft contact shadow stands directly on the page ground, about 300px tall, four columns. Centred 14px spec and 16px bold name below. One sticker or a slight rotation carries personality. Needs a clean render and a tinted or cream page.

- Build: Read `references/elements/commerce.md` lines 529 to 536.

## `bleed-side-alternation`

Each section changes which edge the photo bleeds from: widths 700, 852, 816, or 42% of the viewport, with the text's left edge jumping to match and 260px of ground between. Photos start partway down the previous block, so the page descends as a staircase.

- Build: Read `references/elements/layout.md` lines 787 to 793.

## `chromeless-product-canvas`

No window. A tinted panel about 845px wide is the app: oversized search line in display type, a hairline, then 4 masonry columns of 170px with a 16px gap mixing photos, quotes, highlighted notes and price tags.

- Build: Read `references/elements/product.md` lines 334 to 343.

## `colourway-stage`

One object as a theatre set. Product centred or diagonal at 430-700px on a ground that changes with each colourway. Neighbours sit either side as low-alpha outlines with only the dial or blade coloured. Selected colour named beside small dots. PREVIOUS and NEXT at the edges in 12px mono. One clear action.

- Build: Read `references/elements/commerce.md` lines 1198 to 1205.

## `companion-object`

One object stays on screen across several sections and changes as you scroll: a mark rotates 20 then 45 degrees, a phone swaps its screen, a model re-skins per project. Copy passes beside it. One object carries the story, so sections stop restarting.

- Build: Read `references/elements/motion.md` lines 902 to 909.

## `dissolving-window`

Window or shell with 1px line and radius 16-24 dissolves into the page: mask the lower third, or the right and bottom edges, to page colour. Text stays real and dims with distance. No hard base, no shadow halo, no fake window edge.

- Build: Read `references/elements/product.md` lines 263 to 272.

## `exploded-part-view`

Parts separated along one axis with equal gaps, lit from above, one soft shadow under the last part. Small numbered black dots on near-white, with the numbered specification in small caps below. Or silver plates with one accent plate, about 280px, reused as one object family.

- Build: Read `references/elements/media.md` lines 1529 to 1538.

## `frozen-interaction`

One menu or dialog at 1-2x over its app faded to 30%: 392px white menu, radius 12, soft shadow, selected row filled with a 2px accent bar, shortcut chips. A large cursor rests on the row. Keycaps may overlap the edge.

- Build: Read `references/elements/product.md` lines 524 to 533.

## `image-over-colour-seam`

A 1360x698 photo, radius 8, centred across the join between a colour band and the page, the band ending 40% down the image. Gives the colour change depth without shadows.

- Build: Read `references/elements/layout.md` lines 1028 to 1034.

## `interlocked-panels`

706px image and 660px flat panel overlap: panel starts 65px below the image top and covers its right edge, with a stepped tab on one top corner. Rows swap sides. Hard corners, no shadow. Or photos hanging 290px past offset colour blocks.

- Build: Read `references/elements/layout.md` lines 795 to 816.

## `list-drives-pinned-stage`

A 444 to 672px list beside a sticky 584 to 800px stage, three to five steps at about 72vh each. Scroll sets the active step, time plays the change. Active full ink, others 30%, plus one bar or rule. Stage must stay full. Plain flow without JavaScript.

- Build: Read `references/elements/section-features.md` lines 855 to 905.

## `lit-from-within-on-black`

Tile is pure #000 with no CSS gradient. All light comes from the image, whose glow falls to black before its edges, so no rectangle shows. Export images on true black.

- Build: Read `references/elements/atmosphere.md` lines 2297 to 2308.

## `macro-crop-render`

Object about 1000px wide cropped by its tile, no device frame, tilted about 20 degrees, lit from upper left so every small form casts a shadow. Micro-grain, legible lettering. Copy-free chapter, or sits straight on a grain-filled tile.

- Build: Read `references/elements/media.md` lines 1540 to 1549.

## `macro-material-crop`

Crop tighter than feels safe: object cut by the frame on two sides, texture left unretouched. Natural side light, square corners or one 12-20px radius across the set. Alternate macro with one frontal or wide frame for scale. No overlay, no caption inside the image.

- Build: Read `references/elements/media.md` lines 261 to 270.

## `material-story-render`

One material truth, lit for it: ribbed knit under soft even light with no cast shadow, base fading into the page; or matte black hardware where labels supply all colour, tumbling 30-40 degrees; or a glossy floor with a long reflection. UI may sit on the reflection.

- Build: Read `references/elements/media.md` lines 1551 to 1560.

## `matte-clay`

One matte tone over everything, soft even light, visible ambient occlusion, no texture. About 650px object on a bare same-tone ground, rotating with scroll, or a full clay scene with faint labels. Small coloured mono labels are the only colour.

- Build: Read `references/elements/media.md` lines 1505 to 1514.

## `media-plate-then-caption`

Three or four columns, 8 to 32px gaps. A plate 286 to 500px tall holding a real fragment or photo cropped by its edge, then 24px of space, a 20 to 28px/400 title and 16/1.4 copy at 58% ink on the bare page. No card, border or shadow behind the text.

- Build: Read `references/elements/section-features.md` lines 214 to 248.

## `one-brand-object-moves`

Headline and buttons are static from first paint. One owned object performs for 2-4s: a pixel glyph draws along its outline, a signal travels a connector, a wordmark rises behind a roofline. Nothing else moves, so the load feels authored and costs almost nothing to run.

- Build: Read `references/elements/motion.md` lines 368 to 387.

## `palette-tied-set`

Shoot on the page palette: ground, wardrobe and props drawn from its neutrals and accent. Grade seamless backgrounds to within 2-4% of the page colour so edges melt. One image per viewport or one-row colour story, flat frontal framing, no text on images, no borders.

- Build: Read `references/elements/media.md` lines 226 to 235.

## `pinned-chapter-stage`

A pinned screen with a fixed skeleton where only contents change across three to seven chapters: a 100vh film with a foot caption on the emptier side, a shared rule, a time rail of ticks, or a stage flooded per product beside an 88px icon rail.

- Build: Read `references/elements/section-features.md` lines 948 to 955.

## `pinned-panel-scroll-column`

Viewport splits 40/60 on a 1px rule. Left panel stays fixed with logo, headline, actions and footer links; right column scrolls as a document. Panel needs a resident object. Also 50/50 colour panel with scrolling plates, or 1044px canvas with 348px side sheet.

- Build: Read `references/elements/layout.md` lines 739 to 762.

## `poster-tiles`

Two tiles per row, 8 to 16px gaps, near full bleed, little or no radius. Centred stack in the top third: 40/44 title, one line, pills or chevron links. Product fills the lower 55 to 60%, art-directed per tile, some cropped at the base. Pair a light tile with a dark one.

- Build: Read `references/elements/section-features.md` lines 271 to 278.

## `seam-straddling-object`

An image or card row starts on one ground and overlaps about 140px into the next, offset from the copy column. It joins two sections and gives depth with no shadow. A first card row can rise 40px over a hero's bottom edge.

- Build: Read `references/elements/layout.md` lines 818 to 824.

## `single-control-enlarged`

One real control scaled 1.5-2x inside a tile and cropped by its edge: a pill, keycap or field with a click ring and cursor. Frosted white fields, radius 14, or about 100px of air each side if uncropped. No window.

- Build: Read `references/elements/product.md` lines 689 to 698.

## `smeared-plate`

Rotate a photo 8 to 14 degrees, directional blur 70px along x and 2 to 3px across, boost saturation, add grain .09. Flat plates behind every demo and logo, radius 8 or square, hue varying per plate.

- Build: Read `references/elements/atmosphere.md` lines 2235 to 2260.

## `split-pinned-half`

A 50/50 split: one half pins a panel or photo with copy at its foot while the other scrolls macro, model and detail shots, or rows on 1px rules that swap the pinned photo. Fill can step lighter per image. For one product or person with several images.

- Build: Read `references/elements/section-features.md` lines 978 to 985.

## `stacked-sheets`

Sheets about 1248 by 560px, radius 16, sticky at a top offset growing 14px per sheet so edges peek, shadow 0 30px 40px at 28% black. 72px left padding, 48px title, 20/30 copy, UI with a dark rail bleeding off the right. Three to six peers, block flow.

- Build: Read `references/elements/section-features.md` lines 957 to 976.

## `stipple-engraving`

One or two inks. Stippled plates about 600px with edges dissolving by grain into the ground, unframed, one per product; or 100px ink heads, colour kept in nearby labels. Same grain and palette across the series. Reuse as crest, avatar or watermark. Use real or public-domain sources.

- Build: Read `references/elements/media.md` lines 794 to 803.

## `studio-seamless-object`

One object on one coloured seamless, single soft key from one side, long soft shadow, shallow focus. Object fills about 50% of tile width, same scale across all tiles. Every tile shares one tone range. Ground colour carries the identity; no props unless they repeat.

- Build: Read `references/elements/media.md` lines 237 to 246.

## `word-ink-scrub`

Statement of 34-72px starts at 15-20% ink. Each word or character reaches full ink tied to scroll position, never to time, with a soft front 1-2 characters wide or a gradient spread over about 3 lines at reading height. Pace follows the reader. One per page, or one per chapter.

- Build: Read `references/elements/motion.md` lines 541 to 573.
