# Taste

Read this before you design anything: a website, a deck, a poster, an app screen. Read it again when a page is correct and dead.

Taste is knowing what people respond to, and having the nerve to make one decision more than the safe version would. It is not a style. Every piece that people remember has one idea a timid designer would not have dared, executed so well that it feels obvious afterwards.

Models fail at taste in one way: they average. The probable page is the average of all pages, which is nobody's page. Your first idea is the most probable one. It is almost never the one to build.

**Contents.** [What people respond to](#what-people-respond-to) · [What juries reward](#what-juries-reward) · [The idea engine](#the-idea-engine) · [Ideas for every part of a site](#ideas-for-every-part-of-a-site) · [Scroll](#scroll) · [Typography](#typography) · [Components](#components) · [Colour and light](#colour-and-light) · [The ambition ladder](#the-ambition-ladder) · [Outside the browser](#outside-the-browser) · [Traditions to learn from](#traditions-to-learn-from) · [What makes it trashy](#what-makes-it-trashy) · [Critique](#critique)

## What people respond to

These are the things that make a person stop, lean in and remember. Design for them directly.

- **Surprise inside recognition.** They know what this is, and it is done in a way they did not expect. Fully familiar is boring. Fully strange is confusing. The sweet spot is a known thing with one rule broken.
- **Realness.** Evidence of a real thing made by real people: the actual product working, a specific name, a real price, a photograph with a particular light. People detect fake content instantly, even when they cannot say why.
- **Response.** Things that answer them. A surface that catches the pointer's light, a number that rolls when they drag, a product that performs the task as they scroll. Response makes a page feel like a material, not a picture.
- **Being shown, not told.** The moment they understand something without reading about it. Build the thing that explains itself, then delete the paragraph that explained it.
- **Rhythm.** Loud, then quiet. Dense, then open. Tension, then release. A page at one volume, however good, exhausts people.
- **Care they cannot name.** A focus ring that was designed, a number that aligns, a transition with no seam. Nobody points at these, and everybody feels their absence as "cheap".
- **Confidence.** Few words, sure of themselves. Over-explaining, hedging and listing everything reads as fear.
- **Being let in.** A detail rewarded for looking closely: a hover that reveals the story, a footer with a joke, an easter egg that belongs to the subject.

## What juries reward

Awwwards scores design at 40%, usability at 30%, creativity at 20% and content at 10%. Read that carefully: an idea that breaks usability loses more than it gains. What wins Site of the Day, FWA, Cannes, D&AD and the Type Directors Club, again and again:

- **One signature idea, carried through the whole site,** not a different trick per section. The idea is usually the clearest way to understand the subject.
- **Transitions without seams.** Elements travel from one state into the next. Nothing pops, flashes or jumps.
- **Type as an image.** Display typography composed like a photograph, at a scale and with a confidence most sites never dare.
- **Art-directed imagery.** Photographs, renders or illustration made for this site as a set, with one light and one treatment.
- **Real content.** Juries forgive a lot for content that is genuinely interesting, and nothing for lorem ipsum in a beautiful frame.
- **Perfect on a phone.** The phone version is designed, not squeezed.

What they mark down: a WebGL blob that has nothing to do with the subject, loaders longer than two seconds, scroll-jacking that fights the trackpad, text you cannot read over the effect, custom cursors that hide the pointer, and the same template every studio used last year.

## The idea engine

For every part of what you are making, write three "wouldn't it be cool if" ideas in `.frontend-craft/ideas.md`, using different lenses. Cross out the first one you thought of: it is the probable one. Then test the rest.

**Lenses.** Each produces a different kind of idea. Use at least two per part.

1. **The subject's own objects.** What things does this world contain? A bakery has proving baskets, flour sacks, a crumb structure, a 4am oven. A logistics tool has manifests, route lines, barcode labels. Borrow an object's behaviour and logic, not its skin. A pricing table that weighs like a baker's scale is an idea. A page textured like a flour sack is a costume.
2. **The verb.** What does the product do? Make the visitor do it on the page. A translation app translates the headline as you hover. A budgeting app lets you drag your rent and watch the month rebalance.
3. **The real data.** What numbers, places or times are true about this subject? Plot them. A coffee roaster's single origin is a map with altitude. A gym's busiest hours are a live heat strip.
4. **Time.** Before and after, a day in order, the year in seasons, a scrubber through history.
5. **Scale.** Start at the whole and zoom into the detail, or the reverse: the city, the street, the shop, the cup, the crema.
6. **Material and light.** What is it made of, and how does light fall on it? Paper, glass, steel, skin, liquid.
7. **Point of view.** First person, the object's view, the customer at 7am, the engineer at 3am.
8. **A transplant from another medium.** Take the logic of a train departure board, a museum label, sheet music, a field guide, a film title sequence, an instrument panel or a recipe card, and translate it. Name the source in your ideas file.
9. **Inversion.** Flip the expected order. Pricing first, because the price is the story. The footer as the hero. The FAQ as the whole page.
10. **The visitor as material.** Their pointer, their scroll speed, their local time, their weather, what they type.
11. **Constraint.** One typeface at one size. No images. Only one colour. A grid of exactly nine squares. Constraints produce ideas that feel inevitable.
12. **Removal.** What if the expected element is simply not there: no hero image, no headline, no cards?

**Test every idea against five questions,** and keep the one that passes all of them:

1. Could it only belong to this subject? Swap in a competitor's name. If the idea still works unchanged, it is generic.
2. Does it show something true about the subject, or is it decoration?
3. Does it work before anyone explains it? A visitor should get it in two seconds.
4. Is it still usable, readable, fast and accessible, and does it survive on a phone?
5. Would someone screenshot it and send it to a friend?

**Novel is not random.** Never-seen-before means never seen for this subject, built from parts people know how to use. Keep the structure surprising and the controls familiar: a radically composed pricing scene still has a price, a button, and a plain statement of what you get.

**Cool and on brief.** Ambition goes further inside what the person asked for. It never replaces it. See `intent.md`.

## Ideas for every part of a site

Use this to find the page's one signature, and to make sure no part falls back to its template version. It is not a list of tricks to put in every section. Blind panels marked pages down hard when every section had its own idea: the page read as a sample book. Pick one part for the signature, and build every other part as the quiet, exact, well-made version of itself, with real content. For each part, here is its job, the template version to avoid, and directions that lead somewhere better.

**Navigation.** Job: get anywhere in one move, and say whose site this is. Template: logo left, five links centre, pill button right, glass blur. Better: a nav that is part of the composition, such as the wordmark at full width that shrinks into the bar on scroll; links that show where you are as a live position in the page; a menu that opens as a full scene with pictures of each destination; a nav made from the brand's own object, such as a ticket stub or a tab in a binder, if the brand earns it.

**The first screen.** Job: in two seconds, say what this is and make them want to see more. Template: headline and subhead on the left, product screenshot on the right, two buttons, a gradient. Better: the product doing its job, live, at full scale; one photograph so good it carries the brand, with the headline composed into it; the headline as the image, set at reckless scale with one detail moving; an interactive object they can touch before reading a word; a scene that builds itself in the first second and settles into a still composition.

**What it is.** Job: make the product understood. Template: three cards with icons and two lines each. Better: one large, real, working view of the product that changes as they scroll; the product in its real context, such as a phone on a café table or a screen in a cockpit; a single sentence with the product's interface woven into the words.

**How it works.** Job: show the sequence. Template: 01, 02, 03 cards in a row. Better: one continuous object that transforms through the steps as they scroll; a before and after they can drag; the whole process on one timeline with the current step lit; a working miniature they can run themselves.

**Features.** Job: show breadth without a list. Template: a grid of six icon cards, or a bento box. Better: features as states of one interface, switched by a control; features placed on the real thing, like labels on a diagram; a single scrolling scene where each feature arrives as the product performs it; an index of features, set as type, where hovering each one plays it.

**Proof.** Job: make them believe. Template: three quote cards with circle avatars and five stars. Better: the real artefact, such as the email a customer sent, the dashboard result, a before and after; a single quote at display scale with a real photograph of the person; a wall of short real reactions moving at the speed of reading; outcomes plotted on a chart with names attached.

**Numbers.** Job: make one figure memorable. Template: four stat tiles with count-up animations. Better: one number at enormous scale, set as the image of the section; a number the visitor changes, such as a calculator or slider whose result rolls like an odometer; numbers drawn as physical quantities, such as a stack, a distance or a pile; numbers placed in a sentence that reads naturally.

**Logos.** Job: borrow trust. Template: a grey marquee of logos. Better: fewer logos, larger, each with the one thing that customer did; logos as a quiet band in the footer of a stronger proof section; leave them out if they are invented.

**Pricing.** Job: make the choice easy and the price fair. Template: three equal cards with the middle one raised and "Most popular". Better: one plan and one price, stated with confidence; a slider for the real variable, such as seats, hours or kilos, with the price updating live; plans as a comparison of what you actually get, shown, not ticked; pricing set as a menu, a rate card or a receipt if that is honestly how the business charges.

**Comparison.** Job: show why this one. Template: a table of ticks and crosses. Better: the same task done both ways, side by side, with the time or effort visible; a scrubber between the old way and the new; three honest rows that matter rather than twenty that pad.

**FAQ.** Job: remove the last doubts. Template: an accordion of eight questions. Better: the three questions people actually ask, answered in full, in plain sight; questions as a conversation; answers that show, with a small product view or a picture inside.

**Team and about.** Job: make it human. Template: a grid of headshots with title text. Better: one real photograph of the team at work; a story told as a timeline of the company's real moments; each person with the object they care about; a founder's note in their own voice, with a signature.

**Forms and sign-up.** Job: get the yes with no friction. Template: an email field with a gradient button. Better: one field, set large, that feels like writing in the product; a form that shows what they get as they fill it; a waitlist that shows their position and the queue moving; real feedback on every field state.

**Closing call to action.** Job: the last push. Template: a centred dark band with a headline and two buttons. Better: return to the opening idea in its finished state; one big sentence and one button, with a detail that rewards reaching the end; the product inviting them in its own voice.

**Footer.** Job: everything else, findable. Template: four columns of links and a newsletter field. Better: the wordmark set across the full width; the footer as the brand's last scene, with the time, the place, the weather where they make things; a sitemap that is genuinely useful and beautifully set.

**Small places most sites forget.** The 404 page, the loading state, empty states, the hover on a link, the selection colour, the favicon, the cookie notice, the confirmation message and the error message. Each is a chance for one detail of personality. A 404 that belongs to the subject is remembered longer than the hero.

## Scroll

Scroll is the one input every visitor gives you. It is time they control. Use it to show change, sequence or depth, never just to make things appear.

**First principles.**

1. **Scroll should reveal something that could not be shown still.** A process, a transformation, a journey, depth, a comparison over time. If nothing changes, scroll only moves the page, and that is fine.
2. **The scroll distance should match the amount of change.** A pinned scene that takes three screens to move one thing feels broken. One screen of scroll for one meaningful change is a good start.
3. **Every resting position must read.** Stop anywhere, and the screen should be a composed frame with readable content, not half-faded text.
4. **The visitor stays in control.** Never change their scroll speed, never trap them, never snap them somewhere they did not choose. Light smoothing is fine. Fighting the trackpad is not.
5. **Content never depends on animation to exist.** If JavaScript fails, or reduced motion is on, everything is visible and in order.
6. **One scroll language per site.** Choose two or three behaviours and use them consistently, rather than a new trick per section.

**The catalogue.** Each is a tool with a job. Choose by the job.

| Technique | What it is | Use it for |
|---|---|---|
| Pinned scrub | A scene holds still while scroll drives it through a sequence | An object assembling, turning or explaining itself |
| Sticky graphic with steps | A chart or picture stays while text steps beside it, each step changing it | Data stories, explanations, case studies |
| Horizontal track | A vertical scroll drives a sideways row | Timelines, collections, a process, galleries |
| Zoom through | The camera moves into an object or a picture and arrives somewhere else | Moving from the whole to the detail, entering a world |
| Mask reveal | One scene is revealed through a shape or a wipe from another | Chapter changes, before and after |
| Reading line | Words light as they cross a line, at reading speed | One important paragraph, a manifesto, a privacy promise |
| Shared element | One element travels and transforms from one section into the next | Continuity, a product that becomes each feature |
| Product performs | The real interface carries out its task as you scroll | Software, apps, tools |
| Depth layers | Real cut-out layers move at different speeds | Photographs with real depth, landscapes, rooms |
| Camera path | A 3D scene with the camera moving along a path | Places, products, spaces that deserve 3D |
| Ground change | The page's colour and light change between chapters | Moods, times of day, chapters of a story |
| Progress figure | A number or a meter tied to progress through a story | Journeys, distances, countdowns |
| Velocity response | Motion blur, skew or stretch that follows scroll speed, subtly | Energetic brands, only as a seasoning |

**What turns scroll into slop:** a fade-up on every block; parallax on flat cards; scroll-jacking; long pinned sections where nothing happens; content invisible until animated; horizontal sections with no visible end; the same reveal on every heading.

Build with native `position: sticky`, CSS scroll-driven animations (`animation-timeline: view()` and `scroll()`) where supported, or one requestAnimationFrame loop reading a section's progress. Recipes and gating are in `motion/scroll.md` and `motion/foundations.md`.

## Typography

Type carries most of what people read and much of what they feel. It is where taste shows first.

**First principles.**

1. **Type is a voice.** Choose a face by what the subject sounds like: precise, warm, old, loud, technical, intimate. Then check it in the real headline, not in a specimen.
2. **Pair by one clear difference.** Two faces should disagree on one axis, such as serif and sans, or geometric and humanist, and agree on the rest. One family used well beats two used timidly.
3. **Hierarchy changes one thing at a time.** Size, or weight, or ink. Changing all three at every level makes noise.
4. **Display type is an image.** At display size, letters are shapes. Set tracking tighter as the size grows, kern by eye, break lines by meaning, and compose the block with the picture beside it.
5. **Reading type is invisible.** 15 to 20px, 45 to 75 characters a line, leading of 1.4 to 1.6, real quotation marks and apostrophes, no widows. Nobody should notice it.
6. **At most one display moment.** Most of the page at measured sizes, and at most one place where type is very large. It sits in a calm zone of a picture or on its own ground, never touching the picture's subject. Blind panels marked down huge headlines doing all the work, and type crashing into photographs.

**Details that separate good from cheap.** Tabular figures in anything that aligns. `text-wrap: balance` on headings and `pretty` on paragraphs. Hanging punctuation in large quotes. Optical size axes where the font has them. Small caps for runs of capitals. A real en dash in number ranges. Numerals that match the face's character.

**Ambitious moves that still read.** A headline set across the image, with the photograph cut by the letters or the letters behind the subject. Variable font axes moved by the pointer or by scroll. A custom wordmark drawn for the brand. Giant numerals as the structure of a section. Type set on a path or a grid that belongs to the subject. Kinetic type that reorganises as you scroll. Mixed scripts set with care for a bilingual subject.

**Font habits to break.** Inter for everything unless the person asked for it. Playfair or any high-contrast serif italic as "premium". Space Grotesk as "tech". Monospace labels everywhere as "developer". One word in a headline set in italic or a colour. Tracked-out uppercase labels above every heading. Choose from `typography.md` and the dealt type system.

## Components

A component is an object, not a box. The difference between a kit and a crafted product is here.

**The object test.** Every component has:

- **Material.** A surface, an edge and a way of catching light. Decide whether it is paper, glass, metal, ink or screen, and keep that consistent.
- **States.** Rest, hover, press, focus, active, disabled, loading, empty, error. Each one designed. Hover answers in about 200ms with a change of light or ink, not a lift and a shadow.
- **Physics.** How it moves when it opens, closes, appears or leaves. One easing family for the whole site.
- **Real content.** Real names, real numbers, real lengths of text, including the awkward long one.

**The lift test.** Could this component be lifted onto any other site unchanged? If yes, it is a kit part. Rebuild it from the subject: what does this business's card, button or table actually need to show, and what would its own version look like?

**Make things operable.** The strongest components let the visitor use the product: a slider that changes the result, a toggle that switches a real view, a scrubber through time, a working miniature. Operable beats animated, because the visitor causes it.

Read `components.md` for anatomy, and the element chapters in `elements/` for measured variants.

## Colour and light

- **Colour comes from the subject.** Photograph or imagine its materials: the flour, the copper, the uniform, the screen. Choose two or three colours as a set, with the values decided first, as dark, middle and light.
- **One colour leads.** Use it as a surface or a signal, at scale or at one point, never sprinkled everywhere.
- **Light is a single source.** Gradients are light falling on something, not decoration. A surface lit from above, a glow from the product's screen, a sunset on a photograph.
- **Dark is neutral black,** not blue. Colour comes from content: photographs, the product, one accent.
- **Test in greyscale.** If the hierarchy disappears, colour was doing work that value should do.

Read `color.md` for palettes and contrast.

## The ambition ladder

Rate every part of the page on this ladder, honestly, before you call it done.

1. **Template.** The section type, filled in.
2. **Competent.** Real content, good type, consistent system.
3. **Designed.** The content shapes the layout. This section could not be swapped onto another page without change.
4. **Signature.** An idea only this subject could have, which explains the subject better than words would.
5. **Award.** The signature idea, executed perfectly: seamless motion, finished edges, every state, a designed phone version, and real content that rewards reading.

Every part should reach level 3. One part, the signature, should reach 4 or 5. Several parts at level 4 read as a sample book, not a page: in blind tests that cost more than any single weak section. A part stuck at 1 or 2 is the next thing to fix, whatever else is good.

## Outside the browser

Posters, covers, art, identities, game interfaces and generative pieces need their own thinking. A poster built with web habits is a landing page in costume: a centred title, a date in a pill, a gradient. Slides, documents, dashboards, apps, emails and social graphics each have first principles in `beyond-web.md`. Read it for any medium that is not a web page.

**Be curious first,** in `.frontend-craft/concepts.md`:

1. **Name the medium and how it is met.** A poster is seen from five metres in two seconds, then from one metre for detail. A cover is a thumbnail among forty. A generative piece is looked at for a minute. A slide is seen across a room while someone talks.
2. **Find three ancestors.** Three real pieces or designers who solved this medium, from different decades and places, none of them websites. One line on the formal move each made. If the sampler dealt a tradition, it is one of the three.
3. **Write five concepts,** each a different formal idea, not a different colour. Type as the image. One object, enormous, cropped. A grid broken once. Repetition with one difference. A diagram that is also a picture. Two images in collision.
4. **Cross out the first two.** Build the one that makes you slightly nervous and that you can still explain in one sentence.
5. **Build it at real size, then push one variable to its limit.** Double the scale contrast, crop tighter, take a colour away. Keep the version that is more alive.

**Principles for any visual piece.**

- **One idea, at full strength.** If you can describe two equal ideas, you have made two half pieces.
- **Scale contrast.** Websites run about 3 to 1 between the largest text and the body. Posters run 10 to 1 and often 30 to 1.
- **Tension, then resolution.** Something slightly wrong, such as off centre, cropped too hard or too big, and one alignment or repetition that pulls it back into order.
- **Negative space is a shape.** Empty area should have a silhouette you could cut out.
- **Colour is relationships.** Few colours, chosen as a set, with the values decided first. More than four almost always looks cheap, unless the subject is colour.
- **Type is form.** At display size, letters are shapes. Lock lines into a block, let one word break the measure.
- **Material means something.** Halftone, grain, misregistration and a visible grid give presence only when they belong to the idea. Noise everywhere is a filter.
- **Specificity beats decoration.** A real date, place, name and detail do more than any ornament.

## Traditions to learn from

Take the move, not the look. Copying a movement's surface is a costume. Understanding why its move worked lets you use it on a new subject, on a poster or on a website.

| Tradition | The move | Use it when |
|---|---|---|
| Swiss International (Müller-Brockmann, Ruder) | An exact grid, flush-left grotesque, one photograph or geometric figure, mathematical tension | Clarity with authority: music halls, architecture, science |
| Polish poster school (Tomaszewski, Lenica, Cieślewicz) | Painted, hand-cut images, a single surreal metaphor, hand lettering | Film, theatre, anything with emotion and an idea |
| Constructivism (Rodchenko, El Lissitzky) | Diagonals, red and black, photomontage, type as architecture | Calls to action, politics, energy |
| Bauhaus (Bayer, Moholy-Nagy) | Primary shapes and colours, asymmetric balance, type in bars | Teaching, systems, anything rational |
| Japanese postwar (Tanaka, Kamekura, Nagai) | Flat geometric figures built from the subject, bold colour fields, vast calm | Culture, craft, events with a single image |
| Blue Note covers (Reid Miles) | One tinted photograph, type cropped and stacked to fill the square | Music, anything with rhythm |
| Penguin and Pelican covers (Marber, Germano Facetti) | A strict grid band for type, the image doing one conceptual thing | Books, series, anything that needs a family |
| Saul Bass | Cut-paper silhouettes, one symbol, jagged movement | Film, titles, motion |
| Dutch modernism (Crouwel, Total Design, Experimental Jetset) | A visible grid as the image, type as structure | Museums, design events, systems |
| Lubalin typographics | Letters that touch, overlap and carry the meaning | Mastheads, wordmarks, editorial headlines |
| Push Pin Studios | Illustrated, warm, eclectic, historical type revived with wit | Food, culture, anything with humour |
| Psychedelic posters (Wilson, Moscoso) | Vibrating complementary colour, lettering that fills a shape | Music and nights out, when the brief wants loud |
| Memphis and postmodern (Sottsass, April Greiman) | Clashing pattern, layered space, colour as attitude | Playful brands, when everything else is too polite |
| Munich 1972 (Otl Aicher) | Pictograms on one grid, a rainbow-free pastel palette | Wayfinding, sport, event systems |
| Mexico 1968 (Lance Wyman) | Op-art radiating lines from a mark into a whole system | Identities that need a pattern |
| Olivetti (Pintori) | Abstract, playful machine imagery, colour as rhythm | Technology made human |
| Tadanori Yokoo | Pop collage, sunrays, dense Japanese printed ephemera | Expressive culture work |
| Karel Martens | Overprinted geometric shapes, found material, colour mixing | Books, art, quiet experiments |
| Risograph zines | Two or three spot inks, grain, misregistration, cheap paper honesty | Community, small press, indie music |
| Contemporary generative (Zach Lieberman, Vera Molnár) | A simple rule repeated with deviation, plotter-line clarity | Art pieces, generative identities |
| Edward Tufte, Otto Neurath (Isotype) | Data as the picture, every mark carrying information, counted pictograms | Reports, explainers, numbers that matter |
| Massimo Vignelli (NYC subway, Knoll) | A few typefaces, a strict grid, colour as a code | Systems, signage, documents and decks |

## What makes it trashy

These mark a piece as generated. Most are web habits leaking into places they do not belong, or the probable version of a section.

- Centred stack of title, subtitle, date and button, on any medium.
- Web components on print or art: pills, buttons, nav bars, cards, "Learn more".
- Gradient blobs, aurora washes or mesh gradients as the background idea.
- Confetti of random geometric shapes, floating circles and squiggles.
- Drop shadows, glows, glass and bevels on flat design.
- Every element the same size, the same distance apart, with equal margins.
- Five or more colours with no relationship, or neon on black by default.
- Emoji, stock clip-art and generic icons standing in for an idea.
- A tiny block of text floating in empty space without a reason.
- Filters doing the work: noise, vignette and chromatic aberration everywhere.
- A literal picture of the subject with its name written underneath.
- Placeholder copy, invented hype, and "an unforgettable experience".
- On sites: every section a different trick; a fade-up on everything; three-card rows; stat tiles; a bento grid as the features idea; a quote carousel with stars; a dark band with two buttons as the ending.

## Critique

First run the checker. It names every trashy element it can see, with what to do instead, and it does not stop until nothing is left to remove:

```bash
node <skill-dir>/scripts/slop.mjs <file.html>
```

It is a floor, not a judge. A clean report means nothing trashy is left, not that the piece is good. Then ask these at real size, then at thumbnail size:

- **Squint.** Is there one shape you see first? If not, there is no idea yet.
- **The studio wall.** Would a designer pin this up, or scroll past it? Be honest.
- **The timid version.** What would the safe designer have done? If you did that, change it.
- **The ladder.** Rate each part from 1 to 5. Fix the lowest first.
- **The brief.** Read the person's words again. Did you build what they asked for, and go further inside it?
- **Remove.** Take away one element. If it gets better, keep going.
- **Name the ancestor.** Which tradition or which real site does this belong to, and does it understand that move or only copy its colours?
- **The AI test.** Does it look like an image model's idea of this kind of thing? Find the one decision an average would never make, and make it bigger.
