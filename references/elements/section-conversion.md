# Conversion sections

Pricing tables, comparison tables, FAQs, closing calls to action, newsletters and contact forms. Nobody admires these sections, and they are where the reader decides. They are also where generated pages go cheap fastest, because a model treats them as boilerplate and reaches for the same three cards, the same accordion and the same purple band. On strong sites these sections are often the best-made things on the page.

This chapter holds 105 canonical variants, clustered from 555 analyst rows across 399 pages. Thirteen of those rows were set aside because they were documentation rules or job lists rather than FAQs. About 145 real frames were opened to check the leading specs, and 32 variants were rebuilt from scratch, rendered, and compared side by side with the real frame. Corrections from that comparison are in the recipes, and the failures are in each mistake list. The same variants live in `data/elements/section-conversion.jsonl`, which is what the sampler deals from.

Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any type system and palette drops in. Where a recipe needs a monospace label it falls back with `var(--font-mono, ui-monospace, monospace)`. Numbers came from analysts reading frames unless the text says measured, so treat them as good estimates. Counts mean pages.

## Contents

- [Start here](#start-here)
- [Measured values](#measured-values)
- [Pricing table](#pricing-table): 19 variants
- [Comparison table](#comparison-table): 16 variants
- [FAQ](#faq): 16 variants
- [Closing call to action](#closing-call-to-action): 25 variants
- [Newsletter](#newsletter): 17 variants
- [Contact form](#contact-form): 12 variants
- [Putting a page together](#putting-a-page-together)

## Start here

Each element answers one question that the reader is already asking. Pick by the question.

| The reader is asking | Build | Do not build |
|---|---|---|
| What does it cost, and which one is me? | A pricing table | A comparison matrix with no recommendation |
| Does this plan have the one thing I need? | A comparison table | More bullets in the plan cards |
| What is the catch? | An FAQ | A sales paragraph |
| What do I do now? | A closing call to action | A summary of the page |
| Not yet, but keep me posted | A newsletter sign-up | A popup on arrival |
| I need a person | A contact form or a routing list | A long form with no reply promise |

Five rules account for most of the gap between these sections on a strong site and on a template.

**Specific beats styled.** In the side-by-side tests my CSS was usually within a few pixels of the real thing, and my section still looked like a mock-up. The difference was content. Real plans list seven lines, not four. Real rows say a rate, a limit, a per-seat price and a condition. Real questions are the awkward ones. Write the true numbers and limits first, then build. If you do not have them, ask, because vague copy in a precise layout reads as fake.

**Stay in the page's system.** The template instinct is to end a page with a new kind of surface. Strong sites do the opposite. Of the closing sections we counted, 35 percent of gold rows end on the page's own ground with no fill, against 21 percent of all rows, and only 10 percent of gold rows use a loud panel or band, against 24 percent of all rows. Keep the same type, radius and rules that the rest of the page uses.

**One filled button per decision.** On Cursor's plans every button is a grey pill except one. On Linear's close, one pill is bright and one is barely there. A filled button means "this one". Two filled buttons mean nothing.

**Say what happens next.** Billing period, trial length, whether a card is needed, how often the email comes, when a person replies. These small lines do more for conversion than any decoration, and they make a section read as written by someone who runs the business.

**Controls must be real.** Use a real `<table>`, real `<details>`, real labels, real focus states, real errors and a real success state. A pricing toggle that changes nothing, or a form with no focus ring, is a prop.

## Measured values

Button heights and closing headings were measured from computed styles. The rest are analyst readings, shown as p25 / median / p75 with the number of rows that stated a value.

| Element | Thing | Value |
|---|---|---|
| Pricing | Price size | 26 / 36 / 50px (22) |
| Pricing | Plan column width | 304 / 370 / 500px (27) |
| Pricing | Card radius | 10 / 12 / 20 (41) |
| Pricing | Gap between cards | 9 / 16 / 24 (15) |
| Pricing | Card padding | 24 / 24 / 32 (8) |
| Pricing | Button height, measured on 42 pricing pages | 33 / 40 / 44px (444 buttons) |
| Comparison | Row height | 53 / 59 / 72px (12) |
| Comparison | Label column | 230 / 244 / 252px (5) |
| FAQ | Question size | 14 / 16 / 20px (69) |
| FAQ | Row pitch | 57 / 73 / 89px (65) |
| FAQ | Column width | 632 / 712 / 853px (70) |
| Closing CTA | Last heading on the page, measured | 36 / 47 / 56px on 113 pages, 36 / 48 / 64px on 57 gold pages, weight 400 to 600 |
| Contact | Input height | 38 / 44 / 46px (15) |
| Contact | Input and card radius | 6 / 8 / 10 (23) |
| All | Section padding, gold, measured | 80 / 96 / 128px |

Hover behaviour was measured on 516 sites. Main buttons change on 78 percent of sites, mostly by fill, in 150 to 300ms with a median of 200. Rows change on 50 percent of sites, usually by text colour (58 percent of those that change) or fill (33 percent). Plain `ease` is the most common curve by a wide margin. A row needs no animation beyond that.

How closing sections are grounded, by rows:

| Ground | All rows | Gold rows | Mean score |
|---|---|---|---|
| Page ground, no fill | 21% | 35% | 3.95 |
| A working object: field, download, routes, product | 16% | 20% | 4.03 |
| Photo or film | 12% | 14% | 3.83 |
| Loud panel or band | 24% | 10% | 3.81 |
| Quiet panel | 7% | 7% | 3.86 |
| Art or character | 11% | 6% | 4.27 |
| Light effect | 3% | 3% | 4.17 |
| Other, such as a footer overlap | 6% | 4% | 4.09 |

Read that table as a warning about the big coloured band. It is the most common choice overall and it is not where the best sites go. Art scores highest, because analysts only tagged it when it was good. It is also the hardest to do.

How FAQs hold their rows:

| Held by | Share of rows | Mean score |
|---|---|---|
| Rules only | 69% | 3.95 |
| Tone tiles | 12% | 4.00 |
| Panels and lifted rows | 8% | 3.89 |
| Outlined boxes | 10% | 3.64 |

---

## Pricing table

A pricing section must let a stranger find their plan in under a minute and believe the number. What separates great from cheap is not the container. Great pricing is dense, specific and aligned: every plan's price, button and list starts on the same line, each list says only what is new, and limits are written as numbers. Cheap pricing is three puffy cards with four vague ticks, a giant price, and a "popular" card that has a border, a shadow, a scale and a badge all at once.

Read these before you pick a variant, because they apply to all of them.

**The anatomy is nearly fixed.** Name, price with a small unit, one line saying who it is for, button, a lead-in line, then the list. Keep that order, and keep every plan in step.

**The price is small.** The median is 36px, and most sit between 26 and 50. Vercel goes to 56. A figure of 80px belongs only to a [single offer](#single-offer-split-card). Set the unit at 13 to 15px in `--ink-2` on the baseline, and use `font-variant-numeric:tabular-nums` so prices do not shift when billing changes.

**Lists are cumulative.** Nine of the sixteen tiered pricing pages we opened use "Everything in Free, plus:" and then list only the additions. That shortens every card and makes the upgrade obvious. Make lists six to eight lines long.

**Choose the button position by list length.** When the list is long, put the button above it, as on Cal.com, Cursor, Claude and ElevenLabs, because a button below the fold cannot be pressed. When the list fits on one screen, pin it to the base with the same alignment across plans, as on Vercel, Zed and Replit.

**Recommend with one device.** From quietest to loudest: one filled button (Cursor), a small tag (Vercel, Attio), a tone step (Zed, Vercel), colour alone (Neon), an inverted card (Cal.com), a raised column (Raycast, Supabase). Use one, or two of the quiet ones. Only 8 of 66 rows mention a popular tag at all, and Claude and Polar recommend nothing, which reads as respect for the reader.

**Let the enterprise column hold the grid.** Set "Custom" at the same size as the prices, as Vercel, Cal.com and Attio do, so the row of figures stays intact.

**Keep the toggle honest.** A monthly and annual control is a 32 to 36px segment with a small saving chip. Reserve the billing line under each price so switching causes no shift.

Align rows across plans with subgrid, not with fixed heights, because copy will change.

```css
.plans{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,auto)}
.plan{display:grid;grid-row:span 5;grid-template-rows:subgrid}   /* name+price, fit, lead, list, button */
@media(max-width:860px){.plans{grid-template-columns:1fr;grid-template-rows:none}.plan{grid-row:auto;grid-template-rows:none}}
```

Draw ticks in CSS so they take the palette and stay thin. Size any inline `svg` you use, because an unsized icon renders at full width.

```css
.list li{position:relative;padding-left:22px}
.list li::before{content:"";position:absolute;left:1px;top:.42em;width:10px;height:5px;border:solid var(--ink-2);border-width:0 0 1.3px 1.3px;transform:rotate(-45deg)}
.list li:has(svg){display:flex;gap:10px;padding-left:0}   /* an icon per feature replaces the tick */
.list li:has(svg)::before{content:none}
```

On phones, stack the plans in one column, keep the recommended plan's treatment, and keep the whole list open. Cal.com, Vercel, Attio and Claude all do this. Raycast's plan-level segmented control survives on phones because it sits inside the card.

<!-- v:section.pricing-table/ruled-plan-grid -->
### Ruled plan grid

*Feeling: one instrument, read left to right.*

All plans sit in one frame and share their rules, so the section reads as a single object and the reader compares instead of browsing. Use it for developer tools, infrastructure and anything serious. Skip it when plans differ in kind rather than degree.

Build a 1px gap on a line-coloured parent, which gives shared rules that can never double. Use 32px padding, a 14px name, a 48 to 56px price, a muted one-line fit, and a hairline. Vercel puts a tiny tag beside the name and the list on 16px line icons, with one filled pill at the base. Neon uses mono caps names and dashed rules between feature groups. Sanity swaps the frame for dotted rules between dot-matrix edge fields. GitHub adds a 2px accent rule above a mono "recommended" header. Webflow detaches a fourth plan by 32px on a tinted fill, which splits self-serve from sales without a word.

**Seen on** Vercel Pricing, Sanity Pricing, GitHub Pricing, Hugging Face Pricing, Webflow Pricing, 6 pages in all. **Suits** light precision, dark precision; developer tools, SaaS, AI. *6 pages, quality 5.*

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

<!-- v:section.pricing-table/hairline-plan-cards -->
### Hairline plan cards

*Feeling: plain, clear, a little formal.*

The most common strong answer: separate cards with a 1px line and no shadow. It is the safest choice, and detail decides whether it is quality or template, so spend effort on the content. Use it for three to five plans with long lists.

Set a gap of 16 to 32, radius 4 to 24, padding 24 to 32, name, a 30 to 36px price, fit, full-width button and ticks at 30 to 36px pitch. The range is wide: Zed runs 4px radius, mono text, a display-face price in its accent and pale blue on the pro card only, which analysts missed as a transparent card. Claude runs 24px radius with a small illustrated glyph per plan and no recommended plan at all. Attio sits 20px cards on a faint drafting grid with small crosses at the outer corners. Devin uses five narrow cards with 32px grey names and mono chips.

**Seen on** Zed Pricing, Devin Desktop, Attio Pricing, Claude Pricing, Tailscale Pricing, 7 pages in all. **Suits** light precision, mono technical, warm neutral, illustrated; developer tools, AI, SaaS, health. *7 pages, quality 5.*

<!-- v:section.pricing-table/tonal-plan-cards -->
### Tonal plan cards

*Feeling: calm, expensive, sure of itself.*

No border, no shadow, one tone step. Warp goes further and sets white cards on a page one percent off white. Use it on warm or quiet pages. The whole design is the buttons: grey pills on every plan and one solid ink pill. Do not add a badge louder than that button.

Set a gap of 8 to 10, radius 4 to 16, padding 16 to 24, a 20px name, a 32px price at weight 400, a 36 to 38px pill, then a lead-in, a large usage metric at 22px, and feature groups under small rules. Cursor's metric row is the trick worth stealing: it says how much you get before it lists what you get. Replit tints each card in its own pale hue, which works because the hues are close.

**Seen on** Warp Pricing, Cursor Pricing, Replit Pricing. **Suits** warm neutral, light precision; developer tools, AI. *3 pages, quality 5.*

```css
.plans{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto auto auto auto 1fr auto;gap:0 10px}
.plan{display:grid;grid-row:span 6;grid-template-rows:subgrid;padding:16px 16px 24px;background:var(--surface);border-radius:4px;
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 5%,transparent)}
.row1{display:flex;justify-content:space-between;align-items:center;font-size:20px}
.price{font-size:32px;line-height:1.15;letter-spacing:-.02em;margin-top:8px;font-variant-numeric:tabular-nums}
.price small{font-size:13px;letter-spacing:0;color:var(--ink-2);margin-left:2px}
.go{display:flex;align-items:center;justify-content:center;height:38px;margin-top:14px;border-radius:19px;font-size:14px;font-weight:500;
  background:color-mix(in srgb,var(--ink) 7%,transparent);transition:background .15s}
.go.on{background:var(--ink);color:var(--bg)}   /* the only filled button is the recommendation */
.lead{font-size:13px;color:var(--ink-2);margin-top:18px}
.metric{font-size:22px;letter-spacing:-.01em;line-height:1.2;padding-bottom:16px}
.metric small{display:block;font-size:13px;letter-spacing:0;line-height:1.5;color:var(--ink-2)}
.grp{font-size:13px;color:var(--ink-2);padding-bottom:6px;border-bottom:1px solid var(--line);margin-bottom:8px}
.grp.two{margin-top:18px}
.list{font-size:13.5px;line-height:21px;display:grid;gap:2px;align-content:start}
@media(max-width:1020px){.plans{grid-template-columns:repeat(2,1fr);grid-template-rows:none;gap:10px}.plan{grid-row:auto;grid-template-rows:none}}
@media(max-width:620px){.plans{grid-template-columns:1fr}}
```

<!-- v:section.pricing-table/one-inverted-plan -->
### One inverted plan

*Feeling: decisive.*

One card flips to solid ink and its button to white. That single change does the work of a badge, a border and a shadow together, and it survives on phones. Cal.com keeps type and structure identical across all four cards, which is why it holds together. Levels runs white, tint, black across three, stepping up in weight. Do not use it on a dark page, where the card disappears, and do not invert the free plan.

**Seen on** Cal.com Pricing, Levels, Ян Козлов. **Suits** light precision; health, SaaS. *3 pages, quality 4.*

<!-- v:section.pricing-table/raised-plan-column -->
### Raised plan column

*Feeling: an object stepping forward.*

Plans share a shell, and one column breaks its top and bottom edge by 16 to 32px. The broken edge lifts it, so no shadow is needed. Raycast fills the column one tone lighter, with a 24px title against 20px. Supabase gives it a 2px outline and a small tag. Bear puts a flat free column next to a raised pro card and strikes through what the free plan lacks. Use it where a tier really is the default for most readers.

**Seen on** Raycast Pricing, Supabase Pricing, Bear. **Suits** dark precision, light precision, illustrated; SaaS. *3 pages, quality 4.*

<!-- v:section.pricing-table/signal-only-featured -->
### Signal-only featured plan

*Feeling: quiet confidence.*

The featured plan has no lift, no border and no badge. Neon gives it an accent mono label, the only white filled pill, accent square bullets and brighter text, and that is enough. Hawl fades the card's base toward a plum and sets its price in the accent. This is the best recommendation for a dark ruled grid, and the lesson travels: emphasis can be a colour budget rather than a shape.

**Seen on** Neon Pricing, Hawl Design. **Suits** dark precision; SaaS, agency. *2 pages, quality 5.*

<!-- v:section.pricing-table/pane-window-plans -->
### Pane window plans

*Feeling: the plans are part of the product.*

The whole table is built as an application window: a title row with the logo at left and a muted line at right, then panes in a milled shell. Polar uses radius 16, padding 4 and panes of radius 12, exactly outer minus gap. Each pane holds a 20px name with a muted audience note, a 30px price, one fee row, a hairline and ticks pinned to the base, with empty space in the middle on purpose. There are no buttons per plan, because the rate is the story. My rebuild matched closely with no changes, so this one is mostly discipline. Use it on dark product pages where one number differs by plan.

**Seen on** Polar. **Suits** dark precision; SaaS. *1 page, quality 5.*

```css
.shell{--r:16px;--p:4px;background:color-mix(in srgb,var(--ink) 3%,var(--bg));border-radius:var(--r);padding:var(--p);
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 4%,transparent),0 24px 60px -24px rgba(0,0,0,.8)}
.bar{height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;font-size:14px}
.bar small{font-size:12px;color:var(--ink-2)}
.panes{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--p)}
.pane{background:var(--surface);border-radius:calc(var(--r) - var(--p));padding:24px;min-height:372px;display:flex;flex-direction:column}
.head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:20px;letter-spacing:-.01em}
.head small{font-size:12px;letter-spacing:0;color:var(--ink-2);white-space:nowrap}
.price{font-size:30px;line-height:1.2;letter-spacing:-.02em;margin-top:18px;font-variant-numeric:tabular-nums}
.fee{display:flex;justify-content:space-between;font-size:14px;color:var(--ink-2);margin-top:18px;font-variant-numeric:tabular-nums}
.fee b{font-weight:400;color:var(--ink)}
.list{margin-top:auto;border-top:1px solid var(--line);padding-top:18px;display:grid;gap:10px;font-size:14px}
.price small{font-size:14px;letter-spacing:0;color:var(--ink-2);margin-left:4px}
@media(max-width:1020px){.panes{grid-template-columns:repeat(2,1fr)}}
@media(max-width:620px){.panes{grid-template-columns:1fr}.pane{min-height:0}.list{margin-top:32px}}
```

<!-- v:section.pricing-table/plan-sheet-with-strips -->
### Plan sheet with strips

*Feeling: a printed rate sheet.*

Mercury wraps all plans in one 1024px white sheet at about 12px radius. A top strip carries a caps title and the annual toggle, three columns split by hairlines, and a tinted bottom strip holds a single upsell with an arrow. Add-on rates sit in the list with their conditions. Use it for finance and anything that wants to look like a document you could sign.

**Seen on** Mercury Pricing. **Suits** light precision; finance. *1 page, quality 4.*

<!-- v:section.pricing-table/header-tile-plans -->
### Header tile plans

*Feeling: tickets above a list.*

The column opens with a distinct tile holding the name and price, and the list runs open on the page beneath it. This keeps a long list light, because only the top is a surface. ElevenLabs uses paper-grain tiles of about 262 by 200, with one in a grain gradient for the pick. Dub uses a tinted card inset 8px with the button inside it. OpenAI uses a 164px black block over a white body. Lindy changes a mascot per tier, and Massugu shows the real card art. Pair it with a list on dotted rules.

**Seen on** ElevenLabs Pricing, OpenAI API Pricing, Lindy, Massugu Hungary, Dub Pricing. **Suits** light precision, warm neutral; AI, ecommerce, SaaS. *5 pages, quality 4.*

<!-- v:section.pricing-table/single-offer-split-card -->
### Single offer split card

*Feeling: one honest offer.*

One product, one price, one card. This is the only place a large price belongs. Function Health sets a 1088 by 426 cream card with a label, a 40px name, an 80px price with a 24px unit, a muted billing line, a 50px pill, a vertical rule, then nine ticks at 36px pitch. Stripe Sessions carries a ticket the same way, with a tinted inset panel holding the price and a struck original. Use it for memberships, tickets and courses. My first version had seven ticks and felt thin next to nine, so fill the right column to match the left.

**Seen on** Stripe Sessions, Function Health, Jurafuchs, Framify. **Suits** warm neutral, gradient light, light precision; brand, health, education, ecommerce. *4 pages, quality 5.*

```css
.card{display:grid;grid-template-columns:1fr 1px 1fr;gap:56px;padding:56px;background:var(--surface);border-radius:24px;border:1px solid var(--line);
  box-shadow:0 30px 60px -36px color-mix(in srgb,var(--accent) 34%,transparent)}
.rule{background:var(--line)}
.card h2{font:400 40px/1.1 var(--font-display);letter-spacing:-.015em}
.price{font:400 80px/1 var(--font-display);letter-spacing:-.03em;margin-top:44px}
.price small{font:400 24px/1 var(--font-text);letter-spacing:0;color:var(--ink-2);margin-left:4px}
.note{font-size:14px;color:var(--ink-2);margin-top:8px}
.go{display:flex;align-items:center;justify-content:center;height:50px;border-radius:25px;margin-top:32px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:600}
.list{align-self:center}
.list li{display:flex;align-items:center;gap:10px;min-height:36px;font-size:15px}
.list svg{flex:none;width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:1.2}
.flag{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--accent)}
.flag svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.5}
@media(max-width:860px){.card{grid-template-columns:1fr;gap:32px;padding:28px}.rule{height:1px}.price{font-size:64px}}
```

<!-- v:section.pricing-table/single-plan-leaders -->
### Single plan with leaders

*Feeling: an itemised receipt.*

Copilot sets each inclusion on a dotted leader with a mono status at the right, and items not yet shipped say so with a date. That admission is the persuasive part. Use it for a one-plan product with a roadmap.

**Seen on** Copilot. **Suits** gradient light; finance. *1 page, quality 4.*

<!-- v:section.pricing-table/single-price-statement -->
### Single price statement

*Feeling: nothing to compare.*

The price is a sentence or a figure in the flow of the page. Apple sets a price and a monthly option in two lines. AuthKit states the deal in the heading and sets a 32px figure with the overage rate at the right. Hibachi Guru shows a price per adult on a card beside a large heading. Use it when a grid would invent choices that do not exist.

**Seen on** Apple MacBook Pro, AuthKit, Aarretuote, Hibachi Guru. **Suits** photo-led, dark precision, light precision; brand, developer tools, ecommerce, local business. *4 pages, quality 3.*

<!-- v:section.pricing-table/twin-plan-pair -->
### Twin plan pair

*Feeling: this or that.*

Two cards, and emphasis comes from fill and button alone. DOT pairs a dark free card with a cream paid card. Khan Academy gives both the same bullets and changes only the border and button. It is the natural layout for consultants and small products, and it is easily generic, so keep the structure strict and let one card carry the colour.

**Seen on** DOT Audio Recorder, Khan Academy, Design by Illia, Brandrunnrs, Brand Identity School, 8 pages in all. **Suits** illustrated, bold colour, dark precision, warm neutral; education, SaaS, agency, other. *8 pages, quality 3.*

<!-- v:section.pricing-table/standard-vs-custom-pair -->
### Standard and custom pair

*Feeling: pay as you go, or talk to us.*

Stripe's pair is the clean answer to usage pricing: a white card with the rate in a tinted panel inset 4px, and a navy card with four stacked chips listing what custom covers. The inset panels repeat the same gap, which ties two different cards together.

**Seen on** Stripe Pricing, Parsley Health, Orbit Design. **Suits** light precision, warm neutral; finance, health, agency. *3 pages, quality 4.*

<!-- v:section.pricing-table/price-list-rows -->
### Price list rows

*Feeling: a printed list at the door.*

Prices as rows of text in the column. Are.na's three rows hold a chevron, a small glyph, a bold plan and a caption at left and a price at right, closed by a row that links to details, and it looks more confident than any card. Guggenheim and SFMOMA list admission as label and price with no rules or light ones. Stripe Atlas adds a tinted fee cell with a 1px accent left rule. Use it for museums, services, small products and fee schedules.

**Seen on** Stripe Atlas, Guggenheim Visit, Are.na, Golden Assisted, SFMOMA Visit. **Suits** light precision, gradient light, type-led, bold colour; culture, SaaS, local business. *5 pages, quality 4.*

<!-- v:section.pricing-table/usage-calculator -->
### Usage calculator

*Feeling: you set the price.*

When price depends on volume, a flat table lies, so give the reader the control. Plausible places a 600px slider with a value tooltip above four cards. PostHog lists products at left with running totals and sliders at right, closing on an estimated total and a button. Webflow embeds a small underlined select inside a feature row, so the price updates in place. Keep the free tier visible, show per-unit rates, and hold layout still as numbers change.

**Seen on** Plausible, Webflow Pricing, PostHog Pricing. **Suits** light precision, expressive; SaaS. *3 pages, quality 5.*

<!-- v:section.pricing-table/plan-cards-on-colour-field -->
### Plan cards on a colour field

*Feeling: energetic.*

White or lifted cards on a saturated or dark field. UploadThing sets white cards with red ticks on near-black red. Otter sets navy cards on a cobalt band with faint light beams. Betterment raises its centre card 139px on a huge radial sun. Use it where the brand is colour-led. Dense lists suffer, since the field competes with them.

**Seen on** Betterment, UploadThing, Otter. **Suits** bold colour, gradient light; finance, developer tools, SaaS. *3 pages, quality 3.*

<!-- v:section.pricing-table/plan-link-tiles -->
### Plan link tiles

*Feeling: pick a door.*

Revolut's tiles hold a name, price and line with one arrow, and the whole tile links away. Comparison happens on the next page. Use it for consumer accounts and packages.

**Seen on** Revolut, Virtual Tour Montenegro. **Suits** photo-led, warm neutral; finance, local business. *2 pages, quality 3.*

<!-- v:section.pricing-table/flip-board-price -->
### Flip board price

*Feeling: a departure board.*

xtrackr makes the price the event: four split-flap tiles with a thin numeral crossing the split, flipping between monthly and yearly under a large text toggle. It belongs to one-price products with a hardware feel. Use it once, and only with a real reason to animate a number.

**Seen on** xtrackr. **Suits** dark precision; finance. *1 page, quality 4.*

### Mistakes that cheapen pricing

Each of these came from my own first attempts or the analysts' failure notes.

- **Lists too short.** My first ruled grid had four or five lines per plan, and next to Vercel's seven it looked like a wireframe. Six to eight real lines, with real limits.
- **A hole where the lead-in goes.** The first plan has no "Everything in" line. I filled it with a blank row, which left a visible gap. Let that plan's list rise into the row.
- **One group per plan.** My first tonal cards had one feature group. Cursor's run two or three, unevenly, and the uneven length is what makes it look real. Do not pad lists to match.
- **Buttons off the line.** One blurb wraps and every button below it drops. Use subgrid.
- **A price that shouts.** 72px in a 300px card reads as a discount flyer. Stay near 36.
- **The stacked "popular" card.** Border, shadow, scale, badge and accent button at once. One device is enough.
- **Ticks that weigh more than the words.** Filled green circles on every line turn a list into a pattern. Use 12 to 16px thin strokes in ink, or an icon per feature as Vercel does.
- **Repeating lines across plans.** Listing the free features again under each paid plan buries the reason to upgrade.
- **Vague lines.** "Advanced analytics" says nothing. "90 days of history" says something.
- **Two filled buttons in a row of plans.** Then neither is a recommendation.

---

## Comparison table

A comparison table must answer one question fast: does this plan have the thing I need, and what does it cost me to get it? It is the most used object on a pricing page and nobody admires it. What separates great from cheap is restraint with marks and honesty with values. Great tables are quiet, with thin rules, a mark that is barely there, and real values such as limits, rates and "by seat tier" mixed in with the ticks. Cheap tables are green circles and red crosses in a heavy grid, with every cell a tick, so that nothing is learned.

Keep these for every matrix.

**Use a real table.** `<table>`, `<th scope="col">`, `<th scope="row">`. Screen readers depend on it, and it costs nothing.

**Stick the header.** Ten of the top tables pin plan names, and often a price and a small button, directly under the nav, so the reader never loses the column. Set `position:sticky;top:<nav height>` on the `thead th` cells. Sticky stops working inside any ancestor with `overflow` set to `auto` or `hidden`, so at desktop use `overflow-x:clip` or none. That bug is why so many tables lose their header.

**Use the corner.** The empty top-left cell is real estate. Vercel and Claude put a search field there, Attio a billing toggle, Mercury an "expand all" pill, Cal.com a plain label. My first attempt had a dead caption in it, and it was the first thing that looked cheap beside Attio.

**Make "no" quiet.** Absence was a dash in 7 rows, a cross in 7, a dot in 4 and blank in 1. A muted dash is the default. A cross is right only when the cross is the argument, in a column for a rival.

**Mix ticks with values.** Write "Up to 40", "$0.50 per 1M" or "30 days" wherever a tick would hide a limit. Set partial values in `--ink-2` so the eye reads them as lesser.

**Explain the labels.** A dotted underline on Warp, a small dot after the label on Attio, and a 12 to 16px info glyph elsewhere all open a tooltip.

**Rhythm.** Rows of 53 to 72px, 14px text, 244px label column, group titles at 16 to 22px with 44 to 50px above. Hover tints a row by 2 to 7 percent of ink, which helps eyes cross long rows.

On phones, the label column should stay and plans should scroll. Set `overflow-x:auto` at phone width only, make the first column sticky left, and let the next plan be cut by the edge as the scroll cue. The header cannot also stick to the viewport inside that scroller, so repeat plan names at each group if the table is long.

<!-- v:section.comparison-table/sticky-plan-header-matrix -->
### Sticky plan header matrix

*Feeling: a contract you can read.*

The standard, and rightly so. Seven of the gold pages use it. Use it whenever a plan table has more than ten rows.

Set a label column of 244 to 320px, equal plan columns, rows of 53 to 66px, 1px rules at 8 percent ink and 14px text. The sticky header runs 100 to 190px tall and repeats name, price and a 28 to 40px button. Details vary across sites and each is worth taking: Cursor's 28px pills are dark on two columns only, Supabase adds a 32px icon tile per group, GitHub tints the hovered row, Sanity uses dotted rules with a black rule above each group, Warp underlines tooltip labels in dots, and Dub bolds the number inside the phrase. Attio tints the recommended column full height, which is the easiest way to keep a place in a wide table.

**Seen on** Warp Pricing, Cursor Pricing, Vercel Pricing, Attio Pricing, Claude Pricing, 10 pages in all. **Suits** light precision, warm neutral; developer tools, SaaS, AI. *10 pages, quality 5.*

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

<!-- v:section.comparison-table/vertical-rule-matrix -->
### Vertical rule matrix

*Feeling: columns, not rows.*

Cal.com removes every row rule and keeps 1px verticals between plans, with a 48px pitch, muted labels, 20px filled checks and a blank cell for no. Rules break at each group, whose heading is 22px bold with a collapse chevron. Use it when most cells are ticks: blanks read fast, and the staircase of checks shows what each plan adds. It fails with long text values, since nothing guides the eye along a row.

**Seen on** Cal.com Pricing. **Suits** light precision; SaaS. *1 page, quality 5.*

```css
.grid{display:grid;grid-template-columns:minmax(200px,1.5fr) repeat(4,1fr)}
.h{padding:0 0 28px;text-align:center}.h.first{text-align:left;font:800 22px/1.2 var(--font-display)}
.h b{display:block;font:800 22px/1.2 var(--font-display)}.h span{display:block;font-size:14px;color:var(--ink-2);margin-top:2px}
.h a{display:inline-flex;align-items:center;justify-content:center;height:32px;width:min(180px,90%);margin-top:12px;border-radius:9px;background:var(--ink);color:var(--bg);font-size:13px;font-weight:600}
.g{grid-column:1/-1;display:flex;align-items:center;gap:8px;font:700 22px/1 var(--font-display);padding:48px 0 18px}
.l{height:48px;display:flex;align-items:center;font-size:15px;color:var(--ink-2)}
.v{height:48px;display:flex;align-items:center;justify-content:center;border-left:1px solid var(--line)}   /* verticals only */
.c{width:20px;height:20px;border-radius:50%;background:var(--ink);display:grid;place-items:center}
.c svg{width:12px;height:12px;fill:none;stroke:var(--bg);stroke-width:2}
.g svg{width:12px;height:12px;fill:none;stroke:var(--ink);stroke-width:2}
@media(max-width:860px){.grid{grid-template-columns:150px repeat(4,120px);overflow-x:auto}}
```

<!-- v:section.comparison-table/group-rhythm-matrix -->
### Group rhythm matrix

*Feeling: a long list that does not tire.*

Vercel drops row rules altogether and draws a hairline only between groups, trusting even spacing to carry the eye. Group titles are 14px/500 in ink and children 14px/400 in muted ink. Cursor marks groups with a 16px line icon in a row that looks like any other. Use it when the table passes 60 rows, where a rule on every row turns into stripes.

**Seen on** Vercel Pricing, Cursor Pricing. **Suits** light precision, warm neutral; developer tools, AI. *2 pages, quality 5.*

<!-- v:section.comparison-table/dot-for-no-matrix -->
### Dot for no

*Feeling: nothing here is a failure.*

Raycast marks absence with a 5px grey dot, never a cross, on a dark grid of 6 percent white rules, and splits groups with 8px bands of a lifted tone. Row labels can hold a muted list of what is inside. Use it for a dark product page.

**Seen on** Raycast Pricing. **Suits** dark precision; SaaS. *1 page, quality 5.*

<!-- v:section.comparison-table/bordered-matrix-show-all -->
### Bordered matrix with show all

*Feeling: an honest benchmark.*

Bun compares itself against rivals in a framed table with a logo per column, mono group rows and inline code in the notes. Tinted status circles of 28px show yes, partial and no. A pill caps the table at a sensible length and reveals the rest, which keeps a long page moving while proving nothing is hidden.

**Seen on** Bun. **Suits** mono technical; developer tools. *1 page, quality 5.*

<!-- v:section.comparison-table/collapsed-category-accordion -->
### Collapsed category accordion

*Feeling: ask and you shall receive.*

Mercury hides the matrix behind eleven category rows, with an "expand all" pill in the sticky corner. The page stays short, and a reader who cares about one area opens one row. Use it for tables over 100 rows, and keep the plan header sticky.

**Seen on** Mercury Pricing. **Suits** light precision; finance. *1 page, quality 4.*

<!-- v:section.comparison-table/tabbed-category-table -->
### Tabbed category table

*Feeling: one product at a time.*

ElevenLabs picks a feature set by scrolling pill tabs and right-aligns numeric values, with dotted rules inset per cell so column edges survive. Tailscale tabs by category with dense 36px rows. Use it when products within a plan are so different that one table would never end.

**Seen on** ElevenLabs Pricing, Tailscale Pricing. **Suits** warm neutral, light precision; AI, developer tools. *2 pages, quality 4.*

<!-- v:section.comparison-table/tinted-featured-column -->
### Tinted featured column

*Feeling: follow this line.*

One column carries a tone from header to foot. Neon tints it near-black with side borders on a darker page. Hotjar gives it a deep header cell and a pale pink body, with zebra rows on the other columns and small multiplier pills beside numbers. Forma24 lights its own column on a dark photo. It is the simplest way to say "we win" without a slab.

**Seen on** Forma24, Neon Pricing, Hotjar. **Suits** dark precision, light precision; SaaS, agency. *3 pages, quality 5.*

<!-- v:section.comparison-table/winner-slab-column -->
### Winner slab column

*Feeling: not a close contest.*

For you against a rival, or against the old way. One solid column overshoots the rows top and bottom. Talkspace runs a 204px flat accent column with white ring checks, and Function Health a 219px gradient column that breaks out of a tinted panel with a logo tab on top. Row rules pass behind the slab, which is what makes it sit above the table. Keep rows under ten, or the claim feels forced.

**Seen on** Function Health, Talkspace. **Suits** warm neutral, soft pastel; health. *2 pages, quality 5.*

```css
.t{position:relative;display:grid;grid-template-columns:1fr 204px 160px;isolation:isolate}
/* one element behind the grid, so it can overshoot the rows */
.t::before{content:"";position:absolute;z-index:-1;top:-40px;bottom:-32px;right:160px;width:204px;background:var(--accent);border-radius:2px}
.hd{height:56px;display:flex;align-items:center;justify-content:center;font:400 22px/1 var(--font-display);color:var(--bg)}
.hd.o{font:500 15px/1 var(--font-text);color:var(--ink)}
.lab,.me,.ri{height:75px;display:flex;align-items:center;font-size:15px;font-weight:600;border-bottom:1px solid color-mix(in srgb,var(--accent) 22%,transparent)}
.lab{gap:8px}.me,.ri{justify-content:center}
.me{border-bottom-color:color-mix(in srgb,var(--bg) 30%,transparent)}
.me svg,.ri svg{width:30px;height:30px;fill:none;stroke-width:1.6}
.me svg{stroke:var(--bg)}.ri svg{stroke:color-mix(in srgb,var(--accent) 45%,var(--bg))}
.t>:nth-last-child(-n+3){border-bottom:0}
@media(max-width:700px){.t{grid-template-columns:1fr 84px 76px}.t::before{right:76px;width:84px}.lab,.me,.ri{height:auto;min-height:72px;font-size:14px;padding-block:8px}}
```

<!-- v:section.comparison-table/own-row-highlight -->
### Own row highlight

*Feeling: one number lit in a dark room.*

Public keeps a small rate table in a dark feature cell, with rivals in 12px grey, and frames its own row in the accent with a dark tint and the number lit. Nothing else on the table has colour. It is a comparison the reader finishes in one glance, and it fits inside a feature cell rather than needing a section.

**Seen on** Public. **Suits** light precision; finance. *1 page, quality 5.*

<!-- v:section.comparison-table/before-after-pair -->
### Before and after pair

*Feeling: the old way, crossed out.*

Two columns with no grid. Soundsensing strikes through every "before" line at half white on a blurred photo, with the "after" lines at full white. Magram uses the same device as a qualifier: a white panel of who the service is for, and a tan panel of who it is not for, every line struck through. Prisma puts a muted card beside one with a gradient keyline. Strikethrough does what a whole table would do, so keep the lines short.

**Seen on** Soundsensing, Prisma, Magram. **Suits** gradient light, photo-led, light precision; developer tools, SaaS, agency. *3 pages, quality 4.*

<!-- v:section.comparison-table/cost-bars -->
### Cost bars

*Feeling: the gap is absurd, and you can see it.*

Length is the argument. Better Stack shows a full-width bar beside a single 12px dot, with three shared facts above and fine print below. Ultrahuman adds a one to three year toggle above two bars. Hawl compares a full-time hire with a subscription, the second bar dissolving at its right edge. Always publish the assumptions, because this claim invites a check. My rebuild matched the frame on the first attempt, because the device is that simple.

**Seen on** Better Stack, Ultrahuman, Hawl Design. **Suits** dark precision, light precision; developer tools, health, agency. *3 pages, quality 5.*

```css
.card{background:var(--surface);border-radius:14px;box-shadow:0 0 0 1px var(--line);padding:24px}
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border-radius:8px;overflow:hidden}
.facts div{background:var(--surface);padding:12px 14px;font-size:13px;color:var(--ink-2)}
.facts b{display:block;font-size:18px;font-weight:500;color:var(--ink);font-variant-numeric:tabular-nums}
.line{margin-top:24px}
.line p{display:flex;justify-content:space-between;font-size:14px;color:var(--ink-2)}
.line p b{font-size:22px;line-height:28px;font-weight:500;color:var(--ink);font-variant-numeric:tabular-nums}
.bar{margin-top:8px;height:12px;border-radius:6px;background:color-mix(in srgb,var(--ink) 16%,transparent)}
.bar.us{width:12px;background:var(--accent)}   /* the scale gap is the whole argument */
.fine{font-size:12px;line-height:1.5;color:var(--ink-2);margin-top:20px;max-width:60em}
```

<!-- v:section.comparison-table/rate-card-rows -->
### Rate card rows

*Feeling: a fee schedule from a good bank.*

Stripe's product card pairs a description with a tinted rate cell on each row, split by dashed lines, because a rate needs a sentence and conditions rather than a tick. Stripe's docs use three labelled columns with one "recommended" pill and rating dots. Use it for usage fees and developer choices.

**Seen on** Stripe Pricing, Stripe docs. **Suits** light precision; finance. *2 pages, quality 5.*

<!-- v:section.comparison-table/option-cards -->
### Option cards

*Feeling: pick a format.*

Equal cards side by side with the recommended one tinted. Ripple compares three approaches and tints the last, edX lays out four learning formats with facts in grey rows. It is fine for consumers and thin as an argument. If options differ on three or more shared attributes, a real table is clearer.

**Seen on** Ripple Health, edX, Synthesis. **Suits** bold colour, warm neutral; education, health. *3 pages, quality 3.*

<!-- v:section.comparison-table/plain-reference-table -->
### Plain reference table

*Feeling: a page in a manual.*

A grid on every cell, a tinted header, compact rows. Zed's keybinding table holds keyboard chips. It carries no persuasion, and that is right for specs, shortcuts and fees. Do not dress it up.

**Seen on** Zed Docs, Felix Gray, Thrivent. **Suits** light precision, mono technical; developer tools, ecommerce, finance. *3 pages, quality 3.*

<!-- v:section.comparison-table/compatibility-columns -->
### Compatibility columns

*Feeling: yes, yours is on the list.*

Apple answers "does it work with mine?" with three text columns of names on a tinted panel, with chevrons on the ones that link. A plain list replaces a table when there is only one attribute.

**Seen on** Apple Intelligence. **Suits** light precision; AI. *1 page, quality 4.*

### Mistakes that cheapen a comparison

- **A dead corner cell.** Mine held a caption. Attio's holds a control.
- **All ticks.** A table with no text values teaches nothing. Write the limit.
- **Green and red.** Coloured ticks and crosses make a traffic light. Use ink and a muted dash.
- **Rules in both directions at full strength.** That is a spreadsheet. Choose rows, columns or groups.
- **Sticky that silently fails.** An ancestor with `overflow:hidden`, often added to stop sideways scroll, turns sticky off.
- **Header and values on different axes.** Left-aligned names over centred ticks look fine when the button above is full width, as on Attio, and wrong when it is not. Align them or give the column a full-width button.
- **A fake rival.** "Competitor A" with all crosses convinces nobody. Name the category or the old way, and be fair on at least one row.
- **Squeezing on phones.** Five columns at 60px each break. Let it scroll with labels pinned.

---

## FAQ

An FAQ must remove the last objection in the reader's own words. Its design goal is to stay out of the way. What separates great from cheap is mostly the writing and then the row. Great questions are awkward and specific: what happens to my files if I cancel, can I pay by invoice, does a client need an account. Cheap questions are marketing in disguise: what is the product, why is it great. For the row, great FAQs are plain hairlines with a well-judged pitch and a question set like a real line of type. Cheap ones are boxes with drop shadows, a coloured chevron and a 14px question crammed into 44px.

Keep these for every FAQ.

**Rules are the default.** Rules hold 69 percent of rows. Tone tiles score as well but are rarer, and outlined boxes score lowest. Reach for a box only if the page is already square and printed.

**Size it as reading.** Column 640 to 860px, question 16px at weight 500 to 600, or 20px at 400 to 500. Pitch 57 to 89px. Dub and OpenAI set the FAQ narrower and taller than the table above it, which marks a slower mode of reading. Answers are 15 to 17px at 1.5 to 1.65 in `--ink-2`, under 36em.

**Plus or chevron does not matter.** Gold rows split 13 to 13. A plus suits a list of details, and a chevron suits a list that feels like navigation. Pick one and keep the stroke thin, 12 to 20px at 1 to 1.5px.

**Five to ten questions on the page.** Link out to the rest with a quiet line, as Function Health and Kiro do. PostHog's 17 flush rows are the exception, where density says candour.

**Close the loop.** End with one line that offers a person, or a final row that goes to an assistant, as Cal.com does. The reader has just told you they still have a question.

**Build on `<details>`.** It is accessible, searchable by the browser and needs no script. The `name` attribute makes rows exclusive. Open and close animate in current browsers and simply snap elsewhere.

```css
details{border-bottom:1px solid var(--line);interpolate-size:allow-keywords}
summary{display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:64px;padding-block:14px;cursor:pointer;list-style:none}
summary::-webkit-details-marker{display:none}
details::details-content{height:0;overflow:clip;transition:height .2s ease,content-visibility .2s allow-discrete}
details[open]::details-content{height:auto}
/* plus to minus: the vertical bar turns flat and lands on the horizontal one */
.t{position:relative;flex:none;width:16px;height:16px}
.t::before,.t::after{content:"";position:absolute;left:0;top:7.5px;width:16px;height:1px;background:var(--ink);transition:transform .2s}
.t::after{transform:rotate(90deg)}
details[open] .t::after{transform:rotate(0)}
/* a chevron alternative */
.ch{flex:none;width:16px;height:16px;fill:none;stroke:var(--ink);stroke-width:1.4;transition:transform .2s}
details[open] .ch{transform:rotate(180deg)}
```

```html
<details name="faq"><summary>What happens to my files if I cancel?<i class="t"></i></summary><div class="a">You keep read access for 90 days.</div></details>
```

Give each row an `id` so support can link to an answer. On phones a split layout stacks the title above the rows, row height stays at least 56px, and questions wrap to two lines without trouble.

<!-- v:section.faq/reading-column-rows -->
### Reading column rows

*Feeling: plain and helpful.*

The plainest treatment, and it works anywhere. Use it when the FAQ follows a centred page, or when a page is dense and needs to breathe. Warp runs a 944px column, a 50px heading aligned to the column's left edge and 61px rows. Claude runs 704px at 88px pitch with display-face questions, and this is where my first version looked weak: my questions were weight 400 and read faint beside their 500, so raise the weight when a text face sets the question. Raycast fades its rules out at both ends. Attio replaces the icon with a small grey `[+]`, a quiet developer detail. Kiro fills a 40 by 56px block behind the plus on hover.

**Seen on** Warp Pricing, Notion Calendar, Linear Changelog, Attio Pricing, Claude, 22 pages in all. **Suits** light precision, dark precision, illustrated, warm neutral; SaaS, developer tools, AI, finance. *22 pages, quality 4.*

```css
.wrap{width:min(704px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.wrap h2{font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;text-align:center;margin-bottom:56px}
.list{border-top:1px solid var(--line)}
.wrap summary{min-height:88px;padding-block:24px;font:500 20px/1.3 var(--font-display)}
.a{padding-bottom:28px;font-size:17px;line-height:28px;color:var(--ink-2);max-width:36em;text-wrap:pretty}
```

<!-- v:section.faq/split-title-rows -->
### Split title and rows

*Feeling: composed, unhurried.*

Heading alone at the left, rows in the right half. The empty column gives a dull section composure, and it keeps the section aligned with the page's grid instead of floating in the middle. This is the strongest default for product pages. Cursor sets it on a full-bleed tone band with rows from the centre line, 57px tall, between 1px rules at top and bottom. Tana adds a small action under the title. Devin pushes rows to x=517 and raises the pitch to 107px. Neon lifts product names to full ink inside muted answers, which makes a long answer skimmable. Stripe Billing uses dashed rules and a 28px tinted plus tile.

**Seen on** Cursor Pricing, Stripe Sessions, Devin Desktop, Tana, ElevenLabs Pricing, 18 pages in all. **Suits** warm neutral, light precision, dark precision, photo-led; AI, SaaS, finance, agency. *18 pages, quality 5.*

```css
.band{background:var(--surface);padding-block:96px}
.split{width:min(1200px,calc(100% - 48px));margin-inline:auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.split h2{font:400 36px/1.15 var(--font-display);letter-spacing:-.02em}
.list{border-top:1px solid var(--line)}
.split summary{min-height:57px;font-size:16px;font-weight:500;transition:color .15s}
.split summary:hover{color:color-mix(in srgb,var(--ink) 65%,transparent)}
.a{padding-bottom:20px;color:var(--ink-2);max-width:34em;text-wrap:pretty}
@media(max-width:860px){.split{grid-template-columns:1fr;gap:24px}.band{padding-block:64px}}
```

<!-- v:section.faq/split-title-with-art -->
### Split title with art

*Feeling: a page with a personality.*

The same split, with something owned under the title. Sailia sets a white line drawing on a blue band. Talkspace places an ink plant drawing on a pale band and sets the second word of its heading heavier. Hawl uses a 3D mascot, Yan Kozlov a tall photograph. It fills an awkward empty column well when you have real art. Do not fill it with stock.

**Seen on** Sailia, Ян Козлов, Talkspace, Hawl Design, Maximize, 6 pages in all. **Suits** bold colour, light precision, soft pastel, dark precision; health, agency, SaaS, ecommerce. *6 pages, quality 4.*

<!-- v:section.faq/tile-row-stack -->
### Tile row stack

*Feeling: soft, tappable.*

Each row is a tone tile, and rules vanish. Tiles suit soft product pages and phones, since the whole row is visibly a button. Cal.com runs radius 22, 76px rows, 20px/700 questions and a 36px white disc with a chevron, and lets long questions break into two balanced lines. Its last row asks anything else, with an arrow, and turns the FAQ into a way in. Soundsensing uses 68px rows at radius 8 and a 10px gap. Comet floats page-coloured rows with a soft shadow over faint orbit lines. Hold the gap under the row's padding so the stack reads as one object.

**Seen on** Soundsensing, Cal.com, Comet, Patricia Ordoñez, InkTree, 13 pages in all. **Suits** photo-led, light precision, warm neutral, dark precision; SaaS, AI, finance, portfolio. *13 pages, quality 4.*

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

<!-- v:section.faq/boxed-row-stack -->
### Boxed row stack

*Feeling: deliberate, a little industrial.*

Each row is an outlined box. Jasper is the best version: square corners, 32px display questions, 120px rows and a 36px sky-tinted square toggle. Function Health uses a 62px row with a white square button on a warm fill. Use it on printed or square systems. On a soft page, boxes add weight with nothing to show for it.

**Seen on** Jasper, Function Health, Forma24, Apétiti, Peloton, 11 pages in all. **Suits** warm neutral, dark precision, bold colour, illustrated; health, food and drink, SaaS, local business. *11 pages, quality 3.*

<!-- v:section.faq/numbered-index-rows -->
### Numbered index rows

*Feeling: an index you can cite.*

Numbers state the length and let a sales call refer to "question nine". Vercel runs a grey 20px index, a 20px question, no rules and a 6px hover fill across the row. ClickHouse puts the numeral in a grey cell behind a 1px divider. Cascara numbers 24 caps rows openly. Use `counter()` so numbers never go stale, and tabular figures so they align.

**Seen on** Vercel Pricing, ClickHouse, Definitiv Digital, Cascara Cabinet. **Suits** light precision, bold colour, dark precision, illustrated; developer tools, SaaS, food and drink. *4 pages, quality 4.*

```css
.idx{width:min(1296px,calc(100% - 48px));margin-inline:auto;padding-block:112px;display:grid;grid-template-columns:1fr 52%;gap:48px;align-items:start}
.idx h2{font:500 48px/1.05 var(--font-display);letter-spacing:-.035em}
.list{counter-reset:q}
.list details{counter-increment:q;border:0;border-radius:6px;transition:background .12s}
.list details:hover,.list details[open]{background:var(--surface)}
.list summary{display:grid;grid-template-columns:44px 1fr 16px;align-items:center;min-height:68px;padding:12px 14px 12px 12px;font-size:20px;letter-spacing:-.01em}
.list summary::before{content:counter(q,decimal-leading-zero);color:var(--ink-3);font-variant-numeric:tabular-nums}
.list .a{padding:0 44px 20px 56px;color:var(--ink-2)}
@media(max-width:860px){.idx{grid-template-columns:1fr;padding-block:72px}.list summary{grid-template-columns:36px 1fr 14px;font-size:17px}.list .a{padding:0 16px 16px 48px}}
```

<!-- v:section.faq/big-type-rows -->
### Big type rows

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

**Seen on** Rabbit, Telkom-OT, Lyra, Wealthfront, White Label IQ, 6 pages in all. **Suits** bold colour, mono technical, photo-led, illustrated; brand, other, health, finance. *6 pages, quality 4.*

<!-- v:section.faq/strong-control-rows -->
### Strong control rows

*Feeling: a firm ending to a soft page.*

Nurx sets 40px solid discs with a thin white plus at the end of each 88px row, and the control is the only heavy object. Symbol Studio keeps questions grey until hover and uses a 40px disc with an accent plus. A strong control reassures on health and consumer pages where the rest of the design is gentle.

**Seen on** Nurx, Symbol Studio. **Suits** photo-led, light precision; health, agency. *2 pages, quality 4.*

<!-- v:section.faq/hover-fill-rows -->
### Hover fill rows

*Feeling: quiet until touched.*

No dividers at all, or very light ones, and the row comes alive on hover. Bauhaus Clock lifts the hovered row into a soft panel at radius 25 on a 112px pitch. Replit fills a full-width row one step darker. Touch screens get none of this, so the row must still read as a row.

**Seen on** Bauhaus Clock, Replit Pricing. **Suits** light precision, warm neutral; SaaS, developer tools. *2 pages, quality 4.*

<!-- v:section.faq/open-document-faq -->
### Open document FAQ

*Feeling: nothing is hidden.*

Zed removes the accordion. Every answer is open, in a 670px left-aligned column with 22px display questions, 16/26 body and 34px between pairs, and a hash link appears in the margin on hover. Browser search works and support can link to a line. It says we have nothing to tuck away, which is the right tone for developer tools and billing detail. It needs answers worth reading. My rebuild matched at once, because the whole design is writing.

**Seen on** Zed Pricing. **Suits** mono technical; developer tools. *1 page, quality 5.*

```css
.doc{width:min(670px,calc(100% - 48px));margin-inline:auto;padding-block:96px}
.doc h2{font:400 32px/1.2 var(--font-display);letter-spacing:-.01em;margin-bottom:40px}
.doc article{margin-bottom:34px;scroll-margin-top:96px}
.doc blockquote{margin:0;padding-left:12px;border-left:2px solid var(--line);font-size:14px;line-height:22px;color:var(--ink-2);font-style:italic}
.doc h3{position:relative;font:400 22px/1.3 var(--font-display);margin-bottom:10px}
.hash{position:absolute;left:-32px;top:5px;width:20px;height:20px;border-radius:3px;background:var(--surface);color:var(--ink-3);font-size:12px;line-height:20px;text-align:center;opacity:0;transition:opacity .12s}
.doc h3:hover .hash,.hash:focus-visible{opacity:1}
.doc p{font-size:16px;line-height:26px;color:var(--ink-2);margin-bottom:12px;text-wrap:pretty}
.doc a{color:var(--accent)}
@media(max-width:760px){.hash{display:none}}
```

<!-- v:section.faq/two-pane-answer -->
### Two pane answer

*Feeling: a conversation.*

Questions at left, one answer at right. Wispr Flow shows the answer in a chat bubble inside a green and sand shell, so the FAQ demonstrates the product. Sonder uses a sand answer panel with a "1 / 8" counter and arrows. Limit it to eight questions, and turn it into a stacked accordion on phones.

**Seen on** Wispr Flow, Sonder. **Suits** warm neutral; SaaS, hospitality. *2 pages, quality 4.*

<!-- v:section.faq/category-grouped-faq -->
### Category grouped FAQ

*Feeling: sorted before you arrive.*

For long lists, group first. Webflow runs a 24px category in a 440px rail beside rows, repeating down the page. Claude Pricing uses tray tabs over a 640px column. 360Rides splits by audience with two coloured column heads. Prägen Hätlen nests categories in full-width mono rows that reveal a right column of questions. Use it past 12 questions or for two audiences.

**Seen on** Claude Pricing, Prägen Hätlen, Webflow Pricing, 360Rides, Framify. **Suits** light precision, warm neutral, 3D render, soft pastel; AI, brand, SaaS, other. *5 pages, quality 4.*

<!-- v:section.faq/two-column-all-visible -->
### Two column FAQ

*Feeling: compact.*

Noom sets two 610px columns of 44px rows, ten questions on one screen. Tailscale groups two columns under 24px headings. Use it for a low-priority FAQ late on a long page. An opened answer shifts one column only, so keep answers short.

**Seen on** Noom, Tailscale Pricing. **Suits** warm neutral, light precision; health, developer tools. *2 pages, quality 3.*

<!-- v:section.faq/compact-disclosure-rows -->
### Compact disclosure rows

*Feeling: fine print, well kept.*

Dense 40 to 48px rows for detail rather than persuasion. Brightland puts product detail, use and ingredients under the buy box in 14px caps. Whitney and LACMA list visit details in two columns. PostHog fits 17 questions in one window. Use it on product and visit pages.

**Seen on** Whitney Visit, Apple MacBook Air, Sanity Pricing, Brightland product, LACMA Visit, 7 pages in all. **Suits** light precision, warm neutral, type-led, expressive; culture, ecommerce, developer tools, SaaS. *7 pages, quality 3.*

<!-- v:section.faq/tinted-panel-faq -->
### Tinted panel FAQ

*Feeling: a reference card.*

The whole list sits in one panel. Casper's chevron discs turn navy when open, so state shows at a glance. Synthesis sets the only white sheet on a navy page. Use it when the page behind is busy.

**Seen on** Casper, Synthesis, Voice Tag Gods. **Suits** bold colour, type-led; ecommerce, education, brand. *3 pages, quality 3.*

<!-- v:section.faq/faq-beside-closing-cta -->
### FAQ beside the closing ask

*Feeling: one last doubt, then the button.*

motusmade puts its closing heading and pill in the left column and the questions at right, so the FAQ and the ask share a screen. It saves a section on short pages.

**Seen on** motusmade studio, Virtual Tour Montenegro. **Suits** light precision, warm neutral; agency, local business. *2 pages, quality 3.*

### Mistakes that cheapen an FAQ

- **Marketing questions.** "Why choose us?" is not a question anyone asks.
- **A faint question.** My 20px text-face question at weight 400 sat next to a 500 on the real page and looked washed out.
- **Row too tight.** 14px on a 44px pitch feels like a settings menu. Give it 57px or more, unless the list is deliberately compact.
- **A coloured chevron.** Controls in the accent draw the eye to the least important pixel. Keep them in ink.
- **Everything boxed and shadowed.** Rules do the job with less.
- **The first row open by reflex.** Nearly all top frames show every row closed. Open one only if it is truly the most common question.
- **A layout jump.** An instant open that pushes the page reads as broken. Animate height over about 200ms, or keep answers short.
- **No way out.** A reader who reached the end still has a question. Give them a person.

---

## Closing call to action

A close must do one thing: turn a reader who got to the end into a reader who acts, while sounding like the page they just read. What separates great from cheap is courage to stop. Great closes say one short sentence in the page's own type, offer one clear next step, and often need no surface at all. Cheap closes are a centred purple gradient band with "Ready to get started?", a sentence restating the hero, and two buttons of equal weight.

Keep these for every close.

**Default to the page's ground.** See the [ground table](#measured-values). Linear, Cursor, Polar, Vercel, Amplitude and Stripe Billing close with no fill. On a long page that has been busy for ten sections, plain space is already a change.

**Change one axis.** Polar's close is the only centred block on the page, so centring alone signals the end. Devin's rails stop at the close. Revolut's white band follows a black render. Find the one thing the page has not done, and do only that.

**Heading.** Measured median is 47px, gold 48px, and gold closes run to 64 and beyond. Keep it to two lines or one, in the page's display settings. Two-tone lines, with the first in `--ink-2` and the second in full ink, are the most common device on strong pages, on Polar, Devin and Supabase Launch Week.

**Say something.** The sentence should be specific to the product, not an invitation to begin. Better still, restate the page's promise in a new form.

**Buttons.** One filled and one quiet, 10 to 12px apart, 40 to 44px tall as measured, or one alone. Repeat the same label as the hero's primary button, so the reader recognises the same action. A short line under the button removes the last worry: no card, 30 days, cancel any time.

**Padding.** 130 to 230px around a plain close. A panel can be tighter, 72 to 120px inside.

**Join the footer.** The close and the footer are one composition. Run the same ground through both, as Linear and CleanShot do, or make the seam an event, as Loops does. A close followed by a differently coloured band and then a third colour for the footer looks like three templates.

On phones, stack the buttons at full width or side by side at equal width, reduce a 72px heading to 40 to 44px, and keep at least 96px of padding.

Every variant below uses this pair unless it says otherwise.

```css
.pair{display:flex;gap:12px;margin-top:32px}
.b{display:inline-flex;align-items:center;height:44px;padding:0 20px;border-radius:22px;font-size:15px;font-weight:500;transition:background .2s}
.b.p{background:var(--ink);color:var(--bg)}
.b.p:hover{background:color-mix(in srgb,var(--ink) 85%,var(--bg))}
.b.s{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 40%,transparent)}
.b.s:hover{background:color-mix(in srgb,var(--ink) 5%,transparent)}
```

<!-- v:section.cta-band/plain-centred-close -->
### Plain centred close

*Feeling: the page has said enough.*

No card, gradient or glow. It costs nothing and is the most confident choice on the list, and it works in any register. Linear runs 72/72 on page black with about 200px above and below, 44px pills, a bright primary and a 5 percent white secondary. Cursor runs one line at 72px. Polar uses two-tone 48/60 lines. Resend returns to the hero's display face for a second and final time, with a soft gradient on the lines. Analogue sets a three-line statement and a single underlined link.

**Seen on** Resend, Linear, Cursor Pricing, Polar, Exa, 13 pages in all. **Suits** dark precision, 3D render, photo-led, bold colour; SaaS, AI, finance, local business. *13 pages, quality 5.*

```css
.close{display:flex;flex-direction:column;align-items:center;padding:200px 24px;text-align:center}
.close h2{font:500 72px/1 var(--font-display);letter-spacing:-.03em;max-width:12em;text-wrap:balance}
.pair{margin-top:40px}
.b{height:44px;padding:0 22px;border-radius:22px;font-size:16px}
.b.s{box-shadow:none;background:color-mix(in srgb,var(--ink) 6%,transparent)}
.b.s:hover{background:color-mix(in srgb,var(--ink) 10%,transparent)}
@media(max-width:700px){.close{padding:128px 24px}.close h2{font-size:44px}.pair{flex-direction:column;width:100%;max-width:280px}.b{justify-content:center}}
```

<!-- v:section.cta-band/split-plain-close -->
### Split plain close

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

**Seen on** Vercel Pricing, Stripe Billing, Amplitude, LiveKit, Wildbran, 7 pages in all. **Suits** light precision, dark precision, photo-led; SaaS, developer tools, finance, food and drink. *7 pages, quality 4.*

<!-- v:section.cta-band/ruled-break-close -->
### Ruled break close

*Feeling: the grid opens for a moment.*

The close is framed by rules the page already has. Devin runs a 415px band where the side rails stop. ElevenLabs sets a 190px row between hairlines, with the line at left and two pills at right. Zed fills its row with a faint dot matrix. Customer.io uses a ruled box with a dot grid and a check list. Prototype runs two condensed lines and a triangle link with nothing else. It needs a visible rule system, or it reads as empty. My first version set the line at weight 300, and it looked thin against ElevenLabs' regular weight, whatever the analysts wrote. Use 400.

**Seen on** Devin Desktop, Zed Pricing, ElevenLabs Pricing, Customer.io, Prototype, 6 pages in all. **Suits** light precision, mono technical, warm neutral, photo-led; AI, developer tools, SaaS, agency. *6 pages, quality 4.*

```css
.rails{width:min(1180px,calc(100% - 48px));margin-inline:auto;border-inline:1px solid var(--line)}
.close{display:flex;align-items:center;justify-content:space-between;gap:32px;min-height:190px;padding:0 48px;border-block:1px solid var(--line)}
.close h2{font:400 34px/1.15 var(--font-display);letter-spacing:-.02em}
.pair{flex:none;gap:8px;margin-top:0}
.b{height:44px;border-radius:22px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 1px 2px color-mix(in srgb,var(--ink) 6%,transparent)}
.b.p{background:var(--ink);color:var(--bg);box-shadow:none}
@media(max-width:760px){.close{flex-direction:column;align-items:flex-start;padding:48px 24px}.pair{width:100%}.b{flex:1;justify-content:center}}
```

<!-- v:section.cta-band/oversized-button-close -->
### Oversized button close

*Feeling: press here.*

Cal.com sets an 80px headline over a button of about 338 by 64 with a 24px bold label, far larger than any other control on the page. On its home page the button reaches 72px, with rating scores beneath. Headspace makes a 750px pill hold the whole closing line. The scale break is the entire idea, so keep everything else small and calm.

**Seen on** Cal.com Pricing, Cal.com, Bauhaus Clock, Headspace, Rabbit. **Suits** light precision, illustrated, bold colour; SaaS, health, brand. *5 pages, quality 4.*

<!-- v:section.cta-band/hero-reprise-close -->
### Hero reprise

*Feeling: the page ends where it began.*

Repeat something from the opening at a new scale. Expo blows its app icon up into a 590px faded squircle, with the heading and button inside. Better Auth lets a pale pixel logo bleed off a corner behind the same button pair. React returns to its atom. Readwise brings back the hero panel. It needs no new art and it gives the page a shape.

**Seen on** Expo, Better Auth, Oxygen Pictures, Postman, Readwise, 7 pages in all. **Suits** light precision, photo-led, dark precision, gradient light; developer tools, agency, SaaS, health. *7 pages, quality 4.*

<!-- v:section.cta-band/tone-panel-close -->
### Tone panel close

*Feeling: a quiet room at the end.*

An inset panel one tone off the page. OpenAI's API pricing is the flattest: 1376 by 422, radius 6, centred, with a grey pill and a bare link. Tana places a two-line heading at left and one soft bloom on the right half. Meta fades a 1024px panel from white into pale blue with an app icon. My bloom took three tries. First it was a small oval that showed banding. Then I enlarged it, and it was twice too strong. The real one is pale, wide, runs off the panel's right edge, and pairs a warm core with cool flanks. Turn it down until you doubt it is there.

**Seen on** Tana, Meta AI, Boston Dynamics, OpenAI API Pricing, Jurafuchs, 8 pages in all. **Suits** light precision, photo-led, warm neutral, gradient light; AI, SaaS, brand, education. *8 pages, quality 4.*

```css
.panel{position:relative;overflow:hidden;isolation:isolate;min-height:420px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:72px;background:var(--surface);border-radius:32px}
/* --warm and --cool: two pale tints from your palette */
.panel::after{content:"";position:absolute;z-index:-1;left:44%;right:-12%;top:-30%;bottom:-30%;opacity:.62;filter:blur(40px);
  background:radial-gradient(38% 42% at 56% 52%,var(--warm),transparent),radial-gradient(34% 62% at 26% 50%,var(--cool),transparent),radial-gradient(30% 60% at 92% 46%,var(--cool),transparent)}
.panel h2{font:400 52px/1.08 var(--font-display);letter-spacing:-.02em;max-width:11em}
@media(max-width:760px){.panel{padding:40px 24px;border-radius:24px;min-height:0}.panel h2{font-size:36px}.panel::after{left:-10%;right:-30%;top:50%;bottom:-40%}}
```

<!-- v:section.cta-band/inset-colour-panel -->
### Inset colour panel

*Feeling: the one loud moment.*

Full brand colour, inset from the viewport. It works when it is the only saturated surface on the page: Paddle spends about 4000px of sand before its yellow block. Add one owned detail so it is not generic. Paddle draws a 2px line with an arrow tip through the panel. Astral cuts a notch with a hatched patch and a white channel around it. Cloudflare adds a fine dot texture, a sunrise glow and a marquee strip along the base. ECI centres a statement in a tall green room. Vercel AI uses a square black panel on a light page, inside the page's 24px gutters. Kiro's violet panel sits under the character variant, because its ghost matters more than its fill.

**Seen on** Cloudflare Workers, ECI, Astral, Paddle, Vercel AI, 27 pages in all. **Suits** bold colour, light precision, photo-led, warm neutral; developer tools, health, AI, finance. *27 pages, quality 4.*

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

<!-- v:section.cta-band/pattern-edged-panel -->
### Pattern edged panel

*Feeling: decorated with restraint.*

A pale panel with a field of pattern and the middle cleared. This is the cheapest way to get a designed close with no art budget. Lithic's panel is 282px tall with an inset of 24 and radius 24, and thin rings radiate from around the button, so the pattern points at the action. Jasper builds pixel blocks in brand colours at both sides. Canopy lays contour rings in a tone-on-tone navy. My rings came out close at once, using one repeating gradient. The real ones add a thick accent crescent at the far edge, so vary the weight if you can draw it.

**Seen on** Jasper, Lithic, Canopy, The Warren, Hinge Health. **Suits** warm neutral, bold colour, light precision; AI, finance, food and drink, agency. *5 pages, quality 5.*

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

<!-- v:section.cta-band/full-bleed-colour-band -->
### Full-bleed colour band

*Feeling: a familiar stop sign.*

A wall-to-wall band with a centred heading. It is the common default, and no row scored 5. Fifteen pages use it, two of them gold. Improve it by making the type do something: Zapier splits the heading in two colours, and Scale sets a line drawing beside the copy on the same flat tan. Let it butt straight onto the footer. Prefer [a sheet](#seam-overlap) or an inset panel when you can.

**Seen on** Scale AI, Kinfolk, Zapier, ClickHouse, New York Phil, 15 pages in all. **Suits** bold colour, dark precision, photo-led, light precision; SaaS, developer tools, health, local business. *15 pages, quality 3.*

<!-- v:section.cta-band/glow-field-close -->
### Glow field close

*Feeling: stage lighting.*

Colour pooled at the edges of a field, with type on clean ground. CleanShot runs a dark field with magenta and blue high behind a centred app icon. The analyst called these glows dim, and my first version took that at its word and looked dead beside the real thing, where the magenta is plainly visible at the top. Liquid raises two lilac blurs from the bottom corners of a white cell over a faint grid. Lyra pools blue and peach in the corners of a white panel. Substack sets one huge peach blur behind the headline. Keep the brightest point away from the text.

**Seen on** CleanShot X, mymind, Liquid AI, Lyra, Substack, 6 pages in all. **Suits** gradient light, light precision, photo-led, expressive; SaaS, AI, health. *6 pages, quality 4.*

```css
.close{position:relative;overflow:hidden;isolation:isolate;background:var(--bg);text-align:center;padding:128px 24px 136px}
/* --g1 and --g2: two deep hues from your palette. High, wide and visible. Behind the icon, never the text */
.close::before{content:"";position:absolute;z-index:-1;left:0;right:0;top:-24%;height:92%;filter:blur(48px);
  background:radial-gradient(26% 72% at 42% 44%,var(--g1),transparent),radial-gradient(26% 80% at 66% 30%,var(--g2),transparent)}
.icon{width:80px;height:80px;border-radius:18px;margin:0 auto 32px;display:grid;place-items:center;background:var(--accent);color:var(--bg);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--ink) 35%,transparent),0 12px 32px -8px rgba(0,0,0,.6)}
.icon svg{width:44px;height:44px;fill:none;stroke:currentColor;stroke-width:3}
.close h2{font:700 40px/48px var(--font-display);letter-spacing:-.022em;max-width:15em;margin-inline:auto;text-wrap:balance}
.close p{font-size:18px;color:var(--ink-2);margin:12px auto 0;max-width:36em}
.b{margin-top:32px;padding:0 22px;border-radius:14px;background:var(--ink);color:var(--bg);font-weight:600}
@media(max-width:700px){.close{padding:96px 20px}.close h2{font-size:32px;line-height:38px}}
```

<!-- v:section.cta-band/photo-sign-off -->
### Photo sign-off

*Feeling: back in the world.*

Close on a real image. Wispr Flow returns to its opening film at full bleed with large rounded top corners, and Nuro sets a documentary portrait as a second hero. reMarkable uses a 4px vertical rule beside a two-line heading and places the text in the photo's natural shadow, which is better than any overlay. Comet goes full image with a small planet straddling the top edge. Use a scrim only where the text sits, and match the crop to the hero.

**Seen on** Wispr Flow, Comet, Nuro, reMarkable, Brilliant, 15 pages in all. **Suits** warm neutral, photo-led, gradient light, soft pastel; food and drink, brand, finance, health. *15 pages, quality 4.*

<!-- v:section.cta-band/split-photo-panel -->
### Split photo panel

*Feeling: a magazine ad.*

Half photo, half flat colour. Therabody pins a full-width dark button to the base of a cream half. Almeida pairs each photo with a flat panel in its own colour. Increase uses a navy card with a painterly photo flush at the right edge. Keep the button aligned to the base of the image.

**Seen on** Almeida Theatre, Increase, Soundsensing, Therabody, RJ Plus, 7 pages in all. **Suits** bold colour, light precision, photo-led, warm neutral; culture, finance, SaaS, ecommerce. *7 pages, quality 3.*

<!-- v:section.cta-band/half-width-card-close -->
### Half width card

*Feeling: placed, not stretched.*

Factory's close is a 540px left-aligned card of dark grain lit from one side, with a small mark, a 36/39 heading and a small white mono button, and the right half of the row stays empty. Refusing the full width turns a band into an object. It works above a dark footer of the same family.

**Seen on** Factory. **Suits** light precision; AI. *1 page, quality 5.*

<!-- v:section.cta-band/giant-type-sign-off -->
### Giant type sign-off

*Feeling: a poster.*

Display type carries it. Bun sets 117px heavy lines with the last words in accent, on a black band, beside a small install block. Huge ends on a 249px phrase with a tiny email field. Temporal runs 128px light type on a full gradient. Bohdan Ratiiev underlines one line with an 8px rule and sits mono columns just above it. The small thing next to the big thing is what makes it land.

**Seen on** Bun, Huge Contact, Temporal, Bohdan Ratiiev, Tobacco Theater. **Suits** mono technical, type-led, bold colour; developer tools, agency, portfolio, culture. *5 pages, quality 4.*

<!-- v:section.cta-band/link-rows-close -->
### Link rows close

*Feeling: pick your next step, in large type.*

The close is a list of links. Polestar stacks 110px lines with a thin 50px chevron flush right, with no rules. Stone Island sets a thin white strip of numbered links between black sections. Daily runs bar buttons with mono caps across a column. Use it when several next steps are equal and there is no single primary action.

**Seen on** Polestar, Stone Island, Daily, Deadstock Coffee. **Suits** mono technical, photo-led, bold colour; brand, fashion, developer tools, food and drink. *4 pages, quality 4.*

<!-- v:section.cta-band/route-cards-close -->
### Route cards close

*Feeling: helpful rather than pushy.*

End by routing. Asana sets a 54px heading at left and three white cards at right on a tinted panel, each with a 30px title, one line and a 60px arrow disc. AuthKit pairs "start" and "still have questions" at 3:2, with buttons pinned to one baseline. Anthropic's news page uses three contact tiles in a dark band. Make splits three paths with a taller centre card. Stripe Connect keeps it plain with two text cards. JOBS and Casper serve two audiences side by side. It suits pages that serve several readers, and it matched the real thing closely in my rebuild.

**Seen on** AuthKit, Anthropic News, Asana, Stripe Connect, Sourcegraph, 14 pages in all. **Suits** light precision, dark precision, bold colour, warm neutral; SaaS, finance, developer tools, editorial. *14 pages, quality 4.*

```css
.panel{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:64px;padding:64px;background:var(--surface);border-radius:24px;align-items:start}
.panel h2{font:400 54px/1.05 var(--font-display);letter-spacing:-.03em}
.routes{display:grid;gap:12px}
.r{display:grid;grid-template-columns:1fr 60px;align-items:center;gap:24px;min-height:140px;padding:20px 40px;background:var(--bg);border-radius:12px;transition:box-shadow .15s}
.r:hover{box-shadow:0 0 0 1px var(--line)}
.r b{display:block;font:400 30px/1.15 var(--font-display);letter-spacing:-.02em}
.r span{display:block;font-size:20px;line-height:1.3;color:var(--ink-2);margin-top:8px}
.go{width:60px;height:60px;border-radius:50%;background:var(--ink);display:grid;place-items:center;transition:transform .15s}
.go svg{width:22px;height:22px;fill:none;stroke:var(--bg);stroke-width:1.8}
.r:hover .go{transform:translateX(3px)}
@media(max-width:900px){.panel{grid-template-columns:1fr;gap:32px;padding:32px 20px}.r{padding:20px;min-height:0;grid-template-columns:1fr 44px}.r b{font-size:22px}.r span{font-size:16px}.go{width:44px;height:44px}}
```

<!-- v:section.cta-band/composer-close -->
### Composer close

*Feeling: start now, right here.*

The last call to action is the product. Claude ends on a real prompt field with its action inside. Ramp's blurred panel holds a 766px URL composer, and its final band restates the slogan over the hero's email field. Algolia draws a dashed dropzone with limits written beneath. New York Phil's preset donation amounts belong here too: a form with the first decision already made. A field beats a button whenever the first step can happen on the page. My heading at 48/400 looked limp beside the original, so set it heavier than you think.

**Seen on** Claude, Ramp, Algolia, New York Phil. **Suits** light precision, warm neutral, dark precision, bold colour; finance, AI, developer tools, culture. *4 pages, quality 5.*

```css
.close{padding:140px 24px;text-align:center}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}   /* keep a real label, visually hidden */
.close h2{font:600 52px/1.08 var(--font-display);letter-spacing:-.015em}
.close>p{font-size:22px;line-height:1.3;color:var(--ink-2);margin:16px auto 0;max-width:30em}
form{display:flex;align-items:center;width:min(560px,100%);height:54px;margin:40px auto 0;padding:7px 7px 7px 18px;background:var(--surface);border-radius:14px;box-shadow:0 0 0 1px var(--line);transition:box-shadow .15s}
form:focus-within{box-shadow:0 0 0 1px var(--ink-2),0 0 0 4px color-mix(in srgb,var(--accent) 16%,transparent)}
form input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:16px}
form button{flex:none;display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 14px;border:0;border-radius:8px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:500}
```

<!-- v:section.cta-band/download-close -->
### Download close

*Feeling: nothing left to sell.*

For installed software the close is the download. Warp lays out three OS columns with chips, a copyable command and architecture buttons. The Vercel AI SDK sets a docs pill next to a copyable install command. Inngest offers three quickstarts by language, type only. Fundrise and InkTree give desktop readers a QR route to the app, with store ratings beside it.

**Seen on** Warp Pricing, Vercel AI SDK, Notion Calendar, Inngest, Fundrise, 8 pages in all. **Suits** light precision, dark precision, warm neutral, illustrated; developer tools, finance, SaaS, AI. *8 pages, quality 4.*

<!-- v:section.cta-band/product-object-close -->
### Product object close

*Feeling: it is already running.*

Heading and buttons at left, a live piece of product at right. Spline stacks four outlined status pills with one active over a masked dot grid, so the close keeps working. Weekstack fans five app screens from the base of a panel, clipped by it. Public sets devices on a reflective floor with a rating at the foot. Keep it current. An old screenshot at the end of a page is worse than none.

**Seen on** Spline, Public, Weekstack, Fundrise, Biome. **Suits** light precision, warm neutral, dark precision; SaaS, finance, developer tools. *5 pages, quality 4.*

<!-- v:section.cta-band/seam-overlap-close -->
### Seam overlap

*Feeling: the page is one physical object.*

The close joins the footer as a material fact. Loops ends its light plate in a 50px corner to reveal a deep colour beneath. My first version ran the plate full width and looked like a rounded band. The real plate is also inset about 52px from the left over a stack of brand stripes, and that second edge is what makes it read as a lifted sheet. Buildkite's card straddles a page colour change, with a real window breaking 32px above it. Universally Speaking's chamfered card straddles the footer seam, and Vite's footer overlaps a grain band.

**Seen on** Loops, Buildkite, Vite, Universally Speaking. **Suits** warm neutral, light precision, dark precision, bold colour; developer tools, SaaS, agency. *4 pages, quality 5.*

```css
body{background:linear-gradient(90deg,var(--accent) 0 14px,color-mix(in srgb,var(--accent) 80%,var(--ink)) 14px)}
/* inset on the left as well as rounded: two free edges make it a sheet */
.plate{margin-left:52px;background:var(--bg);border-radius:0 0 0 56px;padding:96px 24px 120px}
.close{width:min(1100px,calc(100% - 48px));margin-inline:auto;padding-block:112px 72px;display:flex;align-items:center;justify-content:space-between;gap:40px;color:var(--bg);
  border-bottom:1px solid color-mix(in srgb,var(--bg) 18%,transparent)}
.close h2{font:400 44px/1.1 var(--font-display);letter-spacing:-.015em}
.close p{font-size:17px;line-height:1.4;margin-top:10px;color:color-mix(in srgb,var(--bg) 72%,transparent)}
.pair{flex:none;margin-top:0;gap:10px}
.close .b{background:var(--bg);color:var(--accent)}
.close .b.s{background:none;color:var(--bg);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--bg) 55%,transparent)}
@media(max-width:760px){.plate{margin-left:20px;border-radius:0 0 0 32px}.close{flex-direction:column;align-items:flex-start;padding-block:72px 48px}}
```

<!-- v:section.cta-band/floating-object-ring -->
### Floating object ring

*Feeling: everything you use, gathered.*

Objects around a clear centre. Render scatters 68px logo tiles around a centred gradient heading, and a grainy violet floor tints the tiles it touches. Heart & Soil frames portrait photos at the margins at different sizes, two bleeding off the edge and moving at different speeds. Convex floats pixel sprites. Objects must be real: integrations, products, people.

**Seen on** Render, Origin Wellness Spa, Heart & Soil, Freshly Launched, Convex. **Suits** warm neutral, light precision, photo-led, bold colour; developer tools, health, local business, agency. *5 pages, quality 4.*

<!-- v:section.cta-band/character-or-joke-close -->
### Character or joke close

*Feeling: a person made this.*

Kiro's ghost rises from the base of a violet panel, clipped at the waist. Discord tells you there is nothing left to scroll and lines its whole cast along the footer. PostHog parodies a cheap sales page and still converts, because the joke respects the reader. Use it only where the page has that voice from the start. On health, law or finance it reads as a misjudgement.

**Seen on** Kiro, Twilio, Discord, PostHog Pricing, PostHog, 7 pages in all. **Suits** bold colour, expressive, dark precision, 3D render; SaaS, portfolio, AI, developer tools. *7 pages, quality 4.*

<!-- v:section.cta-band/signature-art-close -->
### Signature art close

*Feeling: owned.*

One made thing carries the band. Baseten runs an extruded ribbon through numbered columns. Neon draws a bare tree in tiny glyphs on graphite. Speakeasy uses an ASCII arc. A24 sets a chrome wordmark. The art must appear earlier on the page, or it reads as decoration added at the end.

**Seen on** Baseten, A24, Speakeasy, Neon Pricing, Plvs Ultra, 10 pages in all. **Suits** light precision, dark precision, mono technical, 3D render; SaaS, AI, developer tools, culture. *10 pages, quality 4.*

<!-- v:section.cta-band/contact-as-headline -->
### Contact as headline

*Feeling: just call.*

Vapi sets a 48px phone number on a 90px mint strip, and the number is the demo. Basement Studio sets its email address in 76px display type. Evenark stacks an email and a booking link at headline size in muted ink. Use it where one action really is a call or an email.

**Seen on** Vapi, Evenark, Death to Robots, Lonvital, Basement Studio. **Suits** photo-led, dark precision, light precision; agency, AI, health. *5 pages, quality 4.*

<!-- v:section.cta-band/sticky-signup-bar -->
### Sticky sign-up bar

*Feeling: always within reach.*

Spotify docks a 66px gradient bar 8px above the base. MasterClass shows an avatar stack, a starting price and a button. It suits one strong consumer offer. Never stack it with a chat bubble and a cookie banner, and hide it once the reader is signed in.

**Seen on** Spotify, MasterClass. **Suits** dark precision, photo-led; other, education. *2 pages, quality 3.*

### Mistakes that cheapen a close

- **"Ready to get started?"** It appears on thousands of pages and says nothing. Write a sentence only this product could say.
- **A gradient band by reflex.** It is the most common choice and rarely the best.
- **Two equal buttons.** Make one quiet.
- **A new look at the last moment.** New radius, new accent, new type. Stay in the system.
- **A glow you took literally.** I read "dim" and built something dead. Check the frame. Then I overcorrected on a bloom. Compare, adjust, compare.
- **A thin heading.** Weight 300 at 36px, or a text face at 400 at 48px, lacks the presence of the last thing on a page. Go one step heavier.
- **A rounded band pretending to be a sheet.** One corner does not lift anything. Give it a second free edge.
- **Three stacked grounds.** A close, a newsletter band and a footer in three colours looks assembled. Merge two of them.
- **Repeating the whole hero.** A reprise changes scale or form. An exact copy reads as a loop bug.

---

## Newsletter

A newsletter sign-up must ask for one small thing without interrupting anything. It is a form for a person who is not ready to buy. What separates great from cheap is size and voice. Great sign-ups are small, sit in the page's grid, and say something true about what arrives and how often. Cheap ones are a full-width coloured band shouting "Subscribe to our newsletter" over an input and a button, or a popup two seconds after arrival.

Gold pages make this plain. Of 27 gold rows, 11 show no box at all, either a link or a bare underline, and only 2 use the ordinary input beside a button. That ordinary row is the most common choice overall and scored lowest of the plain forms.

Keep these for every sign-up.

**Ask for the email and nothing else.** A name doubles the effort for no gain. Elyx is the exception, on a waitlist where role is worth asking.

**Say what arrives.** How often, and what. A plain caption about frequency is more persuasive than any incentive, and a joke works if the brand jokes. Reformation's placeholder carries a line of brand voice, in a field nobody normally writes for.

**Build the form properly.** `<form>`, `<label>` even if it is visually hidden, `type="email"`, `autocomplete="email"`, `required`. Field text at 16px on phones stops iOS zooming the page. Show success in place, replacing the form with a line of thanks, so the page does not move.

**Consent stays small.** 11 to 13px under the field, one line, with a real link. CleanShot holds its button grey until the field has content, which a single `:has()` rule can do.

**Sit it low.** Footer, last band, or a quiet row. A sign-up in the top half of a product page competes with the main action.

```css
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}   /* visually hidden label */
form.gate:has(input:placeholder-shown) button{background:color-mix(in srgb,var(--ink) 22%,var(--bg))}   /* grey until typed in, for filled buttons */
```

<!-- v:section.newsletter/underline-only-field -->
### Underline-only field

*Feeling: a line on a page.*

The field is one rule, with the action as text on the same line. It sits lightly on photos and dark blocks. 1X runs 360px right-aligned over a film with 12px text and a 1.5px line. TR Studio centres a 528px field in a flat oxblood block with uppercase placeholder and submit at each end of the rule. Reformation abuts a black square button. Keep placeholder contrast high on images, and thicken the rule on focus, since there is no box to change.

**Seen on** 1X, TR Studio, 1 Hotels, Stone Island, Whitney Visit, 12 pages in all. **Suits** photo-led, type-led, light precision, warm neutral; brand, fashion, culture, SaaS. *12 pages, quality 4.*

```css
.block{background:var(--ink);color:var(--bg);padding:48px 120px 56px;text-align:center}
.block p{font:500 26px/1.25 var(--font-display)}
form{display:flex;align-items:baseline;gap:16px;margin-top:20px;border-bottom:1px solid currentColor;padding-bottom:6px;text-align:left;transition:box-shadow .15s}
form:focus-within{box-shadow:0 1px 0 currentColor}
input{flex:1;min-width:0;border:0;outline:0;background:none;color:inherit;padding:4px 0;font-size:12px;letter-spacing:.04em;text-transform:uppercase}
input::placeholder{color:color-mix(in srgb,currentColor 72%,transparent)}
button{border:0;background:none;color:inherit;padding:0;font-size:12px;font-weight:500;letter-spacing:.06em;cursor:pointer}
@media(max-width:700px){.block{padding:40px 24px}}
```

<!-- v:section.newsletter/ruled-statement-row -->
### Ruled statement row

*Feeling: a line in a magazine.*

Kinfolk builds a sign-up from one rule. A 32px sentence sits on a 2px black rule across two thirds of the page, and the email field sits on the same rule at the right, with plain text to submit. There is no box and no button, and it reads as part of the layout. My rebuild matched at the first attempt. Align the baselines by padding, not by luck.

**Seen on** Kinfolk. **Suits** photo-led; editorial. *1 page, quality 5.*

```css
form{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:20px;align-items:end}
.say{font:400 32px/1.2 var(--font-display);letter-spacing:-.01em;padding-bottom:14px;border-bottom:2px solid var(--ink)}
.field{display:flex;align-items:baseline;justify-content:space-between;gap:16px;border-bottom:2px solid var(--ink);padding-bottom:17px}
input{flex:1;min-width:0;border:0;outline:0;background:none;padding:0;font-size:15px}
button{border:0;background:none;padding:0;font-size:15px;font-weight:500;cursor:pointer;transition:opacity .15s}
button:hover{opacity:.55}
@media(max-width:760px){form{grid-template-columns:1fr;gap:28px}.say{font-size:26px;border-bottom:0;padding-bottom:0}}
```

<!-- v:section.newsletter/inline-field-row -->
### Inline field row

*Feeling: correct.*

Input and button side by side, centred under a heading. It is what every template ships. Use it when the voice carries the section. Bear's heading is a joke. Oxygen fuses field and block button and adds three avatars with a follower count. Therabody tints the field in its own palette and adds a QR code for the app. If you have nothing like that, pick a quieter variant.

**Seen on** Notion About, Sonder, Huel, Bristol Yoga Festival, GiveDirectly, 12 pages in all. **Suits** warm neutral, light precision, photo-led, soft pastel; ecommerce, SaaS, other, hospitality. *12 pages, quality 3.*

<!-- v:section.newsletter/inset-button-field -->
### Inset button field

*Feeling: one tidy object.*

The button sits inside the field, so the two read as one control. Nurx runs a 400 by 50 white pill with a 42px black pill inset 4px. Nuro uses a 410 by 58 outlined capsule. Greylock insets a 40px khaki button 6px inside a square outline. Sweetgreen drops the button and seats an arrow at the far right of a 640px field. Get the arithmetic right, because a pill with an uneven inset is the fault everyone notices.

**Seen on** Nuro, Greylock, Figure, Sweetgreen, Nurx, 6 pages in all. **Suits** photo-led, light precision; brand, finance, AI, food and drink. *6 pages, quality 4.*

```css
.band{padding:112px 24px 104px;text-align:center}
.band h2{font:600 32px/1.2 var(--font-display);letter-spacing:-.015em}
/* button height = field height - 2 x inset. Outer radius - inset = inner radius, so the curves stay parallel.
   The field reverses the page and the button takes the page's colour, so this holds on light and dark grounds */
form{display:flex;align-items:center;width:min(400px,100%);height:50px;margin:32px auto 0;padding:4px 4px 4px 20px;background:var(--ink);border-radius:25px;transition:box-shadow .15s}
form:focus-within{box-shadow:0 0 0 2px var(--bg),0 0 0 4px var(--ink)}
input{flex:1;min-width:0;border:0;outline:0;background:none;color:var(--bg);font-size:16px}
input::placeholder{color:color-mix(in srgb,var(--bg) 60%,var(--ink))}
button{flex:none;height:42px;padding:0 22px;border:0;border-radius:21px;background:var(--bg);color:var(--ink);font-size:14px;font-weight:500;cursor:pointer}
.legal{font-size:12px;color:var(--ink-2);margin:16px auto 0;max-width:36em}
```

<!-- v:section.newsletter/borderless-tone-field -->
### Borderless tone field

*Feeling: a quiet grey form on a fashion page.*

Acne Studios sets a 430 by 60 flat grey field with no border, radius or visible button, sharing a row with shipping notes. Gagosian uses a 30px grey field and an outlined button. Ritual puts "Subscribe" as underlined text inside a pale field. These suit luxury and galleries. Keep a submit that works by keyboard, and do not rely on a placeholder alone as the label.

**Seen on** Acne Studios, Gagosian, Ritual. **Suits** photo-led; fashion, culture, health. *3 pages, quality 4.*

<!-- v:section.newsletter/oversized-input -->
### Oversized input

*Feeling: the field is the section.*

Tim Rodenbroeker sets a 67px grey field with a 42px placeholder, and Svix a 683 by 64 field on a flat blue band with a mono placeholder that keeps its developer voice. Use it where the page needs one big, simple gesture.

**Seen on** Tim Rodenbroeker, Svix. **Suits** type-led, light precision; portfolio, developer tools. *2 pages, quality 3.*

<!-- v:section.newsletter/link-not-field -->
### Link instead of a field

*Feeling: this page is not for collecting emails.*

No field on the page. Work & Co gives it one row of the page grid: a label at left, a sentence and a Subscribe pill at right, about 120px tall. Nicole Heim lists it as one of three label and value pairs. Poeza makes the whole thing a stacked 80px link. It is the choice gold pages make most, because it keeps the page in its own voice.

**Seen on** Work & Co, Nicole Heim Studio, Poeza, Almeida Theatre, Aman, 11 pages in all. **Suits** bold colour, light precision, photo-led, warm neutral; culture, agency, fashion, hospitality. *11 pages, quality 4.*

```css
.row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,3fr);gap:24px;padding-block:32px;border-bottom:1px solid var(--line)}
.lab{font:500 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row p{font-size:20px;line-height:1.35}
.b{display:inline-flex;align-items:center;height:40px;margin-top:20px;padding:0 20px;border-radius:20px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500}
@media(max-width:700px){.row{grid-template-columns:1fr;gap:8px}}
```

<!-- v:section.newsletter/footer-row-signup -->
### Footer row

*Feeling: always there, never in the way.*

A row inside the footer. CleanShot sets it between two faint rules with a title and line at left, and a 48px outlined input with a button at right, disabled until the field has text. Ripple sets a thin headline over a giant ghost wordmark on teal. This is the most sensible home for a sign-up on a product site.

**Seen on** CleanShot X, Ripple Health, Marine Layer, Josh Comeau, Terry Ho's Yum Yum, 6 pages in all. **Suits** bold colour, gradient light, warm neutral, photo-led; SaaS, health, fashion, education. *6 pages, quality 4.*

```css
.row{display:grid;grid-template-columns:1fr minmax(0,420px);gap:48px;align-items:start;padding-block:40px;border-block:1px solid var(--line)}
.row h3{font:600 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row form{display:flex;gap:8px}
.row input{flex:1;min-width:0;height:48px;padding:0 16px;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);background:none;outline:0;font-size:16px}
.row input:focus{border-color:color-mix(in srgb,var(--ink) 50%,transparent);box-shadow:0 0 0 3px color-mix(in srgb,var(--ink) 8%,transparent)}
.row button{flex:none;height:48px;padding:0 18px;border:0;border-radius:14px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
.note{font-size:13px;line-height:1.4;color:var(--ink-3);margin-top:12px}
@media(max-width:760px){.row{grid-template-columns:1fr;gap:20px}}
```

<!-- v:section.newsletter/photo-band-signup -->
### Photo band sign-up

*Feeling: warm, inviting, risky.*

Hims insets a 7px-margin photo card at radius 32 with a form on the calm side of a warm portrait, and it works. Fred centres a serif prompt on a busy velvet still life. The analysts liked it, but in the frame the line runs across the pattern and is hard to read. Check text against the busiest pixel. If it fails, move the form to the image's quiet side or take the [split](#split-photo-sign-up).

**Seen on** Fred, Hims. **Suits** photo-led; ecommerce, health. *2 pages, quality 4.*

<!-- v:section.newsletter/split-photo-signup -->
### Split photo sign-up

*Feeling: a reason to subscribe.*

Half photograph, half flat colour. Counter Culture pairs an orange panel with pour-over coffee. FORUM Cases sets a statue bust on grey. Use it for food, culture and hospitality, where the image is the reason.

**Seen on** Babylonstoren, Leo Cussen, Counter Culture Coffee, FORUM Cases, Philadelphia Orchestra. **Suits** bold colour, photo-led, warm neutral, dark precision; ecommerce, hospitality, education, culture. *5 pages, quality 3.*

<!-- v:section.newsletter/colour-band-signup -->
### Colour band sign-up

*Feeling: a daily notice.*

New Exhibitions runs one flat blue band with the offer at left and small text at right. Use it where a listing site needs one colour moment.

**Seen on** New Exhibitions. **Suits** type-led; culture. *1 page, quality 3.*

<!-- v:section.newsletter/illustrated-signup -->
### Illustrated sign-up

*Feeling: a character asks nicely.*

A drawing does more than copy can. Framework sits an orange pixel envelope with a face above a centred heading and an underlined field. Monocle sets a large spot illustration in two colours on a pale panel beside the form. Headspace dissolves its art into the form's ground, so the form has no edge. This is the highest-scoring sign-up, and it needs real art.

**Seen on** Framework, Monocle, Headspace. **Suits** light precision, type-led, illustrated; ecommerce, editorial, health. *3 pages, quality 5.*

<!-- v:section.newsletter/object-scene-signup -->
### Object scene sign-up

*Feeling: objects in the room.*

UNITO floats rendered products around a centred form, sharp near the top and one large and blurred in front, for real depth. Haikei uses a torn shape made with its own product. Use it when you have renders.

**Seen on** UNITO, Haikei, ConceptCore. **Suits** warm neutral, dark precision, expressive; ecommerce, SaaS, education. *3 pages, quality 4.*

<!-- v:section.newsletter/offer-modal -->
### Offer modal

*Feeling: a shop assistant who will not leave you alone.*

A centred modal with a discount, half photo and half form. Five of the six rows are stores, and none is gold. Fellow's is about the best: small, one field, one button. Delay it, show it once, keep close obvious and offer a real decline link. Never use it on a product or service site.

**Seen on** Fellow, Velora, Parsley Health, Postevand, Sakara, 6 pages in all. **Suits** photo-led, warm neutral, type-led, light precision; ecommerce, health, fashion. *6 pages, quality 2.*

<!-- v:section.newsletter/sticky-edge-cue -->
### Sticky edge cue

*Feeling: a tab you can ignore.*

Fujifilm runs a rotated tab along the right edge, HAY a 214 by 48 corner tab, and The Marshall Project a dismissible 60px bar. They stay available and cover nothing. Prefer this to a modal.

**Seen on** The Marshall Project, Fujifilm X, HAY. **Suits** photo-led, type-led; nonprofit, brand, ecommerce. *3 pages, quality 3.*

<!-- v:section.newsletter/rail-card-signup -->
### Rail card sign-up

*Feeling: one more card in the grid.*

The sign-up takes a slot in the page's grid. Foster + Partners gives it the same third-width panel it uses for quotes, so it joins the rhythm. Spring/Summer keeps a tiny mono card in its rail. Canopy pairs it with a social card. Use it on editorial and studio grids.

**Seen on** Foster + Partners, Canopy, Design Museum, KTA+ Store, charity: water, 9 pages in all. **Suits** photo-led, bold colour, warm neutral, dark precision; culture, architecture, food and drink, ecommerce. *9 pages, quality 3.*

<!-- v:section.newsletter/stacked-fields-panel -->
### Stacked fields panel

*Feeling: a private invitation.*

Elyx wraps two fields in one 460px container at radius 24 with a 2px spectral stroke, a hairline between fields and a full-width 52px white pill. Lucid uses a dark panel and champagne button. Use it for waitlists and betas, where asking for a second field is justified.

**Seen on** Elyx, Lucid, Rivian. **Suits** warm neutral, dark precision, photo-led; brand, SaaS. *3 pages, quality 4.*

### Mistakes that cheapen a sign-up

- **"Subscribe to our newsletter."** It describes the form. Say what comes.
- **A band for a small ask.** A full-bleed colour band is a large gesture for one email address.
- **A popup on arrival.** Five of the six modal rows are stores and none is gold. Everywhere else it costs more trust than it earns.
- **Uneven insets.** A 42px button in a 52px field with mismatched radii looks broken. Use the formula.
- **Placeholder as label.** It vanishes on typing and fails screen readers.
- **A widow in a short line.** My first dark block wrapped one word onto a second line, and it looked unfinished. Shorten the line or set `text-wrap:balance`.
- **No success state.** A form that clears silently looks broken.
- **Text over a busy photo.** Fred's own frame shows the risk.

---

## Contact form

A contact form must get the right person a message with the least effort, and it must promise what happens next. What separates great from cheap is what is left out. Great forms ask for few fields, set clear labels above real inputs, sit on the bare page or one quiet panel, and put proof or a promise beside the ask. Cheap forms are a card with a shadow, placeholder-only inputs, a red asterisk on every field, a giant full-width accent button, and nothing that says who will read it.

Keep these for every form.

**Decide whether you need a form.** A sales team needs one. A portfolio does not. Eight pages use no form at all, three of them gold. If a person answers an inbox, show the address.

**Route first if readers differ.** Sales, support and partners want different things. A [routing list](#routing-list) spares them a form that fits nobody.

**Fields.** Labels above the input at 12 to 14px, weight 500. Inputs 38 to 46px tall, radius 4 to 8, 1px at `--line`, 14 to 16px text. Two-up rows at 16px gap for short pairs, full width for the rest, and 24 to 28px between groups. Use 16px text and at least 44px height on phones, since smaller text makes iOS zoom the page.

**Focus and errors.** Focus is a two-part ring or a clean border change, never the browser default alone. Vercel's form loads with the first field focused and shows a soft double ring. Errors sit under the field, say how to fix it, and appear on blur or submit, not on every keystroke.

**Autocomplete.** Set `autocomplete` and `type` on every field. Browsers then fill most of the form for the reader, which beats any amount of polish.

**Say what happens next.** A reply time, who replies, what you need from them. Energen lists three ticks under the heading. A contact page that promises nothing feels like a void.

**Consent is one small line,** 12px under the button, with a real link.

```css
/* a two-part ring reads as the system's own. One coloured outline reads as a browser default */
input:focus,select:focus,textarea:focus{border-color:var(--ink-3);box-shadow:0 0 0 2px var(--bg),0 0 0 4px color-mix(in srgb,var(--ink) 22%,transparent)}
```

<!-- v:section.contact-form/proof-beside-form -->
### Proof beside the form

*Feeling: serious people will answer.*

The right layout for sales. Headline and proof at left, form at right on the bare page. The analyst read Vercel's form as sitting on a tinted panel, but that tint is the page itself. There is no panel at all, only white inputs with 1px lines, and that is the point. Five logos with one stat each do the persuading while the form stays clean. Keep the headline short enough for one line at 64px: my first was longer, wrapped to two lines, and pushed the proof down. Webflow runs the same split with a logo grid.

**Seen on** Vercel Contact Sales, Webflow Contact Sales. **Suits** light precision; developer tools, SaaS. *2 pages, quality 5.*

```css
.wrap{width:min(1296px,calc(100% - 48px));margin-inline:auto;padding-block:112px 96px;display:grid;grid-template-columns:minmax(0,1fr) 568px;gap:96px;align-items:start}
.wrap h1{font:500 64px/1 var(--font-display);letter-spacing:-.06em}
.sub{font-size:18px;line-height:1.4;color:var(--ink-2);margin-top:24px;max-width:26em}
.proof{margin-top:40px;display:grid;gap:22px}
.proof li{display:grid;grid-template-columns:104px 1fr;align-items:center;font-size:15px;color:var(--ink-2)}
.proof b{font-weight:500;color:var(--ink)}
form{display:grid;grid-template-columns:1fr 1fr;gap:26px 16px}
.f{display:grid;gap:8px}.f.w{grid-column:1/-1}
label{font-size:14px;font-weight:500}
input,select,textarea{width:100%;height:38px;padding:0 12px;border:1px solid var(--line);border-radius:6px;background:var(--surface);font-size:14px;outline:0;transition:box-shadow .12s,border-color .12s}
textarea{height:150px;padding:10px 12px;resize:vertical;line-height:1.4}
form button{justify-self:start;height:38px;padding:0 16px;border:0;border-radius:19px;background:var(--ink);color:var(--bg);font-size:14px;font-weight:500;cursor:pointer}
.c{grid-column:1/-1;font-size:12px;line-height:1.45;color:var(--ink-2);margin-top:-8px}
@media(max-width:1020px){.wrap{grid-template-columns:1fr;gap:56px;padding-block:72px}.wrap h1{font-size:44px}}
@media(max-width:560px){form{grid-template-columns:1fr}input,select,textarea{font-size:16px;height:44px}textarea{height:140px}form button{height:44px;width:100%;border-radius:22px}}
```

<!-- v:section.contact-form/underline-field-form -->
### Underline field form

*Feeling: a letter, not a ticket.*

Fields are single lines, so the page stays a page. Five of the seven pages are gold. MetaLab sets an 88px display line at left on black, with a 2 by 2 grid of underlined fields at right and a small pill submit. Villa Aurelia uses tracked caps labels in its accent with date and guest fields for a booking. Alessandro Stella makes the form from the same ruled rows as the rest of the page, and Sidekick sets a thick pale underline with bold labels. ON Makelaardij places its team's real shopfront photo beside the form, which does more for trust than any badge. The rule must darken on focus, because there is nothing else to change.

**Seen on** Villa Aurelia, Structure Engineers, Alessandro Stella, MetaLab Contact, Huge Contact, 7 pages in all. **Suits** warm neutral, photo-led, type-led, dark precision; agency, hospitality, architecture, portfolio. *7 pages, quality 5.*

```css
.wrap{width:min(1360px,calc(100% - 48px));margin-inline:auto;padding-block:120px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.wrap h1{font:300 88px/1 var(--font-display);letter-spacing:-.02em}
form{display:grid;grid-template-columns:1fr 1fr;gap:56px 32px;align-content:start;padding-top:12px}
.f{display:grid;gap:6px}.f.w{grid-column:1/-1}
label{font-size:12px;color:var(--ink-2)}
/* a field is only a line. The line turns full ink on focus, and that is the whole focus state */
input,select,textarea{width:100%;border:0;border-bottom:1px solid var(--line);background:none;border-radius:0;outline:0;padding:8px 0 12px;font-size:16px;transition:border-color .15s}
textarea{height:112px;resize:none}
input:focus,select:focus,textarea:focus{border-bottom-color:var(--ink)}
.chk{display:flex;align-items:center;gap:10px;font-size:13px}
.chk input{width:14px;height:14px;padding:0;border:1px solid var(--line);appearance:none;border-radius:2px}
.chk input:checked{background:var(--ink)}
.end{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between}
form button{height:32px;padding:0 16px;border-radius:16px;border:0;background:none;box-shadow:inset 0 0 0 1px var(--line);font-size:13px;cursor:pointer;transition:background .15s,color .15s}
form button:hover{background:var(--ink);color:var(--bg)}
@media(max-width:860px){.wrap{grid-template-columns:1fr;gap:56px;padding-block:72px}.wrap h1{font-size:64px}form{grid-template-columns:1fr;gap:36px}}
```

<!-- v:section.contact-form/tinted-panel-form -->
### Tinted panel form

*Feeling: one job on a clean desk.*

One quiet panel holds the form. Modern Treasury sets a warm tint at 8px radius with square white inputs and 16/600 labels, and the mix of soft panel and hard corners reads as finance. IDEO flips a slate panel and uses one neon submit, which gives a plain form an unmistakable voice. Keep the panel a tone step, with no border and no shadow.

**Seen on** Modern Treasury, IDEO Work, IDEO Contact, IDEO People. **Suits** dark precision, light precision; agency, finance. *4 pages, quality 4.*

```css
form{background:var(--surface);border-radius:8px;padding:24px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.f{display:grid;gap:6px}.w{grid-column:1/-1}
label{font-size:16px;font-weight:600}
label i{font-style:normal;color:var(--ink-3)}
/* square white fields on a warm panel: the corners say form, the panel says one task */
input,select{width:100%;height:42px;padding:0 12px;border:1px solid var(--line);border-radius:0;background:var(--bg);font-size:16px;outline:0;appearance:none}
input:focus,select:focus{border-color:var(--ink);box-shadow:0 0 0 1px var(--ink)}
form button{justify-self:start;height:42px;margin-top:8px;padding:0 16px;border:0;background:var(--ink);color:var(--bg);font-size:16px;font-weight:500;cursor:pointer}
@media(max-width:700px){form{grid-template-columns:1fr;padding:20px}}
```

<!-- v:section.contact-form/stepped-form -->
### Stepped form

*Feeling: this will be quick.*

Split a long form into steps so that the first looks easy. Intercom's first step asks only for email and company size, beside a sky panel carrying logos, with a mono step count. Stripe sets a 608px card with three tab markers over its ribbon and labels at the left of each field. Figma centres a 540px form of filled fields with labels inside, a "Step 1 of 2" caption and a black Next. The analyst read these fields as 46px tall, and they are about 58px, which leaves room for the label inside. Magram numbers its tabs 01 to 03. Golden uses large option rows rather than inputs, so a question takes one tap.

**Seen on** Stripe Contact Sales, Intercom Contact, Golden Assisted, Hibachi Guru, Magram, 6 pages in all. **Suits** light precision, gradient light, warm neutral, photo-led; SaaS, local business, finance, agency. *6 pages, quality 5.*

```css
.wrap{width:min(540px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.step{display:flex;justify-content:space-between;font-size:13px;color:var(--ink-2);margin-bottom:10px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.f{position:relative;margin-bottom:8px}
/* the label sits inside the filled box, so the box is the only surface and nothing needs a border */
.f label{position:absolute;left:10px;top:8px;font:400 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.02em;text-transform:uppercase;color:var(--ink-2);pointer-events:none}
.f input,.f select{width:100%;height:58px;padding:22px 10px 6px;border:0;border-radius:8px;background:var(--surface);font-size:16px;outline:0;box-shadow:inset 0 0 0 1px transparent;transition:box-shadow .12s;appearance:none}
.f input:focus,.f select:focus{box-shadow:inset 0 0 0 2px var(--ink)}
.f svg{position:absolute;right:12px;top:22px;width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.5;pointer-events:none}
form button{width:100%;height:46px;margin-top:8px;border:0;border-radius:8px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
```

<!-- v:section.contact-form/one-question-sheet -->
### One question sheet

*Feeling: a conversation starts.*

New Material sets a phone-like sheet with an avatar placeholder and a single question, with a ghost answer and a round arrow, while an email chip with a Copy pill sits at the lower left for anyone who prefers to write. It suits agencies and AI products. Offer the plain email too, as they do.

**Seen on** New Material. **Suits** light precision; agency. *1 page, quality 4.*

<!-- v:section.contact-form/booking-embed -->
### Booking embed

*Feeling: skip the back and forth.*

Replace the form with the calendar. Mirim sets a three-pane scheduler at radius 8 on a full-bleed brand colour, with host and agenda, a month grid with available days in grey, and time buttons. Style the embed to your palette, and keep it this wide so the calendar is readable. Lil Italy uses the same idea for table bookings.

**Seen on** Mirim, Lil Italy. **Suits** warm neutral; agency, food and drink. *2 pages, quality 4.*

<!-- v:section.contact-form/headline-beside-form-card -->
### Headline beside form card

*Feeling: a strong pitch and a clear ask.*

A dark or coloured band with a pitch at left and a white card at right. Energen is the best version: three tick lines say what happens next, and a 12px accent slab offset behind a 28px card gives it weight. Crescent Dental uses a teal band and a white card. It is common and it converts. Lift it with the reassurance lines, or it is just a template.

**Seen on** Energen Digital, Crescent Dental, Peloton, Frontend Masters, Przebiegły Team. **Suits** photo-led, bold colour, dark precision, expressive; health, agency, SaaS, education. *5 pages, quality 3.*

<!-- v:section.contact-form/form-card-over-art -->
### Form card over art

*Feeling: the brand's world behind the form.*

A card over a scene. Fantasy parks a small white card at the right of a black 3D scene. Solid cards read best, and translucent ones over busy photos, as on Flavor Dady, suffer. Keep the form very short.

**Seen on** Flavor Dady, Diamonds Re, Aarretuote, Fantasy Contact. **Suits** photo-led, bold colour, 3D render; food and drink, local business, ecommerce, agency. *4 pages, quality 3.*

<!-- v:section.contact-form/contact-without-form -->
### Contact without a form

*Feeling: just write to us.*

Paco Coursey's contact is one sentence with two links. Pentagram sets a title and large photographs, and email links carry the action. Basic sets a 90px title beside a portrait, with labelled emails for new business, press and jobs. Dentists and restaurants keep a phone number and a booking button always in view. This is often the best option for small teams.

**Seen on** Paco Coursey, Pentagram Contact, La Table de Joakim, Basic Agency Contact, Patrick Heintzmann, 8 pages in all. **Suits** photo-led, type-led, mono technical, warm neutral; portfolio, agency, food and drink, finance. *8 pages, quality 3.*

<!-- v:section.contact-form/routing-list -->
### Routing list

*Feeling: the right desk, first time.*

Sanity offers four routes with no field in sight. My first version looked timid, because I took the analyst's 18px titles and pale rules. The real titles are about 22px, the rules are nearly ink, and the descriptions are in ink rather than grey. A list this plain needs that contrast. Sora offers two boxed options with a circular icon each. Fantasy uses a small segmented control above one huge email address.

**Seen on** Sanity Contact, Sora, Fantasy Contact. **Suits** light precision, 3D render; developer tools, AI, agency. *3 pages, quality 4.*

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

<!-- v:section.contact-form/plain-stacked-form -->
### Plain stacked form

*Feeling: a form.*

Labels, fields, a dark button. Leo Cussen's is unremarkable and fine. If an institution needs this, spend your effort on field count, errors and the reply promise instead of decoration.

**Seen on** Leo Cussen, Custom Multicades. **Suits** warm neutral, dark precision; education, ecommerce. *2 pages, quality 2.*

<!-- v:section.contact-form/visit-and-directions -->
### Visit and directions

*Feeling: how to get here.*

For a physical place, contact is directions. Serpentine's row describes a map with pins beside a colour panel with collapsible transport rows, though the captured frames we opened did not show it, so treat this as a description rather than a checked recipe. Keep the address as text, the hours beside it, and a link to a maps app.

**Seen on** Serpentine Visit. **Suits** bold colour; culture. *1 page, quality 3.*

### Mistakes that cheapen a form

- **Too many fields.** Each one costs replies. Ask what you need to answer, and no more.
- **Placeholder-only labels.** They vanish on typing.
- **A card around everything.** A shadowed card on a white page adds nothing. Most top forms have no container.
- **A full-width accent button on a desktop form.** It looks like a checkout. A plain button at the left edge reads calmer, as on Vercel and Modern Treasury. Full width belongs to narrow steps.
- **Asterisks everywhere.** If almost every field is required, mark the optional ones.
- **Taking a spec literally.** Three of my fixes here came from checking the frame: Vercel's panel that was not there, Figma's taller fields, Sanity's stronger rules. Measure the real thing.
- **Silence after submit.** Replace the form with what happens next and when.
- **Default focus.** A blue browser outline on a warm page is the loudest thing on it.
- **Small text on phones.** Under 16px, iOS zooms the page on focus and leaves it there.

---

## Putting a page together

These are judgement calls from reading the frames, not measurements.

**A pricing page.** The strong order is plans, then logos or a quote, then the comparison matrix, then the FAQ, then a plain close. Warp, Cursor, Vercel, Attio and Claude all run close to this. Do not repeat a device between them: if plans use a ruled grid, the comparison can stay ruled because they are one system, but the FAQ should loosen to a split title, and the close should drop the rules or use them once.

**A product page.** The FAQ and close sit last, and they should not both shout. A plain FAQ can sit above a loud close, or a loud FAQ above a plain one. Cursor's tone-band FAQ runs straight into a plain close, and the tone band ending is the change of beat.

**Stack the ending deliberately.** Close, sign-up and footer are three asks in a row. Strong sites merge them. Put the sign-up inside the footer as a row, so the close stays alone.

**Carry a device through.** A mono label, a tick style or a plus that appears in pricing should reappear in the FAQ. Sanity's mono caps run from plan units through table groups to FAQ rows, which is why a long page reads as one thing.

**Match these to the surface system.** See the systems table in the surface chapter. An instrument page uses ruled plans, a sticky matrix, a reading column and a ruled break. A soft product page uses tonal cards, tile rows and a tone panel. A printed page uses boxed rows, square inputs and hard offsets. An editorial page uses price rows, underline fields and a ruled statement. A colour-room page uses a colour panel, big type rows and a rounded sheet.

**Keep two sites apart.** Before you build, change at least one of these from the obvious: how the recommended plan is marked, what "no" looks like in the table, what holds the FAQ rows, the ground of the close, and whether the sign-up has a field. Two pages built from the same variants will still differ if those five differ.

### Before you call it done

- Every plan's price, button and list sit on the same lines across columns, and stay there when a line of copy gets longer.
- Exactly one filled button per decision.
- Every number is tabular, and every limit is a number.
- The comparison header sticks, and you checked for an `overflow` ancestor.
- "No" is quiet.
- FAQ questions are ones a real customer would ask.
- The close sounds like this product and could not be swapped onto another.
- Every field has a real label, `type`, `autocomplete`, a focus state and an error state.
- Forms have a success state.
- Field text is 16px on phones, and tap targets are at least 44px.
- At 390px wide, nothing is squeezed: tables scroll with labels pinned, and plans stack.
