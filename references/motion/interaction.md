# Interaction

Everything that answers a person: hover, press, focus, drag, typing. A fade-up plays at someone. These recipes respond to someone, so three things matter more here than anywhere else: they start at the cause (where the pointer entered, where the finger let go), they can be interrupted at any frame, and they work the same for a keyboard, a thumb and a mouse.

**Contents.** [How to choose](#how-to-choose) · [Foundation](#foundation) · [One engine per element](#one-engine-per-element)

- **Buttons:** [1 Entry-point fill](#1-entry-point-fill) · [2 Label roll](#2-label-roll) · [3 Key press and sticker](#3-key-press-and-sticker)
- **Links and pointer:** [4 Link underlines](#4-link-underlines) · [5 Magnetic control](#5-magnetic-control) · [6 Project list reveal](#6-project-list-reveal) · [7 Image trail](#7-image-trail) · [8 Tilt and depth](#8-tilt-and-depth) · [9 Contextual cursor](#9-contextual-cursor)
- **Navigation and disclosure:** [10 Drag carousel](#10-drag-carousel) · [11 Full-screen menu](#11-full-screen-menu) · [12 Accordion](#12-accordion) · [13 Tabs](#13-tabs)
- **Input and commerce:** [14 Form states](#14-form-states) · [15 Add to cart](#15-add-to-cart) · [16 Toggles and checkboxes](#16-toggles-and-checkboxes)

Read How to choose, Foundation and One engine first, then jump to the recipes you need. Each recipe is one block you can paste, and it needs only the foundation.

## How to choose

Start from the job, then spend effort in this order: press, focus, hover. Press is the receipt that something happened, so it answers inside 100ms. Focus is the only feedback a keyboard user gets. Hover is a promise, and it does not exist on a phone.

Most controls need no recipe here. The quiet default is the tone-step language under Hover state in `elements/motion.md`. The pointer recipes (1, 2, 3, 5, 6, 7, 8 and 9) are showy, and a product page may use none of them.

| The job | Use | Wrong when |
|---|---|---|
| One primary call on a page | 1 fill, or 3 key press | Repeated in a list or a toolbar |
| Navigation and secondary links | 2 roll, 4 draw or pass-through | Long labels, body text |
| Links inside prose | 4 quiet | Anything that hides the line at rest |
| A list of work with images | 6 reveal | The images are the content, so show them |
| A landing moment with no task | 7 trail, 5 magnetic | Anywhere someone is trying to read or finish something |
| A card that is the product | 8 tilt | Grids of more than about 6, or cards holding controls |
| Media where the action needs naming | 9 cursor | Text, forms, tools, anything needing precise aim |
| Sideways browsing | 10 carousel | Content someone must see all of, which should stack instead |
| Site navigation with few links | 11 menu | Apps, or more than about 7 links |
| Long answers, one at a time | 12 accordion | Content people compare side by side |
| Sibling views of one thing | 13 tabs | Sequential steps, or more than about 6 labels |
| Anything typed, bought or switched | 14, 15, 16 | Never skip these. They are the highest value motion on a site |

Three rules decide the rest.

1. **Spend at most one signature per view.** Pick one loud pointer effect (1, 2, 5, 6, 7, 8 or 9), or none, and keep everything else quiet. Fill plus magnetic plus tilt plus a custom cursor reads as a demo reel, and each one cancels the others.
2. **Used often means faster.** A button pressed fifty times a session gets the snappy numbers. A door opened once may take a second.
3. **Choose the feel before the recipe.** The feel comes from the brand, and it is what stops two sites using the same recipe from feeling alike. Set it once with `data-feel` on `<html>` or on any ancestor, and every recipe below follows. Use `snappy` for the quiet default of a product site.

| `data-feel` | Press | Hover | State | Easing | Spring k, c | Suits |
|---|---|---|---|---|---|---|
| none (base) | 70ms | 240ms | 460ms | long settle, 8% pop | 170, 20 | Brands with room for character |
| `heavy` | 120ms | 420ms | 820ms | slow settle, no pop | 70, 17 | Luxury, architecture, film, galleries |
| `snappy` | 30ms | 150ms | 200ms | short, no pop | 600, 50 | Product sites, tools, finance, documentation |
| `soft` | 90ms | 300ms | 560ms | 16% pop | 150, 13 | Food, children, consumer, play |

## Foundation

Paste this once. Every recipe assumes it. The first line goes in `<head>` before any stylesheet, and it is the gate for all hidden start states: CSS may only hide or transform something under `.js`, so a page whose script fails still shows everything.

```html
<script>document.documentElement.classList.add('js')</script>
```

```css
:root{
  --ink:#17140f; --paper:#f3efe6; --muted:#5b5548; --rule:#17140f2e;   /* map these to your palette */
  --accent:#c93c17; --on:#17140f; --off:#a79f8e;
  --dur-press:70ms; --dur-hover:240ms; --dur-state:460ms; --stagger:14ms;
  --ease-out:cubic-bezier(.16,1,.3,1);   /* arrivals: fast start, long settle */
  --ease-io:cubic-bezier(.76,0,.24,1);   /* crossings: soft at both ends */
  --ease-pop:linear(0,.143,.428,.706,.911,1.03,1.078,1.081,1.061,1.037,1.016,1.002,.995,.993,.994,.996,.998,.999,1); /* 8% overshoot */
  --spring-k:170; --spring-c:20;         /* stiffness and damping, read by spring() */
}
```

```css
[data-feel=heavy]{--dur-press:120ms;--dur-hover:420ms;--dur-state:820ms;--stagger:28ms;--spring-k:70;--spring-c:17;
  --ease-out:cubic-bezier(.19,1,.22,1);--ease-io:cubic-bezier(.77,0,.18,1);--ease-pop:var(--ease-out)}
[data-feel=snappy]{--dur-press:30ms;--dur-hover:150ms;--dur-state:200ms;--stagger:6ms;--spring-k:600;--spring-c:50;
  --ease-out:cubic-bezier(.2,0,0,1);--ease-io:cubic-bezier(.4,0,.2,1);--ease-pop:var(--ease-out)}
[data-feel=soft]{--dur-press:90ms;--dur-hover:300ms;--dur-state:560ms;--stagger:22ms;--spring-k:150;--spring-c:13;
  --ease-out:cubic-bezier(.22,1,.36,1);--ease-io:cubic-bezier(.65,0,.35,1);
  --ease-pop:linear(0,.174,.521,.849,1.065,1.155,1.153,1.104,1.046,1.002,.979,.973,.979,.988,.997,1.002,1.004,1.004,1)} /* 16% overshoot */
```

```css
:where(a,button,input,select,textarea,summary,[tabindex]):focus-visible{
  outline:2px solid var(--focus,currentColor);outline-offset:3px;animation:ring-in .18s var(--ease-out);
}
@keyframes ring-in{from{outline-offset:9px;outline-color:transparent}}
@media (prefers-reduced-motion:reduce){:focus-visible{animation:none!important}}
```

```js
const spring = (() => {
  const live = new Set(); let raf = 0, last = 0;
  const frame = now => {
    const dt = Math.min(Math.max(now - last, 0) / 1000, .1); last = now;
    const steps = Math.ceil(dt * 240), h = dt / steps;      // fixed substeps: dropped frames never slow it down
    for (const s of live) {
      for (let i = 0; i < steps; i++) { s.v += (s.k * (s.to - s.x) - s.c * s.v) * h; s.x += s.v * h; }
      const rest = Math.abs(s.to - s.x) < .01 && Math.abs(s.v) < .1;
      if (rest) { s.x = s.to; s.v = 0; live.delete(s); }
      s.draw(s.x, s.v);
      if (rest) s.done?.();
    }
    raf = live.size ? requestAnimationFrame(frame) : 0;
  };
  const token = n => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(n));
  return (draw, { k = token('--spring-k') || 170, c = token('--spring-c') || 20, x = 0, done } = {}) => {
    const s = { x, v: 0, to: x, k, c, draw, done };
    return {
      get x() { return s.x; }, get v() { return s.v; }, get target() { return s.to; },
      to(to, v) {
        s.to = to; if (v !== undefined) s.v = v; live.add(s);
        if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
      },
      jump(to) { live.delete(s); s.x = s.to = to; s.v = 0; draw(to, 0); },
    };
  };
})();
const ms = (n, el = document.documentElement) => { // reads a duration token so WAAPI moves with the same personality as the CSS
  const v = getComputedStyle(el).getPropertyValue(n).trim();
  return parseFloat(v) * (v.endsWith('ms') ? 1 : 1000);
};
const ease = (n, el = document.documentElement) => getComputedStyle(el).getPropertyValue(n).trim();
const mayMove = () => !matchMedia('(prefers-reduced-motion:reduce)').matches;
const finePointer = () => matchMedia('(hover:hover) and (pointer:fine)').matches;
```

The spring exists because pointer effects need to be retargeted every frame from the current position and velocity. A CSS transition restarts its curve on each change, and a GSAP tween restarts with zero velocity. Damping ratio is `c / (2 * sqrt(k))`: at 1 or above nothing overshoots, around .5 it swings once or twice, and below .3 it wobbles like a toy. Raising `k` makes it faster. Lowering `c` makes it looser.

Rules every recipe follows:

- **Sticky hover.** A tap leaves `:hover` stuck on touch screens. Put hover effects inside `@media (hover:hover)` in CSS, and behind `finePointer()` in script.
- **Hover parity.** Whatever hover reveals, `:focus-visible` reveals too. Use `:focus-visible`, not `:focus`, so a mouse click does not leave a ring.
- **Interruption.** Use transitions or springs for anything a person can reverse. Never use `@keyframes` for a hover state, because keyframes cannot reverse from the middle. A loop with no end state, like the wave in recipe 4, is the one exception.
- **Reduced motion means no travel, not no feedback.** Replace movement with an instant or colour change. Keep small presses the person caused.
- **The specificity trap.** A reduced-motion rule loses to a more specific hover rule. `.fill__over{transition:none}` does nothing against `.fill:hover .fill__over{transition-duration:...}`. Match the specificity or use `!important` there.
- **Touch.** Set `touch-action:manipulation` on anything tappable, which removes the double-tap zoom wait. Keep targets at 44px or more. Set inputs to at least 16px, or iOS zooms the page on focus.
- **Layout.** Animate `transform`, `opacity`, `clip-path` and `filter`. Measure a thing that does not move, once per interaction, never inside a frame loop.
- **Cleanup.** The spring stops its frame loop when everything rests, so idle pages cost nothing. In a component framework, pass one `AbortController`'s `signal` to every `addEventListener`, call `abort()` on unmount, and remove anything the recipe appended to `body` (the floaters in 6, 9 and 15). Window listeners outlive the component otherwise.

## One engine per element

CSS transitions, WAAPI and the spring above carry fifteen of these sixteen recipes with no dependency. GSAP is used once, in the menu, where one reversible timeline with a stagger is worth 28 kB gzipped. Pin this exact URL, from the table in the foundations chapter, and load it once. Two different GSAP URLs on one page means two copies. Use `defer`, because a blocking tag holds back the inline script behind it, and a slow CDN then leaves a visible control that does nothing.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js" defer></script>
```

Mixing engines on one element and one property is what breaks. Each of these was measured:

- **CSS transition plus GSAP on `transform`.** Every GSAP write restarts the transition, so the element trails behind and arrives late. Remove the transition from any property GSAP drives.
- **WAAPI `fill:'forwards'` plus anything else.** A finished forward-filling animation outranks inline styles, so later spring or GSAP writes do nothing. Use `fill:'backwards'` and let the element rest on its CSS.
- **Two writers to `transform`.** The last write each frame wins, so the element flickers between them. Give each engine its own element, or layer by property: `translate`, `rotate` and `scale` compose with `transform` without touching it. That is why these recipes hover with `scale` and let script write `transform`.

## Buttons

### 1. Entry-point fill

A second copy of the label, in inverted colours, is clipped to a circle that grows from the exact point where the pointer crossed the edge, and retreats to where it left. The button seems to notice you arrive instead of playing a state. Use it on one or two primary calls per page. It is wrong in lists and toolbars, and on buttons under about 120px, where the circle has no room to read.

```html
<style>
@property --r{syntax:'<percentage>';inherits:false;initial-value:0%}
.fill{position:relative;display:inline-grid;place-items:center;min-height:52px;padding:0 30px;border:1px solid;border-radius:999px;color:var(--ink);text-decoration:none;touch-action:manipulation}
.fill__over{position:absolute;inset:-1px;display:grid;place-items:center;border-radius:inherit;background:var(--ink);color:var(--paper);--r:0%;clip-path:circle(var(--r) at var(--x,50%) var(--y,50%));transition:--r calc(var(--dur-state)*.7) var(--ease-out)}
.fill:focus-visible .fill__over,.fill.is-down .fill__over{--r:150%;transition-duration:var(--dur-state)}
@media (hover:hover){.fill:hover .fill__over{--r:150%;transition-duration:var(--dur-state)}}
@media (prefers-reduced-motion:reduce){.fill .fill__over{transition:none!important}}
/* variations */
.fill--heavy{--dur-state:1s;--ease-out:cubic-bezier(.19,1,.22,1);min-height:68px;padding:0 44px}
.fill--blade{--dur-state:220ms;--ease-out:cubic-bezier(.2,0,0,1);border-radius:2px}
.fill--blade .fill__over{clip-path:inset(0 calc(100% - var(--r)) 0 0)}
.fill--soft{--dur-state:620ms;--ease-out:var(--ease-pop)}
.fill--soft .fill__over{background:var(--accent);color:#fff;clip-path:ellipse(calc(var(--r)*1.25) calc(var(--r)*.8) at var(--x,50%) var(--y,50%))}
</style>
<a class="fill" href="#start">Start a project<span class="fill__over" aria-hidden="true">Start a project</span></a>
<script>
document.querySelectorAll('.fill').forEach(el => {
  const mark = e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', e.clientX - r.left + 'px');
    el.style.setProperty('--y', e.clientY - r.top + 'px');
  };
  el.addEventListener('pointerenter', mark);
  el.addEventListener('pointerleave', mark); // the ink retreats to the exit point
  el.addEventListener('pointerdown', e => {
    mark(e);
    if (e.pointerType === 'mouse') return;   // touch has no hover, so the press carries the effect
    el.classList.add('is-down');
    setTimeout(() => el.classList.remove('is-down'), 260);
  });
  el.addEventListener('focus', () => {       // keyboard focus fills from the centre
    if (el.matches(':focus-visible')) { el.style.removeProperty('--x'); el.style.removeProperty('--y'); }
  });
});
</script>
```

- **Numbers:** Open in `--dur-state` (460ms) on `--ease-out`, close in 70% of that. Radius runs 0% to 150%, which clears the far corner from any entry point. `@property` registers `--r` so it can interpolate at all.
- **Variations:** Base is a pill. **Heavy:** 1s, 68px tall, slow settle, for a booking call. **Blade:** 220ms, square corners, a straight `inset()` wipe that ignores the entry point, for tools. **Soft:** accent colour, an ellipse, overshoot over 620ms.
- **Keyboard:** Focus fills from the centre, because the script clears `--x` and `--y` and the 50% fallback applies.
- **Touch:** There is no hover, so `pointerdown` marks the thumb and `.is-down` holds the fill for 260ms.
- **Fallback:** Without script, hover still fills from the centre. Browsers without `@property` swap to filled with no travel. Reduced motion fills at once.
- **Goes wrong:** Skipping the leave point, so the ink collapses back to the entry and looks like a rewind. Fading `background` instead of clipping a duplicate, which loses the crisp inversion at the ink's edge. Leaving the duplicate readable, so screen readers say the label twice.

### 2. Label roll

Each letter leaves upward and its copy arrives from below, one after another, like a departures board. It feels precise and a little mechanical. Use it for navigation and short secondary calls. It is wrong for labels over about 24 letters, for body links, and for scripts whose letters join, such as Arabic or Devanagari, where splitting into spans breaks the shaping.

```html
<style>
.roll{display:inline-block;padding:14px 26px;border-radius:999px;background:var(--ink);color:var(--paper);text-decoration:none;line-height:1.3}
.roll__mask{display:block;overflow:hidden;white-space:nowrap}
.roll__ch{position:relative;display:inline-block;white-space:pre;transition:transform var(--dur-state) var(--ease-io);transition-delay:calc(var(--i,0)*var(--stagger))}
.roll__ch::after{content:attr(data-ch);position:absolute;left:0;top:100%}
.roll:focus-visible .roll__ch{transform:translateY(-100%)}
@media (hover:hover){.roll:hover .roll__ch{transform:translateY(-100%)}}
.roll:active{scale:.97}
@media (prefers-reduced-motion:reduce){
  .roll .roll__ch{transform:none!important;transition:none}
  .roll{transition:background-color 120ms}
  .roll:hover,.roll:focus-visible{background:var(--accent)}
}
/* variations */
.roll--slab{--stagger:0ms;--dur-state:760ms;border-radius:4px;padding:18px 34px}
.roll--tick{--stagger:5ms;--dur-state:170ms;--ease-io:cubic-bezier(.2,0,0,1);border-radius:2px;background:none;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink)}
.roll--bounce{--stagger:24ms;--dur-state:560ms;--ease-io:var(--ease-pop);background:var(--accent);color:#fff}
</style>
<a class="roll" href="#work"><span class="roll__mask">View the work</span></a>
<script>
document.querySelectorAll('.roll__mask').forEach(mask => {
  const text = mask.textContent.trim();
  mask.parentElement.setAttribute('aria-label', text);
  mask.textContent = '';
  [...text].forEach((ch, i) => {
    const c = mask.appendChild(document.createElement('span'));
    c.className = 'roll__ch'; c.textContent = c.dataset.ch = ch;
    c.setAttribute('aria-hidden', 'true'); c.style.setProperty('--i', i);
  });
});
</script>
```

- **Numbers:** 460ms on `--ease-io`, 14ms per letter, so 13 letters finish in about 630ms. Press is `scale:.97`.
- **Variations:** **Slab:** no stagger, 760ms, the word moves as one heavy block. **Tick:** 5ms stagger, 170ms, outlined, mechanical. **Bounce:** 24ms stagger with overshoot, soft.
- **Keyboard:** `:focus-visible` rolls it. `aria-label` carries the text, so a screen reader hears a word and not thirteen letters.
- **Touch:** The roll is gated behind hover, so a tap shows only the press.
- **Fallback:** Without script it is a plain link. Reduced motion keeps the letters still and changes the background instead.
- **Goes wrong:** Missing `white-space:pre`, which collapses the spaces. A mask with line-height under about 1.3, which clips descenders. A stagger so long the roll is still running after the pointer has left.

### 3. Key press and sticker

A cap travels onto a fixed base: it accelerates into contact and overshoots on release, so it feels like a real switch. Only the cap moves. If the whole button moved, pressing its bottom edge would slide it out from under the pointer and cancel the click. Use it for play, commerce and tools. It is wrong for formal or luxury brands, and on quiet secondary actions.

```html
<style>
.key{--depth:6px;--radius:14px;position:relative;display:inline-block;padding:0 0 var(--depth);border:0;background:none;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}
.key::before{content:"";position:absolute;inset:var(--depth) 0 0;border-radius:var(--radius);background:var(--edge,#7f2410)}
.key__cap{position:relative;display:block;padding:14px 28px;border-radius:var(--radius);background:var(--cap,var(--accent));color:var(--label,#fff);transition:transform calc(var(--dur-state)*.9) var(--ease-pop)}
@media (hover:hover){.key:hover .key__cap{transform:translateY(-2px)}}
.key:active .key__cap,.key.is-down .key__cap{transform:translateY(var(--depth));transition:transform var(--dur-press) cubic-bezier(.4,0,1,1)}
@media (prefers-reduced-motion:reduce){.key__cap{transition-duration:1ms}}
/* variations */
.key--plate{--depth:10px;--radius:6px;--dur-press:160ms;--cap:var(--ink);--edge:#000;--ease-pop:var(--ease-out);--dur-state:900ms}
.key--switch{--depth:2px;--radius:3px;--dur-press:24ms;--dur-state:120ms;--ease-pop:linear;--cap:var(--paper);--label:var(--ink);--edge:var(--ink)}
.key--switch .key__cap{box-shadow:inset 0 0 0 1px var(--ink);padding:12px 22px}
.key--sticker{--depth:0px;--edge:transparent;--ease-pop:linear(0,.174,.521,.849,1.065,1.155,1.153,1.104,1.046,1.002,.979,.973,.979,.988,.997,1.002,1.004,1.004,1)}
.key--sticker .key__cap{transform:rotate(-2.5deg);background:#ffd166;color:var(--ink);box-shadow:0 2px 0 #17140f26,0 10px 18px -8px #17140f66;transition:transform var(--dur-state) var(--ease-pop),box-shadow var(--dur-hover)}
@media (hover:hover){.key--sticker:hover .key__cap{transform:rotate(1deg) scale(1.03)}}
.key--sticker:active .key__cap,.key--sticker.is-down .key__cap{transform:rotate(0) scale(.95);box-shadow:0 1px 0 #17140f26}
</style>
<button class="key" type="button"><span class="key__cap">Add to bag</span></button>
<script>
document.querySelectorAll('.key').forEach(k => {
  const down = () => k.classList.add('is-down'), up = () => k.classList.remove('is-down');
  k.addEventListener('pointerdown', down);                  // iOS does not apply :active reliably
  k.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') down(); });
  for (const t of ['pointerup', 'pointerleave', 'pointercancel', 'keyup', 'blur']) k.addEventListener(t, up);
});
</script>
```

- **Numbers:** Depth 6px. Press 70ms on `cubic-bezier(.4,0,1,1)`, which accelerates into contact. Release 414ms on `--ease-pop`. Hover lifts 2px. Keep press several times faster than release, or it reads as a fade.
- **Variations:** **Plate:** 10px of travel, 160ms press, 810ms release, no overshoot. **Switch:** 2px, 24ms, linear, an outline, like a keyboard. **Sticker:** no base, tilted 2.5 degrees, flattens to 0 degrees and scale .95 when pressed, with a soft shadow.
- **Keyboard:** `keydown` for Enter and Space sets `.is-down`, and `keyup` or `blur` clears it, so a keyboard press looks identical.
- **Touch:** `pointerdown` drives the press, because iOS does not apply `:active` reliably. `pointercancel` clears it when the thumb turns into a scroll.
- **Fallback:** `:active` still works without script. Reduced motion keeps the press, because the person caused it, and cuts the overshoot.
- **Goes wrong:** Moving the whole button. Equal press and release times. Animating `box-shadow` for depth, which repaints every frame, instead of moving the cap over a static base.

## Links and pointer

### 4. Link underlines

Five characters from one small idea. Choose by context: prose must keep a line at rest, and navigation can earn it on hover. Add the class to any inline `<a>`. Backgrounds wrap across lines correctly, which is why these do not use `::after` with `scaleX`.

```html
<style>
/* Quiet: for prose. Native line, so it skips descenders. */
.ln-quiet{text-decoration:underline 1px;text-underline-offset:.18em;transition:text-underline-offset var(--dur-hover) var(--ease-out),text-decoration-thickness var(--dur-hover) var(--ease-out)}
.ln-quiet:is(:hover,:focus-visible){text-underline-offset:.32em;text-decoration-thickness:2px}

/* Pass-through: underlined at rest, the line exits right and a new one enters left. */
.ln-pass{text-decoration:none;background:linear-gradient(90deg,currentColor 46%,transparent 46% 54%,currentColor 54%) 0 100%/220% 1px no-repeat;transition:background-position var(--dur-state) var(--ease-io)}
.ln-pass:is(:hover,:focus-visible){background-position:100% 100%}

/* Draw: for nav. No line at rest; grows from the left, leaves to the right. */
.ln-draw{text-decoration:none;background:linear-gradient(currentColor,currentColor) 100% 100%/0 1px no-repeat;transition:background-size var(--dur-state) var(--ease-out)}
.ln-draw:is(:hover,:focus-visible){background-size:100% 1px;background-position:0 100%}

/* Marker: loud. Ink rises from the baseline and the text flips. */
.ln-mark{text-decoration:none;padding:.05em .15em;margin:0 -.15em;-webkit-box-decoration-break:clone;box-decoration-break:clone;background:linear-gradient(var(--ink),var(--ink)) 0 100%/100% 2px no-repeat;transition:background-size var(--dur-hover) var(--ease-out),color var(--dur-hover) linear}
.ln-mark:is(:hover,:focus-visible){background-size:100% 100%;color:var(--paper)}

/* Wave: playful. A hand-drawn line that only moves while hovered. */
.ln-wave{--w:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='6'%3E%3Cpath d='M0 3q4-4 8 0t8 0' fill='none' stroke='%23c93c17' stroke-width='1.6'/%3E%3C/svg%3E");text-decoration:none;padding-bottom:5px;background:var(--w) 0 100%/16px 6px repeat-x}
@keyframes ln-wave{to{background-position-x:16px}}
.ln-wave:is(:hover,:focus-visible){animation:ln-wave .55s linear infinite}

@media (prefers-reduced-motion:reduce){
  .ln-quiet,.ln-pass,.ln-draw,.ln-mark{transition-duration:1ms}
  .ln-wave:is(:hover,:focus-visible){animation:none}
}
</style>
```

- **Numbers:** Quiet moves offset from .18em to .32em and thickness to 2px in 240ms. Pass-through and draw take 460ms. Marker rises in 240ms. The wave loops every 550ms and only while hovered.
- **Variations:** The five are the variations: **quiet** for reading, **pass-through** for lists, **draw** for navigation, **marker** for one loud call, **wave** for warm brands. For a heavier draw set `--dur-state:900ms`. For a mechanical one set `--dur-state:120ms`.
- **Keyboard:** Every state is `:is(:hover,:focus-visible)`, so a tabbed link plays the same move.
- **Touch:** Nothing animates, so the rest state must carry the meaning. Use quiet or pass-through anywhere a line is the only sign of a link.
- **Fallback:** CSS only. Reduced motion makes the changes instant and stops the wave.
- **Goes wrong:** An `::after` line on a link that wraps, which draws under one line or across the whole box. Removing the underline from links in body text, so colour alone marks them. Leaving the wave running at rest, which pulls the eye from the sentence.

### 5. Magnetic control

A still outer zone senses the cursor. The button leans toward it, and the label leans further, so the control seems to have mass. Use it on one round or isolated call with space around it. It is wrong for anything in a row, near text, or where it would move a neighbour's target.

```html
<style>
.mag{display:inline-block;padding:36px;margin:-36px}
.mag__btn{display:inline-grid;place-items:center;width:136px;aspect-ratio:1;border-radius:50%;background:var(--ink);color:var(--paper);text-decoration:none;text-align:center;line-height:1.2}
.mag__txt{display:block}
</style>
<span class="mag"><a class="mag__btn" href="#talk"><span class="mag__txt">Get in touch</span></a></span>
<script>
if (finePointer() && mayMove()) document.querySelectorAll('.mag').forEach(zone => {
  const btn = zone.firstElementChild, txt = btn.firstElementChild;
  const { pull = .35, k = 180, c = 13, label = .5 } = zone.dataset;
  const paint = () => {
    const rest = !x.x && !y.x;
    btn.style.transform = rest ? '' : `translate(${x.x}px,${y.x}px)`;
    txt.style.transform = rest ? '' : `translate(${x.x * label}px,${y.x * label}px)`;
  };
  const x = spring(paint, { k: +k, c: +c }), y = spring(paint, { k: +k, c: +c });
  zone.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = zone.getBoundingClientRect();
    x.to((e.clientX - r.left - r.width / 2) * pull);
    y.to((e.clientY - r.top - r.height / 2) * pull);
  });
  zone.addEventListener('pointerleave', () => { x.to(0); y.to(0); });
});
</script>
```

- **Numbers:** Zone padding 36px, cancelled by a negative margin so layout is unchanged. Pull .35 of the offset. The label adds half again, through `data-label`. Spring k180, c13, a damping ratio near .5, so it swings once on release.
- **Variations:** Set on the zone. **Heavy:** `data-pull=".22" data-k="60" data-c="14"`. **Tight:** `data-pull=".18" data-k="520" data-c="44" data-label="0"`, for an exact, tool-like feel. **Loose:** `data-pull=".45" data-k="150" data-c="9"`, bouncy.
- **Keyboard:** No lean. The focus ring from the foundation is the answer, and nothing depends on the movement.
- **Touch:** Off. `finePointer()` skips the whole script.
- **Fallback:** A normal link with no script and under reduced motion.
- **Goes wrong:** Measuring the button instead of the zone, which feeds its own movement back in and makes it shake. A pull above about .5, so the control runs from the pointer. Using it on every button, which makes the page feel unstable.

### 6. Project list reveal

One image window follows the cursor and rolls to the row you are on, so a text list previews a whole archive. Build the list first with an inline thumbnail in every row. The floater is an enhancement that replaces them, which makes touch, keyboard and failure cases free. It is wrong when the images need to be studied, because a hover preview is a glimpse.

```html
<style>
.works a{display:grid;grid-template-columns:72px 1fr auto;gap:18px;align-items:center;transition:opacity var(--dur-hover) linear}
.works__thumb{width:72px;height:72px;object-fit:cover}
.works__name{transition:translate var(--dur-state) var(--ease-out)}
.reveal{position:fixed;left:0;top:0;z-index:10;width:clamp(220px,23vw,340px);aspect-ratio:4/5;overflow:hidden;pointer-events:none;clip-path:inset(50% 0 50% 0 round 6px);transition:clip-path var(--dur-state) var(--ease-out)}
.reveal.is-on{clip-path:inset(0 0 0 0 round 6px)}
.reveal__strip{transition:transform var(--dur-state) var(--ease-out)}
.reveal__strip img{display:block;width:100%;height:auto;aspect-ratio:4/5;object-fit:cover}
.has-reveal a{grid-template-columns:1fr auto}
.has-reveal .works__thumb{display:none}
.has-reveal:hover a{opacity:.32}
.has-reveal a:is(:hover,:focus-visible){opacity:1}
.has-reveal a:is(:hover,:focus-visible) .works__name{translate:18px 0}
/* variations */
.reveal--plate{--dur-state:900ms;width:clamp(280px,30vw,440px);border-radius:0;clip-path:inset(100% 0 0 0)}
.reveal--plate.is-on{clip-path:inset(0)}
.reveal--cut,.reveal--cut .reveal__strip{transition:none}
.reveal--float{--dur-state:620ms;--ease-out:var(--ease-pop);border-radius:18px}
</style>
<ul class="works">
  <li><a href="#tideline"><img class="works__thumb" src="art/1.svg" alt=""><span class="works__name">Tideline</span><span class="works__meta">Identity, 2025</span></a></li>
  <li><a href="#northfold"><img class="works__thumb" src="art/2.svg" alt=""><span class="works__name">Northfold</span><span class="works__meta">Web, 2025</span></a></li>
</ul>
<script>
document.querySelectorAll('.works').forEach(list => {
  if (!finePointer() || !mayMove()) return;                // the inline thumbnails stay
  const links = [...list.querySelectorAll('a')], { k = 130, c = 20, lean = 7, look = '' } = list.dataset;
  const box = document.createElement('div'), strip = document.createElement('div');
  box.className = `reveal ${look}`; strip.className = 'reveal__strip'; box.setAttribute('aria-hidden', 'true');
  links.forEach(a => strip.append(a.querySelector('.works__thumb').cloneNode()));
  box.append(strip); document.body.append(box); list.classList.add('has-reveal');

  const paint = () => {
    const tip = Math.max(-lean, Math.min(+lean, x.v * .012));   // leans into its own speed
    box.style.transform = `translate3d(${x.x}px,${y.x}px,0) rotate(${tip}deg)`;
  };
  const x = spring(paint, { k: +k, c: +c }), y = spring(paint, { k: +k, c: +c });
  const aimX = (px, w) => (px > innerWidth * .55 ? px - w - 28 : px + 28);  // stays clear of the row text
  const aimY = (py, h) => Math.max(16, Math.min(innerHeight - h - 16, py - h / 2));
  const roll = i => { strip.style.transform = `translateY(${-100 * i / links.length}%)`; };
  let on = false;

  const show = (i, px, py) => {
    if (on) return roll(i);
    strip.style.transition = 'none'; roll(i); strip.offsetHeight; strip.style.transition = '';
    x.jump(aimX(px, box.offsetWidth)); y.jump(aimY(py, box.offsetHeight));   // start at the pointer, never fly in from 0,0
    box.classList.add('is-on'); on = true;
  };
  const hide = () => { box.classList.remove('is-on'); on = false; };

  links.forEach((a, i) => {
    a.addEventListener('pointerenter', e => show(i, e.clientX, e.clientY));
    a.addEventListener('focus', () => {                    // keyboard parity: dock beside the focused row
      if (!a.matches(':focus-visible')) return;
      const r = a.getBoundingClientRect(), mid = r.top + r.height / 2, px = innerWidth * .8;
      show(i, px, mid);
      x.to(aimX(px, box.offsetWidth)); y.to(aimY(mid, box.offsetHeight));
    });
  });
  list.addEventListener('pointermove', e => {
    if (on) { x.to(aimX(e.clientX, box.offsetWidth)); y.to(aimY(e.clientY, box.offsetHeight)); }
  });
  list.addEventListener('pointerleave', hide);
  list.addEventListener('focusout', e => { if (!list.contains(e.relatedTarget)) hide(); });
});
</script>
```

- **Numbers:** Window `clamp(220px,23vw,340px)` at 4:5. Opens from the middle with `clip-path` in 460ms. The strip rolls in 460ms. Spring k130, c20. Lean is .012 degrees per px/s, capped at 7 degrees. Offset 28px from the pointer, flipping sides past 55% of the viewport. Other rows dim to .32 in 240ms.
- **Variations:** Set `data-k`, `data-c`, `data-lean` and `data-look` on the list. **Plate:** `60, 14, 2, reveal--plate`, large, rises from the bottom edge. **Cut:** `700, 52, 0, reveal--cut`, stiff, images swap on the frame. **Float:** `80, 8, 14, reveal--float`, swings and pops open.
- **Keyboard:** Focus docks the window beside the row at 80% of the viewport width, and leaving the list closes it.
- **Touch:** No floater. The inline thumbnails stay.
- **Fallback:** Without script and under reduced motion the thumbnails stay too, so the list is complete on its own.
- **Goes wrong:** Starting the window at 0,0 so it flies in from the corner, which `x.jump` prevents. Sitting on top of the row text. Crossfading images instead of rolling, which loses the sense of one strip moving past a window.

### 7. Image trail

Moving the pointer leaves a trail of images that appear, hold and fall away, so exploring the page feels like dealing cards. Spawn by distance travelled, never by time, or a still pointer piles images up and a fast one leaves gaps. Use it on a landing moment with nothing to read. It is wrong anywhere near body text or a task.

```html
<style>
.trail{position:relative;isolation:isolate;min-height:100svh;display:grid;grid-template-columns:minmax(0,1fr);align-content:center;gap:28px;padding:24px;overflow:clip;background:#121110;color:#fff}
.trail__title{position:relative;z-index:300;margin:0;mix-blend-mode:difference;pointer-events:none;font-size:clamp(44px,11vw,150px);line-height:.95;letter-spacing:-.035em;font-weight:500}
.trail__set{display:flex;flex-wrap:wrap;gap:10px;margin:0;padding:0;list-style:none}                 /* the static collage */
.trail__set img{display:block;width:clamp(72px,16vw,180px);height:auto;aspect-ratio:4/5;object-fit:cover;border-radius:4px}
.trail__pool img{position:absolute;left:0;top:0;width:clamp(150px,17vw,240px);height:auto;aspect-ratio:4/5;object-fit:cover;opacity:0;pointer-events:none;transform:translate(-50%,-50%);will-change:transform,opacity}
.trail__set{transition:opacity var(--dur-state) linear}
.trail.is-live .trail__set{opacity:0}                                                  /* keeps its space, so the title never jumps */
/* variations */
.trail[data-style=plate] .trail__pool img{width:clamp(220px,28vw,420px)}
.trail[data-style=cut] .trail__pool img{border-radius:0;aspect-ratio:1}
</style>
<section class="trail">
  <h1 class="trail__title">Move slowly through the archive</h1>
  <ul class="trail__set">
    <li><img src="art/1.svg" alt=""></li><li><img src="art/2.svg" alt=""></li><li><img src="art/3.svg" alt=""></li><li><img src="art/4.svg" alt=""></li>
  </ul>
</section>
<script>
document.querySelectorAll('.trail').forEach(stage => {
  if (!finePointer() || !mayMove()) return;            // the collage stays
  const srcs = [...stage.querySelectorAll('.trail__set img')].map(i => i.src);
  const pool = document.createElement('div');
  pool.className = 'trail__pool'; pool.setAttribute('aria-hidden', 'true');
  const imgs = Array.from({ length: 14 }, (_, i) => {
    const im = new Image(); im.alt = ''; im.src = srcs[i % srcs.length];
    return pool.appendChild(im);
  });
  stage.append(pool);

  const { life = 1500, gap = 14, swing = 12 } = stage.dataset;
  let last = null, n = 0, z = 1;
  stage.addEventListener('pointerleave', () => { last = null; });
  stage.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    stage.classList.add('is-live');                    // the collage stays until the pointer first moves
    const r = stage.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (last && Math.hypot(x - last.x, y - last.y) < Math.max(64, r.width / gap)) return;  // distance, not time
    last = { x, y };
    const el = imgs[n++ % imgs.length], tilt = (Math.random() - .5) * swing;
    el.getAnimations().forEach(a => a.cancel());
    el.style.translate = `${x}px ${y}px`; el.style.zIndex = 2 + (z++ % 200);
    const cut = stage.dataset.style === 'cut';
    el.animate([
      { opacity: cut ? 1 : 0, scale: cut ? 1 : .68, rotate: `${tilt * 2}deg`, easing: 'cubic-bezier(.16,1,.3,1)' },
      { opacity: 1, scale: 1, rotate: `${tilt}deg`, offset: .2 },
      { opacity: 1, scale: 1, rotate: `${tilt}deg`, offset: cut ? .99 : .62, easing: 'cubic-bezier(.4,0,1,1)' },
      { opacity: 0, scale: cut ? 1 : .9, rotate: `${tilt}deg` },
    ], { duration: +life, fill: 'backwards' });   // ends on the CSS opacity:0, so nothing is retained
  });
});
</script>
```

- **Numbers:** Pool of 14 images, recycled. One spawn per `max(64px, width / gap)` of travel, 103px at 1440 wide. Life 1500ms: in over the first 20%, hold to 62%, out to 100%. Scale .68 to 1 to .9. Tilt within 6 degrees either way, settling from double that.
- **Variations:** Set on `.trail`. **Heavy:** `data-life="2600" data-gap="9" data-swing="3" data-style="plate"`, large and nearly straight. **Snappy:** `data-life="520" data-gap="22" data-swing="0" data-style="cut"`, hard cuts with no fade or scale. **Soft:** `data-life="1900" data-gap="12" data-swing="34"`, a loose pile.
- **Keyboard:** Nothing to operate, so nothing is lost. The title remains the content.
- **Touch:** The static row of images stays. A trail under a finger would be hidden by the finger.
- **Fallback:** Without script and under reduced motion the same static row stays. Even with a mouse it stays until the pointer first moves, so someone who has not moved yet never lands on an empty page. It fades instead of leaving the layout, so the title does not jump.
- **Goes wrong:** `fill:'forwards'` or `'both'`, which keeps every finished animation alive on the pooled images. Unpreloaded images, which pop in partway through. Letting images bury the title, the only words on the page, so keep it above the pool with `mix-blend-mode:difference` and it inverts over every image.

### 8. Tilt and depth

A card tips toward the cursor while its layers separate in depth. The outer link never moves, so the pointer cannot slide off an edge and cause a flicker. Use it on a few cards that are the product. It is wrong on large grids, and on cards with controls inside, because a tilted target is harder to hit.

```html
<style>
.tilt{display:block;perspective:1000px;color:inherit;text-decoration:none}     /* still: owns the hit area */
.tilt__card{position:relative;display:block;aspect-ratio:4/5;border-radius:14px;transform-style:preserve-3d;background:var(--card,#d8431f) center/cover;box-shadow:0 24px 40px -24px #0007}
.tilt__layer{position:absolute;left:8%;right:8%;display:block;transform:translateZ(calc(var(--z,0)*1px));color:#fff}
.tilt__glare{position:absolute;inset:0;border-radius:inherit;opacity:0;pointer-events:none;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),#fff,#fff0 62%);transition:opacity var(--dur-state) linear}
.tilt.is-on .tilt__glare{opacity:.9}
.tilt:focus-visible{outline-offset:6px}
.tilt:focus-visible .tilt__card{transform:rotateX(3deg) rotateY(-4deg)}
</style>
<a class="tilt t1" href="#ember" data-max="9">
  <span class="tilt__card">
    <span class="tilt__layer tilt__head" style="--z:30"><h2>Ember</h2></span>
    <span class="tilt__layer tilt__chip" style="--z:60">A field recording series</span>
    <span class="tilt__glare"></span>
  </span>
</a>
<script>
if (finePointer() && mayMove()) document.querySelectorAll('.tilt').forEach(wrap => {
  const card = wrap.querySelector('.tilt__card'), glare = wrap.querySelector('.tilt__glare');
  const { max = 9, k = 170, c = 16 } = wrap.dataset;
  let box;                                  // measured once per entry: the wrapper never moves, so it stays true
  const paint = () => {
    const still = !rx.x && !ry.x;
    card.style.transform = still ? '' : `rotateX(${rx.x}deg) rotateY(${ry.x}deg)`;   // '' restores crisp text
  };
  const rx = spring(paint, { k: +k, c: +c }), ry = spring(paint, { k: +k, c: +c });
  wrap.addEventListener('pointerenter', e => {
    if (e.pointerType !== 'mouse') return;
    box = wrap.getBoundingClientRect(); wrap.classList.add('is-on');
  });
  wrap.addEventListener('pointermove', e => {
    if (!box) return;
    const nx = (e.clientX - box.left) / box.width, ny = (e.clientY - box.top) / box.height;
    rx.to((.5 - ny) * max * 2); ry.to((nx - .5) * max * 2);
    glare.style.setProperty('--gx', nx * 100 + '%'); glare.style.setProperty('--gy', ny * 100 + '%');
  });
  wrap.addEventListener('pointerleave', () => { box = null; wrap.classList.remove('is-on'); rx.to(0); ry.to(0); });
});
</script>
```

- **Numbers:** Maximum 9 degrees, perspective 1000px, layers at 30px and 60px of `translateZ`, spring k170, c16. Glare is a soft-light radial at .9 opacity that follows the pointer.
- **Variations:** Set on `.tilt`. **Heavy:** `data-max="4" data-k="50" data-c="12"`, layers at 12px and 20px. **Loose:** `data-max="14" data-k="210" data-c="12"`, layers at 40px and 90px. **Stiff:** `data-max="2.5" data-k="600" data-c="46"`, layers at 6px and 10px, barely alive, for serious products.
- **Keyboard:** `:focus-visible` gives a fixed lean of 3 and -4 degrees, plus the ring.
- **Touch:** Off. The card is flat and every layer stays readable.
- **Fallback:** Flat with no script and under reduced motion. Depth only comes from `translateZ`, which does nothing while the card is flat.
- **Goes wrong:** Tilting the element that owns the hit area. Keeping the transform at rest, which leaves text soft, so the script clears it to `''`. Tilting past about 15 degrees, where it looks like a broken page.

### 9. Contextual cursor

A label appears only over the things it describes, says what a click will do, and gets out of the way. Use it over media where the action needs naming, such as view, drag or play.

Never use one over text, forms, product tools, dense interfaces, or anywhere precise aim matters. Never replace the pointer site-wide, never add a trailing dot for decoration, and never hide the native pointer before script has confirmed a fine pointer. A custom cursor that lags is a broken mouse.

```html
<style>
.zone{display:block}                         /* an inline link has no real box around its image */
.zone img{display:block;width:100%;height:auto}
.cur{position:fixed;left:0;top:0;z-index:50;pointer-events:none}
.cur__label{display:grid;place-items:center;width:88px;height:88px;margin:-44px 0 0 -44px;border-radius:50%;background:var(--ink);color:var(--paper);font-size:14px;scale:0;transition:scale var(--dur-hover) var(--ease-pop)}
.cur.is-on .cur__label{scale:1}
.cur.is-on.is-down .cur__label{scale:.86;transition-duration:var(--dur-press)}
.has-cur [data-cursor]{cursor:none}
.has-cur [data-kind=tag]{cursor:pointer}
@media (prefers-reduced-motion:reduce){.cur__label{transition-duration:1ms}}
/* variations */
.cur[data-kind=tag] .cur__label{width:auto;height:auto;margin:18px 0 0 18px;padding:4px 10px;border-radius:4px;transform-origin:0 0}
.cur[data-kind=lens]{mix-blend-mode:difference}
.cur[data-kind=lens] .cur__label{background:#fff;color:#0000;width:150px;height:150px;margin:-75px 0 0 -75px}
.cur[data-kind=wire] .cur__label{color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink);border-radius:2px;width:96px;height:44px;margin:-22px 0 0 -48px;background:var(--paper)}
</style>
<a class="zone" href="#case" data-cursor="View"><img src="art/2.svg" alt=""><span>Northfold, case study</span></a>
<script>
(() => {
  if (!finePointer()) return;
  const cur = document.createElement('div'), label = document.createElement('span');
  cur.className = 'cur'; label.className = 'cur__label'; cur.setAttribute('aria-hidden', 'true');
  cur.append(label); document.body.append(cur);
  document.documentElement.classList.add('has-cur');         // only now may CSS hide the native pointer

  const paint = () => { cur.style.transform = `translate3d(${x.x}px,${y.x}px,0)`; };
  const x = spring(paint, { k: 420, c: 36 }), y = spring(paint, { k: 420, c: 36 });   // about 80ms of lag, no more
  let on = false, px = 0, py = 0;
  const hide = () => { on = false; cur.classList.remove('is-on'); };
  const read = target => {
    const zone = target?.closest?.('[data-cursor]');
    if (!zone) return hide();
    if (!on || !mayMove()) { x.jump(px); y.jump(py); }                    // appear at the pointer
    else { x.to(px); y.to(py); }
    label.textContent = zone.dataset.cursor;
    cur.dataset.kind = zone.dataset.kind || '';
    on = true; cur.classList.add('is-on');
  };
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    px = e.clientX; py = e.clientY; read(e.target);
  }, { passive: true });
  addEventListener('scroll', () => read(document.elementFromPoint(px, py)), { passive: true });   // content moves under a still pointer
  addEventListener('pointerdown', () => cur.classList.add('is-down'));
  addEventListener('pointerup', () => cur.classList.remove('is-down'));
  document.documentElement.addEventListener('pointerleave', hide);
})();
</script>
```

- **Numbers:** 88px circle, scales in over `--dur-hover` with `--ease-pop`. Spring k420, c36, which trails by roughly 80ms and no more. Press scales to .86 in `--dur-press`.
- **Variations:** Set `data-kind` on the zone. **Tag:** a small label beside the native pointer, which stays visible, the safest choice. **Lens:** a 150px disc in `mix-blend-mode:difference`, bold and heavy. **Wire:** a square outlined box, mechanical.
- **Keyboard:** Nothing to do. The label is decoration, so the link's own text must already say what it does.
- **Touch:** Skipped entirely. `.has-cur` is never set, so nothing hides.
- **Fallback:** The native pointer stays until `.has-cur` is set. Reduced motion moves it with no lag, because `jump` replaces the spring.
- **Goes wrong:** Forgetting that content scrolls under a still pointer, which the `scroll` listener handles. Ignoring press, so clicking feels dead. Hiding the pointer on `*`, which removes the I-beam from text.

## Navigation and disclosure

### 10. Drag carousel

Native horizontal scrolling with scroll snap, plus mouse dragging added on top. Touch keeps the platform's own momentum, and wheel, trackpad and keyboard all work because it is a real scroller. A throw lands on a card in one continuous spring from the release velocity, so there is no decay-then-snap seam. It is wrong for content that everyone must see, which should stack.

```html
<style>
.rail{--gutter:24px}
.rail__view{overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding-inline:var(--gutter);overscroll-behavior-x:contain;scrollbar-width:none;cursor:grab}
.rail__view:focus-visible{outline-offset:-3px}
.rail__view.is-free{scroll-snap-type:none}
.rail__view.is-grabbing{cursor:grabbing;user-select:none}
.rail__view.is-grabbing a{pointer-events:none}
.rail__track{position:relative;display:flex;gap:16px;width:max-content;margin:0;padding:0 var(--gutter);list-style:none}
.rail__item{flex:none;width:clamp(230px,32vw,400px);scroll-snap-align:start;transform:skewX(calc(var(--skew,0)*1deg))}
.rail__item img{display:block;width:100%;height:auto;aspect-ratio:4/5;object-fit:cover;-webkit-user-drag:none}
.rail__nav [aria-disabled=true]{opacity:.32;cursor:default}
</style>
<section class="rail" aria-label="Selected work" data-k="120" data-c="24" data-throw=".28">
  <div class="rail__view" tabindex="0">
    <ul class="rail__track">
      <li class="rail__item"><a href="#a"><img src="art/1.svg" alt=""><span>Tideline</span></a></li>
      <li class="rail__item"><a href="#b"><img src="art/2.svg" alt=""><span>Northfold</span></a></li>
    </ul>
  </div>
  <div class="rail__nav">
    <button type="button" data-dir="-1" aria-label="Previous">&larr;</button>
    <button type="button" data-dir="1" aria-label="Next">&rarr;</button>
  </div>
</section>
<script>
document.querySelectorAll('.rail').forEach(rail => {
  const view = rail.querySelector('.rail__view'), track = view.firstElementChild, items = [...track.children];
  const [prev, next] = rail.querySelectorAll('[data-dir]');
  const { k = 120, c = 24, throw: toss = .28, one, skew } = rail.dataset;
  const limit = () => view.scrollWidth - view.clientWidth;
  const snaps = () => {
    const pad = parseFloat(getComputedStyle(view).scrollPaddingLeft) || 0, max = limit();
    return [...new Set(items.map(i => Math.max(0, Math.min(max, i.offsetLeft - pad))))];
  };
  const nearest = x => snaps().reduce((a, b) => (Math.abs(b - x) < Math.abs(a - x) ? b : a));
  const free = () => view.classList.contains('is-free');

  const draw = (x, v = 0) => {
    const inside = Math.max(0, Math.min(limit(), x));
    view.scrollLeft = inside;
    track.style.transform = x === inside ? '' : `translateX(${(inside - x) * .32}px)`;   // rubber band past the ends
    if (skew) track.style.setProperty('--skew', Math.max(-5, Math.min(5, v * -.003)).toFixed(2));
  };
  const pos = spring(draw, { k: +k, c: +c, done: () => view.classList.remove('is-free') });

  const settle = (x, v = 0) => {         // one curve from release to rest, so no decay-then-snap seam
    view.classList.add('is-free');
    if (mayMove()) pos.to(x, v); else { pos.jump(x); view.classList.remove('is-free'); }
  };

  let drag = null, justDragged = false;
  view.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;    // touch keeps native momentum
    const sx = free() ? pos.x : view.scrollLeft;
    if (free()) pos.jump(sx);                                   // catch a card mid-flight
    drag = { id: e.pointerId, px: e.clientX, sx, x: sx, moved: false, log: [] };
  });
  view.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.px;
    if (!drag.moved) {
      if (Math.abs(dx) < 6) return;                             // a click stays a click
      drag.moved = true; view.setPointerCapture(drag.id);
      view.classList.add('is-free', 'is-grabbing');
    }
    drag.x = drag.sx - dx;
    drag.log.push([e.timeStamp, drag.x]);
    while (drag.log.length > 2 && e.timeStamp - drag.log[0][0] > 90) drag.log.shift();
    const a = drag.log[0], b = drag.log.at(-1);
    draw(drag.x, b[0] > a[0] ? (b[1] - a[1]) / (b[0] - a[0]) * 1000 : 0);
  });
  const release = e => {
    if (!drag) return;
    const d = drag; drag = null;
    if (!d.moved) { if (free()) settle(nearest(d.x)); return; }
    view.classList.remove('is-grabbing');
    justDragged = true; setTimeout(() => { justDragged = false; });
    const a = d.log[0], b = d.log.at(-1);                       // a held pointer has no velocity, however it arrived
    const v = b[0] > a[0] && e.timeStamp - b[0] < 70 ? (b[1] - a[1]) / (b[0] - a[0]) * 1000 : 0;
    let land = nearest(d.x + v * toss);
    if (one) { const s = snaps(), i = s.indexOf(nearest(d.sx)); land = s[Math.max(0, Math.min(s.length - 1, i + Math.sign(d.x - d.sx)))]; }
    pos.jump(d.x);
    settle(land, v);
  };
  view.addEventListener('pointerup', release);
  view.addEventListener('pointercancel', release);
  view.addEventListener('click', e => { if (justDragged) { e.preventDefault(); e.stopPropagation(); } }, true);
  view.addEventListener('dragstart', e => e.preventDefault());

  const go = dir => {
    const s = snaps(), from = free() ? pos.target : view.scrollLeft, i = s.indexOf(nearest(from));
    if (!free()) pos.jump(view.scrollLeft);
    settle(s[Math.max(0, Math.min(s.length - 1, i + dir))]);
  };
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  view.addEventListener('keydown', e => {
    const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (dir) { e.preventDefault(); go(dir); }
  });
  const ends = () => {
    prev.setAttribute('aria-disabled', view.scrollLeft < 2);    // aria-disabled keeps keyboard focus on the button
    next.setAttribute('aria-disabled', view.scrollLeft > limit() - 2);
  };
  view.addEventListener('scroll', ends, { passive: true });
  addEventListener('resize', ends);
  ends();
});
</script>
```

- **Numbers:** 6px before a press becomes a drag. Velocity from the last 90ms. A pointer held still for 70ms before release throws nothing. Landing is `position + velocity * .28s`, snapped. Spring k120, c24 lands with no overshoot. Rubber band .32 past the ends.
- **Variations:** Set on `.rail`. **Heavy:** `data-k="42" data-c="13" data-throw=".6"`, carries two or three cards. **Snappy:** `data-k="520" data-c="46" data-throw=".08" data-one="1"`, exactly one card per throw. **Soft:** `data-k="150" data-c="11" data-throw=".32" data-skew="1"`, overshoots, and cards skew up to 5 degrees with speed.
- **Keyboard:** The rail takes focus. Left and Right move one card, and repeated presses stack from the current target. The buttons use `aria-disabled` rather than `disabled`, so focus is not dropped at the end.
- **Touch:** The script ignores non-mouse pointers, so the browser handles momentum and snap.
- **Fallback:** Without script it still scrolls and snaps. Reduced motion jumps straight to the card.
- **Goes wrong:** Leaving `scroll-snap-type` on during flight, which fights every frame, so `.is-free` removes it. Using `transform` for position, which breaks touch, wheel and find-in-page. A drag that also fires the link, which the capture-phase click handler stops.

### 11. Full-screen menu

A panel wipes over the page and the links rise out of masks one at a time. The menu is ordinary navigation in the document, and script promotes it to an overlay. Use it on marketing sites with few links. It is wrong for apps and for deep navigation. This is the one recipe that uses GSAP, because a single reversible timeline handles closing from any point. Set `data-wipe` on `.menu` to choose a personality.

```html
<style>
.bar{position:fixed;inset:0 0 auto;z-index:30;display:flex;justify-content:space-between;align-items:center;padding:12px 24px;color:#fff;mix-blend-mode:difference}
.burger{display:flex;align-items:center;gap:10px;min-height:44px;border:0;background:none;color:inherit;cursor:pointer}
html:not(.js) .burger{display:none}
.burger__t{min-width:3.2em;text-align:right}
.burger__i{position:relative;width:26px;height:10px}
.burger__i::before,.burger__i::after{content:"";position:absolute;left:0;right:0;height:1.5px;background:currentColor;transition:transform var(--dur-state) var(--ease-io)}
.burger__i::before{top:0}
.burger__i::after{bottom:0}
[aria-expanded=true] .burger__i::before{transform:translateY(4.25px) rotate(45deg)}
[aria-expanded=true] .burger__i::after{transform:translateY(-4.25px) rotate(-45deg)}
.menu{padding:88px 24px 24px;background:var(--ink);color:var(--paper)}
.js .menu{position:fixed;inset:0;z-index:20;display:flex;flex-direction:column;justify-content:space-between;overflow-y:auto;visibility:hidden}
.js .menu.is-open{visibility:visible}
.menu__list{margin:0;padding:0;list-style:none}
.menu__link{display:block;overflow:hidden;color:inherit;text-decoration:none;font-size:min(13.5vh,15vw);line-height:1.04;letter-spacing:-.03em}
.menu__link>span{display:block;transition:translate var(--dur-state) var(--ease-out)}
@media (hover:hover){.menu__link:hover>span{translate:.18em 0}}
.menu__link:focus-visible{outline-offset:-4px}
html.is-locked{overflow:hidden;scrollbar-gutter:stable}
@media (prefers-reduced-motion:reduce){.burger__i::before,.burger__i::after,.menu__link>span{transition:none}}
</style>
<header class="bar">
  <a class="bar__logo" href="#home">Halden</a>
  <button class="burger" type="button" aria-expanded="false" aria-controls="menu">
    <span class="burger__t">Menu</span><span class="burger__i" aria-hidden="true"></span>
  </button>
</header>
<nav class="menu" id="menu" aria-label="Main">
  <ul class="menu__list">
    <li><a class="menu__link" href="#work"><span>Work</span></a></li>
    <li><a class="menu__link" href="#studio"><span>Studio</span></a></li>
  </ul>
  <p class="menu__meta">hello@halden.example</p>
</nav>
<div id="page"><main class="body">
</main></div>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js" defer></script>
<script>
(() => {
  const btn = document.querySelector('.burger'), menu = document.getElementById('menu'), page = document.getElementById('page');
  const label = btn.querySelector('.burger__t'), lines = menu.querySelectorAll('.menu__link>span'), meta = menu.querySelector('.menu__meta');
  const hide = () => menu.classList.remove('is-open');
  const wipes = {
    curtain: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)', time: .8, ease: 'expo.inOut', at: .3, rise: .9, gap: .055 },
    lift: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)', time: 1.3, ease: 'power4.inOut', at: .7, rise: 1.3, gap: .1 },
    iris: { from: 'circle(0% at 100% 0%)', to: 'circle(150% at 100% 0%)', time: .9, ease: 'power2.inOut', at: .3, rise: .8, gap: .07, pop: 'back.out(1.8)' },
    shutter: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)', time: .24, ease: 'power4.out', at: .05, rise: .3, gap: .02 },
  };
  const w = wipes[menu.dataset.wipe] || wipes.curtain;
  let tl = null;
  const motion = () => {                                       // built on first use, so a slow CDN never leaves a dead button
    if (tl || !window.gsap || matchMedia('(prefers-reduced-motion:reduce)').matches) return tl;
    tl = gsap.timeline({ paused: true, onReverseComplete: hide });
    tl.fromTo(menu, { clipPath: w.from }, { clipPath: w.to, duration: w.time, ease: w.ease });
    tl.fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: w.rise, stagger: w.gap, ease: w.pop || 'expo.out' }, w.at);
    tl.fromTo(meta, { autoAlpha: 0 }, { autoAlpha: 1, duration: .4, ease: 'none' }, w.at + w.gap * lines.length);
    return tl;
  };
  let open = false;
  const set = next => {
    open = next;
    btn.setAttribute('aria-expanded', next);
    label.textContent = next ? 'Close' : 'Menu';
    page.inert = next;
    document.documentElement.classList.toggle('is-locked', next);
    if (next) { menu.classList.add('is-open'); motion()?.timeScale(1).play(); }
    else if (tl) tl.timeScale(1.7).reverse();                 // closing is always faster than opening
    else hide();
  };
  btn.addEventListener('click', () => set(!open));
  addEventListener('keydown', e => { if (e.key === 'Escape' && open) { set(false); btn.focus(); } });
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
})();
</script>
```

- **Numbers:** Curtain 800ms `expo.inOut`. Links rise 110% over 900ms on `expo.out`, 55ms apart, starting at 300ms. Closing plays the same timeline at 1.7 times speed, because leaving should always be faster.
- **Variations:** **Curtain** is the default. **Lift:** 1.3s `power4.inOut`, rises from the bottom with a 100ms stagger, heavy and ceremonial. **Shutter:** 240ms `power4.out`, slides from the side with a 20ms stagger, snappy. **Iris:** 900ms `power2.inOut`, a circle from the corner by the toggle, and the links overshoot on `back.out(1.8)`, soft.
- **Keyboard:** Focus stays on the toggle, which stays above the panel, and Tab goes straight into the links. `#page` is `inert`, so Tab cannot reach the content behind. Escape closes and returns focus to the toggle.
- **Touch:** The same code. Type uses `min(13.5vh,15vw)`, so four links fit a short phone, and the panel scrolls if they do not.
- **Fallback:** Without script the links are in the document and the dead toggle is hidden. If the CDN fails or hangs, the timeline is never built and the menu opens instantly, the same as under reduced motion. Build the timeline on first use, not at load, for this reason.
- **Goes wrong:** Creating a new tween on each click instead of reversing one timeline, so a fast double-click tears it. Leaving the page focusable behind the menu. A blocking GSAP tag above the menu's own script, so the toggle is dead until the CDN answers.

### 12. Accordion

Native `details` with grid rows: real height, no script and no measuring. `0fr` to `1fr` animates to the content's true height at any width, and browser find-in-page opens the right panel. `name` makes the group close one when another opens. Use it for long answers. It is wrong for content people compare, because one is always hidden.

```html
<style>
.acc__item summary{display:flex;justify-content:space-between;align-items:center;gap:24px;min-height:68px;cursor:pointer;list-style:none}
.acc__item summary::-webkit-details-marker{display:none}
.acc__item summary:focus-visible{outline-offset:-2px}
.acc__mark{position:relative;flex:none;width:16px;height:16px;transition:rotate var(--dur-state) var(--ease-out)}
.acc__mark::before,.acc__mark::after{content:"";position:absolute;background:currentColor;transition:scale var(--dur-state) var(--ease-out)}
.acc__mark::before{left:0;right:0;top:calc(50% - .75px);height:1.5px}
.acc__mark::after{top:0;bottom:0;left:calc(50% - .75px);width:1.5px}
[open] .acc__mark{rotate:180deg}
[open] .acc__mark::after{scale:1 0}
.acc__item::details-content{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows calc(var(--dur-state)*.7) var(--ease-out),opacity var(--dur-hover) linear,content-visibility calc(var(--dur-state)*.7) allow-discrete}
.acc__item[open]::details-content{grid-template-rows:1fr;opacity:1;transition:grid-template-rows var(--dur-state) var(--ease-out),opacity var(--dur-hover) linear calc(var(--dur-hover)*.5),content-visibility var(--dur-state) allow-discrete}
.acc__body{overflow:hidden;min-height:0}
.acc__body>*{margin:0;padding-bottom:24px;translate:0 10px;transition:translate var(--dur-state) var(--ease-out)}
.acc__item[open] .acc__body>*{translate:0 0;transition-delay:calc(var(--dur-hover)*.5)}
@media (prefers-reduced-motion:reduce){
  .acc__item::details-content,.acc__body>*,.acc__mark,.acc__mark::after{transition-duration:1ms!important;transition-delay:0s!important}
  .acc__body>*{translate:none}
}
/* variations */
.acc--ledger{--dur-state:900ms;--ease-out:cubic-bezier(.76,0,.24,1)}
.acc--ledger .acc__mark{rotate:none!important}
.acc--tick{--dur-state:180ms;--dur-hover:90ms;--ease-out:cubic-bezier(.2,0,0,1)}
.acc--tick .acc__body>*{translate:none}
.acc--bounce{--dur-state:560ms;--ease-out:cubic-bezier(.22,1,.36,1)}
.acc--bounce .acc__body>*{transition:translate 620ms var(--ease-pop)}
.acc--bounce .acc__mark{transition:rotate 620ms var(--ease-pop)}
</style>
<div class="acc">
  <details class="acc__item" name="faq" open>
    <summary>How long does a project take?<span class="acc__mark" aria-hidden="true"></span></summary>
    <div class="acc__body"><p>Most identity projects run eight to twelve weeks, including two rounds of revisions and a handover session with your team.</p></div>
  </details>
  <details class="acc__item" name="faq">
    <summary>Do you work with small teams?<span class="acc__mark" aria-hidden="true"></span></summary>
    <div class="acc__body"><p>Yes. Half of our clients have fewer than twenty people, and we size the work to match rather than selling a fixed package.</p></div>
  </details>
</div>
```

- **Numbers:** Opens in 460ms and closes in 70% of that. Contents fade in 240ms after a 120ms delay and rise 10px, so they arrive after the space exists. The fade sits on `::details-content`, so the text itself is never hidden. The mark turns 180 degrees while its vertical bar scales to 0.
- **Variations:** **Ledger:** 900ms, soft at both ends, no rotation, for long reading. **Tick:** 180ms, no text drift, for documentation. **Bounce:** overshoot on the text and mark. Grid rows cannot overshoot, so the spring goes on the contents.
- **Keyboard:** `summary` takes Enter and Space natively. Keep the focus ring inside the row with a negative offset, so `overflow` cannot clip it.
- **Touch:** The same. Keep the summary at least 44px tall. This one is 68px.
- **Fallback:** No script is involved. Browsers without `::details-content` open instantly, which is correct. Reduced motion takes 1ms.
- **Goes wrong:** Animating `max-height`, which guesses a number and gets the timing wrong for every panel. Forgetting `min-height:0` and `overflow:hidden` on the inner element, so the row cannot collapse. Omitting `content-visibility` from the transition, so closing snaps shut.

### 13. Tabs

The sliding pill is a second, inverted copy of the labels, clipped to the active tab. Because only `clip-path` animates, the text flips colour exactly at the pill's edge, and nothing reflows. Use it for sibling views of one thing. It is wrong for steps in a sequence, or for more labels than fit, which should be a select on small screens.

```html
<style>
.tabs__scroll{max-width:100%;width:fit-content;overflow-x:auto;scrollbar-width:none;border-radius:999px;box-shadow:inset 0 0 0 1px var(--rule)}
.tabs__list,.tabs__pill{display:flex;width:max-content}
.tabs__list{position:relative}
.tabs__tab{flex:none;padding:12px 22px;border:0;border-radius:999px;background:none;color:var(--ink);font:inherit;line-height:1.25;cursor:pointer}
.tabs__tab:focus-visible{outline-offset:-5px}
.tabs__pill{position:absolute;inset:0;background:var(--ink);pointer-events:none;transition:clip-path var(--dur-state) var(--ease-pop)}
.tabs__pill .tabs__tab{color:var(--paper)}
.js .tabs__panels{display:grid}
.js .tabs__panel{grid-area:1/1}                       /* stacked, so the height never jumps */
.js .tabs__panel[hidden]{display:block;visibility:hidden}
html:not(.js) .tabs__scroll{display:none}
@media (prefers-reduced-motion:reduce){.tabs__pill{transition:none}}
/* variations */
.tabs--rule .tabs__scroll{border-radius:0;box-shadow:inset 0 -1px 0 var(--rule)}
.tabs--rule .tabs__tab{border-radius:0}
.tabs--rule .tabs__pill{--dur-state:720ms;--ease-pop:cubic-bezier(.76,0,.24,1);background:none;box-shadow:inset 0 -3px 0 var(--ink)}
.tabs--rule .tabs__pill .tabs__tab{color:var(--ink)}
.tabs--block .tabs__scroll{border-radius:2px}
.tabs--block .tabs__tab{border-radius:0;padding:10px 16px}
.tabs--block .tabs__pill{--dur-state:150ms;--ease-pop:cubic-bezier(.2,0,0,1)}
.tabs--soft .tabs__pill{--dur-state:620ms;--ease-pop:linear(0,.174,.521,.849,1.065,1.155,1.153,1.104,1.046,1.002,.979,.973,.979,.988,.997,1.002,1.004,1.004,1);background:var(--accent)}
.tabs--soft .tabs__pill .tabs__tab{color:#fff}
</style>
<div class="tabs" data-radius="999">
  <div class="tabs__scroll">
    <div class="tabs__list" role="tablist" aria-label="Plans">
      <button class="tabs__tab" role="tab" id="t1" aria-controls="p1" type="button">Studio</button>
      <button class="tabs__tab" role="tab" id="t2" aria-controls="p2" type="button">Partnership</button>
    </div>
  </div>
  <div class="tabs__panels">
    <section class="tabs__panel" role="tabpanel" id="p1" aria-labelledby="t1" tabindex="0"><h3>Studio</h3><p>A fixed scope for one launch, with a named lead and weekly reviews.</p></section>
    <section class="tabs__panel" role="tabpanel" id="p2" aria-labelledby="t2" tabindex="0"><h3>Partnership</h3><p>A shared team across a whole product, planned quarter by quarter, with room for research and the slow work of naming things well.</p></section>
  </div>
</div>
<script>
document.querySelectorAll('.tabs').forEach(root => {
  const list = root.querySelector('[role=tablist]'), tabs = [...list.children];
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
  const radius = root.dataset.radius ?? 999;

  const pill = document.createElement('div');            // the inverted copy of the labels
  pill.className = 'tabs__pill'; pill.setAttribute('aria-hidden', 'true');
  tabs.forEach(t => { const s = document.createElement('span'); s.className = t.className; s.textContent = t.textContent; pill.append(s); });
  list.append(pill);

  let now = -1;
  const place = () => {
    const t = tabs[now], right = pill.offsetWidth - t.offsetLeft - t.offsetWidth;
    pill.style.clipPath = `inset(0 ${right}px 0 ${t.offsetLeft}px round ${radius}px)`;
  };
  const select = i => {
    const from = now; now = i;
    tabs.forEach((t, n) => { t.setAttribute('aria-selected', n === i); t.tabIndex = n === i ? 0 : -1; panels[n].hidden = n !== i; });
    place();
    tabs[i].scrollIntoView({ block: 'nearest', inline: 'nearest' });
    if (from < 0 || from === i || !mayMove()) return;
    panels[i].animate({ opacity: [0, 1], translate: [`${Math.sign(i - from) * 18}px 0`, '0 0'] },
      { duration: ms('--dur-state'), easing: ease('--ease-out') });
  };
  tabs.forEach((t, i) => t.addEventListener('click', () => select(i)));
  list.addEventListener('keydown', e => {
    const i = tabs.indexOf(document.activeElement), n = tabs.length;
    const to = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
    if (i < 0 || to === undefined) return;
    e.preventDefault(); select(to); tabs[to].focus();
  });
  pill.style.transition = 'none'; select(0); pill.offsetWidth; pill.style.transition = '';   // no slide on load
  new ResizeObserver(place).observe(list);
  document.fonts?.ready.then(place);                      // font swaps change tab widths
});
</script>
```

- **Numbers:** Pill 460ms on `--ease-pop`. The incoming panel fades and slides 18px from the direction of travel over 460ms. The outgoing panel leaves at once, because two panels fading together make mud. Panels share one grid cell, so the height never jumps.
- **Variations:** **Rule:** an underline crossing slowly over 720ms, soft at both ends, `data-radius="0"`. **Block:** 150ms, square, for code samples. **Soft:** accent colour, 620ms with 16% overshoot.
- **Keyboard:** Roving tabindex. Arrows move and activate with wrap-around, Home and End jump, and Tab goes into the panel. Keep `tabindex="0"` on panels.
- **Touch:** The list scrolls sideways if it does not fit, and `scrollIntoView` keeps the active tab on screen.
- **Fallback:** Without script all panels are visible and the dead tabs are hidden. Reduced motion moves the pill instantly, and panels swap with no slide.
- **Goes wrong:** Animating `left` and `width`, which reflows and leaves the label a single colour. Measuring once, so the pill sits wrong after a resize or a font swap, which `ResizeObserver` and `fonts.ready` fix. A slide on page load, which the `transition:'none'` line prevents.

## Input and commerce

### 14. Form states

Errors wait until someone has finished. Fixes are rewarded the moment they happen. That timing is the whole recipe, and it matters more than any animation in it. Every form needs this. Do not use a shake on a field someone has not touched, or animate anything that delays typing.

```html
<style>
.form{display:grid;gap:18px;max-width:480px}
.field{position:relative;display:grid;grid-template-columns:minmax(0,1fr);padding-top:22px}
.field input{grid-area:1/1;display:block;width:100%;padding:8px 0 10px;border:0;border-bottom:1px solid var(--muted);border-radius:0;background:none;color:inherit;font:inherit;font-size:max(16px,1em)}
.field input:focus-visible{outline:0;animation:none}
.field__rule{grid-area:1/1;align-self:end;height:2px;background:var(--ink);scale:0 1;transform-origin:0 50%;transition:scale var(--dur-state) var(--ease-out),background-color var(--dur-hover) linear}
.field input:focus ~ .field__rule{scale:1 1}
.field label{position:absolute;left:0;top:30px;color:var(--muted);transform-origin:0 0;pointer-events:none;transition:transform var(--dur-hover) var(--ease-out),color var(--dur-hover) linear}
.field input:focus ~ label,.field input:not(:placeholder-shown) ~ label{transform:translateY(-28px) scale(.78)}
.field input:focus ~ label{color:var(--ink)}
.field__tick{position:absolute;right:0;top:30px;width:18px;height:18px;fill:none;stroke:#0f6b4f;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.field__tick path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset var(--dur-state) var(--ease-out)}
.field.is-good .field__tick path{stroke-dashoffset:0}
.field__err{grid-area:2/1;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--dur-hover) var(--ease-out)}
.field__err p{overflow:hidden;min-height:0;margin:0;color:#a3210f;font-size:15px}
.field.is-bad .field__err{grid-template-rows:1fr}
.field.is-bad .field__rule{scale:1 1;background:#a3210f}
.field.is-bad label{color:#a3210f}

.send{display:inline-grid;justify-self:start;align-items:center;justify-items:center;min-height:52px;padding:0 30px;border:0;border-radius:999px;background:var(--ink);color:var(--paper);cursor:pointer;touch-action:manipulation;transition:background-color var(--dur-hover) linear,scale var(--dur-press) linear}
.send:active{scale:.97}
.send>*{grid-area:1/1;transition:opacity var(--dur-hover) linear,translate var(--dur-state) var(--ease-out)}
.send__spin{width:20px;height:20px;border:2px solid #fff4;border-top-color:currentColor;border-radius:50%;opacity:0;animation:send-spin .8s linear infinite paused}
.send__tick{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.send__tick path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset var(--dur-state) var(--ease-out)}
@keyframes send-spin{to{rotate:360deg}}
[data-state=busy] .send__t,[data-state=done] .send__t{opacity:0;translate:0 -8px}
[data-state=busy] .send__spin{opacity:1;animation-play-state:running}
[data-state=done] .send{background:#0f6b4f}
[data-state=done] .send__tick path{stroke-dashoffset:0}
.form__status{min-height:1.5em;margin:0}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
@media (prefers-reduced-motion:reduce){
  .field__rule,.field label,.field__err,.send>*,.send__tick path,.field__tick path{transition-duration:1ms}
  .send__spin{animation-duration:2.4s}
}
/* variations */
.form--box .field input{grid-area:auto;padding:12px;border:1px solid var(--muted);border-radius:2px}
.form--box .field__rule{display:none}
.form--box .field input:focus{outline:2px solid var(--ink);outline-offset:0}
.form--box .field label{position:static;display:block;margin-bottom:6px;transition:none;transform:none!important}
.form--box .field{display:grid;padding-top:0}
.form--box .field label{order:-1}
.form--box .field__err{grid-area:auto}
.form--box .field__tick{top:38px;right:12px}
.form--pop{--ease-out:var(--ease-pop);--dur-hover:300ms}
</style>
<form class="form" action="/contact" method="post">
  <div class="field">
    <input id="f-name" name="name" placeholder=" " required autocomplete="name" aria-describedby="f-name-e" data-err="Tell us what to call you.">
    <label for="f-name">Your name</label>
    <span class="field__rule"></span>
    <svg class="field__tick" viewBox="0 0 24 24" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg>
    <div class="field__err"><p id="f-name-e"></p></div>
  </div>
  <button class="send" type="submit">
    <span class="send__t">Send message</span>
    <span class="send__spin" aria-hidden="true"></span>
    <svg class="send__tick" viewBox="0 0 24 24" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg>
  </button>
  <p class="form__status" role="status"></p>
</form>
<script>
document.querySelectorAll('.form').forEach(form => {
  const fields = [...form.querySelectorAll('.field')], status = form.querySelector('.form__status');
  form.noValidate = true;                                   // JS takes over only once it is running
  const check = (f, loud) => {
    const input = f.querySelector('input'), ok = input.validity.valid;
    f.classList.toggle('is-bad', !ok);
    f.classList.toggle('is-good', ok && input.value !== '');
    input.setAttribute('aria-invalid', !ok);
    f.querySelector('.field__err p').textContent = ok ? '' : input.dataset.err;
    if (!ok && loud && mayMove()) f.animate(
      { transform: ['none', 'translateX(-6px)', 'translateX(5px)', 'translateX(-3px)', 'translateX(2px)', 'none'] },
      { duration: 340, easing: 'cubic-bezier(.36,.07,.19,.97)' });
    return ok;
  };
  fields.forEach(f => {
    const input = f.querySelector('input');
    input.addEventListener('blur', () => { if (input.value) check(f); });     // punish late
    input.addEventListener('input', () => {                                   // reward early
      if (f.classList.contains('is-bad') || input.validity.valid) check(f);
      if (!form.querySelector('.is-bad')) status.textContent = '';            // a fixed form stops complaining
    });
  });
  const send = data => new Promise(done => setTimeout(done, 900, data));      // swap for fetch(form.action, ...)
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form.dataset.state) return;                         // ignore double submits
    const bad = fields.filter(f => !check(f, true));
    if (bad.length) {
      status.textContent = `${bad.length} field${bad.length > 1 ? 's need' : ' needs'} attention.`;
      bad[0].querySelector('input').focus();
      return;
    }
    form.dataset.state = 'busy'; status.textContent = 'Sending.';
    try {
      await send(new FormData(form));
      form.dataset.state = 'done'; status.textContent = 'Sent. We will reply within two days.';
    } catch {
      delete form.dataset.state; status.textContent = 'That did not send. Please try again.';
    }
  });
});
</script>
```

- **Numbers:** Focus rule scales from the left in 460ms. Label lifts 28px and scales to .78 in 240ms. Tick draws in 460ms. Error height opens in 240ms. Shake is 340ms with 6px, 5px, 3px, 2px of decay, only on submit. Spinner turns once per 800ms.
- **Variations:** **Box:** `.form--box`, bordered, static label, for tools. **Pop:** `.form--pop`, overshoot on label and tick, for warm brands. **Heavy:** `data-feel="heavy"` on the form, a slow rule and a long tick. To go quieter still, remove the shake and keep the message.
- **Keyboard:** Invalid submit moves focus to the first problem. `aria-invalid`, `aria-describedby` and the `role="status"` line carry it to screen readers. Enter submits as normal.
- **Touch:** Input text stays at 16px or larger. Use real `type` and `autocomplete` values, so the right keyboard and autofill appear.
- **Fallback:** Without script `noValidate` is never set, so the browser validates and the form posts to its `action`. Reduced motion drops the shake and keeps colour and message. The spinner slows to 2.4s rather than stopping, because a frozen spinner reads as a hang.
- **Goes wrong:** Showing an error while someone is still typing. Colour as the only signal, so here a message and `aria-invalid` always go with it. A success state with no words. Allowing a double submit, which the `dataset.state` guard prevents.

### 15. Add to cart

The product flies to the cart on an arc, the number changes when it lands, and the screen reader hears it at once. The arc comes from giving x and y separate easing curves. The count waits for the landing, because a number that changes before the object arrives breaks the cause and effect. Use it where someone adds several items. Skip it for a single-item checkout.

```html
<style>
.cart{position:relative;display:inline-grid;place-items:center;width:48px;height:48px;border-radius:50%;background:var(--paper);box-shadow:inset 0 0 0 1px var(--rule)}
.cart__n{position:absolute;right:-3px;top:-3px;display:grid;place-items:center;min-width:21px;height:21px;padding:0 5px;border-radius:99px;background:var(--accent);color:#fff;font-size:12px;font-variant-numeric:tabular-nums}
.prod__img{display:block;width:100%;height:auto;aspect-ratio:4/5;object-fit:cover}
.prod__add{display:inline-grid;min-height:46px;padding:0 22px;border:1px solid var(--ink);border-radius:999px;background:none;cursor:pointer;touch-action:manipulation;transition:background-color var(--dur-hover) linear,color var(--dur-hover) linear}
.prod__add>span{grid-area:1/1;align-self:center;transition:opacity var(--dur-hover) linear,translate var(--dur-state) var(--ease-out)}
.prod__add>span+span{opacity:0;translate:0 8px}
.prod__add.is-added{background:var(--ink);color:var(--paper)}
.prod__add.is-added>span:first-child{opacity:0;translate:0 -8px}
.prod__add.is-added>span+span{opacity:1;translate:0 0}
.ghost{position:fixed;z-index:40;margin:0;object-fit:cover;border-radius:8px;pointer-events:none;will-change:transform}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
@media (prefers-reduced-motion:reduce){.prod__add>span{transition-duration:1ms;translate:none!important}}
</style>
<div class="shop"><a class="cart" href="#cart" aria-label="Cart">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l1.2 12H4.8zM9 8V6a3 3 0 0 1 6 0v2"/></svg>
  <span class="cart__n">0</span></a></div>
<p class="sr" id="cart-live" role="status"></p>
<form class="prod" action="/cart/add" method="post" data-life="760">
  <img class="prod__img" src="art/3.svg" alt="Ember mug">
  <h2>Ember mug</h2><p>$38</p>
  <input type="hidden" name="sku" value="ember-mug">
  <button class="prod__add" type="submit"><span>Add to cart</span><span aria-hidden="true">Added</span></button>
</form>
<script>
(() => {
  const cart = document.querySelector('.cart'), badge = cart.querySelector('.cart__n'), live = document.getElementById('cart-live');
  let count = 0, landed = 0;
  const styles = {
    base:  { time: 760, x: 'cubic-bezier(.5,0,.9,.5)',  y: 'cubic-bezier(.1,.6,.3,1)', end: .1 },
    heavy: { time: 1100, x: 'cubic-bezier(.6,0,.3,1)',  y: 'cubic-bezier(.6,0,.3,1)', end: .1 },
    dot:   { time: 340, x: 'linear',                    y: 'linear', end: .1, dot: true },
    lob:   { time: 820, x: 'linear',                    y: 'cubic-bezier(.3,1.5,.6,1)', end: .14 },
  };
  const land = () => {
    badge.textContent = ++landed;
    badge.getAnimations().forEach(a => a.cancel());
    badge.animate({ scale: [1, 1.55, .9, 1.06, 1] }, { duration: 460, easing: 'ease-out' });
    cart.animate({ translate: ['0 0', '0 3px', '0 0'] }, { duration: 240, easing: 'ease-out' });
  };
  const fly = (from, s) => {
    const a = from.getBoundingClientRect(), b = cart.getBoundingClientRect();
    const g = from.cloneNode(); g.alt = ''; g.className = 'ghost';
    const size = s.dot ? 18 : a.width;
    g.style.cssText = `left:${a.left + (a.width - size) / 2}px;top:${a.top + (a.height - (s.dot ? 18 : a.height)) / 2}px;width:${size}px;height:${s.dot ? 18 : a.height}px;${s.dot ? 'border-radius:50%' : ''}`;
    document.body.append(g);
    const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
    const opt = (easing, composite) => ({ duration: s.time, easing, fill: 'both', composite });
    g.animate({ transform: ['translateX(0)', `translateX(${dx}px)`] }, opt(s.x, 'replace'));   // x and y get separate curves
    g.animate({ transform: ['translateY(0)', `translateY(${dy}px)`] }, opt(s.y, 'add'));       // which is what makes the arc
    const last = g.animate({ transform: ['scale(1)', `scale(${s.dot ? 1 : s.end})`] }, opt('cubic-bezier(.5,0,.8,.5)', 'add'));
    last.finished.then(() => { g.remove(); land(); });
  };
  document.querySelectorAll('.prod').forEach(form => {
    const btn = form.querySelector('.prod__add'), img = form.querySelector('.prod__img');
    let timer;
    form.addEventListener('submit', e => {
      e.preventDefault();                                  // post with fetch here; without JS the form still posts
      count++;
      live.textContent = `${img.alt} added. ${count} item${count > 1 ? 's' : ''} in cart.`;
      btn.classList.add('is-added');
      clearTimeout(timer); timer = setTimeout(() => btn.classList.remove('is-added'), 1600);
      if (mayMove()) fly(img, styles[form.dataset.style] || styles.base);
      else { landed = count; badge.textContent = count; }
    });
  });
})();
</script>
```

- **Numbers:** 760ms. X eases in with `cubic-bezier(.5,0,.9,.5)`, Y eases out with `cubic-bezier(.1,.6,.3,1)`. Scale ends at .1. Badge pops through 1.55, .9, 1.06, 1 over 460ms, and the cart dips 3px in 240ms. The button says Added for 1600ms.
- **Variations:** Set `data-style` on the form. **Heavy:** 1100ms, both axes on one curve, a straight, considered glide. **Dot:** 340ms, linear, a small dot instead of the image, for shops where people add quickly. **Lob:** 820ms, overshooting Y, so it rises before it drops.
- **Keyboard:** Enter submits, and focus stays on the button, because the ghost is `pointer-events:none` and outside the tab order.
- **Touch:** The same. Keep the cart `position:fixed` or the ghost has no visible landing.
- **Fallback:** Without script it is a real form post. Reduced motion skips the flight and updates the count at once. The live region runs in every case.
- **Goes wrong:** Animating `left` and `top`, which reflows. A flat straight line, which reads as a slide. Updating the count from the click, so rapid adds show out of step. `landed` and `count` are separate for that reason.

### 16. Toggles and checkboxes

Real inputs, restyled, so keyboard, forms, labels and screen readers work with no script. The thumb stretches toward its destination while pressed, and the check draws after the box fills. That order gives a tiny two-beat rhythm. Use a switch for settings that apply at once, and a checkbox for choices that apply on submit.

```html
<style>
.sw,.ck{position:relative;display:inline-flex;align-items:center;gap:12px;min-height:44px;cursor:pointer;-webkit-tap-highlight-color:transparent}
.sw input{--w:52px;--h:30px;--gap:3px;appearance:none;position:relative;flex:none;width:var(--w);height:var(--h);margin:0;border-radius:999px;background:var(--off);cursor:pointer;transition:background-color var(--dur-hover) linear}
.sw input::before{content:"";position:absolute;left:var(--gap);top:var(--gap);width:calc(var(--h) - var(--gap)*2);aspect-ratio:1;border-radius:50%;background:#fff;box-shadow:0 1px 3px #0005;transform-origin:0 50%;transition:translate var(--dur-state) var(--ease-pop),scale var(--dur-hover) var(--ease-out)}
.sw input:checked{background:var(--on)}
.sw input:checked::before{translate:calc(var(--w) - var(--h)) 0;transform-origin:100% 50%}
.sw input:active::before{scale:1.24 .92}

.ck{--s:24px}
.ck input{appearance:none;flex:none;width:var(--s);height:var(--s);margin:0;border:1.5px solid var(--ink);border-radius:7px;cursor:pointer;background:radial-gradient(circle,var(--on) 69%,#0000 71%) center/0 0 no-repeat;transition:background-size var(--dur-hover) var(--ease-out),scale var(--dur-press) linear}
.ck input:checked{background-size:150% 150%}
.ck input:active{scale:.9}
.ck svg{position:absolute;left:calc((var(--s) - 18px)/2);top:50%;width:18px;height:18px;margin-top:-9px;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;pointer-events:none}
.ck path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset calc(var(--dur-hover)*.6) linear}
.ck input:checked + svg path{stroke-dashoffset:0;transition:stroke-dashoffset calc(var(--dur-state)*.6) var(--ease-out) calc(var(--dur-hover)*.3)}
@media (max-width:600px){.sw input{--w:60px;--h:34px}.ck{--s:32px}}   /* thumbs get a bigger control, not only a bigger label */
@media (prefers-reduced-motion:reduce){
  .sw input,.sw input::before,.ck input,.ck path,.ck input:checked + svg path{transition-duration:1ms;transition-delay:0s}
  .sw input:active::before,.ck input:active{scale:none}
}
/* variations */
.sw--vault input{--w:64px;--h:32px;--dur-state:820ms;--ease-pop:cubic-bezier(.76,0,.24,1)}
.sw--vault input::before{background:var(--paper);box-shadow:0 2px 0 #0005}
.sw--vault input:active::before{scale:none}
.sw--rocker input{--w:44px;--h:24px;--gap:2px;--dur-state:90ms;--ease-pop:steps(3,end);border-radius:3px}
.sw--rocker input::before{border-radius:2px;box-shadow:none}
.sw--rocker input:active::before{scale:none}
.sw--blob input{--ease-pop:linear(0,.174,.521,.849,1.065,1.155,1.153,1.104,1.046,1.002,.979,.973,.979,.988,.997,1.002,1.004,1.004,1);--dur-state:620ms;--on:var(--accent)}
.sw--blob input:active::before{scale:1.42 .84}
.ck--square input{border-radius:2px}
.ck--square path{transition-duration:60ms}
.ck--round input{border-radius:50%;--dur-hover:320ms;--on:var(--accent)}
</style>
<label class="sw"><input type="checkbox" role="switch" checked><span>Email me new work</span></label>
<label class="ck"><input type="checkbox"><svg viewBox="0 0 24 24" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg><span>Send me a copy</span></label>
```

- **Numbers:** Track 52 by 30, gap 3px. Thumb travels in 460ms on `--ease-pop`. Press stretches it to 1.24 by .92, anchored on the side it is leaving. Box fill 240ms. Tick 276ms, delayed 72ms.
- **Variations:** **Vault:** 64 by 32, 820ms, soft at both ends. **Rocker:** 44 by 24, 90ms in `steps(3,end)`, square, mechanical. **Blob:** accent colour, 16% overshoot, a stronger stretch. For checkboxes, **square** draws in 60ms and **round** is a soft circle.
- **Keyboard:** Space toggles natively, and the ring comes from the foundation. Do not rebuild these from `div`s.
- **Touch:** The `label` gives a 44px target, controls grow under 600px wide (60 by 34, and 32px boxes), and the stretch appears on press, the only time a thumb can see it.
- **Fallback:** No script is involved. Without `linear()` the variable fails and the thumb moves with no transition, which is still correct. Reduced motion takes 1ms and removes the stretch.
- **Goes wrong:** A `div` with a click handler, which has no keyboard, no form value and no role. Colour as the only difference between on and off, which the thumb's position avoids. Fading the tick in instead of drawing it.

## Prove it

A screenshot cannot show a hover. Test these with real input: move a pointer, press, type and tab, then read the result. Check each recipe on a touch viewport, under `prefers-reduced-motion`, and with script disabled. Check that a resting element has no leftover inline transform, and that a timing test waits for a condition, not a fixed delay, because busy machines drop frames.
