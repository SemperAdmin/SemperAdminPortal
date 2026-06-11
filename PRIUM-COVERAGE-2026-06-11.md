# MCTFSPRIUM Coverage Match - 2026-06-11

Scope: every PRIUM reference the app carries today, matched against the paragraph files in E:\GunnyBot\Policies\PRIUM. Referenced-only per the standing rule. No bulk import.

## Summary

The app cites the MCTFSPRIUM in 133 distinct reference strings, resolving to 75 distinct paragraphs plus a set of chapter-level references. The PRIUM folder covers 63 of the 75 paragraphs. Twelve referenced paragraphs have no file, and they cluster in chapters your conversion barely touched: chapter 12 has zero files, chapter 11 has one, chapter 10 has two, chapter 13 has one. Every missing paragraph is cited by MCAAT checklist items.

The registry side is healthy. The mctfsprium citation record resolves all 133 variants through the resolver's first-token candidate, so every chip already links to the parent document. The gap is paragraph-level content, not registry wiring.

## Missing paragraphs, by citation weight

| Paragraph | App citations | Cited by |
|---|---|---|
| 120103 | 33 | MCAAT Audit, Deployments, Inbound Gains, Outbound, Reserve Pay |
| 90301 | 7 | MCAAT Deployments, MilPay |
| 91001 | 5 | MCAAT DTS, Deployments, Reserve Pay |
| 120101 | 5 | MCAAT Outbound Management, plus one admin PAA page |
| 120303 | 4 | MCAAT Systems Management |
| 90702 | 3 | MCAAT Deployments |
| 110502 | 3 | MCAAT Deployments |
| 30303 | 3 | MCAAT MilPay |
| 110301 | 3 | MCAAT Reserve Pay |
| 90501 | 3 | MCAAT Special and Hazardous Duty Pay |
| 120104 | 2 | MCAAT Inbound Gains |
| 91700 | 2 | MCAAT Special and Hazardous Duty Pay |

Paragraph 120103 is the single most-cited PRIUM paragraph in the entire app and has no source file. Chapter 12 as a whole carries 44 citation hits with zero files.

## Chapter-level references with no file equivalent

- Chapter 13, Appendix C: 14 citations. Chapter 13 holds one file.
- Chapter 9 tables (9-1 through 9-9): 23 citations. No table files exist. The tables sit inside the source PDF chapters, the paragraph conversion did not carry them.
- Chapters 6, 12, 17, 18, 27 tables: 1 to 2 citations each.

## Folder inventory

724 paragraph files. Per leading chapter digit: ch0 91, ch1 58, ch2 53, ch3 23, ch4 71, ch5 125, ch6 113, ch7 74, ch8 65, ch9 45, ch10 2, ch11 1, ch13 1, ch12 0.

Data-quality notes from the scan:

- Two files share paragraph id 20103 (AUDIT_OCCASIONS_AND_REQUIREMENTS and UNIT_DIARY_TIMELINESS). The app cites 20103 fifty-seven times, the highest covered paragraph. Decide which file is canonical or merge them.
- 91701 carries a garbage title (Arial_Verdana_Font-size_10pt), a conversion artifact. Its content needs review.
- Two stray conversion manifests sit in the folder (prium_paragraphs_2026-06-01 json files, 6 paragraphs logged). They cover nothing useful, safe to delete.
- Chapter 3 is a point gap: 30301, 30302, 30304, 30305 exist while the cited 30303 is absent. Same pattern at 90300 present, 90301 absent. These look like single-paragraph conversion misses, not unconverted chapters.

## What to pull next

Converting these closes every paragraph-level gap the app references, 73 citation hits total:

1. Chapter 12 paragraphs 120101, 120103, 120104, 120303, and the chapter 12 tables.
2. Chapter 9 paragraphs 90301, 90501, 90702, 91001, 91700, and tables 9-1 through 9-9.
3. Chapter 11 paragraphs 110301 and 110502.
4. Chapter 3 paragraph 30303.
5. Chapter 13 Appendix C.

Everything else the app references is already on disk. The remaining 110 document-level references need nothing beyond the existing mctfsprium registry record.

End of report.
