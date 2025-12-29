"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Ref = { title: string; url: string; isQuickLink?: boolean };

type Props = {
  data: { references: Ref[] };
};

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "documents", label: "Documents" },
  { id: "stops", label: "Checkout Stops" },
  { id: "leave", label: "Terminal Leave" },
  { id: "travel", label: "Travel Claim" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Start Timeline", requirement: "Begin 30 days before departure (PCS), 12 months before EAS (separation)" },
  { element: "Primary Document", requirement: "Unit Checkout Sheet" },
  { element: "Separation Document", requirement: "DD Form 214" },
  { element: "MOL Tool", requirement: "Outbound Interview (OBI)" },
  { element: "Travel Claim", requirement: "Submit via MOL Travel tab after separation" },
  { element: "Authority", requirement: "MCO 1900.16 CH 2, MCO 1050.3J" },
];

const PCS_TIMELINE = [
  { timeframe: "60-90 days", action: "Attend PCS workshop with IR&R" },
  { timeframe: "30 days", action: "Obtain checkout sheet from S-1" },
  { timeframe: "30-14 days", action: "Complete checkout stops" },
  { timeframe: "14-7 days", action: "Final S-1 interview" },
  { timeframe: "Departure date", action: "Orders endorsed, depart duty station" },
];

const EAS_TIMELINE = [
  { timeframe: "12 months", action: "Begin transition planning, access OBI in MOL" },
  { timeframe: "365-180 days", action: "Complete Transition Readiness Seminar (TRS)" },
  { timeframe: "180 days", action: "Schedule CO EAS Interview with Career Planner" },
  { timeframe: "90 days", action: "Submit OBI through S-1 to IPAC" },
  { timeframe: "30 days", action: "Complete checkout sheet, final physical" },
  { timeframe: "EAS date", action: "Receive DD Form 214, depart" },
];

const OBI_STEPS = [
  "Log into Marine Online (MOL)",
  "Click the TRAVEL tab at top right",
  "Select \"Outbound Interview\" under INDIVIDUAL MEMBER",
  "Complete all required sections",
];

const OBI_APPROVAL_PROCESS = [
  "Complete OBI in MOL",
  "Upload required documents",
  "Submit to S-1 for review",
  "S-1 approves and forwards to IPAC Outbound",
  "IPAC processes separation paperwork",
];

const ACTIVE_DUTY_DOCS = [
  "TRS E-Form (DD Form 2648)",
  "Unit Checkout Sheet (completed)",
  "Final Physical Forms (DD Form 2807-1 and DD Form 2808)",
  "Original Medical and Dental Records",
  "Service Treatment Record Certification (DD Form 2963)",
  "SkillBridge Package (if applicable, per MARADMIN 280/24)",
  "PEB Findings (medical separations only)",
  "HQMC Approval for over 90 days of Terminal Leave (if applicable)",
  "Early Release for Education Approval Letter (if applicable)",
  "Dependent Certificates (if updates needed or missing in OMPF)",
  "Medical Separation Page 11 (RE-3P code assignment, if applicable)",
  "DAP Orders (if applicable)",
  "Missing Gear Statement (if applicable)",
];

const RESERVIST_DOCS = [
  "Original MROWS Orders and all modifications",
  "Reporting Endorsement",
  "Detaching Endorsement",
  "Unit Checkout Sheet (completed)",
  "Final Physical Forms (DD Form 2807-1 and DD Form 2808)",
];

const CHECKOUT_STOPS = [
  { stop: "S-1/Admin", purpose: "Outbound interview, records verification, orders endorsement" },
  { stop: "S-2/Security", purpose: "Security debrief, clearance transfer, access termination" },
  { stop: "S-3/Training", purpose: "Training records verification, PME documentation" },
  { stop: "S-4/Supply", purpose: "CIF turn-in, gear accountability" },
  { stop: "S-6/Communications", purpose: "Equipment turn-in, account deactivation, CAC verification" },
  { stop: "Armory", purpose: "Weapons turn-in, serialized gear accountability" },
  { stop: "Medical", purpose: "Final physical, medical records transfer" },
  { stop: "Dental", purpose: "Dental records transfer, treatment completion" },
  { stop: "Legal", purpose: "Power of Attorney, will updates, legal hold verification" },
  { stop: "Finance/Disbursing", purpose: "Pay account settlement, travel advance, final pay" },
  { stop: "Housing", purpose: "Quarters inspection, key turn-in, termination" },
  { stop: "Career Planner", purpose: "EAS interview scheduling, reenlistment status" },
  { stop: "IPAC", purpose: "Orders processing, DD-214 preparation" },
];

const ROLE_REQUIREMENTS = [
  { role: "Non-SNCO/Officer Personnel", requirement: "Meet with Barracks Manager" },
  { role: "Enlisted Personnel", requirement: "Meet with Career Planner before completing checkout" },
  { role: "SNCO Personnel", requirement: "Meet with Battalion Sergeant Major prior to departure" },
];

const DMO_SERVICES = [
  "Pickup of household goods",
  "Receipt and storage",
  "Shipment to Home of Record",
  "Delivery at destination",
];

const DMO_LETTER_CONTENTS = [
  "Appropriation lines of accounting",
  "Authorization for HHG pickup and storage",
  "Scheduling information",
];

const TRAVEL_ENTITLEMENTS = [
  { type: "POV Travel (Preferred)", details: "Reimbursed mileage at current rate, per diem for travel days" },
  { type: "Air Travel", details: "Make arrangements through CWT Sato Travel, use DMO orders available in MOL" },
  { type: "Travel to Location Other Than HOR", details: "Reimbursement limited to cost of travel to HOR, you pay any amount exceeding HOR travel cost" },
];

const COMMON_ISSUES = [
  {
    issue: "Missing CO EAS Interview",
    resolution: "Visit your Battalion Career Planner to schedule interview with Commanding Officer.",
  },
  {
    issue: "Missing TRS/Capstone (DD Form 2648)",
    resolution: "Log into MilConnect to verify completion status. If not complete, coordinate with MCCS to complete Capstone process.",
  },
  {
    issue: "Incomplete Checkout Sheet",
    resolution: "Verify all stops are signed/stamped. Return to any missed locations. S-1 will not endorse orders without complete checkout sheet.",
  },
  {
    issue: "Changes After OBI Approval",
    resolution: "Notify IPAC Outbound immediately. OBI returns to S-1 for unit-level reapproval. Terminal leave dates may be adjusted.",
  },
];

const CHECKLIST_30_DAYS = [
  "Obtain checkout sheet from S-1",
  "Schedule all appointments (medical, dental, CIF)",
  "Begin clearing through offices",
  "Verify leave balance in MOL",
  "Schedule DMO pickup (if EAS)",
];

const CHECKLIST_14_DAYS = [
  "Complete majority of checkout stops",
  "Turn in CIF gear",
  "Complete final physical",
  "Verify OBI documents uploaded (if EAS)",
  "Confirm terminal leave dates (if EAS)",
];

const CHECKLIST_7_DAYS = [
  "Complete remaining checkout stops",
  "Final S-1 interview",
  "Verify orders are correct",
  "Confirm travel arrangements",
];

const CHECKLIST_DEPARTURE = [
  "Final checkout sheet review",
  "Orders endorsed",
  "Receive DD-214 (if EAS)",
  "Depart duty station",
];

const RESOURCES = [
  { name: "IPAC Outbound", purpose: "Primary separation processing" },
  { name: "DMO", purpose: "Household goods shipment" },
  { name: "MCCS Transition Services", purpose: "TRS and Capstone completion" },
  { name: "Career Planner", purpose: "EAS interviews, reenlistment status" },
];

export function CheckoutProceduresContent({ data }: Props) {
  const content = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Checkout is a mandatory process you must complete before departing your current duty station for PCS,
            EAS, or separation. The process ensures you have cleared all administrative, logistical, and financial
            obligations with your command and supporting agencies. Your checkout sheet documents completion of each
            required stop and must be finalized before you receive orders endorsement or separation documents.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              PCS Checkout Timeline
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                    <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {PCS_TIMELINE.map((item) => (
                    <tr key={item.timeframe} className="border-b border-zinc-100 dark:border-zinc-800">
                      <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.timeframe}</td>
                      <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              EAS/Separation Timeline
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                    <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {EAS_TIMELINE.map((item) => (
                    <tr key={item.timeframe} className="border-b border-zinc-100 dark:border-zinc-800">
                      <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.timeframe}</td>
                      <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Checkout Issues
          </h3>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((issue) => (
              <div key={issue.issue} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-red-700 dark:text-red-400">{issue.issue}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-green-700 dark:text-green-400">Resolution:</span> {issue.resolution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </>
    ),

    documents: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Outbound Interview (OBI)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            OBI becomes available one year before your EAS date in Marine Online.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Accessing OBI in MOL
            </h3>
            <ol className="mt-4 space-y-2">
              {OBI_STEPS.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              OBI Approval Process
            </h3>
            <ol className="mt-4 space-y-2">
              {OBI_APPROVAL_PROCESS.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Minimum Documents for IPAC</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
            <li>• Commanding Officer&apos;s EAS Interview</li>
            <li>• Separation Page 11 (if re-entry code other than RE-1A)</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documents - Active Duty Marines
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Upload and provide to IPAC:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {ACTIVE_DUTY_DOCS.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {doc}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documents - Reservists
          </h3>
          <ul className="mt-4 space-y-2">
            {RESERVIST_DOCS.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {doc}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    stops: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checkout Sheet Stops
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Your checkout sheet lists required stops. Complete each and obtain signature or stamp.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Stop</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {CHECKOUT_STOPS.map((item) => (
                  <tr key={item.stop} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.stop}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Role-Specific Requirements
          </h3>
          <div className="mt-4 space-y-3">
            {ROLE_REQUIREMENTS.map((item) => (
              <div key={item.role} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.role}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.requirement}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checkout Checklists
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">30 Days Before</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_30_DAYS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">14 Days Before</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_14_DAYS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">7 Days Before</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_7_DAYS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Day of Departure</h4>
              <ul className="mt-2 space-y-1">
                {CHECKLIST_DEPARTURE.map((item) => (
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

    leave: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Terminal Leave
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Terminal leave allows you to use accrued leave before your EAS date. Your Estimated Departure Date (EDD)
            is the terminal leave start date, and your EAS date is the end of terminal leave.
          </p>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Planning Terminal Leave</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• Calculate leave balance in MOL</li>
              <li>• Determine desired terminal leave start date</li>
              <li>• Estimated Departure Date (EDD) = terminal leave start date</li>
              <li>• EAS date = end of terminal leave</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Terminal Leave Over 90 Days</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If requesting more than 90 days of terminal leave, HQMC approval is required.
            Submit request through command and include approval letter in OBI package.
          </p>
        </section>

        <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Special Leave Accrual (SLA)</h4>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            <strong>Important:</strong> Leave over 60 days is lost on October 1st unless you have SLA authorization.
            Request SLA through your command before detaching on terminal leave. IPAC does not process SLA requests.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Adjusting Your EDD
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            If your Estimated Departure Date changes after OBI approval:
          </p>
          <ol className="mt-4 space-y-2">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Notify IPAC Outbound immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">OBI returns to S-1 for reapproval</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Terminal leave dates may be adjusted based on current leave balance</span>
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SkillBridge Program
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            DoD SkillBridge provides civilian work experience during your last 180 days of service.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">What SkillBridge Provides</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Gain civilian job skills</li>
                <li>• Work with approved industry partners</li>
                <li>• Remain on active duty status</li>
                <li>• May be used with terminal leave</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-medium text-blue-800 dark:text-blue-200">SkillBridge Approval</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                <li>• Must be approved per MARADMIN 280/24</li>
                <li>• Include approved package in OBI documents</li>
                <li>• Coordinate timing with terminal leave</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    ),

    travel: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Distribution Management Office (DMO)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            DMO handles your personal property shipment when you EAS.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">What DMO Does</h4>
              <ul className="mt-2 space-y-1">
                {DMO_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">DMO Endorsement Letter Contains</h4>
              <ul className="mt-2 space-y-1">
                {DMO_LETTER_CONTENTS.map((content) => (
                  <li key={content} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Final Travel Claim
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Submit your final travel claim after separation through MOL:
          </p>
          <ol className="mt-4 space-y-2">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Log into Marine Online</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Click the TRAVEL tab</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Follow prompts for final travel voucher</span>
            </li>
          </ol>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Required Documents</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• DD Form 214</li>
              <li>• Separation Orders</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Travel Entitlements
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The Marine Corps pays for travel to your Home of Record (HOR).
          </p>
          <div className="mt-4 space-y-3">
            {TRAVEL_ENTITLEMENTS.map((item) => (
              <div key={item.type} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.type}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources & Contacts
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Installation Resources</h4>
              <ul className="mt-2 space-y-2">
                {RESOURCES.map((res) => (
                  <li key={res.name} className="text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium">{res.name}:</span> {res.purpose}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Online Resources</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="https://mol.tfs.usmc.mil" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sa-red)] underline hover:no-underline">
                    Marine Online (MOL)
                  </a>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400"> - OBI access</span>
                </li>
                <li>
                  <a href="https://milconnect.dmdc.osd.mil" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sa-red)] underline hover:no-underline">
                    MilConnect
                  </a>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400"> - TRS verification</span>
                </li>
                <li>
                  <a href="https://www.ebenefits.va.gov" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--sa-red)] underline hover:no-underline">
                    eBenefits
                  </a>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400"> - VA benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
