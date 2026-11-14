# Changelog

## 1.5

Version 1 produced correct, tidy pages that read as templates. The cause was in the method, so the method changed.

- The sampler deals jobs and moves, not section types. A hand no longer says "testimonial". It says what the scene has to do, names the template version as forbidden, and deals a move.
- 116 moves in `data/moves.jsonl` and `references/moves.md`: 96 observed on 34 live sites, 20 built and tested here.
- Pictures come first. New `scripts/photos.py`, `scripts/cutout.swift` and `scripts/imgset.py`. `--no-images` is now a last resort, and the sampler leans towards picture-led registers unless the page is a tool.
- New chapters: `references/composition.md`, `references/components.md`, `references/motion/score.md`, `references/template-audit.md`.
- New `scripts/audit.mjs`, a template detector calibrated on 35 real sites.
- Scene cards replace the ideas list. Rebuild rounds now apply to every page, and an independent critic is part of the process.
- Medians now apply to reading text and controls only. Pages get a loud moment budget.
- Removed from default hands: the single section-heading device, the hairline grid rhythm, and section recipes for anything but navigation and footers.
- The person comes first. New `references/intent.md` decodes mood words, named sites and feedback, and sets the order of authority: their words, their brand, what they imply, then the hand. The sampler reads look, colours, fonts, sections and effects from the brief, lets a look word choose the register, and opens every hand with **What they asked for**, which outranks everything dealt.
- Taste. `references/taste.md` is rewritten around what people respond to and what juries reward, with an idea engine of twelve lenses, better directions for every part of a site, first principles for scroll, typography, components, colour and light, and a five-rung ambition ladder.
- Beyond the web. New `references/beyond-web.md` has first principles for slide decks, documents, dashboards, mobile apps, email, social graphics, posters, data graphics, identities, game interfaces, motion, packaging and CVs. The sampler recognises decks, PowerPoint files, reports, emails and social graphics and points each to its own section.
- New `scripts/slop.mjs` names the exact elements that make work look generated, and exits non-zero until none are left. It runs on pages, posters, covers and SVG art. `tests/slop/check.sh` keeps it calibrated.

## 1.0

Sampler, element atlas, motion cookbook, shoot and lint.
