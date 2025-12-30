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
  { id: "requirements", label: "Requirements" },
  { id: "theater", label: "Theater-Specific" },
  { id: "imr-status", label: "IMR Status" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Tracking System", description: "Medical Readiness Reporting System (MRRS)" },
  { element: "Status Categories", description: "Fully Ready, Partially Ready, Not Ready" },
  { element: "Requirements", description: "Immunizations, PHA, dental, vision, HIV" },
  { element: "Timeline", description: "Complete 90+ days before deployment" },
  { element: "Authority", description: "MCO 6100.13, BUMEDINST 6120.20" },
];

const MEDICAL_REQUIREMENTS = [
  { requirement: "Periodic Health Assessment (PHA)", frequency: "Annual", description: "Comprehensive health screening" },
  { requirement: "Immunizations", frequency: "Per AOR requirements", description: "Theater-specific vaccinations" },
  { requirement: "HIV Test", frequency: "Every 2 years", description: "Required for deployment" },
  { requirement: "DNA Sample", frequency: "One-time", description: "On file with AFMES" },
  { requirement: "Vision Screening", frequency: "Annual", description: "Part of PHA" },
  { requirement: "Hearing Test", frequency: "Annual", description: "Part of PHA" },
  { requirement: "Dental Exam", frequency: "Annual", description: "Class 1 or 2 required" },
];

const THEATER_REQUIREMENTS = [
  { requirement: "Anthrax series", aors: "CENTCOM" },
  { requirement: "Smallpox", aors: "CENTCOM" },
  { requirement: "Malaria prophylaxis", aors: "Africa, Pacific" },
  { requirement: "Japanese Encephalitis", aors: "Pacific" },
  { requirement: "Typhoid", aors: "Multiple AORs" },
  { requirement: "Yellow Fever", aors: "Africa, South America" },
];

const NON_DEPLOYABLE_CONDITIONS = [
  "Pending medical evaluation",
  "Pregnancy",
  "Temporary Limited Duty (TLD)",
  "Unresolved medical conditions",
  "Missing required immunizations",
];

const RESOLUTION_STEPS = [
  "Identify condition preventing deployment",
  "Work with Medical to resolve",
  "Obtain clearance documentation",
  "Update IMR status",
  "Verify deployable status",
];

const CHECKLIST_90_DAYS = [
  "Check IMR status in MOL",
  "Complete PHA if due",
  "Update immunizations",
  "Complete HIV test if due",
  "Verify DNA on file",
  "Resolve any medical holds",
  "Obtain deployment medications",
];

const CHECKLIST_30_DAYS = [
  "Final IMR verification",
  "Obtain medication supply",
  "Complete any waivers",
  "Medical record review",
];

export function MedicalReadinessContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Readiness Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Medical readiness ensures you are physically prepared for deployment. You must meet all medical
            readiness requirements before deploying to an operational theater. The Individual Medical Readiness
            (IMR) system tracks your medical status. Non-deployable Marines create gaps in unit manning and
            mission capability.
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

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Critical Requirement</h4>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Complete all medical requirements 90+ days before deployment to allow time for any issues
            that may arise during processing.
          </p>
        </div>
      </>
    ),

    requirements: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Readiness Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The following requirements must be current and documented before deployment.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Standard Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Frequency</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {MEDICAL_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.requirement}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.frequency}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    theater: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Theater-Specific Requirements
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Depending on your deployment location, additional requirements may include specific vaccinations
            and prophylaxis.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Theater Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Common AORs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {THEATER_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.requirement}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.aors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Check With Medical</h4>
          <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
            Theater requirements change based on operational conditions. Always verify current requirements
            with your medical section.
          </p>
        </div>
      </>
    ),

    "imr-status": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Checking Your IMR Status
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your Individual Medical Readiness (IMR) status can be checked via MOL or through your medical section.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Via MOL
          </h3>
          <ol className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>1. Log into Marine Online</li>
            <li>2. Navigate to Medical Readiness</li>
            <li>3. Review IMR status</li>
            <li>4. Identify any &quot;red&quot; or &quot;amber&quot; items</li>
            <li>5. Schedule appointments to resolve</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Non-Deployable Conditions
          </h3>
          <ul className="mt-4 space-y-2">
            {NON_DEPLOYABLE_CONDITIONS.map((condition) => (
              <li key={condition} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {condition}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resolution Process
          </h3>
          <ol className="mt-4 space-y-2">
            {RESOLUTION_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            90+ Days Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_90_DAYS.map((item) => (
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
            30 Days Before Deployment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_30_DAYS.map((item) => (
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Medications</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Ensure 90-day supply of maintenance medications. Verify medications are allowed in theater
            and carry copy of prescriptions.
          </p>
        </div>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
