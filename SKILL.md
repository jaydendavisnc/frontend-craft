---
name: frontend-craft
description: Design and build frontends that a senior designer would believe came from a real design team, with measured type, spacing and detail drawn from hundreds of analysed top-tier sites, real product interfaces and real content in every frame, one signature idea per page, and blind-tested checks that remove what makes work look generated. Also use it for any visual design that needs taste: slide decks and presentations, documents and reports, emails, social graphics, mobile app screens, posters, covers, artwork, generative pieces, illustrations, logos, game interfaces and data graphics. It reads what the person actually asked for first and builds that. Use this for any visual frontend work, including websites, landing pages, homepages, portfolios, online stores, pricing pages, dashboards, app screens and components, and whenever someone asks to make a UI look better, more modern, more professional, less generic or less like a template, even if they never mention design.
---

# Frontend Craft (v1.5)

Make pages a senior designer would believe came from a real design team at a good company. Your standard is what Linear, Stripe, Framer, Vercel and Raycast share: precision, restraint, and something real on screen. A visitor should assume a funded company with designers shipped this. They should not think "nice for AI", and they should not notice a concept.

**What blind tests taught this version.** Version 1.0 built every section from an exact, measured recipe and filled every frame with real content. Blind review panels scored those pages above real top-tier sites. A first draft of 1.5 put a bold idea in every section: type crashing into photographs, giant numerals, cut-out figures, tilted notes, giant wordmark footers. It lost to 1.0 on all twelve test briefs. Ambition did not fail. Tricks did. So this version keeps 1.0's discipline as the floor, gives every section an idea built from real content, makes one of them the page's signature, and removes the tricks before anything ships.

## The person comes first

Everything below serves what the person asked for. Read `references/intent.md` before anything else. Their words, colours, fonts, sections and the sites they named outrank every default and every hand the sampler deals. Translate their mood words into decisions ("clean" means control, not emptiness; "premium" means restraint and real material, not gold and serif italics), keep every named thing, and write one sentence: "They want X, for Y, that feels like Z."

The sampler and the defaults fill only what their words leave open. When they disagree with the person, the person wins, and you say what you set aside.

## Every section is its own project, and none of them is a trick

The sites that win feel made because each part had its own idea. Treat the hero, the feature section, the proof, the pricing and the footer as separate small projects, each with a brainstorm that starts "wouldn't it be cool if". Choose ideas that show rather than tell, built from this business's real content: a ledger that reads as a sentence, a price list with the real numbers in it, proof that is the actual artefact, a product view that performs its job. If a sentence explains something the page could show, build the thing and delete the sentence.

An **idea** is real content made visible. A **trick** is an effect applied to content: type crashing into a photograph, a giant numeral, a count-up, a tilted note, a word-by-word reveal, a giant footer wordmark. Blind panels rewarded ideas in every section and punished tricks wherever they appeared. Ideas everywhere, tricks nowhere.

One idea is the page's **signature**: the strongest, the one that could only belong to this business, often something a visitor can use. It gets the most room and the most finish. Write three for it with `references/taste.md`, cross out the first, and build the one that makes you slightly nervous but that you can explain in one sentence.

**Good structure is not good design.** A page can have the right sections and still look boring. What lifts it is the visual layer: light and depth on the ground, type with real presence, one confident colour, and components that look custom-built with edges, states and detail. The first screen should feel like a composed scene with one clear first read and one striking object, not a heading and two buttons on a flat panel.

## The trap one step above generic

Everyone knows to avoid the purple gradient and the three-card row. The harder trap sits above that: pages that are striking in a thumbnail and fall apart as real work. A project tool dressed as a running track, a notes app dressed as a legal pad, a 900-weight headline filling a flat colour field, a headline split around a photograph. These feel creative to make and read as a design-school poster. No company would ship them, and a visitor can tell. Call this "vibe-code good". Cleverness is not craft.

A literal metaphor stretched across a whole page is a costume. Keep the idea and drop the costume.

## What top sites have in common

We analysed 826 real sites, graded them strictly, measured the best in detail, then broke the corpus into nearly 9,000 examples of individual elements. They differ widely, yet nearly all of them do these five things.

**One system, applied exactly.** The same tile recipe, the same neutral ladder, the same row rhythm, the same two rails, all the way down a 15,000px page. Much of what reads as "expensive" is that nothing drifts. A generated page tends to invent a new treatment per section, which reads as a sample book.

**Something real inside every frame.** This is the difference that matters most. Real product interface at believable density, specific human content, considered photography, actual data. The most common failure recorded was a well-framed page with nothing convincing inside the frames. Decide what goes in the frames before you design the frames.

**Hierarchy from small, exact differences.** Top sites do not shout. Their H1 has a median of 54px at weight 500. Hierarchy comes from a two-step weight change, a shift from 100% to 60% ink, or 24px more space. Generated pages reach for 120px at weight 800 because volume feels like confidence. It isn't.

**One quiet signature.** Each has one thing of its own: a line that runs through sections, a tag shape that recurs, a way of treating product shots. It serves the content. One device, not ten.

**Finished everywhere.** Pricing tables, footers, FAQs, hover states, phone menus and empty states get the same care as the hero. Amateurs design the top third of a page.

## How to work

### 1. Read the job

**First, read the person.** Follow `references/intent.md`: the literal ask, every named thing, the mood words decoded, and the unsaid. Write the "They want X, for Y, that feels like Z" sentence at the top of `.frontend-craft/spec.md`, and list every named thing under it so none gets lost.

**Not a web page?** A slide deck, document, report, dashboard, app screen, email or social graphic has its own first principles in `references/beyond-web.md`. A poster, cover, flyer, artwork, generative piece, illustration, logo or game interface is a different medium again, and page habits will make it trashy. Read the matching part of `beyond-web.md` and `references/taste.md`, run the sampler as usual (it recognises the medium and deals a taste hand), follow that hand where the person left things open, and run `slop.mjs` until it reports nothing to remove.

Otherwise, work out the surface (marketing page, store, app screen, docs, portfolio) and who it is for. Then check for anything that overrides a default:

- An existing codebase, design system, brand or tokens. Extend them. Do not redesign a product because you were asked for one screen. Read the styles and components already there and match them closely, then apply the craft in this file inside those limits.
- An explicit direction from the user. Their words always win.

If the brief is thin, such as "build a landing page for a coffee shop", do not stop to ask. Invent one specific, believable business: a name, a place, a price, a real point of view. Specificity is what you are short of, and you can supply it yourself. Mention your invented details at the end so they can be swapped.

### 2. Deal a direction

Left alone, every model collapses onto a few favourite looks and one favourite page. Telling a model to be creative only moves it to different favourites. So the specifics come from a sampler that deals a different hand each run:

```bash
python3 <skill-dir>/scripts/direction.py "<the user's words, exactly>"
```

Pass the user's request word for word. Do not rewrite it, and do not add a business, a genre or a style of your own. If you cannot get excellent pictures (see Filling the frames), add `--no-images`. If you cannot run code, read `references/manual-deal.md`.

The hand opens with **What they asked for**: the look, colours, fonts, sections and effects read from the person's words. Those outrank everything else in it. Then it deals the sections of one real top-tier page in order, one exact recipe for each, one type system, one palette, one voice, and **one signature idea**.

Build what was dealt where the person left things open. Hands differ, so following one keeps your work from looking like everyone else's, and like your own last page. In testing, models that treated the hand as optional argued it away line by line and shipped the same page they always ship. You may swap a slot when it is plainly wrong for this business or for what the person asked, and you must say which and why. If the whole hand fights the brief, deal again with a new `--seed`.

**Type and colour are the exception.** The dealt type system and palette are a starting point, not a rule. Panels marked down pages whose builders kept a dealt look the review had already called generic: a default dark developer palette, mint on teal, white SaaS with black pills, one grotesk at one weight, a wide display face carrying all the identity. If your review calls the type or colour generic, default, timid or muddy, change them. Choose the accent from this business's real materials and the faces from its voice, then apply them as one system.

The sampler leaves `.frontend-craft/` next to your work with a copy of the hand and a `direction.json` that `shoot.mjs` compares the page with. As your very last step, delete `.frontend-craft/` and `.shots/` from the work folder.

### 3. Write a short spec before any code

Commit to these in about twelve lines of `.frontend-craft/spec.md`:

- **They want:** the sentence from step 1.
- **Business:** who this is, in one specific sentence.
- **The page:** the dealt sections in order, with what real content fills each one.
- **Frames:** exactly what goes in the hero and each image or product slot, and where it comes from.
- **Ideas:** in `.frontend-craft/ideas.md`, three "wouldn't it be cool if" lines per section, at least one with no text in it, and your pick marked. Each pick shows real content; none is a trick.
- **Signature:** the strongest idea, the three you considered for it, and which section it lives in.
- **Identity:** one quiet visual device of this business (a line, a tag shape, a way of treating product shots) and the three places it recurs, plus the accent colour and the real material it comes from.
- **Swaps:** any slot you replaced, and why.

Then reread it and ask: would this exact spec come out of any similar brief? Change whatever would.

### 4. Write the content first

Write the real copy and data before layout. Layout built around lorem ipsum produces generic layout, and real content tells you what the page wants to be. Read `references/copy.md`. Give every sentence a concrete fact, number, name or opinion that could only belong to this business. Never write a 555 phone number, a placeholder email or "Lorem": invent a believable one in the local format.

### 5. Build the first screen, then look at it

**Put the real thing to work on the first screen.** Every page that averaged 8 or more in blind panels, real and generated, did this: a workflow builder running in the hero, a psalm set live by the engineer's own engine, a ledger read out as a sentence. Where you can, the signature lives here. A label, a headline and two buttons beside a picture is the stock hero.

Build only the first screen, in the full system. Then shoot it and study the image:

```bash
node <skill-dir>/scripts/shoot.mjs <folder-or-url>
```

Fix it until it could sit beside the real pages the hand names. Only then build further. A weak first screen never gets rescued by later sections, and fixing the system is cheap now and expensive later.

### 6. Build element by element

The recipes for everything you were dealt are printed in the hand, so start there and use their exact sizes. Every element also has its own chapter in `references/elements/`, 1,570 variants in all, taken from real sites, with exact specs and the mistakes that cheapen them. Reach for a chapter for anything the hand did not cover, or when a section looks weak. Chapters are long, so use the contents list at the top.

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
| Grid, rhythm, composition | `elements/layout.md` and `references/composition.md` |
| The signature component | `references/components.md` and `references/moves/` |
| Phone layouts and nav | `elements/mobile.md` |
| Colour | `references/color.md` |
| Motion | `elements/motion.md`, then `references/motion/` |
| React, Next, Tailwind, shadcn | `references/stack.md` |

### 7. Motion pass

Motion is part of the design, so plan it in step 3 and build it now, in one pass, so that it reads as one language. The default is the precise, quiet motion of a top product site: content settles into place, product surfaces animate as if they are being used, and hovers answer in about 200ms. It should feel smooth and expensive, never showy. The signature may move more than the rest; nothing else should compete with it. A page with precise motion scores well above a still page, so do not strip motion out to look safe. Use calm ease-out curves, never overshoot or bounce. A scroll scene must never leave content that a visitor scrolling normally does not see: `shoot.mjs` must report 0 for text never visible, apart from closed menus and hover labels.

`references/motion/foundations.md` indexes 78 tested recipes. Copy the gating pattern from there, so content stays visible if JavaScript fails and under reduced motion. Never count numbers up on load, split a headline apart on scroll, or fade words in one at a time: blind panels flag all three.

### 8. Verify, then review blind

Run the checks and fix everything real:

```bash
node <skill-dir>/scripts/shoot.mjs <folder-or-url>
node <skill-dir>/scripts/slop.mjs <folder-or-url>
node <skill-dir>/scripts/lint.mjs <folder>
node <skill-dir>/scripts/audit.mjs <folder-or-url>
```

- `shoot.mjs` writes a contact sheet of the first screen, scroll stops, phone frames, load sequence and mid-scroll frames, and reports hidden content, overflow, failed fonts, low contrast and console errors. Treat its FIX lines as work.
- `slop.mjs` names the exact elements that blind panels marked down, with what to do instead, and exits non-zero until nothing is left to remove. Every REMOVE line is work.
- `lint.mjs` lists generated-looking copy and code habits. Each hit is a question, not a verdict.
- `audit.mjs` measures whether the page has the shape of a template. It is a floor, not a target. A first draft of this version optimised for it, scored 100, and lost every blind comparison. Never change the design only to move its number.

Then review the page as a stranger would. Read `references/review.md` and follow it: if you can start a subagent, give it the contact sheet, two full-size frames and that file, and nothing about your intentions, because a builder cannot see their own page. If you cannot, do the review yourself, at least twice, looking for what is weakest. Tell the reviewer that motion cannot be seen in stills: a frame caught mid-animation is not a reason to remove the animation, only to check its timing. Fix what the review finds, starting with finish and spacing, and review again. Stop when a fresh review finds nothing worth fixing, not when the page first looks acceptable.

## Measured defaults

These are medians and typical ranges from top sites. They are where to start, not rules, and a register's own hand overrides them.

| Thing | Start from |
|---|---|
| H1 | 40 to 70px, median about 54. Largest text anywhere: 48 to 80px |
| Headline weight | 400 to 600, median 500. Heavier is rare |
| Headline tracking | 0 to -0.03em, median -0.02em, tighter as it gets larger |
| Headline leading | 1.0 to 1.2, and usually two lines |
| Subhead | 16 to 20px, leading 1.3 to 1.5, about 550px wide, 16 to 32px below the headline |
| Section headings | 28 to 50px, median 36, weight 400 to 500 |
| Body | 15 to 18px with 1.4 to 1.6 leading, at full contrast. Never a hairline face for body text |
| Secondary text | The same size at about 60% ink, not a smaller size |
| Nav | 60 to 78px tall, links 14 to 16px at weight 400 |
| Buttons | 34 to 44px tall, 14 to 16px text, weight 400 to 500, 12 to 20px side padding |
| Button shape | Pills are on about two in five top-site buttons. The rest use small radii, so neither is a default |
| Glass navs | Blur appears on only about one in ten top-site navs. Solid or transparent is the norm |
| Borders | 1px at about 8% ink |
| Section spacing | 80 to 128px of padding, often more between major sections |
| Page width | About 1100 to 1300px, with text columns far narrower |
| Hover transitions | 150 to 300ms, median 200 on controls and 300 on cards |
| Footer | A full, useful footer designed with the same care as the hero: navigation, contact, hours or legal, at text size on the page's grid. Not a giant wordmark, and not a single thin line |
| Accent colour | One confident colour taken from the subject's real materials, used at scale or at one point. Never default blue by habit, and not cream with a serif as a default look |

Radii should nest: an inner radius is the outer radius minus the padding between them. Use one spacing scale. Use tabular numerals in anything that aligns.

## Density and edges

- **Clutter test.** Cover each small element in turn: a badge, a chip, a status dot, a mono label, a divider, a corner note. If the section reads the same without it, delete it.
- **Air test.** A gap separates two ideas. If you cannot say which two, the gap is a hole. Pinned scenes must never leave a screen of empty ground: check every scroll stop in the contact sheet.
- **One layer of detail.** Density belongs inside the real content, such as a product view, a table or a chart. The chrome around it stays quiet.
- **Plain ruled rows.** Date, name and note on hairlines is fine once and redundant twice. Use at most one plain list on a page.
- **Page edges.** Never box the page. Grounds, bands and bleeding media reach the viewport edge. Check it at 1920 wide.

## Filling the frames

Read the foundations of `elements/product.md` before building any product shot, and `references/imagery.md` before reaching for any image. Blind panels rewarded real interfaces and one consistent picture set above everything else, and punished stock photography harder than its absence.

- **Software:** build the actual interface in HTML at real density, with real-looking data, then crop and frame it. This is better than any photograph, and it can move. Thin fake UI with three bars is the most common way a good layout collapses into a template.
- **Physical businesses:** photography does much of the work, but only good photography. `scripts/photos.py` searches libraries that allow reuse. Use a photo only if it is sharp at twice its display size, belongs in a set with the others, and shows this business's real world. Use each photograph once. Grade the set to match, and let photographs keep their own colour rather than one tint over everything. Keep type off the subject: put words in a calm zone or beside the picture.
- **When the pictures are not good enough,** make the frames from what you can make well: real information such as menus, hours, prices, maps and schedules; drawn illustration or diagrams; data-driven graphics; a crafted render. A page of excellent type and real information beats a page of soft stock photos.
- **Never:** grey placeholder boxes, emoji as icons, hotlinked images, the same photo twice, a cut-out figure floating on an empty ground, or text that describes a picture that isn't there.

## The fast giveaways

Read `references/anti-patterns.md` during critique. `slop.mjs` catches many of these automatically. These alone mark a page as generated:

- A metaphor costume, or a gimmick doing the job of design.
- A different trick in every section instead of one system and one signature.
- Oversized heavy headlines as the main idea, or a headline crashing into, split around or clipped by a photograph.
- Thin fake product UI, or anything that could be any company's.
- Soft or generic stock photography, the same photo reused, one duotone on every picture.
- A giant wordmark across the footer, or a giant ghost numeral behind content.
- Numbers that count up on load, words that light up one at a time, tilted paper notes, script signatures.
- Equal three-card rows repeated down a page, numbered 01, 02, 03 markers on things that are not a sequence.
- Gradient-filled text, purple-to-blue washes, glass cards with blur everywhere, glowing blue buttons on blue-black.
- One word in a headline set in italic or a colour, tracked-out uppercase labels above every heading.
- Emoji icons, sparkles, arrows bolted onto every link.
- Copy built from "seamless", "elevate", "not just X, but Y", invented stats, 555 phone numbers.
- Stock generated names in testimonials, and logo walls of made-up companies presented as real customers.
- A fade-up on every block, and cards that lift on hover.
- A beautiful first screen followed by an unconsidered page.
- Stock layouts: a label, headline and two buttons as the hero; three quote cards in a row; a three-up stat strip; a raised middle pricing card; FAQ questions laid out as a grid; sticky stacked cards.
- Design-tool costume: rulers, selection handles, crop marks, pointer-following light.

## When you finish

Say briefly what you built, what you invented, what you verified and what you could not, and what the review found and you fixed. Name the image sources and licences, say which slots you swapped and anything from the hand you set aside because the person asked for something else. Keep it plain. Let the work make the impression.
