"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileCheck, AlertTriangle, Shield, Clock } from "lucide-react";

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
  { id: "data", label: "Data Categories" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "FOIA Standards", value: "Freedom of Information Act governs what the public has a right to know" },
  { label: "Privacy Act", value: "Protects a Marine's PII (SSN, home address, family details)" },
  { label: "Commander Discretion", value: "Names and ranks often releasable; ongoing investigation details are protected" },
  { label: "Balance Required", value: "Transparency must be balanced with privacy and operational security" },
];

const RELEASABLE_DATA = [
  "Name, Rank, and Date of Rank",
  "Current Assignment and Unit",
  "Awards and Decorations",
  "Pay Grade",
  "Official Duty Contact Information",
  "Hometown (with consent for media)",
];

const PROTECTED_DATA = [
  "Social Security Number",
  "Home Address/Personal Phone",
  "Medical/Dental Records",
  "Specifics of an Open Investigation",
  "Family Member Information",
  "Financial Records",
  "Performance Evaluations",
  "Disciplinary Records (most cases)",
];

const PROCESS_STEPS = [
  "Consult the PAO: Before releasing any formal statement, have the COMMSTRAT officer review it",
  "Verify Status: Ensure the information does not fall under an exemption (Classified or Privacy Act)",
  "Legal Review: For complex requests, consult with the command legal officer",
  "Redaction: If a document is released, ensure all PII is properly 'blacked out' digitally and physically",
  "Document: Maintain records of what was released and to whom",
];

const FOIA_EXEMPTIONS = [
  { exemption: "Exemption 1", description: "Classified national defense or foreign policy information" },
  { exemption: "Exemption 5", description: "Privileged communications (attorney-client, deliberative process)" },
  { exemption: "Exemption 6", description: "Personal privacy information" },
  { exemption: "Exemption 7", description: "Law enforcement records that could interfere with proceedings" },
];

const COMMON_ISSUES = [
  {
    issue: "PII leaks",
    solution: "Accidentally including a Marine's DOD ID or SSN in a public-facing press release or social media post. Always have a second person review any public release for PII.",
  },
  {
    issue: "Over-redaction",
    solution: "Refusing to release information that is clearly public record. Consult with PAO and legal to understand what must be released under FOIA.",
  },
  {
    issue: "Investigation details",
    solution: "Providing specifics about an ongoing investigation to media or family members. Defer to 'the matter is under investigation' until formally concluded.",
  },
];

export function ReleasableInformationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileCheck} title="Releasable Information" variant="info">
          Commanders must balance <strong>transparency</strong> with the <strong>Privacy Act</strong>
          and <strong>Operational Security (OPSEC)</strong>. Knowing exactly what can be released
          to the public versus what must be protected is critical to preventing legal violations.
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

        <InfoCard icon={Clock} title="FOIA Response Timeline" variant="warning">
          Formal FOIA requests require a response within <strong>20 working days</strong>.
          Track all requests and coordinate with the FOIA officer early.
        </InfoCard>
      </div>
    ),

    data: (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-green-700 dark:text-green-400">
              Releasable Information
            </h2>
            <ul className="mt-4 space-y-2">
              {RELEASABLE_DATA.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-red-700 dark:text-red-400">
              Protected Information
            </h2>
            <ul className="mt-4 space-y-2">
              {PROTECTED_DATA.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common FOIA Exemptions
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Exemption</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {FOIA_EXEMPTIONS.map((item) => (
                  <tr key={item.exemption} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.exemption}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Shield} title="When in Doubt, Protect" variant="default">
          If you are unsure whether information is releasable, err on the side of protection
          and consult with PAO and legal before release.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Information Release Process
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Redaction Best Practices
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Use proper redaction tools—not just black highlighting</li>
            <li>&bull; Verify redacted text cannot be copied from PDFs</li>
            <li>&bull; Have a second person verify all PII is removed</li>
            <li>&bull; Maintain an unredacted copy in secure files</li>
            <li>&bull; Document what was redacted and the exemption used</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Digital Redaction Warning" variant="warning">
          Simply highlighting text in black on a PDF does not remove the underlying data.
          Use proper redaction tools that permanently remove the text from the document.
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
