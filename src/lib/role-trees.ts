import type { Role } from "@/lib/roles";
import roleNav from "@/generated/role-nav.json";

/**
 * Role-aware navigation trees - v1.3.
 *
 * Single source of truth for the desktop sidebar TreeNav and the mobile drawer.
 * Each role surfaces its own topic tree. Reference surfaces moved to the
 * topbar ReferenceMenu, driven by REFERENCE_LINKS in src/lib/navigation.ts.
 *
 * Marine, Leader, and Admin trees are generated at content-sync time by
 * scripts/sync-content.mjs into src/generated/role-nav.json, driven by the
 * label registries (marines-categories.ts, leader-categories.ts,
 * admin-topics.ts) and the content catalogs. New content appears in the
 * sidebar on the next `npm run content:sync` with zero edits here.
 *
 * The Commander tree stays hand-curated: its labels and grouping carry
 * editorial judgment the catalog does not. The sync script warns when
 * generated trees drift from content. Keep the Commander tree honest by
 * hand when commander content changes.
 */

export interface TreeLeaf {
  label: string;
  href: string;
  /** Opens in a new tab. Use for external URLs. */
  external?: boolean;
}

export interface TreeBranch {
  label: string;
  href?: string;
  defaultOpen?: boolean;
  children: TreeLeaf[];
}

export interface TreeSection {
  /** Section eyebrow text. */
  label: string;
  items: (TreeBranch | TreeLeaf)[];
}

export function isBranch(item: TreeBranch | TreeLeaf): item is TreeBranch {
  return "children" in item && Array.isArray((item as TreeBranch).children);
}

// Generated browse items per role. Shape is enforced by the generator.
const GENERATED_NAV = roleNav as Record<
  "marine" | "leader" | "admin",
  (TreeBranch | TreeLeaf)[]
>;

function browseTree(items: (TreeBranch | TreeLeaf)[]): TreeSection[] {
  return [{ label: "Browse content", items }];
}

const MARINE_TREE: TreeSection[] = browseTree(GENERATED_NAV.marine);
const LEADER_TREE: TreeSection[] = browseTree(GENERATED_NAV.leader);
const ADMIN_TREE: TreeSection[] = browseTree(GENERATED_NAV.admin);

// =================================================================
// COMMANDER - hand-curated
// =================================================================
const COMMANDER_TREE: TreeSection[] = [
  {
    label: "Browse content",
    items: [
      { label: "Overview", href: "/commander" },
      { label: "Compliance dashboard", href: "/commander/dashboard" },
      { label: "Oversight matrix", href: "/commander/oversight-matrix/overview" },
      {
        label: "Incident playbooks",
        href: "/commander/incident-playbooks",
        children: [
          { label: "Overview", href: "/commander/incident-playbooks/overview" },
          { label: "Covered offense response", href: "/commander/incident-playbooks/covered-offense" },
          { label: "SAPR Unrestricted Report", href: "/commander/incident-playbooks/sapr-unrestricted-report" },
          { label: "Off-base arrest", href: "/commander/incident-playbooks/off-base-arrest" },
          { label: "Suicide attempt and mental health crisis", href: "/commander/incident-playbooks/suicide-response" },
        ],
      },
      {
        label: "Force Preservation Council",
        href: "/commander/force-preservation",
        children: [
          { label: "Overview", href: "/commander/force-preservation/overview" },
          { label: "CIRRAS commander role", href: "/commander/force-preservation/cirras-role" },
          { label: "New join elevated risk", href: "/commander/force-preservation/elevated-risk-new-joins" },
          { label: "FPC SOP and meetings", href: "/commander/force-preservation/fpc-sop-meetings" },
        ],
      },
      {
        label: "Battle rhythm",
        href: "/commander/battle-rhythm",
        children: [
          { label: "Overview", href: "/commander/battle-rhythm/overview" },
          { label: "Monthly CMG", href: "/commander/battle-rhythm/monthly-cmg" },
          { label: "Monthly FPC and CSNE", href: "/commander/battle-rhythm/monthly-fpc" },
          { label: "Quarterly CMR and readiness", href: "/commander/battle-rhythm/quarterly-actions" },
        ],
      },
      {
        label: "Aviation overlay",
        href: "/commander/aviation",
        children: [
          { label: "Overview", href: "/commander/aviation/overview" },
          { label: "Pre-CoC requirements", href: "/commander/aviation/pre-coc" },
          { label: "Safety program", href: "/commander/aviation/safety-program" },
          { label: "Readiness and training", href: "/commander/aviation/readiness-training" },
        ],
      },
      {
        label: "Change of Command turnover",
        href: "/commander/turnover",
        children: [
          { label: "Overview", href: "/commander/turnover/overview" },
          { label: "Article 0807 legal foundation", href: "/commander/turnover/legal-foundation" },
          { label: "Outgoing CO checklist", href: "/commander/turnover/outgoing-checklist" },
          { label: "Incoming CO pre-CoC", href: "/commander/turnover/pre-coc" },
          { label: "Day 0 to 7", href: "/commander/turnover/day-0-7" },
          { label: "First 30 days", href: "/commander/turnover/30-day-actions" },
          { label: "OSTC covered offenses", href: "/commander/turnover/ostc-covered-offenses" },
          { label: "90 to 120 days and recurring", href: "/commander/turnover/90-120-and-recurring" },
        ],
      },
      {
        label: "Discipline and records",
        href: "/commander/discipline-and-records",
        defaultOpen: true,
        children: [
          { label: "Overview", href: "/commander/discipline-and-records/overview" },
          { label: "NJP routing", href: "/commander/discipline-and-records/njp-routing" },
          { label: "Page 11 entries", href: "/commander/discipline-and-records/page-11" },
          { label: "Convening authority and courts-martial", href: "/commander/discipline-and-records/convening-authority" },
          { label: "Command investigations", href: "/commander/discipline-and-records/investigations" },
          { label: "UPB and SRB records management", href: "/commander/discipline-and-records/upb-srb" },
        ],
      },
      {
        label: "Personnel decisions",
        href: "/commander/personnel-decisions",
        children: [
          { label: "Overview", href: "/commander/personnel-decisions/overview" },
          { label: "Administrative separation", href: "/commander/personnel-decisions/admin-discharges" },
          { label: "Retirement processing", href: "/commander/personnel-decisions/retirement" },
          { label: "Reductions in grade", href: "/commander/personnel-decisions/reductions" },
          { label: "Promotion withholds", href: "/commander/personnel-decisions/promotion-withholds" },
        ],
      },
      {
        label: "Inspections lifecycle",
        href: "/commander/inspections-lifecycle",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/commander/inspections-lifecycle/overview" },
          { label: "CGIP directive setup", href: "/commander/inspections-lifecycle/cgip-setup" },
          { label: "FIR receipt", href: "/commander/inspections-lifecycle/fir-receipt" },
          { label: "CAR submission", href: "/commander/inspections-lifecycle/car-submission" },
          { label: "Records retention", href: "/commander/inspections-lifecycle/records-retention" },
        ],
      },
      {
        label: "IPAC relationships",
        href: "/commander/relationships",
        children: [
          { label: "IPAC connectivity and working relationships", href: "/commander/relationships/ipac-procedures" },
        ],
      },
      {
        label: "Audit posture",
        href: "/commander/audit-posture",
        children: [
          { label: "Overview", href: "/commander/audit-posture/overview" },
          { label: "IGMC FAC self-audit", href: "/commander/audit-posture/igmc-fac-self-audit" },
          { label: "CoRE vs CoRE+", href: "/commander/audit-posture/core-vs-core-plus" },
        ],
      },
    ],
  },
];

const TREE_BY_ROLE: Record<Role, TreeSection[]> = {
  marine: MARINE_TREE,
  leader: LEADER_TREE,
  commander: COMMANDER_TREE,
  admin: ADMIN_TREE,
};

const DEFAULT_TREE: TreeSection[] = [];

export function getTreeForRole(role: Role | null): TreeSection[] {
  if (!role) return DEFAULT_TREE;
  return TREE_BY_ROLE[role];
}
