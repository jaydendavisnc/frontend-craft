# Type on the page

This chapter covers what each type role does on a real page: the display headline, section heading, label, subhead, body copy, numerals, and type used as an image. `references/typography.md` covers how to choose and set type, including tracking tables, OpenType, fluid sizes and loading. Read that for the setting, and this for the role.

The chapter rests on 720 examples tagged across 459 sites, clustered into 96 variants, measured against the 341-site deep pass, and checked by eye against about 160 real frames at 1440px. Sizes in a recipe came from those checks. A number marked "measured" came from computed styles. Other numbers are readings from frames, so treat them as close rather than exact.

Every recipe is written for these tokens, so any type system and palette can be dropped in: `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line`, `--accent`. Mono labels also use `--font-mono`. This chapter names no typefaces or brand colours, because the sampler deals those. Each variant lists the registers and genres it was seen in, so a hand can be checked against the brief.

Variants are options, not a ladder. Quality scores in `data/elements/type.jsonl` say how well an approach survives contact with real work. They do not say to prefer the top one, and two sites built from this chapter should not look alike.

## Contents

- [How hierarchy is built](#how-hierarchy-is-built)
- [1 Display headline](#1-display-headline): [medium-tight-grotesk](#medium-tight-grotesk), [crushed-tracking](#crushed-tracking), [regular-weight-quiet](#regular-weight-quiet), [light-large-sans](#light-large-sans), [heavy-tight-sentence](#heavy-tight-sentence), [quiet-serif-over-sans-ui](#quiet-serif-over-sans-ui), [roman-italic-turn](#roman-italic-turn), [sans-with-serif-italic-insert](#sans-with-serif-italic-insert), [same-size-two-voices](#same-size-two-voices), [flat-accent-phrase](#flat-accent-phrase), [tonal-gradient-fill](#tonal-gradient-fill), [hue-gradient-phrase](#hue-gradient-phrase), [marked-word](#marked-word), [caps-block](#caps-block), [wide-heavy-display](#wide-heavy-display), [soft-or-character-face](#soft-or-character-face), [under-scaled-title](#under-scaled-title), [name-as-headline](#name-as-headline), [poster-anchored](#poster-anchored), [ruled-lines](#ruled-lines), [swapping-word](#swapping-word), [statement-as-hero](#statement-as-hero)
- [2 Section heading](#2-section-heading): [ink-then-grey-run-in](#ink-then-grey-run-in), [grey-lead-ink-payoff](#grey-lead-ink-payoff), [eyebrow-title-lede-stack](#eyebrow-title-lede-stack), [bare-statement](#bare-statement), [split-heading-and-note](#split-heading-and-note), [heading-row-with-action](#heading-row-with-action), [ruled-opener](#ruled-opener), [indexed-cell-heading](#indexed-cell-heading), [italic-turn-heading](#italic-turn-heading), [accent-word-or-line](#accent-word-or-line), [marked-phrase](#marked-phrase), [poster-caps-opener](#poster-caps-opener), [tracked-caps-heading](#tracked-caps-heading), [emblem-opener](#emblem-opener), [scroll-held-heading](#scroll-held-heading), [two-voice-heading-system](#two-voice-heading-system), [anaphora-list](#anaphora-list)
- [3 Eyebrow and label](#3-eyebrow-and-label): [mono-caps-eyebrow](#mono-caps-eyebrow), [marker-plus-mono](#marker-plus-mono), [syntax-prefixed-label](#syntax-prefixed-label), [boxed-mono-tag](#boxed-mono-tag), [sentence-case-colour-eyebrow](#sentence-case-colour-eyebrow), [tracked-caps-eyebrow](#tracked-caps-eyebrow), [plain-caps-label](#plain-caps-label), [tinted-or-outlined-tag](#tinted-or-outlined-tag), [announcement-link](#announcement-link), [plan-badge](#plan-badge), [rule-or-tick-label](#rule-or-tick-label), [margin-and-corner-labels](#margin-and-corner-labels), [media-caption-pair](#media-caption-pair), [hand-placed-label](#hand-placed-label)
- [4 Subhead](#4-subhead): [plain-grey-lede](#plain-grey-lede), [keyword-lit-sentence](#keyword-lit-sentence), [same-face-muted-lead](#same-face-muted-lead), [butted-two-tone-block](#butted-two-tone-block), [statement-lead-no-headline](#statement-lead-no-headline), [line-on-image](#line-on-image), [coloured-clause](#coloured-clause), [demonstrating-sentence](#demonstrating-sentence)
- [5 Body copy](#5-body-copy): [reading-column](#reading-column), [muted-with-ink-keywords](#muted-with-ink-keywords), [bold-run-in](#bold-run-in), [one-size-page](#one-size-page), [serif-prose-grotesk-labels](#serif-prose-grotesk-labels), [display-set-paragraph](#display-set-paragraph), [mono-or-duospace-body](#mono-or-duospace-body), [marked-prose](#marked-prose), [typeset-legal](#typeset-legal), [structured-rows](#structured-rows), [small-caption-column](#small-caption-column), [hanging-quote](#hanging-quote)
- [6 Numerals](#6-numerals): [price-large-unit-small](#price-large-unit-small), [quiet-rate-stack](#quiet-rate-stack), [display-stat-with-caption](#display-stat-with-caption), [ruled-ledger-stat](#ruled-ledger-stat), [mono-metric-cells](#mono-metric-cells), [oldstyle-figures](#oldstyle-figures), [live-counter](#live-counter), [folio-numerals](#folio-numerals), [rate-plaque](#rate-plaque)
- [7 Type as image](#7-type-as-image): [cropped-footer-wordmark](#cropped-footer-wordmark), [wordmark-masthead](#wordmark-masthead), [full-width-statement](#full-width-statement), [title-behind-object](#title-behind-object), [inline-objects-in-sentence](#inline-objects-in-sentence), [image-through-letters](#image-through-letters), [chapter-numeral-or-word](#chapter-numeral-or-word), [scroll-resolved-text](#scroll-resolved-text), [outline-type](#outline-type), [list-as-display](#list-as-display), [constructed-letters](#constructed-letters), [annotated-type](#annotated-type), [highlight-strip-on-photo](#highlight-strip-on-photo), [concept-typography](#concept-typography)

## How hierarchy is built

Top sites separate levels with far smaller steps than feels safe. Generated pages do the reverse: they add size, then weight, then colour, until every level is shouting. These are the measured steps.

| Measure (measured) | p25 | Median | p75 |
|---|---|---|---|
| Distinct font sizes on a page | 5 | 6 | 8 |
| Heading weights on a site | 1 | 1 | 2 |
| H1 to H2 size ratio | 1.0 | 1.33 | 1.6 |
| H2 weight minus H1 weight | 0 | 0 | 0 |
| H1 to sub size ratio | 2.4 | 3.0 | 3.6 |
| H2 to body size ratio | 2.0 | 2.6 | 3.1 |
| Sub's ink strength against the H1, when muted | 60% | 72% | 84% |

Read that table as a set of instructions:

- **Use about six sizes.** Nav, body, sub, H3, H2 and H1 is already the whole scale.
- **Use one heading weight.** 195 of 322 sites use a single weight across all headings, and 100 use two. H2 matches H1's weight at every quartile, and in the same family at every quartile. Change level with ink, space or size, not with a new weight.
- **Let H1 and H2 sit close.** At the 25th percentile they are the same size, which means a quarter of good sites have no size step between them at all.
- **Keep the sub's tone step small.** 36% of sub lines are the same colour as the H1. The rest are 72% as strong at the median. Pale grey subs are a generated tell.
- **Tint long copy, and do not default to pure black.** 60% of H1s are tinted, and 81% of primary body copy is tinted or muted. Pure white is different: two thirds of dark sites use it for text, so it is fine at the top of a dark page's ladder.

### Reach for levers in this order

1. **Ink.** A tone step is the cheapest separation there is, and it adds no new shape to the page. Most of the strongest work here is built on it.
2. **Space.** 24px more air above a heading separates it better than 4px more size.
3. **Voice.** A change of family or a move to italic, at the same size, reads as a new level.
4. **Weight.** One change of about 200 units, such as 400 to 600. A 100 step barely shows at text size.
5. **Case.** Caps at a small size for labels only.
6. **Size.** Use it last, and use it for the two or three real jumps on the page.

### One lever per step

Pull one lever for each level. My first attempts failed here more than anywhere else. A run-in caption with a bold lead and a grey remainder used weight and ink for one step, and it read as interface where the reference read as editorial. A sub with a muted base and coloured keywords used tone and hue, and the colour stopped meaning anything. When a step looks heavy-handed, remove a lever before you change a value.

### Ink is a role, not a token

`--ink-2` and `--ink-3` are palette steps, and the job in hand may need a value neither one holds. Size decides how much contrast a role needs. Checked against real frames:

| Role | Contrast on ground | Why |
|---|---|---|
| Long reading on dark | about 13:1 | Reading text is brighter than a muted UI grey. Mine looked dim until I raised it |
| 11 to 13px label | 5.5:1 or more | At 4.1:1 a 12px mono label all but vanished on near-black |
| Second voice in a heading | about 6:1 on dark, 3:1 or more at display size on light | Large grey can sit near 3:1, because its size carries it |

Derive these from the tokens so they survive any palette:

```css
:root {
  --ink-read:  color-mix(in srgb, var(--ink) 82%, var(--bg)); /* long reading on dark */
  --ink-lede:  color-mix(in srgb, var(--ink) 72%, var(--bg)); /* the measured sub */
  --ink-voice: color-mix(in srgb, var(--ink) 55%, var(--bg)); /* second voice in a heading */
}
```

### Numbers do not travel between faces

A recipe's tracking is a starting point for the face in hand. The same `-0.06em` that looks crisp on a loose grotesque fuses the letters of a face with a tightened display cut, and `-0.03em` that is fine on a sturdy old-style serif drives apostrophes into their neighbours on a high-contrast one. An `em` width does not hold across faces either: a 7.5em column wrapped a heading in one face and not in another. Render at 1:1, read the closest letter pair, and break important lines by hand.

### Scale for phones

Every size in this chapter is for a 1440px viewport. Use the clamps in `references/typography.md`, and expect a large step: the 128 type systems in `data/type-systems.jsonl` set phone display at 36 / 38 / 44px, about 0.6 of desktop. Display line-height and tracking stay close to their desktop values, because the type is still large relative to the screen. Remove any hand-made `<br>` under `min-width`, since a desktop break shatters a phone line.

### Defaults by register

Medians from the deep pass. Use these to sanity-check a hand, not to set it.

| Register | H1 px | H1 weight | Tracking | H2 px | Sub px | H1 centred |
|---|---|---|---|---|---|---|
| light-precision | 56 | 500 | -0.014em | 32 | 18 | 43% |
| dark-precision | 60 | 500 | -0.02em | 42 | 18 | 43% |
| gradient-light | 60 | 500 | -0.02em | 40 | 20 | 52% |
| warm-neutral | 54 | 400 | 0 | 36 | 18 | 43% |
| photo-led | 56 | 450 | -0.01em | 40 | 16 | 19% |
| bold-colour | 60 | 600 | 0 | 47 | 20 | 41% |
| mono-technical | 48 | 400 | 0 | 16 | 18 | 42% |
| type-led | 36 | 400 | 0 | 28 | 16 | 9% |

Type-led pages split in two: the 25th percentile H1 is 19px and the 75th is 100px, so a type-led page is either nearly silent or enormous. Photo-led and type-led pages rarely centre, because an off-centre block leaves room for an image or a composition.

## 1 Display headline

The headline has to say what this is and set the page's voice in about two seconds. It succeeds through one exact decision. What separates great from cheap is rarely size. Cheap headlines are large, bold, default-tracked and centred. Great ones are usually smaller than you expect, with a fitted setting, hand-made line breaks and a clear reason for any emphasis.

Measured across 98 gold sites: size 36 / 54 / 71px at p25, median and p75, weight 400 / 500 / 600, tracking -0.03 / -0.02 / 0em, line-height 1.0 / 1.1 / 1.1. Across all 316 measured sites, headlines run 18 / 30 / 43 characters and take one or two lines on 82% of pages. Line-height is exactly 1.0 on 30% of sites and below 1.0 on only 5%, so sub-1.0 leading is a deliberate signature and not a default. 61% of headlines are left aligned. Only 8.5% are uppercase. Silver sites track at a median of -0.005em against gold's -0.02em, which is the clearest single gap between the tiers.

Choose by voice first, then by one signature. Use only one variant per page. This element has more variants than the others because it has 263 examples and each of these is a different decision.

<a id="medium-tight-grotesk"></a>
<!-- v:type.display-headline/medium-tight-grotesk -->
### medium-tight-grotesk

Engineered and calm. Says the product is the interesting thing, not the sentence. Seen on 18 sites.

**Use it for:** Product, SaaS, developer tools and fintech, when a real interface or artwork sits directly below. The strongest default when the brief gives no other direction.

**Avoid it for:** When nothing below it is specific. This is the most common look in the corpus, so on an empty page it reads as a template.

**Recipe:** Headline in a neo-grotesque or geometric sans, weight 450-600, 48-72px, line-height 1.0-1.1, tracking -0.02 to -0.03em, one near-black or near-white ink, two lines broken by hand at a phrase, 24-44 characters. Sub at 16-20px, one ink step down, 16-32px below.

**Why it works:** Medium holds its colour at display size without the slab of bold, and tight setting makes a stock face look fitted. If the font offers 510 or 550, use it: those in-between weights exist because 500 can read thin at display size and 600 starts to shout.

**Seen on:** Attio, Apple Intelligence, Work & Co, Sourcegraph, Linear, Cloudflare Workers. **Suits:** light-precision, dark-precision, photo-led; finance, saas, ai, agency, devtool.

```css
.hero h1 { font: 510 64px/1 var(--font-display); letter-spacing: -.022em; max-width: 15em; color: var(--ink); }
.hero p  { margin-top: 24px; font: 400 16px/1.5 var(--font-text); color: var(--ink-2); }
/* Put a real product frame 56px below. The type depends on it. */
```

<a id="crushed-tracking"></a>
<!-- v:type.display-headline/crushed-tracking -->
### crushed-tracking

Dense and deliberate. A sentence that behaves like a logotype. Seen on 14 sites.

**Use it for:** Developer tools, AI and design-led products that need one signature without adding colour. Works on sans at weight 400-600 and on high-contrast serifs.

**Avoid it for:** Faces with a tight default fit, which collapse at these values. Also long lines, and anything under 40px.

**Recipe:** Headline at 56-108px in a sans of weight 400-600 or a high-contrast serif, tracking -0.045 to -0.07em, line-height 0.95-1.1, under 50 characters. Stop while every letter pair still shows a sliver of ground; faces with a tight display cut stop near -0.045em. Relax as size falls: -0.06em at 64px, -0.04em at 48px, -0.015em at 32px.

**Why it works:** The crush is the whole signature, so it has to be visibly chosen. It only reads as a choice while letters stay separate. Measured ladders show tracking is proportional to size: one site goes from -0.047em at 64px to -0.016em at 32px, because a value that looks crisp at 64px clots at 32px. The number is not portable: my first attempt copied -0.06em from a reference onto a face with an optically tightened display cut, and letters fused. The same em value looked fine on a loose-fit grotesque. Judge the gap, not the figure.

**Seen on:** Jasper, Vercel AI SDK, Expo, Speakeasy, ECI, Vercel Pricing. **Suits:** light-precision, photo-led, dark-precision; devtool, ai, saas.

```css
h1 { font: 450 64px/1 var(--font-display); letter-spacing: -.045em; max-width: 11em; }
/* Start here and move toward -.06em only on faces with a loose default fit. */
```

<a id="regular-weight-quiet"></a>
<!-- v:type.display-headline/regular-weight-quiet -->
### regular-weight-quiet

Unhurried and costly. Nothing on the page is raising its voice. Seen on 10 sites.

**Use it for:** Finance, AI infrastructure and premium SaaS. Best when the page has real density below, which the calm heading can sit on top of.

**Avoid it for:** Stock text faces at display size: at weight 400 they read as unstyled. It needs a face with real drawing.

**Recipe:** Headline at weight 400 only, 48-116px, line-height 1.0-1.1, tracking -0.01 to -0.03em, black or warm near-black, flush left, one line if it fits. Allow no bold heading anywhere on the page. Hierarchy comes from size and ink alone; labels drop to 11-13px mono or small caps.

**Why it works:** Regular weight is the most common H1 weight band in the deep data, with 94 of 316 sites between 301 and 400. Generated pages reach for bold because volume feels like confidence. Regular at large size reads as more confident because it is not trying.

**Seen on:** Warp Pricing, Scale AI, Ramp, Baseten, Cursor Pricing, Nuro. **Suits:** light-precision, dark-precision; ai, devtool, finance.

<a id="light-large-sans"></a>
<!-- v:type.display-headline/light-large-sans -->
### light-large-sans

Elegant, a little fashion. Air around every stroke. Seen on 9 sites.

**Use it for:** Consumer finance, events and brand launches, on dark grounds or plain light ones. One line sets it best.

**Avoid it for:** Busy photographs, thin faces under 48px, and low-contrast greys, which remove strokes altogether.

**Recipe:** Headline in a weight 200-300 sans, at least 64px on light and 48px on dark, tracking -0.02 to -0.04em, line-height 0.85-1.1, one or two lines, on a plain ground. Keep controls at weight 500 so the thin type reads as a decision, not a font-loading fallback.

**Why it works:** Thin strokes survive only through size. Light on dark also looks heavier than the same weight on white, because bright strokes bloom, which is why dark sites can go lighter at smaller sizes.

**Seen on:** Stripe Sessions, LiveKit, Affirm, Rabbit, xtrackr, Otter. **Suits:** dark-precision, gradient-light; brand, finance, agency.

<a id="heavy-tight-sentence"></a>
<!-- v:type.display-headline/heavy-tight-sentence -->
### heavy-tight-sentence

Plain, friendly, direct. A person telling you the thing. Seen on 8 sites.

**Use it for:** Consumer and productivity SaaS with a plain voice. Short sentences ending in a full stop.

**Avoid it for:** Anything over 80px or heavier than 700, which turns into the 900-weight poster that reads as generated.

**Recipe:** Headline in weight 700 sentence case, 48-80px, line-height 1.0, tracking -0.025 to -0.035em, near-black, a short plain sentence ending in a full stop. H2s keep the ratio at about 42/48 and -0.035em, two lines at most. Never leave tracking at default on bold.

**Why it works:** Bold at default tracking is the single most generated-looking setting there is. The tight fit is what turns it from a default into a voice.

**Seen on:** Cal.com Pricing, Notion Calendar, Anthropic News, Soundsensing, Slack, Kiro. **Suits:** light-precision, bold-colour; saas, other, ai.

<a id="quiet-serif-over-sans-ui"></a>
<!-- v:type.display-headline/quiet-serif-over-sans-ui -->
### quiet-serif-over-sans-ui

Written rather than marketed. Warmth on a technical subject. Seen on 23 sites.

**Use it for:** AI, finance, docs and any technical product that wants to sound human. The serif is the only warm thing on the page, so it carries all of the voice.

**Avoid it for:** Pages where the serif also appears in nav, buttons or body, which turns voice into costume. Bold cuts also lose the effect.

**Recipe:** One serif used only for H1 and H2, weight 300-500, 44-80px (up to 128px on dark manifesto pages), line-height 1.0-1.1, tracking 0 to -0.03em, single ink, never bold. All UI, labels and body stay sans or mono, so the serif alone carries the voice.

**Why it works:** The contrast is the point: a serif headline over grotesque interface looks like an editor wrote it and an engineer built it. The largest bucket of gold serif sites use it this way, with 11 gold sites.

**Seen on:** Public, Exa, Linear Method, Loops, Comet, Fabrica Partners. **Suits:** warm-neutral, photo-led, light-precision, render-3d, type-led; ai, finance, saas, agency, ecommerce.

```css
h1 { font: 400 64px/1.1 var(--font-display); letter-spacing: -.02em; }
p  { margin: 20px auto 0; font: 400 18px/1.5 var(--font-text); max-width: 34em; color: var(--ink-2); }
```

<a id="roman-italic-turn"></a>
<!-- v:type.display-headline/roman-italic-turn -->
### roman-italic-turn

A spoken turn in the sentence. Warm, composed, slightly literary. Seen on 18 sites.

**Use it for:** Warm-neutral brands, health, food, education, and consumer tools with a human promise.

**Avoid it for:** Faces with no true italic, since synthesised slant is obvious at this size. Also more than one italic per heading.

**Recipe:** One serif family, 54-96px, weight 300-500, line-height 0.95-1.1, tracking -0.01 to -0.03em. Turn one word or the closing phrase into the true italic at the same size and weight, usually on line two. The italic must carry the meaning. Sub in full ink at weight 500, not pale grey.

**Why it works:** Italic is the emphasis a reader hears. Put it on the word you would stress aloud. My first attempt set the sub in pale grey and it went limp under the serif: the strongest reference keeps the sub in full ink at a sturdier weight, which holds up against the strokes above it. High-contrast optical cuts also take less tracking than sturdy old-style faces; at -0.03em one of mine drove the apostrophe into its neighbours, so read every apostrophe.

**Seen on:** reMarkable, Function Health, Brilliant, Wispr Flow, Russell & Stellar, Medusa622. **Suits:** warm-neutral, illustrated, photo-led, bold-colour, expressive; food-drink, education, local-business, portfolio, saas.

```html
<p class="eb">Live tracking</p>
<h1>Plain opening clause,<br><em>the turn in italic.</em></h1>
<p class="lede">One or two sentences in full ink.</p>
```

```css
.eb   { font: 500 13px/1 var(--font-text); letter-spacing: .09em; text-transform: uppercase; color: var(--ink-2); margin-bottom: 28px; }
h1    { font: 400 96px/.98 var(--font-display); letter-spacing: -.018em; }
h1 em { font-style: italic; }
.lede { margin: 28px auto 0; font: 500 18px/1.4 var(--font-text); max-width: 27em; color: var(--ink); }
```

<a id="sans-with-serif-italic-insert"></a>
<!-- v:type.display-headline/sans-with-serif-italic-insert -->
### sans-with-serif-italic-insert

Two people in one sentence: the claim and the feeling. Seen on 10 sites.

**Use it for:** Consumer health, commerce and agencies. Strongest when repeated down through H2s as one rule.

**Avoid it for:** Pages where the serif appears nowhere else, and any page that already has a second signature. This device is widely copied, so it needs a real reason.

**Recipe:** Grotesque heading, weight 450-600, 48-88px, tracking -0.01 to -0.02em. One word or phrase swaps to an italic serif at weight 400 on the same line. Scale the swap to match x-heights, usually 1.02-1.1em, and reset its tracking to 0. One swap per heading, repeated through H2s.

**Why it works:** Two families at the same font size are not the same visual size. Serif italics tend to sit smaller and lighter, so the word falls into a hole unless it is nudged up and given its own spacing.

**Seen on:** Prototype, Wealthfront, Ritual, Huel, Apétiti, RJ Plus. **Suits:** photo-led, gradient-light; finance, ecommerce, agency.

```css
h1    { font: 500 64px/1.1 var(--font-text); letter-spacing: -.02em; }
h1 em { font: italic 400 1.08em/1 var(--font-display); letter-spacing: 0; }
/* line-height 1 on the em stops the larger word opening up the line. */
```

<a id="same-size-two-voices"></a>
<!-- v:type.display-headline/same-size-two-voices -->
### same-size-two-voices

Precise and self-assured. Hierarchy with almost nothing. Seen on 16 sites.

**Use it for:** The best small-difference move in the corpus. Use for precise SaaS, finance and any headline that needs to name a thing and then claim something.

**Avoid it for:** When both halves are long. The grey half must still read, so never drop below about 45% ink on the ground it sits on.

**Recipe:** One size, 32-64px, weight 400-600, line-height 1.0-1.25, tracking 0 to -0.03em. Two clauses split by tone: first at full ink, second at 45-60% ink, on a second line or running on. Alternatives: drop weight two steps, or change case. This block replaces the subhead.

**Why it works:** The heading and sub become one object, so the top of the page has one thing to read rather than two. It also deletes a layout decision: there is no gap to judge and no size step to choose.

**Seen on:** Polar, Increase, Kinfolk, Stripe Billing, Spline, 1X. **Suits:** light-precision, photo-led, dark-precision, type-led, gradient-light; saas, finance, ai.

```css
h1      { font: 600 56px/1.05 var(--font-display); letter-spacing: -.02em; max-width: 860px; text-wrap: pretty; }
h1 span { font-weight: 300; color: var(--ink-3); }
```

<a id="flat-accent-phrase"></a>
<!-- v:type.display-headline/flat-accent-phrase -->
### flat-accent-phrase

Direct and branded. The claim is the colour. Seen on 12 sites.

**Use it for:** Developer tools and SaaS with a strong brand hue, and photo-led pages where the second colour can be taken from the image.

**Avoid it for:** When the accent appears nowhere else. A coloured word that matches nothing looks picked from a swatch.

**Recipe:** Headline in one ink with a single clause or final line in one flat brand colour, no gradient, same size and weight, 46-80px, line-height 1.0-1.1. The coloured words are the claim, not decoration. Repeat the hue on the primary action, or take it from the hero photograph.

**Why it works:** Colour on the claim tells a skimming reader exactly which words matter. The best example changes the second colour for each photograph, so type and image look art-directed together.

**Seen on:** Hims, Greylock, Supabase, ReadMe, Definitiv Digital, Hotjar. **Suits:** light-precision, dark-precision, photo-led; devtool, saas, finance.

<a id="tonal-gradient-fill"></a>
<!-- v:type.display-headline/tonal-gradient-fill -->
### tonal-gradient-fill

Lit rather than coloured. Type with a light source. Seen on 8 sites.

**Use it for:** Dark developer and SaaS pages, and pale gradient pages. Use a tiny range.

**Avoid it for:** Any visible hue shift on a whole line, and any page with several gradients.

**Recipe:** Clip a small tonal gradient to the headline: full ink at top-left to 60-70% ink at bottom-right, no hue shift, 52-96px, weight 400-500, on a dark or pale ground. It should read as light falling on letters. Keep the first words at full ink so the line stays crisp.

**Why it works:** A large range looks like an effect. A small one is barely noticed as a gradient and registers only as depth, which is why it survives on otherwise plain pages.

**Seen on:** CleanShot X, Resend, Bauhaus Clock, Resend Changelog, React Email, Better Stack. **Suits:** dark-precision, render-3d; devtool, saas.

<a id="hue-gradient-phrase"></a>
<!-- v:type.display-headline/hue-gradient-phrase -->
### hue-gradient-phrase

Energetic and optimistic. High risk of looking stock. Seen on 7 sites.

**Use it for:** Marketing-led pages with a real multicolour brand. Use on one phrase only.

**Avoid it for:** Whole headlines, and any purple-to-pink ramp with no source in the brand.

**Recipe:** Flat ink headline, 60-128px, with only the closing phrase clipped to a two-stop gradient taken from the logo or a product colour, or with one dark stop near the ink so the shift is subtle. Never gradient the whole headline. Repeat on H2s only if it is the signature.

**Why it works:** The best example in the corpus runs from near-ink to a dark plum, so it is almost invisible. The further the stops drift from the ink, the closer it gets to the look the page is trying to avoid.

**Seen on:** Render, Asana, Lindy, Jurafuchs, Upstash, Universally Speaking. **Suits:** warm-neutral, light-precision; devtool, culture, education.

<a id="marked-word"></a>
<!-- v:type.display-headline/marked-word -->
### marked-word

Human, playful, a little handmade. Seen on 12 sites.

**Use it for:** Illustrated SaaS, education, nonprofits, and friendly finance. The mark must suit the brand: a selection rectangle for a software tool, a brush stroke for a warm one.

**Avoid it for:** Serious enterprise and luxury. Also text-decoration underlines, which sit on rails and read as a link.

**Recipe:** One word in a 44-90px headline gets one mark: an SVG hand stroke 3-6px thick under the baseline, a flat highlighter block, or a selection rectangle of radius 4-6px. Overrun the word by 4-10px, break at descenders, and vary the stroke between headings so it never looks stamped.

**Why it works:** The mark succeeds through small irregularities: a stroke that thickens to one side, overruns, or passes behind descenders. A straight underline with rounded ends looks like a template component.

**Seen on:** Elyx, mymind, Tally, Trasti, Rewiring America, Energen Digital. **Suits:** illustrated, bold-colour, dark-precision; saas, devtool.

<a id="caps-block"></a>
<!-- v:type.display-headline/caps-block -->
### caps-block

Signage, stencil, poster. Authority by density. Seen on 29 sites.

**Use it for:** Culture, sport, hardware, engineering, developer tools with attitude. Condensed for poster presence at modest width; neo-grotesque for a machine-label feel.

**Avoid it for:** Sentences over about 40 characters, and any page that also uses caps for labels at scale.

**Recipe:** Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

**Why it works:** Only 8.5% of H1s are uppercase, and their median line-height is 1.1. The ones that look designed sit well below that, because caps have no descenders and need far less leading than mixed case.

**Seen on:** Inngest, Bun, Gagosian, Factory, La Table de Joakim, Lightspeed. **Suits:** photo-led, expressive, bold-colour, warm-neutral, type-led; ecommerce, saas, health, agency, culture.

<a id="wide-heavy-display"></a>
<!-- v:type.display-headline/wide-heavy-display -->
### wide-heavy-display

Planted and physical. Width instead of height. Seen on 7 sites.

**Use it for:** Consumer brands, hardware, outdoor, and education with a loud voice. Width lets a modest size carry a screen.

**Avoid it for:** Long headlines, which break into too many lines. Pair only with quiet small UI.

**Recipe:** Extended black cut, weight 700-900, uppercase or sentence case, 40-78px, line-height 0.8-1.05, tracking 0 to -0.01em, two to four short lines. Width supplies the presence, so size can stay modest. Set everything around it small and light, at 13-18px.

**Why it works:** One reference steps lines at 48px on a 61px font, a ratio of about 0.79, so counters almost touch and the headline becomes a graphic block. Very wide letters need less size to fill the same space.

**Seen on:** Boom, Outschool, Sweetgreen, Bellroy, GoPro, Voice Tag Gods. **Suits:** photo-led, bold-colour; ecommerce, brand.

<a id="soft-or-character-face"></a>
<!-- v:type.display-headline/soft-or-character-face -->
### soft-or-character-face

Warm, characterful, off the beaten path. Seen on 13 sites.

**Use it for:** Food, drink, health, children, local brands. The face is the identity, so the sampler should deal it first and everything else should stay plain.

**Avoid it for:** Precision registers. Do not pair a character face with a second expressive device.

**Recipe:** One display face with strong character (soft serif, chunky rounded, fat retro, custom) at weight 400-800, 48-90px, line-height 0.95-1.2, tracking 0 to -0.02em, in a deep brand colour instead of black, on a flat or pastel ground. Keep the sans beside it completely plain.

**Why it works:** A brand ink in place of black does most of the softening. It keeps contrast while removing the clinical edge.

**Seen on:** Zapier, Talkspace, Casper, Betterment, One Medical, Maximize. **Suits:** bold-colour, render-3d, illustrated; food-drink, health.

<a id="under-scaled-title"></a>
<!-- v:type.display-headline/under-scaled-title -->
### under-scaled-title

Confident restraint. The page does not need to shout. Seen on 17 sites.

**Use it for:** Devtools, portfolios, editorial and any page where content or imagery is the star. On pricing, changelog and docs pages it is the correct default, because the job is getting to the content.

**Avoid it for:** A homepage with nothing strong below it. Small type with no content just looks unfinished.

**Recipe:** H1 at only 28-48px, weight 400-500, line-height 1.1-1.3, one or two lines, and nothing on the page is larger. On utility pages use one word at 48-64px with 90-120px of air above and below. Scale comes from images, tables or whitespace, never from the type.

**Why it works:** A quarter of gold sites sit at or below 36px. Thirty pixels reads as large if nothing outranks it, since scale is relative to the page and not to the viewport.

**Seen on:** Cognition, Claude Pricing, Block, Stone Island, Zed Blog, Better Auth. **Suits:** mono-technical, light-precision, photo-led, type-led, warm-neutral; devtool, saas, ai, editorial.

<a id="name-as-headline"></a>
<!-- v:type.display-headline/name-as-headline -->
### name-as-headline

The object needs no selling. Seen on 6 sites.

**Use it for:** Physical products, launches and iconic brands where the name already means something.

**Avoid it for:** Unknown products: if the name says nothing, the visitor learns nothing.

**Recipe:** The product or brand name alone is the headline, 56-80px, weight 500-600, tight tracking, centred, no verb. Beneath it a five or six word promise at 21-28px weight 400, roughly 2:1 with the name. A short status word can replace the promise. Let the object fill the frame.

**Seen on:** Apple, Analogue, ACME, Apple Vision Pro, Omega, Effepinna Studio. **Suits:** photo-led, type-led, light-precision; ecommerce, brand.

<a id="poster-anchored"></a>
<!-- v:type.display-headline/poster-anchored -->
### poster-anchored

A cultural institution or a studio with nerve. Seen on 8 sites.

**Use it for:** Agencies, culture and fashion, on pages that keep everything else small and quiet.

**Avoid it for:** SaaS and anything where the visitor needs to understand an offer in the first screen.

**Recipe:** Two short lines at 100-390px, line-height 0.75-1.05, tracking -0.02 to -0.04em, anchored to a corner or stepped across the viewport instead of centred, running past the fold or overlapped by images. No subhead beside it. Use once, on a page of quiet small type.

**Why it works:** Placement does the work, not just size. Anchoring to an edge makes giant type feel set into the page, where centred giant type feels like a slide.

**Seen on:** Theatre Memory, Poeza, Athletics, CMBLU, Driftime, Postevand. **Suits:** type-led, photo-led, dark-precision; agency, ecommerce, fashion.

<a id="ruled-lines"></a>
<!-- v:type.display-headline/ruled-lines -->
### ruled-lines

Ruled paper, ledgers, a document of record. Seen on 3 sites.

**Use it for:** Finance, archives, libraries and engineering. Very good when the page has a table or grid to rhyme with.

**Avoid it for:** Three-line-plus headlines with very uneven lengths when rules are cut to line width. Dark rules, which turn into stripes.

**Recipe:** Each headline line rests on its own 1px rule in the pale line colour, either cut to that line's width for a stepped edge or full-bleed like ledger paper. 72-125px, weight 300-400, rule 8-14px under the baseline. Keep rules very quiet.

**Why it works:** Rare, but all three examples scored top marks. It takes one line of CSS per line of text and gives a standard headline a structure no template has.

**Seen on:** Accel, Vitrenko Library, Telkom-OT. **Suits:** light-precision, type-led, mono-technical; finance, culture, other.

<a id="swapping-word"></a>
<!-- v:type.display-headline/swapping-word -->
### swapping-word

Live and specific. One sentence addressing several audiences. Seen on 6 sites.

**Use it for:** Platforms serving several verticals, and products with a clear list of jobs.

**Avoid it for:** Any page where the moving word is the only idea. Must stop for reduced motion.

**Recipe:** Fixed opening words with one slot at the end cycling 3-5 nouns, masked to the line height and moved vertically over 400-600ms, or typed with a cursor. Reserve the widest word's width, or centre so the whole line re-centres. Hold each word 2-3 seconds. Stop for reduced motion.

**Seen on:** Codecademy, Calvyn, Fora, Noxus, Strapi, motusmade studio. **Suits:** gradient-light, light-precision; agency, education, ai.

<a id="statement-as-hero"></a>
<!-- v:type.display-headline/statement-as-hero -->
### statement-as-hero

Thoughtful, unhurried, a little literary. Seen on 9 sites.

**Use it for:** Studios, publishers, architecture and culture, where a good sentence is the best thing you have.

**Avoid it for:** Weak copy. A long sentence with no idea in it just looks like a wall.

**Recipe:** A full sentence or list takes the headline job, 35-80px, weight 400-500, line-height 1.1-1.2, with no size or weight change inside it, running 60-100% of the container. Break lines by hand. Allow at most one inline object or underlined link. No subhead follows.

**Seen on:** Nicole Heim Studio, Fidèle, Locomotive, Structure Engineering, Supabase Launch Week, Isolabella della Croce. **Suits:** photo-led, bold-colour; agency, architecture.

### What cheapens it

- **Bold at default tracking.** The most common generated setting. Any weight over 500 at display size needs tightening.
- **Copying a tracking value without checking the face.** I copied `-0.06em` and fused the letters. At `-0.045em` the same face matched the reference. Stop while every pair shows a sliver of ground.
- **A heading alone on an empty page.** My first hero matched the reference line for line and still looked cheap, because the real one has a dense product frame directly below. Hierarchy needs something to sit above. Adding a table of plausible rows did more than any type change.
- **Widows in a run-on.** My first two-voice headline ended on one stranded word. Use `text-wrap: pretty`, never `balance`, on run-on headings, and edit the copy until the last line carries at least two words.
- **Pale subs under strong display type.** Under a serif at 96px, my grey 18px sub went limp. The reference used full ink at weight 500.
- **Emphasis without a reason.** If a word is coloured, italic or marked, a reader should be able to say why that word.
- **Two signatures at once.** Gradient plus italic plus underline is three headlines fighting. Use one.
- **Viewport-tall centred type on a product page.** Scale is relative: 30px can be the largest thing on a very good page.

## 2 Section heading

The section heading has one job: to keep the reader going. It is what a skimming visitor actually reads, so a page's section headings should tell the story on their own. The cheap version is the centred stack of tracked eyebrow, bold title and grey subhead, repeated with no change. The great version merges those three into one thought, or removes two of them.

Measured: H2 size 20 / 36 / 50px on gold sites, weight 400 / 450 / 500, tracking -0.025 / -0.01 / 0em, same family as H1 and same weight as H1 at the median. About a third are centred: 35% on light-precision, 25% on photo-led, 6% on type-led. H2 is 2.6 times body size at the median.

Pick one variant and repeat it down the page, changing nothing. Repetition is what makes it read as a system.

<a id="ink-then-grey-run-in"></a>
<!-- v:type.section-heading/ink-then-grey-run-in -->
### ink-then-grey-run-in

The signature of current precision work. One thought, read at two speeds. Seen on 13 sites.

**Use it for:** Any product page. It deletes the eyebrow, title and subhead stack, which is the main cause of template feel.

**Avoid it for:** When the second sentence is filler. The grey half gets read, so it has to say something.

**Recipe:** One paragraph at 32-48px, weight 300-500, line-height 1.0-1.2, left aligned, 780-1150px wide. First sentence in full ink, the rest runs on in the same line at about 6:1 contrast. No eyebrow, no subhead. Repeat for nearly every section. Use text-wrap: pretty, never balance.

**Why it works:** Nine gold sites use it and it has the highest mean score of any common section-heading variant. Balance breaks it, because the tonal change is meant to fall mid-line: pretty keeps the run-on and only protects the last line.

**Seen on:** Public, Attio, Increase, Ramp, Linear, Stripe. **Suits:** light-precision, dark-precision, gradient-light; saas, finance, agency.

```css
h2      { font: 510 48px/1.04 var(--font-display); letter-spacing: -.022em; max-width: 1150px; text-wrap: pretty; }
h2 span { color: var(--ink-2); }
```

<a id="grey-lead-ink-payoff"></a>
<!-- v:type.section-heading/grey-lead-ink-payoff -->
### grey-lead-ink-payoff

Set-up, then punchline. Seen on 3 sites.

**Use it for:** Short copy with a real turn in it. Stronger than ink-then-grey when the second line is the point.

**Avoid it for:** Long explanatory copy, since the eye starts on the weakest part.

**Recipe:** Two lines at 26-34px, weight 350-500, tight tracking: set-up in 50% ink, payoff in solid ink. Reverses the usual order so the eye lands on the last words. Any sub sits 6-8px below. Align the block's bottom edge to the neighbouring image, not its centre.

**Seen on:** Devin, New Material, Primer. **Suits:** light-precision; devtool, ai, agency.

<a id="eyebrow-title-lede-stack"></a>
<!-- v:type.section-heading/eyebrow-title-lede-stack -->
### eyebrow-title-lede-stack

Orderly and document-like. Safe when applied exactly. Seen on 13 sites.

**Use it for:** Long product pages and docs where consistency matters more than voice.

**Avoid it for:** Used loosely it is the template stack. Gaps must be identical on every section.

**Recipe:** Left or centred stack repeated identically on every section: label at 12-20px, H2 at 36-52px weight 500-600, lede at 18-21px line-height 1.4-1.55 in the second ink, capped at 640-840px. Gaps 8-24px. Keep the three steps in one family, or two at most.

**Why it works:** Stripe-style pages make the eyebrow the same size as body copy, so it reads as the first line of the heading and the whole stack looks like one document.

**Seen on:** Apple Intelligence, Stripe Atlas, AuthKit, React, Key, Docker. **Suits:** light-precision, photo-led, warm-neutral; devtool, food-drink, ai.

```css
.eb { font: 500 18px/1.3 var(--font-text); color: var(--accent); }
h2  { font: 500 38px/1.26 var(--font-display); letter-spacing: -.005em; margin-top: 24px; }
p   { font: 400 18px/28px var(--font-text); margin-top: 24px; max-width: 680px; color: var(--ink-2); }
```

<a id="bare-statement"></a>
<!-- v:type.section-heading/bare-statement -->
### bare-statement

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

**Seen on:** Nuro, Loops, Cal.com, Gagosian, Linear Changelog, Comet. **Suits:** dark-precision, warm-neutral, photo-led, light-precision; saas, brand, ai, architecture.

<a id="split-heading-and-note"></a>
<!-- v:type.section-heading/split-heading-and-note -->
### split-heading-and-note

Considered and wide. Uses the whole row. Seen on 9 sites.

**Use it for:** Wide containers where a centred block would leave dead margins.

**Avoid it for:** Narrow containers, where the note collapses under the heading anyway.

**Recipe:** Split the row: heading 40-88px on the left, a 16-22px note on the right, top or bottom aligned to the heading, starting just right of centre at about 55% of the container, 420-560px wide. A rail-to-rail rule about 60px below may close the row.

**Seen on:** Polestar, Greylock, Tally, Liquid AI, Rabbit, Nx. **Suits:** light-precision, bold-colour, type-led; brand, saas.

<a id="heading-row-with-action"></a>
<!-- v:type.section-heading/heading-row-with-action -->
### heading-row-with-action

Practical. The action lives with the title. Seen on 7 sites.

**Use it for:** Rails, galleries, catalogues and resource lists.

**Avoid it for:** Hero-like sections with a single message.

**Recipe:** Two-line heading at 32-56px on the left; on the same bottom baseline at the far right one small control: a 32-48px button, text link, arrow pair or count. 40-64px down to content. Put the section action here rather than under the grid.

**Seen on:** CleanShot X, Framer, Stone Island, The Philadelphia Orchestra, Bonobos, Arkansas Museum of Fine Arts. **Suits:** gradient-light, dark-precision, bold-colour; saas, culture.

<a id="ruled-opener"></a>
<!-- v:type.section-heading/ruled-opener -->
### ruled-opener

A designed document. Structure instead of decoration. Seen on 6 sites.

**Use it for:** Conferences, editorial, pricing tables, and any long page that needs firm section starts.

**Avoid it for:** Pages already dense with rules and cards.

**Recipe:** Each section opens with a 1px rule across the container, or 4px for editorial. Heading at 28-60px hangs 12-16px under it in the left third, broken by hand onto two tight lines; content starts on the same line in the next column. Never centre.

**Why it works:** A rule gives the eye a start line, so the heading can hang from it. That is why tight leading such as 60/51 looks controlled here where it would look cramped floating in space.

**Seen on:** Stripe Sessions, Baseten, Vercel Pricing, Better Auth, Monocle, Hugging Face. **Suits:** light-precision, gradient-light, type-led; ai, devtool.

```html
<div class="head"><h2>Short heading<br>on two lines</h2><div class="content">...</div></div>
```

```css
.head { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,2fr); column-gap: 24px;
        border-top: 1px solid var(--line); padding: 12px 0 88px; }
h2    { font: 400 60px/.85 var(--font-display); letter-spacing: -.03em; }
```

<a id="indexed-cell-heading"></a>
<!-- v:type.section-heading/indexed-cell-heading -->
### indexed-cell-heading

A drawing sheet or a filing system. Seen on 4 sites.

**Use it for:** Technical, architectural and industrial products, and pages with a real numbered sequence.

**Avoid it for:** Fake numbering on three unordered features.

**Recipe:** Heading sits in a ruled grid cell with a small index: a 16-30px number in muted ink or accent mono beside or above it, matching nav numbering if any. Title 30-80px weight 400, cell padding 24-40px. A folder-style slug can replace the number on developer pages.

**Seen on:** Polar, Telkom-OT, CSDG, GitHub Universe. **Suits:** mono-technical, dark-precision, light-precision; saas, architecture, other.

<a id="italic-turn-heading"></a>
<!-- v:type.section-heading/italic-turn-heading -->
### italic-turn-heading

Warm and hospitable. Seen on 9 sites.

**Use it for:** Hospitality, wellness, consumer health and quiet luxury.

**Avoid it for:** One-off use. It only becomes a voice when it is on every section.

**Recipe:** Same size throughout, 30-56px: heading opens in sans 600 or serif roman, then turns to an italic serif at weight 400 for the feeling words. Optionally tint the italic one warm accent. Centred or left. Use on every section so it becomes the voice.

**Seen on:** Sonder, Villa Aurelia, Fidèle, Lyra, Wealthfront, Therabody. **Suits:** warm-neutral, bold-colour, photo-led; hospitality, finance.

<a id="accent-word-or-line"></a>
<!-- v:type.section-heading/accent-word-or-line -->
### accent-word-or-line

Branded and scannable. Seen on 9 sites.

**Use it for:** Pages where hue carries meaning, such as product families or section colours.

**Avoid it for:** Random colour. If a reader cannot say why that word is coloured, remove it.

**Recipe:** Heading in one ink, 36-64px, with one word, clause or line in an accent. The colour must mean something: product family, brand or section hue. On dark, one lit word can take a soft 20-24px glow of its own colour. One coloured element per heading.

**Seen on:** LiveKit, Resend, Customer.io, Energen Digital, STUDIO UNLMTD, lemon.markets. **Suits:** dark-precision, illustrated; devtool, agency.

<a id="marked-phrase"></a>
<!-- v:type.section-heading/marked-phrase -->
### marked-phrase

The product's own tools turned on its own headlines. Seen on 9 sites.

**Use it for:** Design tools, note-taking apps, developer products. Choose the device the product really uses.

**Avoid it for:** Marks with no link to the product, which become decoration.

**Recipe:** One phrase in a 32-64px heading sits on a device: flat highlighter block, selection rectangle of radius 4-6px, bounding box with corner handles, inline code chip, or hand stroke. Choose the device the product itself uses. Same device on every section; the tint may change.

**Why it works:** A highlight means something in a reading app, a selection box means something in a design tool, and a code chip means something in a terminal product. The device is borrowed from the product, which is why it does not feel like decoration.

**Seen on:** Elyx, Expo, Readwise, Penpot, Svix, Sailia. **Suits:** photo-led, light-precision, gradient-light; saas, devtool.

<a id="poster-caps-opener"></a>
<!-- v:type.section-heading/poster-caps-opener -->
### poster-caps-opener

Loud, local, confident. Seen on 7 sites.

**Use it for:** Restaurants, gyms, independent brands, expressive pages.

**Avoid it for:** Precision registers.

**Recipe:** Every section opens with a loud block: 56-110px heavy or condensed caps, line-height 0.85-1.0, plus a quiet contrast voice directly above or below it, such as a 36px italic serif or 20px mono caps. Two tones of voice in one heading unit.

**Seen on:** White Label IQ, Hibachi Guru, Make Town, Remote, Ben Hays, Swirple. **Suits:** illustrated, bold-colour, type-led; local-business, finance, agency.

<a id="tracked-caps-heading"></a>
<!-- v:type.section-heading/tracked-caps-heading -->
### tracked-caps-heading

Engraved, hotel-like, quietly formal. Seen on 6 sites.

**Use it for:** Hospitality, retail, heritage and galleries.

**Avoid it for:** Long titles, and lowercase. Positive tracking belongs to capitals only.

**Recipe:** Modest heading in caps at 20-40px, tracking +0.04 to +0.1em, weight 400-600, in ink or a deep brand colour, left or centred. Reads as engraved, not shouted. Pair with a text link on the same baseline. Keep it under 30 characters.

**Seen on:** 1 Hotels, HAY, Xin Cheng Foods, Bristol Yoga Festival, FWA Wire, MotherDuck. **Suits:** warm-neutral, photo-led; food-drink, devtool, hospitality.

<a id="emblem-opener"></a>
<!-- v:type.section-heading/emblem-opener -->
### emblem-opener

A book with chapter ornaments. Seen on 1 site.

**Use it for:** Warm, well-funded brands able to commission a set of drawings.

**Avoid it for:** Stock icons, which kill it immediately.

**Recipe:** A small line drawing about 85px tall centred above a serif heading at about 56px weight 500, 28px gap, 90px before content. Every major section opens the same way with a different drawing, so drawings act as chapter marks. Needs real illustration, not icons.

**Seen on:** Claude Pricing. **Suits:** warm-neutral; ai.

<a id="scroll-held-heading"></a>
<!-- v:type.section-heading/scroll-held-heading -->
### scroll-held-heading

Cinematic. The heading is part of the sequence. Seen on 3 sites.

**Use it for:** Long pinned sequences and film-led product pages.

**Avoid it for:** Short pages. It must read at every scroll position.

**Recipe:** The heading is tied to scroll: pinned about 90px below the nav at 48px weight 300 while content moves beneath it, or rising into place over footage as a clip settles, at about 80/84 weight 700. One short phrase, legible at every scroll position.

**Seen on:** Apple Vision Pro, Affirm, i-D RED. **Suits:** expressive, dark-precision, photo-led; culture, finance, brand.

<a id="two-voice-heading-system"></a>
<!-- v:type.section-heading/two-voice-heading-system -->
### two-voice-heading-system

A teacher and a textbook. Levels you can hear. Seen on 3 sites.

**Use it for:** Long pages with two real levels of hierarchy, such as chapters and features.

**Avoid it for:** Short pages, where a second voice is just noise.

**Recipe:** Two heading voices with fixed jobs: serif at 40-48px for chapters, sans at 30-38px flush left for features inside them, or the reverse. The reader learns the level from the voice alone. Never mix the two voices on one level.

**Seen on:** Brilliant, Zapier, Fly.io Blog. **Suits:** warm-neutral, illustrated; saas, education, editorial.

<a id="anaphora-list"></a>
<!-- v:type.section-heading/anaphora-list -->
### anaphora-list

A stance, stated by repetition. Seen on 1 site.

**Use it for:** One values or privacy moment on a page. Use once.

**Avoid it for:** Lists of ordinary features.

**Recipe:** Five left-aligned lines in a centred block, each opening with the same short word in bold accent sans at about 54px, followed by a serif phrase at the same size, about 67px line step. Repetition turns a stance into the strongest type moment on the page.

**Seen on:** mymind. **Suits:** gradient-light; saas.

### What cheapens it

- **The template stack.** Centred eyebrow, bold title, grey sub, three cards, repeated. Merge or delete a level.
- **A second voice that is too dim.** My first run-in used the third ink and the sentence fell away. The reference grey is about 6:1 on near-black. The grey half is still meant to be read.
- **Tight leading with nothing to wrap.** I set 60/51 on one-line headings, so the leading never showed. Stripe's look depends on the heading wrapping to two lines, and my first fix used an `em` width, which wrapped in one face and not in another. Break it by hand.
- **`text-wrap: balance` on a run-in paragraph.** It squares the block and removes the natural mid-line change of tone.
- **A new treatment per section.** One variant, all the way down. That is most of what reads as expensive.
- **Fake numbering.** Only number what has a real order.

## 3 Eyebrow and label

Labels are the smallest type on the page and the fastest tell of whether anyone was paying attention. A label must add information. If it only repeats the heading's topic, delete it: gold sites often have no eyebrow at all. Great labels form a system, with the same style used for section tags, data keys and footer heads, so the style means something. Cheap ones are a tracked uppercase word above every heading.

Read from frames, 137 examples: size 12 / 12 / 14px, tracking when present 0.08 / 0.10 / 0.15em, gap to heading 16 / 24 / 30px. 69% are uppercase and 42% are mono. Mono labels split evenly between gold and silver and cluster in light-precision and dark-precision, so they are common enough to need a reason.

<a id="mono-caps-eyebrow"></a>
<!-- v:type.eyebrow-or-label/mono-caps-eyebrow -->
### mono-caps-eyebrow

A data key. Machine-readable and quiet. Seen on 26 sites.

**Use it for:** Devtools, AI, infrastructure. It is the default in that world, so give it a job beyond decoration.

**Avoid it for:** Consumer and warm brands, where it reads as a developer costume. Also pages that use mono nowhere else but the eyebrow on every section.

**Recipe:** Mono uppercase label, 11-14px, weight 400, tracking 0.05-0.12em, mid-grey at about 5.5:1 contrast, 12-24px above the heading and flush with it. One label style per page, also used for footer heads and data keys, so mono always means metadata.

**Why it works:** The best uses reserve mono for data, so the label carries meaning. The weakest uses put it above every heading out of habit. Several gold sites keep mono for labels and code alone, so the reader learns what it signals.

**Seen on:** Warp Pricing, Exa, Inngest, Speakeasy, Sourcegraph, Nuro. **Suits:** light-precision, dark-precision, photo-led, bold-colour; devtool, saas, ai, brand, agency.

```css
.label { font: 400 12px/1 var(--font-mono); letter-spacing: .08em; text-transform: uppercase; color: var(--ink-2); }
.label + h2 { margin-top: 16px; }
```

<a id="marker-plus-mono"></a>
<!-- v:type.eyebrow-or-label/marker-plus-mono -->
### marker-plus-mono

A small identity detail doing a lot of work. Seen on 15 sites.

**Use it for:** Pages that are nearly monochrome, where one small marker can hold all the chroma.

**Avoid it for:** Generic dots with no link to the brand.

**Recipe:** A 6-10px brand-derived marker (dot, square, hexagon, tag shape), 8-12px gap, then 11-14px uppercase mono or sans, tracking 0.05-0.1em, mid-grey. The marker is nearly the only chroma on the page. Place it top-left of the section, 16-40px above the heading.

**Why it works:** Take the shape from the logo. A hexagon or a tag shape from the brand turns a stock component into a signature, and the same shape can then serve as a list bullet.

**Seen on:** Customer.io, Scale AI, Factory, Stripe Billing, Bun, Svix. **Suits:** light-precision, dark-precision; ai, devtool, finance, saas.

```css
.label { display: flex; align-items: center; gap: 12px; }
.label::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); }
/* Replace the circle with a shape from the logo. */
```

<a id="syntax-prefixed-label"></a>
<!-- v:type.eyebrow-or-label/syntax-prefixed-label -->
### syntax-prefixed-label

Indexed, filed, technical. Seen on 7 sites.

**Use it for:** Developer tools and studios with a real system behind them.

**Avoid it for:** Consumer products. Brackets around nothing meaningful are a costume.

**Recipe:** Wrap or prefix the label with syntax such as square brackets, a double colon, double underscores or a numbered slash. Mono 11-14px caps, the token at about 40% ink and the word at 90%. Use one pattern everywhere, including nav and FAQ.

**Seen on:** Baseten, Prägen Hätlen, Daily, Brand Identity School, ReadMe, Patrick Heintzmann. **Suits:** mono-technical, illustrated, light-precision; devtool, portfolio.

<a id="boxed-mono-tag"></a>
<!-- v:type.eyebrow-or-label/boxed-mono-tag -->
### boxed-mono-tag

Equipment tape, a schematic label. Seen on 9 sites.

**Use it for:** Infrastructure and finance products with diagrams, where the tag can match the nodes.

**Avoid it for:** As a one-off. It needs to be a system.

**Recipe:** Mono caps 11-13px in a rectangle 22-30px tall, radius 0-4px, 1px outline or pale tinted fill, 8-12px side padding, colour following the section. Reuse the same tag for rails, states and diagram nodes, not just section titles, so it reads as one system.

**Why it works:** Its value comes from reuse. When the same tag appears on a diagram node and above a heading, the page reads as one designed object.

**Seen on:** Modern Treasury, Devin, Cloudflare Workers, Zed Blog, Auth0, Forma24. **Suits:** light-precision, expressive, dark-precision; devtool, agency.

<a id="sentence-case-colour-eyebrow"></a>
<!-- v:type.eyebrow-or-label/sentence-case-colour-eyebrow -->
### sentence-case-colour-eyebrow

Calm and written. The heading's first line. Seen on 7 sites.

**Use it for:** Gradient-light, finance, and long documents. The quiet alternative to the uppercase label.

**Avoid it for:** Weak accents with poor contrast at small size.

**Recipe:** Sentence case, no tracking, weight 500, 13-18px in the section accent, 8-24px above the H2. The largest version matches body size and reads as the heading's first line. No caps, pill or icon. The accent can shift by section, and flips on dark bands.

**Why it works:** Six of the seven sites in this variant are gold. It avoids the uppercase-tracked label that nearly every generated page uses, and it costs nothing.

**Seen on:** Stripe Connect, Buildkite, Stripe Payments, Apple MacBook Pro, Stripe Climate, Stripe Customers. **Suits:** light-precision, gradient-light; finance, devtool, brand.

<a id="tracked-caps-eyebrow"></a>
<!-- v:type.eyebrow-or-label/tracked-caps-eyebrow -->
### tracked-caps-eyebrow

Hotel brochure, gallery wall. Seen on 13 sites.

**Use it for:** Hospitality, culture, heritage and luxury, above serif or light headings.

**Avoid it for:** Sans sites that use it on every section, which is the most common template tell.

**Recipe:** Sans or serif caps at 11-16px, weight 400-500, tracking 0.08-0.2em and up to 0.3em at 11px, warm grey or brand tint, 10-16px above a serif or light heading. Use on section intros only, never on every block.

**Why it works:** Tracking rises as size falls. Caps at 11px need far more air than caps at 16px.

**Seen on:** Aman, White Cube, Babylonstoren, mymind, reMarkable, Asana. **Suits:** warm-neutral, photo-led, light-precision; saas, hospitality, culture.

<a id="plain-caps-label"></a>
<!-- v:type.eyebrow-or-label/plain-caps-label -->
### plain-caps-label

Fashion-house dry. No effort shown. Seen on 10 sites.

**Use it for:** Fashion, portfolio and restrained finance. Good beside photographs.

**Avoid it for:** Long labels.

**Recipe:** Uppercase 10-14px with no added tracking, or at most 0.04em, black or 60% ink, no box or marker. Sits flush to the grid or sticks to a panel's top-left at 10-14px inset. A 2px size step from body can be the entire hierarchy.

**Seen on:** Acne Studios, Per Appelgren, Block, Meta AI, Oliver Dupuy, lemon.markets. **Suits:** photo-led, light-precision, type-led; ai, agency, portfolio, finance.

<a id="tinted-or-outlined-tag"></a>
<!-- v:type.eyebrow-or-label/tinted-or-outlined-tag -->
### tinted-or-outlined-tag

Friendly product chrome. Seen on 13 sites.

**Use it for:** SaaS with several product areas, where the hue identifies each one.

**Avoid it for:** A centred pill above every heading with the same grey: the signature of a template.

**Recipe:** A tag 24-36px tall, radius 4-8px or full, sentence case 13-16px weight 500. Pale tint fill with text in the same hue at 8-12% strength, or a 1px outline. About 24px above the heading. Hue identifies a product or section, never decoration.

**Seen on:** Decagon, Attio, Cal.com Pricing, Affirm, Fairphone, Mixpanel. **Suits:** light-precision, dark-precision, illustrated, gradient-light; saas, ai, finance.

<a id="announcement-link"></a>
<!-- v:type.eyebrow-or-label/announcement-link -->
### announcement-link

News, placed where it will be read. Seen on 9 sites.

**Use it for:** A launch page with real news. One only.

**Avoid it for:** Fake announcements, and the stock pill-with-sparkle. If there is no news, drop it.

**Recipe:** One news link above the H1, 32-40px tall, full or zero radius, 13-16px label with arrow or chevron, 24-50px above the headline. Use one distinct device: a dark pill on a pale hero, one bright fill, or a hairline border. It must link to a real item.

**Why it works:** The pill is so common that the shape carries no signal. What separates the good ones is a single distinct move: dark on pale, one saturated fill, a live number rolling inside a chip.

**Seen on:** Ramp, Jasper, CleanShot X, Increase, Resend, Amplitude. **Suits:** light-precision, gradient-light, dark-precision; saas, finance, devtool.

```css
.news { display: inline-flex; align-items: center; gap: 8px; height: 32px; padding: 0 12px; border-radius: 999px;
        background: var(--surface); border: 1px solid var(--line); font: 400 14px/1 var(--font-text); color: var(--ink); }
```

<a id="plan-badge"></a>
<!-- v:type.eyebrow-or-label/plan-badge -->
### plan-badge

A quiet recommendation. Seen on 4 sites.

**Use it for:** Pricing cards.

**Avoid it for:** Saturated banners over the card, and more than one badge in a row.

**Recipe:** One badge beside a plan name: 10-12px weight 500-600, 20-22px tall, full radius. Grey on grey keeps the recommended plan calm; a 10% tint of the only accent marks it once. No second badge on the row.

**Seen on:** Cursor Pricing, Vercel Pricing, Resend Changelog, Dub Pricing. **Suits:** light-precision, warm-neutral, dark-precision; devtool, ai, saas.

<a id="rule-or-tick-label"></a>
<!-- v:type.eyebrow-or-label/rule-or-tick-label -->
### rule-or-tick-label

Editorial and typeset. Seen on 11 sites.

**Use it for:** Editorial, finance, local brands, anything that wants a printed feel.

**Avoid it for:** Combined with another marker.

**Recipe:** A short line anchors the label: a 22-56px 1px rule before or above, a 1x12px tick, or a full-width hairline with the label 16px below. Label 12-15px in ink or accent. For editorial meta, stretch a rule between byline and read time at 11px caps.

**Seen on:** Dishoom, Anthropic News, Lightspeed, Stripe Blog, Monocle, Calvyn. **Suits:** warm-neutral, type-led, photo-led; editorial, local-business, food-drink.

<a id="margin-and-corner-labels"></a>
<!-- v:type.eyebrow-or-label/margin-and-corner-labels -->
### margin-and-corner-labels

Annotation on a drawing. Seen on 10 sites.

**Use it for:** Sparse, type-led pages and portfolios.

**Avoid it for:** Dense product pages. Never under 10px.

**Recipe:** Tiny labels pinned to the page, not the heading: 10-12px numerals in the gutter, paired edge labels on one baseline, or mono captions in viewport corners 24-36px in. They replace dividers and eyebrows. Keep at least 10px and one ink step readable.

**Seen on:** Cognition, Evenark, STUDIO UNLMTD, Red Blob Games, Adrien Quéchon, IRONHILL. **Suits:** type-led, illustrated, expressive; portfolio, agency, culture.

<a id="media-caption-pair"></a>
<!-- v:type.eyebrow-or-label/media-caption-pair -->
### media-caption-pair

A museum wall label. Seen on 3 sites.

**Use it for:** Architecture, agencies, portfolios and anything gallery-like.

**Avoid it for:** Text-heavy pages.

**Recipe:** Two lines under or over media: name at 15-18px weight 400-500, detail at 12-15px in uppercase grey or mono, 4-8px apart. Keep sizes between 12 and 18px site-wide so text behaves as caption. Category colour can follow the project accent.

**Seen on:** BIG, New Material, Nicole Heim Studio. **Suits:** photo-led, light-precision; agency, architecture.

<a id="hand-placed-label"></a>
<!-- v:type.eyebrow-or-label/hand-placed-label -->
### hand-placed-label

An object placed on the page. Seen on 5 sites.

**Use it for:** Brands with a physical world: paper, stamps, stickers, tabs.

**Avoid it for:** Clean precision registers.

**Recipe:** A label treated as an object: a paper tab with a small index inset 24px on the hero frame, a sticker tilted 3-5 degrees over a headline edge, a filled colour cell, or a script note. One per screen. Works when the brand has a physical world to draw on.

**Seen on:** ECI, Takahama Kawara Museum, David Heckhoff, Beckmans, terrenohotel.com. **Suits:** bold-colour, render-3d, photo-led; hospitality, portfolio, ai.

### What cheapens it

- **A label above every heading.** Most of the time the page is better without it.
- **Too little contrast.** My first mono label used the third ink at 4.1:1 and all but vanished at 12px on near-black. Keep small labels near 5.5:1.
- **Tracking on lowercase.** Positive tracking is for capitals and small sizes only.
- **Equal tracking at every size.** Caps at 11px need about twice the tracking of caps at 16px.
- **Mono as a costume.** A consumer brand with mono eyebrows and no data looks like it borrowed a developer's clothes. Reserve mono for things that are data.
- **The stock pill.** A centred rounded pill with a sparkle icon above the hero. If there is no news, there is no pill.
- **Several badge styles.** One label system for the whole page.

## 4 Subhead

The subhead answers the question the headline raised. It is the plainest element on the page, and plainness is the point: it needs to be read, not noticed. Most of the craft is restraint. Keep it short, keep it readable and keep it close to the headline.

Measured across 182 sites: 16 / 18 / 20px, line-height 1.3 / 1.4 / 1.5, gap below the H1 16 / 20 / 32px, width 436 / 550 / 640px, weight 400 on 77%, same family as the H1 on 53%, and left aligned on 58%. Rows were sparse here because the good default rarely draws comment, so the first variant comes from the deep pass and not from analyst tags.

<a id="plain-grey-lede"></a>
<!-- v:type.subhead/plain-grey-lede -->
### plain-grey-lede

The backbone. Invisible when right. Seen on 114 sites.

**Use it for:** Nearly every hero. It is the measured default across 182 sites, and analysts rarely tagged it because it never draws attention.

**Avoid it for:** Under a two-voice headline, which already contains its own sub.

**Recipe:** One to two sentences under the H1: 16-20px, weight 400, line-height 1.4-1.5, 60-85% of the heading's ink strength, 16-32px below, capped near 30em or 500-640px. H1 to sub is about 3:1. Balance centred lines so no word is stranded.

**Why it works:** Most generated pages make the sub too pale. On 64% of sites the sub is muted, but its ink is still 72% as strong as the heading at the median. The step is smaller than it feels, and 36% of sites use no tone step at all.

**Seen on:** Attio, Sourcegraph, Linear, Vercel AI SDK, Exa. **Suits:** light-precision, dark-precision, warm-neutral, gradient-light; saas, devtool, ai, finance.

```css
h1 { font: 500 56px/1.05 var(--font-display); letter-spacing: -.025em; }
p  { margin: 20px auto 0; font: 400 18px/1.45 var(--font-text); max-width: 30em; color: var(--ink-2); text-wrap: balance; }
```

<a id="keyword-lit-sentence"></a>
<!-- v:type.subhead/keyword-lit-sentence -->
### keyword-lit-sentence

The sentence contains its own table of contents. Seen on 6 sites.

**Use it for:** Agencies, developer tools and sites where a few nouns tell the story.

**Avoid it for:** Lifting more than about four words, at which point nothing stands out. Muting the base and colouring the words as well, which is two levers for one step.

**Recipe:** A lead sentence at 22-28px, line-height 1.25-1.4, with one to four words lit. Lit by colour, italic or underline, the sentence stays in full ink; lit by ink, the base drops to muted. Size never changes. The lit words alone should summarise the offer.

**Seen on:** New Material, Aniket, Heart & Soil, VS Code, Evenark, Wild. **Suits:** light-precision, photo-led; agency, devtool, local-business.

```css
.lede   { font: 400 26px/34px var(--font-text); letter-spacing: -.012em; color: var(--ink); }
.lede b { font-weight: 400; color: var(--accent); }
.lede + .lede { color: color-mix(in srgb, var(--ink) 50%, var(--bg)); }
```

<a id="same-face-muted-lead"></a>
<!-- v:type.subhead/same-face-muted-lead -->
### same-face-muted-lead

More considered than a small body sub. Seen on 1 site.

**Use it for:** SaaS pages that want a stronger second level.

**Avoid it for:** Very large headings, where 24px feels timid.

**Recipe:** Lead in the display face, not the text face, 24-26px weight 400-500, line-height 1.35-1.4, 55-60% ink, capped at 600px, directly under the heading. Same family means hierarchy comes only from grey.

**Seen on:** Cal.com. **Suits:** light-precision; saas.

<a id="butted-two-tone-block"></a>
<!-- v:type.subhead/butted-two-tone-block -->
### butted-two-tone-block

Name and promise read as one sentence. Seen on 2 sites.

**Use it for:** Product tiles, plan names, car and hardware pages.

**Avoid it for:** Long promises.

**Recipe:** Name and promise set as one block at the same 28-32px size with line-height near 1.05: name in ink, promise in mid-grey, no gap between them. Body at 16px follows 6-8px below. For tiles, plan names and product cards.

**Why it works:** The missing gap is the detail. Add any space and it falls back into being a title and a subtitle.

**Seen on:** Polestar, Mercury Pricing. **Suits:** photo-led, light-precision; brand, finance.

```css
h3      { font: 400 30px/32px var(--font-display); }
h3 span { display: block; color: var(--ink-2); } /* no margin: the missing gap is the point */
p       { margin-top: 8px; font: 400 16px/18px var(--font-text); }
```

<a id="statement-lead-no-headline"></a>
<!-- v:type.subhead/statement-lead-no-headline -->
### statement-lead-no-headline

The sentence is the hero. Seen on 4 sites.

**Use it for:** Culture, studios, education. When imagery or a wordmark supplies scale.

**Avoid it for:** Conversion pages that need a claim fast.

**Recipe:** No H1 above it: the lead itself takes the first screen, 30-45px, line-height 1.0-1.25, regular weight, 620-900px wide, flush left or centred. Works when the sentence is unusually good, and when imagery or a wordmark supplies the scale.

**Seen on:** Theatre Memory, Vivien's, Apple Design, p5.js. **Suits:** light-precision, type-led, bold-colour; devtool, culture, education.

<a id="line-on-image"></a>
<!-- v:type.subhead/line-on-image -->
### line-on-image

A dry remark in a clear patch of sky. Seen on 2 sites.

**Use it for:** Fashion and product imagery with a real quiet zone.

**Avoid it for:** Busy images. Never add a scrim to force it.

**Recipe:** One dry line at 20-48px placed in the clear area of a full-bleed photograph, 24px inset, with one 16px underlined link 24-30px below, black or white by image tone. No button, no scrim.

**Seen on:** Fujifilm X, Reformation. **Suits:** photo-led; brand, fashion.

<a id="coloured-clause"></a>
<!-- v:type.subhead/coloured-clause -->
### coloured-clause

One typographic joke per tile. Seen on 2 sites.

**Use it for:** Pages that are monochrome everywhere else.

**Avoid it for:** Pages that already use colour in the headline.

**Recipe:** One clause or glyph run recoloured inside a 28-36px sub: a soft two-colour fill with no hard stops, or per-word product colours. First and last words stay plain. One per section, never in the headline too. Everything around it stays monochrome.

**Seen on:** Apple, Elyx. **Suits:** photo-led, warm-neutral; brand, saas.

<a id="demonstrating-sentence"></a>
<!-- v:type.subhead/demonstrating-sentence -->
### demonstrating-sentence

The copy behaves like the product. Seen on 2 sites.

**Use it for:** Products with one clear visual behaviour, such as tagging.

**Avoid it for:** As decoration: if the product does not do it, the sentence should not either.

**Recipe:** The sub demonstrates the product: nouns become 34px outline pills with 1px border and a tinted hue inside a 20px sentence, line step about 44px, with one consistent pill style. The sentence replaces a feature list.

**Seen on:** mymind, Oatly. **Suits:** expressive, gradient-light; food-drink, saas.

### What cheapens it

- **Too pale.** The measured sub is 72% as strong as the heading, which is darker than it feels.
- **Too long.** Two lines at most. If it needs three, the headline has not done its job.
- **The wrong base for coloured words.** My first keyword sentence had a muted base and three accent words, and it looked like a link list. The reference keeps full ink and colours one word.
- **Too far away.** More than about 32px below the headline and it stops belonging to it.
- **A stray word on a centred line.** Balance every centred sub.
- **Different width from the headline.** Cap the measure so the two blocks look related.

## 5 Body copy

Body copy is where the system proves itself. It must be comfortable first. After that, the best work makes paragraphs skimmable, and removes levels instead of adding them. Cheap body copy is 16px grey centred under everything, with no decisions in it.

Measured: primary body size 15 / 16 / 18px, line-height 1.4 / 1.5 / 1.6, 16px on a third of sites. 252 of 311 sites use a tinted or muted body colour, not pure black or white.

<a id="reading-column"></a>
<!-- v:type.body-copy/reading-column -->
### reading-column

A page you can actually read. Seen on 9 sites.

**Use it for:** Changelogs, blogs, docs, founder letters, and any long text inside a marketing site.

**Avoid it for:** Justified text without hyphenation on the web, which opens rivers.

**Recipe:** Long reading at 16-20px, line-height 1.5-1.65, 576-690px measure (about 70 characters), paragraph gap 20-30px. On dark use about 82% ink, near 13:1, and lift emphasis by weight and brightness. Links keep a 1px underline offset 3px. Subheads 20-24px with 48px above and 16px below.

**Why it works:** The asymmetry around subheads is the craft: 48px above and 16px below ties the subhead to the text it introduces. Equal space leaves it floating between paragraphs.

**Seen on:** Linear Changelog, Dishoom, Are.na, Red Blob Games, Plausible, Continue. **Suits:** light-precision, illustrated, type-led; ai, saas.

```css
.col      { width: min(624px, 100%); margin-inline: auto; }
.col p    { font: 400 17px/27px var(--font-text); margin-bottom: 20px;
            color: color-mix(in srgb, var(--ink) 82%, var(--bg)); }
.col h2   { font: 590 24px/1.3 var(--font-display); letter-spacing: -.012em; margin: 48px 0 16px; }
.col a    { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
.col strong { font-weight: 510; color: var(--ink); }
```

<a id="muted-with-ink-keywords"></a>
<!-- v:type.body-copy/muted-with-ink-keywords -->
### muted-with-ink-keywords

Skimmable by design. Seen on 6 sites.

**Use it for:** Feature copy, about pages and CVs. Probably the most useful body move in the corpus.

**Avoid it for:** Long reading, and lifts chosen at random.

**Recipe:** Paragraph in muted ink, 16-21px, with proper nouns or key phrases lifted to full ink, with an optional +100 weight. Size never changes. Skimming only the dark words must give the argument. Two to five lifts per paragraph. A single accent or 1px underline is an acceptable alternative.

**Why it works:** A heavier muted paragraph helps: one reference sets the whole paragraph at weight 600 in grey, so the grey does not read as weak and the only change at a lift is tone.

**Seen on:** Loops, Apple Vision Pro, Aniket, Stripe Climate, Brett Jackson, Lemon Squeezy. **Suits:** bold-colour, warm-neutral, light-precision; saas, portfolio.

```css
p   { font: 600 21px/29px var(--font-text); letter-spacing: -.01em; color: var(--ink-3); max-width: 820px; }
p b { font-weight: 600; color: var(--ink); } /* tone is the only change */
```

<a id="bold-run-in"></a>
<!-- v:type.body-copy/bold-run-in -->
### bold-run-in

One block doing three jobs. Seen on 4 sites.

**Use it for:** Card text, feature grids and image captions.

**Avoid it for:** Long lead phrases.

**Recipe:** One paragraph, no separate title: a short bold phrase ending in a full stop, then regular text in the same ink on the same line. 16-18px, line-height 1.3-1.55, about 460px measure, 16-24px under the image. Or keep one weight and use two inks. Never both.

**Why it works:** This is the cheapest way to remove a level of hierarchy from a card. Fewer levels look more expensive.

**Seen on:** reMarkable, Apple Intelligence, Lithic, Vercel AI. **Suits:** light-precision, warm-neutral; ai, brand, finance.

```html
<p><b>Short lead phrase.</b> The rest of the caption, same ink.</p>
```

```css
p   { margin-top: 24px; font: 400 17px/24px var(--font-text); max-width: 460px; color: var(--ink); }
p b { font-weight: 600; }
```

<a id="one-size-page"></a>
<!-- v:type.body-copy/one-size-page -->
### one-size-page

Total restraint. A printed index. Seen on 9 sites.

**Use it for:** Portfolios, archives, fashion, and any page where images or a grid supply scale.

**Avoid it for:** Conversion pages, and anything needing fast scanning.

**Recipe:** One size carries the whole page, anywhere from 12 to 35px, one weight. Hierarchy comes only from ink, position, case or italic: full ink for current, 50-60% for labels. Line-height 1.15-1.75. The grid does the structural work.

**Seen on:** Paco Coursey, Acne Studios, Ne Geurra, Alessandro Stella, Elisa Breyer Archive, Athletics. **Suits:** type-led, photo-led; portfolio, culture, ecommerce.

<a id="serif-prose-grotesk-labels"></a>
<!-- v:type.body-copy/serif-prose-grotesk-labels -->
### serif-prose-grotesk-labels

A printed report. Seen on 3 sites.

**Use it for:** AI labs, agencies, galleries. Anywhere sentences deserve respect.

**Avoid it for:** Dense UI text.

**Recipe:** Serif carries all sentences at 15-21px, line-height 1.45-1.5; grotesque carries names, titles and labels at the same or a slightly smaller size. Measure 376-612px. No colour change needed, since family alone marks the role.

**Seen on:** Cognition, Work & Co, Gagosian. **Suits:** type-led, light-precision, photo-led; ai, agency, culture.

<a id="display-set-paragraph"></a>
<!-- v:type.body-copy/display-set-paragraph -->
### display-set-paragraph

A paragraph with a voice. Seen on 11 sites.

**Use it for:** One intro or manifesto moment per page.

**Avoid it for:** More than once. Display leading on prose is tiring at length.

**Recipe:** A short paragraph at 24-76px with display treatment: line-height 1.0-1.3, tracking to -0.03em, weight 300-400, 620-1100px wide. Once per page. Grey on dark at 24/33 stays quiet; serif italic at 45/45 becomes a voice.

**Seen on:** Stripe Sessions, Prototype, Polar, Per Appelgren, Lightspeed, TR Studio. **Suits:** photo-led, type-led; other, brand, culture, agency.

<a id="mono-or-duospace-body"></a>
<!-- v:type.body-copy/mono-or-duospace-body -->
### mono-or-duospace-body

Written in the product's own editor. Seen on 9 sites.

**Use it for:** Editors, terminals, technical portfolios, and spec-like notes.

**Avoid it for:** True mono for long reading. Use duospace, which has more even colour.

**Recipe:** Body or notes in mono or duospace, 12-16px, line-height 1.25-1.65, slightly open fit of +0.02em at 14-16px, measure under 690px. Use duospace for long text and true mono only for short notes and captions.

**Seen on:** Zed Blog, La Table de Joakim, Structure Engineering, Zed Docs, Herzog & de Meuron, Paradigm. **Suits:** mono-technical, photo-led; portfolio, architecture.

<a id="marked-prose"></a>
<!-- v:type.body-copy/marked-prose -->
### marked-prose

A reader has been through this with a pen. Seen on 5 sites.

**Use it for:** Warm SaaS, expressive portfolios, research tools.

**Avoid it for:** More than one mark per passage.

**Recipe:** Within 17-46px prose, one clause per passage gets a physical mark: rough pale marker strokes per line overshooting about 10px, a rounded 3px outline around a word, inline pictograms, or an inline italic serif in a sans paragraph. The mark replaces bold.

**Seen on:** Paco Coursey, Elyx, Bohdan Ratiiev: Born From Code, Clarisse Michard, PostHog. **Suits:** type-led, expressive, warm-neutral; portfolio, saas.

<a id="typeset-legal"></a>
<!-- v:type.body-copy/typeset-legal -->
### typeset-legal

Fine print with manners. Seen on 4 sites.

**Use it for:** Regulated products, offers and pricing. Every site has small print, and few treat it as design.

**Avoid it for:** Hiding text that must be read.

**Recipe:** Legal as typesetting: 12-15px, muted but readable, numbered notes with numerals hanging in the gutter, on the grid, tied to superscripts above, closed with a 1px rule. Alternatively three calm centred lines at 15/28, or two clamped lines with a fade and a Read more link.

**Why it works:** Four gold sites and no others do this, which suggests how strong a marker of finish it is. Most pages leave it as a grey dump above the footer.

**Seen on:** Polestar, Hims, Apple, Claude Pricing. **Suits:** photo-led, warm-neutral; brand, health, ai.

<a id="structured-rows"></a>
<!-- v:type.body-copy/structured-rows -->
### structured-rows

Answers, not paragraphs. Seen on 2 sites.

**Use it for:** Facts, feature lists, services and specifications.

**Avoid it for:** Narrative copy.

**Recipe:** Copy set as rows: label column and answer column on one baseline, 15/24, answers about 515px wide, 24px between groups. Or feature rows with a 14px check, about 30px pitch, wrapped lines hanging under the label, a 1px dotted underline marking a tooltip.

**Seen on:** Cal.com Pricing, Office Commun. **Suits:** light-precision; saas, agency.

<a id="small-caption-column"></a>
<!-- v:type.body-copy/small-caption-column -->
### small-caption-column

A note on a drawing. Seen on 7 sites.

**Use it for:** Architecture and art, beside large imagery.

**Avoid it for:** Anywhere the copy matters. Raise to 16px on phones.

**Recipe:** A narrow caption column 250-480px wide, 11-17px, line-height 1.25-1.55, beside large imagery or a title and set apart from the main flow. A scale jump of about 1:10 makes it read as a note. Keep it off busy images.

**Seen on:** The Officin, Muda 26, Nike Better World, MetaLab, Typohypergraphic Object, Ghostty. **Suits:** render-3d, photo-led; culture, agency, other.

<a id="hanging-quote"></a>
<!-- v:type.body-copy/hanging-quote -->
### hanging-quote

A quiet proof of typesetting. Seen on 1 site.

**Use it for:** Testimonials and pull quotes on any site.

**Avoid it for:** Nothing: it is always better than an indented mark.

**Recipe:** Pull quotes at about 18px, line-height 1.4-1.6, muted ink, with the opening quotation mark hung about 7px outside the column so the first letter aligns with the text above. Use a pseudo-element, since Chrome ignores hanging-punctuation.

**Seen on:** Increase. **Suits:** light-precision; finance.

### What cheapens it

- **Using a muted token for reading.** My first dark article used `--ink-2`, a UI grey, and read as dim beside the reference. Reading text sits near 13:1 on dark.
- **Two levers for one step.** A bold lead in dark ink with a grey remainder doubled the step. Keep the same ink and change only weight, or keep one weight and change only ink.
- **Measure too wide.** 980px at 21px reads like a banner. The reference is 820px. Long reading needs 576 to 690px.
- **Lifts with no logic.** Skim only the lifted words. If they do not make the argument, they are decoration.
- **Equal space around subheads.** Use 48px above and 16px below.
- **Grey legal dumped above the footer.** Legal is typesetting too.
- **Justified text without hyphenation.** It scored low in the only example kept.

## 6 Numerals

Numbers are read before words, so they usually carry the proof and the price. The question for any figure is whether it is being compared. Compared figures need alignment and tabular digits. A single stated figure needs scale and a caption. Setting is covered in `references/typography.md`; this section is about how figures are staged.

Good stat treatments are specific and sparse. Three identical stat tiles straight after a hero is one of the most generated patterns there is, and analysts scored display stats below most other numeral treatments.

<a id="price-large-unit-small"></a>
<!-- v:type.numerals/price-large-unit-small -->
### price-large-unit-small

The standard for good pricing. Seen on 6 sites.

**Use it for:** Any plan card.

**Avoid it for:** Metered pricing with several rates: use quiet-rate-stack.

**Recipe:** Price 36-64px in the display sans, weight 500-700, tracking -0.02 to -0.05em; unit 14-16px on the same baseline in grey or mono, 4-10px gap. The word Custom takes the same size so columns align. Reserve a fixed line above for billing notes so all prices sit level.

**Why it works:** The reserved note line is what most clones miss. A plan with no billing note jumps up by a line and the row of prices stops aligning.

**Seen on:** Raycast Pricing, Warp Pricing, Vercel Pricing, Cursor Pricing, Webflow Pricing, Supabase Pricing. **Suits:** light-precision, dark-precision, warm-neutral; saas, devtool.

```css
.price { font: 500 56px/1.1 var(--font-display); letter-spacing: -.03em; }
.price small { font: 400 14px/1 var(--font-mono); letter-spacing: 0; color: var(--ink-3); margin-left: 6px; }
.note { min-height: 20px; } /* reserved on every card, so prices stay level */
```

<a id="quiet-rate-stack"></a>
<!-- v:type.numerals/quiet-rate-stack -->
### quiet-rate-stack

Reference material, not a sale. Seen on 3 sites.

**Use it for:** Usage-based and multi-rate pricing.

**Avoid it for:** Simple plans, where it undersells.

**Recipe:** Price at body size: 13-15px weight 600 rate, regular unit, grey add-on lines prefixed with a plus, in a stack about 90px tall. No oversized number; the plan name carries the weight. Hierarchy comes from weight and ink only.

**Seen on:** Stripe Pricing, Replit Pricing, OpenAI API Pricing. **Suits:** light-precision, warm-neutral; finance, devtool, ai.

<a id="display-stat-with-caption"></a>
<!-- v:type.numerals/display-stat-with-caption -->
### display-stat-with-caption

Proof, stated large. Seen on 9 sites.

**Use it for:** Customer stories and impact sections. Three across at most.

**Avoid it for:** Invented numbers, and three identical stat tiles straight after the hero.

**Recipe:** One stat at 100-150px beside a quote, or up to three at 48-72px, weight 400-700, tracking -0.02 to -0.04em, proportional figures, caption 14-30px 4-12px below. Set units at half size in a lighter ink. Long counters take slight positive tracking. Accent at most one figure.

**Why it works:** Long counters are the exception to tight tracking: one reference opens a ten-digit figure up so the commas do not clot, which reads as a precise measurement.

**Seen on:** Decagon, Hims, Sword Health, Zapier, CSDG, Nike Better World. **Suits:** soft-pastel, bold-colour, light-precision; health, devtool, architecture.

```css
.big       { font: 400 124px/1 var(--font-display); letter-spacing: -.04em; } /* one figure, beside a quote */
.big small { font-size: .5em; letter-spacing: -.02em; color: var(--ink-2); }
.stat      { font: 500 56px/1 var(--font-display); letter-spacing: -.03em; }  /* a row of up to three */
.stat small { font-size: .45em; font-weight: 400; letter-spacing: 0; color: var(--ink-2); }
.cap       { margin-top: 8px; font: 400 16px/1.4 var(--font-text); color: var(--ink-2); }
```

<a id="ruled-ledger-stat"></a>
<!-- v:type.numerals/ruled-ledger-stat -->
### ruled-ledger-stat

Entries in a ledger. Seen on 3 sites.

**Use it for:** Finance, B2B proof and case studies.

**Avoid it for:** Playful brands.

**Recipe:** Stats as ledger rows: numeral 48-64px at left, 14px mono caps caption on the same baseline at right or below, 1px rule between rows. Serif numerals feel especially right. Reads as entries, not hero numbers.

**Seen on:** Jasper, Modern Treasury, Paddle. **Suits:** bold-colour, light-precision, warm-neutral; finance, ai.

```css
.row { display: flex; justify-content: space-between; align-items: baseline; padding: 16px 0; border-top: 1px solid var(--line); }
.val { font: 400 48px/1 var(--font-display); letter-spacing: -.02em; }
.cap { font: 400 14px/1 var(--font-mono); letter-spacing: .05em; text-transform: uppercase; color: var(--ink-2); }
```

<a id="mono-metric-cells"></a>
<!-- v:type.numerals/mono-metric-cells -->
### mono-metric-cells

A live instrument panel. Seen on 1 site.

**Use it for:** Infrastructure and observability pages.

**Avoid it for:** Static marketing metrics with no live feel.

**Recipe:** Mono values at about 18px in ruled grid cells with 10px uppercase mono labels beneath in mid-grey, tabular figures. Values may count up on entry.

**Seen on:** LiveKit. **Suits:** dark-precision; devtool.

<a id="oldstyle-figures"></a>
<!-- v:type.numerals/oldstyle-figures -->
### oldstyle-figures

Literary, human, unhurried. Seen on 2 sites.

**Use it for:** Culture, health and editorial, in dates and warm statistics.

**Avoid it for:** Tables, prices and anything compared in columns.

**Recipe:** Oldstyle figures in running dates or in stats near 55px, so digits drop below the baseline and numbers feel literary. Confirm the face has them and set oldstyle-nums. Spell out months and use en dashes. Never in a table.

**Seen on:** Gagosian, Talkspace. **Suits:** soft-pastel, photo-led; health, culture.

<a id="live-counter"></a>
<!-- v:type.numerals/live-counter -->
### live-counter

Time passing on the page. Seen on 4 sites.

**Use it for:** Load percentages, scroll progress and live statistics.

**Avoid it for:** Numbers that count up from zero for no reason.

**Recipe:** Digits roll vertically in a mask of one line height, stopping one by one, tabular-nums, at 14-140px. Trigger on entry, or tie to scroll or load. Render the real final value in the HTML so it survives no script and reduced motion.

**Seen on:** X8 Eyewear, Copilot, Monet 100, YLEM. **Suits:** gradient-light, photo-led, type-led; fashion, finance, culture.

<a id="folio-numerals"></a>
<!-- v:type.numerals/folio-numerals -->
### folio-numerals

Page numbers in a printed book. Seen on 3 sites.

**Use it for:** Galleries, archives and sequences with a real order.

**Avoid it for:** Decorative 01, 02, 03 on unordered features.

**Recipe:** Numerals as structure: a current index at 90-180px with a small denominator near 50px on the same baseline, a year pinned 35px from a bottom corner, or a 12px two-digit index before each row. They give the page a sense of place.

**Seen on:** Theatre Memory, Prototype, Figure. **Suits:** photo-led, type-led; ai, culture, agency.

<a id="rate-plaque"></a>
<!-- v:type.numerals/rate-plaque -->
### rate-plaque

The rate is the offer. Seen on 1 site.

**Use it for:** Savings and banking products with one rate that sells.

**Avoid it for:** Anything without a single defining number.

**Recipe:** One rate on a plaque: a roughly 154px serif numeral with the percent and unit stacked beside it, on a light plaque inside a 20px-radius tile, with an illustration breaking the tile edge. One per page.

**Seen on:** Betterment. **Suits:** bold-colour; finance.

### What cheapens it

- **Big numbers in a row.** My first version set three stats at 124px and it became a stock stat strip. The reference uses that size for one number beside a quote. Use a single figure at 100 to 150px, or up to three at 48 to 72px.
- **Units at full size.** A unit at full size competes with the figure. Set it at about half size in a lighter ink.
- **Prices that do not line up.** Reserve the billing-note line on every card, and set words such as Custom at the same size.
- **Proportional figures in columns.** Use tabular figures in anything compared. Keep proportional figures in headlines.
- **Oldstyle figures in a table.** They bounce on the baseline.
- **Counting up from zero.** It delays the proof. If digits move, they should mean something, and the real value must be in the HTML.
- **Invented statistics.** A round number with no source reads as fake.

## 7 Type as image

Type becomes the image when a word is big enough to be looked at before it is read. It costs nothing to load, so it is the cheapest way to give a page a memorable moment. It needs something real to say: the name of the company or a short true line. Use one per page, or one at the top and an echo at the bottom. What separates great from cheap is one physical decision, such as a crop, an overlap or a mask. A big word with nothing done to it is only a big word.

Nothing is measured here, because these are one-off compositions. Sizes are read from frames at 1440px. Expressive-tier sites are heavily represented, so check that the register suits the brief.

<a id="cropped-footer-wordmark"></a>
<!-- v:type.type-as-image/cropped-footer-wordmark -->
### cropped-footer-wordmark

The page ends on the logo as a physical object. Seen on 15 sites.

**Use it for:** Any confident brand. The most reusable large-type move, because it spends nothing above the fold.

**Avoid it for:** Weak or long names. Avoid stock neutral grotesques at this size unless the mark has been altered.

**Recipe:** Close the page with the wordmark at 90-100% of container width, flush to the margins, weight 600-700, tracking -0.03 to -0.05em, cropped by the viewport bottom by 10-25% of cap height. Fit by measuring, not by guessing vw. One tone, mask or lit detail may be added.

**Why it works:** Cropping is what makes it feel physical, since a full word sitting in a footer is only a big logo. Add one detail so it is not just a stretched font: a halftone fill, one lit stroke, a reveal behind the footer, or a fade into the ground.

**Seen on:** Cal.com Pricing, Affirm, Nicole Heim Studio, Fidèle, Hawl Design, CITADEL Construction Group. **Suits:** dark-precision, light-precision, bold-colour; agency, culture, devtool, saas, architecture.

```html
<div class="mark" data-fit><span>NAME</span></div>
```

```css
.mark      { margin: 0 24px; overflow: hidden; }
.mark span { display: inline-block; white-space: nowrap; font: 700 100px/.78 var(--font-display);
             letter-spacing: -.03em; margin-left: -.03em; margin-bottom: -.075em; }
```

```js
// Fit one line to its container once fonts have loaded. Also serves full-width-statement.
document.fonts.ready.then(() => {
  const fit = () => document.querySelectorAll('[data-fit]').forEach(box => {
    const s = box.firstElementChild;
    s.style.fontSize = '100px';
    s.style.fontSize = 100 * box.clientWidth / s.getBoundingClientRect().width + 'px';
  });
  fit(); addEventListener('resize', fit);
});
```

<a id="wordmark-masthead"></a>
<!-- v:type.type-as-image/wordmark-masthead -->
### wordmark-masthead

The name is the first image. Seen on 13 sites.

**Use it for:** Studios, launches and shops with a strong name.

**Avoid it for:** Pages where the first screen must explain a product.

**Recipe:** Brand name fills the first screen edge to edge, 16-32px side margins, 130-300px tall, under or behind the nav. Let renders overlap it, or set it tone on tone near 1.1:1 as a watermark. The headline sits below at about a quarter of the size. Nav omits the logo.

**Seen on:** Studio Dado, Vivien's, UNITO, Supabase Launch Week, Symbol Studio, Fora. **Suits:** type-led, bold-colour, render-3d; agency, ecommerce, devtool.

<a id="full-width-statement"></a>
<!-- v:type.type-as-image/full-width-statement -->
### full-width-statement

A hold-your-breath moment between sections. Seen on 7 sites.

**Use it for:** A section break or a sign-off. Once per page.

**Avoid it for:** More than two lines, or copy that is not worth the space.

**Recipe:** A short line scaled to fill the container: 135-318px, line-height 0.75-0.85, tracking -0.04 to -0.05em, alone in a plain viewport, or two lines force-justified to the margins. Once per page, as a section break or sign-off. Fit the size by measuring.

**Seen on:** Kinfolk, Oxygen Pictures, Make Town, Groq, IRONHILL, Clarisse Michard. **Suits:** type-led, photo-led; editorial, agency, food-drink.

```css
.line      { margin: 0 16px; }
.line span { display: inline-block; white-space: nowrap; font: 600 100px/.85 var(--font-display);
             letter-spacing: -.05em; margin-left: -.03em; }
/* Add data-fit to .line and use the script under cropped-footer-wordmark. */
```

<a id="title-behind-object"></a>
<!-- v:type.type-as-image/title-behind-object -->
### title-behind-object

Depth without any 3D. Seen on 8 sites.

**Use it for:** Vehicles, products and fashion, with a clean cut-out or strong image.

**Avoid it for:** Images without a clear silhouette.

**Recipe:** Giant name at 250-360px behind a cut-out object or centred image that overlaps about a third of the letters. Letters run off an edge. Text stays flat while the object carries the shadow. The name must stay readable from what remains.

**Seen on:** Apple, Per Appelgren, Ramp, Rivian, Waymo, Shinbu Aikido. **Suits:** photo-led, expressive; brand, finance, portfolio.

<a id="inline-objects-in-sentence"></a>
<!-- v:type.type-as-image/inline-objects-in-sentence -->
### inline-objects-in-sentence

The sentence and the product are one object. Seen on 6 sites.

**Use it for:** Products with small, charming interface pieces. Cal-style chips, tags or clocks.

**Avoid it for:** Stock icons. Objects must be the product's own, or the line reads as a rebus.

**Recipe:** Headline at 45-80px with real objects in the line: photo chips, clock tiles, product cards, pills, about 1em tall, each a different shape, holding real content, radius 10-14px, 1px border, at most two per line. Raise line-height to 1.15-1.25 to clear them. The words alone must still be a sentence.

**Why it works:** Objects need more leading than type does. Line-height that works for the words collides once a 1em chip lands on both lines, so the heading has to open up here, the opposite of every other display recipe.

**Seen on:** Vercel AI SDK, Cal.com, Meta AI, SUTÉRA, Adrien Quéchon, Radio Null. **Suits:** light-precision, expressive; portfolio, devtool, ai.

```css
h1 { font: 700 80px/1.18 var(--font-display); letter-spacing: -.03em; }
.o { display: inline-flex; align-items: center; gap: .14em; height: .92em; padding: 0 .15em; vertical-align: -.15em;
     border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
.o > * { font: 500 14px/1.15 var(--font-text); letter-spacing: 0; } /* size the inner text here, so em on .o stays the heading's */
```

<a id="image-through-letters"></a>
<!-- v:type.type-as-image/image-through-letters -->
### image-through-letters

Letters as windows. Seen on 4 sites.

**Use it for:** Culture and expressive campaigns.

**Avoid it for:** Busy images that destroy word shapes.

**Recipe:** Letters as windows: clip a photo, gradient or live canvas through heavy condensed type at 200px or more with background-clip. A flat full stop keeps the word anchored. Keep the image simple enough that word shapes survive.

**Seen on:** STUDIO UNLMTD, i-D RED, Delassus, Pankow. **Suits:** expressive, type-led, illustrated; culture, agency, food-drink.

<a id="chapter-numeral-or-word"></a>
<!-- v:type.type-as-image/chapter-numeral-or-word -->
### chapter-numeral-or-word

A held breath between eras. Seen on 4 sites.

**Use it for:** Long storytelling pages and reports.

**Avoid it for:** Short marketing pages.

**Recipe:** A chapter opener with a single year, word or set of initials at 300-920px wide, alone on a plain ground with only the nav remaining. Use between long sections. It may recolour per chapter.

**Seen on:** Theatre Memory, Driftime, Special Production Agency, 2819 Church. **Suits:** type-led, photo-led; agency, nonprofit, culture.

<a id="scroll-resolved-text"></a>
<!-- v:type.type-as-image/scroll-resolved-text -->
### scroll-resolved-text

Text arrives as you reach it. Seen on 2 sites.

**Use it for:** Changelog covers, manifesto sections and intros.

**Avoid it for:** Essential copy without a static fallback.

**Recipe:** Lines resolve on scroll: upcoming text blurred 6-10px at 30% opacity, sharpening as it reaches reading position. A static form steps each line dimmer, at 100%, 80%, then 60% ink, like baked poster text. Provide a fully legible state under reduced motion.

**Seen on:** Resend Changelog, Elodie Kimmel. **Suits:** type-led, dark-precision; portfolio, devtool.

<a id="outline-type"></a>
<!-- v:type.type-as-image/outline-type -->
### outline-type

A word held open. Seen on 2 sites.

**Use it for:** Type-led brands and portfolios.

**Avoid it for:** Sizes under 64px, and faces with overlapping contours that show their seams.

**Recipe:** Single nouns swap to a transparent fill with a 1px stroke at the same size, inside solid lines, at most one per sentence, at 64px or above. Or a wall of outlined names with the active one filled. Use a face with simple contours.

**Why it works:** Variable fonts often have overlapping contours, which text-stroke draws. Check the letters where strokes join.

**Seen on:** PURHO, Belen Jones. **Suits:** type-led, render-3d; brand, portfolio.

<a id="list-as-display"></a>
<!-- v:type.type-as-image/list-as-display -->
### list-as-display

The index is the design. Seen on 2 sites.

**Use it for:** Product suites, client lists and services, replacing a grid.

**Avoid it for:** Lists under about eight terms, which look thin.

**Recipe:** A list at 52-64px replaces a grid: centred terms split by 5px squares, or client names stacked, about 86px row pitch. Hover fills a 4px-radius block behind a term. Inline badges can carry live data.

**Seen on:** Public, Leeroy. **Suits:** light-precision, gradient-light; finance, agency.

<a id="constructed-letters"></a>
<!-- v:type.type-as-image/constructed-letters -->
### constructed-letters

Art first, words second. Seen on 6 sites.

**Use it for:** Expressive campaigns and agencies with time to build it.

**Avoid it for:** Anything that must load fast or that needs reading.

**Recipe:** Letters built from something else: voxels, wind strands, a pixel grid, brush. Treat as artwork at section-break scale, one per site, with a live text alternative for readers and search.

**Seen on:** Roy Jad, a16z, Three Zero Five Studio, Relume, Mala Project, Little Troop. **Suits:** expressive, light-precision, bold-colour; food-drink, finance, portfolio.

<a id="annotated-type"></a>
<!-- v:type.type-as-image/annotated-type -->
### annotated-type

Someone has been drawing on the page. Seen on 1 site.

**Use it for:** Warm, human food and craft brands.

**Avoid it for:** Corporate pages. Needs real hand-drawn assets.

**Recipe:** Hand-drawn strokes on type: uneven ovals around a figure, pencil arrows into text, scrawled circles around names. Use SVG paths, drawn on entry. Annotation replaces section dividers.

**Seen on:** Diego's. **Suits:** expressive; food-drink.

<a id="highlight-strip-on-photo"></a>
<!-- v:type.type-as-image/highlight-strip-on-photo -->
### highlight-strip-on-photo

A label stuck on a poster. Seen on 3 sites.

**Use it for:** Museums, campaigns and any text over changing photographs.

**Avoid it for:** Calm pages that do not need it.

**Recipe:** Text lines each wrapped in a flat bright strip with 2px side padding, black text, bottom-left of a full-bleed slide. Use box-decoration-break: clone so padding repeats per line. It guarantees contrast over any photograph.

**Seen on:** Design Museum, Pier88 Coast, Stark. **Suits:** photo-led, bold-colour; food-drink, saas, culture.

<a id="concept-typography"></a>
<!-- v:type.type-as-image/concept-typography -->
### concept-typography

One idea, set exactly. Seen on 2 sites.

**Use it for:** Brands whose name or voice is the idea.

**Avoid it for:** Weak ideas.

**Recipe:** Typography as concept: the product name as a dictionary entry with phonetics and a small tag, or a forced-break monologue of caps at 40/44 in a 520px column. One idea, set exactly. The content must earn it.

**Seen on:** Svelte, Teenage Engineering. **Suits:** render-3d; brand, devtool.

### What cheapens it

- **Guessing the size.** My `24vw` wordmark stopped short of the right margin and cropped too deep. Measure the word and fit it to the container.
- **Cropping a descender.** My cropped wordmark lost the tail of its `y`, so the name read as a different word. Of 15 examples, every mark cropped at the bottom has no descender; the two names that have one bleed sideways or sit whole. Set such a name in capitals or do not crop it.
- **Cropping too deep.** Take 10 to 25% of cap height. At about 38%, letters stop being readable.
- **Empty objects.** My first inline chips were blank boxes and the headline read as a wireframe. Real objects hold real content and differ in shape: a clock, a card, a photo.
- **Line-height too tight for objects.** Inline objects need 1.15 or more, unlike every other display recipe.
- **A stock face, stretched.** At this scale a default grotesque shows. Add a crop, mask or lit detail.
- **Using it several times.** One large moment is a decision, and four is a theme.
- **No accessible name.** Decorative letterforms still need real text for readers and search.
