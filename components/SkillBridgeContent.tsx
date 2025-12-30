"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "category-system", label: "Category System" },
  { id: "eligibility", label: "Eligibility" },
  { id: "ptad-options", label: "PTAD Options" },
  { id: "application-process", label: "Application Process" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Authority", description: "NAVMC 1700.2B; MARADMIN 280/24; DODI 1322.29; 10 U.S.C. 1143(e)" },
  { element: "NOT an Entitlement", description: "Commander's discretion - approval not guaranteed" },
  { element: "Eligibility Window", description: "180 days from EAS with continuous active duty service" },
  { element: "Duration", description: "Cat I: up to 120 days | Cat II/III: up to 90 days" },
  { element: "PTAD Status", description: "Choose Option 1 (return to PDS) or Option 2 (depart with DD-214)" },
  { element: "Ethics Training", description: "LLISELF301 required before participation" },
];

const CATEGORY_SYSTEM = [
  {
    category: "Category I",
    ranks: "E1-E5 (all pay grades)",
    maxDays: "Up to 120 days",
    approvalAuth: "LtCol (O-5) or higher"
  },
  {
    category: "Category II",
    ranks: "E6-E7, WO-CWO3, O1-O4",
    maxDays: "Up to 90 days",
    approvalAuth: "LtCol (O-5) or higher"
  },
  {
    category: "Category III",
    ranks: "E8-E9, CWO4-CWO5, O5 and above",
    maxDays: "Up to 90 days",
    approvalAuth: "General Officer (O-7+)"
  },
];

const ELIGIBILITY_REQUIREMENTS = [
  "Minimum 180 days continuous active duty service immediately preceding EAS",
  "Honorable characterization of service expected upon separation",
  "Not under investigation or pending adverse action",
  "No pending legal or administrative actions that could affect separation",
  "Complete required Ethics training (LLISELF301) before SkillBridge start",
  "Approval from commander (NOT an entitlement - subject to mission needs)",
  "Secured approved SkillBridge opportunity with DOD-approved provider",
  "Must be within 180 days of approved EAS date at start of SkillBridge",
];

const PTAD_OPTIONS = [
  {
    option: "Option 1: Return to PDS",
    description: "Complete SkillBridge, then return to PDS for final out-processing",
    characteristics: [
      "Remain on active duty orders throughout SkillBridge",
      "Return to PDS after SkillBridge completion",
      "Complete final out-processing at PDS",
      "Receive DD-214 at PDS upon final checkout",
      "Best if you have household goods at current duty station"
    ]
  },
  {
    option: "Option 2: Depart Permanently",
    description: "Complete out-processing BEFORE SkillBridge, receive DD-214, depart permanently",
    characteristics: [
      "Complete ALL final out-processing at PDS before SkillBridge",
      "Receive DD-214 before departing for SkillBridge location",
      "Depart PDS permanently - do not return",
      "Technically on PTAD (Permissive Temporary Additional Duty) status",
      "Best if SkillBridge location is your post-service residence"
    ]
  },
];

const PAY_ENTITLEMENTS_IMPACT = [
  {
    item: "Basic Pay",
    status: "CONTINUES",
    notes: "Full basic pay continues during SkillBridge"
  },
  {
    item: "BAH/OHA",
    status: "CONTINUES",
    notes: "Housing allowance based on PDS or dependent location"
  },
  {
    item: "BAS",
    status: "CONTINUES",
    notes: "Basic Allowance for Subsistence continues"
  },
  {
    item: "SDAP",
    status: "STOPS",
    notes: "Special Duty Assignment Pay ends when you depart PDS"
  },
  {
    item: "AIP/ACIP/HDIP",
    status: "STOPS",
    notes: "Aviation/Hazardous Duty Incentive Pay ends at SkillBridge start"
  },
  {
    item: "FSA/HFP",
    status: "STOPS",
    notes: "Family Separation/Hardship Fire Pay ends"
  },
  {
    item: "Leave Accrual",
    status: "CONTINUES",
    notes: "Continue accruing 2.5 days leave per month"
  },
  {
    item: "Deployment Pay",
    status: "STOPS",
    notes: "Any deployment-related pays end"
  },
];

const LEAVE_PTAD_RULES = [
  "SkillBridge days are NON-CHARGEABLE (do not count against leave balance)",
  "Can take regular leave BEFORE SkillBridge starts",
  "Can take regular leave AFTER SkillBridge ends (if Option 1 and returning to PDS)",
  "CANNOT take regular leave DURING SkillBridge - entire period must be SkillBridge days",
  "Terminal leave can be taken after SkillBridge completion (if Option 1)",
  "Terminal leave must be taken before SkillBridge if using Option 2 (depart permanently)",
  "Combined leave + SkillBridge cannot exceed 180 days from departure to EAS",
  "All leave must be approved by chain of command before execution",
];

const APPLICATION_STEPS = [
  {
    step: "1. Research SkillBridge Providers",
    description: "Visit skillbridge.osd.mil to find DOD-approved opportunities",
    timeframe: "6-12 months before EAS"
  },
  {
    step: "2. Complete Ethics Training",
    description: "Complete LLISELF301 via MarineNet (required before application)",
    timeframe: "Before submitting SkillBridge request"
  },
  {
    step: "3. Secure SkillBridge Opportunity",
    description: "Apply to providers, interview, receive acceptance letter",
    timeframe: "3-6 months before EAS"
  },
  {
    step: "4. Submit SkillBridge Package",
    description: "Submit request with acceptance letter to chain of command",
    timeframe: "90-120 days before desired start"
  },
  {
    step: "5. Chain of Command Review",
    description: "Unit reviews based on mission needs, manning, timing",
    timeframe: "2-4 weeks for routing"
  },
  {
    step: "6. Approval Authority Decision",
    description: "Cat I/II: O-5+, Cat III: General Officer makes final decision",
    timeframe: "Varies by command"
  },
  {
    step: "7. Choose PTAD Option",
    description: "Select Option 1 (return to PDS) or Option 2 (depart permanently)",
    timeframe: "Upon approval"
  },
  {
    step: "8. Execute SkillBridge",
    description: "Begin training/internship at approved provider location",
    timeframe: "Within 180 days of EAS"
  },
];

const CHECKLIST_ITEMS = [
  "Verify you have 180+ days continuous active duty before EAS",
  "Confirm EAS date allows for SkillBridge participation (within 180 days)",
  "Research SkillBridge providers at skillbridge.osd.mil",
  "Complete Ethics training LLISELF301 on MarineNet",
  "Apply to SkillBridge providers and secure acceptance letter",
  "Discuss SkillBridge with chain of command early (gauge approval likelihood)",
  "Determine your category (I, II, or III) and max allowable days",
  "Submit formal SkillBridge request with acceptance letter per local SOP",
  "Route request through chain of command to appropriate approval authority",
  "Await approval decision (NOT guaranteed - commander discretion)",
  "If approved: choose PTAD Option 1 (return to PDS) or Option 2 (depart permanently)",
  "If Option 2: complete ALL final out-processing before SkillBridge start",
  "Coordinate housing at SkillBridge location (no government housing/lodging)",
  "Arrange transportation (government will not fund travel to/from SkillBridge)",
  "Understand pay and entitlements changes (SDAP, AIP, FSA stop at departure)",
  "Track SkillBridge completion requirements with provider",
  "If Option 1: return to PDS for final out-processing and DD-214",
  "Maintain communication with unit POC during SkillBridge participation",
];

export function SkillBridgeContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SkillBridge Program Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            SkillBridge is a DOD program allowing service members to participate in civilian training,
            internships, or employment opportunities during the last 180 days of service. Marines remain
            on active duty with full pay and benefits while gaining civilian work experience. Per NAVMC
            1700.2B and MARADMIN 280/24, SkillBridge is NOT an entitlement - approval is at commander's
            discretion based on mission needs and manning requirements.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_POINTS.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What is SkillBridge?
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Opportunity to gain civilian work experience while still on active duty",
              "Participate during final 180 days before EAS (timing varies by category)",
              "Continue receiving full basic pay and benefits during participation",
              "Train/work with DOD-approved civilian employers and training providers",
              "Develop skills and experience directly applicable to post-service career",
              "NOT an entitlement - approval based on mission needs and commander discretion",
              "Requires Ethics training (LLISELF301) and acceptance by approved provider",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">NOT an Entitlement</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            SkillBridge approval is at your commander's discretion. Commands may deny requests based on
            manning, mission requirements, operational tempo, or timing. Having an acceptance letter from
            a provider does NOT guarantee Marine Corps approval. Start the process early and have backup
            transition plans.
          </p>
        </div>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Start Early</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Begin researching SkillBridge opportunities 6-12 months before your EAS. Popular programs
            fill quickly, and the approval process takes time. Complete Ethics training early and discuss
            with your chain of command before applying to providers.
          </p>
        </div>
      </>
    ),

    "category-system": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Three-Category System (MARADMIN 280/24)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MARADMIN 280/24, SkillBridge uses a three-tier category system based on rank/grade. Each
            category has different maximum durations and approval authorities. Category determines how many
            days you can request and who must approve your participation.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Category Breakdown
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Ranks/Grades</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Max Duration</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Approval Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {CATEGORY_SYSTEM.map((item) => (
                  <tr key={item.category}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.category}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.ranks}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.maxDays}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.approvalAuth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Category I: E1-E5 (Up to 120 Days)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Junior enlisted Marines (E1 through E5) fall into Category I with the longest allowable duration.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Maximum 120 days (approximately 4 months) of SkillBridge participation",
              "Must be within 180 days of EAS when starting SkillBridge",
              "Approval authority: Lieutenant Colonel (O-5) or higher in chain of command",
              "Most lenient category - reflects junior Marines' transition needs",
              "Can request full 120 days or any amount less (e.g., 60, 90 days)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Category II: E6-E7, WO-CWO3, O1-O4 (Up to 90 Days)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Mid-level enlisted, junior warrant officers, and company-grade officers are Category II.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Maximum 90 days (approximately 3 months) of SkillBridge participation",
              "Staff NCOs, junior warrant officers, and company-grade officers",
              "Approval authority: Lieutenant Colonel (O-5) or higher",
              "Shorter duration reflects increased responsibility and expertise at these grades",
              "Same approval authority as Cat I but reduced duration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Category III: E8-E9, CWO4-CWO5, O5+ (Up to 90 Days)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Senior enlisted, senior warrant officers, and field-grade/general officers are Category III.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Maximum 90 days (approximately 3 months) of SkillBridge participation",
              "First Sergeants, Sergeants Major, CWO4-CWO5, Majors and above",
              "Approval authority: GENERAL OFFICER (O-7 or higher) - significantly higher than Cat I/II",
              "Most restrictive approval level - reflects senior leadership positions",
              "General Officer must personally approve due to impact on leadership continuity",
              "Higher likelihood of denial based on critical billet requirements",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Category III Approval Reality</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Category III Marines (E8-E9, CWO4-5, O5+) face significantly higher scrutiny for SkillBridge
            approval. General Officer approval requirement means your request must route to the highest
            levels. Many Category III requests are denied due to critical leadership billets and succession
            planning requirements. Have realistic expectations and backup transition plans.
          </p>
        </div>
      </>
    ),

    eligibility: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SkillBridge Eligibility Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            To be eligible for SkillBridge, Marines must meet all requirements outlined in NAVMC 1700.2B,
            MARADMIN 280/24, and DODI 1322.29. Meeting these requirements does NOT guarantee approval -
            final decision rests with your chain of command and appropriate approval authority.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Mandatory Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {ELIGIBILITY_REQUIREMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            180-Day Continuous Active Duty Requirement
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You must have 180 days of CONTINUOUS active duty service immediately preceding your EAS.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Qualifying Service</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Consecutive active duty with no breaks in service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Counts toward the 180-day window before EAS</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Non-Qualifying Situations</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Break in service (separated and rejoined within 180 days of current EAS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Recently returned to active duty from IRR/reserves (if less than 180 days ago)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Ethics Training Requirement (LLISELF301)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            ALL Marines must complete Ethics training LLISELF301 BEFORE beginning SkillBridge. This is
            non-negotiable and enforced at all levels.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Complete LLISELF301 via MarineNet (free online course)",
              "Covers post-government employment restrictions and ethical conduct",
              "Required BEFORE submitting SkillBridge request (attach completion certificate)",
              "Training explains prohibited activities and potential conflicts of interest",
              "Takes approximately 1-2 hours to complete",
              "Certificate must be included in SkillBridge application package",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Honorable Discharge Requirement
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You must be in good standing with an honorable characterization of service expected.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "No pending NJP, court-martial, or adverse administrative actions",
              "Not under investigation that could affect discharge characterization",
              "No pending separation boards or administrative separation proceedings",
              "Current performance and conduct meet Marine Corps standards",
              "Commander must verify expected honorable discharge in recommendation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DOD-Approved Provider Requirement
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your SkillBridge opportunity must be with a DOD-approved provider listed on skillbridge.osd.mil.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Provider must be listed in official DOD SkillBridge database at skillbridge.osd.mil",
              "Unapproved companies/organizations do NOT qualify - no exceptions",
              "You must receive formal acceptance letter from provider before applying",
              "Acceptance letter must be included in your SkillBridge request package",
              "Provider determines their own selection criteria and may reject applicants",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Check Eligibility Early</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Verify you meet ALL requirements before investing time applying to providers. The most common
            disqualifiers are: breaks in service (180-day continuous duty requirement), pending legal/admin
            actions, and waiting too long to apply (not within 180-day window from EAS).
          </p>
        </div>
      </>
    ),

    "ptad-options": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PTAD Options: Return to PDS vs. Depart Permanently
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines approved for SkillBridge must choose between two PTAD (Permissive Temporary Additional
            Duty) options. Your choice affects out-processing timing, DD-214 receipt, and final duty station
            responsibilities. Choose based on your post-service plans and logistical considerations.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PTAD Options Comparison
          </h3>
          <div className="mt-4 space-y-4">
            {PTAD_OPTIONS.map((option) => (
              <div key={option.option} className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black/60">
                <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{option.option}</h4>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{option.description}</p>
                <ul className="mt-3 space-y-2">
                  {option.characteristics.map((char) => (
                    <li key={char} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Option 1: Return to PDS (Most Common)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Under Option 1, you depart your PDS for SkillBridge, then return to complete final out-processing.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Timeline</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>1. Depart PDS for SkillBridge location (on active duty orders)</li>
                <li>2. Complete SkillBridge training/internship at provider location</li>
                <li>3. Return to PDS after SkillBridge completion</li>
                <li>4. Complete final out-processing, clearing, medical, CIF, etc.</li>
                <li>5. Receive DD-214 and separate at PDS</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Best For</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Marines with household goods still at current duty station</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Those returning to home area after SkillBridge (not staying at SB location)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Marines who want to complete clearing after SkillBridge</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Option 2: Depart Permanently (Less Common)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Under Option 2, you complete ALL out-processing BEFORE SkillBridge, receive your DD-214, and
            never return to PDS. You depart permanently on PTAD status.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Timeline</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>1. Complete ALL final out-processing at PDS (clearing, CIF, medical, admin, etc.)</li>
                <li>2. Receive DD-214 from PDS before departing</li>
                <li>3. Depart PDS permanently - will NOT return</li>
                <li>4. Execute SkillBridge at provider location (on PTAD status)</li>
                <li>5. Complete SkillBridge and transition to civilian life from SB location</li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Best For</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Marines whose SkillBridge location IS their post-service residence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Those who already moved household goods and family to destination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Marines who want to avoid return travel to PDS after SkillBridge</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave and PTAD Combination Rules
          </h3>
          <div className="mt-4 space-y-2">
            {LEAVE_PTAD_RULES.map((rule) => (
              <div key={rule} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay and Entitlements During SkillBridge
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You remain on active duty during SkillBridge, but certain special pays stop when you depart PDS.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Pay/Entitlement</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PAY_ENTITLEMENTS_IMPACT.map((item) => (
                  <tr key={item.item}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.item}</td>
                    <td className="py-3">
                      <span className={`rounded px-2 py-1 text-xs font-medium ${
                        item.status === 'CONTINUES'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Financial Planning Required</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Budget for reduced income during SkillBridge. Special pays (SDAP, AIP, FSA, etc.) can represent
            significant portions of monthly pay. Calculate your expected pay loss and ensure you can afford
            living expenses at the SkillBridge location. The Marine Corps does NOT provide housing or per
            diem during SkillBridge.
          </p>
        </div>
      </>
    ),

    "application-process": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SkillBridge Application Process
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The SkillBridge application process involves multiple steps and can take several months from
            initial research to final approval. Start early (6-12 months before EAS) to allow adequate
            time for provider selection, application, and command approval routing.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Application Steps and Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Recommended Timing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {APPLICATION_STEPS.map((item) => (
                  <tr key={item.step}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.step}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Finding SkillBridge Providers
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Visit skillbridge.osd.mil to search the official DOD database of approved providers.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Search by location, industry, or company name on skillbridge.osd.mil",
              "Only DOD-approved providers listed on the official site are eligible",
              "Review provider descriptions, requirements, and application processes",
              "Note that popular providers (Microsoft, Amazon, tech companies) are highly competitive",
              "Consider multiple providers - apply to 3-5 opportunities to increase chances",
              "Verify provider still accepts SkillBridge participants (some pause programs)",
              "Check if provider has specific rank/MOS requirements or preferences",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Package Documents
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your SkillBridge request package must include these documents (check local SOPs for additional
            requirements):
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Formal memorandum requesting SkillBridge participation (routed for endorsement)",
              "Provider acceptance letter on company letterhead",
              "Provider SkillBridge program description and training plan",
              "LLISELF301 Ethics training completion certificate from MarineNet",
              "Copy of current DD-214 or statement of service showing 180+ days continuous duty",
              "Unit commander's recommendation memorandum",
              "PTAD option selection (Option 1 or Option 2)",
              "Any additional forms required by your command (check local SOP)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Approval Routing Process
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            SkillBridge requests route through chain of command to the appropriate approval authority based
            on your category.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Typical Routing</p>
              <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Immediate supervisor reviews and endorses</li>
                <li>Company/battery commander endorses</li>
                <li>Battalion/squadron commander endorses</li>
                <li>Category I/II: Regimental/group CO (O-5+) approves or disapproves</li>
                <li>Category III: Routes to General Officer (O-7+) for final decision</li>
              </ol>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black/60">
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">Timeline Expectations</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Category I/II: 2-4 weeks typical routing time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Category III: 4-8+ weeks (routes to General Officer level)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--sa-red)]">•</span>
                  <span>Delays possible for incomplete packages or additional information requests</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reasons for Denial
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Commands may deny SkillBridge requests for various legitimate reasons:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Manning: Unit critically undermanned in your MOS/billet",
              "Mission Requirements: Upcoming deployment, field exercise, or critical operation",
              "Timing: Request conflicts with unit mission timeline or key events",
              "Incomplete Package: Missing documents or incomplete Ethics training",
              "Ineligibility: Doesn't meet 180-day continuous service requirement",
              "Legal/Admin: Pending NJP, investigation, or adverse action",
              "Leadership Gaps: Category III denials due to critical leadership positions",
              "Replacement Not Available: No qualified replacement for your billet during absence",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Communicate Early and Often</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Discuss SkillBridge with your chain of command BEFORE applying to providers. Gauge their
            support and understand any concerns early. Commanders appreciate Marines who communicate plans
            in advance rather than submitting surprise last-minute requests. Early communication significantly
            improves approval chances.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SkillBridge Checklist
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Complete these steps to maximize your chances of SkillBridge approval and successful execution.
            Start early - SkillBridge is competitive and approval is NOT guaranteed.
          </p>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ITEMS.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Have a Backup Plan</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            SkillBridge approval is NOT guaranteed. Even if you meet all requirements, your command may
            deny your request based on mission needs. Do NOT rely solely on SkillBridge for your transition
            - complete full TAP, develop backup employment plans, and be prepared for potential denial.
          </p>
        </div>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Resources and Support</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-800 dark:text-blue-200">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Official SkillBridge website: <strong>skillbridge.osd.mil</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Your installation TAMP/Career Resource Management Center for guidance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Ethics training: MarineNet course LLISELF301</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>NAVMC 1700.2B and MARADMIN 280/24 for official policy</span>
            </li>
          </ul>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
