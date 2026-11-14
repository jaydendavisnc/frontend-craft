# Frontend Craft

A design skill that makes AI models build frontends like a professional team. It works in Claude Code and OpenAI Codex.

Left alone, models collapse onto a few favourite pages. This skill replaces their habits with a measured corpus: 826 real sites analysed and graded, broken into 8,917 tagged element examples and 1,570 element variants with exact specs.

## Install

Claude Code:

```bash
git clone https://github.com/jaydendavisnc/frontend-craft ~/.claude/skills/frontend-craft
```

OpenAI Codex:

```bash
git clone https://github.com/jaydendavisnc/frontend-craft ~/.codex/skills/frontend-craft
```

Then ask for a frontend as you normally would. Python 3.8 or later runs the sampler. Node 22 or later and Chrome run the audit tools.

## How it works

1. **Read the person.** `references/intent.md` turns the brief into decisions: every named site, colour, font and section is kept, and mood words such as "clean" or "premium" are decoded rather than taken literally. What the person asked for outranks everything the skill would otherwise choose.
2. **Get the pictures.** `scripts/photos.py` finds reusable photographs, `scripts/cutout.swift` cuts out subjects and `scripts/imgset.py` grades them as a set.
3. **Deal.** `scripts/direction.py` deals a different direction each run, filling only what the brief leaves open: a register, a type system, a palette, a voice and one move for each job the page has to do, taken from real sites that do not look like templates.
4. **Have ideas.** `references/taste.md` gives the model an idea engine and better directions for every part of a site, with first principles for scroll, typography and components. Every scene is planned as a card and rated on an ambition ladder before any code.
5. **Build.** Real copy first, then the first scene on its own, then the rest, then one motion score for the whole page.
6. **Audit.** `scripts/shoot.mjs` runs the page in a real browser, `scripts/audit.mjs` scores how template-shaped it is, `scripts/lint.mjs` flags generated copy, and `scripts/slop.mjs` names every element to remove. The model fixes it and goes again.

It also covers work that is not a web page. `references/beyond-web.md` has first principles for slide decks, documents, dashboards, mobile apps, email, social graphics, posters, data graphics, identities, game interfaces, motion and packaging, and the sampler deals a taste hand for those instead of page sections.

GPT models also receive coaching, worked examples from top-scoring pages, specific business angles with bespoke components, and forced rebuild rounds.

## Results

Scored blind by panels of Claude models, out of 10, with real top-tier sites mixed in. See [RESULTS.md](RESULTS.md) for the numbers and their limits. These were measured before version 1.5, which has not been scored blind yet. See [CHANGELOG.md](CHANGELOG.md) for what changed.

| Test | Without | With | Real sites |
|---|---|---|---|
| GPT-6, 6 briefs never tuned on | 5.67 | 6.72 | 7.92 |
| Claude Opus, 12 tuning briefs | 6.33 | 7.93 | 7.85 |
| GPT-6, 12 tuning briefs | 5.21 | 5.99 | 7.85 |

There is no clean held-out result for Claude.
