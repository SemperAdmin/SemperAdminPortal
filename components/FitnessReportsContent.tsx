"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCO_URLS } from "@/data/references";

const MCOLink = ({ mco, url }: { mco: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
  >
    {mco}
  </a>
);

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

const KEY_POINTS: { label: string; value: string; url?: string }[] = [
  { label: "Applies To", value: "Staff NCOs (E-6+) and Officers" },
  { label: "Authority", value: "MCO 1610.7A (Performance Evaluation System)", url: MCO_URLS.PES_PDF },
  { label: "System", value: "APES (Automated Performance Evaluation System)" },
  { label: "Frequency", value: "At least annually; more often as required" },
  { label: "Impact", value: "Selection boards, promotion, assignments" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "occasions", label: "Reporting Occasions" },
  { id: "evaluation", label: "Evaluation Process" },
  { id: "review", label: "Review & Filing" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const FITREP_OCCASIONS = [
  { occasion: "Annual", code: "AN", description: "Regular evaluation, typically on annual anniversary" },
  { occasion: "Change of Reporting Senior", code: "CH", description: "When reporting senior changes" },
  { occasion: "Observed Report", code: "OB", description: "New MRO after observed period" },
  { occasion: "Detachment of Individual", code: "TR", description: "When Marine transfers to new unit" },
  { occasion: "Directed", code: "DR", description: "Commander-directed evaluation" },
  { occasion: "Concurrent", code: "CO", description: "For additional duties under different RO" },
];

const RELATIVE_VALUE = [
  { section: "Section A", name: "Marine Reported On (MRO)", description: "Identification information" },
  { section: "Section B", name: "Reporting Senior (RS)", description: "Primary evaluator information" },
  { section: "Section C", name: "Reviewed by", description: "Reviewing officer information" },
  { section: "Section D", name: "Billet Description", description: "Duties and responsibilities" },
  { section: "Section E", name: "Narrative", description: "Written evaluation of performance" },
  { section: "Section F", name: "Attributes", description: "Scored evaluation categories" },
  { section: "Section G", name: "Relative Value", description: "Comparative ranking" },
];

const ATTRIBUTE_CATEGORIES = [
  { category: "Mission Accomplishment", description: "How well duties are accomplished" },
  { category: "Individual Character", description: "Integrity, courage, and professionalism" },
  { category: "Leadership", description: "Ability to lead and develop subordinates" },
  { category: "Intellect and Wisdom", description: "Problem solving and judgment" },
  { category: "Physical Fitness", description: "Physical readiness and appearance" },
];

const RELATIVE_VALUE_MARKS = [
  { mark: "A", description: "Ably performed duties; ready for increased responsibility" },
  { mark: "B", description: "Progressing; with experience will be ready" },
  { mark: "C", description: "Potential for increased responsibility uncertain" },
  { mark: "D", description: "Does not possess potential for increased responsibility" },
  { mark: "E", description: "Failed to meet standards" },
];

const REVIEW_TIMELINE = [
  { step: "RS completes evaluation in APES", timeframe: "Before reporting period ends" },
  { step: "MRO reviews and signs", timeframe: "Within 7 days of notification" },
  { step: "Reviewing Officer endorses", timeframe: "Within 7 days" },
  { step: "Final submission", timeframe: "Within 30 days of ending date" },
  { step: "Filed in OMPF", timeframe: "Automatically upon completion" },
];

export function FitnessReportsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Fitness Reports (FitReps)
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Fitness Reports are the official evaluation tool for Staff NCOs (E-6 and above) and Officers.
            They document performance, leadership, and potential for increased responsibility. FitReps
            are critical to career progression, serving as the primary basis for selection boards.
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
                      {point.url ? (
                        <MCOLink mco={point.value} url={point.url} />
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
            Key Participants
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Marine Reported On (MRO)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                The Marine being evaluated. Reviews and signs the completed FitRep.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reporting Senior (RS)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Primary evaluator. Observes performance and writes the evaluation.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Reviewing Officer (RO)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Senior to RS. Reviews and endorses or modifies the evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Career Impact</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            FitReps are the primary tool selection boards use to evaluate Marines for promotion.
            A consistent pattern of strong evaluations is essential for competitive selection.
            Marines should actively manage their careers and communicate accomplishments to their RS.
          </p>
        </section>
      </div>
    ),

    occasions: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reporting Occasions
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Occasion</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Code</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {FITREP_OCCASIONS.map((item) => (
                  <tr key={item.code} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.occasion}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.code}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Minimum Observation Period
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For most occasion codes, a minimum observation period is required before a FitRep can be written:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Annual: Full reporting period (typically 12 months)",
              "Transfer: Minimum 90 days observation",
              "Change of RS: Minimum 90 days under previous RS",
              "Observed: 90 days minimum observation by new RS",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When FitReps Are Required
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Required</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Annual anniversary</li>
                <li>• PCS transfer</li>
                <li>• Separation/retirement</li>
                <li>• Change of RS (if min period met)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">May Be Required</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Significant duty change</li>
                <li>• Deployment</li>
                <li>• Concurrent reporting</li>
                <li>• Commander-directed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Track Your Reporting Timeline</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Know your annual FitRep anniversary date and when your RS last wrote on you. Ensure no
            gaps exist in your reporting history. Missing reports can negatively impact selection boards.
          </p>
        </section>
      </div>
    ),

    evaluation: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FitRep Sections
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Section</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Name</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {RELATIVE_VALUE.map((item) => (
                  <tr key={item.section} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.section}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.name}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Attribute Categories
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Category</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {ATTRIBUTE_CATEGORIES.map((item) => (
                  <tr key={item.category} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.category}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Relative Value Marks
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Mark</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {RELATIVE_VALUE_MARKS.map((item) => (
                  <tr key={item.mark} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.mark}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">RS Profile</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Each Reporting Senior maintains a cumulative profile of all FitReps they write. Boards review
            where you fall relative to others the RS has evaluated. An &quot;A&quot; from a tough grader
            may be more valuable than an &quot;A&quot; from someone who gives everyone top marks.
          </p>
        </section>
      </div>
    ),

    review: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Review Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Step</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {REVIEW_TIMELINE.map((item) => (
                  <tr key={item.step} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.step}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MRO Review Rights
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            As the Marine Reported On, you have the right to:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Review the completed FitRep before signing",
              "Add a statement (rebuttal) if disagreeing with content",
              "Refuse to sign (report is still submitted)",
              "Request a copy for personal records",
              "Appeal through proper channels if warranted",
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
            OMPF Filing
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Once completed, FitReps are automatically filed in your OMPF (Official Military Personnel File).
            They become part of your permanent record and are available to selection boards.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Verify FitRep appears in OMPF within 30-60 days",
              "Check for any errors in filed copy",
              "Retain personal copy for records",
              "Request correction if errors found",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Adverse Reports</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If you receive an adverse FitRep (E or D relative value, or negative narrative), you
            should seriously consider adding a statement explaining the circumstances. Consult with
            legal assistance or a mentor before signing. Adverse FitReps significantly impact
            selection board outcomes.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Throughout Reporting Period
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Track accomplishments and significant events",
              "Document leadership actions and results",
              "Communicate regularly with reporting senior",
              "Maintain billet description awareness",
              "Know your annual anniversary date",
              "Prepare for evaluation discussions",
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
            When Reviewing FitRep
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify personal data is correct",
              "Check billet description accuracy",
              "Review narrative for factual accuracy",
              "Understand attribute markings",
              "Review relative value assessment",
              "Consider adding statement if needed",
              "Sign or indicate non-concurrence",
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
            After Filing
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify FitRep appears in OMPF",
              "Check for any filing errors",
              "Retain personal copy",
              "Review before selection boards",
              "Request corrections if needed",
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
