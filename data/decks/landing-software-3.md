# Your direction (seed 1003)

Reads as **saas**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Birdie, a silver saas page)

1. Navigation: `nav.floating-pill/detached-corner-controls`
2. Hero: `hero.split-copy-media/product-on-plate`
3. Feature alternating: `section.feature-alternating/bleed-past-the-edge`
4. Feature sticky scroll: `section.feature-sticky-scroll/pinned-chapter-stage`
5. Logo wall: `section.logo-wall/logos-inside-another-block`
6. Case study: `section.case-study/photo-overlay-story-cards`
7. Stats: `section.stats/number-as-diagram`
8. App window: `product.app-window/inset-sheet-window`
9. Comparison table: `section.comparison-table/sticky-plan-header-matrix`
10. Closing section: `section.cta-band/inset-colour-panel`
11. Footer: `section.footer/ghost-wordmark-crop`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Monomakh** with **Commissioner**. A dark Slavonic-heritage face, with a neutral humanist sans that lets it stay the only historic voice.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Commissioner 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Monomakh&display=swap https://fonts.googleapis.com/css2?family=Commissioner:slnt,wght,FLAR,VOLM@-12..0,100..900,0..100,0..100&display=swap

## Palette

From Elyx: bg #ecebe6, surface #131313, text #4a4a47, muted #656562, accent #ff72bd. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-then-media`, **Scroll** `layers-cross`, **Hover** `opacity-dim`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Birdie** (saas, silver) https://www.birdie.so/
- Doing: Screen recording for support: white product page with iridescent blue gradient showcases and a dark closing CTA.
- Why it feels made: Tight display tracking, product UI as the hero and a single saturated blue panel give clear rhythm.
- If imitated badly: The gradient glass screens need real product UI; with placeholders it looks like stock.

**Loops** (saas, gold) https://www.loops.so
- Doing: An email SaaS page in warm paper tones, where four retro stripes run around the whole page like a record sleeve and real product demos do the selling.
- Why it feels made: A single ownable device, the stripe rail, starts at the hero, bends around the product and wraps the footer. Everything inside stays quiet: one card shell, one heading pattern, one 'Learn' row, repeated exactly.
- If imitated badly: The stripes only work if they travel with real curves; pasted as a static border they turn into a 70s pastiche.

**Brilliant** (education, gold) https://brilliant.org
- Doing: A tutoring product sold by showing real interactive lessons, with a warm serif voice on a calm paper-toned page.
- Why it feels made: The fan of genuine problem cards and cropped lesson UI do the selling, while a few tokens (sand, white, black, one green) hold steady for 8,000px. Tactile button edges and a blur-through capsule nav are the only flourishes.
- If imitated badly: Serif-plus-italic on sand becomes generic wellness styling if product imagery is stock or placeholder rather than real lesson UI.

## System choices

- Headline: `type.display-headline/under-scaled-title`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/colour-block-card`
- Surface ladder: `atmosphere.light-surface-ladder/warm-tone-only-ladder`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/one-weight-line-set`
- Page rhythm: `layout.grid-system/hanging-outdent`
- Load: `motion.load-sequence/colour-plate-then-media`
- Scroll: `motion.scroll-pin-or-scrub/layers-cross`
- Hover: `motion.hover-state/opacity-dim`
- Phone menu: `nav.mobile-menu/docs-tree-drawer`
- Showpiece: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: detached-corner-controls (seen on 099, Comet, Elyx)

*Feeling: there is no bar, only two buttons.*

The bar dissolves into separate objects. On Perplexity's Comet page the wordmark collapses into a 52px white circle on the left, with a teal pill and a 48px circle on the right. Discord shows its full links at the top, then leaves only a logo pill and a Log In pill. 099 keeps three boxed mono buttons over content. Elyx has one pill and nothing else. Use it for immersive pages, launches and long reads. Avoid it where people need routes, and check that content cannot sit behind the corners at their most awkward moment.

Set 12 to 40px from the edges, soft shadow, 40 to 52px tall. Corners collide with content more often than bars do, so test against your busiest section.

### Hero: product-on-plate (seen on Polar, Struck)

- **Feels:** Considered, material, a product on a table.
- **Use when:** Dark SaaS with one great card view.
- **Not when:** The plate's texture would be the most interesting thing on screen.
- **Recipe:** Copy on top. Below, a textured or gradient plate at about 72% of the container holding a floating product card, beside a 308px rail with a 30px two-tone statement and a plain 16px feature list. Plate crosses the fold. Struck uses a 1/3 plus 2/3 split with an orange-to-peach plate and a stats row docked directly below.

### Feature alternating: bleed-past-the-edge (seen on Spline, Aesop, Fairphone)

*8 sites, quality 4.* Bigger than the page. A window or photo leaves the container and runs off the viewport, which says there is more. Use once or twice, for the most important product moment.

Recipe: a 265 to 360px copy column at the page edge, and a window about 830px wide that passes the container and bleeds off the viewport. Spline adds a 12px mono eyebrow, a 56/64 heading and four 70px-pitch icon rows beside it. For photos, Medusa622 and Aesop let the photo run off one side at a 60px page gutter.

Seen on Spline, VS Code, Aesop, Fairphone, Le Saint Georges, Figma FigJam. Suits dark precision and photo-led.

### Feature sticky scroll: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Case study: photo-overlay-story-cards (seen on Stripe Customers, Framer, Kata.ai)

*Feeling: the customer's world, tinted to your page.*

Darkened customer photos with a large logo. Tinting unifies mismatched photography. Vapi sets two 575 by 400 tiles 2px apart with a white logo, a result line and a glass button. Framer's black cards at 360 by 460 fade a photo in only on hover, behind the same logo. Kata's 480px rail adds a 40px arrow. Keep the tint even across cards, and use a heavy enough logo to survive it.

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

### Comparison table: sticky-plan-header-matrix (seen on Warp Pricing, Cursor Pricing, Vercel Pricing)

*Feeling: a contract you can read.*

The standard, and rightly so. Seven of the gold pages use it. Use it whenever a plan table has more than ten rows.

Set a label column of 244 to 320px, equal plan columns, rows of 53 to 66px, 1px rules at 8 percent ink and 14px text. The sticky header runs 100 to 190px tall and repeats name, price and a 28 to 40px button. Details vary across sites and each is worth taking: Cursor's 28px pills are dark on two columns only, Supabase adds a 32px icon tile per group, GitHub tints the hovered row, Sanity uses dotted rules with a black rule above each group, Warp underlines tooltip labels in dots, and Dub bolds the number inside the phrase. Attio tints the recommended column full height, which is the easiest way to keep a place in a wide table.

```html
<table>
  <colgroup><col class="l"><col><col><col class="pro"><col></colgroup>
  <thead><tr>
    <th scope="col"><!-- corner: billing toggle or search --></th>
    <th scope="col"><div class="pl">Crew</div><div class="pr">$24 per seat a month</div><a class="btn" href="/crew">Start Crew</a></th>
  </tr></thead>
  <tbody>
    <tr class="group"><th colspan="5" scope="colgroup">Billing</th></tr>
    <tr><th scope="row">Card fee</th><td>2.7% + 30&cent;</td></tr>
  </tbody>
</table>
```

```css
table{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed;font-size:14px}
col.l{width:244px}
thead th{position:sticky;top:var(--nav,0px);z-index:2;background:var(--bg);padding:16px 12px;border-bottom:1px solid var(--line);text-align:left;font-weight:400;vertical-align:top}
.pl{font-size:20px;font-weight:500;letter-spacing:-.01em;line-height:1.2}
.pr{font-size:12px;color:var(--ink-2);margin-top:2px;font-variant-numeric:tabular-nums}
.btn{display:flex;align-items:center;justify-content:center;height:34px;margin-top:12px;border-radius:7px;font-size:13px;font-weight:500;box-shadow:inset 0 0 0 1px var(--line)}
.btn.on{background:var(--ink);color:var(--bg);box-shadow:none}
tbody th{font-weight:400;text-align:left;padding:0 12px 0 0;color:var(--ink-2)}
tbody td{height:56px;padding:6px 12px;text-align:center;font-variant-numeric:tabular-nums}
tbody tr>*{border-bottom:1px solid var(--line)}
tbody tr.group>*{padding:44px 0 12px;font:500 18px/1.2 var(--font-display);color:var(--ink);text-align:left}
td.pro{background:color-mix(in srgb,var(--ink) 2%,var(--bg))}
tbody tr:hover>*{background:color-mix(in srgb,var(--ink) 3%,var(--bg))}
.no{display:inline-block;width:12px;height:1px;background:var(--ink-3);vertical-align:middle}   /* a quiet no */
.yes{display:inline-block;width:16px;height:16px;vertical-align:middle;fill:none;stroke:var(--ink);stroke-width:1.6}
@media(max-width:860px){.wrap{overflow-x:auto}table{min-width:760px}col.l{width:150px}tbody th{position:sticky;left:0;background:var(--bg)}}
```

### Closing section: inset-colour-panel (seen on Cloudflare Workers, ECI, Astral)

*Feeling: the one loud moment.*

Full brand colour, inset from the viewport. It works when it is the only saturated surface on the page: Paddle spends about 4000px of sand before its yellow block. Add one owned detail so it is not generic. Paddle draws a 2px line with an arrow tip through the panel. Astral cuts a notch with a hatched patch and a white channel around it. Cloudflare adds a fine dot texture, a sunrise glow and a marquee strip along the base. ECI centres a statement in a tall green room. Vercel AI uses a square black panel on a light page, inside the page's 24px gutters. Kiro's violet panel sits under the character variant, because its ghost matters more than its fill.

```css
.panel{position:relative;overflow:hidden;min-height:500px;padding:64px;border-radius:16px;background:var(--accent);color:var(--ink);display:flex;flex-direction:column;justify-content:center}
.panel h2{font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;max-width:12em}
.panel p{font-size:20px;line-height:30px;max-width:24em;margin-top:24px}
.pair{gap:8px}
.panel .b{border-radius:12px;background:var(--ink);color:var(--bg)}
.panel .b.s{box-shadow:none;background:color-mix(in srgb,var(--ink) 12%,transparent);color:var(--ink)}
/* one drawn element that belongs to the brand: a 2px line running out through the top edge */
.mark{position:absolute;right:32%;top:0;bottom:64px;width:2px;background:var(--ink)}
.mark::after{content:"";position:absolute;left:-5px;bottom:-1px;width:12px;height:12px;border:solid var(--ink);border-width:0 2px 2px 0;transform:rotate(45deg)}
@media(max-width:760px){.panel{padding:32px 24px;min-height:0}.panel h2{font-size:36px}.mark{display:none}}
```

### Footer: ghost-wordmark-crop (seen on Bauhaus Clock, Resend, Medusa622: Luxury Skin & Nails in Knightsbridge)

*Feeling: a watermark in good paper.*

The same huge word, set barely off the ground. Bauhaus Clock puts it on the page tone at about 11 percent ink, with a single row beneath in 20px type. Resend sets `#111` on black, cropped by a full-width hairline with a soft glow under it. Substack fades it into white and Otter crops it at the page edge. It gives a footer weight without volume, so it suits calm pages and light products. Links stay in full contrast above it. The tone must be visible on an ordinary laptop screen, so test it on a dim display, and if you crop, cut about a third so it reads as deliberate.

```css
.foot{padding:0 50px 28px}
.fit{container-type:inline-size}
.mark{display:block;width:max-content;white-space:nowrap;font:500 calc(100cqw/var(--k,6.2))/1.05 var(--font-display);letter-spacing:-.015em;color:color-mix(in srgb,var(--ink) 11%,var(--bg))}
.row{display:flex;justify-content:space-between;font-size:20px;line-height:24px;color:var(--ink-2);margin-top:6px}
.row a:hover{color:var(--ink)}
@media(max-width:760px){.foot{padding:0 16px 20px}.row{flex-direction:column;gap:4px}}
```

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

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: colour-block-card (seen on Framework, Hinge Health, 360Rides)

*Feeling: bright and sure of itself.*

Flat fills with no border or shadow. Each card owns one colour, and text is set in a dark tint of that card's own colour rather than black, which is the detail that makes it look designed. Use it where the brand is colour-led, on a neutral or black ground, three in a row at most. Framework runs whole chapters this way with panels at about 12px radius, one colour per product.

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

### Page rhythm: hanging-outdent (seen on Elyx)

**Feel.** A well-set essay. Literate and calm.
**Use when** a page is long-form argument in sections. **Avoid** with dense product content.
**Recipe.** Headings at 64 to 80px, weight 400, at x=158. All body at x=298, running about 985px wide. A 140px hanging outdent, repeated down the page with about 250px plain gaps. It is the only grid gesture, so nothing else should compete.

### Load: colour-plate-then-media (seen on ECI, Prägen Hätlen, Scale AI)

*Feeling: designed before it has even loaded.*

A flat plate in the footage's own colour holds the hero, with type already on it. ECI's plate is a deep green exactly the size of the video, and at 1.9s it still reads as a finished poster. The footage arrives near 3s and nothing moves. The analyst's estimate of 1.5s was optimistic. That is the point of the pattern: it does not matter when the video lands. Sample the plate from the first frame of the media, because a mismatched plate flashes. Use it for any full-bleed film or photo. For repeat variants, a blurred thumbnail of the first frame works as the plate.

```html
<div class="stage" style="background:var(--plate)"><!-- --plate is sampled from the media's first frame -->
  <video muted playsinline autoplay loop oncanplay="this.parentNode.classList.add('ready')"></video>
  <h1>Headline stays put</h1>
</div>
```
```css
.stage{position:relative;overflow:hidden}
.stage video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.2s var(--ease-soft)}
.stage.ready video{opacity:1}
.stage h1{position:relative;color:#fff}
```

Start the fade from the media's own ready event. A fixed delay flashes on a fast connection and arrives late on a slow one.

### Scroll: layers-cross (seen on International Magic, Wispr Flow, Driftime Impact Report 2022)

*Feeling: a real stack of paper.*

One layer passes over another, and the overlap links two sections with no fade. On Wispr Flow a large heading holds still while a 400px video card scrolls across it. On International Magic a 580px clip rises over a pinned frame, lifted by one wide shadow near `0 24px 60px` at 20 percent. Use it to connect a statement and a demo. If light images pass under white type, add a scrim or blend mode, since Hibachi Guru's white heading vanishes over bright photos.

### Hover: opacity-dim (seen on Polar, AuthKit, Levels)

*Feeling: the control recedes.*

The control gets quieter. Polar drops its white CTA to 0.85 in 0.1s, Nuxt takes green to 75 percent alpha, and AuthKit takes rows to 0.7. One rule works on any colour, so it suits a page with many brand fills. It reads as restraint on dark and weakly on light. Avoid a low-contrast ground, because a dimmed button can drop below readable contrast.

### Phone menu: docs-tree-drawer (seen on Railway Docs, Material 3, React)

*Feeling: the same map you had on desktop.*

Docs readers are in the middle of something. Keep the tree. Shopify Polaris slides in its sidebar from the left with no changes. React opens an inline panel with tab row and uppercase labels. Railway puts search first, then the tree. Use it for docs, and open it scrolled to the current page, or the reader loses their place.

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

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.