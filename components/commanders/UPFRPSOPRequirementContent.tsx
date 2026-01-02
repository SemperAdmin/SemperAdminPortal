"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "elements", label: "SOP Elements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Commander's Intent", value: "SOP must clearly state the CO's philosophy on family readiness" },
  { label: "Communication Plan", value: "Defines how unit will use Mass Communication Tool (MCT) and official social media" },
  { label: "Volunteer Roles", value: "Outlines duties and expectations for Command Team Advisors and Family Readiness Assistants" },
  { label: "60-Day Requirement", value: "CO must review and sign the unit UPFRP SOP within 60 days of assuming command" },
];

const SOP_ELEMENTS = [
  { element: "Commander's Philosophy", description: "Statement of the CO's vision for family readiness and support" },
  { element: "Communication Plan", description: "How the unit will communicate with families (MCT, social media, newsletters)" },
  { element: "Key Personnel", description: "Roles of CO, XO, SgtMaj, DRC/URC, and volunteers" },
  { element: "Family Day/Event Schedule", description: "Planned family events and frequency" },
  { element: "Deployment Support Plan", description: "How families will be supported during deployments" },
  { element: "Emergency Procedures", description: "How to handle family emergencies and recalls" },
  { element: "Resource Directory", description: "Contact information for support services (FAP, MCCS, Chaplain)" },
];

const PROCESS_STEPS = [
  "Drafting: The Deployment Readiness Coordinator (DRC) or URC drafts the SOP based on the unit's specific mission",
  "Review: The XO and SgtMaj review the SOP to ensure it is practical and aligned with command goals",
  "Approval: The Commander signs the SOP, making it a formal unit directive",
  "Dissemination: The SOP is made available to all unit families and briefed during family days",
];

const COMMON_ISSUES = [
  { issue: "Static Documents", solution: "Using a 'canned' SOP from a previous command that does not reflect the current unit's deployment cycle or geographic location. Tailor the SOP to your specific unit situation." },
  { issue: "Lack of Distribution", solution: "Signing the SOP but never sharing it with families. Ensure all families have access to the SOP through the unit website or family day briefings." },
  { issue: "Outdated Contact Info", solution: "Resource directory with old phone numbers or closed services. Review and update contact information quarterly." },
];

export function UPFRPSOPRequirementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="UPFRP SOP Requirements" variant="info">
          The Unit Personal and Family Readiness Program (UPFRP) Standard Operating Procedure (SOP) is a mandatory document that outlines how the command will support and communicate with families. It ensures consistency and continuity, particularly during unit deployments or changes in leadership.
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
        <InfoCard icon={Clock} title="60-Day Requirement" variant="warning">
          Within <strong>60 days</strong> of assuming command, the CO must review and sign the unit UPFRP SOP.
        </InfoCard>
      </div>
    ),
    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required SOP Elements</h2>
          <div className="mt-4 space-y-3">
            {SOP_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="Tailored to Your Unit" variant="default">
          The SOP should reflect your unit&apos;s specific mission, deployment cycle, and geographic location—not a generic template from another command.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SOP Development Process</h2>
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
