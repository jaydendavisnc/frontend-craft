# Stop them

99 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `bleeding-headline` (loud)

A heading so big it runs off the screen, cropped on purpose, with a picture butted hard against it. Scroll slides it sideways so the rest arrives. The page feels larger than the window.

- Build: `composition.md` 9.
- For an ordinary business: Works on a type-led page too. The word must still read.

## `colour-field-cutout` (loud)

A full-screen flat field of the brand colour with one cut-out person or object on it, large and bleeding off the bottom edge, with type set against the empty side. An ordinary photograph suddenly looks like a campaign.

- Build: `composition.md` 11.
- For an ordinary business: One person or product from the set, cut out with scripts/cutout.swift.

## `window-that-opens` (loud)

Near-empty ground, a small picture in the centre, one word either side like a sentence with a photograph for a middle word. Scrolling pins it and the window grows until the picture fills the screen and the words slide away. You feel you walked through it.

- Build: `composition.md` 2.
- For an ordinary business: Use the moment the work begins: a door opening, a kitchen before service, a bench at dawn.

## `word-behind-subject` (loud)

A photograph fills the screen and one huge word, 18 to 26vw, runs behind the person or object in it, so the letters pass behind a shoulder and come out the other side. It reads like a magazine cover. Three layers: the picture, the word, the same picture's subject cut out on top, each moving at its own speed on scroll.

- Build: `composition.md` 1. Make the top layer with scripts/cutout.swift, or render on a transparent ground.
- For an ordinary business: Any business with one person or object worth looking at. A baker behind the word Bread, a van in front of a town's name.

## `pictures-inside-the-sentence`

A headline at 6 to 8vw where small photographs sit in the line at cap height, between the words, growing open as it enters. The eye keeps stopping to look and the sentence feels made for this business.

- Build: `composition.md` 3.
- For an ordinary business: Macro crops of what the business touches: oak, flour, thread, a stamp.

## `sentence-form`

A line of display type with blanks in it. The visitor completes the sentence in place, and it answers them.

- Build: A form that is a sentence in `components.md`.
- For an ordinary business: Any enquiry: I need a table for two on Friday.

## `cast-shadow-is-the-page` (loud)

The home page is effectively one image: a product on a pale floor, lit from above, throwing a black shadow straight down the screen for almost the full 5856px length. Technically it is four square 1440x1440 tiles stacked without a seam. The product sits in the first viewport on black, the floor brightens by about y=900, and the shadow widens as you go until the light floor is two thin strips at the sides near y=4200, and then gone. There are no sections and nothing else on the page but three small blocks of text and the header.

- Build: Render or compose a 1:4 image and slice it into four squares up to 2048px. img{display:block;width:100%;aspect-ratio:1;margin:0} on body{background:#000}, lazy-load all but the first. Text absolute at chosen y values as a percentage of the page. Light from directly overhead at a low angle.
- For an ordinary business: A bakery's page is one long photo of a flour trail down a bench. A dentist's is a line of floss down the screen. The picture is the structure.
- Depends on: A 3D render, or one long subject shot from above and stitched. Engines seen: none, static images only. No global GSAP, no Lenis, no canvas.

## `crooked-window-opens-around-a-still-image` (loud)

On a pale lilac page sits a dark four-sided window about 29% of viewport width and 72% of its height, in which no two sides are parallel: its top edge slopes down to the right and its right side leans outward. It looks like a card tilted in space, and an orb and the fingertips of a raised hand are cropped by it. As you scroll, the corners travel outward and the sides straighten: 55% wide, then 75%, then 85% with nearly vertical sides. The orb and hand inside hold their position and size, revealing more of the picture, so the window opens rather than the image zooming.

- Build: Pinned section 300vh; image sticky at 100vh, full-bleed, object-fit:cover, never transformed. Scrub clip-path between two four-point polygons with the same point order: start polygon(36% 8%, 60% 17%, 65% 73%, 36.5% 80%), end polygon(0 0, 100% 0, 100% 100%, 0 100%). CSS animates this directly with animation-timeline:scroll(), or use a rAF lerp. Hold the start shape for the first 15% of the pin. Caption sits under the shape in 14 to 16px, fading out by p .3. For the 8px soft corners, use an SVG clipPath with rounded joins or the CSS shape() function.
- For an ordinary business: A bakery's oven door shape opening onto the whole kitchen; a door ajar in a bank's branch photo opening to the full room. One image, no video needed.
- Depends on: A full-bleed image that still works as a narrow crop in the middle. The site has ScrollTrigger and Lenis loaded, plus two 1440x900 canvases.

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

## `film-title-card-over-a-macro` (loud)

The hero is an inset film player, 1391px wide with 25px side margins, starting at y=154 under a cream band, with a real scrubber and timestamp along its bottom edge. It opens on an extreme close-up of a dented brass horn carried at hip height, with no faces. The only words are a title about 273px wide, 20% of the frame, in tracked serif capitals with one lowercase italic connecting word. It sits centred at 52% of frame height over the dark trousers beside the horn, so it barely touches the subject. The title appears to be burned into the film (inferred: the hero is an embedded video iframe and those words are not in the page DOM).

- Build: Frame: margin:0 25px;aspect-ratio:16/9. Title: about 1.7vw (24px at 1440), letter-spacing:.24em, uppercase, connective word italic lowercase with letter-spacing:.02em, width no more than 20% of the frame, placed on the darkest part of the shot. Keep real player controls on show and leave the viewer in charge of playback.
- For an ordinary business: A dentist films 30 seconds of hands laying out instruments and gives it a four-word title, small and tracked, like the start of a documentary.
- Depends on: A real short film with a strong macro shot. Engines seen: none, the hero is an embedded player. No global GSAP, no Lenis, no canvas.

## `headline-standing-in-a-rendered-nave` (loud)

A dark CG hall of fluted glass columns recedes to a lit end wall at the frame's centre, filling 100% of the viewport as an 8.2s looping video. A white heavy serif at 114px on 100px leading stands on the same axis in two centred lines about 690px wide, with a sentence of about 20px below it landing just above the glowing wall. The columns rise on both sides and frame the words like a nave, so the wall reads as the room's only light source. Nothing is laid over the type; the image is the room and the heading is the thing standing in it.

- Build: Video full-bleed, 100vh, object-fit: cover, autoplay muted loop. Vanishing point at 50% across, 72% down. Headline centre at 45% height, font-size clamp(56px, 8vw, 114px), line-height .88, weight 700, tracking -0.004em. Edge vignette plus a bottom 20% fade to #000 so the next section begins black. Use tight leading so the two lines lock into one block.
- For an ordinary business: A bank shoots its banking hall dead-centre at dusk, a clinic the corridor to the lit treatment room, a bakery the view down the racks to the lit oven.
- Depends on: A symmetric one-point-perspective image with a lit centre and a heavy serif that survives over it. CG gives control; a real corridor also works.

## `hero-collapses-into-the-sentence` (loud)

On scroll the hero stays pinned while its frame shrinks towards the centre and the photo inside it keeps zooming in. At 360px of scroll the frame is about 60% wide and shows a dormer close-up, and at 720px it is about 21% wide. By then a centred statement is visible behind it, a label above, two lines of 18px text broken by the small picture covering their middle, and a link below. By about 960px the picture is a point inside the sentence and the line reads whole. Measured: outer clip scales 1 to 0 and inner image 1 to 4, both linear over 900px of scroll.

- Build: <section style='height:200vh'><div class='pin'><p class='statement'>...</p><div class='frame'><div class='inner'><img></div></div></div></section>. .pin{position:sticky;top:0;height:100vh;display:grid;place-items:center} .frame{position:absolute;inset:0;overflow:hidden}. On scroll: p=clamp(scrollY/innerHeight,0,1); frame.style.transform='scale('+(1-p)+')'; inner.style.transform='scale('+(1+3*p)+')'; hide the frame at p=1. The product of the two scales rises to about 1.33 near p=.4 before falling, which gives the push-in. The text never moves. Under reduced motion drop the pin.
- For an ordinary business: A bakery's full-screen oven door closes down to a small picture inside one plain sentence about bread. One image and a few lines of script.
- Depends on: A hero photo that still reads at 4x, and a short statement. Eight lines of JS or a scroll-linked animation.

## `hero-shrinks-into-a-card-and-gets-signed` (loud)

As you scroll the first 840px, the full-viewport portrait contracts on its own centre: at 360px scrolled it is about 78% of the viewport each way, at 600px about 48%, and at 840px a 480x310px card (33% wide, 34% high) that has also lost colour to an olive-grey tint. The page around it has already gone from off-white to dark olive. Two lines of 106 to 110px type, one high-contrast serif in muted neon and one bold grotesque in off-white, run in opposite directions behind the card at its vertical middle, so the card cuts both lines. A neon handwritten stroke then draws itself over everything, starting as one slash at 600px and complete at about 1000px, spreading to 55% of viewport width and well past the card edges.

- Build: Section height 240vh, inner sticky 100vh, grid centred. Scrub progress p from section scroll. Image: animate width 100vw to 33vw and height 100vh to 34vh between p 0 and .45, object-fit:cover, and filter grayscale(0) to grayscale(1) plus an overlay multiply. Page background: interpolate on body from light to dark between p .05 and .25. Two marquee rows absolutely centred with z-index below the image, font-size clamp(64px,7.6vw,110px), line-height .9, translateX bound to scroll in opposite directions (row 1 -0.35px, row 2 +0.35px per scrolled px). Signature: inline SVG path with pathLength=1, stroke-width 16 at 1440, stroke-linecap round, stroke-dasharray 1, stroke-dashoffset 1 to 0 between p .3 and .7, z-index above image, width 55vw. Use CSS scroll-driven animation-timeline:view() where supported, with a small rAF fallback.
- For an ordinary business: A founder's real signature, a head baker's handwritten note or a practice owner's name written across a small photo reads as a personal promise, and it costs one traced SVG. The shrink turns a big banner into a framed picture on the wall.
- Depends on: A portrait or object that survives being small, one real hand-drawn SVG path, one saturated accent.

## `line-drawing-resolves-into-the-room` (loud)

At first paint the whole viewport is a white wireframe on black: a two-storey interior with stairs and a mezzanine, drawn in 1px lines, with small clusters of pixel blocks drifting in the air. Shortly after, the same camera view is a fully lit, dark 3D room with warm shelf lighting, a figure on the stairs, a dog, an arcade cabinet, a neon sign and a stack of old monitors. Line drawing and render share exact perspective, so the room seems to be built in front of you rather than loaded. I saw the two states about two seconds apart and cannot say whether a timer or the pointer triggers the change.

- Build: Without WebGL: trace the hero photo into an SVG line drawing in the same viewBox. Stack svg above img in one box. Show the SVG first with stroke-dashoffset drawing on over 900ms, then on img.decode() reveal the photo: mask-image linear-gradient sweep over 800ms or a simple opacity 0 to 1, with the lines fading to 0 after. The photo must not move or rescale when it appears. With a 3D scene, render wire material first and swap materials when textures finish.
- For an ordinary business: An architect's or kitchen fitter's real plan drawing resolving into the finished photo; a bakery's pencil sketch of its shop front becoming the photograph.
- Depends on: One strong interior or object image and a traced line version in identical perspective. The site uses three 1440x900 canvases, Geist and Geist Mono; no global GSAP or Lenis found.

## `listing-set-on-the-facade` (loud)

A full-bleed photo of a real brick theatre with a red awning fills about 88% of the viewport height. Its lower third carries the whole listing directly on the brickwork: a 96px two-line title at the left, small stacked credits, a synopsis in 14px white, and a solid white ticket button at the far right. The bottom of each block lines up along one band. Because the building is the actual venue, the picture is doing the job of the address.

- Build: section{position:relative;height:88vh} img{width:100%;height:100%;object-fit:cover}. .band{position:absolute;left:22px;right:22px;bottom:20px;display:grid;grid-template-columns:320px 160px 1fr auto;gap:24px;align-items:end;color:#fff}. h2 96px/.87, letter-spacing:-.034em. Credits 11px mono. Synopsis 14px/1.4, max-width 56ch. Darken only the lower third: linear-gradient(transparent 55%,rgba(0,0,0,.45)).
- For an ordinary business: A dentist uses a straight-on photo of the shopfront and sets hours, phone number and a booking button across the pavement in the picture.
- Depends on: A real photo of the actual place with a busy but dark lower third.

## `photo-window-grows-into-the-room` (loud)

On load a flat teal field carries a white headline and a small photo box, about 49% wide and 46% tall, at bottom centre. With no scroll, between about 2.4s and 2.9s, the photo grows to fill the whole viewport behind the headline, the teal goes, and the same words stand on dark treetops. The whole composition scales rather than cropping, since the small box shows the same framing as the large one. A cookie scrim was arriving at the same time, so I timed it from frames 500ms apart and could not read its easing.

- Build: Stage 100vh in the brand colour. Photo container absolute, inset 0, with transform: translate(0, 24%) scale(.49), radius 16px. After 2200ms animate to translate(0) scale(1), radius 0, over 700ms cubic-bezier(.7,0,.2,1). Headline above in z-order, unmoved. Pick a photo whose top band is dark enough for white type. Reduced motion: show the end state at once.
- For an ordinary business: A bakery opens on a small framed loaf on its box colour, which grows into the shop. Two seconds of held composure, then one move.
- Depends on: A photo that works at both sizes and carries the headline at full bleed.

## `pinned-title-over-a-passing-photo` (loud)

A 1440x1865px photo shows green wooden cubes and painted balls hanging above blue cloth that meets an ochre floor. A serif capitals headline, effectively 126px and fitted to 1372px of the 1440px width, holds still near the bottom of the viewport while the photograph slides up behind it for at least 960px of scroll. A small caption holds still at the top. The objects seem to fall past the words, the ochre floor rises behind the letters, then the title is released and leaves with the picture's bottom edge. White type stays legible on both the blue and the ochre.

- Build: section{position:relative;height:226vh} img{position:absolute;top:0;left:0;width:100%;height:auto}. .title{position:sticky;top:calc(100vh - 190px);padding:0 34px}. Fit to width: set font-size:20px, measure the span, then transform:scale(containerWidth/spanWidth);transform-origin:left, which is how the site does it with a measured scale of 6.32. Serif capitals, weight 400, white. The site's pin is script driven under smooth scroll (inferred, no sticky in the title's chain); sticky gives the same result.
- For an ordinary business: A bakery shoots one tall photo of flour falling onto a bench, and three plain words stay still while it passes behind them.
- Depends on: A tall photo of at least two viewports with a colour change or an eye path running down it. Engine seen: Lenis smooth scroll, two videos elsewhere, no global GSAP, no WebGL.

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

## `tiny-subject-with-type-in-the-empty-sky` (loud)

The desk and chair take about 23% of the frame width and sit between 58% and 84% of its height, centred on a grass ridge, with valley, mist and pink-grey sky filling everything else. The 49px headline, 20px subline and a pill email field stand centred in the top 40%, all in empty sky, and nothing overlaps the subject. A river runs up the centre axis behind the laptop and points back toward the form, so the eye moves between product and action along a line inside the picture. The photo runs full-bleed under a translucent nav and darkens toward its corners, which keeps white text readable without a flat scrim.

- Build: Hero 100vh, image object-fit: cover; object-position: center bottom. Keep all type inside the top 40%: centred column, max-width 620px, padding-top 96px. Subject centre at 70% of height and no wider than 25vw. Vignette: radial-gradient(ellipse 80% 70% at 50% 45%, transparent 55%, rgba(10,12,20,.55)). Headline 49px/1.1 weight 480 in rgba(255,255,255,.9). Field 400x48px pill in rgba(255,255,255,.12) with backdrop-filter: blur(12px).
- For an ordinary business: Shoot the one chair, oven or counter from far back, so the place is the subject and the wall or sky above it becomes the headline area.
- Depends on: A photo or composite with a small central subject, real empty headroom and one leading line.

## `title-fitted-per-item` (loud)

Each film in the hero gets a title measured to its own length so the longest line nearly fills the 1440px viewport: 225px for a four-word title on two lines, 400px for a two-word title, 344px for the third. Line-height is 0.8 and tracking -0.05em, so the lines almost touch. On two-line titles the first line is flush left and the second flush right. Awkward letter pairs are kerned by hand in the markup, with -0.124em after a Y and -0.05em after a T. The white type fills the lower third of the still and runs across shoulders and jackets, in front of the people in the shot.

- Build: Render each title at 100px in a hidden span, measure width w, then --fs = 100*(innerWidth-40)/w, clamped 120 to 400px. h2{font-size:var(--fs);line-height:.8;letter-spacing:-.05em;font-weight:485} with a variable font. Long titles split into two balanced lines, .line:nth-child(2){text-align:right}. Kerning map {Y:-.124,T:-.05}: wrap the following letters in <span style='display:inline-block;margin-inline-start:-.124em'>. Measure after document.fonts.ready and again from a ResizeObserver.
- For an ordinary business: A bakery's daily special fills the screen width whatever its length: one short word enormous, a long name smaller. The width stays constant and the size carries the surprise.
- Depends on: A heavy-enough grotesque, ideally variable, and stills with calm lower thirds. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `two-words-in-opposite-corners-object-between` (loud)

The hero splits a two-word phrase across the diagonal of the screen. One word in heavy condensed 180px capitals sits top left, the other bottom right, and a glowing 3D object about 50% of viewport width fills the space between. The object overlaps the end of the first word and rises over the nav zone. A small 14px mono paragraph sits under the first word and runs into the object. You read the phrase by travelling across the subject.

- Build: Stage 100vh, black, position:relative. Word A: absolute, top 7vh, left 1.5vw. Word B: absolute, bottom 3vh, right 2vw. Both font-size clamp(72px,12.5vw,180px), line-height .82, weight 900, condensed. Subject: centred at 52vw, z-index above word A and below word B, shifted about 6vw right of centre. Paragraph: absolute under word A, max-width 26ch, 14px mono. Mobile: keep the diagonal with type at 22vw.
- For an ordinary business: 'Fresh' top left and 'daily' bottom right with one loaf crossing between; 'Healthy' and 'smiles' around one apple. A plain photo cut-out does the work of 3D.
- Depends on: A cut-out or object on plain ground with a clear diagonal, and a two-word idea. A heavy condensed face helps.

## `walk-down-a-tall-portrait` (loud)

One dark section 2970px tall (3.3 viewports at 900px) holds a single portrait 3008x3300px, more than twice the viewport width, so the page only ever shows head, neck and shoulders. A 110px white headline and five lines of body sit centred on the empty blue backdrop above the head, in the top 60% of the first screen. The ear cup and then the face pass through the frame with no text on them for about 1.5 viewports (y=3480 to 4560). The model's dark pleated shirt then fills the frame edge to edge and becomes the ground for three small white paragraphs, in a 590px column starting 29% from the left. The picture moves at plain scroll speed, so the whole effect comes from the size of the photo and where the copy is placed on it.

- Build: section{position:relative;height:330vh;overflow:hidden;background:linear-gradient(#59798e 0%,#6b8da8 70%,#000 100%)} .portrait{position:absolute;top:0;left:50%;transform:translateX(-50%);width:209vw;height:auto;max-width:none}. Sample the gradient stops from the photo's own top and bottom so no section edge shows. Place text with absolute top values in vh read off the photo: headline at about 12vh on the empty backdrop, nothing from 110vh to 210vh, small paragraphs from 225vh on the dark area, colour #f5f5f7, 17px/1.4, width 590px. No scroll code at all.
- For an ordinary business: A bakery shoots one tall photo of a baker in a dark apron, sets the headline on the plain wall above the head and the opening hours on the apron. A dentist can do the same with a dark scrub top and one phone photo.
- Depends on: A vertically composed portrait with generous empty backdrop above and a large dark garment below, at least 3000px wide. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `word-sandwiched-in-the-picture` (loud)

A 360px black-weight navy word sits across a sunny full-bleed house photo, from about x=210 to x=1255 and y=126 to y=486. Sky and cloud are behind the letters while the roofline, the dormer and the branches of a yellow tree pass in front. The first letter is half eaten by the gable and leaves, and the foot of the last letter is cut by the tree on the right. Nothing else is on screen except a 13px scroll hint at top centre. The word becomes part of the landscape, about as tall as the house.

- Build: Two PNGs at 1440x1204: back (full photo) and front (same photo with the sky masked out, roof and foliage kept, leaves feathered by hand). .hero{position:relative;height:100vh;overflow:hidden} back, h1 and front all absolute inset:0, front on top and aria-hidden, both images object-fit:cover. h1{text-align:center;top:14vh;font-weight:900;font-size:25vw;line-height:1}, colour a deep navy sampled from the photo's shadows. Serve a tighter crop on phones.
- For an ordinary business: A bakery sets its name behind a row of loaves on a shelf. A bank sets its town's name behind the real skyline. Free subject cut-out tools make the mask a ten-minute job.
- Depends on: A photo with clean sky and a hard skyline, a short heavy word, and a careful mask. Engine seen: Framer site build. No global GSAP, no Lenis, no WebGL.

## `cover-at-holding-size`

The home page opens with no full-bleed picture. On plain white, a two-line centred serif title of about 38px sits above the magazine cover at true proportions, about 318x405px, which is 45% of viewport height. Two tiny links sit under it, and only the last 48px of the viewport shows a sliver of the next image. A publication with huge photos shows its first view at roughly the size you would hold it.

- Build: .hero{min-height:100vh;display:grid;place-items:center;background:#fff;text-align:center;padding-bottom:48px} h1{font:400 38px/1.1 serif} img{width:22vw;box-shadow:none}. Links 12px under the object. Let the next section start at calc(100vh - 48px) so it peeks.
- For an ordinary business: A bank shows the card at actual size on white. A bakery shows one loaf at the size it sits on the counter.
- Depends on: A designed physical object with real presence at small size.

## `logo-rides-the-curtain`

Load starts on a full black screen with a small white logo at centre, held until about 1.7s. The logo then travels up and to the left as the black sheet lifts: at about 2.5s the black covers only the top 21% with the logo near its top left corner, and the index is already in place underneath. By about 3.2s the sheet has gone. There is no spinner and no fade, because the page was already there and the curtain simply leaves.

- Build: <div class='curtain'> .curtain{position:fixed;inset:0;background:#000;z-index:10}, logo absolutely centred. After fonts and first images, or 1500ms at most: curtain transform:translateY(-100%) over .9s cubic-bezier(.76,0,.24,1), and logo translate(-600px,-378px) over the same time. Skip on repeat views with sessionStorage. Timing curve inferred from four frames.
- For an ordinary business: A bakery's one-second screen with its stamp lifts like a shop shutter. Keep it under 1.5 seconds.
- Depends on: A mark that reads at small size, and the discipline to run it once per visit.

## `named-speech-box-replaces-the-explainer`

After a hand-drawn envelope loader on white, the scene opens on a full-bleed illustrated roadside with a character standing centred, about 80% of viewport height, looking at the reader. Over her lower body sits a white speech panel about 50% of viewport width, slightly skewed so no edge is quite straight, with a blue tilted name tab attached to its top-left corner and small hand-lettered capitals inside. A blue square arrow button sits at the panel's bottom-right, which presumably advances it (inferred, not tested). The opening line of the piece is delivered this way, by someone, with no nav bar on screen. I saw only this first line, not what follows.

- Build: Fixed panel: left 50%, bottom 6vh, translateX(-50%), width min(52vw,720px), padding 28px 36px, background white, border 2px solid ink, clip-path polygon with corners nudged 1 to 2% so it looks cut by hand. Name tab: absolute, top -22px, left 12px, rotate(-2deg), accent ground, 15px caps. Text types on at 28ms per character; arrow button is keyboard focusable and Enter or Space advances. Clicking mid-type completes the line. Provide a skip control and render all lines in the DOM for screen readers.
- For an ordinary business: A dentist's receptionist photographed once and given a name tab can walk a nervous patient through a first visit, one short line at a time, instead of a wall of FAQ text.
- Depends on: A named character or real person with a distinct voice, and copy written as speech.

## `aura-rim` (loud)

Page-colour disc about 90% of viewport width, hard edge with 18px soft spread. Outside it a conic gradient of three warm hues peaks at the rim and falls to page colour by the corners. Centre the falloff on the disc. Use once.

- Build: Read `references/elements/atmosphere.md` lines 865 to 891.

## `caps-block` (loud)

Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

- Build: Read `references/elements/type.md` lines 360 to 374.

## `chapter-numeral-or-word` (loud)

A chapter opener with a single year, word or set of initials at 300-920px wide, alone on a plain ground with only the nav remaining. Use between long sections. It may recolour per chapter.

- Build: Read `references/elements/type.md` lines 1692 to 1704.

## `colour-flood-footer` (loud)

One full-bleed field of the brand colour, the largest flat colour on the page, held back until the end. All text in one tint of that field: white, or a dark of the same hue. Serif or display heads, 13-14px links, one lighter rule inset 16px. No second colour.

- Build: Read `references/elements/section-info.md` lines 340 to 347.

## `framed-single-screen` (loud)

White page, 15px frame, 56px header row and 60px footer row hold all text; one 1410x780 photo fills between. Page height equals the viewport, so nothing scrolls away.

- Build: Read `references/elements/layout.md` lines 1020 to 1026.

## `full-width-statement` (loud)

A short line scaled to fill the container: 135-318px, line-height 0.75-0.85, tracking -0.04 to -0.05em, alone in a plain viewport, or two lines force-justified to the margins. Once per page, as a section break or sign-off. Fit the size by measuring.

- Build: Read `references/elements/type.md` lines 1620 to 1639.

## `giant-type-over-image` (loud)

Image full viewport, one title at 15-20vw, line-height 0.8, tracking -0.05em, touching or crossing the margins, bottom-anchored, two lines offset left and right. No veil. Only a tiny 12px nav and one 32px outlined action hung above the second line. For culture, fashion, model launches.

- Build: Read `references/elements/hero.md` lines 733 to 754.

## `giant-type-sign-off` (loud)

Display type carries the ending: 100 to 250px flush left, leading under 1, a last word in accent or underlined, install block or field small beside it. On a black band or field. Keep a sharp scale contrast with something tiny next to it.

- Build: Read `references/elements/section-conversion.md` lines 1149 to 1156.

## `giant-wordmark-finish` (loud)

Links on top, then the wordmark at full container width as the very last thing, 220-380px tall, in full contrast, framed by hairlines. Use a trimmed SVG or size from ink bounds so it meets both margins exactly. Never stretch glyphs. Only a thin legal row may follow.

- Build: Read `references/elements/section-info.md` lines 349 to 384.

## `glyph-halftone-figure` (loud)

Monospace glyphs or square dots on a 6 to 7px cell, density modelling a lit form about 550px, bleeding off one edge on a flat ground. Take tone from a render or photo, not a flat silhouette. Reuse small as icons.

- Build: Read `references/elements/atmosphere.md` lines 1762 to 1786.

## `graded-scene` (loud)

One image or drawing graded to the page colour, with uniform value behind the headline. Line art sits one step above the wash, and grain ties it together. Black or white type needs no scrim because the sky is even.

- Build: Read `references/elements/atmosphere.md` lines 2284 to 2295.

## `graphic-plate` (loud)

Full-width crafted non-photo image in place of a picture: dithered bitmap landscape, stipple grain dunes, one giant flat-faceted brand ribbon ~1300px wide, or the product blurred huge at 30 degrees. Copy left or centred in its calm zone. Single rule-framed plate 700px tall works well.

- Build: Read `references/elements/hero.md` lines 897 to 905.

## `hard-cut-inner-bloom` (loud)

A large black shape with a hard silhouette masks an accent fill. Inside the shape, the accent blooms about 120px into the black. Hard outer edge plus soft inner light reads as a cut-out lit from behind.

- Build: Read `references/elements/atmosphere.md` lines 1218 to 1227.

## `headline-with-inline-objects` (loud)

Two-line 72-80px centred headline with small real objects set inside the line at x-height: a photo chip, a clock, a calendar slot, a selection box round one word. Objects are 56-64px tall, radius 12-16, and carry product truth. One or two per headline, no more.

- Build: Read `references/elements/hero.md` lines 363 to 373.

## `hero-reprise-close` (loud)

The end rhymes with the start: repeat the hero mark, panel, icon shape or slogan at a new scale. A 590px faded squircle echoing the app icon, a ghost logo bleeding off a corner, or the hero stack again. Quiet, and needs no new art.

- Build: Read `references/elements/section-conversion.md` lines 1019 to 1026.

## `horizon-from-the-base` (loud)

Separate blurred ellipses, 44px blur, rise from the bottom edge to different heights, 150 to 540px, in four to six hues, with a near-white core at the very base. Fades to the dark page by mid-height. Grain sigma 3. Once, as payoff.

- Build: Read `references/elements/atmosphere.md` lines 763 to 798.

## `image-with-caption-only` (loud)

Viewport-filling image with no headline. Text no larger than 30px: a caption bottom-left or a centred title, small nav, nothing else. Only for images strong enough to be the message: portfolios, fashion, architecture. Add a thin scroll cue so it does not look unfinished.

- Build: Read `references/elements/hero.md` lines 877 to 885.

## `inline-objects-in-sentence` (loud)

Headline at 45-80px with real objects in the line: photo chips, clock tiles, product cards, pills, about 1em tall, each a different shape, holding real content, radius 10-14px, 1px border, at most two per line. Raise line-height to 1.15-1.25 to clear them. The words alone must still be a sentence.

- Build: Read `references/elements/type.md` lines 1655 to 1676.

## `light-inside-the-render` (loud)

All light belongs to the render: additive streaks, signs, rim fringes, soft shadow edges. No CSS glow over it. Background stays black or a flat floor. Bloom stays inside the image and falls to ground before its edge.

- Build: Read `references/elements/atmosphere.md` lines 1159 to 1170.

## `lit-edge-horizon` (loud)

One very large curved edge, 1px, lit from behind: a rim running through a spectrum, or a section lid brightening across its central 400px. Soft pool below 8% white, falling off within 100px. On black. Once per page.

- Build: Read `references/elements/atmosphere.md` lines 1039 to 1079.

## `machined-on-black` (loud)

Pure black ground, no floor, no glow. Thin grazing strip lights plus dim soft boxes, satin metal at roughness about .38, knurling, bevels and micro-lettering. Long lens, 22-degree field. One object or a tight rhythm about 800px wide. One hue on one element only.

- Build: Read `references/elements/media.md` lines 1467 to 1503.

## `masked-wordmark` (loud)

Edge-to-edge wordmark used as a window: halftone photo, moving video or customer imagery shows through the letters, or the letters are 1-1.5px outline with no fill. Use background-clip text or an SVG mask. The image must be busy enough to keep the letters readable at a glance.

- Build: Read `references/elements/section-info.md` lines 404 to 419.

## `object-interleaved-with-type` (loud)

Object sits between layers of type: ~275x520 can with one word passing behind and one in front, 800px server over a 260px ghost marquee, chrome figure overlapping bio text. Requires real depth ordering. Expressive and brand launches.

- Build: Read `references/elements/hero.md` lines 1569 to 1577.

## `one-bit-dither` (loud)

Reduce one photograph to pure black and white dots with no greys, applied to masthead, cards and slices alike. Crop or glitch it on load. One treatment only.

- Build: Read `references/elements/atmosphere.md` lines 2130 to 2141.

## `one-giant-number` (loud)

One figure owns the section: 96 to 200px, tight, alone in a band or outlined card, 13 to 14px caption. It may roll on entry or change with scroll. Choose the one number that would surprise someone, and never rest on zero.

- Build: Read `references/elements/section-proof.md` lines 936 to 943.

## `oversized-button-close` (loud)

The button is the design: centred 64 to 80px headline, muted line, then a 64 to 72px button, radius 18 to 20, 24 to 32px bold label, or a giant 750px pill holding the whole line. Add ratings or a checklist beneath. Say one thing.

- Build: Read `references/elements/section-conversion.md` lines 1010 to 1017.

## `page-long-hue-journey` (loud)

One page-tall vertical gradient, 4 to 8 stops, hue shifting per section. Sections have no edges. Cards sit on it as glass or white. Keep stops in one value range so text colour never flips. Chapters are marked by colour, like time of day.

- Build: Read `references/elements/atmosphere.md` lines 893 to 904.

## `panel-diptych` (loud)

Two full-height panels edge to edge at exactly 720px each, or a 480px central photo column with text in the side thirds. Zero gutter. One word or wordmark sits exactly on the seam. Panels can act as a chooser, one link per panel. No headline needed.

- Build: Read `references/elements/hero.md` lines 805 to 813.

## `paragraph-headline` (loud)

Headline as a sentence-long paragraph: 48px weight 300 at 1.15-1.2 leading, 4 lines, first sentence ink, the rest ~60% ink, crossing a ribbon so type takes its hue. 14px live counter above, 44-48px CTA pair below, logo row between hairlines at the fold.

- Build: Read `references/elements/hero.md` lines 1073 to 1096.

## `photo-sign-off` (loud)

Closing on a real photograph or film: full bleed or a 1376px card at radius 32, 48 to 120px white heading placed in the image's own shadow, 16 to 22px copy, one white pill. Use a local scrim. Repeat the hero's world so the page closes a loop.

- Build: Read `references/elements/section-conversion.md` lines 1122 to 1129.

## `pixel-dissolve-edge` (loud)

A block edge breaks into 14px hard squares over 200 to 360px. Odds fall on a curve with a long tail, neighbours raise odds, so mass dissolves. No blur. A section boundary becomes the signature graphic.

- Build: Read `references/elements/atmosphere.md` lines 1712 to 1734.

## `scrimless-campaign-plate` (loud)

Edge-to-edge or 20-32px radius panel. Subject composed to one side, copy on the open dark area at the page gutter, no scrim. Zone luminance spread under 0.04; white contrast at least 7 for body, 3.5 for 30px-plus display. If the zone fails, change the frame.

- Build: Read `references/elements/media.md` lines 307 to 334.

## `scrubbed-statement` (loud)

Type as the event, once per page: a pinned pale section where three 64px lines arrive from 8px blur and low opacity above three 70px step cards, or a 3D form inside a ring of 120 ticks filling with progress. For a positioning statement.

- Build: Read `references/elements/section-features.md` lines 996 to 1003.

## `signature-art-close` (loud)

One owned drawing fills half the band: extruded ribbons, a dithered ASCII tree, a chrome wordmark, overlapping lens circles, tilted slab. Heading and pill on the other side. It must be made for this brand and appear earlier on the page, or it reads as decoration.

- Build: Read `references/elements/section-conversion.md` lines 1269 to 1276.

## `single-image-stage` (loud)

One 576x720 image centred on off-white, ~90px from the top, name above, two-line caption below, six 3px progress dots. Reads as a gallery wall with one thing on it. For portfolios and curated sites whose next image is the interaction.

- Build: Read `references/elements/hero.md` lines 1425 to 1433.

## `solid-colour-statement` (loud)

The page's only saturated field: full bleed, one viewport tall, 64px two-line sentence bottom left, nothing else. Add grain or a dissolving edge and let dark product shots overlap its top and bottom edges, or it reads as a flat poster.

- Build: Read `references/elements/layout.md` lines 899 to 929.

## `spotlit-object-on-dark` (loud)

Pure black, device rising from bottom centre ~510px wide, back-lit, floor glow in the lower corners falling to black, one saturated element as the only colour. No headline, or a 90px line above. Lighting is the entire design. Needs a genuinely good render.

- Build: Read `references/elements/hero.md` lines 1549 to 1557.

## `statement-above-rising-media` (loud)

Headline at one third height, then deliberate emptiness, then a real image or card entering at y 720-840, cut by the fold. Copy sits off-axis or centred at 56-88px. Top two thirds nearly bare, bottom edge rich. Scrolling is the reward. Faint grid may fade between them.

- Build: Read `references/elements/hero.md` lines 1146 to 1154.

## `statement-as-hero` (loud)

A full sentence or list takes the headline job, 35-80px, weight 400-500, line-height 1.1-1.2, with no size or weight change inside it, running 60-100% of the container. Break lines by hand. Allow at most one inline object or underlined link. No subhead follows.

- Build: Read `references/elements/type.md` lines 484 to 495.

## `statement-closer` (loud)

The footer's largest element is a sentence, 76-170px, not a logo: a mission line, a repeat of the hero heading, or a plain ask. Small link columns or one legal row sit around it. Say something true and specific, or it reads as a slogan.

- Build: Read `references/elements/section-info.md` lines 421 to 428.

## `statement-with-annotation` (loud)

One sentence, 48-92px, on paper colour, with a single hand-drawn stroke on one or two words: wobbly underline, ring, 3px accent. Stroke is an SVG path, not a CSS underline. ~160px of clear space above and below. Real tiles or line art rise at the fold.

- Build: Read `references/elements/hero.md` lines 1121 to 1144.

## `texture-first-loop` (loud)

Make footage nearly abstract: heavy horizontal motion blur, faces never sharp, or slow macro in near black with one edge light. One saturated note at most. Radius 16 in a panel or full 100vh. Type or a translucent UI card sits directly on it, no scrim.

- Build: Read `references/elements/media.md` lines 1635 to 1646.

## `type-over-one-field` (loud)

One large flat or soft shape behind centred type, and the type overprints it: 660px stepped brand glyph, 1050px white disc in a blurred colour field, or a floor glow. Headline 100-140px, line-height 0.85-1.05, button pair. No knockout, no shadow. The shape is the only decoration.

- Build: Read `references/elements/hero.md` lines 1098 to 1119.

## `type-split-by-prints` (loud)

Giant 200px word split in two lines left and right, with 3-4 overlapping 400-530px prints stacked at centre covering the middle letters. The eye completes the word. Black on white, archival images, a small caption and date row at the base.

- Build: Read `references/elements/hero.md` lines 1385 to 1393.

## `typographic-construction` (loud)

Type used as structure: two 140px caps lines justified between 1px rules with a mark in the gap, words stacked into a stepped pyramid, or a small letter beside a 318px word. Small intro, thumbnail and link below on a strict grid.

- Build: Read `references/elements/hero.md` lines 1234 to 1242.

## `wordmark-masthead` (loud)

Brand name fills the first screen edge to edge, 16-32px side margins, 130-300px tall, under or behind the nav. Let renders overlap it, or set it tone on tone near 1.1:1 as a watermark. The headline sits below at about a quarter of the size. Nav omits the logo.

- Build: Read `references/elements/type.md` lines 1606 to 1618.

## `colour-wash-from-one-side`

Solid brand colour covers the left 40% of a video or photo and fades to clear by 55%, or the image fades left into grainy near-black. Copy sits on the solid part with full contrast. More honest than a scrim, and it carries identity. Grain stops banding.

- Build: Read `references/elements/hero.md` lines 862 to 875.

## `contained-plate`

Image held back from the edges by a wide paper margin: 960px plate with caption row below, 75% viewport inset plate, or a 1400px photo starting ~500px down under a ghost wordmark. Copy lives on paper, never on the image, so no scrim is ever needed.

- Build: Read `references/elements/hero.md` lines 887 to 895.

## `defocused-crushed-photo`

Full-bleed photo heavily blurred and graded to a near-black hue, about 10% visible detail, with grain. Reads as texture until you look. A sharp device or table sits on top with no scrim.

- Build: Read `references/elements/atmosphere.md` lines 2323 to 2334.

## `designed-bottom-edge`

Image has a composed end instead of a rectangle: fades into page colour at the fold so the portrait has no base, or clips to a 120px bottom radius on a brand field, or a cut-out building sits on paper. Lockup bottom-left, actions bottom-right on one baseline.

- Build: Read `references/elements/hero.md` lines 789 to 803.

## `enlarged-brand-geometry`

Logo geometry enlarged to 200 to 800px, drawn one tone from its ground, 3 to 5 L* apart, sweeping behind sections with its own corners. Replaces a generic gradient on dark pages and CTA bands.

- Build: Read `references/elements/atmosphere.md` lines 1886 to 1897.

## `focus-pull`

Hero photo starts at 24-40px blur over a colour sampled from it and sharpens over 1-2s, cubic-bezier(.16,1,.3,1), while copy is already readable or fades in with it. Works like a lens racking, and it makes a slow image load look deliberate.

- Build: Read `references/elements/motion.md` lines 439 to 446.

## `highlight-strip-on-photo`

Text lines each wrapped in a flat bright strip with 2px side padding, black text, bottom-left of a full-bleed slide. Use box-decoration-break: clone so padding repeats per line. It guarantees contrast over any photograph.

- Build: Read `references/elements/type.md` lines 1778 to 1790.

## `layers-cross`

Layering links two sections with no fade: a large heading holds still while a 400-580px video card scrolls across it, lifted by one wide shadow, about 0 24px 60px at 20%. Keep the fixed layer legible when covered, and let the top layer exit under the nav.

- Build: Read `references/elements/motion.md` lines 920 to 927.

## `light-arrives-last`

Type and layout are final first. Then only light changes: a render rises from a 25% pastel ghost to full saturation in about 1s, or a glow blooms in a corner over 2-3s, with no slide or scale. The page feels lit rather than loaded.

- Build: Read `references/elements/motion.md` lines 389 to 401.

## `line-on-image`

One dry line at 20-48px placed in the clear area of a full-bleed photograph, 24px inset, with one 16px underlined link 24-30px below, black or white by image tone. No button, no scrim.

- Build: Read `references/elements/type.md` lines 1130 to 1142.

## `lit-from-within-on-black`

Tile is pure #000 with no CSS gradient. All light comes from the image, whose glow falls to black before its edges, so no rectangle shows. Export images on true black.

- Build: Read `references/elements/atmosphere.md` lines 2297 to 2308.

## `macro-crop-render`

Object about 1000px wide cropped by its tile, no device frame, tilted about 20 degrees, lit from upper left so every small form casts a shadow. Micro-grain, legible lettering. Copy-free chapter, or sits straight on a grain-filled tile.

- Build: Read `references/elements/media.md` lines 1540 to 1549.

## `no-caption-tile`

Flat 3:4 tile in #f2f2f2 or one tone off the page, radius 0, no name, price or badge at rest. Cut-outs alternate with tight detail crops. 10-12px gaps, 12px caps label above the rail, partial tiles at both ends. Use only for a campaign rail that leads to real listings.

- Build: Read `references/elements/commerce.md` lines 389 to 396.

## `one-brand-object-moves`

Headline and buttons are static from first paint. One owned object performs for 2-4s: a pixel glyph draws along its outline, a signal travels a connector, a wordmark rises behind a roofline. Nothing else moves, so the load feels authored and costs almost nothing to run.

- Build: Read `references/elements/motion.md` lines 368 to 387.

## `one-gradient-tile`

Flat neutral page, with colour reserved for one tile or one family of tiles: a grain mesh of two opposed hues, sigma 5 to 10 levels, white type, radius 16 to 30px. Reuse it once, enlarged. It becomes the only hue on the page.

- Build: Read `references/elements/atmosphere.md` lines 919 to 930.

## `opposite-margin-axis`

Headline at the left 32px margin and action at the right 32px margin, on one horizontal axis at y=450 of a full-bleed image. The subject fills the span between. The same layout repeats on every screen.

- Build: Read `references/elements/layout.md` lines 842 to 848.

## `photo-dissolve-seam`

The page dissolves over its last 400px into a low-contrast cloud or fog photo, or a dark page lifts into fog and back, masked so no image edge shows. A panel or CTA floats in the air.

- Build: Read `references/elements/atmosphere.md` lines 2347 to 2358.

## `quiet-paragraph`

No headline size at all. A 19px paragraph or lettered list starting at y~270 under a 40px avatar and 14px name, or 12-16px text top-left at a 10-18px inset. Confidence by refusal. Portfolios, labs and archives only. Line length and tone carry everything.

- Build: Read `references/elements/hero.md` lines 1244 to 1252.

## `regular-weight-quiet`

Headline at weight 400 only, 48-116px, line-height 1.0-1.1, tracking -0.01 to -0.03em, black or warm near-black, flush left, one line if it fits. Allow no bold heading anywhere on the page. Hierarchy comes from size and ink alone; labels drop to 11-13px mono or small caps.

- Build: Read `references/elements/type.md` lines 155 to 169.

## `sawtooth-slats-and-blinds`

Repeating ramps that end in a hard cut: 130 to 420px vertical slats, or 10px blinds, or 8px barcode strokes. Amplitude 12 to 25 levels, faded at both ends by a mask. The ramp gives light, the cut gives material.

- Build: Read `references/elements/atmosphere.md` lines 824 to 863.

## `scattered-prints`

~10 unrotated portrait prints 150x205, no borders, scattered with wide gaps round a centred 30px wordmark, bottom row bleeding off, rising at different scroll rates. Or 3-4 crops ~325px wide staggered with two caps phrases. Photos are the only colour. Spacing must feel placed.

- Build: Read `references/elements/hero.md` lines 1375 to 1383.

## `stepped-section-edge`

Full-bleed section with a non-straight top: left third rises 80px, centre recessed, right third 20px higher, hard 90-degree steps at x=326 and x=1070. Replaces any wave or gradient. Repeat the step in panels so it is a system.

- Build: Read `references/elements/layout.md` lines 978 to 984.

## `textural-photo-band`

A material, sky or aerial photo, such as water, painted concrete or a dawn sky, used as a flat colour band 360px or taller with a title and CTA. Texture without a gradient, and no subject to compete with.

- Build: Read `references/elements/atmosphere.md` lines 2310 to 2321.

## `tonal-contour-field`

Flat tinted panel, five to seven wandering lines one step lighter, 4-6px wide, running off every edge, never crossing, no closed loops. Isolines of warped noise plus a directional ramp. One field per tile. Keep type off it, or on a solid chip.

- Build: Read `references/elements/media.md` lines 721 to 753.

## `wordmark-docks-to-nav`

Wordmark centred on a flat screen holds about 1s, then a single element travels and shrinks into its nav slot over 0.8-1.2s on cubic-bezier(.76,0,.24,1) while the panel behind lifts away. The page is already in place underneath. Use FLIP so one object makes the whole trip.

- Build: Read `references/elements/motion.md` lines 475 to 482.
