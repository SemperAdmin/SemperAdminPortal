# Semper Admin Portal - UI/UX Redesign Specification

**Version:** 1.3
**Date:** 2026-05-04
**Prepared for:** Stephen, Project Owner
**Status:** All 5 phases shipped
**Companion file:** `redesign/mockups/redesign-preview.html` (interactive preview)

### Revision History

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-05-04 | Initial spec. |
| 1.1 | 2026-05-04 | Repainted to logo-derived palette (parchment, brass, deeper navy, brick scarlet). Consolidated role switcher to a single topbar surface. Loosened density (15px body, 14px UI, 20px card padding, 56px topbar). |
| 1.2 | 2026-05-04 | Added six premium polish upgrades drawn from UUPM benchmarking. Default to dark, floating pill topbar, ambient navy bloom in dark mode, upgraded stat tiles with Bebas Neue 44px numbers and brass icons, gradient text accent on hero, card padding to 24px. |
| 1.3 | 2026-05-04 | All 5 phases shipped to code. Phase 1 (tokens, primitives), Phase 2 (shell rebuild), Phase 3 (home + role landings + StatTile/PageHeader/MetaRow/FilterBar), Phase 4 (content templates + Callout/Citation/CrossRoleStrip/TableOfContents + tools + search), Phase 5 (recents store, RecentsTracker, EmptyState, not-found.tsx, error.tsx, loading.tsx). |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Inventory](#2-current-state-inventory)
3. [Problem Statement](#3-problem-statement)
4. [Design Direction](#4-design-direction)
5. [Design System](#5-design-system)
6. [Component Inventory](#6-component-inventory)
7. [Surface Specifications](#7-surface-specifications)
8. [Accessibility and Quality Bar](#8-accessibility-and-quality-bar)
9. [Implementation Roadmap](#9-implementation-roadmap)
10. [File Migration Order](#10-file-migration-order)
11. [Risks and Open Questions](#11-risks-and-open-questions)
12. [Approval and Next Steps](#12-approval-and-next-steps)

---

## 1. Executive Summary

The Semper Admin Portal carries strong content architecture and a clean technical stack. Next.js 15, Tailwind 4, shadcn-style primitives, MDX content collections, Pagefind search, role-aware filtering. The bones are professional. The visible UI lags behind the foundation.

This redesign upgrades the portal from utilitarian docs site to authoritative reference portal. Four pain points drive the work: plain visual treatment, hard-to-scan navigation, weak mobile UX, and dense content readability.

### Direction Locked

- **Aesthetic:** sharp military authority. Logo-derived palette (parchment, brick scarlet, deep navy, antique brass) plus premium polish layer (floating chrome, ambient bloom, gradient accents).
- **Default theme:** dark navy. Light parchment available via toggle. Admins read in dim spaces and at night, so dark wins as the home state.
- **Chrome:** floating pill-shaped topbar, 56px tall, semi-transparent with backdrop blur, sits 14px from the frame edge with `r-lg` corners and `shadow-md`. Scarlet 80px underline accent on the bottom.
- **Layout:** Mintlify deep-tree sidebar showing only the active role. Mobile drawer with bottom tab bar. Sticky right TOC on long content.
- **Role switching:** topbar segmented control, only place. Sidebar carries a "Viewing as" header (label only). Mobile drawer mirrors with the segmented control at the top.
- **Density:** balanced reference-doc rhythm. 15px body / 1.6. 14px UI. 24px card padding. 56px topbar. 8-step spacing scale.
- **Motion:** subtle and purposeful. Fades, slide-ins, hover lifts. Reduced-motion respected.
- **Premium accents:** ambient navy/scarlet bloom behind hero in dark mode, Bebas Neue 44px stat numbers with brass icons, gradient text on the hero key word.
- **Inspiration blend:** Linear/Stripe craft, Mintlify reference patterns, Palantir authority, UUPM polish on dark surfaces.

### What Ships

1. New design tokens (light and dark) replacing the current palette.
2. Refreshed shell: 52px topbar, 268px Mintlify tree, 224px right TOC, 48px mobile bar with bottom tabs.
3. Home, role landings, content template, tools, search, and mobile surfaces.
4. Component inventory: Button, Card, Pill, PolicyTag, StatusPill, Callout, Citation, Breadcrumbs, PageHeader, TOC, MetaRow.
5. Roadmap delivers in five phases over 4-6 weeks of part-time effort.

### Risk and Reversibility

All changes are CSS, component, and route-level. The MDX content layer, generated JSON catalogs, role-store, and Pagefind index do not change. You roll forward by pushing main. You roll back with one commit.

---

## 2. Current State Inventory

### 2.1 Stack and Architecture

The technical foundation is sound. No replatform is required.

- Next.js 15 App Router, TypeScript strict, static export to GitHub Pages.
- Tailwind CSS 4, shadcn-style component layer in `src/components/ui`, Radix primitives, lucide-react icons.
- Zustand store with persist middleware for role state.
- Custom MDX content loader with gray-matter and zod schemas. Build-time JSON sync to `src/generated/`.
- Pagefind for full-text search against the static `out/` directory.
- `@react-pdf/renderer` for PDF, `docx` + `file-saver` for DOCX exports. Both lazy-loaded.
- `next-themes` for dark mode, `cmdk` for the command palette, `next-sitemap` for SEO.

### 2.2 Surface Inventory

| Surface | Path | Current State |
|---|---|---|
| Top nav | `src/components/shell/top-nav.tsx` | Sticky 56px header. Logo, search button, role chips, palette button, theme toggle. |
| Side nav | `src/components/shell/side-nav.tsx` | 60px wide flat list of top-level routes. No content tree. Drawer on mobile. |
| Command palette | `src/components/shell/command-palette.tsx` | cmdk-driven, Ctrl+K. Navigate, switch role, change theme. Strong baseline. |
| Footer | `src/components/shell/footer.tsx` | Build date, source-check warning, repo and contact links. |
| Role picker dialog | `src/components/shell/role-picker-dialog.tsx` | First-visit forced modal. Saves to local storage. |
| Home | `src/app/page.tsx` | Hero, four role cards, six entry-point cards, info section. |
| Marines landing | `src/app/marines/page.tsx` | Header + 21-card grid (groups + topics) + info section. |
| Admin landing | `src/app/admin/page.tsx` | Header + 3-card grid by unit type + info section. |
| Policy detail | `src/app/policy/[slug]/page.tsx` | Article. Badge + verified pill, h1, summary, role chips, dl meta, MDX body, citation. |
| Tools index | `src/app/tools/page.tsx` | Card grid. Output-type badge, verified pill, role chips, open link. |
| Search | `src/app/search/page.tsx` | Pagefind UI bound to static index. |

### 2.3 Token Inventory

Brand palette is locked in: USMC scarlet, marine blue, accent yellow, role accents, status colors. Type stack is Bebas Neue display + Inter body + system mono. Shadows and radii defined. The two-layer system (brand and semantic) is the right model.

**Issues found:**

- Mono stack uses ui-monospace and Cascadia Code first. JetBrains Mono is loaded but lower priority.
- Card padding default is 24px (Card primitive uses `p-6`). Pages use `p-4`, `p-5`, `p-6` inconsistently.
- Spacing rhythm mixes `mt-3`, `mt-6`, `mt-10` without a clear scale.
- Bebas Neue applied to every heading h1 through h6. Reads as banner type, hurts body readability.
- Dark mode token overrides reuse the same scarlet for primary, no surface ramp.

---

## 3. Problem Statement

### 3.1 Pain Points (Your Selection)

You flagged all four candidate pain points. Each maps to specific code surfaces.

#### Plain or Generic Look

- Hero h1 at `text-5xl`/`text-6xl` with display font dominates without earning the space. No supporting brand cue.
- Cards lean on `shadow-sm` and a soft border. No accent color, no hierarchy beyond hover-on-border.
- Buttons use `radius-button` (4px) and `radius-card` (8px) but the scarlet is muted by `/10` alpha tints across most states.

#### Hard-to-Scan Navigation

- Side nav is a flat list of top-level routes. No tree, no content hierarchy, no recent items.
- Top nav role-switcher chips hidden under `lg` breakpoint. Search collapses to icon on small screens.
- No breadcrumbs anywhere. Users in deep policy or admin pages have no spatial cue back.
- Command palette is strong but undermarketed. Search box stub does not surface query examples.

#### Weak Mobile UX

- Mobile loses the role switcher. Role switching only works through the palette or first-visit dialog.
- No persistent navigation pattern. Users hamburger-out every time they want to navigate.
- Card grids stack to single column with the same 24px card padding. Wastes thumb scroll on padding.

#### Content Density and Readability

- Long MDX policy pages get a single 768px column with no TOC, no anchor links, no estimated reading time.
- Inline citations live in the footer block. Claims in the body have no anchored authority cue.
- Cross-role context appears once on the home page. Users in a Marines view do not see the Admin or Commander view of the same topic.

### 3.2 Operational Gaps (Observed but Not Raised)

Three additional gaps surfaced during the inventory.

- **No empty / loading / error states.** Lazy-loaded tools render with a basic spinner. List pages have no skeleton. Error boundary is the Next.js default 404.
- **Verified-status framing is reactive.** Aging or stale content carries a warning pill but no built-in route to flag, propose update, or contact a maintainer.
- **No favorites or recents.** Power users (PAC clerks, leaders coaching Marines weekly) will rebuild paths from scratch every visit.

---

## 4. Design Direction

The visual direction is a controlled fusion: USMC brand authority, Linear/Stripe interface craft, Mintlify reference structure, Palantir-grade density.

### Visual Principles

#### Principle 01 - Earn the Scarlet

Scarlet drives attention. Reserve it for primary CTAs, the topbar accent rule, role-card edge accent, callout left borders, and citation emphasis. Most surfaces stay neutral. Brand color earns the eye, it does not bathe the screen.

#### Principle 02 - Information Hierarchy First

Eyebrow, display, summary, meta. Every page header follows the same four-line pattern. Users learn it once and read it everywhere.

#### Principle 03 - Compact Rhythm

Power users scan. 14px body, 13px UI, 16px card padding. 5-7px row padding. 8-step spacing scale. No `mt-3`/`mt-6`/`mt-10` mix.

#### Principle 04 - Anchored Authority

Every claim carries a citation chip. Citations also list in the right TOC. Verified-status pills live in the meta row, never floating in a corner.

#### Principle 05 - Subtle Motion, No Theater

Color and opacity transitions on hover. Slide-in for drawers. Lift on cards via shadow. No scroll-driven reveals, no page-transition animations. Reduced-motion always respected.

---

## 5. Design System

### 5.1 Color Tokens

Palette sourced directly from the Semper Admin logo. Parchment surfaces, brick scarlet, deep navy, antique brass. The cool gray-blue scheme of v1.0 has been retired.

#### Source palette (logo extraction)

| Color | Hex | Where it lives in the logo |
|---|---|---|
| Deep Marine navy | `#0F1F3D` | Banner, circular ring, uniform body |
| Charcoal navy | `#0A1424` | Deepest uniform shadows |
| USMC scarlet (brick) | `#B82230` | Stripes, uniform piping |
| Parchment cream | `#F2E5BE` | "Semper Admin" wordmark, scroll, ring trim |
| Antique brass | `#B89042` | Buttons, ribbon trim, ring outline |
| Off-white | `#F8F4E8` | Uniform piping, feather quill |

#### Light Theme

| Token | Hex | Use |
|---|---|---|
| `bg` | `#F8F4E8` | Page background. Warm parchment-tinted. |
| `bg-elev` | `#FFFCF4` | Topbar, footer, elevated surfaces. |
| `bg-sunken` | `#EFE9D6` | Sidebar background. |
| `surface` | `#FFFCF4` | Card background. |
| `surface-2` | `#F2EBD4` | Hover, input states. |
| `surface-3` | `#E7DFC2` | Pressed, active hover. |
| `border` | `#DDD3B5` | Default border. |
| `border-strong` | `#C9BD96` | Input and divider borders. |
| `text` | `#1A1610` | Primary text. Warm near-black. |
| `text-muted` | `#5C5340` | Secondary text. |
| `text-subtle` | `#8A7E63` | Eyebrow and meta text. |
| `ring` | `#B82230` | Focus ring scarlet. |

#### Dark Theme

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0A1424` | Deep navy uniform color. |
| `bg-elev` | `#11203F` | Elevated surfaces. |
| `bg-sunken` | `#060E1A` | Sidebar. |
| `surface` | `#11203F` | Card. |
| `surface-2` | `#182A4D` | Hover. |
| `surface-3` | `#1F345C` | Pressed. |
| `border` | `#233A5C` | Default border. |
| `border-strong` | `#34507A` | Input border. |
| `text` | `#F2E5BE` | Primary text uses parchment. |
| `text-muted` | `#B5A988` | Secondary. |
| `text-subtle` | `#8A7F66` | Eyebrow. |

#### Brand and Role

| Token | Hex | Use |
|---|---|---|
| `usmc-scarlet` | `#B82230` | Primary CTA, topbar accent, citations. |
| `usmc-scarlet-700` | `#971826` | Primary hover state. |
| `marine-blue` | `#0F1F3D` | Logo mark, MCO policy tag, role switcher active state. |
| `parchment` | `#F2E5BE` | Wordmark, role switcher active text on dark. |
| `brass` | `#B89042` | Antique gold accent. Replaces bright `#FFCC00`. |
| `brass-700` | `#8E6E2E` | Brass hover, leader pill text on light. |
| `role-marine` | `#B82230` | Marine role accent. |
| `role-leader` | `#B89042` | Leader role accent. |
| `role-commander` | `#0F1F3D` | Commander role accent. |
| `role-admin` | `#2F8F5C` | Admin role accent. Muted green to match warm palette. |

#### Status

| Token | Hex | Use |
|---|---|---|
| `status-fresh` | `#2F8F5C` | Verified within 12 months. Muted green. |
| `status-aging` | `#C97D1F` | Verified 12-24 months. Reads close to brass. |
| `status-stale` | `#B83232` | Verified 24+ months. Close to scarlet. |
| `status-info` | `#2F5FA8` | Information callouts. |

### 5.2 Typography

Bebas Neue retracts to display surfaces only. Inter takes h2 through h3. Body remains Inter. Mono moves to JetBrains Mono first.

| Role | Font | Size / Weight | Use |
|---|---|---|---|
| Display | Bebas Neue | 56 / 400 | Hero h1, role card h3, page header h1. |
| H1 | Inter | 28 / 700 | Section page h1 in body content. |
| H2 | Inter | 22 / 700 | Section heading inside content. |
| H3 | Inter | 17 / 600 | Subsection heading. |
| Body | Inter | 15 / 400 / 1.6 | Default body. |
| Body-md | Inter | 16 / 400 / 1.7 | Long-form policy body. |
| UI | Inter | 14 / 500 | Buttons, navigation, controls. |
| Eyebrow | Inter | 11 / 700 caps | Section labels, role tags. |
| Mono | JetBrains Mono | 13 / 500 | Citations, dates, codes. |

### 5.3 Spacing Scale

Strict 8-step scale. No off-scale values.

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`

Default rhythms:

- Card padding: 20 (`p-5`).
- Section spacing: 32 within a section, 40 between sections, 56 between major blocks.
- Inline gaps: 8 in UI controls, 10 in tag lists, 16 in card grids.
- Vertical row padding: 7-8 in tight lists, 10-12 in default lists.
- Topbar height: 56px.

### 5.4 Radii and Elevation

| Token | Value | Use |
|---|---|---|
| `r-xs` | 3px | Tags, kbd, mono pills. |
| `r-sm` | 6px | Buttons, inputs, list rows. |
| `r-md` | 8px | Cards, dialogs, panels. |
| `r-lg` | 12px | Hero cards, large surfaces. |
| `r-pill` | 9999px | Status pills, role chips. |
| `shadow-sm` | 1px + 0px ring | Default card. |
| `shadow-md` | 2px + 8px / 24px | Hover lift, dropdown. |
| `shadow-lg` | 16px / 48px | Modal, command palette. |

### 5.5 Premium Polish Layer

Six craft techniques benchmarked against UUPM (uupm.cc) and adapted to the USMC palette. The polish runs on top of the reference-doc structure without disrupting it.

| # | Technique | Where it shows | Implementation note |
|---|---|---|---|
| 1 | Default to dark | Site-wide initial theme | `data-theme="dark"` set at the html element. `next-themes` honors user preference after first interaction. |
| 2 | Floating pill topbar | Every page | Topbar inset 14px with `r-lg`, `shadow-md`, backdrop blur. Drops to flush sticky after 200px scroll. |
| 3 | Ambient bloom | Dark mode hero and section tops | Radial gradient pseudo-element at the top center of every section. Mix of scarlet 10% and marine-blue-300 8%, blurred 20px. |
| 4 | Stat tiles | Home, role landings | Each tile gets a brass 14% top-left radial gradient on dark, brass 6% top linear on light. 32px icon in brass tint, 44px Bebas Neue number, eyebrow label, meta line. Tiles lift on hover. |
| 5 | Gradient text accent | Hero h1 only | Single key word ("PORTAL" on home) gets a 95deg gradient: scarlet to scarlet-300 to brass-300 to brass. One word per page maximum. |
| 6 | Card breathing room | Cards, role cards, tool cards | Padding 24px (up from 20). Grid gaps 18px (up from 14). Dark mode role cards add a per-role-tinted radial bloom. |

### 5.6 Motion Tokens

- **Fast:** 120ms (hover transitions, color shifts).
- **Default:** 180ms (drawer open/close, dropdown reveal).
- **Slow:** 240ms (page-level fade, route hint).
- **Easing:** ease-out for entry, ease-in for exit, ease for hover.

All motion gated behind `prefers-reduced-motion`. The existing CSS guard in `globals.css` extends to every new transition.

---

## 6. Component Inventory

Three buckets: keep with refresh, refactor in place, new.

### 6.1 Keep with Refresh

| Component | Path | Change |
|---|---|---|
| Button | `ui/button.tsx` | Tighten padding (sm h-7, md h-8). Update hover to use new tokens. Keep CVA structure. |
| Card | `ui/card.tsx` | Default padding `p-4` (was `p-6`). Add CardHeader-tight variant. |
| Dialog | `ui/dialog.tsx` | Use `shadow-lg`, `r-md`. Tighten close button. |
| Sheet | `ui/sheet.tsx` | Drawer width 320 mobile (was 288). Add backdrop blur. |
| Badge | `ui/badge.tsx` | Replace with new Pill component. Mark deprecated. |
| Separator | `ui/separator.tsx` | Add scarlet variant for section dividers. |

### 6.2 Refactor in Place

| Component | Path | Change |
|---|---|---|
| TopNav | `shell/top-nav.tsx` | 52px height. Search dominant. Role switcher segmented control. Scarlet underline accent. |
| SideNav | `shell/side-nav.tsx` | Replace flat list with deep tree. Collapsible sections. Active leaf scarlet dot. |
| SearchBox | `shell/search-box.tsx` | Recent queries, suggested results when focused. Live Pagefind integration. |
| RolePickerDialog | `shell/role-picker-dialog.tsx` | Refresh visual. Keep first-visit logic. |
| RoleSwitcherChips | `shell/role-picker-dialog.tsx` | Convert to RoleSegmented. Visible at every breakpoint. |
| Footer | `shell/footer.tsx` | Three-column rhythm. Status board (verified counts). Last-build mono line. |
| ContentCard | `domain/content-card.tsx` | `p-4` padding. Eyebrow style. Verified pill in tag row, not corner. |
| RoleChip | `domain/role-chip.tsx` | Use Pill primitive. Drop ring outline. Color by role token. |
| PolicyBadge | `domain/policy-badge.tsx` | Mono font. Tighter padding. Hex tints replaced with CSS color-mix. |
| LastVerified | `domain/last-verified.tsx` | Use StatusPill. Drop verbose copy. Keep classification logic. |
| SourceCitation | `domain/source-citation.tsx` | Inline link variant + footer-block variant. Add inline superscript citation. |

### 6.3 New Components

| Component | Path | Purpose |
|---|---|---|
| Pill | `ui/pill.tsx` | Replaces Badge. Variants: marine, leader, commander, admin, neutral, success, warning, danger. |
| StatusPill | `ui/status-pill.tsx` | Verified-state pill with color dot. Wraps LastVerified. |
| Breadcrumbs | `shell/breadcrumbs.tsx` | Auto-derived from path. Truncate middle for deep routes. |
| PageHeader | `domain/page-header.tsx` | Standard 4-line header: tags, h1, summary, meta row. |
| TableOfContents | `domain/toc.tsx` | Sticky right rail. Auto-built from h2/h3 in MDX. Active state via IntersectionObserver. |
| MetaRow | `domain/meta-row.tsx` | Effective date, authority, reading time, actions. |
| Callout | `domain/callout.tsx` | Variants: source-check, warning, info, tip, danger. Left-border accent. |
| Citation | `domain/citation.tsx` | Inline superscript chip. Links to source. Increments page citation list. |
| CrossRoleStrip | `domain/cross-role-strip.tsx` | Bottom-of-page row showing same topic across other roles. |
| StatTile | `domain/stat-tile.tsx` | Home dashboard tile. Label, value, meta. |
| FilterBar | `domain/filter-bar.tsx` | Type and role filter chips with grid/list view toggle. |
| BottomTabs | `shell/bottom-tabs.tsx` | Mobile only. 5 tabs: Home, Search, Browse, Tools, Recent. |
| TreeNav | `shell/tree-nav.tsx` | Mintlify-style tree with collapsible sections. |
| Skeleton | `ui/skeleton.tsx` | Shimmer for loading states on tools and lazy-loaded surfaces. |
| CommandBar | `shell/command-bar.tsx` | Wrap of cmdk. Adds recent, suggested, and live Pagefind hits. |

---

## 7. Surface Specifications

This section defines the redesign for every primary surface. Mockups live in `redesign/mockups/redesign-preview.html`.

### 7.1 App Shell

#### Topbar (Floating Pill, 56px)

- Floating treatment: 56px tall, sits 14px inset from the frame edges, `border-radius: r-lg` (12px), 1px border, `shadow-md`, semi-transparent background with `backdrop-filter: blur(14px)`.
- On scroll past 200px the topbar transitions to flush-edge sticky to maximize content width on long pages. Implementation note: `IntersectionObserver` watches a sentinel above the topbar.
- Layout: Logo + global search + role switcher + theme toggle + help icon.
- Scarlet 2px underline accent inside the rounded edge, left 80px from the topbar's left.
- Search field dominant at center-left, max 480px. 9px vertical padding for breathing room. Opens command palette on focus or click.
- **Role switcher: the only place to switch roles.** Segmented control, four buttons. Active uses marine blue background with parchment text (matches the logo banner). Always visible at every breakpoint.

#### Sidebar (Desktop, 272px)

- Mintlify-style sidebar showing **only the active role's content tree**. No more four-role expandable list.
- Top of the sidebar carries a "Viewing as" context header with the active role name in display type and a scarlet status dot. The header is a label, not a switch. To switch role, you use the topbar segmented control.
- Sections: "Browse content" (active role's topic tree), "Reference" (Search, Citations Index, Tools, Videos), "Last viewed" (auto-populated, max 5 entries).
- Active leaf marked with scarlet dot and surface highlight.

#### Right TOC (Desktop, 224px, Conditional)

- Renders only on content pages (policy, situation, video, MDX).
- Auto-built from h2/h3 in MDX. Active item via IntersectionObserver.
- Footer shows page-level citations as PolicyTag chips.

#### Mobile (< 1024px)

- Topbar collapses to 48px. Hamburger left, brand center, search icon right.
- Bottom tab bar: Home, Search, Browse, Tools, Recent. Active tab in scarlet.
- Browse opens a full-height drawer with the role tree.
- Search icon opens a full-screen search overlay (cmdk in mobile mode).

#### Footer

- Three columns: brand and disclaimer, build and verification stats, links and contact.
- Build date and verification posture rendered in mono.

### 7.2 Home

#### Hero Block

- Eyebrow: USMC ADMINISTRATIVE REFERENCE.
- Display h1: SEMPER ADMIN PORTAL (Bebas Neue 56).
- Lede: scope sentence with citation count.
- Two CTAs: Search the portal (primary scarlet), Citations index (outline).

#### Stat Strip

- Four tiles: Pages, Source citations, Tools, Verified percentage.
- Bordered, single rounded card, dividers between tiles.
- Auto-computed at build time from generated JSON catalogs.

#### Pick Your Role

- 2x2 grid. Each card carries the role accent on the left edge (animated in on hover).
- Card: eyebrow + display heading + summary + meta footer (page count and CTA).
- Cross-clickable: header, summary, footer all navigate to the role landing.

#### Common Entry Points

- 3-column grid of 6 entry-point cards.
- Each card: section eyebrow with scarlet dot + h4 + 1-line summary.
- Auto-curated in code. Cards hot-swap as content roadmap evolves.

### 7.3 Role Landings

Marines, Leader, Commander, Admin landings share a template.

- Breadcrumbs: Home / [Role].
- Page header: tags row (role pill, status pill), h1, summary, meta row (pages, categories, authority).
- Filter bar: All + content type filters + grid/list view toggle.
- Topic and group cards: dense 4-column grid at xl, 3-col at lg, 2-col at md, 1-col mobile.
- Each card: eyebrow with type and topic count, h4 short label, summary, meta footer with page count and Open CTA.

### 7.4 Content Templates

Policy, situation, video, and reference detail pages share one MDX-driven template with type-specific blocks.

- Breadcrumbs anchored at top.
- PageHeader with tag row (policy badge + role pill + status pill), display h1, summary, meta row (effective date, authority, reading time, export buttons).
- Source-check callout above the body for any aging or stale page.
- MDX body with Inter h2/h3, scarlet bullet markers, inline Citation chips.
- Inline callouts (variants: source-check, warning, info, tip, danger).
- CrossRoleStrip at the bottom: same topic surfaced from up to 3 other roles.
- Sticky right TOC on desktop. Mobile: collapsible drawer triggered from the page header.

### 7.5 Tools

- Filter bar: Type (Calculator, PDF, DOCX, Checklist) + Role.
- Cards keyed by output type with color-coded icons.
- Status pill in card header confirms freshness.
- Card body: title, summary, role pills, Open CTA.
- Grid responsive: 3-col xl, 2-col lg, 1-col mobile.

### 7.6 Search

- Pagefind UI continues to power results.
- New chrome: search input matches command palette styling.
- Result rows: type pill, h4 title, breadcrumb path, snippet, citation tags, verified pill.
- Filters: role, type, citation, verified status.
- Recent searches and saved queries persist in local storage.

### 7.7 Mobile Patterns

#### Bottom Tab Bar

- Five tabs: Home, Search, Browse, Tools, Recent.
- Always visible. Active tab uses scarlet icon and label.
- Tap on Browse opens the role tree drawer instead of a separate page.

#### Drawer Tree

- Full-height. Header carries logo and close icon.
- Role switcher segmented control at the top of the drawer (the mobile equivalent of the desktop topbar control).
- Below the switcher: active role's content tree, with larger touch targets (44px minimum). No four-role expandable list.

#### Detail Pages

- Topbar: back button replaces hamburger when in a detail route.
- Page title centered as a single line.
- Meta row truncates to status pill + reading time.
- TOC accessible via floating button bottom-right (above tab bar) on long content.

---

## 8. Accessibility and Quality Bar

### 8.1 Targets

- WCAG 2.2 AA color contrast across both themes.
- Focus-visible ring: 3px scarlet outline with 2px offset on every interactive element.
- Keyboard navigation parity with mouse on every surface.
- Skip link at the top remains.
- Touch targets minimum 44px on mobile.
- Tab order matches reading order on every page.

### 8.2 Reduced Motion

All transitions, slide-ins, and hover lifts gated behind a single CSS guard. Already present in `globals.css`. New components inherit by default.

### 8.3 Performance

- Static export budget: home under 150KB JS, content pages under 100KB JS (excluding MDX body).
- Self-hosted fonts unchanged. No additional Google Fonts requests.
- Lighthouse target: 95+ on every metric across home and a representative content page.

---

## 9. Implementation Roadmap

Five phases. Each phase ships independently behind a coordinated review. No long-lived branch. Ship to main behind feature-detection at the token layer where needed.

### 9.1 Phase 1 - Foundations

**Effort:** 6-8 hours.

- Update `src/app/globals.css` with new token system. Light and dark.
- Add JetBrains Mono via `@fontsource`.
- Update Tailwind theme to consume new tokens.
- Migrate Card primitive to `p-4` default.
- Refactor Button to new size scale.
- Add Pill, StatusPill, Skeleton primitives to `ui/`.

### 9.2 Phase 2 - Shell

**Effort:** 8-12 hours.

- New TopNav with 52px height, scarlet underline, segmented role switcher.
- New SideNav with TreeNav and collapsible sections.
- Breadcrumbs auto-derived from route.
- Footer rebuild.
- RolePickerDialog visual refresh.
- Mobile bottom tab bar.

### 9.3 Phase 3 - Home and Role Landings

**Effort:** 6-8 hours.

- Rebuild home with hero, StatTile strip, role grid with edge-accent, entry-point cards.
- Rebuild Marines, Leader, Commander, Admin landings using shared template.
- FilterBar component with grid/list view toggle.

### 9.4 Phase 4 - Content and Tools

**Effort:** 8-10 hours.

- PageHeader, MetaRow, Callout, Citation, CrossRoleStrip components.
- Rebuild `policy/[slug]`, `situations/[slug]`, `videos/[slug]` with new template.
- Sticky right TOC with IntersectionObserver.
- Tools index refresh and individual tool chrome.
- Search page chrome refresh.

### 9.5 Phase 5 - Polish and Motion

**Effort:** 4-6 hours.

- Hover lifts, drawer slide-ins, dropdown fades.
- Empty, loading, and error states.
- Recents store wired to TreeNav.
- Lighthouse pass.
- Accessibility sweep with axe.

### 9.6 Critical Path

1. Tokens. Foundations. Card and Button. Phase 1 must merge cleanly before any other work.
2. Shell. New TopNav and SideNav unlock visual consistency across every route.
3. PageHeader template. Drives the home, role landings, and content surfaces.
4. Mobile. Mobile patterns ride along with the shell rebuild.
5. Polish. Motion, recents, empty states close the loop.

---

## 10. File Migration Order

Concrete edit order. Each phase has a definition of done.

### 10.1 Phase 1 Files

| Order | File | Action |
|---|---|---|
| 1 | `src/app/globals.css` | Replace token block. Add JetBrains Mono import. Update dark overrides. |
| 2 | `src/components/ui/button.tsx` | Update CVA size scale. Refresh hover tokens. |
| 3 | `src/components/ui/card.tsx` | Default `p-4`. Add tight variant. |
| 4 | `src/components/ui/pill.tsx` | New file. Variants: role, status, neutral. |
| 5 | `src/components/ui/status-pill.tsx` | New file. Wraps Pill with classify logic. |
| 6 | `src/components/ui/skeleton.tsx` | New file. Shimmer animation. |
| 7 | `src/components/domain/role-chip.tsx` | Refactor to use Pill internally. |
| 8 | `src/components/domain/last-verified.tsx` | Refactor to use StatusPill internally. |
| 9 | `src/components/domain/policy-badge.tsx` | Mono font, tighter padding, color-mix tints. |

### 10.2 Phase 2 Files

| Order | File | Action |
|---|---|---|
| 1 | `src/components/shell/breadcrumbs.tsx` | New file. Path-derived crumbs. |
| 2 | `src/components/shell/tree-nav.tsx` | New file. Mintlify deep tree. |
| 3 | `src/components/shell/side-nav.tsx` | Replace flat list with TreeNav. |
| 4 | `src/components/shell/top-nav.tsx` | 52px height, scarlet underline, segmented role switcher. |
| 5 | `src/components/shell/role-picker-dialog.tsx` | Visual refresh. Preserve first-visit flow. |
| 6 | `src/components/shell/search-box.tsx` | Recents and suggestions. |
| 7 | `src/components/shell/bottom-tabs.tsx` | New file. Mobile-only. |
| 8 | `src/components/shell/footer.tsx` | Three-column rebuild. |
| 9 | `src/components/shell/app-shell.tsx` | Wire bottom tabs and breadcrumbs. |

### 10.3 Phase 3 Files

| Order | File | Action |
|---|---|---|
| 1 | `src/components/domain/stat-tile.tsx` | New. |
| 2 | `src/components/domain/page-header.tsx` | New. |
| 3 | `src/components/domain/meta-row.tsx` | New. |
| 4 | `src/components/domain/filter-bar.tsx` | New. |
| 5 | `src/app/page.tsx` | Rebuild home. |
| 6 | `src/app/marines/page.tsx` | Rebuild landing with shared template. |
| 7 | `src/app/leader/page.tsx` | Rebuild landing. |
| 8 | `src/app/commander/page.tsx` | Rebuild landing. |
| 9 | `src/app/admin/page.tsx` | Rebuild landing. |

### 10.4 Phase 4 Files

| Order | File | Action |
|---|---|---|
| 1 | `src/components/domain/callout.tsx` | New. Variants: source-check, warning, info, tip, danger. |
| 2 | `src/components/domain/citation.tsx` | New. Inline superscript chip. |
| 3 | `src/components/domain/cross-role-strip.tsx` | New. |
| 4 | `src/components/domain/toc.tsx` | New. Sticky right rail. |
| 5 | `src/components/domain/mdx-content.tsx` | Update components map for new Callout, Citation. |
| 6 | `src/app/policy/[slug]/page.tsx` | Apply new template. |
| 7 | `src/app/situations/[slug]/page.tsx` | Apply new template. |
| 8 | `src/app/videos/[slug]/page.tsx` | Apply new template. |
| 9 | `src/app/tools/page.tsx` | Rebuild with FilterBar. |
| 10 | `src/app/search/page.tsx` | Refresh chrome. |

---

## 11. Risks and Open Questions

### 11.1 Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Mintlify-style tree breaks for users on slow connections (initial paint shows empty tree). | Medium | Server-render the tree from the generated JSON catalog. No client-only state for first paint. |
| Role switcher segmented control crowds the topbar at < 1280px. | Low-medium | Collapse to icon-only with role label tooltip below 1100px. Drawer holds full switcher on mobile. |
| Right TOC clutters short content pages. | Medium | Render TOC only when MDX has 3+ h2 headings. |
| Bebas Neue restraint may surprise stakeholders expecting USMC banner type everywhere. | Low | Keep Bebas Neue on hero and display surfaces. Inter for body H2/H3 protects readability. |
| Phase 4 cross-role strip needs cross-role topic mapping that may not exist for every page. | Medium | Render strip only when mapping exists. Skip silently otherwise. |
| Static export prevents server-driven recents. | Low | Local-storage backed. No server dependency. |

### 11.2 Open Questions

1. **Brand:** should the topbar logo include a USMC anchor mark or a custom Semper Admin shield? Current `logo.jpg` works as a placeholder.
2. **Citations:** do we want footnote-style aggregation at the bottom of MDX (in addition to inline + TOC), or is two surfaces enough?
3. **Recent items:** scope to viewed pages, or also include searched terms and applied filters?
4. **Tool chrome:** do tools need their own breadcrumb depth (Tools / Calculator / EAS) or stay flat under `/tools/[slug]`?
5. **Cross-role mapping:** stored in MDX frontmatter as siblings array, or computed from a topic-graph generator at build?

---

## 12. Approval and Next Steps

Once you approve this spec, the deliverables are:

1. **Phase 1 PR:** tokens, fonts, Card, Button, Pill, StatusPill, Skeleton. Includes a styleguide preview at `/styleguide`.
2. **Phase 2 PR:** shell rebuild including breadcrumbs, tree, top nav, mobile tabs, footer, role picker refresh.
3. **Phase 3 PR:** home and role landings.
4. **Phase 4 PR:** content templates, callouts, citations, TOC, cross-role strip, tools, search.
5. **Phase 5 PR:** motion, empty states, accessibility sweep, performance audit.

### Decision Points

To unblock Phase 1 you confirm:

- Logo-derived palette as defined in Section 5.1 (parchment surfaces, brick scarlet, deep navy, antique brass).
- Type direction: Bebas Neue restricted to display surfaces.
- Density: 15px body, 14px UI, 20px card padding, 56px topbar.
- Single role switcher: topbar segmented control on desktop, top of mobile drawer. Sidebar is read-only "Viewing as" context.
- Pill replaces Badge.

### How Approvals Route

You review this spec and the live mockup at `redesign/mockups/redesign-preview.html`. Open issues in plain text directly in this conversation. Phase 1 PR ships within 1-2 sessions of approval.

---

## 13. Shipped Build Notes (v1.3)

All five phases are now in code on the `main` branch.

### Phase 1 (tokens + primitives)

- `src/app/globals.css` v1.2 token system with parchment-and-navy palette, JetBrains Mono import, shimmer keyframes, three new utility classes (`.gradient-accent`, `.ambient-bloom`, `.chrome-floating`).
- `src/components/ui/card.tsx` with new CVA variants. Padding moved to CardHeader/CardContent/CardFooter.
- `src/components/ui/button.tsx` new size scale and brass variant.
- `src/components/ui/pill.tsx` new (replaces Badge).
- `src/components/ui/status-pill.tsx` new.
- `src/components/ui/skeleton.tsx` upgraded with shimmer and `SkeletonText` helper.
- `src/components/domain/role-chip.tsx`, `last-verified.tsx`, `policy-badge.tsx` refactored to use the new primitives.

### Phase 2 (shell rebuild)

- `src/lib/role-trees.ts` curated content trees per role.
- `src/components/shell/breadcrumbs.tsx` auto-derives crumbs from `usePathname` with USMC vocabulary overrides.
- `src/components/shell/tree-nav.tsx` Mintlify deep tree with collapsible branches and scarlet active-leaf dot.
- `src/components/shell/bottom-tabs.tsx` mobile-only fixed bar with 5 tabs.
- `src/components/shell/side-nav.tsx` rebuilt to host the role context header + TreeNav.
- `src/components/shell/top-nav.tsx` 56px floating pill with backdrop blur, scarlet underline, segmented role switcher.
- `src/components/shell/search-box.tsx` refreshed.
- `src/components/shell/role-picker-dialog.tsx` refreshed visual.
- `src/components/shell/footer.tsx` three-column rebuild.
- `src/components/shell/app-shell.tsx` wired BottomTabs and Breadcrumbs.

### Phase 3 (home and role landings)

- `src/components/domain/stat-tile.tsx` 44px Bebas Neue numerics, brass icon top-left.
- `src/components/domain/page-header.tsx` standard 4-line header.
- `src/components/domain/meta-row.tsx` inline dl of label/value pairs.
- `src/components/domain/filter-bar.tsx` filter chips + view toggle.
- `src/app/page.tsx` rebuilt home with hero, gradient accent on PORTAL, StatTile strip, role grid with edge accents, entry-point cards.
- `src/app/marines/page.tsx`, `leader/page.tsx`, `commander/page.tsx`, `admin/page.tsx` rebuilt using shared PageHeader template.

### Phase 4 (content templates + tools + search)

- `src/components/domain/callout.tsx` 5 variants (source-check, warning, info, tip, danger).
- `src/components/domain/citation.tsx` inline superscript chip.
- `src/components/domain/cross-role-strip.tsx` bottom-of-page row for other-role views.
- `src/components/domain/toc.tsx` sticky right rail with `IntersectionObserver`.
- `src/components/domain/mdx-content.tsx` updated to expose Callout and Citation as MDX components.
- `src/app/policy/[slug]/page.tsx` rebuilt with PageHeader (compact), source-check Callout (auto-promotes to warning/danger as content ages), MdxContent body, sticky right TOC.
- `src/app/situations/[slug]/page.tsx` rebuilt with PageHeader, prerequisites block, MdxContent, TOC.
- `src/app/videos/[slug]/page.tsx` rebuilt with PageHeader, VideoEmbed, MdxContent, TOC.
- `src/app/tools/page.tsx` rebuilt with FilterBar (filter by output type) and per-type accent colors.
- `src/app/search/page.tsx` wrapped in PageHeader.

### Phase 5 (polish + states)

- `src/lib/store/role-store.ts` extended with `recents` slice. Schema bumped to `v2` (auto-fresh state for users on v1).
- `src/components/shell/recents-tracker.tsx` listens to pathname changes and registers detail-route views.
- `src/components/shell/side-nav.tsx` renders the recents list under the tree.
- `src/components/domain/empty-state.tsx` reusable empty-list surface.
- `src/app/not-found.tsx` branded 404 with gradient accent.
- `src/app/error.tsx` global error boundary with reset action.
- `src/app/loading.tsx` route-level loading skeleton.
- Leader and Commander landings adopt EmptyState.

### Carry-over to Phase 6 (cleanup, not blocking)

- Badge primitive remains in code as deprecated. Consumers migrate to Pill incrementally.
- Cross-role mapping is not yet in MDX frontmatter, so CrossRoleStrip is exported but not yet rendered on detail pages. Add a `crossRole: { role, title, href }[]` field to `roleContentSchema` to wire it.
- `role-trees.ts` is hand-curated. Phase 6 swaps for a generator that reads `src/generated/marines.json` and the rest.

---

**End of specification.**
