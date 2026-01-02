"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Mic, AlertTriangle, MessageSquare, Users } from "lucide-react";

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
  { id: "preparation", label: "Preparation" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Authorized Spokespersons", value: "Only the Commander or designated personnel should speak on behalf of the command" },
  { label: "Maximum Disclosure", value: "DOD policy is to provide as much information as possible without compromising security" },
  { label: "On the Record", value: "Assume everything said to a journalist is on the record and will be attributed to you" },
  { label: "COMMSTRAT Coordination", value: "All media engagement requires coordination with Communication Strategy and Operations" },
];

const PREPARATION_ITEMS = [
  {
    item: "Fact Sheet",
    description: "One-page document with basic facts about the unit, mission, and relevant background",
  },
  {
    item: "Command Message",
    description: "3-5 key talking points that represent the official position of the command",
  },
  {
    item: "Anticipated Questions",
    description: "List of likely questions with approved responses developed with PAO",
  },
  {
    item: "Boundaries",
    description: "Clear understanding of what topics are off-limits (ongoing investigations, classified info)",
  },
];

const PROCESS_STEPS = [
  "Notification: Notify the higher HQ COMMSTRAT office immediately upon being contacted by media",
  "Preparation: Develop a Fact Sheet and Command Message with help from the PAO",
  "Rehearsal: Practice responses to anticipated questions; know your boundaries",
  "The Interview: Stick to your talking points; if you don't know an answer, say you will follow up—never speculate",
  "After-Action: Review the published piece to ensure accuracy and address any misquotes",
];

const INTERVIEW_TIPS = [
  "Bridge back to your key messages when asked tangential questions",
  "Speak in complete sentences that can stand alone as quotes",
  "Avoid military jargon; speak in terms the public understands",
  "Maintain professional bearing; cameras may be rolling before you realize",
  "Never say 'no comment'—instead explain why you cannot discuss a topic",
];

const COMMON_ISSUES = [
  {
    issue: "'Off the record' trap",
    solution: "Believing a journalist will keep comments private. There is no such thing as 'off the record' in a professional military capacity. Treat every word as quotable.",
  },
  {
    issue: "Unauthorized statements",
    solution: "Junior Marines speaking to media without authorization. Establish clear guidance on who may speak to media and train all hands on proper referral procedures.",
  },
  {
    issue: "Speculating on investigations",
    solution: "Providing details about ongoing investigations or legal proceedings. Always defer to 'the matter is under investigation' and refer to the appropriate authority.",
  },
];

export function MediaEngagementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Mic} title="Media Engagement" variant="info">
          Media engagement is an opportunity to tell the Marine Corps story to the American
          public. However, it requires careful coordination with <strong>Communication Strategy
          and Operations (COMMSTRAT)</strong> to ensure that the information provided is accurate,
          authorized, and does not compromise operational security.
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

        <InfoCard icon={AlertTriangle} title="Immediate Notification Required" variant="warning">
          Report all media queries to the next higher level of command <strong>immediately</strong>.
          Do not agree to interviews or provide statements without COMMSTRAT coordination.
        </InfoCard>
      </div>
    ),

    preparation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Preparation Materials
          </h2>
          <div className="mt-4 space-y-3">
            {PREPARATION_ITEMS.map((item) => (
              <div key={item.item} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.item}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Interview Tips
          </h3>
          <ul className="mt-4 space-y-2">
            {INTERVIEW_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={MessageSquare} title="Bridge to Your Message" variant="default">
          When asked difficult or tangential questions, use bridging phrases like
          &quot;What&apos;s important to understand is...&quot; to redirect back to your key messages.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Media Engagement Process
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

        <InfoCard icon={Users} title="PAO Support" variant="default">
          Your Public Affairs Officer (PAO) or COMMSTRAT representative is your partner
          in successful media engagement. Involve them early and often in the preparation process.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After the Interview
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Request to review quotes before publication if possible</li>
            <li>&bull; Monitor the story when published</li>
            <li>&bull; Document any inaccuracies or misquotes</li>
            <li>&bull; Work with PAO to request corrections if needed</li>
            <li>&bull; Conduct after-action review with COMMSTRAT</li>
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
