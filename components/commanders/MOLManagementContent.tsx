"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Settings, Shield, Users, AlertTriangle, CheckCircle, ArrowRightLeft } from "lucide-react";

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
  { id: "permissions", label: "CO Permissions" },
  { id: "command-control", label: "Taking/Relinquishing Command" },
  { id: "epar-tickets", label: "EPAR & Trouble Tickets" },
  { id: "checklist", label: "Commander Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Permission Template", value: "CO authority managed through 'COMMANDING OFFICER (CO)' permission template in MOL" },
  { label: "Battalion Control", value: "Ownership facilitated through Manager and Acting Manager assignments in OMS" },
  { label: "Assumption of Command", value: "Formal Manager assignment requires Assumption of Command letter submitted to MISSO" },
  { label: "Non-Delegable Tasks", value: "Promotion Recommendations Approver (Prom Rec) cannot be delegated below CO/Acting Manager" },
];

const CO_PERMISSIONS = [
  { permission: "Promotion Recommendations Approver", delegable: false, description: "Final approval authority for all promotion recommendations", level: "CO Only" },
  { permission: "Assumption of Command", delegable: false, description: "Formal transfer of command authority", level: "CO Only" },
  { permission: "Organization Structure Management", delegable: true, description: "Modify unit organizational structure", level: "CO/Acting Manager" },
  { permission: "Permission Template Assignment", delegable: true, description: "Assign/revoke user permissions", level: "CO/Acting Manager" },
  { permission: "EPAR Final Approval", delegable: true, description: "Approve personnel action requests", level: "CO/Delegate" },
  { permission: "Trouble Ticket Oversight", delegable: true, description: "Review and prioritize system issues", level: "CO/Admin" },
];

const COMMAND_TRANSFER_STEPS = [
  { step: "Access Organization Structure", details: "Log in to MOL → Click 'MOL Management' → Select 'Organization Structure'" },
  { step: "Assign Acting Manager", details: "Click 'ASSIGN' to designate Acting CO. Must be Master Sergeant (E-9) or above, or Civil Servant (CIV)" },
  { step: "Manage Permissions", details: "Navigate to 'MOL Management' → Click 'Manage Permissions'" },
  { step: "Select Acting CO Option", details: "Select the 'Acting CO' option from the left-hand menu" },
  { step: "Execute Transfer", details: "Click 'Relinquish Command' to transfer CO template to Acting Manager, or 'Take Command' to pull authority back" },
  { step: "System Logout", details: "System will automatically log you out to update permissions once transfer is confirmed" },
];

const ACTING_MANAGER_REQUIREMENTS = [
  "Must be Master Sergeant (E-9) or above",
  "Civil Servants (CIV) may also serve as Acting Manager",
  "Must have completed MOL Administrator training",
  "Should have familiarity with unit personnel actions",
  "Requires formal designation letter on file",
];

const EPAR_TYPES = [
  { type: "Personnel Status Changes", examples: "Duty status, assignment changes, temporary duty" },
  { type: "Leave Requests", examples: "Annual, emergency, convalescent, special liberty" },
  { type: "Award Nominations", examples: "Personal awards, certificates of commendation" },
  { type: "Administrative Actions", examples: "Page 11 entries, fitness report routing" },
  { type: "Training Requests", examples: "School quotas, formal course enrollment" },
];

const TROUBLE_TICKET_USES = [
  "Resolve application or system access issues",
  "Request specific MOL permissions through supporting admin office",
  "Report data discrepancies or synchronization errors",
  "Request account unlocks or password resets for subordinates",
  "Escalate time-sensitive personnel issues",
];

const COMMANDER_CHECKLIST = [
  { task: "Verify Contact Information", description: "Ensure work email and phone numbers are correct in prepopulated fields to avoid processing delays" },
  { task: "Audit Permission Assignments", description: "Perform periodic 'self-audits' of permission assignments, especially after Change of Command or PCS" },
  { task: "Review Acting Manager Status", description: "Confirm Acting Manager designations are current and properly documented" },
  { task: "Check Pending EPARs", description: "Review queue of pending personnel actions requiring command determination" },
  { task: "Revoke Unnecessary Permissions", description: "Use 'My Permissions' tool to self-revoke access no longer required or redundant across unit levels" },
  { task: "Validate Organization Structure", description: "Ensure unit hierarchy accurately reflects current manning and reporting relationships" },
];

export function MOLManagementContent({ data }: Props) {
  return (
    <TabbedContentLayout
      tabs={TABS}
      data={data}
      content={{
        overview: (
          <div className="space-y-6">
            <InfoCard icon={Settings} title="MOL Management: Command Authority & Permissions" variant="info">
              Commanding Officers must maintain direct control over specific MOL functions, such as <strong>Promotion Recommendations</strong> and <strong>Assumption of Command</strong>. At the Battalion level, these permissions are managed through the &quot;COMMANDING OFFICER (CO)&quot; permission template. Certain functions are <strong>non-delegable</strong> and must be performed by the CO or formally assigned Acting Manager.
            </InfoCard>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Responsibilities</h2>
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
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command-Level MOL Functions</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[var(--sa-red)]" />
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Permissions</h4>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Control CO permission template and delegate authority to staff</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="h-5 w-5 text-[var(--sa-navy)]" />
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Command Transfer</h4>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Take or relinquish battalion control through OMS</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[var(--sa-gold)]" />
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Personnel Actions</h4>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Approve EPARs and oversee trouble ticket resolution</p>
                </div>
              </div>
            </section>
            <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-800 dark:text-amber-200">MISSO Coordination</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                The formal Manager of a battalion is assigned once an <strong>Assumption of Command letter</strong> has been submitted to the supporting Manpower Information Systems Support Office (MISSO). Coordinate with your S-1 to ensure this documentation is processed promptly.
              </p>
            </section>
          </div>
        ),
        permissions: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CO Permission Template</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Permission</th>
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Delegable?</th>
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                      <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Authority Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CO_PERMISSIONS.map((perm) => (
                      <tr key={perm.permission} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{perm.permission}</td>
                        <td className="py-3 pr-4">
                          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${perm.delegable ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>
                            {perm.delegable ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{perm.description}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{perm.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <InfoCard icon={AlertTriangle} title="Non-Delegable Functions" variant="warning">
              The <strong>Promotion Recommendations Approver (Prom Rec)</strong> function does not allow for further delegation. The CO or a formally assigned Acting Manager <strong>must perform these personally</strong>. Attempting to delegate this function will fail at the system level.
            </InfoCard>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Acting Manager Requirements</h3>
              <ul className="mt-4 space-y-2">
                {ACTING_MANAGER_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 dark:text-green-400" />
                    {req}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Permission Auditing</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Perform occasional &quot;self-audits&quot; of permission assignments, particularly after a Change of Command or duty station move. If a permission is no longer required or is redundant across unit levels, use the <strong>My Permissions</strong> tool to self-revoke access.
              </p>
            </section>
          </div>
        ),
        "command-control": (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Taking & Relinquishing Battalion Control</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                The process to transfer CO permissions between the Commanding Officer and an Acting Manager follows these steps:
              </p>
              <div className="mt-6 space-y-4">
                {COMMAND_TRANSFER_STEPS.map((item, index) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <div>
                      <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.step}</h4>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Reference</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="font-medium text-green-800 dark:text-green-200">To Take Command</h4>
                  <ol className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>1. MOL Management → Manage Permissions</li>
                    <li>2. Select &quot;Acting CO&quot; from left menu</li>
                    <li>3. Click &quot;Take Command&quot;</li>
                    <li>4. System logs you out automatically</li>
                  </ol>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                  <h4 className="font-medium text-amber-800 dark:text-amber-200">To Relinquish Command</h4>
                  <ol className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                    <li>1. MOL Management → Manage Permissions</li>
                    <li>2. Select &quot;Acting CO&quot; from left menu</li>
                    <li>3. Click &quot;Relinquish Command&quot;</li>
                    <li>4. Authority transfers to Acting Manager</li>
                  </ol>
                </div>
              </div>
            </section>
            <InfoCard icon={AlertTriangle} title="System Logout Required" variant="warning">
              When you execute a Take Command or Relinquish Command action, the system will <strong>automatically log you out</strong> to update permissions. You must log back in to see the updated permission set.
            </InfoCard>
          </div>
        ),
        "epar-tickets": (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Electronic Personnel Action Requests (EPAR)</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                EPARs provide an electronic method for the CO or administrative office to process personnel-related actions through the chain of command. After a Marine submits an EPAR, it remains pending review by Command personnel for determination.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">EPAR Type</th>
                      <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EPAR_TYPES.map((epar) => (
                      <tr key={epar.type} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{epar.type}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{epar.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Trouble Ticket Service (TTS)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Commanders utilize Trouble Tickets to manage application issues and system access for the entire unit:
              </p>
              <ul className="mt-4 space-y-2">
                {TROUBLE_TICKET_USES.map((use) => (
                  <li key={use} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                    {use}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Command Review Queue</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                After a Marine submits an EPAR, it enters the command review queue. EPARs remain <strong>pending</strong> until Command personnel make a determination. Establish a regular review cadence (daily or twice-weekly) to prevent backlogs that delay Marines&apos; personnel actions.
              </p>
            </section>
          </div>
        ),
        checklist: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s MOL Management Checklist</h2>
              <div className="mt-4 space-y-3">
                {COMMANDER_CHECKLIST.map((item) => (
                  <div key={item.task} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                      <div>
                        <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.task}</h4>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Periodic Review Schedule</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Daily</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Review pending EPARs</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Weekly</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Check trouble tickets</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Quarterly</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Audit all permissions</p>
                </div>
              </div>
            </section>
            <InfoCard icon={CheckCircle} title="Change of Command Transition" variant="default">
              During Change of Command, ensure the outgoing CO properly relinquishes MOL authority and the incoming CO executes &quot;Take Command&quot; after the Assumption of Command letter is processed by MISSO. Verify all permission transfers are complete before the outgoing CO departs.
            </InfoCard>
          </div>
        ),
      }}
    />
  );
}
