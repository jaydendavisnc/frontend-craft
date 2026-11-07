# Registers

A register answers one question: where does this page keep its interest? It fixes the ground, where colour sits, what fills the frames, how the type speaks and how much moves. The sampler deals one of twelve. This chapter teaches what each one really is, how wide each one runs, what its cheap version looks like, and when to swap it.

The evidence: 826 corpus cards, 97 contact sheets across all twelve registers, 7 sheets of rejected sites, 7 baseline model runs, measured specs from 341 sites, pixel and library data from 654 graded captures, and hover probes from 516 sites. Site names are evidence, so take moves from them and never a look. Hex values are neutral ladders measured on real sites, not palettes to copy. Palettes and typefaces come from your deal, which is why no typeface is named here. "Register" always means a page register. The font registers in `references/typography.md` are a separate vocabulary.

**Contents.** [Use a dealt register](#use-a-dealt-register) · [The twelve at a glance](#the-twelve-at-a-glance) · [Side by side](#side-by-side)

- **Registers:** [dark-precision](#dark-precision) · [light-precision](#light-precision) · [gradient-light](#gradient-light) · [warm-neutral](#warm-neutral) · [photo-led](#photo-led) · [bold-colour](#bold-colour) · [soft-pastel](#soft-pastel) · [mono-technical](#mono-technical) · [render-3d](#render-3d) · [type-led](#type-led) · [illustrated](#illustrated) · [expressive](#expressive)
- **Deciding:** [Choosing or overriding](#choosing-or-overriding) · [Genre to register](#genre-to-register) · [One business, four registers](#one-business-four-registers) · [Where the corpus is thin](#where-the-corpus-is-thin) · [Before you call it done](#before-you-call-it-done)

## Use a dealt register

1. Read the glance table, then only your register's section. The others will pull you toward their habits.
2. Run the frame test in [Choosing or overriding](#choosing-or-overriding). A register you cannot fill is the commonest way a good hand becomes a template.
3. Pick a version from the **Range** list by what the brief actually has, and write down why. The list is in no order of merit, so do not take the first entry.
4. Put the ladder, the accent's job, the type voice and the motion level into your spec.
5. Read **Cheap** before you build, and again during critique.

Each section ends with **Pairs with**, naming surface systems from `elements/surface.md` and page shapes from `elements/layout.md`. Both are options to choose from, and a register does not pick one for you. **Before and after** entries show the direction of a change. Each is one answer among many, so do not reuse its specifics.

A register holds two or three things still and leaves everything else open. Linear and Affirm are both dark-precision and nobody would confuse them. If your page could be mistaken for the first site named in a section, you took a look instead of a register.

**Watch your home register.** Left alone, models land in the same place whatever the brief says. In the baseline runs we opened, GPT-6 gave a coffee shop, a dentist and a photographer the same cream ground, terracotta or sage accent and one italic word in the headline, which is a cheap warm-neutral. It gave one project tool a lavender wash and one coloured word, which is the same habit in a cooler costume. Opus gave a coffee shop flat red and a slab headline at display weight, and a project tool a running track, which is a cheap bold-colour with a metaphor on top. If you are dealt the register you would have reached for anyway, that is the riskiest hand you can get, because your first idea will be the collapse. Read its **Cheap** entry first, then start from a **Range** entry you would not have picked.

## The twelve at a glance

| Register | Interest lives in | Frames hold | Feels like | Gold + silver (gold) |
|---|---|---|---|---|
| dark-precision | The product, lit on a near-black ground | Real UI, code, data | A cockpit at night | 56 (16) |
| light-precision | Exactness and density on white | Real UI, tables, diagrams | A well-set specification | 123 (50) |
| gradient-light | One authored colour field beside real product | Product on or near the field | Clear daylight | 26 (7) |
| warm-neutral | A paper ground and warm content on it | Film, UI, print, in any mix | A good book in a calm room | 64 (19) |
| photo-led | Photographs and film | Art-directed imagery | Being there | 117 (35) |
| bold-colour | Colour used as a building material | Real content on colour | A confident public identity | 51 (4) |
| soft-pastel | Pale fields held by one deep anchor | People, product, scenes | Gentle and reassuring | 12 (1) |
| mono-technical | Facts set as a document | Commands, benchmarks, rules | A lab report | 16 (4) |
| render-3d | One rendered object | High-end renders | A product film | 6 (2) |
| type-led | The words and how they are set | Language, lists, real data | A document with authority | 29 (9) |
| illustrated | One drawn world | One illustrator's hand | A friendly guide | 15 (0) |
| expressive | An authored artefact | Whatever the idea demands | A record sleeve | 1 (0), plus 37 expressive-tier |

Tiers: **gold** is top work, **silver** is good, **expressive** is strong work that breaks convention on purpose, and **reject** is not worth learning from.

## Side by side

| Register | H1 px p25 / med / p75 | H1 weight | Serif display | Saturated pixels | Dark pixels | Load row | Pin or scrub row | Smooth scroll lib | Canvas |
|---|---|---|---|---|---|---|---|---|---|
| dark-precision | 48 / 60 / 72 | 500 | 7% | 0% | 85% | 28% | 17% | 12% | 37% |
| light-precision | 36 / 56 / 64 | 500 | 6% | 0% | 0% | 29% | 7% | 4% | 22% |
| gradient-light | 48 / 60 / 67 | 500 | 15% | 4% | 0% | 37% | 22% | 7% | 37% |
| warm-neutral | 40 / 54 / 68 | 400 | 45% | 0% | 0% | 33% | 11% | 8% | 6% |
| photo-led | 34 / 56 / 77 | 450 | 18% | 0% | 12% | 48% | 18% | 20% | 10% |
| bold-colour | 40 / 60 / 68 | 600 | 6% | 25% | 0% | 33% | 11% | 13% | 18% |
| soft-pastel | 44 / 75 / 84 (n=7) | 400 | 42% | 9% | 0% | 17% | 8% | 17% | 17% |
| mono-technical | 28 / 48 / 76 | 400 | 25% | 0% | 0% | 38% | 4% | 12% | 29% |
| render-3d | 35 / 53 / 59 (n=6) | 500 | 1 of 6 | 0% | 39% | 70% | 33% | 41% | 56% |
| type-led | 19 / 36 / 100 | 400 | 31% | 0% | 0% | 49% | 18% | 24% | 16% |
| illustrated | 50 / 52 / 64 (n=12) | 600 | 20% | 0% | 0% | 34% | 7% | 3% | 28% |
| expressive | no data | no data | no data | 0% | 34% | 53% | 26% | 21% | 37% |

How to read it. Serif share is gold and silver. Pixels, motion rows and libraries cover gold, silver and expressive tiers, and are medians or shares of sites. Pixel shares come from the seven commonest colours sampled per page, so a saturated colour that is small, scattered or inside a photograph reads as 0. That 0 is the point: on the median page of most registers, saturated colour never reaches the seven main colours. Bold-colour is the only register where it reliably does. Load and pin rows are what analysts recorded, so a low rate means rarely notable, not absent. Canvas also counts small embedded canvases. A level, used for tone steps below, is one step out of 255, averaged across the three colour channels.

## dark-precision

**Is.** A near-black ground where depth comes from small lightness steps and the product is the brightest thing on screen. All 56 gold and silver pages have a dark ground, and dark pixels cover a median 85 percent of the frame.

**Feels.** Quiet, technical, expensive. The page recedes and the work glows.

**Fits.** Devtool 20, SaaS 16, finance 6, agency 3, ecommerce 3, then brand, AI and other with 2 each, and 1 each for health and architecture. Food, hospitality and local business have none. Choose it when the product has a strong interface or the buyer lives in dark tools all day.

**Ground.** Build three steps and stop. Linear runs `#08090a`, `#0f1011`, `#161718`. Polar runs `#090909`, `#111111`, `#212121`. Framer runs `#000000`, `#111111`, `#171717`, so pure black is fine. Inngest raises the whole ground to `#1c1c1c` with grain. Steps between ground and surface run a median of 14 levels. Borders sit at alpha 0.10 (0.05 to 0.18). A shadow does little on black, so edges come from hairlines and a faint top highlight. Ink needs a ladder too: Linear uses four steps, `#f7f8f8`, `#d0d6e0`, `#8a8f98`, `#62666d`, and that ladder is much of its hierarchy. Of 56 grounds, 36 are neutral, 18 cool and 2 warm, so a warm dark is an open way to differ, though little proven.

**Accent.** Give it a meaning. The first filled button is near-white on 16 of 42 measured pages and chromatic on another 16. An inverted pill is already the strongest object on a black page, which frees the accent to mean live, new or selected. Polar spends no chromatic colour at all. Blue and cyan lead at 39 percent, then red and orange at 30.

**Type.** H1 48 to 72, median 60, weight 400 to 600, tracking down to -0.04em. Take the weight down a step from a light page, because pale type blooms on black. Section headings run 32 / 42 / 52, larger than on light pages. Serif display appears on only 4 of 56, so a serif is a real way to differ, as on Resend.

**Frames.** Product rows on 55 percent, photography on 2. The page lives or dies on interface built at real density. A dark page with thin UI has nothing left to look at, because it has no colour or photography to fall back on.

**Motion.** Small and exact. Main buttons changed transform on hover on 1 of 41 probed pages, and cards on 13 of 44. Video elements appear on 47 percent. Let the product change state in place, as a prompt typing itself in Framer's hero does.

**Range.** Choose by what you have.
- *The interface is your best asset:* Linear holds one ground and one recipe for 10,000px and lets the plates do everything.
- *Customers' work is the proof:* Framer sets pure black against saturated client sites, so all the colour on the page is someone else's work.
- *No colour to spend:* Polar puts dark panels on a grey sculptural plate and gets depth with no hue.
- *Invisible infrastructure:* Inngest uses a grainy raised ground, caps mono nav, real traces and one electric slab that interrupts the dark.
- *Consumer product:* Affirm uses indigo instead of black, lavender light, 24px cards and phones.
- *An object carries the idea:* Resend pairs a display serif with glossy black rendered objects.

**Cheap.** Black page, violet or blue glow behind a centred headline, gradient-filled text, frosted cards, grey icon boxes, empty panels where product should be. One rejected AI tool paired a black page with an italic serif word, five stars over an avatar stack, and two empty rectangles as its demo. Reflect shows the same look at its best, with rendered light, and its card still calls it the most cloned dark SaaS look.

**Before and after.** *Before:* near-black, violet radial glow, centred 72px headline, three glass cards with icon tiles. *After:* near-black with two steps, left-set 56px headline at weight 450, the product's own queue as a plate cut off by the fold, and one status colour that appears only on items that are actually running.

**Pairs with.** Surface systems Dark machined, Instrument. Page shapes One recipe, Plates, Open grid.

## light-precision

**Is.** White or near-white ground, with hierarchy built from ink steps, hairlines and tone steps you can barely see. It is the largest register at gold level, with 50 sites and the highest gold rate: 32 percent of its rows.

**Feels.** Credible and exact. A specification someone cared about.

**Fits.** Devtool 32, SaaS 19, finance 18, AI 15, agency 10, ecommerce 7, then culture, brand and other at 4 each. It also dominates pricing (12) and docs (11) surfaces among gold and silver.

**Ground.** White is cheap, so the craft is in the steps. Ground to surface is a median of 7 levels (5 to 11), and borders sit at alpha 0.07. Of 123 grounds, 117 are neutral. Speakeasy runs `#fafafa` with `#ffffff` panels and one near-black chapter, `#0f0a07`. Ramp's wells are `#f4f2ef`. See `elements/surface.md` for tone steps. If a step is obvious on a good monitor it is too big.

**Accent.** Spend it on one job. Blue and cyan lead at 41 percent, red and orange 22, and 12 percent have no chromatic accent. The first filled button is chromatic on only 23 of 94 pages and near-black on 22, so a black primary with accent kept for small marks is as normal as the reverse. Ramp puts one chartreuse on its demo button and leaves the rest of the page monochrome, which is why it reads from across a room.

**Type.** H1 36 to 64, median 56, weight 400 to 600, tracking -0.014em. Section headings run 18 / 32 / 44, smaller than dark pages. Serif display is rare at 6 percent, so it can identify you here: Speakeasy sets a thin serif over mono labels.

**Frames.** Product rows on 50 percent. Mini UI in tone wells, data tables, windows on plates, layered diagrams. Light UI needs more care than dark: pale grey on white hides nothing, so fake bars show at once.

**Motion.** The quietest of the product registers. Smooth scroll libraries on 4 percent, pin rows on 7. Main buttons changed transform on 7 of 82 pages, cards on 17 of 89. Colour and fill changes do the work.

**Range.**
- *Finance and operations with messy reality:* Ramp collages real receipts and spreadsheets, then resolves them.
- *Infrastructure that wants authority:* Speakeasy pairs a thin serif, a faint hairline frame and mono labels.
- *Abstract infrastructure:* Baseten draws its platform as an isometric colour field, with inverted black label bars.
- *A dark product on a light page:* Lithic sets a black rounded hero plate on white, followed by mint, lilac and peach panels that share one contour pattern.
- *A superb interface:* Attio stays monochrome and spends its one dark chapter past the halfway point.
- *People are the point:* Cal.com sets real faces inside the headline and keeps the UI on grey wells.
- *A long connected story:* Asana runs one drawn line from the hero through later sections.

**Cheap.** Rejected rows repeat one recipe: a pill eyebrow over a centred hero, one sans tracked tight at every size, pastel screenshot tiles, rows of three icon cards, seals and badges. It is tidy and says nothing. This register has the least to hide behind, so a generic frame reads as a generic company. One unskilled GPT-6 SaaS run sits here: lavender wash, one coloured word, sparkle marks, soft cards.

**Pairs with.** Surface systems Instrument, Soft product, Cool depth. Page shapes Drawn frame, Open grid, One recipe, Plates.

## gradient-light

**Is.** A light page with one authored colour field that carries nearly all its colour. The field is an object with structure and an edge, such as a ribbon, an aura or a diagonal band. It sits beside real product.

**Feels.** Luminous and optimistic. Expensive software in daylight.

**Fits.** SaaS 11, finance 4, devtool 4, AI 3, then one each for brand, education, agency and health. Product rows are the highest of any register at 70 percent. Treat the gold evidence with care: 5 of the 7 gold sites are Stripe pages.

**Ground.** White with a cool or warm whisper. Stripe runs `#ffffff`, `#f8fafd`, `#e5edf5` and one deep navy chapter. CleanShot is white and near-black with no tint at all, keeping colour inside tiles. Navy, plum or another tinted ink replaces black on 38 percent of pages, which helps the field and the type feel related.

**Accent.** The field holds many hues, the interface holds one. Saturated pixels are still only a median 4 percent, so even this register rations colour. Keep the button colour inside the field's family, and keep every hue in that family. CleanShot's tiles all come from one run of peach through periwinkle to indigo, which is why they read as one system.

**Type.** H1 48 to 67, median 60, two or three lines, with the widest subheads of any register, median 724px at 18 to 24px. Stripe sets everything at a light weight and builds hierarchy from two ink colours inside one sentence. Serif display is 15 percent, and mymind shows how far that goes: a book serif at 140px.

**Frames.** Real UI on or next to the field. Stripe's art is actual checkout UI. CleanShot shows its own controls at poster scale. The gradient is a stage, and without a performer on it the page is an empty stage.

**Motion.** The most ambient register. A median 5 animations run at rest, reaching 58 at the third quartile, and product demo rows reach 33 percent. Pin rows are 22 percent. Let the field drift slowly or stay still, and let the product carry the fast motion.

**Range.**
- *Dense platform:* Stripe keeps one etched ribbon in the corner of the first screen and rails everything else.
- *Calm personal tool:* mymind uses an aura around a white disc, a large book serif and tactile object still lifes.
- *Utility with many features:* CleanShot keeps gradients inside bento tiles and leaves the page white.
- *An event:* Stripe Sessions makes the ribbon a render and sets everything else in ultralight type on plum ink.
- *Serious subject:* Stripe Climate uses thin diagonal bands at the page corners, and the middle is charts and citations.
- *Health or care:* Daylight runs one sunrise down the whole page.

**Cheap.** A blurred rainbow blob, purple sliding to blue, gradient-filled headline text, pastel wash with glossy blue pills. A CSS mesh with no edge and no direction reads as a stock background. Cards warn of this repeatedly: without fine striations and real UI, the ribbon is a generic blob, and hues from outside one family collapse into generic AI-startup bento. If you can only make a soft blur, choose another register, or keep the blur pale and let product do the work as Copilot does.

**Pairs with.** Surface systems Cool depth, Soft product. Page shapes Plates, Open grid. Read `elements/atmosphere.md` before building the field.

## warm-neutral

**Is.** A paper-toned ground in place of white, warm ink, and a quiet page that lets warm content speak. This is the widest register in genre: it spans AI labs, restaurants, clinics and resorts.

**Feels.** Human and unhurried. A good book, a calm room.

**Fits.** AI 8, food-drink 8, health 6, finance 5, ecommerce 5, SaaS 5, local business 5, hospitality 4, education 3. AI companies use it to look human, and it is 44 percent of food and drink.

**Ground.** Of 64 grounds, 39 are measurably warm and 25 near neutral, so the warmth can be very slight. Aman runs `#f3eee7` then `#e6e2db`. Claude runs `#faf9f5`, `#f0eee6`, and `#141413` for its footer. Function runs `#fef9ef`, `#f5eee1`, `#ddd6ca`. Loops barely tints at all: `#fdfdfc`, `#f9f9f8`, `#f1f0ef`. Vary the tone's depth and hue with the brief, from barely warm to clearly cream, because one default cream is part of the collapse. Only 28 percent of inks are near-black, and 42 percent are tinted. Secondary text here has the lowest contrast of any common register, a median of 4.3:1, which fails small text. Do not copy that: darken your second ink until it clears 4.5:1 on the actual ground.

**Accent.** Red and orange take 52 percent, and this is the trap, because terracotta on cream is where GPT-6 goes by default. Function earns it with exact data and drawn charts. Your hand probably should not repeat it. The gold sites show other answers: Aman has no accent beyond one charcoal button, reMarkable uses a saturated blue against paper and forest, Wispr Flow uses deep green with one lilac action, TR Studio steps from bone to oxblood to periwinkle. The first filled button is chromatic on only 7 of 37 pages.

**Type.** H1 40 to 68, median 54, weight 400, tracking near 0. A serif display appears on 45 percent of pages, against 6 percent in light-precision, so a sans headline is the less expected choice here and more than half the register uses one. Scale can go very low: Aman's headings are about 31px and the photographs do the shouting. One italic turning word appears on Function, reMarkable and Wispr Flow, and it is now on the fast-giveaways list in `SKILL.md`. Use it only as a system with a real reason, or leave it out.

**Frames.** The most mixed register: product rows 25 percent, photography 22, illustration 14. Heroes split between full-bleed media (18) and split layouts (15). What holds it together is one light and one grade across everything, so warm film sits comfortably with redrawn UI.

**Motion.** Slow. Canvas on 6 percent, three.js on none measured, one animation at rest. Interest comes from crossfades and film: Aman opens on paper and then the film arrives. Main buttons changed transform on 11 of 41 pages, the highest rate of any well-sampled register, usually a 1 or 2px lift or text sliding inside the button.

**Range.**
- *Exceptional photography:* Aman has no accent, small type and huge stills. The page sits close to photo-led.
- *A place with history:* Dishoom uses cream, double-rule frames, justified serif and tracked caps, like a printed menu.
- *Software that sells a feeling:* Wispr Flow uses a large literary serif, cream against deep green rounded sheets, and motion-blurred footage.
- *Software with a signature:* Loops holds a warm white page and quiet product, and runs four retro stripes around the whole page.
- *A physical product:* reMarkable uses 2px corners, forest green, one blue, and photographs offset like a magazine.
- *Studio or practice:* TR Studio pins a monogram to the viewport corners and lets rooms drift through a bone frame.
- *A marketplace:* Sonder pairs cream with deep navy and keeps a real search and real prices.

**Cheap.** Cream, terracotta, sage. Serif headline with one italic coloured word. An arched photo. A rotated seal or sticker. A tracked label over every heading. Three soft cards. Close variants of that page came out of GPT-6 for a coffee shop, a dentist and a photographer, which shows it says nothing about any of them. Rejected rows add floating faded hero cards, gold-word headings and generated stock photos.

**Before and after.** *Before:* cream ground, terracotta button, serif H1 with one italic orange word, arched photo, rotating seal. *After, one of many:* pale stone ground, deep bottle-green ink, a sans headline at weight 400, no colour on text at all, prices and opening times in a ruled list, and square photographs of the actual room at one window light.

**Pairs with.** Surface systems Warm paper, Editorial, Printed. Page shapes Document, Plates, Film, Gallery.

## photo-led

**Is.** Photography or film is the design, and the interface steps back. Full-bleed media is the hero on 78 of 125 pages, and video elements appear on 54 percent, the highest of any register.

**Feels.** Being there. You look through the page instead of at it.

**Fits.** Ecommerce 16, brand 14, health 12, agency 11, fashion 8, architecture 7, culture 7, hospitality 6, local business 6, food-drink 5, finance 4, AI 5. It takes 89 percent of fashion and 60 percent of hospitality. It is the default for anything physical, as long as you can fill it.

**Ground.** Mostly white or a pale stone, with 28 of 117 dark. Kinfolk runs `#ffffff` and `#dbded5`. Polestar runs `#ffffff` and `#f0f0f0`. 1 Hotels runs `#f2f0e9`. Only 46 percent of sites have any shadow, the lowest of the product and consumer registers, because a photograph needs no elevation. Keep surfaces plain so nothing argues with the image.

**Accent.** Often none: 21 percent have a neutral accent, and Polestar uses no colour at all. Take colour from the pictures. Hims tints each section from its photography, so the room and the image match. VanMoof spends one fluorescent strip at the top of the page and nothing else.

**Type.** The widest H1 range of the common registers, 34 to 77. Let the photograph set the size. A24 sets film titles at 400px over stills, VanMoof a 280px model name over a macro shot, Polestar 110px, and Kinfolk a quiet 60px serif on white. The headline also sits lowest here, median 298px from the top against 207 across gold, because the image takes the top of the frame. Weight runs 400 to 600, and serif display 18 percent.

**Text on images.** This is where the register breaks most often. Rejected rows repeat it: low-contrast copy on a busy photo, a headline across a face. Place text in a calm area of the frame, or set it on a plain band under the image as Kinfolk and Blue Bottle do. A scrim is a last resort, and it should look like part of the light.

**Frames.** One light, one treatment, one set. Consistency matters more than any single image, and a mixed set is the fastest way to look like stock. Blue Bottle's product always sits on matched moss and kraft backdrops. If you cannot produce or verify a coherent set, this register fails the frame test. Read `references/imagery.md`.

**Motion.** Film does it. Load rows are high at 48 percent, and the order of image and copy is the decision: Kinfolk brings its title first and the cover second, Hims brings the still first and the headline after. Product demos are 2 percent. Lenis-style smooth scroll is on 20 percent. Cards changed transform on hover on 22 of 69 pages. The clearest pattern is the image inside scaling by 1.02 to 1.1, and that is one of the few places a hover scale belongs.

**Range.**
- *Strong imagery and a big catalogue of titles:* A24 uses full-bleed stills, huge titles, then a calm white index.
- *Slow editorial pacing:* Kinfolk gives every block a different width on one white page, with no bold anywhere.
- *Commerce with heavy content:* Polestar uses four type sizes, one weight, square outlines.
- *Product photography with no people:* Blue Bottle keeps the interface almost invisible on white bands.
- *Bright consumer health:* Hims builds rounded colour rooms sampled from the images.
- *One long film:* Joby stays in a single aerial story, broken by one solid blue sheet.
- *Small local business:* La Table de Joakim gives each screen one dish photo on a colour field pulled from the food.
- *Fintech that wants lifestyle:* Revolut lays interface outlines directly on a studio portrait.

**Cheap.** Stock photography. Generated images with mismatched light. A dark scrim over everything. Rejected rows name generated-looking photos, a logo in a white box, and copy over busy scenes. The other failure is a page that is only a slideshow, with no prices, no hours and no way to act.

**Before and after.** *Before:* full-bleed stock interior, dark overlay, centred white headline, two pills, then three cards. *After:* one image of the actual place, cropped with intent, text on a plain band beneath it, prices and the next action directly below, and every later image shot at the same hour.

**Pairs with.** Surface systems Editorial, Colour rooms. Page shapes Film, Gallery, Rooms.

## bold-colour

**Is.** Colour used as a material: whole sections, grounds or all of the type. It is the only register where saturated colour is a main colour, with a median 25 percent of pixels (9 to 40). It is a brand decision and not a genre decision: its 51 sites spread across fifteen genres, with none above 5.

**Feels.** Confident and public. A real identity at street scale, still working as a site.

**Fits.** SaaS, devtool, education, agency, culture and local business at 5 each, food-drink and finance at 4, AI at 3. It reaches 29 percent of education, 28 of local business and 22 of food and drink. Only 4 are gold, and 25 more are expressive tier, so this register sits right at the edge of the default. The sampler reduces its odds unless the brief asks for loud.

**Ground.** Steps are large here, ground to surface a median 17 levels and up to 40. Borders rise to alpha 0.20 because a line must survive on colour. Black is often replaced: 45 percent of inks are tinted, such as Astral's aubergine or Jasper's navy. Give the page two or three grounds and use them in a known order.

**Accent.** Every colour needs a job. Jasper uses five flat colours and each has a fixed role. Astral keeps acid lime for a mark and a button, and lets aubergine and sage take the large areas, because the loudest colour goes furthest in small amounts. Fidèle uses one blue for type, rules and interface on cream, so the book covers supply everything else. The test is whether you can state each colour's role in a sentence.

**Type.** Here is the correction to the baseline habit. H1 is still a median of 60 at weight 600, and p75 is only 68. Three of the four gold sites set their headlines at weight 500 or lighter: Astral 100px at 500, Jasper 88px at 400, Fidèle 62px at 400. Only Almeida goes to 800. Colour already supplies the volume, so the type can relax. Section headings run 36 / 47 / 56.

**Frames.** Flat colour is a ground and never a frame. Something real still sits on it: Almeida's rehearsal photographs, Fidèle's covers, Astral's benchmark panel, Sailia's real UI and customer photos. Product rows are 28 percent and photography 17.

**Motion.** Medium. Marquees are 11 percent, among the highest. Hover often swaps a fill outright, as Jasper's cards do, because colour is the language.

**Range.**
- *A devtool with a strong mark:* Astral uses a pale ground and a stair-step pixel shape that drives logo, panel corners and patches.
- *Enterprise in a print voice:* Jasper uses a tight serif, navy hairline boxes, zero radius and flat fills.
- *One ink:* Fidèle sets everything in a single blue on cream.
- *Institution with strong photos:* Almeida uses black, flat coral and yellow panels, and heavy caps.
- *Whole-page colour:* Sailia sets the page in cobalt with a book serif and line drawings.
- *Enterprise that wants warmth:* Rippling uses a plum hero and amber action, then white bands.
- *Packaged goods:* Counter Culture and Olipop let product colour set the rooms.

**Cheap.** Flat colour field, 900-weight headline, nothing else. That is the Opus default, and `SKILL.md` names it as vibe-code good. Rejected rows add three or four font families, clashing tile colours with no roles, clip-art and stickers. Saturated colour shows every spacing error, so this register needs tighter alignment than a white page.

**Before and after.** *Before:* flat red page, 120px slab at 900, a literal coffee cup drawn in SVG. *After:* a pale ground with one deep ink, two large rooms of a saturated colour taken from the actual packaging, a 72px headline at 500, a real price list sitting on the colour, and the brightest colour used only for the order button.

**Pairs with.** Surface systems Printed, Colour rooms. Page shapes Rooms, Plates.

## soft-pastel

**Is.** Pale, low-saturation colours as the main palette, held in place by one deep anchor colour. The anchor is what makes it work, and cheap versions tend to lack it.

**Feels.** Gentle and reassuring, with no clinical chill.

**Fits.** Health 6 of 12, devtool 2, then one each for portfolio, nonprofit, AI and other. This is the register's clearest home: it fits care, therapy and wellness. It has the highest reject rate of all: 9 of 21 rows, 5 of those on design grounds. Treat it as hard.

**Ground.** White or warm white with pale fields beside it. Sword runs `#f7f4f2` and white. Decagon stacks rounded sheets on `#f4f4f5`, then turns to dark sheets lower down. Secondary ink has a median contrast of 4.2:1, so check yours, because pale fields lower contrast further.

**Accent.** One deep colour does the anchoring. Talkspace uses deep teal for type, buttons and footer, so its mint, coral and butter fields stay held together. Decagon uses black pills and a dark section. Without an anchor, pastels drift into a children's app. Keep text dark on pastel: white text on a mid blue pill is a failure repeated in the rejects.

**Type.** Light and fairly large: H1 44 to 84, median 75 on seven sites, weight 400. A soft serif is common at 42 percent. Heavy rounded type turns this register childish.

**Frames.** Real people for care, and real product elsewhere. Talkspace uses named portraits, Sword uses human photography and device work, Radix shows its own working components. Decagon replaces the dashboard hero with an art-directed periwinkle scene, then moves to product. Avoid stock photos in organic blobs.

**Motion.** The stillest register, with load rows on 17 percent and no demo, marquee or video rows in twelve sites. Gentle fades are the right level. A slow pan across a scene, as on Decagon, is plenty.

**Range.**
- *Enterprise wanting warmth:* Decagon pairs a dreamlike scene with disciplined sheets.
- *Care with coverage details:* Talkspace uses notched colour fields, portraits and teal.
- *Clinical product:* Sword uses a sunset haze, a literary serif and a 32px radius.
- *A component library:* Radix sets a book serif beside real components on faceted pastel planes.
- *Trust without commerce:* Signal uses flat illustrated panels and a phone.
- *A brand with a strong audience:* HealthyHer brightens the palette with butter yellow and teal around candid photography.

**Cheap.** Lavender everything. Gradient-header icon cards, repeated purple pills, stock photos in blobs, pale blue bands, near-identical cards. Rejected rows include a lavender design subscription kit and several clinic templates. Lavender also turned up in unskilled GPT-6 software pages, so avoid it unless the deal hands it to you.

**Pairs with.** Surface systems Soft product, Colour rooms. Page shapes Plates, Rooms.

## mono-technical

**Is.** Information design as identity. A monospaced or duospaced voice, rules and tick marks, real numbers. Every section proves something. Its reject rate is low, 2 of 26.

**Feels.** A lab report, a spec sheet, a well-kept ledger.

**Fits.** Devtool 8 of 16, then one each across AI, portfolio, culture, editorial, architecture, education, fashion and other. Stone Island shows it can leave software entirely. A mono voice suits anyone who wants to sound exact and unsentimental.

**Ground.** Paper or white, with rails and grids held very faint. Zed runs `#f3f3f1` with `#ffffff`, and its graph-paper texture stays under about 5 percent contrast, so it reads as grain. Above about 8 percent it turns into decoration. Radii are small, 5 to 10. Pills appear on 3 percent of buttons and nav blur on none.

**Accent.** One ink. Zed uses one blue, Bun one hot pink, Stone Island none. Saturated colour is 0 in the pixel sample, and accent lives on links, keys and one button.

**Type.** H1 28 to 76, median 48, weight 400. Headings often stop at label size: the median section heading is 16px. Fully mono pages are rare, and only 3 of 16 use mono for display. The usual build is strict voices with strict jobs: Bun uses one condensed black headline, grey prose and mono data. Zed uses a serif for titles and a duospace for reading. Stone Island uses one family at one size, 14px, across the whole page. Mono is slow to read at length, so give prose a wider line or a duospace.

**Frames.** Real commands, benchmarks, tables, diagrams, shortcuts. Bun proves each claim with a measured chart or a running terminal. Zed prints keyboard shortcuts on its buttons, which tells a developer that the makers use the product. Invented numbers kill this register, because the whole page is a claim of accuracy.

**Motion.** Typed and stepped. Demo rows reach 29 percent, second only to gradient-light, and reveal rows reach 25, the highest of any register. Text may type in, a terminal may advance. Ambient animation is near zero.

**Range.**
- *A blueprint:* Zed runs drawn rails and nodes through nav, content and footer.
- *A lab report:* Bun uses a hairline column and a clipped corner on every box.
- *Dense index:* Zed's blog is a single ledger of every post.
- *Fashion or objects:* Stone Island sets one mono size over viewport-tall campaign images.
- *Docs product:* ReadMe puts one rounded grid behind white, navy and black chapters.
- *A research firm, on the expressive side:* Paradigm draws wireframe data sketches on blank paper.
- *A text-medium product:* Ghostty is only a terminal window playing an ASCII animation.

**Cheap.** Brutalist cosplay: hard boxes, mono labels and invented data. A black terminal with three coloured dots and a hello world. Grid wallpaper loud enough to compete with the content. All-caps 12px mono as marketing body. Rails with no content system behind them.

**Pairs with.** Surface systems Instrument, Printed. Page shapes Drawn frame, Document, Index.

## render-3d

**Is.** One rendered object or scene is the hero, at a quality that would survive a product launch. Render rows appear on 74 percent. Only 6 sites are gold or silver, and 21 more are expressive tier, because this register usually wants to perform.

**Feels.** A product film. An object you want to pick up.

**Fits.** Brand 2, then one each for ecommerce, SaaS, devtool and AI. Hardware and objects are its natural home. Expressive-tier rows lean agency and portfolio at 4 each, food-drink 3.

**Be honest first.** This register has the hardest frame test. "With stock or mid-quality renders the formula collapses" is what the Analogue card records, and it holds across the set. Choose it only if you can build a real scene in three.js with physically based materials and good light, or supply pre-rendered assets. A primitive shape with a glow is the failure to avoid. If you cannot verify the render at full size, swap.

**Ground.** Match the render's ground exactly, so the object sits in the layout and never on it. Analogue's page is `#eaeaea`, the same as its render. Prägen Hätlen steps through a navy ladder, `#0c1114`, `#0f161c`, `#141d24`, `#212c36`. Of 27 grounds, 14 are dark.

**Accent.** The object owns colour. Analogue's only colour is the game art inside its renders. Prägen Hätlen keeps one periwinkle button.

**Type.** Small beside the object, H1 35 to 59 on six sites, with a tiny interface. One render, one sentence and one button per block is Analogue's whole system.

**Frames.** The render is the frame. Support it with one more kind of proof, such as reviews, specs or exploded callouts, so the page has substance.

**Motion.** The heaviest of all: load rows 70 percent, pin rows 33, canvas 56, three.js 41, smooth scroll 41. Scroll may drive a teardown, as on Prägen Hätlen. Follow `references/motion/` for the gating, and budget for it: Dalco sat black for over six seconds, which undoes any premium feel. Show something at first paint and keep the page usable under reduced motion.

**Range.**
- *Hardware store:* Analogue runs like a gallery, block by block.
- *Luxury object:* Prägen Hätlen pins one render and takes it apart over a long scroll.
- *Explaining an idea:* Svelte's toy conveyor shows what a compiler does, then the page turns human.
- *An app with a character:* BILD adds a site-foreman robot beside a real step-through demo, which is the riskiest version.
- *A catalogue:* Dalco lifts server hardware with gallery-lit plates.
- *One idea, expressive:* Teenage Engineering lights one device and lets its shadow become the page.

**Cheap.** Floating glossy spheres, abstract blobs, purple glow, stock 3D icons, a rotating model with no reason to rotate, a generated building. Quality below the page's other work is worse than no render.

**Pairs with.** Surface systems Dark machined, Editorial. Page shapes Film, Gallery.

## type-led

**Is.** Typography is the primary material, with few images and no product chrome. It splits into two branches that look nothing alike, and the numbers show the split: H1 p25 is 19px, the median 36 and p75 100. Pick a branch first, because their rules differ.

**Feels.** A document with authority, or a poster with restraint.

**Fits.** Agency 7, culture 7, portfolio 6, ecommerce 3, brand 2, then one each for AI, editorial, nonprofit and architecture. It takes 32 percent of portfolios and 26 percent of culture. Expressive tier adds 20 more.

**Ground.** White or pale grey, ruled. Shadows on 14 percent of sites, pills on none. Hairline rules are the structure. Motto holds everything on one 1px grid on `#f2f2f2`, and Cognition runs a single warm plane, `#f7f6f5`, with zero radius.

**Accent.** Neutral on 34 percent, one spot colour on most others. Acme has a single burnt orange panel. Cognition has one electric blue link colour. Near-black ink is on 76 percent of sites, the highest of any register. Secondary ink has the lowest contrast of all at 3.9:1, which is a common flaw here, so do better.

**Type.** The whole register. Set it to a proper standard: read `references/typography.md`. Document branch: one or two sizes, H1 under about 40px, a strict baseline, hierarchy from ink and position. Specimen branch: extreme contrast, 150 to 210px against 13px labels, on a visible grid. Studio Dado runs a serif at 211px over 13px metadata. Motto justifies a 154px line across two ruled rows.

**Frames.** The content is the design, so it must be good. Real writing, real names, real data. Cognition proves itself with a benchmark table and named logos. New Exhibitions fills an index with art images at natural ratios. Locomotive sets client names in a ruled list and adds cut-out figures. If you have thin copy, this register exposes it at once.

**Motion.** Mostly at load: rows on 49 percent. Text may boot, stagger or draw in. Smooth scroll on 24 percent. Hover underlines and rule changes suit it better than any movement. Main buttons changed transform on none of 12 probed pages.

**Range.**
- *A person:* Paco Coursey uses one 640px column on a strict baseline, one size, one italic phrase.
- *A research lab:* Cognition reads as a typeset memo with a left index and ruled columns.
- *An agency:* Locomotive uses ruled serif names, tiny labels and one surprise.
- *A shop:* Acme is a Swiss spec sheet with a 148px wordmark.
- *A listings site:* New Exhibitions is a dense ruled index.
- *A publisher:* Monocle runs a newspaper front page with one yellow.
- *An interiors studio:* Studio Dado sets giant serif caps over one great room.

**Cheap.** A 900-weight headline on a flat field, which is the baseline trap in another form. Oversized type that is the only idea on the page. A centred serif list that reads like a word processor, as Locomotive's card warns. The fix is a grid, tiny exact supporting type, and something worth reading.

**Before and after.** *Before:* a 160px heavy headline, one sentence, one button, repeated. *After:* a 36px statement on a ruled grid, the firm's real clients and years in a long hairline list, one price or address set small, and a single piece of colour on the only thing you can click.

**Pairs with.** Surface systems Editorial, Printed. Page shapes Index, Document.

## illustrated

**Is.** Drawn imagery from one hand carries the personality, and illustration rows appear on 83 percent. There is no gold site in this register, so treat every example as good and none as a ceiling.

**Feels.** A friendly guide. It lowers the stakes and disarms.

**Fits.** Education 4, SaaS 3, AI 2, health 2, then one each for devtool, finance, food-drink and agency. It is 24 percent of education. Reach for it when a subject feels hard, dull or frightening and warmth helps. Expressive tier adds 14, including devtool 4 and food-drink 3.

**Be honest first.** Simple SVG systems are within reach, and drawn characters usually are not. Stay within what you can verify at full size: one stroke weight, one fill rule, a small kit of shapes. Tally's ink marks and lemon.markets' isometric line drawings are the buildable end. Headspace and Khan Academy have proprietary mascots drawn by illustrators, and those are beyond a first pass. If the drawing is the weakest thing on the page, swap.

**Ground.** White or very pale, 12 of 15 neutral. Illustration holds the palette, so the page can stay plain. lemon.markets alternates `#f9fafb` and near-black bands.

**Accent.** One marker. Tally spends magenta on icons, underlines and scribbles. lemon.markets uses lemon yellow as its only colour. Headspace goes the other way with full yellow and blue rooms around an orange sun. Choose one: a single spot on white, or colour rooms. Mid-way patchworks read as clip art.

**Type.** Friendly and firm. H1 about 52, weight 600, with section headings often at 700, the heaviest of the default registers. One family is usual, and proprietary rounded faces are common in the best examples. Do not use a handwriting font, since the drawings already carry the hand.

**Frames.** Pair drawings with the real product. Tally shows forms building themselves, Bear shows real note content, Khan Academy adds a role picker that does a real job, MotherDuck boxes real architecture. Drawings alone read as a children's site.

**Motion.** Low and characterful. Marquees on 14 percent, the highest here, and no video rows. A character may blink or a line may draw. Canvas appears on 28 percent, and Lottie files on only 2 of 29 pages.

**Range.**
- *Serious infrastructure:* lemon.markets uses isometric ink and a single yellow.
- *Simple product:* Tally puts a pen doodling in the margins of a white doc.
- *Calm care:* Headspace builds a round character world.
- *A warm app:* Bear uses grey line drawings and organic colour fields behind tilted real UI.
- *Education:* Khan Academy uses a flat geometric mascot.
- *Packaged food:* Apétiti sets cut-out fruit characters against real family photography.
- *A devtool, expressive:* MotherDuck runs cartoon clouds over rigorously boxed diagrams.

**Cheap.** Stock flat people, corner blobs, clip-art leaves, mismatched icons, wavy dividers, emoji standing in for drawings. Rejected rows name exactly these. Outlines and hard shadows applied to only a few cards read as neo-brutalist template, while Pomegranate holds the same style across every surface, which is why it works.

**Pairs with.** Surface systems Soft product, Printed. Page shapes Plates, Open grid.

## expressive

**Is.** The page is an authored artefact that breaks convention on purpose. It is both a register, with 1 silver and 37 expressive-tier sites, and a level that other registers can reach. The expressive tier holds 138 sites: 37 here, then bold-colour 25, render-3d 21, type-led 20, illustrated 14, photo-led 8, mono-technical 8, dark-precision 4 and gradient-light 1. Light-precision, warm-neutral and soft-pastel have none. So if a brief wants loud, starting from bold-colour, type-led or render-3d often gives you a stronger page than starting from a blank here.

**When it is allowed.** When the brief asks for it: a festival, an art project, a music release, an exhibition, a brand that says it wants something loud. Generic prompts do not qualify, so the sampler holds it back unless the brief contains words such as bold, loud, experimental, playful, festival, art or poster, or you pass `--explore`. A user asking for more personality usually wants a stronger signature inside a professional register, and not this.

**Feels.** A record sleeve, an exhibit, a world you enter.

**Fits.** Culture 6, agency 4, portfolio 4, food-drink 4, ecommerce 3, other 3.

**How it differs.** The measured defaults stop applying, and the sampler has no type systems filed under this register, so it deals from all of them. Choose the one that suits the idea, or set your own. Scale, grid, nav conventions, reading order, the one-accent rule and the restraint in `SKILL.md` can all go. There is no required ground, ladder, accent or type voice. Dark grounds are the most common at 22 of 38, but do not take that as a rule. What replaces those defaults is one idea followed completely, and it must come from the client's actual subject.

**What must stay.** The rubric still asks whether a funded team would ship this, and it still marks down a costume.

1. **It must show up.** Of the 19 rejects in this register, 18 failed because the capture found a loader, a blank page, a gate, a modal or broken media, and one was a spam page. A person with a fast machine may see more than a capture bot does, but a page that shows nothing at first is still a failure on a phone or a slow connection. Paint real content first, and treat WebGL as an enhancement.
2. **One system.** Onyx looks wild and is completely consistent: blackletter display, one signature script, one black button, alternating cream and dark photo blocks. Expressive work looks like a decision. A sample book looks like several.
3. **Something real.** Radio Null's jokes sit on a real year in review. Onyx is a working store. Mala Project keeps a real menu, order and reserve in tiny bilingual nav.
4. **A way through.** A visitor can still find what to do next, on a phone, at a readable size. Zentry's tiny mono copy and empty panels are a warning: the scale contrast is thrilling, and the panels have nothing in them.
5. **Finish.** Hover states, footers, reduced motion, phone layouts, all of it. Loud work shows carelessness faster than quiet work.

**A world and a costume.** Mala Project builds a dream of meadow, mountains and butterflies for a dry pot restaurant, with no chilli motif anywhere, and that is an authored world. A project tool drawn as a running track is a costume: it explains the product by pretending it is something else, and every section has to keep up the pretence. Ask whether the idea would still feel right with the jokes taken out. Onyx's blackletter belongs to Onyx, and its card warns that on a neutral business it reads as a costume.

**Range.**
- *A brand world:* Mala Project fills the viewport with one surreal scene and karaoke captions.
- *An identity with a subculture:* Onyx sells coffee as tattoo flash.
- *One gesture:* DixonBaxi is a prompt and an endless rail of work, with no nav and no scroll.
- *Extreme scale:* Zentry sets condensed black caps at 160px against 9px mono.
- *Wit and interface play:* Radio Null uses marquee type, butterfly video and fake OS cards.

**Cheap.** A dark portfolio with one loud block, which is how Gustavo H's card reads: the green dither is the only identity. Random effects with no idea. Illegible type presented as boldness. An intro gate. Anything that looks like the tutorial for the effect it uses.

**Pairs with.** Any surface system, chosen once and kept. Page shape: any, or a new one.

## Choosing or overriding

The deal is a strong starting point. Your job is to keep it unless it is wrong, and "unusual" is not wrong.

**Order of authority.** The user's words come first, including when they ask for something this chapter discourages. An existing brand or codebase comes second, and you extend it instead of dealing fresh. Then the frame test, then the job test, then the genre table. Personal taste comes nowhere.

**The frame test.** Before anything else, can you fill this register's frames with something real? This one check prevents most failures.

| Register | You must be able to make | If you cannot, try |
|---|---|---|
| dark-precision | A real interface, code or data at density | light-precision with a smaller real fragment, or type-led memo |
| light-precision | The same, in light | type-led, mono-technical |
| gradient-light | A field with structure, and real product beside it | light-precision |
| warm-neutral | One consistent warm set, or real information worth reading | type-led |
| photo-led | A coherent, verified image set in one light | warm-neutral or type-led, built from menus, prices, hours, maps |
| bold-colour | Real content on colour, and a role for every colour | warm-neutral with one colour room |
| soft-pastel | Real people or product, and a dark anchor | warm-neutral |
| mono-technical | True facts, numbers and commands | light-precision |
| render-3d | A real scene you can verify at full size | photo-led or dark-precision with UI |
| type-led | Writing that deserves the attention | photo-led or warm-neutral |
| illustrated | One consistent drawn kit | light-precision with a simple line system |
| expressive | One idea from the subject, and a brief that asked | bold-colour or type-led |

**The job test.** Can a visitor do what they came for in this register? A restaurant needs its menu and hours early. A store needs a product grid: stores in the corpus lean photo-led (22) with light-precision (7), bold-colour (6), dark-precision (5), type-led (4) and warm-neutral (3). A clinic needs a clear next step and a phone number. Money, health and legal pages need plain contrast and visible prices. No register forbids these. If yours hides them, change the version before you change the register.

**Unusual or wrong.** Off-genre choices are the cheapest way to get a page that looks like nobody else's, and strong sites do it often. An enterprise AI product in a periwinkle dreamscape (Decagon). Infrastructure in a thin serif (Speakeasy). A dictation app in cream and literary type (Wispr Flow). Booking software in cobalt and a book serif (Sailia). A bank in studio portraits (Revolut). A fashion house in one mono size (Stone Island). Keep an unexpected register whenever you can fill its frames and the job still works. Swap it when it fails a test, or when the mood contradicts the subject: dark-precision for a nursery, soft-pastel for a debt collector.

**How to swap.** Say why in one line of the spec, then re-deal so the references and type systems match:

```bash
python3 <skill-dir>/scripts/direction.py "<brief>" --register warm-neutral
python3 <skill-dir>/scripts/direction.py "<brief>" --seed 42
```

Use `--register` when one thing is wrong and `--seed` when the whole hand is wrong. Use `--surface` if the sampler misread the surface, and `--explore` when a brief asks for loud work that its wording did not trigger. If you swap into your usual look, stop and check that the reason is real, because this is the point where collapse gets back in. Swap once. If two hands in a row seem wrong, the brief needs more thought.

**What the sampler does.** It weights registers by what strong sites in that genre and its neighbours do, with gold counting three times silver. For a generic brief it cuts bold-colour, illustrated and expressive to 30 percent of their weight, and it steers away from the last three registers used. A food and drink brief comes out about 43 percent photo-led, 28 warm-neutral, 11 light-precision, and the rest spread thinly. A SaaS brief comes out about 39 percent light-precision, 25 dark-precision, 13 gradient-light, 11 warm-neutral.

**Mixing.** Name one register, and let one or two moments interrupt it. Most pages stay put. Attio is light with one dark chapter. Levels opens on a dark photographic hero and then runs light-precision. Scale moves through black, green, tan and white, and it holds together only because film and one type system carry it. The budget in `elements/layout.md` applies: one interruption on a normal page.

## Genre to register

Shares of gold and silver sites. Consumer and local genres lean photo-led and warm-neutral, and software leans precision. Small samples are marked.

| Genre (sites) | Leans | Also seen |
|---|---|---|
| Devtool (75) | light-precision 43%, dark-precision 27% | mono-technical 11%, bold-colour 7%, gradient-light 5% |
| SaaS (61) | light-precision 31%, dark-precision 26%, gradient-light 18% | warm-neutral 8%, bold-colour 8%, illustrated 5% |
| AI (42) | light-precision 36%, warm-neutral 19% | photo-led 12%, bold-colour 7%, gradient-light 7% |
| Finance (42) | light-precision 43%, dark-precision 14% | warm-neutral 12%, gradient-light 10%, photo-led 10%, bold-colour 10% |
| Ecommerce (37) | photo-led 43%, light-precision 19% | warm-neutral 14%, type-led 8%, dark-precision 8% |
| Brand, hardware (29) | photo-led 48% | light-precision 14%, bold-colour 10%, render-3d 7% |
| Fashion (9, small) | photo-led 89% | mono-technical 11% |
| Food and drink (18) | warm-neutral 44%, photo-led 28% | bold-colour 22%, illustrated 6% |
| Hospitality (10, small) | photo-led 60%, warm-neutral 40% | none |
| Local business (18, no gold) | photo-led 33%, warm-neutral 28%, bold-colour 28% | light-precision 11% |
| Health (32, 3 gold) | photo-led 38%, warm-neutral 19%, soft-pastel 19% | light-precision 9%, illustrated 6% |
| Education (17, 2 gold) | bold-colour 29%, illustrated 24% | warm-neutral 18%, photo-led 18% |
| Nonprofit (5, small) | photo-led 40% | one each: type-led, soft-pastel, bold-colour |
| Agency (41) | photo-led 27%, light-precision 24%, type-led 17% | bold-colour 12%, dark-precision 7%, warm-neutral 7% |
| Portfolio (19) | type-led 32%, photo-led 21% | warm-neutral 16%, light-precision 11% |
| Architecture (15) | photo-led 47% | warm-neutral 13%, bold-colour 13%, type-led 7% |
| Culture (27) | photo-led 26%, type-led 26% | bold-colour 19%, light-precision 15%, warm-neutral 11% |
| Editorial (6, small) | evenly split | light-precision 33%, then one each |

Surfaces change this. Among gold and silver, pricing is 12 of 19 light-precision and docs are 11 of 16, since both are reference pages, and warm-neutral is the next choice for each. For an app screen the corpus has only 7 rows, 4 of them gold or silver, so use `elements/app.md` and treat the register as a ground, an accent rule and a type voice only.

## One business, four registers

A register decides what you make, not how good it is. These examples use made-up businesses that no reference shares. Read them for the reasoning, and do not reuse their details.

**A bicycle repair workshop.**

| Register | Ground and colour | Frames | Signature |
|---|---|---|---|
| photo-led | White, with colour only from the pictures | Hands, parts and tools shot at one low raking light, prices on a plain band under each image | Every crop at the same low angle |
| warm-neutral | Pale stone, dark bottle ink, no colour on text | A ruled service list with prices and turnaround days, a map, one film loop of a wheel being trued | The ruled list repeats as the hours and as the footer |
| type-led | Light grey, one signal colour on the booking link | The job list as a large typeset index | Hairlines at a fixed pitch |
| bold-colour | Two rooms in frame-paint colours, deep ink in place of black | Repair tickets and a price table sitting on colour, a real booking form | Each colour owns one job |

**A payroll tool.**

| Register | Ground and colour | Frames | Signature |
|---|---|---|---|
| dark-precision | Near-black, three steps, colour only on status | A real pay run at density, rows settling as they clear | One line of status colour running through the plates |
| light-precision | White, a 3 percent tone step, a black primary | Tables, a tax filing timeline, a payslip with true arithmetic | A ruled ledger shape that recurs |
| warm-neutral | Very pale warm tone, deep green ink | Payslips drawn as paper, real employee stories, redrawn UI | A perforated edge used twice |
| mono-technical | Paper and faint rails, one ink | Formulas, country rules, filing deadlines as a dated list | Every number cites its source |

## Where the corpus is thin

Trust this chapter in proportion to the evidence.

- **Strong:** light-precision, photo-led, warm-neutral, dark-precision, with 16 to 50 gold sites each.
- **Fair, with caveats:** gradient-light has 7 gold sites and 5 are Stripe, so its gold evidence is mostly one company's taste. Bold-colour has 51 sites and only 4 gold. Mono-technical has 4 gold, 2 of them Zed pages. Type-led has 9 gold, split into two branches.
- **Thin:** soft-pastel has 1 gold and 12 sites in all. Render-3d has 2 gold and 6 sites in all, with deep measurements on 6. Illustrated has no gold, and expressive has none either. For these, H1 and weight figures rest on 12 or fewer pages. Where a register has fewer than four gold sites, this chapter leans on silver and expressive-tier sites.
- **Thin genres:** nonprofit (5), editorial (6), fashion (9), hospitality (10). Local business has no gold site, and health has 3 despite 32 sites, likely because good local design is rarely famous enough to be collected. Do not read this as proof that local sites cannot be excellent. Hold them to the full standard.
- **Thin surfaces:** 579 of 826 rows are landing pages. App screens have 7 rows. Registers describe marketing surfaces far better than product surfaces.
- **What the numbers cannot show.** Motion rows are analyst notes from stills and load strips. Library detection sees only globals, so GSAP is undercounted and left out here, and the smooth scroll and three.js shares are lower bounds. Pages that hijack scroll report a height of 900px. Canvas counts small uses as well as full scenes. Register labels are one analyst's call on the dominant impression, and some sites sit on a border: White Cube is filed under light-precision and leans on photographs, and Aman is filed under warm-neutral and could be photo-led.
- **Colour measures.** Accent hues come from analyst palettes and describe the corpus, not good taste. A high share is often a warning that a choice is common, as terracotta is in warm-neutral.

## Before you call it done

- **Frames.** Name what fills each frame. Would it survive at full size beside the references you were dealt?
- **Version.** Which **Range** entry did you take, and why this one for this brief? If you cannot say, you took the default.
- **Cheap check.** Reread your register's **Cheap** entry and mark every item your page has.
- **Colour.** State the accent's job in one sentence. If it has none, remove it. On bold-colour, state one for every colour.
- **Ink.** Measure secondary text on its actual ground, especially on warm-neutral, soft-pastel and type-led, where real sites often fall short.
- **Swap.** Put the page beside your home register. If it could pass for that, change the ground, the accent or the type voice until it cannot.
- **Motion.** Compare your motion level with the register's. A precision page full of moving buttons and a render-3d page with nothing moving are both off.
