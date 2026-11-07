# Your direction (seed 1062)

Reads as **devtool**, surface **docs**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this docs surface

1. Docs navigation: `nav.docs-nav/scrollspy-toc`
2. Code: `product.terminal/tabbed-cli-switcher`
3. Body: `type.body-copy/reading-column`
4. Surface ladder: `atmosphere.light-surface-ladder/tinted-tonal-surfaces`
5. Footer: `section.footer/full-width-directory`

## Type system

**Zalando Sans Expanded** with **Zalando Sans**. Regular weight at large size looks like a fashion label, and the standard width below shares its drawing.
- Display: 64px, phone 38px, weight 400, tracking -0.025em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Zalando Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap

## Palette

From Vercel AI SDK: bg #FAFAFA, surface #FFFFFF, text #171717, muted #4D4D4D, accent #171717. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Primer** (devtool, silver) https://primer.style
- Doing: A design-system home that proves the system by composing its own parts: real components and mascots inside quiet white cards.
- Why it feels made: H2s set a grey lead against a black product name, and the art is actual Primer pieces shown as a spec sheet. One corner gradient supplies all the brand colour.
- If imitated badly: Without real component artwork, white cards on grey is a default docs landing.

**Factory** (ai, gold) https://www.factory.ai
- Doing: An enterprise AI tool dressed as precision industrial equipment: greyscale, square corners, mono labels, one orange dot.
- Why it feels made: A strict 24px gutter, 3px button radius and five-step neutral ladder hold across 9000px, and colour appears only as tiny orange dots and photographic grain. The restraint is total and the imagery does the warming.
- If imitated badly: Copy the mono caps without the grainy imagery and exact grey ladder and it becomes an empty wireframe.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Docs navigation: scrollspy-toc (seen on Vercel Docs, Zed Docs, Sora)

*Feeling: a quiet note of where you are on this page.*

The right-hand outline. Vercel sets 13px grey anchors on a 28px pitch, with the current one in black beside a 1px rule, and nested items indented 12px. Resend adds a small list icon to its label. Sora's has no line at all: the current heading simply turns 600 and darker. Zed uses dotted underlines and a pale blue block. Use it on pages with more than three headings. Start it level with the page title, and keep it quieter than the left rail.

```css
.toc{position:sticky;top:56px;height:calc(100vh - 56px);padding:48px 24px 0 0}
.toc h4{font:500 13px/20px var(--font-text);margin-bottom:10px}
.toc a{display:block;padding-left:12px;font-size:13px;line-height:28px;color:var(--ink-2);box-shadow:inset 1px 0 0 var(--line)}
.toc a[aria-current]{color:var(--ink);box-shadow:inset 1px 0 0 var(--ink)}
.toc a.nested{padding-left:24px}
```

### Code: tabbed-cli-switcher (seen on Cloudflare Workers, Biome, Electron)

*We know you have a preference.* Quality 5/5, 3 sites.

**Use:** Docs and install sections with several package managers. **Not:** A hero with one obvious path.

**Recipe:** Box about 720px with 13px mono tabs for npm, pnpm and friends, active one boxed or underlined, hairline, one coloured command line, copy tile bottom right. Optional dashed frame offset 5px outside a solid one.

### Body: reading-column (seen on Linear Changelog, Dishoom, Are.na)

A page you can actually read. Seen on 9 sites.

**Use it for:** Changelogs, blogs, docs, founder letters, and any long text inside a marketing site.

**Avoid it for:** Justified text without hyphenation on the web, which opens rivers.

**Recipe:** Long reading at 16-20px, line-height 1.5-1.65, 576-690px measure (about 70 characters), paragraph gap 20-30px. On dark use about 82% ink, near 13:1, and lift emphasis by weight and brightness. Links keep a 1px underline offset 3px. Subheads 20-24px with 48px above and 16px below.

**Why it works:** The asymmetry around subheads is the craft: 48px above and 16px below ties the subhead to the text it introduces. Equal space leaves it floating between paragraphs.

```css
.col      { width: min(624px, 100%); margin-inline: auto; }
.col p    { font: 400 17px/27px var(--font-text); margin-bottom: 20px;
            color: color-mix(in srgb, var(--ink) 82%, var(--bg)); }
.col h2   { font: 590 24px/1.3 var(--font-display); letter-spacing: -.012em; margin: 48px 0 16px; }
.col a    { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
.col strong { font-weight: 510; color: var(--ink); }
```

<a id="muted-with-ink-keywords"></a>

### Surface ladder: tinted-tonal-surfaces (seen on Material 3, Mercury Pricing, Zentry)

*Feeling: friendly and systematic. The whole page is one colour at different strengths.*

**Use it for:** Design systems, pastel consumer tools, finance with a soft accent. **Avoid:** Accents with high chroma at low lightness: they turn grey when tinted this far.

Four tones of the accent hue: oklch(.99 .006 h), (.965 .01 h), (.948 .007 h), (.90 .037 h). No shadow and no border. Depth comes from tone alone. Text uses a dark tint of the same hue.

Material 3 is the clearest example: #fefbff, #f8f1f6, #f2ecee and #dcdaf5 all carry one hue, with one measured shadow and no borders. Zentry runs the same logic on a stronger lavender, with panels 4 percent apart.

### Footer: full-width-directory (seen on Cursor Pricing, Acne Studios, Vercel AI SDK)

*Feeling: a well-kept index.*

Four to seven equal columns across the whole container, with no logo column. It is the most common footer in the corpus and the safest, so it lives or dies on its details. Use it when there are many links and no reason to be clever. Render runs six 232px columns with 18px heads and 16/36 links, then a rule, a small mark, a live status line, copyright and a two-state theme toggle. Vercel runs two tiers of 14px links on 28px rows with small grey `New` chips. Avoid it when the list is short, since six columns of three links is a table of nothing.

```css
.foot{max-width:1376px;margin:0 auto;padding:0 32px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;padding-bottom:40px}
.cols section{display:flex;flex-direction:column}
.cols b{font:500 18px/24px var(--font-text);margin-bottom:14px}
.cols section b:not(:first-child){margin-top:30px}
.cols a{font-size:16px;line-height:36px;color:var(--ink-2);transition:color .15s}
.cols a:hover{color:var(--ink)}
.base{display:flex;align-items:center;gap:16px;height:64px;border-top:1px solid var(--line);font-size:13px;color:var(--ink-2)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);margin-right:-8px}
.glyph{width:16px;height:16px;background:var(--ink);border-radius:4px 4px 4px 0}
.right{margin-left:auto}
@media(max-width:760px){.foot{padding:0 16px}.cols{grid-template-columns:1fr 1fr;gap:32px 16px}.cols a{line-height:44px}.base{flex-wrap:wrap;height:auto;padding:16px 0}.right{margin-left:0;width:100%}}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.