# Your direction (seed 1064)

Reads as **agency**, surface **portfolio**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Alessandro Stella, Art Direction & Design Consultancy, a gold portfolio page)

1. Navigation: `nav.floating-pill/segmented-tab-bar`
2. Hero: `hero.collage/ring-around-headline`
3. Feature sticky scroll: `section.feature-sticky-scroll/pinned-index-scrolling-column`
4. Gallery portfolio: `section.gallery-portfolio/peek-rail`
5. Case study: `section.case-study/outcome-text-cards`
6. Contact form: `section.contact-form/stepped-form`
7. Closing section: `section.cta-band/seam-overlap-close`
8. Footer: `section.footer/page-lifts-off-footer`

## Type system

**Public Sans** with **Public Sans**. Stripe-style open leading on a medium headline, with 18px body that stays quiet.
- Display: 56px, phone 36px, weight 500, tracking -0.02em, leading 1.14. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 18px/1.55. UI: Public Sans 14px 500. Label: 500, sentence case
- Load: https://fonts.googleapis.com/css2?family=Public+Sans:wght@400..500&display=swap

## Palette

From Work & Co: bg #ffffff, surface #ffffff, text #000000, muted #6e6e6e, accent #ff3029. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `line-ink-resolve`, **Hover** `row-fill`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Alessandro Stella, Art Direction & Design Consultancy** (portfolio, gold) https://alestella.com/
- Doing: A portfolio reduced to one centered image at a time and two lines of caption, letting the work carry everything.
- Why it feels made: The restraint is absolute: single typeface, single size, hairline rules, off-white ground and generous margins, so the art direction work is the only decoration. Every spacing is consistent and nothing is boxed.
- If imitated badly: Without world-class imagery and exact centering this becomes an empty, slow template.

**International Magic** (agency, gold) https://intmagic.com/
- Doing: A studio reel built as one long pinned stack: pale chrome with two matched 56px trays stays fixed while client images and loops pass between them.
- Why it feels made: The viewport is divided exactly (16/56/16/724/16/56/16), so media fits flush between the trays, and one 3px radius plus one font at three sizes runs the whole system. Frosted trays tint from the work beneath, so the chrome stays quiet without looking detached.
- If imitated badly: Without strong client work the 66,605px stack becomes a slow scroll past average pictures, and frame heights must follow the viewport or media collides with the trays.

**Warp Pricing** (devtool, gold) https://warp.dev/pricing
- Doing: A dense pricing page made calm by square black actions, zero shadows and a single geometric display face.
- Why it feels made: Five plans and dozens of rows stay readable because each mark has one job: lavender means included, dotted underline means explained, square black means buy. Separation comes from tints and hairlines, never elevation.
- If imitated badly: Four typefaces hold together only under strict role assignment; used loosely they look like a font sample.

## System choices

- Frames: `media.illustration/textured-commissioned-art`
- Headline: `type.display-headline/swapping-word`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/wide-tracked-caps`
- Surfaces: `surface.panel/contrast-flip-panel`
- Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
- Logo: `media.logo-mark/logo-as-block`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/construction-lines`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-reveal/line-ink-resolve`
- Hover: `motion.hover-state/row-fill`
- Phone menu: `mobile.phone-nav/scrolling-row-under-bar`
- Showpiece: `section.feature-sticky-scroll/pinned-index-scrolling-column`
- Showpiece: `motion.marquee/live-data-ticker`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: segmented-tab-bar (seen on Roy Jad, CITADEL Construction Group, Symbol Studio)

*Feeling: a physical switch for the page.*

The nav is a segmented control. Symbol Studio's is a 480x40 near-black bar, radius 8, with five 94px segments split by 1px gaps, and the active one a white tile at radius 6. It stays legible over black and white sections alike, because it brings its own ground. Citadel forms a dark pill behind its links after the hero, with a white thumb that slides between sections as you scroll. David Heckhoff tints the pill to each section. Roy Jad and Basement put a tiny version at the bottom. Use it on one-page sites with up to five sections, or as a mode switch. Avoid it on multi-page sites, where the selected tile implies the other pages are siblings on screen.

Keep the thumb motion at about 180 to 300ms, and use scroll spy so it always reports the truth.

```css
.seg{position:fixed;z-index:50;top:20px;left:50%;translate:-50% 0;display:flex;gap:1px;padding:2px;border-radius:8px;background:var(--ink)}
.seg a{width:94px;height:36px;display:grid;place-items:center;border-radius:6px;font-size:14px;font-weight:500;
  background:color-mix(in srgb,var(--bg) 9%,var(--ink));color:color-mix(in srgb,var(--bg) 66%,var(--ink));
  transition:background .18s ease,color .18s ease}
.seg a:hover{color:var(--bg)}.seg a[aria-current]{background:var(--bg);color:var(--ink)}
@media(max-width:560px){.seg a{width:68px;font-size:13px}.seg{top:12px}}
```

### Hero: ring-around-headline (seen on Claude, Scale AI, Kenzie Fraker)

- **Feels:** A busy, varied world around one clear idea.
- **Use when:** You have many real, good images or tasks.
- **Not when:** The images have different finishes. The ring exposes it.
- **Recipe:** A centred headline with 12 to 30 small tiles around it, 104 to 140px, radius 8, leaving a clear column for the copy. Claude's page alternates photos with pale squares, each with a 13px task caption, fading out toward the bottom. Kenzie Fraker uses about 16 small tilted work cards on a true circle. Tiles shrink with distance, from about 140 to 40px, to imply depth. Scale's version sits mid-page rather than in the hero.

### Feature sticky scroll: pinned-index-scrolling-column (seen on Attio, Baseten, Framer)

*8 sites, quality 5, the highest mean of any variant seen on more than five sites, at 4.88.* A document with a table of contents. It gives a long section a spine, and readers can jump. Use for four to six chapters, each with a real statement and demo. It suits B2B pages that have to explain a lot.

Recipe: a 218 to 348px index stays put and a 1000px column scrolls past. 14 to 18px chapter labels, active near-black, others pale. Attio puts a 2px accent tick on the page rail itself, then gives each chapter a statement with a white-to-grey run-in above a demo cell. Baseten opens its rail with a black mono bar and marks the active row with a small square. Auth0 uses four links on 1px rules about 86px apart. Framer mirrors the idea, pinning a 260px agent transcript on the right while 930px cards scroll on the left. Slack turns the index into a four-tab bar under the nav. Hawl and LaunchDarkly add a counter.

Seen on Attio, Baseten, Framer, Auth0, Slack, ClickHouse, LaunchDarkly. Suits light precision, dark precision, bold colour.

```css
.page { display: grid; grid-template-columns: 348px 1fr; width: min(1392px, calc(100% - 48px)); margin-inline: auto; border-inline: 1px solid var(--line); }
.page > * { min-width: 0; }   /* without this a wide fragment or a nowrap nav widens the track, and overflow-x: clip hides the damage */
.index { position: sticky; top: 0; align-self: start; height: 100svh; display: flex; flex-direction: column; justify-content: center; padding-left: 56px; border-right: 1px solid var(--line); }
.index a { position: relative; display: block; padding: 7px 0; font: 500 18px/1.4 var(--font-text); letter-spacing: -.01em; color: var(--ink-3); text-decoration: none; transition: color .2s; }
.index a.on { color: var(--ink); }
/* -57px is the padding plus the rail, so the tick lands on the page's own line */
.index a::before { content: ""; position: absolute; left: -57px; top: 9px; bottom: 9px; width: 2px; background: var(--accent); opacity: 0; transition: opacity .2s; }
.index a.on::before { opacity: 1; }
.ch { border-bottom: 1px solid var(--line); }
.st { padding: 96px 56px 64px; font: 500 24px/1.22 var(--font-display); letter-spacing: -.016em; max-width: 30em; color: var(--ink-2); }
.st b { font-weight: 500; color: var(--ink); }
.cell { position: relative; height: 620px; background: var(--surface); border-top: 1px solid var(--line); overflow: hidden; }
.ui { position: absolute; left: 56px; top: 56px; right: -60px; bottom: -40px; }   /* same inset in every chapter */
@media (max-width: 980px) {
  .page { grid-template-columns: 1fr; border: 0; width: calc(100% - 32px); }
  .index { top: 0; height: auto; z-index: 3; padding: 10px 0; background: var(--bg); border: 0; border-bottom: 1px solid var(--line); }
  .index ul { display: flex; gap: 18px; overflow-x: auto; scrollbar-width: none; }
  .index a { white-space: nowrap; font-size: 15px; padding: 7px 0; }
  .index a::before { left: 0; right: 0; top: auto; bottom: -10px; height: 2px; width: auto; }
  .st { padding: 56px 0 32px; font-size: 21px; max-width: none; } .cell { height: 440px; }
}
```

```js
const links = [...document.querySelectorAll('.index a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('.ch').forEach(c => io.observe(c));
```

### Gallery portfolio: peek-rail (seen on Apple Vision Pro, Aman, La Table de Joakim)

*Feeling: there is more, just past the edge.*

Left-aligned to the page grid and running off the right edge, with the next tile cut by the viewport. Apple's rail uses 818 by 528 tiles at radius 20, a 20px gap, a 21px caption below and 36px round arrows right-aligned beneath. Aman uses square destination cards with an underlined link. Loopcraft uses 375 by 560 cards at radius 40. The cut tile is the affordance, so never let tiles end flush with the viewport. Use native horizontal scrolling with `scroll-snap`, which gives touch for free, and add arrows only as an extra. On phones the arrows can go.

```css
section{--edge:max(24px,calc((100vw - 1024px)/2));padding:96px 0}
h2{font:600 48px/1.08 var(--font-display);letter-spacing:-.018em;margin:0 var(--edge) 48px}
.rail{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:var(--edge);padding:0 var(--edge);scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.rail figure{flex:0 0 min(818px,86vw);scroll-snap-align:start}
.rail img{display:block;width:100%;height:528px;object-fit:cover;border-radius:20px;background:var(--surface)}
.rail figcaption{font-size:19px;line-height:27px;color:var(--ink-2);padding:20px 24px 0 0;max-width:30em}
.rail b{color:var(--ink);font-weight:600}
.ctl{display:flex;justify-content:flex-end;gap:12px;margin:24px var(--edge) 0}
.ctl button{width:36px;height:36px;border:0;border-radius:50%;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--ink);font-size:15px}
.ctl button:hover{background:color-mix(in srgb,var(--ink) 14%,var(--bg))}
@media(max-width:760px){section{padding:56px 0}h2{font-size:32px;margin-bottom:24px}.rail{gap:12px}.rail img{height:60vw}.rail figcaption{font-size:16px;line-height:23px}.ctl{display:none}}
```

### Case study: outcome-text-cards (seen on Scale AI, Magram, Webflow Customers)

*Feeling: what we did, in one line each.*

Result first, no image. Use it when outcomes are strong and imagery is not. Scale's 404 by 372 white cards at radius 16 sit 8px apart and bleed off both edges of a grey band: a 56px grey logo tile, a 24/39 outcome, a client name at the base, and the section heading under the cards, which is an unusual and effective reversal. Webflow adds filters and large stat figures. Magram sets a real screenshot in a cream well above tags.

### Contact form: stepped-form (seen on Stripe Contact Sales, Intercom Contact, Golden Assisted)

*Feeling: this will be quick.*

Split a long form into steps so that the first looks easy. Intercom's first step asks only for email and company size, beside a sky panel carrying logos, with a mono step count. Stripe sets a 608px card with three tab markers over its ribbon and labels at the left of each field. Figma centres a 540px form of filled fields with labels inside, a "Step 1 of 2" caption and a black Next. The analyst read these fields as 46px tall, and they are about 58px, which leaves room for the label inside. Magram numbers its tabs 01 to 03. Golden uses large option rows rather than inputs, so a question takes one tap.

```css
.wrap{width:min(540px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.step{display:flex;justify-content:space-between;font-size:13px;color:var(--ink-2);margin-bottom:10px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.f{position:relative;margin-bottom:8px}
/* the label sits inside the filled box, so the box is the only surface and nothing needs a border */
.f label{position:absolute;left:10px;top:8px;font:400 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.02em;text-transform:uppercase;color:var(--ink-2);pointer-events:none}
.f input,.f select{width:100%;height:58px;padding:22px 10px 6px;border:0;border-radius:8px;background:var(--surface);font-size:16px;outline:0;box-shadow:inset 0 0 0 1px transparent;transition:box-shadow .12s;appearance:none}
.f input:focus,.f select:focus{box-shadow:inset 0 0 0 2px var(--ink)}
.f svg{position:absolute;right:12px;top:22px;width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.5;pointer-events:none}
form button{width:100%;height:46px;margin-top:8px;border:0;border-radius:8px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
```

### Closing section: seam-overlap-close (seen on Loops, Buildkite, Vite)

*Feeling: the page is one physical object.*

The close joins the footer as a material fact. Loops ends its light plate in a 50px corner to reveal a deep colour beneath. My first version ran the plate full width and looked like a rounded band. The real plate is also inset about 52px from the left over a stack of brand stripes, and that second edge is what makes it read as a lifted sheet. Buildkite's card straddles a page colour change, with a real window breaking 32px above it. Universally Speaking's chamfered card straddles the footer seam, and Vite's footer overlaps a grain band.

```css
body{background:linear-gradient(90deg,var(--accent) 0 14px,color-mix(in srgb,var(--accent) 80%,var(--ink)) 14px)}
/* inset on the left as well as rounded: two free edges make it a sheet */
.plate{margin-left:52px;background:var(--bg);border-radius:0 0 0 56px;padding:96px 24px 120px}
.close{width:min(1100px,calc(100% - 48px));margin-inline:auto;padding-block:112px 72px;display:flex;align-items:center;justify-content:space-between;gap:40px;color:var(--bg);
  border-bottom:1px solid color-mix(in srgb,var(--bg) 18%,transparent)}
.close h2{font:400 44px/1.1 var(--font-display);letter-spacing:-.015em}
.close p{font-size:17px;line-height:1.4;margin-top:10px;color:color-mix(in srgb,var(--bg) 72%,transparent)}
.pair{flex:none;margin-top:0;gap:10px}
.close .b{background:var(--bg);color:var(--accent)}
.close .b.s{background:none;color:var(--bg);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--bg) 55%,transparent)}
@media(max-width:760px){.plate{margin-left:20px;border-radius:0 0 0 32px}.close{flex-direction:column;align-items:flex-start;padding-block:72px 48px}}
```

### Footer: page-lifts-off-footer (seen on Ramp, Cal.com, Cal.com Pricing)

*Feeling: the page is a sheet of paper on a dark desk.*

The white page ends in rounded bottom corners over a dark footer that sits behind it. Nothing else changes, and yet the whole page becomes an object. Ramp uses about 24px, Cal.com about 40px. Loops runs the same idea through its stripe rail, so the rounded corner carries the stripes around it. Use it on light product pages, and pair it with any sitemap structure. It is one of the cheapest strong endings there is.

The dark has to be behind the sheet. Set it on `body`, give the sheet the page fill, and do not put a white wrapper between them.

```css
body{background:var(--ink)}
.sheet{position:relative;z-index:1;background:var(--bg);border-radius:0 0 24px 24px;height:640px;display:grid;place-items:center;text-align:center}
.sheet h2{font:500 22px/1.2 var(--font-display);letter-spacing:-.01em;margin-bottom:24px}
.ask{display:flex;width:490px;height:58px;padding:6px;border:1px solid var(--line);border-radius:10px;align-items:center;justify-content:space-between;color:var(--ink-3);font-size:15px;padding-left:18px}
.ask b{height:44px;line-height:44px;padding:0 18px;border-radius:6px;background:var(--accent);color:var(--bg);font-weight:500}
.foot{background:var(--ink);color:var(--bg);padding:120px 64px 40px;margin-top:-1px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;max-width:1312px;margin:0 auto}
.cols b{display:block;font:500 14px/20px var(--font-text);margin-bottom:10px}
.cols a{display:block;font-size:14px;line-height:26px;color:color-mix(in srgb,var(--bg) 62%,transparent)}
.cols a:hover{color:var(--bg)}
@media(max-width:760px){.cols a{line-height:44px}.sheet{height:480px;border-radius:0 0 16px 16px;padding:0 16px}.ask{width:100%}.foot{padding:64px 16px 32px}.cols{grid-template-columns:1fr 1fr;gap:28px 16px}}
```

### Frames: textured-commissioned-art (seen on Fly.io Docs, One Medical, Continue)

*Feeling: rich and human. Somebody paid an artist.*

**Use:** Blogs and docs of developer brands, health, and pages that want personality without a mascot. **Avoid:** Without real art. Generated art with no style control looks like every other generated page.

Hold the medium constant and let subject and colour vary. Ink line with grain and saturated flats in frames of about 416 by 256. Gouache figures with no outlines and no background box at about 150 by 100. Watercolour bleed that merges into white paper. Offset fills about 2px out of register with the ink line, plus grain shading. Let characters lean into layout, peeking round code blocks. Two or three inks with grain on top is the cheapest strong version, and one symbol per section can replace a photograph.

### Headline: swapping-word (seen on Codecademy, Calvyn, Fora)

Live and specific. One sentence addressing several audiences. Seen on 6 sites.

**Use it for:** Platforms serving several verticals, and products with a clear list of jobs.

**Avoid it for:** Any page where the moving word is the only idea. Must stop for reduced motion.

**Recipe:** Fixed opening words with one slot at the end cycling 3-5 nouns, masked to the line height and moved vertically over 400-600ms, or typed with a cursor. Reserve the widest word's width, or centre so the whole line re-centres. Hold each word 2-3 seconds. Stop for reduced motion.

<a id="statement-as-hero"></a>

### Section headings: ink-then-grey-run-in (seen on Public, Attio, Increase)

The signature of current precision work. One thought, read at two speeds. Seen on 13 sites.

**Use it for:** Any product page. It deletes the eyebrow, title and subhead stack, which is the main cause of template feel.

**Avoid it for:** When the second sentence is filler. The grey half gets read, so it has to say something.

**Recipe:** One paragraph at 32-48px, weight 300-500, line-height 1.0-1.2, left aligned, 780-1150px wide. First sentence in full ink, the rest runs on in the same line at about 6:1 contrast. No eyebrow, no subhead. Repeat for nearly every section. Use text-wrap: pretty, never balance.

**Why it works:** Nine gold sites use it and it has the highest mean score of any common section-heading variant. Balance breaks it, because the tonal change is meant to fall mid-line: pretty keeps the run-on and only protects the last line.

```css
h2      { font: 510 48px/1.04 var(--font-display); letter-spacing: -.022em; max-width: 1150px; text-wrap: pretty; }
h2 span { color: var(--ink-2); }
```

<a id="grey-lead-ink-payoff"></a>

### Primary button: wide-tracked-caps (seen on Snow Peak, KAWARA MUSEUM - LIBRARY, Magram)

*Feeling: a label on a good box.*

A short word in a wide box. Snow Peak sets 282 by 55px, radius 0, 14px caps at 0.2em, and the width ignores the label. The empty space is what feels like print. KAWARA's espresso pill does the same at 300 by 58. Use it for fashion, hospitality, museums and outdoor goods, where a slow pace suits the product. Use it once per view. On a software page it reads as slow.

### Surfaces: contrast-flip-panel (seen on Scale AI, Sonder, Nx)

*Feeling: the lights change.*

One panel in the inverse of the page. Nx puts a 1320px white diagram panel on near-black, and it becomes the brightest thing on a long dark page, so that is where the explanation goes. Scale sets a deep green statement panel beside an image tile. Use it once or twice on a long page, at the moment you most want attention. Leave most of the panel empty, because a flip already has all the emphasis it needs.

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Logo: logo-as-block (seen on Work & Co, i-D RED)

*Feeling: loud and certain, with a small footprint.*

**Use:** Agencies, culture and media brands with strong one-colour identity. **Avoid:** Quiet product pages. It is a statement.

Make the logo a solid rectangle pinned to the page corner. An 80 by 50 block with white bold 14px two-line wordmark at a 6px inset, square corners, and a 13px endorsement beside it at a 14px gap. Or a fixed 150 by 225 tab flush to the top-left that overlaps every section as you scroll. It often supplies the only strong colour.

### Icons: duotone-solid-glyphs (seen on Stripe Atlas, Stripe Connect, Stripe Payments)

*Feeling: polished and engineered. A family drawn for this product.*

**Use:** Feature grids on fintech and platform pages, at about 40px, where icons head short text columns. **Avoid:** Small sizes under 24px, where the overlap turns to mud. Do not fake it by recolouring a line icon.

Build each icon from two or three overlapping solid shapes in one colour family, with no strokes. A light tint, the accent, and a deep shade. Let shapes overlap, so the overlap itself draws the form. Set at 40px with no tile, aligned to the column's left edge, 12px above a 14px bold title. Draw the family from the hero's colours, so the page holds one ramp.

```html
<!-- Overlapping tones from one ramp, no stroke. Three tones is the ceiling. -->
<svg class="duo" viewBox="0 0 40 40" aria-hidden="true">
  <rect x="4" y="16" width="9" height="20" rx="1.5" fill="var(--a)"/>
  <rect x="16" y="10" width="9" height="26" rx="1.5" fill="var(--b)"/>
  <rect x="28" y="4" width="9" height="32" rx="1.5" fill="var(--c)"/>
</svg>
```
```css
.duo { --a: color-mix(in srgb, var(--accent) 45%, #fff); --b: var(--accent);
       --c: color-mix(in srgb, var(--accent) 45%, #000); width: 40px; height: 40px; }
```

**In the lab:** Eight glyphs on one ramp read as the Stripe family at a glance. In an A/B, a 1.5px outline turned them to clip art, and a separate hue per icon broke the family.

### Page rhythm: construction-lines (seen on Aniket, Cognition, Prototype)

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: line-ink-resolve (seen on Nicole Heim Studio, Revolut, International Magic)

*Feeling: weighted and calm.*

The same idea at line or paragraph level, and much cheaper. Expo holds stat lines at about 15 percent until each one enters. Revolut brings a heading from about 70 percent to full white as it settles. Nicole Heim darkens paragraphs from 60 percent with no split at all. Use it for stat stacks and short statements. It needs no text splitting, so it survives any language and any font.

```css
@supports (animation-timeline:view()){
  .line{animation:ink linear both;animation-timeline:view();animation-range:entry 20% cover 42%}
  @keyframes ink{from{opacity:.15}to{opacity:1}}
}
```

### Hover: row-fill (seen on Work & Co, Vercel Pricing, Olivier Larose)

*Feeling: the whole line is the target.*

The row takes a fill edge to edge. Olivier Larose inverts to black in 0.2s. Make Town fills a hairline row solid black and adds an arrow. Work & Co only changes the text to the accent over 0.25s, leaving rules and position alone. Use it for indexes and lists where each row is one link.

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

### Showpiece: pinned-index-scrolling-column (seen on Attio, Baseten, Framer)

*8 sites, quality 5, the highest mean of any variant seen on more than five sites, at 4.88.* A document with a table of contents. It gives a long section a spine, and readers can jump. Use for four to six chapters, each with a real statement and demo. It suits B2B pages that have to explain a lot.

Recipe: a 218 to 348px index stays put and a 1000px column scrolls past. 14 to 18px chapter labels, active near-black, others pale. Attio puts a 2px accent tick on the page rail itself, then gives each chapter a statement with a white-to-grey run-in above a demo cell. Baseten opens its rail with a black mono bar and marks the active row with a small square. Auth0 uses four links on 1px rules about 86px apart. Framer mirrors the idea, pinning a 260px agent transcript on the right while 930px cards scroll on the left. Slack turns the index into a four-tab bar under the nav. Hawl and LaunchDarkly add a counter.

Seen on Attio, Baseten, Framer, Auth0, Slack, ClickHouse, LaunchDarkly. Suits light precision, dark precision, bold colour.

```css
.page { display: grid; grid-template-columns: 348px 1fr; width: min(1392px, calc(100% - 48px)); margin-inline: auto; border-inline: 1px solid var(--line); }
.page > * { min-width: 0; }   /* without this a wide fragment or a nowrap nav widens the track, and overflow-x: clip hides the damage */
.index { position: sticky; top: 0; align-self: start; height: 100svh; display: flex; flex-direction: column; justify-content: center; padding-left: 56px; border-right: 1px solid var(--line); }
.index a { position: relative; display: block; padding: 7px 0; font: 500 18px/1.4 var(--font-text); letter-spacing: -.01em; color: var(--ink-3); text-decoration: none; transition: color .2s; }
.index a.on { color: var(--ink); }
/* -57px is the padding plus the rail, so the tick lands on the page's own line */
.index a::before { content: ""; position: absolute; left: -57px; top: 9px; bottom: 9px; width: 2px; background: var(--accent); opacity: 0; transition: opacity .2s; }
.index a.on::before { opacity: 1; }
.ch { border-bottom: 1px solid var(--line); }
.st { padding: 96px 56px 64px; font: 500 24px/1.22 var(--font-display); letter-spacing: -.016em; max-width: 30em; color: var(--ink-2); }
.st b { font-weight: 500; color: var(--ink); }
.cell { position: relative; height: 620px; background: var(--surface); border-top: 1px solid var(--line); overflow: hidden; }
.ui { position: absolute; left: 56px; top: 56px; right: -60px; bottom: -40px; }   /* same inset in every chapter */
@media (max-width: 980px) {
  .page { grid-template-columns: 1fr; border: 0; width: calc(100% - 32px); }
  .index { top: 0; height: auto; z-index: 3; padding: 10px 0; background: var(--bg); border: 0; border-bottom: 1px solid var(--line); }
  .index ul { display: flex; gap: 18px; overflow-x: auto; scrollbar-width: none; }
  .index a { white-space: nowrap; font-size: 15px; padding: 7px 0; }
  .index a::before { left: 0; right: 0; top: auto; bottom: -10px; height: 2px; width: auto; }
  .st { padding: 56px 0 32px; font-size: 21px; max-width: none; } .cell { height: 440px; }
}
```

```js
const links = [...document.querySelectorAll('.index a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('.ch').forEach(c => io.observe(c));
```

### Showpiece: live-data-ticker (seen on Ramp, Liquid AI, Utopia Orchestra)

*Feeling: the business is running right now.*

The strongest marquee here, because it is evidence. Ramp runs a one-line ticker at the hero base: a fixed label, then scrolling labels with tabular values in chips, split by 1px ticks, with values rising live. Liquid AI runs facts in a thin strip above the nav. Use it when you have real numbers, or plainly labelled sample figures. Tabular numerals are required, or digits wobble as values tick.

```css
.tick{display:flex;align-items:center;gap:18px;height:44px;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.tick b{font-weight:500;color:var(--ink);white-space:nowrap}
.tick .mq{flex:1;mask:linear-gradient(90deg,#000 85%,transparent)}
.it{display:flex;gap:8px;align-items:center;padding-right:18px;margin-right:18px;border-right:1px solid var(--line);white-space:nowrap}
.it i{font-style:normal;font-variant-numeric:tabular-nums;color:var(--ink);padding:2px 6px;border-radius:4px;background:var(--surface)}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.