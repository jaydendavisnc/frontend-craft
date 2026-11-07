# Your direction (seed 1059)

Reads as **devtool**, surface **pricing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this pricing surface

1. Navigation: `nav.top-bar/progressive-blur-bar`
2. Pricing table: `section.pricing-table/price-list-rows`
3. Comparison: `section.comparison-table/tabbed-category-table`
4. FAQ: `section.faq/tile-row-stack`
5. Numerals: `type.numerals/display-stat-with-caption`
6. Headline: `type.display-headline/under-scaled-title`
7. Primary button: `button.primary/neutral-chip`
8. Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
9. Closing section: `section.cta-band/split-plain-close`
10. Footer: `section.footer/large-link-index`
11. Hover: `motion.hover-state/row-fill`

Build every section with real content. Top pricing pages run about 6,200 to 10,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Switzer** with **Switzer**. A straight neutral with no alternates, so character has to come from scale and spacing alone.
- Display: 64px, phone 38px, weight 600, tracking -0.035em, leading 0.98. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Switzer 14px 500. Label: sentence case
- Load: https://api.fontshare.com/v2/css?f[]=switzer@1,2&display=swap https://api.fontshare.com/v2/css?f[]=switzer@1,2&display=swap

## Palette

From Vercel Pricing: bg #fafafa, surface #ffffff, text #171717, muted #666666, accent #171717. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Cloudflare Workers** (devtool, gold) https://workers.cloudflare.com
- Doing: A serverless product page drawn as an engineer's blueprint: visible grid rails, corner handles and orange wire diagrams replace screenshots.
- Why it feels made: One schematic language runs through frames, tags, code boxes and illustrations, so every section belongs to the same drawing. Orange is rationed to CTAs, diagrams and one big closing panel.
- If imitated badly: Rails and dot fields without a real column system become decorative grid wallpaper.

**Exa** (ai, gold) https://exa.ai
- Doing: A search API presented with the gravity of a research institute: warm serif headlines, hard-edged panels, and data in cobalt.
- Why it feels made: The serif is unexpected for AI infrastructure and every other element is squared off and technical, so the contrast feels authored. Cobalt appears only on data and the final footer, which makes both hit hard.
- If imitated badly: The hard-cornered grid and stipple only work with real data behind them; with placeholder content they look like a bank template.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: progressive-blur-bar (seen on Tana, Ramp, Factory)

*Feeling: the page dissolves as it reaches the top.*

No fill and no border. The links float over a blur that is strongest at the top and fades to nothing, so there is no bar edge to see. This is the most modern-looking bar in the corpus, and it needs care. Ramp, Tana and Factory all use it, and all of them flip their ink as sections pass. Use it on light product pages with rich media. Avoid it on plain text pages, where it only smears words.

Set a 72px bar, a blur layer extending 30 to 130px below it, 16 to 20px strength, masked with a gradient. Because blur guarantees no contrast, the ink must change with the section. Mark dark sections and use the sampling script from [Behaviour every nav needs](#behaviour-every-nav-needs). A weak tint of the same tone as the section helps the links hold.

```css
.nav{position:fixed;inset:0 0 auto;z-index:50;height:72px;isolation:isolate;
  --nav-ink:var(--ink);--nav-ink-2:var(--ink-2);--nav-tint:var(--bg);color:var(--nav-ink);transition:color .2s ease}
.nav.on-dark{--nav-ink:#fff;--nav-ink-2:rgba(255,255,255,.72);--nav-tint:#000}
.nav::before{content:"";position:absolute;z-index:-1;inset:0 0 -32px;
  background:linear-gradient(color-mix(in srgb,var(--nav-tint) 42%,transparent),transparent);
  -webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);
  -webkit-mask:linear-gradient(#000 45%,transparent);mask:linear-gradient(#000 45%,transparent)}
.links a{color:var(--nav-ink-2);transition:color .15s}.links a:hover{color:var(--nav-ink)}
.cta{background:var(--nav-ink);color:var(--nav-tint);transition:background .2s,color .2s}
```

### Pricing table: price-list-rows (seen on Stripe Atlas, Guggenheim Visit, Are.na)

*Feeling: a printed list at the door.*

Prices as rows of text in the column. Are.na's three rows hold a chevron, a small glyph, a bold plan and a caption at left and a price at right, closed by a row that links to details, and it looks more confident than any card. Guggenheim and SFMOMA list admission as label and price with no rules or light ones. Stripe Atlas adds a tinted fee cell with a 1px accent left rule. Use it for museums, services, small products and fee schedules.

### Comparison: tabbed-category-table (seen on ElevenLabs Pricing, Tailscale Pricing)

*Feeling: one product at a time.*

ElevenLabs picks a feature set by scrolling pill tabs and right-aligns numeric values, with dotted rules inset per cell so column edges survive. Tailscale tabs by category with dense 36px rows. Use it when products within a plan are so different that one table would never end.

### FAQ: tile-row-stack (seen on Soundsensing, Cal.com, Comet)

*Feeling: soft, tappable.*

Each row is a tone tile, and rules vanish. Tiles suit soft product pages and phones, since the whole row is visibly a button. Cal.com runs radius 22, 76px rows, 20px/700 questions and a 36px white disc with a chevron, and lets long questions break into two balanced lines. Its last row asks anything else, with an arrow, and turns the FAQ into a way in. Soundsensing uses 68px rows at radius 8 and a 10px gap. Comet floats page-coloured rows with a soft shadow over faint orbit lines. Hold the gap under the row's padding so the stack reads as one object.

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

### Headline: under-scaled-title (seen on Cognition, Claude Pricing, Block)

Confident restraint. The page does not need to shout. Seen on 17 sites.

**Use it for:** Devtools, portfolios, editorial and any page where content or imagery is the star. On pricing, changelog and docs pages it is the correct default, because the job is getting to the content.

**Avoid it for:** A homepage with nothing strong below it. Small type with no content just looks unfinished.

**Recipe:** H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

**Why it works:** A quarter of gold sites sit at or below 36px. Thirty pixels reads as large if nothing outranks it, since scale is relative to the page and not to the viewport.

<a id="name-as-headline"></a>

### Primary button: neutral-chip (seen on Tana, Attio, Exa)

*Feeling: a good tool, sure of itself.*

A near-black rectangle on light, or near-white on dark, with no colour at all. It works in any palette, it never fights an image, and it reads as product. Use it for SaaS, developer tools, docs and app UI. Avoid it when a consumer brand needs warmth, where a pill or a colour does more.

Set 32 to 40px, radius 6 to 10, 14/500, 12 to 16px padding, no shadow. Attio adds a 1px border one step lighter than the fill, about L\* 37 on L\* 13, which reads as a faint rim. Analysts recorded that rim as darker, and the measured value corrected it. Vercel uses a flat #171717 at radius 6 and nothing else. The chip shares its radius with the page's inputs and small cards.

```css
.b-chip{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid color-mix(in oklab,var(--ink) 76%,var(--bg));
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),scale .1s cubic-bezier(.4,0,.2,1)}
.b-chip:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-chip:active{scale:.98}
.b-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

### Closing section: split-plain-close (seen on Vercel Pricing, Stripe Billing, Amplitude)

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

### Footer: large-link-index (seen on Nuro, Figure, Prototype)

*Feeling: a table of contents you could read across a room.*

Few links, set large. Nuro runs 20px links on a 37px pitch in two columns at the left, with almost nothing else. Figure numbers six items from 01 to 06 at about 40px with hairlines between. Prototype stacks three words at 120px, right-aligned, beside a looping reel tile. Basement pushes a 38px list to the bottom of a full viewport, keeping small superscript counts. Athletics sets two 22px lists with no headings and nothing else but three corners of small print. Use it when the site has six to ten destinations and the type is good. It fails with long labels and with anything over about ten items.

### Hover: row-fill (seen on Work & Co, Vercel Pricing, Olivier Larose)

*Feeling: the whole line is the target.*

The row takes a fill edge to edge. Olivier Larose inverts to black in 0.2s. Make Town fills a hairline row solid black and adds an arrow. Work & Co only changes the text to the accent over 0.25s, leaving rules and position alone. Use it for indexes and lists where each row is one link.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.