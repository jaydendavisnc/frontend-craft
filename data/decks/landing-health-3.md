# Your direction (seed 1027)

Reads as **health**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Ян Козлов, a silver health page)

1. Navigation: `nav.floating-pill/section-subnav-pill`
2. Hero: `hero.split-copy-media/edge-bleeding-subject`
3. Stats: `section.stats/number-as-diagram`
4. Pricing table: `section.pricing-table/standard-vs-custom-pair`
5. Feature grid: `section.feature-grid/gridline-tick-columns`
6. Feature alternating: `section.feature-alternating/anchored-copy-rows`
7. Team: `section.team/founder-bio-split`
8. Faq: `section.faq/split-title-with-art`
9. Testimonial: `section.testimonial/quote-beside-portrait`
10. Closing section: `section.cta-band/composer-close`
11. Footer: `section.footer/typeset-legal-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Boldonse** with **Hanken Grotesk**. Drawn oversized, so 60 percent of normal size with 1.5 leading; the neutral lets the scale shock register.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.5. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Hanken Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Boldonse&display=swap https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Mercury Pricing: bg #fbfcff, surface #ffffff, text #171721, muted #535461, accent #5266eb. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `type-first-media-fills`, **Scroll** `window-opens-to-full`, **Hover** `row-fill`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Ян Козлов** (health, silver) https://iankozlov.com/
- Doing: A solo therapist's site built as a black and white Framer layout with real portraits, service pricing and FAQ.
- Why it feels made: Content is well structured for a practitioner: services, pricing, credentials, FAQ. Alternating white and near-black sections with identical row layouts keep it coherent.
- If imitated badly: Black and white alone feels generic; the human photography is what makes it work.

**Levels** (health, gold) https://levels.com
- Doing: A health product landing that mixes light and near-black bands with data-led UI cards in a restrained green-grey palette.
- Why it feels made: Tight Hoves display, consistent 10px-radius bordered cards, real product UI and pale green tints make the data feel credible and calm.
- If imitated badly: Black stat cards and green tints turn clinical and generic if spacing and hairlines are loosened.

**Exa** (ai, gold) https://exa.ai
- Doing: A search API presented with the gravity of a research institute: warm serif headlines, hard-edged panels, and data in cobalt.
- Why it feels made: The serif is unexpected for AI infrastructure and every other element is squared off and technical, so the contrast feels authored. Cobalt appears only on data and the final footer, which makes both hit hard.
- If imitated badly: The hard-cornered grid and stipple only work with real data behind them; with placeholder content they look like a bank template.

## System choices

- Frames: `media.photography/scrimless-campaign-plate`
- Headline: `type.display-headline/swapping-word`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/ringed-halo-pill`
- Surfaces: `surface.border-treatment/hairline-only`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.section-rhythm/collapsed-chapters`
- Load: `motion.load-sequence/type-first-media-fills`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `motion.hover-state/row-fill`
- Phone menu: `mobile.phone-nav/contact-action-row`
- Showpiece: `motion.product-demo-loop/typed-input-loop`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-utility-header`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: section-subnav-pill (seen on Apple Intelligence, Stripe Billing, Stripe Pricing)

*Feeling: a local table of contents that travels with you.*

A floating element for the parts of one page. Apple Intelligence sets a centred row of 36px pills at radius 18, translucent with hairlines, 18px gaps, and the current one solid black with a faint multicolour glow, in a 58px frosted band. Stripe Billing turns its subnav into a 1266x64 white card 8px from the top, with a soft blue shadow and a new 40px button, once the global bar leaves. Stripe's pricing page straddles a colour ribbon with a 348x50 pill of three anchors. Use it on long product pages. Avoid it with more than about seven anchors.

### Hero: edge-bleeding-subject (seen on Sonder, One Medical, Ability Solutions)

- **Feels:** Human, warm, editorial.
- **Use when:** You have a strong portrait, cut-out or tall photo, for health, hospitality, services.
- **Not when:** The person is stock. Everyone can tell, and it damages trust more than having no image would.
- **Recipe:** Copy at 60 to 120px gutter, 48 to 64px headline. Subject fills the right half and bleeds off top, right and bottom with no frame, no card, no radius except an optional 32px at the inner bottom corner. One Medical runs one 3px arc behind a tightly cut portrait, tying it to a coloured word in the headline. Sonder's last headline line turns copper and leads to a tall sunrise photo.

### Stats: number-as-diagram (seen on Stripe Payments, Wispr Flow, Attio)

*Feeling: you can see the difference before you read it.*

The figure is drawn, so the reader takes it in before reading it. It is the highest form of stat, because a picture at true scale cannot be vague. Wispr Flow sets a 170px panel for typing speed beside a 988px film for speaking speed, and the width is the argument. Driftime's bars sit on the page grid at true height, with labels inside. Supabase spells its star count in a dot grid that fades at the edges. Attio sweeps one 1px curve across a whole cell beside four ticked figures. Plvs Ultra counts circles and strikes them through. Remote nests four L-shaped lines, each corner holding a figure. Keep the scale honest. Lyra's rounded chart tiles show how to do this softly.

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

### Pricing table: standard-vs-custom-pair (seen on Stripe Pricing, Parsley Health, Orbit Design)

*Feeling: pay as you go, or talk to us.*

Stripe's pair is the clean answer to usage pricing: a white card with the rate in a tinted panel inset 4px, and a navy card with four stacked chips listing what custom covers. The inset panels repeat the same gap, which ties two different cards together.

### Feature grid: gridline-tick-columns (seen on Stripe Atlas, Stripe Connect, Stripe Payments)

*4 sites, all gold, quality 5.* The page's own grid made visible, which reads as engineering. Use it on long pages with a strict column system, and for finance or infrastructure. Do not use it on a single section: see the mistake below.

Recipe: four columns of about 270px with no gutter. Dashed vertical guides run the full height of the page, through band changes. A 1px by 16px accent tick hangs in the gutter beside each title, exactly on a guide, so the text looks pinned to the structure. A 40 to 44px duotone spot icon, a 15px/600 title, 15/24 copy, and inline 500-weight accent links inside the body. Reuse the same tick on figures further down the page.

Seen across Stripe, on Connect, Payments, Pricing and Atlas. Suits gradient light and light precision, for finance and SaaS.

```css
/* one layer draws the guides over every band on the page */
.page { position: relative; }
.page::after { content: ""; position: absolute; inset: 0; left: 50%; width: min(1080px, calc(100% - 48px)); transform: translateX(-50%); pointer-events: none;
  --d: repeating-linear-gradient(var(--line) 0 4px, transparent 4px 8px);
  background: var(--d) 0 0/1px 100% no-repeat, var(--d) 25% 0/1px 100% no-repeat, var(--d) 50% 0/1px 100% no-repeat, var(--d) 75% 0/1px 100% no-repeat, var(--d) 100% 0/1px 100% no-repeat; }
.cols { display: grid; grid-template-columns: repeat(4, 1fr); }
.f { padding: 0 24px 0 16px; }
.f h3 { position: relative; font: 600 15px/24px var(--font-text); }
/* the padding is 16px, so -16px lands exactly on the guide */
.f h3::before { content: ""; position: absolute; left: -16px; top: 4px; width: 1px; height: 16px; background: var(--accent); }
.f p { margin-top: 6px; color: var(--ink-2); font-size: 15px; line-height: 24px; }
.f a { color: var(--accent); font-weight: 500; text-decoration: none; }
@media (max-width: 900px) { .page::after { display: none; } .cols { grid-template-columns: repeat(2, 1fr); row-gap: 40px; } }
```

### Feature alternating: anchored-copy-rows (seen on Devin Desktop (codeium.com redirect), Increase, Bakstad Construction)

*4 sites, all gold, quality 5.* Small and expensive. The copy is pinned to the plate's base or top, and the rest of the column stays empty on purpose. Use it when you have strong plates and short copy. It needs a page with visible rails, or the empty column looks unfinished.

Recipe: two equal columns, about 607px each. A plate about 460 to 570px tall, a window cropped by its base. Copy at the bottom of the opposite column: a two-tone line, muted first and full ink second, then 16px at about 56% ink. The next row flips, starting about 120px below. Increase's form splits rows with 10% rules and uses `justify-content: space-between` to push a customer quote to the row's base.

Seen on Devin (codeium.com), Increase, Bakstad Construction, Warp. Suits light precision and photo-led, for AI, finance, architecture.

```css
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 112px; }
.row.flip .plate { order: 2; }
.copy { align-self: end; padding: 0 24px; }          /* sits on the plate's base line */
.copy h3 { font: 400 30px/1.14 var(--font-display); letter-spacing: -.026em; }
.copy h3 span { display: block; color: var(--ink-3); }
.copy p { margin-top: 10px; color: var(--ink-2); max-width: 31em; }
.plate { position: relative; height: 468px; overflow: hidden; background: linear-gradient(160deg, var(--wash-1), var(--wash-2)); }
.win { position: absolute; left: 44px; right: 44px; top: 44px; height: 520px; display: grid; grid-template-rows: 44px 1fr; background: var(--surface); border-radius: 12px; box-shadow: 0 0 0 1px rgba(0,0,0,.07), 0 30px 60px -28px rgba(0,0,0,.45); font-size: 15px; }
.win.off { right: -60px; }   /* every second window leaves by the edge */
@media (max-width: 900px) { .row { grid-template-columns: 1fr; margin-bottom: 64px; } .row.flip .plate { order: 0; } .copy { padding: 8px 0; } .plate { height: 380px; } .win { left: 20px; right: -40px; top: 24px; } }
```

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

### Faq: split-title-with-art (seen on Sailia, Ян Козлов, Talkspace)

*Feeling: a page with a personality.*

The same split, with something owned under the title. Sailia sets a white line drawing on a blue band. Talkspace places an ink plant drawing on a pale band and sets the second word of its heading heavier. Hawl uses a 3D mascot, Yan Kozlov a tall photograph. It fills an awkward empty column well when you have real art. Do not fill it with stock.

### Testimonial: quote-beside-portrait (seen on Render, Asana, Claude)

*Feeling: meeting the person.*

Half image, half words. Use it when you have one customer worth meeting. The media decides the tone: a film-look photo on Asana, a halftone or duotone portrait on Mixpanel, or Render's clever option for when you have no photo at all, a grainy landscape in the customer's colours with their logo centred in white. That plate needs nothing but CSS, and it reads as commissioned art, because the grain does the work.

Render pairs a 680 by 400 plate at radius 6 with a 32/40 quote, name and role low, and 40px square arrows on the plate's base line. Claude's page uses a 520px photo beside a 28/38 serif quote with no avatar, because the photo is already the person. Isolabella bottom-aligns the quote against the photo and leaves the space above it empty.

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

### Closing section: composer-close (seen on Claude, Ramp, Algolia)

*Feeling: start now, right here.*

The last call to action is the product. Claude ends on a real prompt field with its action inside. Ramp's blurred panel holds a 766px URL composer, and its final band restates the slogan over the hero's email field. Algolia draws a dashed dropzone with limits written beneath. New York Phil's preset donation amounts belong here too: a form with the first decision already made. A field beats a button whenever the first step can happen on the page. My heading at 48/400 looked limp beside the original, so set it heavier than you think.

```css
.close{padding:140px 24px;text-align:center}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}   /* keep a real label, visually hidden */
.close h2{font:600 52px/1.08 var(--font-display);letter-spacing:-.015em}
.close>p{font-size:22px;line-height:1.3;color:var(--ink-2);margin:16px auto 0;max-width:30em}
form{display:flex;align-items:center;width:min(560px,100%);height:54px;margin:40px auto 0;padding:7px 7px 7px 18px;background:var(--surface);border-radius:14px;box-shadow:0 0 0 1px var(--line);transition:box-shadow .15s}
form:focus-within{box-shadow:0 0 0 1px var(--ink-2),0 0 0 4px color-mix(in srgb,var(--accent) 16%,transparent)}
form input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:16px}
form button{flex:none;display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 14px;border:0;border-radius:8px;background:var(--accent);color:var(--bg);font-size:14px;font-weight:500}
```

### Footer: typeset-legal-footer (seen on Public, Increase, Affirm)

*Feeling: the fine print is respected.*

Where disclosures run to pages, set them as a document. Mercury gives them a real layout: a 13px label in the left column and numbered notes in a 680px measure at 13/17, with underlined links and bold on warnings. Public sets 11 to 12px disclosures on a one-step cool tint, with bold run-in heads. Affirm holds a 14/20 block with an 18px paragraph gap under its wordmark. Ritual puts its regulatory statement in an outlined box. Use it for finance, health and insurance, and do not hide this text behind a toggle. Regulators read it, and so do careful customers. Number the notes and link them from the claims above.

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

### Headline: swapping-word (seen on Codecademy, Calvyn, Fora)

Live and specific. One sentence addressing several audiences. Seen on 6 sites.

**Use it for:** Platforms serving several verticals, and products with a clear list of jobs.

**Avoid it for:** Any page where the moving word is the only idea. Must stop for reduced motion.

**Recipe:** Fixed opening words with one slot at the end cycling 3-5 nouns, masked to the line height and moved vertically over 400-600ms, or typed with a cursor. Reserve the widest word's width, or centre so the whole line re-centres. Hold each word 2-3 seconds. Stop for reduced motion.

<a id="statement-as-hero"></a>

### Section headings: ink-then-grey-run-in (seen on Public, Attio, Increase)

The signature of current precision work. One thought, read at two speeds. Seen on 13 sites.

**Use it for:** Any product page. It deletes the eyebrow, title and subhead stack, which is the main cause of template feel.

**Avoid it for:** When the second sentence is filler. The grey half gets read, so it has to say something.

**Recipe:** One paragraph at 32-48px, weight 300-500, line-height 1.0-1.2, left aligned, 780-1150px wide. First sentence in full ink, the rest runs on in the same line at about 6:1 contrast. No eyebrow, no subhead. Repeat for nearly every section. Use text-wrap: pretty, never balance.

**Why it works:** Nine gold sites use it and it has the highest mean score of any common section-heading variant. Balance breaks it, because the tonal change is meant to fall mid-line: pretty keeps the run-on and only protects the last line.

```css
h2      { font: 510 48px/1.04 var(--font-display); letter-spacing: -.022em; max-width: 1150px; text-wrap: pretty; }
h2 span { color: var(--ink-2); }
```

<a id="grey-lead-ink-payoff"></a>

### Primary button: ringed-halo-pill (seen on Customer.io, Comet, Sam Hoult Beauty)

*Feeling: one bright thread around a dark object.*

A dark pill wrapped by a detached ring. Customer.io's is 48px, 16/600, 28px padding, deep teal fill, with `0 0 0 4px` in a pale mint. Analysts estimated 3px and measurement gives 4. The ring is the only bright colour above the fold and marks every primary action, while its secondary keeps the same shape with a near-invisible grey ring, so the two line up. Perplexity Comet scales the idea to a 66px pill with a 50px white disc and two faint concentric rings at 16 and 32px.

The ring works because it uses no space and adds a brand colour without touching the fill. Use it on light pages with a deep fill. Do not confuse it with focus: give focus a separate outline further out.

```css
.b-ring{display:inline-flex;align-items:center;height:48px;padding:0 28px;border:0;border-radius:999px;white-space:nowrap;
  background:var(--ink);color:var(--bg);font:600 16px/1 var(--font-text);cursor:pointer;
  box-shadow:0 0 0 4px color-mix(in srgb,var(--accent) 45%,var(--bg));transition:background-color .2s cubic-bezier(0,0,.35,1),scale .1s}
.b-ring:hover{background:color-mix(in oklab,var(--ink) 80%,#000)}
.b-ring:active{scale:.98}
.b-ring:focus-visible{outline:2px solid var(--ink);outline-offset:6px}
```

### Surfaces: hairline-only (seen on 099, Jasper, Devin Desktop (codeium.com redirect))

*Feeling: rigorous.*

All structure is line, and no page element has a shadow. On Codeium, shadow appears only inside the app mock, so depth belongs to the product. Vercel's pricing has 1px containers at about 8 percent, radius 2, and none anywhere. It demands a precise grid, because every misalignment is visible.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Logo: constructed-geometric-mark (seen on Block, BCR Law LLP, ADCC Awards)

*Feeling: inevitable. It looks like it could not have been drawn any other way.*

**Use:** Finance, platforms, institutions, awards. Any brand that benefits from a simple, stated rule. **Avoid:** When the rule is arbitrary. The geometry should echo the name or the idea.

State the mark in numbers. Block lets the mark be the hero: 44px, centred above one line, with almost nothing else on the screen. A 3 by 3 of solid squares at 13px with about 3px gaps and about 2px corners gives a 44px mark. A black 94px square quartered by a thin white cross holds four letters made only of straight strokes, and it inverts in the footer at 80px. An outlined box of 80 by 88 with a 2px stroke and one sheared corner holds three rows of tracked capitals, and the same skeleton swaps letters and colour for each company in a group. Showing construction drawings as content can turn the derivation into a section.

```js
// Constructed mark. Unit 13, gap 3.25 (a quarter), corner 1.6 (an eighth). Draw a second master for 16px.
function grid(size) {
  const px = size <= 20;                                 // pixel-fitted: 4px squares on a 5px pitch
  const [u, g, r, box, off] = px ? [4, 1, .6, 16, .5] : [13, 3.25, 1.6, 45.5, 0];
  let o = '';
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
    o += `<rect x="${off + i * (u + g)}" y="${off + j * (u + g)}" width="${u}" height="${u}" rx="${r}"/>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${box} ${box}" fill="currentColor" aria-hidden="true">${o}</svg>`;
}
```

**In the lab:** The grid held from 200px to 32px and failed at 16 until it had its own master. The sheared box was the best-looking mark in the test: below 40px it drops to one letter.

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

### Page rhythm: collapsed-chapters (seen on Webflow Pricing)

**Feel.** Efficient. Respects a reader who only wants one thing.
**Use when** a pricing or catalogue page would otherwise run very long. **Avoid** hiding the primary offer.
**Recipe.** Secondary families collapse to 56px headings with a plus, about 266px tall between full-bleed hairlines. Heading takes the accent on hover.

### Load: type-first-media-fills (seen on Public, Analogue, Cal.com)

*Feeling: the page is already here.*

The most useful load on the web, and the default for product pages. Nav, headline and buttons paint at once with the media slot reserved, and the media fades in when ready. Public's film card arrives about 1.1s in, already playing. Cal.com holds pale slots inside its headline and fills them, so nothing shifts. Analogue fades a render over 0.3s on `cubic-bezier(0,0,.2,1)`. Use it wherever copy can be server rendered. Keep the fade under 0.4s, and let the media start playing before it fades in, so the first frame seen is already alive.

```css
.slot{aspect-ratio:16/9;background:var(--surface);border-radius:12px;overflow:hidden}
.slot :is(img,video){width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s cubic-bezier(0,0,.2,1)}
.slot.ready :is(img,video){opacity:1}
```

### Scroll: window-opens-to-full (seen on Factory, Resend, LEA WINERY)

*Feeling: stepping into the product.*

A contained window scales with scroll until it fills the frame. Factory starts about 750px wide and grows about 2x until it crops and the UI reads huge. Resend zooms its editor under a heading until a white sheet is the one bright rectangle on the page, then releases. Use it to move from a pitch into the product. It works natively.

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

### Hover: row-fill (seen on Work & Co, Vercel Pricing, Olivier Larose)

*Feeling: the whole line is the target.*

The row takes a fill edge to edge. Olivier Larose inverts to black in 0.2s. Make Town fills a hairline row solid black and adds an arrow. Work & Co only changes the text to the accent over 0.25s, leaving rules and position alone. Use it for indexes and lists where each row is one link.

### Phone menu: contact-action-row (seen on Native Law PLLC, Queen's University Library)

*Feeling: call us, right now.*

For a local business, the fastest route is a phone call. Native Law sets Call, Email and Menu as three 32px circular icon buttons with 11px labels. Queen's University Library sets one gold block split by a 1px rule into Menu and Ask. Use it for clinics, trades, restaurants and services. These must be real `tel:` and `mailto:` links, since on a phone they open the dialler in one tap. That is the one place where a phone does better than a desktop.

### Showpiece: typed-input-loop (seen on Exa, Bun, Tally)

*Feeling: the claim, happening.*

A real input fills itself. Tally types a form title letter by letter, then opens a slash menu. Docker types on the left while log rows arrive on the right, with older rows dimming to about 40 percent, and the count in the subhead steps up. Exa fills its console over about 2s in place of a hero entrance. Bun walks real output through five steps with a progress line, hover pause, and replay and next controls. Use it for tools with an input. Show real commands.

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

### Showpiece: sticky-utility-header (seen on Attio Pricing, Claude Pricing, Linear Changelog)

*Feeling: you always know where you are.*

The most useful pin on the web, and it is plain CSS. Attio sticks plan names, prices, toggle and all four CTAs under the nav across about 5,000px of matrix, so conversion stays in reach, and section titles pin beneath them until the next replaces it. Claude's pricing does the same with a hairline and no shadow. Linear's changelog sticks each date until the next pushes it up. Use it for any table longer than a screen.

```css
.plans{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line)}
.group{position:sticky;top:124px;z-index:3;background:var(--bg)}/* top equals the height of the row above */
```

Give sticky rows a solid background, or the table scrolls through them. No shadow is needed, since a hairline holds the edge.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.