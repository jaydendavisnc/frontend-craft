# Your direction (seed 1009)

Reads as **ai**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Exa, a gold ai page)

1. Navigation: `nav.top-bar/ruled-cell-bar`
2. Hero: `hero.input-first/search-as-navigation`
3. Logo wall: `section.logo-wall/compliance-seals`
4. Data viz: `product.data-viz/hairline-radial-map`
5. Feature tabs: `section.feature-tabs/segmented-control`
6. Feature grid: `section.feature-grid/card-rail`
7. Testimonial: `section.testimonial/quiet-interlude-quote`
8. Full bleed break: `layout.full-bleed-break/dark-interlude-room`
9. Stats: `section.stats/ruled-stat-cells`
10. Case study: `section.case-study/full-bleed-project`
11. Closing section: `section.cta-band/download-close`
12. Footer: `section.footer/brand-column-with-proof`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Hedvig Letters Serif** with **Hedvig Letters Sans**. Sister faces with the same swelling stroke ends: enough contrast to structure a page, none to argue.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hedvig Letters Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&display=swap https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&display=swap

## Palette

From Devin Desktop (codeium.com redirect): bg #f8f8f8, surface #ffffff, text #111111, muted #6d6d6d, accent #2f6fed. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `one-brand-object-moves`, **Scroll** `pinned-step-swap`, **Hover** `card-state-change`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Exa** (ai, gold) https://exa.ai
- Doing: A search API presented with the gravity of a research institute: warm serif headlines, hard-edged panels, and data in cobalt.
- Why it feels made: The serif is unexpected for AI infrastructure and every other element is squared off and technical, so the contrast feels authored. Cobalt appears only on data and the final footer, which makes both hit hard.
- If imitated badly: The hard-cornered grid and stipple only work with real data behind them; with placeholder content they look like a bank template.

**Devin Desktop (codeium.com redirect)** (ai, gold) https://www.codeium.com
- Doing: A desktop agent app sold by its own interface: rebuilt UI fragments on painterly image plates, held inside a ruled page frame with quiet two-tone type.
- Why it feels made: Every screenshot is a legible HTML rebuild sitting on a soft photographic plate, so the page feels like the product. Rails, hairlines and one regular-weight headline voice make a strict, calm ledger.
- If imitated badly: The calm depends on real, specific UI content; with lorem rows or a generic gradient plate it becomes default SaaS.

**Aniket** (portfolio, gold) https://unfunnyket.com/
- Doing: A personal page that is almost pure typography on four hairline rails, with one WebGL ribbon as its only flourish.
- Why it feels made: Everything hangs on rails only 7 percent black and sizes never exceed 19px, so the spacing and the single iridescent ribbon read as confident editing.
- If imitated badly: At this size any sloppy spacing is exposed, and without the ribbon and real writing the page collapses into a plain text resume.

## System choices

- Headline: `type.display-headline/under-scaled-title`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/lit-colour-button`
- Surfaces: `surface.panel/tonal-feature-panel`
- Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/pixel-grid-icons`
- Page rhythm: `layout.grid-system/construction-lines`
- Load: `motion.load-sequence/one-brand-object-moves`
- Scroll: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Hover: `motion.hover-state/card-state-change`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Showpiece: `section.feature-sticky-scroll/pinned-index-scrolling-column`
- Showpiece: `motion.product-demo-loop/scripted-cursor-walkthrough`
- Atmosphere: `atmosphere.gradient-field/sawtooth-slats-and-blinds`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: ruled-cell-bar (seen on New Exhibitions, Better Auth, Telkom-OT)

*Feeling: a table or a ledger.*

The nav is built from cells with 1px rules between them. New Exhibitions gives the logo a 250px cell, then five equal 238px cells under a 34px utility strip, about 112px in all. Better Auth runs document tabs in 150px cells with a solid black end cap for sign in. Telkom numbers its cells in mono. Use it for archives, institutions and technical brands with a grid already in the page. Avoid it if the page has no matching grid, because the rules then point at nothing.

Run the verticals the full height of the bar, and let them continue into the page's own rules if you can. Radius 0 to 4.

### Hero: search-as-navigation (seen on Herzog & de Meuron, Concertgebouw, GitHub Docs)

- **Feels:** A useful tool, not a brochure.
- **Use when:** Docs, libraries, archives, venues: sites people visit to find one thing.
- **Not when:** Visitors do not yet know what to look for.
- **Recipe:** Search or one question is the hero. GitHub Docs runs an 85px band across the 1312px frame with a 24px placeholder and a `/` key chip, with no magnifier. Herzog & de Meuron opens on two rows of 40px tag pills, a mono search line, then a 1300px image. Concertgebouw uses two white cards, one to search and one to choose for you. DixonBaxi draws the field as a single 1px underline.

### Logo wall: compliance-seals (seen on Customer.io, Tana, Wispr Flow)

*Feeling: the serious part, handled.*

Trust as plain fact, which buyers in regulated fields look for first. Redraw everything as one family, because supplied badges are a jumble of clip art. Wispr Flow sets three 106px circles with a hairline green ring, a large faint engraved icon, and the standard's name over it. Customer.io runs five 103px ruled cells with 32px line icons directly above its footer. Tana states status in plain words inside 36px chips, including what is not finished. Only claim what you hold.

### Data viz: hairline-radial-map (seen on Claude, Stripe, Vercel AI)

*Everything that can grow from one centre.* Quality 5/5, 3 sites.

**Use:** Replacing a long capability list. **Not:** Short lists, which look sparse.

**Recipe:** Logo at centre with 1px spokes to 22px branches, each spraying finer spokes to 14px leaves. Labels fade from ink to 30% with depth and drift in on scroll. Or three concentric arcs, solid, dashed and dotted, carrying 24px logo chips.

### Feature tabs: segmented-control (seen on Apple Intelligence, LiveKit, Struck)

*6 sites, quality 4.* Native and tactile. Use for two to five short options, such as a device or audience switch.

Recipe: a pale track pill about 56px tall, with a solid active pill 6px inside it, 17px labels. LiveKit's form is a 404 by 46 rail with a 1px border and tracked mono caps. Canva pins an 80px capsule with coloured glyphs at the top while tiles scroll under it. Trigger.dev cuts its last tab at the viewport edge to hint at more.

Seen on Apple Intelligence, LiveKit, Canva, Trigger.dev, Weekstack, Struck.

### Feature grid: card-rail (seen on Apple Intelligence, Asana, CleanShot X)

*6 sites, quality 4.* Generous: there is more than fits. Use for eight or more parallel items such as agents, templates or stories. Skip it when every item must be read, because most people will not scroll sideways.

Recipe: cards of 304 to 400px at a 20 to 22px gap, running past the right edge so the last is cut by the viewport. That cut is the scroll cue. 36 to 40px round controls bottom or top right, the disabled one at 50%. Better Stack gives each product its own rail.

Seen on Asana, Apple, CleanShot, Monzo, Better Stack. See `references/motion/scroll.md`, recipe 2, for a pinned form.

### Testimonial: quiet-interlude-quote (seen on Cursor Blog, Canary, Dub Pricing)

*Feeling: a voice in the room between two rooms.*

A short quote between feature blocks, with no card. It lowers the temperature of a page and gives a reader somewhere to breathe. Use it to break up long feature runs. Avoid it as your main proof, because it is designed to be secondary.

Centre 20 to 28px text on a 580 to 820px measure, then a 32 to 48px avatar, 14px name and role, and an optional customer logo after a 1px divider. Keep it under your headings in visual weight, as Tally does by setting it in mid grey. Emphasis comes from ink rather than size: Mercury sets the first sentence in full ink and the rest muted, Dub lifts one phrase to weight 500, and Canary underlines one phrase with a 3px accent rule. Choose one.

### Full bleed break: dark-interlude-room (seen on Exa, Copilot)

**Feel.** The lights go down, and the page gets serious.
**Use when** trust, privacy or security deserve their own moment on a light page. **Avoid** as a generic dark stripe for variety.
**Recipe.** One full-bleed deep section with two soft blurred colour glows at the edges. 48px heading, tinted lede, a 640px panel with 24px radius and a 1px tinted border, small caps group labels. Exa's version steps through white, warm off-white, ink and a saturated band, all full width with hard edges and a 1280px container, replacing every divider with a change of colour.

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

### Case study: full-bleed-project (seen on Greylock, Nicole Heim Studio, Stripe)

*Feeling: the work speaks.*

One image, edge to edge, with almost no text. Use it for studios, film and anything with strong visuals. Nicole Heim breaks its own 32px margins with a 740px photo, a white 15/500 name over a mono line at the bottom left, no scrim or button. Greylock runs a candid founder photo rail to rail, its bottom third fading into the page grey, with a logo tile, a statement and founders' names on the fade. Stripe sets a 1232 by 530 aerial film under a logo tile and one-line claim, with fact columns beneath. Fantasy wipes each project up under the last.

### Closing section: download-close (seen on Warp Pricing, Vercel AI SDK, Notion Calendar)

*Feeling: nothing left to sell.*

For installed software the close is the download. Warp lays out three OS columns with chips, a copyable command and architecture buttons. The Vercel AI SDK sets a docs pill next to a copyable install command. Inngest offers three quickstarts by language, type only. Fundrise and InkTree give desktop readers a QR route to the app, with store ratings beside it.

### Footer: brand-column-with-proof (seen on LiveKit, Neon Docs, Speakeasy)

*Feeling: a company that has done its homework.*

A left block of 300 to 430px carries the logo, a two-line description and real proof: compliance marks, a live status line, a theme switch. Three to five link columns sit to its right. Use it for developer tools and B2B software, where a security reviewer will scroll here. On LiveKit the compliance roundels are pinned to the base of the left block with `margin-top:auto`, so they line up with the bottom of the columns, and status runs in the base bar in small mono caps with a square dot. Neon Docs turns compliance into a column of its own, pairing each name with a grey status word. Only claim what is true. Fake SOC 2 badges are worse than none.

Other things that earn the left block: a quotation, as on Notion Calendar; a sign-off about where the thing is made, as on Bun; a plain statement of where data is hosted, as on Plausible, when that is a reason to buy.

```css
.foot{border-top:1px solid var(--line)}
.top{display:grid;grid-template-columns:minmax(0,1.3fr) repeat(3,minmax(0,1fr));max-width:1280px;margin:0 auto;padding:72px 0 56px}
.brand{display:flex;flex-direction:column;min-height:330px}
.brand i{width:22px;height:22px;background:var(--ink);border-radius:2px;margin-bottom:12px}
.brand p{font-size:14px;line-height:21px;color:var(--ink-2);max-width:21em}
.seals{margin-top:auto;display:flex;gap:10px}
.seals span{width:36px;height:36px;border-radius:50%;border:1px solid var(--line-strong);display:grid;place-items:center;font:500 8px/1 var(--font-mono);color:var(--ink-2)}
.col b{display:block;font:500 11px/16px var(--font-mono);letter-spacing:.09em;text-transform:uppercase;color:var(--ink-2);margin-bottom:22px}
.col a{display:block;font-size:15px;line-height:36px;color:var(--ink);transition:color .15s}
.col a:hover{color:var(--ink-2)}
.soc{display:flex;gap:14px;margin-bottom:12px}.soc i{width:16px;height:16px;border-radius:4px;background:var(--ink)}.col small{font-size:12px;color:var(--ink-3)}
.bar{border-top:1px solid var(--line)}
.bar div{max-width:1280px;margin:0 auto;height:56px;display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--ink-2)}
.bar em{font:500 11px/1 var(--font-mono);letter-spacing:.08em;color:var(--ok);font-style:normal}
.bar em::before{content:"";display:inline-block;width:6px;height:6px;background:currentColor;margin-right:8px;vertical-align:1px}
@media(max-width:760px){.top{grid-template-columns:1fr 1fr;padding:48px 16px 32px}.brand{grid-column:1/-1;min-height:0;gap:20px}.bar div{height:auto;padding:14px 16px;flex-direction:column;align-items:flex-start;gap:8px}}
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

### Primary button: lit-colour-button (seen on AuthKit, CleanShot X, Buildkite)

*Feeling: enamel, glass, a Mac app.*

A saturated fill lit from inside. CleanShot's is not a gradient at all: flat #0d44e8 with `inset 0 6px 14px` of a paler blue at 48 percent and a small tinted drop shadow, `0 2px 6px -1px`. Set 48px, radius 14, 15/550. Buildkite uses a true vertical gradient from about #8422ff to #4d06a7 with a 1px border in the middle tone. Better Stack uses a 1px lighter top edge. All three depend on tint: the shadow and glow belong to the fill's own hue, never grey.

Use it for native apps and consumer SaaS on gradient-light or dark pages. Keep it to one lit object per screen. On press, drop the shadow and travel 2px. My first version had a heavy drop shadow, and it read as a 2014 bootstrap theme. Halving the alpha fixed it.

```css
.b-glow{--lift:color-mix(in oklab,var(--accent) 60%,#fff);display:inline-flex;align-items:center;height:48px;padding:0 20px;border:0;border-radius:14px;white-space:nowrap;
  background:var(--accent);color:var(--on-accent,#fff);font:550 15px/1 var(--font-text);cursor:pointer;
  box-shadow:0 2px 6px -1px color-mix(in srgb,var(--accent) 30%,#000 30%),inset 0 6px 14px color-mix(in srgb,var(--lift) 48%,transparent);
  transition:background-color .15s ease,box-shadow .15s ease,translate .1s}
.b-glow:hover{background:color-mix(in oklab,var(--accent) 92%,#fff)}
.b-glow:active{translate:0 2px;box-shadow:inset 0 6px 14px color-mix(in srgb,var(--lift) 48%,transparent)}
.b-glow:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: tonal-feature-panel (seen on Apple Intelligence, Notion Calendar, Factory)

*Feeling: a clean room with one thing in it.*

The workhorse. One tone step, no border, no shadow. Either a single centred statement, as on Apple at 1260x622, radius 28, about 120px padding, or left copy with product UI running off an edge, as on Notion. Use it to host your most important feature. Inset it 24px from the viewport on wide layouts, or use container width.

```css
.panel{position:relative;overflow:hidden;max-width:1024px;height:640px;margin:0 auto;
  background:var(--surface);border-radius:12px;padding:32px 34px}
.panel h3{font:700 18px/1.3 var(--font-display);margin-bottom:6px}
.panel p{max-width:500px;font-size:16px;line-height:24px}
/* Product runs off the left and bottom edges; only its free corner is rounded. */
.shot{position:absolute;left:0;right:56px;top:210px;bottom:-60px;border-radius:0 28px 0 0;overflow:hidden}
@media(max-width:760px){.panel{height:560px;padding:24px}.shot{right:0;top:230px}}
```

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

### Icons: pixel-grid-icons (seen on Shopify Polaris)

*Feeling: playful and technical. A wink inside serious documentation.*

**Use:** Developer docs and neutral reference pages that need personality without a redesign. **Avoid:** Mixing with smooth icons in the same context.

Draw at 16 by 16 and display at exactly 3x, about 48px, with `image-rendering: pixelated` or `shape-rendering: crispEdges`. Use a dark one-pixel outline, two or three flat fills per icon, and stepped edges with no anti-aliasing. Keep it the only illustrative colour on the page.

### Page rhythm: construction-lines (seen on Aniket, Cognition, Prototype)

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.

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

### Hover: card-state-change (seen on 099, ECI, Jasper)

*Feeling: the card says something new.*

The card changes content rather than position. Marine Layer crossfades a second product photo over 0.4s, which may be the most useful hover in commerce. On Jasper a box fills pale peach, the icon tile inverts, the line underlines and the arrow nudges, with no lift. Stripe grows a poster about 12px and extends its chevron into an arrow. Acne Studios adds a typed suffix to a label. Use it wherever a card has more to tell. On touch, it needs a fallback, since hover never fires.

### Phone menu: accordion-sheet-pinned-cta (seen on Claude, Claude Pricing, Stripe)

*Feeling: everything in its place, and the next step under your thumb.*

The standard for products, and it earns that. A full-height sheet with rows, a disclosure on groups, plain rows for leaf pages, and actions pinned at the base. Claude sets five 18px rows on a 76px pitch with hairlines and thin plus marks, and rows fade in top-down. Stripe sets 18/600 on 52px with dotted rules, accent chevrons, and a small bordered card of help links. Cal.com drops the hairlines, and pins a tinted tray with three stacked buttons. Use it for any product with grouped pages. Avoid it with under four rows, because a sheet of accordions then has nothing to fold.

Use a plus for expanding in place and a chevron pointing right for a drill-down, and do not mix the two. Animate height through `grid-template-rows` from `0fr` to `1fr`, which needs no measuring. Rotate the plus 45 degrees.

```css
.sheet{position:fixed;inset:72px 0 0;z-index:50;display:flex;flex-direction:column;padding:12px 24px calc(16px + env(safe-area-inset-bottom));
  background:var(--bg);overflow:auto;visibility:hidden;opacity:0;transition:opacity .16s ease-out,visibility .16s}
.open .sheet{visibility:visible;opacity:1}
.row{border-bottom:1px solid var(--line);opacity:0;translate:0 6px}
.open .row{animation:rise .32s cubic-bezier(.22,1,.36,1) forwards;animation-delay:calc(var(--i)*45ms + 40ms)}
@keyframes rise{to{opacity:1;translate:0 0}}
.row>button,.row>a{width:100%;height:76px;display:flex;align-items:center;justify-content:space-between;
  font-size:18px;letter-spacing:-.005em;text-align:left;color:color-mix(in srgb,var(--ink) 86%,var(--bg))}
.plus{position:relative;width:16px;height:16px;color:var(--ink-2);transition:transform .22s ease}
.plus::before,.plus::after{content:"";position:absolute;left:0;right:0;top:7.5px;height:1px;background:currentColor}
.plus::after{rotate:90deg}
[aria-expanded=true] .plus{transform:rotate(45deg)}
.sub{display:grid;grid-template-rows:0fr;transition:grid-template-rows .24s cubic-bezier(.4,0,.2,1)}
[aria-expanded=true]+.sub{grid-template-rows:1fr}
.sub>div{overflow:hidden}
.sub a{display:block;padding:7px 0;font-size:16px;color:var(--ink-2)}
.foot{margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:16px}
.foot a{height:44px;display:grid;place-items:center;border-radius:8px;font-size:16px;font-weight:500}
.foot .o{box-shadow:inset 0 0 0 1px var(--line-strong)}.foot .s{background:var(--ink);color:var(--bg)}
@media(prefers-reduced-motion:reduce){.open .row{animation:none;opacity:1;translate:0 0}}
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

### Atmosphere: sawtooth-slats-and-blinds (seen on AuthKit, Attio, Mixpanel)

*Feeling: fluted glass and venetian blinds. Light with a physical structure.*

**Use it for:** Pricing tiles, hero backdrops and CTA cards on precise pages. **Avoid:** Even widths and even strengths. Regular slats read as a bar chart or a barcode.

Repeating ramps that end in a hard cut: 130 to 420px vertical slats, or 10px blinds, or 8px barcode strokes. Amplitude 12 to 25 levels, faded at both ends by a mask. The ramp gives light, the cut gives material.

Measured: blinds at a 10px period, half on and half off, amplitude about 24 levels. Barcode at 8px with 2px strokes and about 12 levels. Vertical slats about 130px on a pale hero, irregular 200 to 450px on a black card with heavy grain.

This code needs the `--grain` token from [Derived tokens](#derived-tokens). Any 256px tile of monochrome noise works in its place.

```html
<style>
.slats-card{position:relative;height:350px;border-radius:8px;background:#080808;overflow:hidden;isolation:isolate;color:#fff;margin:80px 16px}
/* every slat is a ramp that ends in a hard cut: a sawtooth. uneven widths and strengths, then one soft mask over the lot */
.slats{position:absolute;inset:0;display:flex;
  -webkit-mask:radial-gradient(120% 95% at 42% 52%,#000 45%,rgba(0,0,0,.25) 78%,transparent);mask:radial-gradient(120% 95% at 42% 52%,#000 45%,rgba(0,0,0,.25) 78%,transparent)}
.slats i{height:100%;background:linear-gradient(90deg,transparent,var(--accent))}
.slats-card::after{content:"";position:absolute;inset:0;background:var(--grain);background-size:256px;mix-blend-mode:hard-light;opacity:.16}
.slats-card p{position:absolute;z-index:2;left:32px;top:120px;margin:0}
</style>
<div class="slats-card"><div class="slats"><i style="width:14%;opacity:.05"></i><i style="width:17%;opacity:.8"></i><i style="width:13%;opacity:.12"></i><i style="width:23%;opacity:.75"></i><i style="width:12%;opacity:.5"></i><i style="width:21%;opacity:.95"></i></div><p>For forwarders that need a managed desk.</p></div>
```

```html
<style>
.dusk{position:relative;height:900px;overflow:hidden;
  --warm:oklch(from var(--accent) .9 .035 calc(h + 130));--cool:oklch(from var(--accent) .76 .065 h);
  background:linear-gradient(180deg,var(--bg) 0 42%,color-mix(in oklab,var(--warm) 30%,var(--bg)) 60%,var(--warm) 72%,var(--cool) 83%,color-mix(in oklab,var(--cool) 80%,var(--bg)) 89%,color-mix(in oklab,var(--cool) 30%,var(--bg)) 94%,var(--bg) 100%)}
/* the blinds: 10px period, half on, half off. the base colour above is the DARK stripe, because the bars lighten it */
.dusk::after{content:"";position:absolute;inset:52% 0 6%;background:repeating-linear-gradient(180deg,rgba(255,255,255,.3) 0 5px,transparent 5px 10px);
  -webkit-mask:linear-gradient(180deg,transparent,#000 40%,#000 75%,transparent);mask:linear-gradient(180deg,transparent,#000 40%,#000 75%,transparent)}
.dusk h1{text-align:center;padding-top:160px;margin:0}
</style>
<div class="dusk"><h1>Sign-in that never holds a shipment</h1></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.