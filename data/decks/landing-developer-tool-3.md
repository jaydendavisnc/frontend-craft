# Your direction (seed 1007)

Reads as **devtool**, surface **landing**, register **mono-technical** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Expo, a gold devtool page)

1. Navigation: `nav.top-bar/transparent-to-solid`
2. Hero: `hero.split-copy-media/code-or-proof-as-picture`
3. Data viz: `product.data-viz/unit-block-diagram`
4. Logo wall: `section.logo-wall/full-colour-on-rails`
5. Integrations: `section.integrations/ruled-directory`
6. Feature tabs: `section.feature-tabs/file-tabs`
7. Feature alternating: `section.feature-alternating/split-card`
8. Stats: `section.stats/ruled-stat-cells`
9. Testimonial: `section.testimonial/display-pull-quote`
10. Closing section: `section.cta-band/signature-art-close`
11. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Bruno Ace** with **Geologica**. Cleaner than the usual sci-fi wides for automotive; a plain geometric gives it a showroom.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Geologica 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap https://fonts.googleapis.com/css2?family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100&display=swap

## Palette

From Temporal: bg #131313, surface #15131b, text #ffffff, muted #c5c3f0, accent #7f5bf1. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **brand line: a compressed belief, only with a strong image**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `instant-paint`, **Scroll** `word-ink-scrub`, **Hover** `border-only-card`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Expo** (devtool, gold) https://expo.dev
- Doing: Mobile infrastructure sold on a calm white page where soft squircle cards, app-icon geometry and real product fragments carry the pitch.
- Why it feels made: One ink, one pale card tone and one 40px radius repeat everywhere, so variety comes from content. Product fragments dissolve into cards through masks instead of hard crops, and -3px tracking gives Inter a drawn quality.
- If imitated badly: Crushed tracking below display sizes, or 40px radii with added borders and shadows, collapses straight into generic AI-SaaS bento.

**Bun** (devtool, gold) https://bun.sh
- Doing: A runtime homepage built like a lab report, where every section proves a claim with a benchmark, a real terminal or a real command.
- Why it feels made: One condensed black face, one mono and one hot pink sit in a hairline-ruled 1136px column. The clipped corner on every button and code block turns a plain box system into something owned.
- If imitated badly: Hard boxes and mono labels become brutalist cosplay if the data is invented or the hairlines and spacing drift.

**Stone Island** (fashion, gold) https://www.stoneisland.com
- Doing: A fashion house typed like an equipment spec sheet: one mono at 14px over viewport-tall campaign photographs and hard black and white flips.
- Why it feels made: The restraint is total and measurable: one family, one size, no radii, no shadows, and a 22px margin with 12px gutter grid that CTAs honour across sections. Hierarchy comes only from weight and case, so photographs and the compass mark carry all the scale.
- If imitated badly: Small mono over dimmed photos only holds with art-directed imagery; with stock shots it becomes a dark template with hard-to-read captions.

## System choices

- Headline: `type.display-headline/under-scaled-title`
- Section headings: `type.section-heading/indexed-cell-heading`
- Primary button: `button.primary/keycap-hint-button`
- Surfaces: `surface.card/photo-overlay-tile`
- Surface ladder: `atmosphere.light-surface-ladder/warm-tone-only-ladder`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/knockout-badge-tiles`
- Page rhythm: `layout.grid-system/full-width-small-gutter`
- Load: `motion.load-sequence/instant-paint`
- Scroll: `motion.scroll-reveal/word-ink-scrub`
- Hover: `motion.hover-state/border-only-card`
- Phone menu: `nav.mobile-menu/side-drawer`
- Showpiece: `motion.product-demo-loop/generative-glyph-loop`
- Showpiece: `motion.product-demo-loop/typed-input-loop`
- Atmosphere: `atmosphere.texture/paper-grain-page`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: transparent-to-solid (seen on Function Health, CleanShot X, Greylock)

*Feeling: it steps aside for the hero, then gets to work.*

The bar starts clear over hero media and becomes solid once you scroll past. It protects a full-bleed photograph or film while keeping navigation available. Use it with a true image hero. Without one, it is a transition for nothing. Function Health shows the richest version: an inset glass bar over the hero that resolves into a full-width cream bar with terracotta type.

Set 64 to 96px, shrinking to 64 to 72px. CleanShot goes from 96 to 72. Past about 40px of scroll, change background and colour over 200 to 300ms, and add the rule or soft shadow only in the solid state. Swap logo and CTA colour in step, and test the moment halfway through, where white links can pass over a pale fill.

### Hero: code-or-proof-as-picture (seen on Bun, Inngest, TypeScript)

- **Feels:** Numbers instead of adjectives. Respect for the reader.
- **Use when:** Developer tools and anything with a benchmark you can defend.
- **Not when:** The numbers are invented. They must be true and reproducible.
- **Recipe:** Bun: two columns near 515 and 557px between 1px rails. Left: NEW chip, H1 with one word in the accent, 18px sub, install block, OS toggle, text link. Right: panel with an ink border, four tabs, four labelled bars at 26px tall, exact values in mono, a method note. Inngest runs annotated code with no window frame, starting above the headline, on a grainy dark ground. TypeScript shows a real error row inside a live editor.

```css
.rails{width:1140px;margin:0 auto;height:844px;border-inline:1px solid var(--line);
  display:flex;flex-direction:column}
.grid{display:grid;grid-template-columns:520px 1fr;gap:44px;padding:64px 40px 0}
h1{font:600 66px/1 var(--font-display);letter-spacing:-.045em}
h1 em{font-style:normal;color:var(--accent)}
/* ink rule, not an alpha hairline: this register reads as print */
.panel{box-shadow:0 0 0 1px var(--ink);align-self:start;margin-top:34px}
.tabs{display:grid;grid-template-columns:repeat(4,1fr);font:500 13px var(--font-text)}
.tabs span{height:40px;display:grid;place-items:center;
  border-right:1px solid var(--ink);border-bottom:1px solid var(--ink)}
.tabs .on{background:var(--ink);color:var(--bg)}
.bar{display:grid;grid-template-columns:96px 1fr 52px;gap:10px;align-items:center;height:48px}
.track{height:26px;background:var(--surface);position:relative}
.track i{position:absolute;inset:0 auto 0 0;background:var(--ink)}
.track.us i{background:var(--accent)}
.used{margin-top:auto;border-top:1px solid var(--line);padding:18px 40px 22px}
```

Our first build used 8% alpha hairlines around the panel and it lost all presence next to the reference. Mono-technical heroes want full-ink 1px rules. The method note is the most important line in the hero: machine, dataset, run count, and a link to reproduce. It is what makes the bars believable.

### Data viz: unit-block-diagram (seen on Cloudflare Workers, ClickHouse, Paradigm)

*The idea, counted in blocks.* Quality 5/5, 3 sites.

**Use:** Architecture arguments: density, columnar, isolation. **Not:** Numbers that need a precise value.

**Recipe:** Two 544px outlined panels of small rounded cells. One lights scattered rows, the other whole columns. Or dashed tiles with accent-tint fills and accent mono captions. No numbers: the arrangement argues.

### Logo wall: full-colour-on-rails (seen on Loops, Stripe, Stripe Atlas)

*Feeling: real companies, in their own colours.*

Marks keep their brand colours and sit precisely on the page's lines. Colour reads as real, since a faker greys everything. It takes a grid to hold it, or it turns to confetti. Stripe's seven logos sit about 22px high at 172px centres in a 72px band between hairlines, aligned to the page rails. Its product pages place 4 by 2 marks exactly in the drawn column lines, about 100px apart. Loops runs eleven 22px colour logos in one row with a small `More` link and no caption. Keep them under 40px, and use it on a page light enough to absorb the colour.

### Integrations: ruled-directory (seen on Cloudflare Workers, Devin Desktop, Speakeasy)

*Feeling: a reference you can trust.*

A catalogue in a ruled table. It scored highest of any integration form, since it is simply the most useful. Speakeasy's 1248px grid runs two rows: a wide cell plus a narrow one, then three equal cells, with about 32px padding, a mono caps category, full-colour logos about 26px tall that wrap, and a grey mono `+ Any SAML / OIDC`. That final line is the best detail, because it covers everything unlisted. Cloudflare runs three ruled columns of 65px rows: a 20px line icon, 14px name, 14px grey descriptor. Devin Desktop uses five columns with left hairlines and a one-line purpose for each. mymind runs five platform columns split by rules, with large names and an orange action. Keep brand colour here. My first version was mono and looked like a wireframe.

```css
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.c{background:var(--bg);padding:28px 32px 32px;grid-column:span 2}.c.w{grid-column:span 4}   /* opaque cells: the gap is the rule */
.c h3{font:400 13px/1 ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2);margin-bottom:24px}
.l{display:flex;flex-wrap:wrap;align-items:center;gap:20px 32px}
.more{font:400 13px/1 ui-monospace,monospace;color:var(--ink-2)}                             /* + Any SAML / OIDC */
@media(max-width:860px){.g{grid-template-columns:1fr}.c,.c.w{grid-column:auto;padding:24px}}
```

### Feature tabs: file-tabs (seen on Cloudflare Docs, ReadMe, Telkom-OT)

*5 sites, quality 4.* Literal and honest for code and documents. Use on developer docs, or where the content really is files.

Recipe: bordered 13 to 14px mono tabs on the top of the frame, active tab white with a 2px accent underline. ReadMe's active tab has 6px square nodes on its corners. Telkom uses flush 226 by 46px cells, the active one filled.

Seen on Cloudflare Docs, ReadMe, MotherDuck, Telkom-OT, D Alexander CPA.

### Feature alternating: split-card (seen on Stripe Billing, Prisma, Brandrunnrs)

*8 sites, quality 4.* One object holds both halves, so a long page reads as a stack of labelled drawers. Use for a family of products, and when you want density. It handles five rows without fatigue, which free-standing zigzags do not.

Recipe: a 1232px card, 6 to 18px radius, 1px hairline. Left about 648px on the page colour: a 22px title, 16px body, and a button pinned to the base. Right, a pane one tint off with a 1px divider and layered UI cropped by the card edge. Rows sit 12 to 16px apart. Stripe adds a gradient hairline along the top and bottom edges of the hovered row. Keep the copy on one side.

Seen on Stripe Billing, Prisma, Fundrise, Strapi, Trigger.dev, Philadelphia Orchestra. Suits light precision, gradient light, bold colour.

```css
.row { position: relative; display: grid; grid-template-columns: 1fr 584px; height: 256px; margin-bottom: 12px; border: 1px solid var(--line); border-radius: 6px; overflow: hidden; background: var(--bg); }
/* two hairlines that only appear on the row you are reading */
.row::before, .row::after { content: ""; position: absolute; left: 0; right: 0; height: 1px; opacity: 0; transition: opacity .25s; background: linear-gradient(90deg, transparent 30%, var(--accent) 70%, transparent 92%); }
.row::before { top: -1px; } .row::after { bottom: -1px; }
.row:hover::before, .row:hover::after { opacity: 1; }
.c { display: flex; flex-direction: column; align-items: flex-start; padding: 24px; }
.c h3 { font: 500 22px/30px var(--font-display); letter-spacing: -.012em; }
.c p { margin-top: 6px; color: var(--ink-2); max-width: 37em; }
.btn { margin-top: auto; }
.p { position: relative; background: var(--surface); border-left: 1px solid var(--line); overflow: hidden; }
@media (max-width: 1020px) { .row { grid-template-columns: 1fr; height: auto; } .c { gap: 20px; } .p { height: 240px; border-left: 0; border-top: 1px solid var(--line); } }
```

### Stats: ruled-stat-cells (seen on Baseten, Sourcegraph, Stripe Billing)

*Feeling: an instrument panel.*

Figures in a shared table. It is the most reliable stats form on precise pages, and it stacks into two columns on phones with no redesign. Stripe Billing runs four 316px cells rail to rail, 1px rules, about 180px tall, 40px top padding, under a two-tone heading. Baseten uses left rules only, with a mono label. Sourcegraph sets three cells at 64px between strips of grey square pixels, with a dagger on each caption. Forma24 packs four cells into a 114px bar with the label baseline-aligned beside the numeral.

```css
.cells{display:grid;grid-template-columns:repeat(4,1fr);border-block:1px solid var(--line)}
.c{padding:40px 16px 34px;border-left:1px solid var(--line);min-height:180px}.c:first-child{border-left:0}
.c b{display:block;font:400 48px/1 var(--font-display);letter-spacing:-.04em;font-variant-numeric:tabular-nums lining-nums}
.c span{display:block;margin-top:14px;font-size:16px;line-height:22px;color:var(--ink-2);text-wrap:balance}
@media(max-width:860px){.cells{grid-template-columns:1fr 1fr}.c{padding:28px 16px;min-height:0}.c:nth-child(odd){border-left:0}
  .c:nth-child(n+3){border-top:1px solid var(--line)}.c b{font-size:36px}}
```

### Testimonial: display-pull-quote (seen on Attio, Greylock, Speakeasy)

*Feeling: the page stops and listens.*

One quote at headline scale, often the only place on the page the second typeface appears. Reserving a serif for this moment is what makes it land: Attio, Convex and Brex all keep a serif for a single quote. Use it once, for your single best sentence. Avoid it if the quote needs more than about 30 words.

Set 48 to 64px on 1.05 leading, tracking -2 to -3 percent, weight 300 to 400, on a measure of 700 to 1220px. Speakeasy runs it between hairlines with a small accent mark in the left rail and the text indented 112px, then a 56px square greyscale portrait, 18px name, mono role, a rule and a grey logo. Attio centres it in a tall cell on a fine dot grid. Greylock colours two phrases in the accent over a stippled map. Keep the mark small and solid, because a big pale one turns the sentence into a poster. For a scroll treatment, Figma fades each word from grey to full ink as you read.

```css
.band{border-block:1px solid var(--line);padding:72px 0 88px}
.in{display:grid;grid-template-columns:112px 1fr;max-width:1392px;margin-inline:auto}
.m{font:600 96px/.74 ui-serif,serif;color:var(--accent);margin-top:8px}      /* set heavier than the quote */
blockquote{font:300 64px/68px var(--font-display);letter-spacing:-.032em;max-width:1216px;text-wrap:pretty}
.by{display:flex;align-items:center;gap:24px;margin-top:40px}
.by img{width:56px;height:56px;object-fit:cover;filter:grayscale(1)}
.by i{width:1px;height:56px;background:var(--line)}
@media(max-width:760px){.in{grid-template-columns:1fr}blockquote{font-size:36px;line-height:40px}.by{flex-wrap:wrap;gap:16px}.by i{display:none}}
```

### Closing section: signature-art-close (seen on Baseten, A24, Speakeasy)

*Feeling: owned.*

One made thing carries the band. Baseten runs an extruded ribbon through numbered columns. Neon draws a bare tree in tiny glyphs on graphite. Speakeasy uses an ASCII arc. A24 sets a chrome wordmark. The art must appear earlier on the page, or it reads as decoration added at the end.

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

### Headline: under-scaled-title (seen on Cognition, Claude Pricing, Block)

Confident restraint. The page does not need to shout. Seen on 17 sites.

**Use it for:** Devtools, portfolios, editorial and any page where content or imagery is the star. On pricing, changelog and docs pages it is the correct default, because the job is getting to the content.

**Avoid it for:** A homepage with nothing strong below it. Small type with no content just looks unfinished.

**Recipe:** H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

**Why it works:** A quarter of gold sites sit at or below 36px. Thirty pixels reads as large if nothing outranks it, since scale is relative to the page and not to the viewport.

<a id="name-as-headline"></a>

### Section headings: indexed-cell-heading (seen on Polar, Telkom-OT, CSDG)

A drawing sheet or a filing system. Seen on 4 sites.

**Use it for:** Technical, architectural and industrial products, and pages with a real numbered sequence.

**Avoid it for:** Fake numbering on three unordered features.

**Recipe:** Heading sits in a ruled grid cell with a small index: a 16-30px number in muted ink or accent mono beside or above it, matching nav numbering if any. Title 30-80px weight 400, cell padding 24-40px. A folder-style slug can replace the number on developer pages.

<a id="italic-turn-heading"></a>

### Primary button: keycap-hint-button (seen on Zed Blog, Zed Pricing, LiveKit)

*Feeling: this product assumes you are good at it.*

A button that teaches its shortcut. Zed sets 36px, radius 4, 14px mono, a 2px inset lower lip, then a 20px inset keycap with a lighter 1px outline holding D. LiveKit puts a 20px T before the label. The shortcut must really work. On a tool used daily, this tells the reader more about the product than a sentence could.

Hide the keycap on touch. Add `aria-keyshortcuts` to the button.

```html
<button class="b-cap" aria-keyshortcuts="d">Download now <kbd>D</kbd></button>
```

```css
.b-cap{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 8px 0 12px;border:0;border-radius:4px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,#fff);font:400 14px/1 var(--font-mono,ui-monospace,monospace);cursor:pointer;
  box-shadow:inset 0 -2px 0 color-mix(in oklab,var(--accent) 62%,#000),0 1px 3px color-mix(in srgb,var(--accent) 12%,transparent)}
.b-cap:hover{background:color-mix(in oklab,var(--accent) 86%,#000);box-shadow:none}
.b-cap:active{scale:.99;translate:0 1px}
.b-cap:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.b-cap kbd{display:grid;place-items:center;width:20px;height:20px;border-radius:3px;font:500 11px/1 var(--font-mono,ui-monospace,monospace);
  background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}
@media(hover:none){.b-cap kbd{display:none}}
```

### Surfaces: photo-overlay-tile (seen on Stone Island, reMarkable, Dalco)

*Feeling: a magazine feature.*

A full-bleed photo with text on it. Radius 0 to 12, gaps 12 to 24. Put scrim only where the text sits: a bottom gradient to 50 or 60 percent black, or a side wash. The best version takes its scrim from the image, as DJI does by fading each photo's sky upward into a flat field drawn from that sky, so the text gets a clean ground that looks native. Use it for commerce, culture and anything with real photography. Never lay a uniform dark overlay across a whole photo, since that flattens the picture to protect three words.

### Surface ladder: warm-tone-only-ladder (seen on Anthropic News, Cursor Pricing, Zed Blog)

*Feeling: considered and slightly bookish. The current look of serious AI and tools companies.*

**Use it for:** Tools and editorial product pages that want warmth without cream. **Avoid:** It is popular, so it is the first thing to swap if the page reads as a clone of the category.

Page #f7f7f4, panels #f2f1ed, controls #e6e5e0, ink #26251e, secondary text ink at 60%, hairlines ink at 10%. In oklch: L .975, .958, .921, C .004 to .007, hue 95 to 105. No shadows and no pure white.

Set secondary text as the ink at reduced strength in oklab, not as a grey, so it stays warm on every step of the ladder.

```html
<style>
/* tone only. no shadow, no white, and text is the ink at reduced strength so it picks up the ground */
:root{--bg:#f7f7f4;--surface:#f2f1ed;--surface-2:#e6e5e0;--ink:#26251e;
  --ink-2:color-mix(in oklab,var(--ink) 60%,transparent);--ink-3:color-mix(in oklab,var(--ink) 40%,transparent);
  --line:color-mix(in oklab,var(--ink) 10%,transparent)}
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:40px}
.tile{background:var(--surface);border-radius:8px;padding:18px 16px;height:320px;color:var(--ink-2);font-size:13px;
  box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--ink) 2.5%,transparent)}
.tile h3{color:var(--ink);font-weight:500}
.tile a{display:flex;height:36px;align-items:center;justify-content:center;border-radius:99px;background:var(--surface-2);color:var(--ink);margin-top:14px}
.tile a.on{background:var(--ink);color:var(--bg)}
.tile hr{border:0;border-top:1px solid var(--line);margin:16px 0}
</style>
<div class="tiles">
  <div class="tile"><h3>Free</h3><a>Get started</a><hr>Two lanes</div>
  <div class="tile"><h3>Team</h3><a>Get Team</a><hr>Unlimited lanes</div>
  <div class="tile"><h3>Scale</h3><a class="on">Get Scale</a><hr>Rules and routing</div>
  <div class="tile"><h3>Network</h3><a>Talk to us</a><hr>Single sign-on</div>
</div>
```

### Logo: mark-as-image-system (seen on Soundsensing, Stone Island, Russell & Stellar)

*Feeling: a brand with real depth. The mark is everywhere and never tiresome.*

**Use:** Fashion, architecture, hospitality, hardware. Whenever you need decoration, use the mark before anything else. **Avoid:** A weak mark. Enlarging a poor logo only makes the problem bigger.

Redraw the mark for each scale. A 58px seal in the nav, 40px in the footer, and a 560px version with heavy concentric arcs in flat mid-grey as a whole band. A glyph that serves as divider, placeholder and overlay on portraits, then sits above a 630px wordmark in the footer. A 190px asterisk turning slowly, returning at 120px. A 51px tile that also appears etched on the product.

```html
<!-- Three masters of one idea. Parts fall away as size falls, and the big one gains detail the small one could not hold. -->
<symbol id="m16" viewBox="0 0 16 16"><path d="M3 10a5 5 0 0 1 10 0z" fill="currentColor"/><path d="M1 12.75h14" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="m44" viewBox="0 0 44 44"><g fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 31a17 17 0 0 1 34 0"/><path d="M12 31a10 10 0 0 1 20 0"/></g>
  <path d="M19 31a3 3 0 0 1 6 0z" fill="currentColor"/><path d="M1 35h42" stroke="currentColor" stroke-width="2"/></symbol>
<!-- m600: four arcs in 30, 24, 18 and 14px strokes, each broken by stroke-dasharray, set in flat mid grey on a near-black band. -->
```

**In the lab:** Three masters of one idea, with detail added at the top and removed at the bottom. My first small version, arcs over a dot, collapsed into the Wi-Fi icon at 16px. I replaced it with a half disc on a line. Always test a mark against the system icons it might be mistaken for.

### Icons: knockout-badge-tiles (seen on Svix, React Email)

*Feeling: stamped hardware. Each feature gets a maker's mark.*

**Use:** Developer tools and infrastructure, where a set of 6 to 12 features needs a strong repeating shape. **Avoid:** Friendly consumer pages, or when the container shape has no link to the brand.

Choose one solid container and one rule. A 56px near-black hexagon with white geometric glyphs knocked out of it: brackets, dots, bars, and no line icons. Or an 80px squircle at radius about 20, dark fill, 1px light border at 10%, a coloured brand glyph centred, 16px label below at 158px pitch. The container shape should echo the logo or product, because that is what makes it more than a tinted circle.

```js
// Flat-sided hexagon with softened corners. The glyph is knocked out, so it survives on any ground.
const hex = (s = 56, r = 5) => { const R = s / 2, p = [...Array(6)].map((_, i) => {
    const a = Math.PI / 3 * i - Math.PI / 2; return [R + R * Math.cos(a), R + R * Math.sin(a)]; });
  return `<path d="M${p.map(q => q.map(n => n.toFixed(1)).join(' ')).join('L')}Z" fill="var(--ink)"
    stroke="var(--ink)" stroke-width="${r}" stroke-linejoin="round" transform="translate(${s * .05} ${s * .05}) scale(.9)"/>`; };
// Glyphs inside are white shapes on a 24 box: bars, dots, brackets. No line icons, or the set stops reading as hardware.
```

**In the lab:** Matched Svix closely. I expected corner softness to matter and tested it: sharp and softened hexagons looked nearly the same at 56px, so match your interface radius and move on. What matters is that every glyph is built from the same bars and dots.

### Page rhythm: full-width-small-gutter (seen on Nicole Heim Studio, Stone Island, Vercel AI SDK)

**Feel.** Modern, confident, slightly editorial. The page uses the whole screen.
**Use when** you have enough content to fill a wide canvas: product grids, photo work, fashion, devtools. **Avoid** with long text, which then needs its own measure, and with sparse pages.
**Recipe.** No centred max-width. 24px side gutters at 1440 (Vercel), 32px (Nicole Heim), 22px (Stone Island), 15px (X8). Content runs about 1392px. Four-up at 354 pitch and two-up at 712 snap to the same edges as logo and footer, so the left edge is one unbroken line. Item gutters 12 to 24px. Stone Island's detail is worth stealing: 12px gutters, three 457px columns, and buttons in a later section hanging on the third column's x.

### Load: instant-paint (seen on Stripe, Polestar, Yamauchi No.10 Family Office)

*Feeling: fast, sure of itself.*

No entrance. Every word and control is final at first paint, and one ambient thing keeps running. Stripe's home page does this: the ribbon drifts, a live counter ticks, and a sales card joins at about 5s. Polestar paints its copy and lets the film cut. Use it whenever you have one strong moving thing, and for docs, dashboards and any page where speed is the message. Do not use it on a static page with nothing moving, because then it is simply a page. Run the ambient object from CSS or a small canvas so it costs nothing to start.

### Scroll: word-ink-scrub (seen on Scale AI, Baseten, Loopcraft)

*Feeling: pace follows the reader.*

The signature reveal of current product sites. A statement starts as pale ink and darkens word by word, tied to scroll position, never to time. On Baseten a statement of about 56px starts at about `#b8b8b8` with a sharp front around the word in progress and its first line indented to the second column. Groq spreads the change over about 3 lines at reading height, so grey to ink passes mid-sentence. Scale AI carries a colour tint in the unlit words, and fades the text out again as you leave. Use it for one statement per chapter, 30 to 60 words, 34 to 72px. Do not use it on body copy, because a reader who jumps must find finished text.

```html
<p class="ink" id="s">Your statement goes here, one idea, thirty to sixty words.</p>
```
```css
.ink{font:500 56px/1.11 var(--font-display);letter-spacing:-.02em;text-indent:2.1em;max-width:1120px;text-wrap:pretty}
.ink span{opacity:var(--a,1)}
```
```js
const el=document.getElementById('s'),text=el.textContent;
el.setAttribute('aria-label',text);
el.innerHTML=text.split(' ').map(w=>`<span aria-hidden="true">${w}</span>`).join(' ');
const spans=[...el.children],FLOOR=.2,FRONT=5;
function paint(){
  const r=el.getBoundingClientRect(),vh=innerHeight;
  const p=Math.min(1,Math.max(0,(vh*.8-r.top)/(r.height+vh*.35)));
  const head=p*(spans.length+FRONT);
  spans.forEach((s,i)=>{const t=Math.min(1,Math.max(0,(head-i)/FRONT));s.style.setProperty('--a',(FLOOR+(1-FLOOR)*t).toFixed(3))});
}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
  addEventListener('scroll',()=>requestAnimationFrame(paint),{passive:true});paint();
}
```

Keep spans inline. `inline-block` kills kerning across word gaps and can change line breaks. `FRONT` sets the softness: 2 gives a Baseten front, 5 to 8 a Groq gradient. Check the floor against the ground, because the unlit text must still be readable at rest for anyone who stops mid-way. Native version: `scroll.md` Native CSS with animation-timeline.

### Hover: border-only-card (seen on Vercel AI SDK, Neon Docs, 099)

*Feeling: the document stays still.*

The card does not move and only its border responds. Vercel's AI SDK steps from about `#EBEBEB` to `#BDBDBD`, 099 does it in 0.12s, and Neon's docs move borders to a solid accent. Hugging Face adds a pale fill and four small dark ticks at the corners where its dashed lines meet. Use it on dense grids and docs. The corner ticks are a good way to add character in a ruled layout.

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

### Showpiece: generative-glyph-loop (seen on Sequoia, Evenark, Ghostty)

*Feeling: drawn, not filmed.*

A tiny loop drawn from characters. Ghostty flips an ASCII ghost like a flipbook, with no canvas or video. Yamauchi swaps coloured squares on the logo's own grid. Sequoia draws portfolio marks in jittery chalk on a canvas. Evenark shows a ring of dots orbiting a disc, client work actually running. Use it for technical or craft brands. Stepped timing at 6 to 12 frames a second is what keeps it feeling hand-made. See `webgl.md` Dither and halftone.

### Showpiece: typed-input-loop (seen on Exa, Bun, Tally)

*Feeling: the claim, happening.*

A real input fills itself. Tally types a form title letter by letter, then opens a slash menu. Docker types on the left while log rows arrive on the right, with older rows dimming to about 40 percent, and the count in the subhead steps up. Exa fills its console over about 2s in place of a hero entrance. Bun walks real output through five steps with a progress line, hover pause, and replay and next controls. Use it for tools with an input. Show real commands.

```js
async function type(t){for(const ch of t){c.textContent+=ch;
  await wait(ch===' '?150+Math.random()*90:38+Math.random()*46)}}// bursts, not a metronome
```
```css
.cur{display:inline-block;width:.6em;height:1.1em;vertical-align:-.18em;background:currentColor}
.cur.idle{animation:blink 1.06s steps(1) infinite}@keyframes blink{50%{opacity:0}}
.log div{opacity:0;transform:translateY(3px);transition:opacity .25s var(--ease-ui),transform .25s var(--ease-ui)}
.log div.in{opacity:1;transform:none}.log div.old{opacity:.42}
```

Blink the caret only while idle, never during typing. Reserve the output area's height so the page does not grow as rows arrive.

### Atmosphere: paper-grain-page (seen on Zed Pricing, Zed Docs, KAWARA MUSEUM - LIBRARY)

*Feeling: flat fields feel printed rather than lit.*

**Use it for:** Docs, editorial, culture and type-led sites. **Avoid:** Visible grain at normal zoom. If you notice it on a white page it is too strong.

Fine monochrome noise tiled over the whole page, multiply at .03 on light, hard-light at .04 on dark, barely visible at 100%. Runs under nav, sidebar and content alike.

The demo also carries the hatched seams and gutter graph paper from the pattern section, because they read as one system on one ground.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.paper{position:relative;min-height:760px;background:var(--bg);isolation:isolate}
/* multiply, very faint, whole page */
.paper::before{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:multiply;opacity:.03;pointer-events:none}
/* gutters only: fine graph paper, fading down. the column interior stays plain */
.paper .gut{position:absolute;inset-block:0;width:max(0px,calc(50% - 560px));background-image:linear-gradient(color-mix(in oklab,var(--ink) 5%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in oklab,var(--ink) 5%,transparent) 1px,transparent 1px);background-size:8px 8px;-webkit-mask:linear-gradient(#000,transparent 70%);mask:linear-gradient(#000,transparent 70%)}
.paper .col{position:relative;width:min(1120px,100%);margin:0 auto;border-inline:1px solid var(--line);min-height:760px}
/* section seam: 12px of 45 degree hatch between two rules */
.paper .seam{height:12px;border-block:1px solid var(--line);background:repeating-linear-gradient(135deg,color-mix(in oklab,var(--ink) 9%,transparent) 0 1px,transparent 1px 5px)}
.paper .pad{padding:64px 24px;text-align:center}
</style>
<div class="paper"><div class="gut" style="left:0"></div><div class="gut" style="right:0"></div>
<div class="col"><div class="pad"><h2>Plan the week</h2></div><div class="seam"></div><div class="pad">Logos or a table go here.</div><div class="seam"></div></div></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.