"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Clock, MessageSquare } from "lucide-react";

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
  { id: "roles", label: "SARC Role" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Advisory Role", value: "The SARC advises the commander on policy, victim rights, and unit compliance" },
  { label: "Information Flow", value: "In Unrestricted cases, SARC provides commander with Case Control Number (CCN) and regular victim well-being updates" },
  { label: "Confidentiality", value: "The SARC ensures Restricted reports are kept completely confidential from the command" },
];

const SARC_RESPONSIBILITIES = [
  { responsibility: "Program Management", description: "Oversees the installation SAPR program and all VAs" },
  { responsibility: "24/7 Response", description: "Coordinates immediate response to all sexual assault reports" },
  { responsibility: "Victim Advocacy", description: "Ensures victims receive all required services and support" },
  { responsibility: "Commander Advisement", description: "Provides policy guidance and case updates to commanders" },
  { responsibility: "Training Oversight", description: "Ensures VAs maintain certification and competency" },
];

const PROCESS_STEPS = [
  "Direct Liaison: Establish a recurring meeting schedule with the installation or brigade SARC",
  "Notification Management: Ensure the SARC has 24/7 contact info for the Command Team for urgent notifications",
  "Resource Support: Work with the SARC to identify and train enough unit Victim Advocates (VAs)",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "24/7", action: "SARC must have current contact information for Command Team" },
  { requirement: "Monthly", action: "Recurring coordination meetings recommended" },
];

const COMMON_ISSUES = [
  { issue: "Lack of Communication", solution: "Not establishing regular touchpoints with the SARC. Schedule recurring meetings to stay informed on program health and open cases." },
  { issue: "Crossing the Firewall", solution: "Commanders seeking case details that should remain confidential. Trust the SARC to provide appropriate information—don't press for protected details." },
];

export function SARCCoordinationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="SARC Coordination" variant="info">
          The Sexual Assault Response Coordinator (SARC) is the commander&apos;s primary expert for program management. Effective coordination ensures that the commander meets statutory requirements while maintaining the necessary legal &quot;firewall&quot; between victim advocacy and the investigation.
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    roles: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SARC Responsibilities</h2>
          <div className="mt-4 space-y-3">
            {SARC_RESPONSIBILITIES.map((item) => (
              <div key={item.responsibility} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.responsibility}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={MessageSquare} title="Information You Should Receive" variant="default">
          For Unrestricted cases, the SARC should provide: <strong>Case Control Number (CCN)</strong>, victim well-being updates, and recommendations for command support actions.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordination Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Support Actions</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Ensure unit has adequate trained VAs</li>
            <li>&bull; Support VA training and certification requirements</li>
            <li>&bull; Attend CMG meetings when your Marines are involved</li>
            <li>&bull; Issue MPOs when recommended by SARC/NCIS</li>
            <li>&bull; Monitor unit climate for retaliation indicators</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="Respect the Firewall" variant="warning">
          The legal separation between victim advocacy and investigation exists to protect victims. Trust the SARC to provide <strong>appropriate information</strong>—pressing for protected details can compromise the case.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
