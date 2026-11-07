# Your direction (seed 1011)

Reads as **ai**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Baseten, a gold ai page)

1. Navigation: `nav.floating-pill/condense-to-capsule`
2. Hero: `hero.interactive-demo/manual-walkthrough`
3. Logo wall: `section.logo-wall/full-strength-mono-logos`
4. Feature tabs: `section.feature-tabs/pill-tabs-over-stage`
5. Case study: `section.case-study/photo-overlay-story-cards`
6. Feature sticky scroll: `section.feature-sticky-scroll/pinned-index-scrolling-column`
7. Blog index: `section.blog-index/peek-news-rail`
8. Stats: `section.stats/one-giant-number`
9. Contact form: `section.contact-form/routing-list`
10. Closing section: `section.cta-band/pattern-edged-panel`
11. Footer: `section.footer/full-width-directory`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Geist** with **Geist**. Geist on white needs 500 where dark needs 450; lighter sites lose presence against bright paper.
- Display: 64px, phone 40px, weight 500, tracking -0.035em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.55. UI: Geist 14px 500. Label: 400, uppercase, 0.04em
- Load: https://fonts.googleapis.com/css2?family=Geist:wght@400..500&display=swap https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400&display=swap

## Palette

From Liquid AI: bg #ffffff, surface #f3effa, text #18181b, muted #71717a, accent #7c3aed. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `product-story-assembles`, **Scroll** `before-after-collapse`, **Hover** `media-zoom`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Baseten** (ai, gold) https://baseten.co
- Doing: Inference infrastructure drawn as an isometric pixel city on a severe square grid, with a black-and-white base and one colour per product.
- Why it feels made: Nothing has a radius, one weight carries all display type, and mono labels sit in bars cut to exact grid columns. Dotted seams replace section dividers and the world recolours per product.
- If imitated badly: Without the real isometric scene and exact column snapping, the square tiles and dotted bands read as a brutalist template.

**Devin Desktop (codeium.com redirect)** (ai, gold) https://www.codeium.com
- Doing: A desktop agent app sold by its own interface: rebuilt UI fragments on painterly image plates, held inside a ruled page frame with quiet two-tone type.
- Why it feels made: Every screenshot is a legible HTML rebuild sitting on a soft photographic plate, so the page feels like the product. Rails, hairlines and one regular-weight headline voice make a strict, calm ledger.
- If imitated badly: The calm depends on real, specific UI content; with lorem rows or a generic gradient plate it becomes default SaaS.

**Attio Pricing** (saas, gold) https://attio.com/pricing
- Doing: A pricing page treated as a precise reference document: four plain cards, then a huge matrix that stays usable the whole way down.
- Why it feels made: Radius, hairline and grey values are exact and repeated, one soft blue is the only colour, and the sticky header solves the real problem of long comparison tables. It feels like the product UI.
- If imitated badly: Copied at lower precision (uneven hairlines, default shadows, loose rows) this is just a generic white pricing table.

## System choices

- Headline: `type.display-headline/ruled-lines`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/split-choice-button`
- Surfaces: `surface.card/edge-signature-card`
- Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/one-weight-line-set`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/product-story-assembles`
- Scroll: `motion.scroll-pin-or-scrub/before-after-collapse`
- Hover: `motion.hover-state/media-zoom`
- Phone menu: `mobile.phone-nav/floating-card-bar`
- Showpiece: `motion.product-demo-loop/autoplay-tabs-with-timer`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Atmosphere: `atmosphere.pattern/data-point-field`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: condense-to-capsule (seen on mymind, Bauhaus Clock, Stripe Sessions)

*Feeling: the bar draws itself in as you start to read.*

At the top there is no bar, only a row on the hero. Once you scroll, it gathers into a capsule. This is the best-looking behaviour in the family, because the object appears exactly when it becomes useful. Six of the ten sites here are gold. mymind goes from a clear 1320px row to a 980x60 pill 25px from the top, at 80 percent white with 20px blur. Amplitude keeps 1380 wide. Stripe Sessions shrinks its button from 40 to 32px on the way. Inngest docks into a 40px black slab at radius 6. Use it on any marketing page with a strong hero. Avoid it on a page with no first-screen drama, where the change has nothing to resolve.

Set 54 to 64px tall, 16 to 25px from the top, radius 27 to 100. Animate `max-width` on the inner element over about 450ms on an expressive curve, and fill and shadow over 250ms. Toggle at 40px of scroll.

```css
.nav{position:fixed;z-index:50;inset:0 0 auto;display:flex;justify-content:center;padding:14px 40px;pointer-events:none;
  transition:padding .35s cubic-bezier(.22,1,.36,1)}
.nav-in{pointer-events:auto;flex:1;max-width:1360px;height:60px;padding:0 10px 0 24px;display:grid;
  grid-template-columns:1fr auto 1fr;align-items:center;border-radius:100px;
  transition:max-width .45s cubic-bezier(.22,1,.36,1),background-color .25s ease,box-shadow .25s ease}
.nav.stuck{padding-top:24px}
.nav.stuck .nav-in{max-width:980px;background:color-mix(in srgb,var(--bg) 80%,transparent);
  -webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);
  box-shadow:0 0 0 1px var(--line),0 12px 32px -12px color-mix(in srgb,var(--ink) 22%,transparent)}
```

```js
const n=document.querySelector('.nav'),f=()=>n.classList.toggle('stuck',scrollY>40);
addEventListener('scroll',f,{passive:true});f();
```

### Hero: manual-walkthrough (seen on New Material, BILD, Energen Digital)

- **Feels:** You turn the pages.
- **Use when:** The product has stages, or a clear before and after.
- **Not when:** One clear image would say it faster.
- **Recipe:** The visitor advances the story, while the page stays still. New Material shuffles a 704 by 468 card with two peeking behind. Energen drags a handle across a 640px browser frame between old and new, with four stat chips overlapping the corners. BILD steps a 640px phone through four stages with pill tabs and a speech card. Show the current step and let it auto-advance gently, with a pause.

### Logo wall: full-strength-mono-logos (seen on Amplitude, Asana, Attio Pricing)

*Feeling: nothing to prove.*

Solid ink, no greying, no caption. Greying says these are background. Full strength says these people chose us. Use it when the names are strong. Vercel sets six in black, 30px tall, justified along the base of the hero, and they are its only imagery. Asana sets a 30px claim left and five logos across the rest. Framer clusters eight white logos in a tight 575px block with a void on all sides, which is the most confident wall in the corpus. Resend uses a 6 by 2 grid in pure white at 28px optical height, under a sentence rather than a label.

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

### Case study: photo-overlay-story-cards (seen on Stripe Customers, Framer, Kata.ai)

*Feeling: the customer's world, tinted to your page.*

Darkened customer photos with a large logo. Tinting unifies mismatched photography. Vapi sets two 575 by 400 tiles 2px apart with a white logo, a result line and a glass button. Framer's black cards at 360 by 460 fade a photo in only on hover, behind the same logo. Kata's 480px rail adds a 40px arrow. Keep the tint even across cards, and use a heavy enough logo to survive it.

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

### Blog index: peek-news-rail (seen on Cognition, Gagosian, Acne Studios)

*Feeling: the latest, in passing.*

A homepage rail that bleeds off the right. Cognition sets flat 350 by 197 covers at 8px gaps from x=64, with a 15px serif title and a dotted date, under 32px square arrows. Factory uses 380px white cards at radius 4, a mono `READ MORE`, and turns the title orange on hover. Gagosian sets its rail on a dark band with 1px vertical rules and alternating image-first and headline-first items. Acne Studios sticks a lede at left while images run at right. Use it when news is secondary, and set the band on a tone if the page needs a beat.

### Stats: one-giant-number (seen on Leo Cussen Centre for Law, Royal College of Art, Birdie)

*Feeling: this one figure is the whole point.*

If you have one number that would stop someone, let it have a section. Checkout.com sets a figure at about 200px in a mono bold inside an outlined rounded card, with a 14px caption. Leo Cussen uses serif counters at 96px that roll like odometers on a yellow section. The Royal College of Art sets 130px white figures on full-bleed studio photographs, changing with scroll. DeepNode dims the next stat until it scrolls into place. Avoid four of these in a row.

### Contact form: routing-list (seen on Sanity Contact, Sora, Fantasy Contact)

*Feeling: the right desk, first time.*

Sanity offers four routes with no field in sight. My first version looked timid, because I took the analyst's 18px titles and pale rules. The real titles are about 22px, the rules are nearly ink, and the descriptions are in ink rather than grey. A list this plain needs that contrast. Sora offers two boxed options with a circular icon each. Fantasy uses a small segmented control above one huge email address.

```css
.wrap{width:min(1120px,calc(100% - 48px));margin-inline:auto;padding-block:120px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.wrap h1{font:400 48px/1.05 var(--font-display);letter-spacing:-.035em}
.more{margin-top:48px;display:grid;gap:12px;font:400 10px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}
.routes a{display:block;padding:16px 0 24px;border-top:1px solid color-mix(in srgb,var(--ink) 62%,transparent);transition:border-color .15s}
.routes a:hover{border-top-color:var(--ink)}
.routes b{display:flex;align-items:center;gap:8px;font:400 22px/1.3 var(--font-display);letter-spacing:-.01em}
.routes svg{width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.4;transition:transform .15s}
.routes a:hover svg{transform:translateX(3px)}
.routes span{display:block;margin-top:8px;font-size:14px;line-height:1.45;max-width:32em}
@media(max-width:760px){.wrap{grid-template-columns:1fr;padding-block:72px}.more{margin-top:24px}}
```

### Closing section: pattern-edged-panel (seen on Jasper, Lithic, Canopy)

*Feeling: decorated with restraint.*

A pale panel with a field of pattern and the middle cleared. This is the cheapest way to get a designed close with no art budget. Lithic's panel is 282px tall with an inset of 24 and radius 24, and thin rings radiate from around the button, so the pattern points at the action. Jasper builds pixel blocks in brand colours at both sides. Canopy lays contour rings in a tone-on-tone navy. My rings came out close at once, using one repeating gradient. The real ones add a thick accent crescent at the far edge, so vary the weight if you can draw it.

```css
.panel{position:relative;overflow:hidden;isolation:isolate;height:282px;border-radius:24px;background:var(--surface);display:flex;align-items:center;justify-content:center;gap:28px;padding:0 48px}
/* centred on the button, not the panel, so the pattern points at the action */
.panel::before{content:"";position:absolute;z-index:-1;inset:0;opacity:.42;
  background:repeating-radial-gradient(circle at var(--cx,72%) 50%,transparent 0 54px,var(--accent) 54px 55px);
  -webkit-mask-image:linear-gradient(90deg,transparent 18%,#000 62%);mask-image:linear-gradient(90deg,transparent 18%,#000 62%)}
.panel h2{font:700 32px/1.15 var(--font-display);letter-spacing:-.02em;text-wrap:balance}
.b{flex:none;gap:6px;height:40px;padding:0 16px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:600}
.b svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.7;transition:transform .15s}
.b:hover svg{transform:translateX(2px)}
@media(max-width:760px){.panel{height:auto;flex-direction:column;align-items:flex-start;gap:20px;padding:40px 24px;--cx:64%}
  .panel::before{-webkit-mask-image:linear-gradient(180deg,transparent 30%,#000);mask-image:linear-gradient(180deg,transparent 30%,#000)}}
```

### Footer: full-width-directory (seen on Cursor Pricing, Acne Studios, Vercel AI SDK)

*Feeling: a well-kept index.*

Four to seven equal columns across the whole container, with no logo column. It is the most common footer in the corpus and the safest, so it lives or dies on its details. Use it when there are many links and no reason to be clever. Render runs six 232px columns with 18px heads and 16/36 links, then a rule, a small mark, a live status line, copyright and a two-state theme toggle. Vercel runs two tiers of 14px links on 28px rows with small grey `New` chips. Avoid it when the list is short, since six columns of three links is a table of nothing.

```css
.foot{max-width:1376px;margin:0 auto;padding:0 32px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;padding-bottom:40px}
.cols section{display:flex;flex-direction:column}
.cols b{font:500 18px/24px var(--font-text);margin-bottom:14px}
.cols section b:not(:first-child){margin-top:30px}
.cols a{font-size:16px;line-height:36px;color:var(--ink-2);transition:color .15s}
.cols a:hover{color:var(--ink)}
.base{display:flex;align-items:center;gap:16px;height:64px;border-top:1px solid var(--line);font-size:13px;color:var(--ink-2)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);margin-right:-8px}
.glyph{width:16px;height:16px;background:var(--ink);border-radius:4px 4px 4px 0}
.right{margin-left:auto}
@media(max-width:760px){.foot{padding:0 16px}.cols{grid-template-columns:1fr 1fr;gap:32px 16px}.cols a{line-height:44px}.base{flex-wrap:wrap;height:auto;padding:16px 0}.right{margin-left:0;width:100%}}
```

### Headline: ruled-lines (seen on Accel, Vitrenko Library, Telkom-OT)

Ruled paper, ledgers, a document of record. Seen on 3 sites.

**Use it for:** Finance, archives, libraries and engineering. Very good when the page has a table or grid to rhyme with.

**Avoid it for:** Three-line-plus headlines with very uneven lengths when rules are cut to line width. Dark rules, which turn into stripes.

**Recipe:** Each headline line rests on its own 1px rule in the pale line colour, either cut to that line's width for a stepped edge or full-bleed like ledger paper. 72-125px, weight 300-400, rule 8-14px under the baseline. Keep rules very quiet.

**Why it works:** Rare, but all three examples scored top marks. It takes one line of CSS per line of text and gives a standard headline a structure no template has.

<a id="swapping-word"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: split-choice-button (seen on Factory, Upstash, Noxus)

*Feeling: a real decision, made easy.*

The main action plus a separate chevron cell. Factory sets a mono caps label at radius 3 with a 1px seam in the page colour, then a chevron box for platform choice. TypeScript uses a 61px white rectangle with a 3px black divider. Use it when one verb has real alternatives, such as an OS download or an install method. Clicking the label runs the default, so that default has to be a good guess. Detect the platform. Round only the outer corners, and give the chevron cell its own hover and an accessible name.

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

### Load: product-story-assembles (seen on Stripe Climate, Apple Intelligence, Soundsensing)

*Feeling: the load is the demo.*

The load plays what the product does. On Stripe Climate a colour band slides down to rest as a receipt fades in and a phone rises 8px through it, with a banner last. On Soundsensing a status card shows three green dots and one turns amber as an alert appears. Tana starts with empty frames, then adds video, then the speaker ring and a live caption, so it reads as a running call. Use it when your product has a sequence worth showing, and limit it to five beats. Each beat must be a separate object. Static copy on the left keeps it readable.

### Scroll: before-after-collapse (seen on Ramp, Razorpay Magic Checkout)

*Feeling: the argument is the animation.*

Scroll makes the claim. Ramp pins a scattered collage of receipts, forms and sheets joined by dashed lines, and on scrub the pieces fade to a pale wireframe as the heading changes and a single window remains. Razorpay flips an island to neon wireframe for its data chapters. Use it when the product's value is a before and an after. Spend your one rich pin here, because this is the highest-value scrub in the set.

### Hover: media-zoom (seen on Royal Ontario Museum, 1 Hotels, N26)

*Feeling: the picture breathes.*

The image scales inside a fixed frame. N26 takes 1.1 over 0.5s, Fairphone 1.05 over 0.6s, and Dekmantel 1.02 in 0.18s. Apple uses a very exact 1.0161 over 0.3s. Studio Dado takes 1.02 over 1s on `.23,1,.32,1`. Pick by register: 1.1 for consumer, 1.05 for general, 1.02 for premium, and slower as you go up. Keep the frame fixed, with `overflow:hidden`. Add `transform:translateZ(0)` to the frame if rounded corners flicker during the scale.

```css
.zoom{overflow:hidden;border-radius:12px}
.zoom img{transition:transform .6s cubic-bezier(.23,1,.32,1)}
.zoom:hover img{transform:scale(1.05)}
```

### Phone menu: floating-card-bar (seen on CleanShot X, Function Health, Cal.com Pricing)

*Feeling: the page runs behind it.*

The bar is an object. CleanShot sets a white card inset 12px, about 64px tall, radius 20, soft shadow, with a 40px app icon, a wordmark and a 40px grey menu tile at radius 14. Cal.com keeps a rounded 64px bar at an 8px inset. Function Health uses a 66px dark capsule. Raycast keeps a 58px capsule at 16px. Use it when the hero has a wash or an image worth showing in the gutter, and to keep a desktop floating nav's character. It costs about 90px in total, so keep it for pages with room to spare.

```css
.nav{position:sticky;top:12px;z-index:5;display:flex;align-items:center;justify-content:space-between;
  height:64px;margin:12px 12px 0;padding:0 12px;border-radius:20px;background:var(--bg);
  box-shadow:0 1px 2px color-mix(in srgb,var(--ink) 6%,transparent),0 8px 24px -8px color-mix(in srgb,var(--ink) 14%,transparent)}
.sq{width:40px;height:40px;border-radius:14px;background:var(--surface);display:grid;place-items:center}
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

### Atmosphere: data-point-field (seen on Exa, Ramp, Groq)

*Feeling: data as image.*

**Use it for:** Search, indexes, finance, AI. **Avoid:** Points in the text column.

Canvas of 2 to 4px squares or dots, one hue, dense at edges and thinning into space, with small mono tags naming clusters. Keep it out of the text column and let it rearrange on scroll.

Exa uses 2 to 4px squares, dense at the edges, with small mono tags naming clusters. Ramp scales one 2px dot language from a hero field to tiles and a globe. Groq keeps orange chips in the margins and rearranges them on scroll, mostly out of the text column.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.