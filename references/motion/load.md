# Load: the first three seconds

A visitor decides what kind of site this is before they read a word. This chapter gives ten ways to spend those seconds, and most product pages should spend very few of them. All of them sit on one gate and one runner, so the page stays readable without JavaScript, without the animation library, and under reduced motion. Paste those two blocks once, then pick a recipe.

## Contents

- [Choosing a recipe](#choosing-a-recipe)
- [The contract: gate and runner](#the-contract-gate-and-runner)
- [Keeping LCP honest](#keeping-lcp-honest)
- [Mixing libraries](#mixing-libraries)
- Recipes: [1 Native entrance](#1-native-entrance), [2 Line mask](#2-line-mask), [3 Curtain and shutter](#3-curtain-and-shutter), [4 Counter hand-off](#4-counter-hand-off), [5 Logo to nav](#5-logo-to-nav), [6 Image opening](#6-image-opening), [7 Letterform assembly](#7-letterform-assembly), [8 Decode](#8-decode), [9 Choreographed hero](#9-choreographed-hero), [10 Zoom through a letter](#10-zoom-through-a-letter)
- [Proving it](#proving-it)

## Choosing a recipe

Choose from what the page has to do, not from the effect you like most.

1. The visitor came to do something (sign in, buy, read docs): use Native entrance at its Snappy setting, or Line mask at the `ratchet` setting. No cover, no scroll lock.
2. The sentence is the idea: Line mask.
3. A photograph is the idea: Image opening.
4. The name is the idea: Logo to nav for a wordmark, Letterform assembly for a big typographic mark, Zoom through a letter when the name can open onto an image.
5. A strong brand colour with a confident headline: Curtain.
6. Real assets must arrive first (WebGL scene, video, large data): Counter hand-off. If nothing real is loading, do not show a counter.
7. Archive, security, data or technical subject: Decode.
8. A hero with headline, media, nav and supporting text: Choreographed hero. Its Machine setting is the default for a product landing page, Film and Press are the showy settings, and its beat structure applies under every other recipe.

| Recipe | Readable at | Covers page | Needs | Lock scroll |
|---|---|---|---|---|
| Native entrance | 0.4s | no | nothing | no |
| Line mask | 0.6s | no | GSAP, SplitText | no |
| Choreographed hero | 0.75s | no | GSAP, SplitText | no |
| Curtain | 0.75s | yes | GSAP | yes |
| Decode | 0.9s | no | GSAP, SplitText, ScrambleText | no |
| Letterform assembly | 1.0s | no | GSAP | no |
| Image opening | 1.2s | no | GSAP | no |
| Zoom through a letter | 1.75s | yes | GSAP, SplitText | yes |
| Counter hand-off | 1.8s | yes | GSAP, SplitText | yes |
| Logo to nav | 1.9s | yes | GSAP, SplitText | yes |

"Readable at" is the headline's position in the default timeline, counted from the moment fonts resolve. Treat 1.2s as the limit for a page that is selling something, and 2s as the limit for any page. If a recipe would pass that, shorten it. The first three rows are the product range. Everything below them is showy, so keep it for a genre or brief that can afford it (see the preloader table in `elements/motion.md`).

Rules that hold across all of them:

- **One signature per load.** A curtain, a scramble and a counter on one page cancel each other. Pick one gesture and let everything else support it.
- **Order by meaning.** The largest thing moves first, the furniture last. Nav, labels and fine print never lead.
- **Overlap the beats.** Start each beat when the previous one has covered about 85 percent of its distance. That is about 30 percent of the duration on `expo.out` and 60 percent on an in-out curve. Beats that wait for each other read as a slideshow.
- **Match the ease to the job.** Use `expo.out` or `power4.out` for things that arrive. Use `expo.inOut` for things that cross the screen and leave.
- **Keep distances honest.** Masked text travels 100 to 126 percent of its height, which is the showy option. Unmasked text travels 6 to 12px. A 60px fade-up is the look of a template.
- **End on the plain page.** When the intro finishes, the page must be pixel-identical to the page with no intro: no leftover transforms, clones or wrappers.

Two sites using one recipe must not feel alike. The parameters that change character are duration, ease family, stagger, distance, direction, granularity (lines, words or characters) and the cover colour. Each recipe names its own.

## The contract: gate and runner

### The gate

This is what prevents a flash of unstyled or unanimated content. Paste it as the first thing in `<head>`. It runs before first paint, picks a mode, and only then allows anything to be hidden. Mark whatever must wait with `data-intro`.

```html
<script>
  /* GATE: the first thing in <head>. It decides before first paint. */
  (function () {
    var root = document.documentElement, mode = 'full', fuse;
    var force = /[?&]intro=(full|short|off)/.exec(location.search);
    var net = navigator.connection;
    try {
      var nav = performance.getEntriesByType('navigation')[0];
      var last = +localStorage.getItem('intro-seen') || 0;
      if (sessionStorage.getItem('intro-seen') || location.hash || (nav && nav.type === 'back_forward')) mode = 'off';
      else if (Date.now() - last < 30 * 864e5) mode = 'short';
    } catch (e) {}
    if (net && (net.saveData || /2g/.test(net.effectiveType))) mode = 'off';
    if (force) mode = force[1];
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) mode = 'off';
    window.intro = {
      mode: mode,
      hold: function () { clearTimeout(fuse); },
      release: function () {
        clearTimeout(fuse);
        root.classList.remove('js-intro', 'intro-full', 'intro-short');
      }
    };
    if (mode === 'off') return;
    root.classList.add('js-intro', 'intro-' + mode);
    fuse = setTimeout(intro.release, 2500);
  })();
</script>
<style>
  .js-intro [data-intro] { visibility: hidden; }
  .intro-lock { overflow: hidden; }
  html { scrollbar-gutter: stable; }
</style>
```

Why it is built this way:

- **The hidden state exists only behind a class that JavaScript added.** With scripts off, the class never appears and the page renders normally. Never write a hidden start state in plain CSS.
- **Repeat visits skip the show.** Same tab, back or forward, and deep links get `off`. A return within 30 days gets `short`, which runs at about half length with no cover. Reduced motion and data saver always get `off`. Use `?intro=full` to force a mode while testing.
- **The fuse guarantees the page.** After 2.5 seconds, the longest hold the foundations chapter allows, the classes are removed whatever happened, so a hung script cannot hide content. A late library then finds the classes gone and does nothing, which prevents the page from vanishing again.
- **`visibility`, not `opacity`.** It also removes hidden links from the tab order.
- **`scrollbar-gutter: stable`** stops the page shifting sideways when the lock ends.

**With the foundations gate.** The `bootMotion` gate in the foundations chapter still runs the rest of the page, and the two coexist because they use separate classes and attributes. Hold hero elements with `data-intro` and start them with `playIntro`. Put everything below the hero inside `bootMotion`. Never put both attributes on one element.

### The runner

```js
/* RUNNER: builds the timeline, hands the hidden state from CSS to GSAP, records the visit. */
async function playIntro(build, { fonts = [], wait = [], lock = false } = {}) {
  const root = document.documentElement;
  const live = () => root.classList.contains('js-intro');
  if (!live()) return;                         // off, or the fuse already blew
  if (scrollY > 40) return intro.release();    // restored scroll: the hero is off-screen
  try {
    const ready = await Promise.race([
      Promise.all([...fonts.map(f => document.fonts.load(f)), ...wait]).then(() => true),
      new Promise(r => setTimeout(r, 800, false)),
    ]);
    if (!live()) return;                       // the fuse blew during the wait
    root.classList.toggle('intro-lock', lock);
    const mode = ready ? intro.mode : 'short'; // too slow for the big moment: skip the show, keep the page
    const tl = intro.tl = build(mode);         // must set every start state synchronously
    const own = tl.eventCallback('onComplete'), stop = new AbortController();
    tl.eventCallback('onComplete', () => {
      if (own) own();
      root.classList.remove('intro-lock');
      stop.abort();
      performance.mark('intro-end');
    });
    intro.release();                           // GSAP owns the hidden state from here
    for (const t of ['wheel', 'touchstart', 'keydown', 'pointerdown'])
      addEventListener(t, () => tl.timeScale(3), { once: true, passive: true, signal: stop.signal });
    try {
      sessionStorage.setItem('intro-seen', '1');
      localStorage.setItem('intro-seen', Date.now());
    } catch (e) {}
  } catch (e) {
    root.classList.remove('intro-lock');
    intro.release();
    console.error(e);
  }
}
```

- **Fonts come first, with a ceiling of 800ms.** Animating before the font arrives shows the fallback face mid-flight, then a swap. If the font misses the ceiling the runner drops to `short`, because any geometry measured now would be measured in the wrong font.
- **`build` must set every start state in the same task.** `gsap.from` and `gsap.set` do this. The next line removes the CSS hide, so anything left unset flashes for one frame.
- **The first input triples the speed.** Nobody should have to wait for an intro once they have shown they want the page.
- **`intro.tl` is exposed** so you can seek it while testing: `intro.tl.pause(0.6)`.

### Dependencies

Load with `defer`, and give every tag `onerror="intro.release()"`, so a blocked CDN reveals the page at once. Put your own code in a `<script type="module">` after them, which runs after deferred scripts.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js" defer onerror="intro.release()"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js" defer onerror="intro.release()"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrambleTextPlugin.min.js" defer onerror="intro.release()"></script>
```

These are the pins from the foundations chapter, and every recipe here was tested on them. Load only the plugins a recipe needs. Self-host and `rel="preload"` the display face when you can, since the 800ms ceiling is much easier to meet that way.

## Keeping LCP honest

Measured in Chrome on a page that snaps to its final state at 1500ms. Median of three runs on a loaded machine, so read the pattern rather than the milliseconds.

| How the hero starts | LCP reported | What it means |
|---|---|---|
| Nothing hidden | about 600ms | baseline |
| `visibility: hidden` | 1536ms | waits for the reveal |
| `opacity: 0` | 1524ms | waits for the reveal |
| `clip-path` closed to zero area | 1520 to 2076ms | waits for the reveal |
| `opacity: .01` | about 1000ms | reports early, and the user still sees nothing |
| Full-screen cover on top | about 1000ms for text, 664ms for an image | reports early, and the user still sees nothing |
| Line mask (`overflow: clip` and a transform) | 64, 1036 and 2216ms in three runs | unstable, do not rely on it |
| Image clipped to a thin sliver | image never reported, a small text node wins | reports the wrong element |

So:

1. Make the LCP element the first thing to move. Any delay in front of it is added to the metric or hidden from it, and neither is acceptable.
2. Do not take credit for a cover or `opacity: .01`. They improve the number and not the experience.
3. Treat `performance.mark('hero-visible')` as the truth. Every recipe places it where the headline can actually be read. Compare it with LCP and report the later of the two.
4. Keep the hero image in the HTML with `width`, `height` and `fetchpriority="high"`. Never set `loading="lazy"` on it, and never inject its `src` from script.
5. Never make the first paint depend on the library. The gate's ceiling keeps the hidden time to the font wait, and the fuse caps it at 2.5 seconds.

```js
new PerformanceObserver(list => {
  const lcp = list.getEntries().at(-1).startTime;
  const seen = performance.getEntriesByName('hero-visible')[0]?.startTime ?? 0;
  console.log('readable at', Math.round(Math.max(lcp, seen)));
}).observe({ type: 'largest-contentful-paint', buffered: true });
```

## Mixing libraries

Use one engine per element. CSS and WAAPI are enough for Native entrance. Everything else here is GSAP.

- **A CSS `transition` on a GSAP target** restarts on every tween frame, so the element lags and lands late. Remove `transition` from anything GSAP moves.
- **A CSS `animation` with `both` or `forwards`** overrides inline styles, so GSAP appears to do nothing.
- **A second JavaScript animation library on the same element** writes `transform` too. GSAP caches transform parts, so the other writer causes jumps. Put them on nested elements if both must exist.
- **A smooth-scroll library** needs its own stop and start calls during the lock, not `overflow: hidden`.
- **Cross-document View Transitions** would run under the intro and animate twice. The gate's same-tab `off` handles this.
- **ScrollTrigger on the hero:** put the scroll effect on an outer wrapper and the intro on an inner element, so they never own the same property. Call `ScrollTrigger.refresh()` in the timeline's `onComplete`, because the lock and the split change layout.
- **React and similar:** SplitText replaces the children of the element it splits, so run it in an effect and `revert()` on cleanup. The gate changes `<html>` before hydration, so set `suppressHydrationWarning` on it.

## Recipes

Each recipe assumes the gate, the runner and the dependencies above. Code runs inside a `<script type="module">`, after the runner.

### 1. Native entrance

Stacked lines rise from behind their own edges, then the supporting text settles and the button lands on a spring. It feels quick and sure of itself. Use it for product, docs and any page where a 28 kB library is not justified for one entrance. It is the wrong choice when line breaks must be detected at unknown widths, or when anything needs measuring.

**Numbers:** rise 1.1s `cubic-bezier(.16, 1, .3, 1)`, 85ms stagger, 120 percent plus 2deg of tilt. Supporting text 800ms and 14px. Button .9s on a `linear()` spring. Short mode multiplies everything by .6.

```html
<h1>
  <span class="rise"><span style="--i:0">Three days</span></span>
  <span class="rise"><span style="--i:1">to make,</span></span>
  <span class="rise"><span style="--i:2">gone by noon.</span></span>
</h1>
<p class="after" style="--i:0">Long-fermented loaves from a single oven in Leith. We bake once a day and stop when the flour does.</p>
<a class="cta pop" href="#bake">See today's bake</a>
```

```css
/* recipe: every hidden start state lives inside .js-intro, and nothing plays until .intro-go */
:root {
  --dur: 1.1s; --each: 85ms; --tilt: 2deg; --t: 1;
  --ease: cubic-bezier(.16, 1, .3, 1);
  --spring: linear(0, .178, .563, .953, 1.217, 1.314, 1.272, 1.155, 1.03, .94, .902, .911, .946, .986, 1.016, 1.03, 1.029, 1.019, 1.006, .996, .991, .991, 1);
}
:root.intro-short { --t: .6; }
.rise { display: block; clip-path: inset(-.14em -.08em); }
.rise > span { display: block; }
.js-intro .rise > span { animation: rise calc(var(--dur) * var(--t)) var(--ease) both; animation-delay: calc(var(--i) * var(--each) * var(--t) + 80ms); }
.js-intro .after { animation: settle calc(.8s * var(--t)) var(--ease) both; animation-delay: calc(var(--i) * 70ms * var(--t) + 520ms * var(--t)); }
.js-intro .pop { animation: pop .9s var(--spring) both; animation-delay: calc(760ms * var(--t)); }
.js-intro .rise > span, .js-intro .after, .js-intro .pop { animation-play-state: paused; }
.intro-go .rise > span, .intro-go .after, .intro-go .pop { animation-play-state: running; }
@keyframes rise { from { transform: translateY(120%) rotate(var(--tilt)); } }
@keyframes settle { from { opacity: 0; transform: translateY(14px); } }
@keyframes pop { from { opacity: 0; transform: scale(.86); } }
```

No library is needed. The animations sit paused on their first frame until the font resolves. The paused rule must come after the shorthand, which resets it. `intro.hold()` cancels the fuse once the animations are running, because CSS cannot arrive late the way a library can, and a fuse firing now would only cut the entrance short.

```js
const root = document.documentElement;
if (root.classList.contains('js-intro')) {
  await Promise.race([
    document.fonts.load('400 1em "Titan One"'),
    new Promise(r => setTimeout(r, 800)),
  ]);
  if (root.classList.contains('js-intro')) {       // the fuse may have blown during the wait
    root.classList.add('intro-go');
    intro.hold();
    performance.mark('hero-visible');
    try {
      sessionStorage.setItem('intro-seen', '1');
      localStorage.setItem('intro-seen', Date.now());
    } catch (e) {}
    await Promise.allSettled(document.getAnimations().map(a => a.finished));
    intro.release();
    root.classList.remove('intro-go');
    performance.mark('intro-end');
  }
}
```

**Variations**, set as custom properties on `:root`:

| Character | `--dur` | `--each` | `--tilt` | `--ease` |
|---|---|---|---|---|
| Confident (code default, showy) | 1.1s | 85ms | 2deg | `cubic-bezier(.16, 1, .3, 1)` |
| Snappy and mechanical (use this on product pages, and drop the spring on the button) | .55s | 40ms | 0deg | `cubic-bezier(.2, .9, .1, 1)` |
| Soft and floating | 1.7s | 150ms | 4deg | `cubic-bezier(.22, .61, .36, 1)` |

**Phone:** nothing changes. If a line wraps, its mask holds both rows, so they rise together. **Fallback:** without the `.js-intro` class no animation rule exists, so the page is plain.

**Looks cheap when:** the animation starts at first paint, so the headline rises in the fallback face and swaps mid-flight; `opacity` is added to the rise, which turns a physical reveal into a fade; or `overflow: hidden` is used as the mask and clips descenders.

### 2. Line mask

Each line rises out of a slot, as if set from below the baseline. It is the most useful text entrance there is because it is about the sentence, not the effect. Use it whenever the headline is the point. It is wrong for body text, for lines under about 24px where the motion cannot be seen, and for a headline over about six lines.

**Numbers:** 1.15s `expo.out`, travel 120 percent, 1.5deg of tilt from the left foot, .09s stagger, starts at .1s. The total stagger is capped at .45s however many lines appear.

```html
<h1 class="headline" data-intro>The last boat waits for nobody, and never&nbsp;has.</h1>
```

```css
.headline .l-mask { overflow: visible !important; clip-path: inset(-.14em -.08em); }
```

```js
const P = { y: 120, rotate: 1.5, duration: 1.15, ease: 'expo.out', each: .09 };

playIntro(mode => {
  gsap.registerPlugin(SplitText);
  const tl = gsap.timeline({ onComplete: () => split.revert() });
  const split = SplitText.create('.headline', {
    type: 'lines', mask: 'lines', linesClass: 'l', autoSplit: true,
    onSplit(self) {
      const t = gsap.from(self.lines, {
        yPercent: P.y, rotate: P.rotate, transformOrigin: '0% 100%',
        duration: mode === 'short' ? .7 : P.duration,
        ease: P.ease,
        stagger: Math.min(P.each, .45 / self.lines.length),
      });
      tl.add(t, .1);
      return t;
    },
  });
  tl.call(() => performance.mark('hero-visible'), null, .6);
  return tl;
}, { fonts: ['800 1em "Bricolage Grotesque"'] });
```

`mask: 'lines'` wraps each line in a `.l-mask` element with `overflow: clip`, which cuts ascenders and descenders on tight leading. The CSS replaces that with a `clip-path` that extends past the line box. `autoSplit` re-splits when a late font or a resize changes the wrap. Return the tween from `onSplit` so it can resume at the right progress. Revert at the end so the page keeps its plain text.

**Variations:**

| Character | `y` | `rotate` | `duration` | `ease` | `each` |
|---|---|---|---|---|---|
| Measured (default) | 120 | 1.5 | 1.15 | `expo.out` | .09 |
| Heavy slab | 126 | 2.5 | 1.4 | `expo.out` | .14 |
| Ratchet, mechanical | 120 | 0 | .5 | `power4.out` | .05 |

For a soft, organic version drop the mask and animate words: `type: 'words'`, then `gsap.from(self.words, { opacity: 0, y: 14, filter: 'blur(10px)', duration: .9, ease: 'power2.out', stagger: .035 })`. Keep blur to one headline, since it is the most expensive property here.

**Phone:** more lines appear, which is what the stagger cap is for. Do not hard-code line counts. **Fallback:** `data-intro` hides the headline only behind the gate's class. With no JavaScript or no library it is plain text.

**Looks cheap when:** `text-wrap: balance` or `pretty` is on the headline. Split lines ignore it, so the whole headline reflows at the moment the split reverts. Control the rag with `max-width` in `ch` or `&nbsp;`. Also when a font loads during the rise, because the split was made before fonts; or when the mask clips the tails of g, y and p.

### 3. Curtain and shutter

A full-screen colour leaves in pieces, and the page is already moving when it shows through. It feels theatrical and it spends brand colour at full volume. Use it for a brand with one strong colour and a headline that can carry the moment. It is wrong for anything a visitor uses repeatedly, and wrong with a dull cover colour, because then it is only a delay.

**Numbers:** 7 bars, `scaleY` to 0 from the top edge, 1.05s `expo.inOut`, .055s stagger from the centre. The hero moves from `yPercent: 6, scale: 1.04` over 1.5s `expo.out`, starting at .35s, well before the cover clears. Readable at .75s.

```html
<div class="curtain" data-cover aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
```

```css
.curtain { display: none; position: fixed; inset: 0; z-index: 50; grid-template-columns: repeat(var(--n, 7), 1fr); }
.intro-full .curtain { display: grid; }
.curtain i { background: var(--curtain); margin-right: -1px; transform-origin: 50% 0; }
.curtain svg { grid-column: 1 / -1; width: 100%; height: 100%; display: block; }
```

```js
const cover = document.querySelector('.curtain');

function columns(tl) {
  const n = innerWidth < 760 ? 5 : 7;
  cover.style.setProperty('--n', n);
  const bars = [...cover.children].slice(0, n);
  [...cover.children].slice(n).forEach(b => b.remove());
  tl.to(bars, { scaleY: 0, duration: 1.05, ease: 'expo.inOut', stagger: { each: .055, from: 'center' } }, .1);
}

playIntro(mode => {
  const tl = gsap.timeline({ onComplete: () => cover.remove() });
  if (mode === 'short') {
    cover.remove();
    return tl.from('.stage', { y: 16, opacity: 0, duration: .5, ease: 'power2.out', stagger: .08 });
  }
  gsap.set(cover, { display: 'grid' });
  columns(tl);
  tl.from('h1', { yPercent: 6, scale: 1.04, transformOrigin: '0% 100%', duration: 1.5, ease: 'expo.out' }, .35)
    .from('.note', { y: 18, opacity: 0, duration: .8, ease: 'power2.out' }, .85)
    .call(() => performance.mark('hero-visible'), null, .75);
  return tl;
}, { fonts: ['400 1em Gloock'], lock: true });
```

**Variations.** Replace `columns(tl)` with one of these.

```js
function shutter(tl) {           /* snappy: odd bars up, even bars down, hard ease */
  const bars = [...cover.children];
  bars.forEach((b, i) => gsap.set(b, { transformOrigin: i % 2 ? '50% 100%' : '50% 0' }));
  tl.to(bars, { scaleY: 0, duration: .55, ease: 'power4.inOut', stagger: { each: .03, from: 'start' } }, .1);
}
function curve(tl) {             /* soft: one sheet with a bowed edge */
  cover.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path style="fill:var(--curtain)"/></svg>';
  const path = cover.querySelector('path'), s = { y: 100, c: 0 };
  const draw = () => path.setAttribute('d', `M0 0H100V${s.y}Q50 ${s.y + s.c} 0 ${s.y}Z`);
  draw();
  tl.to(s, { y: -24, duration: 1.15, ease: 'power3.inOut', onUpdate: draw }, .1)
    .to(s, { c: 24, duration: .55, ease: 'power2.in' }, .1)
    .to(s, { c: 0, duration: .6, ease: 'power2.out' }, .65);
}
```

**Phone:** use 5 bars under 760px, because 7 become thin slats on a tall screen. The scroll lock is short, and a touch speeds the intro up. **Fallback:** the cover is `display: none` unless `.intro-full` is present, so a failed script never leaves it on screen.

**Looks cheap when:** hairline seams show between bars (hence `margin-right: -1px`); the hero is still when the cover clears, so nothing is handed over; or the cover holds on a flat colour for over half a second before moving.

### 4. Counter hand-off

A large number counts real work, then the panel lifts with its progress line as the leading edge, and the headline rises out from under it. The whole point is the hand-off: one object carries you from waiting to reading, with no blank frame. Use it only when real assets must load, such as a WebGL scene or video. It is wrong on a page that could simply render.

**Numbers:** the count may not beat 1.1s and no task may hold it past 2.2s. Number exits in .45s `power3.in`. Panel lifts in .95s `expo.inOut`, .08s later. Headline starts at .42s, as the panel's edge reaches it. The number eases toward its goal with a time constant of 90ms.

```html
<div class="loader" data-cover aria-hidden="true">
  <div class="num"><b>0</b></div>
  <div class="line"></div>
</div>
```

```css
.loader { display: none; position: fixed; inset: 0; z-index: 50; background: var(--ink); color: var(--paper); }
.intro-full .loader { display: block; }
.loader .num { position: absolute; left: clamp(16px, 4vw, 48px); bottom: 5vh; overflow: clip; font: 400 clamp(120px, 26vw, 400px)/1 Anton, Impact, sans-serif; font-variant-numeric: tabular-nums; }
.loader .num b { display: block; font-weight: 400; }
.loader .line { position: absolute; left: 0; right: 0; bottom: 0; height: 4px; background: var(--acc); transform: scaleX(0); transform-origin: 0 50%; }
```

```js
const MIN = 1.1;                                   // seconds the count may not beat
const CAP = 2200;                                  // ms before a stuck task stops counting
const TOP = 100;                                   // count to a number that means something
const loader = document.querySelector('.loader');
const line = loader.querySelector('.line');
const num = loader.querySelector('.num b');

function track(tasks) {                            // real progress: each task reports once, none can hang
  let done = 0;
  tasks.forEach(p => Promise.race([p, new Promise(r => setTimeout(r, CAP))]).finally(() => done++));
  return () => done / tasks.length;
}

playIntro(mode => {
  gsap.registerPlugin(SplitText);
  const full = mode === 'full';
  const at = full ? .42 : 0;                       // the headline starts as the panel's edge reaches it
  const hero = gsap.timeline({ paused: full, onComplete() { loader.remove(); split.revert(); } });
  const split = SplitText.create('h1', { type: 'lines', mask: 'lines', linesClass: 'l', autoSplit: true, onSplit(self) {
    const t = gsap.from(self.lines, { yPercent: 120, duration: 1.1, ease: 'expo.out', stagger: .1 });
    hero.add(t, at);
    return t;
  } });
  hero.from('.note, .bar', { opacity: 0, duration: .8, ease: 'power1.out', stagger: .1 }, at + .35)
      .call(() => performance.mark('hero-visible'), null, at + .25);
  if (!full) { loader.remove(); return hero; }

  gsap.set(loader, { display: 'block' });
  hero.to(num, { yPercent: -102, duration: .45, ease: 'power3.in' }, 0)
      .to(loader, { yPercent: -100, duration: .95, ease: 'expo.inOut' }, .08);

  const progress = track([
    document.fonts.load('400 1em Anton'),
    new Promise(r => setTimeout(r, 300)),
  ]);
  const t0 = gsap.ticker.time;
  let shown = 0;
  gsap.ticker.add(function count(time, dt) {
    const goal = Math.min(progress(), (time - t0) / MIN);       // the number may not outrun reality or the minimum
    shown += (goal - shown) * (1 - Math.exp(-dt / 90));
    num.textContent = Math.min(TOP, Math.ceil(shown * TOP - .5));
    line.style.transform = `scaleX(${shown})`;
    if (shown > .996) {
      gsap.ticker.remove(count);
      num.textContent = TOP;
      line.style.transform = 'scaleX(1)';
      hero.play();
    }
  });
  return hero;
}, { lock: true });                                // no fonts here: slow connections are who this recipe is for
```

Put your real work in the `track` list: `img.decode()`, a model load, a data fetch. The goal is the lower of real progress and elapsed time, so a fast connection still sees a composed count, and a slow one never sees a number lying.

This is the one recipe that must not pass `fonts` to the runner. The runner drops to `short` when fonts are late, which would skip the loader on the slow connections it exists for. Count the font in `track` instead. The number paints before the font arrives, so give it a fallback of similar width, or set it in the system face.

**Variations:**

- **Press (default):** panel and number leave together, physical and heavy.
- **Wipe:** the panel stays still and is cut away, so it feels like a shutter. Replace both tweens with `hero.to(loader, { clipPath: 'inset(0% 0% 100% 0%)', duration: .95, ease: 'expo.inOut' }, .08)`.
- **Meaningful number:** set `TOP` to something true of the subject, such as an issue number, a year or a price. `TOP = 40` for a fortieth issue says more than 100 ever does.
- **Patient:** `MIN = 2` for a slower brand. Do not go higher.

**Phone:** same recipe. Keep `tabular-nums` so the digits do not jitter, and test that three digits fit at `26vw`. **Fallback:** with no JavaScript the loader is `display: none`. The 2.2s cap means a stuck asset cannot hold the count, and the 2.5-second fuse covers everything else.

**Looks cheap when:** the count runs on a timer with nothing behind it; it reaches 100 and hangs; or the loader fades out to reveal a static page. A worse version is common: a panel in the page's own colour stays on top while the headline animates unseen behind it, so the visitor sees a blank hold and then a pop. Seek your timeline frame by frame and confirm the hero is visible at the moment it starts to move.

### 5. Logo to nav

The name fills the screen, then flies into its real place in the header as the panel leaves. It feels like an introduction: the brand arrives, then steps aside for the page. Use it for a name worth saying large. It is wrong for a logo that only works small, and wrong on pages visited often.

**Numbers:** letters rise over .6s `power4.out`, .025s stagger. Hold .25s. Flight 1.05s `expo.inOut`, shared exactly by logo and panel. The page starts arriving at 42 percent of the flight. Logo scale is capped at 78 percent of viewport width and at 7x.

```html
<div class="stage" data-cover aria-hidden="true"></div>
<header class="bar">
  <a class="logo" href="#top" data-intro>Nordwind</a>
  <nav class="links"><a href="#fleet" data-intro>Fleet</a><a href="#routes" data-intro>Routes</a></nav>
</header>
```

```css
.logo { display: inline-block; transform-origin: 0 0; }
.stage { display: none; position: fixed; inset: 0; z-index: 40; background: var(--deep); }
.intro-full .stage { display: block; }
header.bar { position: relative; z-index: 45; }
```

The logo is never moved in the layout. Measure where it really lives, then express the big centred position as a transform away from that box. Animating to `x: 0, y: 0, scale: 1` lands it exactly, which is the FLIP idea without needing a plugin for one element.

```js
const P = { hold: .25, fly: 1.05, ease: 'expo.inOut', cross: .62 };   // cross: when the colour flip starts, just before the panel edge passes the logo

playIntro(mode => {
  gsap.registerPlugin(SplitText);
  const logo = document.querySelector('.logo');
  const stage = document.querySelector('.stage');
  const links = gsap.utils.toArray('.links a');
  const full = mode === 'full';
  let word;
  const tl = gsap.timeline({ onComplete() {
    word?.revert();
    gsap.set(logo, { clearProps: 'all' });
    stage.remove();
    split.revert();
  } });
  let land = .05;                                           // the moment the page itself starts to arrive

  if (full) {
    gsap.set(stage, { display: 'block' });
    gsap.set(logo, { color: '#f4f6fb' });
    const r = logo.getBoundingClientRect();                 // Last: the box it lives in for real
    const scale = Math.min(innerWidth * .78 / r.width, 7);
    const x = (innerWidth - r.width * scale) / 2 - r.left;  // First, written as a transform away from Last
    const y = (innerHeight - r.height * scale) / 2 - r.top;
    gsap.set(logo, { x, y, scale, force3D: false });
    word = SplitText.create(logo, { type: 'chars', mask: 'chars' });
    const each = .025, rise = .6;
    const fly = .1 + rise + each * word.chars.length + P.hold;
    tl.from(word.chars, { yPercent: 110, duration: rise, ease: 'power4.out', stagger: each }, .1)
      .to(logo, { x: 0, y: 0, scale: 1, duration: P.fly, ease: P.ease }, fly)
      .to(stage, { yPercent: -100, duration: P.fly, ease: P.ease }, fly)
      .to(logo, { color: '#0a1c45', duration: P.fly * .1, ease: 'none' }, fly + P.fly * P.cross);
    land = fly + P.fly * .42;
  } else {
    gsap.set(stage, { display: 'none' });
    tl.from(logo, { opacity: 0, duration: .4 }, 0);
  }
  tl.from(links, { yPercent: -60, opacity: 0, duration: .7, ease: 'power3.out', stagger: .06 }, land);
  const split = SplitText.create('h1', { type: 'lines', mask: 'lines', linesClass: 'l', autoSplit: true, onSplit(self) {
    const t = gsap.from(self.lines, { yPercent: 120, duration: 1, ease: 'expo.out', stagger: .09 });
    tl.add(t, land);
    return t;
  } });
  tl.from('.note', { y: 16, opacity: 0, duration: .7, ease: 'power2.out' }, land + .4)
    .call(() => performance.mark('hero-visible'), null, land + .35);
  return tl;
}, { fonts: ['700 1em Unbounded'], lock: true });
```

`cross` is when the colour flip starts. The flip lasts 10 percent of the flight, so centre it on the moment the panel's edge passes the logo. Solve that for your ease: both move together, so find when the progress reaches about .94, which is .66 of the duration on `expo.inOut`, and start .04 sooner, at .62. A colour tween across the whole flight turns the logo dark while it is still on the panel.

**Variations:**

| Character | `hold` | `fly` | `ease` | `cross` |
|---|---|---|---|---|
| Composed (default) | .25 | 1.05 | `expo.inOut` | .62 |
| Snap | .08 | .65 | `power4.inOut` | .64 |
| Drift, unhurried | .5 | 1.5 | `power2.inOut` | .72 |

**Phone:** the width cap decides the scale, and the flight is shorter, so nothing else changes. Keep the logo on one line, since the scale is worked out from its width. **Fallback:** the header is in normal flow and `.stage` is `display: none` without `.intro-full`. On `short`, the logo simply fades.

**Looks cheap when:** the box was measured in the fallback font, so the big logo sits off centre (the runner's `short` fallback exists for this); the text blurs because it was scaled on a GPU layer (keep `force3D: false`); or the headline is placed with `'<'` after an async `onSplit`, and lands behind the note, leaving a blank page mid-intro. Use a computed time or a label.

### 6. Image opening

The image opens from a shape while its contents settle, so you feel you are looking through a window that is widening. Use it when one strong image is the page. It is wrong on a weak or busy image, since this puts the whole load on the picture.

**Numbers:** a slit draws for .7s `power3.inOut`, then opens for 1.15s `expo.inOut`, overlapping by .2s. The image scales from 1.28 over 2.1s `expo.out`, starting as the opening starts. Text begins at .95s.

Wrap the hero image in `<figure class="shot" data-intro>`, and keep `width`, `height` and `fetchpriority="high"` on the `<img>`. Mark the `h1` and `.note` with `data-intro`.

```css
.shot { overflow: hidden; }
.shot img { display: block; width: 100%; height: 100%; object-fit: cover; }
```

```js
const OPEN = 'inset(0% 0% 0% 0% round 0px)';

playIntro(mode => {
  const shot = document.querySelector('.shot'), img = shot.querySelector('img');
  const tl = gsap.timeline({ onComplete: () => gsap.set([shot, img], { clearProps: 'clipPath,scale,yPercent' }) });

  if (mode === 'short') {
    tl.from(shot, { opacity: 0, duration: .5 });
  } else {
    tl.fromTo(shot, { clipPath: 'inset(49.7% 34% 49.7% 34% round 0px)' },
      { clipPath: 'inset(49.7% 0% 49.7% 0% round 0px)', duration: .7, ease: 'power3.inOut' }, 0)
      .to(shot, { clipPath: OPEN, duration: 1.15, ease: 'expo.inOut' }, .5)
      .from(img, { scale: 1.28, duration: 2.1, ease: 'expo.out' }, .5);
  }
  tl.from('h1, .note', { y: 20, opacity: 0, duration: .9, ease: 'power3.out', stagger: .12 }, mode === 'short' ? .1 : .95)
    .call(() => performance.mark('hero-visible'), null, mode === 'short' ? .4 : 1.2);
  return tl;
}, { fonts: ['400 1em "Young Serif"'] });
```

**Variations.** Replace the `else` branch.

```js
/* soft: a circle opens from the subject */
tl.fromTo(shot, { clipPath: 'circle(0% at 62% 58%)' },
  { clipPath: 'circle(120% at 62% 58%)', duration: 1.6, ease: 'power3.inOut' }, 0)
  .from(img, { scale: 1.16, duration: 2.1, ease: 'power3.out' }, 0);

/* product-like: a rounded window grows */
tl.fromTo(shot, { clipPath: 'inset(38% 34% 38% 34% round 999px)' },
  { clipPath: OPEN, duration: 1.3, ease: 'expo.inOut' }, 0)
  .from(img, { scale: 1.3, duration: 1.8, ease: 'expo.out' }, .1);

/* compositor only: two opposed transforms, for the largest images */
tl.from(shot, { yPercent: 100, duration: 1.3, ease: 'expo.inOut' }, 0)
  .from(img, { yPercent: -100, scale: 1.2, duration: 1.3, ease: 'expo.inOut' }, 0);
```

The opposed version moves the frame up and the picture down at the same speed, so the image seems fixed while the frame wipes across it. No `clip-path` repaint is needed.

**Phone:** the percentages hold at any aspect. Check that the iris centre still sits on the subject, because `object-fit: cover` crops differently in portrait. **Fallback:** the image is in the HTML with its dimensions, so it needs nothing from script. `clearProps` removes every trace at the end.

**Looks cheap when:** the image does not scale, so only a mask moves and the picture feels pasted on; you tween between different shapes such as `inset()` to `circle()`, which snaps; or you start from a thin sliver and trust LCP, which then ignores the image (see [Keeping LCP honest](#keeping-lcp-honest)).

### 7. Letterform assembly

A big word arrives in pieces and locks into place. It feels constructed and industrial. Use it for a short, heavy typographic mark. It is wrong for a sentence, since nobody reads the pieces, and wrong for a light or delicate face, since thin strokes turn to dust.

**Numbers:** default bands: 11 rows, drifting in up to 34 percent of viewport width on a sine offset, 1.5s `expo.out`, .03s stagger from the centre. Clones are removed .02s after the last piece lands.

The real heading stays in place and hidden. `aria-hidden` clones perform, each cut to one window with `clip-path`, so the geometry is pixel-exact and screen readers hear one heading.

```html
<div class="mark-box"><h1 class="mark" data-intro>KILN<br>WORKS</h1></div>
```

```css
.mark-box { position: relative; clip-path: inset(0 -100vw); }
.slice { position: absolute; inset: 0; margin: 0; pointer-events: none; }
```

```js
function slices(el, cols, rows) {               // real text, cut into windows, one clone per window
  const out = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const s = document.createElement('div');
    s.className = el.className + ' slice';
    s.setAttribute('aria-hidden', 'true');
    s.innerHTML = el.innerHTML;
    const edge = (i, n) => (i ? i / n * 100 : -6);   // outer edges overshoot so overhang is never cut
    s.style.clipPath = `inset(${edge(r, rows)}% ${edge(cols - 1 - c, cols)}% ${edge(rows - 1 - r, rows)}% ${edge(c, cols)}%)`;
    el.parentElement.append(s);
    out.push(s);
  }
  return out;
}

playIntro(mode => {
  const mark = document.querySelector('.mark');
  if (mode === 'short') {
    return gsap.timeline().from(mark, { yPercent: 8, opacity: 0, duration: .6, ease: 'power3.out' })
      .from('.note', { opacity: 0, duration: .5 }, .2);
  }
  const phone = innerWidth < 720;
  const tl = gsap.timeline();
  gsap.set(mark, { visibility: 'hidden' });              // the h1 waits; its clones perform
  const finish = parts => {
    gsap.set(mark, { visibility: 'inherit' });
    parts.forEach(p => p.remove());
  };
  const parts = slices(mark, 1, phone ? 7 : 11);
  tl.from(parts, {
    x: i => Math.sin(i * 1.9 + .6) * innerWidth * .34,
    opacity: 0,
    duration: 1.5, ease: 'expo.out', stagger: { each: .03, from: 'center' },
  }, .05);
  tl.add(() => finish(parts), '+=.02')
    .from('.note', { opacity: 0, y: 12, duration: .7, ease: 'power2.out' }, '-=.75')
    .call(() => performance.mark('hero-visible'), null, 1);
  return tl;
}, { fonts: ['900 1em Archivo'] });
```

**Variations.** Replace the `parts` and `tl.from` lines.

```js
/* mechanical: columns rise and drop through the box's clip */
const parts = slices(mark, phone ? 8 : 14, 1);
tl.from(parts, { yPercent: i => (i % 2 ? 105 : -105), duration: .7, ease: 'power4.inOut', stagger: { each: .025, from: 'random' } }, .1);

/* digital: a grid switches on from the centre */
const cols = phone ? 6 : 12, rows = phone ? 4 : 5;
const parts = slices(mark, cols, rows);
tl.from(parts, { scale: .4, opacity: 0, duration: .5, ease: 'back.out(1.7)', stagger: { grid: [rows, cols], from: 'center', amount: .75 } }, .1);
```

**Phone:** drop to 7 bands, 8 strips or 6 by 4 tiles. Each piece is a full copy of the text, so piece count is the cost. **Fallback:** the `h1` is real text in the HTML. Clones exist only after the runner starts.

**Looks cheap when:** pieces sit visibly on the page before they move, because a 105 percent offset does not clear the viewport (the box's `clip-path` is the mask that fixes this); clones stay after the landing, doubling the antialiasing so the text looks bold; there are so many pieces that it reads as noise; or the word is sized by eye and `overflow-x: clip` quietly cuts its last letter. Measure the text's right edge against the gutter.

### 8. Decode

Characters flicker through glyphs and resolve left to right, as if the page were being decrypted. It feels technical and slightly tense. Use it for archive, security or data subjects, ideally with a monospaced face. It is wrong for warm or human brands, and wrong on long text, where it stops being readable for too long.

**Numbers:** each character spins for .55s, starting .018s after the last. Glyphs swap about 20 times a second, not 60. Small labels use ScrambleText at speed .55.

Mark the `h1`, `.note` and any small labels with `data-intro`, and give labels the class `scr`.

```js
const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
const pick = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
const P = { each: .018, spin: .55, gap: 40 };

function decode(chars, tl, at) {                 // each cell locked to its own width, so nothing reflows
  const widths = chars.map(c => c.getBoundingClientRect().width);   // fractional: offsetWidth rounds, and the wrap changes
  chars.forEach((c, i) => { c.style.width = widths[i] + 'px'; c.style.textAlign = 'center'; });
  chars.forEach((c, i) => {
    const final = c.textContent;
    if (!final.trim()) return;
    let last = 0;
    gsap.set(c, { opacity: 0 });
    tl.to(c, {
      opacity: 1, duration: P.spin, ease: 'none',
      onUpdate() {
        const now = performance.now();
        if (now - last < P.gap) return;           // swap about 20 times a second, not 60
        last = now;
        c.textContent = pick();
      },
      onComplete() { c.textContent = final; },
    }, at + i * P.each);
  });
}

playIntro(mode => {
  gsap.registerPlugin(SplitText, ScrambleTextPlugin);
  const tl = gsap.timeline({ onComplete() { split.revert(); gsap.set('.scr', { clearProps: 'minWidth' }); } });
  const split = SplitText.create('h1', { type: 'words,chars' });
  if (mode === 'short') {
    tl.from(split.words, { opacity: 0, duration: .4, stagger: .03 });
  } else {
    decode(split.chars, tl, .15);
  }
  gsap.utils.toArray('.scr').forEach((el, i) => {
    const text = el.textContent;
    el.setAttribute('aria-label', text);
    el.style.minWidth = el.getBoundingClientRect().width + 'px';   // the box never changes as glyphs swap
    tl.to(el, { duration: mode === 'short' ? .5 : 1.1, ease: 'none', scrambleText: {
      text, chars: GLYPHS, speed: .55, revealDelay: mode === 'short' ? .1 : .35, tweenLength: false,
    } }, .05 + i * .08);
  });
  tl.from('.note, .bar strong', { opacity: 0, duration: .7, ease: 'power1.out' }, .7)
    .call(() => performance.mark('hero-visible'), null, .9);
  return tl;
}, { fonts: ['500 1em "Martian Mono"'] });
```

**Variations:**

| Character | `GLYPHS` | `each` | `spin` | `gap` |
|---|---|---|---|---|
| Cipher (default) | capitals and digits | .018 | .55 | 40 |
| Ledger | `0123456789` | .018 | .55 | 40 |
| Calm, nearly a typewriter | capitals and digits | .03 | .28 | 60 |

**Phone:** keep it to the one headline, as each character is its own tween. A phone wraps earlier, so test that the wrap does not change during the run. **Fallback:** with no script the text is plain. The label's real text stays on `aria-label` while the glyphs run, and the split reverts at the end.

**Looks cheap when:** cell widths are rounded with `offsetWidth`, so a line wraps differently mid-run and the page jumps when it resolves; a locked `min-width` stays after the intro and overflows the page on the next resize; a proportional face is used with no width lock, so the line shimmers; or glyphs change every frame, which reads as a bug rather than a signal.

### 9. Choreographed hero

Headline, media, nav and supporting text enter as one score, each on its own beat. Nothing here is unusual in isolation. The quality is entirely in the timing. Use its Machine setting as the default for a product landing page, or use it as the frame around any other recipe.

**Numbers (`film`, the showy setting):** media at 0, type at .25, nav at .75, supporting text at .9. Media opens over 1.3s `expo.inOut`, type runs 1.05s `expo.out` with .09s stagger. Short mode multiplies the whole score by .55.

Keep every time in one object. A change of personality is then a change of numbers, and the labels keep the order readable.

Mark `.brand`, each `.links a`, `.kicker`, the `h1`, `.media` and `.side` with `data-intro`. The `.side` block holds a paragraph and the `.cta` link.

```css
h1 .l-mask { overflow: visible !important; clip-path: inset(-.14em -.08em); }
.links { overflow: clip; }
.media { overflow: hidden; }
.media img { display: block; width: 100%; height: 100%; object-fit: cover; }
```

```js
const S = { media: 0, type: .25, nav: .75, side: .9, open: 1.3, dur: 1.05, each: .09, ease: 'expo.out' };

playIntro(mode => {
  gsap.registerPlugin(SplitText);
  const q = mode === 'short' ? .55 : 1;
  const tl = gsap.timeline();
  const media = document.querySelector('.media'), img = media.querySelector('img');

  tl.addLabel('media', S.media * q).addLabel('type', S.type * q).addLabel('nav', S.nav * q).addLabel('side', S.side * q);

  tl.fromTo(media, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: S.open * q, ease: 'expo.inOut', clearProps: 'clipPath' }, 'media')
    .from(img, { scale: 1.25, duration: (S.open + .6) * q, ease: 'expo.out', clearProps: 'scale' }, 'media+=.1');

  const split = SplitText.create('h1', { type: 'lines', mask: 'lines', linesClass: 'l', autoSplit: true, onSplit(self) {
    const t = gsap.from(self.lines, { yPercent: 120, duration: S.dur * q, ease: S.ease, stagger: S.each });
    tl.add(t, 'type');
    return t;
  } });

  tl.from('.brand, .links a', { yPercent: -110, duration: .7 * q, ease: 'power3.out', stagger: .05 }, 'nav')
    .from('.kicker', { opacity: 0, x: -10, duration: .7 * q, ease: 'power2.out' }, 'nav+=.1')
    .from('.side p', { y: 14, opacity: 0, duration: .8 * q, ease: 'power2.out' }, 'side')
    .from('.cta', { scale: .94, opacity: 0, duration: .6 * q, ease: 'back.out(1.8)' }, 'side+=.2')
    .call(() => performance.mark('hero-visible'), null, 'type+=.5')
    .call(() => split.revert(), null, `type+=${S.dur * q + S.each * 3 + .05}`);
  return tl;
}, { fonts: ['700 1em "Funnel Display"'] });
```

**Variations:**

| Character | `media` | `type` | `nav` | `side` | `open` | `dur` | `each` | `ease` |
|---|---|---|---|---|---|---|---|---|
| Film: image leads | 0 | .25 | .75 | .9 | 1.3 | 1.05 | .09 | `expo.out` |
| Press: words lead | .5 | 0 | .9 | 1 | 1.1 | .95 | .07 | `power4.out` |
| Machine: all business, the product default | .05 | .1 | .3 | .4 | .7 | .55 | .04 | `power3.out` |

The lead decides the meaning. An image-first page says look at this. A words-first page says read this.

**Phone:** the same score runs in the stacked layout. The media sits lower, so the type leads visually whichever setting you use, which is fine. Keep `.links` masked so the nav still drops from behind the top edge. **Fallback:** every element is real HTML. `data-intro` only applies behind the gate.

**Looks cheap when:** everything has the same duration and ease, which is the fade-up on every element this chapter exists to prevent; the nav leads and drags the eye to furniture; or positions are chained with `'<'` around an `onSplit` callback that may run again. Use labels.

### 10. Zoom through a letter

A word on black is filled with the hero image, then the camera flies through one letter until the image is the page. It feels like a title sequence. Use it for a short name in a very heavy face and an image worth arriving at. It is wrong with thin type, because there is no shape to fly through, and wrong on a repeat visit.

**Numbers:** word in over .55s, hold .4s, zoom 1.6s `power3.inOut`. Zoom target is 1.25 times what is needed for the stem to clear the viewport. The headline starts at 72 percent of the zoom.

```html
<div class="plate" data-cover aria-hidden="true"><span>TIDE</span></div>
```

```css
.plate { display: none; position: fixed; inset: 0; z-index: 50; overflow: hidden; background: #000; color: #fff; mix-blend-mode: multiply; place-items: center; }
.intro-full .plate { display: grid; }
.plate span { display: none; font: 400 clamp(150px, 42vw, 720px)/1 Anton, Impact, sans-serif; white-space: nowrap; }
```

`multiply` makes black stay black and white show what is underneath, so white letters become windows onto the hero with no mask image and no extra image request.

```js
const P = { dur: 1.6, ease: 'power3.inOut', hold: .4 };

function letterBox(el, index) {                         // the screen box of one glyph
  const r = document.createRange();
  r.setStart(el.firstChild, index);
  r.setEnd(el.firstChild, index + 1);
  return r.getBoundingClientRect();
}

playIntro(mode => {
  gsap.registerPlugin(SplitText);
  const plate = document.querySelector('.plate'), word = plate.querySelector('span');
  const tl = gsap.timeline({ onComplete: () => plate.remove() });
  let at = .1;
  if (mode === 'short') {
    plate.remove();
  } else {
    gsap.set(plate, { display: 'grid' });
    gsap.set(word, { display: 'block' });                                // only now: the font has resolved
    const w = word.getBoundingClientRect(), g = letterBox(word, 1);      // the stem of the I
    const ox = g.left + g.width / 2 - w.left, oy = g.top + g.height * .52 - w.top;
    const zoom = 1.25 * Math.max(innerWidth / (g.width * .62), innerHeight / (g.height * .6));
    gsap.set(word, { transformOrigin: `${ox}px ${oy}px` });
    const p = { v: 0 };                                                  // tween log(scale): zoom feels constant
    tl.from(word, { yPercent: 8, opacity: 0, duration: .55, ease: 'power3.out' }, .05)
      .to(p, {
        v: Math.log(zoom), duration: P.dur, ease: P.ease,
        onUpdate: () => gsap.set(word, { scale: Math.exp(p.v) }),
      }, .1 + P.hold);
    at = .1 + P.hold + P.dur * .72;
    tl.set(plate, { display: 'none' }, .1 + P.hold + P.dur);
  }
  const split = SplitText.create('h1', { type: 'lines', mask: 'lines', linesClass: 'l', autoSplit: true, onSplit(self) {
    const t = gsap.from(self.lines, { yPercent: 120, duration: 1, ease: 'expo.out', stagger: .1 });
    tl.add(t, at);
    return t;
  } });
  tl.from('.note, .bar', { opacity: 0, duration: .7 }, at + .4)
    .call(() => performance.mark('hero-visible'), null, at + .1);
  return tl;
}, { fonts: ['400 1em Anton'], lock: true });
```

Tween the logarithm of the scale, not the scale. Doubling must take the same time at every size, or the zoom crawls and then explodes.

**Variations:**

| Character | `dur` | `ease` | `hold` |
|---|---|---|---|
| Title sequence (default) | 1.6 | `power3.inOut` | .4 |
| Plunge | 1.1 | `power4.in` | .15 |
| Drift | 2.2 | `power2.inOut` | .6 |

Also change the letter you enter. Pick one with a broad straight stem, and pass its index to `letterBox`.

**Phone:** `zoom` is calculated from the viewport, so portrait works as is. Use `100svh` on the hero so the mobile address bar does not cut the frame. **Fallback:** the plate is `display: none` without `.intro-full`, and the hero image is in the HTML.

**Looks cheap when:** the word paints in the fallback font before the zoom (the plate shows at first paint, so keep the word `display: none` until `build` runs, which also spares CLS, as Chrome compares a revealed element with its last painted box); the zoom scale is tweened directly; the entry point is a curved or thin part of a letter, so the screen goes black before it clears; or the plate covers a page with no strong image, so the letters are filled with a flat colour.

## Proving it

A passing screenshot of the settled page proves little, because most load bugs exist only in motion. Run these before shipping an intro:

1. **Seek the timeline, do not watch it.** Pause at fixed times and take a frame of each: `intro.tl.pause(t, false)`. Real-time recording drops frames on a busy machine and hides these faults. Look for a blank hold, a hero covered while it animates, or pieces visible at time zero. Do this at phone width as well.
2. **Compare the end state** with the same page at `?intro=off`. They must match pixel for pixel.
3. **Compare line breaks** at phone width between the first frame and the reverted page.
4. **Scripts off, library blocked, library slower than the fuse.** Content must be visible in all three, and must not hide again when the slow library arrives.
5. **Reload, then open a new tab.** Expect `off`, then `short`.
6. **Reduced motion.** Expect visible content at first paint, with no intro classes on `<html>`.
7. **Resize mid-intro**, then check for a clean end state with no horizontal overflow.
8. **Delay the font past 800ms.** The final headline box must match the no-intro page.
9. **Layout shift** during the intro must stay under .02, which proves the animation lives in transforms.
