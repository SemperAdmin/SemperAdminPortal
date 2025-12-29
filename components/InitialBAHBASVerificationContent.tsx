"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "bah", label: "BAH" },
  { id: "process", label: "Process" },
  { id: "scenarios", label: "Scenarios" },
  { id: "issues", label: "Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Purpose", bah: "Offset housing costs", bas: "Offset food costs" },
  { element: "Rate Varies By", bah: "Grade, location ZIP, dependency status", bas: "Enlisted or officer status only" },
  { element: "Dependency Impact", bah: "Higher rate with dependents", bas: "No impact" },
  { element: "Documentation", bah: "Requires verification", bas: "Automatic entitlement" },
  { element: "Form", bah: "NAVMC 10922 (Dependency Application)", bas: "None required" },
  { element: "Authority", bah: "37 U.S.C. 403, JTR", bas: "37 U.S.C. 402" },
];

const BAS_RATES = [
  { status: "Enlisted", rate: "$460.25" },
  { status: "Officer", rate: "$317.22" },
];

const BAS_STOPS = [
  "Assigned to government messing (meal card)",
  "Field duty with government meals provided",
  "Hospitalization exceeding certain periods",
  "Confined by military authorities",
];

const BAH_COVERS = [
  "Rent or mortgage",
  "Utilities (average)",
  "Renter's insurance (average)",
];

const BAH_RATE_FACTORS = [
  { factor: "Pay Grade", desc: "Higher grades receive higher BAH" },
  { factor: "Duty Station ZIP Code", desc: "Rates vary by location cost of living" },
  { factor: "Dependency Status", desc: "With dependents or without dependents" },
];

const BAH_TYPES = [
  { type: "BAH With Dependents", desc: "Higher rate for members with dependents" },
  { type: "BAH Without Dependents", desc: "Lower rate for single members without dependents" },
  { type: "BAH-DIFF", desc: "Partial BAH for members in government quarters with dependents elsewhere" },
  { type: "BAH-RC/T", desc: "Reserve Component BAH for training periods" },
];

const DOCS_ALL_MARINES = [
  "PCS orders to current duty station",
  "Military ID (CAC)",
];

const DOCS_WITH_DEPENDENTS = [
  "NAVMC 10922 (Dependency Application)",
  "Marriage certificate (for spouse)",
  "Birth certificates (for children)",
  "Adoption decrees (if applicable)",
  "Divorce decree (if previously married)",
  "Custody documents (if applicable)",
  "Court orders for child support (if applicable)",
];

const DOCS_HOUSING_VERIFICATION = [
  "Copy of lease agreement",
  "Mortgage statement",
  "Utility bills showing address",
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Gather Required Documents",
    actions: [
      "Collect PCS orders and military ID",
      "If claiming dependents, gather NAVMC 10922 and supporting documents",
      "Have copies of marriage/birth certificates ready",
    ],
  },
  {
    step: 2,
    title: "Complete Dependency Documentation",
    actions: [
      "Complete NAVMC 10922 (Dependency Application)",
      "Attach supporting documents (marriage certificate, birth certificates)",
      "Have attesting officer verify and sign",
      "Submit to S-1/Admin for processing",
      "Ensure dependents are entered in MCTFS",
    ],
  },
  {
    step: 3,
    title: "Submit to S-1/Admin",
    actions: [
      "S-1 verifies documentation",
      "Information entered in MCTFS via Unit Diary",
      "Routed to disbursing/finance for pay action",
      "Entitlement start date confirmed",
    ],
  },
  {
    step: 4,
    title: "Verify on LES",
    actions: [
      "Check Leave and Earnings Statement (LES) after 1-2 pay periods",
      "Verify BAH rate matches expected amount",
      "Confirm dependency status is correct",
      "Report discrepancies immediately to S-1",
    ],
  },
];

const SCENARIOS = [
  {
    title: "Single Marine Without Dependents (E-1 to E-3)",
    items: [
      "Generally required to live in barracks",
      "No BAH entitlement unless barracks unavailable",
      "Certificate of Non-Availability (CNA) required for BAH authorization",
    ],
  },
  {
    title: "Single Marine Without Dependents (E-4 and Above)",
    items: [
      "May be authorized to live off-base",
      "Receives BAH without-dependent rate",
      "Command policy determines barracks requirement",
    ],
  },
  {
    title: "Married Marine or Marine With Dependents",
    items: [
      "Entitled to BAH with-dependent rate",
      "Rate based on duty station ZIP code",
      "Must have dependency documented in MCTFS",
    ],
  },
  {
    title: "Marine With Dependents Not Residing With Them",
    items: [
      "May receive BAH-DIFF",
      "Must provide proof of support (not less than BAH-DIFF amount)",
      "Support documentation required per MCO 1751.3",
    ],
  },
  {
    title: "Dual Military Couple",
    items: [
      "Each member receives BAH based on their own status",
      "If no dependents, both receive without-dependent rate",
      "If dependents, one member claims dependents for with-dependent rate",
      "Other member receives without-dependent rate (or with-dependent if they have other dependents)",
    ],
  },
];

const BAH_CALCULATOR_STEPS = [
  "Go to https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/",
  "Select the current year",
  "Enter duty station ZIP code",
  "Select pay grade",
  "Select dependency status",
  "View monthly BAH rate",
];

const RATE_PROTECTION_INFO = [
  "If local BAH rate decreases, you keep higher rate while continuously assigned",
  "Protection lost if you PCS, change dependency status, or have break in service",
  "New rate applies at next duty station",
];

const COMMON_ISSUES = [
  {
    issue: "BAH Not Started",
    causes: [
      "Dependency documentation not submitted",
      "NAVMC 10922 not processed",
      "Unit diary not completed",
      "Disbursing processing delay",
    ],
    resolution: [
      "Verify NAVMC 10922 is on file with S-1",
      "Check MCTFS for dependent entries",
      "Follow up with disbursing office",
      "Request correction via S-1 if error found",
    ],
  },
  {
    issue: "Wrong BAH Rate",
    causes: [
      "Incorrect ZIP code entered",
      "Wrong dependency status",
      "Old rate from previous duty station",
    ],
    resolution: [
      "Verify duty station ZIP code with S-1",
      "Confirm dependency status in MCTFS",
      "Request rate correction through S-1",
    ],
  },
  {
    issue: "BAH Stopped Unexpectedly",
    causes: [
      "Moved into government quarters",
      "Dependent removed from records",
      "Administrative error",
    ],
    resolution: [
      "Check housing status with S-1",
      "Verify dependent information in MCTFS",
      "Contact disbursing for explanation",
    ],
  },
  {
    issue: "Dependent Not Showing for BAH",
    causes: [
      "NAVMC 10922 not submitted",
      "Missing supporting documents",
      "Unit diary not processed",
    ],
    resolution: [
      "Submit NAVMC 10922 with supporting documents",
      "Verify attesting officer signed form",
      "Check that unit diary was submitted",
      "Allow 1-2 pay periods for processing",
    ],
  },
];

const PCS_BAH_INFO = [
  { phase: "At Old Duty Station", info: "BAH continues at old duty station rate until departure. Ends on date of detachment." },
  { phase: "During Travel", info: "BAH continues during authorized travel time. No change in rate during transit." },
  { phase: "At New Duty Station", info: "BAH changes to new duty station rate. Effective date is reporting date. May take 1-2 pay periods to reflect on LES." },
];

const BAS_SPECIAL_SITUATIONS = [
  { type: "BAS Type II", desc: "Higher BAS rate for members assigned to duty where government messing is not available. Typically for recruiters, drill instructors, or isolated duty." },
  { type: "Essential Station Messing", desc: "Some duty stations require meal card participation. BAS may be collected for government meals. Partial BAS retained based on meals taken." },
  { type: "Field Duty", desc: "During field exercises with government meals, BAS may be reduced or stopped. Deductions processed after field duty ends." },
];

const CHECKLIST_BEFORE = [
  "Gather all dependency documents",
  "Verify DEERS enrollment for dependents",
  "Know expected BAH rate (use calculator)",
  "Have copies of marriage/birth certificates",
];

const CHECKLIST_DURING = [
  "Submit NAVMC 10922 if claiming dependents",
  "Provide all supporting documents to S-1",
  "Confirm housing status (barracks or off-base)",
  "Get estimated processing timeline",
];

const CHECKLIST_AFTER = [
  "Check first LES for correct BAH/BAS",
  "Verify dependency status is correct",
  "Report any discrepancies to S-1",
  "Keep copies of all submitted documents",
];

const RESOURCES = [
  { name: "BAH Calculator", url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/" },
  { name: "BAS Rates", url: "https://www.dfas.mil/militarymembers/payentitlements/Pay-Tables/BAS/" },
  { name: "DFAS Military Pay", url: "https://www.dfas.mil/MilitaryMembers/" },
];

const CONTACTS = [
  { office: "Unit S-1/Admin", purpose: "Documentation submission" },
  { office: "IPAC", purpose: "MCTFS and dependency questions" },
  { office: "Disbursing/Finance", purpose: "Pay issues" },
  { office: "Personal Financial Manager", purpose: "Entitlement counseling" },
];

export function InitialBAHBASVerificationContent({ data }: Props) {
  const content = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Basic Allowance for Housing (BAH) and Basic Allowance for Subsistence (BAS) are military
            entitlements that offset housing and food costs. BAH varies by pay grade, duty location,
            and dependency status. BAS is a flat monthly rate for all enlisted or officer personnel.
            Proper documentation ensures you receive correct entitlements from your first day at a new duty station.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points Comparison
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">BAH</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">BAS</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.bah}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.bas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Basic Allowance for Subsistence (BAS)
          </h3>
          <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            BAS offsets the cost of meals for the service member only. It is not intended to cover
            meals for family members. BAS entitlement is automatic for active duty members.
          </p>
          <div className="mt-4">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">2025 Monthly Rates</h4>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {BAS_RATES.map((rate) => (
                <div key={rate.status} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{rate.status}</div>
                  <div className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    {rate.rate}
                  </div>
                  <div className="text-xs text-zinc-500">per month</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">When BAS May Be Reduced or Stopped</h4>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            {BAS_STOPS.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </>
    ),

    bah: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Basic Allowance for Housing (BAH)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            BAH offsets housing costs when government quarters are not provided.
          </p>
          <div className="mt-4">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">What BAH Covers</h4>
            <ul className="mt-2 space-y-1">
              {BAH_COVERS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-red)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BAH Rate Factors
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Your BAH rate depends on three factors:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {BAH_RATE_FACTORS.map((item, index) => (
              <div key={item.factor} className="rounded-lg border border-black/5 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-800/50">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{item.factor}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BAH Types
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {BAH_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Using the BAH Calculator
          </h3>
          <ol className="mt-4 space-y-2">
            {BAH_CALCULATOR_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Rate Protection</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
            {RATE_PROTECTION_INFO.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BAH During PCS
          </h3>
          <div className="mt-4 space-y-3">
            {PCS_BAH_INFO.map((item) => (
              <div key={item.phase} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.phase}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.info}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h4 className="font-medium text-green-800 dark:text-green-200">Temporary Lodging Expense (TLE)</h4>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Separate allowance for temporary lodging during PCS. Does not replace BAH.
              Up to 14 days combined at old and new duty stations (CONUS).
            </p>
          </div>
        </section>
      </>
    ),

    process: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Establishing BAH Entitlement
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Follow these steps to ensure your BAH is correctly established at your new duty station.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Documents: All Marines
            </h3>
            <ul className="mt-4 space-y-2">
              {DOCS_ALL_MARINES.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Documents: With Dependents
            </h3>
            <ul className="mt-4 space-y-2">
              {DOCS_WITH_DEPENDENTS.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Housing Verification (if requested)
            </h3>
            <ul className="mt-4 space-y-2">
              {DOCS_HOUSING_VERIFICATION.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                  {doc}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-4">
          {PROCESS_STEPS.map((step) => (
            <section
              key={step.step}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-lg font-bold text-white">
                  {step.step}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    {step.title}
                  </h3>
                  <ul className="mt-3 space-y-1">
                    {step.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-[var(--sa-red)] mt-0.5">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verification Checklists
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Before Reporting</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_BEFORE.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">During Check-In</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_DURING.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">After Check-In (30 Days)</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_AFTER.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    ),

    scenarios: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BAH Entitlement Scenarios
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            BAH entitlement varies based on your rank, dependency status, and housing situation.
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {SCENARIOS.map((scenario) => (
            <section
              key={scenario.title}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
            >
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {scenario.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {scenario.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            BAS Special Situations
          </h3>
          <div className="mt-4 space-y-4">
            {BAS_SPECIAL_SITUATIONS.map((item) => (
              <div key={item.type} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.type}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    ),

    issues: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common BAH Issues
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            If you experience issues with your BAH, review these common problems and solutions.
          </p>
        </section>

        <div className="space-y-4">
          {COMMON_ISSUES.map((issue) => (
            <section
              key={issue.issue}
              className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40"
            >
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {issue.issue}
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium text-red-700 dark:text-red-400">Possible Causes</h4>
                  <ul className="mt-2 space-y-1">
                    {issue.causes.map((cause) => (
                      <li key={cause} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-red-500 mt-0.5">✕</span>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 dark:text-green-400">Resolution</h4>
                  <ul className="mt-2 space-y-1">
                    {issue.resolution.map((res) => (
                      <li key={res} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources & Contacts
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Online Resources</h4>
              <ul className="mt-2 space-y-2">
                {RESOURCES.map((res) => (
                  <li key={res.name}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--sa-red)] underline hover:no-underline"
                    >
                      {res.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Contacts</h4>
              <ul className="mt-2 space-y-2">
                {CONTACTS.map((contact) => (
                  <li key={contact.office} className="text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium">{contact.office}</span> - {contact.purpose}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Pro Tip</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Always keep copies of all submitted documents. If an issue arises, having your own
            records will expedite resolution. Check your LES within the first two pay periods
            after check-in to verify your entitlements are correct.
          </p>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
