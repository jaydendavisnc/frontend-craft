# Your direction (seed 1008)

Reads as **devtool**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Buildkite, a gold devtool page)

1. Navigation: `nav.top-bar/right-grouped-bar`
2. Hero: `hero.centered-with-product/phone-rising-from-fold`
3. Feature tabs: `section.feature-tabs/large-card-tabs`
4. Ui fragment: `product.ui-fragment/vertical-step-timeline`
5. Logo wall: `section.logo-wall/logos-inside-another-block`
6. Animated demo: `product.animated-demo/flow-with-travelling-token`
7. Integrations: `section.integrations/hub-and-spoke-map`
8. Testimonial: `section.testimonial/display-pull-quote`
9. App window: `product.app-window/side-bleed-capture`
10. Closing section: `section.cta-band/photo-sign-off`
11. Footer: `section.footer/brand-column-with-proof`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Libre Caslon Display** with **Switzer**. Caslon at scale over a straight neutral gives a financial product old-money confidence without any costume.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Switzer 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap https://api.fontshare.com/v2/css?f[]=switzer@1,2&display=swap

## Palette

From Wispr Flow: bg #ffffeb, surface #e4e4d0, text #1a1a1a, muted #6f6f64, accent #034f46. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `sticky-card-deck`, **Hover** `tone-step`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Buildkite** (devtool, gold) https://buildkite.com
- Doing: CI presented as an engineering document: a ruled matrix of small live diagrams beneath a purple-night customer-proof hero.
- Why it feels made: Each grid cell holds a bespoke miniature UI built for that one claim rather than a screenshot. Violet, kite green and the mono eyebrow come straight from the product.
- If imitated badly: The hero's logos, phone and glass panels turn to noise without strict z-order and one customer story at a time.

**Wispr Flow** (saas, gold) https://wisprflow.ai
- Doing: A voice app that sells speech as writing: literary Garamond, cream paper and motion-blurred footage instead of AI gradients and app screenshots.
- Why it feels made: Roman-to-italic headlines, rounded colour sheets and one lilac action run through every section. Each section invents a demo that explains the feature, such as panel width standing for typing speed.
- If imitated badly: The 2px ink button and skewed colour testimonial cards tip into novelty without this much restraint around them; the consent panel in these frames is a capture artefact, not a design to copy.

**Loops** (saas, gold) https://www.loops.so
- Doing: An email SaaS page in warm paper tones, where four retro stripes run around the whole page like a record sleeve and real product demos do the selling.
- Why it feels made: A single ownable device, the stripe rail, starts at the hero, bends around the product and wraps the footer. Everything inside stays quiet: one card shell, one heading pattern, one 'Learn' row, repeated exactly.
- If imitated badly: The stripes only work if they travel with real curves; pasted as a static border they turn into a 70s pastiche.

## System choices

- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/eyebrow-title-lede-stack`
- Primary button: `button.primary/neutral-chip`
- Surfaces: `surface.card/shell-and-well-card`
- Surface ladder: `atmosphere.light-surface-ladder/cream-section-bands`
- Logo: `media.logo-mark/wordmark-with-device`
- Icons: `media.icon-set/pixel-grid-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Hover: `motion.hover-state/tone-step`
- Phone menu: `nav.mobile-menu/docs-tree-drawer`
- Showpiece: `motion.marquee/ghost-text-rows`
- Showpiece: `motion.product-demo-loop/scripted-cursor-walkthrough`
- Atmosphere: `atmosphere.texture/paper-colour-fills`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: right-grouped-bar (seen on Prototype, Linear, Linear Changelog)

*Feeling: calm, with confidence to spare.*

The logo stands alone at the left and everything else gathers at the right, next to the action. The empty middle says the brand does not need to fill the space. It is the natural choice for dark product pages, for AI companies, and for anything with a strong hero that should own the top left. Avoid it with more than about seven links, because the right side starts to crowd toward the logo.

Set 64 to 88px tall, 13 to 16px links in muted ink, 24 to 32px apart, then a 1x14px divider before Log in, and one 32 to 40px pill. Linear measures 72px, 13px at 400 in #8a8f98, a 1px line at 8 percent white, 20px blur, and a 32px pill at #e5e5e6 in 13/510. Its gutter of 80 is the hero's left edge. Claude's version runs warmer and larger, at 84px with 15px links and 36px buttons at radius 8.

```css
:root{--rail:80px}
.nav{position:fixed;inset:0 0 auto;z-index:50;height:72px;background:color-mix(in srgb,var(--bg) 72%,transparent);
  -webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:inset 0 -1px 0 var(--line)}
.nav-in{height:100%;padding:0 var(--rail);display:flex;align-items:center}
.links{display:flex;margin-left:auto}
.links a{height:32px;display:flex;align-items:center;padding:0 12px;border-radius:9999px;font-size:13.5px;color:var(--ink-2);
  transition:color .1s,background .1s}
.links a:hover{color:var(--ink);background:var(--hover)}
.rule{width:1px;height:14px;margin:0 16px;background:var(--line-strong)}
.login{font-size:13.5px;color:var(--ink-2);margin-right:20px}
.pill{display:inline-flex;align-items:center;height:32px;padding:0 12px;border-radius:9999px;font-size:13px;font-weight:510;
  background:color-mix(in srgb,var(--ink) 90%,var(--bg));color:var(--bg);transition:background .16s}
.pill:hover{background:var(--ink)}
```

### Hero: phone-rising-from-fold (seen on Affirm, Copilot, Weekstack)

- **Feels:** Consumer, personal, lit like a keynote.
- **Use when:** The product lives on a phone.
- **Not when:** You would need a bright white screen on a dark page, since it steals the first read from the headline.
- **Recipe:** Short stack, 84px light headline or 64px with three proof chips, 44 to 52px pill. Then one 330 to 380px phone with only its top 170 to 320px visible. Glow as a horizon: a very wide flat ellipse, centred 430px below the fold, not a halo around the phone. Weekstack adds notification chips either side, with the rear ones at 40% for depth. Dim the screen.

```css
.hero{position:relative;height:836px;overflow:hidden;isolation:isolate;
  display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:60px}
.hero>*{flex:none}
/* a horizon, not a halo: 2100px wide, centred well below the fold */
.hero::before{content:"";position:absolute;left:50%;bottom:-430px;width:2100px;height:640px;
  transform:translateX(-50%);border-radius:50%;z-index:-1;opacity:.75;
  background:radial-gradient(closest-side,
    color-mix(in oklab,var(--accent) 70%,#fff),
    color-mix(in oklab,var(--accent) 45%,var(--bg)) 42%,transparent)}
h1{font:400 84px/1 var(--font-display);letter-spacing:-.04em}
.phone{width:330px;height:680px;margin-top:92px;padding:9px;border-radius:52px;background:#050507;
  box-shadow:0 0 0 1px rgb(255 255 255/.16),
    0 -24px 90px -16px color-mix(in oklab,var(--accent) 55%,transparent)}
.screen{height:100%;border-radius:44px;overflow:hidden;padding:44px 18px 0;text-align:left;
  background:linear-gradient(color-mix(in oklab,var(--surface) 88%,#fff),var(--surface) 58%)}
```

Our first attempt showed most of a bright white phone directly under the CTA with an orange halo around it. It looked like a template mockup. Three changes made it real: push it down until only the top third shows, darken the screen, and turn the halo into a horizon.

### Feature tabs: large-card-tabs (seen on Resend, Zapier, Chromatic)

*3 sites, quality 4.* Tabs that also explain. Use when a label alone will not do and a one-line description helps.

Recipe: three tabs about 346 to 389px wide and 90 to 113px tall, radius 8 to 16, 1px border, a 40px icon, 14 to 16px label, one description line. Resend's active tab gains a thin accent glow along its bottom edge, and sits 32px above a full dashboard.

Seen on Resend, Chromatic, Zapier.

### Ui fragment: vertical-step-timeline (seen on Ramp, GoCardless, Weekstack)

*A feature explained with no sentence.* Quality 5/5, 3 sites.

**Use:** Rules, retries, approvals, automations. **Not:** More than about five steps.

**Recipe:** Vertical list on a 1px connector with 32px icon tiles, then either token chips forming a sentence at 16-18px, or Failed, Retry and Paid steps with dates at the right. One step boxed in 1px accent, radius 8. Ramp adds an oversized black cursor with a role tag mid-action, which turns a static rule into someone working.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Animated demo: flow-with-travelling-token (seen on Stripe Connect, Revena, Zapier)

*Watch the money, or the message, travel.* Quality 5/5, 5 sites.

**Use:** Payments, routing, event-driven systems. **Not:** Static relationships.

**Recipe:** CSS phone or nodes with concentric 1px rings, labelled pills attached by 1px lines with end dots. A small amount chip travels along the line, then rows update in sequence. Dashed variants work on saturated plates, in page type.

### Integrations: hub-and-spoke-map (seen on Cal.com, Vite, Function Health)

*Feeling: everything passes through here.*

Your product at the centre, tools around it, on real lines. Use it when your product is literally the connection. Cal.com sets a 96px dark tile with its name in a tinted panel at radius 28, 48px white icon tiles stacked five left and six right at a 72px pitch, and 1.5px grey beziers that land on the hub at slightly different heights rather than at one point. A hairline and three named one-liners below turn the picture into information. Vite uses an isometric slab with bracketed trays. ClickHouse uses labelled elbow connectors. Function reduces it to a single row with dotted links. On phones, scale the map to about half, and keep the one-liners full size, because the list carries the meaning there.

```css
.p{background:var(--surface);border-radius:28px;padding:40px 40px 36px}
.map{position:relative;width:960px;max-width:100%;height:480px;margin-inline:auto}
.w{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--ink-3);stroke-opacity:.5;stroke-width:1.5}
/* left path: M200,y C340,y 300,240 432,240+(i-2)*5, so lines end 5px apart */
.ic{position:absolute;width:48px;height:48px;border-radius:12px;background:var(--bg);display:grid;place-items:center;
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 5%,transparent),0 2px 6px color-mix(in srgb,var(--ink) 6%,transparent)}
.hub{position:absolute;left:50%;top:50%;width:96px;height:96px;margin:-48px;border-radius:24px;background:var(--ink);color:var(--bg);display:grid;place-items:center}
.ls{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;border-top:1px solid var(--line);margin-top:32px;padding-top:32px}
@media(max-width:1060px){.map{width:960px;max-width:none;left:50%;margin-left:-480px;transform-origin:50% 0;transform:scale(.72);margin-bottom:-134px}}
@media(max-width:700px){.p{padding:16px;overflow:hidden}.map{transform:scale(.52);margin-bottom:-230px}.ls{grid-template-columns:1fr;gap:20px}}
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

### App window: side-bleed-capture (seen on Buildkite, Inngest, Paddle)

*Evidence beside an argument, not a stage.* Quality 4/5, 4 sites.

**Use:** Feature rows that alternate copy and product down a long page. **Not:** The hero. It has too little presence there.

**Recipe:** Product 750-900px wide, flush to the right gutter or bleeding off the viewport. Small 11-13px UI left unretouched, 1px border, radius 10. Copy large on the left. No shadow on dark pages; light chrome bar optional on light ones. Inngest dims inactive captures with their row. Storybook adds a slate browser bar with a localhost pill, a small true detail that sells it to developers.

### Closing section: photo-sign-off (seen on Wispr Flow, Comet, Nuro)

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

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

### Headline: quiet-serif-over-sans-ui (seen on Public, Exa, Linear Method)

Written rather than marketed. Warmth on a technical subject. Seen on 23 sites.

**Use it for:** AI, finance, docs and any technical product that wants to sound human. The serif is the only warm thing on the page, so it carries all of the voice.

**Avoid it for:** Pages where the serif also appears in nav, buttons or body, which turns voice into costume. Bold cuts also lose the effect.

**Recipe:** One serif used only for H1 and H2, weight 300-500, 44-80px (up to 128px on dark manifesto pages), line-height 1.0-1.1, tracking 0 to -0.03em, single ink, never bold. All UI, labels and body stay sans or mono, so the serif alone carries the voice.

**Why it works:** The contrast is the point: a serif headline over grotesque interface looks like an editor wrote it and an engineer built it. The largest bucket of gold serif sites use it this way, with 11 gold sites.

```css
h1 { font: 400 64px/1.1 var(--font-display); letter-spacing: -.02em; }
p  { margin: 20px auto 0; font: 400 18px/1.5 var(--font-text); max-width: 34em; color: var(--ink-2); }
```

<a id="roman-italic-turn"></a>

### Section headings: eyebrow-title-lede-stack (seen on Apple Intelligence, Stripe Atlas, AuthKit)

Orderly and document-like. Safe when applied exactly. Seen on 13 sites.

**Use it for:** Long product pages and docs where consistency matters more than voice.

**Avoid it for:** Used loosely it is the template stack. Gaps must be identical on every section.

**Recipe:** Left or centred stack repeated identically on every section: label at 12-20px, H2 at 36-52px weight 500-600, lede at 18-21px line-height 1.4-1.55 in the second ink, capped at 640-840px. Gaps 8-24px. Keep the three steps in one family, or two at most.

**Why it works:** Stripe-style pages make the eyebrow the same size as body copy, so it reads as the first line of the heading and the whole stack looks like one document.

```css
.eb { font: 500 18px/1.3 var(--font-text); color: var(--accent); }
h2  { font: 500 38px/1.26 var(--font-display); letter-spacing: -.005em; margin-top: 24px; }
p   { font: 400 18px/28px var(--font-text); margin-top: 24px; max-width: 680px; color: var(--ink-2); }
```

<a id="bare-statement"></a>

### Primary button: neutral-chip (seen on Tana, Attio, Exa)

*Feeling: a good tool, sure of itself.*

A near-black rectangle on light, or near-white on dark, with no colour at all. It works in any palette, it never fights an image, and it reads as product. Use it for SaaS, developer tools, docs and app UI. Avoid it when a consumer brand needs warmth, where a pill or a colour does more.

Set 32 to 40px, radius 6 to 10, 14/500, 12 to 16px padding, no shadow. Attio adds a 1px border one step lighter than the fill, about L\* 37 on L\* 13, which reads as a faint rim. Analysts recorded that rim as darker, and the measured value corrected it. Vercel uses a flat #171717 at radius 6 and nothing else. The chip shares its radius with the page's inputs and small cards.

```css
.b-chip{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid color-mix(in oklab,var(--ink) 76%,var(--bg));
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),scale .1s cubic-bezier(.4,0,.2,1)}
.b-chip:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-chip:active{scale:.98}
.b-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: shell-and-well-card (seen on Loops, Lindy, Material 3)

*Feeling: a tray holding the proof.*

Two nested layers. An outer card holds the claim, and an inset tinted well holds the evidence: seals, a tick list, a live component. Use it when a card needs to carry something more complex than text without a second border weight. Outer radius 16 to 24 with a hairline, well inset 8px at outer minus 8. Material's variant inverts the idea, with a stage on top in its own colour, its own bottom radius and the caption beneath. Loops repeats one shell for every feature and only swaps the body, which is the strongest version: the shell becomes the page's single system.

### Surface ladder: cream-section-bands (seen on reMarkable, Function Health, Brilliant)

*Feeling: soft and domestic. Sections shift the way light shifts across a room.*

**Use it for:** Health, wellness, consumer devices, ecommerce, food. **Avoid:** Developer tools. Cream reads as lifestyle.

Full-bleed bands step #fcfbf8, #f9f6f1, #f3efe7, about 1.5 to 2.5 L* apart, oklch C under .012, no rules, no shadows, 100 to 140px padding. The colour change is the divider. End on a warm near-black footer.

Stronger creams measured on cream-led brands: #fffcf5, #f7f3e9, #f0e9db and #fef9ef, #f5eee1. Only a brand that means cream should go that yellow.

```html
<style>
/* each band is one step. the colour change is the divider, so there is no rule and no shadow */
:root{--s1:#fcfbf8;--s2:#f9f6f1;--s3:#f3efe7;--ink:#252525;--ink-2:rgba(37,37,37,.72)}
.band{padding:120px 40px;color:var(--ink)}
.band p{color:var(--ink-2)}
</style>
<section class="band" style="background:var(--s1)"><h2>A quieter queue</h2><p>Step one.</p></section>
<section class="band" style="background:var(--s2)"><h2>Three ways to plan</h2><p>Step two, about 1.5 L* down.</p></section>
<section class="band" style="background:var(--s3)"><h2>It holds the thread</h2><p>Step three, about 2.5 L* further.</p></section>
```

### Logo: wordmark-with-device (seen on ECI, Seed, Telkom-OT)

*Feeling: modest and smart. Type first, one small idea.*

**Use:** The safest strong choice when inventing a brand. Technical and scientific brands, and any site with a good type system. **Avoid:** When the device is a generic flourish, such as a dot on any word.

Set the name in the dealt type at nav size, then add one device with a reason. A solid dot of .42em that repeats large on every package. Short bars of .075em on selected letters. A version number at 13px in a 1px chip with a 4px radius, on an open-source project. Letters redrawn as 1px construction lines at footer scale. Tight tracking of -.02 to -.03em on the word. The device must survive at nav size and pay off at large size.

**In the lab:** Held at every size down to 14px type, with no special master. It is the most forgiving variant here.

### Icons: pixel-grid-icons (seen on Shopify Polaris)

*Feeling: playful and technical. A wink inside serious documentation.*

**Use:** Developer docs and neutral reference pages that need personality without a redesign. **Avoid:** Mixing with smooth icons in the same context.

Draw at 16 by 16 and display at exactly 3x, about 48px, with `image-rendering: pixelated` or `shape-rendering: crispEdges`. Use a dark one-pixel outline, two or three flat fills per icon, and stepped edges with no anti-aliasing. Keep it the only illustrative colour on the page.

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

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: sticky-card-deck (seen on Affirm, Theatre Memory, Per Appelgren)

*Feeling: cards dealt onto a table.*

Each card pins under a heading, and the next slides over it. On Affirm each one sits about 50px lower than the last and widens (1138, 1260, 1320), which gives depth with no shadow, and the top edge of each covered card stays visible with its tag. Use it for three to five parallel ideas: plans, personas, industries. Do not use it for a sequence with an order, which belongs in a step swap. Make's narrower card peeks below the active one, a variation. Plain sticky, no scroll listeners.

```css
.deck{position:relative;padding-bottom:30vh}
.head{position:sticky;top:0;z-index:9;height:128px;background:var(--bg);display:grid;place-items:center}
.card{position:sticky;top:calc(128px + var(--i)*50px);
  width:min(calc(1040px + var(--i)*90px),calc(100% - 32px));margin:0 auto 12vh;height:560px;padding:40px;
  border:1px solid var(--line);border-radius:20px;
  background:color-mix(in srgb,var(--surface) 84%,transparent);backdrop-filter:blur(22px)}
```

The analyst read a blur on the covered card's copy. The blur belongs to the incoming card: a translucent fill with `backdrop-filter`, so covered text softens exactly where it passes under, with no script at all. My first build toggled a blur class on scroll, and it was both more code and less convincing. Any ancestor with `overflow:hidden` silently kills sticky, so check that first if a card will not pin. On a phone, cut the offset to about 24px.

### Hover: tone-step (seen on Apple Intelligence, Vercel Pricing, Vercel AI SDK)

*Feeling: a system, not an effect.*

The most common professional hover, 53 sites here. Every control moves one step on its own scale with no movement at all. Vercel takes near-black to about `rgb(56,56,56)` and white to `rgb(242,242,242)`, all in 0.15s on `.4,0,.2,1`. Exa, Neon and Grafana are the same idea on their own ramps. Apple shifts its blue by a hair and fades nav text over 0.32s. Use it for product, docs and any page with many controls. It is a safe default and nothing in it can go wrong, so it cannot carry personality alone. Pair it with one signature elsewhere.

Move the step in `oklab`, not sRGB, so tints do not go muddy. If the step is under about 5 L\*, the hover vanishes on a poor screen.

### Phone menu: docs-tree-drawer (seen on Railway Docs, Material 3, React)

*Feeling: the same map you had on desktop.*

Docs readers are in the middle of something. Keep the tree. Shopify Polaris slides in its sidebar from the left with no changes. React opens an inline panel with tab row and uppercase labels. Railway puts search first, then the tree. Use it for docs, and open it scrolled to the current page, or the reader loses their place.

### Showpiece: ghost-text-rows (seen on Function Health, Hims, Are.na)

*Feeling: scale as texture.*

The list runs behind something else, not meant to be read. Function Health drifts two rows of condition names behind a chart card, with a small PAUSE MOTION label under it. Hims runs eight faint rows behind a cutout portrait. Nx sends mono task names through two blurred bars, like a processor. Use it when the sheer length of the list is the point. Give the foreground card a solid background and a margin of page colour, so the text passes cleanly behind.

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

### Atmosphere: paper-colour-fills (seen on Acne Studios, Bauhaus Clock, Heart & Soil)

*Feeling: colour blocks read as card stock.*

**Use it for:** Local, craft and fashion brands, and product tiles. **Avoid:** A visible repeat. Use a large image or a seamless tile.

Colour blocks share a low-contrast mottled paper or leather-grain image, about 3% contrast, so fills read as card stock. Use on tiles or panels, alternating with full-bleed photography.

Heart & Soil runs cream, taupe, lavender and moss through one mottled paper image, so colour blocks read as card stock. Bauhaus Clock uses an embossed grain at about 3 percent contrast, like a dial face. Acne Studios keeps fibre paper to one panel, which alternates with full-bleed campaign photographs.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.