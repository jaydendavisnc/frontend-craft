# Template audit

How to tell whether a page is a template, and how to get an honest opinion of your own work.

## Why a builder needs help here

The person who built a page cannot judge whether it is memorable. They know what each part is meant to do, so they see intention where a stranger sees a heading and a grid. Everything in this file exists to get a view that is not yours.

## The script

`node scripts/audit.mjs <folder|url>` walks the page like a person and scores it out of 100. Each rule is something a filled-in template does. A pass does not make a page good. It only means the page is not the shape of a template, and that the real judging can begin.

What it was calibrated on: 36 real, well-regarded sites across brands, finance and interactive work, and pages made by version 1 of this skill. The rules with the most weight are the ones that separated them most cleanly.

| Measure | Real sites, median | v1 banking page |
|---|---|---|
| Share of the page under imagery | 38% | 11% |
| Scenes that are a heading stacked over content | 14% | 90% |
| Ruled lists | 0 | 2 |
| Rows of equal cells | 1 | 2 |
| Display text sitting on a picture | 2 | 2 |
| Text blocks on a typical screen | 14 | 56 |
| Words on a typical screen | 59 | 194 |
| Hairlines on a typical screen | 0 | 6 |

**Read the score honestly.** 35 of the real sites returned a score. Their median was 70, ranging from 30 to 96. The highest was a 2025 Site of the Year winner, and the next places went to studios known for this kind of work. The v1 banking page scored 30. Do not treat it as a quality score. It cannot rank good pages: some excellent sites score under 50, because they are single-page apps it cannot read, or because a strong brand can afford plain structure, and its motion detection misses many sites. It only answers one question: does this page have the shape of a template? A generated page has no brand to lean on, so aim for 80 or higher, then let the critic below do the real judging. Fix a failed rule by changing the design. A page that games these numbers is still a template.

## An independent critic

If you can start a subagent, do this after the rounds in `shoot.mjs`. Give it the page's contact sheet and frames, and this rubric. Do not tell it what you were trying to do, what you like, or what you think is weak. If it comes back praising your intention, it was told too much.

> You are judging a web page you did not make. Look at the contact sheet and frames at full size. Be strict: most pages are forgettable, and you are not here to be kind. Score each from 1 to 10, with one sentence of evidence that points at a specific place on the page.
>
> 1. Novelty: could this have come from a template or a section library? 1 is yes, 10 is that nothing like it exists.
> 2. Pictures and type: do they share one composed space, or do they sit in separate boxes?
> 3. Picture quality: art-directed and specific, or stock and generic?
> 4. Components: would you want to touch them? Are they objects of this business, or kit parts?
> 5. Motion: does it look directed, from what the frames show?
> 6. Stopping power: is there a moment in every scene, or only in the first?
> 7. Clarity: at each scroll position, is there one idea? Is anything on screen without a job?
> 8. Believability: would a real company ship this?
>
> Then name the three weakest moments, and for each say what you would do instead. Finish with the one moment someone would send to a friend, or say there is none.

If you can run several critics, give each one a single facet from the table in `SKILL.md`, because a critic who looks at one thing finds what a general reviewer forgives. One looks only at clarity, one only at components, and so on.

Treat anything scoring under 7 as work to do. A low score in clean or believability means the page has gone too far: fix that first, without giving up the idea.

## Comparing two versions

When testing whether a change really is better, the same rules apply as for any experiment.

- Build each version from scratch, with nothing carried over.
- Show judges both pages with the labels removed and the order randomised, so they cannot tell which is newer.
- Use more than one judge, and test on a brief you did not tune against.
- Report what lost as well as what won.
