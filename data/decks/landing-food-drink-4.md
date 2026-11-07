# Your direction (seed 1020)

Reads as **food-drink**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from La Table de Joakim, a gold food-drink page)

1. Navigation: `nav.top-bar/chromeless-type-row`
2. Hero: `hero.full-bleed-media/giant-type-over-image`
3. Feature alternating: `section.feature-alternating/viewport-chapters`
4. Faq: `section.faq/big-type-rows`
5. Newsletter: `section.newsletter/underline-only-field`
6. Menu or catalog: `section.menu-or-catalog/plate-photo-grid`
7. Blog index: `section.blog-index/flush-story-row`
8. Contact form: `section.contact-form/underline-field-form`
9. Gallery portfolio: `section.gallery-portfolio/peek-rail`
10. Closing section: `section.cta-band/tone-panel-close`
11. Footer: `section.footer/grid-locked-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**IM Fell French Canon** with **Courier Prime**. Rough 17th-century printing beside a screenplay typewriter, three centuries of ink in one column.
- Display: 64px, phone 38px, weight 400, tracking -0.005em, leading 1.08. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Courier Prime 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon:ital,wght@0,400;1,400&display=swap https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap

## Palette

From Apple Vision Pro: bg #ffffff, surface #f5f5f7, text #1d1d1f, muted #717175, accent #0071e3. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `colour-plate-then-media`, **Scroll** `pinned-photo-dissolve`, **Hover** `full-invert`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**La Table de Joakim** (food-drink, gold) https://latabledejoakim.fr/
- Doing: A private-chef catering site where full-screen colour fields, one dish photo per screen and mono caps copy make a quiet menu-card rhythm.
- Why it feels made: Each screen is one idea with generous empty space; the tonal fields (mocha, powder blue, cream) are pulled from the food; serif/mono pairing and a handwritten signature feel owned.
- If imitated badly: Mono caps body is hard to read long-form and the pale text on blue is low contrast.

**Apple Vision Pro** (brand, gold) https://www.apple.com/apple-vision-pro
- Doing: A product story told as a long film: a studio portrait, then full-bleed video scenes separated by white pauses and short headlines.
- Why it feels made: Almost nothing but media, one type family and two radii, with the photography fading into the page so nothing has a hard edge. Spacing and the sticky product bar keep a 32,700px page legible.
- If imitated badly: The layout depends entirely on cinema-grade footage; with stock video or weak copy it is just big rectangles and grey text.

**Soundsensing** (saas, gold) https://www.soundsensing.com/
- Doing: Makes industrial HVAC sensing feel premium by pairing grainy macro photography of real equipment with sparse frosted status UI and a cool sage palette.
- Why it feels made: Real installed hardware replaces stock imagery, and a sage-to-stone colour pair runs through type, cards and buttons. Small 4-8px radii, equal-weight buttons and sentence headings keep it sober.
- If imitated badly: Without the macro photo and film grain, the small radii and muted sage become a plain corporate template.

## System choices

- Frames: `media.photography/cutout-on-flat`
- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/eyebrow-title-lede-stack`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.card/media-over-tinted-body`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/clay-render-icons`
- Page rhythm: `layout.grid-system/edge-to-edge-ledger`
- Load: `motion.load-sequence/colour-plate-then-media`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `motion.hover-state/full-invert`
- Phone menu: `nav.mobile-menu/search-first-sheet`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-card-deck`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: chromeless-type-row (seen on Block, Gagosian, 1X)

*Feeling: the header is just a line of type.*

No bar at all, only text sitting on the page. Block sets ten centred uppercase links with no logo, no button, no border. 1X runs six muted caps links at 11px and +0.08em. Gagosian uses serif text in light grey with the wordmark in black. Evenark takes it to display scale, a 44px light comma-separated sentence that is both headline and nav. Use it for fashion, culture and confident brands. Avoid it when the first screen needs a conversion, or when the page is a busy image with no scrim.

Set 11 to 14px, caps tracked about .08em or plain sentence case, 35 to 56px gaps. On photographs, lay a 90px top gradient behind it, from black at 25 percent to nothing, as Figure does. The display version needs nothing else on the row.

### Hero: giant-type-over-image (seen on A24, Acne Studios, Royal Ontario Museum)

- **Feels:** A poster. The name is the event.
- **Use when:** Culture, film, fashion, and model launches with a short strong word or two.
- **Not when:** The headline must explain something, or it runs past about four words.
- **Recipe:** Set the size from the viewport at 15 to 20vw, line-height 0.8, tracking -0.05em, weight 400 to 500. Anchor to the base, letting letters touch or cross the margins. Two-line titles offset left and right. Everything else is tiny: a 12px uppercase nav and one 32px outlined action. Checked against the frame, A24's ticket button is not in the top right as the analyst noted. It hangs mid-right, just above the second line. Reformation lets a heavy wordmark clip 2px off the viewport edge. ROM's wordmark echoes banners already hanging in the photograph, which ties the type into the scene. Rivian uses a 200px model name with -5px tracking.

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

### Feature alternating: viewport-chapters (seen on La Table de Joakim, SpaceX, Design Museum)

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

### Faq: big-type-rows (seen on Rabbit, Telkom-OT, Lyra)

*Feeling: the questions are the content.*

Questions as large as section headings. Rabbit sets 32px light lowercase on 81px rows with 32px orange discs, and hover washes the row. Telkom-OT runs 40px on 114px rows, with hover and open filling the row in full accent. Lyra and Wealthfront set 30px. CockroachDB uses tall 132px rows with a 20px question for a monumental feel. It suits short lists on bold pages. Over ten questions it is exhausting.

### Newsletter: underline-only-field (seen on 1X, TR Studio, 1 Hotels)

*Feeling: a line on a page.*

The field is one rule, with the action as text on the same line. It sits lightly on photos and dark blocks. 1X runs 360px right-aligned over a film with 12px text and a 1.5px line. TR Studio centres a 528px field in a flat oxblood block with uppercase placeholder and submit at each end of the rule. Reformation abuts a black square button. Keep placeholder contrast high on images, and thicken the rule on focus, since there is no box to change.

```css
.block{background:var(--ink);color:var(--bg);padding:48px 120px 56px;text-align:center}
.block p{font:500 26px/1.25 var(--font-display)}
form{display:flex;align-items:baseline;gap:16px;margin-top:20px;border-bottom:1px solid currentColor;padding-bottom:6px;text-align:left;transition:box-shadow .15s}
form:focus-within{box-shadow:0 1px 0 currentColor}
input{flex:1;min-width:0;border:0;outline:0;background:none;color:inherit;padding:4px 0;font-size:12px;letter-spacing:.04em;text-transform:uppercase}
input::placeholder{color:color-mix(in srgb,currentColor 72%,transparent)}
button{border:0;background:none;color:inherit;padding:0;font-size:12px;font-weight:500;letter-spacing:.06em;cursor:pointer}
@media(max-width:700px){.block{padding:40px 24px}}
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

### Blog index: flush-story-row (seen on Work & Co, Meta AI, Studio Dado)

*Feeling: a small, well-set update.*

No card at all. Work & Co sets a 2×2 of 340 by 191 tiles in a 700px column with square corners, a 20/500 title about 22px below, and one serif sentence ending in a red link. Meta AI runs four items on a 352px pitch, each an 80px thumbnail at radius 20 to the left of a 16/24 title and a 12px caps date, between full-bleed hairlines. Vitsoe sets four 238px columns and lets heights vary. Nuro sets 320px squares at radius 32. Use it as a small news section on a homepage, three or four items, ending in a link to everything. Avoid it as a full archive, because it has no way to hold fifty posts.

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

### Gallery portfolio: peek-rail (seen on Apple Vision Pro, Aman, La Table de Joakim)

*Feeling: there is more, just past the edge.*

Left-aligned to the page grid and running off the right edge, with the next tile cut by the viewport. Apple's rail uses 818 by 528 tiles at radius 20, a 20px gap, a 21px caption below and 36px round arrows right-aligned beneath. Aman uses square destination cards with an underlined link. Loopcraft uses 375 by 560 cards at radius 40. The cut tile is the affordance, so never let tiles end flush with the viewport. Use native horizontal scrolling with `scroll-snap`, which gives touch for free, and add arrows only as an extra. On phones the arrows can go.

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

### Footer: grid-locked-footer (seen on Zed Pricing, Zed Blog, La Table de Joakim)

*Feeling: the page was drawn in one go.*

The footer keeps the page's own grid. Stripe runs its dashed column guides straight through. Zed keeps the rails of the page, changes only the ground to a blue field, splits the columns with 15 percent white verticals, and sets 14px mono links that are always underlined on a 32px pitch. Paddle fills the top of the footer with three ruled cells of copy, and Oatly goes furthest, making the footer a literal table of 52px cells with every link centred in a box.

Use it when the page already has visible structure: rails, a dotted ground, a ruled grid. It is a poor choice on a page with no lines, where it arrives from nowhere. The line must continue from above and reach both edges, because a stopped line reads as a mistake.

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

### Frames: cutout-on-flat (seen on Apple, Framework, Apple Vision Pro)

*Feeling: clean, confident, retail-grade.*

**Use:** Product ranges, colourways, parts, and a recurring cut-out figure as a small signature. **Avoid:** Soft or hair-edged subjects without a clean mask. A rough cut-out is worse than a rectangle.

Set the object straight on the tile colour with no floor. Group colourways so they overlap: five units across, the group filling about 90% of tile width. Use one soft contact shadow, offset slightly away from the key light. Knolled parts laid in a grid or flat-lay work the same way. For a person, use a transparent cut-out about 80px tall and let it perch on interface edges, changing pose per section. Rotation of -12 to +15 degrees suits snacks and packs with a little parallax. Portraits work the same way: cut people out, stand them on one pale panel, and fix the head height. Thrivent runs five waist-up cut-outs on alternating pale blue and tan panels at radius about 16, with a larger centre panel and heads breaking above the panel tops, which adds life to a strict row. Motusmade sets one on a pale blue panel.

Frame.work was tagged as a 3D render, but the frames show photographed parts, so it is counted here.

### Headline: quiet-serif-over-sans-ui (seen on Public, Exa, Linear Method)

Written rather than marketed. Warmth on a technical subject. Seen on 23 sites.

**Use it for:** AI, finance, docs and any technical product that wants to sound human. The serif is the only warm thing on the page, so it carries all of the voice.

**Avoid it for:** Pages where the serif also appears in nav, buttons or body, which turns voice into costume. Bold cuts also lose the effect.

**Recipe:** One serif used only for H1 and H2, weight 300-500, 44-80px (up to 128px on dark manifesto pages), line-height 1.0-1.1, tracking 0 to -0.03em, single ink, never bold. All UI, labels and body stay sans or mono, so the serif alone carries the voice.

**Why it works:** The contrast is the point: a serif headline over grotesque interface looks like an editor wrote it and an engineer built it. The largest bucket of gold serif sites use it this way, with 11 gold sites.

```css
h1 { font: 400 64px/1.1 var(--font-display); letter-spacing: -.02em; }
p  { margin: 20px auto 0; font: 400 18px/1.5 var(--font-text); max-width: 34em; color: var(--ink-2); }
```

<a id="roman-italic-turn"></a>

### Section headings: eyebrow-title-lede-stack (seen on Apple Intelligence, Stripe Atlas, AuthKit)

Orderly and document-like. Safe when applied exactly. Seen on 13 sites.

**Use it for:** Long product pages and docs where consistency matters more than voice.

**Avoid it for:** Used loosely it is the template stack. Gaps must be identical on every section.

**Recipe:** Left or centred stack repeated identically on every section: label at 12-20px, H2 at 36-52px weight 500-600, lede at 18-21px line-height 1.4-1.55 in the second ink, capped at 640-840px. Gaps 8-24px. Keep the three steps in one family, or two at most.

**Why it works:** Stripe-style pages make the eyebrow the same size as body copy, so it reads as the first line of the heading and the whole stack looks like one document.

```css
.eb { font: 500 18px/1.3 var(--font-text); color: var(--accent); }
h2  { font: 500 38px/1.26 var(--font-display); letter-spacing: -.005em; margin-top: 24px; }
p   { font: 400 18px/28px var(--font-text); margin-top: 24px; max-width: 680px; color: var(--ink-2); }
```

<a id="bare-statement"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: media-over-tinted-body (seen on Stripe Climate, Nurx, Therabody)

*Feeling: a printed postcard.*

Image or colour band on top, tinted body beneath, in a colour taken from the brand or the image. Radius 12 to 24, gap 20. Use it for health, consumer and education carousels, and let the row bleed off the edge with the next card peeking. Stripe's Climate version clips the photo's bottom edge at about -6 degrees, which carries the hero's diagonal down the page.

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

### Page rhythm: edge-to-edge-ledger (seen on Vite, CSDG Development Group, Driftime Impact Report 2022)

**Feel.** A table the size of the screen. Blunt and confident.
**Use when** content falls naturally into facts, numbers and links. **Avoid** with few items, because empty cells then look unfinished.
**Recipe.** No side margin. 1px rules run viewport edge to edge, and the page splits at 720, then 360. Each cell holds one thing: a number, a claim or a link. Radius 0. Images span 2x2 cells with about 29px inset, or bleed to the rules. On Driftime the rules take the room's ink colour and start and stop with their section, like a newspaper grid.

### Load: colour-plate-then-media (seen on ECI, Prägen Hätlen, Scale AI)

*Feeling: designed before it has even loaded.*

A flat plate in the footage's own colour holds the hero, with type already on it. ECI's plate is a deep green exactly the size of the video, and at 1.9s it still reads as a finished poster. The footage arrives near 3s and nothing moves. The analyst's estimate of 1.5s was optimistic. That is the point of the pattern: it does not matter when the video lands. Sample the plate from the first frame of the media, because a mismatched plate flashes. Use it for any full-bleed film or photo. For repeat variants, a blurred thumbnail of the first frame works as the plate.

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

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

### Hover: full-invert (seen on Customer.io, Structure Consulting Engineers, Factory)

*Feeling: binary, flat, sure.*

Fill and label swap, and outlined buttons fill. Structure Engineering swaps black and white with no greys, on cards too. Factory's primary and secondary reverse into each other. Function Health inverts a cream pill to terracotta. Use it for mono or two-colour systems, where a third tone would break the logic. Keep it to 0.15 to 0.3s and animate colour, background and border together.

### Phone menu: search-first-sheet (seen on Apple Vision Pro, Bun, Affirm)

*Feeling: tell me what you want.*

Search leads the sheet. Apple opens a large field with Quick Links and arrows, fading the page out behind it. Bun drops a white panel with an input and mono tabs for docs, guides and reference, and dims the page to about half. Affirm opens a glass panel with store logos drifting behind it. Use it for stores, docs and large catalogues. Autofocus the field only when the user opened search on purpose, because the phone keyboard covers half of the screen.

### Showpiece: sticky-card-deck (seen on Affirm, Theatre Memory, Per Appelgren)

*Feeling: cards dealt onto a table.*

Each card pins under a heading, and the next slides over it. On Affirm each one sits about 50px lower than the last and widens (1138, 1260, 1320), which gives depth with no shadow, and the top edge of each covered card stays visible with its tag. Use it for three to five parallel ideas: plans, personas, industries. Do not use it for a sequence with an order, which belongs in a step swap. Make's narrower card peeks below the active one, a variation. Plain sticky, no scroll listeners.

```css
.deck{position:relative;padding-bottom:30vh}
.head{position:sticky;top:0;z-index:9;height:128px;background:var(--bg);display:grid;place-items:center}
.card{position:sticky;top:calc(128px + var(--i)*50px);
  width:min(calc(1040px + var(--i)*90px),calc(100% - 32px));margin:0 auto 12vh;height:560px;padding:40px;
  border:1px solid var(--line);border-radius:20px;
  background:color-mix(in srgb,var(--surface) 84%,transparent);backdrop-filter:blur(22px)}
```

The analyst read a blur on the covered card's copy. The blur belongs to the incoming card: a translucent fill with `backdrop-filter`, so covered text softens exactly where it passes under, with no script at all. My first build toggled a blur class on scroll, and it was both more code and less convincing. Any ancestor with `overflow:hidden` silently kills sticky, so check that first if a card will not pin. On a phone, cut the offset to about 24px.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.