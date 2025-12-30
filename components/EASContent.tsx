"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS = [
  { label: "Definition", value: "End of Active Service - completion of active duty contract" },
  { label: "Planning Timeline", value: "Begin 18-24 months prior to EAS date" },
  { label: "Decision Point", value: "Reenlistment window typically 13-3 months before EAS" },
  { label: "TAP Requirement", value: "Transition Assistance Program mandatory 365-180 days out" },
  { label: "Terminal Leave", value: "May take accrued leave before separation date" },
];

const PLANNING_TIMELINE = [
  { timeframe: "24 Months Out", actions: "Begin career exploration, research education/employment options" },
  { timeframe: "18 Months Out", actions: "Attend career counseling, review reenlistment options" },
  { timeframe: "12 Months Out", actions: "Complete TAP, update resume, apply for education benefits" },
  { timeframe: "6 Months Out", actions: "Finalize employment/education plans, submit terminal leave request" },
  { timeframe: "90 Days Out", actions: "Complete medical/dental exams, begin clearing process" },
  { timeframe: "30 Days Out", actions: "Final out-processing, verify DD-214, collect records" },
];

const DECISION_FACTORS = [
  { factor: "Career Goals", reenlist: "Advancement opportunity, specialized training", separate: "Pursue civilian career, higher education" },
  { factor: "Financial", reenlist: "Reenlistment bonus, steady income, benefits", separate: "Civilian salary potential, GI Bill benefits" },
  { factor: "Family", reenlist: "Stability, healthcare, housing allowances", separate: "Location choice, family stability, civilian life" },
  { factor: "Lifestyle", reenlist: "Structure, mission focus, Marine identity", separate: "Autonomy, location control, career flexibility" },
];

const FINAL_PAY_ITEMS = [
  "Base pay through final day of service",
  "Unused leave payment (up to 60 days)",
  "Travel allowance to home of record or separation location",
  "Separation pay (if eligible)",
  "Pro-rated BAH/BAS through final day",
  "Any special pays earned through separation",
];

const DD214_VERIFICATION = [
  "Personal information (name, SSN, dates of service)",
  "Rank/grade at separation",
  "Awards and decorations",
  "Character of service (Honorable, General, etc.)",
  "Reenlistment eligibility code (RE code)",
  "Separation code and narrative reason",
  "Total active service dates",
  "Education level completed",
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "decision-factors", label: "Decision Factors" },
  { id: "checklists", label: "Checklists" },
  { id: "dd214", label: "DD-214" },
  { id: "final-pay", label: "Final Pay" },
  { id: "terminal-leave", label: "Terminal Leave" },
  { id: "references", label: "References", type: "references" as const },
];

export function EASContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            End of Active Service (EAS)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            End of Active Service (EAS) marks the completion of your active duty contract and the beginning
            of your transition to civilian life, reserve service, or reenlistment. Proper planning 18-24
            months prior to your EAS date ensures a smooth transition and maximizes your benefits and opportunities.
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
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Options at EAS
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reenlist</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Continue active duty service with potential reenlistment bonus and duty station choice.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Separate</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Complete active service and transition to civilian life or reserve component.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reserves</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Transfer to Selected Marine Corps Reserve (SMCR) for part-time service.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Start Planning Early</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            The most successful transitions begin 18-24 months before EAS. Early planning allows time
            for education applications, job searching, financial preparation, and completing all required
            transition programs. Don&apos;t wait until the last minute.
          </p>
        </section>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            EAS Planning Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Key Actions</th>
                </tr>
              </thead>
              <tbody>
                {PLANNING_TIMELINE.map((item) => (
                  <tr key={item.timeframe} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.timeframe}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transition Assistance Program (TAP)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TAP is mandatory and must be completed 365-180 days before your EAS date. The program includes:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Pre-separation counseling",
              "VA benefits briefing",
              "DOL employment workshop",
              "Financial planning seminar",
              "Optional career technical training tracks",
              "Individual transition plan (ITP) development",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">TAP Completion Required</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            You cannot separate without completing TAP. Commands may deny terminal leave requests if TAP
            is not completed. Schedule your TAP class as soon as you enter the 365-day window.
          </p>
        </section>
      </div>
    ),

    "decision-factors": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reenlistment vs. Separation Decision Factors
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Reenlist</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Separate</th>
                </tr>
              </thead>
              <tbody>
                {DECISION_FACTORS.map((item) => (
                  <tr key={item.factor} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.factor}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.reenlist}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.separate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Questions to Consider
          </h3>
          <div className="mt-4 space-y-3">
            {[
              "Am I eligible for a reenlistment bonus? What is the amount?",
              "What are my promotion prospects if I reenlist?",
              "What civilian job opportunities match my skills and experience?",
              "Will I use my GI Bill benefits immediately or save them?",
              "How will separation affect my family (housing, healthcare, stability)?",
              "What is my total compensation comparison (military vs. civilian)?",
              "Am I emotionally and mentally ready to leave the Marine Corps?",
              "Do I have sufficient savings for the transition period?",
            ].map((question) => (
              <div key={question} className="flex items-start gap-2">
                <span className="text-[var(--sa-red)] mt-0.5">•</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{question}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Career Counseling</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Schedule a counseling session with your Career Planner to review your options. They can
            provide information on reenlistment bonuses, lateral move opportunities, and career progression.
            This information is essential for making an informed decision.
          </p>
        </section>
      </div>
    ),

    checklists: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            24-18 Months Out Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Review EAS date and verify in MOL/MCTFS",
              "Attend career counseling session",
              "Begin researching civilian career options",
              "Explore education opportunities and GI Bill",
              "Start building emergency savings fund",
              "Review credit report and financial health",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            12 Months Out Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete TAP (365-180 days requirement)",
              "Develop Individual Transition Plan (ITP)",
              "Update resume and LinkedIn profile",
              "Apply for education programs if attending school",
              "Research housing options in desired location",
              "Begin networking with civilian employers",
              "Calculate projected income and expenses post-EAS",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            6 Months Out Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Finalize employment or education plans",
              "Apply for jobs or submit college applications",
              "Calculate terminal leave balance",
              "Submit terminal leave request if desired",
              "Schedule separation physical exam",
              "Begin medical/dental record review",
              "Research VA disability claim process",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            90 Days Out Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete all medical and dental appointments",
              "File VA disability claim if applicable",
              "Obtain copies of medical and dental records",
              "Begin clearing base housing (if applicable)",
              "Schedule final pay counseling",
              "Enroll in TAMP (Transitional Assistance Management Program)",
              "Update contact information for final documents",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            30 Days Out Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete command clearing checklist",
              "Turn in all gear and equipment",
              "Obtain DD-214 (Member 4 copy)",
              "Verify DD-214 accuracy before signing",
              "Complete final pay counseling",
              "Schedule household goods shipment if PCSing",
              "Obtain letter of recommendation from command",
              "Make copies of all service records",
              "Register for VA healthcare if eligible",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    dd214: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD Form 214 - Certificate of Release or Discharge
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The DD-214 is your official proof of military service and is critical for accessing veteran
            benefits, employment, education, and VA services. You will receive it upon separation. Verify
            all information carefully before signing, as corrections after separation are difficult.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Critical Items to Verify
          </h3>
          <ul className="mt-4 space-y-2">
            {DD214_VERIFICATION.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD-214 Copies and Protection
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Member 4 Copy</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                This is YOUR copy showing complete service details. Safeguard it carefully. Make multiple
                certified copies for your records.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Member 1 Copy</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Short form version for most purposes. Does not show complete details. Use Member 4 for
                VA benefits and government employment.
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Protect Your DD-214</h4>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Make 5-10 copies immediately</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Store original in fireproof safe</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Scan and save digital copy in secure cloud storage</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Register on eBenefits for online access</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Consider filing with county clerk for permanent record</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Character of Service
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Honorable</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Full VA benefits, veteran preference, best employment prospects</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">General (Under Honorable)</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Most VA benefits, may affect veteran preference and employment</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Other Than Honorable</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Limited benefits, may qualify for some VA services, affects employment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Verify Before Signing</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Review your DD-214 line by line before signing. Any errors should be corrected immediately
            while you&apos;re still on active duty. Post-separation corrections require formal application
            to the Board for Correction of Naval Records (BCNR) and can take months or years.
          </p>
        </section>
      </div>
    ),

    "final-pay": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Final Pay and Entitlements
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Your final pay settlement includes base pay through your separation date, payment for unused
            leave, travel allowances, and any other earned entitlements. Most Marines receive final pay
            within 30 days of separation, though complex cases may take longer.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Final Pay Components
          </h3>
          <ul className="mt-4 space-y-2">
            {FINAL_PAY_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave Payment
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You can sell back up to 60 days of unused leave upon separation. Leave is paid at your
            base pay rate (no BAH/BAS). Leave payment calculation:
          </p>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
              Leave Payment = (Base Pay ÷ 30) × Days of Leave
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
              Example: E-5 with $2,730 base pay selling 30 days = ($2,730 ÷ 30) × 30 = $2,730
            </p>
          </div>
          <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
            Important considerations:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Leave payment is subject to federal income tax</li>
            <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Cannot sell back more than 60 days total in a career</li>
            <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Terminal leave is often more valuable (includes BAH/BAS)</li>
            <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Use-or-lose leave beyond 60 days should be taken before EAS</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Deductions from Final Pay
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your final pay may include deductions for:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Outstanding military debts or overpayments",
              "Government Travel Card balance",
              "Lost or damaged gear charges",
              "Advance pay or bonuses requiring repayment",
              "Taxes on leave payment and final pay",
              "SGLI premiums through final month",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-amber-600 mt-0.5">⚠</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Final Pay Timeline
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Attend final pay counseling (30-60 days before EAS)",
              "Resolve all outstanding debts before separation",
              "Ensure direct deposit information is current",
              "Complete clearing process (releases final pay)",
              "Final pay typically deposited within 30 days of EAS",
              "Review Leave and Earnings Statement (LES) carefully",
              "Contact DFAS if payment not received within 45 days",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Plan for Tax Impact</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Leave payment may push you into a higher tax bracket for that year. Consider setting aside
            25-30% of your leave payment for taxes. Consult a tax professional if you&apos;re selling
            significant leave or have other complex tax situations.
          </p>
        </section>
      </div>
    ),

    "terminal-leave": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Terminal Leave
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Terminal leave allows you to use accrued leave at the end of your service, effectively
            extending your time away from duty while still receiving full pay and benefits. This can
            provide a valuable transition period to start a new job, relocate, or prepare for civilian life.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Terminal Leave Benefits
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Financial</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Full base pay during leave</li>
                <li>• BAH and BAS continue</li>
                <li>• More valuable than selling leave</li>
                <li>• Start civilian job while on leave</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Benefits</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• TRICARE coverage continues</li>
                <li>• Base access maintained</li>
                <li>• Time to relocate and settle</li>
                <li>• Transition period before EAS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Terminal Leave Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Check leave balance in MOL (60-90 days before desired terminal leave start)",
              "Coordinate with command on workload and manning",
              "Submit leave request (DA Form 31) for approval",
              "Complete all required pre-separation tasks before leave starts",
              "Ensure clearing checklist can be completed before/during terminal leave",
              "Maintain contact with command during terminal leave",
              "Complete any required check-ins or final administrative tasks",
              "EAS date remains unchanged - leave ends on your EAS",
            ].map((step, index) => (
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
            Terminal Leave vs. Selling Leave
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Terminal Leave</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Sell Leave</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Pay</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Base + BAH + BAS</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Base pay only</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Benefits</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">All benefits continue</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Benefits end at EAS</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Employment</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Can start civilian job</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Can&apos;t work until EAS</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Value</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Higher total value</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Lower value, lump sum</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Approval</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Requires command approval</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Automatic payment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Important Considerations
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Commands may deny terminal leave due to mission requirements",
              "TAP must be completed before terminal leave begins",
              "Some clearing items must be done in person before leave",
              "If recalled from terminal leave, it becomes ordinary leave",
              "Cannot take terminal leave if being involuntarily separated",
              "May need to return to sign DD-214 if not completed before leave",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-amber-600 mt-0.5">⚠</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Maximize Terminal Leave Value</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Terminal leave is typically worth 40-60% more than selling leave due to BAH/BAS. If you have
            a job starting before your EAS, terminal leave allows you to earn civilian and military pay
            simultaneously. Plan early and coordinate with your command to maximize this benefit.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
