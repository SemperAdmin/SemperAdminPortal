"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, FileText, MapPin } from "lucide-react";

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
  { id: "elements", label: "Required Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Purpose", value: "Establishes the Commander's 'Risk Tolerance' and expectations for mishap prevention" },
  { label: "Risk Management", value: "Policy should emphasize that RM is a 24/7 requirement, both on and off duty" },
  { label: "Stop-Settle Authority", value: "Explicitly grants every Marine the authority to 'stop' a dangerous evolution regardless of rank" },
  { label: "Visibility", value: "Must be posted on all bulletin boards and high-traffic areas" },
];

const REQUIRED_ELEMENTS = [
  "Commander's commitment to safety as a core value",
  "Risk Management (RM) is a 24/7 requirement—on and off duty",
  "Stop-Settle Authority: Every Marine can stop an unsafe evolution",
  "Off-duty safety emphasis (PMV-2/motorcycle safety)",
  "Reporting expectations for hazards and near-misses",
  "Safety Council and safety program structure",
  "Consequences for willful safety violations",
  "Contact information for the Unit Safety Officer",
];

const POSTING_LOCATIONS = [
  "Unit headquarters bulletin board",
  "Common areas and break rooms",
  "Maintenance bays and work centers",
  "Barracks common areas",
  "Motor pool and vehicle dispatch",
  "Unit website and SharePoint",
];

const PROCESS_STEPS = [
  "Consult with the Unit Safety Officer (USO) on unit-specific risks",
  "Review previous safety data and mishap trends",
  "Draft policy addressing unit's specific high-risk tasks",
  "Include off-duty safety requirements (PMV-2, recreational activities)",
  "Ensure 'Stop-Settle Authority' language is included",
  "Review with XO and SgtMaj for input",
  "Sign and date the policy statement",
  "Distribute and post in required locations",
];

const COMMON_ISSUES = [
  {
    issue: "Template Copying",
    solution: "Using a generic statement that doesn't address the unit's specific high-risk tasks (e.g., range safety vs. maintenance safety). Tailor the policy to your unit's mission and operational environment.",
  },
  {
    issue: "No off-duty emphasis",
    solution: "Most Marine mishaps occur off-duty. The policy must address PMV-2 (motorcycle) safety, recreational activities, and alcohol-related risks.",
  },
  {
    issue: "Visibility failure",
    solution: "Policy posted once and forgotten. Ensure copies are current, visible, and replaced if damaged. Include in newcomer briefs.",
  },
];

export function SafetyPolicyStatementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Safety Policy Statement" variant="info">
          The Safety Policy Statement establishes the Commander&apos;s &quot;Risk Tolerance&quot;
          and expectations for mishap prevention. It is the foundation of the unit&apos;s Safety
          Management System (SMS).
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

        <InfoCard icon={AlertTriangle} title="30-Day Requirement" variant="warning">
          The Safety Policy must be published within <strong>30 days</strong> of assuming command.
        </InfoCard>
      </div>
    ),

    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Elements
          </h2>
          <ul className="mt-4 space-y-2">
            {REQUIRED_ELEMENTS.map((element) => (
              <li key={element} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {element}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <MapPin className="h-5 w-5" />
            Posting Locations
          </h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {POSTING_LOCATIONS.map((location) => (
              <div key={location} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <MapPin className="h-4 w-4 flex-shrink-0 text-[var(--sa-gold)]" />
                {location}
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="Stop-Settle Authority" variant="default">
          <strong>Critical Element:</strong> Explicitly grant every Marine—regardless of rank—the
          authority to stop a dangerous evolution. This language must be clear and unambiguous.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Development Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Unit-Specific Considerations
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Range and weapons safety (if applicable)</li>
            <li>&bull; Maintenance and equipment hazards</li>
            <li>&bull; Aviation-specific requirements</li>
            <li>&bull; Field operations and training risks</li>
            <li>&bull; Motor transportation operations</li>
            <li>&bull; Local geographic/environmental hazards</li>
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
