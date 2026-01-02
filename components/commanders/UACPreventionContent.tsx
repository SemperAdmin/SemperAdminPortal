"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Ban, AlertTriangle, FileText, Scale } from "lucide-react";

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
  { id: "prevention", label: "Prevention" },
  { id: "process", label: "Ratification" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Contracting Authority", value: "Only warranted Contracting Officers or authorized Government Purchase Card (GPC) holders can bind the government to a contract" },
  { label: "Ratification Process", value: "The administrative method for 'fixing' a UAC; requires the Commander to submit a formal package to the Head of Contracting Activity (HCA)" },
  { label: "Personal Liability", value: "The Marine who made the UAC may be held personally liable for the cost if the government chooses not to ratify" },
];

const PREVENTION_MEASURES = [
  { measure: "Education", description: "Brief all Marines on 'Apparent Authority' and the prohibition against ordering services from vendors" },
  { measure: "Purchase Requests", description: "Route all requirements through the Supply Officer/Comptroller via PR Builder" },
  { measure: "Clear Signage", description: "Post signs in work areas stating 'Only authorized personnel may order goods or services'" },
  { measure: "Vendor Coordination", description: "Ensure vendors know to verify contracting authority before providing services" },
];

const RATIFICATION_STEPS = [
  "Discovery: If a UAC occurs, immediately direct the vendor to stop all work",
  "Notification: Report the UAC to the Contracting Officer and Supply Officer",
  "Documentation: Prepare a statement of facts explaining how the UAC occurred",
  "Package Submission: Submit a ratification package including justification and corrective action plan",
  "HCA Review: The Head of Contracting Activity determines whether to ratify the commitment",
];

const COMMON_ISSUES = [
  { issue: "Emergency Maintenance", solution: "Units allowing a technician to perform repairs before a contract is finalized because of a 'mission-critical' need. Always route through contracting—even in emergencies, expedited procedures exist." },
  { issue: "Handshake Agreements", solution: "Verbal promises made to vendors for equipment rentals or catering. Never make oral commitments—put everything through the proper contracting channels." },
];

export function UACPreventionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Ban} title="Unauthorized Commitment Prevention" variant="info">
          An Unauthorized Commitment (UAC) occurs when a Marine without legal contracting authority enters into an agreement with a commercial vendor for goods or services. These actions violate federal law and require a complex, high-level &quot;ratification&quot; process to resolve.
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
        <InfoCard icon={AlertTriangle} title="Immediate Action Required" variant="warning">
          Any potential UAC must be reported <strong>immediately</strong> to the Supply Officer or S-4. Time is critical to minimize liability.
        </InfoCard>
      </div>
    ),
    prevention: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prevention Measures</h2>
          <div className="mt-4 space-y-3">
            {PREVENTION_MEASURES.map((item) => (
              <div key={item.measure} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.measure}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Scale} title="Apparent Authority" variant="default">
          &quot;Apparent Authority&quot; occurs when a vendor reasonably believes a Marine has the authority to bind the government. Train Marines to never give this impression.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Ratification Process</h2>
          <div className="mt-6 space-y-4">
            {RATIFICATION_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <FileText className="h-5 w-5" />Ratification Package Contents
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Statement of facts detailing the unauthorized commitment</li>
            <li>&bull; Explanation of how and why the UAC occurred</li>
            <li>&bull; Documentation of the goods/services received</li>
            <li>&bull; Recommendation for corrective action</li>
            <li>&bull; Commander&apos;s endorsement</li>
          </ul>
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
        <InfoCard icon={AlertTriangle} title="Personal Financial Liability" variant="warning">
          If the government refuses to ratify the UAC, the individual who made the commitment may be personally liable for the full cost of goods or services.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
