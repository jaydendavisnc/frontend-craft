---
name: frontend-craft
description: Design and build frontends that people stop for, with real photography, display type composed into the picture, components you want to touch and directed motion, plus measured type, spacing and detail drawn from hundreds of analysed top-tier sites. Also use it for any visual design that needs taste: slide decks and presentations, documents and reports, emails, social graphics, mobile app screens, posters, covers, artwork, generative pieces, illustrations, logos, game interfaces and data graphics. It reads what the person actually wants first and builds that, more ambitiously than they expected. Use this for any visual frontend work, including websites, landing pages, homepages, portfolios, online stores, pricing pages, dashboards, app screens and components, and whenever someone asks to make a UI look better, more modern, more professional, less generic or less like a template, even if they never mention design.
---

# Frontend Craft (v1.5)

Make pages people stop for. Two tests, and a page must pass both. A senior designer should believe a real team at a good company made it. And an ordinary person should scroll more slowly, try something, and want to show someone.

Version 1 passed the first test and failed the second. It produced correct, tidy, believable pages that their owner called mid: every section right, nothing memorable. This version exists to fix that. If you remember one thing, remember this: **a page assembled from correct parts is a template, however good the parts are.**

## The person comes first

Everything below is in service of what the person asked for. Read `references/intent.md` before anything else. Their words, their colours, their fonts, their sections and the sites they named outrank every default and every hand the sampler deals. Translate their mood words into decisions ("clean" means control, not emptiness; "premium" means restraint and real material, not gold and serif italics), keep every named thing, and write one sentence: "They want X, for Y, that feels like Z."

The sampler and the defaults fill only what their words leave open. When they disagree with the person, the person wins, and you say what you set aside. Ambition means going further inside what they asked for, never swapping it for what you would rather build.

## Taste comes first

Your first idea is the most probable one, which makes it the average of everything you have seen. Aim for work people have never seen for this subject: surprising, cool, and still obviously right. `references/taste.md` is the core of this skill. It holds what people respond to, what award juries reward, an idea engine with twelve lenses, better directions for every part of a site, and first principles for scroll, typography, components, colour and light.

For every part of what you make, write three "wouldn't it be cool if" ideas from different lenses, cross out the first, and build the one that passes the five tests in `taste.md`: it could only belong to this subject, it shows something true, it works in two seconds, it stays usable on a phone, and someone would send it to a friend. Then rate every part on the ambition ladder. Every part reaches "designed", most reach "signature", and two or three reach "award".

## What makes a page a template

These seven habits produce the template look. All of them feel like good practice while you are doing them. Each was measured on real output.

1. **Section types.** Thinking in hero, features, stats, team, testimonials, FAQ, footer. Naming the section names the solution, and the same solution gives the same page. Think in jobs: what does this part of the page have to do to a person? Then ask what would do that job here and nowhere else. A page is a series of scenes.
2. **Pictures and words kept apart.** Heading here, picture there, a polite gutter between them. On pages people remember they share one space: the word goes behind a shoulder, the price sits on the wood, the photograph opens through a letter. Read `references/composition.md`.
3. **Kit components.** Tabs, cards, tiles, accordions and ruled lists hold anyone's content, so they feel like anyone's page. Polishing them changes nothing. Build objects from this business that a person can operate. Read `references/components.md`.
4. **One animation.** Things fading up as they enter is not motion design. A page needs a score: an opening, a language for type, a language for pictures, one big moment, handoffs between scenes. Read `references/motion/score.md`.
5. **Polite scale.** Everything at a sensible size, so nothing is loud. Medians describe the typical page, and following them makes yours typical. Spend two or three loud moments at a scale that would feel reckless on a form.
6. **No real pictures.** Without photographs or renders, a page falls back on hairlines, tints and interface fragments. On 35 real sites a median of 38 percent of the page was imagery. On the banking page version 1 produced, it was 11 percent. Getting excellent pictures is the first task, not the last.

7. **Too much at once.** A model is rewarded for completeness, so it keeps adding: pills, chips, labels, rails, rules, tickers, second buttons. Each one is defensible and together they are noise. On 35 real sites a typical screen held 14 text blocks and 59 words. The tidy-looking version 1 banking page held 56 and 194. Every screen gets one idea. Read `references/clarity.md`.

**Clean does not mean empty.** When someone asks for clean, they are asking for control: nothing on screen without a job, nothing misaligned, nothing fighting. They are not asking for white with hairlines. A full-bleed photograph with one huge word on it is cleaner than a page of tidy small boxes. Do not answer "clean" with less. Answer it with one strong idea per screen.

## Seven facets

A page succeeds or fails on seven separate things. Judge each one on its own, because strength in one hides weakness in another: a beautiful photograph hides a generic component, and clever motion hides a cluttered screen. A page is finished when all seven pass, not when the total feels good.

| Facet | The question | Chapter | Checked by |
|---|---|---|---|
| Pictures | Are they excellent, specific and one set? | `references/imagery.md` | `audit.mjs`: share of page, sharpness |
| Composition | Do pictures and type share one space? | `references/composition.md` | `audit.mjs`: type on pictures, scene shapes |
| Type | Is there real scale, and does it say something? | `references/typography.md` | `audit.mjs`: scale contrast |
| Components | Is each one an object of this business that you want to touch? | `references/components.md` | `audit.mjs`: kit parts, card rows, ruled lists |
| Motion | Is it directed, or just things fading in? | `references/motion/score.md` | `audit.mjs`: motion kinds, and your own wheel |
| Clarity | Is there one idea per screen, with nothing without a job? | `references/clarity.md` | `audit.mjs`: per-screen budgets |
| Copy | Could any sentence belong to a competitor? | `references/copy.md` | `lint.mjs` |

## The trap one step above generic

Being bold is not a licence for a costume. A project tool dressed as a running track, a notes app dressed as a legal pad, a 900-weight headline on a flat colour field: these feel creative to make and read as a design-school poster. A literal metaphor stretched across a whole page is a costume, and no company would ship it. Keep the idea and drop the costume.

The difference between a costume and a concept is what is inside. A costume is an idea with nothing real in it. A concept is real pictures, real numbers and a real thing to do, arranged with conviction. Boldness should come from scale, composition and real content, never from a theme.

## How to work

### 1. Read the job

**First, read the person.** Follow `references/intent.md`: the literal ask, every named thing, the mood words decoded, and the unsaid. Write the "They want X, for Y, that feels like Z" sentence at the top of `.frontend-craft/ideas.md`, and list every named thing under it so none gets lost.

**Not a web page?** A slide deck, document, report, dashboard, app screen, email or social graphic has its own first principles in `references/beyond-web.md`. A poster, cover, flyer, artwork, generative piece, illustration, logo or game interface is a different medium too, and the page rules below will make it trashy. Read `references/taste.md` and the matching part of `beyond-web.md` first, then run the sampler as usual: it recognises the medium and deals a taste hand instead of page sections. Skip steps 2 to 8 and follow that hand where the person left things open, then run `slop.mjs` on the result until it reports nothing to remove.

Otherwise, work out the surface (marketing page, store, app screen, docs, portfolio) and who it is for. Then check for anything that overrides a default:

- An existing codebase, design system, brand or tokens. Extend them. Do not redesign a product because you were asked for one screen.
- An explicit direction from the user. Their words always win, including when they ask for something this file discourages.

If the brief is thin, do not stop to ask. Invent one specific, believable business: a name, a place, a price, a real point of view. Mention your invented details at the end so they can be swapped.

For dashboards, tools and dense app screens, the job is speed, so sections 2 and 4 matter less. The rest still applies.

### 2. Get the pictures first

Do this before anything else, because the page will be made of them. Do not skip this step or assume you have no source. Check each route in order, and use the first that gives you excellent pictures. Mixing routes is fine.

1. **Pictures the user supplied.**
2. **An image generator**, if you have one and may use it. Some are paid, so ask before spending.
3. **Real photographs.** `scripts/photos.py` searches several libraries that allow reuse and automated access, and draws a numbered contact sheet.
4. **Blender renders**, for objects and products, when Blender is installed. See Render your own set in `references/imagery.md`.

```bash
python3 <skill-dir>/scripts/photos.py "<a person doing this business's work>" "<a macro of its material>" "<its place at a time of day>" --out .frontend-craft/photos
python3 <skill-dir>/scripts/photos.py --get 3,7,12 --out .frontend-craft/photos --to assets/src
swift <skill-dir>/scripts/cutout.swift assets/src/<photo>.jpg assets/src/<photo>-subject.png
python3 <skill-dir>/scripts/imgset.py assets/src --to assets/img --grade warm
```

Search for concrete subjects from this business's own world, never moods. A clinic searches for `nurse adjusting a drip line` and `clinic corridor at night`. A developer tool searches for `developer at a desk at night` and `hands on a mechanical keyboard`. A florist searches for `florist stripping rose stems`. Every example in this skill is only an example: never take a trade, a city, a material or a picture from one. In testing, three builds for three different briefs all drifted into the same trade because the examples here once all came from it, and that sameness is its own template. Open the contact sheet and read it at full size. Choose for a clear subject, a calm zone for type, and a set that belongs together. The same photographer or the same light across a set is worth more than the perfect topic. Hands doing the work usually beat a face. Plan at least six pictures in two distances, and cut out at least one subject. `references/imagery.md` has the full method. Never present a stock person as a named customer or employee, and keep `CREDITS.md`.

### 3. Deal a direction

Left alone, every model collapses onto a few favourite looks. So the specifics come from a sampler that deals a different hand each run:

```bash
python3 <skill-dir>/scripts/direction.py "<the user's words, exactly>" --images photo
```

Pass the user's request word for word. Set `--images` to the route you used in step 2: `photo`, `render`, `supplied` or `generated`. Use `none` only if every route in step 2 has really failed, and say so at the end, because it costs the page most of its impact. If you cannot run code, read `references/manual-deal.md`.

The hand opens with **What they asked for**: the look, colours, fonts, sections and effects it read from the person's words. Those outrank everything else in it. The rest gives you a register, a type system, a palette, a voice, and one move for each job the page has to do, to fill what the person left open and to push you away from your usual page.

The moves are taken from real sites that do not look like templates, and `references/moves/` holds the whole library, one file per job. Keep the register, type and palette unless the person's words point elsewhere. For each move, build what was dealt or something more ambitious from the idea engine in `taste.md` that suits this business better. Never fall back to the template version named beside it. If the hand as a whole fights the brief, deal again with a new `--seed`, or set it aside and say so. Say what you replaced and why.

The sampler leaves `.frontend-craft/` next to your work with a copy of the hand. It remembers recent runs in `~/.frontend-craft`, so your next hand differs. As your very last step, delete `.frontend-craft/` and `.shots/` from the work folder.

### 4. Write the scene cards

Before any code, write `.frontend-craft/scenes.md`, using the format printed in the hand: for each scene the job, what is on screen described as a picture, how picture and type share the space, the component and its rung, its motion, and its volume. Add the seven-part motion score from `references/motion/score.md`.

Then read the cards in order as if you were a visitor. Is there a moment you would describe to a friend? Is any scene merely adequate? Would this exact plan come out of a similar brief? Change whatever would. Check that no two neighbouring scenes share a volume line, and that fewer than half open with a heading.

Also commit in one line each to the business, and to one **signature**, an idea only this business could have, which recurs in three places. For each scene, note its rung on the ambition ladder in `taste.md`, and raise any scene still at template or competent before you write code.

### 5. Write the content

Write the real copy and data before layout. Read `references/copy.md`. Generated copy is one of the fastest giveaways, so give every sentence a concrete fact, number, name or opinion that could only belong to this business. Display lines deserve the most work: a line set at 20vw has to earn it, and short plain words carry the most weight.

### 6. Build the first scene, then look at it

Build only the first scene, in the full system, with real pictures. Then shoot it and study the image:

```bash
node <skill-dir>/scripts/shoot.mjs <folder-or-url>
```

Judge it next to the references you were dealt. The first screen should be a composed picture: lit, deep, one idea, one thing to look at, and type that is part of the image. If a screenshot looks fine but flat, keep going until it does not. Fix it before building further. A weak first screen never gets rescued later.

### 7. Build scene by scene

Treat each scene as a separate small project. The hand gives you the move. `references/composition.md`, `references/components.md` and `references/motion/score.md` give you tested code.

Every element also has a chapter in `references/elements/`, 1,570 variants taken from real sites. Use them to get details right, such as a footer, a button or a phone menu. Do not use them as a menu of sections, because that leads straight back to the template.

| Building | Read |
|---|---|
| Any picture with type | `references/composition.md` |
| Looking for a better idea for a scene | `references/moves/`, one file per job |
| Keeping a scene calm | `references/clarity.md` |
| Anything a person operates | `references/components.md` |
| Any animation | `references/motion/score.md`, then `elements/motion.md` and `references/motion/` |
| Finding and treating pictures | `references/imagery.md` and `elements/media.md` |
| Nav, menus | `elements/nav.md` |
| Headlines, labels, body | `elements/type.md` and `references/typography.md` |
| Buttons, links | `elements/button.md` |
| Cards, borders, shadows, radii | `elements/surface.md` |
| Backgrounds, light, gradients | `elements/atmosphere.md` |
| Product shots, demos, charts | `elements/product.md` |
| Forms, pricing, conversion details | `elements/section-conversion.md` |
| Footers | `elements/section-info.md` |
| Stores, product pages, carts | `elements/commerce.md` |
| Dashboards, tables, app shells | `elements/app.md` |
| Grid, rhythm, composition | `elements/layout.md` |
| Phone layouts and nav | `elements/mobile.md` |
| Colour | `references/color.md` |
| WebGL, shaders | `references/motion/webgl.md` |
| React, Next, Tailwind, shadcn | `references/stack.md` |

### 8. Build the score

Motion is part of the design, so it was planned in step 4. Build it in one pass so it reads as one language. Copy the gating pattern from `references/motion/foundations.md`, recipe 1, so content stays visible if JavaScript fails and under reduced motion.

### 9. Audit, then critique

Run all four, and fix everything real:

```bash
node <skill-dir>/scripts/shoot.mjs <folder-or-url>
node <skill-dir>/scripts/audit.mjs <folder-or-url>
node <skill-dir>/scripts/lint.mjs <folder>
node <skill-dir>/scripts/slop.mjs <folder-or-url>
```

`slop.mjs` names the exact elements that make work look generated: purple washes, gradient text, glows, blobs, emoji, sparkles, stock phrases, accent words, eyebrow labels, pill and icon-tile overload, confetti, rainbow palettes, default faces, polite scale and centred stacks. Each line gives the element, its text and what to do instead. Every `REMOVE` line is work to do, and the script exits non-zero until none are left. It also runs on posters, covers and SVG art, where it removes web controls and card boxes too.

`audit.mjs` measures whether the page has the shape of a template and whether it is cluttered: how much of it is pictures, whether type and pictures share space, whether scenes differ, how many kit parts, card rows and ruled lists it has, whether motion touches pictures, and how much a person has to process on each screen. Aim for 80 or higher. It is a floor, not a judge: a high score does not make a page good, and a low one means the page has the shape of a template, however nice it looks. Fix failures by changing the design, not by nudging numbers. See `references/template-audit.md`.

`shoot.mjs` writes a contact sheet and reports defects. `lint.mjs` lists generated-looking habits. Use `--at 0,2400 --width 820` on shoot for a quick look at chosen positions.

Then critique, one facet at a time. If you can start subagents, do: give them the sheet, the frames and the rubric in `references/template-audit.md`, and not your own opinion, because a builder cannot see their own page. If you cannot, do at least three rounds yourself, looking for what is weakest rather than what is good.

- **The brief.** Read the person's words again, then the page. Is every named thing there, and does it feel like what they described? Ambition that ignored the brief is a failure.
- **The ladder.** Rate each scene from template to award, using `taste.md`. Fix the lowest first.
- **The stop test.** Scroll the sheet. At which scene would someone slow down? Any scene where nobody would is unfinished.
- **The friend test.** What would someone send to a friend? If you cannot point to it, the page has no moment.
- **Inside the frames.** Could any picture or example be from any company? Make it specific.
- **Swap.** Replace the company name with a competitor's. If nothing else needs to change, the page has no point of view.
- **Together or adjacent.** Cover the text in each scene. Does the picture still have a reason to be that shape? See `references/composition.md`.
- **Play.** Use every component for real, with a pointer, a keyboard and a thumb. Is it satisfying, or merely working?
- **Five words.** At each scroll position, say what the screen is about in five words. If you cannot, it holds two ideas. See `references/clarity.md`.
- **Thumb.** Cover each small element in turn. If the scene reads the same without it, delete it.
- **Drift.** Find two things that should match and do not: paddings, radii, greys, label styles.
- **Remove.** Take away one thing that is not earning its place, then try one more.
- **Phone.** Read the phone frames as a real layout, not a squeezed desktop.

Stop when another round finds nothing worth fixing, not when the page first looks acceptable.

## Measured defaults

These are medians and typical ranges from top sites. Treat them as the floor for reading text and controls. They do not apply to loud moments, where type runs from 12 to 34vw on purpose.

| Thing | Start from |
|---|---|
| Quiet headings | 28 to 50px, weight 400 to 600, tracking 0 to -0.03em, leading 1.0 to 1.2 |
| Loud moments | 12 to 34vw, two or three per page, composed with a picture |
| Largest type | At least eight times the body size |
| Subhead | 16 to 20px, leading 1.3 to 1.5, about 550px wide |
| Body | 15 to 19px with 1.4 to 1.6 leading |
| Secondary text | The same size at about 60% ink, not a smaller size |
| Nav | 60 to 78px tall, links 14 to 16px at weight 400 |
| Buttons | 34 to 48px tall, 14 to 16px text, weight 400 to 500 |
| Borders | 1px at about 8% ink |
| Picture share of the page | A third or more, unless it is a tool |
| Per screen | Under 22 text blocks and 100 words, with one filled button |
| Section spacing | 80 to 128px where sections have edges at all |
| Hover transitions | 150 to 300ms |

Radii should nest: an inner radius is the outer radius minus the padding between them. Use one spacing scale. Use tabular numerals in anything that aligns, and check how the face draws them, because some default to old-style figures and need `lining-nums`.

## Density and edges

Spacing and detail are decisions made per section, and the test is whether each one looks intended. Too much air reads as timid, and too much detail reads as clutter. The aim is just right for this design.

- **Clutter test.** Cover each small element in turn: a badge, a chip, a status dot, a mono label, a divider, a corner note. If the section reads the same without it, delete it. Every element should have a job a visitor could name.
- **Air test.** A gap separates two ideas. If you cannot say which two, the gap is a hole. Rhythm should come from one spacing scale, with larger gaps only between larger shifts in subject.
- **One layer of detail.** Density belongs inside the real content, such as a product view, a table or a chart. The chrome around it stays quiet. A dense interface in a calm section reads as confident, while tags and labels scattered across a sparse section read as decoration.
- **Plain ruled rows.** Date, name and note on hairlines is fine once and redundant twice. Use at most one plain list on a page, and stylise the rest: give each row its own object such as a thumbnail, a drawing or a proportional bar, let size carry value, plot items on a real axis or timeline, or make rows open or reveal an image.
- **Page edges.** Never box the page. Grounds, bands and bleeding media reach the viewport edge, and no rail lines run down the page. Check it at 1920 wide: the page should feel composed, not like a column floating between dead strips.

## Finished everywhere

Pricing, forms, footers, hover states, phone menus and empty states get the same care as the first screen. One system, applied exactly: the same radius, the same neutrals, the same picture treatment all the way down. Bold scenes on a sloppy system read as amateur. Precision is what lets a loud page stay clean.

Build real product interface in HTML at believable density. Read the laws in `elements/product.md` before drawing any. Never use grey placeholder boxes, emoji as icons, images you have not looked at, or text describing a picture that is not there.

## The fast giveaways

Read `references/anti-patterns.md` during critique. These alone mark a page as generated:

- Every section opening with a heading, then content below it.
- The same heading treatment repeated down the page.
- Ruled lists of label and value, including small ones in a sidebar or hero rail.
- Equal rows of cards, tiles or stats.
- A grey gradient over a photograph to rescue the text.
- A picture that sits in its own box beside the words that describe it.
- Equal scale throughout, with nothing loud and nothing small.
- One fade-up used for everything.
- Oversized heavy headlines as the only idea, with nothing real under them.
- A metaphor costume, or a gimmick doing the job of design.
- Gradient text, purple-to-blue washes, glass cards everywhere.
- One word in a headline set in italic or a colour.
- Tracked-out uppercase labels above every heading.
- Emoji icons, sparkles, arrows bolted onto every link.
- Copy built from "seamless", "elevate", "not just X, but Y", and invented stats.
- Stock generated names in testimonials, and logo walls of made-up companies.
- Stock people presented as real staff or customers.
- A beautiful first screen followed by an unconsidered page.
- Dark pages tinted blue with a glowing blue button.
- Design-tool costume: rulers, selection handles, crop marks.

## When you finish

Say briefly what you built, what you invented, what you verified and what you could not. Give the audit score. Name the image sources and licences, say which moves you replaced, and say anything from the hand you set aside because the person asked for something else. Keep it plain. Let the work make the impression.
