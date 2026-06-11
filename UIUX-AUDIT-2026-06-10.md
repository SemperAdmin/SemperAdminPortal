# Semper Admin Portal - Full UI/UX Audit

Date: 2026-06-10. Scope: full codebase review plus live-site verification at https://semperadmin.github.io/SemperAdminPortal/. Every finding below carries a file reference. Findings marked VERIFIED were confirmed by direct inspection, not agent report alone.

## Verdict

The chrome is polished. The wayfinding under it is hollow. Three of your four role sidebars are empty, no role switcher exists after first visit, and Leader content is invisible to search. A first-time Marine picks a role, opens the sidebar, and finds zero content links across 217 pages. The visual layer earns its UUPM benchmark. The navigation layer fails the core promise of a role-separated reference.

## Critical - broken promises visible to users today

### C1. Marine, Leader, and Admin sidebar trees are empty. VERIFIED.

src/lib/role-trees.ts lines 67-88 and 209-217. MARINE_TREE, LEADER_TREE, and ADMIN_TREE each contain one Home link plus the shared REFERENCE_SECTION. The Commander tree is the only one built out. 690 of 736 pages have no sidebar presence. The Phase 4 comment at line 10 promises a generator reading src/generated catalogs. The content shipped, the generator never did. This is your single highest-impact gap and it is already item 3 in your Phase 6 carry-over list. Promote it to item 1.

### C2. No role-switching surface exists after first pick. VERIFIED via shell review.

The RolePickerDialog blocks escape and outside-click, fires once, and never re-triggers. The TopNav JSDoc at src/components/shell/top-nav.tsx line 19 claims a segmented role switcher. None exists in the JSX. The sidebar shows a read-only Viewing-as label. The command palette description mentions changing roles but lists no role items. clearRole exists in the store with zero call sites. Your own CLAUDE.md section 2.2 mandates a topbar segmented control as the single switching surface. Build it. Until then a Marine promoted to NCO has no path to the leader view short of typing a URL.

### C3. Leader content is missing from the search index. VERIFIED.

src/components/domain/client-search.tsx lines 6-10 import admin.json, marines.json, commander.json, policies.json, and situations.json. No leader.json import. All 88 leader pages return zero search results. The role most dependent on findable coaching guides has none.

### C4. Homepage stat strip shows 0 Tools in production. VERIFIED live.

The stat tile reads from tools.json, which holds zero entries. Your four live cloud.gov apps sit in external-tools.json (2.8 KB, populated). The merge happens on /tools but the homepage counter reads only the empty internal registry. A visitor's second impression of the portal is a zero.

### C5. Social preview image URL doubles the basePath. VERIFIED live.

Live og:image and twitter:image resolve to /SemperAdminPortal/SemperAdminPortal/opengraph-image, a 404. Every share to Teams, Slack, or social renders without a preview card. metadataBase in src/app/layout.tsx already includes the basePath, and the generated image route prepends it again. Fix the metadataBase or the image path, not both.

### C6. Two undefined color tokens render transparent surfaces. VERIFIED.

--color-surface-1 is consumed in src/app/videos/page.tsx:48,177, src/app/links/page.tsx:241, and src/app/recent/page.tsx:70. --color-surface-sunken is consumed in videos/page.tsx:55,72. Neither exists in globals.css. Defined tokens are --color-surface, -2, -3, and --color-bg-sunken. Cards and inputs on three pages render with transparent backgrounds in both themes.

## High - architecture and accessibility failures

### H1. Search architecture contradicts the stack and ships dead weight.

The stack declares Pagefind. The live search is a custom in-memory scan over JSON catalogs imported into a client component, roughly 1.3 MB of admin, marines, and commander data in the client bundle. Pagefind output builds to out/pagefind but nothing loads it. Pick one: wire Pagefind and delete the catalog imports, or own the client-scan approach and trim the payload to title, summary, slug, and roles. Shipping full page records to every visitor is the worst of both.

### H2. Search builds URLs for routes with no pages.

client-search.tsx lines 147 and 160 emit /policy/slug and /situations/slug. No src/app/policy or src/app/situations directories exist. Today the catalogs are empty so no user hits the 404. The moment you author the first policy entry, search serves broken links. Remove the dead branches or build the routes before populating the collections.

### H3. RoleRouteSync silently overwrites the chosen role.

src/components/shell/role-route-sync.tsx. A commander who opens a /marines page to see the Marine view gets their persisted role flipped to marine with no confirmation and no undo. Sidebar, Viewing-as, and recents all flip with it. Cross-role reading is a legitimate use case your CrossRoleStrip is designed to serve. Either prompt before switching or treat URL visits as transient view context separate from persisted role.

### H4. Hardcoded hex inside the canonical Pill component and five others. VERIFIED.

src/components/ui/pill.tsx lines 20-28 hardcode #B5C4DC, #8FD4A8, #E68A93, #1F6940, #8A4F12, #8A2424 as dark and light text tints. Pill is the primitive every status surface consumes, so the violation propagates everywhere. The same hex trio is copy-pasted into igmc-grading-rubric.tsx, inspector-guide.tsx, mcaat-hub-resources.tsx, mcaat-section-resources.tsx, and two mcaat pages. Worse: src/components/domain/pdf-letter-builder.tsx line 87 uses #C8102E, a red absent from your brand palette. Generated PDFs carry an off-brand scarlet. Promote these tints to tokens, fix the PDF red to #B82230, and collapse the copy-pasted badge styling into Pill.

### H5. Light-flash on first visit for dark-system users.

globals.css line 181 sets :root color-scheme to light. ThemeProvider defaults to system. A dark-mode OS user's first paint is parchment, then a snap to navy after the next-themes script runs. Your locked convention is dark by default. Set color-scheme to light dark on :root and let the class toggle govern.

### H6. Keyboard accessibility failures in the tree and topbar.

- tree-nav.tsx line 122: branch labels without href render a span with role button and tabIndex -1 and no keydown handler. Keyboard users have no way to activate the label, only the small chevron.
- tree-nav.tsx line 167: LeafLink marks active on prefix match, so parent leaves light up with aria-current on child routes.
- top-nav.tsx lines 70-74: the Help button has an aria-label and no onClick, href, or handler of any kind. A fully inert interactive element. Wire it or remove it.
- breadcrumbs.tsx lines 117-120: when the trail truncates, the current page crumb loses aria-current and renders as a self-link.
- search-box.tsx line 23: onFocus opens the command palette. After dismissal, focus restoration re-opens it, looping keyboard users.
- error.tsx and not-found.tsx render their own main elements without id="main", so the skip link dead-ends on exactly the pages where orientation matters most.

### H7. Sixteen marines parent-group pages bypass PageHeader. VERIFIED via agent route map.

Every static override under src/app/marines/ (awards, dts, pcs, promotions, and twelve more) plus src/app/marines/[topic]/page.tsx, src/app/leader/[topic]/page.tsx line 123, and src/app/about/page.tsx use raw header markup at text-3xl with no eyebrow, no tag row, no meta row. Your CLAUDE.md section 3.8 declares one header pattern users learn once. Mid-tree pages break it on the largest role. These sixteen files also each replicate the same icon map and layout, a maintenance hazard the role-tree generator work should absorb.

## Medium - polish, consistency, and findability

- M1. Six client pages export no metadata: /tools, /videos, /recent, /reports, /links, /inspections/igmc. All title-tag as Semper Admin Portal. Split each into a server wrapper exporting metadata plus a client child, the pattern /search already uses.
- M2. Command palette omits /inspections, /reports, /links, /videos. Ctrl K reaches none of them. navigation.ts also marks About and Videos ready false with phase labels even though both pages shipped, so the palette displays Phase 4 and Phase 7 hints on live surfaces.
- M3. Duplicate h1 on /search: PageHeader renders one and ClientSearch renders a second.
- M4. Light-theme contrast: --color-subtle-foreground resolves to #8A7E63 on #F8F4E8, roughly 3.5 to 1, failing AA at every size. It styles eyebrows and meta text at 10-11px. --color-muted-foreground sits near 4.8 to 1 on cards, failing at the 10px sizes several components use. Darken both light-theme values.
- M5. --color-ring stays at base scarlet in dark mode while the dark primary is scarlet-300. Focus rings sit darker than the action color on navy.
- M6. LastVerified sets aria-live polite on static content, producing screen-reader noise on every page load. Remove the live region.
- M7. Raw unlabeled search inputs on videos/page.tsx:177 and links/page.tsx:241, placeholder-only naming, no label or aria-label, and both bypass the Input primitive.
- M8. FilterBar chips carry aria-pressed but no group role or aria-labelledby tying them to their visible label.
- M9. Redundant URL depth on marine detail pages, live example /marines/creating-dts-authorizations/creating-dts-authorizations/. Topic equals slug, the eyebrow renders title-cased slug text like Creating Dts Authorizations, and the URL reads stuttered. Collapse single-page topics or give topics distinct labels.
- M10. Commander landing renders Oversight Matrix twice, once as a hardcoded quick-access card and again in the dynamic topic list. /commander/relationships/ipac-procedures exists in content but not in the Commander tree.
- M11. Mobile bottom-tab touch targets measure near 40px, under the 44px floor. The Browse tab shows no active state while its drawer is open.
- M12. Long IGMC checklists (Postal at 89 items) render fully expanded with no collapse, progress marker, or section jump. Inspections also have no role or audience filter on detail pages.
- M13. Kbd hint hardcodes Ctrl K for Mac users, search-box.tsx line 28.
- M14. Verify out/404.html carries the GitHub Pages SPA redirect. If it does not, every deep-link refresh under the basePath lands on a raw GitHub 404.
- M15. Three pages (tools, links, reports) duplicate a local classify() for staleness instead of sharing one util with LastVerified. Threshold drift across four call sites is one edit away.
- M16. Dialog, Sheet, Popover, command palette, and the Skeleton shimmer rely solely on the global reduced-motion kill switch. Add motion-safe variants at the component level so intent survives a future globals.css refactor.

## Low - hygiene

- L1. Stale phase comments promise work no longer planned where it sits: role-trees.ts line 10, role-picker-dialog.tsx line 28, search-box.tsx line 11, roles.ts line 3, error.tsx line 20. Each one misleads the next contributor. Delete or update.
- L2. Dead tokens --color-accent-yellow and -300. Duplicate token values: --shadow-card equals --shadow-sm, --shadow-card-strong equals --shadow-md, --radius-card equals --radius-md. Consolidate.
- L3. BUILD_VERSION hardcoded as v1.2.0 in footer.tsx, decoupled from package.json.
- L4. badge.tsx survives only for the styleguide legacy section. Production migration is complete. Delete both.
- L5. Four collections (policies, situations, snippets, references) hold zero entries while schemas, search imports, and the snippets concept all exist. Either seed them or strip the scaffolding until content arrives.
- L6. Role id marine versus route prefix /marines invites an inversion bug in PATH_ROLE_MAP consumers. Document the bridge in roles.ts.
- L7. PageHeader sets font-display by both utility class and inline style. Drop the inline style.
- L8. No aggregate staleness signal at landing or topic level. A user browsing a section gets no warning until the detail page.

## What holds up

The token architecture, dark-default theme, floating topbar, PageHeader pattern on detail pages, skip link, focus-visible ring, global reduced-motion guard, fontsource self-hosting, sitemap and robots generation, zod-validated frontmatter, and the staleness model are all sound. The Commander vertical, the only fully wired role, demonstrates the intended experience end to end. The work is finishing the other three verticals to its standard, not redesigning.

## Fix order

1. Build the role-tree generator from src/generated catalogs. Kills C1, absorbs the 16 static marines overrides behind one template, fixes M10 drift. Largest single payoff in the repo.
2. Ship the topbar segmented role switcher per spec. Kills C2, defuses H3 by giving users an explicit control.
3. Add leader.json to search and decide the Pagefind question. Kills C3, H1, H2 in one pass.
4. One-line fixes with production visibility: tools stat source (C4), og:image basePath (C5), the two undefined tokens (C6), the dead Help button, Ctrl K platform hint.
5. Token cleanup: Pill tints to tokens, PDF brand red, collapse the four badge clones (H4).
6. Accessibility pass: tree-nav keyboard handling, breadcrumb aria-current, search-box focus loop, skip-link targets, light-theme contrast values (H6, M4, M6, M7, M8).
7. Metadata wrappers for the six client pages and command palette route completion (M1, M2).
8. Theme flash, focus ring dark override, motion-safe variants (H5, M5, M16).

End of audit.
