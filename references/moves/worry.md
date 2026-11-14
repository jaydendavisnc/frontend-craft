# Answer the worry

16 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `deck-you-throw`

A fanned stack of cards. Drag the top one and it leans, flick it and it flies off while the rest rise. Reading quotes becomes a small game.

- Build: A deck you throw in `components.md`.
- For an ordinary business: Quotes, tips, tickets, recipes.

## `ground-takes-over`

The whole page changes colour as a scene arrives, with no edge between them, going dark for one scene and back.

- Build: Handoff: the ground changes in `motion/score.md`.
- For an ordinary business: One dark chapter past the middle of the page.

## `words-light-as-you-read`

A long sentence set at 4 to 6vw, almost invisible, each word coming up as it passes the reading line. A paragraph becomes a scene.

- Build: Words light up in `motion/score.md`.
- For an ordinary business: The one sentence that says what the business believes.

## `abstract-benefit-as-a-lit-scene` (loud)

Security is explained by one night photograph with no icons. A bike stands in a dark field under a single cone of blue light falling from above, a patch of lit green grass at its wheels and dim animal shapes around it. The frame is picked out by rim light. A 48px headline and two lines of small copy sit in the left 35% on the dark, level with the bike. The plate is 1424x801px, about 90% of the frame, with no overlays or boxes.

- Build: Plan the shot around one light source. Plate radius 8px, image object-fit:cover, text absolute at left:8.8vw;top:52%, h2 48px/1.1 white, p 16px/1.4. The dark ground gives contrast so no scrim is needed. Without a shoot, dim a normal photo with filter:brightness(.35) and add radial-gradient(ellipse at 50% 0,rgba(140,190,255,.5),transparent 60%) with mix-blend-mode:screen.
- For an ordinary business: A bank explains fraud protection with one photo of a front door at night under a porch lamp, in place of a shield icon.
- Depends on: One staged photograph with a single light source. Engines seen: none.

## `cast-shadow-is-the-page` (loud)

The home page is effectively one image: a product on a pale floor, lit from above, throwing a black shadow straight down the screen for almost the full 5856px length. Technically it is four square 1440x1440 tiles stacked without a seam. The product sits in the first viewport on black, the floor brightens by about y=900, and the shadow widens as you go until the light floor is two thin strips at the sides near y=4200, and then gone. There are no sections and nothing else on the page but three small blocks of text and the header.

- Build: Render or compose a 1:4 image and slice it into four squares up to 2048px. img{display:block;width:100%;aspect-ratio:1;margin:0} on body{background:#000}, lazy-load all but the first. Text absolute at chosen y values as a percentage of the page. Light from directly overhead at a low angle.
- For an ordinary business: A bakery's page is one long photo of a flour trail down a bench. A dentist's is a line of floss down the screen. The picture is the structure.
- Depends on: A 3D render, or one long subject shot from above and stitched. Engines seen: none, static images only. No global GSAP, no Lenis, no canvas.

## `cursor-torch-on-a-privacy-promise`

On pure black, a four-line centred paragraph at 64px/82px sits dim at 15% white in a 1095x328px block. A soft circle of full white about 400px across lights only the words under the pointer, cutting letters mid-word at its edge. I moved the pointer left and then right and the lit patch followed; with the pointer parked centrally the middle of each line is lit and the line ends fall away. The paragraph is about keeping data private, so you read it through a small pool of light. There is no image in the section at all.

- Build: Two stacked copies of the text, the top one aria-hidden. Base colour rgba(255,255,255,.15). Top colour #fff with mask-image: radial-gradient(circle 200px at var(--x) var(--y), #000 40%, transparent 100%). On pointermove set --x and --y in px, lerped by .12 in requestAnimationFrame; default 50% 50%. Font 64px/82px weight 600, letter-spacing .01em. On touch, drive --y with scroll position. The mask technique is inferred; the visible result was observed.
- For an ordinary business: A bank uses it on a fraud promise, a clinic on its confidentiality statement, a bakery on an ingredient list. Once per site, on the sentence that matters most.
- Depends on: One short paragraph worth reading slowly, a dark plain ground and a pointer.

## `cycling-search-hint`

At the right of the fixed nav, next to a small magnifier, one grey capitals word changes by itself. Across frames about a second apart it read a country, a building type, a theme, and a project status. It never says 'search'. Each word teaches one dimension you can search by, so the field demonstrates its own range without instruction.

- Build: const hints=[a place,a type,a theme,a status]; every 1800ms swap the text with a .25s crossfade. Stop and clear on focus. Keep a constant aria-label so screen readers do not hear it change. Pause under prefers-reduced-motion. 12px uppercase, tracking .04em, #999. Interval is inferred from frames: the word changed roughly every one to two seconds.
- For an ordinary business: A dentist's search cycles a treatment, a symptom and a day. A bakery's cycles a loaf, an allergy and a day.
- Depends on: A search with more than one real dimension.

## `named-speech-box-replaces-the-explainer`

After a hand-drawn envelope loader on white, the scene opens on a full-bleed illustrated roadside with a character standing centred, about 80% of viewport height, looking at the reader. Over her lower body sits a white speech panel about 50% of viewport width, slightly skewed so no edge is quite straight, with a blue tilted name tab attached to its top-left corner and small hand-lettered capitals inside. A blue square arrow button sits at the panel's bottom-right, which presumably advances it (inferred, not tested). The opening line of the piece is delivered this way, by someone, with no nav bar on screen. I saw only this first line, not what follows.

- Build: Fixed panel: left 50%, bottom 6vh, translateX(-50%), width min(52vw,720px), padding 28px 36px, background white, border 2px solid ink, clip-path polygon with corners nudged 1 to 2% so it looks cut by hand. Name tab: absolute, top -22px, left 12px, rotate(-2deg), accent ground, 15px caps. Text types on at 28ms per character; arrow button is keyboard focusable and Enter or Space advances. Clicking mid-type completes the line. Provide a skip control and render all lines in the DOM for screen readers.
- For an ordinary business: A dentist's receptionist photographed once and given a name tab can walk a nervous patient through a first visit, one short line at a time, instead of a wall of FAQ text.
- Depends on: A named character or real person with a distinct voice, and copy written as speech.

## `section-edge-bows-then-flattens`

A black section gives way to an off-white one, and the seam is not a straight line: the black section's lower edge bows downward across the full width, about 32px (roughly 4% of viewport height) deeper in the middle than at the left edge. Scrolling on, the bow relaxes and it is dead straight by the time the seam reaches the top of the screen, following scroll position, since all three frames were taken at rest. A tall photo straddles the seam, its top 20px above the curve, so the picture sits on both sections and hides the deepest part of the bow. Contour lines on the lighter section continue under it.

- Build: Upper section: position:relative; z-index:2; background black. Give it a pseudo-element at bottom: position:absolute; top:100%; left:0; width:100%; height:var(--bow); background:inherit; border-radius:0 0 50% 50% / 0 0 100% 100%. Scrub --bow from 40px to 0 as the seam travels from 100% to 0% of viewport height. The pseudo-element overlaps the next section, so no margin is needed. Put one tall image on the next section with margin-top:-20px and z-index:3 so it crosses the seam.
- For an ordinary business: Works anywhere two sections change background: a bakery moving from a dark oven photo band to a cream menu section gets a soft, doughy seam for about ten lines of code.
- Depends on: Two sections with very different grounds so the seam is visible.

## `small-print-decodes-itself`

The tiny 13 to 15px mono text in the corners does not fade in: it resolves character by character from wrong letters, so a mid-state frame shows a legal line reading as a garbled mix of real and random letters, and a sound label ends in a nonsense word. A frame moments later shows the correct text. Project titles and labels behave the same way, with wrong characters in the mid-state. The largest element on screen is untouched, so this is only a shimmer around the edges of the frame.

- Build: For each [data-decode] element, keep the final string. On reveal, run a timer every 30ms for about 600ms: characters before an advancing index show the true letter, the rest show a random pick from a charset of the same width. Requires a monospace font so width does not jitter. Set aria-label to the final string and aria-hidden on the animated node. Run once per element; skip under prefers-reduced-motion.
- For an ordinary business: A bank's reference numbers, a clinic's opening hours or a bakery's batch number can resolve this way for a sense of a live system, using one small script.
- Depends on: A monospace face. Use on labels only, never on body text.

## `solid-bar-wipes-off-each-line`

Every heading and paragraph arrives under solid bars. Each line is covered by a rectangle of exactly that line's height and text width, and the rectangle's left edge travels right, uncovering finished letters behind it. In the frame caught mid-reveal, a 93px heading has an 85px block left on its last word, ending exactly at the end of the word, while the paragraph below has three bars of 112, 366 and 205px, each stopping at its line's end. The bar colour follows the section: neon on olive and black, dark grey on off-white. Lines run at once but slightly offset, so a paragraph reads for a moment as a stack of bars of different lengths.

- Build: Split text into lines with a small splitter; each line display:block; width:fit-content; position:relative. Line ::after: position:absolute; inset:0; background:var(--accent); transform-origin:right; transform:scaleX(1). Add .in via IntersectionObserver at threshold .6 and transition transform to scaleX(0) over 640ms cubic-bezier(.65,0,.35,1). Stagger lines by 70ms. The bar's right end stays fixed on the line end while its left edge moves, which is what makes it read as a wipe. Set --accent per section. Re-split on resize, and show text plainly under prefers-reduced-motion or if JS fails.
- For an ordinary business: A credit union or a clinic can use it in one brand colour on headings only, and it reads as someone highlighting the important line with a marker.
- Depends on: Nothing more than a strong accent; must be reserved so it does not delay reading (under 700ms).

## `statement-laid-across-a-blank-screen`

In the centre tile stands a phone 270px wide and 580px high with a completely black screen, and a three-line white 42px centred sentence runs straight across it. The text is about 450px wide, so it overhangs the phone on both sides by about 90px, and the phone's bright edges pass behind the words. The blank screen gives the sentence a quiet ground while the surrounding tiles keep showing colourful product. The device looks momentarily switched off so it can say something.

- Build: Tile position:relative; display:grid; place-items:center. Device image centred at height 64vh with a pure black screen. Text absolutely centred over it: width 31vw, font-size clamp(26px,2.9vw,42px), line-height 1.1, letter-spacing -.02em, text-align center, z-index 2. Text must overhang the device by at least 15% each side, or it reads as a screen UI instead of a statement.
- For an ordinary business: A blank shop chalkboard, an empty window or a dark oven door photographed once becomes the place the headline sits, slightly wider than the object itself.
- Depends on: A device, sign or frame shot with a blank dark area.

## `switch-the-whole-site-to-plain-text`

A small black pill fixed at bottom centre holds two mono words, the active one in orange. Clicking the second word swaps the entire page for a 640px centred column of orange monospace text on black, topped by a logo built from pixel blocks, a row of slash-prefixed links and key-value rows joined by dot leaders. The page describes itself as a plain-text mirror for agents, crawlers and people who prefer it raw. The pill stays in the same place with the colours swapped, so getting back is obvious. The switch turns a 3D showpiece into a text file in one click.

- Build: Fixed pill: bottom 24px, left 50%, translateX(-50%), padding 8px 14px, 13px mono, two buttons with aria-pressed. Render the plain view as server HTML at its own URL so it works with no JS, and swap on click with a 200ms crossfade. Column max-width 640px, mono 14px, line-height 1.4. Rows: display:grid; grid-template-columns:14ch 1fr with dots written as characters. Remember the choice in try/catch-wrapped localStorage. Do not make people choose; the rich view is the default.
- For an ordinary business: This suits plain businesses better than studios: a bank's 'just the rates', a bakery's 'just the menu and prices', a clinic's text view for screen readers, older patients and AI assistants.
- Depends on: Content written so it stands alone as text, and a mono face.

## `words-pull-focus-one-at-a-time`

Sentences do not fade or slide. Words sharpen from heavy blur like a lens racking focus, left to right: in one frame the first two lines are crisp while on the last line the words get progressively softer until the final word is a smear. Further down the scroll the same sentence goes out of focus as a whole while the wall continues behind it. The next sentence then arrives the same way, with its opening words sharp and the tail still soft and grey. Scrolling drives it, so the reader sets the pace of the reading.

- Build: Wrap each word in an inline-block span with --i index. Scrub p across the sentence's pin. Per word: local = clamp((p*(n+6) - i)/6, 0, 1); filter: blur(calc((1 - local)*14px)); opacity: calc(.15 + local*.85). Add will-change:filter only while pinned, and keep to one sentence on screen as blur is costly. Exit: blur the whole block to 10px over the last 15% of the pin. Show plain text under prefers-reduced-motion.
- For an ordinary business: A hospice, charity or small bank's single key sentence coming into focus at reading speed gives a calm, considered tone with no imagery at all.
- Depends on: Dark or plain ground; a short sentence; used once or twice a page.

## `before-after-collapse` (loud)

The section argues by scrub: pinned, a scattered collage of the old way (receipts, forms, emails with dashed links) fades to pale wireframe as the heading swaps and one clean window remains. Or a scene flips to wireframe for a data chapter. Motion carries the claim itself.

- Build: Read `references/elements/motion.md` lines 875 to 882.

## `open-document-faq`

No accordion. Every answer open in a 670px left-aligned column: 22px display questions, 16/26 body, 34px between pairs, real links, a 20px hash anchor appearing in the left margin on hover. Searchable with cmd-F and linkable. Needs answers worth reading and suits developer tools.

- Build: Read `references/elements/section-conversion.md` lines 841 to 861.
