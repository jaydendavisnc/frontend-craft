# Coaching for GPT models

The sampler prints this at the top of your hand when it detects Codex, or when you pass `--coach`. Read it as advice from someone who has seen your work next to the best work in the field.

In blind review, pages from Claude using this skill scored 7.9 out of 10, level with real top-tier sites. Your pages scored 6.0 on the same briefs with the same skill. The gap is not taste: your typography, layout and restraint are competent. It comes from depth and specificity. Claude spent about 300,000 tokens on a page and you spent about 80,000. It invented a narrow business and built components that could exist only for that business. You built a tidy page around placeholders for a business, and reviewers wrote "generic", "could be any company", "thin".

Your job is to close that gap, so work much harder than feels necessary. Good enough to pass the checks is where you start, not where you stop.

## How to work

**Do not stop when it looks done.** Your instinct is to finish at the first clean render. Reviewers score what is inside the frames, and that takes hours of human effort to fill. Expect to go through at least three full rounds of rebuilding. `shoot.mjs` tells you which round you are on and what it requires.

**Build the specific things first.** Start with the bespoke components in your hand, before the nav, before the hero. Write their data as real objects in JavaScript: at least a dozen rows or items, each with distinct names, numbers, dates and states. Then build the page around them. A page designed first and filled in later comes out generic every time.

**Match the worked examples.** Your hand includes real code from top-scoring pages. Study how many distinct data points they carry, how many states they show, how small details such as units and timestamps do the convincing, and how little chrome surrounds them. Match that density. Do not copy their content or look.

**Count what you built.** Before each shoot, count the distinct real facts on the page: names, numbers, dates, places, prices. A strong page carries 80 or more. If you have under 40, the page is thin however good it looks.

## Where your pages fail

These are the most frequent notes from blind reviewers on your pages, with what to do instead.

| Reviewers wrote | Do this instead |
|---|---|
| "Generic", "could be any company", vague headline | The H1 names what it is and who it is for, in words a competitor could not use |
| Thin product mock, pale tiny text in the UI | Build the real screen at real size with readable text and a dozen or more rows |
| Small mono or tracked label above every heading | Remove them. Use one or two on the page at most |
| Arrow or icon on every button and link | Plain text buttons. Keep arrows for two or three real destinations |
| Pill above a centred headline over a product window | Follow the dealt hero exactly. This is your default, and it marks a page as generated |
| Three-tier pricing with a highlighted middle | Follow the dealt recipe. Reflect how this business really charges |
| Near-black with one orange accent, or dark moody photography | Use the dealt palette exactly. Do not drift back to this |
| Soft copy: "a little", "what comes next", "in motion", "room to" | Plain statements carrying a fact. Write as the owner of this business would talk |
| Static page, or a single fade-in | Build the dealt load, scroll and hover in full |
| Body text at 13 to 14px | 16 to 18px body, and step colour rather than size for secondary text |
| Sections with only text | Every section carries something real to look at |
| Blue-tinted dark, glowing button, gradient cards | Neutral black, flat surfaces, a solid button. Let colour come from real content |
| Correct but boring, flat panels | Add light and depth to the ground, presence to the type, one confident colour, and custom-built components |
| Too much text, reads like a slide deck | Cut copy hard. If a sentence explains what the page could show, build it and delete the sentence |
| Every section is heading, paragraph, picture | Give each scene its own idea, written as a card in `.frontend-craft/scenes.md`, and build the hardest good one |
| Rows of date, name and note on hairlines, again and again | One plain list at most. Stylise the others: an object per row, size carrying value, a real axis, rows that open |
| Self-quoted or obviously invented testimonials | Use proof that needs no customers: policies, numbers, method, a named person |

## Building it well

**Type.** Your body and UI text run small and your hierarchy runs flat. Set body at 16 to 18px. Give each section one clear largest thing. The dealt type system is exact, so load it and use it.

**Images.** You can generate images, so use them for anything physical. Plan the set first, using `references/imagery.md`, and generate at least twice what you need. Avoid your usual look: dark, moody, golden-hour, shallow focus. Name a real situation and a real time of day. Software pages rarely need images at all, because the product is the image.

**Motion.** Reviewers scored your motion 4.2 out of 10 against 6.9 for Claude. Build these, not a fade:
- A staged first screen: elements arrive in a composed order over about a second, with the product or main object last.
- At least one section where scrolling does real work, such as a pinned sequence, a scrubbed diagram or a chart that draws.
- Product surfaces that animate as if someone were using them: a value updates, a row arrives, a status changes on a loop.
- A hover response on every link, button and card, in about 200ms, on real properties.

Keep content visible with no JavaScript and under reduced motion. GSAP with ScrollTrigger from a CDN is fine, and the recipes are in `references/motion/`.

**Components.** Every control should look designed for this brand. Fill in all states. Tables need alignment, units and tabular figures. Forms need real labels and sensible fields. Footers should do real work rather than repeat the nav.

**Copy.** Write the business sheet before you write any page text: who runs it, what it costs, where it is, what it refuses to do, something that went wrong once. Then write as that person. Read your headings alone, in order. If they could sit on a competitor's page, rewrite them.

## Before you finish

Open full-size frames, not only the contact sheet, and read real text at 100%. For each section, ask whether a senior designer would believe a funded company shipped it. Find the weakest section and rebuild it. Do that until you run out of honest criticism.
