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
  { id: "process", label: "Enrollment Process" },
  { id: "pcs", label: "EFMP & PCS" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Purpose", description: "Ensure special needs services at duty station" },
  { element: "Enrollment", description: "Mandatory if family member qualifies" },
  { element: "Forms", description: "DD Form 2792 (Medical), DD Form 2792-1 (Educational)" },
  { element: "Screening", description: "Medical provider completes assessment" },
  { element: "Impact", description: "Considered in assignment process" },
  { element: "Authority", description: "MCO 1754.4B" },
];

const QUALIFYING_CONDITIONS = [
  { category: "Chronic medical conditions", examples: "Asthma, diabetes, heart conditions" },
  { category: "Physical disabilities", examples: "Mobility impairments, hearing/vision loss" },
  { category: "Developmental delays", examples: "Autism spectrum, developmental disabilities" },
  { category: "Mental health conditions", examples: "Depression, anxiety, PTSD (dependents)" },
  { category: "Learning disabilities", examples: "Dyslexia, ADHD requiring services" },
  { category: "Speech/language disorders", examples: "Requiring ongoing therapy" },
  { category: "Special education needs", examples: "IEP or 504 plan" },
];

const ENROLLMENT_STEPS = [
  { step: "Identification", description: "Self-identification by sponsor, medical provider, school, or PCS screening" },
  { step: "Medical Screening", description: "Obtain DD Form 2792, schedule appointment, provider completes assessment" },
  { step: "Educational Screening", description: "If applicable, obtain DD Form 2792-1, school completes assessment" },
  { step: "Enrollment", description: "Submit forms to EFMP Coordinator, review and enrollment processed" },
];

const DD2792_CONTENTS = [
  "Dependent identification",
  "Medical conditions",
  "Medications",
  "Required specialists",
  "Required therapies",
  "Medical equipment needs",
  "Frequency of care",
  "Provider signature",
];

const DD2792_1_CONTENTS = [
  "Dependent identification",
  "Educational diagnosis",
  "Current placement",
  "IEP or 504 plan summary",
  "Required services",
  "Educational history",
  "School official signature",
];

const EFMP_SERVICES = [
  "Case coordination",
  "Information and referral",
  "Community resource connection",
  "Relocation assistance",
  "Respite care referrals",
  "Support groups",
];

const COMMON_ISSUES = [
  { issue: "Provider won't complete form", resolution: "Explain mandatory nature, contact EFMP Coordinator" },
  { issue: "Form incomplete", resolution: "Return to provider for completion" },
  { issue: "Assignment to location without services", resolution: "Contact EFMP Coordinator before accepting orders" },
  { issue: "Services not available at new duty station", resolution: "Request EFMP review before PCS" },
];

const CHECKLIST_INITIAL = [
  "Identify family member with special needs",
  "Obtain DD Form 2792",
  "Schedule medical screening appointment",
  "Have provider complete DD Form 2792",
  "Obtain DD Form 2792-1 (if educational needs)",
  "Have school complete DD Form 2792-1",
  "Submit forms to EFMP Coordinator",
  "Confirm enrollment",
];

const CHECKLIST_ANNUAL = [
  "Schedule re-screening appointment",
  "Update DD Form 2792",
  "Update DD Form 2792-1 if applicable",
  "Submit updated forms",
  "Verify continued enrollment",
];

const CHECKLIST_PCS = [
  "Verify EFMP enrollment current",
  "Contact gaining installation EFMP",
  "Verify required services available",
  "Coordinate with EFMP Coordinator",
];

export function EFMPMedicalScreeningContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            EFMP Medical Screening Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Exceptional Family Member Program (EFMP) identifies and enrolls family members with special
            medical or educational needs. EFMP enrollment ensures assignments consider the availability of
            required services for your family members. Medical screening determines if a family member
            qualifies for EFMP enrollment and documents their needs.
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Must Be Enrolled in EFMP
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
                {QUALIFYING_CONDITIONS.map((item) => (
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
            EFMP Services
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Family Support Services:</p>
          <ul className="mt-4 space-y-2">
            {EFMP_SERVICES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Contact EFMP Office at each installation (part of MCCS) for ongoing support.
          </p>
        </section>
      </>
    ),

    process: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            EFMP Enrollment Process
          </h2>
          <div className="mt-4 space-y-4">
            {ENROLLMENT_STEPS.map((item, index) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.step}</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD Form 2792 - Medical Summary
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Contents:</p>
          <ul className="mt-4 space-y-2">
            {DD2792_CONTENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Who Completes: Licensed medical provider with knowledge of dependent&apos;s condition (MTF or civilian).
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DD Form 2792-1 - Educational Summary
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Contents:</p>
          <ul className="mt-4 space-y-2">
            {DD2792_1_CONTENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Who Completes: School administrator or special education coordinator documenting current services.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Annual Recertification
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Requirement:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Re-screen annually",
              "Update forms if condition changes",
              "Verify services still required",
              "Maintain current enrollment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Disenrollment
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">When Condition Resolves:</p>
          <ol className="mt-4 space-y-2">
            {[
              "Medical provider documents resolution",
              "Request disenrollment through EFMP Coordinator",
              "Coordinator reviews documentation",
              "Disenrollment processed if appropriate",
            ].map((step, index) => (
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

    pcs: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            EFMP and PCS Orders
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Assignment Coordination ensures your family member&apos;s needs are considered when receiving orders.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Assignment Coordination Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Marine receives potential orders",
              "EFMP office reviews family needs",
              "Gaining location services verified",
              "Assignment approved if services available",
              "Orders issued",
            ].map((step, index) => (
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
            If Services Not Available
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Different assignment considered",
              "Family may remain at current location",
              "Accompanied tour may become unaccompanied",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common EFMP Issues
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {COMMON_ISSUES.map((item) => (
                  <tr key={item.issue}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.issue}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Contact EFMP Coordinator before accepting orders to ensure required services are available
            at the gaining duty station.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Initial EFMP Enrollment
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_INITIAL.map((item) => (
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
            Annual Review
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_ANNUAL.map((item) => (
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
            Before PCS
          </h2>
          <div className="mt-4 space-y-2">
            {CHECKLIST_PCS.map((item) => (
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
