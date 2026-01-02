"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, FileText } from "lucide-react";

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
  { id: "types", label: "Characterization Types" },
  { id: "determination", label: "Determination" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const CHARACTERIZATION_TYPES = [
  {
    type: "Honorable",
    description: "Highest characterization. Service met standards of accepted conduct and performance.",
  },
  {
    type: "General (Under Honorable Conditions)",
    description: "Service was honest and faithful, but significant negative aspects outweigh positive.",
  },
  {
    type: "Other Than Honorable (OTH)",
    description: "Least favorable. Represents significant departure from expected conduct.",
  },
  {
    type: "Uncharacterized",
    description: "For entry-level separations within 180 days of active duty.",
  },
];

const DETERMINATION_STEPS = [
  "Review Marine's overall service record",
  "Evaluate circumstances of misconduct or deficiency",
  "Consider matters in extenuation and mitigation",
  "Apply regulatory guidance for the basis of separation",
  "Document rationale for characterization",
  "Ensure Marine is notified of least favorable characterization authorized",
];

const OTH_REQUIREMENTS = [
  "OTH requires opportunity for board unless Marine waives",
  "OTH results in automatic reduction to E-3 for Marines E-4 and above",
  "Drug abuse cases follow specific characterization rules based on evidence type",
];

const COMMON_ISSUES = [
  {
    issue: "Urinalysis evidence type affects characterization",
    solution: "Involuntary urinalysis supports OTH. Rehabilitation program evidence does not support OTH.",
  },
  {
    issue: "Reserve misconduct characterization",
    solution: "Document whether conduct was service-related for OTH or adversely affected effectiveness for general.",
  },
];

export function CharacterizationOfServiceContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Characterization of Service" variant="info">
          Characterization of service determines the nature of a Marine&apos;s discharge and affects
          eligibility for VA benefits and future employment. The separation authority assigns
          characterization based on the Marine&apos;s overall service record and circumstances
          of separation.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OTH Requirements
          </h2>
          <ul className="mt-4 space-y-2">
            {OTH_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-amber-500">&bull;</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="OTH Consequences" variant="warning">
          OTH discharge results in <strong>automatic reduction to E-3</strong> for Marines E-4
          and above. Reserve component conduct requires determination of whether it was
          service-related.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Characterization Types
          </h2>
          <div className="mt-4 space-y-4">
            {CHARACTERIZATION_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border-l-4 border-[var(--sa-navy)] bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.type}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    determination: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Determining Characterization
          </h2>
          <div className="mt-6 space-y-4">
            {DETERMINATION_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
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
            General at EAS (Not Involuntary Separation)
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>1. Document conduct meeting involuntary separation basis</li>
            <li>2. Notify Marine in writing</li>
            <li>3. Allow 5 working days for Marine to submit matters</li>
            <li>4. Separation authority makes determination</li>
            <li>5. Document decision on Page 11</li>
          </ol>
        </section>

        <InfoCard icon={FileText} title="Timeline" variant="default">
          Marine has <strong>5 working days</strong> to submit matters contesting general
          characterization at EAS. Marine must be informed before separation if OTH is possible.
        </InfoCard>
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
