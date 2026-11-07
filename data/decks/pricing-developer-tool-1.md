# Your direction (seed 1058)

Reads as **devtool**, surface **pricing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this pricing surface

1. Navigation: `nav.top-bar/mono-instrument-bar`
2. Pricing table: `section.pricing-table/tonal-plan-cards`
3. Comparison: `section.comparison-table/tinted-featured-column`
4. FAQ: `section.faq/reading-column-rows`
5. Numerals: `type.numerals/price-large-unit-small`
6. Headline: `type.display-headline/medium-tight-grotesk`
7. Primary button: `button.primary/split-choice-button`
8. Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
9. Closing section: `section.cta-band/composer-close`
10. Footer: `section.footer/colour-flood-footer`
11. Hover: `motion.hover-state/full-invert`

Build every section with real content. Top pricing pages run about 6,200 to 10,100px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Switzer** with **Switzer**. A true Swiss neo-grotesque. Tabular by default, so tables and hero prices share one voice.
- Display: 64px, phone 38px, weight 450, tracking -0.02em, leading 1.06. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.55. UI: Switzer 14px 500. Label: 500, sentence case
- Load: https://api.fontshare.com/v2/css?f[]=switzer@1&display=swap

## Palette

From Better Auth: bg #ffffff, surface #f9fafa, text #111111, muted #737373, accent #111111. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

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

**Warp Pricing** (devtool, gold) https://warp.dev/pricing
- Doing: A dense pricing page made calm by square black actions, zero shadows and a single geometric display face.
- Why it feels made: Five plans and dozens of rows stay readable because each mark has one job: lavender means included, dotted underline means explained, square black means buy. Separation comes from tints and hairlines, never elevation.
- If imitated badly: Four typefaces hold together only under strict role assignment; used loosely they look like a font sample.

**Greylock** (finance, gold) https://www.greylock.com
- Doing: A venture firm staged as an unmapped chart: hairline rails, vanishing-point grids and stippled coastlines carry one idea while a light serif and one saturated blue do the speaking.
- Why it feels made: Every line from nav to footer canvas belongs to the same cartographic system, and colour is rationed to #003399 on selected phrases. Candid founder photos sit hard against the rails with no radii.
- If imitated badly: The map motif becomes wallpaper if rails, stipple and rays rise above near-invisible contrast or the serif is set heavier than 300.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: mono-instrument-bar (seen on Zed Blog, Zed Pricing, Warp Pricing)

*Feeling: a piece of well-labelled equipment.*

Mono links and visible shortcuts, for developers and technical brands. Zed locks a 56px bar to its 1120 column, with 14px mono links and a keycap beside each action, so every control tells you its shortcut. Warp sets 13px semi-mono links and two 32px blocks at radius 4. Daily prefixes each link with a slash, and its slashes rotate on hover. Inngest and Temporal go to caps. Use it when your audience lives in a terminal. Avoid it for consumer brands, where it reads as affectation.

Set 13 to 15px mono, a 56 to 64px bar, a hairline, radius 4. Keycaps are 16 to 20px tall with a 1px edge. Pair mono links with a sans headline, because the contrast between the two is what looks intentional.

```css
.nav{height:56px;max-width:1120px;margin:auto;padding:0 16px;display:flex;align-items:center;gap:24px;
  box-shadow:inset 0 -1px 0 var(--line);font:400 14px/1 var(--font-mono,ui-monospace,monospace)}
.kbd{height:18px;padding:0 4px;display:inline-flex;align-items:center;border-radius:3px;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:11px;color:var(--ink-2)}
.nav .cta{height:32px;padding:0 6px 0 10px;display:inline-flex;align-items:center;gap:8px;border-radius:4px;background:var(--accent);color:var(--bg)}
```

### Pricing table: tonal-plan-cards (seen on Warp Pricing, Cursor Pricing, Replit Pricing)

*Feeling: calm, expensive, sure of itself.*

No border, no shadow, one tone step. Warp goes further and sets white cards on a page one percent off white. Use it on warm or quiet pages. The whole design is the buttons: grey pills on every plan and one solid ink pill. Do not add a badge louder than that button.

Set a gap of 8 to 10, radius 4 to 16, padding 16 to 24, a 20px name, a 32px price at weight 400, a 36 to 38px pill, then a lead-in, a large usage metric at 22px, and feature groups under small rules. Cursor's metric row is the trick worth stealing: it says how much you get before it lists what you get. Replit tints each card in its own pale hue, which works because the hues are close.

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

### Comparison: tinted-featured-column (seen on Forma24, Neon Pricing, Hotjar)

*Feeling: follow this line.*

One column carries a tone from header to foot. Neon tints it near-black with side borders on a darker page. Hotjar gives it a deep header cell and a pale pink body, with zebra rows on the other columns and small multiplier pills beside numbers. Forma24 lights its own column on a dark photo. It is the simplest way to say "we win" without a slab.

### FAQ: reading-column-rows (seen on Warp Pricing, Notion Calendar, Linear Changelog)

*Feeling: plain and helpful.*

The plainest treatment, and it works anywhere. Use it when the FAQ follows a centred page, or when a page is dense and needs to breathe. Warp runs a 944px column, a 50px heading aligned to the column's left edge and 61px rows. Claude runs 704px at 88px pitch with display-face questions, and this is where my first version looked weak: my questions were weight 400 and read faint beside their 500, so raise the weight when a text face sets the question. Raycast fades its rules out at both ends. Attio replaces the icon with a small grey `[+]`, a quiet developer detail. Kiro fills a 40 by 56px block behind the plus on hover.

```css
.wrap{width:min(704px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.wrap h2{font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;text-align:center;margin-bottom:56px}
.list{border-top:1px solid var(--line)}
.wrap summary{min-height:88px;padding-block:24px;font:500 20px/1.3 var(--font-display)}
.a{padding-bottom:28px;font-size:17px;line-height:28px;color:var(--ink-2);max-width:36em;text-wrap:pretty}
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

### Headline: medium-tight-grotesk (seen on Attio, Apple Intelligence, Work & Co)

Engineered and calm. Says the product is the interesting thing, not the sentence. Seen on 18 sites.

**Use it for:** Product, SaaS, developer tools and fintech, when a real interface or artwork sits directly below. The strongest default when the brief gives no other direction.

**Avoid it for:** When nothing below it is specific. This is the most common look in the corpus, so on an empty page it reads as a template.

**Recipe:** Headline in a neo-grotesque or geometric sans, weight 450-600, 48-72px, line-height 1.0-1.1, tracking -0.02 to -0.03em, one near-black or near-white ink, two lines broken by hand at a phrase, 24-44 characters. Sub at 16-20px, one ink step down, 16-32px below.

**Why it works:** Medium holds its colour at display size without the slab of bold, and tight setting makes a stock face look fitted. If the font offers 510 or 550, use it: those in-between weights exist because 500 can read thin at display size and 600 starts to shout.

```css
.hero h1 { font: 510 64px/1 var(--font-display); letter-spacing: -.022em; max-width: 15em; color: var(--ink); }
.hero p  { margin-top: 24px; font: 400 16px/1.5 var(--font-text); color: var(--ink-2); }
/* Put a real product frame 56px below. The type depends on it. */
```

<a id="crushed-tracking"></a>

### Primary button: split-choice-button (seen on Factory, Upstash, Noxus)

*Feeling: a real decision, made easy.*

The main action plus a separate chevron cell. Factory sets a mono caps label at radius 3 with a 1px seam in the page colour, then a chevron box for platform choice. TypeScript uses a 61px white rectangle with a 3px black divider. Use it when one verb has real alternatives, such as an OS download or an install method. Clicking the label runs the default, so that default has to be a good guess. Detect the platform. Round only the outer corners, and give the chevron cell its own hover and an accessible name.

### Surface ladder: neutral-page-white-card (seen on Warp Pricing, Vercel Pricing, Cal.com Pricing)

*Feeling: printed and exact. Feels like a well-set specification sheet.*

**Use it for:** Developer platforms and precise SaaS. The default for a light product page. **Avoid:** Warm consumer brands, where pure neutrals feel like a hospital.

Page #fafafa, raised sheet #fff, hover #f2f2f2, hairline #e6e6e6 or black 8%. Text #171717 and #4d4d4d. No tint, one accent at most, no shadow at rest. Separation is 2% lightness plus a line, so it feels printed.

Tiny hue shifts are allowed and can be an identity: #fbfdfd with a faint mint cast, or #f9f9fb and #f0f0f3 with a faint lilac one.

```html
<style>
/* grey page, white sheet, one hairline. nothing else, across the whole page */
:root{--bg:#fafafa;--surface:#fff;--hover:#f2f2f2;--line:#e5e5e5;--ink:#171717;--ink-2:#666;--ink-3:#8f8f8f}
.sheet{display:grid;grid-template-columns:repeat(3,1fr);margin:40px;background:var(--surface);border:1px solid var(--line);border-radius:12px}
.sheet>div{padding:28px;border-left:1px solid var(--line);color:var(--ink-2);height:320px}
.sheet>div:first-child{border-left:0}
.sheet h3{color:var(--ink);font-weight:500;font-size:14px}
</style>
<div class="sheet"><div><h3>Starter</h3>For one forwarder.</div><div><h3>Team</h3>For desks across time zones.</div><div><h3>Network</h3>For large forwarders.</div></div>
```

### Closing section: composer-close (seen on Claude, Ramp, Algolia)

*Feeling: start now, right here.*

The last call to action is the product. Claude ends on a real prompt field with its action inside. Ramp's blurred panel holds a 766px URL composer, and its final band restates the slogan over the hero's email field. Algolia draws a dashed dropzone with limits written beneath. New York Phil's preset donation amounts belong here too: a form with the first decision already made. A field beats a button whenever the first step can happen on the page. My heading at 48/400 looked limp beside the original, so set it heavier than you think.

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

### Footer: colour-flood-footer (seen on Exa, TR Studio, Wolff Olins Work)

*Feeling: the colour you were holding back.*

The largest flat colour on the whole page, kept for the end. Exa floods a saturated cobalt with fine grain and a thin serif sentence at about 77px. Browserbase goes to full orange with a white monogram. TR Studio makes a full-viewport periwinkle colophon with one centred seal, and closes on a 40px strip of oxblood. Use it when the brand owns a colour and the page above has been mostly neutral, because a flood after a colourful page adds nothing. Set all text in one tint of the field: white, or a dark of the same hue. A second colour usually ruins it. Avoid it if the brand colour is pale, because small links will fail contrast on it.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.