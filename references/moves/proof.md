# Let someone else say it

38 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `columns-take-turns` (loud)

Four to six tall pictures side by side at full height, each a sliver with a name running up its edge. The one you hover or tap swells to take most of the row and its caption slides in.

- Build: `composition.md` 7.
- For an ordinary business: People, branches, products or chapters.

## `deck-you-throw`

A fanned stack of cards. Drag the top one and it leans, flick it and it flies off while the rest rise. Reading quotes becomes a small game.

- Build: A deck you throw in `components.md`.
- For an ordinary business: Quotes, tips, tickets, recipes.

## `drag-across-two`

A handle dragged across two pictures of the same place, before and after.

- Build: Drag across two pictures in `components.md`.
- For an ordinary business: Before and after a repair, a clean, a renovation, a month of bookkeeping.

## `ground-takes-over`

The whole page changes colour as a scene arrives, with no edge between them, going dark for one scene and back.

- Build: Handoff: the ground changes in `motion/score.md`.
- For an ordinary business: One dark chapter past the middle of the page.

## `overlapping-prints`

Two or three pictures of different sizes laid over each other and over the heading, like prints on a table, drifting at different speeds. Nothing sits in a neat cell.

- Build: `composition.md` 10.
- For an ordinary business: Any set of three good photographs.

## `pictures-inside-the-sentence`

A headline at 6 to 8vw where small photographs sit in the line at cap height, between the words, growing open as it enters. The eye keeps stopping to look and the sentence feels made for this business.

- Build: `composition.md` 3.
- For an ordinary business: Macro crops of what the business touches: oak, flour, thread, a stamp.

## `speed-aware-marquee`

One line of huge type crossing the screen, slow at rest and faster as you scroll, as though attached to your hand. Named places or trades rather than logos.

- Build: Speed-aware type in `motion/score.md`.
- For an ordinary business: Towns served, trades served, ingredients.

## `words-light-as-you-read`

A long sentence set at 4 to 6vw, almost invisible, each word coming up as it passes the reading line. A paragraph becomes a scene.

- Build: Words light up in `motion/score.md`.
- For an ordinary business: The one sentence that says what the business believes.

## `cut-outs-face-off-across-the-headline` (loud)

Two cut-outs bleed off opposite edges and face each other: on the left a helmet cropped by the viewport edge at about 23% of the width, on the right a head in profile at about 23%, each roughly 50 to 90% of viewport height. The gap between them, about 45% of the width, is the only place for type, which sits in two columns of two lines at 93 to 98px, line-height .82, serif above grotesque. The objects literally look at the words, and a neon scribble is hand-drawn across one word. Scrolling on, a full-bleed photo rises from the bottom with a hard straight edge and covers it all, and that photo holds both subjects together in one room.

- Build: Section 100vh, position:relative, overflow:hidden, background flat. Two absolutely positioned transparent PNG or WebP cut-outs: left:-6vw, width 30vw and right:-4vw, width 30vw, bottom aligned to the section. Text: centred block max-width 44vw, grid 1fr 1fr with gap 3vw, font-size clamp(56px,6.6vw,98px), line-height .82. Next section is a 100vw photo with margin-top:-100vh and sticky stacking so it slides over the pinned section: position:sticky; top:0 on the cut-out section, z-index 1 on the photo. Translate the photo inner image up by 12% over the rise for parallax.
- For an ordinary business: Any pairing works: a loaf facing a bag of flour, a retainer facing a smile, a pair of keys facing a front door. Put the sentence in the gap and then cut to the real scene showing them together.
- Depends on: Two clean cut-outs whose subjects point inward, and a follow-up photo that pays off the pairing.

## `film-recedes-into-a-wall-of-work` (loud)

A black card holding a product film rises under a short statement and reaches about 92% of viewport width, then keeps shrinking as you scroll: about 75% at the next stop, then 58%, then 38%. As it shrinks it turns out to be one tile of a larger wall: neighbouring dark tiles slide in around it with 16px gaps and 8px corners, each holding a different product on black. Scrolling on, the wall moves while the sentence holds its place. No section seam occurs anywhere in this run; one film becomes the whole portfolio.

- Build: Pinned section 300vh, sticky 100vh, overflow:hidden. Build the wall as a CSS grid 3 columns wide, sized at 270vw so the centre tile fills the viewport at scale 1. Scrub transform scale 1 to .37 on the grid about the centre tile between p .1 and .6, so neighbours arrive naturally without separate animation. Then translateY each column by a different amount (-10vh, -24vh, -6vh) between p .6 and 1. Use muted, inline, looping video in each tile, poster images, and pause tiles out of view with IntersectionObserver.
- For an ordinary business: A wedding baker's one cake film pulling back into a wall of twelve cakes; a builder's one kitchen becoming the full set of projects.
- Depends on: Six to nine pieces of matching tone on the same ground colour. The site does this with Lenis and 22 video elements, no canvas, so no WebGL is required.

## `wordmark-at-building-scale` (loud)

Between the project grid and the drawing, the company name runs as one line of 400px heavy navy type, 3610px long per copy, with three copies in a row, cropped by both edges of the viewport. Only about six letters fit at once, so you read the name over time. It keeps drifting left when idle, at about 74px per second as measured, and moves much faster during scrolling, covering 424px over 200px of scroll on the fastest stretch. The link between scroll speed and drift is inferred from those measurements.

- Build: h2{font-weight:900;font-size:400px;line-height:1;white-space:nowrap;will-change:transform}, three copies in a flex row. rAF loop: x -= dt*.074 + Math.abs(scrollDelta)*2; if x < -copyWidth then x += copyWidth. Use once per page only. Reduced motion: static, single copy.
- For an ordinary business: A bakery's one word at 30vw crosses slowly between two sections. Use it once, as a pause.
- Depends on: A short strong name and a heavy typeface.

## `caption-broken-around-the-picture`

A small black image card about 31% of viewport width sits on a white page, off-centre, and its 15px caption is broken into three pieces placed around it: the first words sit above its left edge, the next ones to the left of it at mid-height, and a date range to the right. Another card further down has a two-line caption whose second line is indented by about 8% of the width. The small text is scattered deliberately, so the image seems to hold the words in orbit. On a very restrained black and white page, that is enough to feel designed.

- Build: Grid 12 columns. Image spans columns 5 to 8. Caption pieces are separate spans placed in the grid: piece 1 at column 4 to 5, aligned to the image's top with translateY(-1.4em); piece 2 at column 3 to 4, align-self:center, text-align:right; piece 3 at column 9, align-self:center. Size 15px, line-height 1.3. On phones, gather them into one line under the image. Read aloud order must still make sense in the DOM.
- For an ordinary business: 'Baked / since / 1962' around one photo of the first shop; 'Open / until / six' around a door. No new assets, only a decision about where words go.
- Depends on: A phrase that can be split, and generous white space.

## `cursor-torch-on-a-privacy-promise`

On pure black, a four-line centred paragraph at 64px/82px sits dim at 15% white in a 1095x328px block. A soft circle of full white about 400px across lights only the words under the pointer, cutting letters mid-word at its edge. I moved the pointer left and then right and the lit patch followed; with the pointer parked centrally the middle of each line is lit and the line ends fall away. The paragraph is about keeping data private, so you read it through a small pool of light. There is no image in the section at all.

- Build: Two stacked copies of the text, the top one aria-hidden. Base colour rgba(255,255,255,.15). Top colour #fff with mask-image: radial-gradient(circle 200px at var(--x) var(--y), #000 40%, transparent 100%). On pointermove set --x and --y in px, lerped by .12 in requestAnimationFrame; default 50% 50%. Font 64px/82px weight 600, letter-spacing .01em. On touch, drive --y with scroll position. The mask technique is inferred; the visible result was observed.
- For an ordinary business: A bank uses it on a fraud promise, a clinic on its confidentiality statement, a bakery on an ingredient list. Once per site, on the sentence that matters most.
- Depends on: One short paragraph worth reading slowly, a dark plain ground and a pointer.

## `person-and-outcome-tile-in-the-grid`

A hairline grid of 164px logo cells, six across, ends at right in a 327px-wide tile holding a portrait or scene. A small company tag and a 64px white outcome figure sit on the darkened foot of the photo. With no hover, the tile changed from one customer and figure to another within 5 seconds, and the logos around it were different between captures too. Small round arrow chips at cell corners mark the logos that have a story behind them.

- Build: Grid 164px cells with 1px hairlines and small plus marks at joints, right column 327px spanning two rows. Portrait object-fit: cover, gradient to rgba(0,0,0,.6) at the foot. Figure 64px/1 white, tag 13px. Cycle every 5s with a 400ms crossfade on photo and figure. Arrow chip 24px circle top-right of linked cells.
- For an ordinary business: A dentist rotates a patient portrait with a plain result, a bank a shop owner with what the loan paid for, each with permission.
- Depends on: Real customer portraits and one defensible number for each.

## `section-edge-bows-then-flattens`

A black section gives way to an off-white one, and the seam is not a straight line: the black section's lower edge bows downward across the full width, about 32px (roughly 4% of viewport height) deeper in the middle than at the left edge. Scrolling on, the bow relaxes and it is dead straight by the time the seam reaches the top of the screen, following scroll position, since all three frames were taken at rest. A tall photo straddles the seam, its top 20px above the curve, so the picture sits on both sections and hides the deepest part of the bow. Contour lines on the lighter section continue under it.

- Build: Upper section: position:relative; z-index:2; background black. Give it a pseudo-element at bottom: position:absolute; top:100%; left:0; width:100%; height:var(--bow); background:inherit; border-radius:0 0 50% 50% / 0 0 100% 100%. Scrub --bow from 40px to 0 as the seam travels from 100% to 0% of viewport height. The pseudo-element overlaps the next section, so no margin is needed. Put one tall image on the next section with margin-top:-20px and z-index:3 so it crosses the seam.
- For an ordinary business: Works anywhere two sections change background: a bakery moving from a dark oven photo band to a cream menu section gets a soft, doughy seam for about ten lines of code.
- Depends on: Two sections with very different grounds so the seam is visible.

## `words-pull-focus-one-at-a-time`

Sentences do not fade or slide. Words sharpen from heavy blur like a lens racking focus, left to right: in one frame the first two lines are crisp while on the last line the words get progressively softer until the final word is a smear. Further down the scroll the same sentence goes out of focus as a whole while the wall continues behind it. The next sentence then arrives the same way, with its opening words sharp and the tail still soft and grey. Scrolling drives it, so the reader sets the pace of the reading.

- Build: Wrap each word in an inline-block span with --i index. Scrub p across the sentence's pin. Per word: local = clamp((p*(n+6) - i)/6, 0, 1); filter: blur(calc((1 - local)*14px)); opacity: calc(.15 + local*.85). Add will-change:filter only while pinned, and keep to one sentence on screen as blur is costly. Exit: blur the whole block to 10px over the last 15% of the pin. Show plain text under prefers-reduced-motion.
- For an ordinary business: A hospice, charity or small bank's single key sentence coming into focus at reading speed gives a calm, considered tone with no imagery at all.
- Depends on: Dark or plain ground; a short sentence; used once or twice a page.

## `colour-flood-quote` (loud)

One or two panels of loud colour on a quiet page: radius 8 to 40, 400 to 800px tall, 24 to 36px quote with tight leading top left, name and logo pinned low. Unequal widths such as 880 and 432 beat equal ones. Text in a dark tint of the fill. Use once.

- Build: Read `references/elements/section-proof.md` lines 325 to 344.

## `display-pull-quote` (loud)

One quote as a full-width moment: 48 to 64px on 1.05 leading, tracking -2 to -3%, often the page's only serif, 700 to 1220px wide. Mark in the left rail or none. Attribution 14 to 18px below, with square portrait and logo split by a rule. Sits between hairlines or on a quiet field.

- Build: Read `references/elements/section-proof.md` lines 199 to 219.

## `numerals-on-photo` (loud)

White numerals 40 to 130px directly on a photo, 12 to 14px tracked label, darkening only where they sit. Inset the pane 100px or use the photo's dark area. Or small white chips at radius 10 on a close-up. The photo must relate to the number.

- Build: Read `references/elements/section-proof.md` lines 945 to 952.

## `one-giant-number` (loud)

One figure owns the section: 96 to 200px, tight, alone in a band or outlined card, 13 to 14px caption. It may roll on entry or change with scroll. Choose the one number that would surprise someone, and never rest on zero.

- Build: Read `references/elements/section-proof.md` lines 936 to 943.

## `bar-behind-row`

Ranked list where each label sits on a tinted bar scaled to its value: 36px pitch, 32px bar, radius 4, 10% tint, value right aligned at 14/500 in its own column. Bars stop short of the values. One tint per panel.

- Build: Read `references/elements/app.md` lines 444 to 463.

## `bump-chart`

Rank over time: smooth curves across 5 to 6 named columns, one highlighted in ink and the rest pale, rank labels at left, category pills above. Curves are safe here because only order matters. Say rank, not value.

- Build: Read `references/elements/app.md` lines 1353 to 1362.

## `cost-bars`

Cost difference shown as length: rival a full-width bar with its price, yours a 12px dot or a short bar. 12 to 32px bar height, 22px tabular prices right-aligned, a row of shared assumptions above and small-print method below. Use only with honest, sourced numbers.

- Build: Read `references/elements/section-conversion.md` lines 601 to 621.

## `direct-label-chips`

Lines labelled on the plot, no legend: filled 12/600 chips on 1px vertical leaders into each curve, single pale axes, 11px caps axis titles. Highlight series dashed in accent with an open-ring terminus and a bordered note. State when schematic.

- Build: Read `references/elements/app.md` lines 1236 to 1253.

## `figure-ledger`

Stats as stacked rows. Right 600px column beside a 40px two-tone heading, rows 160px tall on 1px hairlines: 64/400 figure left, right-aligned 16px label over a 12px mono caps note. Or alternate figure, customer logo and one sentence on a dark band.

- Build: Read `references/elements/section-proof.md` lines 830 to 847.

## `hanging-quote-on-grid`

No card. Two columns on the page grid, 32/40 quote at weight 500, tracking -2%, opening mark hung left of the text edge so the text stays on the grid. Name and role pinned to the base at 14px, customer logo right-aligned on that line. Pair one long quote with one four-word quote.

- Build: Read `references/elements/section-proof.md` lines 177 to 197.

## `letter-or-interview`

One person at length. A 766px square paper card with 48px avatar, ruled heading, 16/28 candid bullets and a signature. Or a full-screen question and answer split by 1px rules, one exchange per viewport. Use when you have a real voice and no logos.

- Build: Read `references/elements/section-proof.md` lines 463 to 470.

## `logos-inside-another-block`

No band. Five 20 to 24px grey marks in the text column under the sentence they support, at 86px centres; or a 94px strip on the hero's foot; or a 450 by 56 dock; or marks passing behind the headline. Proof attaches to a claim.

- Build: Read `references/elements/section-proof.md` lines 658 to 665.

## `margin-between-two-lines`

2px line with end dot over a dotted 1px line, fine vertical hatching filling only the gap between them. 12px legend at the base, one baseline rule, no axes or gridlines. No colour needed.

- Build: Read `references/elements/product.md` lines 1733 to 1755.

## `number-as-diagram`

The figure is drawn, not stated: widths in true ratio (170 beside 988px for 45 and 220 wpm), bars proportional on the page grid, a dot matrix spelling the count, circles counted and crossed, or one hairline curve under 2px-ticked metrics. The scale must be honest.

- Build: Read `references/elements/section-proof.md` lines 895 to 915.

## `one-filled-shape`

Descending isometric bars in 1px dotted outline on black, no axes, with only the winner solid and labelled in accent. Or a greyscale diagram with one dark outline, or a 230px outline pie with one accent slice.

- Build: Read `references/elements/product.md` lines 1700 to 1709.

## `quiet-interlude-quote`

A short centred quote between feature blocks, no card: 20 to 28px, 580 to 820px wide, 36 to 48px avatar, 14px name and role, optional logo after a 1px divider. Emphasis by ink: first sentence full ink and the rest muted, or one phrase at weight 500. Stays below headings in weight.

- Build: Read `references/elements/section-proof.md` lines 221 to 230.

## `quote-beside-interaction`

A review shares a row with something the reader can do: two 546 by 600 cards, 8px gap, radius 24, one a 44px question with 54px pill answers, the other stars, 44/48 quote and a member chip. Proof sits one tap from the decision. Keep legal disclosures visible.

- Build: Read `references/elements/section-proof.md` lines 490 to 497.

## `sentence-stats`

Numbers read as sentences. Centred 64/600 lines at 88px pitch: figure, an inline object at cap height replacing the word space, noun. Or 24px facts split by a rule, or bold figures opening ordinary lines beside a phone. No labels, no cards.

- Build: Read `references/elements/section-proof.md` lines 917 to 934.

## `single-claim-line`

One line 1.5-2px, optional fill fading to near-white, four ring markers or a live end dot, hairline grid, 12px axis labels, caption half accent, half ink. Width up to 1130px. Or a word set large over the line.

- Build: Read `references/elements/product.md` lines 1624 to 1633.

## `smeared-plate`

Rotate a photo 8 to 14 degrees, directional blur 70px along x and 2 to 3px across, boost saturation, add grain .09. Flat plates behind every demo and logo, radius 8 or square, hue varying per plate.

- Build: Read `references/elements/atmosphere.md` lines 2235 to 2260.

## `steps-showing-the-real-thing`

Three or four columns, each a small marker, a 32px tight title, 18/29 copy, then the real screen at full size with no window chrome: a picker, a form, a feed. Reserve copy height so the proofs start level. The first thing to try for any product.

- Build: Read `references/elements/section-features.md` lines 1036 to 1063.

## `typeset-client-names`

Client names as type, no logos. Three rows of 51px serif at 120px height on 1px rules, 18px hollow circles between, rows sliding opposite ways. Or an alphabetical 14px list in one 480px column, where a gallery and a global brand weigh the same.

- Build: Read `references/elements/section-proof.md` lines 703 to 724.
