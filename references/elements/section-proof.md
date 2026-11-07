# Proof sections

Proof answers one question: why should I believe you. Testimonials, case studies, logo walls, stats, team and integrations are six answers to it, and they share one weakness. They are the sections a template fills with confident nonsense, and a reader can tell, because real proof is lopsided and fake proof is tidy.

This chapter holds 99 canonical variants, clustered from 671 analyst rows across 362 sites. The strongest were checked against real frames at full size, and 30 were rebuilt and rendered next to the original, which is where the corrections and the mistake lists come from. The same variants live in `data/elements/section-proof.jsonl`, which is what the sampler deals from. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in. Words for proof, and the rules on invented proof, live in `references/copy.md#proof`. Read that before you write a quote or a number. This chapter covers how proof should look.

**Contents.** [What makes proof feel true](#what-makes-proof-feel-true) · [Choose by what you actually have](#choose-by-what-you-actually-have) · [No famous customers](#no-famous-customers) · [Logos and faces you do not have](#logos-and-faces-you-do-not-have) · [What we measured](#what-we-measured) · [Six proof systems](#six-proof-systems)

- **[Testimonial](#testimonial):** [Hanging quote on grid](#1-hanging-quote-on-grid) · [Display pull quote](#2-display-pull-quote) · [Quiet interlude quote](#3-quiet-interlude-quote) · [Quote with outcome metrics](#4-quote-with-outcome-metrics) · [Logo-led quote cards](#5-logo-led-quote-cards) · [Pinned-foot quote cards](#6-pinned-foot-quote-cards) · [Logo tab switcher](#7-logo-tab-switcher) · [Quote beside portrait](#8-quote-beside-portrait) · [Colour flood quote](#9-colour-flood-quote) · [Masonry wall](#10-masonry-wall) · [Drifting double row](#11-drifting-double-row) · [Peek card rail](#12-peek-card-rail) · [Portrait story cards](#13-portrait-story-cards) · [Mixed proof mosaic](#14-mixed-proof-mosaic) · [Video testimonials](#15-video-testimonials) · [Press quotes](#16-press-quotes) · [Verified review cards](#17-verified-review-cards) · [Open quote columns](#18-open-quote-columns) · [Speech shape quotes](#19-speech-shape-quotes) · [Letter or interview](#20-letter-or-interview) · [Drawn mark quote](#21-drawn-mark-quote) · [Client accordion table](#22-client-accordion-table) · [Quote beside interaction](#23-quote-beside-interaction)
- **[Logo wall](#logo-wall):** [Masked grey marquee](#1-masked-grey-marquee) · [Opposing double marquee](#2-opposing-double-marquee) · [Flattened grey logos](#3-flattened-grey-logos) · [Full strength mono logos](#4-full-strength-mono-logos) · [Full colour on rails](#5-full-colour-on-rails) · [Ruled cell grid](#6-ruled-cell-grid) · [Linked cell grid](#7-linked-cell-grid) · [Filled logo tiles](#8-filled-logo-tiles) · [One lit logo](#9-one-lit-logo) · [Logos as controls](#10-logos-as-controls) · [Logos inside another block](#11-logos-inside-another-block) · [Few logos, big room](#12-few-logos-big-room) · [Press masthead row](#13-press-masthead-row) · [Award and seal row](#14-award-and-seal-row) · [Compliance seals](#15-compliance-seals) · [Typeset client names](#16-typeset-client-names) · [Customers as product objects](#17-customers-as-product-objects) · [Tiered sponsor grid](#18-tiered-sponsor-grid) · [Logos plus rating](#19-logos-plus-rating) · [Logo wall with a joke](#20-logo-wall-with-a-joke)
- **[Stats](#stats):** [Open numeral columns](#1-open-numeral-columns) · [Rule-bound numerals](#2-rule-bound-numerals) · [Ruled stat cells](#3-ruled-stat-cells) · [Figure ledger](#4-figure-ledger) · [Customer-attributed numbers](#5-customer-attributed-numbers) · [Stat tiles](#6-stat-tiles) · [Staggered stat cards](#7-staggered-stat-cards) · [Colour band numerals](#8-colour-band-numerals) · [Number as diagram](#9-number-as-diagram) · [Sentence stats](#10-sentence-stats) · [One giant number](#11-one-giant-number) · [Numerals on photo](#12-numerals-on-photo) · [Fact strip](#13-fact-strip) · [Rating row](#14-rating-row) · [Inline with CTA](#15-inline-with-cta) · [Benchmark race](#16-benchmark-race) · [Live counter](#17-live-counter) · [Stat and quote mosaic](#18-stat-and-quote-mosaic)
- **[Case study](#case-study):** [Story index rows](#1-story-index-rows) · [Logo tile cards](#2-logo-tile-cards) · [Brand poster tiles](#3-brand-poster-tiles) · [Logo tabs over story](#4-logo-tabs-over-story) · [Expanding story strip](#5-expanding-story-strip) · [Quote media split](#6-quote-media-split) · [Story bento](#7-story-bento) · [Full-bleed project](#8-full-bleed-project) · [Photo overlay story cards](#9-photo-overlay-story-cards) · [Paged story carousel](#10-paged-story-carousel) · [Outcome text cards](#11-outcome-text-cards) · [Work grid](#12-work-grid) · [Written story](#13-written-story) · [Product in scene](#14-product-in-scene) · [Video proof cards](#15-video-proof-cards)
- **[Team](#team):** [Mono portrait grid](#1-mono-portrait-grid) · [One backdrop portraits](#2-one-backdrop-portraits) · [Colour backdrop portraits](#3-colour-backdrop-portraits) · [Portrait tile cards](#4-portrait-tile-cards) · [Credentialed practitioners](#5-credentialed-practitioners) · [Compact people directory](#6-compact-people-directory) · [Plain name columns](#7-plain-name-columns) · [Founder bio split](#8-founder-bio-split) · [Candid group photo](#9-candid-group-photo) · [Contributor wall](#10-contributor-wall) · [Authored portraits](#11-authored-portraits) · [Investor row](#12-investor-row) · [No team, contact rows](#13-no-team-contact-rows)
- **[Integrations](#integrations):** [Ruled directory](#1-ruled-directory) · [Hub and spoke map](#2-hub-and-spoke-map) · [Logo tile grid](#3-logo-tile-grid) · [Hairline link list](#4-hairline-link-list) · [Fading tile rows](#5-fading-tile-rows) · [Orbit and arc](#6-orbit-and-arc) · [Offset app card rows](#7-offset-app-card-rows) · [Brand chip row](#8-brand-chip-row) · [Mono mark field](#9-mono-mark-field) · [Live repo row](#10-live-repo-row)
- [Before you call it done](#before-you-call-it-done)

## What makes proof feel true

Set two pages side by side and the reader decides in a second which proof is real, usually without reading a word. These seven tells are what they are responding to. Build at least three into every proof section.

**1. Uneven length.** Real people do not write to a card height. Vercel AI SDK sets a six-line quote beside one of four words, in equal columns, and that pairing does more for belief than any logo. Expo keeps three-word posts next to full paragraphs. If your quotes are all two lines, one of them is fake or edited, and it shows.

**2. Something checkable.** A date, a handle, a link to the source, a method note, a footnote. Buildkite's cards end in a date and a link to the post. Bun states its machine, its repeat count and links to reproduce the run. Sourcegraph footnotes its figures with a dagger, Slack and Sword use superscripts, and Stripe's climate page ends in a numbered list of citations. Nobody clicks these. Their presence is the proof, because a faker would not risk them.

**3. A name attached to the number.** "40% faster" is an advert. "40% faster, Halden's support team, Q3" is a claim someone can be held to. Stripe's customers page writes each figure as a result for one named company. Loops gives every number a customer logo and a story link. Vercel's sales page lists five logos with one result each, right beside the form.

**4. A stated limit.** Levels sets `Not a clinical trial` directly under its results. Hims keeps a paid-testimonial disclosure under its quote. Tana writes a certification as expected next year instead of implying it holds it. Vite leaves unfilled sponsor cells empty. Admitting an edge is the most convincing thing proof can do, and generated pages never do it.

**5. Evidence from the world.** Soundsensing runs photographs of its sensors being fitted in real plant rooms. Heart & Soil pairs a bride's quote with a photo of that wedding. Greylock prints snapshots with a caption naming everyone in frame. Crescent Dental shows a dentist and a patient, slightly badly lit, giving a thumbs up. Imperfect and specific beats polished and generic every time.

**6. Their voice, not yours.** Hawl keeps a reviewer's lowercase. Bauhaus Clock keeps a review in German. Expo keeps a username that looks like a username. Leave the odd phrase in. Editing a quote into brand voice removes the only thing it was for.

**7. Proof beside the claim it supports.** Exa puts a one-line customer note under each feature. Brilliant sets logos inside the text column, under the sentence they back up. GitHub drops a customer story between two pricing tables, and Zed runs logos above the price. Proof moved next to a doubt does more work than a band labelled Testimonials.

The cheap version is one picture: a centred "What our customers say", three white cards, five gold stars, a round avatar, and three perfect two-line sentences. Our analysts scored that recipe lowest of any testimonial. Gold sites use star rows about half as often as silver ones, 9 percent of rows against 22, and the star rows they do use usually come with a platform name and a count. Hung punctuation runs the other way: 10 of 54 gold testimonial rows hang the opening mark, against 2 of the other 131. It is a very small act of care, and it sorts the corpus better than almost anything else we measured.

## Choose by what you actually have

Write down what you can truly show before you open a variant. The form follows the material, and a section drawn before anyone asked what could fill it is where pages turn dishonest.

| You have | Build | Do not build |
|---|---|---|
| Recognisable customers, no stories | A logo wall, static or linked | A carousel of thin quotes |
| Three good quotes from named people | Hanging quotes, or logo-led cards | A wall, which needs volume |
| Thirty public posts or reviews | A masonry wall, or a drifting double row | Three hand-picked cards |
| One customer with real numbers | A quote with metrics, or one case study in depth | A grid of six shallow cards |
| A few strong outcomes across customers | Customer-attributed numbers | A row of four anonymous stats |
| A real count that would surprise someone | One giant number, or a number as diagram | Four padded numbers around it |
| A store with volume of reviews | Verified review cards with the platform rating | Hand-picked five-star cards |
| A named founder or small team | Founder bio split, or candid group photo | A grid of four circles |
| Public code and contributors | Contributor wall, live repo row | A marketing stats band |
| Audits, licences, insurers | Compliance seals, fact strip | Pasted vendor badges |
| Nothing yet | See below | Any of the above, invented |

Two forms per page is usually right, and three is the limit. A logo strip under the hero plus one strong quote is a complete proof story for most pages. Case studies, stats and quotes in one long run read as protesting too much.

Place proof where doubt arises:

| Moment | What goes there | Seen on |
|---|---|---|
| Directly under the hero | Logos, or one fact strip | Stripe, Loops, Nurx |
| Under a feature claim | One-line customer note | Exa |
| Before pricing or inside it | Logos, one customer result | Zed, GitHub, Cal.com |
| Beside a form | Metric rows, grey logos | Vercel, Intercom |
| Just before the footer | Compliance strip, closing stats | Customer.io, GoCardless |

## No famous customers

Most businesses have no famous customers. That costs them nothing, provided they stop trying to look as if they do. An empty logo strip of small names reads worse than no strip, while a small business has kinds of proof a large company cannot use: an owner with a name, a street, a phone number, a person who answers. Big companies spend heavily to look that human.

Work down this table and take what is true. The left column is what nearly every small business has.

| What you have | Variant | How it looks | Seen on |
|---|---|---|---|
| An owner | `team/founder-bio-split` | A large portrait and a plain first-person story | Nicole Heim, Energen Digital |
| Years, licences, a fixed policy | `stats/fact-strip` | A thin band of three statements, one with a real registration number | Nurx, Snow Peak, Bellroy |
| One happy client and their photo | `testimonial/colour-flood-quote` | One long quote, first name, town, and the photo of that job | Heart & Soil |
| Clients nobody has heard of | `logo-wall/typeset-client-names` | Their names set as type, where a dentist and a rowing club weigh the same | Ueno, George Hatton |
| Places, schools, trades served | `logo-wall/typeset-client-names` | A list of towns in hairline cells | ACME |
| One bit of press, however small | `case-study/written-story` | A section that says so and links the article | Bakstad |
| Public reviews | `testimonial/verified-review-cards` | Rating, count, dated reviews, with one mixed review left in | Nurx, Copilot |
| The finished work | `case-study/full-bleed-project` | One project, huge, with a small caption | Nicole Heim, Work & Co |
| A real team photo | `team/candid-group-photo` | One unposed picture with everyone named | Crescent Dental, Greylock |
| Insurers or accreditors | `logo-wall/logos-as-controls` | Logos as choices the reader can act on | Talkspace, Daylight |
| A problem you can quantify | `stats/rule-bound-numerals` | Sourced numbers about the problem, not about you | Magram, Canary |
| A product that works | `stats/benchmark-race` | A reproducible test with its method | Bun |
| A single voice | `testimonial/letter-or-interview` | A signed note from the person responsible | PostHog |

Four moves are worth learning, because they turn smallness into proof.

**One specific thing, stated flatly.** Bakstad gives a whole section to a single magazine mention, in about ten words, opposite one photo. It works because it does not pretend to be more. A thin strip of three logos pretends. One line of real press with a link does not.

**Numbers about the problem instead of about you.** Magram has no vast customer count, so its big percentages describe its readers' own situation, each with a source, and the section ends in a statement. The figures earn attention, and the firm borrows none of their credibility falsely. Cite a real source, or use your own count with its size stated, such as a review of 41 ledgers.

**Leave a seat open.** Linear ends its customer table with a dim row for your company. Railway ends its team with a tile for you. Energen Digital puts a card beside its one case study asking if your firm is next. Russell & Stellar keeps a coming-soon seat on its team, filled with a brand mark on texture rather than a grey silhouette. An admitted gap turns a short list into an invitation.

**Depth instead of breadth.** One story told properly convinces more than six logos. Work & Co features one project in a single column. PostHog writes a letter. Hawl runs one long unedited paragraph, and its length is its sincerity. If you have one good client, give them the whole section.

Then apply the honesty rules in `references/copy.md`. If the business is invented, invent its customers too, keep them small and mark them. If the business is real, never invent proof, leave the slot out and say what would help. Outcome claims in health, law and finance stay out either way. Keep real company names, mastheads and review marks away from anything you made up.

## Logos and faces you do not have

Half of this chapter needs logos, and you usually have none. Getting them wrong is the fastest way to look fake, so learn this before you build.

**Wordmarks.** When a wall of invented companies is correct, set each one as live text in a different voice. The trap is one typeface in one weight, which reads as a list of placeholder names. Six classes are enough, because a real wall differs in width, weight, case and spacing all at once. Our rebuilt Attio and Ueno walls held up next to the originals using nothing more than this.

```css
.wm{display:inline-flex;align-items:center;gap:.34em;white-space:nowrap;font-size:var(--wm,22px);line-height:1}
.wm svg{height:1em;width:1em;flex:none;fill:currentColor}       /* a use-only svg defaults to 300px wide */
.w1{font:650 1.08em/1 var(--font-text);letter-spacing:-.035em}                     /* tight lowercase */
.w2{font:600 .64em/1 var(--font-text);letter-spacing:.2em;text-transform:uppercase} /* wide caps */
.w3{font:400 1.14em/1 ui-serif,serif;letter-spacing:-.02em}                         /* an old firm */
.w4{font:500 .92em/1 ui-monospace,monospace;letter-spacing:-.04em}                  /* a developer tool */
.w7{font:800 1.02em/1 var(--font-text);letter-spacing:-.05em}                       /* heavy and short */
.w8{font:400 1.02em/1 var(--font-text);letter-spacing:.02em}                        /* light and open */
```

Give about half the marks a small glyph: a circle, a triangle, four dots, one wave. Keep them geometric and one colour. Size by eye so each covers the same area, not the same height, because a wide wordmark at full height shouts over a short one. A workable ladder is 20px tall for a 5:1 mark, 26px for 3:1 and 36px for a square one.

**Faces.** Gradient circles read as placeholders at once, and a stock headshot with a perfect smile is worse. If you have no real photograph, use a variant that needs none: hanging quotes, logo-led cards, open columns, plain name columns. Next best are initials in a flat square tile matched to your radius. If you can generate or source portraits, treat them as one shoot, as in [team](#team): same head size within about five percent, eyes on one line, same light, greyscale if the set will not match.

**Customer art.** A bare gradient behind a logo reads as a missing image. Use pattern or geometry drawn in the customer's colour, a real photograph, or the logo alone on flat colour.

## What we measured

These ranges come from analyst rows, shown as lower quartile, median and upper quartile. Treat them as a neighbourhood, not as fact. When we checked them at 1:1, sizes on one group of about pages were wrong by a factor of 1.4 to 2.4, because they had been read from scaled images. Linear's team portraits are 269px wide, not 190. Railway's directory uses 96px photos, not 40. The row pitch on Vercel's story index is 96px, and it has no rules at all. The recipes below carry the corrected values.

| Element | Radius | Gap | Main size |
|---|---|---|---|
| Testimonial | 8 / 16 / 20 | 16 / 20 / 24 | Card quote 16 / 20 / 28, feature quote 18 / 26 / 32, avatar 40 / 48 / 56 |
| Logo wall | 8 / 10 / 15 | 12 / 40 / 60 | Logo height 24 / 28 / 44 |
| Stats | 8 / 16 / 20 | 12 / 16 / 40 | Numeral 38 / 48 / 56 |
| Case study | 6 / 12 / 16 | 12 / 16 / 24 | Title 14 to 36 by form |
| Team | 8 / 15 / 20 | 12 / 24 / 28 | Name 14 to 18, role 12 to 14 |
| Integrations | 6 / 8 / 16 | 8 / 16 / 24 | Logo or icon 20 to 48 |

Other facts from the rows:

| Fact | Value |
|---|---|
| Logo walls that move at all | 31%, and 26% on gold sites |
| Logo walls flattened to grey or mono | about 60% |
| Logo walls with no caption | 12% of rows, and 19% on gold sites |
| Testimonial rows with stars | 9% gold, 22% silver |
| Testimonial rows with a hung opening mark | 19% gold, 1.5% elsewhere |
| Testimonial rows built as dot carousels | 7% gold, 13% silver |
| Numeral weight | spread evenly from 300 to 700, so choose by how the face looks |

Measured hover behaviour across 516 sites: cards change on 58 percent of sites, with transform the most common change, a median scale of 1.04, and durations of 200, 300 and 400ms at the quartiles. Rows change on 50 percent, mostly text colour and then fill, at 150, 200 and 300ms. Hover on a proof section should say what is clickable and nothing more. A logo that links gets a cell tint, a quote that links gets a colour change on its arrow, and a stat does not hover. Proof sections sit in the page's normal rhythm, at 96px of section padding (80 to 128) on gold sites.

**Moving proof.** Any marquee needs a pause on hover, and anything that runs longer than five seconds needs a way to stop it. GitHub, Function and Kiro all show a real pause control, which is rare and considerate. Under `prefers-reduced-motion` a marquee must stop and remain readable. For speed, aim at about 30 to 40px a second, which we set by rebuilding them. Faster turns logos into an advert. Timed tabs last 6 to 8 seconds, pause on hover and focus, and stop for reduced motion.

**Count-ups.** Write the true final value into the HTML. Animate from a value near it, never from zero, and animate once. A number that reads 0 in a screenshot, in a reader mode, or when scripts fail is a false claim.

## Six proof systems

Proof variants work as a family, and mixing them is what makes a page read as a sample book. Choose one row, and take the logos, quotes, numbers and people from it. Two sites built from different rows will look unrelated, and that is the aim. Let the deal or the brief decide rather than a favourite.

| System | Logos | Quotes | Numbers | People | Reference |
|---|---|---|---|---|---|
| Instrument | Ruled, linked cells | Hanging quote, no card | Ruled cells | Compact directory | Attio, Vercel, Speakeasy |
| Human warmth | Press mastheads | Portrait story cards | Rule-bound, in serif | One backdrop | Function, Nurx, Tana |
| Loud product | Filled tiles | Colour flood panels | Number as diagram | Mono grid | Linear, Wispr Flow, Baseten |
| Community | App icons or plain marks | Masonry of public posts | Live or star count | Contributor wall | Expo, Supabase, Buildkite |
| Studio | Typeset names | Open columns | Few, inside sentences | Founder split | Nicole Heim, Ueno, Pentagram |
| Local trade | Accreditors, or none | One long quote with the job | Years and a licence number | The owner, named | Heart & Soil, Bakstad, Crescent Dental |

## Testimonial

A testimonial must let a stranger speak for you, and be believed. Everything else is secondary. So the quote is the design, and the frame around it should cost as little as possible. Choose a variant by how much a quote can bear: a great sentence can stand alone at 64px, a decent one needs a logo beside it, and a thin one should not be on the page.

What separates great from cheap is attribution and unevenness, not decoration. Great testimonials carry a real name and job, hang their opening mark so the text keeps the grid, pin the attribution to a shared base so that uneven quotes still align, and differ wildly in length. Cheap ones are three equal white cards with a tinted quote glyph, five gold stars and a circular avatar, with sentences that could praise any company. The quote mark itself is a warning sign when it is large, pale and decorative.

Measured ranges: feature quotes 18 to 36px with outliers to 64, card quotes 16 to 20px, line height 1.25 to 1.5 and tighter as size grows, radius 8 to 20, gap 16 to 24, avatar 40 to 48. Set quotes in the display face at large sizes and pull tracking down with them, to about -2 percent at 32px.

<!-- v:section.testimonial/hanging-quote-on-grid -->
### 1. Hanging quote on grid

*Feeling: a person speaking, set by someone who cares about type.*

Two quotes on the page grid with no container. Use it on developer tools and precise product pages when you have real quotes with named people. Avoid it if your quotes are weak, because there is nothing to hide behind.

Set columns on the page's own 720px pitch, quote 32/40 at 500 with -2 percent tracking. Hang the opening mark outside the column, so the text edge stays on the grid and the eye reads it as one straight line. Pin name and role to the base of each column at 14px, with the customer's logo right-aligned on the same line. The grid rows do the work: a six-line quote and a four-word quote finish on one baseline, and that contrast is the section's whole charm. `hanging-punctuation` works only in Safari, so position the mark yourself, which hangs it exactly in any typeface.

**Seen on** Vercel AI SDK, Cloudflare Workers, Polar, Vercel AI. **Suits** light-precision, dark-precision; devtool, saas, ai.

```css
.cols{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.q{display:grid;grid-template-rows:1fr auto;gap:32px}   /* base stays shared, however long the quote */
.q blockquote{position:relative;font:500 32px/40px var(--font-display);letter-spacing:-.022em;text-wrap:pretty}
.q .mark{position:absolute;right:100%}                  /* <span class="mark" aria-hidden="true">“</span> */
.q figcaption{display:flex;align-items:flex-end;justify-content:space-between;font-size:14px;line-height:20px}
.q figcaption b{display:block;font-weight:500}.q figcaption span{color:var(--ink-2)}
@media(max-width:760px){.cols{grid-template-columns:1fr;gap:56px}
  .q blockquote{font-size:26px;line-height:33px;padding-left:.46em}.q .mark{right:auto;left:0}}
```

<!-- v:section.testimonial/display-pull-quote -->
### 2. Display pull quote

*Feeling: the page stops and listens.*

One quote at headline scale, often the only place on the page the second typeface appears. Reserving a serif for this moment is what makes it land: Attio, Convex and Brex all keep a serif for a single quote. Use it once, for your single best sentence. Avoid it if the quote needs more than about 30 words.

Set 48 to 64px on 1.05 leading, tracking -2 to -3 percent, weight 300 to 400, on a measure of 700 to 1220px. Speakeasy runs it between hairlines with a small accent mark in the left rail and the text indented 112px, then a 56px square greyscale portrait, 18px name, mono role, a rule and a grey logo. Attio centres it in a tall cell on a fine dot grid. Greylock colours two phrases in the accent over a stippled map. Keep the mark small and solid, because a big pale one turns the sentence into a poster. For a scroll treatment, Figma fades each word from grey to full ink as you read.

**Seen on** Attio, Greylock, Speakeasy, Sonder, ReadMe, 10 sites in all. **Suits** light-precision, bold-colour, photo-led, warm-neutral, mono-technical; saas, devtool, agency, finance, hospitality.

```css
.band{border-block:1px solid var(--line);padding:72px 0 88px}
.in{display:grid;grid-template-columns:112px 1fr;max-width:1392px;margin-inline:auto}
.m{font:600 96px/.74 ui-serif,serif;color:var(--accent);margin-top:8px}      /* set heavier than the quote */
blockquote{font:300 64px/68px var(--font-display);letter-spacing:-.032em;max-width:1216px;text-wrap:pretty}
.by{display:flex;align-items:center;gap:24px;margin-top:40px}
.by img{width:56px;height:56px;object-fit:cover;filter:grayscale(1)}
.by i{width:1px;height:56px;background:var(--line)}
@media(max-width:760px){.in{grid-template-columns:1fr}blockquote{font-size:36px;line-height:40px}.by{flex-wrap:wrap;gap:16px}.by i{display:none}}
```

<!-- v:section.testimonial/quiet-interlude-quote -->
### 3. Quiet interlude quote

*Feeling: a voice in the room between two rooms.*

A short quote between feature blocks, with no card. It lowers the temperature of a page and gives a reader somewhere to breathe. Use it to break up long feature runs. Avoid it as your main proof, because it is designed to be secondary.

Centre 20 to 28px text on a 580 to 820px measure, then a 32 to 48px avatar, 14px name and role, and an optional customer logo after a 1px divider. Keep it under your headings in visual weight, as Tally does by setting it in mid grey. Emphasis comes from ink rather than size: Mercury sets the first sentence in full ink and the rest muted, Dub lifts one phrase to weight 500, and Canary underlines one phrase with a 3px accent rule. Choose one.

**Seen on** Cursor Blog, Canary, Dub Pricing, Mercury Pricing, Oxygen Pictures, 14 sites in all. **Suits** dark-precision, warm-neutral, illustrated, light-precision, photo-led; saas, devtool, finance, agency, ai.

<!-- v:section.testimonial/quote-with-outcome-metrics -->
### 4. Quote with outcome metrics

*Feeling: an opinion, then the receipts.*

A quote that brings its own numbers. This is the strongest single-customer form, because feeling and figure back each other up. Use it when one customer has real results. Avoid it if the numbers are rounded marketing, since a bad number next to a good quote poisons both.

Airpost sets a 60px quote across 1140px, then a 64px avatar, name, logo and a case study button, and below that three columns under top hairlines with figures at 40px. Note that it mixes words with digits, which reads more honestly. Increase puts a 20/30 quote in a faintly tinted panel, with name left and a two-line mono proof point right-aligned at the base. Hawl runs a long paragraph at 18/28 and two small green uplifts at the right, and keeps the reviewer's lowercase. Sweeply and Remote put a 44 to 48px metric at the foot of each rail card.

**Seen on** Increase, Airpost, Hawl Design, Sweeply, Remote. **Suits** dark-precision, light-precision, gradient-light, bold-colour; finance, ai, agency, saas.

<!-- v:section.testimonial/logo-led-quote-cards -->
### 5. Logo-led quote cards

*Feeling: a reference from a company you have heard of.*

The company's name is the headline and the quote supports it. This is the standard form for business software and a fine default when the logos mean something. Avoid it for unknown customers, where the logo at the top of the card asks a question it cannot answer: use pinned-foot cards.

Three cards at 424 by 335 or a rail of 460 by 408, radius 16 to 32, padding 40, gap 24. Logo about 28px tall top left, 20/28 quote, then pinned to the base a 36 to 48px avatar, 14px name and 13px grey role. Pinning is what makes a row of different lengths look deliberate. Factory inverts it by stacking the quote upward from the base, so every last line aligns. Resend overlaps a 40px white logo circle on a greyscale founder photo, which puts company and person in one object. No borders or stars on the good ones.

**Seen on** Lithic, Spline, Exa, Factory, Resend, 11 sites in all. **Suits** light-precision, dark-precision, photo-led, gradient-light; devtool, finance, ai, saas.

```css
.r{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.c{background:var(--surface);border-radius:16px;padding:40px;min-height:335px;display:flex;flex-direction:column}
.c blockquote{font:400 20px/28px var(--font-text);letter-spacing:-.008em;margin-top:24px;text-wrap:pretty}
.c figcaption{margin-top:auto;padding-top:28px;display:grid;grid-template-columns:36px 1fr;column-gap:14px;align-items:center}
.c img{grid-row:span 2;width:36px;height:36px;border-radius:50%;object-fit:cover}
.c b{font:400 14px/18px var(--font-text)}.c small{font-size:13px;line-height:17px;color:var(--ink-2)}
@media(max-width:980px){.r{grid-template-columns:1fr;gap:12px}.c{padding:28px;min-height:0}}
```

<!-- v:section.testimonial/pinned-foot-quote-cards -->
### 6. Pinned-foot quote cards

*Feeling: plain statements, signed.*

Text cards with no logo, where the empty middle does the design. Use it when the person matters more than their employer, for consumer, health and small customers. Devin Desktop's are radius 0, 1px line, 20/25 quote with a hanging mark, and a three-line attribution with name in ink and role and company in grey. Polar sets three near-black tone cards just 4px apart so they read as one object. Headspace shows the strongest idea here: for mental health it names a theme instead of a person, 26/31 quote on a warm tint, because privacy is the point. A fourth card peeking past the rail stops the row feeling finished.

**Seen on** Devin Desktop, Motto, Polar, Arya Bhangy Builders, Headspace, 10 sites in all. **Suits** light-precision, warm-neutral, type-led, dark-precision, illustrated; saas, agency, ai, architecture, health.

<!-- v:section.testimonial/logo-tab-switcher -->
### 7. Logo tab switcher

*Feeling: a shelf of proof you can pull from.*

Logos become tabs, and each opens one customer's story. It scored highest of any common testimonial form, because it holds many customers in one screen and turns a passive strip into a control. Use it when you have three to five strong stories. Avoid it for fewer, since two tabs look like a toggle.

Decagon's tabs are 266px wide, each a 2px rule over a grey logo. The active logo takes its brand colour and its rule fills in that colour as a timer. Below, a large hung mark in its own column, a 24px quote, a 1px vertical divider and one enormous figure at about 124px. AuthKit uses a grey segmented tray instead, with the active logo on a white chip. Inngest puts a halftone portrait left. Stripe tints a whole card with the customer's colour, melting into a photo. Keep the tab row visible under the panel or above it, and make the logo's colour the panel's only colour.

**Seen on** AuthKit, Decagon, Inngest, Stripe Atlas, Stripe Payments, 10 sites in all. **Suits** gradient-light, light-precision, dark-precision, soft-pastel, bold-colour; devtool, saas, finance, ai.

```css
.tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.tab{all:unset;cursor:pointer;display:block;position:relative;padding-top:24px;color:var(--ink-3);transition:color .2s}
.tab::before,.tab::after{content:"";position:absolute;left:0;top:0;height:2px;width:100%;background:var(--line)}
.tab::after{background:var(--c);width:0}                       /* set --c to each customer's colour */
.tab[aria-selected=true]{color:var(--c)}
.tab[aria-selected=true]::after{animation:fill 8s linear forwards}
.tabs:hover .tab::after{animation-play-state:paused}
@keyframes fill{to{width:100%}}
.panel{display:grid;grid-template-columns:56px 1fr 1px 320px;gap:0 40px;margin-top:64px}   /* mark, quote, rule, figure */
.mk{font:600 92px/.74 ui-serif,serif;color:var(--c)}
.fig b{font:400 124px/1 var(--font-display);letter-spacing:-.045em;color:var(--c);font-variant-numeric:tabular-nums}
@media(prefers-reduced-motion:reduce){.tab[aria-selected=true]::after{animation:none;width:100%}}
@media(max-width:860px){.tabs{grid-template-columns:repeat(4,160px);overflow-x:auto}.panel{grid-template-columns:1fr;gap:32px}}
```

Run a matching 8 second `setTimeout` to advance the tab, cleared on click, hover and focus, and skipped under reduced motion. Use `role="tablist"` with `aria-selected` on real buttons.

<!-- v:section.testimonial/quote-beside-portrait -->
### 8. Quote beside portrait

*Feeling: meeting the person.*

Half image, half words. Use it when you have one customer worth meeting. The media decides the tone: a film-look photo on Asana, a halftone or duotone portrait on Mixpanel, or Render's clever option for when you have no photo at all, a grainy landscape in the customer's colours with their logo centred in white. That plate needs nothing but CSS, and it reads as commissioned art, because the grain does the work.

Render pairs a 680 by 400 plate at radius 6 with a 32/40 quote, name and role low, and 40px square arrows on the plate's base line. Claude's page uses a 520px photo beside a 28/38 serif quote with no avatar, because the photo is already the person. Isolabella bottom-aligns the quote against the photo and leaves the space above it empty.

**Seen on** Render, Asana, Claude, Stripe Connect, Levels, 10 sites in all. **Suits** light-precision, warm-neutral, bold-colour, dark-precision, photo-led; saas, devtool, ai, finance, health.

```css
:root{--grain:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.wrap{display:grid;grid-template-columns:680px 1fr;gap:128px}
/* Horizontal bands in the customer's colours, wider and softer than feels right. Eight stops, none evenly spaced. */
.plate{position:relative;isolation:isolate;height:400px;border-radius:6px;overflow:hidden;display:grid;place-items:center;color:#fff;
  background:linear-gradient(180deg,var(--c1) 0,var(--c2) 34%,var(--c3) 62%,var(--c4) 100%)}
.plate::after{content:"";position:absolute;inset:0;z-index:-1;background:var(--grain);mix-blend-mode:overlay;opacity:.95}
.t{display:flex;flex-direction:column;justify-content:space-between}
blockquote{font:500 32px/40px var(--font-display);letter-spacing:-.03em;text-wrap:pretty}
@media(max-width:1100px){.wrap{grid-template-columns:1fr;gap:32px}.plate{height:280px}blockquote{font-size:26px;line-height:33px}}
```

<!-- v:section.testimonial/colour-flood-quote -->
### 9. Colour flood quote

*Feeling: one loud moment on a quiet page.*

Quotes on panels of strong colour. Use it once, on a page that has been restrained up to that point, and the contrast does the rest. Avoid it on a page that is already colourful. Linear runs two panels on near-black, one soft gradient and one acid solid, in unequal widths of 880 and 432, 480 tall, radius 8, 8px gap, and it is the only colour on the page for several screens. The unequal widths matter, since two equal panels read as a pricing table.

Quote 32/36 top left with a hung mark, foot pinned low with a logo, a 1px divider, a 14px name and a muted role. Keep the type dark on the fill and let the middle stay empty. For the ghost shape in the corner, use the customer's real mark, drawn huge and pale, because a plain circle reads as a placeholder. Heart & Soil shows the small-business version: an 800px muted lavender panel, a long 32/50 serif quote, a first name and town, a 428 by 536 framed photo of that wedding, and the next slide peeking as a 72px sliver with a 50px arrow on the seam. That is the best thing a local business can build here.

**Seen on** Linear, Wispr Flow, ClickHouse, Heart & Soil, Casper, 14 sites in all. **Suits** bold-colour, warm-neutral, dark-precision, illustrated, mono-technical; saas, devtool, education, local-business, ecommerce.

```css
.row{display:grid;grid-template-columns:880fr 424fr;gap:8px}
.b{position:relative;overflow:hidden;height:480px;border-radius:8px;padding:32px;display:flex;flex-direction:column;justify-content:space-between;color:var(--ink)}
.b blockquote{position:relative;font:500 32px/36px var(--font-display);letter-spacing:-.022em;padding-left:.44em;text-indent:-.44em;max-width:17.5em}
.ghost{position:absolute;right:-90px;top:-70px;width:640px;height:640px;fill:#fff;opacity:.42}   /* the customer's mark */
figcaption{position:relative;display:flex;align-items:center;gap:20px}
figcaption i{width:1px;height:36px;background:color-mix(in srgb,currentColor 14%,transparent)}
@media(max-width:860px){.row{grid-template-columns:1fr}.b{height:auto;min-height:340px;gap:64px}}
```

<!-- v:section.testimonial/masonry-wall -->
### 10. Masonry wall

*Feeling: a crowd, unprompted.*

Volume as the argument. Heights come from real content, which is why it never looks gridded. Use it when you have 15 or more genuine posts or reviews, and especially for developer and consumer products with public fans. Avoid it with six quotes, which read as a sparse board, and with invented quotes, where the volume itself becomes the lie.

Expo uses four 308px columns, 16px gap, cards at radius 16 with a 1px pale line, about 32px padding, a 48px avatar, 14/600 name, 13px handle and 16px text. Buildkite adds the source's own glyph, a date and a link to the post. Lindy puts a 14px source line on top, such as a channel name, and marks one phrase with an amber chip at 30 percent opacity. Close with a mask fade into a 36px pill, as on Cal.com, which says there is more instead of stopping. Weekstack styles its cards like app store reviews. Trigger.dev drops cards altogether and divides columns with rules.

**Seen on** Buildkite, Expo, Cal.com, Vite, Lindy, 17 sites in all. **Suits** dark-precision, light-precision, warm-neutral, gradient-light, photo-led; devtool, education, saas, health, ai.

```css
.wall{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;height:940px;overflow:hidden;
  -webkit-mask-image:linear-gradient(#000 62%,transparent 96%);mask-image:linear-gradient(#000 62%,transparent 96%)}
.col{display:flex;flex-direction:column;gap:16px}                 /* explicit columns keep reading order sane */
.p{border:1px solid var(--line);border-radius:16px;padding:28px;background:var(--bg);font-size:16px;line-height:24px}
.p header{display:grid;grid-template-columns:44px 1fr;column-gap:12px;align-items:center;margin-bottom:18px}
.p img{grid-row:span 2;width:44px;height:44px;border-radius:50%;object-fit:cover}
.p b{font:600 14px/18px var(--font-text)}.p small{font-size:13px;line-height:17px;color:var(--ink-2)}
.p time{display:block;margin-top:14px;font-size:13px;color:var(--ink-2)}
mark{background:color-mix(in srgb,var(--accent) 30%,transparent);border-radius:5px;padding:1px 4px;color:inherit;
  -webkit-box-decoration-break:clone;box-decoration-break:clone}   /* each wrapped line gets its own chip */
@media(max-width:1000px){.wall{grid-template-columns:repeat(2,1fr)}.col:nth-child(n+3){display:none}}
@media(max-width:600px){.wall{grid-template-columns:1fr;height:760px}.col:nth-child(n+2){display:none}}
```

<!-- v:section.testimonial/drifting-double-row -->
### 11. Drifting double row

*Feeling: a stream that keeps going.*

Two rows of cards sliding past each other. It gives a wall's sense of volume in a third of the height. Use it mid-page, with short quotes. Avoid it for anything a reader must finish, because moving text cannot be read comfortably, so keep quotes to three lines.

Ramp uses 320 by 192 white cards, radius 16, 1px warm line, 40px logo tile, 14/500 name and 14/20 quote, rows offset half a card, both edges masking to the page. Bauhaus Clock's 350 by 275 cards use radius 30 and 20/28 text, with the key sentence bold on a per-line highlighter, which lets a moving reader catch the point. LiveKit mixes card widths of 300 and 450px in staggered stacks. Kiro sets attributions outside the box so heights stagger, and gives the row a pause button.

**Seen on** Bauhaus Clock, Ramp, LiveKit, InkTree, Kiro, 7 sites in all. **Suits** light-precision, dark-precision, illustrated, bold-colour, warm-neutral; ai, finance, saas, devtool.

<!-- v:section.testimonial/peek-card-rail -->
### 12. Peek card rail

*Feeling: there is more, and you are welcome to look.*

Horizontal cards that run off the edge, the next one cut by the viewport. Use it when quotes are substantial and few, and when vertical room is short. It beats dots because the cut card is itself the scroll cue. Astral goes large: cards about 1060px wide, a corner notch of about 80px holding a pixel quote glyph, a duotone portrait and a 30/42 quote. CleanShot fixes a rating block at the top right and lets 480px cards overflow. Liquid AI uses a four-dash progress line with 36px arrows. Brilliant stacks five cards in depth, each neighbour tucked behind, smaller and fainter. Use `scroll-snap-type:x mandatory`, keep the arrows reachable, and never autoplay a rail of full sentences.

**Seen on** Astral, Brilliant, CleanShot X, Leo Cussen Centre for Law, Liquid AI, 11 sites in all. **Suits** bold-colour, warm-neutral, gradient-light, light-precision, dark-precision; saas, education, agency, devtool, ai.

<!-- v:section.testimonial/portrait-story-cards -->
### 13. Portrait story cards

*Feeling: real people, and you can see them.*

The photograph carries the card. Use it for consumer, health, education and nonprofit work, whenever the people are the story. Avoid it with stock photos, because this variant has nowhere to hide them.

Tana darkens the lower half of a 692px photo at radius 32 and sets a 28/36 serif quote at 85 percent white, with a small glass tag naming the language the person spoke. GiveDirectly uses 440px white cards with a 400px photo on top, a headline over a bottom gradient, then a 16/24 quote with the key figure bolded. Soundsensing's cards use site photographs of work actually being done, flush to a warm body, and they are a lesson for any trade: show the job, not the person smiling at the camera. Huel lays a frosted 12px blur panel across a 276 by 484 portrait's lower half. Talkspace steps a pastel block into the photo with 20px notches.

**Seen on** Soundsensing, Tana, Codecademy, GiveDirectly, Talkspace, 8 sites in all. **Suits** photo-led, light-precision, mono-technical, soft-pastel, warm-neutral; saas, health, education, nonprofit, ecommerce.

<!-- v:section.testimonial/mixed-proof-mosaic -->
### 14. Mixed proof mosaic

*Feeling: a scrapbook of good news.*

Different kinds of proof in one rhythm: portraits, award marks, press mastheads, a product in the hand. It works when you have several weak signals that add up, since variety reads as abundance. Function runs four 288px columns, 32px gap, radius 12, alternating cream cells holding a magazine award with dark portraits carrying a white 16/600 line. Copilot places a tall 416px phone photo at the centre of three columns with review cards offset each side, under a heading built from the rating itself. Keep one tile recipe, the same radius and gap throughout, and let only the contents change. Otherwise it is a sample book.

**Seen on** Function Health, Copilot, Otter, Sword Health, Synthesis. **Suits** gradient-light, warm-neutral, soft-pastel, bold-colour; health, finance, saas, education.

<!-- v:section.testimonial/video-testimonials -->
### 15. Video testimonials

*Feeling: they said it out loud.*

A person on camera is hard to fake, so video carries weight text cannot. Use it when you have real footage, however rough. Ro's clips are phone selfies at 217px with 4px gaps and a small name pill, beside `3,000,000+` set at 72px, and they are far more convincing than studio film. Noom shows a mosaic of about 20 stills under one 120px play button. Amplitude uses three 375px portrait cards at radius 4 with a 22px outcome sentence and a 64px outlined play ring, the active card tinting navy and filling its button white. Always show a real poster frame, and add captions.

**Seen on** Amplitude, Bauhaus Clock, Mirim, Noom, Ro. **Suits** light-precision, warm-neutral, photo-led; saas, health, agency.

<!-- v:section.testimonial/press-quotes -->
### 16. Press quotes

*Feeling: somebody independent said so.*

A journalist's line beats a customer's for a consumer product. Use it only with real coverage. Analogue's outlined cards are the model: 332 by 294 at radius 18, the score large at top left, the publisher's mark at top right, a short line low, and a rail running off both edges. Numbers lead because a score needs no reading. Work & Co puts one 20px line under its headline in place of a subhead, with the mark hung and the attribution indented. Twilio cards analysts instead, with a 48px multiplier and the middle card in solid red. Keep each outlet in its own letterforms, and link each line to the article.

**Seen on** Analogue, Work & Co, VanMoof, Twilio, Wealthfront, 10 sites in all. **Suits** light-precision, bold-colour, render-3d, photo-led, dark-precision; ecommerce, agency, devtool, finance, saas.

<!-- v:section.testimonial/verified-review-cards -->
### 17. Verified review cards

*Feeling: a public record, warts included.*

This is the right form for stores and local services, and the cheapest-looking when done badly. The difference is the platform. Nurx shows an independent score, a stars pill and a review count, a See all link, a rule, then three open columns on a tint with stars, a title, text of very different lengths, a tracked name and an italic date. It has no cards at all, and that is why it feels like a record. Copilot writes the rating into the heading, with a live count. Blue Bottle ties each review to a product thumbnail with Verified Buyer and the price.

Show dates. Keep one four-star review. Name the source, and only name a platform you can link to.

**Seen on** Blue Bottle, HealthyHer, Nurx, Brightland, Counter Culture Coffee, 18 sites in all. **Suits** warm-neutral, bold-colour, photo-led, soft-pastel, dark-precision; ecommerce, health, finance, local-business, food-drink.

<!-- v:section.testimonial/open-quote-columns -->
### 18. Open quote columns

*Feeling: a printed page of reviews.*

Quotes on the page in columns, with no cards. Nicole Heim runs three 427px justified serif columns at 20/25, attributions in a small sans after a dash, under a heavy 1.5px rule and about 100px of air. It looks like the back of a book jacket, which is exactly the right company to keep. Plausible's uneven 3 by 2 text wall feels gathered. Lemon Squeezy checkers 411 by 370 cells in two tones with no gaps. Magram's four 540px squares use hairlines alone. Use it for studios and text-led brands. Justify only in a serif with hyphens on, or rivers open up.

**Seen on** Nicole Heim Studio, Lemon Squeezy, Payload, Magram, Peloton, 8 sites in all. **Suits** dark-precision, light-precision, photo-led, bold-colour, type-led; agency, saas, devtool.

### Rare but good

These appear on only a few sites, and each can be the one memorable thing on a page.

<!-- v:section.testimonial/speech-shape-quotes -->
### 19. Speech shape quotes

*Feeling: overheard.*

The quote takes the form of talking. New Material uses a 640px white bubble, radius 28, soft shadow, with a small tail pointing at a 44px portrait carrying a company badge, in 26/34 grey. mymind scatters white capsules at radius 60 on a pink glow, with two shrinking circles trailing to a round avatar, so they read as thought bubbles. No quote marks at all, because the shape already says it. It needs short, informal lines, and it suits warm consumer brands. It fails on anything formal.

**Seen on** New Material, mymind. **Suits** light-precision, gradient-light; agency, saas.

<!-- v:section.testimonial/letter-or-interview -->
### 20. Letter or interview

*Feeling: one human, at length.*

Let a person keep talking. PostHog sets a 766px square paper card with a soft shadow, avatar, ruled heading, candid bullets and an inline button, and it reads as a note rather than a section. i-D splits the viewport with red hairlines into a cross and gives each question and answer a full screen. This is one of the best moves for a small company, since it costs nothing but honesty and no large competitor can match the voice.

**Seen on** i-D RED, PostHog Pricing. **Suits** expressive; culture, saas.

<!-- v:section.testimonial/drawn-mark-quote -->
### 21. Drawn mark quote

*Feeling: dry wit in a serious room.*

Vitsoe sets a quote between two rules, with a small label and a single red line drawing of lips in the left column, a five-column measure on the right, then a link. One small drawing replaces the avatar, the stars and the logo, and the page gains a personality it can afford. Commission or draw something specific. Do not reach for a stock icon.

**Seen on** Vitsoe. **Suits** light-precision; ecommerce.

<!-- v:section.testimonial/client-accordion-table -->
### 22. Client accordion table

*Feeling: a list of real relationships.*

Symbol Studio treats testimonials as a client list you can open. Full-width 108px rows on rules, project name in 15px caps at left, a 60px greyscale portrait with name and title at centre, and a 56px pale disc with an accent plus at right. Hover tints the row with an inset radius and blackens the disc. Every row is someone who could take a phone call, and the opener is the reader's choice. It suits agencies and consultancies.

**Seen on** Symbol Studio. **Suits** light-precision; agency.

<!-- v:section.testimonial/quote-beside-interaction -->
### 23. Quote beside interaction

*Feeling: others like you went this way.*

A review shares a row with something the reader can do. Hims pairs two 546 by 600 cards at radius 24: one a large question with stacked pill answers, the other a star row, a 44/48 quote and a member chip with a first name and age. Proof is one tap from the decision. Idea Bakery sets a quote beside a slowly turning object on a bright set. Keep any legal disclosure visible under the pair, as Hims does.

**Seen on** Hims, Idea Bakery. **Suits** photo-led, bold-colour; health, agency.

### Mistakes that cheapen a testimonial

Each of these appeared in my own first attempts or in the analysts' failure notes.

- **Equal lengths.** Three balanced two-liners read as written by one person, because they were. Vary length at least threefold, and keep one very short.
- **Tightening a wall to fit more.** My first masonry used 24px padding, 40px avatars and 15px text to fit more cards. It looked like a feed. Expo's is 16px text with 48px avatars and more air, and it looks like a gathering. Show fewer cards, more generously.
- **A stacked quote mark.** My first switcher put the mark above the quote, where it read as a decoration on top of a paragraph. In the original it hangs in its own column, so the quote holds a clean left edge.
- **A ghost shape that means nothing.** My first flood panel used a disc with no fill set, which rendered as a muddy grey circle, and even fixed it looked like a placeholder. The pale shape behind the quote must be the customer's actual mark.
- **Decorative quote glyphs.** A 120px pale mark in the corner of each card is a template fingerprint. Use a small solid mark, hang it, or use none.
- **Carousels with dots.** A quote behind a dot is a quote nobody reads. Silver sites use them about twice as often as gold ones. Use a rail with a visible cut card, or show the quotes.
- **Round avatars with no name you could find.** Initials, a real surname, or a role that could be checked all beat a stock face.
- **Stars with no source.** Five gold stars with no platform are a drawing of stars. Name the platform and the count, or remove them.
- **Polishing the voice.** Fixing a customer's casing and punctuation removes the reason to believe them.
- **Moving text you must read.** Keep marquee quotes under three lines and always give a way to stop.

## Logo wall

A logo wall must answer one question in one second: are people like me already here. Then it must get out of the way. It is the only section on the page that a visitor is meant to glance at and not read, so it has to be calm, exact and over quickly.

What separates great from cheap is optical care and honesty about scale. Great walls size marks by area so that nothing shouts, pick one treatment and commit to it, sit exactly on the page's grid, and often add one small idea: an arrow showing which logos have stories, one lit mark, a count. Cheap walls have `Trusted by` above five logos, all forced to one height, with one or two obviously heavier, in a strip floating off-grid. A long row of small unknown names is worse than none. If that is what you have, set them as type, or see [No famous customers](#no-famous-customers).

Measured ranges: logo height 24 to 44px, median 28, with marks flattened to one grey on about 60 percent of walls. Only 31 percent move, so a static wall is the normal choice and a marquee is the exception. 12 percent have no caption at all, rising to 19 percent on gold sites, because a good logo needs no introduction. When you do caption, make it a claim with a count in 12 to 15px, not a slogan.

For invented companies, build wordmarks with the recipe in [Logos and faces you do not have](#logos-and-faces-you-do-not-have). Size marks by area: about 20px tall for a 5:1 mark, 26 for 3:1, 36 for a square. Set `aria-label` on each logo, and `aria-hidden` on marquee duplicates.

<!-- v:section.logo-wall/masked-grey-marquee -->
### 1. Masked grey marquee

*Feeling: a quiet stream of companies.*

The default moving wall. One row of marks, flattened to one grey, drifting inside a window whose ends fade. It shows many names in little height. Use it when you have over ten logos and want a light touch. Avoid it with five logos, which will visibly repeat within a screen, and on serious finance or health pages where drift can feel flippant.

Set marks 24 to 32px tall with 56 to 100px gaps, in a 960 to 1320px window, not full bleed, so that the fade happens inside the page. CleanShot's 1192px strip uses a 15px caption, 30px marks in flat mid grey and about 100px gaps. Better Auth takes only 60px of height with an 11px mono label right-aligned on a hairline. Inngest adds a 6px coral dot to most logos, which lifts it from a stock strip. GitHub adds a 32px pause circle.

**Seen on** Better Auth, CleanShot X, Devin Desktop, Inngest, Lithic, 28 sites in all. **Suits** light-precision, gradient-light, dark-precision, type-led, mono-technical; devtool, agency, saas, ai, finance.

```css
.mq{width:min(1192px,100% - 48px);margin-inline:auto;overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);
  mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.track{display:flex;width:max-content;animation:drift 42s linear infinite}   /* two identical .set blocks */
.set{display:flex;align-items:center;gap:96px;padding-right:96px;color:var(--ink-3)}
.mq:hover .track{animation-play-state:paused}
@keyframes drift{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.track{animation:none}}
@media(max-width:700px){.mq{width:100%}.set{gap:56px;padding-right:56px}}
```

Grey at `--ink-3` fails contrast checks and that is acceptable for logos, provided each has an accessible name.

<!-- v:section.logo-wall/opposing-double-marquee -->
### 2. Opposing double marquee

*Feeling: a busy exchange.*

Two rows moving opposite ways, which turns a list into texture. Use it when the list is long and you want it to feel like a section. Customer.io runs two rows of 290 by 77 ruled white cells in a 1256px frame, with a 36px pale strip between them carrying the count, and some cells wear a small `case study +` chip. Soundsensing lets raw black logos sit 150px apart with no boxes, and fades them inside the container. Vayne keeps logos at 70px tall so that the client list becomes spectacle. Struck frames each row in nested brackets, tagged by a peach chip.

**Seen on** Customer.io, Lightspeed, Soundsensing, Russell & Stellar, Struck, 8 sites in all. **Suits** photo-led, light-precision, warm-neutral, gradient-light, bold-colour; saas, other, food-drink, ai, devtool.

<!-- v:section.logo-wall/flattened-grey-logos -->
### 3. Flattened grey logos

*Feeling: an unbothered footnote.*

The plainest wall. Static marks in one grey, a row or a 6 by 2 grid. It gets a low quality score on purpose: it is the correct choice when the neighbours need the attention and a poor one when it is your only proof. Cal.com flattens 12 marks to about 40 percent ink at about 24px optical height. Decagon goes fainter, on a tint, so the panel above keeps the eye. Sierra and Cognition stretch to 30 marks and let volume argue. Normalise optically, align to the grid, and leave an incomplete last row open rather than padding it.

**Seen on** Cal.com Pricing, Cognition, Decagon, Intercom Contact, AuthKit, 24 sites in all. **Suits** light-precision, warm-neutral, bold-colour, dark-precision, type-led; saas, devtool, ai, finance, education.

<!-- v:section.logo-wall/full-strength-mono-logos -->
### 4. Full strength mono logos

*Feeling: nothing to prove.*

Solid ink, no greying, no caption. Greying says these are background. Full strength says these people chose us. Use it when the names are strong. Vercel sets six in black, 30px tall, justified along the base of the hero, and they are its only imagery. Asana sets a 30px claim left and five logos across the rest. Framer clusters eight white logos in a tight 575px block with a void on all sides, which is the most confident wall in the corpus. Resend uses a 6 by 2 grid in pure white at 28px optical height, under a sentence rather than a label.

**Seen on** Amplitude, Asana, Attio Pricing, Framer, Resend, 12 sites in all. **Suits** light-precision, dark-precision, gradient-light, photo-led, bold-colour; saas, devtool, ai.

<!-- v:section.logo-wall/full-colour-on-rails -->
### 5. Full colour on rails

*Feeling: real companies, in their own colours.*

Marks keep their brand colours and sit precisely on the page's lines. Colour reads as real, since a faker greys everything. It takes a grid to hold it, or it turns to confetti. Stripe's seven logos sit about 22px high at 172px centres in a 72px band between hairlines, aligned to the page rails. Its product pages place 4 by 2 marks exactly in the drawn column lines, about 100px apart. Loops runs eleven 22px colour logos in one row with a small `More` link and no caption. Keep them under 40px, and use it on a page light enough to absorb the colour.

**Seen on** Loops, Stripe, Stripe Atlas, Stripe Billing, Stripe Connect, 9 sites in all. **Suits** gradient-light, light-precision, warm-neutral, mono-technical, photo-led; finance, saas, devtool, brand.

<!-- v:section.logo-wall/ruled-cell-grid -->
### 6. Ruled cell grid

*Feeling: a directory, or a stock ticker.*

Logos held in a shared table, so they read as data. Rules stop mismatched logos fighting, since each gets an identical room. Use it on structured, precise pages. Greylock's is 5 by 4 at 275 by 129, no card shells, and hover draws a 2px accent edge along the cell's foot over 150ms. Speakeasy replaces the caption with a serif phrase in the first cell at 32px. LiveKit compresses the idea to one 66px strip of six cells, with a two-line label in the first. Basement dots its cell outlines. On phones go to two or three columns, and shrink marks so none is cut by its cell, which my first strip was.

**Seen on** Greylock, LiveKit, Speakeasy, Vercel Customers, Vite, 11 sites in all. **Suits** dark-precision, light-precision, bold-colour, photo-led, render-3d; devtool, finance, saas, architecture, portfolio.

```css
.strip{border-block:1px solid var(--line)}
.in{max-width:1280px;margin-inline:auto;display:grid;grid-template-columns:repeat(6,1fr);border-left:1px solid var(--line)}
.c{height:66px;display:grid;place-items:center;border-right:1px solid var(--line)}
.c.label{place-items:center start;padding-left:16px;font-size:13.5px;line-height:18px;color:var(--ink-2)}
@media(max-width:900px){.in{grid-template-columns:repeat(3,1fr)}.c.label{grid-column:1/-1;height:52px;border-bottom:1px solid var(--line)}}
@media(max-width:560px){.in{grid-template-columns:1fr 1fr}.c .wm{--wm:18px}}
```

<!-- v:section.logo-wall/linked-cell-grid -->
### 7. Linked cell grid

*Feeling: a wall that lets you in.*

The same table, but a logo with a written story wears a small arrow. This turns the wall from a claim into navigation, and it scored highest of any logo wall, because it answers the reader's next thought: who, and how. Use it whenever you have even a few stories. About half the cells should link, since a uniform arrow on every cell means nothing.

Attio is 5 by 2 at about 278 by 97, logos at 28px in near-black, arrows in the top right corner. Exa is 6 by 2 at 213 by 124 on stark lines. Ramp ends the grid with a dark 327px tile holding a portrait and a large figure, which puts a person inside the wall. Svix stops its verticals at half height and pins corners with small hexagons.

**Seen on** Attio, Exa, Ramp, Svix. **Suits** light-precision; saas, ai, finance, devtool.

```css
.grid{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
.c{position:relative;height:96px;display:grid;place-items:center;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:background .15s}
a.c:hover{background:var(--surface)}
a.c::after{content:"↗";position:absolute;right:11px;top:7px;font-size:13px;line-height:1;color:var(--ink-3);transition:transform .15s,color .15s}
a.c:hover::after{color:var(--ink);transform:translate(1px,-1px)}
@media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}.c{height:88px}}
```

<!-- v:section.logo-wall/filled-logo-tiles -->
### 8. Filled logo tiles

*Feeling: a shelf of equal objects.*

Each mark in its own filled tile. A tile gives a weak logo the same presence as a strong one, and clashing marks calm down inside it. Use it when logos vary wildly, or when you want the wall to have mass. Baseten's 218 by 106 tiles sit 12px apart in a pale tone, with a few tinted in accents, and the wall climbs into the hero art. Spring/Summer sets 172 by 112 tiles at radius 3, in a tone only just off its page. Stripe Sessions packs 174px dark squares 2px apart into one solid block, with a glow rising from a tile's edge on hover. For motion, Meridian and Symbol Studio run 200px tiles as a marquee, and Daylight fits cream pills to each logo's width.

**Seen on** Baseten, Stripe Climate, Stripe Sessions, Notion About, Biome, 18 sites in all. **Suits** gradient-light, light-precision, bold-colour, illustrated, expressive; agency, finance, devtool, ai, saas.

```css
.grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}
.t{height:106px;display:grid;place-items:center;background:var(--surface);color:var(--ink)}
.t.a{background:color-mix(in srgb,var(--accent) 22%,var(--bg))}  /* two or three, scattered, never a pattern */
@media(max-width:900px){.grid{grid-template-columns:repeat(3,1fr);gap:8px}.t{height:84px}}
@media(max-width:520px){.grid{grid-template-columns:repeat(2,1fr)}}
```

<!-- v:section.logo-wall/one-lit-logo -->
### 9. One lit logo

*Feeling: the wall is awake.*

A grey wall where exactly one mark is in full colour, moving on a timer or as it passes centre. It costs almost nothing and removes the deadness of a static band. Sierra's 5 by 6 grid sits at about 35 percent grey, with one logo cycling to full colour. Monark's marquee brightens the logo nearest centre to full white. Keep the change slow, about 1.5 seconds, and let the set finish before it repeats.

**Seen on** Monark Markets, Sierra. **Suits** dark-precision, photo-led; finance, ai.

<!-- v:section.logo-wall/logos-as-controls -->
### 10. Logos as controls

*Feeling: the trust row does a job.*

The marks do something. Buildkite shows logos at 40 percent with one in full white, and a 2px underline fills beneath it as a timer before the page swaps to that customer's story. Talkspace puts white insurer logos under a price line, so the reader picks their insurer and proof becomes the first step of signing up. MetaLab stacks client names as pills at the screen's left edge that open the work. Use it whenever a logo could be a choice.

**Seen on** Buildkite, Talkspace, MetaLab. **Suits** light-precision, soft-pastel, render-3d; devtool, health, agency.

<!-- v:section.logo-wall/logos-inside-another-block -->
### 11. Logos inside another block

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

**Seen on** International Magic, Brilliant, New Material, Revena, Svelte, 6 sites in all. **Suits** light-precision, warm-neutral, bold-colour, render-3d, photo-led; agency, education, saas, devtool.

<!-- v:section.logo-wall/few-logos-big-room -->
### 12. Few logos, big room

*Feeling: a short list of serious partners.*

Three to five marks with an enormous amount of space. Scarcity reads as selection, and this is the right wall for a small client list. Nuro centres five black marks on a 230px pitch in a 420px tall panel at radius 32, and the empty padding gives each partner its weight. Apptronik sets five grey-white marks in a 300px black tile. One Medical shows three 150px marks in brand green. Paddle sets 40px black wordmarks on a flat 217px sand band, cut by the viewport with no fade. Athletics recolours nine logos to one ink on lime.

**Seen on** Nuro, Apptronik, Athletics, CMBLU, ClickHouse, 12 sites in all. **Suits** bold-colour, warm-neutral, photo-led, light-precision, type-led; brand, agency, health, other, devtool.

<!-- v:section.logo-wall/press-masthead-row -->
### 13. Press masthead row

*Feeling: as read in the papers.*

Mastheads have their own beautiful letterforms, so keep them. Use real coverage only. Function runs six in dark grey at about 34px, with a tiny mono `PAUSE MOTION` control. Noom places small red diamonds between marks at a 170px pitch. Heart & Soil sets them on a cream band at the fold in grey-green ink, so they look printed on the paper. For a small business, one line of real local press is stronger than this row, as Bakstad shows.

**Seen on** Function Health, Heart & Soil, Noom, GiveDirectly, Jurafuchs, 6 sites in all. **Suits** warm-neutral, photo-led, dark-precision; health, local-business, nonprofit, education.

<!-- v:section.logo-wall/award-and-seal-row -->
### 14. Award and seal row

*Feeling: a shelf of medals.*

Recognition as objects. Isolabella's two rows of 56px wine medals are the only saturated element on a quiet page, and they carry the whole proof. Bear redraws its awards as grey laurels with the award and year set inside, in its own illustration language. Revolut leaves third-party colour intact with short captions. Keep each award to its name and year. If you have just one, make it large and give it a sentence, since a lonely badge in a row looks like a gap.

**Seen on** Revolut, Bear, Isolabella della Croce, lorisbukvic.graphics. **Suits** photo-led, illustrated, render-3d; finance, saas, food-drink, portfolio.

<!-- v:section.logo-wall/compliance-seals -->
### 15. Compliance seals

*Feeling: the serious part, handled.*

Trust as plain fact, which buyers in regulated fields look for first. Redraw everything as one family, because supplied badges are a jumble of clip art. Wispr Flow sets three 106px circles with a hairline green ring, a large faint engraved icon, and the standard's name over it. Customer.io runs five 103px ruled cells with 32px line icons directly above its footer. Tana states status in plain words inside 36px chips, including what is not finished. Only claim what you hold.

**Seen on** Customer.io, Tana, Wispr Flow, Sierra. **Suits** light-precision, warm-neutral, photo-led; saas, ai.

<!-- v:section.logo-wall/typeset-client-names -->
### 16. Typeset client names

*Feeling: a list of work, not a list of trophies.*

Names as type, with no logos. This is the most useful wall for a business with no famous customers, because a good typeface gives a local bakery and a global brand the same dignity. Ueno runs three rows of 51px serif at 120px height, split by rules, with 18px hollow circles between names, rows sliding opposite ways. George Hatton lists 32 clients alphabetically in one column, where Prada and a small gallery weigh the same. ACME lists cities in tiny hairline cells under a large claim. Sort alphabetically and leave the small names in, because the mix is what makes it believable.

**Seen on** ACME, Ueno, George Thomas Hatton, Design by Illia, Good Design Awards Week. **Suits** type-led, warm-neutral, bold-colour; agency, ecommerce, portfolio.

```css
.names{border-block:1px solid var(--line);overflow:hidden}
.row{height:120px;display:flex;align-items:center;font:500 52px/1 var(--font-display);letter-spacing:-.02em}
.row+.row{border-top:1px solid var(--line)}
.t{display:flex;width:max-content;animation:d 70s linear infinite}   /* names repeated twice inside .t */
.rev .t{animation-direction:reverse}
.t span{display:inline-flex;align-items:center;white-space:nowrap}
.t span::after{content:"";width:18px;height:18px;border:1.5px solid currentColor;border-radius:50%;margin:0 22px}
.names:hover .t{animation-play-state:paused}
@keyframes d{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.t{animation:none}}
@media(max-width:700px){.row{height:76px;font-size:32px}.t span::after{width:12px;height:12px;margin:0 14px}}
```

<!-- v:section.logo-wall/customers-as-product-objects -->
### 17. Customers as product objects

*Feeling: they are already in here.*

Show customers as the thing your product makes. Expo shows a row of 40px real app icons, because its customers ship apps, under a mono line of counts. Hugging Face reuses its real organisation card at 240 by 56, with logo, name, plan pill and truncated stats. Tana shows full-colour icons because each one names a place the product works. Colour stays, since these are objects rather than logos. If your product has a unit of content, use it here.

**Seen on** Expo, Tana, Hugging Face, Now Code. **Suits** light-precision, dark-precision; devtool, saas, ai.

### Rare but good

<!-- v:section.logo-wall/tiered-sponsor-grid -->
### 18. Tiered sponsor grid

*Feeling: a public ledger of who pays.*

Cell size encodes tier, which is honest and useful for open source and events. Vite runs 3-up at 180px, then 5-up at 88px, with a 12px mono label per tier, and leaves unfilled cells empty so the grid stays true. Nuxt uses one bordered table with small tier chips. Vue ends in a faint cell inviting you in. Drizzle scales tiles from 110 by 135 down to logos alone.

**Seen on** Vite, Drizzle, Nuxt, Vue. **Suits** dark-precision, light-precision; devtool.

<!-- v:section.logo-wall/logos-plus-rating -->
### 19. Logos plus rating

*Feeling: two kinds of proof in one row.*

Attach a score to the logos. Mixpanel runs a ruled 120px row with a fixed review-site cell beside a clipped logo marquee. Fundrise sets grey marks each above tan stars, with a small underlined disclosure. Sweeply puts one rating line under its marquee. Name the source and date.

**Seen on** Fundrise, Mixpanel, Sweeply. **Suits** gradient-light, warm-neutral; saas, finance.

<!-- v:section.logo-wall/logo-wall-with-a-joke -->
### 20. Logo wall with a joke

*Feeling: a company with a sense of humour.*

Only where the brand already jokes. PostHog builds a two-column table of colourful against sleek logos with a swap button. Sentry's drawn UFO casts a beam on each logo as it passes. The joke makes the wall memorable. Keep every logo fully legible, because the joke is about the list, never at the customer's expense.

**Seen on** PostHog, Sentry, Benzo. **Suits** illustrated, expressive; saas, devtool, portfolio.

### Mistakes that cheapen a logo wall

- **One height for every logo.** This is the most common error, and it makes wide marks shout. Size by area.
- **One typeface for invented names.** Twelve names in one font is a list, not a wall. Change width, weight, case and voice.
- **A corner tick where an arrow should be.** My first linked cells used a little L shape, which read as a crop mark. Use a real ↗ glyph, small and in `--ink-3`.
- **Logos too small in a strip.** My first ruled strip used 18px marks, and it looked timid next to LiveKit's. At 66px tall a mark can be 22 to 24px.
- **`Trusted by` as decoration.** Say who and how many, or remove the caption.
- **Marquee with too few logos.** If the same logo appears twice on screen, go static.
- **Greying to hide weakness.** Greying does not make small logos look bigger. If they are not recognised, set their names as type and say what you did for them.
- **Full-bleed fades on a contained page.** Keep the fade inside the container unless the row truly runs to the viewport edge. Paddle's hard crop with no fade is also fine, and braver.
- **A wall nobody asked for.** Three grey marks on a local business page look like an apology. Replace it with a fact strip.

## Stats

A stat must surprise someone, and be true. A number you would expect teaches nothing, and a number with no owner, period or source reads as a slogan. A row of four big numbers is one of the most faked sections on the web, so your job is to make these look measured.

What separates great from cheap is what the number is attached to. Great stats say what was counted, when and for whom, and they sit on a real grid with tabular figures and tight tracking. They mix a number with a word where a word is more honest. Cheap stats are `25+ Years`, `1,200+ Clients`, `98% Satisfaction`, with an icon each, in a centred row, counting up from zero. Round numbers and plus signs are the fingerprint. An exact `3,180` beats `3,000+`.

Measured ranges: numerals 38 to 56px, median 48, at weights spread from 300 to 700, with captions 13 to 16px. Use `font-variant-numeric:tabular-nums lining-nums`, because old-style figures look wrong at display size. Set tracking from -3 to -6 percent. Weight numbers do not transfer between faces: Stripe's 300 is sturdy, and mine at 300 looked spindly until I went to 400. Judge the stem, not the number.

<!-- v:section.stats/open-numeral-columns -->
### 1. Open numeral columns

*Feeling: stated, not sold.*

Numbers on the page grid with nothing around them. If your type and spacing are good, this is enough. Vercel AI SDK sets four left-aligned columns on the same 354px pitch as its feature row, numerals 48/56 at 450 with about -6 percent tracking, a 14px label 12px below, and about 200px of clear space above. Brex reverses the stack, with a 24px label over a 48px numeral, so each stat reads as a claim. Stripe Connect hangs a blue tick on the page's guide beside each figure. Amplitude sets them as chart footnotes. Reach for an accent only if the numerals are few.

**Seen on** Vercel AI SDK, Amplitude, Linear Customers, Stripe Connect, Brex, 15 sites in all. **Suits** light-precision, soft-pastel, photo-led, dark-precision, illustrated; finance, health, saas, other, devtool.

<!-- v:section.stats/rule-bound-numerals -->
### 2. Rule-bound numerals

*Feeling: a page from an annual report.*

Each column or the whole row hangs from a hairline, which gives figures something to stand on without a box. Modern Treasury uses three 368px columns, 48px gaps, each topped by its own grey rule, with a light figure at about 47px. Increase sets mono numerals centred between full-bleed hairlines with 120px padding. Stripe's home page sets four stats between two hairlines with one dark and the rest grey, and a short blue segment rides the rule above the active one. Magram uses cream 96px percentages on navy, which is the variant to take when your numbers describe the problem and not you. Note the mix of words and digits on Modern Treasury's third column.

**Seen on** Stripe, Increase, Modern Treasury, Stripe Customers, Magram, 9 sites in all. **Suits** light-precision, gradient-light, mono-technical, expressive, bold-colour; finance, agency, devtool, portfolio, brand.

```css
.band{background:var(--ink);color:var(--bg);padding:48px 0 112px}          /* or any deep ground */
.r{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;max-width:1104px;margin-inline:auto}
.c{border-top:1px solid color-mix(in srgb,currentColor 20%,transparent);padding-top:20px}
.c b{display:block;font:600 96px/1 var(--font-display);letter-spacing:-.03em;font-variant-numeric:lining-nums}
.c p{margin-top:18px;font-size:18px;line-height:26px;opacity:.7}
.c cite{display:block;margin-top:10px;font-style:normal;font-size:13px;line-height:18px;opacity:.6}  /* always a source */
@media(max-width:860px){.r{grid-template-columns:1fr;gap:32px}.c b{font-size:64px}}
```

<!-- v:section.stats/ruled-stat-cells -->
### 3. Ruled stat cells

*Feeling: an instrument panel.*

Figures in a shared table. It is the most reliable stats form on precise pages, and it stacks into two columns on phones with no redesign. Stripe Billing runs four 316px cells rail to rail, 1px rules, about 180px tall, 40px top padding, under a two-tone heading. Baseten uses left rules only, with a mono label. Sourcegraph sets three cells at 64px between strips of grey square pixels, with a dagger on each caption. Forma24 packs four cells into a 114px bar with the label baseline-aligned beside the numeral.

**Seen on** Baseten, Sourcegraph, Stripe Billing, Telkom-OT, Auth0, 12 sites in all. **Suits** light-precision, dark-precision, mono-technical, gradient-light, warm-neutral; ai, devtool, finance, other, architecture.

```css
.cells{display:grid;grid-template-columns:repeat(4,1fr);border-block:1px solid var(--line)}
.c{padding:40px 16px 34px;border-left:1px solid var(--line);min-height:180px}.c:first-child{border-left:0}
.c b{display:block;font:400 48px/1 var(--font-display);letter-spacing:-.04em;font-variant-numeric:tabular-nums lining-nums}
.c span{display:block;margin-top:14px;font-size:16px;line-height:22px;color:var(--ink-2);text-wrap:balance}
@media(max-width:860px){.cells{grid-template-columns:1fr 1fr}.c{padding:28px 16px;min-height:0}.c:nth-child(odd){border-left:0}
  .c:nth-child(n+3){border-top:1px solid var(--line)}.c b{font-size:36px}}
```

<!-- v:section.stats/figure-ledger -->
### 4. Figure ledger

*Feeling: an accountant's page, in good type.*

Stats as stacked rows beside a heading. It gives each number room for a sentence, which most stat forms deny it. Use it for two to four figures that need explaining. Devin Desktop sets a 40px two-tone heading left and a 600px column right, rows 160px tall on hairlines, a 64/400 figure, then a right-aligned 16px label over a 12px mono note saying what the number means. Speakeasy runs this on a dark band, each row closing with a customer's logo and a sentence. Slack right-aligns numerals to one axis and left-aligns captions beside it, so the columns meet at a seam.

**Seen on** Devin Desktop, Speakeasy, Slack, Sidekick. **Suits** light-precision, type-led; ai, devtool, saas, agency.

```css
.wrap{display:grid;grid-template-columns:1fr 600px;gap:48px}
.l{border-top:1px solid var(--line)}
.r{display:flex;align-items:center;justify-content:space-between;height:160px;border-bottom:1px solid var(--line);gap:24px}
.r b{font:400 64px/1 var(--font-display);letter-spacing:-.04em}
.m{text-align:right}.m span{display:block;font-size:16px;line-height:24px}
.m small{display:block;margin-top:14px;font:400 12px/16px ui-monospace,monospace;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
@media(max-width:900px){.wrap{grid-template-columns:1fr}.r{height:120px}.r b{font-size:48px}}
```

<!-- v:section.stats/customer-attributed-numbers -->
### 5. Customer-attributed numbers

*Feeling: their result, not our claim.*

Each number belongs to someone. This is the most persuasive stat form in the corpus, because it combines three tells at once: a name, a figure and a link. Loops sets three 275px columns under a hairline: logo, 42px serif numeral, 15px descriptor and a grey story link. It carries no quotes at all, and it does not need them. Vercel's sales page uses five rows beside its form, a 24px logo at the left, then a bold figure and a grey rest of phrase. Decagon fills 268px tiles with each customer's own colour, the one saturated moment on the page. Make crosses a 1px line behind a portrait at 384 by 500. Stripe's customers page writes a small figure over a line naming the company.

**Seen on** Loops, Vercel Contact Sales, Decagon, Make, Twilio. **Suits** warm-neutral, light-precision, soft-pastel, gradient-light, dark-precision; saas, devtool, ai.

```css
.cols{display:grid;grid-template-columns:repeat(3,1fr);gap:40px}
.c{border-top:1px solid var(--line);padding-top:16px}
.c .wm{--wm:21px;height:32px}
.c b{display:block;font:400 42px/1.1 var(--font-display);letter-spacing:-.02em;margin-top:6px;font-variant-numeric:lining-nums}
.c p{font-size:15px;line-height:22px;margin-top:6px}
.c a{display:inline-block;font-size:14px;color:var(--ink-2);margin-top:14px;transition:color .15s}.c a:hover{color:var(--ink)}
@media(max-width:760px){.cols{grid-template-columns:1fr;gap:32px}}
```

<!-- v:section.stats/stat-tiles -->
### 6. Stat tiles

*Feeling: small dashboards.*

Filled tiles, one figure each, when the numbers need more explanation than a caption. Levels gives the model: three near-black tiles about 380 by 285, a 64px numeral in a pale tint, then a 22px subject, then a 13px sentence, and below the row a plain line stating the method and its limits. That three-step ladder of figure, subject and explanation is what lifts it above a stat card. Nx lets one numeral contain a blue arrow, drawing the change. Buffer publishes its real business figures in plain bordered tiles beside a link to a live dashboard, and that openness is the proof. Avoid an icon in a circle above the figure, which is the single most common generated section.

**Seen on** Levels, Soundsensing, Buffer About, GoCardless, Nike Better World, 11 sites in all. **Suits** light-precision, dark-precision, photo-led, soft-pastel, bold-colour; devtool, saas, finance, health, brand.

<!-- v:section.stats/staggered-stat-cards -->
### 7. Staggered stat cards

*Feeling: numbers falling through the page.*

Cards stepped so the background shows between them. It breaks the row, and it suits a page with art to reveal. Exa's outlined, near-square cards descend from left to right, so a stipple of dots falls through the gaps, with mono numerals, a large caps unit, and two live counters. Sword's 416 by 162 white cards at radius 32 sit in two columns with the second 64px lower. Daylight overlaps three translucent cards diagonally beside a photo.

**Seen on** Exa, Daylight, Sword Health. **Suits** light-precision, gradient-light, soft-pastel; health, ai.

<!-- v:section.stats/colour-band-numerals -->
### 8. Colour band numerals

*Feeling: the page takes a breath in colour.*

A full-bleed flat band in a deep brand colour with big white figures. It is the classic form and, without care, a generic one. It works when the band is the page's only flood and the colour belongs to the brand. Slack's aubergine band uses three numerals of about 80px with 24px captions carrying superscript references. Peloton sets condensed caps, number in white and unit in green, like signage. Calvyn mixes words with figures. Betterment runs a marquee of 413 by 182 pale cards on navy. Superscript units at half size look far better than full-size symbols.

**Seen on** Betterment, CITADEL Construction Group, Calvyn, Canary, Hinge Health, 12 sites in all. **Suits** bold-colour, warm-neutral, light-precision, gradient-light, illustrated; saas, education, finance, architecture, health.

<!-- v:section.stats/number-as-diagram -->
### 9. Number as diagram

*Feeling: you can see the difference before you read it.*

The figure is drawn, so the reader takes it in before reading it. It is the highest form of stat, because a picture at true scale cannot be vague. Wispr Flow sets a 170px panel for typing speed beside a 988px film for speaking speed, and the width is the argument. Driftime's bars sit on the page grid at true height, with labels inside. Supabase spells its star count in a dot grid that fades at the edges. Attio sweeps one 1px curve across a whole cell beside four ticked figures. Plvs Ultra counts circles and strikes them through. Remote nests four L-shaped lines, each corner holding a figure. Keep the scale honest. Lyra's rounded chart tiles show how to do this softly.

**Seen on** Stripe Payments, Wispr Flow, Attio, Function Health, Lyra, 13 sites in all. **Suits** gradient-light, warm-neutral, light-precision, photo-led, type-led; finance, saas, health, devtool, agency.

```css
/* Width encodes the value. --s is each value's share of the total: 45 and 220 give .17 and .83.
   Do not use flex-grow: padding is added on top, so the widths stop being in ratio. */
.race{display:flex;gap:8px;height:340px}
.race>div{flex:0 0 calc((100% - 8px)*var(--s));min-width:0;border-radius:48px;padding-block:32px;display:flex;flex-direction:column;align-items:center}
.race b{font:400 48px/1 var(--font-display);white-space:nowrap}
/* Too narrow for a true ratio across, so stack and scale to the largest. Labels may leave a short bar. */
@media(max-width:760px){.race{flex-direction:column;height:auto}
  .race>div{flex:none;width:calc(100%*var(--s)/var(--max));height:88px;border-radius:24px;padding:12px 16px;align-items:flex-start}}
```

For a dot matrix, draw on a canvas: a `5×7` bitmap for each digit, lit dots in `--accent` at 72 to 100 percent alpha, and field dots at up to 20 percent alpha fading with distance from centre. Derive the pitch from the width, `Math.min(14,Math.floor(width/(cols+4)))`, or the number overflows on phones as mine did. Set `role="img"` and an `aria-label` with the value.

<!-- v:section.stats/sentence-stats -->
### 10. Sentence stats

*Feeling: a statement with the numbers in it.*

Numbers inside sentences. It avoids the stat row entirely, and it is far more memorable. Expo sets centred lines at 64/600 with an 88px pitch: a figure, an inline object, a noun, with a last line fading to grey. Each object sits at cap height, in place of the word space. MVRDV writes its facts in 24px type split by a rule. Jurafuchs opens ordinary rows with a bold figure beside a phone.

**Seen on** Expo, Jurafuchs, MVRDV. **Suits** light-precision, warm-neutral, photo-led; devtool, education, architecture.

```css
.s{text-align:center;font:600 64px/88px var(--font-display);letter-spacing:-.04em}
.l{display:block}
.o{display:inline-flex;vertical-align:-.1em;margin-inline:.13em}   /* remove the word spaces around it */
.tag{height:.8em;padding:0 .22em;border-radius:3px;background:var(--accent);color:var(--bg);font:700 .72em/1 ui-monospace,monospace;display:inline-flex;align-items:center}
.av img{width:48px;height:48px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 3px var(--bg);margin-left:-12px}
.av img:first-child{margin-left:0}
@media(max-width:760px){.s{font-size:32px;line-height:48px}.av img{width:26px;height:26px;margin-left:-7px}}
```

<!-- v:section.stats/one-giant-number -->
### 11. One giant number

*Feeling: this one figure is the whole point.*

If you have one number that would stop someone, let it have a section. Checkout.com sets a figure at about 200px in a mono bold inside an outlined rounded card, with a 14px caption. Leo Cussen uses serif counters at 96px that roll like odometers on a yellow section. The Royal College of Art sets 130px white figures on full-bleed studio photographs, changing with scroll. DeepNode dims the next stat until it scrolls into place. Avoid four of these in a row.

**Seen on** Leo Cussen Centre for Law, Royal College of Art, Birdie, Checkout.com, Diego's Authentic Foods, 8 sites in all. **Suits** warm-neutral, photo-led, light-precision, dark-precision, expressive; education, food-drink, saas, finance, ai.

<!-- v:section.stats/numerals-on-photo -->
### 12. Numerals on photo

*Feeling: the number is about this place.*

Figures directly on an image. 1 Hotels insets a darkened flower photo by 100px, with 52px white numerals and 14px tracked labels in two columns. It fails if the photo does not relate to the number. Darken only under the type, or use the photo's own shadow. Headspace sets stars, numerals and floating avatars on a sky panel at radius 24.

**Seen on** 1 Hotels, Headspace, Ripple Health, Nritya Mohana, Onyx Coffee Lab. **Suits** expressive, photo-led, illustrated, warm-neutral; health, hospitality, education, food-drink.

<!-- v:section.stats/fact-strip -->
### 13. Fact strip

*Feeling: small promises, kept in a row.*

A thin band of facts, for businesses where a big number would feel absurd. Nurx's 80px strip on graph-paper peach sets three 24px/500 statements, each led by a 32px glyph, split by 32px black rules. It mixes figures with a plain promise, and that mix is why it feels true. Bellroy draws its own 64px line icons, which lifts a stock store promise. Khan Academy mixes the word free with figures. This is the best stats form for trades, clinics and local shops, and one real licence number outweighs any percentage.

**Seen on** Nurx, Ritual, Apptronik, Bellroy, Counter Culture Coffee, 8 sites in all. **Suits** photo-led, light-precision, bold-colour, warm-neutral, illustrated; ecommerce, health, brand, education.

```css
.strip{background-color:var(--surface);background-image:linear-gradient(color-mix(in srgb,var(--accent) 13%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--accent) 13%,transparent) 1px,transparent 1px);background-size:16px 16px}
.in{max-width:1288px;margin-inline:auto;height:80px;display:flex;align-items:center;justify-content:space-between;font:500 24px/1 var(--font-text);letter-spacing:-.012em}
.f{display:flex;align-items:center;gap:12px;white-space:nowrap}.f svg{width:30px;height:30px;fill:var(--accent)}
.in i{width:1px;height:32px;background:var(--ink)}
@media(max-width:900px){.in{height:auto;flex-direction:column;align-items:flex-start;gap:16px;padding-block:20px;font-size:18px}.in i{display:none}}
```

<!-- v:section.stats/rating-row -->
### 14. Rating row

*Feeling: the score, plainly.*

Named platform scores, usually low on the page near pricing. Cal.com's pricing page sets three units 40px apart: a 32px numeral, five 14px stars, a 13px source name. Fundrise puts press logos inside cream wreaths on a quiet 248px tan band, with a small disclosure. Do not use a rating you cannot link to.

**Seen on** Cal.com Pricing, Fundrise, Cash App. **Suits** light-precision, warm-neutral, bold-colour; finance, saas.

<!-- v:section.stats/inline-with-cta -->
### 15. Inline with CTA

*Feeling: mentioned in passing.*

Stats that get no section, tucked into the hero. Function sets three white stats over its film, split by 1px rules 58px tall, baseline-matched to the button. Storybook shares the call-to-action row. Vite pushes two light numerals into the header of its testimonial section. Copilot uses 32px pills straight under the subhead. Use it when numbers support a claim but are not the claim.

**Seen on** Function Health, Vite, Copilot, Storybook. **Suits** dark-precision, warm-neutral, gradient-light; devtool, health, finance.

### Rare but good

<!-- v:section.stats/benchmark-race -->
### 16. Benchmark race

*Feeling: run it yourself.*

The most honest proof there is: a test anyone can repeat. Bun lays out 3 by 2 cards, 1px rule, 16px gap, each a title, a one-line scenario, then four mono rows with a bar and a time, its own bold, a rule, then a pink multiplier and a memory figure. Below, a tiny line states machine, repeat count and method, with a link to reproduce it. Scores are rarely this believable. Use real data, and show the cases where you do not win by much.

**Seen on** Bun. **Suits** mono-technical; devtool.

<!-- v:section.stats/live-counter -->
### 17. Live counter

*Feeling: it is happening now.*

A number that visibly moves. charity: water pairs a large running count of people served with a map. Ramp runs a thin strip of live agent counts above its logos. Exa ticks two counters inside its cards. Use a real feed only. A fake ticker is easy to spot and very hard to forgive, so state the source and the reset point.

**Seen on** charity: water, Kata.ai. **Suits** photo-led, gradient-light; nonprofit, ai.

<!-- v:section.stats/stat-and-quote-mosaic -->
### 18. Stat and quote mosaic

*Feeling: numbers and voices together.*

Quote cells and metric cells share one rhythm. Noxus alternates wide quote cells with narrow metric cells, 1px border, a corner wash in blue or peach, 30px display text and a logo at the base. Cloudinary stacks figures in a tall card beside a 2 by 2 analyst grid. It suits a page that wants a single proof block rather than two sections.

**Seen on** Noxus, Cloudinary. **Suits** gradient-light, bold-colour; ai, devtool.

### Mistakes that cheapen stats

- **Padded numbers.** Round figures with a plus sign look guessed. Use the exact figure, a date and a small unit.
- **Weight copied across typefaces.** I copied a site's 300 and got a spindly number. Check the stem at size.
- **A caption that wraps by accident.** I set a narrow `max-width` on captions and every one broke onto two lines, where the original runs one line and only the long caption wraps. Let the column set the measure, with `text-wrap:balance`.
- **Spaces around an inline object.** In my first sentence stats the word spaces stayed, and the object floated apart from the line. It replaces the space. Then I removed too much and it touched the letters, so `.13em` of margin is about right.
- **A low inline object.** Align the object to cap height, not to the baseline.
- **Bars that are not to scale.** I built the speed comparison with `flex-grow`, and padding pushed the small bar far past its share. At phone width 45 and 220 came out nearly equal, which is a false chart in a section about honesty. Compute the shares, and stack when the ratio cannot fit.
- **Icon above every number.** A tinted circle, an icon, a number and a label, four times, is the generated default. Remove the icon first.
- **Counting from zero.** It delays the proof and it lies in any screenshot.
- **Four stats when you have one.** Three weak numbers dilute one strong one.
- **No period.** `Trusted by 2,000 teams` is undated. `2,140 teams, October 2026` is a fact.

## Case study

A case study must prove one claim with one customer: who they are, what changed and by how much, and then let a serious reader go deeper. On a homepage, its job is to make someone click. On an index page, its job is to let a reader find a company like theirs.

What separates great from cheap is that the headline is the result. Great modules read as a sentence with a number in it, on a real photo of the customer or real art in their colours, and the customer's logo is large. Cheap ones are three cards with a stock photo, a vague title such as `Empowering teams`, and `Read more`. Write each title as what happened, for example how one named company did a specific thing, or a metric first.

Measured ranges: radius 6 to 16, gap 12 to 24, card tiles at 4:3 or 16:10, titles 14 to 36px depending on form, result figures 22 to 48px. For an index, give the reader a way to filter: Linear, Webflow and Instrument all do it with plain text or pills, and 24 to 36px is the right control height.

<!-- v:section.case-study/story-index-rows -->
### 1. Story index rows

*Feeling: a serious client list.*

A customer page as a table, which is the highest form of restraint. It says you have too many stories for cards. Use it on index pages and whenever you have ten or more. Vercel's rows sit at a 96px pitch with no rules at all: a 14px company name, a two-line result, a grey logo, an 11px mono caps tag, and a right-aligned `READ STORY`. Hover fills the row, inset 8px from the page edges. Linear's tighter version is 56px rows on faint rules, and rows without a story link to the site instead, which is honest, then a final dim row invites your company. MetaLab Work uses 120px rows on black, with a thumbnail appearing on hover.

**Seen on** Linear Customers, MetaLab Work, Vercel Customers, Framer Customers. **Suits** dark-precision, light-precision; saas, agency, devtool.

```css
.row{display:grid;grid-template-columns:1.05fr 1.6fr .9fr 1fr .7fr;align-items:center;min-height:96px;margin-inline:8px;padding:12px 16px;
  font-size:14px;line-height:20px;color:var(--ink-2);transition:background .12s,color .12s}
.row:hover{background:var(--surface);color:var(--ink)}          /* no rules: space separates, hover shows the row */
.row b{font-weight:500;color:var(--ink)}
.mono{font:400 11px/16px ui-monospace,monospace;letter-spacing:.04em;text-transform:uppercase}
.you,.you b{color:var(--ink-3);font-weight:400}                 /* the last row: your company */
@media(max-width:860px){.row{grid-template-columns:1fr auto;gap:2px 16px;min-height:80px}.row .wm,.tag{display:none}.row .end{grid-row:1/3;grid-column:2}}
```

<!-- v:section.case-study/logo-tile-cards -->
### 2. Logo tile cards

*Feeling: a tidy wall of stories.*

Tiles led by the customer's mark. Use it on index pages when you lack strong imagery. Linear's 3-column grid mixes greyscale stills with flat brand-colour tiles at 16:10, each with a large white logo centred, a 15px title and a muted link below, and the mix of stills and colour keeps it alive. Figma uses pale 4:3 tiles with mono tag chips. Cursor is plainer still, at radius 4 on a warm tone. Keep titles below the tile, on the page ground.

**Seen on** Linear Customers, Cursor Blog, Eboca Empresas, Figma Customers, Supabase Customers. **Suits** warm-neutral, dark-precision, bold-colour, light-precision; saas, ai, local-business, devtool.

<!-- v:section.case-study/brand-poster-tiles -->
### 3. Brand poster tiles

*Feeling: each customer gets a poster.*

Every story gets art in that customer's own palette. It looks expensive, because it is, and it signals how much the company cares about each customer. Stripe Billing uses three 400 by 480 tiles at radius 6, a large centred mark, a small wordmark at the bottom left, then a two-line result and accent link on the page. Stripe's customers page stacks tinted photos as a collage in its hero. Chromatic uses solid colour with a stacked grey layer behind. Art must be art: patterned geometry, a real photograph or the mark on flat colour. My first attempt used a bare gradient on the middle tile, and it read as a missing image next to the real sky photo.

**Seen on** Stripe Billing, Stripe, Chromatic, Kleiner Perkins, Sanity Customers, 6 sites in all. **Suits** light-precision, dark-precision, gradient-light; finance, devtool, saas.

```css
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.t{position:relative;height:480px;border-radius:6px;overflow:hidden;color:#fff;isolation:isolate;display:grid;place-items:center}
.t .foot{position:absolute;left:20px;bottom:20px;font:600 15px/1 var(--font-text);letter-spacing:.06em;text-transform:uppercase}
.blueprint{background:var(--accent);background-image:linear-gradient(rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.14) 1px,transparent 1px);background-size:40px 40px}
h3{font:400 16px/22px var(--font-text);margin-top:16px;max-width:24em}
@media(max-width:860px){.g{grid-template-columns:1fr;gap:32px}.t{height:400px}}
```

<!-- v:section.case-study/logo-tabs-over-story -->
### 4. Logo tabs over story

*Feeling: a tour of customers, one at a time.*

The case study version of a tab switcher. Attio uses four 80px logo cells, the active one shaded, over a 50/50 split: a small caps sector label, then a 32px two-tone headline leading with a metric, pinned to the base, beside a photo running to the rails. Sailia lays a tab row under a 1376px photo with a progress line across the active cell. Cloudinary gives half the card to one large stat. Use a real photograph of that customer's world, as Attio does with a billboard.

**Seen on** Attio, Cloudinary, Sailia. **Suits** bold-colour, light-precision; saas, devtool.

<!-- v:section.case-study/expanding-story-strip -->
### 5. Expanding story strip

*Feeling: drawers, one open.*

One story open and the others folded to their logo. It holds many customers in one view and gives the open one real room. Supabase opens a 752 by 340 hot gradient card beside four 76px dark strips, and it is the page's one loud moment. Cal.com stacks rows: an open one with a halftone photo, white stat pills along its foot and a `Built with` line, over 80px closed rows with a 48px logo tile and a 24px headline. Slack widens the active of four video tiles to 580px.

**Seen on** Cal.com, Slack, Supabase. **Suits** light-precision; saas, devtool.

<!-- v:section.case-study/quote-media-split -->
### 6. Quote media split

*Feeling: a film and a statement, side by side.*

The strongest homepage module. One card, half media and half quote. Factory's is 1392 by 470, radius 12, split 60/40, with a co-brand lockup centred on a still, a 56px dark play disc with a mono label, and on the right a logo, a tight 36/36 quote, name, mono role, and two buttons pinned low. Ramp takes a taller form: a heading and link top left, a small hung quote pinned to the floor of the column, and a 690px tall media tile, which leaves a big deliberate gap. Zapier uses a serif quote with 48px orange metrics beside a sky plate.

Choose the photo for the lockup. It must be quiet where the type sits, because my first attempt used a busy bright skyline and the lockup vanished.

**Seen on** Factory, Ramp, Forma24, Framer Customers, Intercom Customers, 9 sites in all. **Suits** light-precision, dark-precision, warm-neutral, bold-colour, expressive; saas, devtool, ai, finance, agency.

```css
.s{display:grid;grid-template-columns:60fr 40fr;height:470px;border-radius:12px;overflow:hidden;background:var(--bg)}
.m{position:relative;overflow:hidden;color:#fff}.m img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.m::after{content:"";position:absolute;inset:0;background:rgba(8,12,16,.44)}     /* lockup must be the brightest thing */
.play span{width:56px;height:56px;border-radius:50%;background:#0d0d0d;box-shadow:0 0 0 1px rgba(255,255,255,.2)}
.t{padding:40px 36px 36px;display:flex;flex-direction:column}
.t blockquote{font:400 34px/36px var(--font-display);letter-spacing:-.022em;margin-top:32px;text-wrap:pretty}
.who span{display:block;font:400 12px/18px ui-monospace,monospace;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.btns{margin-top:auto;display:flex;gap:8px}
@media(max-width:900px){.s{grid-template-columns:1fr;height:auto}.m{height:260px}.t blockquote{font-size:27px;line-height:31px}.btns{margin-top:28px}}
```

<!-- v:section.case-study/story-bento -->
### 7. Story bento

*Feeling: a report on results.*

Different evidence in one object: a stat, a quote, a film, a logo. It scored highest of the case study forms. Jasper sets white cells on navy with 16px gaps: a 64px display figure over a 1px rule, a 17px caption and a logo foot, beside wide cells with a 227 by 243 inset portrait wearing stacked white and navy name tags. Exa pairs an 858px video with black-box captions, a white pane, a stat tile and a photo tile. Baseten sets a neon block beside a pale logo tile. Customer.io cuts a portrait onto a saturated hexagon chamfered at two corners, in a tint cell whose text is a dark version of the tint. Paddle joins cards 2px apart, with corners flaring into a small star at the junction.

**Seen on** Baseten, Customer.io, Exa, Jasper, Auth0, 8 sites in all. **Suits** light-precision, warm-neutral, bold-colour, dark-precision, gradient-light; ai, saas, devtool, finance.

```css
.m{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
.c{background:#fff;color:var(--ink);display:flex;flex-direction:column;min-height:268px}
.s{grid-column:span 3}.q{grid-column:span 6;display:grid;grid-template-columns:227px 1fr;gap:24px;padding:12px}
.fig{font:400 64px/1 var(--font-display);letter-spacing:-.03em;padding:12px 8px 12px 10px;border-bottom:1px solid currentColor}
.cap{padding:12px;font-size:17px;line-height:25px;flex:1}
.foot{border-top:1px solid currentColor;height:56px;padding:0 12px;display:flex;align-items:center;justify-content:space-between}
.pic{position:relative;overflow:hidden}.pic img{width:100%;height:100%;object-fit:cover}
.tag{position:absolute;left:12px;bottom:12px;display:flex;flex-direction:column;align-items:flex-start;font-size:14px;line-height:18px}
.tag b{font-weight:500;background:#fff;padding:7px 8px}.tag span{background:var(--ink);color:#fff;padding:7px 8px}
@media(max-width:900px){.s{grid-column:span 6}.q{grid-column:1/-1;grid-template-columns:1fr}.pic{height:300px}.fig{font-size:48px}}
```

<!-- v:section.case-study/full-bleed-project -->
### 8. Full-bleed project

*Feeling: the work speaks.*

One image, edge to edge, with almost no text. Use it for studios, film and anything with strong visuals. Nicole Heim breaks its own 32px margins with a 740px photo, a white 15/500 name over a mono line at the bottom left, no scrim or button. Greylock runs a candid founder photo rail to rail, its bottom third fading into the page grey, with a logo tile, a statement and founders' names on the fade. Stripe sets a 1232 by 530 aerial film under a logo tile and one-line claim, with fact columns beneath. Fantasy wipes each project up under the last.

**Seen on** Greylock, Nicole Heim Studio, Stripe, STUDIO UNLMTD, Fantasy. **Suits** light-precision, photo-led, gradient-light, type-led, render-3d; agency, finance.

<!-- v:section.case-study/photo-overlay-story-cards -->
### 9. Photo overlay story cards

*Feeling: the customer's world, tinted to your page.*

Darkened customer photos with a large logo. Tinting unifies mismatched photography. Vapi sets two 575 by 400 tiles 2px apart with a white logo, a result line and a glass button. Framer's black cards at 360 by 460 fade a photo in only on hover, behind the same logo. Kata's 480px rail adds a 40px arrow. Keep the tint even across cards, and use a heavy enough logo to survive it.

**Seen on** Stripe Customers, Framer, Kata.ai, Vapi, Algolia, 6 sites in all. **Suits** light-precision, dark-precision, gradient-light, warm-neutral; saas, ai, finance, devtool.

<!-- v:section.case-study/paged-story-carousel -->
### 10. Paged story carousel

*Feeling: one article at a time, with a page number.*

A carousel that admits what it is. Counted controls are better than dots, because a reader knows how far it goes. Anthropic's news module uses a 416px copy column, with a label on a 1px rule, title, body and a tint button, around mono `01 / 05` between 28px arrow squares, opposite an 848 by 477 image. Copy crossfades rather than slides. Basic Agency uses a draggable rail at 434px pitch with `00 / 05` on a rule above. Lyra centres a 578 by 325 slide with cropped neighbours.

**Seen on** Anthropic News, Vercel Customers, CITADEL Construction Group, Lyra, Stability AI, 7 sites in all. **Suits** photo-led, warm-neutral, light-precision, bold-colour, illustrated; editorial, devtool, architecture, health, ai.

<!-- v:section.case-study/outcome-text-cards -->
### 11. Outcome text cards

*Feeling: what we did, in one line each.*

Result first, no image. Use it when outcomes are strong and imagery is not. Scale's 404 by 372 white cards at radius 16 sit 8px apart and bleed off both edges of a grey band: a 56px grey logo tile, a 24/39 outcome, a client name at the base, and the section heading under the cards, which is an unusual and effective reversal. Webflow adds filters and large stat figures. Magram sets a real screenshot in a cream well above tags.

**Seen on** Scale AI, Magram, Webflow Customers. **Suits** light-precision, dark-precision; ai, agency, saas.

<!-- v:section.case-study/work-grid -->
### 12. Work grid

*Feeling: a portfolio with confidence.*

The agency index. Images carry everything, and chrome is close to zero. Pentagram runs three columns with 16px gutters and no radius, with a 13px title and a grey line under each. Instrument runs four at radius 24, with small `#BRAND` tags and pill filters above. Wolff Olins offsets paired images of different heights on black. MetaLab sets large filter pills under an 88px headline. Vary tile types, photo and flat colour, and leave the captions small. Alternating left and right rows are the weak form of this, because they read as a template, so use them only for fewer than four projects.

**Seen on** Instrument Work, Pentagram Work, Wolff Olins Work, MetaLab Work, Motto, 11 sites in all. **Suits** type-led, photo-led, dark-precision, light-precision, bold-colour; agency, portfolio, architecture.

<!-- v:section.case-study/written-story -->
### 13. Written story

*Feeling: somebody actually wrote this down.*

The case study as text, or the whole of your proof if you have one good thing to say. Stripe sets small labels and short blocks, such as challenge and solution, on a tick rule beside a real product fragment on a tint. Therabody's triptych lists published partner studies with the finding in bold, turning science into shopping proof. Hawl closes each project with a two-column writeup under a large frame. Bakstad gives one press mention a two-tone heading and two small links opposite a photo. This is the honest fallback, so write with specifics, or do not write it at all.

**Seen on** Stripe Customers, Bakstad Construction, Hawl Design, Therabody, PostHog About, 6 sites in all. **Suits** dark-precision, light-precision, photo-led, warm-neutral, illustrated; finance, architecture, agency, ecommerce, saas.

<!-- v:section.case-study/product-in-scene -->
### 14. Product in scene

*Feeling: their real thing, on show.*

Show the customer's real product. Spring/Summer floats a 418px live site in a 558px scene photo, in a rail. Lemon Squeezy checkers a 720px peach block holding a cropped app window against the next case's block. Energen Digital sets a site inside a bold browser card with a hard shadow and `See it live` beside a heading that says the proof comes first, and it then puts the quote underneath. This is the right form for an agency with one or two clients, because a live link is checkable.

**Seen on** Energen Digital, Lemon Squeezy, Spring/Summer. **Suits** bold-colour; agency, saas.

<!-- v:section.case-study/video-proof-cards -->
### 15. Video proof cards

*Feeling: the talk they gave.*

Video cards with one fact as the title. Bun uses three 1px cards, a 204px video with a white 56px play disc, mono company, a 20px headline stating one fact, and a notched button pinned low. Temporal's talks are from real events, set in tall outlined cards, and that provenance does the convincing. Keep the title as a result, and never use a play button on a static image.

**Seen on** Bun, Temporal, Sanity Customers, Waymo, Essay Gamja. **Suits** mono-technical, bold-colour, light-precision; devtool, saas, brand, education.

### Mistakes that cheapen a case study

- **A title that says nothing.** `Empowering growth` is the failure. Put the number or the change in the headline.
- **Stock photography.** A handshake or a laptop in a coffee shop says the story is invented. Use a real photo, real art, or a logo on flat colour.
- **A bare gradient in place of art.** It reads as a missing image.
- **A busy image under a lockup.** Pick a quiet still, and tint until the type is the brightest thing.
- **Equal treatment for every customer.** Promote the best story and let others shrink. Supabase and Cal.com show one open and the rest folded.
- **Hairlines where space would do.** I gave my story rows rules as the data said, and it looked denser than the original, which has none. Check before you draw a line.
- **`Read more` everywhere.** Say what they will read: `Read Mesa's story`.
- **A metric with no unit.** `+40%` of what, and over how long.

## Team

A team section must show that accountable humans are behind this, and name them. For a small company it may be the strongest proof on the page. For a large one it is a culture statement, and most of the page's width should go to one or two good portraits rather than a hundred headshots.

What separates great from cheap is consistency of the set, and honesty about scale. Great teams use the same light, the same head size, the same backdrop or a treatment that makes them match, plus real job titles and a scale that fits the headcount. Cheap ones use circles with a LinkedIn icon, mismatched selfies and stock headshots, or four people on a page claiming to be a global company. When photos will not match, go greyscale, or cut them onto one ground as Nurx does. Directories are the one exception: Railway's unmatched snapshots feel honest, because thirty people in different rooms is what a company looks like.

Measured ranges, corrected: portraits 170 to 320px on grids, 96px in directories, radius 0 to 24, gutters 8 to 68, names 14 to 18px, roles 12 to 14px. Crop to put eyes on one line at about 38 percent of the height, with head size within five percent across a row. Offer a link to a bio only if bios exist.

<!-- v:section.team/mono-portrait-grid -->
### 1. Mono portrait grid

*Feeling: a serious firm, in one sitting.*

Greyscale portraits on a strict grid. Greyscale hides mismatched lighting, so this is the safe way to make a set out of different shoots. Linear uses four portraits about 269 by 320 at radius 4, with a 337px pitch, 15/500 name and 14px grey role. Pentagram sets 4:5 images with 8px gaps on stark black backdrops, a name and a city. Snohetta's six-column grid carries name, role, city, email and phone in small text, which is proof in itself. Russell & Stellar fills an empty seat with its brand mark on texture.

**Seen on** Linear About, Pentagram About, Snohetta People, First December Films, Russell & Stellar, 9 sites in all. **Suits** light-precision, photo-led, bold-colour, dark-precision, warm-neutral; agency, architecture, devtool, portfolio, food-drink.

```css
.g{display:grid;grid-template-columns:repeat(4,1fr);gap:56px 68px}
.p img{width:100%;aspect-ratio:269/320;object-fit:cover;object-position:50% 30%;border-radius:4px;filter:grayscale(1) contrast(1.02) brightness(.86)}
.p b{display:block;margin-top:18px;font:500 15px/20px var(--font-text)}.p span{font-size:14px;line-height:20px;color:var(--ink-2)}
@media(max-width:860px){.g{grid-template-columns:1fr 1fr;gap:32px 16px}}
```

<!-- v:section.team/one-backdrop-portraits -->
### 2. One backdrop portraits

*Feeling: they all work at the same place.*

Separate headshots cut onto one colour. It is the cleverest way to fix a mismatched set. Nurx cuts four staff onto one peach ground at 170 by 176, radius 20. Ritual sets four portraits at 320px on pale grounds, in the same grid as its product cards, so expertise reads as part of the shelf. Instrument sets a row at radius 24 and 6px gaps on black under a very large title. Bristol Yoga Festival adds a thin gold hairline around each. A plain tone behind everyone is enough, and it can be sampled from your page.

**Seen on** Instrument About, Bristol Yoga Festival, Diamonds Re, IDEO People, Nurx, 7 sites in all. **Suits** photo-led, type-led, warm-neutral, dark-precision; agency, health, culture, local-business.

<!-- v:section.team/colour-backdrop-portraits -->
### 3. Colour backdrop portraits

*Feeling: a team with a personality.*

Each person on a flat colour. It suits friendly, public-spirited companies. PostHog gives 236 people illustrated busts on saturated colours, with a skewed white strip for the name and a team label in a foot band, and it reads as a set of trading cards. Buffer uses pastels in white cards at radius 20. Lightspeed tints portrait cards warm, with a small company pill, beside a large `01 / 05` counter. Studio Dumbar butts four saturated portraits with no gaps. Limit yourself to four fills.

**Seen on** Lightspeed, Buffer About, Studio Dumbar About, Vayne Entertainment, Idea Bakery, 6 sites in all. **Suits** photo-led, bold-colour, soft-pastel, type-led; agency, saas, other.

<!-- v:section.team/portrait-tile-cards -->
### 4. Portrait tile cards

*Feeling: an introduction card.*

The tile is the card, with name inside. Bitnomi uses tall dark tiles at radius 32 with cut-out heads rising from the base and a translucent label 56px tall. Brandrunnrs sets greyscale cards at radius 20 with outline tag chips. Driftime pairs a 34px name with two white pills for role and contact. Keep the label's contrast solid over whatever is behind it.

**Seen on** Bitnomi, Brandrunnrs, Zahnarzt Wernitz, Driftime. **Suits** dark-precision, bold-colour, soft-pastel, type-led; agency, finance, health.

<!-- v:section.team/credentialed-practitioners -->
### 5. Credentialed practitioners

*Feeling: qualified people, checked.*

In health, law and education, the person's training is the proof, so lead with it. Hims uses 300 by 170 gradient cards with a cut-out doctor left, title right, specialties on a 2px terracotta rule, then name and a short bio below, in a rail running off the edge. Function sets 280px square portraits with degrees in the name line and institution beneath, and its rail fades at the right beside a 28px outlined arrow. Ro adds a scalloped verified mark. Outschool rings portraits with its brand colour and a star rating. State real credentials and institutions, never adjectives.

**Seen on** Function Health, Hims, Dialovet, Outschool, Ro. **Suits** photo-led, warm-neutral, soft-pastel, bold-colour; health, education.

<!-- v:section.team/compact-people-directory -->
### 6. Compact people directory

*Feeling: everyone, findable.*

Many people, small, each reachable. Use it for 12 or more. Railway's three columns sit at a 408px pitch with a 153px row: a 96px photo at radius 8, 18px name, 14px grey role, flag and 20px social glyphs. Its snapshots do not match, and that is why it feels true. It ends with a `Could be you` tile in the brand colour. Stripe's climate reviewers run four columns with a short tick in the page's gutter, a name, an affiliation and a small specialty pill, no photos, and read as a trustworthy list. Cravath shows lawyers as rows with education and contacts.

**Seen on** Railway About, Stripe Climate, Cravath Lawyers, GitHub Universe '24. **Suits** dark-precision, gradient-light, light-precision, mono-technical; devtool, finance, other, culture.

```css
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:56px 24px}
.p{display:grid;grid-template-columns:96px 1fr;gap:0 24px;align-items:start}
.p img{width:96px;height:96px;border-radius:8px;object-fit:cover}
.p b{display:block;font:400 18px/24px var(--font-text)}.p span{display:block;font-size:14px;line-height:20px;color:var(--ink-2);margin-top:4px}
.s{display:flex;gap:14px;align-items:center;margin-top:12px;color:var(--ink-2)}.s svg{width:20px;height:20px;fill:currentColor}
.open{align-items:center}.ph{width:96px;height:96px;border-radius:8px;background:var(--accent);display:grid;place-items:center;color:var(--bg)}
@media(max-width:980px){.g{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.g{grid-template-columns:1fr;gap:28px}.p{grid-template-columns:72px 1fr;gap:0 16px}.p img,.ph{width:72px;height:72px}}
```

<!-- v:section.team/plain-name-columns -->
### 7. Plain name columns

*Feeling: there are a lot of us, and that is all.*

Everyone else, as text. It solves a real problem: how to credit hundreds without a thousand photos. Linear runs four columns at a 336px pitch of 16px grey names on 39px lines, straight after the leaders' portraits, and the grey mass is impressive. Pentagram lists associates in small columns under a hairline. Roy Jad's mono label and value rows work for one person. Alessandro Stella's present and previous list is a CV, set well. For a small team, one line of names is better than a grid of four.

**Seen on** Linear About, Alessandro Stella, Pentagram About, Roy Jad. **Suits** light-precision, dark-precision, warm-neutral; portfolio, devtool, agency.

<!-- v:section.team/founder-bio-split -->
### 8. Founder bio split

*Feeling: this person will pick up the phone.*

One named person as the pitch. It is the best proof a small business has. Nicole Heim splits the page 50/50: a 676 by 1000 greyscale portrait cropped to the waist, beside a bio at 63/68 in the page's display serif, with a link pinned to the photo's base. Energen Digital sets a portrait with an 8px coloured offset on an ink band and a 56px greeting. motusmade uses a cut-out on flat sky blue. Convex gives two founders an 80px portrait and bios listing what they built before, on dark, which is exactly the right proof for an infrastructure buyer. Airz butts a 680 by 580 photo against a dark text panel with no gap.

Write in the first or close third person, with specifics. Crop to the waist: my first portrait was a tight face at 676 by 1000, and it read like a passport. The original has a hand, a shirt and a wall, so a person in a place.

**Seen on** Nicole Heim Studio, Airz Fitness, D Alexander CPA, Energen Digital, motusmade studio, 9 sites in all. **Suits** warm-neutral, photo-led, bold-colour, light-precision; agency, health, finance, local-business, devtool.

```css
.lab{display:block;font:500 14px/1 var(--font-text);padding-bottom:12px;border-bottom:1.5px solid var(--ink);margin-bottom:40px}
.s{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.s img{width:100%;height:1000px;object-fit:cover;filter:grayscale(1)}
.t{display:flex;flex-direction:column;justify-content:space-between;font:400 63px/68px var(--font-display);letter-spacing:-.02em}
.t p+p{margin-top:40px}.t a{font:500 14px/1 var(--font-text)}     /* pinned to the photo's base */
@media(max-width:900px){.s{grid-template-columns:1fr}.s img{height:auto;aspect-ratio:4/5}.t{font-size:32px;line-height:37px;gap:32px}}
```

<!-- v:section.team/candid-group-photo -->
### 9. Candid group photo

*Feeling: they exist, and here they are.*

A real picture of real people in a real place. Greylock prints two 670 by 376 snapshots with partners and founders, no radius, and a 13px caps caption naming everyone in frame. The naming is the trick, since a stock photo never has a caption like that. Crescent Dental shows its actual staff and patient. Motto pairs two office photos with place captions. Light need not be perfect.

**Seen on** Greylock, Motto, Crescent Dental, Curology, Ян Козлов. **Suits** light-precision, photo-led, type-led; health, finance, agency.

### Rare but good

<!-- v:section.team/contributor-wall -->
### 10. Contributor wall

*Feeling: this was made by a crowd.*

Better Auth shows about 100 small greyscale avatars on a perspective wall, fading at the top and sides, one tile at a time turning to colour with a mono name tag. One line above states the exact count. Svelte runs three rows of 36px circles in grey, fading at both edges, under a sentence. Use real contributors, ideally pulled from the repository.

**Seen on** Better Auth, Svelte. **Suits** light-precision, render-3d; devtool.

<!-- v:section.team/authored-portraits -->
### 11. Authored portraits

*Feeling: drawn by someone with a point of view.*

Portraits in one commissioned hand. Monocle's black-line busts with skin as the only fill stand on a 1px rule, with vertical rules between columns, a serif name and a grey role, and they have become a signature. Plvs Ultra uses hatched circles on a dotted bus line, with initials on leaders. New Material overlaps three round portraits with depth of field, one sharp and the rest blurred. Instrument scatters small thumbnails on leader lines, as a map of the team. Make one treatment and never mix it.

**Seen on** New Material, Instrument About, Monocle, Plvs Ultra, MetaLab About, 6 sites in all. **Suits** type-led, expressive, light-precision, mono-technical; agency, editorial, ai, ecommerce.

<!-- v:section.team/investor-row -->
### 12. Investor row

*Feeling: backed, and not boasting.*

Linear ends its about page with two flat 140px tiles, a pale blue and a cream, each with a firm's name and partner below. Railway uses a row of 32px portraits with short captions. Keep it small and put it after the team. Investors are a footnote to the people doing the work.

**Seen on** Linear About, Railway About, Airpost. **Suits** dark-precision; devtool, ai.

<!-- v:section.team/no-team-contact-rows -->
### 13. No team, contact rows

*Feeling: confident enough not to bother.*

Stripe's about page has no team grid at all: three full-width 48px rows on hairlines, each a 14px grey prompt on the left and a dark link on the right. Use it when you are large, or when you have nobody to show. A way to reach a person beats a wall of faces.

**Seen on** Stripe About. **Suits** light-precision; finance.

### Mistakes that cheapen a team

- **Different head sizes.** My first grid mixed a close face, a waist-length shot and a full figure. Even in matching greyscale it read as stock. Crop to one head size, with eyes on one line.
- **A tight crop at large size.** A face filling a 1000px frame feels like a passport. Pull back.
- **Circles with a LinkedIn glyph.** It is the default. Use squares near your page's radius, and only link what is useful.
- **Mismatched colour photos in a small grid.** Fine for 30 people in a directory, and fatal for 4 leaders. Go greyscale or cut onto one ground.
- **Stock or generated faces presented as staff.** It is a lie if the business is real. Use a name, a role and an initial tile, or show no one.
- **Vague titles.** `Visionary` means nothing. Say what they do and what they have done.
- **Bios of equal length.** Real people have different amounts to say.
- **Numbers read at the wrong scale.** Team specs were the least reliable in our data. Portraits should be larger than you think: 269px, not 190.

## Integrations

An integrations section must answer one practical question: does this work with what I already use. It is closer to a reference table than to marketing, so a reader must be able to scan for a name. Prefer a directory over a picture unless the picture explains how data moves.

What separates great from cheap is real names, categories and an honest edge. Great ones group tools by job, keep brand colour so a reader can spot theirs, and end with an escape hatch such as `any SAML provider` or `any MCP tool`. Cheap ones orbit a dozen logos around a glowing centre, and say nothing about what connects to what. A diagram must teach something: Cal.com's shows events flowing through it, and ClickHouse's labels ingest and query.

Measured ranges: tiles 44 to 183px wide, icons 20 to 48px, radius 6 to 16, gap 8 to 24. You will often lack real icons. Use plain geometric glyphs in the kit from [Logos and faces you do not have](#logos-and-faces-you-do-not-have), one colour each, and name the tool in text beside it, since the name is what a reader needs. Never draw a real company's mark from memory, and never imply an integration that does not exist.

<!-- v:section.integrations/ruled-directory -->
### 1. Ruled directory

*Feeling: a reference you can trust.*

A catalogue in a ruled table. It scored highest of any integration form, since it is simply the most useful. Speakeasy's 1248px grid runs two rows: a wide cell plus a narrow one, then three equal cells, with about 32px padding, a mono caps category, full-colour logos about 26px tall that wrap, and a grey mono `+ Any SAML / OIDC`. That final line is the best detail, because it covers everything unlisted. Cloudflare runs three ruled columns of 65px rows: a 20px line icon, 14px name, 14px grey descriptor. Devin Desktop uses five columns with left hairlines and a one-line purpose for each. mymind runs five platform columns split by rules, with large names and an orange action. Keep brand colour here. My first version was mono and looked like a wireframe.

**Seen on** Cloudflare Workers, Devin Desktop, Speakeasy, mymind, Notion Calendar. **Suits** light-precision, gradient-light; devtool, saas, ai.

```css
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.c{background:var(--bg);padding:28px 32px 32px;grid-column:span 2}.c.w{grid-column:span 4}   /* opaque cells: the gap is the rule */
.c h3{font:400 13px/1 ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2);margin-bottom:24px}
.l{display:flex;flex-wrap:wrap;align-items:center;gap:20px 32px}
.more{font:400 13px/1 ui-monospace,monospace;color:var(--ink-2)}                             /* + Any SAML / OIDC */
@media(max-width:860px){.g{grid-template-columns:1fr}.c,.c.w{grid-column:auto;padding:24px}}
```

<!-- v:section.integrations/hub-and-spoke-map -->
### 2. Hub and spoke map

*Feeling: everything passes through here.*

Your product at the centre, tools around it, on real lines. Use it when your product is literally the connection. Cal.com sets a 96px dark tile with its name in a tinted panel at radius 28, 48px white icon tiles stacked five left and six right at a 72px pitch, and 1.5px grey beziers that land on the hub at slightly different heights rather than at one point. A hairline and three named one-liners below turn the picture into information. Vite uses an isometric slab with bracketed trays. ClickHouse uses labelled elbow connectors. Function reduces it to a single row with dotted links. On phones, scale the map to about half, and keep the one-liners full size, because the list carries the meaning there.

**Seen on** Cal.com, Vite, Function Health, ClickHouse, Insomnia, 6 sites in all. **Suits** light-precision, dark-precision, warm-neutral, bold-colour, gradient-light; devtool, saas, health.

```css
.p{background:var(--surface);border-radius:28px;padding:40px 40px 36px}
.map{position:relative;width:960px;max-width:100%;height:480px;margin-inline:auto}
.w{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--ink-3);stroke-opacity:.5;stroke-width:1.5}
/* left path: M200,y C340,y 300,240 432,240+(i-2)*5, so lines end 5px apart */
.ic{position:absolute;width:48px;height:48px;border-radius:12px;background:var(--bg);display:grid;place-items:center;
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 5%,transparent),0 2px 6px color-mix(in srgb,var(--ink) 6%,transparent)}
.hub{position:absolute;left:50%;top:50%;width:96px;height:96px;margin:-48px;border-radius:24px;background:var(--ink);color:var(--bg);display:grid;place-items:center}
.ls{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;border-top:1px solid var(--line);margin-top:32px;padding-top:32px}
@media(max-width:1060px){.map{width:960px;max-width:none;left:50%;margin-left:-480px;transform-origin:50% 0;transform:scale(.72);margin-bottom:-134px}}
@media(max-width:700px){.p{padding:16px;overflow:hidden}.map{transform:scale(.52);margin-bottom:-230px}.ls{grid-template-columns:1fr;gap:20px}}
```

<!-- v:section.integrations/logo-tile-grid -->
### 3. Logo tile grid

*Feeling: pick yours.*

A grid of equal tiles, each a choice. Use it for 8 to 16 tools. Amplitude's six-column grid of 183 by 124 pale tiles at 8px gaps sets a 44px logo above a 16/600 label, under a black pill toggle, and ends with an ellipsis tile for any tool, then a link. Railway's 241 by 126 tiles use a hairline. Storybook offsets a wall of app tiles beside two small stats. Readwise keeps a soft inner shadow on its tinted tiles. Leave the row incomplete rather than inventing tiles, because a gap reads as honest.

**Seen on** Amplitude, Definitiv Digital, Railway Docs, Readwise, Storybook, 8 sites in all. **Suits** dark-precision, light-precision, warm-neutral, gradient-light, bold-colour; devtool, saas.

```css
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.t{height:124px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font:600 15px/1 var(--font-text);transition:background .15s}
a.t:hover{background:color-mix(in srgb,var(--ink) 7%,var(--surface))}
.t svg{width:40px;height:40px;fill:currentColor}
.t.more{color:var(--ink-2)}                                    /* the last tile: any tool */
@media(max-width:860px){.g{grid-template-columns:repeat(3,1fr)}.t{height:108px}}
@media(max-width:480px){.g{grid-template-columns:repeat(2,1fr)}}
```

<!-- v:section.integrations/hairline-link-list -->
### 4. Hairline link list

*Feeling: a list that gets out of the way.*

Small rows, three to a line. Use it low on a page or in docs. Loops sets 44px hairline tiles at radius 8, a 20px colour logo, a 15px grey name, and a last tile to view all. Neon uses a 40px bordered icon tile and a 16px label at a 68px row pitch, with a `21+ more` pill below. Chromatic's 524 by 98 rows add a one-line description. Ollama shows the command for each tool beneath its name, with a copy icon, which is the most useful version.

**Seen on** Neon Docs, Loops, Chromatic, Ollama. **Suits** light-precision, warm-neutral, dark-precision; devtool, saas.

<!-- v:section.integrations/fading-tile-rows -->
### 5. Fading tile rows

*Feeling: the list keeps going.*

Tiles in a row, dissolving at the edges. It suggests a long list without listing it, so use it next to a link to the real directory. Attio centres a heading above a row of 96px dark tiles at radius 20 and a 128px pitch, fading to black at both ends. Render runs two offset rows of 68px tiles off the right edge of a gradient band. Customer.io fades two staggered rows of 64px tiles across a dark panel. Brex lets 155px white tiles be cut by a tray's edges. Rabbit runs three rows of logos and names split by orange slashes.

**Seen on** Attio, Customer.io, Render, Rabbit, Brex, 7 sites in all. **Suits** light-precision, bold-colour; saas, finance, devtool, brand, ai.

<!-- v:section.integrations/orbit-and-arc -->
### 6. Orbit and arc

*Feeling: a small universe around you.*

The most overused form, and worth doing only when the geometry means something. Upstash's rings work because they sit in a small 384px card, cropped by its edges, beside code. Affirm's drifting merchant discs work because a real search field sits under them, so the logos are ambient and the action is real. Nuxt's wire globe uses dashed leaders to hosting providers, which is geographically apt. Keep tokens to six or eight, and do not give the centre a glow.

**Seen on** Affirm, Sweeply, Nuxt, Upstash, Grafana, 6 sites in all. **Suits** gradient-light, dark-precision, illustrated; devtool, finance, saas.

<!-- v:section.integrations/offset-app-card-rows -->
### 7. Offset app card rows

*Feeling: a marketplace you could browse.*

Real catalogue cards bleeding off both edges. Together sets two rows offset about 15px of 260 by 142 white cards, 1px line, radius 8, a 48px icon tile, a mono `NEW` tag, a small type label and a 20px name, with a lilac hover. It works because it reuses a real interface and holds real names. Remote adds a final card for your own platform.

**Seen on** Together AI, Otter, Remote. **Suits** gradient-light, bold-colour; ai, saas, finance.

<!-- v:section.integrations/brand-chip-row -->
### 8. Brand chip row

*Feeling: a note under the headline.*

Small pills under a subhead. Tana's 36px chips use a soft fill, a 16px glyph and a 15/500 label, and items not yet available drop to half opacity, which makes the row a status report as well. Buildkite wraps white pills in a cell, fading the last row to imply more without a count. Use it near the hero, and keep to one line where you can.

**Seen on** Tana, Buildkite. **Suits** light-precision; devtool, saas.

<!-- v:section.integrations/mono-mark-field -->
### 9. Mono mark field

*Feeling: the audience knows these shapes.*

Marks only, in one ink, for an audience that recognises them. Vercel AI SDK sets seven 48px solid black framework marks at a 124px pitch beside its heading. Factory sets 6 by 3 grey connector marks in the right half. Benzo recolours every tool in gold to keep it inside its painted page. Do not use it for general audiences, who cannot name a mark without a label.

**Seen on** Factory, Vercel AI SDK, Benzo. **Suits** light-precision, illustrated; ai, devtool, portfolio.

<!-- v:section.integrations/live-repo-row -->
### 10. Live repo row

*Feeling: go and look.*

A real repository as a table row. Daily sets a 57px row between hairlines with a repo name on the left, and language, stars and an arrow on the right. It is small, and it is checkable. Fetch the count, or remove it.

**Seen on** Daily. **Suits** mono-technical; devtool.

### Mistakes that cheapen integrations

- **Logos with no names.** A reader looks for a word. Put the name in text.
- **An orbit that teaches nothing.** If you could rearrange the logos without changing the meaning, use a directory.
- **Mono on a directory.** Colour is how a reader finds their tool. My first ruled grid looked like a wireframe until the brand colours returned.
- **A glow on the hub.** It adds nothing, and reads as generated. Cal.com's hub is a dark tile.
- **All lines meeting at one point.** They should land a few pixels apart.
- **Squeezing a map on phones.** Mine scaled to under 40 percent and became dust. Hold it at about half, crop if needed, and let the list carry the content.
- **Implied coverage.** Do not show a tool you do not connect to. `Coming soon` at half opacity is fine, and more convincing.

## Before you call it done

Run this against your proof sections:

- [ ] Every quote has a name and a role, and at least one quote is much shorter than the rest.
- [ ] Every number says what was counted, when, and for whom. No plus sign where an exact figure exists.
- [ ] At least three of the seven tells appear: uneven, checkable, named, limited, from the world, in their voice, beside the claim.
- [ ] The opening mark hangs, or there is no mark.
- [ ] Logos are sized by area, in one treatment, and on the page's grid.
- [ ] No real company name, masthead, person or rating sits beside anything invented. Invented items are marked, as `references/copy.md` asks.
- [ ] Health, legal and financial pages carry no invented outcomes.
- [ ] Marquees pause on hover, stop under reduced motion, and repeat no logo on screen.
- [ ] Counters show the true value with scripts off.
- [ ] The final value of any timed tab row is reachable by keyboard.
- [ ] There are no more than three proof forms on the page, and one is clearly the lead.
- [ ] Swap test: replace the brand name with a competitor's. If a quote still reads true, cut it.
- [ ] At 390px nothing clips a logo, a numeral or a portrait, and no fixed-height card cuts its text.
