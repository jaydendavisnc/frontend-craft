# Your direction (seed 1055)

Reads as **ai**, surface **app**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `app.dashboard-layout/query-split-panes`
2. Data table: `app.data-table/grouped-header-table`
3. Charts: `product.data-viz/race-bars`
4. Controls: `app.form-control/prompt-composer`
5. Overlays: `app.modal-sheet/toast-stack`
6. Empty state: `app.empty-state/semantic-callout`
7. Numerals: `type.numerals/quiet-rate-stack`
8. Surfaces: `surface.panel/contrast-flip-panel`
9. Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
10. Hover: `motion.hover-state/media-zoom`

## Type system

**Zalando Sans Expanded** with **Zalando Sans**. Regular weight at large size looks like a fashion label, and the standard width below shares its drawing.
- Display: 64px, phone 38px, weight 400, tracking -0.025em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Zalando Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap

## Palette

From Render: bg #ffffff, surface #efefff, text #0d0d0d, muted #4d4d4d, accent #6c35f5. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Asana** (saas, gold) https://asana.com
- Doing: Sign-up is the hero, and a wire diagram of people and agents handing off work wraps it, so the product idea becomes the page structure.
- Why it feels made: One signature device, thin wires with nodes, runs from the hero into later sections while everything else stays disciplined: light-weight Lausanne, black pills, hairlines, white and #0d0d0d bands.
- If imitated badly: Wires need real routing and tiny detail or they look like clip art around a form, and the fixed 296px agent widget hides content.

**Stripe Pricing** (finance, gold) https://stripe.com/pricing
- Doing: A 23,000px rate card made navigable and calm by turning pricing into a well-indexed reference document under one vivid hero moment.
- Why it feels made: Everything hangs off visible 270px column guides, tables use a strict navy, grey and purple hierarchy, and navigation stays pinned with progress feedback. The only loud colour is the single gradient ribbon.
- If imitated badly: The diagonal ribbon is cheap without the real shader; a flat CSS rainbow behind cards turns the page into a 2018 template.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: query-split-panes (seen on Grafana explore, Replicate model)

*Feeling: ask, then see.*

Input and result as two stacked panes in one rounded panel, with a small sub-nav. Grafana Explore stacks query over graph. Replicate puts input left and output right, with Preview and JSON tabs and a Form, JSON, code tab strip on the input side. Use it for any tool where a person configures something and looks at the result. Keep the run control in one fixed place, and the result in view while editing.

**Recipe.** Query above and result below, or input left and output right, inside a 12px-radius panel: 150px sub-nav, ghost toolbar for split, add, time range and refresh, stacked panes with their own titles. Preview and JSON tabs on output. Stack on phone.

### Data table: grouped-header-table (seen on AA leaderboard, Postman)

*Feeling: a serious leaderboard.*

When columns fall into families, such as cost, speed and reliability, give them a two-tier head. Artificial Analysis does this with group labels over column labels and unit lines at 11px, and vertical rules only between groups. Those rules carry meaning, so they earn their place where a rule per column would not. A 4x16 colour tab before each name ties a row to its owner without colouring the row.

Centring numerals is acceptable here only because each column holds a single unit and the values are short. For money with different magnitudes, right-align.

**Recipe.** Wide comparison table: two-tier head on a tinted fill, 12/600 group row over 12/600 column row with 11px unit lines, vertical 1px rules only between groups, rows 40 to 45, 12 to 13px, 4x16 entity colour tab before the name, centred tabular numerals.

```css
thead{background:var(--fill-hover)}
th{font-weight:600;font-size:12px;line-height:16px;padding:8px 12px;border-bottom:1px solid var(--line);text-align:center}
th small{display:block;font-weight:400;font-size:11px;color:var(--ink-2)}
.g th{padding-bottom:0;border-bottom:0;text-align:left}
.gl{border-left:1px solid var(--line)}
td{height:40px;padding:0 12px;text-align:center;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums}
.n{display:flex;align-items:center;gap:8px;font-weight:600}
.n i{width:4px;height:16px;border-radius:2px;background:var(--c)}
```

### Charts: race-bars (seen on Astral, Bun, Hugging Face Pricing)

*A race, and it is not close.* Quality 5/5, 5 sites.

**Use:** Performance claims with real measured numbers. **Not:** Numbers that are close. A narrow win looks like a loss.

**Recipe:** 1px ink box, 46px tab row with active tab solid. Rows 44px: name plus mono version, 28px tinted track, solid bar on one shared scale, right-aligned mono time. Winner in accent. Axis below, then one line of test conditions and a reproduce link. Astral uses 8px bars with a 2px lime tick for the winner and 30px mono times. Rspack gives each tool three 8px tracks at 826px wide. The shared scale is the argument; never rescale per row. Always state the conditions.

```html
<style>
.bx{width:min(560px,100%);box-shadow:inset 0 0 0 1px var(--ink)}
.tabs{display:grid;grid-template-columns:repeat(4,1fr);height:46px;font-size:13px;font-weight:600}.tabs span{display:grid;place-items:center;box-shadow:-1px 0 0 var(--ink),0 1px 0 var(--ink)}.tabs .on{background:var(--ink);color:var(--bg)}
.in{padding:22px 24px 20px}
.r{display:grid;grid-template-columns:96px 1fr 72px;align-items:center;gap:12px;height:44px;font-size:14px;font-weight:600}.r small{display:block;font:11px var(--font-mono);color:var(--ink-2)}
.tr{height:28px;background:color-mix(in srgb,var(--ink) 5%,transparent)}.tr i{display:block;height:100%;width:var(--w);background:var(--ink);transform-origin:0;animation:g .9s cubic-bezier(.2,.8,.2,1) both}
.r.win .tr i{background:var(--accent)}
.tm{text-align:right;font:14px var(--font-mono);font-variant-numeric:tabular-nums;color:var(--ink-2)}
@keyframes g{from{transform:scaleX(0)}}@media(prefers-reduced-motion:reduce){.tr i{animation:none}}
</style>
<div class="bx"><div class="tabs"><span class="on">Cold start</span><span>Query</span><span>Join</span><span>Bulk load</span></div>
 <div class="in"><!-- one shared scale: --w is value / max -->
  <div class="r win"><div>Kestrel<small>v3.1</small></div><div class="tr"><i style="--w:7%"></i></div><div class="tm">0.34s</div></div>
  <div class="r"><div>Osprey<small>v12.4</small></div><div class="tr"><i style="--w:33%"></i></div><div class="tm">1.58s</div></div>
  <div class="r"><div>Merlin<small>v8.1</small></div><div class="tr"><i style="--w:100%"></i></div><div class="tm">4.81s</div></div>
  <p style="margin:16px 0 0;font-size:13px;color:var(--ink-2)">40 GB TPC-H, cold page cache, 8 vCPU, medians of 5 runs.</p></div></div>
```

### Controls: prompt-composer (seen on Stripe, Perplexity, HF spaces)

*Feeling: an invitation to start.*

For AI products the input is the page. Perplexity's is 640 by 122 with about a 20px radius and a foot row of tools. The input is larger than any other control because it is the product, so give it 16px text and generous air. Show a mode control and model picker in the foot, send at far right, and darken the edge on focus rather than adding a coloured ring. Grow with content up to about 40% of the viewport. Enter sends, Shift+Enter breaks a line.

**Recipe.** AI input as the page's centre: 640 wide, 20px radius, 1px line at 18% ink, 16px placeholder, foot row with add button, 32px mode segment, model select, mic and 32px solid send disc. Grows to 40vh; focus darkens the edge.

```css
.c{display:flex;flex-direction:column;background:var(--bg);border-radius:20px;box-shadow:0 0 0 1px var(--line-strong),0 1px 3px rgba(0,0,0,.04);padding:16px 12px 12px;transition:box-shadow .15s}
.c:focus-within{box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 34%,transparent),0 2px 8px rgba(0,0,0,.06)}
.c textarea{width:100%;min-height:44px;padding:0 8px;border:0;outline:0;resize:none;background:none;font:400 16px/24px var(--font-text);color:var(--ink)}
.foot{display:flex;align-items:center;gap:8px}
.ib{width:32px;height:32px;border:0;border-radius:50%;background:none;color:var(--ink-2);display:grid;place-items:center}
.mode{display:inline-flex;padding:3px;border-radius:17px;background:var(--fill-active)}
.mode button{display:flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:0;border-radius:14px;background:none;font:400 14px var(--font-text);color:var(--ink-2)}
.mode button[aria-pressed=true]{background:var(--bg);color:var(--ink);box-shadow:0 0 0 1px var(--line)}
.sel{margin-left:auto}.go{background:var(--ink);color:var(--bg)}
```

### Overlays: toast-stack (seen on Geist toast, shadcn sonner)

*Feeling: a quiet receipt.*

A short report at bottom right. Stack by scaling the older ones behind, so that a burst does not fill the screen. Offer Undo instead of a confirm dialog when you can, which is the best use of a toast. Errors stay until dismissed. Use `aria-live=polite`. Never put the only copy of important information in a toast.

**Recipe.** Bottom right, 356 wide, 10px radius, hairline, soft shadow, 13/500 title, 13px muted line, 16px status icon, optional 24px Undo. Stacks peek 12px at scale .95. Auto-dismiss at 4 to 6s, pause on hover, errors persist.

```css
.stack{position:fixed;right:24px;bottom:24px;width:min(356px,calc(100vw - 32px));height:120px}
.t{position:absolute;inset:auto 0 0;display:grid;grid-template-columns:16px 1fr auto;gap:10px;padding:14px 16px;background:var(--bg);border-radius:10px;box-shadow:0 0 0 1px var(--line),0 8px 24px -8px rgba(0,0,0,.16);transform-origin:bottom center}
.t:nth-child(2){transform:translateY(-12px) scale(.95);opacity:.9;z-index:-1}
.t:nth-child(3){transform:translateY(-24px) scale(.9);opacity:.6;z-index:-2}
.t b{font-weight:500;font-size:13px;line-height:18px;display:block}
.t p{font-size:13px;line-height:18px;color:var(--ink-2)}
```

### Empty state: semantic-callout (seen on geist note, Replicate model, shadcn alert)

*Feeling: a note in the margin.*

An inline message inside the page. Geist's note uses a pale tint with dark same-hue text, never a saturated fill, and an outline form for neutral notes. shadcn's destructive alert colours the text only and leaves the border neutral. Use it for warnings, plan limits and gated actions. Reserve a full-width banner for things that affect the whole app.

**Recipe.** Inline note: 36px minimum, 6 to 8px radius, 16px icon, 14px text in dark same-hue ink on an 8 to 14% tint, never saturated; optional 14/600 title and trailing 28px action. Hairline version for neutral info.

```css
.note{display:flex;align-items:center;gap:8px;min-height:36px;padding:8px 12px;border-radius:8px;background:color-mix(in oklab,var(--warn) 14%,var(--bg));color:color-mix(in oklab,var(--warn) 45%,var(--ink))}
.note.i{background:none;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink-2)}
```

### Numerals: quiet-rate-stack (seen on Stripe Pricing, Replit Pricing, OpenAI API Pricing)

Reference material, not a sale. Seen on 3 sites.

**Use it for:** Usage-based and multi-rate pricing.

**Avoid it for:** Simple plans, where it undersells.

**Recipe:** Price at body size: 13-15px weight 600 rate, regular unit, grey add-on lines prefixed with a plus, in a stack about 90px tall. No oversized number; the plan name carries the weight. Hierarchy comes from weight and ink only.

<a id="display-stat-with-caption"></a>

### Surfaces: contrast-flip-panel (seen on Scale AI, Sonder, Nx)

*Feeling: the lights change.*

One panel in the inverse of the page. Nx puts a 1320px white diagram panel on near-black, and it becomes the brightest thing on a long dark page, so that is where the explanation goes. Scale sets a deep green statement panel beside an image tile. Use it once or twice on a long page, at the moment you most want attention. Leave most of the panel empty, because a flip already has all the emphasis it needs.

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Hover: media-zoom (seen on Royal Ontario Museum, 1 Hotels, N26)

*Feeling: the picture breathes.*

The image scales inside a fixed frame. N26 takes 1.1 over 0.5s, Fairphone 1.05 over 0.6s, and Dekmantel 1.02 in 0.18s. Apple uses a very exact 1.0161 over 0.3s. Studio Dado takes 1.02 over 1s on `.23,1,.32,1`. Pick by register: 1.1 for consumer, 1.05 for general, 1.02 for premium, and slower as you go up. Keep the frame fixed, with `overflow:hidden`. Add `transform:translateZ(0)` to the frame if rounded corners flicker during the scale.

```css
.zoom{overflow:hidden;border-radius:12px}
.zoom img{transition:transform .6s cubic-bezier(.23,1,.32,1)}
.zoom:hover img{transform:scale(1.05)}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.