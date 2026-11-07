# Navigation

Navigation answers three questions on every screen: where am I, what else is here, and what should I do next. It is the one element a visitor uses on every page and looks at on none of them, so the craft lies in restraint. Beginners make the bar the most finished object on the page, with a glass fill, a gradient button and a shadow. Professionals make it the quietest thing that still works, then spend their care on alignment, on what happens when the page moves beneath it, and on what opens when you touch it. This chapter teaches the bars, the menus that really hang off them, how phone menus enter, and the rails that replace them on documents and long pages.

It holds 106 canonical variants, clustered from all 1,002 analyst rows across 586 sites, including inner pages, app screens and menus opened in a real browser. The strongest variants of each element were checked against full-size frames and against the measured navs of 274 sites, and 26 were rebuilt and rendered next to the real thing, which is where the corrections and the mistake lists come from. The same variants live in `data/elements/nav.jsonl`, which is what the sampler deals from. Recipes here use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, so any palette and type system drops in, and they were re-rendered in a second palette to prove it. Mono variants read `var(--font-mono,ui-monospace,monospace)`, so they work with or without a mono face in the deal. Hex values appear only where they are neutral greys or measured facts about a site. Treat those as evidence, not as a palette to copy.

Every pixel value in this chapter is a real CSS pixel at 1440 or 390 wide. The analysts read open menus and phone sheets from a tiled contact sheet at about 0.44 scale, so their raw notes said things like 7px titles and 375px panels. Those numbers were wrong by more than double. Menu text is the same size as page text, and panels are far wider than they look in a thumbnail. Everything below was corrected from full-size frames.

**Contents.** [How a navigation is decided](#how-a-navigation-is-decided) · [What we measured](#what-we-measured) · [Derived tokens](#derived-tokens) · [Behaviour every nav needs](#behaviour-every-nav-needs) · [Eight nav systems](#eight-nav-systems)

- **[Top bar](#top-bar):** [left cluster bar](#1-left-cluster-bar) · [centred links bar](#2-centred-links-bar) · [right grouped bar](#3-right-grouped-bar) · [even spread bar](#4-even-spread-bar) · [centred wordmark split](#5-centred-wordmark-split) · [menu, logo, action](#6-menu-logo-action) · [linkless bar](#7-linkless-bar) · [chromeless type row](#8-chromeless-type-row) · [corner anchored](#9-corner-anchored) · [blend inverting nav](#10-blend-inverting-nav) · [progressive blur bar](#11-progressive-blur-bar) · [section adaptive bar](#12-section-adaptive-bar) · [transparent to solid](#13-transparent-to-solid) · [two-tier product subnav](#14-two-tier-product-subnav) · [two-row masthead](#15-two-row-masthead) · [scroll swap bar](#16-scroll-swap-bar) · [search led bar](#17-search-led-bar) · [category retail bar](#18-category-retail-bar) · [mono instrument bar](#19-mono-instrument-bar) · [ruled cell bar](#20-ruled-cell-bar) · [chip link bar](#21-chip-link-bar) · [solid brand bar](#22-solid-brand-bar) · [map nav](#23-map-nav) · [bottom docked bar](#24-bottom-docked-bar) · [switch led bar](#25-switch-led-bar) · [system chrome bar](#26-system-chrome-bar) · [hanging tab bar](#27-hanging-tab-bar)
- **[Floating pill](#floating-pill):** [inset rounded bar](#1-inset-rounded-bar) · [condense to capsule](#2-condense-to-capsule) · [centred capsule](#3-centred-capsule) · [hairline tray](#4-hairline-tray) · [segmented tab bar](#5-segmented-tab-bar) · [detached corner controls](#6-detached-corner-controls) · [split bars](#7-split-bars) · [section subnav pill](#8-section-subnav-pill) · [bottom nav dock](#9-bottom-nav-dock) · [travelling action dock](#10-travelling-action-dock) · [menu lozenge](#11-menu-lozenge) · [seamed capsule](#12-seamed-capsule)
- **[Announcement bar](#announcement-bar):** [ink strip](#1-ink-strip) · [bar behind sheet](#2-bar-behind-sheet) · [brand tone strip](#3-brand-tone-strip) · [accent flood strip](#4-accent-flood-strip) · [pale tint strip](#5-pale-tint-strip) · [tagged strip](#6-tagged-strip) · [textured strip](#7-textured-strip) · [inset notice](#8-inset-notice) · [under-nav strip](#9-under-nav-strip) · [hero pill](#10-hero-pill) · [ticker marquee](#11-ticker-marquee) · [rotating paged strip](#12-rotating-paged-strip) · [utility strip](#13-utility-strip) · [bottom fixed bar](#14-bottom-fixed-bar) · [status line](#15-status-line)
- **[Mega menu](#mega-menu):** [flush text columns](#1-flush-text-columns) · [lead list sheet](#2-lead-list-sheet) · [ruled column panel](#3-ruled-column-panel) · [described link panel](#4-described-link-panel) · [icon rows panel](#5-icon-rows-panel) · [list plus feature](#6-list-plus-feature) · [visual card row](#7-visual-card-row) · [retail columns with photos](#8-retail-columns-with-photos) · [master detail panel](#9-master-detail-panel) · [bordered tile grid](#10-bordered-tile-grid) · [tone zoned panel](#11-tone-zoned-panel) · [compact dropdown](#12-compact-dropdown) · [bar becomes panel](#13-bar-becomes-panel) · [content popover](#14-content-popover) · [bare reveal](#15-bare-reveal)
- **[Mobile menu](#mobile-menu):** [accordion sheet with pinned CTA](#1-accordion-sheet-with-pinned-cta) · [plain row sheet](#2-plain-row-sheet) · [flat grouped sheet](#3-flat-grouped-sheet) · [CTA first sheet](#4-cta-first-sheet) · [display type takeover](#5-display-type-takeover) · [colour room takeover](#6-colour-room-takeover) · [indexed takeover](#7-indexed-takeover) · [curtain reveal list](#8-curtain-reveal-list) · [inset card dropdown](#9-inset-card-dropdown) · [inline push down](#10-inline-push-down) · [side drawer](#11-side-drawer) · [docs tree drawer](#12-docs-tree-drawer) · [rich entry sheet](#13-rich-entry-sheet) · [pill stack](#14-pill-stack) · [search first sheet](#15-search-first-sheet) · [thumb zone sheet](#16-thumb-zone-sheet)
- **[Sidebar nav](#sidebar-nav):** [sticky index rail](#1-sticky-index-rail) · [thin brand rail](#2-thin-brand-rail) · [fixed link column](#3-fixed-link-column) · [desktop icon nav](#4-desktop-icon-nav) · [edge frame nav](#5-edge-frame-nav) · [numbered rail](#6-numbered-rail) · [section tab band](#7-section-tab-band) · [edge tab](#8-edge-tab) · [page index as content](#9-page-index-as-content) · [app tree rail](#10-app-tree-rail)
- **[Docs nav](#docs-nav):** [guide line tree](#1-guide-line-tree) · [filter first tree](#2-filter-first-tree) · [icon head tree](#3-icon-head-tree) · [pill active tree](#4-pill-active-tree) · [three pane shell](#5-three-pane-shell) · [scrollspy table of contents](#6-scrollspy-table-of-contents) · [product tabs plus rail](#7-product-tabs-plus-rail) · [index landing](#8-index-landing) · [book contents](#9-book-contents) · [docs header strip](#10-docs-header-strip) · [filter row](#11-filter-row)
- [Before you call it done](#before-you-call-it-done)

## How a navigation is decided

Make five decisions, in this order. Most cheap navs skip straight to the styling, which is the sixth.

**1. How many destinations are exposed.** Count them. In the frames we checked, strong bars expose four to seven links. Ten is a store or Apple. If you have three pages, you may not need a link row at all, and a linkless bar or a single centred line of type will look more confident than a row padded out to five. If you have forty, the bar still shows five and a menu holds the rest.

**2. Which rail the bar sits on.** This is the cheapest large upgrade in the chapter. The bar's contents must line up with the page beneath. On Linear the logo and the hero text share x=80, and the sign-up pill ends at 1360, where the product frame's content ends. On Vercel the logo sits at x=24 and the open menu's first column starts at x=24. Apple locks everything to a 980 column, and Zed and Bun hold the bar inside the same column as the page. Set the bar's gutter from the page's container. Never let it default to 24px while the page sits at 80.

**3. What happens when the page moves.** Decide this before choosing a fill, because it decides the fill.

| Behaviour | What it says | Reference |
|---|---|---|
| Scrolls away | The page matters more than the chrome | Scale, Lithic, Analogue |
| Sticks, solid | Always available, at a cost of 60 to 70px of screen | Vercel, Attio, Render |
| Sticks, translucent | The page continues behind it | Linear, Apple |
| Condenses | The bar steps back once you start reading | mymind, Amplitude, Buildkite |
| Collapses to mark and action | Only one thing still matters | Cloudflare Workers, ElevenLabs |
| Swaps its job | The bar becomes this page's own index | Stripe Pricing, Storybook |
| Re-skins by section | The bar belongs to whatever room you are in | Hims, Attio, Public |

**4. What a trigger opens.** Size the disclosure to the number of things inside it. Most bad menus are the wrong size for their contents.

| Items inside | Use | Real width |
|---|---|---|
| None | A plain link with no chevron | |
| 4 to 8 | Compact dropdown | 120 to 300px |
| 8 to 16 | Panel with two or three columns | 550 to 720px |
| 16 to 40 | Wide panel, usually with one feature | 860 to 1000px |
| More than 40, or a store | Page-wide band or sheet | 1260px to full bleed |

**5. What the phone gets.** Do not shrink the desktop menu. Decide what a thumb needs: the one action, then the top-level routes, then everything else. A phone menu has about 700px of height and one column, so it has room for type at a size the desktop bar never gets to use. That is the opportunity, and most sites waste it on 15px rows.

## What we measured

Each value is the median, with the middle half in brackets. Bar height includes only the bar. Sticky share and blur share are the share of measured sites.

| Register | Bar height | Link size | CTA height | Sticky | Blur |
|---|---|---|---|---|---|
| Gold, all registers | 69 (60 to 78) | 15.7 (14 to 16) | 36 (32 to 40) | 64% | 11% |
| Gold and silver | 72 (60 to 88) | 15 (14 to 16) | 38 (33 to 42) | 49% | 10% |
| Light precision | 65 (60 to 78) | 16 (14 to 16) | 36 (32 to 40) | 48% | 8% |
| Dark precision | 76 (64 to 96) | 14 (13 to 16) | 36 (32 to 40) | 56% | 22% |
| Gradient light | 78 (65 to 80) | 16 (14 to 20) | 38 (33 to 40) | 44% | 19% |
| Warm neutral | 80 (56 to 96) | 14.5 (13 to 16) | 40 (36 to 48) | 47% | 11% |
| Photo led | 75 (62 to 85) | 16 (12 to 16) | 40 (38 to 50) | 44% | 6% |
| Bold colour | 79 (54 to 91) | 16 (15 to 16) | 48 (38 to 51) | 47% | 11% |
| Mono technical | 72 (57 to 80) | 14 (14 to 16) | 34 (32 to 40) | 60% | 0% |
| Type led | 70 (55 to 85) | 16.9 (13 to 33.6) | Rarely has one | 60% | 0% |

Across the 274 measured navs and the 516 sites where we hovered real controls:

| Fact | Value |
|---|---|
| Link weight | 400 on 60%, 500 on 18%, 600 on 10%, 700 on 6% |
| Link size | 13px or under on 21%, 14 to 16px on 63%, over 16px on 16% |
| Uppercase links | 7% of navs. Mono links: 2% |
| Navs carrying a filled or outlined CTA | 62% |
| CTA radius | 0 to 3 on 18%, 4 to 6 on 22%, 7 to 12 on 20%, 13 or more on 3%, pill on 37% and 46% on gold, counting any radius of at least half the height |
| CTA weight and padding | 400 on 48%, 500 on 30%. Side padding 16 (12 to 20) |
| Blur strength | 23 measured values from 4 to 25px, median 12 |
| Nav link hover | 58% change at all. Of those: text colour 60%, fill 29%, transform 21%, opacity 12%, underline 9% |
| Nav CTA hover | 86% change. Fill 68%, text colour 34%, transform 18%, border 13% |
| Hover duration | 150 / 200 / 300ms. `ease` leads, then `cubic-bezier(.4,0,.2,1)` |

Counted from real open menus and phone frames. Panel and page figures come from comparing each open frame with its closed frame, so treat them as close, not exact:

| Fact | Value |
|---|---|
| Open desktop menus | 37% page-wide, 63% floating (265 open panels) |
| Page behind an open menu | Dims on 29%, visibly blurs on 14%, otherwise unchanged |
| Menu contents, 139 rows | Image or feature 61%, descriptions 57%, icons 50%, text only 25%, footer strip 12% |
| Phone menu settling time | 191 openings: finished by 120ms on 41%, by 320ms on 32%, still moving on 26% |
| Phone sheet | Light 64%, dark 29%, tinted 7%. Fills the screen on 94% |

Read those numbers as permission. A pill is not the default, since about two thirds of nav buttons are not pills, though gold sites sit near even. Weight 400 is normal for links and common even on buttons. Blur is rare, and nearly half of hovered nav links do nothing visible at all. If your nav has glass, a pill, a gradient and a lift on hover, you have four minority choices at once, and that is what makes it look assembled.

## Derived tokens

Add these once at the top of the stylesheet. Everything below uses them, and because they mix from the palette, a warm palette gets warm lines and warm menus with no further work.

```css
:root{
  --rail:28px;                 /* the page's own left edge, not a guess */
  --line-strong:color-mix(in srgb,var(--ink) 18%,transparent);
  --hover:color-mix(in srgb,var(--ink) 6%,transparent);
  --well:color-mix(in srgb,var(--ink) 4%,var(--bg));
  --veil:color-mix(in srgb,var(--bg) 62%,transparent);
  --solid:color-mix(in srgb,var(--ink) 92%,var(--bg));
  --solid-edge:inset 0 1px 0 color-mix(in srgb,var(--bg) 16%,transparent);
  --menu-shadow:0 0 0 1px var(--line),0 4px 8px -2px color-mix(in srgb,var(--ink) 8%,transparent),
    0 24px 48px -12px color-mix(in srgb,var(--ink) 18%,transparent);
}
/* On a dark palette ink is light, so a shadow mixed from it would glow. Use black and lean on the ring. */
[data-theme=dark]{--menu-shadow:0 0 0 1px var(--line),0 24px 48px rgba(0,0,0,.55)}
```

`--solid` and `--solid-edge` go together. Real solid buttons are rarely pure ink. Cal.com's is #242424 with a 1px white inset at 16 percent along the top edge, and that lit edge is the difference between a button and a rectangle. See the top bar mistakes.

## Behaviour every nav needs

These are not polish. A nav that fails any of these is broken for someone, whatever it looks like.

- **Triggers are buttons, links are links.** Use `<button aria-expanded>` for anything that opens, and `<a>` for anything that goes. Wrap each group in `<nav aria-label>`, mark the current page with `aria-current="page"`, and put a skip link first in the document.
- **Hover opens, click toggles, Escape closes.** Touch users get click. Keyboard users get click plus Escape, and focus returns to the trigger.
- **Give the cursor a grace period.** A panel 8px below the bar closes the instant the cursor crosses the gap unless you wait. Close after about 140ms, and cancel the timer if the pointer comes back. The whole header, panel included, is one hover region.
- **Keep every route reachable without hover.** A page that exists only in a hover menu does not exist on a phone.
- **Lock the page under a phone sheet.** Set `overflow:hidden` on the root, mark the main content `inert`, use `100dvh` rather than `100vh`, pad the base with `env(safe-area-inset-bottom)`, and keep every target at 44px or more.
- **Respect reduced motion.** Drop staggers, clips and marquees, and keep plain opacity.
- **Give glass a fallback.** Without `backdrop-filter`, a translucent bar over text is unreadable. See `references/elements/surface.md` for the `@supports` block.

```js
// Open on hover or click, close on Escape or after a short grace period.
// Mark the header with data-nav and each trigger with data-menu="name". Style from [data-open=name].
const root=document.querySelector('[data-nav]');let timer;
const set=id=>{clearTimeout(timer);root.dataset.open=id||'';
  document.querySelectorAll('[data-menu]').forEach(b=>b.setAttribute('aria-expanded',b.dataset.menu===id))};
document.querySelectorAll('[data-menu]').forEach(b=>{
  b.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')set(b.dataset.menu)});
  b.addEventListener('click',()=>set(root.dataset.open===b.dataset.menu?'':b.dataset.menu))});
root.addEventListener('pointerleave',()=>{timer=setTimeout(()=>set(''),140)});
root.addEventListener('pointerenter',()=>clearTimeout(timer));
addEventListener('keydown',e=>{if(e.key==='Escape')set('')});
```

To change a bar by what is beneath it, ask the page directly. This is simpler than an observer per section, it copes with any layout, and it runs once a frame at most.

```js
const nav=document.querySelector('.nav');let t=0;
const sample=()=>{t=0;const hit=document.elementsFromPoint(innerWidth/2,nav.offsetHeight/2).find(e=>!nav.contains(e));
  nav.classList.toggle('on-dark',!!hit?.closest('[data-nav-theme=dark]'))};
addEventListener('scroll',()=>{t||=requestAnimationFrame(sample)},{passive:true});sample();
```

## Eight nav systems

Variants only work together as a system. A dark hairline bar with a retail photo drawer and a colour-room phone menu reads as three different companies. Choose one row, then take every part from it. Two sites built from different rows will look unrelated, and that is the point, so let the deal or the brief decide rather than a favourite.

| System | Bar | Desktop menu | Phone menu | Strip | Reference |
|---|---|---|---|---|---|
| Quiet product | Left cluster, hairline | Icon rows, or list plus feature | Accordion sheet, pinned CTA | Ink strip | Attio, Vercel, Increase |
| Dark hairline | Right grouped, 20px blur | Tone-zoned panel | Flat grouped sheet | Brand tone strip | Linear, Sourcegraph |
| Floating product | Inset rounded bar | Visual cards, master detail | Accordion sheet | None | Cal.com, Sword Health |
| Long-page product | Two-tier subnav, scroll swap | Bar becomes panel | Accordion sheet | Under-nav strip | Stripe, Apple |
| Instrument | Mono links, keycaps | Icon rows, mono labels | Plain rows, mono | Textured strip | Zed, Warp, Inngest |
| Store | Centred wordmark split | Retail columns with photos | Plain rows with search | Rotating strip | Acne Studios, Marine Layer |
| Hospitality | Menu, logo, action | None, or lead list | Colour room or indexed | Offer in brand tone | Aman, 1 Hotels, Hotel Aurelia |
| Studio | Chromeless or corners | None | Display type takeover | None | A24, Locomotive, Nicole Heim |

## Top bar

A top bar must do three things at a glance: say whose site this is, show the main routes, and offer the next step. It should do them from the page's own rails and then get out of the way. A reader should be able to find it instantly and forget it just as fast.

What separates great from cheap is rarely the bar's fill. Great bars share a left edge with the hero, hold links at a size and weight that sit quietly under the headline, and give the action one clear step of emphasis over its neighbours. Cheap bars arrive at the same layout and then decorate: a logo too small to carry the bar, equal-weight buttons, chevrons on items that open nothing, a shadow plus a border plus blur, and hover states that shift the layout.

Measured ranges: 60 to 78px tall, links 14 to 16px at 400, CTA 32 to 40px at 14px, sticky on 64 percent of gold sites, blur on 11 percent. The logo sets the bar's weight, and in the frames we checked it runs about 1.5 times the link size, around 24px tall for a 16px link row. Give links real hit areas: 36px tall with 12px side padding, so the visual gap comes from the padding and the hover chip has somewhere to live.

Choose the right cluster on purpose. These are the patterns that recur, and they apply to most bars below.

| Right cluster | Recipe | Use it for | Reference |
|---|---|---|---|
| Text and solid | Plain Log in, one 32 to 36px solid | The default for one conversion | Linear, Notion |
| Ghost and solid | 1px outline beside a solid, same height | Returning users matter too | Attio, Spline |
| Three weights | Two 1px outlines, one solid, all 32px, 6 to 8px gaps | Sales-led products | Vercel, Modern Treasury |
| Two colours | Accent then ink, both 32 to 34px | A loud brand with a sales motion | Ramp, Warp |
| Proof slot | GitHub mark with a 12px count before the buttons | Open source and developer tools | Supabase, LiveKit, Neon, ClickHouse |
| A human | Two stacked 22px avatars plus Talk to sales | Sales is a person here | Cal.com |
| One word | A text link, no button | Editorial, galleries, investors | Gagosian, Greylock |

The chevron has one job, which is to say this opens something. Keep it on triggers only, 10 to 12px, stroke 1.25, in `--ink-2`, and flip it 180 degrees in 200ms. A plain link gets no glyph, and an external link gets a small up-right arrow.

Code below relies on the [derived tokens](#derived-tokens).

<!-- v:nav.top-bar/left-cluster-bar -->
### 1. Left cluster bar

*Feeling: a tool you already know how to use.*

The modern product default: logo, links grouped beside it, actions pushed right. It works because the eye reads logo and routes as one line, and the action sits alone at the far end with nothing competing. Use it whenever you have no reason to do otherwise. Do not use it when you are trying to look unlike software.

Set 64 to 68px tall, 14 to 16px links at 400 to 500, 36px link items with 12px padding and a 4px gap, then the actions at the far right on the page rail. Attio measures 68px, 15px at 500 with -0.01em tracking, 36px buttons at radius 10 and a 28px gutter. Vercel runs quieter: 64px, 14px at 400 in grey, 32px buttons at radius 6, and a hairline that appears only once scrolled. Polar drops the rule altogether and leans on tone alone, current link in full ink and the rest at about 50 percent.

**Seen on** Polar, Devin, Render, Vercel Pricing, Attio Pricing, 84 sites in all. **Suits** light-precision, dark-precision, photo-led, bold-colour, illustrated; devtool, saas, ai, finance, health.

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

<!-- v:nav.top-bar/centred-links-bar -->
### 2. Centred links bar

*Feeling: balanced and considered, a little more designed than the default.*

Logo left, actions right, links truly centred on the page. Use it when the bar should feel composed, and when the hero is centred too, because the links then sit on the same axis as the headline. It suits short link sets of three to six. Avoid it when one side is much heavier than the other, unless you use a grid, because flex with space-between centres the links in the leftover gap and they sit visibly off-axis.

Use `grid-template-columns:1fr auto 1fr`. Set 52 to 72px tall, 14 to 16px links, 24 to 40px gaps. Cursor is the purest case: 52px, the same colour as the page with no border, 14px at 400, 32px apart, 28px pills on the right. Exa and Customer.io add tiny 8 to 10px chevrons. Dub puts the current page in a grey chip at radius 8.

**Seen on** Speakeasy, Exa, Cursor Pricing, Modern Treasury, Sonder, 40 sites in all. **Suits** light-precision, warm-neutral, photo-led, dark-precision, bold-colour; devtool, saas, finance, ai, local-business.

```css
.nav{height:56px;padding:0 var(--rail);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:var(--bg)}
.links{display:flex;gap:32px;font-size:14px}
.links a{color:var(--ink-2);transition:color .15s ease}.links a:hover{color:var(--ink)}
.actions{justify-self:end;display:flex;align-items:center;gap:12px}
```

<!-- v:nav.top-bar/right-grouped-bar -->
### 3. Right grouped bar

*Feeling: calm, with confidence to spare.*

The logo stands alone at the left and everything else gathers at the right, next to the action. The empty middle says the brand does not need to fill the space. It is the natural choice for dark product pages, for AI companies, and for anything with a strong hero that should own the top left. Avoid it with more than about seven links, because the right side starts to crowd toward the logo.

Set 64 to 88px tall, 13 to 16px links in muted ink, 24 to 32px apart, then a 1x14px divider before Log in, and one 32 to 40px pill. Linear measures 72px, 13px at 400 in #8a8f98, a 1px line at 8 percent white, 20px blur, and a 32px pill at #e5e5e6 in 13/510. Its gutter of 80 is the hero's left edge. Claude's version runs warmer and larger, at 84px with 15px links and 36px buttons at radius 8.

**Seen on** Prototype, Linear, Linear Changelog, Linear Method, AuthKit, 25 sites in all. **Suits** dark-precision, photo-led, light-precision, warm-neutral, type-led; saas, agency, culture, devtool, other.

```css
:root{--rail:80px}
.nav{position:fixed;inset:0 0 auto;z-index:50;height:72px;background:color-mix(in srgb,var(--bg) 72%,transparent);
  -webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:inset 0 -1px 0 var(--line)}
.nav-in{height:100%;padding:0 var(--rail);display:flex;align-items:center}
.links{display:flex;margin-left:auto}
.links a{height:32px;display:flex;align-items:center;padding:0 12px;border-radius:9999px;font-size:13.5px;color:var(--ink-2);
  transition:color .1s,background .1s}
.links a:hover{color:var(--ink);background:var(--hover)}
.rule{width:1px;height:14px;margin:0 16px;background:var(--line-strong)}
.login{font-size:13.5px;color:var(--ink-2);margin-right:20px}
.pill{display:inline-flex;align-items:center;height:32px;padding:0 12px;border-radius:9999px;font-size:13px;font-weight:510;
  background:color-mix(in srgb,var(--ink) 90%,var(--bg));color:var(--bg);transition:background .16s}
.pill:hover{background:var(--ink)}
```

<!-- v:nav.top-bar/even-spread-bar -->
### 4. Even spread bar

*Feeling: a catalogue of things that are all equally important.*

Apple's global bar: links distributed evenly across a fixed row, not grouped at all. It works only when every item is a peer product and the brand mark can stay tiny. Use it for a family of products with one-word names. It fails with mixed destinations such as Pricing and About, because even spacing implies they are the same kind of thing.

Set 44px tall, 12px links at about 80 percent ink, `justify-content:space-between` across a 980 row, mark at far left, search and bag at far right, no CTA. Put it on an 80 percent fill with `saturate(1.8) blur(20px)`, so tiles tint it as they pass. See the lead list sheet for what it opens.

**Seen on** Apple, Apple Intelligence, Apple MacBook Pro. **Suits** photo-led, light-precision, dark-precision; brand, ai.

<!-- v:nav.top-bar/centred-wordmark-split -->
### 5. Centred wordmark split

*Feeling: a shop front or a hotel sign.*

The name sits dead centre and links divide to either side. It is the classic for retail, hospitality, restaurants and culture, where the name is the brand and there is no product to demo. Use it when the wordmark is good. Avoid it for software, where it reads as a boutique, and on phones, where you must collapse one side.

Use a `1fr auto 1fr` grid so the wordmark stays centred however long each side runs. Set 56 to 72px tall, 12 to 13px tracked caps or 16px sentence case, 25px gaps. Acne Studios measures 60px, 12px caps at +0.025em, 10px side inset, zero radius, no CTA. Two details make it look printed rather than templated. Acne pins its links to the top of the row and lets the much larger wordmark take the height, instead of centring everything. Dishoom tracks its caps at about +2px and adds a single 34px outlined pill for the one action.

**Seen on** Villa Aurelia, Dishoom, Fred, Acne Studios, Almeida Theatre, 19 sites in all. **Suits** warm-neutral, photo-led, bold-colour, light-precision, mono-technical; food-drink, ecommerce, culture, hospitality, health.

```css
.nav{position:sticky;top:0;z-index:50;height:60px;padding:10px 10px 0;display:grid;grid-template-columns:1fr auto 1fr;
  align-items:start;background:var(--bg);box-shadow:inset 0 -1px 0 var(--line)}
.nav a{font-size:12px;letter-spacing:.025em;text-transform:uppercase;transition:opacity .15s}.nav a:hover{opacity:.55}
.left,.right{display:flex;gap:25px}.right{justify-content:flex-end}
.nav .word{font:600 34px/40px var(--font-display);letter-spacing:-.02em;text-transform:none}
```

<!-- v:nav.top-bar/menu-logo-action -->
### 6. Menu, logo, action

*Feeling: a concierge who asks one question.*

Three points and nothing else: a menu word at left, a centred mark, one action at right. Everything except the booking is hidden. Use it for hotels, restaurants, retreats and luxury goods, where the page is an atmosphere and only one decision matters. It is wrong for anything people need to compare or browse.

Set 56 to 73px tall. Aman uses a two-line burger, the word Menu at 14px and a search icon on the left, a tracked wordmark about 28px tall in the centre, and a 42px near-square charcoal block on the right. 1 Hotels grows the action to a 50px tracked caps button. Babylonstoren keeps the action as bold serif text with a hairline divider. Write the word Menu rather than leaning on the icon alone, because it is cheap and makes the bar feel written.

**Seen on** Aman, Babylonstoren, 1 Hotels, Joby, Oliver Dupuy, 8 sites in all. **Suits** photo-led, expressive, warm-neutral; hospitality, finance, ecommerce, health, brand.

<!-- v:nav.top-bar/linkless-bar -->
### 7. Linkless bar

*Feeling: nothing to prove.*

Logo at one end, a single word or action at the other, and no exposed links. Use it when the site has few pages, or when the work should fill the screen and a link row would only compete. It suits studios, architects and single-product launches. Avoid it when visitors need to compare routes, because hiding them raises the cost of every visit.

No fill, no border, 20 to 40px gutters, 14 to 17px labels. Herzog & de Meuron sets a bold 23px monogram left and the plain word Menu right. Kinfolk uses a wide burger of two 2px rules, 50px wide and 6px apart. New Material uses only a mark, a chip and Get started. Give the word a 44px tap target even though it looks like text.

**Seen on** New Material, Kinfolk, Lightspeed, STUDIO UNLMTD, Herzog & de Meuron, 24 sites in all. **Suits** photo-led, type-led, render-3d, bold-colour, mono-technical; agency, architecture, brand, health, culture.

<!-- v:nav.top-bar/chromeless-type-row -->
### 8. Chromeless type row

*Feeling: the header is just a line of type.*

No bar at all, only text sitting on the page. Block sets ten centred uppercase links with no logo, no button, no border. 1X runs six muted caps links at 11px and +0.08em. Gagosian uses serif text in light grey with the wordmark in black. Evenark takes it to display scale, a 44px light comma-separated sentence that is both headline and nav. Use it for fashion, culture and confident brands. Avoid it when the first screen needs a conversion, or when the page is a busy image with no scrim.

Set 11 to 14px, caps tracked about .08em or plain sentence case, 35 to 56px gaps. On photographs, lay a 90px top gradient behind it, from black at 25 percent to nothing, as Figure does. The display version needs nothing else on the row.

**Seen on** Block, Gagosian, 1X, ACME, Alessandro Stella, 25 sites in all. **Suits** photo-led, expressive, type-led, warm-neutral, illustrated; agency, portfolio, culture, brand, finance.

<!-- v:nav.top-bar/corner-anchored -->
### 9. Corner anchored

*Feeling: labels on the corners of a poster.*

No bar. Items are pinned to the corners of the viewport and the page scrolls freely beneath. It turns the browser window into a frame. Per Appelgren sets two 12/600 caps words at 16px inset. MetaLab floats a 32px glass Menu pill, a centred wordmark and a live clock over video. Sutera sets a mono wordmark, a boxed line and local time. Use it for portfolios, studios and art. Avoid it on content-heavy pages, because text will run under the corners and collide.

Use 16 to 32px insets and 11 to 16px type. Check every corner against every section, since nothing protects contrast. Blend modes or a section-aware flip usually solve it.

**Seen on** Ne Geurra, Theatre Memory, La Table de Joakim, Per Appelgren, Are.na, 22 sites in all. **Suits** type-led, expressive, photo-led, bold-colour, render-3d; portfolio, agency, culture, ecommerce, food-drink.

<!-- v:nav.top-bar/blend-inverting-nav -->
### 10. Blend inverting nav

*Feeling: type that belongs to whatever is behind it.*

A fixed, backgroundless row set in white with `mix-blend-mode:difference`, so every letter inverts over what passes beneath. Nicole Heim uses it to go white over photographs and black over paper with no bar and no JavaScript. Use it for image-led portfolios and fashion with mostly near-white or near-black grounds. Avoid it over mid greys and saturated colours, where difference produces muddy or clashing results, and avoid it for anything with a filled button.

Set 12 to 17px, 15 to 32px margins. The `mix-blend-mode` must sit on the fixed element itself, and any parent that creates a stacking context will silently break it.

**Seen on** Nicole Heim Studio, X8 Eyewear, Poeza, Katja Ogrin. **Suits** photo-led; fashion, agency, portfolio.

```css
.nav{position:fixed;inset:0 0 auto;z-index:50;padding:24px 32px;display:flex;justify-content:space-between;
  color:#fff;mix-blend-mode:difference;pointer-events:none}
.nav a{pointer-events:auto}
```

<!-- v:nav.top-bar/progressive-blur-bar -->
### 11. Progressive blur bar

*Feeling: the page dissolves as it reaches the top.*

No fill and no border. The links float over a blur that is strongest at the top and fades to nothing, so there is no bar edge to see. This is the most modern-looking bar in the corpus, and it needs care. Ramp, Tana and Factory all use it, and all of them flip their ink as sections pass. Use it on light product pages with rich media. Avoid it on plain text pages, where it only smears words.

Set a 72px bar, a blur layer extending 30 to 130px below it, 16 to 20px strength, masked with a gradient. Because blur guarantees no contrast, the ink must change with the section. Mark dark sections and use the sampling script from [Behaviour every nav needs](#behaviour-every-nav-needs). A weak tint of the same tone as the section helps the links hold.

**Seen on** Tana, Ramp, Factory, Vapi, axem. **Suits** light-precision, expressive; ai, saas, finance.

```css
.nav{position:fixed;inset:0 0 auto;z-index:50;height:72px;isolation:isolate;
  --nav-ink:var(--ink);--nav-ink-2:var(--ink-2);--nav-tint:var(--bg);color:var(--nav-ink);transition:color .2s ease}
.nav.on-dark{--nav-ink:#fff;--nav-ink-2:rgba(255,255,255,.72);--nav-tint:#000}
.nav::before{content:"";position:absolute;z-index:-1;inset:0 0 -32px;
  background:linear-gradient(color-mix(in srgb,var(--nav-tint) 42%,transparent),transparent);
  -webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);
  -webkit-mask:linear-gradient(#000 45%,transparent);mask:linear-gradient(#000 45%,transparent)}
.links a{color:var(--nav-ink-2);transition:color .15s}.links a:hover{color:var(--nav-ink)}
.cta{background:var(--nav-ink);color:var(--nav-tint);transition:background .2s,color .2s}
```

<!-- v:nav.top-bar/section-adaptive-bar -->
### 12. Section adaptive bar

*Feeling: the bar belongs to the room you are in.*

One bar shape with its skin swapped as sections pass. There are two ways to do this. Hims matches each section's colour, so a 48px bar melts into brown, blue, peach and black rooms in turn, with only a wordmark and a white Log in pill staying constant. Attio and Public invert on dark chapters and keep their geometry. Use it when the page has big colour changes that would otherwise collide with a fixed white bar. Avoid it on a page with one ground, where it does nothing.

Transition fill, ink and rule together over about 200ms. On Attio the primary button goes to a mid grey on dark rather than flipping fully to white, so it does not jump out. Citadel swaps its logo and button at the boundary with the same timing.

**Seen on** Public, Hims, Attio, Anthropic News, CITADEL Construction Group, 7 sites in all. **Suits** light-precision, bold-colour, photo-led, warm-neutral; finance, saas, architecture, health, editorial.

<!-- v:nav.top-bar/transparent-to-solid -->
### 13. Transparent to solid

*Feeling: it steps aside for the hero, then gets to work.*

The bar starts clear over hero media and becomes solid once you scroll past. It protects a full-bleed photograph or film while keeping navigation available. Use it with a true image hero. Without one, it is a transition for nothing. Function Health shows the richest version: an inset glass bar over the hero that resolves into a full-width cream bar with terracotta type.

Set 64 to 96px, shrinking to 64 to 72px. CleanShot goes from 96 to 72. Past about 40px of scroll, change background and colour over 200 to 300ms, and add the rule or soft shadow only in the solid state. Swap logo and CTA colour in step, and test the moment halfway through, where white links can pass over a pale fill.

**Seen on** Function Health, CleanShot X, Greylock, Lyra, Calvyn, 11 sites in all. **Suits** gradient-light, bold-colour, photo-led, mono-technical, warm-neutral; saas, health, finance, education, agency.

<!-- v:nav.top-bar/two-tier-product-subnav -->
### 14. Two-tier product subnav

*Feeling: a company, and then this product within it.*

A global bar with a second row for the product you are reading. On Stripe the global row is 76px and the second row 66px, with the product name in accent colour at left and page anchors at right. On Apple the 44px global bar scrolls away and a sticky 52px bar stays, with the product name at 21/600, 12px links, and a blue Buy pill. Claude's second row is only 44px, with a page label and a dropdown. Use it on any product page within a multi-product company. Avoid it on a one-product site, where the second row has nothing to do.

Keep the second row visually lighter than the first, and let only it stick. Separate with a dashed hairline, as Stripe does, or a blur band. Stripe Atlas shows that colour alone can carry the state: active link in navy, the rest in accent, no pill at all.

**Seen on** Stripe Billing, Apple Vision Pro, Claude, Stripe Atlas, Claude Pricing, 9 sites in all. **Suits** light-precision, gradient-light, warm-neutral, photo-led; finance, ai, devtool, brand, saas.

<!-- v:nav.top-bar/two-row-masthead -->
### 15. Two-row masthead

*Feeling: an institution with a front door for everyone.*

Two stacked rows, a brand or utility row over a section row. Monocle runs a 64px row with a centred wordmark and a subscribe button, a 1px black rule, then a 45px centred section row with pipes between items. Retail and universities use the same logic for log in, region and stores. Use it for magazines, institutions and large stores with many audiences. Avoid it as decoration, since two rows cost over 100px of screen.

Set a 24 to 64px upper row at 10 to 13px, and a 44 to 90px lower row at 14 to 18px, with 1px rules between. Keep both rows on the same page rails. Twilio shows the hard-edged version: a 32px pale utility strip over an 80px white bar.

**Seen on** Monocle, Le Saint Georges, Omega, Queen's Library, HAY, 16 sites in all. **Suits** photo-led, light-precision, bold-colour, dark-precision, warm-neutral; ecommerce, devtool, brand, hospitality, culture.

<!-- v:nav.top-bar/scroll-swap-bar -->
### 16. Scroll swap bar

*Feeling: the header notices you have started reading.*

The bar changes its job once you are into the page. Stripe's pricing page swaps the main nav for a 64px white bar holding three section anchors, a contact pill and a 3px lilac progress line along the top edge. Cloudflare Workers drops everything but the cloud mark and a 38px orange pill. ElevenLabs reduces to logo and Sign up. Storybook swaps to a section dropdown and centred anchors. Use it on long pages, where the global nav has stopped being useful. Avoid it on short pages, where the swap never pays off.

Crossfade over 200 to 300ms and keep the height constant if you can, because a bar that changes height pushes the reading position. A reading-progress line goes on the top or bottom edge, 2 to 3px tall.

**Seen on** Stripe Pricing, Cloudflare Workers, ElevenLabs Pricing, Storybook, USPS Delivers, 8 sites in all. **Suits** light-precision, warm-neutral, type-led, photo-led, dark-precision; devtool, editorial, culture, ai, ecommerce.

<!-- v:nav.top-bar/search-led-bar -->
### 17. Search led bar

*Feeling: you came here for something specific.*

Search outranks the links. React gives it about 780px and pushes the links to the side. Bun uses a 416x36 square field with a slash keycap. Hugging Face puts a 360px field straight after the logo. Docs, registries and marketplaces all want this, because visitors arrive knowing what they need. Use it only when search is real and good. A decorative field is worse than none.

Set a 48 to 70px bar, a 36 to 48px field, filled or 1px outlined, with a keycap hint. Show the shortcut: `⌘K` in a 20px key, or a slash. Keep links at 14px with small icon tools at the end. Key takes this further, docking its three-field booking search into the sticky bar after the hero, so the main task stays available at every scroll position.

**Seen on** Vercel AI SDK, Bun, Neon Docs, Vite, React, 23 sites in all. **Suits** light-precision, mono-technical, warm-neutral, dark-precision, photo-led; devtool, other, education, ai, hospitality.

```css
.nav{height:64px;padding:0 24px;display:flex;align-items:center;gap:24px;background:var(--bg);box-shadow:inset 0 -1px 0 var(--line)}
.search{flex:0 1 416px;height:36px;padding:0 8px 0 12px;display:flex;align-items:center;justify-content:space-between;
  border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);font-size:14px;color:var(--ink-2)}
.key{min-width:20px;height:20px;padding:0 5px;display:inline-grid;place-items:center;border-radius:4px;
  box-shadow:inset 0 0 0 1px var(--line);font-size:11px}
```

<!-- v:nav.top-bar/category-retail-bar -->
### 18. Category retail bar

*Feeling: a shop's aisles laid out flat.*

Many plain categories in a row, because in a store the categories are the action. Reformation sets ten 15/500 lowercase links with 20px gaps from a 24px inset, a 135px search as an underlined field, and bag (0) in text. Ro sets eight 16px categories and a single user icon, with no CTA at all. Use it for ecommerce with broad ranges. Avoid buttons here, since a filled CTA competes with the categories.

Set 56 to 80px tall, 11 to 16px, 20 to 40px gaps. Use one signal for sale, usually red text or bold, as Bonobos does. Write the bag count in type rather than a badge when the site is restrained.

**Seen on** Framework, Reformation, Bonobos, Ro, Fellow, 8 sites in all. **Suits** photo-led, light-precision, warm-neutral; ecommerce, health, fashion.

<!-- v:nav.top-bar/mono-instrument-bar -->
### 19. Mono instrument bar

*Feeling: a piece of well-labelled equipment.*

Mono links and visible shortcuts, for developers and technical brands. Zed locks a 56px bar to its 1120 column, with 14px mono links and a keycap beside each action, so every control tells you its shortcut. Warp sets 13px semi-mono links and two 32px blocks at radius 4. Daily prefixes each link with a slash, and its slashes rotate on hover. Inngest and Temporal go to caps. Use it when your audience lives in a terminal. Avoid it for consumer brands, where it reads as affectation.

Set 13 to 15px mono, a 56 to 64px bar, a hairline, radius 4. Keycaps are 16 to 20px tall with a 1px edge. Pair mono links with a sans headline, because the contrast between the two is what looks intentional.

**Seen on** Zed Blog, Zed Pricing, Warp Pricing, Prägen Hätlen, Mirim, 10 sites in all. **Suits** mono-technical, render-3d, warm-neutral, light-precision, type-led; devtool, brand, editorial, agency, portfolio.

```css
.nav{height:56px;max-width:1120px;margin:auto;padding:0 16px;display:flex;align-items:center;gap:24px;
  box-shadow:inset 0 -1px 0 var(--line);font:400 14px/1 var(--font-mono,ui-monospace,monospace)}
.kbd{height:18px;padding:0 4px;display:inline-flex;align-items:center;border-radius:3px;
  box-shadow:inset 0 0 0 1px var(--line-strong);font-size:11px;color:var(--ink-2)}
.nav .cta{height:32px;padding:0 6px 0 10px;display:inline-flex;align-items:center;gap:8px;border-radius:4px;background:var(--accent);color:var(--bg)}
```

<!-- v:nav.top-bar/ruled-cell-bar -->
### 20. Ruled cell bar

*Feeling: a table or a ledger.*

The nav is built from cells with 1px rules between them. New Exhibitions gives the logo a 250px cell, then five equal 238px cells under a 34px utility strip, about 112px in all. Better Auth runs document tabs in 150px cells with a solid black end cap for sign in. Telkom numbers its cells in mono. Use it for archives, institutions and technical brands with a grid already in the page. Avoid it if the page has no matching grid, because the rules then point at nothing.

Run the verticals the full height of the bar, and let them continue into the page's own rules if you can. Radius 0 to 4.

**Seen on** New Exhibitions, Better Auth, Telkom-OT, Postevand, Struck, 6 sites in all. **Suits** mono-technical, type-led, warm-neutral, light-precision; ai, education, ecommerce, culture, other.

<!-- v:nav.top-bar/chip-link-bar -->
### 21. Chip link bar

*Feeling: links as small physical objects.*

Each link is its own chip. Anthropic's news page sets 28px pills with a 1px edge on a warm fill, active one tone darker, with the logo dead centre and more pills to the right. Structure Engineering sets separate white 37px chips at radius 3 directly on a full-bleed photograph, with 2px gaps and no bar. Reflect and Energen group the links inside one central capsule. Use it over images, or where the page already has a tag language. Avoid it when links would compete with real tags and filters in the content.

Set 28 to 40px tall, radius 3 to 999, 2 to 10px gaps. Mark the current chip by tone, not by a new colour.

**Seen on** Anthropic News, Structure Consulting Engineers, UNITO, CMBLU, Lil Italy, 9 sites in all. **Suits** warm-neutral, bold-colour, expressive, dark-precision, render-3d; ecommerce, food-drink, agency, editorial, other.

<!-- v:nav.top-bar/solid-brand-bar -->
### 22. Solid brand bar

*Feeling: the top edge is the brand.*

The whole bar is one flat brand colour with no border. Rabbit uses a saturated orange at 65px with black lowercase links. Counter Culture uses royal blue. Gjelina uses a thick rust band with square-cornered reservation button. Use it for consumer, food and local brands with an ownable colour, and when the next section is neutral. Avoid it directly above a coloured hero, where the two fight.

Set 48 to 72px, one ink at 14 to 16px, one contrasting action. Check 4.5:1 for the links, since mid-tone brand colours often fail with both black and white. Repeat the colour lower on the page, or it reads as a stray strip.

**Seen on** Gjelina New York Menus, Rabbit, Eicher Honig, Tim Rodenbroeker, Salterra Resort & Spa, 9 sites in all. **Suits** bold-colour, warm-neutral, light-precision, type-led, soft-pastel; local-business, hospitality, ecommerce, portfolio, brand.

<!-- v:nav.top-bar/map-nav -->
### 23. Map nav

*Feeling: the whole site, unfolded.*

The nav is an always-open map. Analogue sets three columns of two stacked 13px links at x=290, 637 and 983, which match its footer grid exactly. Teenage Engineering pairs each item with a 1px line glyph, a thin lowercase label and small sub-links, closer to a drawing than a menu. Use it for small catalogues where everything can be shown. Avoid it above about nine destinations.

Set 80 to 100px tall, no fill, 13px on 18px leading. Align columns to the page grid, and let it scroll away, since it costs a lot of height.

**Seen on** Analogue, Studio Dado, Teenage Engineering, Teenage Engineering Products. **Suits** render-3d, type-led, mono-technical; brand, architecture, ecommerce.

<!-- v:nav.top-bar/bottom-docked-bar -->
### 24. Bottom docked bar

*Feeling: everything under your thumb.*

The nav lives on the bottom edge. Fora makes it a 54px white strip that is both nav and footer on a one-screen site. Golden Assisted Transportation runs a navy bottom bar with a gold call button, where the action is the entire reason for the visit. Use it for one-screen sites and local services. Avoid it on long marketing pages, where it reads as a cookie bar.

Set 42 to 54px, 11 to 15px links, and pad with `env(safe-area-inset-bottom)` on phones. Keep the top of the page clear, or the design has two navs.

**Seen on** Golden Assisted Transportation, Fishwife, Fora, KR8 bureau. **Suits** photo-led, bold-colour, expressive, light-precision; agency, hospitality, local-business.

<!-- v:nav.top-bar/switch-led-bar -->
### 25. Switch led bar

*Feeling: first, tell me who you are.*

The main control is a switch, not a list of pages. Monzo puts Personal and Business in a pale full-radius track where the links would go. BIG turns its five disciplines into evenly spaced 12px filters with a search that rotates suggested terms, so the nav is the catalogue's filter. Airbnb uses centred tabs with 48px rendered icons. Use it when the first decision divides the site. Avoid it when the choice is not really binary, or if it hides the routes people need.

Set a 44px track, or 12px caps filters, with the active item as a white pill or a 3px underline. Do not duplicate the switch in the link row.

**Seen on** BIG, Betterment, Monzo, Airbnb, Footer Design Gallery, 7 sites in all. **Suits** bold-colour, photo-led, light-precision, soft-pastel, dark-precision; finance, hospitality, architecture, culture, devtool.

<!-- v:nav.top-bar/system-chrome-bar -->
### 26. System chrome bar

*Feeling: the website thinks it is a computer.*

The bar imitates an operating system or a live instrument. PostHog insets a 40px sage menu bar 8px from every edge at radius 6, with menus that read like File and Edit. Oatly builds a browser toolbar of ruled icon cells. Spring/Summer runs a mono clock with seconds, and Basement shows a live online count in orange with superscript counts on its links. Use it only when the whole site commits to the metaphor. As a one-off, it is a gimmick.

Set 36 to 44px. Keep every label real and working, since the joke dies if the controls are fake.

**Seen on** Plausible Live Dashboard, Basement Studio, Spring/Summer, Oatly, PostHog, 7 sites in all. **Suits** expressive, illustrated, dark-precision, bold-colour, light-precision; agency, saas, devtool, food-drink.

<!-- v:nav.top-bar/hanging-tab-bar -->
### 27. Hanging tab bar

*Feeling: one shaped object that nobody else has.*

Something hangs from the top edge. LaunchDarkly sits its links in a black tab about 640x46 with concave corners cut into the panel below, so tab and page interlock, with the logo in a matching corner tab. Stone Island hangs a 58px round seal below a transparent row. The Takahama Kawara Museum runs a frieze of roof-tile circles along the top. The Philadelphia Orchestra hangs a 62px utility tab from the right. Use it when you have a shape that means something to the brand. Avoid inventing one for its own sake.

Build the concave corners with `radial-gradient` on two small pseudo elements, or with a mask, not with images. Keep the rest of the bar plain, because the shape is the whole statement.

**Seen on** Stone Island, Takahama Kawara Museum, Cacao Bean, The Philadelphia Orchestra, LaunchDarkly. **Suits** warm-neutral, bold-colour, mono-technical; culture, food-drink, devtool, fashion.

### Mistakes that cheapen a top bar

- **A flat ink button.** My first CTA was pure ink on white and looked like a placeholder next to the real thing. Cal.com's is #242424 with `inset 0 1px 0` of white at 16 percent, so the top edge catches light. Use `--solid` and `--solid-edge`.
- **A logo too small to carry the bar.** My first mark was 19px, and the bar felt weightless next to Attio's. Logos run about 1.5 times the link size.
- **Faint chevrons.** I set them at 10px in `--ink-3`, and they vanished. Attio's are 12px in `--ink-2`. Cal.com's are 8px but sit beside darker text. A chevron must be visible, or it should not be there.
- **Blur with no contrast plan.** My first progressive bar put dark links on dark sections. Only a section flip fixes it, and a stronger tint just makes a grey smear. Test the bar over your darkest and lightest sections.
- **A centred row where a pinned one would look printed.** Centring links beside a large wordmark looked generic. Acne pins them to the top of the row.
- **Gutters that ignore the page.** If the logo starts at 24 and the hero at 80, every screenshot shows the error.
- **Three boxes on one edge.** A hairline, a shadow and a blur answer one question three times. Pick one.
- **Chevrons on every link.** They stop meaning anything. Attio's plain links have none.
- **A hover that moves things.** Changing font weight on hover nudges every neighbour. Change colour or fill.
- **Tiny uppercase.** Links under 11px in caps are unreadable, and 8px is a real failure we found. If the row does not fit, cut links.
- **Equal buttons.** Two solid buttons of the same weight ask the reader to decide. One leads.
- **A nav taller than its content needs.** 112px of bar with 14px links looks like an accident.

## Floating pill

A floating bar must do what a top bar does while looking like an object above the page. It earns that status only if something passes beneath it. On a plain page it is a top bar with extra margins. Floating also costs you the edge: the bar no longer shares a line with the viewport, so its own radius, inset and fill now have to look right over every section.

What separates great from cheap is whether the bar looks made. Great floating bars have an exact inset that matches the page's rails, a radius nested with the button inside, and a clear answer for what happens over dark and busy sections. Most of them do not even float at first: they start flat and only become an object once you scroll. Cheap ones are a white pill with a drop shadow, eight tiny links and a gradient button, floating over a plain page from the first frame.

Measured from frames: floating bars run 40 to 76px tall, sit 8 to 26px from the top and 8 to 60px from the sides, at radius 12 to 20 for wide bars and full radius for capsules. Fills are 60 to 85 percent with 12 to 20px blur, or fully opaque. Do not take the word pill literally. Only about four in ten of these are true capsules. Wide bars at radius 12 to 20 are the stronger pattern, with eight of the 23 scoring top marks, and near-square trays at radius 3 to 8 are the quiet, expensive-looking end of the family.

Nest the inner button with the bar. A 36px button in a 64px bar sits 14px from the edge, so the strict concentric radius would be the bar's radius minus 14. Svix shows the alternative, a 48px button inset 8px at the same 16px radius. Cal.com breaks the rule, with 12 inside 18, and it still looks right because the button is dark and the bar is pale. Close enough is fine. Equal radii on very different sizes are not.

Code below relies on the [derived tokens](#derived-tokens).

<!-- v:nav.floating-pill/inset-rounded-bar -->
### 1. Inset rounded bar

*Feeling: a toolbar resting on the page.*

The strongest floating pattern: a full-width bar pulled in from the edges, with a medium radius. It keeps a normal bar's capacity for links and actions, and it reads as modern without looking like a toy. Use it for products with five or more links. Avoid it on image heroes, where a plain transparent row shows more of the picture.

Cal.com measures 8px from the top, 60px at the sides, 64px tall, radius 18, on `rgba(244,244,244,.72)` with blur. Raycast uses 16px from the top, 76px tall, radius 20, a 1px ring of white at 8 percent, near-black at about 80 percent. Svix goes opaque with no shadow at 1216x64. Affirm adds a 1px stroke that is brightest at the top left and fades away, which is a small, expensive detail. Decagon lets the bar sample the colour beneath it, including its footer's gradient.

**Seen on** ECI, Decagon, Affirm, Brilliant, Raycast Pricing, 23 sites in all. **Suits** light-precision, dark-precision, photo-led, warm-neutral, soft-pastel; saas, ai, devtool, health, education.

```css
.nav{position:fixed;z-index:50;top:8px;left:60px;right:60px;height:64px;padding:0 12px 0 28px;display:flex;align-items:center;gap:32px;
  border-radius:18px;background:color-mix(in srgb,var(--ink) 4%,color-mix(in srgb,var(--bg) 72%,transparent));
  -webkit-backdrop-filter:blur(20px) saturate(1.4);backdrop-filter:blur(20px) saturate(1.4)}
.links{display:flex;gap:2px;margin-right:auto}
.links a{display:flex;align-items:center;gap:5px;height:36px;padding:0 12px;border-radius:9px;font-size:15px;transition:background .15s}
.links a:hover{background:var(--hover)}
.cta{height:36px;padding:0 15px;display:inline-flex;align-items:center;border-radius:12px;font-size:15px;font-weight:500;
  background:var(--solid);color:var(--bg);box-shadow:var(--solid-edge)}
@media(max-width:860px){.nav{left:8px;right:8px;padding-left:16px;justify-content:space-between}.links{display:none}}
```

<!-- v:nav.floating-pill/condense-to-capsule -->
### 2. Condense to capsule

*Feeling: the bar draws itself in as you start to read.*

At the top there is no bar, only a row on the hero. Once you scroll, it gathers into a capsule. This is the best-looking behaviour in the family, because the object appears exactly when it becomes useful. Six of the ten sites here are gold. mymind goes from a clear 1320px row to a 980x60 pill 25px from the top, at 80 percent white with 20px blur. Amplitude keeps 1380 wide. Stripe Sessions shrinks its button from 40 to 32px on the way. Inngest docks into a 40px black slab at radius 6. Use it on any marketing page with a strong hero. Avoid it on a page with no first-screen drama, where the change has nothing to resolve.

Set 54 to 64px tall, 16 to 25px from the top, radius 27 to 100. Animate `max-width` on the inner element over about 450ms on an expressive curve, and fill and shadow over 250ms. Toggle at 40px of scroll.

**Seen on** mymind, Bauhaus Clock, Stripe Sessions, Inngest, Buildkite, 10 sites in all. **Suits** gradient-light, light-precision, bold-colour, photo-led, dark-precision; devtool, saas, ai, brand, finance.

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

<!-- v:nav.floating-pill/centred-capsule -->
### 3. Centred capsule

*Feeling: a small, friendly object in the middle of the page.*

A narrow pill at top centre holding logo, a few links and an action. It leaves the corners free, so full-bleed media reads edge to edge. Office Commun sets a 430x42 pill with a 1px border, a small mark, muted links and an inset grey Contact pill with an @ glyph. Weekstack adds a 1px divider after the logo. Hawl goes pure black at 600x48 on scroll. Loopcraft keeps the logo outside entirely, a 518x40 capsule of links only. Use it for agencies, small products and one-page sites with up to four links. Avoid it with long labels or many links, because capsules look wrong when they are crowded.

Set 40 to 58px tall, 420 to 680px wide, 12 to 24px from the top, 12 to 15px links, an inset 32 to 36px CTA. Most of the low scores in this family are this variant at 8 to 11px text. Keep links at 13px or more.

**Seen on** Wolff Olins Work, Loopcraft, Office Commun, Hawl Design, neon Switzerland, 23 sites in all. **Suits** bold-colour, dark-precision, light-precision, type-led, warm-neutral; agency, finance, ecommerce, saas, ai.

<!-- v:nav.floating-pill/hairline-tray -->
### 4. Hairline tray

*Feeling: a label on a technical drawing.*

Precise rather than cute: a tray with near-square corners and a hairline. International Magic sets a 450x56 tray, radius 3, 1px line, 50 percent white with blur, with Projects at left, a two-line wordmark centred and Studio at right. It is one of the most distinctive navs in the corpus, built from almost nothing. Wispr Flow puts a segmented product switch in a boxed bar at radius 8 with a 2px outline in a tone of its cream. VanMoof uses a 600x56 tray at radius 4. Use it for design-led brands. Avoid it where you want warmth, since it reads as cool and exact.

Set radius 3 to 8, 1px line, no shadow. The lack of shadow matters. A hairline and a shadow together bring it straight back to a generic card.

**Seen on** Wispr Flow, International Magic, VanMoof, Globe Limousines, Dalco. **Suits** photo-led, warm-neutral, render-3d, light-precision; saas, local-business, brand, ecommerce, agency.

```css
.tray{position:fixed;z-index:50;top:16px;left:50%;translate:-50% 0;width:450px;height:56px;padding:0 24px;
  display:grid;grid-template-columns:1fr auto 1fr;align-items:center;border-radius:3px;box-shadow:0 0 0 1px var(--line);
  background:color-mix(in srgb,var(--bg) 50%,transparent);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);
  font-size:15px;font-weight:500}
.tray a:last-child{justify-self:end}
.tray .word{text-align:center;line-height:18px}
```

<!-- v:nav.floating-pill/segmented-tab-bar -->
### 5. Segmented tab bar

*Feeling: a physical switch for the page.*

The nav is a segmented control. Symbol Studio's is a 480x40 near-black bar, radius 8, with five 94px segments split by 1px gaps, and the active one a white tile at radius 6. It stays legible over black and white sections alike, because it brings its own ground. Citadel forms a dark pill behind its links after the hero, with a white thumb that slides between sections as you scroll. David Heckhoff tints the pill to each section. Roy Jad and Basement put a tiny version at the bottom. Use it on one-page sites with up to five sections, or as a mode switch. Avoid it on multi-page sites, where the selected tile implies the other pages are siblings on screen.

Keep the thumb motion at about 180 to 300ms, and use scroll spy so it always reports the truth.

**Seen on** Roy Jad, CITADEL Construction Group, Symbol Studio, Brand Identity School, David Heckhoff, 6 sites in all. **Suits** light-precision, render-3d, dark-precision, bold-colour, illustrated; agency, portfolio, architecture, education.

```css
.seg{position:fixed;z-index:50;top:20px;left:50%;translate:-50% 0;display:flex;gap:1px;padding:2px;border-radius:8px;background:var(--ink)}
.seg a{width:94px;height:36px;display:grid;place-items:center;border-radius:6px;font-size:14px;font-weight:500;
  background:color-mix(in srgb,var(--bg) 9%,var(--ink));color:color-mix(in srgb,var(--bg) 66%,var(--ink));
  transition:background .18s ease,color .18s ease}
.seg a:hover{color:var(--bg)}.seg a[aria-current]{background:var(--bg);color:var(--ink)}
@media(max-width:560px){.seg a{width:68px;font-size:13px}.seg{top:12px}}
```

<!-- v:nav.floating-pill/detached-corner-controls -->
### 6. Detached corner controls

*Feeling: there is no bar, only two buttons.*

The bar dissolves into separate objects. On Perplexity's Comet page the wordmark collapses into a 52px white circle on the left, with a teal pill and a 48px circle on the right. Discord shows its full links at the top, then leaves only a logo pill and a Log In pill. 099 keeps three boxed mono buttons over content. Elyx has one pill and nothing else. Use it for immersive pages, launches and long reads. Avoid it where people need routes, and check that content cannot sit behind the corners at their most awkward moment.

Set 12 to 40px from the edges, soft shadow, 40 to 52px tall. Corners collide with content more often than bars do, so test against your busiest section.

**Seen on** 099, Comet, Elyx, Felix Haas, TAYA, 10 sites in all. **Suits** render-3d, warm-neutral, type-led, light-precision, illustrated; other, portfolio, food-drink, saas, ai.

<!-- v:nav.floating-pill/split-bars -->
### 7. Split bars

*Feeling: two instruments side by side.*

Two separate bars rather than one. Together AI sets a 1150px nav bar and a 250px actions bar, each 60px tall, radius 8, with a short lilac dash bridging the 6px gap. Seed splits its nav into a 375x56 capsule and an 84x40 Sign in. Use it when a grid already defines the page. Avoid it without such a grid, because the gap will look like a mistake.

**Seen on** Together AI, Seed. **Suits** gradient-light, photo-led; ai, health.

<!-- v:nav.floating-pill/section-subnav-pill -->
### 8. Section subnav pill

*Feeling: a local table of contents that travels with you.*

A floating element for the parts of one page. Apple Intelligence sets a centred row of 36px pills at radius 18, translucent with hairlines, 18px gaps, and the current one solid black with a faint multicolour glow, in a 58px frosted band. Stripe Billing turns its subnav into a 1266x64 white card 8px from the top, with a soft blue shadow and a new 40px button, once the global bar leaves. Stripe's pricing page straddles a colour ribbon with a 348x50 pill of three anchors. Use it on long product pages. Avoid it with more than about seven anchors.

**Seen on** Apple Intelligence, Stripe Billing, Stripe Pricing, Razorpay Magic Checkout, Rivian R1T. **Suits** light-precision, render-3d, photo-led; finance, ai, auto.

<!-- v:nav.floating-pill/bottom-nav-dock -->
### 9. Bottom nav dock

*Feeling: an app's dock, on a website.*

A pill at the bottom centre rather than the top. Pete Sena sets a 480x52 pill 18px above the edge, translucent so each panel tints it. Use it for portfolios and small sites. It has a real cost. In his frames the dock covers text and a call to action, so reserve a safe zone at the bottom of every section. On phones it fights the browser's own bar.

**Seen on** Pete Sena, Brand Identity School, Elodie Kimmel, LaCrapule Studio. **Suits** type-led, illustrated, bold-colour, photo-led; portfolio, education, agency.

<!-- v:nav.floating-pill/travelling-action-dock -->
### 10. Travelling action dock

*Feeling: the product is right here, follow it down.*

Not navigation but one action that stays with you. Relume fixes a 510x48 frosted prompt at the bottom centre, with placeholder text that changes by section and a 32px magenta Generate button, so the product travels with the reader. Magram uses a 224x60 navy pill with a founder's 44px photo and a 30-minute promise, which puts a human in the corner. Anthropic's docs fix a small black Ask Docs chip 24px from the corner. Use it when the action is the product, or when a person is the offer. Avoid stacking it with a chat widget, a cookie bar and a sticky nav.

**Seen on** Magram, Anthropic Docs, ReadMe, Salterra Resort & Spa, Relume. **Suits** warm-neutral, light-precision, mono-technical, bold-colour; agency, devtool, ai, hospitality, saas.

<!-- v:nav.floating-pill/menu-lozenge -->
### 11. Menu lozenge

*Feeling: a small badge that holds everything.*

A compact bar with no links: mark, wordmark, menu icon. Meridian sets 380x52, radius 12, 16px from the top, white over everything. MetaLab's work page adds local time and small prev and next arrows to its 44px pill, which turns it into a status object. Use it for agencies and image-led sites that want full-width sections. Avoid it if people need more than two taps to reach anything important.

**Seen on** MetaLab Work, Voice Tag Gods, Meridian. **Suits** bold-colour, dark-precision, type-led; saas, agency, brand.

<!-- v:nav.floating-pill/seamed-capsule -->
### 12. Seamed capsule

*Feeling: a ticket stub or a piece of kit.*

An expressive capsule with visible construction. Swirple's is a 1368px black capsule, 82px tall, radius 40, with lilac dashed vertical seams dividing logo, links and buttons. Vayne uses a 50px capsule with a 2px translucent white border, and a ringed burger overlapping its end. Use it on expressive consumer sites only, and let the seams echo something real in the brand.

**Seen on** Swirple, Vayne Entertainment. **Suits** expressive, photo-led; other, agency.

### Mistakes that cheapen a floating bar

- **Floating over nothing.** On a plain page there is nothing to float above, so the shadow is doing all the work and looks like it. Start flat and condense on scroll.
- **A pill with eight links.** Capsules hold four. Past that, use an inset bar at radius 12 to 20.
- **8 to 11px type to make it fit.** Most low-scoring rows here do this. Cut links instead.
- **Transparent with no blur, over text.** Deepnode's words collide under its bar. Either fill it or blur it.
- **Blur that does nothing.** On a smooth gradient, blur changes nothing. It only shows where detail crosses the edge.
- **`transition:all` on the bar.** Name the properties. Animating `backdrop-filter` or layout on every frame stutters.
- **A radius argument between bar and button.** Same radius on a 64px bar and a 36px button looks sticky. Nest them or make the difference plain.
- **Ignoring the phone.** On a phone an inset bar needs 8px sides, a burger and no blur-heavy tricks. Its menu should grow from the bar, not appear from elsewhere.
- **A dock over the CTA.** Bottom docks cover content. Pad every section's base.

## Announcement bar

An announcement bar must carry one sentence of news and then get out of the way. It is the most borrowed attention on the page, since it sits above the logo and pushes everything down. So it has to be worth a line, and it has to be easy to ignore.

What separates great from cheap is how it relates to the brand. Great strips are a material of the site: a deep tone of its CTA, the same grain as its buttons, a sheet the whole page sits on. Cheap strips are a colour nobody chose, with 9px caps, an emoji and a countdown, or a promo that has been there since last year. About one strip in five here is near-black, and those score well, because black is a colour the page already uses for its buttons and footer.

From 108 strips: 34 to 48px tall in the middle half with a median of 40, text 13 to 16px with a median of 14, mostly centred, with a close control on about a third. The stack matters more than the strip. Attio's 48px strip plus 68px nav costs 116px, and Loom's 60 plus 90 costs 150. Decide whether the strip stays. Strong sites split about evenly: Attio, Ramp and Sourcegraph pin it with the nav, while Bun, Customer.io and Function Health let it scroll away and leave the nav alone. If a strip is pinned, keep it under 48px and let it be dismissed for good, using storage so it stays gone.

Write it as one sentence with one link. Put the link at the end, and make the whole strip clickable if it has only one destination. On a phone, shorten the copy rather than wrapping: Attio truncates with an ellipsis, while the worst case here wraps to five lines and 172px tall.

Code below relies on the [derived tokens](#derived-tokens).

<!-- v:nav.announcement-bar/ink-strip -->
### 1. Ink strip

*Feeling: a quiet line of company news.*

One white sentence on near-black. It is the safest strip, because it ties to your dark buttons and footer and adds no new colour. Use it for funding, launches and company news. Avoid it on a dark page, where it disappears. Use a brand tone there instead.

Set 38 to 48px, 14px/500, centred, with an arrow that moves 3px on hover, or an underlined link. Attio uses 48px with an × 40px from the right. Bun uses 38px, no close, and scrolls away. Customer.io adds a date and 1px dividers, which turns a promo into an event notice.

**Seen on** Warp Pricing, Attio Pricing, Polestar, Bun, Attio, 12 sites in all. **Suits** light-precision, mono-technical, dark-precision, photo-led; saas, devtool, finance, brand, culture.

```css
.strip{position:relative;height:48px;display:flex;align-items:center;justify-content:center;padding:0 56px;
  background:var(--ink);color:var(--bg);font-size:14px;font-weight:500;letter-spacing:-.005em}
.strip a{display:inline-flex;align-items:center;gap:8px;max-width:100%;white-space:nowrap}
.strip a span{overflow:hidden;text-overflow:ellipsis}
.strip svg{flex:none;width:12px;height:12px;transition:translate .2s cubic-bezier(.22,1,.36,1)}
.strip a:hover svg{translate:3px 0}
.close{position:absolute;right:24px;top:50%;translate:0 -50%;width:32px;height:32px;display:grid;place-items:center;opacity:.8}
@media(max-width:600px){.strip{padding:0 44px 0 16px;justify-content:flex-start}.close{right:6px}}
```

<!-- v:nav.announcement-bar/bar-behind-sheet -->
### 2. Bar behind sheet

*Feeling: the whole site is a card lifted off a coloured table.*

The strip sits behind the page, and the page is a sheet with rounded top corners on top of it. This is the best idea in the family, because it changes the site's whole silhouette for the price of a radius. ElevenLabs uses a 48px blue strip and 32px corners. Hims uses 44px of pale yellow and 24px corners. Airbnb uses a 76px dark strip and 40px corners, so the page reads as a sheet on a system layer. Use it for a confident consumer or AI brand with one strong colour. Avoid it where the strip needs to stay dismissible, because removing it changes the whole page top.

The strip must be taller than it looks, because it continues behind the sheet, and the corners must show its colour. Paint the body the same colour, so overscroll does not reveal white. Keep sheet and nav one colour.

**Seen on** ElevenLabs Pricing, Hims, Airbnb. **Suits** photo-led, warm-neutral; health, ai, hospitality.

```css
:root{--strip:48px}
body{background:var(--accent)}
.strip{position:fixed;inset:0 0 auto;z-index:0;height:calc(var(--strip) + 32px);padding-top:8px;display:flex;
  justify-content:center;align-items:flex-start;gap:12px;color:#fff;font-size:14px;font-weight:500}
.strip span{line-height:32px}
.strip a{height:32px;padding:0 12px;display:inline-flex;align-items:center;border-radius:99px;background:var(--bg);color:var(--ink)}
.page{position:relative;z-index:1;margin-top:var(--strip);min-height:100vh;background:var(--bg);border-radius:32px 32px 0 0}
.nav{position:sticky;top:0;z-index:5;border-radius:32px 32px 0 0;background:var(--bg)}
```

<!-- v:nav.announcement-bar/brand-tone-strip -->
### 3. Brand tone strip

*Feeling: signal, not alarm.*

A deep tone of the brand rather than its full colour. Sourcegraph takes its coral CTA down to an oxblood #410504 with cream text and a coral arrow. LiveKit uses a teal-black one step off its page, with cyan text and a 1px teal rule. Wispr Flow uses a deep green that introduces the brand before the cream page starts. It is how you add colour without shouting. Use it above a dark or neutral page. Avoid the brand's own CTA colour at full strength, because the strip then competes with the button.

Mix it: `color-mix(in srgb,var(--accent) 22%,#000)` for dark pages. Set 36 to 65px, 14 to 16px, with one small accent mark at full strength.

**Seen on** Sourcegraph, LiveKit, Wispr Flow, Babylonstoren, Function Health, 8 sites in all. **Suits** dark-precision, warm-neutral, photo-led, bold-colour, soft-pastel; health, devtool, food-drink, saas, hospitality.

<!-- v:nav.announcement-bar/accent-flood-strip -->
### 4. Accent flood strip

*Feeling: a bright stripe, on purpose.*

Saturated brand colour across the top. ClickHouse's 32px yellow strip stays pinned, so its colour is on screen at every scroll position. Seed's 40px lime is the only bright thing on the first screen, so one line of copy is enough. VanMoof sets 12px mono caps on electric yellow. Use it when the colour is genuinely ownable. It is also the home of the commonest cheap strip in the data: an 18 to 24px band with 9px caps on an arbitrary colour. Stay above 30px, and never go under 12px.

**Seen on** VanMoof, Inngest, ClickHouse, Seed, Lemon Squeezy, 17 sites in all. **Suits** photo-led, bold-colour, illustrated, warm-neutral, dark-precision; health, ecommerce, devtool, food-drink, saas.

<!-- v:nav.announcement-bar/pale-tint-strip -->
### 5. Pale tint strip

*Feeling: a note left on the desk.*

A faint tint with ink text. Upstash uses a 36px mint with a bottom rule. Sword Health uses the page's own tone and a hairline. Use it when the page already has strong colour, or for service news that should not interrupt. It rarely scores above average, because it asks for little and gives little.

**Seen on** Sword Health, DJI, Rippling, Parsley Health, Hinge Health, 8 sites in all. **Suits** warm-neutral, photo-led, soft-pastel, bold-colour, gradient-light; health, brand, saas, devtool.

<!-- v:nav.announcement-bar/tagged-strip -->
### 6. Tagged strip

*Feeling: a labelled item in a list of news.*

A small tag starts the line and says what kind of news this is. Render sets a 22px outlined violet tag after the sentence on a pale strip. Paddle sets a yellow 11px caps pill at left, aligned to its logo edge, with utilities at right. Docker adds an iridescent word on navy, one small touch of colour on a flat bar. Use it when you publish news often and want a consistent format.

**Seen on** Render, Docker, Paddle, Mixpanel, Rewiring America, 7 sites in all. **Suits** light-precision, bold-colour, gradient-light, warm-neutral; devtool, finance, saas, nonprofit.

<!-- v:nav.announcement-bar/textured-strip -->
### 7. Textured strip

*Feeling: a real material at the top of the page.*

Texture at the ends, text in the middle. Neon's halftone dots run in from both edges, shifting orange to pink to green and shrinking to nothing, with the sentence calm in the centre. Vite uses the same purple grain as its CTA. Auth0 closes a plain strip with a 2px gradient hairline, the only decoration on it. Daily runs torn stone textures at both ends, its one image moment. Use it for developer and technical brands, when the texture exists elsewhere on the site. It fails if the texture is only here.

The dots must shrink. A CSS radial-gradient grid gives you uniform dots, and that was my first attempt: it looked like a broken background, with a hard edge where the pattern stopped. Draw real circles instead, with a radius that falls with distance from the edge.

**Seen on** Neon Docs, Vite, Neon Pricing, Auth0, Daily, 8 sites in all. **Suits** light-precision, dark-precision, mono-technical, gradient-light; devtool, ai, saas.

```html
<div class="strip"><svg class="l" aria-hidden="true"></svg><svg class="r" aria-hidden="true"></svg><a href="/news">One sentence of news ›</a></div>
```

```css
.strip{position:relative;height:36px;display:grid;place-items:center;overflow:hidden;background:var(--well);font-size:14px;font-weight:500}
.strip svg{position:absolute;top:0;height:36px;width:300px}
.strip svg.l{left:0}.strip svg.r{right:0;transform:scaleX(-1)}
.strip a{position:relative;z-index:1}
@media(max-width:700px){.strip svg{width:64px}.strip{padding:0 56px;font-size:13px}}
```

```js
// A true halftone: dot radius falls with distance from the edge, hue walks through three brand stops.
for(const svg of document.querySelectorAll('.strip svg')){const W=300,H=36,S=7,
  stops=[[0,'var(--accent)'],[.22,'var(--accent-2,var(--accent))'],[.55,'var(--ink-3)'],[1,'var(--ink-3)']];let out='';
  const mix=t=>{let i=0;while(t>stops[i+1][0])i++;
    return `color-mix(in srgb,${stops[i+1][1]} ${Math.round((t-stops[i][0])/(stops[i+1][0]-stops[i][0])*100)}%,${stops[i][1]})`};
  for(let r=0;r*S<=H;r++)for(let c=0;c*S<=W;c++){const x=c*S+(r%2?S/2:0),y=r*S,t=Math.min(x/W,1),d=3.6*Math.pow(1-t,.7);
    if(d>.35)out+=`<circle cx="${x}" cy="${y}" r="${d.toFixed(2)}" style="fill:${mix(t)}"/>`}
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.setAttribute('preserveAspectRatio','xMinYMid slice');svg.innerHTML=out}
```

<!-- v:nav.announcement-bar/inset-notice -->
### 8. Inset notice

*Feeling: a card, not a banner.*

Not full-bleed. The notice sits inside the page's margins. Exa sets a 32px pale blue strip inset to its 1280 container at radius 4. Decagon sets a white 48px bar inset 12px at radius 12 on a warm page. Wealthfront sets a 62px card with a cropped photo. Readwise goes as far as a 210px promo card at radius 30, with phones clipped at the base. Use it when your page already has inset panels. Keep the edges on the page rail, since an inset strip that matches nothing looks misplaced.

**Seen on** Exa, Decagon, Sora, Wealthfront, Readwise, 7 sites in all. **Suits** light-precision, soft-pastel, bold-colour, gradient-light; ai, finance, health, devtool, saas.

<!-- v:nav.announcement-bar/under-nav-strip -->
### 9. Under-nav strip

*Feeling: the news arrives after the introduction.*

The strip goes below the nav rather than above. Modern Treasury sets a 48px warm strip under its nav that scrolls away while the nav stays. Groq sets a 48px strip bounded only by hairlines, with no fill, in mono caps. It keeps the very top edge clean and the logo first. Use it when the brand's first impression matters more than the news.

**Seen on** Modern Treasury, Boston Dynamics, Vue, VS Code, Biome, 6 sites in all. **Suits** light-precision, photo-led, type-led; devtool, brand, ai, finance.

<!-- v:nav.announcement-bar/hero-pill -->
### 10. Hero pill

*Feeling: a small flag above the headline.*

Not a bar at all, but a pill above the H1. Stripe uses a 24px grey pill 24px above its headline, and Better Auth a 30px one. Hawl turns it into a status: a green dot and a line about its availability. New Material holds it in the nav. It has become the most copied detail on the web, and the empty version with a sparkle and a vague claim now reads as generated. Use it only for news with a date or a name.

**Seen on** New Material, Stripe Payments, Better Auth, Hawl Design, Penpot, 6 sites in all. **Suits** light-precision, gradient-light, dark-precision, soft-pastel; agency, finance, saas, health, devtool.

<!-- v:nav.announcement-bar/ticker-marquee -->
### 11. Ticker marquee

*Feeling: tape running out of a machine.*

A continuous loop. Huel runs a 56px near-black strip of mono caps offers with line icons, a faded right edge, and a round pause button. CockroachDB runs a violet tape with `---` separators. The FWA runs 8px pixel type at 20px tall as a broadcast ticker. Use it for ecommerce with several offers, or for a brand with a ticker voice. It must pause on hover, and stop under reduced motion, and a pause button is required by accessibility guidelines for anything that runs over five seconds.

**Seen on** Huel, Awwwards, CockroachDB, FWA, Shopify Supply, 6 sites in all. **Suits** bold-colour, expressive, warm-neutral, light-precision; ecommerce, devtool, other, editorial.

<!-- v:nav.announcement-bar/rotating-paged-strip -->
### 12. Rotating paged strip

*Feeling: a small stack of offers.*

Several offers in one slot. 1 Hotels uses a 40px forest strip with thin arrows at both ends. Reformation slides messages vertically, left aligned to its nav edge. Bonobos folds a location link and utilities into the same 46px line. Use it for retail and hospitality. Keep the arrows, because auto-rotation on its own hides every offer but one.

**Seen on** 1 Hotels, Reformation, Bonobos, Trasti, Marine Layer, 7 sites in all. **Suits** photo-led, light-precision, bold-colour; fashion, ecommerce, finance, hospitality, food-drink.

<!-- v:nav.announcement-bar/utility-strip -->
### 13. Utility strip

*Feeling: the front desk, folded into one line.*

A strip that also carries utilities. Snow Peak sets a 48px grey strip in three zones, with loyalty left, promo centre and region right. Make adds a 32px icon tile and a small outlined button, and recolours with the page. Revolut uses the slot for a region switch: a select with a flag and a 40px round arrow. Use it when utility links would otherwise crowd the main nav.

**Seen on** Revolut, Make, Pedestal, Patagonia, Snow Peak. **Suits** photo-led, gradient-light; ecommerce, saas, finance.

<!-- v:nav.announcement-bar/bottom-fixed-bar -->
### 14. Bottom fixed bar

*Feeling: a quiet offer that waits for you.*

Pinned to the bottom of the viewport. Kinfolk raises a 60px black bar after the first scroll, with a serif offer and an outlined Subscribe, which is a soft paywall with no modal. Hotjar uses a 56px bar to route existing users out of the funnel. Svelte moves its bar to the top on phones, so it never fights the bottom of the screen. Use it for subscriptions and migrations.

**Seen on** Kinfolk, Hotjar, p5.js, Svelte. **Suits** bold-colour, photo-led, render-3d, light-precision; education, editorial, devtool, saas.

<!-- v:nav.announcement-bar/status-line -->
### 15. Status line

*Feeling: a statement, not a promotion.*

Plain information in the site's own voice. Heart & Soil sets a line about taking inquiries at left, closed by a 1px lime rule, so it reads as a letterhead. Make Town's strip says the business has closed and replaces the nav altogether. A university library uses a gold alert bar with an info icon, which is correct for a service notice. Use it for availability, closures and real alerts. No arrow, no offer.

**Seen on** Heart & Soil, Athletics, Queen's Library, Make Town. **Suits** type-led, bold-colour, warm-neutral; local-business, education, agency.

### Mistakes that cheapen an announcement bar

- **A uniform dot grid.** My first halftone was a repeating radial gradient, with a hard inner edge. Real halftone dots change size. Without that, the texture reads as a rendering fault.
- **Colour nobody chose.** A random blue strip above a warm page looks like a plugin. Derive it from the brand.
- **9px caps on an 18px strip.** It looks like a template and fails contrast. Stay at 12px or more, and above 30px tall.
- **Too much chrome.** A pinned 60px strip over a 90px nav is 150px gone. Let one of them leave.
- **Two calls to action.** One sentence, one link.
- **Wrapping on phones.** Shorten or truncate. Five lines of notice is a failure.
- **A dismiss that forgets.** Closing it and seeing it again on the next page is an insult. Store the choice.
- **Stale news.** A launch from last year tells visitors nobody is minding the site. Remove it, or date it.
- **The strip colour as the CTA colour.** Your button stops being the loudest thing.
- **Emoji in place of an idea.** Fire and sparkles rarely survive a good palette.

## Mega menu

A mega menu must let someone who does not know your product find the right page in one look. It is the only place on the site where everything is laid out at once, so it doubles as a map of what the company thinks it is. Treat it as a designed page that happens to open from a trigger, not as a list with a box around it.

What separates great from cheap is hierarchy inside the panel. Great panels give one thing the most weight: the big list on Apple, the feature tile on Increase, the photographs on Cal.com. Everything else steps down from there, in type sizes the same as the page's own. They sit on a rail, usually keep one width as you move between triggers, and end cleanly. Cheap panels are a grid of identical icon rows at 12px, with a stock gradient promo bolted on, floating in a box that aligns with nothing.

Here is what a real panel holds, from the top:

1. **Trigger state.** A chip at 6 to 8 percent of ink behind the label, and a chevron flipped 180 degrees over 200ms. Linear, Notion and Cal.com use a chip. Customer.io and Marine Layer use an underline. Baseten fades the sibling triggers to about 30 percent.
2. **The gap.** Zero for page-wide bands, 6 to 12px for most floating panels. Linear's panel starts 7px above the bar's bottom edge and Claude's 14px above it, so both overlap the hairline and read as growing out of the bar.
3. **An optional header row.** A small grey label at left and a See all link at right, as on Notion and Loops.
4. **Columns.** A 12 to 14px grey or mono label over 14 to 20px links. Keep the label quieter than the links, always.
5. **Entries.** There are five formats, and a good panel uses one or two: plain link, title and grey line, icon with title and line, image card, logo tile.
6. **One feature slot.** Far right, one card, or a tinted rail. Something current, such as a release or a guide, and never a generic ad.
7. **A footer strip.** 46 to 84px, with a hairline or a tint above it. One news item at left and one link at right, or small buttons. Only 12 percent of menus have one, and they include Linear, Cal.com, Claude, Notion, Stripe and Cloudflare.
8. **Page treatment.** Most pages stay unchanged. 29 percent dim and 14 percent blur. Use a blur or dim with a page-wide band, since otherwise it blends with the content below.

Text in a real panel is the same size as the page's: titles 14 to 15px, descriptions 12 to 14px, large links up to 20 or 24px. Nothing is 9px.

These are real widths, measured from full-size frames. Notice that every panel lines up with something.

| Site | Width | Lines up with | Gap from bar | Radius |
|---|---|---|---|---|
| White Cube | 200 | The trigger | 14 | 0 |
| Tana | 240 | The trigger | 8 | 12 |
| Cursor | 290 | The trigger | 10 | 4 |
| Speakeasy | 560 | The trigger | 8 | Small |
| Zed | 600 | The trigger | 6 | 4 |
| Increase | 717 | The trigger, less the panel's padding | -4 | 12 |
| Inngest | 808 | The trigger | 8 | 0 |
| Notion | 826 | Page centre | 12 | 12 |
| Linear | 860 | Right edge of the actions | -7 | 14 |
| Claude | 900 | The first trigger, less the panel's padding | -14 | 10 |
| Cal.com | 953 | Left edge of the bar | 8 | 20 |
| Loops | 1000 | The viewport's right edge, 20px in | 8 | 20 |
| Stripe | 1262 | The bar itself | Bar is inside | 6 |
| Apple, Vercel | Full bleed | The logo's left edge | 0 | 0 |

For motion, fade and rise 4 to 8px over 100 to 200ms. Under 200ms matters, because a menu is a tool. Once one panel is open, the next trigger should swap immediately, with no delay. Fix the panel's width, and let height follow the content. Move hover into rows too: a 4 percent tint at radius 8 tells the cursor what it is about to click. Cap height at `calc(100dvh - 88px)` and let long panels scroll inside.

Code below relies on the [derived tokens](#derived-tokens) and the [menu script](#behaviour-every-nav-needs).

<!-- v:nav.mega-menu/flush-text-columns -->
### 1. Flush text columns

*Feeling: an index in the page's own voice.*

A page-wide band with no box at all, the same colour as the bar, as though the bar simply grew taller. Plain text columns start at the logo's left edge. This is the most refined menu in the corpus, and nine gold sites use it, because it takes nothing away from the type. Use it for developer tools and strong type systems. Avoid it where names do not explain themselves, because it has no descriptions.

Vercel sets columns at 266px steps from x=24, a 14px grey label, and 20px links on a 32px pitch. Note that size. Analysts recorded these as 13px, and the large links are the whole effect. Expo uses mono caps labels and 14px links. Warp runs five columns. Framer adds one thumbnail tile at the far right. Page behind fades under a veil of the bar's colour, usually with a light blur.

**Seen on** Devin, Warp Pricing, Vercel AI SDK, Framer, Meta AI, 16 sites in all. **Suits** light-precision, dark-precision, bold-colour, photo-led; devtool, ai, education, ecommerce, brand.

```css
.nav{position:sticky;top:0;z-index:50;background:var(--surface)}
.panel{position:absolute;inset:100% 0 auto;background:var(--surface);box-shadow:inset 0 -1px 0 var(--line);
  display:grid;grid-template-columns:repeat(3,266px);padding:6px var(--rail) 24px;
  visibility:hidden;opacity:0;translate:0 -4px;transition:opacity .16s ease-out,translate .16s ease-out,visibility .16s}
[data-open=products] .panel{visibility:visible;opacity:1;translate:0 0}
.panel h3{font:400 14px/20px var(--font-text);color:var(--ink-2);margin-bottom:6px}
.panel a{display:block;font-size:20px;line-height:32px;letter-spacing:-.01em;transition:color .12s}
.panel a:hover{color:var(--ink-2)}
.scrim{position:fixed;inset:0;z-index:40;background:var(--veil);opacity:0;pointer-events:none;transition:opacity .2s}
[data-open=products]~.scrim{opacity:1}
```

<!-- v:nav.mega-menu/lead-list-sheet -->
### 2. Lead list sheet

*Feeling: a page of a catalogue, unfolding from the bar.*

A full-width sheet grows out of a thin bar, with one large list and two small columns, while the page behind goes out of focus. The hierarchy does everything. Apple sets the lead list at 24/600 on a 38px pitch and the small columns at 12/600 on 24px, with no icons, boxes or images, and the eye goes straight to the big words. Use it for product families and consumer brands. Avoid it when you have no clear first tier.

Set 480 to 530px tall from a 44px bar, on the 980 rail. Reveal with a clip from the top over about 280ms. Blur the page 20px with a dark veil at 40 percent. Waymo uses a simpler white sheet, a large title at left, three links and a cut-out car, with the page dimmed to navy.

**Seen on** Apple, Apple Intelligence, Apple MacBook Pro, Apple iPhone, Waymo. **Suits** light-precision, dark-precision, photo-led, bold-colour; brand, ai.

```css
.sheet{position:absolute;inset:0 0 auto;z-index:-1;height:528px;padding-top:80px;
  background:color-mix(in srgb,var(--ink) 8%,var(--bg));clip-path:inset(0 0 100% 0);transition:clip-path .28s cubic-bezier(.4,0,.2,1)}
[data-open=store] .sheet{clip-path:inset(0)}
.in{max-width:980px;margin:auto;display:flex;gap:88px;opacity:0;translate:0 -6px;transition:opacity .2s .06s,translate .2s .06s}
[data-open=store] .in{opacity:1;translate:0 0}
.in h3{font:400 12px/20px var(--font-text);color:var(--ink-2);margin-bottom:10px}
.lead a{display:block;font:600 24px/38px var(--font-display);letter-spacing:-.01em}
.sub a{display:block;font-size:12px;font-weight:600;line-height:24px}
.veil{position:fixed;inset:0;z-index:40;background:rgba(0,0,0,.4);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);
  opacity:0;pointer-events:none;transition:opacity .28s}
[data-open=store]~.veil{opacity:1}
```

<!-- v:nav.mega-menu/ruled-column-panel -->
### 3. Ruled column panel

*Feeling: a tidy paper form.*

A floating panel of plain link columns divided by vertical hairlines. Claude's panel is 900px wide, starting at the first trigger, with 12px grey labels, 15px links on a 39px pitch, and a tinted footer strip holding a link and two small 30px outlined buttons. Factory's is 530px with mono caps labels, and a 4px radius. Use it for many plain names that sort into groups. It is the honest choice when you have no good icons, and no icons is far better than bad ones.

**Seen on** Claude Pricing, Factory, Claude, Notion About, White Label IQ. **Suits** warm-neutral, light-precision, illustrated; ai, agency, other.

<!-- v:nav.mega-menu/described-link-panel -->
### 4. Described link panel

*Feeling: a good table of contents.*

Titles over grey lines, with no icons. Because every entry explains itself, the panel can hold more than you would expect. Cloudflare Workers runs six columns across nearly the full page. Sierra sets a 960px panel with a header row, a pill and four small column labels. Public fits four described columns beside a large dark promo. Loops uses two columns at 280px each, with a 12px title over a 10px line in a soft panel. Use it when product names need a sentence. Avoid sentences that repeat the title.

Set 14 to 15px titles over 12 to 14px grey lines, on a 50 to 60px pitch. Keep each line under about 40 characters, so nothing wraps to three lines.

**Seen on** Cloudflare Workers, Loops, web.dev, Sierra, GoCardless, 6 sites in all. **Suits** light-precision, photo-led, warm-neutral; devtool, ai, finance, saas.

<!-- v:nav.mega-menu/icon-rows-panel -->
### 5. Icon rows panel

*Feeling: a well-organised product catalogue.*

The most common product menu: rows of icon, title and one line. It works when the icons are good and fails when they are not. AuthKit uses tinted app-icon tiles in three columns across a 900px panel, each one a small drawing. Zed uses 14px line icons under mono caps labels at about 600px. Brex uses 58px bordered tiles. Docker tints the hovered row pale blue. Use it for software with many named products. Avoid it for fewer than four entries, where it looks like a template.

Set 28 to 32px tiles, 14px title, 12 to 13px grey line, a 50 to 60px pitch. Icons must differ from each other and share one stroke weight. One colour per product is fine if the product already owns that colour.

**Seen on** Zed Blog, AuthKit, Sourcegraph, Spline, Cloudflare Workers, 16 sites in all. **Suits** light-precision, dark-precision, mono-technical, gradient-light, bold-colour; devtool, saas, finance, ai, editorial.

<!-- v:nav.mega-menu/list-plus-feature -->
### 6. List plus feature

*Feeling: a menu with one thing worth noticing.*

Rows on the left and one or two feature tiles on the right. This is the most-used strong pattern, because the feature gives the panel a focal point and a reason to change over time. Increase sets six rows on a 60px pitch beside two tiles, each with a very faint chart or a card drawn at about 15 percent ink. Inngest pairs five rows with a loud blue graphic in a square black panel. Public uses a large dark promo that fills the right side. Grafana leads on the left instead. Use it for products with one current story. Avoid a stock gradient card. A real screen, a real release or a real number works, and nothing else does.

Set a 700 to 1000px panel with 8px padding, tiles 300 to 400px wide at radius 8.

**Seen on** Inngest, Increase, Public, ElevenLabs Pricing, Resend, 24 sites in all. **Suits** bold-colour, light-precision, dark-precision, gradient-light, warm-neutral; devtool, saas, ai, finance, health.

```css
.panel{position:absolute;top:calc(100% - 4px);left:24px;width:717px;padding:8px;display:grid;grid-template-columns:1fr 309px;gap:8px;
  border-radius:12px;background:var(--bg);box-shadow:var(--menu-shadow);
  visibility:hidden;opacity:0;translate:0 -4px;transition:opacity .16s ease-out,translate .16s ease-out,visibility .16s}
[data-open=products] .panel{visibility:visible;opacity:1;translate:0 0}
.row{display:grid;grid-template-columns:30px 1fr;gap:0 12px;align-items:center;height:60px;padding:0 12px;border-radius:8px;
  transition:background .12s}
.row:hover{background:var(--well)}
.row i{grid-row:span 2;width:30px;height:30px;border-radius:6px;background:var(--well);display:grid;place-items:center}
.row i svg{width:14px;height:14px}
.row strong{align-self:end;font-size:14px;font-weight:500;line-height:18px}
.row span{align-self:start;font-size:12px;line-height:18px;color:var(--ink-2)}
.side{display:grid;gap:8px}
.tile{position:relative;padding:16px;border-radius:8px;background:var(--well);overflow:hidden}
.tile strong{display:block;font-size:14px;font-weight:500;line-height:20px;max-width:6em}
.tile span{display:block;margin-top:2px;font-size:12px;line-height:16px;color:var(--ink-2);max-width:8em}
.tile svg{position:absolute;right:12px;bottom:12px;width:176px;height:112px;color:var(--ink-3);opacity:.6}
```

<!-- v:nav.mega-menu/visual-card-row -->
### 7. Visual card row

*Feeling: a shelf of things you can pick up.*

The entries are pictures. Cal.com sets four 200x133 photographs in a 953px panel at radius 20, then a footer strip. Notion sets three 254px tinted tiles with its own drawings. Baseten runs five equal columns with coloured isometric art. Rivian shows three tall cards with cars, prices and buttons, beside a list. Use it when you have strong images, and when your products are few and visual. Do not attempt it without them. My version with gradient stand-ins matched Cal.com's layout to the pixel and still looked like a wireframe, because the photographs are the design. If you have no images, use the described link panel.

**Seen on** Notion About, Baseten, Cal.com, Dub Pricing, Ultrahuman, 8 sites in all. **Suits** light-precision, dark-precision, photo-led; saas, brand, other, ai, health.

```css
.panel{position:absolute;top:calc(100% + 8px);left:0;width:953px;border-radius:20px;background:var(--bg);overflow:hidden;
  box-shadow:var(--menu-shadow)}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;padding:28px}
.card img{display:block;width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:8px;
  box-shadow:0 0 0 1px color-mix(in srgb,#000 8%,transparent)}
.card strong{display:block;margin-top:14px;font-size:15px;font-weight:500;line-height:22px}
.card span{display:block;font-size:13px;line-height:19px;color:var(--ink-2);text-wrap:pretty}
.foot{display:flex;justify-content:space-between;align-items:center;height:49px;padding:0 28px;
  box-shadow:inset 0 1px 0 var(--line);font-size:14px;color:var(--ink-2)}
.foot b{font-weight:500;color:var(--ink);margin-right:12px}
```

<!-- v:nav.mega-menu/retail-columns-photos -->
### 8. Retail columns with photos

*Feeling: a shop window with the aisles listed beside it.*

A full-width drawer with link columns and a few lifestyle photographs. Marine Layer sets five columns with 12px mono caps headers, 16px links on a 33px pitch, and two 210x263 portraits with captions, and it blurs and dims the page behind. Its first column holds edits such as new arrivals, set bolder and with no header. Velora sets serif column heads with a large photo card. Fairphone uses 32px product thumbnails. Use it for fashion, home and lifestyle retail. Avoid uniform square product shots, since lifestyle images sell the mood.

Set 400 to 520px tall. Keep column text on the same left edge as the logo.

**Seen on** Marine Layer, Lyra, Velora, Fairphone, Bellroy, 9 sites in all. **Suits** photo-led, bold-colour; ecommerce, health, fashion.

<!-- v:nav.mega-menu/master-detail-panel -->
### 9. Master detail panel

*Feeling: browsing, not reading.*

A rail of categories on the left swaps what is on the right. Cal.com's use-case panel has a 200px rail of seven 36px rows with a grey pill on the active one, a list of seven titled entries on a 62px pitch, and a tall portrait. Peloton uses three large rail items. Leica adds a tab row across the top and a four-up image grid. Use it when a menu has too many entries for one view, and they fall into parallel categories. Avoid it for fewer than four categories, where a plain grid is one less gesture.

Keep panel width equal to its sibling panels, so nothing jumps between triggers. Switch on hover with no delay, and move focus into the detail with the keyboard.

**Seen on** Cal.com, Peloton, Leica, Boston Dynamics, Nurx. **Suits** photo-led, dark-precision, light-precision; saas, brand, health.

```css
.md{display:grid;grid-template-columns:216px 1fr 240px;gap:12px;padding:28px 28px 28px 16px}
.rail button{display:block;width:200px;height:36px;padding:0 12px;margin-bottom:2px;border-radius:8px;text-align:left;
  font-size:15px;color:var(--ink-2);transition:background .12s}
.rail button[aria-selected=true]{background:var(--well);color:var(--ink)}
.list a{display:block;padding:6px 12px 14px}
.list strong{display:block;font-size:15px;font-weight:500;line-height:22px}
.list span{font-size:13px;line-height:19px;color:var(--ink-2)}
.md img{width:100%;height:100%;min-height:420px;object-fit:cover;border-radius:12px}
```

<!-- v:nav.mega-menu/bordered-tile-grid -->
### 10. Bordered tile grid

*Feeling: a control panel of equal choices.*

Square bordered cells in a grid. Customer.io sets a dark lead tile 280px wide holding an overview with a pattern and two more rows, then six 480x76 cells with 8px gaps, each a title, a grey line and a small glyph at right. Speakeasy uses a 2x2 grid of hairline cells with mono tags. Use it when the brand already has hard edges and rules. Avoid it beside soft rounded cards.

**Seen on** Customer.io, Speakeasy, Trasti. **Suits** light-precision; saas, devtool, finance.

<!-- v:nav.mega-menu/tone-zoned-panel -->
### 11. Tone zoned panel

*Feeling: precise and layered, something machined.*

The panel is divided into zones by tone rather than lines. Linear holds three columns in a nested well, one tone step off the outer shell, with a footer outside the well, so the news sits on a separate level. Loops builds a 1000px tray of tinted wells at radius 16 with 8px gaps. Brex, Render and GitHub tint a right-hand rail. Use it for dark product sites and anything with depth to its surface system. It needs real restraint in the tone steps: +7 to +17 levels on dark, 2 to 5 percent on light.

Give rows generous height. My first version used 18px between entries and looked like a cramped copy of Linear. Theirs have about 92px between title baselines, and opening that up fixed it.

**Seen on** Linear, Loops, Render, Brex, Liquid AI, 6 sites in all. **Suits** light-precision, dark-precision, warm-neutral; saas, devtool, finance, ai.

```css
.panel{position:absolute;top:calc(100% - 7px);right:calc(var(--rail) - 1px);width:860px;padding:8px;border-radius:14px;
  background:color-mix(in srgb,var(--ink) 2%,var(--bg));box-shadow:var(--menu-shadow);
  visibility:hidden;opacity:0;scale:.985;transform-origin:50% 0;transition:opacity .14s ease-out,scale .14s ease-out,visibility .14s}
[data-open=product] .panel{visibility:visible;opacity:1;scale:1}
.well{display:grid;grid-template-columns:repeat(3,1fr);padding:10px 0;border-radius:8px;
  background:color-mix(in srgb,var(--ink) 6%,var(--bg));box-shadow:0 0 0 1px var(--line)}
.col{padding:14px 28px;display:grid;gap:30px;align-content:start}
.col+.col{border-left:1px solid var(--line)}
.col h3{font:500 14px/20px var(--font-text);margin-bottom:4px}
.col p{font-size:14px;line-height:20px;color:var(--ink-2)}
.foot{display:flex;justify-content:space-between;padding:16px 28px 8px;font-size:14px;color:var(--ink-2)}
.foot b{font-weight:500;color:var(--ink);margin-right:8px}
```

<!-- v:nav.mega-menu/compact-dropdown -->
### 12. Compact dropdown

*Feeling: a small, honest list.*

Not every menu is mega. For four to eight items, a small list is correct, and on many strong sites most triggers open one of these. White Cube sets a 200px list with a soft diffuse shadow and no radius. Tana sets a 240px card with a grey heading and 16px icons. Cursor sets two plain columns in 290px. Daily uses mono caps with square bullets and rotates the slash in its trigger. Use it wherever the content is short, even if another trigger on the same bar opens a giant panel. Width follows content, and that variation between menus is normal.

Left-align to the trigger, 6 to 10px under it, radius 4 to 12, 14px rows on a 30 to 34px pitch. Keep it short, and never stretch it to look like something bigger.

**Seen on** Anthropic News, Tana, Cursor Pricing, White Cube, Loom, 18 sites in all. **Suits** light-precision, warm-neutral, bold-colour, photo-led, mono-technical; ai, devtool, saas, culture, health.

```css
.drop{position:absolute;top:calc(100% + 8px);left:0;min-width:200px;padding:6px;border-radius:10px;background:var(--bg);
  box-shadow:var(--menu-shadow)}
.drop a{display:block;padding:7px 10px;border-radius:6px;font-size:14px;line-height:20px;transition:background .12s}
.drop a:hover{background:var(--well)}
```

<!-- v:nav.mega-menu/bar-becomes-panel -->
### 13. Bar becomes panel

*Feeling: one object that opens, not two objects that meet.*

The bar is inside the panel. On Stripe the white panel, 1262x780 at radius 6, contains the nav row at its top, so there is no seam between trigger and content, and the page behind blurs. Columns have a heading with a hairline under it, then accent links over grey lines, with a tinted More rail and a footer row. Greylock floods the whole bar into a tan sheet. Use it for dense product companies, and when the page is colourful enough that a floating panel would feel like a sticker. It handles more entries than any other pattern here, since Stripe shows over 40.

**Seen on** Stripe, Greylock. **Suits** gradient-light, light-precision; finance.

```css
.nav{position:fixed;z-index:50;top:6px;left:89px;right:89px;border-radius:6px;transition:background-color .15s,box-shadow .2s}
[data-open=products].nav{background:var(--bg);box-shadow:var(--menu-shadow)}
.bar{height:64px;padding:0 16px;display:flex;align-items:center;gap:28px}
.body{display:none;grid-template-columns:1fr 258px;box-shadow:inset 0 1px 0 var(--line)}
[data-open=products] .body{display:grid}
.cols{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;padding:32px}
.cols h3{font:400 14px/20px var(--font-text);padding-bottom:10px;margin-bottom:12px;box-shadow:inset 0 -1px 0 var(--line)}
.cols strong{display:block;font-size:14px;font-weight:500;line-height:21px;color:var(--accent)}
.cols span{display:block;font-size:14px;line-height:21px;color:var(--ink-2)}
.more{background:var(--surface);padding:32px;box-shadow:inset 1px 0 0 var(--line)}
```

<!-- v:nav.mega-menu/content-popover -->
### 14. Content popover

*Feeling: the menu has news for you.*

The menu shows a living thing rather than a list of pages. Frontend Masters opens a small dark card for its next workshop, with an avatar, a date, an RSVP count and a Join button. Trigger.dev opens its changelog as thumbnails with dates. Supabase gives blog titles a wide column of their own. FORUM Cases opens a product with its price and a Shop button, tinted per product. Use it when fresh content is more useful than navigation. Keep it current, because a stale event in a nav is worse than none.

**Seen on** Trigger.dev, Supabase, FORUM Cases, Frontend Masters. **Suits** dark-precision, light-precision, photo-led; devtool, education, ecommerce.

<!-- v:nav.mega-menu/bare-reveal -->
### 15. Bare reveal

*Feeling: the list simply appears.*

No panel. SpaceX reveals a plain uppercase list directly under its trigger on the hero. Structure Engineering stacks black chips, each fading and rising 8px. Kleiner Perkins swaps the whole page for a field of company names, with the hovered one white. Use it over calm images, with few items, on brands where a box would feel corporate. Text straight on an image needs contrast at every point of it, so check.

**Seen on** Structure Consulting Engineers, SpaceX, Kleiner Perkins, Le Saint Georges. **Suits** photo-led, dark-precision; brand, finance, architecture, hospitality.

### Mistakes that cheapen a mega menu

- **Tiny type.** A panel seen in a thumbnail looks like 8px. It is not. Set titles at 14 to 15px and let the panel be big.
- **A narrow box.** Good panels are 700 to 1000px wide. A 300px card with twelve entries is a list that wants to be a panel.
- **Square placeholder icons.** My first panel used one small square for all six rows, and it read as a list of unticked checkboxes. Increase has six different glyphs, and that is half of why it looks finished. Use real icons, or none.
- **Gradients posing as photographs.** Mine matched Cal.com to the pixel and still looked like a mock. Use real images, or choose a text variant.
- **A panel aligned to nothing.** Pick the trigger, the bar's edge, the actions' edge or the page centre. A panel that hangs at an arbitrary x shows at once.
- **Width that jumps between triggers.** On a large panel, keep width fixed and let the content change. Short dropdowns are the exception.
- **Black shadow on a warm page.** My 55 percent black looked dirty on a cream palette. Mix light-theme shadows from ink, and keep the heavy black for dark themes.
- **A panel that closes as you reach it.** Add the grace period.
- **Rows too tight.** Dense rows look like a spreadsheet of products. Use 50 to 60px, or more.
- **No hover on rows.** Without a row hover, the panel feels like an image.
- **A promo with nothing in it.** A gradient box with a generic claim is the fastest way to look generated.
- **Everything the same weight.** If no entry is larger or louder than the others, nothing can be scanned.
- **Slow entrances.** 400ms on a menu makes the whole site feel heavy. Stay under 200ms.
- **Forgetting height.** On a laptop, a tall panel can run off the screen. Cap and scroll.

## Mobile menu

A phone menu must get a thumb to the right place in one or two taps, and it must not lose the action. It is not a small desktop menu. It is a full screen you get to design, seen by more visitors than any other screen on many sites, and yet it is usually the least considered page in the build.

What separates great from cheap is whether anyone designed it at all. Great phone menus treat the screen as a composition: type at a size the bar never reaches, rows with air, and the action pinned where the thumb already is. Cheap ones are a default accordion: 15px rows, tight hairlines, a chevron on everything, and the CTA buried under the fold. Measured rows on strong sites are much bigger than you would guess. Claude's pitch is 76px, Customer.io's 77, Stripe's 52, Cal.com's 48, and A24's type alone is 64px.

The menu keeps a consistent structure, from top to bottom:

1. **The bar stays.** Logo stays put, and the burger turns into a close mark in the same place. Hinge Health, Notion and Asana keep their CTA in the bar as well.
2. **Primary routes.** Four to six rows or words.
3. **Secondary links.** Smaller, or under a rule: help, stores, language.
4. **Actions.** Pinned at the base, in the thumb's reach. Either a 50/50 pair, or stacked, primary last.

**How menus enter.** We measured 191 real openings. 41 percent settled within 120ms, 32 percent by 320ms, and 26 percent were still moving after that. Instant is fine and common. Slow is fine when it is a statement. The dead zone is a generic 500ms slide.

| Entry | How it moves | Time | Reference |
|---|---|---|---|
| Instant | Appears in one step, only the icon animates | Under 120ms | Linear, Supabase, Resend |
| Crossfade | Sheet fades in, page ghosts through for a moment | 120 to 320ms | Stripe, Cal.com, Otter |
| Stagger | Sheet in, then rows fade top-down at 40 to 50ms each | Settled by 320 to 900ms | Claude, Hinge Health, Factory, Greylock |
| Slide | Sheet from the right over a scrim, a strip of page still showing | 200 to 320ms | Polestar, Brex, Betterment |
| Drop | Card or sheet falls from under the bar, page blurs | 120 to 320ms | Asana, Wispr Flow, Lindy |
| Wipe | Colour bands or a curved clip sweep the screen | 320 to 900ms | Joby, Clevr, JOBS, Studio Unlmtd |

The stagger must not block the thumb. Keep the last row in place by about 350ms, and make rows tappable the moment they start appearing. Make the close mark thin, with 1 to 1.5px strokes at 18 to 20px, in a 44px target. Keep the page from scrolling behind the sheet, and never make the menu scroll sideways.

Code below relies on the [derived tokens](#derived-tokens).

<!-- v:nav.mobile-menu/accordion-sheet-pinned-cta -->
### 1. Accordion sheet with pinned CTA

*Feeling: everything in its place, and the next step under your thumb.*

The standard for products, and it earns that. A full-height sheet with rows, a disclosure on groups, plain rows for leaf pages, and actions pinned at the base. Claude sets five 18px rows on a 76px pitch with hairlines and thin plus marks, and rows fade in top-down. Stripe sets 18/600 on 52px with dotted rules, accent chevrons, and a small bordered card of help links. Cal.com drops the hairlines, and pins a tinted tray with three stacked buttons. Use it for any product with grouped pages. Avoid it with under four rows, because a sheet of accordions then has nothing to fold.

Use a plus for expanding in place and a chevron pointing right for a drill-down, and do not mix the two. Animate height through `grid-template-rows` from `0fr` to `1fr`, which needs no measuring. Rotate the plus 45 degrees.

**Seen on** Claude, Claude Pricing, Stripe, Cal.com, ElevenLabs Pricing, 32 sites in all. **Suits** light-precision, photo-led, warm-neutral, gradient-light, dark-precision; ai, saas, devtool, finance, brand.

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

<!-- v:nav.mobile-menu/plain-row-sheet -->
### 2. Plain row sheet

*Feeling: fast and unfussy.*

Rows and nothing else, with no CTA inside. Dub sets rows at 48px. Waymo sets six 20px rows and lets its mark sit below them. It is honest and quick, and it is correct when a CTA stays in the bar. It rarely scores high, because it is often the undesigned default. Raise it with larger type, or by putting something deliberate at the base.

**Seen on** Almeida Theatre, Theatre Memory, Speakeasy, Kleiner Perkins, Waymo, 19 sites in all. **Suits** bold-colour, light-precision, photo-led, type-led, dark-precision; culture, health, ai, devtool, brand.

<!-- v:nav.mobile-menu/flat-grouped-sheet -->
### 3. Flat grouped sheet

*Feeling: the whole site, at a glance.*

No accordions. Everything is visible at once under small labels, and the sheet simply scrolls. Linear sets 14px grey labels over 24/500 links on a 44px pitch, appearing with almost no motion. Because nothing is hidden, one tap gets anywhere. Spline does the same with mono caps eyebrows, and Acne Studios with caps rows and hairlines. Use it for 10 to 15 links, particularly on dark tools. It beats accordions at that size, because a tap saved on every visit is worth more than a tidy first screen.

**Seen on** Linear, Acne Studios, Spline, Hopper. **Suits** dark-precision, photo-led; saas, fashion, other.

```css
.sheet{position:fixed;inset:64px 0 0;z-index:50;padding:28px 24px 40px;background:var(--bg);overflow:auto;
  visibility:hidden;opacity:0;transition:opacity .12s,visibility .12s}
.open .sheet{visibility:visible;opacity:1}
.sheet h3{font:400 14px/20px var(--font-text);color:var(--ink-2);margin:28px 0 10px}
.sheet h3:first-child{margin-top:0}
.sheet a{display:block;font-size:24px;line-height:44px;letter-spacing:-.015em;font-weight:500}
```

<!-- v:nav.mobile-menu/cta-first-sheet -->
### 4. CTA first sheet

*Feeling: straight to the point.*

The actions come before the links. Customer.io puts two 48px pills directly under the logo, then rows on a 77px pitch. Resend uses a full-width button and a centred Log in, then rows with arrows. Temporal and edX do the same. Use it when most phone visitors came to sign up. Avoid it for browsers, who need to orient first. Customer.io's sheet also leaves a 33px strip of page showing at left, which proves it is a layer.

**Seen on** Customer.io, Resend, Sourcegraph, Temporal, edX. **Suits** dark-precision, light-precision, mono-technical, bold-colour; devtool, saas, education.

<!-- v:nav.mobile-menu/display-type-takeover -->
### 5. Display type takeover

*Feeling: the menu is a poster.*

The links are the headline. A24 sets six words at 64px with very tight tracking on a 66px pitch, and a hairline and two lines of small links at the base. mymind sets 48px serif words with a coloured dot beside each. Greylock and Cursor run 40 to 52px. Use it for culture, fashion, agencies and any brand with a strong typeface and few links. It is a free page of brand expression, and this is where your display type gets to perform. It fails with long labels, so keep six short words or fewer.

Reveal it fast. Set `clip-path:inset(0 0 100% 0)` to `inset(0)` over about 340ms on a strong ease. On hover devices, dim the other links to 40 percent.

**Seen on** mymind, Fidèle, Greylock, Studio Dado, A24, 12 sites in all. **Suits** type-led, photo-led, bold-colour, gradient-light, light-precision; culture, architecture, agency, saas, finance.

```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;padding:72px 18px 22px;background:var(--bg);overflow:auto;
  visibility:hidden;clip-path:inset(0 0 100% 0);transition:clip-path .34s cubic-bezier(.76,0,.24,1),visibility .34s}
.open .sheet{visibility:visible;clip-path:inset(0)}
.big a{display:block;font:500 64px/66px var(--font-display);letter-spacing:-.045em;transition:opacity .15s}
.big:hover a{opacity:.4}.big a:hover{opacity:1}
.foot{margin-top:auto}
.foot div{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0;border-top:1px solid var(--ink)}
.foot a{font:400 22px/1 var(--font-display);letter-spacing:-.02em}
```

<!-- v:nav.mobile-menu/colour-room-takeover -->
### 6. Colour room takeover

*Feeling: you walked through a door into the brand.*

The menu is a flat room of brand colour. Lightspeed uses blush pink with 44px type and 01 superscripts, the page blurring behind as the sheet arrives over about 900ms. Joby uses a saturated blue reached through stacked bands of peach, orange and navy. Locomotive uses electric blue and serif type at the bottom left. Wildbran uses terracotta. Use it for brands with a real colour, on sites where the rest of the page is restrained. It is one of the cheapest ways to look expensive. Check contrast, and use the colour only here.

**Seen on** Joby, Lightspeed, Locomotive, Wildbran, Julia Loyd Mohr, 9 sites in all. **Suits** warm-neutral, photo-led, type-led, dark-precision; food-drink, other, portfolio, brand, agency.

<!-- v:nav.mobile-menu/indexed-takeover -->
### 7. Indexed takeover

*Feeling: a contents page.*

Numbered rows. Studio Unlmtd sets four heavy caps words at about 56px on a 97px pitch, with a tiny 01 index, a micro subtitle under each and hairlines, then local time and FR / EN at the base. Hotel Aurelia sets 01 to 05 beside serif caps, with language and season toggles and a full-width reservation button. Sweetgreen uses superscript numbers. Use it for agencies, hotels and anything that wants a printed feel. Number things only if the order means something, or if the rows are few enough for the numerals to read as design.

**Seen on** Villa Aurelia, STUDIO UNLMTD, Sweetgreen, Michelle Kaye. **Suits** warm-neutral, type-led, photo-led; hospitality, agency, food-drink, portfolio.

<!-- v:nav.mobile-menu/curtain-reveal-list -->
### 8. Curtain reveal list

*Feeling: a curtain drawn back.*

A curved edge sweeps down the screen, and the list fades in behind it. Clevr uses a cream sheet with a curved base, then 38px serif rows with circled arrows on an 80px pitch and one full-width button. JOBS uses a dark sheet, 44px serif links, a small red label and a red CTA. Use it for consumer and cultural brands with a warm voice. Build it with `clip-path: ellipse()` animating from above the screen, and swap to a plain fade under reduced motion.

**Seen on** Clevr Blends, JOBS. **Suits** bold-colour, photo-led; food-drink, culture.

```css
.sheet{position:fixed;inset:0;z-index:50;background:var(--bg);clip-path:ellipse(120% 0 at 50% 0);
  transition:clip-path .42s cubic-bezier(.76,0,.24,1)}
.open .sheet{clip-path:ellipse(160% 130% at 50% 0)}
@media(prefers-reduced-motion:reduce){.sheet{clip-path:none;opacity:0;transition:opacity .15s}.open .sheet{opacity:1}}
```

<!-- v:nav.mobile-menu/inset-card-dropdown -->
### 9. Inset card dropdown

*Feeling: a small card, so you keep your place.*

The menu is a card under the bar with the page still visible, blurred or dimmed behind. Asana insets 8px at radius 16 with rows at 16/600 on a 60px pitch, three small utility rows, then two 46px pills, on an 8px blur. Lindy and Wispr Flow use two stacked white cards, the header and the menu. Svix and Plumeform let a floating header grow straight into it. Use it for floating bars, and for menus short enough to fit. It feels lighter than a takeover. If the content is taller than the screen, cap the height and scroll inside the card.

**Seen on** ECI, Asana, Wispr Flow, Tana, New York Phil, 24 sites in all. **Suits** dark-precision, bold-colour, light-precision, gradient-light, warm-neutral; saas, devtool, education, ai, health.

```css
.veil{position:fixed;inset:64px 0 0;z-index:40;background:color-mix(in srgb,var(--ink) 12%,transparent);
  -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .2s}
.open .veil{opacity:1;pointer-events:auto}
.card{position:fixed;z-index:50;top:72px;left:8px;right:8px;max-height:calc(100dvh - 88px);overflow:auto;border-radius:16px;
  background:var(--bg);box-shadow:var(--menu-shadow);visibility:hidden;opacity:0;translate:0 -8px;scale:.98;transform-origin:50% 0;
  transition:opacity .16s ease-out,translate .2s cubic-bezier(.22,1,.36,1),scale .2s cubic-bezier(.22,1,.36,1),visibility .16s}
.open .card{visibility:visible;opacity:1;translate:0 0;scale:1}
.card .l a{height:60px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:600}
.card .c{padding:8px 20px 20px;display:grid;gap:20px}
.card .c a{height:46px;display:grid;place-items:center;border-radius:99px;font-size:15px;font-weight:500;background:var(--well)}
.card .c a.s{background:var(--ink);color:var(--bg)}
```

<!-- v:nav.mobile-menu/inline-push-down -->
### 10. Inline push down

*Feeling: the page just makes room.*

The menu opens in the document flow and pushes the hero down. Modern Treasury sets rows on a 57px pitch with chevrons and three small buttons at the end. Accel's three links sit under a hairline with the headline visible right below. It needs no scroll lock, no overlay and no focus trap, so it is the most robust option. Use it for short lists, and on simple sites. Long lists push the page out of sight, which defeats the point.

**Seen on** Modern Treasury, Render, Ripple Health, Accel, Apptronik, 8 sites in all. **Suits** light-precision, warm-neutral, bold-colour; devtool, finance, health, brand, agency.

<!-- v:nav.mobile-menu/side-drawer -->
### 11. Side drawer

*Feeling: a layer pulled in from the edge.*

A sheet slides from the side with a sliver of page still visible. Betterment comes in over a dimmed page to about 80 percent width. Brex places Close at the top left and pins three buttons. 1X runs full width with a hairline list and legal lines at the base. Use it when you want the sense of a layer. A sliver of 30 to 60px of page says you can go back. Drawers from the right match the burger's position, and drawers from the left suit apps. Keep the motion at 200 to 320ms ease-out, because a slide reads as slow sooner than a fade.

**Seen on** 1X, Polar, Peloton, web.dev, Strava, 22 sites in all. **Suits** light-precision, dark-precision, photo-led, mono-technical, illustrated; saas, devtool, finance, health, brand.

```css
.drawer{position:fixed;inset:0 0 0 auto;z-index:50;width:min(90vw,360px);display:flex;flex-direction:column;background:var(--bg);
  translate:100% 0;visibility:hidden;transition:translate .26s cubic-bezier(.22,1,.36,1),visibility .26s}
.open .drawer{translate:0 0;visibility:visible}
.scrim{position:fixed;inset:0;z-index:40;background:color-mix(in srgb,#000 40%,transparent);opacity:0;pointer-events:none;transition:opacity .26s}
.open .scrim{opacity:1;pointer-events:auto}
```

<!-- v:nav.mobile-menu/docs-tree-drawer -->
### 12. Docs tree drawer

*Feeling: the same map you had on desktop.*

Docs readers are in the middle of something. Keep the tree. Shopify Polaris slides in its sidebar from the left with no changes. React opens an inline panel with tab row and uppercase labels. Railway puts search first, then the tree. Use it for docs, and open it scrolled to the current page, or the reader loses their place.

**Seen on** Railway Docs, Material 3, React, Shopify Polaris, Perplexity, 6 sites in all. **Suits** light-precision, warm-neutral, soft-pastel, mono-technical; devtool, ai.

<!-- v:nav.mobile-menu/rich-entry-sheet -->
### 13. Rich entry sheet

*Feeling: a small landing page in the menu.*

Rows carry more than names. Notion stacks three 106px pastel cards with a title, a line and its own drawing, then Resources and Pricing in plain 22px type, then two buttons in a pinned tray. Supabase uses a select to switch sections, with icon tiles on an 80px pitch. Hugging Face groups chips under gradient-tinted headings. Rewiring America uses chip tabs on a yellow band with described rows below. Use it when names alone do not sell the product, and you have real drawings. Avoid card lists with generic icons.

**Seen on** Notion About, AuthKit, Notion Calendar, Astral, Anthropic News, 13 sites in all. **Suits** light-precision, photo-led, bold-colour, warm-neutral, dark-precision; devtool, brand, editorial, nonprofit, health.

<!-- v:nav.mobile-menu/pill-stack -->
### 14. Pill stack

*Feeling: big friendly buttons, one for each door.*

No panel at all. Hawl pops four full-width white pills, 80px tall with 16px gaps, one by one over the live page. Deadstock sets four outlined pills in a white sheet. Use it for small sites with four routes, and for brands with a playful voice. Stagger 60 to 100ms with a slight scale.

**Seen on** Hawl Design, Lil Italy, Deadstock Coffee. **Suits** warm-neutral, bold-colour, dark-precision; food-drink, agency.

<!-- v:nav.mobile-menu/search-first-sheet -->
### 15. Search first sheet

*Feeling: tell me what you want.*

Search leads the sheet. Apple opens a large field with Quick Links and arrows, fading the page out behind it. Bun drops a white panel with an input and mono tabs for docs, guides and reference, and dims the page to about half. Affirm opens a glass panel with store logos drifting behind it. Use it for stores, docs and large catalogues. Autofocus the field only when the user opened search on purpose, because the phone keyboard covers half of the screen.

**Seen on** Apple Vision Pro, Bun, Affirm, Apple MacBook Pro, Fred, 13 sites in all. **Suits** light-precision, photo-led, dark-precision, mono-technical; brand, devtool, ecommerce, culture, finance.

<!-- v:nav.mobile-menu/thumb-zone-sheet -->
### 16. Thumb zone sheet

*Feeling: everything within reach.*

Weight the menu toward the bottom of the screen. Polestar leaves the top half empty and sets its 30px list on a 40px pitch in the lower half, right where the thumb is, with chevrons far right. Zed's blog uses a rounded-top sheet with Turn Dark Mode On and Close Menu at the base. Silencio turns the menu into a row of 28px caps pills at the very bottom. Use it on brands confident enough to leave a screen half empty. On one-handed phones it is the most comfortable menu in the corpus.

**Seen on** Zed Blog, Polestar, SILENCIO. **Suits** type-led, mono-technical, photo-led; agency, editorial, brand.

```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;justify-content:flex-end;gap:24px;
  padding:64px 24px calc(24px + env(safe-area-inset-bottom));background:var(--bg)}
.sheet a{display:flex;justify-content:space-between;align-items:center;font:400 30px/40px var(--font-display);letter-spacing:-.02em}
```

### Mistakes that cheapen a mobile menu

- **Rows too tight.** My first accordion had a 68px pitch and looked dense next to Claude's 76. If the sheet has room, use it.
- **A heavy close mark.** At 1.5px and 20px mine looked clumsy beside Claude's thin mark. Use 1px strokes at 18px on a light sheet.
- **Square placeholders.** In a phone card these read as tick boxes. Use real line icons or none.
- **A stagger that blocks the thumb.** A row that fades in at 900ms has already been tapped. Finish by about 350ms unless the menu is a brand moment.
- **Two scroll positions.** If the page scrolls behind the sheet, the menu feels broken. Lock it.
- **Bottom buttons under the browser bar.** Use `100dvh` and the safe-area inset.
- **A close mark in a new place.** The burger and the X share one spot, so a second tap undoes the first.
- **Every row a chevron.** A row that goes straight to a page gets nothing, or an arrow.
- **Mixing plus, chevron-down and chevron-right.** One sheet, one meaning for each.
- **The desktop mega menu, stacked.** Forty small links in one column is a wall. Show the top level and go one step deeper at most.
- **A forgotten language or region control.** On multinational sites it belongs at the base of the menu.
- **The CTA under the fold.** Pin it.
- **Small text at phone distance.** Under 16px in a primary row looks like a mistake, and triggers zoom in inputs.

## Sidebar nav

A sidebar must keep the reader's place on a page or a site that is too long to hold in the head. There are two families here. On content sites, it is a thin rail or index that keeps you oriented. On brand sites, it replaces the top bar altogether, and a fixed vertical edge becomes the identity.

What separates great from cheap is that a great rail shows position, not just options. It tells you where you are with one quiet signal, and it stays out of the content's measure. Cheap ones are a sticky list with a loud active pill and no connection to the page's grid, or a fixed social icon strip nobody asked for.

Measured from frames: text rails are 222 to 300px wide, with 14 to 15px links on a 27 to 34px pitch, and they stick 24 to 64px below the top. Thin brand rails run 80 to 92px. One active signal is plenty: colour, weight, or a 2px tick. Cognition hangs a 2px tick outside the text column at x=53, so the text never shifts. Keep scroll spy honest, and update the active item as the reader moves through the page, not only on click.

Code below relies on the [derived tokens](#derived-tokens).

<!-- v:nav.sidebar-nav/sticky-index-rail -->
### 1. Sticky index rail

*Feeling: a long page that remembers where you are.*

A sticky column of links beside long content. Stripe's pricing rail is 222px wide with 15px links on a 27px pitch, 15/600 group heads and the active link in accent. Its list scrolls inside itself, masks out at the base above a hairline, and ends with one pinned link and a circled arrow. Cognition has no top bar at all: a 20px mark and a text list stuck at the left, with the active link in accent and a tick hung outside. Mirim indents the active item 14px and adds an arrow. Use it on pricing, long guides and case studies. Avoid it on pages with fewer than about five sections.

**Seen on** Stripe Pricing, Cognition, Zed Blog, Mirim. **Suits** mono-technical, light-precision, type-led, warm-neutral; editorial, finance, ai, agency.

```css
.wrap{max-width:1064px;margin:0 auto;padding:64px 0;display:grid;grid-template-columns:222px 1fr;gap:32px}
.rail{position:sticky;top:64px;align-self:start;height:calc(100vh - 88px);display:flex;flex-direction:column}
.list{flex:1;overflow:auto;scrollbar-width:none;padding-bottom:40px;
  -webkit-mask:linear-gradient(#000 calc(100% - 64px),transparent);mask:linear-gradient(#000 calc(100% - 64px),transparent)}
.list h4{font:600 15px/27px var(--font-text);margin-top:12px}.list h4:first-child{margin-top:0}
.list a{display:block;font-size:15px;line-height:27px;color:var(--ink-2);transition:color .12s}
.list a:hover{color:var(--ink)}.list a[aria-current]{color:var(--accent);font-weight:500}
.pin{display:flex;align-items:center;gap:8px;padding-top:12px;box-shadow:inset 0 1px 0 var(--line);font-size:15px;font-weight:500;color:var(--accent)}
```

```js
const ls=[...document.querySelectorAll('.list a')];
const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){ls.forEach(a=>a.removeAttribute('aria-current'));
  document.querySelector(`.list a[href="#${e.target.id}"]`)?.setAttribute('aria-current','true')}},{rootMargin:'-20% 0px -70% 0px'});
document.querySelectorAll('main section').forEach(s=>io.observe(s));
```

<!-- v:nav.sidebar-nav/thin-brand-rail -->
### 2. Thin brand rail

*Feeling: the margin of a printed page.*

A thin fixed rail bounded by a full-height line, holding almost nothing. Bakstad Construction sets a 92px rail with a tall stencil monogram at the top, the word Menu at the base, and one 1px line. The whole brand comes from that line. LEA Winery rotates small labels along an 80px rail. Material 3 is the app version: an 88px rail, 24px icons over 12px labels on 72px steps, and a 56x32 active pill. Use it for architects, makers and wine. Avoid it on content pages, where 90px of width has better uses.

On phones, turn the rail into a bottom bar rather than hiding it, so the brand keeps its edge.

**Seen on** Bakstad Construction, Material 3, LEA WINERY. **Suits** warm-neutral, photo-led, soft-pastel; food-drink, architecture, devtool.

```css
.rail{position:fixed;inset:0 auto 0 0;z-index:50;width:92px;padding:28px 0 32px;display:flex;flex-direction:column;align-items:center;
  justify-content:space-between;background:var(--bg);box-shadow:inset -1px 0 0 var(--ink)}
.page{margin-left:92px}
@media(max-width:700px){.rail{inset:auto 0 0 0;width:auto;height:64px;flex-direction:row;padding:0 16px;box-shadow:inset 0 1px 0 var(--ink)}
  .page{margin:0}}
```

<!-- v:nav.sidebar-nav/fixed-link-column -->
### 3. Fixed link column

*Feeling: a tool with its index always open.*

A full column replaces the top bar. p5.js sets a fixed 200px white column with a 1px black rule, a logo, six 20px links, and two outlined pills pinned to the base. three.js sets a 300px mono rail in coloured groups beside a wall of projects. xtrackr sets lowercase 16px links at 40 percent white with no chrome. Use it for libraries, tools and open-source projects, and for galleries that need the full height. Avoid it for marketing pages, because it makes them read as documentation.

**Seen on** p5.js, xtrackr, three.js, Overtime. **Suits** mono-technical, bold-colour, dark-precision; agency, education, finance, devtool.

<!-- v:nav.sidebar-nav/desktop-icon-nav -->
### 4. Desktop icon nav

*Feeling: the site is a computer, and these are its files.*

PostHog sets columns of 56px skeuomorphic icons with 13 to 14px shadowed white labels at both edges of an illustrated wallpaper, including a Trash. It works because the whole site commits, with windows, a menu bar and a wallpaper. As a one-off, it is a costume. Pair it with a system chrome bar or not at all.

**Seen on** PostHog Pricing, PostHog Docs. **Suits** illustrated, expressive; devtool, saas.

<!-- v:nav.sidebar-nav/edge-frame-nav -->
### 5. Edge frame nav

*Feeling: the page sits inside a frame of labels.*

Navigation lives on the frame of the window. TR Studio puts T, R and S as large serif letters at three corners at 50px insets, a seal at the fourth, and rotates STUDIO and WORK at mid height on each side, with no top bar or burger. Aniket's portfolio holds just two small margin notes. Luis Henrique Bizarro hangs labels between kinked hairlines at the left and right edges. Use it for architecture, interiors and portfolios with only a few pages. Recolour with the section, and set `writing-mode:vertical-rl` rather than rotating, so text stays selectable.

**Seen on** TR Studio, Aniket, USPS Delivers, Luis Henrique Bizarro. **Suits** warm-neutral, light-precision, expressive; architecture, portfolio, editorial.

```css
.edge{position:fixed;top:50%;z-index:50;writing-mode:vertical-rl;translate:0 -50%;font-size:14px;line-height:16px;
  letter-spacing:.02em;text-transform:uppercase}
.edge.l{left:57px;rotate:180deg}.edge.r{right:57px}
```

<!-- v:nav.sidebar-nav/numbered-rail -->
### 6. Numbered rail

*Feeling: an index on a contact sheet.*

A tiny side index. Special Production sets 16px ultra-black numbers with the active one inside a 34x20 outlined ellipse, like a pencil circle. Overtime runs a word list that fades with distance from the active item, so scrolling feels like a picker wheel. Paradigm shows bracketed numbers, with the current slide's bracket empty, and names a key for every control. Loops puts eight 8px ticks on its colour stripe, the current one 14px long, so its decoration does a job. Use it for decks, reports and scroll stories.

**Seen on** Loops, Michelle Kaye, Paradigm, Special Production Agency, Overtime. **Suits** mono-technical, warm-neutral, photo-led; agency, finance, portfolio, saas.

<!-- v:nav.sidebar-nav/section-tab-band -->
### 7. Section tab band

*Feeling: a set of dividers inside the page.*

Tabs for the parts of one thing, sitting under the main nav. These are horizontal, but they do a sidebar's job. Dishoom's is a brick-red 40px band of tracked 11px caps menu tabs with a filters button. Guggenheim's visit page has a sticky 12px row with thin dividers. Apple shows ten 40px product thumbnails with 12px labels. Use it for menus, visit pages and product ranges. On phones, let it scroll sideways, with the active tab scrolled into view.

**Seen on** Guggenheim Visit, Dishoom All Day Menu, Apple iPhone, Dishoom Christmas Feast Menu, Minetta Tavern Menus, 7 sites in all. **Suits** warm-neutral, light-precision; hospitality, culture, brand.

<!-- v:nav.sidebar-nav/edge-tab -->
### 8. Edge tab

*Feeling: a bookmark in the side of the page.*

A tab fixed to the viewport edge with one job. The Takahama Kawara Museum uses a 52x198 orange tab showing today's hours, which suits vertical Japanese. Blue Bottle uses a 40x270 dark Shop Coffee tab with stacked letters. Use it for one persistent fact. Stacked Latin letters are hard to read, so rotate them instead.

**Seen on** Blue Bottle, Takahama Kawara Museum, Pankow. **Suits** warm-neutral, photo-led, expressive; culture, ecommerce.

<!-- v:nav.sidebar-nav/page-index-as-content -->
### 9. Page index as content

*Feeling: the navigation is part of the reading.*

Instead of sitting in chrome, the site's routes appear as a list in the page. Work & Co sets seven links at 36/40 in a 700px column on a 101px pitch with 1px rules and an Index label at left. Driftime sets a nine-chapter list at the base of each opener. Use it on agency and editorial sites, at the end of a page or in the place of a footer. Do not rely on it as the only way around on deep sites.

**Seen on** Work & Co, Driftime, Three Zero Five Studio, Meech213. **Suits** type-led, photo-led, expressive, light-precision; agency, fashion, culture.

<!-- v:nav.sidebar-nav/app-tree-rail -->
### 10. App tree rail

*Feeling: the product's own sidebar.*

The tree from an app. Shopify Polaris marks the active row with a white fill at radius 8 and a 3px green bar. Zed uses section heads in blue with chevrons, children indented 22px on a guide line, and a flat tint at radius 2 on the active row. Use it for app screens, and any docs that should feel like the product. See also the docs nav below, which shares this anatomy.

**Seen on** Shopify Polaris, Zed Docs. **Suits** light-precision, mono-technical; devtool.

### Mistakes that cheapen a sidebar

- **A fade with nothing to fade.** My sticky rail's mask looked right in code, but on a short list there was no overflow, so the fade did nothing and the list just stopped. Only mask lists that truly overflow.
- **Three active signals.** Fill plus bar plus bold is a lot. Use one, or one and a weight change.
- **A rail that shifts text.** Hang the tick outside the column.
- **Scroll spy that lies.** If the active item trails what the reader sees, it is worse than none. Test at the page's end, where the last section may never reach the trigger line.
- **No phone plan.** A 222px rail on a phone needs to become a horizontal scroller, or go.
- **Rotated text everywhere.** One edge label is a detail. Four is a riddle.

## Docs nav

Docs navigation must get a working developer to the right page fast, and then stay out of the way for hours. People use it repeatedly, usually in a hurry, and they notice every extra click. So it behaves like product UI, not like marketing.

What separates great from cheap is density with calm. Great docs show many items without looking busy: small quiet type, one clear active state, consistent rows, and a search that actually works. Cheap docs nest four levels deep behind chevrons, use a loud active pill and bold every heading, and lose your scroll position on each page.

Measured from frames: rails run 240 to 348px, usually 288 to 300px, with 14px links on a 32 to 34px pitch and 12px group labels. Top bars are 48 to 64px. Right outlines are 13 to 14px on a 28 to 32px pitch. Content runs about 576 to 730px wide. Keep the rail scrolled to the active item on load, and keep the keyboard shortcut visible. A filter box helps once you pass about a hundred pages.

Code below relies on the [derived tokens](#derived-tokens).

<!-- v:nav.docs-nav/guide-line-tree -->
### 1. Guide line tree

*Feeling: drafted, exact and calm.*

Links hang behind a single vertical line, and the active link gets a short ink segment on that line. Tailwind is the reference: a 288px rail, 12px mono caps labels tracked 0.1em, 14px links on a 32px pitch, 16px indent, 32px between groups. There are no icons and no chevrons, so every page in the section is visible and one click away. Use it for docs under about two hundred pages. Avoid it with deep nesting, because it depends on being flat.

**Seen on** Tailwind Docs. **Suits** light-precision; devtool.

```css
.rail{position:sticky;top:56px;height:calc(100vh - 56px);overflow:auto;padding:28px 24px;box-shadow:inset -1px 0 0 var(--line);scrollbar-width:none}
.rail h4{margin:32px 0 14px;font:400 12px/16px var(--font-mono,ui-monospace,monospace);letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2)}
.rail h4:first-child{margin-top:0}
.rail ul{list-style:none;padding:0;box-shadow:inset 1px 0 0 var(--line)}
.rail li a{position:relative;display:block;padding-left:16px;font-size:14px;line-height:32px;color:var(--ink-2);transition:color .12s}
.rail li a:hover{color:var(--ink)}
.rail li a[aria-current]{color:var(--ink);font-weight:500}
.rail li a[aria-current]::before{content:"";position:absolute;left:0;top:4px;bottom:4px;width:1px;background:var(--ink)}
```

<!-- v:nav.docs-nav/filter-first-tree -->
### 2. Filter first tree

*Feeling: a very large library with a good catalogue.*

A filter box at the top of the rail narrows the tree as you type. Cloudflare sets a 300px rail with a 36px field and a slash keycap, 12px uppercase labels, 14px rows on a 34px pitch with line icons and 14px right chevrons, and a soft tinted active row at radius 8. Shopify Polaris floats the rail as a panel 8px from the window edges at radius 12. PostHog puts one inside a window. Use it for large docs. It costs a row, so skip it for small ones.

**Seen on** Primer, Cloudflare Docs, Shopify Polaris, PostHog Handbook. **Suits** light-precision, illustrated; devtool.

```css
.rail{position:fixed;inset:56px auto 0 0;width:300px;padding:20px 16px;overflow:auto;box-shadow:inset -1px 0 0 var(--line);scrollbar-width:none}
.filter{height:36px;padding:0 8px 0 12px;display:flex;align-items:center;justify-content:space-between;border-radius:8px;
  box-shadow:inset 0 0 0 1px var(--line);font-size:14px;color:var(--ink-2);margin-bottom:24px}
.key{min-width:20px;height:20px;padding:0 5px;display:inline-grid;place-items:center;border-radius:4px;box-shadow:inset 0 0 0 1px var(--line);font-size:11px}
.rail h4{margin:24px 0 8px;padding:0 12px;font:500 11px/16px var(--font-text);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}
.rail a{height:32px;margin-bottom:2px;padding:0 12px;display:flex;align-items:center;gap:8px;border-radius:8px;font-size:14px;color:var(--ink-2);
  transition:background .12s,color .12s}
.rail a:hover{background:var(--well);color:var(--ink)}
.rail a[aria-current]{background:var(--well);color:var(--ink);font-weight:500}
.rail a .chev{margin-left:auto;width:14px;height:14px;opacity:.5}
```

<!-- v:nav.docs-nav/icon-head-tree -->
### 3. Icon head tree

*Feeling: a tidy set of chapters, with room to breathe.*

Section heads carry a small outline icon, and children sit flush under it rather than indented. Neon sets a 348px column, 32px left inset, 15px heads with 18px icons, 14px muted children on a 33px pitch, and the active item in brand green with no fill. Railway puts nine flat 14px links first, a divider, then sixteen collapsible groups, which keeps the most-used routes a click away. Use it where the docs have clear chapters.

**Seen on** Neon Docs, Railway Docs. **Suits** warm-neutral, light-precision; devtool.

<!-- v:nav.docs-nav/pill-active-tree -->
### 4. Pill active tree

*Feeling: soft and familiar, like the product itself.*

A filled pill marks the active row, with no guide lines. Resend uses a 240px rail on its shell with 14px links on 33px pitch and a grey pill at radius 12. Radix uses a pale full pill. shadcn/ui uses a 4 percent tint at radius 8, and fades the rail at both ends. Use it when the product UI already uses pills. Keep the pill faint, because a saturated one competes with the page.

**Seen on** Radix Themes, Geist, Resend Docs, shadcn/ui. **Suits** light-precision, mono-technical; devtool.

<!-- v:nav.docs-nav/three-pane-shell -->
### 5. Three pane shell

*Feeling: an editor for reading.*

The standard layout: top bar, left rail, content, right outline. Zed uses a 52px bar, a 280px sidebar, 690px content and an outline at x=1208. Fly.io uses a 304px rail and 576px content. Rails and bar stay fixed while only the content scrolls. Hold the reading column to about 65 to 75 characters and let it sit off-centre, since centring it between uneven rails helps nothing. Use it for all long docs. Below about 1100px, drop the right outline first.

**Seen on** Radix Themes, Zed Docs, Fly.io Docs. **Suits** light-precision, mono-technical, illustrated; devtool.

```css
.shell{display:grid;grid-template-columns:288px minmax(0,1fr) 240px;padding-top:56px}
.doc{padding:48px;min-width:0}.doc>*{max-width:42em}
@media(max-width:1100px){.toc{display:none}.shell{grid-template-columns:288px 1fr}}
@media(max-width:760px){.shell{display:block}.rail{display:none}.doc{padding:24px 16px}}
```

<!-- v:nav.docs-nav/scrollspy-toc -->
### 6. Scrollspy table of contents

*Feeling: a quiet note of where you are on this page.*

The right-hand outline. Vercel sets 13px grey anchors on a 28px pitch, with the current one in black beside a 1px rule, and nested items indented 12px. Resend adds a small list icon to its label. Sora's has no line at all: the current heading simply turns 600 and darker. Zed uses dotted underlines and a pale blue block. Use it on pages with more than three headings. Start it level with the page title, and keep it quieter than the left rail.

**Seen on** Vercel Docs, Zed Docs, Sora, Resend Docs, Shopify Polaris. **Suits** light-precision, mono-technical; devtool, ai.

```css
.toc{position:sticky;top:56px;height:calc(100vh - 56px);padding:48px 24px 0 0}
.toc h4{font:500 13px/20px var(--font-text);margin-bottom:10px}
.toc a{display:block;padding-left:12px;font-size:13px;line-height:28px;color:var(--ink-2);box-shadow:inset 1px 0 0 var(--line)}
.toc a[aria-current]{color:var(--ink);box-shadow:inset 1px 0 0 var(--ink)}
.toc a.nested{padding-left:24px}
```

<!-- v:nav.docs-nav/product-tabs-plus-rail -->
### 7. Product tabs plus rail

*Feeling: several manuals in one binding.*

A row of product tabs above the rail. Fly.io runs a 48px strip over the content pane only, with a 1px accent underline resting on the bottom hairline. Stripe's developer docs run product tabs in a 44px bar. Use it when docs span separate products. Keep tabs to about six, because beyond that the row wraps and the model breaks down.

**Seen on** Fly.io Docs, Modal Docs, Stripe Elements. **Suits** illustrated, dark-precision, light-precision; devtool.

<!-- v:nav.docs-nav/index-landing -->
### 8. Index landing

*Feeling: every book in the library on one wall.*

The docs home is an index, not a tree. Hugging Face lists each library with an 8px colour square, a 16/600 name and a small grey line, with no cards or icons, and unused cells stay empty. PostHog groups the whole doc set as cards. Use it for sites with many libraries or products. Plain is the point here, and a card grid with icons would lose the scan.

**Seen on** Hugging Face Docs, PostHog Docs. **Suits** illustrated, light-precision; devtool, ai.

<!-- v:nav.docs-nav/book-contents -->
### 9. Book contents

*Feeling: an actual book.*

PostHog's handbook sets 18/500 chapter titles with a 3px dotted leader to a right-aligned 14px numeral, on a 50px pitch, under a grey Chapters label. It is a contents page, and it makes the handbook feel like an object worth reading. Use it once, for a handbook or a long report. Build the leader with a flex spacer and a dotted bottom border, so that it stretches.

**Seen on** PostHog Handbook. **Suits** illustrated; devtool.

```css
.contents a{display:flex;align-items:baseline;gap:8px;height:50px;font-size:18px;font-weight:500}
.contents a::after{content:"";order:1;flex:1;border-bottom:3px dotted var(--line-strong);translate:0 -4px}
.contents a span{order:2;font-size:14px;font-weight:400;color:var(--ink-2)}
```

<!-- v:nav.docs-nav/docs-header-strip -->
### 10. Docs header strip

*Feeling: a toolbar for reading.*

A header with utilities and no marketing. Linear's docs use a sticky 44px bar with a 13px breadcrumb and a Copy page ghost button. GitHub splits a 65px header into cells with vertical rules, holding a plan switch and a search with a slash key. Vue puts search on the left beside the logo. Use it for docs and references. A copy-page control is worth adding now, because people paste docs into agents.

**Seen on** Linear Docs, GitHub Docs, Vue. **Suits** light-precision, dark-precision; devtool, saas.

<!-- v:nav.docs-nav/filter-row -->
### 11. Filter row

*Feeling: a list you can narrow without any chrome.*

A horizontal filter for changelogs and similar lists. Linear sets 15px text filters in muted ink 16px apart, where the active one just brightens with no pill or underline, and a 280x40 pill search and a bare bell on the right. Use it on changelogs, blogs and templates, where a sidebar would be too much.

**Seen on** Linear Changelog. **Suits** dark-precision; saas.

### Mistakes that cheapen docs navigation

- **Weak chevrons.** My 10px marks looked lost next to Cloudflare's 14px at about half opacity. In a tree the chevron is a control, so it gets real size.
- **Placeholder squares as icons.** In a rail they look like checkboxes. Use line icons from one set, or none.
- **Deep nesting.** Past three levels nobody knows where they are. Split the section into its own product tab.
- **A rail that resets.** Reloading the rail at the top on each page loses the reader. Keep it scrolled to the active item.
- **A hidden search shortcut.** The keycap is the feature. Show it.
- **A marketing nav on docs.** People here want Search, Docs, the API and their dashboard.
- **Bold on every group head.** Quiet caps or mono labels step back, so the links can be read.
- **Prose wider than 75 characters.** A wide reading column undoes all the work in the rails.
- **An outline on a short page.** A right rail with two items is decoration.

## Before you call it done

Open the page and check each of these. Most take a few seconds, and they catch nearly everything in this chapter.

- Does the logo share a left edge with the hero, and the last action a right edge with the page?
- Is the logo heavy enough to carry the bar, about 1.5 times the link size?
- Does exactly one control lead? Cover the bar's CTA. If nothing else competes, it is right.
- Does each chevron open something, and does every item that opens have one?
- Scroll to your darkest and lightest sections. Can you read the bar over both?
- Open each menu on a 1280x720 laptop. Does the bottom fit, or scroll?
- Move the cursor from trigger to panel slowly, then diagonally. Does it stay open?
- Do the panel's edges line up with something real?
- Is there one thing in the panel that is bigger or louder than the rest?
- Press Tab, Enter and Escape through the nav. Does focus return to the trigger?
- Open the phone menu. Is every target at least 44px? Is the action within reach? Does the page stay put behind it?
- Does the phone menu look designed, or like the browser's default list?
- Turn on reduced motion. Do staggers, clips and tickers stop, with everything still visible?
- Turn off JavaScript or blur support in your head. Is any text unreadable without `backdrop-filter`?
- If there is an announcement bar, is it true today? Does closing it stick?
