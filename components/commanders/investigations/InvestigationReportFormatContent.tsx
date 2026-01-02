"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "report-sections", label: "Report Sections" },
  { id: "reviewing-findings", label: "Reviewing Findings" },
  { id: "opinions-recs", label: "Opinions & Recommendations" },
  { id: "enclosures", label: "Enclosures" },
  { id: "quality-check", label: "Quality Check" },
  { id: "common-deficiencies", label: "Common Deficiencies" },
  { id: "references", label: "References", type: "references" as const },
];

export function InvestigationReportFormatContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Report Format</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            As the convening authority, you will review the completed investigation report.
            Understanding the required format helps you identify deficiencies and ensure
            the investigation meets standards before taking action.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0208 prescribes the format for
            command investigation reports.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Components</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Preliminary Statement</li>
            <li>Findings of Fact</li>
            <li>Opinions (if directed)</li>
            <li>Recommendations (if directed)</li>
            <li>Enclosures</li>
          </ol>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Note:</strong> Litigation-report investigations do NOT include opinions
            or recommendations unless you specifically directed them in the convening order.
          </p>
        </div>
      </section>
    ),
    "report-sections": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Sections</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Preliminary Statement</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The opening section should establish:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Authority (reference to your convening order)</li>
            <li>• Purpose (what the investigation was directed to determine)</li>
            <li>• Background (brief factual summary of events)</li>
            <li>• Scope (what was investigated, any limitations)</li>
            <li>• Summary of evidence gathered</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Findings of Fact</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The core of the report—numbered statements of fact based on evidence.
            Each finding should be supported by enclosures.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opinions and Recommendations</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Command investigations may include these if you directed them.
            They draw conclusions from findings and suggest actions.
          </p>
        </div>
      </section>
    ),
    "reviewing-findings": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reviewing Findings of Fact</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Findings are the foundation for your decisions. Review them carefully
            for quality and completeness.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Check Each Finding For</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Factual Basis:</strong> Is it a statement of fact, not opinion?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Evidence Support:</strong> Is there an enclosure citation? Does the enclosure actually support the finding?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Specificity:</strong> Are dates, times, names, and places included?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Clarity:</strong> Is it understandable without reading enclosures?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Completeness:</strong> Do findings address all questions from your convening order?</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Key Question:</strong> After reading the findings, can you answer
            all the questions you asked in the convening order?
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Finding Deficiencies</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Common problems to look for:</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Opinions masquerading as facts</li>
            <li>• Missing enclosure citations</li>
            <li>• Vague language (&quot;sometime in June&quot; vs. &quot;on 15 June&quot;)</li>
            <li>• Unsupported conclusions</li>
            <li>• Gaps in the factual timeline</li>
          </ul>
        </div>
      </section>
    ),
    "opinions-recs": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reviewing Opinions & Recommendations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you directed the IO to provide opinions and recommendations,
            review them for logical consistency with findings.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evaluating Opinions</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Are opinions based solely on the findings?</li>
            <li>• Do opinions reference which findings support them?</li>
            <li>• Are conclusions logical and supported?</li>
            <li>• Does the IO address fault, causation, or violations appropriately?</li>
            <li>• Is the IO direct when evidence supports a conclusion?</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evaluating Recommendations</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Are recommendations actionable?</li>
            <li>• Do they flow logically from opinions?</li>
            <li>• Are they within your authority to implement?</li>
            <li>• Are disciplinary recommendations proportionate?</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Remember:</strong> Recommendations are advisory. You are not bound
            by them but should document your reasoning if you disagree significantly.
          </p>
        </div>
      </section>
    ),
    enclosures: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reviewing Enclosures</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Enclosures contain the evidence supporting the investigation.
            A complete review includes checking the enclosures.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard Enclosure Order</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Enclosure 1:</strong> Convening Order (always first)</li>
            <li><strong>Enclosure 2:</strong> Appointing Order (if different)</li>
            <li><strong>Enclosures 3+:</strong> Witness statements</li>
            <li><strong>Subsequent:</strong> Documentary evidence, photos, records</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enclosure Quality Check</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Are all enclosures numbered and labeled?</li>
            <li>• Are witness statements signed?</li>
            <li>• Are proper warnings documented?</li>
            <li>• Is there an enclosure list?</li>
            <li>• Do cited enclosures actually support the findings?</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Spot Check:</strong> Pick a few findings and verify the cited
            enclosures actually support them. This catches sloppy work quickly.
          </p>
        </div>
      </section>
    ),
    "quality-check": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quality Check Checklist</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Use this checklist when reviewing a completed investigation report.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Format Requirements</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>☐ Preliminary statement references convening order</li>
            <li>☐ Findings are numbered sequentially</li>
            <li>☐ Each finding cites supporting enclosure(s)</li>
            <li>☐ Opinions reference supporting findings (if included)</li>
            <li>☐ Enclosure list is complete and accurate</li>
            <li>☐ Report is signed and dated by IO</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Substance Requirements</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>☐ All questions from convening order addressed</li>
            <li>☐ Findings are factual, not opinion</li>
            <li>☐ Evidence supports conclusions</li>
            <li>☐ Proper warnings given and documented</li>
            <li>☐ Key witnesses interviewed</li>
            <li>☐ Timeline is complete and makes sense</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SJA Review</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before taking action, have SJA review for legal sufficiency:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Proper procedures followed</li>
            <li>• Findings supported by evidence</li>
            <li>• Conclusions legally sound</li>
            <li>• Recommendations appropriate</li>
          </ul>
        </div>
      </section>
    ),
    "common-deficiencies": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Report Deficiencies</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Watch for these common problems that may require return for correction.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Procedural Deficiencies</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Missing or inadequate warnings</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Unsigned witness statements</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Missing enclosures</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Key witnesses not interviewed</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Investigation exceeded scope without authorization</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Substantive Deficiencies</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Convening order questions not answered</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Findings not supported by evidence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Opinions that go beyond findings</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Gaps in timeline or facts</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Contradictory findings</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Resolution:</strong> Return deficient reports to the IO with specific
            instructions on what needs correction. Set a new deadline.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
