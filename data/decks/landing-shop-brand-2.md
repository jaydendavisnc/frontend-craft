# Your direction (seed 1022)

Reads as **brand**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Vitsoe, a silver ecommerce page)

1. Navigation: `nav.top-bar/scroll-swap-bar`
2. Hero: `hero.split-copy-media/plain-plate`
3. Contact form: `section.contact-form/underline-field-form`
4. Menu or catalog: `section.menu-or-catalog/plate-photo-grid`
5. Feature grid: `section.feature-grid/media-plate-then-caption`
6. Logo wall: `section.logo-wall/few-logos-big-room`
7. Location hours: `section.location-hours/location-card-grid`
8. Testimonial: `section.testimonial/display-pull-quote`
9. Blog index: `section.blog-index/peek-news-rail`
10. Closing section: `section.cta-band/split-plain-close`
11. Footer: `section.footer/colour-flood-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Sentient** with **Switzer**. A dark even serif as the headline of a software page signals thought before features; the neutral handles the UI.
- Display: 64px, phone 38px, weight 400, tracking -0.02em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Switzer 14px 500. Label: sentence case
- Load: https://api.fontshare.com/v2/css?f[]=sentient@1,2&display=swap https://api.fontshare.com/v2/css?f[]=switzer@1,2&display=swap

## Palette

From 1 Hotels: bg #f2efe8, surface #f7f3ed, text #261d17, muted #706045, accent #364237. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `mark-performs`, **Scroll** `section-theme-shift`, **Hover** `underline-language`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Vitsoe** (ecommerce, silver) https://vitsoe.com
- Doing: A furniture maker's home page run like an honest catalogue: Univers, one link colour and photographs of real homes.
- Why it feels made: Extreme restraint in type sizes plus strict column alignment carries the Dieter Rams ethos, and the copy is as calm and specific as the layout.
- If imitated badly: With stock photos or a lesser grotesque the same layout reads as a 2012 corporate CMS.

**Polestar** (brand, gold) https://www.polestar.com
- Doing: A car brand presented as a Swiss catalogue: one grotesque, four sizes, square outlines and large quiet photography doing the selling.
- Why it feels made: Four type sizes, one weight, zero button radii and a 6-column grid make heavy promotional and legal content feel composed. Even footnotes are set on the grid.
- If imitated badly: Tight 16/18 body and -4.5% display tracking need a tuned grotesque; in a default sans it looks cramped rather than confident.

**Figure** (ai, gold) https://www.figure.ai
- Doing: Full-bleed cinematic robot film chapters with a tiny bottom-left caption and one outlined button, ending in a numbered index footer.
- Why it feels made: Real film and photography do all the work; type is small, uppercase and anchored to the same bottom-left grid on every chapter, with a graduated scrim that keeps contrast without a visible overlay.
- If imitated badly: Needs genuinely cinematic footage; with stock imagery the sparse type reads as empty.

## System choices

- Frames: `media.render-3d/matte-clay`
- Headline: `type.display-headline/name-as-headline`
- Section headings: `type.section-heading/tracked-caps-heading`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/photo-overlay-tile`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/full-width-small-gutter`
- Load: `motion.load-sequence/mark-performs`
- Scroll: `motion.scroll-pin-or-scrub/section-theme-shift`
- Hover: `motion.hover-state/underline-language`
- Phone menu: `nav.mobile-menu/search-first-sheet`
- Showpiece: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Showpiece: `motion.scroll-pin-or-scrub/hero-retreats`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: scroll-swap-bar (seen on Stripe Pricing, Cloudflare Workers, ElevenLabs Pricing)

*Feeling: the header notices you have started reading.*

The bar changes its job once you are into the page. Stripe's pricing page swaps the main nav for a 64px white bar holding three section anchors, a contact pill and a 3px lilac progress line along the top edge. Cloudflare Workers drops everything but the cloud mark and a 38px orange pill. ElevenLabs reduces to logo and Sign up. Storybook swaps to a section dropdown and centred anchors. Use it on long pages, where the global nav has stopped being useful. Avoid it on short pages, where the swap never pays off.

Crossfade over 200 to 300ms and keep the height constant if you can, because a bar that changes height pushes the reading position. A reading-progress line goes on the top or bottom edge, 2 to 3px tall.

### Hero: plain-plate (seen on New Exhibitions, Poeza, Virtual Tour Montenegro)

- **Feels:** Assured, like a catalogue page. Nothing to prove.
- **Use when:** Brands whose restraint is the point, galleries, furniture, small makers.
- **Not when:** You need a conversion in the first screen.
- **Recipe:** No background, no animation, no radius. A 330 to 500px copy column beside a 380 to 676px photo, top-aligned, with deliberately uneven margins. Text 32 to 50px, 17px body, one link. Next section about 90px under.

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

### Menu or catalog: plate-photo-grid (seen on Sweetgreen Menu, Dishoom, Sweetgreen)

*Feeling: every bowl under the same light.*

Identical overhead plates in a three-column grid. Sweetgreen sets 437px squares at radius 20 and a 24px gap, above a 24px caps name, an 18px ingredient list, an allergen line and `Order now`. Serif tabs at 48px with a dot under the active one switch the set. The menu page adds four macro columns with a green number over a tiny caps label. Consistent photography is the entire design: same angle, plate, light and background, so the eye compares food rather than pictures. Without that set of photographs, use a text menu. Pin the allergen line and order link to the card base so they align.

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

### Logo wall: few-logos-big-room (seen on Nuro, Apptronik, Athletics)

*Feeling: a short list of serious partners.*

Three to five marks with an enormous amount of space. Scarcity reads as selection, and this is the right wall for a small client list. Nuro centres five black marks on a 230px pitch in a 420px tall panel at radius 32, and the empty padding gives each partner its weight. Apptronik sets five grey-white marks in a 300px black tile. One Medical shows three 150px marks in brand green. Paddle sets 40px black wordmarks on a flat 217px sand band, cut by the viewport with no fade. Athletics recolours nine logos to one ink on lime.

### Location hours: location-card-grid (seen on Sweetgreen Locations, Apple Retail, Boudin Bakery)

*Feeling: every branch accounted for.*

For chains, three columns of quiet cards. Sweetgreen sets a white 8px-radius card on a tinted page: 16/600 name with a pin icon, a 14px two-line address, a clock icon with two-line hours, and a pair of 40px pills for View and Order pinned to the base. The page groups by state with a count and a `Jump to state` select. The important part is how it handles exceptions: Coming soon replaces the sub-line and the button becomes `Get updates`, and Temporary Hours for one date sit in the same slot as ordinary hours. Apple Retail uses a 16:9 storefront photo and a single `Open until` line. Pin the buttons with `margin-top:auto`, so they align however long the address runs. Avoid it under about six locations, where each place deserves a richer row.

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

### Testimonial: display-pull-quote (seen on Attio, Greylock, Speakeasy)

*Feeling: the page stops and listens.*

One quote at headline scale, often the only place on the page the second typeface appears. Reserving a serif for this moment is what makes it land: Attio, Convex and Brex all keep a serif for a single quote. Use it once, for your single best sentence. Avoid it if the quote needs more than about 30 words.

Set 48 to 64px on 1.05 leading, tracking -2 to -3 percent, weight 300 to 400, on a measure of 700 to 1220px. Speakeasy runs it between hairlines with a small accent mark in the left rail and the text indented 112px, then a 56px square greyscale portrait, 18px name, mono role, a rule and a grey logo. Attio centres it in a tall cell on a fine dot grid. Greylock colours two phrases in the accent over a stippled map. Keep the mark small and solid, because a big pale one turns the sentence into a poster. For a scroll treatment, Figma fades each word from grey to full ink as you read.

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

### Blog index: peek-news-rail (seen on Cognition, Gagosian, Acne Studios)

*Feeling: the latest, in passing.*

A homepage rail that bleeds off the right. Cognition sets flat 350 by 197 covers at 8px gaps from x=64, with a 15px serif title and a dotted date, under 32px square arrows. Factory uses 380px white cards at radius 4, a mono `READ MORE`, and turns the title orange on hover. Gagosian sets its rail on a dark band with 1px vertical rules and alternating image-first and headline-first items. Acne Studios sticks a lede at left while images run at right. Use it when news is secondary, and set the band on a tone if the page needs a beat.

### Closing section: split-plain-close (seen on Vercel Pricing, Stripe Billing, Amplitude)

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

### Footer: colour-flood-footer (seen on Exa, TR Studio, Wolff Olins Work)

*Feeling: the colour you were holding back.*

The largest flat colour on the whole page, kept for the end. Exa floods a saturated cobalt with fine grain and a thin serif sentence at about 77px. Browserbase goes to full orange with a white monogram. TR Studio makes a full-viewport periwinkle colophon with one centred seal, and closes on a 40px strip of oxblood. Use it when the brand owns a colour and the page above has been mostly neutral, because a flood after a colourful page adds nothing. Set all text in one tint of the field: white, or a dark of the same hue. A second colour usually ruins it. Avoid it if the brand colour is pale, because small links will fail contrast on it.

### Frames: matte-clay (seen on Nuro, Telkom-OT, Pete Sena)

*Feeling: sober and sculptural. Form without brand noise.*

**Use:** Engineering and industrial firms, autonomy and spatial products. A concept that should feel like a study model. **Avoid:** When the product's appeal is its colour or finish.

Render everything in one matte tone with soft, even light and real ambient occlusion. A monochrome grey object of about 650px on a bare ground of the same family, with no backdrop box, rotating with scroll. An all-white clay city with faint perception labels and one coral ground gradient can carry black type. Use small coloured labels as the only colour.

### Headline: name-as-headline (seen on Apple, Analogue, ACME)

The object needs no selling. Seen on 6 sites.

**Use it for:** Physical products, launches and iconic brands where the name already means something.

**Avoid it for:** Unknown products: if the name says nothing, the visitor learns nothing.

**Recipe:** The product or brand name alone is the headline, 56-80px, weight 500-600, tight tracking, centred, no verb. Beneath it a five or six word promise at 21-28px weight 400, roughly 2:1 with the name. A short status word can replace the promise. Let the object fill the frame.

<a id="poster-anchored"></a>

### Section headings: tracked-caps-heading (seen on 1 Hotels, HAY, Xin Cheng Foods)

Engraved, hotel-like, quietly formal. Seen on 6 sites.

**Use it for:** Hospitality, retail, heritage and galleries.

**Avoid it for:** Long titles, and lowercase. Positive tracking belongs to capitals only.

**Recipe:** Modest heading in caps at 20-40px, tracking +0.04 to +0.1em, weight 400-600, in ink or a deep brand colour, left or centred. Reads as engraved, not shouted. Pair with a text link on the same baseline. Keep it under 30 characters.

<a id="emblem-opener"></a>

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: photo-overlay-tile (seen on Stone Island, reMarkable, Dalco)

*Feeling: a magazine feature.*

A full-bleed photo with text on it. Radius 0 to 12, gaps 12 to 24. Put scrim only where the text sits: a bottom gradient to 50 or 60 percent black, or a side wash. The best version takes its scrim from the image, as DJI does by fading each photo's sky upward into a flat field drawn from that sky, so the text gets a clean ground that looks native. Use it for commerce, culture and anything with real photography. Never lay a uniform dark overlay across a whole photo, since that flattens the picture to protect three words.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

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

### Page rhythm: full-width-small-gutter (seen on Nicole Heim Studio, Stone Island, Vercel AI SDK)

**Feel.** Modern, confident, slightly editorial. The page uses the whole screen.
**Use when** you have enough content to fill a wide canvas: product grids, photo work, fashion, devtools. **Avoid** with long text, which then needs its own measure, and with sparse pages.
**Recipe.** No centred max-width. 24px side gutters at 1440 (Vercel), 32px (Nicole Heim), 22px (Stone Island), 15px (X8). Content runs about 1392px. Four-up at 354 pitch and two-up at 712 snap to the same edges as logo and footer, so the left edge is one unbroken line. Item gutters 12 to 24px. Stone Island's detail is worth stealing: 12px gutters, three 457px columns, and buttons in a later section hanging on the third column's x.

### Load: mark-performs (seen on Wildbran, Structure Consulting Engineers, Locomotive)

*Feeling: only this brand would do this.*

The logo does something specific. Michelle Kaye's monogram writes itself from a single dot over about 3s. Overtime's clock hands sweep to the real time before any UI appears. Wildbran walks a giraffe across the screen, then wipes to the film within 2.5s. Use it only with an owned mark that has a reason to move. A generic spinning logo is the cheapest thing on this list. Pick the behaviour from what the brand is: a clock tells time, a signature is signed.

### Scroll: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Hover: underline-language (seen on Buildkite, Fidèle, Strava)

*Feeling: the oldest signal on the web.*

Links answer with an underline. HAY, Monocle and GitHub Docs do little else. Accel draws one with `scaleX(0)` to 1 in 0.3s. Use it for reading pages and for any link in running text, where colour alone fails people who cannot see the difference. The drawn version enters from the left and leaves to the right, and that directional exit is what makes it feel made.

```css
.link{position:relative}
.link::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:1px;background:currentColor;
  transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(0,0,.2,1)}
.link:hover::after{transform:scaleX(1);transform-origin:left}
```

### Phone menu: search-first-sheet (seen on Apple Vision Pro, Bun, Affirm)

*Feeling: tell me what you want.*

Search leads the sheet. Apple opens a large field with Quick Links and arrows, fading the page out behind it. Bun drops a white panel with an input and mono tabs for docs, guides and reference, and dims the page to about half. Affirm opens a glass panel with store logos drifting behind it. Use it for stores, docs and large catalogues. Autofocus the field only when the user opened search on purpose, because the phone keyboard covers half of the screen.

### Showpiece: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Showpiece: hero-retreats (seen on Apple Vision Pro, X8 Eyewear)

*Feeling: the opening becomes the backdrop.*

The hero does not leave. Apple Vision Pro pins it, blurs it about 40px and washes it to near white, with three centred paragraphs of 48/52 over it. X8 scales its product down to about 30 percent while a video panel lifts. It links the first chapter to the second instead of cutting. Use it where the hero image is a strong atmosphere and the next section is text. Blur a pre-blurred copy if you can, since animating a large blur is heavy.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.