# Your direction (seed 1026)

Reads as **health**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Levels, a gold health page)

1. Navigation: `nav.floating-pill/inset-rounded-bar`
2. Hero: `hero.full-bleed-media/side-column-on-calm-side`
3. Feature alternating: `section.feature-alternating/anchored-copy-rows`
4. Testimonial: `section.testimonial/quote-beside-portrait`
5. Feature grid: `section.feature-grid/ruled-table-cells`
6. Steps process: `section.steps-process/active-step-beside-media`
7. Stats: `section.stats/stat-tiles`
8. Contact form: `section.contact-form/stepped-form`
9. Pricing table: `section.pricing-table/single-offer-split-card`
10. Closing section: `section.cta-band/composer-close`
11. Footer: `section.footer/one-line-colophon`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Monomakh** with **Commissioner**. A dark Slavonic-heritage face, with a neutral humanist sans that lets it stay the only historic voice.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Commissioner 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Monomakh&display=swap https://fonts.googleapis.com/css2?family=Commissioner:slnt,wght,FLAR,VOLM@-12..0,100..900,0..100,0..100&display=swap

## Palette

From Levels: bg #ffffff, surface #f3f5f4, text #121313, muted #6b6f6d, accent #0f8f6b. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `word-blur-resolve`, **Scroll** `line-ink-resolve`, **Hover** `row-fill`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Factory** (ai, gold) https://www.factory.ai
- Doing: An enterprise AI tool dressed as precision industrial equipment: greyscale, square corners, mono labels, one orange dot.
- Why it feels made: A strict 24px gutter, 3px button radius and five-step neutral ladder hold across 9000px, and colour appears only as tiny orange dots and photographic grain. The restraint is total and the imagery does the warming.
- If imitated badly: Copy the mono caps without the grainy imagery and exact grey ladder and it becomes an empty wireframe.

**Stripe Billing** (finance, gold) https://stripe.com/billing
- Doing: An enterprise product page that earns trust through restraint: small light type, hairline structure and one vivid gradient behind exact product UI.
- Why it feels made: Every section hangs off the same two rails and a 4-6px radius system, and the UI mocks are complete enough to read at 9px. The single gradient gives life without touching the type.
- If imitated badly: 32px light headlines only work with exact rules, spacing and real UI; with placeholder mocks the page looks timid and empty.

## System choices

- Frames: `media.photography/studio-seamless-object`
- Headline: `type.display-headline/regular-weight-quiet`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/information-bearing-button`
- Surfaces: `surface.panel/contrast-flip-panel`
- Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/word-blur-resolve`
- Scroll: `motion.scroll-reveal/line-ink-resolve`
- Hover: `motion.hover-state/row-fill`
- Phone menu: `nav.mobile-menu/side-drawer`
- Showpiece: `motion.product-demo-loop/autoplay-tabs-with-timer`
- Showpiece: `motion.scroll-pin-or-scrub/before-after-collapse`
- Atmosphere: `atmosphere.pattern/dot-gutters`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: inset-rounded-bar (seen on ECI, Decagon, Affirm)

*Feeling: a toolbar resting on the page.*

The strongest floating pattern: a full-width bar pulled in from the edges, with a medium radius. It keeps a normal bar's capacity for links and actions, and it reads as modern without looking like a toy. Use it for products with five or more links. Avoid it on image heroes, where a plain transparent row shows more of the picture.

Cal.com measures 8px from the top, 60px at the sides, 64px tall, radius 18, on `rgba(244,244,244,.72)` with blur. Raycast uses 16px from the top, 76px tall, radius 20, a 1px ring of white at 8 percent, near-black at about 80 percent. Svix goes opaque with no shadow at 1216x64. Affirm adds a 1px stroke that is brightest at the top left and fades away, which is a small, expensive detail. Decagon lets the bar sample the colour beneath it, including its footer's gradient.

```css
.nav{position:fixed;z-index:50;top:8px;left:60px;right:60px;height:64px;padding:0 12px 0 28px;display:flex;align-items:center;gap:32px;
  border-radius:18px;background:color-mix(in srgb,var(--ink) 4%,color-mix(in srgb,var(--bg) 72%,transparent));
  -webkit-backdrop-filter:blur(20px) saturate(1.4);backdrop-filter:blur(20px) saturate(1.4)}
.links{display:flex;gap:2px;margin-right:auto}
.links a{display:flex;align-items:center;gap:5px;height:36px;padding:0 12px;border-radius:9px;font-size:15px;transition:background .15s}
.links a:hover{background:var(--hover)}
.cta{height:36px;padding:0 15px;display:inline-flex;align-items:center;border-radius:12px;font-size:15px;font-weight:500;
  background:var(--solid);color:var(--bg);box-shadow:var(--solid-edge)}
@media(max-width:860px){.nav{left:8px;right:8px;padding-left:16px;justify-content:space-between}.links{display:none}}
```

### Hero: side-column-on-calm-side (seen on Framework, Stone Island, Levels)

- **Feels:** Direct, commercial, clear about what it sells.
- **Use when:** The image has a subject on one side and quiet on the other, for hardware, health and retail.
- **Not when:** You have to darken half the image to create the calm. That is `colour-wash-from-one-side`, done badly.
- **Recipe:** Subject in the right 55%. Copy column at the left, vertically centred, at a 56 to 140px gutter: 48 to 68px headline, 16 to 18px sub, a pill or link. Framework colours part of its headline with the accent against a black macro. Betterment measures 68/68 at weight 500, three lines, 550px wide, with three check bullets in the accent. Stone Island drops the copy low left in small type and hangs its one link beside the figure, on the title's baseline.

### Feature alternating: anchored-copy-rows (seen on Devin Desktop (codeium.com redirect), Increase, Bakstad Construction)

*4 sites, all gold, quality 5.* Small and expensive. The copy is pinned to the plate's base or top, and the rest of the column stays empty on purpose. Use it when you have strong plates and short copy. It needs a page with visible rails, or the empty column looks unfinished.

Recipe: two equal columns, about 607px each. A plate about 460 to 570px tall, a window cropped by its base. Copy at the bottom of the opposite column: a two-tone line, muted first and full ink second, then 16px at about 56% ink. The next row flips, starting about 120px below. Increase's form splits rows with 10% rules and uses `justify-content: space-between` to push a customer quote to the row's base.

Seen on Devin (codeium.com), Increase, Bakstad Construction, Warp. Suits light precision and photo-led, for AI, finance, architecture.

```css
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 112px; }
.row.flip .plate { order: 2; }
.copy { align-self: end; padding: 0 24px; }          /* sits on the plate's base line */
.copy h3 { font: 400 30px/1.14 var(--font-display); letter-spacing: -.026em; }
.copy h3 span { display: block; color: var(--ink-3); }
.copy p { margin-top: 10px; color: var(--ink-2); max-width: 31em; }
.plate { position: relative; height: 468px; overflow: hidden; background: linear-gradient(160deg, var(--wash-1), var(--wash-2)); }
.win { position: absolute; left: 44px; right: 44px; top: 44px; height: 520px; display: grid; grid-template-rows: 44px 1fr; background: var(--surface); border-radius: 12px; box-shadow: 0 0 0 1px rgba(0,0,0,.07), 0 30px 60px -28px rgba(0,0,0,.45); font-size: 15px; }
.win.off { right: -60px; }   /* every second window leaves by the edge */
@media (max-width: 900px) { .row { grid-template-columns: 1fr; margin-bottom: 64px; } .row.flip .plate { order: 0; } .copy { padding: 8px 0; } .plate { height: 380px; } .win { left: 20px; right: -40px; top: 24px; } }
```

### Testimonial: quote-beside-portrait (seen on Render, Asana, Claude)

*Feeling: meeting the person.*

Half image, half words. Use it when you have one customer worth meeting. The media decides the tone: a film-look photo on Asana, a halftone or duotone portrait on Mixpanel, or Render's clever option for when you have no photo at all, a grainy landscape in the customer's colours with their logo centred in white. That plate needs nothing but CSS, and it reads as commissioned art, because the grain does the work.

Render pairs a 680 by 400 plate at radius 6 with a 32/40 quote, name and role low, and 40px square arrows on the plate's base line. Claude's page uses a 520px photo beside a 28/38 serif quote with no avatar, because the photo is already the person. Isolabella bottom-aligns the quote against the photo and leaves the space above it empty.

```css
:root{--grain:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.wrap{display:grid;grid-template-columns:680px 1fr;gap:128px}
/* Horizontal bands in the customer's colours, wider and softer than feels right. Eight stops, none evenly spaced. */
.plate{position:relative;isolation:isolate;height:400px;border-radius:6px;overflow:hidden;display:grid;place-items:center;color:#fff;
  background:linear-gradient(180deg,var(--c1) 0,var(--c2) 34%,var(--c3) 62%,var(--c4) 100%)}
.plate::after{content:"";position:absolute;inset:0;z-index:-1;background:var(--grain);mix-blend-mode:overlay;opacity:.95}
.t{display:flex;flex-direction:column;justify-content:space-between}
blockquote{font:500 32px/40px var(--font-display);letter-spacing:-.03em;text-wrap:pretty}
@media(max-width:1100px){.wrap{grid-template-columns:1fr;gap:32px}.plate{height:280px}blockquote{font-size:26px;line-height:33px}}
```

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

### Steps process: active-step-beside-media (seen on Monzo, 360Rides, Jurafuchs)

*5 sites, quality 4.* Stepper as interface. Use when a single phone or card can show each stage. Monzo sets a 56px numeral beside a 560px white card, with others collapsed and a coral media tile opposite. Jurafuchs and Ripple use a list beside one floating UI card.

Seen on Monzo, Jurafuchs, Ripple Health, 360Rides.

### Stats: stat-tiles (seen on Levels, Soundsensing, Buffer About)

*Feeling: small dashboards.*

Filled tiles, one figure each, when the numbers need more explanation than a caption. Levels gives the model: three near-black tiles about 380 by 285, a 64px numeral in a pale tint, then a 22px subject, then a 13px sentence, and below the row a plain line stating the method and its limits. That three-step ladder of figure, subject and explanation is what lifts it above a stat card. Nx lets one numeral contain a blue arrow, drawing the change. Buffer publishes its real business figures in plain bordered tiles beside a link to a live dashboard, and that openness is the proof. Avoid an icon in a circle above the figure, which is the single most common generated section.

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

### Closing section: composer-close (seen on Claude, Ramp, Algolia)

*Feeling: start now, right here.*

The last call to action is the product. Claude ends on a real prompt field with its action inside. Ramp's blurred panel holds a 766px URL composer, and its final band restates the slogan over the hero's email field. Algolia draws a dashed dropzone with limits written beneath. New York Phil's preset donation amounts belong here too: a form with the first decision already made. A field beats a button whenever the first step can happen on the page. My heading at 48/400 looked limp beside the original, so set it heavier than you think.

```css
.close{padding:140px 24px;text-align:center}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}   /* keep a real label, visually hidden */
.close h2{font:600 52px/1.08 var(--font-display);letter-spacing:-.015em}
.close>p{font-size:22px;line-height:1.3;color:var(--ink-2);margin:16px auto 0;max-width:30em}
form{display:flex;align-items:center;width:min(560px,100%);height:54px;margin:40px auto 0;padding:7px 7px 7px 18px;background:var(--surface);border-radius:14px;box-shadow:0 0 0 1px var(--line);transition:box-shadow .15s}
form:focus-within{box-shadow:0 0 0 1px var(--ink-2),0 0 0 4px color-mix(in srgb,var(--accent) 16%,transparent)}
form input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:16px}
form button{flex:none;display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 14px;border:0;border-radius:8px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:500}
```

### Footer: one-line-colophon (seen on Block, Elyx, Babylonstoren)

*Feeling: honest about its size.*

For a page with few destinations, one row. Elyx sets a single centred line with dot separators directly on its background art. UploadThing runs copyright, three links, a green status dot and three icons under a hairline. Daily uses mono slash-prefixed links in about 100px. Teenage Engineering sets seven thin lowercase links in a 96px black strip. Block pins six links to the bottom of the viewport so they mirror the top row. Svelte uses one centred sentence, because the real footer lives in the docs. A short footer shows confidence, and padding one with columns you do not need is exactly what cheapens it.

### Frames: studio-seamless-object (seen on Boston Dynamics, Sakara, Apptronik)

*Feeling: considered, like a museum shot of a useful object.*

**Use:** Products and hardware, packaged goods, and any object that can be repeated. The fastest way to make a catalogue feel like a brand. **Avoid:** Services, or a product too small or dull to carry a full tile.

One object, one sweep, one key light from one side, and a long soft shadow. Keep the same object scale across tiles: fill about 50% of tile width for hardware, more for robots or figures. Choose a ground that belongs to the brand rather than white: deep colour with a single soft spot, cool grey with a diagonal falloff, or a brand field colour. Colour of the sweep carries the identity; the object stays natural. Shallow depth of field on small things, and leave status lights on so machines look alive.

### Headline: regular-weight-quiet (seen on Warp Pricing, Scale AI, Ramp)

Unhurried and costly. Nothing on the page is raising its voice. Seen on 10 sites.

**Use it for:** Finance, AI infrastructure and premium SaaS. Best when the page has real density below, which the calm heading can sit on top of.

**Avoid it for:** Stock text faces at display size: at weight 400 they read as unstyled. It needs a face with real drawing.

**Recipe:** Headline at weight 400 only, 48-116px, line-height 1.0-1.1, tracking -0.01 to -0.03em, black or warm near-black, flush left, one line if it fits. Allow no bold heading anywhere on the page. Hierarchy comes from size and ink alone; labels drop to 11-13px mono or small caps.

**Why it works:** Regular weight is the most common H1 weight band in the deep data, with 94 of 316 sites between 301 and 400. Generated pages reach for bold because volume feels like confidence. Regular at large size reads as more confident because it is not trying.

<a id="light-large-sans"></a>

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

### Primary button: information-bearing-button (seen on 1X, Bauhaus Clock, Analogue)

*Feeling: a shop assistant who answers before you ask.*

The control carries a fact as well as a verb. 1X sets a 14px price 16px to the left of a dark pill, so the price reads as part of the control. Bauhaus Clock writes the price into the label on every button. Analogue keeps one 41px pill through Buy Now, Available Now and Sold Out, with a 15px note 16px beneath about shipping. Definitiv Digital replaces a demo button with a 64px portrait of the founder and two lines of text, and a person is harder to ignore than a verb.

Use it for commerce, single-product pages and services sold by a person. Keep the shape fixed across states, and set price in tabular figures.

### Surfaces: contrast-flip-panel (seen on Scale AI, Sonder, Nx)

*Feeling: the lights change.*

One panel in the inverse of the page. Nx puts a 1320px white diagram panel on near-black, and it becomes the brightest thing on a long dark page, so that is where the explanation goes. Scale sets a deep green statement panel beside an image tile. Use it once or twice on a long page, at the moment you most want attention. Leave most of the panel empty, because a flip already has all the emphasis it needs.

### Surface ladder: page-tint-drift (seen on Fabrica Partners, Claude Pricing)

*Feeling: the whole page changes weather as you read.*

**Use it for:** Editorial finance and brand sites with few, clear sections. **Avoid:** Dense tools. A moving ground under UI is a distraction.

Body background cross-fades between near-whites, such as warm grey, peach and pale blue, about .9s ease, as sections enter. Differences of 2 to 3 L* only. Nav tints with the page. No gradients on elements.

Fabrica cross-fades the whole page between warm grey, peach and pale blue over about .9s, with no gradients on any element. Claude Pricing moves its neutrals per section and lets the nav tint with them.

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

### Load: word-blur-resolve (seen on Greylock, Linear Method, Monark Markets)

*Feeling: a thought coming into focus.*

Words resolve left to right from blur and a saturated tint to sharp ink. On Greylock the first words are mid-resolve at 1.1s in a clear pale blue, and the line is done by 1.9s, so the wave runs at about 140ms a word. Use it on one short headline, six or seven words at most. Long headlines take too long at this rate, and speeding it up turns it into a smear. Do not blur body copy. For mechanics, see `load.md` Choreographed hero.

```css
h1 span{display:inline-block;animation:resolve .75s var(--ease-soft) both;animation-delay:calc(.3s + var(--i)*140ms)}
@keyframes resolve{
  from{opacity:.1;filter:blur(10px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  60%{opacity:1;filter:blur(2px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  to{filter:none;color:var(--ink)}}
```

Put `aria-label` on the `h1` and `aria-hidden` on each span, or a screen reader spells out the split. The mid-animation colour is the difference between this and a generic blur. My first pass faded a washed tint at 90ms a word, which read as lag rather than focus.

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

### Phone menu: side-drawer (seen on 1X, Polar, Peloton)

*Feeling: a layer pulled in from the edge.*

A sheet slides from the side with a sliver of page still visible. Betterment comes in over a dimmed page to about 80 percent width. Brex places Close at the top left and pins three buttons. 1X runs full width with a hairline list and legal lines at the base. Use it when you want the sense of a layer. A sliver of 30 to 60px of page says you can go back. Drawers from the right match the burger's position, and drawers from the left suit apps. Keep the motion at 200 to 320ms ease-out, because a slide reads as slow sooner than a fade.

```css
.drawer{position:fixed;inset:0 0 0 auto;z-index:50;width:min(90vw,360px);display:flex;flex-direction:column;background:var(--bg);
  translate:100% 0;visibility:hidden;transition:translate .26s cubic-bezier(.22,1,.36,1),visibility .26s}
.open .drawer{translate:0 0;visibility:visible}
.scrim{position:fixed;inset:0;z-index:40;background:color-mix(in srgb,#000 40%,transparent);opacity:0;pointer-events:none;transition:opacity .26s}
.open .scrim{opacity:1;pointer-events:auto}
```

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

### Showpiece: before-after-collapse (seen on Ramp, Razorpay Magic Checkout)

*Feeling: the argument is the animation.*

Scroll makes the claim. Ramp pins a scattered collage of receipts, forms and sheets joined by dashed lines, and on scrub the pieces fade to a pale wireframe as the heading changes and a single window remains. Razorpay flips an island to neon wireframe for its data chapters. Use it when the product's value is a before and an after. Spend your one rich pin here, because this is the highest-value scrub in the set.

### Atmosphere: dot-gutters (seen on Cloudflare Workers, Baseten, Sanity Pricing)

*Feeling: machined and quiet. Pattern as a material, not a decoration.*

**Use it for:** Precise light pages, especially AI and infrastructure. **Avoid:** Dots behind copy. The dot-grid hero is the generated default, and this variant is the opposite of it.

Dot matrix in the page, 1 to 2px dots on a 3 to 16px pitch, pale, only in gutters, seams and bands. White blocks sit on it and bite notches from band edges. Never behind copy. It replaces rules and background changes.

```html
<style>
/* the dots live behind everything. white blocks bite out of them, so copy never sits on dots */
.dotted{padding:12px;min-height:640px;background-image:radial-gradient(color-mix(in oklab,var(--ink) 22%,var(--bg)) .75px,transparent 1px);background-size:3px 3px}
.dotted .block{position:relative;background:var(--bg);padding:56px;text-align:center}
.dotted .block+.block{margin-top:96px}
/* stepped notches on the block edge, so the seam looks machined */
.dotted .bite{position:absolute;background:var(--bg)}
</style>
<div class="dotted"><div class="block"><h2>Logo wall</h2></div>
<div class="block"><i class="bite" style="left:0;top:-14px;width:90px;height:14px"></i><i class="bite" style="left:160px;top:-8px;width:120px;height:8px"></i><i class="bite" style="right:120px;top:-14px;width:70px;height:14px"></i><i class="bite" style="right:320px;top:-8px;width:160px;height:8px"></i><h2>A long statement in one block</h2></div></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.