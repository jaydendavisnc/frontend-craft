# Your direction (seed 1005)

Reads as **devtool**, surface **landing**, register **photo-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Resend, a gold devtool page)

1. Navigation: `nav.floating-pill/condense-to-capsule`
2. Hero: `hero.object-3d/spotlit-object-on-dark`
3. Logo wall: `section.logo-wall/compliance-seals`
4. Code block: `product.code-block/dark-card-on-colour-band`
5. Ui fragment: `product.ui-fragment/card-on-photo`
6. App window: `product.app-window/dissolving-window`
7. Feature grid: `section.feature-grid/card-rail`
8. Feature tabs: `section.feature-tabs/typographic-index`
9. Testimonial: `section.testimonial/portrait-story-cards`
10. Closing section: `section.cta-band/glow-field-close`
11. Footer: `section.footer/local-hours-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Asset** with **Karla**. Over twice normal width, so one short word per line becomes a band of black.
- Display: 64px, phone 38px, weight 400, tracking 0em, leading 1.15. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Karla 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Asset&display=swap https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap

## Palette

From ECI: bg #ffffff, surface #e0f8eb, text #000000, muted #757575, accent #1b9a55. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `product-story-assembles`, **Scroll** `exploded-teardown`, **Hover** `single-accent-on-hover`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Resend** (devtool, gold) https://resend.com
- Doing: A developer email API presented as a dark luxury object: serif headline, matte 3D renders and real product fragments on pure black.
- Why it feels made: Every section opens with a lit sculptural icon and a tightly tracked gradient heading, and all cards share one hairline-plus-top-highlight treatment. Colour appears only as small section-specific glows on an otherwise black page.
- If imitated badly: Without high-end renders and real UI fragments, black plus glow collapses into the generic dark SaaS template.

**Figure** (ai, gold) https://www.figure.ai
- Doing: Full-bleed cinematic robot film chapters with a tiny bottom-left caption and one outlined button, ending in a numbered index footer.
- Why it feels made: Real film and photography do all the work; type is small, uppercase and anchored to the same bottom-left grid on every chapter, with a graduated scrim that keeps contrast without a visible overlay.
- If imitated badly: Needs genuinely cinematic footage; with stock imagery the sparse type reads as empty.

**Lightspeed** (other, gold) https://lsvp.com
- Doing: A VC firm site that treats founders' portraits as the hero, scattered over a cream page that dissolves into a sky-blue gradient as you scroll.
- Why it feels made: Two-colour world (cream and sky blue) with warm portrait backgrounds as the only saturated content; a single thin sans at one weight keeps it calm; blurred-text scroll transitions feel physical.
- If imitated badly: Without the real portrait art direction and the soft vertical gradient, the scattered layout reads as a random collage.

## System choices

- Headline: `type.display-headline/flat-accent-phrase`
- Section headings: `type.section-heading/eyebrow-title-lede-stack`
- Primary button: `button.primary/nested-arrow-chip`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/wordmark-with-device`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/construction-lines`
- Load: `motion.load-sequence/product-story-assembles`
- Scroll: `motion.scroll-pin-or-scrub/exploded-teardown`
- Hover: `motion.hover-state/single-accent-on-hover`
- Phone menu: `nav.mobile-menu/accordion-sheet-pinned-cta`
- Showpiece: `motion.scroll-pin-or-scrub/logo-docks-on-scroll`
- Showpiece: `motion.product-demo-loop/generative-glyph-loop`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: condense-to-capsule (seen on mymind, Bauhaus Clock, Stripe Sessions)

*Feeling: the bar draws itself in as you start to read.*

At the top there is no bar, only a row on the hero. Once you scroll, it gathers into a capsule. This is the best-looking behaviour in the family, because the object appears exactly when it becomes useful. Six of the ten sites here are gold. mymind goes from a clear 1320px row to a 980x60 pill 25px from the top, at 80 percent white with 20px blur. Amplitude keeps 1380 wide. Stripe Sessions shrinks its button from 40 to 32px on the way. Inngest docks into a 40px black slab at radius 6. Use it on any marketing page with a strong hero. Avoid it on a page with no first-screen drama, where the change has nothing to resolve.

Set 54 to 64px tall, 16 to 25px from the top, radius 27 to 100. Animate `max-width` on the inner element over about 450ms on an expressive curve, and fill and shadow over 250ms. Toggle at 40px of scroll.

```css
.nav{position:fixed;z-index:50;inset:0 0 auto;display:flex;justify-content:center;padding:14px 40px;pointer-events:none;
  transition:padding .35s cubic-bezier(.22,1,.36,1)}
.nav-in{pointer-events:auto;flex:1;max-width:1360px;height:60px;padding:0 10px 0 24px;display:grid;
  grid-template-columns:1fr auto 1fr;align-items:center;border-radius:100px;
  transition:max-width .45s cubic-bezier(.22,1,.36,1),background-color .25s ease,box-shadow .25s ease}
.nav.stuck{padding-top:24px}
.nav.stuck .nav-in{max-width:980px;background:color-mix(in srgb,var(--bg) 80%,transparent);
  -webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);
  box-shadow:0 0 0 1px var(--line),0 12px 32px -12px color-mix(in srgb,var(--ink) 22%,transparent)}
```

```js
const n=document.querySelector('.nav'),f=()=>n.classList.toggle('stuck',scrollY>40);
addEventListener('scroll',f,{passive:true});f();
```

### Hero: spotlit-object-on-dark (seen on Plvs Ultra, Teenage Engineering, Garuda 2026)

- **Feels:** A stage. One thing matters.
- **Use when:** A device with presence, and a real render.
- **Not when:** The render is ordinary. Darkness makes it more obvious.
- **Recipe:** Pure black, the device rising from the bottom centre at about 510px, back-lit, floor glow in the lower corners falling to black, one saturated element as the only colour. Teenage Engineering has no headline, and its nav is a row of line-art tiles. Plvs Ultra sets 90/1 weight 700 at -0.067em over a line-drawn chip with a red beam rising behind the text.

### Logo wall: compliance-seals (seen on Customer.io, Tana, Wispr Flow)

*Feeling: the serious part, handled.*

Trust as plain fact, which buyers in regulated fields look for first. Redraw everything as one family, because supplied badges are a jumble of clip art. Wispr Flow sets three 106px circles with a hairline green ring, a large faint engraved icon, and the standard's name over it. Customer.io runs five 103px ruled cells with 32px line icons directly above its footer. Tana states status in plain words inside 36px chips, including what is not finished. Only claim what you hold.

### Code block: dark-card-on-colour-band (seen on Ideogram, UploadThing, Anime.js)

*A dark object on a loud ground.* Quality 5/5, 3 sites.

**Use:** Bold-colour and photo-led pages that need one developer moment. **Not:** Precision sites, where saturated bands feel out of register.

**Recipe:** Full-bleed saturated band. Copy left, H2 at 32px. Right, a near-black card about 600x326, radius 8, language header over hairline, mono 12, soft shadow. The endpoint string changes over time. Or pair two unequal windows, top-aligned at different heights.

### Ui fragment: card-on-photo (seen on Cal.com, Polar, Revolut)

*A person's life with software lightly on top.* Quality 5/5, 7 sites.

**Use:** Human or consumer products. It keeps warmth on a product page. **Not:** When the photo has its subject under the card.

**Recipe:** Portrait or textured photo, radius 6-20. One sharp card pinned low, inset 20px, radius 16, 60px rows of 14px type. Or 270px frosted cards at 85% white. Photo stays at real scale, card carries all the detail, and one row fades to imply life. Cal.com halftones its photo, which turns a casual snapshot into a graphic. Revolut uses no card at all: a 1px 40% white outline with text and soft shadow. Polar puts a near-black window on grainy sand with no colour anywhere, so the plate and UI contrast by texture.

```html
<style>
.plate{position:relative;width:min(600px,100%);height:730px;border-radius:20px;overflow:hidden}
.plate img{width:100%;height:100%;object-fit:cover;display:block}
.plate::after{content:"";position:absolute;inset:0;mix-blend-mode:multiply;background:radial-gradient(circle,#000 0 34%,#fff 42%) 0 0/4px 4px} /* optional halftone */
.card{position:absolute;z-index:1;left:20px;right:20px;bottom:20px;border-radius:16px;background:var(--bg);box-shadow:0 12px 40px rgba(0,0,0,.28)}
.r{display:grid;grid-template-columns:32px 1fr auto;gap:1px 12px;align-content:center;align-items:center;height:60px;padding:0 16px;border-bottom:1px solid var(--line);font-size:13px;line-height:17px}
.r .av{grid-row:1/3;width:32px;height:32px;font-size:12px}.r time{color:var(--ink-3)}.r .p{grid-column:2/3}.r .p span{color:var(--ink-2)}
.r.old{opacity:.32}
</style>
<div class="plate"><img src="photo.jpg" alt="">
 <div class="card">
  <div class="r old"><span class="av">IB</span><b>Ilse Brandt</b><time>08:05</time><div class="p trunc">Shift swap <span>Moving the Lido date</span></div></div>
  <div class="r"><span class="av">TR</span><b>Tomas Reyes</b><time>16:22</time><div class="p trunc">Saturday load-in <span>Can the van arrive by three?</span></div></div>
 </div></div>
```

### App window: dissolving-window (seen on Framer, Better Auth, Sierra)

*The software fades into the page, so nothing has to end.* Quality 5/5, 3 sites.

**Use:** Dark sites, and any section with a complex product that should not take over. **Not:** When the fade would cut the one thing you need people to read.

**Recipe:** Window or shell with 1px line and radius 16-24 dissolves into the page: mask the lower third, or the right and bottom edges, to page colour. Text stays real and dims with distance. No hard base, no shadow halo, no fake window edge. Framer masks a 13-14px CMS rebuild so rows dim with distance. Better Auth dissolves a greyscale dashboard into white. Sierra draws the whole console pale on a dot grid, with one green chart and one blue button left in colour.

### Feature grid: card-rail (seen on Apple Intelligence, Asana, CleanShot X)

*6 sites, quality 4.* Generous: there is more than fits. Use for eight or more parallel items such as agents, templates or stories. Skip it when every item must be read, because most people will not scroll sideways.

Recipe: cards of 304 to 400px at a 20 to 22px gap, running past the right edge so the last is cut by the viewport. That cut is the scroll cue. 36 to 40px round controls bottom or top right, the disabled one at 50%. Better Stack gives each product its own rail.

Seen on Asana, Apple, CleanShot, Monzo, Better Stack. See `references/motion/scroll.md`, recipe 2, for a pinned form.

### Feature tabs: typographic-index (seen on Baseten, Decagon, North Hub Partners)

*9 sites, quality 4.* The list is the design. Dramatic and confident. Use for services, channels and products where the names are good. Fits agencies and bold brands.

Recipe: a stack of very large names, 28 to 100px, on 1px rules or on none. Active full ink, others about 25 to 55%. A small preview photo or card swaps beside the list. Decagon stacks 60px channels with a photo that swaps under a rising tint. North Hub uses 36px serif rows at 146px pitch, and a progress line fills the rule. Nurx uses 16px mono caps on 51px rows in a tinted panel. Athletics scatters chips over 100px names.

Seen on Decagon, Baseten, North Hub, Nurx, Studio Unlmtd, Athletics, Figma FigJam. Suits photo-led, type-led, bold colour.

### Testimonial: portrait-story-cards (seen on Soundsensing, Tana, Codecademy)

*Feeling: real people, and you can see them.*

The photograph carries the card. Use it for consumer, health, education and nonprofit work, whenever the people are the story. Avoid it with stock photos, because this variant has nowhere to hide them.

Tana darkens the lower half of a 692px photo at radius 32 and sets a 28/36 serif quote at 85 percent white, with a small glass tag naming the language the person spoke. GiveDirectly uses 440px white cards with a 400px photo on top, a headline over a bottom gradient, then a 16/24 quote with the key figure bolded. Soundsensing's cards use site photographs of work actually being done, flush to a warm body, and they are a lesson for any trade: show the job, not the person smiling at the camera. Huel lays a frosted 12px blur panel across a 276 by 484 portrait's lower half. Talkspace steps a pastel block into the photo with 20px notches.

### Closing section: glow-field-close (seen on CleanShot X, mymind, Liquid AI)

*Feeling: stage lighting.*

Colour pooled at the edges of a field, with type on clean ground. CleanShot runs a dark field with magenta and blue high behind a centred app icon. The analyst called these glows dim, and my first version took that at its word and looked dead beside the real thing, where the magenta is plainly visible at the top. Liquid raises two lilac blurs from the bottom corners of a white cell over a faint grid. Lyra pools blue and peach in the corners of a white panel. Substack sets one huge peach blur behind the headline. Keep the brightest point away from the text.

```css
.close{position:relative;overflow:hidden;isolation:isolate;background:var(--bg);text-align:center;padding:128px 24px 136px}
/* --g1 and --g2: two deep hues from your palette. High, wide and visible. Behind the icon, never the text */
.close::before{content:"";position:absolute;z-index:-1;left:0;right:0;top:-24%;height:92%;filter:blur(48px);
  background:radial-gradient(26% 72% at 42% 44%,var(--g1),transparent),radial-gradient(26% 80% at 66% 30%,var(--g2),transparent)}
.icon{width:80px;height:80px;border-radius:18px;margin:0 auto 32px;display:grid;place-items:center;background:var(--accent);color:var(--bg);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--ink) 35%,transparent),0 12px 32px -8px rgba(0,0,0,.6)}
.icon svg{width:44px;height:44px;fill:none;stroke:currentColor;stroke-width:3}
.close h2{font:700 40px/48px var(--font-display);letter-spacing:-.022em;max-width:15em;margin-inline:auto;text-wrap:balance}
.close p{font-size:18px;color:var(--ink-2);margin:12px auto 0;max-width:36em}
.b{margin-top:32px;padding:0 22px;border-radius:14px;background:var(--ink);color:var(--bg);font-weight:600}
@media(max-width:700px){.close{padding:96px 20px}.close h2{font-size:32px;line-height:38px}}
```

### Footer: local-hours-footer (seen on Dishoom, Guggenheim Visit, Villa Aurelia)

*Feeling: the sign on the door.*

For anywhere people visit, the footer is where they check whether you are open. Sam Hoult sets a script logo at 80px left and hours as three plain lines right, on a deep espresso ground, then one row of links and round outlined socials, a faint rule, and a credit line. Isolabella della Croce gives hours per service: cellar, pool, check-in, reception. Fenriz Gym right-aligns the day labels to bold times, so the eye runs down a single gutter. Guggenheim opens its footer with Hours, Address and Tickets as three columns. Always include the street address, a working phone link and the real hours, in text. Local footers should feel like the place, so a crest, a pattern band or a drawn border is welcome here. Skip it for online-only businesses, where hours mean nothing.

```css
.foot{max-width:1312px;margin:0 auto;padding:0 64px 56px}
.top{display:grid;grid-template-columns:1fr auto;align-items:start;gap:40px;padding-bottom:64px}
.logo{font:italic 400 80px/1 var(--font-display);color:var(--accent)}
.logo small{display:block;font:400 13px/1 var(--font-text);letter-spacing:.42em;color:var(--ink-2);margin-top:10px}
.hours{display:grid;grid-template-columns:auto auto;gap:10px 32px;font-size:16px;line-height:24px}
.hours dt{color:var(--ink-2)}.hours dd{margin:0;text-align:right;font-variant-numeric:tabular-nums}
.hours .head{grid-column:1/-1;color:var(--ink);font-weight:500}
.row{display:flex;justify-content:space-between;align-items:center;padding-bottom:32px;border-bottom:1px solid var(--line)}
.row nav{display:flex;gap:40px;font-size:16px;font-weight:500}
.row address{font-style:normal;font-size:16px;color:var(--ink-2)}
.row address a{color:var(--ink);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--ink-3)}
.base{display:flex;justify-content:space-between;padding-top:24px;font-size:14px;color:var(--ink-3)}
@media(max-width:760px){.foot{padding:0 16px 32px}.top{grid-template-columns:1fr}.logo{font-size:48px}.row{flex-direction:column;align-items:flex-start;gap:16px}.row nav{flex-wrap:wrap;gap:12px 24px}.base{flex-direction:column;gap:8px}}
```

### Headline: flat-accent-phrase (seen on Hims, Greylock, Supabase)

Direct and branded. The claim is the colour. Seen on 12 sites.

**Use it for:** Developer tools and SaaS with a strong brand hue, and photo-led pages where the second colour can be taken from the image.

**Avoid it for:** When the accent appears nowhere else. A coloured word that matches nothing looks picked from a swatch.

**Recipe:** Headline in one ink with a single clause or final line in one flat brand colour, no gradient, same size and weight, 46-80px, line-height 1.0-1.1. The coloured words are the claim, not decoration. Repeat the hue on the primary action, or take it from the hero photograph.

**Why it works:** Colour on the claim tells a skimming reader exactly which words matter. The best example changes the second colour for each photograph, so type and image look art-directed together.

<a id="tonal-gradient-fill"></a>

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

### Primary button: nested-arrow-chip (seen on Scale AI, Wildbran, Ai2)

*Feeling: two parts that fit together.*

The label and the arrow are separate shapes. Scale nests a 32px white tile with radius 6 inside a 40px black button at radius 8, with a 4px inset all round. Ai2 sets a pink pill with a detached 40px disc touching its end. Freshly Launched puts a 36px white disc inside a butter pill. Hover moves only the chip, which gives the plain pill its one moment of life.

This is one of the cheapest ways to give an ordinary pill an identity. Use one form, and let the chip recur in text links. Start from outer radius minus inset, and round it up slightly at small sizes, as Scale does, so the tile does not look sharper than its parent. Avoid it on buttons under 36px, where the chip has no room.

```html
<button class="b-nest">Book a demo <i><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2l4 4-4 4"/></svg></i></button>
```

```css
.b-nest{--r:8px;--in:4px;display:inline-flex;align-items:center;gap:12px;height:40px;padding:0 var(--in) 0 16px;border:0;border-radius:var(--r);white-space:nowrap;
  background:var(--ink);color:var(--bg);font:400 15px/1 var(--font-text);cursor:pointer}
.b-nest i{display:grid;place-items:center;width:32px;height:32px;border-radius:calc(var(--r) - var(--in)*.5);background:var(--bg);color:var(--ink);transition:translate .2s}
.b-nest:hover i{translate:2px 0}
.b-nest:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

### Surface ladder: single-paper-surface (seen on BIG, Nicole Heim Studio, 1X)

*Feeling: confidence by absence. The page is a sheet and the work is on it.*

**Use it for:** Architecture, studios, luxury goods, any site with excellent photographs. **Avoid:** Sites with weak imagery. With no surfaces, there is nothing to hide behind.

One surface only: #fff, #fffdfa or #fefffb, with no cards, tints, borders or radii. Text black or near-black. Photographs and type supply all depth, butted directly against the page.

BIG uses #ffffff with only black glyph squares and photographs. Nicole Heim uses #fefffb paper with pure black text, and the slight warmth sharpens the black. 1X masks its hero render to the exact ground colour so no image edge appears.

### Logo: wordmark-with-device (seen on ECI, Seed, Telkom-OT)

*Feeling: modest and smart. Type first, one small idea.*

**Use:** The safest strong choice when inventing a brand. Technical and scientific brands, and any site with a good type system. **Avoid:** When the device is a generic flourish, such as a dot on any word.

Set the name in the dealt type at nav size, then add one device with a reason. A solid dot of .42em that repeats large on every package. Short bars of .075em on selected letters. A version number at 13px in a 1px chip with a 4px radius, on an open-source project. Letters redrawn as 1px construction lines at footer scale. Tight tracking of -.02 to -.03em on the word. The device must survive at nav size and pay off at large size.

**In the lab:** Held at every size down to 14px type, with no special master. It is the most forgiving variant here.

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

### Page rhythm: construction-lines (seen on Aniket, Cognition, Prototype)

**Feel.** Drafting marks. Slightly nerdy, and more personal than even columns.
**Use when** you want a signature from the grid itself, in devtools, research, or a portfolio. **Avoid** in a mainstream consumer register.
**Recipe.** Uneven rules at x=48, 160, 1280, 1392 (Zed) or x=64, 326, 1114, 1288 (Cognition), or four rails at x=200, 410, 1030, 1240 (Aniket). Line colour 5 to 8% ink. Add one small mark and repeat it everywhere: white diamonds at crossings, or a 2x8px grey tick capping each line. Zed also fills the outer margin between its paired rails with a faint 8px graph texture, which keeps the margins from reading as dead space.

### Load: product-story-assembles (seen on Stripe Climate, Apple Intelligence, Soundsensing)

*Feeling: the load is the demo.*

The load plays what the product does. On Stripe Climate a colour band slides down to rest as a receipt fades in and a phone rises 8px through it, with a banner last. On Soundsensing a status card shows three green dots and one turns amber as an alert appears. Tana starts with empty frames, then adds video, then the speaker ring and a live caption, so it reads as a running call. Use it when your product has a sequence worth showing, and limit it to five beats. Each beat must be a separate object. Static copy on the left keeps it readable.

### Scroll: exploded-teardown (seen on Prägen Hätlen, Scale AI, VanMoof)

*Feeling: understanding by taking it apart.*

One object separates. Prägen Hätlen scrubs a watch through rotation, explosion and component close-ups over about 16,000px, with ground tone stepping between chapters and a persistent CTA. Plvs Ultra separates a chip stack along dotted guides. Scale AI fans panes in perspective. Use it for physical products and layered systems. Prerender frames unless you have a real model. See `scroll.md` Image sequence scrub on canvas.

### Hover: single-accent-on-hover (seen on Affirm, Cloudflare Workers, LiveKit)

*Feeling: colour appears under the pointer.*

The page rests in neutrals, and every control resolves to one accent. Liquid AI takes links, titles and rows to violet in 0.15s. Affirm fills white pills with lavender. Canopy takes navy to indigo everywhere. Use it to make a quiet page feel branded without spending colour at rest. The accent must clear contrast on the ground at every step of the transition.

### Phone menu: accordion-sheet-pinned-cta (seen on Claude, Claude Pricing, Stripe)

*Feeling: everything in its place, and the next step under your thumb.*

The standard for products, and it earns that. A full-height sheet with rows, a disclosure on groups, plain rows for leaf pages, and actions pinned at the base. Claude sets five 18px rows on a 76px pitch with hairlines and thin plus marks, and rows fade in top-down. Stripe sets 18/600 on 52px with dotted rules, accent chevrons, and a small bordered card of help links. Cal.com drops the hairlines, and pins a tinted tray with three stacked buttons. Use it for any product with grouped pages. Avoid it with under four rows, because a sheet of accordions then has nothing to fold.

Use a plus for expanding in place and a chevron pointing right for a drill-down, and do not mix the two. Animate height through `grid-template-rows` from `0fr` to `1fr`, which needs no measuring. Rotate the plus 45 degrees.

```css
.sheet{position:fixed;inset:72px 0 0;z-index:50;display:flex;flex-direction:column;padding:12px 24px calc(16px + env(safe-area-inset-bottom));
  background:var(--bg);overflow:auto;visibility:hidden;opacity:0;transition:opacity .16s ease-out,visibility .16s}
.open .sheet{visibility:visible;opacity:1}
.row{border-bottom:1px solid var(--line);opacity:0;translate:0 6px}
.open .row{animation:rise .32s cubic-bezier(.22,1,.36,1) forwards;animation-delay:calc(var(--i)*45ms + 40ms)}
@keyframes rise{to{opacity:1;translate:0 0}}
.row>button,.row>a{width:100%;height:76px;display:flex;align-items:center;justify-content:space-between;
  font-size:18px;letter-spacing:-.005em;text-align:left;color:color-mix(in srgb,var(--ink) 86%,var(--bg))}
.plus{position:relative;width:16px;height:16px;color:var(--ink-2);transition:transform .22s ease}
.plus::before,.plus::after{content:"";position:absolute;left:0;right:0;top:7.5px;height:1px;background:currentColor}
.plus::after{rotate:90deg}
[aria-expanded=true] .plus{transform:rotate(45deg)}
.sub{display:grid;grid-template-rows:0fr;transition:grid-template-rows .24s cubic-bezier(.4,0,.2,1)}
[aria-expanded=true]+.sub{grid-template-rows:1fr}
.sub>div{overflow:hidden}
.sub a{display:block;padding:7px 0;font-size:16px;color:var(--ink-2)}
.foot{margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:16px}
.foot a{height:44px;display:grid;place-items:center;border-radius:8px;font-size:16px;font-weight:500}
.foot .o{box-shadow:inset 0 0 0 1px var(--line-strong)}.foot .s{background:var(--ink);color:var(--bg)}
@media(prefers-reduced-motion:reduce){.open .row{animation:none;opacity:1;translate:0 0}}
```

### Showpiece: logo-docks-on-scroll (seen on Per Appelgren, Acne Studios, Nicole Heim Studio)

*Feeling: the brand appears once.*

One logo element travels. Monocle collapses a 686px masthead to a 195px wordmark in the utility row. Per Appelgren's centred name rises and shrinks to the top. Acne Studios leaves the header centre empty until the hero wordmark has passed, so the brand shows once per screen. Use it for editorial, fashion and portfolios with a real wordmark. Use transform scale and keep both ends on one axis.

### Showpiece: generative-glyph-loop (seen on Sequoia, Evenark, Ghostty)

*Feeling: drawn, not filmed.*

A tiny loop drawn from characters. Ghostty flips an ASCII ghost like a flipbook, with no canvas or video. Yamauchi swaps coloured squares on the logo's own grid. Sequoia draws portfolio marks in jittery chalk on a canvas. Evenark shows a ring of dots orbiting a disc, client work actually running. Use it for technical or craft brands. Stepped timing at 6 to 12 frames a second is what keeps it feeling hand-made. See `webgl.md` Dither and halftone.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.