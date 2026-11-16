# Wave 3 fix residuals

Items left open after the wave 3 fix pass on 2026-11-15.

## Held for PR 152

PR 152 merged on main. This branch does not carry main yet. Three wave 3 findings (military-parental-leave-program 2, convalescent-leave 1) and the five wave 1 findings in held-pr152.json wait until main merges into this branch.

## Needs a decision

- Six hand-authored video pages sit outside the catalog and point at dead marinenet.marines.mil addresses: administrative-separation-process-preparer, how-to-read-an-les-msg-focused, hqmc-ardb-directives-monthly-training-20240731, policy-and-software-updates, requesting-access, skillbridge-program-policy-update-navmc-1700-2b. The generator never prunes them. Repoint each to an MCeLE media id or delete it.
- content/citations/maradmin-466-26.mdx carries no externalUrl. The cached message text holds no marines.mil article id. Add the landing page URL once confirmed.

## Partial fixes

- content/citations/mctfsprium-70101.mdx. The Table 7-2 grid harvest is garbled, so the entry sends readers to the live manual. Table 7-1 rule 9 shows no TTC in the harvest.
- content/inspections/igmc-guides/4600.40.json item 0110 keeps the supervisor notification step, which the DoD GTCC Regulations paragraph 041106 quote supports. Only the unsupported "in writing" wording dropped.

## Not changed by this pass

- 12 added lines keep banned words carried from the original sentence. The pass fixed facts, not house style.
- 221 no-archive-source claims stay as listed in wave-3-no-archive-source.md.
