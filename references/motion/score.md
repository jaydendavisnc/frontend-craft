# The motion score

Read this before writing any animation. `foundations.md` and the other chapters hold 78 recipes. This chapter says how to choose among them so the page feels directed rather than decorated.

A generated page has one animation: things fade up as they enter. Add smooth hover states and it still has only one. Motion that feels expensive has a score, like a film: a planned opening, a language for how type arrives, another for how pictures behave, a few big moments, and handoffs between scenes so the page feels like one continuous place.

Write the score into `.frontend-craft/scenes.md` before you build. Every line below needs an answer.

## The seven parts

1. **The opening.** What happens in the first 1.2 seconds. The first picture and the headline arrive as one gesture. Never longer than 1.4s, and never a spinner.
2. **The type language.** One way display type arrives, used everywhere. Lines rising from behind a mask, or words lighting up as you read. Pick one and stay with it.
3. **The picture language.** How pictures behave. They drift inside their frames, or unclip as they enter, or scale down to rest. Pick one and apply it to every picture.
4. **The signature.** One pinned scene where scrolling does something you would describe to a colleague. This is the one rich pin. See `scroll.md`, and compositions 2 and 5.
5. **The handoffs.** How one scene becomes the next, in at least three places. The ground colour changes as a scene takes over. A picture grows until it becomes the next scene. A sheet slides over the last one and pushes it back. Hard edges between every section are the sound of a template.
6. **The hover language.** What every picture, link and row does under the pointer. Small, quick and the same across the page.
7. **The toy.** One thing that responds so well people play with it for no reason. See `components.md`.

Then leave some things still. If everything moves, nothing does. Body text and small labels do not animate. Each scene has one lead motion and at most one follower.

## Engine

For a picture-led page with a pin, use GSAP and Lenis from a CDN at pinned versions. They are free to use, tested here, and doing this by hand costs more than it saves. Keep the gate from `foundations.md` recipe 1 so the page still reads if the scripts fail.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.11/dist/lenis.min.js"></script>
```
```js
bootMotion(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const lenis = new Lenis({ lerp: .11 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    // every recipe below goes here
    ScrollTrigger.refresh();
  });
});
```

Everything below goes inside that block, so reduced motion gets none of it and the page stays complete.

## Recipes

All of these ran together on one page with no errors.

### Opening: picture and headline as one gesture

```js
const s = SplitText.create('[data-split]', { type: 'lines', mask: 'lines' });
gsap.timeline()
  .from('.open img', { clipPath: 'inset(18% 22% 18% 22%)', scale: 1.14, duration: 1.2, ease: 'expo.out' })
  .from(s.lines, { yPercent: 110, duration: .9, ease: 'expo.out', stagger: .08 }, .25);
```

Mark the picture and headline `data-hold` so they stay hidden only until the engine arrives.

### Type: words light up as you read

A long sentence set at display size begins almost invisible, and each word comes up as it passes. It turns a paragraph into a scene, and it forces the page to slow down.

```js
const w = SplitText.create('[data-scrub-words]', { type: 'words', wordsClass: 'w' });
gsap.set(w.words, { opacity: .14 });
gsap.to(w.words, { opacity: 1, stagger: .08, ease: 'none', scrollTrigger: { trigger: '[data-scrub-words]', start: 'top 72%', end: 'bottom 42%', scrub: true } });
```

Set the sentence at 4 to 6vw, and keep it to around 30 words. It only works if the sentence is worth reading.

### Picture: drift inside the frame

The frame stays still and the picture moves within it. It adds depth to every image for one line of code, and it is the single most useful picture behaviour.

```css
.mask{position:relative;overflow:hidden}
.mask img{position:absolute;left:0;top:-10%;width:100%;height:120%;object-fit:cover}
```
```js
gsap.utils.toArray('.mask img').forEach(i => gsap.to(i, { yPercent: -16, ease: 'none', scrollTrigger: { trigger: i.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }));
```

### Picture: unclip on entry

```js
gsap.utils.toArray('[data-unclip]').forEach(i => gsap.from(i, { clipPath: 'inset(100% 0 0 0)', scale: 1.15, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: i, start: 'top 80%', once: true } }));
```

### Handoff: the ground changes

The whole page changes colour as a scene takes over, so there is no edge. It works best going dark for one scene and back.

```js
document.querySelectorAll('[data-tone]').forEach(sec => {
  const [bg, ink] = sec.dataset.tone.split(',');
  ScrollTrigger.create({ trigger: sec, start: 'top 55%', end: 'bottom 45%',
    onToggle: self => { if (self.isActive) gsap.to('body', { backgroundColor: bg, color: ink, duration: .6, ease: 'power2.out', overwrite: 'auto' }); } });
});
```

Sections in the run must have transparent grounds. Give the first and last a tone that returns to the page's own.

### Handoff: sheets

Full-height sections, each `position:sticky;top:0`, so the next slides over the last, which sinks back and dims as it is covered.

```js
gsap.utils.toArray('.sheet').slice(0, -1).forEach(s => gsap.to(s, { scale: .94, filter: 'brightness(.55)', ease: 'none', scrollTrigger: { trigger: s, start: 'top top', end: 'bottom top', scrub: true } }));
```

### Handoff: the picture becomes the next scene

Composition 2 run in reverse or forward. End one scene on a small picture, and pin it as it grows to fill the screen, with the next scene's text already sitting in it.

### Speed-aware type

A marquee that sits slow and speeds up with the scroll, so it feels attached to your hand.

```js
const m = document.querySelector('.mq span'); let x = 0, v = 0;
ScrollTrigger.create({ onUpdate: self => { v = self.getVelocity() / 300; } });
const set = gsap.quickSetter(m, 'x', 'px');
gsap.ticker.add(() => { x -= 1 + Math.abs(v); v *= .92; const half = m.offsetWidth / 2; if (-x > half) x += half; set(x); });
```

Repeat the text twice inside the span so the loop has no seam. Mark it `aria-hidden` if it repeats content found elsewhere.

## Rules that keep it clean

- Animate only `transform`, `clip-path`, `opacity` and, on few elements, `filter`.
- Scrubbed motion uses `ease:'none'`. Your hand is the ease.
- Entrances use `expo.out` at 0.9 to 1.2s. Hovers take 150 to 300ms.
- No fade-up on blocks of body text. If you catch yourself writing `from({y:40,opacity:0})` for the third time, stop and choose what actually leads.
- Refresh ScrollTrigger after fonts and images load, and set `width` and `height` on every image so nothing shifts.
- Check the page with a wheel, not by jumping to positions. Pins that look fine in stills can feel like a trap. A pin should take no more than 2.5 viewport heights of scroll per idea.
- On phones keep the type and picture languages, drop horizontal pins, and test on a real width.
