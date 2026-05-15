/**
 * Commander recurring obligations registry.
 *
 * Defines every recurring obligation a Battalion or Squadron Commander
 * carries across monthly, quarterly, annual, multi-year, and event-driven
 * cadences. Used by the compliance dashboard at /commander/dashboard.
 *
 * Each obligation has:
 *   - id: stable identifier
 *   - title: short, action-oriented label
 *   - cadence: one of the five categories
 *   - authority: source MCO, MARADMIN, DoDI, or other reference
 *   - detailLink: route to the portal page covering the obligation
 *   - description: one-sentence operational summary
 *   - nonDelegable: true when MCO explicitly prohibits substitution
 *   - nextDeadline: optional function returning the next deadline date
 *                   given today, for obligations with a fixed annual window
 *
 * The dashboard is a static reference. User-provided state (last-completed
 * dates per obligation) is a future iteration. Today the dashboard surfaces
 * the obligations themselves with calendar-aware reminders for the items
 * that have a fixed annual window.
 */

export type ObligationCadence =
  | "monthly"
  | "quarterly"
  | "annual"
  | "multi-year"
  | "event-driven";

export interface Obligation {
  id: string;
  title: string;
  cadence: ObligationCadence;
  authority: string;
  detailLink: string;
  description: string;
  nonDelegable?: boolean;
  /**
   * For obligations with a fixed annual window or deadline, return the next
   * deadline date based on the provided "today". Returns null when the
   * obligation has no fixed-calendar deadline (most monthly and event-driven
   * items fall into this category).
   */
  nextDeadline?: (today: Date) => Date | null;
}

/**
 * Returns the next occurrence of a fixed annual date (month is 0-indexed
 * per JavaScript Date convention). If the date for the current year has
 * already passed, returns next year's date.
 */
function nextAnnual(today: Date, month: number, day: number): Date {
  const thisYear = new Date(today.getFullYear(), month, day);
  if (thisYear >= today) return thisYear;
  return new Date(today.getFullYear() + 1, month, day);
}

/**
 * Returns the next end-of-quarter date (Mar 31, Jun 30, Sep 30, Dec 31).
 */
function nextQuarterEnd(today: Date): Date {
  const y = today.getFullYear();
  const candidates = [
    new Date(y, 2, 31), // Mar 31
    new Date(y, 5, 30), // Jun 30
    new Date(y, 8, 30), // Sep 30
    new Date(y, 11, 31), // Dec 31
  ];
  for (const c of candidates) {
    if (c >= today) return c;
  }
  return new Date(y + 1, 2, 31);
}

/**
 * Returns the next end-of-month date.
 */
function nextMonthEnd(today: Date): Date {
  const y = today.getFullYear();
  const m = today.getMonth();
  return new Date(y, m + 1, 0);
}

export const OBLIGATIONS: Obligation[] = [
  // =================================================================
  // MONTHLY
  // =================================================================
  {
    id: "monthly-cmg",
    title: "Chair monthly CMG (SAPR Unrestricted Reports)",
    cadence: "monthly",
    authority: "MCO 1752.5C; DoDI 6495.02",
    detailLink: "/commander/battle-rhythm/monthly-cmg",
    description:
      "Multidisciplinary forum for SAPR Unrestricted Report oversight. CO attendance is non-delegable.",
    nonDelegable: true,
    nextDeadline: (today) => nextMonthEnd(today),
  },
  {
    id: "monthly-72hr-victim-update",
    title: "72-hour victim case-status update after each CMG",
    cadence: "monthly",
    authority: "MCO 1752.5C",
    detailLink: "/commander/battle-rhythm/monthly-cmg",
    description:
      "Update the reporting Marine on case status within 72 hours of each CMG. Non-delegable.",
    nonDelegable: true,
  },
  {
    id: "monthly-fpc",
    title: "Chair monthly Force Preservation Council",
    cadence: "monthly",
    authority: "MCO 1500.60A Para 4.b.(3)(b)",
    detailLink: "/commander/battle-rhythm/monthly-fpc",
    description:
      "FPC reviews elevated and high-risk Marines, validates CIRRAS profiles, briefs new joins. Non-delegable.",
    nonDelegable: true,
    nextDeadline: (today) => nextMonthEnd(today),
  },
  {
    id: "monthly-urinalysis",
    title: "Approve random urinalysis schedule",
    cadence: "monthly",
    authority: "MCO 5300.17; DoDI 1010.01",
    detailLink: "/commander/battle-rhythm/monthly-fpc",
    description:
      "Review and sign the SACO-drafted random urinalysis schedule monthly.",
    nextDeadline: (today) => nextMonthEnd(today),
  },
  {
    id: "monthly-drrs-mc",
    title: "Submit DRRS-MC report with commander remarks",
    cadence: "monthly",
    authority: "MCO 3000.13B",
    detailLink: "/commander/battle-rhythm/monthly-fpc",
    description:
      "Monthly readiness submission. Commander remarks required on subjective overrides.",
    nextDeadline: (today) => nextMonthEnd(today),
  },

  // =================================================================
  // QUARTERLY
  // =================================================================
  {
    id: "quarterly-cmr",
    title: "Complete quarterly CMR reconciliation",
    cadence: "quarterly",
    authority: "2016 Commanders Materiel Readiness Handbook",
    detailLink: "/commander/battle-rhythm/quarterly-actions",
    description:
      "Reconcile the unit CMR. Identify discrepancies. Initiate FLIPL where appropriate.",
    nextDeadline: (today) => nextQuarterEnd(today),
  },
  {
    id: "quarterly-gtcc",
    title: "Review GTCC delinquency report",
    cadence: "quarterly",
    authority: "DoDI 5154.31 Vol. 4; IGMC FAC #10",
    detailLink: "/commander/battle-rhythm/quarterly-actions",
    description:
      "Review APC delinquency summary. Counsel repeat-delinquent Marines. Confirm salary offset where required.",
    nextDeadline: (today) => nextQuarterEnd(today),
  },
  {
    id: "quarterly-capstone-etms2",
    title: "Notify ARD Records of Capstone official changes via ETMS2 tasker",
    cadence: "quarterly",
    authority: "MCBul 5210 (29 Aug 2025) Para 3.b.(1)(a)(3)",
    detailLink: "/commander/battle-rhythm/quarterly-actions",
    description:
      "Quarterly tasker. CDRM owns the response. CO confirms submission.",
    nextDeadline: (today) => nextQuarterEnd(today),
  },
  {
    id: "quarterly-cirras-access-audit",
    title: "Audit CIRRAS access list (uniformed-only)",
    cadence: "quarterly",
    authority: "MCO 1500.60A Para 4.b.(3)(a)",
    detailLink: "/commander/force-preservation/cirras-role",
    description:
      "Confirm every profile-level CIRRAS user is uniformed and currently in the chain of command.",
    nextDeadline: (today) => nextQuarterEnd(today),
  },

  // =================================================================
  // ANNUAL
  // =================================================================
  {
    id: "annual-deocs-cca",
    title: "DEOCS/CCA between 1 August and 30 November",
    cadence: "annual",
    authority: "MARADMIN 468/23 Para 6",
    detailLink: "/commander/turnover/90-120-and-recurring",
    description:
      "Annual climate assessment. Begin DEOCS by 31 October. Annotate in FITREP.",
    nextDeadline: (today) => nextAnnual(today, 7, 1), // 1 Aug
  },
  {
    id: "annual-deocs-deadline",
    title: "DEOCS initiation deadline",
    cadence: "annual",
    authority: "MARADMIN 468/23",
    detailLink: "/commander/turnover/90-120-and-recurring",
    description:
      "Annual DEOCS initiation deadline. Hard deadline 31 October.",
    nextDeadline: (today) => nextAnnual(today, 9, 31), // 31 Oct
  },
  {
    id: "annual-safety-climate",
    title: "Complete annual safety climate survey",
    cadence: "annual",
    authority: "MCO 5100.29C Para 060402",
    detailLink: "/commander/turnover/90-120-and-recurring",
    description:
      "O5/O6 commands. Ground CAS for non-aviation. MCAS for aviation.",
  },
  {
    id: "annual-sapr-training",
    title: "Unit-wide SAPR Annual Training",
    cadence: "annual",
    authority: "MCO 1752.5C; SAPR Smart Pack",
    detailLink: "/commander/turnover/90-120-and-recurring",
    description:
      "All personnel complete rank-appropriate training by credentialed SAPR VA or SARC.",
  },
  {
    id: "annual-inventory",
    title: "Annual full unit inventory synchronized with CMR",
    cadence: "annual",
    authority: "2016 Commanders Materiel Readiness Handbook",
    detailLink: "/commander/turnover/90-120-and-recurring",
    description:
      "Wall-to-wall inventory with RO spot checks. Synchronized with the CMR.",
    nextDeadline: (today) => nextAnnual(today, 11, 31), // 31 Dec
  },
  {
    id: "annual-appointment-revalidation",
    title: "Revalidate all key appointment letters",
    cadence: "annual",
    authority: "MCO 5800.16 Vol. 12; MARADMIN 350/11",
    detailLink: "/commander/turnover/30-day-actions",
    description:
      "D-SAACP currency for SAPR VAs. Fund control training currency for Tier 1 fiscal staff. Other appointment letters as needed.",
  },
  {
    id: "annual-fpc-sop-review",
    title: "FPC SOP annual review",
    cadence: "annual",
    authority: "MCO 1500.60A Para 4.b.(3)(n)",
    detailLink: "/commander/force-preservation/fpc-sop-meetings",
    description:
      "SOP review at minimum annually. Trigger events also force review.",
  },
  {
    id: "annual-cmt-tracking",
    title: "Verify CMT cadence (core annual, non-core biennial)",
    cadence: "annual",
    authority: "MARADMIN 199/26; MCO 1500.63A",
    detailLink: "/commander/turnover/30-day-actions",
    description:
      "Track in MCTIMS. Non-core CMT is biennial per MARADMIN 199/26.",
  },
  {
    id: "annual-mmea-retention",
    title: "MMEA annual retention briefing",
    cadence: "annual",
    authority: "MMEA Commanders Retention Toolkit",
    detailLink: "/commander/turnover/90-120-and-recurring",
    description:
      "Annual retention briefing confirming FTAP/STAP missions, boatspaces, CRP selectees.",
  },

  // =================================================================
  // MULTI-YEAR
  // =================================================================
  {
    id: "multiyear-fund-control",
    title: "Tier 1 Fund Control fiscal/appropriations law training",
    cadence: "multi-year",
    authority: "MARADMIN 350/11 Para 4; DoD FMR Vol. 14 Ch. 2",
    detailLink: "/commander/turnover/30-day-actions",
    description:
      "CO is Tier 1 Fund Control Personnel. Training required every 3 years. Comptroller-led briefing satisfies in lieu of full course.",
  },
  {
    id: "multiyear-don-budget-execution",
    title: "DON Budget Execution Course",
    cadence: "multi-year",
    authority: "MARADMIN 350/11 Para 2",
    detailLink: "/commander/turnover/30-day-actions",
    description:
      "Online course on ASN(FMC) website. Required in addition to fiscal law training.",
  },

  // =================================================================
  // EVENT-DRIVEN
  // =================================================================
  {
    id: "event-cmc-notification",
    title: "First GO notification to CMC within 72 hours of CoC",
    cadence: "event-driven",
    authority: "MARADMIN 165/07",
    detailLink: "/commander/turnover/day-0-7",
    description:
      "First General Officer in reporting chain notifies CMC (MRA MM and PP&O) within 72 hours. Applies any time XO assumes command.",
  },
  {
    id: "event-newjoin-elevated",
    title: "New join elevated risk for 90 days",
    cadence: "event-driven",
    authority: "MCO 1500.60A Para 4.b.(3)(g)(3)",
    detailLink: "/commander/force-preservation/elevated-risk-new-joins",
    description:
      "Any Marine joined with LOW risk in MCTFS is automatically assigned ELEVATED for 90 days. Discussed at every FPC during the window.",
  },
  {
    id: "event-dodi-notification",
    title: "DoDI 6490.08 notification from provider",
    cadence: "event-driven",
    authority: "DoDI 6490.08 (6 Sep 2023)",
    detailLink: "/commander/incident-playbooks/suicide-response",
    description:
      "Nine exigent circumstances trigger provider notification to the commander. CIRRAS update, FPC brief follow.",
  },
  {
    id: "event-covered-offense",
    title: "OSTC covered offense allegation",
    cadence: "event-driven",
    authority: "MARADMIN 633/24",
    detailLink: "/commander/incident-playbooks/covered-offense",
    description:
      "OSTC has exclusive referral authority once exercised. Defer all unit-level disciplinary processing. Notify regional OSTC.",
  },
  {
    id: "event-sapr-unrestricted",
    title: "SAPR Unrestricted Report",
    cadence: "event-driven",
    authority: "MCO 1752.5C",
    detailLink: "/commander/incident-playbooks/sapr-unrestricted-report",
    description:
      "SARC notification within 24 hours. MPO if accused and victim have contact opportunity. OSTC overlap on most sexual assault offenses.",
  },
  {
    id: "event-off-base-arrest",
    title: "Off-base arrest by civilian law enforcement",
    cadence: "event-driven",
    authority: "MCO 5800.16 Vol. 12",
    detailLink: "/commander/incident-playbooks/off-base-arrest",
    description:
      "PMO liaison, SJA coordination, MCTFS legal hold. Check OSTC overlap on the underlying conduct.",
  },
  {
    id: "event-suicide-related",
    title: "Suicide-related event response",
    cadence: "event-driven",
    authority: "DoDI 6490.08; NAVMC 1720.1",
    detailLink: "/commander/incident-playbooks/suicide-response",
    description:
      "Warm hand-off escort pattern. CIRRAS elevation. NAVMC 1720.1 Commander's Checklist for follow-on response.",
  },
];

/**
 * Returns days between two dates. Positive means future, negative means past.
 */
export function daysBetween(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

/**
 * Returns the obligations of a given cadence, in their seed order.
 */
export function obligationsByCadence(cadence: ObligationCadence): Obligation[] {
  return OBLIGATIONS.filter((o) => o.cadence === cadence);
}

/**
 * Returns the count of obligations marked non-delegable.
 */
export function nonDelegableCount(): number {
  return OBLIGATIONS.filter((o) => o.nonDelegable).length;
}

/**
 * Returns obligations with nextDeadline computed, sorted by soonest deadline.
 */
export function upcomingDeadlines(today: Date, limit = 5): Array<{
  obligation: Obligation;
  deadline: Date;
  daysUntil: number;
}> {
  const results: Array<{
    obligation: Obligation;
    deadline: Date;
    daysUntil: number;
  }> = [];
  for (const o of OBLIGATIONS) {
    if (!o.nextDeadline) continue;
    const d = o.nextDeadline(today);
    if (!d) continue;
    results.push({
      obligation: o,
      deadline: d,
      daysUntil: daysBetween(today, d),
    });
  }
  results.sort((a, b) => a.daysUntil - b.daysUntil);
  return results.slice(0, limit);
}
