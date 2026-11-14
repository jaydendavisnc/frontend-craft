# Composition: pictures and display type in one space

Read this before you lay out a scene that has a photograph in it.

**The limit, from blind reviews.** Type may share space with a picture only in a calm zone, and only where the picture was chosen for it. It must never touch, cross or hide behind the picture's subject, and a headline must never be split around a photograph. Do this once or twice on a page, not in every scene. Panels marked down collisions, clipped headlines and cut-outs on empty grounds more than they marked down pictures and words set side by side with care.

A template keeps pictures and words apart. Heading goes here, picture goes there, each in its own rectangle, with a gutter between them to keep the peace. Almost every generated page does this, and tidy spacing cannot hide it. On the pages people remember, the two share one space. The word goes behind the shoulder. The photograph opens through a letter. A price sits on the wood it is talking about. The caption hangs from the thing it describes, and when you scroll the picture and the sentence move together because they are one object.

**The test.** Cover the text in your scene. Does the picture still have a reason to be that shape, in that place? Then cover the picture. Does the text still have a reason to be that size? If either answer is no, they are not composed, they are only adjacent.

Everything here was built and shot before being written down. The mistakes listed are the ones that really happened.

## Contents

[How to see a photograph as a layout](#how-to-see-a-photograph-as-a-layout) · [Eleven compositions](#eleven-compositions) · [Legibility without a scrim](#legibility-without-a-scrim) · [Scale](#scale) · [Rhythm across a page](#rhythm-across-a-page) · [Phones](#phones)

## How to see a photograph as a layout

Before placing anything, look at the picture and name four things. Write them in your scene card.

1. **The subject.** The one thing the eye lands on. If you cannot say what it is, it is the wrong picture.
2. **The calm zone.** The area with the least detail, usually a wall, sky, tabletop or shadow. Display type goes here, and it may be much larger than you think.
3. **The direction.** Where the subject faces or leans, and where the light comes from. Text placed in front of a gaze gets read. Text placed behind someone's back feels abandoned.
4. **The edge.** Which side can bleed off the page. Crop towards the subject. A picture cropped tighter than feels comfortable looks authored, and a picture shown whole looks like stock.

Choose pictures for these qualities, not for their topic. Between two photographs of a baker, take the one with a dark wall beside her. A strong picture with a large calm zone is worth ten that are merely on topic.

**Pick two distances and alternate.** One macro of material or hands, one wide of the place. A page of only medium shots has no rhythm. Hands doing the work are almost always better than a face looking at the camera, and they avoid every stock-person problem.

## Eleven compositions

Each is a move a template cannot produce. Use at least three different ones on a page, and never the same one twice in a row. Selectors are short here, so rename them.

### 1. Word behind the subject

**Looks like.** A photograph fills the screen. A single huge word, 18 to 26vw, spans it. The person or object in the picture stands in front of the word, so the letters pass behind their shoulder and come out the other side. It looks like a magazine cover and it is the single fastest way to make a page look expensive.

**Build.** Three stacked layers from one photograph. Make the cut-out with `scripts/cutout.swift`, or render with a transparent ground, so the top layer registers exactly over the bottom one.

```html
<section class="sw">
  <img class="plate" src="photo-2400.webp" alt="">
  <h1 class="word">Yours</h1>
  <img class="subject" src="subject-2400.webp" alt="Describe the person and what they are doing">
</section>
```
```css
.sw{position:relative;height:100svh;min-height:640px;overflow:hidden}
.sw .plate,.sw .subject{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 22%}
.sw .plate{filter:brightness(.62) saturate(.8)}   /* the ground steps back, the cut-out keeps its light */
.sw .word{position:absolute;left:0;right:0;top:50%;transform:translateY(-58%);text-align:center;font-size:22vw;white-space:nowrap}
```
```js
// Three speeds, so the word truly feels between the layers
gsap.to('.sw .word',   {yPercent:-30,ease:'none',scrollTrigger:{trigger:'.sw',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.sw .subject',{yPercent:-6, ease:'none',scrollTrigger:{trigger:'.sw',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.sw .plate',  {scale:1.12,  ease:'none',scrollTrigger:{trigger:'.sw',start:'top top',end:'bottom top',scrub:true}});
```

**Mistakes.** In testing, a subject shot full-width hid the entire word and left one stray letter. The subject should cover no more than 40 percent of the word, so at least half the letters read. Move the subject off-centre with `object-position`, or use a longer word, or choose a narrower subject. Keep the same `object-fit` and `object-position` on both layers or they slip apart. A cut-out needs a clear silhouette, so hair against a busy shelf will fray. Keep the real word in the `h1`.

### 2. A window that opens

**Looks like.** The page is almost empty: a small picture in the middle of a plain ground, with one word either side of it, like a sentence with a photograph for a middle word. Scrolling pins the scene. The window grows until the picture fills the screen and the words are pushed off the edges. A reader feels they walked through it.

**Build.** One sticky stage and a `clip-path`. Clipping is cheap, it keeps the picture at its final scale so it never softens, and it needs no layout change.

```css
.grow{position:relative;height:300vh}
.grow-in{position:sticky;top:0;height:100svh;overflow:hidden;display:grid;place-items:center}
.grow img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.motion .grow img{clip-path:inset(30% 34% 30% 34% round 4px)}   /* only when motion runs, or it stays cropped forever */
.grow .l,.grow .r{position:absolute;top:50%;translate:0 -50%;font-size:9vw;white-space:nowrap;z-index:2;color:#fff;mix-blend-mode:difference}
.grow .l{right:calc(66% + 16px)}.grow .r{left:calc(66% + 16px)}
```
```js
gsap.timeline({scrollTrigger:{trigger:'.grow',start:'top top',end:'bottom bottom',scrub:.4}})
  .to('.grow img',{clipPath:'inset(0% 0% 0% 0% round 0px)',ease:'power2.inOut'},0)
  .to('.grow .l',{x:'-40vw',opacity:0,ease:'power2.in'},0)
  .to('.grow .r',{x:'40vw',opacity:0,ease:'power2.in'},0);
```

**Mistakes.** Dark text went invisible as the picture grew under it, which is why the words use `mix-blend-mode:difference`. The picture must be sharp at full-screen width, so use a source at least 2400px wide. On a phone start from `inset(34% 12%)`, because the side insets are what make it feel like a window.

### 3. Pictures inside the sentence

**Looks like.** A headline of 6 to 8vw where some words are replaced by, or joined by, small photographs set in the line at cap height, like inline emoji made by a photographer. The line reads as one thing and the eye keeps stopping to look.

```html
<h2 class="inl">We keep <i><img src="a.webp" alt=""></i> the books so you can get back to the <i><img src="b.webp" alt=""></i> bench</h2>
```
```css
.inl{font-size:7.4vw;line-height:1.02}
.inl i{display:inline-block;vertical-align:-.08em;height:.78em;width:1.5em;border-radius:.1em;overflow:hidden}
.inl i img{width:100%;height:100%;object-fit:cover}
```
```js
gsap.from('.inl i',{width:0,duration:1,ease:'power3.out',stagger:.15,scrollTrigger:{trigger:'.inl',start:'top 70%'}});
```

**Mistakes.** Pictures narrower than 1.3em turn to mud. Macro crops of texture work, and wide scenes do not. Keep each sentence to two inline pictures.

### 4. Numeral made of the picture

**Looks like.** A number so big it is the composition, 30 to 40vw, with a photograph showing through the digits. A price, a date, a count. The number stops being data and becomes an object.

```css
.num{font-size:34vw;line-height:.86;color:transparent;background:url(wide-2400.webp) 50% 40%/cover;-webkit-background-clip:text;background-clip:text}
```

**Mistakes.** Pale or low-contrast pictures dissolve into a light ground. Use a dark or saturated picture on light, and a bright one on dark. Fat numerals work and thin ones do not. Check the digits are lining figures. Use one of these per page.

### 5. The film strip

**Looks like.** A pinned scene where vertical scroll drives a horizontal strip of pictures of different widths. The first frame is a big title. Each picture carries one small line, such as a time of day. Ordinary list content, like the steps of a process, becomes a walk past a wall.

```css
.strip{height:100svh;overflow:hidden;display:flex;align-items:center}
.track{display:flex;gap:16px;padding:0 32px;width:max-content;align-items:center}
.fr{position:relative;height:72svh;overflow:hidden;flex:none}
.fr img{height:100%;width:120%;max-width:none;object-fit:cover}   /* wider than the frame, so it can drift inside it */
```
```js
const tr=document.querySelector('.track'),dist=()=>tr.scrollWidth-innerWidth;
gsap.to(tr,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'.strip',start:'top top',end:()=>'+='+dist(),pin:true,scrub:.3,invalidateOnRefresh:true}});
```

**Mistakes.** Equal frame widths make it a carousel. Vary them from 26 to 50vw. Call `ScrollTrigger.refresh()` after fonts and images load. On phones, drop the pin and use a native scroll-snap row: pinning a horizontal track fights the thumb.

### 6. Image follows the list

**Looks like.** A list set huge, 5 to 7vw, on a plain ground. The rows are just words. Hover one and a photograph opens beside the cursor and trails it with a little lag, and the other rows fade back. Plain text at rest, a gallery in the hand.

```css
.idx a{display:flex;justify-content:space-between;align-items:baseline;font-size:6vw;transition:opacity .25s,translate .4s var(--ease)}
.idx:hover a{opacity:.35}.idx:hover a:hover,.idx a:focus-visible{opacity:1;translate:14px 0}
.float{position:fixed;left:0;top:0;width:26vw;aspect-ratio:4/3;z-index:9;pointer-events:none;overflow:hidden;clip-path:inset(50% 0 50% 0);transition:clip-path .4s var(--ease)}
.float.on{clip-path:inset(0)}
```
```js
let tx=0,ty=0,x=0,y=0;
addEventListener('pointermove',e=>{tx=e.clientX+20;ty=e.clientY-120});
(function t(){x+=(tx-x)*.12;y+=(ty-y)*.12;float.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(t)})();
```

**Mistakes.** Touch has no hover, so on phones put a small picture in each row. Keyboard focus must reveal the picture too. Preload the images, or the first hover opens on nothing.

### 7. Columns that take turns

**Looks like.** Four to six tall pictures side by side, full height, each only a sliver with a name running up its edge. Hover or tap one and it swells to take most of the row while the rest give way, and its caption slides in. People, branches, products or chapters become a physical object.

```css
.cols{display:flex;height:82svh;gap:6px}
.col{position:relative;flex:1 1 0;min-width:0;overflow:hidden;border:0;padding:0;cursor:pointer;transition:flex-grow .7s var(--ease)}
.col img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;scale:1.08;transition:scale .9s var(--ease)}
.col span{position:absolute;left:14px;bottom:12px;writing-mode:vertical-rl;rotate:180deg}
.col[aria-expanded=true]{flex-grow:5}.col[aria-expanded=true] img{scale:1}
```

Use real `button` elements with `aria-expanded`, and open on hover, focus and click. On phones turn the row into a vertical stack with the same behaviour, using height in place of width.

**Mistakes.** Only use pictures that survive a tall crop. Animate `flex-grow`, never width in pixels.

### 8. Caption hung on the subject

**Looks like.** A big photograph with small text sitting right on the things in it: a price on the shelf, a name beside the person, a thin line from a tool to a sentence about it. The picture becomes a diagram of the business. Scroll can bring in one note at a time.

**Build.** A `position:relative` frame with notes placed in percentages of the picture, so they stay on their subject at any width. Set the frame's `aspect-ratio` to the picture's own ratio, and use `object-fit:cover` only if the crop is the same at every width.

**Mistakes.** Notes on a busy area get lost, so give each one a small solid plate or place it on calm ground. Five notes is a lot.

### 9. Type that bleeds

**Looks like.** A heading so large it runs off the edge of the screen, cropped by the viewport on purpose, with a picture butted hard against it. Or two lines offset so the second starts where the first ends. The page feels bigger than the window.

```css
.bleed{font-size:17vw;line-height:.86;margin-left:-.04em;white-space:nowrap}
```

**Mistakes.** It must still read. Crop the last letters of a word people can finish, never the only word that carries the meaning. Let scroll slide it sideways so the rest arrives.

### 10. Layers that overlap

**Looks like.** Two or three pictures of different sizes laid over one another and over the grid, like prints on a table, drifting at different speeds as you scroll. One overlaps the heading. Nothing sits in a neat cell.

```js
gsap.utils.toArray('[data-speed]').forEach(e=>gsap.to(e,{yPercent:-(+e.dataset.speed),ease:'none',scrollTrigger:{trigger:e.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
```

Give the pictures `data-speed` values of 8, 20 and 36. The bigger the difference, the deeper it looks. Overlap by at least 8 percent of the smaller picture, or it reads as a mistake.

### 11. One colour field, one object

**Looks like.** A full-screen flat field of the brand colour with one cut-out object or person on it, sharp and large, with type set against the empty side. Removing the background from an ordinary photograph makes it look like a campaign. It is the fastest way to bring your palette and your photography together.

**Build.** A solid section with the cut-out placed so it bleeds off the bottom edge. Add a soft contact shadow as a blurred ellipse only if the subject stands on something.

**Mistakes.** A cut-out floating in the middle with space all round looks like a sticker. Let it touch or leave an edge.

## Legibility without a scrim

A grey gradient laid over a photograph to rescue the text is the mark of a template, and it dulls the picture you paid for. Try these in order.

1. **Place it.** Put the text in the calm zone, large. This solves most cases.
2. **Crop or flip.** Move the calm zone to where the text is. `transform:scaleX(-1)` is fair if nothing in the picture reads backwards.
3. **Grade the plate.** Darken the whole picture slightly with `filter:brightness(.7)`, or use a dark cut-out on top, as in composition 1.
4. **Blend.** White text with `mix-blend-mode:difference` stays readable as it crosses from a plain ground onto a picture.
5. **Local gradient.** If you must, keep it to the corner the text occupies, and take its colour from the picture's own shadows, not from black.

Check every text-over-picture pairing at phone width, where the crop changes.

## Scale

v1 of this skill taught medians: H1 about 54px, weight 500. Medians describe the typical top page, not the memorable one, and following them makes every page typical. Treat them as the floor for reading text and controls only.

Give each page a **loud moment budget**: two or three moments at full volume, and quiet between them. At a loud moment, type runs from 12 to 34vw, or a picture fills the screen, or both. A page with no loud moment is timid. A page with six is shouting. The quiet scenes are what make the loud ones land, so keep body text at 16 to 19px and let air do the rest.

The largest type on the page should be at least eight times the body size, and it should be doing something other than sitting above content.

Fit big type by measuring, not by guessing vw, when it must fill a width. See `cropped-footer-wordmark` in `elements/type.md`.

## Rhythm across a page

Plan the page as a shape before you build it. Write one line per scene: loud or quiet, dark or light, picture-led or type-led, pinned or free. Then check:

- No two neighbours share all four.
- The ground changes at least twice, and at least one change is a transition you can watch rather than a hard edge.
- At least one scene is pinned, and at most two.
- Some scene has almost nothing in it. Rest is a composition too.
- Headings do not open every scene. At least a third of scenes start with a picture, an object or an action.

## Phones

Compositions change on phones. They are not scaled down.

- **Word behind the subject:** use a shorter word, 34 to 42vw, and crop the picture tall around the subject. Do not let `object-fit` choose the crop. Set `object-position` for each width and look at it.
- **Window:** start tall rather than wide.
- **Strip:** native horizontal scroll with `scroll-snap-type:x mandatory`.
- **Columns:** a vertical stack where the active item takes the height.
- **Image follows the list:** a small picture in each row.
- **Heavy pictures:** always pass `srcset` and `sizes`, because a 2400px image on a phone is the commonest performance failure on a picture-led page.
