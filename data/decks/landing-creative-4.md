# Your direction (seed 1040)

Reads as **agency**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Motto, a gold agency page)

1. Navigation: `nav.top-bar/two-row-masthead`
2. Hero: `hero.type-only/centred-statement`
3. Logo wall: `section.logo-wall/few-logos-big-room`
4. Testimonial: `section.testimonial/quiet-interlude-quote`
5. Gallery portfolio: `section.gallery-portfolio/rhythm-rows`
6. Collection grid: `commerce.collection-grid/shelf-baseline-row`
7. Feature alternating: `section.feature-alternating/viewport-chapters`
8. Team: `section.team/mono-portrait-grid`
9. Location hours: `section.location-hours/plain-city-directory`
10. Closing section: `section.cta-band/ruled-break-close`
11. Footer: `section.footer/final-image-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Patua One** with **Hanken Grotesk**. A tidy chunky slab good enough for subheads and buttons, with a neutral that lets the slab be the voice.
- Display: 64px, phone 38px, weight 400, tracking -0.008em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hanken Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Patua+One&display=swap https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Camille Mormal: bg #131313, surface #1d1310, text #ffffff, muted #888076, accent #605549. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `tiles-assemble`, **Scroll** `layers-cross`, **Hover** `underline-language`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

## Every section is its own project

Award-winning sites feel made because each part had its own idea. Do not fill sections. Design them.

Before any code, write `.frontend-craft/ideas.md`. For every section, write three lines that begin `Wouldn't it be cool if`, and make at least one of them involve no text at all: something that moves, responds, can be dragged or tried, or is drawn or built. Pick the one that best makes a visitor understand or want this, even if it is harder to build, and mark it. `shoot.mjs` checks this file.

**This is a website, not a slide deck.** A page of heading, paragraph, picture, repeated, exhausts people. Keep the headline, then let things carry the meaning. If a sentence explains something the page could show, build the thing and delete the sentence. As a guide: under 25 words of copy around the hero headline, and under 35 words of prose in a section. Text inside real content such as a product view, a table or a menu does not count. No two adjacent sections should share a skeleton.

**Do not stop at correct.** Right structure and motion can still look boring. Give the ground light and depth, give type real presence, use one confident colour, and make every component look custom-built, with edges, states and detail. The first screen should be a lit, composed scene with one hook and one striking object, not a heading and two buttons on a flat panel.

**Showpieces.** The two Showpiece recipes are the moments someone would send to a colleague. Give them real scale and real effort, and let the page be quieter around them.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Motto** (agency, gold) https://www.wearemotto.com
- Doing: A pale grey grid of hairlines holding enormous justified uppercase statements, tiny rectangular photos and a few crafted details.
- Why it feels made: Everything sits on one 1px rule grid and one grotesk, so scale does the work; the justified headline spread across two ruled rows is a memorable signature.
- If imitated badly: Needs real photography, strict rules and generous space; with weak images it is just big text on grey.

**Prototype** (agency, gold) https://www.prototypestudio.fr/
- Doing: A creative production house run as a white, ruled index where tall condensed type and full-colour film stills do everything.
- Why it feels made: A six-column grid with hairline rules places every word exactly, and scale jumps from 20px to 180px with nothing between. Colour comes only from the film, so the white feels expensive.
- If imitated badly: The empty white only works because the type is exact and footage is real; with stock images or a regular-width sans it becomes an unfinished page.

**Figure** (ai, gold) https://www.figure.ai
- Doing: Full-bleed cinematic robot film chapters with a tiny bottom-left caption and one outlined button, ending in a numbered index footer.
- Why it feels made: Real film and photography do all the work; type is small, uppercase and anchored to the same bottom-left grid on every chapter, with a graduated scrim that keeps contrast without a visible overlay.
- If imitated badly: Needs genuinely cinematic footage; with stock imagery the sparse type reads as empty.

## System choices

- Frames: `media.render-3d/material-story-render`
- Headline: `type.display-headline/caps-block`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.panel/contrast-flip-panel`
- Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
- Logo: `media.logo-mark/cut-letterform`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/hard-midline-panels`
- Load: `motion.load-sequence/tiles-assemble`
- Scroll: `motion.scroll-pin-or-scrub/layers-cross`
- Hover: `motion.hover-state/underline-language`
- Phone menu: `mobile.phone-nav/scrolling-row-under-bar`
- Showpiece: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Atmosphere: `atmosphere.grid-or-lines/construction-geometry`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-row-masthead (seen on Monocle, Le Saint Georges, Omega)

*Feeling: an institution with a front door for everyone.*

Two stacked rows, a brand or utility row over a section row. Monocle runs a 64px row with a centred wordmark and a subscribe button, a 1px black rule, then a 45px centred section row with pipes between items. Retail and universities use the same logic for log in, region and stores. Use it for magazines, institutions and large stores with many audiences. Avoid it as decoration, since two rows cost over 100px of screen.

Set a 24 to 64px upper row at 10 to 13px, and a 44 to 90px lower row at 14 to 18px, with 1px rules between. Keep both rows on the same page rails. Twilio shows the hard-edged version: a 32px pale utility strip over an 80px white bar.

### Hero: centred-statement (seen on Linear Method, Wispr Flow, ECI)

- **Feels:** Editorial and serious, when the type is good.
- **Use when:** The headline is short, the voice is distinct, and something rises at the fold.
- **Not when:** You are about to add a gradient to one word to make it interesting.
- **Recipe:** An optional 11 to 14px label, a two-line 72 to 128px headline at 1.0 leading, a 13 to 20px sub, a CTA. Linear's method page sets 128 on near-black with a 13/20 paragraph about 340px wide and two faint arcs at the base. Wispr Flow runs 96/1 with a speech ribbon crossing the lower right corner, carrying real words. ECI floats four small claims at uneven positions around a 102px title. Instrument sets 64 on black with a white pill.

### Logo wall: few-logos-big-room (seen on Nuro, Apptronik, Athletics)

*Feeling: a short list of serious partners.*

Three to five marks with an enormous amount of space. Scarcity reads as selection, and this is the right wall for a small client list. Nuro centres five black marks on a 230px pitch in a 420px tall panel at radius 32, and the empty padding gives each partner its weight. Apptronik sets five grey-white marks in a 300px black tile. One Medical shows three 150px marks in brand green. Paddle sets 40px black wordmarks on a flat 217px sand band, cut by the viewport with no fade. Athletics recolours nine logos to one ink on lime.

### Testimonial: quiet-interlude-quote (seen on Cursor Blog, Canary, Dub Pricing)

*Feeling: a voice in the room between two rooms.*

A short quote between feature blocks, with no card. It lowers the temperature of a page and gives a reader somewhere to breathe. Use it to break up long feature runs. Avoid it as your main proof, because it is designed to be secondary.

Centre 20 to 28px text on a 580 to 820px measure, then a 32 to 48px avatar, 14px name and role, and an optional customer logo after a 1px divider. Keep it under your headings in visual weight, as Tally does by setting it in mid grey. Emphasis comes from ink rather than size: Mercury sets the first sentence in full ink and the rest muted, Dub lifts one phrase to weight 500, and Canary underlines one phrase with a 3px accent rule. Choose one.

### Gallery portfolio: rhythm-rows (seen on HAY, Evenark, Lazy Eight)

*Feeling: someone laid this out by hand.*

The number of images per row changes on purpose, and everything stays locked to the same gutters. HAY runs three 410 by 495 portraits at a 50px gap, then two 640px landscapes, inside 55px page margins. Evenark runs one 1310px tile, then two at 643. Make Town breaks a two-up grid with full 1400px images. Lazy Eight sets four square tiles in a tight 4px block with 300px of empty page between projects. It needs nothing but a grid, and it is the simplest way to stop a gallery looking generated. Set the row pattern from the images, not from a repeating formula, so a strong picture gets the full width.

### Collection grid: shelf-baseline-row (seen on Kinfolk, Taschen, Omega Aqua Terra 150M)

*Feeling: books on a shelf.*

Objects of different heights align to a shared bottom edge, as they would on a real shelf. Taschen runs five columns of covers on white with a soft book shadow, and a small centred caption. Kinfolk shows three issues at 233 by 302, a 13px spaced label, a 25px title and a 20px price, with a lot of air. Use it for books, bottles, records and magazines. In CSS, make the image cell a fixed height and align the image to its end. Reserve the tag line under the shelf, so that prices stay level too. Taschen's book shadow falls short and to the lower right, about 4px, like a real flat lay. A centred soft shadow makes a book look like a web card. Do not force these goods into a square tile, which erases the charm of their differing proportions.

```css
.shelf{display:grid;grid-template-columns:repeat(5,1fr);gap:40px 28px;align-items:end}
.cover{height:300px;display:flex;align-items:flex-end;justify-content:center}
.cover img{max-height:100%;width:auto;box-shadow:3px 4px 6px -1px color-mix(in srgb,var(--ink) 38%,transparent)}
```

### Feature alternating: viewport-chapters (seen on La Table de Joakim, SpaceX, Design Museum)

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

### Team: mono-portrait-grid (seen on Linear About, Pentagram About, Snohetta People)

*Feeling: a serious firm, in one sitting.*

Greyscale portraits on a strict grid. Greyscale hides mismatched lighting, so this is the safe way to make a set out of different shoots. Linear uses four portraits about 269 by 320 at radius 4, with a 337px pitch, 15/500 name and 14px grey role. Pentagram sets 4:5 images with 8px gaps on stark black backdrops, a name and a city. Snohetta's six-column grid carries name, role, city, email and phone in small text, which is proof in itself. Russell & Stellar fills an empty seat with its brand mark on texture.

```css
.g{display:grid;grid-template-columns:repeat(4,1fr);gap:56px 68px}
.p img{width:100%;aspect-ratio:269/320;object-fit:cover;object-position:50% 30%;border-radius:4px;filter:grayscale(1) contrast(1.02) brightness(.86)}
.p b{display:block;margin-top:18px;font:500 15px/20px var(--font-text)}.p span{font-size:14px;line-height:20px;color:var(--ink-2)}
@media(max-width:860px){.g{grid-template-columns:1fr 1fr;gap:32px 16px}}
```

### Location hours: plain-city-directory (seen on Poeza, Dishoom, White Cube)

*Feeling: we are in these places.*

A list of places with no map. White Cube runs six city blocks of about 210px, with name, a few lines of address and a Visit link. Dishoom sets city names at 20px, right-aligned over street footage. Poeza staggers about 265 wide pale grey tiles with each stockist's name and address in small caps, so a list of shops becomes a texture. Golden Assisted Transportation lists the towns it serves as navy pills, which is exactly what a local service should show. Use it when knowing where you are is enough, and the visitor does not need directions from this page.

### Closing section: ruled-break-close (seen on Devin Desktop, Zed Pricing, ElevenLabs Pricing)

*Feeling: the grid opens for a moment.*

The close is framed by rules the page already has. Devin runs a 415px band where the side rails stop. ElevenLabs sets a 190px row between hairlines, with the line at left and two pills at right. Zed fills its row with a faint dot matrix. Customer.io uses a ruled box with a dot grid and a check list. Prototype runs two condensed lines and a triangle link with nothing else. It needs a visible rule system, or it reads as empty. My first version set the line at weight 300, and it looked thin against ElevenLabs' regular weight, whatever the analysts wrote. Use 400.

```css
.rails{width:min(1180px,calc(100% - 48px));margin-inline:auto;border-inline:1px solid var(--line)}
.close{display:flex;align-items:center;justify-content:space-between;gap:32px;min-height:190px;padding:0 48px;border-block:1px solid var(--line)}
.close h2{font:400 34px/1.15 var(--font-display);letter-spacing:-.02em}
.pair{flex:none;gap:8px;margin-top:0}
.b{height:44px;border-radius:22px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 1px 2px color-mix(in srgb,var(--ink) 6%,transparent)}
.b.p{background:var(--ink);color:var(--bg);box-shadow:none}
@media(max-width:760px){.close{flex-direction:column;align-items:flex-start;padding:48px 24px}.pair{width:100%}.b{flex:1;justify-content:center}}
```

### Footer: final-image-footer (seen on Katja Ogrin, Oxygen Pictures, SpaceX)

*Feeling: the credits roll over the last shot.*

There is no separate block. The last photograph or film runs to the page bottom, and the footer is laid inside it. SpaceX sets one row of 12px tracked caps links with a 36px round back-to-top button, and copyright at the right edge. a16z overlays an engraved 52px logo on the bottom of a film. Katja Ogrin fills a viewport with her photo and stacks nav, socials, a 33px email and a monogram. Huel lets a forest dissolve into near black behind its links. It needs a dark and quiet lower edge in the image itself, or a scrim drawn from the image's own colour. Test the contrast of every link, since a photo changes under them across widths.

### Frames: material-story-render (seen on Analogue, 1X, Locomotive)

*Feeling: surprising and tactile. The material is the idea.*

**Use:** Hardware brands with a distinctive surface, such as knit, matte plastic, or games with real labels. **Avoid:** Without that material. Do not invent a texture to look interesting.

Choose one material truth and light for it. Soft even light with no cast shadow, so ribbed knit in three colourways cuts cleanly onto the ground, and fade the base of the figure into the page. Or matte black hardware on neutral sets where real labels supply all the colour, tumbling 30 to 40 degrees. A glossy floor with a long streak reflection can pick up screen colour, and a pill can sit right on the reflection.

### Headline: caps-block (seen on Inngest, Bun, Gagosian)

Signage, stencil, poster. Authority by density. Seen on 29 sites.

**Use it for:** Culture, sport, hardware, engineering, developer tools with attitude. Condensed for poster presence at modest width; neo-grotesque for a machine-label feel.

**Avoid it for:** Sentences over about 40 characters, and any page that also uses caps for labels at scale.

**Recipe:** Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

**Why it works:** Only 8.5% of H1s are uppercase, and their median line-height is 1.1. The ones that look designed sit well below that, because caps have no descenders and need far less leading than mixed case.

<a id="wide-heavy-display"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: contrast-flip-panel (seen on Scale AI, Sonder, Nx)

*Feeling: the lights change.*

One panel in the inverse of the page. Nx puts a 1320px white diagram panel on near-black, and it becomes the brightest thing on a long dark page, so that is where the explanation goes. Scale sets a deep green statement panel beside an image tile. Use it once or twice on a long page, at the moment you most want attention. Leave most of the panel empty, because a flip already has all the emphasis it needs.

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Logo: cut-letterform (seen on Bakstad Construction, Concrete, Arkansas Museum of Fine Arts)

*Feeling: industrial or architectural, with a quiet edge.*

**Use:** Construction, museums, property, events. Brands where one expressive element sits inside neutral type. **Avoid:** Light typefaces. A cut needs heavy strokes to read.

Take a heavy display weight and make one clean cut. A thin horizontal slice through the upper letter band, at about 34% of cap height. Stencil gaps in every bowl of a heavy lowercase serif, shown at about 380px in the intro and about 160px on phone, with a single letter on a rail. A hairline diagonal slash taller than the letters, splitting two colours. Everything else on the page stays neutral.

**In the lab:** Worked at all sizes once the cut was at least 1px. The slice left a stray dash where it crossed the apex of an A, so choose the height by looking.

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: hard-midline-panels (seen on Acne Studios, Symbol Studio, Design Podcast (Focus State))

**Feel.** Fashion house. Severe, symmetrical, expensive.
**Use when** every section has a strong image or colour to fill a half. **Avoid** with text-led content.
**Recipe.** Acne Studios: the page divides exactly at x=720. Paired 720px panels butt with zero gutter. News column, newsletter band, footer columns and caption starts all land on 720, then 360px sub-lines at x=370 and x=1090. Focus State builds a whole site from 50% columns. Symbol Studio insets a white sheet 16px on a pale ground with a 1px vertical rule at the centre, and hangs text about 32px off the rule.

### Load: tiles-assemble (seen on Claude, Per Appelgren, New Material)

*Feeling: a collection being laid out by hand.*

Claude's hero starts with tiles smaller, denser and rotated about 3 degrees, spreading and straightening over about 3s as headline words rise. Per Appelgren flies a tilted stack in and fans it out. Elisa Breyer stretches thin slivers to full height across the grid. Use it where the product is a collection of objects and the layout has a natural looseness. It takes up to 6s on some sites, so keep the headline independent and readable by 2s. End on a real layout, not a pile.

### Scroll: layers-cross (seen on International Magic, Wispr Flow, Driftime Impact Report 2022)

*Feeling: a real stack of paper.*

One layer passes over another, and the overlap links two sections with no fade. On Wispr Flow a large heading holds still while a 400px video card scrolls across it. On International Magic a 580px clip rises over a pinned frame, lifted by one wide shadow near `0 24px 60px` at 20 percent. Use it to connect a statement and a demo. If light images pass under white type, add a scrim or blend mode, since Hibachi Guru's white heading vanishes over bright photos.

### Hover: underline-language (seen on Buildkite, Fidèle, Strava)

*Feeling: the oldest signal on the web.*

Links answer with an underline. HAY, Monocle and GitHub Docs do little else. Accel draws one with `scaleX(0)` to 1 in 0.3s. Use it for reading pages and for any link in running text, where colour alone fails people who cannot see the difference. The drawn version enters from the left and leaves to the right, and that directional exit is what makes it feel made.

```css
.link{position:relative}
.link::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:1px;background:currentColor;
  transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(0,0,.2,1)}
.link:hover::after{transform:scaleX(1);transform-origin:left}
```

### Phone menu: scrolling-row-under-bar (seen on Apple Intelligence, Stripe Connect, Stripe Climate)

*Feeling: everything is one flick from the top.*

A row under the header that scrolls sideways and clips at the screen edge, so the cut item says there is more. Stripe pins a section name at left and scrolls the rest beneath the top bar on every product page. Apple Intelligence adds a back chevron and pins the active chip. Bonobos runs 60px round category photos with 12px labels, with the fifth cut by the edge, so categories come before the hero. Monocle clips a row of section tabs split by pipes. Ritual splits a 50px row into two shop cells. Use it for product families, shops and sections with five to eight peers. The cut through the last visible item is the affordance, so never fit the row exactly.

Fade only the right end. My first version faded both ends, and at rest the mask ate the first letter of the first link.

```css
.sub{position:sticky;top:0;z-index:4;display:flex;align-items:center;height:44px;background:var(--bg);font-size:14px;font-weight:500}
.sub b{flex:none;padding:0 16px;color:var(--accent)}
.sub div{display:flex;gap:20px;min-width:0;padding-right:32px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;
  -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent);
  mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent)}
.sub div::-webkit-scrollbar{display:none}
```

For a shop, the same row carries round photos:

```css
.rail{display:flex;gap:12px;padding:8px 16px 12px;overflow-x:auto;scroll-snap-type:x proximity;scroll-padding-left:16px;scrollbar-width:none}
.rail a{flex:none;width:68px;scroll-snap-align:start;text-align:center;font-size:12px;line-height:16px}
.rail img{width:60px;height:60px;border-radius:50%;object-fit:cover;margin:0 auto 6px}
```

### Showpiece: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Atmosphere: construction-geometry (seen on Comet, Prototype, Linear Method)

*Feeling: the compass marks left on the drawing.*

**Use it for:** Studios and editorial product pages with a lot of white. **Avoid:** Too many shapes. One or two circles and a few lines.

Page-wide SVG underlay: one or two circles 700 to 900px plus a few long diagonals or ellipses, 1px at 8% ink, cropped by the viewport. Fixed or slow. One arc may carry a travelling highlight.

On dark, two overlapping 700px circles at white 8%, with fine hatching in the lens where they cross, make a compact signature.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.