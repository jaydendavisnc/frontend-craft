# Review

How to look at a finished page the way a blind review panel does. Panels like this scored every version of this skill, and their verdicts decided what is in it. A builder cannot see their own page, so give this file to a reviewer who has not seen your plans, or put your plans out of your head and do it yourself.

**Contents.** [Run a review](#run-a-review) · [The questions](#the-questions) · [What panels rewarded](#what-panels-rewarded) · [What panels marked down](#what-panels-marked-down) · [After the review](#after-the-review)

## Run a review

If you can start a subagent, give it exactly this:

- the contact sheet from `shoot.mjs` (`.shots/sheet.jpg` or the path it printed),
- the first screen at full size and one mid-page frame at full size,
- this file,

and this instruction: "You are a senior product designer on a blind review panel. You do not know who made this page or how. Read the review file, open the three images, read real text at full size before you judge, and answer every question in it. Be specific: name the element, say what is wrong and what would fix it. Do not be polite and do not grade on effort."

Give it nothing else: no spec, no hand, no explanation of the idea. If the idea needs explaining, that is the first finding.

If you cannot start a subagent, do it yourself, twice: once at thumbnail size from the sheet and once at full size from the frames.

## The questions

Score each from 0 to 10, then list what to fix. A 5 is "competent, forgettable, could be any template". A 9 could pass as the real site of a top company.

1. **Professional.** Would you believe a funded company with a real design team shipped this today? Could it sit next to Linear or Stripe without embarrassment? This matters most.
2. **Finish.** Would it survive a client review? Look for overlaps, collisions, clipped words, empty screens in the scroll, soft images, unloaded fonts, broken phone layout, low-contrast text, placeholder content.
3. **Spacing and rhythm.** One spacing scale, consistent rails, nothing cramped, no holes.
4. **Typography.** A face with character, used with restraint; clear hierarchy from small exact differences; body text comfortable to read.
5. **Imagery.** Is there something real to look at in every frame: real interface, one consistent picture set, real data? Or stock, filler and empty space?
6. **Components.** Do nav, buttons, forms, cards and footer look designed for this brand, with care in states and detail?
7. **Identity.** One point of view, carried with restraint. A costume or a gimmick does not count.
8. **Voice.** Does the copy sound like one specific business, with real names, numbers and places?
9. **Motion.** Precise and purposeful, or absent, or a fade on everything, or showy?
10. **Overall.** Would you hire whoever made this?

Then list the **tells**: anything that reads as machine-made or templated, each in under eight words. And name the **best** single thing on the page.

## What panels rewarded

The highest-scoring pages, real and generated, shared these. Their judges' own words:

- "Dense, real product UI throughout"
- "Plain-English pace sentence over a believable ledger"
- "Pricing cards carrying live row prices and real delay economics"
- "Interactive cited-answer demo with audio source"
- "Consistent fog-and-dust canyon photography with dated shot captions"
- "Specific, honest copy about slots and costs"
- "Batch log table with cure dates and stock"
- "Rendered site models of the island"

The pattern: real content at believable density, one consistent set of pictures or drawings, specific copy, and one thing a visitor can use. All of it inside a calm, exact page.

## What panels marked down

Counted across blind reviews of generated pages. Each one cost points on almost every page it appeared on.

| Tell | What to do instead |
|---|---|
| Giant wordmark across the footer, photo-filled or faded | A useful footer at text size on the page's grid |
| Headline crashing into, split around or clipped by a photograph | Type in a calm zone of the picture, or beside it |
| Cut-out figure floating on a black or empty ground | Keep the photograph whole, or place the cut-out in a real scene |
| Count-up hero number, giant ghost numeral behind content | Show the final number; delete decorative numerals |
| One duotone or tint on every photograph | Match the set in the grade, keep each photo's colour |
| The same photograph used twice | A different photograph, or one fewer |
| Soft, generic stock photography | Fewer, sharper pictures, or interface, drawing and real information |
| Empty bands of ground in pinned or scroll scenes | Shorten the scroll distance or fill the frame |
| Tilted paper notes, script signatures, sticky-note costumes | Straight, typeset quotes with a real name and detail |
| Words that light up one at a time | Set the paragraph in full ink |
| Three type voices fighting, a pixel or novelty face in one section | One family, or two that clearly disagree, used everywhere |
| Thin or hairline body text at low contrast | Body at 15 to 18px, full contrast, a text face |
| 555 phone numbers, placeholder addresses | Believable details in the local format |
| Numbered FAQ accordion, integration logo tile grid, mac window dots | Plain answers, a few real names, a frame without fake chrome |
| A dark SaaS template on a dentist, clinic or shop | A register that suits the business |
| A stock dark sidebar app shell | An interface designed for this product's real job |
| A single thin line as the footer | A full footer with navigation, contact and legal, designed on the grid |
| Default blue accent, cream paper with a serif by default | One accent from the subject's real materials |
| The same cream panel behind every product shot, text left and UI right in every section | Vary the frames: bleed one, crop one, set one in context |
| Pricing dividers and card edges that do not line up | Put every edge on the same grid |
| A label, headline and two buttons as the hero | The real thing working on the first screen, with one action |
| Three quote cards, a three-up stat strip, a raised middle pricing card | One quote at size with its detail; numbers in a sentence; plans compared in one table |
| FAQ questions laid out as a grid, sticky stacked cards | One column of questions with the answers visible; sections that scroll normally |
| A default dark developer palette, mint on teal, white SaaS with black pills, all grey | An accent and ground taken from this business's real materials |
| One grotesk at one weight, or a wide display face carrying all the identity | A pairing with a clear voice, used at a few exact sizes |
| Overshoot or bounce easing | Calm ease-out curves |

**About motion.** A review of stills cannot see motion, and a frame caught mid-animation looks faded. That is a reason to check the timing, never to remove the animation. Panels scored pages with precise, purposeful motion well above still ones.

## After the review

Fix in this order: anything broken or unreadable, then finish and spacing, then imagery, then everything else. Then run `shoot.mjs` and `slop.mjs` again, and review again with fresh eyes. Two rounds usually find most of it. Stop when a fresh review finds nothing worth fixing.

Do not answer a review by adding things. Most fixes are removals: a second idea, a decoration, a filter, a photo that is not good enough.
