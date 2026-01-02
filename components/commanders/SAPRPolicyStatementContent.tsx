"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, AlertTriangle, MapPin, Phone } from "lucide-react";

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
  { id: "elements", label: "Required Content" },
  { id: "posting", label: "Posting Requirements" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Purpose", value: "Outlines Commander's commitment to victim care and offender accountability" },
  { label: "Mandatory Content", value: "Must include contact info for SARC, SAPR VAs, and DOD Safe Helpline" },
  { label: "Commitment to Care", value: "Emphasizes victims will be treated with dignity and provided medical/legal support" },
  { label: "Offender Accountability", value: "Explicitly states sexual assault is a crime that will be investigated and prosecuted" },
];

const REQUIRED_CONTENT = [
  "Commander's personal commitment to preventing sexual assault",
  "Statement that sexual assault is a crime and will be prosecuted",
  "SARC name and contact information",
  "SAPR Victim Advocate contact information",
  "DOD Safe Helpline number: 1-877-995-5247",
  "Explanation of Restricted vs. Unrestricted reporting options",
  "Commitment to victim care and support services",
  "Statement on confidentiality protections",
  "Retaliation prohibition statement",
];

const POSTING_LOCATIONS = [
  { location: "Unit headquarters bulletin board", priority: "Required" },
  { location: "Common areas and break rooms", priority: "Required" },
  { location: "Back of bathroom stall doors", priority: "Critical - high-privacy for victims" },
  { location: "Barracks common areas", priority: "Required" },
  { location: "Medical and dental facilities", priority: "Required" },
  { location: "Unit website and SharePoint", priority: "Recommended" },
];

const PROCESS_STEPS = [
  "Contact the SARC to obtain current contact information",
  "Verify all phone numbers and email addresses are active",
  "Draft policy statement with all required elements",
  "Include DOD Safe Helpline: 1-877-995-5247",
  "Review with SARC for completeness",
  "Sign and date the policy",
  "Post in all required locations, especially bathroom stalls",
  "Brief the policy during unit formation",
];

const COMMON_ISSUES = [
  {
    issue: "Inactive Phone Numbers",
    solution: "Posting a policy with a 'duty phone' number that is no longer in service or monitored. Verify all contact information with the SARC before posting.",
  },
  {
    issue: "Missing Safe Helpline",
    solution: "The DOD Safe Helpline (1-877-995-5247) must be prominently displayed. This is a 24/7 anonymous resource for victims.",
  },
  {
    issue: "Bathroom posting overlooked",
    solution: "Bathroom stall doors are critical posting locations—they provide privacy for victims to see resources. Ensure these are posted and maintained.",
  },
];

export function SAPRPolicyStatementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="SAPR Policy Statement" variant="info">
          The Sexual Assault Prevention and Response (SAPR) Policy Statement outlines the
          Commander&apos;s commitment to victim care and offender accountability. It serves as
          a constant reminder of the resources available to victims.
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

        <InfoCard icon={AlertTriangle} title="90-Day Requirement" variant="warning">
          The SAPR Policy must be published within <strong>90 days</strong> of assuming command.
          Note: Many Major Subordinate Commands require this within 60 days—check local policy.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Phone className="h-5 w-5" />
            Critical Contact
          </h3>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
              DOD Safe Helpline: 1-877-995-5247
            </p>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              24/7 anonymous support for sexual assault survivors
            </p>
          </div>
        </section>
      </div>
    ),

    elements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Content
          </h2>
          <ul className="mt-4 space-y-2">
            {REQUIRED_CONTENT.map((element) => (
              <li key={element} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {element}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Development Process
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
      </div>
    ),

    posting: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <MapPin className="h-5 w-5" />
            Posting Locations
          </h2>
          <div className="mt-4 space-y-3">
            {POSTING_LOCATIONS.map((item) => (
              <div key={item.location} className="flex items-center justify-between rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--sa-gold)]" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.location}</span>
                </div>
                <span className={`rounded px-2 py-1 text-xs font-medium ${
                  item.priority === "Critical - high-privacy for victims"
                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                    : item.priority === "Required"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                }`}>
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={MapPin} title="Bathroom Posting Critical" variant="warning">
          Posting on the back of bathroom stall doors is <strong>critical</strong>. This provides
          a high-privacy location for victims to see resources without fear of being observed.
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
