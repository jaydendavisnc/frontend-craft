# Frontend Craft: results

Blind panels scored each page three times against harness/rubric.md, without knowing what made it. Eight real gold sites sat in each pool as anchors. Scores are out of 10.

| Test | Without skill | With skill | Real gold |
|---|---|---|---|
| Claude, 12 training briefs, round 1 | 6.33 | 7.93 | 7.85 |
| GPT-6, 12 training briefs, round 1 | 5.21 | 5.99 | 7.85 |
| GPT-6, 6 held-out briefs, final skill | 5.67 | 6.72 | 7.92 |
| Claude, 6 held-out briefs, final skill | not clean | 7.53 | 7.92 |

GPT-6 held-out gain: +1.06, 95% interval +0.53 to +1.61, 6 of 6 briefs improved. Round 1 Claude gain: +1.55, 95% interval +0.95 to +2.16, 12 of 12 briefs.

The held-out Claude control scored 7.80, but it is not a clean control: those agents loaded the user's memory, which includes design feedback that did not exist in round 1.

GPT-6 diversity across repeat runs of one prompt: font overlap 0.889 to 0.0, palette distance 4.2 to 42.1, distinct primary fonts across 16 pages 2 to 9, and 11 across 12 pages with the final skill.

Limits: panels are Claude models, small samples, and the anchors are real sites captured differently. Changes made after the final snapshot, including the grey-ground filter and the rule on looks versus structure, were not re-measured.

## Version 1.5 against 1.0

Each round rebuilt the same twelve training briefs from scratch with Claude Opus and the skill under test, then a fresh blind panel scored those pages beside the same twelve 1.0 pages (re-shot with the current tools) and eight real gold sites. Scores are out of 10.

| Round | v1.0 | v1.5 | Real gold | Gain, 95% interval | Briefs improved |
|---|---|---|---|---|---|
| First draft (a bold move per section, builders chased `audit.mjs`) | 7.24 | 5.99 | 6.75 | -1.25 (-1.54 to -0.97) | 0 of 12 |
| Revision 1 (1.0 recipes back, one signature, slop checks) | 7.46 | 7.49 | 6.88 | +0.03 (-0.26 to +0.32) | 4 of 12 |
| Revision 2 (an idea per section, no tricks, protected motion) | 7.22 | 7.39 | 6.94 | +0.17 (-0.10 to +0.47) | 6 of 12 |
| Released (signature on the first screen, type and colour follow the review, stock layouts flagged), four judgements per page | 7.17 | 7.46 | 6.69 | +0.29 (+0.06 to +0.52) | 10 of 12, 1 level |

In the released round, 1.5 led on professional (7.57 against 7.34), finish (7.54 against 7.04), components, identity, typography, colour and voice, and trailed slightly on imagery (7.52 against 7.72) and motion (6.29 against 6.43).

Limits: the same as above, and more. The 1.0 pages were built during 1.0's own tuning on these briefs. Each brief has one build per version, so builder variance is large; the per-panel score for the same 1.0 pages moved between 7.17 and 7.46. The photo libraries rate-limited parallel builds, so many 1.5 pages have no photographs. The 1.5 builders ran a review step using a rubric close to the judges' rubric.
