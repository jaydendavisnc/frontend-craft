# Anti-patterns

Read this during critique, once you have a page to look at. It names the ways a generated page looks cheap, and it defines "vibe-code good": work that wins a thumbnail and loses a client review. Find your next fix here, then read [False alarms](#4-false-alarms) before you delete anything, because many moves listed here are fine when chosen on purpose.

**Evidence.** All 32 baseline runs (16 GPT-6, 16 Claude Opus, no skill, 12 briefs) were opened as contact sheets, their HTML and CSS were parsed by script, and their scroll stops were pixel-scanned with the same code as the 147 gold sites. 23 rejected sites were opened beside their reject reasons, 740 analyst `watch_out` notes and 72 design reject reasons were tallied by script, and 13 baseline outputs were placed side by side with a real site in the same genre. Baseline CSS was parsed rather than rendered, so sizes are declared values with `clamp()` resolved at 1440px. Counts such as "14 of 16" come from scripts unless marked "by eye". Runs are cited as `brief/run`, for example `pm-saas/opus-1`.

**Contents.** [How to use this](#how-to-use-this) · [Three ideas](#three-ideas-behind-every-entry) · [Four tests](#four-tests-for-vibe-code-good)

- **[1 Catalogue](#1-the-vibe-code-good-catalogue):** [concept](#concept) · [type](#type) · [colour](#colour) · [layout](#layout) · [components](#components) · [product shots](#product-shots) · [imagery](#imagery) · [motion](#motion) · [copy](#copy) · [finish](#finish)
- **[2 Model collapse](#2-model-collapse):** [the numbers](#the-numbers) · [GPT-style output](#gpt-style-output) · [Claude-style output](#claude-style-output) · [what to keep](#what-to-keep)
- **[3 Real versus imitation](#3-real-versus-imitation):** thirteen side-by-side pairs, then [what the pairs share](#what-the-pairs-share)
- **[4 False alarms](#4-false-alarms)**
- **[5 Before you call it done](#5-before-you-call-it-done)**

## How to use this

1. Read [Model collapse](#2-model-collapse) first and find your own column. Your likeliest failures are measured there.
2. Walk the [catalogue](#1-the-vibe-code-good-catalogue) against your contact sheet, stage by stage. Run each **Detect** line as a real check. Do not answer from memory of what you built.
3. Pick the [pair](#3-real-versus-imitation) closest to your brief and repeat its comparison on your own page.
4. Before removing something, look it up in [False alarms](#4-false-alarms).

Every entry is a question: did you choose this, or did it happen? A choice you can defend in one line stays. A default you cannot defend goes.

### Three ideas behind every entry

**Amplitude.** An idea has a volume, and real teams run theirs low. Asana and `pm-saas/opus-1` both built their pages on handoffs. Asana's version is a 1px line that threads real objects around a sign-up form. The baseline's version is a running track that fills the viewport. Same idea at a very different volume. When something on your page feels clever, halve it, then halve it again.

**Debt.** Every style borrows against what is inside it. Of 147 notes on gold sites, 105 (71%, keyword match on "without", "unless", "needs" and similar) warn that the treatment depends on something underneath: real data, a licensed face, commissioned photography, a strict grid. Across all 740 notes the figure is 51%. Sparse type on a pale ground is elegant over great pictures and empty over weak ones. Before adopting a look, ask what is paying for it on your page.

**Evenness.** Cheap pages spend everything on one layer. GPT-style output sets a 98px headline over a 14px subhead. Claude-style output builds a poster and then runs short of real content inside it. Expensive pages spread care evenly: the reading text, the fourth table row, the button label and the footer all feel equally considered.

### Four tests for vibe-code good

Run these on the whole page before the detailed catalogue.

1. **Thumbnail against 100%.** Look at the sheet at thumbnail size, then read a frame at full size. Real work gains when enlarged, because there is more in it. Vibe-code good peaks at thumbnail and has little to add at 100%.
2. **Next quarter.** Add a fourth plan, a second location, a new feature, a customer story, a new hire. If the concept has no place for them, the concept is a one-off and the company cannot live in it.
3. **Delete the motif.** Remove your signature device. A real page loses some flavour and keeps working. A costume leaves nothing behind.
4. **Who signs it.** Name the person at this business who approves the page: the managing partner, the practice owner, the head of marketing. Would they show it to their most conservative customer without explaining it?

## 1 The vibe-code-good catalogue

### Concept

#### Metaphor costume

- **Looks like.** The product's nearest noun becomes the whole page. A project tool is a running track (`pm-saas/opus-1`), a train timetable (`opus-2`), a tube map (`opus-3`). A notes app is a yellow legal pad. An email API is an airmail envelope. A law firm is a marked-up contract. 15 of 16 Opus runs did this, by eye, and the sixteenth was the dashboard. The prop appears in the first screen and is still there in the footer.
- **Why.** A thin brief offers few facts, so the model grabs a noun. A metaphor then feels like solving design, since every later choice becomes "what would the track do here?" Colour, section names and copy all arrive at once, and the result feels authored.
- **Detect.** Run tests 2 and 3 above. List your section headings: if they pun on the prop, the metaphor is writing the page. Measure how much of the first viewport is prop, and how much is the product. In `pm-saas/opus-1` the product is one pill on lane four.
- **Do instead.** Keep the idea and demote it to one small device inside real content. 40 of 147 gold analyst records (27%, loose text match) describe a site with words like "staged as" or "built like", so a concept is welcome. It belongs in the system, at low amplitude, and it must leave the content alone.

| Product idea | Costume seen | Quiet version a team would ship |
|---|---|---|
| Handoffs matter | Six-lane track fills the viewport and returns in later sections | One thin line joins two owners inside the real product view, the way Asana's wire joins real objects |
| Notes keep every word | Yellow ruled pad as page ground, script font on top | The real transcript with each note anchored to a timestamp, on the site's normal ground |
| Pay for what you send | Airmail stripes round the viewport, a stamp in the nav | Keep the volume slider, rate table and JSON. Drop the stripes. Let one receipt line recur |
| Know what is late | Tube map, split-flap board | A timeline view with one late item marked, then a plain weekly digest |
| Open after work | City sunset scroll, moon in the footer | The next free slot, live, at the top of the page and in the sticky bar |
| Film photographer | Contact sheet, grease pencil, pegged prints | The pictures, large, with roll and date as a small caption |

#### Hero toy

- **Looks like.** The page tells visitors to play: drag the slips, draw on the paper, turn it up, redraw the name. 8 of 16 Opus pages contain such an instruction, against 1 of 16 GPT pages (keyword match).
- **Why.** Interaction is cheap to generate and impressive to whoever built it.
- **Detect.** Would a visitor who ignores it lose anything? Does it answer a buyer's question?
- **Do instead.** Make the interactive thing the page's real job. `api-pricing/opus-1`'s volume slider prices your plan, and `dentist/opus-1`'s slot picker books a visit. Both are worth keeping inside any concept. Dragging comment slips around is not.

#### Interchangeable page

- **Looks like.** Swap daybreak for wick & wild, juniper or sidenote and little else needs to change. All three GPT coffee runs chose the name daybreak, and two chose the same headline. `coffee-shop/gpt6-1` and `gpt6-3` are nearly one page.
- **Why.** Medians are safe, and inventing facts feels risky.
- **Detect.** Do the swap test from SKILL.md. Then count facts per section that could only belong to this business: a street, a price, a person, a date, a number with a unit.
- **Do instead.** Invent one specific business before designing, and place at least one such fact in every section. GPT copy has a median of 3 digit strings per 100 words, Opus 4. Numbers are the cheapest specificity you have.

### Type

#### Oversized heavy headline

- **Looks like.** `pm-saas/opus-2` sets 233px at weight 800. `ai-notes/opus-1` sets about 236px at 900. Opus H1s have a median near 130px across 14 parsed runs. Fat faces hide in the data: Caprasimo in 4 of 16 runs reads as weight 400 in CSS and looks like 900 on screen. League Gothic reached 325px.
- **Why.** Size and weight give instant authority, and the reward is visible in a screenshot.
- **Detect.** Of 98 gold sites with a measured H1, none combine 96px or more with weight 700 or more. 13 go to 700 or above, all under 96px. 9 go to 96px or above, all below 700. Only 6 of 218 silver sites combine the two. Also check the H1 to subhead ratio: gold has a median of 3.0, with the middle half from 2.4 to 3.8. Judge fat faces by stem thickness, not by the CSS number.
- **Do instead.** Choose one route by register.
  - Near the median, 54 to 64px at 400 to 600, for almost all product work.
  - Large and light: Stripe Sessions at 100px and weight 250, Resend at 96px and 400, mymind at 140px and 400. The letterforms stay shapes, so the size reads as calm.
  - Heavy and modest in size, for a confident plain voice.
  - Heavy and huge only for a brief that asks for loud, sitting on strong real imagery, as on Fenriz Gym.

#### Collapsed scale

- **Looks like.** One giant headline with everything else tiny. Most GPT runs put 72 to 99px over a hero subhead of 13 to 16px (7 runs parsed), with 12 or 13px button labels. In `pm-saas/gpt6-1`, 62 of 104 font-size declarations are 12px or smaller. In `sales-dashboard/gpt6-1` it is 67 of 79, with 8 to 10px the commonest sizes. The median GPT run has 34 declarations under 13px, some of them inside mock UI, and the median Opus run has 3. The H1 to subhead ratio runs near 5.4 against gold's 3.0.
- **Why.** Tiny type reads as "refined" in templates, so everything except the headline gets turned down to look calm.
- **Detect.** List your sizes. Flag reading text under 15px and any text under 11px outside a product fragment. On a median gold page only 5.8% of characters are under 13px.
- **Do instead.** Raise the bottom of the scale before touching the top.

| Role | Before (`coffee-shop/gpt6-1`) | After |
|---|---|---|
| H1 | 98px | 64px |
| Subhead | 14px | 19px |
| Body | 15px | 16px |
| Button label | 13px on a 52px button | 15px on a 40px button |
| Label | 9 to 10px | 13px, or body size at 60% ink |

#### No type scale

- **Looks like.** Sizes such as 19.4, 18.7, 17.3, 15.5 and 14.5 side by side, because each selector received its own `clamp()`. `ai-notes/opus-1` declares 48 distinct sizes in its base rules. The median rendered page has 22 distinct sizes for Opus and 19 for GPT, against about 9 on gold (that list is capped at 14, with a p75 of 12).
- **Why.** Fluid type written selector by selector looks careful in code.
- **Detect.** Grep the font sizes and count them. Two sizes within 2px of each other are a drift.
- **Do instead.** Declare six to nine steps as variables. Let only the display steps be fluid.

#### Crushed tracking

- **Looks like.** GPT headlines run about -0.04em, up to -0.06em, in pixel values such as `-3.8px`. Gold has a median of -0.02em and a p25 of -0.03em. Two rejects were cited for Inter at -5%, so letters touch.
- **Why.** Tight tracking is a known signal of modern type.
- **Detect.** Convert to em. Look for touching letters at regular weight. Pixel tracking also fails to scale down on phones.
- **Do instead.** Use em, tighten with size, and test the actual face. Vercel's pricing H1 sits at -0.06em in a face that can take it, so the number alone settles nothing.

#### Script font as humanity

- **Looks like.** Margin notes, signatures and captions in a Google handwriting face. 7 of 16 Opus runs load one, with Reenie Beanie the favourite. GPT does this less, and draws a loose arrow beside a slanted aside instead.
- **Why.** It imitates a human hand at no cost.
- **Detect.** Repeated letters look identical, which no hand produces. Ask whether a person at this business actually wrote this.
- **Do instead.** If a hand matters, draw it once as a path, as with La Table de Joakim's logotype, or show real marks where they truly occur, as with the stylus ink on reMarkable's device screens. Otherwise cut it. 5 of 147 gold records mention hand-drawn work at all.

#### Accent word in every heading

- **Looks like.** 14 of 16 GPT H1s mark a word or phrase in italic or colour, then repeat this on most section headings. The chosen word is usually just the last one.
- **Why.** It is a fast way to add a second voice to a headline.
- **Detect.** Read only the marked words in order. "Days, feeling, impact, comfortable" is decoration. If the marked words make the page's argument, the device is working.
- **Do instead.** Mark the claim, or use another lever. Function marks every heading too, and it gets away with this because the phrase is the claim. Linear separates two sentences with one step of ink. Attio runs a dark lead-in into grey text. Several headings can go unmarked.

### Colour

#### Flat colour standing in for craft

- **Looks like.** Whole viewports of saturated fill carrying a sentence. 12 of 16 Opus pages have at least 20% of their scroll stops on a saturated ground, and `engineer-personal/opus-1` has 89%. Only 5 of 147 gold pages reach 20%, and 134 of 147 have none at all. Opus pages have a median of 4 full-frame grounds, gold 1 (p75 2).
- **Why.** A saturated field is the cheapest way to look designed, and it removes the need to put anything in the frame.
- **Detect.** Mentally set every fill to the page ground. Whatever remains is your real content. If a section leaves only text, the colour was the content.
- **Do instead.** Let colour live in something. Each option suits a different register.
  - In the product: status dots and data, as on Linear, where the page itself stays neutral.
  - In photographs: Fred's page is near-white and its pictures are loud.
  - In inset rooms on a neutral page: Framework's lavender, yellow and green panels each hold a real product.
  - In one slab, spent once: Zed's blue footer, Loops' deep red close.
  - As the identity itself, where the brief allows it and the system is strict: Astral, Jasper.

#### Primary triad

- **Looks like.** Saturated yellow plus saturated blue, often with red. These appear together in the CSS of 11 of 16 Opus runs, whatever the brief: a coffee shop, a dentist, a law firm and a notes app land in the same place.
- **Why.** Primaries read as bold and graphic, and "bold" is what a model reaches for when told to avoid generic.
- **Detect.** Would your palette change if the brief changed? Could this palette belong to a children's toy?
- **Do instead.** Take the palette the sampler dealt, or derive one accent from something the business owns. Keep one strong hue.

#### Earth-tone default

- **Looks like.** Near-white warm ground, terracotta accent, sage secondary, on any business. 15 of 16 GPT heroes sit on a near-white ground and 9 are measurably warm. Sage values appear in the CSS of 14 of 16 runs and terracotta in 9.
- **Why.** It feels tasteful and offends nobody.
- **Detect.** Put your hero beside a page from an unrelated brief. If the palette would not change, you did not choose it.
- **Do instead.** Warm grounds are fine (see [False alarms](#4-false-alarms)). What needs fixing is reaching them without thinking. Use the dealt palette, and let the accent come from the business.

#### Muted text below contrast

- **Looks like.** Pale grey body on a pale tint. GPT pages have a median of 25.5 contrast failures, up to 134. Opus has 2.5. Several failures are real reading text at 3.7 to 4.0:1, often at 14px.
- **Why.** Lower contrast feels softer and calmer, and the model does not read its own page.
- **Detect.** Read the `shoot.mjs` report. Treat each failing run of reading text as a defect.
- **Do instead.** Raise size first, then darken to at least 4.5:1. Keep labels and secondary text on one ink step, about 60%, measured against the actual ground.

### Layout

#### Sample book

- **Looks like.** Every section has a new ground, new scale and new idea. `coffee-shop/opus-1` and `dentist/opus-1` each show 6 grounds. The reject practiceserver.com shows the same failure as "mismatched section treatments".
- **Why.** Each section is generated as a fresh idea, and novelty per section feels like value.
- **Detect.** Cover the copy. Would two neighbouring sections convince you they came from one page? Count ground colours, label styles and card styles.
- **Do instead.** Fix rails, section padding, grounds and one divider, then vary one or two things between neighbours. Gold pages use 2 section padding values. See `elements/layout.md`.

#### Template stack

- **Looks like.** Hero, logos, three cards, split, quote, pricing, FAQ, tinted CTA band, thin footer. 13 of 16 GPT runs use `repeat(3, ...)`. The three GPT PM runs are nearly one section order, and rejects navsuccess.com and imagekit.io show where this leads.
- **Why.** It is the median of the training data.
- **Detect.** Write your section list. If no section is unique to this business, you shipped the kit.
- **Do instead.** Replace two stack sections with something the business owns: a full fee table, a live schedule, a changelog, a menu with prices, a real comparison. Order what remains by the buyer's questions.

#### Short page

- **Looks like.** GPT pages have a median height of 3,599px, and the tallest is 5,170px. All 16 sit below the gold p25 of 5,906px. Gold's median is 8,165px.
- **Why.** The stack is finished, so the job feels finished.
- **Detect.** Does the page answer price, proof, how it works, who is behind it, and what could go wrong?
- **Do instead.** Add depth instead of more sections of the same shape. Vercel's pricing runs to 15,856px because the comparison table is the page. Short is fine for a personal site (see false alarms).

#### One sentence per screen

- **Looks like.** Long scrolls with little in them. Opus pages have a median of 10,587px for about 4,500 characters: 428 characters per 1,000px, against about 570 on gold and 860 on GPT. Sticky scenes hold one line at poster size.
- **Why.** Pinned scenes feel cinematic and fill height cheaply.
- **Detect.** Find scroll stops with under 20 words and no real media.
- **Do instead.** Pin only where the picture changes. Fold single-line scenes into a denser composition.

### Components

#### Surface stack on every card

- **Looks like.** White fill, 1px border, radius and soft shadow on every box, in every section. The reject navsuccess.com is the end state: identical white shadow cards on every screen.
- **Why.** That stack is what component kits ship.
- **Detect.** Count the devices per boundary. See `elements/surface.md`.
- **Do instead.** Use one device. Linear's three feature columns are split by a hairline and have no box. Vercel's plans share hairlines, so three plans read as one object.

#### Tall nav, small label, reflex glass

- **Looks like.** GPT navs run 80 to 114px, often with an announcement bar above them, against a gold range of 60 to 78px. Buttons are 43 to 52px tall with 12 or 13px labels, against a gold median of 40px at 15px. Opus overshoots the other way, with 56px buttons at 17px. `backdrop-filter` is on the nav in 16 of 16 GPT runs, against 11% of gold navs.
- **Why.** Air reads as premium, small labels read as refined, and glass has become the default sticky header.
- **Detect.** Measure both against the table in SKILL.md. Does anything visually rich actually pass behind the nav?
- **Do instead.** Stay near the measured defaults unless the register says otherwise. Use a solid or transparent nav, and keep blur for a bar that really crosses media.

#### Glyph icons and arrow on everything

- **Looks like.** Text glyphs doing icon work. ↗ appears in 16 of 16 GPT runs, 90 times. ✳ appears in 12 of 16, 71 times. ★ appears in 6. 15 of 16 use a non-arrow glyph. True colour emoji are rarer, in 3 of 16. The reject thepivotapp.ai shows the extreme, with emoji as card art.
- **Why.** Glyphs need no asset and no decision.
- **Detect.** Grep the visible text for these characters. Count arrows per viewport.
- **Do instead.** Use one icon set at one stroke, where an icon means something. Vercel's plan lists give each feature its own icon. Keep arrows for a few links that truly go somewhere.

#### Hero stickers

- **Looks like.** A rotating circular seal (6 of 16 GPT runs, by eye), a tilted taped note (CSS tilts in 11 of 16), a script aside with a curved arrow (at least 5 of 16, by eye), an asterisk (12 of 16). The reject autoecole-lafont.fr shows stickers crowding a page.
- **Why.** They imitate hand-made warmth when there is no real photograph or fact to carry it.
- **Detect.** Remove each sticker. Did a fact leave the page?
- **Do instead.** Put the fact in the layout: hours, an address, a price, a name. If a badge is true, such as a certification, set it plainly.

#### Tagline eyebrow on every section

- **Looks like.** GPT runs average 1.2 eyebrows per section, with a median of 9 all-caps strings of three words or more. Most are slogans, such as `A LITTLE CLARITY GOES A LONG WAY`, not labels. The reject lynz.com.br has a red pill above every section.
- **Why.** Eyebrows are in every template, and they make a section look structured.
- **Detect.** Would a reader scan for this word? A label names a category. A tagline restates the heading.
- **Do instead.** Keep labels that name something, as Asana does with a product area. Delete the rest. Half of gold records mention a label or eyebrow (see false alarms), so the content of the label is the issue.

#### Token drift

- **Looks like.** The GPT PM runs declare up to 19 distinct border radii and up to 229 distinct hex values in their CSS, with `var()` used only 17 to 45 times. Gold's top radius lists hold about 6 values. Opus is better here, with 20 hexes and 178 `var()` uses at the median.
- **Why.** Fake UI is written inline, element by element.
- **Detect.** Count radii and hexes by script.
- **Do instead.** Build fake UI from the same tokens as the page. Radii should nest.

#### Thin or theatrical footer

- **Looks like.** GPT footers have a median of 2 links. Opus footers have 3.5, and 7 of 16 end on a giant wordmark (by eye).
- **Why.** The footer comes last, when attention is spent.
- **Detect.** From the footer alone, can a visitor reach pricing, contact, legal and an address?
- **Do instead.** Build a real index first. A big wordmark is fine beside one, as on Dekmantel and La Table de Joakim.

### Product shots

#### Thin fake UI

- **Looks like.** A framed window with three grey bars, or columns holding one or two cards labelled "Design". `pm-saas/gpt6-1`'s window is 1,060px wide with text at 8 to 11px and almost nothing to read. The reject unchatgpt.co puts two empty grey boxes where the product should be. 144 of 740 analyst notes (19%, keyword match) warn about thin, empty, placeholder or fake content, and 11 of 72 design rejects cite it.
- **Why.** Attention went to the frame. A UI silhouette passes at thumbnail, and real content takes writing.
- **Detect.** Read it at 100%. Can you say what this team is working on this week? Does each row have a specific noun, owner, date and status? Linear's window shows a named issue, an inline code term, an activity log with people and times, and a live thread with an agent.
- **Do instead.** Write the data first, as 20 to 30 rows of plausible records. Then build a real interface at real type sizes, around 13px, and crop it large. See `elements/product.md`.

#### Tilted floating fragments

- **Looks like.** A window rotated 2 degrees (`ai-notes/gpt6-1` uses `rotate(-2deg)` with a soft shadow), chips floating at its corners, or an integrations ring with logos orbiting a tile (3 of 3 GPT PM runs). The reject thatspaceformen.com floats three phones on a gradient.
- **Why.** Rotation suggests motion and hides how little is there.
- **Detect.** Straighten it. Is it still interesting?
- **Do instead.** Show it straight, large and cropped by an edge. If you need two states, show two real states.

#### Dashboard by numbers

- **Looks like.** Four KPI cards, each with sparkline, delta pill and caption, then a line chart, a donut and a recent-orders table. `sales-dashboard/gpt6-1` shows the same revenue figure twice and adds a pep-talk card.
- **Why.** It is the default admin template.
- **Detect.** What single question does this screen answer? If you cannot name one, it answers none.
- **Do instead.** Lead with the decision. `sales-dashboard/opus-1` opens on how far behind target the quarter is and how many days remain, which is why it is among the strongest Opus runs. Plausible puts six stats in one band, gives one chart half the screen, then uses two ranked tables.

#### Product in costume

- **Looks like.** Good data dressed as a prop: a Gantt as running lanes, status as a split-flap board, projects as coloured tube lines. The data in these runs is often real and well written.
- **Why.** The page metaphor reaches the UI.
- **Detect.** Would a user accept this as the app's real interface?
- **Do instead.** Keep the data, and draw the interface the product would actually have.

### Imagery

#### Interchangeable stock mood

- **Looks like.** Top-down latte art, hands around cups, a sign reading CAFE, a smiling woman in red, a candle on fur. 10 of 16 GPT pages use bitmaps, and none of the sets shows a business of its own. 17 of 72 design rejects cite stock or generated-looking imagery.
- **Why.** Mood is easy to produce, and specificity is hard.
- **Detect.** Can you see this business's own thing? Do the pictures share light, lens and ground?
- **Do instead.** Direct a set: one light, one surface, one crop logic, and the product visible. Blue Bottle's frame is one mug, one sprig and a dark moss ground, and every other shot obeys the same rules. If you cannot make images, build from information: menus, hours, maps, prices.

#### Procedural object at poster scale

- **Looks like.** A cup, plate, barbell or candle built in CSS, SVG or canvas and shown at hero size. 14 of 16 Opus pages have no `<img>`, and 12 of 16 use canvas. These builds are impressive, yet up close the latte art is an icon and the plate is a gradient.
- **Why.** It cannot photograph, so it renders.
- **Detect.** Hold it beside a real photograph at full size.
- **Do instead.** Use the fake at a smaller scale, or commit to a drawn system that does not pretend to be a photograph. For a physical business, lean on information and type.

#### Photographs as props

- **Looks like.** The work shown as film strips, pegged prints and grey contact sheets, under a 325px name (`photographer/opus-1`).
- **Why.** The concept outranks the content.
- **Detect.** How much of the first viewport is the actual work, at its own colour?
- **Do instead.** Stage nothing. See [pair 11](#pair-11-photographer).

#### Masks, grain, ghost type and overlays

- **Looks like.** Arch-top crops (at least 4 of 16 GPT runs, including 2 of 3 coffee runs), organic blobs (the reject guardianthce.com), `feTurbulence` noise in 6 of 16 Opus runs, a pale ghost wordmark (the reject practiceserver.com, the footer of `ai-notes/opus-1`), brand-colour overlays on photographs (autoecole-lafont.fr), and headlines across faces (bentpixels.com).
- **Why.** They add surface richness without content.
- **Detect.** Remove the effect. Is the picture strong enough as a plain rectangle?
- **Do instead.** Use the site's radius or go full-bleed. Choose crops with a quiet area, as Function and La Table de Joakim do. Use grain only where it belongs to a real system.

### Motion

#### Static page

- **Looks like.** Nothing moves. 13 of 16 GPT runs show four identical load frames, and only 1 of 16 differs noticeably at 0.3s. 3 of 16 have any `@keyframes`, and none use `IntersectionObserver`.
- **Why.** Motion is left until last, then skipped.
- **Detect.** Compare the load frames and read the motion digest.
- **Do instead.** Plan one load sequence, one scroll behaviour and one hover language in the spec. Product surfaces should move as if used.

#### Load theatre

- **Looks like.** The page performs before it can be read. 13 of 16 Opus runs are still changing at 0.3s, and 5 of 16 at the third load frame, around 1.5s. `coffee-shop/opus-1` also flashes a fallback serif.
- **Why.** Intro animation is the most visible motion to build.
- **Detect.** When can you first read the H1? Compare the load strip.
- **Do instead.** Show content almost at once and let it settle. Gate fonts so that the fallback does not flash.

#### Scrubbed reading

- **Looks like.** A headline half lit and half grey as you scroll, so most paused positions show an unreadable sentence (`coffee-shop/opus-1`, `ai-notes/opus-1`).
- **Why.** It is a showpiece recipe.
- **Detect.** Look at the during-scroll strip. Can each frame be read?
- **Do instead.** Reveal a line once, quickly, and leave it. Save scrubbing for a picture that changes.

### Copy

The classic ban-list words have nearly gone: the two most famous appear 0 times in 32 runs. The tics have moved, so an old checklist will pass these pages.

#### Fragment couplet

- **Looks like.** Two short parallel fragments. 14 of 16 GPT H1s take this form, and 54 of 181 short GPT headings (30%), against 9 of 242 for Opus. `Good questions. Simple answers.` or a close variant heads the FAQ in 4 of 16 runs.
- **Why.** The rhythm sounds like a slogan and commits to nothing.
- **Detect.** Do either of the fragments contain a fact? Could a competitor use them?
- **Do instead.** Write one plain sentence that says what the thing does or holds.

| Before | After (invented business) |
|---|---|
| Good coffee. Better days. | Two roasts on bar this week, from $4 |
| Clear counsel. Confident futures. | Commercial litigation for Chicago founders |
| Good work. All together. | Every project, its owner and its next date, on one screen |

#### "A little" voice

- **Looks like.** "A little" appears in 16 of 16 GPT runs, 120 times. "Thoughtful" appears in 8 of 16. "Your" appears 248 times.
- **Why.** Modest warmth is safe, and it sounds human on first read.
- **Detect.** Grep these words. Remove the sentence. Did the page lose information?
- **Do instead.** Replace each with a fact. Warmth comes from specifics about people and place.

#### Deadpan negation

- **Looks like.** A dry voice defined by what is absent. "Nobody" or "no one" appears in 11 of 16 Opus runs, and a median Opus run has about 9 negating sentences, against 3 for GPT. A coffee shop, a law firm and a PM tool all sound like the same wry friend.
- **Why.** Wit reads as a point of view, and it beats marketing voice. It is a real strength that became a tic.
- **Detect.** Read the headings aloud across pages. Count sentences built on no, not, nobody or nothing.
- **Do instead.** Keep the concreteness and drop the pose. Say what it does and for whom. Save one dry line for where it earns a laugh. A dentist needs to sound like a dentist.

#### Invented proof

- **Looks like.** `ai-notes/gpt6-1` lists real companies in a customer logo row. 4 of 16 GPT runs use kit placeholder logos such as Acme, Quotient and Circooles. 6 of 16 show a five-star row, usually beside an avatar stack. The reject axivusauto.com shows `000+` in its stats. Names repeat too: GPT uses Alex in 5 runs and Jamie in 4, Opus uses Priya in 6, Okafor in 5 and Marcus in 4.
- **Why.** The template has a slot for proof.
- **Detect.** Would any claim on this page be false if the business were real? Any real company named as a customer is a fabrication. Would this set of people plausibly work together here?
- **Do instead.** Invent fictional names that fit the place, age and trade of this business, and list them at the end as invented. Better, use proof that needs no claim: a real workflow, a guarantee, a named founder.

### Finish

#### Designed top third

- **Looks like.** A strong first screen followed by unconsidered sections. Pricing, FAQ and CTA in the GPT runs are all kit. In Opus runs the concept loses steam and the last screens become one line on a colour.
- **Why.** The first screen gets the attention and the iteration.
- **Detect.** Judge your weakest scroll stop, then ask if it could sit beside the first.
- **Do instead.** Spend your second critique round on the bottom half.

#### Dead ends and collisions

- **Looks like.** Dead links in 14 of 16 GPT runs. Text colliding with a prop: the comma of `coffee-shop/opus-1`'s H1 slides under the plate. Reveals leaving half-empty frames.
- **Why.** The model never used the page.
- **Detect.** Read `shoot.mjs` output, click every link, and view each sheet at 100%.
- **Do instead.** Fix everything the tools report. Point links at real sections or remove them.

## 2 Model collapse

Models collapse in opposite directions. Find your column, then check the other one too: a model that corrects hard against its own habit can land on the other's, though this was not measured here.

### The numbers

Gold figures come from the corpus. Where gold is blank, no comparable measure exists. Full-frame grounds counts a colour only when it covers 30% of a scroll stop, so it runs lower than the page-ground count in `elements/layout.md`, which uses another method.

| Measure | GPT-6 (16 runs) | Claude Opus (16 runs) | Gold |
|---|---|---|---|
| Page height, median | 3,599px (max 5,170) | 10,587px (max 23,088) | 8,165px |
| Characters on page, median | 3,084 | 4,537 | 4,631 |
| H1 at 1440, median | 83px | about 130px (max 325) | 54px |
| H1 weight | 400 in 9 of 16 | 800+ in 7 of 16, fat 400 in 4 | 500 |
| H1 to subhead ratio | about 5.4 | 7 to 21 in samples | 3.0 |
| Body size | 13 to 15px | 17 to 19px | 16px |
| Font-size rules under 13px, median | 34 | 3 | 5.8% of characters |
| Rendered sizes, median | 19 | 22 | about 9 |
| Full-frame grounds, median | 1 | 4 | 1 |
| Pages with 20%+ saturated stops | 0 of 16 | 12 of 16 | 5 of 147 |
| Primary font | DM Sans in 15 of 16 | Archivo in 7, no other above 3 | Inter 14%, the top single family |
| Script font loaded | 1 of 16 | 7 of 16 | 3% of records mention hand work |
| Nav blur | 16 of 16 | 0 of 16 | 11% |
| Bitmap images on page | 10 of 16 | 2 of 16 | |
| Canvas | 0 of 16 | 12 of 16 | |
| Transition duration, median | 200ms | 300ms (up to 550) | 200ms |
| `@keyframes` present | 3 of 16 | 15 of 16 | |
| `IntersectionObserver` | 0 of 16 | 12 of 16 | |
| Still changing at 0.3s | 1 of 16 | 13 of 16 | |
| Contrast failures per page, median | 25.5 (max 134) | 2.5 (max 19) | |
| Dead links | 14 of 16 | 1 of 16 | |
| Hex values in CSS, median | 38.5 (max 229) | 20 (max 46) | |
| `var()` uses, median | 55.5 | 178.5 | |
| Text glyph icons | 15 of 16 | 0 of 16 | |
| Colour emoji | 3 of 16 | 0 of 16 | 3 of 147 records |
| "A little" | 16 of 16 (120 uses) | 2 of 16 | |
| "Nobody" or "no one" | 0 of 16 | 11 of 16 | |

The older tells barely register: `background-clip: text` appears in 0 of 32 runs, and a purple hero in 2 by eye. Passing an old checklist proves little.

One measure surprised us. Raw visual busyness, the share of 30px cells with real contrast, does not separate imitation from gold. GPT sits at 25%, gold at 27%, and Opus at 38%. A costume adds pixels without adding information, and a sparse product shot can match gold's pixel count with tiny text. Judge what the detail says.

### GPT-style output

Your page is a tidy, short, polite template. It looks competent and belongs to nobody. Check these first.

- **Same font, same pairing.** DM Sans body with a display serif. Is this font here because of this brief?
- **Scale.** Reading text at 13 to 15px, labels at 8 to 11px, under an 83 to 99px headline. Raise the bottom.
- **Length.** Under 5,000px with six sections. What questions are unanswered?
- **Frames.** A window with thin content, tilted, with chips. Read it at 100%.
- **Stickers.** Seal, tilted note, asterisk, script aside, arch mask. Remove them and see what you lost.
- **Copy.** Fragment couplets, "a little", "thoughtful", one italic word. Rewrite with facts.
- **Proof.** Real company names, Acme-style logos, five stars. Fix or remove.
- **Motion.** If the load strip shows four identical frames, the motion plan was skipped.
- **Glass.** You have a blurred nav. Why?
- **Contrast.** Read the report, since this is your commonest measurable defect.

### Claude-style output

Your page is a striking poster sequence built on one literal idea. It looks authored and no company would ship it. Check these first.

- **Costume.** You have one. Run the four tests, and demote the idea to one small device.
- **Name pun.** Is the concept derived from a pun on the name you invented (Frank, Baton, Both Ends)? Rename the business and see if the design survives.
- **Weight.** Heavy display, or a fat face at nominal 400. Try the page at weight 500 near 64px.
- **Colour.** Saturated primaries on whole viewports. Move colour into objects.
- **Scene count.** A new ground per section, and a new prop per section. Hold one system.
- **Handwriting.** You loaded a script font. Remove it.
- **Procedural hero.** A CSS object at poster scale. Reduce it, or replace it with information.
- **Density.** Long scroll, few words. Fold single-line scenes together.
- **Wit.** Your copy is dry and negates things. Would this business really talk like this?
- **Load.** Hero unreadable for over a second. Shorten it.
- **Stock cast.** Priya, Marcus, Dr. Okafor. Change them.
- **Footer.** Giant wordmark over an empty footer. Build the index.

### What to keep

The fix is never simply to do the opposite. Each model has strengths that the other lacks.

**GPT-style strengths.** Sensible section order, normal page structure, calm neutrals, believable components, conventional navigation, and a page a client could use tomorrow. Keep this restraint, and fill it with real things.

**Claude-style strengths.** Invented specifics, working interactions, disciplined tokens, good contrast, motion that exists, and real data in UI. `sales-dashboard/opus-1` and the rate card in `api-pricing/opus-1` are genuinely strong, and they come from the same habit as the costumes. Keep the invention and spend it on the content rather than on the wrapper.

## 3 Real versus imitation

Each pair below was composed side by side at the same scale from real frames. Numbers for the imitation come from its CSS and shoot report. Numbers for the real site come from `corpus/deep/<slug>.json` or capture metadata. Use the closest pair as your template for critique: put your page beside the real one and repeat the comparison.

### Pair 1: PM tool, tidy (`pm-saas/gpt6-1` Stride, Linear)

| | Stride | Linear |
|---|---|---|
| H1 | 75px, 600, -0.047em, centred | 64px, 510, -0.022em, left |
| Nav | 90px | 73px, 13px links |
| Hero button | 48px tall, 13px label | 32px tall, 13 to 14px |
| Section padding | 83 to 95px | 128px |
| Page | 5,170px | 9,960px |

- **Density.** Stride's window holds a project name and two cards per column. Linear's holds a named issue, an inline code term, labels, an activity log and a live agent thread. You could work from it.
- **Colour.** Stride tints the ground, the headline word, buttons, sparkles and cards with one lilac. Linear's chrome is grey, and all colour is status and data inside the product.
- **Edges.** Stride's window has a 15px radius, a 1px lilac border, a 5px translucent ring and a tinted 70px shadow, so it reads as a mockup placed on a page. Linear's edge is white at 8% on near-black, and the window nearly dissolves into the ground and runs off the fold.
- **Features.** Both use three columns. Stride boxes each one around a tilted miniature. Linear uses three line drawings, small captions and hairlines, with no boxes.

### Pair 2: Handoffs (`pm-saas/opus-1` Baton, Asana)

| | Baton | Asana |
|---|---|---|
| H1 | 64px, 810, -0.036em | 64px, 300, -0.02em |
| Hero device | Six-lane track, most of the viewport | 1px line with small real objects |
| Page | 12,531px | 8,440px |

- **Same size.** The H1 is 64px on both. All of the difference comes from a 510-point weight gap and what surrounds the words.
- **Idea.** Both say work moves between people. Asana's line routes through avatars, a document chip and an agent label, then leaves the page. Baton's track returns as a timeline, a timing rail and a chequered finish.
- **Job.** Asana's first screen does the job: sign-up form, two providers. Baton's first screen frames two buttons.
- **Honest note.** Asana has flaws, including a chat panel over its content. Real sites are messy. Copy the amplitude, not the noise.

### Pair 3: Notes and paper (`ai-notes/opus-1` Ibid, reMarkable)

| | Ibid | reMarkable |
|---|---|---|
| H1 | about 236px, 900 | 63px, 375, 0 tracking |
| Subhead | 21px | 25px |
| Hand marks | Script font everywhere | Real stylus ink on device screens |
| Page | 9,081px | 9,787px |

- **Where paper lives.** Ibid makes the page into paper: ruled lines, red margin, curled corner. reMarkable never does. Paper appears only on the device, and the page ground is a quiet off-white.
- **Colour.** Ibid uses yellow, blue, pink and oxblood fields. reMarkable has a green hero, an orange sofa and pale neutrals, and all of that colour comes from photographs.
- **Image.** reMarkable has one photo set with shared light. Ibid has sticky notes, a receipt and a polaroid, each built as a prop.
- **Lesson.** Sell the feeling with the object itself. Ibid's transcript with footnotes is a strong idea, and it needed no pad around it.

### Pair 4: AI notes, tidy (`ai-notes/gpt6-1` sidenote, Tana)

| | sidenote | Tana |
|---|---|---|
| H1 | 76px, 400 | 52px, 500, -0.02em, one line |
| Subhead | 14px | 19px, 680px wide |
| Nav | 108px | 72px |
| Button | 50px, 13px label | 40px, 15px label |
| Page | 3,524px | 9,534px |

- **Frame.** sidenote's card is tilted, with 10 to 11px text, and could describe anything. Tana opens on a gradient stage holding a video call with four real people and a dark assistant panel, then a large photograph with a live query bar set in it.
- **Scale of media.** sidenote's visual takes under half the width. Tana's takes all of it.
- **Proof.** sidenote claims real companies as logos. Tana names the actual tools it connects with, which is a fact about the product.
- **Rhythm.** sidenote gives every heading a coloured italic second line. Tana's headings are all one plain voice.

### Pair 5: Pricing (`api-pricing/gpt6-1` relay, Vercel pricing)

| | relay | Vercel |
|---|---|---|
| H1 | 58px, 500, -0.053em, centred | 64px, 450, -0.06em, left |
| Button | 43px, 13px label | 36px, 14px label |
| Page | 2,433px | 15,856px |

- **Structure.** relay has three cards with gaps and shadows. Vercel has one grid with shared hairlines, so three plans read as one object.
- **Depth.** relay ends with a calculator, an FAQ and a footer. Vercel continues into a searchable sticky comparison with real rows and per-unit prices. Pricing pages are reference documents, and this is the main thing relay misses.
- **Marks.** relay repeats one tick. Vercel gives each feature a distinct icon, then uses plain ticks in the matrix.
- **Colour.** relay tints one card and adds a lime button. Vercel uses black and grey, with a small tag for the popular plan.

### Pair 6: Email API (`api-pricing/opus-1` Frank, Resend)

| | Frank | Resend |
|---|---|---|
| H1 | 122px, 800, -0.04em | 96px, 400, -0.01em, serif |
| Radius | 0 to 4px | 16 to 24px |
| Page | 5,248px | 12,360px |

- **Edges.** Frank frames every viewport with a thick airmail stripe. It appears on all sections and fights the rate table. Resend has no frame, and one render sits in light on black.
- **Frame contents.** Resend's main object is working code with language tabs. Frank's is a stamp, then good content lower down.
- **Be fair.** Frank's slider, rate table and JSON response are real product thinking, stronger than most baselines. Take off the envelope and you have a good page.
- **Weight.** Both are big. Resend's size is carried by a light serif. Frank's extended 800 turns the same space into a block.

### Pair 7: Dashboard (`sales-dashboard/gpt6-1` folio, Plausible)

Plausible is silver, included because few gold rows are live apps.

| | folio | Plausible |
|---|---|---|
| Body | 13px | 16px |
| Button label | 10.5px | 14 to 15px |
| Declarations at 12px or below | 67 of 79 | |
| KPI treatment | Four boxed cards, each with six parts | Six stats in one band |
| Largest chart | About a third of the screen | About half |

- **Density.** folio spreads few facts through chrome: icon, caption, sparkline, delta pill, comparison text. Plausible packs more data in less chrome, with bars inside table rows.
- **Hierarchy.** folio gives all cards equal weight. Plausible picks one chart and lets it own the page.
- **Data.** folio's rows are generic orders. Plausible's rows are real sources and pages with long-tail values, and the shape of the numbers looks true.
- **Colour.** One lilac sits on the sidebar, chart, donut, pills and banner in folio. In Plausible, colour marks the selected metric and the row bars.
- **Better baseline.** `sales-dashboard/opus-1` is closer to Plausible than folio is, because it starts from the question being asked.

### Pair 8: Coffee, tidy (`coffee-shop/gpt6-1` daybreak, Blue Bottle)

| | daybreak | Blue Bottle |
|---|---|---|
| H1 | 98px, 400 | 24px, uppercase, tracked 1.6px |
| Button | 52px, 13px label, terracotta | Rectangular, 0 radius, outlined or dark |
| Page | 2,972px | 7,883px |

- **Inversion.** The real brand's title is a quarter of the imitation's size. It can be, because the picture does the work.
- **Image.** daybreak has a stock-mood pour-over in an arch, a seal and a tilted note. Blue Bottle runs a full-bleed mug and sprig on dark moss, and every shot is its own product on matched backdrops.
- **Colour.** daybreak uses terracotta, gold and sage on cream. Blue Bottle uses black, white, moss and kraft, with one small blue mark.
- **Content.** Blue Bottle has collections, prices, subscriptions and brew guides. daybreak has three drinks and a sentiment.
- **Edges.** Full-bleed, with square corners. The picture meets the page edge and stops, with no mask.

### Pair 9: Food, loud (`coffee-shop/opus-1` Saucer, La Table de Joakim)

| | Saucer | La Table de Joakim |
|---|---|---|
| H1 | about 140px, fat display | 64px, regular serif, uppercase |
| Text | 16 to 20px | 13 to 14px mono |
| Grounds | 6 by scan | Pale fields, off-white |
| Image | CSS cup at about 800px | Real hands, food and ingredients |
| Page | 11,449px | 6,226px |

- **Colour.** Both use colour fields. Saucer's are saturated red, chocolate, mustard and forest. Joakim's blue-grey field is low in saturation, and it holds one plate photo at about 220px, which gives the small picture huge presence.
- **Hand.** Joakim's logotype is hand drawn and appears once in the nav and once in the footer. Saucer's script appears in rule labels, slips and map notes.
- **Scale.** A small picture on a large calm field looks expensive. A large fake object on a loud field looks like a poster.

### Pair 10: Clinic (`dentist/gpt6-1` juniper, Function)

| | juniper | Function |
|---|---|---|
| H1 | 82px, 450, -0.043em | 80px, 300, 0, lh 0.9 |
| Subhead | 14px | 18px, 540px wide |
| Button | 12px label | 50px, 16px label |
| Section headings | 42px or so | 64px, 300 |
| Page | 3,673px | 12,268px |

- **Same device.** Both set a warm palette, a terracotta italic phrase and a large light headline. Function is the proof that the device is not the failure. It marks claims such as how many diseases it tracks, and juniper marks "smile about".
- **Image.** juniper: a stock smile in an arch, plus seal, flower and sticker. Function: a full-bleed cinematic portrait with three facts set on the image.
- **Proof.** Function shows named doctors with credentials, specific prices and a running list of conditions. juniper shows feelings.
- **Size.** H1s match within 2px. The gap is in everything else.

### Pair 11: Photographer

`photographer/opus-1` Tove Aalund against Per Appelgren.

| | Tove Aalund | Per Appelgren |
|---|---|---|
| Name | 325px condensed | About 29px |
| Colour | Greyscale, red marker, black | White, with pictures at full colour |
| Page furniture | Film rebates, Kodak edge print, pegs | Two tiny nav words, 10px |
| Work visible at full colour in first frame | None | About ten pictures |

- **Priority.** Tove's frame shows the concept of photography. Per's shows photographs.
- **Scale.** Both end up using huge type. Per's giant word appears only beneath one campaign image, as that campaign's title. Tove's huge type is the identity, on every section.
- **Lesson.** For work that is visual, the interface is a wall. Remove the frame around it.

### Pair 12: Homewares (`candle-store/gpt6-1` wick & wild, Fred)

| | wick & wild | Fred |
|---|---|---|
| H1 | 86px, 400, -0.028em | 85px, 300, -0.025em |
| Subhead | 13px | 16px |
| Nav | 105px plus banner | About 60px |
| Page | 2,721px | 6,020px |

- **Same headline spec.** Size and tracking nearly match, so the H1 is not the problem. Everything around it is.
- **Image.** Fred runs a macro of a pleated fan edge to edge, with intense colour and texture. wick & wild has a candle on fur, boxed beside a text column.
- **Product grid.** Fred has neutral tiles and a two-line caption with a real price. wick & wild has badges and icons on photo tiles.
- **Icons.** wick & wild adds a four-icon promise band. Fred has none, and no one misses it.

### Pair 13: Personal site (`engineer-personal/gpt6-1` Alex Morgan, unfunnyket.com)

| | Alex Morgan | unfunnyket.com |
|---|---|---|
| Opening | Two-fragment 76px headline | One paragraph of first-person prose at 19px |
| Page | 2,607px | 1,597px |
| Signature | Wire globe, script aside, asterisk | One thin colour ribbon |

- **Content.** The real page names employers, dates and results with numbers, in a first-person voice nobody else could have written. The baseline could be anyone's.
- **Length.** The real page is shorter. Short is fine with substance inside.
- **Structure.** Four faint vertical rails and one column. It is restraint, paid for by specific writing.

### What the pairs share

| Difference | Imitation | Real |
|---|---|---|
| Where effort goes | The headline and the frame | Whatever sits inside the frame |
| Colour | Fills and accents on the page | Comes from product or photographs, or spent once |
| Edges | Border, ring, shadow, radius, tilt | One edge, or none, often cropped by the viewport |
| Reading text | 14px grey, or poster-size | 15 to 19px, at a confident ink |
| Depth | Stops when the stack ends | Continues into reference material |
| Proof | Sentiment, stars, logos | Names, prices, numbers, tools |

Headline size is rarely the gap. In pairs 2, 10 and 12 the headline sizes nearly match, and the pages are still far apart. Fixing the headline alone will not close the gap.

## 4 False alarms

Top sites do many of these things, so read this list before you remove a choice. SKILL.md lists several of them as fast giveaways because that is how they arrive by default. They stay giveaways when they happen by default, and they stop being giveaways when chosen. The test for each is the same: did it come from this brief, and is it applied exactly? "Loose text match" means a script searched analyst records, so treat those counts as a rough size.

- **Inter and other common faces.** Inter is the primary face on 20 of 147 gold sites (14%) and 84 of 513 gold and silver sites (16%), the most used family in the corpus. The failure in the baselines was repetition across unrelated briefs. A common face set exactly beats an unusual face set loosely.
- **DM Sans, or any font on the collapse list.** Silver sites use these fonts well. The issue is 15 of 16 runs picking one font unasked. If the dealt hand gives you one, use it.
- **Cream and warm paper.** 78 of 826 sites are warm-neutral register, and 36% of gold records mention a warm off-white or paper ground (loose text match). Keep it if the brief suits it. What needs a reason is the whole set of cream, terracotta, sage, serif and italic together.
- **Serif headline.** Tana, Resend, reMarkable, Function and Fred all use one, at weight 500 or lighter. What makes each one read as its own is the content around it.
- **Italic or coloured phrase.** Function marks most headings, and Fred inserts one italic word. It works when the phrase is the claim or adds a true second voice.
- **Gradient text.** Asana and Resend each mark one phrase this way. 4% of gold records mention it (loose text match). Baselines used it 0 times, so it is hardly the live risk.
- **Pills.** About 41% of gold buttons are pills. Only 4 of 16 GPT runs and 1 of 16 Opus runs declare any pill radius. Pills are fine.
- **Glass.** 11% of gold navs blur, more on dark sites. Use it where something rich passes behind.
- **Three columns.** 36% of gold records mention a three-up row (loose text match). Linear has one. The failure is repeating equal rows down a page with equal, thin contents.
- **Eyebrows and uppercase labels.** 50% of gold records mention a label or eyebrow (loose text match). Blue Bottle sets all headings in tracked caps. Labels that name something are good structure.
- **Numbered markers.** Fine on real sequences, and on figures such as Linear's small FIG captions, which belong to a system. Cellemedical's 01, 01, 02 error shows the risk.
- **Big headlines.** 9 of 98 gold H1s are 96px or above. mymind reaches 140px, Stripe Sessions 100px. Big is fine when it is light and has room. For a festival or gym brief, loud is correct, and Fenriz Gym's heavy caps work because of its real photography. `music-festival/opus-1` is one of the better Opus pages for the same reason: its brief licenses the volume.
- **Heavy weights.** 13 of 98 gold H1s are 700 or above, all under 96px. Bold colour register has a median H1 weight of 600.
- **Flat colour.** Framework, Jasper, Astral and La Table de Joakim all use it. Each keeps a strict system and puts something real in or beside the colour.
- **A concept.** Zed's pricing page is an engineering drawing, Dishoom is a period Bombay print world, Loops runs four stripes round the page, Astral has a stair-step mark. They pass the four tests. Dishoom's world is true of the business, and it is held up by real food photography. Zed's and Loops' devices stay at the margin of normal product pages.
- **Handwriting.** Real hand marks are fine: a drawn logotype, real ink in a product shot, hand-drawn illustration from a person. A Google script font in a caption is what to avoid.
- **Mixed typefaces.** 10 of 72 design rejects cite mismatched fonts, yet the analysts credit Gagosian with four faces in assigned jobs. Each face needs a job that stays the same.
- **Small type.** Linear's nav links are 13px, and Per Appelgren's are 10px. Small is correct for labels and product UI. The defect is small reading text.
- **Marquees.** 18% of gold records mention one (loose text match). Function's running list of conditions carries real content. GPT's strip of slogans does not.
- **Text on photographs.** Function, Fred and La Table de Joakim all do it. It needs a quiet area in the crop and a contrast check.
- **Hover lift.** Of the cards that change on hover, 42% move, with a median of -1px. A small lift on a real link is fine. Hover without any change is worse.
- **Emoji.** 3 of 147 gold records mention them, and Framework sets one small tool icon inside a heading. A single emoji can be voice. A row of them as icons cannot.
- **A short page.** unfunnyket.com is 1,597px and gold. Short is fine for a person, a holding page or a simple offer, if each line is specific.
- **Giant footer wordmark.** Dekmantel ends this way, beside a real index.
- **Plain template structure.** Attio and Ramp both run hero, logos, features and a closing CTA. Convention is not a failure, and a page does not need an original structure to look expensive. It needs better things inside the structure.
- **Tilt and overlap.** Asana tilts small cards along its wire, and each is a real step in the story. Overlap and tilt are fine when the objects carry information.

## 5 Before you call it done

Answer each from your contact sheet, not from memory.

1. Run the four tests. Does the page gain at 100%, grow next quarter, survive losing its motif, and pass its signer?
2. Find your model's column and walk its list.
3. Read every product shot and data row at full size. Could someone work from it?
4. List your sizes. Is reading text 15px or more, and are there fewer than ten sizes?
5. Grep for your tics: ↗, ✳, "a little", "nobody", couplets, stock names.
6. Mentally remove all colour fills. What remains?
7. Put your page beside the closest pair's real site. Name three places yours looks cheaper, and fix them.
8. Check that any flagged choice has a one-line reason, then keep it if it does. A confident choice that breaks a rule beats a timid page that passes the checklist.
