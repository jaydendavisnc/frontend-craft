# Your direction (seed 1065)

Reads as **agency**, surface **portfolio**, register **type-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Lazy Eight, a silver agency page)

1. Navigation: `nav.top-bar/corner-anchored`
2. Hero: `hero.full-bleed-media/bottom-left-lockup`
3. Newsletter: `section.newsletter/underline-only-field`
4. Testimonial: `section.testimonial/pinned-foot-quote-cards`
5. Contact form: `section.contact-form/underline-field-form`
6. Gallery portfolio: `section.gallery-portfolio/rhythm-rows`
7. Closing section: `section.cta-band/giant-type-sign-off`
8. Footer: `section.footer/final-image-footer`

## Type system

**Gravitas One** with **Libre Franklin**. A wide fat face with razor hairlines reads as a masthead; the plain gothic body gives it something to push against.
- Display: 64px, phone 38px, weight 400, tracking -0.01em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Libre Franklin 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Locomotive: bg #ffffff, surface #f5f3f4, text #000000, muted #797572, accent #cecdcc. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `wordmark-docks-to-nav`, **Scroll** `logo-docks-on-scroll`, **Hover** `row-fill`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Lazy Eight** (agency, silver) https://lazyeight.design/
- Doing: A brand studio that replaces all selling with a 30,000px silent scroll of four-up image blocks.
- Why it feels made: A single repeated module, tiny type and huge voids give the work total authority, and the identical block format makes very different clients feel curated.
- If imitated badly: Requires two dozen projects of equal photographic quality; with average imagery the emptiness just looks unfinished.

**Driftime Impact Report 2022** (agency, silver) https://2022.driftime.com/
- Doing: A studio's annual report paced like a printed magazine, with each chapter its own colour room and a custom ribbon-letter title.
- Why it feels made: A four-size type scale and fixed column rules stay constant while colour and titles change, so 67,000px of scrolling feels edited rather than long.
- If imitated badly: The ribbon letters only work as drawn lettering at full width, and the fixed rules look like table borders if they are heavy or always on.

**Paco Coursey** (portfolio, gold) https://paco.me
- Doing: A personal site reduced to one 640px column of prose and a three-column index, where typography alone carries the hierarchy.
- Why it feels made: Everything sits on a strict 28px baseline with one size, so it feels engineered, and the single italic serif phrase adds warmth without a second layout idea. Nothing is decorative.
- If imitated badly: Strip the type quality (Sohne, exact leading) and the same layout looks like an unstyled document.

## System choices

- Frames: `media.illustration/hand-inked-line`
- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/ink-then-grey-run-in`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.panel/floating-utility`
- Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/knockout-badge-tiles`
- Page rhythm: `layout.grid-system/fixed-column-grid`
- Load: `motion.load-sequence/wordmark-docks-to-nav`
- Scroll: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Hover: `motion.hover-state/row-fill`
- Phone menu: `mobile.phone-nav/word-for-the-menu`
- Showpiece: `type.type-as-image/full-width-statement`
- Showpiece: `motion.scroll-pin-or-scrub/companion-object`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: corner-anchored (seen on Ne Geurra, Theatre Memory, La Table de Joakim)

*Feeling: labels on the corners of a poster.*

No bar. Items are pinned to the corners of the viewport and the page scrolls freely beneath. It turns the browser window into a frame. Per Appelgren sets two 12/600 caps words at 16px inset. MetaLab floats a 32px glass Menu pill, a centred wordmark and a live clock over video. Sutera sets a mono wordmark, a boxed line and local time. Use it for portfolios, studios and art. Avoid it on content-heavy pages, because text will run under the corners and collide.

Use 16 to 32px insets and 11 to 16px type. Check every corner against every section, since nothing protects contrast. Blend modes or a section-aware flip usually solve it.

### Hero: bottom-left-lockup (seen on Function Health, Prototype, Structure)

- **Feels:** Cinematic, picture first, words second.
- **Use when:** The image is strong and its lower third is calm or dark. This is the safest good choice for photo-led brands.
- **Not when:** The subject's face or the product sits in that corner.
- **Recipe:** Image fills the viewport under an overlaid nav. Lockup anchored at 40 to 96px from the left and 44 to 75px from the bottom: an optional 30px tag, a 56 to 80px white headline at 1.0 leading, a 16 to 18px sub 520px wide, a 46 to 50px pill. Put something on the same bottom line at the right: three proof columns with 1px dividers (Function Health), a next-slide link, a project index, or a tiny pause control. Structure runs a strip of its latest work along the bottom edge. Almeida needs only one heavy word on a stage photo, with a pause button opposite.

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

### Testimonial: pinned-foot-quote-cards (seen on Devin Desktop, Motto, Polar)

*Feeling: plain statements, signed.*

Text cards with no logo, where the empty middle does the design. Use it when the person matters more than their employer, for consumer, health and small customers. Devin Desktop's are radius 0, 1px line, 20/25 quote with a hanging mark, and a three-line attribution with name in ink and role and company in grey. Polar sets three near-black tone cards just 4px apart so they read as one object. Headspace shows the strongest idea here: for mental health it names a theme instead of a person, 26/31 quote on a warm tint, because privacy is the point. A fourth card peeking past the rail stops the row feeling finished.

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

### Gallery portfolio: rhythm-rows (seen on HAY, Evenark, Lazy Eight)

*Feeling: someone laid this out by hand.*

The number of images per row changes on purpose, and everything stays locked to the same gutters. HAY runs three 410 by 495 portraits at a 50px gap, then two 640px landscapes, inside 55px page margins. Evenark runs one 1310px tile, then two at 643. Make Town breaks a two-up grid with full 1400px images. Lazy Eight sets four square tiles in a tight 4px block with 300px of empty page between projects. It needs nothing but a grid, and it is the simplest way to stop a gallery looking generated. Set the row pattern from the images, not from a repeating formula, so a strong picture gets the full width.

### Closing section: giant-type-sign-off (seen on Bun, Huge Contact, Temporal)

*Feeling: a poster.*

Display type carries it. Bun sets 117px heavy lines with the last words in accent, on a black band, beside a small install block. Huge ends on a 249px phrase with a tiny email field. Temporal runs 128px light type on a full gradient. Bohdan Ratiiev underlines one line with an 8px rule and sits mono columns just above it. The small thing next to the big thing is what makes it land.

### Footer: final-image-footer (seen on Katja Ogrin, Oxygen Pictures, SpaceX)

*Feeling: the credits roll over the last shot.*

There is no separate block. The last photograph or film runs to the page bottom, and the footer is laid inside it. SpaceX sets one row of 12px tracked caps links with a 36px round back-to-top button, and copyright at the right edge. a16z overlays an engraved 52px logo on the bottom of a film. Katja Ogrin fills a viewport with her photo and stacks nav, socials, a 33px email and a monogram. Huel lets a forest dissolve into near black behind its links. It needs a dark and quiet lower edge in the image itself, or a scrim drawn from the image's own colour. Test the contrast of every link, since a photo changes under them across widths.

### Frames: hand-inked-line (seen on Notion About, Claude Pricing, Monocle)

*Feeling: authored and warm. A person was here.*

**Use:** Pricing tiers, docs, emblems, newsletters. Warm-neutral AI brands, health, editorial and utility pages that risk feeling cold. **Avoid:** As large hero art, unless you have a real illustrator. Small sizes forgive a lot.

Keep the drawing strict and the tremor small. Thin line of 1.25 to 2px in near-black, sizes of 60 to 100px, with a pale fill patch or filled nodes as the only tone. Encode meaning where you can: branches multiply from tier to tier, so the glyph states the plan size. Use one flat colour at most. Thick-thin brush work suits editorial spots, and uneven 3px brush pen suits doodles in gutters. Keep ink out from behind text.

```html
<!-- Tremor, not wobble. Apply to a strict drawing at 1.25px. -->
<filter id="ink" x="-15%" y="-15%" width="130%" height="130%">
  <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="7" result="slow"/>
  <feDisplacementMap in="SourceGraphic" in2="slow" scale="1.5" result="a"/>
  <feTurbulence type="fractalNoise" baseFrequency=".5" numOctaves="1" seed="3" result="fast"/>
  <feDisplacementMap in="a" in2="fast" scale=".7"/>
</filter>
<g fill="none" stroke="var(--ink)" stroke-width="1.25" stroke-linecap="round" filter="url(#ink)">…</g>
```

**In the lab:** Took four rounds, and the side-by-side showed why. Filter on geometry looked mechanical. Heavier wobble looked childish. Only a thin 1.25px stroke on a strict grammar with filled nodes reached the real frame.

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

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: floating-utility (seen on International Magic, ACME, Loops)

*Feeling: a small object left on the page.*

A small fixed object that hugs its content. International Magic's caption tray is 56px tall, with width set by the text, so it changes from about 90 to 180px as projects change. Loops replaces the chat bubble with a 160x156 note carrying a calendar icon and a serif title. Anthropic parks a 384x234 news card 24px from the corner. Use one per page. Make it dismissible, and keep it off the content on phones.

### Surface ladder: graded-section-fades (seen on Apple Intelligence, Soundsensing, Stability AI)

*Feeling: sections breathe into each other, then stop cleanly.*

**Use it for:** Long, plain pages that need pacing without heavy colour. **Avoid:** Grading both ends of a section. A soft end on both sides is a smear.

Section opens at page white and grades to a 6% darker tint over its height, or over the top 70px only, then ends on a hard edge at the next section. Soft in, hard out. No divider. Tint stays within 7 L* of white.

Apple fades fog in from white over about 70px at the top of a band, then ends on a hard edge. Soundsensing grades from #ffffff to #edf3f1 across a whole section. Soft in, hard out is what keeps a section reading as a section.

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

### Icons: knockout-badge-tiles (seen on Svix, React Email)

*Feeling: stamped hardware. Each feature gets a maker's mark.*

**Use:** Developer tools and infrastructure, where a set of 6 to 12 features needs a strong repeating shape. **Avoid:** Friendly consumer pages, or when the container shape has no link to the brand.

Choose one solid container and one rule. A 56px near-black hexagon with white geometric glyphs knocked out of it: brackets, dots, bars, and no line icons. Or an 80px squircle at radius about 20, dark fill, 1px light border at 10%, a coloured brand glyph centred, 16px label below at 158px pitch. The container shape should echo the logo or product, because that is what makes it more than a tinted circle.

```js
// Flat-sided hexagon with softened corners. The glyph is knocked out, so it survives on any ground.
const hex = (s = 56, r = 5) => { const R = s / 2, p = [...Array(6)].map((_, i) => {
    const a = Math.PI / 3 * i - Math.PI / 2; return [R + R * Math.cos(a), R + R * Math.sin(a)]; });
  return `<path d="M${p.map(q => q.map(n => n.toFixed(1)).join(' ')).join('L')}Z" fill="var(--ink)"
    stroke="var(--ink)" stroke-width="${r}" stroke-linejoin="round" transform="translate(${s * .05} ${s * .05}) scale(.9)"/>`; };
// Glyphs inside are white shapes on a 24 box: bars, dots, brackets. No line icons, or the set stops reading as hardware.
```

**In the lab:** Matched Svix closely. I expected corner softness to matter and tested it: sharp and softened hexagons looked nearly the same at 56px, so match your interface radius and move on. What matters is that every glyph is built from the same bars and dots.

### Page rhythm: fixed-column-grid (seen on Gagosian, Polestar, Sequoia)

**Feel.** Museum catalogue. Everything has its place.
**Use when** unlike subjects must sit together for a long way: exhibitions, products, listings, editorial. **Avoid** in a short marketing page where the discipline goes unseen.
**Recipe.** Gagosian: x=124 to 1316, three 376px columns with 32px gaps, with sections, nav, footer and carousels all starting from x=124, 532 or 940. Images inside a 376px column are 334px wide, so text stays slightly wider than the image above it. Polestar: 1216px between 112px margins, six 176px columns with 32px gaps (208 pitch), with copy and link cells at x=112, 528, 944. Sequoia: three 1px rules at x=48, 720, 1392 with 640px tiles inset 16px.

### Load: wordmark-docks-to-nav (seen on BIG, Royal Ontario Museum, LEDUP)

*Feeling: an introduction, then it steps aside.*

One object makes the whole trip. BIG holds a wordmark on black, then the panel rises as a shrinking band while the mark travels up-left into its nav slot, with the list already in place underneath. Royal Ontario Museum resizes its wordmark into a bottom-left lockup by about 4s. Use FLIP so a single element travels, and put the real logo in the nav so it is ready to land on. See `load.md` Logo to nav. The match between the end of this move and the resting nav is what sells it, so check the frame where they meet.

### Scroll: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Hover: row-fill (seen on Work & Co, Vercel Pricing, Olivier Larose)

*Feeling: the whole line is the target.*

The row takes a fill edge to edge. Olivier Larose inverts to black in 0.2s. Make Town fills a hairline row solid black and adds an arrow. Work & Co only changes the text to the accent over 0.25s, leaving rules and position alone. Use it for indexes and lists where each row is one link.

### Phone menu: word-for-the-menu (seen on Prototype, Structure Consulting Engineers, Cognition)

*Feeling: written, not iconographic.*

No icon at all. Prototype sets an italic 20px Menu with a 1px underline, reusing its own link style. Cognition sets a plain 15px word, in keeping with its refusal of chrome. Studio Dado and Locomotive use a quiet text link top right. Prägen Hätlen sets a mono `[+] MENU`. Use it for studios, editorial and type-led sites. It tells a first-time reader exactly what it does, and it reads as part of the page's voice. Pad it to a 44px target with padding and negative margin, so the text stays small.

```css
.mn{font:italic 400 20px/1 var(--font-display);text-decoration:underline;text-decoration-thickness:1px;
  text-underline-offset:4px;padding:14px 4px;margin:-14px -4px}
```

### Showpiece: full-width-statement (seen on Kinfolk, Oxygen Pictures, Make Town)

A hold-your-breath moment between sections. Seen on 7 sites.

**Use it for:** A section break or a sign-off. Once per page.

**Avoid it for:** More than two lines, or copy that is not worth the space.

**Recipe:** A short line scaled to fill the container: 135-318px, line-height 0.75-0.85, tracking -0.04 to -0.05em, alone in a plain viewport, or two lines force-justified to the margins. Once per page, as a section break or sign-off. Fit the size by measuring.

```css
.line      { margin: 0 16px; }
.line span { display: inline-block; white-space: nowrap; font: 600 100px/.85 var(--font-display);
             letter-spacing: -.05em; margin-left: -.03em; }
/* Add data-fit to .line and use the script under cropped-footer-wordmark. */
```

<a id="title-behind-object"></a>

### Showpiece: companion-object (seen on InkTree, Sidekick, Dogstudio)

*Feeling: one thing carries the story.*

An object stays with you through several sections. Sidekick's slit-cut square rotates with scroll beside passing copy. Dogstudio's wolf re-skins per project. Swirple's phone holds while headings pass behind it. Use it to bind a long page into one piece. Keep the object simple enough to live next to text.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.