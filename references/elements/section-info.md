# Information sections

An information section answers a question someone already has. Where is it, is it open, what does it cost, what shipped, what have you made, who do I write to. Nobody admires these sections on the way past, and that is why they decide whether a page feels real. A generated page can fake a hero. It cannot fake opening hours with a split shift, a menu with honest prices, or a footer that knows how the company is organised. This chapter teaches how real information gets designed, and how to end a page.

It holds 88 canonical variants, clustered from all 828 analyst rows across 571 sites. Counts mean sites. About 110 real frames were opened to check the strongest variants, and 34 variants were rebuilt in 35 demos and rendered next to the real thing. That comparison found analyst readings that were wrong, listed below, and most of the mistake lists come from it. The same variants live in `data/elements/section-info.jsonl`, which is what the sampler deals from. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, plus the small derived set below, so any palette and type system drops in. Hex values appear only as neutral greys or measured facts about a site. Treat those as evidence, not as a palette to copy. Where a recipe says serif, condensed or mono, read that as a role, and use the nearest voice in the type system you were dealt.

**Contents.** [Real information first](#real-information-first) · [What we measured](#what-we-measured) · [Derived tokens](#derived-tokens)

- **[Footer](#footer):** [offset sitemap](#1-offset-sitemap) · [full-width directory](#2-full-width-directory) · [fine-print directory](#3-fine-print-directory) · [brand column with proof](#4-brand-column-with-proof) · [newsletter-led footer](#5-newsletter-led-footer) · [grid-locked footer](#6-grid-locked-footer) · [page lifts off](#7-page-lifts-off) · [inset card footer](#8-inset-card-footer) · [colour flood](#9-colour-flood) · [giant wordmark finish](#10-giant-wordmark-finish) · [ghost wordmark](#11-ghost-wordmark) · [masked wordmark](#12-masked-wordmark) · [statement closer](#13-statement-closer) · [contact first](#14-contact-first) · [local hours footer](#15-local-hours-footer) · [one-line colophon](#16-one-line-colophon) · [closing scene](#17-closing-scene) · [final image](#18-final-image) · [typeset legal](#19-typeset-legal) · [large link index](#20-large-link-index) · [accordion footer](#21-accordion-footer) · [object sign-off](#22-object-sign-off) · [app download card](#23-app-download-card)
- **[Gallery and portfolio](#gallery-and-portfolio):** [caption row grid](#1-caption-row-grid) · [rhythm rows](#2-rhythm-rows) · [on-image title tiles](#3-on-image-title-tiles) · [lead mosaic](#4-lead-mosaic) · [true ratio gallery](#5-true-ratio-gallery) · [dense image wall](#6-dense-image-wall) · [peek rail](#7-peek-rail) · [centred slide carousel](#8-centred-slide-carousel) · [fixed-height filmstrip](#9-fixed-height-filmstrip) · [ruled project rows](#10-ruled-project-rows) · [tabular project index](#11-tabular-project-index) · [side caption pairs](#12-side-caption-pairs) · [pinned project stage](#13-pinned-project-stage) · [single-file spine](#14-single-file-spine) · [scattered collage](#15-scattered-collage) · [tilted drift row](#16-tilted-drift-row) · [sliver index](#17-sliver-index)
- **[Blog index](#blog-index):** [cards then ledger](#1-cards-then-ledger) · [front page lead](#2-front-page-lead) · [feature then grid](#3-feature-then-grid) · [compact row ledger](#4-compact-row-ledger) · [large feature rows](#5-large-feature-rows) · [text cells](#6-text-cells) · [thumbnail card grid](#7-thumbnail-card-grid) · [sidebar filter grid](#8-sidebar-filter-grid) · [flush story row](#9-flush-story-row) · [peek news rail](#10-peek-news-rail) · [narrowing filmstrip](#11-narrowing-filmstrip) · [mixed-span news bento](#12-mixed-span-news-bento) · [designed cover system](#13-designed-cover-system) · [quiet filter row](#14-quiet-filter-row) · [wire feed](#15-wire-feed)
- **[Changelog](#changelog):** [date rail feed](#1-date-rail-feed) · [sticky rail timeline](#2-sticky-rail-timeline) · [month index rail](#3-month-index-rail) · [release split rows](#4-release-split-rows) · [typed log](#5-typed-log) · [homepage timeline row](#6-homepage-timeline-row) · [update card grid](#7-update-card-grid) · [incident history](#8-incident-history) · [dated history log](#9-dated-history-log)
- **[Menu and catalogue](#menu-and-catalogue):** [name and price rows](#1-name-and-price-rows) · [inline price lines](#2-inline-price-lines) · [centred menu column](#3-centred-menu-column) · [photo interleaved menu](#4-photo-interleaved-menu) · [plate photo grid](#5-plate-photo-grid) · [menu index buttons](#6-menu-index-buttons) · [service price panels](#7-service-price-panels) · [running text index](#8-running-text-index) · [scene per product](#9-scene-per-product) · [tabbed shelf](#10-tabbed-shelf) · [stacked browse rails](#11-stacked-browse-rails) · [what's on list](#12-whats-on-list)
- **[Location and hours](#location-and-hours):** [plain hours list](#1-plain-hours-list) · [hours card beside map](#2-hours-card-beside-map) · [open today strip](#3-open-today-strip) · [location card grid](#4-location-card-grid) · [location story rows](#5-location-story-rows) · [city clock columns](#6-city-clock-columns) · [plain city directory](#7-plain-city-directory) · [map as a figure](#8-map-as-a-figure) · [three-column info band](#9-three-column-info-band) · [multi-venue panels](#10-multi-venue-panels) · [live conditions panel](#11-live-conditions-panel) · [visit page sections](#12-visit-page-sections)
- [Before you call it done](#before-you-call-it-done)

## Real information first

These seven rules apply to every element here. Read them even if you were dealt a single variant, because they account for most of the gap between a real page and a generated one.

**Write the real data before you draw anything.** An hours block needs seven days, and one of them should be awkward. A menu needs prices with a real spread. A changelog needs dates that are not evenly spaced, and releases of different sizes. A footer needs the actual link names. A layout that only works with three tidy rows has never been tested. If you have no data, invent complete and specific data, as a venue would write it, and never lorem or `Link one`.

**Set information at reading size.** This was the largest single finding. Working from analysts' estimates, my first hours list was 15px, my office addresses 12px and my menu 13px, and every one of them looked like fine print. On the real sites these are body text: the Whitney sets its hours at about 20px on a 36px row, Huge sets office addresses at 16px under a 40px city, Gramercy Tavern sets dishes at about 16 and 17px, and Sam Hoult sets a price list at 16px on a 34px pitch. A person came to the page for this. Do not make them squint at the one thing they wanted.

**Let numbers behave.** Prices, hours and dates are columns, so they need `font-variant-numeric:lining-nums tabular-nums`. A default text serif often ships old-style figures, and my first menu prices wobbled up and down the column for that reason alone. Right-align prices. Left-align times. Use an en dash in a range, as in `10:30 am–6 pm`, with no spaces in tight rows.

**Make every fact usable.** A phone number is a `tel:` link. An email is a `mailto:` link and selectable text. An address is real text that opens a map, ideally with Google and Apple offered side by side as the Whitney does. Hours are never an image and never a PDF. A menu is a page, not a download, because it must work on a phone in a doorway.

**Say the awkward part.** Closed on Tuesdays. Kitchen closes at 9. Last entry 30 minutes before closing. Temporary hours on Friday. Coming soon. Contains milk. Patch test required. Mentioning an exception is what makes the rest believable, and it is the fastest way to tell a real business from a template. Zahnarzt Wernitz groups Monday and Tuesday, then writes the lunch closure as two lines. Sweetgreen puts Temporary Hours and Coming soon in the same card slots as ordinary stores. The Guggenheim gives holiday hours a heading of their own.

**Compute what changes.** Open today, Closed now, local time and system status should come from data, in the venue's own time zone, and should never be typed into the markup, because typed status goes stale and then lies. See the snippet below.

**Put truth where people look.** Hours belong on the visit page, in the footer, and as one line near the top. Repeating an address is not redundancy. People arrive at the bottom of the page after searching, and the footer is where they look.

This handles split shifts, closed days and the visitor being in another time zone. I tested it across all of those cases.

```js
// Spans are minutes from midnight in the venue's own time. Two spans is a split shift. Empty is closed.
const WEEK=[[],[[480,750],[810,1080]],[[480,750],[810,1080]],[[420,720]],[[480,750],[870,1200]],[[420,720]],[]]; // Sun to Sat
const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const clock=m=>`${(m/60|0)%12||12}${m%60?':'+String(m%60).padStart(2,'0'):''}${m<720?'am':'pm'}`;
function status(tz,now=new Date()){
  const p=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:tz,weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(now).map(x=>[x.type,x.value]));
  const d=DAYS.indexOf(p.weekday),m=+p.hour*60+ +p.minute;
  const span=WEEK[d].find(([a,b])=>m>=a&&m<b);
  if(span) return `Open until ${clock(span[1])}`;
  const later=WEEK[d].find(([a])=>a>m);
  if(later) return `Opens at ${clock(later[0])}`;
  for(let i=1;i<8;i++){const n=(d+i)%7;if(WEEK[n].length) return `Closed. Opens ${DAYS[n]} ${clock(WEEK[n][0][0])}`}
  return 'Closed';
}
```

## What we measured

Footers are 426 of the 828 rows. Ground was sampled from the pixels of each analyst's frame.

| Footer ground | Dark | Light | Brand colour |
|---|---|---|---|
| All 426 | 46% | 46% | 8% |
| Gold | 43% | 52% | 5% |
| Light precision | 33% | 65% | 2% |
| Dark precision | 95% | 5% | 0 |
| Photo led | 45% | 55% | 0 |
| Warm neutral | 33% | 47% | 20% |
| Bold colour | 45% | 30% | 25% |
| Type led | 41% | 59% | 0 |

So a dark footer is not the default, and it is not the mark of quality. On a light page, staying light is the more common professional choice.

| Fact | Value |
|---|---|
| Link row pitch | 32px median, 28 to 38 middle half (115 readings) |
| Column pitch | 230px median, 206 to 296 middle half (57 readings) |
| Column count | Four 42%, three 25%, five 15%, six 8%, two 8% (252 readings) |
| Heads and links | 14 to 16px, with 12px caps or mono heads common |
| Giant wordmark height | 306px median, 220 to 382 middle half |
| Mentioned in gold footers | Hairlines 47%, socials 32%, wordmark 23%, newsletter 18%, language 16%, compliance 12%, status 6%, theme 6% |
| Gallery gaps | 20px median, 12 to 32 middle half |
| Gallery radius | 10px median where rounded, and 0 is the most common single value |
| Blog title in a card | 20px median, 16 to 24 |

Hover, measured for real on 516 sites:

| Control | Changes on | What changes | Duration p25, median, p75 |
|---|---|---|---|
| Text link | 51% | Text colour 61%, underline 18%, fill 17% | 150, 200, 300ms |
| List row | 50% | Text colour 58%, fill 33%, transform 17% | 150, 200, 300ms |
| Card | 58% | Transform 42%, opacity 27%, fill 23% | 200, 300, 400ms |

Half of these controls do nothing on hover, and that is fine. A footer link that darkens over 150ms with `ease` is entirely normal. When a card image scales, the median is 1.04.

Where the frames overruled the analysts' estimates. Analysts read scaled views, so their small sizes run about 0.7 of the truth. Trust these corrected values, and when you read a small size anywhere in this family's source data, round up.

| Site | Analyst said | The frame shows |
|---|---|---|
| Whitney hours | 15px, time far right | About 20/36, time in a fixed column 160px from the day |
| Huge offices | 64px clock, 25px city, 12px address | About 105px clock, 40px city, 16px address |
| Gramercy Tavern | 12px name, 13px italic | About 16px and 17px |
| Sam Hoult prices | 14px on a 26px pitch | 16px on a 34px pitch |
| Sweetgreen stores | 30px buttons, 12px address | 40px buttons, 14px address |
| Dishoom cafés | 32px pills | Square-cornered buttons about 183 by 50 |
| Olivier Larose index | 22px rows, 12px text | 40px rows, 14px text |
| Framer blog | 44px rows | 81px rows on two lines |
| Vercel blog | Cells split by hairlines | No lines at all, only a hover fill |
| Ramp sheet | 16px corners | About 24px |
| Roundhouse | 14px titles, 44px rows | About 36px display titles, 115px rows |
| Poeza stockists | 120 by 70 tiles | About 265 wide |
| Sanity blog | Shared ruled grid | Separate outlined boxes with about 16px gaps |
| Meta AI updates | Thumbnail above title | Thumbnail left of title |
| PlanetScale | Dashed rule | A dotted rule |
| Linear changelog | No rules, one title size | A faint vertical rail with dots, titles at 24 and 32 |

## Derived tokens

Add these once at the top of the stylesheet. Because they mix from the palette, a warm palette gets warm lines with no further work.

```css
:root{
  --line-strong:color-mix(in srgb,var(--ink) 18%,transparent);
  --well:color-mix(in srgb,var(--ink) 4%,var(--bg));
  --ok:#2f9e6e; /* status only, never decoration */
  --font-mono:ui-monospace,SFMono-Regular,Menlo,monospace; /* replace with the dealt mono if there is one */
}
```

Set small text in `--ink-2`, not `--ink-3`. My first footers used `--ink-3` for the legal row on a dark ground, and it measured 4.0:1, which fails. Keep `--ink-3` for rules and marks.

## Footer

A footer has three jobs. It is the map of last resort, for anyone who reached the bottom without finding what they came for. It holds what must be somewhere: legal, address, language. And it ends the page, which means it is the last thing a person sees and the frame they remember.

What separates great from cheap is that a great footer was composed, and a cheap one was filled in. The cheap footer is four grey columns of small links, a repeated logo, a row of social icons and a copyright line, in whatever dark blue was left over, with a grid unrelated to the page above it. The great one makes one clear decision about how the page ends: the columns sit on the page's own grid, or the page lifts away as a sheet, or the wordmark fills the width, or a single colour arrives at last. It also knows its own scale. A funnel page with four links gets a one-line footer, a company with eighty links gets a calm index, and neither pretends to be the other.

Five habits show up in nearly every strong footer:

- **One tone for heads, another for links, and a real difference between them.** Either bright heads over muted links, as on Linear, or muted heads over bright links, as on Attio and Tana. The second is often better for long lists, because the links are the content. Same colour for both is the cheap version.
- **Generous pitch.** 28 to 38px per link. Sixty links on a 30px pitch look calm, and the same links on 20px look like a wall.
- **Even base.** Stack extra groups under short columns so that the bottom edge looks level, as Render and Anthropic Docs do.
- **Real details.** A small arrow on external links, a `New` tag, a live status dot, a language picker that works. These tell the reader that someone maintains the footer.
- **A quiet last row.** Copyright, three legal links, perhaps a theme switch, at 12 to 14px.

Measured ranges: 28 to 38px link pitch with a median of 32, columns on a 206 to 296px pitch, four columns most often, then three and five, 14 to 16px links, and about 56 to 120px of padding above. Grounds split evenly between dark and light, with brand colour at 8 percent, so choose from the page above and not from habit.

Pick a structure from the first group and at most one ending from the second. Ramp is a six-column directory plus a page lift. Monzo is an inset card plus a wordmark. Cal.com is a lift plus a masked wordmark. A third gesture is too many.

| The site is | Start from |
|---|---|
| Product with 30 or more links | Offset sitemap, full-width directory, brand column with proof |
| Brand wanting a strong ending | Giant wordmark, ghost wordmark, colour flood, statement closer |
| Studio, agency or portfolio | Contact first, large link index, statement closer, one-line colophon |
| Café, clinic, salon, venue | Local hours footer, contact first |
| Bank, insurer, health | Typeset legal, fine-print directory |
| One page or a launch | One-line colophon |
| Photography led | Final image, ghost wordmark, large link index |

<!-- v:section.footer/offset-sitemap -->
### 1. Offset sitemap

*Feeling: nothing to prove.*

The logo sits alone at top left, and the columns begin about a third of the way across, leaving the left third empty on purpose. That empty space is the whole design, because it says the company does not need to fill anything. Use it for product companies with 20 to 60 links on a dark or plain ground. Avoid it with fewer than three columns, where the page goes lopsided.

On Linear the columns sit on a 224px pitch from x=304, with 14px heads, 14px links on 30px rows, about 48px between a head and its first link, and legal about 100px below the last link. Attio starts at x=488, stacks several groups per column, tags items with small blue `New` chips, and marks external links with a tiny arrow.

**Seen on** Attio Pricing, Customer.io, 1X, Polar, Linear, 33 sites in all. **Suits** light-precision, photo-led, dark-precision, warm-neutral; saas, ai, devtool, brand.

```css
.foot{border-top:1px solid var(--line);padding:56px clamp(24px,5.5vw,80px) 48px}
.foot-in{display:grid;grid-template-columns:repeat(6,minmax(0,224px));max-width:1280px;margin:0 auto}
.mark{width:20px;height:20px;border-radius:50%;background:var(--ink)}
.col b{display:block;font:500 14px/20px var(--font-text);color:var(--ink);margin-bottom:24px}
.col a{display:block;font-size:14px;line-height:30px;color:var(--ink-2);transition:color .15s}
.col a:hover{color:var(--ink)}
.legal{grid-column:2/-1;margin-top:64px;display:flex;gap:24px;font-size:12px;color:var(--ink-2)}
@media(max-width:760px){.foot{padding:40px 16px}.foot-in{grid-template-columns:1fr 1fr;gap:32px 16px}.col a{line-height:44px}.legal a{line-height:44px}.mark-cell,.legal{grid-column:1/-1}.legal{margin-top:0}}
```

<!-- v:section.footer/full-width-directory -->
### 2. Full-width directory

*Feeling: a well-kept index.*

Four to seven equal columns across the whole container, with no logo column. It is the most common footer in the corpus and the safest, so it lives or dies on its details. Use it when there are many links and no reason to be clever. Render runs six 232px columns with 18px heads and 16/36 links, then a rule, a small mark, a live status line, copyright and a two-state theme toggle. Vercel runs two tiers of 14px links on 28px rows with small grey `New` chips. Avoid it when the list is short, since six columns of three links is a table of nothing.

**Seen on** Cursor Pricing, Acne Studios, Vercel AI SDK, Render, Lithic, 75 sites in all. **Suits** light-precision, photo-led, bold-colour, warm-neutral; devtool, saas, ecommerce, ai.

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

<!-- v:section.footer/fine-print-directory -->
### 3. Fine-print directory

*Feeling: the small print of a very large company.*

Apple sets a 980px column of 12px text on a pale grey band: bold group heads, about 26px pitch, five columns of stacked groups, hairlines above and below, numbered footnotes above and a pipe-divided legal row beneath. It is the densest element on an airy page, and the contrast is what makes the page above feel spacious. Use it only with truly hundreds of destinations, for commerce, banks and large platforms. Collapse it on phones to ruled accordion rows with chevrons, as Apple Bag does. Zapier and Svix add a tier of SEO links under the main columns, kept apart by a rule.

**Seen on** Apple, Apple MacBook Pro, Apple Bag, Apple Intelligence, Stripe Blog, 16 sites in all. **Suits** light-precision, photo-led, dark-precision, warm-neutral; devtool, brand, saas, editorial.

<!-- v:section.footer/brand-column-with-proof -->
### 4. Brand column with proof

*Feeling: a company that has done its homework.*

A left block of 300 to 430px carries the logo, a two-line description and real proof: compliance marks, a live status line, a theme switch. Three to five link columns sit to its right. Use it for developer tools and B2B software, where a security reviewer will scroll here. On LiveKit the compliance roundels are pinned to the base of the left block with `margin-top:auto`, so they line up with the bottom of the columns, and status runs in the base bar in small mono caps with a square dot. Neon Docs turns compliance into a column of its own, pairing each name with a grey status word. Only claim what is true. Fake SOC 2 badges are worse than none.

Other things that earn the left block: a quotation, as on Notion Calendar; a sign-off about where the thing is made, as on Bun; a plain statement of where data is hosted, as on Plausible, when that is a reason to buy.

**Seen on** LiveKit, Neon Docs, Speakeasy, Framer, Warp Pricing, 37 sites in all. **Suits** light-precision, dark-precision, gradient-light, mono-technical; devtool, saas, ai, other.

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

<!-- v:section.footer/newsletter-led-footer -->
### 5. Newsletter-led footer

*Feeling: an invitation, not a form.*

The signup comes first and the sitemap second. Polestar sets a 30px invitation and one outlined Subscribe on a flat `#efefef` band, with columns from x=528 on a 208px pitch. Vitsoe adds one honest sentence about what you will receive. Modern Treasury uses a top row, title left and field right, then a hairline, then six columns. reMarkable shows a book cover beside the field, so the thing you get is visible. Analogue reduces the field to one 1px underline with `Subscribe` as text at its end, which is the most elegant form of it. Use this only when there really is something worth subscribing to. A field that gives no reason is the most ignored object on the web.

**Seen on** Polestar, Modern Treasury, Analogue, reMarkable, Expo, 23 sites in all. **Suits** photo-led, light-precision, type-led, warm-neutral; ecommerce, devtool, brand, culture.

<!-- v:section.footer/grid-locked-footer -->
### 6. Grid-locked footer

*Feeling: the page was drawn in one go.*

The footer keeps the page's own grid. Stripe runs its dashed column guides straight through. Zed keeps the rails of the page, changes only the ground to a blue field, splits the columns with 15 percent white verticals, and sets 14px mono links that are always underlined on a 32px pitch. Paddle fills the top of the footer with three ruled cells of copy, and Oatly goes furthest, making the footer a literal table of 52px cells with every link centred in a box.

Use it when the page already has visible structure: rails, a dotted ground, a ruled grid. It is a poor choice on a page with no lines, where it arrives from nowhere. The line must continue from above and reach both edges, because a stopped line reads as a mistake.

**Seen on** Zed Pricing, Zed Blog, La Table de Joakim, Work & Co, Stripe, 21 sites in all. **Suits** warm-neutral, light-precision, mono-technical, gradient-light; finance, devtool, agency, food-drink.

```css
.foot{--rail:color-mix(in srgb,var(--bg) 15%,transparent);--tint:color-mix(in srgb,var(--bg) 72%,var(--accent))}
.foot{background:var(--accent);color:var(--bg);position:relative}
.frame{max-width:1120px;margin:0 auto;border-left:1px solid var(--rail);border-right:1px solid var(--rail);display:grid;grid-template-columns:1.6fr repeat(4,1fr)}
.cell{padding:28px 16px 48px;border-left:1px solid var(--rail)}
.cell:first-child{border-left:0}
.cell b{display:block;font:400 16px/24px var(--font-display);margin-bottom:14px}
.cell a{display:block;font:400 14px/32px var(--font-mono);text-decoration:underline;text-decoration-color:var(--rail);text-underline-offset:3px;width:max-content;color:var(--bg)}
.cell a:hover{text-decoration-color:var(--bg)}
.side small{display:block;font:400 11px/22px var(--font-mono);color:var(--tint);margin-top:28px}
.hatch{max-width:1120px;margin:0 auto;height:240px;border:1px solid var(--rail);border-bottom:0;overflow:hidden;position:relative;
 background:repeating-linear-gradient(135deg,transparent 0 6px,color-mix(in srgb,var(--bg) 7%,transparent) 6px 7px)}
.hatch svg{position:absolute;left:0;right:0;top:40px;width:100%}
.hatch text{font:700 300px/1 var(--font-text);fill:none;stroke:color-mix(in srgb,var(--bg) 20%,transparent);stroke-width:1.5}
@media(max-width:760px){.frame{grid-template-columns:1fr 1fr}.cell:first-child{grid-column:1/-1;border-bottom:1px solid var(--rail)}.cell:nth-child(even){border-left:0}.hatch{height:110px}}
```

The table version, with cells that invert on hover:

```css
body{background:var(--well);padding:300px 20px 24px}
.tbl{display:grid;grid-template-columns:repeat(24,1fr);border:2px solid var(--ink);background:var(--bg);max-width:1400px;margin:0 auto}
.tbl>a{grid-column:span 6;height:52px;display:grid;place-items:center;font:600 13px/1 var(--font-mono);letter-spacing:.04em;text-transform:uppercase;border-right:2px solid var(--ink);border-bottom:2px solid var(--ink);transition:background .15s,color .15s}
.tbl>a:hover{background:var(--ink);color:var(--bg)}
.tbl .h{grid-column:span 12}.tbl .u{grid-column:span 1}.tbl .h2{grid-column:span 11}
.tbl .end{border-right:0}
.icons{grid-column:1/-1;display:flex;justify-content:center}
.icons a{width:52px;height:52px;display:grid;place-items:center;border-left:2px solid var(--ink);font:700 15px/1 var(--font-mono)}
.icons a:last-child{border-right:2px solid var(--ink)}
@media(max-width:760px){body{padding-top:120px}.tbl>a,.tbl .h,.tbl .h2{grid-column:span 12}.tbl .u{grid-column:span 24}}
```

<!-- v:section.footer/page-lifts-off-footer -->
### 7. Page lifts off

*Feeling: the page is a sheet of paper on a dark desk.*

The white page ends in rounded bottom corners over a dark footer that sits behind it. Nothing else changes, and yet the whole page becomes an object. Ramp uses about 24px, Cal.com about 40px. Loops runs the same idea through its stripe rail, so the rounded corner carries the stripes around it. Use it on light product pages, and pair it with any sitemap structure. It is one of the cheapest strong endings there is.

The dark has to be behind the sheet. Set it on `body`, give the sheet the page fill, and do not put a white wrapper between them.

**Seen on** Ramp, Cal.com, Cal.com Pricing, Loops, Leo Cussen Centre for Law, 9 sites in all. **Suits** light-precision, warm-neutral, bold-colour; saas, education, finance, food-drink.

```css
body{background:var(--ink)}
.sheet{position:relative;z-index:1;background:var(--bg);border-radius:0 0 24px 24px;height:640px;display:grid;place-items:center;text-align:center}
.sheet h2{font:500 22px/1.2 var(--font-display);letter-spacing:-.01em;margin-bottom:24px}
.ask{display:flex;width:490px;height:58px;padding:6px;border:1px solid var(--line);border-radius:10px;align-items:center;justify-content:space-between;color:var(--ink-3);font-size:15px;padding-left:18px}
.ask b{height:44px;line-height:44px;padding:0 18px;border-radius:6px;background:var(--accent);color:var(--bg);font-weight:500}
.foot{background:var(--ink);color:var(--bg);padding:120px 64px 40px;margin-top:-1px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;max-width:1312px;margin:0 auto}
.cols b{display:block;font:500 14px/20px var(--font-text);margin-bottom:10px}
.cols a{display:block;font-size:14px;line-height:26px;color:color-mix(in srgb,var(--bg) 62%,transparent)}
.cols a:hover{color:var(--bg)}
@media(max-width:760px){.cols a{line-height:44px}.sheet{height:480px;border-radius:0 0 16px 16px;padding:0 16px}.ask{width:100%}.foot{padding:64px 16px 32px}.cols{grid-template-columns:1fr 1fr;gap:28px 16px}}
```

<!-- v:section.footer/inset-card-footer -->
### 8. Inset card footer

*Feeling: a closing plate, mounted on the page.*

The footer is one card, inset from the viewport on all sides so the page ground survives around it. Factory sets 1392 by 430 at radius 12, 24px from each edge, with columns packed to the far right, the wordmark bottom left and the left two-thirds left empty. Function Health uses a warm card at radius 24 with a 56px pad and a serif signup line. UNITO saves its one loud colour for a 265px card. Use it when the page already uses inset panels or a framed layout, since the card then reads as the last in a series. Keep at least 16px of ground visible. Put legal outside the card if the card is the brand moment, as Remote does. Avoid it on full-bleed photographic pages, where a floating card looks pasted on.

**Seen on** Function Health, Factory, Mixpanel, Rewiring America, UNITO, 22 sites in all. **Suits** bold-colour, warm-neutral, light-precision, gradient-light; ai, health, devtool, finance.

```css
.card{height:430px;background:var(--ink);color:var(--bg);border-radius:12px;padding:32px 40px;display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr auto}
.cols{grid-column:2;display:grid;grid-template-columns:repeat(3,auto);gap:0 64px;font-size:13px}
.cols b{display:block;font-weight:500;line-height:20px;margin-bottom:10px}
.cols a{display:block;line-height:24px;color:color-mix(in srgb,var(--bg) 55%,transparent)}
.cols a:hover{color:var(--bg)}
.mark{grid-column:1;grid-row:2;align-self:end;font:600 24px/1 var(--font-display);letter-spacing:.12em}
.legal{grid-column:2;grid-row:2;align-self:end;font-size:13px;line-height:22px;color:color-mix(in srgb,var(--bg) 60%,transparent)}
@media(max-width:760px){.cols a{line-height:44px}body{padding:120px 12px 12px}.card{height:auto;gap:40px;grid-template-columns:1fr;padding:24px}.cols,.mark,.legal{grid-column:1;grid-row:auto}.cols{grid-template-columns:1fr 1fr;gap:24px}}
```

<!-- v:section.footer/colour-flood-footer -->
### 9. Colour flood

*Feeling: the colour you were holding back.*

The largest flat colour on the whole page, kept for the end. Exa floods a saturated cobalt with fine grain and a thin serif sentence at about 77px. Browserbase goes to full orange with a white monogram. TR Studio makes a full-viewport periwinkle colophon with one centred seal, and closes on a 40px strip of oxblood. Use it when the brand owns a colour and the page above has been mostly neutral, because a flood after a colourful page adds nothing. Set all text in one tint of the field: white, or a dark of the same hue. A second colour usually ruins it. Avoid it if the brand colour is pale, because small links will fail contrast on it.

**Seen on** Exa, TR Studio, Wolff Olins Work, Heart & Soil, ROEH Law & Tax, 15 sites in all. **Suits** warm-neutral, bold-colour, expressive, type-led; education, local-business, culture, ai.

<!-- v:section.footer/giant-wordmark-finish -->
### 10. Giant wordmark finish

*Feeling: the name, signed large.*

Links on top, then the wordmark at full container width as the last thing on the page, in full contrast. Amplitude and Baseten both do this on pure black. Baseten frames it between hairlines and gives each column a small filled label bar. Monzo sets a coral wordmark inside an inset panel. Discord fades it into a gradient. Use it when the name is short and well drawn. It became common quickly, so give it something of its own: a label bar, a colour, a crop, a mascot in the C as on Canary.

Word length sets height. Baseten's seven letters stand about 280px tall across 1368px, and my six narrower letters stood about 370px. Check that the legal row still fits on a laptop.

Use the logo's SVG with a viewBox trimmed to the ink. If all you have is a font, size from ink bounds as below. Advance width is not enough, because at this scale a side bearing is 20px or more, and the word will visibly miss the margin.

**Seen on** Amplitude, Baseten, Wildbran, Prägen Hätlen, Pentagram Contact, 23 sites in all. **Suits** photo-led, light-precision, bold-colour, type-led; agency, saas, ai, food-drink.

```css
.foot{padding:36px 36px 20px;overflow:hidden}
.cols{display:grid;grid-template-columns:repeat(4,1fr);gap:0 12px;min-height:300px}
.cols b{display:block;height:24px;background:var(--ink);color:var(--bg);font:500 11px/24px var(--font-mono);letter-spacing:.06em;text-transform:uppercase;padding:0 8px;margin-bottom:12px}
.cols a{display:block;font-size:14px;line-height:30px;padding:0 0;color:var(--ink)}
.status{display:flex;justify-content:space-between;align-items:center;height:48px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-size:14px}
.status span:first-child{color:var(--ok)}
.status span:first-child::before{content:"";display:inline-block;width:7px;height:7px;background:currentColor;margin-right:8px;vertical-align:1px}
.status nav{display:flex;gap:20px}
.fit{container-type:inline-size;margin-top:10px}
.mark{display:block;width:max-content;white-space:nowrap;font:600 calc(100cqw/var(--k,2.8))/.86 var(--font-display);letter-spacing:-.045em;padding-bottom:.12em}
.legal{display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:14px;font-size:14px;color:var(--ink-3)}
@media(max-width:760px){.cols a{line-height:44px}.foot{padding:32px 16px 16px}.cols{grid-template-columns:1fr 1fr;gap:24px 12px;min-height:0;padding-bottom:24px}}
```

```html
<div class="fit"><div class="mark" data-fit>name</div></div>
<script>
document.fonts.ready.then(()=>{const el=document.querySelector('[data-fit]'),cs=getComputedStyle(el),fs=parseFloat(cs.fontSize);
const c=document.createElement('canvas').getContext('2d');c.font=`${cs.fontWeight} 200px ${cs.fontFamily}`;c.letterSpacing=(parseFloat(cs.letterSpacing)/fs*200)+'px';
const m=c.measureText(el.textContent);el.parentNode.style.setProperty('--k',(m.actualBoundingBoxLeft+m.actualBoundingBoxRight)/200);el.style.marginLeft=(m.actualBoundingBoxLeft/200)+'em'})
</script>
```

<!-- v:section.footer/ghost-wordmark-crop -->
### 11. Ghost wordmark

*Feeling: a watermark in good paper.*

The same huge word, set barely off the ground. Bauhaus Clock puts it on the page tone at about 11 percent ink, with a single row beneath in 20px type. Resend sets `#111` on black, cropped by a full-width hairline with a soft glow under it. Substack fades it into white and Otter crops it at the page edge. It gives a footer weight without volume, so it suits calm pages and light products. Links stay in full contrast above it. The tone must be visible on an ordinary laptop screen, so test it on a dim display, and if you crop, cut about a third so it reads as deliberate.

**Seen on** Bauhaus Clock, Resend, Medusa622, Symbol Studio, Dalco, 13 sites in all. **Suits** light-precision, warm-neutral, bold-colour, gradient-light; saas, local-business, food-drink, devtool.

```css
.foot{padding:0 50px 28px}
.fit{container-type:inline-size}
.mark{display:block;width:max-content;white-space:nowrap;font:500 calc(100cqw/var(--k,6.2))/1.05 var(--font-display);letter-spacing:-.015em;color:color-mix(in srgb,var(--ink) 11%,var(--bg))}
.row{display:flex;justify-content:space-between;font-size:20px;line-height:24px;color:var(--ink-2);margin-top:6px}
.row a:hover{color:var(--ink)}
@media(max-width:760px){.foot{padding:0 16px 20px}.row{flex-direction:column;gap:4px}}
```

<!-- v:section.footer/masked-wordmark -->
### 12. Masked wordmark

*Feeling: a window cut in the shape of the name.*

The letters are an aperture. Cal.com shows a halftoned photograph through them, dark overall with one or two bright passages. Webflow masks cycling customer sites through its W. Leeroy fills a 920px wordmark with moving video. Airpost and Visora take the other route, with letters as a 1 to 1.5px outline and no fill. Use it when you have a single strong image or real customer work. Use one huge close-up, because a busy scene turns each letter into a separate collage. The letters must survive at a glance, so hold the image back with a veil.

**Seen on** Cal.com, Webflow Pricing, Airpost, Visora, Aarretuote, 7 sites in all. **Suits** light-precision, dark-precision, render-3d, photo-led; ai, agency, saas, ecommerce.

```css
.wm{margin:0 40px;height:340px;overflow:hidden;container-type:inline-size;position:relative}
.wm b{display:block;width:max-content;white-space:nowrap;font:600 calc(100cqw/var(--k,2.9))/.8 var(--font-display);letter-spacing:-.04em;padding-top:.06em;color:transparent;
 -webkit-background-clip:text;background-clip:text;background-image:radial-gradient(circle,transparent 0 58%,var(--bg) 62%),url(photo.jpg);background-size:5px 5px,cover;background-position:0 0,center 35%}
.wm::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,color-mix(in srgb,var(--bg) 62%,transparent),transparent 45%,color-mix(in srgb,var(--bg) 45%,transparent));pointer-events:none}
@media(max-width:760px){body{padding-top:120px}.wm{margin:0 16px;height:110px}}
```

<!-- v:section.footer/statement-closer -->
### 13. Statement closer

*Feeling: the last word.*

The largest thing in the footer is a sentence. Scale AI sets a two-line 116px statement under five small mono columns, then socials and a right-aligned mono legal row. Spring/Summer runs a plain question at about 170px, cropped by the left edge, with a clock and a working-hours line beneath. Stripe Sessions repeats the hero heading, so the page closes on the line it opened with. Fantasy cuts from 14,000px of black to a plain white block with a two-tone invitation at 42/46. Reformation closes on a joke at 48px. Say something true and specific. If the line could go on any site, it is a slogan, and you should use a different ending. Avoid it directly under a big closing call to action, since two shouts in a row cancel out.

**Seen on** Scale AI, Stripe Sessions, ECI, Reformation, STUDIO UNLMTD, 11 sites in all. **Suits** photo-led, gradient-light, bold-colour, dark-precision; ai, agency, brand, fashion.

<!-- v:section.footer/contact-first-footer -->
### 14. Contact first

*Feeling: a business card.*

For a studio or a trade there is no sitemap to speak of, and the visitor wants to get in touch. Bakstad Construction runs one 95px ruled strip with text clusters at fixed columns: firm and principal, keyed `E` and `T` lines, address, then Instagram and Get in Touch. Everything is real selectable text at 15/20. Nicole Heim stacks label and value pairs at the left margin and sets nav right-aligned. Locomotive sets its address and phone at 70px, with pictograms inside the line, and it becomes the signature of the site. Loopcraft fills a viewport with a short greeting, a 48px email and a 40px phone number.

Do not use it for a product with a real navigation to index. Do use the keyed `E` and `T` idea anywhere, because it is both compact and handsome.

**Seen on** Bakstad Construction, Nicole Heim Studio, Locomotive, Loopcraft, SERY*, 21 sites in all. **Suits** photo-led, type-led, light-precision, bold-colour; agency, architecture, food-drink, saas.

```css
body{display:grid;grid-template-columns:92px 1fr;min-height:100vh;font-family:var(--font-text)}
.rail{border-right:1px solid var(--ink);position:relative;font-size:15px}
.rail b{position:absolute;left:16px;top:8px;font:700 54px/1 var(--font-display)}
.rail span{position:absolute;left:16px;bottom:30px}
.main{display:grid;grid-template-rows:1fr auto}
.strip{border-top:1px solid var(--ink);min-height:95px;padding:24px 28px;display:grid;grid-template-columns:minmax(0,285px) minmax(0,319px) 1fr auto;gap:0 16px;font:400 15px/20px var(--font-text)}
.strip dl{display:grid;grid-template-columns:28px auto;align-content:start;width:max-content}
.strip dd{margin:0}
.strip nav{display:flex;gap:32px}
@media(max-width:1000px){.strip{grid-template-columns:1fr 1fr;gap:16px}}
@media(max-width:760px){body{grid-template-columns:1fr}.rail{display:none}.strip{padding:20px 16px;grid-template-columns:1fr;gap:12px}.strip a{display:inline-block;line-height:44px}}
```

```html
<footer class="strip">
  <div>MARLOW JOINERY<br>Tessa Marlow, Principal</div>
  <dl><dt>E</dt><dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
      <dt>T</dt><dd><a href="tel:+12065550142">+1 206 555 0142</a></dd></dl>
  <address>4701 Harbor Way #249<br>Seattle, WA 98116</address>
  <nav><a>Instagram</a><a>Get in touch</a></nav>
</footer>
```

<!-- v:section.footer/local-hours-footer -->
### 15. Local hours footer

*Feeling: the sign on the door.*

For anywhere people visit, the footer is where they check whether you are open. Sam Hoult sets a script logo at 80px left and hours as three plain lines right, on a deep espresso ground, then one row of links and round outlined socials, a faint rule, and a credit line. Isolabella della Croce gives hours per service: cellar, pool, check-in, reception. Fenriz Gym right-aligns the day labels to bold times, so the eye runs down a single gutter. Guggenheim opens its footer with Hours, Address and Tickets as three columns. Always include the street address, a working phone link and the real hours, in text. Local footers should feel like the place, so a crest, a pattern band or a drawn border is welcome here. Skip it for online-only businesses, where hours mean nothing.

**Seen on** Dishoom, Guggenheim Visit, Villa Aurelia, Isolabella della Croce, Sam Hoult Beauty, 13 sites in all. **Suits** warm-neutral, photo-led, light-precision, type-led; food-drink, culture, local-business, hospitality.

```css
.foot{max-width:1312px;margin:0 auto;padding:0 64px 56px}
.top{display:grid;grid-template-columns:1fr auto;align-items:start;gap:40px;padding-bottom:64px}
.logo{font:italic 400 80px/1 var(--font-display);color:var(--accent)}
.logo small{display:block;font:400 13px/1 var(--font-text);letter-spacing:.42em;color:var(--ink-2);margin-top:10px}
.hours{display:grid;grid-template-columns:auto auto;gap:10px 32px;font-size:16px;line-height:24px}
.hours dt{color:var(--ink-2)}.hours dd{margin:0;text-align:right;font-variant-numeric:tabular-nums}
.hours .head{grid-column:1/-1;color:var(--ink);font-weight:500}
.row{display:flex;justify-content:space-between;align-items:center;padding-bottom:32px;border-bottom:1px solid var(--line)}
.row nav{display:flex;gap:40px;font-size:16px;font-weight:500}
.row address{font-style:normal;font-size:16px;color:var(--ink-2)}
.row address a{color:var(--ink);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--ink-3)}
.base{display:flex;justify-content:space-between;padding-top:24px;font-size:14px;color:var(--ink-3)}
@media(max-width:760px){.foot{padding:0 16px 32px}.top{grid-template-columns:1fr}.logo{font-size:48px}.row{flex-direction:column;align-items:flex-start;gap:16px}.row nav{flex-wrap:wrap;gap:12px 24px}.base{flex-direction:column;gap:8px}}
```

<!-- v:section.footer/one-line-colophon -->
### 16. One-line colophon

*Feeling: honest about its size.*

For a page with few destinations, one row. Elyx sets a single centred line with dot separators directly on its background art. UploadThing runs copyright, three links, a green status dot and three icons under a hairline. Daily uses mono slash-prefixed links in about 100px. Teenage Engineering sets seven thin lowercase links in a 96px black strip. Block pins six links to the bottom of the viewport so they mirror the top row. Svelte uses one centred sentence, because the real footer lives in the docs. A short footer shows confidence, and padding one with columns you do not need is exactly what cheapens it.

**Seen on** Block, Elyx, Babylonstoren, Paco Coursey, Fidèle, 26 sites in all. **Suits** type-led, light-precision, photo-led, bold-colour; devtool, finance, portfolio, agency.

<!-- v:section.footer/closing-scene-footer -->
### 17. Closing scene

*Feeling: a small reward for reaching the end.*

A drawn or generated picture sits at the top of the footer, cropped by its rule. Hugging Face heaps hundreds of sticker mascots into a mound resting on the hairline. Greylock draws about twelve horizontal hairlines on a canvas that swell into one soft ridge, like a contour. Decagon runs an orange to magenta glow along a horizon. Comet crops a speckled sphere across a panel edge. Raycast raises red slashes from a 1px rule. Reflect sits an eclipse in a 170px band. The picture must come from the brand's own world, and it stays under about 300px, so the links still arrive in the first screen after it.

Avoid generic waves and blobs. If you could swap the logo and the scene would still work, it is decoration.

**Seen on** Greylock, Decagon, Comet, Raycast Pricing, Inngest, 17 sites in all. **Suits** bold-colour, light-precision, dark-precision, soft-pastel; ai, saas, devtool, finance.

<!-- v:section.footer/final-image-footer -->
### 18. Final image

*Feeling: the credits roll over the last shot.*

There is no separate block. The last photograph or film runs to the page bottom, and the footer is laid inside it. SpaceX sets one row of 12px tracked caps links with a 36px round back-to-top button, and copyright at the right edge. a16z overlays an engraved 52px logo on the bottom of a film. Katja Ogrin fills a viewport with her photo and stacks nav, socials, a 33px email and a monogram. Huel lets a forest dissolve into near black behind its links. It needs a dark and quiet lower edge in the image itself, or a scrim drawn from the image's own colour. Test the contrast of every link, since a photo changes under them across widths.

**Seen on** Katja Ogrin, Oxygen Pictures, SpaceX, PURHO, Huel, 8 sites in all. **Suits** photo-led, type-led, warm-neutral, expressive; brand, ecommerce, portfolio, agency.

<!-- v:section.footer/typeset-legal-footer -->
### 19. Typeset legal

*Feeling: the fine print is respected.*

Where disclosures run to pages, set them as a document. Mercury gives them a real layout: a 13px label in the left column and numbered notes in a 680px measure at 13/17, with underlined links and bold on warnings. Public sets 11 to 12px disclosures on a one-step cool tint, with bold run-in heads. Affirm holds a 14/20 block with an 18px paragraph gap under its wordmark. Ritual puts its regulatory statement in an outlined box. Use it for finance, health and insurance, and do not hide this text behind a toggle. Regulators read it, and so do careful customers. Number the notes and link them from the claims above.

**Seen on** Public, Increase, Affirm, Mercury Pricing, Monark Markets, 12 sites in all. **Suits** light-precision, dark-precision, bold-colour, photo-led; finance, health, architecture.

<!-- v:section.footer/large-link-index -->
### 20. Large link index

*Feeling: a table of contents you could read across a room.*

Few links, set large. Nuro runs 20px links on a 37px pitch in two columns at the left, with almost nothing else. Figure numbers six items from 01 to 06 at about 40px with hairlines between. Prototype stacks three words at 120px, right-aligned, beside a looping reel tile. Basement pushes a 38px list to the bottom of a full viewport, keeping small superscript counts. Athletics sets two 22px lists with no headings and nothing else but three corners of small print. Use it when the site has six to ten destinations and the type is good. It fails with long labels and with anything over about ten items.

**Seen on** Nuro, Figure, Prototype, Astral, Gagosian, 10 sites in all. **Suits** photo-led, bold-colour, type-led, light-precision; agency, ai, brand, devtool.

<!-- v:section.footer/accordion-footer -->
### 21. Accordion footer

*Feeling: everything folded neatly away.*

The sitemap collapses to ruled rows. Anthropic's news page uses 52px rows in a right-hand 848px column, with 15px muted labels, a chevron far right and the hovered row turning white. Stone Island splits black in two, with rows on a 42px pitch at left and newsletter, region and language at right. Reformation pairs a 48px joke on one side with accordion rows on 57px on the other. It solves the phone at a stroke, and on desktop it stops a long footer from shouting. Use a real `<details>` element or a button with `aria-expanded`, so everything stays reachable by keyboard. Search engines read collapsed links, so nothing is lost. On desktop, avoid it for sites under about 20 links, where folding hides almost nothing.

**Seen on** Anthropic News, Stone Island, Reformation. **Suits** warm-neutral, mono-technical; editorial, fashion.

<!-- v:section.footer/object-signoff -->
### 22. Object sign-off

*Feeling: a maker's mark.*

The ending is one small made thing. Benzo mounts a slightly tilted paper wall label on dark wallpaper, like a museum caption, holding the name, title, medium and copyright. A portfolio ends on a dock of glossy icons, a pixel local time and a green availability line. Felix Haas ends on an ink signature. Red closes on a tilted black strip that works as the back link. It is for personal sites and concepts with a strong idea, used once, and everything legally needed must live inside the object. On a company site it reads as a joke at the wrong moment.

**Seen on** Felix Haas, Yuriy Vitrenko's Library, Benzo the Great Developer, i-D and Ray-Ban present RED, lorisbukvic.graphics, 9 sites in all. **Suits** expressive, type-led, illustrated, render-3d; portfolio, culture, agency, local-business.

<!-- v:section.footer/app-download-card -->
### 23. App download card

*Feeling: a way to get from this screen to your phone.*

A left card of 310 to 430px sells the app, then link columns follow. Affirm sets a gradient-stroked card with a thin 76px rating, stars, the review count, a QR code and a phone crop. Hims uses a dark `#1c1c1c` card with a QR tile and a hand holding a phone. Bitnomi gives the whole final screen to a QR tile and store badges. The QR code matters because a desktop visitor has no other easy route to their phone. Use it only when the app is the product, and show the real rating with its count.

**Seen on** Hims, Affirm, Bitnomi, xtrackr. **Suits** dark-precision, photo-led; finance, health.

### Mistakes that cheapen a footer

Each of these appeared in my own first attempts or in the analysts' failure notes.

- **Stretched letters.** My first wordmark used SVG `textLength` with `lengthAdjust="spacingAndGlyphs"` to reach the margins. It distorted the glyphs into a false extended face, which anyone who cares about type sees at once. Never scale a word on one axis.
- **Missing the margin.** The next attempt fitted the advance width and still fell 25px short of the left margin, because of the side bearing. Measure ink, or use a trimmed SVG.
- **Corners that show white.** My first page lift had no visible curve, because `body` was white behind the sheet. The dark must sit behind it.
- **A masked word as a collage.** My first masked wordmark put a busy colour photograph behind the letters at full strength, and it looked like a ransom note. The real one is dark and halftoned, with one bright passage. Too dark loses it as well, so test it twice.
- **A grid that starts at the footer.** Rails must come down from the section above. Mine first began at the footer's top edge, and it looked like a table pasted on.
- **Pixel columns copied literally.** Every width here comes from a 1440 canvas. My Linear study used `repeat(6,224px)`, and it overflowed at 1100. Use `minmax(0,224px)`, and test at 820 and 1100 as well as at phone width.
- **Stretched rows.** A `<dl>` in a fixed-height strip spread its two lines apart because grid rows stretch by default. Set `align-content:start`.
- **28px rows on a phone.** The render report flagged 35 links under 32px tall on one footer. Keep the desktop pitch, and raise the link line to 44px under 760px.
- **Faint legal text.** A third-level grey on dark measured 4.0:1. Use the second level.
- **Text one notch small.** At 13px my Linear study looked timid next to the real 14, and at 15 my Render study looked timid next to the real 16. Round up.
- **Icon soup.** A row of eight social glyphs says nothing. Name the three that matter as text, as Factory does.
- **A status line that lies.** A hard-coded `All systems operational` is a false claim waiting to happen. Read it from a status source, and link it to the status page.
- **Repeating the logo three times.** The nav has it, and the footer needs it at most once.
- **A sticky cookie banner over the only legal link.** Check the footer with every overlay open.

## Gallery and portfolio

A gallery has two jobs: show the work at a size that lets it be judged, and let someone find the next piece without effort. Everything else is packaging, and the packaging is usually what goes wrong.

What separates great from cheap is editing. A great gallery has a point of view about scale and order: rows that change beat, images that keep their true shape, a caption system so consistent that it disappears. The work is the only loud thing, and corners are square or barely rounded because the picture should not look like a UI component. A cheap gallery is a three-by-three grid of identically cropped rounded cards with a dark overlay, a centred title that fades in on hover, and a `View project` button. That recipe hides the work behind chrome, and it makes a photographer, a bakery and a law firm look the same.

Three decisions set the quality:

- **Crop or keep.** If the work has its own proportions, such as art, architecture or print, keep them. If you are selling a mood, crop hard and consistently.
- **Caption outside or inside.** Captions outside the image outnumber captions inside about two to one. Inside is only for images that are dark and quiet at the foot.
- **Index or wall.** Decide whether people browse by looking or by reading. Some of the strongest portfolios in the corpus show no images until you hover a row.

Measured ranges: gaps 12 to 32 with a median of 20, though dense walls go down to 2 and rhythm rows up to 50. Radius is 0 more often than any other value, and 10 is the median where it is rounded. Captions are usually 13 to 16px, and art and editorial galleries go up to 24px. A hovered card image scales by a median of 1.04 over 300ms.

Scroll tricks are a cost, not a feature. If you pin, scrub or drive anything horizontally, it must still work with a keyboard and on a phone, where the fallback is a plain stack.

<!-- v:section.gallery-portfolio/caption-row-grid -->
### 1. Caption row grid

*Feeling: a contact sheet from someone careful.*

Plain images with one quiet row of text beneath. It is the workhorse, and nearly all of its quality is in that row. Bakstad Construction puts it 8 to 10px below the photo at 15/20: name in ink, place and year in a pale grey at 40px steps, and `View Project` with an arrow right-aligned to the image edge. No card, no border, no hover chrome. Basic Agency uses three 413 by 517 portraits with bold caps client names. Nicole Heim uses two 686px columns with only a 2px gutter. Use it for almost any portfolio. Make sure the caption shares the image's own left and right edges, because that is what binds them into one object.

**Seen on** Bakstad Construction, Nicole Heim Studio, Kinfolk, 099, Royal Ontario Museum, 30 sites in all. **Suits** photo-led, light-precision, type-led, bold-colour; agency, culture, architecture, portfolio.

```css
.wrap{max-width:1296px;margin:0 auto;padding:56px 24px;display:grid;grid-template-columns:repeat(12,1fr);gap:96px 24px;align-items:end}
.item{grid-column:span 6}
.item.narrow{grid-column:3/span 4}
.item img{display:block;width:100%;aspect-ratio:var(--r,4/5);object-fit:cover}
.cap{display:grid;grid-template-columns:auto auto 1fr;gap:40px;margin-top:10px;font-size:15px;line-height:20px}
.cap span{color:color-mix(in srgb,var(--ink) 32%,var(--bg))}
.cap a{justify-self:end}
.cap a:hover{text-decoration:underline;text-underline-offset:3px}
.note{grid-column:8/span 5;align-self:end;padding-bottom:30px;font:400 25px/30px var(--font-display);letter-spacing:-.01em;color:var(--ink)}
.note small{display:block;color:color-mix(in srgb,var(--ink) 32%,var(--bg));font-size:25px}
@media(max-width:760px){.wrap{display:block;padding:32px 16px}.item{margin-bottom:40px}.cap{gap:16px}.note{padding:0;font-size:20px;line-height:25px;margin-bottom:40px}.note small{font-size:20px}}
```

<!-- v:section.gallery-portfolio/rhythm-rows -->
### 2. Rhythm rows

*Feeling: someone laid this out by hand.*

The number of images per row changes on purpose, and everything stays locked to the same gutters. HAY runs three 410 by 495 portraits at a 50px gap, then two 640px landscapes, inside 55px page margins. Evenark runs one 1310px tile, then two at 643. Make Town breaks a two-up grid with full 1400px images. Lazy Eight sets four square tiles in a tight 4px block with 300px of empty page between projects. It needs nothing but a grid, and it is the simplest way to stop a gallery looking generated. Set the row pattern from the images, not from a repeating formula, so a strong picture gets the full width.

**Seen on** HAY, Evenark, Lazy Eight, Russell & Stellar, Make Town. **Suits** photo-led, type-led; agency, ecommerce, food-drink, local-business.

<!-- v:section.gallery-portfolio/on-image-title-tiles -->
### 3. On-image title tiles

*Feeling: a wall of posters.*

The title sits inside the image, bottom left, inset 16 to 26px. Foster + Partners uses 427 by 335 tiles, 24px gaps, no radius, and a 21/500 white caption on an 80px black gradient. Sidekick uses two 692px squares with a dark gradient rising from the base. Stability AI butts three videos with no gaps in a block at radius 16, so they read as one cinematic strip. Use it when pictures are strong, and when the foot of each image can take text. Limit the scrim to the base of the image. A flat dark layer across a whole photograph protects three words and ruins the picture. Avoid it for pale or busy images, where no small scrim will hold the text.

**Seen on** Fujifilm X, Foster + Partners, Stability AI, Virtual Tour Montenegro, Leica, 9 sites in all. **Suits** photo-led, type-led, warm-neutral, gradient-light; agency, brand, architecture, ai.

<!-- v:section.gallery-portfolio/lead-mosaic -->
### 4. Lead mosaic

*Feeling: an edited front page of images.*

One large tile beside a stack of smaller ones, so the eye gets a hierarchy that a uniform grid cannot give. Oxygen Pictures uses four columns where row one spans 2+1+1 and row two 1+2+1, with tiles of 216 or 404px height, 16px gaps, greyscale film, and deliberate holes in the grid. Studio Dado sets one large landscape beside a 2×2 at 8px gaps under a huge caps title. Sonder runs one tall photo plus six city tiles. Framer sets two rows of live site tiles at radius 15 and 10px gaps, as the first colour after a long black run. The holes matter, because a mosaic with every cell filled turns into a bento. Hold them to the grid. Avoid it with fewer than about six pieces, or when no image is strong enough to lead.

**Seen on** Sonder, Studio Dado, Framer, Oxygen Pictures, UNITO, 10 sites in all. **Suits** warm-neutral, photo-led, type-led, dark-precision; agency, ecommerce, hospitality, architecture.

```css
.m{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:216px;gap:16px;padding:24px}
.t{position:relative;overflow:hidden;background:var(--surface);color:#fff}
.t img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter .3s ease}
.t:hover img{filter:none}
.t::after{content:"";position:absolute;inset:auto 0 0;height:96px;background:linear-gradient(transparent,rgba(0,0,0,.72))}
.t div{position:absolute;left:12px;bottom:10px;z-index:1;font-size:15px;line-height:20px}
.t small{display:block;font-size:15px;color:rgba(255,255,255,.55)}
.gap::after{display:none}
.big{grid-column:span 2;grid-row:span 2}
.gap{background:none}
@media(max-width:760px){.m{grid-template-columns:1fr 1fr;grid-auto-rows:44vw;gap:8px;padding:16px}.gap::after{display:none}
.big{grid-column:span 2;grid-row:span 1}.gap{display:none}}
```

<!-- v:section.gallery-portfolio/true-ratio-gallery -->
### 5. True ratio gallery

*Feeling: a catalogue that respects the work.*

Each work keeps its own proportions. Gagosian uses three columns with art up to about 376px wide, uncropped, aligned to the bottom of the row so tops stagger and titles share one baseline. Under it sit a condensed 23px artist and title, then 17 to 18px dates and venue. Herzog & de Meuron sets five 250px columns with images centred on the row midline and centred captions. New Exhibitions runs a rail at native ratio. It is the correct choice for art, architecture and any work where a crop would be a lie. Set the row height to the tallest image you allow, align to the end of that track, and let the page stay white. Avoid it for lifestyle imagery, where mixed ratios only look untidy and a confident crop reads better.

**Seen on** Gagosian, New Exhibitions, Herzog & de Meuron, The Officin. **Suits** photo-led, type-led, mono-technical; culture, architecture, other.

```css
.grid{max-width:1240px;margin:0 auto;padding:64px 24px;display:grid;grid-template-columns:repeat(3,1fr);gap:64px 56px}
figure{display:grid;grid-template-rows:330px auto}
figure img{align-self:end;display:block;max-width:100%;max-height:330px;width:auto;height:auto}
figcaption{padding-top:16px;font:400 17px/21px var(--font-text);color:var(--ink)}
figcaption b{display:block;font:700 23px/24px var(--font-display);letter-spacing:-.01em;margin-bottom:10px}
@media(max-width:760px){.grid{grid-template-columns:1fr;padding:32px 16px;gap:40px}figure{grid-template-rows:auto}figure img{max-height:none}}
```

<!-- v:section.gallery-portfolio/dense-image-wall -->
### 6. Dense image wall

*Feeling: so much work that it needs no words.*

Edge to edge, tiny gaps, no captions. Elisa Breyer's archive runs four columns at 2px gutters for 10,000px. three.js fills everything right of its rail with six zero-gap columns of project thumbnails. Ideogram runs a four-column masonry at 6px gaps that fades to white, with one 40px pill on the fade. Use it when volume is the argument: archives, community output, templates. It fails below about 30 pieces, because the scale is the point. Give each tile an accessible name, even though the caption is hidden.

**Seen on** Elisa Breyer Archive, The School for Temporary Liveness, three.js, Ideogram, Haikei, 9 sites in all. **Suits** photo-led, expressive, type-led, mono-technical; culture, devtool, ai, agency.

<!-- v:section.gallery-portfolio/peek-rail -->
### 7. Peek rail

*Feeling: there is more, just past the edge.*

Left-aligned to the page grid and running off the right edge, with the next tile cut by the viewport. Apple's rail uses 818 by 528 tiles at radius 20, a 20px gap, a 21px caption below and 36px round arrows right-aligned beneath. Aman uses square destination cards with an underlined link. Loopcraft uses 375 by 560 cards at radius 40. The cut tile is the affordance, so never let tiles end flush with the viewport. Use native horizontal scrolling with `scroll-snap`, which gives touch for free, and add arrows only as an extra. On phones the arrows can go.

**Seen on** Apple Vision Pro, Aman, La Table de Joakim, Apple, A24, 18 sites in all. **Suits** photo-led, bold-colour, dark-precision, warm-neutral; agency, brand, hospitality, culture.

```css
section{--edge:max(24px,calc((100vw - 1024px)/2));padding:96px 0}
h2{font:600 48px/1.08 var(--font-display);letter-spacing:-.018em;margin:0 var(--edge) 48px}
.rail{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-left:var(--edge);padding:0 var(--edge);scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.rail figure{flex:0 0 min(818px,86vw);scroll-snap-align:start}
.rail img{display:block;width:100%;height:528px;object-fit:cover;border-radius:20px;background:var(--surface)}
.rail figcaption{font-size:19px;line-height:27px;color:var(--ink-2);padding:20px 24px 0 0;max-width:30em}
.rail b{color:var(--ink);font-weight:600}
.ctl{display:flex;justify-content:flex-end;gap:12px;margin:24px var(--edge) 0}
.ctl button{width:36px;height:36px;border:0;border-radius:50%;background:color-mix(in srgb,var(--ink) 8%,var(--bg));color:var(--ink);font-size:15px}
.ctl button:hover{background:color-mix(in srgb,var(--ink) 14%,var(--bg))}
@media(max-width:760px){section{padding:56px 0}h2{font-size:32px;margin-bottom:24px}.rail{gap:12px}.rail img{height:60vw}.rail figcaption{font-size:16px;line-height:23px}.ctl{display:none}}
```

<!-- v:section.gallery-portfolio/centred-slide-carousel -->
### 8. Centred slide carousel

*Feeling: a screening room.*

One big slide centred, neighbours peeking both sides. Apple runs about 930px with 12px gaps, a dot pager with an elongated progress dot, and a 24px play-pause disc at far right. DJI runs 1200px with about 104px of neighbour showing on each side, with a white title on the footage. Use it for film, footage and product pictures with a big subject. Any autoplay needs a visible pause, and it should stop when the tab is hidden or the user prefers reduced motion. Do not use it to hide content, since most people never see slide four.

**Seen on** Apple, 1 Hotels, Alessandro Stella, Art Direction & Design Consultancy, DJI, montarville, 9 sites in all. **Suits** photo-led, warm-neutral, dark-precision, light-precision; brand, hospitality, architecture, portfolio.

<!-- v:section.gallery-portfolio/fixed-height-filmstrip -->
### 9. Fixed-height filmstrip

*Feeling: a strip of negatives held up to the light.*

Height is the only constant. Special Production Agency sets every image at 620px tall, widths from about 300 to 900 by native aspect, 100px gaps, and 140px of white above and below. Off-focus neighbours veil towards white. Camille Mormal runs small 3:4 tiles centred on near black with a tiny counter below. DixonBaxi runs an endless rail of 288 by 378 portraits, cut by both edges. Because the height is fixed, wildly different images sit together without a crop. Use `height` on the image and `width:auto`, and give the row a horizontal scroll container rather than hijacking the wheel if you can.

**Seen on** Roy Jad, Camille Mormal, Xin Cheng Foods, Special Production Agency, DixonBaxi, 7 sites in all. **Suits** photo-led, expressive, light-precision, warm-neutral; portfolio, agency, food-drink, education.

<!-- v:section.gallery-portfolio/ruled-project-rows -->
### 10. Ruled project rows

*Feeling: an index you could frame.*

Each project is one row under a rule, with its zones in the same place every time. Basement sets an 816px image at the left, a 20/21 semibold description next to it, the name at 38px right-aligned at far right, and the category on the row's bottom edge. Effepinna uses 50px bold titles with autoplay video flush right at uneven widths. Patrick Heintzmann sets an index, a spec block and a 16:9 clip. Locomotive drops images altogether in favour of 70px serif names in 72px rows, with a thumbnail set inline inside the word. Repeating zones are what let work of different shapes read as one list. Avoid it without strong media, since each row is a screen tall and weak work has nowhere to hide.

**Seen on** Locomotive, Patrick Heintzmann, Basement Studio, Effepinna Studio, Design Podcast (Focus State). **Suits** bold-colour, type-led, mono-technical, dark-precision; agency, portfolio, editorial.

```css
.w{padding:32px 16px}
h2{font:600 72px/1.1 var(--font-display);letter-spacing:-.03em;color:color-mix(in srgb,var(--ink) 72%,var(--bg));margin-bottom:24px}
.r{display:grid;grid-template-columns:minmax(0,59%) minmax(0,1fr) minmax(0,auto);gap:0 12px;border-top:1px solid var(--line-strong);padding:16px 0;min-height:480px}
.r img{width:100%;height:456px;object-fit:cover;display:block}
.r p{font:600 20px/21px var(--font-text);letter-spacing:-.01em;max-width:320px}
.r h3{font:600 38px/42px var(--font-display);letter-spacing:-.02em;text-align:right}
.r .cat{grid-column:2;align-self:end;font:600 16px/20px var(--font-text)}
.r>div{display:grid;grid-template-rows:1fr auto}
@media(max-width:1000px){.w{padding:24px 16px}h2{font-size:40px}.r{display:flex;flex-direction:column;min-height:0;gap:8px}.r img{height:56vw}.r h3{text-align:left;order:-1;font-size:28px;line-height:32px}}
```

<!-- v:section.gallery-portfolio/tabular-project-index -->
### 11. Tabular project index

*Feeling: there is so much work that it needs a table.*

The portfolio is a table, and the confidence comes from showing no pictures. Olivier Larose sets 40px rows at 14px, with title, type, client and year right-aligned, 1px rules at full width, and a hovered row that inverts and indents. Adrien Quéchon lists awards with mono tags. A TV-listing page sets channels in amber numerals. Dogstudio turns the list into a slow 80px roulette. Use it when there are 15 or more projects and type is strong. Give it a floating preview on hover for those who want pictures, and make that image follow keyboard focus too. Use a real table or a list of links, so it stays legible to assistive tech.

**Seen on** Prototype, Olivier Larose, SERY*, Sonar, cagdascecen.com, 8 sites in all. **Suits** photo-led, type-led, expressive, light-precision; agency, portfolio, culture, education.

```css
.t{padding:28px 24px}
.r{display:grid;grid-template-columns:1fr 1fr 1fr 80px;align-items:center;height:40px;border-bottom:1px solid var(--line);font-size:14px;letter-spacing:-.005em;padding:0;transition:padding .25s cubic-bezier(.2,.7,.2,1)}
.r span:last-child{text-align:right;font-variant-numeric:tabular-nums}
.r:hover,.r.on{background:var(--ink);color:var(--bg);padding:0 14px;border-color:var(--ink)}
@media(max-width:760px){.t{padding:12px 16px}.r{grid-template-columns:1fr 60px}.r span:nth-child(2),.r span:nth-child(3){display:none}}
```

<!-- v:section.gallery-portfolio/side-caption-pairs -->
### 12. Side caption pairs

*Feeling: a page from a good catalogue.*

A wide image and a narrow text column, bottom aligned. White Cube sets a 920px installation view with a 260px column beside it: 11px caps label, artist, italic title, dates, a paragraph at 14/1.6, and an arrow link, with about 100px between rows. Katja Ogrin reverses the emphasis, with six numbered titles beside one tall 680 by 770 image. Athletics tilts its media 1 to 2 degrees and centres a 22px caption beside it. Use it when each piece has something to say, and where a reader will stop on one at a time. It takes space, so aim for 8 to 12 projects, not 40.

**Seen on** White Cube, Theatre Memory, Whitney Visit, Athletics, Katja Ogrin. **Suits** type-led, light-precision, photo-led; culture, agency, portfolio.

<!-- v:section.gallery-portfolio/pinned-project-stage -->
### 13. Pinned project stage

*Feeling: a slide projector you operate by scrolling.*

One viewport, one project, and scroll swaps it in place. Per Appelgren pins a 514 by 683 image at centre while neighbours enter from the edges as tall skewed slabs. International Magic pins a 1177 by 724 frame and lets a 580px clip rise over it on the centre axis. Spring/Summer sets a centred 838 by 470 site in a full-bleed scene that matches each client. This is expressive and expensive, and very easy to overuse. Use it only for 5 to 10 projects, keep each swap under one screen of scroll, show position with a small counter, and give phones and reduced-motion users a plain stack.

**Seen on** Per Appelgren, International Magic, Oliver Dupuy, Spring/Summer, Benzo the Great Developer, 7 sites in all. **Suits** photo-led, light-precision, bold-colour, illustrated; portfolio, agency, architecture, culture.

<!-- v:section.gallery-portfolio/single-file-spine -->
### 14. Single-file spine

*Feeling: a very long, very calm list.*

Every project in one column. BIG runs images about 434px wide at natural ratio, 28px apart, for about 119,000px, with no headings at all, and its small name and place column sits to the left of each image. Ne Geurra runs a 580px column of object photographs at 26px gaps on warm white. TR Studio stacks on the centre axis with widths alternating 886 and 536px. The length is the proof. Use it for practices with decades of work, and lazy-load everything. Give a way back up, because after 20 screens people need one.

**Seen on** BIG, Ne Geurra, TR Studio, Muda 26, Julia Loyd Mohr, 7 sites in all. **Suits** photo-led, warm-neutral, type-led; architecture, portfolio, culture, ecommerce.

<!-- v:section.gallery-portfolio/scattered-collage -->
### 15. Scattered collage

*Feeling: a table covered in things you made.*

Mixed sizes placed by hand, with a lot of empty page. Sutéra scatters nine cut-outs and rounded images, each with a small mono number at its corner, then maps the numbers to names in one three-line legend. Joby staggers portraits at 120px offsets on cream. Prägen Hätlen places three daylight macro shots to relieve its dark CG chapters. It needs real variety in the pictures, some cut out, because scattered rectangles of similar stock photos look accidental. Place each one on the grid, then offset it. At phone width, fall back to two loose columns.

**Seen on** Joby, Prägen Hätlen, Aarretuote, PDA Architecture, SUTÉRA, 14 sites in all. **Suits** photo-led, type-led, mono-technical, bold-colour; portfolio, brand, food-drink, culture.

<!-- v:section.gallery-portfolio/tilted-drift-row -->
### 16. Tilted drift row

*Feeling: a human moment.*

A full-bleed row of about 320 by 240 photos at radius 12, each tilted about 2 degrees alternately, 35px apart, drifting slowly, and cut by both edges. React uses it for real community photos, and on a technical page it is the one warm beat. Villa Aurelia straightens three large photos as you scroll. Keep tilt under 3 degrees, since more reads as a gimmick. Stop the drift for `prefers-reduced-motion`, and pause on hover. Use real people doing real things. It does not work with stock.

**Seen on** Villa Aurelia, React, Lil Italy, Little Troop. **Suits** warm-neutral, light-precision, expressive; hospitality, devtool, food-drink, agency.

<!-- v:section.gallery-portfolio/sliver-index -->
### 17. Sliver index

*Feeling: a glimpse through a blind.*

Each project gets a thin slice of an image in a list of names. Beckmans gives every student an 80 by 19 slice in a seemingly random column of their row, so scattered colour marks tease the work. Sam Peitz tucks 230 by 12 slivers between slats and reveals them on hover. It turns an index into something with a pulse, at almost no weight. Use it for schools and portfolios with many entries. The slices must lead to the full picture on hover and on focus, and the names must stay readable without them.

**Seen on** Beckmans Examensutstallning 2024, Sam Peitz. **Suits** mono-technical; education, portfolio.

### Mistakes that cheapen a gallery

- **Identical crops.** A uniform aspect ratio across unlike work flattens it. Vary the row or keep the ratio.
- **A dark overlay on every tile.** It greys the work to protect the label. Move the label outside.
- **A scrim on nothing.** My first mosaic drew its gradient on the empty cells too, and it left dark bars floating on white. Holes must be empty.
- **Captions one size too small.** At 13px my art captions looked apologetic against the real 17 to 18px, and my 18px titles against the real 23. Serious galleries give the caption real weight.
- **Rows at half height.** Following an analyst's 22px, my index looked like a spreadsheet. The real row is 40px.
- **Hover as the only way in.** Touch has no hover. Anything revealed on hover must also be reachable on tap and on focus.
- **Rounded everything.** Radius on photographs makes them look like app cards. Reach for 0 or 2 to 4 first, unless the whole brand is round.
- **Ending a rail flush.** If the last visible tile ends exactly at the viewport, nothing says there is more.
- **Placeholder gradients in place of images.** A gallery has no meaning without real pictures. If you have none, use a text index instead.
- **`View project` on every tile.** The whole tile is the link. Say it once at most.

## Blog index

A blog index helps a returning reader see what is new, and helps a new reader judge whether this team has anything to say. It is an index first, so it is read by scanning titles.

What separates great from cheap is that a great index trusts its titles. It sets them well, gives the page one strong structure, and is honest about volume: a small team shows a few posts generously, a prolific one shows a dense ledger. A cheap index is a grid of 16:9 stock photos in rounded cards, each with a tag pill, a title, two lines of excerpt and a date, repeated until a `Load more` button. That layout depends on images nobody has, so it fills up with gradients and abstract 3D.

Decide the art first. If you have a real cover system, use cards. If you do not, drop images entirely and use type, because a text-only index looks far more expensive than a grid of weak thumbnails.

Measured ranges: card titles 16 to 24 with a median of 20, gaps 16 to 24, radius 8 where rounded, text rows 36 to 81px, filter tabs 13px at about 28px tall. Dates go in a muted tone, set consistently, and in a form that suits the voice: `2026.11.04` on Cognition, `3 November` on Vercel. Most sites separate index from homepage teaser, and teasers are smaller, with three or four items and a link.

<!-- v:section.blog-index/cards-then-ledger -->
### 1. Cards then ledger

*Feeling: new things up front, the archive in reach.*

Recent posts get cards, and everything older drops to one-line rows. Zed shows three cards, then every post since 2022 as a single mono list at a 42px pitch, with no excerpts and no pagination, so one page is a searchable archive. Cursor sets a large featured image and two stacked cards above a tinted ledger of 36px rows: date and category at 13px, title 14px, author right. Clerk uses 64px rows with dashed rules and a 24px avatar. It is the best all-round index, because it serves both readers. Use it for any team with more than about 20 posts. Avoid it under about ten posts, where the ledger stays short and looks unfinished.

**Seen on** Clerk Blog, Cursor Blog, Zed Blog, Supabase Blog. **Suits** light-precision, warm-neutral, mono-technical; saas, ai, editorial, devtool.

<!-- v:section.blog-index/front-page-lead -->
### 2. Front page lead

*Feeling: this is a publication.*

Anthropic's news page is built like a newspaper: columns of 308, 632 and 308px at 16px gaps in a 1280px frame, under a thin rule with a label left and today's date right. The centre holds a 632 by 356 lead with a 32.5/37 bold title, and the sides stack 21.4/26.7 stories split by 1px rules, with four-line clamps on the body. Philadelphia Orchestra and Amplitude use two-column cousins. Use it when at least five real stories exist at once, and when one of them truly leads. On phones the lead moves to the top. Avoid it for a personal or small-team blog, where the side columns turn into padding.

**Seen on** Anthropic News, Amplitude, Decagon, The Philadelphia Orchestra, Framer Blog, 10 sites in all. **Suits** light-precision, soft-pastel, photo-led, warm-neutral; saas, ai, editorial, culture.

```css
.w{max-width:1280px;margin:0 auto;padding:40px 0}
.hd{display:flex;justify-content:space-between;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:18px 0;font-size:13px}
.hd b{font-weight:600}.hd span{color:var(--ink-2)}
.g{display:grid;grid-template-columns:308px 632px 308px;gap:16px;padding-top:20px}
.meta{display:flex;gap:14px;font-size:12px;line-height:16px;color:var(--ink-2);margin-bottom:12px}
.s{padding-bottom:30px}
.s+.s{border-top:1px solid var(--line);padding-top:18px}
.s img{display:block;width:100%;aspect-ratio:308/172;object-fit:cover;margin-bottom:14px}
.s h3{font:700 21.4px/26.7px var(--font-display);letter-spacing:-.01em;margin-bottom:12px}
.s p{font-size:14px;line-height:21px;color:var(--ink-2);display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.lead img{display:block;width:100%;height:356px;object-fit:cover;margin-bottom:18px}
.lead h2{font:700 32.5px/37px var(--font-display);letter-spacing:-.015em;margin-bottom:12px}
.lead p{font-size:17px;line-height:25px;color:var(--ink-2);max-width:36em}
@media(max-width:1300px){.w{padding:24px 16px}.g{grid-template-columns:1fr 2fr 1fr}}
@media(max-width:760px){.g{grid-template-columns:1fr}.lead{order:-1}}
```

<!-- v:section.blog-index/feature-then-grid -->
### 3. Feature then grid

*Feeling: one big announcement.*

One post runs wide as a split, and a grid follows. Raycast sets a rendered 600 by 300 visual in a 10px frame with a 20/600 title and byline beside it. Resend sets a huge serif page title, small filter pills, two featured cards, then a three-column grid of 16:10 thumbnails at radius 12, where the covers are designed as a set. Astral cuts the category into the art's corner as a small tab. It depends entirely on art direction, so without strong covers use a text variant.

**Seen on** Resend Blog, Raycast Blog, Astral, Sanity Blog, Tailscale Blog, 6 sites in all. **Suits** dark-precision, bold-colour, light-precision, warm-neutral; devtool, saas.

<!-- v:section.blog-index/compact-row-ledger -->
### 4. Compact row ledger

*Feeling: a log kept by people who write a lot.*

The whole index is rows. Framer sets two-line rows of 81px: 12px category and date above a 14px title, author and read time right-aligned, a 1px rule between, filter tabs and search above. Zed and Cursor use one-line rows at about 36 to 42px. PlanetScale runs a mono column with underlined bold titles, bracketed categories and rows of dots between entries. The Marshall Project adds a 100px thumb, a kicker and a serif dek. It suits teams with a large archive, and any brand that would rather not commission art. Hover with a fill about 3 percent off the ground.

**Seen on** Locomotive, Framer Blog, Wild, The Marshall Project, OpenRouter, 6 sites in all. **Suits** type-led, dark-precision, photo-led, mono-technical; agency, devtool, saas, nonprofit.

```css
.w{max-width:1200px;margin:0 auto;padding:40px 16px}
.ctl{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;font-size:13px;color:var(--ink-2)}
.ctl nav{display:flex;gap:4px}.ctl a{padding:5px 10px;border-radius:7px}.ctl a.on{background:var(--surface);color:var(--ink)}
.ctl input{height:30px;width:200px;background:var(--surface);border:0;border-radius:7px;color:var(--ink);padding:0 10px;font:inherit}
.r{display:grid;grid-template-columns:1fr auto;align-items:center;height:81px;border-top:1px solid var(--line);padding:0 18px;transition:background .15s}
.r:hover{background:var(--surface)}
.r small{display:block;font-size:12px;line-height:18px;color:var(--ink-3)}
.r b{font-weight:500;font-size:14px;line-height:22px}
.r>span{font-size:12px;color:var(--ink-3)}
@media(max-width:760px){.ctl input{display:none}.ctl nav{overflow-x:auto}.r{grid-template-columns:1fr;height:auto;padding:12px 4px}.r>span{margin-top:2px}}
```

<!-- v:section.blog-index/large-feature-rows -->
### 5. Large feature rows

*Feeling: a magazine's table of contents.*

Rows at reading scale, where type dominates. Kinfolk sets a 212 by 285 portrait, a 50/60 serif title with a caps lead-in on its own line, the category right-aligned to the top, 2px ink rules and a 367px pitch. Stripe Blog runs a 38px headline in a wide column, a 540px cover, and a right column for date and author, with dashed vertical guides. Basic Agency sets press at 44px caps with an arrow far right. Use it for editorial brands with fewer, longer pieces and a good serif or grotesque. It suits a dozen stories, not two hundred.

**Seen on** Stripe Blog, Kinfolk, Fidèle, Athletics, Monocle, 8 sites in all. **Suits** type-led, light-precision, photo-led, bold-colour; editorial, agency, culture.

```css
.w{padding:60px 34px}
h2{font:400 32px/1.2 var(--font-display);padding-bottom:24px;border-bottom:2px solid var(--ink)}
.r{display:grid;grid-template-columns:212px 1fr auto;gap:0 80px;padding:40px 0;border-bottom:2px solid var(--ink)}
.r img{width:212px;height:285px;object-fit:cover;display:block}
.r h3{font:400 60px/60px var(--font-display);letter-spacing:-.012em;max-width:13em}
.r span{font-size:15px;line-height:20px}
.r:hover h3{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:6px}
@media(max-width:760px){.w{padding:32px 16px}h2{font-size:24px}.r{grid-template-columns:96px 1fr;gap:12px 16px;padding:20px 0}.r img{width:96px;height:128px}.r h3{font-size:24px;line-height:28px}.r span{grid-column:2;font-size:13px}}
```

<!-- v:section.blog-index/text-only-cells -->
### 6. Text cells

*Feeling: all signal.*

Three columns of titles with no images. Vercel sets 448px wide cells about 240px tall, 13px date and category at the top, a 24/32 title with tight tracking, and small avatars and names pinned to the base, with no lines at all. Hover fills the whole cell a few percent. Sanity uses separate outlined boxes at about 16px gaps. Raycast uses dark cards at radius 10 with a 20/600 title. It is the most reliable way to look expensive without art, and it needs real names and photos of authors. Pin the byline to the base so rows align whatever the title length.

**Seen on** Vercel Blog, Raycast Blog, Sanity Blog, React, Yuriy Vitrenko's Library. **Suits** light-precision, dark-precision, type-led; devtool, saas, culture.

```css
.w{max-width:1440px;margin:0 auto;padding:40px 24px}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:0 24px}
.c{display:flex;flex-direction:column;min-height:240px;padding:24px;transition:background .15s}
.c:hover{background:color-mix(in srgb,var(--ink) 3%,var(--bg))}
.meta{font-size:13px;line-height:18px;margin-bottom:20px}.meta i{font-style:normal;color:var(--ink-2);margin-left:6px}
.c h3{font:400 24px/32px var(--font-display);letter-spacing:-.022em;max-width:17em;text-wrap:balance}
.by{margin-top:auto;display:flex;align-items:center;gap:8px;font-size:13px}
.by i{display:flex}.by i span{width:20px;height:20px;border-radius:50%;margin-left:-6px;border:1.5px solid var(--bg);background:var(--ink-3)}
.by i span:first-child{margin-left:0}
.by em{font-style:normal;color:var(--ink-2)}
@media(max-width:760px){.w{padding:24px 16px}.g{grid-template-columns:1fr}.c{min-height:180px;padding:20px}}
```

<!-- v:section.blog-index/thumbnail-card-grid -->
### 7. Thumbnail card grid

*Feeling: familiar, and easily forgettable.*

Three columns of image-top cards. It is the default for a reason, and our analysts scored it lowest in this element. It works for resource libraries where people browse by topic. Keep it from going generic by pinning dates to the card base, as Apple Design does with a tinted body, by using a single image treatment, and by holding back on tags. Stripe Connect drops images altogether in favour of a small blue label and a title in a soft white card. Avoid it for a small team's blog, where the empty look of three weak posts shows immediately.

**Seen on** Lightspeed, Stripe Blog, Stripe Connect, jemmic, New York Phil, 18 sites in all. **Suits** light-precision, warm-neutral, bold-colour, photo-led; culture, finance, saas, brand.

<!-- v:section.blog-index/sidebar-filter-grid -->
### 8. Sidebar filter grid

*Feeling: a calm library.*

A thin left rail of categories beside the posts. Notion uses a 120px rail at 14px with the active item bold, then two columns of cards with a pastel illustration tile, a 22/700 title and a short excerpt, ending in numbered pages. Josh Comeau reverses it, with a sticky right sidebar of chips and popular posts. web.dev gives each topic a band with a 400px left column and 2×2 links at right. It suits large archives with real topics. Notion works because one illustrator draws every tile, so match that discipline or use a different variant.

**Seen on** Notion Blog, HealthyHer, Josh Comeau, web.dev. **Suits** soft-pastel, illustrated, light-precision; saas, health, education, devtool.

<!-- v:section.blog-index/flush-story-row -->
### 9. Flush story row

*Feeling: a small, well-set update.*

No card at all. Work & Co sets a 2×2 of 340 by 191 tiles in a 700px column with square corners, a 20/500 title about 22px below, and one serif sentence ending in a red link. Meta AI runs four items on a 352px pitch, each an 80px thumbnail at radius 20 to the left of a 16/24 title and a 12px caps date, between full-bleed hairlines. Vitsoe sets four 238px columns and lets heights vary. Nuro sets 320px squares at radius 32. Use it as a small news section on a homepage, three or four items, ending in a link to everything. Avoid it as a full archive, because it has no way to hold fifty posts.

**Seen on** Work & Co, Meta AI, Studio Dado, Nuro, La Table de Joakim, 14 sites in all. **Suits** light-precision, photo-led, warm-neutral, type-led; ecommerce, agency, architecture, brand.

<!-- v:section.blog-index/peek-news-rail -->
### 10. Peek news rail

*Feeling: the latest, in passing.*

A homepage rail that bleeds off the right. Cognition sets flat 350 by 197 covers at 8px gaps from x=64, with a 15px serif title and a dotted date, under 32px square arrows. Factory uses 380px white cards at radius 4, a mono `READ MORE`, and turns the title orange on hover. Gagosian sets its rail on a dark band with 1px vertical rules and alternating image-first and headline-first items. Acne Studios sticks a lede at left while images run at right. Use it when news is secondary, and set the band on a tone if the page needs a beat.

**Seen on** Cognition, Gagosian, Acne Studios, Factory, 1 Hotels, 12 sites in all. **Suits** photo-led, type-led, bold-colour, light-precision; ai, culture, ecommerce, fashion.

<!-- v:section.blog-index/narrowing-filmstrip -->
### 11. Narrowing filmstrip

*Feeling: a stack of stories compressing into the distance.*

Stripe's most original index. An active tile of 818 by 460, then strips narrowing to about 188, 90, 42 and 8px, all the same height, radius 6, gap 16. Arrows sit in 40px pale tiles at top right, and a two-tone 32px heading sits at left, with a white 40px title on the art. It shows depth in one row, and the next story is always visible. It needs five or more strong images that survive being cropped to slivers. On phones, fall back to a peek rail.

**Seen on** Stripe. **Suits** gradient-light; finance.

<!-- v:section.blog-index/mixed-span-bento -->
### 12. Mixed-span news bento

*Feeling: the company's whole month on one board.*

Scale AI sets news as a bento: 8px gaps, pale cells at radius 16 with nested 12px images, varied spans, partner lockups on solid fills such as deep green and slate blue, and a 26px tinted chip with a mono category on each image. It works because the tile kinds differ: a text statement, a logo lockup, a photo, a data crop. If every tile is image plus title, varied sizes alone will not save it. See the Bento section of the Surface chapter for the rules.

**Seen on** Scale AI. **Suits** dark-precision; ai.

<!-- v:section.blog-index/designed-cover-system -->
### 13. Designed cover system

*Feeling: this team has an art director.*

Every post gets a cover from one system, so nobody needs stock. Baseten uses a dotted green field with a logo plate or a highlighted title. Together AI sets dark cards with lilac bars bridging each gutter, so a row reads as one pipeline. MotherDuck draws cartoons with the title lettered in. Trasti and White Label IQ use one line drawing with one accent. Stability AI makes a typographic poster per item. Pick one rule that takes a title and produces a cover, ideally in code, so it costs nothing per post. It is the cheapest way to look art directed, and it makes a feed feel like a publication.

**Seen on** Baseten, Together AI, Trasti Ubezpieczenia. Simply fair!, Driftime Impact Report 2022, Stability AI, 9 sites in all. **Suits** illustrated, light-precision, gradient-light, type-led; ai, agency, devtool, finance.

<!-- v:section.blog-index/quiet-filter-row -->
### 14. Quiet filter row

*Feeling: controls that know their place.*

This one is a part, not a layout, and it goes with any variant above. Filters are small 13px text tabs, with the active one a filled 28px pill or a raised tone, under the title, and search or RSS at the far right. Pagination is plain numerals at 15px with about 48px spacing, and the current page is a 32px pill. Pentagram replaces all of it with one grey count line under the title. Keep filters to what people really filter by, usually under seven. Reflect the filter in the URL, so that a filtered view can be shared.

**Seen on** Clerk Blog, Raycast Blog, Pentagram Work, Clerk Changelog, Webflow Blog, 7 sites in all. **Suits** light-precision, dark-precision, photo-led, illustrated; saas, devtool, agency.

<!-- v:section.blog-index/wire-feed -->
### 15. Wire feed

*Feeling: a live noticeboard.*

A dense dated feed. FWA sets date divider bars, bracketed categories, handles and times at 8px, bold 14/21 titles and 12/18 copy with dotted-underlined links. ECAL runs four ruled columns of events with small colourful posters. It is only for communities and schools that truly post every day, because a wire with last month's date on top looks abandoned.

**Seen on** FWA Wire, ECAL. **Suits** expressive, type-led; editorial, education.

### Mistakes that cheapen a blog index

- **Rules that do not exist.** An analyst noted hairlines on Vercel's grid, so I drew them, and it turned into a form. The real page has none. Space and a hover fill were enough.
- **Thumbnails with no art behind them.** Gradient thumbnails read as missing images. Go text-only, or build a cover rule.
- **Tag pills on every card.** They add noise and rarely get used. A plain 12px category does the same job.
- **Mixed date formats.** Pick one form, and align it.
- **Rows too short.** Two-line rows at 44px are cramped. Framer's are 81px. One-line rows can go to 36.
- **Excerpts in a ledger.** The point of the ledger is speed. Leave them out.
- **Three posts in a layout built for thirty.** A filter bar over three posts looks sad. Show few posts large.
- **`Read more` on every item.** The title is the link.
- **Unbalanced titles.** Use `text-wrap:balance` on titles, and `pretty` on excerpts.
- **Author photos as grey circles.** Use real faces, or use names alone.

## Changelog

A changelog proves that a team ships. Its reader is usually an existing user deciding whether to update, or a prospect checking that the product is alive. So it has to be honest and scannable, and every entry needs a date.

What separates great from cheap is that a great changelog treats time as its structure. Dates sit in a rail, gaps between releases are real, big releases get room and small ones stay small, and there are real screenshots. A cheap one is a stack of identical cards with a version pill and a bulleted list, or a blog grid with `v2.3` in the titles. Writing matters more here than anywhere else: name what changed for the user, in the user's words.

Measured ranges: content column 624 to 763px, date rail about 328px, 80 to 120px between entries, titles 18 to 44px, dates 12 to 14px in muted or mono type, body 15 to 16px on 24 to 26px leading. Keep a stable anchor per entry and a `Copy link` beside it, because people share entries.

<!-- v:section.changelog/date-rail-feed -->
### 1. Date rail feed

*Feeling: a calm record.*

Two tracks: dates at left, one content column, and the right third empty. Linear sets the rail from x=103 with a faint 1px vertical line and small dots, the content column at x=408 and 624px wide, about 110px of space between entries, and no cards. Major releases get a 32px title and art, and smaller ones a 24px title and a fold of `Fixes` and `Improvements` rows on 56px hairlines. Clerk sets a 720px column with a dark category pill, inline code chips and an author row with `Copy link`. It is the best default. The two title sizes are worth copying, because they show the difference between a big release and a small one. Avoid it when every release is a one-liner, where a typed log is faster.

**Seen on** Linear Changelog, Clerk Changelog. **Suits** dark-precision, light-precision; saas.

```css
.w{max-width:1280px;margin:0 auto;padding:40px 0;position:relative}
.w::before{content:"";position:absolute;left:0;top:0;bottom:0;width:1px;background:var(--line)}
.e{display:grid;grid-template-columns:minmax(0,328px) minmax(0,624px);padding-bottom:110px}
.d{position:sticky;top:96px;align-self:start;display:flex;align-items:center;gap:12px;font-size:13px;color:var(--ink)}
.d::before{content:"";width:5px;height:5px;margin-left:-2px;border-radius:50%;background:var(--ink-3)}
.e h2{font:500 32px/1.15 var(--font-display);letter-spacing:-.022em;margin-bottom:18px}
.e h2.s{font-size:24px}
.e p{font-size:16px;line-height:26px;color:var(--ink-2);margin-bottom:24px}
.e p b{color:var(--ink);font-weight:500}
.fold{border-bottom:1px solid var(--line);height:56px;display:flex;align-items:center;justify-content:space-between;font-size:15px;font-weight:500}
.fold:first-of-type{border-top:0}.fold i{font-style:normal;color:var(--ink-3)}
@media(max-width:760px){.w{padding:24px 16px}.w::before{display:none}.e{grid-template-columns:1fr;padding-bottom:64px}.d{position:static;margin-bottom:8px}.e h2{font-size:26px}}
```

<!-- v:section.changelog/sticky-rail-timeline -->
### 2. Sticky rail timeline

*Feeling: time passing as you scroll.*

Three columns: a 14px date at x=208, a 1px vertical rail at x=360 with a 5px dot, and a 763px entry column at x=469. On Resend the date and dot stick about 105px from the top while the entry scrolls, then hand over to the next. Entries open with a wide dark art panel holding a large serif title. Use `position:sticky` on the date and dot and no JavaScript. It suits a product with visual releases and a dark, considered look. Avoid it for short text-only entries, where the sticky date has nothing to travel past.

**Seen on** Resend Changelog. **Suits** dark-precision; devtool.

<!-- v:section.changelog/month-index-rail -->
### 3. Month index rail

*Feeling: a long history you can jump around.*

Cal.com keeps a sticky rail beside the feed: year headings at 24/500 with chevrons, 15px months in grey, the active month in ink with a 3px bar. The main column has a 14px date, a 44/700 title, a version pill, a lede, then two-column sections of 18px heads and 15/1.6 grey body. Each section closes with a `Shipped by` row of tilted 32px avatars beside the names. Use it when you have years of releases. The avatar row turns a list of features into people doing work, which is the single best small idea in this family. Avoid it for a product under about a year old, where the rail lists a few months and looks empty.

**Seen on** Cal.com Changelog. **Suits** light-precision; saas.

<!-- v:section.changelog/release-split-rows -->
### 4. Release split rows

*Feeling: a catalogue of real product.*

Each release is a ruled row with two columns. Figma sets a 12px mono caps date, a 32/400 title, grey mono tag chips and `Copy link` in a left column about 400px wide, and a real screenshot and body in the right column, with a hairline and about 120px of padding between entries. Webflow reverses it with text left and a 520px image right. Clerk opens entries with a 720 by 300 art banner. Use it when each release has something to show. It collapses if the screenshots are stand-ins, so use a typed log if you have none.

**Seen on** Figma Release Notes, Clerk Changelog, Webflow Updates. **Suits** light-precision; saas.

<!-- v:section.changelog/typed-log -->
### 5. Typed log

*Feeling: written for people who read release notes.*

Dense and factual, for tools where users decide whether to upgrade. Tailscale sets a date column, a version title with an update link, platform subheads, and a right-aligned column of `Fixed`, `Changed` and `New` labels at 14px beside 16/26 text, with `New` in green. The kind column means you can scan for what matters. Vercel uses 56px rows of date, title and one sentence, and Supabase uses a right-hand list with small square bullets. Filter chips by area help on top. Be specific: name the bug and the version. Avoid it as marketing for a consumer product, where readers will not parse it.

**Seen on** Vercel docs, Tailscale Changelog, Supabase Launch Week, Framer Blog. **Suits** light-precision, mono-technical, dark-precision; devtool, saas.

```css
.w{max-width:1160px;margin:0 auto;padding:56px 24px}
.rel{display:grid;grid-template-columns:140px 88px 1fr;padding-bottom:64px}
.rel time{font-size:13px;line-height:28px;color:var(--ink-2)}
.rel h2{grid-column:2/-1;font:500 24px/30px var(--font-display);letter-spacing:-.01em;margin-bottom:12px}
.rel h2 a{font:400 13px var(--font-text);margin-left:12px;text-decoration:underline;text-underline-offset:3px;color:var(--ink-2)}
.rel h3{grid-column:2/-1;font-weight:600;font-size:16px;line-height:24px;margin:14px 0 8px}
.k{grid-column:2;font-size:14px;line-height:26px;color:var(--ink-2);text-align:right;padding-right:16px}
.k.new{color:var(--ok)}
.v{grid-column:3;font-size:16px;line-height:26px;margin-bottom:14px;max-width:44em}
.v a{text-decoration:underline;text-underline-offset:2px}
@media(max-width:760px){.w{padding:32px 16px}.rel{grid-template-columns:64px 1fr}.rel time{grid-column:1/-1}.rel h2,.rel h3{grid-column:1/-1}.k{grid-column:1;text-align:left;padding:0}.v{grid-column:2}}
```

<!-- v:section.changelog/homepage-timeline-row -->
### 6. Homepage timeline row

*Feeling: proof of a pulse.*

The last four updates on a shared horizontal rail. Linear uses a thin line across the content with 12px dots on a 336px pitch, the newest red, then a 15px title, 15/24 grey copy with a clamp and a 13px mono date. Increase uses a 2px pale rail with 20px square tiles holding a 6px dot, the latest mint, and a mono date, with `Read more` below. Trigger.dev places the rail under the copy. It is a compact section for a homepage, and the fastest way to show a product is alive. It only works if the dates are recent, so pull them from real data.

**Seen on** Linear, Increase, Trigger.dev. **Suits** dark-precision, light-precision; saas, finance, devtool.

```css
.w{max-width:1160px;margin:0 auto;padding:96px 24px}
h2{font:600 40px/1.1 var(--font-display);letter-spacing:-.022em;margin-bottom:64px}
.tl{display:grid;grid-template-columns:repeat(4,1fr);gap:0 32px;position:relative}
.tl::before{content:"";position:absolute;left:0;right:0;top:9px;height:2px;background:var(--surface)}
.u i{position:relative;display:grid;place-items:center;width:20px;height:20px;background:var(--surface);border-radius:4px;margin-bottom:28px}
.u i::after{content:"";width:6px;height:6px;border-radius:50%;background:var(--ink-3)}
.u:first-child i{background:color-mix(in srgb,var(--accent) 16%,var(--bg))}.u:first-child i::after{background:var(--accent)}
.u b{display:block;font-weight:500;font-size:16px;line-height:22px;margin-bottom:12px}
.u p{font-size:14px;line-height:20px;color:var(--ink-2);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:12px}
.u time{font:400 13px/1 var(--font-mono);color:var(--ink-3)}
.all{display:inline-block;margin-top:32px;height:40px;line-height:38px;padding:0 16px;border:1px solid var(--line-strong);border-radius:6px;font-size:14px;font-weight:500}
@media(max-width:760px){.w{padding:56px 16px}h2{font-size:28px;margin-bottom:32px}.tl{grid-template-columns:1fr;gap:28px 0;padding-left:32px}.tl::before{left:9px;right:auto;top:0;bottom:0;width:2px;height:auto}.u i{position:absolute;left:0;margin:0}.u{position:relative;left:0}.u{margin-left:0}.u i{left:-32px}}
```

<!-- v:section.changelog/update-card-grid -->
### 7. Update card grid

*Feeling: scan by colour.*

Each release is a card in a two-column grid. Railway uses a 16:9 muted tint with one centred 32px icon tile and a thin antenna motif, then a 12px date and a serif title that lists the items with commas. Slack crops real UI on a tinted card in a scrolling row. Cloudflare's docs use one large cell and a 2×2 of compact cells, in hairlines only. PostHog groups weekly digests in a window-style panel. Hold to one tint family of up to five hues, or it turns into a sticker sheet.

**Seen on** Railway Changelog, Slack, Cloudflare Docs, PostHog Changelog. **Suits** light-precision, dark-precision, illustrated; devtool, saas.

<!-- v:section.changelog/incident-history -->
### 8. Incident history

*Feeling: nothing to hide.*

A status page's history. Anthropic Status and Figma Status use per-day headings at 14 to 16/600 over a 1px rule, a muted no-incidents line for quiet days, an incident title in a warning colour, and update paragraphs with a bold lead word (Investigating, Identified, Monitoring, Resolved) and a 12px timestamp. Cloudflare uses 48px rows at radius 8 with a wrench icon for maintenance. Show the empty days, since they are the good news. Use absolute timestamps in a stated time zone. Keep it on a status page, not in the marketing site.

**Seen on** Anthropic Status, Figma Status, Cloudflare Status. **Suits** light-precision, warm-neutral; ai, saas, devtool.

<!-- v:section.changelog/dated-history-log -->
### 9. Dated history log

*Feeling: a working life, in order.*

The same structure for a person or a project. Aniket sets a 13 to 14px company name with a small pink arrow, the date range right-aligned on the same baseline, the role beneath, a paragraph, and about 60px between entries, with no dividers. A portfolio on black groups exhibitions by year with a 2px coloured left rule, fading towards the foot of the viewport. VS Code shows live commits: 36px avatars joined by 2px blue segments, with the oldest row fading to 30 percent and the line turning dotted. Real commits make open source tangible. Avoid it for a product changelog, where readers need detail and links rather than a narrative.

**Seen on** Aniket, VS Code, cagdascecen.com. **Suits** light-precision, expressive; portfolio, devtool.

### Mistakes that cheapen a changelog

- **One title size for everything.** My first study gave a minor fix the same weight as a major launch. Two sizes tell the reader which is which.
- **No rail.** I missed Linear's faint vertical line at first, because an analyst wrote that there were no rules. It is what makes the dates feel connected.
- **Muted dates that vanish.** The date is the structure. On a dark ground set it in ink, not a third-level grey.
- **Type too small in a dense log.** My typed log at 15px looked timid next to the real 16/26. Dense does not mean small.
- **Marketing language.** An excited opening sentence adds nothing. Start with what changed.
- **Version pills as decoration.** Show a version only if users act on it.
- **Fake screenshots.** Grey bars say nothing shipped.
- **A stale top entry.** If the newest date is eight months old, remove the homepage row.

## Menu and catalogue

A menu has one job: let someone decide. They are comparing items, checking a price, avoiding an allergen, usually on a phone, often hungry. The same goes for a price list, a programme of events, or a catalogue of services.

What separates great from cheap is that a great menu reads like the printed card of that specific place. The type has the personality of the room, the order follows how people eat, and details such as a tiny `OR` between choices or a note about raw eggs show that someone who works there wrote it. A cheap menu is a grid of stock food photos in rounded cards with an `Add` button, or worse, a PDF. Most good restaurant menus have no photos at all, and they do not need them. Text is faster, cheaper to update, and it reads as more expensive.

Four decisions cover most of it:

- **Where the price goes.** Right-aligned for comparison, as in casual places. Inline after the name, as in print, for bistros. On its own line under the dish, or as a bare number, in places that would rather you did not compare. Many of the good restaurants here leave out the currency sign, which removes a little friction.
- **How much description.** Ingredients as a comma list is the modern default. A full sentence suits a place with a voice.
- **Photos or not.** Photos sell when the food is the product and the shots are consistent. Otherwise, type.
- **Tabs or scroll.** Tabs for separate menus such as lunch and dinner. Plain scroll, with sticky jump links, for sections within a menu.

Measured ranges: item names 14 to 16px, often caps with some tracking; descriptions 16 to 19px; about 24 to 80px per item; columns one to three. Keep the line under 680px, or the eye loses the price. Mark dietary and allergen facts with short plain keys such as `(V)`, and explain them once.

<!-- v:section.menu-or-catalog/name-price-rows -->
### 1. Name and price rows

*Feeling: a good bistro's menu, set with confidence.*

Name left, price right on the same line, description beneath. Gjelina sets 16px caps names and a 19px description on a peach page, about 80px per item, with a 44px heavy condensed caps section head and an 8px rust rule between sections. That one heavy rule gives a plain list its identity. Katz's uses two columns with a bold right-aligned price and a small red tag on the classic. Union Square Cafe sets the price on its own line under the dish. Use it for most restaurants, and for anything priced. It is the place to spend your display face. Avoid it in very fine dining, where a column of aligned prices makes the card read as a bill.

**Seen on** Gjelina New York Menus, Katz's Store Menu, Union Square Cafe Menus. **Suits** bold-colour, warm-neutral; hospitality, food-drink.

```css
.w{max-width:1190px;margin:0 auto;padding:40px 0}
.m{padding:0}
.m dl{margin:0}
.it{display:grid;grid-template-columns:1fr auto;gap:0 40px;padding:0 0 26px}
.it dt{font:400 16px/24px var(--font-text);text-transform:uppercase;letter-spacing:.01em}
.it dd{margin:0;grid-row:1;grid-column:2;font:400 16px/24px var(--font-text);font-variant-numeric:lining-nums tabular-nums}
.it p{grid-column:1;font:400 19px/28px var(--font-text)}
.rule{height:8px;background:var(--accent);margin:8px 0 28px}
h2{font:400 44px/1 var(--font-display);text-transform:uppercase;letter-spacing:.005em;margin-bottom:20px}
@media(max-width:1180px){.w{padding:32px 16px}.it{gap:0 16px}.it p{font-size:16px;line-height:24px}}
```

```html
<dl><div class="it"><dt>Dish name</dt><dd>19</dd><p>Three or four ingredients, comma separated</p></div></dl>
<div class="rule"></div><h2>Plates</h2>
```

<!-- v:section.menu-or-catalog/inline-price-lines -->
### 2. Inline price lines

*Feeling: a printed card with a voice.*

The price runs straight after the name, in the same tracked caps line, and a serif description sits beneath. On Dishoom the name is 13px with about 3px of tracking, the description 16/24, 24px between items, a 1px hairline between sections, and featured dishes are centred between rows of tiny outlined diamonds drawn from the printed menu. The copy is part of the design, and the ornament comes from the brand's own world. Use it for places with a story. Keep the wording yours: warm, specific, slightly odd. Avoid it when people need to compare prices fast, as with takeaway ordering.

**Seen on** Dishoom All Day Menu, Dishoom Christmas Feast Menu. **Suits** warm-neutral; hospitality.

```css
.w{max-width:1200px;margin:0 auto;padding:40px 32px;display:grid;grid-template-columns:1fr 1fr;gap:0 72px}
.it{margin-bottom:24px}
.it h3{font:500 13px/20px var(--font-display);letter-spacing:.22em;text-transform:uppercase;color:var(--ink-2);margin-bottom:8px;font-variant-numeric:lining-nums}
.it p{font:400 16px/24px var(--font-text);color:var(--ink)}
.feat{text-align:center;margin-bottom:26px}
.feat::before,.feat::after{content:"";display:block;height:10px;margin:22px 0;background:var(--accent);--d:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath d='M6 1l4 4-4 4-4-4z' fill='none' stroke='%23000'/%3E%3C/svg%3E");-webkit-mask:var(--d) 0 0/12px 10px repeat-x;mask:var(--d) 0 0/12px 10px repeat-x}
.feat h3{color:var(--ink)}
hr{border:0;border-top:1px solid color-mix(in srgb,var(--ink) 14%,transparent);margin:28px 0}
h2{font:600 13px/20px var(--font-display);letter-spacing:.2em;text-transform:uppercase;margin-bottom:6px}
.intro{font:italic 400 15px/22px var(--font-text);margin-bottom:24px}
@media(max-width:760px){.w{grid-template-columns:1fr;padding:24px 16px}}
```

<!-- v:section.menu-or-catalog/centred-menu-column -->
### 3. Centred menu column

*Feeling: the card on a white tablecloth.*

One centred column on warm paper. Gramercy Tavern sets 16px condensed tracked caps names and 17px italic ingredients beneath, with a small `OR` between choices and a mottled paper ground. Its Tavern menu uses three such columns, with the price as a bare number on its own line. Minetta sets a burgundy serif name with an inline price, a muted italic line, script section heads, and thin vertical rules framing the column. Republique opens with a very large `MENU` and tracked tabs. It suits fine dining and prix fixe, and it is easy to get right. Keep it to one column on phones and do not reduce the type.

**Seen on** Gramercy Tavern Dining Room Menu, Minetta Tavern Menus, Republique Menu, Gramercy Tavern Tavern Menu. **Suits** warm-neutral, type-led; hospitality.

```css
body{text-align:center}
.w{max-width:720px;margin:0 auto;padding:40px 24px}
.c{font:700 18px/24px var(--font-display);font-stretch:condensed;letter-spacing:.14em;text-transform:uppercase;margin:44px 0 20px}
.it{margin-bottom:22px}
.it b{display:block;font:700 16px/22px var(--font-display);font-stretch:condensed;letter-spacing:.07em;text-transform:uppercase}
.it i{display:block;font:italic 400 17px/24px var(--font-text)}
.or{font:700 13px/18px var(--font-text);letter-spacing:.1em;margin:-8px 0 14px}
.dash{width:14px;height:1px;background:var(--ink);margin:30px auto}
.pair{margin-top:56px}
.pair p{font:italic 400 17px/24px var(--font-text)}
.note{margin-top:44px;font:400 16px/23px var(--font-text)}
```

<!-- v:section.menu-or-catalog/photo-interleaved-menu -->
### 4. Photo interleaved menu

*Feeling: appetite between the courses.*

Bestia separates courses with full-bleed food photographs of about 360px, and lays a white 720px card at radius 20 with a soft shadow over the foot of each. Inside is a centred 13px caps course name, then run-in lines: a bold name, a lower-case ingredient list and a trailing price. The list stays compact while the photo carries the feeling. Use it with four or more very good photographs in one light. Avoid it for long menus with many sections, since every band adds a screen of scrolling.

**Seen on** Bestia Menu. **Suits** photo-led; hospitality.

<!-- v:section.menu-or-catalog/plate-photo-grid -->
### 5. Plate photo grid

*Feeling: every bowl under the same light.*

Identical overhead plates in a three-column grid. Sweetgreen sets 437px squares at radius 20 and a 24px gap, above a 24px caps name, an 18px ingredient list, an allergen line and `Order now`. Serif tabs at 48px with a dot under the active one switch the set. The menu page adds four macro columns with a green number over a tiny caps label. Consistent photography is the entire design: same angle, plate, light and background, so the eye compares food rather than pictures. Without that set of photographs, use a text menu. Pin the allergen line and order link to the card base so they align.

**Seen on** Sweetgreen Menu, Dishoom, Sweetgreen, Boudin Bakery, Lil Italy. **Suits** warm-neutral, photo-led; food-drink.

```css
.w{max-width:1360px;margin:0 auto;padding:48px 40px}
.tabs{display:flex;justify-content:center;gap:56px;margin-bottom:42px}
.tabs a{position:relative;font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;color:color-mix(in srgb,var(--ink) 40%,var(--bg))}
.tabs a.on{color:var(--ink)}
.tabs a.on::after{content:"";position:absolute;left:50%;bottom:-18px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--ink)}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:40px 24px}
.d{display:flex;flex-direction:column;font-size:18px;line-height:24px;color:var(--ink)}
.d img{display:block;width:100%;aspect-ratio:1;object-fit:cover;border-radius:20px;background:var(--surface);margin-bottom:22px}
.d h3{font:400 24px/30px var(--font-text);letter-spacing:.01em;text-transform:uppercase;margin-bottom:6px}
.d p{color:var(--ink-2);margin-bottom:28px}
.d small{font-size:18px;color:var(--ink-2);margin-top:auto;padding-bottom:18px}
.d a{font-size:18px}
@media(max-width:760px){.w{padding:24px 16px}.tabs{gap:24px;justify-content:flex-start;overflow-x:auto;padding-bottom:24px;margin-bottom:8px}.tabs a{font-size:28px;white-space:nowrap}.g{grid-template-columns:1fr}}
```

<!-- v:section.menu-or-catalog/menu-index-buttons -->
### 6. Menu index buttons

*Feeling: the front of a leather-bound menu.*

A landing page of menus. Balthazar sets a three-column grid of about 76px framed buttons on cream, each with a double-line engraved frame and notched corners, in 20 to 22px condensed caps with 2px tracking, stacking to one column on phones. It suits a place with six or more menus, and the frame should come from the brand's own printing. Link each to a real page. Pair it with a line of today's hours. Avoid it with two or three menus, where plain tabs or links are enough.

**Seen on** Balthazar Menus. **Suits** type-led; hospitality.

<!-- v:section.menu-or-catalog/service-price-panels -->
### 7. Service price panels

*Feeling: a clear price list from someone who cares.*

For salons, clinics, gyms and trades, the menu is a price list. Sam Hoult sets tinted panels in two columns at radius 24 with a pale double frame, a 30px light category title, and 16px rows on a 34px pitch with right-aligned prices, 13px notes under a row, and a rule above conditions such as a patch test. No leaders are needed, because the panel is narrow. Origin Wellness alternates treatments with big rounded photos, ticks and a small Book pill. Crescent Dental uses tall portrait cards. Prices shown up front are what make a local business feel honest, so show them, or at least a `from` figure. Avoid it if every job is quoted individually, where one `from` price and a contact route serve better.

**Seen on** Sam Hoult Beauty, Origin Wellness Spa, Crescent Dental, Sonar. **Suits** warm-neutral, photo-led, light-precision; health, local-business, culture.

```css
.g{max-width:1200px;margin:0 auto;padding:32px;columns:2;column-gap:20px}
.p{break-inside:avoid;background:var(--surface);border-radius:24px;padding:48px 48px 44px;margin-bottom:20px;
 box-shadow:0 0 0 6px var(--surface),0 0 0 7px color-mix(in srgb,var(--accent) 28%,transparent);margin:8px 8px 28px}
.p h2{font:300 30px/1.2 var(--font-display);color:var(--accent);margin-bottom:24px}
.p h2:not(:first-child){margin-top:32px}
.r{display:grid;grid-template-columns:1fr auto;font-size:16px;line-height:34px;font-variant-numeric:lining-nums tabular-nums}
.r small{grid-column:1/-1;font-size:13px;line-height:17px;color:var(--ink-2);margin:-4px 0 10px}
.fine{margin-top:18px;padding-top:16px;border-top:1px solid color-mix(in srgb,var(--accent) 35%,transparent);font-size:13px;color:var(--accent)}
@media(max-width:760px){.g{columns:1;padding:16px 8px}.p{padding:28px 24px;border-radius:20px}}
```

<!-- v:section.menu-or-catalog/running-text-index -->
### 8. Running text index

*Feeling: an inventory, read aloud.*

A catalogue as text. Ne Geurra keeps a sticky left column of every piece in 14px caps with the year in brackets, the current item's caption beneath it, and category labels mirrored at the right, beside one image at a time. Oxygen Pictures sets six condensed caps service names at about 56px on a 54px pitch, with arrows pinned to the far right edge. Replicate writes four columns of tasks rather than products. Kenzie Fraker floats a thumbnail in on hover. It suits design shops, antiques, services and any catalogue with fewer than about 30 items, where names carry weight. Avoid it for buyers who must see every product before choosing.

**Seen on** Ne Geurra, Oxygen Pictures, KenzieFrakerDesign, First December Films, JOBS - Soundtracks Youth Orchestra, 7 sites in all. **Suits** photo-led, type-led, light-precision; agency, ecommerce, brand, portfolio.

<!-- v:section.menu-or-catalog/scene-per-product -->
### 9. Scene per product

*Feeling: each thing gets a room of its own.*

Each product takes the viewport. IRONHILL gives each bottle a full illustrated scene: about 620px of art at left, a creature icon, a 72px title, a 12px expanded caps two-liner, a 220 by 48 button, a numbered badge and a small pill pager. Ring Pop gives each collection a full-bleed colour band with a huge name and one tilted product. Villa Aurelia keeps a bathroom photo and swaps rooms through pill tabs and a glass panel. It suits ranges of four to eight with real character. Always offer a plain list beside it, because someone comparing does not want to scroll through eight rooms.

**Seen on** Villa Aurelia, IRONHILL, Ring Pop Candy. **Suits** warm-neutral, illustrated, bold-colour; hospitality, food-drink, ecommerce.

<!-- v:section.menu-or-catalog/tabbed-shelf -->
### 10. Tabbed shelf

*Feeling: a small shop, well organised.*

Two to four tabs change one shelf in place. Diego's sets 58px pills, lime when active, above a marquee of packshots clipped by a 1px outlined box at radius 30. Flavor Dady uses text tabs with a maroon pill. Headspace sets filter pills above a rail of illustrated cards at radius 24. It makes a small range feel navigable. Use `role="tablist"` with arrow-key movement. Avoid it beyond four tabs, or when people need to see the whole range at once.

**Seen on** Flavor Dady, Headspace, Diego's Authentic Foods. **Suits** bold-colour, illustrated, expressive; food-drink, health.

<!-- v:section.menu-or-catalog/stacked-browse-rails -->
### 11. Stacked browse rails

*Feeling: an endless, tidy shop.*

For large catalogues, stacked horizontal rails. Airbnb sets a 22/500 title with a 32px arrow beside it, seven cards at about 194px pitch, and a prev and next pair at far right. On a phone about 2.1 cards show, so the overflow is obvious. Frontend Masters and MasterClass do the same with course tiles, and GoPro browses by activity in square tiles. Consistent thumbnails carry the whole thing, and every title needs a real sort logic behind it.

**Seen on** Airbnb, Frontend Masters, MasterClass, GoPro, fal models. **Suits** photo-led; education, hospitality, ecommerce, ai.

<!-- v:section.menu-or-catalog/whats-on-list -->
### 12. What's on list

*Feeling: the listings page.*

A programme of events, sorted by date. Roundhouse sets about 115px rows on 1px rules, a 36px display title at left and grey dates at right, with no cards. Dekmantel sets an image, the ticket type, the price, a quantity stepper and a full-width 32px black Buy button. Sonar sets two passes side by side with radio rows of option and price. A24 pairs a poster with tiny outlined buttons. The date is the design here: sort by it, group past from future, and say when something is sold out rather than removing it. Avoid cards here unless every event has a strong image.

**Seen on** A24, Almeida Theatre, Roundhouse, EverShee, Dekmantel, 9 sites in all. **Suits** bold-colour, photo-led, soft-pastel, type-led; culture, hospitality, health.

### Mistakes that cheapen a menu

- **Old-style figures.** My first Gjelina study used a default text serif, and the prices bounced above and below the line. Set `lining-nums tabular-nums`.
- **Fine-print type.** Following analysts' readings of 12 and 13px, my first Gramercy looked like a legal notice. The real thing is 16 and 17px. People read menus at arm's length, in dim rooms.
- **A price list at 14/26.** My first panels looked like an admin table. At 16/34 they matched.
- **Dotted leaders by reflex.** Leaders suit wide columns. In a narrow panel the eye needs no help.
- **Stock food.** Mixed lighting and angles ruin a grid. If the photos are not a set, use text.
- **Currency on every line.** It adds noise. State the currency once if it is not obvious.
- **A PDF.** It breaks on a phone and is always out of date.
- **Prices hidden behind a click.** People leave.
- **Unmarked allergens.** Say what is in it, and say what the marks mean.
- **Rounded cards around each dish.** A menu is a list. Cards make it a shop.

## Location and hours

This section answers the most practical question on the page: can I go there now, and how do I get there. It decides whether a local business feels real. People arrive with a phone in their hand, and they want the hours, the address and the way to call within two seconds.

What separates great from cheap is that a great block is written by someone who works there. It knows today's hours, it says when the kitchen closes, and it tells you which tube exit to use. It treats hours as data, sets them at a readable size, and aligns them. A cheap one is a Google embed beside a grey `Contact us` form, with `Mon-Sun: 9-5` in small type, in a centred card with three icons in circles. That block says nothing about the place, and it is often wrong.

What a complete block contains, in order of need:

1. Today's status: open now, closes at 6.
2. The full week, grouped where days are equal, with closed days stated and split shifts on two lines.
3. The exceptions: holidays, seasonal hours, last entry, kitchen hours.
4. The address as text, with a link to a map app.
5. A phone link, and how to get there: nearest stop, parking, entrance, step-free access.
6. One action: book, order, directions, tickets.

Measured ranges: hours set at 15 to 20px on 32 to 36px rows on visit pages, and 12 to 16px in footers; a day column about 96 to 160px wide; a map tile at 40 to 50 percent of the width with the same radius as its neighbours. Times are written the way a person would say them: `10:30 am–6 pm`, or `07–21` in Sweden. Write them in the local convention, and do not impose one.

<!-- v:section.location-hours/plain-hours-list -->
### 1. Plain hours list

*Feeling: a museum's own notice board.*

Hours as plain, confident text. The Whitney sets a short day in a 160px column, time left-aligned beside it at about 20/36, no rules between rows, and 1px ink rules between sections, with a line above for today. Sub-venues such as a café and a bar get their own ruled row with today's hours and a plus to expand. Beneath are the address, a linked phone number and two outline buttons, one for each map app. The Guggenheim uses bold sub-heads for regular, holiday and special hours, and adds a lead sentence about last entry. Use it for any institution, or any place that takes itself seriously. Keep the times next to the days, because pushing them to the far right makes the eye jump. Avoid it where one line would do, as for a small shop with a single schedule.

**Seen on** Whitney Visit, Guggenheim Visit, The Broad Visit, Dialovet, LACMA Visit, 6 sites in all. **Suits** light-precision, type-led, bold-colour, soft-pastel; culture, health, ecommerce.

```css
.w{max-width:1344px;margin:0 auto;padding:40px 48px;display:grid;grid-template-columns:1fr 1fr;gap:32px}
h2{font:700 28px/1.1 var(--font-display);letter-spacing:-.02em;margin-bottom:6px}
.today{font-size:20px;margin-bottom:22px}
.today b{font-weight:600}
dl.h{display:grid;grid-template-columns:160px 1fr;border-top:1px solid var(--ink);padding:18px 0 24px;font-size:20px;line-height:36px;font-variant-numeric:lining-nums tabular-nums}
dl.h dd{margin:0}
dl.h .now{font-weight:600}
.sub{border-top:1px solid var(--ink);padding:14px 0 28px;position:relative;font-size:20px;line-height:28px}
.sub b{display:block;font-weight:600}
.sub i{position:absolute;right:0;top:12px;font:300 26px/1 var(--font-text);font-style:normal}
.where{margin-top:16px;font-size:20px;line-height:28px}
.btns{display:flex;gap:8px;margin-top:16px}
.btns a{height:44px;line-height:42px;padding:0 18px;border:1px solid var(--ink);font-size:16px;font-weight:500}
.btns a:hover{background:var(--ink);color:var(--bg)}
.ph img{display:block;width:100%;height:420px;object-fit:cover}
.lnk{text-decoration:underline;text-underline-offset:3px}
@media(max-width:760px){.w{grid-template-columns:1fr;padding:24px 16px}.ph{order:-1}.ph img{height:52vw}dl.h{grid-template-columns:96px 1fr;line-height:32px;font-size:18px}}
```

```html
<dl class="h"><dt>Mon</dt><dd>10:30 am–6 pm</dd><dt>Tues</dt><dd>Closed</dd>
<dt class="now">Fri</dt><dd class="now">10:30 am–10 pm</dd></dl>
```

<!-- v:section.location-hours/hours-card-beside-map -->
### 2. Hours card beside map

*Feeling: the sign in the window.*

A solid brand card with seven day rows, beside a map tile of equal height. Lil Italy sets an oxblood card at radius 24 with a heavy caps title, bold uppercase days on 36px rows, dashed leaders running to the time, and a pale card and a real map alongside. Zahnarzt Wernitz uses a navy block with a wavy top, grouping Monday and Tuesday and writing the lunch closure on two lines. KAWARA Museum gives each of its two venues an orange dot with phone, fax and hours, beside a 700 by 510 map. Rivian pairs a photo with a dark panel. Use it for restaurants, clinics and shops, where this is the one loud object in the section. Use a real map, or none. Avoid it for institutions with many schedules, which need the plain list.

**Seen on** Lil Italy, Zahnarzt Wernitz, KAWARA MUSEUM - LIBRARY, Vrdnt Work, Rivian, 8 sites in all. **Suits** photo-led, warm-neutral, soft-pastel, bold-colour; food-drink, health, local-business, culture.

```css
.g{max-width:1344px;margin:0 auto;padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:32px}
.c{border-radius:24px;padding:48px 48px 40px;background:var(--surface);min-height:450px;display:flex;flex-direction:column}
.c h2{font:800 28px/1 var(--font-display);text-transform:uppercase;letter-spacing:.01em;color:var(--accent)}
.hours{background:var(--accent);color:var(--bg)}.hours h2{color:inherit}
.hours dl{margin-top:auto}
.hours div{display:flex;align-items:center;gap:12px;font:700 15px/36px var(--font-text);letter-spacing:.02em;font-variant-numeric:lining-nums tabular-nums}
.hours dt{width:max-content}
.hours i{flex:1;height:1px;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--bg) 60%,transparent) 0 7px,transparent 7px 11px)}
.hours dd{margin:0}
.contact{justify-content:space-between}
.contact a{display:block;color:var(--accent);font-size:15px;font-weight:600;line-height:34px}
.map{position:relative;border-radius:24px;overflow:hidden;min-height:450px}
.map img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.addr{position:absolute;left:24px;bottom:24px;background:var(--bg);border-radius:16px;padding:14px 18px;font-size:14px;line-height:21px;color:var(--ink)}
.addr b{display:block;color:var(--accent)}
@media(max-width:760px){.g{grid-template-columns:1fr;padding:16px;gap:12px}.c{min-height:0;padding:28px 24px;gap:28px;border-radius:20px}.map{min-height:280px;border-radius:20px}}
```

<!-- v:section.location-hours/open-today-strip -->
### 3. Open today strip

*Feeling: the door is open.*

Only what matters today, near the top. The Arkansas Museum of Fine Arts runs three items along the foot of its hero: a bold 12px `OPEN TODAY` over the hours, the address, and a terracotta action with an arrow, split by 1px slanted rules that echo the slash in its logo. Tate reduces hours to one status line under each gallery photo. The Rijksmuseum puts prices and hours in a small translucent panel. It is the single most useful thing a venue can add to a homepage. Compute it, using the snippet above, so that it can never be wrong, and link it to the full table.

**Seen on** Royal Ontario Museum, New Exhibitions, Arkansas Museum of Fine Arts, Tate Visit, Serpentine Visit, 6 sites in all. **Suits** photo-led, warm-neutral, type-led, light-precision; culture.

```css
.hero{display:grid;grid-template-columns:44% 1fr;height:100vh}
.l{padding:0 56px 44px 72px;display:flex;flex-direction:column}
.l h1{font:600 60px/1.04 var(--font-display);letter-spacing:-.03em;color:var(--ink);margin-top:280px}
.l p{font-size:16px;line-height:24px;color:var(--ink-2);margin:32px 0 0 56px;max-width:21em}
.strip{margin-top:auto;display:flex;align-items:center;gap:20px;font-size:12px;line-height:16px}
.strip b{display:block;font-size:12px;font-weight:700;letter-spacing:.02em}
.strip i{width:12px;height:34px;background:linear-gradient(to top right,transparent calc(50% - .6px),var(--ink-3) calc(50% - .6px),var(--ink-3) calc(50% + .6px),transparent calc(50% + .6px))}
.strip a{font-weight:700;font-size:13px;letter-spacing:.02em;color:var(--accent);text-transform:uppercase}
.r{background:url(photo.jpg) center/cover;clip-path:polygon(4.5% 0,100% 0,100% 100%,0 100%)}
@media(max-width:760px){.hero{grid-template-columns:1fr;grid-template-rows:auto 40vh;height:auto}.l{padding:0 16px 24px}.l h1{font-size:40px;margin-top:56px}.l p{margin:20px 0 32px}.strip{flex-wrap:wrap;gap:12px}.r{clip-path:none}}
```

<!-- v:section.location-hours/location-card-grid -->
### 4. Location card grid

*Feeling: every branch accounted for.*

For chains, three columns of quiet cards. Sweetgreen sets a white 8px-radius card on a tinted page: 16/600 name with a pin icon, a 14px two-line address, a clock icon with two-line hours, and a pair of 40px pills for View and Order pinned to the base. The page groups by state with a count and a `Jump to state` select. The important part is how it handles exceptions: Coming soon replaces the sub-line and the button becomes `Get updates`, and Temporary Hours for one date sit in the same slot as ordinary hours. Apple Retail uses a 16:9 storefront photo and a single `Open until` line. Pin the buttons with `margin-top:auto`, so they align however long the address runs. Avoid it under about six locations, where each place deserves a richer row.

**Seen on** Sweetgreen Locations, Apple Retail, Boudin Bakery, ROEH Law & Tax, Design Museum. **Suits** warm-neutral, light-precision, bold-colour, photo-led; food-drink, ecommerce, local-business, culture.

```css
body{background:var(--surface)}
.w{max-width:1120px;margin:0 auto;padding:32px 24px}
.top{display:flex;justify-content:space-between;align-items:center;padding-bottom:18px;border-bottom:1px solid var(--line);margin-bottom:24px}
.top h1{font:400 24px/1.2 var(--font-display);letter-spacing:-.01em}
.top label{font-size:13px;color:var(--ink-2);display:flex;gap:16px;align-items:center}
.top select{height:40px;width:360px;padding:0 12px;border:1px solid var(--line-strong);border-radius:8px;background:var(--bg);font:inherit;font-size:15px;color:var(--ink)}
h2{font:600 22px/1 var(--font-text);padding-bottom:12px;border-bottom:1px solid var(--line);margin-bottom:20px}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.c{background:var(--bg);border-radius:8px;border:1px solid var(--line);padding:24px 24px 20px;display:flex;flex-direction:column;font-size:14px;line-height:19px;color:var(--ink-2)}
.c h3{font:600 16px/22px var(--font-text);color:var(--ink);margin-bottom:6px}
.c h3 small{display:block;font:400 14px/19px var(--font-text);color:var(--ink-2)}
.ln{display:grid;grid-template-columns:30px 1fr;margin-bottom:10px}
.ln svg{width:18px;height:18px;margin-top:-1px;stroke:var(--ink);fill:none}
.ln em{font-style:normal;display:block;margin-top:10px}
.act{margin-top:auto;padding-top:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.act a{height:40px;line-height:38px;text-align:center;border-radius:20px;font-size:14px;font-weight:500;border:1px solid var(--ink);color:var(--ink);transition:background .15s,color .15s}
.act a.p{background:var(--accent);border-color:var(--accent);color:var(--bg)}
.act a:hover{background:var(--ink);border-color:var(--ink);color:var(--bg)}
@media(max-width:760px){.w{padding:20px 16px}.top{flex-direction:column;align-items:flex-start;gap:12px}.top label{width:100%}.top select{flex:1;width:auto}.g{grid-template-columns:1fr;gap:12px}}
```

<!-- v:section.location-hours/location-story-rows -->
### 5. Location story rows

*Feeling: each place is a character.*

Each venue gets a story. Dishoom alternates rows on a tinted panel: a 30px serif name, two paragraphs written in the café's own voice, a 4:3 interior photo, then icon rows split by hairlines for address, nearest tube and exit, today's hours and phone, then square-cornered View and Book buttons of about 183 by 50. List and map views and a filter sit above. Away gives its flagship a big photo and an italic label. Use it when the room is why people come. The nearest-exit line is a perfect detail: it could only come from someone who has been there.

**Seen on** Dishoom Locations, Away Stores, Aesop, Onyx Coffee Lab. **Suits** warm-neutral, expressive; food-drink, fashion, ecommerce.

<!-- v:section.location-hours/city-clock-columns -->
### 6. City clock columns

*Feeling: a real company, awake somewhere right now.*

One column per office, with live local time. Huge draws a thin analog clock of about 105px with a pink second hand, then the city at about 40/600, a role label, the address and a linked phone at 16px, on a 345px pitch, with rows fading in as you scroll. Pentagram sets a photo pair, a 32px city, the local time in grey, linked email and phone, and a short paragraph about the neighbourhood. Basic Agency right-aligns the time beside the city. Use it for agencies and global teams. Local time does real work, because it tells you whether someone is awake to answer. Compute it with `Intl.DateTimeFormat` and the city's IANA zone, never by subtracting hours.

**Seen on** Huge Contact, Pentagram Contact, Pentagram Work, Basic Agency Contact, IDEO Contact, 6 sites in all. **Suits** photo-led, type-led, dark-precision; agency, finance.

```css
.g{display:grid;grid-template-columns:repeat(4,1fr);gap:64px 24px;padding:64px 24px;max-width:1440px;margin:0 auto}
.o svg{width:106px;height:106px;display:block;margin-bottom:36px}
.o h3{font:600 40px/1.1 var(--font-display);letter-spacing:-.035em;margin-bottom:12px}
.o small{display:block;font-size:16px;font-weight:600;line-height:20px;color:var(--accent)}
.o address{font-style:normal;font-size:16px;line-height:20px;margin-bottom:18px}
.o a{font-size:16px;font-weight:600}
@media(max-width:760px){.g{grid-template-columns:1fr 1fr;padding:32px 16px;gap:40px 16px}.o svg{width:72px;height:72px;margin-bottom:20px}.o h3{font-size:28px}.o small,.o address,.o a{font-size:14px}}
```

<!-- v:section.location-hours/plain-city-directory -->
### 7. Plain city directory

*Feeling: we are in these places.*

A list of places with no map. White Cube runs six city blocks of about 210px, with name, a few lines of address and a Visit link. Dishoom sets city names at 20px, right-aligned over street footage. Poeza staggers about 265 wide pale grey tiles with each stockist's name and address in small caps, so a list of shops becomes a texture. Golden Assisted Transportation lists the towns it serves as navy pills, which is exactly what a local service should show. Use it when knowing where you are is enough, and the visitor does not need directions from this page.

**Seen on** Poeza, Dishoom, White Cube, Golden Assisted Transportation, Apétiti, 6 sites in all. **Suits** photo-led, light-precision, warm-neutral, illustrated; food-drink, fashion, culture, local-business.

<!-- v:section.location-hours/map-as-figure -->
### 8. Map as a figure

*Feeling: an argument, drawn.*

The map is an illustration that makes a point. Nuro sets a pale grey world on a tinted panel at radius 32, with flat purple ellipse pins and 1px dark lines rising to 24px labels at staggered heights, a small `HQ` outline chip, and upcoming cities in grey. Waymo lists service cities beside a white US map. Le Saint Georges numbers nearby places on a drawn map. Use it to say something a Google embed cannot, such as where you operate, or what is within walking distance. Stagger the labels so the lines become the design, and make the same data available as text. Avoid it when someone needs directions, where a plain link to a maps app serves them better.

**Seen on** Nuro, Waymo, Le Saint Georges. **Suits** photo-led, bold-colour; brand, hospitality.

<!-- v:section.location-hours/three-column-info-band -->
### 9. Three-column info band

*Feeling: everything you need, at the bottom of the page.*

A plain band: Hours, Address, Contact or Order in three columns. Republique uses a beige band with 11px caps heads, 12px text and blue-grey pills. Bestia sets four columns in its footer. Almeida lists box office phone and address. Fidèle writes it all as plain 14px blue lines. Deadstock sets a café name and one line of hours in two columns. It is the cheapest entry here and one of the most useful, so nearly every local site should have it. Set the type larger than these examples, at 14 to 16px, since it is often what the visitor came for.

**Seen on** Almeida Theatre, Fidèle, Eicher Honig, Republique Menu, Bestia Menu, 12 sites in all. **Suits** bold-colour, warm-neutral, type-led, photo-led; culture, local-business, hospitality, food-drink.

<!-- v:section.location-hours/multi-venue-panels -->
### 10. Multi-venue panels

*Feeling: two rooms, one house.*

Two sites treated as two rooms. The Getty splits a full-width section into green and orange: a map sits at left with a pin and illustrated label for each campus, and each colour panel holds a 42/600 name, a live `Closed now` at top right and an aerial photo. Selecting a pin flips the panel, so the map works as the control. Dragon Spirit gives each class venue a bold blue uppercase title with times by age group and its own map, alternating sides. Use it when venues differ enough that people must choose.

**Seen on** Dragon Spirit Martial Arts, Getty Visit. **Suits** bold-colour; local-business, culture.

<!-- v:section.location-hours/live-conditions-panel -->
### 11. Live conditions panel

*Feeling: someone is looking out of the window for you.*

Today's real conditions, as data. Babylonstoren sets two small blocks at the bottom left of its hero: live weather with a link to a garden camera, and a translucent list of booking actions with a 1px rule under its heading. Queen's University Library runs a rail of branches, each with hours and live capacity as a bold percentage. A farm can show the weather, a pool its water temperature, a ski lodge its snow, a library its seats. Use it only with a live source, and hide it if the source fails.

**Seen on** Babylonstoren, Queen's University Library. **Suits** photo-led, bold-colour; hospitality, education.

<!-- v:section.location-hours/visit-page-sections -->
### 12. Visit page sections

*Feeling: every question answered, in order.*

A full plan-your-visit page. SFMOMA uses a sticky sub-nav of 11 to 14px anchors, with an underline on the active one, then Hours and Getting Here as sections, with a map tile at 40 percent and outline buttons. The Guggenheim adds an Admission price table in plain rows. The National Gallery offers tiles for transport, walking, cycling and car, then a parking select. Use it for institutions. Long is fine here, since a visitor is planning. Keep accessibility as a named section, not a footnote, and answer it in text.

**Seen on** SFMOMA Visit, National Gallery Visiting. **Suits** warm-neutral, bold-colour; culture.

### Mistakes that cheapen a location block

- **Hours as fine print.** My first Whitney study used an analyst's 15px, and it looked like a legal footnote. At 20/36 it matched. This was the largest quality jump of any fix in the chapter.
- **Times pushed to the far edge.** The same estimate put times far right. On the real page they sit in a column next to the days, so the eye does not travel.
- **`Mon-Sun 9-5` when it is not true.** Write the real week, with its closed days.
- **A fake map.** My first attempt drew roads as SVG strokes, and it looked like clip art. Use a static map image from a real provider, or a drawn figure with a point to make, or no map.
- **A `border:dashed` leader.** A 1px dashed border renders as faint dots. Use a repeating gradient of 7px on and 4px off, at about 60 percent, for leaders that hold up on a solid card.
- **A raw Google embed.** It brings its own type and colour and a scroll trap. Put a static image first, and load the interactive map on tap.
- **A small clock.** At an analyst's 64px, my clocks looked like icons. The real ones are about 105px, and they are the feature.
- **Icons in circles.** A pin, a phone and a clock in three pastel circles is the fingerprint of a template. Use plain line icons, or none.
- **No phone link.** On a phone that is the whole point.
- **Closed status typed in by hand.** It will be wrong by Sunday.
- **Contact form instead of an address.** Someone trying to find a building does not want to fill in a form.

## Before you call it done

- Read every word aloud. Could it be true of this exact business? Replace anything that could be any business.
- Make the data awkward. Add a closed day, a split shift, a sold-out item, a long dish name, a 40-character link label. Does it hold?
- Check sizes. Is anyone being asked to read something they came for at under 15px?
- Check numbers: `lining-nums tabular-nums`, prices aligned, times aligned, en dashes in ranges.
- Check that every phone number, email and address does something when tapped.
- Check every computed value: does status come from data, in the venue's own time zone?
- Look at the footer alone. Name its one closing decision. If you cannot, make one. If you can name three, remove two.
- Check that the footer's columns relate to the page's grid, and that lines meet.
- Check contrast on the legal row. Use `--ink-2`.
- Remove every card and see what breaks. Put back only those.
- Resize to phone width. Link rows reach 44px, rails still scroll, tables still read, and nothing relies on hover.
