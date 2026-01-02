"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "services", label: "FAP Services" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Command Participation", value: "Commanders (or representatives) are mandatory participants in the Incident Determination Committee (IDC)" },
  { label: "Clinical vs. Legal", value: "FAP is a clinical program; 'substantiated' finding is independent of any UCMJ action" },
  { label: "Support Services", value: "Prevention education, safety planning, and clinical counseling for victims and offenders" },
  { label: "24-Hour Reporting", value: "Commands must report any suspected abuse incident to FAP within 24 hours" },
];

const FAP_SERVICES = [
  { service: "Prevention Education", description: "Classes and workshops on healthy relationships, stress management, and parenting", audience: "All unit members and families" },
  { service: "Victim Advocacy", description: "Support and advocacy services for victims of domestic violence or child abuse", audience: "Victims and their children" },
  { service: "Clinical Counseling", description: "Treatment for both victims and offenders to address underlying issues", audience: "Substantiated cases" },
  { service: "Safety Planning", description: "Development of safety plans to protect victims from further harm", audience: "At-risk families" },
];

const PROCESS_STEPS = [
  "Reporting: Any suspected abuse is reported to the local FAP office or Military Police",
  "Assessment: FAP clinicians conduct an intake to determine the nature of the incident and immediate safety risks",
  "IDC Review: Committee reviews evidence to determine if incident meets 'clinical criteria' for abuse",
  "Treatment: If substantiated, CO ensures Marine complies with clinical treatment plan as a command interest matter",
];

const COMMON_ISSUES = [
  { issue: "Standard of Proof Confusion", solution: "Commanders often confuse the 'Clinical Preponderance' standard used by FAP with 'Beyond a Reasonable Doubt' for legal action. A FAP substantiation does not require the same level of proof as UCMJ action." },
  { issue: "Confidentiality Breaches", solution: "Failure to protect privacy of FAP cases within the staff can lead to social ostracism. Limit information sharing to those with a need to know." },
  { issue: "Delayed Reporting", solution: "Waiting for more information before reporting to FAP. Report within 24 hours—FAP will conduct the assessment." },
];

export function FAPOverviewContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Family Advocacy Program (FAP)" variant="info">
          The Family Advocacy Program is a multi-disciplinary program designed to prevent and respond to domestic abuse, child abuse, and neglect. For Commanders, FAP provides the clinical and administrative framework to address family violence, ensuring Marines and families receive treatment while maintaining unit readiness.
        </InfoCard>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h2>
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
        <InfoCard icon={Clock} title="Timeline Requirements" variant="warning">
          <strong>24 Hours:</strong> Report suspected abuse to FAP<br />
          <strong>30 Days:</strong> Target window for IDC to convene
        </InfoCard>
      </div>
    ),
    services: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FAP Services</h2>
          <div className="mt-4 space-y-4">
            {FAP_SERVICES.map((item) => (
              <div key={item.service} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.service}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Audience: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.audience}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="IDC Participation" variant="default">
          The Commander or designated representative is a <strong>mandatory participant</strong> in the Incident Determination Committee (IDC).
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FAP Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
