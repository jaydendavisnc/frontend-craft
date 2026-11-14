# Beyond the web

First principles for everything that is not a web page. Each medium is met differently, so each has its own rules. Start from how the thing is met, not from how a website looks.

Read `taste.md` first for the idea engine, and `intent.md` for reading the brief. Then find your medium below. Every section has the principles, a few ambitious moves, and the slop to remove.

**Contents.** [Slides and decks](#slides-and-decks) · [Documents and reports](#documents-and-reports) · [Dashboards and app screens](#dashboards-and-app-screens) · [Mobile apps](#mobile-apps) · [Email](#email) · [Social graphics](#social-graphics) · [Posters, flyers, covers](#posters-flyers-covers) · [Data graphics](#data-graphics) · [Identity and logos](#identity-and-logos) · [Game interfaces](#game-interfaces) · [Motion and title sequences](#motion-and-title-sequences) · [Packaging and labels](#packaging-and-labels) · [CVs and one-pagers](#cvs-and-one-pagers)

## Slides and decks

**How it is met.** Seen across a room, for about a minute each, while someone talks. Or read alone on a laptop, sent as a file, with nobody to explain it. Decide which before anything else, because they are different documents.

**First principles.**

1. **One idea per slide.** If a slide has two points, it is two slides. Slides are cheap and attention is not.
2. **The title is the point.** Write each title as a full assertion, such as "Churn halved after we moved onboarding into the product", not a label like "Churn". Someone reading only the titles should get the whole argument.
3. **The storyline comes first.** Write the titles in order as a list before you design anything. Read them aloud. If the argument does not flow, no design will save it. A strong spine is situation, complication, resolution, then what we ask for.
4. **Show, then say.** A picture, a chart, one number or a real artefact carries the slide. Words support it. A presented slide holds under about 25 words. A sent-ahead deck can hold more, set as real prose, never as bullets.
5. **Type sizes for a room.** Body at 24pt or more, titles 36 to 54pt, one hero number at 120 to 300pt. If you have to shrink the text to fit, cut the text.
6. **One grid for the whole deck.** Fixed margins, a fixed title position, a fixed baseline for the body. The title sits in the same place on every content slide, so the eye stops searching and the content changes on a still frame.
7. **Rhythm across slides.** Vary the type of slide: full-bleed picture, one big number, a chart, a quote, a dense comparison, a section break in the brand colour. A deck at one volume is a wall.
8. **Charts make one point.** The title says the point. The relevant bar or line is in the brand colour and everything else is grey. Label directly, remove the legend, round the numbers.
9. **The first and last slides are designed.** The cover sets the tone with one strong image or one typographic idea. The last slide is the ask or the single thing to remember, not "Thank you" or "Questions?".
10. **16:9 at 1920 by 1080,** unless the room or platform says otherwise. Keep everything clear of the outer 5% for projectors.

**Deck types.**

| Type | What it needs |
|---|---|
| Pitch deck | Problem, insight, product in action, traction as one chart, market as one number, team, the ask. About 12 slides. The product should appear by slide 3 |
| Keynote, product launch | Huge pictures and single sentences. A reveal structure: tension, then the thing. Builds that land with the speaker's words |
| Teaching, lecture | One concept per slide, diagrams built up step by step, a recap slide after each section |
| Business review, board | Sent ahead, read alone. Assertion titles, a dense but clean chart per slide, an executive summary slide at the front |
| Sales deck | Their problem in their words, the product solving it, proof from someone like them, the next step |
| Design and portfolio | The work full bleed, almost no text, one line of context per project |

**Ambitious moves.**

- A recurring visual device that develops through the deck: a line that grows, a map that zooms in, one object seen from a new angle on each section break.
- One slide that breaks the grid on purpose, at the moment the argument turns.
- Numbers set at poster scale, with the comparison drawn as physical size.
- Real screenshots, real photographs and real documents rather than icons.
- Section breaks as full-colour fields with one word.
- In HTML decks, transitions that move a shared element from one slide into the next, instead of fades.

**Slop to remove.** Bullet lists. A title that is a topic label. A logo and a page number fighting in every corner. Stock photographs of handshakes and people pointing at laptops. Icon rows. Gradient backgrounds. Clip-art arrows and drop shadows. Six fonts. "Agenda" slides with eight items. "Thank you" as the ending. Text under 20pt. Templates where every slide is the same title-and-bullets layout.

**Building them.** For HTML decks, make each slide a fixed 1920 by 1080 frame scaled to the window, with keyboard navigation and a print stylesheet for PDF. For PowerPoint files, use the pptx skill if it is available, and design on its slide masters with the same grid. For a deck someone will edit, use real text boxes, never text in images.

## Documents and reports

**How it is met.** Read at arm's length, often skimmed first. People look at headings, charts, captions and the first line of each paragraph before they decide to read.

**First principles.**

1. **Lead with the answer.** An executive summary or a first paragraph that states the conclusion, then the evidence.
2. **Headings tell the story.** As with slides, headings should be assertions a skimmer can follow.
3. **A real reading measure.** 60 to 75 characters a line, body at 10 to 12pt in print or 16 to 18px on screen, leading of 1.4 to 1.5.
4. **A grid with a margin column** for notes, captions and small figures. Wide figures can break into the margin.
5. **Every figure has a caption that says what to see,** not just what it is.
6. **Tables are for looking up, charts are for seeing.** Align numbers right, with tabular figures, and keep rules to a few hairlines.
7. **A type hierarchy of three or four levels at most.**

**Ambitious moves.** A cover built from the report's own key chart, a pull-quote or key number set at display size once per chapter, marginalia that carry the interesting asides, small multiples instead of one cluttered chart.

**Slop to remove.** Centred body text, justified text with rivers, headings in four colours, clip-art, "Introduction" as a heading for a paragraph that says nothing, charts with 3D effects, tables with heavy borders on every cell.

## Dashboards and app screens

**How it is met.** Used daily by people with a job to do. Glanced at for a status, then worked in for a task.

**First principles.**

1. **What decision does this screen support?** Put that answer at the top left, at the largest size. Everything else supports it.
2. **Density is a feature for experts.** Real tools show a lot, in a calm, tight, aligned grid. Do not pad a dashboard to look like a landing page.
3. **The chrome is quiet, the data speaks.** Neutral surfaces, one accent for status or selection, colour only where it means something.
4. **Every state is designed:** empty, loading, error, partial data, the very long name, the zero.
5. **Numbers align, and change is visible.** Tabular figures, deltas with direction and a comparison period.
6. **Keyboard first for power users.** Command palette, visible shortcuts, focus that is easy to see.

**Ambitious moves.** One custom visualisation that fits this data better than a stock chart. Live data that animates its changes in place. Inline editing everywhere. Empty states that teach with a real example.

**Slop to remove.** Rows of four stat cards with sparklines and green arrows as the whole idea, donut charts, gradient card backgrounds, glowing borders, a sidebar of thirty icons, dummy data that is obviously fake. Read `elements/app.md`.

## Mobile apps

**How it is met.** One hand, in motion, in bursts of seconds.

**First principles.** The thumb reaches the bottom third, so put primary actions there. One primary action per screen. Touch targets of at least 44 points. Follow the platform's navigation patterns, and spend the originality on content, motion and one signature interaction. Every transition shows where you came from and where you went. Design for the small phone first and the notch, the home indicator and the keyboard.

**Ambitious moves.** A gesture that belongs to the product, such as pulling to weigh or swiping a card into a real place. Haptic and motion feedback that feels physical. Content that fills the screen edge to edge.

**Slop to remove.** Web layouts in a phone frame, hamburger menus hiding the main features, tiny tap targets, cards in cards, onboarding carousels of illustrations with three dots.

## Email

**How it is met.** In an inbox, between twenty others, often with images off, often on a phone.

**First principles.** The subject line and the first line of preview text are the headline. One message, one call to action. Single column, about 600px wide, live text rather than text in images, and it should still make sense with images off. Tables and inline styles for layout, because email clients are old. Dark mode will invert you, so test it.

**Ambitious moves.** A single striking image that is the message. Plain-text-style emails from a real person, when the brand is personal. Real content, such as the actual product update, in the email rather than behind a click.

**Slop to remove.** Hero banners with text baked into the image, five calls to action, social icon rows, "Dear valued customer".

## Social graphics

**How it is met.** In a feed, while scrolling, at phone width, for under a second.

**First principles.** One idea readable at thumbnail size. Fewer than eight words on the image. A strong silhouette or one huge word. Brand recognition from a consistent system, such as one colour field, one typeface and one crop rule, not from a logo in the corner. Design for each format: 1:1, 4:5, 9:16. Leave room for the platform's interface on stories.

**Ambitious moves.** A carousel that reads as one continuous panorama when swiped. A series in which each post is one frame of a larger idea. Real photographs with type composed into them.

**Slop to remove.** Quote cards in a script font over a stock sunset, paragraphs on images, gradient backgrounds, five hashtags in the graphic.

## Posters, flyers, covers

**How it is met.** A poster from five metres in two seconds, then from one metre for detail. A cover as a thumbnail among forty.

**First principles.** One huge image or word, edge to edge. Scale contrast of 10 to 1 or more. Information set small and precise in one block. A silhouette that survives at 120px for covers. Read the principles, concepts and traditions in `taste.md`, and use `scripts/slop.mjs` to strip web habits.

**Slop to remove.** A centred title stack, pills, buttons, gradients, card boxes, a website nav, confetti shapes.

## Data graphics

**How it is met.** Read to answer a question.

**First principles.** Write the question and the answer first. The answer should be visible in five seconds. Choose the form by the comparison: change over time is a line, ranking is a sorted bar, part of a whole is a stacked bar or a waffle, relationship is a scatter, geography is a map only if place matters. Highlight the series that matters and grey the rest. Label directly and drop the legend. Start bar axes at zero. Annotate the moment that matters in plain words on the chart.

**Ambitious moves.** Small multiples. A chart that builds as the reader scrolls. Counted pictograms in the Isotype tradition. Data drawn at physical scale.

**Slop to remove.** 3D charts, pie charts with seven slices, rainbow palettes, gridlines everywhere, legends to decode, dual axes. Use the dataviz skill if you have it.

## Identity and logos

**How it is met.** Small, everywhere, for years.

**First principles.** One idea that survives at 16px and on the side of a building. It works in one colour. A wordmark drawn with care often beats a symbol. The identity is a system, not a mark: typeface, colour, a graphic device, a photography rule and a voice. Show it applied: a business card, a sign, an app icon, a social post.

**Ambitious moves.** A mark that becomes a pattern, a motion, or a frame for photography. A wordmark with one letter carrying the idea. A dynamic identity that changes with data while staying recognisable.

**Slop to remove.** Gradients, many colours, a literal picture of the product, swooshes, globes, lightbulbs, initials in a circle, effects.

## Game interfaces

**How it is met.** Glanced at mid-action, in a quarter of a second.

**First principles.** Diegetic where possible: information on objects in the world rather than in boxes on top of it. Hierarchy you read peripherally, using position, colour and motion rather than reading. The style belongs to the world's materials and era. Menus are a place in the world, not a web form.

**Slop to remove.** Dark cards with stat rows, web buttons, generic sci-fi glow and hexagons, sans-serif web fonts in a fantasy world.

## Motion and title sequences

**How it is met.** Watched once, in time, often with sound.

**First principles.** One graphic idea developed over time. Cut on the beat. Type moves as a material, with weight and inertia. Every motion has a cause. Hold the important frames long enough to read: about three words a second. Square-on camera and composition beat spinning cameras.

**Slop to remove.** Everything fading in, a logo spinning in 3D, random particles, lens flares, warp transitions, sparkles.

## Packaging and labels

**How it is met.** On a shelf from two metres among competitors, then in the hand, then at home for weeks.

**First principles.** Win the shelf with one colour or shape no competitor uses. In the hand, reward reading: the story, the origin, the detail. Legal and nutritional information set beautifully, not hidden. Design across the range as a system, where one variable changes per product.

**Slop to remove.** Fake vintage badges, script fonts for "artisan", leaves and swooshes for "natural".

## CVs and one-pagers

**How it is met.** Skimmed in under ten seconds, then read if it earns it.

**First principles.** Name and the one-line summary first. Strict alignment to one left edge. Dates in a consistent column with tabular figures. Achievements with numbers rather than duties. One typeface, two weights. White space between sections rather than lines and boxes. It must survive being printed in black and white and parsed by software.

**Slop to remove.** Skill bars and star ratings, photos unless expected locally, icons for every contact item, two columns that break parsing, four colours.
