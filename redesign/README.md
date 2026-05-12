# Semper Admin Portal - Redesign Deliverable

UI/UX redesign spec for the Semper Admin Portal. Awaiting approval before code changes.

## Files

| File | Purpose |
|---|---|
| `Semper-Admin-Portal-Redesign-Spec.md` | The spec document. Open in any Markdown viewer or paste into Word for instant formatting. Imports cleanly into Microsoft Word via Insert > Object > Text from File. |
| `mockups/redesign-preview.html` | Live interactive preview. Open in any browser. Tabs switch between Design System, Shell + Home, Role Landing, Content Page, Tools, Mobile, and Before/After. Toggle dark mode with the DARK button in the top bar. |
| `build-redesign-doc.js` | Optional Node script to generate a .docx version of the cover and TOC. Run from project root: `npm install -g docx && node redesign/build-redesign-doc.js`. The Markdown spec is the canonical source. |

## How to review

1. **Start with the live preview.** Open `mockups/redesign-preview.html` in your browser. Click through every tab, light and dark.
2. **Read the spec.** Open `Semper-Admin-Portal-Redesign-Spec.md`. Sections 4 and 5 hold the design direction. Section 9 holds the roadmap.
3. **Flag issues.** Drop comments directly in the conversation. Section 12 lists the four decision points needed to unblock Phase 1.

## Approval gates

Before any code lands you confirm:

- Token palette (section 5.1).
- Type direction (Bebas Neue restricted to display surfaces).
- Density (14px body / 13px UI / 16px card padding).
- Pill replaces Badge.

## What ships next

Phase 1 PR after approval: tokens, fonts, Card, Button, Pill, StatusPill, Skeleton, plus a refreshed `/styleguide` route that previews the new system live in the app.

---

Build date: 2026-05-04
