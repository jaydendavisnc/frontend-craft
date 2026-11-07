# Hero

Every first screen. Drawn from 569 analyst rows across 549 sites, clustered into 99 canonical variants, with about 230 frames opened and checked against measured specs, 29 variants rebuilt and compared side by side with the originals at 1440 and at 390, and every first screen run through the same density measure.

**Contents**

- [Why heroes look thin](#why-heroes-look-thin), read this every time
- [Compose the first screen](#compose-the-first-screen)
- [Pick by what is real](#pick-by-what-is-real)
- [Measured ranges](#measured-ranges)
- [Centred with product](#centred-with-product), 13 variants, 4 built
- [Split copy and media](#split-copy-and-media), 15 variants, 3 built
- [Full-bleed media](#full-bleed-media), 15 variants, 5 built
- [Video loop](#video-loop), 8 variants, 2 built
- [Type only](#type-only), 13 variants, 4 built
- [Collage](#collage), 13 variants, 3 built
- [3D object](#3d-object), 9 variants, 2 built
- [Input first](#input-first), 7 variants, 4 built
- [Interactive demo](#interactive-demo), 6 variants, 2 built
- [Before you call it done](#before-you-call-it-done)

Code uses `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any dealt type system and palette drops straight in. Sizes are for a 1440 by 900 screen, and every block relies on the phone conversion under [Compose the first screen](#compose-the-first-screen). The sampler deals typefaces and colours, so nothing here names one. Where the code needs a monospaced face it reads `--font-mono` and falls back to the system's. Where it needs a second hue it rotates `--accent` with `oklch(from ...)`, which works in every current browser, so give an older browser a plain fallback first if that matters.

---

## Why heroes look thin

A generated hero usually has a correct headline, correct spacing and a correct button, and it still looks like a wireframe beside a real one. This is measurable. We ran every first screen in the corpus through the same measures, then ran our own first attempts through them.

| First screen | Plain background | Cells with structure | Bottom third with structure | Distinct objects | Colour richness |
|---|---|---|---|---|---|
| Centred with product | 73% | 54% | 67% | 21 | 1.7 |
| Split copy and media | 57% | 66% | 59% | 22 | 3.0 |
| Full-bleed media | 23% | 79% | 82% | 13 | 5.1 |
| Video loop | 28% | 71% | 71% | 14 | 4.5 |
| Type only | 82% | 48% | 46% | 16 | 1.4 |
| Collage | 62% | 61% | 53% | 16 | 2.8 |
| 3D object | 70% | 54% | 48% | 10 | 1.9 |
| Input first | 59% | 68% | 78% | 23 | 2.7 |
| Interactive demo | 76% | 58% | 63% | 23 | 2.2 |
| **Our first product hero** | **93%** | 46% | 55% | 18 | **0.4** |
| **Our first type hero** | **95%** | **20%** | **3%** | 13 | 0.5 |

Medians. Plain background is the share of the screen in the one dominant colour. A cell is a 60px square with real edges in it. Colour richness is entropy over a coarse palette, so 0.4 means nearly two colours.

Our first attempts used a tasteful palette, measured type and a believable business. They looked fine alone and collapsed beside the references. After fixing the causes below, the product hero reached 81% plain background, 83% in the bottom third and 1.1 richness, and it could sit next to Attio and Slack.

Thin does not mean empty. The strongest tier is barer than the one below it: gold first screens are 64% plain with 16 objects, and silver ones are 48% plain with 20. Linear, Vercel and Block are almost nothing at all. So the fix is never to add more. The gap between a real hero and a generated one is where the emptiness sits and how much range there is inside what remains: real heroes leave the top open and put weight in the lower half, and they mix very large and very small things. Generated heroes spread a few medium things evenly and stop.

As a working check on your own render: nine in ten real product heroes are under 90% bare, and nine in ten type heroes are under 96%. For the bottom third, nine in ten product heroes have structure in over 31% of cells, and even type heroes reach 28% at the lower quartile. Below those lines, a hero has no floor. These are alarms, not scores: Amplitude is 89% bare and strong, because the content it does have is dense and low on the screen.

**The causes, in order of damage.**

1. **Nothing reaches the fold.** The bottom third is where real heroes do their work: a window entering, a rail of logos, a card rising, a horizon. Our first type hero had 3% of its bottom third occupied. The median real type-only hero has 46%, and even Vercel's emptiest claims pin a logo row to the fold. Give the lowest 300px a job before you touch anything else.
2. **The content stops before the crop.** A cropped window only reads as a crop if rows continue past the cut. Ours had four table rows and then white, so the frame looked like an empty box with a table in it. Build more than the viewport shows, 8 to 12 rows, so the fold cuts through content.
3. **One object at one scale.** The analysts' specs for top sites list a headline, a sub, buttons and a product. Checking those specs against the frames, the sizes were almost always right, but the specs kept leaving out the small things: a three-column proof row on the CTA baseline, a tiny video card docked in a corner, a status pill, a right-aligned link, a version chip, a rating. Real product, type and input first screens hold a median of 16 to 23 separate objects at five or six scales. Those small objects are what make a screen feel inhabited, and a spec-following build leaves them out. Add two or three, each carrying a true fact.
4. **No colour or glyphs inside the frame.** Near-white heroes are not colourless. Attio has app icons, Slack has avatars and thumbnails, Plausible has a chart. Our grey table had 0.4 richness against their 1.0 to 1.4. Put status colour, avatars, tiny logos, sparklines and progress bars in every row. On dark products do the opposite, see cause 7.
5. **No mass low on the screen.** Text is light. A hero of only text and hairlines floats. Slack puts an aubergine rail in the lower half, Linear a full dark window, Stripe a saturated ribbon. Decide what the heavy thing is and put it below the middle.
6. **Nothing overlaps.** Everything in a generated hero sits in its own box, which makes it read as flat. Almost every strong hero has one deliberate overlap: a form over a colour band, a panel breaking a window edge, a phone over a corner, type crossing a ribbon. One overlap creates more depth than any shadow.
7. **Too many hues inside a dark product.** The inverse of cause 4. Our trace view used five saturated bar colours and looked like a dashboard. Linear's window is close to monochrome with one small hue. On dark, make everything shades of white and let one thing carry colour, usually the thing the headline talks about.
8. **Centred in the viewport.** `min-height:100vh` with `justify-content:center` is the generator's reflex, and it wastes the fold. Real headlines are anchored from the top: H1 starts at y 176 to 268, median about 205. On centred product heroes the object then starts between 410 and 580, median 525, which is 58% of the way down. Sized from the top, the stack leaves the fold free to cut something.
9. **Uniform spacing.** Generated stacks use one gap throughout. Real stacks are tight inside, 8 to 24px, and open up before the object, 50 to 100px. That change of rhythm tells the eye where the copy ends and the proof begins.
10. **Thin chrome.** A text wordmark, three links and one button. Real navs carry a mark, five to seven links with chevrons, and two actions, and many add an announcement line. The nav is 7% of the screen and it sets the believability of the rest. See `nav.md`.
11. **Interchangeable content.** Could a competitor use this frame unchanged? Container numbers, a customs hold, a port and a cost beat "Project Alpha, 75%". The composition can be borrowed. The content cannot.

## Compose the first screen

Think in five layers, and decide each one on purpose.

| Layer | Job | Where | Typical |
|---|---|---|---|
| Chrome | Says a real company lives here | Top 60 to 78px | Mark, 5 to 7 links, two actions |
| Claim | What this is, in one sentence | y 176 to 330 | 48 to 72px, two lines, 16 to 20px sub |
| Object | The real thing | From y 410 to 580, or the right half, or the whole screen | Window, photo, film, form, render |
| Proof | Why believe it | Beside or under the object | Logos, numbers, a quote, a rating |
| Exit | What the fold cuts | y 700 to 900 | Window running on, next section peeking, a rail |

Rules that follow from this.

- **Decide the object first.** Copy is sized around it, never the reverse. If you cannot name the object in a sentence, you are not ready to design. "A shipment table with one customs hold" is an object. "A nice visual" is not.
- **One first read.** At thumbnail size there is one clear thing, usually the headline or the object, never both at equal weight. Dim the other. Sourcegraph lets a bright poster win. Affirm lets the headline win and keeps the phone screen dim.
- **Crop on purpose.** A crop says this continues. Crop at the fold, off the right edge, or off the panel edge. Do not crop at a tidy boundary, because that reads as an accident.
- **Keep one thing still.** With a moving object, the claim stays put. With moving copy, the object stays put.
- **Stack everything inside a fixed-height hero with `flex:none`.** In a flex column of fixed height, children shrink rather than overflow. A tall window quietly squeezed our CTA to a 10px sliver. Set `.hero>*{flex:none}` and let `overflow:hidden` do the cropping.
- **Size for `100vh` only when the media fills it.** Product heroes use a fixed or `svh`-capped height, so short laptops still see the window's top.

**Buttons.** On top sites the hero CTA is 34 to 44px tall, median 40, with a 34 to 36px one in the nav. About 2 in 5 are pills, so a pill is a choice, not a default. Hover changes 78% of main CTAs, and fill is what changes in 77% of those. The median is 200ms with `ease`, and when the button moves at all it moves 2px up. Keep to one primary. A pair is fine, three is a menu.

**Phone.** The stack stays and the crop changes. Headline 36 to 44px, CTA full width or two across, then the object at full column width, cut by the fold or by the screen edge. The code in this chapter is sized for 1440, and every one of our demos broke at 390 until it got this block. Headlines stayed at 56 to 84px, navs overflowed, and fixed grids crushed their columns. This is the shared core of the conversion we tested across every demo. Put it at the end of the hero's stylesheet and rename to your classes. See `mobile.md` for more.

```css
@media (max-width:700px){
  html,body{overflow-x:clip}                     /* clip, not hidden: hidden breaks sticky children */
  .nav{height:56px;padding:0 16px;gap:12px}      /* mark and one action, the rest in a menu */
  .nav>a:not(.mark),.nav .r>a:not(:last-child){display:none}
  h1:not(.fit){font-size:clamp(36px,10.6vw,44px);line-height:1.06;max-width:none;letter-spacing:-.025em}
  .sub{font-size:16px;max-width:none}
  /* fixed heights go, except where a full image owns the screen */
  .hero:not(:has(>img)){height:auto;min-height:0;padding:28px 16px 0;overflow:hidden}
  .hero:has(>img){height:auto;min-height:100svh}
  /* one column. minmax(0,1fr), because a plain 1fr grows to fit a wide child and clips the headline */
  .wrap,.head,.grid{grid-template-columns:minmax(0,1fr);gap:24px;padding:0}
  /* a window keeps its real size and the screen crops it. Never scale an interface to fit */
  .win,.panel{width:760px;max-width:none;height:440px;align-self:flex-start;grid-template-columns:1fr}
  .win>aside,.pop{display:none}                  /* sidebar and floating panel go first */
  /* a diagram cannot shrink either: it sits below the copy and runs off both edges */
  .diagram{position:relative;width:760px;height:340px;margin-left:calc(50% - 380px)}
  /* lockups on images: one column, bottom-anchored, card full width */
  .foot{display:grid;grid-template-columns:1fr;gap:20px;padding:0 16px 24px}
  .card{width:100%}
  /* fields fill the column at 48px */
  form{flex-direction:column;align-self:stretch}
  form label,form button,.field,.composer,.cmd{width:100%}
  form label,form button{height:48px}
  /* tabs scroll inside themselves */
  .tabs{display:flex;overflow-x:auto;scrollbar-width:none}
  .tabs button{flex:none;padding:0 16px}
  /* perimeter pieces are desktop-only: wires, nodes, callouts, side labels */
  .wires,.node,.callout,.side{display:none}
}
```

Three things went wrong when we applied this, and all three are easy to repeat. Short shared class names leaked: a phone rule for `.t` crushed unrelated tiles, and one for `.w` blanked a whole page, so scope phone rules to the component. A blanket headline rule also overrode the measured fit on giant type, which is why the `h1:not(.fit)` exemption is there, so let `fit` set its own size, about 23vw on a full image. And a hero with no image loses its height, so anything positioned at its base needs a `min-height` of its own, about 600px.

**Motion.** Copy settles first, the object second, and the rest stays still. The real load strips show short reveals, under about 800ms, and then the product doing something small: a row updating, a caret typing, a bar filling. Check `references/motion/load.md`. Anything animated on load has to be readable with JavaScript off and under reduced motion.

## Pick by what is real

Start from what you actually have, not from a layout you like.

| You have | Reach for | Avoid |
|---|---|---|
| Software with a real interface | Centred with product, Split `live-ui-overlap`, Interactive demo | Abstract art, 3D blobs |
| Infrastructure or an API with no interface | `diagram-instead-of-screenshot`, `code-or-proof-as-picture`, `install-command`, `annotated-specimen` | Fake dashboards |
| A number nobody else can claim | `code-or-proof-as-picture`, `stack-with-proof-row` | Hiding it in the sub |
| A physical product and good renders | 3D object, `product-film`, `product-still-right` | Cards and bento |
| Real photography of a place or people | Full-bleed media, Video loop, `half-and-half` | A small contained thumbnail |
| No photography at all | Type only with a real rising row, `graphic-plate`, `panel-field`, real information such as hours, prices and a menu | Gradients posing as photos, emoji |
| A task people came to do | Input first | A marketing claim in front of the task |
| A catalogue or several products | `routing-tiles`, `promo-carousel`, `bleeding-rail` | One hero product slogan |
| A body of work | Collage, `reel-as-identity`, `quiet-paragraph`, `image-with-caption-only` | Generic agency claim |
| A local place with real photos | `bottom-left-lockup`, `multi-field-booking-bar`, `bleeding-rail`, `half-and-half`, with hours, prices and the next opening on screen | Stock images, a slogan, a carousel |
| A restaurant, hotel or shop | `centred-lockup` with corners and captions, `film-centred-lockup`, `contained-plate`, `half-and-half` | Dark overlay on a stock interior |
| A famous name | `mark-plus-sentence`, `claim-with-logos-at-fold` | Explaining yourself |

**By register.** Light precision leans on centred product, type and split. Dark precision uses the same three. Photo led is mostly full-bleed and film. Warm neutral splits between full-bleed and split. Bold colour uses full-bleed, split and collage. Type led stays with type. Render-led work is 3D first. Mono technical favours 3D, input and demos. These are tendencies, and the sampler's deal outranks them.

**Keeping range.** Two sites built from this chapter must not look alike, so vary at least three of these from your last build: alignment (centred is 83% of product heroes, so left is the fresh choice), object entry (fold, right edge, behind the type, whole screen), ground (page colour, faint wash, image mat, solid panel, inset panel), headline voice (one line, two lines, a sentence-long paragraph), and scale (a small confident 40px head or a 90px statement). Take the variant the sampler dealt unless the real assets make it impossible.

## Measured ranges

From the deep pass of measured sites, split by element. Each cell is p25, median, p75. These are starting points for the professional registers. H1 here is the DOM's H1, which on a few sites is a small label above the visual headline, so treat the low ends with care.

| Element | H1 px | Weight | Leading | Tracking em | H1 top y | H1 width | Sub px | Sub gap | Sub width |
|---|---|---|---|---|---|---|---|---|---|
| Centred with product | 50 / 60 / 68 | 400 / 500 / 600 | 1.0 / 1.1 / 1.1 | -.03 / -.02 / 0 | 176 / 204 / 268 | 640 / 840 / 960 | 18 / 19 / 22 | 17 / 24 / 40 | 501 / 577 / 700 |
| Split | 36 / 48 / 60 | 400 / 500 / 700 | 1.0 / 1.1 / 1.2 | -.02 / 0 / 0 | 128 / 197 / 262 | 404 / 509 / 608 | 16 / 18 / 20 | 16 / 24 / 32 | 404 / 536 / 576 |
| Full-bleed | 40 / 56 / 72 | 400 / 440 / 600 | 1.0 / 1.0 / 1.2 | -.02 / 0 / 0 | 188 / 331 / 472 | 465 / 640 / 1000 | 16 / 16 / 18 | 16 / 24 / 34 | 435 / 546 / 750 |
| Video | 48 / 64 / 77 | 300 / 400 / 500 | 1.0 / 1.1 / 1.2 | -.03 / 0 / 0 | 192 / 388 / 631 | 383 / 552 / 731 | 16 / 16 / 20 | 10 / 24 / 46 | 384 / 508 / 692 |
| Type only | 48 / 64 / 80 | 400 / 450 / 600 | 1.0 / 1.1 / 1.2 | -.03 / -.01 / 0 | 148 / 208 / 262 | 705 / 922 / 1100 | 16 / 21 / 24 | 16 / 24 / 32 | 508 / 673 / 896 |
| Collage | 40 / 56 / 66 | 400 / 400 / 600 | 1.1 / 1.1 / 1.1 | -.02 / -.01 / 0 | 206 / 321 / 713 | 441 / 606 / 806 | 16 / 17 / 20 | 16 / 26 / 46 | 560 / 600 / 680 |
| 3D object | 44 / 64 / 80 | 500 / 500 / 500 | 1.0 / 1.0 / 1.1 | -.05 / -.03 / -.01 | 187 / 269 / 356 | 486 / 656 / 880 | 18 / 18 / 18 | 10 / 24 / 130 | 656 / 730 / 960 |
| Input first | 32 / 53 / 64 | 400 / 500 / 600 | 1.0 / 1.1 / 1.3 | -.03 / -.02 / 0 | 154 / 213 / 243 | 460 / 628 / 840 | 16 / 16 / 18 | 8 / 20 / 28 | 413 / 640 / 840 |
| Interactive demo | 48 / 64 / 78 | 400 / 500 / 600 | 1.0 / 1.0 / 1.2 | -.05 / -.03 / -.03 | 164 / 181 / 217 | 500 / 676 / 1024 | 18 / 18 / 18 | 12 / 16 / 20 | 432 / 508 / 637 |

Each row is 12 to 53 measured sites, so the smaller elements are rough. Analysts estimate type sizes well, but not always: Slack's headline is 64px, not the 80 in its row, and Linear's about page is nearer 48 to 56 than 72. A DOM H1 can also miss the visual headline, as on Asana, where the frame shows about 100px against a measured 64. Trust a frame over a row, and a measurement over an estimate, unless the frame plainly disagrees.

What the table says: media pushes the headline down the screen, because full-bleed and video H1s start 130 to 190px lower than product heroes, and they use lighter weights because the picture already carries the weight. Split heroes run smaller, at a median of 48px, because the column is narrow. Centred product stacks are the widest and most tightly tracked. About 2 in 5 buttons on top sites are pills. On average the CTA is 40px tall in the hero and 34 to 36px in the nav.

---

## Centred with product

`hero.centered-with-product`, 65 sites. The default for software. A short stack of copy sits on the centre axis and a real product enters from below and is cut by the fold.

**What it must do.** Say what the thing is, then prove it by showing it. The window is the argument, and the copy is its caption. Scrolling should feel like pulling the rest of the product into view.

**Great versus cheap.** The layout is so common that it carries no distinction, so everything rides on the frame's contents. Great ones show a real moment: one specific deal, one failing build, one customs hold. Cheap ones show a generic dashboard with three cards and a bar chart, or a window that ends before the fold. The second difference is restraint in the stack. The strongest stacks are tight, with one sub and two small buttons, and the window starts soon enough to be seen. A long stack pushes the product below the fold, and then the hero is only a headline.

**Measured.** H1 50 to 68px, median 60, weight 500, tracking -0.02em, two lines. Sub 18 to 22px, 501 to 700px wide, 17 to 40px under the headline. Window width 800 to 1320px. In 14 frames measured by hand the object starts at y 410 to 580, median 525. The stack's internal gaps are 8 to 24px, and the gap to the window is 50 to 100px. Windows carry radius 8 to 28 on top corners only. Text inside them is 12 to 13px, which is real interface size, because a scaled-down screenshot reads as a picture of software while 13px text reads as software.

<!-- v:hero.centered-with-product/centred-stack-cropped-window -->
### `centred-stack-cropped-window` · 14 sites · quality 5

- **Feels:** Confident, modern, the product speaks.
- **Use when:** You have a real interface that looks good at 13px, and one view that explains it.
- **Not when:** The interface is sparse or unfinished, or the buyer needs reassurance before they need detail.
- **Recipe:** 30px outlined pill link, 22px gap, 56 to 64px two-line headline to 800px max, 18px gap, 18 to 20px grey sub under 600px, 26px gap, two 36 to 40px buttons, 50 to 100px gap, then a 1080 to 1120px window, 12px top radius, starting y 470 to 580, full of rows past the fold. One small panel breaks the window's edge. A faint accent wash at 14% sits behind its base. Slack adds a logo row between CTA and window, and it still fits because its head is tight.
- **Seen on:** Attio, Slack, Plausible, Tally, Make, Prisma, Haikei, Penpot, Bear.
- **Suits:** gradient-light, light-precision, dark-precision. SaaS, devtool, AI.

```html
<section class="hero">
  <a class="note"><b>Customs holds</b> now flagged 36 hours early</a>
  <h1>Every container, every carrier, on one quiet screen</h1>
  <p class="sub">Tracks ocean freight across 41 carriers and tells your team what will be late before the carrier does.</p>
  <div class="cta"><a class="btn p">Start tracking</a><a class="btn">See a live shipment</a></div>
  <div class="win" aria-hidden="true"><!-- sidebar, stat strip, 8 to 12 real rows --></div>
  <aside class="pop" aria-hidden="true"><!-- one exception, with a cost --></aside>
</section>
```
```css
.hero{position:relative;height:836px;overflow:hidden;isolation:isolate;
  display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:56px}
.hero>*{flex:none}                       /* or the window squeezes the CTA */
.hero::before{content:"";position:absolute;inset:auto 0 0;height:440px;z-index:-1;
  background:radial-gradient(60% 100% at 50% 100%,
    color-mix(in oklab,var(--accent) 14%,transparent),transparent 72%)}
.note{height:30px;padding:0 12px;display:inline-flex;align-items:center;gap:8px;margin-bottom:22px;
  border:1px solid var(--line);border-radius:99px;font:400 13px var(--font-text);color:var(--ink-2)}
h1{font:500 60px/1.06 var(--font-display);letter-spacing:-.025em;max-width:800px;text-wrap:balance}
.sub{margin-top:18px;max-width:560px;font:400 19px/1.42 var(--font-text);color:var(--ink-2);text-wrap:balance}
.cta{display:flex;gap:8px;margin-top:26px}
.btn{height:38px;padding:0 15px;border-radius:7px;display:inline-flex;align-items:center;
  font:500 14px var(--font-text);box-shadow:inset 0 0 0 1px var(--line);color:var(--ink)}
.btn.p{background:var(--ink);color:var(--bg);box-shadow:none}

/* the frame: a 1px ring separates, the shadow only lifts */
.win{width:min(1120px,calc(100% - 48px));height:640px;margin-top:52px;overflow:hidden;
  border-radius:12px 12px 0 0;background:var(--bg);text-align:left;
  box-shadow:0 0 0 1px var(--line),0 1px 2px rgb(0 0 0/.05),0 24px 64px -12px rgb(20 24 40/.16);
  display:grid;grid-template-columns:212px 1fr;font:400 13px/1.4 var(--font-text)}
.win aside{background:var(--ink);color:color-mix(in oklab,var(--bg) 62%,transparent)} /* the mass */
td{height:38px;padding:0 10px;border-bottom:1px solid var(--line);white-space:nowrap;
  font-variant-numeric:tabular-nums}

/* one object breaks the frame, and this is what makes it read as software in use */
.pop{position:absolute;right:calc(50% - 616px);top:548px;width:296px;padding:12px;text-align:left;
  background:var(--bg);border-radius:10px;font:400 12.5px/1.4 var(--font-text);
  box-shadow:0 0 0 1px var(--line),0 12px 32px -6px rgb(20 24 40/.22)}
```

Every row needs at least three kinds of thing: mono identifier, tiny coloured glyph, a progress bar or sparkline, a status with a dot. This is where richness comes from. Our first build had plain text columns and looked like a spreadsheet in a box. The dark sidebar is doing structural work too: it is the heavy thing low on the screen.

<!-- v:hero.centered-with-product/left-headline-cropped-window -->
### `left-headline-cropped-window` · 5 sites · quality 5

- **Feels:** Editorial precision, serious tool for people who care.
- **Use when:** Product-led brands with a strong interface, and you want to avoid the centred default.
- **Not when:** The headline is one short word, which looks lost on the left.
- **Recipe:** One gutter of 60 to 96px for everything. Two-line 44 to 64px headline from y 200 to 275, 16 to 17px grey sub, and a small link right-aligned on the sub's baseline, which is the detail that makes the row feel engineered. Window 1250 to 1320px from about y 500, cut by the fold, fading into the page at its base. Keep the window close to monochrome and let one thing carry hue.
- **Seen on:** Linear, Devin Desktop, Loops, Obsidian, VS Code.
- **Suits:** light-precision, dark-precision, warm-neutral. SaaS, AI, devtool.

```css
.hero{position:relative;height:836px;overflow:hidden;padding:172px 60px 0;isolation:isolate}
.hero::after{content:"";position:absolute;inset:auto 0 0;height:160px;z-index:3;pointer-events:none;
  background:linear-gradient(transparent,var(--bg))}     /* window dissolves, no hard stop */
h1{font:500 64px/1 var(--font-display);letter-spacing:-.03em;max-width:1000px}
.row{display:flex;justify-content:space-between;align-items:baseline;margin-top:28px;
  font:400 16px var(--font-text);color:var(--ink-2)}
.row a{font-size:14px;color:var(--ink)}
.win{height:520px;margin-top:52px;border-radius:12px 12px 0 0;background:var(--surface);
  box-shadow:0 0 0 1px var(--line),inset 0 1px 0 rgb(255 255 255/.07);
  display:grid;grid-template-columns:220px 1fr 300px;overflow:hidden;font:400 13px var(--font-text)}
.span{height:9px;border-radius:2px;background:color-mix(in oklab,var(--ink) 24%,transparent)}
.span.hot{background:var(--accent)}                    /* only the thing the headline is about */
```

Our first version gave each trace span a colour and looked like a Gantt chart from a dashboard kit. Turning every span to 16 to 34% white and leaving one accent bar made it read like the reference immediately. The top light of 7% white on the window's upper edge matters too: it is how dark surfaces separate on dark.

<!-- v:hero.centered-with-product/window-on-image-mat -->
### `window-on-image-mat` · 6 sites · quality 5

- **Feels:** Warm, human, product in the world.
- **Use when:** Your interface is clean but plain, because the mat supplies colour and scale, and it is good for softening a B2B product.
- **Not when:** The image competes with the interface or looks like stock.
- **Recipe:** Copy stack, then a 1200 to 1340px mat at radius 12 to 28, with an app window inside it, 40 to 64px of mat showing around the window, all cut by the fold. Mats seen: a dithered wallpaper under a faux desktop menu bar, a lifestyle photo band under a full-bleed rule, a motion-blurred landscape, a colour ribbon behind a pale browser frame, and a pastel gradient panel breaking up into a black page on GitHub Actions.
- **Seen on:** Cal.com, Customer.io, Stripe Billing, Zapier, Readwise, GH actions.
- **Suits:** light-precision, warm-neutral, gradient-light. SaaS, finance, devtool.

<!-- v:hero.centered-with-product/video-tile-under-stack -->
### `video-tile-under-stack` · 6 sites · quality 4

- **Feels:** There is a story worth watching.
- **Use when:** The product is motion, or a launch film exists.
- **Not when:** The film is talking heads with a title card. Then the poster has nothing to say.
- **Recipe:** Stack, then a tile 576 to 1280px wide, radius 20 to 32, starting near y 530, cut by the fold, with a visible 46px or larger play disc. The poster is the brightest thing on the screen. CleanShot pairs a 688px tile with a 480px quote card at 24px gap, which adds a second object cheaply.
- **Seen on:** CleanShot X, Sourcegraph, Bauhaus Clock, GoCardless, Loom, Canva.
- **Suits:** light-precision, bold-colour, gradient-light. SaaS, devtool, finance.

<!-- v:hero.centered-with-product/phone-rising-from-fold -->
### `phone-rising-from-fold` · 10 sites · quality 4

- **Feels:** Consumer, personal, lit like a keynote.
- **Use when:** The product lives on a phone.
- **Not when:** You would need a bright white screen on a dark page, since it steals the first read from the headline.
- **Recipe:** Short stack, 84px light headline or 64px with three proof chips, 44 to 52px pill. Then one 330 to 380px phone with only its top 170 to 320px visible. Glow as a horizon: a very wide flat ellipse, centred 430px below the fold, not a halo around the phone. Weekstack adds notification chips either side, with the rear ones at 40% for depth. Dim the screen.
- **Seen on:** Affirm, Copilot, Weekstack, 360Rides, Bitnomi, Sword Health, Cash App.
- **Suits:** dark-precision, gradient-light, warm-neutral. Finance, education, SaaS, health.

```css
.hero{position:relative;height:836px;overflow:hidden;isolation:isolate;
  display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:60px}
.hero>*{flex:none}
/* a horizon, not a halo: 2100px wide, centred well below the fold */
.hero::before{content:"";position:absolute;left:50%;bottom:-430px;width:2100px;height:640px;
  transform:translateX(-50%);border-radius:50%;z-index:-1;opacity:.75;
  background:radial-gradient(closest-side,
    color-mix(in oklab,var(--accent) 70%,#fff),
    color-mix(in oklab,var(--accent) 45%,var(--bg)) 42%,transparent)}
h1{font:400 84px/1 var(--font-display);letter-spacing:-.04em}
.phone{width:330px;height:680px;margin-top:92px;padding:9px;border-radius:52px;background:#050507;
  box-shadow:0 0 0 1px rgb(255 255 255/.16),
    0 -24px 90px -16px color-mix(in oklab,var(--accent) 55%,transparent)}
.screen{height:100%;border-radius:44px;overflow:hidden;padding:44px 18px 0;text-align:left;
  background:linear-gradient(color-mix(in oklab,var(--surface) 88%,#fff),var(--surface) 58%)}
```

Our first attempt showed most of a bright white phone directly under the CTA with an orange halo around it. It looked like a template mockup. Three changes made it real: push it down until only the top third shows, darken the screen, and turn the halo into a horizon.

<!-- v:hero.centered-with-product/diagram-instead-of-screenshot -->
### `diagram-instead-of-screenshot` · 3 sites · quality 5

- **Feels:** Engineering, serious infrastructure, nothing to hide.
- **Use when:** APIs and infrastructure with no interface worth showing. This is the honest alternative to a fake dashboard.
- **Not when:** The diagram is generic boxes labelled Input and Output.
- **Recipe:** 70px light centred headline, 18px grey two-line sub, 38px small-radius CTA pair. Below, a 75px dark logo tile, 1px elbow connectors, 6 to 8 small mono caps tags naming real systems, a few 2.5px accent dots on the lines. Fade lines out with a mask at 25% and 75% of page width. A faint 40px grid fades radially behind. Cloudflare inverts it, schematic above headline, with ghost nodes bleeding under the nav and a three-column fact row at the fold.
- **Seen on:** Modern Treasury, Cloudflare Workers, Hellgate.
- **Suits:** light-precision, dark-precision. Finance, devtool.

```css
.hero::before{content:"";position:absolute;inset:0;z-index:-1;opacity:.7;
  background-image:linear-gradient(var(--line) 1px,transparent 1px),
                   linear-gradient(90deg,var(--line) 1px,transparent 1px);
  background-size:40px 40px;
  mask-image:radial-gradient(70% 60% at 50% 72%,#000,transparent)}
.diagram{position:absolute;inset:auto 0 0;height:340px}
.diagram svg{position:absolute;inset:0;width:100%;height:100%;
  mask-image:linear-gradient(90deg,transparent 4%,#000 24%,#000 76%,transparent 96%)}
.diagram path{fill:none;stroke:var(--ink-3);stroke-width:1;opacity:.55}
.core{position:absolute;left:50%;top:128px;width:76px;height:76px;margin-left:-38px;
  border-radius:6px;background:var(--ink);box-shadow:0 8px 24px -6px rgb(0 0 0/.3)}
.tag{position:absolute;transform:translate(-50%,-50%);padding:5px 9px;border-radius:2px;
  font:500 12px var(--font-mono,ui-monospace,monospace);letter-spacing:.04em;white-space:nowrap;
  color:color-mix(in oklab,var(--accent) 70%,var(--ink));
  background:color-mix(in oklab,var(--accent) 12%,var(--bg))}
```

Draw elbows with plain `H` and `V` path commands, and sit every tag exactly on a line end. A small floating status card with one real table name and its lag keeps the diagram from feeling abstract. Add one.

<!-- v:hero.centered-with-product/cards-instead-of-window -->
### `cards-instead-of-window` · 4 sites · quality 5

- **Feels:** Thoughtful, product-specific, nothing like a template.
- **Use when:** Your product's real unit is not a window: a lesson, a sign-in form, a course, an entry point.
- **Not when:** The cards are feature summaries, which turns this into the three-card row.
- **Recipe:** Brilliant fans seven 170 by 220 white cards, radius about 28, skewed in perspective, stepping up from y 600 to y 520 at 160px pitch, each holding one true problem diagram, fading into the page at the base with no shadow. AuthKit shows a 400px sign-in card in focus over two ghosts tilted about 2 degrees at 50% opacity. Headspace and Primer offer two wide entry cards, so the visitor self-sorts.
- **Seen on:** Brilliant, AuthKit, Headspace, Primer.
- **Suits:** light-precision, warm-neutral, illustrated. Devtool, education, health.

<!-- v:hero.centered-with-product/live-object-above-headline -->
### `live-object-above-headline` · 3 sites · quality 5

- **Feels:** Crafted, a brand with one special object.
- **Use when:** You have a mark or small instrument that can carry detail or move.
- **Not when:** It would just be your logo enlarged with nothing happening in it.
- **Recipe:** Object leads the stack. LiveKit's is a 154px tile, radius 12, 1px border with a travelling highlight, holding an 11 by 11 dot matrix that pulses like a voice meter, with a fainter dot field fading outward. Factory uses an 86px outlined rosette over a mono subline and a copyable install bar. Notion Calendar uses a 100px app icon with tinted glyph tiles scattered around it, which the analyst's spec missed and which supply most of the page's colour.
- **Seen on:** LiveKit, Factory, Notion Calendar.
- **Suits:** light-precision, dark-precision. AI, SaaS, devtool.

<!-- v:hero.centered-with-product/headline-with-inline-objects -->
### `headline-with-inline-objects` · 4 sites · quality 4

Found while checking frames, not in the analysts' rows, and worth having.

- **Feels:** Playful precision. The headline is already the product.
- **Use when:** The product's atoms are small and charming: a time slot, a chip, a selection box.
- **Not when:** The objects are decorative emoji-like stickers.
- **Recipe:** Two-line 72 to 80px centred headline with real objects set inline at x-height, 56 to 64px tall, radius 12 to 16: a photo chip, a clock with a city code, a calendar slot. Or a selection rectangle round one word. One or two, never more, and they must keep the line's rhythm.
- **Seen on:** Cal.com, Spline, Strapi, Framify.
- **Suits:** light-precision, dark-precision. SaaS, devtool, ecommerce.

<!-- v:hero.centered-with-product/wall-into-panels -->
### `wall-into-panels` · 2 sites · quality 4

- **Feels:** Heavyweight, enterprise, proof first.
- **Use when:** You have customers worth naming and a case to tell.
- **Not when:** The logos are unknown or invented.
- **Recipe:** Centred H1 and CTA, four-row logo wall at about 40% white, and panels for one active customer rising over it: stats, a phone map, a job list, a before-and-after metric strip. LaunchDarkly uses a staggered wall of dark metric tiles entering from the fold.
- **Seen on:** Buildkite, LaunchDarkly.
- **Suits:** light-precision, bold-colour. Devtool.

<!-- v:hero.centered-with-product/poster-over-product -->
### `poster-over-product` · 4 sites · quality 4

- **Feels:** A launch. Keynote stage.
- **Use when:** One product, one moment, and an image that glows.
- **Not when:** There is no hero product shot.
- **Recipe:** Solid tile about 690px tall directly under a slim nav. Tight centred stack beginning 60px down: 56/60 name, 28px subtitle, 19px grey date, 16px gap, button pair. The product sits at the tile's base, cropped by it, and its screen is the only light source. Kinfolk's version is a 313 by 405 cover centred on white under a caps title.
- **Seen on:** Apple, Kinfolk, Eboca, Dragon Spirit.
- **Suits:** photo-led, warm-neutral, bold-colour. Local business, editorial, brand.

<!-- v:hero.centered-with-product/scene-around-copy -->
### `scene-around-copy` · 3 sites · quality 4

- **Feels:** A small world, more personality than a window.
- **Use when:** You have an illustrator or strong render, and a protected empty middle for the copy.
- **Not when:** The art is stock, or would crowd the headline.
- **Recipe:** Copy centred in space the scene leaves open. Berries draws a thin-line room bleeding off both edges on a pale floor band with one 1px horizon. Comet crops spheres off the top and left and threads a browser and phone with orbit lines. Lindy flanks copy with mirrored diagonals of 44px tool tiles, fading outward.
- **Seen on:** Comet, Berries, Lindy.
- **Suits:** warm-neutral, illustrated. AI, health.

<!-- v:hero.centered-with-product/work-strip-under-stack -->
### `work-strip-under-stack` · 4 sites · quality 3

- **Feels:** Studio with a portfolio to show.
- **Use when:** Your work is the product, and it is varied and real.
- **Not when:** You have fewer than five strong pieces, because the strip exposes it.
- **Recipe:** Stack with a 44px pill and availability dot, about 30px grey logo row, then 460px tiles at radius 16 running off both edges, cut by the fold. Hawl warps the outer tiles behind a black curved mask for a stronger version.
- **Seen on:** Hawl Design, motusmade, Framify, designbyillia.
- **Suits:** light-precision, warm-neutral, dark-precision. Agency, ecommerce.

### What cheapens it

- **The window ends before the crop.** White space inside the bottom of the frame kills the illusion. Eight rows minimum.
- **Plain text rows.** No glyphs, no colour, no status. It reads as a table in a box.
- **Scaled screenshots.** A 1600px app shrunk to 1100px gives 9px text. Build at real size and crop instead.
- **A shadow doing the separating.** A big soft shadow with no ring looks like a 2019 mockup. Use a 1px ring and let the shadow add only a little lift.
- **Rainbow status colours on dark.** See cause 7.
- **All rounded corners on a cropped window.** The fold cuts it, so only the top corners are round.
- **A halo glow around the object.** Light comes from a horizon or from behind, never as a ring. This was our first phone.
- **Flex shrink crushing the CTA.** Fixed-height hero, tall window, squashed button: this happened to us. `flex:none`.
- **Three lines of sub.** If the sub wraps past two lines, the window slides below the fold and the hero loses its reason to exist.
- **Fake logos in the proof row.** Use real customers or none. A row of invented names presented as customers is worse than nothing.

---

## Split copy and media

`hero.split-copy-media`, 85 sites. Copy in one column, the real thing in the other. It reads faster than a centred stack, because both are visible at once with no scrolling, and it is the best way to show a working surface at full height.

**What it must do.** Give each half a clear job and connect them, so they read as one composition and not as two boxes side by side.

**Great versus cheap.** The cheap split is a 50/50 row with text left and a rounded image right, vertically centred, both inside the container. The great one breaks something. The media leaves the container and stops 16px from the viewport edge, or bleeds off it. It overlaps a colour band. It starts higher than the headline. Stripe's forms sit in front of the ribbon. Inngest's code begins above the headline so both share one surface. Bun aligns its panel to the headline's top. One deliberate misalignment with the grid is what turns two columns into a composition.

**Measured.** H1 36 to 60px, median 48, weight 500, tracking 0 to -0.02em, two to three lines, which is smaller than any other element because the column is narrow. H1 width 404 to 608px. Sub 16 to 20px, 404 to 576px wide, 16 to 32px below. H1 top y 128 to 262. Left gutter on the composed examples 80 to 120px, and the media takes 55 to 60% of the width.

<!-- v:hero.split-copy-media/live-ui-overlap -->
### `live-ui-overlap` · 11 sites · quality 5

- **Feels:** Polished, trustworthy, the product is working right now.
- **Use when:** You have a form, a checkout, a card or anything else that looks good at real size.
- **Not when:** The UI needs a full-width table to make sense.
- **Recipe:** Left 450 to 520px: small grey chip, 56px headline over 3 lines at about 68px pitch, 18/28 body, pill plus text link. Right: real UI at 12 to 13px, about 700 by 500, breaking the container to 16px from the viewport edge and running into a skewed colour band. Atlas stacks a 320 by 412 card with a 270 by 340 card over its corner. Climate overlaps a receipt, a phone and a 440 by 100 banner that crosses both. Colour runs under and past the UI, never around it.
- **Seen on:** Stripe Payments, Atlas, Connect, Climate, Birdie, Hotjar, Substack, UploadThing.
- **Suits:** gradient-light, light-precision, bold-colour. SaaS, finance, devtool, editorial.

```css
.hero{position:relative;height:792px;overflow:hidden;isolation:isolate}
/* the band runs under the UI and past the viewport */
.band{position:absolute;inset:auto -5% 0;height:520px;z-index:-1;
  clip-path:polygon(0 86%,100% 26%,100% 68%,0 100%);
  background:linear-gradient(95deg,oklch(from var(--accent) calc(l + .14) c calc(h + 45)),
    var(--accent) 34%,oklch(from var(--accent) l c calc(h - 80)) 100%)}  /* hues rotate from the accent */
.wrap{display:grid;grid-template-columns:520px 1fr;gap:60px;padding:56px 0 0 108px}
h1{font:500 56px/1.14 var(--font-display);letter-spacing:-.025em;max-width:500px;text-wrap:balance}
.sub{margin-top:22px;max-width:450px;font:400 18px/1.55 var(--font-text);color:var(--ink-2)}
/* breaks the container, stops 16px short of the viewport, taller than the fold */
.panel{width:720px;height:640px;margin-right:16px;background:var(--bg);border-radius:8px;
  display:grid;grid-template:52px 1fr/1fr 262px;font:400 12.5px/1.45 var(--font-text);
  box-shadow:0 0 0 1px var(--line),0 30px 60px -20px rgb(11 34 64/.25),0 18px 36px -18px rgb(11 34 64/.2)}
.panel header{grid-column:1/-1;border-bottom:1px solid var(--line)}
```

Give the panel a fixed `grid-template` row. With only `height` set our header row stretched and left a blank gap at the top of the form. Fill it completely: order summary, card logos, delivery options, a real address. A second row of small page navigation above the hero, as Stripe does on product pages, adds a lot of believability for little cost.

<!-- v:hero.split-copy-media/edge-bleeding-subject -->
### `edge-bleeding-subject` · 11 sites · quality 4

- **Feels:** Human, warm, editorial.
- **Use when:** You have a strong portrait, cut-out or tall photo, for health, hospitality, services.
- **Not when:** The person is stock. Everyone can tell, and it damages trust more than having no image would.
- **Recipe:** Copy at 60 to 120px gutter, 48 to 64px headline. Subject fills the right half and bleeds off top, right and bottom with no frame, no card, no radius except an optional 32px at the inner bottom corner. One Medical runs one 3px arc behind a tightly cut portrait, tying it to a coloured word in the headline. Sonder's last headline line turns copper and leads to a tall sunrise photo.
- **Seen on:** Sonder, One Medical, Definitiv Digital, Ripple Health, Sam Hoult Beauty, Continue.
- **Suits:** warm-neutral, bold-colour, photo-led. Health, hospitality, SaaS, local business.

<!-- v:hero.split-copy-media/half-and-half -->
### `half-and-half` · 10 sites · quality 5

- **Feels:** Poster-like, cultured, certain.
- **Use when:** One strong image with one strong colour in it, for culture, food, retail campaigns.
- **Not when:** The image is low-contrast or beige. See below.
- **Recipe:** Two exact 50% panels, full height under a thin nav, no gap, no radius. Left flat colour sampled from the image, stack centred in it: 15px label, 56 to 72px title, one line, one 34px solid block button in the panel's own dark ink. Talkspace, Olipop and Sakara use the same frame with a portrait or campaign photo. Strava goes three across, photo, form, photo.
- **Seen on:** Gagosian, Sakara, Heart & Soil, GoPro, Talkspace, Strava, Olipop.
- **Suits:** photo-led, warm-neutral, bold-colour. Culture, ecommerce, food, health.

```css
.hero{height:100vh;min-height:760px;padding-top:44px;display:grid;grid-template-columns:1fr 1fr}
.half{background:var(--accent);color:var(--bg);position:relative;text-align:center;padding:0 72px;
  display:flex;flex-direction:column;align-items:center;justify-content:center}
.half h1{margin:10px 0 14px;font:400 72px/1 var(--font-display);letter-spacing:-.025em}
.half a{height:34px;padding:0 14px;margin-top:16px;display:inline-flex;align-items:center;
  background:var(--bg);color:var(--accent);font:500 14px var(--font-text)}
.pic{background:center/cover}
```

Sample the strongest colour in the image, not the average. We first took the mean of a warm wall photograph, and the flat half became the same beige as the picture, so the whole screen went to mud. Taking the deepest saturated tone gave the two halves real contrast. Check the chosen colour against the ink before committing.

<!-- v:hero.split-copy-media/diagram-or-illustration-right -->
### `diagram-or-illustration-right` · 8 sites · quality 4

- **Feels:** Designed, explanatory, no stock anywhere.
- **Use when:** You have an abstract product and can make a crafted system picture.
- **Not when:** The art is a generic isometric server rack.
- **Recipe:** Copy left, picture right on a flat ground, bleeding off an edge. Vite uses an exploded isometric stack in fine lines. Expo goes three-column: 48/52.8 headline left, a 178px white squircle ringed by a 540px burst of hairline rays and grey dots in the middle, a small paragraph right, and that centred object is what makes it memorable. Maximize uses grainy stepped blocks.
- **Seen on:** Expo, Maximize, Revena, lemon.markets, The Warren, web.dev.
- **Suits:** light-precision, bold-colour, illustrated. Agency, devtool, SaaS, finance.

<!-- v:hero.split-copy-media/plain-plate -->
### `plain-plate` · 8 sites · quality 4

- **Feels:** Assured, like a catalogue page. Nothing to prove.
- **Use when:** Brands whose restraint is the point, galleries, furniture, small makers.
- **Not when:** You need a conversion in the first screen.
- **Recipe:** No background, no animation, no radius. A 330 to 500px copy column beside a 380 to 676px photo, top-aligned, with deliberately uneven margins. Text 32 to 50px, 17px body, one link. Next section about 90px under.
- **Seen on:** New Exhibitions, Vitsoe, Poeza, Fly.io Blog, Spring/Summer.
- **Suits:** warm-neutral, type-led, bold-colour. Culture, agency, fashion, editorial.

<!-- v:hero.split-copy-media/copy-plus-utility-rail -->
### `copy-plus-utility-rail` · 6 sites · quality 4

- **Feels:** A working site, not a brochure.
- **Use when:** You publish often, or visitors come for different reasons.
- **Not when:** The rail would be empty or stale.
- **Recipe:** Copy about 730px, then a narrow rail of useful things where the image would be: five dated news rows with 12px dates and hairlines at about 120px pitch, three what's-new links, a 400 by 350 latest-item card, four role links, or a setup checklist. It replaces both the hero image and the announcement bar.
- **Seen on:** Liquid AI, Khan Academy, Kiro, Accel, PostHog.
- **Suits:** light-precision, illustrated, bold-colour. AI, education, food, finance.

<!-- v:hero.split-copy-media/tilted-device -->
### `tilted-device` · 5 sites · quality 3

- **Feels:** Consumer app store energy.
- **Use when:** Fintech or a consumer app on a bold colour field.
- **Not when:** The register is precise or professional. Tilted phones date quickly.
- **Recipe:** Phone at real scale, tilted 10 to 20 degrees, a second object behind tilted the other way, long soft shadow. Better Stack fades a 10-degree tilted screen into the page and steps through product lines with dots.
- **Seen on:** Wealthfront, Fundrise, Lemon Squeezy, Better Stack, Signal.
- **Suits:** bold-colour, warm-neutral, dark-precision. Finance, devtool, SaaS, nonprofit.

<!-- v:hero.split-copy-media/product-still-right -->
### `product-still-right` · 5 sites · quality 4

- **Feels:** Considered goods, shot with care.
- **Use when:** You sell a physical product and have, or can build, a composed still.
- **Not when:** The product shot is a cut-out on white with a drop shadow.
- **Recipe:** One product, 400 to 600px, on a ground that matches its packaging. reMarkable uses a green surface crossed by a diagonal band of raking light with a flat-lay at right, which unifies everything, and tracked caps trust row at the fold. Copy sits left at 180px.
- **Seen on:** reMarkable, Counter Culture, Apétiti, Clevr Blends, PostHog Pricing.
- **Suits:** bold-colour, warm-neutral, expressive. Food, brand, SaaS, ecommerce.

<!-- v:hero.split-copy-media/video-panel -->
### `video-panel` · 4 sites · quality 4

- **Feels:** Research lab, big story, calm.
- **Use when:** A real film exists.
- **Not when:** It would be a talking head with a play button.
- **Recipe:** Rail vertically centred: 14px eyebrow, 48/56 headline, pill pair. Right 576 to 1024px panel, radius 20 to 42, with 32px round mute and pause bottom right. Otter sets four video tiles on a square lilac-peach panel with floating platform chips.
- **Seen on:** Meta AI, Otter, Synthesis, Twilio.
- **Suits:** light-precision, bold-colour, gradient-light. AI, education, SaaS, devtool.

<!-- v:hero.split-copy-media/code-or-proof-as-picture -->
### `code-or-proof-as-picture` · 4 sites · quality 5

- **Feels:** Numbers instead of adjectives. Respect for the reader.
- **Use when:** Developer tools and anything with a benchmark you can defend.
- **Not when:** The numbers are invented. They must be true and reproducible.
- **Recipe:** Bun: two columns near 515 and 557px between 1px rails. Left: NEW chip, H1 with one word in the accent, 18px sub, install block, OS toggle, text link. Right: panel with an ink border, four tabs, four labelled bars at 26px tall, exact values in mono, a method note. Inngest runs annotated code with no window frame, starting above the headline, on a grainy dark ground. TypeScript shows a real error row inside a live editor.
- **Seen on:** Inngest, Bun, TypeScript, Anthropic Docs.
- **Suits:** mono-technical, dark-precision, bold-colour. Devtool, AI.

```css
.rails{width:1140px;margin:0 auto;height:844px;border-inline:1px solid var(--line);
  display:flex;flex-direction:column}
.grid{display:grid;grid-template-columns:520px 1fr;gap:44px;padding:64px 40px 0}
h1{font:600 66px/1 var(--font-display);letter-spacing:-.045em}
h1 em{font-style:normal;color:var(--accent)}
/* ink rule, not an alpha hairline: this register reads as print */
.panel{box-shadow:0 0 0 1px var(--ink);align-self:start;margin-top:34px}
.tabs{display:grid;grid-template-columns:repeat(4,1fr);font:500 13px var(--font-text)}
.tabs span{height:40px;display:grid;place-items:center;
  border-right:1px solid var(--ink);border-bottom:1px solid var(--ink)}
.tabs .on{background:var(--ink);color:var(--bg)}
.bar{display:grid;grid-template-columns:96px 1fr 52px;gap:10px;align-items:center;height:48px}
.track{height:26px;background:var(--surface);position:relative}
.track i{position:absolute;inset:0 auto 0 0;background:var(--ink)}
.track.us i{background:var(--accent)}
.used{margin-top:auto;border-top:1px solid var(--line);padding:18px 40px 22px}
```

Our first build used 8% alpha hairlines around the panel and it lost all presence next to the reference. Mono-technical heroes want full-ink 1px rules. The method note is the most important line in the hero: machine, dataset, run count, and a link to reproduce. It is what makes the bars believable.

<!-- v:hero.split-copy-media/headline-left-actions-right -->
### `headline-left-actions-right` · 3 sites · quality 4

- **Feels:** Dense and quick to reach the point.
- **Use when:** You want product proof very high on the page.
- **Not when:** The headline is long.
- **Recipe:** Headline left, sub and CTA right on one 1080 to 1316px measure, right block bottom-aligned to the headline's last line, product directly under, 28 to 64px down. Head takes about 300px.
- **Seen on:** Tana, Chromatic, Supabase.
- **Suits:** light-precision, dark-precision. Devtool, SaaS.

<!-- v:hero.split-copy-media/cell-frame -->
### `cell-frame` · 3 sites · quality 4

- **Feels:** Structural, an engineer's page.
- **Use when:** Devtools with dark interfaces, or design systems.
- **Not when:** Your cells would hold marketing fluff.
- **Recipe:** A 1240px frame of 1px lines, radius 16, no fills. Vite: two 720px cells, about 708px tall, copy at 40px padding, npm tabs anchored to the cell's base, isometric diagram centred right. Strapi fills the right with a statement cell over a 3 by 2 grid of 208 by 175 logo cells, so logos become structure. Material 3 uses two 664 by 544 tinted panels at 8px gap.
- **Seen on:** Vite, Strapi, Material 3.
- **Suits:** dark-precision, light-precision, soft-pastel. Devtool.

<!-- v:hero.split-copy-media/app-bleeds-right -->
### `app-bleeds-right` · 3 sites · quality 4

- **Feels:** A serious tool that keeps going.
- **Use when:** You have wide interfaces and code editors.
- **Not when:** The left edge of the UI is its weakest part.
- **Recipe:** Left 328 to 640px copy stack with a command box. Editor starts about x 750 and runs off the viewport, 1px border, radius 8 to 16. Payload overlaps an admin window on the editor. Convex sets its console across a stripe bend, tying both halves together.
- **Seen on:** Payload, Nuxt, Convex.
- **Suits:** dark-precision, bold-colour. Devtool.

<!-- v:hero.split-copy-media/story-mosaic -->
### `story-mosaic` · 2 sites · quality 4

- **Feels:** Lots of real customers, moving.
- **Use when:** Customer pages, or any catalogue of real stories.
- **Not when:** You have fewer than five stories with good images.
- **Recipe:** Left 56/68 headline and body. Right a staggered three-column mosaic of tall cards, about 8px radius, offset 60 to 100px per column, bleeding off right and bottom. Each card is a different real image, logo and link. Variety across cards is the content.
- **Seen on:** Stripe Customers, MasterClass.
- **Suits:** light-precision, photo-led. Finance, education.

<!-- v:hero.split-copy-media/product-on-plate -->
### `product-on-plate` · 2 sites · quality 4

- **Feels:** Considered, material, a product on a table.
- **Use when:** Dark SaaS with one great card view.
- **Not when:** The plate's texture would be the most interesting thing on screen.
- **Recipe:** Copy on top. Below, a textured or gradient plate at about 72% of the container holding a floating product card, beside a 308px rail with a 30px two-tone statement and a plain 16px feature list. Plate crosses the fold. Struck uses a 1/3 plus 2/3 split with an orange-to-peach plate and a stats row docked directly below.
- **Seen on:** Polar, Struck.
- **Suits:** dark-precision, warm-neutral. SaaS, AI.

### What cheapens it

- **Both columns inside the container, both vertically centred.** The result is a form row, not a hero. Break the container on one side.
- **Equal visual weight.** Text left and image right at the same mass gives two first reads. Let one win.
- **A rounded image in a box.** Radius, border and shadow on a stock photo is the signature of a template.
- **The panel not filled.** Blank space inside a form, as in our first attempt, gives it away at once.
- **Mean-colour sampling.** It produces mud. See `half-and-half`.
- **Alpha hairlines in a mono-technical panel.** Too quiet. See `code-or-proof-as-picture`.
- **A mid-gap that is too wide.** More than about 80px and the halves stop relating. The column gap in strong examples is 40 to 60px.
- **Tilted devices in a precise register.** They read as a 2018 app landing page.

---

## Full-bleed media

`hero.full-bleed-media`, 159 sites. One image owns the screen and the words find a place inside it. This is the default for anything with real photography: food, stays, health, fashion, architecture, culture, and local businesses with a good picture of their own room.

**What it must do.** Let a real image make the first read, then put type where the image has room for it. The picture decides the layout. If you have to fight the image to place the words, the image is wrong or the variant is wrong.

**Great versus cheap.** Great ones were shot or chosen for type: a dark floor, an open sky, a calm left third. The words land in the calm, usually with little or no veil, and the subject stays untouched. Cheap ones take any photo, lay 40% black over all of it, and centre white text on top. That is the single most generated hero there is. It dims the only good thing on the screen, and the highlights still fight the text.

The second difference is what else lives on the picture. A headline alone on a photograph looks like a template, however good the photograph. Function Health sets three proof columns on the CTA's baseline. Soundsensing floats real status cards beside the sensor. TR Studio spreads the letters of its name into the viewport's corners. La Table de Joakim hangs two small captions either side of its title. One small true thing, placed with care, is what turns a picture with a caption into a composed screen.

**Measured.** H1 40 to 72px, median 56, weight 400 to 600, median 440, tracking close to zero, line-height 1.0. The headline sits far lower than on product heroes: top y 188 to 472, median 331. Sub 16 to 18px, 435 to 750px wide. Of 51 measured sites, 41 are left-aligned and 10 are centred. Only 33 of the 210 image and film rows record any overlay at all, so the veil is the exception. Bottom-third structure is the highest of any element, at a median of 82%, because the picture fills it for free.

**Keeping type legible.** Choose from the top of this list, and go lower only when the picture forces you to.

| Method | How | Use when |
|---|---|---|
| Calm zone | Nothing. Crop until the words land on sky, floor or shadow | Always try first |
| Dark floor | Choose a photo that darkens at its base | Bottom-anchored lockups |
| Local veil | Gradient on the lowest 45 to 56% only, plus 20% at the top for the nav | The lower third is busy |
| One-side wash | A solid colour fading to clear by about 55% of the width | The image has no calm side |
| Flat overlay | 20 to 35% black across everything | Mid-tone pictures with no central subject, such as interiors and landscapes |
| Move the words | Put the copy on the page, under or beside the plate | The picture must stay untouched |

Above about 40% a flat overlay turns a photograph into a grey rectangle. If you need more than that, the picture is the wrong one. Use `object-position` and a taller image to move the calm zone under the words before you reach for any veil. In our inset demo, enlarging the image to 172% height and pinning it to the top moved the horizon into the lower fifth, so every word landed on sky with no veil.

<!-- v:hero.full-bleed-media/bottom-left-lockup -->
### `bottom-left-lockup` · 25 sites · quality 5

- **Feels:** Cinematic, picture first, words second.
- **Use when:** The image is strong and its lower third is calm or dark. This is the safest good choice for photo-led brands.
- **Not when:** The subject's face or the product sits in that corner.
- **Recipe:** Image fills the viewport under an overlaid nav. Lockup anchored at 40 to 96px from the left and 44 to 75px from the bottom: an optional 30px tag, a 56 to 80px white headline at 1.0 leading, a 16 to 18px sub 520px wide, a 46 to 50px pill. Put something on the same bottom line at the right: three proof columns with 1px dividers (Function Health), a next-slide link, a project index, or a tiny pause control. Structure runs a strip of its latest work along the bottom edge. Almeida needs only one heavy word on a stage photo, with a pause button opposite.
- **Seen on:** Function Health, Structure, Prototype, Almeida, Sweetgreen, Ideogram.
- **Suits:** photo-led, warm-neutral, type-led. Culture, architecture, health, AI.

```css
.hero{position:relative;height:100vh;min-height:680px;display:flex;flex-direction:column;color:#fff}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 60%;z-index:-2}
/* two veils. One for the nav, one for the lockup. Neither reaches the middle of the picture */
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:
  linear-gradient(180deg,rgb(0 0 0/.42) 0,transparent 20%),
  linear-gradient(0deg,rgb(0 0 0/.72) 0,rgb(0 0 0/.42) 30%,transparent 56%)}
.foot{margin-top:auto;padding:0 56px 44px;display:grid;grid-template-columns:1fr auto;align-items:end;gap:64px}
h1{font:400 76px/1.02 var(--font-display);letter-spacing:-.02em;color:#fff;text-wrap:balance}
.sub{margin-top:14px;max-width:520px;font:400 18px/1.45 var(--font-text);color:rgb(255 255 255/.8)}
.stats{display:flex}
.stats div{min-width:150px;padding:0 24px;border-left:1px solid rgb(255 255 255/.22)}
.stats div:first-child{border:0}
.stats b{display:block;font:500 17px var(--font-text)}
.stats span{font-size:13px;color:rgb(255 255 255/.6)}
```

Our first veil stopped at 50% and at .62 strength, and the sub dissolved into the picture. The reference is darker and reaches higher than it looks. Always check the sub, not the headline: the headline is big enough to survive, and the 16px line is what fails.

<!-- v:hero.full-bleed-media/inset-rounded-panel -->
### `inset-rounded-panel` · 11 sites · quality 5

- **Feels:** Current, composed, a product brand with taste. The page colour acts as a mat.
- **Use when:** You want the photo-led feeling with the precision of a product site. It is the modern default for AI, health and hardware brands.
- **Not when:** The site is about raw scale or immersion. An inset says object, not world.
- **Recipe:** Panel inset 8 to 32px from the viewport, radius 16 to 32, reaching the fold. Decagon keeps its nav inside the panel, with a slim white announcement bar on the page above it, and a 56px round arrow straddling the base. Nuro stops the panel near y 690 and lets a large line of the next section begin at the fold. Scale keeps a white 88px header and insets the video on three sides. Copy sits 56 to 124px inside: 48 to 108px headline, 20px sub, capsule or pill.
- **Seen on:** Decagon, ECI, Nuro, Scale AI, Wildbran, Lyra.
- **Suits:** photo-led, soft-pastel, bold-colour. AI, food, SaaS, brand.

```css
body{padding:12px 12px 0;background:var(--bg)}
.panel{position:relative;height:calc(100vh - 82px);min-height:640px;border-radius:20px;isolation:isolate;color:#fff}
/* the image clips, the panel does not, so the arrow can straddle the base */
.clip{position:absolute;inset:0;border-radius:20px;overflow:hidden;z-index:-1}
.clip img{position:absolute;left:0;top:0;width:100%;height:172%;object-fit:cover;object-position:50% 0} /* horizon in the lower fifth */
.copy{padding:64px 124px}
h1{font:500 72px/1.04 var(--font-display);letter-spacing:-.03em;color:#fff;max-width:760px}
.down{position:absolute;left:50%;bottom:-28px;margin-left:-28px;width:56px;height:56px;border-radius:50%;
  background:var(--bg);display:grid;place-items:center}
```

Set the radius on an inner clipping layer, not on the panel, or `overflow:hidden` eats the straddling arrow. Our first crop left the horizon behind the headline and the type crossed two colours. Move the image, not the text.

<!-- v:hero.full-bleed-media/giant-type-over-image -->
### `giant-type-over-image` · 12 sites · quality 5

- **Feels:** A poster. The name is the event.
- **Use when:** Culture, film, fashion, and model launches with a short strong word or two.
- **Not when:** The headline must explain something, or it runs past about four words.
- **Recipe:** Set the size from the viewport at 15 to 20vw, line-height 0.8, tracking -0.05em, weight 400 to 500. Anchor to the base, letting letters touch or cross the margins. Two-line titles offset left and right. Everything else is tiny: a 12px uppercase nav and one 32px outlined action. Checked against the frame, A24's ticket button is not in the top right as the analyst noted. It hangs mid-right, just above the second line. Reformation lets a heavy wordmark clip 2px off the viewport edge. ROM's wordmark echoes banners already hanging in the photograph, which ties the type into the scene. Rivian uses a 200px model name with -5px tracking.
- **Seen on:** A24, Acne Studios, Royal Ontario Museum, Studio Dado, VanMoof, Vivien's Creative.
- **Suits:** photo-led, type-led, expressive. Culture, agency, ecommerce, fashion.

```css
.hero{position:relative;height:100vh;min-height:640px;overflow:hidden;color:#fff;display:flex;flex-direction:column}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-1}
/* the viewport sets the size, so the title touches both edges at any width */
h1{margin-top:auto;padding:0 .6vw 2.4vw;font:500 15.8vw/.8 var(--font-display);letter-spacing:-.055em;color:#fff}
h1 span{display:block}
h1 span+span{text-align:right}
.action{position:absolute;right:20px;top:37%;height:32px;padding:0 10px;font-size:13px;
  box-shadow:inset 0 0 0 1px rgb(255 255 255/.8);display:flex;align-items:center}
```

Do not add a veil. At this size the type survives on any picture, and the veil only flattens the image. Use a viewport unit, never a fixed pixel size, or the title stops touching the edges on other screens.

<!-- v:hero.full-bleed-media/card-docked-in-image -->
### `card-docked-in-image` · 13 sites · quality 5

- **Feels:** The picture is true, and here is the working proof.
- **Use when:** You have a reading, price, offer or agent line that belongs in the scene. This is the cheapest way to make a photo hero feel like a product.
- **Not when:** The card repeats the headline, or holds a generic stat you could not defend.
- **Recipe:** Copy at the left, bottom or centre. One small working card docked at the lower right, 40px from both edges, radius 8 to 20. Seen: a 318 by 190 frosted card streaming an agent's spoken line, a 416 by 128 offer with price strike and pill, a 285 by 165 live stat with a trend line, a donation widget, two 474 by 260 product cards. Soundsensing floats status cards in the middle, between copy and object. Sierra's card is so quiet that it almost sinks into the blanket, and that restraint is the point.
- **Seen on:** Soundsensing, Ritual, Sierra, charity: water, Ro, Noom.
- **Suits:** photo-led, dark-precision, bold-colour. Health, agency, finance, SaaS.

```css
.foot{margin-top:auto;padding:0 40px 40px;display:flex;justify-content:space-between;align-items:flex-end;gap:48px}
h1{font:400 68px/1.04 var(--font-display);letter-spacing:-.02em;color:#fff;max-width:760px}
/* a working object: a real place, a real value, a real change over time */
.card{flex:none;width:340px;padding:14px 16px 12px;border-radius:14px;color:#fff;font-size:13px;
  background:rgb(0 0 0/.42);box-shadow:inset 0 0 0 1px rgb(255 255 255/.14);
  -webkit-backdrop-filter:blur(22px) saturate(1.25);backdrop-filter:blur(22px) saturate(1.25)}
.val{margin-top:12px;font:500 40px/1 var(--font-text);letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.card svg{width:100%;height:42px;margin-top:10px}   /* one sparkline, 1.5px, no fill, no axis */
```

Use dark glass over a dark region. A white frosted card over a dark photo turns into a grey block, and it steals the first read from the picture.

<!-- v:hero.full-bleed-media/depth-layered-subject -->
### `depth-layered-subject` · 5 sites · quality 5

- **Feels:** Impossible at first glance. The screen has real depth.
- **Use when:** You have a clean cut-out of the subject and a reason for the overlap.
- **Not when:** The cut-out edge is soft or hair-heavy. A bad mask ruins it.
- **Recipe:** Stack three layers: photo, type or UI, then a cut-out of the subject on top. Revolut raises a figure through a 400px, 3px translucent phone outline, radius about 40, with a live balance sitting on her chest. Martin Development sets a 360px word behind the roof and leaves but over the sky. Warren & Mahoney inverts the idea, with aerial water showing through the strokes of one letterform on a flat brand field.
- **Seen on:** Revolut, Martin Development, Warren & Mahoney, Vayne, Pier88.
- **Suits:** photo-led, type-led, bold-colour. Architecture, finance, agency, food.

<!-- v:hero.full-bleed-media/designed-bottom-edge -->
### `designed-bottom-edge` · 3 sites · quality 5

- **Feels:** Considered right to the last pixel.
- **Use when:** The image should not end in a rectangle, because the next section matters.
- **Not when:** You lack a clean ground to fade into.
- **Recipe:** Give the image a composed end. Apple Vision Pro fades the figure into the page colour at the fold, so the portrait has no base, with the lockup low left and CTAs low right on one baseline. Joby clips the film to a 120px bottom radius on a saturated brand field, with a 12px caption in the strip below and a small promo tile top right. Kawara sits a cut-out building on paper with a grainy spotlight cone falling from the top of the page.
- **Seen on:** Apple Vision Pro, Joby, Kawara Museum.
- **Suits:** photo-led, warm-neutral. Brand, culture.

```css
.fade{-webkit-mask-image:linear-gradient(#000 70%,transparent);mask-image:linear-gradient(#000 70%,transparent)}
.brand{background:var(--accent);padding-bottom:64px}
.brand .film{border-radius:0 0 120px 120px;overflow:hidden}
```

<!-- v:hero.full-bleed-media/panel-diptych -->
### `panel-diptych` · 3 sites · quality 5

- **Feels:** A spread in a printed book.
- **Use when:** You have two images that talk to each other, or two destinations.
- **Not when:** The two pictures are merely similar.
- **Recipe:** Two 720px panels edge to edge with zero gutter, about 800px tall, one black and white and one colour or texture. Put a small white wordmark exactly on the seam. Leave a strip of paper at the base so the next headline shows. Oliver Dupuy instead runs a 480px central photo column with a title centred in each side third. Concrete uses two dimmed panels at 24px gutters as a city chooser, with one link per panel.
- **Seen on:** Nicole Heim Studio, Oliver Dupuy, Concrete.
- **Suits:** photo-led. Agency, architecture, local business.

<!-- v:hero.full-bleed-media/film-with-index -->
### `film-with-index` · 1 site · quality 5

- **Feels:** A magazine contents page shot as a film still.
- **Use when:** You publish, and readers want to choose.
- **Not when:** You have fewer than about six live items.
- **Recipe:** Edge-to-edge image about 810px tall. Bottom left: a caps title plus dek at 32px in white. Bottom right: a two-column index of 15px rows, the active row full white, the rest about 40% opacity, with a small ring timer beside it. The hero doubles as a table of contents.
- **Seen on:** Kinfolk.
- **Suits:** photo-led. Editorial.

<!-- v:hero.full-bleed-media/side-column-on-calm-side -->
### `side-column-on-calm-side` · 25 sites · quality 4

- **Feels:** Direct, commercial, clear about what it sells.
- **Use when:** The image has a subject on one side and quiet on the other, for hardware, health and retail.
- **Not when:** You have to darken half the image to create the calm. That is `colour-wash-from-one-side`, done badly.
- **Recipe:** Subject in the right 55%. Copy column at the left, vertically centred, at a 56 to 140px gutter: 48 to 68px headline, 16 to 18px sub, a pill or link. Framework colours part of its headline with the accent against a black macro. Betterment measures 68/68 at weight 500, three lines, 550px wide, with three check bullets in the accent. Stone Island drops the copy low left in small type and hangs its one link beside the figure, on the title's baseline.
- **Seen on:** Framework, Stone Island, Levels, Seed, Betterment, Fenriz Gym.
- **Suits:** photo-led, bold-colour, warm-neutral. Health, ecommerce, brand, food.

<!-- v:hero.full-bleed-media/centred-lockup -->
### `centred-lockup` · 26 sites · quality 4

- **Feels:** Hospitable, calm, a little ceremonial.
- **Use when:** Hospitality, food and interiors, where the image has no central subject: a pattern, a landscape, a room.
- **Not when:** A face or dish sits at the centre. The type lands on it.
- **Recipe:** A mid-tone image, a flat 20 to 35% overlay or none. Centred headline 40 to 85px, one line of 12 to 17px, a small CTA or text link. This is where generated heroes go wrong, so add an edge. TR Studio breaks its name into the corners at about 90px, with small rotated labels on the sides. La Table de Joakim hangs two small mono captions either side of a 53px title, with its logo top centre and links in the corners. Fred sets one italic word inside a two-line headline. Gagosian stacks four type sizes in a tight block. None of them is just a headline on a photo.
- **Seen on:** Fred, La Table de Joakim, TR Studio, Gagosian, Russell & Stellar, DJI.
- **Suits:** photo-led, warm-neutral, bold-colour. Ecommerce, food, hospitality, architecture.

```css
.hero{position:relative;height:100vh;min-height:680px;color:#fff;display:grid;place-items:center;text-align:center;isolation:isolate}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:rgb(0 0 0/.26)}
/* the name goes into the corners, so the frame has an edge before the eye reaches the middle */
.corner{position:absolute;font:400 92px/1 var(--font-display)}
.corner.tl{left:28px;top:18px}.corner.tr{right:28px;top:18px}
.corner.br{right:28px;bottom:18px}.corner.bl{left:28px;bottom:18px}
.side{position:absolute;right:30px;top:50%;font:400 12px var(--font-mono,monospace);
  letter-spacing:.08em;text-transform:uppercase;writing-mode:vertical-rl}
.mid{display:grid;grid-template-columns:230px 660px 230px;align-items:center;gap:36px}
h1{font:400 52px/1.06 var(--font-display);text-transform:uppercase;letter-spacing:.01em;color:#fff}
.note{font:400 12px/1.55 var(--font-mono,monospace);letter-spacing:.04em;text-transform:uppercase;text-align:left}
```

Corners and side labels cost nothing and solve the hero's real problem, which is that a centred stack on a photograph has no edges. Keep them small and true: a place, a date, a year. The corner letters only work if the name has as many letters as you have corners, so otherwise use one short word per corner.

<!-- v:hero.full-bleed-media/colour-wash-from-one-side -->
### `colour-wash-from-one-side` · 4 sites · quality 4

- **Feels:** Branded, legible, more honest than a scrim.
- **Use when:** The image has no calm side, and you own a strong colour.
- **Not when:** The colour is a muddy navy. Crescent Dental shows how this turns into a stock template.
- **Recipe:** Solid brand colour over the left 40% of a photo or film, fading to clear by 55%, with copy on the solid part. Leo Cussen uses this with four translucent course tiles along the base, which give the wash a floor. Stability fades its film left into grainy near-black with glass fragments floating on it. Add grain to stop banding.
- **Seen on:** Leo Cussen, Stability AI, Frontend Masters, Crescent Dental.
- **Suits:** photo-led, warm-neutral. Education, AI, health.

```css
.hero::before{content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(90deg,var(--accent) 40%,transparent 55%)}
```

<!-- v:hero.full-bleed-media/image-with-caption-only -->
### `image-with-caption-only` · 7 sites · quality 4

- **Feels:** Total confidence in the work.
- **Use when:** Portfolios, fashion and architecture, with an image that needs nothing.
- **Not when:** A first-time visitor must learn what you do from this screen.
- **Recipe:** The viewport-filling image, with no headline. Text no larger than about 30px: a caption low left or one centred title, a small nav, nothing else. X8 floats one 680px product dead centre on a blurred grey studio video, under a black band. Add a thin scroll cue, or the page looks like it failed to load.
- **Seen on:** X8 Eyewear, Charles Pas, STILL / FORM, The Aviator, Terreno Hotel, Camille Mormal.
- **Suits:** photo-led, type-led, expressive. Portfolio, fashion, agency, architecture.

<!-- v:hero.full-bleed-media/contained-plate -->
### `contained-plate` · 9 sites · quality 4

- **Feels:** A gallery wall, or a catalogue. Nothing to prove.
- **Use when:** You want the picture untouched, for retail, art and furniture.
- **Not when:** You need drama in the first second.
- **Recipe:** Hold the image back from the edges and keep every word on the paper, so no veil is ever needed. Blue Bottle runs a full-width dark still life about 60vh tall with an uppercase 14px headline and a 48px square button below it, plus a `01 02 03` counter at the right. Sonar uses a 960px plate with a caption row. Unito starts a 1400px photo near y 496 under a ghosted wordmark, cropped by the fold. HAY opens on an empty 1330 by 750 tile holding only a hand-drawn signature.
- **Seen on:** Blue Bottle, Motto, White Cube, Kvadrat, The Officin, Sonar.
- **Suits:** photo-led, light-precision, type-led. Ecommerce, culture, brand, agency.

<!-- v:hero.full-bleed-media/graphic-plate -->
### `graphic-plate` · 8 sites · quality 4

- **Feels:** Made, not sourced. A crafted brand image.
- **Use when:** You have no photography and do not want to fake it. This is the honest answer for infrastructure and finance.
- **Not when:** The graphic is an aurora gradient or an abstract 3D blob. Those are now stock.
- **Recipe:** A full-width crafted image in place of a photo. Increase folds its mark into a ribbon about 1300px wide from flat polygons, lime through mint to azure, no shadows, with a two-tone headline at 40/48 overlapping it. Trigger.dev renders its own trace view huge at about 30 degrees with depth of field, behind 60px centred copy, with a row of feature tags at the fold. Browserbase frames a dithered bitmap mountain between 1px rules. Axem dissolves stippled dunes into black.
- **Seen on:** Increase, Trigger.dev, Browserbase, axem, Stark, Ponpon Mania.
- **Suits:** expressive, illustrated, light-precision. Devtool, finance, AI, portfolio.

<!-- v:hero.full-bleed-media/promo-carousel -->
### `promo-carousel` · 7 sites · quality 3

- **Feels:** A busy shop window.
- **Use when:** A retailer really does run several live promotions.
- **Not when:** You are hiding indecision about the message. Most visitors never see the second slide.
- **Recipe:** A slide 550 to 700px tall, a 48 to 70px headline, a 32 to 48px button, pill pagination and a thin progress bar. Therabody adds a 150px thumbnail of the next slide at the lower right. Bellroy sets a thumbnail row of categories directly under the hero. Design the first slide to stand alone.
- **Seen on:** Bellroy, Therabody, AlphaTauri, Boudin Bakery, LEDUP, Gramercy Tavern.
- **Suits:** warm-neutral, photo-led. Ecommerce, hospitality, fashion, food.

### What cheapens it

- **Flat 40 to 50% black over a good photo.** The default of every template. Check the list above, and move the crop first.
- **A headline alone on a picture.** Add one small true thing: a proof row, corner labels, a reading, a place and date. We rendered the same photo and the same words twice, once plain and once with corner letters and two side captions. The plain share of the screen barely moved, from 57% to 56%, while objects rose from 13 to 21, and only the second looked designed. Edges did that, not quantity.
- **Checking only the headline's contrast.** The 16px sub is what fails. Ours disappeared until the veil reached 56% of the height at .72.
- **White frosted card on a dark photo.** It reads as a grey box. Use dark glass, or a solid card.
- **Stock people.** Readers spot them instantly. A real room, a real dish or a real founder beats a licensed smile.
- **Type across a face or across the horizon.** Crop the picture, do not move the words. Our first inset crop put the horizon through the headline.
- **A video or image that is the wrong shape on a phone.** A 16:9 landscape cropped to portrait loses its subject. Set a separate `object-position` under 700px, or supply a portrait crop.
- **No poster or colour under the image.** A white flash before a dark hero is the worst first frame there is. Set the hero's background to the picture's darkest tone.

---

## Video loop

`hero.video-loop`, 51 sites. A film runs where a picture would. Everything in full-bleed applies, plus the fact that the frame keeps changing under your words.

**What it must do.** Show something a still cannot: craft in progress, a place at dusk, a product assembling, a crowd moving. If one frame of the film would do the same job, use a photograph, because it loads faster and never fights the type.

**Great versus cheap.** Great loops are graded as one piece, so a single lockup holds over every shot. a16z darkens the base of every clip so one overlay works across all of them. Boom alternates greyscale factory shots with blue sky on a rhythm. Cheap loops are stock footage of hands on keyboards, cut at random, under a flat black veil. The other divide is honesty about being a video: a small pause control, a poster that looks finished, no sound without consent.

**Measured.** H1 48 to 77px, median 64, weight 300 to 500, median 400, the lightest of any element because the film supplies the weight. H1 top y 192 to 631, median 388, so film lockups sit lower than any other hero. Sub 16 to 20px. Alignment splits evenly, 13 left to 8 centred among 21 measured sites.

**Every film hero needs:** a poster frame set in `poster`, `muted playsinline loop`, a real pause control of 28 to 36px at a bottom corner, a background colour matching the poster's darkest tone, and a still under `prefers-reduced-motion`. A film that has not decoded yet must look like a finished hero, not a black box. Aman's capture shows a grey placeholder with a loader, and that is the frame slow connections get.

<!-- v:hero.video-loop/film-bottom-caption -->
### `film-bottom-caption` · 10 sites · quality 5

- **Feels:** Calm authority. A title card at the end of a shot.
- **Use when:** Robotics, architecture, outdoors, anything where the footage is the case.
- **Not when:** The lower third of the film is busy throughout.
- **Recipe:** Full-bleed muted film, usually desaturated or cool, 48 to 56px side margin. Caption block low left: 28 to 64px heading, 440 to 520px max width, 16 to 17px body. One action low right on the same baseline, such as a small boxed link with an arrow. Bottom-only veil. Figure keeps it to 28px uppercase over 17px body, and that small size is what makes it feel like engineering. Foster + Partners adds a five-dot pager with the first dot as a progress ring. Bonobos ends the film at 600px, and a white band below carries the slide title and arrows.
- **Seen on:** Figure, 1 Hotels, Bonobos, Fantasy, Foster + Partners, Patagonia.
- **Suits:** photo-led, render-3d, dark-precision. Agency, ecommerce, local business, AI.

<!-- v:hero.video-loop/cinema-card -->
### `cinema-card` · 7 sites · quality 5

- **Feels:** A premiere. The film is presented, not used as wallpaper.
- **Use when:** A modern product brand has a real brand film and wants clean type above it.
- **Not when:** The footage is weak, because the card puts it on show.
- **Recipe:** Headline on the page, 88px or 48 to 64px, two lines. Then one row: three small icon claims at the left and a 238 by 54 pill at the right. Below, a 1200 to 1280px film card, radius 16, starting about y 470, cut by the fold, with one 32px pause control. The film lives in a card, so type never fights it and legibility costs nothing. Codecademy reverses it: a 1248 by 580 panel with a large black signup card overlapping its base by about 95px. Monark sets a black and white film inside a navy field, so it sits in the page tone.
- **Seen on:** Public, Codecademy, Monark Markets, Rabbit, Ueno, SC Program.
- **Suits:** dark-precision, light-precision, mono-technical. Finance, education, brand, agency.

```css
.hero{height:840px;overflow:hidden;padding:44px 80px 0}
h1{font:400 88px/1 var(--font-display);letter-spacing:-.03em;max-width:980px}
.rail{display:flex;align-items:center;gap:28px;margin-top:30px;font:400 15px var(--font-text)}
.rail a{margin-left:auto;height:54px;width:238px;border-radius:99px;display:grid;place-items:center;
  background:var(--ink);color:var(--bg);font-weight:500}
.film{position:relative;height:560px;margin-top:28px;border-radius:16px;overflow:hidden;background:var(--ink)}
.film video{width:100%;height:100%;object-fit:cover;display:block}
.pause{position:absolute;right:16px;bottom:14px;width:32px;height:32px;border-radius:50%;
  background:rgb(0 0 0/.42);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:grid;place-items:center}
```

The rail is what makes this composition work. Without it the headline and the card are two stacked blocks. With it there is a horizontal line that ties the left edge to the right, and the film feels placed.

<!-- v:hero.video-loop/product-film -->
### `product-film` · 6 sites · quality 5

- **Feels:** Showroom. You can almost touch it.
- **Use when:** The product is physical and beautiful in motion.
- **Not when:** You only have a render turntable with no real cuts.
- **Recipe:** No container: the product on a seamless ground or in macro. Polestar sets a car on studio grey filling the right 60%, cutting from three-quarter view to headlight macro, with copy in the empty upper left at only 30px, 16px body and two outlined buttons. The small type is correct, because the car is doing the shouting. Prägen Hätlen uses macro hands setting a dial, dimmed about 35%, with no headline at all. Fairphone runs on #f6f6f6 with the object assembling and an 80px headline arriving late.
- **Seen on:** Polestar, Prägen Hätlen, Fairphone, YLEM, Idea Bakery, Lazy Eight.
- **Suits:** photo-led, render-3d, bold-colour. Brand, agency, fashion, ecommerce.

<!-- v:hero.video-loop/film-centred-lockup -->
### `film-centred-lockup` · 11 sites · quality 4

- **Feels:** Warm, lived-in, an invitation.
- **Use when:** Hospitality, food, retail and consumer apps, with footage of real people in real places.
- **Not when:** Empty rooms or drone shots of nothing. Key's point is the dinner table, not the villa.
- **Recipe:** Film under a flat 25 to 35% scrim or a slight vignette. Centred 36 to 96px headline, one 14 to 24px line, a small button. Clips every 3 to 5 seconds, graded alike. Babylonstoren carries a small translucent panel low left with the live temperature and a list of booking links, which the analyst's spec missed and which makes the screen feel like a working place. Hydrow mixes a serif first line with a sans second at 96/300.
- **Seen on:** Babylonstoren, Aesop, BeReal, Death to Robots, First December Films, Hydrow.
- **Suits:** photo-led, expressive, bold-colour. Hospitality, ecommerce, health, portfolio.

<!-- v:hero.video-loop/reel-as-identity -->
### `reel-as-identity` · 6 sites · quality 4

- **Feels:** A studio with too much good work to choose.
- **Use when:** Varied footage needs one mark to hold it together.
- **Not when:** There is only one kind of footage. Then use `film-bottom-caption`.
- **Recipe:** A fast reel, clips about every second, with one fixed element. Basic Agency uses a 120px white disc with a two-word label, dead centre. Velora sets a cream wordmark at 80% width, bleeding off the base. Athletics plays the reel through a 330 by 580 cut-out of its letter, and below that sits a 116/1 statement in weight 300, which the analyst's row left out. Boom holds a 77px line low and centred while factory and flight clips cut beneath.
- **Seen on:** Athletics, Boom, Velora, Basic Agency, a16z, Tobacco Theater.
- **Suits:** photo-led, type-led, expressive. Agency, ecommerce, finance, brand.

<!-- v:hero.video-loop/inset-reel -->
### `inset-reel` · 3 sites · quality 4

- **Feels:** A framed print that moves.
- **Use when:** You want film without the page disappearing, for hospitality and hardware.
- **Not when:** The nav must sit over the picture.
- **Recipe:** Film inset 16 to 24px with paper gutters, radius 0 to 16, under the nav. Aman puts the nav on paper and insets the film on three sides, with one small tracked serif caption in the centre. Apptronik sets a 50/1.1 weight 300 title and a 42px outlined pill low left, about 58px in. Oxygen sets a 100px condensed caps title low left and three outline icons low right.
- **Seen on:** Aman, Apptronik, Oxygen Pictures.
- **Suits:** photo-led, light-precision, warm-neutral. Agency, brand, hospitality.

<!-- v:hero.video-loop/texture-film -->
### `texture-film` · 5 sites · quality 4

- **Feels:** Energy without a subject. Modern and cheap to produce.
- **Use when:** Abstract products with no footage, for AI and infrastructure.
- **Not when:** The product has a real face. Texture hides it.
- **Recipe:** Abstract footage kept dark on the type side, about 70% of the frame near black. Vapi smears green footage horizontally in a 620 to 640px band that ends in a hard edge against the white page, with 80/1 weight 600 at -0.05em, an 18px sub, a pill pair and a live call control under them. CMBLU splits two phrases either side of centre, with liquid tendrils running between them, so the film and the words share one idea. MetaLab floats one glossy inflated star with a list of client pills down the left.
- **Seen on:** Vapi, MetaLab, CMBLU, Mala Project, DeepNode AI.
- **Suits:** render-3d, light-precision, dark-precision. AI, agency, food.

```css
.hero{position:relative;height:640px;overflow:hidden;display:flex;align-items:center;color:#fff;background:#000}
.hero video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.copy{position:relative;padding:0 124px}
h1{font:500 80px/1 var(--font-display);letter-spacing:-.04em;color:#fff;max-width:640px}
.sub{margin-top:22px;max-width:470px;color:rgb(255 255 255/.82)}
.try{display:flex;width:522px;height:50px;margin-top:18px;font-size:14px}
.try b{flex:1;display:flex;align-items:center;padding:0 16px;font-weight:400;border-radius:8px 0 0 8px;
  background:rgb(255 255 255/.14);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.try i{font-style:normal;display:flex;align-items:center;padding:0 16px;background:rgb(0 0 0/.6);border-radius:0 8px 8px 0}
```

The hard end matters. A dark band that fades softly into a white page looks unfinished, and a clean edge looks intended. The working control under the buttons gives the abstract footage something real to sit beside.

<!-- v:hero.video-loop/film-narrative -->
### `film-narrative` · 3 sites · quality 3

- **Feels:** Short film, slow and personal.
- **Use when:** The story is the brand and the words are worth reading.
- **Not when:** The visitor came to buy something quickly.
- **Recipe:** Film plus words that change with it. Pedestal runs a 24px lime subtitle line low left, changing with each scene. Dishoom sets a 21px italic pull quote inside a framed inset with an audio toggle low right. Sam Peitz aligns sentences inside the slats of a window blind, with a small time control that changes the light.
- **Seen on:** Dishoom, Pedestal, Sam Peitz.
- **Suits:** warm-neutral, photo-led, mono-technical. Food, ecommerce, portfolio.

### What cheapens it

- **Stock footage.** Laptops, handshakes and city timelapses say nothing. No video beats bad video.
- **No pause control.** It is required for accessibility, and it signals care.
- **A poster that is a black frame.** Export a real still, and set the hero's background to match it.
- **Unmatched grading.** Warm and cool clips in one reel break the lockup. Grade them all to one curve.
- **A headline over a moving subject.** Footage has to stay calm where the words sit for the whole loop, so check every shot.
- **Heavy type on film.** The measured weight here is 300 to 500. Bold on moving footage shouts.
- **Autoplay sound.** Never.
- **A big file.** Cut to 6 to 12 seconds and compress hard. Dark footage hides compression better than light footage.

---

## Type only

`hero.type-only`, 82 sites. Words carry the first screen. This is the hardest hero to do and the most dangerous one to generate, because a plain stack on a white page is exactly what a default looks like. Read the thinness section first.

**What it must do.** Say something distinctive enough to stand alone, then give the screen a floor, so it does not end in empty paper. Type-only is not the absence of a design. It is a design in which all the decisions are in the type.

**Great versus cheap.** Great ones have one physical event that a plain stack does not: a hand-drawn stroke, a sentence set as a paragraph, a word that overprints a shape, a line that crosses a ribbon, letters that fill the screen. And almost all of them have something at the fold. Even Vercel's emptiest claim pins a logo row to the bottom edge. Cheap ones have a 72px gradient headline, a grey sub and two buttons, vertically centred, with nothing else on the screen. The measured median has 82% plain background, which sounds empty, but its bottom third still has structure in 46% of cells. Our first attempt had 3%.

**Measured.** H1 48 to 80px, median 64, weight 400 to 600, 705 to 1100px wide, the widest of any element. Sub 16 to 24px, median 21, larger than anywhere else because it carries more of the message. H1 top y 148 to 262, median 208. Alignment is 19 centred to 15 left. Real values run from a 19px paragraph to a 449px wordmark, but the huge end belongs to briefs that ask for loud, so stay near the median for product work.

<!-- v:hero.type-only/paragraph-headline -->
### `paragraph-headline` · 2 sites · quality 5

- **Feels:** Assured and literate. A company with a lot to say and no need to shout.
- **Use when:** Your offer takes a sentence to explain and the sentence is good.
- **Not when:** The copy is generic. A long headline shows that faster than a short one.
- **Recipe:** The headline is a paragraph: 48/55 weight 300, tracking -0.02em, four lines, about 1020px wide. First sentence in ink, the rest in a blue-grey about 60% ink. The type runs across a colour ribbon and takes on its hue. Above it a 14px live counter, below it a 44 to 48px CTA pair, then a logo row between hairlines, then the next section's first line at the fold. Stripe's page runs on 1px vertical rails at the gutters. International Magic sets 32/38 weight 500 in grey across three lines, with the first project frame peeking at the base.
- **Seen on:** Stripe, International Magic.
- **Suits:** gradient-light, light-precision. Finance, agency.

```css
.frame{position:relative;height:828px;overflow:hidden;isolation:isolate}
.ribbon{position:absolute;right:-120px;top:-110px;width:1200px;height:1000px;z-index:-1}
.rail{position:absolute;top:0;bottom:0;width:1px;background:var(--line)}
.copy{padding:112px 0 0 208px;max-width:1240px}
.count{font-size:13px;margin-bottom:18px;font-variant-numeric:tabular-nums}
h1{font:300 48px/1.14 var(--font-display);letter-spacing:-.02em;text-wrap:pretty}
h1 span{color:color-mix(in oklab,var(--ink) 62%,var(--bg))}
.logos{position:absolute;left:208px;right:208px;top:500px;height:150px;
  display:grid;grid-template-columns:repeat(7,1fr);align-items:center;
  border-block:1px solid var(--line)}
```

Weight 300 is what makes this feel expensive. At 500 the same paragraph is a wall. Draw the ribbon as broad filled SVG paths that run past the viewport. Our first ribbon was three shapes under 14 to 42px of blur, and it read as a pastel smudge. The real ribbon has edges. Dropping the main bands to 3px of blur and keeping one soft band of 16px beneath them turned the smudge into a material. If a filter clips the art, set its region to at least 160%.

<!-- v:hero.type-only/type-over-one-field -->
### `type-over-one-field` · 5 sites · quality 5

- **Feels:** Graphic, printed, sure of itself.
- **Use when:** You own one strong shape or one strong colour moment.
- **Not when:** The shape is a generic blob with a gradient.
- **Recipe:** One large shape behind centred type, with the type overprinting it, no knockout, no shadow. Astral draws a 660px lime stepped outline of its glyph behind a 100/110 uppercase headline, with two 53px buttons under it. mymind crosses a 1050px white disc set in a blurred colour field with 140/.9 two-line type at -0.06em, then a sentence with outlined coloured word pills, then the app window at the fold. Leeroy has only a floor glow.
- **Seen on:** Astral, mymind, Leeroy, DOT Audio Recorder, sen knife.
- **Suits:** gradient-light, bold-colour, dark-precision. SaaS, devtool, agency, food.

```css
.hero{position:relative;height:828px;overflow:hidden;isolation:isolate;
  display:flex;flex-direction:column;align-items:center;padding-top:238px}
/* one brand shape, huge, drawn as a band, printed under the type. No knockout, no glow */
.glyph{position:absolute;left:50%;top:24px;height:660px;width:auto;transform:translateX(-50%);z-index:-1;
  fill:none;stroke:var(--accent);stroke-width:1.05;overflow:visible}
h1{font:500 100px/1.08 var(--font-display);letter-spacing:-.01em;text-transform:uppercase;text-align:center;max-width:1100px}
.cta{display:flex;gap:10px;margin-top:30px}
.cta a{height:52px;padding:0 24px;border-radius:3px;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line)}
```

Our first glyph was a filled silhouette, and it read as a heavy blob competing with the headline. The real one is a thick outline, so the type still sits mostly on page colour. Add small mono facts in the two bottom corners to give the screen a floor.

<!-- v:hero.type-only/statement-with-annotation -->
### `statement-with-annotation` · 4 sites · quality 5

- **Feels:** A person read this and marked it up.
- **Use when:** You have a sentence and one word in it that matters. Investors, consultancies, writers.
- **Not when:** Every word matters. One or two marks, no more.
- **Recipe:** One sentence, 48 to 92px, on paper colour, with a hand-drawn stroke on one or two words: a wobbly underline, a ring, 2.6 to 3px in the accent. Draw it as an SVG path, never a CSS underline. Leave about 100 to 160px clear above. Then bring real tiles up from the fold. Sequoia's row of cards starts near y 510 and is cropped by the fold, and it is half of the composition, which the analyst's spec missed. Elyx uses a pink underline on one italic word, with line art rising from the base. Bohdan Ratiiev underlines key phrases with 2px black rules as if each were a link.
- **Seen on:** Elyx, Sequoia, Bohdan Ratiiev, The Boring Blog.
- **Suits:** warm-neutral, mono-technical, illustrated. SaaS, finance, portfolio, editorial.

```css
.hero{height:824px;overflow:hidden;padding:104px 56px 0;display:flex;flex-direction:column;align-items:center;text-align:center}
h1{font:400 56px/1.14 var(--font-display);letter-spacing:-.02em;max-width:1060px;text-wrap:balance}
.mark{position:relative;display:inline-block;white-space:nowrap}
/* drawn path with a slight wobble, never a CSS underline */
.mark svg{position:absolute;left:-4%;width:108%;overflow:visible;pointer-events:none;
  fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round}
.mark.ring svg{top:-14%;height:128%}
.mark.under svg{bottom:-12%;height:18px}
/* the rising row is the whole job: real items, cropped by the fold */
.rise{margin-top:auto;width:100%;height:324px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
```

Our first version was this sentence, centred in the viewport with a sub and a button. It measured 95% bare with 3% of the bottom third occupied, and it looked like a placeholder. We moved the sentence up, took out the sub and button, and added three real tiles. That is the change that made it read as designed.

<!-- v:hero.type-only/statement-above-rising-media -->
### `statement-above-rising-media` · 2 sites · quality 5

- **Feels:** Patient. The screen waits for you.
- **Use when:** Investors, architects and studios, with one strong image.
- **Not when:** The image is merely adequate.
- **Recipe:** Words at one third of the height, then deliberate emptiness, then a real image entering at y 720 to 840, cut by the fold. Bakstad sets a small 30px sentence off-axis at x 224 and a 15px link pair, then about 300px of bare page, then a photo at x 654 cropped by the fold. Greylock sets 88/88 weight 300 with a 32px line beneath and a one-point perspective grid of pale lines fading out between the words and a media card.
- **Seen on:** Greylock, Bakstad Construction.
- **Suits:** light-precision, photo-led. Finance, architecture.

<!-- v:hero.type-only/centred-statement -->
### `centred-statement` · 11 sites · quality 4

- **Feels:** Editorial and serious, when the type is good.
- **Use when:** The headline is short, the voice is distinct, and something rises at the fold.
- **Not when:** You are about to add a gradient to one word to make it interesting.
- **Recipe:** An optional 11 to 14px label, a two-line 72 to 128px headline at 1.0 leading, a 13 to 20px sub, a CTA. Linear's method page sets 128 on near-black with a 13/20 paragraph about 340px wide and two faint arcs at the base. Wispr Flow runs 96/1 with a speech ribbon crossing the lower right corner, carrying real words. ECI floats four small claims at uneven positions around a 102px title. Instrument sets 64 on black with a white pill.
- **Seen on:** Linear Method, Wispr Flow, ECI, Instrument About, Vue, Brand Identity School.
- **Suits:** dark-precision, type-led, light-precision. Agency, SaaS, AI, devtool.

<!-- v:hero.type-only/stack-with-proof-row -->
### `stack-with-proof-row` · 7 sites · quality 4

- **Feels:** Sensible, credible, conversion-minded.
- **Use when:** You have no visual, but you do have numbers, logos or ratings.
- **Not when:** The proof is invented or unknown.
- **Recipe:** Left or centred 56 to 96px headline, 20 to 24px sub, 46 to 56px CTA, then a row of proof where the picture would be. OpenRouter sets four 36px numerals with 12px labels at a 180px pitch. Calvyn overlaps six 40px avatars with a caption. Magram closes the fold with a logo rail at y 668. ClickHouse runs 96/1 weight 600 and a 1216 by 96 two-cell news strip that straddles the step into the next section, then a logo row.
- **Seen on:** Algolia, Calvyn, ClickHouse, Nx, Magram, OpenRouter.
- **Suits:** light-precision, dark-precision, bold-colour. Devtool, SaaS, agency.

<!-- v:hero.type-only/giant-wordmark -->
### `giant-wordmark` · 14 sites · quality 4

- **Feels:** Loud, sure, a poster on a wall.
- **Use when:** Festivals, culture, studios and strong local brands, with a short name.
- **Not when:** The product needs explaining.
- **Recipe:** The name or a claim at 150 to 450px, weight 500 to 900, leading 0.74 to 0.95, tracking to -0.055em, filling 60 to 100% of the width on a flat field, bottom-anchored or stacked. Tiny 11 to 14px text elsewhere, so the scale jump is enormous. Potrero spans the full width at about 449px under a rounded 10px film still, with three small columns at the top. Huge sets a 249px two-line claim on paper with a 19px sub. London Short Film Festival puts 130px type on lime. Studio Unlmtd gives the last word a gradient and the full stop a solid colour.
- **Seen on:** Huge Contact, Lacoste Ace Breaker, Okey Studio, Potrero, Swirple, Central.
- **Suits:** type-led, bold-colour, expressive. Agency, portfolio, culture, brand.

```css
.hero{position:relative;height:100vh;min-height:680px;overflow:hidden;display:flex;flex-direction:column;
  padding:16px 20px 0;background:var(--accent);color:var(--ink)}
.top{display:grid;grid-template-columns:1fr 1fr 1fr 640px;gap:20px;font:500 14px/1.3 var(--font-text)}
.still{height:360px;border-radius:10px;overflow:hidden}  /* one real picture on the flat field */
h1{margin-top:auto;font:600 25vw/.74 var(--font-display);letter-spacing:-.055em;
  width:max-content;padding-bottom:.045em;white-space:nowrap}
```
```js
// measured, not guessed: every font is a different width, so fit the word after fonts load
const h=document.querySelector('h1');
const fit=()=>{h.style.fontSize='';const w=h.parentNode.clientWidth-40,f=parseFloat(getComputedStyle(h).fontSize);
  h.style.fontSize=f*w/h.offsetWidth*.992+'px'};
document.fonts.ready.then(fit);addEventListener('resize',fit);
```

A fixed `vw` cannot work here, because the typeface is dealt and every face is a different width. Our first try at 25.6vw filled only 54% of the width and looked like a large heading rather than a wall of type. Measure the word and fit it. At full width the screen stops needing anything else.

<!-- v:hero.type-only/mark-plus-sentence -->
### `mark-plus-sentence` · 11 sites · quality 4

- **Feels:** Silence as status.
- **Use when:** The company is already known, or the audience is very small: investors, partners.
- **Not when:** Anyone arrives wondering what you do. For an unknown brand this reads as an unfinished page.
- **Recipe:** Centred mark, 34 to 40px gap, one 30 to 44px sentence, optically above true centre, a tiny nav. Block uses a 44px mark, a 30/37.8 two-line sentence and two rows of 12px caps links at the top and bottom edges, and those rows are the floor. Fabrica uses a 200px rendered mark over 44/52 weight 300. React stacks a 112px atom, name, tagline and button pair.
- **Seen on:** Block, Fabrica Partners, Roy Jad, React, Rspack, Massugu Hungary.
- **Suits:** light-precision, expressive, type-led. Finance, devtool, agency, portfolio.

<!-- v:hero.type-only/panel-field -->
### `panel-field` · 9 sites · quality 4

- **Feels:** Mass with no picture. A strong answer when you have no images.
- **Use when:** You have no photography and no product shot, and a page of white type would look thin.
- **Not when:** The field becomes a stock gradient banner.
- **Recipe:** Type inside one contained field. Docker runs a 1160 by 464 dark panel under the nav with a living glyph canvas, 64/70 centred title and a pair of buttons, then three cards at the fold. Temporal uses a 496px aurora band between nav and logos, with a 68px line at weight 300. Sidekick fills 900px with flat colour, with wordmark at the top, a 40/43 statement low left, a CTA low right, and 500px of nothing between. Now Code cuts a concave notch out of the panel's corner to dock three cards.
- **Seen on:** Now Code, Docker, Temporal, Sidekick, ECAL, Good Design Week.
- **Suits:** bold-colour, type-led, dark-precision. Agency, devtool, education, local business.

<!-- v:hero.type-only/headline-into-content -->
### `headline-into-content` · 5 sites · quality 4

- **Feels:** Useful, no ceremony. The page gets on with it.
- **Use when:** Pricing, about, docs, case studies, and any inner page.
- **Not when:** It is your only impression on a cold visitor.
- **Recipe:** No media, no eyebrow. Two-line headline at the left gutter, about 120px below the nav and 70px above the real content. Vercel's pricing runs 64/64 at -0.06em into a three-column plan grid that fills the first viewport. Linear's about page sets the headline at about 48 to 56px, not the 72 the analyst estimated, with a video frame cropping in below. Mirim stacks a case-study title over a metadata row in 12px mono.
- **Seen on:** Vercel Pricing, Notion About, Linear About, Mirim, GitHub Pricing.
- **Suits:** light-precision, warm-neutral, dark-precision. Devtool, agency.

<!-- v:hero.type-only/typographic-construction -->
### `typographic-construction` · 5 sites · quality 4

- **Feels:** Designed by someone who loves type.
- **Use when:** Culture, studios and libraries, with words that can take being built with.
- **Not when:** Reading speed matters.
- **Recipe:** Type becomes structure. Motto justifies two 154px caps lines between 1px rules, words pushed apart, a small flag in the first gap, with a thumbnail, a 15px paragraph and an underlined link below on a strict grid. ADCC breaks words into a stepped three-column pyramid at about 130px pitch. Make Town leaves 60% blank, then a 14px letter, then a 318px word rising from the fold. The small text is what shows the scale.
- **Seen on:** Motto, ADCC Awards, Yuriy Vitrenko's Library, Utopia Orchestra, Make Town.
- **Suits:** type-led. Culture, agency, local business.

<!-- v:hero.type-only/quiet-paragraph -->
### `quiet-paragraph` · 6 sites · quality 4

- **Feels:** Confidence by refusal. A note, not a pitch.
- **Use when:** Personal sites, labs and archives, where the reader already chose to come.
- **Not when:** You need to persuade a stranger.
- **Recipe:** No headline size at all. Aniket sets a 19/26.6 paragraph from y 270 beneath a 40px avatar and a 14px name. Are.na uses a lettered definition list at 19/28 with hanging grey markers and a 24px `[+]` tile. George Hatton sets a 12/14 bio 10px from the top left, sharing the top line with three index columns. Line length and tone carry everything.
- **Seen on:** Aniket, Are.na, George Thomas Hatton, Temporary Liveness, Drizzle, Groq.
- **Suits:** type-led, light-precision. Portfolio, culture, AI, devtool.

<!-- v:hero.type-only/claim-with-logos-at-fold -->
### `claim-with-logos-at-fold` · 2 sites · quality 3

- **Feels:** Minimal and enterprise, but only with strong logos.
- **Use when:** You have customers everyone recognises.
- **Not when:** The logos are unknown or invented. A row of fake names collapses it.
- **Recipe:** Two-line 64/64 claim at the optical middle with about 290px clear above, a 36px pill pair 24px below, and one logo row pinned to the fold's bottom edge.
- **Seen on:** Vercel AI, Orbit Design.
- **Suits:** light-precision. AI, agency.

### What cheapens it

- **A gradient on one word.** A listed giveaway, and swapping it for one italic or coloured word is the same tic. Mark a whole claim with a second ink, as Linear does, or leave the headline plain.
- **Vertically centred in the viewport.** It wastes the fold. Anchor from the top.
- **The stack with nothing under it.** Give the bottom 300px a job: a logo row, a rising card, two corner notes.
- **Eyebrow, headline, sub, two buttons.** Four kinds of text in a row is a template. Drop at least one.
- **A big sub.** The sub is large here, 21px median, but keep it to two lines.
- **A fixed `vw` on a giant word.** It will not fill the width with a different face. Measure and fit.
- **Filled glyphs behind type.** They fight the headline. Use an outline or a very pale tone.
- **Weight 700 at 100px.** Large type wants less weight. Real values at display size centre on 400 to 500.
- **Fake simplicity.** A one-line hero needs a real point of view. If the sentence would suit a competitor, it is not ready.

---

## Collage

`hero.collage`, 46 sites. Many pieces instead of one: photos, tiles, cut-outs, chips. It suits a brand whose story is range, whether of treatments, people, projects or tasks.

**What it must do.** Show variety and still read as one composition. The eye needs a calm centre and a reason for every piece, so a collage is arranged around something, not just scattered.

**Great versus cheap.** Great collages have a rule you can name. Asana's pieces are all joined by one wire. Raycast's tiles lose focus with distance. Hims' tiles are all links with the same grammar. Theatre Memory's prints hide the middle letters of a word. The cheap version has no rule: random tilted cards, mixed finishes and mixed radii, floating around a headline with a generic shadow. Every piece must also hold real content, because a collage multiplies whatever is wrong with your assets.

**Measured.** H1 40 to 66px, median 56, weight 400 to 600, 441 to 806px wide. Most are centred, 11 of 17, because pieces need to surround the copy. H1 top y 206 to 713, median 321, since the collage may come first. Tile radius runs 0 to 28 with one value throughout. Rotations stay under about 10 degrees, except in deliberately loud consumer work.

<!-- v:hero.collage/routing-tiles -->
### `routing-tiles` · 7 sites · quality 5

- **Feels:** A front door. Choose your path.
- **Use when:** Several real products or audiences, for health, retail and institutions.
- **Not when:** There is one product. Tiles then invent choices.
- **Recipe:** Headline about 56px, with a second ink on the last words, set high with no sub. Under it a tight mosaic of real destinations: two 678 by 199 photo tiles, then four 337 by 100 rows, radius 24, gaps only 4px. Each tile is a link with a two-tone label, a product image at the right and a chevron at the edge. Then a large promo band rises at the fold. Fora uses a full-viewport 3 by 2 grid of 432, 432 and 576px columns, no gaps, no radius, with logotype, a rotating word, a portrait, news and a still life.
- **Seen on:** Hims, Fora, Ro, Fellow, The Marshall Project, Origin Wellness.
- **Suits:** photo-led, warm-neutral, bold-colour. Health, agency, nonprofit, ecommerce.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
.big{grid-column:span 2;height:198px;border-radius:24px;position:relative;overflow:hidden;color:#fff;
  padding:18px 20px;background:center/cover}
.big h2{font:500 18px/1.18 var(--font-text)}
.big h2 span{display:block;font-weight:400;opacity:.72}  /* two-tone label */
.row{position:relative;height:100px;border-radius:24px;background:var(--surface);
  display:flex;align-items:center;gap:10px;padding:0 40px 0 18px;font:500 16px var(--font-text)}
.row span{color:var(--ink-2);font-weight:400}
.row svg{margin-left:auto;width:58px;height:70px}        /* product render, not an icon */
.big::after,.row::after{content:"";position:absolute;right:16px;top:50%;width:8px;height:8px;
  border-right:2px solid currentColor;border-top:2px solid currentColor;transform:rotate(45deg) translateY(-50%)}
```

The 4px gap with a 24px radius is the signature, because it makes the tiles read as one mass. At 16px gap, a default, it turns into a card grid. Put a real product in every row. Our placeholder shapes held up only because the two big tiles carried real pictures.

<!-- v:hero.collage/wired-perimeter -->
### `wired-perimeter` · 1 site · quality 5

- **Feels:** Work flowing around your promise.
- **Use when:** The product is a process with stages, handoffs or agents.
- **Not when:** You cannot name every node with something true.
- **Recipe:** Centred copy in a protected column about 680px wide. Around it about 10 slightly tilted labels, chips and avatar clusters, joined by 1.5px wires with about 20px rounded corners, shifting from grey to the accent along the path, with 6px dots at junctions. Wires never cross the text. Pick up the accent in one word of the headline. By eye, Asana's headline runs about 100px across, though the DOM reports 64, so trust the frame here.
- **Seen on:** Asana.
- **Suits:** light-precision. SaaS.

```css
.hero{position:relative;height:836px;overflow:hidden}
.copy{position:absolute;left:50%;top:128px;width:680px;margin-left:-340px;text-align:center}
.wires{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.wires path{fill:none;stroke-width:1.5}
/* the gradient must use absolute coordinates, or each short path restarts it */
/* <linearGradient id="w" gradientUnits="userSpaceOnUse" x1="120" y1="60" x2="1320" y2="780"> */
.node{position:absolute;transform:translate(-50%,-50%);padding:9px 13px;border-radius:10px;
  background:var(--bg);font-size:15px;display:flex;align-items:center;gap:8px;white-space:nowrap;
  box-shadow:0 0 0 1px var(--line),0 6px 16px -6px rgb(0 0 0/.14)}
```

Plan wire and node coordinates together, and write the elbows as one continuous path with `a20 20` corners. In our first pass the wires stopped short and hung loose, and nodes were placed by their top left corner, so nothing landed on a line end. Centring nodes on their own point with `translate(-50%,-50%)` fixed that at once. A default `objectBoundingBox` gradient also restarts on each path, which breaks the colour shift.

<!-- v:hero.collage/fading-tile-field -->
### `fading-tile-field` · 1 site · quality 5

- **Feels:** Endless, as if the row carries on into the dark.
- **Use when:** You have a real set of integrations, apps or marks.
- **Not when:** You would have to invent the logos.
- **Recipe:** Two centred rows of about 124px dark tiles, radius 28, 1px white border at 8%, each holding one real logo. Centre tiles sharp, outer tiles blurred 1.6 to 3px at 12 to 32% opacity, so no row has a last item. An 80px title about 50px below, a sub, a 50px search field, a faint colour glow above.
- **Seen on:** Raycast Store.
- **Suits:** dark-precision. Devtool.

```css
.tile{width:124px;height:124px;border-radius:28px;background:var(--surface);display:grid;place-items:center;
  box-shadow:inset 0 0 0 1px rgb(255 255 255/.08),inset 0 1px 0 rgb(255 255 255/.08)}
/* distance from centre sets focus, so the row has no last tile */
.d1{opacity:.92}.d2{opacity:.32;filter:blur(1.6px)}.d3{opacity:.12;filter:blur(3px)}
```

<!-- v:hero.collage/device-fan -->
### `device-fan` · 1 site · quality 5

- **Feels:** Calm, generous, a keynote slide.
- **Use when:** One device shows many outcomes.
- **Not when:** The crops are near-duplicates.
- **Recipe:** A centred 220 by 460 phone over four crops tucked behind each other: inner two 288px tall, outer two 220px, radius about 28, soft ambient shadow. Height steps give depth with no rotation. Short centred copy above, with one small control row.
- **Seen on:** Apple Intelligence.
- **Suits:** light-precision. AI.

<!-- v:hero.collage/ring-around-headline -->
### `ring-around-headline` · 6 sites · quality 4

- **Feels:** A busy, varied world around one clear idea.
- **Use when:** You have many real, good images or tasks.
- **Not when:** The images have different finishes. The ring exposes it.
- **Recipe:** A centred headline with 12 to 30 small tiles around it, 104 to 140px, radius 8, leaving a clear column for the copy. Claude's page alternates photos with pale squares, each with a 13px task caption, fading out toward the bottom. Kenzie Fraker uses about 16 small tilted work cards on a true circle. Tiles shrink with distance, from about 140 to 40px, to imply depth. Scale's version sits mid-page rather than in the hero.
- **Seen on:** Claude, Scale AI, Checkout.com, Noxus, KenzieFrakerDesign, Pete Sena.
- **Suits:** dark-precision, warm-neutral, light-precision. AI, brand, finance, portfolio.

<!-- v:hero.collage/scattered-prints -->
### `scattered-prints` · 3 sites · quality 4

- **Feels:** A wall of prints. Taste made visible.
- **Use when:** Photographers, investors with portraits, archives.
- **Not when:** The gaps cannot feel placed. Random spacing is the failure.
- **Recipe:** Unrotated prints with no borders or shadows, scattered with wide white gaps round a small centred name, bottom row bleeding off, rising at different scroll rates. Per Appelgren uses about 10 prints at 150 by 205. Checked against the frame, Lightspeed's portraits are about 325px wide, not the 140 to 190 the analyst estimated. They sit on a field running from cream to sky blue, with two caps phrases, and each portrait fades into the blue at its base.
- **Seen on:** Lightspeed, Per Appelgren, Meech213.
- **Suits:** photo-led. Portfolio, fashion.

<!-- v:hero.collage/type-split-by-prints -->
### `type-split-by-prints` · 4 sites · quality 4

- **Feels:** Cultural, thoughtful, printed.
- **Use when:** An archive, an exhibition, a festival. You need real material.
- **Not when:** The word must be read instantly.
- **Recipe:** A giant 200px word split across two lines, left and right, with three or four overlapping 400 to 530px prints stacked at the centre over the middle letters. The eye completes the word. Black on white, with a small caption and a date row at the base.
- **Seen on:** Theatre Memory, Nritya Mohana, Radio Null, Shopify Supply.
- **Suits:** expressive, type-led, bold-colour. Culture, education, ecommerce.

<!-- v:hero.collage/cutout-on-grid -->
### `cutout-on-grid` · 4 sites · quality 4

- **Feels:** Bold but disciplined. A brand that can draw.
- **Use when:** You have a strong cut-out and a confident palette.
- **Not when:** The cut-out is a stock person with a laptop.
- **Recipe:** Jasper sets centred copy above a 1320px 1px navy grid of about 55px cells on a pale brand field. A cut-out portrait breaks the grid's top edge, with three diagonal bars to the left, a row of solid circles to the right, a tilted label over its base and a real chat card at the right edge. Hard edges, no shadow. Cascara pins about 11 cut-outs around a 92px wordmark on white, bleeding off the edges. Effepinna centres a 540px figure across a 1px red rule.
- **Seen on:** Jasper, Cascara Cabinet, Effepinna Studio, FigJam.
- **Suits:** bold-colour, illustrated. AI, food, portfolio, SaaS.

<!-- v:hero.collage/bleeding-rail -->
### `bleeding-rail` · 5 sites · quality 4

- **Feels:** Warm, abundant, easy.
- **Use when:** Local businesses and consumer brands with several good photos.
- **Not when:** You have two good pictures and two weak ones.
- **Recipe:** A headline above a rail of 4 to 6 photos, 384 to 416px wide, gaps 8 to 16, touching or crossing both viewport edges. Medusa622 uses four 395px squares at 8px gaps, mixing hands, a face and a teapot. Daylight drifts four 384 by 256 photos above a large wordmark. Wild runs 416 by 728 portrait tiles past the fold, with its copy column travelling in the rail.
- **Seen on:** Wild, Daylight, Medusa622, Rivian, London Short Film Festival.
- **Suits:** photo-led, type-led, gradient-light. Agency, brand, culture, local business.

<!-- v:hero.collage/character-diorama -->
### `character-diorama` · 5 sites · quality 4

- **Feels:** Personality first. A world you could live in.
- **Use when:** You have commissioned characters and an audience that likes them.
- **Not when:** You would generate clip art. It reads as clip art.
- **Recipe:** The mascot is the scene. Sentry's inked character stands between UI tiles and casts pink and lime light cones that physically link them. Discord sets a tilted monitor with real app UI among 3D characters, with blurred props drifting at the edges. Josh Comeau builds an arc of about 200 small gradient blocks over a seated avatar, placed over 3 seconds.
- **Seen on:** Sentry, Discord, Josh Comeau, Sparklefilth, Avara.
- **Suits:** illustrated, bold-colour, expressive. Devtool, ecommerce, finance, education.

<!-- v:hero.collage/single-image-stage -->
### `single-image-stage` · 3 sites · quality 4

- **Feels:** One work at a time, on a clean wall.
- **Use when:** Curators and art directors, where the next image is the interaction.
- **Not when:** Your work needs context.
- **Recipe:** One 576 by 720 image centred on off-white, about 90px from the top, name above, a two-line caption below, six 3px progress dots. Footer Design Gallery shows one large framed specimen with a small intro at the left.
- **Seen on:** Alessandro Stella, Footer Design Gallery, Quynh Folio.
- **Suits:** warm-neutral, expressive, light-precision. Portfolio, culture.

<!-- v:hero.collage/tilted-tile-fan -->
### `tilted-tile-fan` · 4 sites · quality 3

- **Feels:** Loud, cheerful, consumer.
- **Use when:** Bold packaged goods, flavour ranges and event brands.
- **Not when:** The register is professional.
- **Recipe:** Three to five cards or cut-outs rotated -8 to +25 degrees around a centre, 150 to 300px, translucent or colour-coded, base fading into the page. Dailee sets five 150 by 190 flavour cards overlapping and bleeding past both edges. Keep rotations varied and few.
- **Seen on:** Affirm, Dailee, SC Program, Drop Highlight.
- **Suits:** dark-precision, bold-colour, expressive. Finance, education, food, SaaS.

<!-- v:hero.collage/blob-masked-photos -->
### `blob-masked-photos` · 2 sites · quality 3

- **Feels:** Friendly, for families.
- **Use when:** Children's education and very consumer services.
- **Not when:** Anywhere professional. It dates fast.
- **Recipe:** Three overlapping 390 by 185 organic blob-masked photos with about 10px gaps, pill labels and dashed hand-drawn arrows linking them.
- **Seen on:** Outschool, Trasti.
- **Suits:** bold-colour, light-precision. Education, finance.

### What cheapens it

- **No rule.** If you cannot name the rule in a sentence, you have a scatter.
- **Mixed finishes.** One photo in grayscale, another saturated, a third on white. Grade them to match.
- **Tiles touching the copy.** Protect a clear column, and keep the top row clear of the nav.
- **Too many rotations.** Keep to a few values under 10 degrees, and mix in zero.
- **A shadow on every piece.** Collage has depth already. Use one soft shadow, or none.
- **Wires that stop short.** Plan them with the nodes, as one path.
- **Placeholder content.** Every tile multiplies the fakeness. Ten real things or none.
- **Equal sizes.** Vary scale, so there is a hierarchy.

---

## 3D object

`hero.object-3d`, 35 sites. One rendered thing carries the screen. It leans expressive, with 21 of its 35 rows from that tier and only 5 from gold. It is excellent for hardware, and a trap for software with nothing physical to show.

**What it must do.** Make the object feel real and specific. It must be the product, the brand's own mark, or a true idea about the product. A floating shape that means nothing is decoration, and readers can tell.

**Great versus cheap.** Everything rides on light and material. Great renders have one light, one considered material, soft contact shadows and fine detail at the edges, and they sit in the page as if the page were a studio. Analogue's render ground equals the page grey exactly, so there is no frame at all. Cheap ones are glossy gradient blobs, primary-coloured primitives and default studio HDRIs, placed in a box with a drop shadow. We found this ourselves: our first annotated object used thick extruded cylinders and looked like a toy.

**Measured.** H1 44 to 80px, median 64, weight 500 at all three quartiles, tracking -0.05 to -0.01em, the tightest of any element except the demos. H1 top y 187 to 356, median 269. Median plain background is 70%, with only about 10 distinct objects, the lowest of all elements: one object and a lot of calm is correct here. If you have no real render, do not fake one in CSS. Use `graphic-plate` or `diagram-instead-of-screenshot`.

<!-- v:hero.object-3d/seamless-render-on-page-ground -->
### `seamless-render-on-page-ground` · 8 sites · quality 5

- **Feels:** A product photographed in a perfect studio.
- **Use when:** You sell a physical thing and own a good render.
- **Not when:** You cannot match the render's ground to the page exactly.
- **Recipe:** The render's ground colour equals the page colour exactly, so there is no frame and only soft contact shadows show. Analogue sets a 3/4 overhead of the console, controller and cartridges at 60 to 80% of viewport width on page grey, with a 52.9px headline above and a pill below, all on the centre axis. 1X places three figures dissolving into the ground through a gradient mask. Its 44px one-line name sits at the left and a small price with a pill at the right, both at chest height, flanking the figures, which the analyst's row missed. That one line across the object is what makes it a layout rather than a picture.
- **Seen on:** 1X, Analogue, Area Technology, Postevand, Little Troop, Angelo.
- **Suits:** render-3d, type-led, photo-led. Agency, ecommerce, brand, portfolio.

<!-- v:hero.object-3d/annotated-specimen -->
### `annotated-specimen` · 3 sites · quality 5

- **Feels:** A plate from a technical manual. Rigour with beauty.
- **Use when:** The object stands for a system with named parts: AI infrastructure, hardware, research.
- **Not when:** You have no real parts to name.
- **Recipe:** One object at 460 to 640px, three 11px mono caps callouts on 1px leaders, each ending in a small square node. Together's object is thin glossy plates in blue, violet and orange, with a pale pie-sliced disc at the centre, on a pale blue wash. Sutera floats a mossy rock with four elbow leaders to 20px nodes and side panels of mono text. Apple Design overlays thin construction circles on enlarged glass controls.
- **Seen on:** Together AI, Apple Design, SUTERA.
- **Suits:** light-precision, mono-technical, gradient-light. Devtool, portfolio, AI.

```css
.hero{position:relative;height:726px;overflow:hidden;display:grid;grid-template-columns:600px 1fr;
  align-items:center;padding:0 0 110px 108px;isolation:isolate}
.hero::before{content:"";position:absolute;inset:0;z-index:-2;
  background:radial-gradient(46% 56% at 70% 40%,color-mix(in oklab,var(--accent) 22%,transparent),transparent 72%)}
h1 span{color:var(--ink-3)}                     /* two-tone headline */
canvas{position:absolute;left:640px;top:0;width:760px;height:640px;z-index:-1}
/* mono caps, one leader, a square node. They turn a pretty object into a specification */
.callout{position:absolute;display:flex;align-items:center;gap:7px;white-space:nowrap;
  font:500 11px var(--font-mono,monospace);letter-spacing:.05em;text-transform:uppercase}
.callout::before{content:"";width:7px;height:7px;background:var(--ink)}
.callout::after{content:"";position:absolute;left:3px;top:14px;width:1px;height:var(--l);background:var(--ink);opacity:.5}
```

Build plates, not cylinders. Our first object extruded discs to .07 units and they read as chunky pucks. Thin plates of about .035 with a .014 bevel catch a bright rim, and a colour gradient across each face, set per vertex, does what the depth was failing to do. Light them more than you expect: at default intensity ours rendered navy and brown. A room environment at about 1.9 plus a hemisphere light brought back the colour. Keep the whole object inside the canvas, because a plate cut off by the canvas edge looks like a bug.

<!-- v:hero.object-3d/inset-panel-render -->
### `inset-panel-render` · 3 sites · quality 5

- **Feels:** A premium product brand with its own visual world.
- **Use when:** You have a repeating object, or a rendered brand form.
- **Not when:** The render is only a texture.
- **Recipe:** Panel inset 16 to 24px, radius 24, about 800px tall. Lithic marches six dark cards diagonally through fine copper contour lines on black, with a 64/64 white headline overlapping the procession. Stripe Sessions sets 100/.9 weight 250 on the left, date and venue as two small columns at the right, then a 1408px render card cut by the fold and by its own right edge. Ultrahuman sets a ring on a plinth in a warm panel, with three small fact columns at the lower right.
- **Seen on:** Lithic, Stripe Sessions, Ultrahuman.
- **Suits:** light-precision, gradient-light. Brand, finance, health.

```css
.panel{position:relative;margin:0 24px;height:804px;border-radius:24px;background:#050506;overflow:hidden;
  color:#fff;isolation:isolate;display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:150px}
.contours{position:absolute;inset:0;width:100%;height:100%;z-index:-2}
.contours circle{fill:none;stroke:var(--accent);stroke-width:1;opacity:.5}
.procession{position:absolute;inset:0;z-index:-1;perspective:1400px}
.card{position:absolute;width:372px;height:236px;border-radius:18px;overflow:hidden;
  background:linear-gradient(135deg,#34343a,#141417 58%);transform:rotateX(52deg) rotateZ(-36deg);
  box-shadow:inset 0 0 0 1px rgb(255 255 255/.2),inset 1.5px 1.5px 0 rgb(255 255 255/.14),0 34px 40px -12px #000}
.card::before{content:"";position:absolute;inset:0;
  background:repeating-radial-gradient(circle at 80% 120%,rgb(255 255 255/.08) 0 1px,transparent 1px 7px)}
```

The object is one card repeated, which you can build in CSS with no render. Its fine ring texture and two-sided edge light are what make it read as a material. Let the headline overlap the cards: that is the depth.

<!-- v:hero.object-3d/object-beside-headline -->
### `object-beside-headline` · 3 sites · quality 5

- **Feels:** Quiet luxury in a technical product.
- **Use when:** You have a brand object that is not the product itself.
- **Not when:** The object has no idea behind it.
- **Recipe:** Copy at the left from about x 170, the object at the right at 420 to 640px, nearly dissolving into the ground. Resend sets a 420px matte black cube with two lit stickers on black, with one faint diagonal light streak, beside 96/1 type. React Email wraps real email layouts round glowing rings on the right half. Svix lines up iridescent hardware at about 450px left of 80/1 type. One light, one material.
- **Seen on:** Resend, React Email, Svix.
- **Suits:** dark-precision, light-precision. Devtool.

<!-- v:hero.object-3d/spotlit-object-on-dark -->
### `spotlit-object-on-dark` · 4 sites · quality 4

- **Feels:** A stage. One thing matters.
- **Use when:** A device with presence, and a real render.
- **Not when:** The render is ordinary. Darkness makes it more obvious.
- **Recipe:** Pure black, the device rising from the bottom centre at about 510px, back-lit, floor glow in the lower corners falling to black, one saturated element as the only colour. Teenage Engineering has no headline, and its nav is a row of line-art tiles. Plvs Ultra sets 90/1 weight 700 at -0.067em over a line-drawn chip with a red beam rising behind the text.
- **Seen on:** Teenage Engineering, Plvs Ultra, Garuda 2026, Zentry.
- **Suits:** expressive, render-3d, mono-technical. Brand, AI, culture.

<!-- v:hero.object-3d/brand-machine-scene -->
### `brand-machine-scene` · 2 sites · quality 4

- **Feels:** A physical joke that explains the product.
- **Use when:** You can turn what the product does into a machine.
- **Not when:** The metaphor needs a caption.
- **Recipe:** An edge-to-edge render on a pale ground. Svelte's logo is a block on a diagonal belt, with messy parts entering and neat boxes leaving, the belt bleeding off both sides and a headline in the open top left. Razorpay sets a phone in a white ribbed room with an oversized bar breaking the phone's edges and a chrome cursor pressing it.
- **Seen on:** Svelte, Razorpay Magic Checkout.
- **Suits:** render-3d. Devtool, finance.

<!-- v:hero.object-3d/object-interleaved-with-type -->
### `object-interleaved-with-type` · 4 sites · quality 4

- **Feels:** Type and object share one space.
- **Use when:** Launches and expressive brands.
- **Not when:** Reading comes first.
- **Recipe:** The object sits between layers of type. Hydroflow sets a 275 by 520 can with one word passing behind and another in front, hiding two letters. Dalco places an 800px server over a 260px ghost phrase scrolling sideways. Loris Bukvic hangs a chrome figure off the top edge, overlapping the bio. It needs real depth order, so put the front word on its own layer.
- **Seen on:** HYDROFLOW, Dalco, lorisbukvic.graphics, Dogstudio.
- **Suits:** render-3d. Portfolio, food, brand, agency.

<!-- v:hero.object-3d/generative-figure -->
### `generative-figure` · 4 sites · quality 4

- **Feels:** Made by code, for people who notice.
- **Use when:** Portfolios and technical brands with no assets at all.
- **Not when:** It would have to run on a weak phone with no fallback.
- **Recipe:** A figure drawn in code. Luis Bizarro rings a black void with 1px triangles, producing moire at the inner edge. Bohdan Ratiiev shades a head in 6 to 8px glyphs. Deebak Tamilmani draws a point-cloud city inside a 24px paper frame. It must respect reduced motion, and it must render a good first frame.
- **Seen on:** Luis Henrique Bizarro, Bohdan Ratiiev, Deebak Tamilmani, Yamauchi No.10.
- **Suits:** mono-technical, render-3d, expressive. Portfolio, architecture, finance.

<!-- v:hero.object-3d/explorable-world -->
### `explorable-world` · 4 sites · quality 3

- **Feels:** A place to wander.
- **Use when:** Studios and games, where exploring is the point.
- **Not when:** Anyone needs an answer quickly.
- **Recipe:** A full-viewport scene under the nav, with no headline above the fold. Basement builds a low-lit room with an arcade cabinet and live visitors' cursors. David Heckhoff drops his character through a desk scene on scroll. Provide a poster, a skip route, and a loader that shows progress.
- **Seen on:** Basement Studio, David Heckhoff, Belen Jones, The Aviator.
- **Suits:** render-3d, dark-precision. Portfolio, agency.

### What cheapens it

- **Thick primitives.** Cylinders and cubes with heavy extrusion read as toys. Thin plates and fine bevels read as engineered.
- **Default lighting.** A single HDRI and glossy plastic look like the default of every tool. Choose one light and one material.
- **Glossy gradient blobs.** The abstract 3D shape was stock by 2023.
- **Render ground one step off the page.** A faint rectangle around the object kills the illusion. Match exactly, or mask it out.
- **Dark render with low light.** Ours went navy and brown at default settings. Check the colour you asked for is the colour you got.
- **An object cut by its canvas.** Crop on purpose at the viewport or a panel, never by accident at a canvas edge.
- **Nothing at the fold.** Our annotated hero's lower third was 12% occupied until the logos moved up and the next section's heading came into view.
- **No fallback.** WebGL fails on some devices. Give the canvas a poster image, and skip it under reduced motion.

---

## Input first

`hero.input-first`, 29 sites. A field is the main action. The visitor starts using the product before they have finished reading about it.

**What it must do.** Remove the step between interest and use. The field must look so ready that typing is the obvious next thing, and it must do something real when you do.

**Great versus cheap.** A great input is an object, built with care. The button lives inside the field, the placeholder is a real example, and the field has weight and presence. A cheap one is a stock text input with a separate button beside it and `Enter your email` as the placeholder. The second divide is what surrounds it: Ramp puts a product panel under the field, and Spline puts suggested prompts under it, so the field is never alone.

**Measured.** H1 32 to 64px, median 53, weight 400 to 600, tracking -0.03 to 0. H1 top y 154 to 243, median 213. The gap from sub to field is tight, 8 to 28px, median 20. Fields seen run 42 to 73px tall, and command fields run 55 to 64px. Most are 450 to 720px wide.

<!-- v:hero.input-first/email-field-inset-button -->
### `email-field-inset-button` · 6 sites · quality 5

- **Feels:** One small step. Precise and commercial.
- **Use when:** B2B self-serve signup, where email is really the next step.
- **Not when:** You need more qualification than an email.
- **Recipe:** A field about 450 by 62, radius 8, surface fill, 1px line, 18px placeholder, with a 176 by 52 accent button inset 4 to 5px inside it. No secondary link. Ramp sets a live counter chip above the headline and a large product panel below, starting within the first screen. Decagon uses a 528 by 73 capsule, 30% white over the scene, with a black pill nested 11px from the edge. Brex holds a 40px button in a 58px field.
- **Seen on:** Ramp, Decagon, Better Stack, Rippling, Struck, Brex.
- **Suits:** light-precision, soft-pastel, warm-neutral. Finance, AI, SaaS, devtool.

```css
.hero{position:relative;height:840px;overflow:hidden;padding:44px 56px 0;isolation:isolate}
/* one quiet texture, masked so it fades out across the page */
.hero::before{content:"";position:absolute;inset:0;z-index:-1;
  background-image:radial-gradient(var(--line) 1px,transparent 1.2px);background-size:14px 14px;
  -webkit-mask-image:linear-gradient(270deg,#000,transparent 60%);mask-image:linear-gradient(270deg,#000,transparent 60%)}
h1{font:500 64px/1.1 var(--font-display);letter-spacing:-.025em;margin-top:18px}
/* the button sits inside the field, 5px in: one object, one action */
.field{width:452px;height:62px;margin-top:24px;padding:0 5px 0 22px;border-radius:8px;display:flex;align-items:center;
  background:var(--surface);box-shadow:inset 0 0 0 1px var(--line);font:400 17px var(--font-text);color:var(--ink-2)}
.field b{margin-left:auto;width:178px;height:52px;border-radius:6px;display:grid;place-items:center;
  background:var(--accent);font:500 16px var(--font-text)}
.panel{height:488px;margin-top:36px;padding:28px 28px 0;border-radius:8px;overflow:hidden;
  background:var(--surface);box-shadow:inset 0 0 0 1px var(--line);display:grid;grid-template-columns:1fr 380px 1fr;gap:24px}
.ticker{position:absolute;left:0;right:0;bottom:0;height:34px;background:var(--bg);border-top:1px solid var(--line);
  display:flex;gap:30px;align-items:center;padding:0 56px;font:500 11px var(--font-mono,monospace);color:var(--ink-3)}
```

Our first panel had four rows in each column and ended in blank paper. It needed nine, so that the columns run off the panel. The ticker along the base with live counts is cheap to build, and it is what gives the page a floor.

<!-- v:hero.input-first/prompt-composer -->
### `prompt-composer` · 6 sites · quality 5

- **Feels:** The product is already open, waiting for you.
- **Use when:** AI products where a typed request is the product.
- **Not when:** Your AI is one feature among many.
- **Recipe:** A centred stack, then a 640 to 700px composer, 116 to 172px tall, radius 12 to 16, with a caret and a real example in the placeholder, and a footer row with attach, mode select and send. Under it, three or four suggestion pills at 36px with small icons. Spline adds a selection box round one word of a two-tone headline, and a dark app peeking at the fold. Exa sets a 700px search card over a config panel. Perplexity drops the marketing altogether, with a mark, a 26px question and a composer inside its real app shell.
- **Seen on:** Exa, Spline, Perplexity, Relume, Grafana, Hugging Face Docs.
- **Suits:** light-precision, dark-precision, bold-colour. AI, SaaS, devtool.

```css
.hero{position:relative;height:836px;overflow:hidden;display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:84px}
h1{font:500 50px/1.1 var(--font-display);letter-spacing:-.03em;margin-top:18px}
h1 span{color:var(--ink-3)}
.composer{width:680px;height:116px;margin-top:30px;padding:14px 14px 10px 16px;border-radius:12px;text-align:left;
  display:flex;flex-direction:column;background:var(--surface);color:var(--ink-2);font-size:15px;
  box-shadow:inset 0 0 0 1px rgb(255 255 255/.07),0 24px 60px -24px #000}
.composer footer{margin-top:auto;display:flex;align-items:center;gap:8px;font-size:12.5px}
.send{margin-left:auto;width:30px;height:30px;border-radius:8px;background:var(--ink);color:var(--bg);display:grid;place-items:center}
.chips{display:flex;gap:8px;margin-top:14px}
.chips a{height:36px;padding:0 13px;border-radius:99px;box-shadow:inset 0 0 0 1px var(--line);display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-2)}
/* the real app, dimmed, entering at the fold */
.app{position:absolute;left:32px;right:32px;bottom:-250px;height:470px;border-radius:12px 12px 0 0;overflow:hidden;
  background:var(--surface);box-shadow:inset 0 0 0 1px var(--line)}
.app::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent,var(--bg) 62%)}
```

Write a real example in the placeholder, with real dimensions and real nouns. The suggestion pills should be specific enough to show range. An empty dark box is what most of these look like when generated.

<!-- v:hero.input-first/install-command -->
### `install-command` · 5 sites · quality 5

- **Feels:** Developer respect. You can try it now.
- **Use when:** Developer tools with a real one-line install.
- **Not when:** The install is four steps.
- **Recipe:** The command replaces the button: a 55 to 64px pill, or a 510 by 64 field, split by hairlines into a package-manager select, a 13 to 14px mono command and a copy icon. A mono caps label below it, and a text link to a live sandbox. Postman adds three 50px OS circles on the same row at the far right, each with a real glyph, and a window rising into the fold with a rainbow halo. Remix uses a 720 by 56 bar at 3.5% white with a 1px border.
- **Seen on:** Remix, Postman, Strapi, ReadMe, Insomnia.
- **Suits:** light-precision, render-3d, dark-precision. Devtool.

```css
.hero{position:relative;height:836px;overflow:hidden;padding:60px 0 0 124px;isolation:isolate}
/* the command is the CTA: pill split by hairlines, a real value inside, copy at the end */
.cmd{height:56px;border-radius:99px;background:rgb(0 0 0/.55);box-shadow:inset 0 0 0 1px var(--line);
  display:inline-flex;align-items:center;font:400 14px var(--font-mono,monospace)}
.cmd span{height:100%;padding:0 18px;display:flex;align-items:center;border-right:1px solid var(--line)}
.cmd span:last-child{border:0;padding:0 16px}
.term{position:absolute;left:124px;right:124px;top:540px;height:380px;padding:16px 20px;border-radius:12px 12px 0 0;
  background:var(--bg);font:400 13px/1.75 var(--font-mono,monospace);color:var(--ink-2);
  box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 30%,transparent)}
/* a halo hugging the window, not an ellipse behind the text */
.term::before{content:"";position:absolute;inset:-34px -64px -240px;border-radius:44px;z-index:-1;
  filter:blur(30px) saturate(1.25);
  background:conic-gradient(from 232deg at 50% 62%,var(--accent),
    oklch(from var(--accent) l c calc(h - 40)) 22%,oklch(from var(--accent) l c calc(h - 110)) 40%,
    oklch(from var(--accent) l c calc(h - 170)) 58%,oklch(from var(--accent) l c calc(h - 230)) 72%,
    oklch(from var(--accent) l c calc(h - 300)) 86%,var(--accent))}
```

Our first glow was an ellipse behind the page, and it read as a sunset under the text. Postman's light hugs the window on three sides, so the window seems to emit it. Attach the glow to the object. The stops rotate hue from `--accent`, so the halo follows whatever palette is dealt. Our OS circles were also empty rings at first, and empty circles look like missing images. Put a real glyph in each, or remove them.

<!-- v:hero.input-first/multi-field-booking-bar -->
### `multi-field-booking-bar` · 4 sites · quality 5

- **Feels:** Practical and ready. You came here to book.
- **Use when:** Hotels, rentals, restaurants, clinics and any local finder. This is the strongest hero for hospitality that takes bookings.
- **Not when:** The visitor needs persuading first.
- **Recipe:** Key sets three 42px white selects at 224, 192 and 128px wide, 8px gaps, square corners, then a 90 by 42 accent search button, under a 72/1.3 weight 400 headline and a 14px tracked caps line, all on a dimmed dinner-table film. Airbnb uses an 848 by 64 white pill with three zones split by 1px dividers, a 12px bold label over a 14px grey value, and a 48px accent circle inset 8px. Thrivent uses one ZIP field with a red button. Real prefilled values beat placeholders.
- **Seen on:** Airbnb, Thrivent, Key, Hopper.
- **Suits:** photo-led, light-precision. Hospitality, finance.

```css
.hero{position:relative;height:100vh;min-height:680px;color:#fff;display:flex;flex-direction:column;align-items:center;text-align:center;isolation:isolate}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}
.hero::before{content:"";position:absolute;inset:0;z-index:-1;background:rgb(0 0 0/.34)}
h1{margin-top:176px;font:400 72px/1.2 var(--font-display);letter-spacing:-.02em;color:#fff;max-width:760px}
.kicker{margin-top:14px;font:500 13px var(--font-text);letter-spacing:.16em;text-transform:uppercase}
/* the task is the hero: three real fields in one row, no second action */
form{display:flex;gap:8px;margin-top:32px}
label{height:44px;padding:0 12px;background:#fff;color:#222;display:flex;align-items:center;justify-content:space-between;font-size:15px}
button{height:44px;width:104px;border:0;background:var(--accent);color:#fff;font:600 13px var(--font-text);letter-spacing:.1em;text-transform:uppercase}
.terms{margin-top:16px;font-size:14px;color:rgb(255 255 255/.84)}
```

Under the bar, state the price and the cancellation terms in one line. Add a row of three plain facts at the base for a floor: the rating, how far it is, one honest quirk. Our smooth landscape left the lower half empty, whereas a busy real photo carries that area for free, so a picture of people at a table is worth more here than any layout decision.

<!-- v:hero.input-first/search-as-navigation -->
### `search-as-navigation` · 6 sites · quality 4

- **Feels:** A useful tool, not a brochure.
- **Use when:** Docs, libraries, archives, venues: sites people visit to find one thing.
- **Not when:** Visitors do not yet know what to look for.
- **Recipe:** Search or one question is the hero. GitHub Docs runs an 85px band across the 1312px frame with a 24px placeholder and a `/` key chip, with no magnifier. Herzog & de Meuron opens on two rows of 40px tag pills, a mono search line, then a 1300px image. Concertgebouw uses two white cards, one to search and one to choose for you. DixonBaxi draws the field as a single 1px underline.
- **Seen on:** DixonBaxi, Language Explorer, Herzog & de Meuron, Concertgebouw, GitHub Docs, Queen's University Library.
- **Suits:** light-precision, expressive, mono-technical. Agency, architecture, culture, devtool.

<!-- v:hero.input-first/sso-stack -->
### `sso-stack` · 1 site · quality 4

- **Feels:** You are already signing up.
- **Use when:** Self-serve products with SSO, where trying is free.
- **Not when:** Sales leads the process.
- **Recipe:** Under the sub, two 265 by 68 pills with a brand logo and a 16/500 label, 8px gap, a hairline `or` divider, a 50px email field with a coloured focus border, a 134 by 50 pill, and a 13px legal line. On Asana this sits inside the `wired-perimeter` composition.
- **Seen on:** Asana.
- **Suits:** light-precision. SaaS.

<!-- v:hero.input-first/transaction-widget -->
### `transaction-widget` · 1 site · quality 4

- **Feels:** Direct, with a clear outcome.
- **Use when:** Donations or simple priced services.
- **Not when:** The amount needs explaining first.
- **Recipe:** A white card about 320px wide on a full-bleed photo: a Once or Monthly toggle, four amount chips, a 40px button stating the exact outcome, such as the amount and frequency, radius 4 to 8.
- **Seen on:** GiveDirectly.
- **Suits:** photo-led. Nonprofit.

### What cheapens it

- **A generic placeholder.** `Enter your email` tells you nothing. Write a real example.
- **A separate button beside a stock input.** Inset it, or fuse it with no gap.
- **The input floating alone.** Put suggestions, a product panel, or terms under it.
- **An empty rounded box.** A generated composer usually has no footer and no caret. Build the whole control.
- **A field that does nothing.** It must work. Connect it, or use a button.
- **Glow as ellipse.** Attach light to the object it comes from.
- **Empty icon circles.** Use real glyphs, or remove them.
- **Too small a target on a phone.** Stack the field and button at 48px height, full width, under 500px.

---

## Interactive demo

`hero.interactive-demo`, 17 sites. The first screen works. Tabs swap real panels, a canvas runs, a control does something. This is rare, and it is the highest-trust hero there is.

**What it must do.** Let the visitor cause something real within seconds, and look finished before they touch it. Most visitors never click, so the idle state has to work as a strong still hero.

**Great versus cheap.** Great demos have real content in every state and one obvious first action. Amplitude's tab strip is fused to its frame, so the tabs read as part of the product. Render's canvas shows real services, a live deploy and one selected node. Cheap demos are a carousel of screenshots with dots, or an empty sandbox with `Click to start`. The interaction is worth nothing if the panels behind it are generic.

**Measured.** H1 48 to 78px, median 64, weight 400 to 600, tracking -0.05 to -0.025em, the tightest of any element. H1 top y 164 to 217, median 181, the highest on the page, because the demo needs the room. Sub 18px, 12 to 20px gap. Median objects on screen is 23, among the highest, and 9 of 13 are left-aligned. Heads stay short, so the demo starts between about y 380 on Amplitude and y 640 on the Vercel AI SDK.

<!-- v:hero.interactive-demo/tabs-fused-to-product -->
### `tabs-fused-to-product` · 3 sites · quality 5

- **Feels:** A product you can flip through.
- **Use when:** You have several real product areas, each with a strong view.
- **Not when:** The tabs are marketing categories with no real difference in the panels.
- **Recipe:** Amplitude uses a split head at a 1140px column: 72/1 headline left, an 18/24 sub and CTAs right, spanning the headline's exact height. Directly below, a four-tab strip fused to a surface frame that runs past the fold. The active tab shares the frame's fill and gains a 2px accent edge at the top. Vercel AI SDK uses a seven-item tab row over a 586px code window beside a 292px chat result. Upstash uses 180 by 64 tabs with brand-coloured icons, the active one fused into a 1200px panel at radius 35, under a 128px gradient headline.
- **Seen on:** Amplitude, Vercel AI SDK, Upstash.
- **Suits:** light-precision, gradient-light. Devtool, SaaS.

```css
.hero{height:836px;overflow:hidden;padding-top:32px;width:1140px;margin:0 auto}
/* the head splits, so its right column spans the headline's exact height */
.head{display:grid;grid-template-columns:1fr 390px;gap:40px;align-items:stretch}
.head .right{display:flex;flex-direction:column;justify-content:space-between;font-size:18px;line-height:1.33;color:var(--ink-2)}
.tabs{margin-top:28px;display:grid;grid-template-columns:repeat(4,1fr);border-radius:12px 12px 0 0;overflow:hidden;
  box-shadow:inset 0 0 0 1px var(--line)}
.tabs button{height:50px;border:0;background:none;position:relative;cursor:pointer;
  font:500 14px var(--font-text);color:var(--ink-2);border-right:1px solid var(--line)}
/* the active tab takes the frame's fill, so tab and frame become one shape */
.tabs [aria-selected=true]{background:var(--surface);color:var(--ink)}
.tabs [aria-selected=true]::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--accent)}
.frame{height:760px;padding:24px 24px 0;background:var(--surface);box-shadow:inset 1px 0 0 var(--line),inset -1px 0 0 var(--line)}
```

Use real `role="tablist"` and `aria-selected`, and swap real panels. Each panel must run past the crop. Our first panel held a four-row table and then 200px of blank white inside the frame, which is the same fault as a short cropped window. Six rows, a verdict, a small chart and two evidence cards fixed it. Every panel needs that treatment, not just the first.

<!-- v:hero.interactive-demo/product-canvas -->
### `product-canvas` · 3 sites · quality 5

- **Feels:** The real system, running.
- **Use when:** The product is a graph, canvas or builder.
- **Not when:** The canvas would be mostly empty.
- **Recipe:** Headline left at 54 to 104px. Sub at the left and CTAs at the right on one row, with a small secondary link beside them. Then a 1200 to 1376px canvas, 356 to 420px tall or cut by the fold, holding live nodes joined by 1px lines, status chips, a dark deploy terminal, and one selected node, over a grainy image ground. Framer plays its builder in a 1200px radius-20 frame with a 1px border, cropped by the fold. Baseten runs a wide isometric grid of pastel tiles with a swatch switcher that re-tints the scene.
- **Seen on:** Baseten, Framer, Render.
- **Suits:** light-precision, dark-precision. SaaS, AI, devtool.

```css
.hero{padding:34px 32px 0;height:836px;overflow:hidden}
h1{font:500 76px/1.06 var(--font-display);letter-spacing:-.035em;max-width:1000px}
.row{display:flex;align-items:center;gap:16px;margin-top:22px;font-size:16px;color:var(--ink-2)}
.row .right{margin-left:auto;display:flex;gap:10px;align-items:center}
.canvas{position:relative;margin-top:26px;height:420px;border-radius:4px;overflow:hidden;background:center 62%/cover}
.lines{position:absolute;inset:0;width:100%;height:100%}
.lines path{fill:none;stroke:rgb(255 255 255/.55);stroke-width:1}
.node{position:absolute;width:176px;height:64px;padding:10px 12px;border-radius:5px;
  background:rgb(255 255 255/.94);box-shadow:0 8px 20px -8px rgb(0 0 0/.4);line-height:1.3}
.node.ghost{background:rgb(255 255 255/.34);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:none}
.node.selected{box-shadow:0 0 0 1.5px var(--accent),0 8px 20px -8px rgb(0 0 0/.4)}
.term{position:absolute;right:28px;top:40px;width:400px;height:340px;padding:12px 14px;border-radius:6px;
  background:#141519;color:#c9ccd3;font:400 12px/1.8 var(--font-mono,monospace)}
```

The picture behind the nodes is what lifts this above a diagram. Vary node states, so that some are live, one is deploying, one is selected and two are ghosted. Give each node an icon: ours had text only and looked sparser than the reference, which also packs in nine nodes where we had seven.

<!-- v:hero.interactive-demo/try-it-now-card -->
### `try-it-now-card` · 2 sites · quality 5

- **Feels:** No signup, no sales call. Try it.
- **Use when:** The product can do something useful in one action.
- **Not when:** The action needs setup.
- **Recipe:** One small working control beside or under the CTAs. Neon Docs uses a 488 by 176 card with tabs for agent prompt and CLI, a black copy pill and a mono prompt. Vapi joins a 522 by 50 scenario select to a play button, with a dotted-underlined note about microphone permission below. State the permission before you ask for it.
- **Seen on:** Neon Docs, Vapi.
- **Suits:** light-precision. Devtool, AI.

<!-- v:hero.interactive-demo/real-index-wall -->
### `real-index-wall` · 2 sites · quality 5

- **Feels:** The product is its own screenshot.
- **Use when:** Component libraries, model hubs, anything whose records are the proof.
- **Not when:** The records are thin.
- **Recipe:** Real records instead of a picture. Radix sets two columns of live UI cards, about 478 and 240px wide, radius 12, bleeding off the right and bottom, beside 78/.9 type. Hugging Face uses a 1248 by 620 dark panel, radius 32, a gently bowed bottom edge, with real filters and model rows skewed in perspective, breaking the panel's top by about 30px.
- **Seen on:** Radix UI, Hugging Face.
- **Suits:** light-precision, soft-pastel. AI, devtool.

<!-- v:hero.interactive-demo/manual-walkthrough -->
### `manual-walkthrough` · 3 sites · quality 4

- **Feels:** You turn the pages.
- **Use when:** The product has stages, or a clear before and after.
- **Not when:** One clear image would say it faster.
- **Recipe:** The visitor advances the story, while the page stays still. New Material shuffles a 704 by 468 card with two peeking behind. Energen drags a handle across a 640px browser frame between old and new, with four stat chips overlapping the corners. BILD steps a 640px phone through four stages with pill tabs and a speech card. Show the current step and let it auto-advance gently, with a pause.
- **Seen on:** New Material, BILD, Energen Digital.
- **Suits:** light-precision, render-3d, bold-colour. Agency, SaaS.

<!-- v:hero.interactive-demo/signature-instrument -->
### `signature-instrument` · 4 sites · quality 4

- **Feels:** Strange and memorable. It shows what the makers love.
- **Use when:** Technical brands with a point of view.
- **Not when:** It would need explaining.
- **Recipe:** One odd working instrument fills the hero. Paradigm draws an isometric treemap in 1px lines with a date scrubber at the left. Ghostty fills an 856 by 604 terminal window with an ASCII ghost in 10px mono, with blue halo characters. Anime.js rings a live pixel animation with a 340px rainbow HUD. It must also work as a still frame.
- **Seen on:** Paradigm, Anime.js, Ghostty, cagdascecen.com.
- **Suits:** mono-technical, dark-precision, expressive. Devtool, finance, portfolio.

### What cheapens it

- **A screenshot carousel called a demo.** If nothing responds, it is a slideshow.
- **Blank panels.** Every state needs the same density as the first.
- **An idle state that needs a click to look good.** Most visitors never click.
- **Fake latency or fake typing that loops.** It feels like a video pretending to be software. Use a real response.
- **Tabs that sit on top of the frame.** Fuse them, so tab and panel are one shape.
- **No keyboard path.** Real controls, real roles, real focus states.
- **Text at 9px.** Build at real size and crop. Do not scale a large app down.
- **Loading the demo before the headline.** The headline comes first, then the demo comes alive.

---
## Before you call it done

- Name the object in one sentence, and say what in the frame is real. "A nice visual" fails.
- Shrink the render to a thumbnail. Is there one first read? If the headline and object tie, dim one.
- Look at the lowest 300px. Say what job it does, and what the fold cuts. Content must run past the crop.
- Count scales. You want something very large and something very small, and at least one small true thing that a spec would leave out.
- Find the one overlap, or the one deliberate break with the grid. If everything sits in its own box, the screen is flat.
- Could a competitor use this frame unchanged? Then the content is generic, whatever the layout.
- On images, check the 16px sub against the actual pixels beneath it, not the headline.
- Check every state: film poster, reduced motion, tabs other than the first, fonts not yet loaded.
- Confirm children of a fixed-height hero are `flex:none`, and nothing scrolls sideways.
- Resize to phone width. The stack stays, the crop changes, tap targets reach 44px, and nothing shrinks to fit.
- Compare with your last build. Change at least three of alignment, object entry, ground, headline voice and scale.
