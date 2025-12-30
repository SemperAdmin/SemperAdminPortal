"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

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
  { id: "war-college-options", label: "War College Options" },
  { id: "curriculum", label: "Curriculum" },
  { id: "selection-process", label: "Selection Process" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

export function WarCollegeContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            War College
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            War College represents the highest level of Professional Military Education, preparing senior officers for strategic leadership positions. Marine Corps War College (MCWAR) and other service/joint war colleges provide senior-level education. Completion is required for promotion to Colonel and General Officer.
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
                  <td className="py-2 pr-4 font-medium">Level</td>
                  <td className="py-2">Senior PME</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Duration</td>
                  <td className="py-2">10 months (resident)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Location</td>
                  <td className="py-2">Quantico (MCWAR) or other service/joint colleges</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Eligibility</td>
                  <td className="py-2">Lieutenant Colonels, select Colonels</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Degree</td>
                  <td className="py-2">Master of Strategic Studies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "war-college-options": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            War College Options
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Corps War College (MCWAR)</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Located at Marine Corps University, Quantico</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Focus on strategic leadership</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Joint and international students</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Master of Strategic Studies degree</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Joint and Service War Colleges</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">College</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Service</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">National War College</td>
                  <td className="py-2">Joint (NDU)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Eisenhower School</td>
                  <td className="py-2">Joint (NDU)</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Army War College</td>
                  <td className="py-2">Army</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Naval War College</td>
                  <td className="py-2">Navy</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Air War College</td>
                  <td className="py-2">Air Force</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Resident Options</h3>
          <div className="mt-4">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">National Defense University Programs</h4>
            <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>Distance learning available</li>
              <li>Part-time completion</li>
              <li>Satisfies senior PME requirement</li>
            </ul>
          </div>
        </section>
      </div>
    ),

    curriculum: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Curriculum Focus
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            War College curriculum prepares senior leaders for strategic-level responsibilities.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Core Areas</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Area</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">National Security Strategy</td>
                  <td className="py-2">Policy development, implementation</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Theater Strategy</td>
                  <td className="py-2">Combatant command operations</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Strategic Leadership</td>
                  <td className="py-2">Senior leader competencies</td>
                </tr>
                <tr className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-medium">Joint/Combined Operations</td>
                  <td className="py-2">Multi-service, multinational</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">International Relations</td>
                  <td className="py-2">Diplomacy, alliances</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    "selection-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Selection Process
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board Selection</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>HQMC conducts annual selection board</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Based on record, potential, needs of Marine Corps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Highly competitive</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Limited quotas</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Factors Considered</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Performance record</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Potential for senior command</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Career timing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--sa-red)]">•</span>
              <span>Marine Corps requirements</span>
            </li>
          </ul>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            War College Preparation Checklist
          </h2>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Selection</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Complete intermediate-level PME (CSC/CSCDEP)",
              "Build strong performance record",
              "Demonstrate strategic potential",
              "Understand selection timeline",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">After Selection</h3>
          <ul className="mt-3 space-y-2">
            {[
              "PCS to school location",
              "Family coordination for 10-month program",
              "Prepare for graduate-level academics",
              "Review strategic-level publications",
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
