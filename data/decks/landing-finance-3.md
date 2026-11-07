# Your direction (seed 1015)

Reads as **finance**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Central, a silver saas page)

1. Navigation: `nav.floating-pill/centred-capsule`
2. Hero: `hero.type-only/centred-statement`
3. Testimonial: `section.testimonial/quote-beside-portrait`
4. Ui fragment: `product.ui-fragment/vertical-step-timeline`
5. Logo wall: `section.logo-wall/logos-inside-another-block`
6. Feature sticky scroll: `section.feature-sticky-scroll/stacked-sheets`
7. Feature alternating: `section.feature-alternating/anchored-copy-rows`
8. Feature grid: `section.feature-grid/ui-fragment-cards`
9. Blog index: `section.blog-index/designed-cover-system`
10. Closing section: `section.cta-band/download-close`
11. Footer: `section.footer/page-lifts-off-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Mozilla Headline** with **Epilogue**. Small ink traps give the headline a hacker-newspaper feel, and a snappy neutral keeps the body out of the way.
- Display: 64px, phone 38px, weight 600, tracking -0.02em, leading 1.0. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Epilogue 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Mozilla+Headline:wdth,wght@75..125,200..700&display=swap https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Warp Pricing: bg #FBFDFD, surface #FFFFFF, text #000102, muted #44494A, accent #EEF17C. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `window-opens-to-full`, **Hover** `accent-flip`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Central** (saas, silver) https://centralhq.com/
- Doing: A payroll product dressed in newspaper-condensed type and a single red, sold through founders' quotes and UI fragments.
- Why it feels made: Dense condensed caps headlines with Söhne give a strong voice; UI fragments show real product and quotes add proof.
- If imitated badly: Pure red #e50000 on black buttons and tiny corner radius feel harsh; the near-flat dark pages rely on type alone.

**Meta AI** (ai, gold) https://ai.meta.com
- Doing: A two-column page where a pinned left rail holds each section's title and CTA while large rounded media scroll past on the right, all in one blue.
- Why it feels made: Every section repeats one grid (rail at x=32, media column from x=384) with hairlines and a single accent, so video and photography can be loud while the interface stays quiet.
- If imitated badly: The pale-blue media ring turns into a dated glow border if thickened or applied to every card, and the pinned rail looks empty without strong media beside it.

**Roy Jad** (portfolio, gold) https://royjad.com/
- Doing: A near-white spatial canvas of project panes that pans sideways, labelled in tiny monospaced caps with an INFO/WORK toggle.
- Why it feels made: Almost no ink: pixel-font display, hairline-bordered 10-12px-radius panes with soft 3D tilt, a single orange accent in the pixel logo, and a segmented toggle as the sole nav.
- If imitated badly: Without real project screenshots of this quality the emptiness reads as unfinished.

## System choices

- Headline: `type.display-headline/crushed-tracking`
- Section headings: `type.section-heading/marked-phrase`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/shell-and-well-card`
- Surface ladder: `atmosphere.light-surface-ladder/tinted-tonal-surfaces`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.section-rhythm/space-only-gaps`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `motion.hover-state/accent-flip`
- Phone menu: `mobile.phone-nav/owned-menu-glyph`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-utility-header`
- Showpiece: `type.type-as-image/inline-objects-in-sentence`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: centred-capsule (seen on Wolff Olins Work, Loopcraft, Office Commun)

*Feeling: a small, friendly object in the middle of the page.*

A narrow pill at top centre holding logo, a few links and an action. It leaves the corners free, so full-bleed media reads edge to edge. Office Commun sets a 430x42 pill with a 1px border, a small mark, muted links and an inset grey Contact pill with an @ glyph. Weekstack adds a 1px divider after the logo. Hawl goes pure black at 600x48 on scroll. Loopcraft keeps the logo outside entirely, a 518x40 capsule of links only. Use it for agencies, small products and one-page sites with up to four links. Avoid it with long labels or many links, because capsules look wrong when they are crowded.

Set 40 to 58px tall, 420 to 680px wide, 12 to 24px from the top, 12 to 15px links, an inset 32 to 36px CTA. Most of the low scores in this family are this variant at 8 to 11px text. Keep links at 13px or more.

### Hero: centred-statement (seen on Linear Method, Wispr Flow, ECI)

- **Feels:** Editorial and serious, when the type is good.
- **Use when:** The headline is short, the voice is distinct, and something rises at the fold.
- **Not when:** You are about to add a gradient to one word to make it interesting.
- **Recipe:** An optional 11 to 14px label, a two-line 72 to 128px headline at 1.0 leading, a 13 to 20px sub, a CTA. Linear's method page sets 128 on near-black with a 13/20 paragraph about 340px wide and two faint arcs at the base. Wispr Flow runs 96/1 with a speech ribbon crossing the lower right corner, carrying real words. ECI floats four small claims at uneven positions around a 102px title. Instrument sets 64 on black with a white pill.

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

### Ui fragment: vertical-step-timeline (seen on Ramp, GoCardless, Weekstack)

*A feature explained with no sentence.* Quality 5/5, 3 sites.

**Use:** Rules, retries, approvals, automations. **Not:** More than about five steps.

**Recipe:** Vertical list on a 1px connector with 32px icon tiles, then either token chips forming a sentence at 16-18px, or Failed, Retry and Paid steps with dates at the right. One step boxed in 1px accent, radius 8. Ramp adds an oversized black cursor with a role tag mid-action, which turns a static rule into someone working.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Feature sticky scroll: stacked-sheets (seen on Forma24, Loopcraft, Paddle)

*6 sites, quality 4.* Weighty and physical, like cards dealt on a table. Use for three to six peers of equal weight. Skip it for long copy.

Recipe: sheets of about 1248 by 540 to 560px, radius 16, each sticking 14px lower than the last so the edges of earlier sheets peek. A heavy shadow, about `0 30px 40px` at 25 to 30% black, sells the overlap. Left 72px padding, a 48px title, 20/30 copy with underlined keywords, a white 52px button. UI bleeds off the right edge. Put a dark product rail inside the UI, since a white panel on a tinted sheet looks flat. The covered sheet can recede: `references/motion/scroll.md`, recipe 3, has the scrubbed form.

Seen on Paddle, Loopcraft, Forma24, North Hub Partners, LEDUP. Suits warm neutral, dark precision, light precision.

```css
.sheet { position: sticky; top: calc(88px + var(--i) * 14px); display: grid; grid-template-columns: 524px 1fr; min-height: 560px; margin-bottom: 40px; border-radius: 16px; background: var(--surface); box-shadow: 0 30px 40px rgba(0,0,0,.28); overflow: hidden; }
.copy { padding: 64px 0 64px 72px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.copy h3 { font: 400 48px/1.1 var(--font-display); letter-spacing: -.02em; }
.copy p { margin-top: 20px; font-size: 20px; line-height: 30px; }
.ui { position: relative; }
.a { position: absolute; left: 56px; top: 48px; width: 860px; height: 640px; background: var(--bg); border-radius: 8px 0 0 8px; box-shadow: 0 20px 50px -24px rgba(0,0,0,.4); }
@media (max-width: 1020px) { .sheet { grid-template-columns: 1fr; min-height: 0; top: calc(16px + var(--i) * 10px); } .copy { padding: 32px 24px; } .copy h3 { font-size: 34px; } .ui { height: 280px; overflow: hidden; } .a { left: 24px; top: 8px; } }
```

Keep sheets in block flow, with `style="--i:0"`, `--i:1` and so on. A grid or flex parent can trap a sticky child. Leave about 40vh of space after the last sheet so it can settle.

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

### Feature grid: ui-fragment-cards (seen on Public, Stripe, Comet)

*10 sites, quality 5.* Proof in every cell. Use for products with distinctive small moments of UI. Needs one bespoke fragment per item.

Recipe: a borderless tray in a tint 2 to 4% off the page, radius 12 to 16, copy on top and a fragment rising from the base and either cropped or faded into the tray. Vary the fragment and hold the frame. Brex runs five 246px trays with 24px/600 titles, each ending in different anchored UI. Public mixes one full-width tray with two half-width ones and centres the copy. Stripe's card is a 26px light title top left, with a 38px expand tile in the corner that turns accent on hover.

Seen on Public, Stripe, Brex, Copilot, Remote, Hugging Face, Revena. Suits light precision, gradient light, bold colour, for finance and SaaS.

### Blog index: designed-cover-system (seen on Baseten, Together AI, Trasti Ubezpieczenia. Simply fair!)

*Feeling: this team has an art director.*

Every post gets a cover from one system, so nobody needs stock. Baseten uses a dotted green field with a logo plate or a highlighted title. Together AI sets dark cards with lilac bars bridging each gutter, so a row reads as one pipeline. MotherDuck draws cartoons with the title lettered in. Trasti and White Label IQ use one line drawing with one accent. Stability AI makes a typographic poster per item. Pick one rule that takes a title and produces a cover, ideally in code, so it costs nothing per post. It is the cheapest way to look art directed, and it makes a feed feel like a publication.

### Closing section: download-close (seen on Warp Pricing, Vercel AI SDK, Notion Calendar)

*Feeling: nothing left to sell.*

For installed software the close is the download. Warp lays out three OS columns with chips, a copyable command and architecture buttons. The Vercel AI SDK sets a docs pill next to a copyable install command. Inngest offers three quickstarts by language, type only. Fundrise and InkTree give desktop readers a QR route to the app, with store ratings beside it.

### Footer: page-lifts-off-footer (seen on Ramp, Cal.com, Cal.com Pricing)

*Feeling: the page is a sheet of paper on a dark desk.*

The white page ends in rounded bottom corners over a dark footer that sits behind it. Nothing else changes, and yet the whole page becomes an object. Ramp uses about 24px, Cal.com about 40px. Loops runs the same idea through its stripe rail, so the rounded corner carries the stripes around it. Use it on light product pages, and pair it with any sitemap structure. It is one of the cheapest strong endings there is.

The dark has to be behind the sheet. Set it on `body`, give the sheet the page fill, and do not put a white wrapper between them.

```css
body{background:var(--ink)}
.sheet{position:relative;z-index:1;background:var(--bg);border-radius:0 0 24px 24px;height:640px;display:grid;place-items:center;text-align:center}
.sheet h2{font:500 22px/1.2 var(--font-display);letter-spacing:-.01em;margin-bottom:24px}
.ask{display:flex;width:490px;height:58px;padding:6px;border:1px solid var(--line);border-radius:10px;align-items:center;justify-content:space-between;color:var(--ink-3);font-size:15px;padding-left:18px}
.ask b{height:44px;line-height:44px;padding:0 18px;border-radius:6px;background:var(--accent);color:var(--bg);font-weight:500}
.foot{background:var(--ink);color:var(--bg);padding:120px 64px 40px;margin-top:-1px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;max-width:1312px;margin:0 auto}
.cols b{display:block;font:500 14px/20px var(--font-text);margin-bottom:10px}
.cols a{display:block;font-size:14px;line-height:26px;color:color-mix(in srgb,var(--bg) 62%,transparent)}
.cols a:hover{color:var(--bg)}
@media(max-width:760px){.cols a{line-height:44px}.sheet{height:480px;border-radius:0 0 16px 16px;padding:0 16px}.ask{width:100%}.foot{padding:64px 16px 32px}.cols{grid-template-columns:1fr 1fr;gap:28px 16px}}
```

### Headline: crushed-tracking (seen on Jasper, Vercel AI SDK, Expo)

Dense and deliberate. A sentence that behaves like a logotype. Seen on 14 sites.

**Use it for:** Developer tools, AI and design-led products that need one signature without adding colour. Works on sans at weight 400-600 and on high-contrast serifs.

**Avoid it for:** Faces with a tight default fit, which collapse at these values. Also long lines, and anything under 40px.

**Recipe:** Headline at 56-108px in a sans of weight 400-600 or a high-contrast serif, tracking -0.045 to -0.07em, line-height 0.95-1.1, under 50 characters. Stop while every letter pair still shows a sliver of ground; faces with a tight display cut stop near -0.045em. Relax as size falls: -0.06em at 64px, -0.04em at 48px, -0.015em at 32px.

**Why it works:** The crush is the whole signature, so it has to be visibly chosen. It only reads as a choice while letters stay separate. Measured ladders show tracking is proportional to size: one site goes from -0.047em at 64px to -0.016em at 32px, because a value that looks crisp at 64px clots at 32px. The number is not portable: my first attempt copied -0.06em from a reference onto a face with an optically tightened display cut, and letters fused. The same em value looked fine on a loose-fit grotesque. Judge the gap, not the figure.

```css
h1 { font: 450 64px/1 var(--font-display); letter-spacing: -.045em; max-width: 11em; }
/* Start here and move toward -.06em only on faces with a loose default fit. */
```

<a id="regular-weight-quiet"></a>

### Section headings: marked-phrase (seen on Elyx, Expo, Readwise)

The product's own tools turned on its own headlines. Seen on 9 sites.

**Use it for:** Design tools, note-taking apps, developer products. Choose the device the product really uses.

**Avoid it for:** Marks with no link to the product, which become decoration.

**Recipe:** One phrase in a 32-64px heading sits on a device: flat highlighter block, selection rectangle of radius 4-6px, bounding box with corner handles, inline code chip, or hand stroke. Choose the device the product itself uses. Same device on every section; the tint may change.

**Why it works:** A highlight means something in a reading app, a selection box means something in a design tool, and a code chip means something in a terminal product. The device is borrowed from the product, which is why it does not feel like decoration.

<a id="poster-caps-opener"></a>

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: shell-and-well-card (seen on Loops, Lindy, Material 3)

*Feeling: a tray holding the proof.*

Two nested layers. An outer card holds the claim, and an inset tinted well holds the evidence: seals, a tick list, a live component. Use it when a card needs to carry something more complex than text without a second border weight. Outer radius 16 to 24 with a hairline, well inset 8px at outer minus 8. Material's variant inverts the idea, with a stage on top in its own colour, its own bottom radius and the caption beneath. Loops repeats one shell for every feature and only swaps the body, which is the strongest version: the shell becomes the page's single system.

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

### Page rhythm: space-only-gaps (seen on Cal.com, Vercel AI SDK, Meridian)

**Feel.** Airy and modern. Confident enough not to need dividers.
**Use when** modules are dense and strong on their own, on developer and product pages. **Avoid** with sparse modules, since space around thin content reads as an unfinished page.
**Recipe.** One ground from nav to footer. No dividers, bands or tints. 160 to 240px of empty page between sections. Modules themselves stay tight, with hairline cards. Cal.com runs 14,729px this way on a 1264px rail. Meridian pushes gaps to 240 to 320px and opens each section with a heading left and a sub on the right half of the same row.

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

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

### Hover: accent-flip (seen on Stripe Pricing, Warp Pricing, Stripe Climate)

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

### Phone menu: owned-menu-glyph (seen on BIG, Analogue, Public)

*Feeling: a detail nobody else has.*

Swap the three bars for a glyph that belongs to the brand. BIG uses a three-bar descending funnel, because filtering is how its archive works, which keeps the logic of its desktop bar. Analogue uses a thin 24px plus, with a cartridge-shaped cart holding a digit. Public uses a four-dot grid and Groq a dot grid. Anthropic's Claude page draws a burger of unequal lines. Use it anywhere a small owned detail is worth more than a new layout. Keep a real label for screen readers, and keep it obvious enough to be tapped. If people cannot tell it is the menu, use the word.

### Showpiece: sticky-utility-header (seen on Attio Pricing, Claude Pricing, Linear Changelog)

*Feeling: you always know where you are.*

The most useful pin on the web, and it is plain CSS. Attio sticks plan names, prices, toggle and all four CTAs under the nav across about 5,000px of matrix, so conversion stays in reach, and section titles pin beneath them until the next replaces it. Claude's pricing does the same with a hairline and no shadow. Linear's changelog sticks each date until the next pushes it up. Use it for any table longer than a screen.

```css
.plans{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line)}
.group{position:sticky;top:124px;z-index:3;background:var(--bg)}/* top equals the height of the row above */
```

Give sticky rows a solid background, or the table scrolls through them. No shadow is needed, since a hairline holds the edge.

### Showpiece: inline-objects-in-sentence (seen on Vercel AI SDK, Cal.com, Meta AI)

The sentence and the product are one object. Seen on 6 sites.

**Use it for:** Products with small, charming interface pieces. Cal-style chips, tags or clocks.

**Avoid it for:** Stock icons. Objects must be the product's own, or the line reads as a rebus.

**Recipe:** Headline at 45-80px with real objects in the line: photo chips, clock tiles, product cards, pills, about 1em tall, each a different shape, holding real content, radius 10-14px, 1px border, at most two per line. Raise line-height to 1.15-1.25 to clear them. The words alone must still be a sentence.

**Why it works:** Objects need more leading than type does. Line-height that works for the words collides once a 1em chip lands on both lines, so the heading has to open up here, the opposite of every other display recipe.

```css
h1 { font: 700 80px/1.18 var(--font-display); letter-spacing: -.03em; }
.o { display: inline-flex; align-items: center; gap: .14em; height: .92em; padding: 0 .15em; vertical-align: -.15em;
     border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
.o > * { font: 500 14px/1.15 var(--font-text); letter-spacing: 0; } /* size the inner text here, so em on .o stays the heading's */
```

<a id="image-through-letters"></a>

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.