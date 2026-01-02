"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { MessageCircle, Shield, AlertTriangle, Users } from "lucide-react";

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
  { id: "scope", label: "Scope & Limits" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Confidentiality", value: "MFLCs do not keep files or take notes; only exception is 'Duty to Warn' (threats of harm to self or others)" },
  { label: "Accessibility", value: "Often embedded within the unit or easily accessible at MCCS building" },
  { label: "Non-Medical", value: "Handle 'living issues' like stress, grief, and relationship problems—not clinical diagnoses" },
  { label: "No Records", value: "Because no records are kept, Marines hesitant about formal channels often prefer MFLCs" },
];

const MFLC_HANDLES = [
  { category: "Appropriate for MFLC", items: ["Work stress", "Relationship issues", "Grief/loss", "Parenting challenges", "Financial stress", "Life transitions", "Communication problems", "Anger management"] },
  { category: "Refer to Medical/BH", items: ["PTSD symptoms", "Clinical depression", "Suicidal ideation (active)", "Substance abuse disorder", "Severe anxiety disorder", "Psychotic symptoms", "Eating disorders", "Self-harm behaviors"] },
];

const COUNSELING_SETTINGS = [
  "Coffee shop (off-installation)",
  "Unit lounge or day room",
  "Private office",
  "Walking meetings",
  "Outdoor spaces",
  "Anywhere comfortable for the Marine",
];

const PROCESS_STEPS = [
  "Introduction: CO ensures the unit MFLC is introduced to all Marines during check-in or formations",
  "Visibility: Post MFLC contact information on all command boards",
  "Referral: Commanders or NCOs can suggest a Marine see an MFLC, or the Marine can self-refer",
  "Execution: Counseling is conducted in an informal setting comfortable for the Marine",
  "Follow-up: MFLC may suggest additional sessions or referral to other resources as needed",
];

const COMMON_ISSUES = [
  {
    issue: "Misunderstanding Scope",
    solution: "Attempting to send a Marine with a severe clinical disorder to an MFLC. MFLCs are for 'situational' stress; clinical issues like PTSD, severe depression, or active suicidal ideation must go to Medical/Behavioral Health.",
  },
  {
    issue: "Underutilization",
    solution: "Many Marines don't know the MFLC exists. Ensure regular introductions at formations and post contact information prominently on command boards.",
  },
  {
    issue: "Stigma Assumption",
    solution: "Marines may not realize MFLC visits are completely confidential with no records. Emphasize the 'no records' aspect when making referrals.",
  },
];

export function MFLCProgramContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={MessageCircle} title="MFLC Program" variant="info">
          The Military and Family Life Counseling (MFLC) program provides <strong>non-medical,
          &quot;short-term, solution-focused&quot; counseling</strong>. Because MFLCs do not keep records,
          they are a highly effective resource for Marines who may be hesitant to seek help
          through formal medical channels.
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

        <InfoCard icon={Shield} title="No Records = Lower Barrier" variant="default">
          MFLCs do not keep files or take notes. This &quot;no records&quot; policy makes them
          an ideal first step for Marines who are worried about documentation affecting
          their career.
        </InfoCard>
      </div>
    ),

    scope: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Scope & Limitations
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {MFLC_HANDLES.map((cat) => (
              <div
                key={cat.category}
                className={`rounded-lg p-4 ${
                  cat.category.includes("MFLC")
                    ? "bg-green-50 dark:bg-green-900/20"
                    : "bg-red-50 dark:bg-red-900/20"
                }`}
              >
                <h3 className={`font-semibold ${
                  cat.category.includes("MFLC")
                    ? "text-green-800 dark:text-green-200"
                    : "text-red-800 dark:text-red-200"
                }`}>
                  {cat.category}
                </h3>
                <ul className="mt-3 space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span>{cat.category.includes("MFLC") ? "✓" : "→"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Counseling Settings
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            MFLCs meet Marines in informal, comfortable settings:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {COUNSELING_SETTINGS.map((setting) => (
              <span key={setting} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {setting}
              </span>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Duty to Warn Exception" variant="warning">
          The only exception to MFLC confidentiality is the <strong>&quot;Duty to Warn&quot;</strong>—
          if a Marine expresses intent to harm themselves or others, the MFLC must report
          to appropriate authorities.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MFLC Process
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
            Timeline Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Continuous:</strong> Units should maintain a current contact card for their assigned MFLC on all command boards</li>
            <li>&bull; <strong>Check-In:</strong> Introduce MFLC to all new joins during the check-in process</li>
            <li>&bull; <strong>Regular Visibility:</strong> MFLC should be visible at unit events and formations</li>
          </ul>
        </section>

        <InfoCard icon={Users} title="Visibility is Key" variant="default">
          An MFLC is only effective if Marines know they exist. Ensure regular introductions
          at formations and maintain visible contact information on command boards.
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
