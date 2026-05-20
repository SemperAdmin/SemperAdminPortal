# Inspector Guides - Implementation Plan

Per-item inspector guide enrichment for every IGMC FAC detail page. Baseline scope: MCO 3040 Casualty Affairs.

---

## What we are landing

Each FAC item on `/inspections/igmc/<faNumber>/<slug>` gains an inline expandable Inspector Guide. The guide pulls four data dimensions per item:

- **Regulatory requirement** - verbatim source-policy text plus a plain-language summary.
- **How to inspect** - numbered procedure with DISCREPANCY and FINDING callouts.
- **Inspector questions to ask** - 4 quoted prompts.
- **Verification checklist** - 5-6 boxes for evidence presence.

Out of scope this pass:
- Authoring guides for FAs other than 3040.
- Print-only or binder-export surfaces.
- Reverse-lookups from guide content back into citations.

## Source posture

You authored the 3040 guide doc with LLM assistance. Same verification class as the oversight matrix: useful, not yet ground-truthed paragraph-by-paragraph against the source MCOs. The Regulatory Requirement section quotes verbatim policy text inside quotation marks; that quoted text is what the verification pass needs to confirm. Inspector Notes and the Verification Checklist are LLM-synthesized procedure summaries.

Decision needed: do guide sections render with a verification banner ("LLM-assisted, pending source-text walk") until you confirm, or do they render flat? Recommend banner-on-by-default with a per-question `verified: true` flag in the JSON that hides the banner once you sign off.

## Data architecture

Three options. Locking option A as the default unless you override.

### Option A - Sidecar JSON per FA (recommended)

Path: `content/inspections/igmc-guides/<faNumber>.json`. Keyed by item code. Sync joins at build time.

```json
{
  "faNumber": "3040",
  "sourceDoc": "CASUALTY ASSISTANCE (3040) - INSPECTOR GUIDE - REBUILT.docx",
  "lastVerified": "2026-05-20",
  "verifiedAtSource": false,
  "items": {
    "0101": {
      "title": "CACR APPOINTED IN WRITING",
      "regulatory": {
        "quotes": [
          { "citation": "MCO 3040.4, Chap 1, Par 2g", "text": "Casualty Assistance Command Representative (CACR). SNCO or above..." }
        ],
        "summary": "Every unit down to the Battalion, Squadron, and I&I level..."
      },
      "howToInspect": [
        { "step": "Request the Written Appointment", "actions": ["Ask the command to produce the written CACR appointment letter, order, or memorandum"], "callout": "Verbal designation only: FINDING" }
      ],
      "questionsToAsk": [
        "Show me your written CACR appointment document?",
        "Who is your current CACR and when were they appointed?"
      ],
      "verification": [
        "Written appointment document for CACR is on file at the unit.",
        "Appointed CACR holds the grade of SNCO (E-6 or above) or Officer."
      ],
      "verified": false
    }
  }
}
```

Pros:
- Inspection JSON stays focused on the FAC itself.
- Guide-only edits do not touch the FAC.
- Easy to author and parse one guide doc at a time.
- Per-question verification flag without polluting FAC schema.

Cons:
- Two files per FA to keep in sync.
- The build-time join is an extra step in `scripts/sync-content.mjs`.

### Option B - Embedded on the inspection item

Extend `inspectionItemSchema` with optional `inspectorGuide` object. Single file per FA. Simpler load.

Pros:
- One file, one read.
- Tight schema coupling.

Cons:
- FAC and guide concerns mix in one file. Authoring guide updates means re-touching the FAC JSON.
- Bigger JSON file per FA. The 3040 catalog JSON would roughly triple in size.
- Schema bloats. `inspectionItemSchema` becomes the kitchen-sink type for two different concerns.

### Option C - Separate MDX collection

`content/inspector-guides/igmc-<faNumber>-<questionCode>.mdx` per question. Hundreds of files.

Pros:
- Maximum authoring control.
- Cross-collection link from the FAC item directly to a citation-style URL.

Cons:
- ~25 files per FA times 80 FAs is 2000+ MDX files. Not maintainable by hand. Defeats the parser-pipeline goal.

**Recommendation: Option A.** Confirm before any code lands.

## Schema extension

New zod schema in `src/lib/content/schemas.ts`:

```ts
export const inspectorGuideQuoteSchema = z.object({
  citation: z.string().min(1),
  text: z.string().min(1),
});

export const inspectorGuideStepSchema = z.object({
  step: z.string().min(1),
  actions: z.array(z.string()).default([]),
  callout: z.string().optional(),
});

export const inspectorGuideItemSchema = z.object({
  title: z.string().min(1),
  regulatory: z.object({
    quotes: z.array(inspectorGuideQuoteSchema).default([]),
    summary: z.string().default(""),
  }),
  howToInspect: z.array(inspectorGuideStepSchema).default([]),
  questionsToAsk: z.array(z.string()).default([]),
  verification: z.array(z.string()).default([]),
  verified: z.boolean().default(false),
});

export const inspectorGuideSchema = z.object({
  faNumber: z.string().min(1),
  sourceDoc: z.string().optional(),
  lastVerified: z.string(),
  verifiedAtSource: z.boolean().default(false),
  items: z.record(z.string(), inspectorGuideItemSchema),
});

export type InspectorGuideItem = z.infer<typeof inspectorGuideItemSchema>;
export type InspectorGuide = z.infer<typeof inspectorGuideSchema>;
```

No changes to `inspectionItemSchema`. The join happens at sync time, not at the schema layer.

## Sync-script extension

`scripts/sync-content.mjs` gets a new block:

1. Walk every `content/inspections/igmc-guides/*.json`.
2. Validate each against `inspectorGuideSchema`.
3. Build an index keyed by faNumber.
4. Emit `src/generated/inspector-guides.json` shaped as `Record<faNumber, InspectorGuide>`.

The inspection detail page imports this JSON and looks up the guide by program number at render time. No mutation of `src/generated/inspections.json`.

## Parser

`scripts/parse-inspector-guide.py`. Reads the docx via `python-docx`. Walks paragraphs against the doc structure:

- Header lines: title, MCO source, author, question count, source references list.
- For each `QUESTION NNNN -` heading, open a new item with code `NNNN`.
- Slice content into the five named sections (CHECKLIST QUESTION, REFERENCES, REGULATORY REQUIREMENT, INSPECTOR NOTES, INSPECTOR QUESTIONS TO ASK, VERIFICATION CHECKLIST).
- Regulatory: pull quoted text with its citation, then the trailing plain-language summary paragraph.
- Inspector Notes: numbered list items with optional callouts (lines containing `DISCREPANCY` or `FINDING`).
- Questions to ask: split on `"` quoted lines.
- Verification: bullet items with the leading `☐` stripped.

CLI:
```
python3 scripts/parse-inspector-guide.py <path-to-docx> <output-json>
```

Output validates against `inspectorGuideSchema`.

## UI render

Inline expandable per item, anchored to the existing item card in `/inspections/igmc/[programNumber]/[slug]/page.tsx`.

Render shape per item, when a guide entry exists for that item code:

```
[Existing item header: code, question, references]

> Show inspector guide (chevron disclosure)

  Regulatory requirement
    [verbatim quote 1, cited]
    [verbatim quote 2, cited]
    Summary: [plain-language paragraph]

  How to inspect
    1. [step title]
       - action
       - action
       Callout: [DISCREPANCY / FINDING text, color-coded]
    2. [step title]
       ...

  Inspector questions to ask
    - "..."
    - "..."

  Verification checklist
    [ ] line 1
    [ ] line 2
    ...

  Verification posture
    [banner: "LLM-assisted, pending source-text walk"] (when item.verified = false)
```

Component: `src/components/domain/inspector-guide-disclosure.tsx`. Takes `(item, guide)` and renders the disclosure when guide is present. Returns null when absent. No layout change to items without guides.

Tokens used: existing Pill variants for the FINDING and DISCREPANCY callouts (danger and warning respectively). Token reuse only, no new tokens.

## CLAUDE.md update

Section 4.2 gains a new line documenting the inspector-guide collection. Section 4.3 may need an entry on verification posture for LLM-assisted content (the `verified` flag and the banner).

## Phased plan

Phase 1 - schema and parser.
- Land `inspectorGuideSchema` in schemas.ts.
- Build `scripts/parse-inspector-guide.py`.
- Parse the 3040 doc into `content/inspections/igmc-guides/3040.json`.
- Update content-sync to emit `src/generated/inspector-guides.json`.
- Confirm zod validation passes on 3040.

Phase 2 - UI render.
- Author `InspectorGuideDisclosure` component.
- Wire into the IGMC detail page item loop.
- Confirm visual parity on items without guides (no layout shift).
- Confirm full render on 3040 with the disclosure open.

Phase 3 - verification posture.
- Surface the LLM-assisted banner on every unverified item.
- Add a CLAUDE.md note documenting the `verified` flag.
- Walk through 3040 with the source MCO open. Mark items verified one by one. Banner disappears as each item flips.

Phase 4 - rollout.
- Author or parse guides for the remaining 13 current IGMC FAs as the source docs arrive.
- One guide per pull request when possible.

## Verification criteria for Phase 1

- `npm run content:sync` emits the new generated file with 25 items for 3040.
- `npm run lint` clean.
- `npx tsc --noEmit` clean.
- `npm run build` static export passes.
- Manual: open `/inspections/igmc/3040/casualty-affairs`, click into item 0101, see the disclosure render with the four sections.

## Hand-off

Before code lands in Phase 1:
- Confirm the data-shape default (Option A sidecar JSON).
- Confirm the verification banner default (on for unverified items, off when `verified: true`).
- Confirm sidebar / nav unchanged. The guide lives inside the existing detail page; no new route.

After each phase, report lint output, tsc output, content-sync output, and one screenshot of the rendered item with the disclosure open.
