# Wave 1 fix residuals

Items left open after the Task 6 fix pass on 2026-11-15. Each needs a decision or a later step.

## Held for PR 152

PR 152 owns these two pages and is still open. Five confirmed findings wait until it merges, so the fix does not conflict.

- content/marines/military-parental-leave-program.mdx, 3 findings, including the Multiple Qualifying Events carryover (DoDI 1327.06 CH1 3.11.c.(6)(a)).
- content/marines/convalescent-leave.mdx, 2 findings.

The finding text sits in the held-pr152.json next to this file.

## Source conflict, needs Stephen

- Separation pay character of service. MCO 1900.16 para 1307 allows full separation pay for honorable or general. DoD FMR Vol 7A Ch 35 para 3.1.1.2 reads honorable only. content/marines/separation-payments.mdx now cites MCO 1900.16 and notes the FMR reading. content/admin/pac-separation-pay.mdx and content/marines/separation-pay-and-final-pay.mdx still say honorable only. content/updates/separation-pay-eligibility-corrected.mdx names the conflict and points readers to MPO. Pick the governing source, then align all three pages.

## Rests on a secondary source

- content/citations/usc-10-7837.mdx is new. It carries the aliases for the remission statute. content/admin/s1g1-waivers-remissions-indebtedness-overview.mdx moved its lastVerified to 2026-11-15 on DoD FMR Vol 16 Ch 4 para 9.1, not the statute text. Verify the statute or roll the date back.
- content/admin/s1g1-dts-appointments-and-dd577.mdx lost its signer and format claims. The cited order paragraph 4.c does not exist in the cached text, and no replacement signer is stated.
- content/marines/pcs-orders-and-overview.mdx now points to the leave order and PCS orders in place of an unsourced figure. The leave order text was not checked for this line.

## Recheck disagreed, left as written

- content/leader/bridging-processing-timelines.mdx keeps 10 working days. It is PAC processing turnaround, not the Marine submission deadline.
- content/commander/personnel-reductions-in-grade.mdx keeps the one-grade limit. MCM 2024 Part V para 5b(2)(B)(iv) matches the page, so the finding was wrong.

## Citation bodies still describe cancelled guidance

- content/citations/maradmin-380-26.mdx, mco-5354-1.mdx, alnav-048-26.mdx and navmc-11512.mdx describe MARADMIN 380/26 as live. CANX-014/26 cancelled it. Citation bodies belong to the wave 3 citation check.

## Not changed by this pass

- 29 edited lines keep banned words from the original sentence. The pass fixed facts, not house style.
- 353 no-archive-source claims stay as listed in wave-1-no-archive-source.md.
