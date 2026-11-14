# Changelog

## 1.5

**Revised after blind panels.** The first draft of 1.5 dealt a bold move to every section and asked builders to pass `audit.mjs`. A blind panel scored it below 1.0 on all twelve test briefs (5.99 against 7.24): builders gamed the audit, the bold moves converged on a new template (giant wordmark footers, type crashing into photographs, count-up numerals, tilted notes), and soft stock photos replaced 1.0's real interfaces. Three rounds of revision followed, each rebuilt from scratch on the same twelve briefs and judged blind against the same 1.0 pages with real sites mixed in: 7.49 against 7.46, then 7.39 against 7.22, then 7.46 against 7.17 with four judgements per page (a gain of 0.29, 95% interval 0.06 to 0.52, better on ten briefs, level on one, lower on one; real sites 6.69). The final version:

- The sampler deals 1.0's exact per-section recipes again, plus one signature idea per page, preferring an operable component built from real content. Footer wordmarks, word-by-word reveals, count-ups and split headlines are down-weighted.
- SKILL.md is rebuilt on 1.0's method: one system applied exactly, something real in every frame, measured defaults. Pictures are used only when they are sharp and belong to a set; otherwise interfaces, drawing and real information.
- New `references/review.md`: a blind review by a fresh reviewer before anything ships, with what panels rewarded and the tells they marked down.
- `slop.mjs` now catches the panel's tells: giant wordmark footers, ghost numerals, 555 numbers, tilted notes, script signatures, the same photo twice, one filter on every photo, word-by-word fills and count-up numbers on the first screen.
- `audit.mjs` is a floor, not a target: the rules that pushed type onto photos and stock images in are now notes, and soft pictures cost more.
- Every section gets an idea built from real content, the strongest goes to work on the first screen, and tricks are banned: ideas everywhere, tricks nowhere.
- The dealt type and palette are a starting point: when the review calls them generic, the builder changes them, taking the accent from the business's real materials.
- `slop.mjs` also flags stock layouts (a label, headline and two buttons as the hero; three quote cards in a row; a raised middle pricing card; FAQ grids) and bounce easing, and builders must reach zero text never visible in `shoot.mjs`.

The first draft's other additions stay:

- The person comes first. New `references/intent.md` decodes mood words, named sites and feedback, and sets the order of authority: their words, their brand, what they imply, then the hand. The sampler reads look, colours, fonts, sections and effects from the brief, lets a look word choose the register, and opens every hand with **What they asked for**, which outranks everything dealt.
- Taste. `references/taste.md` covers what people respond to and what juries reward, an idea engine for the page's one signature, directions for every part of a site, first principles for scroll, typography, components, colour and light, and an ambition ladder.
- Beyond the web. New `references/beyond-web.md` has first principles for slide decks, documents, dashboards, mobile apps, email, social graphics, posters, data graphics, identities, game interfaces, motion, packaging and CVs. The sampler recognises decks, PowerPoint files, reports, emails and social graphics and points each to its own section.
- 116 moves in `data/moves.jsonl` and `references/moves/`, now the source of the signature idea rather than a move per section.
- Picture tools: `scripts/photos.py`, `scripts/cutout.swift` and `scripts/imgset.py`, used only when the pictures are good enough.
- New chapters: `references/composition.md`, `references/components.md`, `references/motion/score.md`, `references/template-audit.md`.
- `scripts/slop.mjs` and `scripts/audit.mjs`, with `tests/slop/check.sh` keeping the slop checker calibrated.

## 1.0

Sampler, element atlas, motion cookbook, shoot and lint.
