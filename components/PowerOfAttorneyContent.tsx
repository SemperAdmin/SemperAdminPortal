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
  { id: "types", label: "POA Types" },
  { id: "obtaining", label: "Obtaining" },
  { id: "protecting", label: "Protecting Yourself" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Preparation", description: "Legal Assistance Office" },
  { element: "Cost", description: "Free for service members" },
  { element: "Types", description: "General, Special/Limited, Healthcare" },
  { element: "Duration", description: "Specify in document" },
  { element: "Revocation", description: "Written revocation at any time" },
  { element: "Authority", description: "State law governs acceptance" },
];

const POA_TYPES = [
  { type: "General POA", authority: "Broad authority over all matters", useCase: "Extensive absence, full trust in agent" },
  { type: "Special/Limited POA", authority: "Specific actions only", useCase: "Single transaction (sell car, sign lease)" },
  { type: "Healthcare POA", authority: "Medical decisions", useCase: "Designate medical decision maker" },
  { type: "Financial POA", authority: "Financial matters only", useCase: "Banking, bill payment" },
  { type: "Military POA", authority: "Military-specific matters", useCase: "ID card renewal, housing" },
];

const COMMON_USES = [
  { purpose: "Pay bills", poaType: "Financial or General" },
  { purpose: "Sell/buy vehicle", poaType: "Special (vehicle)" },
  { purpose: "Manage property", poaType: "Special (property) or General" },
  { purpose: "File taxes", poaType: "Special (taxes)" },
  { purpose: "Handle legal matters", poaType: "General" },
  { purpose: "Access bank accounts", poaType: "Financial" },
  { purpose: "Make medical decisions", poaType: "Healthcare" },
  { purpose: "Enroll children in school", poaType: "Special (education)" },
  { purpose: "Sign lease", poaType: "Special (housing)" },
];

const OBTAINING_STEPS = [
  "Identify what authority is needed",
  "Identify who will be your agent",
  "Schedule appointment with Legal Assistance",
  "Bring identification and agent information",
  "Attorney prepares POA document",
  "Sign and notarize",
  "Provide copy to agent",
];

const REQUIRED_INFO = [
  "Your full legal name and SSN",
  "Agent's full legal name, address, SSN",
  "Specific powers being granted",
  "Duration of POA",
  "Any limitations",
];

const AGENT_CONSIDERATIONS = [
  "Trustworthiness (they will have legal authority)",
  "Availability (can they act when needed)",
  "Capability (can they handle the tasks)",
  "Location (proximity to where actions needed)",
  "Willingness (must agree to serve)",
];

const DURATION_OPTIONS = [
  { duration: "Deployment-specific", description: "Valid only during deployment dates" },
  { duration: "Fixed period", description: "Valid for specific time (1 year)" },
  { duration: "Until revoked", description: "Valid until you revoke in writing" },
  { duration: "Springing", description: "Becomes effective upon specific event" },
];

const SAFETY_MEASURES = [
  "Use Special/Limited POA when possible (not General)",
  "Specify exact authority needed",
  "Set expiration date",
  "Choose trustworthy agent",
  "Monitor accounts remotely if possible",
  "Revoke promptly when no longer needed",
];

const GENERAL_POA_RISKS = [
  "Agent can act on any matter",
  "Potential for misuse",
  "Difficult to undo actions taken",
];

const BEFORE_DEPLOYMENT = [
  "Identify needed POA types",
  "Select trustworthy agent(s)",
  "Schedule Legal Assistance appointment",
  "Prepare POA documents",
  "Sign and notarize",
  "Provide copies to agent(s)",
  "Inform financial institutions if needed",
  "Explain agent responsibilities",
];

const POST_DEPLOYMENT = [
  "Review actions taken by agent",
  "Revoke POA if no longer needed",
  "Notify third parties of revocation",
  "Retrieve POA copies",
];

export function PowerOfAttorneyContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Power of Attorney Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A Power of Attorney (POA) grants someone legal authority to act on your behalf while you are
            deployed. You need specific types of POA for different purposes. Military legal assistance
            offices prepare POAs at no cost. A POA protects your interests and enables your representative
            to handle matters in your absence.
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
      </>
    ),

    types: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Power of Attorney
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authority Granted</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {POA_TYPES.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.authority}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common POA Uses During Deployment
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">POA Type Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_USES.map((item) => (
                  <tr key={item.purpose}>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.purpose}</td>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.poaType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    obtaining: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Obtaining a POA
          </h2>
          <ol className="mt-4 space-y-2">
            {OBTAINING_STEPS.map((step, index) => (
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
            Required Information
          </h3>
          <ul className="mt-4 space-y-2">
            {REQUIRED_INFO.map((info) => (
              <li key={info} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {info}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Choosing Your Agent
          </h3>
          <ul className="mt-4 space-y-2">
            {AGENT_CONSIDERATIONS.map((consideration) => (
              <li key={consideration} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {consideration}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            POA Duration Options
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Duration</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {DURATION_OPTIONS.map((item) => (
                  <tr key={item.duration}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.duration}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Recommendation</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Use deployment-specific or fixed period POAs to limit risk.
          </p>
        </div>
      </>
    ),

    protecting: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Protecting Yourself
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A POA grants significant legal authority. Take steps to protect yourself from potential misuse.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Safety Measures
          </h3>
          <ul className="mt-4 space-y-2">
            {SAFETY_MEASURES.map((measure) => (
              <li key={measure} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {measure}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
            Risks of General POA
          </h3>
          <ul className="mt-4 space-y-2">
            {GENERAL_POA_RISKS.map((risk) => (
              <li key={risk} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {risk}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Revoking a POA
          </h3>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Prepare written revocation</li>
            <li>2. Sign and date revocation</li>
            <li>3. Notify agent in writing</li>
            <li>4. Notify any third parties who relied on POA</li>
            <li>5. Retrieve copies of POA if possible</li>
          </ol>
        </section>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {BEFORE_DEPLOYMENT.map((item) => (
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
            Post-Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {POST_DEPLOYMENT.map((item) => (
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
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
