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
