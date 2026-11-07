# Your direction (seed 1025)

Reads as **health**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Levels, a gold health page)

1. Navigation: `nav.top-bar/progressive-blur-bar`
2. Hero: `hero.full-bleed-media/graphic-plate`
3. Feature alternating: `section.feature-alternating/copy-beside-tinted-stage`
4. Testimonial: `section.testimonial/pinned-foot-quote-cards`
5. Feature grid: `section.feature-grid/ruled-table-cells`
6. Stats: `section.stats/open-numeral-columns`
7. Pricing table: `section.pricing-table/single-offer-split-card`
8. Contact form: `section.contact-form/tinted-panel-form`
9. Comparison table: `section.comparison-table/cost-bars`
10. Closing section: `section.cta-band/tone-panel-close`
11. Footer: `section.footer/local-hours-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Figtree** with **Figtree**. Clean friendly geometry without Poppins roundness; on the eye the nearest thing to Matter.
- Display: 56px, phone 36px, weight 500, tracking -0.018em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.55. UI: Figtree 14px 500. Label: 500, sentence case
- Load: https://fonts.googleapis.com/css2?family=Figtree:wght@400..500&display=swap

## Palette

From Levels: bg #ffffff, surface #f3f5f4, text #121313, muted #6b6f6d, accent #0f8f6b. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `one-brand-object-moves`, **Scroll** `window-opens-to-full`, **Hover** `fill-wipe`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Levels** (health, gold) https://levels.com
- Doing: A health product landing that mixes light and near-black bands with data-led UI cards in a restrained green-grey palette.
- Why it feels made: Tight Hoves display, consistent 10px-radius bordered cards, real product UI and pale green tints make the data feel credible and calm.
- If imitated badly: Black stat cards and green tints turn clinical and generic if spacing and hairlines are loosened.

**Modern Treasury** (finance, gold) https://moderntreasury.com
- Doing: An infrastructure brand drawn like an engineering diagram: near-square controls, hairlines, mono tags and product fragments on warm paper.
- Why it feels made: Near-square controls, one muted green and tiny monospace labels signal ledger-grade precision, and every card illustration is true product vocabulary drawn in one small UI kit.
- If imitated badly: With generic mock UI this becomes plain white-label SaaS, and square black buttons only look deliberate when the grid is exact.

**Speakeasy** (devtool, gold) https://www.speakeasy.com
- Doing: An enterprise AI security page that borrows the ruled sheet of an engineering drawing, setting hairline serif statements against ASCII figures and real product diagrams.
- Why it feels made: Every section sits on the same 1px crosshair grid, and each type voice has one job, so the page feels specified rather than decorated. Colour is confined to a thin spectrum rail, one quote mark and small status marks.
- If imitated badly: Weight 100 serif turns frail below ~48px, and the ASCII art reads as a gimmick if it is low density or tinted with brand colour.

## System choices

- Frames: `media.photography/studio-seamless-object`
- Headline: `type.display-headline/flat-accent-phrase`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/hairline-text-card`
- Surface ladder: `atmosphere.light-surface-ladder/tinted-tonal-surfaces`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.section-rhythm/hard-dark-cuts`
- Load: `motion.load-sequence/one-brand-object-moves`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `motion.hover-state/fill-wipe`
- Phone menu: `nav.mobile-menu/inset-card-dropdown`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-utility-header`
- Showpiece: `motion.product-demo-loop/autoplay-tabs-with-timer`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: progressive-blur-bar (seen on Tana, Ramp, Factory)

*Feeling: the page dissolves as it reaches the top.*

No fill and no border. The links float over a blur that is strongest at the top and fades to nothing, so there is no bar edge to see. This is the most modern-looking bar in the corpus, and it needs care. Ramp, Tana and Factory all use it, and all of them flip their ink as sections pass. Use it on light product pages with rich media. Avoid it on plain text pages, where it only smears words.

Set a 72px bar, a blur layer extending 30 to 130px below it, 16 to 20px strength, masked with a gradient. Because blur guarantees no contrast, the ink must change with the section. Mark dark sections and use the sampling script from [Behaviour every nav needs](#behaviour-every-nav-needs). A weak tint of the same tone as the section helps the links hold.

```css
.nav{position:fixed;inset:0 0 auto;z-index:50;height:72px;isolation:isolate;
  --nav-ink:var(--ink);--nav-ink-2:var(--ink-2);--nav-tint:var(--bg);color:var(--nav-ink);transition:color .2s ease}
.nav.on-dark{--nav-ink:#fff;--nav-ink-2:rgba(255,255,255,.72);--nav-tint:#000}
.nav::before{content:"";position:absolute;z-index:-1;inset:0 0 -32px;
  background:linear-gradient(color-mix(in srgb,var(--nav-tint) 42%,transparent),transparent);
  -webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);
  -webkit-mask:linear-gradient(#000 45%,transparent);mask:linear-gradient(#000 45%,transparent)}
.links a{color:var(--nav-ink-2);transition:color .15s}.links a:hover{color:var(--nav-ink)}
.cta{background:var(--nav-ink);color:var(--nav-tint);transition:background .2s,color .2s}
```

### Hero: graphic-plate (seen on Increase, Trigger.dev, Benzo)

- **Feels:** Made, not sourced. A crafted brand image.
- **Use when:** You have no photography and do not want to fake it. This is the honest answer for infrastructure and finance.
- **Not when:** The graphic is an aurora gradient or an abstract 3D blob. Those are now stock.
- **Recipe:** A full-width crafted image in place of a photo. Increase folds its mark into a ribbon about 1300px wide from flat polygons, lime through mint to azure, no shadows, with a two-tone headline at 40/48 overlapping it. Trigger.dev renders its own trace view huge at about 30 degrees with depth of field, behind 60px centred copy, with a row of feature tags at the fold. Browserbase frames a dithered bitmap mountain between 1px rules. Axem dissolves stippled dunes into black.

### Feature alternating: copy-beside-tinted-stage (seen on Brilliant, CleanShot X, Levels)

*14 sites, quality 4.* The modern default, and a good one. Calm, productised, room to read. Use it for three to five features with real product moments. Skip it if every stage would hold the same app screen.

Recipe: a 440px copy column beside a 555 by 386px stage, radius 20 to 28, with a 1px inset hairline and a tint that changes per row. Inside, layer two or three real fragments, with one entering from a stage edge and small floating notes overlapping it. Brilliant sets each row in a full band of about 590px, alternating page tone with a one-step tint and 100px of padding. Copy at 30/38 and 16/24 at 60% ink, then one text link.

Seen on Brilliant, CleanShot X, Levels, Tana, Brex, Grafana, Readwise, Kiro. Suits gradient light, light precision, soft pastel and warm neutral, for SaaS, health, finance and education.

```html
<section class="band"><div class="in">
  <div class="stage" style="--tint:var(--surface)"><!-- 2 or 3 layered fragments, one cut by the stage edge --></div>
  <div class="copy"><h3>A tutor that hears the difference</h3><p>Two or three specific sentences.</p><a href="#">One link →</a></div>
</div></section>
```

```css
.band { padding-block: 100px; }
.band:nth-child(even) { background: var(--surface); }
.band:nth-child(even) .stage { order: 2; }
.in { width: min(1110px, calc(100% - 48px)); margin-inline: auto; display: grid; grid-template-columns: 555px 440px; justify-content: space-between; align-items: center; }
.stage { position: relative; height: 386px; border-radius: 28px; background: var(--tint); box-shadow: inset 0 0 0 1px var(--line); overflow: hidden; }
.copy h3 { font: 500 30px/38px var(--font-display); letter-spacing: -.02em; }
.copy p { margin-top: 20px; color: var(--ink-2); font-size: 16px; line-height: 24px; }
.copy a { display: inline-block; margin-top: 20px; color: var(--accent); font-weight: 500; text-decoration: none; }
@media (max-width: 1120px) { .in { grid-template-columns: 1fr; gap: 32px; } .band:nth-child(even) .stage { order: 0; } .band { padding-block: 64px; } .stage { height: 340px; } }
```

### Testimonial: pinned-foot-quote-cards (seen on Devin Desktop, Motto, Polar)

*Feeling: plain statements, signed.*

Text cards with no logo, where the empty middle does the design. Use it when the person matters more than their employer, for consumer, health and small customers. Devin Desktop's are radius 0, 1px line, 20/25 quote with a hanging mark, and a three-line attribution with name in ink and role and company in grey. Polar sets three near-black tone cards just 4px apart so they read as one object. Headspace shows the strongest idea here: for mental health it names a theme instead of a person, 26/31 quote on a warm tint, because privacy is the point. A fourth card peeking past the rail stops the row feeling finished.

### Feature grid: ruled-table-cells (seen on Better Auth, Bun, Function Health)

*20 sites, quality 5.* Drafted and exact, like a spec sheet. Use it for 4 to 12 peer capabilities in devtool, finance and reference pages, and for local services with real lists. Skip it with fewer than four items, where the frame looks like a form, and for image-led brands.

Recipe: one 1px outline split by shared rules, no gaps, no radius. Cell padding 20 to 32px. An 11px mono index, a 15px/500 title, 14px copy at about 60% ink, then a proof row pinned low. Make the proof a different kind of thing in each cell: logos, a masked key, tags, a status line, a tiny chart. Tiny `+` marks on the junctions read as drafting. Tint or hatch the last cell and let it close the table with a link.

Seen on Better Auth, Bun, Function Health, Speakeasy, Vite, Trigger.dev, Zapier, Customer.io. Suits light precision, dark precision, mono technical and warm neutral, for devtool, SaaS, AI and health.

```html
<div class="table">
  <article class="cell">
    <div class="idx">01</div>
    <h3>Point-in-time recovery</h3>
    <p>Roll any database back to a chosen second, up to 35 days ago.</p>
    <div class="proof"><!-- one tiny real artefact, different in every cell --></div>
  </article>
  <!-- nine cells; the last gets class="cell closer" and a link to the rest -->
</div>
```

```css
/* rules are a 1px gap showing the parent's background, so they can never double up */
.table { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.cell { position: relative; display: flex; flex-direction: column; min-height: 186px; padding: 20px 22px; background: var(--bg); }
.idx { font: 400 11px/1 var(--font-mono, var(--font-text)); color: var(--ink-3); margin-bottom: 10px; }
.cell h3 { font: 500 15px/1.3 var(--font-text); letter-spacing: -.01em; }
.cell p { margin-top: 6px; color: var(--ink-2); font-size: 14px; line-height: 1.45; }
.proof { margin-top: auto; padding-top: 14px; min-height: 40px; display: flex; gap: 6px; align-items: center; font-size: 11px; color: var(--ink-2); }
/* + marks on the junctions */
.cell::after { content: ""; position: absolute; right: -5px; bottom: -5px; width: 9px; height: 9px; z-index: 1;
  background: linear-gradient(var(--ink-3), var(--ink-3)) 50%/9px 1px no-repeat, linear-gradient(var(--ink-3), var(--ink-3)) 50%/1px 9px no-repeat; }
.cell:nth-child(3n)::after, .cell:nth-last-child(-n+3)::after { display: none; }
.cell.closer { background: repeating-linear-gradient(135deg, var(--surface) 0 1px, var(--bg) 1px 6px); }
@media (max-width: 820px) { .table { grid-template-columns: 1fr; } .cell { min-height: 0; } .cell::after { display: none; } }
```

A warmer form suits clinics, restaurants and local services, where the cell holds a real list instead of a proof row. Keep inner rules only, so the table stays open at its outer edge like a printed price list. Set category titles at 34 to 45px in the display face with a deliberate two-line break, a small accent count beneath, then 18px items on a 31px line. Fade the last item of each list, so it reads as "and more". Tint the final cell and put the call to action there.

```css
.t { display: grid; grid-template-columns: repeat(3, 1fr); }
.c { padding: 40px 40px 44px 0; min-height: 372px; display: flex; flex-direction: column; }
.c:not(:nth-child(3n+1)) { padding-left: 40px; border-left: 1px solid var(--line); }
.c:nth-child(n+4) { border-top: 1px solid var(--line); }
.c h3 { font: 400 38px/1.08 var(--font-display); letter-spacing: -.01em; }
.c ul { list-style: none; margin: 24px 0 0; padding: 0; line-height: 31px; }
.c li:last-child { color: var(--ink-3); }
.c.more { background: var(--surface); padding-right: 40px; }
```

### Stats: open-numeral-columns (seen on Vercel AI SDK, Amplitude, Linear Customers)

*Feeling: stated, not sold.*

Numbers on the page grid with nothing around them. If your type and spacing are good, this is enough. Vercel AI SDK sets four left-aligned columns on the same 354px pitch as its feature row, numerals 48/56 at 450 with about -6 percent tracking, a 14px label 12px below, and about 200px of clear space above. Brex reverses the stack, with a 24px label over a 48px numeral, so each stat reads as a claim. Stripe Connect hangs a blue tick on the page's guide beside each figure. Amplitude sets them as chart footnotes. Reach for an accent only if the numerals are few.

### Pricing table: single-offer-split-card (seen on Stripe Sessions, Function Health, Jurafuchs)

*Feeling: one honest offer.*

One product, one price, one card. This is the only place a large price belongs. Function Health sets a 1088 by 426 cream card with a label, a 40px name, an 80px price with a 24px unit, a muted billing line, a 50px pill, a vertical rule, then nine ticks at 36px pitch. Stripe Sessions carries a ticket the same way, with a tinted inset panel holding the price and a struck original. Use it for memberships, tickets and courses. My first version had seven ticks and felt thin next to nine, so fill the right column to match the left.

```css
.card{display:grid;grid-template-columns:1fr 1px 1fr;gap:56px;padding:56px;background:var(--surface);border-radius:24px;border:1px solid var(--line);
  box-shadow:0 30px 60px -36px color-mix(in srgb,var(--accent) 34%,transparent)}
.rule{background:var(--line)}
.card h2{font:400 40px/1.1 var(--font-display);letter-spacing:-.015em}
.price{font:400 80px/1 var(--font-display);letter-spacing:-.03em;margin-top:44px}
.price small{font:400 24px/1 var(--font-text);letter-spacing:0;color:var(--ink-2);margin-left:4px}
.note{font-size:14px;color:var(--ink-2);margin-top:8px}
.go{display:flex;align-items:center;justify-content:center;height:50px;border-radius:25px;margin-top:32px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:600}
.list{align-self:center}
.list li{display:flex;align-items:center;gap:10px;min-height:36px;font-size:15px}
.list svg{flex:none;width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:1.2}
.flag{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--accent)}
.flag svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.5}
@media(max-width:860px){.card{grid-template-columns:1fr;gap:32px;padding:28px}.rule{height:1px}.price{font-size:64px}}
```

### Contact form: tinted-panel-form (seen on Modern Treasury, IDEO Work, IDEO Contact)

*Feeling: one job on a clean desk.*

One quiet panel holds the form. Modern Treasury sets a warm tint at 8px radius with square white inputs and 16/600 labels, and the mix of soft panel and hard corners reads as finance. IDEO flips a slate panel and uses one neon submit, which gives a plain form an unmistakable voice. Keep the panel a tone step, with no border and no shadow.

```css
form{background:var(--surface);border-radius:8px;padding:24px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.f{display:grid;gap:6px}.w{grid-column:1/-1}
label{font-size:16px;font-weight:600}
label i{font-style:normal;color:var(--ink-3)}
/* square white fields on a warm panel: the corners say form, the panel says one task */
input,select{width:100%;height:42px;padding:0 12px;border:1px solid var(--line);border-radius:0;background:var(--bg);font-size:16px;outline:0;appearance:none}
input:focus,select:focus{border-color:var(--ink);box-shadow:0 0 0 1px var(--ink)}
form button{justify-self:start;height:42px;margin-top:8px;padding:0 16px;border:0;background:var(--ink);color:var(--bg);font-size:16px;font-weight:500;cursor:pointer}
@media(max-width:700px){form{grid-template-columns:1fr;padding:20px}}
```

### Comparison table: cost-bars (seen on Better Stack, Ultrahuman, Hawl Design)

*Feeling: the gap is absurd, and you can see it.*

Length is the argument. Better Stack shows a full-width bar beside a single 12px dot, with three shared facts above and fine print below. Ultrahuman adds a one to three year toggle above two bars. Hawl compares a full-time hire with a subscription, the second bar dissolving at its right edge. Always publish the assumptions, because this claim invites a check. My rebuild matched the frame on the first attempt, because the device is that simple.

```css
.card{background:var(--surface);border-radius:14px;box-shadow:0 0 0 1px var(--line);padding:24px}
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border-radius:8px;overflow:hidden}
.facts div{background:var(--surface);padding:12px 14px;font-size:13px;color:var(--ink-2)}
.facts b{display:block;font-size:18px;font-weight:500;color:var(--ink);font-variant-numeric:tabular-nums}
.line{margin-top:24px}
.line p{display:flex;justify-content:space-between;font-size:14px;color:var(--ink-2)}
.line p b{font-size:22px;line-height:28px;font-weight:500;color:var(--ink);font-variant-numeric:tabular-nums}
.bar{margin-top:8px;height:12px;border-radius:6px;background:color-mix(in srgb,var(--ink) 16%,transparent)}
.bar.us{width:12px;background:var(--accent)}   /* the scale gap is the whole argument */
.fine{font-size:12px;line-height:1.5;color:var(--ink-2);margin-top:20px;max-width:60em}
```

### Closing section: tone-panel-close (seen on Tana, Meta AI, Boston Dynamics)

*Feeling: a quiet room at the end.*

An inset panel one tone off the page. OpenAI's API pricing is the flattest: 1376 by 422, radius 6, centred, with a grey pill and a bare link. Tana places a two-line heading at left and one soft bloom on the right half. Meta fades a 1024px panel from white into pale blue with an app icon. My bloom took three tries. First it was a small oval that showed banding. Then I enlarged it, and it was twice too strong. The real one is pale, wide, runs off the panel's right edge, and pairs a warm core with cool flanks. Turn it down until you doubt it is there.

```css
.panel{position:relative;overflow:hidden;isolation:isolate;min-height:420px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:72px;background:var(--surface);border-radius:32px}
/* --warm and --cool: two pale tints from your palette */
.panel::after{content:"";position:absolute;z-index:-1;left:44%;right:-12%;top:-30%;bottom:-30%;opacity:.62;filter:blur(40px);
  background:radial-gradient(38% 42% at 56% 52%,var(--warm),transparent),radial-gradient(34% 62% at 26% 50%,var(--cool),transparent),radial-gradient(30% 60% at 92% 46%,var(--cool),transparent)}
.panel h2{font:400 52px/1.08 var(--font-display);letter-spacing:-.02em;max-width:11em}
@media(max-width:760px){.panel{padding:40px 24px;border-radius:24px;min-height:0}.panel h2{font-size:36px}.panel::after{left:-10%;right:-30%;top:50%;bottom:-40%}}
```

### Footer: local-hours-footer (seen on Dishoom, Guggenheim Visit, Villa Aurelia)

*Feeling: the sign on the door.*

For anywhere people visit, the footer is where they check whether you are open. Sam Hoult sets a script logo at 80px left and hours as three plain lines right, on a deep espresso ground, then one row of links and round outlined socials, a faint rule, and a credit line. Isolabella della Croce gives hours per service: cellar, pool, check-in, reception. Fenriz Gym right-aligns the day labels to bold times, so the eye runs down a single gutter. Guggenheim opens its footer with Hours, Address and Tickets as three columns. Always include the street address, a working phone link and the real hours, in text. Local footers should feel like the place, so a crest, a pattern band or a drawn border is welcome here. Skip it for online-only businesses, where hours mean nothing.

```css
.foot{max-width:1312px;margin:0 auto;padding:0 64px 56px}
.top{display:grid;grid-template-columns:1fr auto;align-items:start;gap:40px;padding-bottom:64px}
.logo{font:italic 400 80px/1 var(--font-display);color:var(--accent)}
.logo small{display:block;font:400 13px/1 var(--font-text);letter-spacing:.42em;color:var(--ink-2);margin-top:10px}
.hours{display:grid;grid-template-columns:auto auto;gap:10px 32px;font-size:16px;line-height:24px}
.hours dt{color:var(--ink-2)}.hours dd{margin:0;text-align:right;font-variant-numeric:tabular-nums}
.hours .head{grid-column:1/-1;color:var(--ink);font-weight:500}
.row{display:flex;justify-content:space-between;align-items:center;padding-bottom:32px;border-bottom:1px solid var(--line)}
.row nav{display:flex;gap:40px;font-size:16px;font-weight:500}
.row address{font-style:normal;font-size:16px;color:var(--ink-2)}
.row address a{color:var(--ink);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--ink-3)}
.base{display:flex;justify-content:space-between;padding-top:24px;font-size:14px;color:var(--ink-3)}
@media(max-width:760px){.foot{padding:0 16px 32px}.top{grid-template-columns:1fr}.logo{font-size:48px}.row{flex-direction:column;align-items:flex-start;gap:16px}.row nav{flex-wrap:wrap;gap:12px 24px}.base{flex-direction:column;gap:8px}}
```

### Frames: studio-seamless-object (seen on Boston Dynamics, Sakara, Apptronik)

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

### Headline: flat-accent-phrase (seen on Hims, Greylock, Supabase)

Direct and branded. The claim is the colour. Seen on 12 sites.

**Use it for:** Developer tools and SaaS with a strong brand hue, and photo-led pages where the second colour can be taken from the image.

**Avoid it for:** When the accent appears nowhere else. A coloured word that matches nothing looks picked from a swatch.

**Recipe:** Headline in one ink with a single clause or final line in one flat brand colour, no gradient, same size and weight, 46-80px, line-height 1.0-1.1. The coloured words are the claim, not decoration. Repeat the hue on the primary action, or take it from the hero photograph.

**Why it works:** Colour on the claim tells a skimming reader exactly which words matter. The best example changes the second colour for each photograph, so type and image look art-directed together.

<a id="tonal-gradient-fill"></a>

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

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: hairline-text-card (seen on Neon Docs, Factory, Meta AI)

*Feeling: a well-kept index.*

An outline card with text only, for docs indexes, capability lists and pointers. Use 1px at `--line`, radius 4 to 16, padding 16 to 28, a 12px label, a 16 to 20px title and one muted line. Keep it short, about 160px tall, and drop the icon tile. Numbering it, as in a `01` label set in small caps or mono, gives a row order without decoration. On hover, darken the border and leave the fill alone. Avoid it for marketing features, where the reader needs evidence rather than a label.

### Surface ladder: tinted-tonal-surfaces (seen on Material 3, Mercury Pricing, Zentry)

*Feeling: friendly and systematic. The whole page is one colour at different strengths.*

**Use it for:** Design systems, pastel consumer tools, finance with a soft accent. **Avoid:** Accents with high chroma at low lightness: they turn grey when tinted this far.

Four tones of the accent hue: oklch(.99 .006 h), (.965 .01 h), (.948 .007 h), (.90 .037 h). No shadow and no border. Depth comes from tone alone. Text uses a dark tint of the same hue.

Material 3 is the clearest example: #fefbff, #f8f1f6, #f2ecee and #dcdaf5 all carry one hue, with one measured shadow and no borders. Zentry runs the same logic on a stronger lavender, with panels 4 percent apart.

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

### Page rhythm: hard-dark-cuts (seen on Public, Gagosian, Stone Island)

**Feel.** Decisive. Contrast replaces decoration.
**Use when** a light page has one important chapter to set apart, such as your developer story, or a pro tier. **Avoid** using it more than twice, because repeated cuts lose their force.
**Recipe.** Long light runs broken by an edge-to-edge dark block of about 950px, at least one full viewport. No gradient at the boundary. The block must be dense with product at real scale, not three small text cells. A fixed nav flips colour exactly at the cut. Place it 25 to 50% down.
**Why it works.** A viewport-filling block changes where you are. A shorter band only changes what you are looking at.

**Built.** My first block was 520px with three text cells and looked like a banner. Making it 960px tall and filling each cell with a table, chart or code block, cropped by the cell floor, brought it level with the real frame.

```css
.cut{min-height:960px;padding-block:120px}  /* plus .flip from the base code */
.cut .cells{display:grid;grid-template-columns:repeat(3,1fr);margin-top:72px;
  border:1px solid var(--line);border-radius:12px;overflow:hidden}
.cut .cells>div{min-height:440px;padding:32px 32px 0;border-left:1px solid var(--line);
  display:flex;flex-direction:column;overflow:hidden}
.cut .cells>div>:last-child{margin-top:auto}  /* product sits on the floor of its cell */
```

```js
// Flip the fixed nav exactly when the block reaches it
new IntersectionObserver(([e])=>nav.dataset.tone=e.isIntersecting?'flip':'',
  {rootMargin:'0px 0px -94% 0px'}).observe(document.querySelector('.cut'));
```

### Load: one-brand-object-moves (seen on Astral, Modern Treasury, Elyx)

*Feeling: authored, and cheap to run.*

Headline static, one owned object performs. Astral's glyph grows from three heads at once around a still headline. Modern Treasury flips one tag at a time as its connector darkens, like a payment running down a rail. Martin Development raises its wordmark behind a roofline, which proves the depth of the scene. Use it when the brand has a mark, line or object worth watching. This is the best value on the list: strong recall at almost no weight.

```css
.mark rect{fill:var(--accent);opacity:0;animation:on 1ms steps(1) forwards;animation-delay:calc(.25s + var(--t)*1ms)}
@keyframes on{to{opacity:1}}
```
```js
// --t per block: several heads grow at once and meet, with a little jitter
const heads=[0,17,35];
const tOf=i=>Math.min(...heads.map(h=>Math.abs(i-h)))*105+((i*7)%5)*26;
```

Size the object well past the headline and put it behind the type. My first try was one head on a 520px mark that finished in 1.4s, and it read as a progress bar. Several heads, more size and 2 to 3s read as growth. Under reduced motion, show the finished mark.

### Scroll: window-opens-to-full (seen on Factory, Resend, LEA WINERY)

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

### Hover: fill-wipe (seen on Render, ROEH Law & Tax, PDA Architecture)

*Feeling: a little theatre with a direction.*

A fill layer sweeps in. Render wipes a span from `scaleX(0)` over 0.3s. ROEH slides a hidden layer down over 0.5s. Payload sweeps text colour by `background-position`. Use it on larger outline CTAs where the direction can be seen. Change the origin on leave, so the fill exits the way it was going rather than rewinding. See `interaction.md` Entry-point fill.

```css
.wipe{position:relative;overflow:hidden;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);transition:color .3s var(--ease-ui)}
.wipe::before{content:"";position:absolute;inset:0;background:var(--ink);transform:scaleX(0);transform-origin:right;transition:transform .3s var(--ease-ui)}
.wipe>*{position:relative}
.wipe:hover{color:var(--bg)}.wipe:hover::before{transform:scaleX(1);transform-origin:left}
```

### Phone menu: inset-card-dropdown (seen on ECI, Asana, Wispr Flow)

*Feeling: a small card, so you keep your place.*

The menu is a card under the bar with the page still visible, blurred or dimmed behind. Asana insets 8px at radius 16 with rows at 16/600 on a 60px pitch, three small utility rows, then two 46px pills, on an 8px blur. Lindy and Wispr Flow use two stacked white cards, the header and the menu. Svix and Plumeform let a floating header grow straight into it. Use it for floating bars, and for menus short enough to fit. It feels lighter than a takeover. If the content is taller than the screen, cap the height and scroll inside the card.

```css
.veil{position:fixed;inset:64px 0 0;z-index:40;background:color-mix(in srgb,var(--ink) 12%,transparent);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .2s}
.open .veil{opacity:1;pointer-events:auto}
.card{position:fixed;z-index:50;top:72px;left:8px;right:8px;max-height:calc(100dvh - 88px);overflow:auto;border-radius:16px;
  background:var(--bg);box-shadow:var(--menu-shadow);visibility:hidden;opacity:0;translate:0 -8px;scale:.98;transform-origin:50% 0;
  transition:opacity .16s ease-out,translate .2s cubic-bezier(.22,1,.36,1),scale .2s cubic-bezier(.22,1,.36,1),visibility .16s}
.open .card{visibility:visible;opacity:1;translate:0 0;scale:1}
.card .l a{height:60px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:600}
.card .c{padding:8px 20px 20px;display:grid;gap:20px}
.card .c a{height:46px;display:grid;place-items:center;border-radius:99px;font-size:15px;font-weight:500;background:var(--well)}
.card .c a.s{background:var(--ink);color:var(--bg)}
```

### Showpiece: sticky-utility-header (seen on Attio Pricing, Claude Pricing, Linear Changelog)

*Feeling: you always know where you are.*

The most useful pin on the web, and it is plain CSS. Attio sticks plan names, prices, toggle and all four CTAs under the nav across about 5,000px of matrix, so conversion stays in reach, and section titles pin beneath them until the next replaces it. Claude's pricing does the same with a hairline and no shadow. Linear's changelog sticks each date until the next pushes it up. Use it for any table longer than a screen.

```css
.plans{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line)}
.group{position:sticky;top:124px;z-index:3;background:var(--bg)}/* top equals the height of the row above */
```

Give sticky rows a solid background, or the table scrolls through them. No shadow is needed, since a hairline holds the edge.

### Showpiece: autoplay-tabs-with-timer (seen on Amplitude, Vercel AI SDK, Lithic)

*Feeling: the change is on purpose.*

Tabs advance themselves and show when. Amplitude grows a 2px line along the active tab's top edge. Lithic fills a ring. Energen fills 3px tab bars, changes every metric in the frame and adds a pause. Mixpanel fills the active tab and recolours the hero slats with it. Use it when you have three to five product areas to show in one slot. The timer turns surprise into expectation. See `interaction.md` Tabs.

```css
.tab{position:relative}
.tab::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left}
.tab[aria-selected=true]::before{animation:fill var(--dwell,6s) linear both}
.paused .tab::before{animation-play-state:paused}
.manual .tab[aria-selected=true]::before{animation:none;transform:scaleX(1)}
@keyframes fill{to{transform:scaleX(1)}}
```
```js
const arm=ms=>{clearTimeout(timer);start=performance.now();left=ms;timer=setTimeout(()=>{show((i+1)%n);arm(DWELL)},ms)};
box.addEventListener('pointerenter',()=>{clearTimeout(timer);left-=performance.now()-start;box.classList.add('paused')});
box.addEventListener('pointerleave',()=>{box.classList.remove('paused');arm(left)});
tabs.addEventListener('click',e=>{clearTimeout(timer);box.classList.add('manual');show(index(e))});// a click ends autoplay for good
```

Pause the timer and the bar together, and resume from what was left rather than restarting. A click stops the cycle for good, because the person has taken over. Keep the panel swap to about 0.28s.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.