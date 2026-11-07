# Colour

This chapter shows how real palettes are built and carried, then gives a procedure that turns a dealt palette seed or a blank brief into a full token set. Read it after the sampler has dealt a hand and before you write the system line of your spec.

It rests on the 826 analyst cards, the computed CSS of 314 gold and silver sites, pixel measurements over 8,555 frames from 654 sites, and the same measurements over 229 frames from the 32 baseline runs. Hex values are measured facts about a named site. Treat them as evidence, not as a palette to copy. Recipes use the shared tokens `--bg`, `--surface`, `--ink`, `--ink-2`, `--ink-3`, `--line` and `--accent`, so they drop into every other chapter, and they add `--surface-2`, `--accent-ink`, `--accent-soft`, `--accent-text` and `--deep`. `--nh` and `--ah` hold your neutral hue and accent hue. All L, C and H values are OKLCH.

**Contents.** [OKLCH in one minute](#oklch-in-one-minute) · [Two failures, measured](#two-failures-measured) · [What top sites do](#what-top-sites-do) · [Choose a colour strategy](#choose-a-colour-strategy) · [The procedure](#the-procedure) · [Neutral ladder](#neutral-ladder) · [Ink levels](#ink-levels) · [Accent placement](#accent-placement) · [One accent or several](#one-accent-or-several) · [Large colour areas](#large-colour-areas) · [Deriving a palette](#deriving-a-palette) · [Gradients that look made](#gradients-that-look-made) · [Tinted shadows](#tinted-shadows) · [Semantic colours in apps](#semantic-colours-in-apps) · [Data viz colours](#data-viz-colours) · [Dark mode as a separate design](#dark-mode-as-a-separate-design) · [Contrast numbers](#contrast-numbers) · [Carrying brand without filling the page](#carrying-brand-without-filling-the-page) · [Common mistakes](#common-mistakes) · [Check your numbers](#check-your-numbers) · [Before you call it done](#before-you-call-it-done)

## OKLCH in one minute

Work in OKLCH because its L matches perceived lightness across hues. In HSL, a yellow and a blue at 50% lightness look nothing alike. In OKLCH, two colours at L .72 carry about the same visual weight, which is what lets you build ladders and multi-colour sets by arithmetic.

`oklch(L C H)`: L runs 0 to 1, C runs from 0 (grey) to about .37, H is an angle. All current browsers support it, along with `color-mix()`.

| H | Family | H | Family |
|---|---|---|---|
| 345 to 20 | red, rose | 170 to 225 | teal, cyan |
| 20 to 70 | orange, clay | 225 to 285 | blue, indigo |
| 70 to 115 | amber, yellow | 285 to 320 | violet |
| 115 to 170 | lime, green | 320 to 345 | magenta, pink |

Each hue reaches its peak chroma at a different lightness, so the same C is not the same vividness. Yellow and lime peak near L .9. Blue peaks at L .45. Ask for a yellow at L .55 and you get mustard. Ask for a blue at L .85 and you get powder. Pick L from the hue's natural range and accept what the gamut gives. Maximum chroma inside sRGB, computed:

| H | L .45 | L .55 | L .65 | L .75 | L .85 | Peak at L |
|---|---|---|---|---|---|---|
| 30 red-orange | .18 | .22 | .24 | .15 | .08 | .63 |
| 60 orange | .10 | .13 | .15 | .17 | .10 | .75 |
| 90 amber | .09 | .11 | .13 | .15 | .17 | .86 |
| 110 yellow | .10 | .12 | .14 | .16 | .18 | .96 |
| 145 green | .14 | .17 | .20 | .23 | .27 | .86 |
| 180 teal | .08 | .10 | .12 | .14 | .15 | .89 |
| 210 cyan | .08 | .09 | .11 | .13 | .14 | .84 |
| 240 sky | .10 | .13 | .15 | .14 | .08 | .71 |
| 265 blue | .31 | .25 | .18 | .13 | .07 | .45 |
| 290 violet | .25 | .27 | .20 | .14 | .08 | .52 |
| 320 magenta | .22 | .26 | .31 | .21 | .12 | .65 |
| 350 pink-red | .19 | .23 | .27 | .18 | .10 | .66 |

## Two failures, measured

Page averages from frames, median per page.

| Measure | Gold (147) | Silver (369) | GPT-6 baseline (16) | Opus baseline (16) |
|---|---|---|---|---|
| Pixels with visible colour (C at least .06) | 3.1% | 6.2% | 1.3% | 35.6% |
| Middle half of that | 0.7 to 9.5 | 2.1 to 15.2 | 0.6 to 3.3 | 25.6 to 56.1 |
| Pages where one saturated colour fills over 35% of some frame | 12% | 16% | 0% | 88% |
| Hue families in flat colour | 1 | 1 | 0 | 4 |
| Grounds per page | 2 | 2 | 1 | 4 |
| Pages on a warm off-white ground | 8% | 8% | 81% | 31% |

A hue family is a 30 degree band of flat colour covering over 0.25% of the page. A ground is a dominant frame colour seen in at least 10% of a page's frames.

**The flat field.** The Opus baseline fills the frame: a whole hero in saturated yellow, then a red band, then a blue one, with type as the only content. Every section gets a new ground. The saturated area runs over ten times gold's, and the colour is doing the job that product, photography and hierarchy should do. It reads as a poster series.

**The timid page.** The GPT-6 baseline does the opposite: a grey or cream page, thin borders and one small accent, often purple on software briefs. Nothing is wrong and nothing is decided. Its colour area is half of gold's, and it has almost no second ground. Gold's restraint looks similar in a table, so the difference is worth stating: gold pages are quiet and then spend. They have a dark chapter, a coloured product plate or one flooded footer. 42% of gold pages have a dark chapter somewhere. The timid page never spends.

**The hue collapse.** Both models also land on fixed hues whatever the brief says. GPT-6 used a cream ground in 16 of 16 runs, sage-tinted greys around H 120, and a clay accent around H 38 in 10 of 16. Opus used cream in 13 of 16, ultramarine near H 266 in 14, yellow near H 90 in 14 and vermilion near H 30 in all 16. A palette in those positions is the model's default wearing a brief. Warm paper is a real option, and Function Health and Anthropic use it well, but only 8% of top pages sit on it against 81% of GPT-6 pages. Reach for it when the brief earns it.

The target sits between the two failures and depends on the genre, which matters a great deal:

| Genre, gold and silver | Pixels with visible colour | Hue families, median and 90th percentile |
|---|---|---|
| Education | 17.9% | 2, 5 |
| Food and drink | 13.7% | 2, 5 |
| Health | 12.4% | 2, 5 |
| Local business | 11.1% | 1, 3 |
| Hospitality, agency, culture | 6 to 7% | 1 to 2, 3 to 5 |
| Finance, ecommerce, brand | 4 to 5% | 1, 3 to 5 |
| AI, SaaS, fashion | 3 to 3.5% | 1, 2 to 3 |
| Developer tools | 1.9% | 1, 2 |

A coffee shop should carry far more colour than a database. Treat 3% as the number for product sites, not as a universal ceiling. Consumer genres have few gold pages (education 2, food 3, health 3, local 0), so those rows lean on silver work.

## What top sites do

- **Neutrals hold the page.** On the median gold page, 89% of pixels have C below .02.
- **Many pages have no UI colour.** Counting flat colour over 0.25% of the page, 39% of gold pages have no hue family at all, 24% have one, 18% have two and 18% have three or more. On the pages with none, colour comes from photographs, product and logos.
- **The accent is rarely the button.** Analysts found a chromatic accent on 78% of light gold pages, yet only 34% fill any button with colour. The primary action on light gold pages is ink-filled on 41%, white or pale on 32%, and coloured on 27%. The accent lives in links, charts, tags, product shots and one or two moments.
- **The accent is small, and it arrives in bursts.** It covers a median 0.8% of gold pages (middle half 0.1 to 4.0%, 90th percentile 11%). It appears in only 38% of frames. Its two strongest frames hold 57% of all of it, and its peak frame holds five times the page average.
- **Large colour goes deep.** See [Large colour areas](#large-colour-areas).
- **Hue does not follow category.** Across gold and silver the accent is blue on 25% of sites, in the orange family on 21%, neutral on 20%, yellow 10%, green 9%, violet 5%, red 4%, teal 4%. No genre gives one hue more than 39%: finance is 36% blue, food is 33% orange, health splits between yellow, blue and orange. Category is weak evidence for hue, so the first association is a poor reason to pick one.

By register, gold and silver:

| Register | Sites | Dark first | Visible colour, median (middle half) | Hue families (median, 90th pct) | Accent area | Chromatic primary | Flat field on page |
|---|---|---|---|---|---|---|---|
| Light precision | 123 | 11% | 1.8% (0.5 to 5.4) | 0, 3 | 0.6% | 36% | 7% |
| Dark precision | 56 | 90% | 2.8% (0.7 to 8.6) | 1, 3 | 0.7% | 32% | 7% |
| Mono technical | 16 | 45% | 3.3% (0.7 to 13.9) | 1, 2 | 0.7% | 30% | 19% |
| Warm neutral | 64 | 14% | 4.9% (2.3 to 11.4) | 1, 3 | 1.5% | 41% | 14% |
| Photo led | 117 | 25% | 7.0% (3.0 to 11.7) | 2, 4 | 1.4% | 26% | 10% |
| Type led | 29 | 31% | 1.7% (0.2 to 9.8) | 1, 2 | 1.4% | 22% | 7% |
| Gradient light | 26 | 8% | 10.2% (3.9 to 21.3) | 2, 5 | 1.5% | 57% | 27% |
| Illustrated | 15 | 0% | 6.9% (1.7 to 18.4) | 1, 5 | 1.3% | 50% | 20% |
| Soft pastel | 12 | 0% | 17.5% (7.8 to 32.6) | 2, 3 | 3.7% | 60% | 42% |
| Bold colour | 51 | 31% | 25.1% (12.6 to 38.8) | 2, 5 | 5.9% | 64% | 47% |

Every row counts colour inside images and product shots, which lifts photo-led and illustrated. Even bold-colour pages sit near 25%, well under the Opus median.

## Choose a colour strategy

Choose one, write it in your spec, and let it govern every section. Mixing strategies is how a page turns into a sample book.

| Strategy | How it works | Seen on | Pick it when |
|---|---|---|---|
| Content carries colour | Neutral UI with no accent, or an ink-coloured one. All hue comes from what is in the frames | Vercel pricing, Polar, Apple, Framer | Frames are rich: real photography, colourful product, a portfolio. It collapses when frames are thin |
| One accent on neutrals | A neutral ladder plus one hue used sparingly | Exa, Attio, Plausible | Most software and services. The safest professional choice, and the one to check hardest for timidity |
| Tinted system | Ink, muted text, lines and dark grounds share a hue, and the accent sits in that family | Stripe, Mercury, Customer.io, Affirm | You want a quiet page that still feels owned. Strong in finance and B2B |
| Deep anchor, bright spark | One dark chromatic colour takes the big areas, and one or two brights stay near 1% | Astral, Jasper, Wispr Flow, Talkspace | You need presence without shouting |
| Hue per product or section | Each hue owns a product, feature or audience, and returns whenever that thing does | Framework, Mixpanel, Lemon Squeezy, Hugging Face | There are several things to tell apart |
| Photo-derived | UI colours are sampled from the photography, so the page and pictures share one light | Hims, Babylonstoren, Function Health | Physical businesses with art-directed images |
| Spectrum object | All colour lives in one ribbon or render, and the rest stays neutral | Stripe, Stripe Sessions, Increase | You can build one strong image. See [Gradients](#gradients-that-look-made) |
| Colour-led brand | Several saturated fields, each holding real content | Headspace, Counter Culture, Khan Academy | Consumer brands with a mascot, packaging or illustration, or a brief that asks for loud |

Answer three questions, in order:

1. **What colour is already in the frames?** Colourful product shots or strong photos mean the UI should step back. Thin frames need a stronger system, and no amount of accent fixes them.
2. **How many things must be told apart?** One product: one hue. Several products or audiences: a hue per thing is information, so it earns its place.
3. **How loud is this business allowed to be?** A law firm and a children's learning app sit at opposite ends. Use the genre table for a sense of scale.

If the sampler dealt a register, its row above sets the budget. The sampler handles variety between runs, so choose what suits this brief and do not reach for the strategy you used last time.

## The procedure

1. **Start from the hand.** The sampler gives palette seeds, each a real site's `bg`, `surface`, `text`, `muted` and `accent`. Convert the seed to OKLCH with the helper in [Check your numbers](#check-your-numbers). Keep its structure: the L ladder, the size of its steps, how much chroma sits in the neutrals. Change the hues to fit the business. Lifting a seed unchanged copies a site, and ignoring it loses the variety it exists to give you. With no hand, go to [Deriving a palette](#deriving-a-palette).
2. **Name the strategy** from the table above, and write down the hue budget: how many families, and what each one is for.
3. **Pick the neutral hue and strength.** Take `--nh` from the accent, the photography or the material, and pick a strength from [the neutral table](#neutral-ladder).
4. **Build the ladder:** ground, two surface steps, deep ground, hairline.
5. **Set ink levels** by contrast, using [the L targets](#ink-levels), and check them on every ground, not only the page.
6. **Set the accent** at a natural L for its hue. Decide the label colour by [the label rule](#the-label-rule). Derive hover, soft and text variants.
7. **Write the placement list:** three to five exact places colour may appear, and where its one large moment falls. If you cannot name them, you have a palette and no plan.
8. **Compute and check.** Run the numbers, then look at the frames at thumbnail size and ask whether the eye lands where you meant.

A token skeleton. The L and C values below are one row of each table, not defaults. Replace them from the tables, and take `--nh` and `--ah` from the business.

```css
:root{
  --nh:0; --ah:0;                      /* set both from the brief; never leave these */
  --bg:oklch(.985 .004 var(--nh));
  --surface:oklch(.96 .006 var(--nh));
  --surface-2:oklch(.935 .008 var(--nh));
  --ink:oklch(.21 .02 var(--nh));
  --ink-2:oklch(.47 .018 var(--nh));   /* 6.5:1, secondary text */
  --ink-3:oklch(.63 .014 var(--nh));   /* 3.3:1, marks and large text only */
  --line:color-mix(in oklab,var(--ink) 9%,transparent);
  --line-strong:color-mix(in oklab,var(--ink) 18%,transparent);
  --deep:oklch(.25 .05 var(--nh));
  --accent:oklch(.54 .17 var(--ah));
  --accent-hover:oklch(.49 .17 var(--ah));
  --accent-ink:oklch(.99 .003 var(--ah));
  --accent-soft:oklch(.95 .025 var(--ah));
  --accent-text:oklch(.5 .15 var(--ah));
  --shadow-tint:oklch(.3 .07 var(--nh));  /* opaque: surface.md mixes it to transparent */
}
```

`--line`, `--line-strong`, `--well` and `--shadow-tint` also appear in `elements/surface.md`, and `--deep` in `elements/layout.md`. Those chapters mix them from your tokens, so either form works. Use one.

## Neutral ladder

A neutral ladder is one material at several depths, so hold hue and chroma close to constant and change only L. Most cheap greys fail here: `#f3f4f6`, `#9ca3af` and `#111827` from a kit, beside a warm photo and a warm accent, read as three materials.

### Choose a strength

| Strength | C on light | C on dark | Seen on | Effect |
|---|---|---|---|---|
| None | 0 | 0 | Vercel pricing (`#fafafa`, `#171717`), Polar (`#090909` to `#212121`) | Technical and exact. Lets content own all colour |
| Trace | .002 to .006 | .003 to .006 | Linear (.003 at H 247), Apple (.003 at H 286), Claude (.005 at H 95) | Felt more than seen. Pure grey looks slightly dead beside it |
| Visible | .01 to .02 | .01 to .03 | Stripe surfaces (`#e5edf5`, .014 at H 248), Mercury dark (.02 at H 285) | The page clearly has a temperature |
| Material | .03 to .05 in ink only | .05 to .10 | Stripe ink (.05 at H 252), Stripe band `#0d1738` (.066), Jasper `#00053d` (.105), Customer.io `#00191d` | The hue becomes the brand. Keep light grounds near white |

Light grounds are sensitive: above about C .015 at L .97 a ground stops reading as white and starts reading as cream or lilac. Dark grounds hide chroma, so tinted dark grounds run a median C .028 against .009 on tinted light ones.

What the corpus does on light pages: 58% of gold grounds are pure white, 22% are a near-white with no measurable hue, and 20% carry a tint. That tint is very small, around C .005, and warm on 11 of those 14 sites. Ink behaves differently: 32% of light gold sites use pure black, 29% a hueless near-black, and 39% a real tint, and cool ink outnumbers warm by more than three to one. So a cool ink on white is a common professional pairing and a warm ground is the rare one.

### Take the hue from somewhere

Where the neutrals are tinted and the site has a chromatic accent, the ink sits within 40 degrees of the accent hue on about 60% of sites. That is the usual move: tint toward the accent, so ink and accent read as one family. Stripe's ink is H 252 and its accent H 277. Mercury's neutrals are H 285 and its accent H 272.

Two other sources work. Take the hue from the shadows of your photography when images lead. Take it from the material of the business when neither applies. Tinting against the accent also works, as when a warm neutral sits under a cool accent, because the accent gains contrast. Pick a reason and hold it across the ladder.

### Steps

Measured from 34 analyst ladders on each side, by L between neighbouring surfaces.

| | Levels | Step in L | Total span | Hairline step in L | Hairline contrast |
|---|---|---|---|---|---|
| Light | 3 (2 to 4) | .024 (.015 to .035) | .05 | .063 | 1.2:1 |
| Dark | 3 (2 to 4) | .049 (.031 to .077) | .10 | .114 | 1.2:1 |

Dark steps are about twice as large in L, because the eye separates darks less readily. Hairlines land near 1.2:1 in both modes, and that is the easiest number to carry over.

Three levels is enough. Each one needs a job:

| Token | Job |
|---|---|
| `--bg` | The page |
| `--surface` | Panels, bands, tray behind product |
| `--surface-2` | Controls and chips on a panel, or hover on a row |
| `--deep` | The one dark chapter or footer |

There are two ways to arrange the light side. Either the page is white and panels step darker, as on Stripe and Apple, or the page steps off white and cards are the only pure white, as on Warp's and Zed's pricing pages. The second makes a card the brightest thing without a shadow, which is why it pairs well with no elevation at all. Pick one and do not mix them.

Evidence, as measured. Do not copy these.

| Site | Ground ladder | Neutral hue |
|---|---|---|
| Linear, dark | `#08090a`, `#0f1011`, `#161718` (L .139, .172, .204) | C .003 at H 247 |
| Polar, dark | `#090909`, `#111111`, `#181818`, `#212121` | None |
| Stripe, light | `#ffffff`, `#f8fafd`, `#e5edf5` (L 1, .984, .942) | C .005 to .014 at H 250 |
| Anthropic, light | `#faf9f5`, `#f5f4ed`, `#e8e6dc` | C .005 to .014 at H 95 |
| Customer.io, dark | `#00191d`, `#01262c`, `#0b363b` | Teal, far from neutral |

### Before and after

```css
/* Before: a kit grey with an unrelated accent. Three materials, nothing decided */
--bg:#f9fafb; --ink:#111827; --ink-2:#6b7280; --line:#e5e7eb; --accent:#7c3aed;

/* After: same structure, one material. H comes from this business */
--bg:oklch(.985 .004 var(--nh));
--ink:oklch(.21 .02 var(--nh));
--ink-2:oklch(.47 .018 var(--nh));
--line:color-mix(in oklab,var(--ink) 9%,transparent);
--accent:oklch(.54 .17 var(--ah));
```

## Ink levels

Ink is the page's second-largest colour after the ground, and hierarchy mostly lives in it. Set it by contrast, then read off L.

| Level | Job | Light ground | Dark ground |
|---|---|---|---|
| `--ink` | Headlines, primary text, ink-filled buttons | 16 to 20:1 | 17 to 20:1 |
| Reading (optional) | Long copy, when headings need to sit above it | 8 to 13:1 | 12 to 14:1 |
| `--ink-2` | Secondary text, captions, nav, table labels | 5.5 to 8:1 | 6 to 8:1 |
| `--ink-3` | Icons, ticks, disabled text, a second voice at display size. Not small text | 3 to 3.5:1 | 3.5 to 4.3:1 |

L needed for each contrast, neutral colour, computed:

| Ground | 3:1 | 4.5:1 | 7:1 | 10:1 | 12:1 | 15:1 | Hairline 1.2:1 |
|---|---|---|---|---|---|---|---|
| L 1.00 | .67 | .57 | .46 | .38 | .33 | .27 | .94 |
| L .97 | .65 | .55 | .44 | .36 | .31 | .24 | .91 |
| L .94 | .62 | .53 | .42 | .33 | .29 | .21 | .88 |
| L .25 | .53 | .63 | .74 | .85 | .91 | .98 | |
| L .20 | .50 | .60 | .71 | .81 | .87 | .94 | .27 |
| L .15 | .48 | .58 | .69 | .79 | .84 | .91 | .24 |
| L 0 | .47 | .56 | .67 | .77 | .82 | .89 | .22 |

Measured on light gold pages: ink is 17.9:1 (middle half 15.8 to 20.6), at L .19. The commonest secondary text is 7.2:1 (4.9 to 11.2), and the analysts' faintest visible text is 4.9:1 (3.4 to 5.6). The gap between ink and secondary is L .33 on light and .31 on dark. In contrast terms ink is about 2.8 times the secondary, in both modes. Dark gold pages sit at ink L .98 and secondary L .69.

Real ladders, as contrast on their own ground:

| Site | Levels |
|---|---|
| Vercel pricing | 17.9, 8.5, 5.7 |
| Stripe | 17.4, 6.3, 4.7, all tinted C .05 at H 252 to 258 |
| Anthropic | 17.5, 12.6, 6.3, 3.5 |
| Linear, dark | 18.7, 13.6, 6.1, 3.5 |
| Polar, dark | 19.9, 14.0, 5.4, 4.3 |

Dark ladders often have four levels with a gap in the middle: bright, reading, then a jump down to muted. Long reading copy on dark needs that second level, as `elements/type.md` also found.

Copy the shape of these ladders, and not their failures. 20% of gold pages have a text colour under 4.5:1, and 37% of the analysts' muted values are. Those are lapses on real sites, and they cost readers. Keep `--ink-2` at 5.5:1 or better, so that it still clears 4.5:1 on `--surface`.

**Solid or alpha.** Alpha ink (`rgb(0 0 0 / .6)`) adapts to any ground and is what makes a coloured section work without new tokens. Solid ink stays predictable over images and gradients. 17% of light gold sites and 30% of dark ones use alpha text, Notion and Framer among them. Use solid on a single ground. Use alpha when ink sits on several grounds. `SKILL.md` gives secondary text as about 60% ink, which is the faint end: near-black at 60% on white is 4.7:1, 65% is 5.6:1, 70% is 6.6:1 and 75% is 7.9:1. Alpha also loses contrast on a tinted surface, so recheck there.

**Pure black and white.** On light grounds near-black is the better starting point, as `elements/type.md` advises, and pure black is legitimate when chosen. Half of type-led sites and about a quarter of photo-led ones use it, where ink is a hard counterweight to one big image or typeface. No warm-neutral site does, because it would break the warmth. On dark grounds pure white is the common choice: about two thirds of dark sites use it for top text, and only long reading copy steps down.

## Accent placement

### Where it may go

Write this list for each page and hold to it. In priority order:

1. One action per view, if you chose a coloured primary.
2. Inline links and the active item in nav or tabs.
3. Focus rings, selected rows, the checked state.
4. One series in a chart, or the winner in a comparison. Exa colours only its own bars and keeps rivals warm grey, so colour alone says who won.
5. Small marks that recur: a status dot, a tick, the logo.
6. One large moment: a product plate, a footer, one chapter.

Keep it away from body text, from single words in headlines, from icon circles repeated down a page, from the top border of every card, and from eyebrows on every section. Each of those spreads the accent evenly, and even spread is what stops it meaning anything.

### Spend it in bursts

The accent appears in 38% of gold frames, and two frames hold over half of it. So most of the scroll has none, and that absence is what lets one blue chart or one orange panel land. Zed keeps its blue to links and one button for most of its pricing page, then floods the footer. Stripe's indigo sits on buttons while the ribbon does the rest. Plan where the burst falls, then stay disciplined elsewhere.

An accent placed at the same small dose on every screen reads as a default theme. Gold's accent is small, and it is also concentrated. The second part is what the timid page misses.

### Ink is a fine primary

41% of light gold pages use an ink-filled primary, and 44% of dark ones use a light-filled one. Vercel, Notion Calendar, Tana and Claude's pricing page all do. It works because the highest contrast on the page is already the ink, and it frees the accent for something with more meaning. Ramp keeps a black button beside a lime one, so lime marks the path it most wants. Use a coloured primary when colour is part of how people recognise the brand, when the page has little else competing, or when the register expects it, as in bold colour (64%) and gradient light (57%).

### The label rule

Use this rule to choose the text on a filled accent. Computed across every hue at C .16 to .17:

- Accent at **L .54 or below**: a white label passes 4.5:1 on any hue.
- Accent at **L .61 or above**: a near-black label passes 4.5:1 on any hue.
- Between those, it depends on the hue. Each hue has a band about .02 wide where neither label passes, sitting between L .55 (green, teal) and L .61 (red, pink). Move the accent out of it.

The median gold accent sits at L .62, right where white stops working, and 39% of chromatic CTAs measured on gold and silver sites fail 4.5:1 with their own label. Bright accents (lime, yellow, amber, mint, light orange) take a dark label. Ramp's lime and Linear's light buttons both do. Dark labels on bright accents look more considered as well as being more legible.

Accent text is a separate value. A filled button only needs its label to pass. An accent used as text on the page needs 4.5:1 against the ground, and the median gold accent is 3.8:1. Keep `--accent-text` at about L .50 on light, and raise it to about L .78 on dark.

### Variants

| Token | Recipe | Evidence |
|---|---|---|
| `--accent` | Natural L for the hue, C .14 to .22 | Gold median L .62, C .19 (middle half L .56 to .72, C .14 to .22) |
| `--accent-hover` | L down .04 to .06 on light, up on dark. Keep hue and C | 77% of CTAs that change on hover change fill, in about 200ms |
| `--accent-soft` | Same hue, L .92 to .97, C .02 to .04, or the accent at 8 to 12% alpha | Loom `#e9f2fe` (L .958, C .019, H 256), Stripe `#e2e4ff` (L .926, C .037, H 282), Framer `#0099ff` at 8 to 12% |
| `--accent-text` | Same hue, L .50, C reduced to fit | Clears 4.5:1 on light grounds |
| `--accent-ink` | White or near-black by the label rule | |

## One accent or several

One accent is the right starting point for a single product with a clear action. Stripe, Notion, Framework and consumer brands use several, and it works for them because each colour has a job. Colour count on its own means nothing: 18% of gold pages use three or more hue families, and more than a quarter of those are Stripe pages, so treat gold's multi-colour examples as partly one company's habit and look to consumer silver work as well.

### Five patterns that hold

**Hue owned by a thing.** Framework gives each laptop a tile colour: lavender, amber, sage. Mixpanel gives each feature one: pink for AI, blue for replay, green for experiments, carried by a gradient plate beside the copy. Lemon Squeezy puts a colour block behind each product shot. Hugging Face tags pricing families in one hue on a tint of itself. The colour is information, so it recurs in nav, chips, plates and icons.

**Pale tints with strong small marks.** Notion Calendar sets icon tiles in five pale tints at L .94 to .97, C .024 to .039, on a warm grey ground. Hues differ, but because lightness and chroma match, the tiles read as one set. This is the quietest way to carry many hues.

**Deep anchor, several sparks.** Wispr Flow uses a deep green sheet (L .38, C .068) with coral, mint, amber and lilac tiles only around testimonials. Talkspace anchors on teal (L .43, C .074) with mint, yellow and pink tiles at L .85 to .93 behind photographs. Khan Academy anchors on indigo (L .30, C .116).

**All hues in one object.** Stripe's ribbon runs periwinkle through orange to magenta, and everything outside it is white plus one indigo. The page has five hue families and still reads as restrained, because they all live in one shape.

**Rooms.** Headspace gives yellow, blue and orange each a full section with its mascot and product inside. Counter Culture does it with packaging. Each room holds one colour and real content, and the colours rarely touch.

### What makes several colours hold together

**Align L and C across hues that sit side by side.** This is the rule that matters most, and the corpus supports it. Measured from frames:

| Site | Set | L | C |
|---|---|---|---|
| Lemon Squeezy | blue, green, violet, orange | .71 to .74 | .17 to .21 |
| Mixpanel | green, blue | .80 | .10 |
| Khan Academy | green, orange | .72 to .73 | .11 to .17 |
| Notion Calendar | five tints | .94 to .97 | .02 to .04 |

Equal L gives equal weight, so no colour looks like the mistake, and the set reads as a family. It is also the arithmetic route: fix L and C, and change only H. When the gamut will not reach, lower every colour's C to the weakest hue's maximum rather than letting one go muddy. Headspace breaks this (yellow L .87, orange L .71, blue L .54) and gets away with it because they never sit in one row.

**Hold one thing constant.** Framework's CTA stays orange on lavender, amber and sage tiles. Stripe's buttons stay indigo. Headspace's nav and FAQ stay neutral. Ink and the primary action must not change with the section, or the page loses its system.

**Keep a neutral majority.** Even Mixpanel and Lemon Squeezy run on white between the colour plates. The plate is the event.

**Keep bright colours small and let dark ones be big.** On Astral the aubergine covers 31% of the page and the lime 0.9%. On Jasper, navy 32% and coral 0.9%.

## Large colour areas

Large colour is where most generated pages fail, so this is the most useful finding in the chapter. Top sites and the Opus baseline behave oppositely as a block gets bigger. Here a block is one flat colour family, measured as a share of the whole page.

| Block size | Gold and silver: median L, C, share vivid | Opus baseline: median L, C, share vivid |
|---|---|---|
| 1 to 3% | L .52, C .09, 20% | L .62, C .14, 42% |
| 3 to 10% | L .49, C .10, 26% | L .57, C .15, 45% |
| 10 to 30% | L .40, C .10, 20% | L .58, C .17, 61% |
| Over 30% | L .39, C .10, 17% | too few |

Vivid means C at least .14 at L .45 to .92. So as a block grows, top sites hold chroma near .10 and go darker: 58% of 10 to 30% blocks are deep, under L .45. Opus raises chroma as area grows. Only 21% of gold pages have any single colour block over 3% of the page at all, against 88% of Opus pages, whose largest block is a median 20%.

The reason is physical. A colour's impact grows with area, so a C .18 swatch that looks right at button size is overwhelming at 1400 by 800. Designers compensate by going deeper and calmer as area grows. Deep colour also behaves as a ground: it holds text and product the way black does, and it stays out of the content's way.

Vivid large fields exist, but they are the exception: Loom's blue sheets, Lemon Squeezy's violet hero, Headspace's yellow, Zed's blue footer. They share most of these:

- **Real content inside.** Lemon Squeezy's violet holds a dashboard tablet. Counter Culture's yellow holds packaging. Loom's blue holds real article cards. A field containing only a headline is the Opus failure.
- **Rounded sheet or inset, or a footer.** Loom insets its blue as a large rounded sheet, so white stays around it. Exa and Zed spend theirs on the ending, where nothing follows.
- **Once or twice.** 42% of gold pages have a dark chapter and the median page has two grounds. See the budget in `elements/layout.md`: one interruption, 25 to 50% down the page, then finish on the darkest ground.
- **Ink chosen for the field.** On a bright field use dark ink. White on yellow, lime or mid-orange fails, and even where the ratio passes, white on mid-tones looks washed.

To derive `--deep`, keep the ink's hue and take it to L .20 to .30, C .05 to .10. Stripe's band `#0d1738` is L .217, C .066, H 268, close to its ink hue of H 252. Customer.io and Stripe Sessions keep one dark family across ink, button and footer, so light and dark sections read as one material. `elements/layout.md` mixes it from accent and ink, which also works.

### Before and after

| | Before (the flat field) | After |
|---|---|---|
| Hero | Whole first screen in C .18 yellow, 90px black headline, nothing else | Neutral ground, real product at full density. Colour in the product plate, or one deep sheet behind it |
| Sections | Yellow, then cream, then black, then red, then blue | One neutral ground throughout, one deep chapter 40% down the page |
| Colour area | 36% of the page | 3 to 12% for most briefs, more if the genre calls for it |
| Second colour | Vermilion and ultramarine to fill the triad | The accent, in three named places |
| Signature | Colour itself | Something that carries it, such as Loops' orange stripes down the page edge |

### Before and after: the timid page

| | Before | After |
|---|---|---|
| Ground | One off-white, top to bottom | Same ground, plus one deep chapter or a coloured product plate |
| Accent | A small dose spread evenly: icon, button, tag, on every screen | Absent from most frames, then one strong burst |
| Neutrals | Kit grey unrelated to the accent | Hue-matched ladder, so ink, lines and accent belong together |
| Hue | Violet, because it is software | A hue with a reason from this business |
| Depth | Borders only | One tone step and one tinted shadow doing real work |

## Deriving a palette

### From a brief

The goal is a palette with a reason that could not belong to a competitor.

1. **List five physical things in this business.** Not its category. A bakery has flour sacks, oven steel, brown paper, a specific shopfront. A logistics firm has hi-vis, pallets, depot signage.
2. **Find the odd one.** The obvious colour (brown for coffee, blue for finance, green for eco, purple for AI, teal for health) is what everyone reaches for. Look for the second or third object, such as the delivery van, the enamel sign or the cup.
3. **Assign roles.** A deep or quiet colour for ground and ink. A small, sharper colour for the accent. Leave the most obvious colour to the photographs, which will carry it anyway.
4. **Check against the collapse.** If you landed on cream with clay, cream with ultramarine, or violet on near-white, go back to step 2. Those are the model's defaults, and the linter flags some of them.
5. **Check it against the neighbour.** Could a direct competitor use this unchanged? If so, push the hue or the strategy.

### From a photograph

Photography already holds a palette, and using it is how page and picture come to share light.

1. Quantize the hero image to about six colours (see [Check your numbers](#check-your-numbers)) and convert to OKLCH.
2. Take the **darkest** cluster for ink and `--deep`. Shadows hold the hue of the light, so ink from the shadows sits naturally beside the photo.
3. Take the **most saturated small** colour for the accent, or its neighbour. Raise C only as far as the accent needs.
4. Take the **mid colours** for grounds, with chroma pulled down to about C .04 to .08 if they will cover a large area. A photo's mid-tones are often too strong as flat fields, or too grey.
5. Keep the UI on white or near-white unless each section is built around its picture.

Hims does this per section. Each ground takes its colour from the image in that section: `#bf886e` (L .68, C .077) behind warm portraits, `#335575` (L .44, C .066) behind blue ones. The photo seems to grow out of the page. Babylonstoren goes the other way, with a white page and all chroma left to its garden photographs: nav strip and accent are a greyed sage `#6f7f6a`, ink a brown `#544426`, both from the pictures. Function Health's cream, tan and terracotta echo the skin tones and earth of its hero portrait. The analyst note on Felix Gray states the risk: chartreuse with deep teal looks cheap without matching colour grading. If you cannot control the images, keep the UI neutral.

### From a logo or brand colour

Extend what exists. Convert the brand colour to OKLCH and keep it for the logo and the main moment. Then split the roles: `--accent` for fills, `--accent-text` at a darker L for text, `--accent-soft` for tints, all at the brand's hue. A brand yellow can never be text on white, so give it a dark label and use ink for links.

### A worked example

Brief: a seaweed farm on the Maine coast that sells kelp to restaurants. These numbers belong to this business and are not defaults.

- **Things:** kelp blades, grey fog, rope, pink marker buoys, an aluminium skiff.
- **Strategy:** deep anchor, bright spark. Olive kelp is the obvious colour, so it stays in the photographs.
- **Neutrals:** fog and sea, H 235 at trace strength. Ground `oklch(.985 .004 235)`, surface `oklch(.96 .007 235)`.
- **Ink:** `oklch(.23 .03 235)` gives 16.2:1. `--ink-2` at L .46 gives 6.8:1 on the ground and 6.3:1 on the surface. `--ink-3` at L .62 gives 3.5:1, for marks only.
- **Deep:** the same hue at `oklch(.27 .05 235)`, used once for the harvest calendar chapter. Reversed ink at L .97 gives 13.8:1, muted at L .78 gives 7.5:1.
- **Accent:** buoy pink, H 5. Sampled at L .66 it gives white text only 3.4:1, though a dark label would pass. L .62 passes only with a dark label (4.6:1) and is weak as link text (3.9:1). L .58 gives white 4.7:1 and works as link text at 4.5:1, so it goes there.
- **On deep:** the same pink at L .58 is only 3.2:1, so it rises to L .72 and gives 5.6:1.
- **Placement:** order button, links, the current month in the harvest calendar, and the buoys that mark each farm site on a map.

Two other sound answers for the same brief: a photo-derived page on white with a muted kelp accent and all chroma in the pictures, or a tinted system where the fog hue runs through a deep sea-coloured page. Pick by the photography you can get.

## Gradients that look made

Measured on hero frames of a hand-picked set, so read these as a guide, not a population:

| Kind | C median, 90th pct | L | Examples |
|---|---|---|---|
| Quiet wash | .02 to .03, up to .05 | .85 to .95 | Attio, Tana, AuthKit |
| Soft bloom | .05 to .06, up to .13 | .90 | Mixpanel, Lightspeed, mymind |
| Ribbon | .13, up to .19 | .52 to .88 | Stripe |

The preset gradient sits outside this table: mid-L, C .15 and above, across a whole ground, with no object. Our baseline runs mostly avoid that (median peak chroma .014 for GPT-6, .10 for Opus), so treat it as a trap for the moment you are told to add colour. A made gradient is either very pale or very structured.

1. **Interpolate in OKLCH or OKLAB.** sRGB mixes through grey between distant hues, which is the muddy middle. Write `linear-gradient(in oklab, ...)`. Use `in oklch` to keep chroma through a hue turn.
2. **Decide what L does.** A gradient acting as light moves value as well as hue and falls off toward the ground. A plate behind product holds one value, as Tana's does at L .84 to .87, so nothing competes with the window.
3. **Keep the hues close, or stage them.** Two hues within about 90 degrees, or three that pass through a neighbour. Tana goes slate-lilac, pink, peach.
4. **Give it a job.** Behind product, for value contrast: Tana's near-black windows on a pastel panel do all the work. As a section band: Render's lavender strip is about 325px tall and is never the page background.
5. **Give it an ending.** Cut it hard, as Stripe's ribbon stops dead at the logo row and Render's band has razor edges, or dissolve it fully into page colour. Of 66 analyst rows, 39 end hard and 20 dissolve. A soft blob floating in empty space does neither, which is why it reads as decoration.
6. **Add structure.** Grain on Render, etched hairlines on Stripe, barcode lines on Attio, scanlines on AuthKit. A plain CSS gradient has no texture, and it bands. Structure also signals that someone made it.
7. **Spend it once or twice.** Stripe Pricing's ribbon appears once and is gone below the hero. elyx.design saves an aurora for the final screen.
8. **Take hues from the palette.** A gradient introduces no new colour family. If your accent is green, a violet glow is a second brand.

Keep gradients off text and buttons. Gradient text is a listed giveaway, and a gradient button competes with whatever earned the gradient.

```css
/* Before: mid-L, high chroma, sRGB, whole page. Reads as a preset */
body{background:linear-gradient(135deg,#667eea,#764ba2)}

/* After: a pale, structured band with a hard edge, hues from this palette */
.band{height:320px;
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
    linear-gradient(100deg in oklab,
      oklch(.985 .004 var(--nh)),
      oklch(.92 .03 var(--ah)) 55%,
      oklch(.78 .09 var(--ah)))}
```

## Tinted shadows

`elements/surface.md` covers how to build a shadow stack. This section covers its colour.

A shadow on a coloured or tinted surface picks up the surrounding light, so pure black at low alpha reads as a grey smudge, especially on a tinted ground. About a third of sites with shadows have a tinted shadow colour somewhere, counting rings and glows, and `surface.md` counts 18% with a tinted soft shadow. Gradient-light pages do it most, at 67%.

Take the shadow's hue from the ink or the ground, leaning toward the accent at most, at L .15 to .35, C .03 to .10. Measured examples:

| Site | Shadow colour | L, C, H | Alpha |
|---|---|---|---|
| Stripe | `rgb(50 50 93)` | .34, .07, 282 | .25, with a black layer under it |
| Cal.com | `rgb(15 35 75)` | .27, .08, 262 | .05 to .07 |
| AuthKit | `rgb(17 7 53)` | .18, .08, 285 | .04 to .05 |
| Increase | `rgb(12 25 39)` | .21, .03, 251 | .05 to .09 |
| Brilliant | `rgb(10 31 20)` | .22, .03, 159 | .06 |
| Buildkite | `rgb(29 15 38)` | .20, .05, 311 | .22 |

Most sit at alpha .04 to .09. The higher values belong to large shadows pulled in by a negative spread, as on Stripe, where the edge falls far from the object and little of it shows.

A glow in the accent's own hue under an accent button is a real device, used on AuthKit's hero button, but it is loud. Use it on one element, at alpha .3 or under, and only with a light ground. On dark, shadows barely register, so use a lighter surface, a hairline, or a 1px inner top highlight in white at about 5%.

## Semantic colours in apps

In an app, colour is mostly information. `elements/product.md` puts it plainly: the UI is neutral, and status is 80% boring. Of ten rows, eight are fine, one is amber and one is selected.

**Four roles, separate from the accent.** Success, warning, danger and info. If your accent is red, green or amber, it collides with a status role, so shift the accent or move that role's hue, or a primary button will read as a warning.

**Build each role as a set.** Geist's system is the clearest public model. It has ten-step scales where steps 1 to 3 are backgrounds, 4 to 6 borders, 7 to 8 strong fills, 9 to 10 text, and its badges come as a solid and a subtle pair for each hue. In the subtle form, text is a dark step of the hue on a pale step of the same hue. That pairing reads better than either grey text on a tint or tinted text on white.

Computed recipe. H is the role's hue (around 150 success, 75 warning, 25 danger, 250 info, and adjust to sit away from your accent):

| Token | Light | Dark | Use |
|---|---|---|---|
| Soft | `oklch(.955 .03 H)` | `oklch(.26 .045 H)` | Row, banner, chip fill |
| Solid | `oklch(.54 .15 H)` | `oklch(.66 .15 H)` | Button, dot, badge |
| Text | `oklch(.42 .11 H)` | `oklch(.82 .1 H)` | Message on soft or ground |

Checked at those four hues: light text on soft is 7.1 to 7.8:1, white on solid 4.7 to 5.4:1, dark text on soft 8.7 to 9.1:1. Warning is the one to watch. An amber at L .54 turns brown, and that is correct for text. Do not lighten it to look more yellow, or it fails.

**Never by colour alone.** About 8% of men have a red-green deficiency, so pair colour with an icon, a word or a shape. Plausible's deltas pair green and red with arrows. Linear's status marks differ in shape as well as hue. Geist's warning row uses an icon, a tint and tinted text together.

**Mute everything else.** A status colour only works on a calm surface. Keep decorative colour out of table rows. Restrained data screens use one tint per data type at most. Plausible tints the bars in its source list pale blue and its pages list pale orange, and that is a category cue.

**Delta colour depends on the metric.** Green for up is wrong when the number is cost or error rate. Colour by good or bad, and use neutral when neither applies.

**Reserve danger.** Danger solid belongs on the confirming action, not on every delete icon in a list. Use neutral at rest, and let hover or the confirm step bring in the colour.

## Data viz colours

For chart mechanics read the `dataviz` skill if it is available, and `elements/product.md` for charts as page objects. This section covers colour.

Top sites use very little. I sorted the 45 chart rows scoring 4 or 5 by hand. 24 are mono or one hue, 10 are grey plus one highlight, 4 use only status colours, and only 7 use two or more data hues. So one chart hue is the normal case.

| Situation | Colour | Evidence |
|---|---|---|
| One series | One hue. Line at full strength, area fill at about 10% | Amplitude, Plausible |
| One subject against rivals | Accent for the subject, grey for the rest | Exa, Hugging Face |
| Current against previous | Accent solid, previous grey and dashed | Stripe Payments |
| No colour budget | Greyscale, with line style carrying the difference | Polar, Vercel pricing, Framer |
| Ordered values (sequential) | One hue, L stepping evenly from pale to dark | |
| Above or below a midpoint (diverging) | Two hues at equal L at the ends, neutral at the middle | |
| Three to six categories | Equal L, equal C, separated hue | Linear's changelog, Cognition's vendor squares |

**Categorical sets.** Fix L and C and walk H. `oklch(.62 .14 H)` on light and `oklch(.73 .13 H)` on dark clear 3:1 against their ground at every hue, which is the WCAG figure for graphical objects (light 3.4 to 3.9:1, dark 7.5 to 8.4:1). Space hues at least 45 degrees apart. Teal at H 195 tops out near C .11, so lower the set or accept the difference. Over six categories, stop colouring and use direct labels or small multiples, because nobody can hold seven colours and a legend.

**Equal L hides differences in greyscale and for colour-blind readers.** For a set that must survive that, step L between neighbours by at least .10, or add a dash pattern. Avoid red against green as the only distinction: move green toward teal and red toward orange, or swap in blue and orange.

**Keep the frame quiet.** Gridlines at ink 6 to 8%, labels in `--ink-2`. Label lines directly where you can. Colour is scarce, so do not spend it on axes.

**Raise L on dark.** A chart hue at L .55 sinks on a dark card. Move to L .70 to .80, and lower C slightly. Linear's dark beeswarm uses a bright teal with dim red lines at about 30%.

**Avoid rainbow scales.** Rainbow ramps and red-to-green heatmaps look like dashboards and read poorly. Use a single-hue ramp unless the midpoint means something.

## Dark mode as a separate design

Inverting a palette gives a bad dark page, because light and dark work differently. On dark, shadows vanish, so depth has to come from lightness. Bright text blooms, so it needs less contrast at length. Saturated colour glows and vibrates, so it needs more lightness and sometimes less chroma. And a surface that sits nearer the viewer is lighter, where on light mode a nearer surface is usually white.

The corpus is captured in one theme per site, so this section rests on dark sites, dark chapters of light sites, and Geist, not on paired themes.

**Decide if you want dark at all.** About a fifth of gold pages are dark first. Analysts warn of Linear that copying the darkness without believable product content collapses into an empty dark template with grey text. Dark needs density and something bright inside it.

**Ground.** Gold dark grounds are a median L .136, and 40% are pure black. Pure black suits photographs and renders, as on Apple and Framer. A near-black at L .13 to .20 with trace chroma suits products, because raised surfaces have room to step up. Linear's is L .139, C .003, H 246. Tinted dark grounds carry far more chroma than light ones, median C .028, and cool on 27 of 34 sites. A hued dark ground is one of the strongest brand moves available: Customer.io's teal-black, Affirm's violet-black (`#12121e`, `#1b1c32`), Stripe Sessions' plum.

**Elevation.** Lighter means nearer. Step L by .03 to .05 per level (measured median .049, about 7 levels), three levels. Off pure black the first step is about 17 levels, because the scale is steep there. Overlay white at 1 to 5% for controls, as Linear does, because an alpha overlay keeps the ground's hue. Do not rely on shadows. Vite goes the other way, darker into windows, which works when the object is a recessed well.

**Ink.** Set `--ink` anywhere from L .93 to pure white. 68% of gold and silver dark sites use pure white for headings, which is fine. Only long reading copy needs to step down, to L .84 to .88, about 12 to 14:1, because pure white blooms on OLED at length.

**Accent: match contrast, keep hue.** The best dark-mode rule in the data comes from Apple. Link blue on light is `#0066cc` (L .52, C .18, H 256), 5.6:1 on white. On dark it is `#2997ff` (L .67, C .18, H 252), which gives the same 5.6:1 on Apple's near-black `#1d1d1f` and 7:1 on pure black. Hue and chroma stay, and L moves to hold contrast. Stripe does the same with chroma reduced: indigo `#533afd` (L .52, C .27) becomes link `#7f8cff` (L .68, C .17) on its navy band, 5.9:1. Its muted ink goes from L .49 to L .77 and keeps its tint.

**Primary button.** Ink-filled becomes light-filled, and 44% of dark gold sites do this. Use a slight off-white: Linear's button is `#e5e5e6`, Raycast's `#e6e6e6`, which sit below pure white text and let the headline stay brightest.

**Hairlines.** Keep the 1.2:1 target. That means a larger L step, about .11, so use ink at 9 to 12%. Alpha lines suit dark well, since they adapt to every surface: 61% of dark gold sites use them, and Linear's is white at 8%.

**Soft and semantic fills.** Pale tints become deep tints: `oklch(.27 .05 H)` in place of `oklch(.95 .025 H)`. Text inside flips to a light step of the same hue.

**Images.** Reduce pure-white image areas, swap dark logos, and consider a slight `filter:brightness(.92)`. Charts need raised L.

**Gradients.** Clip colour inside a card or behind an object, as Affirm clips radial blooms inside cards and Framer draws its blue only around the product. A page-wide glow is the generic dark page.

```css
@media (prefers-color-scheme:dark){:root{
  --bg:oklch(.16 .006 var(--nh));
  --surface:oklch(.2 .008 var(--nh));
  --surface-2:oklch(.245 .01 var(--nh));
  --ink:oklch(.96 .004 var(--nh));
  --ink-2:oklch(.71 .012 var(--nh));    /* 7:1 */
  --ink-3:oklch(.54 .012 var(--nh));    /* 3.8:1 */
  --line:color-mix(in oklab,var(--ink) 11%,transparent);
  --accent:oklch(.72 .14 var(--ah));    /* same hue, L raised, C lowered */
  --accent-hover:oklch(.77 .14 var(--ah));
  --accent-ink:oklch(.2 .03 var(--ah)); /* dark label on a bright accent */
  --accent-soft:oklch(.27 .05 var(--ah));
  --accent-text:oklch(.78 .12 var(--ah));
}}
```

Before and after, on one card:

| | Inverted | Designed |
|---|---|---|
| Page and card | Page `#f5f5f5` becomes `#0a0a0a` and card `#fff` becomes `#000`, so the card sinks | Page L .16, card L .20, so the card is nearer |
| Ink | Pure white on everything | Heading L .96 or pure white, reading L .86, muted L .71 |
| Border | Same grey as light mode, now glaring | White at 8 to 11% |
| Shadow | Same stack, invisible | Removed, with a 1px inner top highlight if needed |
| Accent | Same value, now dim or vibrating | Same hue, L up, C down |

A dark band inside a light page uses the same logic at smaller scale. Rebind the tokens on the section so that every component inside inverts on its own, as `elements/layout.md` does with `.flip`.

## Contrast numbers

| Element | Minimum | Aim for |
|---|---|---|
| Body text | 4.5:1 | 7:1 or better for long copy |
| Small labels, 11 to 13px | 4.5:1 | 5.5:1, as `elements/type.md` found |
| Large text, 24px and up, or 19px bold | 3:1 | Second voices in headlines can sit near 3:1 on light |
| Icons that carry meaning, chart marks | 3:1 | |
| Input edges | 3:1 | Use `--ink-3`, or a filled well. A 1.2:1 hairline alone does not mark a field |
| Focus ring | 3:1 against what it sits on | 2px at `--accent` with 2px offset |
| Placeholder | 4.5:1 | It is text |
| Disabled | None | Keep it readable, near 3:1 |
| Text on a photo | 4.5:1 against the actual pixels | Scrim, or a position the image gives you |

Check each text token on every ground it can land on, not only `--bg`. A grey at L .54 gives 4.9:1 on a ground at L .985 and 4.4:1 on a surface at L .955, one step away. A ladder that looks sound fails here most often.

Hairlines are decoration and need no contrast target, but a boundary that is the only sign of a control does. Links inside body text need more than colour: underline them, since colour alone fails readers who cannot see the hue.

The WCAG ratio flatters light grey text on dark, so treat dark numbers as a floor and go a step above them. Support `prefers-contrast` when the build allows it, and do not remove focus outlines.

A note on the corpus: over a third of the analysts' gold muted greys and 39% of coloured CTA labels miss 4.5:1. Real sites ship these lapses, and that does not make them a target.

## Carrying brand without filling the page

Most of the brand in a top page sits in places with little area. Pick one or two of these.

- **A margin device.** Loops runs orange-to-red stripes down the page edge, and they open into a rust footer. They use almost no area and pass through every frame.
- **Tinted ink.** Stripe's slate text and Customer.io's teal-black mean a reader sees brand in every sentence without seeing colour.
- **A hued dark chapter.** Keep the band in the brand's hue instead of neutral grey: Stripe's navy, Customer.io's teal, Increase's ink navy.
- **Colour as proof.** Exa's blue bars, and Bun's single pink sliver. The brand colour is the winning data point.
- **Colour inside the frame only.** Tana and Render keep the colour in the plate behind the window, and Framer draws its blue only around the product.
- **A flooded ending.** Zed's blue and Exa's blue footers arrive after a long neutral page, and the page's only large colour lands there.
- **One recurring shape.** Astral's stepped corners with teal hatching. Jasper's squares and offsets.
- **Tag family.** Hugging Face's hue-on-tint pills mark product families across pages.
- **Graded imagery.** Mixpanel's purple-toned portrait, Customer.io's portraits on orange and blue cut-outs. One colour treatment across all pictures makes them a brand asset.
- **Small surfaces people touch.** `::selection` in `--accent-soft`, `caret-color`, focus rings, the progress bar, favicon, skeleton shimmer. Cheap, and they make a page feel owned.

Each of these gives identity for little area, which is why top pages can stay at 3% and still look like themselves.

## Common mistakes

| Mistake | Why it fails | Do this |
|---|---|---|
| Saturated flat hero with only a headline | Colour stands in for content | Real content first, colour behind or around it |
| New ground each section | Reads as a sample book. Opus median 4, gold 2 | One ground, one interruption |
| Vivid colour at large scale | Impact grows with area | Hold C near .10 and go deep as area grows |
| Grey page with evenly sprinkled accent | Nothing decided | Concentrate the accent, and give the page one spend |
| Kit greys beside a warm or coloured accent | Two unrelated materials | One hue through the ladder |
| Cream, sage, clay. Or cream, ultramarine, yellow, vermilion | The model default | Return to the five objects |
| Violet because it is AI or SaaS | Only 5% of top sites do it | Find a reason from the business |
| Tinted light ground above C .015 | It reads as a yellowing page or a lilac wash | Stay under that, unless the tint is the idea, as on Wispr Flow |
| White label on a bright accent | Median gold accent L .62 fails with white | Dark label above L .61 |
| Accent as text at button value | 3.8:1 at the median | `--accent-text`, darker |
| Three hues at different L in one row | One looks wrong, none reads as a family | Same L and C, change H |
| Hover on an accent by opacity | Lets the ground through, and it goes chalky | Step L by .04 to .06 |
| Grey shadow on a tinted ground | Reads as a smudge | Hue from the ink, low alpha |
| sRGB gradient between far hues | Grey middle | `in oklab`, with a stop through a neighbouring hue |
| Page-wide glow with no edge | Decoration with no object | Clip it behind a product, add structure |
| Status colours in every row | Status stops meaning anything | 80% neutral |
| Dark mode by inversion | Depth reverses, accent dims | Redesign ladder, ink and accent |
| Muted text checked only on `--bg` | Fails on the surface | Check every ground |
| Colour-coded with no second signal | Unusable for 8% of men | Add icon, word or shape |

## Check your numbers

Do not estimate contrast or convert colours by eye. Paste this into a scratch file. `fit` lowers chroma until the colour fits sRGB, because a browser would otherwise clip it and shift the hue.

```python
import math
def _lin(L,C,H):
    a,b=C*math.cos(math.radians(H)),C*math.sin(math.radians(H))
    l,m,s=[(L+p*a+q*b)**3 for p,q in((.3963377774,.2158037573),(-.1055613458,-.0638541728),(-.0894841775,-1.2914855480))]
    return 4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.7076147010*s
def fit(L,C,H):
    while C>0 and (min(_lin(L,C,H))<-.0005 or max(_lin(L,C,H))>1.0005): C-=.002
    return max(C,0)
def rgb(L,C,H):
    g=lambda x:12.92*x if x<=.0031308 else 1.055*x**(1/2.4)-.055
    return [round(255*g(min(1,max(0,x)))) for x in _lin(L,fit(L,C,H),H)]
def hexa(L,C,H): return '#%02x%02x%02x'%tuple(rgb(L,C,H))
def lum(c): return sum(w*(v/255/12.92 if v/255<=.04045 else ((v/255+.055)/1.055)**2.4) for w,v in zip((.2126,.7152,.0722),c))
def ratio(a,b):
    x,y=sorted((lum(rgb(*a)),lum(rgb(*b))),reverse=True); return round((x+.05)/(y+.05),2)
def oklch(h):                     # '#rrggbb' to (L,C,H), for palette seeds and photo samples
    r,g,b=[(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4) for v in (int(h[i:i+2],16)/255 for i in (1,3,5))]
    l,m,s=[x**(1/3) for x in (.4122214708*r+.5363325363*g+.0514459929*b,.2119034982*r+.6806995451*g+.1073969566*b,.0883024619*r+.2817188376*g+.6299787005*b)]
    L,A,B=.2104542553*l+.793617785*m-.0040720468*s,1.9779984951*l-2.428592205*m+.4505937099*s,.0259040371*l+.7827717662*m-.808675766*s
    return round(L,3),round(math.hypot(A,B),3),round(math.degrees(math.atan2(B,A))%360)

bg=(.985,.004,235); ink2=(.46,.025,235); accent=(.58,.17,5)
print(hexa(*accent), ratio(ink2,bg), ratio((1,0,0),accent), oklch('#533afd'))
```

To sample a photograph, if Pillow is installed:

```python
from PIL import Image
im=Image.open('hero.jpg').convert('RGB').resize((64,64)).quantize(6).convert('RGB')
for n,c in sorted(im.getcolors(4096),reverse=True): print(n,'#%02x%02x%02x'%c)
```

If you cannot run code, use the L tables above, and leave a margin of .03 in L on any value near a threshold.

## Before you call it done

Look at the shot sheet as well as the numbers.

- **Strategy.** Can you name it in three words? Does every section obey it?
- **Squint.** At thumbnail size, does colour land where you planned, or everywhere, or nowhere?
- **Area.** Is the page near its genre's range? A coffee shop at 2% is timid, and a developer tool at 30% needs a very good reason.
- **Large blocks.** Is anything over 10% of the page vivid? If so, does it hold real content, and could it go deeper?
- **Grounds.** How many? If more than three, which one could go?
- **Spend.** Name the page's one colour moment. If you cannot, there is none. If you can name five, there is none either.
- **Accent frames.** Do most frames lack the accent? They should, on product registers.
- **Ladder.** Do ink, lines and shadows share a hue with the ground? Find two greys that should match and check that they do.
- **Hue.** Is this the model's collapse? Compare it against cream and clay, cream and ultramarine, violet on near-white. Then swap in a competitor's name: does the palette still fit?
- **Reason.** Can you say why this hue, in terms of this business?
- **Numbers.** Every text token on every ground at 4.5:1. Labels on fills. Focus rings at 3:1.
- **Sets.** Do side-by-side hues share L and C?
- **States.** Hover, active, selected, focus, disabled and error all drawn from the tokens?
- **Dark.** If there is a dark theme or band, is it designed, or inverted?

`lint.mjs` flags purple gradient palettes, cream with terracotta, and near-black with one neon. Each hit is a question: did you choose this, or did it just happen?
