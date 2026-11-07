---
name: frontend-craft
description: Design and build frontends that look like a professional product design team made them, with measured type, spacing, components and motion drawn from hundreds of analysed top-tier sites. Use this for any visual frontend work, including websites, landing pages, homepages, portfolios, online stores, pricing pages, dashboards, app screens and components, and whenever someone asks to make a UI look better, more modern, more professional or less generic, even if they never mention design.
---

# Frontend Craft

Make pages a senior designer would believe came from a real design team at a good company. Your standard is what Linear, Stripe, Framer, Vercel and Raycast share: precision, restraint, and something real on screen. A visitor should assume a funded company with designers shipped this. They should not think "nice for AI", and they should not notice a concept.

## Every section is its own project

The sites that win awards feel made because each part had its own idea. Framer sites feel clean and untemplated for the same reason: the components were designed, not filled in. Treat the hero, the feature section, the proof, the pricing and the footer as separate small projects, each with a brainstorm that starts "wouldn't it be cool if". Choose ideas that show rather than tell, and let the page breathe around them. This is a website and not a slide deck: a run of heading, paragraph, picture exhausts people, however tidy it is. If a sentence explains something the page could show, build the thing and delete the sentence. Whatever the theme, the bar is the same: premium, considered, and clearly made for this business.

**Good structure is not good design.** A page can have the right sections and motion and still look boring. What lifts it is the visual layer: light and depth on the ground, type with real presence, one confident colour, and components that look custom-built with edges, states and detail. The first screen in particular should feel like a lit, composed scene with one hook and one striking object, not a heading and two buttons on a flat panel. If a screenshot looks fine but flat, keep the structure and push the look.

## The trap one step above generic

Everyone knows to avoid the purple gradient and the three-card row. The harder trap sits above that: pages that are striking in a thumbnail and fall apart as real work. A project tool dressed as a running track, a notes app dressed as a legal pad, a 900-weight headline filling a flat colour field. These feel creative to make and read as a design-school poster. No company would ship them, and a visitor can tell. Call this "vibe-code good". Cleverness is not craft.

A literal metaphor stretched across a whole page is a costume. Keep the idea and drop the costume: a project tool can have a real sense of momentum without a single lane line.

## What top sites have in common

We analysed 826 real sites, graded them strictly, measured the best in detail, then broke the corpus into nearly 9,000 examples of individual elements. They differ widely, yet nearly all of them do these five things.

**One system, applied exactly.** The same tile recipe, the same neutral ladder, the same row rhythm, the same two rails, all the way down a 15,000px page. Much of what reads as "expensive" is that nothing drifts. A generated page tends to invent a new treatment per section, which reads as a sample book.

**Something real inside every frame.** This is the difference that matters most. Real product interface at believable density, specific human content, considered photography, actual data. The most common failure our analysts recorded was a well-framed page with nothing convincing inside the frames. A clean layout around three grey bars is still a template. Decide what goes in the frames before you design the frames.

**Hierarchy from small, exact differences.** Top sites do not shout. Their H1 has a median of 54px at weight 500. Hierarchy comes from a two-step weight change, a shift from 100% to 60% ink, or 24px more space. Generated pages reach for 120px at weight 800 because volume feels like confidence. It isn't.

**One quiet signature.** Each has one thing of its own: a line that runs through sections, a tag shape that recurs, a way of treating product shots. It is carried with restraint, and it serves the content. One device, not ten.

**Finished everywhere.** Pricing tables, footers, FAQs, hover states, phone menus and empty states get the same care as the hero. Amateurs design the top third of a page.

## How to work

### 1. Read the job

Work out the surface (marketing page, store, app screen, docs, portfolio) and who it is for. Then check for anything that overrides a default:

- An existing codebase, design system, brand or tokens. Extend them. Do not redesign a product because you were asked for one screen. Read the styles and components already there and match them closely, then apply the craft in this file inside those limits.
- An explicit direction from the user. Their words always win, including when they ask for something this file discourages.

If the brief is thin, such as "build a landing page for a coffee shop", do not stop to ask. Invent one specific, believable business: a name, a place, a price, a real point of view. Specificity is what you are short of, and you can supply it yourself. Mention your invented details at the end so they can be swapped.

### 2. Deal a direction

Left alone, every model collapses onto a few favourite looks and one favourite page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Telling a model to be creative only moves it to different favourites. So the specifics come from a sampler that deals a different hand each run:

```bash
python3 <skill-dir>/scripts/direction.py "<the user's words, exactly>"
```

Pass the user's request word for word. Do not rewrite it, and do not add a business, a genre or a style of your own: a rewritten brief is how the hand gets steered back to your favourites. If the request names no business, the sampler deals one.

If you cannot generate images or fetch real photographs, add `--no-images`, so the hand does not depend on pictures you cannot get. If you cannot run code, read `references/manual-deal.md`, which shows how to pick a pre-dealt hand using only file access.

The hand is a complete direction: the sections of one real top-tier page in order, one exact recipe for each, plus one type system, one palette, one voice and a set of system choices.

**Treat the hand as a brief from your design director, and build what was dealt.** This is not a limit on your range. Hands differ, so following one is exactly what keeps your work from looking like everyone else's, and like your own last page. The moment you adapt a hand back towards what feels right, you get your usual page again. In testing, models that treated the hand as optional argued it away line by line and shipped the same page they always ship.

You may swap at most two slots, only where a slot is plainly impossible for this business, and you must say which and why. "It feels too software-like" or "a cafe would not do this" is not a reason: make the dealt thing suit the business. If the whole hand is impossible, deal once more with a new `--seed`.

An explicit direction from the user, or an existing brand, always outranks the hand.

The sampler leaves `.frontend-craft/` next to your work, with a copy of the hand in `hand.md` and a `direction.json` that `shoot.mjs` compares the page with. It also remembers recent runs in `~/.frontend-craft`, so your next hand differs. As your very last step, delete `.frontend-craft/` and `.shots/` from the work folder. The default registers are the modern professional ones. Expressive hands appear only when the brief asks for them, such as a festival, an art project, or a brand that says it wants something loud. See `references/registers.md`.

### 3. Write a short spec before any code

Commit to these in about ten lines:

- **Business:** who this is, in one specific sentence.
- **The page:** the dealt sections in order, with what real content fills each one.
- **Frames:** exactly what goes in the hero and each image or product slot.
- **Ideas:** `.frontend-craft/ideas.md`, three "wouldn't it be cool if" lines per section, at least one with no text in it, and your pick marked.
- **Signature:** the one quiet device, and the three places it recurs.
- **Swaps:** any slot you replaced, and why. Two at most.

Then reread it and ask: would this exact spec come out of any similar brief? Change whatever would.

### 4. Write the content first

Write the real copy and data before layout. Layout built around lorem ipsum produces generic layout, and real content tells you what the page wants to be. Read `references/copy.md`. Generated copy is one of the fastest giveaways, so give every sentence a concrete fact, number, name or opinion that could only belong to this business.

### 5. Build the first screen, then look at it

Build only the first screen, in the full system. Then shoot it and study the image:

```bash
node <skill-dir>/scripts/shoot.mjs <folder-or-url>
```

Judge it next to the references you were dealt. Fix it until it could sit beside them. Only then build further. A weak first screen never gets rescued by later sections, and fixing the system is cheap now and expensive later. If you cannot run a browser, reason through the same checks in your head and say what you could not verify.

### 6. Build element by element

The recipes for everything you were dealt are printed in the hand, so start there and use their exact sizes. Every element also has its own chapter in `references/elements/`, 1,570 variants in all, taken from real sites, with exact specs and the mistakes that cheapen them. Reach for a chapter the way a designer pulls references: for anything the hand did not cover, or when a section looks weak, read that element's opening, which says what it must do and what separates great from cheap. Chapters are long, so use the contents list at the top rather than reading them whole.

| Building | Read |
|---|---|
| Nav, menus, announcement bars | `elements/nav.md` |
| Hero | `elements/hero.md` |
| Headlines, labels, body | `elements/type.md` and `references/typography.md` |
| Buttons, links | `elements/button.md` |
| Cards, borders, shadows, radii | `elements/surface.md` |
| Backgrounds, light, gradients | `elements/atmosphere.md` |
| Product shots, code, demos, charts | `elements/product.md` |
| Photos, illustration, icons, logos | `elements/media.md` and `references/imagery.md` |
| Feature grids, tabs, sticky scroll, steps | `elements/section-features.md` |
| Testimonials, logos, stats, case studies, team | `elements/section-proof.md` |
| Pricing, comparison, FAQ, closing CTA, forms | `elements/section-conversion.md` |
| Footers, galleries, blogs, changelogs, menus, hours | `elements/section-info.md` |
| Stores, product pages, carts | `elements/commerce.md` |
| Dashboards, tables, forms, app shells | `elements/app.md` |
| Grid, rhythm, composition | `elements/layout.md` |
| Phone layouts and nav | `elements/mobile.md` |
| Colour | `references/color.md` |
| Motion | `elements/motion.md`, then `references/motion/` |
| React, Next, Tailwind, shadcn | `references/stack.md` |

### 7. Motion pass

Motion is part of the design, so plan it in step 3 and build it now, in one pass, so that it reads as one language. The default here is the precise, quiet motion of a top product site: content settles into place, product surfaces animate as if they are being used, and hovers answer in about 200ms. It should feel smooth and expensive, never showy.

`references/motion/foundations.md` indexes 78 tested recipes. Copy the gating pattern from there, so content stays visible if JavaScript fails and under reduced motion. A fade-up on every block is the generated default: choose what leads, let the rest follow, and leave some things still.

### 8. Verify, then critique

Run both tools and fix everything real:

```bash
node <skill-dir>/scripts/shoot.mjs <folder-or-url>
node <skill-dir>/scripts/lint.mjs <folder>
```

`shoot.mjs` writes a contact sheet of the first screen, scroll stops, phone frames, load sequence and mid-scroll frames, and reports hidden content, overflow, failed fonts and console errors. `shoot.mjs` also prints a craft section, measuring the habits blind judges marked down: treat its FIX lines as work to do. Use `--at 0,2400 --width 820` for a quick look at chosen positions and widths instead of writing your own browser script. `lint.mjs` lists generated-looking habits. Each hit is a question, not a verdict: did you choose this, or did it just happen?

Then open the sheet and critique it as a reviewer who did not make it. Do at least two rounds, and look for what is weakest rather than what is good.

- **Squint.** At thumbnail size, is there one clear first read in each section?
- **Beside the references.** Put it next to what you were dealt. Where does yours look cheaper? That spot is your next fix.
- **Inside the frames.** Could any product shot, image or example be from any company? Make it specific.
- **Drift.** Find two things that should match and do not: paddings, radii, greys, label styles.
- **Swap.** Replace the company name with a competitor's. If nothing else needs to change, the page has no point of view.
- **Remove.** Take away one thing that isn't earning its place.
- **Edges and air.** Look at the widest view. Are there dead strips, boxed columns or holes? Is any section busier than its content deserves?
- **Phone.** Read the phone frames as a real layout, not a squeezed desktop.

Stop when another round finds nothing worth fixing, not when the page first looks acceptable.

## Measured defaults

These are medians and typical ranges from top sites. They are where to start for the professional registers, not rules, and a register's own hand overrides them. Bold registers go well outside them on purpose.

| Thing | Start from |
|---|---|
| H1 | 40 to 70px, median about 54. Largest text anywhere: 48 to 80px |
| Headline weight | 400 to 600, median 500. Heavier is rare |
| Headline tracking | 0 to -0.03em, median -0.02em, tighter as it gets larger |
| Headline leading | 1.0 to 1.2, and usually two lines |
| Subhead | 16 to 20px, leading 1.3 to 1.5, about 550px wide, 16 to 32px below the headline |
| Section headings | 28 to 50px, median 36, weight 400 to 500 |
| Body | 15 to 18px with 1.4 to 1.6 leading |
| Secondary text | The same size at about 60% ink, not a smaller size |
| Nav | 60 to 78px tall, links 14 to 16px at weight 400 |
| Buttons | 34 to 44px tall, 14 to 16px text, weight 400 to 500, 12 to 20px side padding |
| Button shape | Pills are on about two in five top-site buttons. The rest use small radii, so neither is a default |
| Glass navs | Blur appears on only about one in ten top-site navs. Solid or transparent is the norm |
| Borders | 1px at about 8% ink |
| Section spacing | 80 to 128px of padding, often more between major sections |
| Page width | About 1100 to 1300px, with text columns far narrower |
| Hover transitions | 150 to 300ms, median 200 on controls and 300 on cards |

Radii should nest: an inner radius is the outer radius minus the padding between them. Use one spacing scale. Use tabular numerals in anything that aligns, and check how the face draws them, because some turn monospaced or slash their zeros.

## Density and edges

Spacing and detail are decisions made per section, and the test is whether each one looks intended. Too much air reads as timid, and too much detail reads as clutter. The aim is just right for this design.

- **Clutter test.** Cover each small element in turn: a badge, a chip, a status dot, a mono label, a divider, a corner note. If the section reads the same without it, delete it. Every element should have a job a visitor could name.
- **Air test.** A gap separates two ideas. If you cannot say which two, the gap is a hole. Rhythm should come from one spacing scale, with larger gaps only between larger shifts in subject.
- **One layer of detail.** Density belongs inside the real content, such as a product view, a table or a chart. The chrome around it stays quiet. A dense interface in a calm section reads as confident, while tags and labels scattered across a sparse section read as decoration.
- **Plain ruled rows.** Date, name and note on hairlines is fine once and redundant twice. Use at most one plain list on a page, and stylise the rest: give each row its own object such as a thumbnail, a drawing or a proportional bar, let size carry value, plot items on a real axis or timeline, or make rows open or reveal an image.
- **Page edges.** Never box the page. Grounds, bands and bleeding media reach the viewport edge, and no rail lines run down the page. Check it at 1920 wide: the page should feel composed, not like a column floating between dead strips.

## Filling the frames

Read the foundations of `elements/product.md` before building any product shot, and `references/imagery.md` before reaching for any image.

- **Software:** build the actual interface in HTML at real density, with real-looking data, then crop and frame it. This is usually better than any image, and it can move. Thin fake UI with three bars is the single most common way a good layout collapses into a template.
- **Physical businesses:** photography does most of the work. If you can generate images, art-direct them as a set with one consistent light and treatment. If you can't, do not fake it with gradients and emoji. Build from what you can make well: type, real information such as menus, hours, prices and maps, considered colour, and crafted illustration or procedural imagery.
- **Never:** grey placeholder boxes, emoji as icons, hotlinked images you have not verified, or text that describes a picture that isn't there.

## The fast giveaways

Read `references/anti-patterns.md` during critique. It starts with the failures measured for your kind of model, and it lists false alarms so you do not become timid. These alone mark a page as generated:

- A metaphor costume, or a gimmick doing the job of design.
- Oversized heavy headlines as the main idea.
- Thin fake product UI, or anything that could be any company's.
- A new treatment per section instead of one system.
- Equal three-card rows repeated down a page.
- Gradient-filled text, purple-to-blue washes, glass cards with blur everywhere.
- One word in a headline set in italic or a colour.
- Tracked-out uppercase labels above every heading.
- Numbered 01, 02, 03 markers on things that are not a sequence.
- Emoji icons, sparkles, arrows bolted onto every link.
- Copy built from "seamless", "elevate", "not just X, but Y", and invented stats.
- Stock generated names in testimonials, and logo walls of made-up companies presented as real customers.
- A fade-up on every block, and cards that lift on hover.
- A beautiful first screen followed by an unconsidered page.
- Dark pages tinted blue with a glowing blue button, gradient cards and lit edges. Dark should start from neutral black, flat surfaces and solid buttons, and the colour should come from real content.
- Design-tool costume: rulers, selection handles, crop marks, pointer-following light, skeuomorphic keys. A page pretending to be a design tool reads as someone larping as a designer.

## When you finish

Say briefly what you built, what you invented, what you verified and what you could not. Keep it plain. Let the work make the impression.
