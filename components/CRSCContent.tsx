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
  { id: "eligibility", label: "Eligibility" },
  { id: "how-it-works", label: "How It Works" },
  { id: "application", label: "Application" },
  { id: "documentation", label: "Documentation" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Eligibility", description: "Retired with combat-related VA disability" },
  { element: "Tax Status", description: "Tax-free" },
  { element: "Purpose", description: "Offset VA disability pay reduction to retired pay" },
  { element: "Application", description: "Apply through DFAS after retirement" },
  { element: "Authority", description: "10 U.S.C. 1413a" },
];

const ELIGIBILITY_REQUIREMENTS = [
  "Be entitled to military retired pay (including TDRL)",
  "Have VA-rated disability of 10% or higher",
  "Disability must be combat-related",
  "Be receiving VA disability compensation",
];

const COMBAT_RELATED_CATEGORIES = [
  { category: "Armed Conflict", examples: "Injuries from combat operations" },
  { category: "Hazardous Duty", examples: "Parachute duty, demolition, diving" },
  { category: "Instrumentality of War", examples: "Weapons, vehicles, aircraft, ships" },
  { category: "Simulating War", examples: "Combat training exercises" },
];

const CRSC_VS_CRDP = [
  { factor: "Tax Status", crsc: "Tax-free", crdp: "Taxable" },
  { factor: "VA Rating Required", crsc: "10%+ combat-related", crdp: "50%+ any cause" },
  { factor: "Automatic", crsc: "No, must apply", crdp: "Automatic if eligible" },
  { factor: "Amount", crsc: "Based on combat-related rating", crdp: "Full restoration of offset" },
];

const WITHOUT_CRSC = [
  "Retired pay: $2,000",
  "VA disability pay: $500",
  "Retired pay reduced by VA amount: $2,000 - $500 = $1,500",
  "Total received: $1,500 (retired) + $500 (VA) = $2,000",
];

const WITH_CRSC = [
  "Retired pay after offset: $1,500",
  "VA disability pay: $500",
  "CRSC: $500 (tax-free)",
  "Total received: $1,500 + $500 + $500 = $2,500",
];

const APPLICATION_PROCESS = [
  "Obtain DD Form 2860 (CRSC Application)",
  "Gather supporting documentation",
  "Submit to your branch CRSC board",
  "Board reviews and determines combat-related disabilities",
  "DFAS calculates and pays CRSC",
];

const REQUIRED_DOCUMENTATION = [
  "DD Form 2860",
  "VA rating decision",
  "Service medical records",
  "Line of duty investigations",
  "Combat action documentation",
  "Deployment records",
];

const DURING_SERVICE = [
  "Document all injuries and exposures",
  "Ensure medical records complete",
  "Keep copies of deployment records",
  "Complete Line of Duty investigations",
];

const AFTER_RETIREMENT = [
  "Obtain VA disability rating",
  "Gather supporting documentation",
  "Complete DD Form 2860",
  "Submit to Marine Corps CRSC Board",
  "Track application status",
];

const CRSC_BOARD_INFO = {
  address: [
    "Headquarters Marine Corps",
    "Manpower and Reserve Affairs (MRA)",
    "CRSC Branch",
    "3280 Russell Road",
    "Quantico, VA 22134-5103",
  ],
  email: "CRSC@usmc.mil",
};

const IF_DENIED = [
  "Request reconsideration with additional evidence",
  "Appeal the decision",
  "Consult with Veterans Service Organization (VSO)",
];

export function CRSCContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CRSC Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Combat-Related Special Compensation (CRSC) provides tax-free compensation for combat-related
            disabilities. CRSC offsets the VA disability offset that reduces military retired pay. If you
            have combat-related disabilities rated by the VA, you may be eligible for CRSC upon retirement.
            Understanding CRSC helps you plan for post-service benefits.
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

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">For Currently Deploying Marines</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Document all injuries and exposures during deployment. Ensure Line of Duty investigations
            are completed. This documentation supports future CRSC claims.
          </p>
        </div>
      </>
    ),

    eligibility: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CRSC Eligibility Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">You Must:</p>
          <ul className="mt-4 space-y-2">
            {ELIGIBILITY_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Combat-Related Qualification
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMBAT_RELATED_CATEGORIES.map((item) => (
                  <tr key={item.category}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.category}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CRSC vs. CRDP
          </h3>
          <p className="mt-2 text-sm text-amber-600 dark:text-amber-400 font-medium">
            You cannot receive both. Choose the more beneficial option.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">CRSC</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">CRDP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {CRSC_VS_CRDP.map((item) => (
                  <tr key={item.factor}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.factor}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.crsc}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.crdp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    "how-it-works": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How CRSC Works
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            CRSC provides additional tax-free compensation to offset the reduction in retired pay caused
            by receiving VA disability compensation.
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Without CRSC</h3>
            <ul className="mt-4 space-y-2">
              {WITHOUT_CRSC.map((item) => (
                <li key={item} className="text-sm text-red-700 dark:text-red-300">{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">With CRSC</h3>
            <ul className="mt-4 space-y-2">
              {WITH_CRSC.map((item) => (
                <li key={item} className="text-sm text-green-700 dark:text-green-300">{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="font-semibold text-green-800 dark:text-green-200">CRSC Benefit</h4>
          <p className="mt-1 text-sm text-green-800 dark:text-green-200">
            In this example, CRSC provides an additional $500/month in tax-free compensation,
            increasing total monthly income from $2,000 to $2,500.
          </p>
        </div>
      </>
    ),

    application: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Applying for CRSC
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Apply after retirement once your VA disability rating is established.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Application Process
          </h3>
          <ol className="mt-4 space-y-2">
            {APPLICATION_PROCESS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Marine Corps CRSC Board
          </h3>
          <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p className="font-medium">Submit Application To:</p>
            {CRSC_BOARD_INFO.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-4">
              <span className="font-medium">Email:</span> {CRSC_BOARD_INFO.email}
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
            If Denied
          </h3>
          <ul className="mt-4 space-y-2">
            {IF_DENIED.map((option) => (
              <li key={option} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {option}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    documentation: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documentation
          </h2>
          <ul className="mt-4 space-y-2">
            {REQUIRED_DOCUMENTATION.map((doc) => (
              <li key={doc} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {doc}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Provide Complete Documentation</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Incomplete documentation extends processing times. Gather all supporting documents
            before submitting your application.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During Service
          </h2>
          <div className="mt-4 space-y-2">
            {DURING_SERVICE.map((item) => (
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After Retirement (If Eligible)
          </h2>
          <div className="mt-4 space-y-2">
            {AFTER_RETIREMENT.map((item) => (
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

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Resources</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-800 dark:text-blue-200">
            <li><strong>Marine Corps CRSC Board:</strong> CRSC@usmc.mil</li>
            <li><strong>DFAS:</strong> www.dfas.mil</li>
            <li><strong>VA:</strong> www.va.gov</li>
            <li><strong>VSOs:</strong> DAV, VFW, American Legion</li>
          </ul>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
