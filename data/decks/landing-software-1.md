# Your direction (seed 1001)

Reads as **saas**, surface **landing**, register **dark-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Airpost: The Frontier Marketing OS for Frontier Companies, a silver ai page)

1. Navigation: `nav.top-bar/switch-led-bar`
2. Hero: `hero.centered-with-product/left-headline-cropped-window`
3. Pricing table: `section.pricing-table/ruled-plan-grid`
4. Ui fragment: `product.ui-fragment/fading-live-feed`
5. Gallery portfolio: `section.gallery-portfolio/lead-mosaic`
6. Annotated shot: `product.annotated-shot/verb-stack-beside-player`
7. Testimonial: `section.testimonial/drifting-double-row`
8. Faq: `section.faq/reading-column-rows`
9. Team: `section.team/investor-row`
10. Closing section: `section.cta-band/plain-centred-close`
11. Footer: `section.footer/large-link-index`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Public Sans** with **Public Sans**. Franklin bones at a light weight give Söhne's dry newsroom tone without the licence.
- Display: 64px, phone 38px, weight 400, tracking -0.024em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.6. UI: Public Sans 13px 500. Label: 500, uppercase, 0.05em
- Load: https://fonts.googleapis.com/css2?family=Public+Sans:wght@400..500&display=swap

## Palette

From Resend Changelog: bg #000000, surface #0e0e0e, text #f0f0f0, muted #a1a4a5, accent #d6ebfd. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-then-media`, **Scroll** `pinned-step-swap`, **Hover** `tone-step`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Airpost: The Frontier Marketing OS for Frontier Companies** (ai, silver) https://www.airpost.ai/
- Doing: A pure-black AI marketing page where huge regular-weight sentences alternate with simulated product UI.
- Why it feels made: The product fragments are bespoke and animated rather than screenshots, and regular-weight display type gives calm scale. One blue does every job.
- If imitated badly: Black pages with blue glow are everywhere in AI, so the look collapses without custom UI fragments like these.

**Linear Method** (saas, gold) https://linear.app/method
- Doing: A near-black editorial page where one serif headline and faint geometric line art carry the whole first screen.
- Why it feels made: Extreme restraint: one serif, one sans, hairline art at ~10% opacity, a numbered contents list. Everything is quiet so the headline feels expensive.
- If imitated badly: Dark empty space with a thin serif looks unfinished unless the type size, leading and hairline art are exact.

**Sourcegraph** (devtool, gold) https://www.sourcegraph.com
- Doing: A near-black engineering page that alternates dark and light chapters, joined by pixel-tile dissolves and held together by two full-height rails.
- Why it feels made: A single frame of hairlines runs through every section, and transitions are pixel events rather than colour changes. Coral is rationed to the nav button, logo and a few product details.
- If imitated badly: The pixel noise and perspective grid become cyberpunk wallpaper if brightened, tinted or placed behind body text.

## System choices

- Headline: `type.display-headline/flat-accent-phrase`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/signature-glyph-button`
- Surfaces: `surface.panel/nested-gutter-window`
- Surface ladder: `atmosphere.dark-surface-ladder/cool-navy-ladder`
- Logo: `media.logo-mark/pixel-cut-wordmark`
- Icons: `media.icon-set/knockout-badge-tiles`
- Page rhythm: `layout.section-rhythm/space-only-gaps`
- Load: `motion.load-sequence/colour-plate-then-media`
- Scroll: `motion.scroll-pin-or-scrub/pinned-step-swap`
- Hover: `button.hover-response/tone-step`
- Phone menu: `nav.mobile-menu/rich-entry-sheet`
- Showpiece: `section.feature-sticky-scroll/list-drives-pinned-stage`
- Showpiece: `motion.scroll-pin-or-scrub/pinned-step-swap`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: switch-led-bar (seen on BIG, Betterment, Monzo)

*Feeling: first, tell me who you are.*

The main control is a switch, not a list of pages. Monzo puts Personal and Business in a pale full-radius track where the links would go. BIG turns its five disciplines into evenly spaced 12px filters with a search that rotates suggested terms, so the nav is the catalogue's filter. Airbnb uses centred tabs with 48px rendered icons. Use it when the first decision divides the site. Avoid it when the choice is not really binary, or if it hides the routes people need.

Set a 44px track, or 12px caps filters, with the active item as a white pill or a 3px underline. Do not duplicate the switch in the link row.

### Hero: left-headline-cropped-window (seen on Devin Desktop, Linear, Loops)

- **Feels:** Editorial precision, serious tool for people who care.
- **Use when:** Product-led brands with a strong interface, and you want to avoid the centred default.
- **Not when:** The headline is one short word, which looks lost on the left.
- **Recipe:** One gutter of 60 to 96px for everything. Two-line 44 to 64px headline from y 200 to 275, 16 to 17px grey sub, and a small link right-aligned on the sub's baseline, which is the detail that makes the row feel engineered. Window 1250 to 1320px from about y 500, cut by the fold, fading into the page at its base. Keep the window close to monochrome and let one thing carry hue.

```css
.hero{position:relative;height:836px;overflow:hidden;padding:172px 60px 0;isolation:isolate}
.hero::after{content:"";position:absolute;inset:auto 0 0;height:160px;z-index:3;pointer-events:none;
  background:linear-gradient(transparent,var(--bg))}     /* window dissolves, no hard stop */
h1{font:500 64px/1 var(--font-display);letter-spacing:-.03em;max-width:1000px}
.row{display:flex;justify-content:space-between;align-items:baseline;margin-top:28px;
  font:400 16px var(--font-text);color:var(--ink-2)}
.row a{font-size:14px;color:var(--ink)}
.win{height:520px;margin-top:52px;border-radius:12px 12px 0 0;background:var(--surface);
  box-shadow:0 0 0 1px var(--line),inset 0 1px 0 rgb(255 255 255/.07);
  display:grid;grid-template-columns:220px 1fr 300px;overflow:hidden;font:400 13px var(--font-text)}
.span{height:9px;border-radius:2px;background:color-mix(in oklab,var(--ink) 24%,transparent)}
.span.hot{background:var(--accent)}                    /* only the thing the headline is about */
```

Our first version gave each trace span a colour and looked like a Gantt chart from a dashboard kit. Turning every span to 16 to 34% white and leaving one accent bar made it read like the reference immediately. The top light of 7% white on the window's upper edge matters too: it is how dark surfaces separate on dark.

### Pricing table: ruled-plan-grid (seen on Vercel Pricing, Sanity Pricing, GitHub Pricing)

*Feeling: one instrument, read left to right.*

All plans sit in one frame and share their rules, so the section reads as a single object and the reader compares instead of browsing. Use it for developer tools, infrastructure and anything serious. Skip it when plans differ in kind rather than degree.

Build a 1px gap on a line-coloured parent, which gives shared rules that can never double. Use 32px padding, a 14px name, a 48 to 56px price, a muted one-line fit, and a hairline. Vercel puts a tiny tag beside the name and the list on 16px line icons, with one filled pill at the base. Neon uses mono caps names and dashed rules between feature groups. Sanity swaps the frame for dotted rules between dot-matrix edge fields. GitHub adds a 2px accent rule above a mono "recommended" header. Webflow detaches a fourth plan by 32px on a tinted fill, which splits self-serve from sales without a word.

```html
<div class="plans">
  <article class="plan">
    <div><p class="name">Team <span class="tag">Most teams</span></p><p class="price">$48<small>/mo per database</small></p></div>
    <p class="fit">Second-region copies and 35 days of history for production.</p>
    <p class="lead">Everything in Solo, plus:</p>
    <ul class="list"><li>Up to 200 GB per database</li><li>35 days point-in-time</li></ul>
    <a class="go dark" href="/trial">Start a 14-day trial</a>
  </article>
  <!-- first plan: no lead line. Give its list class "first" so it rises into that row -->
</div>
```

```css
.plans{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,auto);gap:0 1px;background:var(--line);border:1px solid var(--line)}
.plan{display:grid;grid-row:span 5;grid-template-rows:subgrid;row-gap:0;background:var(--bg);padding:32px}
.plan.on{background:var(--surface)}
.name{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500}
.tag{font-size:11px;line-height:18px;padding:0 7px;border-radius:9px;background:color-mix(in srgb,var(--ink) 7%,transparent);color:var(--ink-2)}
.price{display:flex;align-items:baseline;gap:8px;margin-top:16px;font:400 56px/1 var(--font-display);letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.price small{font:400 13px/1 var(--font-text);letter-spacing:0;color:var(--ink-2)}
.fit{margin-top:16px;padding-bottom:24px;border-bottom:1px solid var(--line);color:var(--ink-2);max-width:23em}
.lead{padding-top:20px;min-height:44px;font-size:13px;color:var(--ink-2)}
.list{display:grid;gap:10px;align-content:start;padding-block:12px 32px;font-size:14px;line-height:20px}
.list svg{flex:none;width:16px;height:16px;margin-top:2px;fill:none;stroke:var(--ink-2);stroke-width:1.5}
.list.first{grid-row:span 2;padding-top:24px}
.go{align-self:end;justify-self:start;display:inline-flex;align-items:center;height:40px;padding:0 18px;border-radius:20px;font-size:14px;font-weight:500;border:1px solid var(--line);background:var(--surface);transition:background .15s}
.go.dark{background:var(--ink);color:var(--bg);border-color:var(--ink)}
@media(max-width:860px){.plans{grid-template-columns:1fr;grid-template-rows:none;gap:1px}.plan{grid-row:auto;grid-template-rows:none;padding:24px}.price{font-size:44px}}
```

### Ui fragment: fading-live-feed (seen on Cloudflare Workers, Resend, Airpost: The Frontier Marketing OS for Frontier Companies)

*Work is happening right now, and it will not stop.* Quality 5/5, 6 sites.

**Use:** Infrastructure, webhooks, agents, deploys, logs. **Not:** Anything with few events. A feed of three is not a feed.

**Recipe:** Stack of 51-60px rows or sentence-rows with status chips, each row dimmer than the last: 100, 70, 40, 15%. 12px mono names, 9-12px status chips, timestamps. Mask or blur the base. A new row can arrive at the top. Resend writes events as sentences with bordered value chips joined by a vertical line, which reads far more human than a table. Airpost dims rows progressively and marks the active one with a blue hairline.

### Gallery portfolio: lead-mosaic (seen on Sonder, Studio Dado, Framer)

*Feeling: an edited front page of images.*

One large tile beside a stack of smaller ones, so the eye gets a hierarchy that a uniform grid cannot give. Oxygen Pictures uses four columns where row one spans 2+1+1 and row two 1+2+1, with tiles of 216 or 404px height, 16px gaps, greyscale film, and deliberate holes in the grid. Studio Dado sets one large landscape beside a 2×2 at 8px gaps under a huge caps title. Sonder runs one tall photo plus six city tiles. Framer sets two rows of live site tiles at radius 15 and 10px gaps, as the first colour after a long black run. The holes matter, because a mosaic with every cell filled turns into a bento. Hold them to the grid. Avoid it with fewer than about six pieces, or when no image is strong enough to lead.

```css
.m{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:216px;gap:16px;padding:24px}
.t{position:relative;overflow:hidden;background:var(--surface);color:#fff}
.t img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter .3s ease}
.t:hover img{filter:none}
.t::after{content:"";position:absolute;inset:auto 0 0;height:96px;background:linear-gradient(transparent,rgba(0,0,0,.72))}
.t div{position:absolute;left:12px;bottom:10px;z-index:1;font-size:15px;line-height:20px}
.t small{display:block;font-size:15px;color:rgba(255,255,255,.55)}
.gap::after{display:none}
.big{grid-column:span 2;grid-row:span 2}
.gap{background:none}
@media(max-width:760px){.m{grid-template-columns:1fr 1fr;grid-auto-rows:44vw;gap:8px;padding:16px}.gap::after{display:none}
.big{grid-column:span 2;grid-row:span 1}.gap{display:none}}
```

### Annotated shot: verb-stack-beside-player (seen on Airpost: The Frontier Marketing OS for Frontier Companies)

*Three words, one decision.* Quality 5/5, 1 site.

**Use:** Review and approval products. **Not:** Anything with no clear verbs.

**Recipe:** Three columns: 20px paragraph, three verbs stacked at 56px with the active word white and others 25%, then a 280px dark device showing the matching controls. Scroll advances the verb.

### Testimonial: drifting-double-row (seen on Bauhaus Clock, Ramp, LiveKit)

*Feeling: a stream that keeps going.*

Two rows of cards sliding past each other. It gives a wall's sense of volume in a third of the height. Use it mid-page, with short quotes. Avoid it for anything a reader must finish, because moving text cannot be read comfortably, so keep quotes to three lines.

Ramp uses 320 by 192 white cards, radius 16, 1px warm line, 40px logo tile, 14/500 name and 14/20 quote, rows offset half a card, both edges masking to the page. Bauhaus Clock's 350 by 275 cards use radius 30 and 20/28 text, with the key sentence bold on a per-line highlighter, which lets a moving reader catch the point. LiveKit mixes card widths of 300 and 450px in staggered stacks. Kiro sets attributions outside the box so heights stagger, and gives the row a pause button.

### Faq: reading-column-rows (seen on Warp Pricing, Notion Calendar, Linear Changelog)

*Feeling: plain and helpful.*

The plainest treatment, and it works anywhere. Use it when the FAQ follows a centred page, or when a page is dense and needs to breathe. Warp runs a 944px column, a 50px heading aligned to the column's left edge and 61px rows. Claude runs 704px at 88px pitch with display-face questions, and this is where my first version looked weak: my questions were weight 400 and read faint beside their 500, so raise the weight when a text face sets the question. Raycast fades its rules out at both ends. Attio replaces the icon with a small grey `[+]`, a quiet developer detail. Kiro fills a 40 by 56px block behind the plus on hover.

```css
.wrap{width:min(704px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.wrap h2{font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;text-align:center;margin-bottom:56px}
.list{border-top:1px solid var(--line)}
.wrap summary{min-height:88px;padding-block:24px;font:500 20px/1.3 var(--font-display)}
.a{padding-bottom:28px;font-size:17px;line-height:28px;color:var(--ink-2);max-width:36em;text-wrap:pretty}
```

### Team: investor-row (seen on Linear About, Railway About, Airpost)

*Feeling: backed, and not boasting.*

Linear ends its about page with two flat 140px tiles, a pale blue and a cream, each with a firm's name and partner below. Railway uses a row of 32px portraits with short captions. Keep it small and put it after the team. Investors are a footnote to the people doing the work.

### Closing section: plain-centred-close (seen on Resend, Linear, Cursor Pricing)

*Feeling: the page has said enough.*

No card, gradient or glow. It costs nothing and is the most confident choice on the list, and it works in any register. Linear runs 72/72 on page black with about 200px above and below, 44px pills, a bright primary and a 5 percent white secondary. Cursor runs one line at 72px. Polar uses two-tone 48/60 lines. Resend returns to the hero's display face for a second and final time, with a soft gradient on the lines. Analogue sets a three-line statement and a single underlined link.

```css
.close{display:flex;flex-direction:column;align-items:center;padding:200px 24px;text-align:center}
.close h2{font:500 72px/1 var(--font-display);letter-spacing:-.03em;max-width:12em;text-wrap:balance}
.pair{margin-top:40px}
.b{height:44px;padding:0 22px;border-radius:22px;font-size:16px}
.b.s{box-shadow:none;background:color-mix(in srgb,var(--ink) 6%,transparent)}
.b.s:hover{background:color-mix(in srgb,var(--ink) 10%,transparent)}
@media(max-width:700px){.close{padding:128px 24px}.close h2{font-size:44px}.pair{flex-direction:column;width:100%;max-width:280px}.b{justify-content:center}}
```

### Footer: large-link-index (seen on Nuro, Figure, Prototype)

*Feeling: a table of contents you could read across a room.*

Few links, set large. Nuro runs 20px links on a 37px pitch in two columns at the left, with almost nothing else. Figure numbers six items from 01 to 06 at about 40px with hairlines between. Prototype stacks three words at 120px, right-aligned, beside a looping reel tile. Basement pushes a 38px list to the bottom of a full viewport, keeping small superscript counts. Athletics sets two 22px lists with no headings and nothing else but three corners of small print. Use it when the site has six to ten destinations and the type is good. It fails with long labels and with anything over about ten items.

### Headline: flat-accent-phrase (seen on Hims, Greylock, Supabase)

Direct and branded. The claim is the colour. Seen on 12 sites.

**Use it for:** Developer tools and SaaS with a strong brand hue, and photo-led pages where the second colour can be taken from the image.

**Avoid it for:** When the accent appears nowhere else. A coloured word that matches nothing looks picked from a swatch.

**Recipe:** Headline in one ink with a single clause or final line in one flat brand colour, no gradient, same size and weight, 46-80px, line-height 1.0-1.1. The coloured words are the claim, not decoration. Repeat the hue on the primary action, or take it from the hero photograph.

**Why it works:** Colour on the claim tells a skimming reader exactly which words matter. The best example changes the second colour for each photograph, so type and image look art-directed together.

<a id="tonal-gradient-fill"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: signature-glyph-button (seen on ECI, Symbol Studio, Haikei)

*Feeling: a small mark that belongs to someone.*

A plain control carrying one owned glyph instead of an arrow. ECI places a 12px black dot before the label in a 47px grey pill. Symbol Studio uses a 6px dot on an orange block. axem steps a pixel chevron. Haikei tilts a 30px dice icon by -15 degrees, since dice are the product. The glyph then recurs in lists and links, so one tiny mark does the work of a logo. Choose it from the brand's own object, and use it everywhere or nowhere.

### Surfaces: nested-gutter-window (seen on Polar, BILD, Discord)

*Feeling: machined, one piece.*

Panes share a gutter instead of borders. Polar's shell is radius 16 with 4px padding around panes of radius 12: exactly outer minus gap, which is why it looks milled from one block. A 44px title row carries the logo left and a 12px muted note right. Sit it on a grainy plate with a deep negative-spread shadow. Use it on dark product pages. Replace tone with hairlines and it stops working, because the gutter is the design.

```css
.win{--r:16px;--p:4px;background:var(--bg);border-radius:var(--r);padding:var(--p);
  box-shadow:0 16px 40px -12px rgba(0,0,0,.75),0 0 0 1px rgba(255,255,255,.03)}
.bar{height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;font-size:14px}
.bar small{font-size:12px;color:var(--ink-2)}
.panes{display:grid;grid-template-columns:1fr 1fr;gap:var(--p)}
.pane{background:var(--surface);border-radius:calc(var(--r) - var(--p));padding:24px;min-height:288px;
  display:flex;flex-direction:column;font-size:14px}
@media(max-width:760px){.panes{grid-template-columns:1fr}}
```

### Surface ladder: cool-navy-ladder (seen on Increase, Better Stack, Peloton)

*Feeling: institutional, technical, night-shift. Trustworthy rather than edgy.*

**Use it for:** Finance, infrastructure and enterprise tools, and any page with blue product UI. **Avoid:** Warm or photographic brands. A navy page with a neutral grey body text looks unconsidered.

One blue-grey hue at every step, oklch hue 255 to 280. Page L .17 to .23, C .02 to .05. Panels +.045, raised +.05 more. Rules white 8% or one step up. Body text is blue-grey too, never neutral grey.

Measured examples: #0f101a, #171926, #1f2433, and #151e29, #1d2a36, #1a2b3b, and #1a222d, #232b38, #333947. A blue cast stops true-black dead spots on cheap panels and lets one saturated accent stand out.

### Logo: pixel-cut-wordmark (seen on Astral, LiveKit, Muda 26)

*Feeling: digital, technical, slightly retro.*

**Use:** Developer tools and culture brands. Also strong as a system with a matching panel notch or dot-matrix hero. **Avoid:** Traditional or luxury brands. At very small widths, use a one-letter tile instead.

Build letters from square modules on a 5 or 7 high grid, with no anti-aliasing, curves or diagonals. Width must be a whole number of modules. At about 15px per module, MUDA-style marks reach 376 by 75. Hollow one counter for character. Use it in the nav at around 154 by 26, large as blog art, stacked in the footer, and reduced to one letter in a 64px radius-12 tile for product icons. A dissolve variant lets one stroke break into stepped pixels.

```js
// Pixel wordmark: 5 modules tall. Width is always a whole number of modules, so a four-letter word
// (4 x 5 + 3 gaps = 23 modules) ships at 46, 69, 115 or 322px, and never at 44.
const pix = (w, word) => { let o = '', x = 0;
  for (const c of word) { glyphs[c].forEach((row, j) => [...row].forEach((v, i) => {
      if (+v) o += `<rect x="${x + i}" y="${j}" width="1" height="1"/>`; })); x += 6; }
  return `<svg width="${w}" height="${w * 5 / (x - 1)}" viewBox="0 0 ${x - 1} 5" fill="currentColor" shape-rendering="crispEdges">${o}</svg>`; };
```

**In the lab:** Strong at whole-module widths, poor at any other. My first R was also weak, because module letters still need to be drawn. Do not expect a generic grid to produce good letterforms on its own.

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

### Page rhythm: space-only-gaps (seen on Cal.com, Vercel AI SDK, Meridian)

**Feel.** Airy and modern. Confident enough not to need dividers.
**Use when** modules are dense and strong on their own, on developer and product pages. **Avoid** with sparse modules, since space around thin content reads as an unfinished page.
**Recipe.** One ground from nav to footer. No dividers, bands or tints. 160 to 240px of empty page between sections. Modules themselves stay tight, with hairline cards. Cal.com runs 14,729px this way on a 1264px rail. Meridian pushes gaps to 240 to 320px and opens each section with a heading left and a sub on the right half of the same row.

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

### Hover: tone-step (seen on Neon Docs, New Material, Bitnomi)

*Feeling: nothing happened, and yet you know it is live.*

One small move of the fill. The default for almost every button. Dark lightens by 11 L\*, white darkens by 4, colour darkens by 8. Stay within those, because a move of 20 L\* or more reads as a different button. Use 150ms on `ease` or `cubic-bezier(.4,0,.2,1)`, or an instant cut. Trasti and Bitnomi use a cut, and it feels fast rather than crude.

```css
.h-step{transition:background-color .15s cubic-bezier(.4,0,.2,1)}
.h-step:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}   /* dark fill: toward the ground */
.h-step.colour:hover{background:color-mix(in oklab,var(--accent) 88%,#000)}  /* colour: toward black */
```

### Phone menu: rich-entry-sheet (seen on Notion About, AuthKit, Notion Calendar)

*Feeling: a small landing page in the menu.*

Rows carry more than names. Notion stacks three 106px pastel cards with a title, a line and its own drawing, then Resources and Pricing in plain 22px type, then two buttons in a pinned tray. Supabase uses a select to switch sections, with icon tiles on an 80px pitch. Hugging Face groups chips under gradient-tinted headings. Rewiring America uses chip tabs on a yellow band with described rows below. Use it when names alone do not sell the product, and you have real drawings. Avoid card lists with generic icons.

### Showpiece: list-drives-pinned-stage (seen on Wispr Flow, Payload, Sweeply)

*11 sites, quality 5.* The classic tour. Readable, productised, and the best first choice. Use for three to five steps that each change one stage.

Recipe: a list column of about 444 to 672px, a stage of about 584 to 800px sticking near the top, and a step height of about 72vh. Mark the active row with one device: full ink against about 30% for the others, a 2 to 5px bar, a thin rule, an arrow tile. Wispr Flow centres a 400 by 468px video card with steps on the left and a large title low on the right. Payload stacks four 48/64 lines, the current one white, the rest at 25%. Sentry uses a 4px gradient left rule. Fill the stage: this is where it is easiest to leave half a panel blank.

Seen on Wispr Flow, Payload, Sentry, Calvyn, Storybook, Nx, Lindy, Sweeply. Suits dark precision, warm neutral, gradient light, bold colour, for SaaS, devtool and AI.

```html
<section class="tour">
  <div class="steps">
    <article class="step on" data-s="0"><span>01</span><h3>Demand arrives by the hour</h3><p>Two specific sentences.</p></article>
    <article class="step" data-s="1"><span>02</span><h3>Batteries answer first</h3><p>Two specific sentences.</p></article>
  </div>
  <aside class="stage" aria-hidden="true">
    <div class="scene on"><!-- a full panel --></div>
    <div class="scene"><!-- a full panel --></div>
  </aside>
</section>
```

```css
.tour { display: grid; grid-template-columns: 444px 1fr; gap: 72px; align-items: start; }
.step { position: relative; min-height: 72vh; display: flex; flex-direction: column; justify-content: center; padding-left: 28px; border-left: 1px solid var(--line); transition: opacity .3s; }
.js .step { opacity: .34; } .js .step.on { opacity: 1; }   /* the dim state only exists when JS can lift it */
.step::before { content: ""; position: absolute; left: -1px; top: calc(50% - 44px); height: 88px; width: 1px; background: var(--accent); opacity: 0; transition: opacity .3s; }
.js .step.on::before { opacity: 1; }
.step h3 { margin-top: 12px; font: 400 32px/1.14 var(--font-display); letter-spacing: -.018em; }
.step p { margin-top: 12px; color: var(--ink-2); }
.stage { position: sticky; top: 14vh; height: min(72vh, 600px); min-height: 480px; border-radius: 12px; background: var(--surface); box-shadow: inset 0 0 0 1px var(--line); overflow: hidden; }
.scene { position: absolute; inset: 0; opacity: 0; transition: opacity .4s; }
.scene.on { opacity: 1; }
@media (max-width: 980px) {
  .tour { grid-template-columns: 1fr; gap: 24px; }
  .stage { order: -1; top: 12px; height: 42svh; min-height: 320px; z-index: 2; }   /* the stage stays, copy passes under it */
  .step { min-height: 58svh; justify-content: flex-start; padding-top: 28px; }
}
```

```js
document.documentElement.classList.add('js');   // in the head, before paint
const steps = [...document.querySelectorAll('.step')], scenes = [...document.querySelectorAll('.scene')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const i = +e.target.dataset.s;
  steps.forEach((s, j) => s.classList.toggle('on', j === i));
  scenes.forEach((s, j) => s.classList.toggle('on', j === i));
}), { rootMargin: '-45% 0px -45% 0px' });      // a thin line across the middle of the screen
steps.forEach(s => io.observe(s));
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

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.