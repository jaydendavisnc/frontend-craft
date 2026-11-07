# Your direction (seed 1039)

Reads as **agency**, surface **landing**, register **warm-neutral** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Orbit Design, a silver agency page)

1. Navigation: `nav.top-bar/hanging-tab-bar`
2. Hero: `hero.type-only/statement-with-annotation`
3. Logo wall: `section.logo-wall/logos-inside-another-block`
4. Testimonial: `section.testimonial/peek-card-rail`
5. Ui fragment: `product.ui-fragment/layered-panels-on-gradient`
6. Gallery portfolio: `section.gallery-portfolio/centred-slide-carousel`
7. Product card: `commerce.product-card/visible-add-card`
8. Pricing table: `section.pricing-table/standard-vs-custom-pair`
9. Faq: `section.faq/tile-row-stack`
10. Closing section: `section.cta-band/seam-overlap-close`
11. Footer: `section.footer/brand-column-with-proof`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Baskervville** with **Public Sans**. A swash-Q Baskerville kept large, over a civic grotesque that makes it look deliberate and not antique.
- Display: 64px, phone 38px, weight 500, tracking -0.015em, leading 1.05. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Public Sans 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Baskervville:ital,wght@0,400..700;1,400..700&display=swap https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap

## Palette

From Brand Designer for B2B SaaS, Fintech & Tech Startups: bg #ffffff, surface #faf8f4, text #351c1b, muted #6b6166, accent #ff4000. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **opinion**. Headline shape: **take a position: says something is wrong**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `tiles-assemble`, **Scroll** `window-opens-to-full`, **Hover** `tone-step`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Orbit Design** (agency, silver) https://www.orbitdesign.io/
- Doing: A subscription design agency page that sells with product screenshots on pale grey, then one gradient burst with a mascot.
- Why it feels made: Single family, large clean white space and real UI shots make it credible; the gradient section is a confident single moment.
- If imitated badly: Without strong portfolio imagery the pale-grey wash reads empty, and the gradient needs the mascot to avoid looking like a template.

**Michelle Kaye - Fine Arts** (portfolio, silver) https://michellekayewashington.com
- Doing: An artist's site staged as a three-panel book, opened by a hand-written monogram and turned by deliberate scrolling.
- Why it feels made: A single serif, one dusty rose accent and small print-like details such as the offset hairline frame and numbered index give it a gallery catalogue feel.
- If imitated badly: Cormorant plus cream plus a stock studio photo is a well-worn wedding-site look, and the small rose labels are at the edge of legible.

**Aman** (hospitality, gold) https://www.aman.com
- Doing: A luxury resort portfolio presented as a quiet editorial magazine: warm paper, huge photography, almost no UI.
- Why it feels made: Every pixel of colour comes from the photography because the chrome is a single warm neutral with one charcoal button. Spacing is generous and strictly repeated, and type is small and tracked rather than loud.
- If imitated badly: With stock photos or a bright accent colour the restraint reads as empty rather than expensive.

## System choices

- Frames: `media.photography/uncropped-native-plate`
- Headline: `type.display-headline/quiet-serif-over-sans-ui`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/neutral-chip`
- Surfaces: `surface.card/crop-bleed-card`
- Surface ladder: `atmosphere.light-surface-ladder/flat-colour-joins`
- Logo: `media.logo-mark/cut-letterform`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.grid-system/label-left-content-right`
- Load: `motion.load-sequence/tiles-assemble`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `button.hover-response/tone-step`
- Phone menu: `nav.mobile-menu/colour-room-takeover`
- Showpiece: `motion.scroll-pin-or-scrub/section-theme-shift`
- Showpiece: `motion.marquee/giant-type-marquee`
- Atmosphere: `atmosphere.grid-or-lines/construction-geometry`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: hanging-tab-bar (seen on Stone Island, Takahama Kawara Museum, Cacao Bean)

*Feeling: one shaped object that nobody else has.*

Something hangs from the top edge. LaunchDarkly sits its links in a black tab about 640x46 with concave corners cut into the panel below, so tab and page interlock, with the logo in a matching corner tab. Stone Island hangs a 58px round seal below a transparent row. The Takahama Kawara Museum runs a frieze of roof-tile circles along the top. The Philadelphia Orchestra hangs a 62px utility tab from the right. Use it when you have a shape that means something to the brand. Avoid inventing one for its own sake.

Build the concave corners with `radial-gradient` on two small pseudo elements, or with a mask, not with images. Keep the rest of the bar plain, because the shape is the whole statement.

### Hero: statement-with-annotation (seen on Elyx, Sequoia, Bohdan Ratiiev)

- **Feels:** A person read this and marked it up.
- **Use when:** You have a sentence and one word in it that matters. Investors, consultancies, writers.
- **Not when:** Every word matters. One or two marks, no more.
- **Recipe:** One sentence, 48 to 92px, on paper colour, with a hand-drawn stroke on one or two words: a wobbly underline, a ring, 2.6 to 3px in the accent. Draw it as an SVG path, never a CSS underline. Leave about 100 to 160px clear above. Then bring real tiles up from the fold. Sequoia's row of cards starts near y 510 and is cropped by the fold, and it is half of the composition, which the analyst's spec missed. Elyx uses a pink underline on one italic word, with line art rising from the base. Bohdan Ratiiev underlines key phrases with 2px black rules as if each were a link.

```css
.hero{height:824px;overflow:hidden;padding:104px 56px 0;display:flex;flex-direction:column;align-items:center;text-align:center}
h1{font:400 56px/1.14 var(--font-display);letter-spacing:-.02em;max-width:1060px;text-wrap:balance}
.mark{position:relative;display:inline-block;white-space:nowrap}
/* drawn path with a slight wobble, never a CSS underline */
.mark svg{position:absolute;left:-4%;width:108%;overflow:visible;pointer-events:none;
  fill:none;stroke:var(--accent);stroke-width:2.6;stroke-linecap:round}
.mark.ring svg{top:-14%;height:128%}
.mark.under svg{bottom:-12%;height:18px}
/* the rising row is the whole job: real items, cropped by the fold */
.rise{margin-top:auto;width:100%;height:324px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
```

Our first version was this sentence, centred in the viewport with a sub and a button. It measured 95% bare with 3% of the bottom third occupied, and it looked like a placeholder. We moved the sentence up, took out the sub and button, and added three real tiles. That is the change that made it read as designed.

### Logo wall: logos-inside-another-block (seen on International Magic, Brilliant, New Material)

*Feeling: proof attached to the sentence it supports.*

No band at all. Brilliant sets two rows of 20px grey logos in the text column under the body copy. New Material runs five 24px marks under a paragraph about who it has worked with. Revena keeps a 94px strip on the hero's foot, split between clients and press. International Magic builds its logos into a 450 by 56 dock that mirrors the nav, so proof arrives inside the page's chrome. Svelte lets logos pass behind its heading. Use it when a whole section would be too much, and on sales and contact pages.

### Testimonial: peek-card-rail (seen on Astral, Brilliant, CleanShot X)

*Feeling: there is more, and you are welcome to look.*

Horizontal cards that run off the edge, the next one cut by the viewport. Use it when quotes are substantial and few, and when vertical room is short. It beats dots because the cut card is itself the scroll cue. Astral goes large: cards about 1060px wide, a corner notch of about 80px holding a pixel quote glyph, a duotone portrait and a 30/42 quote. CleanShot fixes a rating block at the top right and lets 480px cards overflow. Liquid AI uses a four-dash progress line with 36px arrows. Brilliant stacks five cards in depth, each neighbour tucked behind, smaller and fainter. Use `scroll-snap-type:x mandatory`, keep the arrows reachable, and never autoplay a rail of full sentences.

### Ui fragment: layered-panels-on-gradient (seen on Bauhaus Clock, Devin Desktop (codeium.com redirect), Stripe)

*Precision floating on colour, the classic finance look.* Quality 5/5, 5 sites.

**Use:** Payments and billing, or any product with a rich brand gradient. **Not:** Unbranded gradients. On a default purple blend it collapses into the AI template.

**Recipe:** Two or three white panels with 10-13px type, radius 6-14, overlapping at two depths on a rich gradient that leaks around them, soft tinted shadow, cropped by the card edge. Real labels, segmented controls, plans and prices. Bauhaus Clock shows a settings sheet at full size on watercolour, which is the same idea with a far quieter ground. Mixpanel adds a 4px translucent white rim to the chart card.

### Gallery portfolio: centred-slide-carousel (seen on Apple, 1 Hotels, Alessandro Stella, Art Direction & Design Consultancy)

*Feeling: a screening room.*

One big slide centred, neighbours peeking both sides. Apple runs about 930px with 12px gaps, a dot pager with an elongated progress dot, and a 24px play-pause disc at far right. DJI runs 1200px with about 104px of neighbour showing on each side, with a white title on the footage. Use it for film, footage and product pictures with a big subject. Any autoplay needs a visible pause, and it should stop when the tab is hidden or the user prefers reduced motion. Do not use it to hide content, since most people never see slide four.

### Product card: visible-add-card (seen on Gagosian, Aesop, Sakara)

*Feeling: a shop counter, plain and open.*

A button on every card, always showing. Aesop sets a 40px dark full-width button under a short description. Sakara uses an outlined full-width `ADD TO CART` on phones, where hover is not an option. Gagosian uses a 34px outlined `Shop` under a book on a white tile on a grey band, which looks like a museum till. Ro pairs a black pill with an outlined one and a required safety link. Use it for home page rows, single-size goods, and phone layouts. Avoid it on a long listing, where forty identical buttons become noise.

Reserve caption lines, so that all buttons share a baseline. Take the button from the store's system, usually the same radius and height as the main add button, scaled down one step.

### Pricing table: standard-vs-custom-pair (seen on Stripe Pricing, Parsley Health, Orbit Design)

*Feeling: pay as you go, or talk to us.*

Stripe's pair is the clean answer to usage pricing: a white card with the rate in a tinted panel inset 4px, and a navy card with four stacked chips listing what custom covers. The inset panels repeat the same gap, which ties two different cards together.

### Faq: tile-row-stack (seen on Soundsensing, Cal.com, Comet)

*Feeling: soft, tappable.*

Each row is a tone tile, and rules vanish. Tiles suit soft product pages and phones, since the whole row is visibly a button. Cal.com runs radius 22, 76px rows, 20px/700 questions and a 36px white disc with a chevron, and lets long questions break into two balanced lines. Its last row asks anything else, with an arrow, and turns the FAQ into a way in. Soundsensing uses 68px rows at radius 8 and a 10px gap. Comet floats page-coloured rows with a soft shadow over faint orbit lines. Hold the gap under the row's padding so the stack reads as one object.

```css
.split2{width:min(1260px,calc(100% - 48px));margin-inline:auto;padding-block:112px;display:grid;grid-template-columns:minmax(0,1fr) 678px;gap:64px;align-items:start}
.split2 h2{font:800 52px/1.05 var(--font-display);letter-spacing:-.03em;max-width:9em}
.stack{display:grid;gap:8px}
.stack details,.ask{background:var(--surface);border:0;border-radius:22px;transition:background .15s}
.stack details:hover,.ask:hover{background:color-mix(in srgb,var(--ink) 7%,var(--bg))}
.stack summary,.ask{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px;padding:16px 20px 16px 24px;font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.01em}
.d{flex:none;width:36px;height:36px;border-radius:50%;background:var(--bg);display:grid;place-items:center;transition:transform .2s}
.d svg{width:14px;height:14px;fill:none;stroke:var(--ink);stroke-width:1.8}
.stack details[open] .d{transform:rotate(180deg)}
.ask{color:var(--ink-2);font-weight:600}
.ask .i{display:flex;align-items:center;gap:12px}
.ask svg.s{width:20px;height:20px;fill:none;stroke:var(--ink-2);stroke-width:1.5}
.stack .a{padding:0 76px 24px 24px;font-size:16px;line-height:1.55;color:var(--ink-2)}
@media(max-width:1020px){.split2{grid-template-columns:1fr;gap:32px;padding-block:72px}.split2 h2{font-size:40px}.stack summary,.ask{font-size:17px;padding-left:20px}.stack .a{padding:0 20px 20px}}
```

### Closing section: seam-overlap-close (seen on Loops, Buildkite, Vite)

*Feeling: the page is one physical object.*

The close joins the footer as a material fact. Loops ends its light plate in a 50px corner to reveal a deep colour beneath. My first version ran the plate full width and looked like a rounded band. The real plate is also inset about 52px from the left over a stack of brand stripes, and that second edge is what makes it read as a lifted sheet. Buildkite's card straddles a page colour change, with a real window breaking 32px above it. Universally Speaking's chamfered card straddles the footer seam, and Vite's footer overlaps a grain band.

```css
body{background:linear-gradient(90deg,var(--accent) 0 14px,color-mix(in srgb,var(--accent) 80%,var(--ink)) 14px)}
/* inset on the left as well as rounded: two free edges make it a sheet */
.plate{margin-left:52px;background:var(--bg);border-radius:0 0 0 56px;padding:96px 24px 120px}
.close{width:min(1100px,calc(100% - 48px));margin-inline:auto;padding-block:112px 72px;display:flex;align-items:center;justify-content:space-between;gap:40px;color:var(--bg);
  border-bottom:1px solid color-mix(in srgb,var(--bg) 18%,transparent)}
.close h2{font:400 44px/1.1 var(--font-display);letter-spacing:-.015em}
.close p{font-size:17px;line-height:1.4;margin-top:10px;color:color-mix(in srgb,var(--bg) 72%,transparent)}
.pair{flex:none;margin-top:0;gap:10px}
.close .b{background:var(--bg);color:var(--accent)}
.close .b.s{background:none;color:var(--bg);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--bg) 55%,transparent)}
@media(max-width:760px){.plate{margin-left:20px;border-radius:0 0 0 32px}.close{flex-direction:column;align-items:flex-start;padding-block:72px 48px}}
```

### Footer: brand-column-with-proof (seen on LiveKit, Neon Docs, Speakeasy)

*Feeling: a company that has done its homework.*

A left block of 300 to 430px carries the logo, a two-line description and real proof: compliance marks, a live status line, a theme switch. Three to five link columns sit to its right. Use it for developer tools and B2B software, where a security reviewer will scroll here. On LiveKit the compliance roundels are pinned to the base of the left block with `margin-top:auto`, so they line up with the bottom of the columns, and status runs in the base bar in small mono caps with a square dot. Neon Docs turns compliance into a column of its own, pairing each name with a grey status word. Only claim what is true. Fake SOC 2 badges are worse than none.

Other things that earn the left block: a quotation, as on Notion Calendar; a sign-off about where the thing is made, as on Bun; a plain statement of where data is hosted, as on Plausible, when that is a reason to buy.

```css
.foot{border-top:1px solid var(--line)}
.top{display:grid;grid-template-columns:minmax(0,1.3fr) repeat(3,minmax(0,1fr));max-width:1280px;margin:0 auto;padding:72px 0 56px}
.brand{display:flex;flex-direction:column;min-height:330px}
.brand i{width:22px;height:22px;background:var(--ink);border-radius:2px;margin-bottom:12px}
.brand p{font-size:14px;line-height:21px;color:var(--ink-2);max-width:21em}
.seals{margin-top:auto;display:flex;gap:10px}
.seals span{width:36px;height:36px;border-radius:50%;border:1px solid var(--line-strong);display:grid;place-items:center;font:500 8px/1 var(--font-mono);color:var(--ink-2)}
.col b{display:block;font:500 11px/16px var(--font-mono);letter-spacing:.09em;text-transform:uppercase;color:var(--ink-2);margin-bottom:22px}
.col a{display:block;font-size:15px;line-height:36px;color:var(--ink);transition:color .15s}
.col a:hover{color:var(--ink-2)}
.soc{display:flex;gap:14px;margin-bottom:12px}.soc i{width:16px;height:16px;border-radius:4px;background:var(--ink)}.col small{font-size:12px;color:var(--ink-3)}
.bar{border-top:1px solid var(--line)}
.bar div{max-width:1280px;margin:0 auto;height:56px;display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--ink-2)}
.bar em{font:500 11px/1 var(--font-mono);letter-spacing:.08em;color:var(--ok);font-style:normal}
.bar em::before{content:"";display:inline-block;width:6px;height:6px;background:currentColor;margin-right:8px;vertical-align:1px}
@media(max-width:760px){.top{grid-template-columns:1fr 1fr;padding:48px 16px 32px}.brand{grid-column:1/-1;min-height:0;gap:20px}.bar div{height:auto;padding:14px 16px;flex-direction:column;align-items:flex-start;gap:8px}}
```

### Frames: uncropped-native-plate (seen on BIG, Alessandro Stella, White Cube)

*Feeling: curatorial. The work is left alone.*

**Use:** Portfolios, galleries, architecture, museums, anything where the image is the product and cropping would be an insult. **Avoid:** Thin libraries, or commerce grids that need equal cells to compare items.

Show each image at its native ratio with no radius, shadow, tint or caption inside. Pick one fixed dimension. Fixed height of up to 720px suits a one-at-a-time sequence: Alessandro Stella uses about 576 by 720 for portrait and about 1280 by 720 for landscape. A fixed column of 330 to 420px suits a dense index, with heights left unequal so tall images become rhythm breaks. Keep the interface in one or two neutrals, so all colour comes from the work. Set scans raw and let each object's own edge be the frame.

```css
.plates { display: flex; gap: 64px; align-items: center; justify-content: center; }
.plate img { height: min(62vh, 720px); width: auto; display: block; }   /* height is fixed, width stays native */
.plate figcaption { margin-top: 14px; text-align: center; font-size: 13px; line-height: 1.3; }
.plate figcaption em { color: var(--ink-2); }
```

**In the lab:** Rendered with a square and a 3:2 frame at equal height, and it matched the Alessandro Stella frames. Fix the height, not the width.

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

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: neutral-chip (seen on Tana, Attio, Exa)

*Feeling: a good tool, sure of itself.*

A near-black rectangle on light, or near-white on dark, with no colour at all. It works in any palette, it never fights an image, and it reads as product. Use it for SaaS, developer tools, docs and app UI. Avoid it when a consumer brand needs warmth, where a pill or a colour does more.

Set 32 to 40px, radius 6 to 10, 14/500, 12 to 16px padding, no shadow. Attio adds a 1px border one step lighter than the fill, about L\* 37 on L\* 13, which reads as a faint rim. Analysts recorded that rim as darker, and the measured value corrected it. Vercel uses a flat #171717 at radius 6 and nothing else. The chip shares its radius with the page's inputs and small cards.

```css
.b-chip{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:10px;white-space:nowrap;
  background:var(--ink);color:var(--bg);border:1px solid color-mix(in oklab,var(--ink) 76%,var(--bg));
  font:500 14px/1 var(--font-text);letter-spacing:-.006em;cursor:pointer;
  transition:background-color .15s cubic-bezier(.4,0,.2,1),scale .1s cubic-bezier(.4,0,.2,1)}
.b-chip:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}
.b-chip:active{scale:.98}
.b-chip:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
```

### Surfaces: crop-bleed-card (seen on Meta AI, Affirm, Obsidian)

*Feeling: you are looking through a window at something much bigger.*

Copy top-left, and a real interface that starts inside the card and runs off two edges. This is the card that most often separates a product company from a template, because a crop implies there is more. Use it for product features. Do not use it without a real interface to show.

Position the window absolutely so that it overshoots, round only the single visible corner, and let the card clip it. Keep the content dense all the way to the crop.

```css
.card{position:relative;overflow:hidden;background:var(--surface);border-radius:12px;
  box-shadow:inset 0 0 0 1px var(--line);padding:24px;height:548px}
.card h3{font:600 24px/1.2 var(--font-display);letter-spacing:-.012em;margin-bottom:8px}
.card p{font-size:20px;line-height:25px;color:var(--ink-2);max-width:25em}
/* Overshoots right and bottom. Only the visible corner is rounded. */
.win{position:absolute;left:48px;top:188px;width:760px;height:560px;background:var(--bg);
  border-radius:12px 0 0 0;box-shadow:inset 0 0 0 1px var(--line);padding:24px 32px}
@media(max-width:760px){.card{height:480px}.card p{font-size:17px;line-height:23px}.win{left:24px;top:190px}}
```

### Surface ladder: flat-colour-joins (seen on TR Studio, Clevr Blends, terrenohotel.com)

*Feeling: designed and decisive. Close to print.*

**Use it for:** Studios, hospitality, food, culture. **Avoid:** Interfaces and dense product. There is no ladder here to organise UI with.

Bone ground plus two or three flat colours, one pale tint, one saturated mid, one near-black ink, joined at hard edges with zero radii, borders or shadows. Each section is a single flat. The ink doubles as dark panel.

TR Studio measures zero radii, shadows and borders, and joins #eae7e1, #d9d3cc, #f5f3f0 and one pale periwinkle at hard edges, with oxblood as both ink and dark panel. On a real brand the flats come from the palette you were dealt.

### Logo: cut-letterform (seen on Bakstad Construction, Concrete, Arkansas Museum of Fine Arts)

*Feeling: industrial or architectural, with a quiet edge.*

**Use:** Construction, museums, property, events. Brands where one expressive element sits inside neutral type. **Avoid:** Light typefaces. A cut needs heavy strokes to read.

Take a heavy display weight and make one clean cut. A thin horizontal slice through the upper letter band, at about 34% of cap height. Stencil gaps in every bowl of a heavy lowercase serif, shown at about 380px in the intro and about 160px on phone, with a single letter on a rail. A hairline diagonal slash taller than the letters, splitting two colours. Everything else on the page stays neutral.

**In the lab:** Worked at all sizes once the cut was at least 1px. The slice left a stray dash where it crossed the apex of an A, so choose the height by looking.

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

### Load: tiles-assemble (seen on Claude, Per Appelgren, New Material)

*Feeling: a collection being laid out by hand.*

Claude's hero starts with tiles smaller, denser and rotated about 3 degrees, spreading and straightening over about 3s as headline words rise. Per Appelgren flies a tilted stack in and fans it out. Elisa Breyer stretches thin slivers to full height across the grid. Use it where the product is a collection of objects and the layout has a natural looseness. It takes up to 6s on some sites, so keep the headline independent and readable by 2s. End on a real layout, not a pile.

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

### Hover: tone-step (seen on Neon Docs, New Material, Bitnomi)

*Feeling: nothing happened, and yet you know it is live.*

One small move of the fill. The default for almost every button. Dark lightens by 11 L\*, white darkens by 4, colour darkens by 8. Stay within those, because a move of 20 L\* or more reads as a different button. Use 150ms on `ease` or `cubic-bezier(.4,0,.2,1)`, or an instant cut. Trasti and Bitnomi use a cut, and it feels fast rather than crude.

```css
.h-step{transition:background-color .15s cubic-bezier(.4,0,.2,1)}
.h-step:hover{background:color-mix(in oklab,var(--ink) 88%,var(--bg))}   /* dark fill: toward the ground */
.h-step.colour:hover{background:color-mix(in oklab,var(--accent) 88%,#000)}  /* colour: toward black */
```

### Phone menu: colour-room-takeover (seen on Joby, Lightspeed, Locomotive)

*Feeling: you walked through a door into the brand.*

The menu is a flat room of brand colour. Lightspeed uses blush pink with 44px type and 01 superscripts, the page blurring behind as the sheet arrives over about 900ms. Joby uses a saturated blue reached through stacked bands of peach, orange and navy. Locomotive uses electric blue and serif type at the bottom left. Wildbran uses terracotta. Use it for brands with a real colour, on sites where the rest of the page is restrained. It is one of the cheapest ways to look expensive. Check contrast, and use the colour only here.

### Showpiece: section-theme-shift (seen on Elyx, La Table de Joakim, LEA WINERY)

*Feeling: the light changing between scenes.*

The whole page changes colour between sections, with no wipe and no edge. Basic Agency moves ground, text, rule and pill together as the statement enters. Spring/Summer treats the page as one surface passing through four grounds. Elyx dims paper to near black while the CTA stays bright above it. LEA Winery recolours logo, rail and nav per section, so fixed UI belongs to the content under it. Register custom colours and interpolate over about half a viewport. See `scroll.md` Whole-page colour theme change.

### Showpiece: giant-type-marquee (seen on Motto, Motionstrand, Arkansas Museum of Fine Arts)

*Feeling: one last loud moment.*

One huge line runs edge to edge, cropped by both sides. LaunchDarkly runs about 110px of bold type with star separators across a lime footer head. Motto repeats a word at about 120px with an asterisk, second row offset. Spring/Summer rotates one glyph in 3D as the line drifts. Use it once, usually just before the footer. Keep the words readable, since it moves slowly enough to be read a phrase at a time. See `scroll.md` Type that grows or tracks with scroll.

### Atmosphere: construction-geometry (seen on Comet, Prototype, Linear Method)

*Feeling: the compass marks left on the drawing.*

**Use it for:** Studios and editorial product pages with a lot of white. **Avoid:** Too many shapes. One or two circles and a few lines.

Page-wide SVG underlay: one or two circles 700 to 900px plus a few long diagonals or ellipses, 1px at 8% ink, cropped by the viewport. Fixed or slow. One arc may carry a travelling highlight.

On dark, two overlapping 700px circles at white 8%, with fine hatching in the lens where they cross, make a compact signature.

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.