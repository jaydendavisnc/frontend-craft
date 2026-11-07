# Your direction (seed 1016)

Reads as **finance**, surface **landing**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## The page, in order (structure from Stripe Climate, a gold finance page)

1. Navigation: `nav.floating-pill/section-subnav-pill`
2. Hero: `hero.split-copy-media/diagram-or-illustration-right`
3. Feature sticky scroll: `section.feature-sticky-scroll/stacked-sheets`
4. Device mockup: `product.device-mockup/soft-rim-phone`
5. Data viz: `product.data-viz/one-filled-shape`
6. Faq: `section.faq/reading-column-rows`
7. Animated demo: `product.animated-demo/typing-composer`
8. Logo wall: `section.logo-wall/ruled-cell-grid`
9. Team: `section.team/plain-name-columns`
10. Closing section: `section.cta-band/seam-overlap-close`
11. Footer: `section.footer/page-lifts-off-footer`

Build every section with real content. Top landing pages run about 5,700 to 10,900px tall at 1440. A short page reads as a template however clean it is.

## Type system

**Panchang** with **Literata**. Very wide and light up top, a true reading serif below, so the width reads as room and not as sci-fi.
- Display: 64px, phone 38px, weight 300, tracking 0em, leading 1.1. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 17px/1.55. UI: Literata 14px 500. Label: sentence case
- Load: https://api.fontshare.com/v2/css?f[]=panchang@1&display=swap https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap

## Palette

From Hugging Face: bg #ffffff, surface #f9fafb, text #000000, muted #6b7280, accent #ffd21e. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **owner, first person**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Product frames

Every product frame is a working screen at believable density: named people, real numbers and dates, statuses, at least a dozen distinct rows or labels, all readable at 100%. Build it in HTML with real text and let it move as if someone were using it. Three grey bars and a few pills fail, however well framed. This is where most of your effort should go.

## Motion is required

A still page fails, however clean it is. Build all of this, as one language: **Load** `word-blur-resolve`, **Scroll** `window-opens-to-full`, **Hover** `arrow-travel`. Their recipes are below. Stage the first screen, make scrolling visibly do something on at least three sections, and give every link, button and card an answer to the pointer. Product surfaces should animate as if someone were using them. Keep content visible without JavaScript and under reduced motion: `references/motion/foundations.md`, recipe 1, shows how.

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

**Stripe Climate** (finance, gold) https://www.stripe.com/climate
- Doing: A long, sourced argument for carbon removal presented with the rigour of a Stripe API page and one living green-to-orange gradient.
- Why it feels made: Everything hangs on a visible four-column dashed grid, charts are hand-annotated with leader lines, and shadows, angles and colour all repeat one system. Citations and reviewer lists get the same care as the hero.
- If imitated badly: Copying the angled gradient and big shadows without the grid discipline and real data produces a 2019 SaaS template.

**Stripe Connect** (finance, gold) https://stripe.com/connect
- Doing: A dense platform-payments page held together by one visible five-line column grid, with real product fragments doing the persuading.
- Why it feels made: Every element snaps to exposed dashed guides, type stays within a few sizes of Sohne, and product mocks are rebuilt in HTML with believable data. Layered blue-tinted shadows give depth with no noticeable borders.
- If imitated badly: Exposed guides and big shadows look like wireframe debris if content does not truly align to them or mocks are placeholder shapes.

**Speakeasy** (devtool, gold) https://www.speakeasy.com
- Doing: An enterprise AI security page that borrows the ruled sheet of an engineering drawing, setting hairline serif statements against ASCII figures and real product diagrams.
- Why it feels made: Every section sits on the same 1px crosshair grid, and each type voice has one job, so the page feels specified rather than decorated. Colour is confined to a thin spectrum rail, one quote mark and small status marks.
- If imitated badly: Weight 100 serif turns frail below ~48px, and the ASCII art reads as a gimmick if it is low density or tinted with brand colour.

## System choices

- Headline: `type.display-headline/regular-weight-quiet`
- Section headings: `type.section-heading/bare-statement`
- Primary button: `button.primary/signature-glyph-button`
- Surfaces: `surface.panel/ruled-cell-panel`
- Surface ladder: `atmosphere.light-surface-ladder/single-paper-surface`
- Logo: `media.logo-mark/constructed-geometric-mark`
- Icons: `media.icon-set/duotone-solid-glyphs`
- Page rhythm: `layout.section-rhythm/space-only-gaps`
- Load: `motion.load-sequence/word-blur-resolve`
- Scroll: `motion.scroll-pin-or-scrub/window-opens-to-full`
- Hover: `button.hover-response/arrow-travel`
- Phone menu: `mobile.phone-nav/scrolling-row-under-bar`
- Showpiece: `product.animated-demo/live-status-matrix`
- Showpiece: `motion.marquee/live-data-ticker`

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### Navigation: section-subnav-pill (seen on Apple Intelligence, Stripe Billing, Stripe Pricing)

*Feeling: a local table of contents that travels with you.*

A floating element for the parts of one page. Apple Intelligence sets a centred row of 36px pills at radius 18, translucent with hairlines, 18px gaps, and the current one solid black with a faint multicolour glow, in a 58px frosted band. Stripe Billing turns its subnav into a 1266x64 white card 8px from the top, with a soft blue shadow and a new 40px button, once the global bar leaves. Stripe's pricing page straddles a colour ribbon with a 348x50 pill of three anchors. Use it on long product pages. Avoid it with more than about seven anchors.

### Hero: diagram-or-illustration-right (seen on Expo, Maximize, Native Law PLLC)

- **Feels:** Designed, explanatory, no stock anywhere.
- **Use when:** You have an abstract product and can make a crafted system picture.
- **Not when:** The art is a generic isometric server rack.
- **Recipe:** Copy left, picture right on a flat ground, bleeding off an edge. Vite uses an exploded isometric stack in fine lines. Expo goes three-column: 48/52.8 headline left, a 178px white squircle ringed by a 540px burst of hairline rays and grey dots in the middle, a small paragraph right, and that centred object is what makes it memorable. Maximize uses grainy stepped blocks.

### Feature sticky scroll: stacked-sheets (seen on Forma24, Loopcraft, Paddle)

*6 sites, quality 4.* Weighty and physical, like cards dealt on a table. Use for three to six peers of equal weight. Skip it for long copy.

Recipe: sheets of about 1248 by 540 to 560px, radius 16, each sticking 14px lower than the last so the edges of earlier sheets peek. A heavy shadow, about `0 30px 40px` at 25 to 30% black, sells the overlap. Left 72px padding, a 48px title, 20/30 copy with underlined keywords, a white 52px button. UI bleeds off the right edge. Put a dark product rail inside the UI, since a white panel on a tinted sheet looks flat. The covered sheet can recede: `references/motion/scroll.md`, recipe 3, has the scrubbed form.

Seen on Paddle, Loopcraft, Forma24, North Hub Partners, LEDUP. Suits warm neutral, dark precision, light precision.

```css
.sheet { position: sticky; top: calc(88px + var(--i) * 14px); display: grid; grid-template-columns: 524px 1fr; min-height: 560px; margin-bottom: 40px; border-radius: 16px; background: var(--surface); box-shadow: 0 30px 40px rgba(0,0,0,.28); overflow: hidden; }
.copy { padding: 64px 0 64px 72px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.copy h3 { font: 400 48px/1.1 var(--font-display); letter-spacing: -.02em; }
.copy p { margin-top: 20px; font-size: 20px; line-height: 30px; }
.ui { position: relative; }
.a { position: absolute; left: 56px; top: 48px; width: 860px; height: 640px; background: var(--bg); border-radius: 8px 0 0 8px; box-shadow: 0 20px 50px -24px rgba(0,0,0,.4); }
@media (max-width: 1020px) { .sheet { grid-template-columns: 1fr; min-height: 0; top: calc(16px + var(--i) * 10px); } .copy { padding: 32px 24px; } .copy h3 { font-size: 34px; } .ui { height: 280px; overflow: hidden; } .a { left: 24px; top: 8px; } }
```

Keep sheets in block flow, with `style="--i:0"`, `--i:1` and so on. A grid or flex parent can trap a sticky child. Leave about 40vh of space after the last sheet so it can settle.

### Device mockup: soft-rim-phone (seen on Stripe Climate)

*A device in a sketch of light, with a real form inside.* Quality 5/5, 1 site.

**Use:** Payments and checkout on light gradient pages. **Not:** When the screen content is not real.

**Recipe:** Phone with no hardware detail, about 300x590, radius 44, 4px pale rim, wide soft shadow. Real checkout at 12-14px: wallet button, stacked 1px inputs, Pay button. A receipt card behind and a toast crossing both. Right edge sits on the page guide. All the realism goes on the screen. The rim is a line. Notches and buttons add nothing at this size and date fast.

```html
<style>
.ph{width:300px;height:590px;padding:14px;border-radius:44px;background:var(--bg);font-size:13px;
 box-shadow:0 0 0 4px color-mix(in srgb,var(--ink) 7%,var(--bg)),0 30px 60px -12px rgba(30,40,80,.25),0 18px 36px -18px rgba(0,0,0,.2)}
.pay{height:36px;border-radius:5px;background:var(--ink);color:var(--bg);display:grid;place-items:center;font-weight:600}
.ph label{display:block;margin:10px 0 4px;font-size:12px;font-weight:500;color:var(--ink-2)}
.in{height:32px;padding:0 9px;display:flex;align-items:center;color:var(--ink-3);box-shadow:inset 0 0 0 1px var(--line)}
.in.t{border-radius:5px 5px 0 0}.in.b{border-radius:0 0 5px 5px;margin-top:-1px}
</style>
<div class="ph"><div style="text-align:center;font-weight:600">Stoneware mug, oat</div><div class="num" style="text-align:center;color:var(--ink-2);margin:2px 0 12px">$38.00</div>
 <div class="pay">Pay with wallet</div>
 <label>Card information</label><div class="in t">1234 1234 1234 1234</div><div class="in b">MM / YY</div>
 <div class="pay" style="margin-top:14px">Pay $38.00</div></div>
```

### Data viz: one-filled-shape (seen on Public, Vercel Pricing, Yuriy Vitrenko's Library)

*Only one thing here is solid.* Quality 5/5, 3 sites.

**Use:** A single winner: lowest rate, the new layer. **Not:** Charts that must be read precisely.

**Recipe:** Descending isometric bars in 1px dotted outline on black, no axes, with only the winner solid and labelled in accent. Or a greyscale diagram with one dark outline, or a 230px outline pie with one accent slice.

### Faq: reading-column-rows (seen on Warp Pricing, Notion Calendar, Linear Changelog)

*Feeling: plain and helpful.*

The plainest treatment, and it works anywhere. Use it when the FAQ follows a centred page, or when a page is dense and needs to breathe. Warp runs a 944px column, a 50px heading aligned to the column's left edge and 61px rows. Claude runs 704px at 88px pitch with display-face questions, and this is where my first version looked weak: my questions were weight 400 and read faint beside their 500, so raise the weight when a text face sets the question. Raycast fades its rules out at both ends. Attio replaces the icon with a small grey `[+]`, a quiet developer detail. Kiro fills a 40 by 56px block behind the plus on hover.

```css
.wrap{width:min(704px,calc(100% - 48px));margin-inline:auto;padding-block:112px}
.wrap h2{font:400 48px/1.1 var(--font-display);letter-spacing:-.015em;text-align:center;margin-bottom:56px}
.list{border-top:1px solid var(--line)}
.wrap summary{min-height:88px;padding-block:24px;font:500 20px/1.3 var(--font-display)}
.a{padding-bottom:28px;font-size:17px;line-height:28px;color:var(--ink-2);max-width:36em;text-wrap:pretty}
```

### Animated demo: typing-composer (seen on Attio, Claude, Comet)

*Someone is asking it something right now.* Quality 5/5, 5 sites.

**Use:** AI products. The strongest small motion for a prompt-led tool. **Not:** Non-prompt products.

**Recipe:** Composer types real prompts at 24-58ms a character with a slower pause on spaces, then send arrow fills, a shimmering Thinking line, then the answer. Panel tint changes per task. Modify and Replay buttons below. Start from a partial line. Anthropic uses a 320px white composer on a 690x420 sage panel with faint contours. Perplexity runs it huge: 858px composer, 32px type. Cal turns it into a 40px sentence with dashed-underlined tokens that resolve.

```html
<style>
.cv{position:relative;height:420px;display:grid;place-items:center;overflow:hidden;border-radius:6px;background:var(--surface)}
.box{width:320px;padding:12px 12px 10px;border-radius:9px;background:var(--bg);box-shadow:0 1px 2px rgba(0,0,0,.05),0 12px 30px rgba(20,40,30,.1);font-size:14px;line-height:20px}
#t{min-height:40px}#t i{display:inline-block;width:1.5px;height:15px;margin-left:1px;vertical-align:-2px;background:var(--ink);animation:bl 1s steps(2) infinite}@keyframes bl{50%{opacity:0}}
#s{margin:8px 0 0 auto;width:24px;height:24px;display:grid;place-items:center;border-radius:6px;background:color-mix(in srgb,var(--accent) 16%,var(--bg));color:var(--accent);transition:background .2s,color .2s}#s.on{background:var(--accent);color:#fff}
#o{margin-top:10px;font-size:13px;line-height:1.45;color:var(--ink-2)}
.shim{background:linear-gradient(90deg,var(--ink-3) 30%,var(--ink) 50%,var(--ink-3) 70%) 0 0/200% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:s 1.6s linear infinite}@keyframes s{to{background-position:-200% 0}}
</style>
<div class="cv"><div class="box"><div id="t"></div><div id="s">↑</div><div id="o"></div></div></div>
<script>
const Q=[['Why did freight costs jump 14% in October?','Two carriers moved to peak surcharges on 3 Oct. 61% of the jump sits on the Gulf lanes.']],
 t=document.getElementById('t'),s=document.getElementById('s'),o=document.getElementById('o'),w=m=>new Promise(r=>setTimeout(r,m));
async function play(){for(let n=0;;n++){const[q,a]=Q[n%Q.length];o.textContent='';o.className='';s.classList.remove('on');
 for(let i=0;i<=q.length;i++){t.innerHTML=q.slice(0,i)+'<i></i>';await w(24+Math.random()*34+(' ,'.includes(q[i-1])?40:0))} // human rhythm
 s.classList.add('on');await w(420);o.textContent='Reading the ledger…';o.className='shim';await w(1300);o.className='';o.textContent=a;await w(3200)}}
if(matchMedia('(prefers-reduced-motion:reduce)').matches){t.textContent=Q[0][0];s.classList.add('on');o.textContent=Q[0][1]}else play();
</script>
```

### Logo wall: ruled-cell-grid (seen on Greylock, LiveKit, Speakeasy)

*Feeling: a directory, or a stock ticker.*

Logos held in a shared table, so they read as data. Rules stop mismatched logos fighting, since each gets an identical room. Use it on structured, precise pages. Greylock's is 5 by 4 at 275 by 129, no card shells, and hover draws a 2px accent edge along the cell's foot over 150ms. Speakeasy replaces the caption with a serif phrase in the first cell at 32px. LiveKit compresses the idea to one 66px strip of six cells, with a two-line label in the first. Basement dots its cell outlines. On phones go to two or three columns, and shrink marks so none is cut by its cell, which my first strip was.

```css
.strip{border-block:1px solid var(--line)}
.in{max-width:1280px;margin-inline:auto;display:grid;grid-template-columns:repeat(6,1fr);border-left:1px solid var(--line)}
.c{height:66px;display:grid;place-items:center;border-right:1px solid var(--line)}
.c.label{place-items:center start;padding-left:16px;font-size:13.5px;line-height:18px;color:var(--ink-2)}
@media(max-width:900px){.in{grid-template-columns:repeat(3,1fr)}.c.label{grid-column:1/-1;height:52px;border-bottom:1px solid var(--line)}}
@media(max-width:560px){.in{grid-template-columns:1fr 1fr}.c .wm{--wm:18px}}
```

### Team: plain-name-columns (seen on Linear About, Alessandro Stella, Pentagram About)

*Feeling: there are a lot of us, and that is all.*

Everyone else, as text. It solves a real problem: how to credit hundreds without a thousand photos. Linear runs four columns at a 336px pitch of 16px grey names on 39px lines, straight after the leaders' portraits, and the grey mass is impressive. Pentagram lists associates in small columns under a hairline. Roy Jad's mono label and value rows work for one person. Alessandro Stella's present and previous list is a CV, set well. For a small team, one line of names is better than a grid of four.

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

### Footer: page-lifts-off-footer (seen on Ramp, Cal.com, Cal.com Pricing)

*Feeling: the page is a sheet of paper on a dark desk.*

The white page ends in rounded bottom corners over a dark footer that sits behind it. Nothing else changes, and yet the whole page becomes an object. Ramp uses about 24px, Cal.com about 40px. Loops runs the same idea through its stripe rail, so the rounded corner carries the stripes around it. Use it on light product pages, and pair it with any sitemap structure. It is one of the cheapest strong endings there is.

The dark has to be behind the sheet. Set it on `body`, give the sheet the page fill, and do not put a white wrapper between them.

```css
body{background:var(--ink)}
.sheet{position:relative;z-index:1;background:var(--bg);border-radius:0 0 24px 24px;height:640px;display:grid;place-items:center;text-align:center}
.sheet h2{font:500 22px/1.2 var(--font-display);letter-spacing:-.01em;margin-bottom:24px}
.ask{display:flex;width:490px;height:58px;padding:6px;border:1px solid var(--line);border-radius:10px;align-items:center;justify-content:space-between;color:var(--ink-3);font-size:15px;padding-left:18px}
.ask b{height:44px;line-height:44px;padding:0 18px;border-radius:6px;background:var(--accent);color:var(--bg);font-weight:500}
.foot{background:var(--ink);color:var(--bg);padding:120px 64px 40px;margin-top:-1px}
.cols{display:grid;grid-template-columns:repeat(6,1fr);gap:0 16px;max-width:1312px;margin:0 auto}
.cols b{display:block;font:500 14px/20px var(--font-text);margin-bottom:10px}
.cols a{display:block;font-size:14px;line-height:26px;color:color-mix(in srgb,var(--bg) 62%,transparent)}
.cols a:hover{color:var(--bg)}
@media(max-width:760px){.cols a{line-height:44px}.sheet{height:480px;border-radius:0 0 16px 16px;padding:0 16px}.ask{width:100%}.foot{padding:64px 16px 32px}.cols{grid-template-columns:1fr 1fr;gap:28px 16px}}
```

### Headline: regular-weight-quiet (seen on Warp Pricing, Scale AI, Ramp)

Unhurried and costly. Nothing on the page is raising its voice. Seen on 10 sites.

**Use it for:** Finance, AI infrastructure and premium SaaS. Best when the page has real density below, which the calm heading can sit on top of.

**Avoid it for:** Stock text faces at display size: at weight 400 they read as unstyled. It needs a face with real drawing.

**Recipe:** Headline at weight 400 only, 48-116px, line-height 1.0-1.1, tracking -0.01 to -0.03em, black or warm near-black, flush left, one line if it fits. Allow no bold heading anywhere on the page. Hierarchy comes from size and ink alone; labels drop to 11-13px mono or small caps.

**Why it works:** Regular weight is the most common H1 weight band in the deep data, with 94 of 316 sites between 301 and 400. Generated pages reach for bold because volume feels like confidence. Regular at large size reads as more confident because it is not trying.

<a id="light-large-sans"></a>

### Section headings: bare-statement (seen on Nuro, Loops, Cal.com)

Plain, sure, editorial. Nothing around the sentence. Seen on 15 sites.

**Use it for:** Any register, provided the sentence is good. Often the best first choice.

**Avoid it for:** Generic copy, which has nowhere to hide.

**Recipe:** A short sentence with a full stop and no eyebrow, rule or subhead, 40-64px, weight 400-600, near-black, flush left or centred, 60-120px of air above and 24-64px below. Two short beats work well. It works only if the sentence states something specific.

<a id="split-heading-and-note"></a>

### Primary button: signature-glyph-button (seen on ECI, Symbol Studio, Haikei)

*Feeling: a small mark that belongs to someone.*

A plain control carrying one owned glyph instead of an arrow. ECI places a 12px black dot before the label in a 47px grey pill. Symbol Studio uses a 6px dot on an orange block. axem steps a pixel chevron. Haikei tilts a 30px dice icon by -15 degrees, since dice are the product. The glyph then recurs in lists and links, so one tiny mark does the work of a logo. Choose it from the brand's own object, and use it everywhere or nowhere.

### Surfaces: ruled-cell-panel (seen on Public, Attio, Raycast Pricing)

*Feeling: one instrument with several dials.*

A single bordered panel split into cells by shared rules, with no gaps. Public runs 1280x512, 1px, radius 8, three cells at 40px padding, each with a 16px title, 14px copy, a link, a visual that fills the rest, and an outlined pill at the foot. Use it to hold two to four related claims as one object. The visual may break out of the padding toward the rules, which is what stops it feeling boxed.

```css
/* Grid gap on a line-coloured background gives shared, undoubled rules. Cells must be opaque. */
.panel{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-strong);
  border:1px solid var(--line-strong);border-radius:8px;overflow:hidden}
.cell{background:var(--bg);height:512px;padding:40px;display:flex;flex-direction:column}
.cell h3{font:500 16px/1.3 var(--font-text);letter-spacing:-.01em;margin-bottom:8px}
.cell p{font-size:14px;line-height:19.5px}
.viz{flex:1;margin:0 -18px;display:flex;align-items:center;justify-content:center;min-height:0}
@media(max-width:760px){.panel{grid-template-columns:1fr}.cell{height:auto;padding:28px}}
```

If `--line` is translucent, `--bg` on the cells keeps it correct, because the lines are the gaps.

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

### Page rhythm: space-only-gaps (seen on Cal.com, Vercel AI SDK, Meridian)

**Feel.** Airy and modern. Confident enough not to need dividers.
**Use when** modules are dense and strong on their own, on developer and product pages. **Avoid** with sparse modules, since space around thin content reads as an unfinished page.
**Recipe.** One ground from nav to footer. No dividers, bands or tints. 160 to 240px of empty page between sections. Modules themselves stay tight, with hairline cards. Cal.com runs 14,729px this way on a 1264px rail. Meridian pushes gaps to 240 to 320px and opens each section with a heading left and a sub on the right half of the same row.

### Load: word-blur-resolve (seen on Greylock, Linear Method, Monark Markets)

*Feeling: a thought coming into focus.*

Words resolve left to right from blur and a saturated tint to sharp ink. On Greylock the first words are mid-resolve at 1.1s in a clear pale blue, and the line is done by 1.9s, so the wave runs at about 140ms a word. Use it on one short headline, six or seven words at most. Long headlines take too long at this rate, and speeding it up turns it into a smear. Do not blur body copy. For mechanics, see `load.md` Choreographed hero.

```css
h1 span{display:inline-block;animation:resolve .75s var(--ease-soft) both;animation-delay:calc(.3s + var(--i)*140ms)}
@keyframes resolve{
  from{opacity:.1;filter:blur(10px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  60%{opacity:1;filter:blur(2px);color:color-mix(in srgb,var(--accent) 55%,var(--bg))}
  to{filter:none;color:var(--ink)}}
```

Put `aria-label` on the `h1` and `aria-hidden` on each span, or a screen reader spells out the split. The mid-animation colour is the difference between this and a generic blur. My first pass faded a washed tint at 90ms a word, which read as lag rather than focus.

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

### Hover: arrow-travel (seen on Stripe, Baseten)

*Feeling: the button leans towards where it goes.*

Only the arrow moves. Stripe's chevron grows a stem and travels 3 to 6px in 300ms on `cubic-bezier(.25,1,.5,1)`, while the fill darkens. Baseten moves a diagonal arrow 5px up and right in 400ms on `cubic-bezier(.75,0,.1,.99)`. The button stays put, so the target never shifts. This is the best hover for a marketing button, as it adds meaning, not just a state. The code is under [saturated rectangle](#3-saturated-rectangle).

### Phone menu: scrolling-row-under-bar (seen on Apple Intelligence, Stripe Connect, Stripe Climate)

*Feeling: everything is one flick from the top.*

A row under the header that scrolls sideways and clips at the screen edge, so the cut item says there is more. Stripe pins a section name at left and scrolls the rest beneath the top bar on every product page. Apple Intelligence adds a back chevron and pins the active chip. Bonobos runs 60px round category photos with 12px labels, with the fifth cut by the edge, so categories come before the hero. Monocle clips a row of section tabs split by pipes. Ritual splits a 50px row into two shop cells. Use it for product families, shops and sections with five to eight peers. The cut through the last visible item is the affordance, so never fit the row exactly.

Fade only the right end. My first version faded both ends, and at rest the mask ate the first letter of the first link.

```css
.sub{position:sticky;top:0;z-index:4;display:flex;align-items:center;height:44px;background:var(--bg);font-size:14px;font-weight:500}
.sub b{flex:none;padding:0 16px;color:var(--accent)}
.sub div{display:flex;gap:20px;min-width:0;padding-right:32px;overflow-x:auto;white-space:nowrap;scrollbar-width:none;
  -webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent);
  mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent)}
.sub div::-webkit-scrollbar{display:none}
```

For a shop, the same row carries round photos:

```css
.rail{display:flex;gap:12px;padding:8px 16px 12px;overflow-x:auto;scroll-snap-type:x proximity;scroll-padding-left:16px;scrollbar-width:none}
.rail a{flex:none;width:68px;scroll-snap-align:start;text-align:center;font-size:12px;line-height:16px}
.rail img{width:60px;height:60px;border-radius:50%;object-fit:cover;margin:0 auto 6px}
```

### Showpiece: live-status-matrix (seen on Buildkite, Airpost: The Frontier Marketing OS for Frontier Companies, Trigger.dev)

*Hundreds of things running in parallel.* Quality 5/5, 3 sites.

**Use:** CI, agents, ad variants, anything with fleets. **Not:** Small fleets of under about 20.

**Recipe:** Grid of 34-40px tiles with green checks and amber-outlined running jobs with counters, fading at the base. A floating white count card overlaps top right. Tiles change state one at a time, every 400ms. Status sits in the edge and icon. Colour fills across 60 tiles look like a game board. Airpost uses filled tiles but dims them and adds a scripted cursor and popover.

```html
<style>
.mx{height:230px;overflow:hidden;mask-image:linear-gradient(#000 70%,transparent)}
.g{display:grid;grid-template-columns:repeat(10,1fr);gap:6px}
.j{display:flex;align-items:center;gap:6px;height:34px;padding:0 6px;border-radius:6px;font-size:12px;font-variant-numeric:tabular-nums;color:var(--ink-2)}
.j::before{content:"✓";color:var(--ok)}
.j.r{box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--warn) 55%,transparent);background:color-mix(in srgb,var(--warn) 8%,transparent)}.j.r::before{content:"‹›";color:var(--warn)}
</style>
<div class="mx"><div class="g" id="g"></div></div>
<script>
const g=document.getElementById('g');for(let i=1;i<=59;i++)g.insertAdjacentHTML('beforeend',`<div class="j${i%2||i<4?'':' r'}">${i}</div>`);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(()=>{const r=[...g.querySelectorAll('.r')];if(r.length)r[Math.random()*r.length|0].classList.remove('r');else g.querySelectorAll('.j:nth-child(even)').forEach(e=>e.classList.add('r'))},420);
</script>
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

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.