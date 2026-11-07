# Motion foundations

The language every other motion chapter assumes: the curves, durations, stagger rules, choreography and brand signature that make a page feel composed, plus the plumbing that keeps content safe when motion fails.

## Recipe index

Every recipe in the cookbook, by chapter, with the feeling it creates. Choose from here, then open only that recipe. The numbers match each chapter's headings.

**foundations.md: the language every page uses**

1. Base page and motion gate: nothing at all. The page is simply there, and never flashes.
2. Easing library: one voice. A small set of curves instead of a hundred one-offs.
3. Springs and interruption: a response, not a performance. It changes its mind when you do.
4. Duration tables: long and short moves feel made by the same hand.
5. Stagger maths: a list of arrivals becomes one wave with a shape.
6. Lead and followers: one authored phrase. The eye goes where it is sent.
7. Page score: an arc, with one loud moment and a rest after it.
8. Motion signature: this brand moves unlike any other.
9. Smooth scroll sync: the whole page gains weight.
10. Branches with matchMedia: no feeling of its own. The same page stays right on every device and setting.
11. CSS scroll-driven animation: steady and native, tied to the scrollbar even on a busy page.
12. Choosing an engine: no feeling of its own. Light pages, and engines that do not fight.
13. Budget and testing: no feeling of its own. Proof that the feeling survives real devices.

**load.md: the first three seconds**

1. Native entrance: quick and sure of itself.
2. Line mask: quiet confidence. The sentence rises as if set from below the baseline.
3. Curtain and shutter: theatrical, brand colour at full volume.
4. Counter hand-off: real anticipation, then one object carries you from waiting to reading.
5. Logo to nav: an introduction. The brand arrives, then steps aside.
6. Image opening: looking through a window as it widens.
7. Letterform assembly: constructed and industrial, parts locking into place.
8. Decode: technical and slightly tense, as if decrypted.
9. Choreographed hero: composed. Nothing unusual, everything on its beat.
10. Zoom through a letter: a title sequence.

**scroll.md: scroll as a timeline the reader holds**

1. Pinned scrub: operating a machine rather than reading past one.
2. Horizontal rail: walking along a wall of pictures.
3. Stacked deck: cards dealt onto a table, and the pile remembers.
4. Sticky swap: turning pages beside a fixed illustration.
5. Parallax depth: distance, as through a train window.
6. Crop on pin: a lens opening, a door swinging wide.
7. Type on scroll: the page speaking louder, or thinking aloud.
8. Theme change: the light changing between scenes.
9. SVG path: a route being walked.
10. Velocity marquee: alive, something that notices you.
11. Velocity skew: the page has mass.
12. Underlay footer: a sheet lifted away. The page gets an ending.
13. Scroll data: holding the argument in your hand.
14. Canvas sequence: film turning under your hand.
15. Native CSS: effortless. A to B with nothing in the way.

**interaction.md: motion that answers a person**

1. Entry-point fill: the button noticed you arrive.
2. Label roll: precise and a little mechanical, a departures board.
3. Key press and sticker: a real switch you want to press.
4. Link underlines: five tones, from quiet reading to one loud mark.
5. Magnetic control: mass. The control leans toward you.
6. Project list reveal: a plain list opens onto a whole archive.
7. Image trail: dealing cards. Exploring becomes play.
8. Tilt and depth: a physical card in the hand.
9. Contextual cursor: the pointer says what a click will do.
10. Drag carousel: thrown and landed, native under the finger.
11. Full-screen menu: a door opening on the whole site.
12. Accordion: calm. Content makes its own room.
13. Tabs: crisp. A colour edge slides across the label.
14. Form states: patient. It waits for you, then rewards a fix at once.
15. Add to cart: cause and effect. The thing lands, then the count changes.
16. Toggles and checkboxes: a tiny two-beat click.

**transitions.md: between pages and states**

1. Same-document view transition: one continuous place.
2. Cross-document view transition: separate pages that feel like one place.
3. Shared-element morph with FLIP: the thing you clicked becomes the thing you see.
4. Full-page wipe between files: changing page is an event.
5. Route colour wipe: colour as your own doing, and as wayfinding.
6. Filter and sort reflow: the eye can follow the set through the change.
7. Modal and sheet with depth: the page steps back. The layer has real depth.
8. Number ticking: the eye goes to what changed, with no badge.
9. Chart draw-in: time passing, once.
10. List insertion and reorder: rows are objects you can track.
11. Toast stack: messages wait politely in the corner.
12. Skeleton to content: the wait goes unnoticed.
13. Optimistic update: instant, because it is.
14. Command palette: as though it was already open.
15. Sidebar collapse: light. The page never rewraps.

**webgl.md: generated imagery**

1. Domain-warped field: expensive and calm, liquid colour lit like cloth.
2. Lit hero object: a real thing you could hold.
3. Text and image distortion: weight in things that are usually flat.
4. Dither and halftone: print or early computing, deliberate at any resolution.
5. Particles forming a wordmark: a name assembling itself from dust.
6. Canvas flow field: drawn, patient, scientific.
7. Goo: wet and playful.
8. SVG turbulence and displacement: handmade edges on real type.
9. Ripple pool: calm water you can touch.

Also in webgl.md: wiring uniforms to GSAP, for a shader that shares one timeline with type and a pinned stage. It has no feeling of its own.

## How to choose

Work in this order. Write the first two down as a comment at the top of your script before animating anything, because every later decision reads from them.

1. **Signature** (Recipe 8): three verbs, one curve family and one tempo, derived from what the brand is.
2. **Score** (Recipe 7): one row per section, a dynamic from quiet to loud, exactly one loudest moment.
3. **Base page** (Recipe 1): content is safe before anything moves.
4. **Engine** (Recipe 12): the lightest tool that can do the job.
5. **Proof** (Recipe 13): test the failure modes as well as the happy path.

Replace these defaults on sight. Each one is what a page does when nobody decided anything.

| Default | Why it looks cheap | Do this instead |
|---|---|---|
| `y: 30, opacity: 0, .6s` on every element | Everything says the same thing, so nothing is said | Assign motion by role (Recipe 6). Most elements do not move |
| One duration everywhere | Small things drag, large things lurch | Scale time with distance (Recipe 4) |
| One ease everywhere | Entrances and exits need opposite curves | Enter on out-curves, leave on in-curves (Recipe 2) |
| A constant `stagger: .1` | Thirty items take three seconds to arrive | Cap the total, ease the gaps (Recipe 5) |
| A new effect per section | It reads as a showreel, not a page | One loud scene, then rest (Recipe 7) |
| Motion that could sit on any site | It says nothing about this business | Move what the business actually moves, and leave the rest still (Recipe 8) |

### Contents

| Recipe | Reach for it when |
|---|---|
| [1. Base page and motion gate](#1-base-page-and-motion-gate) | Starting any page. All later code runs inside it |
| [2. Easing library](#2-easing-library) | Choosing or inventing a curve |
| [3. Springs and interruption](#3-springs-and-interruption) | Motion answers a person, who may change their mind |
| [4. Duration tables](#4-duration-tables) | Choosing how long anything takes |
| [5. Stagger maths](#5-stagger-maths) | More than one thing moves |
| [6. Lead and followers](#6-lead-and-followers) | Composing one moment, such as a hero |
| [7. Page score](#7-page-score) | Composing a whole page |
| [8. Motion signature](#8-motion-signature) | Making this brand move unlike any other |
| [9. Smooth scroll sync](#9-smooth-scroll-sync) | Using Lenis with ScrollTrigger, and pin or sticky |
| [10. Branches with matchMedia](#10-branches-with-matchmedia) | Different motion per device, reduced motion |
| [11. CSS scroll-driven animation](#11-css-scroll-driven-animation) | Scroll-linked effects with no script |
| [12. Choosing an engine](#12-choosing-an-engine) | CSS, WAAPI, GSAP or Motion, and what breaks if you mix them |
| [13. Budget and testing](#13-budget-and-testing) | Before you call any of it finished |

### Dependencies

This table is the one source of pins for the whole cookbook, and every chapter uses these exact URLs. All returned 200 when tested. Every pin is at least two weeks old, so a release with a bug has had time to be found. Each recipe names what it needs from this table. GSAP and all its plugins, SplitText included, are free. Use one GSAP version across every plugin file. The foundations checks also passed on 3.15.1, but move all files together or not at all.

| Name | URL | Gzipped |
|---|---|---|
| gsap | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js` | 28 kB |
| ScrollTrigger | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js` | 18 kB |
| SplitText | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js` | 4 kB |
| CustomEase | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/CustomEase.min.js` | 4 kB |
| Lenis script | `https://cdn.jsdelivr.net/npm/lenis@1.3.27/dist/lenis.min.js` | 5 kB |
| Lenis style | `https://cdn.jsdelivr.net/npm/lenis@1.3.27/dist/lenis.css` | under 1 kB |
| Flip | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Flip.min.js` | 10 kB |
| ScrambleText | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrambleTextPlugin.min.js` | 4 kB |
| Motion | `https://cdn.jsdelivr.net/npm/motion@14.6.0/dist/motion.js` | 60 kB |
| three.js | `https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.min.js`, which imports `three.core.min.js` beside it | 194 kB for both |

### When recipes share a page

Each chapter stands alone, so these are the places two chapters meet.

| Chapter | Class set before paint | What it hides | Boot call |
|---|---|---|---|
| foundations | `motion-pending`, then `motion-on` | `[data-hold]` | `bootMotion()` |
| load | `js-intro`, plus `intro-full` or `intro-short` | `[data-intro]` | `playIntro()` |
| scroll | `motion` | CSS under `.motion` | `motion()` |
| interaction, transitions, webgl | `js` | CSS under `.js` | none |

- **Gates.** The names do not overlap, so the gates can stack. Load each library once. The load chapter defers GSAP, and an inline script runs before deferred ones, so `motion()` would find no engine and switch the page off. On a page with an intro, call `bootMotion` and `motion` from the same `<script type="module">` as `playIntro`, because modules run after deferred scripts.
- **Viewport units.** `lvh` for scroll tracks and for canvases that bleed off the screen, so nothing reflows when the address bar collapses. `svh` for a stage or hero whose content must be seen whole on a phone. `dvh` only for app shells and dialogs, which drive no scroll maths. Never plain `vh` on any of these.
- **Names.** `.rail`, `.plate`, `.bar`, `.roll`, `.frame` and the keyframes `rise` and `drift` each appear in several chapters with different rules, so rename one when they meet. `solveSpring()` here returns a fixed curve. `spring()` in the interaction chapter is a live one you retarget.

## 1. Base page and motion gate

**What it is.** A page that is complete without JavaScript, plus a small gate that holds back only the first screen, only until the engine arrives. Done well it feels like nothing at all. Use it on every page with an entrance. Skip the gate when the first screen does not animate on load, or when all motion is CSS (Recipe 11).

**Numbers.** Watchdog 2000 ms, never above 2500. Hold only elements your first timeline starts hidden, marked `data-hold`. Below the fold needs no CSS hiding, because GSAP writes the start state itself in the same task that creates the tween, so a failed script leaves that content visible. Needs gsap and ScrollTrigger.

```html
<head>
<script>
(function (h) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  h.classList.add('motion-pending');
  window.motionWatchdog = setTimeout(function () {
    h.classList.remove('motion-pending');
    h.classList.add('motion-late');
  }, 2000);
})(document.documentElement);
</script>
<style>
.motion-pending [data-hold] { visibility: hidden; }
</style>
</head>
<body>
<section>
  <h1 data-hold data-lead>The page is readable first.</h1>
  <p data-hold data-follow>Only this first screen is held back, and only for as long as the engine takes to arrive.</p>
</section>
<section class="alt">
  <h2 data-lead>Below the fold needs no CSS hiding.</h2>
  <p data-follow>GSAP writes the start state itself, in the same task that creates the tween, so a failed script leaves this visible.</p>
</section>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script>
async function bootMotion(init) {
  const h = document.documentElement;
  await document.fonts.ready;                        // line breaks and widths are final from here
  clearTimeout(window.motionWatchdog);
  if (h.classList.contains('motion-late')) return;   // too late to animate: leave the page alone
  h.classList.add('motion-on');                      // before init, so GSAP measures the final layout
  try { init(); }
  catch (err) { console.error(err); h.classList.remove('motion-on'); }
  h.classList.remove('motion-pending');
}
bootMotion(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    // Placeholder beats, by role (Recipe 6). The lead wipes on, the follower only fades. Swap in your signature.
    const enter = (scope, scrollTrigger) => gsap.timeline({ scrollTrigger })
      .fromTo(`${scope} [data-lead]`, { clipPath: 'inset(-20% 100% -20% 0%)' },
        { clipPath: 'inset(-20% 0% -20% 0%)', duration: 1.1, ease: 'expo.inOut', clearProps: 'clipPath' })
      .from(`${scope} [data-follow]`, { opacity: 0, duration: .6, ease: 'none' }, .5);
    enter('section:first-child');
    enter('.alt', { trigger: '.alt', start: 'top 70%', once: true });
  });
});
</script>
</body>
```

Every later recipe's script goes inside `bootMotion(() => { ... })` on this page. Why each path is safe:

- **JavaScript off.** No class is ever added, so nothing is hidden.
- **CDN blocked.** `gsap` is undefined, `init()` throws, the catch lifts the gate. Measured: visible about 200 ms after navigation.
- **CDN hanging.** The watchdog lifts the gate at 2 s and sets `motion-late`. When the engine finally arrives, boot does nothing, so nobody has text yanked away while reading it.
- **Slow webfont.** Boot waits on `document.fonts.ready`, so text is split against the real font, and the watchdog still caps the wait.
- **Reduced motion.** The inline script returns first, so the page is never held.

And the usual four:

- **Variations.** What changes the character is how much you hold. *Curtain:* `data-hold` on all of `main`, for a film-like opening. It costs the most perceived speed. *Partial* (default): hold the lead and support, so nav and body show at once and the motion reads as emphasis. *No hold:* the first screen is static and motion begins with scroll, best for reading-first sites and LCP.
- **Touch.** Identical. Slow phones often miss the watchdog, and the page then stays static. Accept that rather than extending the wait.
- **Fallback.** This recipe is the fallback. Never put `opacity: 0` on content in a stylesheet, outside a class that script added.
- **How it goes wrong.** Lifting the gate before fonts settle flashes the headline, then snaps it to its start state. Adding `motion-on` after init changes layout after GSAP measured, so triggers fire in the wrong place. Holding the whole page when only the headline animates delays LCP for nothing.

## 2. Easing library

**What it is.** Ten named curves that carry feeling, defined once. Use the names rather than inline values, so a page has a small vocabulary instead of a hundred one-offs. Limit one page to two or three curves plus `none`.

**Numbers.** "90% at" is the share of the duration at which the move has covered 90% of its distance. You need it for overlap in Recipe 6. Needs gsap and CustomEase.

| Name | cubic-bezier | Nearest GSAP | 90% at | Feels like | Use for |
|---|---|---|---|---|---|
| `settle` | `.22, 1, .36, 1` | `power4.out` | 38% | Quick arrival, quiet finish | Default entrance |
| `glide` | `.16, 1, .3, 1` | `expo.out` | 33% | Long coast to rest | Masked display type, image scale |
| `soft` | `.33, 1, .68, 1` | `power2.out` | 55% | Unshowy, polite | Hover, small interface moves |
| `snap` | `.2, 0, 0, 1` | none | 54% | Brief hesitation, then committed | Menus, tabs, state changes |
| `drive` | `.76, 0, .24, 1` | `power3.inOut` | 69% | A machine moving a load | Wipes, masks with both ends visible |
| `drift` | `.65, 0, .35, 1` | `power2.inOut` | 72% | Breathing | Ambient loops, yoyo |
| `sweep` | `.7, 0, .15, 1` | none | 65% | Reluctant start, long arrival | Page transitions, full-bleed moves |
| `leave` | `.5, 0, .75, 0` | `power3.in` | 98% | Accelerates away | Exits, drops into an impact |
| `kick` | `.34, 1.56, .64, 1` | `back.out(1.7)` | 30% | Overshoots 10%, returns | Confirmations, small badges |
| `land` | custom, two stages | none | 30% | A fast hit, a slow creep to rest | Heavy objects, big type that lands |

Plus `none` for scrubbed motion, marquees and fades, and `steps(n)` for anything mechanical.

**The rule.** Entrances decelerate on out-curves. Exits accelerate on in-curves, so the element leaves at full speed and the eye does not follow it off stage. Moves with both ends on screen use in-out. A position-locked scrub (a rail, parallax, a progress bar) uses `none`, because the hand is already the ease. A beat inside a pinned scene may carry its own in-out, so it comes to rest where a reader can stop.

**Reading and inventing a curve.** In `cubic-bezier(x1, y1, x2, y2)` the first point is how the move leaves and the second is how it arrives. Lower `x1` or raise `y1` and it leaves harder. Raise `x1` past .5 and it hesitates, which reads as weight. Lower `x2` toward 0 and the tail lengthens, which reads as expensive. Take `y1` or `y2` above 1 and it overshoots. Start from the nearest named curve and change one number. Use a custom curve when the brand needs one it owns, or when the move has two stages, which no single bezier can do. Use a spring when the motion answers a person rather than a designed sequence (Recipe 3).

```css
:root {
  --ease-settle: cubic-bezier(.22, 1, .36, 1);
  --ease-glide:  cubic-bezier(.16, 1, .3, 1);
  --ease-soft:   cubic-bezier(.33, 1, .68, 1);
  --ease-snap:   cubic-bezier(.2, 0, 0, 1);
  --ease-drive:  cubic-bezier(.76, 0, .24, 1);
  --ease-drift:  cubic-bezier(.65, 0, .35, 1);
  --ease-sweep:  cubic-bezier(.7, 0, .15, 1);
  --ease-leave:  cubic-bezier(.5, 0, .75, 0);
  --ease-kick:   cubic-bezier(.34, 1.56, .64, 1);
}
```

```js
// One source of truth: CSS owns the numbers, GSAP reads them.
function registerEases(names) {
  gsap.registerPlugin(CustomEase);
  const css = getComputedStyle(document.documentElement);
  for (const n of names) {
    const nums = css.getPropertyValue('--ease-' + n).match(/-?[\d.]+/g).join(',');
    CustomEase.create(n, nums);
  }
}
bootMotion(() => {
  registerEases(['settle', 'glide', 'soft', 'snap', 'drive', 'drift', 'sweep', 'leave', 'kick']);
  // Two stages: a fast hit, then a slow creep to rest. No single bezier can do this.
  CustomEase.create('land', 'M0,0 C.14,.66 .22,.9 .38,.95 .6,.99 .8,1 1,1');
});
```

- **Variations.** Choose a palette and stay in it. *Heavy and slow:* `land` to enter, `sweep` to move, `leave` to go, long tails, no overshoot. *Snappy and mechanical:* `snap`, `none` and `steps(n)`, no tails at all. *Soft and organic:* `soft`, `drift` and `sine.out`, nothing starts or stops hard.
- **Touch.** Curves do not change. Press feedback does: on touch it must begin on contact, so make the press itself `linear` and put the character in the release.
- **Fallback.** Tokens are plain CSS, so transitions keep working without script. Under reduced motion, keep state changes as a short `linear` fade.
- **How it goes wrong.** An out-curve on an exit starts fast, then hangs on screen, which looks limp. Overshoot on anything larger than about 200 px looks like a toy. An ease on a position-locked scrub stops the page tracking the hand, so it feels elastic.

**Tokens in other chapters.** They are these same curves under local names. In interaction, `--ease-out` is `glide` and `--ease-io` is `drive`. In transitions, `--out` is `settle`, `--inout` is `drive` and `--ui` is `snap`. Interaction's `--ease-pop` is a `linear()` spring with 8% overshoot, which is why this chapter's overshoot is called `kick`: `registerEases` can only parse a cubic-bezier.

## 3. Springs and interruption

**What it is.** A curve solved from physics rather than drawn. It has no duration until you solve it, and it feels like a response rather than a performance. Use it for toggles, press releases and anything answering a person. It is the wrong choice for a sequenced hero, where you need to know exactly when each beat ends.

**Numbers.** Damping ratio is `c / (2 * sqrt(k * m))`. Below 1 it overshoots. Settle times are solved to within .2%. Needs gsap. The result works in GSAP as an ease and in CSS as `linear()`, which Chrome 113, Safari 17.2 and Firefox 112 support.

| Name | Stiffness, damping, mass | Ratio | Settles | Overshoot | Feels like |
|---|---|---|---|---|---|
| `snappy` | 420, 34, 1 | .83 | .40 s | 1% | A good switch |
| `gentle` | 120, 16, 1 | .73 | .70 s | 3.5% | A cushioned drawer |
| `wobbly` | 180, 12, 1 | .45 | .93 s | 21% | Jelly, playful |
| `heavy` | 200, 44, 3 | .90 | .71 s | none | A weighted door |

```js
// Damped harmonic oscillator, position 0 to 1. Returns seconds, a 0-1 ease, and a CSS linear() string.
function solveSpring({ stiffness: k = 170, damping: c = 26, mass: m = 1 } = {}) {
  const w0 = Math.sqrt(k / m), z = c / (2 * Math.sqrt(k * m));
  const wd = w0 * Math.sqrt(Math.max(1e-6, 1 - z * z));
  const at = z < 1
    ? (t) => 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + (z * w0 / wd) * Math.sin(wd * t))
    : (t) => 1 - Math.exp(-w0 * t) * (1 + w0 * t);   // damping ratio 1 and above is treated as critical
  let seconds = 4;                                  // walk back from 4s to the last visible wobble
  for (let t = 4; t > 0; t -= 1 / 120) { if (Math.abs(at(t) - 1) > .002) { seconds = t + 1 / 120; break; } }
  const ease = (p) => (p >= 1 ? 1 : at(p * seconds));
  const steps = Math.ceil(seconds * 60);
  const points = Array.from({ length: steps + 1 }, (_, i) => +ease(i / steps).toFixed(4));
  return { seconds, ease, css: `linear(${points.join(', ')})` };
}
const SPRINGS = {
  snappy: { stiffness: 420, damping: 34 },
  gentle: { stiffness: 120, damping: 16 },
  wobbly: { stiffness: 180, damping: 12 },
  heavy:  { stiffness: 200, damping: 44, mass: 3 },
};
bootMotion(() => {
  const solved = Object.fromEntries(Object.entries(SPRINGS).map(([n, s]) => [n, solveSpring(s)]));
  // In CSS, publish it as custom properties.
  document.documentElement.style.setProperty('--spring-css', solved.snappy.css);
  document.documentElement.style.setProperty('--spring-ms', solved.snappy.seconds.toFixed(3) + 's');
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const tl = gsap.timeline();
    gsap.utils.toArray('.card').forEach((card) => {
      const s = solved[card.dataset.spring], puck = card.querySelector('.puck');
      // In a timeline a solved spring owns its duration, so pass both.
      tl.fromTo(puck, { y: 0 }, { y: 78, duration: s.seconds, ease: s.ease }, 0);
    });
  });
});
```

**When the target can change.** People change their minds mid-gesture, and a jump back to a start state makes an interface feel fake. A solved spring cannot keep its velocity if the target moves, so use the right tool for what changes.

```html
<button class="btn" type="button" id="toggle" aria-expanded="false" aria-controls="drawer">Toggle details</button>
<div class="tabs" id="tabs" role="group" aria-label="Range">
  <span class="pill" id="pill"></span>
  <button type="button" aria-pressed="true">Day</button>
  <button type="button" aria-pressed="false">Week</button>
</div>
<div class="field" id="field"><div class="follower" id="follower"></div></div>
<aside class="drawer" id="drawer"><div class="drawer-inner">
  <button class="btn" type="button" id="close">Close</button>
</div></aside>
```

```css
/* Ordinary block without script. The sheet exists only once motion is live. */
.drawer { padding: 24px clamp(16px, 4vw, 40px); }
:is(.motion-pending, .motion-on) .drawer { position: fixed; inset: 0 0 0 auto; width: min(460px, 88vw); padding: 40px 32px; background: var(--ink); color: var(--paper); z-index: 5; visibility: hidden; }
.pill { position: absolute; inset: 0 auto 0 0; width: 25%; background: #e8b9a6; will-change: transform; }
```

```js
// Velocity survives a retarget here, which a solved ease cannot do.
function liveSpring(set, { stiffness = 260, damping = 20, mass = 1 } = {}) {
  let x = 0, v = 0, target = 0, live = false;
  const step = (time, deltaMs) => {
    const dt = Math.min(deltaMs, 32) / 1000;         // a long frame must not detonate the spring
    v += ((target - x) * stiffness - v * damping) / mass * dt;
    x += v * dt;
    if (Math.abs(v) < .005 && Math.abs(target - x) < .002) { x = target; v = 0; gsap.ticker.remove(step); live = false; }
    set(x);
  };
  return { to(next) { target = next; if (!live) { live = true; gsap.ticker.add(step); } } };
}
bootMotion(() => {
  const drawer = document.getElementById('drawer'), toggle = document.getElementById('toggle');
  const pill = document.getElementById('pill'), tabs = [...document.querySelectorAll('#tabs button')];
  const field = document.getElementById('field'), dot = document.getElementById('follower');
  gsap.matchMedia().add({ ok: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => {
    const fast = ctx.conditions.reduce;
    const off = new AbortController(), on = { signal: off.signal };   // one call removes every listener

    // One paused timeline, played in either direction from wherever it is.
    drawer.inert = true;
    const tl = gsap.timeline({ paused: true, reversed: true, defaults: { duration: fast ? .01 : .6 } })
      .set(drawer, { visibility: 'visible' }, 0)
      .fromTo(drawer, { xPercent: 100 }, { xPercent: 0, ease: 'power4.inOut' }, 0)
      .from('.drawer-inner', { x: fast ? 0 : 48, opacity: 0, ease: 'power3.out' }, fast ? 0 : .14);
    const flip = () => {
      const open = tl.reversed();
      tl.timeScale(open ? 1 : 1.5).reversed(!open).resume();   // the same frame, the other direction, exits faster
      toggle.setAttribute('aria-expanded', open);
      drawer.inert = !open;
    };
    toggle.addEventListener('click', flip, on);
    document.getElementById('close').addEventListener('click', flip, on);

    // A spring keeps its momentum when the target changes.
    const setX = gsap.quickSetter(pill, 'xPercent');
    const slide = liveSpring((i) => setX(i * 100));
    tabs.forEach((tab, i) => tab.addEventListener('click', () => {
      fast ? setX(i * 100) : slide.to(i);
      tabs.forEach((t) => t.setAttribute('aria-pressed', t === tab));
    }, on));

    // quickTo reuses one tween, so a pointer can retarget it every frame for free.
    const x = gsap.quickTo(dot, 'x', { duration: fast ? 0 : .55, ease: 'power3' });
    const y = gsap.quickTo(dot, 'y', { duration: fast ? 0 : .55, ease: 'power3' });
    field.addEventListener('pointermove', (e) => {
      const r = field.getBoundingClientRect();
      x(e.clientX - r.left - r.width / 2);
      y(e.clientY - r.top - r.height / 2);
    }, on);
    return () => off.abort();
  });
});
```

One branch serves both settings, because `ctx.conditions` says which one matched. Measured: a sheet reversed mid-flight turned back at the frame it was on, with no snap, and caused 2 layouts in total because it moves a transform and not `height`. A pill moving right and sent back left carried on for a moment, peaked, then returned, which is what makes it feel physical. Set `aria-expanded` and `inert` from intent, not from animation, so they are right at every moment.

- **Variations.** Move stiffness for speed and damping for character. *Tight:* `snappy`, or `liveSpring` at damping 30, for tools. *Cushioned:* `gentle`, for consumer products. *Loose:* `wobbly`, or damping 12, for toys and children's brands, on small things only.
- **Touch.** Springs suit touch best of all, because a release has real momentum. Use them on release, never on the press. Pointer follow means nothing on touch, so hide it under `(hover: none)`. A phone sheet covers its own toggle, so it must carry a close button.
- **Fallback.** Keep a bezier in CSS and put `linear()` inside `@supports (transition-timing-function: linear(0, 1))`. Under reduced motion, set end states directly: the same code with durations of `.01` still changes state, instantly. Build a sheet as an ordinary block that only becomes fixed under `.motion-on`, so it is readable with no script.
- **How it goes wrong.** Ringing longer than a second stops feeling like physics and starts feeling like a bug. A new `gsap.to` on every click stacks tweens that fight each other. Disabling the button until the animation ends makes the interface ignore the person.

## 4. Duration tables

**What it is.** A rule that makes a long move and a short move feel made by the same hand. Twice the distance is not twice the time: duration grows with roughly the cube root of distance. Use `dur()` whenever you know the travel, and the other tables when you do not.

**Numbers.** `dur()` in seconds. Snappy is `tempo: .7`, heavy is `tempo: 1.5`, full-bleed is `weight: 1.6`. Needs nothing.

```js
// tempo: 1 is neutral, .7 snappy, 1.5 heavy. weight: 1 for type and cards, up to 1.6 for full-bleed.
const dur = (px, { tempo = 1, weight = 1 } = {}) =>
  +(0.62 * Math.pow(Math.max(px, 4) / 100, 0.33) * tempo * weight).toFixed(2);
```

| Distance | 8 px | 24 px | 40 px | 120 px | 400 px | 900 px | 1400 px |
|---|---|---|---|---|---|---|---|
| Snappy | .19 | .27 | .32 | .46 | .69 | .90 | 1.04 |
| Neutral | .27 | .39 | .46 | .66 | .98 | 1.28 | 1.48 |
| Heavy | .40 | .58 | .69 | .99 | 1.47 | 1.92 | 2.22 |
| Full-bleed | .43 | .62 | .73 | 1.05 | 1.57 | 2.05 | 2.37 |

| Element | Typical travel | Enter | Exit |
|---|---|---|---|
| Icon, chip, tag | 4 to 12 px | .16 to .28 s | .12 to .2 s |
| Button, menu item, list row | 0 to 12 px | .24 to .4 s | .16 to .28 s |
| Card, quote, figure | 0 to 12 px | .3 to .5 s | .2 to .3 s |
| Image block, half viewport | mask or 300 to 500 px | .9 to 1.25 s | .6 to .8 s |
| Display line behind a mask | its own height | 1.1 to 1.4 s | .5 to .7 s |
| Full-bleed wipe on load, with the stage to itself | viewport | 1.1 to 1.6 s | .7 to 1 s |

| Job | Range | Why |
|---|---|---|
| Feedback: press | 60 to 120 ms | Must feel like contact |
| Feedback: hover, focus | 150 to 300 ms, median 200 on controls and 300 on cards, up to 420 on a heavy brand | Answers the pointer, and nobody waits for it |
| Response: menu, tab, tooltip | 180 to 320 ms | A consequence, not an event |
| Reveal: followers, scroll entrances | .3 to .6 s | Seen in passing, must not delay reading |
| Statement: the hero lead | .6 to 1.1 s, or 1.1 to 1.6 s on a showy page | It has the stage |
| Transition: route change | 0 to .2 s, or .6 to .9 s on a showy site | The person is waiting, so cap it |
| Ambient: loops and drift | 6 to 20 s a cycle | Slower than breathing or it distracts |

Three rules sit over all of these. An exit takes about 65% of its entrance. Anything a person triggers starts within 100 ms. The first screen must be readable by 1.2 s on a page that is selling something, and by 2 s on any page, cover included. Its last ornament may land later. 2.5 s is the worst case, when the watchdog fires.

- **Variations.** Tempo is the strongest personality control, so set it once per brand. *Mechanical:* `tempo: .7` with no tails. *Neutral:* `tempo: 1`. *Heavy or luxurious:* `tempo: 1.5` on long-tailed curves.
- **Touch.** Add no phone multiplier. Distances are smaller on a phone, so `dur()` already shortens everything by 10 to 15%. Pass the real pixel distance.
- **Fallback.** Durations carry no content risk. Under reduced motion, drop travel to zero and use 150 to 200 ms of opacity where state must still be visible.
- **How it goes wrong.** A global `duration: .6` is too slow for a button and too fast for a wipe. A 400 ms hover in a tool feels broken however nice the curve is. A 2 s entrance on text someone came to read is an obstacle, not an effect.

## 5. Stagger maths

**What it is.** Delay as a designed field across a group, not a constant. It turns a list of arrivals into one wave with a shape. Use it for three or more siblings. It is the wrong choice for two items, which need a lead and a follower, and for long body text.

**Numbers.** Think in totals first: a stagger has a budget, and the delay of item `i` is `amount * ease(i / (n - 1))`. Needs gsap and ScrollTrigger, or nothing for the CSS version, where `pow()` works in Chrome 120, Safari 15.4 and Firefox 118.

| Unit | Gap each | Cap on total |
|---|---|---|
| Characters | .012 to .03 s | .6 s |
| Words | .03 to .06 s | .8 s |
| Lines of display type | .08 to .12 s | .5 s |
| Cards, rows | .05 to .1 s | .5 s |
| Grid cells | .01 to .03 s | .7 s |

Overlap ratio is gap divided by duration, and it decides what the group reads as. Under .08 is one mass that shimmers. From .1 to .25 is a wave, the default. Over .4 is a queue, one at a time, for three to five items worth reading individually.

**Easing the stagger itself.** The stagger has its own curve, separate from the tween's. An `in` curve, `power2.in` or a CSS `pow()` above 1, makes early gaps small and late gaps wide: the wave rushes out and then slows, which reads as settling. An `out` curve makes early gaps wide and late gaps small: the wave gathers speed, which reads as building.

```js
// Keep a stagger inside its budget: per-item gap, capped total.
const staggerAmount = (n, gap, cap) => Math.min((n - 1) * gap, cap);

const STAGGERS = {
  wipe:   { amount: staggerAmount(64, .02, .7) },
  bloom:  { amount: .7, grid: 'auto', from: 'center', ease: 'power2.out' },
  gather: { amount: .7, grid: 'auto', from: 'edges',  ease: 'power2.in' },
  rake:   { amount: .7, grid: 'auto', from: [0, 0], axis: 'y' },
};
bootMotion(() => {
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const tl = gsap.timeline();
    document.querySelectorAll('.cells').forEach((g) => {
      tl.fromTo(g.children, { scale: .2, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: .55, ease: 'power3.out', stagger: STAGGERS[g.dataset.demo] }, 0);
    });
  });
});
```

`.cells` is any grid, with `data-demo` naming the field it uses.

The same eased stagger in CSS alone. Set `--n` on the row and `--i` on each item. With a 600 ms budget and twelve items, the delays come out at 0, 8, 28, 58, 97, 145, 202, 266, 338, 418, 505 and 600 ms.

```css
.css-row span { flex: 1; height: 56px; background: var(--ink);
  --t: calc(var(--i) / (var(--n) - 1));
  transition: transform .8s var(--ease-settle), opacity .8s linear;
  transition-delay: calc(pow(var(--t), 1.8) * 600ms); }
.motion-on .css-row:not(.in) span { transform: translateY(40px); opacity: 0; }
```

- **Variations.** The same tween with a different field tells a different story. *Wipe:* in order, for sequence and reading. *Bloom:* from the centre on an `out` curve, a shock accelerating outward, for energy. *Gather:* from the edges on an `in` curve, slowing into the middle, for focus. *Rake:* down one axis, for mechanical, row-by-row brands.
- **Touch.** Use `grid: 'auto'`, which measures real positions, so the wave stays correct when four columns collapse to two. Set budgets on what is visible: a stagger across forty off-screen items wastes its whole delay.
- **Fallback.** The CSS start state lives behind `.motion-on`, so without script the row is simply visible. In a matchMedia branch, add the visible class on revert, so a live switch to reduced motion cannot strand it.
- **How it goes wrong.** A constant gap on a long list means the last item arrives after the reader has left. Staggering in DOM order across two columns makes the wave zigzag, so use `grid: 'auto'` or trigger per row. Staggering below the fold wastes the moment, so use `ScrollTrigger.batch` and let each group start when it appears.

## 6. Lead and followers

**What it is.** One moment composed like a phrase: a cue, one lead, a support that overlaps it, followers, then stillness. The eye goes where you send it. Use it for heroes and any moment that should feel authored. Do not use it for repeating cards, which suit a plain stagger.

**Numbers.** Motion has levels. Each one down travels less, takes less time and draws less attention. Assign every element a level. Most of a page is the last row. These numbers are the showy end, for a hero with the stage to itself. On a product page, run the lead as a 6 to 12px rise or a fade in place over .6 to 1.1 s, the support at 12px or less, and the rest as opacity or nothing. Needs gsap, CustomEase and SplitText.

| Level | What it is | Motion | Duration | Ease | Count per screen |
|---|---|---|---|---|---|
| Lead | The largest statement | Mask, 100 to 126% of its height | 1.1 to 1.6 s | `glide` | Exactly one |
| Support | Image, second block | Mask, or 40 to 80 px on a block that is not text | .9 to 1.25 s | `drive`, `settle` | One or two |
| Follow | Rules, labels, figures | 12 to 24 px, or draw | .6 to .9 s | `settle` | Up to six |
| Ambient | Meta, nav, body copy | Opacity only, or nothing | .4 to .7 s | `none` | The rest |

The four craft moves, in numbers:

- **Overlap.** Start the next beat when the last has covered about 85% of its distance, not when it ends. That comes early on out-curves, so use the 90% column in Recipe 2. A 1.3 s `glide` lead can hand over at .38 s. A 1 s `drive` lead cannot hand over before about .6 s.
- **Anticipation.** On arrival, use a cue: a small mark moves first, about .3 s ahead, so the eye is waiting in the right place. On departure, use a counter-move: about 10% of the travel in the opposite direction, over about a quarter of the time. Keep both for moments a person notices. Never add them to a scroll reveal.
- **Follow-through.** A child outlives its parent by .3 to .6 s, so the contents are still settling when the frame has stopped. Give the child a longer duration from the same start.
- **Rest.** When the phrase ends, everything stops. No idle loop on the hero. Stillness is what makes the next beat land.

```css
/* A mask at tight leading cuts ascenders and descenders. Replace its overflow with a clip-path past the line box. */
h1 .line-mask { overflow: visible !important; clip-path: inset(-.14em -.08em); }
```

```js
function buildHero() {
  const split = SplitText.create('[data-beat="lead"]', { type: 'lines', mask: 'lines', linesClass: 'line' });
  const tl = gsap.timeline({ defaults: { ease: 'settle' }, onComplete: () => split.revert() });
  tl.addLabel('cue', 0)                              // anticipation: give the eye a place to wait
    .fromTo('[data-beat="follow"]', { scaleX: 0 }, { scaleX: .1, duration: .4 }, 'cue')
    .addLabel('lead', 'cue+=.3')
    .from(split.lines, { yPercent: 120, duration: 1.3, ease: 'glide', stagger: .09 }, 'lead')
    .addLabel('support', 'lead+=.38')                // overlap: glide is past 80% of its travel here
    .from('[data-beat="support"]', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.25, ease: 'drive' }, 'support')
    .from('.plate-inner', { scale: 1.28, duration: 1.75, ease: 'glide' }, 'support')  // follow-through: outlives its mask
    .addLabel('follow', 'lead+=1.05')
    .to('[data-beat="follow"]', { scaleX: 1, duration: 1.05, ease: 'drive' }, 'follow')
    .addLabel('ambient', 'lead+=1.3')
    .from('[data-beat="ambient"]', { opacity: 0, duration: .7, ease: 'none', stagger: .06 }, 'ambient');
  return tl;
}
// A leave needs a counter-move: the plate dips before it goes, and its contents lag behind it.
function buildLeave() {
  return gsap.timeline({ paused: true })
    .to('.plate', { y: 18, duration: .2, ease: 'power2.out' }, 0)
    .to('.plate', { y: -160, opacity: 0, duration: .55, ease: 'leave' }, .2)
    .to('.plate-inner', { yPercent: 12, duration: .75, ease: 'power2.in' }, .2)
    .to('h1', { y: -48, opacity: 0, duration: .5, ease: 'leave' }, .32);
}
bootMotion(() => {
  gsap.registerPlugin(CustomEase, SplitText);
  CustomEase.create('settle', '.22,1,.36,1');
  CustomEase.create('glide', '.16,1,.3,1');
  CustomEase.create('drive', '.76,0,.24,1');
  CustomEase.create('leave', '.5,0,.75,0');
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    window.__score = buildHero();
  });
});
```

Name beats with labels and hang every position off a label, so moving one beat moves what depends on it, and `tl.pause('support')` gives a repeatable frame to test (Recipe 13). This score runs 2.48 s, and the headline is readable about 1 s in. Revert the split when it finishes, so the text reflows normally on resize.

- **Variations.** Change the gaps and the lead's curve. *Heavy and slow:* lead on `land` at 1.6 s, one line with no stagger, support at `lead+=.7`, so each beat hits alone. *Snappy and mechanical:* lead on `snap` at .6 s, support at `lead+=.12`, no ambient beat, no follow-through. *Soft and organic:* opacity with 16 px of drift, no masks, every beat inside the last at `lead+=.15`.
- **Touch.** Keep the same score. When the support stacks below the headline, check it is still on the first screen, and otherwise give it its own trigger.
- **Fallback.** All start states come from `from` tweens inside the matchMedia branch, so reduced motion and a failed script both show the finished page. `data-hold` covers only the gap before boot.
- **How it goes wrong.** Two leads: if the headline and the image both arrive at full strength, neither reads. Beats in strict sequence with no overlap feel like a slideshow. Leading below 1 inside a plain `overflow: clip` mask slices off descenders during the move, which is what the `clip-path` above prevents. A headline in a shrink-to-fit parent re-centres when split and again when reverted, which registers as layout shift, so give the wrapper `width: 100%`.

## 7. Page score

**What it is.** The page's motion written as music: one row per section, a dynamic, a technique and a reason, decided before any code. Without a score you get a pile of effects. With one the page has an arc. Use it on anything over two screens.

**Numbers.** Dynamics run `pp` (still), `p` (ambient), `mf` (a reveal), `f` (a feature), `fff` (the one scene). Allow one `fff` per page and at most two `f`, and a product page may have no `fff` at all. Never put two loud sections side by side, and follow `fff` with a rest. Give a pinned scene 60 to 100 lvh of scroll per step, 80 by default: under that it rushes, over it drags. Track height is that travel plus 100 lvh for the stage. This example is 340 lvh for three steps. Needs gsap and ScrollTrigger. Write yours as a table first:

| Section | Dynamic | Technique | Trigger | Why |
|---|---|---|---|---|
| Hero | `f` | Masked lines, the only motion on screen | Load | Sets the voice |
| Statement | `p` | One line of ink resolves, then holds | Once | Text is triggered, not scrubbed, so a paused reader can read it |
| Method | `fff` | Sticky stage, stepped scrub | Scrub | The one thing to remember |
| Note | `pp` | Nothing | None | The rest that makes the next beat land |
| Figures | `mf` | Numbers count once and stop | Once | Proof, delivered quickly |
| Close | `mf` | One mask, no stagger | Once | Ends on a clear gesture |

The key to the `fff` scene is that it exists only in CSS that script has switched on. Without `motion-on` it is stacked content. Use the same media query in CSS and in matchMedia, so layout and timeline change together.

```css
/* The scene is plain stacked content unless motion is live. Sticky carries the pin. */
.scene-step { padding: 72px clamp(16px, 4vw, 48px); }
.swatch { display: none; }
@media (min-width: 900px) and (prefers-reduced-motion: no-preference) {
  .motion-on .scene { height: 340lvh; }
  .motion-on .scene-stage { position: sticky; top: 0; height: 100lvh; overflow: clip; }
  .motion-on .scene-steps { position: absolute; left: 4vw; bottom: 9vh; width: 42vw; display: grid; gap: 5vh; }
  .motion-on .scene-step { padding: 0; }
  .motion-on .swatch { display: block; position: absolute; right: 4vw; top: 10lvh; width: 42vw; height: 80lvh; background: var(--mark); }   /* stand-in: your diagram or photograph */
}
```

```js
const OK = '(prefers-reduced-motion: no-preference)';

bootMotion(() => {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  // fff: the one big scene, desktop only. Sticky pins it, scrub drives a timeline.
  mm.add(`${OK} and (min-width: 900px)`, () => {
    const steps = gsap.utils.toArray('.scene-step');
    gsap.set(steps.slice(1), { opacity: .32 });           // dimmed, never hidden: all three stay readable
    const tl = gsap.timeline({ defaults: { ease: 'none' },
      scrollTrigger: { trigger: '[data-m="scene"]', start: 'top top', end: 'bottom bottom', scrub: true } });
    steps.slice(1).forEach((step, i) => {
      tl.to(steps[i], { opacity: .32, duration: .35 }, i + .3)
        .to(step, { opacity: 1, duration: .35 }, i + .3)
        .to('.swatch', { clipPath: `inset(${(i + 1) * 22}% 0% 0% 0%)`, duration: .7 }, i + .1);
    });
  });
});
```

Markup: `[data-m="scene"].scene` holds `.scene-stage`, which holds `.swatch` and `.scene-steps` with one `.scene-step` per step.

Dim past steps instead of hiding them. Crossfading text in one spot makes a moment where two headings overlap and neither can be read, and it leaves content that exists only mid-animation. Keep the other beats in a branch with no width condition, so a resize cannot rebuild them.

- **Variations.** Move the `fff`, and the same techniques make a different page. *Cold open:* `fff` on the hero, decaying to `p`, for launches. *Crescendo:* quiet until `fff` at the close, for long reads. *Pulse:* `mf` and `pp` alternating with no `fff`, for catalogues, where scenes would get in the way of browsing.
- **Touch.** The scene becomes the stacked version below 900 px. Default to that, because a phone's scroll is precious. If the scene must stay pinned, use sticky, shorten each step to about 60 lvh and stay under 240 lvh of travel, as the scroll chapter does.
- **Fallback.** With script off, on phones and under reduced motion, the scene is three readable blocks. Counters start from the real number in the HTML, so a failed script still shows true figures.
- **How it goes wrong.** A different loud effect in every section: with no quiet there is no loud. A scene that outstays its content: one sentence does not need a screen of scroll. Numbers that recount on every revisit: proof should arrive once.

## 8. Motion signature

**What it is.** A small set of verbs and rules, derived from what the brand is, that stay constant across the page. It is why a site feels authored when every other part of it could be swapped. Use one on every brand site. A plain tool can have a very quiet one, but it should still have one.

**Numbers.** Three verbs. One curve family. One tempo. One edge treatment. One axis. Derive them by asking what the brand is made of: its material, its weight, how it starts and stops. Needs gsap and ScrollTrigger. Then write the spec:

```text
brand truth:  iron poured by hand; mass; impact
verbs:        press, stamp, hold
curve family: power4.in into a short recovery; no overshoot
tempo:        .46 s hit, .24 s hold
axis, edge:   vertical only; hard crop
surfaces:     load = drop and squash; scroll = same, once; press = 50 ms, 4 px; transition = shutter falls
never:        soft fades, overshoot, drift
```

On a brand site, the test is whether each verb reaches all four surfaces: load, scroll, press and page transition. A verb that appears only in the hero is an effect, not a signature. On a product site, the verbs can live in press and state changes alone.

| Brand | Verbs | Curve | Tempo | Edge | Never |
|---|---|---|---|---|---|
| Foundry | press, stamp, hold | `power4.in`, recovery | .46 s, then .24 s hold | Hard crop | Overshoot, slow fades |
| Skincare | bloom, breathe, dissolve | `sine.out` | 2 s, heavy overlap | Blur, radial | Hard masks, steps |
| Rail timetable | tick, index, lock | `steps(n)`, `none` | 120 ms grid | Whole glyphs, 8 px units | Any curve |
| Ledger software | tally, align, settle | `snap`, no tail | .18 to .28 s | 1 px rules, no travel | Scale, blur |
| Ferry operator | swell, lift, carry | `drift` | 1.4 s, long overlap | Soft, vertical roll | Stops, steps |
| Archive | file, slide, shelve | `drive` | .7 s | Horizontal only, hard | Vertical moves |

```css
/* The verb reaches the smallest surface too. One rule, one token set per brand. */
.press { --press: translateY(4px) scale(.985); --press-t: 50ms; --press-e: linear;
         --rel-t: 380ms; --rel-e: cubic-bezier(.16, 1, .3, 1); }
.bloom { --press: scale(.96); --press-t: 260ms; --press-e: cubic-bezier(.37, 0, .63, 1);
         --rel-t: 900ms; --rel-e: cubic-bezier(.16, 1, .3, 1); }
.tick  { --press: translateY(8px); --press-t: 0ms; --press-e: linear;
         --rel-t: 120ms; --rel-e: steps(2, end); }
.act { transition: transform var(--rel-t) var(--rel-e); }
.act:active { transform: var(--press); transition: transform var(--press-t) var(--press-e); }
@media (prefers-reduced-motion: reduce) { .act, .act:active { transition: none; } }
```

```js
// A signature is one enter() per brand. The page calls enter(); it never picks a curve itself.
const SIGNATURES = {
  press: {
    enter(root) {
      const lead = root.querySelector('[data-part="lead"]');
      const items = root.querySelectorAll('[data-part="items"] > div');
      const meta = root.querySelectorAll('[data-part="meta"]');
      const tl = gsap.timeline();
      tl.from(lead, { yPercent: -60, opacity: 0, duration: .46, ease: 'power4.in' })
        .fromTo(lead, { scaleY: .9, scaleX: 1.015 },
          { scaleY: 1, scaleX: 1, duration: .42, ease: 'power3.out', immediateRender: false })
        .to({}, { duration: .24 })                                        // the hold is part of the verb
        .from(items, { y: -56, opacity: 0, duration: .34, ease: 'power4.in', stagger: .16 }, '>')
        .from(meta, { opacity: 0, duration: .01, stagger: .16 }, '<.2');  // hard cut, no fade
      return tl;
    },
  },
  bloom: {
    enter(root) {
      const parts = root.querySelectorAll('[data-part="lead"], [data-part="items"] > div, [data-part="meta"]');
      const soft = innerWidth < 720 ? {} : { filter: 'blur(16px)', clearProps: 'filter' };  // blur is the costly part
      return gsap.from(parts, {
        opacity: 0, scale: .93, duration: 2, ease: 'sine.out',
        stagger: { amount: .8, from: 'center' }, ...soft,
      });
    },
  },
  tick: {
    enter(root) {
      const T = .12;                                                       // one tick
      const tl = gsap.timeline({ defaults: { ease: 'none' } });
      const lead = root.querySelector('[data-part="lead"]');
      const glyphs = lead.textContent.length;                              // monospace, so one step is one glyph
      tl.from(lead, { clipPath: 'inset(0% 100% 0% 0%)', duration: T * glyphs * .5, ease: `steps(${glyphs})` })
        .from(root.querySelectorAll('[data-part="items"] > div'), { x: -32, opacity: 0, duration: T * 2, ease: 'steps(4)', stagger: T * 2 })
        .from(root.querySelectorAll('[data-part="meta"]'), { opacity: 0, duration: T, ease: 'steps(1)', stagger: T });
      return tl;
    },
  },
};
bootMotion(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    document.querySelectorAll('[data-signature]').forEach((root) => {
      const tl = SIGNATURES[root.dataset.signature].enter(root);
      ScrollTrigger.create({ animation: tl, trigger: root, start: 'top 62%', once: true });
    });
  });
});
```

- **Variations.** The three signatures are the variations, and they differ in six named parameters: tempo, curve family, axis, edge (crop, blur, whole units), overlap (none in `tick`, heavy in `bloom`) and hold (present in `press`, absent elsewhere). Two sites feel different when at least three of these differ.
- **Touch.** On a phone the press is often the only surface a person touches, so it carries the signature. The `tick` press has no transition at all, so it snaps. The `bloom` entrance drops blur below 720 px, because a full-width blur is the most expensive thing on the page.
- **Fallback.** The loop runs only inside the `no-preference` matchMedia branch. The press tokens are plain CSS, so they survive script failure, and under reduced motion they become an instant state change.
- **How it goes wrong.** A signature that is really one effect: if it cannot appear on a button, it is not a signature. Generic moves leaking back in: one `power2.out` fade in a stepped brand undoes the rest. Strobing: a fast tick must not flash a large area more than three times a second.

## 9. Smooth scroll sync

**What it is.** Lenis eases the wheel, ScrollTrigger reads the same value in the same frame, and GSAP's ticker drives both, so there is one clock. It gives weight to the whole page. Use it when scrubbed scenes are the point. Skip it for reading-first sites, and for mechanical brands, where direct native scroll is more honest.

**Numbers.** `lerp: .1`, `wheelMultiplier: 1`. Use `scrub: true`, never a number. Lenis already smooths the scroll, so a numeric scrub smooths it twice and the page feels detached from the hand. Without Lenis, `.3` to `.6` adds a little weight, and `1` to `1.5` suits a deliberately heavy brand. Above `2` it reads as lag. Measured under a 4x CPU throttle: pin drift under 1 px, no layout shift. Needs gsap, ScrollTrigger, and the Lenis script and style.

```js
function startSmoothScroll() {
  const lenis = new Lenis({ lerp: .1, wheelMultiplier: 1, anchors: { offset: 0 } });
  const raf = (time) => lenis.raf(time * 1000);       // GSAP ticks in seconds, Lenis wants milliseconds
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);                        // never let the clock jump behind the scroll
  return () => { gsap.ticker.remove(raf); gsap.ticker.lagSmoothing(500, 33); lenis.destroy(); };
}
bootMotion(() => {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  const OK = '(prefers-reduced-motion: no-preference)';

  mm.add(OK + ' and (hover: hover) and (pointer: fine)', startSmoothScroll);

  // Horizontal pin on large screens with a pointer. Touch keeps the native swipe rail.
  mm.add(OK + ' and (min-width: 900px) and (hover: hover) and (pointer: fine)', () => {
    const rail = document.getElementById('rail');
    gsap.set(rail, { overflow: 'visible', scrollSnapType: 'none', width: 'max-content' });
    const travel = () => rail.scrollWidth - innerWidth;
    gsap.to(rail, { x: () => -travel(), ease: 'none',
      scrollTrigger: { trigger: '#work', pin: true, pinType: 'transform', start: 'top top', end: () => '+=' + travel(),
                       scrub: true, invalidateOnRefresh: true } });   // transform: Lenis scrolls on the main thread here
  });
});
```

Markup: `#work` holding `#rail`, a row of panels. Out of the box `#rail` is a native swipe row, with `overflow-x: auto` and `scroll-snap-type: x`.

**Pin or sticky.** Prefer `position: sticky` whenever it can do the job (Recipe 7). When you need `pin`, set `pinType` deliberately. Default `pin: true` on the window scroller holds perfectly but reported a CLS of about 1.3 in Chrome, with or without Lenis, from two layout shifts at pin start and end that nobody can see. That score still counts against Core Web Vitals. `pinType: 'transform'` and sticky both reported 0 with no drift. Use `transform` only where Lenis runs, as above: on native scroll the compositor moves the page before the main thread can correct it, which shows as a shake.

- **Variations.** Move `lerp`. *Liquid:* `.07`, for heavy, luxurious brands, with short travel or it feels laggy. *Neutral:* `.1`. *Tight:* `.16`, a slight softening most people will not notice.
- **Touch.** Never run Lenis on touch. Native momentum is better, and people notice when it is replaced. The matchMedia query keeps it off, and the rail stays a native swipe with `scroll-snap`.
- **Fallback.** Lenis never runs under reduced motion, so scrolling is native. The default CSS is a working swipe rail, and all pin behaviour is added by script. Keyboard scrolling and anchor links were checked with Lenis running.
- **How it goes wrong.** Two clocks: `autoRaf: true` plus a ticker hook runs Lenis twice a frame, so pick the ticker. `scroll-behavior: smooth` on `html` fights Lenis on every frame, so load the Lenis stylesheet. A nested scroller needs `data-lenis-prevent`, so the wheel moves it and the page holds still. `ScrollTrigger.normalizeScroll` alongside Lenis gives scroll two owners.

## 10. Branches with matchMedia

**What it is.** A set of conditions, each owning its own animations, that GSAP builds and tears down as conditions change, including a live switch to reduced motion. Use it for all GSAP motion, even with one branch, because it is the cleanup system. Reduced motion is a branch, not an early return.

**Numbers.** Breakpoint 900 px for scenes. Use `max-width: 899.98px` for the opposite side, so no width matches neither. Reduced branch: opacity only, .2 s, `.05` stagger. Needs gsap and ScrollTrigger. Pair the wide branch with the CSS pattern from Recipe 7.

```js
bootMotion(() => {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  const OK = '(prefers-reduced-motion: no-preference)';

  // Everything that should only ever run once, at any width.
  mm.add(OK, () => {
    gsap.fromTo('h1', { clipPath: 'inset(-20% 100% -20% 0%)' }, { clipPath: 'inset(-20% 0% -20% 0%)', duration: 1.1, ease: 'expo.inOut', clearProps: 'clipPath' });
    ScrollTrigger.batch('.reveal-list li', { start: 'top 88%', once: true,
      onEnter: (els) => gsap.from(els, { x: -16, opacity: 0, duration: .7, ease: 'expo.out', stagger: .08 }) });
  });

  // Wide layouts: CSS makes the stage sticky, this branch only adds the scrubbed timeline.
  mm.add(OK + ' and (min-width: 900px)', () => {
    const tl = gsap.timeline({ defaults: { ease: 'none' },
      scrollTrigger: { trigger: '#track', start: 'top top', end: 'bottom bottom', scrub: true } });
    tl.from('#scene > div', { yPercent: 70, opacity: .32, stagger: .4 });
  });

  // Narrow layouts: no pin, one trigger per panel.
  mm.add(OK + ' and (max-width: 899.98px)', () => {
    gsap.utils.toArray('#scene > div').forEach((el) => {
      gsap.from(el, { opacity: 0, y: 16, duration: .7, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    });
  });

  // Reduced: keep the meaning of state changes, drop the travel.
  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.from('#scene > div', { opacity: 0, duration: .2, stagger: .05, ease: 'none',
      scrollTrigger: { trigger: '#scene', start: 'top 90%', once: true } });
  });
});
```

Keep run-once reveals in a branch with no width condition, so rotating a phone cannot rebuild them and replay the page. Return a function from a branch for any cleanup GSAP cannot see, such as listeners. In a component framework, build the same `mm` inside an effect and return `() => mm.revert()`. Measured: revert leaves no triggers and no inline styles behind.

- **Variations.** Decide what reduced motion means for this brand. *Fade only* (above): state changes stay visible, nothing travels. *Still:* no branch at all, best for reading-first sites whose motion is all ornament. *Stepped:* for a data story where a change carries meaning, swap scrub for short crossfades.
- **Touch.** Add `(hover: hover) and (pointer: fine)` to anything that needs a real pointer. A width query is not a touch query: large tablets are wide and have no hover.
- **Fallback.** Every branch only ever adds motion to a finished page. Separately, any auto-playing loop longer than 5 seconds needs a visible pause control, whatever the motion setting.
- **How it goes wrong.** `if (reduced) return` at load ignores someone who changes the setting while the page is open. `gsap.set` outside any branch survives revert and strands the element. Listeners added in a branch with no cleanup returned stack up on every resize.

## 11. CSS scroll-driven animation

**What it is.** Scroll-linked motion declared in CSS, with no script, running on the compositor, so it keeps moving when the main thread is busy. Use it for progress bars, parallax and scrubbed reveals that map directly to scroll position. It is the wrong choice for one-shot reveals, because it runs backward as you scroll up, and for scenes with sequenced beats.

**Numbers.** `animation-timing-function: linear`, always. Reveal range `entry 8% cover 32%`. Parallax range `cover`, with 11% travel on an image overscanned by 14%. Reveals start from opacity .32 and 16 px, never 0: this is scrubbed, so a reader can stop on any frame. Horizontal strip 300 lvh for five panels. Support: Chrome 115, Safari 26, Firefox 159, and `@supports` makes the rest safe. Needs nothing.

```css
.bar { display: none; }
.plate { height: 70vh; margin: 8vh clamp(16px, 5vw, 64px); overflow: clip; position: relative; }
.plate i { position: absolute; inset: -14% 0; background: repeating-linear-gradient(115deg, #e4572e 0 40px, #101312 40px 80px); }
.track .strip { display: flex; gap: 16px; padding: 16px; overflow-x: auto; }

/* Everything below is enhancement. Remove it and the page above is complete. */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .bar { display: block; position: fixed; inset: 0 0 auto; height: 3px; background: var(--mark); transform-origin: 0 50%; z-index: 9;
      animation: grow-x linear both; animation-timeline: scroll(root block); }
    @keyframes grow-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }

    /* One keyframe only: the "to" state is the element's own CSS. */
    .rise { animation: rise linear both; animation-timeline: view(); animation-range: entry 8% cover 32%; }
    @keyframes rise { from { opacity: .32; transform: translateY(16px); } }

    .plate { view-timeline: --plate block; }
    .plate i { animation: drift linear both; animation-timeline: --plate; animation-range: cover; }
    @keyframes drift { from { transform: translateY(-11%); } to { transform: translateY(11%); } }

    @media (min-width: 900px) {
      .track { height: 300lvh; view-timeline: --track block; }
      .track .strip { position: sticky; top: 0; height: 100lvh; align-items: center; overflow: visible; width: max-content;
        animation: slide linear both; animation-timeline: --track; animation-range: contain; }
      @keyframes slide { to { transform: translateX(calc(-100% + 100vw)); } }
    }
  }
}
```

The plate names a timeline on the frame because the image inside is overscanned, so `view()` on the image would start and end early. The frame is what actually crosses the viewport.

- **Variations.** Change the range and the property. *Quick rise:* `entry 8% cover 32%`, finished well before the element is centred. *Slow parallax:* `cover` with 11% travel, depth with no attention drawn to it. *Scene without script:* sticky plus `contain`, a complete horizontal strip in CSS.
- **Touch.** It runs on touch with no jitter, which is its strongest argument. The strip query stops below 900 px, leaving a native swipe rail.
- **Fallback.** Without support the rules never apply, and the page above them is already complete: the bar stays `display: none`, blocks sit at full opacity, and the strip scrolls sideways. Under reduced motion no animation exists at all.
- **How it goes wrong.** `animation-timeline` written before the `animation` shorthand: the shorthand resets it, so the effect silently never runs. An ancestor with `overflow: hidden` becomes the scroller that `view()` tracks, so use `overflow: clip`. Forgetting `linear`: the default `ease` warps the mapping, and the element seems to fight the scroll.

## 12. Choosing an engine

**What it is.** A decision about who owns each element, made per effect. Prefer the lightest engine that works, and give each element one owner.

**Numbers.** Never load GSAP and Motion on the same page.

| Need | Engine | Cost |
|---|---|---|
| Hover, press, focus, class toggles | CSS transition | 0 kB |
| Enter from `display: none`, dialogs, popovers | CSS `@starting-style` (Chrome 117, Safari 17.5, Firefox 129) | 0 kB |
| Progress bars, parallax, scrubbed reveals | CSS scroll-driven (Recipe 11) | 0 kB |
| One element, one shot, a `finished` promise | WAAPI `el.animate()` | 0 kB |
| Sequences, labels, pins, SplitText, scrub | GSAP with ScrollTrigger | 46 kB |
| State-driven layout and exit animation inside a React app | Motion | 60 kB |

```css
/* CSS: enters from display:none with @starting-style. */
#cssPanel { display: none; background: #fff; padding: 18px; margin-top: 12px; opacity: 0; transform: translateY(16px);
  transition: opacity .3s linear, transform .5s var(--ease-settle), display .5s allow-discrete; }
#cssPanel.open { display: block; opacity: 1; transform: none; }
@starting-style { #cssPanel.open { opacity: 0; transform: translateY(16px); } }
```

```js
// A finished fill keeps masking later writes. Commit the end state, then cancel.
const release = (an) => an.finished.then(() => { an.commitStyles(); an.cancel(); });
const ease = 'cubic-bezier(.22, 1, .36, 1)';
const el = document.getElementById('c-waapi');
release(el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
  { duration: 900, easing: ease, fill: 'both' }));
```

**What breaks if you mix them.** The first four rows were measured in Chrome. Each writes to the same element's `transform`, and none reports an error.

| Mix | What happens | Fix |
|---|---|---|
| GSAP on an element with `transition: all` | GSAP says `x` is 100, the screen shows 14.6: the transition chases every tween frame | Never put `transition` on a property GSAP animates |
| WAAPI `fill: 'forwards'`, then GSAP | The fill masks GSAP: 40 on screen, GSAP says 100 | `release()` above |
| CSS `scale`, then GSAP | GSAP absorbs it and writes inline `scale: none`, so later CSS changes to `scale` do nothing | A wrapper: GSAP owns the outer element, CSS the inner |
| Motion and GSAP on one element | Motion rewrites the transform string: GSAP's `x: 50` vanishes from the screen while GSAP still reports 50 | Do not load both |
| Lenis plus any second smooth scroller | Two owners of scroll, each correcting the other | One scroller only |

- **Variations.** Three whole stacks for three kinds of site. *Editorial, no script:* CSS only, 0 kB, and it cannot fail to load. *Story-led marketing:* GSAP, ScrollTrigger, SplitText, CustomEase and Lenis, 59 kB, plus CSS for hover. *React product:* Motion plus CSS, when animation follows component state rather than a composed timeline.
- **Touch.** Put hover in `@media (hover: hover)`, so taps do not leave a stuck hover state. Press states belong in CSS, where they respond with no script delay.
- **Fallback.** The further down the first table you go, the more there is to fail. CSS has nothing to load. Everything else needs the gate in Recipe 1.
- **How it goes wrong.** Loading a timeline library for a hover state. `transition: all` in a reset or component style, which breaks any later GSAP tween on that element. Reaching for a second engine for one effect, instead of a wrapper that separates owners.

## 13. Budget and testing

**What it is.** The numbers motion has to stay inside, and a routine that proves them. Headless Chrome can verify most of this. A real hand has to verify the rest.

**Numbers.**

| Budget | Limit |
|---|---|
| Motion libraries, gzipped | 60 kB on a page. three.js is 194 kB on top, so spend that only on a real 3D object |
| Time to a readable first screen, worst case | 2.5 s |
| Layouts during a scroll | About 0. A count-up adds one a frame while it runs |
| Layout shift from motion | 0, at load and during scroll |
| Pin drift | 1 px at most |
| Elements moving at once, in view | About 30 |
| Blur | Under 25% of the viewport, off on phones |
| `will-change` | Only on what is about to move, a handful at a time |
| Auto-playing loop over 5 s | Needs a pause control |

**Do not trust frame rate in headless.** Under a 4x CPU throttle, a page animating `marginTop` on sixty elements reported the same 16.7 ms frames as one animating `transform`. What exposed it was the layout count, about 185 against 0 in a three-second window, and layout shift above 0. Paint-heavy motion, animating shadows and blur, also reported 16.7 ms and 0 layouts: only main-thread task time rose, to 2 to 3 times the transform page. Read `layouts`, `clsLoad`, `clsScroll` and `taskMs`, not fps, and measure after the page has settled, because startup layouts bleed into an early window.

**The routine.**

1. Run the contact sheet with `node scripts/shoot.mjs <folder-or-file> --out .shots/<name>`. It reports console errors, failed requests, text still hidden after a full scroll, hidden text under reduced motion and sideways overflow. Open the sheet and look at it, especially the load strip.
2. Shoot a beat rather than chasing the clock. Seeking a timeline to a label gives the same frame every run: expose the timeline as a global while testing, then run `node scripts/shoot.mjs page.html --eval "void __score.pause('support')" --name support`. Keep the `void`. A GSAP timeline is a thenable and the script awaits the result, so without it the run waits forever on a paused timeline. The report will list beats that have not arrived yet as hidden text, which is correct for a frozen frame.
3. Run `motion-check.mjs` below, with `--pin '#work'` on any pinned section, and with `--block gsap` to prove the page is readable without the engine.
4. Slow it down to judge it. In the console, `gsap.globalTimeline.timeScale(.25)` shows overlaps and gaps that are invisible at full speed.

Save this as `motion-check.mjs`. It needs Node 22 or later and any Chrome.

```js
#!/usr/bin/env node
// motion-check.mjs: what a contact sheet cannot prove. Node 22+, any Chrome, no npm install.
//   node motion-check.mjs <url> [--pin selector] [--cpu 4]    wheel scroll: layouts, layout shift, pin drift
//   node motion-check.mjs <url> --block gsap                  engine blocked: is the page readable?
// If html reads motion-late, the engine missed the watchdog and nothing moved: rerun before trusting the numbers.
import { spawn } from 'node:child_process';
import fs from 'node:fs'; import os from 'node:os'; import path from 'node:path';
const argv = process.argv.slice(2), flag = (n, d) => { const i = argv.indexOf('--' + n); return i < 0 ? d : argv[i + 1]; };
const url = argv[0], pin = flag('pin'), cpu = +flag('cpu', 4), block = flag('block'), sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const chrome = process.env.CHROME_PATH || ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(fs.existsSync);
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-'));
const proc = spawn(chrome, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
const wsUrl = await new Promise((ok) => { let b = ''; proc.stderr.on('data', (d) => { b += d; const m = b.match(/ws:\/\/\S+/); if (m) ok(m[0]); }); });
const ws = new WebSocket(wsUrl); await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0; const wait = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && wait.has(m.id)) { wait.get(m.id)(m.result); wait.delete(m.id); } });
const send = (method, params = {}, sessionId) => new Promise((ok) => { wait.set(++id, ok); ws.send(JSON.stringify({ id, method, params, sessionId })); });
const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId: sid } = await send('Target.attachToTarget', { targetId, flatten: true });
const ev = (expression) => send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, sid).then((r) => r.result?.value);
const metrics = async () => Object.fromEntries((await send('Performance.getMetrics', {}, sid)).metrics.map((m) => [m.name, m.value]));
for (const d of ['Page', 'Runtime', 'Performance', 'Network']) await send(d + '.enable', {}, sid);
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, sid);
if (block) await send('Network.setBlockedURLs', { urls: [`*${block}*`] }, sid);
await send('Page.navigate', { url }, sid); await sleep(3000);
if (block) {
  console.log(JSON.stringify(await ev(`(() => { const hidden = [...document.querySelectorAll('h1,h2,h3,p,li,a,button')].filter((e) => { const s = getComputedStyle(e); return s.visibility === 'hidden' || +s.opacity < .05; }); return { blocked: ${JSON.stringify(block)}, html: document.documentElement.className, hidden: hidden.length }; })()`)));
} else {
  await ev(`(() => { const el = ${JSON.stringify(pin || '')} && document.querySelector(${JSON.stringify(pin || '')}); window.__f = []; window.__cls = [0, 0];
    new PerformanceObserver((l) => l.getEntries().forEach((e) => { if (!e.hadRecentInput) window.__cls[window.__go ? 1 : 0] += e.value; })).observe({ type: 'layout-shift', buffered: true });
    const loop = () => { window.__f.push(el ? el.getBoundingClientRect().top : 0); requestAnimationFrame(loop); }; requestAnimationFrame(loop); })()`);
  await send('Emulation.setCPUThrottlingRate', { rate: cpu }, sid);
  const a = await metrics(); await ev('window.__go = 1');
  for (let i = 0; i < 70; i++) { await send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: 720, y: 450, deltaX: 0, deltaY: 120 }, sid); await sleep(30); }
  await sleep(800);
  const b = await metrics(), f = await ev('window.__f'), cls = await ev('window.__cls');
  const out = { html: await ev('document.documentElement.className'), layouts: b.LayoutCount - a.LayoutCount, clsLoad: +cls[0].toFixed(4), clsScroll: +cls[1].toFixed(4), taskMs: Math.round((b.TaskDuration - a.TaskDuration) * 1e3) };
  // Held means every frame between the first and last time the top edge touched zero.
  if (pin) { const near = (y) => Math.abs(y) < 1, held = f.slice(f.findIndex(near), f.findLastIndex(near) + 1);
    out.pinFrames = held.length; out.pinWorstPx = +Math.max(0, ...held.map(Math.abs)).toFixed(2); }
  console.log(JSON.stringify(out));
}
await send('Browser.close').catch(() => {}); proc.kill(); fs.rmSync(profile, { recursive: true, force: true, maxRetries: 3 }); process.exit(0);
```

**Check by hand.** Headless cannot judge these, and this chapter's code ran in headless Chrome only, so the Safari and Firefox rows matter.

- Scroll with a real trackpad, then a mouse wheel. Does it feel attached to the hand?
- Scroll on iOS Safari while the address bar collapses. Do sticky stages and `svh` hold?
- Open in Safari and Firefox. Do masks clip and scenes hold?
- Turn on the system reduced-motion setting while the page is open.
- Tab through a pinned section. Does focus stay visible?
- Press Back from a linked page. Is anything left hidden?
- Zoom to 200%. Does a scene still fit?
- Open on a 120 Hz screen, and on a phone in low power mode, where frames can drop to 30.

Then the usual four:

- **Variations.** Match the depth of testing to the page. *Static page with a few reveals:* the contact sheet alone. *Scroll story:* all four steps plus the whole hand list. *App interface:* add interruption checks: click twice mid-flight and read positions frame by frame.
- **Touch.** Headless emulation proves layout and branches, not feel. Everything under Lenis, pinning and sticky must be scrolled once by a real thumb on a real phone.
- **Fallback.** Run the failure modes as a set: JavaScript off, engine blocked, reduced motion. In all three, every word must be readable.
- **How it goes wrong.** Passing on the happy path only: the bugs that strand content live in the failure modes. Reading a clean sheet of a page that never booted: if `html` reads `motion-late`, nothing moved, so rerun before trusting the numbers. Judging motion from stills: a sheet shows that it ran, not that it is good.
