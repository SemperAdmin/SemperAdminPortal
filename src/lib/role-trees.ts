import type { Role } from "@/lib/roles";

/**
 * Role-aware navigation trees - v1.2.
 *
 * Single source of truth for the desktop sidebar TreeNav and the mobile drawer.
 * Each role surfaces its own topic tree. Reference items (search, citations,
 * tools, videos) appear under every role.
 *
 * Phase 4 will swap the hand-curated trees for a generator that consumes
 * src/generated/*.json catalogs at build time.
 */

export interface TreeLeaf {
  label: string;
  href: string;
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

const REFERENCE_SECTION: TreeSection = {
  label: "Reference",
  items: [
    { label: "Search", href: "/search" },
    { label: "Citations Index", href: "/citations" },
    { label: "Tools", href: "/tools" },
    { label: "Videos", href: "/videos" },
    { label: "References", href: "/references" },
    {
      label: "Inspections",
      href: "/inspections",
      children: [
        { label: "IGMC", href: "/inspections/igmc" },
        { label: "MCAAT - Admin", href: "/inspections/mcaat/admin" },
        { label: "MCAAT - Finance", href: "/inspections/mcaat/finance" },
      ],
    },
    { label: "About", href: "/about" },
  ],
};

const STYLEGUIDE_SECTION: TreeSection = {
  label: "System",
  items: [{ label: "Style guide", href: "/styleguide" }],
};

// =================================================================
// MARINE
// =================================================================
const MARINE_TREE: TreeSection[] = [
  {
    label: "",
    items: [
      { label: "Overview", href: "/marines" },
      {
        label: "Pay and entitlements",
        href: "/marines/pay-and-entitlements",
        defaultOpen: true,
        children: [
          { label: "Reading your LES", href: "/marines/pay-and-entitlements/review-les" },
          { label: "BAH overview", href: "/marines/pay-and-entitlements/bah-overview" },
          { label: "BAS overview", href: "/marines/pay-and-entitlements/bas-overview" },
        ],
      },
      {
        label: "Life events",
        href: "/marines/life-events",
        children: [
          { label: "NAVMC 10922 family docs", href: "/marines/life-events/family-docs" },
          { label: "Marriage", href: "/marines/life-events/marriage" },
          { label: "Birth or adoption", href: "/marines/life-events/new-dependent" },
        ],
      },
      { label: "PCS", href: "/marines/pcs" },
      { label: "Promotions", href: "/marines/promotions" },
      { label: "Performance evaluation", href: "/marines/performance-evaluation" },
      { label: "Separations and retirement", href: "/marines/separations-and-retirement" },
      { label: "Reenlistments and extensions", href: "/marines/reenlistments-and-extensions" },
      { label: "Leave and liberty", href: "/marines/leave-and-liberty" },
      { label: "DTS", href: "/marines/dts" },
      { label: "GTCC", href: "/marines/gtcc" },
      { label: "TAD", href: "/marines/tad" },
      { label: "Awards", href: "/marines/awards" },
      { label: "Education", href: "/marines/education" },
      { label: "Legal services", href: "/marines/legal-services" },
      { label: "Marine and family programs", href: "/marines/marine-and-family-programs" },
    ],
  },
  REFERENCE_SECTION,
  STYLEGUIDE_SECTION,
];

// =================================================================
// LEADER
// =================================================================
const LEADER_TREE: TreeSection[] = [
  {
    label: "",
    items: [
      { label: "Overview", href: "/leader" },
      {
        label: "Counseling",
        href: "/leader/counseling",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/counseling/overview" },
          { label: "Six functional areas", href: "/leader/counseling/six-functional-areas" },
          { label: "Initial counseling session", href: "/leader/counseling/initial-session" },
          { label: "Cadence and events", href: "/leader/counseling/cadence-and-events" },
          { label: "Counseling styles", href: "/leader/counseling/styles" },
          { label: "Setting targets", href: "/leader/counseling/setting-targets" },
          { label: "SMART goals", href: "/leader/counseling/smart-goals" },
          { label: "Listening and feedback", href: "/leader/counseling/listening-and-feedback" },
          { label: "Avoiding pitfalls", href: "/leader/counseling/avoiding-pitfalls" },
        ],
      },
      {
        label: "Performance evaluation",
        href: "/leader/performance-evaluation",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/performance-evaluation/overview" },
          { label: "JEPES for junior enlisted", href: "/leader/performance-evaluation/jepes" },
          { label: "Conducting a JEPES evaluation", href: "/leader/performance-evaluation/jepes-conducting" },
          { label: "FitRep cycle", href: "/leader/performance-evaluation/fitrep-cycle" },
          { label: "RS mechanics", href: "/leader/performance-evaluation/rs-mechanics" },
          { label: "RO mechanics", href: "/leader/performance-evaluation/ro-mechanics" },
          { label: "Adverse FitRep", href: "/leader/performance-evaluation/adverse-fitrep" },
          { label: "APES administration", href: "/leader/performance-evaluation/apes-administration" },
        ],
      },
      {
        label: "Awards",
        href: "/leader/awards",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/awards/overview" },
          { label: "Drafting the narrative", href: "/leader/awards/drafting-narrative" },
          { label: "Choosing the right award", href: "/leader/awards/choosing-the-award" },
          { label: "Routing and endorsements", href: "/leader/awards/routing-and-endorsements" },
          { label: "End-of-tour timing", href: "/leader/awards/end-of-tour-timing" },
          { label: "Unit and collateral awards", href: "/leader/awards/unit-awards" },
          { label: "Combat Action Ribbon", href: "/leader/awards/combat-action-ribbon" },
          { label: "OMPF verification", href: "/leader/awards/ompf-verification" },
          { label: "Citation and certificate mechanics", href: "/leader/awards/citation-mechanics" },
        ],
      },
      { label: "Promotion coaching", href: "/leader/promotions" },
      {
        label: "Personnel leadership",
        href: "/leader/personnel",
        defaultOpen: false,
        children: [
          { label: "New Marine integration", href: "/leader/personnel/new-marine-integration" },
          { label: "Sponsor program", href: "/leader/personnel/sponsor-program" },
          { label: "Mentorship pairing", href: "/leader/personnel/mentorship-pairing" },
          { label: "Section leader orientation", href: "/leader/personnel/section-leader-orientation" },
          { label: "Unsat participation counseling", href: "/leader/personnel/unsat-participation-counseling" },
          { label: "Force Preservation referral", href: "/leader/personnel/force-preservation-referral" },
        ],
      },
      {
        label: "Records verification",
        href: "/leader/records",
        defaultOpen: false,
        children: [
          { label: "Section records audit", href: "/leader/records/section-records-audit" },
          { label: "Records cadence", href: "/leader/records/cadence" },
          { label: "MCTFS review", href: "/leader/records/mctfs-review" },
          { label: "OMPF audit walkthrough", href: "/leader/records/ompf-audit-walkthrough" },
          { label: "Promotion board prep", href: "/leader/records/promotion-board-prep" },
          { label: "Awards records cleanup", href: "/leader/records/awards-records-cleanup" },
        ],
      },
      {
        label: "Section readiness",
        href: "/leader/readiness",
        defaultOpen: false,
        children: [
          { label: "AT section planning", href: "/leader/readiness/at-section-planning" },
          { label: "Pre-deployment section", href: "/leader/readiness/pre-deployment-section" },
          { label: "Medical and dental", href: "/leader/readiness/medical-dental" },
          { label: "Training requirements", href: "/leader/readiness/training-requirements" },
          { label: "Family readiness", href: "/leader/readiness/family-readiness" },
          { label: "RED-S currency", href: "/leader/readiness/red-s-currency" },
        ],
      },
      {
        label: "Discipline coaching",
        href: "/leader/discipline",
        defaultOpen: false,
        children: [
          { label: "Pre-NJP counseling", href: "/leader/discipline/pre-njp-counseling" },
          { label: "Page 11 counseling", href: "/leader/discipline/page-11-counseling" },
          { label: "Witness statements", href: "/leader/discipline/witness-statements" },
          { label: "Article 31 advisory", href: "/leader/discipline/article-31-advisory" },
          { label: "Post-NJP documentation", href: "/leader/discipline/post-njp-documentation" },
        ],
      },
      {
        label: "Life events coaching",
        href: "/leader/life-events",
        defaultOpen: false,
        children: [
          { label: "Family docs coaching", href: "/leader/life-events/family-docs-coaching" },
          { label: "Marriage walkthrough", href: "/leader/life-events/marriage-walkthrough" },
          { label: "Birth and adoption", href: "/leader/life-events/birth-adoption-walkthrough" },
          { label: "Divorce and custody", href: "/leader/life-events/divorce-custody" },
          { label: "Bereavement", href: "/leader/life-events/bereavement" },
          { label: "EFMP coordination", href: "/leader/life-events/efmp-coordination" },
        ],
      },
      {
        label: "Pay oversight",
        href: "/leader/pay",
        defaultOpen: false,
        children: [
          { label: "Coaching Marines on pay", href: "/leader/pay/coaching-marines-on-pay" },
          { label: "BAH error catch", href: "/leader/pay/bah-error-catch" },
          { label: "Allotment review", href: "/leader/pay/allotment-review" },
          { label: "GTCC delinquency", href: "/leader/pay/gtcc-delinquency" },
          { label: "Pay problems escort", href: "/leader/pay/pay-problems-escort" },
          { label: "Special pay verification", href: "/leader/pay/special-pay-verification" },
          { label: "Secondary dependency", href: "/leader/pay/secondary-dependency" },
        ],
      },
      {
        label: "Travel oversight",
        href: "/leader/travel",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/travel/overview" },
          { label: "PCS coaching", href: "/leader/travel/pcs-coaching" },
          { label: "TAD coaching", href: "/leader/travel/tad-coaching" },
          { label: "DTS oversight", href: "/leader/travel/dts-oversight" },
          { label: "GTCC during travel", href: "/leader/travel/gtcc-use" },
          { label: "Voucher audit", href: "/leader/travel/voucher-audit" },
          { label: "Claim disputes", href: "/leader/travel/claim-disputes" },
          { label: "AO mechanics", href: "/leader/travel/approving-officer-role" },
        ],
      },
      {
        label: "Bridging to S-1 and PAC",
        href: "/leader/bridging",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/bridging/overview" },
          { label: "When to walk", href: "/leader/bridging/when-to-walk" },
          { label: "Package checklist", href: "/leader/bridging/package-checklist" },
          { label: "Processing timelines", href: "/leader/bridging/processing-timelines" },
          { label: "Follow-up cadence", href: "/leader/bridging/follow-up-cadence" },
          { label: "Escalation paths", href: "/leader/bridging/escalation-paths" },
        ],
      },
      {
        label: "Career coaching",
        href: "/leader/career",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/career/overview" },
          { label: "Reenlistment conversation", href: "/leader/career/reenlistment-conversation" },
          { label: "Lateral move advising", href: "/leader/career/lateral-move-advising" },
          { label: "Transition timeline", href: "/leader/career/transition-timeline" },
          { label: "Education planning", href: "/leader/career/education-planning" },
          { label: "Civilian credential matching", href: "/leader/career/civilian-credential-matching" },
        ],
      },
      {
        label: "Force preservation and wellness",
        href: "/leader/wellness",
        defaultOpen: false,
        children: [
          { label: "Overview", href: "/leader/wellness/overview" },
          { label: "Financial distress", href: "/leader/wellness/financial-distress" },
          { label: "Mental health risk", href: "/leader/wellness/mental-health-risk" },
          { label: "Fraternization risk", href: "/leader/wellness/fraternization-risk" },
          { label: "Command climate flags", href: "/leader/wellness/command-climate-flags" },
          { label: "Routing resources", href: "/leader/wellness/routing-resources" },
        ],
      },
    ],
  },
  REFERENCE_SECTION,
  STYLEGUIDE_SECTION,
];

// =================================================================
// COMMANDER
// =================================================================
const COMMANDER_TREE: TreeSection[] = [
  {
    label: "",
    items: [
      { label: "Overview", href: "/commander" },
      {
        label: "Change of Command turnover",
        href: "/commander/turnover",
        defaultOpen: true,
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
        children: [
          { label: "NJP routing", href: "/commander/discipline-and-records/njp-routing" },
          { label: "Page 11 entries", href: "/commander/discipline-and-records/page-11" },
        ],
      },
      { label: "Personnel decisions", href: "/commander/personnel" },
      { label: "IPAC relationships", href: "/commander/ipac" },
      { label: "Audit posture", href: "/commander/audit-posture" },
    ],
  },
  REFERENCE_SECTION,
  STYLEGUIDE_SECTION,
];

// =================================================================
// ADMIN
// =================================================================
const ADMIN_TREE: TreeSection[] = [
  {
    label: "",
    items: [
      { label: "Home", href: "/" },
    ],
  },
  REFERENCE_SECTION,
  STYLEGUIDE_SECTION,
];

const DEFAULT_TREE: TreeSection[] = [
  {
    label: "Browse",
    items: [
      { label: "Marines", href: "/marines" },
      { label: "Leader", href: "/leader" },
      { label: "Commander", href: "/commander" },
      { label: "Admin", href: "/admin" },
    ],
  },
  REFERENCE_SECTION,
  STYLEGUIDE_SECTION,
];

const TREE_BY_ROLE: Record<Role, TreeSection[]> = {
  marine: MARINE_TREE,
  leader: LEADER_TREE,
  commander: COMMANDER_TREE,
  admin: ADMIN_TREE,
};

export function getTreeForRole(role: Role | null): TreeSection[] {
  if (!role) return DEFAULT_TREE;
  return TREE_BY_ROLE[role];
}