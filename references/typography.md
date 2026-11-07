# Typography

Type is most of what a website is. A visitor will forgive a plain layout set beautifully and will not forgive a clever layout set badly, because bad type reads as a business that does not care. This chapter tells you how to choose type, how to set it, and how to load it. It holds methods and numbers, not a list of fonts: the sampler deals the fonts from `data/fonts.jsonl` and `data/pairings.jsonl`, so any name you remember from habit is the wrong starting point. Every recipe below was run in Chrome 156, and every number marked as measured came from the 521 families in the library.

## Contents

- [Setting type in the professional default](#setting-type-in-the-professional-default)
- [1 Deal the fonts, do not remember them](#1-deal-the-fonts-do-not-remember-them)
- [2 Choose from the brief's world](#2-choose-from-the-briefs-world)
- [3 What makes a pairing work](#3-what-makes-a-pairing-work)
- [4 Scale systems with extreme ratios](#4-scale-systems-with-extreme-ratios)
- [5 Large-display craft](#5-large-display-craft): [tracking](#tracking-by-size), [leading](#leading-by-size), [optical size](#optical-size), [kerning pairs](#kerning-pairs), [hanging punctuation](#optical-edges-and-hanging-punctuation), [wrapping](#wrapping), [OpenType features](#opentype-features), [numerals](#numerals), [fluid clamp type](#fluid-clamp-type), [trimming the line box](#trimming-the-line-box)
- [6 Body-copy craft](#6-body-copy-craft)
- [7 Type as image](#7-type-as-image)
- [8 Variable-font animation](#8-variable-font-animation)
- [9 Loading without layout shift](#9-loading-without-layout-shift)
- [10 What makes type look amateur](#10-what-makes-type-look-amateur)
- [11 Before you call it done](#11-before-you-call-it-done)

## Setting type in the professional default

We measured 104 top-tier sites, Linear, Stripe, Framer and Vercel among them. Start any product, SaaS or brand page here, and leave only for a reason the brief gives you.

| Measure | Median | Middle half |
|---|---|---|
| Largest text | 64px | 48 to 80px |
| Headline weight | 500 | 400 to 600 |
| Headline tracking | -0.02em | -0.03em to 0 |

A good neutral grotesque is not a mistake. Inter is the most common primary face, on about 15 percent of these sites, then Söhne, Geist, ABC Diatype, GT America, Circular, Aeonik, Matter and custom grotesques. Linear sets Inter at 510 with tight tracking. The mistake is bad setting: oversized, heavy, loose. Section 1 still applies when a brief needs a voice of its own, and `overused` faces are fine here because a neutral is not being asked for personality.

**Take a whole row from `data/type-systems.jsonl`,** or set it yourself with the steps below. Rows are filed under page registers (`dark-precision`, `light-precision`, `gradient-light`, `warm-neutral`, `photo-led`, `mono-technical`, `soft-pastel`, `bold-colour`, `type-led`, `illustrated`, `render-3d`), which describe the page and are not the font registers in section 1. Each was rendered in Chrome and proved to paint every role from its web font at a real weight. Its `css` is trimmed to the weights it uses, `numerals` says what the served file really does, and `stands_in_for` gives the commercial look with its measured glyph overlap, where 1.00 is the same font, close sans sit near 0.80 and the best serifs only reach about 0.70.

1. Choose a `pro_default` face. These are the families a top product team would ship as its primary UI and marketing face. A serif headline is a system choice, not a primary face, so it always comes with a `pro_default` sans for the interface.
2. Set the headline at 64px, weight 500, tracking -0.02em, leading 1.06, and stay inside 48 to 80px. Go over 88px only at a light weight with room around it, as Resend and Stripe Sessions do, or on `bold-colour` and `type-led` pages. Go above weight 600 only under 96px.
3. Drop to 400 or 450 on near-black or at 72px and up, and hold 500 on white or below 56px, because light type blooms on dark and size does the work of weight. Take weights by eye, not by number: Stripe's Söhne at 300 overlaps Geist best at 450.
4. Read the word spaces before the letters, since tracking closes them first. Natural word spaces run from 0.17em in Plus Jakarta Sans to 0.31em in Host Grotesk, so one tracking is safe on one face and merges words on the next. Stop Switzer, Manrope and Archivo near -0.03em, and half that at weight 800. DM Sans and Bricolage Grotesque also tighten through their optical axis, so stop them at -0.018em.
5. Hold the page to one display size and the steps below, with nothing between the section headings and the display.

| Role | Size | Set it |
|---|---|---|
| UI text: nav, buttons | 14 to 16px | Nav links at 400, button labels at 400 to 500 |
| Labels | 12 to 13px | Weight 400 to 500 |
| Body | 15 to 18px | Weight 400, leading 1.4 to 1.6 |
| Section headings | 28 to 50px | Display family, weight 400 to 500, tracking -0.01em |
| Display | One size, 48 to 80px | Once per page |

Figures need the same care, and the served files differ from the foundry's. DM Sans, General Sans and Libre Franklin serve no tabular figures, so take table columns from another face. Mona Sans and Zalando Sans swap in a slashed zero under `tabular-nums`, and Schibsted Grotesk and Google Sans Flex pad the comma and period, so keep their prices proportional.

## 1 Deal the fonts, do not remember them

Models and designers reach for the same twenty fonts, and those fonts now signal a generated page before a word is read. Do not choose from memory. Work from the brief to a set of registers, let the sampler deal candidates, then judge those candidates with the rest of this chapter.

**Registers** are the shared vocabulary of both data files: `editorial, luxe, cultural, crafted, organic, warm, quiet, rational, technical, institutional, industrial, futurist, retro, loud, brutal, sporty, playful, kids`. Take one primary and at most one modifier for a brief, such as `rational` + `editorial` for a research product, or `crafted` + `warm` for a pottery studio.

**`pairings.jsonl`** holds tested systems. Take a row whole. Its sizes, weights, tracking and leading were set together and audited in Chrome, and the risky rows were looked at as specimens with a headline, a paragraph, a label and a price. Swapping one family undoes that.

| Field | Meaning |
|---|---|
| `display`, `text` | Family names. When they match, the row is a single-family system |
| `accent_or_label` | Optional third voice, for labels or a true accent only |
| `registers` | Where it belongs, primary first |
| `why` | The reason it works. Read it, because it often limits use ("one line on one subject") |
| `settings.display` | `44-132px, wght 400, -0.015em, lh 1.02`, then any axes |
| `settings.text` | `17px, lh 1.55`, then weight, axes or tracking |
| `settings.label` | Optional. Size, weight, tracking, then axes |
| `contrast_type` | `family one-font`, `structural`, `width`, `era` or `mood` |

Tokens after those convert to CSS directly. `wdth 125` is `font-stretch: 125%`. `italic` is `font-style: italic`. `caps` is `text-transform: uppercase`. `noliga` is `font-variant-ligatures: none`, for monos whose fi ligature breaks the grid. Any other four-letter token (`opsz 96`, `SHRP 100`, `YOPQ 40`) goes in `font-variation-settings`, with `font-optical-sizing: none` when `opsz` is set by hand. The px range becomes a clamp, in [fluid clamp type](#fluid-clamp-type).

**`fonts.jsonl`** holds each family, for checking a choice or building your own system.

| Field | Use it for |
|---|---|
| `css` | The stylesheet URL, already verified to serve Latin and every axis in `axes` |
| `roles` | `display`, `text`, `ui`, `label`, `numerals`. A face without `text` must not set paragraphs. A face without `numerals` should not set prices or tables |
| `class`, `structure` | Skeleton: `structure` is one of sans, serif, slab, mono, script, hand, decorative, blackletter, stencil, pixel |
| `weights`, `variable`, `italic`, `axes` | When `variable` is true, `weights` is `[min, max]`. Otherwise it lists the static cuts |
| `display_setting`, `min_size` | Tracking and leading to start from at display size, and the smallest usable px size |
| `caps_only` | The face has no lowercase. Never use it for text |
| `missing_glyphs` | Characters that fall back, among digits, currency, quotes and common accents. A multi-language or euro-priced site must check this |
| `metrics` | `cap`, `x`, `asc`, `desc` in em, and `arial`, `times`: average advance against those fonts. Used in [loading](#9-loading-without-layout-shift) |
| `latin_kb` | Weight of the Latin file at this URL. Variable fonts with many axes can pass 300 KB |
| `overused` | Do not lean on this face for personality. It reads as a default, so it cannot be the brief's voice, though it can still be a well-set neutral |
| `pro_default` | A top product team would ship this as its primary UI and marketing face. Sans only. Independent of `overused` |
| `note`, `axes_note`, `weights_note` | The curator's advice, drawn from looking at the font. Read these before setting anything |

If the client has a brand typeface, use it and skip the rest of this section. Their font is their identity, however common it is.

## 2 Choose from the brief's world

Good type comes from the place the business lives, not from a mood word. Before looking at any font, answer three questions in writing.

1. **Where does type already exist in this world?** A ferry company has timetables, gangway signs and ticket stubs. A notary has seals and embossed letterhead. A ceramics studio has hand-stamped bases and price cards. A compiler has a terminal. These objects tell you the skeleton, the weight and the width far better than "modern" does.
2. **Who is speaking, and to whom?** Write two adjectives for the voice and one it must never have, such as "exact, unhurried, never cute". The third word eliminates the most fonts.
3. **What will the type have to carry?** Count the long reading, the tables, the prices, the phone-width headlines. A brief with a pricing table needs tabular figures, and a brief with four-word headlines can afford a font that only works at 96px.

Then map to registers and let the sampler deal. Read three to five candidates against the object from question 1 and take the one that could plausibly have been printed there.

| The brief | Type lives on | Registers | Contrast to look for |
|---|---|---|---|
| Developer tool, API | Terminals, docs, diffs | `technical`, `rational` | Neutral grotesque with one mono voice |
| B2B product, analytics | Tables, charts, invoices | `rational`, `quiet` | One family; numerals decide the choice |
| Bank, insurance, law | Letterhead, statements, seals | `institutional`, `quiet` | Serif authority over a civic sans |
| Research lab, journal | Papers, figures, footnotes | `editorial`, `rational` | Reading serif, restrained neutral |
| Magazine, long read | Mastheads, pull quotes | `editorial`, `cultural` | Structural, with a large size gap |
| Hotel, jewellery, perfume | Engraving, labels, menus | `luxe`, `quiet` | High contrast or inscriptional, very light |
| Restaurant, bakery, coffee | Menus, chalk, stamps | `warm`, `crafted` | Soft serif or slab, human text |
| Farm, skincare, wellness | Seed packets, field notes | `organic`, `quiet` | Pen note as a small accent, calm text |
| Museum, theatre, festival | Posters, wall text | `cultural`, `loud` | A strange display face and a plain frame |
| Logistics, tools, energy | Crates, plates, signage | `industrial`, `technical` | Condensed or stencil, data-grade text |
| Sport, fitness | Jerseys, scoreboards | `sporty`, `loud` | Condensed or italic heads, numerals first |
| Games, hardware, space | HUDs, spec plates | `futurist`, `technical` | Width or pixel, with a sober reader |
| Toys, schools, family | Picture books, copybooks | `kids`, `playful` | Round or hand, with generous leading |
| Record label, zine, club | Flyers, stencils | `brutal`, `retro` | Black or eroded display, typewriter text |

Two tests catch habit. The **swap test**: if the same type would work unchanged for a competitor in a different industry, it says nothing, so keep looking. The **costume test**: if the type quotes the subject so literally that it becomes a joke (a stencil for a shipping startup, a script for a bakery), step back one notch. A real company echoes its world and does not cosplay it.

For funded software the correct amount of personality is small. Most of the time the bar is a very well-set neutral, or a serif headline over a neutral, with the identity resting on spacing, scale and one considered detail. Loud type is a choice for loud businesses.

## 3 What makes a pairing work

Two typefaces work together when they differ in a way the eye sees instantly and agree in a way it feels. Two similar faces fail because the reader notices that something is off and cannot say what. Rank contrast by strength.

1. **Structure** (`structural`): different skeletons, such as a modulated serif over a grotesque, or a slab over a humanist sans. This is the strongest and most reliable contrast.
2. **Width** (`width`): compressed or extended against normal. Works inside one skeleton, and lets long headlines run huge.
3. **Era** (`era`): faces drawn generations apart, such as an inscriptional capital over a mid-century gothic. The distance reads as intent.
4. **Mood** (`mood`): an expressive face against a sober one. The expressive face must stay short.
5. **Family** (`family one-font`): one family, or sister cuts, with contrast from weight and width alone.

Rules that follow from this:

- **Never pair two sans faces of the same kind.** A geometric beside a neo-grotesque at similar weight is the most common way to get this wrong. Test at 24px: if you cannot tell the two apart in a second, use one family.
- **Give each face a job and keep it.** Display does headlines. Text does sentences. A face that appears in both roles at similar sizes has stopped being a contrast.
- **Keep size apart.** A pairing needs at least a 2.5x size gap between its faces to feel deliberate. Two faces at 20px and 24px just look unsure.
- **Match the feel, not the shape.** Similar x-heights within about 10 percent sit well in mixed lines, so compare `metrics.x` when a label runs inline with text. Faces with similar stress angle and terminal shapes agree quietly.
- **Text face first when reading dominates.** On docs, journals and long pages, choose the text face for colour and legibility, then find a display that suits it. On posters and landing pages, go the other way.
- **Two families, three at the most.** The third is a label or accent under 5 percent of the words, usually a mono or true small caps. Four is a mistake.

**Single-family systems** are often the best answer, and the most expensive-looking. They work when the two ends are far apart: at least 300 units of weight (400 against 700), or 40 units of width (wdth 75 against 125), or a large optical gap (opsz 12 against 96). In an expressive system, 400 against 500 is too close to read as contrast. In the professional default that pair is the norm, because size and ink carry the hierarchy. Roughly a quarter of `pairings.jsonl` is built this way.

**Where numerals go.** Check `roles` before setting a price in the display face. Ornate figures, oldstyle digits and scripts make prices misread: in testing, a `1` read as a `7` in one face and a `9` in another, and commas vanished in very wide faces. If the display face lacks the `numerals` role, set prices in the text face with `tabular-nums`.

## 4 Scale systems with extreme ratios

Amateur scales rise in polite steps, so nothing is really big and nothing is really small. Professional scales use a few sizes, far apart. The gap between the small sizes and the large ones is what creates hierarchy, so build the small end with as much care as the big end. That big jump happens once, from text to display. Between neighbouring levels top sites keep their steps small, as `elements/type.md` measures.

| Page type | Caption | Body | Subhead | Display desktop | Display phone | Ratio desktop, phone |
|---|---|---|---|---|---|---|
| Product, SaaS | 13 | 16 | 18 | 48 to 80 | 34 to 44 | 1:5 , 1:2.75 |
| Documentation | 13 | 16 | 24 | 40 to 48 | 32 | 1:2.75 , 1:2 |
| Editorial | 13 | 18 | 26 | 96 to 140 | 44 to 56 | 1:7 , 1:2.75 |
| Portfolio, studio | 13 | 16 | 20 | 120 to 200 | 56 to 72 | 1:10 , 1:4 |
| Poster, festival | 14 | 17 | 28 | 160 to 320 | 72 to 96 | 1:15 , 1:5 |

The last three rows are the loud end, for briefs that ask for it. The professional default stays at 48 to 80px, and even the type-led register has a median H1 of 36px and a p75 of 100px.

- Use about six sizes on a page, the measured median, with a middle half of 5 to 8. Every additional size weakens the others.
- Skip the middle. Going from 16 straight to 72 is stronger than 16, 20, 28, 40, 56, 72.
- Do not use a modular scale for the whole page. A 1.25 ratio is fine from 13 to 24 and useless above that, where sizes should jump.
- Round to whole pixels in the tokens, and define the display sizes as clamps.
- Sub-levels inside a section get contrast from weight or colour, not from a new size. An eyebrow, a heading and a deck can use 13, 40 and 18.

**Size and weight trade off.** The larger the type, the less weight it needs. A 120px headline at 500 looks calm and costly. The same line at 900 is a shout, and a page that shouts at every section is tiring. In `rational`, `technical`, `quiet` and `institutional` work, set display at 400 to 600. Keep 800 and above for `loud`, `brutal`, `sporty`, and for faces whose note says the black is the point. Huge heavy headlines are not a design idea on their own; they are the easiest thing to generate and they read that way.

**Density is the other half of contrast.** A 13px caption with exact spacing next to a large headline does more than a larger headline. Dense small type, in specification lists, labels, tables and footers, is what makes a page look made by people who know their subject.

## 5 Large-display craft

Type set above 40px is drawing, not text. Default spacing was made for reading sizes, so at display size every default is wrong.

### Tracking by size

Letters look further apart as they grow, so tracking tightens with size. Use `em`, so that it scales with the clamp. Start from the row's `display_setting`, because a tightly fitted face wants less than this table says. These are for mixed case.

| Size | Grotesque, neutral | Serif | Mono | Condensed | Wide | All caps |
|---|---|---|---|---|---|---|
| 11 to 13px | +0.01em | +0.01em | 0 | +0.02em | 0 | +0.05 to +0.12em |
| 14 to 18px | 0 | 0 | 0 | +0.01em | 0 | +0.05em |
| 20 to 32px | -0.01em | -0.005em | -0.01em | 0 | -0.005em | +0.01em |
| 36 to 64px | -0.02em | -0.01em | -0.03em | 0 | -0.01em | 0 |
| 72 to 120px | -0.03em | -0.015em | -0.04em | -0.005em | -0.02em | -0.005em |
| 140px and up | -0.04em | -0.02em | -0.045em | -0.01em | -0.025em | -0.01em |

- **Scripts and connected hands: always 0.** Tracking breaks the joins.
- **Stop before letters touch and before word spaces close.** At heavy weights, tight tracking can merge words: if two words read as one, tracking is the fault. Add `word-spacing: 0.04em` or back off.
- **Lowercase is never tracked out.** Positive tracking on lowercase is the most recognisable amateur habit in type.
- **Non-zero tracking disables optional ligatures**, so check `fi`, `fl` and `ff` for collisions in display headlines.

### Leading by size

Leading tightens as size grows, because the eye jumps the gap more easily on big lines. Always unitless.

| Size | Line-height | Notes |
|---|---|---|
| 13 to 15px | 1.45 to 1.6 | Captions and UI. 1.2 to 1.3 for single-line labels |
| 16 to 20px | 1.4 to 1.65 | Body |
| 22 to 32px | 1.25 to 1.4 | Lead paragraphs, large subheads |
| 36 to 64px | 1.05 to 1.15 | Section heads |
| 72 to 120px | 1.0 to 1.05 | Hero heads |
| 140px and up | 0.9 to 1.0 | Poster lines. All caps can reach 0.85 |

Scripts, hands and tall faces break this table. Ink can be far taller than the em box: the worst faces in the library need 1.4 to 1.6 or lines collide, and one is drawn so large that it needs 60 percent of the normal font size. Check by reading three lines with descenders above ascenders, like `gypsy` over `black`. If `p` meets `h`, open the leading until they clear. `pairings.jsonl` already allows for this.

### Optical size

Optically sized fonts carry different drawings for small and large type: open and sturdy at caption size, fine and tight at display size. Browsers apply this on their own through `font-optical-sizing: auto`, mapping `opsz` to the CSS pixel size, but only if the stylesheet URL requested the `opsz` axis. Every `css` value in `fonts.jsonl` does.

Force the axis when you want a look the automatic value will not give. A phone headline at 44px still wants hairlines drawn for 96.

```css
h1 { font-optical-sizing: none; font-variation-settings: 'opsz' 96; }
```

Do not use a face with no optical axis across a huge range without checking both ends. Hairlines that sing at 96px vanish at 18px, and sturdy text cuts look clumsy at 96px. This is why a single family can often work only with `opsz` in the URL.

### Kerning pairs

Kerning is on by default at all sizes, so never ship `font-kerning: none`, and leave `text-rendering` alone. Fonts are kerned for reading sizes, though, and a headline magnifies every gap. At 72px and above, read the headline for these pairs, in order of how often they fail:

`To Ta Tr Ty`, `Va Vo We Wo Ya Yo`, `AV AT AY`, `LT LY`, `Pa P. F. Fa`, `r. r, y. y,`, `11 17 74`, and a capital after an opening quote or `’s` after a capital.

Fix a gap by tightening the first letter, and only in the display heading. Steps of -0.02em to -0.08em are normal.

```html
<h1><span style="letter-spacing:-.05em">T</span>oday at the <span style="letter-spacing:-.04em">Y</span>ard</h1>
```

Use this on a sentence you control. Do not kern text that comes from a CMS, and do not hand-kern anything under 48px.

### Optical edges and hanging punctuation

Large letters have side bearings that grow with size, so a headline at 120px looks indented by 6 to 10px from the body text under it. Pull it back with `margin-left: -0.05em`. Round and diagonal first letters need more than flat stems. Check this by laying a straight edge down the left side of the text at 200 percent zoom. An opening quote belongs outside the text edge, so that the first letter aligns with the column. `hanging-punctuation: first last` does this only in Safari, and Chrome 156 still ignores it, so use a pseudo-element. It needs no measuring, and it survives every font.

```css
blockquote { position: relative; }
blockquote::before { content: "\201C"; position: absolute; right: 100%; }
```

Remove the opening quote from the text itself when using this, and keep real curly quotes everywhere else.

### Wrapping

- **Headings:** `h1, h2, h3 { text-wrap: balance; }`. Chrome only balances up to 6 lines, and that is more than a heading should have.
- **Paragraphs:** `p, li, figcaption { text-wrap: pretty; }`, which stops a single word stranded on the last line.
- **Set a heading measure in `em`**, around 10em to 14em, so that wide and condensed faces both break well. Use `<br>` only inside a `min-width` query, because a desktop break shatters a phone line.
- **Bind what must not split:** `&nbsp;` between a number and its unit, and between the last two words of a short heading.
- **Hyphenate only narrow body columns**, with `hyphens: auto` and a correct `lang` on `<html>`. Never hyphenate headings.

### OpenType features

Use the high-level properties, which stack and inherit properly. `font-feature-settings` replaces the entire list each time it is set, so a later rule silently turns off everything before it. Keep it for what has no high-level name, and hold it in one custom property. Missing features fail silently, so look at the result.

| You want | Write |
|---|---|
| Aligned columns of figures | `font-variant-numeric: tabular-nums` |
| Lining figures in a face that defaults to oldstyle | `font-variant-numeric: lining-nums` |
| Oldstyle figures in running text | `font-variant-numeric: oldstyle-nums` |
| A slashed zero in code, IDs and keys | `font-variant-numeric: slashed-zero` |
| True small caps | `font-variant-caps: small-caps`, plus `font-synthesis: none` |
| No ligatures in a mono | `font-variant-ligatures: none` |
| Stylistic sets, character variants | `font-feature-settings: 'ss01', 'cv11'` |
| Punctuation raised to suit all caps | `font-feature-settings: 'case'` |

A stylistic set is the cheapest way to separate a common font from everyone else's use of it. The `note` field names the good ones.

### Numerals

Use tabular figures wherever digits change or stack: tables, prices in a column, timers, counters, dashboards, scoreboards. Use proportional figures in headlines and sentences, where tabular spacing leaves a hole around every `1`. Confirm that a face really has them, because the property does nothing otherwise.

```js
const width = t => { const s = document.createElement('span');
  s.style.cssText = 'position:absolute;font:100px "Your Font";font-variant-numeric:tabular-nums';
  s.textContent = t; document.body.append(s);
  const w = s.getBoundingClientRect().width; s.remove(); return w; };
const tabular = width('1') === width('0');
```

If `tabular` is false, pick a text face with the `numerals` role. Oldstyle figures are right in a paragraph and wrong in any table. Many serifs in the library default to them, so add `lining-nums` for data.

### Fluid clamp type

Turn a pairing's `min-max px` range into a clamp between a 360px and a 1440px viewport.

```
slope     = (max - min) / (1440 - 360)
intercept = min - slope * 360

font-size: clamp(min/16 rem, intercept/16 rem + slope*100 vw, max/16 rem)
```

For `44-132px`, the slope is 88 / 1080 = 0.0815, the intercept is 44 - 29.3 = 14.7px, and the result is `font-size: clamp(2.75rem, 0.917rem + 8.15vw, 8.25rem)`.

Keep a `rem` term in the middle value. A clamp built purely on `vw` ignores browser zoom and fails accessibility. Inside a component that changes width, use `cqi` with `container-type: inline-size` on the parent. Body text stays fixed or moves only 1 to 2px across the range, such as `clamp(1rem, 0.95rem + 0.2vw, 1.125rem)`.

Test the headline at 360px with the longest real word on the page. A wide face can overflow where a condensed face has room to spare, and `pairings.jsonl` minimums allow for a 10-letter word in a 343px column.

### Trimming the line box

A line box adds space above caps and below baselines, so a heading beside an image never aligns, and caps sit off-centre in buttons. Faces vary a lot: some sit 0.1em high, and notes flag the worst. `text-box: trim-both cap alphabetic` on headings and buttons removes that space.

A 96px heading at default leading went from a 136px box to 70px, with the box exactly at cap height and baseline. It works in Chrome and Safari. Elsewhere the page just keeps the normal gap, so this is safe to use. Set the spacing around the trimmed heading afterwards, since all your margins will now be measured from the actual letters.

## 6 Body-copy craft

**Size.** 16 to 18px for marketing and reading, 14 to 15px for dense product UI, 16px for docs, 13px for captions and legal, 12px as the absolute floor. Aim for at least 7px of x-height, so that `size = 7 / metrics.x`, rounded up: a face with `x` of 0.38 needs 19px where one with 0.5 is fine at 15px. Sized this way, low-x-height faces sit level with their neighbours.

**Measure.** Aim for 60 to 75 characters on desktop, and 35 to 50 on a phone. Do not use `ch` for this. `1ch` is the width of a zero, which is much wider than an average letter. Measured across 120 text faces at 17px, `max-width: 60ch` gives a median of 80 characters and a range from 72 to 88, which is too long. The average character including spaces is 0.448em, so use `em`: `max-width: 30em` gives about 67 characters, `27em` about 60 and `33em` about 74. Wide faces need less and condensed faces more, so count one line of the real text.

**Leading.** Start at 1.55. Add 0.05 for a long measure (over 70 characters), a dark background, a mono or a large x-height. Subtract 0.05 for a short measure (under 45), but never go below 1.4 for sentences. Japanese and other CJK text wants 1.7 or more. `pairings.jsonl` gives a value for each text face.

**Paragraphs.** Separate with space of about 0.8 to 1em and no first-line indent on the web. Left-align everything longer than three lines. Never `text-align: justify` without hyphenation; the rivers are worse than a rag.

**Hierarchy.** Change one property at a time, and two at the most. A heading that is larger, bolder, coloured, uppercase and tracked is five signals where one would do. A level needs a clear step to read as a level:

| Signal | Minimum step |
|---|---|
| Size | 1.25x between adjacent levels, or do not bother |
| Weight | 200 units (400 to 600). A 100 step is invisible at text size |
| Colour | Three inks at most. Primary, secondary at 60 to 70 percent, tertiary only for non-essential text |
| Case | True small caps or one uppercase label style, used sparingly |

Secondary text must still meet 4.5:1 against its background, and light weights must be held to larger sizes: 300 needs at least 20px, and 200 at least 40px. A grey 14px at weight 300 is the fastest way to make a page unreadable.

**On dark backgrounds.** Light text blooms. Take 20 to 50 units off the weight if the face is variable, add 0.05 of leading and +0.005em of tracking, and on macOS use `-webkit-font-smoothing: antialiased` here and nowhere else. Fine hairlines die on dark, so check the display face too.

**Emphasis and links.** Use a true italic for emphasis in running text, or weight in a sans without one, and set `font-synthesis: none` so a browser never fakes either. Underline links with `text-decoration-thickness: .07em` and `text-underline-offset: .2em`.

**Punctuation is typography.** Use curly quotes and apostrophes (`“ ” ‘ ’`), an en dash for ranges, `×` for dimensions, and a true minus `−` for negative numbers. Straight quotes in a headline announce that nobody looked.

## 7 Type as image

When a page has no photograph, type can be the picture. It costs nothing to load, it scales perfectly, and it stays searchable and selectable. Use one typographic image on a page. If every section has one, none of them is an event, and a big word alone is not a design idea: it needs a reason, such as a name, a number or a statement that deserves the space. Keep real text in the DOM, mark purely decorative duplicates `aria-hidden`, and hold the heading in a real `<h1>`.

**Fit a word edge to edge.** Measure the word once at a known size, then let container units do the rest. Wait for the font first, or the ratio is wrong. In testing this filled a 900px box to within 0.03px.

```css
.fit { container-type: inline-size; }
.fit span { display: block; width: max-content; white-space: nowrap;
  line-height: .9; font-size: calc(100cqw / var(--fit, 6)); }
```

```js
document.fonts.ready.then(() => {
  const w = document.querySelector('.fit span');
  w.style.fontSize = '100px';
  const ratio = w.getBoundingClientRect().width / 100;
  w.style.fontSize = '';
  w.style.setProperty('--fit', ratio);
});
```

**Crop a letterform.** One glyph, or a short word, at 60 to 120vw inside an `overflow: hidden` frame. A cropped curve or terminal becomes shape, which suits faces with distinctive details. The word must still be readable in the heading or nearby.

**Set a photograph inside letters.** `background-clip: text` with a real image, weight 700 or more, and at least 120px, so that the picture has room to read. Declare a solid `color` first as a fallback. Do not fill type with a gradient by default: SKILL.md lists it as a giveaway, and only about 4 percent of gold records mention one.

**Outline.** Variable fonts keep overlapping contours, so a plain stroke draws lines through every letter joint. Fill with the background colour and paint the fill on top, which hides the overlaps. Set the stroke to twice the width you want, since half is covered.

```css
.outline { color: var(--bg); -webkit-text-stroke: 3px var(--ink); paint-order: stroke fill; }
```

**Other strong moves.** A single huge number as the picture for a statistic. Vertical type with `writing-mode: vertical-rl` as a spine down a page edge. Type that runs behind a cut-out subject, with the heading stacked between two layers. Type along a curve with SVG `<textPath>`. A line repeated in stepped weights or widths of a variable font. Each must remain legible at phone size, or get a calmer version under 600px.

## 8 Variable-font animation

A variable font can change continuously from a single file, so type can move without any images. Weight and width change the advance of every glyph, which reflows the line. In testing a word grew 11 percent from wght 300 to 800. Keep it to short strings you can hold in place, and leave paragraphs alone.

The stylesheet must request a range, `wght@200..800`, and not a list, `wght@400;700`, or there is nothing to animate between. Every `css` in `fonts.jsonl` already asks for full ranges. Use `font-weight` and `font-stretch` where you can, since those transition natively. Custom axes need `font-variation-settings`, and that only interpolates when both ends list the same axes in the same order, so drive each axis through a registered property.

```css
@property --soft { syntax: '<number>'; inherits: true; initial-value: 0; }
.wobble { font-variation-settings: 'INFM' var(--soft); transition: --soft .3s ease-out; }
.wobble:hover { --soft: 100; }
```

**Hover without shifting the layout.** Reserve the widest state with an invisible copy, so that neighbours never move. In testing the box stayed at exactly 259px while the weight ran from 300 to 800.

```html
<a class="reserve" href="/plans"><span class="ghost" aria-hidden="true">Plans</span><span class="live">Plans</span></a>
```

```css
.reserve { display: inline-grid; }
.reserve > * { grid-area: 1 / 1; }
.reserve .ghost { font-weight: 800; visibility: hidden; }
.reserve .live { font-weight: 300; transition: font-weight .24s cubic-bezier(.2,.7,.2,1); }
.reserve:hover .live { font-weight: 800; }
```

**Scroll-scrubbed width.** No script is needed. The heading grows from condensed and light to wide and heavy as it enters the view. Older browsers simply show the end state.

```css
@keyframes open { from { font-weight: 200; font-stretch: 75%; } to { font-weight: 800; font-stretch: 125%; } }
.reveal { animation: open linear both; animation-timeline: view(); animation-range: entry 0% cover 50%; }
```

**Weight that follows the pointer.** Split a short heading into glyphs, keep the words for screen readers, and ease each glyph toward a target. Use `Intl.Segmenter`, so that accents and emoji stay whole. Wait for fonts, and use a `180px` radius or so.

```js
document.fonts.ready.then(() => {
  const el = document.querySelector('.prox'), text = el.textContent;
  el.setAttribute('aria-label', text);
  el.innerHTML = [...new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(text)]
    .map(s => `<span aria-hidden="true">${s.segment === ' ' ? '&nbsp;' : s.segment}</span>`).join('');
  const spans = [...el.children], cur = spans.map(() => 300);
  let mx = -1e4, my = -1e4;
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  (function tick() {
    spans.forEach((s, i) => {
      const r = s.getBoundingClientRect();
      const d = Math.hypot(r.left + r.width / 2 - mx, r.top + r.height / 2 - my);
      cur[i] += (300 + 500 * Math.max(0, 1 - d / 180) - cur[i]) * .18;
      s.style.setProperty('--w', cur[i].toFixed(1));
    });
    requestAnimationFrame(tick);
  })();
});
```

```css
.prox span { display: inline-block; font-variation-settings: 'wght' var(--w, 300); }
```

Rules that keep this expensive-looking:

- 40 glyphs at the most. Layout runs on every frame, so never animate a paragraph.
- Hover in 180 to 280ms, entrances in 600 to 900ms, ease-out in all cases.
- One animated type treatment on a page.
- Honour `prefers-reduced-motion`: show the end state and stop. Pointer effects do not exist on touch, so the resting state must already look finished.
- Check `axes_note`. Several faces exist to be animated, and it says which axis is worth moving.

## 9 Loading without layout shift

Fonts arrive after the first paint, so a page has two states: fallback, then final. Your job is to make those two states almost identical.

**Connect early and request one URL.** Put families in a single stylesheet, because that is one request and one connection. Leave `display=swap` on.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Display+Face&family=Text+Face:ital,wght@0,100..900;1,100..900&display=swap">
```

For a row whose `source` is `fontshare`, preconnect to `https://api.fontshare.com` and `https://cdn.fontshare.com` (with `crossorigin`) and use its `css` as a separate link. Paste each family's `family=` part from its `css` when combining Google URLs, and keep only one `display=swap`.

**Budget.** Aim for 200 KB of Latin font on first view, using `latin_kb`. Italics and extra axes only load when used, so a wide URL costs little unless the page uses it. If one file is over 150 KB, narrow its axes in the URL to what you set. One file fell from 359 KB to 116 KB in testing when its URL dropped `opsz` and narrowed `wdth`.

**Display fonts used for a few words** can be cut down by adding `&text=Harbour` to the URL, which returned a 1 KB file against 10 KB for the same family in testing. Use it for a logotype or one heading whose text will never change.

**`font-display`.** `swap` for headings and for body text with a tuned fallback, which is what `display=swap` sets. `optional` for body text when self-hosting on a page people revisit, because the second visit is instant and the first never reflows. `block` is only for icon fonts.

**Preload** only self-hosted files, with `as="font"`, `type="font/woff2"` and `crossorigin`, and only the one or two faces in the first view. Google's file URLs change, so never preload them.

**Tune the fallback.** This is what prevents the shift. Declare a local font with its metrics overridden to match the real one, using `metrics` from the row. Compare against Arial for sans faces (`metrics.arial`) and Times New Roman for serifs (`metrics.times`). `size-adjust` is that ratio, and because it also scales the overrides, divide them by it: `ascent-override` is `asc / arial`, and `descent-override` is `desc / arial`.

For a row with `"metrics": {"asc": 0.96, "desc": 0.24, "arial": 1.04}`, this is the fallback:

```css
@font-face {
  font-family: "Text Fallback";
  src: local("Arial"), local("Helvetica"), local("Liberation Sans");
  size-adjust: 104%;
  ascent-override: 92.31%;
  descent-override: 23.08%;
  line-gap-override: 0%;
}
body { font-family: "Text Face", "Text Fallback", sans-serif; }
```

Do this for the display face as well, since that is where the jump is largest. In testing, a compressed headline at 64px took 134px of height in plain Arial and 67px in its real font, and the tuned fallback matched at 67px exactly. Over seven faces and a 17px paragraph, plain fallbacks matched the final height in 2 cases and tuned ones in 5, and line breaks went from 1 line in common to as many as 9. Safari has long ignored `ascent-override` and `descent-override` while honouring `size-adjust`, so it still gains the width match.

**Wait before you measure.** Any script that reads text size, such as fitted type, split lines or pinned sections, must run after `document.fonts.ready`. Measuring against the fallback is the usual cause of a headline that fits in development and overflows in production.

**Never let faces be faked.** Load every weight and italic you set, and add `font-synthesis: none` to the root. Faux bold smears the letterforms and faux italic slants the roman, and neither looks like a mistake until you know.

## 10 What makes type look amateur

| Tell | Fix |
|---|---|
| The first font that came to mind | Deal from the sampler, then justify the choice |
| Two similar sans faces | One family, or a real structural contrast |
| Polite scale: 16, 20, 24, 32, 40 | About six sizes, with one real jump |
| Huge black headline on every section | One big moment, lighter weight, and quieter sections |
| Tracked-out lowercase | Never. Tracking is for caps and small sizes |
| Tracked caps eyebrow over every section | Use small caps, sentence case, or nothing |
| One word in a heading turned italic or coloured | Let the whole heading do the work |
| Gradient-filled text | Solid colour. Use a real image if one earns it |
| Default tracking at 96px | Follow the size table, and check word spaces |
| Default leading of 1.3 to 1.5 on a hero | 1.0 to 1.1, then check for collisions |
| Heading indented from body text | `margin-left: -0.05em`, and check at zoom |
| Straight quotes, hyphens for dashes | Curly quotes, en and em dashes, true minus |
| Line length over 80 characters | `max-width: 30em`. Never rely on `60ch` |
| Grey, light, small text | 4.5:1, weight 400, at least 15px |
| Centred paragraphs | Left-align anything over three lines |
| Proportional numerals in a table | `tabular-nums`, and right-align |
| Oldstyle figures in a price | `lining-nums`, or use the text face |
| Display face in a paragraph | Respect `roles` and `min_size` |
| Script or caps-only heading longer than five words | Shorten it or change face |
| Fake bold or italic | Load the cut. `font-synthesis: none` |
| Text jumps when the font loads | Tuned fallback with `size-adjust` |
| Missing glyphs falling back (`€`, `é`, `’`) | Check `missing_glyphs` |
| Fixed hero size, overflowing on a phone | Clamp, and test at 360px |

## 11 Before you call it done

1. The choice comes from the brief's world, and it would not suit a competitor in another industry.
2. No `overused` family carries the personality of the page, unless it is the client's own brand face.
3. There are at most two families and a label voice, and each has one job.
4. About six sizes, a display to body ratio near 1:3 to 1:4 on desktop, and display set with a clamp.
5. Display tracking, leading and left edge are adjusted, and kerning is checked at full size.
6. Read the longest heading at 360px, 768px and 1440px. No overflow, no collisions, no stranded word.
7. Body is 15 to 18px, about 30em wide, with 1.4 to 1.6 leading.
8. Secondary text passes 4.5:1, and nothing below 400 weight sits under 20px.
9. Figures in tables and prices are lining and tabular, and read correctly.
10. Curly quotes, real dashes, correct accents, and no glyph falling back.
11. Fonts are preconnected, a tuned fallback is declared, and nothing is measured before `document.fonts.ready`.
12. Every animated axis was requested in the URL, respects reduced motion, and shifts no layout.
13. Throttle the network to Slow 4G and reload: the swap should be barely visible.
