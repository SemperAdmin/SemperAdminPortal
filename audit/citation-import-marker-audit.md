# Citation import-marker audit - 2026-05-15

175 of 308 published citation pages (57 percent) still carry the `Imported by scripts/citations-import.py` marker in their body. These entries function (frontmatter is valid, externalUrl resolves, citation chips render), but the page body is a one-line scaffold and never received hand-authored Scope, Audience, Enclosure, or Connection content.

## Counts

- 308 total published citation files (excluding `content/citations/_stubs/` and dot-files).
- 175 carry the import marker (57 percent of the registry).
- 133 are hand-authored or have been cleaned up.

## Status of marker entries

| Bucket | Count |
|---|---|
| Has externalUrl, has inbound references | 172 |
| Has externalUrl, zero inbound references | 3 |
| No externalUrl, has inbound references | 0 |
| No externalUrl, zero inbound references | 0 |

Every marker entry has an externalUrl. The 3 orphans (URL present, zero referrers) are candidates for removal or repurposing.

## Distribution by citation type

- MARADMIN: 78
- MCO: 75
- DD-FORM: 10
- NAVMC: 6
- DODFMR: 3
- MCBUL: 2
- SECNAVINST: 1

The MARADMIN and MCO clusters dominate. MARADMINs are typically short-lived directives where the wiki body adds less value (users click through to the source). MCOs warrant more curated bodies, since users land on the citation page expecting scope and connection info.

## Top 25 marker entries by inbound reference count

These pages are scaffolded but heavily cited. Fleshing the body on these gives the biggest user-facing return.

| Refs | ID | Title |
|---|---|---|
| 33 | mco-5210-11f | MCO 5210.11F - Marine Corps Records Management Program |
| 17 | mco-5215-1k | MCO 5215.1K - Marine Corps Directives Management Program |
| 15 | mco-1320-11h | MCO 1320.11H - Marine Corps Sponsorship Program (MCSP) |
| 13 | maradmin-633-24 | Update to Notification Requirements for Covered Offenses |
| 12 | mco-1500-60a | MCO 1500.60A - Force Preservation Council (FPC) |
| 12 | mco-5100-29c | MCO 5100.29C - Marine Corps Safety Management System (MCSMS) |
| 11 | mco-1752-5c | MCO 1752.5C - Sexual Assault Prevention and Response (SAPR) |
| 10 | maradmin-665-17 | Additional Marine Corps Guidance on New Devices Authorized for the Female Service Uniform |
| 9 | mcbul-5210 | MCBUL 5210 |
| 7 | maradmin-398-10 | Awards Update |
| 7 | maradmin-634-23 | Change to Annual Fitness Report Schedule for Active Component |
| 6 | maradmin-308-23 | Revision of MCO 1610.7 Performance Evaluation System |
| 6 | maradmin-359-25 | Updated Guidance for Processing Unsubmitted Defense Travel |
| 6 | maradmin-527-25 | Change 1: Fiscal Year 2026 Enlisted Retention Campaign |
| 6 | maradmin-661-19 | Manpower Audit Advisory 1-19 |
| 6 | mco-1700-31 | MCO 1700.31 - Transition Readiness Program (TRP) |
| 6 | mco-1740-13 | MCO 1740.13 - Family Care Plans |
| 6 | mco-4400-201 | MCO 4400.201 - Management of Property |
| 6 | mco-5300-17 | MCO 5300.17 - Marine Corps Substance Abuse Program |
| 6 | mco-6110-3a | MCO 6110.3A - Marine Corps Body Composition and Military Appearance |
| 5 | maradmin-066-26 | Change 1 to Advance Notification of Changes |
| 5 | maradmin-412-20 | Implementation of Observed Academic Fitness Reports at Officer Schools |
| 5 | maradmin-468-23 | Command Climate Assessment Policy Updates |
| 5 | maradmin-573-24 | Taking Care of People (TCOP) Program Initiatives |
| 5 | maradmin-575-24 | Amendment 2 to the Performance Evaluation System |

## Marker body shape

Every marker entry uses the same body template:

```
## Stub

Imported by scripts/citations-import.py. Cited by N pages in the portal. Review the metadata, expand aliases, and set the roles before merging this entry into content/citations/.
```

This body lands on `/citations/<id>` whenever a user clicks a chip without an external URL or follows the citation index. The stub is jarring on heavily-referenced pages (33 references and the user sees a one-liner).

## Recommendations

1. **High-value MCO sweep first**. The top 10 MCO marker entries account for 119 inbound references. Authoring real Scope, Audience, Enclosure-map, and Connection sections on those 10 pages would lift the perceived quality of the citation index more than any other single move.

2. **MARADMIN strategy**. For MARADMINs, consider a shorter standard body: one-paragraph Scope, the effective-action language, and a link to the supersession chain. Many MARADMINs are point-in-time directives where a long body adds little.

3. **Orphan cleanup**. Investigate the 3 marker entries with zero referrers. Either delete or find them a place in the content.

4. **Marker-detection callout**. Consider adding a small Callout to the citation detail page. The Callout shows a warning banner when the body still contains the import marker. Reader-side visibility helps prioritize SME review.

## Full list

The complete per-entry breakdown lives at `/tmp/citation-import-marker-audit.json` for this session. Move it to the audit directory if you want to persist it.

## Sources

- [content/citations/](computer://D:\Coding\SemperAdminPortal\content\citations)
- [audit/REPORT.md](computer://D:\Coding\SemperAdminPortal\audit\REPORT.md)
- [audit/FIX_REPORT.md](computer://D:\Coding\SemperAdminPortal\audit\FIX_REPORT.md)
