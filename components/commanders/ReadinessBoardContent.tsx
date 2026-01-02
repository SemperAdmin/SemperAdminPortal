"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Calendar, MessageSquare } from "lucide-react";

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
  { id: "attendees", label: "Attendees" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Cross-Talk", value: "Ensures S-1 personnel numbers match S-3 training rosters" },
  { label: "Forecasting", value: "Predicts tomorrow's readiness, not just today's (PCS, maintenance cycles)" },
  { label: "Actionable Outcomes", value: "Result should be list of hurdles CO needs to address with Higher HQ" },
  { label: "Data Validation", value: "Confirms source systems are accurate before DRRS-MC submission" },
];

const BOARD_ATTENDEES = [
  { section: "S-1 (Admin)", briefer: "S-1 OIC/SNCOIC", focus: "Personnel readiness (P-Level)", data: "MCTFS data, gains/losses, critical MOS fills" },
  { section: "S-2 (Intel)", briefer: "S-2 OIC/SNCOIC", focus: "Intel readiness", data: "Cleared personnel, systems access, training currency" },
  { section: "S-3 (Ops)", briefer: "S-3 OIC/SNCOIC", focus: "Training readiness (T-Level)", data: "MCTIMS data, MET proficiency, training events" },
  { section: "S-4 (Log)", briefer: "S-4 OIC/SNCOIC", focus: "Supply & Equipment (S/R-Level)", data: "GCSS-MC data, equipment on-hand, MC rates" },
  { section: "S-6 (Comm)", briefer: "S-6 OIC/SNCOIC", focus: "Communications readiness", data: "System availability, COMSEC status, network health" },
];

const AGENDA_ITEMS = [
  "P-Level Brief: S-1 presents personnel fills, critical shortages, upcoming gains/losses",
  "S-Level Brief: S-4 presents equipment on-hand percentages, significant shortages",
  "R-Level Brief: S-4/Maintenance presents equipment MC rates, deadline equipment",
  "T-Level Brief: S-3 presents training proficiency, MET assessments, upcoming events",
  "MET Cross-Walk: S-3 leads discussion on how deficiencies impact specific METs",
  "Forecasting: Each section briefs 30/60/90 day outlook for their area",
  "CO Guidance: Commander decides on subjective changes and approves final report",
];

const PROCESS_STEPS = [
  "Pre-Board Data Prep: Each section OIC/SNCOIC updates respective databases (MCTIMS, GCSS, etc.)",
  "Data Validation: S-3 confirms all source systems reflect current reality",
  "The Brief: Each staff section presents their Level (P, S, R, T) and explains deficiencies",
  "MET Cross-Walk: S-3 leads discussion on how current deficiencies impact specific METs",
  "Forecasting: Discuss upcoming changes (PCS, deployments, maintenance) that will affect readiness",
  "Hurdle Identification: Capture issues that require Higher HQ assistance",
  "CO Guidance: Commander decides on subjective changes and approves final report",
];

const OUTCOMES = [
  "Validated P, S, R, and T levels for DRRS-MC report",
  "Accurate MET assessments with supporting remarks",
  "List of 'hurdles' requiring Higher HQ action",
  "30/60/90 day readiness forecast",
  "Action items for staff sections to address deficiencies",
  "CO-approved final readiness assessment",
];

const COMMON_ISSUES = [
  {
    issue: "Siloed information",
    solution: "S-1 reporting unit is at 95% strength while S-3 reports they can't man crew-served weapons. The board must reconcile these disconnects through cross-talk.",
  },
  {
    issue: "Lack of SNCOIC involvement",
    solution: "The board is often treated as 'officer only,' missing ground-level data that SNCOs possess. Include SNCOICs in the board—they know the reality.",
  },
  {
    issue: "No forecasting",
    solution: "Only looking at current readiness without predicting future changes. Include 30/60/90 day outlook to anticipate and address issues early.",
  },
];

export function ReadinessBoardContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="Readiness Board Requirements" variant="info">
          The Readiness Board is a recurring meeting where the Commander and the
          <strong> &quot;Big Staff&quot;</strong> (S-1, S-2, S-3, S-4, S-6) deep-dive into the
          unit&apos;s readiness data to ensure the DRRS-MC report accurately reflects reality.
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Expected Outcomes
          </h3>
          <ul className="mt-4 space-y-2">
            {OUTCOMES.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Calendar} title="Monthly Timing" variant="warning">
          Typically held <strong>3-5 days prior</strong> to the DRRS-MC submission deadline
          to allow time for data corrections and final approval.
        </InfoCard>
      </div>
    ),

    attendees: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Attendees
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Section</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Briefer</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Focus</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Data</th>
                </tr>
              </thead>
              <tbody>
                {BOARD_ATTENDEES.map((attendee) => (
                  <tr key={attendee.section} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{attendee.section}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{attendee.briefer}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{attendee.focus}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{attendee.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Users} title="Include SNCOICs" variant="default">
          The board should not be &quot;officers only.&quot; <strong>SNCOICs</strong> possess
          ground-level data that is essential for accurate readiness assessment.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Additional Attendees (As Needed)
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Maintenance Officer/Chief (for detailed R-Level discussion)</li>
            <li>&bull; Training Officer (for T-Level deep dive)</li>
            <li>&bull; Medical Officer (for medical readiness issues)</li>
            <li>&bull; Unit representatives from subordinate commands</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Readiness Board Process
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
            Standard Agenda
          </h3>
          <ul className="mt-4 space-y-2">
            {AGENDA_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={MessageSquare} title="MET Cross-Walk Critical" variant="warning">
          The <strong>MET Cross-Walk</strong> is the most important part of the board.
          It connects resource deficiencies to specific mission impacts, enabling
          informed commander decisions.
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
