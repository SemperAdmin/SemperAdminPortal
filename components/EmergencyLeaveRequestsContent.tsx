"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "qualifying", label: "Qualifying Emergencies" },
  { id: "process", label: "Process" },
  { id: "travel", label: "Travel" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { element: "Leave Type", description: "Chargeable leave (uses your leave balance)" },
  { element: "Verification", description: "American Red Cross verifies emergency" },
  { element: "Approval", description: "Commander approves/disapproves" },
  { element: "Travel", description: "May be at government or personal expense" },
  { element: "Duration", description: "Based on circumstances" },
  { element: "Authority", description: "MCO P1050.3J, JFTR" },
];

const QUALIFYING_EMERGENCIES = [
  { type: "Death of immediate family", approved: "Yes" },
  { type: "Terminal illness of immediate family", approved: "Yes" },
  { type: "Serious illness/injury of immediate family", approved: "Case-by-case" },
  { type: "Birth complications", approved: "Case-by-case" },
  { type: "Natural disaster affecting family", approved: "Case-by-case" },
  { type: "Serious family crisis", approved: "Case-by-case" },
];

const IMMEDIATE_FAMILY = [
  "Spouse",
  "Children",
  "Parents",
  "Siblings",
  "Persons in loco parentis",
];

const RED_CROSS_VERIFIES = [
  "Death (through funeral home)",
  "Hospitalization (through hospital)",
  "Serious illness (through medical provider)",
  "Other emergencies (through appropriate source)",
];

const RED_CROSS_MESSAGE = [
  "Nature of emergency",
  "Verification source",
  "Recommendation (if any)",
  "Contact information",
];

const COMMANDER_FACTORS = [
  "Nature of emergency",
  "Red Cross verification",
  "Operational requirements",
  "Your presence requirement at emergency",
  "Leave balance",
  "Transportation availability",
];

const COMMANDER_MAY = [
  "Approve full requested leave",
  "Approve partial leave",
  "Disapprove with explanation",
  "Delay approval pending operational needs",
];

const TRAVEL_OPTIONS = [
  { type: "Government-Funded Travel", description: "May be authorized for certain emergencies. Depends on circumstances and policy. Coordinate through S-1 and Transportation." },
  { type: "Personal-Expense Travel", description: "Most common for emergency leave. Arrange commercial travel. May be reimbursed later (verify eligibility)." },
  { type: "Space-Available Military Air", description: "Option if time permits. No cost. Not guaranteed." },
];

const IF_EMERGENCY_OCCURS = [
  "Family contacts Red Cross (1-877-272-7337)",
  "Red Cross verifies and notifies command",
  "You are notified of emergency",
  "Request emergency leave through chain of command",
  "Provide any additional information to commander",
  "Await approval decision",
];

const IF_APPROVED = [
  "Coordinate travel arrangements",
  "Obtain leave paperwork",
  "Depart for emergency",
  "Report arrival to unit",
  "Keep command informed",
  "Return by leave expiration",
  "Sign in upon return",
];

const DURING_LEAVE = [
  "Keep command informed of status",
  "Report any changes in situation",
  "Request extension if needed",
  "Return by leave expiration date",
  "Sign in upon return",
];

export function EmergencyLeaveRequestsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Emergency Leave Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Emergency leave allows you to return home during deployment for qualifying family emergencies.
            Emergency leave is chargeable leave approved by your commander based on verified emergency
            circumstances. The American Red Cross verifies emergencies and assists with notification.
            Understanding the process helps you act quickly when emergencies occur.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_POINTS.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Red Cross Contact</h4>
          <p className="mt-1 text-lg font-bold text-red-800 dark:text-red-200">1-877-272-7337</p>
          <p className="mt-1 text-sm text-red-800 dark:text-red-200">
            Available 24/7 for emergency communication and verification.
          </p>
        </div>
      </>
    ),

    qualifying: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Qualifying Emergencies
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Emergency Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Generally Approved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {QUALIFYING_EMERGENCIES.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className={`py-3 font-medium ${item.approved === "Yes" ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
                      {item.approved}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Immediate Family Defined
          </h3>
          <ul className="mt-4 space-y-2">
            {IMMEDIATE_FAMILY.map((member) => (
              <li key={member} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {member}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Red Cross Verifies
          </h3>
          <ul className="mt-4 space-y-2">
            {RED_CROSS_VERIFIES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Red Cross Message Contains
          </h3>
          <ul className="mt-4 space-y-2">
            {RED_CROSS_MESSAGE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    process: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Emergency Leave Process
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The process begins when your family contacts the American Red Cross to report and verify the emergency.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Commander&apos;s Decision Factors
          </h3>
          <ul className="mt-4 space-y-2">
            {COMMANDER_FACTORS.map((factor) => (
              <li key={factor} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {factor}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Commander May
          </h3>
          <ul className="mt-4 space-y-2">
            {COMMANDER_MAY.map((action) => (
              <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {action}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During Emergency Leave
          </h3>
          <ul className="mt-4 space-y-2">
            {DURING_LEAVE.map((action) => (
              <li key={action} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {action}
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">If Leave is Disapproved</h4>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
            Request reconsideration with additional information, ask chaplain to advocate, or access
            family support services in your absence.
          </p>
        </div>
      </>
    ),

    travel: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Travel Arrangements
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Once emergency leave is approved, coordinate travel arrangements through S-1 or Transportation.
          </p>
        </section>

        <div className="space-y-4">
          {TRAVEL_OPTIONS.map((option) => (
            <section key={option.type} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {option.type}
              </h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{option.description}</p>
            </section>
          ))}
        </div>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Emergency Occurs
          </h2>
          <div className="mt-4 space-y-2">
            {IF_EMERGENCY_OCCURS.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Approved
          </h2>
          <div className="mt-4 space-y-2">
            {IF_APPROVED.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
