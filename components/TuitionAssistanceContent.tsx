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
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility-and-coverage", label: "Eligibility & Coverage" },
  { id: "application-process", label: "Application Process" },
  { id: "ta-and-jepes", label: "TA and JEPES" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function TuitionAssistanceContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tuition Assistance (TA)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Tuition Assistance pays for college courses while you serve on active duty. TA covers up to $250 per semester hour with a $4,500 annual cap. Using TA allows you to earn degrees and certifications without using your GI Bill benefits. TA completion also contributes to JEPES Mental Agility score for junior enlisted.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Element</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Per Semester Hour</td>
                  <td className="py-2">Up to $250</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Annual Cap</td>
                  <td className="py-2">$4,500</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Fiscal Year</td>
                  <td className="py-2">October 1 - September 30</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Eligible Schools</td>
                  <td className="py-2">Accredited institutions</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Approval</td>
                  <td className="py-2">Command and Education Center</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Authority</td>
                  <td className="py-2"><MCOLink mco="MCO 1560.25B" url={MCO_URLS.TUITION_ASSISTANCE} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "eligibility-and-coverage": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TA Eligibility
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Basic Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Active duty Marine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Time remaining on contract (typically 2 years)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Not under administrative/legal action</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Command approval</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Meets education center requirements</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">
            Service Obligation: Using TA may incur service obligation. Check current policy for specific requirements.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TA Coverage</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Item</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Covered</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Tuition</td>
                  <td className="py-2">Yes (up to $250/SH)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Fees</td>
                  <td className="py-2">Limited coverage</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Books</td>
                  <td className="py-2">No</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Room/board</td>
                  <td className="py-2">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">
            Annual Limit: $4,500 per fiscal year. Unused amount does not carry over. Plan courses to maximize benefit.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Approved Schools</h3>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>Accredited by recognized agency</li>
                <li>Signed DOD MOU</li>
                <li>Listed on DOD approved school list</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Find Approved Schools</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Visit https://www.dodmou.com</li>
                <li>Search for school</li>
                <li>Verify DOD MOU status</li>
                <li>Confirm TA acceptance</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grade Requirements</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Situation</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Repayment Required</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Passing grade</td>
                  <td className="py-2">No</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Failing grade</td>
                  <td className="py-2">Yes</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Withdrawal (no approved reason)</td>
                  <td className="py-2">Yes</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Withdrawal (approved reason)</td>
                  <td className="py-2">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "application-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TA Application Process
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step-by-Step</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Meet with Education Center counselor</li>
            <li>Develop education plan</li>
            <li>Register for approved course</li>
            <li>Complete TA request in system (WebTA or current system)</li>
            <li>Obtain command approval</li>
            <li>TA submitted to school</li>
            <li>Attend and complete course</li>
            <li>Grades reported</li>
          </ol>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">
            Timeline: Request TA before course start date. Allow processing time (varies). Do not start class without TA approval.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">WebTA / TA Management System</h3>
          <h4 className="mt-4 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accessing the System</h4>
          <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Log into WebTA (or current TA system)</li>
            <li>Create education plan</li>
            <li>Request TA for specific courses</li>
            <li>Track approval status</li>
            <li>View TA usage and remaining balance</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TA and GI Bill</h3>
          <div className="mt-4 space-y-3">
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Using Both</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                <li>TA covers tuition</li>
                <li>GI Bill (Top-Up) covers difference if costs exceed TA</li>
                <li>Preserves GI Bill for post-service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Top-Up</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                GI Bill Top-Up pays difference between TA and actual costs. Uses GI Bill entitlement.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    "ta-and-jepes": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TA and JEPES
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mental Agility Score</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For junior enlisted, education contributes to JEPES:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>College credits (CEUs)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Degree completion (Associates, Bachelors)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Higher degree = more points</span>
            </li>
          </ul>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tuition Assistance Checklists
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Using TA</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Visit Education Center",
              "Develop education plan",
              "Verify school is DOD-approved",
              "Check TA balance for fiscal year",
              "Obtain command approval",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Each Semester</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Register for approved courses",
              "Submit TA request before class starts",
              "Verify TA approval",
              "Attend all classes",
              "Complete course requirements",
              "Verify grades submitted",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
