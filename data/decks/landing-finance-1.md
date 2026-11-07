# Your direction (seed 1013)

Reads as **finance**, surface **landing**, register **gradient-light** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Noxus, a silver ai page)

1. Navigation: `nav.top-bar/two-tier-product-subnav`
2. Hero: `hero.collage/bleeding-rail`
3. Faq: `section.faq/reading-column-rows`
4. Feature sticky scroll: `section.feature-sticky-scroll/list-drives-pinned-stage`
5. Logo wall: `section.logo-wall/full-colour-on-rails`
6. Newsletter: `section.newsletter/footer-row-signup`
7. App window: `product.app-window/inset-sheet-window`
8. Ui fragment: `product.ui-fragment/data-table-crop`
9. Stats: `section.stats/number-as-diagram`
10. Closing section: `section.cta-band/photo-sign-off`
11. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Bruno Ace** with **Geologica**. Cleaner than the usual sci-fi wides for automotive; a plain geometric gives it a showroom.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Geologica 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap https://fonts.googleapis.com/css2?family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100&display=swap

## Palette

From Stripe Payments: bg #ffffff, surface #f6f9fc, text #0a2540, muted #425466, accent #9966ff. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `product-rises-last`, **Scroll** `scroll-progress-chrome`, **Hover** `light-moves-inside`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Noxus** (ai, silver) https://www.noxus.ai/
- Doing: Enterprise agents made approachable with one dusty blue, warm workplace portraits and actual workflow screens.
- Why it feels made: A single blue runs from the cycling headline word to tile pattern to panels, and mono eyebrows add a technical register beside a humanist display face.
- If imitated badly: A form modal covered the right third of every desktop frame in this capture; a persistent popup like it hides the page and cheapens it.

**CleanShot X** (saas, gold) https://cleanshot.com
- Doing: A Mac utility sold by showing its own controls at poster scale inside a disciplined gradient bento.
- Why it feels made: Every tile holds a real control rather than a screenshot, and all gradients come from one peach-periwinkle-indigo family on a strict 20/14 radius system. Spacing never drifts from the 1192px frame.
- If imitated badly: Gradient tiles without real UI fragments, or with hues from outside one family, collapse into generic AI-startup bento.

**mymind** (saas, gold) https://www.mymind.com
- Doing: Sells a calm private memory tool through oversized bookish serif type, a soft sunset glow and interface props that behave like physical objects.
- Why it feels made: Each demo is art-directed with specific human content rather than lorem or fake dashboards, and the tag pill recurs from sentence to nav to AI labels. Colour stays in soft fields and one orange, so the page feels warm instead of busy.
- If imitated badly: Blurred rainbow glows plus a big serif turn into generic wellness-app styling without the art direction and object-quality demos.

## System choices

- Headline: `type.display-headline/light-large-sans`
- Section headings: `type.section-heading/heading-row-with-action`
- Primary button: `button.primary/compact-chevron-pill`
- Surfaces: `surface.card/media-over-tinted-body`
- Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/product-rises-last`
- Scroll: `motion.scroll-pin-or-scrub/scroll-progress-chrome`
- Hover: `button.hover-response/light-moves-inside`
- Phone menu: `nav.mobile-menu/display-type-takeover`
- Showpiece: `product.animated-demo/flow-with-travelling-token`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Atmosphere: `atmosphere.gradient-field/horizon-from-the-base`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: two-tier-product-subnav (seen on Stripe Billing, Apple Vision Pro, Claude)

*Feeling: a company, and then this product within it.*

A global bar with a second row for the product you are reading. On Stripe the global row is 76px and the second row 66px, with the product name in accent colour at left and page anchors at right. On Apple the 44px global bar scrolls away and a sticky 52px bar stays, with the product name at 21/600, 12px links, and a blue Buy pill. Claude's second row is only 44px, with a page label and a dropdown. Use it on any product page within a multi-product company. Avoid it on a one-product site, where the second row has nothing to do.

Keep the second row visually lighter than the first, and let only it stick. Separate with a dashed hairline, as Stripe does, or a blur band. Stripe Atlas shows that colour alone can carry the state: active link in navy, the rest in accent, no pill at all.

### Hero: bleeding-rail (seen on Wild, Daylight, Medusa622)

- **Feels:** Warm, abundant, easy.
- **Use when:** Local businesses and consumer brands with several good photos.
- **Not when:** You have two good pictures and two weak ones.
- **Recipe:** A headline above a rail of 4 to 6 photos, 384 to 416px wide, gaps 8 to 16, touching or crossing both viewport edges. Medusa622 uses four 395px squares at 8px gaps, mixing hands, a face and a teapot. Daylight drifts four 384 by 256 photos above a large wordmark. Wild runs 416 by 728 portrait tiles past the fold, with its copy column travelling in the rail.

### Faq: reading-column-rows (seen on Warp Pricing, Notion Calendar, Linear Changelog)

*Feeling: plain and helpful.*

The plainest treatment, and it works anywhere. Use it when the FAQ follows a centred page, or when a page is dense and needs to breathe. Warp runs a 944px column, a 50px heading aligned to the column's left edge and 61px rows. Claude runs 704px at 88px pitch with display-face questions, and this is where my first version looked weak: my questions were weight 400 and read faint beside their 500, so raise the weight when a text face sets the question. Raycast fades its rules out at both ends. Attio replaces the icon with a small grey `[+]`, a quiet developer detail. Kiro fills a 40 by 56px block behind the plus on hover.

```css
.wrap{width:min(704px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.wrap h2{font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;text-align:center;margin-bottom:56px}
.list{border-top:1px solid var(--line)}
.wrap summary{min-height:88px;padding-block:24px;font:500 20px/1.3 var(--font-display)}
.a{padding-bottom:28px;font-size:17px;line-height:28px;color:var(--ink-2);max-width:36em;text-wrap:pretty}
```

### Feature sticky scroll: list-drives-pinned-stage (seen on Wispr Flow, Payload, Sweeply)

*11 sites, quality 5.* The classic tour. Readable, productised, and the best first choice. Use for three to five steps that each change one stage.

Recipe: a list column of about 444 to 672px, a stage of about 584 to 800px sticking near the top, and a step height of about 72vh. Mark the active row with one device: full ink against about 30% for the others, a 2 to 5px bar, a thin rule, an arrow tile. Wispr Flow centres a 400 by 468px video card with steps on the left and a large title low on the right. Payload stacks four 48/64 lines, the current one white, the rest at 25%. Sentry uses a 4px gradient left rule. Fill the stage: this is where it is easiest to leave half a panel blank.

Seen on Wispr Flow, Payload, Sentry, Calvyn, Storybook, Nx, Lindy, Sweeply. Suits dark precision, warm neutral, gradient light, bold colour, for SaaS, devtool and AI.

```html
<section class="tour">
  <div class="steps">
    <article class="step on" data-s="0"><span>01</span><h3>Demand arrives by the hour</h3><p>Two specific sentences.</p></article>
    <article class="step" data-s="1"><span>02</span><h3>Batteries answer first</h3><p>Two specific sentences.</p></article>
  </div>
  <aside class="stage" aria-hidden="true">
    <div class="scene on"><!-- a full panel --></div>
    <div class="scene"><!-- a full panel --></div>
  </aside>
</section>
```

```css
.tour { display: grid; grid-template-columns: 444px 1fr; gap: 72px; align-items: start; }
.step { position: relative; min-height: 72vh; display: flex; flex-direction: column; justify-content: center; padding-left: 28px; border-left: 1px solid var(--line); transition: opacity .3s; }
.js .step { opacity: .34; } .js .step.on { opacity: 1; }   /* the dim state only exists when JS can lift it */
.step::before { content: ""; position: absolute; left: -1px; top: calc(50% - 44px); height: 88px; width: 1px; background: var(--accent); opacity: 0; transition: opacity .3s; }
.js .step.on::before { opacity: 1; }
.step h3 { margin-top: 12px; font: 400 32px/1.14 var(--font-display); letter-spacing: -.018em; }
.step p { margin-top: 12px; color: var(--ink-2); }
.stage { position: sticky; top: 14vh; height: min(72vh, 600px); min-height: 480px; border-radius: 12px; background: var(--surface); box-shadow: inset 0 0 0 1px var(--line); overflow: hidden; }
.scene { position: absolute; inset: 0; opacity: 0; transition: opacity .4s; }
.scene.on { opacity: 1; }
@media (max-width: 980px) {
  .tour { grid-template-columns: 1fr; gap: 24px; }
  .stage { order: -1; top: 12px; height: 42svh; min-height: 320px; z-index: 2; }   /* the stage stays, copy passes under it */
  .step { min-height: 58svh; justify-content: flex-start; padding-top: 28px; }
}
```

```js
document.documentElement.classList.add('js');   // in the head, before paint
const steps = [...document.querySelectorAll('.step')], scenes = [...document.querySelectorAll('.scene')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const i = +e.target.dataset.s;
  steps.forEach((s, j) => s.classList.toggle('on', j === i));
  scenes.forEach((s, j) => s.classList.toggle('on', j === i));
}), { rootMargin: '-45% 0px -45% 0px' });      // a thin line across the middle of the screen
steps.forEach(s => io.observe(s));
```

### Logo wall: full-colour-on-rails (seen on Loops, Stripe, Stripe Atlas)

*Feeling: real companies, in their own colours.*

Marks keep their brand colours and sit precisely on the page's lines. Colour reads as real, since a faker greys everything. It takes a grid to hold it, or it turns to confetti. Stripe's seven logos sit about 22px high at 172px centres in a 72px band between hairlines, aligned to the page rails. Its product pages place 4 by 2 marks exactly in the drawn column lines, about 100px apart. Loops runs eleven 22px colour logos in one row with a small `More` link and no caption. Keep them under 40px, and use it on a page light enough to absorb the colour.

### Newsletter: footer-row-signup (seen on CleanShot X, Ripple Health, Marine Layer)

*Feeling: always there, never in the way.*

A row inside the footer. CleanShot sets it between two faint rules with a title and line at left, and a 48px outlined input with a button at right, disabled until the field has text. Ripple sets a thin headline over a giant ghost wordmark on teal. This is the most sensible home for a sign-up on a product site.

```css
.row{display:grid;grid-template-columns:1fr minmax(0,420px);gap:48px;align-items:start;padding-block:40px;border-block:1px solid var(--line)}
.row h3{font:600 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row form{display:flex;gap:8px}
.row input{flex:1;min-width:0;height:48px;padding:0 16px;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);background:none;outline:0;font-size:16px}
.row input:focus{border-color:color-mix(in srgb,var(--ink) 50%,transparent);box-shadow:0 0 0 3px color-mix(in srgb,var(--ink) 8%,transparent)}
.row button{flex:none;height:48px;padding:0 18px;border:0;border-radius:14px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
.note{font-size:13px;line-height:1.4;color:var(--ink-3);margin-top:12px}
@media(max-width:760px){.row{grid-template-columns:1fr;gap:20px}}
```

### App window: inset-sheet-window (seen on Attio, Loops, Sweeply)

*A well-made Mac app sitting on a table: soft, tactile, unhurried.* Quality 5/5, 4 sites.

**Use:** Light or warm SaaS, and products with sparse screens where the frame has to add weight. **Not:** Dark pages, where the two surfaces merge. Also inside a card grid, where a third nested edge appears.

**Recipe:** Outer shell 1080-1248px, tinted ink-5%, radius 16, 1px line. 32-34px title bar with dots or a breadcrumb. App sheet inset 8px on three sides, radius 8-10, its own 1px line. 250px sidebar on a half-step tint, 14/28 rows. Never show the bottom edge. The inner radius must equal the outer radius minus the inset, or the corners look broken. Attio uses coloured window dots; Loops greys them out and adds a breadcrumb, which is the more modern choice because it stops the chrome competing with the app. Reflect does the same trick as glass on a dark page: two 1px rims, outer radius 32 and inner 24, an 8px gap, and a glow bleeding through.

```html
<style>
.hero{height:100vh;min-height:900px;overflow:hidden;display:flex;flex-direction:column;align-items:center;padding:118px 24px 0}
.shell{flex:none;width:min(1080px,100%);height:700px;margin-top:64px;padding:0 8px;border-radius:16px 16px 0 0;
 background:color-mix(in srgb,var(--ink) 5%,var(--bg));box-shadow:0 0 0 1px var(--line),0 24px 60px rgba(30,40,80,.07)}
.tl{display:flex;gap:7px;align-items:center;height:32px;padding-left:6px}.tl i{width:11px;height:11px;border-radius:50%;background:var(--ink-4)}
.sheet{display:grid;grid-template-columns:250px 1fr;height:calc(100% - 32px);border-radius:8px 8px 0 0;background:var(--bg);box-shadow:0 0 0 1px var(--line);overflow:hidden} /* 16 outer minus 8 inset */
.side{padding:10px;border-right:1px solid var(--line);font:500 14px var(--font-text);background:color-mix(in srgb,var(--surface) 45%,var(--bg))}
.row{display:flex;align-items:center;gap:8px;height:28px;padding:0 6px;margin-top:1px;border-radius:7px;color:color-mix(in srgb,var(--ink) 86%,var(--bg))}
.row .ic{color:var(--ink-2)}.row.on{background:var(--tint-2);color:var(--ink)}
.top{display:flex;align-items:center;gap:8px;height:44px;padding:0 16px;border-bottom:1px solid var(--line);font-weight:500}
@media(max-width:760px){.shell{width:720px;height:430px;align-self:flex-start}.sheet{grid-template-columns:190px 1fr}}
</style>
<section class="hero"><!-- H1 and sub -->
 <div class="shell"><div class="tl"><i></i><i></i><i></i></div>
  <div class="sheet"><aside class="side"><div class="row on"><svg class=ic></svg>Contracts</div><!-- more rows --></aside>
   <div><div class="top">Vantor MSA, v4<span class="chip" style="margin-left:auto"><span class="dot" style="color:var(--warn)"></span>3 deviations</span></div><!-- document, suggestions --></div>
  </div></div>
</section>
```

### Ui fragment: data-table-crop (seen on Attio, Increase, Public)

*Real work at real density. The most trusted fragment in fintech and CRM.* Quality 5/5, 6 sites.

**Use:** B2B, finance, CRM, ops. Anything where rows are the product. **Not:** Consumer brands. Also tables with fewer than about six rows, which look like a mock.

**Recipe:** Table bleeding off a tinted cell's right and bottom edges. 13-14px, rows 36-38px or 60 relaxed, hairlines, tabular right-aligned numbers, 12px grey headers, 16px logos, tinted score chips. Invent specific entities. One row selected. Crop it; do not fade early. Increase sets bold amounts then grey secondary numbers in the same row, which is what real finance tables do. Attio ghosts an email composer over the right third, so the table is mid-action. Public shows static rows on top and inline selects lower down, implying an editable sheet.

```html
<style>
.well{position:relative;height:600px;padding:44px 0 0 44px;overflow:hidden;background:color-mix(in srgb,var(--accent) 5%,var(--surface))}
.t{width:1040px;border-radius:12px 0 0 0;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 8px 30px rgba(20,30,60,.06);font-size:13px}
.t table{border-collapse:collapse;width:100%}
.t th,.t td{height:36px;padding:0 10px;text-align:left;white-space:nowrap;border-bottom:1px solid var(--line)}
.t th{height:32px;font-weight:500;color:var(--ink-2)}.t th+th,.t td+td{border-left:1px solid var(--line)}
.sc{display:inline-grid;place-items:center;width:30px;height:20px;border-radius:5px;font-size:12px;font-weight:600;color:var(--ok);background:color-mix(in srgb,var(--ok) 13%,transparent)}
.n{text-align:right;font-variant-numeric:tabular-nums}
/* ghost composer: the data stays readable under it. A solid panel would hide the evidence */
.over{position:absolute;right:0;top:100px;bottom:0;width:420px;padding:18px 18px 18px 26px;font-size:13px;color:var(--ink-3);background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--bg) 88%,transparent) 22%)}
@media(max-width:760px){.well{height:480px;padding:20px 0 0 16px}.t{width:760px}.over{display:none}}
</style>
<div class="well"><div class="t"><table>
 <tr><th>Account</th><th>Health</th><th>Owner</th><th>Signal</th><th class="n">ARR</th></tr>
 <tr><td><u>Tessel Foods</u></td><td><span class="sc">96</span></td><td>Jonas Okoye</td><td>Added 34 seats in September</td><td class="n">$182,400</td></tr>
 <tr style="background:color-mix(in srgb,var(--accent) 4%,transparent)"><td><u>Mistral Couriers</u></td><td><span class="sc" style="color:var(--warn);background:color-mix(in srgb,var(--warn) 14%,transparent)">71</span></td><td>Jonas Okoye</td><td>Usage down 18% since August</td><td class="n">$64,200</td></tr>
 <!-- 10 or more rows, so the cell cuts them mid-row -->
</table></div><aside class="over"><!-- drafted reply, dim, mid-action --></aside></div>
```

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

### Closing section: photo-sign-off (seen on Wispr Flow, Comet, Nuro)

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

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

### Headline: light-large-sans (seen on Stripe Sessions, LiveKit, Affirm)

Elegant, a little fashion. Air around every stroke. Seen on 9 sites.

**Use it for:** Consumer finance, events and brand launches, on dark grounds or plain light ones. One line sets it best.

**Avoid it for:** Busy photographs, thin faces under 48px, and low-contrast greys, which remove strokes altogether.

**Recipe:** Headline in a weight 200-300 sans, at least 64px on light and 48px on dark, tracking -0.02 to -0.04em, line-height 0.85-1.1, one or two lines, on a plain ground. Keep controls at weight 500 so the thin type reads as a decision, not a font-loading fallback.

**Why it works:** Thin strokes survive only through size. Light on dark also looks heavier than the same weight on white, because bright strokes bloom, which is why dark sites can go lighter at smaller sizes.

<a id="heavy-tight-sentence"></a>

### Section headings: heading-row-with-action (seen on CleanShot X, Framer, Stone Island)

Practical. The action lives with the title. Seen on 7 sites.

**Use it for:** Rails, galleries, catalogues and resource lists.

**Avoid it for:** Hero-like sections with a single message.

**Recipe:** Two-line heading at 32-56px on the left; on the same bottom baseline at the far right one small control: a 32-48px button, text link, arrow pair or count. 40-64px down to content. Put the section action here rather than under the grid.

<a id="ruled-opener"></a>

### Primary button: compact-chevron-pill (seen on Stripe Climate, Stripe Connect, Stripe Atlas)

*Feeling: product-sized, polite, repeatable.*

Stripe's small pill: 33px tall, radius 16.5, 15px at weight 425, 16px padding, a 10px chevron, 300ms transitions. The height is the point. It can repeat on every card and sit under a table of rates without shouting, and it keeps a colourful page feeling like software. Use it when one action recurs many times down a page. It is too small for a consumer hero, where 44px or more reads better on phones.

### Surfaces: media-over-tinted-body (seen on Stripe Climate, Nurx, Therabody)

*Feeling: a printed postcard.*

Image or colour band on top, tinted body beneath, in a colour taken from the brand or the image. Radius 12 to 24, gap 20. Use it for health, consumer and education carousels, and let the row bleed off the edge with the next card peeking. Stripe's Climate version clips the photo's bottom edge at about -6 degrees, which carries the hero's diagonal down the page.

### Surface ladder: neutral-page-white-card (seen on Warp Pricing, Vercel Pricing, Cal.com Pricing)

*Feeling: printed and exact. Feels like a well-set specification sheet.*

**Use it for:** Developer platforms and precise SaaS. The default for a light product page. **Avoid:** Warm consumer brands, where pure neutrals feel like a hospital.

Page #fafafa, raised sheet #fff, hover #f2f2f2, hairline #e6e6e6 or black 8%. Text #171717 and #4d4d4d. No tint, one accent at most, no shadow at rest. Separation is 2% lightness plus a line, so it feels printed.

Tiny hue shifts are allowed and can be an identity: #fbfdfd with a faint mint cast, or #f9f9fb and #f0f0f3 with a faint lilac one.

```html
<style>
/* grey page, white sheet, one hairline. nothing else, across the whole page */
:root{--bg:#fafafa;--surface:#fff;--hover:#f2f2f2;--line:#e5e5e5;--ink:#171717;--ink-2:#666;--ink-3:#8f8f8f}
.sheet{display:grid;grid-template-columns:repeat(3,1fr);margin:40px;background:var(--surface);border:1px solid var(--line);border-radius:12px}
.sheet>div{padding:28px;border-left:1px solid var(--line);color:var(--ink-2);height:320px}
.sheet>div:first-child{border-left:0}
.sheet h3{color:var(--ink);font-weight:500;font-size:14px}
</style>
<div class="sheet"><div><h3>Starter</h3>For one forwarder.</div><div><h3>Team</h3>For desks across time zones.</div><div><h3>Network</h3>For large forwarders.</div></div>
```

### Logo: constructed-geometric-mark (seen on Block, BCR Law LLP, ADCC Awards)

*Feeling: inevitable. It looks like it could not have been drawn any other way.*

**Use:** Finance, platforms, institutions, awards. Any brand that benefits from a simple, stated rule. **Avoid:** When the rule is arbitrary. The geometry should echo the name or the idea.

State the mark in numbers. Block lets the mark be the hero: 44px, centred above one line, with almost nothing else on the screen. A 3 by 3 of solid squares at 13px with about 3px gaps and about 2px corners gives a 44px mark. A black 94px square quartered by a thin white cross holds four letters made only of straight strokes, and it inverts in the footer at 80px. An outlined box of 80 by 88 with a 2px stroke and one sheared corner holds three rows of tracked capitals, and the same skeleton swaps letters and colour for each company in a group. Showing construction drawings as content can turn the derivation into a section.

```js
// Constructed mark. Unit 13, gap 3.25 (a quarter), corner 1.6 (an eighth). Draw a second master for 16px.
function grid(size) {
  const px = size <= 20;                                 // pixel-fitted: 4px squares on a 5px pitch
  const [u, g, r, box, off] = px ? [4, 1, .6, 16, .5] : [13, 3.25, 1.6, 45.5, 0];
  let o = '';
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
    o += `<rect x="${off + i * (u + g)}" y="${off + j * (u + g)}" width="${u}" height="${u}" rx="${r}"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${box} ${box}" fill="currentColor" aria-hidden="true">${o}</svg>`;
}
```

**In the lab:** The grid held from 200px to 32px and failed at 16 until it had its own master. The sheared box was the best-looking mark in the test: below 40px it drops to one letter.

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

### Page rhythm: label-left-content-right (seen on Alessandro Stella, Stripe Sessions, Work & Co)

**Feel.** An annual report from a firm that charges a lot.
**Use when** the company has a point of view and content varies by section: agencies, consultancies, funds. **Avoid** when sections are all the same shape, which makes the left column look wasted.
**Recipe.** Work & Co: a 1060px container (x=190 to 1250), a 360px label column, a 700px content column from x=550. Every section has one short label at 20px/500 and an otherwise blank column. Headline, media, index and form all share that one left edge. Oxygen Pictures: four 330px columns with 24px gutters, labels in column one, content from column three, blank columns kept empty. As a rows variant: 1px rules, 11px small caps label at x=144, content at x=720, rows about 110px tall.
**Why it works.** Repetition of one offset gives the page an obvious logic, and the blank column is constant, so it reads as structure.

**Built.** This recipe transferred almost exactly on the first try, because it is pure geometry. It is the safest way to get a designed feel from limited assets.

```css
.sec{display:grid;grid-template-columns:minmax(0,360px) minmax(0,700px);
  max-width:1060px;margin-inline:auto;padding-block:60px;border-top:1px solid var(--line)}
.sec>.label{font:500 20px/1.3 var(--font-text);letter-spacing:-.01em}
@media(max-width:760px){.sec{grid-template-columns:1fr;gap:24px;padding-inline:20px}}
```

### Load: product-rises-last (seen on Buildkite, Factory, Stripe Billing)

*Feeling: the page is ready, here is the thing.*

Copy and backdrop first, product last. Factory fades its CTAs up from about 12px, then the app window rises from below the panel edge. Stripe Billing lets a browser sheet rise over the ribbon, then populates panels in steps with a chat prompt last. Buildkite then starts its counters ticking. Use it on product marketing heroes. Crop the product at the fold so it has somewhere to rise from. Never delay the CTA, because conversion UI is present from the start on every strong example.

### Scroll: scroll-progress-chrome (seen on Stripe Payments, LEA WINERY, jemmic)

*Feeling: a position cue, nothing more.*

A small indicator of where you are in a long page. Stripe Payments replaces the nav after the hero with a 64px bar of chapter links, with a thin top line growing in the brand gradient. LEA Winery rides a 4px tick down the rail's right border, replacing the scrollbar. Anime.js uses a small pill with a playhead. Use it on pages over about 8,000px, or where sections are genuine chapters. A bare top progress bar on a short page tells nobody anything.

### Hover: light-moves-inside (seen on Attio Pricing, Raycast Pricing, Trigger.dev)

*Feeling: a material catching the light.*

The light changes rather than the colour. Attio animates a custom property so a radial top glow brightens, in 300ms on `cubic-bezier(.2,0,0,1)`. Raycast swaps a white glow for inset highlights in 200ms. Trigger.dev fades in a sheen layer. Motionstrand shifts a radial highlight across the fill. Rare and subtle, and it reads as a real material. Register the property with `@property`, or the gradient will not interpolate.

```css
@property --glow{syntax:"<percentage>";inherits:false;initial-value:0%}
.h-light{background:radial-gradient(120% 120% at 50% -10%,color-mix(in oklab,var(--ink),var(--bg) var(--glow)),var(--ink) 70%);
  transition:--glow .3s cubic-bezier(.2,0,0,1)}
.h-light:hover{--glow:22%}
```

### Phone menu: display-type-takeover (seen on mymind, Fidèle, Greylock)

*Feeling: the menu is a poster.*

The links are the headline. A24 sets six words at 64px with very tight tracking on a 66px pitch, and a hairline and two lines of small links at the base. mymind sets 48px serif words with a coloured dot beside each. Greylock and Cursor run 40 to 52px. Use it for culture, fashion, agencies and any brand with a strong typeface and few links. It is a free page of brand expression, and this is where your display type gets to perform. It fails with long labels, so keep six short words or fewer.

Reveal it fast. Set `clip-path:inset(0 0 100% 0)` to `inset(0)` over about 340ms on a strong ease. On hover devices, dim the other links to 40 percent.

```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;padding:72px 18px 22px;background:var(--bg);overflow:auto;
  visibility:hidden;clip-path:inset(0 0 100% 0);transition:clip-path .34s cubic-bezier(.76,0,.24,1),visibility .34s}
.open .sheet{visibility:visible;clip-path:inset(0)}
.big a{display:block;font:500 64px/66px var(--font-display);letter-spacing:-.045em;transition:opacity .15s}
.big:hover a{opacity:.4}.big a:hover{opacity:1}
.foot{margin-top:auto}
.foot div{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0;border-top:1px solid var(--ink)}
.foot a{font:400 22px/1 var(--font-display);letter-spacing:-.02em}
```

### Showpiece: flow-with-travelling-token (seen on Stripe Connect, Revena, Zapier)

*Watch the money, or the message, travel.* Quality 5/5, 5 sites.

**Use:** Payments, routing, event-driven systems. **Not:** Static relationships.

**Recipe:** CSS phone or nodes with concentric 1px rings, labelled pills attached by 1px lines with end dots. A small amount chip travels along the line, then rows update in sequence. Dashed variants work on saturated plates, in page type.

### Showpiece: window-opens-to-full (seen on Factory, Resend, LEA WINERY)

*Feeling: stepping into the product.*

A contained window scales with scroll until it fills the frame. Factory starts about 750px wide and grows about 2x until it crops and the UI reads huge. Resend zooms its editor under a heading until a white sheet is the one bright rectangle on the page, then releases. Use it to move from a pitch into the product. It works natively.

```css
.track{height:260vh;view-timeline:--t block}
.stage{position:sticky;top:0;height:100vh;overflow:hidden;display:grid;place-items:center}
.win{width:760px;transform-origin:50% 22%}
@supports (animation-timeline:view()){
  .win{animation:open linear both;animation-timeline:--t;animation-range:contain 0% contain 76%}
  @keyframes open{to{transform:scale(2.05);border-radius:4px}}
}
```

Choose the origin on the focal point. My first used about the centre, and the content you cared about scrolled out of frame at full scale. Stop the range at about 76 percent, so the end state holds before release. Do not add `will-change:transform`: it keeps the layer rastered at its small size, and text blurs as it grows.

### Atmosphere: horizon-from-the-base (seen on Elyx, Auth0, Postman)

*Feeling: a horizon at dusk. Gives a dark page somewhere to end.*

**Use it for:** Closing sections, sign-up forms and dark heroes. **Avoid:** Across the whole hero top and bottom at once. One horizon per screen.

Separate blurred ellipses, 44px blur, rise from the bottom edge to different heights, 150 to 540px, in four to six hues, with a near-white core at the very base. Fades to the dark page by mid-height. Grain sigma 3. Once, as payoff.

Measured peak at the bottom edge is close to white, about oklch .98, with colour concentrated in the last 180px. A retint per section works too: a floor glow that moves through four hues as sections pass.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
/* dark grounds only. on a light page these hues mix to mud, so use a vertical wash instead */
.horizon{position:relative;height:900px;overflow:hidden;background:var(--bg);isolation:isolate;color:var(--ink)}
/* one wide base layer keeps it a single horizon. uneven columns rise out of it, each to its own height, overlapping so no gap shows */
.horizon i{position:absolute;border-radius:50%;filter:blur(56px)}
.horizon::after{content:"";position:absolute;inset:auto 0 0;height:420px;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.05;
  -webkit-mask:linear-gradient(0deg,#000 30%,transparent);mask:linear-gradient(0deg,#000 30%,transparent)}
.horizon h2{position:relative;z-index:2;text-align:center;padding-top:280px;margin:0}
</style>
<div class="horizon" style="--h1:oklch(from var(--accent) .5 .19 calc(h - 90));--h2:oklch(from var(--accent) .35 .1 h);--h3:oklch(from var(--accent) .62 .12 calc(h + 10));--h4:oklch(from var(--accent) .8 .12 calc(h + 70));--h5:oklch(from var(--accent) .97 .03 calc(h + 70))">
  <i style="left:-14%;bottom:-220px;width:128%;height:380px;background:var(--h2)"></i>
  <i style="left:-10%;bottom:-190px;width:44%;height:360px;background:var(--h1)"></i>
  <i style="left:8%;bottom:-150px;width:38%;height:340px;background:var(--h2)"></i>
  <i style="left:60%;bottom:-170px;width:50%;height:470px;background:var(--h2)"></i>
  <i style="left:54%;bottom:-180px;width:42%;height:340px;background:var(--h3)"></i>
  <i style="left:26%;bottom:-190px;width:46%;height:320px;background:var(--h4)"></i>
  <i style="left:38%;bottom:-120px;width:26%;height:170px;background:var(--h5);filter:blur(34px)"></i>
  <h2>Request early access</h2>
</div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.