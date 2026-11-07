# Your direction (seed 1060)

Reads as **devtool**, surface **docs**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this docs surface

1. Docs navigation: `nav.docs-nav/three-pane-shell`
2. Code: `product.code-block/editor-with-rail`
3. Body: `type.body-copy/structured-rows`
4. Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
5. Footer: `section.footer/brand-column-with-proof`

## Type system

**Inter** with **Inter**. The heaviest calm setting: 600 with hard tracking gives the packed Helvetica-poster look Svix uses.
- Display: 72px, phone 42px, weight 600, tracking -0.035em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Inter 14px 500. Label: 500, sentence case
- Load: https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..600&display=swap

## Palette

From Ramp: bg #ffffff, surface #f5f1f0, text #191919, muted #6f6e6b, accent #e4f418. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

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

**Birdie** (saas, silver) https://www.birdie.so/
- Doing: Screen recording for support: white product page with iridescent blue gradient showcases and a dark closing CTA.
- Why it feels made: Tight display tracking, product UI as the hero and a single saturated blue panel give clear rhythm.
- If imitated badly: The gradient glass screens need real product UI; with placeholders it looks like stock.

**Factory** (ai, gold) https://www.factory.ai
- Doing: An enterprise AI tool dressed as precision industrial equipment: greyscale, square corners, mono labels, one orange dot.
- Why it feels made: A strict 24px gutter, 3px button radius and five-step neutral ladder hold across 9000px, and colour appears only as tiny orange dots and photographic grain. The restraint is total and the imagery does the warming.
- If imitated badly: Copy the mono caps without the grainy imagery and exact grey ladder and it becomes an empty wireframe.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Docs navigation: three-pane-shell (seen on Radix Themes, Zed Docs, Fly.io Docs)

*Feeling: an editor for reading.*

The standard layout: top bar, left rail, content, right outline. Zed uses a 52px bar, a 280px sidebar, 690px content and an outline at x=1208. Fly.io uses a 304px rail and 576px content. Rails and bar stay fixed while only the content scrolls. Hold the reading column to about 65 to 75 characters and let it sit off-centre, since centring it between uneven rails helps nothing. Use it for all long docs. Below about 1100px, drop the right outline first.

```css
.shell{display:grid;grid-template-columns:288px minmax(0,1fr) 240px;padding-top:56px}
.doc{padding:48px;min-width:0}.doc>*{max-width:42em}
@media(max-width:1100px){.toc{display:none}.shell{grid-template-columns:288px 1fr}}
@media(max-width:760px){.shell{display:block}.rail{display:none}.doc{padding:24px 16px}}
```

### Code: editor-with-rail (seen on Better Auth, Upstash, Nuxt)

*It reads like an app, not a snippet.* Quality 5/5, 4 sites.

**Use:** Multi-topic SDKs and frameworks: config, database, auth, routes. **Not:** One sample. The rail would have nothing to do.

**Recipe:** Code pane about 555x340 beside a 225-258px rail of topics or files: 11-12px mono caps rows with hairlines, or 16px items, active row tinted with a 2px bar. A note pinned to the rail base. Fade the code at the bottom.

### Body: structured-rows (seen on Cal.com Pricing, Office Commun)

Answers, not paragraphs. Seen on 2 sites.

**Use it for:** Facts, feature lists, services and specifications.

**Avoid it for:** Narrative copy.

**Recipe:** Copy set as rows: label column and answer column on one baseline, 15/24, answers about 515px wide, 24px between groups. Or feature rows with a 14px check, about 30px pitch, wrapped lines hanging under the label, a 1px dotted underline marking a tooltip.

<a id="small-caption-column"></a>

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Footer: brand-column-with-proof (seen on LiveKit, Neon Docs, Speakeasy)

*Feeling: a company that has done its homework.*

A left block of 300 to 430px carries the logo, a two-line description and real proof: compliance marks, a live status line, a theme switch. Three to five link columns sit to its right. Use it for developer tools and B2B software, where a security reviewer will scroll here. On LiveKit the compliance roundels are pinned to the base of the left block with `margin-top:auto`, so they line up with the bottom of the columns, and status runs in the base bar in small mono caps with a square dot. Neon Docs turns compliance into a column of its own, pairing each name with a grey status word. Only claim what is true. Fake SOC 2 badges are worse than none.

Other things that earn the left block: a quotation, as on Notion Calendar; a sign-off about where the thing is made, as on Bun; a plain statement of where data is hosted, as on Plausible, when that is a reason to buy.

```css
.foot{border-top:1px solid var(--line)}
.top{display:grid;grid-template-columns:minmax(0,1.3fr) repeat(3,minmax(0,1fr));max-width:1280px;margin:0 auto;padding:72px 0 56px}
.brand{display:flex;flex-direction:column;min-height:330px}
.brand i{width:22px;height:22px;background:var(--ink);border-radius:2px;margin-bottom:12px}
.brand p{font-size:14px;line-height:21px;color:var(--ink-2);max-width:21em}
.seals{margin-top:auto;display:flex;gap:10px}
.seals span{width:36px;height:36px;border-radius:50%;border:1px solid var(--line-strong);display:grid;place-items:center;font:500 8px/1 var(--font-mono);color:var(--ink-2)}
.col b{display:block;font:500 11px/16px var(--font-mono);letter-spacing:.09em;text-transform:uppercase;color:var(--ink-2);margin-bottom:22px}
.col a{display:block;font-size:15px;line-height:36px;color:var(--ink);transition:color .15s}
.col a:hover{color:var(--ink-2)}
.soc{display:flex;gap:14px;margin-bottom:12px}.soc i{width:16px;height:16px;border-radius:4px;background:var(--ink)}.col small{font-size:12px;color:var(--ink-3)}
.bar{border-top:1px solid var(--line)}
.bar div{max-width:1280px;margin:0 auto;height:56px;display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--ink-2)}
.bar em{font:500 11px/1 var(--font-mono);letter-spacing:.08em;color:var(--ok);font-style:normal}
.bar em::before{content:"";display:inline-block;width:6px;height:6px;background:currentColor;margin-right:8px;vertical-align:1px}
@media(max-width:760px){.top{grid-template-columns:1fr 1fr;padding:48px 16px 32px}.brand{grid-column:1/-1;min-height:0;gap:20px}.bar div{height:auto;padding:14px 16px;flex-direction:column;align-items:flex-start;gap:8px}}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.