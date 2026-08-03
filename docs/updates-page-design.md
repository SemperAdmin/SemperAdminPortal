# Design: What Changed, a 90-Day Updates Surface

Status: decided and built. Written 2026-08-03, decisions folded in the same day.

Decisions as built.

1. Mobile bottom tab. Updates took the fifth slot. Recently-viewed moved to the topbar reference menu under the name History.
2. Verification sweeps. Collapsed count row under the timeline, with a disclosure.
3. Window. Fixed at 90 days, no window control and no archive view. Entries older than the window stay in the repo and stop rendering. The rule is recorded in CLAUDE.md Section 4.6 as the standing authoring discipline.
4. Authoring trigger. Confirmed. Every policy-change and correction gets an entry. New-content only for new pages, not deepened ones.
5. Display title. What Changed, Updated, or Added. Route stays `/updates`, nav label reads What changed.

Sections 5, 6, and 9 below describe the pre-decision proposal. Where they differ from the list above, the list wins.

## 1. The finding that shapes everything

Neither signal the portal holds today supports a truthful 90-day changelog.

`lastVerified` is a verification date, not a change date. CLAUDE.md Section 4.3 defines it as the date someone checked the source. A page gets verified without changing, and changes without being re-verified. The values also cluster in bulk import batches, 153 pages share 2026-05-11, 131 share 2026-05-04, 130 share 2026-05-01. Sorting by it produces a list of import runs, not a record of what changed.

Git history is 44 days deep. First commit 2026-06-20. A 90-day window today spans the entire repository life, so 2,124 of the 2,125 content files touched in that window read as newly added. A git-derived feed would say everything is new, which tells a reader nothing.

The volume also matters. 2,125 content files changed in 90 days, 754 of them citations. A file-level feed would bury the two things a Marine needed to know this quarter, that Special Leave Accrual suspended three qualifying categories and that the Prohibited Activities and Conduct program became Military Equal Opportunity, under 750 entries reading "citation body authored."

The conclusion. Build a curated changelog, authored as changes happen, rather than a derived one. Six meaningful entries beat 2,125 accurate but useless ones.

## 2. What the page is for

One audience, one question. A Marine, leader, commander, or S-1 returning after a few weeks asks: did anything I rely on change, and do I need to act.

The page answers that and nothing else. It is not a maintenance log. Copy edits, body rewrites, and structural passes do not appear as entries. Verification sweeps roll up to a single line with a count.

A second audience, the owner reviewing what shipped, is served by git and the audit reports. Do not merge the two.

## 3. Change taxonomy

Four kinds. The kind drives the pill and the default filter state.

| Kind | Meaning | Default shown |
|---|---|---|
| `policy-change` | The underlying authority changed. New MARADMIN, suspension, revision, cancellation. | Yes |
| `new-content` | The portal now covers something it did not cover before. | Yes |
| `correction` | A published fact was wrong and is now right. | Yes |
| `verification-sweep` | Sources re-checked, content unchanged. Rolls up with a count. | Collapsed |

Three impact levels, independent of kind. Impact drives urgency, kind drives category.

| Impact | Meaning |
|---|---|
| `action-required` | A reader changes behavior. Stop submitting a request, resubmit under a different paragraph, update a local directive. |
| `awareness` | Terminology or authority moved. Nothing to do today. |
| `reference` | Coverage added or deepened. Read when the topic comes up. |

The SLA suspension is `policy-change` plus `action-required`. The MEO rename is `policy-change` plus `awareness`. The humanitarian transfer page is `new-content` plus `reference`.

## 4. Data model

A new content collection at `content/updates/<slug>.mdx`, validated by an `updateSchema` in `src/lib/content/schemas.ts`.

```
---
slug: "sla-qualifying-categories-suspended"
date: "2026-07-30"              # when the portal reflected the change
effectiveDate: "2026-07-28"     # optional, when the policy itself took effect
kind: "policy-change"
impact: "action-required"
title: "Three Special Leave Accrual categories suspended"
summary: "Deployable ship, other duty, and contingency operations no longer
  approve pending SECNAV designations. The hostile fire and imminent danger
  path stays open."
roles: ["marine", "leader", "commander", "admin"]
citations: ["maradmin-341-26", "maradmin-188-25"]
affectedPages:
  - "/marines/special-leave-accrual"
  - "/marines/leave-problems-and-fixes"
  - "/marines/annual-leave"
supersededBy: null              # slug of a later update that reverses this
---

Body. What changed, who it affects, what to do about it. Under 200 words.
```

Design notes on the fields.

- `citations` resolves through `src/lib/references/resolve.ts` against the existing registry, so every update carries a working authority chip at no extra cost. This is the single biggest reuse win in the design.
- `date` and `effectiveDate` are deliberately separate. A message signed 2026-07-28 that the portal reflects on 2026-07-30 shows both, and the gap is honest.
- `affectedPages` renders as links and doubles as a build-time check, a route that stops existing fails the sync.
- `supersededBy` handles the reversal case. When SECNAV publishes the designations and the suspension lifts, the new entry points back and the old one renders struck through rather than disappearing. A changelog that quietly deletes history is not a changelog.

Sync emits `src/generated/updates.json` sorted by date descending.

## 5. Route and navigation

Route `/updates`. A reference surface, top level, outside the role routes, consistent with `/tools`, `/links`, `/citations` under CLAUDE.md Section 2.2. Entries carry `roles` arrays for filtering, matching how the other reference surfaces behave.

Three navigation touchpoints.

1. Topbar. Add Updates beside the existing reference surfaces.
2. Home. Replace the current six-item Latest Updated strip. That strip sorts by `lastVerified`, so it presents import batches as news. Swap it for the top three curated updates plus a link through.
3. Role pages. Optional later phase, a count chip reading "2 updates affect commanders" linking to `/updates?role=commander`.

A naming collision needs settling. `/recent` today means recently viewed, per device, from localStorage. `/updates` means recently changed, global. Two surfaces called Recent and Updates will read as the same thing to a user. Recommendation, relabel `/recent` to History and keep its route, then Updates is unambiguous.

The mobile bottom bar holds five tabs and is full. Options in Section 9.

## 6. Page layout

Follows the locked conventions in CLAUDE.md Section 3. No new patterns.

**Page header.** The standard four-line structure. Tag row carries a reference-surface pill, a count pill, and the active window. Display h1 reads What Changed. Summary states the window and the rule, curated policy changes only. Meta row carries the window control and the build date in mono.

**Stat tiles.** Three tiles using the premium polish pattern from Section 3.5 item 4, 32px brass icon top left, 44px Bebas numeral, eyebrow label, meta line, hover lift. Policy changes, New coverage, Corrections. Numbers reflect the active window and filters.

**Filter bar.** The existing FilterBar primitive. Role chips for the four roles, kind chips, and a window control offering 30, 90, 180, and All. State lives in URL params so a filtered view is shareable, `/updates?window=90&role=marine&kind=policy-change`.

**Timeline.** Reverse chronological, month dividers as h2 so the conditional right TOC has anchors on dense windows. Each entry is a dense content card, 20px padding per Section 3.4.

Card anatomy, top to bottom.

- Pill row. Kind pill, impact pill, role chips. Impact carries the status colors already tokenized, `action-required` reads scarlet, `awareness` brass, `reference` muted.
- Title, Inter 17/600, links to the primary affected page.
- Summary, one or two sentences.
- Meta line in mono. Portal date, and effective date when it differs.
- Citation chips, resolving through the registry.
- Affected pages, a short link list, collapsed past three.

**Superseded entries** render at 60 percent opacity with a Superseded pill linking forward.

**Verification sweeps** collapse to a single divider row reading "41 pages re-verified against source" with a disclosure.

**Empty state.** The existing EmptyState primitive, pointing at the next wider window rather than dead-ending.

Motion stays inside Section 3.6. 120ms hover lift on cards, no scroll-driven reveals, `prefers-reduced-motion` inherited.

## 7. Seeding

The design is testable immediately because the last few weeks produced real entries. Seed with six.

| Date | Kind | Impact | Entry |
|---|---|---|---|
| 2026-07-30 | policy-change | action-required | Three SLA categories suspended, MARADMIN 341/26 |
| 2026-07-31 | policy-change | awareness | Prohibited Activities and Conduct becomes Military Equal Opportunity, MARADMIN 349/26 |
| 2026-07-27 | policy-change | awareness | FY26 Judge Advocate Continuation Pay window extended to 30 September, MARADMIN 323/26 |
| 2026-08-02 | new-content | reference | Humanitarian transfer and PTAD coverage added, MCO 1000.6 |
| 2026-08-02 | new-content | reference | Field Flight Performance Boards coverage added, MCO 1000.6 |
| 2026-08-02 | correction | awareness | PCS travel day computation corrected, the 51-mile remainder threshold |

Six entries against 2,125 file changes in the same window. That ratio is the argument for the design.

## 8. Build plan

Phase 1, the surface.
- `updateSchema` in `src/lib/content/schemas.ts`
- Collection handling in `scripts/sync-content.mjs`, emitting `src/generated/updates.json`, with route validation on `affectedPages` and citation-id validation against the registry
- Route at `src/app/updates/`, server page plus a client component for filters
- Seed the six entries
- Add `/updates` to CLAUDE.md Section 2.2 and the collection list in Section 4.2

Phase 2, the wiring.
- Swap the home Latest Updated strip
- Topbar entry
- Relabel `/recent` to History

Phase 3, optional depth.
- Role-page update counts
- A JSON feed at `/updates/feed.json` for anyone wanting notifications
- A git-derived Also Changed tail, capped and collapsed, for transparency

Phase 1 is the whole value. Phases 2 and 3 are polish.

## 9. Decisions needed

1. **Mobile bottom tab.** Five tabs are full. Swap Recent for Updates, keep Recent and reach Updates from the topbar and home only, or fold recently-viewed into the Browse drawer to free a slot. Recommendation, the third, recently-viewed is a convenience and Updates is the higher-value surface.
2. **Verification sweeps.** Show as collapsed count rows, or omit entirely. Recommendation, collapsed count, it demonstrates the verification posture the footer already advertises.
3. **Window default and archive.** 90 days is the request and matches the quarterly rhythm. Confirm whether All means everything or caps at a year.
4. **Authoring trigger.** An update entry per policy message is natural and the burden is small. Confirm the rule, every `policy-change` and `correction` gets an entry, `new-content` only for new pages rather than deepened ones.
5. **Naming.** What Changed, Updates, or What's New as the display title. The route stays `/updates` either way.

## 10. What this design deliberately does not do

- No derived changelog from `lastVerified`. The field means verification, and overloading it corrupts the staleness system that depends on it.
- No per-file feed. The volume argument in Section 1 settles it.
- No new UI primitives. Every element reuses PageHeader, Pill, StatTile, FilterBar, Callout, Citation, and EmptyState.
- No notification system. A feed endpoint in Phase 3 leaves the door open without building one.
