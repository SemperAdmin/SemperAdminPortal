"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Monitor, Shield, FileText, HelpCircle, CreditCard, AlertTriangle } from "lucide-react";

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
  { id: "account", label: "Account & Security" },
  { id: "pay-personnel", label: "Pay & Personnel" },
  { id: "support", label: "Technical Support" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_TASKS = [
  { task: "Self-Registration", description: "Register using PEBD (Section 8 of LES) and 4-digit Primary MOS" },
  { task: "Password Recovery", description: "Associate up to two email addresses to reset password via email" },
  { task: "CAC Association", description: "Link your CAC by logging in while card is inserted" },
  { task: "Permission Audit", description: "Periodically review permissions, especially after PCS or assignment change" },
];

const EPAR_STEPS = [
  { step: "Navigate to MyEPAR", details: "Log in to MOL and select 'MyEPAR' from the menu" },
  { step: "Select Request Type", details: "Choose the appropriate personnel action category" },
  { step: "Complete Required Fields", details: "Ensure work email and phone number are accurate" },
  { step: "Upload Documentation", details: "Use the 'Files' tab to attach required source documents" },
  { step: "Submit Request", details: "Review and submit—EPAR remains pending until command review" },
];

const EPAR_TYPES = [
  { type: "Leave Requests", description: "Annual, emergency, convalescent, terminal leave" },
  { type: "Dependency Changes", description: "Marriage, birth, divorce, dependency status updates" },
  { type: "Address Updates", description: "Change of residence or mailing address" },
  { type: "Allotment Changes", description: "Start, stop, or modify pay allotments" },
  { type: "BAH/Housing", description: "Housing allowance requests and updates" },
  { type: "Award Nominations", description: "Personal award submissions through chain of command" },
];

const TROUBLE_TICKET_USES = [
  "System access issues or login problems",
  "Application errors or functionality issues",
  "Request access to specific MOL applications",
  "Report data discrepancies in your records",
  "CAC association problems",
  "Password reset when email recovery fails",
];

const COMMON_ISSUES = [
  { issue: "Account Locked", solution: "Wait 15 minutes, then try again. If still locked, submit a Trouble Ticket or call the Help Desk." },
  { issue: "CAC Not Recognized", solution: "Ensure CAC middleware is installed. Try a different browser or computer. Clear browser cache." },
  { issue: "Cannot Access Application", solution: "Verify you have the required permission. Submit a Trouble Ticket to request access." },
  { issue: "EPAR Stuck Pending", solution: "Check with your S-1 to ensure the request is in their queue. Verify contact info is correct." },
  { issue: "W-2 Not Available", solution: "Ensure you've elected 'Electronic Only' delivery. W-2s are available after mid-January." },
];

const CHECKLIST_ITEMS = [
  "Verify MOL account is active and accessible",
  "Associate two email addresses for password recovery",
  "Link CAC to account for faster login",
  "Review and update personal contact information",
  "Check permission assignments after PCS",
  "Download and save W-2 forms annually",
  "Bookmark MOL Help resources",
];

export function MOLContent({ data }: Props) {
  return (
    <TabbedContentLayout
      tabs={TABS}
      data={data}
      content={{
        overview: (
          <div className="space-y-6">
            <InfoCard icon={Monitor} title="Marine Online (MOL) Overview" variant="info">
              Every uniformed Marine must maintain an active MOL account to access their personnel and pay records. MOL is your gateway to managing leave, updating personal information, downloading tax documents, and submitting administrative requests to your S-1.
            </InfoCard>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key MOL Functions</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[var(--sa-red)]" />
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Account Security</h4>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Registration, password management, CAC linking</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[var(--sa-navy)]" />
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MyEPAR</h4>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Submit personnel actions electronically</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[var(--sa-gold)]" />
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Personal Info</h4>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Tax forms, contact updates, records access</p>
                </div>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Essential Tasks</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <tbody>
                    {KEY_TASKS.map((item) => (
                      <tr key={item.task} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.task}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Access Tip</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Bookmark <strong>mol.tfs.usmc.mil</strong> and access MOL regularly to stay current on your records. Many issues arise from outdated contact information that could have been corrected with a quick check.
              </p>
            </section>
          </div>
        ),
        account: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOL Account & Security Management</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Maintaining secure access to MOL is essential for every Marine. Follow these steps to set up and protect your account.
              </p>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <Shield className="h-5 w-5" />Self-Registration
              </h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">What You Need</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• <strong>Pay Entry Base Date (PEBD)</strong> - Found on Section 8 of your LES</li>
                    <li>• <strong>4-digit Primary MOS</strong> - Your primary military occupational specialty code</li>
                    <li>• <strong>Valid email address</strong> - For password recovery and notifications</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Password Recovery Setup</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Associate up to <strong>two email addresses</strong> with your account to enable self-service password reset. This avoids the need to call the Help Desk.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="font-medium text-green-800 dark:text-green-200">Recommended</h4>
                  <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>• Personal email (Gmail, etc.)</li>
                    <li>• Work/military email</li>
                    <li>• Update if email changes</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <h4 className="font-medium text-red-800 dark:text-red-200">Avoid</h4>
                  <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                    <li>• Shared or unit emails</li>
                    <li>• Temporary email services</li>
                    <li>• Expired school emails</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CAC Association</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Once registered, link your Common Access Card (CAC) for faster, more secure logins:
              </p>
              <ol className="mt-4 space-y-2">
                {[
                  "Insert your CAC into a card reader",
                  "Navigate to MOL login page",
                  "Select 'CAC Login' option",
                  "Enter your CAC PIN when prompted",
                  "Your CAC is now linked to your MOL account",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
            <InfoCard icon={AlertTriangle} title="Permission Audit" variant="warning">
              Perform an occasional &quot;self-audit&quot; of your permissions, especially after a PCS or work assignment change. Outdated permissions can cause access issues or security concerns.
            </InfoCard>
          </div>
        ),
        "pay-personnel": (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pay & Personnel Administration</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                The <strong>MyEPAR</strong> and <strong>Personal Info</strong> modules allow you to submit requests and download critical documents without visiting the administrative office.
              </p>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Electronic Personnel Action Requests (EPAR)</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">EPAR Type</th>
                      <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EPAR_TYPES.map((item) => (
                      <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Submitting an EPAR</h3>
              <div className="mt-4 space-y-4">
                {EPAR_STEPS.map((item, index) => (
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
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Forms (W-2/W-2C)</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Availability</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• Last 5 years of W-2 and W-2C forms</li>
                    <li>• Available mid-January each year</li>
                    <li>• Download directly from MOL</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Access Steps</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>1. Navigate to &quot;Personal Info&quot;</li>
                    <li>2. Select &quot;Tax Statements (W2)&quot;</li>
                    <li>3. Choose year and download</li>
                  </ul>
                </div>
              </div>
            </section>
            <InfoCard icon={AlertTriangle} title="Electronic Delivery Required" variant="warning">
              W-2 download is restricted to Marines who have elected <strong>&quot;Electronic Only&quot;</strong> delivery of their tax statements. Update your delivery preference in MOL to enable this feature.
            </InfoCard>
          </div>
        ),
        support: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Technical Support & Troubleshooting</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                If you encounter system issues or need access to specific applications, you can submit a <strong>Trouble Ticket</strong> directly through MOL.
              </p>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <HelpCircle className="h-5 w-5" />When to Use Trouble Tickets
              </h3>
              <ul className="mt-4 space-y-2">
                {TROUBLE_TICKET_USES.map((use) => (
                  <li key={use} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                    {use}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Trouble Ticket Tips</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Notes Tab</h4>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Use to describe the specific action requested and provide detailed context about your issue.</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">History Tab</h4>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Track all actions taken on your ticket and monitor progress toward resolution.</p>
                </div>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Issues & Solutions</h3>
              <div className="mt-4 space-y-3">
                {COMMON_ISSUES.map((item) => (
                  <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">{item.issue}</h4>
                    <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">{item.solution}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Important Distinction</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                <strong>Trouble Tickets</strong> are for application/system issues. Use <strong>MyEPAR</strong> for personnel/pay issues. Submitting to the wrong channel will delay resolution.
              </p>
            </section>
          </div>
        ),
        checklist: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOL Account Checklist</h2>
              <ul className="mt-4 space-y-3">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-zinc-300" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Recommended Review Schedule</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Monthly</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Verify personal info is current</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">After PCS</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Audit permissions & update address</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50 text-center">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Annually</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Download W-2 & review all records</p>
                </div>
              </div>
            </section>
            <InfoCard icon={Monitor} title="Stay Current" variant="default">
              Regular MOL access prevents small issues from becoming big problems. A few minutes each month verifying your information can save hours of administrative hassle later.
            </InfoCard>
          </div>
        ),
      }}
    />
  );
}
