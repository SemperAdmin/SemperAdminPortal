# Wave 3 fix residuals

Items left open after the wave 3 fix pass on 2026-11-15.

## PR 152 held findings, applied

PR 152 merged and main merged into this branch on 2026-11-15. The eight held findings now apply on military-parental-leave-program and convalescent-leave. The 10 and 21 day paternity and adoption figures from MCO 1050.3J are not on the parental leave page, so that finding needed no edit.

## Decided

- Six hand-authored video pages with dead marinenet.marines.mil addresses were removed 2026-11-15. Stephen confirmed the videos are retired.

- Six more video pages stay in review status, held by Stephen 2026-11-15: fitrep-self-input, how-to-set-alerts-for-new-videos, navmc-11000-walkthrough, pft-grading-overview, promotion-board-records, separation-packet-flow. They remain on VIDEO_URL_QUARANTINE in src/lib/content/schemas.ts until a retire or record decision.

## Partial fixes

- content/citations/mctfsprium-70101.mdx. The Table 7-2 grid harvest is garbled, so the entry sends readers to the live manual. Table 7-1 rule 9 shows no TTC in the harvest.
- content/inspections/igmc-guides/4600.40.json item 0110 keeps the supervisor notification step, which the DoD GTCC Regulations paragraph 041106 quote supports. Only the unsupported "in writing" wording dropped.

## Not changed by this pass

- 12 added lines keep banned words carried from the original sentence. The pass fixed facts, not house style.
- 221 no-archive-source claims stay as listed in wave-3-no-archive-source.md.
