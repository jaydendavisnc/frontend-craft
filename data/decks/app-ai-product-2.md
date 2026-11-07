# Your direction (seed 1054)

Reads as **ai**, surface **app**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.app-sidebar/workspace-sidebar`
2. Data table: `app.data-table/parameter-list`
3. Charts: `product.data-viz/hairline-radial-map`
4. Controls: `app.form-control/input-group`
5. Overlays: `app.modal-sheet/tooltip-chip`
6. Empty state: `app.empty-state/semantic-callout`
7. Numerals: `type.numerals/display-stat-with-caption`
8. Surfaces: `surface.card/crop-bleed-card`
9. Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
10. Hover: `motion.hover-state/chevron-flip`

## Type system

**BhuTuka Expanded One** with **Spectral**. A thin serif stretched very wide; a fine text serif makes the distortion read as intent.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Spectral 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&display=swap https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap

## Palette

From Stripe Pricing: bg #f7f8fc, surface #ffffff, text #0a2540, muted #425466, accent #635bff. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

## Motion

Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Factory** (ai, gold) https://www.factory.ai
- Doing: An enterprise AI tool dressed as precision industrial equipment: greyscale, square corners, mono labels, one orange dot.
- Why it feels made: A strict 24px gutter, 3px button radius and five-step neutral ladder hold across 9000px, and colour appears only as tiny orange dots and photographic grain. The restraint is total and the imagery does the warming.
- If imitated badly: Copy the mono caps without the grainy imagery and exact grey ladder and it becomes an empty wireframe.

**Ramp** (finance, gold) https://ramp.com
- Doing: A finance platform sold as calm automation: one loud lime on warm off-white, huge amounts of believable product, and a story that turns chaos into a single window.
- Why it feels made: A single regular-weight grotesque, a strict warm 12px panel and lime reserved for action create restraint, while every panel holds dense, animated, plausible product. Live counters make the page feel as if it is running.
- If imitated badly: Copying lime and off-white without the dense product work leaves a sparse page with a loud button.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: workspace-sidebar (seen on shadcn sidebar-07 view, shadcn dashboard-01 view, Linear)

*Feeling: a tidy desk, the product's home.*

The default for any SaaS or AI product with accounts and projects. A workspace switcher sits on top, primary destinations come next with no label, named groups follow, and settings plus the user block pin to the base. Do not use it for documentation, where a search-first tree serves better.

Sit the rail straight on a 2 to 4% tinted shell with no right border, because the tone step already draws the edge. Rows are 32 tall with a 4px gap, so the pitch is 36. Icons sit in second ink and turn full ink on the current row. Attach counts at the right in 12px tabular type. On phones the rail becomes a drawer behind a top bar, and on narrow desktops it collapses to a 48px icon rail.

**Recipe.** Product rail 256 to 288 wide on a 2 to 4% tinted shell, no border. Head: 32px logo tile, workspace name 14/500, 12px plan line, up-down chevron. Rows 32 tall with 4 gap, 16px icons, 14px labels, 12px muted group labels. Footer: avatar, name, email.

```css
.side{position:sticky;top:0;height:100dvh;display:flex;flex-direction:column;padding:8px;background:var(--surface)}
.switch{display:flex;align-items:center;gap:8px;height:48px;padding:0 8px;border-radius:8px}
.logo{width:32px;height:32px;border-radius:8px;background:var(--ink);color:var(--bg);display:grid;place-items:center}
.switch b{display:block;font-weight:500;line-height:18px}
.switch small{display:block;font-size:12px;line-height:16px;color:var(--ink-2)}
.group{display:grid;gap:4px;padding:8px 0}
.group h6{font:500 12px/32px var(--font-text);height:32px;color:var(--ink-2);padding:0 8px;margin-bottom:-4px}
.item{display:flex;align-items:center;gap:8px;height:32px;padding:0 8px;border-radius:6px;color:var(--ink);text-decoration:none}
.item svg{width:16px;height:16px;color:var(--ink-2)}
.item:hover,.switch:hover{background:var(--fill-hover)}
.item[aria-current]{background:var(--fill-active);font-weight:500}
.item[aria-current] svg{color:var(--ink)}
.item .n{margin-left:auto;font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.foot{margin-top:auto}
```

### Data table: parameter-list (seen on Stripe API docs)

*Feeling: reference writing at its best.*

When each row needs a sentence, a table squeezes it. Stripe's API docs stack a bold mono name, a muted type and a description, with a rule between, then let nested attributes expand. Beside it, a small bordered summary table with a tinted head row gives the fast lookup. Use the pair for reference docs.

**Recipe.** Stacked reference: mono 14px bold name, 12px muted type beside it, description 14 to 16px below, 1px rules between, nested child-attributes toggle. Better than a table when descriptions run to sentences. Pair with a bordered summary card in the right column.

```css
.p{border-top:1px solid var(--line);padding:16px 0}
.p b{font:600 14px var(--font-mono,ui-monospace,monospace)}
.p i{font:400 12px var(--font-text);color:var(--ink-2);margin-left:8px}
.p p{color:var(--ink-2);margin-top:4px}
.ref{border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);overflow:hidden}
.ref h6{font:600 12px/32px var(--font-text);text-transform:uppercase;padding:0 12px;background:var(--fill-hover);border-bottom:1px solid var(--line);color:var(--ink-2)}
```

### Charts: hairline-radial-map (seen on Claude, Stripe, Vercel AI)

*Everything that can grow from one centre.* Quality 5/5, 3 sites.

**Use:** Replacing a long capability list. **Not:** Short lists, which look sparse.

**Recipe:** Logo at centre with 1px spokes to 22px branches, each spraying finer spokes to 14px leaves. Labels fade from ink to 30% with depth and drift in on scroll. Or three concentric arcs, solid, dashed and dotted, carrying 24px logo chips.

### Controls: input-group (seen on geist input, shadcn input group, atlassian textfield)

*Feeling: one control that knows its context.*

Currency symbols, units, domains, search icons, copy buttons and shortcut chips all belong inside one border. The trick is that the outer box takes the edge and focus ring, using `:focus-within`, and the input inside is borderless. Keep addons in second ink at 14px. Use a tinted addon with a divider when the prefix is fixed data, such as a URL scheme, and bare inline text when it is a unit.

**Recipe.** Prefix, suffix and actions inside one 36px border: $ or icon at 12px inset, muted unit, trailing 28px ghost button, or tinted scheme addon with a divider. Focus ring wraps the whole group, never the inner input. Textarea adds a 12px footer line.

```css
.grp{display:flex;align-items:center;height:36px;border-radius:8px;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line-strong);transition:box-shadow .15s}
.grp:focus-within{box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus)}
.grp input{flex:1;min-width:0;height:100%;border:0;background:none;outline:0;padding:0 8px;font:14px var(--font-text);color:var(--ink)}
.grp>span{padding-left:12px;color:var(--ink-2)}.grp>span.e{padding:0 12px 0 0}
.grp button{width:28px;height:28px;margin-right:4px;border:0;border-radius:6px;background:none;color:var(--ink-2);display:grid;place-items:center}
.pre{display:flex;height:36px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line-strong);overflow:hidden}
.pre span{display:flex;align-items:center;padding:0 12px;background:var(--fill-hover);border-right:1px solid var(--line);color:var(--ink-2)}
```

### Overlays: tooltip-chip (seen on shadcn tooltip, carbon forms)

*Feeling: a whispered label.*

A dark chip that names an icon. It inverts the theme, which gives it contrast with no border. Wait 300ms on first hover, then show instantly for neighbours. It must appear on keyboard focus. Do not hide essential information here, since touch has no hover. If the text needs a link or runs past one line, use a popover.

**Recipe.** Near-black chip on light themes, 12/500, 6 by 10px padding, 6px radius, 8px rotated arrow, 4px off the trigger, 150ms fade with 2px slide, 300ms delay. One short phrase, no actions. Keyboard focus shows it too.

```css
.tip{position:relative;padding:6px 10px;border-radius:6px;background:var(--ink);color:var(--bg);font-size:12px;font-weight:500;line-height:16px}
.tip::after{content:"";position:absolute;left:50%;bottom:-4px;width:8px;height:8px;margin-left:-4px;background:inherit;transform:rotate(45deg);border-radius:1px}
```

### Empty state: semantic-callout (seen on geist note, Replicate model, shadcn alert)

*Feeling: a note in the margin.*

An inline message inside the page. Geist's note uses a pale tint with dark same-hue text, never a saturated fill, and an outline form for neutral notes. shadcn's destructive alert colours the text only and leaves the border neutral. Use it for warnings, plan limits and gated actions. Reserve a full-width banner for things that affect the whole app.

**Recipe.** Inline note: 36px minimum, 6 to 8px radius, 16px icon, 14px text in dark same-hue ink on an 8 to 14% tint, never saturated; optional 14/600 title and trailing 28px action. Hairline version for neutral info.

```css
.note{display:flex;align-items:center;gap:8px;min-height:36px;padding:8px 12px;border-radius:8px;background:color-mix(in oklab,var(--warn) 14%,var(--bg));color:color-mix(in oklab,var(--warn) 45%,var(--ink))}
.note.i{background:none;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink-2)}
```

### Numerals: display-stat-with-caption (seen on Decagon, Hims, Sword Health)

Proof, stated large. Seen on 9 sites.

**Use it for:** Customer stories and impact sections. Three across at most.

**Avoid it for:** Invented numbers, and three identical stat tiles straight after the hero.

**Recipe:** One stat at 100-150px beside a quote, or up to three at 48-72px, weight 400-700, tracking -0.02 to -0.04em, proportional figures, caption 14-30px 4-12px below. Set units at half size in a lighter ink. Long counters take slight positive tracking. Accent at most one figure.

**Why it works:** Long counters are the exception to tight tracking: one reference opens a ten-digit figure up so the commas do not clot, which reads as a precise measurement.

```css
.big       { font: 400 124px/1 var(--font-display); letter-spacing: -.04em; } /* one figure, beside a quote */
.big small { font-size: .5em; letter-spacing: -.02em; color: var(--ink-2); }
.stat      { font: 500 56px/1 var(--font-display); letter-spacing: -.03em; }  /* a row of up to three */
.stat small { font-size: .45em; font-weight: 400; letter-spacing: 0; color: var(--ink-2); }
.cap       { margin-top: 8px; font: 400 16px/1.4 var(--font-text); color: var(--ink-2); }
```

<a id="ruled-ledger-stat"></a>

### Surfaces: crop-bleed-card (seen on Meta AI, Affirm, Obsidian)

*Feeling: you are looking through a window at something much bigger.*

Copy top-left, and a real interface that starts inside the card and runs off two edges. This is the card that most often separates a product company from a template, because a crop implies there is more. Use it for product features. Do not use it without a real interface to show.

Position the window absolutely so that it overshoots, round only the single visible corner, and let the card clip it. Keep the content dense all the way to the crop.

```css
.card{position:relative;overflow:hidden;background:var(--surface);border-radius:12px;
  box-shadow:inset 0 0 0 1px var(--line);padding:24px;height:548px}
.card h3{font:600 24px/1.2 var(--font-display);letter-spacing:-.012em;margin-bottom:8px}
.card p{font-size:20px;line-height:25px;color:var(--ink-2);max-width:25em}
/* Overshoots right and bottom. Only the visible corner is rounded. */
.win{position:absolute;left:48px;top:188px;width:760px;height:560px;background:var(--bg);
  border-radius:12px 0 0 0;box-shadow:inset 0 0 0 1px var(--line);padding:24px 32px}
@media(max-width:760px){.card{height:480px}.card p{font-size:17px;line-height:23px}.win{left:24px;top:190px}}
```

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Hover: chevron-flip (seen on Calvyn, Chromatic, Hellgate)

*Feeling: the menu state, told by one glyph.*

A menu trigger's chevron rotates 180 degrees. Calvyn takes 0.2s, Docker 0.3s, Tana 0.2s, while the label takes a 5 to 8 percent tint. Dub flips with `scaleY(-1)`. Velora snaps the colour but eases the rotation, and that is the right split: the chevron carries the state, so it must be seen moving. Use it on every nav with panels.

```css
.trigger svg{transition:transform .25s var(--ease-ui)}
.trigger:hover,.trigger[aria-expanded=true]{background:var(--hover-tint)}
.trigger[aria-expanded=true] svg{transform:rotate(180deg)}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.