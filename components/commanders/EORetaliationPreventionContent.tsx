"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Eye, Users } from "lucide-react";

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
  { id: "forms", label: "Forms of Retaliation" },
  { id: "prevention", label: "Prevention" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Three Pillars", value: "Protection covers the Complainant, the Subject (against wrongful accusations), and Witnesses" },
  { label: "Forms", value: "Reprisal (official acts), social ostracism (exclusion), and maltreatment" },
  { label: "Criminal Act", value: "Retaliation is a direct violation of UCMJ Article 132" },
  { label: "Ongoing Duty", value: "Monitoring must persist throughout and after case closure" },
];

const RETALIATION_FORMS = [
  {
    form: "Reprisal",
    description: "Official acts taken through the chain of command against a reporter",
    examples: "Adverse evaluations, denial of privileges, unfavorable assignments, non-selection for schools/training, sudden poor marks",
  },
  {
    form: "Social Ostracism",
    description: "Exclusion from unit groups and informal networks",
    examples: "Not invited to unit events, excluded from group chats, 'cold shoulder' treatment, isolation from peers",
  },
  {
    form: "Maltreatment",
    description: "Cruel, abusive, or oppressive treatment",
    examples: "Excessive tasking, public ridicule, threats, harassment by peers, hostile work environment",
  },
];

const PREVENTION_STEPS = [
  "Immediate Counseling: Upon receipt of an EO complaint, counsel the subject and chain of command on strict prohibition of retaliation",
  "Safety Planning: Coordinate with the EOA to determine if the complainant requires temporary relocation or change in reporting senior",
  "Observation: Command Team must monitor the work section for 'social distancing' or hostile behaviors toward the reporter",
  "Witness Protection: Ensure witnesses are also protected from peer-level retaliation",
  "Investigation: Any allegation of retaliation must be investigated immediately as a separate, priority case",
  "Continued Monitoring: Maintain observation throughout the EO case and for a reasonable period following closure",
];

const PROTECTED_PARTIES = [
  "Marines who file EO complaints",
  "Subjects of complaints (protected from wrongful accusations)",
  "Witnesses who provide testimony",
  "Bystanders who intervene or report",
  "Those who assist others in filing complaints",
  "Anyone who participates in an investigation",
];

const COMMON_ISSUES = [
  {
    issue: "Subtle Reprisal",
    solution: "Masking retaliation as a 'legitimate' administrative action, such as suddenly giving a Marine poor marks or an undesirable watch schedule after they file a complaint. Document and compare treatment before and after the complaint.",
  },
  {
    issue: "Bystander Retaliation",
    solution: "Failing to protect witnesses, who are often more vulnerable to peer-level social ostracism than the original complainant. Witnesses require the same protection as complainants.",
  },
  {
    issue: "Delayed Career Impact",
    solution: "Retaliation may manifest months later in evaluations or assignment decisions. Track reporter career progression and compare to similarly situated peers.",
  },
];

export function EORetaliationPreventionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="EO Retaliation Prevention" variant="info">
          Retaliation prevention is the commander&apos;s safeguard for the integrity of the
          Equal Opportunity program. It ensures Marines can report discrimination or participate
          in investigations without facing professional or social penalties—essential for
          maintaining a culture of accountability.
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

        <InfoCard icon={AlertTriangle} title="UCMJ Violation" variant="warning">
          Retaliation is a criminal act punishable under <strong>UCMJ Article 132</strong>.
          Maltreatment is also punishable under <strong>UCMJ Article 93</strong>.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Users className="h-5 w-5" />
            Who is Protected
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {PROTECTED_PARTIES.map((party) => (
              <li key={party} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {party}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    forms: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Forms of Retaliation
          </h2>
          <div className="mt-4 space-y-4">
            {RETALIATION_FORMS.map((item) => (
              <div key={item.form} className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h3 className="font-semibold text-red-800 dark:text-red-200">{item.form}</h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">Examples:</span>
                  <p className="text-sm text-red-700 dark:text-red-300">{item.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Eye} title="Subtle Signs" variant="default">
          The most difficult retaliation to detect is social ostracism—the victim is no longer
          invited to lunches, excluded from group chats, or given the &quot;cold shoulder.&quot;
          Commanders must actively look for these patterns.
        </InfoCard>
      </div>
    ),

    prevention: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Prevention Process
          </h2>
          <div className="mt-6 space-y-4">
            {PREVENTION_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Continuous Monitoring" variant="warning">
          Monitoring must continue throughout the EO case <strong>and</strong> for a reasonable
          period following its closure. Retaliation often occurs after cases are resolved.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Monitoring Actions
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Regular check-ins with the complainant and witnesses</li>
            <li>&bull; Review of work assignments, watch bills, and evaluations</li>
            <li>&bull; Monitor social dynamics within the unit</li>
            <li>&bull; Track career progression compared to peers</li>
            <li>&bull; Document any reported concerns immediately</li>
            <li>&bull; Coordinate with EOA on observation findings</li>
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
