# Components: objects people want to touch

Read this before you build anything a person will look at closely or operate. It replaces the habit of reaching for tabs, accordions, cards and tiles.

A UI kit gives you containers. Tabs, cards, accordions and tiles hold content, and they hold anyone's content, which is why a page built from them feels like anyone's page. Polishing them does not help. A card with a nicer shadow is still a card. The components people remember are objects from this business that you can do something to.

## The ladder

Every component sits on one of these rungs. Write the rung in your scene card. A finished page has at least three components on rung 3 or 4, and nothing below rung 2 except forms and navigation.

| Rung | What it is | Rates at a bank | Reviews at a bakery |
|---|---|---|---|
| 0 Kit | Default container, default content | A table of rates | Three quote cards |
| 1 Themed | The kit, restyled | A ruled list of rates in a nice font | Quote cards on cream with a serif |
| 2 Object | The thing the business really handles, drawn with care | A printed rate board, photographed behind the counter | Handwritten order tickets pinned to a rail |
| 3 Operable | That object, and you can do what its owner does to it | Drag your balance and watch the interest pile up | Tear a ticket off the rail to read the next |
| 4 Personal | It answers with your numbers, your place, your situation | Say what you take a month and it tells you what you would have saved by January | Pick your day and it shows what will be in the window at 7am |

## How to invent one

Do this for each scene before you open a code file. It takes one minute per scene and it is the most valuable minute in the build.

1. **Name the noun.** What does this business physically handle? A bill, a key, a loaf, an X-ray, a route, a tide table, a swatch, a ticket, a ledger. Not "feature". Not "benefit".
2. **Name the verb.** What does its owner do to that noun all day? Weigh, split, stamp, tear, tune, flip, stack, thread, score, seal, pour.
3. **Join them.** That is the component. Tearing a ticket. Weighing a loaf. Splitting a payment. Dialling a rate. Threading a route.
4. **Make it answer.** A value someone types or drags should change something they care about, at once.
5. **Hide one thing.** One detail you only find by playing: a stamp lands harder if you flick it, the last card in the stack says something else, a very large number makes the copy raise an eyebrow.

Then check it against the swap test. Could a competitor use it unchanged? If yes, it is on rung 1, however clever the animation.

## The finish bar

A component is finished when all of this is true. This is the difference between a demo and something made.

- **Six states.** Rest, hover, pressed, keyboard focus, busy, and done or error. Each one looks designed. An unstyled focus ring on a beautiful control is a giveaway.
- **Instant answer.** Input responds within one frame. Anything that takes longer shows it has heard you within 100ms.
- **Weight.** Things that move have mass. Use spring-like easing such as `cubic-bezier(.22,1,.36,1)` for settling, and let dragged objects lean a little in the direction of travel.
- **Edges.** Real corners, real shadows that match the page's light, a hairline where two materials meet. Look at it at 200 percent zoom.
- **Real content at real density.** Named things, believable numbers, one awkward value. Never a placeholder and never three items of equal length.
- **Works by keyboard and by thumb.** Use a native control under the skin wherever you can: `input type=range` for anything dragged, `button` with `aria-expanded` for anything opened. A range input that has been restyled or covered is the cheapest way to get drag, touch, keyboard and screen reader support at once.
- **Survives reduced motion.** It still works, it just arrives without travelling.

## Instead of this, build that

If you are about to type the left column, stop. These are starting points, so change them to fit the business.

| About to build | Build instead |
|---|---|
| Stat tiles or a row of numbers | One number as big as the window with a picture in it, or a quantity shown literally: 1,240 customers as 1,240 dots, a year as 365 marks |
| Ruled list of rates or prices | A rate you operate: an odometer on a slider tied to the visitor's own figure. Or the object wears its price: a real thing in a photograph with the figure sitting on it. Or a number with an object as its next character. If people need the plain list, offer a switch to a plain-text version of the page |
| Feature cards | A photograph with notes hung on the real things in it. Objects in the picture that are the menu: hover the shelf and it lights, click it and it opens. One object, exploded, with the parts named |
| Three steps with numbers | A day you scrub through, with a playhead on a 24-hour rule and the story changing as you drag. Or a film strip |
| Tabs around a screenshot | The product doing the job on its own, with a visible playhead you can grab |
| Logo wall | Named places, trades or schools as big type that drifts past, or a map of where customers are |
| Quote cards | A stack you throw aside one at a time. One huge quote on a full-bleed portrait. A waveform with a transcript that lights up as it plays |
| Team grid | Columns that take turns. Or people photographed at the same moment of the working day |
| FAQ accordion on its own | An input where you type your worry and the closest answer appears, signed by a person, with the full list underneath. A safety promise shown as one lit photograph, such as a porch lamp on a front door. A promise on black that only lights up under your cursor |
| Article cards | A huge list with a picture that follows the cursor. Or one lead story with its picture filling the screen |
| Pricing columns | A sentence you complete, ending in your real price. Or one honest price set enormous with everything it includes hung around it |
| Contact form | A form written as a sentence with blanks in it |
| List of locations | The address set as one big typographic composition. Details painted onto a straight-on photograph of the building. A diagram of the area in the brand's own language, or postcards you deal out, one per place |
| Before and after paragraphs | A drag handle across two pictures |
| Coloured call-to-action band | The last picture on the page, full-bleed, with the action sitting in its calm zone |
| Footer columns on white | Keep the links, but let the footer be a place: a final image, a huge wordmark, the time and weather at the premises |

## Proven parts

These were built and tested. Use them as a base, and change the look so they belong to the page.

### Rolling numerals

Each digit is a column of 0 to 9 that slides. It reads as a machine, and it makes any calculation feel physical.

```js
function odometer(el){ let cur='';
  return v=>{ const s=v.toLocaleString('en-GB');
    if(s.length!==cur.length){ el.textContent=''; [...s].forEach(ch=>{ const c=document.createElement('span'); c.className='c';
      if(/\d/.test(ch)){ const r=document.createElement('span'); r.className='r'; for(let i=0;i<10;i++){const d=document.createElement('span');d.textContent=i;r.append(d)} c.append(r) } else c.textContent=ch;
      el.append(c) }) }
    [...s].forEach((ch,i)=>{const r=el.children[i].querySelector('.r'); if(r) r.style.transform=`translateY(${-ch}em)`});
    cur=s; el.setAttribute('aria-label',s) } }
```
```css
.odo{display:inline-flex;height:1em;line-height:1;overflow:hidden;font-variant-numeric:lining-nums tabular-nums}
.odo .c{display:inline-block;height:1em;overflow:hidden}
.odo .r{display:block;transition:transform .8s cubic-bezier(.22,1,.36,1)}
.odo .r span{display:block;height:1em}
```

Tie it to `input type=range`, write the track fill from a CSS variable, and scale the thumb on `:active`.

### A form that is a sentence

The visitor completes a line of display type. It takes less effort than a form, and the answer is already personal.

```html
<form class="say">I am a <select aria-label="Your trade"><option>nurse</option><option>chef</option>…</select> in <input aria-label="Your town" placeholder="your town"> and I take about <input aria-label="Monthly takings" placeholder="£4,000" inputmode="numeric"> a month</form>
```
```css
.say{font-size:clamp(32px,4.6vw,64px);line-height:1.18}
.say input,.say select{font:inherit;color:var(--accent);background:none;border:0;border-bottom:.06em solid currentColor;padding:0;outline:0;appearance:none;border-radius:0;field-sizing:content;min-width:1.5em;max-width:100%}
.say input:focus,.say select:focus{border-bottom-color:var(--ink)}
```

`field-sizing:content` makes the blank grow as you type. Where it is unsupported, the fields keep a sensible width.

### Drag across two pictures

A range input stretched over the frame gives you drag, touch, keyboard and a screen reader label for nothing.

```html
<div class="cmp"><img src="before.webp" alt="Before"><img class="b" src="after.webp" alt="After"><input type="range" min="0" max="100" value="50" aria-label="Compare before and after"><i></i></div>
```
```css
.cmp{position:relative;aspect-ratio:16/8;overflow:hidden;--x:50%;touch-action:pan-y}
.cmp img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.cmp .b{clip-path:inset(0 0 0 var(--x))}
.cmp i{position:absolute;top:0;bottom:0;left:var(--x);width:2px;margin-left:-1px;background:#fff;pointer-events:none}
.cmp input{position:absolute;inset:0;width:100%;height:100%;opacity:0;margin:0;cursor:ew-resize}
.cmp input:focus-visible~i{outline:2px solid var(--accent);outline-offset:2px}
```
```js
cmp.querySelector('input').addEventListener('input',e=>cmp.style.setProperty('--x',e.target.value+'%'));
```

### A deck you throw

Cards stacked with a slight fan. Drag the top one and it leans. Past 110px it flies away and the rest rise to fill the gap. Arrow keys do the same.

```js
const lay=()=>[...d.children].forEach((c,i,a)=>{const n=a.length-1-i;c.style.transform=`translateY(${n*10}px) scale(${1-n*.04}) rotate(${n?(n%2?-2:2):0}deg)`;c.style.zIndex=i;c.style.opacity=n>2?0:1});
const toss=(c,dir)=>{c.style.transform=`translate(${dir*120}%,-6%) rotate(${dir*16}deg)`;c.style.opacity=0;setTimeout(()=>{c.style.transition='none';d.prepend(c);lay();c.offsetWidth;c.style.transition=''},380)};
let x0=0,cur=null;
d.addEventListener('pointerdown',e=>{const c=e.target.closest('.card');if(c!==d.lastElementChild)return;cur=c;x0=e.clientX;c.classList.add('drag');c.setPointerCapture(e.pointerId)});
d.addEventListener('pointermove',e=>{if(!cur)return;const dx=e.clientX-x0;cur.style.transform=`translate(${dx}px,${-Math.abs(dx)*.04}px) rotate(${dx*.05}deg)`});
const end=e=>{if(!cur)return;const dx=e.clientX-x0,c=cur;cur=null;c.classList.remove('drag');Math.abs(dx)>110?toss(c,Math.sign(dx)):lay()};
d.addEventListener('pointerup',end);d.addEventListener('pointercancel',end);
d.tabIndex=0;d.addEventListener('keydown',e=>{if(e.key==='ArrowRight')toss(d.lastElementChild,1);if(e.key==='ArrowLeft')toss(d.lastElementChild,-1)});
```

Give `.card` a transition on `transform`, remove it under `.drag`, and set `touch-action:pan-y` on the deck so the page can still scroll.

### A day you scrub

A range input styled as a 24-hour ruler, with a thin playhead for a thumb. Below it, a sentence that changes with the hour. Any process that happens over time works this way.

```css
.day input{width:100%;appearance:none;height:64px;margin:0;cursor:ew-resize;background:repeating-linear-gradient(90deg,var(--line) 0 1px,transparent 1px calc(100%/24))}
.day input::-webkit-slider-thumb{appearance:none;width:3px;height:64px;background:var(--accent)}
.day input::-moz-range-thumb{width:3px;height:64px;border:0;border-radius:0;background:var(--accent)}
```

### Notes on a picture

Buttons placed in percentages over a photograph, 44px hit area with a 16px visible dot, each opening a small note. Keep to five. See composition 8.

```css
.pin{position:absolute;width:44px;height:44px;margin:-22px;border:0;background:none;cursor:pointer}
.pin::before{content:"";position:absolute;inset:14px;border-radius:50%;background:#fff;transition:box-shadow .3s}
.pin:hover::before,.pin[aria-expanded=true]::before{box-shadow:0 0 0 10px rgba(255,255,255,.28)}
```
