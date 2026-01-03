"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "command-authority", label: "Command Authority" },
  { id: "taking-command", label: "Taking/Relinquishing" },
  { id: "trouble-tickets", label: "TTS & EPAR" },
  { id: "references", label: "References", type: "references" as const },
];

const PROCESS_STEPS = [
  {
    title: "Log in to MOL",
    description: "Access the portal at https://mol.tfs.usmc.mil/",
  },
  {
    title: "Navigate to Management",
    description: "Click on the MOL Management menu item, then select Organization Structure.",
  },
  {
    title: "Assign Acting Manager (If Relinquishing)",
    description: "Find your unit and click ASSIGN under the Manager or Acting Manager column. Search for and select the Marine who will assume the authority.",
    note: "Acting Managers must be a Master Sergeant (E-8) or above, or a designated Civil Servant (CIV).",
  },
  {
    title: "Transfer the Template",
    description: "Go to MOL Management and click Manage Permissions. Select the Acting CO option from the left-hand navigation menu.",
  },
  {
    title: "Finalize the Action",
    description: "To Relinquish: Click the Relinquish Command button. To Take: Click the Take Command button.",
  },
  {
    title: "System Refresh",
    description: "The application will automatically log you out to refresh your permissions.",
  },
];

const AUTHORITY_TYPES = [
  {
    type: "Execution",
    description: "Authorized to use a permission at or below the unit scope (e.g., Battalion level).",
  },
  {
    type: "Delegate",
    description: "Authorized to grant \"Execution\" of a permission to another user within the unit.",
  },
  {
    type: "Grant Delegate",
    description: "Authorized to grant another user the authority to delegate \"Execution\" to others.",
  },
];

export function MOLManagementContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOL Management: Command Authority & Permissions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            As a Commander, managing your unit&apos;s administrative authority within Marine Online (MOL) is a non-delegable
            responsibility that ensures legal and administrative actions, such as Promotion Recommendations, are processed correctly.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Commander Responsibilities</h4>
          <ul className="mt-2 space-y-2 text-sm text-amber-700 dark:text-amber-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Formally take/relinquish command in MOL during Change of Command</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Maintain proper CO Permission Template assignment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Perform occasional permission self-audits</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Ensure Acting Manager meets grade requirements (E-8+ or CIV)</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Access MOL</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://mol.tfs.usmc.mil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)]"
            >
              Marine Online (MOL)
            </a>
          </div>
        </div>
      </section>
    ),
    "command-authority": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Summary of Command Authorities</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The CO Permission Template contains specific authorities that cannot be delegated to subordinate staff.
            They must be held by the Commander or a formally assigned Acting Manager.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority Types</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authority Type</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                {AUTHORITY_TYPES.map((auth, index) => (
                  <tr key={index} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{auth.type}</td>
                    <td className="py-3">{auth.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Non-Delegable Authorities</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span><strong>Promotion Recommendations Approver (Prom Rec)</strong> - Must be held by CO or Acting Manager</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span><strong>Commanding Officer Template</strong> - Transfers during formal Change of Command</span></li>
          </ul>
        </div>
      </section>
    ),
    "taking-command": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Taking and Relinquishing Battalion Control</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The process of &quot;Taking Command&quot; or &quot;Relinquishing Command&quot; in MOL formally transfers the
            <strong> Commanding Officer (CO) Permission Template</strong>. This template contains specific authorities—like
            the <strong>Promotion Recommendations Approver (Prom Rec)</strong>—that cannot be delegated to subordinate staff.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Process Steps</h3>
          <div className="mt-4 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-[var(--sa-cream)]">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
                  {step.note && (
                    <p className="mt-2 text-xs text-amber-700 dark:text-amber-400">
                      <strong>Note:</strong> {step.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    "trouble-tickets": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command-Level Trouble Tickets & EPAR Oversight</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Commanders use specialized electronic services to troubleshoot system issues and oversee personnel actions
            that require command-level determination.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Trouble Ticket Service (TTS)</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Used for submitting electronic tickets regarding application issues, system errors, or specific access
              requests through the chain of command.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Application issues</li>
              <li>System errors</li>
              <li>Access requests</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Electronic Personnel Action Request (EPAR)</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Used to process personnel-related actions. After a Marine submits an EPAR, it remains pending review
              by Command personnel in the unit to determine the next necessary action.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Personnel-related actions</li>
              <li>Command-level review required</li>
              <li>Status tracking available</li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
          <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">Permission Self-Audit</h4>
          <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
            Commanders should perform occasional &quot;self-audits&quot; of their permission assignments, especially after a
            Change of Command, using the <strong>My Permissions</strong> feature in MOL.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
