# Ask for the thing

33 moves. Loud ones first within each source. A page holds two or three loud moments at most.

## `bleeding-headline` (loud)

A heading so big it runs off the screen, cropped on purpose, with a picture butted hard against it. Scroll slides it sideways so the rest arrives. The page feels larger than the window.

- Build: `composition.md` 9.
- For an ordinary business: Works on a type-led page too. The word must still read.

## `colour-field-cutout` (loud)

A full-screen flat field of the brand colour with one cut-out person or object on it, large and bleeding off the bottom edge, with type set against the empty side. An ordinary photograph suddenly looks like a campaign.

- Build: `composition.md` 11.
- For an ordinary business: One person or product from the set, cut out with scripts/cutout.swift.

## `word-behind-subject` (loud)

A photograph fills the screen and one huge word, 18 to 26vw, runs behind the person or object in it, so the letters pass behind a shoulder and come out the other side. It reads like a magazine cover. Three layers: the picture, the word, the same picture's subject cut out on top, each moving at its own speed on scroll.

- Build: `composition.md` 1. Make the top layer with scripts/cutout.swift, or render on a transparent ground.
- For an ordinary business: Any business with one person or object worth looking at. A baker behind the word Bread, a van in front of a town's name.

## `sentence-form`

A line of display type with blanks in it. The visitor completes the sentence in place, and it answers them.

- Build: A form that is a sentence in `components.md`.
- For an ordinary business: Any enquiry: I need a table for two on Friday.

## `address-set-as-a-typographic-composition` (loud)

The footer's contact details fill the bottom third of the screen in three lines of a condensed high-contrast serif at about 90px, justified by eye so the lines run about 70% of viewport width. Between the words sit custom ornaments the same height as the type: a diamond holding a letter, map coordinates stacked in two bold 22px rows between small arrows, a quatrefoil, boxed and ringed letters, a curved double arrow, a phone number built as a ruled fraction-like table, and a long looping swash standing in for the at sign. Every piece of plain data has become a small drawing. A boring address is the best-looking thing on the page.

- Build: Set three lines at font-size clamp(40px,6.2vw,90px), line-height 1.1, in a condensed serif. Inline ornaments as SVGs with height 1em and vertical-align -.12em, or as ligatures in a small custom font. Stacked coordinates: inline-grid of two rows at .24em bold, between tiny arrow glyphs. Phone: inline-grid with 1px borders, area code in one cell and the two number groups stacked in the next. Keep the real text available: wrap the block in an address element, aria-hidden the ornaments, and keep tel: and mailto: links on the real values. Break by hand at each width.
- For an ordinary business: This is the most directly useful move for a local business. A bakery's address, hours and phone number, drawn into one big composition with a wheat ear and a clock, becomes the poster for the shop.
- Depends on: A distinctive display serif; 6 to 8 small drawn ornaments; custom font LocomotiveNew plus Helvetica Now on the site, with Lenis and two small canvases.

## `door-of-light-as-the-last-call` (loud)

The closing section is a render of a door ajar in a dark room, filling the left half of the screen: a blown-out white slit about 16% of the frame wide, with warm orange light falling across walls and floor. To its right sits heavy serif at 112px/108px in two lines, in a 690px box starting at x=750, and a small paragraph below. The light spills toward the type, so the heading seems lit by the door. I saw no animation in it across frames; it scrolls with the page.

- Build: Section 100vh on #000. Image at left 0, width 60vw, object-fit: cover, mask-image: linear-gradient(90deg, #000 70%, transparent). Text at left 52vw, 112px/108px weight 700, tracking -0.005em, then an 18px/1.6 paragraph at 60% opacity, max-width 420px. Keep one warm hue against the black page; it should be the only warm area on the site.
- For an ordinary business: A bakery's lit back door at 5am, a clinic's door half open, a bank's door at closing: end the page on a threshold instead of a coloured band.
- Depends on: One lit-doorway image: a render or a real long exposure.

## `listing-set-on-the-facade` (loud)

A full-bleed photo of a real brick theatre with a red awning fills about 88% of the viewport height. Its lower third carries the whole listing directly on the brickwork: a 96px two-line title at the left, small stacked credits, a synopsis in 14px white, and a solid white ticket button at the far right. The bottom of each block lines up along one band. Because the building is the actual venue, the picture is doing the job of the address.

- Build: section{position:relative;height:88vh} img{width:100%;height:100%;object-fit:cover}. .band{position:absolute;left:22px;right:22px;bottom:20px;display:grid;grid-template-columns:320px 160px 1fr auto;gap:24px;align-items:end;color:#fff}. h2 96px/.87, letter-spacing:-.034em. Credits 11px mono. Synopsis 14px/1.4, max-width 56ch. Darken only the lower third: linear-gradient(transparent 55%,rgba(0,0,0,.45)).
- For an ordinary business: A dentist uses a straight-on photo of the shopfront and sets hours, phone number and a booking button across the pavement in the picture.
- Depends on: A real photo of the actual place with a busy but dark lower third.

## `offer-name-as-a-made-object` (loud)

The lower half of the footer holds a rendered chrome word, its letters extruded in steep perspective and growing in height from left to right. It runs from 34% of the width to the right edge, rises to about 44% of viewport height and its feet sit on a hairline rule that crops it. To its left is a two-line offer of about 44px and one solid white button. Against flat black it is the only 3D object on the page, placed in what is normally dead space.

- Build: Model the word in Blender or Spline with brushed metal at steep perspective, export transparent PNG about 1000x400. Footer lower band: display:grid;grid-template-columns:33% 67%;align-items:end;border-bottom:1px solid #444;overflow:hidden. Keep the link columns above it small, 16 to 18px.
- For an ordinary business: A bakery spells its loyalty scheme in biscuit letters, bakes them and photographs them. A real object beats a render here.
- Depends on: One offer worth naming and a render or real object.

## `tiny-subject-with-type-in-the-empty-sky` (loud)

The desk and chair take about 23% of the frame width and sit between 58% and 84% of its height, centred on a grass ridge, with valley, mist and pink-grey sky filling everything else. The 49px headline, 20px subline and a pill email field stand centred in the top 40%, all in empty sky, and nothing overlaps the subject. A river runs up the centre axis behind the laptop and points back toward the form, so the eye moves between product and action along a line inside the picture. The photo runs full-bleed under a translucent nav and darkens toward its corners, which keeps white text readable without a flat scrim.

- Build: Hero 100vh, image object-fit: cover; object-position: center bottom. Keep all type inside the top 40%: centred column, max-width 620px, padding-top 96px. Subject centre at 70% of height and no wider than 25vw. Vignette: radial-gradient(ellipse 80% 70% at 50% 45%, transparent 55%, rgba(10,12,20,.55)). Headline 49px/1.1 weight 480 in rgba(255,255,255,.9). Field 400x48px pill in rgba(255,255,255,.12) with backdrop-filter: blur(12px).
- For an ordinary business: Shoot the one chair, oven or counter from far back, so the place is the subject and the wall or sky above it becomes the headline area.
- Depends on: A photo or composite with a small central subject, real empty headroom and one leading line.

## `two-words-in-opposite-corners-object-between` (loud)

The hero splits a two-word phrase across the diagonal of the screen. One word in heavy condensed 180px capitals sits top left, the other bottom right, and a glowing 3D object about 50% of viewport width fills the space between. The object overlaps the end of the first word and rises over the nav zone. A small 14px mono paragraph sits under the first word and runs into the object. You read the phrase by travelling across the subject.

- Build: Stage 100vh, black, position:relative. Word A: absolute, top 7vh, left 1.5vw. Word B: absolute, bottom 3vh, right 2vw. Both font-size clamp(72px,12.5vw,180px), line-height .82, weight 900, condensed. Subject: centred at 52vw, z-index above word A and below word B, shifted about 6vw right of centre. Paragraph: absolute under word A, max-width 26ch, 14px mono. Mobile: keep the diagonal with type at 22vw.
- For an ordinary business: 'Fresh' top left and 'daily' bottom right with one loaf crossing between; 'Healthy' and 'smiles' around one apple. A plain photo cut-out does the work of 3D.
- Depends on: A cut-out or object on plain ground with a clear diagonal, and a two-word idea. A heavy condensed face helps.

## `control-sits-inside-the-sentence`

Across the middle of the video card two words in very light type, about 105px judging by a 75px cap height, sit either side of a white pill 135x85px holding a play glyph, so the button reads as a word in the line. The whole group spans 50% of viewport width and is centred on the image. The clips behind change (three different ones in nine seconds at rest) while the words and pill hold still. A row of tiny + registration marks runs above and below the card at even spacing, like crop marks on a print sheet. The play control therefore needs no label of its own and no overlay darkening.

- Build: Flex row, align-items:center, gap .35em, font-size clamp(40px,7.3vw,105px), font-weight 300. Middle element is a button: width 1.5em, height .95em, border-radius 999px, background white, svg icon .25em. Hover: width grows to 1.9em over 300ms cubic-bezier(.2,.8,.2,1) so the words are pushed apart. Marks: a repeating grid of 9px + glyphs in a 1px-high row above and below the card, spaced at 25% of the card width.
- For an ordinary business: Use it for any primary action: a bakery's 'Order [pill] today', a clinic's 'Book [pill] online'. It costs nothing and turns a button into a designed line.
- Depends on: A short phrase that reads naturally around a control.

## `copy-in-the-cast-shadow`

The buy block is set in the darkest part of the shadow, at about y=1240 to y=1370, centred, in 40px white capitals of a rounded techno face: a slogan, a price and an outlined button. No panel or scrim is needed because the shadow gives full contrast. Its soft edges frame the 315px wide block against the bright floor on both sides, about 95px clear either side. The block looks lit by the same scene, because the dark behind it is real.

- Build: Absolute at left:50%;transform:translateX(-50%);top:<y in image>. font-size:2.755vw (39.7px at 1440);line-height:1.11;text-transform:uppercase;color:#fff. Button border:1px solid #fff;border-radius:4px;padding:0 40px. Use vw for type so the block stays inside the shadow when the image scales.
- For an ordinary business: A bakery sets a price in the shadow of a rolling pin. A bank sets a rate in the shadow of a doorway.
- Depends on: A shot with a dense, wide shadow. Low window light on a phone photo can give this.

## `footer-sheet-turns-opaque-over-the-reel`

The last section is a full-bleed film. As the page ends, a footer panel rises over it and starts out translucent grey, with the film visible through it, then turns solid white within a few hundred pixels of scrolling. It stops at about 60% of the viewport, so the film keeps running in a band across the top. At rest, that band kept changing, showing three different clips over nine seconds, one with a red colour wash. The footer is thus a calm white page held under a live picture, with a two-line 42px invitation.

- Build: Sticky reel: position:sticky; top:0; height:100vh; z-index:0. Footer: position:relative; z-index:1; margin-top:-60vh; height:60vh. Scrub background from rgba(255,255,255,.2) to #fff over the footer's first 25% of travel, using animation-timeline:view() or a scroll listener. Reel: 3 clips, crossfade every 3 to 4s. Keep footer text hidden until the panel is 80% opaque, so contrast never fails.
- For an ordinary business: A bakery's oven or shop-floor loop running above its opening hours; a clinic's calm reception shot above its address.
- Depends on: Several short clips of the same mood; one pinned layer.

## `medallion-turns-as-you-scroll`

After the stack, a flat book cover in a starfield starts tilted at 3,700px and straightens to face you by 4,100px. Then the scene changes to a low-lit stone model city seen from above, with a red disc carrying printed words. As scroll runs from 4,400 to 5,300px the disc turns on its horizontal axis: a squashed ellipse, a full 350px circle at 4,700px, nearly edge-on at 5,000px with a small globe at its centre, then a ring behind the title at 5,300px. It loads a single glb model and the title passes through it. The white page rises over the scene like a curtain at the end.

- Build: In the same canvas, one glb disc with a texture per face. rotation.x = progress * Math.PI * 2 across 900px of scroll. Tilted plane version: rotation.x from 0.5rad to 0 across 400px. Directional light low from the left for long shadows. Final section position: relative; z-index above the canvas with a white ground.
- For an ordinary business: A bank flips its old coin, a bakery its stamp, a clinic its seal as the page ends.
- Depends on: A small 3D model and a canvas. CSS rotateX can fake a flat disc at no cost.

## `offer-printed-on-a-real-prop`

One tile is a studio photo of a green tote bag on a yellow-green stool against a concrete wall, with pineapple leaves sticking out of the top. The offer's words are printed on the bag in white, slightly uneven with the fabric, and the domain appears on a small patch. There is no overlay type at all; the message exists as a physical object in the set. The bag's green matches the brand ground of the neighbouring tile.

- Build: Keep the image 1:1.15, cover, no overlay. Shoot on a neutral wall with one hard side light, prop in the accent colour, and one odd natural element for scale and wit. Text on the prop only, about 6% of the frame height.
- For an ordinary business: A bakery prints the offer on a paper bag, a dentist on a toothbrush sleeve, a bank on a deposit envelope, and shoots it on a kitchen table.
- Depends on: A physical prop and an hour with a camera. AI mock-ups risk looking fake here.

## `switch-the-whole-site-to-plain-text`

A small black pill fixed at bottom centre holds two mono words, the active one in orange. Clicking the second word swaps the entire page for a 640px centred column of orange monospace text on black, topped by a logo built from pixel blocks, a row of slash-prefixed links and key-value rows joined by dot leaders. The page describes itself as a plain-text mirror for agents, crawlers and people who prefer it raw. The pill stays in the same place with the colours swapped, so getting back is obvious. The switch turns a 3D showpiece into a text file in one click.

- Build: Fixed pill: bottom 24px, left 50%, translateX(-50%), padding 8px 14px, 13px mono, two buttons with aria-pressed. Render the plain view as server HTML at its own URL so it works with no JS, and swap on click with a 200ms crossfade. Column max-width 640px, mono 14px, line-height 1.4. Rows: display:grid; grid-template-columns:14ch 1fr with dots written as characters. Remember the choice in try/catch-wrapped localStorage. Do not make people choose; the rich view is the default.
- For an ordinary business: This suits plain businesses better than studios: a bank's 'just the rates', a bakery's 'just the menu and prices', a clinic's text view for screen readers, older patients and AI assistants.
- Depends on: Content written so it stands alone as text, and a mono face.

## `wordmark-arc-plays-once-at-the-end`

The last screen is a huge dim logotype about 1,250px wide in dark violet, set above the legal text. A glowing arc, the logo's own stroke, sweeps up over it and overshoots the top of the frame. It is a 1320x653px video that plays once over 5s, not on loop: it read 1.43s as it entered at 5,600px, 4.43s at 6,600px, and then stopped at 5.00s on its end frame. The page closes on a held image rather than a loop or a link grid.

- Build: Video 1320x653, no loop, no controls, muted, playsinline; play() when 20% is in view via IntersectionObserver. Hold the last frame. Legal text directly below in 12px at 55%. Use a 5s ease-out curve so it settles. Poster equals the final frame for reduced motion.
- For an ordinary business: A bakery's stamp presses down once, a bank's crest draws once, at the very end of the page.
- Depends on: A logo with one strong geometric gesture, and a short render.

## `words-pull-focus-one-at-a-time`

Sentences do not fade or slide. Words sharpen from heavy blur like a lens racking focus, left to right: in one frame the first two lines are crisp while on the last line the words get progressively softer until the final word is a smear. Further down the scroll the same sentence goes out of focus as a whole while the wall continues behind it. The next sentence then arrives the same way, with its opening words sharp and the tail still soft and grey. Scrolling drives it, so the reader sets the pace of the reading.

- Build: Wrap each word in an inline-block span with --i index. Scrub p across the sentence's pin. Per word: local = clamp((p*(n+6) - i)/6, 0, 1); filter: blur(calc((1 - local)*14px)); opacity: calc(.15 + local*.85). Add will-change:filter only while pinned, and keep to one sentence on screen as blur is costly. Exit: blur the whole block to 10px over the last 15% of the pin. Show plain text under prefers-reduced-motion.
- For an ordinary business: A hospice, charity or small bank's single key sentence coming into focus at reading speed gives a calm, considered tone with no imagery at all.
- Depends on: Dark or plain ground; a short sentence; used once or twice a page.

## `colour-flood-footer` (loud)

One full-bleed field of the brand colour, the largest flat colour on the page, held back until the end. All text in one tint of that field: white, or a dark of the same hue. Serif or display heads, 13-14px links, one lighter rule inset 16px. No second colour.

- Build: Read `references/elements/section-info.md` lines 340 to 347.

## `contact-as-headline` (loud)

The contact detail is the headline: a 48px phone number on a 90px strip, or a 76px email address in the page's display type, with no button. For agencies, local trades and voice products, where one action really is a call or an email.

- Build: Read `references/elements/section-conversion.md` lines 1278 to 1285.

## `giant-type-sign-off` (loud)

Display type carries the ending: 100 to 250px flush left, leading under 1, a last word in accent or underlined, install block or field small beside it. On a black band or field. Keep a sharp scale contrast with something tiny next to it.

- Build: Read `references/elements/section-conversion.md` lines 1149 to 1156.

## `link-rows-close` (loud)

The close is a stack of links, not a band. Up to 110px lines filling the width, each with a thin chevron flush right, or 52px bar buttons with mono caps, or a 68px strip of numbered links. Navigation becomes type. Use when several next steps are equal.

- Build: Read `references/elements/section-conversion.md` lines 1158 to 1165.

## `oversized-button-close` (loud)

The button is the design: centred 64 to 80px headline, muted line, then a 64 to 72px button, radius 18 to 20, 24 to 32px bold label, or a giant 750px pill holding the whole line. Add ratings or a checklist beneath. Say one thing.

- Build: Read `references/elements/section-conversion.md` lines 1010 to 1017.

## `photo-sign-off` (loud)

Closing on a real photograph or film: full bleed or a 1376px card at radius 32, 48 to 120px white heading placed in the image's own shadow, 16 to 22px copy, one white pill. Use a local scrim. Repeat the hero's world so the page closes a loop.

- Build: Read `references/elements/section-conversion.md` lines 1122 to 1129.

## `signature-art-close` (loud)

One owned drawing fills half the band: extruded ribbons, a dithered ASCII tree, a chrome wordmark, overlapping lens circles, tilted slab. Heading and pill on the other side. It must be made for this brand and appear earlier on the page, or it reads as decoration.

- Build: Read `references/elements/section-conversion.md` lines 1269 to 1276.

## `composer-close`

The last call to action is the product: centred 48px heading, then a real 54 to 62px input, up to 766px wide, radius 14, with its action inside. Prompt box, URL field, file drop or preset amounts. Starts the first task instead of describing it.

- Build: Read `references/elements/section-conversion.md` lines 1190 to 1208.

## `embedded-working-product`

Real working UI inline with no frame: a 1136px search with four selects, a count and a pager; or 52x76 date chips with masked ends; or a typed block with a caret. Full size, keyboard reachable, and it must work on a phone.

- Build: Read `references/elements/product.md` lines 606 to 615.

## `final-image-footer`

No separate block. The last photo or film runs to the page bottom and the footer is one row laid inside it: 12px tracked links, a round back-to-top, copyright right. The page ends on a picture. Needs a dark, quiet lower edge in the image, or a scrim drawn from it.

- Build: Read `references/elements/section-info.md` lines 510 to 517.

## `half-width-card-close`

A 540px left-aligned card of dark grain lit from one side, radius 12, white mark, 36/39 heading, small white button. The right half of the row stays empty, so the close reads as a placed object rather than a band. Sits just above a matching dark footer.

- Build: Read `references/elements/section-conversion.md` lines 1140 to 1147.

## `opposite-margin-axis`

Headline at the left 32px margin and action at the right 32px margin, on one horizontal axis at y=450 of a full-bleed image. The subject fills the span between. The same layout repeats on every screen.

- Build: Read `references/elements/layout.md` lines 842 to 848.

## `seam-overlap-close`

The close physically joins the footer: the page plate, inset 52px from one side, ends in a 50px corner and reveals colour beneath, or a white card straddles the seam, or the footer overlaps a grain band. Depth with no shadow, and the page reads as one object.

- Build: Read `references/elements/section-conversion.md` lines 1228 to 1249.

## `search-as-navigation`

Search or a single question is the hero, for sites people come to find something in: 85px band with 24px placeholder, 42-56px pill search with filter chips, two cards with search and date, or a lone 1px underline prompt. No marketing claim.

- Build: Read `references/elements/hero.md` lines 1737 to 1745.

## `usage-calculator`

Price set by the reader: slider with 1M, 10M and 50M ticks or an inline select per plan, boxed value, per-unit rate, and a bar reading 'Estimated total' with a button. Prices update live with no layout shift. For metered products where a flat tier table would mislead.

- Build: Read `references/elements/section-conversion.md` lines 363 to 370.
