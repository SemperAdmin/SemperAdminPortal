"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "nam-ncm", label: "NAM/NCM Format" },
  { id: "msm-above", label: "MSM and Above" },
  { id: "opening-closing", label: "Opening/Closing" },
  { id: "additional-rules", label: "Additional Rules" },
  { id: "references", label: "References", type: "references" as const },
];

export function CitationFormatRequirementsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Citation Format Requirements</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Every citation follows a specific format. The format changes based on the award level. Failure to follow
            the prescribed format delays the award and may cause rejection.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Critical</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Each award level has strict formatting requirements including character limits, capitalization rules,
            font specifications, and layout orientation. Review the specific requirements for the award level you
            are submitting before drafting the citation.
          </p>
        </div>
      </section>
    ),
    "nam-ncm": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAM/NCM Format Requirements</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Navy and Marine Corps Achievement Medals and Navy and Marine Corps Commendation Medals use the following format:
          </p>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Maximum Lines:</strong> 8 lines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Maximum Characters:</strong> 1,250 characters</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Capitalization:</strong> ALL CAPS (entire citation must be uppercase)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Font:</strong> Times New Roman, 10 point</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Layout:</strong> Landscape orientation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Justification:</strong> Full justification</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Remember</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            The 8-line and 1,250-character limits are maximums. Use the iAPS "print PDF" function to verify your
            citation meets these requirements before submitting. Citations exceeding these limits will be returned.
          </p>
        </div>
      </section>
    ),
    "msm-above": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MSM and Higher Format Requirements</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Meritorious Service Medals and all awards above MSM use the following format:
          </p>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Maximum Lines:</strong> 23 lines</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Maximum Characters:</strong> 1,650 (MSM) to 1,670 characters (higher awards)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Capitalization:</strong> Standard sentence case (natural capitalization)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Font:</strong> Courier New, 12 pitch</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Layout:</strong> Portrait orientation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Justification:</strong> Full justification</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Difference</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Unlike NAM/NCM citations that are in ALL CAPS, MSM and higher awards use standard sentence case.
            This means proper nouns are capitalized, but the text flows naturally with uppercase and lowercase
            letters as in normal writing.
          </p>
        </div>
      </section>
    ),
    "opening-closing": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opening Sentences</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900/20">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">NAM Opening</h4>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-mono">
                "FOR PROFESSIONAL ACHIEVEMENT IN THE SUPERIOR PERFORMANCE OF HIS (HER) DUTIES WHILE SERVING AS
                (BILLET TITLE), (UNIT) FROM (MONTH AND YEAR) TO (MONTH AND YEAR)."
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900/20">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">NCM Opening</h4>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-mono">
                "FOR MERITORIOUS SERVICE WHILE SERVING AS (BILLET TITLE), (UNIT) FROM (MONTH AND YEAR) TO
                (MONTH AND YEAR)."
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Closing Sentences</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900/20">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">NAM/NCM Closing</h4>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 font-mono">
                "(RANK AND NAME)'S (TRAIT), (TRAIT), AND (ADJECTIVE) DEDICATION TO DUTY REFLECTED CREDIT UPON
                (HIM/HER) AND WERE IN KEEPING WITH THE HIGHEST TRADITIONS OF THE MARINE CORPS AND THE UNITED
                STATES NAVAL SERVICE."
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-900/20">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Air Medal and Above Closing</h4>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Use "great credit" instead of "credit" in the closing sentence.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Retirement Awards</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For retirement awards, insert the following sentence above the closing:
          </p>
          <div className="mt-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900/20">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
              "(Rank and Name)'s superior performance of duties culminated (his/her) (total years of service)
              years of honorable and dedicated military service."
            </p>
          </div>
        </div>
      </section>
    ),
    "additional-rules": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Citation Requirements</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            All citations must follow these additional rules:
          </p>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>No Acronyms:</strong> Do not use acronyms, jargon, or abbreviations. Write out all terms in full.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>No Text Formatting:</strong> Do not use bold, italic, or underline text formatting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>No Classified Information:</strong> Citations must not contain classified information. They become part of the public record.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Date Matching:</strong> The dates in the citation must exactly match the dates entered in Block 25 on the OPNAV 1650/3 form.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Mistakes</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            Using acronyms like "USMC" or "CO" will result in the citation being returned. Write "United States
            Marine Corps" and "Commanding Officer" instead. Similarly, do not abbreviate unit names or locations.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
