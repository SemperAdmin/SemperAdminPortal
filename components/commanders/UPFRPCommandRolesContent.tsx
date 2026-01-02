"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "roles", label: "Command Roles" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Commander (CO)", value: "Holds ultimate responsibility for program success; signs unit SOP and budget" },
  { label: "Executive Officer (XO)", value: "Typically serves as program manager, overseeing day-to-day coordination" },
  { label: "Sergeant Major (SgtMaj)", value: "Primary link to enlisted families; captures 'family pulse' during FPCs" },
  { label: "DRC/URC", value: "Functional expert who executes commander's vision and manages communication tools" },
];

const COMMAND_ROLES = [
  {
    role: "Commanding Officer",
    responsibilities: [
      "Ultimate responsibility for program success",
      "Signs the unit UPFRP SOP",
      "Approves program budget and resources",
      "Sets command philosophy on family support",
      "Participates in family events to show visibility",
    ],
  },
  {
    role: "Executive Officer",
    responsibilities: [
      "Serves as program manager",
      "Oversees day-to-day coordination",
      "Bridges staff and readiness coordinator",
      "Ensures resources are allocated",
      "Reviews program effectiveness",
    ],
  },
  {
    role: "Sergeant Major",
    responsibilities: [
      "Primary link to enlisted families",
      "Captures 'family pulse' during FPCs",
      "Ensures enlisted perspective is represented",
      "Mentors junior SNCOs on family support",
      "Visible presence at family events",
    ],
  },
  {
    role: "DRC/URC",
    responsibilities: [
      "Executes commander's vision",
      "Manages communication tools and social media",
      "Coordinates newsletter production",
      "Plans and executes family events",
      "Provides information and referrals to families",
    ],
  },
];

const PROCESS_STEPS = [
  "Alignment: CO, XO, and SgtMaj meet to establish the 'Command Team Philosophy' regarding family support",
  "Delegation: Tasks are assigned to the DRC/URC (e.g., newsletter production, event planning)",
  "Execution: Team participates in unit 'Town Halls' and family events to maintain visibility",
  "Assessment: CO regularly reviews program reach and effectiveness via family surveys or feedback",
];

const COMMON_ISSUES = [
  {
    issue: "Delegation without Oversight",
    solution: "Treating family readiness as 'the DRC's job' alone leads to lack of command-level support and resources. The CO must remain engaged and visible in the program.",
  },
  {
    issue: "Absent Command Team",
    solution: "Command team members who never attend family events signal that family readiness is not a priority. Schedule key events on the command calendar and attend.",
  },
  {
    issue: "Siloed Communication",
    solution: "Families receiving inconsistent messages from different sources. Ensure all communication flows through the DRC/URC for consistency.",
  },
];

export function UPFRPCommandRolesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="UPFRP Command Roles" variant="info">
          The Unit Personal and Family Readiness Program (UPFRP) is a commander&apos;s program.
          While execution is delegated, the command team&apos;s active participation signals the
          importance of family readiness to the unit&apos;s overall combat effectiveness.
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

        <InfoCard icon={Clock} title="30-Day Requirement" variant="warning">
          Command team members should meet to review the existing UPFRP status within
          <strong> 30 days</strong> of check-in.
        </InfoCard>
      </div>
    ),

    roles: (
      <div className="space-y-6">
        {COMMAND_ROLES.map((item) => (
          <section key={item.role} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <Shield className="h-5 w-5" />
              {item.role}
            </h2>
            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  {resp}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Command Team Process
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

        <InfoCard icon={Users} title="Family Readiness = Mission Readiness" variant="default">
          Strong family programs reduce distractions and improve unit cohesion. The command
          team&apos;s visible participation reinforces this priority.
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
