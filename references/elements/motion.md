# Motion

Motion answers one question: what just changed, and where should I look next. Everything else is decoration, and decoration is what makes a page feel generated. The fade-up on every block is the clearest case. It answers nothing, it delays reading, and every template ships it. This chapter teaches what real top sites do instead, how quiet product-grade motion differs from showy motion, and how to choose one language and hold it across a whole page.

It holds 116 canonical variants, clustered from 896 analyst rows across 555 sites. The strongest variants of each element were checked against real frames, and hover behaviour comes from 516 sites hovered for real with computed styles compared before and after. Curves, durations and libraries come from the shipped CSS and JS of 1,668 captured pages. 42 variants were rebuilt, rendered, and compared with real frames or measured hover values, which is where the corrections and the mistake lists come from. The same variants live in `data/elements/motion.jsonl`, which is what the sampler deals from.

Code here is the part you cannot guess. For the mechanics, `references/motion/` holds 78 tested recipes, named below as, for example, `scroll.md` Stacked deck. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in. Hex values and site names are evidence, not a palette to copy.

**Contents.** [What real sites do](#what-real-sites-do) · [What makes motion feel made](#what-makes-motion-feel-made) · [Quiet against showy](#quiet-against-showy) · [Replacing the fade-up](#replacing-the-fade-up) · [Tokens](#tokens) · [Ten motion languages](#ten-motion-languages)

- **[Load sequence](#load-sequence):** [instant paint](#1-instant-paint) · [opacity settle](#2-opacity-settle) · [type first, media fills](#3-type-first-media-fills) · [colour plate then media](#4-colour-plate-then-media) · [exact skeleton](#5-exact-skeleton) · [staged fade stair](#6-staged-fade-stair) · [word blur resolve](#7-word-blur-resolve) · [line or word rise](#8-line-or-word-rise) · [product rises last](#9-product-rises-last) · [product story assembles](#10-product-story-assembles) · [one brand object moves](#11-one-brand-object-moves) · [light arrives last](#12-light-arrives-last) · [headline word cycle](#13-headline-word-cycle) · [hero media cycle](#14-hero-media-cycle) · [typed title](#15-typed-title) · [tiles assemble](#16-tiles-assemble) · [focus pull](#17-focus-pull) · [colour plate mark](#18-colour-plate-mark) · [percent counter](#19-percent-counter) · [mark performs](#20-mark-performs) · [wordmark docks to nav](#21-wordmark-docks-to-nav) · [title card hold](#22-title-card-hold) · [iris or sheet reveal](#23-iris-or-sheet-reveal) · [glyph or pixel resolve](#24-glyph-or-pixel-resolve) · [film opening](#25-film-opening)
- **[Scroll reveal](#scroll-reveal):** [word ink scrub](#1-word-ink-scrub) · [line ink resolve](#2-line-ink-resolve) · [blur front wipe](#3-blur-front-wipe) · [blur in on entry](#4-blur-in-on-entry) · [opacity in place](#5-opacity-in-place) · [rise stagger row](#6-rise-stagger-row) · [viewport focus band](#7-viewport-focus-band) · [margin drift](#8-margin-drift) · [glyph decode entry](#9-glyph-decode-entry) · [line draws on entry](#10-line-draws-on-entry) · [media settles on entry](#11-media-settles-on-entry)
- **[Pinned and scrubbed](#pinned-and-scrubbed):** [sticky card deck](#1-sticky-card-deck) · [sticky utility header](#2-sticky-utility-header) · [scroll progress chrome](#3-scroll-progress-chrome) · [pinned step swap](#4-pinned-step-swap) · [pinned photo dissolve](#5-pinned-photo-dissolve) · [window opens to full](#6-window-opens-to-full) · [nested zoom through](#7-nested-zoom-through) · [hero retreats](#8-hero-retreats) · [logo docks on scroll](#9-logo-docks-on-scroll) · [horizontal scrub rail](#10-horizontal-scrub-rail) · [section theme shift](#11-section-theme-shift) · [before and after collapse](#12-before-and-after-collapse) · [exploded teardown](#13-exploded-teardown) · [path draws with scroll](#14-path-draws-with-scroll) · [companion object](#15-companion-object) · [camera flight](#16-camera-flight) · [layers cross](#17-layers-cross) · [pixel boundary](#18-pixel-boundary) · [wheel gated stage](#19-wheel-gated-stage)
- **[Hover state](#hover-state):** [tone step](#1-tone-step) · [alpha tint chip](#2-alpha-tint-chip) · [opacity dim](#3-opacity-dim) · [dim and reveal arrow](#4-dim-and-reveal-arrow) · [dark surface ladder](#5-dark-surface-ladder) · [accent flip](#6-accent-flip) · [full invert](#7-full-invert) · [instant snap](#8-instant-snap) · [underline language](#9-underline-language) · [single accent on hover](#10-single-accent-on-hover) · [arrow nudge](#11-arrow-nudge) · [label roll](#12-label-roll) · [fill wipe](#13-fill-wipe) · [micro lift](#14-micro-lift) · [hard offset](#15-hard-offset) · [ring grow](#16-ring-grow) · [scale pop](#17-scale-pop) · [spring overshoot](#18-spring-overshoot) · [glow](#19-glow) · [media zoom](#20-media-zoom) · [card state change](#21-card-state-change) · [dim under cursor](#22-dim-under-cursor) · [border only card](#23-border-only-card) · [row fill](#24-row-fill) · [signature row](#25-signature-row) · [row expands](#26-row-expands) · [siblings recede](#27-siblings-recede) · [chevron flip](#28-chevron-flip) · [selective restraint](#29-selective-restraint)
- **[Marquee](#marquee):** [edge masked logo strip](#1-edge-masked-logo-strip) · [blur falloff strip](#2-blur-falloff-strip) · [clipped to frame](#3-clipped-to-frame) · [opposing chip rows](#4-opposing-chip-rows) · [ticker band divider](#5-ticker-band-divider) · [giant type marquee](#6-giant-type-marquee) · [live data ticker](#7-live-data-ticker) · [ghost text rows](#8-ghost-text-rows) · [media ribbon](#9-media-ribbon) · [state carrying band](#10-state-carrying-band)
- **[Product demo loop](#product-demo-loop):** [scripted cursor walkthrough](#1-scripted-cursor-walkthrough) · [autoplay tabs with timer](#2-autoplay-tabs-with-timer) · [typed input loop](#3-typed-input-loop) · [live state cards](#4-live-state-cards) · [camera move demo](#5-camera-move-demo) · [muted clip tile](#6-muted-clip-tile) · [schematic traffic](#7-schematic-traffic) · [multiplayer presence](#8-multiplayer-presence) · [generative glyph loop](#9-generative-glyph-loop) · [media pager control](#10-media-pager-control)
- **[Cursor effect](#cursor-effect):** [context label tag](#1-context-label-tag) · [instruction disc](#2-instruction-disc) · [brand dot cursor](#3-brand-dot-cursor) · [physics object](#4-physics-object) · [branded pointer](#5-branded-pointer) · [field reacts to pointer](#6-field-reacts-to-pointer)
- **[Page transition](#page-transition):** [colour wipe](#1-colour-wipe) · [slat wipe](#2-slat-wipe) · [in-place swap](#3-in-place-swap) · [theme reskin wipe](#4-theme-reskin-wipe) · [exposure flash](#5-exposure-flash) · [disc iris](#6-disc-iris)
- [Before you call it done](#before-you-call-it-done)

## What real sites do

**Most of the page stands still.** The median captured page has one animation running at rest, and that holds in every tier. Of 279 sites with at least three hover responses, 67 percent use no transform on any of them. Colour-only hover languages make up 68 percent of gold hover rows. A page that looks alive usually has one thing moving, and it is the product.

**Preloaders belong to a few genres.** The preloader family (flat plate, counter, performing mark, title card, wordmark dock) made up 20 percent of gold load rows and 56 percent of expressive ones. The split by genre is sharper.

| Genre | Share of load rows that hold the page behind a preloader |
|---|---|
| SaaS | 5% |
| Developer tools | 6% |
| AI | 14% |
| Finance | 19% |
| Local business | 22% |
| Ecommerce | 30% |
| Culture | 37% |
| Architecture, brand | 46% |
| Agency | 47% |
| Food and drink | 50% |
| Portfolio | 56% |

So if someone came to buy or to use, do not make them wait. If they came to feel something, you have a few seconds of credit.

**Top sites reveal with light, not travel.** Of 66 scroll reveal rows, 28 change only ink, opacity or focus while the type holds still, and only 3 are a rise-and-fade stagger. Analysts tag what is distinctive, so plain fade-ups are undercounted here. The finding still stands: where a strong site spends effort on a reveal, the words stay where they are.

**Travel is tiny.** Stated distances in the rows: Auth0 rises words 6px, Stripe Climate lifts a phone 8px, Apple Intelligence steps 10px, Factory rises 12px. Hover lifts have a median of 2px on main buttons and 1px on cards. The template default of 24 to 40px is three to ten times larger than the type and UI travel on these pages. Only a whole product window goes further, at 12 to 60px.

**Gold sites lean on the platform, expressive sites on libraries.** These are shares of pages whose shipped code contains each thing. Bundled code can carry a library without using it, so read these as upper bounds.

| In the bundle | Gold | Silver | Expressive |
|---|---|---|---|
| CSS scroll timelines | 22% | 22% | 8% |
| GSAP | 25% | 20% | 41% |
| ScrollTrigger | 22% | 14% | 39% |
| Lenis smooth scroll | 13% | 23% | 41% |
| SplitText | 9% | 4% | 13% |
| WebGL renderer | 14% | 10% | 34% |

Ordinary transitions and CSS timelines carry most gold motion. A scroll library is a choice to make for a reason, not a starting point.

**Hover is fast and small.** Measured on 516 sites.

| Control | Responds | What changes, among those that respond | Duration p25 / median / p75 |
|---|---|---|---|
| Nav link | 58% | Text colour 60%, fill 29%, transform 21% | 150 / 200 / 300 ms |
| Nav CTA | 86% | Fill 68%, text colour 34%, transform 18% | 150 / 200 / 280 ms |
| Main CTA | 78% | Fill 77%, transform 17%, shadow 11% | 150 / 200 / 300 ms |
| Secondary CTA | 77% | Fill 73%, text colour 33%, transform 13% | 150 / 200 / 300 ms |
| Text link | 51% | Text colour 61%, underline 18% | 150 / 200 / 300 ms |
| Card | 58% | Transform 42%, opacity 27%, fill 23% | 200 / 300 / 400 ms |
| List row | 50% | Text colour 58%, fill 33% | 150 / 200 / 300 ms |

Five facts sit under that table.

- **Doing nothing is normal.** About half of cards, rows and text links do not respond at all.
- **A third of hovers have no transition.** Between 29 and 37 percent of responding controls change in 0s, and 50 percent of text links do. A hard cut is a legitimate choice, not an oversight.
- **Fills move about 10 L\*.** Measured on solid buttons: 6 at p25, 10 at the median, 24 at p75. That is a clear step, not a whisper.
- **Direction depends on the fill.** Dark buttons usually lighten, by about 2 to 1 on main CTAs and 12 to 1 on secondary ones. Light and mid fills usually darken, by about 3 to 1. So never write one darken rule for every button.
- **Nobody runs one timing.** Only 21 percent of sites use a single duration and curve across controls. 38 percent use two, 26 percent three. But 86 percent stay on one or two curves. Keep the curves few and let durations differ by job.

**Durations by register.** Median hover transition in ms, with the middle half in brackets.

| Register | Median | Middle half |
|---|---|---|
| Gold, all registers | 200 | 150 to 200 |
| Dark precision | 200 | 150 to 200 |
| Light precision | 200 | 150 to 220 |
| Mono technical | 200 | 150 to 200 |
| Warm neutral | 200 | 150 to 250 |
| Photo led | 200 | 150 to 300 |
| Bold colour | 200 | 150 to 300 |
| Gradient light | 250 | 150 to 300 |
| Type led | 250 | 150 to 250 |

**Curves.** Shares of pages, gold tier in the first column and all pages in the second.

| Curve | Gold | All | What it does |
|---|---|---|---|
| `ease` | 55% | 53% | Browser default, the most common hover curve by far |
| `.4, 0, .2, 1` | 49% | 35% | The Tailwind and Material standard. The default for product UI |
| `0, 0, .2, 1` | 20% | 12% | A plain ease-out, used on fades and small entrances |
| `.25, 1, .5, 1` | 8% | 2% | Quart out, Stripe's main curve at 477 uses on one page |
| `.16, 1, .3, 1` | 5% | 5% | Long expo tail, for entrances |
| `.22, 1, .36, 1` | 5% | 5% | Slightly shorter tail, the usual entrance curve |
| `.215, .61, .355, 1` | 6% | 3% | Cubic out, Stripe's curve for quick colour and arrow changes |
| `.32, .72, 0, 1` | 1% | 1% | Sheet curve, Linear's entrance curve |
| `.44, 0, .56, 1` | 1% | 4% | Framer's default. All 69 pages that show it are Framer sites, so it is a fingerprint of the tool |

The sheet curve and the expo family are underrated by those figures, because those columns count computed styles on the page at rest, and entrances have often finished or live in script. In shipped bundles, `.32, .72, 0, 1` appears on at least 26 percent of gold pages, `.16, 1, .3, 1` on 23 percent, and `.22, 1, .36, 1` on 21 percent. That split is the lesson: hover runs on plain curves, and character curves are saved for entrances.

Load timings below were read from real strips at 0.5, 1.1, 1.9, 3.0, 4.5 and 6.5 seconds on a cold cache, so they include network and script start.

## What makes motion feel made

Generated motion has one duration, one curve, one distance and one trigger, applied to every block in document order. It reads as a process running. Made motion reads as decisions. These are the decisions.

**Read a curve by where it spends its time.** A strong out-curve covers 90 percent of its change in the first third. My first staged fade used `.32, .72, 0, 1` at 0.9s and looked finished by 0.3s, a pop rather than a settle. Linear's headline is still at about 25 percent at 1.1s, softly blurred. For a slow fade, use a gentle curve over a long duration, or the time you paid for never reaches the eye. Keep sharp out-curves for things that travel.

**Stagger by role, not by index.** A constant 100ms across a list is a metronome. Real sequences are uneven because the content is uneven. Line two of a headline lags line one by a beat, the subhead follows, the product waits for the words, and one small detail arrives last. Treat the hero as a sentence with commas, not a list. See `foundations.md` Lead and followers.

**Let one thing move.** Modern Treasury's whole hero load is one tag changing colour as its connector darkens. Astral draws one glyph around a still headline. Stillness is what makes that movement read. Add a second moving thing and the first one stops being an event.

**Use less than feels right.** Every first attempt in this chapter overshot. My tinted lift shadow at 28 to 32 percent read as a pink smudge, and the measured values on the same site are 10 and 16. Rises of 6 to 12px look like nothing in isolation and like quality on a page. When a value feels barely there at full speed, it is usually correct.

**Move meaning, not boxes.** A fade-up says nothing about the product. A status dot turning amber says what the product is for. Ramp's collapsing collage makes the argument by scrub. If the movement could sit on any website, it is decoration. Ask what in this business actually moves, and animate that.

**Let the person hold the clock.** Scroll-tied ink follows reading pace, so it never feels slow, but a reader who stops halfway sees a half-lit sentence, so treat it as a deliberate showpiece. Hover pauses an autoplay. A pinned step belongs to the wheel. Time-based sequences that a person cannot influence are the ones that feel like waiting.

**Make state changes interruptible.** Use transitions for anything a person triggers, because they reverse from wherever they are. A keyframe plays to its end and then snaps. Leave a card halfway through a hover and the difference is obvious. See `foundations.md` Springs and interruption.

**Give scripted things human timing.** A cursor on a straight line at constant speed is a robot. Animate x and y on two nested elements with different curves and the path becomes an arc. Dip scale to about .86 for 110ms on a click. Type in bursts: 38 to 84ms inside a word, 150 to 240ms at each space. Then hold the finished state for 2 seconds, because people need to read the result before the loop resets.

**Finish, then rest.** The best sequences settle and stay. Every loud moment needs a quiet stretch after it. See `foundations.md` Page score.

## Quiet against showy

| | Product grade | Showy |
|---|---|---|
| What moves | One object, usually the product | Every block in turn |
| First readable sentence | Under about 2s, usually at first paint | After the sequence ends |
| Entrance travel | 0 to 12px | 40px or more |
| Hover | Colour or tone, 150 to 300ms | Lift, shadow, scale and glow together |
| Scroll | `position:sticky`, one scrub on the page | Wheel hijacked, several pinned sections |
| Loops | Inside real UI, with a pause | Decoration behind the content |
| Ending | Settles and holds | Keeps performing |
| Justification | Shows what the product does | Shows what the developer can do |

Showy has its place. A portfolio, a launch or a film site can spend attention, and the expressive variants here are real and strong. The failure is showy motion on a page whose reader has a job to do.

## Replacing the fade-up

Before you add an entrance to a block, ask whether it needs one. The usual answer is no. Otherwise take the replacement below.

| You were about to fade up | Do this instead |
|---|---|
| The hero headline | Nothing, or [line or word rise](#8-line-or-word-rise) at 6 to 12px |
| The hero image | [Colour plate then media](#4-colour-plate-then-media) or [light arrives last](#12-light-arrives-last) |
| The product screenshot | [Product rises last](#9-product-rises-last) once, then let it run |
| A three-column feature row | Nothing, or [rise stagger row](#6-rise-stagger-row) inside that row only |
| A big statement | Nothing, or [line ink resolve](#2-line-ink-resolve). [Word ink scrub](#1-word-ink-scrub) only as a chosen showpiece |
| Stat lines | [Line ink resolve](#2-line-ink-resolve) |
| A catalogue grid | [Opacity in place](#5-opacity-in-place), or nothing |
| Every section on the page | Pick one section. Leave the rest alone. |

## Tokens

Add these once. The five named curves match `foundations.md`. The next three are measured.

```css
:root{
  --ease-settle:cubic-bezier(.22,1,.36,1);  /* default entrance */
  --ease-glide:cubic-bezier(.16,1,.3,1);    /* long coast, big things */
  --ease-soft:cubic-bezier(.33,1,.68,1);    /* gentle, slow fades */
  --ease-drive:cubic-bezier(.76,0,.24,1);   /* wipes, curtains */
  --ease-kick:cubic-bezier(.34,1.56,.64,1); /* overshoot, small things only */
  --ease-ui:cubic-bezier(.4,0,.2,1);        /* product hover and state */
  --ease-quart:cubic-bezier(.25,1,.5,1);    /* hover with a little character */
  --ease-sheet:cubic-bezier(.32,.72,0,1);   /* panels and sheets */
  --hover-tint:color-mix(in srgb,var(--ink) 6%,transparent);
  --hover-line:color-mix(in srgb,var(--ink) 27%,transparent);
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
}
```

That reduced-motion rule is a floor, not the whole job. Script-driven sequences must also check `matchMedia` and render their end state. See `foundations.md` Base page and motion gate.

## Ten motion languages

Variants only work as a system. A label roll, a soft lift and a hard cut on one page read as a sample book. Choose one row, then take load, scroll, hover and loops from it, so two pages built from different rows move differently. Let the deal or the brief decide. Each language lists what it never does, because that is what keeps it one language.

| Language | Tempo | Curve | Load | Scroll | Hover | Loops | Reference |
|---|---|---|---|---|---|---|---|
| Instrument | 150ms, instant for text | `--ease-ui` | Instant paint, or type first | Sticky utility only | Tone step, border only | Live state cards | Vercel, Neon, Exa |
| Soft focus | 100 to 160ms UI, 1.3s entrances | `--ease-sheet`, gentle fades | Staged fade stair | Line ink resolve | Dark surface ladder | Typed input | Linear |
| Living product | 150 to 300ms | `--ease-quart` | Product story assembles | Progress chrome, chapter nav | Dim and reveal arrow | Scripted cursor | Stripe |
| Warm hand | 100ms controls, 500ms text | Plain ease, expo for text | Tiles assemble, word rise | Sticky utility, row detail | Ring grow, signature row | Quiet video tiles | Claude, Anthropic |
| Reading pace | 200ms UI, scroll for everything else | Linear on scroll | Type first | Word ink scrub, focus band | Underline, tone step | One glyph loop | Groq, Baseten |
| Hard cut | 0ms | None | Instant paint, film cuts | Sticky, logo docks | Instant snap, full invert | Film with hard cuts | A24, Acne Studios, Cognition |
| Slow room | 300 to 500ms | `ease`, `--ease-soft` | Colour plate then media | Pinned photo dissolve | Media zoom 1.02 to 1.05, dim under cursor | Slow crossfade | 1 Hotels, Aman, Kinfolk |
| Signal | Stepped, 30 to 60ms a step | `steps()` | One object, glyph resolve | Pixel boundary, path draws | Single accent, instant snap | Generative glyph loop | Astral, Sourcegraph, Bun |
| Bright pop | 150 to 250ms | `--ease-settle`, a little `--ease-kick` | Word cycle, line rise | Theme shift, stacked colour | Scale pop, accent flip, tinted lift | Muted clips, band tickers | Headspace, Waymo, Spotify |
| Stage | 400 to 800ms | `--ease-drive`, `--ease-glide` | Counter, wordmark dock | Rail, sticky deck, nested zoom | Label roll, fill wipe, context tag | Long reel | Basic Agency, Spring/Summer, Prototype |

**Instrument.** Nothing travels, ever. Every control takes one tone step at 150ms on one curve. The only motion that draws the eye is in the product. Never lift, never glow, never fade up a section. Suits developer tools, docs, dashboards and pricing.

**Soft focus.** Entrances are slow and blurred, almost no travel, with UI answers as quick as 100ms. The contrast between a long arrival and an instant response gives it its calm authority. Never use a hard edge in an entrance, and never run hover above 200ms. Suits dark product sites.

**Living product.** The page is never quite still, because the product is always doing something real, and every state change has a small arrow or cursor in it. Never decorate: everything that moves is product. Suits payments, infrastructure and anything with a process to show.

**Warm hand.** Controls answer fast by growing a ring, while text colour eases slowly over 500ms, which gives the page a soft, unhurried tone. Rows and tiles feel placed by hand, slightly loose. Never overshoot, and never use a saturated glow. Suits AI, publishing, education and writing tools.

**Reading pace.** Scroll is the only clock. Statements ink in as you read, and everything else is calm. Spend it once per chapter. Never tie body copy to scroll, because a reader who jumps must find finished text. Suits AI, research, manifestos and annual reports.

**Hard cut.** Every change takes zero time. Links snap, buttons invert, film cuts. This reads as confidence and print, and it is the cheapest language to build. It needs strong value changes, since a small tone step with no easing just looks broken. Never fade anything. Suits fashion, culture, film, type-led studios.

**Slow room.** Everything takes longer than you expect and nothing bounces. Images breathe by 2 to 5 percent, and sections dissolve. Never use overshoot, a counter, or a fast hover. Suits hospitality, architecture, galleries and fine food.

**Signal.** Time is quantised. Things appear on a grid in steps, never along smooth curves, so the motion looks computed on purpose. Never use blur or a soft ease. Suits developer tools and technical brands with a pixel or mono mark.

**Bright pop.** Quick, rounded, friendly, with colour doing the work and small things bouncing. Bands of type run between sections. Keep overshoot under 200px wide. Never let a card wobble. Suits consumer apps, food, health and education.

**Stage.** The page is a performance with an opening, acts and a curtain. Long durations, big wipes, a smooth-scroll library and a custom cursor all belong here. It needs a skip, a fast repeat visit and a real reason. Never use it where someone came to buy. Suits agencies, portfolios and launch films.

## Load sequence

A load sequence has one job: get the reader to the first sentence, then show who this is. Everything in it is judged against that sentence. The moment a person can start reading is the real end of the load, whatever the animation is still doing.

What separates great from cheap is what the sequence does with the wait. Great ones turn a technical fact into a choice: the image is slow, so the plate is the colour of the footage and the headline is already there. Copy never waits for media. Layout never shifts. Things arrive in order of importance, and one thing carries the event. Cheap ones hide the page behind a spinner, or play one fade on every element, or reveal the headline last because that felt dramatic. A loader that takes longer than the page it hides is pure cost.

**Measured.** Gold sequences have a readable headline by about 1.9s or sooner, and the quiet ones are finished by 2 to 3s. Words stagger at about 140ms when they resolve one by one, and travel is 0 to 12px. Preloaders that hold the screen run 1.5 to 4s, and the best counters finish in under 2s. Reserve every media slot at its exact size, because no strong site in this set shifted layout on load except where noted.

The first 15 variants keep the page readable. The last 10 hold the stage, so they carry a cost.

<!-- v:motion.load-sequence/instant-paint -->
### 1. Instant paint

*Feeling: fast, sure of itself.*

No entrance. Every word and control is final at first paint, and one ambient thing keeps running. Stripe's home page does this: the ribbon drifts, a live counter ticks, and a sales card joins at about 5s. Polestar paints its copy and lets the film cut. Use it whenever you have one strong moving thing, and for docs, dashboards and any page where speed is the message. Do not use it on a static page with nothing moving, because then it is simply a page. Run the ambient object from CSS or a small canvas so it costs nothing to start.

**Seen on** Stripe, Polestar, Yamauchi No.10 Family Office. **Suits** gradient-light, photo-led, mono-technical; finance, brand.

<!-- v:motion.load-sequence/opacity-settle -->
### 2. Opacity settle

*Feeling: a print developing.*

The whole page appears in its final position at low ink and comes up as one sheet, 0.3 to 1s, with no stagger. Block uses `cubic-bezier(.25,0,.5,1)` at 0.3 to 0.4s. It marks arrival and hides font swap, with no travel at all. Use it for type-led and minimal sites where a stagger would feel fussy. It is close to nothing, so do not pair it with a heavier reveal further down.

**Seen on** Block, George Thomas Hatton, Muda 26, Weekstack. **Suits** light-precision, type-led, photo-led, warm-neutral; finance, portfolio, culture, saas.

<!-- v:motion.load-sequence/type-first-media-fills -->
### 3. Type first, media fills

*Feeling: the page is already here.*

The most useful load on the web, and the default for product pages. Nav, headline and buttons paint at once with the media slot reserved, and the media fades in when ready. Public's film card arrives about 1.1s in, already playing. Cal.com holds pale slots inside its headline and fills them, so nothing shifts. Analogue fades a render over 0.3s on `cubic-bezier(0,0,.2,1)`. Use it wherever copy can be server rendered. Keep the fade under 0.4s, and let the media start playing before it fades in, so the first frame seen is already alive.

**Seen on** Public, Analogue, Cal.com, Expo, Asana, 14 sites in all. **Suits** light-precision, photo-led, expressive, render-3d; ai, saas, finance, agency.

```css
.slot{aspect-ratio:16/9;background:var(--surface);border-radius:12px;overflow:hidden}
.slot :is(img,video){width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s cubic-bezier(0,0,.2,1)}
.slot.ready :is(img,video){opacity:1}
```

<!-- v:motion.load-sequence/colour-plate-then-media -->
### 4. Colour plate then media

*Feeling: designed before it has even loaded.*

A flat plate in the footage's own colour holds the hero, with type already on it. ECI's plate is a deep green exactly the size of the video, and at 1.9s it still reads as a finished poster. The footage arrives near 3s and nothing moves. The analyst's estimate of 1.5s was optimistic. That is the point of the pattern: it does not matter when the video lands. Sample the plate from the first frame of the media, because a mismatched plate flashes. Use it for any full-bleed film or photo. For repeat variants, a blurred thumbnail of the first frame works as the plate.

**Seen on** ECI, Prägen Hätlen, Scale AI, Vivien's Creative, VanMoof, 26 sites in all. **Suits** photo-led, bold-colour, dark-precision, render-3d; ai, agency, hospitality, ecommerce.

```html
<div class="stage" style="background:var(--plate)"><!-- --plate is sampled from the media's first frame -->
  <video muted playsinline autoplay loop oncanplay="this.parentNode.classList.add('ready')"></video>
  <h1>Headline stays put</h1>
</div>
```
```css
.stage{position:relative;overflow:hidden}
.stage video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1.2s var(--ease-soft)}
.stage.ready video{opacity:1}
.stage h1{position:relative;color:#fff}
```

Start the fade from the media's own ready event. A fixed delay flashes on a fast connection and arrives late on a slow one.

<!-- v:motion.load-sequence/exact-skeleton -->
### 5. Exact skeleton

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

**Seen on** Stripe Customers, Comet, New Exhibitions, Stripe Pricing, Airbnb, 9 sites in all. **Suits** light-precision, photo-led, type-led, warm-neutral; finance, culture, ai, hospitality.

<!-- v:motion.load-sequence/staged-fade-stair -->
### 6. Staged fade stair

*Feeling: calm, composed, nothing unusual.*

The nav is solid from frame one. Then the headline comes up from almost nothing, softly blurred, line by line, then the subhead, then the product window, with a small detail last. On Linear the headline is about 25 percent and still blurred at 1.1s, full by 1.9s, and the window is complete by 3s. Use it for premium product pages with a dark or quiet ground. The order is the design. Do not add travel, and do not skip the blur, because blur is what removes the sharp edge of an opacity fade.

**Seen on** Linear, Brilliant, Paco Coursey, Lightspeed, Kinfolk, 17 sites in all. **Suits** warm-neutral, type-led, photo-led, light-precision; portfolio, agency, local-business, food-drink.

```css
@keyframes stair{from{opacity:.02;filter:blur(8px)}to{opacity:1;filter:none}}
.s{animation:stair 1.3s var(--ease-ui) both}
.s1{animation-delay:.3s}    /* headline, line one */
.s2{animation-delay:.48s}   /* headline, line two lags by a beat */
.s3{animation-delay:.72s}   /* subhead */
.s4{animation-delay:1.25s;animation-duration:1.1s} /* product */
```

Split the headline into lines by hand, in markup, so they cannot rewrap on a font swap. Rendered on `--ease-sheet` at 0.9s, the same stair looked finished at 0.3s. The slow gentle curve above is what matches.

<!-- v:motion.load-sequence/word-blur-resolve -->
### 7. Word blur resolve

*Feeling: a thought coming into focus.*

Words resolve left to right from blur and a saturated tint to sharp ink. On Greylock the first words are mid-resolve at 1.1s in a clear pale blue, and the line is done by 1.9s, so the wave runs at about 140ms a word. Use it on one short headline, six or seven words at most. Long headlines take too long at this rate, and speeding it up turns it into a smear. Do not blur body copy. For mechanics, see `load.md` Choreographed hero.

**Seen on** Greylock, Linear Method, Monark Markets, Medusa622, Loopcraft, 6 sites in all. **Suits** light-precision, dark-precision, photo-led; finance, agency, saas, local-business.

```css
h1 span{display:inline-block;animation:resolve .75s var(--ease-soft) both;animation-delay:calc(.3s + var(--i)*140ms)}
@keyframes resolve{
  from{opacity:.1;filter:blur(10px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  60%{opacity:1;filter:blur(2px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  to{filter:none;color:var(--ink)}}
```

Put `aria-label` on the `h1` and `aria-hidden` on each span, or a screen reader spells out the split. The mid-animation colour is the difference between this and a generic blur. My first pass faded a washed tint at 90ms a word, which read as lag rather than focus.

<!-- v:motion.load-sequence/line-or-word-rise -->
### 8. Line or word rise

*Feeling: quiet confidence.*

The legitimate fade-up. Words or lines rise 6 to 12px with a short stagger, while the controls around them are already in place. Auth0 rises its words about 6px on flat violet, then the gradient blooms once they have landed. Sierra runs three lines about 0.5s apart over a playing film. Use it on headlines you want to feel placed. For a masked rise, take `load.md` Line mask. Stay under 12px, and never apply it to more than the hero.

**Seen on** Auth0, 360Rides, North Hub Partners, Sierra, Better Stack, 8 sites in all. **Suits** photo-led, dark-precision, soft-pastel, expressive; devtool, other, portfolio, agency.

<!-- v:motion.load-sequence/product-rises-last -->
### 9. Product rises last

*Feeling: the page is ready, here is the thing.*

Copy and backdrop first, product last. Factory fades its CTAs up from about 12px, then the app window rises from below the panel edge. Stripe Billing lets a browser sheet rise over the ribbon, then populates panels in steps with a chat prompt last. Buildkite then starts its counters ticking. Use it on product marketing heroes. Crop the product at the fold so it has somewhere to rise from. Never delay the CTA, because conversion UI is present from the start on every strong example.

**Seen on** Buildkite, Factory, Stripe Billing, AuthKit, Devin Desktop, 8 sites in all. **Suits** light-precision, gradient-light, warm-neutral; devtool, ai, finance, saas.

<!-- v:motion.load-sequence/product-story-assembles -->
### 10. Product story assembles

*Feeling: the load is the demo.*

The load plays what the product does. On Stripe Climate a colour band slides down to rest as a receipt fades in and a phone rises 8px through it, with a banner last. On Soundsensing a status card shows three green dots and one turns amber as an alert appears. Tana starts with empty frames, then adds video, then the speaker ring and a live caption, so it reads as a running call. Use it when your product has a sequence worth showing, and limit it to five beats. Each beat must be a separate object. Static copy on the left keeps it readable.

**Seen on** Stripe Climate, Apple Intelligence, Soundsensing, Tana, Vite, 8 sites in all. **Suits** light-precision, gradient-light, dark-precision, photo-led; ai, saas, finance, devtool.

<!-- v:motion.load-sequence/one-brand-object-moves -->
### 11. One brand object moves

*Feeling: authored, and cheap to run.*

Headline static, one owned object performs. Astral's glyph grows from three heads at once around a still headline. Modern Treasury flips one tag at a time as its connector darkens, like a payment running down a rail. Martin Development raises its wordmark behind a roofline, which proves the depth of the scene. Use it when the brand has a mark, line or object worth watching. This is the best value on the list: strong recall at almost no weight.

**Seen on** Astral, Modern Treasury, Elyx, Speakeasy, Resend, 19 sites in all. **Suits** light-precision, bold-colour, type-led, dark-precision; devtool, agency, saas, ai.

```css
.mark rect{fill:var(--accent);opacity:0;animation:on 1ms steps(1) forwards;animation-delay:calc(.25s + var(--t)*1ms)}
@keyframes on{to{opacity:1}}
```
```js
// --t per block: several heads grow at once and meet, with a little jitter
const heads=[0,17,35];
const tOf=i=>Math.min(...heads.map(h=>Math.abs(i-h)))*105+((i*7)%5)*26;
```

Size the object well past the headline and put it behind the type. My first try was one head on a 520px mark that finished in 1.4s, and it read as a progress bar. Several heads, more size and 2 to 3s read as growth. Under reduced motion, show the finished mark.

<!-- v:motion.load-sequence/light-arrives-last -->
### 12. Light arrives last

*Feeling: lit rather than loaded.*

Type and layout are final, then only light changes. Stripe Sessions raises its ribbon from a 25 percent pastel ghost to full saturation by 1.1s, with no slide or scale. mymind's headline goes from 40 percent grey to black, then a gradient ring blooms outward over about 2s. SpaceX lets the planet come up after the copy. Use it for one hero render or glow. It is readable before the show begins, and that is the whole point. A ghost state of the image also means the hero never sits empty.

**Seen on** Stripe Sessions, mymind, Bitnomi, SpaceX, Raycast Store, 7 sites in all. **Suits** gradient-light, dark-precision, render-3d, photo-led; brand, saas, finance, devtool.

```css
.render{animation:lit 1s var(--ease-soft) .2s both}
@keyframes lit{from{opacity:.25;filter:saturate(.6)}to{opacity:1;filter:none}}
```

<!-- v:motion.load-sequence/headline-word-cycle -->
### 13. Headline word cycle

*Feeling: one line, several products.*

One word loops inside the headline. Customer.io swaps its last word every 2s or so, Spline retypes a word with a selection box and caret, and Substack rotates a card stack to match. Use it when one sentence must cover several audiences or formats. Animate the width or centre the line deliberately, because a jumping line is the main failure. Customer.io's banner dropping in also pushes its whole hero down about 40px at 1.1s, a layout shift worth not copying. Keep three or four words, and stop for reduced motion on the first.

**Seen on** Spline, Customer.io, Render, motusmade studio, Headspace, 10 sites in all. **Suits** light-precision, dark-precision, illustrated, gradient-light; saas, devtool, agency, health.

<!-- v:motion.load-sequence/hero-media-cycle -->
### 14. Hero media cycle

*Feeling: the page is alive from frame one.*

The hero is running when you arrive. Nicole Heim swaps each half of a split hero on its own beat, one side at a time. TR Studio holds an interior for about 5s, then crossfades over 1.5s, measured. The rule is that nothing else moves and type stays locked. Use it for studios, fashion, architecture, and any brand with deep photography. Independent beats on each panel are what make it feel edited rather than like a carousel. A pause control is required on anything that runs past 5s.

**Seen on** Nicole Heim Studio, TR Studio, Ideogram, Monzo, Marine Layer, 10 sites in all. **Suits** photo-led, warm-neutral, bold-colour, expressive; fashion, agency, architecture, finance.

<!-- v:motion.load-sequence/typed-title -->
### 15. Typed title

*Feeling: the sentence is being written.*

Kiro reverses the usual order: body, CTAs and product first, then the headline types over about 1.5s, making the headline the event. Sweeply types only its second line, in a tint. Use it when the product is about writing or making. Reserve the final width of the line first. Use it once, and never on a line longer than about 30 characters, since people will wait for it to finish.

**Seen on** Kiro, Sweeply, The Boring Blog, Typohypergraphic Object. **Suits** bold-colour, gradient-light, type-led, illustrated; ai, saas, culture, editorial.

<!-- v:motion.load-sequence/tiles-assemble -->
### 16. Tiles assemble

*Feeling: a collection being laid out by hand.*

Claude's hero starts with tiles smaller, denser and rotated about 3 degrees, spreading and straightening over about 3s as headline words rise. Per Appelgren flies a tilted stack in and fans it out. Elisa Breyer stretches thin slivers to full height across the grid. Use it where the product is a collection of objects and the layout has a natural looseness. It takes up to 6s on some sites, so keep the headline independent and readable by 2s. End on a real layout, not a pile.

**Seen on** Claude, Per Appelgren, New Material, Elisa Breyer Archive, Aniket, 15 sites in all. **Suits** photo-led, light-precision, bold-colour, expressive; portfolio, culture, ai, agency.

<!-- v:motion.load-sequence/focus-pull -->
### 17. Focus pull

*Feeling: a lens racking.*

A hero image sharpens from heavy blur over a colour sampled from it. The Candy Vault starts at about 40px over lilac, for about 2s. Google's Language Explorer starts with a camera almost touching the surface and pulls back until the globe is sharp. Use it when the image is the page, and treat it as the placeholder strategy too. Blur a tiny inline thumbnail and the sharp version can replace it without a flash. See `load.md` Image opening.

**Seen on** Oliver Dupuy, Fora, Language Explorer, The Candy Vault, Mala Project, 6 sites in all. **Suits** bold-colour, render-3d, photo-led, expressive; other, architecture, agency, ecommerce.

<!-- v:motion.load-sequence/colour-plate-mark -->
### 18. Colour plate mark

*Feeling: a house arriving.*

Now the stage variants, where the page waits. A flat screen in the brand colour with one small mark, then the page. Studio Dado's taupe hold runs about 3s before its monogram even appears, which is too long. Aim for under 1.5s total. Joby draws a logo stroke on full brand colour and lets a photo frame rise over it, which is the better shape: the plate does something and leaves. Use it for hospitality, architecture, professional practices. Set a cookie or session flag so it plays once.

**Seen on** Studio Dado, Villa Aurelia, Fabrica Partners, Joby, Le Saint Georges, 24 sites in all. **Suits** photo-led, render-3d, type-led, expressive; food-drink, finance, agency, architecture.

<!-- v:motion.load-sequence/percent-counter -->
### 19. Percent counter

*Feeling: real anticipation.*

A counter works when it tells the truth and hands off well. Prototype's counter reaches 99 by 1.1s beside a column of stills that resolves straight into the hero film. That is the best version here: fast, tied to real assets, and the waiting object becomes the first scene. IRONHILL pairs a 180px counter with a walking creature, charming, but the page is still loading at 6.5s. Drive it from real loading progress, and cap it at about 2s. See `load.md` Counter hand-off.

**Seen on** Prototype, Telkom-OT, Wild, ROEH Law & Tax, Yuriy Vitrenko's Library, 13 sites in all. **Suits** expressive, type-led, photo-led, bold-colour; other, culture, agency, local-business.

<!-- v:motion.load-sequence/mark-performs -->
### 20. Mark performs

*Feeling: only this brand would do this.*

The logo does something specific. Michelle Kaye's monogram writes itself from a single dot over about 3s. Overtime's clock hands sweep to the real time before any UI appears. Wildbran walks a giraffe across the screen, then wipes to the film within 2.5s. Use it only with an owned mark that has a reason to move. A generic spinning logo is the cheapest thing on this list. Pick the behaviour from what the brand is: a clock tells time, a signature is signed.

**Seen on** Wildbran, Structure Consulting Engineers, Locomotive, Michelle Kaye - Fine Arts, Lacoste Ace Breaker, 14 sites in all. **Suits** photo-led, warm-neutral, bold-colour, expressive; agency, portfolio, food-drink, architecture.

<!-- v:motion.load-sequence/wordmark-docks-to-nav -->
### 21. Wordmark docks to nav

*Feeling: an introduction, then it steps aside.*

One object makes the whole trip. BIG holds a wordmark on black, then the panel rises as a shrinking band while the mark travels up-left into its nav slot, with the list already in place underneath. Royal Ontario Museum resizes its wordmark into a bottom-left lockup by about 4s. Use FLIP so a single element travels, and put the real logo in the nav so it is ready to land on. See `load.md` Logo to nav. The match between the end of this move and the resting nav is what sells it, so check the frame where they meet.

**Seen on** BIG, Royal Ontario Museum, LEDUP, Olivier Larose, Special Production Agency, 8 sites in all. **Suits** photo-led, type-led, warm-neutral; portfolio, agency, architecture, culture.

<!-- v:motion.load-sequence/title-card-hold -->
### 22. Title card hold

*Feeling: the film has started.*

Hold still, then cut. International Magic shows a blank frame for 0.5s, a huge two-line title for about 2s, then swaps to a small statement with the nav, and media peeks up last. Basic Agency holds a stacked wordmark for 1s and hard cuts into the reel. The stillness is the craft here, so do not animate the card. Use it for studios with something to say, at most once per session.

**Seen on** International Magic, Bakstad Construction, Theatre Memory, Velvele, Basic Agency, 6 sites in all. **Suits** type-led, light-precision, photo-led, gradient-light; agency, architecture, culture.

<!-- v:motion.load-sequence/iris-or-sheet-reveal -->
### 23. Iris or sheet reveal

*Feeling: a shape opens the page.*

A shape from the brand opens into the site. Meridian parts a pale ring like a dividing cell, and it is all done within 2s. Symbol Studio grows a white stadium from the centre until it becomes the page sheet. N26 expands a small framed image to full-bleed from a flat teal. MetaLab grows a central video tile to full screen and flips the page dark. Animate `clip-path` or use FLIP, not width and height. The shape must come from the logo or product, or it is a stock wipe. See `load.md` Curtain and shutter.

**Seen on** Leo Cussen Centre for Law, Symbol Studio, Apptronik, N26, Rivian, 9 sites in all. **Suits** light-precision, photo-led, render-3d, warm-neutral; agency, brand, education, finance.

<!-- v:motion.load-sequence/glyph-or-pixel-resolve -->
### 24. Glyph or pixel resolve

*Feeling: decoded, slightly tense.*

Pixels or glyphs step into place. Clarisse Michard's logo halves its block size at each step, with a small counter. Groq assembles a bolt from 8px squares on orange, then lets scattered pixels stay at the margins. That leftover is a nice touch, since the transition leaves evidence on the page. Use `steps()` rather than a smooth tween, and hold line breaks so nothing reflows. Suits mono-technical and AI brands. See `load.md` Decode.

**Seen on** Visora, Bohdan Ratiiev, Clarisse Michard, Groq, SUTÉRA. **Suits** mono-technical, type-led, render-3d; portfolio, ai.

<!-- v:motion.load-sequence/film-opening -->
### 25. Film opening

*Feeling: a keynote reveal.*

A scripted opening of 4 to 6s. Fairphone's case opens, a second joins, the headline appears, and the crop tightens until the product fills the screen. YLEM opens on a white x-ray of a watch, with a render fading through it, showing construction before surface. Use it for a single launch page with one object. It needs a skip, it must run only on first visit, and the copy has to appear by the end of it no matter what.

**Seen on** X8 Eyewear, Meta AI, Fairphone, Boom, YLEM. **Suits** photo-led, light-precision, render-3d; fashion, ai, ecommerce, brand.

### Mistakes that cheapen a load

- **One fade on everything.** The tell of a template. Order by importance, or do not animate.
- **A strong out-curve on a slow fade.** It looks finished in a third of the time you set. My first stair did this.
- **Holding the headline for an image.** Copy never waits. Every gold example here paints type first or holds it on a plate.
- **A plate that does not match.** A white flash into a dark film is the opposite of designed. Sample the first frame.
- **Timed fades instead of ready events.** They flash on fast connections and arrive late on slow ones.
- **Layout shift mid sequence.** A late banner that shoves the hero down undoes everything else. Reserve its height.
- **A spinner on brand.** A logo in a spinner is still a spinner.
- **A preloader on every visit.** Once is an introduction. Twice is a toll.
- **A long stagger on long text.** Word by word on a 20-word headline takes three seconds. Split by line instead.
- **No end state for reduced motion.** Anything held at zero opacity by script must render finished when motion is off.

## Scroll reveal

A scroll reveal has one job: put attention where the reader has just arrived. It works when it sets pace, and fails when it only proves that scrolling happened. The first question is whether this block needs a reveal at all. For most blocks the answer is no, because content that is simply there reads as more confident.

What separates great from cheap is what changes. Great reveals change light or ink while type stands still, run once, and spend it on one statement per chapter. Tying the ink to scroll hands the reader the clock, but it is the showy option, because a paused reader sees a half-lit sentence (`anti-patterns.md`, Scrubbed reading, and `scroll.md`). Choose it on purpose, never by default. Cheap reveals move every block 40px on a timer, so a fast reader catches the page half-empty and a person returning up the page watches it all again. A reveal must never hide content from someone who jumps to an anchor, prints, or scrolls quickly.

**Measured.** Ink reveals start at 15 to 20 percent, go up to 40 to 60 for line-level fades, and finish at full ink. The ink front sits around reading height, between about 45 and 80 percent of the viewport. Stagger inside a row is 40 to 80ms over 0.3 to 0.5s. CSS scroll timelines are in the bundles of 22 percent of gold pages, enough for most of these.

<!-- v:motion.scroll-reveal/word-ink-scrub -->
### 1. Word ink scrub

*Feeling: pace follows the reader.*

The signature reveal of current product sites. A statement starts as pale ink and darkens word by word, tied to scroll position, never to time. On Baseten a statement of about 56px starts at about `#b8b8b8` with a sharp front around the word in progress and its first line indented to the second column. Groq spreads the change over about 3 lines at reading height, so grey to ink passes mid-sentence. Scale AI carries a colour tint in the unlit words, and fades the text out again as you leave. Use it for one statement per chapter, 30 to 60 words, 34 to 72px. Do not use it on body copy, because a reader who jumps must find finished text.

**Seen on** Scale AI, Baseten, Loopcraft, LEA WINERY, Plvs Ultra, 16 sites in all. **Suits** type-led, dark-precision, light-precision, photo-led; ai, local-business, food-drink, other.

```html
<p class="ink" id="s">Your statement goes here, one idea, thirty to sixty words.</p>
```
```css
.ink{font:500 56px/1.11 var(--font-display);letter-spacing:-.02em;text-indent:2.1em;max-width:1120px;text-wrap:pretty}
.ink span{opacity:var(--a,1)}
```
```js
const el=document.getElementById('s'),text=el.textContent;
el.setAttribute('aria-label',text);
el.innerHTML=text.split(' ').map(w=>`<span aria-hidden="true">${w}</span>`).join(' ');
const spans=[...el.children],FLOOR=.2,FRONT=5;
function paint(){
  const r=el.getBoundingClientRect(),vh=innerHeight;
  const p=Math.min(1,Math.max(0,(vh*.8-r.top)/(r.height+vh*.35)));
  const head=p*(spans.length+FRONT);
  spans.forEach((s,i)=>{const t=Math.min(1,Math.max(0,(head-i)/FRONT));s.style.setProperty('--a',(FLOOR+(1-FLOOR)*t).toFixed(3))});
}
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
  addEventListener('scroll',()=>requestAnimationFrame(paint),{passive:true});paint();
}
```

Keep spans inline. `inline-block` kills kerning across word gaps and can change line breaks. `FRONT` sets the softness: 2 gives a Baseten front, 5 to 8 a Groq gradient. Check the floor against the ground, because the unlit text must still be readable at rest for anyone who stops mid-way. Native version: `scroll.md` Native CSS with animation-timeline.

<!-- v:motion.scroll-reveal/line-ink-resolve -->
### 2. Line ink resolve

*Feeling: weighted and calm.*

The same idea at line or paragraph level, and much cheaper. Expo holds stat lines at about 15 percent until each one enters. Revolut brings a heading from about 70 percent to full white as it settles. Nicole Heim darkens paragraphs from 60 percent with no split at all. Use it for stat stacks and short statements. It needs no text splitting, so it survives any language and any font.

**Seen on** Nicole Heim Studio, Revolut, International Magic, Loops, Expo, 8 sites in all. **Suits** photo-led, light-precision, warm-neutral, bold-colour; agency, finance, devtool, saas.

```css
@supports (animation-timeline:view()){
  .line{animation:ink linear both;animation-timeline:view();animation-range:entry 20% cover 42%}
  @keyframes ink{from{opacity:.15}to{opacity:1}}
}
```

<!-- v:motion.scroll-reveal/blur-front-wipe -->
### 3. Blur front wipe

*Feeling: an idea resolving as it is read.*

A heading resolves behind a moving front with three states: settled, a coloured band, then blurred text ahead. Render sets near-black settled letters, a plum-to-violet gradient at the front, and blurred pale letters beyond, with the second line waiting blurred below. Use it on one heading per section at most, on a light ground. It is rich, so the body copy beneath stays still.

**Seen on** Render, Theatre Memory, motusmade studio, InkTree. **Suits** light-precision, type-led, illustrated; devtool, culture, agency, ai.

```html
<h2 class="h" aria-label="Your heading in full">
  <span class="ln" aria-hidden="true"><i>First line of heading</i><b>First line of heading</b></span>
  <span class="ln" aria-hidden="true"><i>second line</i><b>second line</b></span>
</h2>
```
```css
.ln{position:relative;display:block;width:fit-content;--x:calc(var(--p,0)*150% - 30%)}
.ln b,.ln i{font:inherit;display:block;white-space:nowrap}
.ln i{position:absolute;inset:0;color:color-mix(in srgb,var(--ink) 34%,transparent);filter:blur(5px);
  mask:linear-gradient(90deg,transparent calc(var(--x) + 6%),#000 calc(var(--x) + 26%))}
.ln b{color:transparent;-webkit-background-clip:text;background-clip:text;
  background-image:linear-gradient(90deg,var(--ink) var(--x),
    color-mix(in srgb,var(--accent) 60%,var(--ink)) calc(var(--x) + 8%),
    var(--accent) calc(var(--x) + 16%),
    color-mix(in srgb,var(--accent) 35%,var(--bg)) calc(var(--x) + 24%),transparent calc(var(--x) + 30%))}
@media (max-width:760px),(prefers-reduced-motion:reduce){.ln b,.ln i{white-space:normal}.ln i{display:none}.ln b{background:none;color:var(--ink)}}
```
```js
const ls=[...document.querySelectorAll('.ln')],h=document.querySelector('.h');
function paint(){const r=h.getBoundingClientRect(),vh=innerHeight,p=Math.min(1,Math.max(0,(vh*.9-r.top)/(vh*.5)));
  ls.forEach((l,i)=>l.style.setProperty('--p',Math.min(1,Math.max(0,p*ls.length-i)).toFixed(3)))}
addEventListener('scroll',()=>requestAnimationFrame(paint),{passive:true});paint();
```

My first build coloured each character in its own span. It looked thin and stepped, a few letters of colour on a grey line. Two layers per line, a sharp one painted by a moving gradient and a blurred ghost masked to what lies ahead, give the wide smooth front of the real thing with no text splitting.

<!-- v:motion.scroll-reveal/blur-in-on-entry -->
### 4. Blur in on entry

*Feeling: soft focus, unhurried.*

Copy sharpens from 8 to 12px blur as it reaches the viewport. New Material uses about 8px over about 0.4s on `.22,1,.36,1` with no translate, and the sentence is still soft while the deck settles. Use it for display lines on premium sites. Keep it off small text, where blur reads as a rendering bug, and animate at most a few elements at once, because `filter` is expensive on a large area.

**Seen on** New Material, Poeza, Clevr Blends, HYDROFLOW. **Suits** light-precision, photo-led, bold-colour, render-3d; food-drink, agency, fashion.

<!-- v:motion.scroll-reveal/opacity-in-place -->
### 5. Opacity in place

*Feeling: respectful, nearly invisible.*

Items fade where they stand. Stone Island measures `opacity .5s cubic-bezier(.25,1,.5,1)`, the dominant curve on the site at 53 uses, with no offset. Use it on catalogues and long grids where moving items would feel like the page is shifting under the reader. If a block needs a reveal and you have no reason for anything else, use this rather than a rise.

**Seen on** Stone Island, Fred. **Suits** mono-technical, photo-led; fashion, ecommerce.

<!-- v:motion.scroll-reveal/rise-stagger-row -->
### 6. Rise stagger row

*Feeling: a set arriving together.*

The fade-up, done properly, on one row of peers. Apple Intelligence catches a row at full, about 50 and about 10 percent opacity, each card about 10px lower than the last, on `.25,.1,.3,1`. Forma24 staggers a table diagonally from the top-left. Use it inside one row, and only where items are real peers. Run it once. Never chain it down the page, and never stagger across rows.

**Seen on** Apple Intelligence, Forma24, Storybook. **Suits** dark-precision, light-precision; ai, devtool, agency.

```css
.js .r{opacity:0;transform:translateY(10px)}
.js .in .r{opacity:1;transform:none;transition:opacity .5s var(--ease-quart),transform .6s var(--ease-quart);transition-delay:calc(var(--i)*70ms)}
```
```js
document.documentElement.classList.add('js');
new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),
  {rootMargin:'0px 0px -12% 0px'}).observe(document.querySelector('#row'));
```

Hide only behind the `js` class, so content appears if the script fails. The row, not each card, is what you observe, so that a row entering together starts together.

<!-- v:motion.scroll-reveal/viewport-focus-band -->
### 7. Viewport focus band

*Feeling: one thing in focus at a time.*

Rows brighten near mid-viewport and dim as they leave. Inngest uses opacity on 0.3 to 0.5s transitions. On lorisbukvic the central row of a CV brightens and its columns part about 25px, with others holding at about 35 percent. Use it for process lists and timelines. Keep a readable floor, and do not mix this with a pinned section nearby, because two attention systems will fight.

**Seen on** Inngest, Felix Haas, lorisbukvic.graphics. **Suits** dark-precision, type-led, render-3d; portfolio, devtool.

<!-- v:motion.scroll-reveal/margin-drift -->
### 8. Margin drift

*Feeling: something alive at the edge.*

Only small marginal objects move. Notion Calendar's stickers fade in near their heading and drift at a different rate from the text, some still at about 30 percent on arrival, on measured CSS scroll timelines. Panels and type stay still. BIG breathes a column's width between about 394 and 434px as you scroll. Use it to add life to a calm page, 20 to 80px of travel at most. Parallax on anything larger is where this starts to feel like an effect. See `scroll.md` Parallax depth layers.

**Seen on** Notion Calendar, BIG, Stripe Blog, White Cube, Framework, 8 sites in all. **Suits** light-precision, photo-led, gradient-light, illustrated; saas, editorial, culture, ecommerce.

<!-- v:motion.scroll-reveal/glyph-decode-entry -->
### 9. Glyph decode entry

*Feeling: a data read-out.*

Small mono labels enter as random glyphs and resolve left to right. Prägen Hätlen uses it on callouts and FAQ titles only, while body copy fades normally. Bohdan Ratiiev enters thumbnails as a coarse glyph mosaic. Use it on labels of about four words or fewer, in a mono face. Longer text becomes an annoyance. Astral types a heading with a 4px caret on a colour band, once. See `load.md` Decode.

**Seen on** Prägen Hätlen, Astral, Bohdan Ratiiev, Paradigm. **Suits** mono-technical, render-3d, bold-colour; brand, devtool, portfolio, finance.

<!-- v:motion.scroll-reveal/line-draws-on-entry -->
### 10. Line draws on entry

*Feeling: a circuit connecting up.*

ReadMe runs 1px coloured paths along the grid as you scroll, branching around headings and ending in small nodes, with sections fading in behind. It links the page into one object. Use it on technical pages with a visible grid. Keep the line on the grid and behind the type. See `scroll.md` SVG path drawing.

**Seen on** ReadMe, Reflect. **Suits** mono-technical, render-3d; devtool, saas.

<!-- v:motion.scroll-reveal/media-settles-on-entry -->
### 11. Media settles on entry

*Feeling: the picture does the arriving.*

Text stays still and media enters. Effepinna anchors video to the right margin and grows it leftward from about 666 to 810px, likely 0.78s on `.22,1,.36,1`. Stripe's card reader rises with its screen crossfading from processing to an amount. Anchor to one edge so the move has a direction, and if the media can change state as it arrives, take that opportunity.

**Seen on** Stripe Payments, Alessandro Stella, Effepinna Studio, Quynh Folio. **Suits** warm-neutral, gradient-light, bold-colour, expressive; portfolio, finance.

### Mistakes that cheapen a reveal

- **Revealing everything.** If every block animates, none of them mean anything.
- **Replaying on the way back up.** Reveals run once. The exception is scrubbed ink, which is tied to position and so reverses by nature.
- **Timing a statement.** A paragraph on a timer is faster or slower than the reader. Tie it to scroll.
- **A floor too low.** At 5 percent the text looks missing, and a person who pauses thinks the page is broken. Stay at 15 to 20.
- **Hiding content with CSS alone.** If script fails, the page stays blank. Gate behind a `js` class.
- **Splitting with `inline-block`.** It breaks kerning and can reflow lines. Use inline spans, and add `aria-label` to the parent.
- **Per-character colour for a gradient front.** It looks thin. Use a clipped gradient over a blurred ghost layer.
- **A scrubbed section beside a pinned one.** Two systems compete for the same scroll. Leave a quiet section between.

## Pinned and scrubbed

Pinning stops the page so that one idea can change in place. Scrubbing hands the timeline to the reader. Together they are the most powerful thing on the page and the easiest to abuse, because a pinned section takes the scroll away from someone who may simply want to get past it.

What separates great from cheap is whether the pin earns its height. Great pins show something that could not be shown by stacking: a thing changing state, a sequence that needs a fixed reference, a table whose header must stay in view. They use `position:sticky` wherever they can, keep scroll moving at its native speed, and release when the idea is finished. Cheap ones hijack the wheel, run three pinned sections in a row, or pin a slideshow of text that would read better as a list. A good test: if the section works just as well flat, flatten it.

**Measured.** The most common pins are the humblest: sticky headers and decks, built on `position:sticky`. CSS scroll timelines appear in the bundles of 22 percent of gold pages against 8 percent of expressive ones, while ScrollTrigger runs 22 against 39. Scrub lengths are long when the object is rich: Prägen Hätlen runs about 16,000px on one subject, and Theatre Memory pins about 15,800px, but those are whole-page stories. A step in a product section takes about one viewport. Plan one rich pin per page. See `scroll.md` Pace the page.

<!-- v:motion.scroll-pin-or-scrub/sticky-card-deck -->
### 1. Sticky card deck

*Feeling: cards dealt onto a table.*

Each card pins under a heading, and the next slides over it. On Affirm each one sits about 50px lower than the last and widens (1138, 1260, 1320), which gives depth with no shadow, and the top edge of each covered card stays visible with its tag. Use it for three to five parallel ideas: plans, personas, industries. Do not use it for a sequence with an order, which belongs in a step swap. Make's narrower card peeks below the active one, a variation. Plain sticky, no scroll listeners.

**Seen on** Affirm, Theatre Memory, Per Appelgren, Villa Aurelia, Wildbran, 10 sites in all. **Suits** photo-led, gradient-light, dark-precision, type-led; finance, portfolio, ai, culture.

```css
.deck{position:relative;padding-bottom:30vh}
.head{position:sticky;top:0;z-index:9;height:128px;background:var(--bg);display:grid;place-items:center}
.card{position:sticky;top:calc(128px + var(--i)*50px);
  width:min(calc(1040px + var(--i)*90px),calc(100% - 32px));margin:0 auto 12vh;height:560px;padding:40px;
  border:1px solid var(--line);border-radius:20px;
  background:color-mix(in srgb,var(--surface) 84%,transparent);backdrop-filter:blur(22px)}
```

The analyst read a blur on the covered card's copy. The blur belongs to the incoming card: a translucent fill with `backdrop-filter`, so covered text softens exactly where it passes under, with no script at all. My first build toggled a blur class on scroll, and it was both more code and less convincing. Any ancestor with `overflow:hidden` silently kills sticky, so check that first if a card will not pin. On a phone, cut the offset to about 24px.

<!-- v:motion.scroll-pin-or-scrub/sticky-utility-header -->
### 2. Sticky utility header

*Feeling: you always know where you are.*

The most useful pin on the web, and it is plain CSS. Attio sticks plan names, prices, toggle and all four CTAs under the nav across about 5,000px of matrix, so conversion stays in reach, and section titles pin beneath them until the next replaces it. Claude's pricing does the same with a hairline and no shadow. Linear's changelog sticks each date until the next pushes it up. Use it for any table longer than a screen.

**Seen on** Attio Pricing, Claude Pricing, Linear Changelog, Meta AI, Stripe Pricing. **Suits** light-precision, warm-neutral, dark-precision; saas, ai, finance.

```css
.plans{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line)}
.group{position:sticky;top:124px;z-index:3;background:var(--bg)}/* top equals the height of the row above */
```

Give sticky rows a solid background, or the table scrolls through them. No shadow is needed, since a hairline holds the edge.

<!-- v:motion.scroll-pin-or-scrub/scroll-progress-chrome -->
### 3. Scroll progress chrome

*Feeling: a position cue, nothing more.*

A small indicator of where you are in a long page. Stripe Payments replaces the nav after the hero with a 64px bar of chapter links, with a thin top line growing in the brand gradient. LEA Winery rides a 4px tick down the rail's right border, replacing the scrollbar. Anime.js uses a small pill with a playhead. Use it on pages over about 8,000px, or where sections are genuine chapters. A bare top progress bar on a short page tells nobody anything.

**Seen on** Stripe Payments, LEA WINERY, jemmic, Anime.js. **Suits** gradient-light, light-precision, warm-neutral, dark-precision; finance, saas, food-drink, devtool.

<!-- v:motion.scroll-pin-or-scrub/pinned-step-swap -->
### 4. Pinned step swap

*Feeling: turning pages beside a fixed picture.*

The classic product pin. The panel holds while a list advances and a visual changes to match. LiveKit frames the section in one hairline panel, with steps on the left, and isometric planes on the right, where the active plane goes bright white with a label while the others hold at about 10 to 25 percent. Use it for processes of three to five steps. Each step gets about one screen. It must collapse to a plain stacked list on a phone. See `scroll.md` Sticky text swap beside a pinned visual.

**Seen on** LiveKit, Prototype, mymind, Better Auth, Mirim, 9 sites in all. **Suits** photo-led, dark-precision, gradient-light, light-precision; devtool, agency, saas, ai.

```css
.track{height:320vh;position:relative}
.stage{position:sticky;top:0;height:100vh;display:grid;place-items:center}
.step{color:var(--ink-2);transition:color .25s var(--ease-ui)}.step.on{color:var(--ink)}
.plane{opacity:.55;border:1px solid var(--line);transition:border-color .35s var(--ease-ui),transform .6s var(--ease-settle)}
.plane.on{opacity:1;border-color:var(--ink);background:var(--surface)}
@media (max-width:760px){.track{height:auto}.stage{position:static;height:auto;display:block}}
```
```js
const set=n=>{steps.forEach((e,i)=>e.classList.toggle('on',i===n));planes.forEach((e,i)=>e.classList.toggle('on',i===n))};
const tick=()=>{const r=track.getBoundingClientRect(),p=Math.min(.999,Math.max(0,-r.top/(r.height-innerHeight)));set(Math.floor(p*steps.length))};
addEventListener('scroll',()=>requestAnimationFrame(tick),{passive:true});tick();
```

Keep the inactive planes visible. In my first build they sank to nothing and one lonely rectangle floated in the dark. Depth comes from what recedes. Empty planes also looked cheap until the active one held a real object, and a hairline frame around the section turned loose shapes into a diagram.

<!-- v:motion.scroll-pin-or-scrub/pinned-photo-dissolve -->
### 5. Pinned photo dissolve

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

**Seen on** Joby, ECI, Dishoom, Royal College of Art, Lyra, 11 sites in all. **Suits** photo-led, render-3d, warm-neutral, illustrated; food-drink, agency, brand, ai.

<!-- v:motion.scroll-pin-or-scrub/window-opens-to-full -->
### 6. Window opens to full

*Feeling: stepping into the product.*

A contained window scales with scroll until it fills the frame. Factory starts about 750px wide and grows about 2x until it crops and the UI reads huge. Resend zooms its editor under a heading until a white sheet is the one bright rectangle on the page, then releases. Use it to move from a pitch into the product. It works natively.

**Seen on** Factory, Resend, LEA WINERY, Monark Markets, Razorpay Magic Checkout, 7 sites in all. **Suits** dark-precision, light-precision, warm-neutral, expressive; finance, ai, devtool, food-drink.

```css
.track{height:260vh;view-timeline:--t block}
.stage{position:sticky;top:0;height:100vh;overflow:hidden;display:grid;place-items:center}
.win{width:760px;transform-origin:50% 22%}
@supports (animation-timeline:view()){
  .win{animation:open linear both;animation-timeline:--t;animation-range:contain 0% contain 76%}
  @keyframes open{to{transform:scale(2.05);border-radius:4px}}
}
```

Choose the origin on the focal point. My first used about the centre, and the content you cared about scrolled out of frame at full scale. Stop the range at about 76 percent, so the end state holds before release. Do not add `will-change:transform`: it keeps the layer rastered at its small size, and text blurs as it grows.

<!-- v:motion.scroll-pin-or-scrub/nested-zoom-through -->
### 7. Nested zoom through

*Feeling: falling through pictures.*

Heat Bureau pins a photo in which a small rectangle scales up to reveal the next image, then does it again: hand, horse, fingerprint. Each step takes about 0.3 viewports. It only works with images composed for it, so the inner rectangle sits exactly on the next frame. Use it for two to four steps in a campaign or portfolio.

**Seen on** Heat Bureau. **Suits** expressive; agency.

<!-- v:motion.scroll-pin-or-scrub/hero-retreats -->
### 8. Hero retreats

*Feeling: the opening becomes the backdrop.*

The hero does not leave. Apple Vision Pro pins it, blurs it about 40px and washes it to near white, with three centred paragraphs of 48/52 over it. X8 scales its product down to about 30 percent while a video panel lifts. It links the first chapter to the second instead of cutting. Use it where the hero image is a strong atmosphere and the next section is text. Blur a pre-blurred copy if you can, since animating a large blur is heavy.

**Seen on** Apple Vision Pro, X8 Eyewear. **Suits** photo-led; brand, fashion.

<!-- v:motion.scroll-pin-or-scrub/logo-docks-on-scroll -->
### 9. Logo docks on scroll

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

**Seen on** Per Appelgren, Acne Studios, Nicole Heim Studio, Astral, Monocle. **Suits** photo-led, bold-colour, type-led; portfolio, fashion, agency, devtool.

<!-- v:motion.scroll-pin-or-scrub/horizontal-scrub-rail -->
### 10. Horizontal scrub rail

*Feeling: walking along a wall of pictures.*

Vertical scroll drives a sideways pan. Roy Jad settles each move on 0.7s `.22,1,.36,1`. Special Production keeps title and index fixed, swapping them as each image reaches focus. Decagon slides the whole hero scene behind fixed copy. Use it for 5 to 10 items, always showing the next item's edge. On a phone use native horizontal scroll with snap. See `scroll.md` Horizontal pinned gallery.

**Seen on** Decagon, Roy Jad, Oliver Dupuy, Shopify Supply, Special Production Agency, 8 sites in all. **Suits** photo-led, expressive, light-precision, soft-pastel; agency, portfolio, ai, architecture.

<!-- v:motion.scroll-pin-or-scrub/section-theme-shift -->
### 11. Section theme shift

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

**Seen on** Elyx, La Table de Joakim, LEA WINERY, Basic Agency, Spring/Summer, 7 sites in all. **Suits** warm-neutral, bold-colour, photo-led, type-led; food-drink, agency, ecommerce, saas.

<!-- v:motion.scroll-pin-or-scrub/before-after-collapse -->
### 12. Before and after collapse

*Feeling: the argument is the animation.*

Scroll makes the claim. Ramp pins a scattered collage of receipts, forms and sheets joined by dashed lines, and on scrub the pieces fade to a pale wireframe as the heading changes and a single window remains. Razorpay flips an island to neon wireframe for its data chapters. Use it when the product's value is a before and an after. Spend your one rich pin here, because this is the highest-value scrub in the set.

**Seen on** Ramp, Razorpay Magic Checkout. **Suits** light-precision, render-3d; finance.

<!-- v:motion.scroll-pin-or-scrub/exploded-teardown -->
### 13. Exploded teardown

*Feeling: understanding by taking it apart.*

One object separates. Prägen Hätlen scrubs a watch through rotation, explosion and component close-ups over about 16,000px, with ground tone stepping between chapters and a persistent CTA. Plvs Ultra separates a chip stack along dotted guides. Scale AI fans panes in perspective. Use it for physical products and layered systems. Prerender frames unless you have a real model. See `scroll.md` Image sequence scrub on canvas.

**Seen on** Prägen Hätlen, Scale AI, VanMoof, Plvs Ultra, Checkout.com. **Suits** dark-precision, render-3d, photo-led, mono-technical; ai, brand, ecommerce, finance.

<!-- v:motion.scroll-pin-or-scrub/path-draws-with-scroll -->
### 14. Path draws with scroll

*Feeling: a route being walked.*

A line carries the page. IRONHILL runs a contour line like a river on a survey map, pale ahead of the reader and full ink behind. Rewiring America leaves a photo edge with rounded elbows that end at bolt-shaped nodes. Use it when route, flow or connection is the brand's own idea. Keep the stroke at 1 to 1.5px. See `scroll.md` SVG path drawing.

**Seen on** Rewiring America, IRONHILL. **Suits** bold-colour, illustrated; nonprofit, food-drink.

<!-- v:motion.scroll-pin-or-scrub/companion-object -->
### 15. Companion object

*Feeling: one thing carries the story.*

An object stays with you through several sections. Sidekick's slit-cut square rotates with scroll beside passing copy. Dogstudio's wolf re-skins per project. Swirple's phone holds while headings pass behind it. Use it to bind a long page into one piece. Keep the object simple enough to live next to text.

**Seen on** InkTree, Sidekick, Dogstudio, Swirple, Effepinna Studio. **Suits** illustrated, type-led, expressive, render-3d; agency, ai, other, portfolio.

<!-- v:motion.scroll-pin-or-scrub/camera-flight -->
### 16. Camera flight

*Feeling: moving through a place.*

Scroll flies a camera. Remix drives point-cloud scenes by scroll or arrow keys. Deebak Tamilmani slides a tick ruler under a fixed needle, with a count of scenes seen. Use it for portfolios and launch pieces only. It needs keyboard control, a static fallback and a fixed-height page. See `webgl.md` for the canvas contract.

**Seen on** Remix, Deebak Tamilmani Portfolio, Utopia Orchestra, Garuda 2026. **Suits** render-3d, type-led, expressive; culture, devtool, architecture.

<!-- v:motion.scroll-pin-or-scrub/layers-cross -->
### 17. Layers cross

*Feeling: a real stack of paper.*

One layer passes over another, and the overlap links two sections with no fade. On Wispr Flow a large heading holds still while a 400px video card scrolls across it. On International Magic a 580px clip rises over a pinned frame, lifted by one wide shadow near `0 24px 60px` at 20 percent. Use it to connect a statement and a demo. If light images pass under white type, add a scrim or blend mode, since Hibachi Guru's white heading vanishes over bright photos.

**Seen on** International Magic, Wispr Flow, Driftime Impact Report 2022, Athletics, Hibachi Guru, 7 sites in all. **Suits** type-led, warm-neutral, light-precision, photo-led; agency, saas, local-business, devtool.

<!-- v:motion.scroll-pin-or-scrub/pixel-boundary -->
### 18. Pixel boundary

*Feeling: the seam belongs to the brand.*

Sourcegraph replaces its dark-to-light section edge with a band of about 180px of 12px tiles on a 1px grid, ramping black through grey to pale, with top rows randomly missing. It reverses at the far end of the section. Browserbase puts coloured cells in a ruled band, and the cells shift with scroll. Use it where the brand has a grid or pixel idea. It can be fully static and still feel animated.

**Seen on** Sourcegraph, Browserbase. **Suits** dark-precision, expressive; devtool.

<!-- v:motion.scroll-pin-or-scrub/wheel-gated-stage -->
### 19. Wheel gated stage

*Feeling: scroll as a gesture, not a page.*

The wheel drives a stage instead of the document. Michelle Kaye fills a CTA on first wheel, shows a 12px hint, and grows a thin progress line. Charles Pas scales a photo while letters bend along a curve. Martin Development slides a 400px wordmark clipped by both edges. Use it on expressive sites only. Keep every key working, show progress, and never trap someone in a section with no exit.

**Seen on** Michelle Kaye - Fine Arts, MVRDV, Charles Pas, The Aviator, Teenage Engineering, 7 sites in all. **Suits** type-led, photo-led, warm-neutral, render-3d; portfolio, architecture, agency, brand.

### Mistakes that cheapen a pin

- **Pinning what could be stacked.** Flatten it, and see if anything was lost.
- **Hijacking the wheel.** Native speed with a sticky element feels better than any smoothed trap.
- **Several pins in a row.** One rich pin per page, with quiet sections around it.
- **`overflow:hidden` on an ancestor.** Sticky dies without an error. Use `overflow:clip` if you need clipping.
- **`will-change:transform` on scaled UI.** Text rasterises small, then blurs as it grows.
- **Inactive states that vanish.** Depth is built from what recedes. Keep them at 10 to 25 percent.
- **A scale origin at the geometric centre.** Aim it at what the reader should end up looking at.
- **No end hold.** If the scrub ends on release, the last state never reads. Stop about a quarter short.
- **No phone plan.** Every pin needs a stacked version. A pin that takes eight swipes on a phone is broken.
- **Missing anchors.** Links into a pinned section must land on the right step.

## Hover state

Hover has one job: confirm that this thing is live and that the system has noticed you. It is a small acknowledgement, not a performance. It must start at once, finish in about 200ms, read at a glance, and undo itself cleanly if the pointer leaves halfway.

What separates great from cheap is system. Great hover is a language: a few rules applied the same way to every kind of control, sized to the control, with small value changes that all belong to the palette. Cheap hover is a stack of effects from a component library: lift, shadow, scale and colour on the same card, or a different idea on every button. The second difference is restraint. Half of the cards, rows and text links on strong sites do nothing at all, so the ones that respond mean something.

**Measured.** Use the tables under [what real sites do](#what-real-sites-do). In short: 150 to 300ms with a median of 200 on controls and 300 on cards, about 10 L\* of fill change, dark fills lighten and light fills darken, one or two curves, and 67 percent of sites move nothing. A third of hovers run at 0s. Arrow nudges are 2 to 8px, most often 3. Cards use a transform 42 percent of the time, mostly an image zoom near 1.04, from 1.02 at the premium end to 1.1 on consumer sites. CTAs mostly change fill (68 to 77 percent), and only 13 to 18 percent use a transform. Main button lift is 2px, card lift 1px.

**A complete default language.** If nothing in the deal says otherwise, start here. It matches the measured median on every control, and only one curve is needed.

| Control | At rest | On hover | Timing |
|---|---|---|---|
| Nav link | `--ink-2` | `--ink`, plus a 6% ink pill | 200ms |
| Primary button | Solid | One tone step, lighter on dark fills, darker on light | 200ms |
| Secondary button | `--surface` | One tone step darker | 200ms |
| Ghost button | 1px inset ring | `--surface` fill | 200ms |
| Text link | `--ink` | Underline, offset 3px | 0s |
| Arrow in a link | Still | +3px in x | 200ms |
| Card | 1px line | Line darkens one step | 300ms |
| Card image | Still | Scale 1.04 inside its frame | 300ms |
| Row | Still | 4% ink fill | 200ms |
| Menu chevron | Down | Rotates 180 degrees | 250ms |

```css
.link{color:var(--ink-2);border-radius:999px;transition:color .2s var(--ease-ui),background-color .2s var(--ease-ui)}
.link:hover{color:var(--ink);background:var(--hover-tint)}
.btn{transition:background-color .2s var(--ease-ui)}
.btn-primary:hover{background:color-mix(in oklab,var(--ink) 80%,var(--bg))}/* on a dark ink, this lightens */
.btn-secondary:hover{background:color-mix(in oklab,var(--ink) 9%,var(--bg))}
.card{border:1px solid var(--line);transition:border-color .3s var(--ease-ui)}
.card:hover{border-color:var(--hover-line)}
.frame{overflow:hidden}.frame img{transition:transform .3s var(--ease-settle)}
.frame:hover img{transform:scale(1.04)}
```

Wrap every hover rule in `@media (hover:hover)` so a tap cannot leave one stuck on a touch screen, and give each control a `:focus-visible` state and an `:active` state that begins on contact. See `interaction.md`.

<!-- v:motion.hover-state/tone-step -->
### 1. Tone step

*Feeling: a system, not an effect.*

The most common professional hover, 53 sites here. Every control moves one step on its own scale with no movement at all. Vercel takes near-black to about `rgb(56,56,56)` and white to `rgb(242,242,242)`, all in 0.15s on `.4,0,.2,1`. Exa, Neon and Grafana are the same idea on their own ramps. Apple shifts its blue by a hair and fades nav text over 0.32s. Use it for product, docs and any page with many controls. It is a safe default and nothing in it can go wrong, so it cannot carry personality alone. Pair it with one signature elsewhere.

**Seen on** Apple Intelligence, Vercel Pricing, Vercel AI SDK, Asana, Exa, 53 sites in all. **Suits** light-precision, warm-neutral, photo-led, gradient-light; devtool, saas, ai, finance.

Move the step in `oklab`, not sRGB, so tints do not go muddy. If the step is under about 5 L\*, the hover vanishes on a poor screen.

<!-- v:motion.hover-state/alpha-tint-chip -->
### 2. Alpha tint chip

*Feeling: a quiet place to land.*

Nav items and rows gain a pill of ink at low alpha. Modern Treasury uses 5 percent, ElevenLabs 5, Devin 6, Linear white at 8. The alpha makes it work on any ground, and the pill gives the eye a target. Use it for navs, menus, filter rows and sidebars. Give the pill a horizontal padding of 10 to 12px, set negative margin if the text must keep its alignment, and do not chip a link inside a sentence. Over photography, use white at 8 to 20 percent.

**Seen on** ElevenLabs Pricing, Devin Desktop, Expo, Increase, Meta AI, 30 sites in all. **Suits** light-precision, dark-precision, photo-led, warm-neutral; devtool, ai, saas, finance.

<!-- v:motion.hover-state/opacity-dim -->
### 3. Opacity dim

*Feeling: the control recedes.*

The control gets quieter. Polar drops its white CTA to 0.85 in 0.1s, Nuxt takes green to 75 percent alpha, and AuthKit takes rows to 0.7. One rule works on any colour, so it suits a page with many brand fills. It reads as restraint on dark and weakly on light. Avoid a low-contrast ground, because a dimmed button can drop below readable contrast.

**Seen on** Polar, AuthKit, Levels, Cal.com, Framer, 34 sites in all. **Suits** light-precision, bold-colour, dark-precision, photo-led; devtool, agency, saas, brand.

<!-- v:motion.hover-state/dim-and-reveal-arrow -->
### 4. Dim and reveal arrow

*Feeling: a chevron grows into an arrow.*

Stripe's signature. The label dims to 0.6 and a hidden stem fades in behind the chevron, which nudges forward, so the chevron extends into an arrow. It takes 0.15s on `.215,.61,.355,1`. The fill does not change. Use it for text links and small CTAs. It needs an inline SVG with two separate paths.

**Seen on** Stripe Blog, Roy Jad, Stripe Atlas, Stripe Payments, Villa Aurelia. **Suits** light-precision, gradient-light, warm-neutral; editorial, portfolio, saas, finance.

```html
<a class="go">View all posts
  <svg viewBox="0 0 12 12"><path class="stem" d="M2 6h8"/><path class="chev" d="M5.5 2 9.5 6l-4 4"/></svg></a>
```
```css
.go{transition:opacity .15s cubic-bezier(.215,.61,.355,1)}
.go svg{width:12px;height:12px;overflow:visible;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.go .stem{opacity:0;transition:opacity .15s}.go .chev{transition:transform .15s}
.go:hover{opacity:.6}.go:hover .stem{opacity:1}.go:hover .chev{transform:translateX(3px)}
```

<!-- v:motion.hover-state/dark-surface-ladder -->
### 5. Dark surface ladder

*Feeling: everything lights up one notch.*

On dark, text, border and surface step up together. Trigger.dev moves a card from about `rgb(21,23,26)` to `rgb(26,27,31)` and its border up with it, and brightens the text. Neon runs everything at 0.2s, with no movement. Linear applies `filter:brightness(1.03)` on cards and 1.3 on links, a neat way to light up a mixed-content element at once. Use it for dark product UI. Never darken on dark, because a button that dims on hover looks disabled.

**Seen on** Linear, Spline, Resend, Linear Method, Neon Pricing, 9 sites in all. **Suits** dark-precision; saas, devtool.

```css
.card{background:var(--surface);border:1px solid var(--line);color:var(--ink-2);transition:background-color .16s var(--ease-ui),border-color .16s var(--ease-ui),color .16s var(--ease-ui)}
.card:hover{background:color-mix(in srgb,var(--ink) 5%,var(--surface));border-color:color-mix(in srgb,var(--ink) 13%,transparent);color:var(--ink)}
```

Set the secondary button's hover to a solid, not a higher alpha, as Linear does, so it stops being see-through on a busy ground.

<!-- v:motion.hover-state/accent-flip -->
### 6. Accent flip

*Feeling: colour with intent.*

The fill jumps to a second brand colour. Stripe's pricing page takes its indigo CTA to navy. Huel flips black to pale mint with a dark label, and Hinge Health takes deep green to lime. Use it for a primary action in a confident palette, and keep it to the one or two actions that matter. Move label and border with the fill, or contrast fails halfway through the transition.

**Seen on** Stripe Pricing, Warp Pricing, Stripe Climate, mymind, Huel, 14 sites in all. **Suits** warm-neutral, gradient-light, light-precision, bold-colour; finance, saas, health, devtool.

<!-- v:motion.hover-state/full-invert -->
### 7. Full invert

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

**Seen on** Customer.io, Structure Consulting Engineers, Factory, Function Health, Figure, 32 sites in all. **Suits** photo-led, bold-colour, light-precision, warm-neutral; food-drink, ai, brand, culture.

<!-- v:motion.hover-state/instant-snap -->
### 8. Instant snap

*Feeling: a switch being thrown.*

Zero transition, deliberately. A24 swaps fills in a hard cut, Cognition snaps a row link to electric blue, Acne Studios and Bun cut instantly. Reads as fast, printed and sure, and it is the cheapest language to build. Use it for type-led, editorial and brutalist sites. It needs a real value change: on a 3 percent tone step, no easing looks like a bug. Notion mixes the two, with an instant button and a 0.15s nav tint.

**Seen on** Notion About, Cognition, A24, Bun, Babylonstoren, 29 sites in all. **Suits** light-precision, photo-led, warm-neutral, type-led; saas, ai, finance, culture.

<!-- v:motion.hover-state/underline-language -->
### 9. Underline language

*Feeling: the oldest signal on the web.*

Links answer with an underline. HAY, Monocle and GitHub Docs do little else. Accel draws one with `scaleX(0)` to 1 in 0.3s. Use it for reading pages and for any link in running text, where colour alone fails people who cannot see the difference. The drawn version enters from the left and leaves to the right, and that directional exit is what makes it feel made.

**Seen on** Buildkite, Fidèle, Strava, Dekmantel, Temporal, 14 sites in all. **Suits** light-precision, photo-led, type-led, mono-technical; devtool, culture, ecommerce, agency.

```css
.link{position:relative}
.link::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:1px;background:currentColor;
  transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(0,0,.2,1)}
.link:hover::after{transform:scaleX(1);transform-origin:left}
```

<!-- v:motion.hover-state/single-accent-on-hover -->
### 10. Single accent on hover

*Feeling: colour appears under the pointer.*

The page rests in neutrals, and every control resolves to one accent. Liquid AI takes links, titles and rows to violet in 0.15s. Affirm fills white pills with lavender. Canopy takes navy to indigo everywhere. Use it to make a quiet page feel branded without spending colour at rest. The accent must clear contrast on the ground at every step of the transition.

**Seen on** Affirm, Cloudflare Workers, LiveKit, Stripe Sessions, Liquid AI, 14 sites in all. **Suits** light-precision, warm-neutral, dark-precision, mono-technical; devtool, brand, ai, food-drink.

<!-- v:motion.hover-state/arrow-nudge -->
### 11. Arrow nudge

*Feeling: going somewhere, without leaving.*

Only the arrow moves. Stripe nudges 6px on `.25,1,.5,1`, Primer 2 to 4px, Ro 3px, Vue 2px. Baseten moves an inner span diagonally by `(5px,-5px)` on `.75,0,.1,.99`, and that long symmetric curve gives it weight. Use it on any link with an arrow. Most nudges are 2 to 4px. Move the arrow only, so the button box and label stay put.

**Seen on** Stripe, Baseten, Studio Dado, Stripe Billing, Leo Cussen Centre for Law, 12 sites in all. **Suits** light-precision, bold-colour, photo-led, gradient-light; finance, education, culture, architecture.

```css
.go .chev{transition:transform .3s var(--ease-quart)}
.go:hover .chev{transform:translateX(3px)}
.diag i{display:block;transition:transform .4s cubic-bezier(.75,0,.1,.99)}
.diag:hover i{transform:translate(5px,-5px)}
```

<!-- v:motion.hover-state/label-roll -->
### 12. Label roll

*Feeling: a departures board.*

Two stacked labels in one line box, one rolling out as the other rolls in. Ideogram translates 13px with a fade over 0.32s, and Lazy Eight rolls 15px over 0.46s, both on `.22,1,.36,1`. Fills never change, so the motion is the whole response. Use it on agency, fashion and brand CTAs. It is too much for tools with many buttons. See `interaction.md` Label roll.

**Seen on** Wildbran, Ideogram, Lazy Eight, Michelle Kaye - Fine Arts, La Dolfina Jumping, 7 sites in all. **Suits** photo-led, warm-neutral, gradient-light; food-drink, ai, agency, portfolio.

```html
<a class="roll"><em><span data-t="Book a table">Book a table</span></em></a>
```
```css
.roll{--lh:20px}
.roll em{display:block;overflow:hidden;height:var(--lh);font-style:normal}
.roll span{display:block;line-height:var(--lh);transition:transform .4s var(--ease-settle)}
.roll span::after{content:attr(data-t);display:block}
.roll:hover span{transform:translateY(calc(var(--lh)*-1))}
```

Clip the line box, not the button. My first version set `overflow:hidden` on the 40px button, and the second label showed under the first at rest. Pseudo-element text is ignored by most screen readers, which is what you want here.

<!-- v:motion.hover-state/fill-wipe -->
### 13. Fill wipe

*Feeling: a little theatre with a direction.*

A fill layer sweeps in. Render wipes a span from `scaleX(0)` over 0.3s. ROEH slides a hidden layer down over 0.5s. Payload sweeps text colour by `background-position`. Use it on larger outline CTAs where the direction can be seen. Change the origin on leave, so the fill exits the way it was going rather than rewinding. See `interaction.md` Entry-point fill.

**Seen on** Render, ROEH Law & Tax, PDA Architecture, Motionstrand, Payload. **Suits** light-precision, bold-colour, gradient-light, dark-precision; devtool, local-business, agency, architecture.

```css
.wipe{position:relative;overflow:hidden;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);transition:color .3s var(--ease-ui)}
.wipe::before{content:"";position:absolute;inset:0;background:var(--ink);transform:scaleX(0);transform-origin:right;transition:transform .3s var(--ease-ui)}
.wipe>*{position:relative}
.wipe:hover{color:var(--bg)}.wipe:hover::before{transform:scaleX(1);transform-origin:left}
```

<!-- v:motion.hover-state/micro-lift -->
### 14. Micro lift

*Feeling: weight, barely.*

The button rises 1 to 2px with a tinted shadow. Copilot moves -1px with a blue shadow, 0.3s on `.25,1,.5,1`. Ripple Health moves -2px with a two-layer shadow at 10 and 16 percent. Loops lifts 1.5px and keeps its cards still. Use it on one primary CTA in a soft, warm or gradient register. Do not put it on every card, because that is the template look.

**Seen on** Loops, Almeida Theatre, Copilot, Ripple Health, Loom, 17 sites in all. **Suits** bold-colour, warm-neutral, dark-precision, light-precision; saas, culture, health, agency.

```css
.cta{transition:transform .3s var(--ease-quart),box-shadow .3s var(--ease-quart),background-color .3s var(--ease-quart)}
.cta:hover{transform:translateY(-2px);box-shadow:
  0 8px 16px -6px color-mix(in srgb,var(--accent) 10%,transparent),
  0 24px 48px -12px color-mix(in srgb,var(--accent) 16%,transparent)}
```

My first shadow used 28 and 32 percent, and it read as a pink smudge under the button. At the measured values you see lift, not shadow. Tint with the brand colour rather than black.

<!-- v:motion.hover-state/hard-offset -->
### 15. Hard offset

*Feeling: a sticker, a stamp.*

Counter Culture jumps a pill +4px x, -4px y as a solid shadow appears at `-4px 4px 0`, in 0.15s linear. Lemon Squeezy lifts a white face off a coloured plate by 8px. Use it in a printed system with hard edges. It needs linear or very short timing, since a soft ease undoes the mechanical feel. Note the shadow stays where the button was, so the button looks like it left a plate behind. See `interaction.md` Key press and sticker.

**Seen on** Jasper, Counter Culture Coffee, Lemon Squeezy. **Suits** bold-colour; ai, ecommerce, saas.

```css
.off{box-shadow:inset 0 0 0 1.5px var(--ink);transition:transform .15s linear,box-shadow .15s linear}
.off:hover{transform:translate(4px,-4px);box-shadow:inset 0 0 0 1.5px var(--ink),-4px 4px 0 var(--ink)}
```

<!-- v:motion.hover-state/ring-grow -->
### 16. Ring grow

*Feeling: tactile, unhurried.*

The button does not move. Its ring grows. Claude takes `0 0 0 1px` to 2px in 0.1s, and steps its label to full ink. Slack thickens an inset ring from 1px to 2px over 0.42s. Anthropic's news page steps the fill one tone and adds a 1px ring in that same tone. Use it for warm, editorial product sites. `box-shadow` takes no space, so nothing around it shifts, which a real border cannot do. For any pill colour, an inset `0 0 0 999px` shadow at 10 percent black works as a universal darken.

**Seen on** Claude, Anthropic News, Speakeasy, Slack, Khan Academy, 8 sites in all. **Suits** warm-neutral, light-precision, illustrated, type-led; ai, editorial, devtool, saas.

```css
.ring{color:var(--ink-2);box-shadow:0 0 0 1px var(--line);transition:box-shadow .1s ease-in-out,color .1s ease-in-out}
.ring:hover{color:var(--ink);box-shadow:0 0 0 2px var(--line)}
```

<!-- v:motion.hover-state/scale-pop -->
### 17. Scale pop

*Feeling: friendly, a small bounce of attention.*

Scale up 1.04 to 1.05 on pills, or down to 0.98 as a press. Waymo and Prisma scale CTAs with the `scale` property in 0.15 to 0.2s, and Spotify uses 1.04 on `.3,0,0,1`. Wispr Flow's nav CTA presses inward to 0.98. Use it on consumer and media brands. Use a smaller factor on larger targets, because 1.05 on a 400px card moves its edges 10px.

**Seen on** Wispr Flow, Scale AI, Waymo, Prisma, Spotify, 11 sites in all. **Suits** dark-precision, warm-neutral, bold-colour, gradient-light; devtool, saas, ai, brand.

<!-- v:motion.hover-state/spring-overshoot -->
### 18. Spring overshoot

*Feeling: playful, alive.*

An overshoot curve on something small. STUDIO UNLMTD scales a label dot from 0 over 0.55s on `.34,1.6,.64,1`. Sparkle tilts a logo -8 degrees on a 0.5s overshoot. DixonBaxi's hovered card grows as neighbours shrink, on `.34,1.25,.64,1`. Use it for playful brands and small elements. See `foundations.md` Springs and interruption. On a large card, overshoot reads as a wobble.

**Seen on** STUDIO UNLMTD, Sparkle, React Email, Rspack, Red Blob Games, 8 sites in all. **Suits** gradient-light, expressive, type-led, dark-precision; education, devtool, agency, ecommerce.

<!-- v:motion.hover-state/glow -->
### 19. Glow

*Feeling: light rather than movement.*

On dark, a soft light. Auth0 adds `0 0 32px` white at 50 percent to every button in 0.2s. Algolia moves the search border to 40 percent accent with a faint shadow. Inngest fades a 360px radial spotlight into cards over 0.42s. Use it on one control or one card family on a dark ground. On light, there is no glow, only a smudge.

**Seen on** Inngest, Auth0, Rabbit, Algolia. **Suits** dark-precision, bold-colour; devtool, brand.

```css
.spot{position:relative;overflow:hidden;border:1px solid var(--line);transition:border-color .3s}
.spot::before{content:"";position:absolute;left:var(--x,60%);top:var(--y,20%);width:360px;height:360px;margin:-180px;border-radius:50%;
  background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 18%,transparent),transparent);opacity:0;transition:opacity .42s var(--ease-soft)}
.spot:hover::before{opacity:1}
```

Set `--x` and `--y` from pointer position if you want it to follow. It looks good sitting still as well.

<!-- v:motion.hover-state/media-zoom -->
### 20. Media zoom

*Feeling: the picture breathes.*

The image scales inside a fixed frame. N26 takes 1.1 over 0.5s, Fairphone 1.05 over 0.6s, and Dekmantel 1.02 in 0.18s. Apple uses a very exact 1.0161 over 0.3s. Studio Dado takes 1.02 over 1s on `.23,1,.32,1`. Pick by register: 1.1 for consumer, 1.05 for general, 1.02 for premium, and slower as you go up. Keep the frame fixed, with `overflow:hidden`. Add `transform:translateZ(0)` to the frame if rounded corners flicker during the scale.

**Seen on** Royal Ontario Museum, 1 Hotels, N26, Rippling, Fairphone, 13 sites in all. **Suits** photo-led, bold-colour, light-precision, gradient-light; culture, hospitality, ecommerce, ai.

```css
.zoom{overflow:hidden;border-radius:12px}
.zoom img{transition:transform .6s cubic-bezier(.23,1,.32,1)}
.zoom:hover img{transform:scale(1.05)}
```

<!-- v:motion.hover-state/card-state-change -->
### 21. Card state change

*Feeling: the card says something new.*

The card changes content rather than position. Marine Layer crossfades a second product photo over 0.4s, which may be the most useful hover in commerce. On Jasper a box fills pale peach, the icon tile inverts, the line underlines and the arrow nudges, with no lift. Stripe grows a poster about 12px and extends its chevron into an arrow. Acne Studios adds a typed suffix to a label. Use it wherever a card has more to tell. On touch, it needs a fallback, since hover never fires.

**Seen on** 099, ECI, Jasper, Stripe, Acne Studios, 13 sites in all. **Suits** photo-led, light-precision, gradient-light, bold-colour; ai, fashion, finance, ecommerce.

<!-- v:motion.hover-state/dim-under-cursor -->
### 22. Dim under cursor

*Feeling: the work is left alone.*

The inverse highlight. Gagosian drops the item under the pointer to about 35 percent over 0.3s, image and caption together. Kinfolk dims a story's title to about 50 percent over 0.4s, leaving the image untouched. Use it for galleries and magazines, where decorating the work would be wrong. It feels odd on a CTA, so keep it on content lists.

**Seen on** Gagosian, Kinfolk. **Suits** photo-led; culture, editorial.

<!-- v:motion.hover-state/border-only-card -->
### 23. Border only card

*Feeling: the document stays still.*

The card does not move and only its border responds. Vercel's AI SDK steps from about `#EBEBEB` to `#BDBDBD`, 099 does it in 0.12s, and Neon's docs move borders to a solid accent. Hugging Face adds a pale fill and four small dark ticks at the corners where its dashed lines meet. Use it on dense grids and docs. The corner ticks are a good way to add character in a ruled layout.

**Seen on** Vercel AI SDK, Neon Docs, 099, Hugging Face Docs, Supabase Launch Week. **Suits** light-precision, mono-technical; devtool, other, ai.

<!-- v:motion.hover-state/row-fill -->
### 24. Row fill

*Feeling: the whole line is the target.*

The row takes a fill edge to edge. Olivier Larose inverts to black in 0.2s. Make Town fills a hairline row solid black and adds an arrow. Work & Co only changes the text to the accent over 0.25s, leaving rules and position alone. Use it for indexes and lists where each row is one link.

**Seen on** Work & Co, Vercel Pricing, Olivier Larose, BCR Law LLP, First December Films, 7 sites in all. **Suits** light-precision, type-led, photo-led, bold-colour; portfolio, local-business, devtool, agency.

<!-- v:motion.hover-state/signature-row -->
### 25. Signature row

*Feeling: detail only under the cursor.*

The hovered row does something owned. Anthropic's news table grows a row 16px past both edges, with a pale fill, a 1px border and 12px radius, and clipped text starts to crawl. Stripe Sessions lays a 100px gradient segment on the rules, the only colour on the list. Zed uses a diagonal hatch with a hard offset, in the page's own drafting vocabulary. Leeroy flips the row and reveals three thumbnails. Use it on any long list, as one memorable detail on a quiet page.

**Seen on** Anthropic News, Zed Blog, Stripe Sessions, Leeroy. **Suits** gradient-light, warm-neutral, mono-technical; editorial, brand, agency.

```css
.row{display:grid;margin:0 -16px;padding:13px 16px;border:1px solid transparent;border-radius:12px;transition:background-color .2s,border-color .2s}
.row:hover{background:var(--surface);border-color:var(--line)}
/* a rule that takes colour only under the cursor */
.q{position:relative;border-top:1px solid var(--line)}
.q::before,.q::after{content:"";position:absolute;left:0;z-index:1;height:1px;width:110px;opacity:0;transition:opacity .2s;
  background:linear-gradient(90deg,var(--accent),color-mix(in oklab,var(--accent) 40%,var(--ink)))}
.q::before{top:-1px}.q::after{bottom:-1px}.q:hover::before,.q:hover::after{opacity:1}
```

The negative inline margin grows the fill past the column while the text stays exactly where it was. Fade the ends of clipped text only on hover: my first mask ran at rest and ate the first letter of every line. The next row's border paints over a pseudo-element unless you lift it with `z-index`.

<!-- v:motion.hover-state/row-expands -->
### 26. Row expands

*Feeling: an index becomes a gallery.*

The hovered row opens. On Basement a row grows from about 177 to 460px and the others collapse into strips. On Beckmans a 19px row opens to about 240px over 0.5s, and an image breaks the grid. Use it for portfolios and archives with strong images. Open on a short delay, about 80ms, so a pointer crossing the list does not set off every row. See `interaction.md` Project list reveal.

**Seen on** Basement Studio, Beckmans Examensutstallning 2024. **Suits** dark-precision, mono-technical; agency, education.

<!-- v:motion.hover-state/siblings-recede -->
### 27. Siblings recede

*Feeling: attention moves by subtraction.*

The hovered row holds and everything else falls away. Three Zero Five keeps a row sharp while siblings fade to about 30 percent with a streaked blur, and a thumbnail tile appears in the indent. Polar dims sibling menu rows the same way. Use it for name lists and menus, at most about 10 rows, and large enough to see. `:has()` handles it with no script.

**Seen on** Three Zero Five Studio. **Suits** expressive; culture.

```css
.list li{transition:opacity .18s linear,filter .18s linear}
.list:has(li:hover) li:not(:hover){opacity:.3;filter:blur(1.5px)}
```

<!-- v:motion.hover-state/chevron-flip -->
### 28. Chevron flip

*Feeling: the menu state, told by one glyph.*

A menu trigger's chevron rotates 180 degrees. Calvyn takes 0.2s, Docker 0.3s, Tana 0.2s, while the label takes a 5 to 8 percent tint. Dub flips with `scaleY(-1)`. Velora snaps the colour but eases the rotation, and that is the right split: the chevron carries the state, so it must be seen moving. Use it on every nav with panels.

**Seen on** Calvyn, Chromatic, Hellgate, Velora, Docker. **Suits** dark-precision, gradient-light, photo-led, light-precision; devtool, saas, finance, ecommerce.

```css
.trigger svg{transition:transform .25s var(--ease-ui)}
.trigger:hover,.trigger[aria-expanded=true]{background:var(--hover-tint)}
.trigger[aria-expanded=true] svg{transform:rotate(180deg)}
```

<!-- v:motion.hover-state/selective-restraint -->
### 29. Selective restraint

*Feeling: only one thing answers.*

Almost nothing responds. Vapi moves one chip by 5 percent alpha. Vite changes only nav links. Monzo's pills show no change, and the budget goes on the video. Use it on hero-led pages with few controls. Primary actions should normally respond, so check that a dead button does not feel broken. Cursor changes and focus states still apply.

**Seen on** Vite, Monzo, Vapi. **Suits** dark-precision, bold-colour, light-precision; devtool, finance, ai.

### Mistakes that cheapen hover

- **Stacking effects.** Lift plus shadow plus scale plus colour is a component-library default. Choose one.
- **One darken rule for all buttons.** Dark fills lighten. Measure, then pick by the fill.
- **Hover on every card.** Half of strong sites' cards do nothing. An inert card is calm, not broken.
- **Long hover.** Over 300ms on a tool feels like lag. Slow hover belongs to hospitality and galleries.
- **Transition `all`.** It animates things you did not plan and costs layout. 55 percent of gold pages have it somewhere, and it is still wrong. Name your properties.
- **A guessed shadow alpha.** Mine was twice the measured value. Start at 10 and 16.
- **A clip on the wrong box.** A label roll clips the line, not the button.
- **Fades that eat letters.** Apply masks on hover only.
- **Sticky hover on touch.** Wrap rules in `@media (hover:hover)`.
- **A real border that thickens.** It shifts layout. Use `box-shadow`.
- **Forgetting focus.** Every hover needs a `:focus-visible` twin.

## Marquee

A marquee has one honest job: show that a list is long without asking anyone to read it. Logos, integrations, conditions tested, tools replaced. It also works as a hard break between sections, or as texture. It is the only element here that moves forever, so it has to earn that.

What separates great from cheap is what the moving thing says and how it ends at the edge. Great marquees hold real content, drift slowly enough to read a word, finish cleanly at the edges with a mask, a blur or a drawn line, and offer a way to stop. Cheap ones race, jump at the loop point, or run a slogan nobody needed. Marquees are frequently used by default and rarely deliberately. If nothing about your list gains from being long, use a static grid.

**Measured.** Logos run 24 to 40px high with 56 to 65px gaps. Chips are 34 to 44px tall. Bands run 44 to 120px tall with type at 16 to 52px, and display marquees at 96 to 145px. Edge fades are 40 to 80px. Full-page text bands are mostly `linear` at about 30 to 70s per loop. Anything that loops for more than 5 seconds needs a pause under WCAG 2.2.2, and Function Health, Stone Island and Ritual all draw that control in view.

All strips share one base. Render the group twice and move the track by exactly half.

```css
.mq{overflow:hidden;display:flex}
.mq:hover .tr{animation-play-state:paused}
.tr{display:flex;flex:none;animation:slide var(--s,48s) linear infinite}
.gp{display:flex;flex:none;align-items:center}
.gp>*{padding-right:56px}/* padding on the item, never gap on the track */
@keyframes slide{to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.tr{animation:none}}
```

Use padding on the items. With `gap` on the track, the two groups are separated by a gap that is not inside either group, half the track is no longer one full group, and the loop jumps by a few pixels. Each group must be wider than the viewport, or a blank shows at the seam. `aria-hidden` the duplicate. See `scroll.md` Marquee coupled to scroll velocity for a version that reacts to the page.

<!-- v:motion.marquee/edge-masked-logo-strip -->
### 1. Edge masked logo strip

*Feeling: a long list, calmly.*

The everyday marquee, done properly. Expo drifts app icons in a centred 760px window, both ends masked to transparent, with no controls and no scroll link. Citadel forces partner logos white at about 40px. Use it for social proof when a grid of logos would take too much height. Force logos to one colour and optical size, or the strip looks like a yard sale.

**Seen on** Expo, CITADEL Construction Group. **Suits** light-precision, bold-colour; devtool, architecture.

```css
.mask{max-width:760px;margin:0 auto;mask:linear-gradient(90deg,transparent,#000 72px,#000 calc(100% - 72px),transparent)}
```

<!-- v:motion.marquee/blur-falloff-strip -->
### 2. Blur falloff strip

*Feeling: a lens with a focal point.*

Better Stack blurs logos progressively toward each edge rather than fading them. The centre stays crisp, like a lens. Use it on dark pages, one strip per page. It is much richer than a mask at very little cost.

**Seen on** Better Stack. **Suits** dark-precision; devtool.

```css
.fall{position:absolute;top:0;bottom:0;width:min(20%,220px);pointer-events:none}.fall.l{left:0}.fall.r{right:0;transform:scaleX(-1)}
.fall i{position:absolute;inset:0}
.fall i:nth-child(1){backdrop-filter:blur(1px);mask:linear-gradient(90deg,#000 70%,transparent)}
.fall i:nth-child(2){backdrop-filter:blur(3px);mask:linear-gradient(90deg,#000 45%,transparent 75%)}
.fall i:nth-child(3){backdrop-filter:blur(8px);mask:linear-gradient(90deg,#000 20%,transparent 50%)}
```

Size the zones in percent. At a fixed 220px, my two edge zones covered the entire strip on a phone, and nothing was legible.

<!-- v:motion.marquee/clipped-to-frame -->
### 3. Clipped to frame

*Feeling: the line is the edge.*

No fade at all: the strip stops dead at a drawn line. Increase clips logos to the 1160px rails of its page frame, and they appear and vanish at the rule. Cloudflare runs phrase pairs along a panel base, clipped by the radius. Use it only where those lines already structure the page, because here the frame does the finishing.

**Seen on** Increase, Cloudflare Workers. **Suits** light-precision; finance, devtool.

<!-- v:motion.marquee/opposing-chip-rows -->
### 4. Opposing chip rows

*Feeling: busy, but contained.*

Two rows of chips pass each other. Factory runs them in a 640px window masked at both ends, with a static footnote below that explains the list. Better Auth stacks two offset rows under a rule, with 12px names and tiny category labels. Sparklefilth runs three sticker rows inside a bento tile. Use it for integrations and supported tools. Keep it contained in a window; full-bleed opposing rows are dizzying.

**Seen on** Factory, Better Auth, jemmic, Canary, Berries, 6 sites in all. **Suits** light-precision, illustrated, expressive; saas, ai, devtool, health.

```css
.chips{max-width:640px;margin:0 auto;display:grid;gap:10px;mask:linear-gradient(90deg,transparent,#000 48px,#000 calc(100% - 48px),transparent)}
.chip{display:inline-flex;align-items:center;height:38px;padding:0 14px;margin-right:10px;border:1px solid var(--line);border-radius:8px;white-space:nowrap}
.chips .mq:nth-child(2) .tr{animation-direction:reverse}
```

Reverse the second row's item order too, or the same names keep passing each other side by side.

<!-- v:motion.marquee/ticker-band-divider -->
### 5. Ticker band divider

*Feeling: a bold seam.*

A full-bleed band that doubles as a section break. Analogue uses a thin black strip for a release notice. Hibachi Guru cuts dark video from white page with an orange band. Headspace is the best of the set, a yellow strip whose paired googly eyes aim differently in each instance, so the separator carries the joke. Use it on bold, playful or local brands, at most twice on a page. The separator glyph is where the personality lives, so make one instead of using a dot.

**Seen on** Analogue, Headspace, Hibachi Guru, Deadstock Coffee, Airz Fitness, 11 sites in all. **Suits** bold-colour, expressive, illustrated, photo-led; food-drink, health, ecommerce, local-business.

<!-- v:motion.marquee/giant-type-marquee -->
### 6. Giant type marquee

*Feeling: one last loud moment.*

One huge line runs edge to edge, cropped by both sides. LaunchDarkly runs about 110px of bold type with star separators across a lime footer head. Motto repeats a word at about 120px with an asterisk, second row offset. Spring/Summer rotates one glyph in 3D as the line drifts. Use it once, usually just before the footer. Keep the words readable, since it moves slowly enough to be read a phrase at a time. See `scroll.md` Type that grows or tracks with scroll.

**Seen on** Motto, Motionstrand, Arkansas Museum of Fine Arts, LEA WINERY, LaunchDarkly, 8 sites in all. **Suits** bold-colour, warm-neutral, type-led, gradient-light; agency, culture, food-drink, devtool.

<!-- v:motion.marquee/live-data-ticker -->
### 7. Live data ticker

*Feeling: the business is running right now.*

The strongest marquee here, because it is evidence. Ramp runs a one-line ticker at the hero base: a fixed label, then scrolling labels with tabular values in chips, split by 1px ticks, with values rising live. Liquid AI runs facts in a thin strip above the nav. Use it when you have real numbers, or plainly labelled sample figures. Tabular numerals are required, or digits wobble as values tick.

**Seen on** Ramp, Liquid AI, Utopia Orchestra, Charles Pas. **Suits** light-precision, type-led, photo-led; finance, ai, culture, portfolio.

```css
.tick{display:flex;align-items:center;gap:18px;height:44px;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.tick b{font-weight:500;color:var(--ink);white-space:nowrap}
.tick .mq{flex:1;mask:linear-gradient(90deg,#000 85%,transparent)}
.it{display:flex;gap:8px;align-items:center;padding-right:18px;margin-right:18px;border-right:1px solid var(--line);white-space:nowrap}
.it i{font-style:normal;font-variant-numeric:tabular-nums;color:var(--ink);padding:2px 6px;border-radius:4px;background:var(--surface)}
```

<!-- v:motion.marquee/ghost-text-rows -->
### 8. Ghost text rows

*Feeling: scale as texture.*

The list runs behind something else, not meant to be read. Function Health drifts two rows of condition names behind a chart card, with a small PAUSE MOTION label under it. Hims runs eight faint rows behind a cutout portrait. Nx sends mono task names through two blurred bars, like a processor. Use it when the sheer length of the list is the point. Give the foreground card a solid background and a margin of page colour, so the text passes cleanly behind.

**Seen on** Function Health, Hims, Are.na, Nx, Copilot. **Suits** warm-neutral, photo-led, type-led, dark-precision; health, culture, devtool, finance.

<!-- v:motion.marquee/media-ribbon -->
### 9. Media ribbon

*Feeling: a wall of real moments.*

Rows of photos or video drift across the page. Sam Hoult uses three offset rows of rounded thumbnails, and the wash at each edge softens uneven customer photos. Ritual uses square video tiles with a pause button. Overtime runs a single flush vertical column, which holds all the colour on the page. Stone Island's rail drifts with a text PAUSE in its heading row. Use it for UGC, events and portfolios. It is the marquee most in need of a pause control.

**Seen on** Stone Island, Sam Hoult Beauty, Ritual, Freshly Launched, Overtime. **Suits** photo-led, mono-technical, warm-neutral; agency, fashion, local-business, health.

<!-- v:motion.marquee/state-carrying-band -->
### 10. State carrying band

*Feeling: a ticker that knows where you are.*

Wild runs a fixed band at the viewport bottom whose colour changes with the slide, so it doubles as a progress signal. Mala Project shows caption-style lines that swap every 3s. Use it on expressive sites where a persistent strip fits the concept.

**Seen on** Wild, Mala Project. **Suits** photo-led, expressive; agency, food-drink.

### Mistakes that cheapen a marquee

- **Too fast.** If you cannot read a word, it is noise. Slow it down, then slower again.
- **`gap` on the track.** The loop jumps. Put padding on items.
- **Group narrower than the viewport.** A blank opens at the seam on wide screens.
- **Unmasked ends on a page with no frame.** Items stopping dead at the window edge look cut off.
- **Pixel-sized edge effects on phones.** Use percent, or the mask eats the strip.
- **Mixed logo weights.** Force one colour and match optical size.
- **No pause.** Over 5 seconds of motion needs a stop control, and hover does not count on touch.
- **Decorating with slogans.** If you would not print the line in a static band, do not loop it.
- **Same direction, same speed on two rows.** It reads as one block. Offset them, or vary the speed by about 15 percent.

## Product demo loop

A demo loop has one job: prove the claim beside it without a video to press. It is what the best sites spend their animation budget on, because it is the only motion that sells something. On strong pages the page frame is still, and everything that moves is the product.

What separates great from cheap is whether it is the real thing. Great loops are built from live DOM or canvas, so text stays crisp and matches the page. They run a real scenario with real-looking data, finish, hold long enough to read the result, and reset without a jump. People can pause or take over. Cheap ones are a blurry screen recording, or fake UI with grey bars, or a loop that resets just as you start to read. Motion stays inside the frame.

**Measured.** Loops run 6 to 10s, and Stripe Atlas and Zapier hold their end state before resetting. Tabs change every several seconds and show a timer, and 5 to 8s reads well. Spline ships 5 canvases and no video in its hero, and CleanShot ships nine muted videos. Both are valid. Bun's control transitions run 0.2 to 0.38s on `.16,1,.3,1`. Typing rates in the recipes below were tuned by eye in renders, not measured from sites.

<!-- v:motion.product-demo-loop/scripted-cursor-walkthrough -->
### 1. Scripted cursor walkthrough

*Feeling: someone is using it for you.*

A drawn cursor uses the real interface. Stripe Atlas plays a script of about 6s in a hero card: the cursor waits in open space, the card arrives, a name resolves with a green mark, radio options appear, a button changes to its working state, and a details card slides out. Zapier toggles a control, then a notification expands into a full email, with a pause button. Supabase highlights a row and a real button under a hand cursor. Use it when the product is a flow with clicks.

**Seen on** Stripe Atlas, Devin Desktop, Zapier, Supabase, Are.na. **Suits** light-precision, gradient-light, warm-neutral, type-led; saas, ai, devtool, culture.

```html
<div class="cx"><div class="cy"><svg viewBox="0 0 18 22"><!-- your cursor --></svg></div></div>
```
```css
/* one element per axis, each on its own curve: the path comes out as an arc */
.cx{position:absolute;left:0;top:0;pointer-events:none;transition:transform var(--d,.9s) cubic-bezier(.45,.05,.3,1)}
.cy{transition:transform var(--d,.9s) cubic-bezier(.3,.1,.2,1)}
.cy svg{transition:transform .08s var(--ease-ui)}.press svg{transform:scale(.86)}
.btn.down{transform:scale(.97)}
```
```js
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function move([x,y],d=.9){cx.style.setProperty('--d',d+'s');cy.style.setProperty('--d',d+'s');
  cx.style.transform=`translateX(${x}px)`;cy.style.transform=`translateY(${y}px)`;return wait(d*1000+140)}
async function press(el){cy.classList.add('press');el?.classList.add('down');await wait(110);
  cy.classList.remove('press');el?.classList.remove('down');await wait(120)}
async function type(el,t){for(const ch of t){el.textContent+=ch;await wait(38+Math.random()*52+(ch===' '?90:0))}}
```

Three small things carry it. The cursor settles for 140ms before it clicks, because people aim. Press dips the cursor and the button together, because that is what a click looks like. A result stays on screen for about 2s. Read target positions from the DOM on each loop, not hard-coded numbers, or it misses after a resize. Under reduced motion, render the finished state with no cursor.

<!-- v:motion.product-demo-loop/autoplay-tabs-with-timer -->
### 2. Autoplay tabs with timer

*Feeling: the change is on purpose.*

Tabs advance themselves and show when. Amplitude grows a 2px line along the active tab's top edge. Lithic fills a ring. Energen fills 3px tab bars, changes every metric in the frame and adds a pause. Mixpanel fills the active tab and recolours the hero slats with it. Use it when you have three to five product areas to show in one slot. The timer turns surprise into expectation. See `interaction.md` Tabs.

**Seen on** Amplitude, Vercel AI SDK, Lithic, Energen Digital, Mixpanel. **Suits** light-precision, bold-colour, gradient-light; saas, devtool, finance, agency.

```css
.tab{position:relative}
.tab::before{content:"";position:absolute;left:0;right:0;top:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left}
.tab[aria-selected=true]::before{animation:fill var(--dwell,6s) linear both}
.paused .tab::before{animation-play-state:paused}
.manual .tab[aria-selected=true]::before{animation:none;transform:scaleX(1)}
@keyframes fill{to{transform:scaleX(1)}}
```
```js
const arm=ms=>{clearTimeout(timer);start=performance.now();left=ms;timer=setTimeout(()=>{show((i+1)%n);arm(DWELL)},ms)};
box.addEventListener('pointerenter',()=>{clearTimeout(timer);left-=performance.now()-start;box.classList.add('paused')});
box.addEventListener('pointerleave',()=>{box.classList.remove('paused');arm(left)});
tabs.addEventListener('click',e=>{clearTimeout(timer);box.classList.add('manual');show(index(e))});// a click ends autoplay for good
```

Pause the timer and the bar together, and resume from what was left rather than restarting. A click stops the cycle for good, because the person has taken over. Keep the panel swap to about 0.28s.

<!-- v:motion.product-demo-loop/typed-input-loop -->
### 3. Typed input loop

*Feeling: the claim, happening.*

A real input fills itself. Tally types a form title letter by letter, then opens a slash menu. Docker types on the left while log rows arrive on the right, with older rows dimming to about 40 percent, and the count in the subhead steps up. Exa fills its console over about 2s in place of a hero entrance. Bun walks real output through five steps with a progress line, hover pause, and replay and next controls. Use it for tools with an input. Show real commands.

**Seen on** Exa, Bun, Tally, Codecademy, VS Code, 6 sites in all. **Suits** light-precision, mono-technical, illustrated; devtool, ai, saas, education.

```js
async function type(t){for(const ch of t){c.textContent+=ch;
  await wait(ch===' '?150+Math.random()*90:38+Math.random()*46)}}// bursts, not a metronome
```
```css
.cur{display:inline-block;width:.6em;height:1.1em;vertical-align:-.18em;background:currentColor}
.cur.idle{animation:blink 1.06s steps(1) infinite}@keyframes blink{50%{opacity:0}}
.log div{opacity:0;transform:translateY(3px);transition:opacity .25s var(--ease-ui),transform .25s var(--ease-ui)}
.log div.in{opacity:1;transform:none}.log div.old{opacity:.42}
```

Blink the caret only while idle, never during typing. Reserve the output area's height so the page does not grow as rows arrive.

<!-- v:motion.product-demo-loop/live-state-cards -->
### 4. Live state cards

*Feeling: small truths, running.*

Cards tick in place. Polar's figures move, a pane types a prompt, a checklist advances with spinner, tick and dimmed pending rows. Svix fills a delivery bar, resolves a send to delivered, and ticks a tree of checkboxes. Copilot's phone counts a balance down, extends a chart, and flips its tag. Use it in bento and feature grids, where each card proves one thing in under 8s. Run only the cards on screen: pause the rest with an IntersectionObserver. See `transitions.md` Number ticking and Chart draw-in.

**Seen on** Polar, Bauhaus Clock, Stripe Payments, Copilot, Svix, 6 sites in all. **Suits** light-precision, gradient-light, dark-precision, illustrated; saas, finance, devtool, health.

<!-- v:motion.product-demo-loop/camera-move-demo -->
### 5. Camera move demo

*Feeling: the frame directs your eye.*

The camera does the telling. Framer's demo opens zoomed hard into a prompt being typed at about 100px, then pulls back to reveal the whole builder with an agent log streaming, with a small timer showing that it is a timeline. Relume pushes a full window in about 3x until three big buttons fill the panel. Use it for one hero. Render the UI as DOM or as vector, or the zoom shows pixels.

**Seen on** Framer, Relume. **Suits** dark-precision, bold-colour; saas.

<!-- v:motion.product-demo-loop/muted-clip-tile -->
### 6. Muted clip tile

*Feeling: real footage, kept small.*

Video in a tile. CleanShot runs nine muted clips, each with a synthetic cursor acting. Synthesis cuts session footage every 2 to 3s in a hero card. Use it when the product is hard to fake in DOM. Add a poster, lazy load below the fold, use `playsinline`, and pause off screen.

**Seen on** CleanShot X, Synthesis, Canva. **Suits** bold-colour, gradient-light; saas, education.

<!-- v:motion.product-demo-loop/schematic-traffic -->
### 7. Schematic traffic

*Feeling: seeing the invisible.*

Draw what the product does and run it. Cloudflare animates packets in a band under the nav, while everything else holds. Chromatic moves a belt of component cards through a scan line, and they change state and pick up a tick. Wispr Flow pulls faded words along a curve into a waveform capsule and sends polished words out on a dark ribbon, which explains the product without a screenshot. Use it for infrastructure and invisible products. Confine it to a band so it never competes with the headline.

**Seen on** Wispr Flow, Cloudflare Workers, Chromatic. **Suits** light-precision, warm-neutral, dark-precision; devtool, saas.

<!-- v:motion.product-demo-loop/multiplayer-presence -->
### 8. Multiplayer presence

*Feeling: other people are here.*

Penpot moves named coloured cursors through an editor while a caret edits a label. FigJam's cursors drift with square name tags and act on stickies. Spline shows the editor working live from canvases. Use it for collaboration products, three cursors at most, and let them do real things.

**Seen on** Spline, Penpot, FigJam. **Suits** dark-precision, gradient-light, bold-colour; saas.

<!-- v:motion.product-demo-loop/generative-glyph-loop -->
### 9. Generative glyph loop

*Feeling: drawn, not filmed.*

A tiny loop drawn from characters. Ghostty flips an ASCII ghost like a flipbook, with no canvas or video. Yamauchi swaps coloured squares on the logo's own grid. Sequoia draws portfolio marks in jittery chalk on a canvas. Evenark shows a ring of dots orbiting a disc, client work actually running. Use it for technical or craft brands. Stepped timing at 6 to 12 frames a second is what keeps it feeling hand-made. See `webgl.md` Dither and halftone.

**Seen on** Sequoia, Evenark, Ghostty, Yamauchi No.10 Family Office. **Suits** mono-technical, warm-neutral, photo-led; finance, agency, devtool.

<!-- v:motion.product-demo-loop/media-pager-control -->
### 10. Media pager control

*Feeling: the loop can be stopped.*

The control that belongs to a loop, kept small. Gagosian replaces dots and arrows with 2px segments, the current one filling as a timer. New Material stacks a 6px vertical pager beside the card. Betterment puts a translucent pause pill at bottom left of its hero. Use one on every autoplaying hero, with the accessible name of the action in it.

**Seen on** Gagosian, New Material, Betterment. **Suits** photo-led, light-precision, bold-colour; culture, agency, finance.

### Mistakes that cheapen a demo

- **Fake UI.** Grey bars say there is no product. Use real states, real labels, and sample data.
- **A straight cursor.** Constant speed on a ruled line is a robot. Two axes, two curves.
- **No hold.** The reset comes just as you begin to read. Hold the result for 2 seconds.
- **A metronome typist.** Vary the delay, with a beat at every space.
- **A blink during typing.** The caret stays solid while typing, and blinks only when idle.
- **Timer and content out of sync.** Pause both, and resume from what was left.
- **Fighting the person.** A click ends autoplay for good.
- **Running off screen.** Pause loops outside the viewport. It saves battery and keeps them at the start when seen.
- **Motion outside the frame.** The product moves. The page stays still.
- **Hard-coded positions.** Read from the DOM on each loop, or it misses after a resize.

## Cursor effect

A cursor effect has one job: label what a click or drag will do here. The pointer is the one thing the person is already looking at, so a small word beside it is the most efficient label on the page. That is the honest use. Most of the rest is decoration, and it costs something, because people aim with their cursor and it is theirs.

What separates great from cheap is whether the effect adds information. Great ones appear only over media, say something specific, stay small, and leave the system cursor alone. Cheap ones replace the arrow everywhere, trail a blob behind it, or add a mix-blend circle to a page that did not need one. Only 18 rows in this set tagged a cursor effect, nearly all from agencies and portfolios, and none came from a gold page. Keep them off product sites.

**Measured.** Tags are 40 to 94px wide, 10 to 13px type, offset about 15px down and right. Instruction discs are about 120px. Replacement dots are 12 to 20px. All of them must turn off for touch, and for `pointer:coarse`.

<!-- v:motion.cursor-effect/context-label-tag -->
### 1. Context label tag

*Feeling: a caption attached to the pointer.*

The only cursor effect worth using on most sites. A small tag trails the pointer over media. Fantasy uses a near-black translucent tag about 66x33, with 13px VIEW. Basement Studio brackets its label on a tight black box. Athletics changes the wording by context. Use it on image grids and project tiles, where the whole tile is the link and a button would clutter the picture. See `interaction.md` Contextual cursor.

**Seen on** Athletics, Basement Studio, Spring/Summer, Potrero, Fantasy. **Suits** type-led, dark-precision, bold-colour, render-3d; agency.

```css
.tag{position:fixed;left:0;top:0;z-index:9;pointer-events:none;padding:8px 12px;border-radius:8px;
  background:color-mix(in srgb,var(--ink) 72%,transparent);color:var(--bg);backdrop-filter:blur(8px);font:600 13px/1 var(--font-text);letter-spacing:.04em;
  opacity:0;transform:translate(var(--x,0),var(--y,0)) scale(.8);transition:opacity .2s var(--ease-ui),scale .2s var(--ease-ui)}
.tag.on{opacity:1;transform:translate(var(--x,0),var(--y,0)) scale(1)}
@media (hover:none){.tag{display:none}}
```
```js
let tx=0,ty=0,x=0,y=0,on=false,raf=0;
function step(){x+=(tx-x)*.18;y+=(ty-y)*.18;tag.style.setProperty('--x',x.toFixed(1)+'px');tag.style.setProperty('--y',y.toFixed(1)+'px');
  raf=(on||Math.abs(tx-x)>.3)?requestAnimationFrame(step):0}
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;tx=e.clientX+15;ty=e.clientY+15;
  const m=e.target.closest('[data-cursor]');if(m)tag.textContent=m.dataset.cursor;
  if(!!m!==on){on=!!m;tag.classList.toggle('on',on)}if(!raf)raf=requestAnimationFrame(step)},{passive:true});
```

Lerp at about .18: enough lag to feel attached, not enough to drag behind. Stop the loop when idle. Keep the real cursor showing. The link still needs its own text for keyboard and screen readers.

<!-- v:motion.cursor-effect/instruction-disc -->
### 2. Instruction disc

*Feeling: it tells you the gesture.*

Basic Agency turns the pointer into a pale 120px disc with 14px DRAG over a horizontal rail, and uses the same disc for WATCH REEL. Use it where a gesture is not obvious, like a drag rail or a video. It appears only where that gesture works, and it can be large, because it is an instruction rather than a decoration. See `interaction.md` Drag carousel.

**Seen on** Basic Agency. **Suits** type-led; agency.

<!-- v:motion.cursor-effect/brand-dot-cursor -->
### 3. Brand dot cursor

*Feeling: a small mark of authorship.*

The arrow is replaced with a small dot or square. motusmade uses a 12px black dot, LEA Winery a 20px translucent terracotta one, and Effepinna flips dot colour between grounds. Clarisse Michard grows a 12px square to a 36px sound tile over video, which is the better version, as it adds meaning. Use it on portfolios only. It removes the precise hotspot, so keep form fields on the normal cursor.

**Seen on** motusmade studio, LEA WINERY, Camille Mormal, Effepinna Studio, Clarisse Michard. **Suits** light-precision, warm-neutral, photo-led, bold-colour; portfolio, agency, food-drink.

<!-- v:motion.cursor-effect/physics-object -->
### 4. Physics object

*Feeling: a thing with its own weight.*

Muda runs a solid 108px circle fixed over all content. Scroll throws it down the viewport and stretches it into a tilted ellipse along velocity, then it recovers round at rest. This is not following the mouse, and that is why it is good: it is a character. Use it on culture and event sites where the object is the brand. Keep a clear route away from controls, and turn it off for reduced motion.

**Seen on** Muda 26, cagdascecen.com. **Suits** photo-led, expressive; culture, portfolio.

<!-- v:motion.cursor-effect/branded-pointer -->
### 5. Branded pointer

*Feeling: a joke, if the brand can carry it.*

The pointer becomes a custom image. Diego's rides a taco emoji, and it only survives because the brand is that playful. Hawl places arrow cursors on the page to suggest a live canvas, which is closer to illustration. Use the CSS `cursor` property with a small image and a fallback. It needs no script.

**Seen on** Patricia Ordoñez, Hawl Design, Diego's Authentic Foods. **Suits** soft-pastel, dark-precision, expressive; portfolio, agency, food-drink.

<!-- v:motion.cursor-effect/field-reacts-to-pointer -->
### 6. Field reacts to pointer

*Feeling: the page notices you.*

DixonBaxi changes the page rather than the cursor. When the pointer enters the rail, the headline blurs about 8px and drops to about 20 percent, the field underline nearly vanishes, and the prompt returns when focus leaves. Attention moves with intent. Use it where two areas compete and one should take over. It needs no custom cursor, so it costs nothing in usability.

**Seen on** DixonBaxi. **Suits** expressive; agency.

### Mistakes that cheapen a cursor

- **Replacing the arrow on a product site.** No gold page does it. People came to use the page.
- **A blob with a blend mode.** The most recognisable template effect in this family.
- **Trail lag.** Past about .1 lerp the tag feels drunk. Stay near .18.
- **Running on touch.** Check `pointerType` and `@media (hover:none)`.
- **A tag bigger than the point.** It should be smaller than the labels inside the work.
- **Effects that cover text.** A follower passing over a sentence blocks reading.
- **An idle animation loop.** Stop `requestAnimationFrame` when nothing is moving.

## Page transition

A page transition has one job: keep a sense of place across a navigation. Almost no strong product site animates one. Only 7 rows of 896 were tagged here, and only one came from a gold site. On product pages a fast hard navigation is the right default, because a person who clicked is waiting, and any wipe adds to that wait.

What separates great from cheap is whether it starts from the person's action and stays out of the way. Great ones carry an element across, or use a wipe under a second, and they skip themselves on repeat. Cheap ones play a full-screen loader between every page. If you add anything to a product site, add a cross-document view transition crossfade at about 200ms, which is one line of CSS, needs no router, and fails safely. See `transitions.md` Cross-document view transition, Shared-element morph with FLIP and Two speeds.

**Measured.** Wipes run 0.8 to 1.4s on strong in-out curves such as `.86,0,.07,1` and `.23,1,.32,1`. Hold the total under 1s for anything a person navigates often.

<!-- v:motion.page-transition/colour-wipe -->
### 1. Colour wipe

*Feeling: a curtain in the brand colour.*

A panel crosses the screen, and the route changes while covered. Delassus uses full-screen flat colours on `.86,0,.07,1` over 1s. Quynh's rust panel carries a centred line and logo. Use it on portfolios and small brand sites. See `transitions.md` Route colour wipe.

**Seen on** Delassus, Quynh Folio. **Suits** illustrated, expressive; food-drink, portfolio.

```css
.wipe{position:fixed;inset:0;z-index:9;background:var(--accent);transform:translateY(100%)}
.wipe.run{animation:wipe 1.1s cubic-bezier(.86,0,.07,1) both}
@keyframes wipe{0%{transform:translateY(100%)}45%,55%{transform:none}100%{transform:translateY(-100%)}}
```

Cover, swap, reveal. Change the route at about 520ms, inside the hold, when nothing can be seen. The hold from 45 to 55 percent is the safety margin for slow pages.

<!-- v:motion.page-transition/slat-wipe -->
### 2. Slat wipe

*Feeling: something precise being cut.*

Sen Knife masks name and product with about ten vertical bars staggering across the width, so the outgoing title stays legible in the gaps while the next one builds. The bars feel like blades, which is why it belongs to this product. Use it for a product range or chapters. Each slat is a clipped copy of the next slide, so limit it to 12 slats.

**Seen on** sen knife by Takahashikusu. **Suits** render-3d; food-drink.

```css
.strip{position:absolute;inset:0;clip-path:inset(0 var(--r) 0 var(--l));animation:open 1.4s cubic-bezier(.23,1,.32,1) both;animation-delay:calc(var(--i)*55ms)}
@keyframes open{from{clip-path:inset(0 var(--r) 0 calc(100% - var(--r)))}to{clip-path:inset(0 var(--r) 0 var(--l))}}
```
```js
const N=12,w=100/N;let html='';
for(let i=0;i<N;i++){const l=(i*w).toFixed(3),r=(100-(i+1)*w+.04).toFixed(3);html+=`<div class=strip style="--i:${i};--l:${l}%;--r:${r}%">${nextSlide}</div>`}
stage.insertAdjacentHTML('beforeend',html);
```

Add a hair of overlap, the `.04` above, or a pale seam shows between slats. Remove the strips and swap in the real slide when the last one ends.

<!-- v:motion.page-transition/in-place-swap -->
### 3. In-place swap

*Feeling: the layout is the constant.*

A24 keeps its frame fixed while each title and still cross-swap in the same position. Use it for a hero or a shared layout across routes. It is the quietest authored transition, and with a view transition it needs no custom code.

**Seen on** A24. **Suits** photo-led; culture.

<!-- v:motion.page-transition/theme-reskin-wipe -->
### 4. Theme reskin wipe

*Feeling: a mood switch.*

Clarisse Michard's small outlined toggle reskins the whole page in a wipe, with a duplicate nav sliding in below the old one. It is a dark-mode toggle turned into a brand gesture. Use it on a portfolio.

**Seen on** Clarisse Michard. **Suits** type-led; portfolio.

<!-- v:motion.page-transition/exposure-flash -->
### 5. Exposure flash

*Feeling: a shutter between chapters.*

YLEM flips a dark film to a near-white negative exposure and back, separating chapters like a shutter. Use it once or twice in a film piece. Never flash more than three times in a second, which is a real safety limit.

**Seen on** YLEM. **Suits** render-3d; fashion.

<!-- v:motion.page-transition/disc-iris -->
### 6. Disc iris

*Feeling: the screen closes around a point.*

Little Troop scales a black disc over white before the next scene. Animate `clip-path:circle()` and start from the click point, which makes the transition feel caused by the person. Use it on playful sites.

**Seen on** Little Troop. **Suits** expressive; agency.

### Mistakes that cheapen a transition

- **A loader between pages.** Each click pays again. A person navigating fast will hate it.
- **Swapping before covered.** Any flash of the new page breaks the illusion.
- **No skip on repeat.** Second time through, it should be instant.
- **Blocking the back button.** Navigation must never wait for an animation.
- **Over a second on anything frequent.** Cap it.
- **A wipe on a docs site.** Instant is the feature.

## Before you call it done

- Name the language. If you cannot say which of the ten this page speaks, you have a sample book.
- Say what each moving thing means. If the answer is "it looks nice", take it out.
- Count the things moving at rest. One is the norm.
- Find your fade-ups. Keep one row at most, with travel under 12px.
- Time the first readable sentence. It should be under about 1.2s on a page that is selling something and under about 2s on any page, and nothing that matters waits for media.
- Step through the load on a throttled connection and look for a shift or a flash.
- Scrub frame by frame. Slow fades must still be changing at the point you expected, or the curve is too sharp.
- Check that hover starts at once, finishes in about 200ms, and reverses if the pointer leaves halfway.
- Count your curves. One or two, plus one for entrances.
- Check every loop for a pause, and that a click ends autoplay.
- Turn on reduced motion. All content must be visible, in its end state, with nothing waiting on a script.
- Open it on a phone. Each pin has a stacked version, hover states are not stuck, cursors are gone, and edge effects still leave content visible.
- Scroll fast from top to bottom, then jump to an anchor. Nothing should be missing.
