"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Share2, AlertTriangle, Shield, Users } from "lucide-react";

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
  { id: "guidelines", label: "Guidelines" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Conduct Online", value: "Same UCMJ and PAC order rules apply online; disrespect and harassment are punishable" },
  { label: "Endorsements", value: "Marines may not use official position or uniform to endorse products, candidates, or causes" },
  { label: "Unit Pages", value: "Official pages must be registered and managed by authorized representative (COMMSTRAT/URC)" },
  { label: "OPSEC", value: "Commanders responsible for ensuring Marines do not violate operational security online" },
];

const PROHIBITED_ACTIVITIES = [
  "Using rank or position to endorse commercial products or services",
  "Partisan political activity while in uniform or using official position",
  "Posting classified or operationally sensitive information",
  "Harassment, hazing, or bullying of other service members",
  "Disrespect to seniors or the chain of command",
  "Posting photos that violate OPSEC (geotagged locations, equipment details)",
];

const PERMITTED_ACTIVITIES = [
  "Personal expression of political views (without using official position)",
  "Sharing unclassified unit accomplishments and events",
  "Professional networking and career development",
  "Morale and welfare posts that do not violate OPSEC",
  "Recruiting support (with proper authorization)",
];

const PROCESS_STEPS = [
  "Establish Guidelines: Publish a policy letter outlining expectations for online behavior",
  "Appoint Admins: Ensure official pages have at least two designated administrators",
  "Register Pages: Register official unit pages with COMMSTRAT",
  "Training: Include social media training in annual training plan",
  "Monitor: Regularly review unit's digital footprint for OPSEC violations or unprofessional conduct",
  "Action: Address inappropriate behavior immediately through appropriate channels",
];

const OPSEC_CONCERNS = [
  { concern: "Geotagging", description: "GPS metadata in photos revealing unit location" },
  { concern: "Aggregation", description: "Combining innocuous posts to reveal sensitive info" },
  { concern: "Check-ins", description: "Location-based posts revealing patterns of life" },
  { concern: "Equipment Photos", description: "Detailed images of sensitive systems or capabilities" },
];

const COMMON_ISSUES = [
  {
    issue: "Geotagging",
    solution: "Marines posting photos from 'undisclosed locations' with GPS metadata active, compromising unit position. Train Marines to disable location services and strip metadata before posting.",
  },
  {
    issue: "Political activity",
    solution: "Marines engaging in partisan political arguments while their profile clearly identifies them as a member of the unit. Counsel on proper separation of personal views from official position.",
  },
  {
    issue: "Hazing videos",
    solution: "Marines posting 'initiation' or hazing-related content to social media. This is both a UCMJ violation and a public affairs disaster. Take immediate disciplinary action.",
  },
];

export function SocialMediaPolicyContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Share2} title="Social Media Policy" variant="info">
          Social media is an <strong>extension of the workplace</strong>. Commanders are
          responsible for maintaining a professional online environment and ensuring that
          their Marines do not violate <strong>OPSEC</strong> or the <strong>UCMJ</strong>
          while using these platforms.
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

        <InfoCard icon={Shield} title="Annual Training Required" variant="warning">
          Social media training should be included in the unit&apos;s <strong>annual training
          plan</strong>. Ensure all Marines understand OPSEC and conduct requirements.
        </InfoCard>
      </div>
    ),

    guidelines: (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-red-700 dark:text-red-400">
              Prohibited Activities
            </h2>
            <ul className="mt-4 space-y-2">
              {PROHIBITED_ACTIVITIES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-green-700 dark:text-green-400">
              Permitted Activities
            </h2>
            <ul className="mt-4 space-y-2">
              {PERMITTED_ACTIVITIES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OPSEC Concerns
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Concern</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {OPSEC_CONCERNS.map((item) => (
                  <tr key={item.concern} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.concern}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="The UCMJ Applies Online" variant="warning">
          Violations of the UCMJ on social media are <strong>punishable</strong> the same
          as in-person violations. Article 134 (conduct prejudicial to good order and discipline)
          applies to online behavior.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Social Media Management Process
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

        <InfoCard icon={Users} title="Two-Admin Rule" variant="default">
          Official unit pages must have at least <strong>two designated administrators</strong>
          to ensure continuity and oversight. Register all official pages with COMMSTRAT.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Policy Letter Elements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Clear statement that UCMJ applies to online conduct</li>
            <li>&bull; Prohibition on endorsements using official position</li>
            <li>&bull; OPSEC requirements and geotagging guidance</li>
            <li>&bull; Political activity restrictions</li>
            <li>&bull; Reporting procedures for violations</li>
            <li>&bull; Consequences for non-compliance</li>
          </ul>
        </section>
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
