# Your direction (seed 1028)

Reads as **health**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Hims, a gold health page)

1. Navigation: `nav.top-bar/left-cluster-bar`
2. Hero: `hero.collage/routing-tiles`
3. Product card: `commerce.product-card/bare-product-no-card`
4. Feature grid: `section.feature-grid/routing-link-tiles`
5. Feature alternating: `section.feature-alternating/viewport-chapters`
6. Steps process: `section.steps-process/drawn-path-or-diagram`
7. Team: `section.team/founder-bio-split`
8. Feature tabs: `section.feature-tabs/typographic-index`
9. Newsletter: `section.newsletter/inset-button-field`
10. Closing section: `section.cta-band/split-plain-close`
11. Footer: `section.footer/giant-wordmark-finish`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Rozha One** with **Hanken Grotesk**. The best heavy didone, set huge and short, with a quiet neutral so it stays glamorous and not gaudy.
- Display: 64px, phone 38px, weight 400, tracking -0.012em, leading 1.02. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hanken Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Rozha+One&display=swap https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Hims: bg #ffffff, surface #f5f0e8, text #1f1f1f, muted #595959, accent #fec671. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `line-or-word-rise`, **Scroll** `pinned-photo-dissolve`, **Hover** `directional-fill-wipe`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Hims** (health, gold) https://hims.com
- Doing: A telehealth store built as a stack of full-bleed rounded colour rooms, each tinted from its product photography, with the nav recolouring to match.
- Why it feels made: Colour comes out of the photography instead of a fixed brand palette, so each room feels art-directed, while a tiny kit of 24px cards, 48px pills and two-tone headlines holds the variety together.
- If imitated badly: Stock photos or section colours not sampled from the image break it instantly, and tone-on-tone cards turn into muddy brown boxes without real art direction.

**Ritual** (health, silver) https://ritual.com
- Doing: A vitamin brand that makes supply-chain evidence feel joyful through one navy ink, one yellow and very close human photography.
- Why it feels made: Navy replaces black everywhere and the capsule-on-yellow product tile is instantly ownable. The serif italic insert gives warmth, though sale banners and busy strips keep it from gold.
- If imitated badly: Saturated yellow beside skin tones goes loud fast, so it needs white space and art direction to hold.

**ECI** (ai, gold) https://www.eci.io/
- Doing: A climate-AI endowment that pairs a tightly tracked deck serif with rounded frames of Earth footage and a numbered, almost archival nav.
- Why it feels made: Serif, grotesk and mono each have one job, greens come from a tight three-step ramp, and every section repeats the same 32px gutters, 20px frames and black rule.
- If imitated badly: The tracked-in serif turns fussy below ~50px, and stock nature imagery without this restraint falls straight into greenwashing cliché.

## System choices

- Frames: `media.photography/scrimless-campaign-plate`
- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/scroll-held-heading`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.card/photo-overlay-tile`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/mark-as-image-system`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/line-or-word-rise`
- Scroll: `motion.scroll-pin-or-scrub/pinned-photo-dissolve`
- Hover: `button.hover-response/directional-fill-wipe`
- Phone menu: `mobile.phone-nav/floating-card-bar`
- Showpiece: `motion.marquee/live-data-ticker`
- Showpiece: `motion.marquee/ticker-band-divider`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: left-cluster-bar (seen on Polar, Devin, Render)

*Feeling: a tool you already know how to use.*

The modern product default: logo, links grouped beside it, actions pushed right. It works because the eye reads logo and routes as one line, and the action sits alone at the far end with nothing competing. Use it whenever you have no reason to do otherwise. Do not use it when you are trying to look unlike software.

Set 64 to 68px tall, 14 to 16px links at 400 to 500, 36px link items with 12px padding and a 4px gap, then the actions at the far right on the page rail. Attio measures 68px, 15px at 500 with -0.01em tracking, 36px buttons at radius 10 and a 28px gutter. Vercel runs quieter: 64px, 14px at 400 in grey, 32px buttons at radius 6, and a hairline that appears only once scrolled. Polar drops the rule altogether and leans on tone alone, current link in full ink and the rest at about 50 percent.

```html
<header class="nav"><div class="nav-in">
  <a class="logo" href="/">Name</a>
  <nav class="links" aria-label="Main">
    <button data-menu="platform" aria-expanded="false">Platform <svg viewBox="0 0 10 10"><path d="M2 3.5 5 6.5 8 3.5"/></svg></button>
    <a href="/pricing">Pricing</a>
  </nav>
  <div class="actions"><a class="btn ghost" href="/login">Sign in</a><a class="btn solid" href="/start">Start for free</a></div>
</div></header>
```

```css
.nav{position:sticky;top:0;z-index:50;height:68px;background:var(--bg);box-shadow:inset 0 -1px 0 var(--line)}
.nav-in{height:100%;padding:0 var(--rail);display:flex;align-items:center;gap:36px}
.links{display:flex;gap:4px;margin-right:auto}
.links>*{display:flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:8px;font-size:15px;font-weight:500;
  letter-spacing:-.01em;transition:background .16s ease}
.links>*:hover{background:var(--well)}
.links svg{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.25;color:var(--ink-2);transition:transform .2s ease}
[aria-expanded=true] svg{transform:rotate(180deg)}
.actions{display:flex;gap:8px}
.btn{display:inline-flex;align-items:center;height:36px;padding:0 12px;border-radius:10px;font-size:14px;font-weight:500;
  transition:background .16s ease}
.ghost{box-shadow:inset 0 0 0 1px var(--line-strong)}.ghost:hover{background:var(--well)}
.solid{background:var(--solid);color:var(--bg);box-shadow:var(--solid-edge)}
.solid:hover{background:color-mix(in srgb,var(--ink) 82%,var(--bg))}
@media(max-width:860px){.links,.ghost{display:none}.nav-in{justify-content:space-between;padding:0 16px}}
```

### Hero: routing-tiles (seen on Hims, Fora, Fellow)

- **Feels:** A front door. Choose your path.
- **Use when:** Several real products or audiences, for health, retail and institutions.
- **Not when:** There is one product. Tiles then invent choices.
- **Recipe:** Headline about 56px, with a second ink on the last words, set high with no sub. Under it a tight mosaic of real destinations: two 678 by 199 photo tiles, then four 337 by 100 rows, radius 24, gaps only 4px. Each tile is a link with a two-tone label, a product image at the right and a chevron at the edge. Then a large promo band rises at the fold. Fora uses a full-viewport 3 by 2 grid of 432, 432 and 576px columns, no gaps, no radius, with logotype, a rotating word, a portrait, news and a still life.

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

### Product card: bare-product-no-card (seen on Apple Intelligence, Fenriz Gym, Olipop)

*Feeling: the object is the design.*

A render stands directly on the page. Olipop puts cans 300px tall on cream, with a small fibre spec, a bold name, and a scalloped sticker on the shoulder. Apple runs them on fog with a clipped fourth column. Cascara rotates two cans at about -15 and 60 degrees, and the rotation is the whole personality. Use it for packaged goods with beautiful renders. Avoid it for photographs with a background.

### Feature grid: routing-link-tiles (seen on ECI, Headspace, Khan Academy)

*8 sites, quality 4.* A concierge. It sorts visitors by need, not by feature. Use high on a page with several audiences, or for shops and health services with many entry points.

Recipe: short wide tiles, about 434 by 78 or 440 by 91, 8 to 20px gaps. A 24px label left, a small illustration or product cutout and chevron right. Whole tile links. Hover darkens the fill by one step. A single question sits above them. Khan Academy uses 66px outlined pills with a geometric icon per subject; ECI uses large mint tiles with a label at the bottom left and the top two-thirds left empty.

Seen on Headspace, Therabody, Ro, Khan Academy, ECI. Suits photo-led, illustrated, warm neutral.

### Feature alternating: viewport-chapters (seen on La Table de Joakim, SpaceX, Design Museum)

*5 sites, quality 4.* Cinema. Each section is a full screen and a single statement. Use for hardware, culture, and brands with extraordinary imagery. Skip it if you have fewer than three strong images.

Recipe: consecutive sections of about 100vh with no dividers. A text block of about 430px sits in the empty part of each photo at a 100px margin, so it moves per shot. A 48px heading, three lines of 16px, one ghost button. Cash App uses flat white and black scenes around one object. La Table de Joakim uses flat colour fields with a small portrait in the centre.

Seen on SpaceX, Design Museum, Cash App, La Table de Joakim, KR8. Suits photo-led and bold colour.

### Steps process: drawn-path-or-diagram (seen on New Material, Hims, Brand Identity School)

*6 sites, quality 4.* The route becomes the picture. Use when your process has a shape, and you have an illustrator or a strong diagram. The Brand Identity School draws a sine path over illustrated hills that fills as you scroll, with mascots moving along it. Rewiring America seats five role cards on a thick ring. New Material runs light along an open outline. Hims stacks perspective slabs behind an athlete cutout. See `references/motion/scroll.md`, recipe 9.

Seen on New Material, Hims, Brand Identity School, Rewiring America, Cascara Cabinet.

### Team: founder-bio-split (seen on Nicole Heim Studio, Airz Fitness, D Alexander CPA)

*Feeling: this person will pick up the phone.*

One named person as the pitch. It is the best proof a small business has. Nicole Heim splits the page 50/50: a 676 by 1000 greyscale portrait cropped to the waist, beside a bio at 63/68 in the page's display serif, with a link pinned to the photo's base. Energen Digital sets a portrait with an 8px coloured offset on an ink band and a 56px greeting. motusmade uses a cut-out on flat sky blue. Convex gives two founders an 80px portrait and bios listing what they built before, on dark, which is exactly the right proof for an infrastructure buyer. Airz butts a 680 by 580 photo against a dark text panel with no gap.

Write in the first or close third person, with specifics. Crop to the waist: my first portrait was a tight face at 676 by 1000, and it read like a passport. The original has a hand, a shirt and a wall, so a person in a place.

```css
.lab{display:block;font:500 14px/1 var(--font-text);padding-bottom:12px;border-bottom:1.5px solid var(--ink);margin-bottom:40px}
.s{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.s img{width:100%;height:1000px;object-fit:cover;filter:grayscale(1)}
.t{display:flex;flex-direction:column;justify-content:space-between;font:400 63px/68px var(--font-display);letter-spacing:-.02em}
.t p+p{margin-top:40px}.t a{font:500 14px/1 var(--font-text)}     /* pinned to the photo's base */
@media(max-width:900px){.s{grid-template-columns:1fr}.s img{height:auto;aspect-ratio:4/5}.t{font-size:32px;line-height:37px;gap:32px}}
```

### Feature tabs: typographic-index (seen on Baseten, Decagon, North Hub Partners)

*9 sites, quality 4.* The list is the design. Dramatic and confident. Use for services, channels and products where the names are good. Fits agencies and bold brands.

Recipe: a stack of very large names, 28 to 100px, on 1px rules or on none. Active full ink, others about 25 to 55%. A small preview photo or card swaps beside the list. Decagon stacks 60px channels with a photo that swaps under a rising tint. North Hub uses 36px serif rows at 146px pitch, and a progress line fills the rule. Nurx uses 16px mono caps on 51px rows in a tinted panel. Athletics scatters chips over 100px names.

Seen on Decagon, Baseten, North Hub, Nurx, Studio Unlmtd, Athletics, Figma FigJam. Suits photo-led, type-led, bold colour.

### Newsletter: inset-button-field (seen on Nuro, Greylock, Figure)

*Feeling: one tidy object.*

The button sits inside the field, so the two read as one control. Nurx runs a 400 by 50 white pill with a 42px black pill inset 4px. Nuro uses a 410 by 58 outlined capsule. Greylock insets a 40px khaki button 6px inside a square outline. Sweetgreen drops the button and seats an arrow at the far right of a 640px field. Get the arithmetic right, because a pill with an uneven inset is the fault everyone notices.

```css
.band{padding:112px 24px 104px;text-align:center}
.band h2{font:600 32px/1.2 var(--font-display);letter-spacing:-.015em}
/* button height = field height - 2 x inset. Outer radius - inset = inner radius, so the curves stay parallel.
   The field reverses the page and the button takes the page's colour, so this holds on light and dark grounds */
form{display:flex;align-items:center;width:min(400px,100%);height:50px;margin:32px auto 0;padding:4px 4px 4px 20px;background:var(--ink);border-radius:25px;transition:box-shadow .15s}
form:focus-within{box-shadow:0 0 0 2px var(--bg),0 0 0 4px var(--ink)}
input{flex:1;min-width:0;border:0;outline:0;background:none;color:var(--bg);font-size:16px}
input::placeholder{color:color-mix(in srgb,var(--bg) 60%,var(--ink))}
button{flex:none;height:42px;padding:0 22px;border:0;border-radius:21px;background:var(--bg);color:var(--ink);font-size:14px;font-weight:500;cursor:pointer}
.legal{font-size:12px;color:var(--ink-2);margin:16px auto 0;max-width:36em}
```

### Closing section: split-plain-close (seen on Vercel Pricing, Stripe Billing, Amplitude)

*Feeling: adult, unhurried.*

No fill, and the text splits across the grid. Amplitude sets a 56/62 heading at left and a sentence with a 48px pill at right. Vercel closes a very long page with a one-line question at left and two pills at right. Stripe Billing adds a small pricing aside, and LiveKit stays left-aligned with a "no card" note. Plausible runs a tight two-tone pair after live data, which is a good place for it. Choose it when the page has been left-aligned throughout.

### Footer: giant-wordmark-finish (seen on Amplitude, Baseten, Wildbran)

*Feeling: the name, signed large.*

Links on top, then the wordmark at full container width as the last thing on the page, in full contrast. Amplitude and Baseten both do this on pure black. Baseten frames it between hairlines and gives each column a small filled label bar. Monzo sets a coral wordmark inside an inset panel. Discord fades it into a gradient. Use it when the name is short and well drawn. It became common quickly, so give it something of its own: a label bar, a colour, a crop, a mascot in the C as on Canary.

Word length sets height. Baseten's seven letters stand about 280px tall across 1368px, and my six narrower letters stood about 370px. Check that the legal row still fits on a laptop.

Use the logo's SVG with a viewBox trimmed to the ink. If all you have is a font, size from ink bounds as below. Advance width is not enough, because at this scale a side bearing is 20px or more, and the word will visibly miss the margin.

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

### Frames: scrimless-campaign-plate (seen on 1X, A24, Tana)

*Feeling: assured. The picture was composed to hold the words.*

**Use:** Hero and closing bands where you control the shoot or can choose frames with real negative space. **Avoid:** When the photograph has no calm dark zone. Do not add a gradient to manufacture one: choose another frame or put the type beside the image.

Run the image edge to edge, or in a panel of radius 20 to 32px. Compose the subject to one side, for example cars stacked right at about 60% of the width, and leave the open ground for copy at the page gutter. White type sits straight on the photograph with no box. Polestar and 1X split the title into full white and a muted second phrase, and Joby adds a short white rule beside its copy, so the block has structure without a panel. Use the `zone()` check below on the exact crop. Keep spread at or under 0.04. Keep contrast at 7 or more for body text, and 3.5 or more only for display type of 30px and up. A head may break the top edge, which adds scale.

```js
// Run on the exact crop you ship. Returns white-text contrast at the zone's bright end, and its calmness.
function zone(img, x, y, w, h) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.drawImage(img, -x, -y);
  const d = g.getImageData(0, 0, w, h).data, L = [];
  const f = v => (v /= 255) <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4;
  for (let i = 0; i < d.length; i += 4) L.push(.2126 * f(d[i]) + .7152 * f(d[i+1]) + .0722 * f(d[i+2]));
  L.sort((a, b) => a - b);
  const m = L.reduce((a, b) => a + b) / L.length;
  const std = Math.sqrt(L.reduce((a, b) => a + (b - m) ** 2, 0) / L.length);
  const p95 = L[L.length * .95 | 0];
  return { contrast: 1.05 / (p95 + .05), std };
}
```

**In the lab:** Rendered twice. Over lit water the block failed at contrast 2.0, spread 0.145. Over a dark sky it passed at 15.6, spread 0.005. Real frames measured Polestar 8.1 and 0.010, Joby 18.6 and 0.006, N26 8.8 and 0.021, Tana 6.7 and 0.029, and for large type only, 1X 3.6 and 0.038, ECI 3.9 and 0.042. Joby also shows the failure: its white caption stays pinned while frames change, and over the pale wing frame it loses most of its contrast. Pinned copy needs every frame to keep that corner dark.

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

### Section headings: scroll-held-heading (seen on Apple Vision Pro, Affirm, i-D RED)

Cinematic. The heading is part of the sequence. Seen on 3 sites.

**Use it for:** Long pinned sequences and film-led product pages.

**Avoid it for:** Short pages. It must read at every scroll position.

**Recipe:** The heading is tied to scroll: pinned about 90px below the nav at 48px weight 300 while content moves beneath it, or rising into place over footage as a clip settles, at about 80/84 weight 700. One short phrase, legible at every scroll position.

<a id="two-voice-heading-system"></a>

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

### Icons: duotone-solid-glyphs (seen on Stripe Atlas, Stripe Connect, Stripe Payments)

*Feeling: polished and engineered. A family drawn for this product.*

**Use:** Feature grids on fintech and platform pages, at about 40px, where icons head short text columns. **Avoid:** Small sizes under 24px, where the overlap turns to mud. Do not fake it by recolouring a line icon.

Build each icon from two or three overlapping solid shapes in one colour family, with no strokes. A light tint, the accent, and a deep shade. Let shapes overlap, so the overlap itself draws the form. Set at 40px with no tile, aligned to the column's left edge, 12px above a 14px bold title. Draw the family from the hero's colours, so the page holds one ramp.

```html
<!-- Overlapping tones from one ramp, no stroke. Three tones is the ceiling. -->
<svg class="duo" viewBox="0 0 40 40" aria-hidden="true">
  <rect x="4" y="16" width="9" height="20" rx="1.5" fill="var(--a)"/>
  <rect x="16" y="10" width="9" height="26" rx="1.5" fill="var(--b)"/>
  <rect x="28" y="4" width="9" height="32" rx="1.5" fill="var(--c)"/>
</svg>
```
```css
.duo { --a: color-mix(in srgb, var(--accent) 45%, #fff); --b: var(--accent);
       --c: color-mix(in srgb, var(--accent) 45%, #000); width: 40px; height: 40px; }
```

**In the lab:** Eight glyphs on one ramp read as the Stripe family at a glance. In an A/B, a 1.5px outline turned them to clip art, and a separate hue per icon broke the family.

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

### Load: line-or-word-rise (seen on Auth0, 360Rides, North Hub Partners)

*Feeling: quiet confidence.*

The legitimate fade-up. Words or lines rise 6 to 12px with a short stagger, while the controls around them are already in place. Auth0 rises its words about 6px on flat violet, then the gradient blooms once they have landed. Sierra runs three lines about 0.5s apart over a playing film. Use it on headlines you want to feel placed. For a masked rise, take `load.md` Line mask. Stay under 12px, and never apply it to more than the hero.

### Scroll: pinned-photo-dissolve (seen on Joby, ECI, Dishoom)

*Feeling: a slow film.*

One frame holds and pictures cross-dissolve at the same framing. Joby does this with a small caption block at bottom left, marked by a 1px rule. Lyra holds a list inside white masks at top and bottom, with a 0.5s photo crossfade. Fantasy dissolves full-bleed chapters with a word entering from blur. Use three to five images of matching exposure and horizon. Nothing slides, and that is the whole feel. See `scroll.md` Image scale and crop on pin.

### Hover: directional-fill-wipe (seen on Render, Nuro, Fenriz Gym)

*Feeling: ink poured in from one side.*

The fill enters from an edge instead of fading. Render scales an absolutely placed span from `scaleX(0)` to `scaleX(1)` in 300ms on `cubic-bezier(.4,0,.2,1)`, and the label flips on the same curve. Nuro wipes a text link to violet in 300ms. It works best on outlined buttons. Keep it on a pseudo-element under the label, and let it leave the way it came. For a fill that starts at the pointer, see Entry-point fill in `references/motion/interaction.md`.

```css
.h-wipe{position:relative;isolation:isolate;overflow:hidden;background:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);
  transition:color .3s cubic-bezier(.4,0,.2,1)}
.h-wipe::before{content:"";position:absolute;inset:0;z-index:-1;background:var(--ink);scale:0 1;transform-origin:left;
  transition:scale .3s cubic-bezier(.4,0,.2,1)}
.h-wipe:hover{color:var(--bg)}
.h-wipe:hover::before{scale:1 1}
```

### Phone menu: floating-card-bar (seen on CleanShot X, Function Health, Cal.com Pricing)

*Feeling: the page runs behind it.*

The bar is an object. CleanShot sets a white card inset 12px, about 64px tall, radius 20, soft shadow, with a 40px app icon, a wordmark and a 40px grey menu tile at radius 14. Cal.com keeps a rounded 64px bar at an 8px inset. Function Health uses a 66px dark capsule. Raycast keeps a 58px capsule at 16px. Use it when the hero has a wash or an image worth showing in the gutter, and to keep a desktop floating nav's character. It costs about 90px in total, so keep it for pages with room to spare.

```css
.nav{position:sticky;top:12px;z-index:5;display:flex;align-items:center;justify-content:space-between;
  height:64px;margin:12px 12px 0;padding:0 12px;border-radius:20px;background:var(--bg);
  box-shadow:0 1px 2px color-mix(in srgb,var(--ink) 6%,transparent),0 8px 24px -8px color-mix(in srgb,var(--ink) 14%,transparent)}
.sq{width:40px;height:40px;border-radius:14px;background:var(--surface);display:grid;place-items:center}
```

### Showpiece: live-data-ticker (seen on Ramp, Liquid AI, Utopia Orchestra)

*Feeling: the business is running right now.*

The strongest marquee here, because it is evidence. Ramp runs a one-line ticker at the hero base: a fixed label, then scrolling labels with tabular values in chips, split by 1px ticks, with values rising live. Liquid AI runs facts in a thin strip above the nav. Use it when you have real numbers, or plainly labelled sample figures. Tabular numerals are required, or digits wobble as values tick.

```css
.tick{display:flex;align-items:center;gap:18px;height:44px;font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.tick b{font-weight:500;color:var(--ink);white-space:nowrap}
.tick .mq{flex:1;mask:linear-gradient(90deg,#000 85%,transparent)}
.it{display:flex;gap:8px;align-items:center;padding-right:18px;margin-right:18px;border-right:1px solid var(--line);white-space:nowrap}
.it i{font-style:normal;font-variant-numeric:tabular-nums;color:var(--ink);padding:2px 6px;border-radius:4px;background:var(--surface)}
```

### Showpiece: ticker-band-divider (seen on Analogue, Headspace, Hibachi Guru)

*Feeling: a bold seam.*

A full-bleed band that doubles as a section break. Analogue uses a thin black strip for a release notice. Hibachi Guru cuts dark video from white page with an orange band. Headspace is the best of the set, a yellow strip whose paired googly eyes aim differently in each instance, so the separator carries the joke. Use it on bold, playful or local brands, at most twice on a page. The separator glyph is where the personality lives, so make one instead of using a dot.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.