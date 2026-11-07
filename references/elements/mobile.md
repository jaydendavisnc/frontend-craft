# Phone

A phone page is not a small desktop page. The width falls to about a quarter, the height barely moves, the cursor is gone, and one thumb does everything from the bottom of the glass. So the job is to recompose, not to squeeze: decide what comes first, what the screen edge may crop, what gets swapped for something a thumb can use, and what gets cut. This chapter teaches those moves, what happens to type and spacing, how wide tables, code and product shots are handled, how fixed bars and bottom actions work, and what stays on screen as navigation. The menu that opens from a glyph belongs to `nav.md`. Here we cover everything that shows before you tap it.

It holds 55 canonical variants clustered from 430 analyst rows across 395 sites, 120 of them gold: 37 for phone layout and 18 for phone nav. The strongest variants were checked against real 390 by 844 frames, all 131 gold first screens were read by eye for a census, left edges on 451 sites were measured from pixels, and 41 variants were rebuilt and rendered next to the real thing, which is where the corrections and the mistake lists come from. The same variants live in `data/elements/mobile.jsonl`, which is what the sampler deals from. Code uses only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, plus the derived `--line-strong` and `--well` from `surface.md`, and `--font-mono` where code needs it, so any palette and type system drops in. Numbers come from a 390 by 844 viewport unless stated. Counts mean sites. Hex values are neutral greys only.

**Contents.** [Recompose, do not squeeze](#recompose-do-not-squeeze) · [What we measured](#what-we-measured) · [Type and spacing](#type-and-spacing) · [Seven phone systems](#seven-phone-systems)

- **[Phone layout](#phone-layout):** [Order](#order-what-comes-first) · [Product shots and art](#product-shots-and-art) · [Cut and swap](#cut-and-swap) · [Calls to action](#calls-to-action) · [Collections](#collections) · [Wide content](#wide-content) · [Structure that survives](#structure-that-survives) · [Type as the layout](#type-as-the-layout) · [Mistakes](#mistakes-that-cheapen-a-phone-layout)
- **[Phone nav](#phone-nav):** [The top bar](#the-top-bar) · [The foot of the screen](#the-foot-of-the-screen) · [Second rows](#second-rows) · [Mistakes](#mistakes-that-cheapen-phone-nav)
- [Before you call it done](#before-you-call-it-done)

## Recompose, do not squeeze

Make these five decisions in order, for every page. Stacking the desktop columns is what you get if you skip them.

1. **Rank the content.** Write down the one thing a visitor on a phone came for, then the next two. Desktop lets six things share a screen. A phone shows one and a half. Most of what follows is a consequence of this list.
2. **Compose the first screen as a picture.** Treat 390 by 844 as a canvas with one first read and one thing cut by the bottom edge. A real browser's bars take a further 100 to 180px, so keep the primary action above about y=640, and size with `svh`, not `vh`.
3. **Give every wide thing one of four moves.** Keep, crop, swap or cut. The table below is the whole method.
4. **Choose the action's form.** Full width, a pair, or hugging its label. Full width is not the default. See the census below.
5. **Decide what stays fixed.** At most one bar at the top and one at the base, and a phone screen with both has lost 130px before the page starts.

| Move | What happens | Right for | Wrong for |
|---|---|---|---|
| Keep | Same object, new margins | Rails, inset panels, ruled cells, a strict type system | Anything with a fixed width over 390 |
| Crop | Real size, and the screen edge cuts it | Interfaces, hardware, photos, code, wordmarks | Prices, forms, anything that must be read whole |
| Swap | A different control does the same job | Tabs, wide tables, sidebars, hover states, desktop downloads | Things that already work at this size |
| Cut | It goes | Perimeter pieces, decoration, secondary controls, notes | The primary action, the proof, the signature |

Scaling is not a move. Shrinking an interface to fit turns 12px text into 5px, and the eye reads that as broken. Of the 355 layout rows, 161 describe something kept, 85 something cropped or bled, and 53 something dropped. Good phone design is mostly about what survives.

**Cut in this order.** Secondary nav links first. Then side rails and margin notes, floating callouts and connector wires, secondary controls inside a product shot, hover-only details, decorative art, and last a second paragraph. Exa keeps the input and output of its console and drops the latency and category controls. Zed drops hover keycaps. Polar drops its announcement. Announcement bars are usually kept: 9 of the 15 rows that discuss one wrap it to two or three lines or truncate it with an ellipsis. Never cut the primary action, the proof, the signature, or the fact the visitor came for: price, hours, the date of the show.

**Where things move.** These reorders recur:

| On desktop | On a phone | Seen on |
|---|---|---|
| Media beside the copy | Under the copy, or above it if it explains faster | Most sites; Expo and GoCardless flip it |
| Labels beside content | Directly above content, same left edge | Work & Co |
| Dates in a left rail | A small muted line above each title | Linear Changelog |
| Margin notes | At the end, under one rule | Aniket |
| Caption on the image | Below it, on the page ground | BIG, Strava |
| Right rail of tabs | A label grid above the copy | Lithic |
| Filter sidebar | Above the results, collapsed to one control | Framer Templates |
| Stats on the video | Below it, on a plain band | Function Health |
| Chat bubble | A small labelled pill | Jasper |

## What we measured

Desktop specs come from the deep pass of 341 sites. Phone values come from frames, because a site's phone layout was not in the deep pass. Where a number is an analyst's estimate, we say so.

| Fact | Value |
|---|---|
| Sideways overflow at 390 | 1 of 117 gold, 8 of 310 silver, 1 of 97 expressive |
| Left edge of content, 451 sites, from pixels | 16px 22%, 20px 20%, 24px 16%, under 14px 4%, over 26px 37% (mostly centred stacks) |
| Same, gold only | 20px 25%, 16px 18%, 24px 14%, 32px 11% |
| Hero heading, 88 sites joined to desktop specs | 40px median, middle half 34 to 44 |
| Heading lines, where stated | 2 lines on 40 rows, 3 on 31, 4 on 16 |
| Hero alignment, gold, by eye | about 60 left, 37 centred |
| Largest gap in a mid-page frame, 418 sites | 94px median, middle half 65 to 133 |
| Bar still shows an action or sign-in, gold | about 1 in 4 of all sites, and most product sites |
| Nav or dock at the foot of the screen | 14 of 75 nav rows, 2 of them gold |

Three things here are worth reading twice.

**Three gutters.** 16, 20 and 24 are real spikes in the pixel data, and hardly anything sits between them. Pick one per site. Nothing above 32 counts as a gutter, it is a centred stack.

**Headlines collapse to one band.** Whatever the desktop size, the phone hero lands between about 32 and 48:

| Desktop heading | Sites | Phone heading | Ratio |
|---|---|---|---|
| 72 and up | 18 | 44 (40 to 54) | 0.53 |
| 56 to 71 | 36 | 40 (36 to 40) | 0.62 |
| 40 to 55 | 16 | 32 (32 to 44) | 0.67 |
| Under 40 | 18 | 35 (30 to 44) | 1.17 |

The last row grows because some of those `h1` tags are small labels on desktop. The lesson stands: do not derive a phone heading by multiplying. Set it directly.

**Full-width buttons are not the norm.** The usual advice says a phone CTA fills the column. We read the 62 gold heroes that show a CTA on the first screen:

| Form | Gold heroes | Share |
|---|---|---|
| Hugs its label, alone or stacked at its own width | 25 | 40% |
| A pair on one row | 20 | 32% |
| Fills the column | 17 | 27% |

Full width belongs to pages with one job. Most strong pages let the button stay a button.

## Type and spacing

Type does not shrink evenly. Display falls by about 40 percent, body does not move at all, and labels stay where they were. The ratio between headline and body drops from about 3.5 to 1 to about 2.5 to 1, so hierarchy has to come from position and weight, not size alone.

| Role | Desktop | Phone | Note |
|---|---|---|---|
| Hero heading | 56 | 36 to 48 | Two to four lines. Up to 17vw when type is the design |
| Section heading | 36 to 48 | 26 to 32 | Hold the tracking. Spline keeps it tight at 32 |
| Card or entry title | 20 to 24 | 18 to 26 | Often the same size, or larger: Anthropic's feed runs 26/31 |
| Lead | 18 to 20 | 16 to 18, on 24 to 28 | On a light ground, consider full ink rather than grey |
| Body | 16 | 16 | Never smaller. 14 only in a dense product system |
| Labels | 12 to 13 | 12 to 13 | Unchanged |
| Button | 14 to 16 | 15 to 16 | |
| Field | any | 16 | Under 16px, iOS zooms the page on focus |

Spacing compresses by about half. Desktop section padding runs 96px on each side of a boundary, so about 190px between sections. The largest gap in a mid-page phone frame is 94px at the median. Use 64 to 96px between sections, 24 to 48px between groups, 12 to 16px between related items and 8 to 12px between buttons. Keep the proportions and the page still breathes.

Add this once. Each line is here because a demo broke without it. Three clamps put 360, 390 and 430 on real values.

```css
:root{--gut:20px;--sec:clamp(64px,18vw,96px)}                  /* gutter: pick 16, 20 or 24, then hold it */
html{-webkit-text-size-adjust:100%;scroll-padding-top:72px}    /* anchors clear a sticky bar */
body{overflow-x:clip}                                          /* clip, not hidden: hidden breaks sticky */
.sec{padding-block:calc(var(--sec)/2);padding-inline:var(--gut)}
h1{font-size:clamp(36px,11vw,48px);line-height:1.06;letter-spacing:-.025em;text-wrap:balance}
h2{font-size:clamp(26px,7.4vw,32px);line-height:1.12;letter-spacing:-.02em;text-wrap:balance}
p{text-wrap:pretty;max-width:34em}
input,select,textarea{font-size:16px}                          /* stops the iOS zoom */
img,video{max-width:100%;height:auto}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
@media(max-width:700px){.grid{grid-template-columns:minmax(0,1fr)}}  /* minmax(0,..): a plain 1fr grows to fit a wide child */
@media(hover:hover){.btn:hover{opacity:.85}}                   /* no sticky hover after a tap */
```

Put `viewport-fit=cover` in the viewport meta, or `env(safe-area-inset-bottom)` returns zero. Scope phone rules to the component, because a short shared class name in a media query will crush something else on the page. `hero.md` has a fuller conversion block for hero code.

## Seven phone systems

Variants work together. Choose one row, then take the phone's first screen, action, bar and collections from it. Two sites built from different rows will look unrelated even on the same breakpoint, so let the deal or the brief decide.

| System | First screen | Action | Bar | Collections | Reference |
|---|---|---|---|---|---|
| Instrument | Copy, then UI bleeding right | Pair or hug | Logo, action, menu | Ruled cells, clipped code | Linear, Vercel, Zed |
| Conversion | Copy, then shot at the fold | Full-width stack, sticky bar | Logo, action, menu | Stacked plans | Customer.io, Stripe Connect |
| Object | Inset panel holding the hero | Hug, near the panel base | Floating card | Same radius throughout | Lithic, Meridian, mymind |
| Shop | Category row, then photo | Hug on the image | Mark and icons | Two-up tiles | Huel, Hims, Bonobos |
| Poster | Full art, copy low | Hug or text link | Bare glyph or the word Menu | Image and caption | A24, Polestar, Apple |
| Editorial | The document itself | Text links | Word or none | Hairline feed | Monocle, Kinfolk, Anthropic News |
| App | Search and rails | None | Bottom tabs | Peek rails | Airbnb, Sonder |

## Phone layout

A phone layout must put one clear thing in the first 844px, keep the rest within reach of a thumb, and hold the site's identity while the width falls by three quarters.

What separates great from cheap is whether anyone made decisions. A cheap phone page is the desktop page with the columns collapsed: every section the same stack, a shrunken screenshot, three full-width buttons, the same centred text for ten screens. A great one has a composed first screen, with something real cut by an edge. Its interfaces are cropped, not scaled. Its signature survives, even when that means keeping two arcs of a disc, or a rail 8px from the glass. The phone version has fewer pieces and more confidence, and you could not mistake it for an automatic reflow.

Choose by what you have. A real interface: crop it. A physical product: let the object bleed. Strong photography: full art with copy low, and a recut image. A form that converts: keep it first. A list of things to choose from: two-up, not a long stack. Nothing but words: treat it as a document and do very little.

Measured ranges: gutters 16, 20 or 24. Hero heading 32 to 48, or 17vw held large. Action 44 to 56px tall with 8 to 16px between buttons. Inset panels 8 to 20px from the glass. Rails show 30 to 65px of the next card. Fixed bars 56 to 72px plus safe area.

### Order: what comes first

<!-- v:mobile.phone-layout/copy-then-object-at-fold -->
#### Copy then object at the fold

*Feeling: clear, and it pulls you down the page.*

Headline, sub, action, then one real object at column width with only its top showing. This is the default for product pages, because the crop at the fold does the work of a scroll cue. Use it whenever the pitch needs reading before the picture makes sense. Avoid it when the object is the reason to come, where object first or full art wins.

Set 16 to 24px gutters, a 36 to 48px heading, then a 40 to 48px gap to the object. Show 100 to 200px of it above the fold, and make sure what shows is dense. Drop any frame around it, because a tinted tray plus an inner card reads as a box in a box at this width. On Customer.io the app runs edge to edge with one hairline above it.

**Seen on** Sourcegraph, Meta AI, Vercel AI SDK, Framework, Stripe Climate, 24 sites in all. **Suits** light-precision, gradient-light, dark-precision, photo-led; devtool, finance, saas, ai.

```css
.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:48px;align-items:center}
@media(max-width:700px){
  .hero{grid-template-columns:minmax(0,1fr);gap:40px;padding:48px 20px 0}
  .sub{font-size:18px;line-height:25px;margin-top:16px}
  /* The shot loses its frame, runs to both edges and starts above the fold */
  .shot{height:420px;margin-inline:-20px;border-radius:0;background:none;box-shadow:none;overflow:hidden}
  .app{border-radius:0;box-shadow:0 -1px 0 var(--line);padding:16px 20px}
}
```

<!-- v:mobile.phone-layout/object-first-stack -->
#### Object first stack

*Feeling: show, then tell.*

The art moves from beside the copy to above it. Expo's icon burst sits on top at about 330px, with a centred 48/52 heading under it. Brilliant lifts a fan of cards above the headline and lets it bleed off both edges. GoCardless opens on a 342 by 192 film. Use it when the image explains the product faster than the sentence, or when it is the brand's most distinctive thing. Do not use it when the object is generic, because you have spent the first read on a stock picture.

Keep the object under 340px tall, so the headline still lands in the first screen. Flip the order in CSS, not in the source, so a screen reader still hears the headline first. Everything through the primary action should fit above the fold.

**Seen on** Babylonstoren, Brilliant, Expo, Blue Bottle, Ne Geurra, 22 sites in all. **Suits** bold-colour, photo-led, warm-neutral, light-precision; ecommerce, education, portfolio, brand.

```css
@media(max-width:700px){
  .hero{grid-template-columns:minmax(0,1fr);gap:8px;padding:0 16px;text-align:center}
  .art{order:-1;max-width:330px;margin-inline:auto}   /* visual order flips, source stays headline first */
  h1{font-size:48px;line-height:52px}
}
```

<!-- v:mobile.phone-layout/form-stays-first -->
#### Form stays first

*Feeling: start now, right here.*

The conversion element is the hero and nothing is allowed above it. Asana keeps two single sign-on pills on a row, then an email field and Continue side by side, with its diagram pushed underneath. Sonder and key.co keep a booking form in the first screen. GiveDirectly keeps the donation widget with its amount chips. Use it for sign-up, booking, donation and search, wherever the form is the product's front door. Avoid it for anything that needs persuading first.

Heading on no more than three lines, or the form slides down by a whole line of type. Fields 48px tall at 16px text, with the right `type`, `inputmode` and `autocomplete` so the phone offers the right keyboard and fills it in. Single sign-on pills are large targets, 56 to 64px tall, and they belong side by side.

**Seen on** Asana, Fundrise, Forma24, GiveDirectly, Brex, 11 sites in all. **Suits** light-precision, photo-led, dark-precision, warm-neutral; finance, agency, ecommerce, saas.

```css
.sso{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.sso a{height:64px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--line-strong);
  display:flex;align-items:center;justify-content:center;gap:8px;font-weight:600}
.email{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px}
.email input{height:48px;min-width:0;padding:0 12px;font-size:16px;border:1.5px solid var(--ink-2);border-radius:8px}
.email button{height:48px;padding:0 20px;border-radius:999px;background:var(--ink);color:var(--bg);font-weight:600}
```

<!-- v:mobile.phone-layout/bottom-anchored-on-full-art -->
#### Bottom anchored on full art

*Feeling: a film poster in your hand.*

Portrait art fills the screen and the copy sits low, in thumb reach. A24 sets a two-line title about 64px tall over a full still. SpaceX keeps its subject in the upper 60 percent and pins copy 20px from the base. Boston Dynamics finds that a photo which failed on desktop works here. Use it for hospitality, brand, culture, food and anything with real images. Do not use it with a weak picture, or with more than about 40 words of copy.

Do not fill the whole screen unless you mean to. Function Health stops its hero at about 708px, so a stat band shows beneath it and the eye knows there is more. Use `84svh`, not `100svh`, unless the next section's arrival is a surprise worth keeping. Put the scrim only where the text sits, and let the image's own dark area do what it can. Set `object-position` so the subject clears the type.

**Seen on** Soundsensing, A24, Prototype, Locomotive, Ideogram, 22 sites in all. **Suits** photo-led, bold-colour, type-led, expressive; agency, ecommerce, local-business, brand.

```css
.hero{position:relative;isolation:isolate;overflow:hidden;color:#fff;height:84svh;min-height:600px;max-height:820px;
  display:flex;flex-direction:column;justify-content:flex-end}
.hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:62% 60%;z-index:-2}
.hero::after{content:"";position:absolute;inset:auto 0 0;height:62%;z-index:-1;
  background:linear-gradient(to top,rgba(10,8,6,.78),rgba(10,8,6,.5) 45%,transparent)}
.copy{padding:0 20px 20px}
h1{font:400 44px/46px var(--font-display);letter-spacing:-.02em}
.copy a{display:inline-flex;align-items:center;height:48px;margin-top:16px;padding:0 20px;
  border-radius:999px;background:#fff;color:#111;font-weight:600}
```

<!-- v:mobile.phone-layout/inset-panels-kept -->
#### Inset panels kept

*Feeling: an object you are holding, not a page you are scrolling.*

The hero stays a panel with a margin and a radius. Lithic holds a 350 by 640 black panel at a 20px inset and radius 24. Meridian goes to 8px and radius 16 and fills 94 percent of the screen, with 52px buttons at its base. Wildbran rounds a film inside a pale frame. Elyx keeps a 12px white frame around the whole essay. It suits any site where the panel is already the identity, and it is one of the cheapest ways to keep a phone page from looking like a reflow. Avoid a radius over about 32 here, because at 350px wide it stops reading as a corner.

Hold the margin and radius across widths with clamps, and let only padding and type change. Cap height at `calc(100svh - 96px)` so the header and the next section both still show.

**Seen on** Wildbran, Lithic, Elyx, Joby, Substack, 11 sites in all. **Suits** photo-led, warm-neutral, gradient-light, light-precision; saas, food-drink, finance, agency.

```css
.panel{--m:clamp(20px,3vw,32px);--r:clamp(24px,3vw,40px);position:relative;overflow:hidden;isolation:isolate;
  margin:0 var(--m);border-radius:var(--r);background:var(--ink);color:var(--bg);
  min-height:min(640px,calc(100svh - 96px));padding:48px 24px;
  display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.panel h1{font-size:40px;line-height:40px;max-width:9em}
```

### Product shots and art

A desktop product shot is the hardest thing to bring to a phone. There are five honest answers: crop it off one edge, centre it and let its neighbours leave, crop signature art past the screen, swap it for one small moment, or rebuild the composition. Scaling it whole works only when it holds no small text.

<!-- v:mobile.phone-layout/ui-bleeds-one-edge -->
#### UI bleeds one edge

*Feeling: there is a whole product past the edge of the glass.*

The window stays whole and the screen crops it. Linear, Attio, FigJam, Better Stack and Brex all run an interface off the right. Use it for any product with a real interface. Avoid it when your interface is thin or empty, since a crop implies more behind it.

Analysts described Linear's window as near desktop scale, and the frame says otherwise. Its sidebar measures about 117px where the desktop one is about 220, so the true scale is about 53 percent and the words cannot be read. That is fine, because at this size structure is the message. What makes it look real is the content. My first version was a table of uniform 38px rows at the same scale, and it read as a shrunken spreadsheet. Linear shows one focused document: a title, a paragraph, an activity list, and comments, with three distinct type sizes, a sidebar with a few tiny colour marks, and the whole thing dimming away from the left. Scale between 50 and 60 percent, and never let the window fit the column.

**Seen on** Linear, Attio, Comet, Better Stack, Vercel AI, 8 sites in all. **Suits** light-precision, dark-precision, bold-colour, warm-neutral; saas, ai, devtool, finance.

```css
/* One object at real layout. One scale. Cut by two edges, dimming away from the left. */
.stage{--s:1;overflow:clip;height:calc(640px*var(--s))}
.win{width:1100px;height:720px;transform:scale(var(--s));transform-origin:0 0;overflow:hidden;
  border-radius:12px;box-shadow:0 0 0 1px var(--line);
  -webkit-mask-image:linear-gradient(100deg,#000 52%,rgba(0,0,0,.35) 88%);
  mask-image:linear-gradient(100deg,#000 52%,rgba(0,0,0,.35) 88%)}
@media(max-width:700px){.stage{--s:.58;height:420px;margin:48px -24px 0 -8px}}
```

<!-- v:mobile.phone-layout/flanks-bleed-both-edges -->
#### Flanks bleed both edges

*Feeling: a stage wider than your screen.*

One object stays centred and whole, and its companions run off both sides. Analogue keeps a console at about 250px with cartridges leaving left and right. AuthKit holds a 260px sign-in card with tilted cards behind it. Apple Intelligence keeps a phone centred with outer cards cropped by the viewport. Use it for hardware, app screens and auth flows, when one object should be read and the rest should imply range.

Make the stage about 520px wide and centre it on the phone, so 40 to 65px of each flank shows. My first stage was 640px, and only a few meaningless letters survived at each edge. Set each flank's content toward its inner side, so what shows is a real fragment. A 1 to 2 degree tilt is enough. The section must clip, or you have made sideways scroll.

**Seen on** Apple Intelligence, Analogue, Affirm, AuthKit, Brilliant, 7 sites in all. **Suits** light-precision, render-3d, dark-precision, warm-neutral; ai, ecommerce, finance, devtool.

```css
.hero{overflow:clip}
.stage{position:relative;width:520px;height:330px;margin:32px 0 0 50%;transform:translateX(-50%)}
.mid{position:absolute;left:130px;top:0;width:260px;z-index:2}
.side{position:absolute;top:44px;width:190px;height:232px}
.side.l{left:0;text-align:right;transform:rotate(-1.5deg)}
.side.r{right:0;transform:rotate(1.5deg)}
```

<!-- v:mobile.phone-layout/signature-art-cropped -->
#### Signature art cropped

*Feeling: the idea survived the move.*

The site's one piece of owned art stays, and gets cropped rather than shrunk. mymind's glowing disc exceeds the viewport, so only its top and bottom arcs remain, and they frame the headline. Stripe retreats its ribbon into the top right corner and lets it pass behind the type. X8 scales a pair of glasses past the viewport so the lenses leave both edges. Notion Calendar keeps its stickers at 60px with some half off screen. Hawl tucks a mascot top right. It scored 4 out of 5 on average with five gold sites, because a phone page with its signature intact looks designed. Use it whenever the desktop page has one recognisable shape.

Size it in `vw` past the viewport, clip the section, and keep the text zone clear. Increase's ribbon runs behind grey copy and loses contrast, so limit any crossing to short, heavy type. A 54px headline fits three lines at 350px only in a fairly narrow face, so clamp it, and shorten the line rather than letting it wrap to four.

**Seen on** mymind, Notion Calendar, X8 Eyewear, Stripe, Increase, 9 sites in all. **Suits** gradient-light, light-precision, photo-led, type-led; saas, finance, fashion, health.

```css
.hero{position:relative;height:100svh;min-height:760px;overflow:clip;display:grid;place-items:center;padding:0 20px;
  background:color-mix(in srgb,var(--accent) 38%,var(--bg))}
/* The disc is larger than the phone, so the page shows only two arcs */
.disc{position:absolute;left:50%;top:50%;width:150vw;height:150vw;min-width:760px;min-height:760px;
  transform:translate(-50%,-50%);border-radius:50%;background:var(--bg);
  box-shadow:0 0 80px 40px color-mix(in srgb,var(--bg) 75%,transparent)}
.hero h1{position:relative;font-size:clamp(40px,12.4vw,54px);line-height:1}
```

<!-- v:mobile.phone-layout/ui-swapped-for-fragment -->
#### UI swapped for a fragment

*Feeling: one true moment of the product.*

The big window goes, and one small real thing takes its slot. Framer replaces a whole canvas with a glowing prompt card between two hairlines and a small timer pill. Amplitude swaps its tabbed app for one 340 by 190 card. Zapier reframes its demo down to a single notification. Polar's plate shrinks to an 18px frame around one stacked card. Use it when the product is a large canvas that would be unreadable at any crop. Avoid it when density is the selling point, since a single card reads as simple.

Pick the moment that says what the product does. A prompt, a chart with one line, one notification. Give it a ground, such as a glow or a tinted plate, and rules above and below, so it reads as the hero's second beat rather than a floating card.

**Seen on** Framer, Polar, Exa, Amplitude, Zapier, 6 sites in all. **Suits** dark-precision, light-precision, warm-neutral; saas, ai.

```css
.moment{margin:36px -16px 0;padding:40px 16px;border-block:1px solid var(--line);display:grid;place-items:center;
  background:radial-gradient(60% 70% at 50% 60%,color-mix(in srgb,var(--accent) 40%,transparent),transparent 72%)}
.card{width:236px;padding:12px;border-radius:14px;font-size:12px;
  background:color-mix(in srgb,var(--bg) 86%,transparent);
  box-shadow:0 0 0 1px var(--accent),0 0 28px -6px var(--accent)}
```

<!-- v:mobile.phone-layout/same-stage-scaled -->
#### Same stage scaled

*Feeling: the same poster, printed smaller.*

Everything shrinks together and nothing moves. Area Technology keeps its render at about 90 percent width with the wordmark at 358px. Lacoste scales a lockup to 47/50 on the same dark plate. Scale keeps a perspective stack of panes at about 300px. It works when the composition has no small text, and when its proportions happen to suit a tall screen. Use it for 3D renders, film and big lockups. Do not use it for an interface. Haikei and Getsweeply scale an app window whole, and analysts gave both 3 out of 5, because a shrunken rail and inspector read as a thumbnail.

**Seen on** Scale AI, Lacoste Ace Breaker, 360Rides, Clevr Blends, Sweeply, 10 sites in all. **Suits** dark-precision, bold-colour, expressive, render-3d; agency, saas, ai, brand.

<!-- v:mobile.phone-layout/art-directed-recrop -->
#### Art directed recrop

*Feeling: this picture was taken for a phone.*

The image is recut for a tall frame, not letterboxed and not cut blindly at the sides. Apple re-shoots product art per breakpoint, so a laptop arrives head-on. Vision Pro's portrait is cropped tighter on the visor at about 680px. Acne Studios re-composes the object above a lower wordmark. YLEM uses its own vertical macro of the same film. Charles Pas finds rooftops in a 360 by 700 crop that the wide frame hid. Use it on any hero with a photograph or film. It is one of the largest gaps between a brand site and a template.

Serve a real portrait source when the subject sits off-centre in the wide crop. Otherwise set a phone `object-position`. Reset focal points by eye, on the actual picture, and check that text lands in the space the new crop leaves open.

**Seen on** Apple Vision Pro, Apple, Acne Studios, Figure, Polestar, 19 sites in all. **Suits** photo-led, expressive, render-3d, illustrated; brand, fashion, finance, agency.

```html
<picture>
  <source media="(max-width:700px)" srcset="hero-tall.jpg">
  <img src="hero-wide.jpg" alt="" width="1600" height="900" fetchpriority="high">
</picture>
```

<!-- v:mobile.phone-layout/composition-rebuilt-for-portrait -->
#### Composition rebuilt for portrait

*Feeling: someone sat with this screen.*

The same pieces, placed again by hand for 390 by 844. 1X recomposes its robots into a diagonal, the largest leaving the left edge, the title at mid-height and the action low on the right. Nicole Heim merges a diptych into one 665px panel with corner links. Per Appelgren drops a scatter to two offset lanes around a centred name. Perplexity Comet rebuilds a collage with the browser bleeding right and a phone overlapping left. Teenage Engineering lets a product's long shadow become a spine down the page. Analysts scored this group 4.25 out of 5 on average, among the highest for a group of its size, and it costs the most. Use it on one hero. Do not attempt it across a whole page.

Position pieces with their own phone coordinates, in a separate block. Keep a clear read order: one object, one title, one action. If a piece has no good place, cut it.

**Seen on** Nicole Heim Studio, 1X, Comet, Kinfolk, Buildkite, 8 sites in all. **Suits** photo-led, warm-neutral, light-precision, illustrated; brand, agency, ai, editorial.

### Cut and swap

<!-- v:mobile.phone-layout/art-cut-message-kept -->
#### Art cut, message kept

*Feeling: nothing to hide behind.*

The art goes and the message carries the screen. Better Auth drops its art entirely, and its panel becomes a 270px title block. Supabase flattens its bento to text cards with the diagrams removed. Wealthfront removes the phone render so a 72px rate holds the first screen. Use it when the art only decorates, and when your type and your claim can hold a screen alone. This is the honest fallback, and analysts scored it middling because it can leave a page with no picture at all. So keep one visual idea somewhere on the first two screens, even if it is a rule, a number or a curved section edge, as UploadThing keeps.

**Seen on** Better Auth, React Email, Supabase, UploadThing, Wealthfront, 8 sites in all. **Suits** light-precision, bold-colour, dark-precision, expressive; devtool, saas, finance, ai.

<!-- v:mobile.phone-layout/phone-task-swap -->
#### Phone task swap

*Feeling: this page knows what you are holding.*

Swap what a phone cannot do for what it can. Devin's download pill becomes a disabled grey 42px pill that points you to a desktop, sitting above a live black sign-up button. Attio swaps a button pair for an outlined email field and a full-width button that sends a demo, so the visitor can act now and finish later. mymind turns its store chips into one get-the-app pill, and Betterment's bar carries a get-app button. Only two sites do this well in our data, and both scored 5. It is rare because it needs someone to think about the visitor's hands. Use it for desktop software, downloads, developer tools and long forms.

Say what happens in plain words on the control, and always leave a live action beside the disabled one, or the page is a dead end.

**Seen on** Devin Desktop, Attio. **Suits** light-precision; ai, saas.

### Calls to action

Choose by how many jobs the page has. One job: full width. Two equal paths: a pair. A confident brand or strong imagery: hug. Then decide whether the action needs to follow the reader, which is a fixed bar.

<!-- v:mobile.phone-layout/full-width-cta-stack -->
#### Full-width CTA stack

*Feeling: there is only one thing to do here.*

Buttons fill the column and stack. CleanShot sets 48px buttons with a 14px gap and a guarantee link under them. Customer.io uses 50px with 12px and three centred ticks. Cloudflare Workers goes to 66px blocks at radius 12. It is the easiest target to hit and the heaviest shape on the page, so it suits single-goal conversion pages. It is the most common choice in the wider corpus, and the least common among gold heroes, at 27 percent. Avoid it on brand and editorial pages, where a full-width bar looks like a checkout. Two full-width bars with a third link under them is about the limit.

**Seen on** CleanShot X, Astral, Cloudflare Workers, Customer.io, Render, 94 sites in all. **Suits** light-precision, photo-led, warm-neutral, bold-colour; saas, devtool, ecommerce, health.

```css
.cta{display:flex;gap:12px}
.btn{display:inline-flex;align-items:center;justify-content:center;height:50px;padding:0 24px;font-weight:500}
@media(max-width:700px){.cta{flex-direction:column}.btn{width:100%}}
```

<!-- v:mobile.phone-layout/paired-cta-row -->
#### Paired CTA row

*Feeling: two honest options.*

Two actions on one row, as two equal halves or two inline buttons. Stripe Billing splits the column 50/50 at 44px with an 8px gap. Baseten keeps both at equal width. Amplitude, GoCardless and Apple keep them inline. It saves 56px of height against a stack, and it keeps both choices in one glance. Use it when there are two real paths, such as start and talk to sales. Keep labels short, since the longer one has to fit about 170px at 360 wide. Stack only if it wraps.

**Seen on** Stripe Billing, Baseten, Soundsensing, Asana, Apple Vision Pro, 36 sites in all. **Suits** light-precision, photo-led, gradient-light, dark-precision; ai, saas, finance, devtool.

```css
.pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.pair a{display:flex;align-items:center;justify-content:center;height:44px;border-radius:4px;font-weight:600;
  box-shadow:inset 0 0 0 1px var(--line-strong)}
.pair a:first-child{background:var(--accent);color:var(--bg);box-shadow:none}
```

<!-- v:mobile.phone-layout/hug-width-cta -->
#### Hug width CTA

*Feeling: it does not need to shout.*

The button stays the size of its label and holds the left edge, or sits centred. Polestar stacks two outlined square buttons flush left, each hugging its text, with a car doing the shouting. Public keeps a 238 by 54 button rather than stretching it. Comet keeps a 260 by 66 pill unchanged from desktop. Temporal hugs a 56px gradient button. This is the most common form among gold heroes. Use it with strong imagery, confident type, or anywhere a full bar would feel like a form. It needs a tall target, so keep 44px minimum even when the label is short.

**Seen on** Polestar, Public, 1X, Analogue, Devin Desktop, 32 sites in all. **Suits** photo-led, light-precision, dark-precision, warm-neutral; devtool, finance, saas, ai.

```css
.acts{display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.acts a{display:inline-flex;align-items:center;gap:6px;height:44px;padding:0 12px;box-shadow:inset 0 0 0 1px var(--ink)}
```

<!-- v:mobile.phone-layout/sticky-bottom-cta -->
#### Sticky bottom CTA

*Feeling: the action follows you.*

A fixed action at the foot, on phones only. Stripe Connect's bar is opaque, with a hugging pill and a text link side by side rather than one full-width button, and the frames show it arrive after the first screen. Aman sets one charcoal Reserve bar, and the analyst called it full width, but it sits inset about 14px from the sides and base, more like a card than a toolbar. Prägen Hätlen pins a 366 by 36 bar 12px from the edges. 1 Hotels anchors a check-availability bar under its hero film. Use it for booking, buying and long pages where the decision comes late. Do not use it on a page with one short screen, or stack it with a chat bubble and a cookie card.

Reveal it after the hero CTA leaves the screen, or the screen shows the same action twice. Reserve matching padding on `main`, or the last line of the page hides under the bar. Add the safe area to the padding, not to the height of the button. I built this first with the bar always on, and it duplicated the hero button on load.

**Seen on** Stripe Connect, Aman, 1 Hotels, Prägen Hätlen, Golden Assisted Transportation, 12 sites in all. **Suits** light-precision, warm-neutral, photo-led, render-3d; finance, hospitality, health, brand.

```css
.bar{position:fixed;inset:auto 0 0;z-index:10;display:none;align-items:center;gap:16px;
  padding:10px 16px calc(10px + env(safe-area-inset-bottom));background:var(--bg);
  box-shadow:0 -1px 0 var(--line),0 -8px 24px -12px color-mix(in srgb,var(--ink) 16%,transparent);
  transition:transform .24s cubic-bezier(.22,1,.36,1)}
@media(max-width:700px){
  .bar{display:flex}.bar[data-hidden]{transform:translateY(110%)}
  main{padding-bottom:calc(84px + env(safe-area-inset-bottom))}
}
@media(prefers-reduced-motion:reduce){.bar{transition:none}}
```

```js
// Hidden while the hero CTA is on screen or still below; shown once it has scrolled past
new IntersectionObserver(([e])=>bar.toggleAttribute('data-hidden',e.isIntersecting||e.boundingClientRect.top>0)).observe(heroCta)
```

### Collections

A column of twelve cards is ten screens long. Before stacking anything, ask whether it should stay two-up, whether it can swipe, or whether it was really a list.

<!-- v:mobile.phone-layout/two-up-grid-kept -->
#### Two-up grid kept

*Feeling: a shop window, not a corridor.*

Keep two columns. Hims runs 188 by 227 tiles with 5px gutters and a gap of about 4px (the analyst's 8 was high), then stacks the long tail as 80px cream rows, so nothing is hidden and nothing swipes. Huel sets 2 by 2 tiles of about 166px at radius 8. Fujifilm keeps quarter tiles paired at 195px with no gap. Elisa Breyer lets a two-column wall run at varied heights. Use it for shops, categories, galleries and teams. It is a high scorer because it shows twice as much per screen and asks for no gesture. Avoid it when labels will not fit 150px.

Compare the two tiers on Hims: the two big doors are photographs, and the rows use cut-out objects on the tint, not thumbnails in boxes. That cut-out is what makes the rows feel rich. Tiles also need art composed for type. My first version laid gradients over stock photos and the labels fought the image. Choose or crop pictures with calm space at the text corner.

**Seen on** Hims, Fred, Elisa Breyer Archive, X8 Eyewear, Stripe Customers, 20 sites in all. **Suits** photo-led, light-precision, warm-neutral, mono-technical; ecommerce, health, finance, agency.

```css
.doors{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;padding:0 5px}
.door{position:relative;aspect-ratio:188/227;border-radius:16px;overflow:hidden;padding:14px;
  display:flex;flex-direction:column;justify-content:space-between}
.rows{display:grid;gap:4px;padding:4px 5px}
.rows a{display:flex;align-items:center;height:80px;padding:0 14px;border-radius:16px;background:var(--surface);font-weight:500}
```

<!-- v:mobile.phone-layout/peek-rail -->
#### Peek rail

*Feeling: there is more, and it is one flick away.*

The collection becomes a sideways rail, with the next card cut by the edge. Fairphone runs 268px cards at radius 32 with a 72 by 56 arrow pill that keeps its size. Airbnb shows about 2.1 cards of 165px. Definitiv Digital shows a 345px card with 30px of the next. DixonBaxi shows 65px of a neighbour on each side. Use it for products, cases and events, with at least four items. Avoid it for anything the reader must not miss, because rail content past the second card is rarely seen.

The peek must cut through content, not fall in a gap, or the row looks finished. Run the scroll container edge to edge, and use padding plus matching `scroll-padding` so the first card sits on the gutter. Keep `overscroll-behavior-x:contain` so a swipe does not trigger back navigation. Give the rail `tabindex="0"` so it can be reached without touch.

**Seen on** Almeida Theatre, CleanShot X, ElevenLabs Pricing, Stripe, Airbnb, 17 sites in all. **Suits** photo-led, dark-precision, light-precision, warm-neutral; devtool, agency, saas, ecommerce.

```css
.rail{display:grid;grid-auto-flow:column;grid-auto-columns:268px;gap:12px;padding:0 16px;
  overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-inline:16px;
  overscroll-behavior-x:contain;scrollbar-width:none}
.rail::-webkit-scrollbar{display:none}
.card{scroll-snap-align:start}
@media(min-width:701px){.rail{grid-auto-flow:row;grid-template-columns:repeat(3,minmax(0,1fr));overflow:visible}}
```

<!-- v:mobile.phone-layout/cards-stack-same-recipe -->
#### Cards stack, same recipe

*Feeling: the same system, one column wide.*

The grid falls to one column and the card keeps its anatomy. Jasper's boxes run full width at 16px gutters and 12px gaps. Railway Docs keeps line art at the bottom right of 358 by 160 cards. Vercel AI keeps desktop-scale contents inside 340px tiles and crops them. Use it for feature grids with five or fewer items. Past that, turn it into a list or a rail.

Drop fixed heights, keep the tile order the same as the reading order, step padding down once, and let inner media crop rather than reflow. A bento's interface fragments stay at desktop width. See `surface.md`.

**Seen on** Jasper, Spline, New Material, Royal Ontario Museum, Khan Academy, 16 sites in all. **Suits** light-precision, bold-colour, illustrated, warm-neutral; ai, devtool, local-business, culture.

<!-- v:mobile.phone-layout/hairline-list-feed -->
#### Hairline list feed

*Feeling: a well-set column of news.*

Cards dissolve into a ruled list with one repeating rhythm. Anthropic's news runs a meta row, a 326 by 183 tile, a 26/31 title, a 17px dek, then a rule and about 34px. Linear's changelog folds its date rail into a muted line above each title. ACME and Ledup turn products into rows with a price or an arrow at the end. GitHub Docs and Hugging Face Docs keep a whole index open under a search bar, with no accordions. Use it for news, changelogs, catalogues and directories. Order by importance, not by desktop columns.

**Seen on** Anthropic News, ACME, Linear Changelog, Hugging Face Docs, LEDUP, 9 sites in all. **Suits** warm-neutral, dark-precision, light-precision, bold-colour; ecommerce, saas, editorial, ai.

```css
.st{padding:24px 0 34px;border-bottom:1px solid var(--line)}
.meta{display:flex;gap:10px;align-items:center;font-size:13px;color:var(--ink-2);margin-bottom:14px}
.pic{aspect-ratio:16/9;margin-bottom:16px}
.st h2{font:700 26px/31px var(--font-text);letter-spacing:-.015em;margin-bottom:12px;text-wrap:balance}
.st p{font-size:17px;line-height:25px;color:var(--ink-2)}
```

<!-- v:mobile.phone-layout/image-caption-stack -->
#### Image and caption stack

*Feeling: a printed monograph.*

One picture per row, caption moved off the image onto the page. BIG sets images at 351px with a 20px gutter, a 30px glyph at left, a 18/20 title and a 12px caps location, then about 30px to the next image. HAY centres 20px caps captions under 350px images. Poeza leads with an 11px caption, then a full-width portrait. Use it for portfolios, architecture and galleries, wherever the image should stay clean of type.

BIG's images are 2 to 1, about 175px tall. I first assumed 3 to 2 and got two pictures per screen where BIG shows three, and the page lost its catalogue pace. Keep images wide if the archive is long. Use tall ones if there are few.

**Seen on** BIG, La Table de Joakim, Roy Jad, Poeza, HAY, 9 sites in all. **Suits** photo-led, light-precision, mono-technical, warm-neutral; portfolio, architecture, food-drink, ecommerce.

```css
figure img{width:100%;aspect-ratio:2/1;object-fit:cover}
figcaption{display:grid;grid-template-columns:30px minmax(0,1fr);gap:0 12px;padding-top:10px}
figcaption i{grid-row:span 2;width:30px;height:30px}
figcaption b{font-weight:500;font-size:18px;line-height:20px}
figcaption span{font-size:12px;line-height:16px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink-2)}
@media(max-width:700px){.work{grid-template-columns:minmax(0,1fr);gap:30px}}
```

<!-- v:mobile.phone-layout/stats-fold-to-grid -->
#### Stats fold to a grid

*Feeling: all the data, none of the scrolling.*

Keep every metric and fold the row. Plausible's KPI strip becomes 2 by 3 with hairline dividers, and the chart holds about 300px with the same axes. Khan Academy puts stats 2 by 2 in a grey band. Function Health sets a three-across strip on cream under its film, with 1px rules. OpenRouter holds four numbers on one row at about 24px. Use it for dashboards, proof and stat bands. No data is removed. Three across works only if labels fit about 110px.

Keep the axes on a chart. My first fold dropped them to save space, and a line with no scale read as decoration.

**Seen on** Function Health, Stripe Customers, Plausible Live Dashboard, Gustavo H, OpenRouter. **Suits** light-precision, warm-neutral, expressive; health, saas, finance, portfolio.

```css
.kpi{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding:8px}
.k{padding:12px 12px 14px;font-variant-numeric:tabular-nums}
.k small{display:block;font-size:11px;letter-spacing:.04em;text-transform:uppercase;font-weight:600;color:var(--ink-2);margin-bottom:6px}
.k b{font-size:20px;font-weight:600}
@media(max-width:700px){.kpi{grid-template-columns:repeat(2,minmax(0,1fr))}.k:nth-child(odd){border-right:1px solid var(--line)}}
```

<!-- v:mobile.phone-layout/filters-collapse-to-control -->
#### Filters collapse to one control

*Feeling: the results come first.*

A filter sidebar becomes one small control. Framer Templates drops its taxonomy to two columns of bare 16px heads and collapses search and filters to 36px icon chips. ConceptCore uses one bright open-filters button at the bottom right of the list. Omega sets filter and sort side by side as outlined buttons. Herzog & de Meuron goes the other way and keeps filter pills first, eight rows of them, because its archive is the filter. Use it for shops, template galleries and archives. Results should start on the first or second screen, and any active filter needs a visible count.

Mind the order. My first version put the taxonomy above the page title, because it was first in the source. Framer puts the title first, then the taxonomy, then the filters. Grid areas fix this without moving the markup.

**Seen on** Framer Templates, Herzog & de Meuron, Awwwards SOTD, Omega Aqua Terra 150M, Vercel templates, 7 sites in all. **Suits** light-precision, dark-precision, mono-technical, expressive; other, saas, architecture, ecommerce.

```css
.wrap{display:grid;grid-template-columns:240px minmax(0,1fr);grid-template-areas:"side head" "side grid";gap:0 40px}
@media(max-width:700px){
  .wrap{grid-template-columns:minmax(0,1fr);grid-template-areas:"head" "side" "grid"}
  aside{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:28px}
}
```

### Wide content

A wide table has three honest phone forms. Show one column at a time. Move the columns into a rail. Or rank the columns and drop the rest. The dishonest form is a small table you can pinch, and none of the 355 rows describes one.

<!-- v:mobile.phone-layout/compare-table-plan-stepper -->
#### Compare table plan stepper

*Feeling: one plan at a time, nothing lost.*

The best answer to a wide compare table in the corpus. Dub shows one plan: name, price and a full-width button between 36px previous and next arrows, with single-column 53px rows and collapsible groups. No sideways scroll and no squeezed columns. Use it for any feature matrix with three or more plans. Keep the plan header sticky, so the reader always knows which column they are reading.

Show the selected plan's own value in each row. My first version hid three columns and drew a tick on every row, which claimed every plan had every feature. Use a real value, a tick or a dash, and read it from the plan. Dim the disabled arrow at each end. Use an SVG chevron, because a typed one renders tiny.

**Seen on** Dub Pricing. **Suits** light-precision; saas.

```css
.head{position:sticky;top:0;z-index:2;background:var(--bg);display:grid;grid-template-columns:1fr repeat(4,1fr);
  border-bottom:1px solid var(--line);padding:16px 0}
.ctl{display:grid;grid-template-columns:36px 1fr 36px;gap:8px;margin-top:12px}
.ctl button{height:36px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line-strong);font-weight:500}
.ctl button[disabled]{color:var(--ink-3);box-shadow:none;background:var(--well)}
@media(max-width:700px){
  .head{grid-template-columns:1fr}.plan{display:none}.plan[data-on]{display:block}
  .row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;min-height:53px}
  .row>span:not(:first-child){display:none}
  /* Label plus the selected plan's own cell. Script sets data-plan on the table. */
  .t[data-plan="0"] .row>span:nth-child(2),.t[data-plan="1"] .row>span:nth-child(3),
  .t[data-plan="2"] .row>span:nth-child(4),.t[data-plan="3"] .row>span:nth-child(5){display:block;color:var(--ink)}
}
```

<!-- v:mobile.phone-layout/plan-cards-stack -->
#### Plan cards stack

*Feeling: a clear ladder.*

Plans stack in one column, which is what most strong pricing pages do. Cursor runs 350px cards at about 20px gutters with an 8px gap, and its toggle stays centred. Warp keeps a CTA full width inside each card. Webflow pins both nav and billing toggle at 67px each. Supabase keeps a 2px outline on Pro so rank survives the stack. Use it for three or four plans with short lists.

The sharpest move comes from Raycast: collapse the free plan to one row, with the name left and a 64px price right. It saves most of a screen, and Pro arrives as the first real choice. Put your recommended plan first or second, since nobody reaches the fourth card by accident.

**Seen on** Warp Pricing, Cal.com Pricing, Cursor Pricing, Raycast Pricing, Stripe Pricing, 9 sites in all. **Suits** light-precision, warm-neutral, dark-precision; saas, finance, devtool, ai.

```css
.free{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px}
.free .price{font:600 64px/1 var(--font-display);letter-spacing:-.03em}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
@media(max-width:700px){.grid{grid-template-columns:minmax(0,1fr)}}
```

<!-- v:mobile.phone-layout/plan-swipe-rail -->
#### Plan swipe rail

*Feeling: the table is still a table.*

Plan columns keep their shape in a sideways rail. ElevenLabs sets about 250px columns divided by hairlines, with the next plan peeking and tile, pill and list intact. The tabs shorten to single words, and billing drops to its own row. Use it when comparing across plans matters and the feature lists are short. Unlike a stack, the same row in each plan lines up, so a sideways flick compares directly. Avoid it with six or more plans, or long lists that need vertical scroll in each column.

**Seen on** ElevenLabs Pricing. **Suits** warm-neutral; ai.

```css
.rail{display:grid;grid-auto-flow:column;grid-auto-columns:250px;overflow-x:auto;
  scroll-snap-type:x proximity;scrollbar-width:none;border-block:1px solid var(--line)}
.pl{scroll-snap-align:start;padding:16px;border-right:1px solid var(--line)}
@media(min-width:701px){.rail{grid-auto-flow:row;grid-template-columns:repeat(4,minmax(0,1fr))}}
```

<!-- v:mobile.phone-layout/table-reduced-columns -->
#### Table reduced to essential columns

*Feeling: only what you need to scan.*

Rank the columns, keep two, and fold the rest. Olivier Larose keeps a project table as name left and year right on 14px rows with hairlines. Beckmans keeps a number and a name, with two thin spare columns so the spreadsheet metaphor survives. Use it for roles, price lists, schedules and indexes. Keep the name and the one value people compare, right-aligned with tabular figures. The other columns become a muted line under the name, which means nothing is lost. Never wrap the table in a sideways scroller for the sake of keeping every column.

**Seen on** Olivier Larose, Beckmans Examensutstallning 2024. **Suits** mono-technical, type-led; education, portfolio.

```css
table{width:100%;border-collapse:collapse;font-size:15px;font-variant-numeric:tabular-nums}
td{padding:14px 12px 14px 0;border-bottom:1px solid var(--line);vertical-align:top}
td.n{text-align:right;padding-right:0;white-space:nowrap}
.name small{display:none;font-size:13px;line-height:18px;color:var(--ink-2)}
@media(max-width:700px){.opt{display:none}.name small{display:block;margin-top:2px}}
```

<!-- v:mobile.phone-layout/code-clips-at-edge -->
#### Code clips at the edge

*Feeling: real code, at real size.*

Code stays at reading size and the edge cuts it. LiveKit holds about 15px mono and clips at the card edge. React lets the card lose its side margins and clip on the right with the filename strip kept. Inngest clips directly below the buttons. Bun truncates an install command but keeps its copy cell. Use it for every code sample. There are two forms: keep the card in the column and clip inside it, as LiveKit does, or run the card off the right edge, as Inngest does. Choose the second if the code is the hero.

Never wrap, because wrapped code stops being code. Never go under 13px. Put the scroll on the `pre`, not the page. Keep a copy button outside the scrolling area, so it stays in view.

**Seen on** Bun, LiveKit, Inngest, Cloudflare Docs, React, 6 sites in all. **Suits** dark-precision, light-precision, mono-technical, soft-pastel; devtool.

```css
.code{margin-right:-24px;border-radius:8px 0 0 8px;background:var(--surface);box-shadow:inset 0 0 0 1px var(--line);overflow:hidden}
pre{margin:0;padding:12px 0 16px;font:14px/22px var(--font-mono);overflow-x:auto;scrollbar-width:none}
code{display:block;white-space:pre;width:max-content;min-width:100%}
```

<!-- v:mobile.phone-layout/tabs-become-select-or-stepper -->
#### Tabs become a select or stepper

*Feeling: one control, nothing hidden off-screen.*

A tab strip that will not fit becomes one control. Claude Pricing swaps tray tabs for a full-width select. Shopify Polaris makes its on-this-page list a 44px grey select above the title. Storybook collapses tabs to a centred label with chevrons either side. Use a select past four tabs or with long labels. It gives every option at once, and the phone's own picker is excellent. Use a stepper when the items are a sequence. Use scrolling tabs only for three or four short labels, and let the row clip to show there are more.

**Seen on** Claude Pricing, Storybook, Shopify Polaris. **Suits** warm-neutral, dark-precision, light-precision; devtool, ai.

```css
.sel{display:none;position:relative;margin:0 18px 16px}
.sel select{appearance:none;width:100%;height:48px;padding:0 40px 0 16px;border-radius:10px;
  border:1px solid var(--line-strong);background:var(--bg);font:16px var(--font-text);color:var(--ink)}
.sel::after{content:"";position:absolute;right:18px;top:19px;width:7px;height:7px;
  border:solid var(--ink-2);border-width:0 1.5px 1.5px 0;transform:rotate(45deg)}
@media(max-width:700px){.tabs{display:none}.sel{display:block}}
```

### Structure that survives

<!-- v:mobile.phone-layout/rails-kept-at-gutter -->
#### Rails kept at the gutter

*Feeling: still cut from one sheet.*

Exposed rails move out to the gutter and stay. Greylock holds them at x=16 and x=374. Zed brings them to the same 16px and keeps its diamond nodes. Stripe Connect keeps guides at x=16 and x=374 under a 46px headline. Stripe Atlas reduces its grid to one dashed line inset 16px. Hugging Face keeps a dashed plan column. Use it for developer and finance pages that already run on rails, where they are often the strongest thing the page owns.

Zed shows more than a line. Its rails frame a faintly gridded gutter, and each card sits inset inside them, so the layers read: page, rail, ground, card. My first version simply cut cells with rules and lost that depth, and my second drew the gutter grid at 10 percent ink, which looked like graph paper. It should be about 4 percent, felt more than seen. If rails would sit more than about 24px in, drop them.

**Seen on** Zed Pricing, Stripe Atlas, Vite, Greylock, Modern Treasury, 14 sites in all. **Suits** light-precision, dark-precision, mono-technical, gradient-light; devtool, finance, saas, ai.

```css
.page{position:relative;max-width:1200px;margin:0 auto;border-inline:1px solid var(--line-strong)}
.band{position:relative;padding:40px 24px;background:var(--bg);border-bottom:1px solid var(--line-strong)}
.band::before,.band::after{content:"";position:absolute;bottom:-4px;width:7px;height:7px;background:var(--bg);
  box-shadow:inset 0 0 0 1px var(--ink-3);transform:rotate(45deg)}
.band::before{left:-4px}.band::after{right:-4px}
@media(max-width:700px){.page{margin:0 16px}.plans{grid-template-columns:minmax(0,1fr);padding:16px}}
/* Faint gridded ground, seen only in the gutter between rail and card */
body{--tick:color-mix(in srgb,var(--ink) 4%,transparent);background-size:6px 6px;
  background-image:linear-gradient(var(--tick) 1px,transparent 1px),linear-gradient(90deg,var(--tick) 1px,transparent 1px)}
```

<!-- v:mobile.phone-layout/ruled-cells-stack -->
#### Ruled cells stack

*Feeling: the grid's logic, one column wide.*

A ruled grid becomes full-width rows. Horizontal rules stay and vertical rules go. Work & Co keeps 1px rules at a 29px gutter, with labels stacked above content. CSDG sets each cell as a 390px row with a 40px inset and rules only. Vercel Pricing stacks plans as one bordered column with adjacent cells sharing a border. Strapi and Payload keep bordered cells at full width. Use it for any page built on `surface.md`'s ruled panels. With a 1px grid gap on a line-coloured background, the rules survive the stack with no extra code, because the gaps are the lines.

**Seen on** Work & Co, Vercel Pricing, Payload, CSDG Development Group, Strapi, 6 sites in all. **Suits** light-precision, dark-precision; devtool, agency, architecture, finance.

<!-- v:mobile.phone-layout/asymmetry-kept -->
#### Asymmetry kept

*Feeling: placed, not poured.*

One column does not have to mean centred. reMarkable alternates full-width images with a 290px block indented about 50px, and the captions match the inset. Strava insets a photo 12px at left and bleeds it right, with a tinted caption card overlapping the lower left corner and ending about 78px short of the edge. Bakstad pushes a 252px photo right to x=103. Medusa sets two portraits side by side with a vertical offset. Use it on brand, editorial and architecture pages, wherever the desktop's stagger is part of the character. Small insets of 12 to 50px are enough, because at this width a small move reads as a decision.

**Seen on** reMarkable, Per Appelgren, Bakstad Construction, Strava, The 2026 ADCC Awards, 7 sites in all. **Suits** photo-led, warm-neutral, mono-technical, type-led; brand, portfolio, architecture, health.

```css
.pair{margin-left:12px}.pair img{width:100%;height:320px;object-fit:cover}
/* Caption card crosses the photo's lower left corner and stops short of the right edge */
.cap{position:relative;margin:-110px 78px 0 -12px;padding:24px 24px 24px 16px;background:var(--surface)}
.step{margin:48px 0 0 50px;width:calc(100% - 66px)}
```

<!-- v:mobile.phone-layout/document-reflow-only -->
#### Document reflow only

*Feeling: it was always this shape.*

If the desktop page is a document, the phone needs almost nothing. Cognition keeps its serif at about 15/22 at full width, its buttons square and its rules drawn. Monocle restyles nothing and only reflows. Stone Island holds 14/18 mono on 12px margins. Brett Jackson's phone and desktop are the same page. The FWA keeps identical bevels and titles. Oatly's toolbar survives unchanged. Use it for essays, manifestos, portfolios and strict systems. This scores well only where the voice is strong, since on a weak page doing nothing just looks like nothing was done.

**Seen on** Notion About, Alessandro Stella, Cognition, Aniket, Stone Island, 19 sites in all. **Suits** type-led, expressive, light-precision, mono-technical; portfolio, culture, other, agency.

### Type as the layout

<!-- v:mobile.phone-layout/display-type-held-large -->
#### Display type held large

*Feeling: the headline is the picture.*

The headline ignores the usual phone band and stays huge. Theatre Memory runs about 66px in two offset lines, fully readable, with prints stacked below. Studio Dado holds 64px caps on three lines over a full image. Dogstudio sets 78/72 on four lines. Vayne Entertainment keeps display size with condensed type. Use it where type is the design and the phrase is short. It fails on long claims.

Size from the longest word, not from a scale. 17vw lets a seven-letter word in a heavy sans fill most of the column at 390, and a blanket `h1` rule in your phone block will silently undo it, so exempt this heading. Break lines by hand with block spans. Keep the page to `calc(100svh - bar)`, or a foot pinned low drops off the first screen, which is what mine did.

**Seen on** Theatre Memory, Studio Dado, New York Phil, Anthropic Docs, STUDIO UNLMTD, 9 sites in all. **Suits** type-led, bold-colour, warm-neutral, mono-technical; agency, culture, portfolio, architecture.

```css
h1{font:600 17vw/.96 var(--font-display);letter-spacing:-.035em;text-transform:uppercase}
h1 span{display:block}
h1 span+span{text-align:right}   /* the offset is the composition */
```

<!-- v:mobile.phone-layout/wordmark-refit-to-width -->
#### Wordmark refit to width

*Feeling: the name owns the screen.*

The name spans the phone, gutter to gutter. Remote runs a wordmark about 100px tall across a gradient. Sidekick breaks its wordmark into two rows of four blocks. i-D stacks the letters of a word vertically. Make Town scales a giant word to fill the width under a full letter. Martin Development goes the other way and lets a 120px wordmark bleed off both sides behind a roof. Use it as one bold gesture on the first screen of a brand site.

Crop an SVG `viewBox` to the word's real ink so it scales uniformly. I first forced the width with `textLength`, and the letters stretched sideways, which looks cheap at once. Height follows the word: five heavy letters across 358px stand about 140px tall, so a short name takes more of the screen than a long one. Use real outlines when the wordmark is drawn.

**Seen on** Remix, Sidekick, Okey Studio, Remote, i-D and Ray-Ban present RED, 7 sites in all. **Suits** type-led, render-3d, bold-colour, expressive; devtool, agency, portfolio, finance.

```html
<svg class="wm" id="wm" role="img" aria-label="Name"><text id="wt">name</text></svg>
```

```js
// Crop to the ink once the font has loaded. The word then scales to the box without distortion.
document.fonts.ready.then(()=>{const b=wt.getBBox();
  wm.setAttribute('viewBox',`${b.x} ${b.y+b.height*.12} ${b.width} ${b.height*.74}`)})
```

### Mistakes that cheapen a phone layout

Each of these came from my first attempts or from what analysts saw on real pages.

- **A shrunken spreadsheet.** My first bleeding window was a table of identical rows. It read as a thumbnail. Show one focused object, with three type sizes, and let it dim away.
- **A hero that fills the screen for no reason.** Mine ran to `100svh`, which gave no sign of a page below. Function Health stops at 84 percent. Let something show.
- **A box in a box.** My product shot kept its tinted tray and inner card at 390px. Drop one layer on a phone. Width is too scarce to spend on frames.
- **One more line than you planned.** A longer accent phrase pushed my form hero to four lines and moved the form down 50px, and a wider face did the same to a 54px headline. Test every heading at 360px, and keep a coloured phrase on one line.
- **Flanks that show nothing.** Fragments must be readable fragments. Mine showed stray letters until the stage narrowed to 520px.
- **Boxed thumbnails.** Hims uses cut-outs on a tint. A photo in a rounded square inside a rounded row is the template version, and a car in a box lost Polestar's whole effect until I faded its top into the ground. Seamless ground or a real cut-out, or bleed the image to both edges.
- **A chart with no axes, a tick on every row.** Cutting for space must not change what is claimed. Check any stripped component still tells the truth.
- **Grey text on a phone in daylight.** Customer.io sets its lead in full ink. Mine in `--ink-2` looked washed out beside it. Save grey for labels on a light ground.
- **Everything centred.** Gold heroes run about 60 left to 37 centred. A long page of centred stacks is the fingerprint of an automatic reflow, and centred body copy over three lines reads badly at this width.
- **Scaling an interface.** Haikei and Getsweeply shrink a whole window and scored 3 out of 5, where cropped shots on the same kind of page scored 4 and 5. Crop, swap or cut instead.
- **A photo that becomes wallpaper.** Deepening the overlay until the image is texture, as on JOBS, throws away the picture. Re-crop it instead.
- **Things stacked over the first screen.** A cookie card covered Perplexity's composer, one hid most of Wild's tile, and LaunchDarkly's chat bubble took about a quarter of the screen. Shrink the consent card, and collapse chat to a small pill.
- **A fixed height left over from desktop.** Cards clip their text, and pinned panels trap the reader. Use `min-height`, and turn pinned sections into ordinary ones.
- **Target sizes set by the glyph.** Framer's first-screen buttons sit near 30px. A 44px hit area costs nothing when the visual stays small.

## Phone nav

Phone nav must say whose site this is, keep the next action within reach, and get out of the way. It has very little room. On a 390px bar there is space for a mark, one action and a menu control, and that is the whole budget.

What separates great from cheap is that a good bar is a decision about priority, and it matches the page. Linear keeps sign-up and hides everything else. Stripe sets its menu on a coloured tile because its hero is busy. BIG replaces the burger with a funnel because its site is an archive you filter. Prototype writes the word Menu in its own italic link style. The cheap version is a stock three-line icon in a stock 56px white bar, with the action hidden inside. The menu control is one of the only things on screen that belongs to no section, so it is one of the cheapest places to put an owned detail.

Keep the same language as the page. A pill site gets a pill menu, a square site a square one. Authkit's outlined pill matches its ghost button, and Baseten's black block matches its CTA blocks.

Measured ranges: bar 56 to 66px on most sites, 96 to 120px with a second row, gutters matching the page. Action 32 to 44px tall and 13 to 15px text. Menu control 36 to 48px with a 44px hit area, glyph 14 to 24px wide, stroke 1 to 2px, and two lines at least as common as three among gold sites. Foot bars 56 to 64px plus safe area, labels 10 to 11px.

Top or bottom? Keep nav at the top for sites people read. Move it to the foot only when people work the site repeatedly, or when the top must stay free. Only 14 of 75 nav rows use the foot, and only 2 of those are gold, so a bottom bar is a real choice with a real cost: it says this is an app.

### The top bar

<!-- v:mobile.phone-nav/logo-action-menu -->
#### Logo, action, menu

*Feeling: the primary action never hides.*

Logo left, then one compact action and a menu control right, on one centre line. Linear keeps a muted log-in, a 32px light pill and a two-line burger. Warp sets a 36px black button. Spline sets a 38px pill beside an outlined circle. Vercel's AI SDK keeps Ask AI, because the assistant is the action. Public keeps both log-in and sign-up as outlined pills. Use it for any product with a sign-up. Keep only one filled control in the bar, and make it match the button shape on the page. At 360px wide, the bar must still fit: test it, and drop the log-in link first.

Note the hit area. A glyph sized at 18px fails, so wrap it in a 44px button and pull it to the gutter with a negative margin. Most of my demos tripped the small-target check on this one button until this rule went in.

**Seen on** Anthropic News, Vercel AI SDK, Warp Pricing, Linear Changelog, Spline, 23 sites in all. **Suits** light-precision, dark-precision, photo-led, warm-neutral; saas, finance, devtool, health.

```css
.nav{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:16px;height:64px;padding:0 24px;
  background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}
.nav .r{margin-left:auto;display:flex;align-items:center;gap:8px;font-size:14px;color:var(--ink-2)}
.pill{height:32px;padding:0 12px;border-radius:999px;background:var(--ink);color:var(--bg);
  display:inline-flex;align-items:center;font-size:13px;font-weight:500}
.menu{width:44px;height:44px;margin-right:-13px;display:grid;place-items:center}   /* 44px target, 18px glyph */
.menu i{width:18px;height:10px;border-block:1.5px solid var(--ink)}
```

<!-- v:mobile.phone-nav/bare-logo-and-glyph -->
#### Bare logo and glyph

*Feeling: quiet confidence.*

Nothing but a mark and a thin glyph, often on no bar at all. 1X sets a 28px logo and two 24px hairlines about 8px apart, directly on the hero, with the glyph matching the logo's stroke weight. Bakstad uses a full 160px wordmark with an 18px two-line burger. Polestar sets a thin three-line icon beside a 30px wordmark, with no CTA. Use it for brand, architecture and photography sites, where the first screen should feel like an image. Two lines read lighter than three. If the glyph sits on a picture, make sure it holds contrast at both the light and the dark end of that picture.

**Seen on** 1X, Bakstad Construction, Theatre Memory, New Exhibitions, Polestar, 6 sites in all. **Suits** photo-led, type-led; brand, culture, architecture, other.

<!-- v:mobile.phone-nav/tiled-menu-control -->
#### Tiled menu control

*Feeling: a small object with an edge.*

The glyph gets a ground. Stripe sets a 40px tile with coloured bars on a page that is otherwise moving colour, and each Stripe product recolours that tile, which makes it a quiet system. Expo uses a 36px grey circle with two lines. AuthKit uses a 46 by 34 outlined pill. mymind sets a 50 by 36 tinted capsule in a pill nav. Baseten's bold form is a 92 by 46 black block flush to the right edge, matching its CTA blocks. Use it on busy heroes, and as a low-cost way to carry the accent. Its radius must match the page's button rule.

**Seen on** mymind, Baseten, Expo, Stripe, AuthKit, 14 sites in all. **Suits** gradient-light, light-precision, mono-technical, bold-colour; finance, devtool, ai, saas.

```css
.tile{width:40px;height:40px;border-radius:6px;background:var(--accent);display:grid;place-items:center}
.tile i{width:14px;height:8px;border-block:1.5px solid var(--bg)}
```

<!-- v:mobile.phone-nav/word-for-the-menu -->
#### The word Menu

*Feeling: written, not iconographic.*

No icon at all. Prototype sets an italic 20px Menu with a 1px underline, reusing its own link style. Cognition sets a plain 15px word, in keeping with its refusal of chrome. Studio Dado and Locomotive use a quiet text link top right. Prägen Hätlen sets a mono `[+] MENU`. Use it for studios, editorial and type-led sites. It tells a first-time reader exactly what it does, and it reads as part of the page's voice. Pad it to a 44px target with padding and negative margin, so the text stays small.

**Seen on** Prototype, Structure Consulting Engineers, Cognition, Studio Dado, Prägen Hätlen, 9 sites in all. **Suits** photo-led, type-led, render-3d, mono-technical; agency, architecture, ai, brand.

```css
.mn{font:italic 400 20px/1 var(--font-display);text-decoration:underline;text-decoration-thickness:1px;
  text-underline-offset:4px;padding:14px 4px;margin:-14px -4px}
```

<!-- v:mobile.phone-nav/owned-menu-glyph -->
#### Owned menu glyph

*Feeling: a detail nobody else has.*

Swap the three bars for a glyph that belongs to the brand. BIG uses a three-bar descending funnel, because filtering is how its archive works, which keeps the logic of its desktop bar. Analogue uses a thin 24px plus, with a cartridge-shaped cart holding a digit. Public uses a four-dot grid and Groq a dot grid. Anthropic's Claude page draws a burger of unequal lines. Use it anywhere a small owned detail is worth more than a new layout. Keep a real label for screen readers, and keep it obvious enough to be tapped. If people cannot tell it is the menu, use the word.

**Seen on** BIG, Analogue, Public, Groq. **Suits** photo-led, render-3d, light-precision, type-led; architecture, ecommerce, finance, ai.

<!-- v:mobile.phone-nav/no-menu-at-all -->
#### No menu at all

*Feeling: this site is small, and honest about it.*

If the links fit, show them. International Magic keeps its three-item tray at 16px across 358px, with the wordmark in the centre, so desktop and phone share one object. Per Appelgren keeps corner links at a 16px inset. Readwise keeps its links inline. Alessandro Stella and Poeza show no menu at all. Use it for portfolios, studios and small sites with under five destinations. It saves a tap, and it signals a site with nothing to hide.

**Seen on** International Magic, Work & Co, Per Appelgren, Alessandro Stella, Poeza, 6 sites in all. **Suits** light-precision, photo-led, warm-neutral, gradient-light; agency, portfolio, saas, fashion.

<!-- v:mobile.phone-nav/mark-and-icon-row -->
#### Mark and icon row

*Feeling: a shop you already know how to use.*

The commerce bar. Menu at left, mark centred, then search, account and bag. Stone Island sets a two-line burger, a 38px seal and outlined bag on a transparent row. Sweetgreen keeps a two-line menu, a centred wordmark and a plain text order link. Apple runs a 48px dark glass bar with a two-line glyph. Keep it for shops. Visitors know this layout, and that familiarity is its value. Use a `1fr auto 1fr` grid, so the mark stays centred even when the two sides hold different numbers of icons. Keep icons to two or three, as Kvadrat's four feels crowded.

**Seen on** Apple, Dishoom, Stone Island, Framework, Acne Studios, 15 sites in all. **Suits** photo-led, warm-neutral, light-precision, mono-technical; ecommerce, food-drink, brand, fashion.

```css
.bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:56px;padding:0 16px}
.bar .r{display:flex;justify-content:flex-end;gap:16px}
```

<!-- v:mobile.phone-nav/icon-cell-bar -->
#### Icon cell bar

*Feeling: a Swiss timetable for clothes.*

Acne Studios splits a 45px white bar with hairlines into square cells: menu and search left, account and bag right, with the centre empty until the wordmark docks. Line icons are about 14px with no labels. Use it for fashion and strict systems. The grid is the point, so repeat its cell logic elsewhere on the page.

**Seen on** Acne Studios. **Suits** photo-led; fashion.

<!-- v:mobile.phone-nav/floating-card-bar -->
#### Floating card bar

*Feeling: the page runs behind it.*

The bar is an object. CleanShot sets a white card inset 12px, about 64px tall, radius 20, soft shadow, with a 40px app icon, a wordmark and a 40px grey menu tile at radius 14. Cal.com keeps a rounded 64px bar at an 8px inset. Function Health uses a 66px dark capsule. Raycast keeps a 58px capsule at 16px. Use it when the hero has a wash or an image worth showing in the gutter, and to keep a desktop floating nav's character. It costs about 90px in total, so keep it for pages with room to spare.

**Seen on** CleanShot X, Function Health, Cal.com Pricing, Raycast Pricing, Affirm, 11 sites in all. **Suits** gradient-light, dark-precision, warm-neutral, photo-led; saas, health, ai, finance.

```css
.nav{position:sticky;top:12px;z-index:5;display:flex;align-items:center;justify-content:space-between;
  height:64px;margin:12px 12px 0;padding:0 12px;border-radius:20px;background:var(--bg);
  box-shadow:0 1px 2px color-mix(in srgb,var(--ink) 6%,transparent),0 8px 24px -8px color-mix(in srgb,var(--ink) 14%,transparent)}
.sq{width:40px;height:40px;border-radius:14px;background:var(--surface);display:grid;place-items:center}
```

<!-- v:mobile.phone-nav/late-mark-bar -->
#### Late mark bar

*Feeling: the logo arrives when it is needed.*

The bar leaves the logo out while the hero shows it large. Block keeps only search and a menu icon at the top, and a small mark docks at left once scrolled. Acne Studios docks its wordmark into an empty centre cell. Seed gives way to two floating capsules once scrolled. Use it with a big wordmark hero, so a phone screen never carries the name twice.

**Seen on** Block, Acne Studios, Seed. **Suits** photo-led, light-precision; finance, fashion, health.

<!-- v:mobile.phone-nav/search-takes-the-bar -->
#### Search takes the bar

*Feeling: tell us what you want.*

Search outranks every link. Awwwards fits a 245 by 42 grey pill between a burger and an account icon. Bellroy keeps a full-width field visible under its icon header. Airbnb opens on a 54px search pill. Use it for marketplaces, directories and catalogues, where people arrive knowing what they want. Make sure the keyboard does not cover the first result, and keep a visible clear control.

**Seen on** Awwwards SOTD, Bellroy, Hugging Face Pricing, Airbnb. **Suits** light-precision, photo-led; other, ecommerce, ai, hospitality.

<!-- v:mobile.phone-nav/contact-action-row -->
#### Contact action row

*Feeling: call us, right now.*

For a local business, the fastest route is a phone call. Native Law sets Call, Email and Menu as three 32px circular icon buttons with 11px labels. Queen's University Library sets one gold block split by a 1px rule into Menu and Ask. Use it for clinics, trades, restaurants and services. These must be real `tel:` and `mailto:` links, since on a phone they open the dialler in one tap. That is the one place where a phone does better than a desktop.

**Seen on** Native Law PLLC, Queen's University Library. **Suits** bold-colour, light-precision; education, local-business.

### The foot of the screen

The foot is where the thumb lives, and it is expensive. Anything fixed there hides content and collides with the browser's own bar. Rules for all of these: put `viewport-fit=cover` in the meta, add `env(safe-area-inset-bottom)` to padding, give `main` matching bottom padding, and keep only one fixed thing at the foot.

<!-- v:mobile.phone-nav/bottom-tab-bar -->
#### Bottom tab bar

*Feeling: this is an app.*

Tabs at the foot for sites people use. Airbnb runs three icons over 11px labels, about 60px tall with a top hairline, Explore in the accent, and a toast floating above. Sonder uses four tabs on a warm ground. Concertgebouw uses five, in a rounded-top sheet with its brand colour. Are.na strips it to plain 13px text on translucent white, with no container, which is the most distinctive version here. Use it for marketplaces, booking, media and member sites with three to five real destinations. Never on a marketing page, where nobody comes back to the third tab.

One active colour only. Three tabs is the strongest count, because the targets are large. Use real line icons drawn as SVG at one stroke weight. Typed symbols render at a tiny and inconsistent size, which I found on three demos in a row.

**Seen on** Sonder, Airbnb, Concertgebouw, Are.na. **Suits** photo-led, warm-neutral, light-precision, type-led; hospitality, culture.

```css
.tabs{position:fixed;inset:auto 0 0;z-index:10;display:grid;grid-template-columns:repeat(3,1fr);
  padding:6px 24px calc(6px + env(safe-area-inset-bottom));background:var(--bg);box-shadow:0 -1px 0 var(--line)}
.tabs a{display:grid;justify-items:center;align-content:center;gap:2px;height:48px;font-size:11px;font-weight:500;color:var(--ink-2)}
.tabs a[aria-current]{color:var(--accent);font-weight:600}
.tabs svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.5}
main{padding-bottom:calc(72px + env(safe-area-inset-bottom))}
```

<!-- v:mobile.phone-nav/bottom-tool-bar -->
#### Bottom tool bar

*Feeling: a tool tray for readers.*

The whole nav moves to the foot, and the top of the page is left free. Svelte sets a 60px white bar with its mark at left and four 32px framed buttons at right: search, type, theme and menu. TypeScript stacks a darker search strip above a blue row of three 16px links. Use it for docs and developer sites, where reading controls deserve to be close. It also keeps a promo strip at the top from competing with a nav. Keep the framed squares at 32px visually, and give each a 44px hit area.

**Seen on** TypeScript, Svelte, Fishwife, Enigma. **Suits** render-3d, bold-colour, photo-led, expressive; devtool, hospitality, ecommerce.

```css
.tools{position:fixed;inset:auto 0 0;z-index:10;display:flex;align-items:center;gap:8px;
  height:calc(60px + env(safe-area-inset-bottom));padding:0 16px env(safe-area-inset-bottom);
  background:var(--bg);box-shadow:0 -1px 0 var(--line)}
.tools .m{margin-right:auto}
.tools button{width:44px;height:44px;margin:-6px -2px;display:grid;place-items:center}
.tools button span{width:32px;height:32px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line-strong);display:grid;place-items:center}
```

<!-- v:mobile.phone-nav/bottom-action-dock -->
#### Bottom action dock

*Feeling: a small object resting on the page.*

A floating dock rather than a bar. Pete Sena runs a 358 by 52 capsule at 16px gutters, with his name at left and a 74 by 38 off-white Menu pill at right. Pomegranate pairs a 54px burger circle with a 245px register pill, each on a small shelf. Przebiegły drops all nav, and a 182 by 46 lime button floats at bottom centre as the only control. Now Code sets a white 24px-radius sheet at the foot holding one 330 by 50 CTA. Use it for portfolios, single-action sites and anything type-led, where a top bar would interrupt the composition. Keep it to one high-contrast control.

**Seen on** Now Code, Pete Sena, Przebiegły Team, Pomegranate Health. **Suits** expressive, illustrated, dark-precision, bold-colour; health, devtool, portfolio.

```css
.dock{position:fixed;left:16px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:10;
  display:flex;align-items:center;gap:16px;height:52px;padding:0 7px 0 18px;border-radius:999px;background:var(--ink);color:var(--bg)}
.dock .m{margin-left:auto;width:74px;height:38px;border-radius:999px;background:var(--bg);color:var(--ink);
  display:grid;place-items:center;font-weight:500}
```

<!-- v:mobile.phone-nav/bottom-section-picker -->
#### Bottom section picker

*Feeling: you always know where you are.*

Neon Docs turns its left tree into a sticky bottom bar of about 45px with a 1px top rule: a branch icon, the current section and a chevron. It is one of the smartest things in the family. A docs reader on a phone needs location more than links, and this keeps both at the thumb. Use it for docs, handbooks and long manuals with a real tree.

A `details` element gives you the open state with no script. Cap the sheet at `60svh` so the reader keeps their place, and stop the scroll chain with `overscroll-behavior:contain`. Add a scrim: mine had none at first, and the bright page behind made the sheet look like it was floating in the content. A very large spread on the sheet's own shadow gives one with no extra element.

**Seen on** Neon Docs. **Suits** light-precision; devtool.

```html
<details class="pick"><summary>Section name</summary><div class="tree"><!-- same tree as desktop --></div></details>
```

```css
.pick{position:fixed;inset:auto 0 0;z-index:10;background:var(--bg);box-shadow:0 -1px 0 var(--line);padding-bottom:env(safe-area-inset-bottom)}
.pick[open]{box-shadow:0 -1px 0 var(--line),0 0 0 100vmax color-mix(in srgb,var(--ink) 32%,transparent)}
.pick summary{list-style:none;display:flex;align-items:center;gap:10px;height:48px;padding:0 20px;font-size:14px;font-weight:500}
.tree{max-height:60svh;overflow:auto;overscroll-behavior:contain;padding:4px 12px 16px;border-top:1px solid var(--line)}
.tree a{display:flex;align-items:center;height:36px;padding:0 8px;border-radius:6px}
.tree a[aria-current]{background:color-mix(in srgb,var(--accent) 12%,var(--bg));font-weight:500}
```

### Second rows

<!-- v:mobile.phone-nav/docs-context-row -->
#### Docs context row

*Feeling: identity above, location below.*

Two rows, stuck as one. Tailwind sets a 56px row of logo, version chip, search and overflow, then a row with a menu glyph and a breadcrumb. Fly.io sets a hamburger beside the current page title in 15px bold. Resend sets a 40px breadcrumb row with its ask box docked at the base. Use it for any docs page: the tree goes behind the glyph, and the reader's location stays. Make sure the current page is what survives truncation. The two rows stuck together cost 96 to 120px, so hide the upper one on scroll if the page is long.

**Seen on** Fly.io Docs, Tailwind Docs, Resend Docs. **Suits** light-precision, illustrated; devtool.

```css
.head{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--bg) 92%,transparent);backdrop-filter:blur(12px)}
.a{display:flex;align-items:center;gap:10px;height:56px;padding:0 16px;border-bottom:1px solid var(--line)}
.b{display:flex;align-items:center;gap:12px;height:40px;padding:0 16px;border-bottom:1px solid var(--line);
  font-size:14px;color:var(--ink-2);white-space:nowrap;overflow:hidden}
.b b{color:var(--ink);font-weight:500;overflow:hidden;text-overflow:ellipsis}
```

<!-- v:mobile.phone-nav/scrolling-row-under-bar -->
#### Scrolling row under the bar

*Feeling: everything is one flick from the top.*

A row under the header that scrolls sideways and clips at the screen edge, so the cut item says there is more. Stripe pins a section name at left and scrolls the rest beneath the top bar on every product page. Apple Intelligence adds a back chevron and pins the active chip. Bonobos runs 60px round category photos with 12px labels, with the fifth cut by the edge, so categories come before the hero. Monocle clips a row of section tabs split by pipes. Ritual splits a 50px row into two shop cells. Use it for product families, shops and sections with five to eight peers. The cut through the last visible item is the affordance, so never fit the row exactly.

Fade only the right end. My first version faded both ends, and at rest the mask ate the first letter of the first link.

**Seen on** Apple Intelligence, Stripe Connect, Stripe Climate, Stripe Payments, Stripe Atlas, 12 sites in all. **Suits** photo-led, gradient-light, light-precision, type-led; ecommerce, finance, editorial, health.

```css
.sub{position:sticky;top:0;z-index:4;display:flex;align-items:center;height:44px;background:var(--bg);font-size:14px;font-weight:500}
.sub b{flex:none;padding:0 16px;color:var(--accent)}
.sub div{display:flex;gap:20px;min-width:0;padding-right:32px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;
  -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent);
  mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent)}
.sub div::-webkit-scrollbar{display:none}
```

For a shop, the same row carries round photos:

```css
.rail{display:flex;gap:12px;padding:8px 16px 12px;overflow-x:auto;scroll-snap-type:x proximity;scroll-padding-left:16px;scrollbar-width:none}
.rail a{flex:none;width:68px;scroll-snap-align:start;text-align:center;font-size:12px;line-height:16px}
.rail img{width:60px;height:60px;border-radius:50%;object-fit:cover;margin:0 auto 6px}
```

### Mistakes that cheapen phone nav

- **Hiding the only action.** A bar with a logo and a burger on a sign-up product asks for two taps where one would do. About 1 in 4 gold sites keep an action in the bar, and most product sites do.
- **Three things competing in the bar.** Curology fits a logo, a long pill, a bag and a burger, and the pill wins nothing. One filled control, and short labels.
- **A stock icon on a designed page.** The menu control is pure brand surface. Match the radius, the stroke and the language of the page.
- **A glyph as the hit area.** Most of my demos tripped the small-target check on the menu button. Keep the mark small and the button 44px.
- **Typed symbols as icons.** A search glass or a chevron typed as a character renders tiny and at the wrong weight. Draw SVG at one stroke.
- **Two logos on one screen.** A wordmark hero under a bar carrying the same logo looks like a mistake. Dock it late.
- **A bar that eats the page.** Announcement strip plus bar plus subnav can pass 150px before content starts. On Polestar the strip wraps to two lines and sits on a 56px bar, and that is about the limit. Let the strip scroll away.
- **A bottom bar on a marketing page.** It claims to be an app, and nobody returns to a third tab.
- **Fixed at both ends with a chat bubble on top.** Count what is fixed. One at the top, one at the foot, and collapse everything else.
- **A blur with no fallback.** A translucent bar over a busy hero with low opacity makes the logo unreadable. Raise the fill to about 80 percent before you add blur.
- **No safe area.** A foot bar without `env(safe-area-inset-bottom)` sits under the home indicator on a notched phone.

## Before you call it done

Read the phone frames as a real layout, then check each line.

- [ ] No sideways overflow at 390, and none at 360. Only about 2 percent of strong sites fail this.
- [ ] The first screen has one first read and something cut by an edge.
- [ ] The primary action sits above about y=640, so it survives browser bars.
- [ ] Every heading was checked at 360 for one extra line and for widows.
- [ ] Gutters are one of 16, 20 or 24, the same everywhere except deliberate bleeds.
- [ ] No interface was scaled to fit. It was cropped, swapped or cut.
- [ ] Photos were recut or refocused for portrait, and no text sits on a busy area.
- [ ] Every wide table has a phone form, and no table is pinched or scrolled whole.
- [ ] Code stays at 13px or larger and scrolls inside its block.
- [ ] Nothing depends on hover, and hover styles sit under `@media(hover:hover)`.
- [ ] Tap targets are 44px, with at least 8px between neighbours.
- [ ] Fields are 16px, with the right `type`, `inputmode` and `autocomplete`.
- [ ] One fixed thing at the top, one at the foot, and `main` has padding for it.
- [ ] Heights use `svh` or `dvh`, and fixed bars add `env(safe-area-inset-bottom)`.
- [ ] Rails and carousels can be reached without touch, and the first item sits on the gutter.
- [ ] A consent card and a chat widget do not cover the first screen's action.
- [ ] Under reduced motion, bars appear without sliding, and nothing depends on a clip-path sweep.
- [ ] The signature of the desktop page is still there.
