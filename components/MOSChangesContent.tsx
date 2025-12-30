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
  { label: "Also Known As", value: "Lateral Move" },
  { label: "Authority", value: "MCO 1220.1 (MOS Manual)" },
  { label: "Eligibility", value: "Grade/TIS dependent; varies by MOS" },
  { label: "Process", value: "Request → Screening → School → Redesignation" },
  { label: "Contact", value: "Career Planner / MMEA" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "process", label: "Request Process" },
  { id: "considerations", label: "Considerations" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const LATERAL_MOVE_TYPES = [
  { type: "Open Lateral Move", description: "Marine requests move to MOS with vacancies" },
  { type: "Closed Lateral Move", description: "Marine requests move despite no posted vacancies" },
  { type: "Incentivized", description: "Move to critical shortage MOS with possible incentives" },
  { type: "Command Directed", description: "Command initiates move for needs of the service" },
];

const ELIGIBILITY_FACTORS = [
  { factor: "Grade", description: "Most lateral moves available E-3 to E-6" },
  { factor: "Time in Service", description: "Typically requires minimum TIS (often 12-24 months)" },
  { factor: "Time on Station", description: "Usually 24+ months at current duty station" },
  { factor: "Reenlistment Status", description: "May need to extend or reenlist for school" },
  { factor: "Physical Standards", description: "Meet physical requirements for new MOS" },
  { factor: "Security Clearance", description: "Hold or be eligible for required clearance" },
  { factor: "ASVAB Scores", description: "Meet line scores for target MOS" },
];

const REQUEST_STEPS = [
  "Research target MOS requirements and opportunities",
  "Discuss with Career Planner to assess eligibility",
  "Complete screening requirements (medical, ASVAB, etc.)",
  "Submit formal request via Career Planner",
  "Package routed to MMEA for approval",
  "If approved, receive orders to MOS school",
  "Complete MOS school training",
  "Redesignated to new PMOS",
];

const SCREENING_REQUIREMENTS = [
  { requirement: "Medical Screening", description: "Ensure fit for new MOS physical demands" },
  { requirement: "ASVAB Review", description: "Verify line scores meet requirements" },
  { requirement: "Security Clearance", description: "Verify clearance eligibility if required" },
  { requirement: "Interview/Assessment", description: "Some MOSs require additional screening" },
  { requirement: "Physical Standards", description: "Meet height/weight and PFT requirements" },
];

const CONSIDERATIONS = [
  { title: "Career Impact", description: "Restarting in a new field may affect promotion timeline" },
  { title: "School Length", description: "Some MOS schools are lengthy (months)" },
  { title: "Geographic Options", description: "New MOS may have different billet locations" },
  { title: "Reenlistment", description: "May need to extend or reenlist for school/training" },
  { title: "Grade Retention", description: "Usually retain current grade during transition" },
  { title: "Competitiveness", description: "Some MOSs are highly sought after with limited slots" },
];

export function MOSChangesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MOS Changes (Lateral Moves)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            A lateral move allows Marines to voluntarily change their Military Occupational Specialty (MOS)
            to a different career field. This provides opportunities for career development, new challenges,
            or alignment with personal interests while continuing to serve.
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
            Types of Lateral Moves
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
                {LATERAL_MOVE_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Career Planner First</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Your Career Planner is the primary resource for lateral move information. They can advise
            on current opportunities, eligibility requirements, and help navigate the request process.
            Start any lateral move discussion with your Career Planner.
          </p>
        </section>
      </div>
    ),

    eligibility: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Factors
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {ELIGIBILITY_FACTORS.map((item) => (
                  <tr key={item.factor} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.factor}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Screening Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {SCREENING_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            ASVAB Requirements
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Each MOS has specific ASVAB line score requirements. Common composites include:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">GT (General Technical)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Required for many technical and administrative MOSs
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MM (Mechanical Maintenance)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Required for vehicle and equipment maintenance MOSs
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">EL (Electronics)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Required for communications and electronics MOSs
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">CL (Clerical)</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Required for administrative and supply MOSs
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Retesting</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If your ASVAB scores don&apos;t meet requirements for your desired MOS, you may be eligible
            to retest. Discuss options with your Career Planner and consider focused study to improve
            specific line scores.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Request Process
          </h3>
          <ol className="mt-4 space-y-2">
            {REQUEST_STEPS.map((step, index) => (
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
            Package Contents
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A complete lateral move request typically includes:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Formal request letter/statement",
              "Current ASVAB scores",
              "Medical screening results",
              "Commander's endorsement",
              "Career Planner recommendation",
              "Security clearance verification (if applicable)",
              "Physical fitness documentation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Expectations
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Screening Phase</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                2-4 weeks for medical, ASVAB review, and documentation
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MMEA Processing</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                2-8 weeks depending on MOS and availability
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">School Assignment</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Variable based on class availability
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Total Process</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                3-12 months from request to redesignation
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">MMEA Approval</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Manpower Management Enlisted Assignments (MMEA) at HQMC has final approval authority.
            They balance individual requests with Marine Corps manning requirements. Not all requests
            are approved, even for qualified Marines.
          </p>
        </section>
      </div>
    ),

    considerations: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Considerations
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {CONSIDERATIONS.map((item) => (
              <div key={item.title} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Career Implications
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Potential Benefits</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• New challenges and skill development</li>
                <li>• Better promotion opportunities in new field</li>
                <li>• Alignment with career interests</li>
                <li>• Transferable skills for civilian career</li>
              </ul>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Potential Challenges</h4>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li>• Starting over in new field</li>
                <li>• Possible promotion delay during transition</li>
                <li>• New peer group and leadership</li>
                <li>• Learning curve in new MOS</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Questions to Ask
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "What are the promotion rates in the target MOS?",
              "Where are billets located for this MOS?",
              "What is the school length and location?",
              "Are there reenlistment/extension requirements?",
              "What are the civilian career applications?",
              "How competitive is entry into this MOS?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">?</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Research First</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Talk to Marines already in your target MOS. They can provide realistic expectations
            about the job, career progression, and lifestyle. Your Career Planner can often
            connect you with Marines in the field.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Requesting
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Research target MOS requirements",
              "Verify ASVAB scores meet requirements",
              "Review current reenlistment/extension status",
              "Check security clearance requirements",
              "Assess physical/medical requirements",
              "Talk to Marines in target MOS",
              "Discuss with Career Planner",
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
            Request Package
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Complete formal request letter",
              "Complete medical screening",
              "Obtain ASVAB verification",
              "Verify security clearance status",
              "Get commander's endorsement",
              "Career Planner recommendation",
              "Submit complete package",
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
            After Approval
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Receive orders to MOS school",
              "Complete any pre-requisite training",
              "Check-in to school",
              "Complete MOS training",
              "Graduate and receive new MOS designation",
              "Report to new duty station/unit",
              "Verify MCTFS shows new PMOS",
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
