# Your direction (seed 1002)

Reads as **saas**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from mymind, a gold saas page)

1. Navigation: `nav.top-bar/menu-logo-action`
2. Hero: `hero.type-only/centred-statement`
3. Integrations: `section.integrations/logo-tile-grid`
4. App window: `product.app-window/inset-sheet-window`
5. Annotated shot: `product.annotated-shot/magnifier-lens`
6. Animated demo: `product.animated-demo/typing-composer`
7. Feature grid: `section.feature-grid/ruled-table-cells`
8. Feature tabs: `section.feature-tabs/pill-tabs-over-stage`
9. Testimonial: `section.testimonial/peek-card-rail`
10. Closing section: `section.cta-band/photo-sign-off`
11. Footer: `section.footer/colour-flood-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Hedvig Letters Serif** with **Hedvig Letters Sans**. Sister faces with the same swelling stroke ends: enough contrast to structure a page, none to argue.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hedvig Letters Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&display=swap https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&display=swap

## Palette

From Comet: bg #fbfaf4, surface #f6f5ee, text #091717, muted #5e6661, accent #2898a4. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `tiles-assemble`, **Scroll** `pinned-step-swap`, **Hover** `accent-flip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**mymind** (saas, gold) https://www.mymind.com
- Doing: Sells a calm private memory tool through oversized bookish serif type, a soft sunset glow and interface props that behave like physical objects.
- Why it feels made: Each demo is art-directed with specific human content rather than lorem or fake dashboards, and the tag pill recurs from sentence to nav to AI labels. Colour stays in soft fields and one orange, so the page feels warm instead of busy.
- If imitated badly: Blurred rainbow glows plus a big serif turn into generic wellness-app styling without the art direction and object-quality demos.

**Alessandro Stella, Art Direction & Design Consultancy** (portfolio, gold) https://alestella.com/
- Doing: A portfolio reduced to one centered image at a time and two lines of caption, letting the work carry everything.
- Why it feels made: The restraint is absolute: single typeface, single size, hairline rules, off-white ground and generous margins, so the art direction work is the only decoration. Every spacing is consistent and nothing is boxed.
- If imitated badly: Without world-class imagery and exact centering this becomes an empty, slow template.

**Function Health** (health, gold) https://functionhealth.com
- Doing: A consumer health membership made to feel like a calm, premium medical journal: warm paper, serif statements and tiny, exact data graphics.
- Why it feels made: One colour, one headline device and one card language run for 12000px without tiring, and each section gets its own structure (ruled table, masonry, gradient column). UI fragments are redrawn for the page at real fidelity rather than pasted as screenshots.
- If imitated badly: The roman-plus-italic accent headline is everywhere now; without a real serif and this much restraint in colour it reads as a wellness template.

## System choices

- Headline: `type.display-headline/under-scaled-title`
- Section headings: `type.section-heading/tracked-caps-heading`
- Primary button: `button.primary/neutral-pill`
- Surfaces: `surface.card/grain-paper-tile`
- Surface ladder: `atmosphere.light-surface-ladder/warm-tone-only-ladder`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.section-rhythm/interlude-between-modules`
- Load: `motion.load-sequence/tiles-assemble`
- Scroll: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Hover: `motion.hover-state/accent-flip`
- Phone menu: `nav.mobile-menu/docs-tree-drawer`
- Showpiece: `motion.product-demo-loop/scripted-cursor-walkthrough`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: menu-logo-action (seen on Aman, Babylonstoren, 1 Hotels)

*Feeling: a concierge who asks one question.*

Three points and nothing else: a menu word at left, a centred mark, one action at right. Everything except the booking is hidden. Use it for hotels, restaurants, retreats and luxury goods, where the page is an atmosphere and only one decision matters. It is wrong for anything people need to compare or browse.

Set 56 to 73px tall. Aman uses a two-line burger, the word Menu at 14px and a search icon on the left, a tracked wordmark about 28px tall in the centre, and a 42px near-square charcoal block on the right. 1 Hotels grows the action to a 50px tracked caps button. Babylonstoren keeps the action as bold serif text with a hairline divider. Write the word Menu rather than leaning on the icon alone, because it is cheap and makes the bar feel written.

### Hero: centred-statement (seen on Linear Method, Wispr Flow, ECI)

- **Feels:** Editorial and serious, when the type is good.
- **Use when:** The headline is short, the voice is distinct, and something rises at the fold.
- **Not when:** You are about to add a gradient to one word to make it interesting.
- **Recipe:** An optional 11 to 14px label, a two-line 72 to 128px headline at 1.0 leading, a 13 to 20px sub, a CTA. Linear's method page sets 128 on near-black with a 13/20 paragraph about 340px wide and two faint arcs at the base. Wispr Flow runs 96/1 with a speech ribbon crossing the lower right corner, carrying real words. ECI floats four small claims at uneven positions around a 102px title. Instrument sets 64 on black with a white pill.

### Integrations: logo-tile-grid (seen on Amplitude, Definitiv Digital, Railway Docs)

*Feeling: pick yours.*

A grid of equal tiles, each a choice. Use it for 8 to 16 tools. Amplitude's six-column grid of 183 by 124 pale tiles at 8px gaps sets a 44px logo above a 16/600 label, under a black pill toggle, and ends with an ellipsis tile for any tool, then a link. Railway's 241 by 126 tiles use a hairline. Storybook offsets a wall of app tiles beside two small stats. Readwise keeps a soft inner shadow on its tinted tiles. Leave the row incomplete rather than inventing tiles, because a gap reads as honest.

```css
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.t{height:124px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font:600 15px/1 var(--font-text);transition:background .15s}
a.t:hover{background:color-mix(in srgb,var(--ink) 7%,var(--surface))}
.t svg{width:40px;height:40px;fill:currentColor}
.t.more{color:var(--ink-2)}                                    /* the last tile: any tool */
@media(max-width:860px){.g{grid-template-columns:repeat(3,1fr)}.t{height:108px}}
@media(max-width:480px){.g{grid-template-columns:repeat(2,1fr)}}
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

### Annotated shot: magnifier-lens (seen on Sentry)

*Zoom in. This is where the problem is.* Quality 5/5, 1 site.

**Use:** Debugging and monitoring products. **Not:** Anywhere without a dramatic, dim base shot.

**Recipe:** Dim dark UI shot with a circular lens about 300px, 4px gradient ring, showing the key lines enlarged at full brightness. The lens says which detail matters without a caption.

### Animated demo: typing-composer (seen on Attio, Claude, Comet)

*Someone is asking it something right now.* Quality 5/5, 5 sites.

**Use:** AI products. The strongest small motion for a prompt-led tool. **Not:** Non-prompt products.

**Recipe:** Composer types real prompts at 24-58ms a character with a slower pause on spaces, then send arrow fills, a shimmering Thinking line, then the answer. Panel tint changes per task. Modify and Replay buttons below. Start from a partial line. Anthropic uses a 320px white composer on a 690x420 sage panel with faint contours. Perplexity runs it huge: 858px composer, 32px type. Cal turns it into a 40px sentence with dashed-underlined tokens that resolve.

```html
<style>
.cv{position:relative;height:420px;display:grid;place-items:center;overflow:hidden;border-radius:6px;background:var(--surface)}
.box{width:320px;padding:12px 12px 10px;border-radius:9px;background:var(--bg);box-shadow:0 1px 2px rgba(0,0,0,.05),0 12px 30px rgba(20,40,30,.1);font-size:14px;line-height:20px}
#t{min-height:40px}#t i{display:inline-block;width:1.5px;height:15px;margin-left:1px;vertical-align:-2px;background:var(--ink);animation:bl 1s steps(2) infinite}@keyframes bl{50%{opacity:0}}
#s{margin:8px 0 0 auto;width:24px;height:24px;display:grid;place-items:center;border-radius:6px;background:color-mix(in srgb,var(--accent) 16%,var(--bg));color:var(--accent);transition:background .2s,color .2s}#s.on{background:var(--accent);color:#fff}
#o{margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-2)}
.shim{background:linear-gradient(90deg,var(--ink-3) 30%,var(--ink) 50%,var(--ink-3) 70%) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:s 1.6s linear infinite}@keyframes s{to{background-position:-200% 0}}
</style>
<div class="cv"><div class="box"><div id="t"></div><div id="s">↑</div><div id="o"></div></div></div>
<script>
const Q=[['Why did freight costs jump 14% in October?','Two carriers moved to peak surcharges on 3 Oct. 61% of the jump sits on the Gulf lanes.']],
 t=document.getElementById('t'),s=document.getElementById('s'),o=document.getElementById('o'),w=m=>new Promise(r=>setTimeout(r,m));
async function play(){for(let n=0;;n++){const[q,a]=Q[n%Q.length];o.textContent='';o.className='';s.classList.remove('on');
 for(let i=0;i<=q.length;i++){t.innerHTML=q.slice(0,i)+'<i></i>';await w(24+Math.random()*34+(' ,'.includes(q[i-1])?40:0))} // human rhythm
 s.classList.add('on');await w(420);o.textContent='Reading the ledger…';o.className='shim';await w(1300);o.className='';o.textContent=a;await w(3200)}}
if(matchMedia('(prefers-reduced-motion:reduce)').matches){t.textContent=Q[0][0];s.classList.add('on');o.textContent=Q[0][1]}else play();
</script>
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

### Feature tabs: pill-tabs-over-stage (seen on Asana, Brilliant, Spline)

*10 sites, quality 5.* Clear, friendly, app-like. The most common strong tab. Use when there are three to six named areas and the labels are short. Skip when labels run past three words.

Recipe: pills 38 to 56px tall, 8 to 16px gap, directly above a window 16 to 28px away. Active state: a solid ink pill with reversed text on pale pages, or a 1px ink outline and ink text on quiet ones. The window runs to the section's bottom rule and is cut by it. Asana and Spline dim and peek the neighbouring panels at about 25% opacity. Slack sets 24px labels with icons, so they read as prompts.

Seen on Supabase, Brilliant, Asana, Spline, Slack, Lyra, Headspace. Suits light precision, gradient light, warm neutral, for SaaS, AI, health and education.

```html
<div class="tabs" role="tablist" aria-label="Product areas">
  <button class="tab" role="tab" id="t1" aria-controls="p1" aria-selected="true">Roast log</button>
  <button class="tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1">Green stock</button>
</div>
<div class="win">
  <div class="dots"><i></i><i></i><i></i></div>
  <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1"><!-- real UI, taller than the window --></div>
  <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden></div>
</div>
```

```css
.sec { padding-top: 72px; border-bottom: 1px solid var(--line); overflow: hidden; }
.tabs { display: flex; gap: 8px; margin-block: 28px; overflow-x: auto; scrollbar-width: none; }
.tab { flex: none; height: 38px; padding: 0 20px; border-radius: 99px; border: 1px solid var(--line); background: none; font: 500 14px/1 var(--font-text); color: var(--ink-2); cursor: pointer; transition: color .15s, border-color .15s; }
.tab:hover { color: var(--ink); }
.tab[aria-selected="true"] { border-color: var(--ink); color: var(--ink); }
.tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
/* taller than the section allows: the section's own rule cuts it */
.win { height: 560px; margin-bottom: -1px; border: 1px solid var(--line); border-bottom: 0; border-radius: 16px 16px 0 0; background: var(--surface); overflow: hidden; }
.dots { height: 40px; display: flex; align-items: center; gap: 6px; padding: 0 16px; }
.dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--line); }
.panel[hidden] { display: none; }
```

```js
const tabs = [...document.querySelectorAll('[role=tab]')];
const pick = t => tabs.forEach(x => {
  const on = x === t;
  x.setAttribute('aria-selected', on);
  x.tabIndex = on ? 0 : -1;
  document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
});
tabs.forEach((t, i) => {
  t.addEventListener('click', () => pick(t));
  t.addEventListener('keydown', e => {
    const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    pick(n); n.focus();
  });
});
```

### Testimonial: peek-card-rail (seen on Astral, Brilliant, CleanShot X)

*Feeling: there is more, and you are welcome to look.*

Horizontal cards that run off the edge, the next one cut by the viewport. Use it when quotes are substantial and few, and when vertical room is short. It beats dots because the cut card is itself the scroll cue. Astral goes large: cards about 1060px wide, a corner notch of about 80px holding a pixel quote glyph, a duotone portrait and a 30/42 quote. CleanShot fixes a rating block at the top right and lets 480px cards overflow. Liquid AI uses a four-dash progress line with 36px arrows. Brilliant stacks five cards in depth, each neighbour tucked behind, smaller and fainter. Use `scroll-snap-type:x mandatory`, keep the arrows reachable, and never autoplay a rail of full sentences.

### Closing section: photo-sign-off (seen on Wispr Flow, Comet, Nuro)

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

### Footer: colour-flood-footer (seen on Exa, TR Studio, Wolff Olins Work)

*Feeling: the colour you were holding back.*

The largest flat colour on the whole page, kept for the end. Exa floods a saturated cobalt with fine grain and a thin serif sentence at about 77px. Browserbase goes to full orange with a white monogram. TR Studio makes a full-viewport periwinkle colophon with one centred seal, and closes on a 40px strip of oxblood. Use it when the brand owns a colour and the page above has been mostly neutral, because a flood after a colourful page adds nothing. Set all text in one tint of the field: white, or a dark of the same hue. A second colour usually ruins it. Avoid it if the brand colour is pale, because small links will fail contrast on it.

### Headline: under-scaled-title (seen on Cognition, Claude Pricing, Block)

Confident restraint. The page does not need to shout. Seen on 17 sites.

**Use it for:** Devtools, portfolios, editorial and any page where content or imagery is the star. On pricing, changelog and docs pages it is the correct default, because the job is getting to the content.

**Avoid it for:** A homepage with nothing strong below it. Small type with no content just looks unfinished.

**Recipe:** H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

**Why it works:** A quarter of gold sites sit at or below 36px. Thirty pixels reads as large if nothing outranks it, since scale is relative to the page and not to the viewport.

<a id="name-as-headline"></a>

### Section headings: tracked-caps-heading (seen on 1 Hotels, HAY, Xin Cheng Foods)

Engraved, hotel-like, quietly formal. Seen on 6 sites.

**Use it for:** Hospitality, retail, heritage and galleries.

**Avoid it for:** Long titles, and lowercase. Positive tracking belongs to capitals only.

**Recipe:** Modest heading in caps at 20-40px, tracking +0.04 to +0.1em, weight 400-600, in ink or a deep brand colour, left or centred. Reads as engraved, not shouted. Pair with a text link on the same baseline. Keep it under 30 characters.

<a id="emblem-opener"></a>

### Primary button: neutral-pill (seen on Linear, Polar, Affirm)

*Feeling: calm, expensive, one thing to press.*

A full pill in the strongest neutral the page allows, often the only filled object in the viewport. Linear uses #e5e5e6 rather than white on #08090a, then steps to pure white on hover, so the button has somewhere to go. Polar, Affirm and Revolut do the same on their dark sections, and the value flips with the ground while the shape stays. On light pages, deep brand tones such as a plum or a forest green behave as ink and belong here too.

Set 40 to 48px, 14 to 16px at 500, 20 to 24px padding, no shadow, press .97. Use it for dark product pages, finance, robotics and brands with strong imagery. Do not put two on one row with equal weight. Hold pure white in reserve, because white on black at rest is harsher than it needs to be.

```css
.b-pill{display:inline-flex;align-items:center;height:44px;padding:0 20px;border:0;border-radius:999px;white-space:nowrap;
  background:color-mix(in srgb,var(--ink) 92%,var(--bg));color:var(--bg);
  font:500 16px/1 var(--font-text);letter-spacing:-.011em;cursor:pointer;
  transition:background-color .16s cubic-bezier(.25,.46,.45,.94),scale .1s}
.b-pill:hover{background:var(--ink)}
.b-pill:active{scale:.97}
.b-pill:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
```

### Surfaces: grain-paper-tile (seen on Comet, ElevenLabs Pricing, Otter)

*Feeling: a physical sample of something.*

A warm off-white tile with fine noise, which reads as paper rather than as a div. Use it for pricing, feature tiles and warm AI brands. Avoid it on dense layouts, where noise turns to dirt.

Set a name top-left, a price or prompt bottom-left, and leave the middle empty. Two different grains are in play. Paper is a soft, low-contrast mottle you almost cannot see. A colour mesh takes a coarse, high-contrast monochrome speckle, and that speckle is what stops it reading as a stock gradient. One tile in the row may swap paper for mesh to mark the pick.

```css
:root{
 --paper:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
 --speck:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='3.2' intercept='-1.1'/%3E%3CfeFuncG type='linear' slope='3.2' intercept='-1.1'/%3E%3CfeFuncB type='linear' slope='3.2' intercept='-1.1'/%3E%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.tile{position:relative;isolation:isolate;height:200px;padding:20px;border-radius:16px;overflow:hidden;
  display:flex;flex-direction:column;justify-content:space-between;
  background:color-mix(in srgb,var(--ink) 5%,var(--bg));
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 6%,transparent)}
.tile::after{content:"";position:absolute;inset:0;z-index:-1;background:var(--paper);opacity:.5;mix-blend-mode:soft-light}
.tile.pick::after{background:var(--speck);opacity:.42;mix-blend-mode:overlay}
```

Give the pick tile a mesh made from your own accent colours, built from two or three overlapping `radial-gradient`s.

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

### Page rhythm: interlude-between-modules (seen on Comet, Airpost)

**Feel.** An argument taking a breath.
**Use when** a long feature run needs a turn in its reasoning. **Avoid** using more than twice.
**Recipe.** A 112/115 three-line statement, left aligned at x=150, no eyebrow, about 150px above and below. Or a wordless row: Comet sets six spheres of mixed sizes on one centre line in a 320px full-bleed row, restating its motif.

### Load: tiles-assemble (seen on Claude, Per Appelgren, New Material)

*Feeling: a collection being laid out by hand.*

Claude's hero starts with tiles smaller, denser and rotated about 3 degrees, spreading and straightening over about 3s as headline words rise. Per Appelgren flies a tilted stack in and fans it out. Elisa Breyer stretches thin slivers to full height across the grid. Use it where the product is a collection of objects and the layout has a natural looseness. It takes up to 6s on some sites, so keep the headline independent and readable by 2s. End on a real layout, not a pile.

### Scroll: pinned-step-swap (seen on LiveKit, Prototype, mymind)

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

### Hover: accent-flip (seen on Stripe Pricing, Warp Pricing, Stripe Climate)

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

### Phone menu: docs-tree-drawer (seen on Railway Docs, Material 3, React)

*Feeling: the same map you had on desktop.*

Docs readers are in the middle of something. Keep the tree. Shopify Polaris slides in its sidebar from the left with no changes. React opens an inline panel with tab row and uppercase labels. Railway puts search first, then the tree. Use it for docs, and open it scrolled to the current page, or the reader loses their place.

### Showpiece: scripted-cursor-walkthrough (seen on Stripe Atlas, Devin Desktop, Zapier)

*Feeling: someone is using it for you.*

A drawn cursor uses the real interface. Stripe Atlas plays a script of about 6s in a hero card: the cursor waits in open space, the card arrives, a name resolves with a green mark, radio options appear, a button changes to its working state, and a details card slides out. Zapier toggles a control, then a notification expands into a full email, with a pause button. Supabase highlights a row and a real button under a hand cursor. Use it when the product is a flow with clicks.

```html
<div class="cx"><div class="cy"><svg viewBox="0 0 18 22"><!-- your cursor --></svg></div></div>
```
```css
/* one element per axis, each on its own curve: the path comes out as an arc */
.cx{position:absolute;left:0;top:0;pointer-events:none;transition:transform var(--d,.9s) cubic-bezier(.45,.05,.3,1)}
.cy{transition:transform var(--d,.9s) cubic-bezier(.3,.1,.2,1)}
.cy svg{transition:transform .08s var(--ease-ui)}.press svg{transform:scale(.86)}
.btn.down{transform:scale(.97)}
```
```js
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function move([x,y],d=.9){cx.style.setProperty('--d',d+'s');cy.style.setProperty('--d',d+'s');
  cx.style.transform=`translateX(${x}px)`;cy.style.transform=`translateY(${y}px)`;return wait(d*1000+140)}
async function press(el){cy.classList.add('press');el?.classList.add('down');await wait(110);
  cy.classList.remove('press');el?.classList.remove('down');await wait(120)}
async function type(el,t){for(const ch of t){el.textContent+=ch;await wait(38+Math.random()*52+(ch===' '?90:0))}}
```

Three small things carry it. The cursor settles for 140ms before it clicks, because people aim. Press dips the cursor and the button together, because that is what a click looks like. A result stays on screen for about 2s. Read target positions from the DOM on each loop, not hard-coded numbers, or it misses after a resize. Under reduced motion, render the finished state with no cursor.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.