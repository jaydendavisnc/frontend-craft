# Your direction (seed 1036)

Reads as **culture**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from New Exhibitions, a gold culture page)

1. Navigation: `nav.top-bar/chromeless-type-row`
2. Hero: `hero.split-copy-media/plain-plate`
3. Stats: `section.stats/number-as-diagram`
4. Location hours: `section.location-hours/open-today-strip`
5. Case study: `section.case-study/paged-story-carousel`
6. Newsletter: `section.newsletter/link-not-field`
7. Blog index: `section.blog-index/front-page-lead`
8. Collection grid: `commerce.collection-grid/place-and-date-grid`
9. Gallery portfolio: `section.gallery-portfolio/side-caption-pairs`
10. Closing section: `section.cta-band/ruled-break-close`
11. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Geologica** with **Geologica**. SHRP 100 gives sharp corners for display, SHRP 0 stays plain for text: an axis as a tone switch.
- Display: 64px, phone 38px, weight 600, tracking -0.025em, leading 1.03. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Geologica 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100&display=swap https://fonts.googleapis.com/css2?family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100&display=swap

## Palette

From Oxygen Pictures: bg #ffffff, surface #f9f9f9, text #181818, muted #757575, accent #181818. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `mark-performs`, **Scroll** `sticky-card-deck`, **Hover** `media-zoom`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**New Exhibitions** (culture, gold) https://www.newexhibitions.com/
- Doing: A listings site built as an index: hairline-ruled grid, one grotesk, art images as the only colour, and a single blue for beta and CTAs.
- Why it feels made: Every rule and cell is aligned to a visible grid, information density is high but legible, and the images are cropped at natural aspect ratios so the art does the styling.
- If imitated badly: Strip the images and the rules and it is a plain wireframe; sloppy type hierarchy or inconsistent image ratios would break the system.

**A24** (culture, gold) https://www.a24films.com
- Doing: A film studio site that lets full-bleed stills and oversized white titles carry each release, with a white catalogue below.
- Why it feels made: Huge tight-leaded titles over cinematic frames, then a calm white index with hairlines: extreme scale contrast with disciplined small type.
- If imitated badly: 400px titles with negative tracking need strong photography and a dark scrim; on weak images they just collide with faces.

**Babylonstoren** (hospitality, gold) https://www.babylonstoren.com
- Doing: A Cape Dutch wine-farm and hotel site that lets large editorial photography and a quiet serif lead, with booking surfaced at every turn.
- Why it feels made: Restraint: white ground, one sage green, hairlines and uppercase letterspaced links, with every photograph art directed in natural light.
- If imitated badly: The calm only works with exceptional photography and generous whitespace; with generic stock it reads blank and dated.

## System choices

- Frames: `media.photography/studio-seamless-object`
- Headline: `type.display-headline/under-scaled-title`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/wide-tracked-caps`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/pixel-cut-wordmark`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/full-width-small-gutter`
- Load: `motion.load-sequence/mark-performs`
- Scroll: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Hover: `motion.hover-state/media-zoom`
- Phone menu: `nav.mobile-menu/search-first-sheet`
- Showpiece: `motion.marquee/ghost-text-rows`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Atmosphere: `atmosphere.image-backdrop/flat-scrim-band`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: chromeless-type-row (seen on Block, Gagosian, 1X)

*Feeling: the header is just a line of type.*

No bar at all, only text sitting on the page. Block sets ten centred uppercase links with no logo, no button, no border. 1X runs six muted caps links at 11px and +0.08em. Gagosian uses serif text in light grey with the wordmark in black. Evenark takes it to display scale, a 44px light comma-separated sentence that is both headline and nav. Use it for fashion, culture and confident brands. Avoid it when the first screen needs a conversion, or when the page is a busy image with no scrim.

Set 11 to 14px, caps tracked about .08em or plain sentence case, 35 to 56px gaps. On photographs, lay a 90px top gradient behind it, from black at 25 percent to nothing, as Figure does. The display version needs nothing else on the row.

### Hero: plain-plate (seen on New Exhibitions, Poeza, Virtual Tour Montenegro)

- **Feels:** Assured, like a catalogue page. Nothing to prove.
- **Use when:** Brands whose restraint is the point, galleries, furniture, small makers.
- **Not when:** You need a conversion in the first screen.
- **Recipe:** No background, no animation, no radius. A 330 to 500px copy column beside a 380 to 676px photo, top-aligned, with deliberately uneven margins. Text 32 to 50px, 17px body, one link. Next section about 90px under.

### Stats: number-as-diagram (seen on Stripe Payments, Wispr Flow, Attio)

*Feeling: you can see the difference before you read it.*

The figure is drawn, so the reader takes it in before reading it. It is the highest form of stat, because a picture at true scale cannot be vague. Wispr Flow sets a 170px panel for typing speed beside a 988px film for speaking speed, and the width is the argument. Driftime's bars sit on the page grid at true height, with labels inside. Supabase spells its star count in a dot grid that fades at the edges. Attio sweeps one 1px curve across a whole cell beside four ticked figures. Plvs Ultra counts circles and strikes them through. Remote nests four L-shaped lines, each corner holding a figure. Keep the scale honest. Lyra's rounded chart tiles show how to do this softly.

```css
/* Width encodes the value. --s is each value's share of the total: 45 and 220 give .17 and .83.
   Do not use flex-grow: padding is added on top, so the widths stop being in ratio. */
.race{display:flex;gap:8px;height:340px}
.race>div{flex:0 0 calc((100% - 8px)*var(--s));min-width:0;border-radius:48px;padding-block:32px;display:flex;flex-direction:column;align-items:center}
.race b{font:400 48px/1 var(--font-display);white-space:nowrap}
/* Too narrow for a true ratio across, so stack and scale to the largest. Labels may leave a short bar. */
@media(max-width:760px){.race{flex-direction:column;height:auto}
  .race>div{flex:none;width:calc(100%*var(--s)/var(--max));height:88px;border-radius:24px;padding:12px 16px;align-items:flex-start}}
```

For a dot matrix, draw on a canvas: a `5×7` bitmap for each digit, lit dots in `--accent` at 72 to 100 percent alpha, and field dots at up to 20 percent alpha fading with distance from centre. Derive the pitch from the width, `Math.min(14,Math.floor(width/(cols+4)))`, or the number overflows on phones as mine did. Set `role="img"` and an `aria-label` with the value.

### Location hours: open-today-strip (seen on Royal Ontario Museum, New Exhibitions, Arkansas Museum of Fine Arts)

*Feeling: the door is open.*

Only what matters today, near the top. The Arkansas Museum of Fine Arts runs three items along the foot of its hero: a bold 12px `OPEN TODAY` over the hours, the address, and a terracotta action with an arrow, split by 1px slanted rules that echo the slash in its logo. Tate reduces hours to one status line under each gallery photo. The Rijksmuseum puts prices and hours in a small translucent panel. It is the single most useful thing a venue can add to a homepage. Compute it, using the snippet above, so that it can never be wrong, and link it to the full table.

```css
.hero{display:grid;grid-template-columns:44% 1fr;height:100vh}
.l{padding:0 56px 44px 72px;display:flex;flex-direction:column}
.l h1{font:600 60px/1.04 var(--font-display);letter-spacing:-.03em;color:var(--ink);margin-top:280px}
.l p{font-size:16px;line-height:24px;color:var(--ink-2);margin:32px 0 0 56px;max-width:21em}
.strip{margin-top:auto;display:flex;align-items:center;gap:20px;font-size:12px;line-height:16px}
.strip b{display:block;font-size:12px;font-weight:700;letter-spacing:.02em}
.strip i{width:12px;height:34px;background:linear-gradient(to top right,transparent calc(50% - .6px),var(--ink-3) calc(50% - .6px),var(--ink-3) calc(50% + .6px),transparent calc(50% + .6px))}
.strip a{font-weight:700;font-size:13px;letter-spacing:.02em;color:var(--accent);text-transform:uppercase}
.r{background:url(photo.jpg) center/cover;clip-path:polygon(4.5% 0,100% 0,100% 100%,0 100%)}
@media(max-width:760px){.hero{grid-template-columns:1fr;grid-template-rows:auto 40vh;height:auto}.l{padding:0 16px 24px}.l h1{font-size:40px;margin-top:56px}.l p{margin:20px 0 32px}.strip{flex-wrap:wrap;gap:12px}.r{clip-path:none}}
```

### Case study: paged-story-carousel (seen on Anthropic News, Vercel Customers, CITADEL Construction Group)

*Feeling: one article at a time, with a page number.*

A carousel that admits what it is. Counted controls are better than dots, because a reader knows how far it goes. Anthropic's news module uses a 416px copy column, with a label on a 1px rule, title, body and a tint button, around mono `01 / 05` between 28px arrow squares, opposite an 848 by 477 image. Copy crossfades rather than slides. Basic Agency uses a draggable rail at 434px pitch with `00 / 05` on a rule above. Lyra centres a 578 by 325 slide with cropped neighbours.

### Newsletter: link-not-field (seen on Work & Co, Nicole Heim Studio, Poeza)

*Feeling: this page is not for collecting emails.*

No field on the page. Work & Co gives it one row of the page grid: a label at left, a sentence and a Subscribe pill at right, about 120px tall. Nicole Heim lists it as one of three label and value pairs. Poeza makes the whole thing a stacked 80px link. It is the choice gold pages make most, because it keeps the page in its own voice.

```css
.row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,3fr);gap:24px;padding-block:32px;border-bottom:1px solid var(--line)}
.lab{font:500 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row p{font-size:20px;line-height:1.35}
.b{display:inline-flex;align-items:center;height:40px;margin-top:20px;padding:0 20px;border-radius:20px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500}
@media(max-width:700px){.row{grid-template-columns:1fr;gap:8px}}
```

### Blog index: front-page-lead (seen on Anthropic News, Amplitude, Decagon)

*Feeling: this is a publication.*

Anthropic's news page is built like a newspaper: columns of 308, 632 and 308px at 16px gaps in a 1280px frame, under a thin rule with a label left and today's date right. The centre holds a 632 by 356 lead with a 32.5/37 bold title, and the sides stack 21.4/26.7 stories split by 1px rules, with four-line clamps on the body. Philadelphia Orchestra and Amplitude use two-column cousins. Use it when at least five real stories exist at once, and when one of them truly leads. On phones the lead moves to the top. Avoid it for a personal or small-team blog, where the side columns turn into padding.

```css
.w{max-width:1280px;margin:0 auto;padding:40px 0}
.hd{display:flex;justify-content:space-between;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:18px 0;font-size:13px}
.hd b{font-weight:600}.hd span{color:var(--ink-2)}
.g{display:grid;grid-template-columns:308px 632px 308px;gap:16px;padding-top:20px}
.meta{display:flex;gap:14px;font-size:12px;line-height:16px;color:var(--ink-2);margin-bottom:12px}
.s{padding-bottom:30px}
.s+.s{border-top:1px solid var(--line);padding-top:18px}
.s img{display:block;width:100%;aspect-ratio:308/172;object-fit:cover;margin-bottom:14px}
.s h3{font:700 21.4px/26.7px var(--font-display);letter-spacing:-.01em;margin-bottom:12px}
.s p{font-size:14px;line-height:21px;color:var(--ink-2);display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.lead img{display:block;width:100%;height:356px;object-fit:cover;margin-bottom:18px}
.lead h2{font:700 32.5px/37px var(--font-display);letter-spacing:-.015em;margin-bottom:12px}
.lead p{font-size:17px;line-height:25px;color:var(--ink-2);max-width:36em}
@media(max-width:1300px){.w{padding:24px 16px}.g{grid-template-columns:1fr 2fr 1fr}}
@media(max-width:760px){.g{grid-template-columns:1fr}.lead{order:-1}}
```

### Collection grid: place-and-date-grid (seen on Sonder, New Exhibitions, Away Stores)

*Feeling: where to go next.*

For physical locations and events. Away shows three 4:3 store photos at 16px gutters with a 14px city and neighbourhood line and an 11px details arrow. Sonder puts city pills above a four-column grid at 16px gutters. New Exhibitions uses a caption triple of title, venue and date, and hover colours only the title. Use it for shops, branches, hotels and programmes. Every location needs hours and a way to get there on the next click. Hold one crop across the grid, because a photo wall of mixed storefronts falls apart faster than products do.

### Gallery portfolio: side-caption-pairs (seen on White Cube, Theatre Memory, Whitney Visit)

*Feeling: a page from a good catalogue.*

A wide image and a narrow text column, bottom aligned. White Cube sets a 920px installation view with a 260px column beside it: 11px caps label, artist, italic title, dates, a paragraph at 14/1.6, and an arrow link, with about 100px between rows. Katja Ogrin reverses the emphasis, with six numbered titles beside one tall 680 by 770 image. Athletics tilts its media 1 to 2 degrees and centres a 22px caption beside it. Use it when each piece has something to say, and where a reader will stop on one at a time. It takes space, so aim for 8 to 12 projects, not 40.

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

### Footer: grid-locked-footer (seen on Zed Pricing, Zed Blog, La Table de Joakim)

*Feeling: the page was drawn in one go.*

The footer keeps the page's own grid. Stripe runs its dashed column guides straight through. Zed keeps the rails of the page, changes only the ground to a blue field, splits the columns with 15 percent white verticals, and sets 14px mono links that are always underlined on a 32px pitch. Paddle fills the top of the footer with three ruled cells of copy, and Oatly goes furthest, making the footer a literal table of 52px cells with every link centred in a box.

Use it when the page already has visible structure: rails, a dotted ground, a ruled grid. It is a poor choice on a page with no lines, where it arrives from nowhere. The line must continue from above and reach both edges, because a stopped line reads as a mistake.

```css
.foot{--rail:color-mix(in srgb,var(--bg) 15%,transparent);--tint:color-mix(in srgb,var(--bg) 72%,var(--accent))}
.foot{background:var(--accent);color:var(--bg);position:relative}
.frame{max-width:1120px;margin:0 auto;border-left:1px solid var(--rail);border-right:1px solid var(--rail);display:grid;grid-template-columns:1.6fr repeat(4,1fr)}
.cell{padding:28px 16px 48px;border-left:1px solid var(--rail)}
.cell:first-child{border-left:0}
.cell b{display:block;font:400 16px/24px var(--font-display);margin-bottom:14px}
.cell a{display:block;font:400 14px/32px var(--font-mono);text-decoration:underline;text-decoration-color:var(--rail);text-underline-offset:3px;width:max-content;color:var(--bg)}
.cell a:hover{text-decoration-color:var(--bg)}
.side small{display:block;font:400 11px/22px var(--font-mono);color:var(--tint);margin-top:28px}
.hatch{max-width:1120px;margin:0 auto;height:240px;border:1px solid var(--rail);border-bottom:0;overflow:hidden;position:relative;
 background:repeating-linear-gradient(135deg,transparent 0 6px,color-mix(in srgb,var(--bg) 7%,transparent) 6px 7px)}
.hatch svg{position:absolute;left:0;right:0;top:40px;width:100%}
.hatch text{font:700 300px/1 var(--font-text);fill:none;stroke:color-mix(in srgb,var(--bg) 20%,transparent);stroke-width:1.5}
@media(max-width:760px){.frame{grid-template-columns:1fr 1fr}.cell:first-child{grid-column:1/-1;border-bottom:1px solid var(--rail)}.cell:nth-child(even){border-left:0}.hatch{height:110px}}
```

The table version, with cells that invert on hover:

```css
body{background:var(--well);padding:300px 20px 24px}
.tbl{display:grid;grid-template-columns:repeat(24,1fr);border:2px solid var(--ink);background:var(--bg);max-width:1400px;margin:0 auto}
.tbl>a{grid-column:span 6;height:52px;display:grid;place-items:center;font:600 13px/1 var(--font-mono);letter-spacing:.04em;text-transform:uppercase;border-right:2px solid var(--ink);border-bottom:2px solid var(--ink);transition:background .15s,color .15s}
.tbl>a:hover{background:var(--ink);color:var(--bg)}
.tbl .h{grid-column:span 12}.tbl .u{grid-column:span 1}.tbl .h2{grid-column:span 11}
.tbl .end{border-right:0}
.icons{grid-column:1/-1;display:flex;justify-content:center}
.icons a{width:52px;height:52px;display:grid;place-items:center;border-left:2px solid var(--ink);font:700 15px/1 var(--font-mono)}
.icons a:last-child{border-right:2px solid var(--ink)}
@media(max-width:760px){body{padding-top:120px}.tbl>a,.tbl .h,.tbl .h2{grid-column:span 12}.tbl .u{grid-column:span 24}}
```

### Frames: studio-seamless-object (seen on Boston Dynamics, Sakara, Apptronik)

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

### Headline: under-scaled-title (seen on Cognition, Claude Pricing, Block)

Confident restraint. The page does not need to shout. Seen on 17 sites.

**Use it for:** Devtools, portfolios, editorial and any page where content or imagery is the star. On pricing, changelog and docs pages it is the correct default, because the job is getting to the content.

**Avoid it for:** A homepage with nothing strong below it. Small type with no content just looks unfinished.

**Recipe:** H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

**Why it works:** A quarter of gold sites sit at or below 36px. Thirty pixels reads as large if nothing outranks it, since scale is relative to the page and not to the viewport.

<a id="name-as-headline"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: wide-tracked-caps (seen on Snow Peak, KAWARA MUSEUM - LIBRARY, Magram)

*Feeling: a label on a good box.*

A short word in a wide box. Snow Peak sets 282 by 55px, radius 0, 14px caps at 0.2em, and the width ignores the label. The empty space is what feels like print. KAWARA's espresso pill does the same at 300 by 58. Use it for fashion, hospitality, museums and outdoor goods, where a slow pace suits the product. Use it once per view. On a software page it reads as slow.

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Logo: pixel-cut-wordmark (seen on Astral, LiveKit, Muda 26)

*Feeling: digital, technical, slightly retro.*

**Use:** Developer tools and culture brands. Also strong as a system with a matching panel notch or dot-matrix hero. **Avoid:** Traditional or luxury brands. At very small widths, use a one-letter tile instead.

Build letters from square modules on a 5 or 7 high grid, with no anti-aliasing, curves or diagonals. Width must be a whole number of modules. At about 15px per module, MUDA-style marks reach 376 by 75. Hollow one counter for character. Use it in the nav at around 154 by 26, large as blog art, stacked in the footer, and reduced to one letter in a 64px radius-12 tile for product icons. A dissolve variant lets one stroke break into stepped pixels.

```js
// Pixel wordmark: 5 modules tall. Width is always a whole number of modules, so a four-letter word
// (4 x 5 + 3 gaps = 23 modules) ships at 46, 69, 115 or 322px, and never at 44.
const pix = (w, word) => { let o = '', x = 0;
  for (const c of word) { glyphs[c].forEach((row, j) => [...row].forEach((v, i) => {
      if (+v) o += `<rect x="${x + i}" y="${j}" width="1" height="1"/>`; })); x += 6; }
  return `<svg width="${w}" height="${w * 5 / (x - 1)}" viewBox="0 0 ${x - 1} 5" fill="currentColor" shape-rendering="crispEdges">${o}</svg>`; };
```

**In the lab:** Strong at whole-module widths, poor at any other. My first R was also weak, because module letters still need to be drawn. Do not expect a generic grid to produce good letterforms on its own.

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: full-width-small-gutter (seen on Nicole Heim Studio, Stone Island, Vercel AI SDK)

**Feel.** Modern, confident, slightly editorial. The page uses the whole screen.
**Use when** you have enough content to fill a wide canvas: product grids, photo work, fashion, devtools. **Avoid** with long text, which then needs its own measure, and with sparse pages.
**Recipe.** No centred max-width. 24px side gutters at 1440 (Vercel), 32px (Nicole Heim), 22px (Stone Island), 15px (X8). Content runs about 1392px. Four-up at 354 pitch and two-up at 712 snap to the same edges as logo and footer, so the left edge is one unbroken line. Item gutters 12 to 24px. Stone Island's detail is worth stealing: 12px gutters, three 457px columns, and buttons in a later section hanging on the third column's x.

### Load: mark-performs (seen on Wildbran, Structure Consulting Engineers, Locomotive)

*Feeling: only this brand would do this.*

The logo does something specific. Michelle Kaye's monogram writes itself from a single dot over about 3s. Overtime's clock hands sweep to the real time before any UI appears. Wildbran walks a giraffe across the screen, then wipes to the film within 2.5s. Use it only with an owned mark that has a reason to move. A generic spinning logo is the cheapest thing on this list. Pick the behaviour from what the brand is: a clock tells time, a signature is signed.

### Scroll: sticky-card-deck (seen on Affirm, Theatre Memory, Per Appelgren)

*Feeling: cards dealt onto a table.*

Each card pins under a heading, and the next slides over it. On Affirm each one sits about 50px lower than the last and widens (1138, 1260, 1320), which gives depth with no shadow, and the top edge of each covered card stays visible with its tag. Use it for three to five parallel ideas: plans, personas, industries. Do not use it for a sequence with an order, which belongs in a step swap. Make's narrower card peeks below the active one, a variation. Plain sticky, no scroll listeners.

```css
.deck{position:relative;padding-bottom:30vh}
.head{position:sticky;top:0;z-index:9;height:128px;background:var(--bg);display:grid;place-items:center}
.card{position:sticky;top:calc(128px + var(--i)*50px);
  width:min(calc(1040px + var(--i)*90px),calc(100% - 32px));margin:0 auto 12vh;height:560px;padding:40px;
  border:1px solid var(--line);border-radius:20px;
  background:color-mix(in srgb,var(--surface) 84%,transparent);backdrop-filter:blur(22px)}
```

The analyst read a blur on the covered card's copy. The blur belongs to the incoming card: a translucent fill with `backdrop-filter`, so covered text softens exactly where it passes under, with no script at all. My first build toggled a blur class on scroll, and it was both more code and less convincing. Any ancestor with `overflow:hidden` silently kills sticky, so check that first if a card will not pin. On a phone, cut the offset to about 24px.

### Hover: media-zoom (seen on Royal Ontario Museum, 1 Hotels, N26)

*Feeling: the picture breathes.*

The image scales inside a fixed frame. N26 takes 1.1 over 0.5s, Fairphone 1.05 over 0.6s, and Dekmantel 1.02 in 0.18s. Apple uses a very exact 1.0161 over 0.3s. Studio Dado takes 1.02 over 1s on `.23,1,.32,1`. Pick by register: 1.1 for consumer, 1.05 for general, 1.02 for premium, and slower as you go up. Keep the frame fixed, with `overflow:hidden`. Add `transform:translateZ(0)` to the frame if rounded corners flicker during the scale.

```css
.zoom{overflow:hidden;border-radius:12px}
.zoom img{transition:transform .6s cubic-bezier(.23,1,.32,1)}
.zoom:hover img{transform:scale(1.05)}
```

### Phone menu: search-first-sheet (seen on Apple Vision Pro, Bun, Affirm)

*Feeling: tell me what you want.*

Search leads the sheet. Apple opens a large field with Quick Links and arrows, fading the page out behind it. Bun drops a white panel with an input and mono tabs for docs, guides and reference, and dims the page to about half. Affirm opens a glass panel with store logos drifting behind it. Use it for stores, docs and large catalogues. Autofocus the field only when the user opened search on purpose, because the phone keyboard covers half of the screen.

### Showpiece: ghost-text-rows (seen on Function Health, Hims, Are.na)

*Feeling: scale as texture.*

The list runs behind something else, not meant to be read. Function Health drifts two rows of condition names behind a chart card, with a small PAUSE MOTION label under it. Hims runs eight faint rows behind a cutout portrait. Nx sends mono task names through two blurred bars, like a processor. Use it when the sheer length of the list is the point. Give the foreground card a solid background and a margin of page colour, so the text passes cleanly behind.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Atmosphere: flat-scrim-band (seen on Royal Ontario Museum, Native Law PLLC)

*Feeling: plain and dependable.*

**Use it for:** Institutions and professional services. **Avoid:** Anywhere the image is meant to be enjoyed.

Photo band about 500px with a flat 45% dark or tinted scrim carrying a white headline and a rectangular CTA.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.