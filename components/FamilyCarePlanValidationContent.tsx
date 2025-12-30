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
  { id: "who-requires", label: "Who Requires" },
  { id: "components", label: "Components" },
  { id: "caregivers", label: "Caregivers" },
  { id: "validation", label: "Validation" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Form", description: "NAVMC 11800 - Family Care Plan Certificate" },
  { element: "Requirement", description: "Single parents, dual-military, guardians" },
  { element: "Validation", description: "Command validation required" },
  { element: "Timeline", description: "Within 60 days of triggering event" },
  { element: "Review", description: "Annual recertification" },
  { element: "Authority", description: "MCO 1740.13C" },
];

const WHO_REQUIRES = [
  { situation: "Single parent with custody", required: "Yes" },
  { situation: "Dual-military couple with dependents", required: "Yes" },
  { situation: "Marine with civilian spouse who cannot provide care", required: "Yes" },
  { situation: "Sole guardian of elderly parent", required: "Yes" },
  { situation: "Married with available civilian spouse", required: "No" },
  { situation: "Single Marine without dependents", required: "No" },
];

const FCP_COMPONENTS = [
  { component: "NAVMC 11800", purpose: "Official FCP certificate" },
  { component: "DD Form 1172", purpose: "DEERS enrollment for caregiver" },
  { component: "Power of Attorney", purpose: "Legal authority for caregiver" },
  { component: "Medical POA", purpose: "Healthcare decisions for dependents" },
  { component: "Financial arrangements", purpose: "Care expenses, allotments" },
  { component: "Transportation plan", purpose: "Dependent movement to caregiver" },
  { component: "School arrangements", purpose: "Educational continuity" },
  { component: "Medical records", purpose: "Dependent health information" },
];

const SHORT_TERM_CAREGIVER = [
  "Must be a civilian (not active duty)",
  "Must be physically and financially capable",
  "Must be willing to accept responsibility",
  "Must be accessible (realistic location)",
  "Must sign acknowledgment",
  "Covers up to 30 days",
];

const LONG_TERM_CAREGIVER = [
  "Must be a civilian (not active duty)",
  "Must be physically and financially capable",
  "Must be willing to accept responsibility",
  "Must be accessible (realistic location)",
  "Must sign acknowledgment",
  "Covers over 30 days (deployments, extended TDY)",
];

const VALIDATION_STEPS = [
  "Complete NAVMC 11800",
  "Obtain caregiver signatures",
  "Prepare supporting documents (POA, financial arrangements)",
  "Submit to command",
  "Command reviews and validates",
  "File validated FCP with S-1",
  "Provide copy to caregiver",
];

const TRIGGERING_EVENTS = [
  "Single parent gains custody",
  "Marriage to military member (dual-military)",
  "Divorce with custody",
  "Death of spouse",
  "Spouse becomes unable to provide care",
  "Assume guardianship",
];

const COMMON_ISSUES = [
  { issue: "Caregiver no longer available", resolution: "Designate new caregiver immediately" },
  { issue: "Contact information outdated", resolution: "Update and recertify" },
  { issue: "Financial arrangements inadequate", resolution: "Adjust allotments or arrangements" },
  { issue: "Command validation expired", resolution: "Submit for annual recertification" },
  { issue: "Caregiver not enrolled in DEERS", resolution: "Complete DD Form 1172" },
];

const INITIAL_CHECKLIST = [
  "Complete NAVMC 11800",
  "Designate short-term caregiver",
  "Designate long-term caregiver",
  "Obtain caregiver signatures",
  "Prepare Power of Attorney",
  "Prepare Medical POA",
  "Establish financial arrangements",
  "Enroll caregiver in DEERS if needed",
  "Submit to command for validation",
  "Provide copy to caregivers",
];

const PREDEP_CHECKLIST = [
  "Review FCP for accuracy",
  "Confirm caregiver availability",
  "Update contact information",
  "Verify financial arrangements",
  "Test communication plan",
  "Provide caregiver emergency contacts",
];

export function FamilyCarePlanValidationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Family Care Plan Validation Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A Family Care Plan (FCP) is required if you have dependents and no non-military spouse available
            to provide care during deployments, TDY, or alerts. The FCP ensures your dependents receive proper
            care when you are unavailable. Failure to maintain a valid FCP affects deployability and may
            result in administrative action.
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

    "who-requires": (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Requires a Family Care Plan
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Situation</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">FCP Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {WHO_REQUIRES.map((item) => (
                  <tr key={item.situation}>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.situation}</td>
                    <td className={`py-3 font-medium ${item.required === "Yes" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                      {item.required}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Triggering Events
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Complete FCP within 60 days of:
          </p>
          <ul className="mt-4 space-y-2">
            {TRIGGERING_EVENTS.map((event) => (
              <li key={event} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {event}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    components: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FCP Components
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A complete Family Care Plan includes multiple documents and arrangements.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Component</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {FCP_COMPONENTS.map((item) => (
                  <tr key={item.component}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.component}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    caregivers: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Designating Caregivers
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You must designate both a short-term and long-term caregiver. They can be the same person.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Short-Term Caregiver Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {SHORT_TERM_CAREGIVER.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Long-Term Caregiver Requirements
          </h3>
          <ul className="mt-4 space-y-2">
            {LONG_TERM_CAREGIVER.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {req}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    validation: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FCP Validation Process
          </h2>
          <ol className="mt-4 space-y-2">
            {VALIDATION_STEPS.map((step, index) => (
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
            Common Issues
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Test Your FCP</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Before deployment, contact caregivers to confirm availability, verify transportation plan,
            and conduct practice handoff if possible.
          </p>
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Initial FCP Checklist
          </h2>
          <div className="mt-4 space-y-2">
            {INITIAL_CHECKLIST.map((item) => (
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
            Pre-Deployment Validation
          </h2>
          <div className="mt-4 space-y-2">
            {PREDEP_CHECKLIST.map((item) => (
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
