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
  { label: "Definition", value: "Early release from active duty before normal EAS date" },
  { label: "Authority", value: "MCO 1900.16, specific MARADMINs" },
  { label: "Approval", value: "Requires command and HQMC approval" },
  { label: "Common Types", value: "Education, employment, hardship, convenience of government" },
  { label: "Timeline", value: "Allow 90-120 days for processing and approval" },
];

const EARLY_RELEASE_TYPES = [
  {
    type: "Education",
    description: "Release to attend accredited school/university",
    requirement: "Acceptance letter, start date before normal EAS",
    timeline: "90 days before school start"
  },
  {
    type: "Employment",
    description: "Firm job offer requiring early start",
    requirement: "Written job offer with start date",
    timeline: "60-90 days processing"
  },
  {
    type: "Hardship",
    description: "Personal or family emergency/hardship",
    requirement: "Documentation of hardship, Red Cross referral",
    timeline: "Case dependent, 30-60 days"
  },
  {
    type: "Convenience of Government",
    description: "Manning reductions, force shaping",
    requirement: "Announced by MARADMIN, volunteer basis",
    timeline: "Varies by program"
  },
];

const ELIGIBILITY_CRITERIA = [
  "Be within 90-180 days of normal EAS (varies by type)",
  "Have no court-martial convictions in past 24 months",
  "Not under investigation or pending disciplinary action",
  "Not have a PRO/CON mark of 4.0 or below in past 6 months",
  "Favorable recommendation from commanding officer",
  "No outstanding service obligations (school, bonus, etc.)",
  "Meet minimum service requirements for benefits desired",
];

const REQUIRED_DOCUMENTATION = [
  { document: "Request Letter", details: "Formal request via chain of command explaining reason for early release" },
  { document: "Command Endorsement", details: "CO recommendation with manpower impact assessment" },
  { document: "Supporting Docs", details: "School acceptance letter, job offer, hardship documentation, etc." },
  { document: "Service Record Review", details: "Current Page 11 entries, PRO/CON marks, evaluations" },
  { document: "Obligations Check", value: "Verify no outstanding commitments (bonus, school, flight training)" },
];

const APPROVAL_PROCESS_STEPS = [
  "Discuss with immediate chain of command",
  "Gather required supporting documentation",
  "Submit formal request letter via chain of command",
  "Command conducts service record review",
  "CO provides endorsement (favorable or unfavorable)",
  "Package forwarded to HQMC for final decision",
  "HQMC review and approval/disapproval (30-60 days)",
  "If approved, orders issued with new separation date",
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types" },
  { id: "process", label: "Process" },
  { id: "references", label: "References", type: "references" as const },
];

export function VoluntaryEarlyReleaseContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Voluntary Early Release
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Voluntary early release allows Marines to separate from active duty before their normal EAS date
            for specific approved reasons such as education, employment, or hardship. All early release requests
            require command and HQMC approval and must meet strict eligibility criteria. Early release is not
            guaranteed and depends on individual circumstances and Marine Corps needs.
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
            General Eligibility Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {ELIGIBILITY_CRITERIA.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Not Guaranteed</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Early release is a privilege, not a right. Approval depends on individual circumstances, command
            recommendation, manpower needs, and Marine Corps priorities. Submit requests early and have a
            backup plan in case your request is denied.
          </p>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Service Obligations</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Marines with service obligations from reenlistment bonuses, specialized training, or education
            programs are generally not eligible for early release. These obligations must be fulfilled or
            repaid before separation. Check with your career planner if you have any obligations.
          </p>
        </section>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Early Release
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {EARLY_RELEASE_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Education Early Release
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines may request early release to attend an accredited educational institution. The school
            start date must be before your normal EAS, and the release date is typically within 90 days
            of the school start.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Requirements:</h4>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Official acceptance letter from accredited institution</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> School start date confirmed and before normal EAS</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Explanation of why education cannot start after normal EAS</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> TAP completion (or scheduled before release date)</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Command endorsement supporting the request</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Employment Early Release
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Early release for employment requires a firm, written job offer with a specific start date
            that cannot be deferred to your normal EAS date.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Requirements:</h4>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Written job offer on company letterhead</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Specific start date that cannot be postponed</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Employer statement explaining why start date is inflexible</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Job must provide clear career benefit or advancement</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> TAP completion prior to release</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Hardship Early Release
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Hardship release is for Marines facing significant personal or family emergencies that require
            their presence and cannot be resolved while on active duty.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Common Hardship Reasons:</h4>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Death or severe illness of immediate family member</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Family member requires care only you can provide</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Severe financial hardship affecting dependents</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Documented family emergency requiring your presence</li>
            </ul>
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Required Documentation:</h4>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Red Cross verification or referral</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Medical documentation (if illness-related)</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Financial records (if financial hardship)</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Detailed explanation of hardship and why early release is necessary</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Documentation that no other family members can provide support</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Convenience of the Government
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Periodically, the Marine Corps offers early release programs to reduce manning levels in
            specific MOSs or ranks. These programs are announced via MARADMIN and are voluntary.
          </p>
          <div className="mt-4 space-y-2">
            <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Typical Program Features:</h4>
            <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Targets specific overmanned MOSs or ranks</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Usually limited application window</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> May include separation incentive pay</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Requires command endorsement</li>
              <li className="flex gap-2"><span className="text-[var(--sa-red)]">•</span> Final approval by HQMC/manpower</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Check MARADMINs</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Convenience of government programs are announced via MARADMIN. Monitor MARADMINs regularly
            if you&apos;re interested in early release opportunities. Your career planner can help identify
            relevant programs for your MOS and rank.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Early Release Approval Process
          </h3>
          <ol className="mt-4 space-y-2">
            {APPROVAL_PROCESS_STEPS.map((step, index) => (
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
            Required Documentation
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Document</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Details</th>
                </tr>
              </thead>
              <tbody>
                {REQUIRED_DOCUMENTATION.map((item) => (
                  <tr key={item.document} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.document}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Request Letter Template Structure
          </h3>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Your request letter should include:</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1.</span> Current rank, name, and service information</li>
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2.</span> Normal EAS date and requested early release date</li>
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3.</span> Specific reason for early release (education, employment, hardship)</li>
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4.</span> Detailed explanation of why early release is necessary</li>
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5.</span> Reference to supporting documentation attached</li>
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">6.</span> Statement of understanding regarding benefits and obligations</li>
              <li className="flex gap-2"><span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">7.</span> Respectful request for favorable consideration</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline and Planning
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Recommended Timeline</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• 120+ days: Begin gathering documentation</li>
                <li>• 90-120 days: Submit request to command</li>
                <li>• 60-90 days: Command endorsement/routing</li>
                <li>• 30-60 days: HQMC review and decision</li>
                <li>• If approved: Orders issued, begin clearing</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Important Notes</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Processing takes 60-90 days minimum</li>
                <li>• No guarantee of approval</li>
                <li>• Must complete TAP before release</li>
                <li>• Have contingency plan if denied</li>
                <li>• Cannot commit to civilian plans until approved</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Your Request is Denied
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Review the denial reason carefully",
              "Determine if additional documentation could strengthen your case",
              "Discuss with chain of command about resubmitting",
              "Consider requesting mast if you believe denial was unjust",
              "Proceed with normal EAS separation planning",
              "Notify school/employer of the outcome",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Start Early</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Early release requests can take 90-120 days to process. Submit your request as early as possible
            within your window. Late requests may be denied due to insufficient processing time, even if
            otherwise meritorious.
          </p>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Command Support Critical</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Your commanding officer&apos;s endorsement carries significant weight. Maintain strong performance,
            discuss your plans early with your chain of command, and ensure your request demonstrates
            thoughtfulness and necessity. An unfavorable command endorsement will likely result in denial.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
