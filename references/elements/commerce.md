# Commerce

A store asks a stranger to hand over money for something they cannot touch. Product cards, listings, filters, product pages and carts do not win on style. They win when the shopper never has to wonder what this is, what it costs, which one they are getting, when it will arrive, or how to send it back. This chapter teaches how well-run stores answer those five questions, and why some stores feel looked after while others feel like a template with a payment button.

It holds 66 canonical variants, clustered from 217 analyst rows across 143 store, catalogue and listing pages. The strongest variants of each element were checked against real frames, and 27 were rebuilt and rendered, 25 of them next to a real frame, using an unbranded product set shot in Cycles so that layout could be judged on equal terms. That work produced the corrections and the mistake lists. The same variants live in `data/elements/commerce.jsonl`, which is what the sampler deals from. Recipes use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in. Hex values appear only where they are neutral greys, measured facts about a site, or the one stock green in the tokens. Treat those as evidence, not as a palette to copy.

**Contents.** [What makes a store feel well run](#what-makes-a-store-feel-well-run) · [What we measured](#what-we-measured) · [Derived tokens](#derived-tokens) · [Eight store systems](#eight-store-systems) · [Image handling](#image-handling) · [Price hierarchy](#price-hierarchy) · [Variant selection](#variant-selection) · [Delivery and returns](#delivery-and-returns) · [Add to cart](#add-to-cart) · [How the cart behaves](#how-the-cart-behaves)

- **[Product card](#product-card):** [justified caption](#1-justified-caption-tile) · [stacked caption](#2-stacked-caption-tile) · [no caption](#3-no-caption-tile) · [swatch row](#4-swatch-row-card) · [cut-out swatch](#5-cut-out-swatch-card) · [spec rows](#6-spec-rows-card) · [quick add](#7-quick-add-tile) · [visible add](#8-visible-add-card) · [retail dense](#9-retail-dense-card) · [self tinted](#10-self-tinted-card) · [bare product](#11-bare-product-no-card) · [ruled spec cell](#12-ruled-spec-cell) · [bundle contents](#13-bundle-contents-card) · [bookable listing](#14-bookable-listing-card) · [cover art](#15-cover-art-card) · [price tag over photo](#16-price-tag-over-photo) · [compact row](#17-compact-product-row)
- **[Collection grid](#collection-grid):** [one ground](#1-one-ground-grid) · [seam contact sheet](#2-seam-contact-sheet) · [ruled columns](#3-ruled-column-grid) · [interleaved](#4-interleaved-grid) · [category panels](#5-category-photo-panels) · [category cut-outs](#6-category-cut-out-tiles) · [category thumbs](#7-category-thumb-rail) · [peek rail](#8-peek-rail) · [model chooser](#9-model-chooser-row) · [stage chapters](#10-product-stage-chapters) · [shelf baseline](#11-shelf-baseline-row) · [photo beside shop](#12-photo-beside-shop) · [thumbnail wall](#13-thumbnail-wall) · [two-up listing](#14-two-up-listing) · [place and date](#15-place-and-date-grid) · [header band](#16-collection-header-band)
- **[Filters](#filters):** [dropdown bar](#1-dropdown-bar) · [chip tray](#2-chip-tray-bar) · [category pills](#3-category-pill-row) · [pills plus launcher](#4-pills-plus-launcher) · [docking scroller](#5-docking-pill-scroller) · [accordion rail](#6-accordion-rail) · [chip facets](#7-chip-facet-sidebar) · [thumbnail quick filters](#8-thumbnail-quick-filters) · [quiet text](#9-quiet-text-filter) · [taxonomy index](#10-taxonomy-index) · [capsule tabs](#11-capsule-tabs-and-search)
- **[Product detail](#product-detail):** [split gallery](#1-split-gallery-buy-box) · [narrow info](#2-narrow-info-wide-gallery) · [configurator](#3-sticky-visual-configurator) · [purchase modes](#4-purchase-mode-radios) · [option tiles](#5-option-tiles-with-price) · [set includes](#6-set-includes-bundle) · [colourway stage](#7-colourway-stage) · [enquiry block](#8-enquiry-spec-block) · [inline buy box](#9-inline-buy-box) · [sticky add bar](#10-sticky-add-bar) · [accordion specs](#11-accordion-spec-list) · [reassurance](#12-reassurance-stack) · [cross-sell](#13-cross-sell-row)
- **[Cart](#cart):** [filled drawer](#1-filled-drawer-lines) · [cart page](#2-cart-page-with-summary) · [guided empty drawer](#3-guided-empty-drawer) · [voice empty drawer](#4-voice-empty-drawer) · [progress and upsell](#5-progress-and-upsell-drawer) · [recommended pair](#6-recommended-pair-drawer) · [empty bag page](#7-empty-bag-page) · [running total](#8-running-total-header) · [donation picker](#9-donation-amount-picker)
- [Before you call it done](#before-you-call-it-done)

## What makes a store feel well run

Six habits account for nearly all of the gap between a store people trust and one they do not. None of them is about taste.

**Everything is shot the same way.** One ground, one camera height, one light direction, one scale. A grid of matched pictures is the first proof that somebody is in charge of this stock. Mixed backgrounds tell the shopper that the catalogue was assembled, not curated, and they feel that before they read a word. X8 Eyewear shows four frames at the same angle, on the same grey, at the same 61 percent of tile width. Nothing else on the page needs to be clever.

**Facts sit beside the action.** Price, size, what is in the box, when it arrives, how to return it. Good stores state these plainly at 13 to 14px, directly under the button, where the fear appears. Weak stores hide them in an accordion, a footer or a policy page, and put a tagline there instead.

**The price has one place.** Same position on every card. Same size. Same format. It appears in the product title block, again inside the button, and again in the sticky bar, and the three always agree.

**Nothing moves under the hand.** Images reserve their ratio before they load. Choosing a size does not reflow the column. The button stays the same width when its label changes. A store that jumps feels broken even when it works.

**Every action answers in place.** Pick a colour and the picture, price and stock change at once. Add to cart and the count updates, without a page load, and the shopper keeps their place.

**Nothing stands between the shopper and the product.** This one needs saying, because the corpus is full of the opposite. On arrival, a sale or email modal sat over the buy box or grid at Vitruvi, Our Place, Peak Design, Parachute, HexClad, Harney, Counter Culture, Allbirds and Olipop. A location or consent panel did the same at ACME, Fairphone, Ghia, Felix Gray and LEA. At Allbirds the modal sat on top of the open cart. These are good stores with a bad habit, and every one of those frames looks worse than the store it belongs to. Do not build it. If an email capture is required, use a slim bar, the footer, or the confirmation page. A real consent banner sits at the bottom edge and never over the button.

Every element below serves one of these questions.

| The shopper is asking | Answer it here | With |
|---|---|---|
| What is it, exactly? | Card, title block | One clean picture, plain name, one descriptor |
| What does it cost? | Under the name, then inside the button | One price, unit price when it helps |
| Which one am I getting? | Option groups | Label plus current value, picture that follows |
| Is it any good? | Beside the title | Stars linked to a real count |
| Is it in stock, when does it come? | Under the button | A date, not a range |
| What if I hate it? | Under the button | Returns window in one short line |
| What is in my cart, and what is the total? | Drawer | Lines, subtotal, what happens next |

## What we measured

**Tile tone.** Sampled from real frames. The step is smaller than you think, and warm goods get a warm grey.

| Site | Page | Tile | Step |
|---|---|---|---|
| Gorjana | #ffffff | #fafafa | 2% |
| Rishi | #ffffff | #fafaf8 | 2%, warm |
| Snow Peak | #ffffff | #f8f8f8 | 3% |
| Bellroy | #ffffff | #f7f7f7 | 3% |
| Blue Bottle | #ffffff | #f6f6f4 | 3.5%, warm |
| Therabody | #fffcf5 | #f7f3e9 | 3%, warm |
| Huel | #ffffff | #f5f2ec | 5%, warm |
| Fairphone | #ffffff | #f4f4f4 | 4.5% |
| Acne Studios | #ffffff | #f2f2f2 | 5% |
| reMarkable | #f8f6f0 | #ece8de | 5%, warm |
| GoPro | #ffffff | #e8e8ec | 9%, cool |
| Fidèle | #f6f6ee | #e2e2de | 8% |
| X8 Eyewear | #000000 | #ebebeb | Light tile on black |
| Ghia | #fff6f0 | #000000 | Black tile on cream |
| Ritual | #ffffff | #fcf2ad | One brand colour |

**Product fill.** Measured as a bounding box inside the tile. Bellroy's wallet takes 39 percent of tile width and its carry-on 29 percent. X8's frames take 61, Huel's bag 61 and Blue Bottle's mug 60. So listings run from 30 to 60 percent of width, with tall goods up to 70 percent of height. Air around the object reads as price. Big objects read as a marketplace.

**Stores run wide and short of chrome.** Across 15 stores with measured specs, the main container has a median of 1328px against 1113 for gold sites generally, and the top of the page is taller, with a median of 94px of nav against 69, because of promo bars. Button height is 36 / 41 / 48. Button radius is 0 on 39 percent, 5 to 8 on 20 percent, pill on 17 percent, and 17 to 40 on 13 percent. Square corners are far more common in shops than in software, and button labels sit at 13 to 14px.

**Hover is slower here.** Of 34 store cards probed, 59 percent respond to hover. Of those, 65 percent move something and 40 percent crossfade something. Duration is 300 / 400 / 600ms against 200 / 300 / 400 across the corpus, and scale has a median of 1.05, from 1.025 up to 1.1. Fairphone scales the image inside its clip to 1.05 over 600ms on `ease`. Marine Layer crossfades to a second image over 400ms on `cubic-bezier(.4,0,.2,1)`, and Fred over 350ms. Taschen scales 1.025 in 200ms. Merchandise can take a slow, soft hover, where a software card should stay quick. Almost nobody lifts the whole card.

**The buy box.** Add button height ran 40 to 55 with a median of 50. Buy box width ran from 400 to 656. Product titles ran from 30 to 48px, and prices from 18 to 24px. In seven of the eight product pages we measured, the add button started on the first screen at 1440 by 900, between y=432 and y=871. Harney was the exception, because two promo bars and a review card pushed it below the fold.

**The drawer.** Desktop cart drawers measured 422, 435, 480, 530 and 600px wide on a 1440 screen. The estimate of about 340 that kept turning up in analyst notes is wrong. Anything under 400 cramps the line items.

## Derived tokens

Add these once. Everything below uses them, and because they mix from the palette, a warm palette gets a warm tile with no further work.

```css
:root{
  --line-strong:color-mix(in srgb,var(--ink) 18%,transparent);
  --tile:color-mix(in srgb,var(--ink) 4%,var(--bg));
  --sale:var(--accent);
  --ok:color-mix(in srgb,#14804a 85%,var(--ink));
}
```

Set any theme attribute on `html`, not `body`. A `color-mix` declared on `:root` resolves there, so a theme set lower down leaves `--tile` and `--sale` holding the old palette. Our first warm demo had blue sale prices for this reason. Use `--tile` for product grounds, `--sale` for one sale colour and nothing else, and `--ok` for stock dots only. If the brand is calm, set `--sale` to `--ink` and let the strikethrough do the work.

## Eight store systems

Variants work as a set. A gallery tile with a retail badge stack reads as a mistake. Choose one row, then take every card, grid, filter and buy box from it. Two stores built from different rows will look unrelated, and that is the point, so let the deal or the brief decide rather than a favourite.

| System | Tile | Card type | Radius | Buttons | Reference |
|---|---|---|---|---|---|
| Gallery | Flat #f2 to #f8, tall 3:4 | 12 to 13px, name and price only | 0 | None on the card, square on the page | Acne Studios, Stone Island, X8, Reformation |
| Warm specialist | Cream tile on cream or white | 13 to 16px, specs and unit price | 8 to 12 | 32 to 40px pill | Huel, Therabody, Rishi, Blue Bottle |
| Instrument table | None, ruled cells | 11px caps, sometimes mono | 0 | A table row that adds | ACME, 099, Teenage Engineering |
| Model shop | Tall tinted column per model | 28 to 34px names | 0 to 28 | One 40 to 44px button | Apple, reMarkable, Polestar, GoPro |
| Bold pantry | Colour tile, stickers, big radius | Display type on the card | 16 to 40 | Pill, often inside the tile | Ritual, Ghia, Olipop, Fairphone, Seed |
| Dark hardware | No tile, product on near-black | 14 to 30px, spec led | 0 or pill | One deep accent | HexClad, FORUM, X8 |
| Retail | Light tile, dense stack | Largest thing is the price | 0 to 8 | Round add button | IKEA, Ulta, Gorjana |
| Small shop | None, picture beside a list | Editorial, serif or text | 0 | Text links, enquiry | Kinfolk, Ne Geurra, White Cube, Isolabella |

Local businesses usually belong in Warm specialist or Small shop. A bakery with nine loaves needs a shelf and a pick-up time, not a filter rail.

## Image handling

Pictures do most of the selling, and they carry most of the trust. We rendered a small product set before building a single demo, because a store layout cannot be judged on grey boxes. In order of importance:

1. **One ground per listing.** Choose white-grey, cream, studio tan, or black, and hold it on every tile. Arc'teryx shoots every model against the same warm tan, so a page of 33 jackets reads as one colour field.
2. **One camera.** Same angle, height and light direction. If the catalogue has mixed shots, re-cut them or use a uniform crop, because a filter or a border cannot fix a mismatch.
3. **Scale for air.** Put the object at 30 to 60 percent of tile width and keep its optical centre slightly above the tile's middle for short objects, or sitting low for things that stand. Stack small goods larger than their true size, because a ring and a sofa must carry equal weight in a grid.
4. **Reserve the box.** Always set `aspect-ratio` and a background on the tile, so the grid is complete before any image arrives. Omega's captures show its grid holding shape with empty pale tiles, which is exactly what should happen. A grid that collapses and then jumps is the cheapest failure a store has.
5. **Crop thumbnails separately.** A 48 to 88px slot needs the object at 85 percent of the slot. Reusing the 60 percent listing crop leaves a speck in a box. This was the most visible flaw in our first cart.
6. **Change distance between images.** The second image must be a different distance from the first: on the body, in the room, a macro of the material. Our first interleaved grid used the same object at four times the size, and it looked like an error, not a lifestyle shot.
7. **Seat cut-outs properly.** See below.

**Seating a cut-out.** A PNG with a baked shadow usually hides a rectangle. The shadow fades to nearly nothing, but not to zero, so on any tinted tile the edge of the plate shows as a faint box. It appeared in the first six demos we rendered, and it read as cheap at once. There are two good fixes. If the photo was shot on white, use `mix-blend-mode:multiply` on the image, so the white vanishes and the shadow stays. It also deepens the product a little, so keep the tile under about 10 percent tint, and it fails on dark tiles. If the image is a cut-out, feather the shadow to true zero before the edge of the file, or remove it and draw a contact shadow in CSS.

```css
.tile{position:relative;aspect-ratio:4/5;background:var(--tile);overflow:hidden}
.tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:transform .6s ease}
.tile img.white{mix-blend-mode:multiply}          /* shot on white, tile is any light tint */
.card:hover .tile img{transform:scale(1.04)}      /* inside the clip, never the card itself */
.tile img+img{opacity:0;transition:opacity .35s cubic-bezier(.4,0,.2,1)}
.card:hover .tile img+img{opacity:1}
@media(hover:none){.tile img+img{display:none}}   /* phones get a swipe or nothing */
/* A contact shadow you control, for transparent cut-outs */
.tile .shadow{position:absolute;left:22%;right:22%;bottom:17%;height:5%;border-radius:50%;
  background:color-mix(in srgb,var(--ink) 34%,transparent);filter:blur(10px)}
```

Load the first row eagerly and the rest with `loading="lazy"`. Give every image real `width` and `height`. Write alt text that names the variant, such as `Oat stoneware mug, 12 oz`, because a screen reader user is choosing a colour too.

If you have no product photography, do not draw products in CSS, do not use emoji, and do not use a stock image of a similar object. Build the page from what you can make, as in `references/imagery.md`. If a slot truly needs a picture, hold its true ratio with `surface.panel/true-ratio-placeholder` and name it in your closing note, never on the page. An unbranded 3D render is the only stand-in that passes, and only for a prototype.

## Price hierarchy

Price is the most-read number on the page and the most often mishandled. Decide four things.

**How loud.** Loudness follows the category. On a fashion or design card, price matches the name at 12 to 14px, because the picture sells and a loud price cheapens it. On a product page it steps up to 18 to 24px, about 1.6 times body. At the retail end it becomes the largest thing on the card: IKEA sets 28/700 with superscript cents. Choose once, then hold it on every card.

**Where.** Directly under the name, or on the name's line at the right. A right-aligned price on a justified row forms a column of prices across the grid, which makes comparison effortless. Never float it over the image unless the variant demands it.

**What format.** Use tabular figures, with one currency style throughout. Show cents on all of a row or none: Blue Bottle uses `$32`, Arc'teryx `$400.00`, and both work. A mix does not. Use `From $45` when variants differ in price, and a range only if it is short. Taschen's bare `100` and `125` with no currency sign is a confident detail that works only for a known publisher.

**What else.** Add at most one of these, and quietly:

| Extra | Form | Seen on |
|---|---|---|
| Sale | Current price first in `--sale`, struck original after it at the same size in `--ink-3`, one saving line | Bludot, Ritual, Harney |
| Unit price | `From $45 / $2.65 per meal`, the unit part muted | Huel, Candy Vault |
| Instalments | 14px muted line under the price, never larger than it | HexClad, Glossier, Our Place |
| Rate | `$995 / night`, `$18 per class`, always with its unit | Sonder, Outschool |
| Finance | Two-line price with a footnote mark, and the footnote must exist | Apple, Rivian |

Then the price goes in the button. `Add to Cart · $170` removes the last moment of doubt, and it proves the page knows what you selected. Brightland, Glossier and Diasporaco all do this, and their sticky bars repeat it.

```html
<p class="price"><span class="now">$44</span> <s aria-label="Was $56">$56</s></p>
<p class="saving">20% off</p>
```

```css
.price{font-size:14px;line-height:20px;font-variant-numeric:tabular-nums}
.price .now{font-weight:500;color:var(--sale)}
.price s{color:var(--ink-3);margin-left:6px}
.saving{font-size:12px;line-height:18px;color:var(--sale)}
```

Never stack a red price, a strikethrough, a percentage badge and a ribbon. Harney's strike, red price and tag is the upper limit, and it sits on a very busy page. Never invent a was-price. Never set a sale price in a colour the rest of the page uses for links.

## Variant selection

The shopper is about to commit to one exact thing. Selection has to feel certain.

**Say what is selected, in words.** HexClad's label reads as a sentence with the answer in it: a 14px prompt followed by the bold current value. The control shows the state and the label confirms it, so a colour-blind shopper and a distracted one both get the answer.

**Pick the control by what varies.**

| What varies | Control | Size |
|---|---|---|
| Colour, up to 12 | Round swatches with a ring on the selected one | 12 to 20px dot, 32 to 44px hit area |
| Colour, when shape matters | Cut-out product thumbnails | 44 to 48px |
| Size or capacity | Chips or pills | 34 to 44px tall |
| Price or format | Tiles with the difference written in | 2 to 4 tiles, about 170 by 108 |
| Yes or no extras | One checkbox row with its price | 44 to 48px |
| Delivery cadence | Radio rows | 48 to 52px |
| Quantity | Stepper | 32 to 52px |
| More than 8 sizes | Dropdown, and only then | 44px |

**Use two signals for selected.** Ring plus fill, or border plus weight. A hairline that darkens is not enough on its own. Bellroy and Fairphone offset the ring 2px from the dot, so the swatch colour stays pure and the ring never merges with it.

**Show unavailable options.** A hidden size looks like a bug. Keep it visible, strike it with a diagonal hairline, mute the label, keep it focusable, and let the button offer to notify. Do not grey the whole button.

**Update in place.** Price, picture, stock line and button change within a frame or two, with no reload, and the URL updates so the exact variant can be shared. If a size is required and none is set, the button reads `Select a size`, rather than failing after the click.

```html
<fieldset class="opt"><legend>Select a size: <b id="sv">7 inch</b></legend>
  <div class="pills">
    <label><input type="radio" name="size" value="5 inch"><span>5 inch</span></label>
    <label><input type="radio" name="size" value="7 inch" checked><span>7 inch</span></label>
    <label><input type="radio" name="size" value="9 inch" disabled><span>9 inch</span></label>
  </div>
</fieldset>
```

```css
fieldset{border:0;padding:0;margin:0}
.opt{margin-top:28px}
.opt legend{font-size:14px;line-height:20px;padding:0;margin-bottom:10px}.opt legend b{font-weight:600}
.pills{display:flex;flex-wrap:wrap;gap:12px}
.pills label{position:relative;cursor:pointer}
.pills input{position:absolute;inset:0;opacity:0}
.pills span{display:flex;align-items:center;height:42px;padding:0 20px;border-radius:999px;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:15px;transition:box-shadow .12s,background .12s}
.pills label:hover span{box-shadow:inset 0 0 0 1px var(--ink-2)}
.pills input:checked+span{box-shadow:inset 0 0 0 1px var(--ink);background:color-mix(in srgb,var(--ink) 9%,transparent)}
.pills input:focus-visible+span{outline:2px solid var(--accent);outline-offset:2px}
.pills input:disabled+span{color:var(--ink-3);cursor:not-allowed;
  background:linear-gradient(to top right,transparent calc(50% - .5px),var(--line-strong) 50%,transparent calc(50% + .5px))}
```

Native radios underneath keep keyboard use and form submission for free. Set the corner radius from the store's system: pills for soft stores, 0 for square ones. Glossier joins three 34px chips into a single block with no gaps, which saves width in a 400px column.

## Delivery and returns

This is the most neglected line in commerce and the one that does the most work. Answer it within 16px of the add button, not in an accordion.

- **A date beats a range.** Harney's phone layout gives a day and date next to the buyer's ZIP. `Arrives by Tue, Nov 10` is better than `Ships in 3 to 5 days`. If you cannot compute a date, give a ship date: Diasporaco states stock and a 24 to 48 hour dispatch window.
- **Make the ZIP editable.** Show it underlined, as Harney and Our Place do. It proves the date is real.
- **Put stock in a sentence.** A 7px dot in `--ok`, then words. IKEA gives two lines per product, one for delivery and one for the named store. `In stock in Charlotte, NC` is worth more than a green tick.
- **Give the threshold once, then track it.** `Free shipping over $60` in the promo bar and the buy box, then a progress line in the cart.
- **Keep returns beside delivery.** One short line naming the window. HexClad gives three short facts in an icon row under the button.
- **Use real urgency or none.** `Order in 3 h 20 min` is fine if a real cut-off stands behind it. Fake countdowns and invented low-stock counts are lies that a repeat customer will spot.
- **Offer pick-up for local shops.** `Ready today after 2 pm at Main St` closes the sale. Apple splits its delivery options into a three-part strip with hairlines: fast delivery, free shipping and store pick-up.

Keep this block to four facts. Past that it turns into noise, and the shopper stops reading the one that matters.

## Add to cart

The button should be the single most saturated thing on the page. HexClad's is the only red on a black page. Brightland's is the only full-width black bar. Everything above it leads down to it, and nothing beside it competes.

**Anatomy.** Height 48 to 56 on a product page, full width of the buy box, solid fill, 15 to 17px at 500 to 600, with the price inside. Use `Add to cart` or `Add to bag`, chosen once and kept across the site. `Buy now` is a different promise. If express checkout is offered, it sits below as a second control, and it must not match the first one. On a dark page pull the accent down in lightness: a mid-tone coral looks like an alert, a deep red looks like hardware, and our first render made exactly this mistake.

**States.** Build all of these, because this is where a store feels solid or flimsy.

| State | What the button does |
|---|---|
| Needs a choice | Reads `Select a size`, still looks active, and scrolls to the group on click |
| Busy | Keeps its width, swaps label for a small spinner, ignores repeat clicks |
| Done | Shows a tick and `Added` for about 1.5s, while the count updates |
| Failed | Returns to normal, with a plain reason on the line below |
| Sold out | Becomes `Notify me`, not a dead grey block |
| Sticky | Repeated in a bar only while the real button is off screen |

```css
.atc{position:relative;display:flex;justify-content:center;align-items:center;gap:8px;width:100%;height:52px;
  background:var(--ink);color:var(--bg);font-weight:500;font-variant-numeric:tabular-nums;transition:filter .15s}
.atc:hover{filter:brightness(1.12)}.atc:active{filter:brightness(.92)}
.atc[data-state=busy]{color:transparent;pointer-events:none}
.atc[data-state=busy]::after{content:"";position:absolute;width:18px;height:18px;border-radius:50%;
  border:2px solid color-mix(in srgb,var(--bg) 35%,transparent);border-top-color:var(--bg);animation:spin .7s linear infinite}
@keyframes spin{to{rotate:360deg}}
@media(prefers-reduced-motion:reduce){.atc[data-state=busy]::after{animation-duration:2s}}
```

```js
async function add(btn,item){
  const idle=btn.innerHTML; btn.dataset.state='busy';
  try{
    const cart=await api.add(item);            // keep the page, never navigate
    btn.dataset.state='done'; btn.textContent='Added';
    renderCart(cart); drawer.showModal();
  }catch(e){ showError(btn,e.message) }
  finally{ setTimeout(()=>{btn.innerHTML=idle;delete btn.dataset.state},1500) }
}
```

**After the click.** Open the drawer for considered goods, and for a first item. For repeat or small goods, as on a quick-add tile, stay put, tick the button and bump the cart count, because opening a drawer on every tea tin is exhausting. Never send the shopper to a cart page on add.

## How the cart behaves

A caution on evidence: the crawler does not shop, so every cart in the corpus was captured empty. Empty-state variants below are measured from real frames. The filled drawer and cart page were built from the anatomy of those drawers, from the set rows on Brightland and from the upsell rows on Olipop and Kith, and tested in our own render. Treat those numbers as tested, not surveyed.

**Drawer by default.** A right-side drawer keeps the page, keeps the scroll position and lets someone carry on shopping. Use a full cart page only as well, for those who arrive by link, and for stores with long baskets. On phones the drawer is full width.

**Build it on `<dialog>`.** `showModal()` gives you the focus trap, Esc to close, an inert page behind it and a `::backdrop` for nothing. Close on backdrop click, return focus to the cart button, and stop the page behind from scrolling.

```html
<dialog id="cart" class="drawer" aria-label="Your cart">
  <header class="dh">Your cart (3) <form method="dialog"><button aria-label="Close">×</button></form></header>
  <div class="prog"><b>$12 away</b> from free shipping<div class="track" style="--w:80%"><i></i></div></div>
  <div class="lines"><!-- lines --></div>
  <footer class="df"><!-- subtotal, note, checkout --></footer>
</dialog>
```

```css
dialog.drawer{position:fixed;inset:0 0 0 auto;width:min(440px,100vw);max-width:none;height:100dvh;max-height:none;
  margin:0;padding:0;border:0;display:none;flex-direction:column;background:var(--bg);color:var(--ink);
  translate:100% 0;transition:translate .28s cubic-bezier(.2,.8,.2,1),display .28s allow-discrete,overlay .28s allow-discrete}
dialog.drawer[open]{display:flex;translate:0 0}
@starting-style{dialog.drawer[open]{translate:100% 0}}
dialog.drawer::backdrop{background:color-mix(in srgb,var(--ink) 42%,transparent)}
.lines{flex:1;overflow:auto;padding:0 20px;overscroll-behavior:contain}
.dh,.prog,.df{flex:none}
```

```js
drawer.addEventListener('click',e=>{ if(e.target===drawer) drawer.close() })
```

**Header and footer stay fixed, and the lines scroll.** The total and the checkout button are never more than a thumb away, whatever is in the basket.

**A line is a promise.** It needs a thumbnail tight enough to recognise, the name, the exact variant in words, the line total, a unit price when quantity exceeds one, and a way to change it. If an item in the cart loses stock, flag that line in words.

**Quantity changes in place.** Use a stepper, never a native select, which is the cheapest element that ever appears on a good cart page. Update the line and subtotal immediately, then reconcile with the server, and roll back with a message if it fails.

**Removal can be undone.** Collapse the line to a short row reading `Removed. Undo` for about 5 seconds, so that the list does not jump and a slip costs nothing.

**The total tells the truth.** Show the subtotal, then a plain note that tax and shipping come at checkout, or better, the real figures. Surprise costs at the last step are the commonest reason a shopper leaves.

**Progress is honest.** A 3 to 4px bar with `$12 away from free shipping` above it, animating over 400ms when it changes. When it is reached, say so in words. Glossier sets it small at the right of the header line, and Olipop makes it the drawer's headline, which suits a low-priced basket.

**One upsell, and it adds in place.** One or two small rows with an `Add` button, placed after the lines and never between the total and the checkout button.

**Empty is a shopping surface.** Every good empty cart in the corpus routes the shopper somewhere. A dead end is a lost sale.

**Remember it.** A cart survives refresh and return visits, and it merges on sign-in.

## Product card

A product card does one job: earn the click from someone comparing it with its neighbours. It has about a second to say what the thing is, what it costs, and that this store has its act together.

What separates great from cheap is restraint plus sameness. Great cards are nearly all picture, with a little plain text, and every card in the row is built identically, so that the eye compares goods rather than layouts. X8 Eyewear shows a name and a price at 13px under a 340px tile. Acne Studios shows nothing at all. Cheap cards are all chrome: a box, a shadow, a radius, a badge, a heart, a rating, a button, each asking for attention, on a picture that does not match the one beside it.

Match density to how the shopper decides. Do not choose a card by how it looks. Choose it by what the buyer needs to know before opening the page.

| The shopper decides by | Use | Why |
|---|---|---|
| Looks | Justified, stacked, no caption | The picture is the argument |
| Colour | Swatch row, cut-out swatch | The range is the argument |
| Facts and value | Spec rows, retail dense | The numbers are the argument |
| Habit or low price | Quick add, visible add | Removing a page view is the argument |
| What is in the box | Bundle contents | The contents are the argument |
| Time and place | Bookable listing | Date and rate are the argument |

Measured ranges from cards we checked: tile width 210 to 440, ratio 1:1 to 3:4, gutters 1 to 34 with most at 16 to 24, radius 0 on most stores, then 8 to 16, then 32 to 40 for consumer brands. Name 12 to 16px, price 12 to 16px, reaching 24 to 28 where price leads. Gap from tile to name 10 to 14. On hover, scale the image to 1.04 or 1.05 inside its clip over 400 to 600ms, or crossfade a second image over 350 to 400ms. Do not lift the card.

<!-- v:commerce.product-card/justified-caption-tile -->
### 1. Justified caption tile

*Feeling: a price list in a good shop window.*

A pale tile and one line under it, with name flush left and price flush right, both aligned to the tile's edges. Repeated across a row, the prices form a column you can read at a glance. It is the most confident default in the corpus. Use it for design goods, books, coffee, and anything with strong packaging. Avoid it for long names, because the line has to hold on one row at 300px. Fidèle sets name and author in two small lines against one price, which handles longer titles.

Tile fill 3 to 5 percent off the page, object at 60 percent of width. Name 12 to 14px, sentence case or tracked caps at .06em. Price matches the name exactly in size. Optional 11 to 12px line in `--ink-2`. Blue Bottle cuts a page-coloured notch into the tile's top right corner to hold its tag, so the label sits on the page and the tile stays clean. That detail costs nothing and makes a badge look built in.

**Seen on** Fidèle, Blue Bottle, X8 Eyewear, Locomotive, Fred. **Suits** photo-led, bold-colour, type-led; ecommerce, culture, fashion, agency.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px 24px}
.tile{position:relative;aspect-ratio:1;background:var(--tile);overflow:hidden}
.tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:transform .6s ease}
.card:hover .tile img{transform:scale(1.04)}
.tag{position:absolute;top:0;right:0;padding:6px 8px 6px 10px;background:var(--bg);font-size:11px;line-height:1}
.cap{display:flex;justify-content:space-between;gap:12px;margin-top:12px;font-size:13px;line-height:18px}
.cap h3{font:500 13px/18px var(--font-text);letter-spacing:.06em;text-transform:uppercase}
.cap span{flex:none;font-variant-numeric:tabular-nums}
.sub{font-size:12px;line-height:17px;color:var(--ink-2);margin-top:2px}
@media(max-width:760px){.grid{grid-template-columns:repeat(2,1fr);gap:28px 8px}}
```

<!-- v:commerce.product-card/stacked-caption-tile -->
### 2. Stacked caption tile

*Feeling: calm and familiar.*

Name, then price, then at most one muted line. This is what most good stores use when names run long or a description helps. Therabody runs six across at 210px on cream, with the name at 14/500 and a small generation tag beside it. Reformation runs four at 347px on a studio ground, and a heart appears only on hover. Use it for wellness, apparel and any catalogue with longer names. Avoid a three-line description at four across, where it fills the row with grey.

Reserve the height of the longest description, so that every price in the row sits on one baseline. Left-align for most brands. Centre only on small, ceremonial rows.

**Seen on** Therabody, Reformation, Marine Layer, Fellow, Dekmantel, 8 sites in all. **Suits** photo-led, warm-neutral, type-led, light-precision; ecommerce, fashion, health, culture.

<!-- v:commerce.product-card/no-caption-tile -->
### 3. No caption tile

*Feeling: the shop assumes you already know.*

A tile with no name or price at rest. Acne Studios and Stone Island use it in campaign rails on the home page, with a flat #f2f2f2 tile at 3:4, radius 0, and 10 to 12px gaps. Stone Island alternates whole cut-outs with tight crops on the sleeve patch, which keeps a uniform rail from going dead. Use it only for short, curated rails that lead to real listings. Never use it on a page where someone is trying to buy, because a price they cannot see is a price they assume is high.

**Seen on** Acne Studios, Stone Island, AlphaTauri. **Suits** photo-led, mono-technical; fashion.

<!-- v:commerce.product-card/swatch-row-card -->
### 4. Swatch row card

*Feeling: a colour card from the maker.*

Use it when range is the selling point. Bellroy keeps the name and price at 13px, then gives the row of 20px swatches real room at 30px pitch, with the selected one ringed 2px off the dot. Below that, a 12px line gives capacity in plain terms, which answers the real question without a page view. Fairphone takes the opposite route with radius 40, a 24px name in the brand colour, 12px dots, 24px price and a 72 by 56 outlined arrow pill. Both work because colour is the only loud thing.

Hovering a swatch swaps the tile image without navigating, and clicking keeps it. Keep the dot small but the hit area at least 32px. Past about ten colours, show the first eight and `+4`. On phones, Gorjana keeps a scrollable swatch row with small arrows and adds two outlined pill buttons, `Add to bag` and `More options`.

**Seen on** Bellroy, Fairphone, Gorjana collection, Felix Gray, Gorjana filters, 6 sites in all. **Suits** light-precision, photo-led; ecommerce, fashion.

```css
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
.card{display:flex;flex-direction:column;background:var(--tile);padding:0 10px 14px}
.pic{position:relative;aspect-ratio:1/.92;margin:0 -10px}
.pic img{position:absolute;inset:14% 16% 8%;width:68%;height:78%;object-fit:contain}
.name{font-size:13px;line-height:18px;letter-spacing:.02em}.name em{font-style:normal;color:var(--ink-2)}
.price{font-size:13px;line-height:20px;font-variant-numeric:tabular-nums;margin-top:2px}
.sw{display:flex;flex-wrap:wrap;gap:9px;margin:10px 0 12px}
.sw button{position:relative;width:20px;height:20px;border-radius:50%;background:var(--c);
  box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 12%,transparent)}
.sw button::after{content:"";position:absolute;inset:-5px}          /* 30px hit area */
.sw button[aria-pressed=true]{outline:1px solid var(--ink);outline-offset:2px}
.spec{font-size:12px;line-height:16px;color:var(--ink-2);letter-spacing:.02em}
```

The inset 1px on each swatch matters. Without it, an off-white swatch vanishes into a pale tile.

<!-- v:commerce.product-card/cutout-swatch-card -->
### 5. Cut-out swatch card

*Feeling: a serious outfitter's catalogue.*

The richest listing card in the corpus. A model shot on the store's single studio colour, then a row of 44 to 48px cut-outs of the actual product in each colourway, then a centred stack: 16/600 name, 16px descriptor in ink, 19/600 price, stars with count, and a Compare radio. Showing a garment instead of a dot means shape and colour read at once. On hover, a 1px frame appears around the whole card and the photo swaps to a detail, and a white label with a hairline sits on the tile's bottom edge. Use it for technical apparel and considered gear where people compare. Avoid it for fewer than 20 products or a shop without a real studio.

Cut-out thumbnails must fill their slot and carry no shadow. Ours first used the listing crop with its shadow and turned into specks in grey fog. Four show at a time with chevrons at the ends.

**Seen on** Arc'teryx Filters. **Suits** light-precision; fashion.

```css
.card{position:relative;padding:16px 16px 24px;text-align:center;box-shadow:inset 0 0 0 1px transparent;transition:box-shadow .2s}
.card:hover{box-shadow:inset 0 0 0 1px var(--line-strong)}
.pic{position:relative;aspect-ratio:4/5;overflow:hidden;background:var(--tile)}
.badge{position:absolute;left:50%;bottom:6px;translate:-50% 0;height:28px;padding:0 10px;display:flex;align-items:center;
  background:var(--bg);box-shadow:inset 0 0 0 1px var(--line-strong);font-size:13px;white-space:nowrap}
.sw{display:flex;justify-content:center;gap:6px;margin-top:10px;height:50px}
.sw a{width:46px;height:46px;padding:3px;border-bottom:2px solid transparent}.sw a[aria-current]{border-color:var(--ink)}
.sw img{width:100%;height:100%;object-fit:contain}
h3{font:600 16px/22px var(--font-text);margin-top:14px}
.desc{font-size:15px;line-height:22px;margin-top:6px;min-height:44px}   /* two lines reserved so prices align */
.price{font:600 18px/24px var(--font-text);margin-top:12px;font-variant-numeric:tabular-nums}
```

<!-- v:commerce.product-card/spec-rows-card -->
### 6. Spec rows card

*Feeling: the honest label on the back of the packet.*

The card that wins on facts. Huel gives a square warm tile at radius 8 with a small mono tag, a 17px name, a muted descriptor, then two icon rows between hairlines with protein and calories, then a price that does the maths: `From $45 / $2.65 per meal`. Use it for food, supplements, subscriptions and anything sold on value per unit. Avoid it where the customer buys on looks.

Choose two facts, the same two across the row, written in the same units. Replacing the rows with one instrument also works: Counter Culture shows a segmented tasting bar and Canopy a funding progress bar. Both turn a claim into a measure.

**Seen on** Huel, Counter Culture Coffee, Canopy. **Suits** warm-neutral, bold-colour; ecommerce, food-drink.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.tile{position:relative;aspect-ratio:1;background:var(--tile);border-radius:8px;overflow:hidden}
.tag{position:absolute;left:14px;top:13px;font:400 11px/1 var(--font-mono,var(--font-text));letter-spacing:.05em;text-transform:uppercase}
.card h3{font:500 17px/24px var(--font-text);margin-top:14px}
.card p{font-size:16px;line-height:22px;color:var(--ink-2)}
.spec{list-style:none;padding:9px 0 10px;margin:14px 0 12px;border-block:1px solid var(--line);font-size:13px;line-height:24px;color:var(--ink-2)}
.spec li{display:flex;align-items:center;gap:10px}.spec svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.3}
.price{font-size:14px;line-height:20px;font-variant-numeric:tabular-nums}.price b{font-weight:500;font-size:16px;color:var(--ink)}
.btn{display:inline-flex;align-items:center;height:32px;padding:0 16px;margin-top:14px;border-radius:999px;background:var(--ink);color:var(--bg);font-size:13px;font-weight:500}
```

<!-- v:commerce.product-card/quick-add-tile -->
### 7. Quick add tile

*Feeling: this shop respects your time.*

The add control lives on the image, so a shopper can buy without opening anything. Ritual puts a white 64 by 40 pill 12px from the corner of a pale yellow tile, always visible. Taschen reveals a 30px dark button on hover, and Omega a small outlined one. Use it for repeat purchases, consumables and single-variant goods. Avoid it where size is a real decision, or open a small quick view instead, as Blu Dot does.

The rules: it adds the default variant, it shows a tick for about 1.5 seconds, it does not navigate, and it stays visible on touch because hover does not exist there. The tile tint has to belong to the product. Ritual's warm yellow sits behind warm capsules. Ours used a tint of a blue accent behind a sage mug, and it looked like a wireframe until we changed it.

**Seen on** Ritual, Taschen, Omega Aqua Terra 150M, FORUM Cases. **Suits** light-precision, photo-led, dark-precision; ecommerce, health.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.tile{position:relative;aspect-ratio:1/1.2;background:color-mix(in srgb,var(--accent) 13%,var(--bg));overflow:hidden}
.tile>img{position:absolute;inset:8%;width:84%;height:84%;object-fit:contain}
.tag{position:absolute;left:12px;top:12px;height:22px;padding:0 8px;display:flex;align-items:center;background:var(--bg);border-radius:4px;font-size:11px;font-weight:500}
.add{position:absolute;right:12px;bottom:12px;height:40px;min-width:64px;padding:0 16px;border-radius:999px;background:var(--bg);
  font-size:14px;font-weight:500;display:grid;place-items:center;transition:background .15s,color .15s,scale .15s}
.add:hover{background:var(--ink);color:var(--bg)}.add:active{scale:.96}
.add[data-s=done]{background:var(--ink);color:var(--bg)}
```

<!-- v:commerce.product-card/visible-add-card -->
### 8. Visible add card

*Feeling: a shop counter, plain and open.*

A button on every card, always showing. Aesop sets a 40px dark full-width button under a short description. Sakara uses an outlined full-width `ADD TO CART` on phones, where hover is not an option. Gagosian uses a 34px outlined `Shop` under a book on a white tile on a grey band, which looks like a museum till. Ro pairs a black pill with an outlined one and a required safety link. Use it for home page rows, single-size goods, and phone layouts. Avoid it on a long listing, where forty identical buttons become noise.

Reserve caption lines, so that all buttons share a baseline. Take the button from the store's system, usually the same radius and height as the main add button, scaled down one step.

**Seen on** Gagosian, Aesop, Sakara, GoPro, Ro, 7 sites in all. **Suits** photo-led, warm-neutral, bold-colour, expressive; ecommerce, culture, food-drink, health.

<!-- v:commerce.product-card/retail-dense-card -->
### 9. Retail dense card

*Feeling: a catalogue that has nothing to hide.*

Where a buyer weighs ten things, density is a kindness. IKEA's card holds an underlined bold name, a descriptor, a 28/700 price with superscript cents, stars and a count, two availability lines with green dots and a named store, colour thumbs, a round 40px cart button, and Compare, all on one tight rhythm. It works because the order never changes. Use it for big-basket retail, marketplaces and home improvement. Avoid it for a store under 100 products, where it reads as a discount chain.

Keep one sale colour. Ulta stacks a pink ribbon, an exclusivity tag, a count, and offer text, and it is the upper limit of what a card survives. Bludot's stack is the disciplined version: red range, struck range, a small `20% off`, and one neutral `Ready to Ship` tag.

**Seen on** IKEA Sofas Filters, Ulta Filters, Bludot filters. **Suits** light-precision, soft-pastel; ecommerce.

<!-- v:commerce.product-card/self-tinted-card -->
### 10. Self-tinted card

*Feeling: a brand that owns a colour.*

The card takes its colour from the product and sits on a deeper shade of it. Seed puts cards of #3e5c38 on a #1c3a16 section, radius about 32, with an outlined pill for the code name, a 24px name, a jar, a 51px pill and a small price line. Hims does it in tan on umber, with the name set on the card. Use it for a small range on a home page, in health and consumer. Avoid it for a long listing, because a heavy tile times thirty is exhausting.

Let the row bleed past the viewport edges, which gives a large card a reason to be that large. Use a tiny elliptical contact shadow under the render, or the product floats off.

**Seen on** Hims, Seed, Flavor Dady, HealthyHer, Terry Ho's Yum Yum, 6 sites in all. **Suits** bold-colour, photo-led, soft-pastel; health, food-drink, finance.

<!-- v:commerce.product-card/bare-product-no-card -->
### 11. Bare product, no card

*Feeling: the object is the design.*

A render stands directly on the page. Olipop puts cans 300px tall on cream, with a small fibre spec, a bold name, and a scalloped sticker on the shoulder. Apple runs them on fog with a clipped fourth column. Cascara rotates two cans at about -15 and 60 degrees, and the rotation is the whole personality. Use it for packaged goods with beautiful renders. Avoid it for photographs with a background.

**Seen on** Apple Intelligence, Fenriz Gym, Olipop, Cascara Cabinet. **Suits** light-precision, photo-led, bold-colour, illustrated; food-drink, ai, health.

<!-- v:commerce.product-card/ruled-spec-cell -->
### 12. Ruled spec cell

*Feeling: an order sheet from a factory that cares.*

The grid is a table and the add button is a row in it. ACME divides its page with 1px rules at 25 percent steps. Each cell has an 11px bold caps name, a size line, a product, square colour chips with small names, and a full-width bordered row reading `ADD TO CART` at left with the price at right. 099 keeps a similar footer with an index code and a tracked label, and its hover simply darkens the border and label. Use it for makers, tools, type foundries and any brand with an engineering temperament. Avoid soft or romantic brands.

Everything depends on the rules meeting. Set them on the grid, not on cards, or lines double and the error shows. When the row inverts on hover it feels like a key being pressed.

**Seen on** ACME, 099, The Candy Vault. **Suits** type-led, light-precision, bold-colour; ecommerce, other.

```css
.ruled{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line-strong);border-left:1px solid var(--line-strong)}
.cell{display:flex;flex-direction:column;padding:12px 12px 0;border-right:1px solid var(--line-strong);border-bottom:1px solid var(--line-strong)}
.cell h3{font:700 11px/14px var(--font-text);letter-spacing:.03em;text-transform:uppercase}
.size{font-size:11px;line-height:15px;color:var(--ink-2)}
.pic{aspect-ratio:1;display:grid;place-items:center}.pic img{width:100%;height:100%;object-fit:contain}
.cw{display:flex;gap:8px;padding:0 0 12px}.cw button{font-size:10px;line-height:14px;text-align:left;color:var(--ink-2)}
.cw i{display:block;width:40px;height:40px;background:var(--c);box-shadow:inset 0 0 0 1px var(--line-strong);margin-bottom:4px}
.cw [aria-pressed=true]{color:var(--ink)}.cw [aria-pressed=true] i{box-shadow:0 0 0 1px var(--ink)}
.atc{display:flex;justify-content:space-between;align-items:center;width:calc(100% + 24px);height:36px;margin:0 -12px;padding:0 12px;
  border-top:1px solid var(--line-strong);font:700 11px/1 var(--font-text);letter-spacing:.04em;text-transform:uppercase;
  font-variant-numeric:tabular-nums;transition:background .15s,color .15s}
.atc:hover{background:var(--ink);color:var(--bg)}
```

<!-- v:commerce.product-card/bundle-contents-card -->
### 13. Bundle contents card

*Feeling: everything is accounted for.*

A set is only worth more than its parts if you can see the parts. UNITO's 580px card has a hairline, radius 60, a squircle thumbnail, name, copy, price, and a 56px arrow disc, with a nested tinted panel at about half the outer radius listing the contents as small mono chips. Our Place takes a retail route: a rust strip above the image stating the set saving, a struck total, swatches and a small quick-add. Use it for kits, configurators and gift sets. Avoid it for three-for-two offers, where a tag does the job.

**Seen on** UNITO, Fromourplace filters. **Suits** warm-neutral; ecommerce.

<!-- v:commerce.product-card/bookable-listing-card -->
### 14. Bookable listing card

*Feeling: you could be there on Friday.*

For stays, classes, tickets and homes, where a place and a time matter more than an object. The anatomy changes by what is being booked. Airbnb uses square photos at radius 20, a frosted guest favourite pill, a heart, then two lines with the rate and rating. Sonder sets a 4:3 photo, a rating chip and `US $995 /night` opposite a 32px navy button. Outschool closes with three small stat tiles for grades, group size and price per class. Almeida uses a duotone poster and two 51px buttons, one to read and one to book. Key overlays type on the photo with a notched gold ribbon.

Always give the unit with the rate. Keep the picture true to the room. Local businesses should reach for this card first, since a dentist's appointment or a yoga class is bought the same way. Avoid it for goods that ship, where a place and a date mean nothing.

**Seen on** Sonder, Almeida Theatre, Airbnb, Outschool, ON Makelaardij & Financieel Advies, 12 sites in all. **Suits** photo-led, bold-colour, warm-neutral, expressive; education, hospitality, local-business, culture.

<!-- v:commerce.product-card/cover-art-card -->
### 15. Cover art card

*Feeling: a record shop's new arrivals wall.*

When the artwork is the product, the card disappears. Use a square or 4:3 thumbnail, a title and an author. Framer holds price in a 32px chip at the right, in `Free` or `$49`. Awwwards keeps colour on the border of small outlined badges, never on the fill. Spotify codes type by shape, so releases are square and artists are round, and hover lights the tile and shows a play disc. Monocle puts illustrated guides from different hands into one bright series colour, which unifies them. Use it for templates, books, music, courses and plugins. Avoid it for physical goods that need a packshot, since a cover says nothing about size or material.

**Seen on** Spotify, Monocle, Voice Tag Gods, KTA+ Store, Framer Templates, 7 sites in all. **Suits** dark-precision, type-led, light-precision; other, editorial, brand, ecommerce.

<!-- v:commerce.product-card/price-tag-over-photo -->
### 16. Price tag over photo

*Feeling: a shoppable magazine.*

The product appears in use, and a small tag names it on the spot. Shopify Supply floats a translucent panel about 290px wide at radius 8, with a 48 to 64px thumbnail, a 12px mono name, a price and a small arrow, on the person wearing the bag, with thin corner brackets around crops. Noom sets a 43px price over an 8px caption on a frosted panel over a bottle. Use it for lookbooks and for one or two features per page. Never use it as a listing, because a tag on a busy photo is hard to scan. Give the tag solid enough ground that it passes contrast on any part of the image.

**Seen on** Noom, Shopify Supply | Performance Pack. **Suits** warm-neutral, bold-colour; health, ecommerce.

<!-- v:commerce.product-card/compact-product-row -->
### 17. Compact product row

*Feeling: a line on an invoice.*

Horizontal, 56 to 64px tall, for tight places. Thumbnail, name, price and one small add control. Olipop's sits in the cart drawer with a round outlined plus. White Cube runs a table of prints with title, artist, year, price and a square outlined `Purchase` button, which treats art editions with the respect a list deserves. Use it in drawers, cross-sell, editions and any small catalogue that reads better as a list. Avoid it as a main listing for anything bought on looks, because a 56px picture cannot sell.

**Seen on** White Cube, Replicate model, Drinkolipop cart. **Suits** light-precision, bold-colour; culture, ai, food-drink.

```css
.ur{display:flex;align-items:center;gap:12px;height:64px}
.ur img{width:56px;height:56px;padding:6px;object-fit:contain;background:var(--tile)}
.ur div{font-size:13px;line-height:18px}.ur small{display:block;font-size:13px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.ur button{margin-left:auto;height:32px;padding:0 12px;box-shadow:inset 0 0 0 1px var(--line-strong);font-size:13px}
```

**What cheapens a product card.** Most of these came from our own first attempts.

- **A visible shadow plate.** A baked PNG shadow that ends in a straight edge on a tinted tile. Check every cut-out on the real tile colour, on a bright screen.
- **Mismatched grounds and scales.** One product on white, one on grey, one in a room, each at a different size.
- **Reusing the listing crop for small slots.** Thumbnails need their own tight crop.
- **Stars in the accent colour.** Blue stars look like a widget. Use ink, or one deep tone from the palette. Arc'teryx uses a dark red.
- **A was-price in `--ink-3`.** Our sale prices failed contrast. A struck price is information, so set it in `--ink-2`.
- **Prices out of line.** One two-line name pushes its price down and breaks the row. Arc'teryx's `REVISED` label does this by 7px in the real frame. Reserve the lines.
- **Everything at once.** Badge, heart, stars, swatches and button on one card. Pick the two the shopper needs.
- **A shadow plus border plus radius on every card.** A tile needs a tone step and nothing else.
- **Lifting the whole card on hover.** Move the image inside the clip. A card that rises 4px belongs to a SaaS features section.
- **Hover-only information on touch.** Anything revealed by hover must exist on a phone.
- **Five-star ratings with no count.** A count makes the claim checkable, and it should link to the reviews.

## Collection grid

A listing must let someone scan twenty to two hundred things and find theirs. It works as a page before it works as a set of cards.

What separates great from cheap is the ground. Great listings read as one surface, because every tile shares one colour, one crop and one object size, so that the differences you see are differences between products. Reformation and Marine Layer shoot on one studio ground, and four tiles read as one photograph. Cheap listings are a pile of supplier images on white and grey, with a coloured sale badge on each. Rhythm comes second: great grids break on a fixed beat, with a lifestyle tile or a story band, so that a long page has places to rest. The third thing is how a grid ends. Good ones say how many you have seen, and offer the next step.

Pick the grid by how many products there are, because that decides everything else.

| Range | Use |
|---|---|
| 1 to 3 products | Stage chapters, inline buy box |
| 3 to 8 products | Model chooser, shelf baseline, photo beside shop, stage chapters up to about 12 |
| 8 to 40 products | One ground, ruled columns, seam contact sheet |
| 40 and up | One ground or interleaved, with a real filter system |
| Routing to categories | Category panels, cut-outs or thumbs, before any grid |

Measured ranges: 3 to 5 columns with 4 the clear default at 1440, tile 3:4 or 4:5 on fashion and 1:1 on goods, gutters from 1px seams to 34px, row gap about 1.5 to 2 times the column gap. On phones, always two up at 8 to 12px gutters. Never one up, which turns a catalogue into a long scroll of adverts. Peeking rails at 86 percent width work only for short featured rows.

**How a grid ends.** The last screen matters more than people expect. Show a running count, as Blu Dot does with a thin progress rule reading how many of how many you have seen. Offer numbered pagination, as Gorjana does with a back-to-top pill, or a single `show more`, as Reformation does with one small black button. Then cross-sell, which is the right place for it. Returning from a product must restore the scroll position, or a long grid is unusable.

<!-- v:commerce.collection-grid/one-ground-grid -->
### 1. One ground grid

*Feeling: a single, controlled catalogue.*

The default for a well-run listing. Every tile is the same ground, the same crop and the same scale. X8 uses four 341 by 455 tiles at #ebebeb on a black page, 16px gutters, and 15px page margins. Arc'teryx uses 308px model shots on warm studio tan at 34px gutters, and Ghia uses black tiles on cream so that bright cans jump. The ground can be any colour you can hold across the whole catalogue. That is the actual requirement, and it is a shooting decision, not a CSS one. Avoid this grid if your images come from suppliers and cannot be re-shot, and choose a light #f7 tile with contained images instead.

**Seen on** Arc'teryx Filters, X8 Eyewear, Drinkghia filters, Gorjana collection. **Suits** light-precision, photo-led, bold-colour; fashion, food-drink, ecommerce.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px 34px}
.tile{position:relative;aspect-ratio:4/5;background:var(--tile)}   /* or one studio colour you can hold everywhere */
.tile img{position:absolute;inset:10%;width:80%;height:80%;object-fit:contain}
.grid h3{font:500 14px/20px var(--font-text);margin-top:10px}
.grid p{font-size:14px;line-height:20px;color:var(--ink-2);font-variant-numeric:tabular-nums}
@media(max-width:760px){.grid{grid-template-columns:repeat(2,1fr);gap:24px 8px}}
```

<!-- v:commerce.collection-grid/seam-contact-sheet -->
### 2. Seam contact sheet

*Feeling: a page from the photographer's proofs.*

Tiles butted with a 1px seam, no gutters to speak of. Reformation runs four 347 by 460 images on 24px margins with white seams, mixing model and still life under the same studio light. Marine Layer runs edge to edge with 4px gaps. Captions drop to 12px on the page below, inset about 12px, and the page closes with one small black `show more`. Use it for fashion with a real shoot. Avoid it with mismatched images, since a seam shows every difference. Our first version used close-ups of objects next to wider shots, and the row read as an error until every tile was shot at a similar distance.

**Seen on** Reformation, Marine Layer. **Suits** photo-led; fashion.

```css
.sheet{display:grid;grid-template-columns:repeat(4,1fr);gap:1px}
.t{position:relative;aspect-ratio:3/4;background:var(--tile);overflow:hidden}
.t img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.cap{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;padding-top:10px;font-size:12px;line-height:17px}
.cap div{padding-left:12px}.cap span{display:block;color:var(--ink-2);font-variant-numeric:tabular-nums}
.more{display:block;width:150px;height:38px;margin:32px auto 0;background:var(--ink);color:var(--bg);font-size:13px}
```

<!-- v:commerce.collection-grid/ruled-column-grid -->
### 3. Ruled column grid

*Feeling: a catalogue page set by a typographer.*

The columns are drawn with lines instead of being spaced. Fred runs four columns of 1px rules with a large serif name at the top of each cell and the image anchored at the base, so that text and picture pull apart. ACME lays hairlines at every 25 percent. 099 numbers its cells with a code. Blu Dot's listing looks unruled at a glance, but its cells are divided by 1px dashed rules, with a small caps label at top left, swatches above the name, and photos inset inside the cell. The dashes keep a dense sale page feeling light. Use it for design, furniture and makers. Avoid it with a warm or playful brand.

Run the rules to the page edge rather than stopping at the container, because a full-bleed rule looks structural while an inset one looks like a table.

**Seen on** Fred, ACME, 099, Bludot filters, The Candy Vault. **Suits** light-precision, photo-led, type-led, bold-colour; ecommerce, other.

```css
.ruled{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line)}
.ruled article{padding:20px 32px 28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
.ruled article:nth-child(3n){border-right:0}
.lab{font-size:11px;line-height:14px;letter-spacing:.06em;text-transform:uppercase;min-height:14px}
.pic{position:relative;aspect-ratio:1/.86;margin:12px 0}.pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.ship{display:inline-flex;align-items:center;height:24px;padding:0 8px;margin-top:10px;font-size:12px;background:var(--tile)}
```

<!-- v:commerce.collection-grid/interleaved-grid -->
### 4. Interleaved grid

*Feeling: a shop with displays between the shelves.*

A long grid needs rests. Gorjana drops a lifestyle photo spanning 1 by 2 cells every eight or so products, Rishi runs a full-width promo every nine, IKEA makes the first cell an advice tile, and Our Place inserts a guarantee tile sized like a card. Use it on listings over 16 products. Avoid it on short pages, where it hides products. Keep the first row pure, because it is where the shopper checks that the page is what they asked for.

Set a fixed beat and stick to it. Use `grid-auto-flow:dense`, so that products fill in around the tall tile. A lifestyle tile must be a different distance from the cut-outs: a table, a room, someone's hand. A wide band of at least 240px should earn its place with something a shopper wants, such as a returns promise, and never a discount shout. A good beat is one tall tile per 8 to 12 products and one band per 9 to 12.

**Seen on** Gorjana collection, Gorjana filters, Rishi-Tea filters, IKEA Sofas Filters, Ulta Filters. **Suits** light-precision, warm-neutral, soft-pastel; fashion, ecommerce, food-drink.

```css
.grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-flow:dense;gap:32px 20px}
.tall{grid-row:span 2;position:relative;overflow:hidden;background:var(--tile)}
.tall img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.wide{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;min-height:240px;background:var(--ink);color:var(--bg)}
.wide div{display:flex;flex-direction:column;justify-content:flex-end;gap:6px;padding:32px}
.wide img{width:100%;height:100%;max-height:280px;object-fit:cover}
```

<!-- v:commerce.collection-grid/category-photo-panels -->
### 5. Category photo panels

*Feeling: walking into the right department.*

Big photographs that route. Stone Island runs a butt-jointed rail of full-height 720px panels with a small white label centred vertically. Arc'teryx sets four 317 by 422 panels above its filter bar, each with a bold label and one line over a bottom scrim, and a dark underline marks the current one. Bellroy gives each collection its own lettering on a portrait. Patagonia sits three photos over a label and three small underlined links. Use it for any store with distinct departments. Avoid it above a grid of fewer than 20 products, where it is one click too many.

Put the scrim only where the text sits. Keep labels short.

**Seen on** Stone Island, Stripe Customers, Arc'teryx Filters, Pedestal, Patagonia, 7 sites in all. **Suits** photo-led, mono-technical, light-precision; ecommerce, fashion, finance.

<!-- v:commerce.collection-grid/category-cutout-tiles -->
### 6. Category cut-out tiles

*Feeling: the catalogue's table of contents.*

A group of real products stands for a category. Blue Bottle arranges bags and mugs into small still lifes, each with a soft cast shadow, on white, with a tracked caps label and a short line. Snow Peak uses 330 by 288 tiles at #f8f8f8 with a 24px serif label inside the tile. Dalco lets each plate fade to a darker floor, and hover turns the title to its brand red. Use it when your goods are more legible than a lifestyle shot, as with tools and cookware. Keep every arrangement at the same scale and angle. Avoid it for apparel, which goes limp as a cut-out group.

**Seen on** Blue Bottle, Dalco, Snow Peak, Custom Multicades, Framify. **Suits** photo-led, render-3d, dark-precision, light-precision; ecommerce, brand.

<!-- v:commerce.collection-grid/category-thumb-rail -->
### 7. Category thumb rail

*Feeling: a shortcut, offered politely.*

Small thumbnails directly under the header, so that a first-time visitor picks a path in one click. Bellroy runs eight at about 154px, radius 10, with 13px captions and a tiny NEW chip. Ritual uses five 135px circles cropped tight on faces and hands. Rishi's collection page sets seven small square thumbs above the filters. Use it for broad ranges with shopper-friendly names. On phones it becomes a swipeable rail with a peek. Avoid it under five categories, where two clear links do the job.

**Seen on** Bellroy, Ritual, Rishi-Tea filters. **Suits** photo-led; ecommerce, health.

<!-- v:commerce.collection-grid/peek-rail -->
### 8. Peek rail

*Feeling: there is more where this came from.*

One row running past the page edge. Fidèle shows five and a half tiles with 1px gaps. Spotify fades the sixth under the panel edge and keeps `Show all` at right. Casper puts a 350px text column with arrows beside portrait tiles, and the third one peeks. UNITO clips unit tiles at both ends of a rounded stage. Use it on a home page or a product page for 6 to 12 items. Never use it as the main way to reach products, because almost nobody swipes to the ninth tile.

Peek at least 40px, so that the cut clearly reads as more. Use scroll snap, and on phones a dash pager at about 28 by 3px.

**Seen on** Fidèle, Spotify, Bonobos, Casper, UNITO, 9 sites in all. **Suits** bold-colour, photo-led, warm-neutral, dark-precision; ecommerce, culture, other, nonprofit.

```css
.rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin-inline:-16px;padding-inline:16px}
.rail>*{flex:0 0 min(72%,320px);scroll-snap-align:start}
```

<!-- v:commerce.collection-grid/model-chooser-row -->
### 9. Model chooser row

*Feeling: a confident small range.*

A few products, each given a tall column so that a buyer can compare them side by side. reMarkable sets three 400 by 880 columns at a warm tint, the newest in a soft gradient, with a large render, a 34px name, a 22px line and a 40px outline button. Apple sets white cards at radius 28 on #f5f5f7, bleeding off the right edge, and repeats the same order of swatch dots, `New` label, name, sub and price in every card, so that the eye drops straight down a column. Polestar splits two cars by a single 1px rule, with no card at all. Use it for hardware, cars and any range under about eight.

Keep the order and baseline identical across columns. Each name gets one line that says who it is for, which helps more than a spec list. Avoid it past about eight models, when columns stop being comparable. Fill the column: reMarkable's tablets take about 80 percent of its width. A thin object at 30 percent leaves a tall empty tint, which is what ours did first, so scale slim goods up or shorten the column. Let the newest column's gradient run at real strength, because ours at 16 percent looked like a stain.

**Seen on** Apple iPhone Store, reMarkable, Apple MacBook Pro, Polestar, Rivian, 9 sites in all. **Suits** photo-led, light-precision, dark-precision, warm-neutral; brand, ecommerce, health.

```css
.row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.col{display:flex;flex-direction:column;align-items:center;text-align:center;background:var(--surface);padding:48px 32px 40px}
.col.new{background:linear-gradient(color-mix(in srgb,var(--accent) 46%,var(--surface)),var(--surface))}
.pic{position:relative;width:100%;aspect-ratio:1/1.05}.pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;scale:1.3}
.col h3{font:400 34px/40px var(--font-display);letter-spacing:-.015em;margin-top:24px}
.d{font-size:20px;line-height:28px;margin-top:12px;max-width:13em}
.p{font-size:15px;color:var(--ink-2);margin-top:12px;font-variant-numeric:tabular-nums}
.b{display:inline-flex;align-items:center;height:40px;padding:0 20px;margin-top:20px;box-shadow:inset 0 0 0 1px var(--ink);font-size:14px;font-weight:500}
```

<!-- v:commerce.collection-grid/product-stage-chapters -->
### 10. Product stage chapters

*Feeling: each product gets the room to itself.*

No grid. Teenage Engineering gives each product a full viewport on black or pale grey, with a tiny mono code in the corner. Framework gives each product line its own coloured panel with a pair of buttons. Shopify Supply steps sideways through floating garments and photos. Each stage runs 100vh, with the label at 9 to 12px and at most two buttons of 40 to 44px. Framework insets its panels about 40px from the page edge. Use it for catalogues under about 12 products, or for a launch. Avoid it where people need to compare, since nothing is ever on screen together. Give some quick way to jump, such as a small index.

**Seen on** Framework, Teenage Engineering Products, Shopify Supply | Performance Pack, Decathlon Yestalgia. **Suits** light-precision, mono-technical, bold-colour, expressive; ecommerce, brand.

<!-- v:commerce.collection-grid/shelf-baseline-row -->
### 11. Shelf baseline row

*Feeling: books on a shelf.*

Objects of different heights align to a shared bottom edge, as they would on a real shelf. Taschen runs five columns of covers on white with a soft book shadow, and a small centred caption. Kinfolk shows three issues at 233 by 302, a 13px spaced label, a 25px title and a 20px price, with a lot of air. Use it for books, bottles, records and magazines. In CSS, make the image cell a fixed height and align the image to its end. Reserve the tag line under the shelf, so that prices stay level too. Taschen's book shadow falls short and to the lower right, about 4px, like a real flat lay. A centred soft shadow makes a book look like a web card. Do not force these goods into a square tile, which erases the charm of their differing proportions.

**Seen on** Kinfolk, Taschen, Omega Aqua Terra 150M. **Suits** light-precision, photo-led; ecommerce, editorial.

```css
.shelf{display:grid;grid-template-columns:repeat(5,1fr);gap:40px 28px;align-items:end}
.cover{height:300px;display:flex;align-items:flex-end;justify-content:center}
.cover img{max-height:100%;width:auto;box-shadow:3px 4px 6px -1px color-mix(in srgb,var(--ink) 38%,transparent)}
```

<!-- v:commerce.collection-grid/photo-beside-shop -->
### 12. Photo beside shop

*Feeling: a gallery with a small bookshop by the door.*

For sites that sell a few things alongside something else. White Cube sets a pale 50 percent panel with one book at half its width beside a label, a 22px title, a price and a text link. Isolabella pairs a 670 by 570 macro leaf with three columns of 256px bottle cut-outs, with no prices shown. Olipop runs two big lifestyle photos with stickers. Use it for culture, wine, restaurants and local shops. It is often the best answer for a small business, because it does not pretend to be a warehouse.

**Seen on** White Cube, Isolabella della Croce, Royal College of Art, Olipop. **Suits** photo-led, light-precision, bold-colour; food-drink, culture, education.

<!-- v:commerce.collection-grid/thumbnail-wall -->
### 13. Thumbnail wall

*Feeling: a poster wall of good work.*

For digital goods, each thumbnail is its own full-bleed picture, so no tile is needed. Framer runs four at 285 by 213 with a faint edge and radius 16. Awwwards uses 432 by 324 at radius 0, with meta sitting in the 74px row gap. Vercel keeps dark 16:10 art above a plain title, and the caption tints on hover. Use it for templates, models and showcases. The danger is inconsistent art, so give submitters a template or a frame. Avoid it for physical goods, which need a shared ground.

**Seen on** Framer Templates, Awwwards SOTD, Vercel templates, Replicate explore. **Suits** light-precision, dark-precision, photo-led; saas, other, devtool, ai.

<!-- v:commerce.collection-grid/two-up-listing -->
### 14. Two-up listing

*Feeling: a good directory.*

Text first, because the name and the description matter more than a picture. Raycast runs two columns of 558 by 186 cards at radius 12, each with a 32px icon, a 16/600 name, a 34px ghost `Install` at right, a two-line clamp of 15px copy, and a meta row of author, command count and installs. Use it for plugins, integrations and apps. Keep the action button on the card, since the install is the point. Avoid it for anything bought on looks.

**Seen on** Raycast Store. **Suits** dark-precision; devtool.

<!-- v:commerce.collection-grid/place-and-date-grid -->
### 15. Place and date grid

*Feeling: where to go next.*

For physical locations and events. Away shows three 4:3 store photos at 16px gutters with a 14px city and neighbourhood line and an 11px details arrow. Sonder puts city pills above a four-column grid at 16px gutters. New Exhibitions uses a caption triple of title, venue and date, and hover colours only the title. Use it for shops, branches, hotels and programmes. Every location needs hours and a way to get there on the next click. Hold one crop across the grid, because a photo wall of mixed storefronts falls apart faster than products do.

**Seen on** Sonder, New Exhibitions, Away Stores, Hopper. **Suits** warm-neutral, type-led, photo-led; hospitality, culture, fashion, other.

<!-- v:commerce.collection-grid/collection-header-band -->
### 16. Collection header band

*Feeling: a sign above the aisle.*

How a listing page opens. Use the compact form by default: a breadcrumb, a 28 to 48px title, an optional line, then the filter bar, which leaves products on the first screen. Arc'teryx, Gorjana and IKEA all do this. The image-led form sets a large light title beside a tall photo, as Parachute does, or a black band with a caps heading, as Peak Design does. Use image-led only for a small, seasonal collection. On a phone a shopper must see a product within the first screen. Keep any intro to one or two lines, and put long SEO copy below the grid.

**Seen on** Parachutehome collection, Peakdesign collection. **Suits** warm-neutral, photo-led; ecommerce.

**What cheapens a collection grid.**

- **Mixed backgrounds.** It is the fastest way to look like a drop-shipper, and the most expensive to fix later.
- **A lifestyle tile at the same distance as the packshots.** Ours was the same object at four times the size, and it looked like a loading error.
- **A hero banner before the grid.** If the shopper has clicked `Shirts`, show them shirts.
- **Interrupting the first row.** The first row confirms that they are in the right place.
- **Different image ratios in one grid.** Everything jumps. Set `aspect-ratio` on the tile and let the image fit inside it.
- **One column on phones.** Two up is the standard for a reason.
- **Carousels as the main path.** They hide most of what you sell.
- **A pale tile that vanishes.** A 2 percent tile on a white page disappears on many screens. Test it on a cheap laptop.
- **No count and no end.** Infinite scroll with no total leaves the shopper with no sense of the range, and takes the footer away.

## Filters

Filters must cut a long list down without losing the shopper's place. A filter system is judged on three things: can they see what is applied, can they see how many results will come back, and can they undo it. Choosing the look comes after that.

What separates great from cheap is feedback. Great filters show a result count on the bar, keep applied filters visible as removable chips, show counts beside each option, and never lead to an empty page. Arc'teryx puts `33 Items` at the start of the bar, so the number is always the first thing read. IKEA and Rishi list counts beside facets. Cheap filters are a wall of unlabelled checkboxes in a card, with no counts and a page reload on every click, plus a fake select styled by the browser.

Choose by how many facets the range truly needs.

| Facets | Products | Use |
|---|---|---|
| 0 to 1 | Under 30 | Quiet text, or category pills |
| 2 to 4 | 20 to 100 | Pills plus launcher, or dropdown bar |
| 3 to 8 | 30 to 500 | Dropdown bar |
| 8 and up | 200 and up | Accordion rail |
| Huge taxonomy | Thousands | Chip facets, taxonomy index |

Put sort apart from filter, at the right edge, because it does something different: it reorders and never removes. Name facets in the shopper's language, so `Seats` rather than `Capacity`. Keep state in the URL, so that a filtered view can be shared and survives the back button.

On phones, every pattern collapses to the same thing: two controls, `Filter` and `Sort`, in a sticky row, opening a full-height sheet with facets as accordions, and a pinned button reading `Show 25 items`. That label is worth the effort, because it tells them what they will get before they commit. Category pills stay visible and scroll sideways.

Measured ranges: bars 44 to 56 tall, labels 13 to 16px, rails 180 to 240 wide, facet rows 48 tall, pills 24 to 48 tall, and chips with a thumbnail 48 tall. Checkbox 18 to 20px.

<!-- v:commerce.filters/dropdown-bar -->
### 1. Dropdown bar

*Feeling: everything to hand, nothing in the way.*

One row above the grid, so that the products keep the full width. Arc'teryx leads with `33 Items`, then six dropdown triggers at 16/500 with small chevrons, split by short vertical hairlines, with `Sort` split off at the far right and a rule beneath. Blu Dot puts a `Ready to Ship` toggle first, because that is the most useful filter it has. Use it for most stores with a few real facets. Avoid it past about eight, since the bar wraps.

The dropdown is a small panel, not a select: 300px wide, 38px rows, 18px checkboxes, counts at the right, and a pinned footer with `Clear` and `Show 25 items`. Mark a trigger with a small count when it holds a selection, and repeat applied values as chips below the bar. Make the bar sticky. We set the sort group apart with one extra hairline, and that small gap is what makes it read as a different kind of control.

**Seen on** Arc'teryx Filters, Bludot filters, Webflow Customers, Supabase Customers, Grafana dashboards. **Suits** light-precision, dark-precision; devtool, fashion, ecommerce, saas.

```css
.bar{position:sticky;top:0;z-index:5;display:flex;align-items:center;height:56px;background:var(--bg);border-block:1px solid var(--line)}
.count{font-size:15px;padding-right:16px;font-variant-numeric:tabular-nums}.count b{font:500 20px/1 var(--font-text)}
.f{display:flex;align-items:center;gap:6px;height:24px;padding:0 15px;border-left:1px solid var(--line);font-size:15px;font-weight:500;white-space:nowrap}
.f svg{width:10px;height:10px;fill:none;stroke:currentColor;stroke-width:1.6;transition:rotate .15s}
.f[aria-expanded=true] svg{rotate:180deg}
.f sup{font-size:11px;color:var(--accent);margin-left:-2px}
.sort{margin-left:auto}
.menu{position:absolute;top:calc(100% + 8px);left:16px;width:300px;padding:8px 0 0;background:var(--bg);z-index:9;
  box-shadow:0 0 0 1px var(--line),0 8px 24px color-mix(in srgb,var(--ink) 10%,transparent)}
.menu label{display:flex;align-items:center;gap:10px;height:38px;padding:0 16px;font-size:14px;cursor:pointer}
.menu label:hover{background:var(--tile)}
.menu i{margin-left:auto;font-style:normal;font-size:13px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.menu footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 16px;margin-top:8px;border-top:1px solid var(--line)}
.menu footer button{height:38px;padding:0 16px;background:var(--ink);color:var(--bg);font-weight:500}
```

<!-- v:commerce.filters/chip-tray-bar -->
### 2. Chip tray bar

*Feeling: a tool panel for serious browsing.*

The filters sit in a tinted tray and look like objects. Awwwards uses a 54px tray at radius 8 with 42px white chips at radius 4, 6px apart. The chips carry tiny previews, so `Font` shows a glyph and `Color` shows a strip of colour. A count badge and Reset sit at the far right. Use it for galleries and marketplaces where filtering is the main activity. Avoid it for a small store, where it is more machine than the range needs.

**Seen on** Awwwards SOTD. **Suits** light-precision; other.

<!-- v:commerce.filters/category-pill-row -->
### 3. Category pill row

*Feeling: simple, tidy aisles.*

Pills that move between real subcategories. Gorjana centres 30px pills under a 28px title, the active one filled black. Ghia uses 24px chips with a small radius and its burgundy for the active fill, on the same line as Sort. Use it when the range splits cleanly by type. Do not use pills for multi-select filters, since a pill reads as `one of these`.

**Seen on** Gorjana collection, edX, Drinkghia filters, Omega Aqua Terra 150M. **Suits** light-precision, bold-colour; ecommerce, food-drink, education.

```css
.pills{display:flex;justify-content:center;gap:8px;overflow-x:auto;scrollbar-width:none}
.pills a{flex:none;display:flex;align-items:center;height:30px;padding:0 22px;border-radius:999px;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:13px;transition:box-shadow .15s}
.pills a:hover{box-shadow:inset 0 0 0 1px var(--ink)}
.pills a[aria-current]{background:var(--ink);color:var(--bg);box-shadow:none}
@media(max-width:760px){.pills{justify-content:flex-start;margin-inline:-16px;padding-inline:16px}}
```

<!-- v:commerce.filters/pills-plus-launcher -->
### 4. Pills plus launcher

*Feeling: tidy on the surface, deep when asked.*

Categories stay visible and everything else folds into a drawer. Gorjana stacks pills above a bar between double rules: `Filter By +` at left, `888 Products` centred, `Sort By` at right. Our Place leads with an outlined `FILTER` button. Ulta keeps two small pills sticky at top left, showing `Show Filters (0)`. Use it when you want a four-column grid with a real filter set behind it. The double rule is a small detail that gives a calm page some ceremony. Avoid it with only one or two facets, where plain pills are enough.

**Seen on** Gorjana filters, Fromourplace filters, Gorjana collection, Ulta Filters, Vercel templates. **Suits** light-precision, warm-neutral, soft-pastel; fashion, ecommerce, devtool.

```css
.bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:52px;border-block:3px double var(--ink);font-size:13px}
.bar button{display:flex;align-items:center;gap:8px;font-weight:500}
.bar span{font-variant-numeric:tabular-nums;color:var(--ink-2)}
.bar .sort{justify-self:end;font-weight:400}.bar .sort b{font-weight:500}
```

<!-- v:commerce.filters/docking-pill-scroller -->
### 5. Docking pill scroller

*Feeling: the filters came along with you.*

A row of 40px pills that scrolls sideways with a right fade and a round arrow. On scroll, Substack moves the row up into the 64px header, between the logo and sign-in, so it stays reachable without a second sticky bar. Use it for feeds and content catalogues. It suits a store with many short categories on a phone. The transition needs care: fade the header's middle out first, then move the row in, over about 200ms. Avoid it if the header already holds a search bar, because there is nowhere to dock.

**Seen on** Substack. **Suits** gradient-light; saas.

<!-- v:commerce.filters/accordion-rail -->
### 6. Accordion rail

*Feeling: a proper instrument for a big catalogue.*

A left rail with no card around it. IKEA gives 240px, 48px rows between hairlines, 14/700 labels, and chevrons, with most facets collapsed and binary ones shown inline with a count and a checkbox. OpenRouter does the same at 220px for models. Rishi uses 180px with caps group labels and groups open. Use it past eight facets and for spec-led buying. Avoid it for fewer than about 40 products, because a tall rail next to a short grid looks empty. It also costs a column, so a 1440 screen gets three across rather than four.

Make the rail sticky, or let it scroll on its own. Show a small count on a collapsed group that holds a selection. Apply on change, with no Apply button on desktop, and keep the scroll position.

**Seen on** OpenRouter models, IKEA Sofas Filters, Rishi-Tea filters, ConceptCore. **Suits** light-precision, warm-neutral, expressive; ai, ecommerce, food-drink, education.

```css
.shell{display:grid;grid-template-columns:240px 1fr;gap:32px;align-items:start}
.rail{position:sticky;top:16px;border-top:1px solid var(--line)}
.rail details{border-bottom:1px solid var(--line)}
.rail summary{list-style:none;display:flex;align-items:center;justify-content:space-between;height:48px;font-size:14px;font-weight:600;cursor:pointer}
.rail summary::-webkit-details-marker{display:none}
.rail summary em{font:400 13px/1 var(--font-text);color:var(--accent);margin-left:auto;margin-right:10px}
.rail label{display:flex;align-items:center;gap:10px;height:32px;font-size:14px}
.rail label i{font-style:normal;margin-left:auto;font-size:13px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.rail input{appearance:none;width:18px;height:18px;margin:0;border-radius:3px;box-shadow:inset 0 0 0 1px var(--line-strong);display:grid;place-items:center}
.rail input:checked{background:var(--ink);box-shadow:none}
.rail input:checked::after{content:"";width:10px;height:5px;border:solid var(--bg);border-width:0 0 1.6px 1.6px;rotate:-45deg;translate:0 -1px}
```

Native `<details>` gives you a keyboard-ready accordion with no script.

<!-- v:commerce.filters/chip-facet-sidebar -->
### 7. Chip facet sidebar

*Feeling: a map of a very large library.*

A wide panel that shows the taxonomy as chips rather than hiding it in lists. Hugging Face runs 400px with 12px grey group labels, wrapped chips at radius 6 to 8 with small tinted icons, a `+44` overflow chip, and a dual-handle slider with tick labels. Use it for huge technical catalogues. Each group's overflow chip keeps the panel from turning into a wall. Avoid it for a consumer store, where it reads as a research tool.

**Seen on** HF models, HF datasets. **Suits** light-precision; ai.

<!-- v:commerce.filters/thumbnail-quickfilters -->
### 8. Thumbnail quick filters

*Feeling: a helpful member of staff.*

Pills with a small picture. IKEA runs 48px chips, radius 64, on #f5f5f5 with a 24px product thumb, in a row that scrolls above the title, naming sofas by type in everyday words. A shopper who does not know the facet names can still choose. Use it for categories where the type is easier to recognise than to name, such as furniture and lighting. Pair it with a real filter system rather than replacing one.

**Seen on** IKEA Sofas Filters. **Suits** light-precision; ecommerce.

<!-- v:commerce.filters/quiet-text-filter -->
### 9. Quiet text filter

*Feeling: a list, not a form.*

Filtering as plain words. Kinfolk writes its categories as one centred 32px serif sentence, separated by commas. X8 has `ALL` at left and `STYLE` with a small caret at right, on a 1px rule exactly one tile wide. Footer Design uses 12px links with the active one underlined. Elisa Breyer's archive offers four ways of ordering, with a soft pink highlight on the active one. Use it for editorial sites, archives and small collections. Avoid it above about 30 items.

**Seen on** Kinfolk, X8 Eyewear, Elisa Breyer Archive, Footer Design Gallery. **Suits** photo-led, light-precision; culture, editorial, fashion.

<!-- v:commerce.filters/taxonomy-index -->
### 10. Taxonomy index

*Feeling: the whole shop on one page.*

Framer replaces its sidebar with ten columns across 1200px, each a 14px head over four muted links, so that the whole catalogue structure is visible at once. Cravath combines a large search field, a 13-wide A to Z strip of small squares and stacked selects for finding a person. Use it when people arrive knowing the name of what they want, as with directories, legal, and template stores. Avoid it for browsers who do not yet know what they want, who need pictures.

**Seen on** Framer Templates, Cravath Lawyers. **Suits** dark-precision, light-precision; saas, other.

<!-- v:commerce.filters/capsule-tabs-search -->
### 11. Capsule tabs and search

*Feeling: an app store, in a good way.*

One row across the grid width. Raycast sets a capsule of three text tabs at left with a lit pill on the active one, and at right a 42px platform segment with glyphs beside a 320px search field showing its keyboard hint. Use it for plugins and extensions, where type and platform are the only real questions.

**Seen on** Raycast Store. **Suits** dark-precision; devtool.

**What cheapens filters.**

- **No counts and no result total.** The shopper is working blind.
- **An option that leads to zero results.** Mute it with a count of 0, or remove it. Never let someone click into an empty page.
- **Applied filters that disappear.** Show them as chips near the grid, with a `Clear all`.
- **A page reload on every checkbox.** Update the grid in place and keep the scroll.
- **A boxed card around the sidebar.** The rail needs rules, not a container. The one boxed rail we kept, ConceptCore's, works because the whole site is square and bordered.
- **A native select for Sort.** The browser's control is the first thing that looks unbuilt.
- **Filters on 12 products.** A range that small needs a heading, not a tool.
- **Pills for multi-select.** Pills read as one choice. Use checkboxes when several can apply.
- **Database language.** `Colour family` and `Material composition` where `Colour` and `Fabric` will do.

## Product detail

The product page has one job: bring a shopper who is already interested to the point of pressing the button, with no question left open. Everything the shopper fears has to be answered near that button.

What separates great from cheap is order and calm. HexClad's first screen is the cleanest reference in the corpus: a large object on black, then a title, stars, price, instalments, two option groups, one red button and three facts, all inside 900px. There is nothing to work out. Cheap product pages stack promo bars, a review card, a badge row and a paragraph of brand story above the fold, and push the button out of sight. Harney is a good store, and on a 1440 by 900 screen its buy box starts halfway down after two promo bars and a review card, with the add button out of view.

Hold this order in the buy box unless you have a strong reason not to. It follows the order of the shopper's questions.

| Order | Block | Size |
|---|---|---|
| 1 | Breadcrumb, quiet, or a kicker | 12 to 13px |
| 2 | Title | 30 to 48px |
| 3 | Stars and linked count | 13 to 15px |
| 4 | Price and instalments | 18 to 24px, then 14px |
| 5 | One line on why, if it adds anything | 15 to 16px |
| 6 | Option groups | See variant selection |
| 7 | Add button | 48 to 56px, full width |
| 8 | Stock, delivery, returns | 13 to 14px |
| 9 | Details folded into rows | 44 to 52px rows |

**The gallery.** The product takes 85 to 90 percent of the stage on this page, compared with 60 percent on a listing. Our first version kept the listing scale and looked timid next to HexClad. Sequence the images: a clean hero, a scale shot in the hand or room, a detail, the thing in use, the back or inside. Make the first image the most art-directed picture in the store. Brightland's velvet still life holds the page in a way that a plain packshot could not, and ours did not until we replaced a close-up with a real table scene. Thumbs measure 48 to 80px, beside or below. On phones the gallery becomes a full-width swipe with a dash or count, and it must stop short of the screen so the title is visible.

Measured ranges: gallery 45 to 62 percent of width, buy box 400 to 656, gap 32 to 76. Page padding stays small, about 16 to 48, because stores use their full width. Keep the buy box on screen as the gallery scrolls, or the reverse, by making one column sticky.

<!-- v:commerce.product-detail/split-gallery-buybox -->
### 1. Split gallery buy box

*Feeling: everything you need, in the place you expect it.*

The reference product page. Image left at about 58 percent, buy box right at about 480px. Use it for almost anything physical. HexClad's version has no tile at all on the dark page, 42px pill options, a label stating the current value, 44px image pills for the second option, a 50px button, and a trust row. Vitruvi puts a rail of thumbs on the left, and Diasporaco frames the product in a 20px radius colour block and uses a small availability line under the button. Avoid it only where the product needs a configurator, or has no photography worth the space. On a dark page drop the tile: ours first put a lighter square around the object and it looked like a stock component, because a dark ground must run through the image.

**Seen on** Hexclad product, Vitruvi product, Diasporaco product. **Suits** dark-precision, warm-neutral, bold-colour; ecommerce.

```css
.pdp{display:grid;grid-template-columns:minmax(0,1.42fr) minmax(0,1fr);gap:48px;max-width:1440px;margin:auto;padding:32px 60px 64px 32px;align-items:start}
.gal{position:sticky;top:16px;display:grid;grid-template-columns:64px 1fr;gap:16px}
.th{display:grid;gap:8px;align-content:start}
.th button{width:64px;height:64px;padding:6px;background:var(--surface)}
.th button[aria-pressed=true]{box-shadow:0 0 0 1px var(--ink)}
.main{position:relative;aspect-ratio:1;overflow:hidden}
.main img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
h1{font:500 30px/36px var(--font-display);letter-spacing:-.005em}
.rate{display:flex;align-items:center;gap:8px;font-size:15px;margin-top:12px}.rate a{text-decoration:underline;text-underline-offset:3px}
.price{font:500 24px/30px var(--font-text);margin-top:20px;font-variant-numeric:tabular-nums}
.inst{font-size:14px;line-height:20px;color:var(--ink-2);margin-top:6px}
.atc{display:flex;justify-content:center;align-items:center;width:100%;height:50px;margin-top:28px;border-radius:999px;background:var(--accent);color:#fff;font:600 17px/1 var(--font-text)}
.ship{list-style:none;padding:0;margin-top:16px;font-size:14px;line-height:21px;color:var(--ink-2)}
.ship li{display:flex;gap:10px}.ship b{font-weight:500;color:var(--ink)}
.ship i{flex:none;width:7px;height:7px;margin:7px 3px 0;border-radius:50%;background:var(--ok)}
@media(max-width:900px){.pdp{grid-template-columns:1fr;padding:0 0 88px;gap:20px}.gal{position:static;grid-template-columns:1fr}.th{display:none}.info{padding:0 16px}}
```

For a warm or photographic version, Rishi replaces the gallery with a mosaic of two squares over one wide photo, sets the title large and light, and aligns the price to the right on the title's baseline.

<!-- v:commerce.product-detail/narrow-info-wide-gallery -->
### 2. Narrow info, wide gallery

*Feeling: a magazine spread with a till in the margin.*

The info column comes first, 400px at the left, and two tall images fill the rest at 459 by 569 with a 15px gap. Glossier joins three 34px chips in one strip, sets purchase modes between two ink rules, and uses a 40px add button with the price inside and a hard line at its right and bottom edge. Use it for beauty, fragrance and fashion, where two photographs at reading size do more than one. Avoid it for technical goods, where a 400px column is too tight for many options.

Make the left column sticky so it stays while images scroll.

**Seen on** Glossier product. **Suits** photo-led; ecommerce.

```css
.pdp{display:grid;grid-template-columns:400px minmax(0,1fr);gap:76px;padding:16px;max-width:1440px;margin:auto;align-items:start}
.info{position:sticky;top:16px}
.seg{display:flex;margin-top:22px}.seg input{position:absolute;opacity:0}
.seg span{display:grid;place-items:center;height:34px;padding:0 24px;background:var(--tile);font-size:14px;font-style:italic}
.seg input:checked+span{background:var(--bg);box-shadow:inset 0 0 0 1px var(--ink)}
.mode{margin-top:28px;border-block:1px solid var(--ink)}
.mode label{display:flex;align-items:center;gap:16px;height:42px;font-size:15px}
.atc{display:flex;gap:16px;align-items:center;height:40px;padding:0 20px 0 16px;background:var(--tile);box-shadow:1px 1px 0 var(--ink);font-variant-numeric:tabular-nums}
.pics{display:grid;grid-template-columns:1fr 1fr;gap:15px}
.pics figure{position:relative;aspect-ratio:1/1.24;margin:0;background:var(--tile);overflow:hidden}
@media(max-width:900px){.pdp{grid-template-columns:1fr;gap:20px;padding:0 0 24px}.info{position:static;padding:0 16px;order:2}
  .pics{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:2px}.pics figure{flex:0 0 86%;scroll-snap-align:start}}
```

<!-- v:commerce.product-detail/sticky-visual-configurator -->
### 3. Sticky visual configurator

*Feeling: a good salesperson walking you through it.*

For considered purchases with real choices. Apple keeps a sticky 870 by 560 stage at radius 20 on the left, one tone off the page, while a 330px column of steps scrolls on the right. Each step opens with a 28px heading split into a dark lead and a muted continuation, then tiles at radius 12. Later steps stay dimmed until the earlier ones are chosen, which quietly teaches the order. A dot rail at the right edge tracks progress, and a sticky strip holds the running total. Use it for computers, furniture, bikes and made-to-order. Avoid it for a product with one option.

**Seen on** Apple MacBook Air Buy. **Suits** light-precision; ecommerce.

<!-- v:commerce.product-detail/purchase-mode-radios -->
### 4. Purchase mode radios

*Feeling: clear about what you are signing up for.*

One-time or subscribe, as rows rather than tabs. Rishi sets 50px rows at radius 25. The chosen row takes the accent line, and the subscribe row expands to list four benefits, ending with the promise that you can skip or cancel. Glossier uses two plain rows between rules. Harney adds a small save tag to the corner. Use it for consumables. The total in the button must change with the choice, and skipping or cancelling must be stated, because a subscription the shopper thinks is a trap will lose the sale. Avoid it for one-off goods, where a subscribe row only confuses.

**Seen on** Harney product, Rishi-Tea product, Glossier product. **Suits** warm-neutral, photo-led; ecommerce.

```css
.modes{display:grid;gap:10px}
.modes label{display:block;padding:13px 22px;border-radius:25px;box-shadow:inset 0 0 0 1px var(--line-strong);cursor:pointer;transition:box-shadow .15s}
.modes label:has(input:checked){box-shadow:inset 0 0 0 1px var(--accent)}
.mh{display:flex;align-items:center;gap:12px;font-size:16px}
.mh input{appearance:none;width:18px;height:18px;margin:0;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ink)}
.mh input:checked{background:var(--accent);box-shadow:inset 0 0 0 1.5px var(--accent),inset 0 0 0 4px var(--bg)}
.modes ul{display:none;margin:8px 0 0;padding-left:46px;font-size:15px;line-height:23px;color:var(--ink-2)}
.modes label:has(input:checked) ul{display:block}
```

<!-- v:commerce.product-detail/option-tiles-with-price -->
### 5. Option tiles with price

*Feeling: the choice is laid out for you.*

When options differ in format or price, put the difference in the control. Harney's three 170 by 108 tiles each carry a tiny merit label in crop-mark corners, such as most popular or best value, with the option name below, and the selected tile takes a 2px line and a pale fill. A book site can run a small table of formats and prices beside one buy button. Use it for up to four options. Past four, go to chips and a separate price line. Avoid it when options differ only in name, where chips are lighter.

**Seen on** Harney product, Money in Check. **Suits** warm-neutral, type-led; ecommerce, brand.

<!-- v:commerce.product-detail/set-includes-bundle -->
### 6. Set includes bundle

*Feeling: nothing has been left out.*

Brightland's buy box turns the contents into the pitch. Two 656px columns, a 40px title, stars and a link, a 24/700 price, a bold one-line lead, then a rule, a tracked label, and five rows of 70px thumbnails at a 76px pitch, each with a name and a line. A 55px full-width button holding the price closes it. Use it for gifts, kits and any set where value comes from the sum. Use real thumbnails of each part, since a list of words misses the point. Avoid it for a set of two, where one sentence is enough.

**Seen on** Brightland product. **Suits** warm-neutral; ecommerce.

```css
.items{list-style:none;padding:0;margin-top:14px;display:grid;gap:6px}
.items li{display:grid;grid-template-columns:70px 1fr;gap:16px;align-items:center}
.items img{width:70px;height:70px;padding:8px;object-fit:contain;outline:1px solid var(--line);outline-offset:-1px}
.items b{display:block;font-weight:400;font-size:16px;line-height:22px}
.items span{display:block;font-size:14px;line-height:20px;color:var(--ink-2)}
.atc{display:block;width:100%;height:56px;margin-top:24px;background:var(--ink);color:var(--bg);font:500 18px/1 var(--font-text);font-variant-numeric:tabular-nums}
```

<!-- v:commerce.product-detail/colourway-stage -->
### 7. Colourway stage

*Feeling: the product is in a spotlight.*

The product is the whole first screen. Prägen Hätlen shows a watch at about 430px, with its neighbours at 330px as faint outlines in which only the dial keeps colour, and a large hairline circle behind, on a gradient from paper to navy, with `PREVIOUS` and `NEXT` in 12px mono at the edges. The sen knife page sets a 90px name around a diagonal blade, and the whole ground changes per colour. Use it for one hero object with a few versions, usually at the top of a brand page. Below it you still need a normal way to buy. Avoid it for a range of more than about seven.

**Seen on** Prägen Hätlen, LEA WINERY, sen knife by Takahashikusu. **Suits** render-3d, warm-neutral; food-drink, brand.

<!-- v:commerce.product-detail/enquiry-spec-block -->
### 8. Enquiry spec block

*Feeling: you have to ask, and that is the point.*

For things that are not bought with a click. Ne Geurra lists pieces in a 300px index column beside a 580px photograph, with a 14px grey description and a small `Dimensions` label indented about 60px, and no price or cart. Use it for antiques, furniture, architecture and made-to-order. A local builder or a framer may find this far closer to the truth than a cart. Give the enquiry a clear route: one link, a named person, and a stated reply time.

**Seen on** Ne Geurra, Aarretuote. **Suits** type-led, photo-led; ecommerce.

<!-- v:commerce.product-detail/inline-buy-box -->
### 9. Inline buy box

*Feeling: no need to go anywhere else.*

The buy box lives on a marketing or single-product page, or in a quick-view panel. A rounded 20px media card sits beside a 52px headline, price, chips for shipping, and one dark pill. Shopify Supply opens a right panel with accordion details from a lookbook. Use it when there is one product or a very short range. It must still show variants, delivery and returns. Avoid it for a range with many variants, which needs a real page.

**Seen on** KTA+ Store, Clevr Blends, Shopify Supply | Performance Pack. **Suits** bold-colour, dark-precision; ecommerce, food-drink.

<!-- v:commerce.product-detail/sticky-add-bar -->
### 10. Sticky add bar

*Feeling: the button came with you.*

Once the main button scrolls off, a compact bar takes over. Use it on any product page longer than about two screens, and avoid it on short ones, where the real button is never far away. Brightland's is 760 by 90, white, 1px line, soft shadow, centred 16px from the bottom, with a 64px thumb, a 24px name, a 13px sub and a 200 by 53 button holding the price. Its phone version runs edge to edge with a smaller thumb. HexClad docks a smaller card at bottom right, and Diasporaco a full-width bar. Rishi packs anchor tabs, size, quantity and frequency into one full-width bar, ending in a colour block, which suits long tea pages but is at the limit of what fits.

Show it only when the real button is out of view, and hide it again at the footer if it covers links. Use an IntersectionObserver rather than a scroll listener. Keep it clear of chat bubbles, which cover the button on more than one store in the corpus.

**Seen on** Brightland product, Rishi-Tea product, Hexclad product, Diasporaco product. **Suits** warm-neutral, bold-colour; ecommerce.

```css
.bar{position:fixed;left:50%;bottom:16px;translate:-50% 0;width:min(760px,calc(100% - 32px));display:flex;align-items:center;gap:16px;padding:12px;
  background:var(--bg);z-index:9;box-shadow:0 0 0 1px var(--line),0 8px 24px color-mix(in srgb,var(--ink) 12%,transparent);transition:translate .25s cubic-bezier(.2,.8,.2,1),opacity .2s}
.bar[hidden]{display:flex;opacity:0;translate:-50% 12px;pointer-events:none}
.bar img{width:64px;height:64px;object-fit:contain;background:var(--tile)}
.bar b{display:block;font:500 20px/24px var(--font-display)}.bar small{font-size:13px;line-height:18px;color:var(--ink-2)}
.bar .atc{margin-left:auto;width:auto;height:52px;padding:0 32px;white-space:nowrap}
@media(max-width:760px){.bar{left:0;right:0;bottom:0;translate:none;width:auto;padding:8px 12px calc(8px + env(safe-area-inset-bottom));box-shadow:0 -1px 0 var(--line)}
  .bar img{width:44px;height:44px}.bar small{display:none}.bar .atc{height:44px;padding:0 14px}}
```

```js
new IntersectionObserver(([e])=>{bar.hidden=e.isIntersecting}).observe(document.querySelector('.atc'))
```

<!-- v:commerce.product-detail/accordion-spec-list -->
### 11. Accordion spec list

*Feeling: it is all here if you want it.*

The long detail folds under the buy box into plus-minus rows, 44 to 52px between rules, labelled Details, Care, Dimensions, Shipping, Returns. Brightland uses full-ink rules and tracked caps, which reads as a printed spec sheet. Rishi uses quiet hairlines with small arrows. Open the first row. Use it on every product with more than a few lines of detail. Build it with `<details>`. Do not hide the delivery date here, since the row is for policy detail and the date belongs under the button.

**Seen on** Hexclad product, Brightland product. **Suits** dark-precision; ecommerce.

<!-- v:commerce.product-detail/reassurance-stack -->
### 12. Reassurance stack

*Feeling: this shop has thought about what worries you.*

The block under the button, and it belongs on every product page. Keep it within 16px of the button at 13 to 14px, with a 7px stock dot. A stock dot and date, then a short line for shipping threshold and returns, then, if you have the room, a three-part row. HexClad uses three small icons with two-line caps labels. Diasporaco's single small line, in stock and shipping within two days, does almost as much. IKEA gives a named store. Harney places a verified buyer's quote in a large rounded card beside the title, which is a strong idea, but it takes a lot of the first screen and pushes the button down. Keep the proof and let the button stay.

Avoid badge rows and seals, which claim without saying anything. Each fact has to be specific. `Fast shipping` says nothing. `Arrives by Tue, Nov 10` says everything.

**Seen on** Harney product, Hexclad product, IKEA Sofas Filters, Diasporaco product. **Suits** warm-neutral; ecommerce.

```css
.ship{list-style:none;padding:0;margin-top:16px;font-size:14px;line-height:21px;color:var(--ink-2)}
.ship li{display:flex;gap:10px}.ship b{font-weight:500;color:var(--ink)}
.ship i{flex:none;width:7px;height:7px;margin:7px 3px 0;border-radius:50%;background:var(--ok)}
.trust{display:grid;grid-template-columns:repeat(3,1fr);margin-top:20px;padding-top:16px;border-top:1px solid var(--line);
  font-size:12px;line-height:17px;text-align:center;color:var(--ink-2)}
.trust div+div{border-left:1px solid var(--line)}
```

<!-- v:commerce.product-detail/cross-sell-row -->
### 13. Cross-sell row

*Feeling: a good shopkeeper's suggestion.*

After the buy box, or at the end of a listing. Use it on most product pages, and avoid it on one-product stores. Rishi and Harney run three or four cards with an add control and a size picker. HexClad uses compact rows with 56px thumbs and a 32px outlined add button, which let you add without leaving. Blu Dot closes its listing with a recommended strip after a progress rule. Use real pairs, with a heading that gives a reason, such as `Goes with`, rather than `You may also like`. Do not show the product itself, and do not put this between the title and the button.

**Seen on** Harney product, Hexclad product, Rishi-Tea product, Bludot filters, Diasporaco product. **Suits** warm-neutral, dark-precision, light-precision, bold-colour; ecommerce.

**What cheapens a product page.**

- **The button below the fold.** Check at 1440 by 900 and on a phone. Promo bars and review cards are usually to blame.
- **Listing scale on the hero.** A product at 60 percent of the stage looks timid. Take it to 85 or 90.
- **A lighter box around the product on a dark page.** Let the dark run through.
- **A bright accent on dark.** Use a deep colour, not a mid-tone coral.
- **A brand story above the facts.** Put price and options first. Tell the story lower down.
- **A native select for size.** Use chips.
- **Delivery in an accordion.** That is the one fact that must stay out.
- **A close-up as the first image.** The shopper must see the whole thing first.
- **Too many trust badges.** Payment logos, seals, press logos, all above the fold, feel defensive.
- **A review widget with its own design language.** Bring it into the store's type and colour, because a third-party look breaks the spell.
- **Fake scarcity.** `12 people are looking at this` ends trust for good.

## Cart

The cart must confirm what is in it, what it will cost, and what happens next, and then get out of the way. Read [How the cart behaves](#how-the-cart-behaves) first, since most of the quality here is behaviour rather than appearance.

What separates great from cheap: a great drawer feels like the store's own furniture, in the store's type and colours, with a fixed total and a clear button. Empty, it still sells, by routing the shopper somewhere useful. A cheap cart is a theme default: a thin 340px panel, tiny thumbs, a plain subtotal, a form-styled quantity box, and an empty state that says nothing and offers nothing. Every empty cart in the corpus worth keeping offers a next step.

Measured ranges from real drawers: width 422 to 600, header 40 to 58, scrim 40 to 60 percent, tinted to the page on warm stores. Our Place's scrim turns its pale page olive-brown rather than grey, which is much kinder than a black overlay. Buttons run 41 to 56 tall.

<!-- v:commerce.cart/filled-drawer-lines -->
### 1. Filled drawer lines

*Feeling: your order, clearly.*

The default cart. Fixed header with the count, a progress band, scrolling lines, a fixed footer. Use it for every store. The numbers here come from our own tested render, built on the proportions of the real drawers, because the corpus holds no filled cart.

Lines use an 88px tight-cropped thumb on the tile colour, a 14/500 name, a 13px variant line with the unit price when quantity exceeds one, the line total at the right, a 32px stepper, and a text `Remove`. The footer has subtotal, a note, a delivery date and a 52px Checkout. Name the date in the footer, because it is the last reassurance before payment. Avoid a drawer only for very long baskets, such as groceries, which need a full page.

**Seen on** Kith cart, Glossier cart, Drinkolipop cart. **Suits** light-precision, warm-neutral, photo-led; ecommerce.

```css
.prog{padding:12px 20px 14px;font-size:13px;line-height:18px;background:var(--tile)}.prog b{font-weight:500}
.track{height:3px;margin-top:8px;background:color-mix(in srgb,var(--ink) 12%,transparent)}
.track i{display:block;height:100%;width:var(--w);background:var(--ink);transition:width .4s cubic-bezier(.2,.8,.2,1)}
.ln{display:grid;grid-template-columns:88px 1fr auto;gap:0 14px;padding:16px 0;border-bottom:1px solid var(--line)}
.ln img{grid-row:1/4;width:88px;height:88px;padding:8px;object-fit:contain;background:var(--tile)}
.ln h3{font:500 14px/20px var(--font-text)}
.ln .p{font-size:14px;line-height:20px;text-align:right;font-variant-numeric:tabular-nums}
.ln .v{grid-column:2/4;font-size:13px;line-height:18px;color:var(--ink-2)}
.ctl{grid-column:2/4;display:flex;align-items:center;justify-content:space-between;align-self:end}
.qty{display:grid;grid-template-columns:32px 28px 32px;height:32px;align-items:center;text-align:center;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:14px;font-variant-numeric:tabular-nums}
.rm{font-size:13px;color:var(--ink-2);text-decoration:underline;text-underline-offset:3px}
.df{padding:14px 20px calc(16px + env(safe-area-inset-bottom));border-top:1px solid var(--line)}
.sum{display:flex;justify-content:space-between;font-weight:500;font-variant-numeric:tabular-nums}
.df p{font-size:13px;line-height:18px;color:var(--ink-2);margin-top:2px}
.co{display:flex;justify-content:center;align-items:center;width:100%;height:52px;margin-top:12px;background:var(--ink);color:var(--bg);font-weight:500}
```

<!-- v:commerce.cart/cart-page-summary -->
### 2. Cart page with summary

*Feeling: the desk where you check the bill.*

The full page, for direct visits and for larger baskets. Lines on the left between hairlines at 120px thumbs, with a sticky 380px summary on the right holding subtotal, shipping, tax and a total at 18/500. Promo codes sit behind a quiet link, because an open coupon box sends people off to search for one. Delivery date and returns sit under the button. On phones, the summary follows the lines and Checkout pins to the bottom edge. Use it alongside the drawer, and avoid a page-only cart, which sends the shopper away on every add. Like the drawer, this was tested in our own render, on the page structure of Apple's and Parachute's cart pages.

**Seen on** Apple Bag, Parachutehome cart. **Suits** light-precision, warm-neutral, photo-led; ecommerce.

```css
.w{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:64px;max-width:1200px;margin:auto;padding:48px 32px;align-items:start}
.sum{position:sticky;top:24px;background:var(--tile);padding:24px}
.s{display:flex;justify-content:space-between;font-size:14px;line-height:28px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.s.t{color:var(--ink);font-size:18px;font-weight:500;line-height:26px;border-top:1px solid var(--line-strong);margin-top:10px;padding-top:12px}
.co{display:grid;place-items:center;width:100%;height:52px;margin-top:16px;background:var(--ink);color:var(--bg);font-weight:500}
summary{cursor:pointer;color:var(--ink-2);list-style:none;text-decoration:underline;text-underline-offset:3px}
@media(max-width:900px){.w{grid-template-columns:1fr;gap:24px;padding:24px 16px 96px}.sum{position:static;padding:16px}
  .co{position:fixed;left:12px;right:12px;bottom:12px;width:auto;z-index:5}}
```

<!-- v:commerce.cart/drawer-guided-rows -->
### 3. Guided empty drawer

*Feeling: a helpful assistant at the door.*

An empty drawer that sends you somewhere. Our Place uses a 422px drawer on warm off-white, a 48px header, a 24/36 two-line message, a small caps label, and five outlined rows at 374 by 66, radius 4, with a tight 48px product cut-out and a 14px label, at 16px gaps. A pinned `Shop all products` closes it. Allbirds uses a stack of black pills. Use it for any store with clear departments. Rows should name real best sellers or departments, in the store's own words. Avoid it for a store of fewer than about five products, where a direct link is simpler.

**Seen on** Fromourplace cart, Allbirds cart. **Suits** warm-neutral, bold-colour; ecommerce.

```css
.b{flex:1;padding:32px 24px;overflow:auto}
.b h2{font:400 24px/36px var(--font-display)}
.lb{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2);margin:24px 0 16px}
.r{display:flex;align-items:center;gap:16px;height:66px;padding:0 16px;margin-bottom:16px;box-shadow:inset 0 0 0 1px var(--ink);border-radius:4px;font-size:14px;transition:background .15s}
.r:hover{background:var(--surface)}
.r img{width:46px;height:46px;object-fit:contain}
.f{padding:16px 8px;border-top:1px solid var(--line)}
.f a{display:grid;place-items:center;height:48px;box-shadow:inset 0 0 0 2px var(--ink);border-radius:4px;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
```

<!-- v:commerce.cart/drawer-voice-empty -->
### 4. Voice empty drawer

*Feeling: the brand, on a quiet day.*

An empty state with a sense of humour, in a brand that already has one. Glossier uses a 435px drawer over a 60 percent grey scrim. The 40px header holds the logo and `BAG (0)`. A shipping line sits by a thin progress rule, then a tinted body with a two-line 20px joke and one large pale brand mark, and `Shop all` at the base. Use it only when the voice is real across the store. A joke in a serious store, or a generic sad-basket illustration, is worse than plain words.

**Seen on** Glossier cart. **Suits** light-precision; ecommerce.

<!-- v:commerce.cart/drawer-progress-upsell -->
### 5. Progress and upsell drawer

*Feeling: nearly there, and here is what would help.*

Built for low-priced goods sold by the case. Olipop gives a 480px cream drawer a centred display title and, right below it, one line with a progress bar stating the free shipping threshold. Empty, it centres a big headline, a line of copy and a 48px pill. A rail pinned to the base holds 304 by 98 cards with a can, name, price and a 32px outlined plus, plus arrows. The rail stays while the lines scroll, so that adding one more can never loses the shopper's place. Use it for food and drink, and anything where a basket is built from small items. Avoid it for high-ticket goods, where a free shipping bar feels petty.

**Seen on** Drinkolipop cart. **Suits** bold-colour; food-drink.

<!-- v:commerce.cart/drawer-recommended-pair -->
### 6. Recommended pair drawer

*Feeling: a small shop inside the bag.*

Kith goes wide at 600px and uses the room to sell. A 20px serif title with a count, an ink rule, plain links to keep shopping or sign in, a rule, then `Recommended For You` and two horizontal product cards with a 100px grey thumb, a bold caps name, a colour line, a price and a 41px dark full-width add button. Use it for fashion and drops with strong product imagery. At 600px it covers a lot of the page, so it should be earning that space. Avoid it when recommendations are generic, because then the width is wasted.

**Seen on** Kith cart. **Suits** mono-technical; fashion.

<!-- v:commerce.cart/empty-bag-page -->
### 7. Empty bag page

*Feeling: nothing here yet, but the shop is open.*

An empty cart at its own URL. Apple sets a 40/600 headline, one line, two 360 by 56 buttons side by side for sign-in and continue shopping, a hairline help strip with a chat link and a phone number, and a 980px promo tile. Parachute goes straight to a sign-in nudge, then its newsletter and footer. Use the sign-in offer, because a shopper who sees an empty cart may simply be on a new device. Avoid an illustration with no action, which is a dead end with a nice picture.

**Seen on** Apple Bag, Parachutehome cart. **Suits** light-precision, warm-neutral; ecommerce.

<!-- v:commerce.cart/running-total-header -->
### 8. Running total header

*Feeling: no surprises as you build it.*

Used in a configurator or a finance flow. Apple sticks a 74px strip to the top: the product name at left, and a right-aligned two-line price in 17px with footnote marks, updating as options change. A 50px strip below splits delivery, shipping and pick-up with hairlines. Use it wherever the price changes while the shopper chooses. It answers `what am I at now` without a scroll. Avoid it for a fixed-price product, where it only repeats the buy box.

**Seen on** Apple MacBook Air Buy. **Suits** light-precision; ecommerce.

<!-- v:commerce.cart/donation-amount-picker -->
### 9. Donation amount picker

*Feeling: one good decision, made in a moment.*

charity: water treats giving as a one-step cart. A 390px white panel sits on the photo, with a two-part frequency toggle on top, chips of about 116 by 52 in three columns, `Other amount` spanning two, one selected chip in the accent, a line stating what this amount does, and a 48px full-width button. Use it for donations, tips and memberships. Avoid it for goods, which need a real product page. The line that translates money into impact is the most important part, and it must update with the amount.

**Seen on** charity: water. **Suits** photo-led; nonprofit.

**What cheapens a cart.**

- **A narrow drawer.** Under 400px the lines crush. Use 420 to 480.
- **Small speck thumbnails.** Use a tight crop.
- **A native select for quantity.** It was the one thing on our first cart page that looked unbuilt. Use a stepper.
- **A dead empty state.** Name the next step.
- **A modal on top of the cart.** It happens in the corpus. Nothing is worse timed.
- **A black scrim on a warm store.** Tint the scrim from the palette.
- **An open coupon field.** It sends shoppers away to look for a code.
- **An upsell between total and checkout.** Keep the path clear.
- **Reloading the page to update quantity.** Update in place, then reconcile.
- **Vague totals.** State what is not included, and when it will be known.

## Before you call it done

Run this once over the whole store.

- Every tile shares one ground, one angle and one scale, and no cut-out shows a plate edge on the real tile colour.
- Tiles reserve their ratio, and nothing jumps as images load.
- Small slots use tight crops.
- Price appears in one format everywhere, in tabular figures, and the title block, button and sticky bar agree.
- At 1440 by 900 and on a phone, the add button is on the first screen.
- The selected variant is stated in words, and it changes picture, price and stock in place.
- Unavailable options are shown, not hidden.
- Delivery date and returns sit within 16px of the button.
- All button states exist: needs a choice, busy, done, failed, sold out.
- The drawer opens over the page, traps focus, closes on Esc and on the backdrop, and returns focus.
- Quantity updates in place, and removal can be undone.
- Empty states offer a next step.
- Filters show counts, applied chips and a result total, and collapse to `Filter` and `Sort` on phones.
- The grid is two up on phones, with no hover-only information.
- Struck prices pass contrast, and every swatch has a text name for screen readers.
- No modal opens on arrival. If you are tempted, read [the first section](#what-makes-a-store-feel-well-run) again.
