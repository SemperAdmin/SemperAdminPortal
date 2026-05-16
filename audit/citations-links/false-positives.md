# Citations-links false positives - 2026-05-15

CL-0019 through CL-0036 (18 findings) flagged links in `content/marines/semper-admin-ai-field-manual.mdx` as broken. Verified all 11 unique targets resolve to live Next.js routes under `src/app/marines/<slug>/page.tsx`.

The CL dimension scanner cross-referenced only `src/generated/marines.json` (the leaf-content catalog). It missed the parent-group landing routes registered in `src/lib/marines-categories.ts` under `MARINES_PARENT_GROUPS` and the hardcoded directories under `src/app/marines/`. All 11 targets resolve.

## Verified working URLs

- `/marines/separations-and-retirement` -> src/app/marines/separations-and-retirement/page.tsx
- `/marines/awards` -> src/app/marines/awards/page.tsx
- `/marines/performance-evaluation` -> src/app/marines/performance-evaluation/page.tsx
- `/marines/legal-services` -> src/app/marines/legal-services/page.tsx
- `/marines/pay-and-entitlements` -> src/app/marines/pay-and-entitlements/page.tsx
- `/marines/dts` -> src/app/marines/dts/page.tsx
- `/marines/gtcc` -> src/app/marines/gtcc/page.tsx
- `/marines/life-events` -> src/app/marines/life-events/page.tsx
- `/marines/reenlistments-and-extensions` -> src/app/marines/reenlistments-and-extensions/page.tsx
- `/marines/education` -> src/app/marines/education/page.tsx
- `/marines/marine-and-family-programs` -> src/app/marines/marine-and-family-programs/page.tsx

## Cleared finding ids

CL-0019, CL-0020, CL-0021, CL-0022, CL-0023, CL-0024, CL-0025, CL-0026, CL-0027, CL-0028, CL-0029, CL-0030, CL-0031, CL-0032, CL-0033, CL-0034, CL-0035, CL-0036.

## Audit-tool follow-up

Future CL audit runs need a parent-group route check. Add `MARINES_PARENT_GROUPS` slugs and the static-route directory list to the resolver, then rerun.
