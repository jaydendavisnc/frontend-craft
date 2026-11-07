# Your direction (seed 1012)

Reads as **ai**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Jasper, a gold ai page)

1. Navigation: `nav.floating-pill/inset-rounded-bar`
2. Hero: `hero.collage/ring-around-headline`
3. Case study: `section.case-study/story-index-rows`
4. Feature tabs: `section.feature-tabs/typographic-index`
5. Feature grid: `section.feature-grid/ruled-table-cells`
6. Animated demo: `product.animated-demo/self-playing-window`
7. Logo wall: `section.logo-wall/opposing-double-marquee`
8. Blog index: `section.blog-index/sidebar-filter-grid`
9. Faq: `section.faq/tile-row-stack`
10. Closing section: `section.cta-band/signature-art-close`
11. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Libre Franklin** with **Libre Franklin**. American gothic warmth; more ink and more history than the Swiss options, still neutral.
- Display: 56px, phone 36px, weight 500, tracking -0.024em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.6. UI: Libre Franklin 14px 500. Label: 500, uppercase, 0.05em
- Load: https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400..500&display=swap

## Palette

From Apple Intelligence: bg #ffffff, surface #f5f5f7, text #1d1d1f, muted #6e6e73, accent #0071e3. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `opacity-settle`, **Scroll** `horizontal-scrub-rail`, **Hover** `opacity-dim`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Jasper** (ai, gold) https://www.jasper.ai
- Doing: An enterprise AI platform dressed as a confident print identity: tight serif, square boxes and flat geometric colour instead of the usual gradient tech look.
- Why it feels made: One rule runs everywhere: 1px navy boxes with zero radius, flat fills only, and grid-paper and circle motifs that recur from hero to FAQ. Five flat colours each have a fixed job.
- If imitated badly: Hairline square boxes read as a wireframe unless the serif is this tight and the colour blocks this confident.

**Factory** (ai, gold) https://www.factory.ai
- Doing: An enterprise AI tool dressed as precision industrial equipment: greyscale, square corners, mono labels, one orange dot.
- Why it feels made: A strict 24px gutter, 3px button radius and five-step neutral ladder hold across 9000px, and colour appears only as tiny orange dots and photographic grain. The restraint is total and the imagery does the warming.
- If imitated badly: Copy the mono caps without the grainy imagery and exact grey ladder and it becomes an empty wireframe.

**Render** (devtool, gold) https://render.com
- Doing: A cloud platform page on crisp white with near-square controls, where real UI fragments and one grainy violet landscape carry all the atmosphere.
- Why it feels made: A 2px radius, 1px hairlines and strict type colour steps give engineering sharpness, while grain and gradient-wipe headings stop it feeling cold.
- If imitated badly: The gradient text works only as a transient reveal; left on permanently, or with soft 12px cards, this becomes every purple AI landing page.

## System choices

- Headline: `type.display-headline/regular-weight-quiet`
- Section headings: `type.section-heading/ruled-opener`
- Primary button: `button.primary/recommended-fill-in-row`
- Surfaces: `surface.card/edge-signature-card`
- Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/one-weight-line-set`
- Page rhythm: `layout.grid-system/full-width-small-gutter`
- Load: `motion.load-sequence/opacity-settle`
- Scroll: `motion.scroll-pin-or-scrub/horizontal-scrub-rail`
- Hover: `motion.hover-state/opacity-dim`
- Phone menu: `nav.mobile-menu/inset-card-dropdown`
- Showpiece: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-utility-header`

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

### Hero: ring-around-headline (seen on Claude, Scale AI, Kenzie Fraker)

- **Feels:** A busy, varied world around one clear idea.
- **Use when:** You have many real, good images or tasks.
- **Not when:** The images have different finishes. The ring exposes it.
- **Recipe:** A centred headline with 12 to 30 small tiles around it, 104 to 140px, radius 8, leaving a clear column for the copy. Claude's page alternates photos with pale squares, each with a 13px task caption, fading out toward the bottom. Kenzie Fraker uses about 16 small tilted work cards on a true circle. Tiles shrink with distance, from about 140 to 40px, to imply depth. Scale's version sits mid-page rather than in the hero.

### Case study: story-index-rows (seen on Linear Customers, MetaLab Work, Vercel Customers)

*Feeling: a serious client list.*

A customer page as a table, which is the highest form of restraint. It says you have too many stories for cards. Use it on index pages and whenever you have ten or more. Vercel's rows sit at a 96px pitch with no rules at all: a 14px company name, a two-line result, a grey logo, an 11px mono caps tag, and a right-aligned `READ STORY`. Hover fills the row, inset 8px from the page edges. Linear's tighter version is 56px rows on faint rules, and rows without a story link to the site instead, which is honest, then a final dim row invites your company. MetaLab Work uses 120px rows on black, with a thumbnail appearing on hover.

```css
.row{display:grid;grid-template-columns:1.05fr 1.6fr .9fr 1fr .7fr;align-items:center;min-height:96px;margin-inline:8px;padding:12px 16px;
  font-size:14px;line-height:20px;color:var(--ink-2);transition:background .12s,color .12s}
.row:hover{background:var(--surface);color:var(--ink)}          /* no rules: space separates, hover shows the row */
.row b{font-weight:500;color:var(--ink)}
.mono{font:400 11px/16px ui-monospace,monospace;letter-spacing:.04em;text-transform:uppercase}
.you,.you b{color:var(--ink-3);font-weight:400}                 /* the last row: your company */
@media(max-width:860px){.row{grid-template-columns:1fr auto;gap:2px 16px;min-height:80px}.row .wm,.tag{display:none}.row .end{grid-row:1/3;grid-column:2}}
```

### Feature tabs: typographic-index (seen on Baseten, Decagon, North Hub Partners)

*9 sites, quality 4.* The list is the design. Dramatic and confident. Use for services, channels and products where the names are good. Fits agencies and bold brands.

Recipe: a stack of very large names, 28 to 100px, on 1px rules or on none. Active full ink, others about 25 to 55%. A small preview photo or card swaps beside the list. Decagon stacks 60px channels with a photo that swaps under a rising tint. North Hub uses 36px serif rows at 146px pitch, and a progress line fills the rule. Nurx uses 16px mono caps on 51px rows in a tinted panel. Athletics scatters chips over 100px names.

Seen on Decagon, Baseten, North Hub, Nurx, Studio Unlmtd, Athletics, Figma FigJam. Suits photo-led, type-led, bold colour.

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

### Animated demo: self-playing-window (seen on Loops, Ramp, Slack)

*The product demos itself while you read.* Quality 5/5, 4 sites.

**Use:** Heroes of products with a clear flow. **Not:** Without a pause control. It must stop on request and under reduced motion.

**Recipe:** Real DOM app window plays itself: a cursor moves on a 0.9s eased path, clicks, selection moves, inspector swaps with a 220ms crossfade, breadcrumb updates. Loop every 3-4s per step. 36-44px circular pause control. Rest on a designed frame. The first frame must be a finished, believable state. VS Code offers pause, previous, next as three 44px circles. Slack puts a round play control outside the window.

```html
<style>
.demo{position:relative;height:520px;overflow:hidden;background:var(--surface)}
.st{position:absolute;left:120px;width:160px;padding:8px 10px;border-radius:7px;background:var(--bg);box-shadow:0 0 0 1px var(--line);font-size:13px;font-weight:500;color:var(--ink-2);transition:box-shadow .25s,color .25s}
.st.on{color:var(--ink);box-shadow:0 0 0 1.5px var(--ink)}
.cur{position:absolute;left:0;top:0;width:20px;height:20px;z-index:5;transition:transform .9s cubic-bezier(.45,.05,.2,1)}
.cur svg{width:100%;height:100%;fill:var(--ink);stroke:var(--bg);transition:transform .12s}.cur.dn svg{transform:scale(.86)}
.ins{position:absolute;left:340px;top:26px;width:280px;transition:opacity .22s,translate .22s}.ins.out{opacity:0;translate:0 6px}
.ctl{position:absolute;right:16px;bottom:16px;width:36px;height:36px;border:0;border-radius:50%;background:var(--ink);color:var(--bg)}
</style>
<div class="demo" id="w">
 <div class="st" style="top:26px">Check the label</div><div class="st on" style="top:88px">Tell the warehouse</div><div class="st" style="top:150px">Wait for scan</div>
 <div class="ins" id="p"><b>Tell the warehouse</b><p>Posts the order, the SKU and the expected bay.</p></div>
 <div class="cur" id="c"><svg viewBox="0 0 16 16"><path d="m3 2 10 4.5-4.3 1.3L7 12.5 3 2Z"/></svg></div>
 <button class="ctl" id="b" aria-label="Pause">II</button></div>
<script>
const st=[...document.querySelectorAll('.st')],T=['Runs on returns sent with a prepaid label.','Posts the order, the SKU and the expected bay.','Holds the refund until a bay scanner sees the parcel.'],
 p=document.getElementById('p'),c=document.getElementById('c'),w=document.getElementById('w');let i=2,run=true,tm;
const go=()=>{if(!run)return;const k=i%3,e=st[k],a=e.getBoundingClientRect(),b=w.getBoundingClientRect();
 c.style.transform=`translate(${a.left-b.left+a.width*.62}px,${a.top-b.top+a.height*.55}px)`;      // 1 cursor travels
 tm=setTimeout(()=>{c.classList.add('dn');setTimeout(()=>c.classList.remove('dn'),140);             // 2 press
  st.forEach(x=>x.classList.toggle('on',x===e));p.classList.add('out');                             // 3 selection, then panel
  setTimeout(()=>{p.innerHTML=`<b>${e.textContent}</b><p>${T[k]}</p>`;p.classList.remove('out')},220);
  i++;tm=setTimeout(go,2100)},950)};
if(matchMedia('(prefers-reduced-motion:reduce)').matches){run=false;c.hidden=true}else go();
document.getElementById('b').onclick=()=>{run=!run;clearTimeout(tm);if(run)go()};
</script>
```

### Logo wall: opposing-double-marquee (seen on Customer.io, Lightspeed, Soundsensing)

*Feeling: a busy exchange.*

Two rows moving opposite ways, which turns a list into texture. Use it when the list is long and you want it to feel like a section. Customer.io runs two rows of 290 by 77 ruled white cells in a 1256px frame, with a 36px pale strip between them carrying the count, and some cells wear a small `case study +` chip. Soundsensing lets raw black logos sit 150px apart with no boxes, and fades them inside the container. Vayne keeps logos at 70px tall so that the client list becomes spectacle. Struck frames each row in nested brackets, tagged by a peach chip.

### Blog index: sidebar-filter-grid (seen on Notion Blog, HealthyHer, Josh Comeau)

*Feeling: a calm library.*

A thin left rail of categories beside the posts. Notion uses a 120px rail at 14px with the active item bold, then two columns of cards with a pastel illustration tile, a 22/700 title and a short excerpt, ending in numbered pages. Josh Comeau reverses it, with a sticky right sidebar of chips and popular posts. web.dev gives each topic a band with a 400px left column and 2×2 links at right. It suits large archives with real topics. Notion works because one illustrator draws every tile, so match that discipline or use a different variant.

### Faq: tile-row-stack (seen on Soundsensing, Cal.com, Comet)

*Feeling: soft, tappable.*

Each row is a tone tile, and rules vanish. Tiles suit soft product pages and phones, since the whole row is visibly a button. Cal.com runs radius 22, 76px rows, 20px/700 questions and a 36px white disc with a chevron, and lets long questions break into two balanced lines. Its last row asks anything else, with an arrow, and turns the FAQ into a way in. Soundsensing uses 68px rows at radius 8 and a 10px gap. Comet floats page-coloured rows with a soft shadow over faint orbit lines. Hold the gap under the row's padding so the stack reads as one object.

```css
.split2{width:min(1260px,calc(100% - 48px));margin-inline:auto;padding-block:112px;display:grid;grid-template-columns:minmax(0,1fr) 678px;gap:64px;align-items:start}
.split2 h2{font:800 52px/1.05 var(--font-display);letter-spacing:-.03em;max-width:9em}
.stack{display:grid;gap:8px}
.stack details,.ask{background:var(--surface);border:0;border-radius:22px;transition:background .15s}
.stack details:hover,.ask:hover{background:color-mix(in srgb,var(--ink) 7%,var(--bg))}
.stack summary,.ask{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px;padding:16px 20px 16px 24px;font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.01em}
.d{flex:none;width:36px;height:36px;border-radius:50%;background:var(--bg);display:grid;place-items:center;transition:transform .2s}
.d svg{width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.8}
.stack details[open] .d{transform:rotate(180deg)}
.ask{color:var(--ink-2);font-weight:600}
.ask .i{display:flex;align-items:center;gap:12px}
.ask svg.s{width:20px;height:20px;fill:none;stroke:var(--ink-2);stroke-width:1.5}
.stack .a{padding:0 76px 24px 24px;font-size:16px;line-height:1.55;color:var(--ink-2)}
@media(max-width:1020px){.split2{grid-template-columns:1fr;gap:32px;padding-block:72px}.split2 h2{font-size:40px}.stack summary,.ask{font-size:17px;padding-left:20px}.stack .a{padding:0 20px 20px}}
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

### Headline: regular-weight-quiet (seen on Warp Pricing, Scale AI, Ramp)

Unhurried and costly. Nothing on the page is raising its voice. Seen on 10 sites.

**Use it for:** Finance, AI infrastructure and premium SaaS. Best when the page has real density below, which the calm heading can sit on top of.

**Avoid it for:** Stock text faces at display size: at weight 400 they read as unstyled. It needs a face with real drawing.

**Recipe:** Headline at weight 400 only, 48-116px, line-height 1.0-1.1, tracking -0.01 to -0.03em, black or warm near-black, flush left, one line if it fits. Allow no bold heading anywhere on the page. Hierarchy comes from size and ink alone; labels drop to 11-13px mono or small caps.

**Why it works:** Regular weight is the most common H1 weight band in the deep data, with 94 of 316 sites between 301 and 400. Generated pages reach for bold because volume feels like confidence. Regular at large size reads as more confident because it is not trying.

<a id="light-large-sans"></a>

### Section headings: ruled-opener (seen on Stripe Sessions, Baseten, Vercel Pricing)

A designed document. Structure instead of decoration. Seen on 6 sites.

**Use it for:** Conferences, editorial, pricing tables, and any long page that needs firm section starts.

**Avoid it for:** Pages already dense with rules and cards.

**Recipe:** Each section opens with a 1px rule across the container, or 4px for editorial. Heading at 28-60px hangs 12-16px under it in the left third, broken by hand onto two tight lines; content starts on the same line in the next column. Never centre.

**Why it works:** A rule gives the eye a start line, so the heading can hang from it. That is why tight leading such as 60/51 looks controlled here where it would look cramped floating in space.

```html
<div class="head"><h2>Short heading<br>on two lines</h2><div class="content">...</div></div>
```

```css
.head { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,2fr); column-gap: 24px;
        border-top: 1px solid var(--line); padding: 12px 0 88px; }
h2    { font: 400 60px/.85 var(--font-display); letter-spacing: -.03em; }
```

<a id="indexed-cell-heading"></a>

### Primary button: recommended-fill-in-row (seen on Cursor Pricing, Vercel Pricing, ElevenLabs Pricing)

*Feeling: a quiet nudge, no badge needed.*

In a pricing row, one filled button steers the choice. Vercel sets 36px pills at 14/500, white with 1px line on Hobby and Enterprise, solid #171717 on Pro. Analysts estimated 40px, and the measured value is 36. Cursor gives every plan a stone #e6e5e0 pill and only the pick a #26251e fill. Mercury uses accent against a pale accent tint. Buttons run full column width at 36 to 44px. ElevenLabs does the opposite, with all black buttons and tile colour marking the pick, which is worth stealing when tiles carry the colour already.

Do not add a Most Popular badge as well. One signal is enough.

```css
.b-plans{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:8px}
.b-plan{height:44px;border:0;border-radius:999px;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--ink);
  font:400 16px/1 var(--font-text);cursor:pointer;transition:background-color .15s}
.b-plan:hover{background:color-mix(in srgb,var(--ink) 13%,var(--bg))}
.b-plan.pick{background:var(--ink);color:var(--bg)}
.b-plan:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: edge-signature-card (seen on Stripe Connect, Universally Speaking, Queen's University Library)

*Feeling: an owned shape.*

An ordinary card with one owned edge: a chamfer, a corner bitten by a circle that holds an arrow, a folded corner, a coded top bar. Stripe Connect uses an 8px top bar, and Queen's University a 66px white circle holding a 46px arrow disc. This is one of the cheapest ways to get a signature, because the card can stay plain. Apply the same edge to every card and at least one other object, or it reads as a one-off. Avoid it if the page already has a signature.

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

### Icons: one-weight-line-set (seen on Vercel Pricing)

*Feeling: quiet and exact. It scans, then disappears.*

**Use:** Interface lists, pricing rows, navigation, and anywhere icons sit beside small text. The right default for nearly every site. **Avoid:** As a section's main image. At 48px and up, plain line icons look empty, so choose a treatment from the next group.

Take one good open library or draw on its grid. Lucide, Phosphor, Tabler, Radix and Heroicons are all sound, and which one matters less than using only one. Set near-black at 16px, 10px before a 14px label, 32px row pitch, stroke 1.5 with round caps. Give each row its own glyph, so the list reads as specific capabilities and not as twelve ticks. Match stroke to type: thin 1.25 beside light type, 2 beside heavy type.

```html
<!-- One master grid. Keyline shapes on 16: circle r 6.25, square 12 by 12 at r 2, portrait 10 by 13, landscape 13 by 10. -->
<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.25"/><path d="M8 4.25V8l2.5 1.5"/></svg>
<svg class="i" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2"/></svg>
```
```css
.i { width: 1.15em; height: 1.15em; flex: none; fill: none; stroke: currentColor;
     stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.feature { display: flex; align-items: center; gap: 10px; height: 32px; font-size: 14px; }
.i.lg { width: 32px; height: 32px; stroke-width: .75; }   /* twice the size, half the stroke: still 1.5 on screen */
```

**In the lab:** Rendered 12 icons on one 16 grid in a three-plan price frame and checked it against the Vercel frame. At normal size it sits in the same family, and the keylines did most of the work. At 32px the same paths needed half the stroke.

### Page rhythm: full-width-small-gutter (seen on Nicole Heim Studio, Stone Island, Vercel AI SDK)

**Feel.** Modern, confident, slightly editorial. The page uses the whole screen.
**Use when** you have enough content to fill a wide canvas: product grids, photo work, fashion, devtools. **Avoid** with long text, which then needs its own measure, and with sparse pages.
**Recipe.** No centred max-width. 24px side gutters at 1440 (Vercel), 32px (Nicole Heim), 22px (Stone Island), 15px (X8). Content runs about 1392px. Four-up at 354 pitch and two-up at 712 snap to the same edges as logo and footer, so the left edge is one unbroken line. Item gutters 12 to 24px. Stone Island's detail is worth stealing: 12px gutters, three 457px columns, and buttons in a later section hanging on the third column's x.

### Load: opacity-settle (seen on Block, George Thomas Hatton, Muda 26)

*Feeling: a print developing.*

The whole page appears in its final position at low ink and comes up as one sheet, 0.3 to 1s, with no stagger. Block uses `cubic-bezier(.25,0,.5,1)` at 0.3 to 0.4s. It marks arrival and hides font swap, with no travel at all. Use it for type-led and minimal sites where a stagger would feel fussy. It is close to nothing, so do not pair it with a heavier reveal further down.

### Scroll: horizontal-scrub-rail (seen on Decagon, Roy Jad, Oliver Dupuy)

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

### Hover: opacity-dim (seen on Polar, AuthKit, Levels)

*Feeling: the control recedes.*

The control gets quieter. Polar drops its white CTA to 0.85 in 0.1s, Nuxt takes green to 75 percent alpha, and AuthKit takes rows to 0.7. One rule works on any colour, so it suits a page with many brand fills. It reads as restraint on dark and weakly on light. Avoid a low-contrast ground, because a dimmed button can drop below readable contrast.

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

### Showpiece: pinned-step-swap (seen on LiveKit, Prototype, mymind)

*Feeling: turning pages beside a fixed picture.*

The classic product pin. The panel holds while a list advances and a visual changes to match. LiveKit frames the section in one hairline panel, with steps on the left, and isometric planes on the right, where the active plane goes bright white with a label while the others hold at about 10 to 25 percent. Use it for processes of three to five steps. Each step gets about one screen. It must collapse to a plain stacked list on a phone. See `scroll.md` Sticky text swap beside a pinned visual.

```css
.track{height:320vh;position:relative}
.stage{position:sticky;top:0;height:100vh;display:grid;place-items:center}
.step{color:var(--ink-2);transition:color .25s var(--ease-ui)}.step.on{color:var(--ink)}
.plane{opacity:.55;border:1px solid var(--line);transition:border-color .35s var(--ease-ui),transform .6s var(--ease-settle)}
.plane.on{opacity:1;border-color:var(--ink);background:var(--surface)}
@media (max-width:760px){.track{height:auto}.stage{position:static;height:auto;display:block}}
```
```js
const set=n=>{steps.forEach((e,i)=>e.classList.toggle('on',i===n));planes.forEach((e,i)=>e.classList.toggle('on',i===n))};
const tick=()=>{const r=track.getBoundingClientRect(),p=Math.min(.999,Math.max(0,-r.top/(r.height-innerHeight)));set(Math.floor(p*steps.length))};
addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});tick();
```

Keep the inactive planes visible. In my first build they sank to nothing and one lonely rectangle floated in the dark. Depth comes from what recedes. Empty planes also looked cheap until the active one held a real object, and a hairline frame around the section turned loose shapes into a diagram.

### Showpiece: sticky-utility-header (seen on Attio Pricing, Claude Pricing, Linear Changelog)

*Feeling: you always know where you are.*

The most useful pin on the web, and it is plain CSS. Attio sticks plan names, prices, toggle and all four CTAs under the nav across about 5,000px of matrix, so conversion stays in reach, and section titles pin beneath them until the next replaces it. Claude's pricing does the same with a hairline and no shadow. Linear's changelog sticks each date until the next pushes it up. Use it for any table longer than a screen.

```css
.plans{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line)}
.group{position:sticky;top:124px;z-index:3;background:var(--bg)}/* top equals the height of the row above */
```

Give sticky rows a solid background, or the table scrolls through them. No shadow is needed, since a hairline holds the edge.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.