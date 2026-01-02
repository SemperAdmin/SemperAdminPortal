"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Shield, Clock } from "lucide-react";

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
  { id: "types", label: "Report Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Restricted Reporting", value: "Disclose to SARC, SAPR VA, or Healthcare Provider without triggering investigation or command notification" },
  { label: "Unrestricted Reporting", value: "Triggers command notification, NCIS investigation, and full range of legal/administrative protections" },
  { label: "Conversion", value: "Restricted can be converted to Unrestricted at any time; Unrestricted cannot be changed back" },
  { label: "Victim Control", value: "System designed to empower victims with control over how their information is shared" },
];

const RESTRICTED_DETAILS = {
  canTell: [
    "Sexual Assault Response Coordinator (SARC)",
    "SAPR Victim Advocate (VA)",
    "Healthcare Provider",
    "Chaplain (with limitations)",
  ],
  services: [
    "Medical care and forensic examination",
    "Counseling and mental health support",
    "Special Victims' Counsel (SVC)",
    "Safety planning",
  ],
  notTriggered: [
    "Command notification",
    "NCIS investigation",
    "Chain of command involvement",
  ],
};

const UNRESTRICTED_DETAILS = {
  triggers: [
    "Command notification within 24 hours",
    "NCIS investigation initiated",
    "8-Day report requirement",
    "Full protective order options",
  ],
  additionalServices: [
    "Military Protective Order (MPO)",
    "Expedited Transfer eligibility",
    "Victim/Witness Assistance Program (VWAP)",
    "Court-martial participation rights",
  ],
};

const PROCESS_STEPS = [
  "Initial Contact: Victim meets with a SARC or SAPR VA",
  "Rights Advisement: SARC/VA explains both reporting options in detail",
  "Selection: Victim signs DD Form 2910 to document their choice",
  "Action: If Unrestricted, SARC notifies NCIS and Commander within 24 hours",
  "Services: Victim connected with appropriate medical, legal, and support services",
];

const COMMON_ISSUES = [
  {
    issue: "Accidental disclosure",
    solution: "If a victim tells their NCO or OIC, it automatically becomes Unrestricted—all Marines in the chain of command are mandatory reporters. Victims must go to a SARC/VA/Healthcare provider to maintain Restricted status. Train all hands on this distinction.",
  },
  {
    issue: "Pressure to report Unrestricted",
    solution: "Commanders or peers pressuring victims to file Unrestricted reports. The victim's choice must be respected. Only the victim can decide which option is right for them.",
  },
  {
    issue: "Confusion about chaplain privilege",
    solution: "Chaplains have privileged communication, but it's different from Restricted reporting. Clarify that only SARC, VA, or Healthcare providers can initiate a Restricted report.",
  },
];

export function SAPRReportingTypesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="SAPR Reporting Types" variant="info">
          The Marine Corps offers two primary reporting options for sexual assault. This
          dual-track system is designed to <strong>empower victims</strong> by giving them
          control over how their information is shared and whether a criminal investigation
          is initiated.
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

        <InfoCard icon={Clock} title="No Time Limit" variant="default">
          There is <strong>no time limit</strong> for a victim to file a Restricted or
          Unrestricted report. Victims may report at any time, regardless of when the
          assault occurred.
        </InfoCard>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
            Restricted Reporting
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Allows disclosure without triggering investigation or command notification.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Can Disclose To:</h4>
              <ul className="mt-2 space-y-1">
                {RESTRICTED_DETAILS.canTell.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Services Available:</h4>
              <ul className="mt-2 space-y-1">
                {RESTRICTED_DETAILS.services.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Not Triggered:</h4>
              <ul className="mt-2 space-y-1">
                {RESTRICTED_DETAILS.notTriggered.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-zinc-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-400">
            Unrestricted Reporting
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Triggers full investigation and command involvement.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Triggers:</h4>
              <ul className="mt-2 space-y-1">
                {UNRESTRICTED_DETAILS.triggers.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Additional Services:</h4>
              <ul className="mt-2 space-y-1">
                {UNRESTRICTED_DETAILS.additionalServices.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Conversion is One-Way" variant="warning">
          A Restricted report can be converted to Unrestricted <strong>at any time</strong>.
          However, once a report is Unrestricted, it <strong>cannot</strong> be changed back
          to Restricted.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reporting Process
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

        <InfoCard icon={Shield} title="DD Form 2910" variant="default">
          The <strong>DD Form 2910</strong> (Victim Reporting Preference Statement) documents
          the victim&apos;s choice of reporting option. This form is critical documentation
          and must be completed with every report.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            24-Hour Notification (Unrestricted)
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; SARC notifies Commander within 24 hours</li>
            <li>&bull; NCIS investigation is initiated</li>
            <li>&bull; 8-Day report clock begins</li>
            <li>&bull; Safety planning initiated immediately</li>
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
