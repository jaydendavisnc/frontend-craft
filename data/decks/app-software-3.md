# Your direction (seed 1049)

Reads as **saas**, surface **app**, register **render-3d** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `nav.sidebar-nav/numbered-rail`
2. Data table: `app.data-table/pagination-footer`
3. Charts: `product.data-viz/micro-instrument`
4. Controls: `app.form-control/hairline-segmented`
5. Overlays: `app.modal-sheet/corner-consent-card`
6. Empty state: `app.empty-state/centered-icon-stack`
7. Numerals: `type.numerals/price-large-unit-small`
8. Surfaces: `surface.card/tonal-card`
9. Surface ladder: `atmosphere.dark-surface-ladder/cool-navy-ladder`
10. Hover: `motion.hover-state/accent-flip`

## Type system

**Bruno Ace** with **Geologica**. Cleaner than the usual sci-fi wides for automotive; a plain geometric gives it a showroom.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Geologica 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap https://fonts.googleapis.com/css2?family=Geologica:slnt,wght,CRSV,SHRP@-12..0,100..900,0..1,0..100&display=swap

## Palette

From BILD: bg #f5f6fb, surface #ffffff, text #000000, muted #6b6b70, accent #1f2229. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion

Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**BILD** (saas, silver) https://bild-group.com/
- Doing: A construction voice-note app sold through a soft sky, a real interactive phone demo and a friendly 3D site-foreman robot.
- Why it feels made: The hero is a real step-through demo rather than a mock image, and the 3D mascot and helmet render give it its own identity. The capture is short, and the page beyond the demo stays simple.
- If imitated badly: A 3D mascot needs real render quality; a stock-looking robot would make it a toy.

**Analogue** (ecommerce, gold) https://analogue.co
- Doing: Runs a retro-gaming hardware store like a gallery: one render, one sentence and one black pill per full-bleed block.
- Why it feels made: Renders share the page's exact ground, so products sit in the layout instead of on top of it. Nav, footer and base row all reuse one set of column positions, with two radii and zero shadows across the page.
- If imitated badly: With stock or mid-quality renders the formula collapses, because nothing else on the page carries interest.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: numbered-rail (seen on Loops, Michelle Kaye, Paradigm)

*Feeling: an index on a contact sheet.*

A tiny side index. Special Production sets 16px ultra-black numbers with the active one inside a 34x20 outlined ellipse, like a pencil circle. Overtime runs a word list that fades with distance from the active item, so scrolling feels like a picker wheel. Paradigm shows bracketed numbers, with the current slide's bracket empty, and names a key for every control. Loops puts eight 8px ticks on its colour stripe, the current one 14px long, so its decoration does a job. Use it for decks, reports and scroll stories.

### Data table: pagination-footer (seen on atlassian dynamic table, HF models, GitHub issues)

*Feeling: a quiet end to the table.*

Workbench tables want a compact footer: selection count at left, rows per page and page N of M at right, with icon buttons. Public lists want a centred numbered pager, with the current page solid. Keep the control height at 32 and use tabular numerals so nothing shifts between pages. Disabled arrows stay visible at the ends so the layout holds.

**Recipe.** Table ending: left a selection count at 13px muted, right a rows-per-page select, page N of M and four 32px icon buttons; or a centred numbered pager with 32px squares, 6px radius, current page solid. Tabular numerals so width never jumps.

```css
.pg{display:flex;justify-content:center;gap:4px;align-items:center}
.pg a{min-width:32px;height:32px;display:grid;place-items:center;padding:0 6px;border-radius:6px;color:var(--ink);text-decoration:none;font-variant-numeric:tabular-nums}
.pg a[aria-current]{background:var(--ink);color:var(--bg)}
.pg a.t{color:var(--ink-2)}
```

### Charts: micro-instrument (seen on Drizzle, Three Zero Five Studio, Language Explorer)

*A small true readout of the world.* Quality 5/5, 3 sites.

**Use:** Footers, cards, and spots where a whole chart is too much. **Not:** As fake decoration. It must be live or accurate.

**Recipe:** A tiny widget with real data: 46px dial with one needle under 14px mono readout, or 197x35 sparkline with a 2.5px line and tinted fill and no axes, or four mono label-value rows at 21px pitch.

### Controls: hairline-segmented (seen on geist switch, Neon Docs, Railway Docs)

*Feeling: compact, tool-like.*

The inverse of the raised track. Analysts described Geist's switch as a white pill on a grey track, but the frame shows the opposite: a white track with a hairline, and a #f2f2f2 fill on the active item. It sits more quietly on white pages and inside toolbars. Use it for small view toggles, source and output, linear and log, and three-state theme switches.

**Recipe.** White track with 1px hairline, 6px radius, 4px padding, 34 to 42 tall; active item 5 to 7% grey fill in ink, inactive second ink, no shadow. Full-width and icon-only forms with tooltips. The compact three-state theme switch lives here.

```css
.line{display:inline-flex;padding:4px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line)}
.line button{height:28px;padding:0 12px;border:0;border-radius:4px;background:none;font:500 13px var(--font-text);color:var(--ink-2)}
.line button[aria-checked=true]{background:var(--fill-active);color:var(--ink)}
```

### Overlays: corner-consent-card (seen on Stripe Payments, Rabbit, PostHog)

*Feeling: a legal chore, handled with grace.*

A small fixed card that does not block the page. PostHog turns the cookie notice into a joke with a cut-out figure, and it became a brand moment. Stripe's chat card uses the same slot with overlapping avatars. Keep accept and decline equal in weight, because a dark pattern here costs trust.

**Recipe.** Fixed bottom-right card 344 to 390 wide, 4 to 12px radius, 16px bold title, short plain copy, close x, decline and accept equally visible. Personality allowed, such as a cut-out figure breaking the corner. Never blocks the page.

### Empty state: centered-icon-stack (seen on geist empty, primer blankslate, atlassian empty)

*Feeling: calm, helpful, unfussy.*

The default for product areas. Geist uses a 54px hairline tile holding a grey glyph, a 16px title, a muted line and one action, with a text link beneath. Primer uses a 32px glyph, a 20px title and a green primary. Use one action, and make it the primary only if it is the screen's main next step. With no fill and no illustration it fits any palette.

**Recipe.** Centred stack in a bordered 8 to 12 radius box, 48 to 64px padding: 54px hairline icon tile or 24 to 32px glyph, 16 to 20/500 title, 14px muted copy at 40ch, one action, optional link. No illustration, no fill.

```css
.box{display:grid;justify-items:center;align-content:center;text-align:center;min-height:348px;padding:48px 24px;border-radius:12px;box-shadow:inset 0 0 0 1px var(--line)}
.tile{width:54px;height:54px;display:grid;place-items:center;border-radius:10px;box-shadow:inset 0 0 0 1px var(--line);margin-bottom:24px;color:var(--ink-2)}
.box h3{font:500 16px/24px var(--font-display);margin-bottom:8px}
.box p{color:var(--ink-2);max-width:40ch;text-wrap:balance}
.acts{display:flex;gap:8px;margin-top:20px}
.lnk{display:inline-flex;gap:4px;align-items:center;margin-top:12px;color:var(--ink-2);text-decoration:none}
```

### Numerals: price-large-unit-small (seen on Raycast Pricing, Warp Pricing, Vercel Pricing)

The standard for good pricing. Seen on 6 sites.

**Use it for:** Any plan card.

**Avoid it for:** Metered pricing with several rates: use quiet-rate-stack.

**Recipe:** Price 36-64px in the display sans, weight 500-700, tracking -0.02 to -0.05em; unit 14-16px on the same baseline in grey or mono, 4-10px gap. The word Custom takes the same size so columns align. Reserve a fixed line above for billing notes so all prices sit level.

**Why it works:** The reserved note line is what most clones miss. A plan with no billing note jumps up by a line and the row of prices stops aligning.

```css
.price { font: 500 56px/1.1 var(--font-display); letter-spacing: -.03em; }
.price small { font: 400 14px/1 var(--font-mono); letter-spacing: 0; color: var(--ink-3); margin-left: 6px; }
.note { min-height: 20px; } /* reserved on every card, so prices stay level */
```

<a id="quiet-rate-stack"></a>

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: cool-navy-ladder (seen on Increase, Better Stack, Peloton)

*Feeling: institutional, technical, night-shift. Trustworthy rather than edgy.*

**Use it for:** Finance, infrastructure and enterprise tools, and any page with blue product UI. **Avoid:** Warm or photographic brands. A navy page with a neutral grey body text looks unconsidered.

One blue-grey hue at every step, oklch hue 255 to 280. Page L .17 to .23, C .02 to .05. Panels +.045, raised +.05 more. Rules white 8% or one step up. Body text is blue-grey too, never neutral grey.

Measured examples: #0f101a, #171926, #1f2433, and #151e29, #1d2a36, #1a2b3b, and #1a222d, #232b38, #333947. A blue cast stops true-black dead spots on cheap panels and lets one saturated accent stand out.

### Hover: accent-flip (seen on Stripe Pricing, Warp Pricing, Stripe Climate)

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.