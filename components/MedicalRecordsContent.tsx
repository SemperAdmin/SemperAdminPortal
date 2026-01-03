"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Stethoscope, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "access", label: "Accessing Records" },
  { id: "readiness", label: "Medical Readiness" },
  { id: "actions", label: "What You Should Do" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Ownership", value: "You are the subject of the record, but the physical or digital record is government property" },
  { label: "Access", value: "You have a right to view your records via MHS GENESIS Patient Portal" },
  { label: "Deployability", value: "Your medical record determines your 'Medical Readiness' and deployability status" },
  { label: "VA Claims", value: "Your medical record is the primary evidence used for VA disability claims after separation" },
];

const RECORD_COMPONENTS = [
  { component: "Health Record (Brown Jacket)", description: "Physical folder containing your complete medical history", importance: "Critical" },
  { component: "Immunization Records", description: "All vaccinations received during service", importance: "High" },
  { component: "Periodic Health Assessment (PHA)", description: "Annual health screening required for readiness", importance: "High" },
  { component: "Dental Records", description: "Dental exams, treatment history, and readiness class", importance: "High" },
  { component: "Deployment Health Assessments", description: "Pre/post deployment health screenings", importance: "High" },
  { component: "Treatment Records", description: "Documentation of all injuries, illnesses, and treatments", importance: "Critical" },
];

const READINESS_REQUIREMENTS = [
  { requirement: "PHA (Periodic Health Assessment)", frequency: "Annual", impact: "Non-deployable if overdue" },
  { requirement: "Dental Exam", frequency: "Annual", impact: "Non-deployable if Class 3 or overdue" },
  { requirement: "HIV Test", frequency: "Every 2 years", impact: "Non-deployable if overdue" },
  { requirement: "Immunizations", frequency: "Per schedule", impact: "Non-deployable if deficient" },
  { requirement: "Vision Screening", frequency: "Per PHA", impact: "May limit assignments" },
  { requirement: "Hearing Test", frequency: "Per PHA", impact: "May limit assignments" },
];

const ACTION_ITEMS = [
  "Never Lose It: If issued a physical 'Brown Jacket' for PCS or deployment, protect it - it contains your entire history",
  "Make Copies: Before handing over your record to a new provider or during final physical, make a complete digital or paper copy",
  "Check Your IMR: Regularly check your Individual Medical Readiness (IMR) status on MOL to ensure dental and PHA dates are current",
  "Document Everything: Ensure all injuries and illnesses during service are documented, even minor ones",
  "Keep Personal Records: Maintain your own copies of all medical documentation for VA claims",
];

const COMMON_ISSUES = [
  { issue: "Missing Records After PCS", solution: "Contact previous duty station medical records department. Request records be forwarded or obtain copies directly." },
  { issue: "Undocumented Injuries", solution: "Visit medical for any injury or illness, even minor ones. Request sick call for documentation. This is critical for future VA claims." },
  { issue: "Overdue PHA/Dental", solution: "Schedule appointments immediately. Non-deployable status affects the entire unit's readiness reporting." },
  { issue: "MHS GENESIS Access Issues", solution: "Visit your local TRICARE Service Center or ID card office to verify your registration and access." },
  { issue: "Records Not Transferred", solution: "Allow 30-60 days for records transfer. Follow up with gaining command medical department if records don't arrive." },
];

const importanceClasses: Record<string, string> = {
  Critical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  High: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
};

export function MedicalRecordsContent({ data }: Props) {
  return (
    <TabbedContentLayout
      tabs={TABS}
      data={data}
      content={{
        overview: (
          <div className="space-y-6">
            <InfoCard icon={Stethoscope} title="Medical Records Overview" variant="info">
              Your medical record (often called your &quot;Health Record&quot; or &quot;Medical Jacket&quot;) is the legal documentation of every injury, illness, and immunization you receive while in the Marine Corps. This record is critical for your readiness and is the <strong>primary evidence</strong> used for VA claims when you transition to civilian life.
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
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Record Components</h2>
              <div className="mt-4 space-y-3">
                {RECORD_COMPONENTS.map((item) => (
                  <div key={item.component} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.component}</h3>
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${importanceClasses[item.importance] || importanceClasses.High}`}>
                        {item.importance}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ),
        access: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accessing Your Medical Records</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MHS GENESIS Patient Portal</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• Primary access point for digital records</li>
                    <li>• View appointments, lab results, medications</li>
                    <li>• Access via DS Logon or CAC</li>
                    <li>• patientportal.mhsgenesis.health.mil</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">TRICARE Online</h4>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>• Appointment scheduling</li>
                    <li>• Prescription refills</li>
                    <li>• Health record access</li>
                    <li>• tricareonline.com</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requesting Physical Records</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Visit your local Military Treatment Facility (MTF) Medical Records Department",
                  "Complete DD Form 2870 (Authorization for Disclosure of Medical Information)",
                  "Specify exactly what records you need and for what purpose",
                  "Allow 5-10 business days for processing",
                  "Pick up copies or have them mailed to your address",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>
            <InfoCard icon={Shield} title="Your Right to Access" variant="default">
              Under the Privacy Act and HIPAA, you have the right to access all of your medical records. You cannot be denied access to your own health information.
            </InfoCard>
          </div>
        ),
        readiness: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical Readiness Requirements</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-700">
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Requirement</th>
                      <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Frequency</th>
                      <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Impact if Overdue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {READINESS_REQUIREMENTS.map((item) => (
                      <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                        <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                        <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.frequency}</td>
                        <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <Clock className="h-5 w-5" />Checking Your IMR Status
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Log into Marine Online (MOL)",
                  "Navigate to 'Individual Records' → 'IMR Status'",
                  "Review each readiness category (Medical, Dental, Immunizations)",
                  "Note any items showing 'Red' or 'Overdue'",
                  "Schedule appointments to correct deficiencies immediately",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
                  </div>
                ))}
              </div>
            </section>
            <InfoCard icon={AlertTriangle} title="Readiness Impacts Unit" variant="warning">
              Your individual medical readiness directly affects your unit&apos;s overall readiness reporting. A single Marine who is non-deployable due to an overdue PHA or dental exam impacts the entire unit&apos;s P-Level.
            </InfoCard>
          </div>
        ),
        actions: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What You Should Do</h2>
              <div className="mt-6 space-y-4">
                {ACTION_ITEMS.map((action, index) => (
                  <div key={action} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{action}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before EAS/Separation</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>&bull; <strong>Request complete copies</strong> of all medical and dental records</li>
                <li>&bull; <strong>Complete separation physical</strong> and document all conditions</li>
                <li>&bull; <strong>File VA claims</strong> before or immediately after separation</li>
                <li>&bull; <strong>Keep originals</strong> in a safe, accessible location</li>
                <li>&bull; <strong>Register with VA</strong> healthcare system</li>
              </ul>
            </section>
            <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">VA Claims Tip</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Every injury or illness documented during service can potentially be claimed as a service-connected disability. Even conditions that seem minor now may worsen over time. <strong>Document everything</strong> and ensure it&apos;s in your record before you separate.
              </p>
            </section>
          </div>
        ),
        issues: (
          <div className="space-y-6">
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
              <div className="mt-4 space-y-4">
                {COMMON_ISSUES.map((item) => (
                  <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                    <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                    <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
                  </div>
                ))}
              </div>
            </section>
            <InfoCard icon={AlertTriangle} title="Protect Your Records" variant="warning">
              Lost or incomplete medical records can significantly impact your VA disability claims after separation. Always maintain personal copies of all medical documentation.
            </InfoCard>
          </div>
        ),
      }}
    />
  );
}
