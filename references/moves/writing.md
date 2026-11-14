# Keep them reading

22 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `deck-you-throw`

A fanned stack of cards. Drag the top one and it leans, flick it and it flies off while the rest rise. Reading quotes becomes a small game.

- Build: A deck you throw in `components.md`.
- For an ordinary business: Quotes, tips, tickets, recipes.

## `image-follows-the-list`

A list set huge, 5 to 7vw, on a plain ground. Hover a row and a photograph opens beside the cursor and trails it with a little lag while other rows fade back. Plain words at rest, a gallery under the hand.

- Build: `composition.md` 6.
- For an ordinary business: Services, past jobs, news, products. Give phones a small picture in each row.

## `pictures-inside-the-sentence`

A headline at 6 to 8vw where small photographs sit in the line at cap height, between the words, growing open as it enters. The eye keeps stopping to look and the sentence feels made for this business.

- Build: `composition.md` 3.
- For an ordinary business: Macro crops of what the business touches: oak, flour, thread, a stamp.

## `catalogue-as-a-3d-stack` (loud)

The home page is a full-viewport three.js canvas (r151) on a dark brown ground: each title is a 3D mesh with its printed jacket wrapped on spine and edges, and the books form one tower about 50% of the width. At 1.5s the tower is seen small with 13 spines tapering away; by 3s the view has closed in until four books fill the screen, 96 to 135px thick with 33 to 57px gaps. Scrolling descends the tower for about 3,500px with the spines seen in perspective. Hovering grew the book under the pointer by about 2%, and clicking a spine opens that book. The titles are readable only as printing on the objects.

- Build: Fixed canvas 100vw by 100vh, WebGL. BoxGeometry per book with six textures: spine, covers, page block. Camera x 0, y from scroll with damping 0.1, slight downward tilt. Book spacing 1.4 times thickness. On hover raycast and scale to 1.02. Spacer element 4000px tall to give the scroll. Keep an HTML list of titles for screen readers. Ground #231B1A.
- For an ordinary business: A bakery stacks its loaves or cake tins, a bank stacks its passbooks through the decades, an archive its boxes. Works with any small set of objects.
- Depends on: Scans of real products, WebGL, and an accessible fallback list.

## `archive-as-objects-on-a-shelf`

The page does not scroll and has no headline. On a pale grey wall, two white shelves about 80% of viewport width each hold five square sleeves about 13.5% wide, leaning slightly back and casting long soft shadows downward. Each sleeve carries its own art, so ten releases read as a physical collection on sight. The only other text is a 14px two-line note at top left and, along the bottom edge, a ruled index of ten small columns giving year, season and name. The whole product history fits in one glance.

- Build: Without WebGL: stage 100vh, background linear-gradient on grey, perspective 1400px. Two grid rows of five, each item aspect-ratio 1, transform rotateX(4deg) with transform-origin bottom. Shelf: 8px white bar below each row with box-shadow 0 40px 60px -20px rgba(0,0,0,.25). Item shadow: a blurred dark skewed pseudo-element below the shelf. Foot index: flex row with 12px text, three lines each, each a link to the same item, and hovering it lifts the matching sleeve. Stack to two per row on phones and let it scroll.
- For an ordinary business: A bakery's seasonal menus as printed cards on a rail, a building society's annual reports on a shelf, a clinic's patient guides in a leaflet rack.
- Depends on: A set of 6 to 12 items with real cover art. The site uses one full-viewport canvas (WebGL inferred) and Inter; no GSAP or Lenis found.

## `list-row-grows-its-own-thumbnail`

The work index is a stack of centred names in a 110px condensed serif, each in a 150px row between thin black rules running the whole content width. With the pointer on a row, a small image about 167x114px appears inline straight after the name, at the same height as the letters, and the name shifts left to keep the pair centred. It works on the row under a still pointer while scrolling too, so names light up as they pass under it. There is no floating preview chasing the cursor and no card, just a picture joining the sentence.

- Build: Each row: a link, display:flex; justify-content:center; align-items:center; border-bottom:1px solid currentColor; height 150px; font-size clamp(44px,7.6vw,110px). Thumb: inline img with width 0, height .95em, object-fit:cover, margin-left 0; on hover or focus width 1.5em, margin-left .15em, transition 380ms cubic-bezier(.2,.8,.2,1). Animating width makes the centred name slide by itself. Lazy-load thumbs. Touch: show the thumb on the row nearest the centre of the screen.
- For an ordinary business: A dentist's treatment list, a cafe's menu or a bank's branch list set big with a tiny photo joining each name. It turns a plain list into the main feature for almost no work.
- Depends on: One small image per row and short names. A big condensed face keeps long names on one line.

## `picture-bursts-out-of-the-headline`

A seven-line centred headline in 90px heavy condensed capitals, about 45% of viewport width, has tiny dark squares set in word gaps on three lines, each about the size of a full stop made huge. With the pointer in the middle of the headline, a colourful picture about 18% of viewport width and 23% of its height appears on top of the type, covering parts of two lines. Moving on, the headline is clean again. I saw the image appear with the pointer over the headline, but could not establish whether the squares themselves trigger it.

- Build: Headline: text-align center, font-size clamp(44px,6.3vw,90px), line-height .86. Insert inline-block tokens .35em square, background ink, vertical-align .15em, between chosen words. Each token owns a hidden img: position:absolute, width 18vw, aspect-ratio 5/4, transform scale(.1), opacity 0, transform-origin at the token. On token hover or focus: scale 1, opacity 1 over 240ms with cubic-bezier(.2,1.4,.4,1). Give tokens tabindex=0 and an aria-label. On touch, open each once as the line reaches the middle of the screen.
- For an ordinary business: A bakery's sentence about sourdough, rye and seeded loaves where a dot after each word pops open a photo of it. It works in any text-only section with no layout change.
- Depends on: A statement with several concrete nouns worth illustrating.

## `private-glyph-per-entry`

Every project in the index has a 38px black square holding a tiny white pictogram drawn for that one building, its silhouette or plan reduced to a mark. The square sits above a right-aligned caption in the left gutter, with the project name in about 13px and the location in about 11px grey capitals. There were 263 of these icons in the DOM at load. They work like a private alphabet, and the column of black squares gives the long page its beat.

- Build: For each item, a 52x52 SVG, white on black, shown at 38x38. Caption block: text-align:right, name 13px, place 11px uppercase #888, sitting in the gutter 11px left of the image. Generate glyphs by tracing each subject's silhouette or plan to a single shape inside the square.
- For an ordinary business: A bakery draws one tiny stamp per loaf from its slash pattern and uses it on the bag too. A dentist draws one per treatment.
- Depends on: A list of real things, and an afternoon per dozen to draw them. Engine seen: Lenis smooth scroll. No global GSAP, no WebGL, no video.

## `product-flipbook-loop`

A book lies open on a pale grey panel, 944x673px, shot from above with its real page edges and a soft shadow. It does not stay still: the spread changes by hard cut on its own, including one frame of the closed cover. With the page parked at y=3240, eight screenshots gave six different frames, and the scroll position and image source did not change. It is one animated WebP file with no video or canvas, so it runs on time and not on scroll. Hovering a nearby record sleeve produced no change, so the interest here is only the loop.

- Build: Shoot 8 to 12 spreads from a fixed overhead camera with the same light. Export as animated WebP at about 700ms per frame, quality 80, about 1000px wide: img2webp -d 700 -q 80 *.jpg -o flip.webp. <picture><source media='(prefers-reduced-motion: reduce)' srcset='still.jpg'><img src='flip.webp' width='944' height='673' loading='lazy'></picture>. No JavaScript.
- For an ordinary business: A bakery flips through its recipe booklet. A dentist flips through a patient guide. A bank flips through a welcome pack. Ten phone photos.
- Depends on: A physical product with an inside: a book, a menu, a box, a folder. A phone on a tripod is enough. Frame interval inferred from the samples.

## `anaphora-list` (loud)

Five left-aligned lines in a centred block, each opening with the same short word in bold accent sans at about 54px, followed by a serif phrase at the same size, about 67px line step. Repetition turns a stance into the strongest type moment on the page.

- Build: Read `references/elements/type.md` lines 770 to 781.

## `statement-as-hero` (loud)

A full sentence or list takes the headline job, 35-80px, weight 400-500, line-height 1.1-1.2, with no size or weight change inside it, running 60-100% of the container. Break lines by hand. Allow at most one inline object or underlined link. No subhead follows.

- Build: Read `references/elements/type.md` lines 484 to 495.

## `statement-closer` (loud)

The footer's largest element is a sentence, 76-170px, not a logo: a mission line, a repeat of the hero heading, or a plain ask. Small link columns or one legal row sit around it. Say something true and specific, or it reads as a slogan.

- Build: Read `references/elements/section-info.md` lines 421 to 428.

## `founder-bio-split`

One named person as the pitch. 50/50: a 676 by 1000 greyscale portrait cropped to the waist beside a bio in the page's display serif at 63/68, link pinned to the photo's base. Or a 56px greeting on ink beside an offset-framed portrait.

- Build: Read `references/elements/section-proof.md` lines 1320 to 1338.

## `hand-inked-line`

Strict structure, slight tremor: 1.25-2px near-black line, 60-100px, pale filled nodes or patches as the only tone, at most one flat colour. Let the drawing encode meaning, such as branches multiplying per tier. Keep to margins, tiles and emblems, never behind text.

- Build: Read `references/elements/media.md` lines 757 to 779.

## `ink-then-grey-run-in`

One paragraph at 32-48px, weight 300-500, line-height 1.0-1.2, left aligned, 780-1150px wide. First sentence in full ink, the rest runs on in the same line at about 6:1 contrast. No eyebrow, no subhead. Repeat for nearly every section. Use text-wrap: pretty, never balance.

- Build: Read `references/elements/type.md` lines 517 to 536.

## `open-document-faq`

No accordion. Every answer open in a 670px left-aligned column: 22px display questions, 16/26 body, 34px between pairs, real links, a 20px hash anchor appearing in the left margin on hover. Searchable with cmd-F and linkable. Needs answers worth reading and suits developer tools.

- Build: Read `references/elements/section-conversion.md` lines 841 to 861.

## `quiet-serif-over-sans-ui`

One serif used only for H1 and H2, weight 300-500, 44-80px (up to 128px on dark manifesto pages), line-height 1.0-1.1, tracking 0 to -0.03em, single ink, never bold. All UI, labels and body stay sans or mono, so the serif alone carries the voice.

- Build: Read `references/elements/type.md` lines 203 to 222.

## `regular-weight-quiet`

Headline at weight 400 only, 48-116px, line-height 1.0-1.1, tracking -0.01 to -0.03em, black or warm near-black, flush left, one line if it fits. Allow no bold heading anywhere on the page. Hierarchy comes from size and ink alone; labels drop to 11-13px mono or small caps.

- Build: Read `references/elements/type.md` lines 155 to 169.

## `same-size-two-voices`

One size, 32-64px, weight 400-600, line-height 1.0-1.25, tracking 0 to -0.03em. Two clauses split by tone: first at full ink, second at 45-60% ink, on a second line or running on. Alternatives: drop weight two steps, or change case. This block replaces the subhead.

- Build: Read `references/elements/type.md` lines 275 to 294.

## `single-measure-column`

One centred 580-640px column for everything: bio, rows, media. On 1440 that is x=400-1040. Index rows split it into three columns at 224 pitch. Optional 1px dashed side rules and 48px inner padding. Pages often under 1600px tall.

- Build: Read `references/elements/layout.md` lines 1062 to 1068.

## `under-scaled-title`

H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

- Build: Read `references/elements/type.md` lines 408 to 422.

## `word-ink-scrub`

Statement of 34-72px starts at 15-20% ink. Each word or character reaches full ink tied to scroll position, never to time, with a soft front 1-2 characters wide or a gradient spread over about 3 lines at reading height. Pace follows the reader. One per page, or one per chapter.

- Build: Read `references/elements/motion.md` lines 541 to 573.
