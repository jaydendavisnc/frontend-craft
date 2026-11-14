# Clarity: the anti-clutter facet

Read this before you build a scene, and again before you call it finished. A page can have excellent pictures, bold type and clever components and still feel cheap, because there are too many of them at once.

Clutter is not about how much is on the page. It is about how many things a person has to process at the same moment. A full-bleed photograph with one huge word has very little clutter. A tidy white panel with twelve small labelled things has a great deal, however well aligned they are. The rates rail that opened this version of the skill is the perfect example: four rates, a countdown, four news items and a phone number, all correct, all aligned, all competing, in one narrow column on the first screen.

**Clutter is the commonest way for a generated page to look generated.** A model is rewarded for completeness, so it keeps adding. Each addition is defensible on its own. Together they read as noise. You will not notice it while building, so it has to be counted.

## The rule

**One idea per screen.** At any scroll position, a stranger should be able to say what this screen is about in five words. Everything visible serves that idea, or it goes.

## What counts as clutter

Learn to see these. Each one looks like finish, and none of them is.

| Clutter | Why it appears | What to do |
|---|---|---|
| Pill above a heading | It feels like hierarchy | Delete it. The heading can carry it |
| Small label next to everything | It feels informative | If the thing needs a label, the thing is unclear. Fix the thing |
| Status dots, tags, chips | They feel like real software | Keep one, on the one live thing |
| Corner notes, coordinates, dates, edition numbers | They feel designed | Delete them unless a visitor would ask for them |
| `01 / 05` and scroll prompts | They feel crafted | Delete them |
| Hairlines between everything | They feel precise | Use space. If you need a rule, use it once |
| Icons beside every line | They feel friendly | Words alone are cleaner than words with a small drawing |
| Two buttons side by side | It feels helpful | One action per screen |
| A subhead repeating the heading | It feels complete | Delete the subhead |
| Captions that describe the picture | They feel thorough | The picture is already saying it |
| Four small things | They feel like value | Make one thing large |
| Tickers, badges, trust seals, ratings | They feel reassuring | One proof, shown properly, in its own scene |
| Everything visible at once | It feels generous | Show detail when someone asks for it |

## Six ways to remove clutter

Use these in order. Each makes the page better without losing anything people need.

1. **Delete.** Take it out and look. Most things are not missed. If nobody would write in to complain, it was never needed.
2. **Merge.** Two small things become one large thing. Four rates become one rate you operate. A heading, a subhead and a caption become one sentence.
3. **Show it.** Replace the words with the thing. A sentence about being local becomes a photograph of the street.
4. **Hide until asked.** The resting page is the calmest version of itself. Detail arrives on hover, tap, drag or scroll, exactly when someone wants it. The full table lives behind a plain-text switch, or one tap away.
5. **Move.** Give it a scene of its own. Twelve things on one screen is clutter. Twelve scenes with one thing each is a story, though you rarely need twelve.
6. **Scale.** If you cannot remove anything, make one thing far bigger than the rest. Hierarchy absorbs a surprising amount of content.

## Budgets

These come from measuring real sites one screen at a time. Treat them as limits for a marketing page. `audit.mjs` checks them.

| Per screen, typical | Real sites, median | 2025 Site of the Year | Clutter version 1 page | Your limit |
|---|---|---|---|---|
| Text blocks | 14 | 3 | 56 | 22 |
| Words | 59 | 4 | 194 | 100 |
| Hairlines | 0 | 0 | 6 | 1 |
| Chips and tags | 0 | 0 | 0 | 0 |
| Type sizes on a screen | 4 | | | 4 |

Measured on 35 sites, across a full walk of each page. The version 1 page looked calm and tidy to the model that built it, and held four times the text blocks of a typical good site. You cannot judge this by eye while building, which is why `audit.mjs` counts it.

These limits are for marketing pages. A working app screen can hold more, as long as it reads as one object.

Also hold each scene to these, which you can check by eye:

- **One lead.** One thing is plainly first. If two things compete, shrink one.
- **Three sizes.** A scene uses three type sizes at most. Five is noise.
- **One action.** One filled control per screen.
- **Two inks and one colour.** Ink, a quieter ink, and one accent on one thing.
- **One device.** If a scene already has a big picture, it does not also need a pattern, a badge and a marquee.

## When density is right

Clarity is not emptiness, and it is not a ban on detail. A timetable, a price list, a real dashboard or a dense product window can hold a great deal, and it can look wonderful, as long as it reads as **one object**. The test is how many things you perceive, not how many characters there are. Twenty rows in one beautifully set table is one thing. Five unrelated floating cards are five things.

Density belongs inside real content. The chrome around it stays quiet. A dense object on a calm ground reads as confident, while small decoration scattered over a sparse ground reads as nervous.

## Tests to run

- **Five seconds.** Look at a frame for five seconds, then close your eyes. What did you see? If the answer is a list, it is cluttered.
- **Five words.** Say what this screen is about in five words. If you cannot, it has two ideas.
- **The thumb.** Cover each small element in turn with your thumb: a badge, a chip, a dot, a label, a divider, a corner note. If the scene reads the same, delete it. Every element needs a job a visitor could name.
- **The squint.** Blur your eyes. You should see one shape, or two. A page of many even grey specks is cluttered, even if every speck is tidy.
- **Subtract once more.** When you think a scene is finished, remove one more thing. If it improves, remove another. Stop when removing something makes it worse.
