# WebGL, canvas and SVG filters

Most sites you build have no photography, and the first answer is real content: product UI, type, information. This chapter is the showy alternative, for a brief that wants it: how to generate the imagery yourself, from a shader, a canvas or an SVG filter, so that the picture carries the brand instead of a stock gradient. Every recipe below ran in Chrome and was inspected on a contact sheet. Each takes its colours from CSS variables, so it can match any brand.

Contents: [Choosing](#choosing-a-recipe) · [Contract](#the-contract-for-every-canvas) · [Scaffold](#shared-scaffold) · [1 Field](#1-domain-warped-field) · [2 Hero object](#2-lit-hero-object-in-threejs) · [3 Hover distortion](#3-text-and-image-distortion-on-hover) · [4 Dither](#4-dither-and-halftone) · [5 Particles](#5-particles-forming-a-wordmark) · [6 Flow field](#6-canvas-flow-field) · [7 Goo](#7-goo) · [8 SVG filters](#8-svg-turbulence-and-displacement) · [9 Ripple](#9-ripple-pool) · [GSAP and mixing libraries](#wiring-uniforms-to-gsap-and-mixing-libraries) · [Proving it renders](#proving-it-renders)

## Choosing a recipe

Start from what the brand is made of, not from the effect. Honey wants liquid, rivers want streamlines, a tide table wants the moon, a print shop wants a rough edge. An effect that has no reason to be on the page reads as decoration, however well it is made. Use at most one signature effect per page, most product pages need none, and let everything else stay quiet.

| Recipe | Feeling | Cost | Wrong when |
|---|---|---|---|
| 1 Field | Atmosphere, material, mood | 4 KB, GPU only | Dense text sits on it, or real photos already carry the page |
| 2 Hero object | A real thing you could hold | 194 KB three.js gz | The product is not physical, or the page must be light |
| 3 Hover distortion | Tactile type, images with weight | 4 KB | No fine pointer and no scroll moment to hang it on |
| 4 Dither, halftone | Print, retro computing, one ink | 4 KB, cheapest GL here | The brand is soft or luxurious |
| 5 Particles | A name assembling itself | 4 KB | The word must be read instantly, every visit |
| 6 Flow field | Drawn, patient, scientific | No GL at all | You need 60 fps pointer response on low-end phones |
| 7 Goo | Liquid, playful, wet | 4 KB; CSS version free | The tone is sober |
| 8 SVG filters | Handmade edges on real DOM | No library | Large areas animating every frame |
| 9 Ripple | Water, calm, touchable | 4 KB, needs float targets | The headline must never distort |

Take the cheapest medium that gives the look: SVG filter, then 2D canvas, then raw WebGL, then three.js. Only recipe 2 needs a library. Raw WebGL costs almost nothing to download, so reach for three.js only for real geometry with shadows and physically based materials.

## The contract for every canvas

Every recipe obeys these rules. `stage.js` below does most of them for you. Skipping them is what separates a hero that survives contact with real devices from one that works on your laptop.

1. **Poster first.** Put a CSS gradient or inline SVG behind the canvas, built from the same variables as the shader, and keep the canvas at `opacity: 0` until its first frame draws (`.gl.on`). No JavaScript, no WebGL, a compile failure and a slow download then all show a designed picture.
2. **Cap device pixel ratio.** Use 1.75 for soft shaders: a 3x phone would otherwise shade nine times the fragments for a difference nobody can see. Use `minDpr: 2, maxDpr: 2` for anything with type, so glyphs supersample even on 1x screens.
3. **Pause when offscreen.** An `IntersectionObserver` stops the loop. Clamp `dt` to 1/20 s so time does not jump on resume.
4. **Reduced motion gets one chosen still.** Never a blank canvas and never frame one of an intro. `stillAt` picks a moment that looks finished.
5. **Handle context loss.** Listen for `webglcontextlost`, call `preventDefault`, hide the canvas so the poster shows, and rebuild every program, texture and framebuffer on `webglcontextrestored`. Put all GL allocation in `init` and this is automatic, as long as `init` also nulls every old handle: deleting a buffer or texture from the dead context raises `INVALID_OPERATION`. Read `gl.getError()` straight after a restore to catch it.
6. **Light in linear, output in sRGB, once.** Mixing colours in sRGB makes midtones dark and muddy. Convert palette colours to linear, do all mixing and lighting there, and encode at the very end. Upload colour textures as `SRGB8_ALPHA8` so the GPU decodes them for you; masks and data stay `RGBA8`. Flat inks that must match the CSS exactly (dither, type) skip all of this and stay in sRGB. three.js handles output encoding itself, so do not add your own.
7. **Dither to kill banding.** Slow dark gradients band in 8 bits. `encode()` adds one LSB of triangular noise after the sRGB step, per pixel and static, so it never crawls. Decorative grain is a separate thing: multiply it at about 7% and step it at 12 fps.
8. **Palette from CSS.** Four stops, `--deep`, `--body`, `--light`, `--accent`, read with `palette()`, which accepts any CSS colour including `oklch()`. Never hardcode a colour in a shader.
9. **Contexts are scarce.** Browsers cap live WebGL contexts at around 16 and kill the oldest. Create contexts for below-the-fold or hover effects only on first use.
10. **Text stays in the DOM.** If a canvas repaints a headline, keep the real `<h1>` in place and hide it with `.gl.on ~ h1 { color: transparent; }`. It stays selectable, indexable and readable by screen readers, and because the rule hangs off the canvas state, the text returns by itself if the context is lost and never comes back. Do not use a separate flag for this. If the canvas fades in, delay the hide to match, or the headline dips while both are half there. Mark canvases `aria-hidden="true"`.
11. **Do not block the page.** Hero canvases get `pointer-events: none`, and any taps are heard on the parent section, so a finger still scrolls and pinch zoom still works. Leave `touch-action` alone. Size a canvas that bleeds off the screen in `100lvh`, so the phone URL bar collapsing is not a resize, and keep type that must be seen whole inside `100svh`. Assigning `canvas.width` clears the buffer, so redraw in the same callback.
12. **A loop needs a pause.** A canvas that keeps moving for more than 5 seconds beside content needs a visible control. Recipes 1, 5, 7 and 9 never rest, so give each one `pauseButton(s, button)` from `stage.js`, as recipe 1 does. Recipes 3, 4, 6 and 8 settle or stop on their own and do not need it.

## Shared scaffold

Page skeleton. The inline script sets the class before first paint, and only rules under that class may hide or pin anything.
```html
<html lang="en">
<head>
<script>document.documentElement.classList.add('js', ...(matchMedia('(prefers-reduced-motion: reduce)').matches ? ['still'] : []))</script>
<style>
  :root { --deep: #120a1e; --body: #5b1140; --light: #e2573a; --accent: #ffd9a8; }
  .hero { position: relative; min-height: 100lvh; overflow: hidden; background: radial-gradient(70% 60% at 76% 26%, var(--light), transparent 70%), var(--deep); }
  .gl { position: absolute; inset: 0; width: 100%; height: 100%; display: block; opacity: 0; transition: opacity .9s cubic-bezier(.2, .7, .2, 1); }
  .gl.on { opacity: 1; }
  @media (prefers-reduced-motion: reduce) { .gl { transition: none; } }
  .pause { display: none; }
  .js .pause:not([hidden]) { display: block; position: absolute; right: 16px; bottom: 16px; min-height: 44px; padding: 0 16px; border: 0; border-radius: 999px; background: #0008; color: #fff; font: inherit; }
</style>
</head>
<body>
<section class="hero" id="hero"><canvas class="gl" aria-hidden="true"></canvas><button class="pause" type="button">Pause</button><h1>Real text</h1></section>
```
`stage.js`, used by every raw WebGL recipe. WebGL2 only: it gives integer maths, `gl_VertexID` and `SRGB8_ALPHA8`, and where it is missing the poster stays. Paste it into a module file, or inline it. The integer hash matters because `fract(sin(x))` differs between mobile GPUs and shows visible patterns.
```js
// stage.js: boot, size, pause and recover one WebGL2 canvas. Every raw-GL recipe imports this.
export const TRI = `#version 300 es
void main(){ gl_Position = vec4(vec2((gl_VertexID << 1) & 2, gl_VertexID & 2) * 2. - 1., 0, 1); }`;

// Fragment header: palette ramp, integer hash (stable on mobile GPUs), gradient noise, fbm, sRGB encode, dither.
export const HEAD = `#version 300 es
precision highp float;
precision highp int;
uniform vec2 uRes; uniform float uTime;
uniform vec3 uPal[4];                      // deep, body, light, accent, in linear RGB
out vec4 outColor;
vec3 ramp(float x){ x = clamp(x, 0., 1.) * 2.9999; float f = fract(x), s = f * f * (3. - 2. * f);
  return x < 1. ? mix(uPal[0], uPal[1], s) : x < 2. ? mix(uPal[1], uPal[2], s) : mix(uPal[2], uPal[3], s); }
uint mixu(uint x){ x *= 2654435769u; x ^= x >> 15; x *= 2246822519u; x ^= x >> 13; return x; }
float rnd(uint s){ return float(mixu(s)) / 4294967296.; }
vec2 grad(ivec2 p){ float a = rnd(uint(p.x) * 73856093u ^ uint(p.y) * 19349663u) * 6.2831853; return vec2(cos(a), sin(a)); }
float noise(vec2 p){ ivec2 i = ivec2(floor(p)); vec2 f = fract(p), u = f*f*f*(f*(f*6.-15.)+10.);
  float a = dot(grad(i), f), b = dot(grad(i + ivec2(1,0)), f - vec2(1,0));
  float c = dot(grad(i + ivec2(0,1)), f - vec2(0,1)), d = dot(grad(i + ivec2(1,1)), f - vec2(1,1));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 1.41; }
float fbm(vec2 p, int n){ const mat2 R = mat2(.8, .6, -.6, .8); float a = .5, s = 0.;
  for (int i = 0; i < n; i++) { s += a * noise(p); p = R * p * 2.03; a *= .5; } return s; }
vec3 encode(vec3 c, vec2 px){              // linear in, sRGB out, with one LSB of triangular noise
  c = clamp(c, 0., 1.);
  c = mix(c * 12.92, 1.055 * pow(c, vec3(1. / 2.4)) - .055, step(.0031308, c));
  uint s = uint(px.x) + uint(px.y) * 8192u;
  return c + (rnd(s) + rnd(s + 40503u) - 1.) / 255.; }
`;

const lin = c => (c <= .04045 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4);

// Read CSS custom properties. Any CSS colour works, oklch() included.
function read(el, names, f) {
  const x = document.createElement('canvas').getContext('2d', { willReadFrequently: true }), css = getComputedStyle(el), out = [];
  for (const n of names) {
    x.fillStyle = css.getPropertyValue(n).trim() || '#000'; x.fillRect(0, 0, 1, 1);
    const [r, g, b] = x.getImageData(0, 0, 1, 1).data; out.push(f(r / 255), f(g / 255), f(b / 255));
  }
  return new Float32Array(out);
}
export const palette = (el, ...names) => read(el, names, lin);     // linear RGB, for anything that gets lit or blended
export const inks = (el, ...names) => read(el, names, c => c);     // sRGB, for flat colour that must match the CSS exactly

// Paint live DOM text into a 2D canvas, word by word, exactly where the browser laid it out.
export function paintText(root, box, scale, fill = '#fff', into) {
  const r = box.getBoundingClientRect(), c = into || document.createElement('canvas');
  if (!into) { c.width = Math.round(r.width * scale); c.height = Math.round(r.height * scale); }
  const x = c.getContext('2d', { willReadFrequently: true }), walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), range = document.createRange();
  x.save(); x.scale(scale, scale); x.fillStyle = fill; x.textBaseline = 'alphabetic'; x.fontKerning = 'normal';
  for (let n; (n = walk.nextNode());) {
    const cs = getComputedStyle(n.parentElement);
    x.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`; x.letterSpacing = cs.letterSpacing;
    const m = x.measureText('Hg'), mid = (m.fontBoundingBoxAscent - m.fontBoundingBoxDescent) / 2;
    for (const w of n.textContent.matchAll(/\S+/g)) {
      range.setStart(n, w.index); range.setEnd(n, w.index + w[0].length);
      const b = range.getBoundingClientRect(); x.fillText(w[0], b.left - r.left, b.top - r.top + b.height / 2 + mid);
    }
  }
  x.restore(); return c;
}

// Upload a canvas or image. Colour gets srgb: true so the GPU decodes it to linear; masks and data do not.
export function texture(gl, unit, source, { filter = gl.LINEAR, srgb = false } = {}) {
  const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, t);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, srgb ? gl.SRGB8_ALPHA8 : gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, source);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, filter], [gl.TEXTURE_MAG_FILTER, filter], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
  return t;
}

export function program(gl, fs, vs = TRI) {
  const p = gl.createProgram();
  for (const [type, src] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
    const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); gl.attachShader(p, s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS) && !gl.isContextLost()) throw new Error(gl.getShaderInfoLog(s));
  }
  gl.linkProgram(p);
  const fn = { [gl.FLOAT]: '1fv', [gl.FLOAT_VEC2]: '2fv', [gl.FLOAT_VEC3]: '3fv', [gl.FLOAT_VEC4]: '4fv', [gl.INT]: '1iv', [gl.SAMPLER_2D]: '1iv' }, u = {};
  for (let i = 0, n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS); i < n; i++) {
    const a = gl.getActiveUniform(p, i); u[a.name.replace('[0]', '')] = [gl.getUniformLocation(p, a.name), 'uniform' + fn[a.type]];
  }
  return { p, use(vals = {}) { gl.useProgram(p);                   // uniforms the compiler removed are skipped
    for (const k in vals) if (u[k]) gl[u[k][1]](u[k][0], typeof vals[k] === 'number' ? [vals[k]] : vals[k]); } };
}

export function stage(canvas, { init, frame, maxDpr = 1.75, minDpr = 0, ladder = true, cell = 0, stillAt = 8, alpha = false }) {
  const gl = canvas.getContext('webgl2', { alpha, antialias: false, depth: false, stencil: false });
  if (!gl) { canvas.remove(); return null; }                       // the CSS poster underneath stays
  const calm = matchMedia('(prefers-reduced-motion: reduce)');
  const s = { gl, t: stillAt, dt: 0, w: 0, h: 0, q: 1, calm, play, pause, draw };
  let raf = 0, last = 0, seen = true, lost = false, resting = false, n = 0, sum = 0;
  function size() {
    const dpr = cell ? 1 / cell : Math.max(minDpr, Math.min(devicePixelRatio, maxDpr)) * s.q;
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (w === s.w && h === s.h) return false;
    canvas.width = s.w = w; canvas.height = s.h = h; return true;
  }
  function draw() { if (lost) return; gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, s.w, s.h); frame(gl, s); canvas.classList.add('on'); }
  function tick(now) {
    raf = 0; s.dt = Math.min((now - last) / 1000 || 0, 1 / 20); last = now; s.t += s.dt;
    if (ladder && ++n > 20 && (sum += s.dt, n === 80)) {                     // quality ladder: two steps down, early, then never again
      if (sum / 60 > 1 / 42 && s.q > .6) { s.q *= .75; n = 0; size(); } sum = 0; }
    draw(); if (!resting) play();
  }
  function play() { resting = false; if (!raf && seen && !lost && !calm.matches) raf = requestAnimationFrame(tick); }
  function pause() { resting = true; cancelAnimationFrame(raf); raf = 0; }
  const ro = new ResizeObserver(() => { if (size()) draw(); });    // resizing clears the buffer, so redraw in the same frame
  const io = new IntersectionObserver(([e]) => { seen = e.isIntersecting; if (seen && !resting) play(); else if (!seen) { cancelAnimationFrame(raf); raf = 0; } });
  const lose = e => { e.preventDefault(); lost = true; cancelAnimationFrame(raf); raf = 0; canvas.classList.remove('on'); };
  const boot = () => { lost = false; s.w = s.h = 0; size(); init?.(gl, s); draw(); if (!resting) play(); };
  canvas.addEventListener('webglcontextlost', lose);
  canvas.addEventListener('webglcontextrestored', boot);
  calm.addEventListener('change', play);
  s.destroy = () => { pause(); ro.disconnect(); io.disconnect(); calm.removeEventListener('change', play);
    canvas.removeEventListener('webglcontextlost', lose); canvas.removeEventListener('webglcontextrestored', boot);
    gl.getExtension('WEBGL_lose_context')?.loseContext(); };
  boot(); ro.observe(canvas); io.observe(canvas);
  return s;
}

// Anything that loops past 5 s beside content needs a visible pause. A still, or no WebGL, leaves nothing to pause.
export function pauseButton(s, button) {
  let held = false;
  button.hidden = !s || s.calm.matches;
  if (button.hidden) return;
  button.addEventListener('click', () => { held = !held; held ? s.pause() : s.play(); button.textContent = held ? 'Play' : 'Pause'; });
}

// Pointer in 0..1 of an element, y up, eased by step(dt). A finger only moves it while it is down.
export function pointer(el, ease = 5) {
  const p = { x: .5, y: .5, tx: .5, ty: .5, vx: 0, vy: 0, inside: 0 };
  const move = e => { const r = el.getBoundingClientRect(); p.tx = (e.clientX - r.left) / r.width; p.ty = 1 - (e.clientY - r.top) / r.height;
    p.inside = p.tx >= 0 && p.tx <= 1 && p.ty >= 0 && p.ty <= 1 ? 1 : 0; };
  const end = e => { if (e.pointerType !== 'mouse') p.inside = 0; };   // a lifted finger must not leave its mark behind
  addEventListener('pointermove', move, { passive: true }); addEventListener('pointerup', end); addEventListener('pointercancel', end);
  p.step = dt => { const k = 1 - Math.exp(-ease * dt), ox = p.x, oy = p.y; p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k;
    p.vx = (p.x - ox) / (dt || 1); p.vy = (p.y - oy) / (dt || 1); };
  p.destroy = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', end); removeEventListener('pointercancel', end); };
  return p;
}

// Scroll progress 0..1. A hero counts while it leaves the screen; a tall pinned stack counts over its extra height.
export function progress(el, pinned = false) {
  const r = el.getBoundingClientRect();
  return Math.min(1, Math.max(0, -r.top / Math.max(1, pinned ? r.height - innerHeight : r.height)));
}
```
Options: `maxDpr`, `minDpr`, `cell` (fixed chunky pixels in CSS px), `stillAt` (seconds into the animation for the reduced-motion still), `alpha` (transparent canvas: output premultiplied colour), `ladder` (measures 60 frames and steps resolution down by 0.75 twice at most; turn it off when the canvas holds type, because soft type looks broken).

Two conventions run through every recipe. Rates written as `6/s` mean an exponential follower, `x += (target - x) * (1 - Math.exp(-k * dt))`, which behaves the same at 60 and 120 Hz: a rate of 6 has a time constant of about 170 ms and is 95% settled in 500 ms. The phone breakpoint is 720 CSS px for layout and particle counts, and `pointer: coarse` for input decisions, because a large touch screen is wide but still has no hover.

## 1. Domain-warped field

Noise that samples noise, lit like cloth: a slow liquid colour field. It feels expensive and calm and fills a hero with no assets at all. Use it when the brand is about colour, material or mood. It is the wrong choice under running text, or as filler on a page that has real imagery.

**Numbers.** `uScale` .62, so about one noise cell spans the short side. `uWarp` 1.15. `uFlow` .045, so the shape changes over roughly 20 s. Two octaves in the height, one in each warp, because more octaves means marble. Canvas fades in over .9 s with `cubic-bezier(.2, .7, .2, 1)`. Pointer eases at 2.5/s and moves the field only .18 of a cell. Scroll moves it .5 cell across the hero. `uBias` .8 pushes the dark end of the ramp under the type, which is what keeps the headline readable.
```js
import { stage, program, palette, pointer, progress, pauseButton, HEAD } from './stage.js';

const FIELD = HEAD + `
uniform vec2 uPointer, uLight;
uniform float uScale, uWarp, uFlow, uFolds, uSheen, uBias, uBands, uLines, uStretch, uGrain, uScroll;

float height(vec2 p, vec2 r){              // uFolds > 0 drapes the field into long satin folds
  float w = fbm(p + uWarp * r, 2);
  return uFolds > 0. ? .5 * sin(uFolds * (p.x + .6 * p.y + 1.6 * w)) + .35 * w : w; }

void main(){
  vec2 px = gl_FragCoord.xy, uv = (px - .5 * uRes) / min(uRes.x, uRes.y);
  vec2 p = uv * uScale * vec2(1., uStretch) + (uPointer - .5) * .18 + vec2(0., uScroll);
  float t = uTime * uFlow;
  vec2 q = vec2(noise(p + vec2(0., t)), noise(p + vec2(5.2, 1.3) - t * .7));        // first warp: one octave, so it stays broad
  vec2 r = vec2(noise(p + uWarp * q + vec2(1.7, 9.2) + t * .4), noise(p + uWarp * q + vec2(8.3, 2.8) - t * .3));
  float h = height(p, r);
  vec2 e = vec2(.012, 0.);                 // forward differences give a normal from the height
  vec2 d = vec2(height(p + e.xy, r) - h, height(p + e.yx, r) - h) / e.x;
  vec3 n = normalize(vec3(-d * .22, 1.));
  float x = .34 + .5 * h + uBias * dot(uv, uLight);                                 // bias pushes the dark end under the type
  if (uBands > 0.) { float b = x * uBands, w = fwidth(b); x = (floor(b) + smoothstep(.5 - w, .5 + w, fract(b))) / uBands; }
  vec3 c = ramp(x);
  vec3 L = normalize(vec3(uLight, .55)), H = normalize(L + vec3(0., 0., 1.));
  float diff = dot(n, L) * .5 + .5, spec = pow(max(dot(n, H), 0.), 16.);
  c *= mix(1., diff * 1.5, uSheen);
  c += uPal[3] * spec * uSheen * .22 * smoothstep(-.2, .5, x);
  if (uLines > 0.) { float v = h * 9., l = abs(fract(v) - .5) / max(fwidth(v), 1e-4); c = mix(c, uPal[3], (1. - smoothstep(.0, 1.2, l)) * uLines); }
  c *= 1. + uGrain * (rnd(uint(px.x) + uint(px.y) * 8192u + uint(uTime * 12.) * 977u) - .5);  // 12 fps grain, multiplied so darks stay dark
  outColor = vec4(encode(c, px), 1.);
}`;

const hero = document.getElementById('hero'), canvas = hero.querySelector('canvas');
const P = { uScale: .62, uWarp: 1.15, uFlow: .045, uFolds: 3.4, uSheen: .85, uBias: .8, uBands: 0, uLines: 0, uStretch: .7, uGrain: .07, uLight: [.55, .83] };
const pal = palette(hero, '--deep', '--body', '--light', '--accent');
const ptr = pointer(hero, 2.5);
let shader, scroll = 0;
const s = stage(canvas, {
  init: gl => { shader = program(gl, FIELD); },
  frame: (gl, s) => {
    ptr.step(s.dt);
    scroll += (progress(hero) - scroll) * (1 - Math.exp(-4 * s.dt));
    shader.use({ uRes: [s.w, s.h], uTime: s.t, uPal: pal, uPointer: [ptr.x, ptr.y], uScroll: scroll * .5, ...P });
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
});
pauseButton(s, hero.querySelector('.pause'));
```
**Variations.** Same shader, four characters:
- Silk (the defaults): soft and expensive.
- Satin: `uFolds: 9, uStretch: .35, uScale: .5, uWarp: 1.5`. Long hard folds, like drapery.
- Poster: `uBands: 6, uSheen: 0, uGrain: .22, uFolds: 0, uScale: .8, uBias: .5`. Flat riso shapes, graphic and loud.
- Contour: `uLines: .8, uSheen: .25, uFolds: 0, uScale: 1.1, uWarp: 1.7, uBias: .35`. Topographic, scientific.
- For weight change `uFlow`: .015 is heavy and glacial, .12 is restless.

**Mobile.** Nothing depends on hover: the pointer rests at centre and scroll still drives it. Coordinates divide by the short side, so portrait does not stretch. On portrait set `uLight: [.2, .95]` when the type sits at the bottom.

**Fallback.** The poster is radial gradients from the same four variables. Under reduced motion `stillAt` draws one frame at 8 s.

**How it goes wrong.** Frequency too high: above `uScale` 1 with three octaves it turns to marble and no type survives on it. Colour spread evenly: keep most of the area at the deep end and let one fold catch the light. Clamping a ramp to exactly 1: `fract(3.)` is 0 and it wraps to the wrong stop as a hard edge, which is why `ramp` multiplies by 2.9999.

## 2. Lit hero object in three.js

A machined object built from lathe profiles, lit by a studio of glowing panels, opening as you scroll. It reads as a real thing, and procedural geometry means no model file. Use it for a physical product or a metaphor that can be built from revolved parts. It is the wrong choice for a service with nothing to hold, or when 194 KB of library is more than the rest of the page combined.

**Dependencies.** Both files are needed; the first imports the second. Pinned in the foundations chapter:
- `https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.min.js`
- `https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.core.min.js`
```html
<script type="importmap">{ "imports": { "three": "https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.min.js" } }</script>
```
**Numbers.** Lens 22 degrees, because a long lens reads as a product photograph and a wide one as a game. Stack height 340lvh, 260lvh on phones, with `.pin` `position: sticky` under `.js:not(.still)`. Rings open across the first 60% of scroll, each 2% after the one below, on a quintic ease. Scroll follows at 6/s, about 170 ms of lag. Pointer adds ±.16 rad of yaw and ±.08 rad of pitch at 3/s. Soft shadow: `VSMShadowMap`, map 2048 (1024 on coarse pointers), `radius` 9, `blurSamples` 16, `bias` -.0004.
```js
import { palette } from './stage.js';

const P = { lens: 22, spin: 1.4, tilt: .52, travel: .5, twist: .4, stagger: .02, follow: 6 };
const host = document.getElementById('stack'), canvas = host.querySelector('canvas'), items = [...host.querySelectorAll('li')];
const calm = matchMedia('(prefers-reduced-motion: reduce)');
const phone = matchMedia('(pointer: coarse)').matches;

// Test first: no WebGL means no 194 KB download, and the SVG poster simply stays.
const context = canvas.getContext('webgl2', { antialias: true, alpha: true });
if (context) boot(await import('three')); else canvas.remove();

function boot(THREE) {
const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.toneMapping = THREE.NeutralToneMapping;          // keeps brand colour; ACES would desaturate it
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

const [metal, dark, brass] = ['--metal', '--dark', '--brass'].map(n => {
  const [r, g, b] = palette(host, n); return new THREE.Color().setRGB(r, g, b, THREE.LinearSRGBColorSpace); });

// Photo studio made of glowing panels. Long strips give long highlights on every bevel.
function studio() {
  const room = new THREE.Scene(); room.background = new THREE.Color(.05, .05, .055);
  const panel = (w, h, pos, power) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(power, power, power), side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(0, 0, 0); room.add(m); };
  panel(5, 2, [-3, 7, 2], 12); panel(5, 2, [4, 6, -3], 7); panel(.7, 10, [-7, 1, 3], 16); panel(.5, 10, [7, 1, 1], 10); panel(12, 3, [0, 5, 9], 2.2); panel(12, 3, [0, -3, 9], .7);
  const pm = new THREE.PMREMGenerator(renderer), env = pm.fromScene(room, .02).texture; pm.dispose(); return env;
}

// One lathe profile: a ring section with rounded corners, so every edge catches a highlight.
function ring(inner, outer, h, bevel, teeth = 0, depth = 0) {
  const pts = [], arc = (cx, cy, a0) => { for (let i = 0; i <= 6; i++) { const a = a0 + i / 6 * Math.PI / 2; pts.push(new THREE.Vector2(cx + Math.cos(a) * bevel, cy + Math.sin(a) * bevel)); } };
  if (inner) arc(inner + bevel, bevel, Math.PI); else pts.push(new THREE.Vector2(0, 0));
  arc(outer - bevel, bevel, Math.PI * 1.5); arc(outer - bevel, h - bevel, 0);
  if (inner) { arc(inner + bevel, h - bevel, Math.PI / 2); pts.push(pts[0].clone()); } else pts.push(new THREE.Vector2(0, h));
  const g = new THREE.LatheGeometry(pts, teeth ? teeth * 8 : 256);
  if (teeth) {                                            // knurl: push the outer wall in and out around the axis
    const p = g.attributes.position, { smoothstep } = THREE.MathUtils;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), y = p.getY(i), r = Math.hypot(x, z);
      const wall = smoothstep(r, outer - bevel * 1.5, outer - bevel * .5) * smoothstep(y, 0, bevel) * smoothstep(h - y, 0, bevel);
      const k = 1 - depth * wall * (.5 + .5 * Math.cos(Math.atan2(z, x) * teeth)) / r; p.setX(i, x * k); p.setZ(i, z * k); }
    g.computeVertexNormals();
  }
  return g;
}

const spun = (color, roughness = .36) => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness, anisotropy: .75, clearcoat: .25, clearcoatRoughness: .5 });
const powder = (color, roughness = .52) => new THREE.MeshPhysicalMaterial({ color, roughness, clearcoat: .6, clearcoatRoughness: .35 });
const parts = [                                           // height, geometry, material, how far it travels when opened
  [.26, ring(.62, 1.62, .26, .03), powder(dark), 0],
  [.44, ring(.62, 1.5, .44, .04, 96, .028), spun(metal), .7],
  [.08, ring(.8, 1.18, .08, .018), spun(brass, .28), 1.25],
  [.3, ring(.62, 1.42, .3, .035), powder(dark), 1.8],
  [.34, ring(.28, 1.16, .34, .05, 48, .022), spun(metal, .3), 2.4],
  [.62, ring(0, .54, .62, .06), spun(brass, .3), 2.95],
].map(([h, g, m, travel]) => ({ h, travel, mesh: new THREE.Mesh(g, m) }));

const scene = new THREE.Scene();
const object = new THREE.Group(); scene.add(object);
parts.reduce((y, part) => { part.rest = y; part.mesh.castShadow = part.mesh.receiveShadow = true; object.add(part.mesh); return y + part.h + .012; }, 0);
const key = new THREE.DirectionalLight(0xffffff, 2.2);
key.position.set(-3.2, 7, 4.2); key.castShadow = true;
key.shadow.mapSize.setScalar(phone ? 1024 : 2048);
key.shadow.camera.left = key.shadow.camera.bottom = -5; key.shadow.camera.right = key.shadow.camera.top = 5;
key.shadow.camera.near = 1; key.shadow.camera.far = 18; key.shadow.radius = 9; key.shadow.blurSamples = 16; key.shadow.bias = -.0004;
scene.add(key);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: .28 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -1.6; floor.receiveShadow = true; scene.add(floor);
scene.environment = studio();
canvas.addEventListener('webglcontextrestored', () => { key.shadow.map = null; scene.environment = studio(); needs = 2; });   // drop the dead shadow target unseen, or three deletes stale handles
canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); canvas.classList.remove('on'); });

const camera = new THREE.PerspectiveCamera(P.lens, 1, .1, 80);   // long lens: reads as a product photo, not a game
const ease = x => x * x * x * (x * (6 * x - 15) + 10);
const clamp01 = x => Math.min(1, Math.max(0, x));
const v = { p: calm.matches ? .5 : 0, target: 0, px: 0, py: 0, tx: 0, ty: 0 };
let needs = 3, last = 0, raf = 0, seen = true, W = 0;

function pose() {
  const wide = W > 760, p = v.p, open = ease(clamp01(p / .6));
  parts.forEach((part, i) => {
    const local = ease(clamp01((p - i * P.stagger) / .6)); // each ring leaves a little later than the one below
    part.mesh.position.y = part.rest + part.travel * P.travel * local;
    part.mesh.rotation.y = local * (i % 2 ? P.twist : -P.twist);
  });
  object.position.set(wide ? 1.9 : 0, (wide ? -1.35 : -.35) - open * (wide ? .85 : .7), 0);
  object.rotation.set(P.tilt - p * .1 + v.py * .08, p * P.spin + v.px * .16, -.14 + p * .08);
  camera.position.set(0, 2.2, ((wide ? 13.5 : 29) + open * (wide ? 8.5 : 6)) * 22 / P.lens); camera.lookAt(0, 0, 0);
}
function render() { pose(); renderer.render(scene, camera); canvas.classList.add('on'); }
function tick(now) {
  raf = 0; const dt = Math.min((now - last) / 1000 || 0, 1 / 20); last = now;
  const r = host.getBoundingClientRect();
  v.target = clamp01(-r.top / Math.max(1, r.height - innerHeight));
  const k = 1 - Math.exp(-P.follow * dt), j = 1 - Math.exp(-3 * dt), o = [v.p, v.px, v.py];
  v.p += (v.target - v.p) * k; v.px += (v.tx - v.px) * j; v.py += (v.ty - v.py) * j;
  items.forEach((el, i) => el.classList.toggle('now', i === Math.min(2, Math.floor(v.p * 3))));
  if (needs > 0 || Math.abs(v.p - o[0]) + Math.abs(v.px - o[1]) + Math.abs(v.py - o[2]) > 1e-4) { render(); needs = Math.max(0, needs - 1); }
  if (seen) raf = requestAnimationFrame(tick);
}
function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return; W = w;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); render();
}
new ResizeObserver(resize).observe(canvas);
new IntersectionObserver(([e]) => { seen = e.isIntersecting; cancelAnimationFrame(raf); raf = 0; if (seen && !calm.matches) raf = requestAnimationFrame(tick); }).observe(canvas);
addEventListener('pointermove', e => { v.tx = e.clientX / innerWidth * 2 - 1; v.ty = e.clientY / innerHeight * 2 - 1; }, { passive: true });
resize();
}
```
Markup: `.stack` > `.pin` holding the canvas, an inline SVG `.poster` of the same object in the same colours, the `h1` and an `ol` of steps. Cross-fade the poster with `.gl.on ~ .poster { opacity: 0; }` and a .7 s transition. Hiding it outright leaves a blank beat while the canvas fades in. Testing `getContext` first means a device with no WebGL never downloads the library.

**Variations.**
- Product photo (the defaults): slow turn, parts separate.
- Mechanical: `follow: 14, spin: 0, twist: 0, stagger: 0, travel: .62`. Parts slide on the axis with no rotation, like a technical drawing.
- Heavy: `follow: 2.4, spin: .5, travel: .7, stagger: .05`. The mass lags your scroll.
- Plan view: `lens: 38, tilt: .9, spin: 3.14`. Looks down on it, more dramatic and less like a photograph.

**Mobile.** Camera pulls back to 29 so the object fits between title and list. Shadow map drops to 1024. No pointer input: scroll is the whole interaction, which is enough.

**Fallback.** Without JS the stack is normal height, the poster shows and every list item is visible, because all dimming and pinning sits under `.js:not(.still)`. Reduced motion shows one half-open pose with no pin.

**How it goes wrong.** Sharp edges: highlights live on bevels, so every profile has rounded corners, and a mesh with none looks like a primitive. ACES tone mapping: it desaturates brand colour, so use `NeutralToneMapping`. No environment map: a metal with only direct lights renders nearly black. On context restore, regenerate the PMREM environment and null `key.shadow.map`: three.js rebuilds the rest itself, but it would otherwise delete the dead shadow target and raise `INVALID_OPERATION`.

## 3. Text and image distortion on hover

Part A pulls a real headline like taffy, with a second ink lagging behind the first. Part B swaps two images through a noise threshold that drags both apart. The feeling is weight and physicality in things that are usually flat. Use A on one short display headline and B on a grid of work. Wrong for body text, for anything users must read mid-effect, and for more than one distorted headline on a page.

**Numbers.** A: velocity grid 36×14, decaying .93 per 60 Hz frame, brush radius 3.4 cells, gain .55, trail ink lag 1.8, and one unattended 1.6 s stroke on arrival. B: eases at 5.5/s, about 500 ms to settle; edge softness .1, drag .28, noise 2.6 cells across.
```js
import { stage, program, pointer, inks, paintText, texture, HEAD } from './stage.js';

// Part A: headline pulled like taffy. Velocity lives in a small CPU grid, so it needs no float render targets.
const PULL = HEAD + `
uniform sampler2D uText, uFlow; uniform vec3 uInk, uTrail, uPaper; uniform float uLag;
void main(){
  vec2 uv = gl_FragCoord.xy / uRes, d = -texture(uFlow, uv).xy;
  vec3 c = mix(uPaper, uTrail, texture(uText, uv + d * uLag).r);   // a second ink lags behind the first
  outColor = vec4(mix(c, uInk, texture(uText, uv + d).r), 1.);     // blended in sRGB, as the browser blends text
}`;
const P = { decay: .93, radius: 3.4, gain: .55, lag: 1.8, drag: .28, soft: .1, scale: 2.6, ease: 5.5 };
const title = document.getElementById('title'), words = title.querySelector('.t'), cv = title.querySelector('canvas');
const GX = 36, GY = 14, flow = new Float32Array(GX * GY * 2), ptr = pointer(cv, 14);
const [ink, paper, trail] = [inks(document.body, '--ink'), inks(document.body, '--paper'), inks(document.body, '--trail')];
let pull, flowTex, textTex, width = 0, ghost = 1.6;
function stir(x, y, vx, vy, dt) {
  const keep = P.decay ** (dt * 60); let energy = 0;
  for (let j = 0, k = 0; j < GY; j++) for (let i = 0; i < GX; i++, k += 2) {
    const dx = i + .5 - x * GX, dy = (j + .5 - y * GY) * 1.6, f = Math.exp(-(dx * dx + dy * dy) / (P.radius * P.radius));
    flow[k] = flow[k] * keep + vx * f * P.gain * dt; flow[k + 1] = flow[k + 1] * keep + vy * f * P.gain * dt;
    energy += Math.abs(flow[k]) + Math.abs(flow[k + 1]);
  }
  return energy;
}
await document.fonts.ready;
const heading = matchMedia('(prefers-reduced-motion: reduce)').matches ? null : stage(cv, {
  minDpr: 2, maxDpr: 2, ladder: false,                     // type: always supersample, and never let the quality ladder soften it
  init: gl => {
    pull = program(gl, PULL); width = 0; textTex = null;   // handles from before a context loss must never reach delete
    flowTex = gl.createTexture(); gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, flowTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG16F, GX, GY, 0, gl.RG, gl.FLOAT, flow);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
  },
  frame: (gl, s) => {
    if (s.w !== width) {                                   // the headline reflows, so repaint the mask at the new size
      width = s.w; gl.deleteTexture(textTex); textTex = texture(gl, 0, paintText(words, cv, s.w / cv.clientWidth)); }
    ptr.step(s.dt);
    let vx = ptr.vx * ptr.inside, vy = ptr.vy * ptr.inside, x = ptr.x, y = ptr.y;
    if (ghost > 0) {                                       // one unattended stroke on arrival, so touch screens see it too
      const u = 1 - ghost / 1.6; ghost -= s.dt; x = .08 + u * .84; y = .62 - Math.sin(u * 6.28) * .22; vx = .9; vy = -Math.cos(u * 6.28) * .55; }
    const energy = stir(x, y, vx, vy, s.dt || 1 / 60);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, flowTex);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, GX, GY, gl.RG, gl.FLOAT, flow);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, textTex);
    pull.use({ uRes: [s.w, s.h], uText: 0, uFlow: 1, uInk: ink, uTrail: trail, uPaper: paper, uLag: P.lag });
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (energy < .004 && ghost <= 0 && !ptr.inside) s.pause();   // nothing moving: stop drawing entirely
  }
});
if (heading) addEventListener('pointermove', () => { if (ptr.inside) heading.play(); }, { passive: true });

// Part B: hover swaps two images through a noise threshold that drags both apart.
const WIPE = HEAD + `
uniform sampler2D uA, uB; uniform vec2 uCoverA, uCoverB; uniform float uP, uSoft, uDrag, uNoise;
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float n = fbm(uv * vec2(uRes.x / uRes.y, 1.) * uNoise, 3) * .5 + .5;
  float m = smoothstep(n - uSoft, n + uSoft, uP * (1. + 2. * uSoft) - uSoft);
  vec2 d = vec2(0., (n - .5) * uDrag);
  vec3 a = texture(uA, (uv - .5) * uCoverA + .5 + d * m).rgb, b = texture(uB, (uv - .5) * uCoverB + .5 - d * (1. - m)).rgb;
  outColor = vec4(mix(a, b, m), 1.);
}`;
const loadImage = src => new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = src; });
const coverOf = (iw, ih, w, h) => { const a = iw / ih, b = w / h; return a > b ? [b / a, 1] : [1, a / b]; };
async function wipeTile(figure) {
  const frame = figure.querySelector('.frame'), img = frame.querySelector('img'), second = await loadImage(img.dataset.hover); await img.decode();
  let shader, a, b, p = 0, target = 0, s;
  const wake = v => {
    target = v;
    if (!s) {                                              // a context per tile only once it is touched: browsers cap live contexts near 16
      const canvas = document.createElement('canvas'); canvas.className = 'gl'; canvas.setAttribute('aria-hidden', 'true'); frame.append(canvas);
      s = stage(canvas, {
        init: gl => { shader = program(gl, WIPE); a = texture(gl, 0, img); b = texture(gl, 1, second); },
        frame: (gl, st) => {
          p = st.calm.matches ? target : p + (target - p) * (1 - Math.exp(-P.ease * st.dt));
          gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, a); gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, b);
          shader.use({ uRes: [st.w, st.h], uA: 0, uB: 1, uP: p, uSoft: P.soft, uDrag: P.drag, uNoise: P.scale,
            uCoverA: coverOf(img.naturalWidth, img.naturalHeight, st.w, st.h), uCoverB: coverOf(second.naturalWidth, second.naturalHeight, st.w, st.h) });
          gl.drawArrays(gl.TRIANGLES, 0, 3);
          if (Math.abs(target - p) < .002) st.pause();
        } });
    }
    if (s) { s.play(); s.draw(); }
  };
  figure.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') wake(1); });
  figure.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') wake(0); });
  if (matchMedia('(pointer: coarse)').matches)             // touch: flip once as the tile crosses mid-screen
    new IntersectionObserver(([e]) => wake(e.isIntersecting ? 1 : 0), { rootMargin: '-40% 0% -40% 0%' }).observe(figure);
}
document.querySelectorAll('.tile').forEach(wipeTile);
```
Markup: `<h1 id="title"><canvas class="gl" aria-hidden="true"></canvas><span class="t">Words</span></h1>`, then `figure.tile` > `.frame` > `img[src][data-hover]`. CSS: `h1 { position: relative; }`, canvas `position: absolute; inset: -.2em -.1em; pointer-events: none`, `.gl.on ~ .t { color: transparent; }` with the canvas first inside the `h1`, and give the next element `position: relative` or the opaque canvas overlaps it. The canvas is a little larger than the text so stretched letters are not clipped. No photos on the site? Point the `<img>` and `data-hover` at inline SVG data URIs of flat geometric plates.

**Variations.**
- Taffy (the defaults).
- Snappy: `decay: .82, radius: 2.2, gain: .8`. A quick flick that snaps back.
- Heavy: `decay: .975, radius: 5, gain: .3`. Slow, syrupy, keeps moving after you leave.
- Wipe, hard print edge: `soft: .03, drag: .05`. Wipe, liquid: `soft: .3, drag: .5, scale: 1.2`.

**Mobile.** No hover exists, so A plays its arrival stroke and B flips once as a tile crosses mid-screen, using an `IntersectionObserver` with `rootMargin: '-40% 0% -40% 0%'`. Pointer events are filtered to `pointerType === 'mouse'` so a scroll never triggers a wipe.

**Fallback.** Text and images are real DOM and only hide after the first GL frame. Reduced motion skips A entirely and makes B an instant swap on hover. Upload failure leaves the `<img>`.

**How it goes wrong.** Canvas text that does not line up with DOM text, so the headline jumps when the effect switches on: wait for `document.fonts.ready`, paint with `paintText` and repaint on width change. Soft type at 1x: use `minDpr: 2` and `ladder: false`. Forgetting to rest: stop the loop when energy falls, or a static headline burns battery.

## 4. Dither and halftone

The picture is grey first, and a print process decides how each pixel lands. Here a lit moon runs through its phases as you scroll, in one ink. It feels like print or early computing and looks deliberate at any resolution, and it is the cheapest GL here because there are few pixels to shade. Use it for editorial, archival or technical brands. Wrong for soft, luxurious ones, and never run it over a photo of a face.

**Numbers.** Ordered dither on an 8×8 Bayer matrix at `cell: 3` CSS px, with `image-rendering: pixelated` so the square stays square on any screen. Halftone is 9 CSS px at 45 degrees and line screen 9 px at 60, both at full resolution with `fwidth` edges. Pin 340lvh. Phase runs .11 to .94, so the first screen already shows a crescent, and follows scroll at 5/s. Gamma .85 lifts midtones, because a straight ramp prints too dark.
```js
import { stage, program, inks, pointer, progress, HEAD } from './stage.js';

const MOON = HEAD + `
uniform vec3 uInk, uPaper;                 // flat inks stay in sRGB: there is nothing to light, only to match the CSS
uniform vec2 uTilt, uMoon;
uniform float uMode, uScreen, uPhase, uRadius, uGamma, uMare;

float bayer(ivec2 p){                      // 8x8 ordered matrix built from its recursive definition, no table
  int m = 0;
  for (int i = 0; i < 3; i++) { int x = (p.x >> i) & 1, y = (p.y >> i) & 1; m = m * 4 + 2 * (x ^ y) + y; }
  return (float(m) + .5) / 64.; }

float tone(vec2 uv, vec2 px){              // the picture is grey first: everything below only decides how to print it
  vec2 d = (uv - uMoon) / uRadius; float r2 = dot(d, d);
  if (r2 > 1.) return step(.9988, rnd(uint(px.x) + uint(px.y) * 8192u)) * .9;     // sparse stars
  vec3 n = vec3(d, sqrt(1. - r2));
  float a = uPhase * 6.2831853;            // phase 0 is lit from behind, .5 from the front
  vec3 L = normalize(vec3(sin(a), uTilt.y * .35, -cos(a) + uTilt.x * .2));
  vec2 s = n.xy / (1.25 + n.z) * 2.6;      // stereographic: features crowd together at the limb, as on a sphere
  float mare = smoothstep(-.1, .25, fbm(s + 3.1, 4)), rough = fbm(s * 5., 3);
  float albedo = mix(1., .34, mare * uMare) + .22 * rough;
  return pow(clamp(max(dot(n, L), 0.) * albedo, 0., 1.), uGamma) + .022; }        // the small constant is earthshine

void main(){
  vec2 px = gl_FragCoord.xy, uv = (px - .5 * uRes) / uRes.y;
  float v = tone(uv, px), on;
  if (uMode < .5) on = step(bayer(ivec2(px)), v);                                  // ordered dither
  else if (uMode < 1.5) {                                                          // halftone dots on a 45 degree screen
    vec2 q = mat2(.7071, .7071, -.7071, .7071) * px / uScreen, f = fract(q) - .5;
    float w = fwidth(q.x) * .8; on = 1. - smoothstep(-w, w, length(f) - sqrt(v) * .72); }
  else if (uMode < 2.5) {                                                          // line screen, thickness follows tone
    float y = dot(px, vec2(.5, .866)) / uScreen, w = fwidth(y) * .8; on = 1. - smoothstep(-w, w, abs(fract(y) - .5) - v * .5); }
  else on = step(rnd(uint(px.x) + uint(px.y) * 8192u), v);                         // mezzotint: white noise, soft and grainy
  outColor = vec4(mix(uInk, uPaper, on), 1.);
}`;

const P = { mode: 0, cell: 3, screen: 9, gamma: .85, mare: .7, from: .11, to: .94, follow: 5 };
const host = document.getElementById('stack'), canvas = host.querySelector('canvas'), items = [...host.querySelectorAll('li')];
const [ink, paper] = [inks(host, '--ink'), inks(host, '--paper')], ptr = pointer(host, 3);
const cell = P.mode === 0 || P.mode === 3 ? P.cell : 0;      // dither and mezzotint want big square pixels; screens want full resolution
canvas.classList.toggle('px', cell > 0);
let shader, phase = -1, stamp = '';
stage(canvas, {
  cell, maxDpr: 2,
  init: gl => { shader = program(gl, MOON); stamp = ''; },
  frame: (gl, s) => {
    const goal = s.calm.matches ? .36 : P.from + (P.to - P.from) * progress(host, true);
    phase = phase < 0 ? goal : phase + (goal - phase) * (1 - Math.exp(-P.follow * s.dt));
    ptr.step(s.dt);
    items.forEach((el, i) => el.classList.toggle('now', i === Math.min(3, Math.floor(phase * 4 + .5) % 4)));
    const next = [phase.toFixed(4), ptr.x.toFixed(3), ptr.y.toFixed(3), s.w, s.h].join();
    if (next === stamp) return;              // render on demand: an unchanged picture costs nothing
    stamp = next;
    const a = s.w / s.h, wide = a > 1;
    shader.use({ uRes: [s.w, s.h], uInk: ink, uPaper: paper, uMode: P.mode, uScreen: P.screen * Math.min(devicePixelRatio, 2),
      uPhase: phase, uGamma: P.gamma, uMare: P.mare, uTilt: [ptr.x - .5, ptr.y - .5],
      uMoon: wide ? [a * .21, 0] : [0, -.06], uRadius: wide ? .4 : a * .44 });
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
});
```
Markup: `#stack` > `.pin` holding the canvas, `h1` and an `ol` of four `li`. CSS: `.js:not(.still) .stack { height: 340lvh; }` and `.js:not(.still) .pin { position: sticky; top: 0; height: 100lvh; }`. Poster: `radial-gradient(circle at 71% 50%, var(--paper) 0 19vw, transparent 19.1vw), var(--ink)`. `.gl.px { image-rendering: pixelated; }`.

**Variations.** `mode` changes the whole character, and these are not interchangeable:
- 0 Ordered: `mode: 0, cell: 3`. Crisp and computational.
- 1 Halftone: `mode: 1, screen: 9`. Newspaper, warm. Raise `screen` to 14 for pop art.
- 2 Line screen: `mode: 2, screen: 9`. Banknote, engraved.
- 3 Mezzotint: `mode: 3, cell: 2`. Grainy and organic, the only one with no visible structure.

Two inks are the point. Set `--ink` and `--paper` to brand colours, and for a dissolve between two states add an offset to the threshold.

**Mobile.** The moon moves to centre with radius `a * .44`. `cell` is in CSS px, so the pattern stays crisp on any DPR. Pointer tilt simply does nothing.

**Fallback.** Poster disc. Reduced motion gets a gibbous still at phase .36, with no pin and every list item at full opacity.

**How it goes wrong.** Scaling the dither: a Bayer pattern resampled by any non-integer amount gives moire, so always render at `1 / cell` and let CSS upscale. Running it through `encode`: there are only two colours, and sRGB conversion or noise would break the match with the page. Dithering a low-contrast source: tone must span 0 to 1 first, so fix the picture, not the pattern. Opening on an empty frame: a page that starts at new moon has no picture until you scroll, so start where something is already lit. This recipe renders on demand; an unchanged `stamp` skips the draw.

## 5. Particles forming a wordmark

A hundred thousand points assemble into a real word, part around the pointer, and lift back into dust on scroll. Every position is a pure function of home, seed and time, computed in the vertex shader, so the CPU does no per-particle work. Use it for a name or a single short word. Wrong when the word must be readable the instant the page opens on every visit.

**Numbers.** 140,000 points on desktop, 36,000 on phones. Size 2.6 CSS px. Assembly 2.8 s with stagger 1.6 and sweep .35, so a soft wave crosses the word through random order. Quintic ease. Scatter .7 of the long side, swirl 90 CSS px, pointer reach 150 px, push 60 px, resting breath .9 px. A condensed heavy face works far better than a wide one because it gives more ink area per screen width.
```js
import { stage, program, inks, paintText, pointer, progress } from './stage.js';

// Stateless GPU particles: each position is a pure function of home, seed and time, so the CPU touches nothing per frame.
const VS = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aHome;        // canvas pixels, y up
layout(location = 1) in vec4 aSeed;        // four independent randoms, 0..1
uniform vec2 uRes, uPointer;
uniform vec3 uDot, uSpark;
uniform float uTime, uP, uLeave, uScatter, uCurl, uStagger, uSweep, uSize, uReach, uPush, uBreath, uCols, uDpr;
out vec3 vC;
float ease(float x){ x = clamp(x, 0., 1.); return x * x * x * (x * (6. * x - 15.) + 10.); }
void main(){
  float delay = mix(aSeed.x, aHome.x / uRes.x, uSweep);    // uSweep 0: random order. 1: a wave from left to right
  float k = ease(uP * (1. + uStagger) - delay * uStagger);
  k *= 1. - ease(uLeave * 1.5 - aSeed.y * .5);             // scrolling away lifts the word back into dust
  float a = aSeed.y * 6.2832, r = sqrt(aSeed.z) * uScatter * max(uRes.x, uRes.y);
  vec2 away = aHome + r * vec2(cos(a), sin(a));
  if (uCols > 0.) { float c = uRes.x / uCols; away = vec2(floor(aHome.x / c + .5) * c, aHome.y - uRes.y * (aSeed.x + .4)); }  // mechanical: columns, not a cloud
  vec2 p = mix(away, aHome, k), q = p * .004 / uDpr;
  p += uCurl * uDpr * (1. - k) * vec2(sin(q.y * 1.7 + uTime * .5 + aSeed.w * 6.), cos(q.x * 1.3 - uTime * .4 + aSeed.y * 6.));   // two sines make a cheap swirl
  p += uBreath * uDpr * vec2(sin(uTime * 1.3 + aSeed.x * 40.), cos(uTime * 1.1 + aSeed.y * 40.));
  vec2 d = p - uPointer; float R = uReach * uDpr, f = exp(-dot(d, d) / (R * R));
  p += (normalize(d + 1e-4) + .6 * vec2(-d.y, d.x) / R) * uPush * uDpr * f;   // push out and turn: a shove alone looks like a bubble
  gl_Position = vec4(p / uRes * 2. - 1., 0, 1);
  gl_PointSize = uSize * uDpr * (.7 + .6 * aSeed.w);
  vC = aSeed.w > .93 ? uSpark : uDot;
}`;
const FS = `#version 300 es
precision mediump float;
in vec3 vC; out vec4 outColor;
void main(){ float a = 1. - smoothstep(.2, .5, length(gl_PointCoord - .5)); a *= .62; outColor = vec4(vC * a, a); }`;

const P = { uScatter: .7, uCurl: 90, uStagger: 1.6, uSweep: .35, uSize: 2.6, uReach: 150, uPush: 60, uBreath: .9, uCols: 0, dur: 2.8, hold: 1, max: 140000, phone: 36000 };
const hero = document.getElementById('hero'), canvas = hero.querySelector('canvas'), word = document.getElementById('word');
const [dot, spark] = [inks(hero, '--dot'), inks(hero, '--spark')], ptr = pointer(canvas, 7);
let shader, vao, buffers = [], count = 0, width = 0, born = 0, push = 0;

function sample(mask, limit) {                 // jittered grid: even coverage, no moire, no clumps
  const { width: w, height: h } = mask, d = mask.getContext('2d').getImageData(0, 0, w, h).data;
  let ink = 0; for (let i = 3; i < d.length; i += 4 * 9) if (d[i] > 127) ink += 9;
  const step = Math.max(1, Math.sqrt(ink / limit)), pts = [];
  for (let y = 0; y < h; y += step) for (let x = 0; x < w; x += step) {
    const px = Math.min(w - 1, x + Math.random() * step | 0), py = Math.min(h - 1, y + Math.random() * step | 0);
    if (d[(py * w + px) * 4 + 3] > 127) pts.push(px, h - py);
  }
  return new Float32Array(pts);
}
function rebuild(gl, s) {                      // called on width change: the wordmark reflows, so homes must be sampled again
  const homes = sample(paintText(word, canvas, s.w / canvas.clientWidth), innerWidth < 720 ? P.phone : P.max);
  const seeds = new Float32Array(homes.length * 2).map(Math.random);
  count = homes.length / 2; buffers.forEach(b => gl.deleteBuffer(b));
  buffers = [[0, 2, homes], [1, 4, seeds]].map(([loc, n, data]) => { const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, n, gl.FLOAT, false, 0, 0); return b; });
}
await document.fonts.load(getComputedStyle(word).font);
stage(canvas, {
  alpha: true,
  init: (gl, s) => {
    shader = program(gl, FS, VS); vao = gl.createVertexArray(); gl.bindVertexArray(vao); width = 0; buffers = []; born = born || s.t;
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.clearColor(0, 0, 0, 0);   // additive: only for dark grounds. On a light page use ONE, ONE_MINUS_SRC_ALPHA
  },
  frame: (gl, s) => {
    if (s.w !== width) { width = s.w; rebuild(gl, s); }
    ptr.step(s.dt); push += ((ptr.inside ? P.uPush : 0) - push) * (1 - Math.exp(-5 * s.dt));   // ease the force, so the word heals instead of snapping
    const scale = s.w / canvas.clientWidth, { uScatter, uCurl, uStagger, uSweep, uSize, uReach, uBreath, uCols } = P;
    gl.clear(gl.COLOR_BUFFER_BIT);
    shader.use({ uRes: [s.w, s.h], uTime: s.t, uDot: dot, uSpark: spark, uDpr: scale, uP: s.calm.matches ? 1 : Math.min(P.hold, (s.t - born) / P.dur),
      uLeave: progress(hero), uPointer: [ptr.x * s.w, ptr.y * s.h], uPush: push,
      uScatter, uCurl, uStagger, uSweep, uSize, uReach, uBreath, uCols });
    gl.drawArrays(gl.POINTS, 0, count);
  }
});
```
Markup: `#hero` holding the canvas, then `<h1 id="word">`. CSS: `.gl.on ~ h1 { color: transparent; transition: color .6s linear; }`, so the solid word dissolves into the dust instead of popping off. Set `--dot` and `--spark` on the hero; about 7% of points use `--spark`.

**Variations.**
- Dust (the defaults): drifts in like smoke.
- Mechanical: `uCols: 48, uCurl: 0, uStagger: .5, uSweep: 1, dur: 1.1, uBreath: 0`. Columns of points rise left to right, like a split-flap board.
- Swarm: `uScatter: .14, uCurl: 170, hold: .72`. Never fully settles, as if the word is alive.
- Tight: `uReach: 70, uPush: 24`. A small, precise parting, for a quieter brand. Keep `uSize` at 2.6: additive points dim fast below it.

**Mobile.** Fewer points. There is no hover, and a drag is a scroll, which cancels the pointer, so the parting effect barely happens on touch. Assembly and the scroll dissolve are the whole experience there, and they are enough.

**Fallback.** The real `h1` shows in `--dot` until the first frame. Reduced motion draws the finished word at `uP` 1 and never assembles.

**How it goes wrong.** Grid sampling without jitter shows moire on curves; jitter inside each cell. Sampling before the font loads gives you the fallback face's shape, so await `document.fonts.load`. Additive blending on a light page disappears: use `blendFunc(ONE, ONE_MINUS_SRC_ALPHA)`. Pointer push alone looks like a bubble, so add the perpendicular turn. Tune the alpha so dense areas do not clip to white and lose the brand colour.

## 6. Canvas flow field

Thousands of ink lines follow a stream function and part around the headline like water around a stone, then the drawing finishes and the page goes idle. It feels drawn, patient and scientific. It needs no WebGL, so it has no context limit and no compile. Use it for mapping, research, craft or anything measured. Wrong when the page wants energy.

**Numbers.** 1,500 lines, 620 on phones. 1.5 px per frame at constant speed. Noise scale .0021, a cell of about 480 px. Life 340 frames. Width .8 px at alpha .2. Budget 1,300 frames, about 22 s at 60 Hz, then it stops for good. Gap around the type 90 px. DPR capped at 1.5, because thin lines gain nothing past it. One `beginPath` per colour, so thousands of strokes become three draw calls.
```js
// Plain 2D canvas: no WebGL, so no context limit, no shader compile, and it runs on anything.
const P = { count: 1500, phoneCount: 620, step: 1.5, scale: .0021, wander: 1.5, stream: 1, gap: 90, life: 340, width: .8, alpha: .2, budget: 1300, fade: 0, reach: 120 };
const hero = document.getElementById('hero'), stone = document.getElementById('stone'), canvas = hero.querySelector('canvas'), x = canvas.getContext('2d');
const calm = matchMedia('(prefers-reduced-motion: reduce)'), css = getComputedStyle(hero);
const inkset = [['--ink', .64], ['--mid', .3], ['--hot', .06]].map(([n, share]) => [css.getPropertyValue(n).trim(), share]);

// Seeded 2D gradient noise, so every visit draws a recognisably different map of the same river.
const perm = new Uint8Array(512), seed = (Math.random() * 1e9) | 0; { let s = seed; const r = () => (s = (s * 1664525 + 1013904223) | 0, (s >>> 8) / 16777216), a = Uint8Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) { const j = r() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } for (let i = 0; i < 512; i++) perm[i] = a[i & 255]; }
const G = Array.from({ length: 256 }, (_, i) => [Math.cos(i * 2.39996), Math.sin(i * 2.39996)]), fade = t => t * t * t * (t * (t * 6 - 15) + 10);
function noise(px, py) {
  const i = Math.floor(px), j = Math.floor(py), fx = px - i, fy = py - j, u = fade(fx), v = fade(fy), h = (a, b) => { const g = G[perm[((i + a) & 255) + perm[(j + b) & 255]]]; return g[0] * (fx - a) + g[1] * (fy - b); };
  const n0 = h(0, 0) + u * (h(1, 0) - h(0, 0)), n1 = h(0, 1) + u * (h(1, 1) - h(0, 1)); return n0 + v * (n1 - n0);
}

let W = 0, H = 0, dpr = 1, frames = 0, raf = 0, seen = true, done = false, rect = [0, 0, 1, 1], bodies = [], pointerAt = null;
const smooth = t => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };

// The stream function. Flow is its curl, so it can never bunch into sinks. Multiplying by a ramp that hits zero at a
// body's edge makes that edge a streamline: lines part around the headline like water around a stone.
const CORNER = 56;
function body(px, py) {                                                           // distance to a rounded box around the headline
  const [cx, cy, hw, hh] = rect, dx = Math.max(Math.abs(px - cx) - hw + CORNER, 0), dy = Math.max(Math.abs(py - cy) - hh + CORNER, 0);
  return Math.hypot(dx, dy) - CORNER;
}
function psi(px, py) {
  const cy = rect[1]; let ramp = smooth(body(px, py) / P.gap);
  if (pointerAt) ramp *= smooth((Math.hypot(px - pointerAt[0], py - pointerAt[1]) - 12) / P.reach);
  return ramp * (P.stream * (py - cy) + P.wander / P.scale * noise(px * P.scale, py * P.scale));
}
function spawn(i) { let px, py; do { px = Math.random() * W; py = Math.random() * H; } while (body(px, py) < P.gap * .25);    // never born inside a body: flow is zero there, so it would stamp a dot
  b.x[i] = px; b.y[i] = py; b.age[i] = Math.random() * P.life * .4 | 0; b.c[i] = pick(); }
const pick = () => { let r = Math.random(); for (let k = 0; k < inkset.length; k++) if ((r -= inkset[k][1]) < 0) return k; return 0; };
let b, n;
function resize() {
  const w = hero.clientWidth; if (w === W) return false;                         // height-only changes are the phone URL bar: ignore them
  W = w; H = hero.clientHeight; dpr = Math.min(devicePixelRatio, 1.5);
  canvas.width = W * dpr; canvas.height = H * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0); x.lineCap = 'round';
  const r = stone.getBoundingClientRect(), h = hero.getBoundingClientRect(); rect = [r.left - h.left + r.width / 2, r.top - h.top + r.height / 2, r.width / 2, r.height / 2];
  n = W < 720 ? P.phoneCount : P.count; b = { x: new Float32Array(n), y: new Float32Array(n), age: new Uint16Array(n), c: new Uint8Array(n) };
  for (let i = 0; i < n; i++) spawn(i);
  frames = 0; done = false; x.clearRect(0, 0, W, H); x.fillStyle = css.getPropertyValue('--paper'); x.fillRect(0, 0, W, H);
  return true;
}
function step() {
  if (P.fade) {                                                                   // comet mode. Every 8th pass is strong, or 8-bit rounding leaves a permanent ghost
    x.globalCompositeOperation = 'source-over'; x.globalAlpha = frames % 8 ? P.fade : P.fade * 4; x.fillStyle = css.getPropertyValue('--paper'); x.fillRect(0, 0, W, H); }
  x.globalAlpha = P.alpha; x.lineWidth = P.width;
  for (let k = 0; k < inkset.length; k++) {                                       // one path per colour: thousands of strokes become three draw calls
    x.strokeStyle = inkset[k][0]; x.beginPath();
    for (let i = 0; i < n; i++) if (b.c[i] === k) {
      const px = b.x[i], py = b.y[i], e = 1.2;
      let vx = (psi(px, py + e) - psi(px, py - e)) / (2 * e), vy = -(psi(px + e, py) - psi(px - e, py)) / (2 * e);
      const s = P.step / Math.max(.6, Math.hypot(vx, vy));                        // constant speed along the line, so ink density stays even
      const nx = px + vx * s, ny = py + vy * s;
      x.moveTo(px, py); x.lineTo(nx, ny); b.x[i] = nx; b.y[i] = ny;
      if (++b.age[i] > P.life || nx < -8 || ny < -8 || nx > W + 8 || ny > H + 8) { spawn(i); b.age[i] = 0; }
    }
    x.stroke();
  }
  frames++;
}
function tick() {
  raf = 0; step();
  if (!P.fade && frames >= P.budget) { done = true; return; }                     // a drawing that finishes, then costs nothing
  if (seen) raf = requestAnimationFrame(tick);
}
function wake() { if (!raf && seen && !done && !calm.matches) raf = requestAnimationFrame(tick); }
function still() {                                                                // reduced motion: draw the whole map unseen in slices, then show it once
  const go = () => { const end = performance.now() + 12; while (frames < P.budget && performance.now() < end) step();
    if (frames < P.budget) setTimeout(go, 0); else canvas.classList.add('on'); };
  go();
}
await document.fonts.ready;
resize();
if (calm.matches) still(); else { canvas.classList.add('on'); wake(); }
new ResizeObserver(() => { if (resize()) { if (calm.matches) { canvas.classList.remove('on'); still(); } else wake(); } }).observe(hero);
new IntersectionObserver(([e]) => { seen = e.isIntersecting; if (seen) wake(); else { cancelAnimationFrame(raf); raf = 0; } }).observe(hero);
addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;                                          // on touch the map simply draws itself
  const r = hero.getBoundingClientRect(); pointerAt = [e.clientX - r.left, e.clientY - r.top];
  if (done) { done = false; frames = P.budget - 120; wake(); }                    // moving the pointer buys two more seconds of ink
}, { passive: true });
```
Markup: canvas with `.gl`, and `#stone` wrapping the headline and lede. Poster: a `repeating-radial-gradient` of faint lines in `--mid`. Give the canvas `background: var(--paper)`.

**Variations.**
- Survey (the defaults): dense contour map with eddies.
- Current: `scale: .0034, wander: .8, stream: 2.2, budget: 420`. Parallel strands, calm and combed.
- Fingerprint: `scale: .0011, wander: 3.2, stream: .25, budget: 900, alpha: .14`. Huge slow whorls.
- Comet: `fade: .05, alpha: .6, life: 110, count: 1200, width: 1.1, step: 2.2`. Moving trails that never finish.

**Mobile.** 620 lines, and the pointer term is ignored for touch so a scroll does not bend the map. Height-only resizes are ignored, because restarting would wipe the drawing whenever the URL bar moved.

**Fallback.** Reduced motion computes the whole drawing unseen in 12 ms slices, then shows it once. That gives those users the finished piece, not a blank.

**How it goes wrong.** Angle-from-noise instead of curl: lines collapse into sinks and leave holes, which is why flow is the curl of a stream function. Spawning inside a body: flow is zero there, so it stamps dots. Fading with low alpha: 8-bit rounding leaves a permanent ghost, so every 8th pass in Comet is four times stronger. Running forever: a finished drawing costs nothing, and that restraint is part of the look.

## 7. Goo

Part A is a lit liquid in WebGL: an exponential smooth union of circles gives a signed distance, and a bevel on that distance gives a flat wet top with a rounded rim. Part B is the same idea with no canvas, for small UI. It feels wet and playful. Use A for food, drink, cosmetics or a playful brand, and B for a tab or menu indicator. Wrong for sober brands.

Do not build this on an inverse-square metaball field. The field peaks at every ball centre, which gives a dimpled blob. Distance gives a clean surface.

**Numbers.** Ten balls plus the pointer. `uK` 26, so blending happens over about .04 of the short side. `uBevel` .085. Speed .16. Shadow .3 cast by `[.01, .02]`. Pointer ball radius .085 at 3.5/s. Scroll pulls small drops down faster than large ones. Goo tabs: blur 9, threshold `22 -9`, lead blob .55 s `cubic-bezier(.3, 1.35, .4, 1)`, chaser .85 s `cubic-bezier(.5, 0, .1, 1)`.
```js
import { stage, program, palette, pointer, progress, HEAD } from './stage.js';

const GOO = HEAD + `
uniform vec3 uBall[12]; uniform int uCount; uniform vec2 uCast;
uniform float uK, uBevel, uFlat, uMetal, uShadow;
float field(vec2 p, out vec2 g){           // exponential smooth union of circles, with its exact gradient
  float s = 1e-9; g = vec2(0.);
  for (int i = 0; i < uCount; i++) { vec2 e = p - uBall[i].xy; float l = length(e) + 1e-5, w = exp(-uK * (l - uBall[i].z)); s += w; g += w * e / l; }
  g /= s; return -log(s) / uK; }
void main(){
  vec2 px = gl_FragCoord.xy, uv = (px - .5 * uRes) / min(uRes.x, uRes.y), g, g2;
  float d = field(uv, g), w = fwidth(d) + 1e-4, a = 1. - smoothstep(-w, w, d);
  float sh = (1. - smoothstep(-.015, .04, field(uv + uCast, g2))) * uShadow;        // a second lookup, offset, is the contact shadow on the page
  vec3 c = vec3(0.);
  if (a > 0.) {
    float b = clamp(1. + d / uBevel, 0., 1.), inner = smoothstep(0., uBevel * 1.1, -d);  // b: 0 on the flat top, 1 at the rim
    vec2 swell = vec2(noise(uv * 2.6 + uTime * .05), noise(uv * 2.6 + 7. - uTime * .04)) * .09;  // no liquid surface is dead flat
    vec3 n = normalize(vec3(normalize(g + 1e-6) * b + swell, sqrt(1. - b * b)));
    vec3 R = reflect(vec3(0., 0., -1.), n);
    float fres = .04 + .96 * pow(1. - n.z, 4.), up = R.y * .5 + .5;
    vec3 env = mix(uPal[0], uPal[1], smoothstep(.05, .45, up));                    // a studio built only from the brand palette
    env = mix(env, uPal[3], smoothstep(.6, .95, up));
    float box = smoothstep(.0, .05, .3 - abs(R.x + .3)) * smoothstep(.0, .05, R.y - .62) * smoothstep(.0, .05, .94 - R.y);   // one soft box is what says wet
    vec3 body = ramp(.62 - .34 * inner);                                           // thin liquid is pale, deep liquid is dark
    body += uPal[2] * pow(max(dot(n.xy, normalize(vec2(.45, -.9))), 0.), 1.4) * .75;   // light that came through and exits the far rim
    c = mix(body, env, mix(fres, 1., uMetal)) + uPal[3] * box * mix(.85, 1.5, uMetal);
    c = mix(c, uPal[2], uFlat);
  }
  float under = sh * (1. - a);             // premultiplied: shadow under, liquid over
  outColor = vec4(encode(c, px) * a + pow(uPal[0], vec3(.45)) * under, a + under);
}`;

const P = { speed: .16, spread: 1, uK: 26, uBevel: .085, uFlat: 0, uMetal: 0, uShadow: .3, grab: .085, ease: 3.5, drip: .5 };
const hero = document.getElementById('hero'), canvas = hero.querySelector('canvas'), pal = palette(hero, '--deep', '--body', '--light', '--accent');
const ptr = pointer(canvas, P.ease);
const orbit = [ // cx, cy, ax, ay, wx, wy, phase, radius. Big ones anchor the mass; small ones wander out and get reabsorbed
  [.34, .2, .05, .03, 1, .7, 0, .15], [.5, .28, .04, .03, .8, 1.1, 1, .1], [.17, .3, .05, .03, 1.2, .9, 2, .1], [.44, .05, .06, .05, .7, 1.3, 3, .095],
  [.24, .08, .08, .05, .9, 1.4, 4, .08], [.6, .12, .05, .08, 1.1, .8, 5, .07], [.36, -.12, .07, .06, 1.3, .9, 6, .06], [.06, .2, .1, .05, 1.5, 1.2, 7, .05],
  [.58, -.1, .05, .08, 1.4, 1.1, 8, .04], [.12, .4, .12, .03, .6, 1.6, 9, .05]];
const balls = new Float32Array(12 * 3);
let shader, grab = -.2;
stage(canvas, {
  alpha: true, stillAt: 21,
  init: gl => { shader = program(gl, GOO); },
  frame: (gl, s) => {
    ptr.step(s.dt);
    const wide = s.w > s.h, m = Math.min(s.w, s.h), [ox, oy, zoom] = wide ? [-.04, 0, 1] : [-.3, .5, .86], t = s.t * P.speed * 6.283, scroll = progress(hero);
    orbit.forEach(([cx, cy, ax, ay, wx, wy, ph, r], i) => {
      balls[i * 3] = (cx + ox + ax * P.spread * Math.sin(t * wx * .23 + ph)) * zoom;
      balls[i * 3 + 1] = (cy + oy + ay * P.spread * Math.cos(t * wy * .23 + ph * 1.7)) * zoom - scroll * P.drip * (1.2 - r * 6);  // scrolling pulls small drops down faster than the mass
      balls[i * 3 + 2] = r * zoom;
    });
    grab += ((ptr.inside ? P.grab : -.2) - grab) * (1 - Math.exp(-6 * s.dt));         // the pointer is one more ball, grown in, never popped
    balls[30] = (ptr.x - .5) * s.w / m; balls[31] = (ptr.y - .5) * s.h / m; balls[32] = grab;
    shader.use({ uRes: [s.w, s.h], uTime: s.t, uPal: pal, uBall: balls, uCount: [11], uK: P.uK, uBevel: P.uBevel, uFlat: P.uFlat, uMetal: P.uMetal, uShadow: P.uShadow, uCast: [.01, .02] });
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
});

// Part B: the same idea with no canvas at all. Two blobs, one late, inside a blur plus alpha threshold.
const tabs = document.getElementById('tabs'), blobs = tabs.querySelector('.blobs'), buttons = [...tabs.querySelectorAll('button')];
buttons.forEach((b, i) => b.addEventListener('click', () => {
  buttons.forEach(o => o.setAttribute('aria-selected', o === b));
  blobs.style.setProperty('--x', b.offsetLeft + 'px');
}));
```
Part B filter and CSS. The filter box holds no text, and the labels sit above it, so type is never blurred.
```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="goo" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9"/></filter></svg>
```
```css
.tabs { position: relative; display: inline-grid; grid-auto-flow: column; grid-auto-columns: 132px; margin-top: 28px; }
.tabs button { position: relative; z-index: 1; height: 52px; border: 0; background: none; font: 500 16px 'DM Sans', system-ui, sans-serif; color: var(--ink); cursor: pointer; transition: color .25s linear; }
.tabs button[aria-selected="true"] { color: var(--cream); }
.tabs button:focus-visible { outline: 2px solid var(--ink); outline-offset: -6px; border-radius: 26px; }
.blobs { position: absolute; inset: -14px; filter: url(#goo); pointer-events: none; }     /* the filter box is small and holds no text */
.blobs i { position: absolute; left: 14px; top: 14px; width: 132px; height: 52px; border-radius: 26px; background: var(--ink); transform: translateX(var(--x, 0));
  transition: transform .55s cubic-bezier(.3, 1.35, .4, 1); }
.blobs i + i { transform: translateX(var(--x, 0)) scale(.78); transition: transform .85s cubic-bezier(.5, 0, .1, 1); }
@media (prefers-reduced-motion: reduce) { .blobs i { transition: none; } }
@media (max-width: 480px) { .tabs { grid-auto-columns: 108px; } .blobs i { width: 108px; } }
```
Markup: `.tabs` containing `.blobs` with two `<i>`, then the buttons.

**Variations.**
- Honey (the defaults): thin pale edges, dark amber body.
- Mercury: `uMetal: 1, uBevel: .12, speed: .4` with a black-to-white palette on a dark page. Pure reflection.
- Poster: `uFlat: 1, uShadow: 0, uK: 18, speed: .5`. A flat shape, cut-paper and graphic.
- Lava: `speed: .06, uK: 12, spread: 2.4, uBevel: .14`. Vast and slow.

**Mobile.** The mass moves to the top third of a portrait screen and the type sits below. A drag is a scroll, so the pointer ball is rare on touch and the drift has to carry the piece.

**Fallback.** The poster is one flat blob in `--light`. Reduced motion draws one still at `stillAt: 21`. The tabs still work with transitions off.

**How it goes wrong.** Missing the highlight: one small crisp soft box is what says wet, and without it the shape is a blob of colour. Blur on text: keep goo filters off anything readable. A huge filter box: `feGaussianBlur` is expensive, so keep it around a small element. Sitting the mass over the headline: place the composition so it stays clear of the type.

## 8. SVG turbulence and displacement

Turbulence displacing real DOM: lino-cut letter edges, a deckled paper sheet, grain, and a brief heat haze on a button. It feels handmade, and the text stays selectable and indexable. Use it on a handful of small elements. Wrong for animating large areas each frame, because SVG filters are slow to rasterise.

**Numbers.** Rough edge: `baseFrequency` .035, 3 octaves, `scale` 7. Boil at 8 fps through three pre-built seeds. Deckle: .022, 5 octaves, `scale` 26. Heat: `baseFrequency=".012 .11"`, peak 15, 620 ms cubic out. Grain: `.8`, 3 octaves, alpha `.26 -.1`.
```html
<!-- All filters declare sRGB. In the default linearRGB, neutral grey is not neutral and the whole element slides sideways. -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="rough-0" color-interpolation-filters="sRGB" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" seed="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter>
  <filter id="rough-1" color-interpolation-filters="sRGB" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter>
  <filter id="rough-2" color-interpolation-filters="sRGB" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" seed="17" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G"/></filter>
  <filter id="deckle" color-interpolation-filters="sRGB" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".022" numOctaves="5" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G"/></filter>
  <filter id="heat" color-interpolation-filters="sRGB" x="-12%" y="-30%" width="124%" height="160%"><feTurbulence type="fractalNoise" baseFrequency=".012 .11" numOctaves="2" seed="5" result="n"/><feDisplacementMap id="heat-map" in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
</svg>
```
```css
/* Grain as a static SVG data URI: rasterised once and cached, so it costs nothing per frame. */
body { color: var(--ink); font: 400 18px/1.45 'Courier Prime', ui-monospace, monospace; background-color: var(--stock);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .08 0 0 0 0 .07 0 0 0 0 .06 0 0 0 .26 -.1'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)'/%3E%3C/svg%3E"); }
h1 { filter: url(#rough-0); }
.sheet::before { content: ''; position: absolute; inset: 0; background: #fbf8f0; filter: url(#deckle) drop-shadow(0 6px 10px rgb(20 19 18 / .22)); }
```
```js
// All of this is decoration on real DOM text, so with no JavaScript the page keeps its static rough edge.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Boil: step through pre-built seeds at 8 fps. Stepped is the look, and it is far cheaper than animating noise every frame.
  const title = document.getElementById('title'); let i = 0, timer = 0;
  const run = on => { clearInterval(timer); if (on) timer = setInterval(() => { title.style.filter = `url(#rough-${i = (i + 1) % 3})`; }, 125); };
  new IntersectionObserver(([e]) => run(e.isIntersecting)).observe(title);

  // Heat haze on hover: spike the displacement, ease out, then remove the filter so the button rests as plain DOM.
  const cta = document.getElementById('cta'), map = document.getElementById('heat-map');
  let raf = 0, t0 = 0; const peak = 15;                                          // more than a third of the text height stops being legible
  const frame = now => {
    const t = Math.min(1, (now - t0) / 620), k = (1 - t) ** 3;                    // 620ms, cubic out from the peak
    map.setAttribute('scale', (peak * k).toFixed(1));
    if (t < 1) raf = requestAnimationFrame(frame); else { raf = 0; cta.style.filter = ''; }
  };
  const play = () => { t0 = performance.now(); cta.style.filter = 'url(#heat)'; if (!raf) raf = requestAnimationFrame(frame); };
  cta.addEventListener('pointerenter', play); cta.addEventListener('focus', play);    // pointerenter also fires on tap, so touch gets it too
})();
```
Markup: `<h1 id="title">`, `<a id="cta">`, and `.sheet` as a positioned box with an inner SVG.

**Variations.**
- Lino (the defaults).
- Letterpress: `scale` 2 and `baseFrequency` .9, a barely-there ink spread.
- Torn: `scale` 18 and `baseFrequency` .012, big soft bites.

**Mobile.** `pointerenter` fires on tap, so the haze still plays once. Reduce `scale` by about a third below 480 px, because displacement is in px and looks larger on small type.

**Fallback.** Everything is decoration on real DOM. With no JS the static edge remains. Reduced motion skips the boil and the haze.

**How it goes wrong.** Leaving out `color-interpolation-filters="sRGB"`: in the default linearRGB neutral grey is not neutral, so the element slides sideways. Animating `baseFrequency`: it re-rasterises noise each frame; step seeds instead. Leaving a filter on at rest: remove it when the animation ends. Grain as a live filter on `body`: use a static data URI, rasterised once. Check in Safari, which has handled reference filters on HTML less reliably; keep the effect optional.

## 9. Ripple pool

A wave equation on a small grid, used to refract a painted pool floor, headline included. Touching the water bends the type. It feels calm and physical. Use it for water, wellness, or a slow luxury brand. Wrong when the headline must stay legible at all times, or the device lacks float render targets; then the poster stays.

**Numbers.** Grid is CSS width / 3, clamped to 256 to 512 cells. Fixed 60 Hz steps, at most three per frame, or a 120 Hz screen gets double waves. Wave speed .36; above .5 it explodes. Damping .9965 per step. Drop radius .026 of height. Refraction .9. Rain every 1.2 s on average so it lives on touch screens. One strong drop on arrival through the type.
```js
import { stage, program, palette, inks, paintText, texture, HEAD } from './stage.js';

// Wave equation on a small grid. Red holds height, green holds velocity. Each step reads the last state and writes the next.
const SIM = `#version 300 es
precision highp float;
uniform sampler2D uPrev; uniform vec2 uTexel; uniform vec3 uDrop; uniform float uRadius, uSpeed, uDamp, uAspect;
out vec4 outColor;
void main(){
  vec2 uv = gl_FragCoord.xy * uTexel, s = texture(uPrev, uv).rg;
  float sum = texture(uPrev, uv + vec2(uTexel.x, 0)).r + texture(uPrev, uv - vec2(uTexel.x, 0)).r + texture(uPrev, uv + vec2(0, uTexel.y)).r + texture(uPrev, uv - vec2(0, uTexel.y)).r;
  float v = (s.g + uSpeed * (sum - 4. * s.r)) * uDamp, h = (s.r + v) * .9992;       // uSpeed above .5 explodes
  vec2 d = (uv - uDrop.xy) * vec2(uAspect, 1.);
  float r2 = dot(d, d) / (uRadius * uRadius);
  h += uDrop.z * (1. - r2) * exp(-r2);                 // zero net volume: a plain Gaussian would just lift the whole pool
  outColor = vec4(h, v, 0, 1);
}`;
const WATER = HEAD + `
uniform sampler2D uSim, uPlate; uniform vec2 uSimRes; uniform float uBend, uShine, uCaustic;
void main(){
  vec2 px = gl_FragCoord.xy, uv = px / uRes, e = 1. / uSimRes;
  float l = texture(uSim, uv - vec2(e.x, 0)).r, r = texture(uSim, uv + vec2(e.x, 0)).r, b = texture(uSim, uv - vec2(0, e.y)).r, t = texture(uSim, uv + vec2(0, e.y)).r;
  vec2 g = vec2(r - l, t - b);
  vec3 c = texture(uPlate, uv + g * uBend).rgb;                                     // refraction: read the floor through the slope. Already linear (SRGB8_ALPHA8)
  c *= 1. + uCaustic * clamp((l + r + b + t - 4. * texture(uSim, uv).r) * 130., -.6, 2.);   // curvature focuses light on the floor
  vec3 n = normalize(vec3(-g * 12., 1.)), H = normalize(vec3(.12, .22, 1.));
  c += uPal[3] * pow(max(dot(n, H), 0.), 300.) * uShine;      // tilt H enough that flat water adds nothing, or the pool goes milky
  outColor = vec4(encode(c, px), 1.);
}`;

const P = { grid: 3, minGrid: 256, maxGrid: 512, speed: .36, damp: .9965, radius: .026, bend: .9, shine: .8, caustic: .6, rain: 1.2, drag: .12, tile: 88 };
const hero = document.getElementById('hero'), canvas = hero.querySelector('canvas'), word = document.getElementById('word');
const pal = palette(hero, '--deep', '--body', '--light', '--accent'), css = getComputedStyle(hero);
let sim, water, plate, A, B, W = 0, H = 0, width = 0, ok = true, clock = 0, rain = .4, lastX = 0, lastY = 0;
const queue = [[.5, .55, .55]];                        // one large drop on arrival, right through the type

function target(gl) {                                  // RGBA16F filters linearly in core WebGL2, and renders with either float extension
  const tex = gl.createTexture(), fb = gl.createFramebuffer();
  gl.bindTexture(gl.TEXTURE_2D, tex); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, W, H, 0, gl.RGBA, gl.HALF_FLOAT, null);
  for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
  ok = ok && gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
  return { tex, fb };
}
function floor(s) {                                    // the pool floor is a picture drawn once: gradient, tile lines, and the live headline
  const c = document.createElement('canvas'); c.width = s.w; c.height = s.h;
  const x = c.getContext('2d', { willReadFrequently: true }), k = s.w / canvas.clientWidth, g = x.createRadialGradient(s.w / 2, s.h * .4, 0, s.w / 2, s.h * .4, Math.max(s.w, s.h) * .75);
  g.addColorStop(0, css.getPropertyValue('--body')); g.addColorStop(1, css.getPropertyValue('--deep')); x.fillStyle = g; x.fillRect(0, 0, s.w, s.h);
  x.fillStyle = 'rgb(234 255 244 / .055)'; const t = P.tile * k;
  for (let i = 0; i < s.w; i += t) x.fillRect(i, 0, Math.max(1, k), s.h); for (let j = 0; j < s.h; j += t) x.fillRect(0, j, s.w, Math.max(1, k));
  return paintText(word, canvas, k, css.getPropertyValue('--accent'), c);
}
function allocate(gl, s) {                             // the grid follows CSS width, so a quality-ladder step repaints the floor but keeps the waves
  const w = Math.max(P.minGrid, Math.min(P.maxGrid, Math.round(canvas.clientWidth / P.grid))), h = Math.round(w * s.h / s.w); width = s.w;
  if (w !== W || h !== H) { W = w; H = h; [A, B].forEach(t => { if (t) { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); } }); A = target(gl); B = target(gl); }
  gl.deleteTexture(plate); plate = texture(gl, 1, floor(s), { srgb: true });
  if (!ok) { canvas.remove(); s.pause(); }             // no float targets on this device: the CSS poster and real text stay
}
function step(gl, s) {                                 // one fixed step, so a 120 Hz screen does not get twice the waves
  const d = queue.shift() || [0, 0, 0];
  gl.bindFramebuffer(gl.FRAMEBUFFER, B.fb); gl.viewport(0, 0, W, H); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, A.tex);
  sim.use({ uPrev: 0, uTexel: [1 / W, 1 / H], uDrop: d, uRadius: P.radius, uSpeed: P.speed, uDamp: P.damp, uAspect: s.w / s.h });
  gl.drawArrays(gl.TRIANGLES, 0, 3); [A, B] = [B, A];
}
await document.fonts.ready;
const S = stage(canvas, {
  ladder: false,                                       // the headline lives in this canvas: never let it soften
  init: gl => {
    ok = !!(gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float'));
    sim = program(gl, SIM); water = program(gl, WATER); A = B = plate = null; W = H = width = 0;
  },
  frame: (gl, s) => {
    if (s.w !== width) { allocate(gl, s); if (!ok) return; if (s.calm.matches) {                     // a frozen ring through the type would mangle it for good, so keep drops in the corners
       queue.length = 0; queue.push([.16, .15, .5], [.84, .85, .45]); for (let i = 0; i < 90; i++) step(gl, s); } }
    if (!s.calm.matches) {
      clock += s.dt; rain -= s.dt;
      if (rain < 0) { rain = P.rain * (.5 + Math.random()); queue.push([Math.random(), Math.random(), .25 + Math.random() * .15]); }
      for (let n = 0; clock > 1 / 60 && n < 3; n++, clock -= 1 / 60) step(gl, s);
      clock = Math.min(clock, 1 / 60);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, s.w, s.h);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, A.tex); gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, plate);
    water.use({ uRes: [s.w, s.h], uPal: pal, uSim: 0, uPlate: 1, uSimRes: [W, H], uBend: P.bend, uShine: P.shine, uCaustic: P.caustic });
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
});
const drop = (e, power) => { const r = canvas.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = 1 - (e.clientY - r.top) / r.height;
  if (x < 0 || x > 1 || y < 0 || y > 1) return; const moved = Math.hypot(x - lastX, y - lastY); lastX = x; lastY = y;
  if (power || moved > .012) { if (queue.length < 4) queue.push([x, y, power || Math.min(.22, P.drag + moved)]); } };
addEventListener('pointermove', e => drop(e), { passive: true });
hero.addEventListener('pointerdown', e => drop(e, .5));                    // on the section, or the headline above the canvas swallows the tap
```
Markup: `#hero` holding the canvas, then `<h1 id="word">`. CSS: `.gl.on ~ h1 { color: transparent; transition: color 0s .7s; }`, which waits out the canvas fade so the headline never dips, and canvas `pointer-events: none`. Poster: the same tile lines as `repeating-linear-gradient` over the same radial gradient, so the page looks almost identical with no GL.

**Variations.**
- Pool (the defaults).
- Rain: `rain: .3, radius: .012, damp: .992, bend: .5`. Busy, fine rings.
- Oil: `speed: .12, damp: .999, radius: .06, bend: 1.6`. Slow, heavy swells.
- Glass: `shine: 2, caustic: 0, bend: .5`. Hard highlights, little refraction.

**Mobile.** A tap is a stone, heard on the section so the headline does not swallow it, and scrolling stays free. Rain keeps it alive without touch. The grid floor of 256 stops rings going blurry on narrow screens.

**Fallback.** No float targets or no WebGL2: the canvas is removed and the poster with the real headline stays. Reduced motion runs 90 steps once, with two drops in opposite corners, and freezes the result. Keep them clear of the type: a ring frozen through the headline leaves it mangled for good.

**How it goes wrong.** Gaussian drops add net volume, so the pool lifts and the rings are faint: the `(1 - r²)exp(-r²)` shape has zero mean. A specular half-vector close to vertical lifts all of the flat water into a milky film: tilt it until flat water adds nothing. Tying the grid to backing size wipes the waves when the quality ladder steps: tie it to CSS width.

## Wiring uniforms to GSAP and mixing libraries

Native scroll reading is enough for one value, which is why `progress()` exists. Use GSAP when several things move together, such as a shader, type and a pinned stage. Tween a plain object of numbers, and read it in the frame loop. Dependencies, pinned in the foundations chapter: `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js` and `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js`.
```js
const U = { heat: .28, scale: .9 };             // plain numbers: GSAP writes them, the frame loop reads them
gsap.registerPlugin(ScrollTrigger);
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (calm) U.heat = .7;                          // a designed still, not the empty start of the timeline
else gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '#track', start: 'top top', end: 'bottom bottom', scrub: 1 } })
  .to(U, { heat: 1, scale: 1.6, duration: 1 }, 0)
  .to('#head', { yPercent: -40, opacity: .15, duration: .5 }, .5);
```
Then pass `uHeat: U.heat` in `frame`. Markup: `#track` holding `#pin`, which holds the canvas and `#head`. CSS: `.js:not(.still) #track { height: 300lvh; }` and `.js:not(.still) .pin { position: sticky; top: 0; height: 100lvh; }`. Sticky carries the pin because ScrollTrigger's default `pin: true` reports layout shift (foundations, Recipe 9). On reduced motion no timeline is built, nothing pins and `U` keeps a designed value.

What breaks when you mix:
- ScrollTrigger `pin` on an element that also has CSS `position: sticky`: two systems move it and it jumps. Choose one. Sticky is lighter when nothing else needs the timeline.
- A transform-based smooth scroller: `scrollY` and `getBoundingClientRect` lag or lead its transform, so read progress from ScrollTrigger, not from `progress()`. Lenis is fine: it moves the real scroll position, so `progress()` stays true.
- Two scroll tweens writing one uniform: the last writer wins each frame, so a value flickers. Give each uniform one owner.
- CSS `scroll-behavior: smooth` with `scrub`: it fights programmatic scrolling. Leave it off.
- three.js and raw GL on one canvas: three caches GL state and yours corrupts it. Use two canvases, or `renderer.resetState()` between them, and remember each canvas spends a context.
- Two animation loops (stage and `gsap.ticker`) are fine; at worst a value is one frame late. You do not need to merge them.

## Proving it renders

Run the page through `scripts/shoot.mjs` and look at the contact sheet. A canvas that compiled is not a canvas that drew. Tick these off:
- Not blank, and not merely the poster. Three.js arrives late on a slow machine, so an early frame showing the poster means wait longer, not that it failed.
- Capture with the browser's screenshot, not `canvas.toDataURL`, which returns blank without `preserveDrawingBuffer`.
- Test by forcing each failure: call `gl.getExtension('WEBGL_lose_context').loseContext()` then `restoreContext()`; make `getContext` return null; disable JavaScript; emulate reduced motion; scroll the canvas away and count `requestAnimationFrame` calls; emulate DPR 3 and read `canvas.width / canvas.clientWidth`.
- Check text by reading the DOM, not the picture: the real headline must exist with opacity above zero in every state, including during a forced context loss, when a canvas-hidden headline can vanish.
- Look at the no-JS and reduced-motion frames with your own eyes. Metrics pass a headline frozen behind a ripple and a grid of broken images, because both still count as text and pixels.
- Open on the first screen with no scrolling. An effect that needs a scroll before it shows anything has no first impression.
- Under heavy load the quality ladder fires in headless runs, so a soft frame may be your machine. A frame that shows a tiled copy of the page is a capture glitch; shoot again before debugging it.

Everything here was verified in headless Chrome 156 on macOS with the ANGLE Metal renderer. Safari and Firefox were not run, so test there before relying on `paintText` letter spacing, SVG reference filters, or `RGBA16F` render targets.
