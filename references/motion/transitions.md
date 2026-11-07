# Transitions

How to move between pages and states, from a full-page curtain on a small studio site to a 70 ms highlight in a command palette. Part one is for sites, where a transition can be an event, and it holds the showy recipes. Part two is for product UI, where it must stay out of the way. The two are not the same craft at different speeds, so read the section on restraint before you touch a dashboard.

Every recipe below ran in headless Chrome under scripted input, with its mid-flight frames inspected, and was checked with JavaScript off and with reduced motion. Safari and Firefox were not run, so treat browser support notes as guidance and keep the fallbacks.

## Contents

- [How to choose](#how-to-choose)
- [Two speeds: marketing and product](#two-speeds-marketing-and-product)
- [Shared code](#shared-code)
- [One owner per property](#one-owner-per-property)
- Part one, pages and states: [1 same-document view transition](#1-same-document-view-transition), [2 cross-document view transition](#2-cross-document-view-transition), [3 shared-element morph with FLIP](#3-shared-element-morph-with-flip), [4 full-page wipe between files](#4-full-page-wipe-between-files), [5 route colour wipe](#5-route-colour-wipe), [6 filter and sort reflow](#6-filter-and-sort-reflow), [7 modal and sheet with depth](#7-modal-and-sheet-with-depth)
- Part two, product UI: [8 number ticking](#8-number-ticking), [9 chart draw-in](#9-chart-draw-in), [10 list insertion and reorder](#10-list-insertion-and-reorder), [11 toast stack](#11-toast-stack), [12 skeleton to content](#12-skeleton-to-content), [13 optimistic update](#13-optimistic-update), [14 command palette](#14-command-palette), [15 sidebar collapse](#15-sidebar-collapse)
- [Checks before you ship](#checks-before-you-ship)

## How to choose

Ask two questions before writing code.

**Is the user going somewhere, or keeping their place?** Going somewhere means a new page, so the transition may mark the change. Keeping their place means the same content rearranged or a layer on top, so the job is to prove that nothing was lost: the thing you clicked becomes the thing you see.

**How many times will one person trigger this?** Five times a visit can carry ceremony. Two hundred times a day cannot, because every millisecond becomes a tax on someone trying to work.

| You need | Use | Deciding reason |
|---|---|---|
| Views in one document, no need to interrupt | 1 | Least code. The browser does the morph |
| Same, across plain HTML files | 2 | CSS only, and unsupported browsers just navigate |
| A card opens into a detail and can be closed mid-flight | 3 | A view transition cannot reverse and swallows clicks |
| A branded moment between pages of a small site | 4 | Survives real page loads, carries a label |
| Each section owns a colour | 5 | The wipe doubles as wayfinding |
| A grid re-sorts or filters | 6 | Items are tracked across the change |
| A focused task over the page | 7 | Native `<dialog>` gives you focus and Esc for free |
| Dashboards, tables, inboxes, tools | 8 to 15 | Fast and quiet, see below |

## Two speeds: marketing and product

| Move | Marketing | Product |
|---|---|---|
| Page or route change | 600 to 900 ms | 0 to 150 ms, opacity only |
| Shared-element morph | 700 to 1000 ms | 200 to 250 ms |
| Modal in / out | 450 to 600 / 350 ms | 180 / 120 ms |
| Reorder | 500 to 700 ms | 150 to 200 ms |
| Number change | 1400 to 2000 ms, once | 300 to 420 ms, on real change only |
| Press | 100 ms | 60 to 100 ms |
| Hover | 200 to 300 ms | 150 to 200 ms |
| Stagger per item | 40 to 80 ms | 0 to 18 ms |
| Easing | `--inout`, `--out` | `--ui` in, `--ui-exit` out |

The marketing column is the showy end, for studios, portfolios and launches. Most product companies' own sites use a plain navigation or a 200 ms crossfade (recipe 2). Marketing motion is allowed to be seen. Product motion should be felt and not noticed, so hold it to these rules:

- State changes in the same task as the input. Animation decorates a change that has already happened; it never gates it. The field takes keystrokes on the first frame and the button works on the first frame.
- Exits run at about two thirds of the entry time, because nobody watches something leave.
- Anything driven by the keyboard or by key repeat stays at 120 ms or less. Under key repeat it runs at 0.
- Only what changed moves. No section reveals, no stagger across a page, no bounce, no blur. One axis of transform plus opacity is the whole vocabulary.
- If the motion does not tell the user something (where a row went, what appeared, what failed), delete it.

## Shared code

Every recipe assumes these three pieces. The inline script goes in `<head>` before any CSS. Set a hidden start state only behind `.js`, so a failed script can never hide content.

```html
<script>document.documentElement.classList.add('js')</script>
```

```css
:root {
  --out: cubic-bezier(.22, 1, .36, 1);    /* quint out: marketing arrivals */
  --inout: cubic-bezier(.76, 0, .24, 1);  /* quart in-out: wipes, curtains, morphs */
  --ui: cubic-bezier(.2, 0, 0, 1);        /* product default: instant start, quiet stop */
  --ui-exit: cubic-bezier(.4, 0, 1, 1);   /* product exits: leaves without a tail */
}
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; }
}
```

```js
const motionOK = () => !matchMedia('(prefers-reduced-motion: reduce)').matches;

// FLIP every child of parent across a DOM change. Reads first, writes once, animates transform only.
function flip(parent, mutate, { duration = 180, easing = 'cubic-bezier(.2,0,0,1)', skip } = {}) {
  const first = new Map([...parent.children].map(el => [el, el.getBoundingClientRect()]));
  mutate();
  if (!motionOK()) return;
  const kids = [...parent.children].filter(el => el !== skip);
  kids.forEach(el => el.getAnimations().forEach(a => a.id === 'flip' && a.cancel()));
  const last = kids.map(el => el.getBoundingClientRect());
  kids.forEach((el, i) => {
    const a = first.get(el), b = last[i], opts = { id: 'flip', duration, easing };
    if (!a) return el.animate({ opacity: [0, 1], transform: ['translateY(-4px)', 'none'] }, opts);
    const dx = a.left - b.left, dy = a.top - b.top;
    if (dx || dy) el.animate({ transform: [`translate(${dx}px, ${dy}px)`, 'none'] }, opts);
  });
}
```

`flip()` reads the old boxes before cancelling running animations, so an interrupted row continues from where it is on screen instead of jumping to its layout slot. Everything it writes is `transform` and `opacity`.

## One owner per property

Native CSS and WAAPI cover this whole chapter except recipe 6, where GSAP Flip earns its place. Pick one owner for each property on each element. These are the failures when you do not:

- GSAP caches and writes inline `transform`. A WAAPI animation or a CSS `transition: transform` on the same element fights it, and the element jumps or lags on every frame. Remove the transition from anything Flip touches.
- A view transition shows snapshots, so a GSAP tween running on the live DOM underneath is invisible until it ends. Start page-entrance tweens after `vt.ready`, on the new DOM, or do not start them.
- Router libraries that intercept links and `@view-transition { navigation: auto }` both claim navigation. Use one.
- A smooth-scroll library keeps moving under `overflow: hidden`, so stop it when a modal or morph locks the page. After any same-document swap, call `ScrollTrigger.refresh()` and kill triggers on removed sections.

# Part one: pages and states

## 1. Same-document view transition

The browser photographs the old state, you swap the DOM, and it animates between the photographs. Named elements travel on their own layer, so one image glides while the page slides under it, and the site feels like one continuous place.

- **Use for** hash routes, tabs and app route changes. **Avoid** when someone must be able to interrupt. Real pointer clicks during a transition land on `<html>`, even with `pointer-events: none` on every `::view-transition-*` pseudo-element (measured in Chrome with real mouse input; the same click lands normally once it ends). Enter on a focused link still works, because keyboard activation skips hit testing, and so do scripted clicks. A 700 ms view transition is 700 ms of dead pointer, so use recipe 3 where that matters.
- **Numbers:** root and shared elements .7s `--inout`. Old root leaves to `translateX(-22%)` at .4 opacity, new root enters from `translateX(100%)`. Titles swap inside a mask over .6s, the new line .1s late. Product version: 150 ms root cross-fade, nothing named.

```html
<header class="site-head"><nav aria-label="Rooms"><a href="#kiln" aria-current="page">Kiln</a> <a href="#loom">Loom</a></nav></header>
<main>
  <section class="room on" id="kiln"><div class="plate tall"></div><h2 class="room-title" tabindex="-1">The kiln room</h2></section>
  <section class="room" id="loom"><div class="plate wide"></div><h2 class="room-title" tabindex="-1">The loom shed</h2></section>
</main>
```

```css
.js .room:not(.on) { display: none; }          /* without JS every room is a stacked section */
.site-head { view-transition-name: site-head; } /* stays still while the root slides */
.plate { view-transition-name: plate; }         /* morphs position and size between rooms */
.room-title { view-transition-name: room-title; }

@media (prefers-reduced-motion: no-preference) {
  ::view-transition-group(*) { animation-duration: .7s; animation-timing-function: var(--inout); }
  ::view-transition-old(root) { animation: vt-leave .7s var(--inout) both; }
  ::view-transition-new(root) { animation: vt-enter .7s var(--inout) both; }
  html[data-dir="back"]::view-transition-old(root) { animation-name: vt-enter; animation-direction: reverse; z-index: 1; }
  html[data-dir="back"]::view-transition-new(root) { animation-name: vt-leave; animation-direction: reverse; }

  /* aspect ratio changes: crop instead of squash. Two colours: reveal, because a cross-fade passes through mud. */
  ::view-transition-old(plate), ::view-transition-new(plate) { height: 100%; object-fit: cover; overflow: clip; mix-blend-mode: normal; }
  ::view-transition-old(plate) { animation: none; }
  ::view-transition-new(plate) { animation: plate-in .7s var(--inout) both; }

  /* two different words: swap them inside a mask instead of cross-fading ghosts */
  ::view-transition-image-pair(room-title) { overflow: clip; }
  ::view-transition-old(room-title) { animation: line-out .6s var(--inout) both; }
  ::view-transition-new(room-title) { animation: line-in .6s var(--inout) .1s both; }
}
@keyframes vt-leave { to { transform: translateX(-22%); opacity: .4; } }
@keyframes vt-enter { from { transform: translateX(100%); } }
@keyframes plate-in { from { clip-path: inset(100% 0 0); } }
@keyframes line-out { to { transform: translateY(-105%); } }
@keyframes line-in { from { transform: translateY(105%); } }
```

```js
const links = [...document.querySelectorAll('nav a')];
const root = document.documentElement;
const rooms = [...document.querySelectorAll('.room')];
let current = 0, active;

function render(i) {
  rooms[current].classList.remove('on');
  rooms[i].classList.add('on');
  current = i;
  links.forEach((a, n) => n === i ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  rooms[i].querySelector('h2').focus({ preventScroll: true });
}

function go(i, native) {
  if (i === current) return;
  const update = () => render(i);
  // native: the browser already animated this, as with an iOS edge swipe. Do not animate twice.
  if (!document.startViewTransition || !motionOK() || native) return update();
  root.dataset.dir = i > current ? 'next' : 'back';
  const vt = active = document.startViewTransition(update);
  vt.ready.catch(() => {});             // a skipped transition rejects this; the DOM still updated
  vt.finished.catch(() => {}).finally(() => { if (active === vt) delete root.dataset.dir; });
}

document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const i = rooms.findIndex(r => '#' + r.id === a.hash);
  if (i < 0) return;
  e.preventDefault();
  history.pushState(null, '', a.hash);
  go(i);
});
addEventListener('popstate', e => go(Math.max(0, rooms.findIndex(r => '#' + r.id === location.hash)), e.hasUAVisualTransition));
```

- **Heavy and slow:** 1.1s, `cubic-bezier(.87,0,.13,1)`, old root `scale(.92)` to .2 opacity, new root from `translateY(100%)`. A slab being lifted away.
- **Snappy and mechanical:** 320 ms, `cubic-bezier(.9,0,.1,1)`, no opacity at all. Old root stays put, new root enters by `clip-path: inset(0 0 0 100%)`, both at `mix-blend-mode: normal`.
- **Soft:** .9s, `cubic-bezier(.4,0,.2,1)`, a plain root cross-fade with only the image named.
- **What sets the character:** whether the root travels or is revealed, how far the old root moves (0 for a cut, -22% for parallax), and whether anything fades.
- **Touch:** mobile back swipes bring their own animation. Pass `e.hasUAVisualTransition` as above or the page animates twice. Keep durations the same and size rooms with `dvh`.
- **Fallback:** without the `.js` class every room is a stacked section and the links scroll to it. With no API or under reduced motion, `go()` writes the DOM directly and the state is correct at once.
- **Goes wrong:** two rendered elements share a `view-transition-name`, and the browser abandons the whole transition (`display: none` elements do not count, which is why one `.plate` rule works here). The default cross-fade runs between two strong colours and passes through mud, so reveal one over the other with `mix-blend-mode: normal` as above. The update callback awaits a fetch, and rendering freezes while it runs, so fetch first and pass only the synchronous DOM write.

## 2. Cross-document view transition

The same effect between separate HTML files, with no router and almost no JavaScript. Use it on any multi-page site that has a shared image or heading. Avoid it across origins, which it does not support.

- **Numbers:** shared piece .7s `--inout`. Old root out in .35s `cubic-bezier(.4,0,1,1)` to `scale(.985)`. New root in over .5s `--out` from `translateY(20px)`, delayed .25s so the two pages never sit on each other.
- **Setup:** both pages load the same CSS and both opt in. Give the matching elements the same name on each page. `rel="expect"` holds first paint until the hero exists, so the morph has a destination.

```html
<script>
  // Must be a blocking script in <head>: pagereveal fires before first render.
  addEventListener('pagereveal', e => {
    window.__vt = !!e.viewTransition;
    if (!e.viewTransition) return;
    if (window.navigation?.activation?.navigationType === 'traverse') e.viewTransition.types.add('back');
  });
</script>
<!-- on the detail page, also in <head> -->
<link rel="expect" blocking="render" href="#hero">

<!-- index -->
<nav class="index" aria-label="Studies">
  <a href="alder.html"><span class="thumb" style="view-transition-name:p-alder;view-transition-class:piece;--a:#2f5d50;--b:#c9d6a3"></span><span class="t">Alder, late light</span></a>
  <a href="basalt.html"><span class="thumb" style="view-transition-name:p-basalt;view-transition-class:piece;--a:#3a3550;--b:#d8a27c"></span><span class="t">Basalt shelf</span></a>
  <a href="cirrus.html"><span class="thumb" style="view-transition-name:p-cirrus;view-transition-class:piece;--a:#1f4a78;--b:#e9d9c6"></span><span class="t">Cirrus over water</span></a>
</nav>
<!-- alder.html: the same name lands on the hero -->
<div class="hero" id="hero" style="view-transition-name:p-alder;view-transition-class:piece;--a:#2f5d50;--b:#c9d6a3"></div>
```

```css
@media (prefers-reduced-motion: no-preference) {
  @view-transition { navigation: auto; }

  ::view-transition-group(.piece) { animation-duration: .7s; animation-timing-function: var(--inout, cubic-bezier(.76,0,.24,1)); }
  ::view-transition-old(.piece), ::view-transition-new(.piece) { height: 100%; object-fit: cover; overflow: clip; }

  ::view-transition-old(root) { animation: page-out .35s cubic-bezier(.4,0,1,1) both; }
  ::view-transition-new(root) { animation: page-in .5s cubic-bezier(.22,1,.36,1) .25s both; }
  html:active-view-transition-type(back)::view-transition-new(root) { animation-name: page-in-back; }
}
@keyframes page-out { to { opacity: 0; transform: scale(.985); } }
@keyframes page-in { from { opacity: 0; transform: translateY(20px); } }
@keyframes page-in-back { from { opacity: 0; transform: translateY(-12px); } }
```

- **Heavy and slow:** piece 1s `cubic-bezier(.87,0,.13,1)`, old root holds still until the piece lands, new root fades in over the last 300 ms.
- **Snappy:** piece .35s `--ui`, roots cut at 120 ms with no translate.
- **Soft:** old root .6s, new root .7s with a .15s overlap, `cubic-bezier(.4,0,.2,1)`, no scale.
- **What sets the character:** the gap between old leaving and new arriving. A gap reads as a cut; an overlap reads as a dissolve.
- **Touch:** a browser that animates the back swipe itself should skip the transition, so test it there rather than adding code. Keep the new page light: Chrome gives up on a transition after about 4 seconds of waiting.
- **Fallback:** the rule sits inside `prefers-reduced-motion: no-preference`, so reduced motion and unsupported browsers get an ordinary navigation. There is nothing to break.
- **Goes wrong:** the thumbnail was scrolled off screen, so the piece flies in from nowhere. On a grid above about 30 items, set the name only on the clicked card in `pageswap` rather than on every card, since each name costs a snapshot. A hero image that has not decoded morphs into blank space, so `fetchpriority="high"` it and keep the `expect` link.

## 3. Shared-element morph with FLIP

The thumbnail you clicked grows into the hero of the detail view. Measure both boxes, jump the hero back to the thumbnail with a transform, then let it run home. It feels physical because the object never leaves the screen.

- **Use when** the morph must be reversible mid-flight, the rest of the page must keep running, or the pointer must stay live. Those are the three things a view transition cannot give you. **Avoid** for a plain page change, where recipe 1 is far less code.
- **Numbers:** hero 900 ms `--inout`. Scrim 500 ms linear. Copy rises 16px, 600 ms `--out`, delayed 430 ms then 60 ms per line, so text lands after the image commits. Closing: copy fades in 160 ms, the morph reverses, the scrim fades 600 ms after a 200 ms hold.

```html
<main class="grid" id="grid">
  <a class="card" href="#p1"><svg class="media" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#a1"/></svg><h2>Slip-cast sun</h2><p>Screenprint, 2024</p></a>
  <!-- one link per piece, each pointing at its own article -->
</main>
<section aria-label="Edition details">
<article class="detail" id="p1">
  <div class="scrim"></div>
  <div class="inner">
    <button class="close" type="button">Close</button>
    <svg class="media" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#a1"/></svg>
    <div class="copy"><h2 class="rise" tabindex="-1">Slip-cast sun</h2><p class="rise">Four-colour screenprint on 300 gsm cotton rag.</p><p class="rise">Edition of 40, signed.</p></div>
  </div>
</article>
  <!-- one article per piece -->
</section>
```

`.media` is any image. The demo uses inline SVG; give `.card .media` and `.detail .media` their own aspect ratios and `morph()` handles the pair.

```css
.js .detail { position: fixed; inset: 0; z-index: 10; overflow: auto; overscroll-behavior: contain; }
.js .detail:not(.open) { display: none; }
.scrim { position: fixed; inset: 0; background: #f4f1ea; }
html.locked { overflow: hidden; }
```

```js
const root = document.documentElement, grid = document.getElementById('grid');
const MORPH = { duration: 900, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'both' };
let open = null, closing = false;

// Uniform scale plus a clip: the hero is never squashed, the crop just opens up.
function morph(thumb, hero) {
  const a = thumb.getBoundingClientRect(), b = hero.getBoundingClientRect();
  const s = Math.max(a.width / b.width, a.height / b.height);
  const x = a.left + a.width / 2 - b.left - b.width / 2;
  const y = a.top + a.height / 2 - b.top - b.height / 2;
  const cropX = (b.width - a.width / s) / 2, cropY = (b.height - a.height / s) / 2;
  return hero.animate({
    transform: [`translate(${x}px, ${y}px) scale(${s})`, 'none'],
    clipPath: [`inset(${cropY}px ${cropX}px round ${14 / s}px)`, 'inset(0px 0px round 0px)'],
  }, MORPH);
}

function show(card, detail, instant) {
  if (open || closing) return;
  const hero = detail.querySelector('.media'), thumb = card.querySelector('.media');
  detail.classList.add('open');
  root.classList.add('locked');
  grid.inert = true;
  thumb.style.visibility = 'hidden';
  open = { card, detail, hero, thumb, anim: null };
  if (!instant && motionOK()) {
    open.anim = morph(thumb, hero);
    detail.querySelector('.scrim').animate({ opacity: [0, 1] }, { duration: 500, easing: 'linear' });
    detail.querySelectorAll('.rise').forEach((el, i) => el.animate(
      { opacity: [0, 1], transform: ['translateY(16px)', 'none'] },
      { duration: 600, delay: 430 + i * 60, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' }));
  }
  detail.querySelector('h2').focus({ preventScroll: true });
}

async function hide() {
  if (!open) return;
  const { card, detail, hero, thumb, anim } = open;
  open = null; closing = true;
  if (motionOK()) {
    let a = anim;
    if (!a || a.playState !== 'running') { a?.cancel(); a = morph(thumb, hero); }
    detail.getAnimations({ subtree: true }).filter(x => x !== a).forEach(x => x.cancel());
    detail.querySelectorAll('.rise').forEach(el => el.animate({ opacity: [1, 0] }, { duration: 160, fill: 'forwards' }));
    detail.querySelector('.scrim').animate({ opacity: [1, 0] }, { duration: 600, delay: 200, fill: 'both' });
    a.reverse();
    await a.finished.catch(() => {});
  }
  detail.getAnimations({ subtree: true }).forEach(x => x.cancel());
  detail.classList.remove('open');
  detail.scrollTop = 0;
  thumb.style.visibility = '';
  root.classList.remove('locked');
  grid.inert = false; closing = false;
  card.focus({ preventScroll: true });
}

const close = () => history.state?.morph ? history.back() : (history.replaceState(null, '', location.pathname), hide());

grid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  history.pushState({ morph: 1 }, '', card.hash);
  show(card, document.querySelector(card.hash));
});
document.addEventListener('click', e => { if (e.target.closest('.close')) close(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && open) close(); });
addEventListener('popstate', () => {
  const card = location.hash && grid.querySelector(`a[href="${location.hash}"]`);
  card ? show(card, document.querySelector(location.hash)) : hide();
});
if (location.hash && grid.querySelector(`a[href="${location.hash}"]`)) {
  show(grid.querySelector(`a[href="${location.hash}"]`), document.querySelector(location.hash), true);
}
```

- **Heavy and slow:** 1200 ms `cubic-bezier(.87,0,.13,1)`, copy delay 700 ms, a scrim in the image's own dark colour.
- **Snappy and mechanical:** 420 ms `cubic-bezier(.3,0,0,1)`, copy delay 180 ms, no line stagger, no scrim fade.
- **Soft and organic:** 800 ms with a `linear()` spring that overshoots to about 1.02, copy delay 300 ms, stagger 90 ms.
- **What sets the character:** the delay between image and copy, and the easing tail. Never change the rule that scale is uniform.
- **Touch:** the Back button and back swipe close it, through `pushState` and `popstate`. Set `overscroll-behavior: contain` so the page behind does not scroll. Drop the duration to about 650 ms below 760px, where the hero travels a shorter way.
- **Fallback:** the cards are real hash links and each detail is a real article, so without JS the page is a list with anchors. Under reduced motion the swap is instant. Opening the URL directly shows the detail with no animation.
- **Goes wrong:** scaling width and height separately squashes the image, so scale uniformly and open the crop with `clip-path` as above. Text inside the moving element scales and turns soft, so move the image and bring the text in separately. `display: none` on the thumbnail collapses the grid; use `visibility: hidden`. Forgetting to return focus to the card leaves keyboard users at the top of the page.

## 4. Full-page wipe between files

A curtain closes over one page, the browser navigates under it, and the next page opens from the same curtain. It works on any static site because the arrival half is plain CSS decided before first paint.

- **Use for** small sites where changing page is an event, such as a studio or a launch. **Avoid** on anything people browse quickly. Each click costs about 1.5 seconds before the new content is readable, so cap the cover at 750 ms and never use it on a shop or in documentation.
- **Numbers:** five columns. Cover .55s `--inout`, 45 ms stagger, 730 ms total (`COVER` must equal this). Reveal .6s `--inout`, starting at 120 ms, same stagger. Label in at .3s.

Put this in `<head>` on every page, and the cover as the first thing in `<body>`. Links carry their colour, and `data-ink` when the colour is light.

```html
<script>
  (() => {
    const r = document.documentElement;
    r.classList.add('js');
    try {
      const w = JSON.parse(sessionStorage.getItem('wipe'));
      sessionStorage.removeItem('wipe');
      if (w) { r.classList.add('arriving'); r.style.setProperty('--wipe', w[0]); r.style.setProperty('--wipe-ink', w[2]); r.dataset.label = w[1]; }
    } catch {}
  })();
</script>
<link rel="stylesheet" href="wipe.css">
<script type="speculationrules">{ "prefetch": [{ "where": { "selector_matches": "a[data-wipe]" }, "eagerness": "moderate" }] }</script>

<div class="wipe" aria-hidden="true"><i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i><i style="--i:4"></i><b></b></div>
<a href="studio.html" data-wipe="#f2c14e" data-ink="#1c1a16" data-label="Studio">Studio</a>
```

```css
.wipe { position: fixed; inset: 0; z-index: 100; display: none; grid-template-columns: repeat(5, 1fr); pointer-events: none; }
.wipe i { background: var(--wipe, #111); margin-right: -1px; transform: scaleY(0); }  /* -1px hides hairline seams */
.wipe b { position: absolute; left: 50%; top: 50%; translate: -50% -50%; color: var(--wipe-ink, #fff); font: 500 clamp(28px, 5vw, 64px)/1 ui-serif, Georgia, serif; opacity: 0; }
html.leaving .wipe, html.arriving .wipe { display: grid; }

html.leaving .wipe i { transform-origin: 50% 100%; animation: wipe-cover .55s var(--inout, cubic-bezier(.76,0,.24,1)) both; animation-delay: calc(var(--i) * 45ms); }
html.leaving .wipe b { animation: wipe-label .3s var(--out, cubic-bezier(.22,1,.36,1)) .3s both; }

/* Pure CSS, so the page reveals itself even if the script below never loads. */
html.arriving .wipe i { transform-origin: 50% 0; animation: wipe-reveal .6s var(--inout, cubic-bezier(.76,0,.24,1)) both; animation-delay: calc(120ms + var(--i) * 45ms); }
html.arriving .wipe b { opacity: 1; animation: wipe-label .18s linear reverse both; }

@keyframes wipe-cover { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@keyframes wipe-reveal { from { transform: scaleY(1); } to { transform: scaleY(0); } }
@keyframes wipe-label { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@media (max-width: 640px) { .wipe { grid-template-columns: repeat(3, 1fr); } .wipe i:nth-of-type(n + 4) { display: none; } }
@media (prefers-reduced-motion: reduce) { .wipe { display: none !important; } }
```

```js
(() => {
  const root = document.documentElement, COVER = 730;   // .55s plus four 45ms staggers
  const motionOK = () => !matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target || a.hasAttribute('download') || a.origin !== location.origin) return;
    if (a.pathname === location.pathname || !motionOK() || root.classList.contains('leaving')) return;
    e.preventDefault();
    const colour = a.dataset.wipe || '#111', label = a.dataset.label || '', ink = a.dataset.ink || '#fff';
    try { sessionStorage.setItem('wipe', JSON.stringify([colour, label, ink])); } catch { return void (location.href = a.href); }
    root.style.setProperty('--wipe', colour);
    root.style.setProperty('--wipe-ink', ink);
    document.querySelector('.wipe b').textContent = label;
    root.classList.add('leaving');
    setTimeout(() => { location.href = a.href; }, COVER);
  });

  // Back and forward can restore this exact page from the bfcache, cover still shut. Open it.
  addEventListener('pageshow', e => { if (e.persisted) root.classList.remove('leaving', 'arriving'); });
})();
```

- **Heavy and slow:** one panel, 900 ms `cubic-bezier(.87,0,.13,1)`, the label holding 300 ms in the middle.
- **Snappy and mechanical:** 12 columns, 180 ms each, `steps(6)`, 15 ms stagger, no label.
- **Soft:** two panels from opposite edges with a curved leading edge, `clip-path: ellipse()` on one layer, 800 ms `cubic-bezier(.4,0,.2,1)`.
- **What sets the character:** column count, stagger, and which edge it leaves from. Reveal from the same edge it covered from for a door; reveal onward, as here, for a pass-through.
- **Touch:** three columns below 640px, as above, because five read as stripes on a narrow screen. `moderate` prefetch mostly fires on hover, which touch does not have, so pages must load inside the cover time. The back swipe restores from bfcache with the cover shut, which is why `pageshow` opens it.
- **Fallback:** links stay real links, and modified clicks, new tabs and downloads pass through untouched. If storage throws, the click navigates plainly. Without JS nothing is added. Under reduced motion the cover is `display: none !important`.
- **Goes wrong:** without prefetch the cover sits shut on a slow load and the site feels broken, so keep the speculation rules. The arrival class set by a deferred script instead of an inline one flashes the page under the curtain. Intercepting modified clicks breaks open in new tab, so the handler returns before `preventDefault` for those. A label in white on a light curtain is unreadable; pass the ink with the colour.

## 5. Route colour wipe

Every route owns one colour, and changing route floods the screen with it from the point you clicked. The colour reads as your doing rather than the site's, and doubles as wayfinding.

- **Use for** a few top-level sections with a strong palette. **Avoid** with more than about five routes, where colours stop meaning anything, and in product UI, where it is too loud.
- **Numbers:** `clip-path: circle()` from the click to the far corner, 560 ms `--inout`. A lead band in the accent colour starts first, the page colour 90 ms behind it. Content lands 16px over 620 ms `--out`, 70 ms apart. The theme flip is 500 ms.

```html
<html lang="en" data-route="field">
<meta name="theme-color" content="#e4572e">
<div class="bands" hidden aria-hidden="true"><i></i><i></i></div>
<nav aria-label="Routes"><a href="#field" aria-current="page">Field</a> <a href="#depth">Depth</a> <a href="#signal">Signal</a></nav>
<section class="route on" id="field"><h2 tabindex="-1">Field</h2><p>Survey crews and open ground.</p></section>
<section class="route" id="depth"><h2 tabindex="-1">Depth</h2><p>Sonar and cold water.</p></section>
<section class="route" id="signal"><h2 tabindex="-1">Signal</h2><p>The telemetry desk.</p></section>
<button class="flip" type="button" id="themeFlip">Lights off</button>
```

```css
[data-route="field"]  { --bg: #e4572e; --ink: #1f0a04; --lead: #ffd23f; }
[data-route="depth"]  { --bg: #17305c; --ink: #e9f1ff; --lead: #5de2c4; }
[data-route="signal"] { --bg: #f2e9d8; --ink: #1c1a16; --lead: #e4572e; }
html.night { --bg: #111014; --ink: #f1eee8; }
html, body { background: var(--bg); color: var(--ink); }
.bands { position: fixed; inset: 0; z-index: 50; pointer-events: none; }
.bands[hidden] { display: none; }
.bands i { position: absolute; inset: 0; }

/* Variation, a native flip for theme toggles: the new snapshot is revealed by a circle. */
::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
.js .route:not(.on) { display: none; }
```

```js
const links = [...document.querySelectorAll('nav a')];
const root = document.documentElement, bands = document.querySelector('.bands');
const COLOURS = { field: ['#e4572e', '#ffd23f'], depth: ['#17305c', '#5de2c4'], signal: ['#f2e9d8', '#e4572e'] };
const WIPE = { duration: 560, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'both' };
let busy = false;

function render(route) {
  root.dataset.route = route;
  document.querySelectorAll('.route').forEach(s => s.classList.toggle('on', s.id === route));
  links.forEach(a => a.hash === '#' + route ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  document.querySelector('meta[name="theme-color"]').content = COLOURS[route][0];
  document.getElementById(route).querySelector('h2').focus({ preventScroll: true });
}

async function wipeTo(route, x = innerWidth / 2, y = innerHeight / 2) {
  if (busy || route === root.dataset.route) return;
  if (!motionOK()) return render(route);
  busy = true;
  const [page, lead] = COLOURS[route], [back, front] = bands.children;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`];
  back.style.background = lead;
  front.style.background = page;
  bands.hidden = false;
  back.animate({ clipPath }, WIPE);
  await front.animate({ clipPath }, { ...WIPE, delay: 90 }).finished;

  render(route);                                  // the swap happens behind a solid colour
  back.getAnimations().forEach(a => a.cancel());
  front.getAnimations().forEach(a => a.cancel());
  bands.hidden = true;                            // same colour as the new page, so nothing changes
  document.querySelectorAll('.route.on > *').forEach((el, i) => el.animate(
    { opacity: [0, 1], transform: ['translateY(16px)', 'none'] },
    { duration: 620, delay: i * 70, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' }));
  busy = false;
  const want = location.hash.slice(1) || 'field';
  if (want !== route) wipeTo(want);               // Back was pressed mid-wipe: catch up
}

document.addEventListener('click', e => {
  const a = e.target.closest('nav a');
  if (!a) return;
  e.preventDefault();
  if (busy) return;
  history.pushState(null, '', a.hash);
  wipeTo(a.hash.slice(1), e.clientX || undefined, e.clientY || undefined);
});
addEventListener('popstate', () => wipeTo(location.hash.slice(1) || 'field'));

// Variation for a theme toggle: the native snapshot, revealed by the same circle.
document.getElementById('themeFlip').addEventListener('click', async e => {
  const invert = () => root.classList.toggle('night');
  if (!document.startViewTransition || !motionOK()) return invert();
  const { clientX: x, clientY: y } = e, r = Math.hypot(innerWidth, innerHeight);
  const vt = document.startViewTransition(invert);
  try { await vt.ready; } catch { return; }       // skipped: the theme already flipped
  root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
    { duration: 500, easing: 'cubic-bezier(.76,0,.24,1)', pseudoElement: '::view-transition-new(root)' });
});
```

- **Heavy and slow:** three bands, 120 ms apart, 800 ms `cubic-bezier(.87,0,.13,1)`, content delay 200 ms.
- **Snappy and mechanical:** `inset()` from the nearest edge instead of a circle, 300 ms `cubic-bezier(.9,0,.1,1)`, no lead band.
- **Soft:** a single band, 700 ms `cubic-bezier(.4,0,.2,1)`, content fading with no translate.
- **What sets the character:** the shape of the leading edge, and the number of bands.
- **Touch:** the tap point works as the origin. Keyboard clicks report 0, so the code falls back to the centre. `theme-color` follows the route, so the browser chrome changes with it.
- **Fallback:** routes stack without `.js`. Under reduced motion `render()` runs directly. The route is a CSS variable set on `html`, so the colour works with no animation at all.
- **Goes wrong:** the content swaps before the cover is complete, so `render()` must run after the `finished` promise. The cover hides on a colour that differs from the page, which flashes, so it must equal the new `--bg`. A clipped layer the full size of the screen repaints every frame, so keep it to flat colour and put no image in it. Back pressed mid-wipe must catch up afterwards, as the last lines of `wipeTo` do.

## 6. Filter and sort reflow

Cards travel to their new slots instead of snapping, while leavers shrink out and newcomers grow in. The eye can follow the set across the change. This is the one recipe where GSAP Flip is worth the dependency, because `absolute: true` lifts leavers out of the grid and it settles interruptions cleanly.

- **Use for** portfolios, archives and shop grids under about 40 cards. **Avoid** above that, where everything flying at once tells the eye nothing, so cross-fade the grid instead. In a product, use `flip()` from the shared code at 180 ms with no scale.
- **Numbers:** moves .62s `power3.inOut`, `stagger: { amount: .1 }`. Leavers .24s `power2.in` to `scale(.9)`. Enterers .42s `power3.out` from .9, delayed .22s so they arrive into space that has opened. The container height tweens with the same duration so the footer glides.
- **Dependencies:** gsap and Flip, at the versions pinned in the foundations chapter.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Flip.min.js"></script>

<div class="bar" role="group" aria-label="Filter and sort">
  <button type="button" data-filter="all" aria-pressed="true">All</button>
  <button type="button" data-filter="print" aria-pressed="false">Print</button>
  <button type="button" data-filter="object" aria-pressed="false">Object</button>
  <button type="button" data-filter="film" aria-pressed="false">Film</button>
  <button type="button" data-sort="year" aria-pressed="false">Newest first</button>
  <output aria-live="polite" id="count">12 pieces</output>
</div>
<div class="shelf" id="shelf">
  <figure class="item" data-kind="print" data-year="2019" style="--c:#e8a33d"><b>Ochre field</b><span>Print, 2019</span></figure>
  <!-- every card carries its kind and year as data attributes -->
</div>
```

```css
.shelf { position: relative; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(240px, 40vw), 1fr)); gap: 16px; }
.shelf [hidden] { display: none; }
.bar { display: none; } .js .bar { display: flex; }
```

```js
const shelf = document.getElementById('shelf'), count = document.getElementById('count');
const items = [...shelf.children];
const hasFlip = !!(window.gsap && window.Flip);
if (hasFlip) gsap.registerPlugin(Flip);
let tl = null, filter = 'all', sorted = false;

function arrange() {
  items.forEach(el => { el.hidden = filter !== 'all' && el.dataset.kind !== filter; });
  const order = sorted ? [...items].sort((a, b) => b.dataset.year - a.dataset.year) : items;
  order.forEach(el => shelf.append(el));
  count.textContent = items.filter(el => !el.hidden).length + ' pieces';
}

function update() {
  if (!hasFlip || !motionOK()) return arrange();
  const height = shelf.offsetHeight;                // keep the footer still: the box tweens too
  const state = Flip.getState(items, { props: 'opacity' });
  tl?.progress(1);                                  // settle an interrupted run before re-laying out
  arrange();
  tl = Flip.from(state, {
    duration: .62, ease: 'power3.inOut', absolute: true, scale: true,
    stagger: { amount: .1, from: 'start' },
    onEnter: els => gsap.fromTo(els, { opacity: 0, scale: .9 }, { opacity: 1, scale: 1, duration: .42, delay: .22, ease: 'power3.out', overwrite: true }),
    onLeave: els => gsap.to(els, { opacity: 0, scale: .9, duration: .24, ease: 'power2.in', overwrite: true }),
  });
  gsap.fromTo(shelf, { height }, { height: shelf.offsetHeight, duration: .62, ease: 'power3.inOut', clearProps: 'height', overwrite: true });
}

document.querySelector('.bar').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.filter) {
    filter = b.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(x => x.setAttribute('aria-pressed', x === b));
  } else {
    sorted = !sorted;
    b.setAttribute('aria-pressed', sorted);
  }
  update();
});
```

- **Heavy and slow:** 1s `power4.inOut`, `stagger: { amount: .25, from: 'center' }`.
- **Snappy and mechanical:** .28s `power2.out`, no stagger, `scale: false`, enterers with no delay.
- **Soft and organic:** .8s `back.out(1.2)`, `stagger: { amount: .15, from: 'random' }`.
- **What sets the character:** the stagger pattern more than the duration. `from: 'start'` reads as a reshuffle, `'center'` as a burst.
- **Touch:** the grid drops to two columns through the `min()` in `minmax`, so items travel less. Keep filters as buttons at 44px or more on touch, and leave scrolling free during the move.
- **Fallback:** the filter bar is hidden until `.js`, so without JS every card shows. If GSAP fails to load, or under reduced motion, `arrange()` runs directly. The count is `aria-live`, so screen readers hear the result.
- **Goes wrong:** a CSS `transition` on `transform` fights Flip on every frame. Not tweening the container makes the footer jump. Capturing state from visible cards only leaves leavers and enterers with no first position, so pass the full array. Calling `Flip.from` while a run is active without `tl?.progress(1)` strands cards mid-air.

## 7. Modal and sheet with depth

The page recedes behind a dialog, which gives the layer real depth. The same `<dialog>` becomes a draggable bottom sheet on a phone. A small product confirm uses the same markup with none of the theatre.

- **Use the deep version** for a task that deserves the whole screen, such as booking or checkout. **Use the quiet version** for confirms and anything in a product.
- **Numbers, deep:** page to `scale(.94) translateY(10px)` with 16px radius, .55s `--out`. Dialog from `translateY(36px) scale(.97)`, .55s `--out`, opacity .22s linear. Backdrop to 45% ink, .3s. **Quiet:** 180 ms in, 120 ms out, `scale(.98)`, page still. **Sheet:** below 640px, from `translateY(100%)`. Closes past 33% of its height or above .6 px/ms.

```html
<div class="page" id="page">
  <!-- the opener is a real link to the section -->
  <a class="btn" href="#details" data-dialog="sheet">Reserve a seat</a>
<section id="details" data-dialog-body><div class="grab" aria-hidden="true"></div><div class="dlg-pad">
  <h2>Reserve a seat</h2><p>Saturday, 7 pm. Twelve seats, four left.</p>
  <form method="dialog"><button class="btn">Done</button></form>
</div></section>
</div>
<dialog class="deep" id="sheet" aria-label="Reserve a seat"></dialog>
```

```css
html { background: #0e0d0b; scrollbar-gutter: stable; }  /* the backdrop of the receded page; no shift on lock */
.page { min-height: 100dvh; transition: transform .55s var(--out), border-radius .55s var(--out); }
html:has(dialog.deep[open]) { overflow: hidden; }
html:has(dialog.deep[open]) .page { transform: scale(.94) translateY(10px); border-radius: 16px; overflow: clip; }

dialog { padding: 0; border: 0; color: inherit; background: #fffaf0; border-radius: 16px; width: min(560px, calc(100vw - 32px)); }
dialog.deep {
  opacity: 0; transform: translateY(36px) scale(.97);
  transition: opacity .22s linear, transform .55s var(--out), overlay .55s allow-discrete, display .55s allow-discrete;
}
dialog.deep[open] { opacity: 1; transform: none; }
dialog::backdrop { background: rgb(14 13 11 / 0); transition: background .3s linear, overlay .55s allow-discrete, display .55s allow-discrete; }
dialog[open]::backdrop { background: rgb(14 13 11 / .45); }

/* Product dialog: 180 in, 120 out, the page stays still. */
dialog.quiet {
  opacity: 0; transform: scale(.98);
  transition: opacity .12s linear, transform .12s var(--ui-exit), overlay .12s allow-discrete, display .12s allow-discrete;
}
dialog.quiet[open] { opacity: 1; transform: none; transition-duration: .18s; transition-timing-function: linear, var(--ui); }
dialog.quiet::backdrop { transition-duration: .15s; }

@starting-style {
  dialog.deep[open] { opacity: 0; transform: translateY(36px) scale(.97); }
  dialog.quiet[open] { opacity: 0; transform: scale(.98); }
  dialog[open]::backdrop { background: rgb(14 13 11 / 0); }
}

@media (max-width: 640px) {                       /* below this the dialog is a bottom sheet */
  dialog.deep { margin: auto 0 0; width: 100%; max-width: none; border-radius: 16px 16px 0 0; transform: translateY(100%); padding-bottom: env(safe-area-inset-bottom); }
  @starting-style { dialog.deep[open] { opacity: 1; transform: translateY(100%); } }
  dialog.deep .grab { display: block; height: 28px; margin: 0; touch-action: none; cursor: grab; }
  dialog.deep .grab::after { content: ''; display: block; width: 40px; height: 4px; margin: 12px auto; border-radius: 2px; background: #b9ae98; }
}
@media (prefers-reduced-motion: reduce) {
  html:has(dialog.deep[open]) .page { transform: none; border-radius: 0; }
  .page, dialog, dialog::backdrop { transition-duration: .01ms !important; }
}
```

```js
const page = document.getElementById('page');

// Without JS the sections sit in the page and the links jump to them. With JS they move into dialogs.
document.querySelectorAll('[data-dialog]').forEach(link => {
  const d = document.getElementById(link.dataset.dialog);
  d.append(document.querySelector(link.hash));
  link.addEventListener('click', e => {
    e.preventDefault();
    // Scale around the middle of the viewport, not the top of a long document.
    if (d.classList.contains('deep')) page.style.transformOrigin = `50% ${scrollY + innerHeight / 2}px`;
    d.showModal();
  });
  d.addEventListener('click', e => { if (e.target === d) d.close(); });  // backdrop click
});

function dragToClose(d) {
  const grab = d.querySelector('.grab');
  if (!grab) return;
  let y0 = 0, t0 = 0, dy = 0;
  grab.addEventListener('pointerdown', e => {
    grab.setPointerCapture(e.pointerId);
    y0 = e.clientY; t0 = e.timeStamp; dy = 0;
    d.style.transition = 'none';                 // the sheet tracks the finger at 0 ms
  });
  grab.addEventListener('pointermove', e => {
    if (!grab.hasPointerCapture(e.pointerId)) return;
    dy = Math.max(0, e.clientY - y0);
    d.style.transform = `translateY(${dy}px)`;
  });
  const release = e => {
    const fast = dy / (e.timeStamp - t0) > .6, far = dy > d.offsetHeight * .33;
    d.style.transition = d.style.transform = '';  // CSS takes over from wherever the finger stopped
    if (fast || far) d.close();
  };
  grab.addEventListener('pointerup', release);
  grab.addEventListener('pointercancel', release);
}
dragToClose(document.getElementById('sheet'));
```

- **Heavy and slow:** page to `scale(.9)`, .8s `cubic-bezier(.16,1,.3,1)`, backdrop 60%.
- **Snappy:** page to `scale(.97)`, .28s `--ui`, no radius change.
- **Soft:** the page stays still and dims, dialog rises 16px over .45s `cubic-bezier(.4,0,.2,1)`.
- **What sets the character:** how far the page falls back, and what colour shows around it.
- **Touch:** the sheet tracks the finger at 0 ms with `transition: none`, then hands the transform back to CSS, which runs from wherever the finger stopped. Keep `touch-action: none` on the grab bar only, so sheet content still scrolls. Pad with `env(safe-area-inset-bottom)`.
- **Fallback:** without JS the sections stay in the page and the links jump to them. Browsers without `overlay` transitions lose only the exit animation. Reduced motion keeps the page still and cuts the duration to nothing.
- **Goes wrong:** scaling the page around its top makes a long document fly upward, so set `transform-origin` to the middle of the viewport as above. Full-screen `backdrop-filter` drops frames on phones, so use a flat tint. A hand-built focus trap misses cases that `showModal()` already handles. Removing the scrollbar shifts the layout, so keep `scrollbar-gutter: stable`.

# Part two: product UI

These eight stay silent until something really changes. Strict limits are stated in each. If you are tempted to add polish, go back to the rules in [Two speeds](#two-speeds-marketing-and-product).

## 8. Number ticking

A value that changes while you watch moves to its new value, which draws the eye to the change without a badge.

- **Use** only when the value really changes during a session. **Never** count up from zero on load in a product, because it delays the one thing the user came to read. That move belongs on a marketing page, once, at 1400 to 2000 ms.
- **Numbers:** interpolate over 400 ms with quart out. Rolling digits .42s `--ui`. Any value reached by rapid updates interrupts from where it is, never from the start.

```html
<div class="panel kpi"><div class="muted">Revenue, interpolated</div><div class="big num" id="rev" data-value="48210">$48,210</div></div>
<div class="panel kpi"><div class="muted">Orders, rolling digits</div><div class="big num" id="orders">1,284</div></div>
```

```css
.num { font-variant-numeric: tabular-nums; }      /* digits must not change width while they move */
.roll { display: inline-flex; line-height: 1.15; height: 1.15em; overflow: clip;
  mask: linear-gradient(transparent, #000 12%, #000 88%, transparent); }
.roll .d { display: block; transition: transform .42s var(--ui); transform: translateY(calc(var(--n, 0) * -1.15em)); }
.roll .d b { display: block; height: 1.15em; font-weight: inherit; }
@media (prefers-reduced-motion: reduce) { .roll .d { transition: none; } }
```

```js
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const count = new Intl.NumberFormat('en-US');

// Interpolate, for values whose exact digits nobody needs mid-flight. Interrupts from where it is.
function tick(el, to, format, ms = 400) {
  const from = el._shown ?? +el.dataset.value, t0 = performance.now();
  cancelAnimationFrame(el._raf);
  el.dataset.value = to;
  const write = v => { el._shown = v; el.textContent = format(v); };
  if (!motionOK() || document.hidden || from === to) return write(to);
  (function step(now) {
    const p = Math.min(1, (now - t0) / ms);
    write(p === 1 ? to : from + (to - from) * (1 - (1 - p) ** 4));
    if (p < 1) el._raf = requestAnimationFrame(step);
  })(t0);
}

// Rolling digits, for counters. One 0-9 column per digit, matched from the right so units stay put.
function slot(ch) {
  const s = document.createElement('span');
  if (/\d/.test(ch)) { s.className = 'roll'; s.innerHTML = `<span class="d">${[...'0123456789'].map(n => `<b>${n}</b>`).join('')}</span>`; }
  else s.textContent = ch;
  return s;
}
function roll(el, text) {
  const first = !el.querySelector('.roll');       // the first call replaces the server text, with no count-up
  if (first) el.textContent = '';
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', text);
  const chars = [...text].reverse(), slots = [...el.children].reverse();
  chars.forEach((ch, i) => {
    const isDigit = /\d/.test(ch);
    if (!slots[i] || slots[i].matches('.roll') !== isDigit) {
      const fresh = slot(ch);
      slots[i] ? slots[i].replaceWith(fresh) : el.prepend(fresh);
      slots[i] = fresh;
      if (!first) fresh.getBoundingClientRect();  // commit --n: 0 so a new digit rolls in
    }
    if (isDigit) slots[i].firstChild.style.setProperty('--n', ch);
    else slots[i].textContent = ch;
  });
  slots.slice(chars.length).forEach(s => s.remove());
}

// tick(document.getElementById('rev'), 48392, money.format);
// roll(document.getElementById('orders'), count.format(1285));
```

- **Interpolated:** best for money and totals, where nobody reads the digits in flight.
- **Odometer:** digit columns, for counts where each increment means an event. Add `steps(8)` for a mechanical flip.
- **Flash only:** no movement, the background tints for 600 ms linear. Use it in dense tables, where 40 moving numbers would be noise.
- **Touch:** nothing changes. Keep tap updates under 300 ms if the user caused them.
- **Fallback:** the real number is in the HTML, so no script is needed to read it. Under reduced motion or in a hidden tab, `tick()` writes the final value. `roll()` swaps the server text for columns on its first call, showing the same number with no movement, and sets `aria-label` so a screen reader gets one number, not ten columns.
- **Goes wrong:** proportional digits jitter while they change, so `tabular-nums` is required. Animating on every poll when the value did not change makes the page twitch. `aria-live` on an interpolated element reads out every frame.

## 9. Chart draw-in

A chart draws once, the first time it is really seen, then updates by morphing. New data should never redraw from the left.

- **Use** on first view of a chart. **Avoid** on every filter change, where the morph is the right answer, and on sparkline grids, which should just appear.
- **Numbers:** line and area reveal by `clip-path` over .6s `--ui`. Bars `scaleY` over .4s with 18 ms stagger. Observer threshold .4. Data updates morph over 240 to 260 ms with no stagger.

```html
<div class="chart">
  <svg viewBox="0 0 720 220" preserveAspectRatio="none" role="img" aria-label="Throughput, rising from 35 to 84 percent">
    <g class="plot"><path class="area" d="M0,143.0 L65,127.6 L131,136.4 L196,110.0 L262,96.8 L327,105.6 L393,85.8 L458,92.4 L524,66.0 L589,74.8 L655,48.4 L720,35.2 L720,220 L0,220 Z"/><path class="line" d="M0,143.0 L65,127.6 L131,136.4 L196,110.0 L262,96.8 L327,105.6 L393,85.8 L458,92.4 L524,66.0 L589,74.8 L655,48.4 L720,35.2"/></g>
  </svg>
</div>
<div class="chart"><div class="bars"><i style="--v:.5"></i><i style="--v:.62"></i><i style="--v:.44"></i><i style="--v:.7"></i></div></div>
```

```css
.plot { clip-path: inset(-8px 0 -8px 0); }
.bars { display: flex; align-items: end; gap: 4px; height: 160px; }
.bars i { flex: 1; height: 100%; background: #2a6f5e; border-radius: 2px 2px 0 0; transform-origin: 50% 100%;
  transform: scaleY(var(--v)); transition: transform .24s var(--ui); }

/* .await only exists once the observer below is running, so a dead script cannot hide a chart. */
.await .plot { clip-path: inset(-8px 100% -8px 0); }
.await .bars i { transform: scaleY(0); }
.draw .plot { transition: clip-path .6s var(--ui); }
.draw .bars i { transition: transform .4s var(--ui); transition-delay: calc(var(--i, 0) * 18ms); }
```

```js
// Draw once, the first time a chart is really seen.
const charts = document.querySelectorAll('.chart');
if (motionOK() && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    e.target.classList.add('draw');
    e.target.classList.remove('await');
    setTimeout(() => e.target.classList.remove('draw'), 1200);  // updates go back to the fast timing
  }), { threshold: .4 });
  charts.forEach(c => {
    c.querySelectorAll('.bars i').forEach((b, i) => b.style.setProperty('--i', i));
    c.classList.add('await');
    io.observe(c);
  });
}

// New data morphs the existing line. It never redraws from the left.
const W = 720, H = 220;
const toPath = pts => 'M' + pts.map((v, i) => `${(i * W / (pts.length - 1)).toFixed(1)},${(H - v * H).toFixed(1)}`).join(' L');
function morphLine(chart, to, ms = 260) {
  const line = chart.querySelector('.line'), area = chart.querySelector('.area');
  const from = chart._pts.slice(), t0 = performance.now();
  cancelAnimationFrame(chart._raf);
  const draw = pts => {
    chart._pts = pts;
    const d = toPath(pts);
    line.setAttribute('d', d);
    area.setAttribute('d', `${d} L${W},${H} L0,${H} Z`);
  };
  if (!motionOK()) return draw(to);
  (function step(now) {
    const p = Math.min(1, (now - t0) / ms), e = 1 - (1 - p) ** 3;
    draw(p === 1 ? to : from.map((v, i) => v + (to[i] - v) * e));
    if (p < 1) chart._raf = requestAnimationFrame(step);
  })(t0);
}

// Seed once with the values behind the first path, then pass new ones of the same length.
// chart._pts = [.35, .42, .38, .5]; morphLine(chart, [.8, .74, .76, .62]);
```

- **Clip reveal:** the default, reads left to right like time passing.
- **Baseline rise:** every point starts on the axis and rises 300 ms. Use it for comparisons, where shape matters more than sequence.
- **Fade:** 150 ms opacity only. Use it where six charts share a page.
- **Touch:** the observer works as is. Keep bars at 12 or fewer on a phone, so the 18 ms stagger stays under a quarter second.
- **Fallback:** `.await` is added by the script that removes it, so a dead script cannot hide a chart. Under reduced motion nothing is added and the chart is simply there. The SVG carries `role="img"` and an `aria-label` that states the trend.
- **Goes wrong:** `stroke-dashoffset` draws by path length, so steep sections run faster and the time axis lies, and it breaks with `vector-effect`, so clip instead. Redrawing from the left on each refresh makes the user lose the shape they were reading. Overshoot on bars crosses the axis and suggests values that do not exist.

## 10. List insertion and reorder

Rows move to their new positions so the eye can follow, and the held row sticks to the pointer. A new row announces where it landed.

- **Use** for task lists, boards and settings. **Avoid** on tables that re-sort 10,000 rows, where only the header arrow should change.
- **Numbers:** neighbours 180 ms `--ui`, 150 ms during a drag. New row from `translateY(-4px)`, plus a tint fading over 700 ms linear. Removal fades 90 ms, then the gap closes. The held row has 0 ms latency.

```html
<ol class="list" id="list">
  <li data-p="2"><button class="grip" type="button" aria-label="Reorder Update changelog">⋮⋮</button><span>Update changelog</span><span class="pri">P2</span><button class="rm" type="button">Remove</button></li>
  <!-- more rows -->
    </ol>
<p class="muted" id="status" aria-live="polite"></p>
```

```css
.list { position: relative; }
.grip { touch-action: none; }                     /* the grip drags, the rest of the row scrolls */
@media (pointer: coarse) { .grip { width: 44px; height: 44px; } }
.list li.held { position: relative; z-index: 2; box-shadow: 0 6px 20px rgb(0 0 0 / .14); border-radius: 6px; }
```

```js
const list = document.getElementById('list'), status = document.getElementById('status');
const EASE = 'cubic-bezier(.2,0,0,1)';

function insert(row) {
  flip(list, () => list.prepend(row));
  row.animate({ backgroundColor: ['#fff6d6', '#fff'] }, { duration: 700, easing: 'linear' });  // shows where it landed
}
async function remove(row) {
  await row.animate({ opacity: [1, 0] }, { duration: 90, easing: 'linear', fill: 'forwards' }).finished;
  flip(list, () => row.remove());
}
list.addEventListener('click', e => { if (e.target.closest('.rm')) remove(e.target.closest('li')); });

// Keyboard: moving a focused node blurs it, so put focus back.
list.addEventListener('keydown', e => {
  const grip = e.target.closest('.grip');
  if (!grip || !e.altKey || !/^Arrow(Up|Down)$/.test(e.key)) return;
  e.preventDefault();
  const row = grip.closest('li'), up = e.key === 'ArrowUp';
  const other = up ? row.previousElementSibling : row.nextElementSibling;
  if (!other) return;
  flip(list, () => up ? other.before(row) : other.after(row));
  grip.focus();
  status.textContent = `Moved to position ${[...list.children].indexOf(row) + 1} of ${list.children.length}`;
});

// Pointer: the held row tracks the finger at 0 ms, only its neighbours animate.
list.addEventListener('pointerdown', e => {
  const grip = e.target.closest('.grip');
  if (!grip) return;
  const row = grip.closest('li');
  let y0 = e.clientY;
  grip.setPointerCapture(e.pointerId);
  row.classList.add('held');
  const move = ev => {
    const dy = ev.clientY - y0, mid = row.offsetTop + dy + row.offsetHeight / 2;
    row.style.transform = `translateY(${dy}px)`;
    const prev = row.previousElementSibling, next = row.nextElementSibling;
    const past = el => el.offsetTop + el.offsetHeight / 2;  // offsetTop ignores transforms, so no flicker
    const swap = next && mid > past(next) ? next : prev && mid < past(prev) ? prev : null;
    if (!swap) return;
    const before = row.offsetTop;
    flip(list, () => swap === next ? next.after(row) : prev.before(row), { skip: row, duration: 150 });
    y0 += row.offsetTop - before;
    row.style.transform = `translateY(${ev.clientY - y0}px)`;
  };
  const up = () => {
    grip.removeEventListener('pointermove', move);
    grip.removeEventListener('pointerup', up);
    grip.removeEventListener('pointercancel', up);
    const from = row.getBoundingClientRect().top;
    row.style.transform = '';
    row.classList.remove('held');
    if (motionOK()) row.animate({ transform: [`translateY(${from - row.getBoundingClientRect().top}px)`, 'none'] }, { duration: 150, easing: EASE });
  };
  grip.addEventListener('pointermove', move);
  grip.addEventListener('pointerup', up);
  grip.addEventListener('pointercancel', up);
});
```

- **Dense:** 120 ms, no tint, for tables of many rows.
- **Board:** 220 ms with a held card at `scale(1.02)` and a deeper shadow, for kanban.
- **Highlight only:** no travel, the row tints in place. Use it when rows re-sort from a live feed.
- **Touch:** drag only from the grip, which has `touch-action: none`, so the rest of the row scrolls. Grips are 32px for a mouse and 44px on touch.
- **Fallback:** a server-rendered `<ol>` reads fine with no script. Offer Alt plus arrow keys, which must return focus because moving a node blurs it, and announce the new position in an `aria-live` region. Under reduced motion `flip()` applies the change and returns.
- **Goes wrong:** animating `height` on removal reflows every row on every frame. A framework that re-creates rows breaks FLIP, because the old and new elements differ, so use stable keys. Reading `getBoundingClientRect` for the drag threshold flickers while neighbours animate, so read `offsetTop`, which ignores transforms.

## 11. Toast stack

Messages stack behind each other at the corner of the screen, fan out on hover, and pause so nobody loses one they are reading.

- **Use** for background results, such as a save or an export. **Avoid** for errors the user must act on, which belong beside the field, and for anything already visible in place.
- **Numbers:** in 200 ms `--ui`, from `translateY(14px) scale(.97)`. Out 140 ms `--ui-exit`, sliding off the right. Depth step: 10px, 5% scale, 12% opacity. Three visible. Life 4 s, errors stay. Swipe dismisses past 40% or .5 px/ms.

```html
<div id="toasts" role="region" aria-label="Notifications" aria-live="polite"></div>
```

```css
#toasts { position: fixed; right: 16px; bottom: calc(16px + env(safe-area-inset-bottom)); width: min(360px, calc(100vw - 32px)); height: 0; z-index: 60; }
.toast { position: absolute; inset: auto 0 0; display: flex; gap: 12px; align-items: center; padding: 12px 14px; touch-action: pan-y; outline-offset: 2px;
  background: #1c1c1a; color: #f4f4f0; border-radius: 10px; box-shadow: 0 6px 24px rgb(0 0 0 / .2); transform-origin: 50% 100%;
  max-height: var(--front, none); overflow: hidden;
  transform: translateY(calc(var(--i) * -10px)) scale(calc(1 - var(--i) * .05));
  opacity: calc(1 - var(--i) * .12);
  transition: transform .2s var(--ui), opacity .2s var(--ui); }
.toast::after { content: ''; position: absolute; inset: -8px 0 0; z-index: -1; }  /* bridges the gaps so hover does not flicker */
#toasts:hover .toast, #toasts:focus-within .toast { transform: translateY(calc(var(--y) * -1)); opacity: 1; max-height: none; overflow: visible; }
.toast.cut { opacity: 0; pointer-events: none; }                  /* past the visible three */
.toast.out { opacity: 0; transform: translateX(calc(100% + 16px)); pointer-events: none;
  transition: transform .14s var(--ui-exit), opacity .14s var(--ui-exit); }
.toast.drag { transition: none; }
@starting-style { .toast { opacity: 0; transform: translateY(14px) scale(.97); } }
@media (prefers-reduced-motion: reduce) { .toast { transition-duration: .01ms !important; } }
```

```js
const region = document.getElementById('toasts'), MAX = 3, GAP = 8;

function layout() {
  const live = [...region.children].filter(t => !t.classList.contains('out')).reverse();  // newest first
  let y = 0;
  region.style.setProperty('--front', live[0] ? live[0].scrollHeight + 'px' : 'none');
  live.forEach((t, i) => {
    t.style.setProperty('--i', Math.min(i, MAX - 1));
    t.style.setProperty('--y', y + 'px');
    t.classList.toggle('cut', i >= MAX);
    y += t.scrollHeight + GAP;
  });
}

function dismiss(t) {
  if (t.classList.contains('out')) return;
  clearTimeout(t._timer);
  t.classList.add('out');
  layout();
  setTimeout(() => t.remove(), motionOK() ? 170 : 0);
}

function toast(text, { error = false, action, ms = 4000 } = {}) {
  const t = document.createElement('div');
  t.className = 'toast' + (error ? ' err' : '');
  t.tabIndex = 0;                                 // a tap focuses it, which fans the stack out on touch
  if (error) t.setAttribute('role', 'alert');
  t.append(Object.assign(document.createElement('span'), { textContent: text }));
  if (action) {
    const b = Object.assign(document.createElement('button'), { type: 'button', textContent: action.label });
    b.onclick = () => { action.run(); dismiss(t); };
    t.append(b);
  }
  t._left = ms;
  t._run = () => { if (error) return; t._at = performance.now(); t._timer = setTimeout(() => dismiss(t), t._left); };
  t._hold = () => { clearTimeout(t._timer); t._left -= performance.now() - t._at; };
  swipe(t);
  region.append(t);
  layout();
  if (!region.matches(':hover, :focus-within')) t._run();
  return t;
}

// Hover and keyboard focus pause every timer, so nobody loses a message they are reading.
const each = fn => [...region.children].forEach(t => t.classList.contains('out') || fn(t));
region.addEventListener('pointerenter', () => each(t => t._hold()));
region.addEventListener('pointerleave', () => each(t => t._run()));
region.addEventListener('focusin', e => { if (!region.contains(e.relatedTarget)) each(t => t._hold()); });
region.addEventListener('focusout', e => { if (!region.contains(e.relatedTarget)) each(t => t._run()); });

function swipe(t) {
  let x0 = 0, t0 = 0, dx = 0;
  t.addEventListener('pointerdown', e => { if (e.target.closest('button')) return; x0 = e.clientX; t0 = e.timeStamp; dx = 0; t.setPointerCapture(e.pointerId); t.classList.add('drag'); });
  t.addEventListener('pointermove', e => {
    if (!t.hasPointerCapture(e.pointerId)) return;
    dx = Math.max(0, e.clientX - x0);
    t.style.transform = `translateX(${dx}px)`;
    t.style.opacity = 1 - dx / t.offsetWidth;
  });
  const end = e => {
    if (!t.classList.contains('drag')) return;
    t.classList.remove('drag');
    const gone = dx > t.offsetWidth * .4 || dx / (e.timeStamp - t0) > .5;
    t.style.transform = t.style.opacity = '';
    if (gone) dismiss(t);
  };
  t.addEventListener('pointerup', end);
  t.addEventListener('pointercancel', end);
}

// toast('Changes saved');
// toast('Moved 3 items to Archive', { action: { label: 'Undo', run: restore } });
// toast('Could not reach the server', { error: true, action: { label: 'Dismiss', run() {} } });
```

- **Stacked:** the default, keeps the corner tidy under bursts.
- **Listed:** always fanned, `--i` at 0, for tools where every message matters.
- **Inline:** no stack, one message replaces the last with a 120 ms cross-fade, for simple apps.
- **Touch:** `:hover` does not exist, so `tabIndex` makes a tap focus the toast and `:focus-within` fans the stack. `touch-action: pan-y` lets the page scroll while a sideways swipe dismisses.
- **Fallback:** this is a script-only feature, so the outcome must also be visible where the action happened. Errors use `role="alert"`. Under reduced motion transitions shrink to nothing, and the timers still run.
- **Goes wrong:** timers that run while the stack is hovered delete the message being read, so hover and focus both pause them. `overflow: hidden` left on a fanned toast clips the `::after` bridge, hover drops in the gaps and the stack collapses under the pointer, so release it on hover as above. Letting errors time out loses them.

## 12. Skeleton to content

A placeholder holds the exact shape of the content, then cross-fades into it. Done well it removes the sense of waiting. Done badly it adds a flash to something that was already fast.

- **Use** for loads that normally take over 300 ms. **Avoid** on anything faster, and on refreshes where the old content can stay on screen.
- **Numbers:** show nothing for the first 180 ms. Once shown, hold at least 320 ms so it cannot flash. Cross-fade 160 ms `--ui`. Shimmer 1.4s linear.

```html
<div class="region" id="team" aria-live="polite">
  <div class="real"><!-- the server-rendered list lives here --></div>
      <div class="skel" aria-hidden="true">
        <!-- one per expected row, same structure as the real row -->
        <div class="person"><span class="bone circle"></span><div><span class="bone line" style="width:38%"></span><span class="bone line" style="width:24%"></span></div></div>
      </div>
    </div>
```

```css
.region { display: grid; }
.region > * { grid-area: 1 / 1; min-width: 0; }   /* both layers share one cell, so height cannot jump */
.skel { opacity: 0; pointer-events: none; visibility: hidden; transition: opacity .16s var(--ui), visibility 0s .16s; }
.real { transition: opacity .16s var(--ui); }
.region.loading .skel { opacity: 1; visibility: visible; transition-delay: 0s; }
.region.loading .real { opacity: 0; }

.bone { position: relative; overflow: hidden; display: block; background: #ececea; border-radius: 4px; }
.bone.circle { width: 40px; height: 40px; border-radius: 50%; }
.bone.line { height: .8em; margin: calc((1lh - .8em) / 2) 0; }   /* same line box as the real text */
.region.loading .bone::after { content: ''; position: absolute; inset: 0; transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgb(255 255 255 / .7), transparent); animation: shimmer 1.4s linear infinite; }
@keyframes shimmer { to { transform: translateX(100%); } }
@media (prefers-reduced-motion: reduce) { .region.loading .bone::after { animation: none; } .skel, .real { transition: none; } }
```

```js
const wait = ms => new Promise(r => setTimeout(r, ms));

// Nothing for fast loads. No flash for loads that land just after the skeleton appears.
async function load(region, request, { delay = 180, hold = 320 } = {}) {
  let shownAt = 0;
  region.setAttribute('aria-busy', 'true');
  const timer = setTimeout(() => { region.classList.add('loading'); shownAt = performance.now(); }, delay);
  try {
    const html = await request();
    clearTimeout(timer);
    if (shownAt) await wait(hold - (performance.now() - shownAt));
    region.querySelector('.real').innerHTML = html;  // swapped while hidden, then cross-faded
    return true;
  } catch {
    clearTimeout(timer);
    if (shownAt) await wait(hold - (performance.now() - shownAt));
    return false;                                 // the old content comes back, nothing is lost
  } finally {
    region.classList.remove('loading');
    region.removeAttribute('aria-busy');
  }
}

// const ok = await load(team, () => fetch('/team').then(r => r.ok ? r.text() : Promise.reject()));
```

- **Shimmer:** the default, for feeds and lists.
- **Pulse:** opacity between 1 and .6 over 1.2s, quieter, for several regions at once.
- **Static:** no animation at all, for dense tables, where motion across many rows is tiring.
- **Touch:** the same. Avoid shimmer in long lists on low-end phones and fall back to pulse.
- **Fallback:** render real content on the server into `.real`, so the skeleton is only ever a refresh state. `aria-busy` tells assistive tech, and a failed request brings the old content back with a message. Under reduced motion the shimmer stops and the bones stay.
- **Goes wrong:** a skeleton that differs from the content makes the page jump on arrival, so stack both in one grid cell and match `lh`. Showing it instantly flashes on every fast response, which is why `delay` and `hold` exist. Giving every bone its own shimmer phase looks like static, so keep them in sync.

## 13. Optimistic update

The interface changes on the click and the server catches up. If the server refuses, the change undoes itself and says why. The app feels instant because it is.

- **Use** for reversible, low-stakes actions such as star, archive, rename and reorder. **Never** for payments, sends, or deletes that others can see.
- **Numbers:** press 80 ms to `scale(.88)`. Fill 120 ms linear. Say nothing for 400 ms, then dim to .55 opacity over 200 ms. Rollback shake is 3px over 180 ms, once.

```html
<ul class="msgs" id="msgs">
<li><button class="star" type="button" aria-pressed="false" aria-label="Star Invoice 2041"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.3L12 17l-5.6 3.2 1.3-6.3L3 9.6l6.3-.7z"/></svg></button><span>Invoice 2041 is ready</span><button class="arch" type="button">Archive</button></li>
</ul>
<p class="muted" id="note" role="status"></p>
```

```css
.star { width: 36px; height: 36px; border: 0; background: none; border-radius: 6px; cursor: pointer; display: grid; place-items: center; color: #a6a69e;
  transition: transform 80ms var(--ui); }
.star:active { transform: scale(.88); }           /* press answers at once, before any network */
@media (pointer: coarse) { .star { width: 44px; height: 44px; } }
.star svg { width: 18px; height: 18px; fill: transparent; stroke: currentColor; stroke-width: 1.6; transition: fill 120ms linear, color 120ms linear; }
.star[aria-pressed="true"] { color: #b7791f; }
.star[aria-pressed="true"] svg { fill: currentColor; }
.pending { opacity: .55; transition: opacity .2s linear; }  /* only after 400 ms without an answer */
.failed { color: #b42318; }
```

```js
const api = () => fetch('/api/change', { method: 'POST' }).then(r => r.ok || Promise.reject(r));  // your request
const list = document.getElementById('msgs'), note = document.getElementById('note');

// apply() runs in the same task as the click. Only the newest request for an element may settle it.
function optimistic(el, { apply, undo, send, say }) {
  const id = el._req = (el._req || 0) + 1;
  apply();
  const slow = setTimeout(() => el.classList.add('pending'), 400);
  const settle = fn => { clearTimeout(slow); if (id === el._req) { el.classList.remove('pending'); fn?.(); } };
  send().then(() => settle(), () => settle(() => {
    undo();
    say('That did not save. Your change was undone.');
    if (motionOK()) el.animate({ transform: ['none', 'translateX(-3px)', 'translateX(2px)', 'none'] }, { duration: 180, easing: 'linear' });
  }));
}

list.addEventListener('click', e => {
  const star = e.target.closest('.star');
  if (star) {
    const was = star.getAttribute('aria-pressed');
    const set = v => star.setAttribute('aria-pressed', v);
    optimistic(star, { apply: () => set(was === 'true' ? 'false' : 'true'), undo: () => set(was), send: api, say: t => note.textContent = t });
  }
  const arch = e.target.closest('.arch');
  if (arch) {
    const row = arch.closest('li'), next = row.nextElementSibling, prev = row.previousElementSibling;
    optimistic(row, {
      apply: () => flip(list, () => row.remove()),
      undo: () => flip(list, () => next?.isConnected ? next.before(row) : prev?.isConnected ? prev.after(row) : list.prepend(row)),
      send: api, say: t => note.textContent = t,
    });
  }
});
```

- **Silent:** no pending state at all, for fast internal tools.
- **Quiet pending:** the 400 ms dim above, the default.
- **Undo instead of confirm:** apply at once and offer Undo in a toast for 5 s, for archive and delete-like actions.
- **Touch:** `:active` needs a touch listener on some mobile browsers, so register an empty `touchstart` on the body if the press does not show. Targets are 36px for a mouse and 44px on touch.
- **Fallback:** render a real `<form>` that posts, and enhance it. Without JS the page submits and reloads. Under reduced motion the shake is skipped and the message remains.
- **Goes wrong:** a stale failure rolls back a newer change, so only the newest request may settle an element (`el._req`). Silent rollback makes data appear to vanish, so always say what happened. Rollback that reinserts by next sibling alone fails when two neighbours were archived, so fall back to the previous sibling. A spinner on every click undoes the whole point.

## 14. Command palette

The fastest surface in the app. It must feel as though it was already open, so the animation is barely there and the input takes keys on the first frame.

- **Use** in any tool with more than about ten actions. **Avoid** as the only way to reach something.
- **Numbers:** in 120 ms, out 80 ms, `scale(.985)` from the top edge. Height change 100 ms. Highlight 70 ms, and 0 under key repeat. Results swap in one frame with no fade and no stagger.

```html
<button class="btn" id="open-cmd" type="button">Search commands</button>
<dialog class="cmdk" id="cmdk" aria-label="Command palette">
  <input id="cmd-q" role="combobox" aria-expanded="true" aria-controls="cmd-list" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="Type a command">
  <div class="scroller" id="cmd-scroll"><ul id="cmd-list" role="listbox" aria-label="Results"><span class="hl" aria-hidden="true"></span></ul></div>
</dialog>
<p id="ran" role="status"></p>
```

```css
.cmdk { padding: 0; border: 1px solid #e0e0da; border-radius: 12px; background: #fff; color: inherit; box-shadow: 0 16px 48px rgb(0 0 0 / .18);
  width: min(560px, calc(100vw - 24px)); margin: 14dvh auto auto; overflow: hidden; transform-origin: 50% 0;
  opacity: 0; transform: scale(.985);
  transition: opacity 80ms linear, transform 80ms var(--ui-exit), overlay 80ms allow-discrete, display 80ms allow-discrete; }
.cmdk[open] { opacity: 1; transform: none; transition-duration: 120ms; transition-timing-function: linear, var(--ui); }
@starting-style { .cmdk[open] { opacity: 0; transform: scale(.985); } }
.cmdk::backdrop { background: rgb(0 0 0 / .18); }

.cmdk input { width: 100%; border: 0; border-bottom: 1px solid #ececea; padding: 14px 16px; font: inherit; font-size: 16px; outline: none; }
.scroller { position: relative; overflow: auto; overscroll-behavior: contain; height: 0; max-height: 40dvh; transition: height 100ms var(--ui); }
.cmdk ul { list-style: none; margin: 0; padding: 6px; position: relative; }
.cmdk li { position: relative; height: 36px; display: flex; align-items: center; padding: 0 10px; cursor: default; }
.cmdk li[aria-selected="true"] { font-weight: 500; }
.hl { position: absolute; left: 6px; right: 6px; top: 6px; height: 36px; border-radius: 7px; background: #f0f0ec;
  transform: translateY(var(--y, 0)); transition: transform 70ms var(--ui); }
.held .hl { transition: none; }                   /* key repeat: the highlight must never trail the keys */
.empty { padding: 20px 16px; color: #63635c; }
@media (max-width: 640px) { .cmdk { margin-top: 12px; } }  /* the keyboard owns the bottom of the screen */
@media (prefers-reduced-motion: reduce) { .cmdk, .scroller, .hl { transition: none; } }
#open-cmd { display: none; } .js #open-cmd { display: inline-block; }
```

```js
const cmdk = document.getElementById('cmdk'), q = document.getElementById('cmd-q');
const ul = document.getElementById('cmd-list'), scroller = document.getElementById('cmd-scroll'), hl = ul.querySelector('.hl');
const COMMANDS = ['New project', 'New issue', 'Open settings', 'Open billing', 'Invite teammate', 'Switch workspace', 'Toggle theme', 'Copy link', 'Sign out', 'Go to dashboard', 'Go to inbox', 'Show shortcuts'];
const ROW = 36;
let hits = [], sel = 0, returnTo = null;

function render() {
  const term = q.value.trim().toLowerCase();
  hits = COMMANDS.filter(c => c.toLowerCase().includes(term));
  sel = Math.min(sel, Math.max(0, hits.length - 1));
  ul.querySelectorAll('li').forEach(li => li.remove());
  ul.insertAdjacentHTML('beforeend', hits.map((c, i) => `<li role="option" id="cmd-${i}" data-i="${i}">${c}</li>`).join('') ||
    '<li class="empty" role="presentation">No matches</li>');
  scroller.style.height = Math.max(1, hits.length) * ROW + 12 + 'px';   // results swap in one frame, only the box eases
  hl.hidden = !hits.length;
  select(sel, false);
}
function select(i, scroll = true) {
  sel = i;
  ul.querySelectorAll('[aria-selected]').forEach(li => li.removeAttribute('aria-selected'));
  const li = ul.querySelector(`[data-i="${i}"]`);
  if (!li) return q.removeAttribute('aria-activedescendant');
  li.setAttribute('aria-selected', 'true');
  q.setAttribute('aria-activedescendant', li.id);
  hl.style.setProperty('--y', i * ROW + 'px');
  if (scroll) li.scrollIntoView({ block: 'nearest' });
}
function openCmd() { returnTo = document.activeElement; q.value = ''; sel = 0; render(); cmdk.showModal(); q.focus(); }
function run() { const c = hits[sel]; if (!c) return; cmdk.close(); document.getElementById('ran').textContent = 'Ran: ' + c; }

q.addEventListener('input', () => { sel = 0; render(); });
q.addEventListener('keydown', e => {
  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;
  e.preventDefault();
  if (e.key === 'Enter') return run();
  ul.classList.toggle('held', e.repeat);
  const n = hits.length;
  if (n) select((sel + (e.key === 'ArrowDown' ? 1 : -1) + n) % n);
});
q.addEventListener('keyup', () => ul.classList.remove('held'));
// pointermove, not mouseenter: a resting pointer must not steal the selection when the list scrolls.
ul.addEventListener('pointermove', e => { const li = e.target.closest('[data-i]'); if (li && +li.dataset.i !== sel) select(+li.dataset.i, false); });
ul.addEventListener('click', e => { const li = e.target.closest('[data-i]'); if (li) { select(+li.dataset.i, false); run(); } });
cmdk.addEventListener('close', () => returnTo?.focus?.());
cmdk.addEventListener('click', e => { if (e.target === cmdk) cmdk.close(); });
addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); cmdk.open ? cmdk.close() : openCmd(); }
});
document.getElementById('open-cmd').addEventListener('click', openCmd);
```

- **No animation:** instant open and close. Reasonable for power users, and the correct answer if there is any doubt.
- **Sliding highlight:** the default, shows direction between rows.
- **Fixed height:** no box animation, for long, stable result lists.
- **Touch:** dock to the top at 12px below 640px, because the keyboard owns the bottom. Tapping a row runs it. The `dvh` max height keeps results above the keyboard.
- **Fallback:** the palette is an accelerator, so every command must also exist as a real link or button on the page. The opener button is hidden until `.js`. Under reduced motion all transitions are off.
- **Goes wrong:** staggered results make typing feel slow, so results swap in one frame. Listening to `mouseenter` lets a resting pointer steal the selection as the list scrolls, so use `pointermove`. A highlight that animates under key repeat trails the keys, so turn it off while repeating.

## 15. Sidebar collapse

The sidebar shrinks to an icon rail, and the content slides over without rewrapping on every frame. The trick is that layout changes once, on the first frame, and only transform and clip move after that.

- **Use** in any app with a navigation rail. **Avoid** animating at all if the sidebar toggles many times an hour; a cut is fine.
- **Numbers:** 200 ms `--ui`. Labels leave in 70 ms, before the edge reaches them, and return in 120 ms. Drawer below 768px: 220 ms, scrim 180 ms. Rail tooltips wait 300 ms for the first, then appear at once for 400 ms while you sweep down the rail. They need their own fixed element, because a clipped panel cannot show them.

```html
<script>
  (() => {
    const r = document.documentElement;
    r.classList.add('js');
    try { if (localStorage.getItem('rail') === '1') r.dataset.rail = ''; } catch {}
  })();
</script>

<div class="shell" id="shell">
  <aside class="side" aria-label="Main"><div class="side-in">
    <div class="brand"><i></i><span class="label">Northwind</span></div>
    <nav>
      <a href="#inbox" aria-current="page"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13h5l2 3h4l2-3h5M5 5h14l2 8v6H3v-6z"/></svg><span class="label">Inbox</span></a>
      <!-- more links, same shape -->
    </nav>
  </div></aside>
  <div class="scrim" id="scrim"></div>
  <span class="tip" id="tip" hidden aria-hidden="true"></span>
  <main id="main"><header><button class="btn" id="toggle" type="button" aria-expanded="true" aria-controls="main">Toggle sidebar</button><h1>Inbox</h1></header></main>
</div>
```

```css
.shell { --side: 240px; display: grid; grid-template-columns: var(--side) minmax(0, 1fr); min-height: 100dvh; overflow-x: clip; }
[data-rail] .shell { --side: 56px; }

/* The cell snaps. A fixed 240px panel inside it is clipped, so only a clip edge moves. */
.side { position: relative; z-index: 2; }
.side-in { position: sticky; top: 0; width: 240px; height: 100dvh; background: #f4f4f1; overflow: hidden;
  clip-path: inset(0 calc(240px - var(--side)) 0 0); transition: clip-path 200ms var(--ui); }
.label { transition: opacity 120ms linear; }
[data-rail] .label { opacity: 0; transition-duration: 70ms; }   /* words leave first, before the edge reaches them */
main { min-width: 0; border-left: 1px solid #e3e3df; }

.scrim { display: none; }                         /* an in-flow grid child would push main to a second row */

@media (max-width: 767px) {                       /* a drawer over the page; the page does not move */
  .shell, [data-rail] .shell { grid-template-columns: minmax(0, 1fr); }
  .js .side { position: fixed; inset: 0 auto 0 0; width: 0; }
  .js .side-in, [data-rail] .side-in { clip-path: none; transform: translateX(-105%); transition: transform 220ms var(--ui); }
  .js [data-drawer] .side-in { transform: none; box-shadow: 0 0 40px rgb(0 0 0 / .2); }
  .js [data-rail] .label { opacity: 1; }
  .scrim { display: block; position: fixed; inset: 0; z-index: 1; background: rgb(0 0 0 / .3); opacity: 0; pointer-events: none; transition: opacity 180ms linear; }
  [data-drawer] .scrim { opacity: 1; pointer-events: auto; }
}
@media (prefers-reduced-motion: reduce) { .side-in, .label, .scrim { transition: none !important; } }
/* A clipped panel cannot show a tooltip, so one lives outside it. */
.tip { position: fixed; left: 64px; z-index: 3; padding: 4px 8px; border-radius: 6px; background: #1c1c1a; color: #fff; font-size: 13px; pointer-events: none; }
#toggle { display: none; } .js #toggle { display: inline-block; }
```

```js
const root = document.documentElement, shell = document.getElementById('shell'), main = document.getElementById('main');
const btn = document.getElementById('toggle'), phone = matchMedia('(max-width: 767px)');

function toggle() {
  if (phone.matches) return shell.toggleAttribute('data-drawer');
  const first = main.getBoundingClientRect().left;
  main.getAnimations().forEach(a => a.cancel());
  root.toggleAttribute('data-rail');
  const rail = root.hasAttribute('data-rail');
  btn.setAttribute('aria-expanded', !rail);
  try { localStorage.setItem('rail', rail ? '1' : '0'); } catch {}
  const dx = first - main.getBoundingClientRect().left;  // one layout pass, then transform only
  if (motionOK()) main.animate({ transform: [`translateX(${dx}px)`, 'none'] }, { duration: 200, easing: 'cubic-bezier(.2,0,0,1)' });
}
btn.addEventListener('click', toggle);
document.getElementById('scrim').addEventListener('click', () => shell.removeAttribute('data-drawer'));
addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === '\\') { e.preventDefault(); toggle(); }
  if (e.key === 'Escape') shell.removeAttribute('data-drawer');
});
phone.addEventListener('change', () => shell.removeAttribute('data-drawer'));
btn.setAttribute('aria-expanded', !root.hasAttribute('data-rail'));

// Rail tooltips wait 300 ms for the first one, then show at once while you sweep down the rail.
const tip = document.getElementById('tip');
let wait, warm = 0;
const showTip = a => {
  tip.textContent = a.querySelector('.label').textContent;
  tip.style.top = a.getBoundingClientRect().top + 6 + 'px';
  tip.hidden = false;
  warm = performance.now();
};
const hideTip = () => { clearTimeout(wait); tip.hidden = true; warm = performance.now(); };
const enter = e => {
  const a = e.target.closest('.side a');
  if (!a || !root.hasAttribute('data-rail') || phone.matches) return;
  clearTimeout(wait);
  performance.now() - warm < 400 ? showTip(a) : (wait = setTimeout(showTip, 300, a));
};
document.querySelector('.side').addEventListener('pointerover', enter);
document.querySelector('.side').addEventListener('focusin', enter);
document.querySelector('.side').addEventListener('pointerout', hideTip);
document.querySelector('.side').addEventListener('focusout', hideTip);
```

- **Clip and slide:** the default, for content-heavy pages.
- **Overlay rail:** the rail expands over the content on hover, nothing reflows, 160 ms. Use it on dense tables.
- **Instant:** no animation, for tools where users toggle constantly.
- **Touch:** below 768px it is a drawer over the page, and the page does not move. The scrim and Esc close it.
- **Fallback:** the inline script restores the rail before first paint, so a reload never shows it animating. The toggle is hidden until `.js`, so without JS the full sidebar shows. Under reduced motion the change is instant.
- **Goes wrong:** `transition: grid-template-columns` rewraps the paragraph on every frame, and that is what makes sidebars feel heavy. A scrim left as an in-flow grid child pushes `main` to a second row on desktop, so keep it `display: none` until the drawer query. A closed drawer's `box-shadow` bleeds onto the page edge, so apply it only when open.

# Checks before you ship

A scroll-through screenshot proves almost nothing about a transition. Run these by hand or in a script:

- Hold a frame mid-flight. `document.getAnimations().forEach(a => { a.pause(); a.currentTime = a.effect.getComputedTiming().endTime * .5; })` freezes everything, including view transition pseudo-elements, so you can look at the 50% frame. That is where mud, ghost text and hard seams show up.
- Interrupt it. Click twice fast, press Back during the animation, and resize while it is open. The state must follow the last action.
- Use real input for anything about clicks. `element.click()` bypasses hit testing, so it passes tests a real pointer fails.
- Load with JS off, then with `prefers-reduced-motion: reduce`. All content must be readable in both.
- Move focus by keyboard through the change. Focus must land on the new heading or return to its opener.
