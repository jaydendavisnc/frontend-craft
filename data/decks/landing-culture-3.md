# Your direction (seed 1035)

Reads as **culture**, surface **landing**, register **type-led** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Almeida Theatre, a gold culture page)

1. Navigation: `nav.top-bar/chromeless-type-row`
2. Hero: `hero.full-bleed-media/bottom-left-lockup`
3. Blog index: `section.blog-index/text-only-cells`
4. Gallery portfolio: `section.gallery-portfolio/side-caption-pairs`
5. Faq: `section.faq/split-title-with-art`
6. Product card: `commerce.product-card/stacked-caption-tile`
7. Menu or catalog: `section.menu-or-catalog/running-text-index`
8. Location hours: `section.location-hours/three-column-info-band`
9. Newsletter: `section.newsletter/underline-only-field`
10. Closing section: `section.cta-band/giant-type-sign-off`
11. Footer: `section.footer/contact-first-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Dela Gothic One** with **Schibsted Grotesk**. One of the best black headline faces, already tight, so it only wants a calm newsroom sans.
- Display: 64px, phone 38px, weight 400, tracking -0.02em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Schibsted Grotesk 14px 500. Label: sentence case
- Load: https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap

## Palette

From Studio Dado: bg #ffffff, surface #5d5349, text #111111, muted #7b736a, accent #5d5349. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **what's current: product, season or launch**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `exact-skeleton`, **Scroll** `blur-front-wipe`, **Hover** `media-zoom`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Almeida Theatre** (culture, gold) https://www.almeida.co.uk
- Doing: A theatre site where a full-bleed rehearsal photograph, heavy white caps and flat coral/yellow panels sit against black.
- Why it feels made: A strict black/white base with only two flat accent fields (coral, yellow) and sharp 2px radii gives it box-office authority; every show tile has paired actions.
- If imitated badly: The loud flat colour blocks and heavy caps look amateur unless photography is as strong and spacing stays disciplined.

**Dekmantel** (culture, silver) https://www.dekmantel.com
- Doing: A festival and label site run like a dense index: huge custom display type, hairline section rules and photography-first rows of events, mixes and merch.
- Why it feels made: Consistent 'title + View all' rule headers, strict photo grids and one custom display face give strong identity. Information density stays navigable.
- If imitated badly: Many small 11-13px labels and overlays like the cookie box make it feel cluttered if the grid slips.

**Motto** (agency, gold) https://www.wearemotto.com
- Doing: A pale grey grid of hairlines holding enormous justified uppercase statements, tiny rectangular photos and a few crafted details.
- Why it feels made: Everything sits on one 1px rule grid and one grotesk, so scale does the work; the justified headline spread across two ruled rows is a memorable signature.
- If imitated badly: Needs real photography, strict rules and generous space; with weak images it is just big text on grey.

## System choices

- Frames: `media.photography/uncropped-native-plate`
- Headline: `type.display-headline/caps-block`
- Section headings: `type.section-heading/grey-lead-ink-payoff`
- Primary button: `button.primary/square-block`
- Surfaces: `surface.card/tonal-card`
- Surface ladder: `atmosphere.light-surface-ladder/graded-section-fades`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/pattern-drawn-marks`
- Page rhythm: `layout.grid-system/fixed-column-grid`
- Load: `motion.load-sequence/exact-skeleton`
- Scroll: `motion.scroll-reveal/blur-front-wipe`
- Hover: `motion.hover-state/media-zoom`
- Phone menu: `mobile.phone-nav/bottom-tab-bar`
- Showpiece: `motion.scroll-pin-or-scrub/companion-object`
- Showpiece: `motion.marquee/live-data-ticker`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: chromeless-type-row (seen on Block, Gagosian, 1X)

*Feeling: the header is just a line of type.*

No bar at all, only text sitting on the page. Block sets ten centred uppercase links with no logo, no button, no border. 1X runs six muted caps links at 11px and +0.08em. Gagosian uses serif text in light grey with the wordmark in black. Evenark takes it to display scale, a 44px light comma-separated sentence that is both headline and nav. Use it for fashion, culture and confident brands. Avoid it when the first screen needs a conversion, or when the page is a busy image with no scrim.

Set 11 to 14px, caps tracked about .08em or plain sentence case, 35 to 56px gaps. On photographs, lay a 90px top gradient behind it, from black at 25 percent to nothing, as Figure does. The display version needs nothing else on the row.

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

### Blog index: text-only-cells (seen on Vercel Blog, Raycast Blog, Sanity Blog)

*Feeling: all signal.*

Three columns of titles with no images. Vercel sets 448px wide cells about 240px tall, 13px date and category at the top, a 24/32 title with tight tracking, and small avatars and names pinned to the base, with no lines at all. Hover fills the whole cell a few percent. Sanity uses separate outlined boxes at about 16px gaps. Raycast uses dark cards at radius 10 with a 20/600 title. It is the most reliable way to look expensive without art, and it needs real names and photos of authors. Pin the byline to the base so rows align whatever the title length.

```css
.w{max-width:1440px;margin:0 auto;padding:40px 24px}
.g{display:grid;grid-template-columns:repeat(3,1fr);gap:0 24px}
.c{display:flex;flex-direction:column;min-height:240px;padding:24px;transition:background .15s}
.c:hover{background:color-mix(in srgb,var(--ink) 3%,var(--bg))}
.meta{font-size:13px;line-height:18px;margin-bottom:20px}.meta i{font-style:normal;color:var(--ink-2);margin-left:6px}
.c h3{font:400 24px/32px var(--font-display);letter-spacing:-.022em;max-width:17em;text-wrap:balance}
.by{margin-top:auto;display:flex;align-items:center;gap:8px;font-size:13px}
.by i{display:flex}.by i span{width:20px;height:20px;border-radius:50%;margin-left:-6px;border:1.5px solid var(--bg);background:var(--ink-3)}
.by i span:first-child{margin-left:0}
.by em{font-style:normal;color:var(--ink-2)}
@media(max-width:760px){.w{padding:24px 16px}.g{grid-template-columns:1fr}.c{min-height:180px;padding:20px}}
```

### Gallery portfolio: side-caption-pairs (seen on White Cube, Theatre Memory, Whitney Visit)

*Feeling: a page from a good catalogue.*

A wide image and a narrow text column, bottom aligned. White Cube sets a 920px installation view with a 260px column beside it: 11px caps label, artist, italic title, dates, a paragraph at 14/1.6, and an arrow link, with about 100px between rows. Katja Ogrin reverses the emphasis, with six numbered titles beside one tall 680 by 770 image. Athletics tilts its media 1 to 2 degrees and centres a 22px caption beside it. Use it when each piece has something to say, and where a reader will stop on one at a time. It takes space, so aim for 8 to 12 projects, not 40.

### Faq: split-title-with-art (seen on Sailia, Ян Козлов, Talkspace)

*Feeling: a page with a personality.*

The same split, with something owned under the title. Sailia sets a white line drawing on a blue band. Talkspace places an ink plant drawing on a pale band and sets the second word of its heading heavier. Hawl uses a 3D mascot, Yan Kozlov a tall photograph. It fills an awkward empty column well when you have real art. Do not fill it with stock.

### Product card: stacked-caption-tile (seen on Therabody, Reformation, Marine Layer)

*Feeling: calm and familiar.*

Name, then price, then at most one muted line. This is what most good stores use when names run long or a description helps. Therabody runs six across at 210px on cream, with the name at 14/500 and a small generation tag beside it. Reformation runs four at 347px on a studio ground, and a heart appears only on hover. Use it for wellness, apparel and any catalogue with longer names. Avoid a three-line description at four across, where it fills the row with grey.

Reserve the height of the longest description, so that every price in the row sits on one baseline. Left-align for most brands. Centre only on small, ceremonial rows.

### Menu or catalog: running-text-index (seen on Ne Geurra, Oxygen Pictures, KenzieFrakerDesign)

*Feeling: an inventory, read aloud.*

A catalogue as text. Ne Geurra keeps a sticky left column of every piece in 14px caps with the year in brackets, the current item's caption beneath it, and category labels mirrored at the right, beside one image at a time. Oxygen Pictures sets six condensed caps service names at about 56px on a 54px pitch, with arrows pinned to the far right edge. Replicate writes four columns of tasks rather than products. Kenzie Fraker floats a thumbnail in on hover. It suits design shops, antiques, services and any catalogue with fewer than about 30 items, where names carry weight. Avoid it for buyers who must see every product before choosing.

### Location hours: three-column-info-band (seen on Almeida Theatre, Fidèle, Eicher Honig)

*Feeling: everything you need, at the bottom of the page.*

A plain band: Hours, Address, Contact or Order in three columns. Republique uses a beige band with 11px caps heads, 12px text and blue-grey pills. Bestia sets four columns in its footer. Almeida lists box office phone and address. Fidèle writes it all as plain 14px blue lines. Deadstock sets a café name and one line of hours in two columns. It is the cheapest entry here and one of the most useful, so nearly every local site should have it. Set the type larger than these examples, at 14 to 16px, since it is often what the visitor came for.

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

### Closing section: giant-type-sign-off (seen on Bun, Huge Contact, Temporal)

*Feeling: a poster.*

Display type carries it. Bun sets 117px heavy lines with the last words in accent, on a black band, beside a small install block. Huge ends on a 249px phrase with a tiny email field. Temporal runs 128px light type on a full gradient. Bohdan Ratiiev underlines one line with an 8px rule and sits mono columns just above it. The small thing next to the big thing is what makes it land.

### Footer: contact-first-footer (seen on Bakstad Construction, Nicole Heim Studio, Locomotive)

*Feeling: a business card.*

For a studio or a trade there is no sitemap to speak of, and the visitor wants to get in touch. Bakstad Construction runs one 95px ruled strip with text clusters at fixed columns: firm and principal, keyed `E` and `T` lines, address, then Instagram and Get in Touch. Everything is real selectable text at 15/20. Nicole Heim stacks label and value pairs at the left margin and sets nav right-aligned. Locomotive sets its address and phone at 70px, with pictograms inside the line, and it becomes the signature of the site. Loopcraft fills a viewport with a short greeting, a 48px email and a 40px phone number.

Do not use it for a product with a real navigation to index. Do use the keyed `E` and `T` idea anywhere, because it is both compact and handsome.

```css
body{display:grid;grid-template-columns:92px 1fr;min-height:100vh;font-family:var(--font-text)}
.rail{border-right:1px solid var(--ink);position:relative;font-size:15px}
.rail b{position:absolute;left:16px;top:8px;font:700 54px/1 var(--font-display)}
.rail span{position:absolute;left:16px;bottom:30px}
.main{display:grid;grid-template-rows:1fr auto}
.strip{border-top:1px solid var(--ink);min-height:95px;padding:24px 28px;display:grid;grid-template-columns:minmax(0,285px) minmax(0,319px) 1fr auto;gap:0 16px;font:400 15px/20px var(--font-text)}
.strip dl{display:grid;grid-template-columns:28px auto;align-content:start;width:max-content}
.strip dd{margin:0}
.strip nav{display:flex;gap:32px}
@media(max-width:1000px){.strip{grid-template-columns:1fr 1fr;gap:16px}}
@media(max-width:760px){body{grid-template-columns:1fr}.rail{display:none}.strip{padding:20px 16px;grid-template-columns:1fr;gap:12px}.strip a{display:inline-block;line-height:44px}}
```

```html
<footer class="strip">
  <div>MARLOW JOINERY<br>Tessa Marlow, Principal</div>
  <dl><dt>E</dt><dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
      <dt>T</dt><dd><a href="tel:+12065550142">+1 206 555 0142</a></dd></dl>
  <address>4701 Harbor Way #249<br>Seattle, WA 98116</address>
  <nav><a>Instagram</a><a>Get in touch</a></nav>
</footer>
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

### Headline: caps-block (seen on Inngest, Bun, Gagosian)

Signage, stencil, poster. Authority by density. Seen on 29 sites.

**Use it for:** Culture, sport, hardware, engineering, developer tools with attitude. Condensed for poster presence at modest width; neo-grotesque for a machine-label feel.

**Avoid it for:** Sentences over about 40 characters, and any page that also uses caps for labels at scale.

**Recipe:** Uppercase headline in a condensed or neo-grotesque cut, 56-120px, line-height 0.8-0.95, tracking 0 to -0.04em, short lines of near-equal length so the text locks into one block. Pair with thin sentence-case body at 16-20px. Reserve it for headlines, never nav or labels.

**Why it works:** Only 8.5% of H1s are uppercase, and their median line-height is 1.1. The ones that look designed sit well below that, because caps have no descenders and need far less leading than mixed case.

<a id="wide-heavy-display"></a>

### Section headings: grey-lead-ink-payoff (seen on Devin, New Material, Primer)

Set-up, then punchline. Seen on 3 sites.

**Use it for:** Short copy with a real turn in it. Stronger than ink-then-grey when the second line is the point.

**Avoid it for:** Long explanatory copy, since the eye starts on the weakest part.

**Recipe:** Two lines at 26-34px, weight 350-500, tight tracking: set-up in 50% ink, payoff in solid ink. Reverses the usual order so the eye lands on the last words. Any sub sits 6-8px below. Align the block's bottom edge to the neighbouring image, not its centre.

<a id="eyebrow-title-lede-stack"></a>

### Primary button: square-block (seen on Gagosian, ACME, Royal Ontario Museum)

*Feeling: printed, blunt, grown-up.*

Radius 0 to 2 in solid ink or one brand colour. It reads as one more tile on the grid, so it suits fashion, museums, agencies and anything built on sharp photography. Set 40 to 52px with 16px sentence case, or 13 to 14px caps at 500 to 700, and 16 to 24px padding. Wild's corners match its 2px tiles exactly, and Oxygen Pictures butts the block straight against the newsletter input.

Add no shadow, no gradient and no arrow glow. Its natural hover is the [ink swap](#3-ink-swap). On photography, invert to white. Fairphone's green block with lime caps shows how a two-colour label can carry a brand with no other device.

### Surfaces: tonal-card (seen on Modern Treasury, Apple Design, Primer)

*Feeling: calm and expensive.*

No border, no shadow, one tone step off the page. It is the most reliable modern card. Use it anywhere a section needs a ground and you trust your typography. Avoid it when the fill would sit on a similar tint, where it vanishes.

Radius 8 to 32, padding 32 to 56, title 20 to 32px light or medium. Keep the step inside the table above. Warm the grey by 2 to 5 points when the page has warm photography. Modern Treasury pairs it with 8px corners, a 32px light title and a product fragment on a hairline globe, which shows that tone with small radii reads as finance while tone with big radii reads as consumer.

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

### Icons: pattern-drawn-marks (seen on AuthKit)

*Feeling: unusually considered. Even compliance logos belong to the page.*

**Use:** Trust and compliance rows, partner marks, or any dull set that would otherwise break the page's look. **Avoid:** Marks that must stay exactly as issued, such as a certification with strict usage rules. Check before altering one.

Redraw the marks in the page's own graphic device. AuthKit renders its compliance marks as horizontal scanlines at about 35% white, echoing the stripes of its hero, each about 72px in a four-cell hairline row on near-black with 14px grey centred labels. Sample a bold silhouette, then draw it as rows of 1px lines on a 3px pitch. The set is held together by the pattern, so the subjects can be anything.

**In the lab:** Rendered with canvas. The shield and ring worked, and the key fell apart. Silhouette strength is everything, and real frames keep the subject simpler than you expect.

### Page rhythm: fixed-column-grid (seen on Gagosian, Polestar, Sequoia)

**Feel.** Museum catalogue. Everything has its place.
**Use when** unlike subjects must sit together for a long way: exhibitions, products, listings, editorial. **Avoid** in a short marketing page where the discipline goes unseen.
**Recipe.** Gagosian: x=124 to 1316, three 376px columns with 32px gaps, with sections, nav, footer and carousels all starting from x=124, 532 or 940. Images inside a 376px column are 334px wide, so text stays slightly wider than the image above it. Polestar: 1216px between 112px margins, six 176px columns with 32px gaps (208 pitch), with copy and link cells at x=112, 528, 944. Sequoia: three 1px rules at x=48, 720, 1392 with 640px tiles inset 16px.

### Load: exact-skeleton (seen on Stripe Customers, Comet, New Exhibitions)

*Feeling: the shape of the page, waiting.*

A skeleton earns its place only if it matches the final geometry exactly. Airbnb's tiles have the true size and radius, with logo and search live at once, and the swap lands by about 1.9s with no reflow. The analyst read 2.9s, but the strip shows it done a frame earlier. Use it for feeds, catalogues and logged-in product. Do not use it on a marketing page, where type should simply be there. Avoid the sweeping shimmer, because a moving highlight on a grey box draws the eye to the fact that nothing has loaded. See `transitions.md` Skeleton to content.

### Scroll: blur-front-wipe (seen on Render, Theatre Memory, motusmade studio)

*Feeling: an idea resolving as it is read.*

A heading resolves behind a moving front with three states: settled, a coloured band, then blurred text ahead. Render sets near-black settled letters, a plum-to-violet gradient at the front, and blurred pale letters beyond, with the second line waiting blurred below. Use it on one heading per section at most, on a light ground. It is rich, so the body copy beneath stays still.

```html
<h2 class="h" aria-label="Your heading in full">
  <span class="ln" aria-hidden="true"><i>First line of heading</i><b>First line of heading</b></span>
  <span class="ln" aria-hidden="true"><i>second line</i><b>second line</b></span>
</h2>
```
```css
.ln{position:relative;display:block;width:fit-content;--x:calc(var(--p,0)*150% - 30%)}
.ln b,.ln i{font:inherit;display:block;white-space:nowrap}
.ln i{position:absolute;inset:0;color:color-mix(in srgb,var(--ink) 34%,transparent);filter:blur(5px);
  mask:linear-gradient(90deg,transparent calc(var(--x) + 6%),#000 calc(var(--x) + 26%))}
.ln b{color:transparent;-webkit-background-clip:text;background-clip:text;
  background-image:linear-gradient(90deg,var(--ink) var(--x),
    color-mix(in srgb,var(--accent) 60%,var(--ink)) calc(var(--x) + 8%),
    var(--accent) calc(var(--x) + 16%),
    color-mix(in srgb,var(--accent) 35%,var(--bg)) calc(var(--x) + 24%),transparent calc(var(--x) + 30%))}
@media (max-width:760px),(prefers-reduced-motion:reduce){.ln b,.ln i{white-space:normal}.ln i{display:none}.ln b{background:none;color:var(--ink)}}
```
```js
const ls=[...document.querySelectorAll('.ln')],h=document.querySelector('.h');
function paint(){const r=h.getBoundingClientRect(),vh=innerHeight,p=Math.min(1,Math.max(0,(vh*.9-r.top)/(vh*.5)));
  ls.forEach((l,i)=>l.style.setProperty('--p',Math.min(1,Math.max(0,p*ls.length-i)).toFixed(3)))}
addEventListener('scroll',()=>requestAnimationFrame(paint),{passive:true});paint();
```

My first build coloured each character in its own span. It looked thin and stepped, a few letters of colour on a grey line. Two layers per line, a sharp one painted by a moving gradient and a blurred ghost masked to what lies ahead, give the wide smooth front of the real thing with no text splitting.

### Hover: media-zoom (seen on Royal Ontario Museum, 1 Hotels, N26)

*Feeling: the picture breathes.*

The image scales inside a fixed frame. N26 takes 1.1 over 0.5s, Fairphone 1.05 over 0.6s, and Dekmantel 1.02 in 0.18s. Apple uses a very exact 1.0161 over 0.3s. Studio Dado takes 1.02 over 1s on `.23,1,.32,1`. Pick by register: 1.1 for consumer, 1.05 for general, 1.02 for premium, and slower as you go up. Keep the frame fixed, with `overflow:hidden`. Add `transform:translateZ(0)` to the frame if rounded corners flicker during the scale.

```css
.zoom{overflow:hidden;border-radius:12px}
.zoom img{transition:transform .6s cubic-bezier(.23,1,.32,1)}
.zoom:hover img{transform:scale(1.05)}
```

### Phone menu: bottom-tab-bar (seen on Sonder, Airbnb, Concertgebouw)

*Feeling: this is an app.*

Tabs at the foot for sites people use. Airbnb runs three icons over 11px labels, about 60px tall with a top hairline, Explore in the accent, and a toast floating above. Sonder uses four tabs on a warm ground. Concertgebouw uses five, in a rounded-top sheet with its brand colour. Are.na strips it to plain 13px text on translucent white, with no container, which is the most distinctive version here. Use it for marketplaces, booking, media and member sites with three to five real destinations. Never on a marketing page, where nobody comes back to the third tab.

One active colour only. Three tabs is the strongest count, because the targets are large. Use real line icons drawn as SVG at one stroke weight. Typed symbols render at a tiny and inconsistent size, which I found on three demos in a row.

```css
.tabs{position:fixed;inset:auto 0 0;z-index:10;display:grid;grid-template-columns:repeat(3,1fr);
  padding:6px 24px calc(6px + env(safe-area-inset-bottom));background:var(--bg);box-shadow:0 -1px 0 var(--line)}
.tabs a{display:grid;justify-items:center;align-content:center;gap:2px;height:48px;font-size:11px;font-weight:500;color:var(--ink-2)}
.tabs a[aria-current]{color:var(--accent);font-weight:600}
.tabs svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.5}
main{padding-bottom:calc(72px + env(safe-area-inset-bottom))}
```

### Showpiece: companion-object (seen on InkTree, Sidekick, Dogstudio)

*Feeling: one thing carries the story.*

An object stays with you through several sections. Sidekick's slit-cut square rotates with scroll beside passing copy. Dogstudio's wolf re-skins per project. Swirple's phone holds while headings pass behind it. Use it to bind a long page into one piece. Keep the object simple enough to live next to text.

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

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.