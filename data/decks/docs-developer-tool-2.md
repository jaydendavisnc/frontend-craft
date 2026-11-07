# Your direction (seed 1061)

Reads as **devtool**, surface **docs**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this docs surface

1. Docs navigation: `nav.docs-nav/icon-head-tree`
2. Code: `product.code-block/tabbed-sample-panel`
3. Body: `type.body-copy/muted-with-ink-keywords`
4. Surface ladder: `atmosphere.light-surface-ladder/warm-tone-only-ladder`
5. Footer: `section.footer/fine-print-directory`

## Type system

**Stardom** with **Commissioner**. Fat stems against hairlines for one masthead, with a quiet humanist sans doing the rest.
- Display: 64px, phone 38px, weight 400, tracking -0.015em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Commissioner 14px 500. Label: sentence case
- Load: https://api.fontshare.com/v2/css?f[]=stardom@400&display=swap https://fonts.googleapis.com/css2?family=Commissioner:slnt,wght,FLAR,VOLM@-12..0,100..900,0..100,0..100&display=swap

## Palette

From ElevenLabs Pricing: bg #fcfcfc, surface #f5f3f1, text #000000, muted #777169, accent #2b7fff. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Railway Docs** (devtool, silver) https://docs.railway.com
- Doing: A documentation home that feels warm rather than utilitarian: a serif title, tinted line-art route cards and a calm two-part sidebar.
- Why it feels made: Ink, grey and borders all carry a slight violet cast on warm grey, and the four line-art cards give the page character at very low contrast. Density is tuned for scanning.
- If imitated badly: Pastel gradient cards turn childish if the line art is coloured more strongly or the gradients get more saturated.

**TR Studio** (architecture, gold) https://trstudio.co.uk/
- Doing: An architecture studio's site where the monogram stays pinned to the viewport corners and projects drift through a bone-coloured frame like rooms seen through a doorway.
- Why it feels made: Four fixed corners, two rotated labels and one centre axis hold the page, so photographs can vary freely, and colour steps from bone to oxblood to periwinkle with no radii, shadows or rules.
- If imitated badly: Without top-tier interior photography and a properly drawn monogram, the empty frame looks unfinished and the centred axis looks like a wedding template.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Docs navigation: icon-head-tree (seen on Neon Docs, Railway Docs)

*Feeling: a tidy set of chapters, with room to breathe.*

Section heads carry a small outline icon, and children sit flush under it rather than indented. Neon sets a 348px column, 32px left inset, 15px heads with 18px icons, 14px muted children on a 33px pitch, and the active item in brand green with no fill. Railway puts nine flat 14px links first, a divider, then sixteen collapsible groups, which keeps the most-used routes a click away. Use it where the docs have clear chapters.

### Code: tabbed-sample-panel (seen on Resend, Stripe Payments, Anthropic Docs)

*Whatever you build with, we already speak it.* Quality 5/5, 4 sites.

**Use:** Multi-language SDKs, usually mid-page. **Not:** One-language products. A single tab looks abandoned.

**Recipe:** Panel 544-1024px, radius 12-24, 1px line. Language or framework tabs: 60x56 icon tiles or 90px tabs split by hairlines, active brightened, copy icon right. Mono 13-14/20-22, line numbers at 30% ink, one accent for strings. Resend gives the tile row its own row above the panel with a second framework row inside it. Anthropic's docs keep code light and fade the last tab, which signals more without a scrollbar.

### Body: muted-with-ink-keywords (seen on Loops, Apple Vision Pro, Aniket)

Skimmable by design. Seen on 6 sites.

**Use it for:** Feature copy, about pages and CVs. Probably the most useful body move in the corpus.

**Avoid it for:** Long reading, and lifts chosen at random.

**Recipe:** Paragraph in muted ink, 16-21px, with proper nouns or key phrases lifted to full ink, with an optional +100 weight. Size never changes. Skimming only the dark words must give the argument. Two to five lifts per paragraph. A single accent or 1px underline is an acceptable alternative.

**Why it works:** A heavier muted paragraph helps: one reference sets the whole paragraph at weight 600 in grey, so the grey does not read as weak and the only change at a lift is tone.

```css
p   { font: 600 21px/29px var(--font-text); letter-spacing: -.01em; color: var(--ink-3); max-width: 820px; }
p b { font-weight: 600; color: var(--ink); } /* tone is the only change */
```

<a id="bold-run-in"></a>

### Surface ladder: warm-tone-only-ladder (seen on Anthropic News, Cursor Pricing, Zed Blog)

*Feeling: considered and slightly bookish. The current look of serious AI and tools companies.*

**Use it for:** Tools and editorial product pages that want warmth without cream. **Avoid:** It is popular, so it is the first thing to swap if the page reads as a clone of the category.

Page #f7f7f4, panels #f2f1ed, controls #e6e5e0, ink #26251e, secondary text ink at 60%, hairlines ink at 10%. In oklch: L .975, .958, .921, C .004 to .007, hue 95 to 105. No shadows and no pure white.

Set secondary text as the ink at reduced strength in oklab, not as a grey, so it stays warm on every step of the ladder.

```html
<style>
/* tone only. no shadow, no white, and text is the ink at reduced strength so it picks up the ground */
:root{--bg:#f7f7f4;--surface:#f2f1ed;--surface-2:#e6e5e0;--ink:#26251e;
  --ink-2:color-mix(in oklab,var(--ink) 60%,transparent);--ink-3:color-mix(in oklab,var(--ink) 40%,transparent);
  --line:color-mix(in oklab,var(--ink) 10%,transparent)}
.tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:40px}
.tile{background:var(--surface);border-radius:8px;padding:18px 16px;height:320px;color:var(--ink-2);font-size:13px;
  box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--ink) 2.5%,transparent)}
.tile h3{color:var(--ink);font-weight:500}
.tile a{display:flex;height:36px;align-items:center;justify-content:center;border-radius:99px;background:var(--surface-2);color:var(--ink);margin-top:14px}
.tile a.on{background:var(--ink);color:var(--bg)}
.tile hr{border:0;border-top:1px solid var(--line);margin:16px 0}
</style>
<div class="tiles">
  <div class="tile"><h3>Free</h3><a>Get started</a><hr>Two lanes</div>
  <div class="tile"><h3>Team</h3><a>Get Team</a><hr>Unlimited lanes</div>
  <div class="tile"><h3>Scale</h3><a class="on">Get Scale</a><hr>Rules and routing</div>
  <div class="tile"><h3>Network</h3><a>Talk to us</a><hr>Single sign-on</div>
</div>
```

### Footer: fine-print-directory (seen on Apple, Apple MacBook Pro, Apple Bag)

*Feeling: the small print of a very large company.*

Apple sets a 980px column of 12px text on a pale grey band: bold group heads, about 26px pitch, five columns of stacked groups, hairlines above and below, numbered footnotes above and a pipe-divided legal row beneath. It is the densest element on an airy page, and the contrast is what makes the page above feel spacious. Use it only with truly hundreds of destinations, for commerce, banks and large platforms. Collapse it on phones to ruled accordion rows with chevrons, as Apple Bag does. Zapier and Svix add a tier of SEO links under the main columns, kept apart by a rule.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.