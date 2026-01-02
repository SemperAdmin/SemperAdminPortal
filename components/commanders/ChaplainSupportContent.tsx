"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, Shield, AlertTriangle, Users } from "lucide-react";

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
  { id: "privilege", label: "100% Privilege" },
  { id: "roles", label: "Chaplain Roles" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "100% Privilege", value: "Unlike every other resource, Chaplains cannot be compelled to break confidentiality by anyone—including the CO or a Judge" },
  { label: "Spiritual Readiness", value: "Support Marines of all faiths and those of no faith" },
  { label: "Commander's Advisor", value: "Advises the CO on the 'moral and spiritual' health of the unit" },
  { label: "24/7 Availability", value: "Duty Chaplain available at all installations for emergency support" },
];

const PRIVILEGE_COMPARISON = [
  { resource: "Chaplain", privilege: "100% Absolute", notes: "Cannot be compelled to disclose anything, ever" },
  { resource: "MFLC", privilege: "Limited", notes: "Duty to Warn for harm to self/others" },
  { resource: "Medical/BH", privilege: "Limited", notes: "Documented in medical record; Duty to Warn applies" },
  { resource: "JAG/Legal", privilege: "Attorney-Client", notes: "Protected for legal matters only" },
  { resource: "Chain of Command", privilege: "None", notes: "No legal protection for disclosures" },
];

const CHAPLAIN_ROLES = [
  { role: "Counseling", description: "One-on-one spiritual and emotional support in complete confidentiality" },
  { role: "Crisis Intervention", description: "Often first responders in suicide intervention or casualty notification" },
  { role: "FPC Member", description: "Provides spiritual perspective to Force Preservation Council discussions" },
  { role: "Unit Engagement", description: "Regularly 'decks' (walks) unit workspaces to build rapport with Marines" },
  { role: "Religious Services", description: "Provides worship services, sacraments, and religious education" },
  { role: "Commander Advisor", description: "Advises CO on unit morale, ethics, and spiritual health" },
  { role: "Postvention", description: "Key leader in unit response following suicide or traumatic loss" },
];

const ENGAGEMENT_METHODS = [
  "Walking the decks—visiting workspaces regularly",
  "Attending PT, chow, and unit events",
  "Field exercises and deployments",
  "Office hours for walk-in counseling",
  "Hospital and brig visits",
  "Family support events",
];

const COMMON_ISSUES = [
  {
    issue: "Attempting to Break Privilege",
    solution: "Commanders asking a Chaplain 'What did the Marine say?' The Chaplain is legally required to refuse to answer. Never put a Chaplain in this position—respect the absolute privilege.",
  },
  {
    issue: "Underutilization",
    solution: "Marines may assume Chaplains are only for 'religious' issues. Emphasize that Chaplains support all Marines regardless of faith and provide confidential counseling on any topic.",
  },
  {
    issue: "Emergency Only Mentality",
    solution: "Waiting until a crisis to involve the Chaplain. Chaplains should be integrated into regular unit life to build rapport before crises occur.",
  },
];

export function ChaplainSupportContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="Chaplain Support" variant="info">
          Chaplains provide a <strong>unique and powerful resource</strong> for force preservation.
          They offer <strong>100% privileged communication</strong>, meaning a Marine can disclose
          anything—including criminal acts or suicidal ideation—without the Chaplain being required
          to report it to the command or medical.
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

        <InfoCard icon={Shield} title="Absolute Privilege" variant="warning">
          Unlike MFLCs, doctors, or lawyers, Chaplains have <strong>absolute privilege</strong>.
          They cannot be compelled to disclose anything a Marine tells them—by anyone,
          including the Commanding Officer or a court.
        </InfoCard>
      </div>
    ),

    privilege: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Privilege Comparison
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resource</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Privilege Level</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRIVILEGE_COMPARISON.map((item) => (
                  <tr key={item.resource} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.resource}</td>
                    <td className="py-3 pr-4">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                        item.privilege === "100% Absolute"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : item.privilege === "None"
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                      }`}>
                        {item.privilege}
                      </span>
                    </td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
            Why 100% Privilege Matters
          </h3>
          <p className="mt-2 text-sm text-green-700 dark:text-green-300">
            Some Marines will only disclose their struggles if they know it cannot be used
            against them. The Chaplain&apos;s absolute privilege creates a truly safe space
            for Marines to seek help without fear of career consequences.
          </p>
        </div>
      </div>
    ),

    roles: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Chaplain Roles
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Role</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {CHAPLAIN_ROLES.map((item) => (
                  <tr key={item.role} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.role}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Engagement Methods
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Chaplains build rapport through regular presence:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ENGAGEMENT_METHODS.map((method) => (
              <span key={method} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {method}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>24/7:</strong> A Duty Chaplain is available at all installations for emergency support</li>
            <li>&bull; <strong>Regular:</strong> Chaplain should attend FPCs and unit events</li>
          </ul>
        </section>

        <InfoCard icon={Users} title="For All Marines" variant="default">
          Chaplains support Marines of <strong>all faiths and those of no faith</strong>.
          Their counseling services are available to everyone, not just religious Marines.
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
