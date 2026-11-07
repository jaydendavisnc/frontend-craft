# Dealing a direction by hand

Use this only if you cannot run `scripts/direction.py`. The hands in `data/decks/` are that sampler's own output, dealt in advance, so you get the same kind of direction using only file access.

The point of a hand is to stop you landing on your favourite look. Do not browse the decks and choose the one you like best, since that brings back the problem they solve.

## How to pick

1. **Work out the surface:** landing, store, app, pricing, docs or portfolio.
2. **Work out the genre:**

| Genre | Covers |
|---|---|
| `software` | Business software, productivity, collaboration |
| `developer-tool` | APIs, infrastructure, developer products |
| `ai-product` | Assistants, AI features as the product |
| `finance` | Banking, payments, insurance, crypto |
| `food-drink` | Cafes, restaurants, bakeries, drinks |
| `shop-brand` | Consumer brands that sell objects |
| `health` | Clinics, wellness, fitness |
| `services` | Law, consulting, local trades, agencies |
| `culture` | Museums, venues, events, education, nonprofits |
| `creative` | Studios, portfolios, architecture |

3. **Find the files.** Each is named `<surface>-<genre>-<n>.md`. If that exact pair has no file, use the same surface with the nearest genre. `data/decks/index.json` lists them all.
4. **Choose `n` by counting, not by taste.** Count the characters in the user's request, divide by the number of hands available for that pair, and take the remainder plus one. A 41-character brief with 4 hands gives remainder 1, so hand 2.
5. **Read that one file** and treat it exactly as `SKILL.md` describes in step 2. Adapt anything that does not suit the brief, and say why in one line.

If the hand is wrong for the brief as a whole, for example a dark technical register for a children's bakery, move to the next number. Do that once at most.

## What differs from the live sampler

- The line numbers in each hand are correct only for the version of the chapters they were built from. If a pointer does not land on the named variant, search the chapter for `<!-- v:<element>/<variant> -->`.
- A deck has no memory of your earlier runs, so two pages for the same person could get the same hand. If you know you have used one, take the next.
- If you cannot read files either, use the principles and measured defaults in `SKILL.md` directly, and say that you had no direction to work from.
