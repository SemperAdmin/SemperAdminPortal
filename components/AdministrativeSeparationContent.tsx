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
  { label: "Authority", value: "MCO 1900.16 (Separation and Retirement Manual)" },
  { label: "Characterization Types", value: "Honorable, General (Under Honorable), Other Than Honorable" },
  { label: "Board Eligibility", value: "Required for 6+ years or OTH proposed" },
  { label: "Notification Rights", value: "Written notice, right to respond, counsel" },
  { label: "Processing Time", value: "Varies by basis and characterization" },
];

const SEPARATION_BASES = [
  { basis: "Misconduct", description: "Pattern of minor offenses, serious offense, or civilian conviction", characterization: "General or OTH" },
  { basis: "Unsatisfactory Performance", description: "Continued failure to meet performance standards", characterization: "General or Honorable" },
  { basis: "Drug Abuse", description: "Illegal drug use or failed drug test", characterization: "OTH (mandatory)" },
  { basis: "Serious Offense", description: "UCMJ conviction or civil conviction", characterization: "General or OTH" },
  { basis: "Fraudulent Entry", description: "False statements at enlistment", characterization: "General or OTH" },
  { basis: "Weight Control Failure", description: "Failure to meet body composition standards", characterization: "Honorable or General" },
];

const CHARACTERIZATION_TYPES = [
  {
    type: "Honorable",
    description: "Quality of service was honest and faithful",
    impact: "Full VA benefits, minimal civilian impact"
  },
  {
    type: "General (Under Honorable)",
    description: "Service was satisfactory but not excellent",
    impact: "Most VA benefits, some civilian impact"
  },
  {
    type: "Other Than Honorable (OTH)",
    description: "Serious misconduct or failure to meet standards",
    impact: "Loss of most VA benefits, significant civilian impact"
  },
];

const DUE_PROCESS_RIGHTS = [
  { right: "Written Notification", description: "Notice of basis, proposed characterization, and rights" },
  { right: "Consult with Counsel", description: "Legal assistance attorney or civilian counsel" },
  { right: "Submit Matters", description: "Written statements, letters of recommendation" },
  { right: "Administrative Board", description: "If 6+ years or OTH proposed (unless waived)" },
  { right: "Right to Appear", description: "Testify at board, present witnesses" },
  { right: "Right to Appeal", description: "Through proper channels if errors occurred" },
];

const BOARD_PROCEDURES = [
  { step: "Notification", description: "Marine receives written notice of proposed separation" },
  { step: "Consult Counsel", description: "Meet with legal assistance to understand rights" },
  { step: "Submit Response", description: "Written matters due within specified timeframe" },
  { step: "Board Convenes", description: "Three-member board hears evidence and testimony" },
  { step: "Board Recommendation", description: "Board recommends retention or separation" },
  { step: "Final Authority Decision", description: "Separation authority makes final decision" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "bases", label: "Bases for Separation" },
  { id: "characterization", label: "Characterization" },
  { id: "due-process", label: "Due Process" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function AdministrativeSeparationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Separation
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Administrative separation is the involuntary discharge of a Marine for reasons other than
            disability, reaching mandatory retirement, or end of enlistment. It may result from misconduct,
            failure to meet standards, or other administrative reasons. The characterization of service
            (Honorable, General, or OTH) depends on the basis for separation and the Marine&apos;s overall record.
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
            Separation Authority
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The separation authority varies based on the proposed characterization:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Honorable</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Battalion or squadron commander or higher
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">General</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Colonel-level commander or higher
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">OTH</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                General officer or Secretary of the Navy
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Seek Legal Counsel Immediately</h4>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            If you receive notification of proposed administrative separation, consult with Legal Assistance
            immediately. You have important rights that must be exercised within specific timeframes. An attorney
            can explain your options, help you prepare your response, and represent you if a board is required.
          </p>
        </section>
      </div>
    ),

    bases: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Bases for Administrative Separation
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Basis</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Typical Characterization</th>
                </tr>
              </thead>
              <tbody>
                {SEPARATION_BASES.map((item) => (
                  <tr key={item.basis} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.basis}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.characterization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Misconduct Separation
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Misconduct is the most common basis for administrative separation. It includes:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Pattern of misconduct: Multiple minor offenses showing disregard for authority",
              "Commission of a serious offense: Single serious UCMJ violation",
              "Conviction by civil court: Felony or multiple misdemeanors",
              "Drug abuse: Any illegal drug use (mandatory OTH characterization)",
              "Fraudulent entry: Material false statements at enlistment",
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
            Unsatisfactory Performance
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines may be separated for continued failure to meet performance standards:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Failure to complete required training or qualifications",
              "Substandard duty performance despite counseling",
              "Inability or unwillingness to adapt to military life",
              "Defective attitude toward authority",
              "Usually receives Honorable or General characterization based on overall record",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Drug Abuse = OTH</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Any administrative separation for drug abuse requires an Other Than Honorable characterization.
            This is mandatory and applies to all illegal drug use, including marijuana in states where it
            may be legal. There is no discretion for a higher characterization.
          </p>
        </section>
      </div>
    ),

    characterization: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Characterization
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {CHARACTERIZATION_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Factors in Characterization Decision
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The separation authority considers multiple factors when determining characterization:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Positive Factors</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Length of service</li>
                <li>• Awards and commendations</li>
                <li>• Performance evaluations</li>
                <li>• Combat service</li>
                <li>• Letters of recommendation</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Negative Factors</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Pattern of misconduct</li>
                <li>• NJP or court-martial history</li>
                <li>• Adverse counseling entries</li>
                <li>• Failed rehabilitation attempts</li>
                <li>• Nature of separation basis</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Impact on Benefits
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Benefit</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Honorable</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">General</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">OTH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">GI Bill</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Full</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Usually eligible</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Not eligible</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">VA Healthcare</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Eligible</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Usually eligible</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Very limited</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">VA Home Loan</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Eligible</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Usually eligible</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Not eligible</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">Veteran Preference</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Full</td>
                  <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">Limited</td>
                  <td className="py-2 text-zinc-600 dark:text-zinc-400">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Build Your Case</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            If facing separation, gather all positive documentation: awards, letters of recommendation,
            performance evaluations, and evidence of rehabilitation. Submit these with your response
            to the notification. The characterization decision significantly affects your future, so
            present the strongest case possible for retention or higher characterization.
          </p>
        </section>
      </div>
    ),

    "due-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Due Process Rights
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Right</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {DUE_PROCESS_RIGHTS.map((item) => (
                  <tr key={item.right} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.right}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Notification Procedure
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When notified of proposed separation, you will receive:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Written notification letter explaining basis for separation",
              "Proposed characterization of service",
              "Information about your rights (consult counsel, submit matters, board)",
              "Deadline for submitting response (usually 7 calendar days, extendable)",
              "List of supporting documents (NJPs, Page 11s, etc.)",
              "Contact information for Legal Assistance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Board Process
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {BOARD_PROCEDURES.map((item) => (
                  <tr key={item.step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.step}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Eligibility
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You are entitled to an administrative board if:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-900 dark:text-green-100">Board Required</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-800 dark:text-green-200">
                <li>• 6+ years of service (any type)</li>
                <li>• OTH characterization proposed</li>
                <li>• Both conditions apply</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Board Not Required</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Less than 6 years service</li>
                <li>• Honorable or General proposed</li>
                <li>• Marine waives board rights</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Do Not Waive Board Without Counsel</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If you are eligible for an administrative board, do not waive this right without consulting
            a legal assistance attorney. The board is your opportunity to present evidence, testimony,
            and witnesses in your defense. Waiving the board means the separation authority decides
            based solely on the written record.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Receiving Notification
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Read notification letter thoroughly",
              "Note all deadlines for response",
              "Schedule appointment with Legal Assistance immediately",
              "Gather all positive documentation (awards, evaluations, letters)",
              "Do not discuss case with others beyond attorney",
              "Do not sign anything without legal counsel review",
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
            Preparing Response
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Work with attorney to draft written statement",
              "Collect letters of recommendation from supervisors",
              "Obtain copies of awards and certificates",
              "Gather performance evaluations",
              "Document any rehabilitation or corrective actions",
              "Prepare list of character witnesses if board requested",
              "Submit all matters before deadline",
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
            If Board is Held
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Attend all preparation sessions with attorney",
              "Review testimony with counsel",
              "Prepare witnesses (if permitted)",
              "Dress appropriately for board hearing",
              "Be respectful and professional at all times",
              "Answer questions honestly and directly",
              "Accept board recommendation professionally",
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
            After Final Decision
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Obtain copy of separation orders",
              "Complete checkout procedures",
              "Understand benefits eligibility based on characterization",
              "Request copy of service record (DD 214)",
              "Consult with transition assistance if eligible",
              "Consider discharge upgrade petition if OTH received",
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
