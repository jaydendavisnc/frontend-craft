# Show the size of it

14 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `numeral-made-of-picture` (loud)

One number as large as the window, 30 to 40vw, with a photograph showing through the digits. The number stops being data and becomes an object.

- Build: `composition.md` 4.
- For an ordinary business: A price, a founding year, a count of customers. Choose a dark or saturated picture.

## `ground-takes-over`

The whole page changes colour as a scene arrives, with no edge between them, going dark for one scene and back.

- Build: Handoff: the ground changes in `motion/score.md`.
- For an ordinary business: One dark chapter past the middle of the page.

## `odometer-answer`

A huge number that rolls digit by digit like a machine as you drag a slider tied to your own figure. The result is about you, and it changes as fast as you can move.

- Build: Rolling numerals in `components.md`.
- For an ordinary business: Interest earned, time saved, weight of flour, miles covered.

## `product-part-as-punctuation` (loud)

A macro of a black bike frame fills an inset plate, with tubes cutting diagonally across a white-to-black gradient. The two-character model name is 280px white grotesque at normal weight, from x=127 to x=455, and immediately after its last digit comes the bike's glowing red tail-light, between y=395 and y=500. The light reads as a third glyph, like a full stop. The first letter crosses the spokes and the digit's foot rests on the top tube, so the word feels set into the machine. The phone frame keeps the same pairing, so this was composed for both crops.

- Build: Crop the photo so one bright feature falls about 37% across and 49% down. h1{position:absolute;left:8.8vw;top:<feature top minus 4vw>;font-size:19.4vw;line-height:1;font-weight:400;color:#fff}. Keep a gap of about 3vw between the last glyph and the feature. Size type and image in vw and fix object-position so the two stay locked. Serve a separate portrait crop on phones that keeps the pair intact.
- For an ordinary business: A bank sets a large 0% with a coin as the next character. A bakery sets a price with a round bun as the full stop.
- Depends on: A product with one saturated or bright feature and quiet space to its left. Engines seen: no global GSAP, no Lenis, no WebGL or canvas.

## `live-counters-as-a-ticker-strip`

Below the hero stage runs a one-line strip of small pairs: an 11px uppercase grey label beside a 24px-tall pale pill with a running total. Digits roll vertically and I caught one mid-roll. The strip fades out at both ends and scrolls sideways under a fixed label on the left. Above the 64px headline, a tiny label carries a percentage to seven decimals, which I saw tick from 0.9734345% to 0.9734346% during load.

- Build: Row height 40px, flex, gap 24px, overflow hidden, mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent). Label 11px uppercase, tracking .02em, 50% ink. Value pill 24px tall, radius 6px, tabular numerals. Digit: span height 1em, overflow hidden, inner column of 0 to 9 with translateY(-n em), 500ms cubic-bezier(.2,.8,.2,1). Tick from real data or a truthful rate, and never invent a number.
- For an ordinary business: A bakery counts loaves baked today, a clinic appointments kept this month, a bank the minutes people waited on hold. Small, honest and alive.
- Depends on: A genuine count that changes, or a truthful daily total.

## `money-written-straight-onto-the-people`

In a 571x571px rounded tile, a 7.5s video of two friends at a picnic writes a budget directly onto the scene. A white word appears beside the man, its amount appears across from it near the woman, then a second row and a third row arrive below it. No card, pill or panel sits behind the numbers; plain white text lies on clothes and grass. I sampled it at 0.9s intervals and saw one pair, then two, then three.

- Build: Square tile, outer corners 48px. Muted clip or photo as ground, linear-gradient(180deg, transparent 40%, rgba(0,0,0,.25)) over it. Three absolute rows at top 36%, 50%, 64%; labels left 12%, amounts right 12%; 26px/1 weight 500 white with font-variant-numeric: tabular-nums and text-shadow 0 1px 12px rgba(0,0,0,.35). Reveal rows 900ms apart, each 400ms opacity with an 8px rise. Bake it into the video if you need it robust. Row positions are estimates from small frames.
- For an ordinary business: A bakery writes three ingredients and their farms over a photo of the baker; a dentist writes three treatment prices over a relaxed patient. Put the numbers on the picture with no card.
- Depends on: A warm real-feeling photo with calm mid-tones, and three short values. Here it is a webm in the tile.

## `numerals-straighten-under-the-pointer`

Stats sit in an uneven collage of black, white and violet cards on a black page, in very heavy condensed figures up to 162px. Some figures rest warped: in one, the first numeral is about twice the size of the last character, the baseline tilts and letters shrink along the row as if seen in a bent mirror. I tested this at rest: with the pointer on that card the same figures snap to a flat, even line, and when the pointer leaves they warp again. The warped state held unchanged for nine seconds with no scrolling. It makes dry numbers something you want to touch.

- Build: Split a figure into spans. Rest state: each span gets its own scale and rotate, descending across the row (scale 1.6, 1.25, 1, .8, .62, .5), with transform-origin left bottom, plus rotate(-7deg) on the row. Hover or focus: all to scale(1) rotate(0) over 450ms with cubic-bezier(.2,1.3,.4,1). Keep the real number in aria-label on the parent and aria-hidden the spans. On touch, flatten when the card scrolls to the centre. Check that the warped state stays legible. Card sizes: mix at least three heights and offset columns by 8 to 15vh.
- For an ordinary business: A bank's savings rate, a bakery's '3 am start', a clinic's waiting time: one playful number that sits up straight when you point at it. Use it on a single card, not a whole table.
- Depends on: A heavy condensed face and at most three or four numbers that matter.

## `small-print-decodes-itself`

The tiny 13 to 15px mono text in the corners does not fade in: it resolves character by character from wrong letters, so a mid-state frame shows a legal line reading as a garbled mix of real and random letters, and a sound label ends in a nonsense word. A frame moments later shows the correct text. Project titles and labels behave the same way, with wrong characters in the mid-state. The largest element on screen is untouched, so this is only a shimmer around the edges of the frame.

- Build: For each [data-decode] element, keep the final string. On reveal, run a timer every 30ms for about 600ms: characters before an advancing index show the true letter, the rest show a random pick from a charset of the same width. Requires a monospace font so width does not jitter. Set aria-label to the final string and aria-hidden on the animated node. Run once per element; skip under prefers-reduced-motion.
- For an ordinary business: A bank's reference numbers, a clinic's opening hours or a bakery's batch number can resolve this way for a sense of a live system, using one small script.
- Depends on: A monospace face. Use on labels only, never on body text.

## `the-object-wears-the-rate`

A glossy 3D pig in magenta and orange, about 290px wide, floats on black at the right of the section. The savings rate sits on its flank as a dark glass pill 160x90px with 40px text, overlapping its rear by about a third and hanging off it. The left column repeats the figure in a 64px heading. The rate is attached to an object in space rather than listed in a table.

- Build: Grid 1.2fr 1fr on a black ground. Cut-out render 290px wide with a soft colour bloom behind it (filter: blur(60px), opacity .35). Pill absolute, right -30px, bottom 18%; 160x90px; radius 999px; background linear-gradient(135deg, rgba(40,40,44,.9), rgba(14,70,60,.9)); 1px border rgba(255,255,255,.16); 40px/1 weight 600.
- For an ordinary business: A bakery pins the price on the loaf, a dentist pins a monthly plan on a toothbrush. One number, one object.
- Depends on: A simple cut-out object, either a 3D render or a clean product photo on transparency.

## `bleed-past-the-edge` (loud)

A 265 to 360px copy column beside an 830px window or photo that passes the container and runs off the viewport edge, saying there is more. Add four 70px-pitch icon rows for spec detail. Use once or twice for the most important product moment.

- Build: Read `references/elements/section-features.md` lines 500 to 507.

## `chapter-numeral-or-word` (loud)

A chapter opener with a single year, word or set of initials at 300-920px wide, alone on a plain ground with only the nav remaining. Use between long sections. It may recolour per chapter.

- Build: Read `references/elements/type.md` lines 1692 to 1704.

## `dense-image-wall` (loud)

Edge to edge, 0-10px gaps, no captions, four to nine columns, and the page is simply the work. Fills the viewport so scale itself is the statement. Works for archives, community output and templates. Add a fade at the base if the wall is truncated, with one button on it.

- Build: Read `references/elements/section-info.md` lines 682 to 689.

## `full-bleed-project` (loud)

One image edge to edge, 740px or viewport tall, no radius, breaking the page margins. White caption bottom left at 32px inset: 15/500 name over 15px mono type. No scrim. Or fade the bottom third into the page and set logo and statement on the fade.

- Build: Read `references/elements/section-proof.md` lines 1148 to 1155.

## `section-theme-shift`

Page background, type, rules and nav interpolate together between sections, for example paper to near-black over about half a viewport, with the CTA staying bright above the shift. No wipe and no edge. The colour change is the transition, so the page acts as one surface.

- Build: Read `references/elements/motion.md` lines 866 to 873.
