"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "structure", label: "Program Structure" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Timeline", value: "Review and sign within 60 days of assuming command" },
  { label: "Core Team", value: "CO, SgtMaj, Chaplain, and FRO (Family Readiness Officer)" },
  { label: "Communication", value: "Defines use of Mass Communication Tool (MCT) and social media" },
  { label: "Privacy", value: "Strict adherence to PII and HIPAA rules regarding family data" },
];

const PROGRAM_ROLES = [
  { role: "Commanding Officer", responsibility: "Overall program oversight and SOP approval" },
  { role: "Sergeant Major", responsibility: "Enlisted family liaison and program support" },
  { role: "Chaplain", responsibility: "Spiritual and counseling support for families" },
  { role: "Family Readiness Officer (FRO)", responsibility: "Day-to-day program management" },
  { role: "Uniformed Readiness Coordinator (URC)", responsibility: "Primary point of contact for families" },
  { role: "Command Team Advisors", responsibility: "Volunteer family leaders" },
  { role: "Family Readiness Assistants", responsibility: "Volunteer support personnel" },
];

const PROCESS_STEPS = [
  "Appointment: CO appoints a Uniformed Readiness Coordinator (URC) or FRO",
  "Drafting: Tailor the SOP to unit's specific mission (high deployment tempo vs. garrison)",
  "Volunteer Management: Establish roles of Command Team Advisors and Family Readiness Assistants",
  "Communication Plan: Define MCT usage, social media policy, and emergency notification procedures",
  "Privacy Protocols: Ensure PII and HIPAA compliance procedures are documented",
  "Approval: CO signs the SOP within 60 days of assuming command",
];

const SOP_SECTIONS = [
  "Program mission and objectives",
  "Organizational structure and roles",
  "Communication procedures (routine and emergency)",
  "Social media policy",
  "Privacy and data protection protocols",
  "Volunteer recruitment and management",
  "Event planning and execution",
  "Resource directory (installation services, support agencies)",
];

const COMMON_ISSUES = [
  {
    issue: "Inactive or outdated family contact lists",
    solution: "Failure to keep family contact information current leads to communication breakdown during emergencies. Conduct quarterly contact info verification.",
  },
  {
    issue: "No designated FRO or URC",
    solution: "Appoint a dedicated individual immediately upon assuming command. This role cannot be collateral duty in name only.",
  },
  {
    issue: "Privacy violations with family data",
    solution: "Ensure all volunteers complete PII training. Never share contact lists without explicit consent. Use official communication tools only.",
  },
];

export function UPFRPSOPClimateContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="UPFRP SOP (60 Days)" variant="info">
          The Unit Personal and Family Readiness Program (UPFRP) is the commander&apos;s primary
          link to the families of their Marines. A robust SOP ensures that during deployments or
          emergencies, the flow of information is reliable and standardized.
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

        <InfoCard icon={Clock} title="60-Day Deadline" variant="warning">
          The CO must review and sign the UPFRP SOP within <strong>60 days</strong> of assuming
          command. This ensures family support infrastructure is established early.
        </InfoCard>
      </div>
    ),

    structure: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Program Roles & Responsibilities
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAM_ROLES.map((item) => (
                  <tr key={item.role} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.role}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.responsibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required SOP Sections
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {SOP_SECTIONS.map((section) => (
              <li key={section}>&bull; {section}</li>
            ))}
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SOP Development Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
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
            Mission Tailoring
          </h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Tailor your SOP to the unit&apos;s specific mission profile:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>High deployment tempo:</strong> Emphasize pre-deployment briefs, emergency contacts, and family support networks</li>
            <li>&bull; <strong>Garrison units:</strong> Focus on ongoing engagement, community building, and resource awareness</li>
            <li>&bull; <strong>Geographically dispersed:</strong> Prioritize virtual communication and regional resource directories</li>
          </ul>
        </section>

        <InfoCard icon={FileText} title="Privacy Requirements" variant="default">
          The SOP must include specific procedures for handling family PII in accordance with
          <strong> MCO 5211.2</strong> (Privacy Act). All volunteers handling family data must
          complete required privacy training.
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

        <InfoCard icon={AlertTriangle} title="Emergency Preparedness" variant="warning">
          Test your communication plan before you need it. Conduct a &quot;no-notice&quot; communication
          drill within 90 days of SOP approval to identify gaps.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
