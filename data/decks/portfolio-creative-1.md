# Your direction (seed 1063)

Reads as **agency**, surface **portfolio**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from George Thomas Hatton, a silver portfolio page)

1. Navigation: `nav.top-bar/centred-wordmark-split`
2. Hero: `hero.type-only/headline-into-content`
3. Newsletter: `section.newsletter/link-not-field`
4. Gallery portfolio: `section.gallery-portfolio/caption-row-grid`
5. Stats: `section.stats/rule-bound-numerals`
6. Changelog: `section.changelog/dated-history-log`
7. Closing section: `section.cta-band/contact-as-headline`
8. Footer: `section.footer/one-line-colophon`

## Type system

**Ancizar Serif** with **Public Sans**. A crisp light serif over a civic sans for fintech, insurance and anything that needs to sound accountable.
- Display: 64px, phone 38px, weight 400, tracking -0.018em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Public Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Ancizar+Serif:ital,wght@0,300..900;1,300..900&display=swap https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From White Cube: bg #ffffff, surface #f5f6f5, text #000000, muted #6e6e6e, accent #000000. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **dry**. Headline shape: **say what you get: verb and concrete result**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `one-brand-object-moves`, **Scroll** `blur-in-on-entry`, **Hover** `underline-language`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**George Thomas Hatton** (portfolio, silver) https://georgehatton.com/
- Doing: A portfolio that declines to be one: a single unscrolling sheet of 12px bold text set like a printed credits page, with work available on request.
- Why it feels made: One font and weight, 1.2 leading, one 10px label tier, and a 10px margin from which four columns hang on one top line, so placement does all the work. The asymmetric jump from bio to lists supplies the tension.
- If imitated badly: Without real client names and a sharp grotesque this is just an unstyled page, and 12px bold becomes tiring beyond a single screen.

**Work & Co** (agency, gold) https://work.co
- Doing: An agency homepage reduced to a typeset index: one offset grid, two typefaces, one red.
- Why it feels made: Every block hangs from the same x=550 edge in a 1060px container, and the serif and grotesk pairing gives contrast without a single size or colour trick. Restraint this complete only works because spacing, rules and link behaviour are exact.
- If imitated badly: With weak type or looser alignment this reads as an unstyled document, so the fonts and the single left edge are not optional.

**Speakeasy** (devtool, gold) https://www.speakeasy.com
- Doing: An enterprise AI security page that borrows the ruled sheet of an engineering drawing, setting hairline serif statements against ASCII figures and real product diagrams.
- Why it feels made: Every section sits on the same 1px crosshair grid, and each type voice has one job, so the page feels specified rather than decorated. Colour is confined to a thin spectrum rail, one quote mark and small status marks.
- If imitated badly: Weight 100 serif turns frail below ~48px, and the ASCII art reads as a gimmick if it is low density or tinted with brand colour.

## System choices

- Frames: `media.photography/cutout-on-flat`
- Headline: `type.display-headline/swapping-word`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/saturated-pill`
- Surfaces: `surface.panel/sheet-stack`
- Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/pattern-drawn-marks`
- Page rhythm: `layout.section-rhythm/hard-dark-cuts`
- Load: `motion.load-sequence/one-brand-object-moves`
- Scroll: `motion.scroll-reveal/blur-in-on-entry`
- Hover: `motion.hover-state/underline-language`
- Phone menu: `nav.mobile-menu/rich-entry-sheet`
- Showpiece: `motion.product-demo-loop/scripted-cursor-walkthrough`
- Showpiece: `section.feature-sticky-scroll/pinned-index-scrolling-column`
- Atmosphere: `atmosphere.gradient-field/pastel-panel-behind-product`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: centred-wordmark-split (seen on Villa Aurelia, Dishoom, Fred)

*Feeling: a shop front or a hotel sign.*

The name sits dead centre and links divide to either side. It is the classic for retail, hospitality, restaurants and culture, where the name is the brand and there is no product to demo. Use it when the wordmark is good. Avoid it for software, where it reads as a boutique, and on phones, where you must collapse one side.

Use a `1fr auto 1fr` grid so the wordmark stays centred however long each side runs. Set 56 to 72px tall, 12 to 13px tracked caps or 16px sentence case, 25px gaps. Acne Studios measures 60px, 12px caps at +0.025em, 10px side inset, zero radius, no CTA. Two details make it look printed rather than templated. Acne pins its links to the top of the row and lets the much larger wordmark take the height, instead of centring everything. Dishoom tracks its caps at about +2px and adds a single 34px outlined pill for the one action.

```css
.nav{position:sticky;top:0;z-index:50;height:60px;padding:10px 10px 0;display:grid;grid-template-columns:1fr auto 1fr;
  align-items:start;background:var(--bg);box-shadow:inset 0 -1px 0 var(--line)}
.nav a{font-size:12px;letter-spacing:.025em;text-transform:uppercase;transition:opacity .15s}.nav a:hover{opacity:.55}
.left,.right{display:flex;gap:25px}.right{justify-content:flex-end}
.nav .word{font:600 34px/40px var(--font-display);letter-spacing:-.02em;text-transform:none}
```

### Hero: headline-into-content (seen on Vercel Pricing, Linear About, Notion About)

- **Feels:** Useful, no ceremony. The page gets on with it.
- **Use when:** Pricing, about, docs, case studies, and any inner page.
- **Not when:** It is your only impression on a cold visitor.
- **Recipe:** No media, no eyebrow. Two-line headline at the left gutter, about 120px below the nav and 70px above the real content. Vercel's pricing runs 64/64 at -0.06em into a three-column plan grid that fills the first viewport. Linear's about page sets the headline at about 48 to 56px, not the 72 the analyst estimated, with a video frame cropping in below. Mirim stacks a case-study title over a metadata row in 12px mono.

### Newsletter: link-not-field (seen on Work & Co, Nicole Heim Studio, Poeza)

*Feeling: this page is not for collecting emails.*

No field on the page. Work & Co gives it one row of the page grid: a label at left, a sentence and a Subscribe pill at right, about 120px tall. Nicole Heim lists it as one of three label and value pairs. Poeza makes the whole thing a stacked 80px link. It is the choice gold pages make most, because it keeps the page in its own voice.

```css
.row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,3fr);gap:24px;padding-block:32px;border-bottom:1px solid var(--line)}
.lab{font:500 20px/1.3 var(--font-display);letter-spacing:-.01em}
.row p{font-size:20px;line-height:1.35}
.b{display:inline-flex;align-items:center;height:40px;margin-top:20px;padding:0 20px;border-radius:20px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500}
@media(max-width:700px){.row{grid-template-columns:1fr;gap:8px}}
```

### Gallery portfolio: caption-row-grid (seen on Bakstad Construction, Nicole Heim Studio, Kinfolk)

*Feeling: a contact sheet from someone careful.*

Plain images with one quiet row of text beneath. It is the workhorse, and nearly all of its quality is in that row. Bakstad Construction puts it 8 to 10px below the photo at 15/20: name in ink, place and year in a pale grey at 40px steps, and `View Project` with an arrow right-aligned to the image edge. No card, no border, no hover chrome. Basic Agency uses three 413 by 517 portraits with bold caps client names. Nicole Heim uses two 686px columns with only a 2px gutter. Use it for almost any portfolio. Make sure the caption shares the image's own left and right edges, because that is what binds them into one object.

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

### Stats: rule-bound-numerals (seen on Stripe, Increase, Modern Treasury)

*Feeling: a page from an annual report.*

Each column or the whole row hangs from a hairline, which gives figures something to stand on without a box. Modern Treasury uses three 368px columns, 48px gaps, each topped by its own grey rule, with a light figure at about 47px. Increase sets mono numerals centred between full-bleed hairlines with 120px padding. Stripe's home page sets four stats between two hairlines with one dark and the rest grey, and a short blue segment rides the rule above the active one. Magram uses cream 96px percentages on navy, which is the variant to take when your numbers describe the problem and not you. Note the mix of words and digits on Modern Treasury's third column.

```css
.band{background:var(--ink);color:var(--bg);padding:48px 0 112px}          /* or any deep ground */
.r{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;max-width:1104px;margin-inline:auto}
.c{border-top:1px solid color-mix(in srgb,currentColor 20%,transparent);padding-top:20px}
.c b{display:block;font:600 96px/1 var(--font-display);letter-spacing:-.03em;font-variant-numeric:lining-nums}
.c p{margin-top:18px;font-size:18px;line-height:26px;opacity:.7}
.c cite{display:block;margin-top:10px;font-style:normal;font-size:13px;line-height:18px;opacity:.6}  /* always a source */
@media(max-width:860px){.r{grid-template-columns:1fr;gap:32px}.c b{font-size:64px}}
```

### Changelog: dated-history-log (seen on Aniket, VS Code, cagdascecen.com)

*Feeling: a working life, in order.*

The same structure for a person or a project. Aniket sets a 13 to 14px company name with a small pink arrow, the date range right-aligned on the same baseline, the role beneath, a paragraph, and about 60px between entries, with no dividers. A portfolio on black groups exhibitions by year with a 2px coloured left rule, fading towards the foot of the viewport. VS Code shows live commits: 36px avatars joined by 2px blue segments, with the oldest row fading to 30 percent and the line turning dotted. Real commits make open source tangible. Avoid it for a product changelog, where readers need detail and links rather than a narrative.

### Closing section: contact-as-headline (seen on Vapi, Evenark, Death to Robots)

*Feeling: just call.*

Vapi sets a 48px phone number on a 90px mint strip, and the number is the demo. Basement Studio sets its email address in 76px display type. Evenark stacks an email and a booking link at headline size in muted ink. Use it where one action really is a call or an email.

### Footer: one-line-colophon (seen on Block, Elyx, Babylonstoren)

*Feeling: honest about its size.*

For a page with few destinations, one row. Elyx sets a single centred line with dot separators directly on its background art. UploadThing runs copyright, three links, a green status dot and three icons under a hairline. Daily uses mono slash-prefixed links in about 100px. Teenage Engineering sets seven thin lowercase links in a 96px black strip. Block pins six links to the bottom of the viewport so they mirror the top row. Svelte uses one centred sentence, because the real footer lives in the docs. A short footer shows confidence, and padding one with columns you do not need is exactly what cheapens it.

### Frames: cutout-on-flat (seen on Apple, Framework, Apple Vision Pro)

*Feeling: clean, confident, retail-grade.*

**Use:** Product ranges, colourways, parts, and a recurring cut-out figure as a small signature. **Avoid:** Soft or hair-edged subjects without a clean mask. A rough cut-out is worse than a rectangle.

Set the object straight on the tile colour with no floor. Group colourways so they overlap: five units across, the group filling about 90% of tile width. Use one soft contact shadow, offset slightly away from the key light. Knolled parts laid in a grid or flat-lay work the same way. For a person, use a transparent cut-out about 80px tall and let it perch on interface edges, changing pose per section. Rotation of -12 to +15 degrees suits snacks and packs with a little parallax. Portraits work the same way: cut people out, stand them on one pale panel, and fix the head height. Thrivent runs five waist-up cut-outs on alternating pale blue and tan panels at radius about 16, with a larger centre panel and heads breaking above the panel tops, which adds life to a strict row. Motusmade sets one on a pale blue panel.

Frame.work was tagged as a 3D render, but the frames show photographed parts, so it is counted here.

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

### Primary button: saturated-pill (seen on Apple, Sweetgreen, Concertgebouw)

*Feeling: friendly, familiar, easy to say yes to.*

The most ordinary button on the web, and fine when the colour is confident. Use it for health, food, culture and consumer brands. Set 40 to 52px, 16/500, 24px padding, no shadow. Choose a colour that owns the page, such as a burgundy for a concert hall or an acid lime for a salad chain, then echo it once in a tag or highlight. Apple's #0071e3 at 44px, 17px weight 400 and a 980px radius is the most repeated version on the web.

Avoid default blue, and avoid a pale pill with white text. Darken about 8 L\* on hover. A soft coloured glow around it, as on some finance pages, cheapens it at once.

### Surfaces: sheet-stack (seen on Hims, Loopcraft, Seed)

*Feeling: layers of paper sliding over each other.*

The next section arrives as a sheet with 24 to 40px top corners, sliding over the last, or each section is a colour room with rounded corners on all four sides, separated by 40px of page. Hims gives each room a colour matched to its imagery and steps inner cards down to 24px. This is the best way to change colour between sections, since a colour change becomes a physical event rather than a flat band. It works unchanged on phones.

### Surface ladder: neutral-page-white-card (seen on Warp Pricing, Vercel Pricing, Cal.com Pricing)

*Feeling: printed and exact. Feels like a well-set specification sheet.*

**Use it for:** Developer platforms and precise SaaS. The default for a light product page. **Avoid:** Warm consumer brands, where pure neutrals feel like a hospital.

Page #fafafa, raised sheet #fff, hover #f2f2f2, hairline #e6e6e6 or black 8%. Text #171717 and #4d4d4d. No tint, one accent at most, no shadow at rest. Separation is 2% lightness plus a line, so it feels printed.

Tiny hue shifts are allowed and can be an identity: #fbfdfd with a faint mint cast, or #f9f9fb and #f0f0f3 with a faint lilac one.

```html
<style>
/* grey page, white sheet, one hairline. nothing else, across the whole page */
:root{--bg:#fafafa;--surface:#fff;--hover:#f2f2f2;--line:#e5e5e5;--ink:#171717;--ink-2:#666;--ink-3:#8f8f8f}
.sheet{display:grid;grid-template-columns:repeat(3,1fr);margin:40px;background:var(--surface);border:1px solid var(--line);border-radius:12px}
.sheet>div{padding:28px;border-left:1px solid var(--line);color:var(--ink-2);height:320px}
.sheet>div:first-child{border-left:0}
.sheet h3{color:var(--ink);font-weight:500;font-size:14px}
</style>
<div class="sheet"><div><h3>Starter</h3>For one forwarder.</div><div><h3>Team</h3>For desks across time zones.</div><div><h3>Network</h3>For large forwarders.</div></div>
```

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

### Icons: pattern-drawn-marks (seen on AuthKit)

*Feeling: unusually considered. Even compliance logos belong to the page.*

**Use:** Trust and compliance rows, partner marks, or any dull set that would otherwise break the page's look. **Avoid:** Marks that must stay exactly as issued, such as a certification with strict usage rules. Check before altering one.

Redraw the marks in the page's own graphic device. AuthKit renders its compliance marks as horizontal scanlines at about 35% white, echoing the stripes of its hero, each about 72px in a four-cell hairline row on near-black with 14px grey centred labels. Sample a bold silhouette, then draw it as rows of 1px lines on a 3px pitch. The set is held together by the pattern, so the subjects can be anything.

**In the lab:** Rendered with canvas. The shield and ring worked, and the key fell apart. Silhouette strength is everything, and real frames keep the subject simpler than you expect.

### Page rhythm: hard-dark-cuts (seen on Public, Gagosian, Stone Island)

**Feel.** Decisive. Contrast replaces decoration.
**Use when** a light page has one important chapter to set apart, such as your developer story, or a pro tier. **Avoid** using it more than twice, because repeated cuts lose their force.
**Recipe.** Long light runs broken by an edge-to-edge dark block of about 950px, at least one full viewport. No gradient at the boundary. The block must be dense with product at real scale, not three small text cells. A fixed nav flips colour exactly at the cut. Place it 25 to 50% down.
**Why it works.** A viewport-filling block changes where you are. A shorter band only changes what you are looking at.

**Built.** My first block was 520px with three text cells and looked like a banner. Making it 960px tall and filling each cell with a table, chart or code block, cropped by the cell floor, brought it level with the real frame.

```css
.cut{min-height:960px;padding-block:120px}  /* plus .flip from the base code */
.cut .cells{display:grid;grid-template-columns:repeat(3,1fr);margin-top:72px;
  border:1px solid var(--line);border-radius:12px;overflow:hidden}
.cut .cells>div{min-height:440px;padding:32px 32px 0;border-left:1px solid var(--line);
  display:flex;flex-direction:column;overflow:hidden}
.cut .cells>div>:last-child{margin-top:auto}  /* product sits on the floor of its cell */
```

```js
// Flip the fixed nav exactly when the block reaches it
new IntersectionObserver(([e])=>nav.dataset.tone=e.isIntersecting?'flip':'',
  {rootMargin:'0px 0px -94% 0px'}).observe(document.querySelector('.cut'));
```

### Load: one-brand-object-moves (seen on Astral, Modern Treasury, Elyx)

*Feeling: authored, and cheap to run.*

Headline static, one owned object performs. Astral's glyph grows from three heads at once around a still headline. Modern Treasury flips one tag at a time as its connector darkens, like a payment running down a rail. Martin Development raises its wordmark behind a roofline, which proves the depth of the scene. Use it when the brand has a mark, line or object worth watching. This is the best value on the list: strong recall at almost no weight.

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

### Scroll: blur-in-on-entry (seen on New Material, Poeza, Clevr Blends)

*Feeling: soft focus, unhurried.*

Copy sharpens from 8 to 12px blur as it reaches the viewport. New Material uses about 8px over about 0.4s on `.22,1,.36,1` with no translate, and the sentence is still soft while the deck settles. Use it for display lines on premium sites. Keep it off small text, where blur reads as a rendering bug, and animate at most a few elements at once, because `filter` is expensive on a large area.

### Hover: underline-language (seen on Buildkite, Fidèle, Strava)

*Feeling: the oldest signal on the web.*

Links answer with an underline. HAY, Monocle and GitHub Docs do little else. Accel draws one with `scaleX(0)` to 1 in 0.3s. Use it for reading pages and for any link in running text, where colour alone fails people who cannot see the difference. The drawn version enters from the left and leaves to the right, and that directional exit is what makes it feel made.

```css
.link{position:relative}
.link::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:1px;background:currentColor;
  transform:scaleX(0);transform-origin:right;transition:transform .3s cubic-bezier(0,0,.2,1)}
.link:hover::after{transform:scaleX(1);transform-origin:left}
```

### Phone menu: rich-entry-sheet (seen on Notion About, AuthKit, Notion Calendar)

*Feeling: a small landing page in the menu.*

Rows carry more than names. Notion stacks three 106px pastel cards with a title, a line and its own drawing, then Resources and Pricing in plain 22px type, then two buttons in a pinned tray. Supabase uses a select to switch sections, with icon tiles on an 80px pitch. Hugging Face groups chips under gradient-tinted headings. Rewiring America uses chip tabs on a yellow band with described rows below. Use it when names alone do not sell the product, and you have real drawings. Avoid card lists with generic icons.

### Showpiece: scripted-cursor-walkthrough (seen on Stripe Atlas, Devin Desktop, Zapier)

*Feeling: someone is using it for you.*

A drawn cursor uses the real interface. Stripe Atlas plays a script of about 6s in a hero card: the cursor waits in open space, the card arrives, a name resolves with a green mark, radio options appear, a button changes to its working state, and a details card slides out. Zapier toggles a control, then a notification expands into a full email, with a pause button. Supabase highlights a row and a real button under a hand cursor. Use it when the product is a flow with clicks.

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

### Showpiece: pinned-index-scrolling-column (seen on Attio, Baseten, Framer)

*8 sites, quality 5, the highest mean of any variant seen on more than five sites, at 4.88.* A document with a table of contents. It gives a long section a spine, and readers can jump. Use for four to six chapters, each with a real statement and demo. It suits B2B pages that have to explain a lot.

Recipe: a 218 to 348px index stays put and a 1000px column scrolls past. 14 to 18px chapter labels, active near-black, others pale. Attio puts a 2px accent tick on the page rail itself, then gives each chapter a statement with a white-to-grey run-in above a demo cell. Baseten opens its rail with a black mono bar and marks the active row with a small square. Auth0 uses four links on 1px rules about 86px apart. Framer mirrors the idea, pinning a 260px agent transcript on the right while 930px cards scroll on the left. Slack turns the index into a four-tab bar under the nav. Hawl and LaunchDarkly add a counter.

Seen on Attio, Baseten, Framer, Auth0, Slack, ClickHouse, LaunchDarkly. Suits light precision, dark precision, bold colour.

```css
.page { display: grid; grid-template-columns: 348px 1fr; width: min(1392px, calc(100% - 48px)); margin-inline: auto; border-inline: 1px solid var(--line); }
.page > * { min-width: 0; }   /* without this a wide fragment or a nowrap nav widens the track, and overflow-x: clip hides the damage */
.index { position: sticky; top: 0; align-self: start; height: 100svh; display: flex; flex-direction: column; justify-content: center; padding-left: 56px; border-right: 1px solid var(--line); }
.index a { position: relative; display: block; padding: 7px 0; font: 500 18px/1.4 var(--font-text); letter-spacing: -.01em; color: var(--ink-3); text-decoration: none; transition: color .2s; }
.index a.on { color: var(--ink); }
/* -57px is the padding plus the rail, so the tick lands on the page's own line */
.index a::before { content: ""; position: absolute; left: -57px; top: 9px; bottom: 9px; width: 2px; background: var(--accent); opacity: 0; transition: opacity .2s; }
.index a.on::before { opacity: 1; }
.ch { border-bottom: 1px solid var(--line); }
.st { padding: 96px 56px 64px; font: 500 24px/1.22 var(--font-display); letter-spacing: -.016em; max-width: 30em; color: var(--ink-2); }
.st b { font-weight: 500; color: var(--ink); }
.cell { position: relative; height: 620px; background: var(--surface); border-top: 1px solid var(--line); overflow: hidden; }
.ui { position: absolute; left: 56px; top: 56px; right: -60px; bottom: -40px; }   /* same inset in every chapter */
@media (max-width: 980px) {
  .page { grid-template-columns: 1fr; border: 0; width: calc(100% - 32px); }
  .index { top: 0; height: auto; z-index: 3; padding: 10px 0; background: var(--bg); border: 0; border-bottom: 1px solid var(--line); }
  .index ul { display: flex; gap: 18px; overflow-x: auto; scrollbar-width: none; }
  .index a { white-space: nowrap; font-size: 15px; padding: 7px 0; }
  .index a::before { left: 0; right: 0; top: auto; bottom: -10px; height: 2px; width: auto; }
  .st { padding: 56px 0 32px; font-size: 21px; max-width: none; } .cell { height: 440px; }
}
```

```js
const links = [...document.querySelectorAll('.index a')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
}), { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('.ch').forEach(c => io.observe(c));
```

### Atmosphere: pastel-panel-behind-product (seen on Tana, Birdie, Orbit Design)

*Feeling: a soft studio backdrop. Dark product windows look sharp on it.*

**Use it for:** SaaS with dark product UI on a light page. **Avoid:** Light product UI, which has nothing to contrast with here. Use a mid-tone stage instead.

Rounded panel, radius 24 to 32px, container width, diagonal mesh of three pale hues held at one value, oklch L .84 to .87, C under .05. Dark app windows sit on it, cropped by the panel bottom. No grain, no shapes.

A saturated acid version also exists, lime through pale yellow on a 1416px panel with black outlined cards. It suits bold-colour brands only.

```html
<style>
/* hue moves, value holds: every stop sits at oklch .84, so no hot spot appears and dark product reads at full strength */
.pastel{position:relative;margin:40px 32px;height:560px;border-radius:32px;overflow:hidden;
  --a:oklch(from var(--accent) .84 .025 calc(h - 20));--b:oklch(from var(--accent) .85 .05 calc(h + 60));--c:oklch(from var(--accent) .87 .05 calc(h + 95));
  background:radial-gradient(90% 90% at 100% 0,var(--b),transparent 60%),radial-gradient(90% 70% at 70% 110%,var(--c),transparent 62%),var(--a)}
.pastel .win{position:absolute;left:18%;top:124px;width:64%;height:520px;background:#1b1a1c;border-radius:14px;box-shadow:0 30px 70px -20px rgba(40,20,30,.5),0 0 0 1px rgba(0,0,0,.4)}
</style>
<div class="pastel"><div class="win"></div></div>
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.