# Your direction (seed 1056)

Reads as **saas**, surface **pricing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this pricing surface

1. Navigation: `nav.top-bar/scroll-swap-bar`
2. Pricing table: `section.pricing-table/usage-calculator`
3. Comparison: `section.comparison-table/group-rhythm-matrix`
4. FAQ: `section.faq/category-grouped-faq`
5. Numerals: `type.numerals/ruled-ledger-stat`
6. Headline: `type.display-headline/same-size-two-voices`
7. Primary button: `button.primary/lit-colour-button`
8. Surface ladder: `atmosphere.light-surface-ladder/cool-ground-white-tile`
9. Closing section: `section.cta-band/split-plain-close`
10. Footer: `section.footer/contact-first-footer`
11. Hover: `button.hover-response/tone-step`

Build every section with real content. Top pricing pages run about 6,200 to 10,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Host Grotesk** with **Host Grotesk**. A contemporary grotesque at medium weight with a plain mono for metadata, restrained enough to let the product be the picture.
- Display: 64px, phone 38px, weight 500, tracking -0.035em, leading 1.03. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Host Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap

## Palette

From Stripe Billing: bg #ffffff, surface #f8fafd, text #061b31, muted #50617a, accent #533afd. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion

Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Plausible** (saas, silver) https://plausible.io
- Doing: A privacy analytics tool sells by showing its actual dashboard, then by writing a long letter from the founders.
- Why it feels made: The real product sits in the hero at full legibility, and the pricing slider ties price directly to traffic. Function and candour earn trust rather than visual polish.
- If imitated badly: Stock Tailwind styling, a system font and indigo read as default unless product and copy carry real substance.

**Aniket** (portfolio, gold) https://unfunnyket.com/
- Doing: A personal page that is almost pure typography on four hairline rails, with one WebGL ribbon as its only flourish.
- Why it feels made: Everything hangs on rails only 7 percent black and sizes never exceed 19px, so the spacing and the single iridescent ribbon read as confident editing.
- If imitated badly: At this size any sloppy spacing is exposed, and without the ribbon and real writing the page collapses into a plain text resume.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: scroll-swap-bar (seen on Stripe Pricing, Cloudflare Workers, ElevenLabs Pricing)

*Feeling: the header notices you have started reading.*

The bar changes its job once you are into the page. Stripe's pricing page swaps the main nav for a 64px white bar holding three section anchors, a contact pill and a 3px lilac progress line along the top edge. Cloudflare Workers drops everything but the cloud mark and a 38px orange pill. ElevenLabs reduces to logo and Sign up. Storybook swaps to a section dropdown and centred anchors. Use it on long pages, where the global nav has stopped being useful. Avoid it on short pages, where the swap never pays off.

Crossfade over 200 to 300ms and keep the height constant if you can, because a bar that changes height pushes the reading position. A reading-progress line goes on the top or bottom edge, 2 to 3px tall.

### Pricing table: usage-calculator (seen on Plausible, Webflow Pricing, PostHog Pricing)

*Feeling: you set the price.*

When price depends on volume, a flat table lies, so give the reader the control. Plausible places a 600px slider with a value tooltip above four cards. PostHog lists products at left with running totals and sliders at right, closing on an estimated total and a button. Webflow embeds a small underlined select inside a feature row, so the price updates in place. Keep the free tier visible, show per-unit rates, and hold layout still as numbers change.

### Comparison: group-rhythm-matrix (seen on Vercel Pricing, Cursor Pricing)

*Feeling: a long list that does not tire.*

Vercel drops row rules altogether and draws a hairline only between groups, trusting even spacing to carry the eye. Group titles are 14px/500 in ink and children 14px/400 in muted ink. Cursor marks groups with a 16px line icon in a row that looks like any other. Use it when the table passes 60 rows, where a rule on every row turns into stripes.

### FAQ: category-grouped-faq (seen on Claude Pricing, Prägen Hätlen, Webflow Pricing)

*Feeling: sorted before you arrive.*

For long lists, group first. Webflow runs a 24px category in a 440px rail beside rows, repeating down the page. Claude Pricing uses tray tabs over a 640px column. 360Rides splits by audience with two coloured column heads. Prägen Hätlen nests categories in full-width mono rows that reveal a right column of questions. Use it past 12 questions or for two audiences.

### Numerals: ruled-ledger-stat (seen on Jasper, Modern Treasury, Paddle)

Entries in a ledger. Seen on 3 sites.

**Use it for:** Finance, B2B proof and case studies.

**Avoid it for:** Playful brands.

**Recipe:** Stats as ledger rows: numeral 48-64px at left, 14px mono caps caption on the same baseline at right or below, 1px rule between rows. Serif numerals feel especially right. Reads as entries, not hero numbers.

```css
.row { display: flex; justify-content: space-between; align-items: baseline; padding: 16px 0; border-top: 1px solid var(--line); }
.val { font: 400 48px/1 var(--font-display); letter-spacing: -.02em; }
.cap { font: 400 14px/1 var(--font-mono); letter-spacing: .05em; text-transform: uppercase; color: var(--ink-2); }
```

<a id="mono-metric-cells"></a>

### Headline: same-size-two-voices (seen on Polar, Increase, Kinfolk)

Precise and self-assured. Hierarchy with almost nothing. Seen on 16 sites.

**Use it for:** The best small-difference move in the corpus. Use for precise SaaS, finance and any headline that needs to name a thing and then claim something.

**Avoid it for:** When both halves are long. The grey half must still read, so never drop below about 45% ink on the ground it sits on.

**Recipe:** One size, 32-64px, weight 400-600, line-height 1.0-1.25, tracking 0 to -0.03em. Two clauses split by tone: first at full ink, second at 45-60% ink, on a second line or running on. Alternatives: drop weight two steps, or change case. This block replaces the subhead.

**Why it works:** The heading and sub become one object, so the top of the page has one thing to read rather than two. It also deletes a layout decision: there is no gap to judge and no size step to choose.

```css
h1      { font: 600 56px/1.05 var(--font-display); letter-spacing: -.02em; max-width: 860px; text-wrap: pretty; }
h1 span { font-weight: 300; color: var(--ink-3); }
```

<a id="flat-accent-phrase"></a>

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

### Surface ladder: cool-ground-white-tile (seen on Apple Vision Pro, Bauhaus Clock, VS Code)

*Feeling: lit, like a product on a showroom table.*

**Use it for:** Hardware, consumer tech, and tiles holding one strong object or photo. **Avoid:** Text-heavy tiles. A white tile with a paragraph on grey is the default admin look.

Cool ground #eef0f2 or #f5f5f7, pure white tiles, no border, one soft shadow or none. Text #1d1d1f, secondary #86868b. White reads as lit because the ground leans blue-grey, so put real product in the tiles.

Bauhaus Clock pairs an #eef0f2 ground with white tiles and uses soft shadows rather than borders, and saturated colour appears only inside product tiles. White reads as lit because the ground sits a little cool and a little darker.

### Closing section: split-plain-close (seen on Vercel Pricing, Stripe Billing, Amplitude)

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

### Footer: contact-first-footer (seen on Bakstad Construction, Nicole Heim Studio, Locomotive)

*Feeling: a business card.*

For a studio or a trade there is no sitemap to speak of, and the visitor wants to get in touch. Bakstad Construction runs one 95px ruled strip with text clusters at fixed columns: firm and principal, keyed `E` and `T` lines, address, then Instagram and Get in Touch. Everything is real selectable text at 15/20. Nicole Heim stacks label and value pairs at the left margin and sets nav right-aligned. Locomotive sets its address and phone at 70px, with pictograms inside the line, and it becomes the signature of the site. Loopcraft fills a viewport with a short greeting, a 48px email and a 40px phone number.

Do not use it for a product with a real navigation to index. Do use the keyed `E` and `T` idea anywhere, because it is both compact and handsome.

```css
body{display:grid;grid-template-columns:92px 1fr;min-height:100vh;font-family:var(--font-text)}
.rail{border-right:1px solid var(--ink);position:relative;font-size:15px}
.rail b{position:absolute;left:16px;top:8px;font:700 54px/1 var(--font-display)}
.rail span{position:absolute;left:16px;bottom:30px}
.main{display:grid;grid-template-rows:1fr auto}
.strip{border-top:1px solid var(--ink);min-height:95px;padding:24px 28px;display:grid;grid-template-columns:minmax(0,285px) minmax(0,319px) 1fr auto;gap:0 16px;font:400 15px/20px var(--font-text)}
.strip dl{display:grid;grid-template-columns:28px auto;align-content:start;width:max-content}
.strip dd{margin:0}
.strip nav{display:flex;gap:32px}
@media(max-width:1000px){.strip{grid-template-columns:1fr 1fr;gap:16px}}
@media(max-width:760px){body{grid-template-columns:1fr}.rail{display:none}.strip{padding:20px 16px;grid-template-columns:1fr;gap:12px}.strip a{display:inline-block;line-height:44px}}
```

```html
<footer class="strip">
  <div>MARLOW JOINERY<br>Tessa Marlow, Principal</div>
  <dl><dt>E</dt><dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
      <dt>T</dt><dd><a href="tel:+12065550142">+1 206 555 0142</a></dd></dl>
  <address>4701 Harbor Way #249<br>Seattle, WA 98116</address>
  <nav><a>Instagram</a><a>Get in touch</a></nav>
</footer>
```

### Hover: tone-step (seen on Neon Docs, New Material, Bitnomi)

*Feeling: nothing happened, and yet you know it is live.*

One small move of the fill. The default for almost every button. Dark lightens by 11 L\*, white darkens by 4, colour darkens by 8. Stay within those, because a move of 20 L\* or more reads as a different button. Use 150ms on `ease` or `cubic-bezier(.4,0,.2,1)`, or an instant cut. Trasti and Bitnomi use a cut, and it feels fast rather than crude.

```css
.h-step{transition:background-color .15s cubic-bezier(.4,0,.2,1)}
.h-step:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}   /* dark fill: toward the ground */
.h-step.colour:hover{background:color-mix(in oklab,var(--accent) 88%,#000)}  /* colour: toward black */
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.