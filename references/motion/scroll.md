# Scroll as the storytelling medium

Scroll is the one input every visitor already gives you, thousands of pixels of it. Treat it as a timeline the reader holds, not as a cue to fade things up. This chapter gives you the choices, the pacing, one shell, and fifteen recipes. Every code block was run in Chrome exactly as printed, on desktop and phone sizes, with JavaScript off, with the library blocked and under reduced motion.

## Contents

- [Choose a recipe](#choose-a-recipe)
- [Pace the page](#pace-the-page)
- [The shell every recipe plugs into](#the-shell-every-recipe-plugs-into)
- [What breaks when you mix libraries](#what-breaks-when-you-mix-libraries)
- Recipes: [1 Pinned scrub](#1-pinned-scrub-sequence), [2 Horizontal rail](#2-horizontal-pinned-gallery), [3 Stacked deck](#3-stacked-deck), [4 Sticky swap](#4-sticky-text-swap-beside-a-pinned-visual), [5 Parallax depth](#5-parallax-depth-layers), [6 Crop on pin](#6-image-scale-and-crop-on-pin), [7 Type on scroll](#7-type-that-grows-or-tracks-with-scroll), [8 Theme change](#8-whole-page-colour-theme-change), [9 SVG path](#9-svg-path-drawing), [10 Velocity marquee](#10-marquee-coupled-to-scroll-velocity), [11 Velocity skew](#11-velocity-skew), [12 Underlay footer](#12-sticky-underlay-footer-reveal), [13 Scroll data](#13-scroll-linked-numbers-and-data), [14 Canvas sequence](#14-image-sequence-scrub-on-canvas), [15 Native CSS](#15-native-css-with-animation-timeline)
- [Before you call it done](#before-you-call-it-done)

## Choose a recipe

Decide first what scroll is doing, because this one decision separates good scroll pages from tiring ones. **Scrubbed** means page position is animation position: stop scrolling and the animation stops, half done. **Triggered** means crossing a line starts something that then plays on its own clock. Scrub pictures, diagrams, numbers and big type, because a half-finished picture is still a picture. Trigger anything a person has to read, because people stop scrolling anywhere and a sentence caught mid-fade cannot be read.

| The section has to | Use | Not |
|---|---|---|
| Explain one object in 3 to 5 ordered states | 1 Pinned scrub | A rail: order and sameness fight |
| Let people browse 4 to 8 equal things | 2 Horizontal rail | A deck: eight full screens is a slog |
| Give 3 to 6 panels of real product or proof a full-screen moment each | 3 Stacked deck | A fade-up grid, or panels that hold one sentence |
| Walk through steps that need real reading | 4 Sticky swap | 1: scrubbed captions are unreadable |
| Open a page with a sense of place | 5 Parallax depth | Parallax on columns of text |
| Make one image the event | 6 Crop on pin | A plain scale-up, which looks like a zoom bug |
| Make a word or one sentence the event | 7 Type on scroll | 1: type is cheaper and hits harder |
| Mark a change of mood or chapter | 8 Theme change | A hard-edged coloured section |
| Connect ideas in a sequence, show a route | 9 SVG path | A numbered list with a line behind it |
| Add energy between sections | 10 Marquee, 11 Skew | Both on one screen |
| End the page with a sign-off | 12 Underlay footer | A footer that merely arrives |
| Make a statistic mean something | 13 Scroll data | A count-up that fires once and is forgotten |
| Show something rotating or changing that only film can show | 14 Canvas sequence | Autoplay video if the reader should steer it |

Use the lightest engine that does the job, in this order. **CSS alone** when the effect needs no measuring and no callbacks: sticky pins, snap, `animation-timeline` (recipe 15, and the base of 3 and 12). **A small plain script** when one value drives one transform: recipes 8, 10 and 11. **GSAP with ScrollTrigger** when several elements share a timeline, when a value must be measured, or when you need callbacks. Do not load GSAP for a page that only needs recipe 15.

Most product pages need one of these, usually 4 Sticky swap or a plain sticky header, and two or three is the ceiling. Recipes 5, 6, 7, 10, 11 and 14 are showy, so keep them for a brief that asks. The page's rhythm comes from what stays still.

## Pace the page

Count beats, not screens. A beat is one idea changing on screen, and it needs 60 to 100 lvh of scroll, with 80 as the default. That is about one firm trackpad swipe, or a few wheel notches. **Track height = pin distance + 100 lvh**, because the stage itself uses one screen of the track.

| Effect | Scroll per beat | Desktop track | Phone track |
|---|---|---|---|
| Pinned scrub, 4 beats | 80 lvh | 420 lvh | 340 lvh |
| Sticky swap, 4 steps | 75 lvh | 400 lvh | 340 lvh |
| Scroll data, one story | 280 lvh in all | 380 lvh | 300 lvh |
| Crop on pin, one reveal | 200 lvh in all | 300 lvh | 300 lvh |
| Type fill, one word | 160 lvh in all | 260 lvh | 260 lvh |
| Canvas sequence | 1 frame per 20 px | 96 frames, 330 lvh | 48 frames, 330 lvh |
| Horizontal rail | 1 px per px | rail overflow + 100 lvh | no pin |

Keep these limits:

- **One pin at most 400 lvh of travel** on desktop, 240 lvh on a phone. Past that, cut beats. Nobody reads the sixth.
- **At most one long pin (over 250 lvh) per page, and pins take at most a third of total scroll.** Put at least one free-scrolling screen between two pins, or the page feels stuck.
- **Open and close every pin with a dead zone.** Start the first move about 4 percent in, so the reader feels the page stop before anything moves. Hold the final state for about 10 percent of the pin, so the payoff lands before the pin lets go.
- **Give each scrubbed beat 70 percent motion, 30 percent hold.** The hold is where people stop. If everything moves at all times, there is no safe place to stop and read.
- **Show that a pin is finite.** A thin bar, ticks or a counter stops the reader wondering whether the page is broken.

### Pin without scroll-jacking

Scroll-jacking means breaking the contract between the hand and the page, not moving things in an unusual way. The scrollbar must advance linearly with the hand at all times. You may change what the page shows; you may not change how far the page moved.

Never do these: `preventDefault` on wheel or touch events, multiply wheel deltas, `overflow: hidden` on the body with a fake scroller, `scroll-snap-type: y mandatory` on sections taller than the screen, or locking the page until an animation ends. Snap only with `proximity`, or with a delay so that it settles after the hand has stopped.

The escape test: someone who wants out presses End, holds Space or drags the scrollbar, and gets to the bottom as fast as on a plain page, with every section in its final state. Run it on every page.

## The shell every recipe plugs into

Paste this once. Each recipe below is a fragment: its markup and `<style>` go in the sections slot, its `<script>` goes in the scripts slot, and any `<link>` or `<meta>` goes in the head, because a stylesheet in the body holds up everything after it. Replace the sample images with your own.

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page title</title>
<script>
  if (matchMedia('(prefers-reduced-motion: no-preference)').matches) document.documentElement.classList.add('motion');
</script>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; overflow-x: clip; }
  h1, h2, h3, p { margin: 0; }
</style>
</head>
<body>
  <!-- sections -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
  <script>
    function motion(setup) {
      const html = document.documentElement;
      if (!html.classList.contains('motion')) return;
      if (!window.gsap || !window.ScrollTrigger) return html.classList.remove('motion');
      gsap.registerPlugin(ScrollTrigger);
      let ctx;
      try { ctx = gsap.context(setup); } catch (err) { html.classList.remove('motion'); console.error(err); return; }
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => ctx.revert();   // call on unmount in a single-page app
    }
  </script>
  <!-- scripts -->
</body>
</html>
```

All URLs in this chapter are the pins from the foundations chapter, and SplitText is included and free.

Why it is built this way:

- **The gate.** Every start state lives under `.motion`, and the class is set by an inline script in the head, before any CSS paints. No JavaScript means no class, so the plain page shows. Reduced motion means no class. A blocked CDN removes the class. Any error during setup removes it too. The plain flow is the real page, and motion is added on top.
- **Start states are still frames.** A slow CDN leaves the page in `.motion` before GSAP has arrived, so a start state must be a good picture on its own: a dim caption at `.32`, a small crop. Do not use `opacity: 0` on content.
- **`position: sticky` in a tall track, not `pin: true`.** Sticky runs in the browser's compositor, so it does not jitter on phones, where a JavaScript pin repositions the element a frame behind the finger. The pin length is also in CSS, so it exists at first paint and nothing jumps when scripts load. Use `pin: true` only when the element cannot sit in a tall parent.
- **`lvh` for tracks, `svh` for phone stages.** `lvh` does not change when the address bar collapses, so the track never reflows mid-scroll. `100svh` keeps a phone stage's bottom edge visible under the bar.
- **`overflow: clip`, never `hidden`, on ancestors of sticky.** `hidden` creates a scroll container and sticky silently stops working. `clip` does not.
- **Scrub values.** `scrub: true` locks to the hand, and is right for anything tied to page position (rails, parallax). `0.3` to `0.6` adds a little weight, and is right for choreography. `1` to `1.5` is heavy. Above `2` it reads as lag.
- **Ease inside a scrub.** The ease shapes speed along the scroll distance. `ease: 'none'` for anything position-locked; `power2.inOut` per beat so each beat settles.
- **Resize.** Pass functions for measured values with `invalidateOnRefresh: true`, or size things in a `refreshInit` listener. ScrollTrigger refreshes on resize, but not on a phone's address-bar change, which is what you want.

## What breaks when you mix libraries

Use one scroll engine on a page. Native CSS plus one GSAP setup is fine when they touch different elements.

- **GSAP and Motion (Framer Motion) on one element:** both write `transform` each frame, so the last writer wins and it flickers.
- **`animation-timeline` and GSAP on one property:** a running CSS animation beats inline styles in the cascade, so GSAP's value is ignored with no error.
- **A CSS `transition` on a scrubbed property:** each GSAP write restarts the transition, so the element smears behind the scroll. Keep transitions off anything GSAP drives.
- **`scroll-behavior: smooth` with any of this:** every `scrollTo` becomes a glide, so focus handlers and Lenis fight it. Leave it off.
- **Lenis with a numeric `scrub`:** Lenis smooths the position, then scrub smooths it again, and the page feels drunk. Use `scrub: true` under Lenis.
- **Transform-based smooth scrollers:** the page sits inside a translated wrapper, so sticky, anchors and find-in-page break, and everything here needs a scroller proxy. Use native scrolling, or Lenis.
- **Reveal-on-scroll libraries (AOS and the like):** they set their own hidden start state with no `.motion` gate, so a failure leaves content invisible.

### If you add smooth wheel scrolling

Lenis eases mouse-wheel notches while native scrolling stays underneath, so sticky, anchors and find-in-page keep working. Add it only on image-led pages with several scrubs, and only if you can feel the difference. Never create it on touch, where nothing beats native momentum. `lerp: 0.1` is the default, `0.07` the heavy limit, `0.16` only takes the notches off. GSAP's ticker is the one clock, every `scrub` is `true`, modals call `lenis.stop()`, and nested scrollers get `data-lenis-prevent`.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lenis@1.3.27/dist/lenis.css"> <!-- belongs in the head -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.27/dist/lenis.min.js"></script>
<script>
  motion(() => {
    if (window.Lenis && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const lenis = new Lenis({ lerp: 0.1, anchors: true });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    // ScrollTriggers go here, all with scrub: true
  });
</script>
```

---

## 1. Pinned scrub sequence

The page stops and the wheel becomes a timeline: one object changes through ordered beats while the reader sets the speed. It feels like operating a machine rather than reading past one. Use it for one hero object with 3 to 5 ordered states, such as a product teardown. It is the wrong choice for a list of equal items, more than five beats, or anything a reader must compare side by side.

**Numbers.** 4 beats, track 420 lvh (340 on phones). `scrub: 0.6`. Each beat is 1 unit of motion plus 0.4 of hold, `ease: 'power2.inOut'`. First move at 0.2, final hold 0.5. Caption changes take 0.25 units; an inactive caption sits at opacity 0.32, never 0.

```html
<section class="seq" aria-label="How it is built">
  <div class="seq__stage">
    <div class="bar" aria-hidden="true"><i></i></div>
    <ol class="beats">
      <li class="beat"><h3>The dial</h3><p>Enamel on brass, fired twice.</p></li>
      <li class="beat"><h3>The bridge</h3><p>Holds every jewel in place.</p></li>
      <li class="beat"><h3>The train</h3><p>Four wheels hand power down.</p></li>
      <li class="beat"><h3>The spring</h3><p>Forty hours in a small coil.</p></li>
    </ol>
    <div class="seq__visual" aria-hidden="true"><div class="stack">
      <div class="plate plate--spring" style="background:#1b2f29"></div><div class="plate plate--train" style="background:#3b5549"></div>
      <div class="plate plate--bridge" style="background:#c9a258"></div><div class="plate plate--dial" style="background:#efe8d8"></div>
    </div></div>
  </div>
</section>
<style>
  /* Plain flow: no JS and reduced motion land here, every beat readable. */
  .seq__stage { display: grid; gap: 3rem; padding: 6rem 6vw; }
  .seq__visual { display: grid; place-items: center; perspective: 1600px; min-height: 60vmin; }
  .stack { position: relative; width: min(54vmin, 500px); aspect-ratio: 1; transform-style: preserve-3d; }
  .plate { position: absolute; inset: 0; border-radius: 50%; }
  .beats { list-style: none; margin: 0; padding: 0; display: grid; gap: 1.6rem; align-content: center; }
  .bar { display: none; }
  /* With motion: the track is the pin length, the stage sticks inside it. */
  .motion .seq { height: 420lvh; }
  .motion .seq__stage { position: sticky; top: 0; height: 100lvh; overflow: clip; padding: 0 6vw; align-content: center; }
  .motion .beat { opacity: .32; }
  .motion .beat:first-child { opacity: 1; }
  .motion .bar { display: block; position: absolute; left: 2.5vw; top: 22%; bottom: 22%; width: 2px; background: #8884; }
  .motion .bar i { display: block; height: 100%; background: currentColor; transform: scaleY(0); transform-origin: 50% 0; }
  @media (min-width: 900px) { .seq__stage { grid-template-columns: minmax(280px, 1fr) minmax(0, 1.5fr); align-items: center; } }
  @media (max-width: 899px) {
    .motion .seq { height: 340lvh; }
    .motion .seq__stage { grid-template-rows: minmax(0, 1fr) auto; height: 100svh; padding: 1.5rem 7vw 2rem; gap: 1rem; }
    .motion .beats { gap: .55rem; }
    .motion .beat p { font-size: .9rem; line-height: 1.25; }
    .motion .bar { display: none; }
    .motion .seq__visual { order: -1; min-height: 0; }
    .stack { width: min(62vw, 32svh); }
  }
</style>
<script>
  motion(() => {
    const beats = gsap.utils.toArray('.beat');
    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut', duration: 1 },
      scrollTrigger: { trigger: '.seq', start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true },
    });
    const u = n => () => n * document.querySelector('.stack').offsetWidth / 500;   // distances scale with the stack
    const focus = (i, at) => tl.to(beats[i], { opacity: 1, duration: 0.25 }, at).to(beats[i - 1], { opacity: 0.32, duration: 0.25 }, at);
    tl.to('.stack', { rotationX: 62, rotationZ: -32 }, 0.2);
    tl.to('.plate--dial', { z: u(120) }, 0.2).to('.plate--train', { z: u(-40) }, 0.2).to('.plate--spring', { z: u(-120) }, 0.2);
    focus(1, 0.7);
    tl.to('.plate--bridge', { z: u(70), x: u(70), opacity: 0.35 }, 1.6).to('.plate--dial', { z: u(170), x: u(130), y: u(30) }, 1.6);
    focus(2, 2.1);
    tl.to('.plate--train', { z: u(40), x: u(-110), opacity: 0.4 }, 3);
    focus(3, 3.5);
    tl.to('.plate--train', { z: 0, x: 0, opacity: 1 }, 4.4).to('.plate--bridge', { z: 0, x: 0, opacity: 1 }, 4.4);
    tl.to('.plate--dial', { z: 0, x: 0, y: 0 }, 4.4).to('.plate--spring', { z: 0 }, 4.4).to('.stack', { rotationX: 0, rotationZ: 0 }, 4.4);
    tl.to({}, { duration: 0.5 });   // hold the payoff before the pin lets go
    tl.to('.bar i', { scaleY: 1, ease: 'none', duration: tl.duration() }, 0);
  });
</script>
```

- **Heavy and slow:** 100 lvh per beat, `scrub: 1.2`, `ease: 'power4.inOut'`, hold 0.6. Large moves, few of them.
- **Snappy and mechanical:** `scrub: 0.2`, `ease: 'expo.inOut'`, `duration: 0.6`, hold 0.8, and `snap: { snapTo: 'labelsDirectional', delay: 0.12, duration: 0.35, ease: 'power3.inOut' }` with an `addLabel` per beat.
- **Soft and organic:** `scrub: 0.8`, `ease: 'sine.inOut'`, no holds, beats overlapping by 0.3, so something is always drifting.
- **Touch:** the same sticky pin, shorter. The visual moves above the captions and every caption stays on screen. Keep beat paragraphs to one short line so they fit.
- **Fallback:** beats and the assembled object in plain flow.
- **Goes wrong:** beats that never hold, so nothing can be read at rest. Distances in px that fly off a phone: scale them with the object. Pin length with no progress mark.

## 2. Horizontal pinned gallery

The page turns sideways and vertical scroll carries a row of work past the window. It feels like walking along a wall of pictures. Use it for 4 to 8 items of equal rank with pictures that differ in shape. It is the wrong choice for things people need to compare, for more than about ten items, and as the only route to an action.

**Numbers.** Rail height = sideways overflow + one viewport, so 1 px of scroll is 1 px of rail and the hand keeps its normal speed. `scrub: true`, `ease: 'none'`. Pin from 900 px up. Panels 62 lvh tall, aspect ratios from 3/4 to 16/10, alternating vertical offsets. Pictures are 124 percent wide and drift `xPercent` -8 to 8.

```html
<section class="rail" aria-label="Four ridgelines, one per week">
  <div class="rail__stage">
    <ul class="rail__track">
      <li class="panel" style="--ar: 4 / 5"><figure><img src="assets/ridge-dusk.jpg" width="1500" height="960" alt="Violet ridges at dusk"></figure><a href="#w1">Week one</a></li>
      <li class="panel" style="--ar: 5 / 4"><figure><img src="assets/ridge-moss.jpg" width="1500" height="960" alt="Green ridges in mist"></figure><a href="#w2">Week two</a></li>
      <li class="panel" style="--ar: 3 / 4"><figure><img src="assets/ridge-clay.jpg" width="1500" height="960" alt="Red clay ridges"></figure><a href="#w3">Week three</a></li>
      <li class="panel" style="--ar: 16 / 10"><figure><img src="assets/ridge-night.jpg" width="1500" height="960" alt="Blue ridges under a moon"></figure><a href="#w4">Week four</a></li>
    </ul>
  </div>
</section>
<style>
  .rail__stage { overflow-x: auto; scroll-snap-type: x proximity; scrollbar-width: none; }
  .rail__track { list-style: none; display: flex; width: max-content; gap: 4vw; margin: 0; padding: 4vh 6vw; align-items: center; }
  .panel { flex: 0 0 78vw; scroll-snap-align: center; }
  .panel figure { margin: 0; overflow: clip; aspect-ratio: 4 / 5; }
  .panel img { display: block; width: 124%; max-width: none; height: 100%; object-fit: cover; margin-left: -12%; }
  .panel a { display: block; padding: .9rem 0 .4rem; }
  @media (min-width: 900px) {
    .panel { flex: 0 0 auto; }
    .panel figure { height: 62lvh; aspect-ratio: var(--ar, 4 / 5); }
    .panel:nth-child(even) { margin-top: 14lvh; }
    .panel:nth-child(odd) { margin-bottom: 12lvh; }
    .motion .rail__stage { position: sticky; top: 0; height: 100lvh; overflow: clip; display: flex; align-items: center; }
    .motion .rail__track { padding: 0 6vw; gap: 5vw; will-change: transform; }
  }
</style>
<script>
  motion(() => {
    gsap.matchMedia().add('(min-width: 900px)', () => {
      const rail = document.querySelector('.rail');
      const track = document.querySelector('.rail__track');
      const panels = gsap.utils.toArray('.panel');
      const travel = () => track.scrollWidth - innerWidth;
      const size = () => { rail.style.height = travel() + innerHeight + 'px'; };   // 1px of scroll = 1px of rail
      size();
      const slide = gsap.to(track, {
        x: () => -travel(), ease: 'none',
        scrollTrigger: { trigger: rail, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true, onRefreshInit: size },
      });
      // Each picture drifts inside its own frame while the rail moves. Needs ease 'none' on the slide.
      panels.forEach(panel => gsap.fromTo(panel.querySelector('img'), { xPercent: -8 }, {
        xPercent: 8, ease: 'none',
        scrollTrigger: { trigger: panel, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true },
      }));
      // overflow: clip cannot scroll to focus, so tabbing to a panel must move the page.
      const onFocus = e => {
        const panel = e.target.closest('.panel');
        if (!panel) return;
        const st = slide.scrollTrigger;
        scrollTo(0, st.start + gsap.utils.clamp(0, st.end - st.start, panel.offsetLeft - (innerWidth - panel.offsetWidth) / 2));
      };
      track.addEventListener('focusin', onFocus);
      return () => { track.removeEventListener('focusin', onFocus); rail.style.height = ''; };
    });
  });
</script>
```

- **Heavy and slow:** make the rail 1.4 times as long (`travel() * 1.4 + innerHeight`), `scrub: 1`, one image per screen.
- **Snappy and mechanical:** equal panels, no offsets, `snap: { snapTo: 1 / (panels.length - 1), delay: 0.1, duration: 0.3, ease: 'power3.out' }`.
- **Soft and organic:** mixed sizes and offsets, plus a slow `rotation` of about ±1.5 degrees per panel on `containerAnimation`.
- **Touch:** do not pin. A native swipe row with `scroll-snap-type: x proximity` is better than anything you can build, so the whole rail lives inside `matchMedia`.
- **Fallback:** the same native row with no JavaScript. Every item is reachable by swipe, trackpad or keyboard.
- **Goes wrong:** a rail that takes longer to scroll than its width justifies. An ease other than `'none'` on the slide, which breaks `containerAnimation`. Forgetting focus: links in clipped panels become invisible to keyboard users.

## 3. Stacked deck

Each section slides over the last and the covered one recedes. It feels like dealing cards onto a table, and the pile remembers what came before. Use it for 3 to 6 statements of equal weight: services, tiers, chapters. It is the wrong choice for long copy, or more than six sections.

**Numbers.** Covered card goes to `scale: 0.93`, `y: -8`, shade 0.45 black, over exactly the distance the next card travels (`top bottom` to `top top`), `scrub: true`, `ease: 'none'`. Sticky offset `3vh + index × 12px`, so edges of earlier cards peek. `min-height: 82svh`.

```html
<section class="deck" aria-label="What the foundry casts">
  <article class="card" style="--i:0; --c:#e2512f"><h2>Bronze</h2><p>Bells up to 900 kg, sand and lost wax.</p><i class="card__shade"></i></article>
  <article class="card" style="--i:1; --c:#e8c547"><h2>Brass</h2><p>Door furniture and rails, runs of 10 to 10,000.</p><i class="card__shade"></i></article>
  <article class="card" style="--i:2; --c:#7fb5a4"><h2>Iron</h2><p>Manhole covers and grates, load tested.</p><i class="card__shade"></i></article>
  <article class="card" style="--i:3; --c:#e9e2d2"><h2>Silver</h2><p>Small commissions, by appointment.</p><i class="card__shade"></i></article>
</section>
<style>
  .deck { padding: 0 3vw 6vh; }   /* block flow: a grid area can trap a sticky child */
  .card + .card { margin-top: 3vh; }
  .card { position: relative; min-height: 82svh; padding: clamp(1.5rem, 4vw, 3.5rem); border-radius: 18px; overflow: clip; transform-origin: 50% 0; background: var(--c); color: #120804; }
  .card__shade { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
  .motion .card { position: sticky; top: calc(3vh + var(--i) * 12px); }   /* behind the gate: see Goes wrong */
</style>
<script>
  motion(() => {
    const cards = gsap.utils.toArray('.card');
    // A card taller than the screen scrolls to its own bottom edge first, then sticks.
    const fit = () => cards.forEach(card => {
      card.style.top = '';
      const room = innerHeight - card.offsetHeight - 16;
      if (room < 0) card.style.top = room + 'px';
    });
    fit();
    ScrollTrigger.addEventListener('refreshInit', fit);
    cards.slice(0, -1).forEach((card, i) => {
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top top', scrub: true },
      }).to(card, { scale: 0.93, y: -8 }, 0).to(card.querySelector('.card__shade'), { opacity: 0.45 }, 0);
    });
    return () => ScrollTrigger.removeEventListener('refreshInit', fit);
  });
</script>
```

- **Heavy and slow:** full-bleed cards at `100svh`, no peek, `scale: 0.88`, shade 0.6, square corners.
- **Snappy and mechanical:** `scale: 0.96`, no shade, `scrub: 0.15`, a 1 px border instead of colour, all cards the same height.
- **Soft and organic:** `rotation: -1.5` on the covered card, `scale: 0.95`, `border-radius: 32px`, `ease: 'sine.in'`. Do not blur full-screen cards: that repaints the whole screen each frame.
- **Touch:** sticky works natively. Keep the height fit, because phones are where cards outgrow the screen.
- **Fallback:** a plain column of cards. Sticky sits behind the gate on purpose.
- **Goes wrong:** sticky with no height fit: a tall card's lower half is covered before anyone sees it, and the content is unreachable. Sections with transparent backgrounds, so the pile shows through. `overflow: hidden` on `.deck`, which kills sticky.

## 4. Sticky text swap beside a pinned visual

A visual holds still while copy changes beside it, one step at a time. It feels like turning pages next to a fixed illustration. Use it whenever steps need real reading. It is the wrong choice for two steps (just lay them out) or more than five.

The key: **scroll decides which step is active, time plays the change.** The text is therefore never half visible, however the reader stops.

**Numbers.** 75 lvh per step, track 400 lvh (340 on phones). Old text out in `0.5s power3.in`. New text in over `0.8s expo.out` after a `0.32s` delay, so the two never overlap. Scene wipe `0.9s power3.inOut`, `clip-path: inset(100% 0 0 0)` to `inset(0)`. Masked travel of 101 percent.

```html
<section class="swap" aria-label="Four stages of a firing">
  <div class="swap__stage">
    <div>
      <div class="swap__copy">
        <div class="swap__step"><h2>Water leaves</h2><p>Bound water burns out of the clay.</p></div>
        <div class="swap__step"><h2>Quartz shifts</h2><p>At 573 degrees the crystals jump in size.</p></div>
        <div class="swap__step"><h2>Glass forms</h2><p>Glaze melts into the body and the colour is decided.</p></div>
        <div class="swap__step"><h2>It rests</h2><p>Two days to cool. Patience is part of the recipe.</p></div>
      </div>
      <div class="ticks" aria-hidden="true"><i class="on"></i><i></i><i></i><i></i></div>
    </div>
    <div class="swap__visual" aria-hidden="true">
      <div class="scene" style="background:#1a1412"></div><div class="scene" style="background:#6e2b16"></div>
      <div class="scene" style="background:#ff9a3d"></div><div class="scene" style="background:#1b6f8c"></div>
    </div>
  </div>
</section>
<style>
  .swap__stage { display: grid; gap: 2rem; padding: 4rem 6vw; }
  .swap__copy { display: grid; gap: 2.5rem; align-content: center; }
  .swap__visual { position: relative; aspect-ratio: 1; max-height: 70svh; width: 100%; overflow: clip; }
  .scene { position: absolute; inset: 0; }
  .ticks { display: none; }
  .motion .swap { height: 400lvh; }
  .motion .swap__stage { position: sticky; top: 0; height: 100lvh; overflow: clip; padding: 0 6vw; align-content: center; }
  .motion .swap__copy { position: relative; overflow: clip; align-content: stretch; }
  .motion .swap__step { grid-area: 1 / 1; display: flex; flex-direction: column; justify-content: center; }
  .motion .ticks { display: flex; gap: 6px; margin-top: 1.4rem; }
  .ticks i { width: 34px; height: 3px; background: #8885; transition: background-color .3s linear; }
  .ticks i.on { background: currentColor; }
  @media (min-width: 900px) {
    .swap__stage { grid-template-columns: 1fr 1fr; align-items: center; }
    .motion .swap__copy { height: 46svh; }
  }
  @media (max-width: 899px) {
    .motion .swap { height: 340lvh; }
    .motion .swap__stage { grid-template-rows: minmax(0, 1fr) auto; height: 100svh; gap: .9rem; padding: 1.2rem 6vw 1.6rem; }
    .swap__visual { order: -1; aspect-ratio: auto; min-height: 300px; }
    .motion .swap__visual { min-height: 0; height: 100%; max-height: none; }
    .motion .swap__copy { height: 11rem; }
    .motion .ticks { margin-top: .5rem; }
  }
</style>
<script>
  motion(() => {
    const steps = gsap.utils.toArray('.swap__step');
    const scenes = gsap.utils.toArray('.scene');
    const ticks = gsap.utils.toArray('.ticks i');
    let active = 0;
    gsap.set(steps.slice(1), { yPercent: 101 });   // each step fills the mask, so 101% is fully out
    gsap.set(scenes.slice(1), { clipPath: 'inset(100% 0% 0% 0%)' });
    function go(next) {
      const dir = next > active ? 1 : -1;
      const offstage = Math.abs(gsap.getProperty(steps[next], 'yPercent')) >= 100;   // a step caught mid-exit turns round
      gsap.to(steps[active], { yPercent: -101 * dir, duration: 0.5, ease: 'power3.in', overwrite: true });
      if (offstage) gsap.set(steps[next], { yPercent: 101 * dir });
      gsap.to(steps[next], { yPercent: 0, duration: 0.8, delay: offstage ? 0.32 : 0, ease: 'expo.out', overwrite: true });
      // Scenes stack in order. Every scene between old and new wipes together, so a long jump reads as one wipe.
      for (let i = Math.min(active, next) + 1; i <= Math.max(active, next); i++) {
        gsap.to(scenes[i], { clipPath: dir > 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)', duration: 0.9, ease: 'power3.inOut', overwrite: true });
      }
      ticks.forEach((tick, i) => tick.classList.toggle('on', i === next));
      active = next;
    }
    ScrollTrigger.create({
      trigger: '.swap', start: 'top top', end: 'bottom bottom',
      onUpdate: self => {
        const target = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        if (target !== active) go(target);
      },
    });
  });
</script>
```

- **Heavy and slow:** out `0.7s power2.in`, in `1.2s power4.out`, delay `0.5s`, scene crossfade with a `scale` of 1.06 settling to 1.
- **Snappy and mechanical:** out `0.2s power4.in`, in `0.35s power4.out`, delay `0.12s`, scene wipe with `ease: 'steps(8)'`.
- **Soft and organic:** no mask. Opacity plus 16 px of `y`, `0.9s sine.out`. Scenes fade over `0.9s`.
- **Touch:** visual on top, copy beneath in a mask sized to the tallest step. Check that mask at 390 px wide: it is the part that clips.
- **Fallback:** all copy stacked, last scene showing. Scrub nothing, so a reader using keyboard scrolling lands on whole sentences.
- **Goes wrong:** scrubbing the text. A mask shorter than the longest step. Walking through every step during a long jump, which flashes copy nobody asked for. `go` above jumps straight to the target.

## 5. Parallax depth layers

Layers of one scene move at different rates, so flat art gains distance, as through a train window. Cheap parallax slides unrelated page elements around at random rates. Convincing parallax has occlusion (things pass behind things), atmosphere (far layers paler), and rates that follow one scale. Use it for an opening scene. It is the wrong choice for text columns and data, and for more than one section per page.

**Numbers.** At least five depths, with `y = depth × scroll`: 0.8 sky, 0.55 far, 0.42 title, 0.32 mid, 0.16 near, -0.1 foreground, which runs ahead of the page and sells the effect. Depths shrink by about 1.5 to 2 times per layer. `scrub: true`, `ease: 'none'`, because layers that lag the page look loose. 0.6 times these on touch. Photos in frames: image 124 percent tall, `yPercent` -19.35 to 0 (24 / 124).

```html
<section class="valley" aria-label="Valley at dusk">
  <div class="plane--sky" data-depth="0.8" aria-hidden="true"></div>
  <div class="plane plane--far" data-depth="0.55" aria-hidden="true"><img src="assets/plane-far.webp" alt="" width="2200" height="1100"></div>
  <div class="valley__title" data-depth="0.42"><h1>The Long Valley</h1></div>
  <div class="plane plane--mid" data-depth="0.32" aria-hidden="true"><img src="assets/plane-mid.webp" alt="" width="2200" height="1100"></div>
  <div class="plane plane--near" data-depth="0.16" aria-hidden="true"><img src="assets/plane-near.webp" alt="" width="2200" height="1100"></div>
  <div class="plane plane--front" data-depth="-0.1" aria-hidden="true"><img src="assets/plane-front.webp" alt="" width="2200" height="1100"></div>
</section>
<section class="notes">
  <figure class="frame"><img src="assets/ridge-dusk.jpg" alt="Violet ridges and a low sun" width="1500" height="960"></figure>
  <figure class="frame"><img src="assets/ridge-frost.jpg" alt="Pale ridges in winter haze" width="1500" height="960"></figure>
</section>
<style>
  .valley { position: relative; height: 130lvh; overflow: clip; background: #1a2547; color: #f2ead9; }
  .plane--sky { position: absolute; inset: 0; background: url(assets/plane-sky.jpg) center 30% / cover; }
  .plane { position: absolute; left: 0; width: 100%; }
  .plane img { display: block; width: 100%; height: auto; min-height: 60lvh; object-fit: cover; object-position: 50% 0; }
  .plane--far { bottom: 14%; } .plane--mid { bottom: 8%; } .plane--near { bottom: 2%; } .plane--front { bottom: -26%; }
  .valley__title { position: absolute; left: 0; right: 0; top: 13lvh; text-align: center; font-size: clamp(1.4rem, 5vw, 4rem); }
  .notes { position: relative; z-index: 2; background: #090b17; padding: 8vh 7vw; display: grid; gap: 14vh; }
  /* The frame stays put. The picture moves inside it, so the edges can never show. */
  .frame { position: relative; margin: 0; overflow: clip; aspect-ratio: 4 / 3; }
  .frame img { position: absolute; inset: 0 auto auto 0; width: 100%; height: 124%; object-fit: cover; }
</style>
<script>
  motion(() => {
    // depth 0 moves with the page, 1 stays nailed to the screen, negative runs ahead of the page.
    const valley = document.querySelector('.valley');
    const k = matchMedia('(pointer: coarse)').matches ? 0.6 : 1;
    gsap.utils.toArray('[data-depth]').forEach(layer => {
      gsap.to(layer, {
        y: () => k * layer.dataset.depth * valley.offsetHeight, ease: 'none',
        scrollTrigger: { trigger: valley, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
      });
    });
    gsap.utils.toArray('.frame img').forEach(img => {
      gsap.fromTo(img, { yPercent: -19.35 }, {
        yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
  });
</script>
```

- **Deep and slow:** a 160 lvh scene, depths from 0.9 down to 0.05, strong haze on far layers.
- **Flat and mechanical:** three hard-edged paper layers in one colour family, depths 0.5, 0.25, 0, like a cut-paper theatre.
- **Soft and organic:** a narrow range of 0.2 to 0.05, with far layers also fading from opacity 1 to 0.6 as they rise.
- **Touch:** transforms from a script run a frame behind a phone's native scroll, so large offsets judder. Reduce depths (`k` above), or use `animation-timeline` from recipe 15, which runs off the main thread.
- **Fallback:** the layers at rest form the composition. Design that still first.
- **Goes wrong:** layers that are too short, showing an edge at the end of the travel: test the last frame. Parallax on body text: the eye is reading and the line moves. Using it on every section, which is seasickness.

## 6. Image scale and crop on pin

A small crop opens to full bleed while the picture inside settles from over-scale. It feels like a lens opening or a door swinging wide. Use it once, for the image that carries the page. It is the wrong choice for a mediocre or low-resolution image, or a page of equal images.

**Numbers.** Track 300 lvh. `scrub: 0.5`. Clip from `inset(28% 34% 28% 34% round 12px)` (`inset(30% 12% 30% 12% round 10px)` on phones) to `inset(0% 0% 0% 0% round 0px)`. Image scale 1.5 to 1 on `power2.inOut`, so the picture counter-moves inside the opening frame. Title halves part ±8vw. Caption rises in the last stretch, then a 0.35 unit hold.

Animate the mask and the picture separately. Clip-path keeps edges sharp and costs little; scaling a frame instead stretches its corners and upscales the picture past its resolution.

```html
<section class="crop" aria-label="Opening plate">
  <div class="crop__stage">
    <h1 class="crop__title"><span>Open</span> <span>up</span></h1>
    <figure class="crop__frame"><img class="crop__img" src="assets/ridge-dusk.jpg" width="1500" height="960" alt="Violet ridges under a low sun"></figure>
    <p class="crop__caption">Plate 1. The first ridge at four in the afternoon.</p>
  </div>
</section>
<style>
  .crop__stage { position: relative; }
  .crop__title { padding: 12vh 6vw 6vh; font-size: clamp(3rem, 11vw, 11rem); line-height: .9; }
  .crop__frame { display: block; margin: 0; width: 100%; aspect-ratio: 16 / 10; overflow: clip; }
  .crop__img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .crop__caption { padding: 2rem 6vw; }
  .motion .crop { height: 300lvh; }
  .motion .crop__stage { position: sticky; top: 0; height: 100lvh; overflow: clip; }
  .motion .crop__title { position: absolute; inset: 0; display: flex; justify-content: space-between; align-items: center; gap: 34vw; padding: 0 5vw; z-index: 0; }
  .motion .crop__frame { position: absolute; inset: 0; aspect-ratio: auto; height: 100%; z-index: 1; clip-path: inset(28% 34% 28% 34% round 12px); }
  .motion .crop__img { transform: scale(1.5); }
  .motion .crop__caption { position: absolute; left: 0; bottom: 0; z-index: 2; color: #fff; padding: 0 6vw 7vh; transform: translateY(120%); }
  @media (max-width: 899px) { .motion .crop__title { flex-direction: column; justify-content: center; gap: 46lvh; font-size: 19vw; } }
</style>
<script>
  motion(() => {
    const start = () => innerWidth < 900 ? 'inset(30% 12% 30% 12% round 10px)' : 'inset(28% 34% 28% 34% round 12px)';
    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: '.crop', start: 'top top', end: 'bottom bottom', scrub: 0.5, invalidateOnRefresh: true },
    })
      .fromTo('.crop__frame', { clipPath: start }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1, ease: 'power2.inOut' }, 0)
      .fromTo('.crop__img', { scale: 1.5 }, { scale: 1, duration: 1, ease: 'power2.inOut' }, 0)
      .fromTo('.crop__title span:first-child', { x: 0 }, { x: () => -innerWidth * 0.08, duration: 1 }, 0)
      .fromTo('.crop__title span:last-child', { x: 0 }, { x: () => innerWidth * 0.08, duration: 1 }, 0)
      .to('.crop__caption', { y: 0, duration: 0.3, ease: 'power3.out' }, 1)
      .to({}, { duration: 0.35 });   // hold the full bleed before the pin lets go
  });
</script>
```

- **Heavy and slow:** 400 lvh, `scrub: 1`, image 1.8 to 1, `power3.inOut`, square corners.
- **Snappy and mechanical:** `ease: 'steps(6)'` on the clip, shutter-like, title fixed in place.
- **Soft and organic:** `circle(12% at 50% 50%)` to `circle(75% at 50% 50%)` (75 percent reaches the corners), `sine.inOut`.
- **Touch:** a wider start crop, and title words above and below it. Keep track length: this reveal has one beat.
- **Fallback:** title, whole image, caption in plain flow.
- **Goes wrong:** a `<figure>` left with its default margins (`1em 40px`), which pushes an absolute frame 40 px sideways, so the opening looks off-centre and the caption lands on the page colour: set `margin: 0`. Changing shape function (`inset` to `circle`), which snaps instead of tweening. No hold at full bleed, so the payoff scrolls straight off.

## 7. Type that grows or tracks with scroll

Words become the set piece. Four moves: **fill** (a word grows to the screen's width), **lock** (spread letters close up), **axes** (a variable font changes shape), and **read-along** (words brighten in order). It feels like the page speaking louder or thinking aloud. Type is the cheapest animation there is, and often the strongest. It is the wrong choice for more than one or two lines, except read-along, which suits one paragraph per page.

**Numbers.** Fill: set the word at its final size and scale **down**, `scale: 0.16` to 1, `power2.in`, track 260 lvh. Lock: offset each letter from centre by 9 percent of viewport width × its index, `power2.out`, `scrub: 0.5`. Axes: `wght` 100 to 900, `wdth` 50 to 130, `ease: 'none'`, track 220 lvh. Read-along: opacity 0.16 to 1, `stagger: 0.1`, `scrub: true`, from `top 72%` to `bottom 45%`.

```html
<link href="https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@50..150,100..900&display=swap" rel="stylesheet"> <!-- belongs in the head -->
<section class="fill" aria-label="Louder"><div class="fill__stage"><h1 class="fill__word">Louder</h1></div></section>
<section class="track"><h2 class="track__line">Lock in</h2></section>
<section class="axis" aria-label="Wide and thin"><div class="axis__stage"><h2 class="axis__word">Stretch</h2></div></section>
<section class="read"><p class="read__copy">A variable font is a single file with a whole family inside it. Scroll can walk through that family the way a thumb walks through a flip book, and the page feels as though it is thinking out loud.</p></section>
<style>
  .fill__word, .track__line, .axis__word { font-family: 'Anybody', sans-serif; text-transform: uppercase; white-space: nowrap; }
  /* Fill. Sized at its final size and scaled DOWN from there, so it stays sharp. */
  .fill__stage { min-height: 100svh; display: grid; grid-template-columns: minmax(0, 1fr); place-items: center; overflow: clip; }
  .fill__word { font-size: min(35vw, 90lvh); line-height: .8; font-weight: 900; font-stretch: 70%; letter-spacing: -.02em; }
  .motion .fill { height: 260lvh; }
  .motion .fill__stage { position: sticky; top: 0; height: 100lvh; }
  .motion .fill__word { transform: scale(.16); will-change: transform; }
  /* Lock. x is a transform; letter-spacing would reflow on every frame. */
  .track { display: grid; place-items: center; min-height: 100svh; overflow: clip; }
  .track__line { font-size: 14vw; line-height: .9; font-weight: 800; }
  /* Axes. Width and weight share one scrub inside a box that cannot reflow the page. */
  .axis__stage { min-height: 100svh; display: grid; place-items: center; overflow: clip; }
  .axis__word { font-size: 14vw; font-variation-settings: 'wght' 900, 'wdth' 130; }
  .motion .axis { height: 220lvh; }
  .motion .axis__stage { position: sticky; top: 0; height: 100lvh; }
  .read { padding: 18vh 7vw; display: grid; justify-items: center; }
  .read p { font-size: clamp(1.9rem, 4.6vw, 4.2rem); line-height: 1.16; max-width: 24ch; }
</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js"></script>
<script>
  motion(() => {
    gsap.registerPlugin(SplitText);
    gsap.fromTo('.fill__word', { scale: 0.16 }, {
      scale: 1, ease: 'power2.in',
      scrollTrigger: { trigger: '.fill', start: 'top top', end: 'bottom bottom', scrub: 0.4 },
    });
    gsap.fromTo('.axis__word', { fontVariationSettings: '"wght" 100, "wdth" 50' }, {
      fontVariationSettings: '"wght" 900, "wdth" 130', ease: 'none',
      scrollTrigger: { trigger: '.axis', start: 'top top', end: 'bottom bottom', scrub: 0.5 },
    });
    // autoSplit re-splits when the real font lands. Returning the tween lets the new split inherit its progress.
    SplitText.create('.track__line', {
      type: 'chars', autoSplit: true,
      onSplit: self => gsap.fromTo(self.chars, { x: i => (i - (self.chars.length - 1) / 2) * innerWidth * 0.09 }, {
        x: 0, ease: 'power2.out',
        scrollTrigger: { trigger: '.track', start: 'top 85%', end: 'center center', scrub: 0.5 },
      }),
    });
    SplitText.create('.read__copy', {
      type: 'words', autoSplit: true,
      onSplit: self => gsap.fromTo(self.words, { opacity: 0.16 }, {
        opacity: 1, ease: 'none', stagger: 0.1,
        scrollTrigger: { trigger: '.read__copy', start: 'top 72%', end: 'bottom 45%', scrub: true },
      }),
    });
  });
</script>
```

- **Heavy and slow:** fill from 0.3, `power4.in`, 300 lvh, the heaviest cut of a condensed face.
- **Snappy and mechanical:** `ease: 'steps(8)'` on the axes, so the word clicks through weights. Read-along with `stagger: 0.04` on `scrub: true`.
- **Soft and organic:** a serif with an optical size axis, `sine.inOut`, read-along by line from opacity 0.3.
- **Touch:** all four work, because the distances are in viewport units. Set read-along to `top 85%`, since the phone shows less of the paragraph at once. Keep a fill word short: six letters at most.
- **Fallback:** words at full size, the whole paragraph at full strength. SplitText never runs.
- **Goes wrong:** scaling a small font up: it blurs, so always scale down from final size. Sizing type for its starting width: measure the last frame. At `18vw` this demo's word overran a 1440 px screen by 216 px at `wdth` 130 and was cut off, so it is set at `14vw`. Animating `font-size` or `letter-spacing`, which reflows every frame.

## 8. Whole-page colour theme change

The whole page changes colour as a section takes over, like the light changing between scenes. Use it to mark chapters, or to let the brand take the whole screen. It is the wrong choice between sections that have nothing to do with each other. It needs no library.

**Numbers.** Ground and accent `.8s cubic-bezier(.4, 0, .2, 1)`. Ink `.2s linear` after a `.16s` delay, so it flips in the moment the ground passes mid-tone and text spends as little time as possible on a colour close to its own. Change when a section crosses a line at 55 percent of the screen height (`rootMargin: '-55% 0px -45% 0px'`), so the new section is the one being read. Registered custom properties (`@property`: Chrome 85, Safari 16.4, Firefox 128), because plain custom properties cannot interpolate. Update `meta[name=theme-color]` too, so the phone's browser chrome follows.

```html
<meta name="theme-color" content="#f2ecdf"> <!-- belongs in the head -->
<section style="--bg:#f2ecdf; --ink:#1f1a13; --accent:#b4340f"><p class="month">March</p><h2>Sow the broad beans</h2><p>Two fingers deep, by hand.</p></section>
<section style="--bg:#14342b; --ink:#e7efd9; --accent:#a8e06c"><p class="month">June</p><h2>Thin the rows</h2><p>Pull one in three, and eat what you pull.</p></section>
<section style="--bg:#e8a21e; --ink:#231406; --accent:#6d1f08"><p class="month">August</p><h2>Cut the wheat</h2><p>A dry week and a sharp edge.</p></section>
<section style="--bg:#6d1c26; --ink:#fbe3d3; --accent:#ffb39a"><p class="month">October</p><h2>Press the apples</h2><p>Last of the light, first of the cider.</p></section>
<style>
  @property --page-bg { syntax: '<color>'; inherits: true; initial-value: #f2ecdf; }
  @property --page-ink { syntax: '<color>'; inherits: true; initial-value: #1f1a13; }
  @property --page-accent { syntax: '<color>'; inherits: true; initial-value: #b4340f; }
  html { background: var(--page-bg); color: var(--page-ink); }
  html.motion { transition: --page-bg .8s cubic-bezier(.4, 0, .2, 1), --page-ink .2s linear .16s, --page-accent .8s cubic-bezier(.4, 0, .2, 1); }
  /* No JS or reduced motion: each section paints its own palette, the page still changes colour. */
  section { background: var(--bg); color: var(--ink); min-height: 100svh; padding: 12vh 6vw; display: grid; align-content: center; gap: 1.4rem; }
  .motion section { background: none; color: inherit; }
  .month { justify-self: start; color: var(--accent); }
  .motion .month { color: var(--page-accent); }
</style>
<script>
  if (document.documentElement.classList.contains('motion')) {
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="theme-color"]');
    const apply = section => {
      const read = name => section.style.getPropertyValue(name);
      root.style.setProperty('--page-bg', read('--bg'));
      root.style.setProperty('--page-ink', read('--ink'));
      root.style.setProperty('--page-accent', read('--accent'));
      meta.content = read('--bg');
    };
    const line = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) apply(entry.target); });
    }, { rootMargin: '-55% 0px -45% 0px' });
    document.querySelectorAll('section').forEach(section => line.observe(section));
  }
</script>
```

- **Heavy and slow:** `1.4s cubic-bezier(.65, 0, .35, 1)`, between deep neighbouring colours, so it feels like dusk arriving.
- **Snappy and mechanical:** `.15s linear`, primary colours, a hard cut as the line is crossed.
- **Soft and organic:** tie colour to position instead: a scrubbed GSAP tween on `--page-bg` with `scrub: true`. The colour then pauses wherever the reader stops, so check every midpoint for contrast.
- **Touch:** identical. The `theme-color` line is what makes it feel native on a phone.
- **Fallback:** each section paints its own palette. Colour is not motion, so it survives reduced motion as hard section edges.
- **Goes wrong:** ink and ground on the same slow transition: both reach mid-tone together, so between a light and a dark section the text fades into the page for half a second. Sections with their own opaque backgrounds, which leave seams. Unregistered properties, which snap with no transition.

## 9. SVG path drawing

A line draws itself as you scroll, carrying the eye between ideas, like a route being walked. Use it to connect things in sequence. It is the wrong choice for decoration behind unrelated content, or as a line that goes nowhere.

**Numbers.** Set `pathLength="1"` and `stroke-dasharray="1 1"`, then tween `stroke-dashoffset` 1 to 0: no measuring. `scrub: 0.3`, `ease: 'none'`. Start `top 60%`, end `bottom 70%`, so the head stays in the reader's view. Dots fill with a `.35s cubic-bezier(.34, 1.56, .64, 1)` pop as the head passes: scrubbed line, triggered reward.

```html
<ol class="route" aria-label="The route, from shore to shore">
  <li class="stop"><i class="stop__dot"></i><h2>Landfall</h2><p>Cable leaves the beach in a steel duct.</p></li>
  <li class="stop"><i class="stop__dot"></i><h2>The shelf</h2><p>A plough buries it two metres deep.</p></li>
  <li class="stop"><i class="stop__dot"></i><h2>The slope</h2><p>Depth falls away fast.</p></li>
  <li class="stop"><i class="stop__dot"></i><h2>The plain</h2><p>Four thousand metres down.</p></li>
  <li class="stop"><i class="stop__dot"></i><h2>Second shore</h2><p>The light is on the other side.</p></li>
  <svg class="route__line" aria-hidden="true"><path class="route__ghost"/><path class="route__wire" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1"/><circle class="route__head" r="6"/></svg>
</ol>
<style>
  .route { position: relative; display: grid; gap: 22vh; margin: 0; padding: 10vh 7vw 18vh; list-style: none; }
  .route__line { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; display: none; }
  .route__line path { fill: none; }
  .route__ghost { stroke: #8884; stroke-width: 1.5; }
  .route__wire { stroke: #d98a00; stroke-width: 3; stroke-linecap: butt; }   /* a round cap shows a dot at offset 1 */
  .route__head { fill: #d98a00; }
  .motion .route__line { display: block; }
  .stop { position: relative; display: grid; gap: .4rem; max-width: 34ch; padding-left: 2.2rem; }
  .stop__dot { position: absolute; left: 0; top: .5rem; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #d98a00; background: #fff; transition: background-color .25s linear, transform .35s cubic-bezier(.34, 1.56, .64, 1); }
  .stop.on .stop__dot { background: #d98a00; transform: scale(1.35); }
  @media (min-width: 900px) { .stop:nth-child(even) { justify-self: end; } }
</style>
<script>
  motion(() => {
    const route = document.querySelector('.route');
    const ghost = route.querySelector('.route__ghost');
    const wire = route.querySelector('.route__wire');
    const head = route.querySelector('.route__head');
    const stops = gsap.utils.toArray('.stop');
    let length = 0, marks = [];
    // Rebuild from the real positions of the dots, so the line survives any reflow.
    function build() {
      const box = route.getBoundingClientRect();
      const pts = stops.map(stop => {
        const r = stop.querySelector('.stop__dot').getBoundingClientRect();
        return [r.left - box.left + r.width / 2, r.top - box.top + r.height / 2];
      });
      let d = `M${pts[0]}`;
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], mid = (y0 + y1) / 2;
        d += `C${x0},${mid} ${x1},${mid} ${x1},${y1}`;
      }
      ghost.setAttribute('d', d);
      wire.setAttribute('d', d);
      length = wire.getTotalLength();
      marks = pts.map(p => p[1]);
    }
    build();
    ScrollTrigger.addEventListener('refreshInit', build);
    const place = progress => {
      const p = wire.getPointAtLength(progress * length);
      head.setAttribute('transform', `translate(${p.x} ${p.y})`);
      stops.forEach((stop, i) => stop.classList.toggle('on', p.y >= marks[i] - 1));
    };
    gsap.fromTo(wire, { strokeDashoffset: 1 }, {
      strokeDashoffset: 0, ease: 'none', autoRound: false,   // GSAP rounds CSS px values, which would snap a 0-1 offset at 50%
      scrollTrigger: { trigger: route, start: 'top 60%', end: 'bottom 70%', scrub: 0.3 },
      onUpdate() { place(this.progress()); },
    });
    place(0);
    return () => ScrollTrigger.removeEventListener('refreshInit', build);
  });
</script>
```

- **Heavy and slow:** `stroke-width: 8`, `scrub: 1`, long gently curving spans, no head.
- **Snappy and mechanical:** right-angle segments (`L`, not `C`), `scrub: true`, dots that snap on with a `.1s linear` transition, like a circuit.
- **Soft and organic:** a hand-wobbled path, `stroke-linecap: butt`, 2 px, in one colour with the copy, and a scribble underline that draws once on load over `1.3s power2.inOut`.
- **Touch:** dots line up on a single left-hand column below 900 px, so the path is a near-straight spine and uses no horizontal room.
- **Fallback:** the SVG stays `display: none` without `.motion`. The stops are an ordered list.
- **Goes wrong:** leaving out `autoRound: false`. GSAP rounds CSS px values, so an offset of 1 to 0 sits undrawn, then appears whole at 50 percent, while the head moves smoothly and hides the fault. A hard-coded path, which detaches from content at any width but yours: build it from the DOM. A round linecap, which leaves a dot before drawing starts.

## 10. Marquee coupled to scroll velocity

A band of words cruises at a steady speed, surges when the reader scrolls and follows their direction. It feels alive, like something that notices you. Use it as a loud divider or a list of names. It is the wrong choice for information people must read in full, and nothing should sit in it that is not also available elsewhere. It needs no library, because speed has to change continuously and a CSS animation cannot do that without jumping.

**Numbers.** Base 46 to 70 px/s. `GAIN` 0.32: band px/s added per scroll px/s, clamped at 2600 px/s of scroll. Velocity follows at 7 per second, and the boost decays at 2.2 per second, so it surges fast and coasts home. Direction only flips above 60 px/s of scroll, so a stray nudge does not reverse the band. Hover slows to 15 percent. Wrap with modulo on one unit's width, so it can run forever, which is why it carries a visible Pause button: anything that moves for over 5 seconds beside content needs one.

```html
<div class="mq" data-speed="70" data-dir="-1" role="group" aria-label="Tonight's residents">
  <div class="mq__track">
    <ul class="mq__unit"><li>Low Tide</li><li>Marisol</li><li>Dead Air</li><li>Harbour Boys</li><li>Ana Vex</li></ul>
  </div>
  <button class="mq__pause" type="button">Pause</button>
</div>
<style>
  .mq { position: relative; padding: 2.2vh 0; overflow: clip; background: #c8ff3d; color: #12082b; }
  .mq__pause { display: none; }
  .motion .mq__pause { display: block; position: absolute; right: 1rem; top: 50%; translate: 0 -50%; min-height: 44px; padding: 0 1rem; border: 0; border-radius: 999px; background: #12082b; color: #c8ff3d; font: inherit; }
  .mq__track { display: flex; }
  .mq__unit { display: flex; flex-wrap: wrap; gap: 0 2.4rem; list-style: none; margin: 0; padding: 0 1.2rem; }
  .mq__unit li { font-size: clamp(2.2rem, 6.4vw, 6rem); font-weight: 800; line-height: 1.1; white-space: nowrap; }
  .mq__unit li::after { content: '/'; margin-left: 2.4rem; font-weight: 300; }
  .motion .mq__track { width: max-content; will-change: transform; }
  .motion .mq__unit { flex-wrap: nowrap; flex: none; }
</style>
<script>
  if (document.documentElement.classList.contains('motion')) {
    const CLAMP = 2600, GAIN = 0.32, FOLLOW = 7, CRUISE_BACK = 2.2;
    const clampV = value => Math.max(-CLAMP, Math.min(CLAMP, value));
    const bands = [...document.querySelectorAll('.mq')].map(el => ({
      el, track: el.querySelector('.mq__track'), unit: el.querySelector('.mq__unit'),
      width: 0, x: 0, boost: 0, on: true, held: false, hover: 1, base: +el.dataset.speed, dir: +el.dataset.dir, sign: +el.dataset.dir,
    }));
    const fill = band => {
      [...band.track.children].slice(1).forEach(copy => copy.remove());
      band.width = band.unit.getBoundingClientRect().width;
      const copies = Math.ceil(innerWidth / band.width) + 1;
      for (let i = 0; i < copies; i++) {
        const copy = band.unit.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        band.track.append(copy);
      }
    };
    const refill = () => bands.forEach(fill);
    refill();
    document.fonts?.ready.then(refill);
    let lastW = innerWidth;
    new ResizeObserver(() => { if (innerWidth !== lastW) { lastW = innerWidth; refill(); } }).observe(document.documentElement);
    // Do not burn a frame on a band nobody can see.
    const io = new IntersectionObserver(es => es.forEach(e => { bands.find(b => b.el === e.target).on = e.isIntersecting; }));
    bands.forEach(b => {
      io.observe(b.el);
      b.el.addEventListener('pointerenter', () => { b.hover = 0.15; });
      b.el.addEventListener('pointerleave', () => { b.hover = 1; });
      const pause = b.el.querySelector('.mq__pause');
      pause.addEventListener('click', () => { b.held = !b.held; pause.textContent = b.held ? 'Play' : 'Pause'; });
    });
    let prevY = scrollY, prevT = performance.now(), v = 0;
    requestAnimationFrame(function frame(now) {
      const dt = Math.min((now - prevT) / 1000, 0.05);
      const raw = (scrollY - prevY) / Math.max((now - prevT) / 1000, 0.001);
      prevT = now; prevY = scrollY;
      v += (clampV(raw) - v) * (1 - Math.exp(-dt * FOLLOW));
      bands.forEach(b => {
        if (Math.abs(v) > 60) b.sign = (v > 0 ? 1 : -1) * b.dir;
        b.boost += (Math.abs(v) * GAIN - b.boost) * (1 - Math.exp(-dt * CRUISE_BACK));
        if (!b.on || b.held) return;
        b.x += b.sign * (b.base + b.boost) * b.hover * dt;
        const wrapped = ((b.x % b.width) + b.width) % b.width - b.width;
        b.track.style.transform = `translate3d(${wrapped.toFixed(2)}px, 0, 0)`;
      });
      requestAnimationFrame(frame);
    });
  }
</script>
```

- **Heavy and slow:** base 30, `GAIN` 0.15, `CRUISE_BACK` 1, one huge band. A freight train, slow to change its mind.
- **Snappy and mechanical:** base 90, `GAIN` 0.5, `FOLLOW` 14, `CRUISE_BACK` 5, and no direction flip: the band only surges.
- **Soft and organic:** base 24, `GAIN` 0.2, two bands in opposite directions at different speeds, in a light weight.
- **Touch:** works unchanged, as `scrollY` is the only input. Hover handlers simply never fire.
- **Fallback:** the unit wraps as a static list, with every name visible. Clones are created only behind the gate and are `aria-hidden`, and the Pause button exists only behind it too.
- **Goes wrong:** a loop with a visible jump, from a wrap that is not one unit's exact width: measure after fonts load. Reading raw velocity with no smoothing, so it twitches. Copy that is part of the content and only ever seen moving.

## 11. Velocity skew

Images lean into a fast scroll and stand up again when the hand stops, as if the page had mass. Use it on one grid of pictures or one big headline, in moderation. It is the wrong choice for body text, and on a page already busy with scrubs.

**Numbers.** Cap at 5 degrees (2.5 on touch). Full lean at 3000 px/s of scroll. Follow at 9 per second. Below that speed the lean is proportional, so gentle scrolling barely shows it. Apply to wrappers, with `transform-origin: 50% 50%` and `overflow: clip`. Run the frame loop only while something is moving.

```html
<main class="sheet">
  <figure class="shot"><div class="shot__pic"><img src="assets/ridge-clay.jpg" width="1500" height="960" alt="Clay ridges at sunrise"></div><figcaption>Frame 12</figcaption></figure>
  <figure class="shot"><div class="shot__pic"><img src="assets/ridge-moss.jpg" width="1500" height="960" alt="Green ridges in mist"></div><figcaption>Frame 13</figcaption></figure>
  <figure class="shot"><div class="shot__pic"><img src="assets/ridge-night.jpg" width="1500" height="960" alt="Ridges under a moon"></div><figcaption>Frame 20</figcaption></figure>
  <figure class="shot"><div class="shot__pic"><img src="assets/ridge-storm.jpg" width="1500" height="960" alt="Ridges in storm light"></div><figcaption>Frame 21</figcaption></figure>
</main>
<style>
  .sheet { display: grid; gap: 4vw; padding: 0 5vw 14vh; }
  .shot { margin: 0; }
  .shot__pic { overflow: clip; transform-origin: 50% 50%; will-change: transform; }
  .shot img { display: block; width: 100%; height: auto; }
</style>
<script>
  if (document.documentElement.classList.contains('motion')) {
    const MAX_DEG = matchMedia('(pointer: coarse)').matches ? 2.5 : 5;
    const FULL_AT = 3000, FOLLOW = 9;
    const seen = new Set();
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { seen.add(e.target); } else { seen.delete(e.target); e.target.style.transform = ''; }
    }));
    document.querySelectorAll('.shot__pic').forEach(pic => io.observe(pic));
    let prevY = scrollY, prevT = 0, lean = 0, running = false;
    function frame(now) {
      const elapsed = Math.max((now - prevT) / 1000, 0.001);
      const v = (scrollY - prevY) / elapsed;
      prevT = now; prevY = scrollY;
      const target = Math.max(-1, Math.min(1, v / FULL_AT)) * MAX_DEG;
      lean += (target - lean) * (1 - Math.exp(-Math.min(elapsed, 0.05) * FOLLOW));
      if (v === 0 && Math.abs(lean) < 0.01) { lean = 0; running = false; }
      seen.forEach(pic => { pic.style.transform = lean ? `skewY(${lean.toFixed(3)}deg)` : ''; });
      if (running) requestAnimationFrame(frame);
    }
    addEventListener('scroll', () => {
      if (running) return;
      running = true; prevT = performance.now() - 16;
      requestAnimationFrame(frame);
    }, { passive: true });
  }
</script>
```

- **Heavy and slow:** cap 3 degrees, `FOLLOW` 4, so the lean arrives late and leaves late.
- **Snappy and mechanical:** cap 7 degrees on type only, `FOLLOW` 18, and `skewX` instead of `skewY`.
- **Soft and organic:** add `scaleY` of 1 + speed × 0.04, so the picture stretches slightly, like something elastic.
- **Touch:** half the cap. Native momentum is fast, and a large skew during a fling looks broken.
- **Fallback:** without the gate, no listener is attached. Images sit flat.
- **Goes wrong:** skew over 8 degrees, which reads as a bug, not weight. A frame loop that runs for ever: start it from `scroll` and stop it at rest. Skewing text people are reading.

## 12. Sticky underlay footer reveal

The page lifts away like a sheet of paper to reveal a footer that was underneath all along. It gives the page an ending. Use it on most marketing pages. It is the wrong choice when the footer is taller than the screen, where its top could never be reached. That is why short screens get a normal one.

**Numbers.** CSS does the reveal. Footer `position: sticky; bottom: 0; z-index: 0`, sheet `z-index: 1` with an opaque background. Footer `min-height: 72svh`, `max-height: 100svh`. Static under 560 px of viewport height. Wordmark scrubs `yPercent` 34 to 0 and `scaleY` .82 to 1, `scrub: 0.3`, over exactly the footer's height.

```html
<main class="sheet">
  <section><h1>Tidewater Studio</h1><p>Boatbuilders and joiners on the estuary since 1984.</p></section>
  <section><p>We take on six hulls a year, each lofted full size on the shed floor.</p></section>
</main>
<footer class="under">
  <ul><li><a href="#yard">The yard</a></li><li><a href="#hulls">Current hulls</a></li><li><a href="#visit">Visit by tide table</a></li></ul>
  <p class="under__word">Tidewater</p>
</footer>
<style>
  html { background: #0f3b3a; }   /* overscroll at the bottom matches the footer */
  .sheet { position: relative; z-index: 1; background: #f4f0e7; color: #15202b; border-radius: 0 0 clamp(16px, 2.4vw, 32px) clamp(16px, 2.4vw, 32px); }
  .sheet section { min-height: 90svh; padding: 12vh 6vw; }
  .under { position: sticky; bottom: 0; z-index: 0; min-height: 72svh; max-height: 100svh; overflow: clip; background: #0f3b3a; color: #d6f5d3; padding: 8vh 6vw 3vh; display: grid; grid-template-columns: minmax(0, 1fr); grid-template-rows: auto 1fr; gap: 2rem; }
  .under ul { list-style: none; display: flex; flex-wrap: wrap; gap: .6rem 2.4rem; margin: 0; padding: 0; }
  .under a { color: inherit; display: inline-block; padding: .25rem 0; }
  .under__word { align-self: end; font-size: 14vw; font-weight: 900; line-height: .76; text-transform: uppercase; white-space: nowrap; transform-origin: 0 100%; }
  /* A sticky footer taller than the screen would lose its top edge for good. */
  @media (max-height: 560px) { .under { position: static; max-height: none; } }
</style>
<script>
  motion(() => {
    gsap.fromTo('.under__word', { yPercent: 34, scaleY: 0.82 }, {
      yPercent: 0, scaleY: 1, ease: 'none',
      scrollTrigger: {
        trigger: '.sheet', start: 'bottom bottom',
        end: () => '+=' + document.querySelector('.under').offsetHeight,
        scrub: 0.3, invalidateOnRefresh: true,
      },
    });
  });
</script>
```

- **Heavy and slow:** `min-height: 100svh`, a sheet with square edges, wordmark from `yPercent: 60`.
- **Snappy and mechanical:** CSS alone, no wordmark motion, a 1 px rule along the sheet's edge.
- **Soft and organic:** large sheet radius, and the footer's own background fading from a darker tone as it is revealed.
- **Touch:** works unchanged. Check every link has a 44 px target, as footers are where they get small.
- **Fallback:** the reveal needs no JavaScript at all. The wordmark just sits in place.
- **Goes wrong:** a wordmark sized for another font: tune `font-size` until it spans the width. A transparent sheet, so the footer shows through the whole page. A footer that cannot fit the screen. `z-index` set with no `position`, which does nothing.

## 13. Scroll-linked numbers and data

Scroll walks through a dataset: the year rolls, the figure climbs, a line draws, notes land at the events that explain it. The reader holds the argument in their hand and can scrub back to the dip. Use it for one statistic with a shape worth telling. It is the wrong choice for a single figure, which only needs a count-up, and for data people need to read exactly, which needs a table.

**Numbers.** Track 380 lvh (300 on phones). `scrub: 0.3`, `ease: 'none'`, over the data index, not the pixel. Interpolate real values; the end state must be the true final number. Odometer digits are 11-row columns (0 to 9, then 0 again) moved by `yPercent`, so no text changes, nothing reflows and 9 rolls into 0. Each digit holds for 70 percent of its span, then rolls, so the year can be read at rest. `font-variant-numeric: tabular-nums` on everything. Notes are triggered, not scrubbed: `0.45s power3.out`, 10 px of `y`.

```html
<section class="data" aria-label="Annual riders, 2005 to 2025">
  <div class="data__stage">
    <div class="readout">
      <span class="year" aria-hidden="true" data-final="2025">2025</span>
      <span class="riders" aria-hidden="true">1,284,000</span>
      <span class="sr">Riders grew from 412,000 in 2005 to 1,284,000 in 2025.</span>
    </div>
    <div class="chart" data-values="[412000,436000,470000,455000,498000,540000,566000,610000,702000,688000,744000,812000,905000,871000,356000,512000,790000,1040000,1168000,1221000,1284000]">
      <div class="chart__ink"><svg viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,274 50,268 100,259 150,263 200,252 250,241 300,234 350,223 400,199 450,203 500,189 550,171 600,147 650,156 700,288 750,248 800,177 850,113 900,80 950,66 1000,50"/></svg></div>
      <div class="flags">
        <p class="flag" data-at="8" style="left:37%; top:62%"><b>2013</b> Third ferry joins the route</p>
        <p class="flag" data-at="14" style="left:60%; top:10%"><b>2019</b> Service halted for ten months</p>
        <p class="flag" data-at="17" style="left:80%; top:60%"><b>2022</b> Night sailings begin</p>
      </div>
    </div>
  </div>
</section>
<style>
  .data__stage { display: grid; gap: 2rem; padding: 4rem 6vw; align-content: center; }
  .readout { display: flex; flex-wrap: wrap; gap: .6rem 3rem; align-items: baseline; font-variant-numeric: tabular-nums; }
  .year { font-size: clamp(3.4rem, 10vw, 9rem); line-height: 1; }
  .riders { font-size: clamp(1.3rem, 3vw, 2.6rem); min-width: 9.5ch; }
  .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
  .chart { position: relative; }
  .chart svg { display: block; width: 100%; height: auto; overflow: visible; }
  .chart polyline { fill: none; stroke: #0a7c6e; stroke-width: 3; vector-effect: non-scaling-stroke; }
  .flag { position: absolute; font-size: .95rem; line-height: 1.25; max-width: 21ch; padding-left: .7rem; border-left: 2px solid #c63b2b; }
  /* Odometer: ten digits in a column, moved by transform. No text changes, no reflow. */
  .odo { display: inline-flex; overflow: clip; height: 1em; line-height: 1; }
  .odo__col { display: block; height: 1100%; }
  .odo__col i { display: block; height: 9.0909%; font-style: normal; }
  .motion .data { height: 380lvh; }
  .motion .data__stage { position: sticky; top: 0; height: 100lvh; overflow: clip; padding: 0 6vw; }
  @media (max-width: 899px) {
    .flag { position: static; max-width: none; }
    .motion .data { height: 300lvh; }
    .motion .data__stage { height: 100svh; }
    .flags { display: grid; grid-template-columns: 1fr 1fr; gap: .4rem .9rem; margin-top: .6rem; }
  }
</style>
<script>
  motion(() => {
    const chart = document.querySelector('.chart');
    const ink = chart.querySelector('.chart__ink');
    const riders = document.querySelector('.riders');
    const yearEl = document.querySelector('.year');
    const flags = gsap.utils.toArray('.flag');
    const values = JSON.parse(chart.dataset.values);
    const format = new Intl.NumberFormat('en-GB');
    const last = values.length - 1;
    // Odometer built from the final year, so the text is already right before JS runs.
    yearEl.innerHTML = [...yearEl.dataset.final].map(() => `<span class="odo"><span class="odo__col">${[0,1,2,3,4,5,6,7,8,9,0].map(n => `<i>${n}</i>`).join('')}</span></span>`).join('');
    const cols = [...yearEl.querySelectorAll('.odo__col')];
    const ease = gsap.parseEase('power2.inOut');
    const roll = value => { const f = value % 1; return f < 0.7 ? 0 : ease((f - 0.7) / 0.3); };   // hold each digit, roll in the last 30%
    const setYear = value => cols.forEach((col, i) => {
      const place = 10 ** (cols.length - 1 - i);
      const turning = place === 1 || value % place >= place - 1;                                  // carry only as the digit below rolls over
      gsap.set(col, { yPercent: -(100 / 11) * ((Math.floor(value / place) % 10) + (turning ? roll(value) : 0)) });
    });
    gsap.set(flags, { y: 10, opacity: 0.0001 });
    const reached = new Set();
    const state = { i: 0 };
    function render() {
      const lo = Math.floor(state.i), hi = Math.min(lo + 1, last), f = state.i - lo;
      riders.textContent = format.format(Math.round((values[lo] + (values[hi] - values[lo]) * f) / 1000) * 1000);
      setYear(2005 + state.i);
      ink.style.clipPath = `inset(-5% ${100 - (state.i / last) * 100}% -5% 0)`;
      // Scroll triggers the note, time plays it. Notes stay up once reached and leave on the way back.
      flags.forEach(flag => {
        const on = state.i >= +flag.dataset.at;
        if (on === reached.has(flag)) return;
        on ? reached.add(flag) : reached.delete(flag);
        gsap.to(flag, { y: on ? 0 : 10, opacity: on ? 1 : 0.0001, duration: 0.45, ease: 'power3.out', overwrite: true });
      });
    }
    gsap.to(state, {
      i: last, ease: 'none', onUpdate: render,
      scrollTrigger: { trigger: '.data', start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    });
    render();
  });
</script>
```

- **Heavy and slow:** `scrub: 1`, one number at huge size, no chart, the page colour darkening as it climbs.
- **Snappy and mechanical:** round `state.i` so it clicks year by year, and drop the odometer roll for hard digit changes.
- **Soft and organic:** a smooth curve in place of the polyline, an area fill beneath it, and notes that fade with no `y`.
- **Touch:** keep the chart full width and move notes below it in a two-column grid. Numbers must stay legible, so never shrink them under 1.3rem.
- **Fallback:** final figures, the complete line and all notes are in the HTML. The screen-reader sentence states the takeaway, since the animated digits are `aria-hidden`.
- **Goes wrong:** numbers in a proportional font, which shimmer as digits change width. An odometer that rolls continuously, so the year is never readable at rest, or that has only ten rows, so 9 rolls into a blank. A final value that is rounded or wrong: the last frame is a claim.

## 14. Image sequence scrub on canvas

Pre-rendered frames are played by the scroll position, so film or a 3D render turns under the reader's hand. It gives true film-quality motion with no WebGL. Use it for a rotation, assembly or journey that only a render can show. It is the wrong choice if autoplay video would tell the same story, or if you have no way of producing good frames.

**Numbers.** 96 frames at 960 × 600 WebP, about 22 KB each, 2.1 MB in total. Track about 330 lvh, roughly one frame per 20 px of scroll; much coarser and it stutters. `scrub: 0.4`, `ease: 'none'`. Half the frames under 700 px. Device pixel ratio capped at 2. Load coarse to fine: frame 0, every 16th, every 8th, so a fast scroller gets a rough film at once. Six parallel loaders. Copy scrolls past as real text, not baked into frames.

```html
<section class="film" aria-label="A ringed planet turning into the light">
  <div class="film__stage">
    <img class="film__poster" src="assets/seq/095.webp" width="960" height="600" alt="A banded ringed planet, lit from the left">
    <canvas class="film__canvas" role="img" aria-label="A ringed planet turns from shadow into full light."></canvas>
  </div>
  <div class="film__copy">
    <p><span>Most of the year it is only a dark edge against the stars.</span></p>
    <p><span>The rings catch first, thin as a drawn line.</span></p>
    <p><span>Then the day side rolls round to meet you.</span></p>
  </div>
</section>
<style>
  .film { background: #000; color: #f3ece0; }
  .film__stage { position: relative; overflow: clip; }
  .film__poster { display: block; width: 100%; height: auto; }
  .film__canvas { display: none; }
  .film__copy p { padding: 10vh 6vw; font-size: clamp(1.7rem, 3.6vw, 3.2rem); line-height: 1.1; max-width: 22ch; }
  .motion .film__stage { position: sticky; top: 0; height: 100lvh; }
  .motion .film__poster { display: none; }
  .motion .film__canvas { display: block; width: 100%; height: 100%; }
  .motion .film__copy { position: relative; margin-top: -100lvh; pointer-events: none; }   /* on the copy: on the stage it would never release */
  .motion .film__copy p { min-height: 120lvh; display: flex; align-items: center; padding: 0 6vw; max-width: none; }
  .motion .film__copy p span { display: block; max-width: 20ch; text-shadow: 0 1px 2px #000, 0 0 26px #000; }
  .motion .film__copy p:first-child { min-height: 90lvh; }
</style>
<script>
  motion(() => {
    const FRAMES = 96;
    const stride = matchMedia('(max-width: 699px)').matches ? 2 : 1;   // half the frames on a phone
    const url = i => `assets/seq/${String(i).padStart(3, '0')}.webp`;
    const canvas = document.querySelector('.film__canvas');
    const ctx = canvas.getContext('2d', { alpha: false });
    const images = new Array(FRAMES);
    const seq = { frame: 0 };
    let drawn = null;
    // Closest decoded frame, so a half-loaded film still scrubs.
    function nearest(i) {
      for (let d = 0; d < FRAMES; d++) {
        if (images[i - d]) return images[i - d];
        if (images[i + d]) return images[i + d];
      }
    }
    function draw() {
      const img = nearest(Math.round(seq.frame));
      if (!img || img === drawn) return;
      const k = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const w = img.naturalWidth * k, h = img.naturalHeight * k;
      ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
      drawn = img;
    }
    function size() {
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      drawn = null;
      draw();
    }
    const order = [];
    for (let step = 16; step >= 1; step /= 2) {
      for (let i = 0; i < FRAMES; i += step * stride) if (!order.includes(i)) order.push(i);
    }
    async function worker() {
      while (order.length) {
        const i = order.shift(), img = new Image();
        img.src = url(i);
        try { await img.decode(); images[i] = img; draw(); }
        catch { if (i === 0) document.documentElement.classList.remove('motion'); }   // no first frame: back to the poster
      }
    }
    for (let n = 0; n < 6; n++) worker();
    size();
    ScrollTrigger.addEventListener('refresh', size);
    gsap.to(seq, {
      frame: FRAMES - 1, ease: 'none', onUpdate: draw,
      scrollTrigger: { trigger: '.film', start: 'top top', end: 'bottom bottom', scrub: 0.4 },
    });
    return () => ScrollTrigger.removeEventListener('refresh', size);
  });
</script>
```

- **Heavy and slow:** 120 frames over 450 lvh, `scrub: 1`, one sentence only.
- **Snappy and mechanical:** 24 frames over 200 lvh with `scrub: true`, a stop-motion look where the stepping is the point.
- **Soft and organic:** `scrub: 0.8`, and a CSS `mix-blend-mode: screen` canvas over the page colour, with a black-background render.
- **Touch:** half the frames, the same track, the canvas `100lvh`. Watch memory: 96 decoded frames at 960 × 600 use about 220 MB, so keep phone frames at this size or below.
- **Fallback:** the poster is the real final frame with real alt text, and the copy flows beneath it. If frame 0 fails to load, the page drops to this too.
- **Goes wrong:** loading all frames in order, so a fast scroller sees black. A negative bottom margin on the sticky stage, which stops it releasing, so it covers the next section: put the margin on the copy. Text baked into frames, which no one can select, translate or read at a small size.

## 15. Native CSS with animation-timeline

The browser runs the scroll link itself, off the main thread, with no JavaScript at all. Use it when the effect is one element from A to B over a known range: a progress bar, an image drift, a simple pin reveal. It cannot do velocity, callbacks, measured values, a scrub smoothing delay or sequenced timelines with holds that need calculating. When you need those, use GSAP. Per MDN's data as of November 2026, it is in Chrome 115, Safari 26 and Firefox 159.

**Numbers.** `animation: name linear both`, then `animation-timeline` after it, because the shorthand resets the timeline. `linear`, because the range is the easing. Ranges: `view()` with `cover 0% cover 100%` for the whole crossing, `entry 8% entry 70%` for arrival, `contain 0% contain 80%` for a pin with a hold in the last 20 percent. Aperture track 280 lvh. Text starts at opacity .32 and 1rem of travel, because scrubbed copy can be left mid-range by a reader who stops there.

```html
<div class="progress" aria-hidden="true"></div>
<section class="prose">
  <p class="rise">We left on foot because the train had stopped running.</p>
  <figure class="frame"><img src="assets/ridge-moss.jpg" width="1500" height="960" alt="Green ridges in pale mist"></figure>
  <p class="rise">By the third morning the map had become a suggestion.</p>
</section>
<section class="aperture" aria-label="The final pass">
  <div class="aperture__stage">
    <img class="aperture__img" src="assets/ridge-clay.jpg" width="1500" height="960" alt="Red clay ridges in morning light">
    <p class="aperture__line">Then the pass opened, all at once.</p>
  </div>
</section>
<style>
  .progress { position: fixed; inset: 0 0 auto 0; height: 3px; background: #b4340f; transform-origin: 0 50%; z-index: 9; }
  .prose { padding: 8vh 6vw; display: grid; grid-template-columns: minmax(0, 1fr); gap: 3rem; max-width: 44rem; }
  .frame { position: relative; margin: 0; overflow: clip; aspect-ratio: 16 / 9; }
  .frame img { position: absolute; inset: 0 auto auto 0; width: 100%; height: 120%; object-fit: cover; }
  .aperture__stage { position: relative; overflow: clip; }
  .aperture__img { display: block; width: 100%; height: auto; }
  .aperture__line { position: absolute; left: 6vw; bottom: 6vh; color: #fff; font-size: clamp(1.8rem, 5vw, 4.6rem); line-height: 1; max-width: 16ch; }
  /* Everything that moves lives in here. No support or reduced motion: this block does not exist. */
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      .progress { animation: grow linear both; animation-timeline: scroll(root block); }
      .rise { animation: rise linear both; animation-timeline: view(); animation-range: entry 8% entry 70%; }
      .frame { view-timeline: --frame block; }
      .frame img { animation: drift linear both; animation-timeline: --frame; animation-range: cover 0% cover 100%; }
      .aperture { height: 280lvh; view-timeline: --pin block; }
      .aperture__stage { position: sticky; top: 0; height: 100lvh; }
      .aperture__img { height: 100%; object-fit: cover; animation: open linear both; animation-timeline: --pin; animation-range: contain 0% contain 80%; }
      .aperture__line { animation: land linear both; animation-timeline: --pin; animation-range: contain 62% contain 82%; }
      @keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      @keyframes rise { from { opacity: .32; transform: translateY(1rem); } to { opacity: 1; transform: none; } }
      @keyframes drift { from { transform: translateY(-16.6%); } to { transform: translateY(0); } }
      @keyframes open {
        from { clip-path: inset(24% 30% 24% 30% round 12px); scale: 1.3; }
        to { clip-path: inset(0% 0% 0% 0% round 0px); scale: 1; }
      }
      @keyframes land { from { transform: translateY(1rem); opacity: .32; } to { transform: none; opacity: 1; } }
    }
  }
</style>
```

- **Heavy and slow:** taller tracks and wider ranges, with `cubic-bezier(.76, 0, .24, 1)` per keyframe for a slow middle.
- **Snappy and mechanical:** `steps(10)` as the timing function, for a stop-frame look, on a progress bar or clip.
- **Soft and organic:** the same ranges with opacity and `scale` from `0.98`, `animation-range: entry 0% cover 40%`.
- **Touch:** the best choice on phones, because it does not lag behind native scrolling. Use this for parallax drift.
- **Fallback:** the `@media` and `@supports` wrappers are the fallback. Without them the page is static and whole. No `.motion` class needed.
- **Goes wrong:** a grid column with no `minmax(0, 1fr)`: an `aspect-ratio` child can push it wider than a phone, and `overflow-x: clip` then cuts your text off with no scrollbar to warn you. Writing `animation-timeline` before the `animation` shorthand, which erases it with no warning. Scrubbing layout properties such as `padding`, which gives up the off-main-thread benefit: stay with `transform` and `opacity`. Using `.rise` everywhere, which is the generic fade-up again, only now scrubbed.

## Before you call it done

Run each of these on the finished page, not just on the section:

1. Press End, hold Space, drag the scrollbar. Everything lands in its final state and the bottom arrives fast.
2. Scroll back up slowly. Every effect must reverse cleanly. Most bugs live on the way back.
3. Load the page half-way down, then reload. Scrubs must restore to where the page is, not to their start.
4. Press Tab through the whole page. Focus must never land on something off screen.
5. Resize from wide to narrow and back, and reload at a phone width. Then check a phone in both orientations.
6. Turn JavaScript off and read the page. Turn on reduced motion and read it again. Every word must be there.
7. Check the frames at the extremes: the first frame of a pin, the last frame, the moment each pin lets go.
