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
  { label: "Definition", value: "Additional MOS (AMOS) - secondary occupational specialty" },
  { label: "Authority", value: "MCO 1220.1 (MOS Manual)" },
  { label: "Purpose", value: "Broaden skills, enhance career, fill needs" },
  { label: "Limit", value: "Marines may hold multiple AMOS designations" },
  { label: "Contact", value: "Career Planner, S-3, MMEA" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "how-to-obtain", label: "How to Obtain" },
  { id: "management", label: "Management" },
  { id: "benefits", label: "Benefits" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const AMOS_SOURCES = [
  { source: "Formal School", description: "Complete MOS-producing school", requirement: "School attendance and graduation" },
  { source: "OJT Qualification", description: "Demonstrate proficiency through on-the-job training", requirement: "Commander certification" },
  { source: "B-Billet Assignment", description: "Serve in qualifying special duty", requirement: "Complete tour successfully" },
  { source: "Lateral Move History", description: "Retain previous PMOS as AMOS", requirement: "After successful lat move" },
];

const COMMON_AMOS_PATHS = [
  { path: "Drill Instructor", amos: "8511/8512", description: "Earned upon DI school graduation and tour completion" },
  { path: "Recruiter", amos: "8411/8412", description: "Earned upon recruiting school and successful tour" },
  { path: "Combat Instructor", amos: "8531", description: "Earned through ITB/SOI instructor duty" },
  { path: "Martial Arts Instructor", amos: "0916/0917/0918", description: "Earned through MAIT/MAI qualification" },
  { path: "MSG Duty", amos: "8151/8152/8153", description: "Earned through MSG school and duty" },
];

const AMOS_BENEFITS = [
  "Broader career opportunities",
  "Enhanced promotion competitiveness",
  "More duty station options",
  "Recognition of diverse skills",
  "Potential for special assignments",
  "Post-service employment value",
];

const MANAGEMENT_ACTIONS = [
  { action: "Assignment", description: "AMOS added to record after qualifying", processed: "Unit Diary" },
  { action: "Verification", description: "Confirm AMOS properly recorded", processed: "MOL/MCTFS" },
  { action: "Removal", description: "Remove outdated or erroneous AMOS", processed: "Unit Diary/MMEA" },
  { action: "Update", description: "Change AMOS level or designation", processed: "Unit Diary" },
];

const AMOS_VS_PMOS = [
  { aspect: "Priority", pmos: "Primary, defines your occupational field", amos: "Secondary, supplements PMOS" },
  { aspect: "Assignment", pmos: "Normally assigned by PMOS", amos: "May be assigned by AMOS if needed" },
  { aspect: "Promotion", pmos: "Compete within PMOS", amos: "May enhance overall record" },
  { aspect: "Training", pmos: "Initial MOS school", amos: "Additional schools or OJT" },
];

export function AdditionalMOSAssignmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Additional MOS (AMOS) Assignment
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            An Additional MOS (AMOS) is a secondary occupational specialty that supplements a
            Marine&apos;s Primary MOS (PMOS). Marines can earn AMOS designations through formal schools,
            on-the-job training, or special duty assignments. AMOS broaden a Marine&apos;s skills and
            may provide additional career opportunities.
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
            PMOS vs. AMOS
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Aspect</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">PMOS</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">AMOS</th>
                </tr>
              </thead>
              <tbody>
                {AMOS_VS_PMOS.map((item) => (
                  <tr key={item.aspect} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.aspect}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.pmos}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.amos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Career Enhancement</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            AMOS designations demonstrate versatility and can set you apart during selection boards.
            Marines with diverse skill sets documented through AMOS often have more assignment options
            and are viewed as more well-rounded.
          </p>
        </section>
      </div>
    ),

    "how-to-obtain": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Ways to Obtain AMOS
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Source</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {AMOS_SOURCES.map((item) => (
                  <tr key={item.source} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.source}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common AMOS Paths
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Path</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">AMOS</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_AMOS_PATHS.map((item) => (
                  <tr key={item.path} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.path}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.amos}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OJT Qualification Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Identify AMOS that can be earned through OJT",
              "Work with command to develop training plan",
              "Complete required training and experience",
              "Demonstrate proficiency in MOS tasks",
              "Commander certifies qualification",
              "S-1 processes Unit Diary to assign AMOS",
              "Verify AMOS recorded in MCTFS",
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

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">MOS Manual Reference</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Not all MOSs can be obtained as AMOS through OJT. Check the MOS Manual (MCO 1220.1)
            for specific requirements for each MOS. Some require formal school attendance while
            others allow OJT qualification.
          </p>
        </section>
      </div>
    ),

    management: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            AMOS Management Actions
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Processed By</th>
                </tr>
              </thead>
              <tbody>
                {MANAGEMENT_ACTIONS.map((item) => (
                  <tr key={item.action} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.action}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.processed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verifying Your AMOS
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Where to Check</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• MOL (Marine Online)</li>
                <li>• MCTFS printout</li>
                <li>• SRB/OQR</li>
                <li>• Unit Diary history</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">What to Verify</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• AMOS correctly listed</li>
                <li>• All earned AMOS appear</li>
                <li>• No erroneous AMOS</li>
                <li>• AMOS dates accurate</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Correcting AMOS Records
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Identify AMOS record discrepancy",
              "Gather supporting documentation",
              "Submit correction request to S-1",
              "S-1 processes corrective Unit Diary",
              "Verify correction in MCTFS",
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
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Regular Review</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Periodically review your MOS record to ensure all earned AMOS are properly recorded.
            Missing AMOS can affect assignment options and selection board consideration.
          </p>
        </section>
      </div>
    ),

    benefits: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Benefits of AMOS
          </h3>
          <ul className="mt-4 space-y-2">
            {AMOS_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Career Impact
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Assignments</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                AMOS can qualify you for additional billets beyond your PMOS, increasing assignment options.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Selection Boards</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Diverse experience shown through AMOS demonstrates well-rounded development.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Special Duty</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Some special duties prefer or require specific AMOS qualifications.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Transition</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Multiple MOSs provide more marketable skills for civilian transition.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Strategic AMOS Acquisition
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Consider pursuing AMOS that:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Complement your PMOS",
              "Open doors to desired duty stations",
              "Enhance promotion competitiveness",
              "Develop leadership skills (DI, Recruiter)",
              "Provide civilian-marketable skills",
              "Align with long-term career goals",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Career Planner Guidance</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Discuss AMOS opportunities with your Career Planner. They can advise on which AMOS
            would most benefit your career path and how to pursue them.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pursuing an AMOS
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Identify desired AMOS",
              "Check requirements in MOS Manual",
              "Discuss with Career Planner",
              "Determine path (school, OJT, B-billet)",
              "Meet eligibility requirements",
              "Complete required training/duty",
              "Ensure AMOS recorded in MCTFS",
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
            After Earning AMOS
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify AMOS in MOL/MCTFS",
              "Check SRB for correct entry",
              "Retain training documentation",
              "Update career goals with Career Planner",
              "Consider future assignment options",
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
            If AMOS Missing from Record
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Gather proof of qualification",
              "School certificate or commander certification",
              "Submit to S-1 for correction",
              "Request corrective Unit Diary",
              "Verify correction processed",
              "Follow up if not corrected",
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
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
