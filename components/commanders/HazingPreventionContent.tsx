"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ShieldAlert, AlertTriangle, Scale, Users } from "lucide-react";

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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "indicators", label: "Indicators" },
  { id: "response", label: "Response" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Definition", value: "Any conduct causing another Marine to suffer cruel, abusive, humiliating, oppressive, demeaning, or harmful activity" },
  { label: "Includes", value: "Initiation rites, 'pinning,' or any physical/psychological requirement not authorized by chain of command" },
  { label: "Consent Irrelevant", value: "It is still hazing even if the victim 'volunteers' or 'consents' to the activity" },
  { label: "Command Responsibility", value: "Commanders must foster culture where 'rite of passage' is replaced by professional mentorship" },
];

const HAZING_INDICATORS = [
  { indicator: "Physical activities", examples: "Hitting, kicking, paddling, forced physical training as punishment" },
  { indicator: "Psychological abuse", examples: "Public humiliation, degrading nicknames, isolation from peers" },
  { indicator: "Unauthorized ceremonies", examples: "'Blood striping,' 'pinning,' promotion 'beatings'" },
  { indicator: "Forced consumption", examples: "Alcohol, food, or other substances" },
  { indicator: "Property damage", examples: "Forced destruction of personal items" },
  { indicator: "Sleep deprivation", examples: "Unauthorized denial of sleep as hazing" },
];

const RESPONSE_STEPS = [
  "Receive report of hazing allegation through chain of command or IG",
  "Commander must initiate Command Investigation (CI) or Preliminary Inquiry (PI) within 24 hours",
  "Separate the alleged victim from the alleged perpetrators if necessary",
  "Complete investigation and document findings",
  "Substantiated hazing typically results in NJP or Court-Martial",
  "Process mandatory ADSEP for substantiated hazing cases",
  "Report to higher headquarters as required",
];

const COMMON_ISSUES = [
  {
    issue: "'Tradition' Defense",
    solution: "Leaders attempting to excuse hazing as a 'unit tradition.' If it demeans the Marine, it is a violation of the order regardless of history. Zero tolerance means zero tolerance.",
  },
  {
    issue: "Unreported incidents",
    solution: "Many hazing incidents go unreported due to fear of retaliation or unit ostracism. Foster a reporting culture and protect those who come forward.",
  },
  {
    issue: "Blurred lines with training",
    solution: "Distinguish between legitimate corrective training (authorized, purposeful, not excessive) and hazing (unauthorized, humiliating, harmful). When in doubt, consult legal.",
  },
];

export function HazingPreventionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ShieldAlert} title="Hazing Prevention" variant="info">
          Hazing is any conduct whereby a Marine causes another Marine to suffer or be exposed
          to any activity which is cruel, abusive, humiliating, oppressive, demeaning, or harmful.
          It is a direct threat to unit cohesion and the &quot;all-volunteer&quot; force.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Consent is NOT a Defense" variant="warning">
          It is still hazing even if the victim &quot;volunteers&quot; or &quot;consents&quot; to
          the activity. Marines cannot consent to being hazed.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Prevention Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Conduct annual PAC training for all hands</li>
            <li>&bull; Clearly define authorized promotion ceremonies</li>
            <li>&bull; Train leaders on the difference between corrective training and hazing</li>
            <li>&bull; Create environment where Marines feel safe to report</li>
            <li>&bull; Lead by example—zero tolerance starts at the top</li>
          </ul>
        </section>
      </div>
    ),

    indicators: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Hazing Indicators
          </h2>
          <div className="mt-4 space-y-3">
            {HAZING_INDICATORS.map((item) => (
              <div key={item.indicator} className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h3 className="font-semibold text-red-800 dark:text-red-200">{item.indicator}</h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">Examples: {item.examples}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Users} title="Professional Mentorship" variant="default">
          Replace &quot;rite of passage&quot; traditions with legitimate professional mentorship
          and authorized training. Welcome new Marines through inclusion, not abuse.
        </InfoCard>
      </div>
    ),

    response: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Command Response Process
          </h2>
          <div className="mt-6 space-y-4">
            {RESPONSE_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Scale} title="24-Hour Investigation Requirement" variant="warning">
          The Commander must initiate a Command Investigation (CI) or Preliminary Inquiry (PI)
          within <strong>24 hours</strong> of notification of a hazing allegation.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Adjudication Options
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Non-Judicial Punishment (NJP) under Article 15</li>
            <li>&bull; Court-Martial referral for serious cases</li>
            <li>&bull; Administrative separation (often mandatory for substantiated cases)</li>
            <li>&bull; Adverse fitness report/JEPES entries</li>
            <li>&bull; Loss of security clearance if applicable</li>
          </ul>
        </section>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
