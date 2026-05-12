/**
 * Leader landing category definitions.
 * Mirrors the marines-categories.ts two-tier shape.
 *
 * - LEADER_CATEGORIES: leaf-level entries. One per content page. The
 *   `slug` is a globally unique key (parent-prefixed where MDX leaf
 *   slugs would collide). `leafSlug` is the URL segment, matching the
 *   MDX `slug` frontmatter. `parentGroup` matches the MDX `topic`.
 * - LEADER_PARENT_GROUPS: high-level groupings rendered on the /leader
 *   landing page. children[] lists the LEADER_CATEGORIES `slug` values
 *   grouped under it.
 *
 * URL pattern: /leader/<parentGroup>/<leafSlug>
 *
 * Phase plan:
 * - Phase 1: counseling + performance-evaluation (complete)
 * - Phase 2: awards, promotions
 * - Phase 3: bridging
 * - Phase 4: pay, life-events, records, personnel, readiness, discipline
 * - Phase 5: career, wellness
 */

export type LeaderIcon =
  | "MessageSquare"
  | "Users"
  | "FileText"
  | "ClipboardList"
  | "AlertCircle"
  | "Heart"
  | "DollarSign"
  | "Award"
  | "TrendingUp"
  | "Target"
  | "Workflow"
  | "ShieldAlert"
  | "Briefcase"
  | "BookOpen"
  | "Compass"
  | "ListChecks"
  | "Eye"
  | "Calendar"
  | "FileSearch"
  | "Plane"
  | "Map";

export interface LeaderCategory {
  /** Globally unique key inside this registry. Example: "pe-overview". */
  slug: string;
  /** URL segment matching the MDX `slug` frontmatter. Example: "overview". */
  leafSlug: string;
  /** Parent group slug, matching the MDX `topic` frontmatter. */
  parentGroup: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: LeaderIcon;
  /**
   * Optional subtype for visual grouping on the topic landing page.
   * When present, the topic page renders leaves clustered by subtype.
   * Leaves without a subtype render in a default group at the top.
   */
  subtype?: string;
}

export interface LeaderParentGroup {
  /** Slug used as the URL segment and matching the MDX `topic` frontmatter. */
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: LeaderIcon;
  /** Slugs of LeaderCategory entries grouped under this parent. */
  children: string[];
}

// =============================================================================
// LEADER_CATEGORIES - leaf level
// =============================================================================
export const LEADER_CATEGORIES: LeaderCategory[] = [
  // --- Counseling leaves ---
  {
    slug: "counseling-overview",
    leafSlug: "overview",
    parentGroup: "counseling",
    label: "Counseling Overview",
    shortLabel: "Overview",
    description:
      "The four leader actions, the eight mandatory occasions, the six functional areas. Per MCO 1500.61.",
    icon: "BookOpen",
  },
  {
    slug: "six-functional-areas",
    leafSlug: "six-functional-areas",
    parentGroup: "counseling",
    label: "Six Functional Areas",
    shortLabel: "Six F's",
    description:
      "Fidelity, Fighter, Fitness, Family, Finances, Future. Per MCO 1500.61 paragraph 4.a.(2)(d).",
    icon: "Compass",
  },
  {
    slug: "initial-session",
    leafSlug: "initial-session",
    parentGroup: "counseling",
    label: "Initial Counseling Session",
    shortLabel: "Initial Session",
    description:
      "Hold the ICS within 30 days of any new senior or junior relationship. Per NAVMC 2795.",
    icon: "Calendar",
  },
  {
    slug: "cadence-and-events",
    leafSlug: "cadence-and-events",
    parentGroup: "counseling",
    label: "Cadence and Events",
    shortLabel: "Cadence",
    description:
      "Cpl through Col every 6 months. L/Cpl every 30 days. Reservists every 3 months and AT.",
    icon: "Calendar",
  },
  {
    slug: "counseling-styles",
    leafSlug: "styles",
    parentGroup: "counseling",
    label: "Counseling Styles",
    shortLabel: "Styles",
    description: "Directive, nondirective, collaborative. When to use each.",
    icon: "MessageSquare",
  },
  {
    slug: "setting-targets",
    leafSlug: "setting-targets",
    parentGroup: "counseling",
    label: "Setting Targets",
    shortLabel: "Targets",
    description:
      "Action verb, object, standard. Three to five per session, tied to the six F's.",
    icon: "Target",
  },
  {
    slug: "smart-goals",
    leafSlug: "smart-goals",
    parentGroup: "counseling",
    label: "SMART Goals",
    shortLabel: "SMART",
    description:
      "Specific, Measurable, Achievable, Relevant, Time-bound. The mission-order sentence.",
    icon: "Target",
  },
  {
    slug: "listening-and-feedback",
    leafSlug: "listening-and-feedback",
    parentGroup: "counseling",
    label: "Listening and Feedback",
    shortLabel: "Listening",
    description: "Six question types, active listening, four feedback rules.",
    icon: "MessageSquare",
  },
  {
    slug: "avoiding-pitfalls",
    leafSlug: "avoiding-pitfalls",
    parentGroup: "counseling",
    label: "Avoiding Pitfalls",
    shortLabel: "Pitfalls",
    description: "Junior and senior pitfalls, the pre-session self-check.",
    icon: "AlertCircle",
  },
  // --- Performance Evaluation leaves ---
  {
    slug: "pe-overview",
    leafSlug: "overview",
    parentGroup: "performance-evaluation",
    label: "Performance Evaluation Overview",
    shortLabel: "PE Overview",
    description:
      "JEPES for the junior enlisted tier, FitRep for SNCO and officer. Two systems, one section.",
    icon: "BookOpen",
  },
  {
    slug: "jepes",
    leafSlug: "jepes",
    parentGroup: "performance-evaluation",
    label: "JEPES for Junior Enlisted",
    shortLabel: "JEPES",
    description:
      "Replaced Pro and Con marks for E-1 through E-5. Section leader and NCO write the evaluation.",
    icon: "TrendingUp",
  },
  {
    slug: "jepes-conducting",
    leafSlug: "jepes-conducting",
    parentGroup: "performance-evaluation",
    label: "Conducting a JEPES Evaluation",
    shortLabel: "Conducting JEPES",
    description:
      "Score against anchors, sit with the Marine, set targets, submit through APES.",
    icon: "ListChecks",
  },
  {
    slug: "fitrep-cycle",
    leafSlug: "fitrep-cycle",
    parentGroup: "performance-evaluation",
    label: "FitRep Cycle",
    shortLabel: "FitRep Cycle",
    description:
      "Annual reports plus event-driven occasionals. RS and RO and MRO relationships.",
    icon: "Calendar",
  },
  {
    slug: "rs-mechanics",
    leafSlug: "rs-mechanics",
    parentGroup: "performance-evaluation",
    label: "RS Mechanics",
    shortLabel: "RS",
    description:
      "Reporting Senior writes Section H, attribute marks, narrative, comparative assessment.",
    icon: "FileText",
  },
  {
    slug: "ro-mechanics",
    leafSlug: "ro-mechanics",
    parentGroup: "performance-evaluation",
    label: "RO Mechanics",
    shortLabel: "RO",
    description:
      "Reviewing Officer concurs, non-concurs, or addendums. Read every word.",
    icon: "Eye",
  },
  {
    slug: "adverse-fitrep",
    leafSlug: "adverse-fitrep",
    parentGroup: "performance-evaluation",
    label: "Adverse FitRep Handling",
    shortLabel: "Adverse",
    description:
      "Notification, statement opportunity, procedural overlay you cannot skip.",
    icon: "AlertCircle",
  },
  {
    slug: "apes-administration",
    leafSlug: "apes-administration",
    parentGroup: "performance-evaluation",
    label: "APES Administration",
    shortLabel: "APES",
    description:
      "Account setup, MRO list discipline, draft hygiene, submission tracking.",
    icon: "FileSearch",
  },
  // --- Awards leaves ---
  {
    slug: "awards-overview",
    leafSlug: "overview",
    parentGroup: "awards",
    label: "Awards Overview",
    shortLabel: "Overview",
    description:
      "The system per MCO P1650.19J. Leader's four jobs: spot, draft, route, verify.",
    icon: "BookOpen",
  },
  {
    slug: "awards-drafting-narrative",
    leafSlug: "drafting-narrative",
    parentGroup: "awards",
    label: "Drafting the Award Narrative",
    shortLabel: "Drafting",
    description:
      "Three-part structure. SAR statements with specific events, actions, results. Strong verbs, real numbers.",
    icon: "FileText",
  },
  {
    slug: "awards-choosing-the-award",
    leafSlug: "choosing-the-award",
    parentGroup: "awards",
    label: "Choosing the Right Award",
    shortLabel: "Choosing",
    description:
      "NAM for achievement, NCM for sustained superior, MSM for exceptional sustained. Tier matching.",
    icon: "Target",
  },
  {
    slug: "awards-routing-and-endorsements",
    leafSlug: "routing-and-endorsements",
    parentGroup: "awards",
    label: "Routing and Endorsements",
    shortLabel: "Routing",
    description:
      "Originator, first endorser, subsequent endorsers, approving authority. Tracking each leg to approval.",
    icon: "Workflow",
  },
  {
    slug: "awards-end-of-tour-timing",
    leafSlug: "end-of-tour-timing",
    parentGroup: "awards",
    label: "End-of-Tour Timing",
    shortLabel: "EOT Timing",
    description:
      "PCS triggers the recognition. Submit at 90 days, route, ceremony before sign-out. Recovery moves when late.",
    icon: "Calendar",
  },
  {
    slug: "awards-unit-awards",
    leafSlug: "unit-awards",
    parentGroup: "awards",
    label: "Unit and Collateral Awards",
    shortLabel: "Unit Awards",
    description:
      "PUC, MUC, NUC, JMUA, MOVSM, joint awards, foreign awards. Eligibility and documentation.",
    icon: "Award",
  },
  {
    slug: "awards-combat-action-ribbon",
    leafSlug: "combat-action-ribbon",
    parentGroup: "awards",
    label: "Combat Action Ribbon",
    shortLabel: "CAR",
    description:
      "Active engagement criteria. NAVMC 11533 template. Witness statements and after-action documentation.",
    icon: "ShieldAlert",
  },
  {
    slug: "awards-ompf-verification",
    leafSlug: "ompf-verification",
    parentGroup: "awards",
    label: "OMPF Award Verification",
    shortLabel: "Verification",
    description:
      "60-day post-ceremony verification on Marine Online. Catching entry errors before the next promotion board.",
    icon: "FileSearch",
  },
  {
    slug: "awards-citation-mechanics",
    leafSlug: "citation-mechanics",
    parentGroup: "awards",
    label: "Citation and Certificate Mechanics",
    shortLabel: "Citation",
    description:
      "Tier-specific citation format (Table 17 vs Table 20), the two closing sentence formats, the pre-routing review checklist, certificate production and signature rules.",
    icon: "FileText",
  },
  {
    slug: "bridging-overview",
    leafSlug: "overview",
    parentGroup: "bridging",
    label: "Bridging Overview",
    shortLabel: "Overview",
    description:
      "Walk versus send, build the package, follow up to closure.",
    icon: "BookOpen",
  },
  {
    slug: "bridging-when-to-walk",
    leafSlug: "when-to-walk",
    parentGroup: "bridging",
    label: "When to Walk",
    shortLabel: "When to Walk",
    description:
      "Walk for life events, first packages, complex problems. Send for routine.",
    icon: "Workflow",
  },
  {
    slug: "bridging-package-checklist",
    leafSlug: "package-checklist",
    parentGroup: "bridging",
    label: "Package Checklist",
    shortLabel: "Checklist",
    description:
      "Required documents per package type. Originals versus photocopies.",
    icon: "ListChecks",
  },
  {
    slug: "bridging-processing-timelines",
    leafSlug: "processing-timelines",
    parentGroup: "bridging",
    label: "Processing Timelines",
    shortLabel: "Timelines",
    description:
      "Standard PAC windows. Brief honestly, follow up at day 7, escalate at day 14.",
    icon: "Calendar",
  },
  {
    slug: "bridging-follow-up-cadence",
    leafSlug: "follow-up-cadence",
    parentGroup: "bridging",
    label: "Follow-Up Cadence",
    shortLabel: "Follow-Up",
    description:
      "Three-touch cadence after handoff. Tracker discipline.",
    icon: "Calendar",
  },
  {
    slug: "bridging-escalation-paths",
    leafSlug: "escalation-paths",
    parentGroup: "bridging",
    label: "Escalation Paths",
    shortLabel: "Escalation",
    description:
      "Named contact, S-1 chief, battalion S-1, chain.",
    icon: "AlertCircle",
  },
  {
    slug: "personnel-new-marine-integration",
    leafSlug: "new-marine-integration",
    parentGroup: "personnel",
    label: "New Marine Integration",
    shortLabel: "Integration",
    description:
      "First 90 days at the new section. Welcome, integration, expectations.",
    icon: "Users",
  },
  {
    slug: "personnel-unsat-participation-counseling",
    leafSlug: "unsat-participation-counseling",
    parentGroup: "personnel",
    label: "Unsat Participation Counseling",
    shortLabel: "Unsat Participation",
    description:
      "Reserve unsatisfactory participation documentation and routing.",
    icon: "AlertCircle",
  },
  {
    slug: "personnel-sponsor-program",
    leafSlug: "sponsor-program",
    parentGroup: "personnel",
    label: "Sponsor Program Ownership",
    shortLabel: "Sponsor",
    description:
      "Inbound Marine sponsor assignment, brief, follow-up. Per MCO 1320.11H.",
    icon: "Users",
  },
  {
    slug: "personnel-mentorship-pairing",
    leafSlug: "mentorship-pairing",
    parentGroup: "personnel",
    label: "Mentorship Pairing",
    shortLabel: "Mentorship",
    description:
      "Voluntary mentor relationships. Curate, do not assign.",
    icon: "Users",
  },
  {
    slug: "personnel-force-preservation-referral",
    leafSlug: "force-preservation-referral",
    parentGroup: "personnel",
    label: "Force Preservation Referral",
    shortLabel: "Force Preservation",
    description:
      "Referral to the Force Preservation Council per MCO 1500.60.",
    icon: "ShieldAlert",
  },
  {
    slug: "personnel-section-leader-orientation",
    leafSlug: "section-leader-orientation",
    parentGroup: "personnel",
    label: "Section Leader Self-Orientation",
    shortLabel: "Section Orientation",
    description:
      "First 30 days when you take over a section.",
    icon: "ListChecks",
  },
  {
    slug: "records-promotion-board-prep",
    leafSlug: "promotion-board-prep",
    parentGroup: "records",
    label: "Promotion Board Records Prep",
    shortLabel: "Board Prep",
    description:
      "Records audit before a promotion board cut-off.",
    icon: "FileText",
  },
  {
    slug: "records-section-records-audit",
    leafSlug: "section-records-audit",
    parentGroup: "records",
    label: "Section Records Audit",
    shortLabel: "Records Audit",
    description:
      "Section-level records review cadence.",
    icon: "FileSearch",
  },
  {
    slug: "records-mctfs-review",
    leafSlug: "mctfs-review",
    parentGroup: "records",
    label: "MCTFS Review Oversight",
    shortLabel: "MCTFS",
    description:
      "Quarterly MCTFS audit of section Marines.",
    icon: "FileText",
  },
  {
    slug: "records-ompf-audit-walkthrough",
    leafSlug: "ompf-audit-walkthrough",
    parentGroup: "records",
    label: "OMPF Audit Walkthrough",
    shortLabel: "OMPF Audit",
    description:
      "Annual OMPF review on Marine Online.",
    icon: "FileSearch",
  },
  {
    slug: "records-awards-records-cleanup",
    leafSlug: "awards-records-cleanup",
    parentGroup: "records",
    label: "Awards Records Cleanup",
    shortLabel: "Awards Cleanup",
    description:
      "Inherited records cleanup before boards or transition.",
    icon: "Award",
  },
  {
    slug: "records-cadence",
    leafSlug: "cadence",
    parentGroup: "records",
    label: "Section Records Cadence",
    shortLabel: "Cadence",
    description:
      "Quarterly, annual, trigger-based, and pre-board audit rhythms.",
    icon: "Calendar",
  },
  {
    slug: "readiness-at-section-planning",
    leafSlug: "at-section-planning",
    parentGroup: "readiness",
    label: "AT Section Planning",
    shortLabel: "AT Planning",
    description:
      "Reserve Annual Training section preparation.",
    icon: "ClipboardList",
  },
  {
    slug: "readiness-pre-deployment-section",
    leafSlug: "pre-deployment-section",
    parentGroup: "readiness",
    label: "Pre-Deployment Section Readiness",
    shortLabel: "Pre-Deployment",
    description:
      "Five-domain readiness audit and gap closure.",
    icon: "ClipboardList",
  },
  {
    slug: "readiness-medical-dental",
    leafSlug: "medical-dental",
    parentGroup: "readiness",
    label: "Medical and Dental Readiness",
    shortLabel: "Medical/Dental",
    description:
      "Monthly section MRC and Dental Class tracking.",
    icon: "Heart",
  },
  {
    slug: "readiness-training-requirements",
    leafSlug: "training-requirements",
    parentGroup: "readiness",
    label: "Training Requirements",
    shortLabel: "Training",
    description:
      "MOS proficiency, annual mandatory, PME, deployment-specific tracking.",
    icon: "ListChecks",
  },
  {
    slug: "readiness-family-readiness",
    leafSlug: "family-readiness",
    parentGroup: "readiness",
    label: "Family Readiness Audit",
    shortLabel: "Family Readiness",
    description:
      "Family Care Plans, RED-S, EFMP, deployment briefings.",
    icon: "Heart",
  },
  {
    slug: "readiness-red-s-currency",
    leafSlug: "red-s-currency",
    parentGroup: "readiness",
    label: "RED-S Currency",
    shortLabel: "RED-S",
    description:
      "Annual and trigger-based RED-S verification.",
    icon: "FileText",
  },
  {
    slug: "discipline-pre-njp-counseling",
    leafSlug: "pre-njp-counseling",
    parentGroup: "discipline",
    label: "Pre-NJP Counseling",
    shortLabel: "Pre-NJP",
    description:
      "Documentation pattern before NJP. Per MCO P5800.16.",
    icon: "AlertCircle",
  },
  {
    slug: "discipline-page-11-counseling",
    leafSlug: "page-11-counseling",
    parentGroup: "discipline",
    label: "Page 11 Counseling Process",
    shortLabel: "Page 11",
    description:
      "Page 11 entry process per IRAM.",
    icon: "FileText",
  },
  {
    slug: "discipline-witness-statements",
    leafSlug: "witness-statements",
    parentGroup: "discipline",
    label: "Witness Statement Collection",
    shortLabel: "Witness Statements",
    description:
      "Collect within 72 hours, structured format, file with package.",
    icon: "FileText",
  },
  {
    slug: "discipline-article-31-advisory",
    leafSlug: "article-31-advisory",
    parentGroup: "discipline",
    label: "Article 31 Advisory",
    shortLabel: "Article 31",
    description:
      "Rights advisory before questioning a suspect Marine.",
    icon: "AlertCircle",
  },
  {
    slug: "discipline-post-njp-documentation",
    leafSlug: "post-njp-documentation",
    parentGroup: "discipline",
    label: "Post-NJP Documentation",
    shortLabel: "Post-NJP",
    description:
      "Page 11, OMPF entry, post-NJP counseling, behavior tracking.",
    icon: "FileText",
  },
  {
    slug: "life-events-family-docs-coaching",
    leafSlug: "family-docs-coaching",
    parentGroup: "life-events",
    label: "Family Docs Coaching",
    shortLabel: "Family Docs",
    description:
      "NAVMC 10922 inside the 10-working-day window.",
    icon: "Heart",
  },
  {
    slug: "life-events-marriage-walkthrough",
    leafSlug: "marriage-walkthrough",
    parentGroup: "life-events",
    label: "Marriage Walkthrough",
    shortLabel: "Marriage",
    description:
      "DEERS, BAH, ID, NAVMC 10922. Pre-wedding brief and post sequence.",
    icon: "Heart",
  },
  {
    slug: "life-events-birth-adoption-walkthrough",
    leafSlug: "birth-adoption-walkthrough",
    parentGroup: "life-events",
    label: "Birth and Adoption Walkthrough",
    shortLabel: "Birth/Adoption",
    description:
      "Prenatal brief, SSN at hospital, NAVMC 10922, parental leave.",
    icon: "Heart",
  },
  {
    slug: "life-events-divorce-custody",
    leafSlug: "divorce-custody",
    parentGroup: "life-events",
    label: "Divorce and Custody Coaching",
    shortLabel: "Divorce/Custody",
    description:
      "Wait for final decree, then BAH, DEERS, SGLI, RED-S.",
    icon: "Heart",
  },
  {
    slug: "life-events-bereavement",
    leafSlug: "bereavement",
    parentGroup: "life-events",
    label: "Bereavement Coaching",
    shortLabel: "Bereavement",
    description:
      "Lead with care, then leave, NAVMC 10922 if applicable, long tail.",
    icon: "Heart",
  },
  {
    slug: "life-events-efmp-coordination",
    leafSlug: "efmp-coordination",
    parentGroup: "life-events",
    label: "EFMP Coordination",
    shortLabel: "EFMP",
    description:
      "Surface eligibility, coordinate enrollment, verify chain awareness.",
    icon: "Heart",
  },
  {
    slug: "pay-coaching-marines-on-pay",
    leafSlug: "coaching-marines-on-pay",
    parentGroup: "pay",
    label: "Coaching Marines on Pay",
    shortLabel: "Coaching",
    description:
      "LES literacy and self-verification habit.",
    icon: "DollarSign",
  },
  {
    slug: "pay-bah-error-catch",
    leafSlug: "bah-error-catch",
    parentGroup: "pay",
    label: "BAH Error Catch",
    shortLabel: "BAH Errors",
    description:
      "Quarterly LES audit against MCTFS. Walk corrections to S-1.",
    icon: "DollarSign",
  },
  {
    slug: "pay-allotment-review",
    leafSlug: "allotment-review",
    parentGroup: "pay",
    label: "Allotment Review",
    shortLabel: "Allotments",
    description:
      "Annual allotment audit. Discontinue dead allotments.",
    icon: "DollarSign",
  },
  {
    slug: "pay-gtcc-delinquency",
    leafSlug: "gtcc-delinquency",
    parentGroup: "pay",
    label: "GTCC Delinquency Intervention",
    shortLabel: "GTCC",
    description:
      "Spot delinquency early. Brief, coordinate, restore.",
    icon: "DollarSign",
  },
  {
    slug: "pay-pay-problems-escort",
    leafSlug: "pay-problems-escort",
    parentGroup: "pay",
    label: "Pay Problems Escort",
    shortLabel: "Pay Problems",
    description:
      "Walk Marines to S-1 with documentation for pay corrections.",
    icon: "DollarSign",
  },
  {
    slug: "pay-special-pay-verification",
    leafSlug: "special-pay-verification",
    parentGroup: "pay",
    label: "Special Pay Verification",
    shortLabel: "Special Pays",
    description:
      "Verify start, stop, and continuing eligibility for special pays.",
    icon: "DollarSign",
  },
  {
    slug: "career-overview",
    leafSlug: "overview",
    parentGroup: "career",
    label: "Career Coaching Overview",
    shortLabel: "Overview",
    description:
      "Reenlistment, lateral move, transition, education, credential conversations.",
    icon: "Briefcase",
  },
  {
    slug: "career-reenlistment-conversation",
    leafSlug: "reenlistment-conversation",
    parentGroup: "career",
    label: "Reenlistment Conversation",
    shortLabel: "Reenlistment",
    description:
      "FTAP and STAP windows. 18, 12, 6 month conversations.",
    icon: "Briefcase",
  },
  {
    slug: "career-lateral-move-advising",
    leafSlug: "lateral-move-advising",
    parentGroup: "career",
    label: "Lateral Move Advising",
    shortLabel: "Lateral Move",
    description:
      "Spot the candidate, coordinate the package, support the transition.",
    icon: "Workflow",
  },
  {
    slug: "career-transition-timeline",
    leafSlug: "transition-timeline",
    parentGroup: "career",
    label: "Transition Timeline",
    shortLabel: "Transition",
    description:
      "24, 12, 6 month touchpoints alongside formal TRP at 365 days.",
    icon: "Calendar",
  },
  {
    slug: "career-education-planning",
    leafSlug: "education-planning",
    parentGroup: "career",
    label: "Education Planning",
    shortLabel: "Education",
    description:
      "TA, GI Bill, MarineNet, MCU, COOL credentials.",
    icon: "BookOpen",
  },
  {
    slug: "career-civilian-credential-matching",
    leafSlug: "civilian-credential-matching",
    parentGroup: "career",
    label: "Civilian Credential Matching",
    shortLabel: "Credentials",
    description:
      "Map MOS skills to civilian credentials. Pursue during service.",
    icon: "Award",
  },
  {
    slug: "wellness-overview",
    leafSlug: "overview",
    parentGroup: "wellness",
    label: "Wellness Overview",
    shortLabel: "Overview",
    description:
      "Spot, route, follow up. Indicators upstream of crisis.",
    icon: "ShieldAlert",
  },
  {
    slug: "wellness-financial-distress",
    leafSlug: "financial-distress",
    parentGroup: "wellness",
    label: "Financial Distress",
    shortLabel: "Financial",
    description:
      "Indicators, conversation, resources, coordination.",
    icon: "DollarSign",
  },
  {
    slug: "wellness-mental-health-risk",
    leafSlug: "mental-health-risk",
    parentGroup: "wellness",
    label: "Mental Health Risk",
    shortLabel: "Mental Health",
    description:
      "Indicators, direct question, resource, immediate engagement for acute.",
    icon: "AlertCircle",
  },
  {
    slug: "wellness-fraternization-risk",
    leafSlug: "fraternization-risk",
    parentGroup: "wellness",
    label: "Fraternization Risk Recognition",
    shortLabel: "Fraternization",
    description:
      "Spot patterns, address early, escalate when needed. Per MCO 1700.32.",
    icon: "AlertCircle",
  },
  {
    slug: "wellness-command-climate-flags",
    leafSlug: "command-climate-flags",
    parentGroup: "wellness",
    label: "Command Climate Flags",
    shortLabel: "Climate",
    description:
      "Section-level patterns surface to chain. Survey coordination.",
    icon: "Eye",
  },
  {
    slug: "wellness-routing-resources",
    leafSlug: "routing-resources",
    parentGroup: "wellness",
    label: "Routing Resources Map",
    shortLabel: "Resources",
    description:
      "Comprehensive resource list and confidentiality notes.",
    icon: "ListChecks",
  },
  {
    slug: "pay-secondary-dependency",
    leafSlug: "secondary-dependency",
    parentGroup: "pay",
    label: "Secondary Dependency Recertification",
    shortLabel: "Secondary Dep",
    description:
      "Annual BAH recertification, quadrennial USIP redetermination, the 90-day pre-expiration submission window. Per 37 USC 403 and DFAS rules.",
    icon: "DollarSign",
  },
  // --- Travel leaves ---
  {
    slug: "travel-overview",
    leafSlug: "overview",
    parentGroup: "travel",
    label: "Travel Oversight Overview",
    shortLabel: "Overview",
    description:
      "PCS and TAD lifecycle through orders, DTS, GTCC, JTR. Spot, brief, escort, audit.",
    icon: "BookOpen",
  },
  {
    slug: "travel-pcs-coaching",
    leafSlug: "pcs-coaching",
    parentGroup: "travel",
    label: "PCS Coaching from Orders to Sign-Out",
    shortLabel: "PCS Coaching",
    description:
      "180-day timeline. Sponsor 10-day rule. HHG, POV, DLA, TLE, advance pay. Sign-in within 30 days.",
    icon: "Map",
  },
  {
    slug: "travel-tad-coaching",
    leafSlug: "tad-coaching",
    parentGroup: "travel",
    label: "TAD Coaching",
    shortLabel: "TAD Coaching",
    description:
      "Pre-trip brief, DTS authorization, GTCC posture, voucher within 5 working days of return.",
    icon: "Plane",
  },
  {
    slug: "travel-dts-oversight",
    leafSlug: "dts-oversight",
    parentGroup: "travel",
    label: "DTS Oversight",
    shortLabel: "DTS",
    description:
      "Profile setup, group routing, authorization defaults, DTS check-out at PCS.",
    icon: "Workflow",
  },
  {
    slug: "travel-gtcc-use",
    leafSlug: "gtcc-use",
    parentGroup: "travel",
    label: "GTCC During Travel",
    shortLabel: "GTCC",
    description:
      "Proper use, split disbursement default, what GTCC covers, NJP exposure for misuse.",
    icon: "DollarSign",
  },
  {
    slug: "travel-voucher-audit",
    leafSlug: "voucher-audit",
    parentGroup: "travel",
    label: "Section Voucher Audit",
    shortLabel: "Voucher Audit",
    description:
      "Pre-AO audit. 5-day traveler rule. 3-day AO settlement. Receipts, lodging cap, common rejections.",
    icon: "FileSearch",
  },
  {
    slug: "travel-claim-disputes",
    leafSlug: "claim-disputes",
    parentGroup: "travel",
    label: "Travel Claim Disputes",
    shortLabel: "Disputes",
    description:
      "When the voucher pays wrong. Walk to S-1 with documentation. DFAS dispute path.",
    icon: "AlertCircle",
  },
  {
    slug: "travel-ao-role",
    leafSlug: "approving-officer-role",
    parentGroup: "travel",
    label: "Approving Officer Mechanics",
    shortLabel: "AO Role",
    description:
      "AO grade requirement. Pecuniary liability. The AO checklist. Common AO failures.",
    icon: "ShieldAlert",
  },
];

export function findLeaderCategory(slug: string): LeaderCategory | undefined {
  return LEADER_CATEGORIES.find((c) => c.slug === slug);
}

// =============================================================================
// LEADER_PARENT_GROUPS - landing-page level
// =============================================================================
export const LEADER_PARENT_GROUPS: LeaderParentGroup[] = [
  {
    slug: "counseling",
    label: "Counseling",
    shortLabel: "Counseling",
    description:
      "The four leader actions, the eight mandatory occasions, the six functional areas, session mechanics, target setting, SMART goals, listening and feedback, and the pitfalls. Per MCO 1500.61 and NAVMC 2795.",
    icon: "MessageSquare",
    children: [
      "counseling-overview",
      "six-functional-areas",
      "initial-session",
      "cadence-and-events",
      "counseling-styles",
      "setting-targets",
      "smart-goals",
      "listening-and-feedback",
      "avoiding-pitfalls",
    ],
  },
  {
    slug: "performance-evaluation",
    label: "Performance Evaluation",
    shortLabel: "Performance",
    description:
      "JEPES for the junior enlisted tier. FitRep cycle for SNCO and officer. RS and RO mechanics. Adverse reports. APES administration.",
    icon: "TrendingUp",
    children: [
      "pe-overview",
      "jepes",
      "jepes-conducting",
      "fitrep-cycle",
      "rs-mechanics",
      "ro-mechanics",
      "adverse-fitrep",
      "apes-administration",
    ],
  },
  {
    slug: "awards",
    label: "Awards",
    shortLabel: "Awards",
    description:
      "Drafting the narrative, weighing NAM versus NCM versus MSM, routing the endorsement chain, end-of-tour timeline, OMPF verification. Per MCO P1650.19J.",
    icon: "Award",
    children: [
      "awards-overview",
      "awards-drafting-narrative",
      "awards-choosing-the-award",
      "awards-routing-and-endorsements",
      "awards-end-of-tour-timing",
      "awards-unit-awards",
      "awards-combat-action-ribbon",
      "awards-ompf-verification",
      "awards-citation-mechanics",
    ],
  },
  {
    slug: "promotions",
    label: "Promotion Coaching",
    shortLabel: "Promotions",
    description:
      "PME tracking, OBLISERV check, APES audit before board, SNCO board prep, junior enlisted promotion mechanics, warrant ceremonies, delays and revocations.",
    icon: "Target",
    children: [],
  },
  {
    slug: "personnel",
    label: "Personnel Leadership",
    shortLabel: "Personnel",
    description:
      "New Marine integration, sponsor program ownership, unsatisfactory participation counseling, mentorship pairing. Per MCO 5000.14D and IRAM.",
    icon: "Users",
    children: [
      "personnel-new-marine-integration",
      "personnel-sponsor-program",
      "personnel-mentorship-pairing",
      "personnel-section-leader-orientation",
      "personnel-unsat-participation-counseling",
      "personnel-force-preservation-referral",
    ],
  },
  {
    slug: "records",
    label: "Records Verification",
    shortLabel: "Records",
    description:
      "Section records audit cadence, MCTFS review oversight, OMPF audit walkthrough, promotion board records prep. Catching errors before they hurt a Marine.",
    icon: "FileText",
    children: [
      "records-section-records-audit",
      "records-cadence",
      "records-mctfs-review",
      "records-ompf-audit-walkthrough",
      "records-promotion-board-prep",
      "records-awards-records-cleanup",
    ],
  },
  {
    slug: "readiness",
    label: "Section Readiness",
    shortLabel: "Readiness",
    description:
      "Annual Training section planning, pre-deployment readiness, medical and dental tracking, training requirements, family readiness audits, RED-S currency.",
    icon: "ClipboardList",
    children: [
      "readiness-at-section-planning",
      "readiness-pre-deployment-section",
      "readiness-medical-dental",
      "readiness-training-requirements",
      "readiness-family-readiness",
      "readiness-red-s-currency",
    ],
  },
  {
    slug: "discipline",
    label: "Discipline Coaching",
    shortLabel: "Discipline",
    description:
      "Pre-NJP counseling and documentation, Page 11 entries, witness statement collection, Article 31 advisory. Per MCO P5800.16.",
    icon: "AlertCircle",
    children: [
      "discipline-pre-njp-counseling",
      "discipline-page-11-counseling",
      "discipline-witness-statements",
      "discipline-article-31-advisory",
      "discipline-post-njp-documentation",
    ],
  },
  {
    slug: "life-events",
    label: "Life Events Coaching",
    shortLabel: "Life Events",
    description:
      "Marriage, birth, divorce, custody changes, dependent loss, EFMP coordination. NAVMC 10922 inside the 10-working-day window.",
    icon: "Heart",
    children: [
      "life-events-family-docs-coaching",
      "life-events-marriage-walkthrough",
      "life-events-birth-adoption-walkthrough",
      "life-events-divorce-custody",
      "life-events-bereavement",
      "life-events-efmp-coordination",
    ],
  },
  {
    slug: "pay",
    label: "Pay Oversight",
    shortLabel: "Pay",
    description:
      "LES coaching, BAH error catch, allotment review, GTCC delinquency intervention, pay problems escort to S-1.",
    icon: "DollarSign",
    children: [
      "pay-coaching-marines-on-pay",
      "pay-bah-error-catch",
      "pay-allotment-review",
      "pay-gtcc-delinquency",
      "pay-pay-problems-escort",
      "pay-special-pay-verification",
      "pay-secondary-dependency",
    ],
  },
  {
    slug: "travel",
    label: "Travel Oversight",
    shortLabel: "Travel",
    description:
      "PCS and TAD coaching. DTS and GTCC system oversight. Voucher audit, claim disputes, AO role. Per JTR, MCO 4650.39A, MCO 1320.11H.",
    icon: "Plane",
    children: [
      "travel-ao-role",
      "travel-dts-oversight",
      "travel-gtcc-use",
      "travel-pcs-coaching",
      "travel-voucher-audit",
      "travel-tad-coaching",
      "travel-claim-disputes",
      "travel-overview",
    ],
  },
  {
    slug: "bridging",
    label: "Bridging to S-1 and PAC",
    shortLabel: "S-1 and PAC",
    description:
      "When to walk a Marine versus send them. Required document set per package. PAC processing timelines. Follow-up cadence. Escalation when S-1 says no.",
    icon: "Workflow",
    children: [
      "bridging-overview",
      "bridging-when-to-walk",
      "bridging-package-checklist",
      "bridging-processing-timelines",
      "bridging-follow-up-cadence",
      "bridging-escalation-paths",
    ],
  },
  {
    slug: "career",
    label: "Career Coaching",
    shortLabel: "Career",
    description:
      "Reenlistment under FTAP and STAP, lateral move advising, transition timeline at 24/12/6 months, education planning, civilian credential matching.",
    icon: "Briefcase",
    children: [
      "career-overview",
      "career-reenlistment-conversation",
      "career-lateral-move-advising",
      "career-transition-timeline",
      "career-education-planning",
      "career-civilian-credential-matching",
    ],
  },
  {
    slug: "wellness",
    label: "Force Preservation and Wellness",
    shortLabel: "Wellness",
    description:
      "Recognizing financial distress, mental health risk, fraternization risk, command climate red flags. Routing to chaplain, behavioral health, DAPA.",
    icon: "ShieldAlert",
    children: [
      "wellness-overview",
      "wellness-financial-distress",
      "wellness-mental-health-risk",
      "wellness-fraternization-risk",
      "wellness-command-climate-flags",
      "wellness-routing-resources",
    ],
  },
];

export function findLeaderParentGroup(
  slug: string
): LeaderParentGroup | undefined {
  return LEADER_PARENT_GROUPS.find((g) => g.slug === slug);
}

/**
 * Returns the LeaderCategory entries belonging to a parent group, in the
 * order specified by the group's children array.
 */
export function getCategoriesForLeaderGroup(
  groupSlug: string
): LeaderCategory[] {
  const group = findLeaderParentGroup(groupSlug);
  if (!group) return [];
  return group.children
    .map((s) => findLeaderCategory(s))
    .filter((c): c is LeaderCategory => c !== undefined);
}

/**
 * Returns the parent group a given category belongs to.
 */
export function findParentGroupForLeaderCategory(
  categorySlug: string
): LeaderParentGroup | undefined {
  return LEADER_PARENT_GROUPS.find((g) => g.children.includes(categorySlug));
}
