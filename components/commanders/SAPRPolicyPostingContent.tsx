"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, MapPin, Phone } from "lucide-react";

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
  { id: "content", label: "Required Content" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Required Content", value: "Commander's Policy Statement, SARC/VA contacts, DOD Safe Helpline number" },
  { label: "Location Requirements", value: "High-traffic areas: barracks, workspaces, Command Boards" },
  { label: "Annual Review", value: "Must be reviewed and re-signed upon change of command" },
  { label: "Legal Requirement", value: "Required by law and Marine Corps Order" },
];

const REQUIRED_CONTENT = [
  "Commander's signed policy statement on sexual assault prevention",
  "Local SARC name and 24/7 contact number",
  "Victim Advocate (VA) contact information",
  "DOD Safe Helpline number (1-877-995-5247)",
  "Statement on both reporting options (Restricted and Unrestricted)",
  "Retaliation prohibition statement",
];

const POSTING_LOCATIONS = [
  { location: "Barracks", description: "Common areas, laundry rooms, duty huts" },
  { location: "Workspaces", description: "Unit offices, shops, hangars, motor pools" },
  { location: "Command Boards", description: "Official unit information boards" },
  { location: "Heads/Restrooms", description: "Where Marines can read privately" },
  { location: "Dining Facilities", description: "If unit has organic DFAC" },
];

const PROCESS_STEPS = [
  "Drafting: Use the template provided by the installation SAPR office",
  "Coordination: Verify SARC and VA contact numbers are current and functional",
  "Commander Signature: Commander signs and dates the policy statement",
  "Posting: Physically post in all required locations",
  "Inspection: Walk through locations to ensure documents are visible and not obscured",
  "Maintenance: Regularly check condition and replace faded/damaged postings",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Within 90 Days", action: "Of assuming command, SAPR policy must be published and posted" },
  { requirement: "Upon Change of Command", action: "New commander must review and re-sign" },
  { requirement: "Quarterly", action: "Verify contact information is still current" },
];

const COMMON_ISSUES = [
  {
    issue: "Outdated numbers",
    solution: "Posting a policy with a SARC's phone number who has already executed PCS orders. Verify contact information quarterly and immediately update when personnel change.",
  },
  {
    issue: "Torn/faded posters",
    solution: "Failure to maintain the physical condition of the postings can imply a lack of command emphasis. Conduct regular inspections and replace damaged materials immediately.",
  },
  {
    issue: "Obscured postings",
    solution: "Allowing other notices or materials to cover SAPR postings. Designate specific spaces for SAPR information that cannot be covered or removed.",
  },
];

export function SAPRPolicyPostingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="SAPR Policy Posting" variant="info">
          Commanders are required by <strong>law and order</strong> to post specific SAPR
          information in prominent locations. This ensures that every Marine, regardless
          of rank, knows how to contact a SARC or VA and understands the commander&apos;s
          stance on sexual assault.
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
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Phone} title="DOD Safe Helpline" variant="default">
          Always include the <strong>DOD Safe Helpline: 1-877-995-5247</strong>. This
          provides 24/7 anonymous crisis support for service members worldwide.
        </InfoCard>
      </div>
    ),

    content: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Policy Content
          </h2>
          <ul className="mt-4 space-y-2">
            {REQUIRED_CONTENT.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Posting Locations
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Location</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Specifics</th>
                </tr>
              </thead>
              <tbody>
                {POSTING_LOCATIONS.map((item) => (
                  <tr key={item.location} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.location}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={MapPin} title="Visibility is Key" variant="warning">
          Postings must be in <strong>high-traffic areas</strong> where Marines will
          see them regularly. A posting hidden in a corner or covered by other materials
          does not meet the requirement.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Policy Posting Process
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
            Maintenance Checklist
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Conduct weekly visual inspection of all posting locations</li>
            <li>&bull; Verify SARC/VA contact numbers are current</li>
            <li>&bull; Replace any faded, torn, or damaged materials</li>
            <li>&bull; Ensure postings are not covered by other materials</li>
            <li>&bull; Document inspections in unit SOP</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="90-Day Deadline" variant="warning">
          The SAPR policy must be published and posted within <strong>90 days</strong>
          of assuming command. This is a CGIP inspection item.
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
