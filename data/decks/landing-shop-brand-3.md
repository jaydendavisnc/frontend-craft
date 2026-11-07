# Your direction (seed 1023)

Reads as **brand**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Dishoom, a gold food-drink page)

1. Navigation: `nav.top-bar/chromeless-type-row`
2. Hero: `hero.full-bleed-media/contained-plate`
3. Feature alternating: `section.feature-alternating/full-width-tinted-panels`
4. Feature grid: `section.feature-grid/media-plate-then-caption`
5. Contact form: `section.contact-form/underline-field-form`
6. Faq: `section.faq/big-type-rows`
7. Location hours: `section.location-hours/hours-card-beside-map`
8. Logo wall: `section.logo-wall/few-logos-big-room`
9. Menu or catalog: `section.menu-or-catalog/service-price-panels`
10. Closing section: `section.cta-band/tone-panel-close`
11. Footer: `section.footer/colour-flood-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Monomakh** with **Commissioner**. A dark Slavonic-heritage face, with a neutral humanist sans that lets it stay the only historic voice.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Commissioner 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Monomakh&display=swap https://fonts.googleapis.com/css2?family=Commissioner:slnt,wght,FLAR,VOLM@-12..0,100..900,0..100,0..100&display=swap

## Palette

From Nuro: bg #ffffff, surface #f7f7f5, text #232323, muted #716e6c, accent #6a63f0. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **host**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `light-arrives-last`, **Scroll** `exploded-teardown`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

## Every section is its own project

Award-winning sites feel made because each part had its own idea. Do not fill sections. Design them.

Before any code, write `.frontend-craft/ideas.md`. For every section, write three lines that begin `Wouldn't it be cool if`, and make at least one of them involve no text at all: something that moves, responds, can be dragged or tried, or is drawn or built. Pick the one that best makes a visitor understand or want this, even if it is harder to build, and mark it. `shoot.mjs` checks this file.

**This is a website, not a slide deck.** A page of heading, paragraph, picture, repeated, exhausts people. Keep the headline, then let things carry the meaning. If a sentence explains something the page could show, build the thing and delete the sentence. As a guide: under 25 words of copy around the hero headline, and under 35 words of prose in a section. Text inside real content such as a product view, a table or a menu does not count. No two adjacent sections should share a skeleton.

**Do not stop at correct.** Right structure and motion can still look boring. Give the ground light and depth, give type real presence, use one confident colour, and make every component look custom-built, with edges, states and detail. The first screen should be a lit, composed scene with one hook and one striking object, not a heading and two buttons on a flat panel.

**Showpieces.** The two Showpiece recipes are the moments someone would send to a colleague. Give them real scale and real effort, and let the page be quieter around them.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Dishoom** (food-drink, gold) https://www.dishoom.com
- Doing: A restaurant group site styled as vintage Bombay printed matter, with film footage and food photography doing the selling.
- Why it feels made: The system is committed: one cream paper colour, double-rule frames, tracked caps and justified serif, so every section feels like the same menu card. Photography is warm, candid and generous.
- If imitated badly: Double borders and italic serif turn kitsch without real photography and a coherent paper palette.

**Polestar** (brand, gold) https://www.polestar.com
- Doing: A car brand presented as a Swiss catalogue: one grotesque, four sizes, square outlines and large quiet photography doing the selling.
- Why it feels made: Four type sizes, one weight, zero button radii and a 6-column grid make heavy promotional and legal content feel composed. Even footnotes are set on the grid.
- If imitated badly: Tight 16/18 body and -4.5% display tracking need a tuned grotesque; in a default sans it looks cramped rather than confident.

**Vivien's Creative** (agency, gold) https://vivienscreative.com.au/
- Doing: A talent-agency homepage that is one huge wordmark across the bottom over a rapidly cross-fading slideshow of artist photographs.
- Why it feels made: Wall-to-wall editorial photography with a clipped white wordmark and one serif line is fashion-magazine confident and has no UI chrome; cross-dissolves with wipes feel curated.
- If imitated badly: Weak or mismatched photography collapses the effect; the text must keep contrast over bright skies.

## System choices

- Frames: `media.photography/cutout-on-flat`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/cool-ground-white-tile`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/light-arrives-last`
- Scroll: `motion.scroll-pin-or-scrub/exploded-teardown`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `nav.mobile-menu/thumb-zone-sheet`
- Showpiece: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: chromeless-type-row (seen on Block, Gagosian, 1X)

*Feeling: the header is just a line of type.*

No bar at all, only text sitting on the page. Block sets ten centred uppercase links with no logo, no button, no border. 1X runs six muted caps links at 11px and +0.08em. Gagosian uses serif text in light grey with the wordmark in black. Evenark takes it to display scale, a 44px light comma-separated sentence that is both headline and nav. Use it for fashion, culture and confident brands. Avoid it when the first screen needs a conversion, or when the page is a busy image with no scrim.

Set 11 to 14px, caps tracked about .08em or plain sentence case, 35 to 56px gaps. On photographs, lay a 90px top gradient behind it, from black at 25 percent to nothing, as Figure does. The display version needs nothing else on the row.

### Hero: contained-plate (seen on Blue Bottle, Motto, White Cube)

- **Feels:** A gallery wall, or a catalogue. Nothing to prove.
- **Use when:** You want the picture untouched, for retail, art and furniture.
- **Not when:** You need drama in the first second.
- **Recipe:** Hold the image back from the edges and keep every word on the paper, so no veil is ever needed. Blue Bottle runs a full-width dark still life about 60vh tall with an uppercase 14px headline and a 48px square button below it, plus a `01 02 03` counter at the right. Sonar uses a 960px plate with a caption row. Unito starts a 1400px photo near y 496 under a ghosted wordmark, cropped by the fold. HAY opens on an empty 1330 by 750 tile holding only a hand-drawn signature.

### Feature alternating: full-width-tinted-panels (seen on Copilot, Dailee by Daily Fresh Fruits, EverShee)

*4 sites, quality 4.* Each feature gets its own room. Friendly and consumer. Use for four or fewer features, each with its own colour reason.

Recipe: panels of about 1312 by 670px, radius 30 to 40, gap 24 to 40. A two or three stop diagonal pastel wash, a 48px heading with a small tag on one side, and one floating UI card on the other. Dailee floods a single flavour colour per panel. Sweetgreen places a 658px tall photo with a 20px radius on a sage panel.

Seen on Copilot, Dailee, Sweetgreen, EverShee. Suits gradient light, soft pastel, bold colour, for finance, food and health.

### Feature grid: media-plate-then-caption (seen on Aman, Amplitude, Devin Desktop (codeium.com redirect))

*19 sites, quality 5.* The commonest strong grid: a plate, then text sitting straight on the page with no card. It feels like a catalogue. Use it whenever you have a real visual per item, in any genre. It is the easiest way out of the three-card row and the variant we would reach for first.

Recipe: three or four columns with 8 to 32px gaps. A plate 286 to 500px tall, then 24px of space, a 20 to 28px title at weight 400, and 16px copy at 1.4 and about 56 to 60% ink. No surface behind the text, no border, no shadow. Plate radius follows the system: 0 for technical, 8 to 12 for product, 32 for soft brands. Keep rows 64 to 120px apart. Factory runs 330px square plates with square corners, at 16/1.2 copy, and about 64px between rows.

Seen on Devin (codeium.com), Amplitude, Factory, Nuro, Exa, GoCardless, Aman, Boston Dynamics, Sentry. Suits light precision, photo-led, warm neutral and dark precision, for AI, SaaS, brand and culture.

```html
<article>
  <div class="plate" style="--x:0%">
    <div class="ui"><!-- real fragment, at real size, taller than the plate --></div>
  </div>
  <h3>Invoices that read themselves</h3>
  <p>Photograph the delivery note and every line lands against its supplier.</p>
</article>
```

```css
.row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
/* one wash cut into four plates: each shows a different slice of the same field */
.plate { position: relative; height: 300px; overflow: hidden;
  background: linear-gradient(100deg, var(--wash-1), var(--wash-2) 55%, var(--wash-3)) var(--x) 0 / 410% 100%; }
/* taller than the plate on purpose, so the crop reads as a crop */
.ui { position: absolute; top: 18px; left: 16px; right: 16px; height: 360px; padding: 14px 15px; font-size: 13.5px; line-height: 1.3;
  background: var(--surface); border-radius: 9px; box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 16px 32px -14px rgba(0,0,0,.3); }
.ui.off { left: 20px; right: -40px; }   /* one fragment leaves by the right edge */
article h3 { margin-top: 24px; font: 400 20px/1.2 var(--font-text); letter-spacing: -.01em; }
article p { margin-top: 8px; color: var(--ink-2); max-width: 21em; }
@media (max-width: 980px) { .row { grid-template-columns: repeat(2, 1fr); row-gap: 32px; } }
@media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
```

Set `--wash-1` to `--wash-3` to three tones close to your surface, then add a faint grain so the plate stops looking like a CSS gradient.

### Contact form: underline-field-form (seen on Villa Aurelia, Structure Engineers, Alessandro Stella)

*Feeling: a letter, not a ticket.*

Fields are single lines, so the page stays a page. Five of the seven pages are gold. MetaLab sets an 88px display line at left on black, with a 2 by 2 grid of underlined fields at right and a small pill submit. Villa Aurelia uses tracked caps labels in its accent with date and guest fields for a booking. Alessandro Stella makes the form from the same ruled rows as the rest of the page, and Sidekick sets a thick pale underline with bold labels. ON Makelaardij places its team's real shopfront photo beside the form, which does more for trust than any badge. The rule must darken on focus, because there is nothing else to change.

```css
.wrap{width:min(1360px,calc(100% - 48px));margin-inline:auto;padding-block:120px;display:grid;grid-template-columns:1fr 1fr;gap:48px}
.wrap h1{font:300 88px/1 var(--font-display);letter-spacing:-.02em}
form{display:grid;grid-template-columns:1fr 1fr;gap:56px 32px;align-content:start;padding-top:12px}
.f{display:grid;gap:6px}.f.w{grid-column:1/-1}
label{font-size:12px;color:var(--ink-2)}
/* a field is only a line. The line turns full ink on focus, and that is the whole focus state */
input,select,textarea{width:100%;border:0;border-bottom:1px solid var(--line);background:none;border-radius:0;outline:0;padding:8px 0 12px;font-size:16px;transition:border-color .15s}
textarea{height:112px;resize:none}
input:focus,select:focus,textarea:focus{border-bottom-color:var(--ink)}
.chk{display:flex;align-items:center;gap:10px;font-size:13px}
.chk input{width:14px;height:14px;padding:0;border:1px solid var(--line);appearance:none;border-radius:2px}
.chk input:checked{background:var(--ink)}
.end{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between}
form button{height:32px;padding:0 16px;border-radius:16px;border:0;background:none;box-shadow:inset 0 0 0 1px var(--line);font-size:13px;cursor:pointer;transition:background .15s,color .15s}
form button:hover{background:var(--ink);color:var(--bg)}
@media(max-width:860px){.wrap{grid-template-columns:1fr;gap:56px;padding-block:72px}.wrap h1{font-size:64px}form{grid-template-columns:1fr;gap:36px}}
```

### Faq: big-type-rows (seen on Rabbit, Telkom-OT, Lyra)

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

### Location hours: hours-card-beside-map (seen on Lil Italy, Zahnarzt Wernitz, KAWARA MUSEUM - LIBRARY)

*Feeling: the sign in the window.*

A solid brand card with seven day rows, beside a map tile of equal height. Lil Italy sets an oxblood card at radius 24 with a heavy caps title, bold uppercase days on 36px rows, dashed leaders running to the time, and a pale card and a real map alongside. Zahnarzt Wernitz uses a navy block with a wavy top, grouping Monday and Tuesday and writing the lunch closure on two lines. KAWARA Museum gives each of its two venues an orange dot with phone, fax and hours, beside a 700 by 510 map. Rivian pairs a photo with a dark panel. Use it for restaurants, clinics and shops, where this is the one loud object in the section. Use a real map, or none. Avoid it for institutions with many schedules, which need the plain list.

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

### Logo wall: few-logos-big-room (seen on Nuro, Apptronik, Athletics)

*Feeling: a short list of serious partners.*

Three to five marks with an enormous amount of space. Scarcity reads as selection, and this is the right wall for a small client list. Nuro centres five black marks on a 230px pitch in a 420px tall panel at radius 32, and the empty padding gives each partner its weight. Apptronik sets five grey-white marks in a 300px black tile. One Medical shows three 150px marks in brand green. Paddle sets 40px black wordmarks on a flat 217px sand band, cut by the viewport with no fade. Athletics recolours nine logos to one ink on lime.

### Menu or catalog: service-price-panels (seen on Sam Hoult Beauty, Origin Wellness Spa, Crescent Dental)

*Feeling: a clear price list from someone who cares.*

For salons, clinics, gyms and trades, the menu is a price list. Sam Hoult sets tinted panels in two columns at radius 24 with a pale double frame, a 30px light category title, and 16px rows on a 34px pitch with right-aligned prices, 13px notes under a row, and a rule above conditions such as a patch test. No leaders are needed, because the panel is narrow. Origin Wellness alternates treatments with big rounded photos, ticks and a small Book pill. Crescent Dental uses tall portrait cards. Prices shown up front are what make a local business feel honest, so show them, or at least a `from` figure. Avoid it if every job is quoted individually, where one `from` price and a contact route serve better.

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

### Closing section: tone-panel-close (seen on Tana, Meta AI, Boston Dynamics)

*Feeling: a quiet room at the end.*

An inset panel one tone off the page. OpenAI's API pricing is the flattest: 1376 by 422, radius 6, centred, with a grey pill and a bare link. Tana places a two-line heading at left and one soft bloom on the right half. Meta fades a 1024px panel from white into pale blue with an app icon. My bloom took three tries. First it was a small oval that showed banding. Then I enlarged it, and it was twice too strong. The real one is pale, wide, runs off the panel's right edge, and pairs a warm core with cool flanks. Turn it down until you doubt it is there.

```css
.panel{position:relative;overflow:hidden;isolation:isolate;min-height:420px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:72px;background:var(--surface);border-radius:32px}
/* --warm and --cool: two pale tints from your palette */
.panel::after{content:"";position:absolute;z-index:-1;left:44%;right:-12%;top:-30%;bottom:-30%;opacity:.62;filter:blur(40px);
  background:radial-gradient(38% 42% at 56% 52%,var(--warm),transparent),radial-gradient(34% 62% at 26% 50%,var(--cool),transparent),radial-gradient(30% 60% at 92% 46%,var(--cool),transparent)}
.panel h2{font:400 52px/1.08 var(--font-display);letter-spacing:-.02em;max-width:11em}
@media(max-width:760px){.panel{padding:40px 24px;border-radius:24px;min-height:0}.panel h2{font-size:36px}.panel::after{left:-10%;right:-30%;top:50%;bottom:-40%}}
```

### Footer: colour-flood-footer (seen on Exa, TR Studio, Wolff Olins Work)

*Feeling: the colour you were holding back.*

The largest flat colour on the whole page, kept for the end. Exa floods a saturated cobalt with fine grain and a thin serif sentence at about 77px. Browserbase goes to full orange with a white monogram. TR Studio makes a full-viewport periwinkle colophon with one centred seal, and closes on a 40px strip of oxblood. Use it when the brand owns a colour and the page above has been mostly neutral, because a flood after a colourful page adds nothing. Set all text in one tint of the field: white, or a dark of the same hue. A second colour usually ruins it. Avoid it if the brand colour is pale, because small links will fail contrast on it.

### Frames: cutout-on-flat (seen on Apple, Framework, Apple Vision Pro)

*Feeling: clean, confident, retail-grade.*

**Use:** Product ranges, colourways, parts, and a recurring cut-out figure as a small signature. **Avoid:** Soft or hair-edged subjects without a clean mask. A rough cut-out is worse than a rectangle.

Set the object straight on the tile colour with no floor. Group colourways so they overlap: five units across, the group filling about 90% of tile width. Use one soft contact shadow, offset slightly away from the key light. Knolled parts laid in a grid or flat-lay work the same way. For a person, use a transparent cut-out about 80px tall and let it perch on interface edges, changing pose per section. Rotation of -12 to +15 degrees suits snacks and packs with a little parallax. Portraits work the same way: cut people out, stand them on one pale panel, and fix the head height. Thrivent runs five waist-up cut-outs on alternating pale blue and tan panels at radius about 16, with a larger centre panel and heads breaking above the panel tops, which adds life to a strict row. Motusmade sets one on a pale blue panel.

Frame.work was tagged as a 3D render, but the frames show photographed parts, so it is counted here.

### Headline: name-as-headline (seen on Apple, Analogue, ACME)

The object needs no selling. Seen on 6 sites.

**Use it for:** Physical products, launches and iconic brands where the name already means something.

**Avoid it for:** Unknown products: if the name says nothing, the visitor learns nothing.

**Recipe:** The product or brand name alone is the headline, 56-80px, weight 500-600, tight tracking, centred, no verb. Beneath it a five or six word promise at 21-28px weight 400, roughly 2:1 with the name. A short status word can replace the promise. Let the object fill the frame.

<a id="poster-anchored"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: cool-ground-white-tile (seen on Apple Vision Pro, Bauhaus Clock, VS Code)

*Feeling: lit, like a product on a showroom table.*

**Use it for:** Hardware, consumer tech, and tiles holding one strong object or photo. **Avoid:** Text-heavy tiles. A white tile with a paragraph on grey is the default admin look.

Cool ground #eef0f2 or #f5f5f7, pure white tiles, no border, one soft shadow or none. Text #1d1d1f, secondary #86868b. White reads as lit because the ground leans blue-grey, so put real product in the tiles.

Bauhaus Clock pairs an #eef0f2 ground with white tiles and uses soft shadows rather than borders, and saturated colour appears only inside product tiles. White reads as lit because the ground sits a little cool and a little darker.

### Logo: mark-as-image-system (seen on Soundsensing, Stone Island, Russell & Stellar)

*Feeling: a brand with real depth. The mark is everywhere and never tiresome.*

**Use:** Fashion, architecture, hospitality, hardware. Whenever you need decoration, use the mark before anything else. **Avoid:** A weak mark. Enlarging a poor logo only makes the problem bigger.

Redraw the mark for each scale. A 58px seal in the nav, 40px in the footer, and a 560px version with heavy concentric arcs in flat mid-grey as a whole band. A glyph that serves as divider, placeholder and overlay on portraits, then sits above a 630px wordmark in the footer. A 190px asterisk turning slowly, returning at 120px. A 51px tile that also appears etched on the product.

```html
<!-- Three masters of one idea. Parts fall away as size falls, and the big one gains detail the small one could not hold. -->
<symbol id="m16" viewBox="0 0 16 16"><path d="M3 10a5 5 0 0 1 10 0z" fill="currentColor"/><path d="M1 12.75h14" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="m44" viewBox="0 0 44 44"><g fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 31a17 17 0 0 1 34 0"/><path d="M12 31a10 10 0 0 1 20 0"/></g>
  <path d="M19 31a3 3 0 0 1 6 0z" fill="currentColor"/><path d="M1 35h42" stroke="currentColor" stroke-width="2"/></symbol>
<!-- m600: four arcs in 30, 24, 18 and 14px strokes, each broken by stroke-dasharray, set in flat mid grey on a near-black band. -->
```

**In the lab:** Three masters of one idea, with detail added at the top and removed at the bottom. My first small version, arcs over a dot, collapsed into the Wi-Fi icon at 16px. I replaced it with a half disc on a line. Always test a mark against the system icons it might be mistaken for.

### Icons: clay-render-icons (seen on Airbnb)

*Feeling: warm and tactile. A small toy where a glyph used to be.*

**Use:** Consumer navigation and category tabs, where warmth matters and each item is a real thing such as a house or a suitcase. **Avoid:** Dense utility interfaces, or without a real 3D source. Generated renders need one lighting setup, or the set falls apart.

Render every object with one setup: soft clay or glossy finish, top-left key light, one soft contact shadow, the same camera angle. Show at about 48px. Bake to images at 2x and add a 2 to 4px bottom-weighted shadow only in the render. Use the same family in larger moments, such as a modal. Keep the label beside it in plain text.

### Page rhythm: label-left-content-right (seen on Alessandro Stella, Stripe Sessions, Work & Co)

**Feel.** An annual report from a firm that charges a lot.
**Use when** the company has a point of view and content varies by section: agencies, consultancies, funds. **Avoid** when sections are all the same shape, which makes the left column look wasted.
**Recipe.** Work & Co: a 1060px container (x=190 to 1250), a 360px label column, a 700px content column from x=550. Every section has one short label at 20px/500 and an otherwise blank column. Headline, media, index and form all share that one left edge. Oxygen Pictures: four 330px columns with 24px gutters, labels in column one, content from column three, blank columns kept empty. As a rows variant: 1px rules, 11px small caps label at x=144, content at x=720, rows about 110px tall.
**Why it works.** Repetition of one offset gives the page an obvious logic, and the blank column is constant, so it reads as structure.

**Built.** This recipe transferred almost exactly on the first try, because it is pure geometry. It is the safest way to get a designed feel from limited assets.

```css
.sec{display:grid;grid-template-columns:minmax(0,360px) minmax(0,700px);
  max-width:1060px;margin-inline:auto;padding-block:60px;border-top:1px solid var(--line)}
.sec>.label{font:500 20px/1.3 var(--font-text);letter-spacing:-.01em}
@media(max-width:760px){.sec{grid-template-columns:1fr;gap:24px;padding-inline:20px}}
```

### Load: light-arrives-last (seen on Stripe Sessions, mymind, Bitnomi)

*Feeling: lit rather than loaded.*

Type and layout are final, then only light changes. Stripe Sessions raises its ribbon from a 25 percent pastel ghost to full saturation by 1.1s, with no slide or scale. mymind's headline goes from 40 percent grey to black, then a gradient ring blooms outward over about 2s. SpaceX lets the planet come up after the copy. Use it for one hero render or glow. It is readable before the show begins, and that is the whole point. A ghost state of the image also means the hero never sits empty.

```css
.render{animation:lit 1s var(--ease-soft) .2s both}
@keyframes lit{from{opacity:.25;filter:saturate(.6)}to{opacity:1;filter:none}}
```

### Scroll: exploded-teardown (seen on Prägen Hätlen, Scale AI, VanMoof)

*Feeling: understanding by taking it apart.*

One object separates. Prägen Hätlen scrubs a watch through rotation, explosion and component close-ups over about 16,000px, with ground tone stepping between chapters and a persistent CTA. Plvs Ultra separates a chip stack along dotted guides. Scale AI fans panes in perspective. Use it for physical products and layered systems. Prerender frames unless you have a real model. See `scroll.md` Image sequence scrub on canvas.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

### Phone menu: thumb-zone-sheet (seen on Zed Blog, Polestar, SILENCIO)

*Feeling: everything within reach.*

Weight the menu toward the bottom of the screen. Polestar leaves the top half empty and sets its 30px list on a 40px pitch in the lower half, right where the thumb is, with chevrons far right. Zed's blog uses a rounded-top sheet with Turn Dark Mode On and Close Menu at the base. Silencio turns the menu into a row of 28px caps pills at the very bottom. Use it on brands confident enough to leave a screen half empty. On one-handed phones it is the most comfortable menu in the corpus.

```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;justify-content:flex-end;gap:24px;
  padding:64px 24px calc(24px + env(safe-area-inset-bottom));background:var(--bg)}
.sheet a{display:flex;justify-content:space-between;align-items:center;font:400 30px/40px var(--font-display);letter-spacing:-.02em}
```

### Showpiece: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.