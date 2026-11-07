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

1. **Deal.** `scripts/direction.py` deals a different direction each run: the sections of one real page in order, one exact recipe per section, a type system, a palette and a voice.
2. **Brainstorm.** The model writes three "wouldn't it be cool if" ideas for every section and builds the best.
3. **Build.** Real copy first, then the first screen on its own, then the rest.
4. **Audit.** `scripts/shoot.mjs` runs the page in a real browser and reports what is weak, including the habits blind reviewers marked down. The model fixes it and goes again.

GPT models also receive coaching, worked examples from top-scoring pages, specific business angles with bespoke components, and forced rebuild rounds.

## Results

Scored blind by panels of Claude models, out of 10, with real top-tier sites mixed in. See [RESULTS.md](RESULTS.md) for the numbers and their limits.

| Test | Without | With | Real sites |
|---|---|---|---|
| GPT-6, 6 briefs never tuned on | 5.67 | 6.72 | 7.92 |
| Claude Opus, 12 tuning briefs | 6.33 | 7.93 | 7.85 |
| GPT-6, 12 tuning briefs | 5.21 | 5.99 | 7.85 |

There is no clean held-out result for Claude.
