# Your direction (seed 1010)

Reads as **ai**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Kata.ai, a silver ai page)

1. Navigation: `nav.floating-pill/detached-corner-controls`
2. Hero: `hero.full-bleed-media/bottom-left-lockup`
3. Logo wall: `section.logo-wall/few-logos-big-room`
4. Contact form: `section.contact-form/stepped-form`
5. Case study: `section.case-study/quote-media-split`
6. Stats: `section.stats/ruled-stat-cells`
7. App window: `product.app-window/inset-sheet-window`
8. Faq: `section.faq/split-title-rows`
9. Feature tabs: `section.feature-tabs/selected-row-list`
10. Closing section: `section.cta-band/composer-close`
11. Footer: `section.footer/colour-flood-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Dela Gothic One** with **Schibsted Grotesk**. One of the best black headline faces, already tight, so it only wants a calm newsroom sans.
- Display: 64px, phone 38px, weight 400, tracking -0.02em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Schibsted Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap

## Palette

From Claude Pricing: bg #fbfaf6, surface #ffffff, text #131311, muted #6b6a64, accent #d0634c. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **plain inventory**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `iris-or-sheet-reveal`, **Scroll** `window-opens-to-full`, **Hover** `ring-grow`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Kata.ai** (ai, silver) https://kata.ai/
- Doing: Enterprise AI presented with graded photography, sky-blue gradients and calm cards, for a regional corporate buyer.
- Why it feels made: The light DM Sans, tight tracking and a tidy tab frame feel current, and the stacked image deck is a real idea. Font fallbacks and many generic AI-looking photos keep it below top tier.
- If imitated badly: AI-generated stock portraits and full-colour logos in grey boxes quickly read as an enterprise template.

**TR Studio** (architecture, gold) https://trstudio.co.uk/
- Doing: An architecture studio's site where the monogram stays pinned to the viewport corners and projects drift through a bone-coloured frame like rooms seen through a doorway.
- Why it feels made: Four fixed corners, two rotated labels and one centre axis hold the page, so photographs can vary freely, and colour steps from bone to oxblood to periwinkle with no radii, shadows or rules.
- If imitated badly: Without top-tier interior photography and a properly drawn monogram, the empty frame looks unfinished and the centred axis looks like a wedding template.

**Sonder** (hospitality, gold) https://sonder.com
- Doing: A booking-first hotel and apartment marketplace in warm paper tones, where a serif headline with copper italic, a navy action colour and dense listing cards stay organised by consistent 8px radii.
- Why it feels made: Restrained two-colour system (navy actions, copper emphasis) on warm cream, every card uses the same radius, border and photo ratio, and information-dense listings stay calm.
- If imitated badly: Prata with italic accent and copper cheapens quickly if photography is not editorial; listing density needs strict alignment.

## System choices

- Headline: `type.display-headline/caps-block`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/ringed-halo-pill`
- Surfaces: `surface.panel/cut-silhouette-panel`
- Surface ladder: `atmosphere.light-surface-ladder/page-tint-drift`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/pixel-grid-icons`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/iris-or-sheet-reveal`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `motion.hover-state/ring-grow`
- Phone menu: `mobile.phone-nav/logo-action-menu`
- Showpiece: `section.feature-sticky-scroll/pinned-chapter-stage`
- Showpiece: `motion.scroll-pin-or-scrub/sticky-utility-header`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: detached-corner-controls (seen on 099, Comet, Elyx)

*Feeling: there is no bar, only two buttons.*

The bar dissolves into separate objects. On Perplexity's Comet page the wordmark collapses into a 52px white circle on the left, with a teal pill and a 48px circle on the right. Discord shows its full links at the top, then leaves only a logo pill and a Log In pill. 099 keeps three boxed mono buttons over content. Elyx has one pill and nothing else. Use it for immersive pages, launches and long reads. Avoid it where people need routes, and check that content cannot sit behind the corners at their most awkward moment.

Set 12 to 40px from the edges, soft shadow, 40 to 52px tall. Corners collide with content more often than bars do, so test against your busiest section.

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

### Logo wall: few-logos-big-room (seen on Nuro, Apptronik, Athletics)

*Feeling: a short list of serious partners.*

Three to five marks with an enormous amount of space. Scarcity reads as selection, and this is the right wall for a small client list. Nuro centres five black marks on a 230px pitch in a 420px tall panel at radius 32, and the empty padding gives each partner its weight. Apptronik sets five grey-white marks in a 300px black tile. One Medical shows three 150px marks in brand green. Paddle sets 40px black wordmarks on a flat 217px sand band, cut by the viewport with no fade. Athletics recolours nine logos to one ink on lime.

### Contact form: stepped-form (seen on Stripe Contact Sales, Intercom Contact, Golden Assisted)

*Feeling: this will be quick.*

Split a long form into steps so that the first looks easy. Intercom's first step asks only for email and company size, beside a sky panel carrying logos, with a mono step count. Stripe sets a 608px card with three tab markers over its ribbon and labels at the left of each field. Figma centres a 540px form of filled fields with labels inside, a "Step 1 of 2" caption and a black Next. The analyst read these fields as 46px tall, and they are about 58px, which leaves room for the label inside. Magram numbers its tabs 01 to 03. Golden uses large option rows rather than inputs, so a question takes one tap.

```css
.wrap{width:min(540px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.step{display:flex;justify-content:space-between;font-size:13px;color:var(--ink-2);margin-bottom:10px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.f{position:relative;margin-bottom:8px}
/* the label sits inside the filled box, so the box is the only surface and nothing needs a border */
.f label{position:absolute;left:10px;top:8px;font:400 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.02em;text-transform:uppercase;color:var(--ink-2);pointer-events:none}
.f input,.f select{width:100%;height:58px;padding:22px 10px 6px;border:0;border-radius:8px;background:var(--surface);font-size:16px;outline:0;box-shadow:inset 0 0 0 1px transparent;transition:box-shadow .12s;appearance:none}
.f input:focus,.f select:focus{box-shadow:inset 0 0 0 2px var(--ink)}
.f svg{position:absolute;right:12px;top:22px;width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.5;pointer-events:none}
form button{width:100%;height:46px;margin-top:8px;border:0;border-radius:8px;background:var(--ink);color:var(--bg);font-size:15px;font-weight:500;cursor:pointer}
```

### Case study: quote-media-split (seen on Factory, Ramp, Forma24)

*Feeling: a film and a statement, side by side.*

The strongest homepage module. One card, half media and half quote. Factory's is 1392 by 470, radius 12, split 60/40, with a co-brand lockup centred on a still, a 56px dark play disc with a mono label, and on the right a logo, a tight 36/36 quote, name, mono role, and two buttons pinned low. Ramp takes a taller form: a heading and link top left, a small hung quote pinned to the floor of the column, and a 690px tall media tile, which leaves a big deliberate gap. Zapier uses a serif quote with 48px orange metrics beside a sky plate.

Choose the photo for the lockup. It must be quiet where the type sits, because my first attempt used a busy bright skyline and the lockup vanished.

```css
.s{display:grid;grid-template-columns:60fr 40fr;height:470px;border-radius:12px;overflow:hidden;background:var(--bg)}
.m{position:relative;overflow:hidden;color:#fff}.m img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.m::after{content:"";position:absolute;inset:0;background:rgba(8,12,16,.44)}     /* lockup must be the brightest thing */
.play span{width:56px;height:56px;border-radius:50%;background:#0d0d0d;box-shadow:0 0 0 1px rgba(255,255,255,.2)}
.t{padding:40px 36px 36px;display:flex;flex-direction:column}
.t blockquote{font:400 34px/36px var(--font-display);letter-spacing:-.022em;margin-top:32px;text-wrap:pretty}
.who span{display:block;font:400 12px/18px ui-monospace,monospace;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}
.btns{margin-top:auto;display:flex;gap:8px}
@media(max-width:900px){.s{grid-template-columns:1fr;height:auto}.m{height:260px}.t blockquote{font-size:27px;line-height:31px}.btns{margin-top:28px}}
```

### Stats: ruled-stat-cells (seen on Baseten, Sourcegraph, Stripe Billing)

*Feeling: an instrument panel.*

Figures in a shared table. It is the most reliable stats form on precise pages, and it stacks into two columns on phones with no redesign. Stripe Billing runs four 316px cells rail to rail, 1px rules, about 180px tall, 40px top padding, under a two-tone heading. Baseten uses left rules only, with a mono label. Sourcegraph sets three cells at 64px between strips of grey square pixels, with a dagger on each caption. Forma24 packs four cells into a 114px bar with the label baseline-aligned beside the numeral.

```css
.cells{display:grid;grid-template-columns:repeat(4,1fr);border-block:1px solid var(--line)}
.c{padding:40px 16px 34px;border-left:1px solid var(--line);min-height:180px}.c:first-child{border-left:0}
.c b{display:block;font:400 48px/1 var(--font-display);letter-spacing:-.04em;font-variant-numeric:tabular-nums lining-nums}
.c span{display:block;margin-top:14px;font-size:16px;line-height:22px;color:var(--ink-2);text-wrap:balance}
@media(max-width:860px){.cells{grid-template-columns:1fr 1fr}.c{padding:28px 16px;min-height:0}.c:nth-child(odd){border-left:0}
  .c:nth-child(n+3){border-top:1px solid var(--line)}.c b{font-size:36px}}
```

### App window: inset-sheet-window (seen on Attio, Loops, Sweeply)

*A well-made Mac app sitting on a table: soft, tactile, unhurried.* Quality 5/5, 4 sites.

**Use:** Light or warm SaaS, and products with sparse screens where the frame has to add weight. **Not:** Dark pages, where the two surfaces merge. Also inside a card grid, where a third nested edge appears.

**Recipe:** Outer shell 1080-1248px, tinted ink-5%, radius 16, 1px line. 32-34px title bar with dots or a breadcrumb. App sheet inset 8px on three sides, radius 8-10, its own 1px line. 250px sidebar on a half-step tint, 14/28 rows. Never show the bottom edge. The inner radius must equal the outer radius minus the inset, or the corners look broken. Attio uses coloured window dots; Loops greys them out and adds a breadcrumb, which is the more modern choice because it stops the chrome competing with the app. Reflect does the same trick as glass on a dark page: two 1px rims, outer radius 32 and inner 24, an 8px gap, and a glow bleeding through.

```html
<style>
.hero{height:100vh;min-height:900px;overflow:hidden;display:flex;flex-direction:column;align-items:center;padding:118px 24px 0}
.shell{flex:none;width:min(1080px,100%);height:700px;margin-top:64px;padding:0 8px;border-radius:16px 16px 0 0;
 background:color-mix(in srgb,var(--ink) 5%,var(--bg));box-shadow:0 0 0 1px var(--line),0 24px 60px rgba(30,40,80,.07)}
.tl{display:flex;gap:7px;align-items:center;height:32px;padding-left:6px}.tl i{width:11px;height:11px;border-radius:50%;background:var(--ink-4)}
.sheet{display:grid;grid-template-columns:250px 1fr;height:calc(100% - 32px);border-radius:8px 8px 0 0;background:var(--bg);box-shadow:0 0 0 1px var(--line);overflow:hidden} /* 16 outer minus 8 inset */
.side{padding:10px;border-right:1px solid var(--line);font:500 14px var(--font-text);background:color-mix(in srgb,var(--surface) 45%,var(--bg))}
.row{display:flex;align-items:center;gap:8px;height:28px;padding:0 6px;margin-top:1px;border-radius:7px;color:color-mix(in srgb,var(--ink) 86%,var(--bg))}
.row .ic{color:var(--ink-2)}.row.on{background:var(--tint-2);color:var(--ink)}
.top{display:flex;align-items:center;gap:8px;height:44px;padding:0 16px;border-bottom:1px solid var(--line);font-weight:500}
@media(max-width:760px){.shell{width:720px;height:430px;align-self:flex-start}.sheet{grid-template-columns:190px 1fr}}
</style>
<section class="hero"><!-- H1 and sub -->
 <div class="shell"><div class="tl"><i></i><i></i><i></i></div>
  <div class="sheet"><aside class="side"><div class="row on"><svg class=ic></svg>Contracts</div><!-- more rows --></aside>
   <div><div class="top">Vantor MSA, v4<span class="chip" style="margin-left:auto"><span class="dot" style="color:var(--warn)"></span>3 deviations</span></div><!-- document, suggestions --></div>
  </div></div>
</section>
```

### Faq: split-title-rows (seen on Cursor Pricing, Stripe Sessions, Devin Desktop)

*Feeling: composed, unhurried.*

Heading alone at the left, rows in the right half. The empty column gives a dull section composure, and it keeps the section aligned with the page's grid instead of floating in the middle. This is the strongest default for product pages. Cursor sets it on a full-bleed tone band with rows from the centre line, 57px tall, between 1px rules at top and bottom. Tana adds a small action under the title. Devin pushes rows to x=517 and raises the pitch to 107px. Neon lifts product names to full ink inside muted answers, which makes a long answer skimmable. Stripe Billing uses dashed rules and a 28px tinted plus tile.

```css
.band{background:var(--surface);padding-block:96px}
.split{width:min(1200px,calc(100% - 48px));margin-inline:auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.split h2{font:400 36px/1.15 var(--font-display);letter-spacing:-.02em}
.list{border-top:1px solid var(--line)}
.split summary{min-height:57px;font-size:16px;font-weight:500;transition:color .15s}
.split summary:hover{color:color-mix(in srgb,var(--ink) 65%,transparent)}
.a{padding-bottom:20px;color:var(--ink-2);max-width:34em;text-wrap:pretty}
@media(max-width:860px){.split{grid-template-columns:1fr;gap:24px}.band{padding-block:64px}}
```

### Feature tabs: selected-row-list (seen on AuthKit, Exa, Jurafuchs)

*6 sites, quality 4.* An interface inside the page. Use when rows have a sentence each. Compact and calm.

Recipe: three to four rows on the left; the active row becomes a white 12px card with a 1px border, while others stay on the page with grey text. Live preview on the right. AuthKit flanks a form with toolbars of swatches and corners, so the panel looks configurable. Exa's form is a 500px dark rail with a 2px white bar and blurb beside a chart.

Seen on AuthKit, Exa, Obsidian, Jurafuchs, Cloudinary.

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

### Footer: colour-flood-footer (seen on Exa, TR Studio, Wolff Olins Work)

*Feeling: the colour you were holding back.*

The largest flat colour on the whole page, kept for the end. Exa floods a saturated cobalt with fine grain and a thin serif sentence at about 77px. Browserbase goes to full orange with a white monogram. TR Studio makes a full-viewport periwinkle colophon with one centred seal, and closes on a 40px strip of oxblood. Use it when the brand owns a colour and the page above has been mostly neutral, because a flood after a colourful page adds nothing. Set all text in one tint of the field: white, or a dark of the same hue. A second colour usually ruins it. Avoid it if the brand colour is pale, because small links will fail contrast on it.

### Headline: caps-block (seen on Inngest, Bun, Gagosian)

Signage, stencil, poster. Authority by density. Seen on 29 sites.

**Use it for:** Culture, sport, hardware, engineering, developer tools with attitude. Condensed for poster presence at modest width; neo-grotesque for a machine-label feel.

**Avoid it for:** Sentences over about 40 characters, and any page that also uses caps for labels at scale.

**Recipe:** Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

**Why it works:** Only 8.5% of H1s are uppercase, and their median line-height is 1.1. The ones that look designed sit well below that, because caps have no descenders and need far less leading than mixed case.

<a id="wide-heavy-display"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

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

### Surfaces: cut-silhouette-panel (seen on Baseten, Ai2, Talkspace)

*Feeling: considered, slightly architectural.*

The outline carries the idea. Baseten cuts white blocks into its hero art on 12px gaps, so the art's edge steps around the content rather than sitting behind it. Allen AI cuts a 36px step from one corner. Talkspace steps a panel in twice, with 4px rounded joins. Round every join, even when the outer corner is sharp, because a raw 90-degree notch looks like a clipping error. Keep every other surface plain, and repeat the cut on at least one more object.

### Surface ladder: page-tint-drift (seen on Fabrica Partners, Claude Pricing)

*Feeling: the whole page changes weather as you read.*

**Use it for:** Editorial finance and brand sites with few, clear sections. **Avoid:** Dense tools. A moving ground under UI is a distraction.

Body background cross-fades between near-whites, such as warm grey, peach and pale blue, about .9s ease, as sections enter. Differences of 2 to 3 L* only. Nav tints with the page. No gradients on elements.

Fabrica cross-fades the whole page between warm grey, peach and pale blue over about .9s, with no gradients on any element. Claude Pricing moves its neutrals per section and lets the nav tint with them.

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

### Icons: pixel-grid-icons (seen on Shopify Polaris)

*Feeling: playful and technical. A wink inside serious documentation.*

**Use:** Developer docs and neutral reference pages that need personality without a redesign. **Avoid:** Mixing with smooth icons in the same context.

Draw at 16 by 16 and display at exactly 3x, about 48px, with `image-rendering: pixelated` or `shape-rendering: crispEdges`. Use a dark one-pixel outline, two or three flat fills per icon, and stepped edges with no anti-aliasing. Keep it the only illustrative colour on the page.

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

### Load: iris-or-sheet-reveal (seen on Leo Cussen Centre for Law, Symbol Studio, Apptronik)

*Feeling: a shape opens the page.*

A shape from the brand opens into the site. Meridian parts a pale ring like a dividing cell, and it is all done within 2s. Symbol Studio grows a white stadium from the centre until it becomes the page sheet. N26 expands a small framed image to full-bleed from a flat teal. MetaLab grows a central video tile to full screen and flips the page dark. Animate `clip-path` or use FLIP, not width and height. The shape must come from the logo or product, or it is a stock wipe. See `load.md` Curtain and shutter.

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

### Hover: ring-grow (seen on Claude, Anthropic News, Speakeasy)

*Feeling: tactile, unhurried.*

The button does not move. Its ring grows. Claude takes `0 0 0 1px` to 2px in 0.1s, and steps its label to full ink. Slack thickens an inset ring from 1px to 2px over 0.42s. Anthropic's news page steps the fill one tone and adds a 1px ring in that same tone. Use it for warm, editorial product sites. `box-shadow` takes no space, so nothing around it shifts, which a real border cannot do. For any pill colour, an inset `0 0 0 999px` shadow at 10 percent black works as a universal darken.

```css
.ring{color:var(--ink-2);box-shadow:0 0 0 1px var(--line);transition:box-shadow .1s ease-in-out,color .1s ease-in-out}
.ring:hover{color:var(--ink);box-shadow:0 0 0 2px var(--line)}
```

### Phone menu: logo-action-menu (seen on Anthropic News, Vercel AI SDK, Warp Pricing)

*Feeling: the primary action never hides.*

Logo left, then one compact action and a menu control right, on one centre line. Linear keeps a muted log-in, a 32px light pill and a two-line burger. Warp sets a 36px black button. Spline sets a 38px pill beside an outlined circle. Vercel's AI SDK keeps Ask AI, because the assistant is the action. Public keeps both log-in and sign-up as outlined pills. Use it for any product with a sign-up. Keep only one filled control in the bar, and make it match the button shape on the page. At 360px wide, the bar must still fit: test it, and drop the log-in link first.

Note the hit area. A glyph sized at 18px fails, so wrap it in a 44px button and pull it to the gutter with a negative margin. Most of my demos tripped the small-target check on this one button until this rule went in.

```css
.nav{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:16px;height:64px;padding:0 24px;
  background:color-mix(in srgb,var(--bg) 82%,transparent);backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}
.nav .r{margin-left:auto;display:flex;align-items:center;gap:8px;font-size:14px;color:var(--ink-2)}
.pill{height:32px;padding:0 12px;border-radius:999px;background:var(--ink);color:var(--bg);
  display:inline-flex;align-items:center;font-size:13px;font-weight:500}
.menu{width:44px;height:44px;margin-right:-13px;display:grid;place-items:center}   /* 44px target, 18px glyph */
.menu i{width:18px;height:10px;border-block:1.5px solid var(--ink)}
```

### Showpiece: pinned-chapter-stage (seen on Claude, Figure, Prägen Hätlen)

*9 sites, quality 5.* One fixed composition and only its contents change. Filmic. Use for three to seven chapters when the layout itself is strong.

Recipe: a pinned screen with a fixed skeleton. Figure shows a 100vh film per chapter, with an uppercase heading and short body at the foot, moved to the emptier side of each shot, and an outlined CTA. Prägen Hätlen holds one rule across 1376px and swaps a statement, a render and a paragraph. Claude runs thirteen short ticks labelled by hour, so a product tour reads as one working day: the best signature in the set. Mixpanel floods a 604px stage with a different colour per product beside an 88px icon rail. Kawara uses ring dots and a travelling scroll marker.

Seen on Figure, Prägen Hätlen, Claude, Mixpanel, Kawara Museum, Anime.js. Suits photo-led, render-3d, warm neutral and gradient light.

### Showpiece: sticky-utility-header (seen on Attio Pricing, Claude Pricing, Linear Changelog)

*Feeling: you always know where you are.*

The most useful pin on the web, and it is plain CSS. Attio sticks plan names, prices, toggle and all four CTAs under the nav across about 5,000px of matrix, so conversion stays in reach, and section titles pin beneath them until the next replaces it. Claude's pricing does the same with a hairline and no shadow. Linear's changelog sticks each date until the next pushes it up. Use it for any table longer than a screen.

```css
.plans{position:sticky;top:0;z-index:5;background:var(--bg);border-bottom:1px solid var(--line)}
.group{position:sticky;top:124px;z-index:3;background:var(--bg)}/* top equals the height of the row above */
```

Give sticky rows a solid background, or the table scrolls through them. No shadow is needed, since a hairline holds the edge.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.