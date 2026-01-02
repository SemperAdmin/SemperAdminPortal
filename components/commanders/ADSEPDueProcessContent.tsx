"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "rights", label: "Marine's Rights" },
  { id: "process", label: "Timeline" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Notification", value: "Marine must receive written notice with specific basis for separation" },
  { label: "Response Time", value: "Minimum 2 business days to respond (more for OTH characterization)" },
  { label: "Counsel Right", value: "Right to consult with military counsel before responding" },
  { label: "Board Right", value: "Marines with 6+ years entitled to administrative separation board" },
];

const RIGHTS_BY_CHARACTERIZATION = [
  {
    characterization: "Honorable Discharge",
    rights: [
      "Written notification of basis",
      "2 business days to respond",
      "Right to consult counsel",
      "Submit statements in own behalf",
    ],
  },
  {
    characterization: "General (Under Honorable)",
    rights: [
      "All Honorable discharge rights, plus:",
      "Right to obtain copies of documents",
      "Board rights if 6+ years of service",
      "Right to military counsel at board",
    ],
  },
  {
    characterization: "Other Than Honorable (OTH)",
    rights: [
      "All General discharge rights, plus:",
      "Minimum 7 calendar days to respond",
      "Board is mandatory regardless of TIS",
      "Right to retain civilian counsel at own expense",
    ],
  },
];

const BOARD_COMPOSITION = [
  { member: "Senior Member (O-5 or above)", role: "President of the board" },
  { member: "Voting Member (O-3 or above)", role: "Voting member" },
  { member: "Voting Member (E-7 or above)", role: "Voting member (enlisted only)" },
];

const TIMELINE_REQUIREMENTS = [
  { action: "Notification Delivery", timeline: "Day 0 - Deliver written notification" },
  { action: "Counsel Consultation", timeline: "Within 2-7 days depending on characterization" },
  { action: "Response Due", timeline: "2-7 days after notification" },
  { action: "Board Scheduling", timeline: "If required, schedule within 30 days of response" },
  { action: "Board Decision", timeline: "Same day; findings and recommendations" },
  { action: "SA Decision", timeline: "Separation authority decision within 30 days" },
];

const PROCESS_STEPS = [
  "Prepare Notification: Draft separation notification letter citing specific basis",
  "Legal Review: SJA reviews for legal sufficiency and proper rights advisement",
  "Deliver Notification: Personal delivery to Marine with witness signature",
  "Counsel Appointment: Coordinate with legal for counsel consultation",
  "Accept Response: Receive Marine's written response or waiver",
  "Board Preparation: If board required, prepare case and witnesses",
  "Conduct Board: Three-member board hears evidence and makes recommendation",
  "SA Decision: Separation authority reviews and issues final decision",
];

const COMMON_ISSUES = [
  {
    issue: "Insufficient response time",
    solution: "OTH characterization requires minimum 7 calendar days to respond—not business days. Rushing notification leads to due process violations and voided separations.",
  },
  {
    issue: "Denying board rights",
    solution: "Marines with 6+ years of service are entitled to an admin sep board for General or OTH. Failure to offer board rights is a fatal procedural error.",
  },
  {
    issue: "Inadequate counsel access",
    solution: "Marines must have actual access to counsel, not just notification of the right. Coordinate with legal to ensure counsel is available before response deadline.",
  },
];

export function ADSEPDueProcessContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="ADSEP Due Process" variant="info">
          Due process in administrative separations protects both the Marine and the command.
          The <strong>rights afforded increase</strong> with the severity of the proposed
          characterization and time in service. Failure to follow these procedures can
          invalidate the entire separation.
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

        <InfoCard icon={AlertTriangle} title="6-Year Rule" variant="warning">
          Marines with <strong>6 or more years of service</strong> are entitled to an
          administrative separation board when facing General or OTH characterization.
          This right cannot be waived by the command.
        </InfoCard>
      </div>
    ),

    rights: (
      <div className="space-y-6">
        {RIGHTS_BY_CHARACTERIZATION.map((item) => (
          <section key={item.characterization} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {item.characterization}
            </h2>
            <ul className="mt-4 space-y-2">
              {item.rights.map((right) => (
                <li key={right} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                  {right}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Composition
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Member</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                </tr>
              </thead>
              <tbody>
                {BOARD_COMPOSITION.map((member) => (
                  <tr key={member.member} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{member.member}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Users} title="Enlisted Board Member" variant="default">
          When the respondent is enlisted, <strong>at least one board member must be E-7 or
          above</strong>. The enlisted member provides peer perspective on the facts and
          recommended characterization.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Due Process Timeline
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.action} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.action}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Process Steps
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

        <InfoCard icon={Clock} title="Response Time is Mandatory" variant="warning">
          The response time is a <strong>minimum</strong>, not a suggestion. For OTH
          characterization, the Marine must have at least 7 calendar days. Extensions
          should be granted liberally if requested.
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
