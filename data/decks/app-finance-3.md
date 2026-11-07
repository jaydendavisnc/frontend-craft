# Your direction (seed 1052)

Reads as **finance**, surface **app**, register **gradient-light** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.dashboard-layout/specimen-page`
2. Data table: `app.data-table/zebra-numeric-table`
3. Charts: `product.data-viz/dot-globe-with-chips`
4. Controls: `app.form-control/label-left-form`
5. Overlays: `app.modal-sheet/corner-consent-card`
6. Empty state: `app.empty-state/shortcut-list-empty`
7. Numerals: `type.numerals/live-counter`
8. Surfaces: `surface.panel/tonal-feature-panel`
9. Surface ladder: `atmosphere.light-surface-ladder/tinted-tonal-surfaces`
10. Hover: `motion.hover-state/card-state-change`

## Type system

**Funnel Display** with **Fragment Mono**. A fresher headline neutral with a lively ampersand; the mono keeps it precise.
- Display: 64px, phone 38px, weight 500, tracking -0.03em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Fragment Mono 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap https://fonts.googleapis.com/css2?family=Fragment+Mono:ital,wght@0,400;1,400&display=swap

## Palette

From Stripe Climate: bg #ffffff, surface #f6f9fc, text #0a2540, muted #425466, accent #15be53. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Noxus** (ai, silver) https://www.noxus.ai/
- Doing: Enterprise agents made approachable with one dusty blue, warm workplace portraits and actual workflow screens.
- Why it feels made: A single blue runs from the cycling headline word to tile pattern to panels, and mono eyebrows add a technical register beside a humanist display face.
- If imitated badly: A form modal covered the right third of every desktop frame in this capture; a persistent popup like it hides the page and cheapens it.

**Stripe Sessions** (brand, gold) https://stripe.com/sessions
- Doing: A conference page holds one extraordinary colour ribbon against an almost silent system of ultralight type, plum ink and hairlines.
- Why it feels made: Sub-1.0 leading on an ultralight grotesk, a strict one-third offset grid and plum in place of black. All colour is rationed to the ribbon, with only trace echoes in hover hairlines and day flags.
- If imitated badly: Tight ultralight type fails on lesser fonts, and the page collapses without a render of this quality at its centre.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: specimen-page (seen on Stripe appearance, Geist colors, geist modal)

*Feeling: a design system showing its work.*

For component docs and internal kits. A hairline well with a centred control, a footer strip that discloses code, and anatomy figures with numbered pins. Stripe's appearance docs draw dashed leaders from real rendered controls to class names, which is the strongest version. Keep demos real and interactive rather than pictures.

**Recipe.** Design system page: each demo in a 1px bordered well, 8 to 12px radius, centred control, 48px show-code footer strip; anatomy diagrams with numbered pins and leader lines; do and don't pairs with 4px green or red top bars.

### Data table: zebra-numeric-table (seen on geist table, Plausible sources, Plausible pages)

*Feeling: fast to scan, a spreadsheet with manners.*

No rules at all. Alternate rows carry a 2 to 3% fill with a 4 to 6px radius on their ends. Use it for many numeric columns at a tight 36 to 40px pitch, where rules at every row would turn into stripes of ink. Zebra helps the eye stay on a row across a wide gap, which matters most when text is on the left and numbers far right.

Sample the tint: Geist's band is #fafafa on white, Plausible's #f7f7f7. If you can see it clearly on a good monitor it is too strong.

**Recipe.** Dense numeric table without rules: 36 to 40px rows, 14/400, alternate rows at 2 to 3% ink with 4 to 6px radius, 12/500 muted headers, 16px favicon plus name, right-aligned tabular numbers, one active sort arrow.

```css
table.z th{height:36px;padding:0 8px;font-size:12px;font-weight:600;color:var(--ink-2);text-align:right}
table.z td{height:36px;padding:0 8px;text-align:right;font-variant-numeric:tabular-nums}
table.z th:first-child,table.z td:first-child{text-align:left}
table.z tbody tr:nth-child(odd) td{background:color-mix(in srgb,var(--ink) 3%,transparent)}
table.z tbody td:first-child{border-radius:4px 0 0 4px}
table.z tbody td:last-child{border-radius:0 4px 4px 0}
```

### Charts: dot-globe-with-chips (seen on LiveKit, Ramp, Stripe)

*Global, told by dots, and specific.* Quality 5/5, 5 sites.

**Use:** Global payments and infrastructure. **Not:** Local businesses. Also decorative globes that show no data.

**Recipe:** Sphere of 2-4px dots with continents in a dot matrix. Small chips with mono 10px city, department and local-currency amount pin to dots, or 10px accent squares mark regions with a scrolling mono country list beside it. The chips are the point. Without specific places and amounts, a dot globe is wallpaper. Daily uses a plain 250px wire sphere as a quiet section accent.

### Controls: label-left-form (seen on Stripe Contact Sales)

*Feeling: a contract.*

Labels in their own 190px column, inputs at 44 to 48. Stripe's contact page sets this inside a 608 wide card under a three-step underline stepper, so a short form reads like a document and the shared edge scans quickly. Stack it under 700px. Skip it in dense tools, where the label column wastes width.

**Recipe.** Two columns: 14/600 labels in a 190px column, 336px inputs at 44 to 48 tall, 1px border, 4px radius, focus 2px accent with a faint halo. Reads as a contract. Suits contact sales and long account forms on wide screens.

```css
.lf{display:grid;grid-template-columns:190px minmax(0,336px);gap:16px 24px;align-items:center}
.lf label{font-weight:600}.lf input{height:48px;padding:0 12px;border:1px solid var(--line-strong);border-radius:4px;font:14px var(--font-text)}
@media(max-width:700px){.lf{grid-template-columns:minmax(0,1fr);gap:6px}}
```

### Overlays: corner-consent-card (seen on Stripe Payments, Rabbit, PostHog)

*Feeling: a legal chore, handled with grace.*

A small fixed card that does not block the page. PostHog turns the cookie notice into a joke with a cut-out figure, and it became a brand moment. Stripe's chat card uses the same slot with overlapping avatars. Keep accept and decline equal in weight, because a dark pattern here costs trust.

**Recipe.** Fixed bottom-right card 344 to 390 wide, 4 to 12px radius, 16px bold title, short plain copy, close x, decline and accept equally visible. Personality allowed, such as a cut-out figure breaking the corner. Never blocks the page.

### Empty state: shortcut-list-empty (seen on Hoppscotch home)

*Feeling: an expert's blank page.*

Hoppscotch's blank pane lists the four shortcuts that matter, labels right aligned against keycaps. It turns dead space into training. Use it in tools, for panes that are empty by default.

**Recipe.** Blank work pane teaches the keyboard: 3 to 4 rows with label right aligned at 12 to 13px muted and keycaps left, then one outlined docs link. Centred, no headline. Tools only.

```css
.k{display:grid;grid-template-columns:200px auto;gap:16px;align-items:center;font-size:13px;color:var(--ink-2)}
.k span:first-child{text-align:right}
```

### Numerals: live-counter (seen on X8 Eyewear, Copilot, Monet 100)

Time passing on the page. Seen on 4 sites.

**Use it for:** Load percentages, scroll progress and live statistics.

**Avoid it for:** Numbers that count up from zero for no reason.

**Recipe:** Digits roll vertically in a mask of one line height, stopping one by one, tabular-nums, at 14-140px. Trigger on entry, or tie to scroll or load. Render the real final value in the HTML so it survives no script and reduced motion.

<a id="folio-numerals"></a>

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

### Surface ladder: tinted-tonal-surfaces (seen on Material 3, Mercury Pricing, Zentry)

*Feeling: friendly and systematic. The whole page is one colour at different strengths.*

**Use it for:** Design systems, pastel consumer tools, finance with a soft accent. **Avoid:** Accents with high chroma at low lightness: they turn grey when tinted this far.

Four tones of the accent hue: oklch(.99 .006 h), (.965 .01 h), (.948 .007 h), (.90 .037 h). No shadow and no border. Depth comes from tone alone. Text uses a dark tint of the same hue.

Material 3 is the clearest example: #fefbff, #f8f1f6, #f2ecee and #dcdaf5 all carry one hue, with one measured shadow and no borders. Zentry runs the same logic on a stronger lavender, with panels 4 percent apart.

### Hover: card-state-change (seen on 099, ECI, Jasper)

*Feeling: the card says something new.*

The card changes content rather than position. Marine Layer crossfades a second product photo over 0.4s, which may be the most useful hover in commerce. On Jasper a box fills pale peach, the icon tile inverts, the line underlines and the arrow nudges, with no lift. Stripe grows a poster about 12px and extends its chevron into an arrow. Acne Studios adds a typed suffix to a label. Use it wherever a card has more to tell. On touch, it needs a fallback, since hover never fires.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.