"use client";

import { Fragment } from "react";
import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCOLink, KeyPointWithLinks, KeyPointLink } from "./ui/MCOLink";
import { MCO_URLS } from "@/data/references";



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

const KEY_POINTS: KeyPointWithLinks[] = [
  {
    label: "Authority",
    value: "MCO 1900.16 (Separation), MCO 6110.3A (BCP/PFT/CFT)",
    links: [
      { text: "MCO 1900.16 (Separation)", url: MCO_URLS.MARCORSEPMAN_PDF },
      { text: "MCO 6110.3A (BCP/PFT/CFT)", url: MCO_URLS.BCP },
    ],
  },
  { label: "Standards", value: "Physical fitness, body composition, professional performance" },
  { label: "Approach", value: "Progressive counseling and opportunity to improve" },
  { label: "Characterization", value: "Typically Honorable or General (Under Honorable)" },
  { label: "Board Eligibility", value: "If 6+ years of service" },
];

const PERFORMANCE_STANDARDS = [
  {
    standard: "Physical Fitness Test (PFT)",
    requirement: "Minimum 3rd class (135 points)",
    consequence: "Failure may result in separation",
    authority: "MCO 6110.3A",
    authorityUrl: MCO_URLS.BCP,
  },
  {
    standard: "Combat Fitness Test (CFT)",
    requirement: "Minimum 3rd class (150 points)",
    consequence: "Failure may result in separation",
    authority: "MCO 6110.3A",
    authorityUrl: MCO_URLS.BCP,
  },
  {
    standard: "Body Composition Program (BCP)",
    requirement: "Meet height/weight or body fat standards",
    consequence: "Failure after 6 months may result in separation",
    authority: "MCO 6110.3A",
    authorityUrl: MCO_URLS.BCP,
  },
  {
    standard: "Professional Performance",
    requirement: "Satisfactory duty performance",
    consequence: "Continued substandard performance may result in separation",
    authority: "MCO 1900.16",
    authorityUrl: MCO_URLS.MARCORSEPMAN_PDF,
  },
];

const PROGRESSIVE_ACTIONS = [
  { step: "Initial Counseling", description: "Verbal or written counseling on deficiency", action: "Document and set improvement goals" },
  { step: "6105 Page 11", description: "Administrative remarks entry documenting deficiency", action: "Marine acknowledges and signs" },
  { step: "Opportunity to Improve", description: "Reasonable time to correct deficiencies (typically 90-180 days)", action: "Progress monitored and documented" },
  { step: "Follow-up Assessment", description: "Reevaluate Marine's performance or fitness", action: "Pass: retain; Fail: separate" },
  { step: "Separation Processing", description: "Initiate administrative separation if no improvement", action: "Notification and due process rights" },
];

const PFT_CFT_FAILURE = [
  {
    category: "First Failure",
    consequence: "6105 counseling, placed on remedial PT",
    timeline: "Retest within 90 days"
  },
  {
    category: "Second Consecutive Failure",
    consequence: "Additional counseling, continued remedial PT",
    timeline: "Retest within 90 days"
  },
  {
    category: "Third Consecutive Failure",
    consequence: "Process for administrative separation",
    timeline: "Separation processing begins"
  },
];

const BCP_TIMELINE = [
  { phase: "Entry to BCP", description: "Exceed height/weight or body fat standards", action: "Enrolled in BCP, given goals" },
  { phase: "Monthly Weigh-ins", description: "Progress monitored monthly", action: "Counseling if no progress" },
  { phase: "6 Month Mark", description: "Must meet standards or show progress", action: "6105 if no progress toward goals" },
  { phase: "Continued Failure", description: "Fail to meet standards after reasonable time", action: "Process for separation" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "standards", label: "Standards" },
  { id: "progressive-actions", label: "Progressive Actions" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function FailureToMeetStandardsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Failure to Meet Standards
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Marines are expected to maintain high standards of physical fitness, body composition, and
            professional performance. Continued failure to meet these standards may result in administrative
            separation. The Marine Corps uses a progressive approach, providing counseling and opportunities
            to improve before initiating separation proceedings.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.links ? (
                        <>
                          {point.links.map((link, index) => (
                            <Fragment key={link.url}>
                              {index > 0 && ", "}
                              <MCOLink mco={link.text} url={link.url} />
                            </Fragment>
                          ))}
                        </>
                      ) : (
                        point.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Progressive Discipline Philosophy
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The Marine Corps follows a progressive approach before separating Marines for failure to
            meet standards:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">1. Identify</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Document the deficiency or failure to meet standards
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">2. Counsel</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Provide clear expectations and opportunity to improve
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">3. Evaluate</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Assess progress; separate if no improvement
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Typical Characterization
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Separation for failure to meet standards typically results in:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Honorable: If overall service has been satisfactory despite failure to meet standards",
              "General (Under Honorable): More common for failure to meet standards",
              "The characterization depends on the Marine's complete record of service",
              "Multiple failures or lack of effort may result in General characterization",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Take Deficiencies Seriously</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If you receive counseling or a Page 11 for failure to meet standards, take it seriously.
            Use the opportunity to improve. The Marine Corps wants to retain Marines who demonstrate
            effort and improvement. Show your chain of command that you are committed to meeting standards.
          </p>
        </section>
      </div>
    ),

    standards: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Performance Standards
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Standard</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Consequence</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authority</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_STANDARDS.map((item) => (
                  <tr key={item.standard} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.standard}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.requirement}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.consequence}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      <MCOLink mco={item.authority} url={item.authorityUrl} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PFT/CFT Failure Process
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Consequence</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {PFT_CFT_FAILURE.map((item) => (
                  <tr key={item.category} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.category}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.consequence}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> Separation is not automatic on third failure. The command may provide
              additional opportunities based on the Marine&apos;s overall record and demonstrated effort.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Body Composition Program Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Phase</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {BCP_TIMELINE.map((item) => (
                  <tr key={item.phase} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.phase}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Professional Performance Standards
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines may be separated for continued failure to meet professional performance standards:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Examples of Deficiencies</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Repeated failure to complete training</li>
                <li>• Inability to qualify with weapon</li>
                <li>• Chronic tardiness or absences</li>
                <li>• Substandard work quality</li>
                <li>• Failure to follow orders</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Documentation Required</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Counseling statements</li>
                <li>• Page 11 entries</li>
                <li>• Performance evaluations</li>
                <li>• Training records</li>
                <li>• Evidence of opportunity to improve</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Medical Issues vs. Lack of Effort</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            If you are struggling with fitness standards due to a medical condition, seek medical attention
            immediately. Document all medical issues. The Marine Corps distinguishes between inability
            due to medical conditions (which may lead to medical separation) and lack of effort (which
            leads to administrative separation). Do not hide medical issues.
          </p>
        </section>
      </div>
    ),

    "progressive-actions": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Progressive Actions
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {PROGRESSIVE_ACTIONS.map((item) => (
                  <tr key={item.step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.step}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Opportunity to Correct Deficiencies
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before initiating separation, the command must provide a reasonable opportunity to improve:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Time to correct: Typically 90-180 days depending on the deficiency",
              "Remedial training: Provided for fitness or performance deficiencies",
              "Resources: Access to gyms, training, counseling as appropriate",
              "Monitoring: Regular assessment of progress toward goals",
              "Documentation: All counseling and progress must be documented",
              "Fair chance: Commands must demonstrate they gave Marine opportunity to succeed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            6105 Counseling (Page 11)
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A 6105 counseling entry is a formal administrative warning documented in your service record:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Purpose</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Document deficiency</li>
                <li>• Set clear expectations</li>
                <li>• Warn of potential separation</li>
                <li>• Establish timeline for improvement</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Your Rights</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Review before signing</li>
                <li>• Add written statement</li>
                <li>• Consult with legal assistance</li>
                <li>• Request copy for records</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Demonstrating Improvement
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            To avoid separation, you must demonstrate genuine effort and improvement:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Attend all remedial training sessions",
              "Document your efforts (training logs, gym attendance, etc.)",
              "Seek help from peers, NCOs, or professionals",
              "Show incremental progress toward goals",
              "Maintain positive attitude and military bearing",
              "Meet all other standards while improving deficiency",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Document Your Efforts</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Keep detailed records of your improvement efforts. If separation proceedings begin, you can
            submit evidence of your efforts and progress. Even if you haven&apos;t fully met the standard yet,
            demonstrating genuine effort and incremental improvement can influence the separation decision
            and characterization.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If You Receive Initial Counseling
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Take the counseling seriously",
              "Ask questions to understand expectations",
              "Request written counseling if only verbal",
              "Develop a personal improvement plan",
              "Identify resources available to help",
              "Set specific, measurable goals",
              "Begin working on improvement immediately",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If You Receive a 6105 Page 11
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Read the entry carefully and completely",
              "Note deadlines for improvement",
              "Consider adding a statement (consult legal assistance first)",
              "Do not refuse to sign (signing acknowledges receipt, not agreement)",
              "Request copy for your personal records",
              "Understand this is serious step toward possible separation",
              "Intensify improvement efforts immediately",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During Improvement Period
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Attend all remedial training sessions",
              "Document all improvement efforts (keep personal log)",
              "Track progress toward goals",
              "Seek help from peers, NCOs, or mentors",
              "Address any medical issues affecting performance",
              "Maintain all other standards",
              "Communicate regularly with leadership about progress",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            If Separation is Initiated
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Contact Legal Assistance immediately",
              "Gather all documentation of improvement efforts",
              "Obtain letters of recommendation from supervisors",
              "Collect copies of awards and positive evaluations",
              "Document any extenuating circumstances",
              "Prepare written statement explaining efforts and requesting retention",
              "Submit response before deadline",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
